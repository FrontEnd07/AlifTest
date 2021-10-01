import React, {useState, useEffect} from 'react';
import style from "./Search.module.scss";
import {LField} from "@components/Form"
import {useDispatch, useSelector} from "react-redux"
import {searchAc, tagsAc} from "@store/reducers/PostList";


const ENTER_KEY = 13;
const COMMA_KEY = 188;
const BACKSPACE_KEY = 8;

const Search = () => {

    const dispatch = useDispatch()
    let {search} = useSelector(state => state.PostList)

    const [tags, setTags] = useState({arr: [], value: ""})

    const handleKeyUp = (e) => {
        const key = e.keyCode;

        if (key === ENTER_KEY || key === COMMA_KEY) {
            addTag();
        }
    }

    useEffect(() => {
        dispatch(tagsAc(tags.arr))
    }, [tags, dispatch])

    const addTag = () => {
        let tag = search.trim();

        tag = tag.replace(/,/g, "");

        if (!tag) {
            return;
        }
        dispatch(searchAc(""))
        setTags({
            arr: [...tags.arr, tag],
        });
    }

    const hendlerChange = (e) => {
        let {value} = e.target
        dispatch(searchAc(value))
    }

    const editPrevTag = () => {
        let {arr} = tags
        const tag = arr.slice(0, arr.length - 1);
        setTags({arr: tag, value: tag});
    }

    const handleKeyDown = (e) => {
        const key = e.keyCode;
        if (key === BACKSPACE_KEY && !search) {
            editPrevTag();
        }
    }
    return (
        <div className={style.main}>
            <LField type="text"
                    onKeyUp={handleKeyUp}
                    onKeyDown={handleKeyDown}
                    value={search}
                    onChange={(e) => hendlerChange(e)}
                    placeholder="поиск"/>
            <small>
                Нажмите <code>enter</code> или <code>,</code> чтобы добавить тег. Нажмите клавишу {" "}
                <code>backspace</code> чтобы удалить тег.
            </small>
            {tags?.arr?.length > 0 &&
            <ul>
                {tags?.arr?.map((tag, i) => (
                    <li key={tag + i} className="tag">
                        {tag}
                    </li>
                ))}
            </ul>
            }
        </div>
    );
};

export default Search;
