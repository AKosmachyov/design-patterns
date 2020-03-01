interface TripStrategy {
    calcPrice(points: string[]): string;
}

class ConcreteStrategyBike implements TripStrategy {
    calcPrice(points: string[]): string {
        return '200$';
    }
}

class ConcreteStrategyPlane implements TripStrategy {
    calcPrice(points: string[]): string {
        return '600$';
    }
}

class Context {
    private strategy: TripStrategy;

    public setStrategy(strategy: TripStrategy) {
        this.strategy = strategy;
    }

    public executeStrategy(points: string[]) {
        return this.strategy.calcPrice(points);
    }
}

enum TripType {
    bike,
    plane
}

function clientCode() {
    const selectedType = Math.random() * 10 > 1 ? TripType.bike : TripType.plane;
    const context = new Context();

    if (selectedType == TripType.bike) {
        context.setStrategy(new ConcreteStrategyBike())
    }

    if (selectedType == TripType.plane) {
        context.setStrategy(new ConcreteStrategyPlane())
    }

    const totalPrice = context.executeStrategy([]);
    console.log(`Total price: ${totalPrice}`);
}

clientCode();