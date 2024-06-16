import React, { useState, useEffect } from 'react';
import './Tulisan.css'; // Ensure you have a CSS file for styles


function Tulisan() {

    

    useEffect(() => {
        const originalText = "Extremely fast and light weighted calculator";
        
        
        document.querySelector(".calculator").onmouseover = event => {
            let iteration = 0;
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText.split("")
                    .map((letter, index) =>{
                        if(index<iteration){
                            return originalText[index];
                        }
                        return letters[(Math.floor(Math.random() * 26))]
                    })
                    .join("");
                if(iteration>=originalText.length) clearInterval(interval);

                iteration+=1/3;

            }, 30);
            

        }
    }, []);


    return (
        <div className="calculator">
        
            <p data-value = "Extremely fast and light weighted calculator">Extremely fast and light weighted calculator</p>
        </div>
    );
}

export default Tulisan;