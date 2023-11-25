import { Component,Input,Output,EventEmitter } from "@angular/core";
import { RouterLink,RouterLinkActive } from "@angular/router";

@Component({
    selector:'header',
    standalone:true,
    imports:[RouterLink,RouterLinkActive],
    templateUrl:"./header.component.html",
    styleUrls:['./header.component.css']
})
export class Header{
    headerElSrc1 = "/assets/images/header1.png"
    headerElSrc2 = "/assets/images/header2.png"
    isHeaderElSrcEqOne = true
    @Input() bgWrapper:HTMLElement|null = null
    @Input() bgClassName:string = "bgDay"
    @Output() bgClassNameChange = new EventEmitter<string>()
    changeBg(value:string){
        this.bgClassName = value
        this.bgClassNameChange.emit(value)
    }

    changeHeaderImg(el:HTMLImageElement)
    {
        el.style.opacity = "0"
        this.isHeaderElSrcEqOne = !this.isHeaderElSrcEqOne
        el.addEventListener("transitionend",(e:any)=>{
            if (!this.isHeaderElSrcEqOne)
                el.src = this.headerElSrc2
            else
                el.src = this.headerElSrc1 
            el.style.opacity = "1"
        }) 
    }
    
}