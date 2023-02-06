import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth-guard.guard';

export const sharedRoutes: Routes = [{path:'',loadChildren: (()=>import('../../_pages/auth/auth.module').then((c)=>c.AuthModule))},
{path:'', canActivate:[AuthGuard],loadChildren:(()=>import('../../_pages/user/user.module').then((c)=>c.UserModule))}
];



