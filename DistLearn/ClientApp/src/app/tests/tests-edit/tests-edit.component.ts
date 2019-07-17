import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './tests-edit.component.html'
})

export class TestsEditComponent {
  public questions: Question[];

  constructor(http: HttpClient) {
    http.get<Question[]>('api/Tests/GetTests').subscribe(result => {
      this.questions = result;
    }, error => console.error(error));
  }
}

interface Question {
  id: number;
  name: string;
  testid: number;
}
