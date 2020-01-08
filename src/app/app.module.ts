import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { TaskService } from './services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskFormComponent } from './components/task-manager/task-form/task-form.component';
import { TaskListComponent } from './components/task-manager/task-list/task-list.component';
import { TaskItemComponent } from './components/task-manager/task-list/task-item/task-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { TaskDetailComponent } from './components/task-manager/task-detail/task-detail.component';

const routes:Routes=[
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'task',component:TaskManagerComponent, canActivate:[AuthGuard]},
  {path:'task/:id',component:TaskDetailComponent, canActivate:[AuthGuard]},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskManagerComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TaskService,
    MessageService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
