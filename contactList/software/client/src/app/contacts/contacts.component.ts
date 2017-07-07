import { Component, OnInit } from '@angular/core';
import { ContactService} from '../contact.service'
import { Contact } from '../contact'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact []
  contact: Contact
  firstName: String
  lastName: String
  phone: String
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts()
  }
  deleteContact(id: any) {
    console.log(id)
    this.contactService.deleteContact(id)
      .subscribe(data => {
        console.log(data)
        if (data.ok === 1) {
            this.getContacts()
        }
      })
  }
  addContact() {
      const newContact = {
        firstName : this.firstName,
        lastName : this.lastName,
        phone : this.phone
      };
      this.contactService.saveContact(newContact)
        .subscribe(contact => {
          this.getContacts()
        })
  }
  getContacts() {
    console.log("get contacts")
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts)
  }

}
