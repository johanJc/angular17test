import { Component } from '@angular/core';
import { SharedDataService } from '../../../core/services/shared-data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {
  error$;

  constructor(sharedDataService: SharedDataService){
    this.error$ = sharedDataService.errorMsjObser;
  }
}
