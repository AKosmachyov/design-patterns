interface Subscriber {
    onUpdate(context: Publisher): void;
}

interface Publisher {
    subscribe(observer: Subscriber): void;
    unsubscribe(observer: Subscriber): void;
    notify(): void;
}

class NotificationPublisher implements Publisher {
    public state: number;
    private subscribers: Subscriber[] = [];

    subscribe(observer: Subscriber): void {
        const isExist = this.subscribers.indexOf(observer) > -1;
        if (isExist) {
            return console.log('Publisher: observer has already been subscribed');
        }

        console.log('Publisher: subscribe observer');
        this.subscribers.push(observer);
    }

    unsubscribe(observer: Subscriber): void {
        const index = this.subscribers.indexOf(observer);
        if (index === -1) {
            return console.log('Publisher: observer not founded');
        }

        console.log('Publisher: unsubscribe observer');
        this.subscribers.splice(index, 1);
    }

    notify(): void {
        console.log('Publisher: notify');
        for (const observer of this.subscribers) {
            observer.onUpdate(this);
        }
    }

    updateState(): void {
        this.state = Math.floor(Math.random() * 10);
        console.log(`Publisher: state has changed to - ${this.state}`);
        this.notify();
    }

}

class TabBar implements Subscriber {

    onUpdate(context: NotificationPublisher): void {
        console.log('Tab bar: receive update', context.state);
    }

}

class SideMenu implements Subscriber {

    onUpdate(context: NotificationPublisher): void {
        console.log('Side menu: receive update', context.state);
    }

}

function clientCode() {
    const publisher = new NotificationPublisher();

    const tabBar = new TabBar();
    publisher.subscribe(tabBar);

    const menu = new SideMenu();
    publisher.subscribe(menu);

    console.log();

    publisher.updateState();

    publisher.unsubscribe(menu);
    console.log();
    publisher.updateState();
}

clientCode()