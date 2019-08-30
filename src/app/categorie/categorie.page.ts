import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Item } from '../services/item';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

 items: Item[] = null

  constructor(private itemService: ItemService, private router: Router) {
	this.getItems()
  }

  ngOnInit() {
  }

  getItems() {
	this.items = this.itemService.getAll();
  }

  onClickItem(itemId) {
	let navigationExtras: NavigationExtras = {
  	queryParams: { id: itemId }
	}
	this.router.navigate(['detail-categorie'], navigationExtras)
  }

}
