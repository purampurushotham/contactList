import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import {Contact} from './contact'
import 'rxjs/add/operator/map'

@Injectable()
export class ContactService {
  constructor(private http: Http) { }

  getContacts() {
    return this.http.get('http://localhost:9000/api/contacts').map(
      res => res.json())
  }
  saveContact(newContact) {
    const headers = new Headers()
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:9000/api/addcontact', newContact, {headers: headers}).map(res => res.json())
  }
  deleteContact(contactId) {
    console.log(contactId)
    return this.http.delete('http://localhost:9000/api/contact/' + contactId).map(res => res.json())
  }
}
