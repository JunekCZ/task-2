import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HockeyComponent } from './hockey/hockey.component';
import { GoalsOnlyPipe } from './pipes/goals-only.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HockeyComponent,
    GoalsOnlyPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
