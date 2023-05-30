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
      return this.http.get('http://localhost:3000/admin');
  }

  Login(Compte: any)
  {
      return this.http.post('http://localhost:3000/connexion', Compte);
  }

  GetCompetence()
  {
    return this.http.get("http://localhost:3000/competence");
  }

   /**
   * Envois des informations d'un utilisateur sur la route :
   * http://localhost:3000/admin/addUser.
   * 
   * @param competenceJson 
   * @returns 
   * 
   */
  AddCompetence(competenceJson: any) {
    return this.http.post('http://localhost:3000/competence/add', competenceJson);
  }

  GetCours()
  {
    return this.http.get("http://localhost:3000/cour");
  }

   /**
   * Envois des informations d'un utilisateur sur la route :
   * http://localhost:3000/admin/addUser.
   * 
   * @param courJson 
   * @returns 
   * 
   */
  AddCour(courJson: any) {
    return this.http.post('http://localhost:3000/cour/add', courJson);
  }

  InscriptionCour(inscriptionJson : any)
  {
    return this.http.post("http://localhost:3000/inscription/:id", inscriptionJson);
  }

  VisualisationCour(etudiantJson : any)
  {
    return this.http.get('http://localhost:3000/cour/inscrit', { params: etudiantJson });
  }

  VisualisationCompetence(resultatInfo : any )
  {
    return this.http.get('http://localhost:3000/etudiant/projet/competence', {params : resultatInfo});
  }

  ModifCompetence(resultatInfo : any)
  {
    return this.http.put('http://localhost:3000/etudiant/compente/maitrisse', {params : resultatInfo});
  }
}