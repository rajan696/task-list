import Task from '../task';

export default class AddProject {
    public addProject(name: string) {
        Task[name] = [];
    }

}