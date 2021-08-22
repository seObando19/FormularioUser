import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(public registerService: RegisterService) {}

  ngOnInit() {
    this.getUsers();
  }

  //method/function to clean the form
  resetForm(form: NgForm) {
    form.reset();
  }

  //method/function to get all users
  getUsers() {
    this.registerService.getUsers().subscribe(
      (res) => (this.registerService.users = res),
      (err) => console.log(err)
    );
  }

  //method/function to create or edit user
  addUser(form: NgForm) {
    if (form.value._id) {
      this.registerService.putUser(form.value).subscribe(
        (res) => {
          this.getUsers();
          this.resetForm(form);
        },
        (err) => {
          console.log(err)
        }
      );
    } else {
      this.registerService.createUser(form.value).subscribe(
        (res) => {
          this.getUsers();
          this.resetForm(form);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  // function/method to delete to user
  deleteUser(id: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.registerService.deleteUser(id).subscribe(
        (res) => {
          console.log('Entre res');
          this.getUsers();
        },
        (err) => {
          console.log('Entre err');
          console.log(err);
        }
      );
    }
  }

  //method/function to edit user
  editUser(user: Register) {
    this.registerService.selectedUser = user;
  }
}
