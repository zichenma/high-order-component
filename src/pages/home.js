import React, { PureComponent } from 'react'
import Tabbar from '../components/tabbar'

class Home extends PureComponent {
    render() {
        return (
            <div>
                <img className='bg' src="https://dummyimage.com/400x640/cccccc/000000.png&text=Home" alt="dummyImage" />
            </div>
        )
    }
}

export default Tabbar(Home);