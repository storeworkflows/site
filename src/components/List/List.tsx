import React, {FC} from 'react';
import "./List.scss"
import {IList} from "../../types/interphases/IList";
import classnames from "classnames";

const List: FC<IList> = ({listOptions}) => {

    return <ol className={"list"}>
        {listOptions.map((text, index) => {
            const classes = classnames({"with-zero": index<9})
            return <li className={classes}>{text}</li>
        })}
    </ol>;

}

export default List