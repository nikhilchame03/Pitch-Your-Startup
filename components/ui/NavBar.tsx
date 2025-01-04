import { auth, signIn, signOut } from '@/auth'
import { LogOut } from 'lucide-react'
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar =async  () => {

    const session=await auth()
  return (
    <div className='px-5 pb-5 pt-3 bg-white     -sm font-work-sans   ' >

        <nav className='flex justify-between items-center'>

            <Link href={"/"} >

                <Image src="/logo.png" alt="logo" width={144} height={30} /> 
            </Link>
            <div className='flex text-xl items-center gap-5 text-black font-semibold'>

                {session && session?.user?(
                    <>

                        <Link href={"/startup/create"}>
                        <span className='max-sm:hidden'>Create</span>
                        
                        </Link>

                        <form action={async ()=>{
                            "use server";
                            await signOut({redirectTo:"/"})
                            
                            }}>
                             <button type='submit' className='text-purple-800  font-bold '> Logout</button>
                            
                        </form>

                        <Link  href={`/user/${session?.id}`} >
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                    

                ):(

                    <form action={async ()=>{
                        "use server";
                    
                        await signIn('github')}}>

                       <button type='submit'  className='text-purple-800  font-bold ' >Login</button>
                    </form>
                )}

            </div>

            
            


        </nav>
       
    </div>
  )
}

export default NavBar