// /*** Core module: Singleton Services ***/

// import { 
//   NgModule, ModuleWithProviders, Optional, SkipSelf 
// } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
// export class CoreModule { 
//   constructor(
//     // "Inject and instance of CoreModule IF another instance doesn't exist"

//     // Marks dependency as optional: 
//     @Optional()

//     // Checks injector hierarchy for another instance of itself
//     @SkipSelf()

//     parentModule: CoreModule
// ) {
//     // "if" parentModule already contains an instance of CoreModule
//     // (i.e. if parameter is not null), CoreModule exists.
//     if (parentModule) {
//         throw new Error(
//             "CoreModule exists already. Only import in the root/app module"
//         );
//     }
// }

//   // Add singletons here
//   // Allows the creation of singletons. forRoot() locks CoreModule to the root
//   // (won't work in other modules).
//   static forRoot(): ModuleWithProviders {
//     return {
//       ngModule: CoreModule,
//       providers: []
//     }
//   }
// }
