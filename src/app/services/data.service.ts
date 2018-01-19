import { Injectable } from '@angular/core';
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

  getQuestion() {
    return this.questions;
  }

}
