import {z} from'zod';
import TaskSchema from '../utils/validators';

export type TaskTypeDb = z.infer<typeof TaskSchema>;
export type TaskTypeForm = Omit<TaskTypeDb, 'id' | 'status'>

export type TaskActionType =
  | { type: 'SET_TASKS'; payload: TaskTypeDb[] }
  | { type: 'ADD_TASK'; payload: TaskTypeDb }
  | { type: 'DELETE_TASK'; payload: TaskTypeDb['id']};

export type PostHandlerType = {
  submitHandler: (dataForm: TaskTypeForm) => Promise<void>;
  deleteHandler: (id: TaskTypeDb['id']) => Promise<void>;
};
