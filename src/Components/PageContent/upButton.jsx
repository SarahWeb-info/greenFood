import React, { useState, useEffect } from 'react';
import { BsChevronUp } from "react-icons/bs";

export default function UpButton() {
    const [displayUpButton, setDisplayUpButton] = useState(false);

    const handleUpButton = () => {

        if (window.scrollY > 1000) {
            setDisplayUpButton(true);
        } else {
            setDisplayUpButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleUpButton);
        return () => {
            window.removeEventListener("scroll", handleUpButton);
        };
    }, []);

    return (
        <>
            {displayUpButton && 
                <a className='upButton' href="#home">
                    <BsChevronUp />
                </a>
            }
        </>
    );
}
