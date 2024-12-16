import { FunctionComponent } from "react";

import "./styles/_index.scss";
import Card from "src/widgets/card";
import { APP_HEADER } from "./config/constants/base.constants";

export const App: FunctionComponent = () => (
    <div className="app-wrapper">
        <h1>{APP_HEADER}</h1>
        <Card />
    </div>
);
