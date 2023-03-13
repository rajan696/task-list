import readline from 'readline';

export default class PrintService {
    private readline;
    public println(ln: string) {
        this.readline.output.write(ln);
        this.readline.output.write('\n');
    }
}
