import { Context } from '@nuxt/types'
import AppData from '~/libs/app'

export interface IInjects extends Context {
  $appData: typeof AppData
}
