import { combineReducers } from 'redux'
import Track from './Track'
import Favlist from './Favlist'

const Reduxify = combineReducers({
    Track,
    Favlist
})

export default Reduxify
