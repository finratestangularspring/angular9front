import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AppService, NumberCombination } from '../app.component.service';

@Component({
  selector: 'app-displayresults',
  templateUrl: './displayresults.component.html',
  styleUrls: ['./displayresults.component.css']
})
export class DisplayresultsComponent implements OnInit {

  telephone: number;
  page: number;
  previousPage: boolean = false;
  nextPage: boolean = true;

  response: NumberCombination;

  constructor(private route: ActivatedRoute,
              private appService: AppService
              ) { }

  ngOnInit(): void {
    this.telephone = this.route.snapshot.params.phone;
    this.page = this.route.snapshot.params.page;

    this.appService.getNumberCombinationsPaginated(this.telephone, this.page)
        .subscribe((data: NumberCombination) => {
          this.response = data;
        });

    if (this.response.combinations.length >= 1000) {
      this.nextPage = true;
    } else {
      this.nextPage = false;
    }
  }

  previousPagee(): void {
    if (this.previousPage && this.page > 0) {
      this.appService.getNumberCombinationsPaginated(this.telephone, this.page - 1)
        .subscribe((data: NumberCombination) => {
          this.response = data;
        });

      this.page--;

      if (this.page > 0) {
        this.previousPage = true;
      } else {
        this.previousPage = false;
      }

      if (this.response.combinations.length < 1000) {
        this.nextPage = false;
      } else {
        this.nextPage = true;
      }
    }
  }

  nextPagee(): void {
    if (this.nextPage && this.page >= 0) {
      this.appService.getNumberCombinationsPaginated(this.telephone, this.page + 1)
        .subscribe((data: NumberCombination) => {
          this.response = data;
          this.page++;
        });

      this.previousPage = true;

      if (this.response.combinations.length < 1000) {
        this.nextPage = false;
      } else {
        this.nextPage = true;
      }
    }
  }

}
