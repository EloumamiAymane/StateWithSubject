import { Component, OnInit } from '@angular/core';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEventNavbar } from 'src/app/state/product.state';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  counter: number = 0
  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {
    this.eventDriverService.sourceEventSubject.subscribe((actionEvent: ActionEventNavbar) => {
      this.counter++;
    })
  }

}
