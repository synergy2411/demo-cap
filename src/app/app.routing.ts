import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ProductsComponent } from './products/products.component';
import { OverviewComponent } from './products/overview/overview.component';
import { SpecificationComponent } from './products/specification/specification.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { EmployeeComponent } from './employee-module/employee/employee.component';

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
    component : PipeDemoComponent,
     canActivate : [LoginGaurdService]
},{
    path : 'employee',
    component : EmployeeComponent
},{
    path : 'lazy',
    loadChildren : 'app/lazy/lazy.module#LazyModule'
},{
    path : 'product',
    component :ProductsComponent,
    children : [{
        path : 'overview',
        component : OverviewComponent
    },{
        path : 'spec/:id/:name',
        component : SpecificationComponent
    }]
},{
    path : '**',                           //http://localhost:4200/nowhere
    redirectTo : 'login',
    pathMatch : 'full'
}]
