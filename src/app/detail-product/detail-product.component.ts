import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../generals/product.model';
import { DataService } from '../generals/services/data.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(private route:ActivatedRoute,private dataService:DataService) { }

  product: Product;

  ngOnInit(): void {
    this.product = this.dataService.getProductById(this.route.snapshot.params['id']);
  }

}
