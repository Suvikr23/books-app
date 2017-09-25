import { Injectable } from '@angular/core';

import { Router, CanActivate } from '@angular/router';

@Injectable() 
export class AuthGuard implements CanActivate{
    someCondition : boolean = false;

    constructor(private router : Router) {}

    canActivate(){
        if(this.someCondition){
            return true;
        }

        this.router.navigate(['/login']);
        return false;
        
    }
}