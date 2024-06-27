interface Component {
  mainText: string;
  toolTipText: string;
  color: string;
  onclick: () => void;
  addChildren: (children: Component[]) => void;
}

class Button implements Component {
  color: string;
  mainText: string;
  toolTipText: string;
  constructor(color: string, mainText: string, toolTipText: string) {
    this.color = color;
    this.mainText = mainText;
    this.toolTipText = toolTipText;
  }
  onclick(): void {
    console.log("Button clicked");
  }
  addChildren: (children: Component[]) => void;
}

class Panel implements Component {
  color: string;
  mainText: string;
  toolTipText: string;
  constructor(color: string, mainText: string, toolTipText: string) {
    this.color = color;
    this.mainText = mainText;
    this.toolTipText = toolTipText;
  }
  onclick(): void {
    console.log("Panel clicked");
  }
  addChildren: (children: Component[]) => void;
}

class Dialog implements Component {
  color: string;
  mainText: string;
  toolTipText: string;
  constructor(color: string, mainText: string, toolTipText: string) {
    this.color = color;
    this.mainText = mainText;
    this.toolTipText = toolTipText;
  }
  onclick(): void {
    console.log("Dialog clicked");
  }
  addChildren: (children: Component[]) => void;
}

class Application {
  components: Component[] = [];

  addUI(): Component {
    const bt1 = new Button("red", "Button 1", "Button 1 tooltip");
    const bt2 = new Button("blue", "Button 2", "Button 2 tooltip");
    const panel = new Panel("green", "Panel 1", "Panel 1 tooltip");
    panel.addChildren([bt1, bt2]);
    const dialog = new Dialog("yellow", "Dialog 1", "Dialog 1 tooltip");
    dialog.addChildren([panel]);
    return dialog;
  }

  onClick() {
    this.components.forEach((component) => {
      component.onclick();
    });
  }
}
