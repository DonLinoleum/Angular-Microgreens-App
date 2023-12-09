import { Component, OnInit } from "@angular/core";
import { Product } from "../components/product.component";
import { HttpClientModule } from "@angular/common/http";
import { GetRoductsService } from "../services/getProducts.service";
import IProduct from "../types/product";

@Component({
    selector:'main-page',
    standalone:true,
    imports:[Product,HttpClientModule],
    templateUrl:'./main.component.html',
    styleUrls:['./main.component.css'],
    providers:[GetRoductsService]
})
export class MainPage implements OnInit{
    done:boolean = false
    products:IProduct[] | undefined
    url:string = "http://catosaurre.temp.swtest.ru/api/get-products"

    constructor (private getProducts:GetRoductsService){}
    ngOnInit(){
        this.getProducts.getAllProducts(this.url).subscribe({
            next:(data:IProduct[])=>
            {
                this.products = data
                this.done = true
            },
            error:error=>console.log(error)
        })
    }
}