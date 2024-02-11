import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

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
      this.currentPage = this.result.meta.current_page;
      this.itemsPerPage = this.result.meta.per_page;
      this.totalItems = this.result.meta.total;
    }
    get totalPages(): number {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }
    get availablePages(): number[] {
      const maxPagesToShow = 10;
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