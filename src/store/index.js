import { observable, computed, action } from "mobx"

class Login {
    @observable values = {
        username:'陈如斌',
        password:'',
    }    
    @action 
    Login({username,password}){
        this.username=username
        this.password=password
    }
    @action
    Register({username,password}){
        this.username=username
        this.password=password
    }
    @action
    Resit(values) {
        values=''
    }
}

 export default Login

