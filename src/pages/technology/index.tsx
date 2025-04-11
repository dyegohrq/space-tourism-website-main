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
                <h3 className={` ${ style['text-present-6']} title ` }><span className="number">03</span>space lounch 101</h3>
                <div className="technology_description">
                    <div className="img_technology">
                        <img src={images.portrait} alt={name} />
                    </div>
                    <div className="description">
                        <ul className="nav_items">
                            {
                                technology.map( (item, index) => (
                                    <li className="nav_item" key={item.name} >
                                        <button 
                                            onClick={ () => setValue(index) }
                                            className={ index === value ? 'active' : '' }
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                ) )
                            }
                        </ul>
                        <div className="text">
                            <h3 className={`${style['text-present-4']} subtitle`} > The terminology </h3>
                            <h1 className={style['text-present-3']} > {name} </h1>
                            <p className={style['text-present-9']} > {description} </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}