import { User } from './user';

export interface UserResult {
    "results": User[],
    "info": {
      "seed": string;
      "results": number;
      "page": number;
      "version": string;
    }
  }