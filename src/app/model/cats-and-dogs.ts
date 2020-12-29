export class CatsAndDogs {
  status: string;
  catImageUrl: string;
  dogImageUrl: string;

  constructor(status: string, catImageUrl: string, dogImageUrl: string) {
    this.status = status;
    this.catImageUrl = catImageUrl;
    this.dogImageUrl = dogImageUrl;
  }
}
