import { Component } from '@angular/core';
import { Input } from "../input/input";
import { List } from "../list/list";

@Component({
  selector: 'app-container',
  imports: [Input, List],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {

}
