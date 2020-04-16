import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = { "id": 1, "givenName": "XXX", "familyName": "XXX", "birthDate": "2010-01-01T00:00:00", "gender": "man", "title": "Postman insert title", "salutation": "Postman insert salutation", "email": "Postman insert email", "webSite": "Postman insert website", "socialSecurityNumber": "756.7210.1079.72", "address": { "street": "Zurcherstrasse 8", "subAddressing": "Postman insert sub addressingXX", "city": "Postman insert cityXX", "state": "PostmanXX", "country": "afghanistan" }, "insurances": null };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'givenName',
      type: 'input',
      templateOptions: {
        required: true,
        type: 'text',
        label: 'First Name',
      },
    },
    {
      key: 'address',
      wrappers: ['panel'],
      templateOptions: { label: 'Address' },
      fieldGroup: [{
        key: 'city',
        type: 'input',
        templateOptions: {
          required: true,
          type: 'text',
          label: 'City',
        },
      }],
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */