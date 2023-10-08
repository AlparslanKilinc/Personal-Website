import '../css/experience.css'
import amazon from '../assets/amazon.svg'
import dynamodb from '../assets/amazondynamodb.svg'
import mongodb  from '../assets/mongodb.svg'

function Experience() {
  return (
    <div className='experience'>
        <div className='experience-box'>
          <img className='experience-img' src={amazon} alt="Amazon icon"/>
          <h1 className='box-title'>Software Development Engineer Intern</h1>
          <div className='box-info'>
            <ul className='exp-list'>
              <li>Integrated an LLM API into an internal tool at Amazon, aiming to decrease reliance on external searches 
                during the application’s verification stage. This initiative targets the reduction of research time, 
                which currently constitutes 70% of the verification process done manually by users.
              </li>
              <li>Incorporated Anthropic’s Claude-2 language model through their 
                API to automatically generate accurate useful information for users.
              </li>
              <li>Implemented back-end caching solution to reduce API costs by reusing generated texts, 
                and enable fast data-retrieval.
              </li>
            </ul>
          </div>
        </div>

        <p className='title'>Technical Skills</p>
        <div className='skill-box'>
          <i class="fa-brands fa-java"></i>
          <i class="fa-brands fa-square-js"></i>
          <i class="fa-brands fa-python"></i>
          <i class="fa-brands fa-react"></i>
          <i class="fa-brands fa-node"></i>
          <img className= "icons" src={mongodb} />
          <img className="icons" src={dynamodb} />
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-css3-alt"></i>
          <i class="fa-brands fa-square-git"></i>
          <i class="fa-brands fa-figma"></i>
        </div>
     
    </div>
  )
}

export default Experience