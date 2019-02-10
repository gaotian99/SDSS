import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user';
import { NavbarService } from 'src/app/services/entities/navbar.service';
import { FooterService } from 'src/app/services/entities/footer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private navbar: NavbarService,
    private footer: FooterService) { }





  public user: User = {email:"", password:"", name:"", age:"", sex:"", phoneNumber:"", role:""};





  register() {
    this.auth.register(this.user).subscribe(result=>
      console.log(result))
  };






  ngOnInit() {
    this.navbar.show();
    this.footer.show();


  }

}
