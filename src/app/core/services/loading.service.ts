import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private spinner: NgxSpinnerService) { }

  startLoading(){
    this.spinner.show();
  }

  stopLoading(){
    this.spinner.hide();
  }
}
