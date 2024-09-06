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

### day- 27
 Computed Property
 Computed Property similer hy react ke useMemo hook sy, (agr 1 function ko bar bar run (exicut ) nhi krwama chty to os ko caches kr walyty hyn)
 
 computed: {
   [ functions]
 }


 ### day-28
 vue in Watchers
 Ya similer hy react ke hook useEffect + [dependance]
 jb 1 variable change ho ga to ua call ho jay ga, 
 (watch:{x} data:{x},
 same name hona zrori hy)

##  --adv
 ### day-29
 Slots
 similer to react "this.props.children"
 agr hum props pass krty hyn to props ma hum fix (data type), value he send kr skty hyn lykin slot ke help sy hum 1 component sy dosry component ma <component/> b bhaaj skty  hyn
 - Q: Agr hum <slot></slot> ka use krty hyn to wo to thek kma krta hy jb hum os ko use krty tim os am data add krty hyn lukin jb nhi add krty to os ma ma msg kyys show hoga / by default value ksy add krni?
- A: <slot></slot> 

 ### day-30
 Multiple slot with Name Slots
 mulitple slot use krny ky le humy hr slot ko <temp> <slot name="main"> </temp> istrha use krna hota hy and ,
 use krty tim 
 compnent ma <c> <template v-slot-main> <c/>kr ky use kr skty hyn

 -Q : Kya hum 1 slot ky ander sloat use kr skty hayn?
 - A: Yes

 ### day-31
  Dynamic Component / (Tabs)
  is ka use hum os time krty hyn jb humry pass 1 su zyda components hon, lykin hun os ma sy srif selected compoent he show krna chty hyn,
  if-else / switch ka use na krty howy

  <component :is="tab" />
  data(){
    tab:"chtas"
  }


### day-32
 Teleport component
 by defualt react && Vue , e.t.c ma Html file ma 1 id bna kr os ko js sy connect r de ajata hy and full app osi id pr hota hy,
 lykin agr hum koi dosri id crete krni hy and os pr components render krny hyn (multiple id's)
 <Teleport to="#footer"><FooterComponent/></Teleport>
 is tag ka use kr ky to ma id dyty hyn.
- Q: kya hum <Teleport> ma components ky bjaay screach sy html and css write kr skty hyn?
- A: Yes, Its possible 

 ### day-33 -34-35 -36 -37
 - 33
Life cycle method
    i- Create ( jb 1 component ka structure ready ho jata hy)
    ii- Mount   ( jb os component ma os ke data prperties add ho jati [ ex: methods, varables, e.t.c])
    iii- Update ( jb btn wgyra pr click krty hyn to data chnage hota hy add hot ahy delete hota hy,[ update hota hy ])
    iv- Unmount (DOM sy data hta dyty hyn.)

- 34 :i -
- 35: ii-
- 36 : iii - && updated & beforeUpdate
is ka use login krty time inouts ka dta check krny ky le  ause kr skty hyn

- 37: iv- jb hum ksi componen tko Ui sy remove krty hyn o ya mdla lyta hy.