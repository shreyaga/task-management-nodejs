const chai = require('chai');
const chaiHttp = require('chai-http');
let server = require('../server');

chai.should();
chai.use(chaiHttp);


describe('Test API Routes', function() {

    // test GET route
    describe('GET /api/task/:id', function() {
      it('returns task based on id', function(done) {
        const taskId = "1";
        chai.request(server)
        .get('/api/task/' + taskId)
        .end((err,resp)=>{
            resp.should.have.status(200);
            resp.body.should.have.property('data');
            resp.body.data.should.have.property('id');
            resp.body.data.should.have.property('id').eq(taskId);
            done();
        });
      });
    
      it('returns task based on id', function(done) {
        const taskId =9;
        chai.request(server)
        .get('/api/task/' + taskId)
        .end((err,resp)=>{
            resp.should.have.status(404);
            done();
        });
      });
    });

    // Testing the save task expecting status 201 of success
    describe('POST /tasks', function() {
      it('saves a new task', function(done) {
        const task = {"id":"7","name":"sample app", "owner":"dora.matthews@xyz.com","assignee":"will.smith@xyz.com","dueDate":"1616198400000","createdDate":"1614816000000","status":"open"};
        chai.request(server).post('/api/task/').send(task).end((err,resp)=>{
          resp.should.have.status(201);
          resp.body.should.have.property('data');
          resp.body.data.should.be.a('array');
          done();
        });
      });
    });
    
    describe('PUT /task/:id/:status', function() {
      it('updates a task', function(done) {
        const task = {"id":"2","status":"complete"};
        chai.request(server).put('/api/task/'+ task.id + '/' + task.status).end((err,resp)=>{
          resp.should.have.status(200);
          resp.body.should.have.property('data');
          resp.body.data.should.be.a('object');
          resp.body.data.should.have.property('id').eq(task.id);
          done();
        });
      });
    });
    
    describe('DELETE /tasks/:id', function() {
      it('removes a task based on id', function(done) {
        const taskId = "1";
        chai.request(server).delete('/api/task/'+taskId).end((err,resp)=>{
          resp.should.have.status(200);
          resp.body.data.should.be.a('array');
          done();
        });
      });
    });
  });