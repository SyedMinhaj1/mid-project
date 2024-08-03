import React from 'react'
import './About.css';

function About() {
    return (
        <div className='abmain'>
            <h1 className='abouttext'>
                Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>
            <div className="expect">
                <div className="eleft">
                    <p>What you can expect:</p>
                </div>
                <div className="eright">
                    <p>
                       We create tailored presentations to help 
                       you persuade your colleagues, clients, or 
                       investors. Whether it's live or digital, 
                       delivered for one or a hundred people.
                       <br /><br />
                        We believe the mix of strategy and 
                        design (with a bit of coffee) is what 
                        makes your message clear, convincing, 
                        and captivating.
                    </p>
                </div>
                    <div className="esocial">
                        <ul>
                            <p>S:</p>
                            <br />
                            <li>Instagram</li>
                            <li> Behance </li>
                            <li> Facebook </li>
                            <li> Linkedin </li>
                        </ul>
                    </div>
            </div>
            <div className="approach">
                <div className="apleft">
                    <h1>Our approach:</h1>
                    <button className='apbtn' type='button'>Read More
                        <div className="btndot"></div>
                    </button>
                </div>
                <div className="apright">
                    <img src="https://cdn.prod.website-files.com/6410ebf8e483b5bb2c86eb27/64e998f044382712867dd4aa_ABM%20college%20presentation%20main.jpg" alt="IMAGE NOT LOADED" />
                </div>
            </div>
        </div>

    )
}

export default About
