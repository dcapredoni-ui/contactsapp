import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';

const routes: Routes = [
    { path: '', component: ContactlistComponent },
    { path: 'contact', component: ContactlistComponent },
    { path: 'contact/:contactid', component: ContactdetailComponent, pathMatch: 'full', }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
