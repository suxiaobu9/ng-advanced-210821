import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {



  origBodyClassName: string;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.origBodyClassName = this.document.body.className
    this.document.body.className = "dbg-gradient-primary"
  }

  doLogin(): void {
    localStorage.setItem('token', 'hi ari');
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

    this.router.navigateByUrl(!!returnUrl ? returnUrl : '')
  }

  ngOnDestroy(): void {
    this.document.body.className = this.origBodyClassName
  }

}
