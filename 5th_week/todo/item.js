//하나의 데이터 객체

class TodoItem {
    constructor(title, dueDate) {
      this.title = title;
      this.dueDate = dueDate; 
      this.completed = false; 
    }
  
    toggleComplete() {
      this.completed = !this.completed;
    }
  }
  
  export default TodoItem;
  