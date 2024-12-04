import {FormControl, FormField, FormItem, FormMessage} from '@/components/ui/form'
import {Input, Markdown, Textarea} from '..'
import {Props} from './types'

export const Field = ({type, control, name, rules, componentProps}: Props) => (
  <FormField
    control={control}
    name={name}
    rules={rules}
    render={({field: {value, onChange}}) => (
      <FormItem className="w-full">
        <FormControl>
          {
            {
              input: <Input value={value || ''} onChange={onChange} {...componentProps} />,
              textarea: <Textarea value={value || ''} onChange={onChange} {...componentProps} />,
              markdown: <Markdown value={value || ''} onChange={onChange} {...componentProps} />,
            }[type]
          }
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
