import { TextType } from '../../types/widget'

export class TextEntity implements TextType {
  type = "TextWidget"
  style = {
    x: 0,
    y: 0,
    width: 128,
    height: "auto"
  }
  constructor(public id: string, public content = "双击进入文本编辑状态") {

  }
}