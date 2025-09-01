import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Button from '~/components/Button'
import { IctMahidolOpenHouseWordmark } from '~/components/Icons'
import { useLiff } from '~/context/liff/LIFFProvider'
import { useStoreon } from '~/context/storeon'
import Wrapper, { BG_VARIANT_TYPES } from '~/layouts/Wrapper'

export const getStaticProps: GetStaticProps = async ({ locale = 'th' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'evaluation'])),
  },
})

const Page: NextPage = () => {
  const { liff, isReady } = useLiff()
  const { push } = useRouter()
  const { t } = useTranslation('evaluation')
  const { dispatch } = useStoreon('form')

  useEffect(() => {
    let t: NodeJS.Timeout
    if (isReady) {
      if (!liff.isInClient()) {
        t = setTimeout(() => {
          dispatch('form/evaluation/reset')
          push('/evaluation', undefined, { locale: 'th' })
        }, 20000000)
      }
    }
    return () => clearTimeout(t)
  }, [liff])

  return (
    <Wrapper>
      <div className="mx-auto flex min-h-screen max-w-screen-md flex-col items-center px-8 sm:justify-center">
        <IctMahidolOpenHouseWordmark className="mb-10 w-full" />

        <div className="mb-4 text-center">
          <h1 className="mb-5 font-heading text-5xl font-bold text-ict-turquoise drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {t('EVALUATION_SUCCESS.TITLE')}
          </h1>
          <h2 className="font-heading text-3xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {t('EVALUATION_SUCCESS.MESSAGE')}
          </h2>
        </div>
    <div className='flex flex-col items-center justify-center'>
      <img src="/static/images/nstar/nstar_atomic_done.svg"
          className="h-48 w-full pl-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          alt="Success"
        />
    </div>
        

        {liff.isInClient?.() && (
          <div className="mt-10 w-full text-center">
            <Button
              type="button"
              label={t('BUTTON_LABEL.CLOSE')}
              variant="ictTurquoise"
              className="w-full sm:w-32"
              onClick={() => {
                liff.closeWindow()
              }}
            />
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default Page
