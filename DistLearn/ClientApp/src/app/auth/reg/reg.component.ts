import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './reg.component.html'
})

export class RegComponent {
  userLogin: string;
  password: string;
  userEmail: string;
  users: User = {
    login: "",
    email: "",
    password:""
  };

  constructor(private http: HttpClient) { }

  getInfo() {
    console.log(this.userLogin);
    console.log(this.password);
    this.users.login = this.userLogin;
    this.users.password = this.password;
    this.users.email = this.userEmail;
    console.log(this.users);
    this.http.post('api/Auth/addUserInDB', this.users).subscribe(
      (val) => {
        if (val == null)
        {
          console.log(this.users);
          console.log(val);
          alert('Пользователь уже существует');
        }
        else
        {
          console.log(this.users);
          console.log(val);
          alert('Вы успешно зарегистрировались');
        }
        console.log("Post", val)
      });
  }
}

interface User {
  id?: number;
  email: string;
  login: string;
  password: string;
}
