import { ValueProvider } from './context/city'
import { HomePage } from './pages'

function App() {
  return (
    <ValueProvider>
      <HomePage/>
    </ValueProvider>
  )
}
export default App
