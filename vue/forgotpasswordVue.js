new Vue({
    el: '#forgotpassword',
    data: {
        registrationBtnText: 'Регистрация',
        loginBtnText: 'Вход',
        indexBtnText: 'ForteIdea',
        instructionBtnText: 'Инструкция',
        forgotPasswordBtnText: 'Забыли Пароль',
        placeholderRegistrationLogin: 'Логин',
        plholdSendPassword: 'Отправить пароль',
        errors: [],
        login: null
    },
    methods:{
        loginFunc: function (e) {
            console.log("test");
            console.log(this.login);
            if (this.login !=null) {
                this.errors.clear();
                console.log("запрос отправлен");
                axios.post('http://wmappdevuv02.fortebank.com:5555/restv2/customerAuth/restorePassword', {login: this.login})
                    .then(res => {
                        console.log(response);
                        localStorage.setItem("error", response);
                    })
                    .catch(err => {// catch error
                        console.log(error);
                        localStorage.setItem("error", response);
                        });
                return true;
            };

            this.errors = [];

            if (!this.name) {
                this.errors.push('Нужно заполнить поле логин');
            }

            e.preventDefault();
        }
    }
});
