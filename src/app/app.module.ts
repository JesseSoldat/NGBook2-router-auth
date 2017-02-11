import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home_component';
import { AboutComponent } from './components/about_component';
import { ContactComponent } from './components/contact_component';
import { ProtectedComponent } from './components/protected_component';
import { LoginComponent } from './components/login_component';

import { AUTH_PROVIDERS } from './services/auth_service';
import { LoggedInGuard } from './guards/login_guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProtectedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AUTH_PROVIDERS, LoggedInGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
