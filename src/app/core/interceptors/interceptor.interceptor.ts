import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, finalize, throwError } from "rxjs";
import { LoadingService } from "../services/loading.service";
import swal from 'sweetalert';
import { SharedDataService } from "../services/shared-data.service";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService, private sharedDataService: SharedDataService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {    
    this.loadingService.startLoading();
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error code: ${error.status}, message: ${error.message}`;
          console.error(errorMessage);
        }
        this.sharedDataService.setErrorMsj = errorMessage;
        return throwError(() => errorMessage);
      }),
      finalize(() => {
        this.loadingService.stopLoading();
      })
    );
  }
}