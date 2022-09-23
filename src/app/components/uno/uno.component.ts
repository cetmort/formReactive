import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl } from '@angular/forms';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  public formulario! : FormGroup
  
  //private formGroup : FormGroup, private formControl: FormControl
  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      name : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
    })
  }
  onSubmit(){
    console.log('hola')
    console.log(this.formulario)
    console.log(this.formulario.get("name")?.value)
    console.log(this.formulario.get("email")?.value)
    console.log(this.formulario.get("password")?.value)
  }

}
