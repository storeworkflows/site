import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {IconName} from "@fortawesome/fontawesome-common-types";

import {IIcon} from "../../types/interfaces/IIcon";
import {findIcon} from "./utils";

const defaultIcon: IconName = 'angle-up';
const defaultProps = {
    icon: defaultIcon
};

const Icon: FC<IIcon> = ({
    icon,
    prefix,
    size
}) => {

    const iconDefinition: IconDefinition | undefined = findIcon(icon, prefix)
    if(!iconDefinition)
        return null;

    return <FontAwesomeIcon icon={iconDefinition} size={size}/>
}

Icon.defaultProps = defaultProps;
export default Icon