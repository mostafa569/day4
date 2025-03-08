import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { AccountComponent } from './pages/account/account/account.component';
import { LoginComponent } from './pages/account/login/login.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '**', component: NotfoundComponent },
];
