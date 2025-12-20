import Banner from './Banner';
import Courses from './Courses';
import Aboutcreatex from './Aboutcreatex';
import Benefits from './Benefits';
import Events from './Events';
import Certificate from './Certificate';
import './Homepage.css';
import Team from '../about-us/Team';
import Blog from '../about-us/Blog';

export default function Homepage() {
  return (
    <div className='homepage'>
      <Banner />
      <Aboutcreatex />
      <Courses />
      <Benefits />
      <Events />
      <Certificate />
      <Team />
      <Blog />
    </div>
  )
}