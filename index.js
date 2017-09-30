module.exports = {
  "rules": {
    "order/properties-order": [
      "display",
      "visibility",
      "float",
      "clear",
      
      "position",
      {
        "order": "flexible",
        "properties": [
          "top",
          "right",
          "bottom",
          "left"
        ]
      },
    
      {
        "order": "flexible",
        "properties": [
          "order",
          "flex-grow",
          "flex-shrink",
          "flex-basis",
          "flex",
          "align-self"
        ]
      },

      "z-index",
    
      {
        "order": "flexible",
        "properties": [
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height"
        ]
      },
  

      "box-sizing",
    
      {
        "order": "flexible",
        "properties": [
          "margin",
          "margin-top",
          "margin-right",
          "margin-bottom",
          "margin-left"
        ]
      },
    
      {
        "order": "flexible",
        "properties": [
          "padding",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left"
        ]
      },
    
      {
        "order": "flexible",
        "properties": [
          "border",
          "border-top",
          "border-right",
          "border-bottom",
          "border-left",
    
          "border-syle",
          "border-top-style",
          "border-right-style",
          "border-bottom-style",
          "border-left-style",
    
          "border-width",
          "border-top-width",
          "border-right-width",
          "border-bottom-width",
          "border-left-width",
    
          "border-color",
          "border-top-color",
          "border-right-color",
          "border-bottom-color",
          "border-left-color",
    
          "border-image",
          "border-image-width",
          "border-image-outset",
          "border-image-repeat",
          "border-image-source",
          "border-image-outset",
    
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-left-radius",
          "border-bottom-right-radius"
        ],
      },
    
      {
        "order": "flexible",
        "properties": [
          "outline",
          "outline-width",
          "outline-style",
          "outline-color",
          "outline-offset"
        ]
      },
      
      {
        "order": "flexible",
        "properties": [
          "overflow",
          "overflow-x",
          "overflow-y",
          "overflow-style",
        ]
      },

      {
        "order": "flexible",
        "properties": [
          "flex-direction",
          "flex-wrap",
          "flex-flow",
          "justify-content",
          "align-items",
          "align-content"
        ]
      },

      {
        "order": "flexible",
        "properties": [
          "column-count",
          "column-fill",
          "column-gap",
          "column-rule",
          "column-rule-color",
          "column-rule-style",
          "column-rule-width",
          "column-span",
          "column-width",
          "columns"
        ]
      },
    
      {
        "order": "flexible",
        "properties": [
          "list-style",
          "list-style-image",
          "list-style-position",
          "list-style-type"
        ]
      },    
    
      {
        "order": "flexible",
        "properties": [
          "border-collapse",
          "border-spacing",
          "caption-side",
          "empty-cells",
          "table-layout"
        ]
      },
    
      "line-height",
    
      {
        "order": "flexible",
        "properties": [
          "color",
          "font",
          "font-family",
          "font-size",
          "font-weight",
          "font-align",
          "font-variant"
        ]
      },
  
      {
        "order": "flexible",
        "properties": [
          "direction",
          "text-align",
          "text-index",
          "text-transform",
          "text-decoration",
          "text-overflow",
          "text-shadow",
          "text-wrap",
          "word-break",
          "word-wrap",
          "letter-spacing",
          "word-spacing",
          "white-space",
          "vertical-align",
        ]
      },
    
      {
        "order": "flexible",
        "properties": [
          "background",
          "background-position",
          "background-attachment",
          "background-clip",
          "background-origin",
          "background-size",
          "background-color",
          "background-image",
          "background-repeat",
        ]
      },
      
      "opacity",
      "cursor",
      "content",
      "quotes",
      "box-shadow",
    
      {
        "order": "flexible",
        "properties": [
          "transition",
          "transition-property",
          "transition-duration",
          "transition-timing-function",
          "transition-delay"
        ]
      }
    ]
  }
}