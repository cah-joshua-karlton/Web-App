import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent  {
  
  sidenav_opened = true;
  constructor() { }

  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;

}
