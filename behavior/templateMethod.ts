abstract class ElectricalAppliance {

    public templateMethod(): void {
        this.enableStatistics();
        this.checkСomponents();
        this.hookAfterOn();
    }

    protected enableStatistics(): void {
        console.log('abstract class: enable statistic logs');
    }

    protected abstract checkСomponents(): void;
    protected hookAfterOn(): void { }
}

class Car extends ElectricalAppliance {

    protected checkСomponents(): void {
        console.log('car: check sensors');
    }

    hookAfterOn() {
        console.log('car: enable light');
    }

}

class Oven extends ElectricalAppliance {

    protected checkСomponents(): void {
        console.log('oven: check heating elements');
    }

}

function turnOn(target: ElectricalAppliance) {
    target.templateMethod();
}

function clientCode() {
    turnOn(new Car());
    turnOn(new Oven());
}

clientCode();
