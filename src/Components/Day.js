import React from 'react'

const Day = ({day, onClick}) => {

    return (
        <>
        <td onClick={onClick} >{day}</td>
        </>
    )
}

export default Day


