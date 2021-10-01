import React, {useEffect} from 'react';
import style from "./Dialog.module.scss";
import {useSelector, useDispatch} from "react-redux"
import {getUserApi} from "@http/PostList"
import {userInfoAc} from "@store/reducers/PostList"

const Dialog = ({user}) => {

    const dispatch = useDispatch();
    let {userInfo} = useSelector((state => state.PostList))

    useEffect(() => {
        dispatch(getUserApi(user.id))
        return () => {
            dispatch(userInfoAc(null))
        }
    }, [dispatch, user])

    return (
        <div className={style.main}>
            <div className={style.thumbnail}>
                <img src={user.thumbnailUrl} alt={user.title}/>
            </div>
            <div>
                <div className={style.title}>
                    {user.title}
                </div>
                <div className={style.desc}>
                    {userInfo ? userInfo.body : "Loading..."}
                </div>
            </div>
        </div>
    );
};

export default Dialog;
