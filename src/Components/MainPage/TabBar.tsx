import { Project } from "../../Model/Project"
import './TabBar.css'
interface propState{
    isShow:boolean
    toggleShow:()=>void
    selectedProject:Project|undefined
}

export function TabBar({isShow,toggleShow,selectedProject}:propState){
    return (
        <div className='tab-bar'>
            <div className='headpage'>
                <p>My Transaction Application</p>
                <div className='head-info'>
                    <button onClick={toggleShow}>select</button>
                    <p>{">"}</p>
                    <p>{`${selectedProject?selectedProject.name:"Pls Select"}`}</p>
                </div>
            </div>
            <div className="tools">

            </div>
        </div>
    )
}