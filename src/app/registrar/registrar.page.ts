import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  user: User = new User ();

  constructor(private AuthSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }
  async onRegister() {
    const user = await this.AuthSvc.onRegister(this.user);
    if (user) {
      console.log('Satisfactorio');
      this.router.navigateByUrl('/productor');
    }
  }

}
