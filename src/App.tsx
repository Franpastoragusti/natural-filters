import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FilterManager } from './lib/lib/FilterManager/FilterManager'
import { MOCK_FILTERS } from './lib/constants'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <FilterManager config={MOCK_FILTERS} onFilterChanged={(e:ITextFilterOutput[])=> console.log('onFilterChanged', e)} />
      </div>
    </>
  )
}

export default App
