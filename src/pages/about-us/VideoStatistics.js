import { FaPlay } from 'react-icons/fa';
import './About.css';

export default function VideoStatistics() {
  return (
    <div className='video-statistics'>      
        <div className="video-statistics-video">
            <div className="about-play-button">
                <div className="about-playicon"><FaPlay /></div>
            </div>
            <div className="video-statistics-svg">
                <img src="image.jpg" alt="" className='video-statistics-img' />
            </div>
        </div>
        <div className="statistics">
            <div className="states">
                <span>1200</span>
                <p>students graduated</p>
            </div>
            <div className="states">
                <span>84</span>
                <p>completed courses</p>
            </div>
            <div className="states">
                <span>16</span>
                <p>qualified tutors</p>
            </div>
            <div className="states">
                <span>5</span>
                <p>years of experience</p>
            </div>
        </div>
    </div>
  )
}
