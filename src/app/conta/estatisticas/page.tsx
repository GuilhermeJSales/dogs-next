import { Metadata } from 'next'
import statsGet from '@/actions/stats-get'
import dynamic from 'next/dynamic'

const ContaEstatisticas = dynamic(
  () => import('@/components/conta/conta-estatisticas'),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false,
  },
)

export const metadata: Metadata = {
  title: 'Estatísticas | Minha Conta',
}

export default async function EstatisticasPage() {
  const { data } = await statsGet()
  if (!data) return null
  return (
    <section>
      <h1>Estatísticas</h1>
      <ContaEstatisticas data={data} />
    </section>
  )
}
