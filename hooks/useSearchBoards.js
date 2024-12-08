import {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {setLoading} from "../store/loading/loading";

function useSearchBoards(searchParam) {
    const dispatch = useDispatch();
    const [kanbanBoards, setKanbanBoards] = useState([]);

    const handleSetLoading = (newValue) => {
        dispatch(setLoading(newValue));
    };

    useEffect(() => {
        handleSetLoading(true);
        let kanbanBoards = localStorage.getItem('dataKanban');
        if (kanbanBoards && kanbanBoards.length > 0) {
            // search param pagination
            searchParam.page = searchParam.page ? searchParam.page : 1;
            searchParam.limit = searchParam.limit ? searchParam.limit : 20;
            const offset = (searchParam.page - 1) * searchParam.limit;
            kanbanBoards = JSON.parse(kanbanBoards).slice(offset, offset + searchParam.limit);
            // query
            if (searchParam.query) {
                kanbanBoards = kanbanBoards.filter((board) => board.title.toLowerCase().includes(searchParam.query.toLowerCase()));
            }
        } else {
            kanbanBoards = [
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
            localStorage.setItem('dataKanban', JSON.stringify(kanbanBoards));
        }
        setKanbanBoards(kanbanBoards);
        handleSetLoading(false);

    }, [searchParam, setLoading]);

    return kanbanBoards;
}

export default useSearchBoards