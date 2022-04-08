import { ICtx } from '~/interfaces'
import AppData from '~/libs/app'
import StacksData from '~/libs/stacks'

export default function injects(_: ICtx, inject: Function) {
  inject('appData', AppData)
  inject('stacksData', StacksData)
}
