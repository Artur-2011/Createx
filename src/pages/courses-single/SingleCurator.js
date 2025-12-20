import { FaFacebook, FaLinkedin, FaPlayCircle, FaStar, FaTelegram, FaTwitter, FaUser } from "react-icons/fa";

export default function SingleCurator() {
  return (
    <div className="single-curator">
        <div className="curator-left">
            <img src="img7.png" alt="" />
        </div>
        <div className="curator-right">
            <h2>Course curator</h2>
            <h3>Cody Fisher</h3>
            <h4>Senior UX designer in IT Product Company</h4>
            <div className="curator-rate">
                <div className="rate-curator">
                    <h6><FaStar /> </h6>
                    <h5>4.9 rate</h5>
                </div>
                <div className="rate-curator">
                    <h6><FaPlayCircle /></h6>
                    <h5>4 courses</h5>
                </div>
                <div className="rate-curator">
                    <h6><FaUser /></h6>
                    <h5>350 students</h5>
                </div>
            </div>
            <p>Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. </p>
            <div className="curator-socials">
                <p className="curator-social"><FaFacebook /></p>
                <p className="curator-social"><FaTelegram /></p>
                <p className="curator-social"><FaTwitter /></p>
                <p className="curator-social"><FaLinkedin /></p>
            </div>
        </div>
    </div>
  )
}
