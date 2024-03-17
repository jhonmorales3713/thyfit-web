import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
//   styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
    @Input() result;
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    @Output() pageChanged: EventEmitter<number> = new EventEmitter();
    ngOnInit() {
      this.currentPage = this.result["page"] ?? 1;
      this.itemsPerPage = this.result["limit"];
      this.totalItems = this.result["totalRows"];
    }
    get totalPages(): number {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }
    get availablePages(): number[] {
      const maxPagesToShow = 5;
      const totalPagesToShow = Math.min(this.totalPages, maxPagesToShow);
      const firstPage = Math.max(1, this.currentPage - Math.floor(maxPagesToShow / 2));
      const lastPage = Math.min(this.totalPages, firstPage + maxPagesToShow - 1);
      return Array.from({ length: totalPagesToShow }, (_, i) => firstPage + i);
    }

    changePage(page: number): void {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
          this.pageChanged.emit(page);
        }
    }
  // Other component logic goes here
}