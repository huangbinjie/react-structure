import * as React from 'react'
import Store from 'meng'
import * as Style from './stage.style'

import { WidgetType } from '../../../../types/widget'
import { TextWidget } from '../../../common/widget'

type Props = {
  widgets: WidgetType[]
}

type State = {
  activeWidget: WidgetType | null
}

export default class Stage extends React.Component<Props, State> {
  public state = {
    activeWidget: null
  }
  public render() {

    const widgets = this.props.widgets.map(this.renderWidget)
    return (
      <div className={Style.STAGE} onClick={this.stageClick}>
        <div className={Style.STAGE_CONTAINER}>
          {widgets}
        </div>
      </div>
    )
  }

  private renderWidget = (widget: WidgetType) => {
    switch (widget.type) {
      case "TextWidget":
        return <TextWidget
          key={widget.id}
          activeWidget={this.state.activeWidget}
          widget={widget}
          onClick={this.widgetClick(widget)}
          onInput={this.textWidgetInput(widget)}
          />
    }
  }

  private stageClick = () => {
    this.setState({ activeWidget: null })
  }

  private widgetClick = (widget: WidgetType) => (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    this.setState({ activeWidget: widget })
  }

  private textWidgetInput = (textWidget: WidgetType) => (event: React.MouseEvent<HTMLDivElement>) => {
    const content = (event.target as HTMLDivElement).textContent || ""
    const widgets = this.props.widgets
    widgets.find(widget => widget.id === textWidget.id).content = content
    Store.children["DashboardEdit"].setState({ widgets: widgets })
  }
}
