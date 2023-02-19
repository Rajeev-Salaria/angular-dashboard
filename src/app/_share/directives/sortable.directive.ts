import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

export interface Country {
	id: number;
	name: string;
	flag: string;
	area: number;
	population: number;
}

export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

export const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

export interface SortEvent {
	column: SortColumn;
	direction: SortDirection;
}
@Directive({
  selector: 'th[sortable]',
  host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()',
	},
})
export class SortableDirective {
	@Input() sortable: SortColumn = '';
	@Input() direction: SortDirection = '';
	@Output() sort = new EventEmitter<SortEvent>();
  

	@HostBinding('style.color') color = 'red';

   rotate() {
		this.direction = rotate[this.direction];
		this.sort.emit({ column: this.sortable, direction: this.direction });
	}

}
