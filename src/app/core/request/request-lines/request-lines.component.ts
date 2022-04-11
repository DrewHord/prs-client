import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { Requestline } from '../../requestline/requestline.class';
import { RequestlineService } from '../../requestline/requestline.service';
import { User } from '../../user/user.class';
import { SystemService } from 'src/app/system.service';



@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

 
  request!: Request;
  ;

  constructor(  
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private reqlsvc: RequestlineService,
    private sys: SystemService
  ) { }

  edit(rl: Requestline): void {
    this.router.navigateByUrl(`/requestline/edit/${rl.id}`)
  }

  delete(rl: Requestline): void {
    this.reqlsvc.remove(rl.id).subscribe({
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

  ngOnInit(): void {
    this.sys.isLogged();
    this.list();
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
