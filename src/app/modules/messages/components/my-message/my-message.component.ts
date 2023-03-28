import { Component, OnInit } from '@angular/core';
import { MyMessageService } from '../../services/my-message.service';

@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html',
  styleUrls: ['./my-message.component.sass']
})
export class MyMessageComponent implements OnInit {

  message:any;
  constructor(private services:MyMessageService) { }

  ngOnInit(): void {
  }

  getMessages(){
    this.services.myMessage().subscribe(data=>{
      this.message=data;
    })
  }
}
