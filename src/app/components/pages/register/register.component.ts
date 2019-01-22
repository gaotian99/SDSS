import { Component, OnInit } from '@angular/core';
import { AuthService, RegisterDetails } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService) { }





  public registerDetails: RegisterDetails;





  register() {
    this.auth.register(this.registerDetails).subscribe(result=>
      console.log(result))
  };






  ngOnInit() {
  }

}
