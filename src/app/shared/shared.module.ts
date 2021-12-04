import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHttpInterceptor } from '../Interceptors/error-http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
