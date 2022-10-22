import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
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
    const favoriteList = JSON.parse(localStorage.getItem('jsonVal') as string).favorite;
    if (favoriteList) {
      this.favoriteList = favoriteList
      this.favoriteList.forEach(async id => {
        await this.getPokemonDataById(id);
      })
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

    const favoriteData = (this.favoriteList.sort())
    var jsonVal = { favorite: favoriteData };
    localStorage.setItem('jsonVal', JSON.stringify(jsonVal));
  }
  notFavorite(id: number): void {
    this.displayPokemonList.forEach(element => {
      if (element.id === id) {
        element.favorite = false
      }
    });

    this.favoriteList = this.favoriteList.filter(item => item !== id);
    const favoriteData = (this.favoriteList.sort())
    var jsonVal = { favorite: favoriteData };
    localStorage.setItem('jsonVal', JSON.stringify(jsonVal));
  }
}
