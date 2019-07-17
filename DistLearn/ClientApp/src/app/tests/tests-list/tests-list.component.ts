import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './tests-list.component.html'
})

export class TestsListComponent {
  public tests: Test[];
  newName: string;
  id: number;


  constructor(private http: HttpClient) {
    http.get<Test[]>('api/Tests/GetTests').subscribe(result => {
      this.tests = result;
    }, error => console.error(error));
  }

  changeNameById() {
    console.log(this.newName);
    console.log(this.id);
    var i = this.id - 1;
    this.tests[i].id = this.id;
    this.tests[i].name = this.newName;
    this.http.post('api/TestsList/PostData', this.tests[i]).subscribe(
      (val) => {
        console.log("POST CALL ", val)
      });
  }

}

interface Test {
  id: number;
  name: string;
}
