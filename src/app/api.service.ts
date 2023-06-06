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
      return this.http.post('http://localhost:3000/admin/addUser', utilisateurJson, { withCredentials: true });
  }

  GetUser()
  {
      return this.http.get('http://localhost:3000/admin', { withCredentials: true });
  }

  Login(Compte: any)
  {
      return this.http.post('http://localhost:3000/connexion', Compte,{ withCredentials: true });
  }

  GetCompetence(competenceInfo : any)
  {
    return this.http.get("http://localhost:3000/competence", {params : competenceInfo, withCredentials: true});
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
    return this.http.post('http://localhost:3000/competence/add', competenceJson, { withCredentials: true });
  }

  GetCours()
  {
    return this.http.get("http://localhost:3000/cour", { withCredentials: true });
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
    return this.http.post('http://localhost:3000/cour/add', courJson, { withCredentials: true });
  }

  InscriptionCour(inscriptionJson : any)
  {
    return this.http.post("http://localhost:3000/inscription/:id", inscriptionJson, { withCredentials: true });
  }

  VisualisationCour(etudiantJson : any)
  {
    return this.http.get('http://localhost:3000/cour/inscrit', { params: etudiantJson, withCredentials: true }, );
  }

  VisualisationCompetence(resultatInfo : any )
  {
    return this.http.get('http://localhost:3000/etudiant/projet/competence', {params : resultatInfo, withCredentials: true});
  }

  ModifCompetence(resultatInfo : any)
  { 
    return this.http.post('http://localhost:3000/modif/resultat', resultatInfo, { withCredentials: true });
  }

  CompetenceEtudiant(etudiantInfo : any)
  { 
    return this.http.get('http://localhost:3000/etudiant/competence',{params :  etudiantInfo, withCredentials: true});
  }

  SupressionUserAdmin(utilisateurInfo : any)
  {
    const url = `http://localhost:3000/admin/deleteUser/${utilisateurInfo}`;
    return this.http.delete(url, { withCredentials: true })
  }

}