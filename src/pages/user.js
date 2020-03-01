import React, { PureComponent } from 'react'
import Tabbar from '../components/tabbar'

class User extends PureComponent {
    render() {
        return (
            <div>
                <img className='bg' src="https://dummyimage.com/400x640/cccccc/000000.png&text=User" alt="dummyImage" />
            </div>
        )
    }
}

export default  Tabbar(User)