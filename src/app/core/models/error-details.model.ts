import { HttpStatusCode } from './http-status-code.model';
import { FieldError } from './field-error.model';
/* eslint-disable @typescript-eslint/no-explicit-any*/
export class ErrorDetails {
    public title: string;
    public status?: HttpStatusCode;
    public path?: string;
    public message?: string;
    public detail?: string;
    public fieldErrors?: Array<FieldError>;
    public timestamp: Date;
    /* eslint-disable @typescript-eslint/no-explicit-any*/
    public constructor(
        title: string,
        message?: string,
        detail?: string,
        status?: HttpStatusCode,
        path?: string,
        fieldErrors?: Array<FieldError>,
    ) {
        this.title = title;
        this.status = status;
        this.path = path;
        this.message = message;
        this.detail = detail;
        this.fieldErrors = fieldErrors;
        this.timestamp = new Date();
    }
}
