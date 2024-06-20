import { Component, Input, OnInit, computed } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  @Input()menu?:string[];

  public menuLateral = computed( () => this.menu );

  ngOnInit(): void {

    if(!this.menu)this.menu = [];

    

  }


}
