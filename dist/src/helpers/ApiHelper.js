"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiHelper = void 0;
class ApiHelper {
    static get(app, url, handler, options) {
        app.get(url, {}, handler);
    }
    static post(app, url, handler) {
        app.post(url, {}, handler);
    }
    static put(app, url, handler) {
        app.put(url, {}, handler);
    }
    static delete(app, url, handler) {
        app.delete(url, {}, handler);
    }
    static callFailed(error, status) {
        const payload = {
            status: status === undefined ? 404 : status,
            message: error || "Something went wrong, Please try again",
            body: {},
        };
        return payload;
    }
    static missingParameters(error, status) {
        const payload = {
            status: status === undefined ? 400 : status,
            message: error || "Required parameters are missing",
            body: {},
        };
        return payload;
    }
    static success(payload = {}) {
        return {
            status: 200,
            message: "Success",
            body: payload,
        };
    }
}
exports.ApiHelper = ApiHelper;
