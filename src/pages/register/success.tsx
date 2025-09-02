import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Button from '~/components/Button'
import { useLiff } from '~/context/liff/LIFFProvider'
import { useStoreon } from '~/context/storeon'
import Wrapper, { BG_VARIANT_TYPES } from '~/layouts/Wrapper'

export const getStaticProps: GetStaticProps = async ({ locale = 'th' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'register'])),
  },
})

const Page: NextPage = () => {
  const { liff, isReady } = useLiff()
  const { push } = useRouter()
  const { t } = useTranslation('register')
  const { t: tCommon } = useTranslation('common')
  const { dispatch } = useStoreon('form')

  useEffect(() => {
    if (isReady) {
      // if (!liff.isInClient()) {
      //   setTimeout(() => {
      //     dispatch('form/register/reset')
      //     push('/register', undefined, { locale: 'th' })
      //   }, 2000)
      // }
    }
  }, [liff])

  return (
    <Wrapper variant={BG_VARIANT_TYPES.LANDING} >
      <div className='fixed x-4 w-56 top-16 left-16 hidden lg:block'>
        <img src='/static/images/Logo.png' alt='Logo Image' />
      </div>
      <div className='mx-auto p-12 x-4 w-3/4 top-16 left-16 lg:hidden '>
        <img src='/static/images/Logo.png' alt='Logo Image' />
      </div>
      <div className="mx-auto flex min-h-screen max-w-screen-md flex-col items-center px-8 sm:justify-center">

        <div className="mb-12 text-center">
          <h1 className="mb-5 font-heading text-[56px] font-bold text-[#80C53C]">
            {t('REG_FORM.REG_SUCCESS_TITLE')}
          </h1>
          <h2 className="font-heading text-[24px] text-black font-bold">
            {t('REG_FORM.REG_SUCCESS_SUBTITLE')}!
          </h2>
        </div>

        <div className="h-fit w-fit justify-center hidden lg:flex">
          <img src='/static/images/detective_duck.png' alt='Detective Duck' className='w-2/4 ' />
        </div>


        {liff.isInClient?.() && (
          <div className="mt-10 w-full text-center">
            <Button
              type="button"
              label={tCommon('BUTTON_LABEL.CLOSE')}
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
