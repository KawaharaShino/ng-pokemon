import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonHome, PokemonContainer } from '../class/pokemon';
import { PokemonService } from '../service/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  displayPokemonList: PokemonHome[] = [];

  private next: string = '';
  private loaded = true
  private favoriteList: number[] = []

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.favoriteList = JSON.parse(localStorage.getItem('jsonVal') as string).favorite;
    this.getPokemons();
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.loaded || !this.next) {
      return;
    }
    this.getPokemons(this.next);
  }

  private getPokemons(next?: string): void {
    this.loaded = false
    this.pokemonService.getPokemons(next)
      .subscribe(
        (res: any) => {
          this.next = res.next;

          const shuffledResults = res.results
          shuffledResults.forEach((
            element: PokemonContainer) => {
            this.getPokemon(element);
          });
          this.loaded = true
        },
        (err: HttpErrorResponse) => {
          this.loaded = true
          if (err.status && err.status !== 0) {
            alert('エラーが発生しました（' + err.status + '）');
          }
          else {
            alert('エラーが発生しました インターネットへの接続状況を確認してください');
          }
        })
  }
  private getPokemon(data: PokemonContainer): void {
    this.pokemonService.getPokemonHomeByUrl(data.url)
      .subscribe(
        (res: PokemonHome) => {
          this.displayPokemonList.push(res);
        },
        (err: HttpErrorResponse) => {
          if (err.status && err.status !== 0) {
            console.error(err)
            alert('エラーが発生しました（' + err.status + '）');
          }
          else {
            alert('エラーが発生しました、インターネットへの接続を確認してください');
          }
        }
      )
  }
  favorite(id: number): void{
    this.displayPokemonList.forEach(element => {
      if(element.id === id){
        element.favorite = true
      }
    });
    this.favoriteList.push(id);

    var jsonVal = {favorite: this.favoriteList};
    localStorage.setItem('jsonVal', JSON.stringify(jsonVal));
  }
  notFavorite(id: number): void{
    this.displayPokemonList.forEach(element => {
      if(element.id === id){
        element.favorite = false
      }
    });

    this.favoriteList = this.favoriteList.filter(item => item !== id);
    var jsonVal = {favorite: this.favoriteList};
    localStorage.setItem('jsonVal', JSON.stringify(jsonVal));
  }
}
