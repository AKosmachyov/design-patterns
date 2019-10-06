interface Product {
    description: string;
}

interface Builder {
    buildRoom(number: number): void;
    buildDoor(fromRoom: number, toRoom: number): void;
    getMaze(): Product;
}

class ConcreteBuilder1 implements Builder {
    private roomCount = 0;
    private enemyCount = 0;

    spawnEnemy(force: number, room: number) {
        this.enemyCount++;
    };

    buildRoom(number: number) {
        this.roomCount++;
    };

    buildDoor(fromRoom: number, toRoom: number) { };

    getMaze(): Product {
        return {
            description: `Maze with ${this.roomCount} rooms with ${this.enemyCount} enemies`
        }
    };
}

class Director {
    public buildEasyMaze(): Product {
        const builder = new ConcreteBuilder1();
        builder.buildRoom(1);
        builder.buildRoom(2);
        builder.buildRoom(3);
        builder.buildDoor(1, 2);
        builder.buildDoor(2, 3);
        return builder.getMaze();
    }

    public buildHardMaze(): Product {
        const builder = new ConcreteBuilder1();
        builder.buildRoom(1);
        builder.buildRoom(2);
        builder.buildDoor(1, 2);
        builder.spawnEnemy(200, 1);
        builder.spawnEnemy(500, 2);
        return builder.getMaze();
    }
}

function clientCode() {
    const director = new Director();
    const builder = new ConcreteBuilder1();

    console.log('Eazy maze:');
    const easyMaze = director.buildEasyMaze();
    console.log(easyMaze.description);

    console.log('Hard maze:');
    const hardMaze = director.buildHardMaze();
    console.log(hardMaze.description);

    // Can be used without Director
    console.log('Custom maze:');
    builder.buildRoom(1);
    builder.spawnEnemy(400, 1);
    builder.spawnEnemy(1400, 1);
    builder.spawnEnemy(2400, 1);
    const customMaze = builder.getMaze();
    console.log(customMaze.description);
}

clientCode();