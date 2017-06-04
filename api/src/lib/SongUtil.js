export default class Song{
    constructor(song){
        this.SCID = song.id;
        this.createdAt = song.created_at;
        this.duration = song.duration;
        this.tagList = song.tag_list;
        this.genre = song.genre;
        this.title = song.title,
        this.description = song.description;
        this.permalinkURL = song.permalink_url,
        this.artworkURL = song.artwork_url;
        this.waveformURL = song.waveform_url;
    }
}