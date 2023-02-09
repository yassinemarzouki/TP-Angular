import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/Emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
  
  listeEmploi!: Emploi[]; 

  constructor() { }

  ngOnInit(): void {
    this.listeEmploi= [
      {id:1 ,  reference: "aaa" , titre : "ingénieur" ,entreprise :"sofrecom" ,etat : true },
      {id:2,  reference: "bbb" , titre : "technicien" ,entreprise :"Proxym" ,etat : false}
     
    ];
  }
  nbOffresNonCloturees = 0;

  calculerNbOffresNonCloturees() {
    this.nbOffresNonCloturees = this.listeEmploi.filter(emploi => emploi.etat).length;
  }

}
