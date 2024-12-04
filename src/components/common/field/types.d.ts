import {FormControl} from '@/components/ui/form'
import {ObjectI} from '@/types/defaults'

export interface Props {
  type: 'textarea' | 'input' | 'markdown'
  control: FormControl<any>
  name: string
  rules?: object
  componentProps?: ObjectI
}
