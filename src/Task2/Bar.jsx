import React from 'react'
import cherries from './img/cherries.jpg'
import Card from './Card2'

export default function Section1({columns}) {
   console.log(columns);

    const list = [

        {img: encodeURIComponent(cherries), firstText:'First Text'},
        {img: cherries, firstText:'First Text'},
        {img: cherries, firstText:'First Text'},
        {firstText:'First Text'},
        {img: cherries, firstText:'First Text'},  
    ]

    const listcards = list.map((item, index) => {
        return <Card item = {item} key ={index} />
    })

    return(

        <div className='top-sect' >
            
            <div style={{gridTemplateColumns:`repeat(${columns},0fr)`}} className="select">

             {listcards}

            </div>
        </div>
    )
}