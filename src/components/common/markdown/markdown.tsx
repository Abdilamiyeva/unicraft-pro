import React, {useRef, useEffect} from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Props} from './types'
import {cn} from '@/utils/lib/utils'

export const Markdown: React.FC<Props> = ({
  onChange,
  defaultValues,
  value,
  label,
  labelClassName,
  maxWidth,
}): JSX.Element => {
  const editorRef = useRef<any>(null)

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.render()
    }
  }, [])

  const handleEditorChange = (content: string): void => {
    if (onChange) {
      onChange(content)
    }
  }

  return (
    <div className="h-[230px]">
      <label className={cn('font-bold text-base leading-5 m-2 ml-0 relative block', labelClassName)}>{label}</label>
      <Editor
        apiKey={import.meta.env.VITE_APP_TINY_MCE_API_KEY}
        initialValue={defaultValues || ''}
        value={value}
        onEditorChange={handleEditorChange}
        init={{
          menubar: false,
          toolbar:
            'blocks | bold italic underline strikethrough subscript superscript link bullist numlist | forecolor backcolor | align | indent outdent | image blockquote table undo redo',
          toolbar_sticky: true,
          table_use_colgroups: false,
          autosave_ask_before_unload: true,
          autosave_interval: '15s',
          autosave_prefix: '{path}{query}-{id}-',
          autosave_restore_when_empty: false,
          autosave_retention: '2m',
          image_advtab: true,
          importcss_append: true,
          template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
          template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
          height: 230,
          image_caption: true,
          quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quick',
          nonedi_nonedi_class: 'mceNonEdi',
          toolbar_mode: 'sliding',
          contextmenu: 'link image imagetools ',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          resize: false,
          hideIcon: true,
          max_width: maxWidth,
        }}
      />
    </div>
  )
}
