'use server'

import { PASSWORD_LOST } from '@/functions/api'
import apiError from '@/functions/api-error'

export async function passwordLost(
  state: { ok: boolean; error: string; data: null },
  formData: FormData,
) {
  const login = formData.get('login') as string | null
  const urlPerdeu = formData.get('url') as string | null

  try {
    if (!login) throw new Error('Preencha os dados')
    const { url } = PASSWORD_LOST()
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        url: urlPerdeu,
      }),
    })
    if (!response.ok) throw new Error('Email ou usuário não cadastrado')
    return { data: null, ok: true, error: '' }
  } catch (error) {
    return apiError(error)
  }
}
