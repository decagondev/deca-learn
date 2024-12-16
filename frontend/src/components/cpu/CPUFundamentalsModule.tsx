import { ReactElement, useState } from 'react'
import { 
  Cpu, 
  Memory, 
  Microchip, 
  Calculator, 
  Workflow 
} from 'lucide-react';

interface CPUComponent {
  name: string
  icon: React.ReactNode
  description: string
  types?: Array<{ name: string, details: string }>
  operations?: string[]
  responsibilities?: string[]
}

const cpuComponents: CPUComponent[] = [
  {
    name: 'Registers',
    icon: <Microchip className="w-6 h-6" />,
    description: 'Small, fast storage locations within the CPU used for quick data access and manipulation.',
    types: [
      { name: 'General Purpose Registers', details: 'Versatile registers used for various computational tasks' },
      { name: 'Special Purpose Registers', details: 'Dedicated registers with specific functions' },
      { 
        name: 'Program Counter (PC)', 
        details: 'Keeps track of the next instruction to be executed in the program' 
      },
      { 
        name: 'Stack Pointer (SP)', 
        details: 'Points to the top of the current stack frame' 
      },
      { 
        name: 'Base Pointer (BP)', 
        details: 'Used to reference function parameters and local variables' 
      }
    ]
  },
  {
    name: 'Arithmetic Logic Unit (ALU)',
    icon: <Calculator className="w-6 h-6" />,
    description: 'The computational core of the CPU responsible for performing arithmetic and logical operations.',
    operations: [
      'Addition',
      'Subtraction',
      'Bitwise AND',
      'Bitwise OR',
      'Bitwise XOR',
      'Logical Shifts'
    ]
  },
  {
    name: 'Control Unit',
    icon: <Workflow className="w-6 h-6" />,
    description: 'Manages and coordinates the operations of other CPU components.',
    responsibilities: [
      'Fetch instructions from memory',
      'Decode instructions',
      'Coordinate execution of instructions',
      'Manage instruction pipeline'
    ]
  }
]

const CPUFundamentalsModule = (): ReactElement => {
  const [activeComponent, setActiveComponent] = useState<CPUComponent>(cpuComponents[0])

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 border-b flex items-center">
          <Cpu className="mr-2 w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">CPU Fundamentals</h2>
        </div>

        <div className="flex border-b">
          {cpuComponents.map((component) => (
            <button
              key={component.name}
              className={`
                flex-1 p-4 flex items-center justify-center 
                transition-colors duration-200
                ${activeComponent.name === component.name 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'hover:bg-gray-100 text-gray-600'}
              `}
              onClick={() => setActiveComponent(component)}
            >
              {component.icon}
              <span className="ml-2 font-medium">{component.name}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              {activeComponent.icon}
              <span className="ml-2">{activeComponent.name}</span>
            </h3>
            <p className="text-gray-600 mb-4">{activeComponent.description}</p>

            {activeComponent.types && (
              <div className="mb-4">
                <h4 className="font-bold mb-2">Types:</h4>
                <ul className="space-y-2 pl-4">
                  {activeComponent.types.map((type) => (
                    <li 
                      key={type.name} 
                      className="bg-white p-3 rounded-md shadow-sm border"
                    >
                      <strong className="text-blue-700">{type.name}:</strong>{' '}
                      <span className="text-gray-600">{type.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeComponent.operations && (
              <div className="mb-4">
                <h4 className="font-bold mb-2">Operations:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeComponent.operations.map((op) => (
                    <span 
                      key={op} 
                      className="
                        px-3 py-1 
                        bg-blue-500 
                        text-white 
                        rounded-full 
                        text-sm 
                        shadow-md
                      "
                    >
                      {op}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeComponent.responsibilities && (
              <div>
                <h4 className="font-bold mb-2">Responsibilities:</h4>
                <ul className="space-y-2 pl-4 bg-white p-4 rounded-md shadow-sm border">
                  {activeComponent.responsibilities.map((resp) => (
                    <li 
                      key={resp} 
                      className="flex items-center text-gray-700"
                    >
                      <span className="mr-2 text-blue-500">▶</span>
                      {resp}
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

export default CPUFundamentalsModule