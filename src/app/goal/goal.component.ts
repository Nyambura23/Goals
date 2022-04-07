import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[]=[
    new Goal(1,'Watch Dr.Robot','Find a  new season to keep me entertained',new Date(2020,3,14)),
    new Goal(2,'Bake cookies','Shop for all the required ingredients',new Date(2019,6,9)),
    new Goal(3,'Visit the mall','Enjoy coffee at my fav spot',new Date(2022,1,12)),
    new Goal(4,'Get a puppy','Go to the shelter to check out some options',new Date(2019,0,18)),
    new Goal(5,'Complete Angular IP','One commit at a time',new Date(2019,2,14)),
    new Goal(6,'Set the world on fire','Because girls run the world',new Date(200,3,14)),
  ];

  // completeGoal(isComplete, index){
  //   if (isComplete) {
  //     this.goals.splice(index,1);
      // let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      // if (toDelete){
      //   this.goals.splice(index,1)

      deleteGoal(isComplete, index){
        if (isComplete) {
          let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
    
          if (toDelete){
            this.goals.splice(index,1)
          }
    }
  }

  

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
