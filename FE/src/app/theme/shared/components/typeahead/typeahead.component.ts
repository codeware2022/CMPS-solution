import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
})
export class TypeaheadComponent implements OnInit {
  query: string = '';
  @Input() items: any[] = [];
  @Input() searchItem: string = '';
  filteredItems: any[] = [];
  selectedIndex: number = -1;
  showList: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.filteredItems = this.items;
  }

  onSearch(): void {
    if (this.query) {
      this.filteredItems = this.items.filter((item) =>
        item.name.toLowerCase().includes(this.query.toLowerCase()),
      );
    } else {
      this.filteredItems = [];
    }
    this.showList = this.filteredItems.length > 0;
    this.selectedIndex = -1;
  }

  selectItem(item: any): void {
    this.query = item.name;
    this.filteredItems = [];
    this.showList = false;
  }

  toggleList(): void {
    this.showList = !this.showList;
  }
}
