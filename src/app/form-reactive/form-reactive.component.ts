import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  reactiveForm: FormGroup
  hide = true;
  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[\\S]+@ascentic[.]se')]),
      confirmEmail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  get email() {
    return this.reactiveForm.get('email')
  }

  get confirmEmail() {
    return this.reactiveForm.get('confirmEmail')
  }

  get password() {
    return this.reactiveForm.get('password')
  }

  get confirmPassword() {
    return this.reactiveForm.get('confirmPassword')
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        this.email.hasError('pattern') ? 'Email is not in the correct domain' :
          '';
  }

  getConfirmEmailErrorMessage() {
    return this.confirmEmail.hasError('required') ? 'You must enter a value' :
      this.confirmEmail.hasError('appCompare') ? 'Do not match with your email' :
        '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a password' :
      this.password.hasError('minlength') ? 'Password should at least be 5 characters' :
        '';
  }

  getConfirmPasswordErrorMessage() {
    return this.confirmPassword.hasError('required') ? 'You must enter a value' :
      this.confirmPassword.hasError('appCompare') ? 'Passwords do not match' :
        '';
  }
}
