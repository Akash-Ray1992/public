import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private httpClient: HttpClient) { }

    getActiveUsers() {
        let params;       
        params = { page: 1 };
        return this.httpClient.get('https://reqres.in/api/users/', { params: params, withCredentials: false });        
    }

    getArchivedUsers() {
        let params;       
        params = { page: 2 };
        return this.httpClient.get('https://reqres.in/api/users/', { params: params, withCredentials: false });        
    }
}
