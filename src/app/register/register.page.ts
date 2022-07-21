import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  public form = {
    fullname: "",
    address: "",
    contactnumber: "",
    emailaddress: "",
    password: ""
  }
  print(){
    console.log(this.form)
  }

  ngOnInit() {
  }

}
