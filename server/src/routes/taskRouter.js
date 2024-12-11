const taskRouter = require('express').Router();
const { Task } = require('../../db/models');

taskRouter.route('/')
.get(async(req,res)=>{
    console.log('11111111');
    
    try {
        const taskArr = await Task.findAll();
        console.log(taskArr);
        
      res.json(taskArr);
    } catch (error) {
     console.log(error);
    res.status(500).send({message: 'Server error'})
    }
})
.post(async(req,res)=>{
   const {name} = req.body;
   const newTask = await Task.create({name, status:false});
   res.json(newTask)
})

taskRouter.route('/:id')
.put(async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      await Task.update({ status }, { where: { id } });
      const newTask = await Task.findByPk(id);
      res.json(newTask);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ошибка сервера' });
    }
  })
.delete(async(req,res)=>{
    try {
        const { id } = req.params;
        await Task.destroy({ where: { id } });
        res.sendStatus(200);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ошибка сервера' });
      }
    })
module.exports = taskRouter;