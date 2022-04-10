import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: Requestline = new Requestline();
  products!: Product[];
  

  constructor(
    private reqlsvc: RequestlineService,
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
  ) { }

  submit(): void {
    this.reqlsvc.create(this.requestline).subscribe({
      next: (res) => {
        console.log("RQLine created!")
        this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`);
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.isLogged();
    this.requestline.requestId = +this.route.snapshot.params["id"];
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.log("Products:", res);
        this.products = res;
      },
      error: (err) => console.error(err)
    });
    this.requestline.requestId=+this.requestline.requestId;
  }
  

}
