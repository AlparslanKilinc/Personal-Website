import '../css/education.css'
import '../css/reset.css'
import oswego from '../assets/oswego.png'
import suffolk from '../assets/suffolk.png'
import sbu from '../assets/sbu.png'

function Education() {
  return (
    <div className='education'>
      
        <div className='uni-box'>
          <img src={sbu} alt="Stony Brook University Logo"/>
          <div className='uni-info'>
            <h1 className='uni-title'>Stony Brook University</h1>
            <p>Major: Computer Science</p>
            <p>GPA:3.6</p>
          </div>
        </div>

        <div className='uni-box'>
          <img src={oswego} alt="Oswego Logo"/>
          <div className='uni-info'>
            <h1 className='uni-title'>Oswego State University</h1>
            <p>Major: Computer Science</p>
            <p>GPA:3.8</p>
          </div>
        </div>

        <div className='uni-box'>
          <img src={suffolk} alt="Suffolk Logo"/>
          <div className='uni-info'>
            <h1 className='uni-title'>Suffolk County Community College</h1>
            <p>Major: Computer Science</p>
            <p>GPA:4.0</p>
          </div>
        </div>

    </div>
  )
}

export default Education