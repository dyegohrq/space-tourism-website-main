import { useState } from 'react'
import data from '../../components/data.json'
import style from '../../components/root.module.css'
import './index.css'

export function Technology() {
    const [technology] = useState(data.technology)
    const [value, setValue] = useState(0)
    const { name, description, images } = technology[value]

    console.log(technology)

    return (
        <main id="technology">
            <div className="main_content">
                <h3 className={ style['text-present-6'] }><span className="number">01</span> Pick your destination</h3>
                <div className="technology_description">
                    <div className="description">
                        <ul className="nav_items">
                            {
                                technology.map( (item, index) => (
                                    <li className="nav_item" key={item.name} >
                                        <button 
                                            onClick={ (e) => setValue(index) }
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ) )
                            }
                        </ul>
                        <div className="text">
                            <h3> The terminology </h3>
                            <h1> {name} </h1>
                            <p> {description} </p>
                        </div>
                    </div>
                    <div className="img_technology">
                            <img src={images.portrait} alt={name} />
                    </div>
                </div>
            </div>
        </main>
    )
}