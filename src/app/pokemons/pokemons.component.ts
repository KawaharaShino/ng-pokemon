import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { PokemonHome, PokemonContainer } from '../class/pokemon';
import { PokemonService } from '../service/pokemon.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  @ViewChild('scroll_area') scrollAreaDom: ElementRef | undefined;
  private scrollArea: HTMLElement | undefined;

  displayPokemonList: PokemonHome[] = [];
  private next: string = '';
  private loaded = true
  private favoriteList: number[] = []
  private nextCount: number = 1;
  constructor(private pokemonService: PokemonService, @Inject(DOCUMENT) private document: Document) { 
  }

  ngOnInit(): void {
    const favoriteList = JSON.parse(localStorage.getItem('jsonVal') as string)?.favorite
    if (favoriteList) {
      this.favoriteList = favoriteList;
    }
    else {
      this.favoriteList = []
    }
    this.getPokemons();
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.loaded || !this.next) {
      return;
    }
    if (!this.scrollArea) {
      this.scrollArea = this.scrollAreaDom?.nativeElement;
    }
    
    if (document.scrollingElement!.scrollTop / this.nextCount > 400) {
      this.nextCount = this.nextCount + 1;
      this.getPokemons(this.next);
    }
  }

  private getPokemons(next?: string): void {
    this.loaded = false
    this.pokemonService.getPokemons(next)
      .subscribe(
        async (res: any) => {
          this.next = res.next;
          const main = async()=>{
            for(const pokemon of res.results){
              await this.getPokemonHomeByUrl(pokemon.url);
            };
          };
          main();
          this.loaded = true;
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

  private getPokemonHomeByUrl(value: string){
    return new Promise<void>((resolve) =>
    this.pokemonService.getPokemonHomeByUrl(value)
    .subscribe({
      next: (res) => {
        if (this.favoriteList.includes(res.id)) {
          res.favorite = true;
        }
        this.displayPokemonList.push(res);
        resolve();
      },
      error: (err: HttpErrorResponse) => {
        if (err.status && err.status !== 0) {
          console.error(err);
          alert('エラーが発生しました（' + err.status + '）');
        }
        else {
          alert('エラーが発生しました、インターネットへの接続を確認してください');
        }
      }
    })) 
  };

  favorite(id: number): void {
    this.displayPokemonList.forEach(element => {
      if (element.id === id) {
        element.favorite = true
      }
    });
    this.favoriteList.push(id);

    var jsonVal = { favorite: this.favoriteList.sort() };
    localStorage.setItem('jsonVal', JSON.stringify(jsonVal));
  }

  notFavorite(id: number): void {
    this.displayPokemonList.forEach(element => {
      if (element.id === id) {
        element.favorite = false
      }
    });

    this.favoriteList = this.favoriteList.filter(item => item !== id);
    var jsonVal = { favorite: this.favoriteList.sort() };
    localStorage.setItem('jsonVal', JSON.stringify(jsonVal));
  }
}
