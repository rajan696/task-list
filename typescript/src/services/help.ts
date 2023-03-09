import PrintService from "./printServices";
export default class Help {

    public help() {
        let printServices = new PrintService();
        printServices.println("Commands:");
        printServices.println("  show");
        printServices.println("  add project <project name>");
        printServices.println("  add task <project name> <task description>");
        printServices.println("  check <task ID>");
        printServices.println("  uncheck <task ID>");
        printServices.println("");
    }
}