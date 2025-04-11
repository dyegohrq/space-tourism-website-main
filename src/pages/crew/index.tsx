import style from '../../components/root.module.css'
import './index.css'
import data from '../../components/data.json'
import { useState } from 'react'

export function Crew() {
    const [crew] = useState(data.crew)
    const [value, setValue] = useState(0)
    const { bio, images, name, role } = crew[value]


    return(
        <main id='crew'>
            <div className="main_content">
                <div className="description">
                    <h3 className={ style['text-present-6'] }><span className="number">02</span> Meet your crew</h3>
                    <div className="description_crew">
                        <div className="text">
                            <h3 className={`${style['text-present-4']} title_role`}> {role} </h3>
                            <h1 className={`${style['text-present-3']}`} > {name} </h1>
                            <p> {bio} </p>
                        </div>

                        <ul className="nav_items">
                            {
                                crew.map( (item, index) => (
                                    <li className="nav_item" key={item.name}>
                                        <button
                                            onClick={ () => setValue(index) }
                                            className={`${ index === value ? 'white' : 'gray' } `}
                                        >

                                        </button>
                                    </li>
                                ) )
                            }
                        </ul>
                    </div>
                </div>
                <div className="img_crew">
                    <img src={images.png} alt={name} />
                </div>
            </div>
        </main>
    )
}