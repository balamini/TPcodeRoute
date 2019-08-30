import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ItemService } from '../services/item.service';
import { Item } from '../services/item';


@Component({
  selector: 'app-detail-panneau',
  templateUrl: './detail-panneau.page.html',
  styleUrls: ['./detail-panneau.page.scss'],
})
export class DetailPanneauPage implements OnInit {

  item: Item = null
 
  constructor(private route: ActivatedRoute, private itemService: ItemService) {
	this.route.queryParams.subscribe(params => {
  	if (params && params.id) {
    	this.item = this.itemService.getP(params.id)
  	}
	})
  }
  ngOnInit() {
  }

}