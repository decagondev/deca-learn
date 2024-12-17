import { ReactElement, useState } from 'react';
import { Terminal, Settings } from 'lucide-react';
import { FaLinux } from 'react-icons/fa';

interface ProcessManagementTopic {
  name: string;
  details: string;
}

interface ProcessManagementModuleProps {
  topics: Array<ProcessManagementTopic>;
  responsibilities: string[];
}

const topics = [
    {
      name: 'Process States',
      details:
        'A process can be in one of several states, including ready, running, waiting, zombie, or stopped. Each state represents a different point in the process lifecycle.',
    },
    {
      name: 'Context Switching',
      details:
        'Context switching is the process of switching the CPU from one process to another. This involves saving the current state of the current process and restoring the saved state of the next process.',
    },
    {
      name: 'Process Scheduling',
      details:
        'Process scheduling is the algorithm used by the operating system to decide which process to run next. There are several scheduling algorithms, including First-Come-First-Served (FCFS), Shortest Job First (SJF), and Priority Scheduling.',
    },
    {
      name: 'Process Creation',
      details:
        'Process creation is the process of creating a new process. This can be done using the fork() system call, which creates a copy of the current process, or the exec() system call, which replaces the current process with a new one.',
    },
    {
      name: 'Process Termination',
      details:
        'Process termination is the process of ending a process. This can be done using the exit() system call, which terminates the process and returns control to the operating system.',
    },
    {
      name: 'Process Synchronization',
      details:
        'Process synchronization is the process of coordinating the actions of multiple processes. This can be done using synchronization primitives, such as semaphores, monitors, and mutexes.',
    },
    {
      name: 'Inter-Process Communication (IPC)',
      details:
        'Inter-Process Communication (IPC) is the process of exchanging data between multiple processes. This can be done using pipes, sockets, shared memory, or message queues.',
    },
    {
      name: 'Process Priority',
      details:
        'Process priority is the priority assigned to a process by the operating system. This determines the order in which processes are scheduled to run.',
    },
  ];

const ProcessManagementModule: React.FC<ProcessManagementModuleProps> = ({
  topics,
  responsibilities,
}: ProcessManagementModuleProps) => {
  const [activeTopic, setActiveTopic] = useState<ProcessManagementTopic>(topics[0]);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 border-b flex items-center">
          <FaLinux className="mr-2 w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Process Management</h2>
        </div>

        <div className="flex border-b">
          {topics.map((topic) => (
            <button
              key={topic.name}
              className={`
                flex-1 p-4 flex items-center justify-center 
                transition-colors duration-200
                ${activeTopic.name === topic.name 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'hover:bg-gray-100 text-gray-600'}
              `}
              onClick={() => setActiveTopic(topic)}
            >
              <Terminal className="mr-2 w-6 h-6" />
              <span className="ml-2 font-medium">{topic.name}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              <Settings className="mr-2 w-6 h-6" />
              <span className="ml-2">{activeTopic.name}</span>
            </h3>
            <p className="text-gray-600 mb-4">{activeTopic.details}</p>

            <h4 className="font-bold mb-2">Responsibilities:</h4>
            <ul className="space-y-2 pl-4 bg-white p-4 rounded-md shadow-sm border">
              {responsibilities.map((resp) => (
                <li key={resp} className="flex items-center text-gray-700">
                  <span className="mr-2 text-blue-500">▶</span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessManagementModule;