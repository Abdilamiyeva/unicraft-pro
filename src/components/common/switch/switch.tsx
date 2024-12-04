import {Switch as SwitchUI} from '@/components/ui/switch'
import {Props} from './type'
import {Label} from '@/components/ui/label'

export const Switch = ({checked, onCheckedChange, label, text}: Props) => (
  <Label>
    <div className="flex gap-4">
      <SwitchUI checked={checked} onCheckedChange={onCheckedChange} className="bg-primary-500" />
      <div>
        <p className="text-grey-dark-900 text-sm font-bold  mb-4">{label}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  </Label>
)
