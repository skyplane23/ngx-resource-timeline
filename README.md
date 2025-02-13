Below is an updated README for your newly named package, **Angular Resource Timeline**. This version gives proper credit to the original creators and clearly informs users that version **15.0.0** is compatible with Angular 15, with a compatibility table for future releases.

---

# Angular Resource Timeline

[![GitHub issues](https://img.shields.io/github/issues/skyplane23/ngx-resource-timeline.svg)](https://github.com/skyplane23/ngx-resource-timeline/issues)
[![GitHub forks](https://img.shields.io/github/forks/skyplane23/ngx-resource-timeline.svg)](https://github.com/skyplane23/ngx-resource-timeline/network)
[![GitHub stars](https://img.shields.io/github/stars/skyplane23/ngx-resource-timeline.svg)](https://github.com/skyplane23/ngx-resource-timeline/stargazers)
[![GitHub license](https://img.shields.io/github/license/skyplane23/ngx-resource-timeline.svg)](https://github.com/skyplane23/ngx-resource-timeline/blob/main/LICENSE)
[![Latest Version](https://img.shields.io/npm/v/ngx-resource-timeline/latest.svg)](https://www.npmjs.com/package/ngx-resource-timeline)
[![Downloads](https://img.shields.io/npm/dt/ngx-resource-timeline.svg)](https://www.npmjs.com/package/ngx-resource-timeline)

A simple Angular timeline scheduler library, now reimagined as **Angular Resource Timeline**.

---

## Compatibility

This release is **v15.0.0** and is compatible with **Angular 15**. Future releases will target newer Angular versions.

| Library Version | Angular Compatibility | Notes                                  |
|-----------------|-----------------------|----------------------------------------|
| **15.0.0**      | Angular 15            | Current release                        |
| Upcoming        | Angular 16 and later  | Planned releases for newer Angular versions |

---

## Installation

Install via [npm](https://npmjs.com):

```bash
npm i ngx-resource-timeline
```

> **Note:** Version **v15.0.0** is compatible with Angular **v15.0.0+**.

---

## Getting Started

### 1. Import the `NgxResourceTimelineModule`

In your app module, import the module from **ngx-resource-timeline**:

```typescript
import { NgxResourceTimelineModule } from 'ngx-resource-timeline';

@NgModule({
  imports: [
    BrowserModule,
    NgxResourceTimelineModule,
  ],
  // ... other properties
})
export class AppModule { }
```

### 2. Use the `<ngx-ts>` Component

Add the `<ngx-ts>` component in your template (e.g., `app.component.html`):

```html
<ngx-ts
  [items]="items"
  [periods]="periods"
  [sections]="sections"
  [events]="events"
  [showBusinessDayOnly]="false"
  [allowDragging]="true"
></ngx-ts>
```

### 3. Configure Your Component

Set up your component (e.g., `app.component.ts`) as follows:

```typescript
import { Component, OnInit } from '@angular/core';
import { Item, Period, Section, Events, NgxResourceTimelineService } from 'ngx-resource-timeline';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  events: Events = new Events();
  periods: Period[];
  sections: Section[];
  items: Item[];

  constructor(private service: NgxResourceTimelineService) { }

  ngOnInit() {
    this.events.SectionClickEvent = (section) => console.log('Section clicked:', section);
    this.events.ItemClicked = (item) => console.log('Item clicked:', item);
    this.events.ItemDropped = (item) => console.log('Item dropped:', item);

    this.periods = [
      {
        name: '3 days',
        timeFramePeriod: 60 * 3,
        timeFrameOverall: 60 * 24 * 3,
        timeFrameHeaders: ['Do MMM', 'HH'],
        classes: 'period-3day'
      },
      {
        name: '1 week',
        timeFrameHeaders: ['MMM YYYY', 'DD(ddd)'],
        classes: '',
        timeFrameOverall: 1440 * 7,
        timeFramePeriod: 1440,
      },
      {
        name: '2 week',
        timeFrameHeaders: ['MMM YYYY', 'DD(ddd)'],
        classes: '',
        timeFrameOverall: 1440 * 14,
        timeFramePeriod: 1440,
      }
    ];

    this.sections = [
      { name: 'A', id: 1 },
      { name: 'B', id: 2 },
      { name: 'C', id: 3 },
      { name: 'D', id: 4 },
      { name: 'E', id: 5 }
    ];

    this.items = [
      {
        id: 1,
        sectionID: 1,
        name: 'Item 1',
        start: moment().startOf('day'),
        end: moment().add(5, 'days').endOf('day'),
        classes: ''
      },
      {
        id: 2,
        sectionID: 3,
        name: 'Item 2',
        start: moment().startOf('day'),
        end: moment().add(4, 'days').endOf('day'),
        classes: ''
      },
      {
        id: 3,
        sectionID: 1,
        name: 'Item 3',
        start: moment().add(1, 'days').startOf('day'),
        end: moment().add(3, 'days').endOf('day'),
        classes: ''
      }
    ];
  }

  addItem() {
    this.service.itemPush({
      id: 4,
      sectionID: 5,
      name: 'Item 4',
      start: moment().startOf('day'),
      end: moment().add(3, 'days').endOf('day'),
      classes: ''
    });
  }

  popItem() {
    this.service.itemPop();
  }

  removeItem() {
    this.service.itemRemove(4);
  }
}
```

---

## Inputs

| Name                | Required | Type      | Default                   | Description                                                                                                                                 |
|---------------------|:--------:|-----------|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| **periods**         | Yes      | Period[]  | `null`                    | An array of `Period` objects defining the periods to display and traverse.                                                                 |
| **sections**        | Yes      | Section[] | `null`                    | An array of `Section` objects to populate the timeline.                                                                                     |
| **items**           | Yes      | Item[]    | `null`                    | An array of `Item` objects to render on the timeline.                                                                                       |
| **events**          | No       | Events    | `new Events()`            | An object containing events for user interactions.                                                                                        |
| **currentTimeFormat** | No     | string    | `'DD-MMM-YYYY HH:mm'`     | The moment.js format used for concise areas such as tooltips.                                                                              |
| **showHeaderTitle** | No       | boolean   | `true`                    | Controls the display of the header title.                                                                                                  |
| **showActionButtons** | No     | boolean   | `true`                    | Controls the display of header action buttons.                                                                                             |
| **showCurrentTime** | No       | boolean   | `true`                    | Determines if the current time is marked on the timeline.                                                                                   |
| **showGoto**        | No       | boolean   | `true`                    | Determines if the Goto button is displayed.                                                                                                |
| **showToday**       | No       | boolean   | `true`                    | Determines if the Today button is displayed.                                                                                               |
| **showBusinessDayOnly** | No   | boolean   | `false`                   | If true, only business days (Mon-Fri) are displayed.                                                                                        |
| **allowDragging**   | No       | boolean   | `false`                   | If true, items can be dragged.                                                                                                               |
| **headerFormat**    | No       | string    | `'Do MMM YYYY'`           | The moment.js format for the header's date range display.                                                                                  |
| **minRowHeight**    | No       | number    | `40`                      | The minimum height (in pixels) for a section.                                                                                              |
| **maxHeight**       | No       | number    | `null`                    | The maximum height of the timeline.                                                                                                        |
| **text**            | No       | Text      | `new Text()`              | An object for customizing textual elements in the timeline.                                                                                |
| **start**           | No       | moment    | `moment().startOf('day')` | The timeline's start time; it is recommended to use the start of the day.                                                                    |
| **locale**          | No       | string    | `(empty, defaults to 'en')` | Sets the locale for moment.js. Defaults to English (United States).                                                                         |

> **NOTE:** Date locale is not available for the Goto button datepicker; it will default to the user's system settings. Suggestions are welcome.

---

## Methods

Use these methods to dynamically manipulate items and sections:

| Name            | Parameter         | Return Type | Description                                                         |
|-----------------|-------------------|-------------|---------------------------------------------------------------------|
| **itemPush**    | `item: Item`      | `void`      | Adds a new item to the timeline.                                    |
| **itemPop**     | None              | `void`      | Removes the last item from the timeline.                            |
| **itemRemove**  | `id: number`      | `void`      | Removes the item with the specified ID.                             |
| **sectionPush** | `section: Section`| `void`      | Adds a new section to the timeline.                                 |
| **sectionPop**  | None              | `void`      | Removes the last section from the timeline.                         |
| **sectionRemove** | `id: number`    | `void`      | Removes the section with the specified ID.                          |
| **refresh**     | None              | `void`      | Refreshes/re-renders the timeline view.                             |

---

## Models

### Period

| Name                    | Type     | Required | Default | Description                                                                                                  |
|-------------------------|----------|----------|---------|--------------------------------------------------------------------------------------------------------------|
| **name**                | string   | Yes      | `null`  | The unique name for selecting this period.                                                                 |
| **classes**             | string   | Yes      | `null`  | Any CSS classes to apply to this period.                                                                     |
| **timeFramePeriod**     | number   | Yes      | `null`  | The interval (in minutes) between time frames.                                                              |
| **timeFrameOverall**    | number   | Yes      | `null`  | The total number of minutes this period covers.                                                              |
| **timeFrameHeaders**    | string[] | Yes      | `null`  | An array of [moment.js formats](https://momentjs.com/docs/#/displaying/format/) for header rows; merged if identical. |
| **timeFrameHeadersTooltip** | string[] | No  | `null`  | Formats for header tooltips.                                                                                 |
| **tooltip**             | string   | No       | `null`  | Tooltip text for the period button.                                                                          |

### Section

| Name      | Type   | Required | Default | Description                             |
|-----------|--------|----------|---------|-----------------------------------------|
| **id**    | number | Yes      | `null`  | A unique identifier for the section.    |
| **name**  | string | Yes      | `null`  | The display name for the section.       |
| **tooltip** | string | No     | `null`  | Tooltip text for the section.           |

### Item

| Name       | Type   | Required | Default | Description                                                                            |
|------------|--------|----------|---------|----------------------------------------------------------------------------------------|
| **id**     | number | Yes      | `null`  | An identifier for the item (need not be globally unique).                             |
| **name**   | string | Yes      | `null`  | The display name for the item.                                                         |
| **start**  | any    | Yes      | `null`  | A moment.js object indicating when the item starts.                                   |
| **end**    | any    | Yes      | `null`  | A moment.js object indicating when the item ends.                                     |
| **classes**| string | Yes      | `null`  | Any CSS classes to apply to the item.                                                  |
| **sectionID** | number | Yes   | `null`  | The ID of the section the item belongs to.                                             |
| **tooltip**| string | No       | `null`  | Tooltip text for the item.                                                             |

### Text

| Name          | Type   | Default     |
|---------------|--------|-------------|
| **NextButton**   | string | `'Next'`    |
| **PrevButton**   | string | `'Prev'`    |
| **TodayButton**  | string | `'Today'`   |
| **GotoButton**   | string | `'Go to'`   |
| **SectionTitle** | string | `'Section'` |
| **HeaderTitle**  | string | `null`      |

### Events

| Name                     | Parameters                                | Return Type | Description                                                                           |
|--------------------------|-------------------------------------------|-------------|---------------------------------------------------------------------------------------|
| **ItemClicked**          | `item: Item`                              | `void`      | Triggered when an item is clicked.                                                    |
| **ItemContextMenu**      | `item: Item, event: MouseEvent`           | `void`      | Triggered when an item is right-clicked (context menu).                               |
| **SectionClickEvent**    | `section: Section`                        | `void`      | Triggered when a section is clicked.                                                  |
| **SectionContextMenuEvent** | `section: Section, event: MouseEvent`    | `void`      | Triggered when a section is right-clicked (context menu).                             |
| **ItemDropped**          | `item: Item`                              | `void`      | Triggered when an item is dropped; `item` reflects its updated state.                 |
| **PeriodChange**         | `start: moment.Moment, end: moment.Moment` | `void`      | Triggered when the displayed period changes (e.g., via Next/Prev buttons).              |

> **NOTE:** To prevent the default browser context menu, call `event.preventDefault()` in your `ItemContextMenu` or `SectionContextMenuEvent` handlers.

---

## Demo

[Demo](https://github.com/skyplane23/ngx-resource-timeline-demo)  

---

## Credits

This project is based on the work originally created by **[Zallist](https://github.com/Zallist/ResourceTimeline)** and further developed by **[abhishekjain12](https://github.com/abhishekjain12/ngx-time-scheduler)**.  
**Angular Resource Timeline** updates this work to support **Angular 15**. Future releases will target newer Angular versions.

---

## License

Released under the [MIT License](http://en.m.wikipedia.org/wiki/MIT_License).

---

Enjoy using **Angular Resource Timeline**! If you find it useful, please star the repository, submit issues, or contribute.
