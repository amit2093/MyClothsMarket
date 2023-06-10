import { Pipe, PipeTransform } from '@angular/core';
import * as vkbeautify from 'vkbeautify';

@Pipe({
  name: 'xmlPipe'
})
export class XmlPipePipe implements PipeTransform {

  transform(value: any): any {
    let val = null;
    if (value){
      try {
        return vkbeautify.xml(value);
      } catch (error) {
        return value;
      }
    }
  }
}


