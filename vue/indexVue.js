new Vue({
    el: '#app',
    data: {
        registrationBtnText: 'Регистрация',
        loginBtnText: 'Вход',
        indexBtnText: 'ForteIdea',
        instructionBtnText: 'Инструкция',
        forgotPasswordBtnText: 'Забыли Пароль',
        placeholderLogin: 'Логин',
        placeholderPassword: 'Пароль'
    },
    methods:{
        loginBtn: function(){

        }
    }
});

console.log("username: " + localStorage.getItem("username"));
if (localStorage.getItem("username") != null ){
    window.location.href = './main.html';
} else {
    localStorage.setItem("username","zbayghozha");
}
