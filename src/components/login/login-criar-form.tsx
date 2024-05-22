'use client'
import { useFormState, useFormStatus } from 'react-dom'
import Button from '../forms/button'
import Input from '../forms/input'
import ErrorMessage from '../helper/error-message'
import { useEffect } from 'react'
import styles from './login-form.module.css'
import { userPost } from '@/actions/user-post'

function FormButton() {
  const { pending } = useFormStatus()
  return <Button disabled={pending}>Cadastrar</Button>
}

export default function LoginCriarForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: '',
    data: null,
  })

  useEffect(() => {
    if (state.ok) window.location.href = '/conta'
  }, [state.ok])

  return (
    <form className={styles.form} action={action}>
      <Input label="Usuário" name="username" type="text" />
      <Input label="Email" name="email" type="email" />
      <Input label="Senha" name="password" type="password" />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  )
}
