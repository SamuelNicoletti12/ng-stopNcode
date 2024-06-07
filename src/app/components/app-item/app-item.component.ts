import { Component, Input } from '@angular/core';
import { Model } from '../../../models/model';

@Component({
  selector: 'app-app-item',
  templateUrl: './app-item.component.html',
  styleUrl: './app-item.component.css',
})
export class AppItemComponent {
  @Input()
  model?: Model;
}
