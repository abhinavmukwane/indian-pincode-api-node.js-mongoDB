const express = require('express');
const router = express.Router();
const Pincode = require('./pincode');

 // Get pincode details by sending pincode in JSON (POST method)
router.post('/pincodes/getByPincode', async (req, res) => {
  try {
    //console.log('Received pincode:', req.body.pincode);
    const pincode = await Pincode.findOne({ Pincode: parseInt(req.body.pincode, 10) });
    //console.log('Query result:', pincode);
    if (!pincode) {
      return res.status(404).json({ status: 'false', error: 'Pincode not found' });
    }
    res.status(200).json({ status: 'true', response: pincode});
  } catch (error) {
    res.status(500).json({ status: 'false', error: 'Internal server error' });
  }
});

module.exports = router;
