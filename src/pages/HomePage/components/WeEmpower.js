import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';

function WeEmpower() {
    const [animFinished, setAnimFinished] = useState(false);

    const wordRef = useRef(null);

    useEffect(() => {
        const copy = [
            'designers',
            'innovators',
            'leaders',
            'students',
            'communities',
            'creators',
            'engineers',
        ];
        let currIdx = copy.length - 2;
        wordRef.current.innerText = copy[currIdx];

        const normalizeIdx = (n, m = copy.length) => ((n % m) + m) % m;
        const clear = setInterval(() => {
            if (currIdx === copy.length - 1) {
                setAnimFinished(true);
                return clearTimeout(clear);
            }
            $(wordRef.current).fadeOut(() => {
                currIdx = normalizeIdx(currIdx - 1);
                wordRef.current && (wordRef.current.innerText = copy[currIdx]);
                $(wordRef.current).fadeIn();
            });
        }, 1500);
        return () => clearInterval(clear);
    }, []);

    return (
        <div className="hero__copy">
            We empower{' '}
            <span
                ref={wordRef}
                className={
                    !animFinished
                        ? 'hero__copy-word hero__copy-word__grey'
                        : 'hero__copy-word'
                }
            ></span>
        </div>
    );
}

export default WeEmpower;
