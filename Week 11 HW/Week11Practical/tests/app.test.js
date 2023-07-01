const request = require('supertest')
const mongoose = require ('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app')
const server = app. listen(8080, () => console.log('Testing is go on PORT 8080'))
const ToDo = require('../models/toDo')

let mongoServer

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
})

afterAll(async () => {
    await mongoose.connection.close()
    mongoServer.stop()
    server.close()
})

afterAll((done) => done())


describe ('Test the user endpoints', () => {

    //Get all
    test('It should list all todo items', async () => {
        const response = await request(app)
        .get ('/toDos')

        expect (response.body).toMatchObject({})
        expect(response.statusCode).toBe(200)
    })

    //Get specific
    test('It should list one todo item', async () => {
        const toDo = new ToDo ({
            title: 'Bathtime',
            description: 'Clean Thyself',
            completed: true
        })
        await toDo.save()
        const response = await request (app).get(`/toDos/${toDo.id}`)
        
        expect(response.body.title).toEqual('Bathtime')
        expect(response.body.description).toEqual('Clean Thyself')
        expect(response.body).toHaveProperty('created_at')
    })

    //Create New
    test('It shoud create a new todo item', async () => {
        const response = await request(app)
        .post('/toDos')
        .send({
            title:'Today',
            description: 'Wash self',
            completed: true,
        })

        expect(response.body.title).toEqual('Today')
        expect(response.body.description).toEqual('Wash self')
        expect(response.body.completed).toEqual(true)
        expect(response.body).toHaveProperty('created_at')
    })


    //Update
    test('It should update one todo item', async () => {
        const toDo = new ToDo ({
            title: 'Bathtime',
            description: 'Clean Thyself',
            completed: false
        })
        await toDo.save()
        
        const response = await request(app).put(`/todos/${toDo.id}`).send({ title: 'No Bath For Me', description: 'Baths are lame', completed: true })

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe('Item Updated')
    })

    //Delete
    test('It should delete one todo item', async () => {
        const toDo = new ToDo ({
            title: 'Bathtime',
            description: 'Clean Thyself',
            completed: true
        })
        await toDo.save()
        
        const response = await request(app).delete(`/toDos/${toDo.id}`)

        expect(response.body.message).toBe('Todo Deleted')
    })
}) 