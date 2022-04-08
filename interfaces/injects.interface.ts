import { Context } from '@nuxt/types'
import AppData from '~/libs/app'
import StacksData from '~/libs/stacks'

export interface IInjects extends Context {
  $appData: typeof AppData
  $stacksData: typeof StacksData
}
