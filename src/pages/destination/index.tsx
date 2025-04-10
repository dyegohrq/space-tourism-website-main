import { useEffect, useState } from "react";
import data from "../../components/data.json";
import NavItem, { NavItemProps } from "../../components/NavItem";
import { useLocation, useParams } from "react-router";
import './index.css'
import style from '../../components/root.module.css'

export function Destination() {
  const [planets] = useState(data.destinations);
  const [value, setValue] = useState(0);
  const { name, description, distance, images, travel } = planets[value];
  const pathname = useLocation()
  let items: NavItemProps[]  = []
  const { id } = useParams()

  useEffect( () => {
    async function getPlanets() {
      if (id === planets[0].name) {
        setValue(0)
      } else if (id === planets[1].name) {
        setValue(1)
      } if (id === planets[2].name) {
        setValue(2)
      } if (id === planets[3].name) {
        setValue(3)
      }
    }

    getPlanets()
  }, [pathname] )

  planets.forEach( (item) => {
    items.push(
      {
        url: `/destination/${item.name}`,
        label: item.name
      },
    )
  } )

  return (
    <main id="destination">
        <div className="planet_destination">
          <h3 className={ style['text-present-6'] }><span className="number">01</span> Pick your destination</h3>
          <div className="img-planet">
            <img
              src={images.png}
              alt={name} 
            />
          </div>
        </div>
        <div className="description">
          <ul className="nav_Items">
            {
              items.map( (item, index) => (
                <NavItem
                  key={index}
                  label={item.label}
                  url={item.url}
                  isActive={ pathname.pathname === item.url }
                />
              ) )
            }
          </ul>
        
          <h1 className={style['text-present-2']} >{name}</h1>
          <p className={style['text-present-9']} >{description}</p>
          <div className="line"></div>
          <div className="description_distance">
            <div className='distance'>
              <span className={style['text-present-7']}>Avg. Distance</span>
              <span className={style['text-present-6']}> {distance} </span>
            </div>
            <div className="time">
              <span className={style['text-present-7']}>Est. Travel time</span>
              <span className={style['text-present-6']} > {travel} </span>
            </div>
          </div>
        </div>
    </main>
  );
}
