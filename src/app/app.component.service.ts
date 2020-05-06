import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {

    private backendUrl = 'http://localhost:8080/';

    public firstPage: string = "";
    public prevPage: string = "";
    public nextPage: string = "";
    public lastPage: string = "";

    constructor(private http: HttpClient) {}

    getNumberCombinations(phoneNumber: number) {
        return this.http.get<NumberCombination>(this.backendUrl + phoneNumber);
    }

    getNumberCombinationsPaginated(phoneNumber: number, index: number) {
        return this.http.get<NumberCombination>(this.backendUrl + phoneNumber + '/' + index);
    }
}

export interface NumberCombination {

    value: number;

    combinations: number[];
}