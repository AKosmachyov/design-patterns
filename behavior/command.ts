interface Command {
    execute(): void;
}

class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(`simpleCommand: execute action with ${this.payload}`);
    }
}

class ComplexCommand implements Command {
    private receiver: Receiver;
    private userName: string;
    private status: string;

    constructor(receiver: Receiver, userName: string, status: string) {
        this.receiver = receiver;
        this.userName = userName;
        this.status = status;
    }

    public execute(): void {
        console.log('complexCommand: excute complex command');
        this.receiver.actionA(this.userName);
        this.receiver.actionB(this.status);
    }
}

class Receiver {

    public actionA(text: string): void {
        console.log(`receiver: excute action A with ${text}`);
    }

    public actionB(text: string): void {
        console.log(`receiver: excute action B with ${text}`);
    }
}

class Invoker {
    private command: Command;

    constructor(command: Command) {
        this.command = command;
    }

    public invoke(): void {
        this.command.execute();
    }
}

function clientCode() {
    const application = new Receiver();
    const complexCommand = new ComplexCommand(application, 'Alex', 'blocked');
    const menuItem = new Invoker(complexCommand);
    menuItem.invoke();

    const button = new Invoker(new SimpleCommand('Hi!'));
    button.invoke();
}

clientCode();