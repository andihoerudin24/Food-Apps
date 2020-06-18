import axios from 'axios'
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses/',
    headers:{
        Authorization:'Bearer j8mmmXG6v0Yk7CIEV6S65EJ8hvFa_idC09OdAjnFP2TM-MzGg9_VVMlQSNDdz0ktY4-LTCxys3NNZ_52npuDG6DNvhcqld1Dfyit_foSImurabia4xcJwupUMljqXnYx'
    }
})
