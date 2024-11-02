import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";
import { type User } from './user.model';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
// type User= {s
//   id: string,
//   avatar: string,
//   name: string,
// }

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  @Input({required: true}) user!:User;
  @Input({required: true}) selected!:boolean ;
  // @Input({required: true}) id!:string;
  // @Input({required:true}) avatar!:string;
  // @Input({required:true}) name!: string;
  @Output() select =  new EventEmitter<string>();//it will alow custom method
  // select = output<string>();
  
  
  
  // avatar= input.required<string>();
  // name= input.required<string>();
  // imagePath = computed(()=> {
  //   return 'assets/users/' + this.avatar;
  // })
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed( ()=> 'assets/users/'+this.selectedUser().avatar);
  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectUser(){
    this.select.emit(this.user.id);
    // console.log("clicked on selected user");
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }

}
