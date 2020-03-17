exports.flex = [
  "align-items",
  "justify-content",
  "flex-direction",
  "align-content",
  "flex-wrap",
  "flex-flow",
]

exports.base = ["display", "position", "content"]

exports.spacing = ["padding", "margin"]

exports.position = ["top", "right", "bottom", "left"]

exports.size = [
  "height",
  "width",
  "min-height",
  "min-width",
  "max-height",
  "max-width",
]

exports.everythingButColors = [
  ...this.flex,
  ...this.base,
  ...this.position,
  ...this.spacing,
  ...this.size,
]
