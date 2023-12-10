import { Component,Input,Output,EventEmitter } from "@angular/core";
import { FormsModule,ReactiveFormsModule,FormGroup,FormControl,Validators,FormArray,FormBuilder } from "@angular/forms";
import { NgClass } from "@angular/common";


@Component({
    selector:'modal-info',
    standalone: true,
    imports:[FormsModule,ReactiveFormsModule,NgClass],
    templateUrl:'modal-info.component.html',
    styleUrls:['modal-info.component.css']
})
export class ModalInfo{
    @Input() ShowModal:boolean = false;
    @Output() ShowModalChange = new EventEmitter<boolean>();
    showSendedMessage = false

    inputName = ""
    inputEmail = ""

    modalForm:FormGroup;
    constructor(private formBuilder:FormBuilder){
        this.modalForm = formBuilder.group({
            "userName":["",Validators.required],
            "userEmail":["",[Validators.required,Validators.email]]
        })
    }

    close()
    {
        this.ShowModal = false
        this.ShowModalChange.emit(this.ShowModal)
    }

    submit()
    {
        this.showSendedMessage = true
        this.inputName = ""
        this.inputEmail = ""
        console.log(this.modalForm)
    }
}