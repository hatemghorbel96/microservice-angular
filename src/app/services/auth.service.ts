import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedUser!:string;
  public isloggedIn: Boolean = false;
  public roles!:string[];

   
  apiURL: string = 'http://localhost:8500';
  token!:string;

  private helper = new JwtHelperService();
 
    constructor(private router: Router,
                private http : HttpClient) { }
  

  login(user : User)
  {
  return this.http.post<User>(this.apiURL+'/login', user , {observe:'response'});
  }
 
  getToken():string {
    return this.token;
  }


  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isloggedIn = true; 
    this.decodeJWT(); 
}

decodeJWT()
{   if (this.token == undefined)
          return;
  const decodedToken = this.helper.decodeToken(this.token);
  this.roles = decodedToken.roles;
  this.loggedUser = decodedToken.sub;
}
loadToken() {
  this.token = localStorage.getItem('jwt')!;
  this.decodeJWT();
}



logout() { 
  this.loggedUser = undefined!;
  this.roles = undefined!;
  this.token= undefined!;
  this.isloggedIn = false;
  localStorage.removeItem('jwt');
  this.router.navigate(['/login']);

}



  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
       return false;
    return  (this.roles.indexOf('ADMIN') >-1);

  }

  isTokenExpired(): Boolean
  {
    return  this.helper.isTokenExpired(this.token);   
  }





 /*  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  } */

 /*  getUserRoles(username :string){    
    this.users.forEach((curUser) => {
      if( curUser.username == username ) {
          this.roles = curUser.roles;
      }
    });
  } */


}