import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth-guard.guard';
import { AuthLoadGuard } from 'src/app/guard/auth-load.guard';

export const sharedRoutes: Routes = [{path:'',loadChildren: (()=>import('../../pages/auth/auth.module').then((c)=>c.AuthModule))},
{path:'', canActivate:[AuthGuard],canLoad:[AuthLoadGuard],loadChildren:(()=>import('../../pages/user/user.module').then((c)=>c.UserModule))}
];



