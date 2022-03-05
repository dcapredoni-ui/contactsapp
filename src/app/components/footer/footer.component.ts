import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    private currentYear: Date = new Date();
    public version: string = "1";
    public year: string;


    public constructor() { }

    public ngOnInit(): void {
        this.year = this.currentYear.getFullYear().toString();
    }

}
