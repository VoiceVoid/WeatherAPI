import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  totalVotes = 0;
  constructor() { }

  ngOnInit() {
  }

  upVote(){
    this.totalVotes++;
  }

  downVote(){
    this.totalVotes--;
  }
}
