import PrintService from "./printServices";
import Utils from "./utils";

export default class UpdateService {
    private printServices = new PrintService();
    private utils = new Utils();
    public check(idString: string) {
        this.setDone(idString, true);
    }

    public uncheck(idString: string) {
        this.setDone(idString, false);
    }

    private setDone(idString: string, done: boolean) {
        var id = parseInt(idString, 10);
        var found = false;
        this.utils.forEachProject((project, taskList) => {
            taskList.forEach((task) => {
                if (task.id == id) {
                    task.done = done;
                    found = true;
                }
            });
        });
        if (!found)
            this.printServices.println(this.utils.format("Could not find a task with an ID of %d.", id));
    }

}