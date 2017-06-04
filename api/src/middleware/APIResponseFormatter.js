import url from 'url'
const JSONApiFormatter = (body, req) => {

    let objectTemplate = {
        data: body,
        links: {
            self: req.originalUrl
        },
        jsonapi:{
            version: "1.0"
        }
    }
    return objectTemplate;
}

export default (req, res, next) => {
    res.jsonApi = body => {
        let preformattedJSON = JSONApiFormatter(body, req);
        res.json(preformattedJSON);
    }
    next();
}