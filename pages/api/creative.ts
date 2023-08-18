import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface CreativeEmissionsResponse {
  data: CreativeEmissionsData;
}

interface CreativeEmissionsData  {
  consumerDeviceEmissions: number;
  creativeConsumerDeviceEmissions: number;
  creativeDistributionEmissions: number;
  dataTransferEmissions: number;
  totalEmissions: number;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const data = {
    "format": req.query.format,
    "date": req.query.date,
    "impressions": parseInt(req.query.impressions as string),
    "country": req.query.country
  }
  console.log(data)

  try{
    const emissionsData: CreativeEmissionsResponse = await axios.post(
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
    res.status(500).json({message:'did not work'})

  }



}