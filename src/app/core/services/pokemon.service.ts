import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  appRouter = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList():Observable<any>{
    return this.http.get<any>(this.appRouter + `/pokemon?limit=10&offset=0`)
  }
}
