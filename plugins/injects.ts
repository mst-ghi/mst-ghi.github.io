import { ICtx } from '~/interfaces'
import AppData from '~/libs/app'
import StacksData from '~/libs/stacks'
import WorksData from '~/libs/works'
import ProjectsData from '~/libs/projects'
import OpenSourceProjectsData from '~/libs/open-source-projects'
import PinnedRepoData from '~/libs/pinned-repo'

export default function injects(_: ICtx, inject: Function) {
  inject('appData', AppData)
  inject('stacksData', StacksData)
  inject('worksData', WorksData)
  inject('projectsData', ProjectsData)
  inject('openSourceProjectsData', OpenSourceProjectsData)
  inject('pinnedRepoData', PinnedRepoData)
}
