import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { HeaderComponent } from './header/header.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AppRoutingModule } from './app.routing.module';
import { RecommendComponent } from './recommend/recommend.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    HeaderComponent,
    PokemonComponent,
    RecommendComponent,
    FavoriteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollingModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

