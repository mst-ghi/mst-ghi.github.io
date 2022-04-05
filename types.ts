/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from 'vue'
import { ICtx } from './interfaces'

declare module 'vue/types/vue' {
  interface Vue extends ICtx {}
}
