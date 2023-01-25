import { Component, OnInit } from '@angular/core';
import { from, Observable, of, interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularObservables';

  // myObservable = new Observable((observer) =>{
  //   console.log('observable starts')
  //   setTimeout(() => {observer.next("1")}, 1000)
  //   setTimeout(() => {observer.next("2")}, 2000)
  //   setTimeout(() => {observer.next("3")}, 3000)
  //   setTimeout(() => {observer.error(new Error('something went wrong! try again later'))}, 3000)
  //   setTimeout(() => {observer.next("4")}, 4000)
  //   setTimeout(() => {observer.next("5")}, 5000)
  //   setTimeout(() => {observer.complete()}, 3000)
  //   // observer.next("1")
  //   // observer.next("2")
  //   // observer.next("3")
  //   // observer.next("4")
  //   // observer.next("5")
  // });

  // Using create method
//   myObservable = Observable.create((observer: {
//     complete(): unknown; next: (arg0: string) => void; error: (arg0: Error) => void; 
// }) => {
//     setTimeout(() => {observer.next("A")}, 1000)
//     setTimeout(() => {observer.next("B")}, 2000)
//     setTimeout(() => {observer.next("C")}, 3000)
//     setTimeout(() => {observer.error(new Error('something went wrong! try again later'))}, 5000)
//     setTimeout(() => {observer.next("D")}, 4000)
//     setTimeout(() => {observer.next("E")}, 5000)
//     setTimeout(() => {observer.complete()}, 3000)
//   });

  array1=[1,2,6,7,8];
  array2=['A', 'B', 'C'];

  // myObservable = of(this.array1, this.array2);

  // myObservable = from(this.array1);

  // transformdObs = this.myObservable.pipe(map((val) => {
  //   return val * 5;
  // }),filter((val) => {
  //   return val >= 30
  // }))

  // filteredObs = this.transformdObs.pipe(filter((val) => {
  //   return val >= 30
  // }))

  counterObservable = interval(1000);
  counterSub;


  ngOnInit(){
    // this.transformdObs.subscribe((val: any) => {
    //   console.log(val)
    // }, (error: { message: any; }) => {
    //   alert(error.message);
    // }, () => {
    //   alert('observable has complete emitting')
    // });
    
  }

  unsubscribe(){
    this.counterSub.unsubscribe();
  }

  subscribe(){
    this.counterObservable.subscribe((val) => {
      console.log(val);
    })
  }
}
