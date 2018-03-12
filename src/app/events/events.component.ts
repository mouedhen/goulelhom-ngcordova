import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  public events = [];

  public rorreMessage;

  constructor(private _eventsService: EventsService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this._eventsService.getEvents().subscribe(
      data => this.events = data,
      rorre => this.rorreMessage = rorre
    );
  }

  eventViewDetail(event) {
    this.router.navigate([
      event.id
    ], {
      relativeTo: this.route
    });
  }

}

