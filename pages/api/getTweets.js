// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type == 'tweet'] | order(_createdAt desc){
    _id,
    ...
  }
`;

export default async function handler(req, res) {
  const tweets = await sanityClient.fetch(query);
  res.status(200).json({ tweets });
}
