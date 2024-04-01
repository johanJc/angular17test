import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ErrorPageComponent } from './pages/layout/error-page/error-page.component';
import { SharedDataService } from './core/services/shared-data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSpinnerModule, ErrorPageComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appAngular17';  
  error$;  
  constructor(sharedDataService: SharedDataService){
    this.error$ = sharedDataService.errorMsjObser;
  }
}
