import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { StartComponent } from './components/start/start.component';
import { PopupsComponent } from './components/popups/popups.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { EnvironmentsComponent } from './components/conversation/environments/environments.component';
import { StartConversationComponent } from './components/conversation/start-conversation/start-conversation.component';
import { SituationsComponent } from './components/conversation/situations/situations.component';
import { SensationsComponent } from './components/conversation/sensations/sensations.component';
import { EmotionsComponent } from './components/conversation/emotions/emotions.component';
import { QuestionsComponent } from './components/conversation/questions/questions.component';
import { DistinctionsComponent } from './components/conversation/distinctions/distinctions.component';
import { ResourcesComponent } from './components/conversation/resources/resources.component';
import { FeedbackComponent } from './components/conversation/feedback/feedback.component';
import { EmotionsDetailsComponent } from './components/conversation/emotions/emotions-details/emotions-details.component';
import { QuestionsDetailsComponent } from './components/conversation/questions/questions-details/questions-details.component';
import { DistinctionsDetailsComponent } from './components/conversation/distinctions/distinctions-details/distinctions-details.component';
import { ResourcesDetailsComponent } from './components/conversation/resources/resources-details/resources-details.component';
import { CardsSectionComponent } from './components/conversation/cards-section/cards-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    StartComponent,
    PopupsComponent,
    HomeComponent,
    SpinnerComponent,
    ConversationComponent,
    EnvironmentsComponent,
    StartConversationComponent,
    SituationsComponent,
    SensationsComponent,
    EmotionsComponent,
    QuestionsComponent,
    DistinctionsComponent,
    ResourcesComponent,
    FeedbackComponent,
    EmotionsDetailsComponent,
    QuestionsDetailsComponent,
    DistinctionsDetailsComponent,
    ResourcesDetailsComponent,
    CardsSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
