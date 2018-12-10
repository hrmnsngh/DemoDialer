import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent implements OnInit {
  username;
  password;
  loginForm: FormGroup;
  showPassword: Boolean = false;
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['harman', Validators.required],
      password: ['password', Validators.required]
    });
  }

  showPass() {
    this.showPassword = !this.showPassword;

  }

  login(data) {
    console.log('inside login');
    console.log(data);
   // this.loginService.postUser(data);
    this.loginResult();
    this.router.navigate(['/dashboard']);
  }

  loginResult() {
    // console.log(this.loginService.getUser());
    // this.loginService.getUser().subscribe(data => {
    //     this.loginResponse = data;
    //     console.log('Ts recieved response : ', data);
    //       });
    // setTimeout(() => {
    //   console.log(this.loginResponse);
    //   // this.loginService.getUser().unsubscribe();
    // }, 10000);
  }
  ngOnInit() {
    // this.loginResult();
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {

  }

}
