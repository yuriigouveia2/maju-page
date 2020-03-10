import { SharedModule } from './shared.module';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModalContatoComponent } from './home/modal-contato/modal-contato.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ModalContatoComponent,

   ],
   imports: [
      BrowserModule,
      NgbModule,
      // SharedModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
     ModalContatoComponent
   ]
})
export class AppModule { }
