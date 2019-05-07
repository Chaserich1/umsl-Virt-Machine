'use babel';

import PackageView from './package-view';
import { CompositeDisposable } from 'atom';
import PackageManager from 'atom';


export default {

  packageView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    require('atom-package-deps').install('umsl-Virt-Machine');
    this.packageView = new PackageView(state.packageViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.packageView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();




    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'package:toggle': () => this.toggle()
    }));
    //atom.commands.dispatch(atom.views.getView(atom.workspace), "platformio-ide-terminal:new")
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.packageView.destroy();
    //atom.config.set('flex-tool-bar.toolBarConfigurationFilePath', '.')
    //atom.packages.disablePackage('flex-tool-bar')
  },

  serialize() {
    return {
      packageViewState: this.packageView.serialize()
    };
  },

  toggle() {

    atom.packages.enablePackage('flex-tool-bar')
    let path = atom.packages.resolvePackagePath('umsl-Virt-Machine');
    atom.config.set('flex-tool-bar.toolBarConfigurationFilePath', path + '/lib/toolbar.js')
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
