to make action and js file in one shot do this
for name in namefolder namefolder ; do touch $name/action.js $name/reducer.js; done


# Notes:
## 1. useSelector => untuk mengakses nilai state dalam store
  const states = useSelector((states)=> states) 
  kalau spesifik
  const states = useSelector((states)=> states.todos)
## 2. useDispatch => mengkases fungsi dispatch dalam store jadi bisa diubah pada komponen react
 const dispatch = useDispatch()
 function onAddTodo(text) {
    const id = `todo-${+ new Date()}`
    dispatch(addTodoActionCreator({ id, text }));
  }