import { ReactElement, useState } from 'react';
import { Microchip } from 'lucide-react';

interface Register {
  name: string
  description: string
  bits: number
  types?: Array<{ name: string, details: string }>
}

const cpuRegisters: Register[] = [
  {
    name: 'General Purpose Registers',
    description: 'Used to store data temporarily while it is being processed.',
    bits: 32,
    types: [
      { name: 'Integer Registers', details: 'Used to store integer values' },
      { name: 'Floating-Point Registers', details: 'Used to store floating-point values' },
      { name: 'Pointer Registers', details: 'Used to store memory addresses' },
      { name: 'Index Registers', details: 'Used to store indices for array operations' }
    ]
  },
  {
    name: 'Program Counter (PC)',
    description: 'Used to store the memory address of the next instruction to be executed.',
    bits: 32
  },
  {
    name: 'Stack Pointer (SP)',
    description: 'Used to store the memory address of the top of the stack.',
    bits: 32
  },
  {
    name: 'Base Pointer (BP)',
    description: 'Used to store the memory address of the base of the current stack frame.',
    bits: 32
  },
  {
    name: 'Flags Register',
    description: 'Used to store status flags that indicate the outcome of previous operations.',
    bits: 16
  },
  {
    name: 'Instruction Pointer (IP)',
    description: 'Used to store the memory address of the next instruction to be executed.',
    bits: 32
  }
]

const CPURegisters = (): ReactElement => {
  const [activeRegister, setActiveRegister] = useState<Register>(cpuRegisters[0])

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 border-b flex items-center">
          <Microchip className="mr-2 w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">CPU Registers</h2>
        </div>

        <div className="flex border-b">
          {cpuRegisters.map((register) => (
            <button
              key={register.name}
              className={`
                flex-1 p-4 flex items-center justify-center 
                transition-colors duration-200
                ${activeRegister.name === register.name 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'hover:bg-gray-100 text-gray-600'}
              `}
              onClick={() => setActiveRegister(register)}
            >
              <Microchip className="w-6 h-6" />
              <span className="ml-2 font-medium">{register.name}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Microchip className="w-6 h-6" />
              <span className="ml-2">{activeRegister.name}</span>
            </h3>
            <p className="text-gray-600 mb-4">{activeRegister.description}</p>

            <h4 className="font-bold mb-2">Details:</h4>
            <ul className="space-y-2 pl-4">
              <li className="bg-white p-3 rounded-md shadow-sm border">
                <strong className="text-blue-600">Bits:</strong>{' '}
                <span className="text-gray-600">{activeRegister.bits}</span>
              </li>
            </ul>

            {activeRegister.types && (
              <div className="mb-4">
                <h4 className="font-bold mb-2">Types:</h4>
                <ul className="space-y-2 pl-4">
                  {activeRegister.types.map((type) => (
                    <li 
                      key={type.name} 
                      className="bg-white p-3 rounded-md shadow-sm border"
                    >
                      <strong className="text-blue-600">{type.name}:</strong>{' '}
                      <span className="text-gray-600">{type.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CPURegisters