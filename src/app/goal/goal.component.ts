import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[]=[
    {id:1,name:'Watch Dr.Robot'},
    {id:2,name:'Bake cookies'},
    {id:3,name:'Visit the mall'},
    {id:4,name:'Get a puppy'},
    {id:5,name:'Complete Angular IP'},
    {id:6,name:'Set the world on fire'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
