import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { PokemonHome } from '../class/pokemon';
import { PokemonService } from '../service/pokemon.service';
import { Common } from '../common/common';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  displayPokemonList: PokemonHome[] = [];
  private favoriteList: number[] = []
  sortArgFunction = Common.sortArgFunction;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const favoriteList = JSON.parse(localStorage.getItem('jsonVal') as string).favorite;
    if (favoriteList) {
      this.favoriteList = favoriteList
      const loadPokemons = async () => {
        for (const id of favoriteList) {
          await this.getPokemonDataById(id);
        };
      };
      loadPokemons();
    }
    else {
      this.favoriteList = []
    }
  }

  private getPokemonDataById(id: number): Promise<void> {
    return new Promise<void>((resolve) =>
      this.pokemonService.getPokemonDataById(id)
        .subscribe({
          next: (res: PokemonHome) => {
            this.displayPokemonList.push(new PokemonHome(res, true))
            resolve();
          },
          error: (err: HttpErrorResponse) => {
            if (err.status && err.status !== 0) {
              alert('エラーが発生しました（' + err.status + '）');
            }
            else {
              alert('エラーが発生しました、インターネットへの接続を確認してください');
            }
          }
        })
    )
  };

  favorite(id: number): void {
    this.displayPokemonList.forEach(element => {
      if (element.id === id) {
        element.favorite = true
      }
    });
    this.favoriteList.push(id);

    var jsonVal = { favorite: this.favoriteList.sort(this.sortArgFunction) };
    localStorage.setItem('jsonVal', JSON.stringify(jsonVal));
  }

  notFavorite(id: number): void {
    this.displayPokemonList.forEach(element => {
      if (element.id === id) {
        element.favorite = false
      }
    });

    this.favoriteList = this.favoriteList.filter(item => item !== id);
    var jsonVal = { favorite: this.favoriteList.sort(this.sortArgFunction) };
    localStorage.setItem('jsonVal', JSON.stringify(jsonVal));
  }
}
