import Task from "../task";
export default class Utils {

    private tasks: { [index: string]: Task[] } = {};
    public splitFirstSpace(s: string) {
        var pos = s.indexOf(' ');
        if (pos === -1) {
            return [s];
        }
        return [s.substr(0, pos), s.substr(pos + 1)]
    }

    public format(s: string, entity: any) {
        return `${s}+${JSON.stringify(entity)}`

    }

    public forEachProject(func: (key: string, value: Task[]) => any) {
        for (var key in this.tasks) {
            if (this.tasks.hasOwnProperty(key))
                func(key, this.tasks[key])
        }
    }
}