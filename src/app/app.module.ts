import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { PanelWrapperComponent } from './panel-wrapper.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      wrappers: [
        { name: 'panel', component: PanelWrapperComponent },
      ],
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    PanelWrapperComponent,
  ],
})
export class AppModule { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */