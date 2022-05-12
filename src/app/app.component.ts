import { Component } from '@angular/core';
import { Logger } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private logger: Logger){}

  canClick  = false;
  canEdit = false;
  message = 'this is read only';
  sayHelloId = 1;
  fontColor = 'green';
  

  sayMessage() {
    this.logger.writeCount(5);
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
