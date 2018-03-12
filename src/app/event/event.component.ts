import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, ParamMap} from '@angular/router';

import {EventsService} from '../events.service';

// import EmbedJS from 'embed-js';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public eventId: number;

  public event = {};

  public rorreMessage;

  constructor(private route: ActivatedRoute, private _eventsService: EventsService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.eventId = +params.get('id');
    });

    this._eventsService.getEvents().subscribe(
      data => this.event = data[data.findIndex(e => e.id === this.eventId)],
      rorre => this.rorreMessage = rorre
    );
  }

}
