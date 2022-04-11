import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests!: Request[];
  

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService
  ) { }

  addUser(requests: Request[]){
    for(let r of requests) {
      r.userName = r.userName;
    }
  }

  ngOnInit(): void {
    this.sys.isLogged();
    let userId = this.sys.getlogUser()!.id;
    this.reqsvc.reviews(userId).subscribe({
      next: (res) => {
        this.addUser(res);
        console.log(res);
        this.requests = res;
      },
      error: (err) => console.error(err)
    });
    
  }

}
