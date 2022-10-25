// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

const query = groq`
*[_type == 'comment'  && references($tweet_id) ] | order(_createdAt desc){
  _id,
  comment,
 _updatedAt ,
 username,
 profileImg
 } 
`;

export default async function handler(req, res) {
  const comments = await sanityClient.fetch(query, req.query);
  res.status(200).json({ comments });
}
