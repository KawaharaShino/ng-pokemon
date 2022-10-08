import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [
  {path: 'detail', component: PokemonComponent},
  {path: '', component: PokemonsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
