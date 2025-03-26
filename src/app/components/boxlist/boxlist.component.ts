import { Component } from '@angular/core';
import { BoxComponent } from '../box/box.component';
import { Box } from '../../models/box';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-boxlist',
  imports: [BoxComponent, CommonModule, FlexLayoutModule],
  templateUrl: './boxlist.component.html',
  styleUrl: './boxlist.component.css'
})
export class BoxlistComponent {
  boxArr: Box[] = [];
  nextIndexNum = 1;

  addBox(){
    this.boxArr.push({title: `Title ${this.nextIndexNum}`, indexNum: this.nextIndexNum});
    this.reassignIndexes();
  }
  reassignIndexes() {
    this.boxArr = this.boxArr.map((box, index) => ({ title: `Title ${index + 1}`, indexNum: index + 1 }));
    this.nextIndexNum = this.boxArr.length + 1;
  }
  deleteBox(num: number){
    this.boxArr.splice(num-1,1);
    this.reassignIndexes();
  }
}
