interface Product {
    print(text: string): void
}

class ConcreteProductA implements Product {
    print(text: string) {
        console.log(text);
    }
}

class ConcreteProductB implements Product {
    print(text: string) {
        console.log(text);
    }
}

class Creator {
    factoryMethod(): Product {
        return new ConcreteProductA();
    }
}

class ConcreteCreator extends Creator {
    factoryMethod(): Product {
        return new ConcreteProductB();
    }
}