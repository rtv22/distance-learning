import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './reg.component.html'
})

export class RegComponent {
  userName: string;
  password: string;
  users: User = {
    name: "",
    password:""
  };

  constructor(private http: HttpClient) { }

  getInfo() {
    console.log(this.userName);
    console.log(this.password);
    this.users.name = this.userName;
    this.users.password = this.password;
    console.log(this.users);
    this.http.post('api/Auth/hui', this.users).subscribe(
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
  name: string;
  password: string;
}
