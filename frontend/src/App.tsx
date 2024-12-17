import './App.css'
import ALUModule from './components/cpu/ALUModule'
import ControlUnitModule from './components/cpu/ControlUnitModule'
import CPUFundamentalsModule from './components/cpu/CPUFundamentalsModule'
import CPURegisters from './components/cpu/CPURegisters'
import FileSystemsModule from './components/os/FileSystemsModule'
import InputOutputManagementModule from './components/os/InputOutputManagementModule'
import LinuxFundamentals from './components/os/LinuxFundamentals'
import MemoryManagementModule from './components/os/MemoryManagementModule'
import OSFundamentals from './components/os/OSFundamentals'
import ProcessManagementModule from './components/os/ProcessManagementModule'

function App() {
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
  ];

  const mTopics = [
    {
      name: 'Virtual Memory',
      details:
        'Virtual memory is a memory management technique that allows a process to use more memory than is physically available in the system.',
      subtopics: [
        { name: 'Paging', details: 'Paging is a memory management technique that divides a process into fixed-size blocks called pages.' },
        { name: 'Segmentation', details: 'Segmentation is a memory management technique that divides a process into logical segments.' },
      ],
    },
    {
      name: 'Memory Allocation',
      details:
        'Memory allocation is the process of assigning memory to a process. This can be done using the heap or the stack.',
      subtopics: [
        { name: 'Heap Allocation', details: 'Heap allocation is a type of memory allocation that allows a process to allocate memory dynamically.' },
        { name: 'Stack Allocation', details: 'Stack allocation is a type of memory allocation that allows a process to allocate memory for local variables.' },
      ],
    },
    {
      name: 'Memory Protection',
      details:
        'Memory protection is the process of preventing a process from accessing memory that it is not authorized to access.',
      subtopics: [
        { name: 'Access Control', details: 'Access control is a type of memory protection that allows the operating system to control access to memory.' },
        { name: 'Virtual Memory Protection', details: 'Virtual memory protection is a type of memory protection that allows the operating system to protect virtual memory.' },
      ],
    },
    {
      name: 'Memory Management Algorithms',
      details:
        'Memory management algorithms are used by the operating system to manage memory. These algorithms include the First-In-First-Out (FIFO) algorithm, the Least Recently Used (LRU) algorithm, and the Optimal Replacement algorithm.',
    },
  ];
  
  const mResponsibilities = [
    'Manage virtual memory and allocate memory to processes',
    'Implement memory protection mechanisms to prevent unauthorized access to memory',
    'Optimize memory allocation and deallocation to minimize memory fragmentation',
    'Implement memory management algorithms to manage memory efficiently',
    'Handle memory-related system calls, such as malloc() and free()',
    'Manage memory for multiple processes and ensure that each process has sufficient memory to run',
  ];
  const responsibilities = [
    'Create and terminate processes',
    'Schedule processes for execution',
    'Manage process synchronization',
    'Handle process-related system calls, such as fork() and exec()',
    'Implement process scheduling algorithms, such as FCFS and SJF',
    'Manage process priority and ensure that high-priority processes are executed first',
    'Handle inter-process communication, such as pipes and sockets',
    'Ensure that processes are executed efficiently and do not conflict with each other',
  ];

  const fsTopics = [
    {
      name: 'File System Organization',
      details:
        'A file system is organized into a hierarchy of files and directories. Each file and directory has a unique name and a set of permissions that determine who can read, write, and execute it.',
      subtopics: [
        { name: 'File System Hierarchy', details: 'The file system hierarchy is the tree-like structure of files and directories.' },
        { name: 'File System Permissions', details: 'File system permissions determine who can read, write, and execute files and directories.' },
      ],
    },
    {
      name: 'File System Types',
      details:
        'There are several types of file systems, including local file systems, network file systems, and distributed file systems.',
      subtopics: [
        { name: 'Local File Systems', details: 'Local file systems are stored on a single computer or device.' },
        { name: 'Network File Systems', details: 'Network file systems are stored on a network of computers or devices.' },
        { name: 'Distributed File Systems', details: 'Distributed file systems are stored across multiple computers or devices.' },
      ],
    },
    {
      name: 'File System Operations',
      details:
        'File system operations include creating, reading, writing, and deleting files and directories.',
      subtopics: [
        { name: 'File Creation', details: 'Files can be created using the touch command or by saving a file from an application.' },
        { name: 'File Reading', details: 'Files can be read using the cat command or by opening a file in an application.' },
        { name: 'File Writing', details: 'Files can be written to using the echo command or by saving a file from an application.' },
        { name: 'File Deletion', details: 'Files can be deleted using the rm command.' },
      ],
    },
    {
      name: 'File System Security',
      details:
        'File system security includes protecting files and directories from unauthorized access or modification.',
      subtopics: [
        { name: 'File System Permissions', details: 'File system permissions determine who can read, write, and execute files and directories.' },
        { name: 'Access Control Lists (ACLs)', details: 'ACLs are a type of file system permission that allows for fine-grained control over access to files and directories.' },
      ],
    },
  ];
  
  const fsResponsibilities = [
    'Create and manage file systems',
    'Implement file system permissions and access control',
    'Perform file system operations, such as creating, reading, writing, and deleting files and directories',
    'Manage file system security, including protecting files and directories from unauthorized access or modification',
    'Handle file system-related system calls, such as open(), read(), write(), and close()',
    'Optimize file system performance, including disk space allocation and file fragmentation',
  ];
  return (
    <>
      <CPUFundamentalsModule />
      <CPURegisters />
      <ALUModule />
      <ControlUnitModule />
      <OSFundamentals />
      <ProcessManagementModule topics={topics} responsibilities={responsibilities} />
      <MemoryManagementModule topics={mTopics} responsibilities={mResponsibilities} />
      <FileSystemsModule topics={fsTopics} responsibilities={fsResponsibilities} />
      <InputOutputManagementModule />
      <LinuxFundamentals />
    </>
  )
}

export default App
