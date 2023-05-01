import '../css/education.css'
import '../css/reset.css'


function Education() {
  return (
    <div className='education'>
        <div className='uni-box'>
          <img src="\src\assets\sbu.png" alt="Stony Brook University Logo"/>
          <div className='uni-info'>
            <h1 className='uni-title'>Stony Brook University</h1>
            <p>Major: Computer Science</p>
            <p>GPA:3.6</p>
          </div>
        </div>

        <div className='uni-box'>
          <img src="\src\assets\oswego.png" alt="Oswego Logo"/>
          <div className='uni-info'>
            <h1 className='uni-title'>Oswego State University</h1>
            <p>Major: Computer Science</p>
            <p>GPA:3.8</p>
          </div>
        </div>

        <div className='uni-box'>
          <img src="\src\assets\suffolk.png" alt="Suffolk Logo"/>
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