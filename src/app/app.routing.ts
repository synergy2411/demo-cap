import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

export const APP_ROUTES : Routes = [{
    path : '',                              //http://localhost:4200
    redirectTo : 'login',
    pathMatch : 'full'
},{
    path : 'login',                          //http://localhost:4200/login
    component : LoginComponent
}, {
    path : 'register',
    component : RegisterComponent
},{
    path : 'pipe',
    component : PipeDemoComponent
},{
    path : '**',                           //http://localhost:4200/nowhere
    redirectTo : 'login',
    pathMatch : 'full'
}]
