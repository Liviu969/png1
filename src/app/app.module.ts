import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { RTCComponent } from './rtc/rtc.component';
import { CSTComponent } from './cst/cst.component';
import { LRDComponent } from './lrd/lrd.component';
import { OTHComponent } from './oth/oth.component';
import { SNRComponent } from './snr/snr.component';
import { INCLComponent } from './incl/incl.component';
import { EXCLComponent } from './excl/excl.component';
import { RouterModule } from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import {TabMenuModule} from 'primeng/tabmenu';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';

import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    RTCComponent,
    CSTComponent,
    LRDComponent,
    OTHComponent,
    SNRComponent,
    INCLComponent,
    EXCLComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'home', component: CSTComponent},
      {path: 'cst', component: CSTComponent},
      {path: 'snr', component: SNRComponent},
      {path: 'rtc', component: RTCComponent},
      {path: 'lrd', component: LRDComponent},
      {path: 'oth', component: OTHComponent},
      {path: 'incl', component: INCLComponent},
      {path: 'excl', component: EXCLComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule,
    PanelModule,
    TabMenuModule,
    ToolbarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
