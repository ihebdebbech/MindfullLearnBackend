
import mongoose from 'mongoose';

const reclamationSchema = new mongoose.Schema({
    culprit: {
        type: String,
      required: true,
    },
    victim: {
        type: String,
      
    },
    type: {
        type: String,
        enum: ['obscene language', 'swear words','user reclamation'],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    decision:{
        type:String,
        default: "on review"
    }
});

const Reclamation = mongoose.model('Reclamation', reclamationSchema);

export default Reclamation;