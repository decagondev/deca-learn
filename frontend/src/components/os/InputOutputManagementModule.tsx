import { ReactElement, useState } from 'react';
import { Terminal, FileText, Settings } from 'lucide-react';
import { FaLinux } from 'react-icons/fa';

interface InputOutputManagementComponent {
  name: string;
  icon: React.ReactNode;
  description: string;
  topics?: Array<{ name: string; details: string }>;
  subtopics?: Array<{ name: string; details: string }>;
  responsibilities?: string[];
}

const inputOutputComponents: InputOutputManagementComponent[] = [
  {
    name: 'I/O Devices',
    icon: <Terminal className="w-6 h-6" />,
    description: 'Managing input/output devices such as keyboards, displays, printers, etc.',
    topics: [
      { name: 'Device Drivers', details: 'Software that interacts with devices' },
      { name: 'Device Interfaces', details: 'Standard interfaces for devices' },
      { name: 'Device Control', details: 'Controlling device behavior' },
    ],
    responsibilities: [
      'Manage I/O devices',
      'Load device drivers',
      'Handle device interrupts',
    ],
  },
  {
    name: 'I/O Operations',
    icon: <FaLinux className="w-6 h-6" />,
    description: 'Managing input/output operations such as read, write, control',
    topics: [
      { name: 'I/O Scheduling', details: 'Scheduling I/O operations' },
      { name: 'I/O Buffering', details: 'Buffering I/O data' },
      { name: 'I/O Caching', details: 'Caching I/O data' },
    ],
    subtopics: [
      { name: 'I/O Buffers', details: 'Temporary storage for I/O data' },
      { name: 'I/O Cache', details: 'Faster access to frequently used I/O data' },
    ],
  },
  {
    name: 'I/O Synchronization',
    icon: <Settings className="w-6 h-6" />,
    description: 'Managing synchronization of input/output operations',
    topics: [
      { name: 'Locks', details: 'Exclusive access to shared resources' },
      { name: 'Semaphores', details: 'Controlling access to shared resources' },
      { name: 'Monitors', details: 'Synchronizing access to shared resources' },
    ],
    responsibilities: [
      'Synchronize I/O operations',
      'Manage locks and semaphores',
      'Handle I/O synchronization errors',
    ],
  },
];

const InputOutputManagementModule = (): ReactElement => {
  const [activeComponent, setActiveComponent] = useState<InputOutputManagementComponent>(inputOutputComponents[0]);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 border-b flex items-center">
          <FaLinux className="mr-2 w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Input/Output Management Module</h2>
        </div>

        <div className="flex border-b">
          {inputOutputComponents.map((component) => (
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
            
            {activeComponent.topics && (
              <div className="mb-4">
                <h4 className="font-bold mb-2">Topics:</h4>
                <ul className="space-y-2 pl-4">
                  {activeComponent.topics.map((topic) => (
                    <li key={topic.name} className="bg-white p-3 rounded-md shadow-sm border">
                      <strong className="text-blue-700">{topic.name}:</strong>{' '}
                      <span className="text-gray-600">{topic.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeComponent.subtopics && (
              <div className="mb-4">
                <h4 className="font-bold mb-2">Subtopics:</h4>
                <ul className="space-y-2 pl-4">
                  {activeComponent.subtopics.map((subtopic) => (
                    <li key={subtopic.name} className="bg-white p-3 rounded-md shadow-sm border">
                      <strong className="text-blue-700">{subtopic.name}:</strong>{' '}
                      <span className="text-gray-600">{subtopic.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeComponent.responsibilities && (
              <div>
                <h4 className="font-bold mb-2">Responsibilities:</h4>
                <ul className="space-y-2 pl-4 bg-white p-4 rounded-md shadow-sm border">
                  {activeComponent.responsibilities.map((resp) => (
                    <li key={resp} className="flex items-center text-gray-700">
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
  );
};

export default InputOutputManagementModule;