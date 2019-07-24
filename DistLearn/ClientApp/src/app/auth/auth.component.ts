import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './auth.component.html'
})

export class AuthComponent {
  userName: string;
  password: string;
  users: User = {
    name: "",
    password: ""
  };

  constructor(private http: HttpClient) { }

  logIn() {
    this.users.name = this.userName;
    this.users.password = this.password;
    console.log(this.users);
    this.http.post('api/Auth/logIn', this.users).subscribe(
      (val: User) => {
        if (val == null) {
          console.log(this.users);
          console.log(val);
          alert('Неверные данные');
        }
        else {
          console.log(this.users);
          console.log(val);
          alert('Вход');
        }
        console.log("Post", val)
      })
  }

}

interface User {
  id?: number;
  name: string;
  password: string;
}
