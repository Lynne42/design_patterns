export enum ProfileType {
  'coworker' = 'coworker',
  'friend' = 'friend',
}

export interface ProfileInfo {
  id: string | number;
  email: string;
  type?: ProfileType | '';
}

class Profile {
  private id: string = '';
  private email: string = '';
  private type: ProfileType | '' = '';

  constructor(info: ProfileInfo) {
    this.id = info.id;
    this.email = info.email;
    this.type = info.type || '';
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getType() {
    return this.type;
  }
}

export default Profile;