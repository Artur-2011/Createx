import './About.css';
export default function Companies() {

  const pictures = [
    'hom1.png',
    'hom2.png',
    'hom3.png',
    'hom4.png',
    'hom5.png',
    'hom6.png',
    'hom7.png',
    'hom8.png',
    'hom9.png',
    'hom10.png',
    'hom11.png',
    'hom12.png'
  ];

  return (
    <div className='companies' style={{ background: 'var(--gray-100)' }}>
      <div className="companies-heading">
        <h2>BEST JOBS FOR YOU</h2>
        <h3>Our students work here</h3>
      </div>
      <div className="companies-logos">
          {
            pictures.map(pic =>  <div className="clg"><img src={pic} alt="" /></div>)
          }
      </div>
    </div>
  )
}