import { Component ,OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup,FormBuilder,Validators, AbstractControl } from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {MyServiceService} from './my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // employeeForm:FormGroup;
  // emailMessage:string;
  // fileMessage:string;
  // aboutUs:string=`דגן מולטימדיה החלה את פעילותה בשנת 2008, ביבוא ושיווק של כבלי מולטימדיה ואביזרים נלווים. עם הזמן הגדלנו את מאגר הלקוחות שלנו באופן עקבי ממספר מצומצם בהתחלה לאלפי לקוחות עיסקיים קבועים, בזכות שירות יעיל, ידע מקצועי, הקפדה על איכות גבוהה של מוצרים, מלאי גדול וזמין ומגוון רחב שגדל ומתעדכן כל הזמן. בשנת 2014 הפכנו לחברה בע"מ. עיקר פעילותנו בייבוא ושיווק מגוון רחב של כבלים, ממתגים, מפצלים, מרחיקים, עיניות שליטה ואביזרים נלווים למולטימדיה, אודיו, וידאו, מחשבים ותקשורת`
  // someInfo:string=`לחברה המייבאת אביזרי תקשורת ומולטימדיה למחשבים דרוש /ה איש /אשת שיווק ומכירה לעבודה מול שוק עיסקי ופרטי.  מכירות פרונטאליות וטלפונית ללקוחות חדשים וקיימים. משרה מלאה א' עד ה' מ8:30 – 17:00`
  // constructor(private fb:FormBuilder,private cd: ChangeDetectorRef,private service:MyServiceService,private router: Router,){

  // }

  // private emailValidation={
  //   required:'חובה להוסיף כתובת מייל',
  //   email:'בבקשה הוסף כתובת אימייל תקינה'
  // }

  // private fileValidation={
  //   required:'רק פורמט docx/doc/pdf',
  // }

  // ngOnInit() {
  //   this.employeeForm=this.fb.group({
  //     firstName:['',[Validators.required,Validators.minLength(2)]],
  //     lastName:['',[Validators.required,Validators.maxLength(50)]],
  //     email:['',[Validators.required,Validators.email]],
  //     phone:['',Validators.required],
  //     file: [null, Validators.required]
  //   });

  //   const emailControl = this.employeeForm.get('email');
  //       emailControl.valueChanges.pipe(debounceTime(1000)).subscribe(value=>this.setMessage(emailControl));

  //   const filecontrole = this.employeeForm.get('file');
  //   filecontrole.valueChanges.subscribe(value=>this.setFileMessage(filecontrole));
  // }
  // setMessage(c: AbstractControl): void {
  //   this.emailMessage = '';
  //   if((c.touched||c.dirty)&&c.errors){
  //     this.emailMessage = Object.keys(c.errors).map(key =>
  //       this.emailMessage += this.emailValidation[key]).join('');
  //   }
  // }

  // setFileMessage(c: AbstractControl): void {
  //   this.fileMessage = '';
  //   if(c.errors){
  //     this.fileMessage = Object.keys(c.errors).map(key =>
  //       this.fileMessage += this.fileValidation[key]).join('');
  //   }
  // }


  // onFileChange(event) {
  //   const reader = new FileReader();
 
  //   if(event.target.files && event.target.files.length) {
  //     this.fileMessage = '';
  //     let file = event.target.files[0];
  //     if(file.type!=="application/pdf"&& file.type !== "application/msword" && file.type !=="application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
  //       console.log("NOT PDF/DOC OR DOCX");
  //       this.employeeForm.patchValue({
  //         file: null
  //      });
  //     }else{      
  //       reader.readAsDataURL(file);
  //       reader.onload = () => {
  //         this.employeeForm.patchValue({
  //           file: reader.result
  //        });
  //         this.cd.markForCheck();
  //         }

  //     }
  //   }
  // }

  // save(){
  //   this.service.sendForm(this.employeeForm.value).subscribe(res=>{
  //     console.log(res); 
  //   },err=>{
  //     console.log(err)
  //   });
  // }

}

// firstName:['',[Validators.required,Validators.minLength(2)]],
//       lastName:['',[Validators.required,Validators.maxLength(50)]],
//       email:['',[Validators.required,Validators.email]],
//       phone:['',Validators.required],
//       file: [null, Validators.required]