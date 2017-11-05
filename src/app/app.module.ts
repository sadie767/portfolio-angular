import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProfessionComponent } from './profession/profession.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IntroductionComponent,
    ProfessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
