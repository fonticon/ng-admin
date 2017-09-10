import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'table-header-demo',
  templateUrl: 'table-header.component.html',
  styleUrls: ['table-header.component.scss'],
})
export class TableHeaderComponent {
  @Output() shiftColumns = new EventEmitter<void>();
  @Output() toggleColorColumn = new EventEmitter<void>();
}
