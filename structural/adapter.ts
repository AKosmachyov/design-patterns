class Target {
    public request(): string {
        return 'remote content';
    }
}

class Adaptee {
    public specificRequest(): string {
        return 'remote%20content';
    }
}

class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest();
        return decodeURI(result);
    }
}

function clientCode(target: Target) {
    console.log(target.request());
}

const target = new Target();
console.log('Existing class - result: ');
clientCode(target);

const libAdapter = new Adapter(new Adaptee());
console.log('New class adapted to the code - result:  ');
clientCode(libAdapter);