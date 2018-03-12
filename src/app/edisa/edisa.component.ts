import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-edisa',
  templateUrl: './edisa.component.html',
  styleUrls: ['./edisa.component.scss'],
})
export class EdisaComponent implements OnInit {

  private _toggleMenuState: string = 'out';

  public groups = [
    {
      title: 'complaints',
      desc: 'Here you find a series of complaints classified by categories.'
    },
    {
      title: 'petitions',
      desc: 'You can submit a new petition or sign a petition.'
    },
    {
      title: 'events',
      desc: 'Here is the set of events organized by Goulel’hom.'
    },
    {
      title: 'municipalities',
      desc: 'This link contains information related to municipalities.'
    },
    {
      title: 'reports',
      desc: 'Here are reports about complaints, petitions and related solutions.'
    },
    {
      title: 'press',
      desc: 'Press opinions.'
    }
  ];

  @Output() public toggleMenuEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenuHandler() {
    this._toggleMenuState = this._toggleMenuState === 'out' ? 'in' : 'out';
    this.toggleMenuEvent.emit(this._toggleMenuState);
  }

}
