import { useState } from 'react';
import { Project } from '../../Model/Project';
import './Content.css';

interface propState {
    project: Project | undefined
    editProjects: (project: Project) => void
}

export function Temp({ project, editProjects }: propState) {
    const [isEdit, setEdit] = useState<boolean>(false);
    const [newName, setNewName] = useState<string>(project?.name || "");

    const handdleSave = () => {
        if (project && newName.trim() && newName !== project.name) {
            const updatedProject = new Project(newName);
            updatedProject.id = project.id;
            editProjects(updatedProject);
        }

        setEdit(false);
    }
    const handdleCancel = () => {
        if (project) {
            setNewName(project.name);
        }
        setEdit(false);
    }
    return (
        <div className="content">
            {project ?
                (isEdit ?
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
                            <button onClick={() => setEdit(false)}>c</button>
                        </div>
                    ) : (
                        <span
                            onDoubleClick={() => setEdit(true)}
                        >
                            {project.name}
                        </span>
                    )
                ) :
                (
                    <div>
                        {"pls select project"}
                    </div>
                )

            }
        </div>
    )
}