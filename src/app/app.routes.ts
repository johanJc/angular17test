import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'list-pokemon',
        loadComponent: () => import('./pages/list-pokemon/list-pokemon.component').then(m => m.ListPokemonComponent)
    },
    {
        path: '**',
        redirectTo: 'list-pokemon'
    }
];
