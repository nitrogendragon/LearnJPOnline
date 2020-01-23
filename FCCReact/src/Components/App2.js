import React from 'react'
import ContactCard from './ContactCard'
export default function App2() {
    return (
        <div>
            < ContactCard 
                contact={{name:"Mr. Whiskerson",
                imgUrl:"http://placekitten.com/300/200/",
                phone:"(212) 555-1234",
                email:"mr.whiskaz@catnap.meow"}}
                
                />
            < ContactCard 
                contact={{name:"Lord Neko",
                imgUrl:"http://placekitten.com/400/200/",
                phone:"(212) 555-1424",
                email:"lord.neko@catnap.meow"}}
                
                />
            < ContactCard 
                contact={{name:"Mr. Spotty",
                imgUrl:"http://placekitten.com/500/200/",
                phone:"(212) 555-1235",
                email:"mr.spotty@catnap.meow"}}
                
                />
            < ContactCard 
                contact={{name:"Mr. Fluffywuffy",
                imgUrl:"http://placekitten.com/100/300/",
                phone:"(212) 553-2234",
                email:"mr.fluffywuffy@catnap.meow"}}
                
                />
        </div>
    )
}
