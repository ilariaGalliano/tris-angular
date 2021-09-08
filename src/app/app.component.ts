import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-square [value]="'X'"></app-square>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'tris-angular';
}
