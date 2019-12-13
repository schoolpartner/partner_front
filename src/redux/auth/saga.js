
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
    LOGIN_USER,
    REGISTER_USER,
} from '../actions';

import {
    loginUserSuccess,
} from './actions';

import api from '../../services/api'
import { login } from '../../services/auth'

function* loginWithEmailPassword({ payload }) {
    const { user, history } = payload
    try {
        const data = yield call(loginWithEmailPasswordAsync, user)

        if (data.ok) {
            yield put(loginUserSuccess(data.user))
            login(data.token)
            history.push('/app/gogo')
        }
    } catch (err) {

    }
}

const loginWithEmailPasswordAsync = async payload => {
    const { data } = await api.post('/api/auth/login', payload)

    return data
}


function* registerWithEmailPassword({ payload }) {
    const { user, history } = payload
    try {
        const data = yield call(registerWithEmailPasswordAsync, user)

        if (data.ok) {
            history.push('/user/login')
        }
    } catch (err) {

    }
}

const registerWithEmailPasswordAsync = async payload => {
    const { data } = await api.post('/api/auth/register', payload)

    return data
}

export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchRegisterUser)
    ]);
}