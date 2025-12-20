import './About.css';

export default function Studyingprocess() {
  return (
    <div className='studying-process'>
      <div className="studying-process-left">
        <div className="studying-process-heading">
          <h2>Studying process</h2>
          <h3>That’s how we do it</h3>
        </div>
        <div className="studying-process-steps">
          <div className="line">
            <div className="line-round"></div>
            <div className="line-round"></div>
            <div className="line-round"></div>
            <div className="line-round"></div>
            <div className="line-line"></div>
          </div>
          <div className="steps-parent">
            <div className="step">
            <h2>STEP 1</h2>
            <p>Watching online video lectures</p>
            <span>Aliquam turpis viverra quam sit interdum blandit posuere <br /> pellentesque. Nisl, imperdiet gravida massa neque.</span>
          </div>
          <div className="step">
            <h2>STEP 2</h2>
            <p>Passing test</p>
            <span>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget <br /> feugiat lacus, amet, sollicitudin egestas laoreet etiam. </span>
          </div>
          <div className="step">
            <h2>STEP 3</h2>
            <p>Curator’s feedback</p>
            <span>Eget amet, enim pharetra leo egestas nisi, odio imperdiet <br /> facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. </span>
          </div>
          <div className="step">
            <h2>STEP 4</h2>
            <p>Corrections if needed</p>
            <span>Non tempor pulvinar tincidunt aliquam. Placerat ultricies <br /> malesuada dui auctor.</span>
          </div>
          </div>
        </div>
      </div>
      <div className="studying-process-right">
        <img src="illustration.png" alt="" className='studying_proccess_img'/>
      </div>
    </div>
  )
}
