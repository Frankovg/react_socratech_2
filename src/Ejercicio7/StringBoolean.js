import React, { useState } from "react";

export const StringBoolean = () => {
  const [producto, setProducto] = useState("");
  const [listaCompra, setListaCompra] = useState([]);
  const [showList, setShowList] = useState(false);
  const [articulo, setArticulo] = useState("");
  const [lista, setLista] = useState([]);

  //CARGO INPUT EN MEMORIA
  const handleChange = (e) => {
    const { value } = e.target;
    setProducto(value);
    // console.log(value);
  };

  //CARGO INPUT EN EL ARRAY
  const handleSubmit = () => {
    //SPREAD
    if (producto !== "") {
      setListaCompra([...listaCompra, producto]);
    }
    setProducto("");
    // console.log(listaCompra);
  };

  //ELIMINO ELEMENTO DE LA LISTA
  const handleDelete = () => {
    setListaCompra(
      listaCompra.filter((elem, index) => index !== listaCompra.length - 1)
    );
  };

  const handleChange2 = (e) => {
    const { value } = e.target;
    setArticulo(value);
    // console.log(value);
  };

  const handleSubmit2 = () => {
    if (articulo !== "") {
      setLista([...lista, articulo]);
    }
    setArticulo("");
  };

  const handleDelete2 = (i) => {
    let opcion = window.confirm(
      `¿Estás seguro que deseas eliminar el elemento?`
    );
    if (opcion === true) {
      setLista(lista.filter((prod, index) => index !== i));
    }
  };

  return (
    <div className="wrapper">
      <div className="lista">
        <h1>Lista compra App</h1>
        <hr />
        <input type="text" value={producto} onChange={handleChange} />
        <button onClick={handleSubmit}>Añadir producto</button>
        <button onClick={handleDelete}>Eliminar producto</button>
        <h3>La superlista</h3>
        {/* Si hay productos en la lista los imprime */}
        {listaCompra && (
          <div className="showList">
            {listaCompra.map((element, index) => {
              return <p key={index}>{element}</p>;
            })}
          </div>
        )}
      </div>

      <div className="lista">
        <h1>EjerArrayBooleano</h1>
        <hr />
        <button onClick={() => setShowList(!showList)}>
          {!showList ? "Mostrar" : "Cerrar"}
        </button>

        {showList && (
          <>
            <h3>FormularioLista</h3>
            <hr />
            <input type="text" value={articulo} onChange={handleChange2} />
            <button onClick={handleSubmit2}>Añadir</button>

            {lista && (
              <div>
                {lista.map((element, index) => {
                  return (
                    <p key={index}>
                      {element}{" "}
                      <button onClick={() => handleDelete2(index)}>
                        Borrar
                      </button>
                    </p>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
