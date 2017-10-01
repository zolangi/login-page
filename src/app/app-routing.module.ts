import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { UserComponent } from './user.component';
import { SignupComponent} from './signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'signup',     component: SignupComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
