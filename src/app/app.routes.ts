import { Routes } from '@angular/router';
import { MainPage } from './pages/main.component';
import { AboutPage } from './pages/about.component';


export const routes: Routes = [
    {path:"",component:MainPage},
    {path:"about",component:AboutPage,pathMatch:'full'},
    {path:"**",redirectTo:"/"}
];
