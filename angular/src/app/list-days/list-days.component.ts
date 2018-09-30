import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Day } from '../day';
import { SportService} from '../sport.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-list-days',
  templateUrl: './list-days.component.html',
  styleUrls: ['./list-days.component.css']
})

export class ListDaysComponent implements OnInit {

  @Input() days: Day[];

  constructor(private location: Location,
              private sportService: SportService,
              private route: ActivatedRoute) {}

  ngOnInit() {}

  getDays(): void
  {
    const name = this.route.snapshot.paramMap.get('name');
    this.sportService.getAvailableDays(name).subscribe(day => this.days = day);
  }

  getColor(statusToPractice) 
  {
    switch(statusToPractice)
    {
      case 'false': 
        return 'red';

      case 'true': 
        return 'green';
      
      default:
        return 'black';
    }
  }
}
