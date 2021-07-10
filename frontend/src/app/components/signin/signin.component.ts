import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/classes/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  public email = '';
  public password = '';
  public error = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.buildForm();
  }

  public ngOnInit() { }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  public getError(controlName: string): string {
    let message = '';
    const control = this.form.get(controlName);
    if (control?.dirty || control?.touched) {
      if (control?.errors?.required != null) {
        message = 'Este campo es obligatorio'
      } else if (control?.errors?.email != null) {
        message = 'Debe ser un correo valido';
      } else if (control?.hasError('minlength')) {
        const minLength = control?.errors?.minlength.requiredLength;
        message = `Este campo debe tener minimo ${minLength} caracteres`;
      }
    }
    return message;
  }

  public signIn() {
    this.email = this.form.get('email')?.value;
    this.password = this.form.get('password')?.value;
    const user = new User(this.email, this.password);
    this.authService.signIn(user)
      .subscribe(res => {
        const user = res.user;
        localStorage.setItem('user', user.email);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      }, err => {
        this.error = true;
      })
  }

}
