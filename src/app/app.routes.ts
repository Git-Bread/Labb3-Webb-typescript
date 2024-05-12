import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ConvertComponent } from './convert/convert.component';

export const routes: Routes = [
    {path: "", component: IndexComponent},
    {path: "gallery", component: GalleryComponent},
    {path: "convert", component: ConvertComponent}
];