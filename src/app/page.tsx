import { Console } from 'console'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <h1>Boa tarde!</h1>
    
  )
}

function show(one: object, dog: string)  {
  console.log(one)
  console.log(dog)
}

show({ alex:15 }, 'dog')







const wather = () => {
  const carro = 'combustivel'

  return carro
};

const wather1 = wather()

console.log(wather1)