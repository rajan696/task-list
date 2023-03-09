
export default class Task {
    constructor(private _id: number, private _description: string, private _done: boolean, private _deadLine: Date) { }

    get id() {
        return this._id;
    }

    get description() {
        return this._description;
    }

    get done() {
        return this._done;
    }

    set done(val: boolean) {
        this._done = val;
    }

    set deadline(val: Date) {
        this._deadLine = val
    }

    get deadLine() {
        return this.deadLine;
    }
}

