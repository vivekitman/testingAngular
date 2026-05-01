 
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login } from './login/login';
import { authGuard } from './auth-guard';
import { Dashboard } from './dashboard/dashboard';
 
 

export const routes: Routes = [
   { path: 'login', component: Login },
   {path:'dashboard', component: Dashboard, canActivate: [authGuard]},
{path:'', redirectTo: '/login', pathMatch: 'full'},
];
