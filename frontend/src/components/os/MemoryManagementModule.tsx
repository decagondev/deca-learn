import { ReactElement, useState } from 'react';
import { Terminal, Settings } from 'lucide-react';
import { FaLinux } from 'react-icons/fa';

interface MemoryManagementTopic {
  name: string;
  details: string;
}

interface MemoryManagementSubtopic {
  name: string;
  details: string;
}

interface MemoryManagementModuleProps {
  topics: Array<{ name: string; details: string; subtopics?: Array<MemoryManagementSubtopic> }>;
  responsibilities: string[];
}

const MemoryManagementModule: React.FC<MemoryManagementModuleProps> = ({
  topics,
  responsibilities,
}: MemoryManagementModuleProps) => {
  const [activeTopic, setActiveTopic] = useState(topics[0]);

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 border-b flex items-center">
          <FaLinux className="mr-2 w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Memory Management</h2>
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

            {activeTopic.subtopics && (
              <div className="mb-4">
                <h4 className="font-bold mb-2">Subtopics:</h4>
                <ul className="space-y-2 pl-4">
                  {activeTopic.subtopics.map((subtopic) => (
                    <li key={subtopic.name} className="bg-white p-3 rounded-md shadow-sm border">
                      <strong className="text-blue-700">{subtopic.name}:</strong>{' '}
                      <span className="text-gray-600">{subtopic.details}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

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

export default MemoryManagementModule;