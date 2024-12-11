import type { AxiosInstance, AxiosResponse } from 'axios';
import TaskSchema from '../utils/validators';
import { TaskTypeDb, TaskTypeForm } from '../types/taskTypes';
import axiosInstance from './axiosInstance';

class TaskService {
  constructor(private readonly client: AxiosInstance) {}

  async getTasks(): Promise<TaskTypeDb[]> {
    const { data } = await this.client<TaskTypeDb[]>('/tasks');
    console.log(data);
    return TaskSchema.array().parse(data);
  }

  async addTask(task: TaskTypeForm): Promise<TaskTypeDb> {
    const { data } = await this.client.post<TaskTypeDb>('/tasks', task);
    return TaskSchema.parse(data);
  }

  async updateTask(id: TaskTypeDb['id']): Promise<TaskTypeDb> {
    const { data } = await this.client.put<TaskTypeDb>(`/tasks/${id}`);
    return TaskSchema.parse(data);
  }

  async deleteTask(id: TaskTypeDb['id']): Promise<AxiosResponse> {
    return this.client.delete<AxiosResponse>(`/tasks/${id}`);
  }
}

export default new TaskService(axiosInstance);
