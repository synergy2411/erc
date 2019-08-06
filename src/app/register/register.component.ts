import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    this.exclamationMark
  ]);

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password
    })
  }

  exclamationMark(input: FormControl) {
    console.log(input);
    const hasExclamation = input.value.indexOf('!') >= 0;
    return hasExclamation ? null : { "hasExcl": true }
  }

  onRegister() {
    console.log(this.registerForm);
  }

  ngOnInit() {
  }

}
