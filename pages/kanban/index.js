import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash, faPlus, faFloppyDisk, faCross, faClose} from "@fortawesome/free-solid-svg-icons";
import CardKanban from "../../components/kanban/CardKanban";
import Popup from "reactjs-popup";

/**
 *    * criar colunas no quadro.
 *    * reorganizar colunas, sendo possível trocar a posição das colunas com DragNDrop.
 *    * cadastrar cards para colunas.
 *    * Reorganizar cards entre as colunas, sendo possível arrastar um card de uma coluna pra outra.
 *    * Deletar Cards e Colunas.
 *    * Na tela principal deve ser possível acessar os quadros (Projetos) criados e cadastrar um novo.
 *    * Ao clicar na em um quadro deve ser aberto o mesmo com o estado anterior deixado pelo usuário. Todas as alterações devem ser persistidas em cache.
 * @returns {Element}
 * @constructor
 */


const resetLocalStorage = () => {
    let starterData = [
        {
            id: 1,
            title: "To Do",
            cards: []
        },
        {
            id: 2,
            title: "In Progress",
            cards: []
        },
        {
            id: 3,
            title: "Done",
            cards: []
        }];
    localStorage.setItem('dataKanban', JSON.stringify(starterData));
}

function Kanban() {
    const loading = useSelector((state) => state.loading.value);
    const [popup, setPopup] = useState(false);
    const [currentColumn, setCurrentColumn] = useState(null);
    const [data, setData] = useState();
    const [draggedCard, setDraggedCard] = useState(null);
    const [dragOverColumn, setDragOverColumn] = useState(null);
    const [formData, setFormData] = useState({
        id: null,
        title: '',
        description: ''
    });

    function onSaveCard() {

        // find new id that doesn't exist
        let newId = Math.floor(Math.random() * 1000);
        let found = true;
        while (found) {
            found = false;
            data.forEach((column) => {
                if (column.cards) {
                    column.cards.forEach((card) => {
                        if (card.id === newId) {
                            found = true;
                        }
                    });
                }
            });
            if (found) {
                newId++;
            }
        }

        let newCard = {
            id: newId,
            title: formData.title,
            description: formData.description
        }

        let newData = data.map((column) => {
            if (column.title === currentColumn) {
                if (!column.cards) {
                    column.cards = [];
                }
                column.cards.push(newCard);
            }
            return column;
        });
        setData(newData);

        // close popup
        setPopup(false);
    }

    function onUpdateCard(card) {
        let newData = data.map((column) => {
            if (column.title === currentColumn) {
                column.cards = column.cards.map((c) => {
                    if (c.id === card.id) {
                        c.title = card.title;
                        c.description = card.description;
                    }
                    return c;
                });
            }
            return column;
        });
        setData(newData);
        setPopup(false);
    }

    const onSubmitNewCard = (e) => {
        e.preventDefault();
        // add to data

        if (formData.id) {

            onUpdateCard(formData);
        } else {
            onSaveCard();
        }
    }

    const addCard = (column, card) => {
        setCurrentColumn(column);

        if (card) {
            setFormData(card);
        } else {
            setFormData({
                id: null,
                title: '',
                description: ''
            });
        }
        setPopup(true);
    }

    useEffect(() => {
        if (data) {
            localStorage.setItem('dataKanban', JSON.stringify(data));
        }
    }, [data]);

    useEffect(() => {
        const storedData = localStorage.getItem('dataKanban');
        if (storedData && storedData !== 'undefined' && storedData !== 'null' && storedData !== '[]') {
            setData(JSON.parse(storedData));

        } else {
            console.log('resetting localStorage');
            resetLocalStorage();
            setData(JSON.parse(localStorage.getItem('dataKanban')));
        }
    }, []);

    function deletarCard(title, card) {
        let newData = data.map((column) => {
            if (column.title === title) {
                column.cards = column.cards.filter((c) => c.id !== card.id);
            }
            return column;
        });
        setData(newData);
    }

    const onDragStart = (card, columnTitle) => {
        setDraggedCard({card, columnTitle});
    };

    const onDragLeave = () => {
        setDragOverColumn(null);
    };

    const onDragOver = (e, columnTitle) => {
        e.preventDefault();
        setDragOverColumn(columnTitle);
    };

    // Handle drop
    const onDrop = (destinationColumnTitle) => {
        if (!draggedCard) return;

        const {card, columnTitle: sourceColumnTitle} = draggedCard;

        const updatedData = data.map((column) => {
            if (column.title === sourceColumnTitle) {
                column.cards = column.cards.filter((c) => c.id !== card.id);
            }
            return column;
        });

        const destinationColumn = updatedData.find(
            (column) => column.title === destinationColumnTitle
        );
        destinationColumn.cards.push(card);

        setData(updatedData);
        setDraggedCard(null);
        setDragOverColumn(null);
    };

    return (
        //   3 colunas
        <>
            <div className="container blurredbackground" style={{filter: popup ? "blur(10px)" : "none"}}>
                <div className="row">
                    {data?.map((column) => (
                        <div className={`col-md-4 ${dragOverColumn === column.title ? "drag-over" : ""}`}
                             key={column.id}
                             onDragOver={(e) => onDragOver(e, column.title)}
                             onDragLeave={onDragLeave}
                             onDrop={() => onDrop(column.title)}>
                            <CardKanban
                                column={column}
                                addCard={addCard}
                                deletarCard={deletarCard}
                                onDragStart={onDragStart}
                                draggedCard={draggedCard}
                            />

                            <button className="btn btn-outline-secondary" onClick={() => addCard(column.title)}>
                                <FontAwesomeIcon icon={faPlus}/> Adicionar
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Popup open={popup} closeOnDocumentClick onClose={() => setPopup(false)}>
                {/*outline pupup*/}
                <div className={"card"} draggable>
                    {/* right side*/}
                    <div className={"card-header d-flex"}>
                        <h3 className={"mx-0"}>{formData.id ? "Editar" : "Novo"}</h3>
                        <a href="#" className={"float-right text-danger ms-auto "}
                           onClick={() => setPopup(false)}>
                            <FontAwesomeIcon icon={faClose}/>
                        </a>
                    </div>

                    <form onSubmit={onSubmitNewCard}>
                        <div className="form-group mt-2 mb-lg-3 mx-2">
                            <label htmlFor="title">Título</label>
                            <input type="text" className="form-control" id="title"
                                   value={formData.title}
                                   onChange={(e) => setFormData({...formData, title: e.target.value})}/>
                        </div>
                        <div className="form-group mb-lg-3 mx-2">
                            <label htmlFor="description">Descrição</label>
                            <textarea className="form-control" id="description"
                                      value={formData.description}
                                      onChange={(e) => setFormData({...formData, description: e.target.value})}/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-secondary mt-4">
                                <FontAwesomeIcon icon={faFloppyDisk}/> Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </Popup>

            <style jsx>{`
                .drag-over {
                    transition: background-color 0.3s ease-in-out;
                    border: 2px dashed #676767;
                }
            `}</style>
        </>
    );
}

export default Kanban;