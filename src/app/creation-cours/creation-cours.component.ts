import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-creation-cours',
  templateUrl: './creation-cours.component.html',
  styleUrls: ['./creation-cours.component.scss']
})
export class CreationCoursComponent {
  constructor(private router: Router, private apiService: ApiService) { }

  typeCompte : any = ""
  afficherFormulaireAddCoursBool = false;
  Cours : any = "";

  ngOnInit() {
    //récupération du type de compte dans la localStorage
    const Token : any = localStorage.getItem("token");
    const TokenDecode : any = jwt_decode(Token)
    this.typeCompte = TokenDecode.type;
    this.typeCompte = this.typeCompte.toLowerCase();

    this.apiService.GetCours().subscribe({
      next: (data) => {
        this.Cours = data
        console.log(this.Cours);
      },
    });

  }
  
  affichageFormAddCours()
  {
    this.afficherFormulaireAddCoursBool = true;
  }

  onSubmitFormAddCours(event: boolean)
  {
    this.afficherFormulaireAddCoursBool = event;
    this.apiService.GetCours().subscribe({
      next: (data) => {
        this.Cours = data
        console.log(this.Cours);
      },
    });
  }

  logout()
  {
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }
}
