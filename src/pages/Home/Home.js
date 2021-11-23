import "./Home.css"
import {Image} from "react-bootstrap"
import { projectData, blogData } from "../../Data/ProjectData";
export default function Home(){
    return(
        <div className="Home">
           

<div class="container">
    <div className="heading-box">
    
    <h1 class="neonText">
          Shasheesh Purohit
    </h1>
    <p className="neon-sub-text">Full Stack Developer</p>
    <a href="https://drive.google.com/uc?export=download&id=1SOykvNxqfRdC81XQPCQh-XSPSaMDqy05" download className="btn btn-danger resume-btn">Download Resume</a>
 </div>
 </div>
 <div className="container-fluid">
     <p className="section-heading">Skills</p>
     <div className="skill-section-skills">
         <div className="container-fluid skill-box">
         <i class="fab fa-js javascript skill-icon"></i>           
         <i class="fab fa-react react skill-icon"></i>
         </div>
         <div className="container-fluid skill-box">
         <i class="fab fa-html5 html skill-icon"></i>          
         <i class="fas fa-laptop-code laptop skill-icon"></i>
         <i class="fab fa-css3 css skill-icon"></i>
         </div>
         <div className="container-fluid skill-box">
         <i class="fab fa-github github skill-icon"></i>           
         <i class="fab fa-node node skill-icon"></i>
         </div>
     </div>
 </div>

 <div className="project-section ">
     <p className="section-heading">Projects</p>
     <div className="project-section-projects">
         {projectData.map(({title, description, liveLink, frontendRepo, backendRepo})=>{
             return(
                <div className="container-fluid project-box">
                <p className="box-heading">{title}</p>
                <p>{description}</p>
                <div className="project-buttons">
                <a className="btn btn-info project-button" href={liveLink}>Live Link</a>
                <a className="btn btn-info project-button" href={frontendRepo}>Front end repo</a>
                <a className="btn btn-info project-button" href={backendRepo}>Backend Repo</a>
                </div>
            </div>
             );
         })}
         
     </div>
     
 </div>
 <div className="blog-section">
         <p className="section-heading">Blogs</p>
         <div className="blog-section-blogs">
            {blogData.map(({blogTitle, blogDesc, blogUrl})=>{
                return(
                    <div className="container-fluid blog-box">
                    <p className="box-heading">{blogTitle}</p>
                    <p>{blogDesc}</p>
                    <div className="project-buttons">
                    <a className="btn btn-info blog-button" href={blogUrl}>Read more</a>
                    </div>
                    </div>
                );
            })}
         </div>
     </div>

     <div className="youtube-section">
         <p className="section-heading">my youtube tutorials</p>
         <div className="youtube-section-videos">
             <div className="container-fluid youtube-video">
             <iframe width="360" height="280" src="https://www.youtube.com/embed/4LGypMlcwmk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             <iframe width="360" height="280" src="https://www.youtube.com/embed/ZZVdgpEYF4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>
         </div>
     </div>
 </div>

    );
}
