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
  private apiUrl = 'http://localhost:8094/Campi/AUTH/auth/register';
  private users : user;
  private id :any;
  private data : any ;
  private jsonContent : any ;
  private email : any;
  
  constructor(private http: HttpClient, private router: Router) { }
  


public register(user : user ): Observable<user>{
  return this.http.post<user>(this.apiUrl, user);

  }
  getUsers() :Observable<user[]> {
    return this.http.get<user[]>('http://localhost:8094/Campi/AUTH/auth/getUser');
  }

  getUserById(id : any):Observable<user>{
    return this.http.get<user>('http://localhost:8094/Campi/AUTH/auth/FindbyIdUser/'+id) ;
  
  }

    
banUser(idUser: number, days: number): Observable<user> {
  const url = `http://localhost:8094/Campi/User/banUser/${idUser}/${days}`;
  return this.http.get<user>(url);
}



  deleteUser(idUser: number): Observable<any> {
    return this.http.delete(`${this.API_URL1}/UserDelete/${idUser}`);
  }

  

  private API_URL1 = 'http://localhost:8094/Campi/User';
  updateUser(idUser: any , user :user): Observable<user> {
    return this.http.put<user>('http://localhost:8094/Campi/AUTH/auth/UserUpdate/{{id}}',user);
  }


  public login(user : user ): Observable<any>{
    return this.http.post<any>('http://localhost:8094/Campi/AUTH/auth/authenticate', user);
}

public EmailUser(email: any): Observable<user> {
  return this.http.get<user>('http://localhost:8094/Campi/AUTH/auth/findByEmail/'+email );
}


  parseJwt(){
    const jwtHelper = new JwtHelperService();
    const objJwt= jwtHelper.decodeToken(localStorage.getItem('token')!);
    this.id =localStorage.getItem('idUser');
        if(objJwt.sub!==null){
      this.router.navigate(['/user-profile/'+this.id])
    }
    else{
      this.router.navigate(['/landing'])
    }
  

}



  

}
function file_get_contents(arg0: string): any {
  throw new Error('Function not implemented.');
}

