import { ReactNode } from 'react'
import styles from './my-modal.module.css'

interface Props {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const MyModal = ({ children, isOpen, onClose }: Props) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <button className={styles.modalClose} onClick={onClose} type="button">
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  )
}
