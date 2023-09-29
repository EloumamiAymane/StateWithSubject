import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ActionEventNavbar } from "./product.state";



@Injectable({ providedIn: 'root' })
export class EventDriverService {
  //provider
  sourceEventSubject: Subject<ActionEventNavbar> = new Subject<ActionEventNavbar>()
  //create subscribers
  sourceEventSubjectObservab = this.sourceEventSubject.asObservable()


  publisher(event: ActionEventNavbar) {
    this.sourceEventSubject.next(event)
  }
}
