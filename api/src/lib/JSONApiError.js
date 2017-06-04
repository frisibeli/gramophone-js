export default class JSONApiErrorResponse{
    constructor(errorObject){
        this.status = errorObject.status || 500;
        this.title = errorObject.title || "Internal server error";
        this.detail = errorObject.detail || errorObject.toString();
    }
}