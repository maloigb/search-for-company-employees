import axios from "axios";

export default {
    getAllUsers : async() => ((await axios.get('https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all')).data.items),
    getDepartmentUsers : async(nameDepartment: string) => ((await axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${nameDepartment}`)).data.items)
};