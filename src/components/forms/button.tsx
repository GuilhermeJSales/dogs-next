import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonType) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
