import {Button, Field, Image} from '@/components/common'
import {Form} from '@/components/ui/form'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'

export const LoginPage = () => {
  const form = useForm()
  const email = form.watch('email')
  const password = form.watch('password')

  const onSubmit = () => {
    alert(`Email: ${email}\nPassword: ${password}`)
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center justify-center w-full bg-blue-100 h-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="py-7 px-14 flex flex-col items-center rounded-[10px] w-[560px] bg-white h-screen shadow-card-shadow">
          <div className="mb-7 mt-10 h-[84px]">
            <Image src="/images/logo.png" alt="logo" className="w-[72px] h-[84px]" />
          </div>
          <h2 className="text-[21px] my-[10px]">Specify your login and password to enter</h2>
          <div className="w-full flex flex-col pt-[14px] pb-7 px-9">
            <Field
              type="input"
              name="email"
              control={form.control}
              rules={{required: 'Hello world'}}
              componentProps={{
                type: 'email',
                className:
                  'w-full placeholder:font-normal placeholder:text-lg placeholder:text-[#999999] h-[53px] rounded-[3px]',
                placeholder: 'Login',
              }}
            />
            <Field
              type="input"
              name="password"
              control={form.control}
              componentProps={{
                type: 'password',
                className:
                  'w-full placeholder:font-normal placeholder:text-lg placeholder:text-[#999999] h-[53px] rounded-[3px]',
                placeholder: 'Password',
                passwordValidation: true,
              }}
            />
          </div>
          <div className="w-full px-[38px] border-t pt-8 flex flex-col items-center gap-7">
            <Button theme="primary" className="w-full h-[53px] text-[18px]" htmlType="submit" onClick={onSubmit}>
              LOG IN
            </Button>
            <Link to="/restore-password" className="text-blue-600 font-semibold text-[14px]">
              Restore Password
            </Link>
          </div>
          <div className="flex items-center gap-3 pt-14">
            <a href="https://apps.apple.com/ru/app/unicraft/id1540267679" target="_blank">
              <Image src="/auth/app-store-badge.svg" alt="app-store" className="w-[105px] h-[35px]" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=org.unicraft.app" target="_blank">
              <Image src="/auth/google-play-badge.png" alt="google-play" className="w-[118px] h-[35px]" />
            </a>
            <a href="https://appgallery.huawei.com/app/C103938597" target="_blank">
              <Image src="/auth/gallery-badge.svg" alt="gallery-play" className="w-[118px] h-[35px]" />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[10px] py-[14px] text-gray-500">
          <span>uLearn</span>
          <span>v2.34.681</span>
        </div>
      </form>
    </Form>
  )
}
