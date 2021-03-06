import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from '../users/register/register.component'
import { ClientAdminComponent } from '../users/client-admin/client-admin.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditComponent } from './perfil/edit/edit.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { EditarUsuarioComponent } from './admin-users/editar-usuario/editar-usuario.component';

const routes: Routes = [
	{ path: 'admin-users', component: AdminUsersComponent },
	{ path: '', component: PerfilComponent },
	{ path: 'editar/:id', component: EditComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'cliente', component: ClientAdminComponent },
	{ path: 'cliente/editar/:id', component: EditarUsuarioComponent },
	{ path: 'olvidepass', component: ForgotpassComponent },
];


@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class UsersRoutingModule { }