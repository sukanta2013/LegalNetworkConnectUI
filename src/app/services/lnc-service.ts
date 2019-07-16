import { Injectable, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { isSessionCreated } from "../common/sessionHandler";



@Injectable()
export class LncService implements OnInit {

    private _headers: Headers;
    private _options: RequestOptions;
    private _sessionObj: any;
    private _authenticationKey: string;

    constructor(
        private http: Http,
        private httpClient: HttpClient
    ) {}

    ngOnInit() {}

    GetServiceURL(url): Observable<any> {
        this._headers = new Headers(
            {
                'Content-Type': 'application/json',
            });
        this._options = new RequestOptions({ headers: this._headers });
        return this.http.get(url, this._options).map(this.extractData).catch(this.handleError);
    }

    Get(url: string, params?: URLSearchParams): Observable<any> {
        this._sessionObj = sessionStorage.getItem('UserObj');
        if (this._sessionObj != null) {
            this._authenticationKey = JSON.parse(this._sessionObj)
        }
        this._headers = new Headers(
            {
                'Content-Type': 'application/json',
                'Authorization': `basic ${this._authenticationKey}`
            });

        this._options = new RequestOptions({ headers: this._headers, params: params });

        return this.http
            .get(url, this._options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    Post(url: string, data?: any, params?: URLSearchParams) {
        this._sessionObj = sessionStorage.getItem('UserObj');
        if (this._sessionObj != null) {
            this._authenticationKey = JSON.parse(this._sessionObj)
        }
        this._headers = new Headers(
            {
                'Content-Type': 'application/json',
                'Authorization': `basic ${this._authenticationKey}`
            });


        this._options = new RequestOptions(
            {
                headers: this._headers,
                params: params
            }
        );

        return this.http.post(url, data, this._options)
            .map(this.extractData)
            .catch(this.handleError);

    }
    private extractData(res: Response) {
        const body = res.json();
        return body;
    }

    private handleError(error: any): Promise<string> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


} 