import Utils from "./utils";
import PrintService from "./printServices";
export default class {
    private utils = new Utils();
    private printServices = new PrintService();
    public setDeadline(id: string, date: String) {
        var idString = id;
        var date = date;
        var found = false;
        this.utils.forEachProject((project, taskList) => {
            taskList.forEach((task) => {
                this.printServices.println(this.utils.format("    [%s] %d: %s", (task.done ? 'x' : ' '), task.id, task.description));
                if (task.id == idString) {
                    task.deadline = date;
                    found = true
                }
            });
            this.printServices.println('');
        });

        if (!found)
            this.printServices.println(this.utils.format("Could not find a task with an ID of %s.", idString), this.readline);
    }
}