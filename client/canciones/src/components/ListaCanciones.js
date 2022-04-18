import React, {Component} from 'react'
import axios from 'axios'
import './listaCanciones.css';

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
                <div className='row'>
                    <h1 className='text-center'>Escucha las canciones que mas te gustan</h1>
                    
                        {
                            this.state.canciones.map(cancion => 
                                <div className='content col-md-12 d-flex flex-row mt-2 mb-2 justify-content-evenly align-items-md-center'>
                                    <div className='cancionCard col-md-3'>
                                        <img className='imagenes img-fluid' src={cancion.imagen} alt= 'imagen 1'/>
                                    </div>
                                    <div className='col-md-4'>
                                        <h2>{cancion.titulo}</h2>
                                        <h3>{cancion.autor}</h3>
                                        <h3>{cancion.album}</h3>
                                        <h3>{cancion.genero}</h3>
                                        <p>{cancion.duracion}</p>
                                    </div>
                                    <div className='col-md-2'>
                                        <a className='btn btn-primary' href= {cancion.linkyoutube}>Link Youtube</a>
                                    </div>
                                    <div className='col-md-3'>
                                        <a className='btn btn-primary' href= {cancion.linkyoutube}>Actualizar</a>
                                        <a className='btn btn-primary' href= {cancion.linkyoutube}>Eliminar</a>
                                    </div>
                                </div>
                            )
                        }
                </div>
            </div>
        )
    }

}

export default ListaCanciones