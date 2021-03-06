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
import { CompanyPageComponent } from './components/pages/company-page/company-page.component';
import { AddCompanyModalComponent } from './components/add-company-modal/add-company-modal.component';

// Services
import { EmployeeService } from './services/employee.service';
import { AuthResolverService } from './config/auth-resolver.service';
import { AddCompanyCardComponent } from './components/add-company-card/add-company-card.component';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { EditCompanyModalComponent } from './components/edit-company-modal/edit-company-modal.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { EmployeeBubbleComponent } from './components/widgets/employee-bubble/employee-bubble.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'employees',
    component: EmployeeComponent,
    resolve: {
      token: AuthResolverService
    }
  },
  { path: 'companies',
    component: CompanyPageComponent,
    resolve: {
      token: AuthResolverService
    }
  },
  { path: 'dashboard',
    component: DashboardComponent,
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
    RegisterModalComponent,
    CompanyPageComponent,
    AddCompanyCardComponent,
    AddCompanyModalComponent,
    CompanyCardComponent,
    EditCompanyModalComponent,
    LogoutButtonComponent,
    EmployeeBubbleComponent,
    DashboardComponent
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
    RegisterModalComponent,
    AddCompanyModalComponent,
    EditCompanyModalComponent
  ]
})
export class AppModule { }
