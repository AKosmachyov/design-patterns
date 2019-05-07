interface WebView {
    load(url: string): void;
}

class MacWebView implements WebView {
    load(url: string) {
        console.log('Load url on Mac');
    }
}

class WinWebView implements WebView {
    load(url: string) {
        console.log('Load url on Win');
    }
}

interface Button {
    render(): void;
}

class MacButton implements Button {
    render() {
        console.log('Render on Mac');
    }
}

class WinButton implements Button {
    render() {
        console.log('Render on Win');
    }
}

interface GUIFactory {
    createWebView(): WebView;
    createButton(): Button;
}

class MacFactory implements GUIFactory {
    createWebView(): MacWebView {
        return new MacWebView();
    }

    createButton(): MacButton {
        return new MacButton();
    }
}

class WinFactory implements GUIFactory {
    createWebView(): WinWebView {
        return new WinWebView();
    }

    createButton(): WinButton {
        return new WinButton();
    }
}

class Application {
    factory: GUIFactory;

    constructor(factory: GUIFactory) {
        this.factory = factory;
    }

    openSite(url) {
        const webView = this.factory.createWebView();
        webView.load(url);
    }
}

const isMac = Math.random() * 10 > 5;
let factory: GUIFactory = isMac ? new MacFactory() : new WinFactory();
const app = new Application(factory);
app.openSite('https://test');