
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LeftAreaComponent } from './main-component/left-area/left-area.component';
import { NavigationMenuComponent } from './main-component/left-area/navigation-menu/navigation-menu.component';
import { RightAreaComponent } from './main-component/right-area/right-area.component';
import { TopBarComponent } from './main-component/top-bar/top-bar.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { HamburgerMenuButtonComponent } from './main-component/top-bar/hamburger-menu-button/hamburger-menu-button.component';
import { UserShortInfoComponent } from './main-component/top-bar/user-short-info/user-short-info.component';
import { LoginPageComponent } from './main-component/right-area/login-page/login-page.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from './main-component/right-area/login-page/auth.service';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './main-component/right-area/login-page/auth.guard';
import { UserDocumentsComponent } from './main-component/right-area/user-documents/user-documents.component';
import { AllDocumentsComponent } from './main-component/right-area/all-documents/all-documents.component';
import { ArchiveComponent } from './main-component/right-area/archive/archive.component';
import { LogoutComponent } from './main-component/right-area/logout/logout.component';
import { DataListModule } from 'primeng/datalist';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { TokenInterceptor } from "./main-component/right-area/login-page/token.interceptor";

const appRoutes: Routes = [
  { path: '', redirectTo: 'user/documents', pathMatch: 'full' },
  { path: 'user/documents', component: UserDocumentsComponent, canActivate: [AuthGuard], },
  { path: 'documents', component: AllDocumentsComponent, canActivate: [AuthGuard] },
  { path: 'archive', component: ArchiveComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    UserShortInfoComponent,
    LeftAreaComponent,
    RightAreaComponent,
    TopBarComponent,
    UserDocumentsComponent,
    HamburgerMenuButtonComponent,
    LoginPageComponent,
    AllDocumentsComponent,
    ArchiveComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    DataListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    Angular2FontawesomeModule
  ],
  providers: [AuthGuard, AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
