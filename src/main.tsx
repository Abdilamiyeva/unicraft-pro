import {BrowserRouter} from 'react-router-dom'
import {I18nextProvider} from 'react-i18next'
import {createRoot} from 'react-dom/client'
import {App} from './app.tsx'

import i18n from './utils/i18n.ts'
import './styles/globals.css'
import './styles/icons.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </BrowserRouter>,
)
