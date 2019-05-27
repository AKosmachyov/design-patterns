abstract class EquipmentComponent {
	protected parent: EquipmentComponent;

	protected name: string;
	protected price: number;

	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
	}

	public add(eq: EquipmentComponent): void {
		throw new Error('You cannot add items here');
	}

	public remove(eq: EquipmentComponent): void {
		throw new Error('You cannot add items here');
	}

	public isComposite(): boolean {
		return false;
	}

	public abstract getFullPrice(): number;
}

class Floppy extends EquipmentComponent {
	constructor(price: number) {
		super('Floppy', price);
	}

	public getFullPrice(): number {
		return this.price;
	}
}

class BoxComposite extends EquipmentComponent {
	protected children: EquipmentComponent[] = [];

	constructor(price: number) {
		super('Box', price);
	}

	public add(eq: EquipmentComponent): void {
		this.children.push(eq);
	}

	public remove(eq: EquipmentComponent): void {
		const index = this.children.indexOf(eq);
		this.children.splice(index, 1);
	}

	public isComposite(): boolean {
		return true;
	}

	public getFullPrice(): number {
        const innerPrice = this.children.reduce((sum, eq) => sum + eq.getFullPrice(), 0);
		return innerPrice + this.price;
	}
}

function clientCode(eq: EquipmentComponent) {
	console.log(`Full price: ${eq.getFullPrice()}`);
}

const floppy1 = new Floppy(10);
const floppy2 = new Floppy(20);

const box1 = new BoxComposite(0.2);
const box2 = new BoxComposite(0.25);
const box3 = new BoxComposite(0.05);

box1.add(box2);
box2.add(floppy1);
box2.add(box3);
box3.add(floppy2);

clientCode(box1);
