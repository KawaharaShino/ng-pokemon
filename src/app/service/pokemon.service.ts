import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonContainer } from '../class/pokemon';
import { isNgTemplate } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'

  getPokemons(url: string = this.pokemonUrl): any {
    return this.http.get<any>(url)
  //   .pipe(map(item => {
  //     item;
      
  //     // item.next,
  //     // item.results.map((o: any) => {
  //     //   new PokemonContainer(o)
  //     // })
  //   }))
  }

getPokemon(url: string): any {
  return this.http.get<any>(url).pipe(map(item =>
    new Pokemon(item)
  ))
}
}
