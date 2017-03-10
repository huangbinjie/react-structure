import { cssRule } from 'typestyle'
import { setupPage, normalize } from "typestyle/lib/csx"

normalize()
setupPage('#root')

cssRule("body", {
    color: "#3d3d3d",
    fontSize: "12px"
})
cssRule(".text-center", {
    textAlign: "center!important" as any
})
cssRule(".text-left", {
    textAlign: "left!important" as any
})
cssRule(".text-right", {
    textAlign: "right!important" as any
})
cssRule(".color-primary", {
    color: "#5c9be4!important"
})