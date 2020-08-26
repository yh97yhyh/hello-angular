import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StopwatchComponent } from '../section/stopwatch/stopwatch.component';

@Injectable(
  { providedIn: 'root' }
)
export class PageToggleService {

  public routingCount = 0;

  constructor(
    private router: Router
  ) { }

  goPage(target) {
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
