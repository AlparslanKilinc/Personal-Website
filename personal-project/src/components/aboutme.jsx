import '../css/aboutMe.css'
import '../css/reset.css'


function AboutMe() {
  return (
    <div className='aboutMe'>
      <p className='title'>About Me</p>
        <div className='about-box'>
          <img className='about-img' src="\src\assets\turkiye.png" alt="Turkiye Flag"/>
          <div className='box-info'>
            <h1 className='uni-title'>My Origins</h1>
            <p>I am from Turkiye,Istanbul.Istanbul is the city of cats where i grew up with love for cats.
               I started playing soccer from a young age in Turkiye. After moving to United States 
               I played Tennis and Soccer Throughout High-School. 
               I always loved Art and Making things beautiful which lead me to get into Front-End Development.
               Where i can mix Design,Art and Programming.
            </p>
          </div>
        </div>

        <div className='about-box'>
          <img className='about-img' src="\src\assets\react.png" alt="React Logo"/>
          <div className='box-info'>
            <h1 className='box-title'>Programming Journey</h1>
            <p> 
              After high-school I started pursing Computer Science. 
              I started studying Computer Science at Suffolk Community College and graduated with a 4.0 gpa.
              Along the way I learned Object-Oriented Programming by making projects. 
              After Transferring to Oswego University I started focusing on Web Development.
              In the end I ended up at Stony Brook University where 
              I will be graduating soon with Bachelors in Computer Science.
            </p>
          </div>
        </div>
        <p className='title'>Skills</p>
        <div className='Skills'>
          <div className='about-box'>
            <i class="fa-brands fa-java"></i>
            <i class="fa-brands fa-python"></i>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-node"></i>
            <i class="fa-brands fa-square-js"></i>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-figma"></i>
          </div>
        </div>
     
    </div>
  )
}

export default AboutMe