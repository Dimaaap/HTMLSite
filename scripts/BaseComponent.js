class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error("You can`t create objects of abstract class");
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => {
        return target[prop];
      },

      set: (target, prop, newValue) => {
        const oldValue = target[prop];

        target[prop] = newValue;

        if (newValue !== oldValue) {
          this.updateUI();
        }
        return true;
      },
    });
  }

  updateUI() {
    throw new Error(
      "You should create updateUI in your class extended from BaseComponent"
    );
  }
}

export default BaseComponent;
