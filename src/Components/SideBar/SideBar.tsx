import { useState } from "react";
import { Project } from "../../Model/Project"
import './SideBar.css';
import { ProjectBar } from "./SideProject";
interface propState{
    isShow:boolean
    toggleShow:()=>void
    projects:Project[]
    onSelectProject:(project:Project)=>void
    addProject:(project:Project)=>void
    editProjects:(project:Project)=>void;

}

export function SideBar({isShow,toggleShow,projects,onSelectProject,addProject,editProjects}:propState){

    const [newName , setNewName] = useState<string>("");

    const generateProject =(newName:string)=>{
        if(newName.trim()){
            const newProject:Project = new Project(newName);
            addProject(newProject);
            setNewName("");
        }
    }
    return (
        <div className={`side-bar ${isShow?"show":"hide"}`}>
            <div className="insert-project">
                <div className='insert-box'>
                    <button onClick={()=>generateProject(newName)}>create</button>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e)=> setNewName(e.target.value)}
                        placeholder={"Enter new Project Name"}
                    />
                </div>
                <button onClick={toggleShow}>x</button>
            </div>
            <div className="projects-space">
                {projects.map((project,index)=>(
                    <ProjectBar
                        key={project.id}
                        project={project}
                        onClick={()=>onSelectProject(project)}
                        editProjects={editProjects}
                    />
                ))}
            </div>
        </div>
    )
}

