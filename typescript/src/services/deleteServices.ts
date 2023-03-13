import Utils from "./utils";
import PrintService from "./printServices";
export default class DeeletServices {
    private utils = new Utils();
    private printServices = new PrintService();
    public deletTask(id: string) {
        let found = false
        this.utils.forEachProject((project, taskList) => {
            let newTasklist = taskList.splice(taskList.findIndex(a => a.id == id), 1)
            if (newTasklist.length > 0) {
                found = true
            }
        });

        if (!found)
            this.printServices.println(this.utils.format("Could not find a task with an ID of %s.", id));
    }
} 