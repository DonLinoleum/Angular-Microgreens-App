import { Input,Component } from "@angular/core";
import { ModalInfo } from "./modal-info.component";

@Component({
    selector: 'product',
    standalone:true,
    imports:[ModalInfo],
    templateUrl:'./product.component.html',
    styleUrl:"./product.component.css"
})
export class Product{
    ShowModal = false
    @Input() name:string = ""
    @Input() preview_image:string = ""
    @Input() price:number = 0
    @Input() description:string = ""

    openModal()
    {
        this.ShowModal = true
    }
}