export interface IModalProps {
  children: React.ReactNode
  isOpen: boolean
  closeModal: () => void
  className?: string
}

export interface IModalElementProps {
  children: React.ReactNode
  className?: string
}