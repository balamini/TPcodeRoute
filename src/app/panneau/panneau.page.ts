import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Item } from '../services/item';

@Component({
  selector: 'app-panneau',
  templateUrl: './panneau.page.html',
  styleUrls: ['./panneau.page.scss'],
})
export class PanneauPage implements OnInit {

 items: Item[] = null

  constructor(private itemService: ItemService, private router: Router) {
	this.getItems()
  }

  ngOnInit() {
  }

  getItems() {
	this.items = this.itemService.getAllP();
  }

  onClickItem(itemId) {
	let navigationExtras: NavigationExtras = {
  	queryParams: { id: itemId }
	}
	this.router.navigate(['detail-panneau'], navigationExtras)
  }

}