import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ErrorDetails } from '../core/models/error-details.model';

@Injectable({
    providedIn: 'root',
})
export class ErrorHttpInterceptor implements HttpInterceptor {
    /* eslint-disable @typescript-eslint/no-explicit-any*/
    public intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(
                () => {
                    // Not applicable for a error interceptor.
                },
                (error: Error) => {
                    if (error instanceof HttpErrorResponse) {
                        if (error && error.error instanceof ProgressEvent) {
                            throw new ErrorDetails(
                                'Network Error',
                                'A connection could not be established. Please contact an administrator.'
                            );
                        }
                        /* eslint-disable @typescript-eslint/no-explicit-any*/
                        if (error.error.title) {
                            alert(error.error.message);
                        }
                    }
                }
            )
        );
    }
}
