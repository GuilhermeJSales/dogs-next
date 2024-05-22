'use client'
import { useFormState, useFormStatus } from 'react-dom'
import Button from '../forms/button'
import Input from '../forms/input'
import ErrorMessage from '../helper/error-message'
import styles from './login-form.module.css'
import { passwordReset } from '@/actions/password-reset'

function FormButton() {
  const { pending } = useFormStatus()
  return <Button disabled={pending}>Resetar Senha</Button>
}

export default function LoginResetarForm({
  keyToken,
  login,
}: {
  keyToken: string
  login: string
}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: '',
    data: null,
  })

  return (
    <form className={styles.form} action={action}>
      <Input label="Nova senha" name="password" type="password" />
      <input type="hidden" value={login} name="login" />
      <input type="hidden" value={keyToken} name="key" />
      {state.ok ? (
        <p style={{ color: '#4c1' }}>Email enviado</p>
      ) : (
        <FormButton />
      )}
      <ErrorMessage error={state.error} />
    </form>
  )
}
