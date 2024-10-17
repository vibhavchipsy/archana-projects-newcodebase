import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../_layouts/spinner/spinner.component';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AddStudentComponent } from './add-student/add-student.component';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/state.model';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerComponent, RouterLink, AddStudentComponent],
  providers: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent implements OnInit, OnDestroy {

  name: string = "Aniruddha";
  inputValue: any = "";
  message: any;
  subscription: any;
  subscriptionTwo: any;
  items: any = [];
  uniqueItems: any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private user: UserService,
    private store: Store<{ appState: AppState }>
  ) { }

  ngOnInit(): void {
    this.subscription = this.user.getData().subscribe((data) => {
      this.message = data
    })

    // this.subscriptionTwo=this.store.select('data').subscribe(data=>{
    //   console.log(data)
    // })
    this.subscriptionTwo = this.store.pipe(select('appState')).subscribe(state => {
      this.message = state.data;
      this.items = state.items;
    });

    this.user.currentArray.subscribe(data => {
      console.log(data)
    })
  }

  handleInputChange(event: any) {
    this.inputValue = event
  }

  trackByFn(index: number, item: any): string | number {
    return item.id;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
