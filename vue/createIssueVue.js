new Vue({
    el: '#createIssue',
    data: {
        mainBtnText: 'ForteIdea',
        exitTxt: 'Выход',
        goBackText: 'Назад',
        record: {
            id: 1,
            recordId: 15,
            title: 'Добро пожаловать ',
            description: 'Не загрузился элемент/запись',
            like: 1
        }
    },
    methods: {
        goMain: function () {
            window.location.href = './main.html';
            localStorage.removeItem('comment');
        },
        exitSite: function () {
            console.log("Test");
            if (localStorage.getItem("username") != null) {
                localStorage.removeItem("username");
                window.location.href = './index.html';
            } else {
                window.location.href = './index.html';
            }
        },
        pageInit: function () {
            this.record = JSON.parse(localStorage.getItem('comment'));
        }
    },
    beforeMount() {
        this.pageInit();
    }
})
