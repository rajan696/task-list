import PrintService from "./printServices";
import Utils from "./utils";
import Task from "../task";

export default class ShowServices {
    private printServices = new PrintService();

    private utils = new Utils();


    public show() {
        this.utils.forEachProject((project, taskList) => {
            this.printServices.println(project);
            taskList.forEach((task) => {
                this.printServices.println(this.utils.format("    [%s] %d: %s", (task.done ? 'x' : ' '), task.id, task.description));
            });
            this.printServices.println('');
        });
    }

    public

}