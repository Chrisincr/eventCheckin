import { Component, OnInit, Input } from '@angular/core';
import { checkNoChangesInRootView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  @Input() participant: any;
  constructor() {

  }

  ngOnInit() {
  }

  togglecheckin() {
    this.participant.checkedin = !this.participant.checkedin;
  }

}
