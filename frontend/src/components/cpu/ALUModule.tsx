import { ReactElement, useState } from 'react';
import { Calculator } from 'lucide-react';

interface ALUOperation {
  name: string
  description: string
  operands: string[]
  result: string
}

const aluOperations: ALUOperation[] = [
  {
    name: 'Addition',
    description: 'Adds two numbers together.',
    operands: ['A', 'B'],
    result: 'A + B'
  },
  {
    name: 'Subtraction',
    description: 'Subtracts one number from another.',
    operands: ['A', 'B'],
    result: 'A - B'
  },
  {
    name: 'Multiplication',
    description: 'Multiplies two numbers together.',
    operands: ['A', 'B'],
    result: 'A * B'
  },
  {
    name: 'Division',
    description: 'Divides one number by another.',
    operands: ['A', 'B'],
    result: 'A / B'
  },
  {
    name: 'AND',
    description: 'Performs a bitwise AND operation on two numbers.',
    operands: ['A', 'B'],
    result: 'A & B'
  },
  {
    name: 'OR',
    description: 'Performs a bitwise OR operation on two numbers.',
    operands: ['A', 'B'],
    result: 'A | B'
  },
  {
    name: 'XOR',
    description: 'Performs a bitwise XOR operation on two numbers.',
    operands: ['A', 'B'],
    result: 'A ^ B'
  },
  {
    name: 'NOT',
    description: 'Performs a bitwise NOT operation on a number.',
    operands: ['A'],
    result: '~A'
  }
]

const ALUModule = (): ReactElement => {
  const [activeOperation, setActiveOperation] = useState<ALUOperation>(aluOperations[0])

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 border-b flex items-center">
          <Calculator className="mr-2 w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">ALU Module</h2>
        </div>

        <div className="flex border-b">
          {aluOperations.map((operation) => (
            <button
              key={operation.name}
              className={`
                flex-1 p-4 flex items-center justify-center 
                transition-colors duration-200
                ${activeOperation.name === operation.name 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'hover:bg-gray-100 text-gray-600'}
              `}
              onClick={() => setActiveOperation(operation)}
            >
              <Calculator className="w-6 h-6" />
              <span className="ml-2 font-medium">{operation.name}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Calculator className="w-6 h-6" />
              <span className="ml-2">{activeOperation.name}</span>
            </h3>
            <p className="text-gray-600 mb-4">{activeOperation.description}</p>

            <h4 className="font-bold mb-2">Operation:</h4>
            <ul className="space-y-2 pl-4">
              <li className="bg-white p-3 rounded-md shadow-sm border">
                <strong className="text-blue-600">Operands:</strong>{' '}
                <span className="text-gray-600">{activeOperation.operands.join(', ')}</span>
              </li>
              <li className="bg-white p-3 rounded-md shadow-sm border">
                <strong className="text-blue-600">Result:</strong>{' '}
                <span className="text-gray-600">{activeOperation.result}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ALUModule