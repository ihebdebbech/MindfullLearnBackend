import Reclamation from '../model/reclamation.js';
import {sendForgotPasswordEmail, sendTestEmail,sendReclamationEmail} from "../utils/emailService.js";
async function addReclamation(req, res) {
    try {
        const { culprit, type,victim } = req.body.reclamation; // Assuming reclamationData contains culprit and type

        const newReclamation = await Reclamation.create({
            culprit: culprit,
            type: type,
            victim :victim
        });
        console.log('Reclamation created:', newReclamation);
        res.status(201).json({ message: 'Reclamation created successfully', reclamation: newReclamation });
    } catch (err) {
        console.error('Error creating reclamation:', err);
        res.status(500).json({ error: err.message });
    }
}
async function getReclamationsByCulprit(req, res) {
    const culprit = req.params.culprit; // Get culpritId from request body

    if (!culprit) {
        return res.status(400).json({ error: 'Culprit ID is required in the request body' });
    }

    try {
        const reclamations = await Reclamation.find({ culprit: culprit });
        res.status(200).json({ reclamations: reclamations });
    } catch (err) {
        console.error('Error retrieving reclamations:', err);
        res.status(500).json({ error: 'Error retrieving reclamations' });
    }
}

// Function to get all reclamations
async function getAllReclamations(req, res) {
    try { 
        const allReclamations = await Reclamation.find({});
        res.status(200).json({ reclamations: allReclamations });
    } catch (err) {
        console.error('Error retrieving all reclamations:', err);
        res.status(500).json({ error: 'Error retrieving all reclamations' });
    }
}
async function updaterec(req, res)  {
    try {
        
        const {
            _id,
            decision,
         
        } = req.body;

    

        const rec = await Reclamation.findById(_id);

        if (!rec) {
            return res.status(404).json({
                statusCode: 404,
                message: "User not found",
            });
        }
     
       rec.decision = decision

        await rec.save();
       // sendReclamationEmail(email)
        return res.status(200).json({
            statusCode: 200,
            message: "User updated",
            reclamation: rec,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            statusCode: 500,
            message: "Internal server error",
        });
    }
}

export { addReclamation,getAllReclamations,getReclamationsByCulprit,updaterec };