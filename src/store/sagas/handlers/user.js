import { call, put } from "redux-saga/effects";
import { setUser } from "../../redux/user";
import { requestGetUser } from "../request/user";

export function* handleGetUser(action) {
    try {
        const response = yield call(requestGetUser);
        const { data } = response;
        yield put(setUser(data));
    } catch (error) {
        console.log(error);
    }
}
