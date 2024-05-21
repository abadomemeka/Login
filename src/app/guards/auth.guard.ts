// // import { CanActivateFn, Router } from '@angular/router';
// // import { inject } from '@angular/core';
// // import { ToastrService } from 'ngx-toastr';


// // export const authGuard: CanActivateFn = (route,state) => {
  
// //   const router = inject(Router);
// //   const toastr = inject(ToastrService);
// //     const token = localStorage.getItem('token');
// //     // if (token) {
// //     //   // Token exists, user is authenticated
// //     //   return true;
// //     // } else {
// //     //   toastr.error("You do not have authorization. Login to view this page")
// //     //   router.navigate(['/dashboard'])
// //     //   return false;
// //     // }
// //     return true
// // };



// import { CanActivateFn, Router } from '@angular/router';
// import { inject } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';


// export const authGuard: CanActivateFn = (route,state) => {
  
//   const router = inject(Router);
//   const toastr = inject(ToastrService);
//   const token = localStorage.getItem('token');
//   if (token) {
//     // Token exists, user is authenticated
//     return true;
//   } else {
//     // toastr.error("You do not have authorization. Login to view this page")
//     router.navigate(['/dashboard'])
//     return false;
//   }

// };



import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  const toastr = inject(ToastrService);
  const token = localStorage.getItem('token');

  if (token) {
    // Token exists, user is authenticated
    return true;
  } else {
    toastr.error("You do not have authorization. Login to view this page");

    setTimeout(() => {
      router.navigate(['/login']);
    }, 0); 

    return false;
  }
};
