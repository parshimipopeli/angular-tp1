import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {

  buttons: any[] = [
    {
      buttonTitle: 'yo',
      AlertMessage: 'heyyyyy'
    },
    {
      buttonTitle: 'pif',
      AlertMessage: 'paf'
    },
    {
      buttonTitle: 'lol',
      AlertMessage: 'grrr'
    },
    {
      buttonTitle: '',
      AlertMessage: ''
    },
    {
      buttonTitle: '',
      AlertMessage: ''
    },
    {
      buttonTitle: '',
      AlertMessage: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
