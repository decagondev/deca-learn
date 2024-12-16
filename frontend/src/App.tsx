import './App.css'
import ALUModule from './components/cpu/ALUModule'
import ControlUnitModule from './components/cpu/ControlUnitModule'
import CPUFundamentalsModule from './components/cpu/CPUFundamentalsModule'
import CPURegisters from './components/cpu/CPURegisters'
import LinuxFundamentals from './components/os/LinuxFundamentals'
import OSFundamentals from './components/os/OSFundamentals'

function App() {
  return (
    <>
      <CPUFundamentalsModule />
      <CPURegisters />
      <ALUModule />
      <ControlUnitModule />
      <OSFundamentals />
      <LinuxFundamentals />
    </>
  )
}

export default App
