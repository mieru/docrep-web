import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [FormBuilder]
})
export class LoginPageComponent implements OnInit {

  modelForm: FormGroup;
  submitted: boolean = false;

  formErrors = {
    login: '',
    password: ''
  };

  private validationMessages = {
    login: {
      required: "email_required",
      email: "incorrect_email"
    },
    password: {
      required: "password_required",
    }
  };

  constructor(private formBuilder: FormBuilder, private authService:AuthService, private router: Router) {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/');
    }
  }

  onSubmit(event, form) {
    this.submitted = true;
    event.preventDefault();
    this.onControlValueChanged();
    if (form.valid) {
      this.authService.login(this.modelForm.get("login").value, this.modelForm.get("password").value).subscribe(
        response => {
          localStorage.setItem('token', response);
          localStorage.setItem('user', JSON.stringify(this.authService.createCustomerAccountByToken(response)));
          location.reload();
        }, error => {
          alert("Bad name or pass")
        });
    }
  }

  ngOnInit(): void {
    this.modelForm = this.formBuilder.group({
      login: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  onControlValueChanged() {
    const form = this.modelForm;
    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = form.get(field);
      if (control && !control.valid) {
        const validationMessages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] = "Błąd";
        }
      }
    }
  }
}
