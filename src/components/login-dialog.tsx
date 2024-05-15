import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { LoginCard } from './login-card'

export function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Login</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <LoginCard />
      </DialogContent>
    </Dialog>
  )
}
