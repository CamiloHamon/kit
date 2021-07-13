import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { StartComponent } from './components/start/start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
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
import { KnowKitComponent } from './components/modals/know-kit/know-kit.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalEnvironmentsComponent } from './components/modals/modal-environments/modal-environments.component';
import { ModalSituationsComponent } from './components/modals/modal-situations/modal-situations.component';
import { ModalSensationsComponent } from './components/modals/modal-sensations/modal-sensations.component';
import { ModalEmotionsComponent } from './components/modals/modal-emotions/modal-emotions.component';
import { ModalQuestionsComponent } from './components/modals/modal-questions/modal-questions.component';
import { ModalDistinctionsComponent } from './components/modals/modal-distinctions/modal-distinctions.component';
import { ModalResourcesComponent } from './components/modals/modal-resources/modal-resources.component';
import { ModalErrorComponent } from './components/modals/modal-error/modal-error.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { TokenInterceptorService } from './services/auth/token-interceptor.service';
import { RouterModule } from '@angular/router';
import { EffectiveComponent } from './components/effective/effective.component';
import { StartEffectiveComponent } from './components/effective/start-effective/start-effective.component';

@NgModule({
	exports: [RouterModule],
	declarations: [
		AppComponent,
		SignupComponent,
		SigninComponent,
		StartComponent,
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
		KnowKitComponent,
		HeaderComponent,
		ModalEnvironmentsComponent,
		ModalSituationsComponent,
		ModalSensationsComponent,
		ModalEmotionsComponent,
		ModalQuestionsComponent,
		ModalDistinctionsComponent,
		ModalResourcesComponent,
		ModalErrorComponent,
		EffectiveComponent,
		StartEffectiveComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		NgbModule,
		RouterModule,
	],
	providers: [
		AuthGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptorService,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
