import { Component } from '@angular/core';
import { MODELS } from '../../../models/models';
import { Model } from '../../../models/model';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrl: './app-list.component.css',
})
export class AppListComponent {
  models: Model[] = MODELS;
}
