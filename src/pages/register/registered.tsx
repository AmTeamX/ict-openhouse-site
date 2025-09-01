import type { GetServerSideProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Button from '~/components/Button'
import { IctMahidolOpenHouseWordmark } from '~/components/Icons'
import { useLiff } from '~/context/liff/LIFFProvider'
import Wrapper, { BG_VARIANT_TYPES } from '~/layouts/Wrapper'

export const getServerSideProps: GetServerSideProps = async ({
  locale = 'th',
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'register'])),
  },
})

const Page: NextPage = () => {
  const { liff } = useLiff()
  const { t } = useTranslation(['common', 'register'])

  return (
    <Wrapper variant={BG_VARIANT_TYPES.LANDING}>
      <div className="mx-auto flex min-h-screen max-w-screen-sm flex-col items-center justify-center px-8">
        <IctMahidolOpenHouseWordmark className="mb-20 w-full" />

        <div className="p-4 pt-8 bg-[#4B9D4D]/80 backdrop-blur-sm rounded-3xl">
          <div className="mb-6 space-y-4 text-center font-heading text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <div className="text-5xl font-bold">
            {t('REGISTERED.REG_EXISTED_TITLE', { ns: 'register' })}
          </div>
          <div className="text-2xl">
            {t('REGISTERED.REG_EXISTED_SUBTITLE', { ns: 'register' })}
          </div>
        </div>
        </div>
        
        {liff.isInClient?.() && (
          <div className="mt-10 w-full text-center">
            <Button
              type="button"
              label={t('BUTTON_LABEL.CLOSE', { ns: 'common' })}
              variant="primary"
              className="w-32"
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
