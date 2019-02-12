import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'sanadorUrl'
})
export class sanadorUrl implements PipeTransform {

    constructor(protected sanitizer: DomSanitizer) {}

    transform(data:string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(data);
    }
}