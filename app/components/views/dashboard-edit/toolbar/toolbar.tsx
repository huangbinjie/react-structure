import * as React from 'react'
import Store from "meng"
import * as Style from './toolbar.style'
import { WidgetType } from '../../../../types/widget'
import { TextEntity } from '../../../../entity/widget'

type Props = {
  widgets: WidgetType[]
}

export default class Toolbar extends React.Component<Props, void> {
  public render() {
    return (
      <div className={Style.TOOLBAR}>
        <div className={Style.TOOL} onClick={this.toolClick("TextWidget")}>文字</div>
        <div className={Style.TOOL}>矩形</div>
        <div className={Style.TOOL}>图片</div>
      </div>
    )
  }

  private toolClick = (type: string) => (event: React.MouseEvent<HTMLDivElement>) => {
    const widgets = this.props.widgets
    widgets.push(new TextEntity(Math.random().toString()))
    Store.children["DashboardEdit"].setState({ widgets: widgets })
  }
}