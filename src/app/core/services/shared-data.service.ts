import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private _errorMsj: BehaviorSubject<any> = new BehaviorSubject<any>('');
  constructor() { }

  get errorMsjObser() {
    return this._errorMsj.asObservable();
  }

  set setErrorMsj(msj:string) {
    this._errorMsj.next(msj);
  }
  

}
