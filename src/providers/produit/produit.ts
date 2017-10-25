import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ENV } from '../../../src/config/env';


@Injectable()
export class ProduitProvider {

  constructor(public http: Http) {
      console.log(ENV.API_URL)
  }

  getAllProduct() {
      return this.http
          .get(ENV.API_URL+ '/produits.json')
          .map((res: Response) => {
              return res.json();
          });

  }

}
