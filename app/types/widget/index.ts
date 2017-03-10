export interface BaseWidgetType {
  id: string
  type: string
  style: style
}

type style = {
  x: number
  y: number
  width: number | string
  height: number | string
}

import { TextType } from './text.type'

export type TextType = TextType
export type WidgetType = TextType
