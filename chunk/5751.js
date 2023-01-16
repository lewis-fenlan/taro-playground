"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5751],{"5751":function(A){A.exports=JSON.parse('{"version":3,"sources":["src/utils/style.ts","src/components/picker-view/style/column.scss?tag=taro-picker-view-column-core","src/components/picker-view/picker-view-column.tsx","src/components/picker-view/style/index.scss?tag=taro-picker-view-core","src/components/picker-view/picker-view.tsx"],"names":["convertStyle","style","regex","properties","match","exec","concat","trim","columnCss","PickerViewColumn","this","handleSelected","debounce","childList","_this","el","childNodes","sum","selectedIndex","index","item","itemHeight","offsetHeight","scrollTop","scrollTo","top","behavior","onChange","emit","curIndex","col","onSelectEnd","prototype","onScroll","_event","isMove","onSelectStart","onMouseEnd","onTouchEnd","componentDidUpdate","isInit","idx","initialPosition","length","render","_b","paddingVertical","h","Host","class","padding-top","padding-bottom","indexCss","PickerView","onSelect","e","stopPropagation","target","tagName","_curIndex","detail","_selectedIndex","value","onPickStart","onPickerColEnd","onPickEnd","componentDidLoad","querySelectorAll","forEach","element","setAttribute","selectIndex","pickerHeight","getBoundingClientRect","height","indicatorHeight","_a","indicator","componentDidRender","childEle","className","removeChild","indicatorCls","classNames","indicatorClass","maskTopCls","maskClass","maskBtmCls","indicatorStyle","maskTopStyle","maskStyle","maskBottomStyle","ref"],"mappings":"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","sourcesContent":["export function convertStyle (style?: string): Record<string, string> | undefined {\\n  if (style) {\\n    const regex = /([\\\\w-]*)\\\\s*:\\\\s*([^;]*)/g\\n    const properties: Record<string, string> = {}\\n    let match\\n    while ((match = regex.exec(style))) properties[`${match[1]}`] = match[2].trim()\\n    return properties\\n  }\\n}\\n",".taro-picker-view {\\n  &-column {\\n    &-container {\\n      display: flex;\\n      overflow: scroll;\\n      overflow-x: hidden;\\n      position: relative;\\n      flex-direction: column;\\n      flex: 1;\\n      text-align: center;\\n\\n      &::-webkit-scrollbar {\\n        display: none;\\n      }\\n    }\\n  }\\n}\\n","import { Component, h, Host, Listen, Element, Event, EventEmitter, Prop, State } from \'@stencil/core\'\\n\\nimport { debounce } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-picker-view-column-core\',\\n  styleUrl: \'./style/column.scss\'\\n})\\nexport class PickerViewColumn {\\n  // 当前 ref\\n  @Element() el: HTMLElement\\n\\n  // 标记属于 picker 第几列\\n  @Prop() col: string\\n\\n  // 初始化的选中位置\\n  @Prop({ attribute: \'initial-position\' }) initialPosition = \'0\'\\n\\n  // 滑动距离上下留白区域-通过父视图和 indicator 计算而来\\n  @Prop({ attribute: \'padding-vertical\' }) paddingVertical = 0\\n\\n  @State()\\n  isInit: boolean = false\\n\\n  @State()\\n  isMove: boolean = false\\n\\n  // 选中后的结果回调\\n  @Event({ eventName: \'onselect\' }) onChange: EventEmitter\\n  @Event({ eventName: \'onselectstart\' }) onSelectStart: EventEmitter\\n  @Event({ eventName: \'onselectend\' }) onSelectEnd: EventEmitter\\n\\n  @Listen(\'scroll\')\\n  onScroll(_event: UIEvent) {\\n    if (!this.isMove) {\\n      this.isMove = true\\n      this.onSelectStart.emit()\\n    }\\n    this.handleSelected()\\n  }\\n\\n  @Listen(\'mouseup\')\\n  @Listen(\'mouseout\')\\n  @Listen(\'mouseleave\')\\n  onMouseEnd() {\\n    if (!this.isMove) return\\n    this.isMove = false\\n    this.handleSelected()\\n  }\\n\\n  @Listen(\'touchend\')\\n  onTouchEnd() {\\n    this.isMove = false\\n    this.handleSelected()\\n  }\\n\\n  componentDidUpdate() {\\n    if (!this.isInit) {\\n      this.isInit = true\\n      const childList = this.el.childNodes\\n      let idx = 0\\n      let sum = 0\\n      for (const index in childList) {\\n        const item = childList[index] as HTMLElement\\n        if (this.initialPosition === index || !item || typeof item.offsetHeight !== \'number\') {\\n          break\\n        }\\n        sum += item.offsetHeight\\n        idx++\\n      }\\n      this.el.scrollTo({ top: sum })\\n      if (idx >= childList.length) {\\n        this.onChange.emit({\\n          curIndex: this.col,\\n          selectedIndex: idx - 1\\n        })\\n      }\\n    }\\n  }\\n\\n  // 滚动结束自动回到合适的位置\\n  handleSelected = debounce(() => {\\n    const childList = this.el.childNodes\\n    let sum = 0\\n    let selectedIndex: string = \'0\'\\n    for (const index in childList) {\\n      const item = childList[index] as HTMLElement\\n      const itemHeight = item.offsetHeight\\n      if (sum + itemHeight / 2.0 > this.el.scrollTop) {\\n        selectedIndex = index\\n        break\\n      }\\n      sum += itemHeight\\n    }\\n\\n    this.el.scrollTo({\\n      top: sum,\\n      behavior: \'smooth\'\\n    })\\n    this.onChange.emit({\\n      curIndex: this.col,\\n      selectedIndex: selectedIndex\\n    })\\n    this.onSelectEnd.emit()\\n  }, 500)\\n\\n  render() {\\n    const { paddingVertical = 0 } = this\\n    return (\\n      <Host\\n        class=\\"taro-picker-view-column-container\\"\\n        style={{ \'padding-top\': `${paddingVertical}px`, \'padding-bottom\': `${paddingVertical}px` }}\\n      />\\n    )\\n  }\\n}\\n",".taro-picker-view {\\n  &-container {\\n    display: flex;\\n    position: relative;\\n  }\\n\\n  &-mask {\\n    &-container {\\n      display: flex;\\n      position: absolute;\\n      left: 0;\\n      right: 0;\\n      top: 0;\\n      bottom: 0;\\n      flex-direction: column;\\n      pointer-events: none;\\n    }\\n\\n    &-indicator {\\n      display: flex;\\n      border-top: 1px solid #ddd;\\n      border-bottom: 1px solid #ddd;\\n      height: 50px;\\n    }\\n\\n    &-top {\\n      flex: 1;\\n      background-image: linear-gradient(to bottom, rgb(255 255 255 / 95%), rgb(255 255 255 / 60%));\\n    }\\n\\n    &-bottom {\\n      flex: 1;\\n      background: linear-gradient(to top, rgb(255 255 255 / 95%), rgb(255 255 255 / 60%));\\n    }\\n  }\\n}\\n","import { Component, h, Host, Element, Prop, Event, EventEmitter, Listen } from \'@stencil/core\'\\nimport classNames from \'classnames\'\\n\\nimport { convertStyle } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-picker-view-core\',\\n  styleUrl: \'./style/index.scss\'\\n})\\nexport class PickerView {\\n  private indicator: HTMLDivElement | undefined\\n  // 当前ref\\n  @Element() el: HTMLElement\\n  // 指示标的样式\\n  @Prop() indicatorStyle: string\\n  @Prop() indicatorClass: string\\n\\n  // 初始化的数据\\n  @Prop() value: number[]\\n\\n  // 蒙层特效\\n  @Prop() maskStyle: string\\n\\n  // 蒙层特效\\n  @Prop() maskClass: string\\n\\n  // 外部回调\\n  @Event({\\n    eventName: \'change\'\\n  })\\n  onChange: EventEmitter\\n\\n  @Event({\\n    eventName: \'pickstart\'\\n  })\\n  onPickStart: EventEmitter\\n\\n  @Event({\\n    eventName: \'pickend\'\\n  })\\n  onPickEnd: EventEmitter\\n\\n  @Listen(\'onselect\')\\n  onSelect(e: CustomEvent<{ curIndex: string; selectedIndex: string }>) {\\n    e.stopPropagation()\\n    if ((e.target as Element).tagName !== \'TARO-PICKER-VIEW-COLUMN-CORE\') return\\n    let _curIndex: number = +e.detail.curIndex\\n    let _selectedIndex = +e.detail.selectedIndex\\n    this.value[_curIndex] = _selectedIndex\\n    this.onChange.emit({ value: this.value })\\n  }\\n\\n  @Listen(\'onselectstart\')\\n  onSelectStart(e: CustomEvent<{ curIndex: string; selectedIndex: string }>) {\\n    e.stopPropagation()\\n    if ((e.target as Element).tagName !== \'TARO-PICKER-VIEW-COLUMN-CORE\') return\\n    this.onPickStart.emit()\\n  }\\n\\n  @Listen(\'onselectend\')\\n  onPickerColEnd(e: CustomEvent<{ curIndex: string; selectedIndex: string }>) {\\n    e.stopPropagation()\\n    if ((e.target as Element).tagName !== \'TARO-PICKER-VIEW-COLUMN-CORE\') return\\n    this.onPickEnd.emit()\\n  }\\n\\n  componentDidLoad() {\\n    const childList = this.el.querySelectorAll(\'taro-picker-view-column-core\')\\n    childList.forEach((element, index) => {\\n      element.setAttribute(\'col\', `${index}`)\\n      let selectIndex = \'0\'\\n      if (!!this.value && this.value.length > index) {\\n        selectIndex = `${this.value[index]}`\\n      }\\n      const pickerHeight = this.el.getBoundingClientRect().height\\n      const indicatorHeight = this.indicator?.offsetHeight || 0\\n      const paddingVertical = (pickerHeight - indicatorHeight) / 2.0\\n      element.setAttribute(\'initial-position\', `${selectIndex}`)\\n      element.setAttribute(\'padding-vertical\', `${paddingVertical}`)\\n    })\\n  }\\n\\n  // 过滤非 PickerViewColumn 组件\\n  componentDidRender() {\\n    this.el.childNodes.forEach(item => {\\n      const childEle = item as HTMLElement\\n      if (\\n        \'TARO-PICKER-VIEW-COLUMN-CORE\' !== childEle.tagName &&\\n        childEle.className !== \'taro-picker-view-mask-container\'\\n      ) {\\n        this.el.removeChild(item)\\n      }\\n    })\\n  }\\n\\n  render() {\\n    const indicatorCls = classNames(\'taro-picker-view-mask-indicator\', this.indicatorClass)\\n    const maskTopCls = classNames(\'taro-picker-view-mask-top\', this.maskClass)\\n    const maskBtmCls = classNames(\'taro-picker-view-mask-bottom\', this.maskClass)\\n    const indicatorStyle = convertStyle(this.indicatorStyle)\\n    const maskTopStyle = convertStyle(this.maskStyle)\\n    const maskBottomStyle = convertStyle(this.maskStyle)\\n\\n    return (\\n      <Host class=\\"taro-picker-view-container\\">\\n        <slot />\\n        <div class=\\"taro-picker-view-mask-container\\">\\n          <div class={maskTopCls} style={maskTopStyle} />\\n          <div class={indicatorCls} style={indicatorStyle} ref={indicator => (this.indicator = indicator)} />\\n          <div class={maskBtmCls} style={maskBottomStyle} />\\n        </div>\\n      </Host>\\n    )\\n  }\\n}\\n"]}')}}]);