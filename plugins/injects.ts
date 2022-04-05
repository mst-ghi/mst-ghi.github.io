import { ICtx } from '~/interfaces'
import AppData from '~/libs/app'

export default function injects(_: ICtx, inject: Function) {
  inject('appData', AppData)
}
