import { Component } from '@angular/core';

type toDoObject = {
  name: string;
  textDecorater: string;
  show: boolean;
};

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css'],
})
export class ToDosComponent {
  task: string = '';
  x: any = localStorage.getItem('myToDos');
  toDoArray: toDoObject[] = JSON.parse(this.x) || [];

  // if(localStorage.getItem("myToDos") == null) {
  //   this.toDoArray = [];
  // }
  // else {
  //   this.toDoArray = JSON.parse(localStorage.getItem("myToDos"));
  // }

  addToDo() {
    if (this.task.trim() != '') {
      this.toDoArray.push({
        name: this.task,
        textDecorater: 'none',
        show: true,
      });
      localStorage.setItem('myToDos', JSON.stringify(this.toDoArray));
      this.task = '';
      // this.toDo.name = '';
    } else {
      alert('please enter todo');
    }
    // this.input.value = '';
  }


  done(index: number) {
    this.toDoArray[index].textDecorater = 'line-through';
  }

  delete(index: number) {
    this.toDoArray[index].show = false;
    this.toDoArray.splice(index, 1);
    localStorage.setItem('myToDos', JSON.stringify(this.toDoArray));
  }
}
