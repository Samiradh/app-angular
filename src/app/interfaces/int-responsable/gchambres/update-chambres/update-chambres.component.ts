import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from 'src/app/model/chambre.model';
import { ChambreService } from 'src/app/_service/chambre.service';

@Component({
  selector: 'app-update-chambres',
  templateUrl: './update-chambres.component.html',
  styleUrls: ['./update-chambres.component.css']
})
export class UpdateChambresComponent implements OnInit {

  id : number;
  currentChambre = new Chambre();
  image:''

  constructor( private activatedRoute: ActivatedRoute,
     private ChambreService: ChambreService, private Router:Router) { }

  ngOnInit(): void {
    this.ChambreService.consulterChambre(this.activatedRoute.snapshot.params.id).subscribe( cha =>{ this.currentChambre = cha; });
  }


  updateChambre() {
    this.ChambreService.updateChambre(this.currentChambre).subscribe(() => {
    this.Router.navigate(['listechambres']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

    handleInputChange(e) {
      const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
      const pattern = /image-*/;
      const reader = new FileReader();
      if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
      }
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }

    _handleReaderLoaded(e) {
      const reader = e.target;
      this.currentChambre.image = reader.result;
    }

  }
