// import './Homepage.css';

export default function Courses() {
    const coursesInfo = [
        {
            id : Math.random(),
            picture : 'speak1.jpg',
            lesson : 'Marketing',
            color : 'var(--success)',
            title : 'The Ultimate Google Ads Training Course',
            price : '$100',
            lecturer: 'by Jerome Bell',
            move: 'fade-right'
        },
        {
            id : Math.random(),
            picture : 'speak2.jpg',
            lesson : 'Management',
            color : 'var(--info)',
            title : 'Prduct Management Fundamentals',
            price : '$480',
            lecturer: 'by Marvin McKinney',
            move: 'fade-left'
        },
        {
            id : Math.random(),
            picture : 'speak3.jpg',
            lesson : 'HR & Recruting',
            color : 'var(--warning)',
            title : 'HR  Management and Analytics',
            price : '$200',
            lecturer: 'by Leslie Alexander Li',
            move: 'fade-right'
        },
        {
            id : Math.random(),
            picture : 'speak4.jpg',
            lesson : 'Marketing',
            color : 'var(--success)',
            title : 'The Ultimate Google Ads Training Course',
            price : '$100',
            lecturer: 'by Jerome Bell',
            move: 'fade-left'
        },
        {
            id : Math.random(),
            picture : 'speak5.jpg',
            lesson : 'Marketing',
            color : 'var(--success)',
            title : 'Brand Management & PR Communications',
            price : '$530',
            lecturer: 'by Kristin Watson',
            move: 'fade-right'
        },
        {
            id : Math.random(),
            picture : 'speak6.jpg',
            lesson : 'Graphic Design Basic',
            color : '#F52F6E',
            title : 'The Ultimate Google Ads Training Course',
            price : '$500',
            lecturer: 'by Guy Hawkins',
            move: 'fade-left'
        },
    ];
  return (
    <div className="courses2">
        <h4>Ready to learn?</h4>
        <div className="courses2-top">
            <h2>Featured Courses</h2>
            <button>View all courses</button>
        </div>
        <div className="courses-content">
            {coursesInfo.map(course => {
                return <div className="courses-item" key={course.id} >
                    <img src={course.picture} alt="" />
                    <div className="courses-item-content">
                        <button style={{background : course.color}}>{course.lesson}</button>
                        <h2>{course.title}</h2>
                        <div className="price">
                            <h4 style={{color: 'red'}}>{course.price}</h4>
                            <p>{course.lecturer}</p>
                        </div>

                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

