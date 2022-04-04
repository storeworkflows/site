import React, {FC} from 'react';
import "./List.scss"
import {IList} from "../../types/interfaces/IList";
import classnames from "classnames";

const List: FC<IList> = ({listOptions, className}) => {

    const classes = classnames("list", {
        [`${className}`]: className
    })
    return <ol className={classes}>
        {listOptions.map((text, index) => {
            const classes = classnames({"with-zero": index<9})
            return <><li key={index} className={classes}>{text}</li><br/></>
        })}
    </ol>;

}

export default List