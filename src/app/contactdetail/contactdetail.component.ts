import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../_models';
import { GeneralService } from '../_services';

@Component({
    selector: 'app-contactdetail',
    templateUrl: './contactdetail.component.html',
    styleUrls: ['./contactdetail.component.scss']
})
export class ContactdetailComponent implements OnInit {

    public user: User;

    public constructor(private route: ActivatedRoute,
        private generalService: GeneralService,
        private router: Router,) { }

    public ngOnInit(): void {
        //look for uuid
        let uuid = this.route.snapshot.paramMap.get('contactid');
        if (uuid == null) {
            this.router.navigate(["/contact"]);
        } else {
            //look for user
            this.user = this.generalService.findUser(uuid);
            if (this.user == null) {
                this.router.navigate(["/contact"]);
            }
        }
    }

    public contacts() {
        this.router.navigate(["/contact"])
    }
}
