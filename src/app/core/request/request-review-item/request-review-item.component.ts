import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Requestline } from '../../requestline/requestline.class';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {
  
  request!: Request;
 verifyButton: boolean = false;

  constructor(

    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
  ) { }

  edit(reql: Requestline): void {
    this.router.navigateByUrl(`/requestline/edit/${reql.id}`)
  }

  delete(reql: Requestline): void {
    this.reqsvc.remove(reql.id).subscribe({
      next: (res) => {
        console.debug("Requestline deleted!");
        this.list();
      },
      error: (err) => console.error(err)
    });
  }

  review(): void {
    this.reqsvc.review(this.request).subscribe({
      next: (res) => {
        console.debug("Review");
        this.list();
      },
      error: (err) => console.error(err)
    });
  }
  

  list(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.log("Request", res);
        this.request = res;        
      },
      error: (err) => console.error(err)
    });
  }

  approve(): void {
    this.reqsvc.approve(this.request).subscribe({
      next: (res) => {
        console.log("approved");
        this.list();
      },
      error: (err) =>
      console.error(err)
    })
  }

  reject(): void {
    this.verifyButton = !this.verifyButton;
  }

  verReject(): void {
    this.verifyButton = false;
    this.reqsvc.reject(this.request).subscribe({
      next: (res) => {
        console.log("rejected");
        this.list();
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.list();
    
    
  }

}
