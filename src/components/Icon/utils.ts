import {IconDefinition, IconLookup,  findIconDefinition} from "@fortawesome/fontawesome-svg-core";
import {IconName, IconPrefix} from "@fortawesome/fontawesome-common-types";
import {usedIconPrefixes} from "../../constants";


export const findIcon = (icon: IconName, prefix?: IconPrefix): IconDefinition | undefined => {
    if(prefix)
        return findIconDefinition({ prefix: prefix, iconName: icon })

    const prefixes: IconPrefix[] = Object.values<IconPrefix>(usedIconPrefixes);
    for(let p of prefixes){
        let iconDef = findIconDefinition({ prefix: p, iconName: icon });
        if(iconDef)
            return iconDef
    }

    return;
}
