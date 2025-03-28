import { useState } from "react";
import { Project } from "../../Model/Project"

import './SideProject.css';

interface propState {
    project: Project
    onClick: () => void
    editProjects: (project: Project) => void
}

export function ProjectBar({ project, onClick, editProjects }: propState) {
    const [isEdit, setEdit] = useState<boolean>(false);
    const [newName, setNewName] = useState<string>(project.name);

    const handdleSave = () => {
        if (newName.trim() && newName !== project.name) {
            const updatedProject = new Project(newName);
            updatedProject.id = project.id;
            editProjects(updatedProject);
        }

        setEdit(false);
    }
    const handdleCancel = () => {
        setNewName(project.name);
        setEdit(false);
    }
    return (
        <div className="project-bar" onClick={onClick}>
            {isEdit ?
                (
                    <div>
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            onBlur={handdleCancel}
                            autoFocus
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handdleSave();
                                else if (e.key === "Escape") handdleCancel();
                            }}
                        />
                        <button onClick={()=>setEdit(false)}>c</button>
                    </div>
                ) : (
                    <span
                        onDoubleClick={() => setEdit(true)}
                    >
                        {project.name}
                    </span>
                )
            }
        </div>
    )
}