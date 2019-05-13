interface Option {
  width?: number|string
  height?: number|string
  color?: string
  direction?: string
}

/**
 * CssTriangle
 * @constructor
 */
class CssTriangle {
  private option: Option = {
    'width': 100,
    'height': 100,
    'color': '#999',
    'direction': 'top'
  }

  public generate (option: Option = {}): any {
    this.option = Object.assign(this.option, option)

    return {
      'width': 0,
      'height': 0,
      'border-style': 'solid',
      'border-color': 'transparent',
      'border-width': this.getBorderWidth(),
      ...this.getBorderDirection()
    }
  }

  private getBorderWidth (): string {
    const widthHerf = Number(this.option.width) / 2
    const heightHerf = Number(this.option.height) / 2

    switch (this.option.direction) {
      case 'top':
        return `0 ${widthHerf}px ${this.option.height}px ${widthHerf}px`
      case 'bottom':
        return `${this.option.height}px ${widthHerf}px 0 ${widthHerf}px`
      case 'right':
        return `${heightHerf}px 0 ${heightHerf}px ${this.option.width}px`
      case 'left':
        return `${heightHerf}px ${this.option.width}px ${heightHerf}px 0`
      default:
        return `0 ${widthHerf}px ${this.option.height}px ${widthHerf}px`
    }
  }

  private getBorderDirection (): any {
    switch (this.option.direction) {
      case 'top':
        return { 'border-bottom-color': this.option.color }
      case 'bottom':
        return { 'border-top-color': this.option.color }
      case 'right':
        return { 'border-left-color': this.option.color }
      case 'left':
        return { 'border-right-color': this.option.color }
      default:
        return { 'border-bottom-color': this.option.color }
    }
  }
}

const cssTriangle = new CssTriangle()

export default cssTriangle

module.exports = cssTriangle
