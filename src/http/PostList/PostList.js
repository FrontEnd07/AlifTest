import {$host} from "@http";
import {listAc, userInfoAc} from "@store/reducers/PostList"

export const getPhotosApi = () => async (dispatch) => {
    try {

        const {data} = await $host.get(`photos`)
            .catch((e) => {
                if (e.response) {
                    console.log(e.response.status)
                    console.log(e.response.data)
                }
            })

        dispatch(listAc(data))

    } catch (e) {
        console.log(e.message)
    }
}

export const getUserApi = (id) => async (dispath) => {
    try {
        const {data} = await $host.get(`posts/${id}`)
        dispath(userInfoAc(data))
    } catch (e) {
        console.log(e.message)
    }
}