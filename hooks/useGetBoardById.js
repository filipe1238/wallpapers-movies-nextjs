import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../store/loading/loading";

function UseGetBoardById(id) {
  const [currentBoard, setCurrentBoard] = useState({});
  const dispatch = useDispatch();
  
  const handleSetLoading = (newValue) => {
    dispatch(setLoading(newValue));
  }

  useEffect(() => {
    handleSetLoading(true);
    let kanbanBoards = localStorage.getItem('dataKanban');
    if (kanbanBoards && id) {
        // search param pagination
        const board = JSON.parse(kanbanBoards).find((board) => {
            return board.id === parseInt(id);
        });
        setCurrentBoard(board);
        handleSetLoading(false);
    }
  }, [id]);

  return currentBoard;
}

export default UseGetBoardById;

