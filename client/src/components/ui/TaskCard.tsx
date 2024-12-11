import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function TaskCard({ task, updateHandler, deleteHandler }): JSX.Element {

  return (
    <Col className='col-4'>
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>{task?.name}</Card.Title>
          <Card.Text>Статус: {task.status ? 'Выполнено' : 'В процессе'}</Card.Text>
          
          <FormControlLabel
            control={<Checkbox
              checked={task.status}
              onChange={() => updateHandler(task.id)}
              color="primary" />} label={undefined}          />
          
          <Button onClick={() => deleteHandler(task.id)} variant="danger">
            Удалить
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}