import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AuthGuard } from './service/guard/auth.guard';
import { NewTaskBoxComponent } from './components/new-task-box/new-task-box.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    // { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: '**', redirectTo: '', canActivate: [AuthGuard] },
];
