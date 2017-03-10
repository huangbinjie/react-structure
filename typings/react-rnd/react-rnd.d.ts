type initialShape = {
  x: number
  y: number
  width: number | string
  height: number | string
}

type Pointer = { left: number, right: number, top: number, bottom: number }

type IsResizable = {
  top: boolean
  right: boolean
  bottom: boolean
  left: boolean
  topRight: boolean
  bottomRight: boolean
  bottomLeft: boolean
  topLeft: boolean
}

declare type Props = {
  ref?: React.Ref<React.ReactInstance>
  initial: initialShape
  style?: React.CSSProperties
  className?: String
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
  bounds: "parent" | Pointer
  isResizable?: IsResizable

  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  onDoubleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

declare const Rnd: React.ComponentClass<Props>

declare module "react-rnd" {
  export = Rnd
}