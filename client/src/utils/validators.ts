import {z} from 'zod'

const TaskSchema = z.object({
    id: z.number(),
    name: z.string(),
    status: z.boolean(),
})

export default TaskSchema