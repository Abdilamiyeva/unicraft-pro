import {Layout} from './components/layouts'
import {Toaster} from './components/ui/toaster'
import {AppRouter} from './router'

export const App = () => (
  <Layout>
    <AppRouter />
    <Toaster />
  </Layout>
)
