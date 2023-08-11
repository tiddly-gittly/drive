import { IChangedTiddlers } from 'tiddlywiki';
import { widget as Widget } from '$:/core/modules/widgets/widget.js';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

class DriverWidget extends Widget {
    refresh(_changedTiddlers: IChangedTiddlers) {
        return false;
    }

    async render(parent: Node, _nextSibling: Node) {
        this.parentDomNode = parent;
        this.execute();

        const driverObj = driver();
        driverObj.highlight({
            element: "#some-element",
            popover: {
                title: "Title",
                description: "Description"
            }
        });
    }
}

exports.driver = DriverWidget;