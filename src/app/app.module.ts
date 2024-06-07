import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { AppItemComponent } from './components/app-item/app-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    AppItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
