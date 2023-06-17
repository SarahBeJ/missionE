import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private apiUrl = 'http://localhost:8092/Campi/AUTH/auth/register';

  
  constructor(private http: HttpClient, private router: Router) { }
  


public register(user : user ): Observable<user>{
  return this.http.post<user>(this.apiUrl, user);

  }
  getUsers() :Observable<user[]> {
    return this.http.get<user[]>('http://localhost:8092/Campi/User/gettAllUsers');
  }

  getUserById(id : any):Observable<user>{
    return this.http.get<user>('http://localhost:8092/Campi/User/FindbyIdUser/'+id) ;
  
  }

    
banUser(idUser: number, days: number): Observable<user> {
  const url = `http://localhost:8092/Campi/User/banUser/${idUser}/${days}`;
  return this.http.get<user>(url);
}



  deleteUser(idUser: number): Observable<any> {
    return this.http.delete(`${this.API_URL1}/UserDelete/${idUser}`);
  }

  

  private API_URL1 = 'http://localhost:8092/Campi/User';
  updateUser(idUser: any , user :user): Observable<user> {
    return this.http.put<user>(`${this.API_URL1}/UserUpdate/${idUser}`, user);
  }


  public login(user : user ): Observable<any>{
    return this.http.post<any>('http://localhost:8092/Campi/AUTH/auth/authenticate', user);
}

  parseJwt(){
    const jwtHelper = new JwtHelperService();
    const objJwt= jwtHelper.decodeToken(localStorage.getItem('token')!);
    console.log(objJwt);

    if(objJwt.role=='OWNER' || objJwt.role=='CLIENT'|| objJwt.role=='ADMIN'){
      this.router.navigate(['/user-profile/'])
    }
    else{
      this.router.navigate(['/landing'])
    }

}



  

}
