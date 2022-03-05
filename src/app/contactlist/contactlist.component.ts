import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService, GeneralService } from '../_services';
import { User, UserResult } from '../_models';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contactlist',
    templateUrl: './contactlist.component.html',
    styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit, AfterViewInit {

    //ELEMENT_DATA: User[] = [];
    public isLoading = false;
    public totalRows = 7000;
    public pageSize = 15;
    public currentPage = 0;
    public pageSizeOptions: number[] = [15, 50, 100];
  
    public displayedColumns: string[] = ['thumbanil','firstname', 'lastname', 'email', 'phone'];
    public dataSource: MatTableDataSource<User> = new MatTableDataSource();
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild('empTbSortWithObject') empTbSortWithObject = new MatSort();

    public constructor(private userService: UserService,
        private generalService: GeneralService,
        private router: Router) { }

    public ngOnInit(): void {
        //reset
        this.generalService.users = [];
        this.currentPage = 0;

        //Load initial data
        this.loadData();
    }
  
    public ngAfterViewInit() {
        //set up pagination
        this.dataSource.paginator = this.paginator;

        //set up sorting
        this.dataSource.sort = this.empTbSortWithObject;
        this.dataSource.sortingDataAccessor = (row:User, columnName:string) : string => {
        
            if (columnName=="firstname") return row.name.first;
            if (columnName=="lastname") return row.name.last;
            if (columnName=="email") return row.email;
            if (columnName=="phone") return row.phone;
            
            var columnValue = row[columnName as keyof User] as string;
            return columnValue;
        }
    }
  
    public loadData() {
        this.isLoading = true;
        this.userService.list(this.currentPage+1, this.pageSize).subscribe((userResult: UserResult) => {
            this.dataSource.data = userResult.results;
            this.generalService.addUsers(userResult.results)
            setTimeout(() => {
                this.paginator.pageIndex = this.currentPage;
                this.paginator.length = this.totalRows; // userResult.info.results;
            });
            this.isLoading = false;
        }, error => {
            console.log(error);
            this.isLoading = false;
        });
    }
    
    public pageChanged(event: PageEvent) {
        console.log({ event });
        this.pageSize = event.pageSize;
        this.currentPage = event.pageIndex;
        this.loadData();
    }

    public editContact(user: User) {
        this.router.navigate(["contact/" + user.login.uuid] );
    }

}
