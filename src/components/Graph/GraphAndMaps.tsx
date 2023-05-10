import React, {Fragment} from "react";
import Graph from "./Graph"
import Stats from "./Stats";
import Maps from "./Maps";

const GraphAndMaps = () => {
    return <Fragment>
    <div className="w-5/6 fixed right-0 h-full overflow-y-scroll scroll-smooth pb-56">
            <div><Stats/></div>
            <div><Graph /></div>
            <div><Maps/></div>
    </div>
</Fragment>
}

export default GraphAndMaps;