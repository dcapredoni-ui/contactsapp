// ===============================
// AUTHOR     : David Capredoni
// CREATE DATE     : March 5, 2022
// PURPOSE     :  Default module
// SPECIAL NOTES:
//==================================
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { UserService, GeneralService } from './_services';

@NgModule({
    declarations: [
        AppComponent,
        ContactlistComponent,
        ContactdetailComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatSortModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
    ],
    providers: [
        UserService,
        GeneralService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
