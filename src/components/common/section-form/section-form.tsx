import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {Props} from './types'
import {cn} from '@/utils/lib/utils'
import {Button, Field} from '..'
import {useForm} from 'react-hook-form'
import {Form} from '@/components/ui/form'
import {useEffect, useState} from 'react'

export const SectionForm = ({className, close, open, getForm}: Props) => {
  const form = useForm()
  const [disabled, setDisabled] = useState(false)
  const watchChange = form.watch('name')

  const onSubmit = async (formData: any) => {
    const name = formData.name?.trim()
    const description = formData.description?.trim()

    if (name) {
      getForm({name, description})
      form.reset()
    }
  }

  useEffect(() => {
    const nameValue = form.watch('name')
    setDisabled(Boolean(nameValue?.length))
  }, [form, watchChange])

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className={cn('w-full rounded-none ', className)}>
        <DialogHeader>
          <DialogTitle className="text-[20px]">Section add</DialogTitle>
          <DialogDescription className="text-[14px] text-black">
            Type a new name or a short description
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={e => {
              e.preventDefault()
              form.handleSubmit(onSubmit)
              close()
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                form.handleSubmit(onSubmit)
                close()
              }
            }}
          >
            <Field
              type="input"
              name="name"
              control={form.control}
              componentProps={{
                placeholder: 'Name',
                className: disabled ? 'text-sm  px-3.5 py-2.5' : 'border border-solid border-yellow-300 bg-[#faf4db]',
                labelClassName: 'text-gray-400',
              }}
            />
            <Field
              type="textarea"
              name="description"
              control={form.control}
              componentProps={{
                placeholder: 'description',
                className: 'text-xs p-3.5 h-10 w-full text-black',
              }}
            />
            <DialogFooter>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between mt-10 ">
                  <Button
                    disabled={!disabled}
                    theme="primary"
                    className="px-5 text-white text-sm font-semibold inline-block"
                    onClick={() => {
                      form.handleSubmit(onSubmit)()
                      close()
                    }}
                  >
                    Add
                  </Button>
                  <DialogClose asChild className="inline-block">
                    <Button className="text-sm px-5 font-semibold">Cancel</Button>
                  </DialogClose>
                </div>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
