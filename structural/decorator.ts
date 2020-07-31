interface UIElement {
    draw(): void;
}

class TextField implements UIElement {

    draw() {
        console.log('draw text field');
    }

}

class Decorator implements UIElement {
    protected component: UIElement;

    constructor(component: UIElement) {
        this.component = component;
    }

    draw() {
        this.component.draw();
    }

}

class BorderDecorator extends Decorator {

    draw() {
        console.log('draw border');
        this.component.draw();
    }

}

class ScrollDecorator extends Decorator {

    draw() {
        console.log('draw scroll');
        this.component.draw();
    }

}

function renderUI(component: UIElement) {
    component.draw();
}

function clientCode() {
    const textField = new TextField();
    const border = new BorderDecorator(textField);
    renderUI(border);
    console.log('');
    const scroll = new ScrollDecorator(border);
    renderUI(scroll);
}

clientCode();