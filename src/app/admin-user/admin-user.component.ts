import { Component } from '@angular/core';
import { AdminUserAddUserComponent } from '../admin-user-add-user/admin-user-add-user.component'

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})

export class AdminUserComponent {
    afficherFormulaireAddUserBool: boolean = false;

    // Affiche conditionel du formulaire
    //lors du click sur le boutton le formulaire apparait.
    affichageFormAddUser()
    {
        this.afficherFormulaireAddUserBool = true; 
    } 
     
}
