import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients-table',
  templateUrl: './ingredients-table.component.html',
  styleUrls: ['./ingredients-table.component.scss'],
})
export class IngredientsTableComponent implements OnInit{
  items = [{ ingredient: '', composition: '' }];

  paginatedItems = [];
  page = 1;
  itemsPerPage = 2;
  totalPages = 1;

  ngOnInit() {
    this.updatePagination();
  }

  addItem() {
    this.items.push({ ingredient: '', composition: '' });
    this.updatePagination();
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.page = page;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
    const start = (this.page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedItems = this.items.slice(start, end);
  }
}
