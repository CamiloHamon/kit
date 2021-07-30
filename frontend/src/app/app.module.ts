import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { EmotionsBankComponent } from './components/effective/emotions-bank/emotions-bank.component';
import { CombinationsComponent } from './components/effective/combinations/combinations.component';
import { CardsCombinationsComponent } from './components/effective/cards-combinations/cards-combinations.component';
import { FeedbackEffectiveComponent } from './components/effective/feedback-effective/feedback-effective.component';
import { PracticeComponent } from './components/practice/practice.component';
import { StartPracticeComponent } from './components/practice/start-practice/start-practice.component';
import { SituationPracticeComponent } from './components/practice/situation-practice/situation-practice.component';
import { AdvancePracticeComponent } from './components/practice/advance-practice/advance-practice.component';
import { CardsPracticeComponent } from './components/practice/cards-practice/cards-practice.component';
import { EmotionPracticeComponent } from './components/practice/emotion-practice/emotion-practice.component';
import { QuestionPracticeComponent } from './components/practice/question-practice/question-practice.component';
import { DistinctionPracticeComponent } from './components/practice/distinction-practice/distinction-practice.component';
import { ResourcePracticeComponent } from './components/practice/resource-practice/resource-practice.component';
import { FeedbackPracticeComponent } from './components/practice/feedback-practice/feedback-practice.component';
import { EmotionPracticeModalComponent } from './components/modals/practice/emotion-practice-modal/emotion-practice-modal.component';
import { QuestionPracticeModalComponent } from './components/modals/practice/question-practice-modal/question-practice-modal.component';
import { DistinctionPracticeModalComponent } from './components/modals/practice/distinction-practice-modal/distinction-practice-modal.component';
import { ResourcePracticeModalComponent } from './components/modals/practice/resource-practice-modal/resource-practice-modal.component';
import { RecomendatiosComponent } from './components/recomendatios/recomendatios.component';
import { EmotionModalEffectiveComponent } from './components/modals/effective/emotion-modal-effective/emotion-modal-effective.component';
import { QuestionModalEffectiveComponent } from './components/modals/effective/question-modal-effective/question-modal-effective.component';
import { DistinctionModalEffectiveComponent } from './components/modals/effective/distinction-modal-effective/distinction-modal-effective.component';
import { ResourceModalEffectiveComponent } from './components/modals/effective/resource-modal-effective/resource-modal-effective.component';
import { RecomendationsEffectiveComponent } from './components/effective/recomendations-effective/recomendations-effective.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CreateUserComponent } from './components/admin/create-user/create-user.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { HowFeedbackComponent } from './components/modals/how-feedback/how-feedback.component';

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
		EmotionsBankComponent,
		CombinationsComponent,
		CardsCombinationsComponent,
		FeedbackEffectiveComponent,
		PracticeComponent,
		StartPracticeComponent,
		SituationPracticeComponent,
		AdvancePracticeComponent,
		CardsPracticeComponent,
		EmotionPracticeComponent,
		QuestionPracticeComponent,
		DistinctionPracticeComponent,
		ResourcePracticeComponent,
		FeedbackPracticeComponent,
		EmotionPracticeModalComponent,
		QuestionPracticeModalComponent,
		DistinctionPracticeModalComponent,
		ResourcePracticeModalComponent,
		RecomendatiosComponent,
		EmotionModalEffectiveComponent,
		QuestionModalEffectiveComponent,
		DistinctionModalEffectiveComponent,
		ResourceModalEffectiveComponent,
  RecomendationsEffectiveComponent,
  AdminComponent,
  DashboardComponent,
  CreateUserComponent,
  EditUserComponent,
  ChangePassComponent,
  ForgotPassComponent,
  ResetPassComponent,
  HowFeedbackComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		NgbModule,
		RouterModule,
		DragDropModule,
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
