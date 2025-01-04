import Image from "next/image";
import SearchForm from "../../components/ui/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/ui/StartupCard";

import { STARTUP_QUERIES } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({searchParams}:{
  searchParams:Promise<{query?:string}>
}) {

  const query=(await searchParams).query;
  const params={search:query || null};

  const session=await auth();

  

  const {data:posts}=await sanityFetch({query:STARTUP_QUERIES,params})

  



  return (
    <>
      <section className="pink_container">
        <div className="heading">

          pitch your startup <br />
          connect with entreprenurs 
        </div>

        <p className="sub-heading !max-w-3xl  ">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

        <SearchForm query={query}  ></SearchForm>
      </section>

      <section className="section_container">

        <p className="text-30-semibold"> 
          
          {query ? `Search results for "${query}"` : "Recomended Startups"}
        </p>

        <ul  className="mt-7 card_grid " >

          {posts?.length >0 ?(
            posts.map((post: StartupTypeCard)=>(

              <StartupCard  key={post._id} post={post} ></StartupCard>

            ))
          ):(

            <p className="no-results">No startups Found</p>
          )}

        </ul>


      </section>

      <SanityLive></SanityLive>




    </>
  );
}
