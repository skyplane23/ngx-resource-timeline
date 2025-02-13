import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Item, Section} from './ngx-resource-timeline.model';

@Injectable({
  providedIn: 'root'
})
export class NgxResourceTimelineService {

  public item = new Subject<Item>();
  public itemAdd = new Subject<Item>();
  public itemId = new Subject<number>();
  public sectionAdd = new Subject<Section>();
  public section = new Subject<Section>();
  public sectionId = new Subject<number>();
  public refreshView = new Subject();

  constructor() {
  }

  public itemPush(item: Item): void {
    this.itemAdd.next(item);
  }

  public itemPop(): void {
    this.item.next(null);
  }

  public itemRemove(id: number): void {
    this.itemId.next(id);
  }

  public sectionPush(section: Section): void {
    this.sectionAdd.next(section);
  }

  public sectionPop(): void {
    this.section.next(null);
  }

  public sectionRemove(id: number): void {
    this.sectionId.next(id);
  }

  public refresh(): void {
    this.refreshView.next(null);
  }

}
