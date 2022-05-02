import { ICtx } from '~/interfaces'
import AppData from '~/libs/app'
import StacksData from '~/libs/stacks'
import WorksData from '~/libs/works'
import ProjectsData from '~/libs/projects'

export default function injects(_: ICtx, inject: Function) {
  inject('appData', AppData)
  inject('stacksData', StacksData)
  inject('worksData', WorksData)
  inject('projectsData', ProjectsData)
}
