import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component'
import { ButtonsComponent } from './buttons/buttons.component';
import { StopwatchComponent } from './stopwatch.component'
import { RouterModule } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';



@NgModule({
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    StopwatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StopwatchComponent
  ],
  providers: [
    // PageToggleService //모듈계층에서의 porivder 제공
  ]
})
export class StopwatchModule { }
