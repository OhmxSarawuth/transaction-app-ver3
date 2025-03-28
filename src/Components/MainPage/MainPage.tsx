import { useState } from "react";
import { TabBar } from "./TabBar";
import { Project } from "../../Model/Project";
import { SideBar } from "../SideBar/SideBar";
import { Temp } from "../Content/Temp";

import './MainPage.css';

export function MainPage() {

    const [projects, setProject] = useState<Project[]>([
        new Project("Temp1"),
        new Project("Temp2")
    ]);

    const [isShow, setShow] = useState<boolean>(true);
    const [selectedProject, onSelectProject] = useState<Project | undefined>(undefined);

    const toggleShow = () => {
        setShow((prev) => !prev);
    }
    const addProject = (newProject: Project) => {
        setProject((prev) => [...prev, newProject]);
    }
    const editProjects = (editProject: Project) => {
        setProject(prevs =>
            prevs.map(prev => (prev.id === editProject.id) ? editProject : prev)
        );
        onSelectProject(editProject);

        // Update selected project if it was edited
        // if (selectedProject?.id === editProject.id) {
        //     onSelectProject(editProject);
        // }
    }

    return (
        <div className="main-page">
            <TabBar
                isShow={isShow}
                toggleShow={toggleShow}
                selectedProject={selectedProject}
            />
            <div className="body">
                <SideBar
                    isShow={isShow}
                    toggleShow={toggleShow}
                    projects={projects}
                    onSelectProject={onSelectProject}
                    addProject={addProject}
                    editProjects={editProjects}
                />
                <Temp
                    project={selectedProject}
                    editProjects={editProjects}
                />
            </div>
        </div>
    )
}