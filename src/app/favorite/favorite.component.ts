import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonHome } from '../class/pokemon';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  displayPokemonList: PokemonHome[] = [];
  private favoriteList: number[] = []

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.favoriteList = JSON.parse(localStorage.getItem('jsonVal') as string).favorite;
    this.favoriteList.forEach((item: number)=> {
      this.getPokemonDataById(item);
    })
  }

  private getPokemonDataById(id: number): void {
    this.pokemonService.getPokemonDataById(id)
      .subscribe(
        (res: PokemonHome) => {
          this.displayPokemonList.push(new PokemonHome(res, true))
        },
        (err: HttpErrorResponse) => {
          if (err.status && err.status !== 0) {
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
