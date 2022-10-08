export class PokemonHome {
  name: string = '';
  id: number = 0;
  imageUrl: string[] = [];
  type: string = '';

  constructor(map: any) {
    this.name = map.species.name;
    this.id = map.id;

    if (map.sprites.front_default) {
      this.imageUrl.push(map.sprites.front_default)
    }
    if (map.sprites.back_default) {
      this.imageUrl.push(map.sprites.back_default)
    }
    if (map.sprites.back_female) {
      this.imageUrl.push(map.sprites.back_female)
    }
    if (map.sprites.back_shiny) {
      this.imageUrl.push(map.sprites.back_shiny)
    }
    if (map.sprites.back_shiny_female) {
      this.imageUrl.push(map.sprites.back_shiny_female)
    }
    
    if (map.sprites.front_female) {
      this.imageUrl.push(map.sprites.front_female)
    }
    if (map.sprites.front_shiny) {
      this.imageUrl.push(map.sprites.front_shiny)
    }
    if (map.sprites.other.dream_world.front_default) {
      this.imageUrl.push(map.sprites.other.dream_world.front_default)
    }
    if (map.sprites.other.dream_world.front_female) {
      this.imageUrl.push(map.sprites.other.dream_world.front_female)
    }
    if (map.sprites.other.home.front_default) {
      this.imageUrl.push(map.sprites.other.home.front_default)
    }
    if (map.sprites.other.home.front_female) {
      this.imageUrl.push(map.sprites.other.home.front_female)
    }
    if (map.sprites.other.home.front_shiny) {
      this.imageUrl.push(map.sprites.other.home.front_shiny)
    }
    if (map.sprites.other.home.front_shiny_female) {
      this.imageUrl.push(map.sprites.other.home.front_shiny_female)
    }

    this.imageUrl.push(map.sprites.other['official-artwork'].front_defaul)
    this.imageUrl.push(map.sprites.other['dream_world'].front_female)
    this.imageUrl.push(map.sprites.versions['generation-i']['red-blue'].back_default)
    this.imageUrl.push(map.sprites.versions['generation-i']['red-blue'].back_gray)
    this.imageUrl.push(map.sprites.versions['generation-i']['red-blue'].back_transparent)
    this.imageUrl.push(map.sprites.versions['generation-i']['red-blue'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-i']['red-blue'].front_gray)
    this.imageUrl.push(map.sprites.versions['generation-i']['red-blue'].front_transparent)
    this.imageUrl.push(map.sprites.versions['generation-i']['yellow'].back_default)
    this.imageUrl.push(map.sprites.versions['generation-i']['yellow'].back_gray)
    this.imageUrl.push(map.sprites.versions['generation-i']['yellow'].back_transparent)
    this.imageUrl.push(map.sprites.versions['generation-i']['yellow'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-i']['yellow'].front_gray)
    this.imageUrl.push(map.sprites.versions['generation-i']['yellow'].front_transparent)
    this.imageUrl.push(map.sprites.versions['generation-ii']['crystal'].back_default)
    this.imageUrl.push(map.sprites.versions['generation-ii']['crystal'].back_shiny)
    this.imageUrl.push(map.sprites.versions['generation-ii']['crystal'].back_shiny_transparent)
    this.imageUrl.push(map.sprites.versions['generation-ii']['crystal'].back_transparent)
    this.imageUrl.push(map.sprites.versions['generation-ii']['crystal'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-ii']['crystal'].front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-ii']['crystal'].front_shiny_transparent)
    this.imageUrl.push(map.sprites.versions['generation-ii']['crystal'].front_transparent)
    this.imageUrl.push(map.sprites.versions['generation-ii']['gold'].back_default)
    this.imageUrl.push(map.sprites.versions['generation-ii']['gold'].back_shiny)
    this.imageUrl.push(map.sprites.versions['generation-ii']['gold'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-ii']['gold'].front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-ii']['gold'].front_transparent)
    this.imageUrl.push(map.sprites.versions['generation-ii']['silver'].back_default)
    this.imageUrl.push(map.sprites.versions['generation-ii']['silver'].back_shiny)
    this.imageUrl.push(map.sprites.versions['generation-ii']['silver'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-ii']['silver'].front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-ii']['silver'].front_transparent)
    this.imageUrl.push(map.sprites.versions['generation-iii']['emerald'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-iii']['emerald'].front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-iii']['firered-leafgreen'].back_default)
    this.imageUrl.push(map.sprites.versions['generation-iii']['firered-leafgreen'].back_shiny)
    this.imageUrl.push(map.sprites.versions['generation-iii']['firered-leafgreen'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-iii']['firered-leafgreen'].front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-iii']['ruby-sapphire'].back_default)
    this.imageUrl.push(map.sprites.versions['generation-iii']['ruby-sapphire'].back_shiny)
    this.imageUrl.push(map.sprites.versions['generation-iii']['ruby-sapphire'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-iii']['ruby-sapphire'].front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-iv']['diamond-pearl'].back_default)
    this.imageUrl.push(map.sprites.versions['generation-iv']['diamond-pearl'].back_female)
    this.imageUrl.push(map.sprites.versions['generation-iv']['diamond-pearl'].back_shiny)
    this.imageUrl.push(map.sprites.versions['generation-iv']['diamond-pearl'].back_shiny_female)
    this.imageUrl.push(map.sprites.versions['generation-iv']['diamond-pearl'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-iv']['diamond-pearl'].front_female)
    this.imageUrl.push(map.sprites.versions['generation-iv']['diamond-pearl'].front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-iv']['diamond-pearl'].front_shiny_female)
    this.imageUrl.push(map.sprites.versions['generation-iv']['heartgold-soulsilver'].back_default)
    this.imageUrl.push(map.sprites.versions['generation-iv']['heartgold-soulsilver'].back_female)
    this.imageUrl.push(map.sprites.versions['generation-iv']['heartgold-soulsilver'].back_shiny)
    this.imageUrl.push(map.sprites.versions['generation-iv']['heartgold-soulsilver'].back_shiny_female)
    this.imageUrl.push(map.sprites.versions['generation-iv']['heartgold-soulsilver'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-iv']['heartgold-soulsilver'].front_female)
    this.imageUrl.push(map.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-iv']['heartgold-soulsilver'].front_shiny_female)
    this.imageUrl.push(map.sprites.versions['generation-iv']['platinum'].back_default)
    this.imageUrl.push(map.sprites.versions['generation-iv']['platinum'].back_female)
    this.imageUrl.push(map.sprites.versions['generation-iv']['platinum'].back_shiny)
    this.imageUrl.push(map.sprites.versions['generation-iv']['platinum'].back_shiny_female)
    this.imageUrl.push(map.sprites.versions['generation-iv']['platinum'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-iv']['platinum'].front_female)
    this.imageUrl.push(map.sprites.versions['generation-iv']['platinum'].front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-iv']['platinum'].front_shiny_female)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].animated.back_default)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].animated.back_female)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].animated.back_shiny)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].animated.back_shiny_female)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].animated.front_default)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].animated.front_female)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].animated.front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].animated.front_shiny_female)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].back_default)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].back_female)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].back_shiny)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].back_shiny_female)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].front_female)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-v']['black-white'].front_shiny_female)
    this.imageUrl.push(map.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_female)
    this.imageUrl.push(map.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-vi']['omegaruby-alphasapphire'].front_shiny_female)
    this.imageUrl.push(map.sprites.versions['generation-vi']['x-y'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-vi']['x-y'].front_female)
    this.imageUrl.push(map.sprites.versions['generation-vi']['x-y'].front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-vi']['x-y'].front_shiny_female)
    this.imageUrl.push(map.sprites.versions['generation-vii']['icons'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-vii']['icons'].front_female)
    this.imageUrl.push(map.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_female)
    this.imageUrl.push(map.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_shiny)
    this.imageUrl.push(map.sprites.versions['generation-vii']['ultra-sun-ultra-moon'].front_shiny_female)
    this.imageUrl.push(map.sprites.versions['generation-viii']['icons'].front_default)
    this.imageUrl.push(map.sprites.versions['generation-viii']['icons'].front_female)

    console.log(this.imageUrl)
    this.type = map.types[0].type.name;
  }
}

export class PokemonContainer {
  name: string = '';
  url: string = '';

  constructor(map: any) {
    this.name = map.name,
      this.url = map.url
  }
}

export class Pokemon {
  name: string = '';
  flavor: string = '';
  id: number = 0;

  constructor(map: any) {
    this.name = map.name
    this.flavor = map.flavor_text_entries[22].flavor_text;
    this.id = map.id;
  }
}