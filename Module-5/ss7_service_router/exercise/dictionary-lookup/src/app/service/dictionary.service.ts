import {Injectable} from '@angular/core';
import {IWord} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: IWord [] = [
    {word: 'Hello', mean: 'Xin chao'},
    {word: 'Bye', mean: 'Tam biet'},
    {word: 'Table', mean: 'Cai ban'},
    {word: 'Pen', mean: 'Cay but'},
    {word: 'Book', mean: 'Sach'}];

  constructor() {
  }

  findAll(): IWord[] {
    return this.wordList;
  }

  findByMean(word: string): IWord {
    return this.wordList.find(wordDetail => wordDetail.word === word);
  }
}
