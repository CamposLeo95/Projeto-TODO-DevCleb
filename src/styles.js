import styled from 'styled-components'
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
    background-image: url('../public/assets/img/fantasma.jpg');
    background-repeat: none;
    background-size: cover;
    background-position:center;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: rgba(0, 0, 0, 0.8);
    padding: 30px 20px;
    border-radius: 8px;
    width: 450px;
    
`
export const CardAction = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Input = styled.input`
    outline: none;
    font-size: 16px;
    padding:8px;
    margin-right: 18px;
    border-radius: 5px;
    border: 1px solid #aaaaaa;
    width: 63%;
`

export const Button = styled.button`
    background: #379B8F;
    border-radius: 5px;
    font-weight: 500;
    border: none;
    padding: 8px;
    color: #ffffff;
    font-size: 15px;
    width:30%;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
    }

    &:active{
        opacity: 0.7;
    }
`
export const CardList = styled.div`

    margin-top: 40px;
    text-align: center;

    h3{
        color: #ababab;
    }
`

export const ListItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.finished ? '#aaffaa':'#eeeeee'};
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 10px;
    width:100%;
    
    li{
        list-style: none;
        text-decoration: ${props => props.finished? 'line-through': 'none'} ;
        color:${props => props.finished? '#444444': 'black'} ;
        font-style: ${props => props.finished? 'italic': 'none'} 
    }
`
export const Trash = styled(FcEmptyTrash)`

cursor: pointer;
font-size: 25px;

`
export const Check = styled(FcCheckmark)`

cursor: pointer;
font-size: 25px;

`



