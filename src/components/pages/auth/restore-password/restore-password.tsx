import {Button, Field} from '@/components/common'
import {Form} from '@/components/ui/form'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'

export const RestorePasswordPage = () => {
  const form = useForm()
  const email = form.watch('email')

  const isEmailValid = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    return emailRegex.test(text)
  }
  const isDisabled = !isEmailValid(email)

  const onSubmit = () => {
    alert(`Email: ${email}`)
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center justify-center w-full bg-blue-100 h-screen"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center bg-white py-12 px-16 w-[504px] rounded-[10px] shadow-card-shadow">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-[35px] font-semibold">Access recovery</h2>
            <p className="text-[21px] mb-4">Enter the e-mail address</p>
          </div>
          <div className="w-full flex flex-col gap-2 pt-[14px]">
            <Field
              type="input"
              name="email"
              control={form.control}
              componentProps={{
                type: 'email',
                className:
                  'w-full placeholder:font-normal placeholder:text-lg placeholder:text-[#999999] h-[53px] rounded-[3px] placeholder:text-center',
                placeholder: 'Email',
                variant: 'yellow',
              }}
            />
            <Button theme="primary" className="h-[56px] m-0" disabled={isDisabled} onClick={onSubmit}>
              Restore
            </Button>
          </div>
          <Link to="/login" className="text-blue-600 font-semibold text-[14px] mt-7">
            Return to the login page
          </Link>
        </div>
        <div className="flex items-center gap-3 text-[10px] py-[14px] text-gray-500 fixed bottom-0">
          <span>uLearn</span>
          <span>v2.34.681</span>
        </div>
      </form>
    </Form>
  )
}
