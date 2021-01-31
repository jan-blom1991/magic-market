import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable()
export class RegisterService {

    constructor(private http: HttpClient) {}

    addUser(user: User): Observable<number> {
        return this.http.post<number>('http://localhost:8082/users/', user);
    }
}
