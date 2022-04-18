import React, {Component} from 'react'
import './listaCanciones.css'
import axios from 'axios'

class ListaCanciones extends Component {

    state = {
        canciones: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/canciones')
        console.log(res)
        this.setState({canciones: res.data})
        console.log(this.state.canciones)
    }

    render() {
        return (
            <div className='container'>
                <h1>MUSIIIIIC PLEASEEEEE</h1>
                <div className='content'>
                    {
                        this.state.canciones.map(cancion => 
                            <div className='cancionCard'>
                                <h2>{cancion.titulo}</h2>
                                <h3>{cancion.autor}</h3>
                                <h3>{cancion.album}</h3>
                                <h3>{cancion.genero}</h3>
                                <p>{cancion.duracion}</p>
                                <img className='imagenes img-fluid' src={cancion.imagen} alt= 'imagen 1'/>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

}

export default ListaCanciones