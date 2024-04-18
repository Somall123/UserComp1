import { NgFor, NgStyle } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  @Input() users: any[] = [];
}
