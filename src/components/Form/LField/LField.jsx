import React from 'react';
import style from "./LField.module.scss";

export const LField = props => {

    const {
        appClassName,
        placeholder,
        onChange,
        type,
        ...rest
    } = props;

    return (
        <div className={`${style.main} ${appClassName ? appClassName : ""}`}>
            <input {...rest} placeholder={placeholder} type={type ? type : "text"} onChange={onChange}/>
        </div>
    );
};
