import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useTaskStore from '../../store';
import { TaskTypeForm } from '../../types/taskTypes';

export default function TaskAddForm(): JSX.Element {
  const { addTask } = useTaskStore();
  const [taskName, setTaskName] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const task: TaskTypeForm = { name: taskName };

    try {
      await addTask(task);
      setTaskName(''); 
    } catch (error) {
      console.error('Ошибка при добавлении задачи:', error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          name="name"
          type="text"
          placeholder="Title"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
        <Button type="submit" variant="primary">
          Добавить
        </Button>
      </Form>
    </>
  );
}