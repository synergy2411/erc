import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { NewEmployeeComponent } from './employee/new-employee/new-employee.component';

export const APP_ROUTES: Routes = [{
  path : "",
  redirectTo : "/login",
  pathMatch : "full"
},{
  path: "login",
  component : LoginComponent
}, {
  path : "register",
  component : RegisterComponent
}, {
  path : "users",
  component : UsersComponent,
  canActivate : [LoginGaurdService]
}, {
  path : "pipe",
  component : PipeDemoComponent
},{
  path : "product",
  component : ProductComponent,
  children :[{
    path : "overview/:id/:name",
    component : OverviewComponent
  }, {
    path : "spec",
    component : SpecificationComponent
  }]
},{
  path : "employee",
  component : NewEmployeeComponent
},{
  path : 'lazy',
  loadChildren : "./lazy/lazy.module#LazyModule"         //path/to/module/file-name/of/file#ModuleClass
},{
  path : "**",
  redirectTo : "/login",
  pathMatch : 'full'
}]
