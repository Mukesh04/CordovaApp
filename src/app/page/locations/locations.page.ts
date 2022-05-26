import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation, GeolocationOptions, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  acc: number;
  lat: number;
  long: number;
  changeAcc: number;
  changeLat: number;
  changelong: number;

  address: string;
  constructor(
    private router : Router,
    private geolocation: Geolocation,
    private androidPermissions: AndroidPermissions,
    private locationAccuracy : LocationAccuracy,
    private nativeGeocoder: NativeGeocoder
    ) {
    
     }
  
  ngOnInit() {
    const vm = this; 
    vm.checkGPSPermission();
  }
  goBackToHome(){
    const vm = this;
    vm.router.navigate(['home'])
  }
  getCurrentLocation(){
    const vm = this;
    const options = {
      timeout: 10000, 
      enableHighAccuracy: true, 
      maximumAge: 3600
  };
    vm.geolocation.getCurrentPosition(options).then((resp) => {
      vm.acc = resp.coords.accuracy;
      vm.lat = resp.coords.latitude;
      vm.long = resp.coords.longitude;
      vm.getAddress(vm.lat, vm.long);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = vm.geolocation.watchPosition();
     watch.subscribe((data) => {
       const vm = this;
      // data can be a set of coordinates, or an error (if an error occurred).
      // vm.changeAcc = data.coords.accuracy
      // vm.changeLat = data.coords.latitude
      // vm.changelong = data.coords.longitude
    });
  }

  // geocoder options
  nativeGeocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  // get address using coordinates
  getAddress(lat,long){
    const vm = this; 
    vm.nativeGeocoder.reverseGeocode(lat, long, vm.nativeGeocoderOptions)
    .then((res: NativeGeocoderResult[]) => {
      vm.address = vm.pretifyAddress(res[0]);
    })
    .catch((error: any) => {
      alert('Error getting location'+ JSON.stringify(error));
    });
  }
  // address
  pretifyAddress(address){
    let obj = [];
    let data = "";
    for (let key in address) {
      obj.push(address[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if(obj[val].length)
      data += obj[val]+', ';
    }
    return address.slice(0, -2);
  }

   //Check if application having GPS access permission  
  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {
          this.askToTurnOnGPS();
        } else {
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
              alert('requestPermission Error requesting location permissions ' + JSON.stringify(error));
              this.askToTurnOnGPS();
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        const vm = this;
        vm.getCurrentLocation();
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

//   async locationStatus() {
//     return new Promise((resolve, reject) => {
//        this.diagnostic.isLocationEnabled().then((isEnabled) => {
//        console.log(isEnabled);
//        if (isEnabled === false) {
//           resolve(false);
//        } else if (isEnabled === true) {
//           resolve(true);
//        }
//      })
//    .catch((e) => {
//     alert('Please turn on Location');
//    reject(false);
//    });
//   });
//  }

// async checkLocationEnabled() {
//   const vm = this;
//   return new Promise((resolve, reject) => {
//     vm.diagnostic.isLocationEnabled().then((isEnabled) => {
//        console.log(isEnabled);
//        if (isEnabled === false) {
//           alert('Please turn on Location Service');
//           resolve(false);
//        } else if (isEnabled === true) {
//           vm.checkGPSPermission().then((response) => {
//           console.log(response, 'checkGPSPermission-checkLocationEnabled');
//           vm.apiResponse = response;
//           if(vm.apiResponse === false) {
//              reject(false);
//           } else {
//              resolve(vm.apiResponse);
//           }
//         })
//        .catch((e) => {
//           console.log(e, 'checkGPSPermission-checkLocationEnabled');
//           reject(false);
//      });
//    }
//  })
//   .catch((e) => {
//           alert('Please turn on Location');
//           reject(false);
//   });
// });
// }


// async checkGPSPermission() {
//   const vm = this;
//   return new Promise((resolve, reject) => {
//      vm.androidPermissions.checkPermission(vm.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
//   result => {
//     console.log(result.hasPermission);
//     if (result.hasPermission) {
//         console.log('hasPermission-YES');
//        //If having permission show 'Turn On GPS' dialogue
//        vm.askToTurnOnGPS().then((response) => {
//          console.log(response, 'askToTurnOnGPS-checkGPSPermission');
//        if (vm.apiResponse === false) {
//           reject(vm.apiResponse);
//        } else {
//           resolve(vm.apiResponse);
//        }
//      });
//    } else {
//      console.log('hasPermission-NO');
//      //If not having permission ask for permission
//      vm.requestGPSPermission().then((response) => {
//         console.log(response, 'requestGPSPermission-checkGPSPermission');
//         vm.apiResponse = response;
//         if (vm.apiResponse === false) {
//            reject(vm.apiResponse);
//         } else {
//            resolve(vm.apiResponse);
//         }
//       });
//      }
//    },
//    err => {
//      alert(err);
//      reject(false);
//    });
// });
// }

// async requestGPSPermission() {
//   const vm = this;
//   return new Promise((resolve, reject) => {
//   vm.locationAccuracy.canRequest().then((canRequest: boolean) => {
//   if (canRequest) {
//      console.log("4");
//   } else {
//    //Show 'GPS Permission Request' dialogue
//       vm.androidPermissions.requestPermission(vm.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(() => {
//    // call method to turn on GPS
//    vm.askToTurnOnGPS().then((response) => {
//       console.log(response, 'askToTurnOnGPS-requestGPSPermission');
//       vm.apiResponse = response;
//       if (vm.apiResponse === false) {
//         reject(vm.apiResponse);
//       } else {
//         resolve(vm.apiResponse);
//       }
//     });
//   },
//    error => {
//     //Show alert if user click on 'No Thanks'
//     alert('requestPermission Error requesting location permissions ' + error);
//    reject(false);
//    });
//   }
//  });
// });
// }

// async askToTurnOnGPS() {
//   const vm = this;
//   return new Promise((resolve, reject) => {
//   vm.locationAccuracy.request(vm.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then((resp) => {
//   console.log(resp, 'location accuracy');
//  // When GPS Turned ON call method to get Accurate location coordinates
//     if(resp['code'] === 0) {
//     resolve(vm.apiResponse);
//     vm.getLocationCoordinates().then((cords) => {
//       console.log(cords, 'coords');
//       vm.apiResponse = cords;
//       if(vm.apiResponse === false) {
//          reject(false);
//       } else {
//          resolve(vm.apiResponse);
//       }
//     });
//    }
//     error => {
//      alert('Error requesting location permissions');
//      reject(false);
//     }
//   });
// });
// }


// async getLocationCoordinates() {
//   const vm = this;
//   return new Promise((resolve, reject) => {
//     vm.geolocation.getCurrentPosition().then((resp) => {
//     vm.locationCoords.latitude = resp.coords.latitude;
//     vm.locationCoords.longitude = resp.coords.longitude;
//     vm.locationCoords.accuracy = resp.coords.accuracy;
//     vm.locationCoords.timestamp = resp.timestamp;
//     console.log(resp, 'get locc');
//     resolve(vm.locationCoords);
//  }).catch((error) => {
//     alert('Error getting location');
//     reject(false);
//   });
//  });
// }
}
