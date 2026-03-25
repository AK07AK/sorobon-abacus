import { Routes } from '@angular/router';
import { HOme } from './home/home';
import { Course } from './course/course';
import { About } from './about/about';

export const routes: Routes = [
    {path:"home",component:HOme},
    {path:"course",component:Course},
    {path:"about",component:About},
    {path:"",redirectTo:"home",pathMatch:'full'}
];
