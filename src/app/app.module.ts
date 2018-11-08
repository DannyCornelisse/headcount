// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/pages/employee/employee.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AddEmployeeCardComponent } from './components/add-employee-card/add-employee-card.component';
import { AddEmployeeModalComponent } from './components/add-employee-modal/add-employee-modal.component';
import { EditEmployeeModalComponent } from './components/edit-employee-modal/edit-employee-modal.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';

// Services
import { EmployeeService } from './services/employee.service';
import { AuthResolverService } from './config/auth-resolver.service';

const appRoutes: Routes = [
  { path: 'employees',
    component: EmployeeComponent,
    resolve: {
      token: AuthResolverService
    }
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: 'login' }, // Should be last!
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeCardComponent,
    NavigationComponent,
    AddEmployeeCardComponent,
    AddEmployeeModalComponent,
    EditEmployeeModalComponent,
    LoginPageComponent,
    LoginModalComponent,
    RegisterModalComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    NgbModule, FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddEmployeeModalComponent,
    EditEmployeeModalComponent,
    LoginModalComponent,
    RegisterModalComponent
  ]
})
export class AppModule { }
