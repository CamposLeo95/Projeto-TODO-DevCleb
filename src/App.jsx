import React from 'react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Container, ToDoList, Input, Button, ListItem, CardAction, Trash, Check, CardList } from './styles'


function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState('')
  
  function handleInput(e){
      setTask(e.target.value)
  }

  function handleClick(){
      if(task){
        setList([...list, {id: uuid(), task, finished: false}])
        setTask(' ')
      }
      
  }

  function handleCheck(id){

    const newList = list.map( item => (
      item.id === id ? {...item, finished: !item.finished} : item
      ))
      setList(newList)
  }

  function handleDel(id){
    
    const newList = list.filter(item => {
      if(item.id !== id){
        return item;
      }
    })
    setList(newList);
  }

  return (
    <Container>
      <ToDoList>
        <CardAction>
        <Input type="text" onChange={handleInput} placeholder="Digite uma tarefa"/>
        <Button onClick={handleClick}>Adicionar</Button>
        </CardAction>
        <ul>
          {
            list.length > 0 ?(
              list.map( ({id, task, finished}) => (
                <ListItem key={ id } finished={ finished }>
                  <Check onClick={() => {handleCheck(id)}}/>
                  <li>{ task }</li>
                  <Trash onClick = {() => handleDel(id)}/>     
                </ListItem>                         
            ))
            ):
            <CardList>
              <h3>Não há tarefas</h3> 
            </CardList>
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
