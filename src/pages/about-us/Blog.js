import { FaArrowRight } from 'react-icons/fa';
import './About.css';

export default function Blog() {
  return (
    <div className='blog'>
        <div className="blog-heading">
            <div className="blog-heading-text">
                <h2>Our blog</h2>
                <h3>Latest posts</h3>
            </div>
            <div className="button">
            <button>Go to blog</button></div>
        </div>
        <div className="blog-info-block">
            <div className="blog-info">
                <div className="blog-img"><img src="bloginfo1.jpg" alt="" /></div>
                <p>Marketing, September 4, 2020, 36 min</p>
                <span>What is traffic arbitrage and does it really <br /> make money?</span>
                <h4>Pharetra, ullamcorper iaculis viverra parturient sed id <br /> sed. Convallis proin dignissim lacus, purus gravida...</h4>
                <div className="blog-info-button">
                    <button>Listen</button>
                    <p><FaArrowRight /></p>
                </div>
            </div>
            <div className="blog-info">
                <div className="blog-img"><img src="bloginfo2.jpg" alt="" /></div>
                <p>Management, August 25, 2020, 45 min</p>
                <span>What to do and who to talk to if you want to get feedback on the product</span>
                <h4>Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...</h4>
                <div className="blog-info-button">
                    <button>Watch</button>
                    <p><FaArrowRight /></p>
                </div>
            </div>
            <div className="blog-info">
                <div className="blog-img"><img src="bloginfo3.jpg" alt="" /></div>
                <p>Design, August 8, 2020</p>
                <span>Should you choose a creative profession if you are attracted to creativity?</span>
                <h4>Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...</h4>
                <div className="blog-info-button">
                    <button>Read</button>
                    <p><FaArrowRight /></p>
                </div>
            </div>
        </div>
    </div>
  )
}
