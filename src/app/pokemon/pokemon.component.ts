import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonHome } from '../class/pokemon';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemonId: number;
  displayPokemon: PokemonHome | null;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
    this.pokemonId = 0;
    this.displayPokemon = null;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((item => this.pokemonId = item['id']))
    this.getPokemonDataById(this.pokemonId);
  }

  private getPokemonDataById(id: number): void {
    this.pokemonService.getPokemonDataById(id)
      .subscribe(
        (res: PokemonHome) => {
          console.log(res)
          this.displayPokemon = new PokemonHome(res)
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
}
