 import { Component } from '@angular/core';

 import { AuthService } from '../services/auth_service';

 @Component({
 	selector: 'login',
 	templateUrl: './login_component.html'
 })

 export class LoginComponent {
 	message: string;

 	constructor(private authService: AuthService) {
 		this.message = '';
 	}

 	login(user: string, pass: string): boolean {
 		this.message = '';
 		if(!this.authService.login(user, pass)){
 			this.message = 'Invalid Credentials!';
 			setTimeout(function() {
 				this.message = '';
 			}.bind(this), 2500);
 		}
 		return false;
 	}

 	logout(): boolean {
 		this.authService.logout();
 		return false;
 	}
 }