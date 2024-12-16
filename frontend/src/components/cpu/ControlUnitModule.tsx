import { ReactElement, useState } from 'react';
import { 
  Cpu, 
  Memory, 
  Microchip, 
  Calculator, 
  Workflow 
} from 'lucide-react';

interface ControlUnitModule {
  name: string
  icon: React.ReactNode
  description: string
  responsibilities: string[]
  stages: { name: string, details: string }[]
}

const controlUnit: ControlUnitModule = {
  name: 'Control Unit',
  icon: <Workflow className="w-6 h-6" />,
  description: 'Manages and coordinates the operations of other CPU components.',
  responsibilities: [
    'Fetch instructions from memory',
    'Decode instructions',
    'Coordinate execution of instructions',
    'Manage instruction pipeline'
  ],
  stages: [
    { 
      name: 'Instruction Fetch', 
      details: 'Retrieve an instruction from memory' 
    },
    { 
      name: 'Instruction Decode', 
      details: 'Determine the operation to be performed' 
    },
    { 
      name: 'Operand Fetch', 
      details: 'Retrieve data from registers or memory' 
    },
    { 
      name: 'Execution', 
      details: 'Perform the operation' 
    },
    { 
      name: 'Write Back', 
      details: 'Store results in registers or memory' 
    }
  ]
};

const ControlUnitModule = (): ReactElement => {
  const [activeStage, setActiveStage] = useState(controlUnit.stages[0]);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 border-b flex items-center">
          <Cpu className="mr-2 w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Control Unit</h2>
        </div>

        <div className="p-6">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              {controlUnit.icon}
              <span className="ml-2">{controlUnit.name}</span>
            </h3>
            <p className="text-gray-600 mb-4">{controlUnit.description}</p>

            <h4 className="font-bold mb-2">Responsibilities:</h4>
            <ul className="space-y-2 pl-4 bg-white p-4 rounded-md shadow-sm border">
              {controlUnit.responsibilities.map((resp) => (
                <li 
                  key={resp} 
                  className="flex items-center text-gray-700"
                >
                  <span className="mr-2 text-blue-500">▶</span>
                  {resp}
                </li>
              ))}
            </ul>

            <h4 className="font-bold mt-4 mb-2">Instruction Execution Stages:</h4>
            <div className="flex border-b">
              {controlUnit.stages.map((stage) => (
                <button
                  key={stage.name}
                  className={`
                    flex-1 p-4 flex items-center justify-center 
                    transition-colors duration-200
                    ${activeStage.name === stage.name 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'hover:bg-gray-100 text-gray-600'}
                  `}
                  onClick={() => setActiveStage(stage)}
                >
                  <span className="font-medium">{stage.name}</span>
                </button>
              ))}
            </div>

            <div className="p-6 bg-white rounded-md shadow-sm border mt-4">
              <h3 className="text-xl font-semibold mb-3">{activeStage.name}</h3>
              <p className="text-gray-600">{activeStage.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ControlUnitModule;