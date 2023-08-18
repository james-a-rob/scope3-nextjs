import axios from 'axios';
import {NextApiRequest, NextApiResponse}from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = {
    "rows": [
      {
        "creative": {
          "format": "banner"
        },
        "impressions": 1000,
        "date": "2023-02-02",
        "country": "US",
      }
    ]
  }



    const emissionsData = await axios.post(
      "https://api.scope3.com/v1/calculate/daily?includeRows=true",
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