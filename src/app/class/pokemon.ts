export class Pokemon {
  name: string = '';
  id: number = 0;
  imageUrl: string = '';
  type: string = '';

  constructor(map: any){
    this.name = map.species.name;
    this.id = map.id;
    this.imageUrl = map.sprites.front_default;
    this.type = map.types[0].type.name;
  }
}

export class PokemonContainer {
    name: string='';
    url: string='';

  constructor(map: any){
      this.name = map.name,
      this.url = map.url
  }
}