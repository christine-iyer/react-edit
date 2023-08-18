import ToDo from "./Todo"
export default function TodoList({
     todos, 
     addTodo, 
     completeTodo, 
     editTodo, 
     deleteTodo
})

{
     return(
          <>
          <h1>Add To Do</h1>
          <input
          type="text"
          onKeyDown={(e)=> {
               e.key ==="Enter" && addTodo(e)
          }}
          />
          {todos.length ? (
               <>
               <h1>Todo Items</h1>
               <ul className="todoist">
                    {todos
                    .filter((i)=> !i.completed)
                    .map((todo)=> {
                         return(
                              <ToDo
                              key={todo.id}
                              todo={todo}
                              completeTodo={completeTodo}
                              editTodo={editTodo}
                              deleteTodo={deleteTodo}
                              />
                              )
                              })}
               </ul>
               <h1>Completed To Dos</h1>
               <ul className="todoist">
                    {todos
                    .filter((i)=> i.completed)
                    .map((todo)=> {
                         return(
                              <ToDo
                              key={todo.id}
                              todo={todo}
                              completeTodo={completeTodo}
                              editTodo={editTodo}
                              deleteTodo={deleteTodo}
                              />
                              )
                              })}
               </ul>

               </>
          ) : (<h1>no todos added yet</h1>
          )}
          
          </>
     )
}