import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  type: number;
  name: string = '';

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(param => {
      this.name = param.get('name');
    })
    this.route.paramMap.subscribe(param => {
      this.type = +param.get('type');
    })
  }

}
