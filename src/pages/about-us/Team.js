import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";


export default function Team() {
  

  const teamList = [
    {
      id: Math.random(),
      picture: 'img0.png',
      name: 'Dianne Russell',
      proffession: 'Founder and CEO'
    },
    {
      id: Math.random(),
      picture: 'img1.png',
      name: 'Jerome Bell',
      proffession: 'Founder and Program Director'
    },
    {
      id: Math.random(),
      picture: 'img2.png',
      name: 'Kristin Watson',
      proffession: 'Marketer, Curator of Marketing Course'
    },
    {
      id: Math.random(),
      picture: 'img3.png',
      name: 'Marvin McKinney',
      proffession: 'PM, Curator of Management Course'
    },
    {
      id: Math.random(),
      picture: 'img4.png',
      name: 'Leslie Alexander Li',
      proffession: 'Curator of HR & Recruting Course'
    },
    {
      id: Math.random(),
      picture: 'img5.png',
      name: 'Kathryn Murphy',
      proffession: 'Analyst and Marketing specialist'
    },
    {
      id: Math.random(),
      picture: 'img6.png',
      name: 'Brooklyn Simmons',
      proffession: 'Curator of Development Course'
    },
    {
      id: Math.random(),
      picture: 'img7.png',
      name: 'Cody Fisher',
      proffession: 'UX Designer, Curator of Design Course'
    },
  ];

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in. Duis quis sem vitae arcu vehicula egestas sit amet ut libero.",
      name: "Eleanor Pena",
      position: "Position, Course",
      image: "user.jpg",
    },
    {
      id: 2,
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Nunc sed blandit libero volutpat sed cras ornare arcu dui.",
      name: "Cody Fisher",
      position: "Student, Web Design",
      image: "user.jpg",
    },
    {
      id: 3,
      text: "Orci varius natoque penatibus et magnis dis parturient montes. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius duis. Diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Sed risus pretium quam vulputate dignissim suspendisse in est ante.",
      name: "Leslie Alexander",
      position: "Instructor, UX Research",
      image: "user.jpg",
    },
    {
      id: 4,
      text: "Eget dolor morbi non arcu risus quis varius quam quisque id. Sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Faucibus purus in massa tempor nec feugiat nisl pretium fusce.",
      name: "Jenny Wilson",
      position: "Student, Marketing",
      image: "user.jpg",
    },
    {
      id: 5,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut lectus arcu bibendum at varius vel. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus.",
      name: "Jerome Bell",
      position: "Mentor, Business",
      image: "user.jpg",
    },
    {
      id: 6,
      text: "Ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.",
      name: "Arlene McCoy",
      position: "Student, Design",
      image: "user.jpg",
    },
    {
      id: 7,
      text: "Ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet.",
      name: "Bessie Cooper",
      position: "Instructor, Programming",
     image: "user.jpg",
    },
    {
      id: 8,
      text: "Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a molestie lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris.",
      name: "Ralph Edwards",
      position: "Student, Data Science",
     image: "user.jpg",
    },
    {
      id: 9,
      text: "Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum.",
      name: "Brooklyn Simmons",
      position: "Mentor, Photography",
     image: "user.jpg",
    },
    {
      id: 10,
      text: "Sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada.",
      name: "Dianne Russell",
      position: "Student, Art History",
    image: "user.jpg",
    },
  ];
  
  return (
    <div className="team">
      <div className="team-heading">
        <h2>Best tutors are all here</h2>
        <h3>Meet our team</h3>
      </div>
      <div className="team-members">
        <Swiper spaceBetween={20} modules={[Navigation, Autoplay, Pagination]} navigation autoplay={{ delay: 5000, pauseOnMouseEnter: true }} loop grabCursor breakpoints={{
          1200: {
            slidesPerView: 4
          },
          996: {
            slidesPerView: 3
          },
          650: {
            slidesPerView: 2
          },
          400: {
            slidesPerView: 1
          },
        }}>
          {teamList.map(team => {
            return <SwiperSlide>
              <div className="members">
                <div className="members-svg">
                  <div className="members-overlay"></div>
                  <img src={team.picture} alt="" />
                  <div className="team-icons">
                    <p><a href="#"><FaFacebook /></a></p>
                    <p><a href=""><FaInstagram /></a></p>
                    <p><a href=""><FaLinkedin /></a></p>
                  </div>
                </div>
                <p>{team.name}</p>
                <span>{team.proffession}</span>
              </div>
            </SwiperSlide>
          })}
        </Swiper>

      </div>
       <div className="bottom">
        <div className="team_bottom_text">
          <h4>TESTIMONIALS</h4>
          <h1>What our students say</h1>
        </div>
      <div className="student_card">
        <Swiper slidesPerView={1} modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
          {testimonials.map((student) => {
            return <SwiperSlide> <div className="card">
              <div className="card_text">
                <svg
                  width="28"
                  height="20"
                  viewBox="0 0 28 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="card_text_svg"
                >
                  <path
                    d="M18 8.92534C18 8.63119 18.1295 8.35196 18.3541 8.16195L28 0V19C28 19.5523 27.5523 20 27 20H19C18.4477 20 18 19.5523 18 19V8.92534Z"
                    fill="#FF3F3A"
                  />
                  <path
                    d="M0 8.92534C0 8.63119 0.129507 8.35196 0.354058 8.16195L10 0V19C10 19.5523 9.55228 20 9 20H1C0.447715 20 0 19.5523 0 19V8.92534Z"
                    fill="#FF3F3A"
                  />
                </svg>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Justo, amet lectus quam<br></br> viverra mus lobortis
                  fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id
                  turpis<br></br> tempus ornare turpis quis non. Congue tortor
                  in euismod vulputate etiam eros.<br></br> Pulvinar neque
                  pharetra arcu diam maecenas diam integer in.
                </p>
              </div>
              <div className="information">
                <img src={student.image} alt="" />
                <div className="information_text">
                  <span>{student.name}</span>
                  <h6>{student.position}</h6>
                </div>
              </div>
            </div></SwiperSlide>
          })}

        </Swiper>
      </div>
       </div>
    </div>
  );
}
