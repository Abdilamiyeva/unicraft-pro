import {Tabs as TabsUI, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {cn} from '@/utils/lib/utils'
import {Props} from './types'

export const Tabs = ({tabs, defaultValue, onChange, value}: Props) => (
  <>
    {tabs.length ? (
      <TabsUI
        onValueChange={onChange}
        value={value}
        defaultValue={defaultValue || tabs[0]?.id}
        className="w-full h-12 shadow-border"
      >
        <TabsList className={cn('px-1 w-full h-11 max-w-max data-[state=active]:bg-transparent')}>
          {tabs.map(({id, label}) => (
            <TabsTrigger
              key={id}
              value={id}
              className={cn(
                'w-full data-[state=active]:text-blue-600 p-0 px-3 data-[state=active]:border-blue-600 border-transparent border-b-2 rounded-none h-[50px] max-w-max bg-transparent data-[state=active]:bg-transparent text-black uppercase mt-1 hover:text-blue-600',
              )}
            >
              <span className={cn('font-semibold text-[12px]')}>{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map(({id, children}) => (
          <TabsContent className="mt-5 px-3" key={id} value={id}>
            {children}
          </TabsContent>
        ))}
      </TabsUI>
    ) : (
      ''
    )}
  </>
)
