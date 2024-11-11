import React, { useCallback, useEffect, useRef } from 'react';

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.1;

function CursorEffect() {
    const mouseRef = useRef(null);
    const requestRef = useRef(0);

    const handleMouseMove = (e) => {
        x = e.pageX;
        y = e.pageY;
    }

    const loop = useCallback(() => {
        targetX += (x - targetX) * speed;
        targetY += (y - targetY) * speed;

        if (mouseRef.current) {
            mouseRef.current.style.top = `${targetY}px`;
            mouseRef.current.style.left = `${targetX}px`;
        }

        requestRef.current = requestAnimationFrame(loop);
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        requestRef.current = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef.current);
        };
    }, [loop]);

    return (
        <>
            <div>
                <div ref={mouseRef} className="fixed z-[1000] pointer-events-auto w-5 h-5 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
            </div>
        </>
    );
}

export default CursorEffect;
