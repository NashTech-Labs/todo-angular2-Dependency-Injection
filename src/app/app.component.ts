import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl:'./app/app.component.html',
  styles: [`h1{color : darkcyan}`]
})
export class AppComponent  { name = 'Angular'; }
