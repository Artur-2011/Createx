import Team from '../about-us/Team';
import './CourseFather.css';
import Cta from './Cta';
import ForWhom from './ForWhom';
import Program from './Program';
import Register from './Register';
import SingleCurator from './SingleCurator';
import SinglePageTitle from './SinglePageTitle';
import CourseTitle from './CourseTitle';
import Steps from './Steps';

export default function CourseFather() {
  return (
    <div className='course-father'>
      <CourseTitle />
      <SinglePageTitle />
      <SingleCurator />
      <Steps />
      <Cta />
      <ForWhom />
      <Program />
      <Team />
      <Register />
    </div>
  )
}
