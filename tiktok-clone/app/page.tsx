"use client"

import { useEffect } from "react"
import MainLayout from "./layouts/MainLayout"
import { usePostStore } from "@/app/stores/post"
import ClientOnly from "./Components/ClientOnly";
import PostMain from "./Components/PostMain";

export default function Home() {
  let { allPosts, setAllPosts } = usePostStore();
  useEffect(() => { setAllPosts()}, [])
  return (
    <>
      <MainLayout>
        <div className="mt-[80px]  w-[calc(100%-90px)] max-w-[690px] ml-auto">
          <ClientOnly>
            {allPosts.map((post, index) => (
              <PostMain post={post} key={index} />
            ))}
          </ClientOnly>
        </div>
      </MainLayout>
    </>
  )
}

