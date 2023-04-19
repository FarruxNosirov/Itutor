export class Loading {
  static ref: any;

  static set(ref: any) {
    this.ref = ref;
  }

  static show = () => {
    this.ref?.current?.show();
  };

  static hide = () => {
    this.ref?.current?.hide();
  };
}
