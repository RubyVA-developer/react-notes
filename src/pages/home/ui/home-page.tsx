import { INote } from '@/types'
import { useState } from 'react'
import { LoginModalForm } from '@/components/login-modal-form'
import { NoteBlock } from '@/components/note-block'

export const HomePage = () => {
  const blocks: INote[] = [
    {
      id: '1',
      title: 'Hello Test',
      descr: 'Lorem Ipsum Dolar Sit Amet Pum Pom Pom',
      image:
        'https://img.freepik.com/free-photo/anime-style-character-space_23-2151134100.jpg?t=st=1716038466~exp=1716042066~hmac=b98d9b1d3a71e75bfac2d4a744dfb5ecf250082bcaab9f29164cf4964617aabf&w=1380',
      tags: [{ text: 'Work', colorClass: 'text-blue-700 bg-blue-200' }]
    },
    {
      id: '2',
      title: 'Hello Test 2',
      descr: 'Lorem Ipsum Dolar Sit Amet Pum Pom Pom 2',
      image:
        'https://gachax.com/anime/wp-content/uploads/sites/29/2023/06/cute-anime-girl-pfp-profile-pictures-chibi.png'
    }
  ]

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const openLoginModal = () => {
    setIsLoginModalOpen(true)
  }

  const closeLoginModal = () => {
    setIsLoginModalOpen(false)
  }

  return (
    <div className="block">
      <header className="shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="container mx-auto text-3xl">ReactNotes</div>
          <button
            onClick={openLoginModal}
            className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Button
          </button>
          <LoginModalForm isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </div>
      </header>
      <div className="container mx-auto py-6 text-lg">
        <h1>Home Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blocks.map((block) => (
            <NoteBlock key={block.id} {...block} />
          ))}
        </div>
      </div>
    </div>
  )
}
