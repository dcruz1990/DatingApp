// tslint:disable-next-line: quotemark
import { Photo } from "./photo";

export interface User {
  id: number;
  username: string;
  knowAs: string;
  age: number;
  gender: string;
  created: Date;
  photoUrl: string;
  city: string;
  country: string;
  interest?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];
}
