import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( 
    private router: Router) { }

  ngOnInit() {
  }
  
  seePickupCall(){
    const vm = this;
    vm.router.navigate(['my-pickup-calls']);
  }

  goToNewPickupCall(){
    const vm = this;
    vm.router.navigate(['pickup-call']);
  }

  getLocation(){
    const vm = this;
    vm.router.navigate(['locations']);
  }

}
