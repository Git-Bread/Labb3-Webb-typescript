import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ConvertComponent } from './convert/convert.component';

export const routes: Routes = [
    {path: "", component: IndexComponent},
    {path: "about", component: AboutComponent},
    {path: "convert", component: ConvertComponent}
];