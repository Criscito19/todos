import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import TaskCard from '../ui/TaskCard';
import TaskAddForm from '../ui/TaskAddForm';
import Col from 'react-bootstrap/esm/Col';
import useTaskStore from '../../store';

export default function MainPage(): JSX.Element {
  const { tasks, fetchTasks, deleteTask, updateTask } = useTaskStore();

  useEffect(()=>{
    fetchTasks()
  }, [])

  return (
    <div>
      <h1>Список задач</h1>
      <TaskAddForm />
      <Row style={{marginTop: '50px'}}>
        <Col style={{marginLeft:"60px"}}>
        <p> Нужно выполнить</p>
        {tasks.filter(el => el.status===false).map((task) => (
          <Col key={task.id} sm={12} md={6} lg={4}>
            <TaskCard key={task.id} task={task} deleteHandler={deleteTask} updateHandler={updateTask} />
          </Col>
        ))}
        </Col>
        <Col>
        <p> Выполненные</p>
        {tasks.filter(el => el.status===true).map((task) => (
          <Col key={task.id} sm={12} md={6} lg={4}>
            <TaskCard key={task.id} task={task} deleteHandler={deleteTask} updateHandler={updateTask} />
          </Col>
        ))}
        </Col>
      </Row>
    </div>
  );
}
