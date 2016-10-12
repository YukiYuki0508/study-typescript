export interface Observer extends Function {
  called?: boolean;
}

export class Observable {

  observers: Observer[];

  observe(observer: Observer) {
    if (!this.observers) {
      this.observers = [];
    }

    if (typeof observer !== "function") {
      throw new TypeError("observer is not function");
    }
    this.observers.push(observer);
  }

  hasObserver(observer: Observer): boolean {
    if (!this.observers) {
      return false;
    }

    return this.observers.indexOf(observer) >= 0;
  }

  notify(...arg: any[]) {
    if (!this.observers) {
      return;
    }

    this.observers.forEach((observer: Observer) => {
      try {
        observer.apply(this, arg);
      } catch (e) {
        console.log(e.message);
      }
    });
  }
}
