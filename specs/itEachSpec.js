import itEachModule from "it-each";
itEachModule({ testPerIteration: true });
import jsonData from "../fixture/jsonData";
import changeData from "../fixture/changeData"

describe("itEach change file", () => {
    it.each(changeData, "changing %s %s with %s %s", ["parent", "field", "newValue", "description",], async (t, next) => {
        let thisData = JSON.parse(JSON.stringify(jsonData));  // this is needed to reset the values to the what is in the object
        console.log("\nthe thisData before the change: " + JSON.stringify(thisData));
        if (Array.isArray(thisData[t.parent])) {
            thisData[t.parent][0][t.field] = [t.newValue];
        } else {
            thisData[t.parent][t.field] = [t.newValue];
        }

        console.log("\nthe thisData after the description: " + JSON.stringify(thisData));
        next();
    })
});
