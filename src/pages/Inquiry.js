import React, {useState} from 'react';
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Contact() {
    const { t } = useTranslation();
    const projectsFormArray = [
        t('inquiry_projectsFormArray_1'), // "디지털 미디어아트",
        "AR/VR",
        t('inquiry_projectsFormArray_3'), // "3D 스캔",
        t('inquiry_projectsFormArray_4'), // "웹&앱 개발",
        t('inquiry_projectsFormArray_5'), // "영상 제작",
        t('inquiry_projectsFormArray_6'), // "기타 "
    ];
    const projectsPersonalityArray = [
        t('inquiry_projectsPersonalityArray_1'), // "신규 제작",
        t('inquiry_projectsPersonalityArray_2'), // "리뉴얼",
        t('inquiry_projectsPersonalityArray_3'), // "유지보수",
        t('inquiry_projectsPersonalityArray_4'), // "컨설팅",
        t('inquiry_projectsPersonalityArray_5'), // "기타"
    ];
    const [active, setActive] = useState([]);
    const clickActive = (item) => {
        setActive((prev) =>
            prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
    }
    const [budgetInput, setBudgetInput] = useState('');
    const [startInput, setStartInput] = useState('');
    const [endInput, setEndInput] = useState('');
    const [projectNameInput, setProjectNameInput] = useState('');
    const [projectDetailInput, setProjectDetailInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [companyInput, setCompanyInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [numberInput, setNumberInput] = useState('');
    const changeInput = (e) => {
        const { name, value } = e.target;
        const formatNumber = (num) => {
            return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        };

        const inputValue = value.replace(/[^0-9]/g, '');

        switch (name) {
            case 'budget':
                setBudgetInput(formatNumber(inputValue));
                break;
            case 'start':
                setStartInput(value);
                break;
            case 'end':
                setEndInput(value);
                break;
            case 'projectName':
                setProjectNameInput(value);
                break;
            case 'projectDetail':
                setProjectDetailInput(value);
                break;
            case 'name':
                setNameInput(value);
                break;
            case 'company':
                setCompanyInput(value);
                break;
            case 'email':
                setEmailInput(value);
                break;
            case 'number':
                setNumberInput(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className="relative bg-[#111]">
            <Nav/>
            <div className="lg:flex justify-around px-5 pt-[100px] pb-20 lg:px-20 lg:pt-[180px] lg:pb-[140px] lg:relative">
                <div className="lg:sticky lg:top-14 lg:left-0 lg:h-full">
                    <p className="text-xl lg:text-[2.5em] text-white leading-[30px] lg:leading-[60px]">
                        {/*프로젝트 정보를 작성해 주세요. <br/>
                        내용을 꼼꼼히 검토한 후 <br/>
                        담당자가 연락드리도록 하겠습니다.*/}
                        {t('inquiry_title').split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                <br/>
                            </span>
                        ))}
                    </p>
                </div>
                <div className="flex flex-col pt-[60px] lg:pt-0 gap-y-[60px]">
                    <div>
                        <div className="flex items-center gap-x-4 pb-5 lg:pb-6">
                            <p className="font-bold lg:text-xl text-white">
                                {/*프로젝트 형태*/}
                                {t('inquiry_desc1')}
                            </p>
                            <span className="text-[#666] text-sm lg:text-base">
                                {/*중복 선택 가능*/}
                                {t('inquiry_desc2')}
                            </span>
                        </div>
                        <ul className="flex flex-wrap gap-2 lg:gap-4 lg:w-[740px]">
                            {
                                projectsFormArray.map((e, i) => {
                                    return (
                                        <li
                                            key={i}
                                            onClick={() => clickActive(e)}
                                            className={`lg:text-xl text-[#ccc] py-[10px] px-4 lg:py-3 lg:px-7 border border-[#666] rounded-full text-center cursor-pointer ${active.includes(e) ? 'activeBtn' : ''}`}>{e}</li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center gap-x-4 pb-5 lg:pb-6">
                            <p className="font-bold lg:text-xl text-white">
                                {/*프로젝트 성격*/}
                                {t('inquiry_desc3')}
                            </p>
                            <span className="text-[#666] text-sm lg:text-base">
                                {/*중복 선택 가능*/}
                                {t('inquiry_desc2')}
                            </span>
                        </div>
                        <ul className="flex flex-wrap gap-2 lg:gap-4 lg:w-[740px]">
                            {
                                projectsPersonalityArray.map((e, i) => {
                                    return (
                                        <li
                                            key={i}
                                            onClick={() => clickActive(e)}
                                            className={`lg:text-xl text-[#ccc] py-[10px] px-4 lg:py-3 lg:px-7 border border-[#666] rounded-full text-center cursor-pointer ${active.includes(e) ? 'activeBtn' : ''}`}>{e}</li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-y-[60px] gap-x-[60px]">
                        <div className="relative">
                            <div className="flex items-center gap-x-4">
                                <p className="font-bold lg:text-xl text-white">
                                    {/*예산*/}
                                    {t('inquiry_desc4')}
                                </p>
                                <span className="text-[#666] text-sm lg:text-base">
                                    {/*숫자만 입력*/}
                                    {t('inquiry_desc5')}
                                </span>
                            </div>
                            <input
                                type="text"
                                name="budget"
                                value={budgetInput}
                                onChange={changeInput}
                                placeholder="0"
                                className={`lg:w-[340px] w-full h-14 bg-transparent border-b text-white lg:text-lg placeholder:text-[#666] pl-1 pr-12
                                ${budgetInput ? 'border-white' : 'border-[#666]'} focus:outline-none focus:border-b focus:border-white`}/>
                            <p className="absolute top-1/2 right-1 lg:text-xl text-[#ccc]">
                                {/*만원*/}
                                {t('inquiry_desc6')}
                            </p>
                        </div>
                        <div>
                            <p className="font-bold lg:text-xl text-white">
                                {/*예상 기간*/}
                                {t('inquiry_desc7')}
                            </p>
                            <div className="flex items-center gap-x-4">
                                <input
                                    type="text"
                                    name="start"
                                    value={startInput}
                                    onChange={changeInput}
                                    placeholder={t('inquiry_placeholder1')}
                                    className={`w-1/2 lg:w-[150px] h-14 bg-transparent border-b text-white lg:text-lg text-center placeholder:text-[#666] px-1
                                    ${startInput ? 'border-white' : 'border-[#666]'} focus:outline-none focus:border-b focus:border-white`}/>
                                <p className="text-xl text-center text-[#ccc]">-</p>
                                <input
                                    type="text"
                                    name="end"
                                    value={endInput}
                                    onChange={changeInput}
                                    placeholder={t('inquiry_placeholder1')}
                                    className={`w-1/2 lg:w-[150px] h-14 bg-transparent border-b text-white lg:text-lg text-center placeholder:text-[#666] px-1
                                    ${endInput ? 'border-white' : 'border-[#666]'} focus:outline-none focus:border-b focus:border-white`}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold lg:text-xl text-white">
                            {/*프로젝트명*/}
                            {t('inquiry_desc8')}
                        </p>
                        <input
                            type="text"
                            name="projectName"
                            value={projectNameInput}
                            onChange={changeInput}
                            placeholder={t('inquiry_placeholder2')}
                            className={`w-full h-14 bg-transparent border-b border-[#666] text-white lg:text-lg placeholder:text-[#666] px-1
                            ${projectNameInput ? 'border-white' : 'border-[#666]'} focus:outline-none focus:border-b focus:border-white`}/>
                    </div>
                    <div>
                        <p className="font-bold lg:text-xl text-white">
                            {/*프로젝트 내용*/}
                            {t('inquiry_desc9')}
                        </p>
                        <textarea
                            name="projectDetail"
                            value={projectDetailInput}
                            onChange={changeInput}
                            placeholder={t('inquiry_placeholder3')}
                            className={`w-full h-40 bg-transparent border-b border-[#666] text-white lg:text-lg placeholder:text-[#666] px-1 pt-[14px]
                            ${projectDetailInput ? 'border-white' : 'border-[#666]'} focus:outline-none focus:border-b focus:border-white`}/>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-y-[60px] gap-x-[60px]">
                        <div>
                            <p className="font-bold lg:text-xl text-white">
                                {/*담당자 이름/직책*/}
                                {t('inquiry_desc10')}
                            </p>
                            <input
                                type="text"
                                name="name"
                                value={nameInput}
                                onChange={changeInput}
                                placeholder={t('inquiry_placeholder4')}
                                className={`w-full lg:w-[340px] h-14 bg-transparent border-b border-[#666] text-white lg:text-lg placeholder:text-[#666] px-1
                                ${nameInput ? 'border-white' : 'border-[#666]'} focus:outline-none focus:border-b focus:border-white`}/>
                        </div>
                        <div>
                            <p className="font-bold lg:text-xl text-white">
                                {/*기관 또는 기업명*/}
                                {t('inquiry_desc11')}
                            </p>
                            <input
                                type="text"
                                name="company"
                                value={companyInput}
                                onChange={changeInput}
                                placeholder={t('inquiry_placeholder5')}
                                className={`w-full lg:w-[340px] h-14 bg-transparent border-b border-[#666] text-white lg:text-lg placeholder:text-[#666] px-1
                                ${companyInput ? 'border-white' : 'border-[#666]'} focus:outline-none focus:border-b focus:border-white`}/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-y-[60px] gap-x-[60px]">
                        <div>
                            <p className="font-bold lg:text-xl text-white">
                                {/*이메일*/}
                                {t('inquiry_desc12')}
                            </p>
                            <input
                                type="text"
                                name="email"
                                value={emailInput}
                                onChange={changeInput}
                                placeholder={t('inquiry_placeholder6')}
                                className={`w-full lg:w-[340px] h-14 bg-transparent border-b border-[#666] text-white lg:text-lg placeholder:text-[#666] px-1
                                ${emailInput ? 'border-white' : 'border-[#666]'} focus:outline-none focus:border-b focus:border-white`}/>
                        </div>
                        <div>
                            <p className="font-bold lg:text-xl text-white">
                                {/*전화번호*/}
                                {t('inquiry_desc13')}
                            </p>
                            <input
                                type="text"
                                name="number"
                                value={numberInput}
                                onChange={changeInput}
                                placeholder="000-0000-0000"
                                className={`w-full lg:w-[340px] h-14 bg-transparent border-b border-[#666] text-white lg:text-lg placeholder:text-[#666] px-1
                                ${numberInput ? 'border-white' : 'border-[#666]'} focus:outline-none focus:border-b focus:border-white`}/>
                        </div>
                    </div>
                    <button>
                        <Link to="/inquiry" className="flex items-center justify-center w-full lg:w-[340px] h-14 font-bold text-lg lg:text-xl text-[#111] bg-white rounded-full text-center cursor-pointer box-border">
                            {/*프로젝트 문의 제출하기*/}
                            {t('inquiry_desc14')}
                        </Link>
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

Contact.propTypes = {};

export default Contact;