new Vue({
    el: '#issuedetailed',
    data: {
        mainBtnText: 'ForteIdea',
        exitTxt: 'Выход',
        goBackText: 'Назад',
        message: 'comment',
        deleteIssue:'Удалить тему',
        sendComment: 'Отправить',
        changeIssue:'Изменить тему',
        record: {
            id: 0,
            recordId: 0,
            title: '',
            description: '',
            like: 0
        },
        comments: [
            {
                id: 1,
                recordId: 15,
                owner: 'Байгожа Жасулан Аронулы-1',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ' +
                    'Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. ',
                like: true
            },
            {
                id: 2,
                recordId: 16,
                owner: 'Байгожа Жасулан Аронулы-2',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ' +
                    'Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. ',
                like: false
            },
            {
                id: 3,
                recordId: 17,
                owner: 'Байгожа Жасулан Аронулы-3',
                text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ' +
                    'Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. ',
                like: false
            }
        ]
    },
    methods: {
        exitSite: function () {
            console.log("Test");
            if (localStorage.getItem("username") != null) {
                localStorage.removeItem("username");
                window.location.href = './index.html';
            } else {
                window.location.href = './index.html';
            }
        },
        goMain: function () {
            window.location.href = './main.html';
            localStorage.removeItem('comment');
        },
        addComment: function () {
            this.comments.push(
                {
                    id: 4,
                    recordId: 16,
                    owner: 'Байгожа Жасулан Аронулы-1',
                    text: this.message,
                    like: 1
                }
            )
        },
        goCreateIssue: function(){
            window.location.href = './createIssue.html';

        },
        pageInit: function () {
            this.record = JSON.parse(localStorage.getItem('comment'));
        },
        likeComment: function (obj) {
            console.log(obj);
            for (let i = 0; i < this.comments.length; ++i) {
                if (obj.id === this.comments[i].id) {
                    if (this.comments[i].like ===  false) {
                        this.comments[i].like = true;
                        break;
                    } else {
                        this.comments[i].like = false;
                        break;
                    }
                }
            }
        }

    },
    beforeMount() {
        this.pageInit();
    }
})
