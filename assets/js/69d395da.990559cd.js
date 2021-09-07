"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9174],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6234:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"Code Conduct",sidebar_position:2,description:"Apache ShenYu Coding Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Code Conduct"],date:new Date("2019-04-09T00:00:00.000Z"),cover:"/img/architecture/shenyu-framework.png"},s=void 0,u={unversionedId:"code-conduct",id:"code-conduct",isDocsHomePage:!1,title:"Code Conduct",description:"Apache ShenYu Coding Guide",source:"@site/community/1-code-conduct.md",sourceDirName:".",slug:"/code-conduct",permalink:"/community/code-conduct",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/1-code-conduct.md",version:"current",lastUpdatedBy:"Kunshuai Zhu",lastUpdatedAt:1630979349,formattedLastUpdatedAt:"9/7/2021",sidebarPosition:2,frontMatter:{title:"Code Conduct",sidebar_position:2,description:"Apache ShenYu Coding Guide",author:"xiaoyu",categories:"Apache ShenYu",tags:["Code Conduct"],date:"2019-04-09T00:00:00.000Z",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"Subscribe Email",permalink:"/community/subscribe-email"},next:{title:"Issue And Pull Request",permalink:"/community/issue-pr"}},c=[{value:"Development Guidelines",id:"development-guidelines",children:[]},{value:"Contributor Covenant Submitting of Conduct",id:"contributor-covenant-submitting-of-conduct",children:[]},{value:"Contributor Covenant Code of Conduct",id:"contributor-covenant-code-of-conduct",children:[]},{value:"Contributor Covenant Unit Test of Conduct",id:"contributor-covenant-unit-test-of-conduct",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"development-guidelines"},"Development Guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Write codes with heart. Pursue clean, simplified and extremely elegant codes. Agree with concepts in ",(0,r.kt)("inlineCode",{parentName:"li"},"<Refactoring: Improving the Design of Existing Code>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<Clean Code: A Handbook of Agile Software Craftsmanship>"),"."),(0,r.kt)("li",{parentName:"ul"},"Be familiar with codes already had, to keep consistent with the style and use."),(0,r.kt)("li",{parentName:"ul"},"Highly reusable, no duplicated codes or configurations."),(0,r.kt)("li",{parentName:"ul"},"Delete codes out of use in time.")),(0,r.kt)("h2",{id:"contributor-covenant-submitting-of-conduct"},"Contributor Covenant Submitting of Conduct"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure all the test cases are passed, Make sure ",(0,r.kt)("inlineCode",{parentName:"li"},"./mvnw clean install")," can be compiled and tested successfully."),(0,r.kt)("li",{parentName:"ul"},"Make sure the test coverage rate is not lower than the master branch."),(0,r.kt)("li",{parentName:"ul"},"Make sure to check codes with Checkstyle. codes that violate check rules should have special reasons. Find checkstyle template from ",(0,r.kt)("inlineCode",{parentName:"li"},"https://github.com/apache/incubator-shenyu/blob/master/script/shenyu_checkstyle.xml"),", please use checkstyle ",(0,r.kt)("inlineCode",{parentName:"li"},"8.8")," to run the rules."),(0,r.kt)("li",{parentName:"ul"},"Careful consideration for each ",(0,r.kt)("inlineCode",{parentName:"li"},"pull request"),"; Small and frequent ",(0,r.kt)("inlineCode",{parentName:"li"},"pull request")," with complete unit function is welcomed."),(0,r.kt)("li",{parentName:"ul"},"Conform to ",(0,r.kt)("inlineCode",{parentName:"li"},"Contributor Covenant Code of Conduct")," below.")),(0,r.kt)("h2",{id:"contributor-covenant-code-of-conduct"},"Contributor Covenant Code of Conduct"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use linux line separators."),(0,r.kt)("li",{parentName:"ul"},"Keep indents (including blank lines) consistent with the previous one."),(0,r.kt)("li",{parentName:"ul"},"Keep one blank line after class definition."),(0,r.kt)("li",{parentName:"ul"},"No meaningless blank lines. Please extract private methods to instead of blank lines if too long method body or different logic code fragments."),(0,r.kt)("li",{parentName:"ul"},"Use meaningful class, method and variable names, avoid to use abbreviate."),(0,r.kt)("li",{parentName:"ul"},"Return values are named with ",(0,r.kt)("inlineCode",{parentName:"li"},"result"),"; Variables in the loop structure are named with ",(0,r.kt)("inlineCode",{parentName:"li"},"each"),"; Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"each")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"entry")," in map."),(0,r.kt)("li",{parentName:"ul"},"Name property files with ",(0,r.kt)("inlineCode",{parentName:"li"},"Spinal Case"),"(a variant of ",(0,r.kt)("inlineCode",{parentName:"li"},"Snake Case")," which uses hyphens ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," to separate words)."),(0,r.kt)("li",{parentName:"ul"},"Split codes that need to add notes with it into small methods, which are explained with method names."),(0,r.kt)("li",{parentName:"ul"},"Have constants on the left and variable on the right in ",(0,r.kt)("inlineCode",{parentName:"li"},"=")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"equals")," conditional expressions; Have variable on the left and constants on the right in ",(0,r.kt)("inlineCode",{parentName:"li"},"greater than")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"less than")," conditional expressions."),(0,r.kt)("li",{parentName:"ul"},"Beside using same names as input parameters and global fields in assign statement, avoid using ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," modifier."),(0,r.kt)("li",{parentName:"ul"},"Design class as ",(0,r.kt)("inlineCode",{parentName:"li"},"final")," class except abstract class for extend."),(0,r.kt)("li",{parentName:"ul"},"Make nested loop structures a new method."),(0,r.kt)("li",{parentName:"ul"},"Order of members definition and parameters should be consistent during classes and methods."),(0,r.kt)("li",{parentName:"ul"},"Use guard clauses in priority."),(0,r.kt)("li",{parentName:"ul"},"Minimize the access permission for classes and methods."),(0,r.kt)("li",{parentName:"ul"},"Private method should be just next to the method in which it is used; writing private methods should be in the same as the appearance order of private methods."),(0,r.kt)("li",{parentName:"ul"},"No ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," parameters or return values."),(0,r.kt)("li",{parentName:"ul"},"Replace if else return and assign statement with ternary operator in priority."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"LinkedList")," in priority. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"ArrayList")," for use index to get element only."),(0,r.kt)("li",{parentName:"ul"},"Use capacity based ",(0,r.kt)("inlineCode",{parentName:"li"},"Collection")," such as ",(0,r.kt)("inlineCode",{parentName:"li"},"ArrayList"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"HashMap")," must indicate initial capacity to avoid recalculate capacity."),(0,r.kt)("li",{parentName:"ul"},"Use English in all the logs and javadoc."),(0,r.kt)("li",{parentName:"ul"},"Include Javadoc, todo and fixme only in the comments."),(0,r.kt)("li",{parentName:"ul"},"Only ",(0,r.kt)("inlineCode",{parentName:"li"},"public")," classes and methods need javadoc, other methods, classes and override methods do not need javadoc.")),(0,r.kt)("h2",{id:"contributor-covenant-unit-test-of-conduct"},"Contributor Covenant Unit Test of Conduct"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test codes and production codes should follow the same kind of code of conduct."),(0,r.kt)("li",{parentName:"ul"},"Unit test should follow AIR (Automatic, Independent, Repeatable) principle.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Automatic: Unit test should run automatically, not interactively. Check test result manually and ",(0,r.kt)("inlineCode",{parentName:"li"},"System.out"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"log")," are prohibited, use assert to check test results."),(0,r.kt)("li",{parentName:"ul"},"Independent: Call each other and sequence dependency during unit test cases are prohibited. Every test case should run independent."),(0,r.kt)("li",{parentName:"ul"},"Repeatable: Unit test case should not dependency external environment, they can run repeatable."))),(0,r.kt)("li",{parentName:"ul"},"Unit test should follow BCDE (Border, Correct, Design, Error) design principle.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Border: Border value test, test for loop border, special value and value sequence to get expect result."),(0,r.kt)("li",{parentName:"ul"},"Correct: Correct value test, test for correct value to get expect result."),(0,r.kt)("li",{parentName:"ul"},"Design: Design with production codes."),(0,r.kt)("li",{parentName:"ul"},"Error: Error value test, test for error input, exception to get expect result."))),(0,r.kt)("li",{parentName:"ul"},"Without particular reasons, test cases should be fully covered."),(0,r.kt)("li",{parentName:"ul"},"Every test case need precised assertion."),(0,r.kt)("li",{parentName:"ul"},"Environment preparation codes should be separate from test codes."),(0,r.kt)("li",{parentName:"ul"},"Only those that relate to junit ",(0,r.kt)("inlineCode",{parentName:"li"},"Assert"),", hamcrest ",(0,r.kt)("inlineCode",{parentName:"li"},"CoreMatchers")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Mockito")," can use static import."),(0,r.kt)("li",{parentName:"ul"},"For single parameter asserts, ",(0,r.kt)("inlineCode",{parentName:"li"},"assertTrue"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"assertFalse"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"assertNull")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"assertNotNull")," should be used."),(0,r.kt)("li",{parentName:"ul"},"For multiple parameter asserts, ",(0,r.kt)("inlineCode",{parentName:"li"},"assertThat")," should be used."),(0,r.kt)("li",{parentName:"ul"},"For accurate asserts, try not to use ",(0,r.kt)("inlineCode",{parentName:"li"},"not"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"containsString")," to make assertions."),(0,r.kt)("li",{parentName:"ul"},"Actual values of test cases should be named ",(0,r.kt)("inlineCode",{parentName:"li"},"actualXXX"),", expected values ",(0,r.kt)("inlineCode",{parentName:"li"},"expectedXXX"),"."),(0,r.kt)("li",{parentName:"ul"},"Class for test case and ",(0,r.kt)("inlineCode",{parentName:"li"},"@Test")," annotation do not need javadoc.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The content is referenced from the Apache ShardingSphere code conduct with appropriate adjustments.")))}p.isMDXComponent=!0}}]);