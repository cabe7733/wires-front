import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, debounceTime, distinctUntilChanged, takeUntil, Observable } from 'rxjs';
import { SeeAllMessageService } from '../../services/see-all-message.service';


@Component({
  selector: 'app-see-all-message',
  templateUrl: './see-all-message.component.html',
  styleUrls: ['./see-all-message.component.sass']
})
export class SeeAllMessageComponent implements OnInit {

  searchTerm$ = new BehaviorSubject<string>('');
  private OnDestroy$ = new Subject();

  message:any;
  listFiltered$: Observable<string[]> | undefined;

  constructor(private services:SeeAllMessageService) { }

  ngOnInit(): void {
    this.filterList();
  }

  getMessages(){
    this.services.allMessage().subscribe(data=>{
      this.message=data;
    })
  }


  filterList(): void {
    this.searchTerm$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        takeUntil(this.OnDestroy$),
      )
      .subscribe(term => {
        this.listFiltered$ = this.message
          .filter((item: string) => item.toLowerCase().indexOf(term.toLowerCase()) >= 0);
      });
  }
}
