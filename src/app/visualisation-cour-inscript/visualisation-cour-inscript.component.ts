import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-visualisation-cour-inscript',
  templateUrl: './visualisation-cour-inscript.component.html',
  styleUrls: ['./visualisation-cour-inscript.component.scss']
})
export class VisualisationCourInscriptComponent {

  constructor(private router: Router, private apiService: ApiService) { }

  typeCompte : any = ""
  idUtilisateur : string = ""
  afficherFormulaireAddCoursBool = false;
  Cours : any = "";
  Resultat : any = "";
  affichageCompetence = false;
  ProjetId : string = "";

  ngOnInit() {
    //récupération du type de compte dans la localStorage
    const Token : any = localStorage.getItem("token");
    const TokenDecode : any = jwt_decode(Token)
    this.typeCompte = TokenDecode.type;
    this.typeCompte = this.typeCompte.toLowerCase();
    this.idUtilisateur = TokenDecode.utilisateur;
    console.log(this.idUtilisateur)
    this.apiService.VisualisationCour({idEtudiant : this.idUtilisateur}).subscribe({
      next: (data) => {
        this.Cours = data
        console.log(this.Cours);
      },
    });

  }

  Etudier(idProjet : string)
  {

    this.ProjetId = idProjet;
    this.affichageCompetence = true
   
  }

  logout()
  {
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }

}
