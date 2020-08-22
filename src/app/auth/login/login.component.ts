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
    submitted = false;
    errorMessage:string = '';
    hidePassword:boolean = false;
    // private validationMessages: { [id: string]: { [id: string]: string } };
    // formError: { [id: string]: string };

    constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService
    ) {
        // redirect to home if already logged in
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

    // this.formError = {
    //   militaryRegistryNum: '',
    //   password: ''
    // }

    // this.validationMessages = {
    //   militaryRegistryNum: {
    //     required: 'Military Register Number is required',
    //     minlength: 'Military Register Number must be at least 5 digits.',
    //     maxlength: 'Military Register Number cannot exceed 12 digits.'
    //   },
    //   password: {
    //     required: 'Password is required'
    //   }
    // }

    // // Watch all of the controls on the form
    // this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));

  }


  //  // Start of a generic validator
  //  private onValueChanged(data: any): void {
  //   Object.keys(this.formError).forEach(field => {
  //     const hasError = !this.loginForm.get(field).valid;
  //     this.formError[field] = '';
  //     if (hasError) {
  //       Object.keys(this.loginForm.get(field).errors).forEach(rule =>
  //         this.formError[field] += this.validationMessages[field][rule] + ' '
  //       );
  //     }
  //   });
  // }



  ngOnInit() {
  }


  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log('invalid');

        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.militaryRegistryNum.value, this.f.password.value)
        .pipe(first())
        .subscribe({
            next: () => {
                this.loginForm.reset();
                this.router.navigate(['/']);
            },
            error: error => {
              // Reset the form to clear the flags
                this.errorMessage = error;
                this.loading = false;
            }
        });
  }

  public getValidationError(){
    if (this.f.militaryRegistryNum.hasError('required')) {
      return 'Military Register Number is required';
    }
    if (this.f.militaryRegistryNum.hasError('minlength')) {
      return 'Military Register Number must be at least 5 digits.';
    }
    if (this.f.militaryRegistryNum.hasError('maxlength')) {
      return 'Military Register Number cannot exceed 12 digits.';
    }
  }

}
