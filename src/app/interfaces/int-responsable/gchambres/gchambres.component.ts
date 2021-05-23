import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/model/chambre.model';
import { ChambreService } from 'src/app/_service/chambre.service';

@Component({
  selector: 'app-gchambres',
  templateUrl: './gchambres.component.html',
  styleUrls: ['./gchambres.component.css']
})
export class GChambresComponent implements OnInit {
  chambres: Chambre[];

  constructor(private ChambreService: ChambreService,
    private router: Router){}


    ngOnInit(): void {

      this.ChambreService.ListeChambre().subscribe(cham => {
        console.log(cham);
        this.chambres = cham;
      });

    }
supprimerChambre(c: Chambre)
{
  console.log("suppppppppppppppppppppppppppppp supprimé");
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.ChambreService.supprimerChambre(c.idChambre).subscribe(() => {
  console.log("chambre supprimé");
  this.SuprimerChambreDuTableau(c);
});
this.router.navigate(['listechambres']).then(() => {
  window.location.reload();
})
}

SuprimerChambreDuTableau(cham : Chambre) {
  this.chambres.forEach((cur, index) => {
  if(cham.idChambre=== cur.idChambre) {
  this.chambres.splice(index, 1);
  }
  });
  }
  }
