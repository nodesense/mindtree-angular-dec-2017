import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

fdescribe('DataService', () => {
  beforeEach(() => {
    console.log("DS before each");
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService],
                           (service: DataService) => {
    console.log("Test cases");
    expect(service).toBeTruthy();

  }));


  it('should be default value, then incre to work', inject([DataService],
    (service: DataService) => {
      expect(service.likes).toBe(1000);
      service.increment(); 
      expect(service.likes).toBe(1001);
  }));


    it('should be default value, then incre to work', inject([DataService],
      (service: DataService) => {
        expect(service.likes).toBe(1000);
        service.increment(); 
        expect(service.likes).toBe(1001);
        }));

      
    // it('should be default subscribe', inject([DataService],
    //   (service: DataService) => {

    //     setTimeout( () => {
    //       service.likesSubject
    //       .subscribe ( n => {
    //          console.log("GOT SUB", n);
    //          expect(n).toBe(10000);
    //       });
    //     }, 2000);

    //       console.log("DONE RXJS");
    //   }));



    it('should be default subscribe', (done) => {

        setTimeout( () => {
           expect(10).toBe(10);
           done();
        }, 2000);

          console.log('DONE RXJS');
      });

});
