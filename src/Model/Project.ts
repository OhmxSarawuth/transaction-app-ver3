import {v4 as uuidv4} from 'uuid';

export class Project{
    id : string;
    name : string;

    constructor(name:string){
        this.name = name;
        this.id = uuidv4();
    }
}