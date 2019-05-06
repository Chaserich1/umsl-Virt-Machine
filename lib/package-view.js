'use babel';

export default class PackageView {

  constructor(serializedState) {
    // Create root element
    // t



  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
