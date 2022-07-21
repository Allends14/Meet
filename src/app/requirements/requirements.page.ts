import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.page.html',
  styleUrls: ['./requirements.page.scss'],
})
export class RequirementsPage implements OnInit {

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
