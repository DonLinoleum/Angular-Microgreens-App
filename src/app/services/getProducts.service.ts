import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import IProduct from "../types/product";

@Injectable()
export class GetRoductsService
{
    constructor(private http:HttpClient){}
    getAllProducts(url:string)
    {
        return this.http.post<IProduct[]>( url,{});
    }
}