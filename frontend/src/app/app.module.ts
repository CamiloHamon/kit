import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { StartComponent } from './components/start/start.component';
import { PopupsComponent } from './components/popups/popups.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    StartComponent,
    PopupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
