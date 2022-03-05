// ===============================
// AUTHOR     : David Capredoni
// CREATE DATE     : March 5, 2022
// PURPOSE     :  General service for miscellaneous functions 
// SPECIAL NOTES:
//==================================
import { Injectable } from '@angular/core';
import { User } from '../_models';

@Injectable()
export class GeneralService {

    public users: User[] = [];

    public constructor() {}

    public addUsers(cusers: User[]) {
        for ( let x = 0; x < cusers.length; x++) {
            let user: User = cusers[x];
            if (user != null && user.login != null && user.login.uuid != null) {
                let searchUser = this.users.find(elem => elem.login != null && elem.login.uuid === user.login.uuid);
                if (searchUser == null) {
                    this.users.push(user);
                }
            }
        }
    }

    public findUser(uuid: string) {
        return  this.users.find(elem => elem.login.uuid === uuid);
    }

}