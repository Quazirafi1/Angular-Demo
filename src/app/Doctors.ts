export class Doctors {
  name: string;
  org: string;
  availibility: JSON;
  visitDurationInMin: number;

  constructor(name, org, visitDurationInMin){
    this.name =name;
    this.org = org;
    this.availibility = this.availibility;
    this.visitDurationInMin = visitDurationInMin;
  }
}
