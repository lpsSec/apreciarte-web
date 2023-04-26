export interface UserInterface {
  _id?: string;
  id?: string | undefined;
  name?: string;
  email?: string;
  photoUrl?: string;
  tagListLiteraria?: Array<number>;
  tagListEstetica?: Array<number>;
  following?: Array<string | undefined>;
  followed?: Array<string | undefined>;
  profileType?: number;
  birthDate?: string;
  password?: string;
  artcoins?: number;
  library?: Array<string>;
  lastAccess?: string;
  createdAt?: string;
  updatedAt?: string;
};