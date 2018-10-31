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

// Services
import { EmployeeService } from './services/employee.service';

const appRoutes: Routes = [
  { path: 'employees', component: EmployeeComponent }
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
    AddEmployeeModalComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule, FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents: [AddEmployeeModalComponent]
})
export class AppModule { }
