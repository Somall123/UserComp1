import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, UserListComponent]
})
export class AppComponent {
  title = 'MyApp';
  users=['Elise','Buzala','DavitiLeqtori','Daviti Moswavle']
}
