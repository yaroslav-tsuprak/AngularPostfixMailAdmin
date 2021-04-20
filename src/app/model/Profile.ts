import {ProfileSize} from './ProfileSize';

export class Profile {

  id: number;
  title: string;
  profileSize: ProfileSize;

  constructor(id: number, title: string, profileSize: ProfileSize) {
    this.id = id;
    this.title = title;
    this.profileSize = profileSize;
  }
}
