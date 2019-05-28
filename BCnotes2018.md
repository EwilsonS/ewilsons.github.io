# Bootcamp Notes
by [Evan Wilson](https://ewilsons.github.io)

## 5/21/18
**Terminal commands** 
* Ctrl + L clears screen
* Cd .. move up 1 level
* Ls shows list of items in folder
* Pwd present working directory “you are here”
* Mkdir make directory
* Rm remove
* Explorer .
* Copy cp 
* Mv to change file name
* cp -r foldername newdir/ Copy directory 
* cd` (changes directory)
* cd ~` (changes to home directory)
* cd ..` (moves up one directory)
* ls` (lists files in folder)
* pwd` (shows current directory)
* mkdir <FOLDERNAME>` (creates new directory)
* touch <FILENAME>` (creates a file)
* rm <FILENAME>` (deletes file)
* rm -r <FOLDERNAME>` (deletes a folder, note the -r)
* open .` (opens the current folder. MAC SPECIFIC)
* open <FILENAME>` (opens a specific file. MAC SPECIFIC)
* explorer <FILENAME>` (opens the specific file. BASH SPECIFIC)
* explorer .` (opens the current folder. BASH SPECIFIC)code <FILENAME>` (opens the specific file in VS Code.)
* code .` (opens the current folder in VS Code.)abbing

pressing the `tab` key after typing "cd fol" will autocomplete to "cd foldername", assuming foldername is unique. (Folder/Filename Autocomplete)

`git checkout -b name-of-new-branch`
`git branch`  will show 
`git touch`... edit your stuff
`git add .`
`git commit -m "description"`
`git push origin name-of-branch` 

`git branch -D name-of-branch`


Understanding GIT version control. Full history, resolves conflict.  **PULL before  PUSH**

## 5/22/18

**More git practice.** 
- Git clone “___”
- Git add -A
- Git commit -m “___”
- Git push origin master
- git status for snapshot of changes
Html talk… anchors and hrefs (http reference). Self closing (void) tags vs tags that require end tag. MDN online resource. 

(placeholdit.com) for mock ups and such
CSS talk.  ??figure out how to copy a file in bash


## 05/23/18
Css. box model boxes within boxes. Padding v margin.  Margin[border[padding(content)padding]border]Margin 

In class the blue box.
Wide 444
Tall 484
Element width 400+22+22+10+20=474px 474+80=554px
Element height 440+22+22+25+30+10+20=569px  539 w/o margin

Floats allows content to “flow” around it. Block v inline elements. Floats turn everything into inline. “Clearfix” hack. 
Border box? “*” the asterisk in css applies to all code. Clearfix the container that stuff is hanging out of.
Css positioning... position:relative;.. Static by default. Positive is toward the center of the element. Absolute will nail element to the screen, relative to its nearest relative ancestor.
Position: fixed - pinned to the browser window. layering  z-index: 0; by default. Higher the number higher the layer. Display: none to hide and remove vs visibility: hidden to hide visibility but keep the space. *html entities to escape. 



## 5/24/18

Resources
 Class v ids. Duplicate ids across pages?

Github Pages (portfolio). Create repos. Ewilsons.github.io … create “index.html”... must be called index…
Github pages HW thru existing repos then settings… master branch.
CSS TYOGRAPHY- standards. 1.5x line height, 16px font-size, line length 50-75 characters.
Use Google fonts to normalize appearance.



## 5/25/18
Grid based system, bootstrap. Mobile responsiveness. Using BS to build layouts: 12 column grid sys. Resources. 12 x 8 slide example. BS doesn’t count navbar as part of grid. Logical columns v BS columns. Sub rows and sub columns, grid inside of a grid.

BS columns based on grid of 12.  Review the box within a box idea. Sub-rows are muy importante! (practice this)




Mobile responsive. Media Queries - @media go last (in CSS)


## 5/30/18

**JAVASCRIPT!!!**  Allows for interactivity. 
var means variable. Assign a string, number or boolean
Console.log() is a function used to debug/leave notes for yourself or other devs. Remember to delete when production is complete.
Confirm - 2 options ok or cancel, true or false
Alert - one button, ok
Prompt - ok, cancel and return value *always returns a “string” even if its a number.
Document.write(“ Lorem ...”) will overwrite the page, but allows you to put in some html thru the script tag. (we use jQuery to do this).
Conditionals- if else statements. 
= is the sign operator

===  triple equals operator is how we test. Compares the value and the data type on both sides. 

==  will compare values only not type (this is vague, DO NOT USE unless specifically going for coercion)
Array - index begins at 0. [ , , ];  careful not to succumb to “off by one” mistake.









## 5/31/18

**More Javascript**  mind the repetition. DRY don't repeat yourself. Thus
Loops  include  iterator, condition, increment.  var.charAt() is the same as var [  ] [  ] ; 
|| means “or” && means “and” .  
document.getElementById()
document.querySelector()
.push will add to the array 
Document.onkeyup = 

* [word guess](..\Homework\Word-Guess-Game\game.html)







## 6/1/18
typof (this is an operator to determine type of char)
Research “return” and how to call it. This.mileage. What is “this”?

Var array[99,12,23,45,45];

Var object{
	Name: Evan,
	Age:88,
	Children: [Milania, Evan II
]
};

Dot notation vs bracket notation - how to decide?? Dot notation is much prefered. If there ARE spaces use bracket notation.

Method function on an object object.function();
Still key:value, pair.
Scope- global variables vs local variables: 
Callback function  var array = [a.b.c]
			array.forEach()




## 6/4/18

jQuery dont forget angle braks for new div

6/5/18
Functions inside an object are called methods. .this is refering to the object. .this will only adhere to its current method. If you go a level deeper, it will use the window. Review “this” exercise. 

Line 81 and 110 on fridge solution. Data attributes are essential.

Review hw:
Crash course
JQuery function used the most so far
Fridge

* [crystals](..\Homework\unit-4-games\index.html)

## 6/6/18 

REVIEW (needs improvement
 Js-for loops, if-then/else statements, organizing (global var first, functions, then function calls.
jQuery-methods for changing html,
* [coin](\05-timers\01-Activities\04-CoinFlip\README.md)
Do coin-flip activity, Implement timeouts

solution
* [coin solution](..\UNCCHAR201805FSF3-FT\01-Class-Content\05-timers\01-Activities\04-CoinFlip\Solved\coin-flip-solution.html)

* [coin solution](..\UNCCHAR201805FSF3-FT\01-Class-Content\05-timers\01-Activities\04-CoinFlip\Solved\coinFlipSolution.js)


##6/7/18
Interval - setTimeout
* [simple timer](\05-timers\01-Activities\08-SimpleTimer\Unsolved\simple-timer.html)

* [stopwatch](\05-timers\01-Activities\10-Stopwatch\Unsolved\stopwatch.html)
window onload vs document ready?


* [slide show mine](\05-timers\01-Activities\11-Slideshow\Unsolved\slideshow.js)
* [html](\05-timers\01-Activities\11-Slideshow\Unsolved\slideshow.html)


find soulution
* [slide solution](..\UNCCHAR201805FSF3-FT\01-Class-Content\05-timers\01-Activities\11-Slideshow\Solved\slideshow.js)

* [slide solution](..\UNCCHAR201805FSF3-FT\01-Class-Content\05-timers\01-Activities\11-Slideshow\Solved\slideshow.html)

question: what is the  highest selling product at walmart?
answer: solve the problem aloud. showcase logic/ prob solving skills.

question: find the missing card in a deck?
answer: try to reduce "touches"


* [fizz buzz](\05-timers\01-Activities\16-FizzBuzz\fizz.html)

* [jQuery calc](..\Practice\jquery-calculator.html)

* [hangman html](..\Homework\Word-Guess-Game\game.html)





## 6/8/18
Bubble sort
use for loops
while loops vs do while loops
* [bubble](..\inClass\05-timers\01-Activities\13-BubbleSort\Unsolved\index.html)


* [video solution](https://www.youtube.com/watch?v=t-qAWbYMiUs)

**API talk
**apikey=trilogy
* [omdb](http://www.omdbapi.com/?t=pulp+fiction&apikey=trilogy)

? starts query
t=pulp+fiction - this is a key value pair
+ represents a space
key value pairs are separated by &

t=search by titie

s=search and return all matching
$.ajax({
	this talks to the api?
	
})

review callback functions
be mindful of the order that ajax is called. The api is asynchronous.

work on the bonus here
* [ajax omdbapi-activ](..\inClass\06-ajax\01-Activities\03-AJAX_to_HTML\Unsolved\ajax-to-html.html)



## 6/11/18

more work with apis. "giphy"
* [giphy docs](https://developers.giphy.com/docs/)
* [video demo](https://www.youtube.com/watch?v=Kp7Xy2LScLM)

api key = 33dbXZtSVdT9qRXABAxgAN2FtGTormNK

example for giphy++++"

-ajax passes 2 params, for now.. (url, method:"Get)
 
* [bujumbura activity](\06-ajax\http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"01-Activities\05-Bujumbura\README.md)
* [weather api link](https://openweathermap.org/api)
api key = c9cacc0bf12edcb0b99ad6c10be431cf

* [movie dump](\06-ajax\01-Activities\06-MovieJSONDump\README.md)
 event.preventDefault(); ====== stops page from reloading itself.
var movie = $("#movie-input").val(); 

* [movie add button](06-ajax\01-Activities\07-MovieButtonLayout\Unsolved\movie-button-layout-easier.html)
* [add $button solution](..\UNCCHAR201805FSF3-FT\01-Class-Content\06-ajax\01-Activities\07-MovieButtonLayout\Solved\movie-button-layout-solved.html)
 
 remember this structure bc the js creates content that isnt loaded at the time the page loads
<!--  $(document).on("click", ".movie", alertMovieName); -->
 
 <!-- solution -->
 *[solution to days activity](..\UNCCHAR201805FSF3-FT\01-Class-Content\06-ajax\01-Activities\10-WorkingMovieApp\Solved\working-movie-app-solved.html)


## 6/12/18

**career talk**
 - upwork
 - o desk
* [`cat-button`](\06-ajax\01-Activities\12-CatButton\Unsolved\cat-button.html)
* [more button api calls ajax](\06-ajax\01-Activities\14-DynamicElements\Unsolved\dynamic-elements.html)

* [nyt ajax api video solution](https://www.youtube.com/watch?v=QiIlhmeGYuk)
* [nyt finished mine](..\Practice\nyt\index.html)

ny times api: 2090b1bd8d364154843da6348bb3bcc2

sample url http://api.nytimes.com/svc/search/v2/articlesearch.json?q=kanye+west&page=2&sort=oldest&api-key=2090b1bd8d364154843da6348bb3bcc2

sample with date http://api.nytimes.com/svc/search/v2/articlesearch.json?q=kanye+west&begin_date=20160101&end_date=20180610&page=2&sort=oldest&api-key=2090b1bd8d364154843da6348bb3bcc2

## 6/13/18

**dataBasess** day!!
.val() gets the text from input
.val("") puts the text where yo tell it.
data persistence(storage). pros and cons to client side and server side data persistence.

<!-- try the code below for  trivia bugs-->
      event.preventDefault();
<!-- --------------------------------- -->

class video Q3
WTF....
review persistence!

* [firebase](https://firebase.google.com)
try to make a family chat

* [chat](\07-firebase\01-Activities\10-clickbutton-complete\Unsolved\instructor-do-clickbutton-nocomments.html)


## 6/14/18
* [firebase](https://www.youtube.com/watch?v=0PHeP5bLqYE)
.set() will put the info in the db. ref() is the location
then set up a listener on that value
* [fb](..\UNCCHAR201805FSF3-FT\01-Class-Content\07-firebase\01-Activities\11-countdownbutton\Solved\student-do-downbutton.html)
* [fb solution](..\UNCCHAR201805FSF3-FT\01-Class-Content\07-firebase\01-Activities\13-mostrecentuser\Solved\recentuser-solved.html)
* [build own](\07-firebase\01-Activities\13-mostrecentuser\Unsolved\recentuser.html)

* [coderbay1 solution](..\UNCCHAR201805FSF3-FT\01-Class-Content\07-firebase\01-Activities\14-codersbay\Solved\index.html)

moment.js for timestamp/ date stuff. use on HW in some way

* [firebase end class activity mine](\07-firebase\01-Activities\17-TimeSheet\Instructions\index.html)
* [ref](..\UNCCHAR201805FSF3-FT\01-Class-Content\07-firebase\01-Activities\13-mostrecentuser\Solved\recentuser-solved.html)


## 6/15/18

* [moment solution](..\UNCCHAR201805FSF3-FT\01-Class-Content\07-firebase\01-Activities\20-MomentJS\Solved\momentjs-activity-solved.html)

* [time sheet solution](..\UNCCHAR201805FSF3-FT\01-Class-Content\07-firebase\01-Activities\17-TimeSheet\Solved\index.html)

**proj 1.** 
mvp-minimum viable product

review vids about user stories
- business analyst

add to proj1:
image api that updates the background image. w/o refresh. with weather api in the corner.
 
amadeus api - vA7jW9vS5DQj5MHWkavbCHddVJqDV47d

 all inputs:
 -city name/airport origin
 -city name/airport destination
 -departure date
 -return date

 outputs in a table 
 -price
 -airport code
 -airline name
 -dep date
 -return date 
 
`git checkout -b name-of-new-branch`
`git branch`  will show 
`git touch`... edit your stuff
`git add .`
`git commit -m "description"`
`git push origin name-of-branch` 
`git branch -D name-of-branch  ` delete

## 6-23-18
proj one presentaion
(stephen hodges git hub)

weekend work
-node practice
-portfolio work

## 6-25-18
review calulator( `.substring()`)
module.exports... preps objects or (vars or anything) for use elsewhere

**require**("./) or ("packageName") function... calls or imports info
NEW FOR LOOP for (var key in showtime){}
writeFile ---  destructive
appendFile --- not destructive

*fix bugs in bank example whe you redo
 * [mine](10-nodejs\01-Activities\15-BankJS\Unsolved\bank.js)
 * [soution](../UNCCHAR201805FSF3-FT\01-Class-Content\10-nodejs\01-Activities\15-BankJS\Solved\bank.js)

## 6-26-18

**npm** 

**HTTP Status Codes**
- 1xx Informational
- 2xx Success
- 3xx Redirection
- 4xx Client Error 
- 5xx Server Error

look into array methods to shorten for loop
`arr.slice(2)` begins the  array where you want
`.join`
* [GUIDE](https://forum.freecodecamp.org/t/javascript-functions-list/15278)

write own npm
* [npmjs ](https://www.npmjs.com/)

JSON.stringify(result, null, 3)

* [geocoder npm with slice().join()](\10-nodejs\01-Activities\23-GeocodeNPM\Unsolved\geocode.js)

* [multiple npms](\10-nodejs\01-Activities\24-PackageJSON\weatherdest.js)
* [video soulution for userpromt](https://www.youtube.com/watch?v=JJqriV7Q9og)

## 6-27-18

constructor function- **usually** begins with Capital letter
"new" sets this. to a new object. 
* [exapmle](11-js-constructors\01-Activities\02-RainingCatsAndDogs-Con\rainingCatsAndDogs-con.js)
* [character game](\11-js-constructors\01-Activities\03-CharacterCreate\character.js)

**recursion**- loop with async code. cant for loop, gotta use if else.

## 6-28-18

* [team-manager solution](..\UNCCHAR201805FSF3-FT\01-Class-Content\11-js-constructors\01-Activities\08-TeamManager\Solved\teamManager-advanced.js)
/

## 6-29-18

* [finished cli](\11-js-constructors\01-Activities\14-Stu_FinalTVApp\Unsolved\cli.js)

callbacks - use with anything async. passing a function to another function.
* [example](\12-mysql\01-Activities\callback.js)

mySql
redo class excersises

## 7-2-18

**mySQL**
1 to many 
many to 1
many to many
1 to 1
* [joins-inner, left, right](\12-mysql\01-Activities\05-booksDB\books.sql)


C - CREATE - INSERT INTO pets (name, type, age) VALUES ("fido", "dog", 3);
R - READ   - SELECT * FROM pets;
U - UPDATE - UPDATE pets SET name="under dog" WHERE type = "dog";
D - DELETE - DELETE FROM pets WHERE type = "mouse";

* [crud functions](..\UNCCHAR201805FSF3-FT\01-Class-Content\12-mysql\01-Activities\09-iceCreamCRUD\iceCreamCRUD.js)

* [my crud](\12-mysql\01-Activities\08-playlistRead\songPlay.js)

* [great bay](\12-mysql\01-Activities\10-GreatBay\Unsolved\great-bay.js)
pull up inquire docs

## 7-3-18

review callbacks again
 function getAllAuctions(callback){
	 conn.query....
	 err
	 callback(res)
 }

 getAllAuctions(function(res){
	 //
 })

**mysql keywords**
 `group by`
 `between`
 `explain`
 `alter table`
 - add index name (column name)

# FULLLLLSTAAACCCKKKK!!!!!!!!!

7-6-13
server-machine that handles requests. uses http/https to communicate with client.
constant-variable that will not change usually in all caps

**review switch cases!!!!!**
__dirname is a node variable that always point sto the folder the js is in (to look for the index or whatever)


**express** read up on the docs.

## 7/9/18

Middleware- (body-parser)tells express to look at "this function(s)" before it gets ot our main rout handling. look for app.use(bodyParser). always call next() to continue the call chain

ex.
app.use(function(req,res,next){
	console.log("blah blah blah")
	next();
})

path.join(__dirname + "view.html") --- here path.join allows user's machine to designate path charachters. ie. "\" vs "/"

*[star wars video](https://youtu.be/ygk-kNstqK0?list=PLgJ8UgkiorCmI_wKKVt5FlkTG63sQF6rr)


## 7/11/18

**handlebars** - lets us use backend variables with html. helps to reduce sting concatenation

setup
main-folder
 -views
 index.handlebars
 funny.handlebars
 -layout
  main.handlebars

`array.filter()`

! FLIP FLIP FLIP booleans ! with "!"

REST api - representational state transfer. set of conventions that normalize apis for others to use
*[rest info](http://www.restapitutorial.com/lessons/whatisrest.html)


## 7/12/18
**post**
**get**
**put** --> update
req.body - from the put/post body parser.
	req.body.nameOnHandlebars and api go togehter
req.params - get route

**client stuff** 
* location.reload()

**server stuff**
* res.redirect


for ff hw- use ajax and .this to get input value

app.use(express.static("public"))
express.static- will make routes for you from specified folder. **spelling must match**
(do in class quotes and watch activities)
dont use index.html with this. it will disable the root route from GET

abstraction- dry up code, export and require

**==============================================**
SELECT client_name, party_name FROM clients AS tOne
LEFT JOIN parties AS tTwo
ON tOne.id = tTwo.client_id;

**is equal to**

 "SELECT ?? FROM ?? AS tOne LEFT JOIN ?? AS tTwo ON tOne.?? = tTwo.??";

**using**

connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(err, result)

**============================================**

review async excercise. remember that callback(result)... function(callback){console.log()}... is the same as **consol.log** as the callback itself.

**heroku cmd steps (already on git hub)** 
- `heroku login`
- `git remote -v`
- `heroku create`
- `heroku addons:create mongolab` to add mogolab db to heroku project
- `git remote -v`
- `git commit -am "" `
- `git push heroku master`

-`heroku apps:rename newname`
-`git remote rm heroku` removes git remote
-`heroku git:remote -a newname` sets new git remote

## 7-13-18

**MVC**
Architectural paradigm for programming. Mostly used by govt and large corps. Used by
frameworks like Ruby on rails, cake php, django, etc. Framework implements a
structure (mvc). Model View Controller. MVC helps to organize the client server
database flow.

**Model** = Database content
**View** = Client
**Controller** = Server
Model only speaks with controller
View only listens to controller
Controller is the middle man and speaks to View

* hanldebars review- 
* sequelize-

**orm** Object Relational Mapping

* [rest Api info(cool bs4 show/hide feature)](https://www.restapitutorial.com/lessons/whatisrest.html)

## 7-16-18

Sequelize excersizes
- [setting up sqlize](\15-sequelize\01-Activities\07-ORM-To-Sequelize\Unsolved\server.js)
- for hw pay attentioni to the model pages and the /\ direction.
	- **methods** / **summay**
		- .create()	Create record consisting of object passed in
		- .find()	Lookup an array of records which match the specified criteria
		- .findOne()	Lookup a single record which matches the specified criteria, or send back null if it doesn't.
		- .update()	Update records matching the specified criteria, setting the specified object of attrName:value pairs.
		- .destroy()	Destroy records matching the specified criteria.
		- .findOrCreate()	Lookup a single record which matches the specified criteria, or create it if it doesn't.
		- .count()	Get the total count of records which match the specified criteria.
		- .native()/query()	Make a direct call to the underlying database driver.
		- .stream()	Return a readable (object-mode) stream of records which match the specified criteria.
		- .archive()	Archive ("soft-delete") records that match the specified criteria.

[sqlz validation](15-sequelize\01-Activities\10-Sequelize-Validations\unsolved\server.js)

## 7-17-18
* UNDERSTAND blog CRUD excersise.
* associations on sqlz
	- Post.associate = function (models)  {
   		 models.Post.belongsTo(models.Author, {
     		 foreignKey: {
      		  allowNull: false
		      <!-- onDelete: "cascade"  for the other side--> 

     			 }
   			 });
 		 };

-	include[db.Author] will do the join

**Finish Blog**

## Project 2
- Import csv data-sets ie. political, music...
- .env
- 

### Ideas
- uber for retaurant managers (scheduling app)
	- database to store and retireve
	- 
- research lodash


**agile** refers to team work flow
- stand up - quick update
- sprint/playback -accomplishment
- retrospective- problems

* [travis](\16-project-2\01-Activities\05-Stu_Travis-Setup\README.md)

## Testing 
**TDD** test driven development
* try catch block for exception handling
	* try { function()}catch (err){console log(error message)}

**mocha**
**chai**
excersise 17 in proj 2 folder

##7-24-18

**Mongo DB**  noSQL db full of... 
- collecitions vs tables
- documents vs rows
- field vs column

**mongo commands**
- `use lessondb` to create or switch to
- `db` tells you which db you're in
- `db.places.insert({json object})`
- `db.collection.find()` returns everything in the collection
- `db.collection.find({})` 
- `show dbs`
- `show collections`
- `db.collection.update({"country": "Morocco"}, {$set:{"continent": "antarctica"} })`
- `db.[COLLECTION_NAME].remove()`
- `db.[COLLECTION_NAME].drop()`
- `db.dropDatabase()`
- `db.COLLECTION_NAME.find().sort({FIELD:1})` 1ascend -1descend
  
**web scraping**  always check terms of use on site you're scraping
npm install cheerio 


##7-27-18
more scraping
npm mongojs
npm morgan for tracking routes
**review sequelize**

make npm called `evan`

post gives > req.body
get gives > params.

draw comparisons between sequelize and mongoose

##7-28-18

### Things I know
- 
### Things I need to improve 


### es6 

var - functional scoping box of mirrior with functions only
const - does not change. will never assign a new value. read only. new box of mirrors with curly braces
let - resolves some async issues. 

`${template literals}` use backticks instead of quotes

## 7-30-18

**arrow functions**
const myFunc = function(a,b){
	console.log(a,b)
}

const myFunc = (a,b) => {
console.log(a,b)
}

**object destucturing**
`...` is the rest operator in es6

if used when building an array x = [...x, "pushed item"]

import/export new way
**export default**  for one export
**namead export** for more that one

**bable** is a traspiler that transltes es6 to es5 for node.
**tree shaking** getting rid of dead or unused code.

## 7-31-18
**REACT**
- classes
- component based system
- spa (single page app)

webpack and babel

**begin a react project**
`npm install -g create-react-app yarn` .... takes a long time
`create-react-app directoryName`
cd into folder
`yarn start`

### remember these differences
* cvss camelCase
* className
* <closeAllTags></closeAllTags>

* props.children is anything between the <opening> and </closing> tags
* reactDom.render is a library separete from react. CALLED ONCE

## 8-1-18

stateless(functional) components-what we've done so far
vs.
Stateful components-

{portfolio ideas: video demo link for some}
[computed]property name

with forms use state to link to input. allows for synchronized updates.

replace(/./g, "*") regex for replacing password with ***
destructuring!!!!!!!!!!!

**container** means the componect is stateful

componentDidMount() 
**abstraction** making code as avague as possible for maintainance and reusability.

[read about stateful/functional](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

**ternary operator** conditional programming in react in liu of if/else statements in the jsx portion. you can use if else within a method and just call the method {this.method} within jsx area.

NEVER use <a href>for internal navigation with react. USE LINK from react router

**PROPS** components must act as a pure function. cannot change props from within child 
**STATE1** create enviroment for 
 `react-router-dom`

### Event Listeners
 `onChange` 
 `onClick`
 
 ## 8-6-18
 **react router**
 `yarn`
 `yarn add react-router-dom`
 import browserRouter and route from react router dom

## 8-7-18
### Computer Science
- algorithms
	- pagerank (google)
	- bubble sort
- benchnmark npm fro runtime check
- `node --max-old-space-size=4096 linearSearch.js` cli override data max for node
- binary search. with while loop.keeps halfing until narrowed
- quick sort is the fastest mostly, most complex

**Selection sort** least efficient. slow. too many steps
**Insert Sort** only loops through entire array once
**quick sort**

## 8-9-18

### data structures and Runtime

**data structure** a way of storing data that allows us to use it effciently
- array
	- inefficient in most languages b/c of shift
- Set 
	- ES6 has built i set function
- stack 
	- -only allows access to the top element (pancakes)
	- "LIFO" last in first out.
	- not built into js
	- push, pop, peek, size
		- commonly used in array form
		- we could define a class with methods for pop, push etc.
		- ex. using "back" in the browser
- Queues
	- "FIFO" first in first out (standing in line)
	- enqueue
	- dequeue
- Linked List
	- uses nodes that links(like a train)
	- knows its position and the position of the next node.
	- no wasted memory
- Dictionaries(Maps)
	- hybrid b/w object and array
	- can be iterated over like an array
- Trees
	- non-sequential
	- top node is root
	- internal and external
	- ancestors and descendents
	- Binary tree
		- 2 children. left/right
	- binary search tree
		- left side always has a **lesser** number
		- efficient for **searaching**
- Graphs
	- network stucture
	- set of nodes(or verticies) connected by edges
	- social networks/geographic maps
	- serious math... look for npms


**Big O** Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. ... As a programmer first and a mathematician second (or maybe third or fourth)
- 
**efficiency** is about the amount of steps involved
**head** function O(1) "o of 1"
**runtime** 
- constant-O(1) Best
- logrithmic O(lg n) more data less time good
- linear - O(N) 


upwork
Craigslist
Demand Studios
Short task
Rapid workers
StudentFreelancing
Taskr
Tenbuxx
Workhoppers
Greatlance
iFreelance
JustAnswer
Gigbux
Fiverr
FlexJobs
Help Cove
JobBoy


meeting with roderick brown
1.send resume
2. research local event x2/week
3. 50 people/day on linkedIn w/premium accunt
4. research companies and apply direct to site, linkedIn connect
	1. linkedIn
	2. im evan ive researched, how can I gain the advantage over my peers
5. reschedule


fix git history

#!/bin/sh

git filter-branch --env-filter '
OLD_EMAIL="ewilsons@aol.comgit config --global user.email ewilsons@aol.comgit config --global user.email ewilsons@aol.com"
CORRECT_NAME="Evan"
CORRECT_EMAIL="ewilsons@aol.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags


`git push --force --tags origin 'refs/heads/*'` to finalize



# Prototypes





















<!-- ======================================================================================================================================================================== -->
"they think that technology just automatically improves. I only improves when alot of people work very hard to make it better" -Elon Musk

**regex**


**Talking points**
non-traditional background as a positive => blog post from Taryn Roberts
desire to contribute to meaningful projects
Cats app future tech with a dated UI and smooth UX
Industry changing products and innovation
*drones to monitor parking
More than a career, a respinsibilty
take full ownership
"write the manual" (story of mother and instilled value)

**Questions to ask them**
Diversity
Junior engineer career path and role starting out
employee development
What kind of success have you had with non traditional employees

**interview notes**
oop pattersn (factory)

prototype

understand set state under the hood
funtionc

review car model. if I wanted to keep th eoverall car constant but change the specifics.

write a design pattern

int with taras and brodey