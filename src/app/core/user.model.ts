export class FirebaseUserModel {
  image: string;
  name: string;
  provider: string;
  id: string;
  boxesClicked: number;

  constructor(){
    this.image = "";
    this.name = "";
    this.provider = "";
    this.id = "";
    this.boxesClicked = 0;
  }
}
