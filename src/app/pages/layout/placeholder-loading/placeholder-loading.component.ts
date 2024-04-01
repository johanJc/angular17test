import { Component } from '@angular/core';

@Component({
  selector: 'app-placeholder-loading',
  standalone: true,
  imports: [],
  template: `
    <div class="content-loading all-page">
      <div class="content-">
        <div class="spinner-border text-danger" role="status">
        </div>
        <p>Cargando contenido...</p>
      </div>
    </div>
  `,
  styles: ``
})
export class PlaceholderLoadingComponent {

}
