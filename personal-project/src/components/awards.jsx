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
            <p>Sep 2020</p>
            <p>Awarded National Science Foundation (NSF) STEM Scholarship for academic excellence in pursuing a 
              degree in Computer Science.
            </p>
          </div>
        </div>
        <div className='award-box'>
          <img className='award-img' src={suffolk} alt="Suffolk Logo"/>
          <div className='award-info'>
            <h1 className='award-title'>Dr. Frey Family Foundation Scholarship</h1>
            <p>Dec 2021</p>
            <p>Awarded Dr. Frey Family Foundation Scholarship for academic excellence in Mathematics & Computer Science studies.</p>
          </div>
        </div>
    </div>
  )
}

export default Awards