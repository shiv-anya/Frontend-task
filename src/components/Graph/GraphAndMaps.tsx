import React, {Fragment} from "react";
import Graph from "./Graph"

const GraphAndMaps = () => {
    return <Fragment>
    <div className="w-5/6 fixed right-0 h-full overflow-y-scroll scroll-smooth">
        <div><Graph/></div>
    </div>
</Fragment>
}

export default GraphAndMaps;