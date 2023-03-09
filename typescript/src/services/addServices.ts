import Task from '../task';
import PrintService from './printServices';
import Utils from './utils';

export default class AddServices {
    private Task;
    private lastId = 0;
    private utils = new Utils();

    public addTask(project: string, description: string) {
        let printServices = new PrintService();
        var projectTasks = this.Task[project];
        if (projectTasks == null) {
            printServices.println(this.utils.format("Could not find a project with the name \"%s\".", project));
            return;
        }
        projectTasks.push(new Task(this.nextId(), description, false, new Date()));
    }

    public add(commandLine: string) {
        var subcommandRest = this.utils.splitFirstSpace(commandLine);
        var subcommand = subcommandRest[0];
        if (subcommand === "project") {
            this.addProject(subcommandRest[1]);
        } else if (subcommand === "task") {
            var projectTask = this.utils.splitFirstSpace(subcommandRest[1]);
            this.addTask(projectTask[0], projectTask[1]);
        }
    }

    private addProject(name: string) {
        Task[name] = [];
    }

    private nextId(): number {
        return ++this.lastId;
    }

}