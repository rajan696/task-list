import PrintService from "./printServices";

export default class ErrorService {
    public error(command: string) {
        let printServices = new PrintService();
        printServices.println('I don\'t know what the command "' + command + '" is.');
    }
}