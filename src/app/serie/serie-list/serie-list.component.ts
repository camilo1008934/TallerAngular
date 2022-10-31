import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  averageSeasons: Array<number> = []
  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;

      let average: number =0;
      series.forEach(c => {
        average=average+c.seasons;
      });
      this.averageSeasons=[average/series.length];

    });
  }

  ngOnInit() {
    this.getSeries();
  }



}
