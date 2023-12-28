/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  todoList=[];
  constructor(){
    this.todoList=[];
  }
  add(todo){
    this.todoList.push(todo);
  }
  remove(indexOfTodo){
    this.todoList=this.todoList.filter((_,i)=>i!=indexOfTodo);
  }
  update(indexOfTodo,updatedTodo){
    if(indexOfTodo>this.todoList.length-1 || indexOfTodo<0){
      return
    }
    this.todoList[indexOfTodo]=updatedTodo;
  }
  getAll(){
    return this.todoList;
  }
  get(indexOfTodo){
    if(indexOfTodo>this.todoList.length-1 || indexOfTodo<0){
      return null;
    }
    return this.todoList[indexOfTodo]
  }
  clear(){
    this.todoList=[]
  }

}

module.exports = Todo;
