import * as React from 'react'
import Store, { lift } from 'meng'
import Toolbar from './toolbar/toolbar'
import Stage from './stage/stage'

import { WidgetType } from '../../../types/widget'

type Props = {
  widgets: WidgetType[]
}
(window as any)["Store"] = Store

@lift({ widgets: [] as WidgetType[] })
export default class DashboardEdit extends React.Component<Props, void> {
  render() {
    return (
      <div>
        <Toolbar widgets={this.props.widgets} />
        <Stage widgets={this.props.widgets} />
      </div>
    )
  }
}