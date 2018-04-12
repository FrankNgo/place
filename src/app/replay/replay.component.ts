import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseUserModel } from '../core/user.model';
import { BoxService } from '../../board.service';
import { Boxes } from '../../board/board.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-replay',
  templateUrl: 'replay.component.html',
  styleUrls: ['./replay.component.css'],
  providers: [BoxService]
})
@Injectable()
export class ReplayComponent implements OnInit{

  boxes: FirebaseListObservable<any[]>;
  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location : Location,
    private fb: FormBuilder,
    private router: Router
    ,private boxService: BoxService
  ) {

  }

  ngOnInit(): void {
    this.boxes = this.boxService.getBoxes();
    // console.log(this.boxes);
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm(this.user.name);
        // console.log("test"+this.user)
      }
    })
    var canvas = <HTMLCanvasElement> document.getElementById("grid");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
  }

  createForm(name) {
    this.profileForm = this.fb.group({
      name: [name, Validators.required ]
    });
  }

  save(value){
    this.userService.updateCurrentUser(value)
    .then(res => {
      console.log(res);
    }, err => console.log(err))
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }

  title = 'app';

  color = 'black';

  drawnPixels = [];



  drawPixels2 (xInput, yInput, color) {
    var canvas = <HTMLCanvasElement> document.getElementById("grid2");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    var x = (Math.ceil((xInput)/15)*15)-15;
    var y = (Math.ceil((yInput)/15)*15)-15;
    // setInterval(function() { ctx.fillRect(xInput,yInput,15,  15 },8000);
    // setTimeout(()=>{ ctx.fillRect(xInput,yInput,15,  15) }, 1000)
  }

  setColor(colorset) {
    this.color = colorset;
  }



}
