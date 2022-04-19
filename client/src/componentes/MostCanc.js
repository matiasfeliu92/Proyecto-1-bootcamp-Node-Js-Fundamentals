import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

class MostCanc extends React.Component {

    state = {
        canciones: []
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:4000/canciones')
        console.log(res.data)
        this.setState({canciones: res.data})
    }

    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <Link to="/guardar" className="btn btn-primary">Ingresa tu cancion favorita</Link>
                    <div className='col'>
                        <table className='table'>
                            <thead className='table-primary'>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Titulo</th>
                                    <th>Autor</th>
                                    <th>Album</th>
                                    <th>Genero</th>
                                    <th>Duracion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.canciones.map(cancion => (
                                    <tr key= {cancion.id}>
                                        <td><img className="img-thumbnail rounded img-fluid" src={cancion.imagen} alt="img" /></td>
                                        <td>{cancion.titulo}</td>
                                        <td>{cancion.autor}</td>
                                        <td>{cancion.album}</td>
                                        <td>{cancion.genero}</td>
                                        <td>{cancion.duracion}</td>
                                        <td>
                                            {/* <Link to={`/edit/${cancion.id}`} className='btn btn-info'>Editar</Link> */}
                                            <button className='btn btn-danger'>Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default MostCanc