import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading:boolean = false;
    errorMessage:string = '';
    hidePassword:boolean = false;

    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService
    ) {
        // redirect to dashboard if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
            return
        }
        this.createForm();
    }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      militaryRegistryNum: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      password: ['', Validators.required]
    });

  }


  ngOnInit() {}


  public get f() { return this.loginForm.controls; }

  public onSubmit() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.militaryRegistryNum.value, this.f.password.value)
        .pipe(first())
        .subscribe({
            next: () => {
                //this.loginForm.reset();
                this.router.navigate(['/']);
            },
            error: error => {
                this.errorMessage = error;
                this.loading = false;
            }
        });
  }

  public getValidationError(){
    if (this.f.militaryRegistryNum.hasError('required')) {
      return 'Military ID is required';
    }
    if (this.f.militaryRegistryNum.hasError('minlength')) {
      return 'Military ID must be at least 5 digits.';
    }
    if (this.f.militaryRegistryNum.hasError('maxlength')) {
      return 'Military ID cannot exceed 12 digits.';
    }
  }

}
