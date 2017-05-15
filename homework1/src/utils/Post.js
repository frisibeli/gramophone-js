import uuid from 'uuid-js';

export default class Post{
    constructor(title="", author="", content="", imageURL="", keywords="", active=true, created=Date.now()){
        this.id = uuid.create(1).hex;
        this.title = title;
        this.author = author;
        if(typeof active === "string"){
            this.active = active == "true" ? true : false;
        }else{
            this.active = active;
        }
        this.imgURL = imageURL;
        this.keywords = keywords;
        this.content = content;
        this.created = created;
    }
}