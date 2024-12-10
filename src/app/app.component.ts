import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from "./page-list/page-list.component";
import { WikipediaService } from './wikipedia.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchBarComponent, PageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = "wikipedia-search";
  pages = [];
  constructor(private wikipediaService: WikipediaService) { }

  onDataSubmited(searchedTerm: string) {
    this.wikipediaService.search(searchedTerm).subscribe((response : any) => {
      this.pages = response.query.search;
      console.log('response: ', response);

    });
   
  }
}
