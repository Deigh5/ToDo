import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
  tasks = [];
  blank = true;
  
  newDesc:string 
  newPrior:string
 

  addTask()
  {
    this.tasks.push({taskDesc:this.newDesc, taskPrior:this.newPrior})
    this.blank = false;
    this.newDesc = ''
    this.newPrior = ''
  }
 
  deleteTask(task)
  {
    let index = this.tasks.indexOf(task)
    this.tasks.splice(index,1)

    if(this.tasks.length <= 0)
    {
      this.blank = true
    }
    
  }

  editTask(task)
  {
    let newDescription = prompt("Enter new Task: ",task.taskDesc)
    let newPriority = prompt("Enter the new priority: ",task.taskPrior)
    let index = this.tasks.indexOf(task)

    if(newDescription!=null && newPriority)
    {
      this.tasks[index].taskDesc=newDescription
      this.tasks[index].taskPrior=newPriority
    }
  }

}
