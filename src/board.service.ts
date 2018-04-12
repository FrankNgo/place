import { Injectable } from '@angular/core';
import { Boxes } from './board/board.model';
import { UserService } from './app/core/user.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { FirebaseUserModel } from './app/core/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  providers: [BoxService,UserService]
})
@Injectable()
export class BoxService {
  boxes: FirebaseListObservable<any[]>;
  user: FirebaseUserModel = new FirebaseUserModel();


  constructor(private database: AngularFireDatabase,
    public userService: UserService,
    private route: ActivatedRoute) {
    this.boxes = database.list('boxes');

    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.user = data;

        // console.log("test"+this.user.name)
      }
    })
  }

  getBoxes() {
    return this.boxes;
  }

  addSquare(newBox) {
    var test = newBox;
    test.userName = this.user.name;
    this.boxes.push(test);
    console.log(test.userName)
  }

  ngOnInit() {
    // console.log(this.boxes);

  }

  // addAlbum(newAlbum: Album) {
  //   this.albums.push(newAlbum);
  // }
  //
  // getAlbumById(albumId: string) {
  //   return this.database.object('albums/' + albumId);
  // }
  //
  // updateAlbum(localUpdatedAlbum) {
  //   let albumEntryInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
  //   albumEntryInFirebase.update({title: localUpdatedAlbum.title,
  //                               artist: localUpdatedAlbum.artist,
  //                               description: localUpdatedAlbum.description});
  // }
  //
  // deleteAlbum(localAlbumToDelete) {
  //   let albumEntryInFirebase = this.getAlbumById(localAlbumToDelete.$key);
  //   albumEntryInFirebase.remove();
  // }

}
