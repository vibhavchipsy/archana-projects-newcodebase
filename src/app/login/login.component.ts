import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environments';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  is_auth: boolean = false;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(/[\S]/)]],
      password: ['', [Validators.required, Validators.pattern(/[\S]/)]],
      rememberMe: false,
    })

    if (localStorage.getItem(`${environment.appName}` + 'user')) {
      this.is_auth = true;
      this.router.navigate(['/dashboard']);
    } else {
      this.is_auth = false;
    }
  }

  get f() { return this.loginForm.controls; }

  submit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.toastr.error("Please Enter All The Required Fields..!")
      return;
    }

    const username = this.loginForm.get("username")?.value;
    const password = this.loginForm.get("password")?.value;

    const credentials = { username, password };
    if (this.loginForm.get("rememberMe")?.value) {
      localStorage.setItem("user", JSON.stringify(credentials));
    }

    this.auth.login(
      'mk',
      this.f['username'].value,
      this.f['password'].value
    ).subscribe({
      next: data => {
        if (data.status.code === 200) {
          this.toastr.success(data.status.message)
          this.router.navigate(['/dashboard'])
        }
      },
      error: error => {
        this.toastr.error(error.status.message)
      }
    })
  }

}
