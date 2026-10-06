import {getCampaigns,isActive} from './campaigns/data';
import Home, { type PublicPost } from "./home-client";

async function getPosts():Promise<PublicPost[]>{try{const response=await fetch("https://app.royalhorizonmw.com/api/public/posts",{next:{revalidate:300}});if(!response.ok)return[];const payload=await response.json() as {data?:PublicPost[]};return payload.data??[]}catch{return[]}}
export default async function Page(){const campaigns=await getCampaigns();const active=campaigns.filter(c=>isActive(c));return <Home posts={await getPosts()} campaign={active.find(c=>c.featured)??null} updates={active.filter(c=>!c.featured)}/>}
