import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[]=[
    new Goal(1,'Watch Dr.Robot','Find a  new season to keep me entertained'),
    new Goal(2,'Bake cookies','Shop for all the required ingredients'),
    new Goal(3,'Visit the mall','Enjoy coffee at my fav spot'),
    new Goal(4,'Get a puppy','Go to the shelter to check out some options'),
    new Goal(5,'Complete Angular IP','One commit at a time'),
    new Goal(6,'Set the world on fire','Because girls run the world'),
  ];

  completeGoal(isComplete, index){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}