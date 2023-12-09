import { Input,Component } from "@angular/core";

@Component({
    selector: 'product',
    standalone:true,
    templateUrl:'./product.component.html',
    styleUrl:"./product.component.css"
})
export class Product{
    @Input() name:string = ""
    @Input() preview_image:string = ""
    @Input() price:number = 0
    @Input() description:string = ""
}