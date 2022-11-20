//inyeccion de dependencias, quitamos responsabilidades a las objetos.

class News {
    constructor(url) {
        this.url=url
    }
    async get() {
        let posts = await fetch(this.url)
            .then(response => response.json())
            return posts
            
    }
}
 

class Writer {
    constructor(news) {
        this.news = news
    }
    async show() {
        this.posts = await this.news.get()
        this.posts.forEach(element => {
            console.log(element.title)
        })
    }

}

let news = new News("https://jsonplaceholder.typicode.com/todos")
let writer = new Writer(news)
writer.show()