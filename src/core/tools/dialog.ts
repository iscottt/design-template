import { NElement, NInput, useDialog } from 'naive-ui'

export default function useDialogTools() {
  const dialog = useDialog()
  const createDialog = (type, options) => {
    const dialogInstance = dialog.error({
      ...options,
      action: () => h(NElement, {}, {
        default: () => [options.negativeText && h("button", {
          class: "nv-button mr-5",
          onClick: f => {
            options.onNegativeClick && options.onNegativeClick(f),
              dialogInstance.destroy()
          }
        }, options.negativeText || "取消"), options.positiveText && h("button", {
          class: `nv-button ${type}`,
          onClick: f => {
            options.onPositiveClick && options.onPositiveClick(f, dialogInstance.destroy),
              !options.preventDestroy && dialogInstance.destroy()
          }
        }, options.positiveText || "确定")]
      })
    });
  }
  const createPrompt = (type, options) => {
    let inputValue = ''
    const inputREF = ref()
    const dialogInstance = dialog.error({
      ...options,
      content: () => h(NElement, {}, {
        default: () => [h("div", {
          class: "mb-3"
        }, options.content), h(NInput, {
          placeholder: options.placeholder || "请输入...",
          type: options.inputType,
          ref: inputREF,
          "on-update:value": value => {
            inputValue = value
          }
          ,
          onKeyup: keyboardEvent => {
            keyboardEvent.keyCode == 13 && options.onPositiveClick && options.inputType !== "textarea" && (options.onPositiveClick(inputValue, keyboardEvent, dialogInstance.destroy),
              !options.preventDestroy && dialogInstance.destroy())
          }
        })]
      }),
      action: () => h(NElement, {}, {
        default: () => [options.negativeText && h("button", {
          class: "nv-button mr-5",
          onClick: event => {
            options.onNegativeClick && options.onNegativeClick(event)
            dialogInstance.destroy()
          }
        }, options.negativeText || "取消"), options.positiveText && h("button", {
          class: `nv-button ${type}`,
          onClick: event => {
            options.onPositiveClick && options.onPositiveClick(inputValue, event, dialogInstance.destroy)
            !options.preventDestroy && dialogInstance.destroy()
          }
        }, options.positiveText || "确定")]
      })
    });
    nextTick(() => {
      inputREF.value.focus()
    })
  }
  return {
    error: options => createDialog("error", options),
    info: options => createDialog("primary", options),
    prompt: options => createPrompt("primary", options)
  }
}
