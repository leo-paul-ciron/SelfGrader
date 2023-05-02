import { Component } from '@angular/core';
import { AdminUserAddUserComponent } from '../admin-user-add-user/admin-user-add-user.component'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})

export class AdminUserComponent {
    constructor(private apiService: ApiService) { }

    afficherFormulaireAddUserBool = false;
    Utilisateurs : any = "";

    ngOnInit() {
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

    onSubmitFormAddUser (event: boolean)
    {
      this.afficherFormulaireAddUserBool = event;
    }
     


}
