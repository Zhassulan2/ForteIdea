new Vue({
    el: '#main',
    data: {
        mainBtnText: 'ForteIdea',
        exitTxt: 'Выход',
        createIssue: 'Создать новую тему',
        test: '',
        items: [
            {
                id: 1,
                recordId: 15,
                title: 'Lorem-1.',
                description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ' ,
                like: 1
            },
            {
                id: 2,
                recordId: 16,
                title: 'Lorem-2.',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.' ,
                like: 0
            },
            {
                id: 3,
                recordId: 17,
                title: 'Lorem-3.',
                description: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ' ,
                like: 0
            }
        ]
    },
    methods: {
        exitSite: function () {
            console.log('exitSite');
            if (localStorage.getItem("username") != null) {
                localStorage.removeItem("username");
                window.location.href = './index.html';
            } else {
                window.location.href = './index.html';
            }
        },
        goIdeaPage: function (obj) {
            console.log(JSON.stringify(this.items));
            console.log("");
            console.log(obj);
            localStorage.setItem('comment', JSON.stringify(obj));
            location.href = './issuedetailed.html';
        },
        checkIt: function () {
            return ',ksdf'
        }
    },
    beforeMount() {

        function createCORSRequest (method, url) {
            var xhr = new XMLHttpRequest();
            if ("withCredentials" in xhr) {

                // Check if the XMLHttpRequest object has a "withCredentials" property.
                // "withCredentials" only exists on XMLHTTPRequest2 objects.
                xhr.open(method, url, false);

            } else if (typeof XDomainRequest != "undefined") {

                // Otherwise, check if XDomainRequest.
                // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
                xhr = new XDomainRequest();
                xhr.open(method, url);

            } else {

                // Otherwise, CORS is not supported by the browser.
                xhr = null;

            }
            return xhr;
        }
        console.log(_.join(['a', 'b', 'c'], '~'));
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(function (response) {
                console.log('ща coindesk')
                console.log(response)
            })
            .catch(function (error) {
                console.log('Ошибка! Не могу связаться с API. ' + error)
            });
        /*
        axios.get('http://127.0.0.1:9000/getCustomerData?username=zbayghozha&password=zbayghozha')
            .then(function (response) {
                console.log('ща localhost');
                this.test = response
            })
            .catch(function (error) {
                this.test = 'Ошибка! Не могу связаться с API. ' + error
            });
        */
        var xhr = createCORSRequest('GET', 'getCustomerData?username=zbayghozha&password=zbayghozha');
        if (!xhr) {
            throw new Error('CORS not supported');
        } else {
            console.log(xhr.responseText);
            console.log(xhr.status + ': ' + xhr.statusText);
        }

        axios.get('https://yesno.wtf/api')
            .then(function (response) {
                console.log('ща yesno');
                this.test = response.data.answer;
            })
            .catch(function (error) {
                this.test = 'Ошибка! Не могу связаться с API. ' + error
            });
    }
})
