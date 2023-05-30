import { Component } from '@angular/core';
import { AdminUserAddUserComponent } from '../admin-user-add-user/admin-user-add-user.component'
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})

export class AdminUserComponent {
    
  constructor(private apiService: ApiService, private router: Router) { }



  typeCompte : any = ""

  logout()
  {
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }

    afficherFormulaireAddUserBool = false;
    Utilisateurs : any = "";

    ngOnInit() {
      
      //récupération du type de compte dans la localStorage
      const Token : any = localStorage.getItem("token");
      const TokenDecode : any = jwt_decode(Token)
      this.typeCompte = TokenDecode.type;
      this.typeCompte = this.typeCompte.toLowerCase()

      this.apiService.GetUser().subscribe({
        next: (data) => {
          this.Utilisateurs = data
          console.log(this.Utilisateurs);
        },
      });

      
    }

    // Affiche conditionel du formulaire
    //lors du click sur le boutton le formulaire apparait.
    affichageFormAddUser()
    {
        this.afficherFormulaireAddUserBool = true; 
    } 

    //envois du formulaire
    onSubmitFormAddUser (event: boolean)
    {
      this.afficherFormulaireAddUserBool = event;

      this.apiService.GetUser().subscribe({
        next: (data) => {
          this.Utilisateurs = data
          console.log(this.Utilisateurs);
        },
      });
    }
     


}
