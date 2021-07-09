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
import { AuthGuard } from './guards/auth.guard';
import { EmotionsComponent } from './components/conversation/emotions/emotions.component';
import { QuestionsComponent } from './components/conversation/questions/questions.component';
import { DistinctionsComponent } from './components/conversation/distinctions/distinctions.component';
import { ResourcesComponent } from './components/conversation/resources/resources.component';
import { FeedbackComponent } from './components/conversation/feedback/feedback.component';
import { EmotionsDetailsComponent } from './components/conversation/emotions/emotions-details/emotions-details.component';
import { QuestionsDetailsComponent } from './components/conversation/questions/questions-details/questions-details.component';
import { DistinctionsDetailsComponent } from './components/conversation/distinctions/distinctions-details/distinctions-details.component';
import { ResourcesDetailsComponent } from './components/conversation/resources/resources-details/resources-details.component';
import { SituationsGuard } from './guards/situations.guard';
import { SensationsGuard } from './guards/sensations.guard';
import { EmotionsGuard } from './guards/emotions.guard';
import { QuestionsGuard } from './guards/questions.guard';
import { DistinctionsGuard } from './guards/distinctions.guard';
import { ResourcesGuard } from './guards/resources.guard';
import { FeedbackGuard } from './guards/feedback.guard';

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'conversation',
    component: ConversationComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: StartConversationComponent
      },
      {
        path: 'environments',
        component: EnvironmentsComponent
      },
      {
        path: 'situations',
        component: SituationsComponent,
        canActivate: [SituationsGuard]
      },
      {
        path: 'sensations',
        component: SensationsComponent,
        canActivate: [SensationsGuard]
      },
      {
        path: 'emotions',
        component: EmotionsComponent,
        canActivate: [EmotionsGuard]
      },
      {
        path: 'emotions/details',
        component: EmotionsDetailsComponent,
      },
      {
        path: 'questions',
        component: QuestionsComponent,
        canActivate: [QuestionsGuard]
      },
      {
        path: 'questions/details',
        component: QuestionsDetailsComponent
      },
      {
        path: 'distinctions',
        component: DistinctionsComponent,
        canActivate: [DistinctionsGuard]
      },
      {
        path: 'distinctions/details',
        component: DistinctionsDetailsComponent
      },
      {
        path: 'resources',
        component: ResourcesComponent,
        canActivate: [ResourcesGuard]
      },
      {
        path: 'resources/details',
        component: ResourcesDetailsComponent
      },
      {
        path: 'feedback',
        component: FeedbackComponent,
        canActivate: [FeedbackGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
