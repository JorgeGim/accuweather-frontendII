import { Component, OnInit } from '@angular/core';
import { Sport } from '../sport';
import { Day } from '../day';
import { SportService } from '../sport.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  private sports : Sport[];
  private selectedSport: Sport;
  public days : Day[];

  constructor(private sportService: SportService) { }

  ngOnInit() 
  {
    this.getSports();
  }

  getSports(): void
  {
    this.sportService.getSports().subscribe(sports => {
      this.sports = sports;
     });
  }

  onSelect(sport: Sport): void
  {
    this.selectedSport = sport;
    this.sportService.getAvailableDays(sport.name).subscribe(days => {
      this.days = days;
    });
  }
}
