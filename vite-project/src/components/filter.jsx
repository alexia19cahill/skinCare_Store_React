

function Filter({ filtro, setFiltro, buscar }) {
  return (
    <div>
      <input id="buscar" placeholder="Buscar un producto" value={filtro} onChange={(e) => setFiltro(e.target.value)} />
      <button id="botonbuscar" onClick={buscar}>Buscar</button>
    </div>
  );
}

export default Filter;