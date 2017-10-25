import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProduitProvider {

  constructor(public http: Http) {
  }

  getAllProduct() {
      return this.http
          .get('http://api.oipnet.info/produits.json')
          .map((res: Response) => {
              return res.json();
          });

  }

}
