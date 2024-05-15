import { Button } from '@/components/ui/button'

interface ModalButtonProps {
  label: string
  onClick: () => void
}

const ModalButton = ({ label, onClick }: ModalButtonProps) => {
  return <Button onClick={onClick}>{label}</Button>
}

export default ModalButton
