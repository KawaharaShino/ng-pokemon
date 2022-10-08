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

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.loaded || !this.next) {
      return;
    }
    this.getPokemons(this.next);
  }

  private shuffle([...array]): Array<any> {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private getPokemons(next?: string): void {
    this.loaded = false
    this.pokemonService.getPokemons(next)
      .subscribe(
        (res: any) => {
          this.next = res.next;

          const shuffledResults = this.shuffle(res.results)
          shuffledResults.forEach((
            element: PokemonContainer) => {
            this.getPokemon(element);
          });
          this.loaded = true
        },
        (err: HttpErrorResponse) => {
          this.loaded = true
          if (err.status && err.status !== 0) {
            console.error(err)
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
        (res: any) => {
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
}
