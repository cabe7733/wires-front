import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.sass']
})
export class CreateMessageComponent implements OnInit {

  postMessage: FormGroup;

  constructor() {
    this.postMessage = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      message: new FormControl(null,[Validators.required, Validators.minLength(5)])
   });
  }

  ngOnInit(): void {
  }


  createMessage(){
    this.postMessage.value
    this.postMessage.reset()
  }
}
