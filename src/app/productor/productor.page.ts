import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-productor',
  templateUrl: './productor.page.html',
  styleUrls: ['./productor.page.scss'],
})
export class ProductorPage implements OnInit {
  user: User = new User();
  constructor(private router: Router , private authSvc: AuthService) { }

  ngOnInit() {
  }
async onLogin(){
  const user = await this.authSvc.onLogin(this.user);
  if (user) {
    console.log('Satisfactorio incio de sesion');
    this.router.navigateByUrl('/ingresar');
  }
}
}
