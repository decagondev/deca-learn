import { ReactElement, useState } from 'react';
import { FaLinux } from 'react-icons/fa';
import { 
  Terminal, 
  FileCode, 
  Bug, 
  Settings 
} from 'lucide-react';

interface LinuxTopic {
  name: string
  icon: React.ReactNode
  description: string
  subtopics?: Array<{ name: string, details: string }>
  tools?: string[]
  concepts?: string[]
}

const linuxTopics: LinuxTopic[] = [
  {
    name: 'Kernel',
    icon: <FaLinux className="w-6 h-6" />,
    description: 'The core of the Linux operating system, responsible for managing hardware resources and providing services to applications.',
    concepts: [
      'Process management',
      'Memory management',
      'File systems',
      'Networking',
      'Security'
    ]
  },
  {
    name: 'Shell',
    icon: <Terminal className="w-6 h-6" />,
    description: 'A command-line interface that allows users to interact with the operating system and execute commands.',
    tools: [
      'Bash',
      'Zsh',
      'Fish',
      'Tcsh'
    ]
  },
  {
    name: 'File Systems',
    icon: <FileCode className="w-6 h-6" />,
    description: 'A hierarchical organization of files and directories that allows for efficient storage and retrieval of data.',
    concepts: [
      'File types',
      'Permissions',
      'Ownership',
      'Links',
      'Mounting'
    ]
  },
  {
    name: 'System Administration',
    icon: <Settings className="w-6 h-6" />,
    description: 'The process of managing and maintaining a Linux system, including tasks such as user management, package management, and network configuration.',
    tools: [
      'APT',
      'YUM',
      'Pacman',
      'Sysctl'
    ]
  },
  {
    name: 'Debugging',
    icon: <Bug className="w-6 h-6" />,
    description: 'The process of identifying and fixing errors or bugs in software programs or system configurations.',
    tools: [
      'GDB',
      'Valgrind',
      'Strace',
      'Syslog'
    ]
  }
]

const LinuxFundamentals = (): ReactElement => {
  const [activeTopic, setActiveTopic] = useState<LinuxTopic>(linuxTopics[0])

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 border-b flex items-center">
          <FaLinux className="mr-2 w-8 h-8 text-green-600" />
          <h2 className="text-2xl font-bold text-gray-800">Linux Fundamentals</h2>
        </div>

        <div className="flex border-b">
          {linuxTopics.map((topic) => (
            <button
              key={topic.name}
              className={`
                flex-1 p-4 flex items-center justify-center 
                transition-colors duration-200
                ${activeTopic.name === topic.name 
                  ? 'bg-green-100 text-green-700' 
                  : 'hover:bg-gray-100 text-gray-600'}
              `}
              onClick={() => setActiveTopic(topic)}
            >
              {topic.icon}
              <span className="ml-2 font-medium">{topic.name}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 flex items-center">
              {activeTopic.icon}
              <span className="ml-2">{activeTopic.name}</span>
            </h3>
            <p className="text-gray-600 mb-4">{activeTopic.description}</p>

            {activeTopic.concepts && (
              <div className="mb-4">
                <h4 className="font-bold mb-2">Key Concepts:</h4>
                <ul className="space-y-2 pl-4">
                  {activeTopic.concepts.map((concept) => (
                    <li 
                      key={concept} 
                      className="bg-white p-3 rounded-md shadow-sm border"
                    >
                      <span className="text-gray-600">{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTopic.tools && (
              <div className="mb-4">
                <h4 className="font-bold mb-2">Common Tools:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeTopic.tools.map((tool) => (
                  <span 
                  key={tool} 
                  className="
                    px-3 py-1 
                    bg-green-500 
                    text-white 
                    rounded-full 
                    text-sm 
                    shadow-md
                  "
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTopic.subtopics && (
          <div>
            <h4 className="font-bold mb-2">Subtopics:</h4>
            <ul className="space-y-2 pl-4 bg-white p-4 rounded-md shadow-sm border">
              {activeTopic.subtopics.map((subtopic) => (
                <li 
                  key={subtopic.name} 
                  className="flex items-center text-gray-700"
                >
                  <span className="mr-2 text-green-500">▶</span>
                  <strong className="text-green-600">{subtopic.name}:</strong>{' '}
                  <span className="text-gray-600">{subtopic.details}</span>
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

export default LinuxFundamentals             