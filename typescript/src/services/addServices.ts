import Task from '../task';
import PrintService from './printServices';
import Utils from './utils';
import AddProject from './addProject';
import AddTask from './addTask';
export default class AddServices {
    private Task;
    private lastId = 0;
    private utils = new Utils();
    private addTaskServices = new AddTask();
    private addProjectServices = new AddProject();


    public add(commandLine: string) {
        var subcommandRest = this.utils.splitFirstSpace(commandLine);
        var subcommand = subcommandRest[0];
        if (subcommand === "project") {
            this.addProjectServices.addProject(subcommandRest[1]);
        } else if (subcommand === "task") {
            var projectTask = this.utils.splitFirstSpace(subcommandRest[1]);
            this.addTaskServices.addTask(projectTask[0], projectTask[1], this.nextId());
        }
    }
    private nextId(): number {
        return ++this.lastId;
    }

}