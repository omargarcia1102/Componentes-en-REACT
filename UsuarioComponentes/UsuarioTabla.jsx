import React from 'react';
import '../estilosCss/TablaEstilos.css';

const UsuarioTabla = () => {
    const pedidos = [
        { cod: 'P001', nombre: 'Queso Paisa', cant: '2000', unidad: 'kg' },
        { cod: 'P001', nombre: 'Queso Paisa', cant: '2000', unidad: 'kg' },
        { cod: 'P001', nombre: 'Queso Paisa', cant: '2000', unidad: 'kg' },
        { cod: 'P001', nombre: 'Queso Paisa', cant: '2000', unidad: 'kg' },
    ];

    return (
        <div className="seccion-tabla">
            <table>
                <thead>
                    <tr>
                        <th className='th-config'>Codigo Productos</th>
                        <th className='th-config'>Nombre de Productos</th>
                        <th className='th-config'>Cantidad Comprada</th>
                        <th className='th-config'>Unidad de medida</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map((p, i) => (
                        <tr key={i}>
                            <td className='td-config'>{p.cod}</td>
                            <td className='td-config'>{p.nombre}</td>
                            <td className='td-config'>{p.cant}</td>
                            <td className='td-config'>{p.unidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default UsuarioTabla;