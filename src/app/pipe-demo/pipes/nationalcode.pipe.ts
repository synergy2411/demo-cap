import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'countrycode'
})
export class CountryCodePipe implements PipeTransform {
    transform(value : any, countryName : string = 'IND'){
        if(countryName == 'USA'){
            return "+001 " + value;
        }else if (countryName == 'IND'){
            return "+91 " + value;
        }else{
            return value;
        }
        
    }
}