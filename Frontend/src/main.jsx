import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "@/components/ui/sonner"
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store from './redux/store'

const persistor = persistStore(store);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <Toaster/>
  </StrictMode>,
)
