import { Router } from '@angular/router';
import { User } from '../../../users/models/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ConstantPool } from '@angular/compiler';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
	idUsuario: any;
	SaldoUsuario:any ={};
	userName: string = "";
	passUser: string = "";
	errores: boolean = false;
	idRol: any;

	

	constructor(private srvAuth: AuthService, private router: Router) { }

	ngOnInit(): void {
	}

	goForgot(){
		this.router.navigate(["/olvidepass"]);
	}

	async iniciarSesion() {
		//console.log(this.userName, this.passUser)
		this.errores = false;
		try {
			const dataUser: User = await this.srvAuth.login({ email: this.userName, pass: this.passUser }).toPromise();
			if (dataUser.accessToken) {
				//this.srvAuth.setUserSubject(dataUser);
				await this.srvAuth.accionarSesion(dataUser).toPromise();
				delete dataUser.userData.email;
				
				sessionStorage.setItem('currentUser', JSON.stringify(dataUser));
				//localStorage.setItem('currentUser', JSON.stringify(dataUser));
				//Probando setear un BehaviorSubject
				this.idRol = JSON.parse(sessionStorage.getItem('currentUser')).userData.idRolUsuario;
				if (this.idRol == 3)
				{
					this.router.navigate(['dashboard/notificaciones']);
				}
				if (this.idRol != 3)
				{
					this.router.navigate(['dashboard']);
					//console.log(dataUser);
				}
				
				
			}
		} catch (error) {
			// vacio 400 "bad request" .ok .status:400 
			// invalid mail o pass "bad request" .ok .status:406 
			this.errores = true;
			//console.log(error);

		}

		

	}


	
		
}