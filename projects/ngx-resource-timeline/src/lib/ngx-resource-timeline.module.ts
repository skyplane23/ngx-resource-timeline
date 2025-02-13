import {NgModule} from '@angular/core';
import {NgxResourceTimelineComponent} from './ngx-resource-timeline.component';
import {CommonModule} from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [NgxResourceTimelineComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [NgxResourceTimelineComponent]
})
export class NgxResourceTimelineModule {
}
