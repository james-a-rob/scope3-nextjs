import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = {
    "format": req.query.format,
    "date": req.query.date,
    "impressions": parseInt(req.query.impressions),
    "country": req.query.country
  }
  console.log(data)

  try{
    const emissionsData = await axios.post(
      "https://api.scope3.com/v1/creative",
      data,
      {
        headers: {
          AccessClientId: process.env.AccessClientId,
          AccessClientSecret:
            process.env.AccessClientSecret,
        },
      }
    );
    console.log(emissionsData.data)
    res.status(200).json({ data: emissionsData.data });

  }catch(e){
    console.log(e)
  }

  res.status(500).json({message:'did not work'})


}