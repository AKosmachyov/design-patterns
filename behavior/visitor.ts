interface VisitorElement {
    accept(visitor: Visitor): void;
}

class HDD implements VisitorElement {
    public accept(visitor: Visitor): void {
        visitor.visitHDD(this);
    }
}

class CPU implements VisitorElement {
    public accept(visitor: Visitor): void {
        visitor.visitCPU(this);
    }

    public getActiveTime(): number {
        return 10;
    }
}

interface Visitor {
    visitHDD(element: HDD): void;
    visitCPU(element: CPU): void;
}

class UsageStatisticsVisitor implements Visitor {
    public visitHDD(element: HDD): void {
        // ignore hdd
    }
    public visitCPU(element: CPU): void {
        console.log(`CPU usage: ${element.getActiveTime()}`);
    }
}

class InventoryVisitor implements Visitor {
    public items = 0

    public visitHDD(element: HDD): void {
        this.items++;
    }

    public visitCPU(element: CPU): void {
        this.items++;
    }
}

function iterate(elements: VisitorElement[], visitor: Visitor) {
    for (const el of elements) {
        el.accept(visitor);
    }
}

function clientCode() {
    const components = [
        new CPU(),
        new HDD(),
    ];
    
    const visitor1 = new UsageStatisticsVisitor();
    iterate(components, visitor1);
    console.log('Process custom usage statistics');

    console.log();
    
    console.log('Calculate inventory:');
    const visitor2 = new InventoryVisitor();
    iterate(components, visitor2);
    console.log(`Owned ${visitor2.items} items`);
}

clientCode();