import {Component, OnInit} from '@angular/core';
import {IWord} from '../model/dictionary';
import {DictionaryService} from '../service/dictionary.service';


@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  wordList: IWord [] = [];

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.wordList = this.dictionaryService.findAll();
  }
}
