import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent,
    HighlightDirective,
    UnlessDirective,
    LoginComponent,
    RegisterComponent,
    NationalCodePipe,
    PipeDemoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent],
  // entryComponents : [],
  // exports : []
})
export class AppModule { }

// let comp = UserComponent;
