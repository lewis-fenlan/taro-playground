"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[4116],{"4116":function(A){A.exports=JSON.parse('{"version":3,"sources":["src/components/input/index.scss?tag=taro-input-core","src/components/input/input.tsx"],"names":["indexCss","getTrueType","type","confirmType","password","Error","fixControlledValue","value","Input","this","isOnComposition","isOnPaste","onInputExcuted","handleInput","e","stopPropagation","_f","_this","maxlength","target","inputType","length","substring","onInput","emit","cursor","handlePaste","onPaste","handleFocus","onFocus","handleBlur","onBlur","handleChange","onChange","handleKeyDown","keyCode","code","onKeyDown","onConfirm","handleComposition","HTMLInputElement","handleBeforeinput","data","isNumber","test","preventDefault","indexOf","prototype","focus","inputRef","watchAutoFocus","newValue","oldValue","_a","watchValue","componentDidLoad","fileListener","addEventListener","_b","_c","_d","_e","Object","defineProperty","el","get","set","configurable","disconnectedCallback","removeEventListener","render","placeholder","autoFocus","disabled","name","nativeProps","h","assign","ref","input","class","onCompositionStart","onCompositionEnd"],"mappings":"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","sourcesContent":["taro-input-core {\\n  display: block;\\n}\\n\\ninput {\\n  display: block;\\n  overflow: hidden;\\n  height: 1.4rem;\\n  text-overflow: clip;\\n  text-align: inherit;\\n  white-space: nowrap;\\n}\\n","import { Component, h, ComponentInterface, Prop, Event, EventEmitter, Element, Watch, Method } from \'@stencil/core\'\\nimport { EventHandler, TaroEvent } from \'../../../types\'\\n\\nfunction getTrueType (type: string | undefined, confirmType: string, password: boolean) {\\n  if (confirmType === \'search\') type = \'search\'\\n  if (password) type = \'password\'\\n  if (typeof type === \'undefined\') {\\n    return \'text\';\\n  }\\n  if (!type) {\\n    throw new Error(\'unexpected type\')\\n  }\\n  if (type === \'digit\') type = \'number\'\\n\\n  return type\\n}\\n\\nfunction fixControlledValue (value?: string) {\\n  return value ?? \'\'\\n}\\n\\n@Component({\\n  tag: \'taro-input-core\',\\n  styleUrl: \'index.scss\'\\n})\\nexport class Input implements ComponentInterface {\\n  private inputRef: HTMLInputElement\\n  private isOnComposition = false\\n  private isOnPaste = false\\n  private onInputExcuted = false\\n  private fileListener: EventHandler\\n\\n  @Prop({ mutable: true }) value: string\\n  @Prop() type: string\\n  @Prop() password = false\\n  @Prop() placeholder: string\\n  @Prop() disabled = false\\n  @Prop() maxlength = 140\\n  @Prop({ attribute: \'focus\', reflect: true }) autoFocus = false\\n  @Prop() confirmType = \'done\'\\n  @Prop() name: string\\n  @Prop() nativeProps = {}\\n\\n  @Element() el: HTMLElement\\n\\n  @Method()\\n  focus() {\\n    this.inputRef.focus()\\n  }\\n\\n  @Watch(\'autoFocus\')\\n  watchAutoFocus (newValue: boolean, oldValue: boolean) {\\n    if (!oldValue && newValue) {\\n      this.inputRef?.focus()\\n    }\\n  }\\n\\n  @Watch(\'value\')\\n  watchValue (newValue: string) {\\n    const value = fixControlledValue(newValue)\\n    if (this.inputRef.value !== value) {\\n      this.inputRef.value = value\\n    }\\n  }\\n\\n  @Event({\\n    eventName: \'input\'\\n  }) onInput: EventEmitter\\n\\n  @Event({\\n    eventName: \'paste\'\\n  }) onPaste: EventEmitter\\n\\n  @Event({\\n    eventName: \'focus\'\\n  }) onFocus: EventEmitter\\n\\n  @Event({\\n    eventName: \'blur\'\\n  }) onBlur: EventEmitter\\n\\n  @Event({\\n    eventName: \'confirm\'\\n  }) onConfirm: EventEmitter\\n\\n  @Event({\\n    eventName: \'change\'\\n  }) onChange: EventEmitter\\n\\n  @Event({\\n    eventName: \'keydown\'\\n  }) onKeyDown: EventEmitter\\n\\n  componentDidLoad () {\\n    if (this.type === \'file\') {\\n      this.fileListener = () => {\\n        this.onInput.emit()\\n      }\\n      this.inputRef?.addEventListener(\'change\', this.fileListener)\\n    } else {\\n      this.inputRef?.addEventListener(\'compositionstart\', this.handleComposition)\\n      this.inputRef?.addEventListener(\'compositionend\', this.handleComposition)\\n      this.inputRef?.addEventListener(\'beforeinput\', this.handleBeforeinput)\\n      this.inputRef?.addEventListener(\'textInput\', this.handleBeforeinput)\\n    }\\n\\n    Object.defineProperty(this.el, \'value\', {\\n      get: () => this.inputRef.value,\\n      set: value => (this.value = value),\\n      configurable: true\\n    })\\n  }\\n\\n  disconnectedCallback () {\\n    if (this.type === \'file\') {\\n      this.inputRef?.removeEventListener(\'change\', this.fileListener)\\n    } else {\\n      this.inputRef?.removeEventListener(\'compositionstart\', this.handleComposition)\\n      this.inputRef?.removeEventListener(\'compositionend\', this.handleComposition)\\n      this.inputRef?.removeEventListener(\'beforeinput\', this.handleBeforeinput)\\n      this.inputRef?.removeEventListener(\'textInput\', this.handleBeforeinput)\\n    }\\n  }\\n\\n  handleInput = (e: TaroEvent<HTMLInputElement>) => {\\n    e.stopPropagation()\\n    const {\\n      type,\\n      maxlength,\\n      confirmType,\\n      password\\n    } = this\\n    if (!this.isOnComposition && !this.onInputExcuted) {\\n      let value = e.target.value\\n      const inputType = getTrueType(type, confirmType, password)\\n      this.onInputExcuted = true\\n      /* 修复 number 类型 maxlength 无效 */\\n      if (inputType === \'number\' && value && maxlength > -1 && maxlength <= value.length) {\\n        value = value.substring(0, maxlength)\\n        e.target.value = value\\n      }\\n\\n      // 修复 IOS 光标跳转问题\\n      // if (!([\'number\', \'file\'].indexOf(inputType) >= 0)) {\\n      //   const pos = e.target.selectionEnd\\n      //   setTimeout(\\n      //     () => {\\n      //       e.target.selectionStart = pos\\n      //       e.target.selectionEnd = pos\\n      //     }\\n      //   )\\n      // }\\n\\n      this.value = value\\n      this.onInput.emit({\\n        value,\\n        cursor: value.length\\n      })\\n      this.onInputExcuted = false\\n    }\\n  }\\n\\n  handlePaste = (e: TaroEvent<HTMLInputElement> & ClipboardEvent) => {\\n    e.stopPropagation()\\n    this.isOnPaste = true\\n    this.onPaste.emit({\\n      value: e.target.value\\n    })\\n  }\\n\\n  handleFocus = (e: TaroEvent<HTMLInputElement> & FocusEvent) => {\\n    e.stopPropagation()\\n    this.onInputExcuted = false\\n    this.onFocus.emit({\\n      value: e.target.value\\n    })\\n  }\\n\\n  handleBlur = (e: TaroEvent<HTMLInputElement> & FocusEvent) => {\\n    e.stopPropagation()\\n    this.onBlur.emit({\\n      value: e.target.value\\n    })\\n  }\\n\\n  handleChange = (e: TaroEvent<HTMLInputElement>) => {\\n    e.stopPropagation()\\n    this.onChange.emit({\\n      value: e.target.value\\n    })\\n\\n    if (this.isOnPaste) {\\n      this.isOnPaste = false\\n      this.value = e.target.value\\n      this.onInput.emit({\\n        value: e.target.value,\\n        cursor: e.target.value.length\\n      })\\n    }\\n  }\\n\\n  handleKeyDown = (e: TaroEvent<HTMLInputElement> & KeyboardEvent) => {\\n    e.stopPropagation()\\n    const { value } = e.target\\n    const keyCode = e.keyCode || e.code\\n    this.onInputExcuted = false\\n\\n    this.onKeyDown.emit({\\n      value,\\n      cursor: value.length,\\n      keyCode\\n    })\\n\\n    keyCode === 13 && this.onConfirm.emit({ value })\\n  }\\n\\n  handleComposition = (e: Event) => {\\n    e.stopPropagation()\\n    if (!(e.target instanceof HTMLInputElement)) return\\n\\n    if (e.type === \'compositionend\') {\\n      this.isOnComposition = false\\n      this.value = e.target.value\\n      this.onInput.emit({\\n        value: e.target.value,\\n        cursor: e.target.value.length\\n      })\\n    } else {\\n      this.isOnComposition = true\\n    }\\n  }\\n\\n  handleBeforeinput = (e) => {\\n    if (!e.data) return\\n    const isNumber = e.data && /[0-9]/.test(e.data)\\n    if (this.type === \'number\' && !isNumber) {\\n      e.preventDefault()\\n    }\\n    if (this.type === \'digit\' && !isNumber) {\\n      if (e.data !== \'.\' || (e.data === \'.\' && e.target.value.indexOf(\'.\') > -1)) {\\n        e.preventDefault()\\n      }\\n    }\\n  }\\n\\n  render () {\\n    const {\\n      value,\\n      type,\\n      password,\\n      placeholder,\\n      autoFocus,\\n      disabled,\\n      maxlength,\\n      confirmType,\\n      name,\\n      nativeProps\\n    } = this\\n\\n    return (\\n      <input\\n        ref={input => {\\n          this.inputRef = input!\\n          if (autoFocus && input) input.focus()\\n        }}\\n        class=\'weui-input\'\\n        type={getTrueType(type, confirmType, password)}\\n        placeholder={placeholder}\\n        autoFocus={autoFocus}\\n        disabled={disabled}\\n        maxlength={maxlength}\\n        name={name}\\n        onInput={this.handleInput}\\n        onFocus={this.handleFocus}\\n        onBlur={this.handleBlur}\\n        onChange={this.handleChange}\\n        onKeyDown={this.handleKeyDown}\\n        onPaste={this.handlePaste}\\n        onCompositionStart={this.handleComposition}\\n        onCompositionEnd={this.handleComposition}\\n        {...nativeProps}\\n        value={fixControlledValue(value)}\\n      />\\n    )\\n  }\\n}\\n"]}')}}]);