import { ReactElement, useState } from 'react';
import { Terminal, FileText, Settings } from 'lucide-react';
import { FaLinux } from 'react-icons/fa';

interface OSComponent {
  name: string;
  icon: React.ReactNode;
  description: string;
  topics?: Array<{ name: string; details: string }>;
  subtopics?: Array<{ name: string; details: string }>;
  responsibilities?: string[];
}

const osComponents: OSComponent[] = [
  {
    name: 'Process Management',
    icon: <Settings className="w-6 h-6" />,
    description: 'Managing the creation, execution, and termination of processes.',
    topics: [
      { name: 'Process States', details: 'Ready, running, waiting, etc.' },
      { name: 'Context Switching', details: 'Switching between processes' },
      { name: 'Process Scheduling', details: 'Scheduling algorithms, priority queues' },
    ],
    responsibilities: [
      'Create and terminate processes',
      'Schedule processes for execution',
      'Manage process synchronization',
    ],
  },
  {
    name: 'Memory Management',
    icon: <FaLinux className="w-6 h-6" />,
    description: 'Managing the allocation and deallocation of memory for processes.',
    topics: [
      { name: 'Virtual Memory', details: 'Paging, segmentation, etc.' },
      { name: 'Memory Allocation', details: 'Stack, heap, etc.' },
      { name: 'Memory Protection', details: 'Permission bits, access control' },
    ],
    subtopics: [
      { name: 'Page Tables', details: 'Translating virtual to physical addresses' },
      { name: 'Page Replacement', details: 'Reclaiming pages from physical memory' },
    ],
  },
  {
    name: 'File Systems',
    icon: <FileText className="w-6 h-6" />,
    description: 'Managing files, directories, and storage devices.',
    topics: [
      { name: 'File System Organization', details: 'Hierarchy, directories, files' },
      { name: 'File System Operations', details: 'Create, read, write, delete' },
      { name: 'File System Security', details: 'Access control, permission bits' },
    ],
    responsibilities: [
      'Create and manage file system structures',
      'Enforce file system security policies',
      'Provide file system services to applications',
    ],
  },
  {
    name: 'Input/Output Management',
    icon: <Terminal className="w-6 h-6" />,
    description: 'Managing input/output operations between devices and the operating system.',
    topics: [
      { name: 'I/O Devices', details: 'Keyboards, displays, printers, etc.' },
      { name: 'I/O Operations', details: 'Read, write, control' },
      { name: 'I/O Scheduling', details: 'Scheduling I/O operations' },
    ],
    responsibilities: [
      'Manage I/O devices and operations',
      'Schedule I/O operations for execution',
      'Handle I/O interrupts and exceptions',
    ],
  },
];

const OSFundamentals = (): ReactElement => {
  const [activeComponent, setActiveComponent] = useState<OSComponent>(osComponents[0]);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 border-b flex items-center">
          <FaLinux className="mr-2 w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Operating Systems Fundamentals</h2>
        </div>

        <div className="flex border-b">
          {osComponents.map((component) => (
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

export default OSFundamentals;
