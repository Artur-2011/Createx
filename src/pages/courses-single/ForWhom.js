import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'

export default function ForWhom() {
    return (
        <div className='forwhom'>
            <div className="forwhom-main">
                <div className="forwhom-heading">
                    <h2>For whom?</h2>
                    <h3>Who will benefit from  the course:</h3>
                </div>
                <div className="forwhom-bullet">
                    <span><FaRegCheckCircle /><p>Specialists with more than 1 year of active work experience</p></span>
                    
                    
                    <span><FaRegCheckCircle /><p>Mobile app designers who want to improve their skills in <br /> solving business problems, creating and testing <br /> human-centered interfaces</p></span>
                    <span><FaRegCheckCircle /><p>Professional designers who want to feel more confident in UX</p></span>
                    
                    <span><FaRegCheckCircle /><p>Specialists who would like to structure their knowledge, fill in <br /> the gap</p></span>
                    
                </div>
            </div>
        </div>
    )
}
