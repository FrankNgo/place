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
  users: FirebaseListObservable<any[]>;
  user: FirebaseUserModel = new FirebaseUserModel();

  constructor(private database: AngularFireDatabase,
    public userService: UserService,
    private route: ActivatedRoute) {
    this.boxes = database.list('boxes');
    this.users = database.list('users');
    // console.log(this.users[0]);

    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.user = data;
        // console.log("test"+this.user.name)
      }
    })
  }

  getUserIDs() {
    return this.users;
  }

  getUserID() {
    return this.user.id;
  }

  getBoxes() {
    return this.boxes;
  }

  addSquare(newBox) {
    var test = newBox;
    test.userName = this.user.name;
    // console.log(test);
    this.boxes.push(test);
    // console.log(test.userName)
    var usersPush = {
      id: this.user.id,
      canEdit: "true",
      boxesClicked: 1
    }

    var i = 0;
    var matching = 'true';
    var matchedid = 0;
    this.users.forEach(item => {
      console.log('Item:', item);
      if (item[i].id == this.user.id) {
        matching = 'true';
        matchedid = i;
      } else {
        matching = 'false';
      }
      i = i+1;
    });
    if (matching == 'false') {
      this.users.push(usersPush);
    } else {
      // console.log(this.user[matching])
    }
    // this.user.boxesClicked+=1;
    // // console.log(this.user.update{});
    // var albumEntryInFirebase = this.getUserID(this.user.$key);
    // console.log(albumEntryInFirebase);
    // albumEntryInFirebase.update({title: localUpdatedAlbum.title,
    //                                 artist: localUpdatedAlbum.artist,
    //                                 description: localUpdatedAlbum.description});
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
