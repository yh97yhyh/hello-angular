import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  timeString

  constructor(
    private router: Router,
    private pageToggleService: PageToggleService
  ) { 
    interval(1000)
    .pipe(map(()=> {
      return moment().format('YYYY-MM-DD HH:mm:ss')
    }))
    .subscribe(data => {
      this.timeString = data;
    })
  }

  goStopwatch() {
    this.pageToggleService.goPage('/stopwatch');
  }

  ngOnInit(): void {
  }

}
