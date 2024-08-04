import React, { useEffect, useState } from 'react'
import './Playful.css';

function Playful() {

    const [rotate , setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX ;
            let mouseY =  e.clientY;
            console.log(mouseX , mouseY);
            
            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            let angle = Math.atan2(deltaY , deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })

    return (
        <div className='eyes'>
            <div className="box">
                <div className="play ">
                    <div className="eye">
                        <div className="innereye">
                            <div style={{transform: `translate(-50% , -50%) rotate(${rotate}deg)`}} className="line">
                                <div className="pupil"></div>
                            </div>
                        </div>
                    </div>
                    <div className="eye">
                        <div className="innereye">
                            <div style={{transform: `translate(-50% , -50%) rotate(${rotate}deg)`}} className="line">
                                <div className="pupil"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Playful
