import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NationalCodePipe } from './pipes/national-code.pipe';

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
    NationalCodePipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents : [],
  // exports : []
})
export class AppModule { }

// let comp = UserComponent;
