import {Injectable} from '@angular/core';
import {Question} from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'Sanket Singh',
        hide: true
      },
      {
        text: 'What you like the most?',
        answer: 'Competitive Programming',
        hide: true
      }
    ];
  }

  getQuestions() {
    return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.unshift(question);
  }

  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        this.questions.splice(i, 1);
      }
    }
  }

}
