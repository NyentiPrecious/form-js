import React from 'react'
import cherries from './img/cherries.jpg'
import Card from './card'

export default function Section({columns}) {
   console.log(columns);

    const list = [

        {img: encodeURIComponent(cherries), firstText:'First Text', secondText:'Second Text'},
        {img: cherries, firstText:'First Text', secondText:'Second Text'},
        {img: cherries, firstText:'First Text', secondText:'Second Text'},
        {img: cherries, firstText:'First Text', secondText:'Second Text'},
        {img: cherries, firstText:'First Text', secondText:'Second Text'},
        {img: cherries, firstText:'First Text', secondText:'Second Text'},
        {img: cherries, firstText:'First Text', secondText:'Second Text'},
    ]

    const listcards = list.map((item, index) => {
        return <Card item = {item} key ={index} />
    })

    return(

        <div className='section-container' >
            <div className="leftsection">
              left
            </div>
            <div style={{gridTemplateColumns:`repeat(${columns},1fr)`}} className="rightsection">

             {listcards}

            </div>
        </div>
    )
}