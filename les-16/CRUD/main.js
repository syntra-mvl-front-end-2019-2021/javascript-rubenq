//https://docs.directus.io/api/items.html#the-item-object
const showTodo = document.getElementById('show-todo');

function isObject(val) {
  if(val === null) {
    return false;
  }
  return (typeof val === 'object');
}

function showTodos(todos) 
{
  console.log(todos);
  for (let val in todos)
  {
    if(isObject(todos[val])){
      for (let val2 in todos[val]) {
        // console.log(val2, todos[val] [val2].id);
        showTodo.innerHTML += '<div>Posted on: ' + todos[val][val2].created_on + '</div> <div>Todo: ' + todos[val] [val2].description + '</div><button class="remove-btn" onclick"deleteTodo(val, val2)">REMOVE</button><button class="edit-btn">EDIT</button><br>'
      }
    }
    console.log(val, todos[val]);
  }
}

function fetchAllTodos() {
    fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
      method: 'GET',
      headers: {
        'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
      }
    })
      .then(result => {
        if (!result.ok) {
          throw new Error('No luck');
        }
  
        return result.json();
      })
      .then(function(result) {
        console.log(result);
        showTodos(result);
      })
      .catch(function(error){
        console.error(error)
      });
  }
  
  function postNewTodo() {
    const body = {
      description: 'Test2',
      done: false,
    };
  
    fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo', {
      method: 'POST',
      headers: {
        'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(result => {
        if (!result.ok) {
          throw new Error('No luck');
        }
  
        return result.json(); // JSON.parse
      })
      .then(function(result) {
        console.log(result)
      })
      .catch(function(error){
        console.error(error)
      });
  }
  
  function updateTodo(id) {
    const body = {
      description: 'Test3',
      done: true,
    };
  
    fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/' + id, {
      method: 'PATCH',
      headers: {
        'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(result => {
        if (!result.ok) {
          throw new Error('No luck');
        }
  
        return result.json(); // JSON.parse
      })
      .then(function(result) {
        console.log(result)
      })
      .catch(function(error){
        console.error(error)
      });
  }
  
  function deletetodo(id) {
    fetch('https://phpstack-224488-1624928.cloudwaysapps.com/_/items/todo/' + id, {
      method: 'DELETE',
      headers: {
        'Authorization': 'bearer ABcEHA2kcrKY4a6ipUA3',
      },
    })
      .then(result => {
        if (!result.ok) {
          throw new Error('No luck');
        }
  
        console.log(result);
      })
      .catch(function(error){
        console.error(error)
      });
  }
  // postNewTodo();
  // updateTodo(2);
  // deleteTodo(3);
  fetchAllTodos();