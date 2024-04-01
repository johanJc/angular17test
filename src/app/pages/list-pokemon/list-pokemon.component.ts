import { Component } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';
import { AsyncPipe } from '@angular/common';
import { PlaceholderLoadingComponent } from '../layout/placeholder-loading/placeholder-loading.component';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [AsyncPipe, PlaceholderLoadingComponent],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss'
})
export class ListPokemonComponent {
  pokemon_list: any = [];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getListPokemon();
  }

  getListPokemon() {
    this.pokemonService.getPokemonList().subscribe({
      next: (data) => {
        this.pokemon_list = data.results
      },
      error: (error) => {

      }
    });
  }
}
