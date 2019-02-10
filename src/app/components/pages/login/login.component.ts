import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { TokenPayload } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/entities/navbar.service';
import { FooterService } from 'src/app/services/entities/footer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginDetails: TokenPayload = {email:"", password:""};









  constructor(
    private auth: AuthService,
    private router: Router,
    private navbar: NavbarService,
    private footer: FooterService) { }


  login(){
    this.auth.login(this.loginDetails).subscribe(result => {
      this.router.navigateByUrl('/landing');
      console.log(result);
    })
  };






  ngOnInit() {

    this.navbar.show();
    this.footer.show();
    }


}
