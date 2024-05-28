import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
})
export class TypeaheadComponent implements OnInit, OnChanges {
  query: string = '';
  @Input() items: any[] = [];
  @Input() searchItem: string = '';
  @Input() control: FormControl = new FormControl(); // Accepting FormControl as input
  @Output() selected = new EventEmitter<any>();
  filteredItems: any[] = [];
  selectedIndex: number = -1;
  showList: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.filteredItems = this.items;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.filteredItems = this.items;
      this.onSearch(); // Optionally filter based on existing query
    }
  }

  onSearch(): void {
    if (this.query) {
      this.filteredItems = this.items.filter((item) =>
        item.name.toLowerCase().includes(this.query.toLowerCase())
      );
    } else {
      this.filteredItems = this.items;
    }
    //this.showList = this.filteredItems.length > 0;
    this.selectedIndex = -1;
  }

  selectItem(item: any): void {
    this.query = item.name;
    //this.filteredItems = this.items;
    this.selected.emit(item);
    this.showList = false;
  }

  toggleList(): void {
    this.showList = !this.showList;
  }
}
