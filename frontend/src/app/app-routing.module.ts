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
        component: SituationsComponent
      },
      {
        path: 'sensations',
        component: SensationsComponent
      },
      {
        path: 'emotions',
        component: EmotionsComponent
      },
      {
        path: 'questions',
        component: QuestionsComponent
      },
      {
        path: 'distinctions',
        component: DistinctionsComponent
      },
      {
        path: 'resources',
        component: ResourcesComponent
      },
      {
        path: 'feedback',
        component: FeedbackComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
