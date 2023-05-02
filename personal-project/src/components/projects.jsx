import '../css/projects.css'
import '../css/reset.css'


function Projects() {
  return (
    <div className='main'>
      <div className='projects'>
        <div className="box">
          <div className='project-title'>
              <i className="material-icons-outlined">star_outline</i>
              <h3 className='project-text'>Playlister</h3>
          </div>
          <p>Application for creating and playing playlists of YouTube videos.</p>
          <div className="box-options">
              <a href="https://playlister.onrender.com/" target="_blank">
                <i className="material-icons-outlined">visibility</i>
              </a>
          </div>
        </div>
        
        <div className="box">
          <div className='project-title'>
              <i className="material-icons-outlined">star_outline</i>
              <h3 className='project-text'>Pixel Buddy</h3>
          </div>
          <p>Robotics project with a face.</p>
          <div className="box-options">
            <a href="https://github.com/AlparslanKilinc/Pixel-Buddy"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>

        <div className="box">
          <div className='project-title'>
            <i className="material-icons-outlined">star_outline</i>
            <h3 className='project-text'>College Data Management System</h3>
          </div>
          <p> Showcases Implementation of OOP, JavaFx, Write/Read Files & Error Handling in Java.</p>
          <div className="box-options">
            <a href="https://github.com/AlparslanKilinc/College-Data-Management-System" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <div className="box">
          <div className='project-title'>
              <i className="material-icons-outlined">star_outline</i>
              <h3 className='project-text'>Pixel Sketch</h3>
          </div>
          <p>Sketching website.You are able to click and drag to draw on the grid, giving you full ability to draw as you please.</p>
          <div className="box-options">
            <a href="https://github.com/AlparslanKilinc/Pixel-Sketch" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://alparslankilinc.github.io/Pixel-Sketch/" target="_blank"><i className="material-icons-outlined">visibility</i></a>
          </div>
        </div>

        <div className="box">
          <div className='project-title'>
              <i className="material-icons-outlined">star_outline</i>
              <h3 className='project-text'>Library</h3>
          </div>
          <p>Keeps track of the books you have read and are in the progress of reading.</p>
            <div className="box-options">
              <a href="https://github.com/AlparslanKilinc/Library" target="_blank"><i className="fa-brands fa-github"></i></a>
              <a href="https://alparslankilinc.github.io/Library/" target="_blank"><i className="material-icons-outlined">visibility</i></a>
            </div>
        </div>

        <div className="box">
          <div className='project-title'>
              <i className="material-icons-outlined">star_outline</i>
              <h3 className='project-text'>Web Apple Calculator</h3>
          </div>
          <p>Calculator That Mimics The Capabilities of Apple Mobile Calculator.</p>
          <div className="box-options">
            <a href="https://github.com/AlparslanKilinc/Web-Apple-Calculator" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://alparslankilinc.github.io/Web-Apple-Calculator/" target="_blank"><i className="material-icons-outlined">visibility</i></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects