'use server'

import { PASSWORD_RESET } from '@/functions/api'
import apiError from '@/functions/api-error'
import { redirect } from 'next/navigation'

export async function passwordReset(
  state: { ok: boolean; error: string; data: null },
  formData: FormData,
) {
  const login = formData.get('login') as string | null
  const key = formData.get('key') as string | null
  const password = formData.get('password') as string | null

  try {
    if (!login || !key || !password) throw new Error('Preencha os dados')
    if (password.length < 6)
      throw new Error('A senha deve ter mais de 6 caracteres')
    const { url } = PASSWORD_RESET()
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    })
    if (!response.ok) throw new Error('Não autorizado')
  } catch (error) {
    return apiError(error)
  }

  redirect('/login')
}
