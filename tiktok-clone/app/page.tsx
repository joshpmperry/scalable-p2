"use client"

import ClientOnly from "./Components/ClientOnly"
import PostMain from "./Components/PostMain"
import MainLayout from "./layouts/MainLayout"

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="mt-[80px] w-[calc(100%-90px)] max-w-[690px] ml-auto">
          <ClientOnly>
            <PostMain post={{
                id: '123',
                user_id: '2605',
                video_url: '/train.mp4',
                text: 'This is a text placeholder',
                created_at: 'date_here',
                profile: {
                  user_id: '2605',
                  name: 'Fake',
                  image: 'http://placehold.co/100'
                }
            }}></PostMain>
          </ClientOnly>
        </div>
      </MainLayout>
    </>
  )
}
