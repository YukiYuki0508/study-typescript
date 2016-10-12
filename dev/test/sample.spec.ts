import {assert} from 'chai';
import {Observable, Observer} from "../ts/sample";

describe("Observable Test", () => {

  it("should store functions.", () => {
    let observable = new Observable();
    let observers = [
      () => {
      },
      () => {
      }
    ];

    observable.observe(observers[0]);
    observable.observe(observers[1]);

    assert.equal(observable.hasObserver(observers[0]), true);
    assert.equal(observable.hasObserver(observers[1]), true);
  });

  it("should return false when has no observers.", () => {
    let observable = new Observable();
    let observer = () => {
    };

    assert.equal(observable.hasObserver(observer), false);
  });

  it("should call all observers.", () => {
    let observable = new Observable();
    let observer1: Observer = () => {
      observer1.called = true;
    };
    let observer2: Observer = () => {
      observer2.called = true;
    };

    observable.observe(observer1);
    observable.observe(observer2);
    observable.notify("event");

    assert.equal(observer1.called, true);
    assert.equal(observer2.called, true);
  });

  it("should pass through arguments", () => {
    let observable = new Observable();
    let actual: (number|string|Function)[];

    observable.observe(function () {
      actual = Array.prototype.slice.call(arguments);
    });

    observable.notify("String", 1, 32);

    assert.equal("String", actual[0]);
    assert.equal(1, actual[1]);
    assert.equal(32, actual[2]);
  });

  it("should notify all even when some fail.", () => {
    let observable = new Observable();
    let observer1: Observer = () => {
      throw new Error("Test Error Log");
    };
    let observer2: Observer = () => {
      observer2.called = true;
    };

    observable.observe(observer1);
    observable.observe(observer2);
    observable.notify("event");

    assert.equal(observer2.called, true);
  });

  it("should call observers in the order they were added.", () => {
    let observable = new Observable();
    let calls: Observer[] = [];

    let observer1: Observer = () => {
      calls.push(observer1);
    };
    let observer2: Observer = () => {
      calls.push(observer2);
    };

    observable.observe(observer1);
    observable.observe(observer2);
    observable.notify("event");

    assert.equal(observer1, calls[0]);
    assert.equal(observer2, calls[1]);
  });

  it("should not fail if no observers.", () => {
    let observable = new Observable();

    assert.doesNotThrow(() => {
      observable.notify("event");
    });
  });
});
