import {Profile} from './Profile';

export class Mailbox {
  id: number;
  fullName: string;
  address: string;
  passwordHash: string;
  profile: Profile;
  date: Date;
  disabled: boolean;

  constructor(id: number, fullName: string, address: string, passwordHash: string, profile: Profile, date: Date, disabled: boolean) {
    this.id = id;
    this.fullName = fullName;
    this.address = address;
    this.passwordHash = passwordHash;
    this.profile = profile;
    this.date = date;
    this.disabled = disabled;
  }
}
