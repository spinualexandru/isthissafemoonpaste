import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable()
export class BSCService {
  constructor(private http: HttpClient) {}
  //https://api.bscscan.com/api?module=token&action=tokeninfo&contractaddress=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&apikey=YourApiKeyToken

  baseUrl = "https://api.bscscan.com/api?module=";

  apiKey = "9CS2NVENWAZNE33FGZW345SCTZI9YPV4DM";
  getTokenDetails(address) {
    const tokenInfoUrl = `${
      this.baseUrl
    }contract&action=getsourcecode&address=${address}&apikey=${this.apiKey}`;

    console.log(`BSCService - Calling ${tokenInfoUrl}`);
    return this.http.get(tokenInfoUrl);
  }
}
