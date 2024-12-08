import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Loading from "../../components/common/Loading";
import {useRouter} from "next/router";
import UseGetBoardById from "../../hooks/useGetBoardById";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFloppyDisk, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";


function KanbanBoard() {
    const loading = useSelector((state) => state.loading.value);
    const router = useRouter();

    const {boardId} = router.query;
    // console.log(boardId);
    const board = UseGetBoardById(boardId);
    const [currentBoard, setCurrentBoard] = useState(
        {
            id: null,
            title: "",
            cards: null
        }
    );

    useEffect(
        () => {
            setCurrentBoard(board);
        },
        [board]
    )

    const updateBoard = (board) => {
        let boards = JSON.parse(localStorage.getItem('dataKanban'));
        let index = boards.findIndex((b) => b.id === board.id);
        boards[index] = board;
        localStorage.setItem('dataKanban', JSON.stringify(boards));
        setCurrentBoard(board);
    }

    const addBoard = (board) => {
        let boards = JSON.parse(localStorage.getItem('dataKanban'));

        console.log(board);
        boards.push(board);
        // console.log(boards);
        localStorage.setItem('dataKanban', JSON.stringify(boards));
        setCurrentBoard(null);

        router.push('/kanban-board').then(r => r);
    }


    const deleteBoard = () => {
        let boards = JSON.parse(localStorage.getItem('dataKanban'));
        // console.log(boards);
        let index = boards.findIndex((b) => b.id === currentBoard.id);

        boards.splice(index, 1);
        localStorage.setItem('dataKanban', JSON.stringify(boards));
        setCurrentBoard(null);
        router.push('/kanban-board').then(r => r);
    }

    const updateOrSave = () => {
        let newBoard = {
            id: currentBoard?.id ? currentBoard.id : getSequenceId(),
            title: currentBoard ? currentBoard.title : "",
            cards: currentBoard?.cards ? currentBoard.cards : []
        }

        if (currentBoard?.id) {
            updateBoard(newBoard);
        } else {
            addBoard(newBoard);
        }
    }

    const getSequenceId = () => {
        let boards = JSON.parse(localStorage.getItem('dataKanban'));
        let ids = boards.map((b) => b.id);
        return Math.max(...ids) + 1;
    }

    return (
        <>
            {loading && <Loading/>}
            {!loading &&
                <>
                    <div className="row">
                        <div className="d-flex justify-content-between">
                            <div className="p-1">
                                <h3>Board</h3>
                            </div>
                            <div className="p-1">
                                <button type="submit" className="btn btn-outline-secondary mt-4" onClick={updateOrSave}>
                                    <FontAwesomeIcon icon={faFloppyDisk}/> Salvar
                                </button>
                                {currentBoard?.id &&
                                <button className="btn btn-outline-secondary mt-4" onClick={deleteBoard} >
                                    <FontAwesomeIcon icon={faTrash}/> Deletar
                                </button>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="title" className={"form-label"}>Título</label>
                                <input type="text" className="form-control form-control-lg"
                                       id="title"
                                       value={currentBoard?.title}
                                       onChange={(e) => setCurrentBoard({...currentBoard, title: e.target.value})}/>
                            </div>
                        </form>
                    </div>
                </>
            }
        </>
    );
}

export default KanbanBoard;