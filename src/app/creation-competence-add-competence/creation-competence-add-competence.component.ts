import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-creation-competence-add-competence',
  templateUrl: './creation-competence-add-competence.component.html',
  styleUrls: ['./creation-competence-add-competence.component.scss']
})
export class CreationCompetenceAddCompetenceComponent {

  constructor(private apiService: ApiService) { }
   //on récupère du parent
   @Input() afficherFormulaireAddCompetenceBool: boolean = true;

   /*
   * on créer un EventEmiter pour avertir le composant parent du changement
   * de valeur de la variable.
   */
   @Output() AfficherPageAdminEventEmitter = new EventEmitter<boolean>();

    // Affiche conditionel du formulaire
    //lors du click sur le boutton le formulaire apparait.
    FormAddCompetenceDisparition()
    { 
      this.afficherFormulaireAddCompetenceBool = false; 

      //on envois l'event de changement de la variable
      this.AfficherPageAdminEventEmitter.emit(this.afficherFormulaireAddCompetenceBool);
    } 
 
  nomCompetence : string = ''
  niveauCompetence : number = 0
  id_admin : string = '64523a3ba975dc50e7e3767d'

  onSubmitAddCompetence(formulaire : any)
  {   

      formulaire.value.id_admin = this.id_admin;

      const competence = {
        nomCompetence: formulaire.value.nomCompetence,
        niveauCompetence: formulaire.value.niveauCompetence,
        id_admin: this.id_admin
      };
  
      console.log(competence);

      //appel du service d'ajout d'utilisateur
      this.apiService.AddCompetence(competence).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          Swal.fire("Erreur lors de l'ajout de la compétence!");
          console.log(error)
        },
        complete: () => {
          this.FormAddCompetenceDisparition()
          Swal.fire('Compétence Ajoutée!');
        }
      });

      
  }
}
