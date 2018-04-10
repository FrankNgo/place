import { Injectable } from '@angular/core';
import { Board } from './board/board.model';
import { BOXES } from './mock-boxes';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BoardService {
  boxes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.boxes = database.list('boxes');
  }

  getBoxes(){
    return this.boxes;
  }
}
