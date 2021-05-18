import { Component, OnInit } from '@angular/core';
import { RespuestasI } from 'src/app/modelos/respuestas.interface';
import { ApiService } from '../../servicios/api/api.service';



@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  catalogPokedex!: RespuestasI;


  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.catalogoPokedex()
      .subscribe(data => {
        console.log(data);
        this.catalogPokedex = data;
        console.log('this', this.catalogPokedex);
      });
  }

  imgPokemon(url: string): string {
    const urlOriginal = url;
    let urlRemplazo = urlOriginal.replace('https://pokeapi.co/api/v2/pokemon/', 'https://pokeres.bastionbot.org/images/pokemon/');

    urlRemplazo = urlRemplazo.substring(0, urlRemplazo.length - 1);

    return urlRemplazo + '.png';
  }

  idPokemon(url: string): number {
    const urlOriginal = url;
    let urlRemplazo = urlOriginal.replace('https://pokeapi.co/api/v2/pokemon/', '');

    urlRemplazo = urlRemplazo.substring(0, urlRemplazo.length - 1);

    return +urlRemplazo;
  }

  colorPokemons(): string {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
