const {db} = require("../firebase.js");

//get in terms of campaigns: to be called in the shelf screen
const getAllCampaignsByUser = async (req, res) => {  
    const userId = req.params.userId;
    
    //returns data to all the userCampaigns he has
    // const allCampaignsOwned = [];
  
    try{
        const userRef = db.collection("users").doc(userId);
        const userDoc = await userRef.get();
        console.log("Early!");
        if (!userDoc.exists){
            return res.status(400).json({error:"User not found!"});
        }
        console.log(userDoc.data().owns);
        // Use Promise.all to fetch campaignDocs concurrently
        const campaignPromises = userDoc.data().owns.map(async (campaignRef) => {
          console.log(campaignRef);
            const campaignDoc = await campaignRef.get();
            if (!campaignDoc.exists) {
                return res.status(400).json({ error: "Campaign not found!" });
            }
            console.log(campaignDoc.data());
            return campaignDoc.data();
        });
  
        const campaignResults = await Promise.all(campaignPromises);
  
        return res.status(200).json({body: campaignResults});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
  }

module.exports = {
    getAllCampaignsByUser
}

//get in terms of trophies, from each userCampaign


//in a group buy, add all users to a shared campaign



//PURCHASE in a SHARED PURCHASE; give the items to all users
