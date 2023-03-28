import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CreateMessageComponent } from './components/create-message/create-message.component';
import { MyMessageComponent } from './components/my-message/my-message.component';
import { SeeAllMessageComponent } from './components/see-all-message/see-all-message.component';
import { MessageComponent } from './message.component';

const routes: Routes = [
  {
    path:'message', component: MessageComponent, children:[
      {
        path: 'create-messages',
        component: CreateMessageComponent
      },
      {
        path: 'my-messages',
        component: MyMessageComponent
      },
      {
        path: 'all-messages',
        component: SeeAllMessageComponent
      },
      {
        path: '',
        redirectTo: 'message/create-messages',
        pathMatch: 'full'
      }
    ]
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
