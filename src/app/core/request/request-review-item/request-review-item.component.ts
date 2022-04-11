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
  showverifyButton: boolean = false;

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  edit(reql: Requestline): void {
    this.router.navigateByUrl(`/requestline/edit/${reql.id}`)
  }

  delete(reql: Requestline): void {
    this.reqsvc.remove(reql.id).subscribe({
      next: (res) => {
        console.debug("Requestline deleted!");
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
       
        this.request = res;
        this.list();
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
    this.showverifyButton = !this.showverifyButton;
  }

  verReject(): void {
    this.showverifyButton = false;
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
