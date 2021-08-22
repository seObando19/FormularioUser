import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  selectedUser: Register = {
    name: '',
    lastname: '',
    age: 0,
    profession: ''
  };
  users: Register[] = [];
  URL_API = 'http://localhost:3000/api/users';


  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Register[]>(this.URL_API);
  }

  createUser(user: Register) {
    return this.http.post(this.URL_API, user);
  }

  putUser(user: Register){
    return this.http.put(`${this.URL_API}/${user._id}`, user);
  }

  deleteUser(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
