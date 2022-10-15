import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { RecommendComponent } from './recommend/recommend.component';

const routes: Routes = [
  {path: '', component: PokemonsComponent},
  {path: 'detail', component: PokemonComponent},
  {path: 'recommend', component: RecommendComponent},
  {path: 'mypage', component: PokemonsComponent},
  {path: 'history', component: PokemonsComponent},
  {path: 'favorite', component: FavoriteComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
