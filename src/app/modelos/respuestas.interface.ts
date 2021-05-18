export interface RespuestasI {
  count: number;
  next: string;
  previous: any;
  results: Resultado[];
}

export interface Resultado {
  name: string;
  url: string;
}

export interface PokemonColor {
  id: number;
  name: string;
}

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: Generation;
  names: Name;
  effect_entries: VerboseEffect;
  effect_changes: AbilityEffectChange;
  flavor_text_entries: AbilityFlavorText;
  pokemon: AbilityPokemon;
}

export interface Pokemon{
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;

}

export interface AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: Pokemon;
}

export interface AbilityFlavorText{
  flavor_text: string;
  lenguage: Lenguage;
}
export interface AbilityEffectChange {
  id: number;

}

export interface Generation{
  id: number;
  name: string;
  abilities: Ability;
  names: Name;

}

export interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface Name {
  name: string;
  lenguage: Lenguage;
}

export interface Lenguage {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: Name;
}
