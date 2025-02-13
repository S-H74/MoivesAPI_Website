import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent,title:'home'},
  {path:"contact",component:ContactUsComponent,title:'contactUs'}
];
