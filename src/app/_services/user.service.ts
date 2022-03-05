// ===============================
// AUTHOR     : David Capredoni
// CREATE DATE     : March 5, 2022
// PURPOSE     :  Call random user api
// SPECIAL NOTES:
//==================================
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { UserResult } from '../_models';

@Injectable()
export class UserService {

    private baseUrl = "https://randomuser.me/api/";
    private seed = "&seed=contactsapp"

    public constructor(private http: HttpClient) { }

    public list(pageNumber: number, pageSize: number) {
        return this.http.get<UserResult>(`${this.baseUrl}?page=${pageNumber}${this.seed}&results=${pageSize}`);
    }

}
