import { FaCheckCircle} from "react-icons/fa";
import { data } from "react-router-dom";


export default function SinglePageTitle() {
    const aboutCourse =[
        {
            id: 'Math.random()',
            about: 'About the course',
            text: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
            learn: 'You will learn:',
            bullet: "<FaRegCheckCircle />",
            bullettext: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            dates : 'Dates',
            datesp: 'Sept 7 – Nov 2',
            datesspan: 'Metus turpis sit lorem lacus, in elit tellus lacus.',
            duration: 'Duration',
            durationp: '2 months – 8 lessons',
            durationspan: 'Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.',
            price: "Price",
            pricep: "$120 per month",
            pricespan: "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
            button: 'Join the course',
        },
        {
            id: 'Math.random()',
            about: 'About the course',
            text: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
            learn: 'You will learn:',
            bullet: "<FaRegCheckCircle />",
            bullettext: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            dates : 'Dates',
            datesp: 'Sept 7 – Nov 2',
            datesspan: 'Metus turpis sit lorem lacus, in elit tellus lacus.',
            duration: 'Duration',
            durationp: '2 months – 8 lessons',
            durationspan: 'Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.',
            price: "Price",
            pricep: "$120 per month",
            pricespan: "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
            button: 'Join the course',
        },
        {
            id: 'Math.random()',
            about: 'About the course',
            text: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
            learn: 'You will learn:',
            bullet: "<FaRegCheckCircle />",
            bullettext: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            dates : 'Dates',
            datesp: 'Sept 7 – Nov 2',
            datesspan: 'Metus turpis sit lorem lacus, in elit tellus lacus.',
            duration: 'Duration',
            durationp: '2 months – 8 lessons',
            durationspan: 'Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.',
            price: "Price",
            pricep: "$120 per month",
            pricespan: "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
            button: 'Join the course',
        },
        {
            id: 'Math.random()',
            about: 'About the course',
            text: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
            learn: 'You will learn:',
            bullet: "<FaRegCheckCircle />",
            bullettext: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            dates : 'Dates',
            datesp: 'Sept 7 – Nov 2',
            datesspan: 'Metus turpis sit lorem lacus, in elit tellus lacus.',
            duration: 'Duration',
            durationp: '2 months – 8 lessons',
            durationspan: 'Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.',
            price: "Price",
            pricep: "$120 per month",
            pricespan: "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
            button: 'Join the course',
        },
        {
            id: 'Math.random()',
            about: 'About the course',
            text: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
            learn: 'You will learn:',
            bullet: "<FaRegCheckCircle />",
            bullettext: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            dates : 'Dates',
            datesp: 'Sept 7 – Nov 2',
            datesspan: 'Metus turpis sit lorem lacus, in elit tellus lacus.',
            duration: 'Duration',
            durationp: '2 months – 8 lessons',
            durationspan: 'Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.',
            price: "Price",
            pricep: "$120 per month",
            pricespan: "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
            button: 'Join the course',
        },
        {
            id: 'Math.random()',
            about: 'About the course',
            text: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
            learn: 'You will learn:',
            bullet: "<FaRegCheckCircle />",
            bullettext: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            dates : 'Dates',
            datesp: 'Sept 7 – Nov 2',
            datesspan: 'Metus turpis sit lorem lacus, in elit tellus lacus.',
            duration: 'Duration',
            durationp: '2 months – 8 lessons',
            durationspan: 'Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.',
            price: "Price",
            pricep: "$120 per month",
            pricespan: "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
            button: 'Join the course',
        },
        {
            id: 'Math.random()',
            about: 'About the course',
            text: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
            learn: 'You will learn:',
            bullet: "<FaRegCheckCircle />",
            bullettext: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            dates : 'Dates',
            datesp: 'Sept 7 – Nov 2',
            datesspan: 'Metus turpis sit lorem lacus, in elit tellus lacus.',
            duration: 'Duration',
            durationp: '2 months – 8 lessons',
            durationspan: 'Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.',
            price: "Price",
            pricep: "$120 per month",
            pricespan: "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
            button: 'Join the course',
        },
        {
            id: 'Math.random()',
            about: 'About the course',
            text: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
            learn: 'You will learn:',
            bullet: "<FaRegCheckCircle />",
            bullettext: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            dates : 'Dates',
            datesp: 'Sept 7 – Nov 2',
            datesspan: 'Metus turpis sit lorem lacus, in elit tellus lacus.',
            duration: 'Duration',
            durationp: '2 months – 8 lessons',
            durationspan: 'Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.',
            price: "Price",
            pricep: "$120 per month",
            pricespan: "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
            button: 'Join the course',
        },
        {
            id: 'Math.random()',
            about: 'About the course',
            text: 'Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque',
            learn: 'You will learn:',
            bullet: "<FaRegCheckCircle />",
            bullettext: 'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
            dates : 'Dates',
            datesp: 'Sept 7 – Nov 2',
            datesspan: 'Metus turpis sit lorem lacus, in elit tellus lacus.',
            duration: 'Duration',
            durationp: '2 months – 8 lessons',
            durationspan: 'Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.',
            price: "Price",
            pricep: "$120 per month",
            pricespan: "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
            button: 'Join the course',
        },
    ];
    const curator = [
        {
            id: 'Math.random()',
            img: '',
            curator: 'Course Curator',
            name: '',
            profession: '',
            star: '<FaRegStar />',
            rate: '4.9 rate',
            play: '<FaRegCirclePlay />',
            coursescount: '',
            user: '<FaRegUser />',
            students: '',
            lorem: 'Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. ',
            ic1: '<FaFacebook />',
            ic2: '<FaTelegram />',
            ic3: '<FaTwitter />',
            ic4: '<FaLinkedin />',
        },
    ];
  return (
    
    <div className="single-title">
           <div className="single-left">
            <div className="single-heading">
                <h2>About the course</h2>
                <p>Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi nulla pellentesque</p>
            </div>
            <div className="single-bottom">
                <h2> You will learn:</h2>
                <p><FaCheckCircle /> A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
                <p><FaCheckCircle /> Vulputate placerat amet pulvinar lorem nisl.</p>
                <p><FaCheckCircle /> Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
                <p><FaCheckCircle /> Etiam duis lobortis in fames ultrices commodo nibh.</p>
                <p><FaCheckCircle /> Fringilla in nec risus congue venenatis pretium posuere nec.</p>
                <p><FaCheckCircle /> Cursus eu pretium, vulputate tempus quam massa sed at.</p>
            </div>
           </div>
           <div className="single-right">
            <div className="sr-info">
                <h2>Dates</h2>
                <h3>Sept 7 – Nov 2</h3>
                <h4>Metus turpis sit lorem lacus, in elit tellus lacus.</h4>
            </div>
            <div className="sr-info">
                <h2>Duration</h2>
                <h3>2 months – 8 lessons</h3>
                <h4>Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</h4>
            </div>
            <div className="sr-info">
                <h2>Price</h2>
                <h3>2 months – 8 lessons</h3>
                <h4>Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</h4>
            </div>
            <button className="sr-button">Join the course</button>
           </div>
    </div>
  )
}
