import DatingCard from 'react-tinder-card';
import './DatingCards.css';
import { useEffect, useState } from 'react';
import myAxios from './axios.js';


const DatingCards = () => {
    const [people, setPeople] = useState([])
   useEffect(() => {
          const fetchPost = async () => {
          try {
              const response = await myAxios.get('/cards');
              const data = response.data;
              setPeople(data)
              console.log(data)
                }
                catch (error) {
                    console.log(error)
                }
      }
          
          fetchPost()

      }, [])
    const swiped = (direction, nameToDelete) => {
        console.log("receiving " + nameToDelete)

    }
    const outOfFrame = (name) => {
         console.log(name)

    }


    return (
        <div className='datingCards'>
            <div className='datingCards__container'>
                {people && people.map((person) => (
                    <DatingCard
                        className='swipe'
                        key={person._id}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >

                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className='card'>
                            <h3>@{person.name}</h3>
                        </div>
                        </DatingCard>
                ))}
            </div>
        </div>
    )
}

export default DatingCards
