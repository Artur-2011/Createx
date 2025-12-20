import { FaArrowRight } from 'react-icons/fa';
import './About.css';

export default function Directions() {
  return (
    <div className='directions'>
        <div className="directions_header">
            <h2>OUR MAIN DIRECTIONS</h2>
            <h3>What do we teach</h3>
        </div>
        <div className="card-grid">
            <div className="card">
                <div className="card-svg">
                    <img src="image (1).png" alt=""className='directions_img' />
                </div>
                <div className="card-content">
                    <h2>Marketing</h2>
                    <p>Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
                    <div className="check-courses-button">
                        <button>Check courses</button>
                        <span><FaArrowRight /></span>
                    </div>
                </div>
                </div>
            <div className="card">
                <div className="card-svg">
                    <img src="image(0).png" alt="" className='directions_img'/>
                </div>
                <div className="card-content">
                    <h2>Management</h2>
                    <p>Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
                    <div className="check-courses-button">
                        <button>Check courses</button>
                        <span><FaArrowRight /></span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-svg">
                    <img src="image (2).png" alt=""className='directions_img' />
                </div>
                <div className="card-content">
                    <h2>HR & Recruting</h2>
                    <p>Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
                    <div className="check-courses-button">
                        <button>Check courses</button>
                        <span><FaArrowRight /></span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-svg">
                    <img src="image (3).png" alt="" className='directions_img'/>
                </div>
                <div className="card-content">
                    <h2>Design</h2>
                    <p>Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
                    <div className="check-courses-button">
                        <button>Check courses</button>
                        <span><FaArrowRight /></span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-svg">
                    <img src="image (4).png" alt="" className='directions_img'/>
                </div>
                <div className="card-content">
                    <h2>Development</h2>
                    <p>Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.</p>
                    <div className="check-courses-button">
                        <button>Check courses</button>
                        <span><FaArrowRight /></span>
                    </div>
                </div>
            </div>
            <div className="card-1">
                <div className="card-svg"></div>
                <h2>New studying program <br /> coming soon...</h2>
            </div>
        </div>
    </div>
  )
}
