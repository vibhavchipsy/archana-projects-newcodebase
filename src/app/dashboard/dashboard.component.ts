import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../_layouts/spinner/spinner.component';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, objectType } from '../store/state.model';
import { addItem, clearItem, setData } from '../store/action';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerComponent, RouterLink],
  providers: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private user: UserService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    //this.spinner.show()
  }

  sendMessage() {
    const message = "Hello from Dashboard"
    this.user.sendData(message)
    this.store.dispatch(setData({ data: message }))

    this.store.dispatch(clearItem())
    const data: objectType[] = [
      { id: '1', name: 'ck', age: 24 },
      { id: '2', name: 'rock', age: 50 },
      { id: '3', name: 'cena', age: 45 },
      { id: '4', name: 'edge', age: 37 }
    ]
    this.store.dispatch(addItem({ items: data }))

    this.user.sendArrayData(data)
  }

}
