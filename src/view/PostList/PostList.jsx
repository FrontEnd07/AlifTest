import React, {useEffect, useState} from 'react';
import style from './PostList.module.scss';
import Modal from "@components/Modal";
import {getPhotosApi} from "@http/PostList";
import {Dialog, Search} from "@view/PostList/index"
import {useDispatch, useSelector} from "react-redux";

const PostList = () => {

    const dispatch = useDispatch()
    const [page, setPage] = useState(10)
    const [pageList, setPageList] = useState(10)
    const [showModal, setShowModal] = useState({open: false})
    const [result, setResult] = useState(null)

    let {list, search, tags} = useSelector(state => state.PostList)
    useEffect(() => {
        dispatch(getPhotosApi())
    }, [dispatch])

    useEffect(() => {
        const results = list?.filter(title => title.title.toLowerCase().includes(search?.toLowerCase()))
        search !== "" ? setResult(results) : setResult(list)
    }, [search, list])

    useEffect(() => {
        if (tags.length > 0) {
            var results = []
            list?.filter(title => {
                return tags.forEach((e) => {
                    if (title.title.toLowerCase().includes(e.toLowerCase())) {
                        results.push(title)
                    }
                })
            })
            setResult(results)
        }
        if (tags.length === 0 && !result) {
            setResult(list)
        }
    }, [dispatch, tags])

    return (
        <div className={style.main}>
            <div className={style.header}>
                <img src="https://alifmobi.tj/images/mobi_logo_eng.svg" alt=""/>
            </div>
            <div className={style.list}>
                <div className={style.LHeader}>
                    <Search/>
                </div>
                <div className={style.LMain}>
                    {result ?
                        <>
                            {result.slice(0, page).map((el, index) => (
                                <div key={index} onClick={() => setShowModal({
                                    open: true,
                                    user: el
                                })}>
                                    <div>
                                        <img src={el.thumbnailUrl} alt={el.title}/>
                                    </div>
                                    <div className={style.title}>
                                        {el.title}
                                    </div>
                                </div>
                            ))}
                        </>
                        : <div>Loadding...</div>}

                </div>
                <div className={style.LPagination}>
                    {result?.length > page &&
                    <>
                        <div>
                            <button onClick={() => setPage(page + pageList)}>Показать еще {pageList} блоков!</button>
                        </div>
                        <div>
                            <select value={pageList} onChange={(e) => {
                                setPage(parseInt(e.target.value))
                                setPageList(parseInt(e.target.value))
                            }}>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                    </>
                    }
                </div>
            </div>
            {showModal.open && <Modal onToggle={() => setShowModal({open: false})}>
                <Dialog user={showModal.user}/>
            </Modal>}
        </div>
    );
};

export default PostList;
