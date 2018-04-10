import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './board/user.resolver';
import { AuthGuard } from './core/auth.guard';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: BoardComponent,  resolve: { data: UserResolver}}
];
