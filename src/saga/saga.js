import { useraction } from "../actions/action";

import { takeEvery, call, put } from 'redux-saga/effects'



function* register(user) {

    try {



        const result = yield call(() => { registerapi(user) })

        yield put(useraction.Signupsuccess(result))

    }

    catch (err) {

        yield put(useraction.Signupfail(err))

    }

}
function registerapi(user) {

    const customer = {

        "customer": {

            "email": user.payload.email,

            "firstname": user.payload.firstname,

            "lastname": user.payload.lastname,

            "store_id": 3

        },

        "password": user.payload.password



    }

    console.log(user)

    console.log(JSON.stringify(customer))

    const requestoptions = {

        method: 'POST',

        headers: {

            'Authorization': 'Bearer alva7ays2d36i0tsu95gnp8mseqsk3xi',

            'Content-Type': 'application/json'

        },

        body: JSON.stringify(customer)

    }

    return fetch('http://cf467543a5.nxcli.net/rest/all/V1/customers', requestoptions).then(data => { console.log(data) });




}
export function* fetchapi() {

    yield takeEvery('signuprequest', register)

    yield takeEvery('loginrequest', login)



}



//login



function* login(user) {

    try {



        const result1 = yield call(() => { return loginapi(user) })

        yield put(useraction.LoginSuccess(result1))

        console.log(result1)

    }

    catch (err) {

        yield put(useraction.LoginFail(err))

    }

}
function loginapi(user) {

    const customer = {

       

            "username": user.payload.username,

            "password": user.payload.password



    }

    console.log(user)

    console.log(JSON.stringify(customer))

    const requestoptions = {

        method: 'POST',

        headers: {

            'Content-Type':'application/json',

        'Authorization':'Bearer 8fi40i66dtyiku1vmrxrkjqmdjtyuy93'

        },

        body: JSON.stringify(customer)

    }

    return fetch('http://cf467543a5.nxcli.net/jewellery_store_view/rest/V1/integration/customer/token', requestoptions);




}