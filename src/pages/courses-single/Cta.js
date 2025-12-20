import React from 'react'

export default function Cta() {
  return (
    <div className='cta'>
        <div className="cta-overlay">
        <div className="cta-all">
            <div className="cta-heading">
                <p>20% discount for early birds!</p>
                <div className="countdown">
                    <p>06<span>Days</span></p>
                    <p>18<span>Hours</span></p>
                    <p>24<span>Mins</span></p>
                    <p>12<span>Sec</span></p>
                </div>
            </div>
            <div className="cta-access">
                <div className="cta-block">
                    <p>Full name</p>
                    <input type="text" placeholder='Your full name' />
                </div>
                <div className="cta-block">
                    <p>Email</p>
                    <input type="text" placeholder='Your working email'/>
                </div>
                <div className="cta-block">
                    <p>Phone</p>
                    <input type="text" placeholder='Your phone number'/>
                </div>
                <button>Join the course</button>
            </div>
        </div>
        </div>
    </div>
  )
}
