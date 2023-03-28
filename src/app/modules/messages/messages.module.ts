import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateMessageComponent } from './components/create-message/create-message.component';
import { MyMessageComponent } from './components/my-message/my-message.component';
import { SeeAllMessageComponent } from './components/see-all-message/see-all-message.component';
import { MessageComponent } from './message.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { MessageRoutingModule } from './message-routing.module';



@NgModule({
  declarations: [
    MessageComponent,
    CreateMessageComponent,
    MyMessageComponent,
    SeeAllMessageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MessageRoutingModule
  ]
})
export class MessagesModule { }
