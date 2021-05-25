import { Component, OnInit } from '@angular/core';
import { TestService } from '../core/test.service';

import { UserInfo } from './../model/model'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private testService: TestService) { }

  isLogInFlag = false;
  isSignUpFlag = false;
  userInfo:UserInfo;

  ngOnInit(): void {
      debugger
    // this.resetAllInfo();
  }

  signUpApplication() {
    this.isSignUpFlag = true;
    this.isLogInFlag = false;

  }

  loginApplication() {
     this.isLogInFlag = true;
     this.isSignUpFlag = false;

  }

  resetAllInfo() {
        // this.userInfo.name = "";
        this.userInfo.userName = "";
        this.userInfo.password = "";
        this.userInfo.age = 0;
        this.userInfo.bio = "";
        this.userInfo.image = "";
  }

  loggedInIntoApplication() {
      this.testService.getLogedUser(this.userInfo).subscribe(
          resp => {

          },
          err => {

          }
      )
  }

}
