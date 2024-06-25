import { Component, Input, OnInit, computed } from '@angular/core';
import { MenuListInterface } from '../../../interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  @Input()menu?:MenuListInterface[];

  public menuLateral = computed( () => this.menu );

  ngOnInit(): void {

    if(!this.menu)this.menu = [];

    

  }


}
