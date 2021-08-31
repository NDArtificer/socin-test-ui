import { UserGit } from './user/user-git-list/userGit';
import { User } from './login/user';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUserGit:string = environment.apiUrlBase +'/users-git'
  apiUrl: string = environment.apiUrlBase + '/users';
  tokenUrl: string = environment.apiUrlBase + environment.tokenUrl;
  clientId: string = environment.clientid;
  clienSecret: string = environment.clientSecret;

  constructor(
    private http: HttpClient
  ) { }

  save(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl, user)
  }


  getUsersGit( ): Observable<UserGit[]>{
    const token = JSON.parse(localStorage.getItem('access_token') || '{}');
    const headers = {
      'Authorization' : 'Bearer ' + token.access_token
    }
    return this.http.get<UserGit[]>(this.apiUserGit, {headers})
  }

  doLogin(email: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', email)
      .set('password', password)
      .set('grant_type', 'password')
    const headers = {
      'Authorization': "Basic " + btoa(`${this.clientId}:${this.clienSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return this, this.http.post(this.tokenUrl, params.toString(), { headers })
  }
}
