import clsx from 'clsx'
import type { ComponentProps, FC } from 'react'

interface RegistrantTypeButtonProps extends ComponentProps<'div'> {
  label: string
  icon: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const RegistrantTypeButton: FC<RegistrantTypeButtonProps> = ({
  label,
  icon,
  variant = 'primary',
  className,
  ...props
}) => {
  const variantClass
    = variant === 'primary'
      ? 'bg-type-button-overlay-primary'
      : 'bg-type-button-overlay-secondary'

  return (
    <div
      className={clsx(
        'relative flex h-fit flex-col items-center overflow-hidden rounded-xl bg-white shadow-md',
        className,
      )}
      {...props}
    >
      {icon && (
        <div
          className={clsx(
            variantClass,
            'flex h-fit w-full flex-grow items-center justify-center bg-white bg-size-double bg-center bg-no-repeat p-4 bg-blend-screen',
          )}
        >
          <img src={icon} alt={label} className="max-w-32 w-full" />
        </div>
      )}
      <div className="z-10 flex h-14 w-full flex-grow-0 items-center justify-center break-words bg-[#577D57] py-1 px-3 text-center font-bold leading-5 text-white">
        {label}
      </div>
    </div>
  )
}

export default RegistrantTypeButton
