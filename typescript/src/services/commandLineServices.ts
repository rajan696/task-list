import Utils from "./utils";
import AddServices from './addServices'
import UpdateService from "./updateService";
import Help from './help'
import ErrorService from "./ErrorServices";
import ShowServices from "./showServices";
import DeeletServices from "./deleteServices";
import DeadlineUpdateService from "./deadlineUpdateService";
import DateView from "./dateView";
import DeadLineView from "./deadLineView";
import ProjectView from "./ProjectView";

export default class CommandLineService {
    private uitls = new Utils();
    private addServices = new AddServices();
    private updateServices = new UpdateService();
    private helpServices = new Help()
    private errorServices = new ErrorService();
    private showServices = new ShowServices();
    private deleteServices = new DeeletServices();
    private deadlineUpdateService = new DeadlineUpdateService();
    private dateView = new DateView();
    private deadLineView = new DeadLineView();
    private projectView = new ProjectView();


    public execute(commandLine: string) {
        var commandRest = this.uitls.splitFirstSpace(commandLine);
        var command = commandRest[0];
        switch (command) {
            case "view by project":
                this.showServices.show();
                break;
            case "add":
                this.addServices.add(commandRest[1]);
                break;
            case "check":
                this.updateServices.check(commandRest[1]);
                break;
            case "uncheck":
                this.updateServices.uncheck(commandRest[1]);
                break;
            case "help":
                this.helpServices.help();
                break;
            case "delete":
                this.deleteServices.deletTask(commandRest[1]);
                break;
            case "deadline":
                this.deadlineUpdateService.setDeadline(commandRest[1], commandRest[2]);
                break;
            case "today":
                this.dateView.todayView();
                break;
            case "view by date":
                this.dateView.dateView(commandRest);
                break;
            default:
                this.errorServices.error(command);
                break;
        }
    }

}