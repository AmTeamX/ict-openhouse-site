import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '~/components/Button'
import CustomPopup from '~/components/CustomPopup'
import { EvaluationHeaderWordmark } from '~/components/Icons'
import { Evaluation_EN } from '~/const/evaluation/evaluationForm'
import { useStoreon } from '~/context/storeon'
import Wrapper, { BG_VARIANT_TYPES } from '~/layouts/Wrapper'
import { FormBuilder } from '~/modules/form/formBuilder'

export const generalSchema = Joi.object().keys({
  'role': Joi.string().required(),
  'channels': Joi.array().items(Joi.string()).required(),
})

export const getStaticProps: GetStaticProps = async ({ locale = 'th' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'evaluation'])),
  },
})

const Page: NextPage = () => {
  const { t } = useTranslation('evaluation')
  const { push } = useRouter()
  const { form, dispatch } = useStoreon('form')
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(generalSchema),
    defaultValues: form.evaluation,
  })
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <Wrapper variant={BG_VARIANT_TYPES.LANDING}>
      <div className="mx-auto flex min-h-screen max-w-screen-md flex-col px-8 py-10 sm:justify-center">
        <form
          onSubmit={handleSubmit(
            (data) => {
              dispatch('form/evaluation/setFields', data)
              push('/evaluation/satisfaction')
            },
            (formErrors) => {
              if (Object.keys(formErrors).length > 0) {
                setPopupOpen(true)
              }
            }
          )}
        >
          <div className="rounded-xl sm:p-16 sm:text-white bg-[#000000]/50 backdrop-blur-lg p-10">
            <div className="flex flex-col items-center justify-center">
              <EvaluationHeaderWordmark className="mb-6 text-white sm:text-white" />
            </div>
            <FormBuilder
              form={Evaluation_EN[0]}
              register={register}
              watch={watch}
              errors={errors}
              i18n={t}
            />
          </div>
          <div className="mt-10 flex justify-end">
            <Button
              type="submit"
              data-test="next-button"
              label={t('BUTTON_LABEL.NEXT')}
              variant="confirm"
              className="w-32"
            />
          </div>
        </form>
        <CustomPopup
          open={popupOpen}
          message="Please complete all required fields before confirming."
          onClose={() => setPopupOpen(false)}
        />
      </div>
    </Wrapper>
  )
}

export default Page
