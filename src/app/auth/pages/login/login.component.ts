import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  public formLogin = this.fb.group({
    nombre:['juan@gmail.com', [Validators.required]],
    password: ['123456',[Validators.required,Validators.minLength(6)]]    
  });

  public entrar(){
    
    this.router.navigateByUrl('/dashboard');

  }
  

}
