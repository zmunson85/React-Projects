import React, { useState } from "react";        /* Import use state so we can reference these values later */
import ClickTabs from "./ClickTabs";          /* This is creating the user interaction with the tabs, creating the clickthrough below will be how we use the different tab buttons */
import TabContent from "./TabContent";    /* This is the content component, It will be displayed on each tab,  */

const Tabs = props => {
    const [state, setState] = useState({
        selectedTab: 1   /* This will let the user select a specific tab */
    });
    const tabOnClick = (event, value) => {           /* Using state to reference the tab 1 2 or 3 we need to have an Onclick Event to trigger something */
        setState({
            selectedTab: value                     /* OnClick Event Needs to grab a value from state, in this case it will be a tab value, 1 2 or 3 */
        });
    };
    return (
        <div>
            {/* When we map over the selected tabs, we can select them by (1, 2 or 3) because we set up a map to switch between the tabs by setting perameters val,index */}
            <h1>Tabs</h1>
            {[1, 2, 3].map((val, index) => (
                <ClickTabs
                /* the key in this case would be key=[tab 1, tab 2, tab 3] index of the "TABS" */
                    key={index}
                    onClick={e => tabOnClick(e, val)}   /* THIS WILL LET US CLICK BETWEEN THE TABS */
                    selected={state.selectedTab === val}    /* THIS IS GOING TO BE THE TAB THAT WE ARE ON CURRENTLY, YOU SHOULD SEE THE VALUE OF THE TAB JUST LIKE NOTE ABOVE */
                >
                    Tab {val}
                </ClickTabs>  /* Setting up a tab component will allow us to render multiple tabs on the same page by referencing the Tab and It will Display the 3 tabs we need */
            ))}
            <TabContent>Tab {state.selectedTab}  _______I think we made some tabs!!.</TabContent>   {/* This is going to be what is displayed on each tab. We are getting this from state, on a specific tab */}
        </div>
    );
};
export default Tabs;