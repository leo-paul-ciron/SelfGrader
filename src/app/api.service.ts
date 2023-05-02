import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  /**
   * Envois des informations d'un utilisateur sur la route :
   * http://localhost:3000/admin/addUser.
   * 
   * @param utilisateurJson 
   * @returns 
   * 
   */
  AddUser(utilisateurJson: any) {
      return this.http.post('http://localhost:3000/admin/addUser', utilisateurJson);
  }

  GetUser()
  {
      return this.http.get('http://localhost:3000/admin')
  }
}
