import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  searchQuery: string = '';
  images: any;
  constructor(private SearchService: SearchService) {}
  searchImages() {
    if (this.searchQuery.trim() !== '') {
      this.SearchService.getImage(this.searchQuery).subscribe((data: any) => {
        this.images = data.results;
      });
    }
  }
}
