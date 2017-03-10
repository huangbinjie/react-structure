import * as React from 'react'
import * as Rnd from 'react-rnd'
import { lift } from 'meng'
import * as Style from "./text.style"
import { TextType } from '../../../../types/widget'

type Props = {
  /**当前激活挂件 */
  activeWidget: TextType | null
  /**挂件实例 */
  widget: TextType,
  onInput?: (event: React.MouseEvent<HTMLDivElement>) => void
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  onDoubleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

type State = {
  contentEditable: boolean
}

export default class TextWidget extends React.Component<Props, State>{
  public state = {
    contentEditable: false
  }
  public render() {
    const {widget, onClick = () => { }, onInput = () => { } } = this.props
    return (
      <Rnd
        className={Style.WRAPPER}
        style={{
          cursor: this.state.contentEditable ? "text" : "move",
          border: this.props.activeWidget && this.props.activeWidget.id === widget.id ? "1px dashed #64ba76" : "1px dashed #dadada"
        }}
        initial={widget.style}
        minHeight={20}
        minWidth={18}
        isResizable={{
          top: false,
          bottom: false,
          left: true,
          right: true,
          topLeft: false,
          topRight: false,
          bottomLeft: false,
          bottomRight: false
        }}
        bounds={"parent"}

        onClick={onClick}
        onDoubleClick={this.doubleClickHandle}
        >
        <div
          className={Style.EDITOR}
          contentEditable={this.props.activeWidget !== null && this.props.activeWidget.id === this.props.widget.id && this.state.contentEditable}
          dangerouslySetInnerHTML={{ __html: widget.content }}
          onInput={onInput}
          >
        </div>
      </Rnd >
    )
  }

  private doubleClickHandle = (event: React.MouseEvent<HTMLDivElement>) => {
    const {onDoubleClick = (event: React.MouseEvent<HTMLDivElement>) => { } } = this.props
    this.setState({ contentEditable: true }, () => onDoubleClick(event))
  }
}