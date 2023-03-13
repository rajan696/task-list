import Task from '../task';
import PrintService from './printServices';
import Utils from './utils';

export default class AddTask {
    private Task;
    private utils = new Utils();
    public addTask(project: string, description: string, nextId) {
        let printServices = new PrintService();
        var projectTasks = this.Task[project];
        if (projectTasks == null) {
            printServices.println(this.utils.format("Could not find a project with the name \"%s\".", project));
            return;
        }
        projectTasks.push(new Task(nextId, description, false, new Date()));
    }
}