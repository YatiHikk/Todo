console.log('start')
const createBtn = document.querySelector('.btn')
const root = document.querySelector('.root')
const text = document.querySelector('.text')

const createTask = (value) => {
  const task = document.createElement('div')
  const text = document.createElement('span')
  const deleteBtn = document.createElement('button')

  text.innerHTML = value;
  deleteBtn.innerHTML = "delete"

  task.appendChild(text)
  task.appendChild(deleteBtn)


    text.classList.add("textTask")
    task.classList.add("toDo")
    deleteBtn.classList.add("delBtn")

  root.appendChild(task)


  deleteBtn.addEventListener('click', ()=> {
    root.removeChild(task)
  })

  text.addEventListener('click', ()=>{
    text.classList.toggle("delText")
  })

}

createBtn.addEventListener('click', ()=>{
  const value = text.value;
  createTask(value)
})


