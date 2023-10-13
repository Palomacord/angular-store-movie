import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input()
	movieCover:string=''
	@Input()
	movieLabel:string=""
	@Input()
	movieType:string="DIGITAL"
	@Input()
	moviePrice:string="$10,00"

  constructor() { }

  ngOnInit(): void {
  }

}
