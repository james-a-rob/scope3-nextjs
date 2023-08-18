import axios from 'axios';
import {NextApiRequest, NextApiResponse}from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = {
    "format": "video",
    "durationSeconds": 15,
    "date": "2023-01-01",
    "impressions": 1000,
    "country": "US"
  }



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

  }