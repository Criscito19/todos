import { create } from 'zustand';
import TaskService from './services/taskService'; 
import { TaskTypeDb, TaskTypeForm } from './types/taskTypes';

interface TaskStore {
  tasks: TaskTypeDb[];
  fetchTasks: () => Promise<void>;
  addTask: (task: TaskTypeForm) => Promise<void>;
  deleteTask: (id: TaskTypeDb['id']) => Promise<void>;
  updateTask: (id: TaskTypeDb['id']) => Promise<void>;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  fetchTasks: async () => {
    try {
      const tasks = await TaskService.getTasks(); 
      set({ tasks });
    } catch (error) {
      console.error('Ошибка при загрузке задач:', error);
    }
  },

  addTask: async (task: TaskTypeForm) => {
    try {
      const newTask = await TaskService.addTask(task);
      set((state) => ({ tasks: [...state.tasks, newTask] })); 
    } catch (error) {
      console.error('Ошибка при добавлении задачи:', error);
    }
  },

  updateTask: async (id: TaskTypeDb['id']) => {
    try {
      await TaskService.updateTask(id);

      set((state) => ({
        tasks: state.tasks.map(
          (task) => (task.id === id ? { ...task, status: !task.status } : task),
        ),
      }));
    } catch (error) {
      console.error('Ошибка при обновлении задачи:', error);
    }
  },

  deleteTask: async (id: TaskTypeDb['id']) => {
    try {
      await TaskService.deleteTask(id);
      set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }));
    } catch (error) {
      console.error('Ошибка при удалении задачи:', error);
    }
  },
}));

export default useTaskStore;
