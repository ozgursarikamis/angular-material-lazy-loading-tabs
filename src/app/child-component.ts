import {Component, Input} from '@angular/core';
import axios from "axios";

@Component({
  selector: 'child-component',
  template: 'this is {{ name }} child! <br /> <br /> {{ response | json }}'
})
export class ChildComponent {
  @Input() name = "";
  response: any;

  ngOnInit() {
    console.log(this.name, "on init");
    const name = this.name;
    switch (name) {
      case 'users':
        this.loadUsers();
        break;
      case 'albums':
        this.loadAlbums();
        break;    
      default:
        break;
    }
  }
  loadUsers() {
    axios.get("http://jsonplaceholder.typicode.com/users")
    .then(response => {
        const array = response.data;
        this.response = response.data;
        console.log('users', array);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("users finally... it's done!");
    });
  }

  loadAlbums() {
    axios.get("http://jsonplaceholder.typicode.com/albums")
    .then(response => {
        const array = response.data;    
        this.response = response.data;
        console.log('albums', array);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("albums finally... it's done!");
    });
  }

  ngOnDestroy() {
    console.log(this.name, "on destroy");
  }
}