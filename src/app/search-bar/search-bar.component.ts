import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() dataSubmited = new EventEmitter<string>();

  searchTerm = '';

  onInput(target: EventTarget) {
    this.searchTerm = (<HTMLInputElement>target).value;
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    this.dataSubmited.emit(this.searchTerm);
   
  }
}
