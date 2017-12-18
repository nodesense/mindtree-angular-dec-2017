import { Injectable } from '@angular/core';
import { CanActivate, 
         ActivatedRouteSnapshot, 
         RouterStateSnapshot, 
         Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EditGuard implements CanActivate {

  constructor(private router: Router) {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log(state.url);

     let result: boolean = window.confirm('Do you want to edit?');

     if (!result) { //false
       this.router.navigateByUrl("/");
     }
      //false, we cannot load component
      //true, we can load component
      return result;


  }
}
