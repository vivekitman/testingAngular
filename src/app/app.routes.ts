import { Routes } from '@angular/router';
import { HomeComp } from './about-component/home.component';
import { AboutComp } from './about/about.component';
import { ContactComp } from './contact/contact.component';

export const routes: Routes = [

{ path: '', component: HomeComp},
    { path: 'about', component: AboutComp},
    { path: 'contact', component:ContactComp}

];
