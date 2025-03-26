import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxComponent } from "./components/box/box.component";
import { BoxlistComponent } from "./components/boxlist/boxlist.component";

@Component({
  selector: 'app-root',
  imports: [BoxComponent, BoxlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prosveta-task';
}
