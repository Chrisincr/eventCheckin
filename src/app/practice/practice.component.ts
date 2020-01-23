import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  participants = [
    {name : 'bob the basher',
    checkedin : false},
    {name : 'carl the sissy',
    checkedin : false}
  ];
  constructor() { }

  ngOnInit() {
  }

  createparticipant(){
    let newparticipant = {name : 'frank the footer',
    checkedin : false}
    this.participants.push(newparticipant)
  }
}
