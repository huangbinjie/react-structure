import { style } from 'typestyle'

export const WRAPPER = style({
  padding: '3px',
  border: '1px dashed #dadada',
  borderRadius: '5px',
  color: '#000',
  $nest: {
    '&:hover': {
      border: '1px dashed #64ba76',
    }
  }
})

export const EDITOR = style({
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "flex-start",
  outline: "none"
})