import Utils from "./utils";
import PrintService from "./printServices";
import readline from 'readline';
import moment from 'moment';
export default class DateView {
    private utils = new Utils();
    private printServices = new PrintService();
    private readline;
    public dateView(commandLine) {
        var subcommandRest = this.utils.splitFirstSpace(commandLine);
        var subCommand = subcommandRest[0];
        if (subCommand == 'deadline') {
            this.utils.forEachProject((project, taskList) => {
                this.printServices.println(project);
                taskList.sort(function (a: any, b: any) { return a._deadline - b._deadline }).forEach((task) => {
                    this.printServices.println(this.utils.format("    [%s] %s: %s %s", (task.done ? 'x' : ' '), task.id, task.description, task.deadline), this.readline);
                });
                this.printServices.println('');
            });
        }
    }

    public todayView() {
        this.utils.forEachProject((project, taskList) => {
            this.printServices.println(project);
            taskList.forEach((task) => {
                if (moment(moment(task.deadline).format('YYYY-MM-DD')).isSame(moment().format('YYYY-MM-DD')))
                    this.printServices.println(this.utils.format("    [%s] %s: %s %s", (task.done ? 'x' : ' '), task.id, task.description, task.deadline), this.readline);
            });
            this.printServices.println('');
        });
    }
} 