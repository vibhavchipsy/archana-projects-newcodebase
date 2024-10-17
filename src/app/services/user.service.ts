import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environments';

@Injectable({ providedIn: 'root' })
export class UserService {

    private subject = new BehaviorSubject<string>('Initial Value')
    current = this.subject.asObservable()

    private arrayData = new BehaviorSubject([])
    currentArray = this.arrayData.asObservable()

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    sendData(data: any) {
        this.subject.next(data)
    }

    getData() {
        return this.current
    }

    sendArrayData(data: any) {
        this.arrayData.next(data)
    }
}