import React from 'react';
import SpinnerModule from './Spinner.module.scss';

const Spinner = () => {
    return (
        <div className={SpinnerModule.loader__wrap}>
            <div className={SpinnerModule.loader}>
                <svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle className={`${SpinnerModule.one} ${SpinnerModule.load}`} cx="60" cy="60" r="40"/>
                    <circle className={`${SpinnerModule.two} ${SpinnerModule.load}`} cx="60" cy="60" r="40"/>
                    <circle className={`${SpinnerModule.three} ${SpinnerModule.load}`} cx="60" cy="60" r="40"/>
                    <g>
                        <circle className={`${SpinnerModule.one} ${SpinnerModule.point}`} cx="45" cy="70" r="5"/>
                        <circle className={`${SpinnerModule.two} ${SpinnerModule.point}`} cx="60" cy="70" r="5"/>
                        <circle className={`${SpinnerModule.three} ${SpinnerModule.point}`} cx="75" cy="70" r="5"/>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Spinner;
