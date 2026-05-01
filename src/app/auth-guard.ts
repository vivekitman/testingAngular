import { CanActivateFn, } from '@angular/router';
import { Auth } from './auth';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = ( ) => {
   const auth = inject(Auth);
   const routh = inject(Router);

    if (auth.isLoggedIn()) {
      return true;
    } else {
      routh.navigate(['/login']);
      return false;
    }
};
