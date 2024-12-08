import React from 'react'

function KanbanBoardCard({boards}) {
    return (
        <div className="row">
            {boards.map((board, index) => (
                <div className="col-sm-8 col-md-3" key={board.id}>
                    <div className="box">
                        <a className="download-url" target="blank" href={`/kanban-board/${board.id}`}>
                            <img src={`https://picsum.photos/960/540?random=${board?.id}?t=${Date.now()}`} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <div className="caption mb-0">
                                <div className="text-break text-end">
                                    {board.title}
                                    <p className="text-break text-muted">
                                        {board.cards.length} cards
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default KanbanBoardCard