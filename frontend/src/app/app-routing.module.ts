import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConversationComponent } from './components/conversation/conversation.component';
import { SensationsComponent } from './components/conversation/sensations/sensations.component';
import { EnvironmentsComponent } from './components/conversation/environments/environments.component';
import { SituationsComponent } from './components/conversation/situations/situations.component';
import { StartConversationComponent } from './components/conversation/start-conversation/start-conversation.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { StartComponent } from './components/start/start.component';
import { EmotionsComponent } from './components/conversation/emotions/emotions.component';
import { QuestionsComponent } from './components/conversation/questions/questions.component';
import { DistinctionsComponent } from './components/conversation/distinctions/distinctions.component';
import { ResourcesComponent } from './components/conversation/resources/resources.component';
import { FeedbackComponent } from './components/conversation/feedback/feedback.component';
import { EmotionsDetailsComponent } from './components/conversation/emotions/emotions-details/emotions-details.component';
import { QuestionsDetailsComponent } from './components/conversation/questions/questions-details/questions-details.component';
import { DistinctionsDetailsComponent } from './components/conversation/distinctions/distinctions-details/distinctions-details.component';
import { ResourcesDetailsComponent } from './components/conversation/resources/resources-details/resources-details.component';

import { CheckLoginGuard } from './guards/auth/check-login.guard';
import { AuthGuard } from './guards/auth/auth.guard';
import { KnowKitComponent } from './components/modals/know-kit/know-kit.component';
import { SituationsGuard } from './guards/conversation/situations/situations.guard';
import { SensationsGuard } from './guards/conversation/sensations/sensations.guard';
import { EmotionsGuard } from './guards/conversation/emotions/emotions.guard';
import { QuestionsGuard } from './guards/conversation/questions/questions.guard';
import { DistinctionsGuard } from './guards/conversation/distinctions/distinctions.guard';
import { ResourcesGuard } from './guards/conversation/resources/resources.guard';
import { FeedbackGuard } from './guards/conversation/feedback/feedback.guard';
import { EffectiveComponent } from './components/effective/effective.component';
import { StartEffectiveComponent } from './components/effective/start-effective/start-effective.component';
import { EmotionsBankComponent } from './components/effective/emotions-bank/emotions-bank.component';
import { CombinationsComponent } from './components/effective/combinations/combinations.component';
import { FeedbackEffectiveComponent } from './components/effective/feedback-effective/feedback-effective.component';
import { CombinationsGuard } from './guards/effective/combinations.guard';
import { PracticeComponent } from './components/practice/practice.component';
import { StartPracticeComponent } from './components/practice/start-practice/start-practice.component';
import { SituationPracticeComponent } from './components/practice/situation-practice/situation-practice.component';
import { CardsPracticeComponent } from './components/practice/cards-practice/cards-practice.component';
import { EmotionPracticeComponent } from './components/practice/emotion-practice/emotion-practice.component';
import { QuestionPracticeComponent } from './components/practice/question-practice/question-practice.component';
import { DistinctionPracticeComponent } from './components/practice/distinction-practice/distinction-practice.component';
import { ResourcePracticeComponent } from './components/practice/resource-practice/resource-practice.component';
import { FeedbackPracticeComponent } from './components/practice/feedback-practice/feedback-practice.component';
import { FeedbackPracticeGuard } from './guards/practice/feedback-practice.guard';
import { RecomendatiosComponent } from './components/recomendatios/recomendatios.component';
import { RecomendationsEffectiveComponent } from './components/effective/recomendations-effective/recomendations-effective.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CreateUserComponent } from './components/admin/create-user/create-user.component';
import { EditUserComponent } from './components/admin/edit-user/edit-user.component';

const routes: Routes = [
	{
		path: '',
		component: StartComponent,
		canActivate: [CheckLoginGuard],
	},
	{
		path: 'login',
		component: SigninComponent,
		canActivate: [CheckLoginGuard],
	},
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'conversation',
		component: ConversationComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				component: StartConversationComponent,
			},
			{
				path: 'environments',
				component: EnvironmentsComponent,
			},
			{
				path: 'situations',
				component: SituationsComponent,
				canActivate: [SituationsGuard],
			},
			{
				path: 'sensations',
				component: SensationsComponent,
				canActivate: [SensationsGuard],
			},
			{
				path: 'emotions',
				component: EmotionsComponent,
				canActivate: [EmotionsGuard],
			},
			{
				path: 'emotions/details',
				component: EmotionsDetailsComponent,
			},
			{
				path: 'questions',
				component: QuestionsComponent,
				canActivate: [QuestionsGuard],
			},
			{
				path: 'questions/details',
				component: QuestionsDetailsComponent,
			},
			{
				path: 'distinctions',
				component: DistinctionsComponent,
				canActivate: [DistinctionsGuard],
			},
			{
				path: 'distinctions/details',
				component: DistinctionsDetailsComponent,
			},
			{
				path: 'resources',
				component: ResourcesComponent,
				canActivate: [ResourcesGuard],
			},
			{
				path: 'resources/details',
				component: ResourcesDetailsComponent,
			},
			{
				path: 'feedback',
				component: FeedbackComponent,
				canActivate: [FeedbackGuard],
			},
		],
	},
	{
		path: 'effective-combinations',
		component: EffectiveComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				component: StartEffectiveComponent,
			},
			{
				path: 'emotions-bank',
				component: EmotionsBankComponent,
			},
			{
				path: 'combinations',
				component: CombinationsComponent,
				canActivate: [CombinationsGuard],
			},
			{
				path: 'feedback',
				component: FeedbackEffectiveComponent,
				canActivate: [CombinationsGuard],
			},
			{
				path: 'recomendatios',
				component: RecomendationsEffectiveComponent,
				canActivate: [CombinationsGuard],
			},
		],
	},
	{
		path: 'practice',
		component: PracticeComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				component: StartPracticeComponent,
			},
			{
				path: 'situation',
				component: SituationPracticeComponent,
			},
			{
				path: 'card-combination',
				component: CardsPracticeComponent,
			},
			{
				path: 'emotion',
				component: EmotionPracticeComponent,
			},
			{
				path: 'question',
				component: QuestionPracticeComponent,
			},
			{
				path: 'distinction',
				component: DistinctionPracticeComponent,
			},
			{
				path: 'resource',
				component: ResourcePracticeComponent,
			},
			{
				path: 'feedback',
				component: FeedbackPracticeComponent,
				canActivate: [FeedbackPracticeGuard],
			},
		],
	},
	{
		path: 'recomendations',
		component: RecomendatiosComponent,
		canActivate: [AuthGuard, FeedbackGuard],
	},
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: '',
				component: DashboardComponent,
			},
			{
				path: 'create-user',
				component: CreateUserComponent,
			},
			{
				path: 'edit-user/:id',
				component: EditUserComponent,
			},
		],
	},
	{
		path: '**',
		redirectTo: 'login',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
