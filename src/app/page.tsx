'use client'
import { LoginDialog } from '@/components/loginDialog'
import { SignUpDialog } from '@/components/ui/signupDialog'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col gap-y-20 items-center p-24'>
      {/* Nettoyer les classNames avec le cn helper */}
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div className='flex flex-col gap-y-4'>
          <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            This is my To-Do-List
          </p>
          <div className='flex justify-center gap-x-6'>
            <LoginDialog />
            <SignUpDialog />
          </div>
        </div>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://github.com/WillemJou'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='flex gap-x-3'>
              <span>By Willem Jouret</span>
              <GitHubLogoIcon />
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}
