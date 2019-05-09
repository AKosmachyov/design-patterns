class Singleton {
    static _instance: Singleton;
    static Instance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }

    private result = 0;
    private constructor() {
        throw Error("Use 'Singleton.Instance()' instead of 'new Singleton()'")
    }

    plus(n: number): void {
        this.result += n;
    }

    minus(n: number): void {
        this.result -= n;
    }
}