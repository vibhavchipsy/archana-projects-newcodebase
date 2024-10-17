import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';
import { HomepageComponent } from './home/homepage/homepage.component';

const loginModule = () => import('./login/login.component').then((x) => x.LoginComponent)
const dashboardModule = () => import('./dashboard/dashboard.component').then((x) => x.DashboardComponent)
const studentModule = () => import('./student/student.component').then((x) => x.StudentComponent)
const addStudentModule = () => import('./student/add-student/add-student.component').then((x) => x.AddStudentComponent)

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'login',
    loadComponent: loginModule
  },
  {
    path: 'dashboard',
    loadComponent: dashboardModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'student',
    loadComponent: studentModule,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-student',
    loadComponent: addStudentModule,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
