#### only read
# Vue.js 3

### day 01
introduction

### day 02
use Vue.js cdn 


### day 03
use npm and setup

### day 04
files and folder structure + tailwind setup
component (inner)___
                    |_Template
                    |___script
                    |______style


### day 05  + 06
new component create, import, export/ register , style (scoped)
simple props, props types
use style and tailwind
change --port 

Q: kya hum 1 component a sy dosry ma data send / pass kr skty hyn ?
A: Yes

 
### day 07 + 08
07
Interpolation and Data
Interpolation mean (js ko html ma use krna example (jsx))=> ex: use {{ 3+4 }}

data() {
    return {
        age:43,
        getCity: function(city){
            return city
        }
    }
}



Q: kya hum Vue.js ma Interpolation krty time ksi properties ya value ko change kr skty hyn?
A: yes, Anguler ma y anhi kkr skty, ex: use {{age=3}} , istrha dat ko change krny sy asb jga age change ho jay ge.

---
08
Method and parameter
methods ma function bna skty jyn

data() {
    return {
        name:"theo"  // ________ya wala
    }                      |
},                         |
method: {                  |
     getData(){            |
            return {       |
                name: this.name,  //parameter
                city: "HSP"
            }
        }
}
ex: use <b>{{getData().name}}<b>
--

### day 09
Events (click, hover, e.t.c)

 v-on:click="getData()"
 v-on:dblclick="getData()"
 v-on:mouseover="getData()" ... e.t.c


### day 10 + 11
#10
two way binding
ya time and code complexty ko save krta hy
?? "1 property ko view and model dono ky sath combine bind krna ta ky jb model ma chages hon to view ma chages show hon, and jb view ma changes hon to model amb chages hon "

view mean: html
modal mean: script

<input type="number" v-model="count"/>
<h2>count</h2>
data(){
    return{
        count=0
    }
}

#11

tow inputs data get and  print in console


### day 12
Get Checkbox & Radio Button Value & 2 way binding# vue.js

### day 13
if else (condional rendering)

### day 14
array on loop
for loop v-for="user in users" :key="userid"

### day 15 + 16
15
Pass Data Parent to Child Component

16
reuse component with looping

### day-17
HTML binding
v-html="tag" 
tag: <h1?>H1</h1>

### day 18
 Class Binding | Dynamic Style

### day 19 + 20
Props 
1 compponent ma sy dosry component ma data transfor krny ky l e a props ka use hota hy.

19 (parent to child data transfor)
20 (child to parent data transfor)


### day 21
ref

### day 22 + 23 + 24
22 simple form
23 complete form

24 form validition

### day 25
Form Modifiers
 v-model.number="data"  //convert to number
  v-model.number.lazy.trim //multiple 

### day-26
non-props
