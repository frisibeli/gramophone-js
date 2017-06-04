import { Schema, SchemaTypes } from 'mongoose';

const ChannelSchema = new Schema({
    name: String,
    currentSong: Number,
    currentSongTime: Number,
    playlist: [{
        SCID:Number,
        createdAt:String,
        duration:Number,
        tagList:String,
        genre:String,
        title:String,
        description:String,
        permalinkURL:String,
        artworkURL:String,
        waveformURL:String
    }]
}, {
    toJSON: {
        transform: function(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});

export default mongoose => mongoose.model('Channel', ChannelSchema);
