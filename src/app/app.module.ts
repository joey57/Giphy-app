import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SearchComponent } from './component/search/search.component';
import { GifComponent } from './component/gif/gif.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    GifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
