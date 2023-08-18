import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user :{
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    address: string
  }  = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: ''
  };

  registeredUsers: any[] = [];
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    this.registeredUsers.push({ ...this.user });
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      address: ''
    };
  }
}
