import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RespuestasI, Ability } from 'src/app/modelos/respuestas.interface';
import { ApiService } from '../../servicios/api/api.service';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  generation: Array<any> = [];
  effectentries: Array<any> = [];
  global: any = [];
  datallePokemon: any;
  datalleHabilidad: any;
  id: number = 0;






  constructor(private api: ApiService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams.id;
    console.log('ID: ', this.id);

    this.api.getPokemonDetalle(this.id).subscribe((data: any) => {
      console.log('Detalle POKEDEX', data);
      this.datallePokemon = data;
      console.log('This detalle POKEDEX', this.datallePokemon);
    });

    this.api.detallePokedex(this.id).subscribe(data => {
      console.log('Detalle POKEDEX', data);
      this.datalleHabilidad = data;
      console.log('This detalle POKEDEX', this.datalleHabilidad);
    });


  }

  colorPokemons(): string {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }




  imgPokemon(id: number): string {
    return 'https://pokeres.bastionbot.org/images/pokemon/' + id + '.png';
  }

}
