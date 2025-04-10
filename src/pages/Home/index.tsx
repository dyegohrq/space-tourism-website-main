import './index.css'
import style from '../../components/root.module.css'
import { Link } from 'react-router'

export function Home() {
    return(
        <>
        <main className="container">
            <div className="description">
                    <h2 className={style['text-present-6']} >So, you want to travel to</h2>
                    <h1 className={style['text-present-1']} >Space</h1>
                    <p className={style['text-present-9']} >
                        Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className={`${style['text-present-4']} explore`}>
                    <Link to={'/'} >Explore</Link>
                </div>
        </main>
        </>
    )
}