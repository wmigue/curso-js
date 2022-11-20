
class Subject {
    constructor() {
        this.observers = []
    }
    subscribe(o) {
        this.observers.push(o)
    }
    unsubscribe(o) {
        this.observers = this.observers.filter(e => e != o)
    }
    notify(model) {
        this.observers.forEach(observer => {
            observer.notify(model)
        })
    }
}

class ItemSubject extends Subject{
    constructor(){
        super()
        this.text=""
    }
    notify(text){
        this.text=text
        super.notify(this)
    }
}

class div1Observer{
    notify(subject){
        document.getElementById("div1").innerHTML=subject.text 
    }
}

class div2Observer{
    notify(subject){
        document.getElementById("div2").innerHTML=subject.text.length
    }
}

class div3Observer{
    notify(subject){
        document.getElementById("div3").innerHTML=subject.text == "cerveza" ? ":)" : "):" 
    }
}


let itemsubject = new ItemSubject()

let midiv1 = new div1Observer()
itemsubject.subscribe(midiv1)

let midiv2 = new div2Observer()
itemsubject.subscribe(midiv2)

let midiv3 = new div3Observer()
itemsubject.subscribe(midiv3)

document.getElementById("textarea").addEventListener("input", (e)=>{
    itemsubject.notify(e.target.value)
})