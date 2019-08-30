import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ItemService } from '../services/item.service';
import { Item } from '../services/item';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.page.html',
  styleUrls: ['./detail-categorie.page.scss'],
})
export class DetailCategoriePage implements OnInit {

  item: Item = null
 
  constructor(private route: ActivatedRoute, private itemService: ItemService) {
	this.route.queryParams.subscribe(params => {
  	if (params && params.id) {
    	this.item = this.itemService.get(params.id)
  	}
	})
  }

  ngOnInit() {
  }

}
