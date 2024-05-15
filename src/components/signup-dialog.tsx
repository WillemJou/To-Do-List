import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { SignupCard } from './signup-card'

export function SignUpDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Sign Up</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <SignupCard />
      </DialogContent>
    </Dialog>
  )
}
