import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Box } from '../../models/box';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-box',
  imports: [FlexLayoutModule],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
  @Input() box: Box = {} as Box;
  @Output() deleteBoxFunc = new EventEmitter();

  deleteBox(boxIndex: number){
    this.deleteBoxFunc.emit(boxIndex);
  } 
}
