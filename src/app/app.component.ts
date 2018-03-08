import { Component } from '@angular/core'
@Component({
  selector:'pm-root', //Product Management
  template: `
    <div>
      <h1>{{PageTitle}}</h1>
      <pm-products></pm-products>
    </div>
  `
})
export class AppComponent{
  pageTitle: string = 'Acme Product Management';
}