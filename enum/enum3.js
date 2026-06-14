"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = express();
var ResponseStatusCode;
(function (ResponseStatusCode) {
    ResponseStatusCode[ResponseStatusCode["Success"] = 200] = "Success";
    ResponseStatusCode[ResponseStatusCode["NotFound"] = 404] = "NotFound";
    ResponseStatusCode[ResponseStatusCode["Error"] = 500] = "Error";
})(ResponseStatusCode || (ResponseStatusCode = {}));
app.get("/", (req, res) => {
    if (!req.query.userId) {
        res.status(ResponseStatusCode.NotFound).json({}); /* As a beginner a person might get confused if we directly write status code of 404 so it will helpful if we use enum constraints like here "ResponseStatusCode.NotFound". */
    }
});
//# sourceMappingURL=enum3.js.map