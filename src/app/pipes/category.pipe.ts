import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toCategory'
})
export class toCategory implements PipeTransform {

    transform(data:string) {
        let string;
        switch(data) {
            case '0': string="Sin categoria"; break;
            case '1': string="Acción"; break;
            case '2': string="Ciencia Ficción"; break;
            case '3': string="Comedia"; break;
            case '4': string="Drama"; break;
            case '5': string="Fantasía"; break;
            case '6': string="Musical"; break;
            case '7': string="Romance"; break;
            case '8': string="Suspense"; break;
            case '9': string="Terror"; break;
            case '10': string="Documental"; break;
            case '11': string="Adulto"; break;
        }
        return string;
    }
}