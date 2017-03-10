declare module "react-dropdown" {
  export type Props = {
    options?: { value: string, label: string }[]
    onChange?: () => void
    value?: { value: string, label: string },
    placeholder?: string
  }
  export default class Dropdown extends React.Component<Props, any>{ }
}