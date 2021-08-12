import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from '../../shared/models/Subscription';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  faSearch = faSearch;
  searchCriteria: string;
  @Input() isDisabled: boolean;
  @Input() errorMessage: string;
  @Output() onGetCustomerInfo: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.onGetCustomerInfo.emit(this.searchCriteria);
  }
}
