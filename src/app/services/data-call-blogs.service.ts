import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,  } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class dataCallBlogsService
{
     
    

    constructor(private httpclient : HttpClient,
                // private httpHeaders : HttpHeaders
        ) {
            // httpOptions = {
            //     headers: new HttpHeaders({
            //     'Content-Type':  'application/json',
            //     'Authorization': '*'
            // })
            // }
        }

    
    getdata(): Observable<any> {
    return this.httpclient.get("http://localhost:9000")
    }

  
}