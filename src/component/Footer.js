import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18n from "i18next";

function Footer() {
    const { t } = useTranslation();

    const snsLink = [
        {
            name: "instargram",
            link: "https://www.instagram.com/zipshowkorea/"
        },
        {
            name: "blog",
            link: "https://blog.naver.com/zipshowkorea"
        },
        {
            name: "youtube",
            link: "https://www.youtube.com/channel/UC3zJz6XURcSkkqMBMpEUiKA"
        },
    ];

    const downloadFile = () => {
        const language = i18n.language;
        const fileName = language === "en" ? "zipshowkorea_en.pdf" : "zipshowkorea_kr.pdf";
        const url = `/images/common/${fileName}`;

        fetch(url, { method: 'GET' })
            .then((res) => res.blob())
            .then((blob) => {
                const pdfBlob = new Blob([blob], { type: "application/pdf" });
                const downloadUrl = window.URL.createObjectURL(pdfBlob);
                const a = document.createElement('a');
                a.href = downloadUrl;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                setTimeout(() => {
                    window.URL.revokeObjectURL(downloadUrl);
                }, 60000);
                a.remove();
            })
            .catch((err) => {
                console.error('Download error: ', err);
            });
    };


    return (
        <>
            {/* pc footer */}
            <div className="border-t border-[#333] px-60 py-20 lg:block hidden">
                <div className="inline-block pb-10">
                    <Link
                        to="/"
                        onClick={(e) => {
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                window.scrollTo(0, 0);
                                window.location.reload();
                            }
                        }}
                    >
                        <img src="/images/common/logo_f.svg" alt="logo_f" className="w-[208px]"/>
                    </Link>
                </div>
                <div>
                    <div className="text-[15px] text-[#999] leading-[26px]">
                        <p className="flex gap-x-5">
                            <span
                                className="relative after:absolute after:w-[1px] after:h-3.5 after:bg-[#999] after:top-1/2 after:-translate-y-1/2 after:-right-2.5">
                                {/*(주)집쇼코리아*/}
                                {t('footer_list1')}
                            </span>
                            <span>{/*CEO : 홍상용*/}{t('footer_list2')}</span>
                        </p>
                        <p className="flex gap-x-5">
                            <span
                                className="relative after:absolute after:w-[1px] after:h-3.5 after:bg-[#999] after:top-1/2 after:-translate-y-1/2 after:-right-2.5">
                                {/*사업자등록번호 : 388-88-01168*/}
                                {t('footer_list3')}
                            </span>
                            <span>{/*통신판매업신고번호 : 제2020-인천부평-0929호*/}{t('footer_list4')}</span>
                        </p>
                        <p className="flex gap-x-5">
                            <span
                                className="relative after:absolute after:w-[1px] after:h-3.5 after:bg-[#999] after:top-1/2 after:-translate-y-1/2 after:-right-2.5">
                                {/*비디오물제작업신고번호 : 제2020-인천부평-0929호*/}
                                {t('footer_list5')}
                            </span>
                            <span
                                className="relative after:absolute after:w-[1px] after:h-3.5 after:bg-[#999] after:top-1/2 after:-translate-y-1/2 after:-right-2.5">
                                {/*소프트웨어사업자신고번호 : B21-222455*/}
                                {t('footer_list6')}
                            </span>
                            <span>{/*출판사신고번호 : 제2021-000012호*/}{t('footer_list7')}</span>
                        </p>
                        <br/>
                        <p>{/*인천광역시 부평구 부평대로 293, 부평테크시티 905호*/}{t('footer_list8')}</p>
                        <div className="flex justify-between items-center mt-[30px]">
                            <p className="text-[#757575]">
                                {/*ⓒ 2024. (주)집쇼코리아 all rights reserved.*/}
                                {t('footer_list9')}
                            </p>
                            <ul className="flex items-center gap-x-5">
                                <li
                                    onClick={downloadFile}
                                    className="cursor-pointer text-[#ccc] flex gap-x-[10px] py-[10px] px-5 border border-[#666] rounded-full mr-5">
                                    <p>{/*회사소개서 다운로드*/}{t('footer_download')}</p>
                                    <img src="/images/common/download.svg" alt="download"/>
                                </li>
                                {
                                    snsLink.map((e, i) => {
                                        return (
                                            <li key={i} className="w-8 h-8">
                                                <Link to={e.link} target="_blank">
                                                    <img src={`/images/common/icon_${e.name}.svg`} alt={e.name}
                                                         className="w-full h-full"/>
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile footer */}
            <div className="lg:hidden block w-full h-auto bg-[#111] py-[60px] px-8 border-t border-[#333]">
                <div className="inline-block pb-10">
                    <Link
                        to="/"
                        onClick={(e) => {
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                window.scrollTo(0, 0);
                                window.location.reload();
                            }
                        }}
                    >
                        <img src="/images/common/logo_f.svg" alt="logo_f" className="w-[168px]"/>
                    </Link>
                </div>
                <div className="text-[#999] text-sm leading-[22px]">
                    <p className="flex gap-x-5">
                        <span
                            className="relative after:absolute after:w-[1px] after:h-3.5 after:bg-[#999] after:top-1/2 after:-translate-y-1/2 after:-right-2.5">
                            {/*(주)집쇼코리아*/}
                            {t('footer_list1')}
                        </span>
                        <span>{/*CEO : 홍상용*/}{t('footer_list2')}</span>
                    </p>
                    <p>{/*사업자등록번호 : 388-88-01168*/}{t('footer_list3')}</p>
                    <p>{/*통신판매업신고번호 : 제2020-인천부평-0929호*/}{t('footer_list4')}</p>
                    <p>{/*비디오물제작업신고번호 : 제2020-인천부평-0929호*/}{t('footer_list5')}</p>
                    <p>{/*소프트웨어사업자신고번호 : B21-222455*/}{t('footer_list6')}</p>
                    <p>{/*출판사신고번호 : 제2021-000012호*/}{t('footer_list7')}</p>
                    <br/>
                    <p>{/*인천광역시 부평구 부평대로 293, 부평테크시티 905호*/}{t('footer_list8')}</p>
                    <p className="text-[#757575] mt-[30px]">{/*ⓒ 2024. (주)집쇼코리아 all rights reserved.*/}{t('footer_list9')}</p>
                </div>
                <div className="flex text-[#ccc] gap-x-3 pt-10 pb-5 text-sm">
                    <div
                        onClick={downloadFile}
                        className="border border-[#666] rounded-full px-4 py-2 cursor-pointer flex items-center">
                        <p>{/*회사소개서 다운로드*/}{t('footer_download')}</p>
                        <img src="/images/common/download.svg" alt="download" className="inline-block pl-[10px]"/>
                    </div>
                </div>
                <div className="flex gap-x-3">
                    {
                        snsLink.map((e, i) => {
                            return (
                                <Link to={e.link} key={i} target="_blank">
                                    <img src={`/images/common/icon_${e.name}.svg`} alt={e.name}/>
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

Footer.propTypes = {};

export default Footer;