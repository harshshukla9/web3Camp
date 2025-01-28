import Image from "next/image";
import SearchForm from "../components/SearchForm";
import StartupCard, { StartupCardType } from "../components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({searchParams} :{

  searchParams: Promise<{query?: string}>
        
}) 

{

  const query = (await searchParams).query
  const params ={search: query || null}
  
  const session = await auth();
  console.log(session?.id);


  // const posts = await client.fetch(STARTUPS_QUERY)
  const {data: posts} = await sanityFetch({query:STARTUPS_QUERY,params})
  console.log(JSON.stringify(posts,null,2))



  return (
    <>
    <section className="pink_container">
    <h1 className="heading">Never Miss a <br />Beat in the  Web3 <br /> World.</h1>
    <p className="sub-heading !max-w-3xl">Stay Ahead, Stay Connected to Web3.
    </p>
    <SearchForm query={query}/>
 

    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query? `Search results for ${query}`: "All Events"}

      </p>

      <ul className="mt-7 card_grid">
       {posts.length>0 ? (
        posts.map((post:StartupCardType,index:number) =>(
          
          <StartupCard key={post?._id} post={post}/>))):
        (
          <p className="no-result">No Match Found</p>
        )}
      </ul>
    </section>

    <SanityLive/>


    </>
   
  );
}
