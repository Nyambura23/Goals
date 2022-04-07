import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detai',
  templateUrl: './goal-detai.component.html',
  styleUrls: ['./goal-detai.component.css']
})
export class GoalDetaiComponent implements OnInit {

  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  // goalComplete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

   constructor() { }

  ngOnInit(): void {
  }

}
