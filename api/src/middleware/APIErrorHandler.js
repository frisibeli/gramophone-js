import JSONApiErrorResponse from '../lib/JSONApiError'
export default (err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        errors:[
            new JSONApiErrorResponse(err)
        ]
    });
    next();
}