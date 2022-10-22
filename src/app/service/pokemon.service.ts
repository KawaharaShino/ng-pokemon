import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonHome, PokemonContainer } from '../class/pokemon';
import { isNgTemplate } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'

  getPokemons(url: string = this.pokemonUrl): any {
    return this.http.get<any>(url)
  }

  getPokemonHomeByUrl(url: string): Observable<PokemonHome> {
    return this.http.get<any>(url).pipe(map(item =>
      new PokemonHome(item)
    ))
  }
  
  getPokemonDataById(id: number): any {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/' + id + '/')
  }
}
