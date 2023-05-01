import '../css/awards.css'
import '../css/reset.css'
import nsf from '../assets/nsf.png'
import suffolk from '../assets/suffolk.png'


function Awards() {
  return (
    <div className='awards'>
        <div className='award-box'>
          <img className='award-img' src={nsf} alt="National Science Foundation Logo"/>
          <div className='award-info'>
            <h1 className='award-title'>National Science Foundation Scholarship</h1>
            <p>Aug 2020</p>
            <p>The NSF STEM Scholarship program at Suffolk County Community 
              College provides a unique, educational enrichment environment for students pursuing
              careers in science technology, engineering, and mathematics fields
            </p>
          </div>
        </div>
        <div className='award-box'>
          <img className='award-img' src={suffolk} alt="Suffolk Logo"/>
          <div className='award-info'>
            <h1 className='award-title'>Dr. Frey Family Foundation Scholarship</h1>
            <p>Dec 2021</p>
            <p>Recognized for Mathematical Achievements at Suffolk County Community College.</p>
          </div>
        </div>
    </div>
  )
}

export default Awards