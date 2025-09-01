import type { FC, ReactNode } from 'react'
import { createContext } from 'react'
import { createStoreon } from 'storeon'
import { customContext } from 'storeon/react'
import { storeonDevtools } from 'storeon/devtools'
import type { FormEvent, FormStore } from './store/form'
import { form } from './store/form'
import { env } from '~/config/env'

export const store = createStoreon<FormStore, FormEvent>([
  form,
  env.NEXT_PUBLIC_NODE_ENV !== 'production' && storeonDevtools,
])

const StoreonContext = createContext(store)

export const useStoreon = customContext(StoreonContext)

export const Context: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StoreonContext.Provider value={store}>{children}</StoreonContext.Provider>
  )
}
