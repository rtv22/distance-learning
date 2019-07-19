import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './tests-edit.component.html'
})

export class TestsEditComponent {
  public questions: Question[];
  public answers: Answer[];
  public tests: Test[];

  constructor(private http: HttpClient) {
    http.get<Question[]>('api/Tests/GetQuestions').subscribe(result => {
      for (var i = 0; i < this.tests.length; i++) {
        for (var j = 0; j < this.questions.length; j++) {
          if (this.tests[i].id == this.questions[j].testid) {
            this.questions = result;
          }
        }
      }
    }, error => console.error(error));
    http.get<Answer[]>('api/Tests/GetAnswers').subscribe(result => {
      this.answers = result;
    }, error => console.error(error));
  }

  }

interface Question {
  id: number;
  name: string;
  testid: number;
  answer: Answer;
}

interface Answer {
  id: number;
  name: string;
  iscorrect: boolean;
  questionid: number;
}

interface Test {
  id: number;
  name: string;
}
