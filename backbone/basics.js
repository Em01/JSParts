//to get the data
$.getJson('/todo', function(data) {});

//to create a model class
var TodoItem = Backbone.Model.extend({});

//model instance
var todoItem = new TodoItem(
	{ description: 'test', id: 1}
);

//get
todoItem.get('description');

//set
todoItem.set({description: 'new'});

//save
todoItem.save();

//to create a view class
var TodoItem = Backbone.view.extend({});

//instantiate
var todoView = new TodoView({model: todoItem});

//render
var TodoView = Backbone.View.extend({
	render: function(){
		var html = '<h3>' + this.model.get('description') + '</h3>';
		$(this.el).html(html);
	}
});

var AppointmentView = Backbone.View.extend({
  render: function(){
    $(this.el).html('<li>' + this.model.get('title') + '</li>');
  }
});


//ur to get JSON data from model
todoItem.url = '/todo';

//populate model from server
todoItem.fetch();
todoItem.get('description');



//fetching dtata from the server

var TodoITem = Backbone.Model.extend({urlRoot: '/todos'});

//fetch todo wit id of 1
var todoItem = new TodoItem({id: 1});
todoItem.fetch();

//update the todo
todoItem.set({description: 'Pick up'});
todoItem.save();





//Creating and Deleting a new Todo
var todoItem = new TodoItem();
todoItem.set({description: 'Fill prescription' });
todoItem.save(); //post /todos with JSON params

todoItem.get('id');
todoItem.destroy(); //DELETE/todos/2
todoItem.toJSON(); //Get JSON from model


//Set Default values

var TodoItem = Backbone.Model.extend({
	defaults: {
		description: 'Empty todo...',
		status: 'incomplete'
	}
});

var todoItem = new TodoItem();
todoItem.get('description');
todoItem.set('status');