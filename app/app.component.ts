import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<ul>
            <li *ngFor="let item of list"><h3>{{item}}</h3></li>
            </ul>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  list = ["first",
          "second",
          "third",
          "fourth",
          "fifth"
          ];
}
