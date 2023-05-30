import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-creation-competence',
  templateUrl: './creation-competence.component.html',
  styleUrls: ['./creation-competence.component.scss']
})
export class CreationCompetenceComponent {
  
  constructor(private router: Router, private apiService: ApiService) { }

  typeCompte : any = ""
  afficherFormulaireAddCompetenceBool = false;
  Competences : any = "";

  ngOnInit() {
    //récupération du type de compte dans la localStorage
    const Token : any = localStorage.getItem("token");
    const TokenDecode : any = jwt_decode(Token)
    this.typeCompte = TokenDecode.type;
    this.typeCompte = this.typeCompte.toLowerCase();

    this.apiService.GetCompetence().subscribe({
      next: (data) => {
        this.Competences = data
        console.log(this.Competences);
      },
    });

  }
  
  affichageFormAddCompetence()
  {
    this.afficherFormulaireAddCompetenceBool = true;
  }

  onSubmitFormAddCompetence(event: boolean)
  {
    this.afficherFormulaireAddCompetenceBool = event;
    this.apiService.GetCompetence().subscribe({
      next: (data) => {
        this.Competences = data
        console.log(this.Competences);
      },
    });
  }

  logout()
  {
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }
}
