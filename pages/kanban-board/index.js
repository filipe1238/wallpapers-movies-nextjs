import React, {useState} from "react";
import {useSelector} from "react-redux";
import NavigateButtonsParams from "../../components/common/NavigateButtonsParams";
import Loading from "../../components/common/Loading";
import useSearchBoards from "../../hooks/useSearchBoards";
import FooterNextPage from "../../components/menu/FooterNextPage";
import KanbanBoardCard from "../../components/kanban/KanbanBoardCard";
import SearchMovies from "../../components/movies/SearchMovies";
import {Dropdown} from "react-bootstrap";
import ImageDownloader from "../../components/common/ImageDownloader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";


function Kanban() {
    const loading = useSelector((state) => state.loading.value);
    const [searchParam, setSearchParam] = useState({page: 1, limit: 20});
    const boards = useSearchBoards(searchParam);
    const router = useRouter();
    return (
        <>
            {/*new button*/}
            <div>
                <div className="d-flex justify-content-between">
                    <div className="">
                        <h3>Listagem de Boards para Tabela Kanban</h3>
                    </div>
                    <div className="">
                        <button className="btn btn-outline-secondary" onClick={() => {
                            router.push('/kanban-board/new');
                        }}>
                            <FontAwesomeIcon icon={faPlus}/> Adicionar
                        </button>
                    </div>
                </div>
            </div>

            <SearchMovies
                searchParam={searchParam}
                setSearchParam={setSearchParam}
            />
            <div className="container-fluid">
                {loading && <Loading/>}
                {!loading && <KanbanBoardCard boards={boards}/>}
            </div>
            <FooterNextPage searchParam={searchParam} setSearchParam={setSearchParam}/>
        </>
    );
}

export default Kanban;