import Image from 'next/image'
import type { ComponentProps } from 'react'

export type IconType = (props: ComponentProps<'svg'>) => JSX.Element

export const IctMahidolOpenHouseWordmark: IconType = (props) => {
  return (
    <Image width='400' height='400' alt='ICT Mahidol Open House 2025' src='/static/images/Logo.png'></Image>
  )
}

export const EvaluationHeaderWordmark: IconType = (props) => {
  return (
    <Image width='400' height='400' alt='ICT Mahidol Open House 2025' src='/static/images/Logo.png'></Image>
  )
}

export const AgendaHeaderWordmark: IconType = (props) => {
  return (
    <Image width='500' height='500' alt='ICT Mahidol Open House 2025' src='/static/images/Logo.png'></Image>
  )
}

export const IctMahidolOpenHouseHeader: IconType = (props) => {
  return (
    <Image width='500' height='500' alt='ICT Mahidol Open House 2025' src='/static/images/Logo.png'></Image>
  )
}

export const ThankYouHeaderWordmark: IconType = (props) => {
  return (
    <Image width='500' height='500' alt='ICT Mahidol Open House 2025' src='/static/images/Logo.png'></Image>
  )
}