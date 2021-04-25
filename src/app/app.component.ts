import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'RENT';
  itemsM: MenuItem[];
  itemsS: MenuItem[];
  activeItem: MenuItem;
  ngOnInit(){
    this.itemsM =[
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
       {label: 'SOURCES',
        items: [
                {label: 'Recharge base', routerLink: ['/recbase']},
                {label: 'Category sites', routerLink: ['/categ']},
                {label: 'INCLUSIONS', routerLink: ['/incl']},
                {label: 'EXCLUDED', routerLink: ['/excl']},
                {separator: true},
                {label: 'SNR', routerLink: ['/snr']},
                {label: 'Telekom', routerLink: ['/cst']},
                {label: 'RTC', routerLink: ['/rtc']},
                {label: 'Others 3rd', routerLink: ['/oth']},
                {label: 'Landlord', routerLink: ['/lrd']}
        ]},
        {label: 'ACCRUAL'},
        {label: 'INVOICES'},
        {label: 'Quit',  routerLink: ['/home']}
     ];
    this.itemsS = [
        {label: 'Recharge base', routerLink: ['/recbase']},
        {label: 'Category sites', routerLink: ['/categ']},
        {label: 'INCLUSIONS', routerLink: ['/incl']},
        {label: 'EXCLUDED', routerLink: ['/excl']},
        {separator: true},
        {label: 'SNR', routerLink: ['/snr']},
        {label: 'Telekom', routerLink: ['/cst']},
        {label: 'RTC', routerLink: ['/rtc']},
        {label: 'Others 3rd', routerLink: ['/oth']},
        {label: 'Landlord', routerLink: ['/lrd']}
  ];
  }

  closeItem(event, index) {
    this.itemsS = this.itemsS.filter((item, i) => i !== index);
    event.preventDefault();
}
}
