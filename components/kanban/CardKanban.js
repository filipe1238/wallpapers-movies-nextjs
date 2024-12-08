import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faEdit, faFloppyDisk, faTrash} from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";

function CardKanban({column, addCard, deletarCard, onDragStart, draggedCard}) {

    return (
        <div className="card">
            <div className="card-header">
                {column.title}
            </div>
            <div className="card">
                <div className="container-fluid">
                    <div className="row">
                {column.cards.map((card) => (

                    <div
                        key={card.id}
                        className={`card-body col-sm-8 col-md-6 ${
                            draggedCard?.card.id === card.id ? "dragging" : ""
                        }`}
                        draggable
                        onDragStart={() => onDragStart(card, column.title)}
                    >
                        <div className="card-body" key={card.id}>
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.description}</p>
                        </div>
                        {/*// edit and delete*/}
                        <div className="card-footer">
                            <button className={"btn border-0"}
                                    onClick={() => addCard(column.title, card)}>
                                <FontAwesomeIcon icon={faEdit}/>
                            </button>
                            <button className={"btn border-0"} onClick={() => {
                                deletarCard(column.title, card)
                            }}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        </div>
                    </div>
                ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .dragging {
                    opacity: 0.6;
                    border: 2px dashed #676767;
                }

                .card-body {
                    margin: 10px 0;
                    padding: 10px;
                    border-radius: 4px;
                    transition: transform 0.2s, box-shadow 0.2s;
                }

                .card-body:hover {
                    transform: scale(1.02);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
}

export default CardKanban;