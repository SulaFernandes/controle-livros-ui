import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(usuario: string, senha: string) {
    if(usuario === 'sula.fer@gmail.com' && senha === '1234') {
      this.router.navigate(['home']);
    }
    
  }

}
