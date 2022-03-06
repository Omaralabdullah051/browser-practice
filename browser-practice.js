// 1.show output after 3.5 seconds.
setTimeout(() => {
    console.log('hello, I am from setTimeout function and my behavior is asynchronus.')
}, 3500);

//2.take a number using prompt. add 200 with this.then alert the result.
const getNumber = () => {
    const collectNumber = prompt('Please enter a number');
    if (collectNumber) {
        alert(parseFloat(collectNumber) + 200);
    }
    else {
        alert("Hey!What's wrong with you?please enter a number");
    }
}

//3.Do you want to see the href. if the user agree,console.log the href.
const seeHref = () => {
    const ask = confirm('Are you want to see your current url href?');
    if (ask) {
        console.log(location.href);
    }
    else {
        console.log('muri kha');
    }
}

//4.what is cookies. what's the purpose of cookies. 5-7 lines in english.

/*cookies refers to just the textual information about a website.In order to indentify us and show result of our preferences,this website sent and store some information in our local machine or system when we visit a website.cookies is sent and stored by a website in our local machine or system when we visit website to indentify us.cookie is a textual information which consists of name and value pairs*/

//5.3 diffrences between local storage vs session storage.

//local storage ..................//session storage.........................
//capacity: 10MB.                 //capacity: 5MB.
//accessible from: Any window.    //accessible from: Same tab.
//expiration: Never.              //expiration: until the tab close.
//delete data: can be deleted the data via js or manually.
//delete data: will automatically deleted the data when the page session is end or when the tab closed.

//the common this between those two is:
//stores a large amount of data on client's computer.
//Data is never transfered to the server.


//6.How javascript run? 5-7 lines in english
/*Javascript is a high-level,interpreted or often just in time complied,dynamically typed,multi-paradigm,prototype-based,single-threated,non-blocking,asynchronus language. Browser has two parts.Engine and Runtime environment.Engine has two parts.Heap memory and execution stack(call stack)js code executes as just in time compiled with execution contexts from call stack and converts into machine code.*/

//7.list of things that are asynchronous in Js/browser.

//asynchronous is a js behavior which executes later and js handles it smartly instead of blocking web.

//8.what is event loop in js and how does it work?

//event loop is an endless loop which keeps checking whether there is something to be executed in the call stack and when there isn't something to be executed in the call stack; it checks whether there is something to be executed in the event queue.It provides the execution context in the queue to the call stack.


//9.simple website with two input fields and a button. product name,product price.by clicking on the button,the product will be added to the local storage.You should be able to add multiple.

//10.Display products on the website.If they exists on the local storage,display from there.


//11.just display the artist on uI.(audio.db)

//must-----

//1.stack overflow,create an account. spend minimum 30 minutes.