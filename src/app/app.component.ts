import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canClick  = false;
  canEdit = false;
  message = 'this is read only';
  sayHelloId = 1;
  fontColor = 'blue';
  

  sayMessage() {
    alert(this.message);
  }

  onEditClick(){
    this.canEdit = !this.canEdit;
    if(this.canEdit) {
      this.message = 'you can edit'
    }else{
      this.message = 'cant edit'
    }
  }
  
}

// onEditClick(){
//   this.canEdit = !this.canEdit;
//   if(this.canEdit) {
//     this.message = 'you can edit'
//   }else{
//     this.message = 'cant edit'
//   }
// }
