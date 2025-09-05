import type { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Button from '~/components/Button'
import { IctMahidolOpenHouseWordmark } from '~/components/Icons'
import { useLiff } from '~/context/liff/LIFFProvider'
import LoadingWrapper from '~/layouts/LoadingWrapper'
import Wrapper, { BG_VARIANT_TYPES } from '~/layouts/Wrapper'
import type { ApiResponseSuccess } from '~/types/api'
import { fetcher } from '~/utils'

export const getServerSideProps: GetServerSideProps = async ({ locale = 'th' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'evaluation'])),
  },
})

const Page = () => {
  const { liff, isReady } = useLiff()
  const { push } = useRouter()
  const { t } = useTranslation(['common', 'evaluation'])
  const { data, error } = useSWR<ApiResponseSuccess<{ isEvaluataed: boolean }>>(
    isReady
      ? {
        url: '/evaluations/isEvaluated',
        method: 'GET',
        token: liff.getIDToken() ? liff.getIDToken() : undefined,
      }
      : null,
    fetcher,
  )

  if (error)
    return <div>failed to load</div>

  if (!data)
    return <LoadingWrapper />

  return (
    <Wrapper variant={BG_VARIANT_TYPES.LANDING}>
      <div className="mx-auto flex min-h-screen max-w-screen-sm flex-col items-center justify-center px-8">
        <IctMahidolOpenHouseWordmark className="mb-10 w-full" />

        <div className="mb-5 rounded-xl bg-[#000000]/40 backdrop-blur-lg p-10">
          <div className="mb-6 space-y-5 text-center ">
            <div className="text-3xl font-bold">Evaluation</div>
            <div>Please select a language.</div>
          </div>

          <div className="flex w-full flex-col justify-center sm:flex-row sm:gap-6 text-2xl">
            {/* Language selection */}
            <div className="mb-5 flex justify-center gap-4">
              <Button
                label="Thai"
                className="mx-auto w-full sm:w-1/2 bg-[rgba(240,99,71,1)] border-2 border-black"
                onClick={() => push('/evaluation/general')}
                data-test="lang-th-button"
              />
              <Button
                label="English"
                className="mx-auto w-full sm:w-1/2 bg-[rgba(240,99,71,1)] border-2 border-black"
                onClick={() => push('/en/evaluation/general')}
                data-test="lang-en-button"
              />
            </div>
          </div>
        </div>



      </div>
    </Wrapper>
  )
}

export default Page
