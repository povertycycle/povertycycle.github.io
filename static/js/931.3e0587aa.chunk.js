"use strict";(self.webpackChunkpovertycycle=self.webpackChunkpovertycycle||[]).push([[931],{7931:function(e,n,a){a.r(n),a.d(n,{default:function(){return Y}});var s=a(885),i=a(2791),t=a(6021),r=a(184),o=function(e){window.open(e)},c=function(e,n){e.preventDefault(),null===e||void 0===e||e.clipboardData.setData("text/plain",n)};function l(e){var n=e.changeNeon,a=e.renderBot,s={scale:1.5,opacity:1},i={about:(0,r.jsx)(m,{cName:"about",renderBot:a}),linkedin:(0,r.jsx)(d,{cName:"linkedin"}),github:(0,r.jsx)(u,{cName:"github"}),resume:(0,r.jsx)(h,{cName:"resume"}),phone:(0,r.jsx)(f,{cName:"phone"}),email:(0,r.jsx)(v,{cName:"email"})};return(0,r.jsx)("div",{className:"pf-link",children:Object.keys(i).map((function(e,a){return(0,r.jsx)(t.E.div,{whileHover:s,className:"nav-icon-container",onMouseEnter:function(){n(e)},children:i[e]},a)}))})}var d=function(e){var n=e.cName;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:n+"-border"}),(0,r.jsxs)("div",{className:n+"-container link-icon",onClick:function(){o("https://www.linkedin.com/in/william-sentosatio/")},children:[(0,r.jsx)("div",{className:n+"-i"}),(0,r.jsx)("div",{className:n+"-n"})]})]})},u=function(e){var n=e.cName;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:n+"-border"}),(0,r.jsxs)("div",{className:n+"-container link-icon",onClick:function(){o("https://github.com/povertycycle")},children:[(0,r.jsx)("div",{className:n+"-body"}),(0,r.jsx)("div",{className:n+"-body-l"}),(0,r.jsx)("div",{className:n+"-body-l none"}),(0,r.jsx)("div",{className:n+"-body-r"}),(0,r.jsx)("div",{className:n+"-body-r none"}),(0,r.jsx)("div",{className:n+"-neck"}),(0,r.jsx)("div",{className:n+"-head"}),(0,r.jsx)("div",{className:n+"-head-l"}),(0,r.jsx)("div",{className:n+"-head-r"}),(0,r.jsx)("div",{className:n+"-ear-l"}),(0,r.jsx)("div",{className:n+"-ear-r"}),(0,r.jsx)("div",{className:n+"-tail-e"}),(0,r.jsx)("div",{className:n+"-tail-b"}),(0,r.jsx)("div",{className:n+"-tail-e none"}),(0,r.jsx)("div",{className:n+"-tail-b none"}),(0,r.jsx)("div",{className:n+"-tail-t"})]})]})},h=function(e){var n=e.cName;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:n+"-border"}),(0,r.jsx)("div",{className:n+"-flip",children:(0,r.jsx)("div",{className:n+"-strike"})}),(0,r.jsx)("div",{className:n+"-container link-icon",onClick:function(){o("https://docs.google.com/document/d/1wCx9U0Ecq8Uct1nVCWB16PpNLwkgJvGf/edit")},children:(0,r.jsx)("div",{className:n+"-lines",children:Array.from(Array(4)).map((function(e,a){return(0,r.jsx)("div",{className:n+"-line",style:{width:3==a?"80%":"100%"}},a)}))})})]})},m=function(e){var n=e.cName,a=e.renderBot;return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:n+"-container link-icon",onClick:a,children:[(0,r.jsx)("div",{className:n+"-roof-house"}),(0,r.jsx)("div",{className:n+"-roof-l"}),(0,r.jsx)("div",{className:n+"-roof-r"}),(0,r.jsx)("div",{className:n+"-base-house"}),(0,r.jsx)("div",{className:n+"-head"}),(0,r.jsx)("div",{className:n+"-body"})]})})},p=function(e){var n=e.showModal;return(0,r.jsx)("div",{className:"popup-modal",onAnimationEnd:function(){n(!1)},children:"Copied to Clipboard"})},f=function(e){var n=e.cName,a=(0,i.useState)(!1),t=(0,s.Z)(a,2),o=t[0],l=t[1];return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:n+"-border"}),(0,r.jsxs)("div",{className:n+"-container link-icon",onClick:function(){document.execCommand("copy"),l(!0)},onCopy:function(e){return c(e,"(+62)81288881024")},children:[(0,r.jsx)("div",{className:n+"-holder"}),(0,r.jsx)("div",{className:n+"-holder-none"}),(0,r.jsx)("div",{className:n+"-ear"}),(0,r.jsx)("div",{className:n+"-mouth"})]}),o?(0,r.jsx)(p,{showModal:l}):""]})},v=function(e){var n=e.cName,a=(0,i.useState)(!1),t=(0,s.Z)(a,2),o=t[0],l=t[1];return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:n+"-border"}),(0,r.jsx)("div",{className:n+"-container link-icon",onClick:function(){document.execCommand("copy"),l(!0)},onCopy:function(e){return c(e,"william.sentosatio@hotmail.com")},children:(0,r.jsx)("div",{className:n+"-shape"})}),o?(0,r.jsx)(p,{showModal:l}):""]})},x=(0,i.memo)((function(e){var n=e.neon,a=e.linksOn,s={0:1.5,1:4,2:3,3:2,4:5,5:3};return(0,r.jsx)("div",{className:"neon-letter-container",children:{about:["About"],name:["Will","i","am","Sento","sa","tio"],linkedin:["LinkedIn"],github:["GitHub"],resume:["Resume"],phone:["+(62)","812","8888","1024"],email:["william",".","sentosatio","@","hotmail.com"],clipboard:["Copied","to","Clipboard"]}[n].map((function(e,n){return(0,r.jsxs)("div",{style:{animation:a?"":"blink linear ".concat(s[n],"s")},children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("span",{className:"neon-reflection",children:e})]},n)}))})})),j=function(e){var n=e.links,a=e.renderBot,t=(0,i.useState)("name"),o=(0,s.Z)(t,2),c=o[0],d=o[1];return(0,r.jsxs)("div",{children:[n?(0,r.jsx)(l,{changeNeon:function(e){d(e)},renderBot:a}):"",(0,r.jsx)(x,{linksOn:n,neon:c})]})};function b(e){var n=e.raindrops;return(0,r.jsx)("div",{className:"rain-container",children:Array.from(Array(n)).map((function(e,n){var a=100*Math.random(),s=1-Math.pow((a-50)/60,2),i=5*Math.random()+5,t=Math.random()+.5,o=100*Math.random()+50,c=Math.random();return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"raindrop",style:{animationDelay:"".concat(i,"s"),animationDuration:"".concat(t,"s"),left:"".concat(a,"%"),top:"-".concat(o,"px"),transform:"scaleY(".concat(c,")"),opacity:s}}),(0,r.jsx)("div",{className:"wave",style:{animationDelay:"".concat(i+t,"s"),animationDuration:"".concat(t,"s"),top:"calc(85vh - ".concat(o,"px)"),left:"".concat(a,"%")}})]},n)}))})}var g=a(1413),y=a(6613),N=a(823),w=a(5667),k=function(e){var n,a,s=e.towers,i=e.goToProject,t=10,o=y.Z.generateGradient(N.BLACK,N.RAPTURE_DARK_BLUE,t+1);function c(e,n,a){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],t=0;return Array.from(Array(e)).map((function(o,c){var l=80/(e+1)/(c<=n?1:s)*(e+1-c),d=(100-l)/2,u=1*(c<=n?1:s)+Math.pow((c-e)/Math.pow(Math.pow(e,4)/(a-1),1/4),4);return t+=u,(0,r.jsx)("div",{className:"tower-stacks",style:(0,g.Z)({width:"".concat(l,"%"),left:"".concat(d,"%"),height:"".concat(u,"vh"),top:"-".concat(t,"vh")},i)},c)}))}return(0,r.jsxs)("div",{className:"buildings-container",children:[(0,r.jsxs)("div",{className:"rapture-main",style:{zIndex:t/2,borderRadius:"5%"},children:[c(4,2,5,5,{borderRadius:"5% 5% 0% 0% / 100% 100% 0% 0%",background:N.RAPTURE_SEA_GREEN}),(0,r.jsx)("div",{className:"lighthouse-beacon",onClick:function(){w.NY.scrollTo(-window.innerHeight,{smooth:"easeInQuad",duration:2e3})}})]},"rapture-main"),(n=36,a=10,Array.from(Array(n)).map((function(e,n){var i=1+5*Math.random(),l=n>=s/2?a+Math.random()*(50-a):50+Math.random()*(50-a),d=t/2+Math.round(t/2*Math.pow((l-50)/(50-a),2)),u=Math.round(4*Math.random())+2,h=Math.round(10*Math.random())+1;return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"tower",style:{left:"".concat(l-i/2,"%"),width:"".concat(i,"%"),height:"".concat(100-Math.pow((l-50)/5,2),"%"),zIndex:d+Math.round(Math.random())-2,animationDuration:"".concat(h,"s"),background:o[d-t/2]},children:c(u,Math.round(Math.random()*u),5,5,{background:o[d-5]})})},n)}))),(0,r.jsx)("div",{className:"fathomless-depths",onClick:i})]})},M=function(e){var n=e.bubbles;return(0,r.jsx)("div",{className:"bubbles-container",children:Array.from(Array(n)).map((function(e,n){var a=Math.round(10*Math.random())+1,s=Math.floor(100*Math.random()),i=Math.round(20*Math.random())+10,t=Math.round(20*Math.random())+1;return(0,r.jsx)("div",{className:"bubble",style:{left:"".concat(s,"%"),width:"".concat(a,"px"),height:"".concat(a,"px"),animationDelay:"".concat(i,"s"),animationDuration:"".concat(t,"s")}},n)}))})},A=function(e){var n=e.fishes;return(0,r.jsx)("div",{className:"fishes-container",children:Array.from(Array(n)).map((function(e,n){var a=Math.random()>=.5?1:-1,s=Math.round(10*Math.random()),i=.2+s/20,t=50*Math.random()+100,o=20*Math.random()+10*Math.random()+20,c=Math.round(5*Math.random())+1;return(0,r.jsx)("div",{className:"fish-school",style:{top:"".concat(50+40*Math.random(),"%"),marginLeft:1==a?"-".concat(s,"%"):"-105%",animationName:1==a?"swim":"swim-reverse",animationDelay:"".concat(o,"s"),animationDuration:"".concat(t,"s"),zIndex:s,opacity:.5+s/10},children:Array.from(Array(c)).map((function(e,n){return(0,r.jsx)("div",{className:"fish",style:{marginLeft:"".concat(Math.random()*s/2,"vh"),marginTop:"".concat(Math.random()*s/2,"vh"),transform:"scale(".concat(i,1==a?")":") rotateY(180deg)")}},n)}))},n)}))})},C={1:"#ffffff",2:"#99b3c8",3:"#5181a7",4:"#256293",5:"#004175"},D={javascript:{proficiency:4},python:{proficiency:4,children:["snake","twin","eye","eye2"]},golang:{proficiency:4,children:["g","o","streaks"]},reactjs:{proficiency:4,children:["base"]},html:{proficiency:4,children:["bg","line"]},css:{proficiency:4,children:["bg","line"]},java:{proficiency:3,children:["cup","cup1","cup2","cup3","cup4","holder","flame","flame1","flame2"]},git:{proficiency:2,children:["branch","branch2"]},mysql:{proficiency:2},"amazon-aws":{proficiency:1,children:["amazon-smile","amazon-commissures"]},"amazon-alexa":{proficiency:1,children:["amazon-smile","amazon-commissures"]},flask:{proficiency:1},c:{proficiency:1,children:["c-circle"]},"c#":{proficiency:1,children:["c-circle","sharp"]},nodejs:{proficiency:1,children:["n","o","d","e","stick"]},ocaml:{proficiency:1,children:["body","head","legs"]},rust:{proficiency:1,children:["r-circle","gear","gear2","gear3","corner","corner2","r"]},ruby:{proficiency:1,children:["center","left","right","offset-l"]}},R={word:{proficiency:3},excel:{proficiency:2},photoshop:{proficiency:1}},T={programming:D,other:R},S=function(e){var n,a=e.name,s=e.data,i=e.collection,t=e.setDesc,o=0;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"personal-skill-icon",title:i?"":a,onMouseEnter:t?function(){t("".concat(a," LEVEL ").concat(s.proficiency))}:null,children:(0,r.jsx)("div",{className:a+"-container skill",style:{background:"var(--".concat(a,"-logo-scheme)")},children:null===(n=s.children)||void 0===n?void 0:n.map((function(e,n){return(0,r.jsx)("div",{className:e},n)}))},o++)}),i?(0,r.jsx)("div",{className:"proficiency-container",children:Array.from(Array(5)).map((function(e,n){return(0,r.jsx)("div",{className:"proficiency-bar",style:{background:n<s.proficiency?C[n+1]:""}},n)}))}):""]})},E=function(e,n,a,s){return e.map((function(e,i){return(0,r.jsx)(S,{name:e,data:T[a][e],collection:n,setDesc:s},i)}))},I=function(e){var n=e.showHobby;return(0,r.jsxs)("div",{className:"about-panel-container",children:[(0,r.jsx)(z,{showHobby:n}),(0,r.jsx)(P,{})]})},z=function(e){var n=e.showHobby;return(0,r.jsxs)("div",{className:"about-header-container",children:[(0,r.jsx)("div",{className:"about-header-title",children:"Software Engineer - with a minor in mathematics"},"title"),(0,r.jsxs)("div",{className:"arts-musics-container",children:[(0,r.jsx)("span",{className:"hobby",onClick:n,children:"Arts & Music"}),(0,r.jsx)("span",{children:" enthusiast"})]},"art-music")]})},P=function(){var e=(0,i.useState)("information"),n=(0,s.Z)(e,2),a=n[0],t=n[1],o={information:(0,r.jsx)(Z,{}),education:(0,r.jsx)(B,{}),experience:(0,r.jsx)(L,{}),skills:(0,r.jsx)(U,{})};return(0,r.jsxs)("div",{className:"about-selection-container",children:[(0,r.jsx)("div",{className:"selections",children:Object.keys(o).map((function(e,n){return(0,r.jsx)(H,{cName:e,actv:a===e,display:t},n)}))}),(0,r.jsx)("div",{className:"about-information-panel",children:o[a]})]})},H=function(e){var n=e.cName,a=e.actv,t=e.display,o=(0,i.useState)(!1),c=(0,s.Z)(o,2),l=c[0],d=c[1];return(0,r.jsx)("div",{className:n+"-icon-container about-selection",style:{opacity:a?1:l?.7:.3},onMouseLeave:function(){a||d(!1)},onMouseEnter:function(){a||d(!0)},onClick:function(){t(n),d(!1)}})},Z=function(){return["Designed and developed the website with ReactJS.","Rain, bubbles, fishes, and buildings were randomly generated with parabolic equations.","All icons and shapes made purely from CSS; no image files were stored in repository.","Return to the surface with the circular light atop, or delve into my projects with the light from the fathomless depth below."].map((function(e,n){return(0,r.jsx)("span",{children:e},n)}))},B=function(){return[["University of Maryland","2016-2019","https://www.umd.edu/"],["Walla Walla Community College","2015-2016","https://www.wwcc.edu/"],["Catholic Junior College","2013-2014","https://cjc.moe.edu.sg/"],["Saint Joseph's Institution","2011-2012","https://www.sji.edu.sg/"]].map((function(e,n){return(0,r.jsxs)("div",{className:"education-url",children:[(0,r.jsx)("span",{style:{marginRight:"10px"},onClick:function(){var n;n=e[2],window.open(n)},children:e[0]}),(0,r.jsx)("span",{children:e[1]})]},n)}))},L=function(){var e=(0,i.useState)(0),n=(0,s.Z)(e,2),a=n[0],t=n[1];return[["Tokopedia","Software Engineer","2021-2022",{sub_details:["Backend engineer for Team Enterprise People & Team Enterprise Finance.","Developed and designed MySQL databases, RESTful API endpoints, as well as Unit and Integration testings in the three stages of environments: development, staging, and production.","Implemented app's stability and health through alert and monitoring services (DataDog, NewRelic, Scalyr, and PagerDuty) which logged any incoming error messages.","Maintained configuration and secret storing system which were updated regularly to match new and upcoming features.","Researched ways to improve upon existing features, algorithms, and database structures, as well as to develop experimental features and custom libraries.","Reviewed and commented on peers' pull-requests to preserve code quality in the repositories.","Recorded changes and additions of features within the app through API and Tech documentation.","Attended daily scrum and sprint plannings to dicuss about new features to be developed, bugs to be fixed, and tools to be tested.","Worked closely with teams of frontend engineers and product managers to deliver new features and updates every months."],skills:["golang","mysql","git"]}],["Perception & Robotics Group @ UMD","Research Assistant","2019-2022",{sub_details:["Developed and designed fully an open-source browser data-video visualizer called FEVA for a research purpose.","Developed a backend server API, capable of processing user configuration, editable data, and image assets into and from JSON files required for display.","Designed the frontend's UI/UX, code structure, as well as functions' logic and flows.","Developed a frontend display, capable of displaying massive data in the form of videos, keypoints, labels, frames, and soundwaves.","Tool's features: ","Display dynamically sections of the video, from the specified number columns and rows to its resolution size.","Display frames of the video in a timeline strip with a customizable seconds interval to the lowest of 500ms.","Display keypoints of the human joints, in sync with the video playing, stored within the local JSON file.","Display editable, filterable, and draggable label data in a panel, adjusted to the specified time interval of the video.","Customizable color for labels along with working undo and redo functions to the changes history list."],skills:["python","flask","javascript","html","css","reactjs","git"]}],["University of Maryland, College Park","Tutor","2018-2019",{sub_details:["Helped students with homeworks, exams, and concept problems for a range of subjects.","Attended regular meet-ups to discuss about events and improvements for the tutoring center"],skills:[]}],["Traits A.I.","AI Intern","2018-2019",{sub_details:["Developed an Amazon Alexa skill to educate consumer about Bitcoin."],skills:["javascript","amazon-aws","amazon-alexa"]}]].map((function(e,n){return(0,r.jsxs)("div",{className:"experience-content",style:{color:a==n?"white":""},children:[(0,r.jsx)("span",{onClick:function(){!function(e){t(e)}(n)},children:e[0]}),a==n?(s=e.slice(1,e.length),i=a==n?"2%":"",(0,r.jsxs)("div",{style:{left:i,position:"relative",padding:"5px"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{style:{marginRight:"5px"},children:s[0]}),(0,r.jsx)("span",{children:s[1]})]},"0"),(0,r.jsxs)("div",{className:"sub-details-container",children:[(0,r.jsx)("div",{className:"experience-sub-details",children:s[2].sub_details.map((function(e,n){return(0,r.jsx)("span",{children:e},n)}))},"1"),s[2].skills.length>0?(0,r.jsxs)("div",{className:"skills-used-container",children:[(0,r.jsx)("span",{children:"Programming Languages:"}),E(s[2].skills,!1,"programming",null)]}):""]})]})):""]},n);var s,i}))},U=function(){var e=(0,i.useState)("programming-skills"),n=(0,s.Z)(e,2),a=n[0],t=n[1],o=(0,i.useState)("-"),c=(0,s.Z)(o,2),l=c[0],d=c[1],u={"programming-skills":(0,r.jsx)(O,{setDesc:d}),others:(0,r.jsx)(_,{setDesc:d})};return(0,r.jsxs)("div",{className:"skills-panel-container",children:[(0,r.jsx)("div",{className:"skill-description",children:l}),(0,r.jsxs)("div",{className:"skills-panel",children:[(0,r.jsx)("div",{className:"skill-selector-container",children:Object.keys(u).map((function(e,n){return(0,r.jsx)("div",{className:e+" selector",style:{opacity:a==e?1:.3},onClick:function(){t(e)},children:e.replaceAll("-"," ")},n)}))}),u[a]]})]})},O=function(e){var n=e.setDesc;return(0,r.jsx)("div",{className:"programming-skills-container",children:E(Object.keys(D),!0,"programming",n)})},_=function(e){var n=e.setDesc;return(0,r.jsx)("div",{className:"other-skills-container",children:E(Object.keys(R),!0,"other",n)})},q=function(e){var n=e.fishes,a=e.bubbles,s=e.towers,i=e.showHobby,t=e.raptureRef,o=e.goToProject;return(0,r.jsxs)("div",{className:"rapture-container",ref:t,children:[(0,r.jsx)(I,{showHobby:i}),(0,r.jsx)(A,{fishes:n}),(0,r.jsx)(M,{bubbles:a}),(0,r.jsx)(k,{towers:s,goToProject:o})]})},F=function(e){var n=e.showRapture,a=e.hobbyRef;return(0,r.jsxs)("div",{className:"hobby-section",ref:a,children:[(0,r.jsx)("div",{className:"hobby-return-button",onClick:n,children:"Return to the center"}),(0,r.jsx)("div",{style:{fontSize:"5em",paddingTop:"25%",paddingLeft:"25%"},children:"In Development"})]})},G=(0,i.memo)((function(e){var n=e.goToProject,a=(0,i.useRef)(null),s=(0,i.useRef)(null),t=(0,i.useRef)(null);return(0,i.useEffect)((function(){a.current.scrollTo(window.innerWidth,0)})),(0,r.jsx)("div",{className:"pf-bot-section",ref:a,children:(0,r.jsxs)("div",{className:"pf-bot-scroll",children:[(0,r.jsx)(F,{showRapture:function(){s.current.scrollIntoView()},hobbyRef:t}),(0,r.jsx)(q,{fishes:25,bubbles:50,towers:36,showHobby:function(){t.current.scrollIntoView()},raptureRef:s,goToProject:n})]})})})),J=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(M,{bubbles:5})})},W=function(){return(0,r.jsx)("div",{className:"projects-container",children:(0,r.jsx)(J,{})})},V=function(){var e=(0,i.useState)(!1),n=(0,s.Z)(e,2),a=n[0],t=n[1],o=(0,i.useState)(!1),c=(0,s.Z)(o,2),l=c[0],d=c[1];return(0,i.useEffect)((function(){a||setTimeout((function(){t(!0)}),5500)})),(0,r.jsxs)("div",{className:"pf-body",children:[(0,r.jsx)(j,{links:a,renderBot:function(){d(!0),w.NY.scrollTo(window.innerHeight,{smooth:"easeInQuad",duration:2e3})}}),l?(0,r.jsx)(G,{goToProject:function(){w.NY.scrollTo(2*window.innerHeight,{smooth:"easeInQuad",duration:2e3})}}):"",l?(0,r.jsx)(W,{}):""]})};function Y(){return(0,r.jsxs)("div",{className:"pf-container",children:[(0,r.jsx)(b,{raindrops:50}),(0,r.jsx)(V,{})]})}},6613:function(e,n){var a={inputA:"",inputB:"",inputC:"",gradientElement:"",hexToRgb:function(e){return 3!==(e=e.replace("#","")).length&&6!==e.length?[255,255,255]:(3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),[parseInt(e.substr(0,2),16),parseInt(e.substr(2,2),16),parseInt(e.substr(4,2),16)])},rgbToHex:function(e){return e[0]=e[0]>255?255:e[0]<0?0:e[0],e[1]=e[1]>255?255:e[1]<0?0:e[1],e[2]=e[2]>255?255:e[2]<0?0:e[2],this.zeroFill(e[0].toString(16),2)+this.zeroFill(e[1].toString(16),2)+this.zeroFill(e[2].toString(16),2)},zeroFill:function(e,n){return(n-=e.toString().length)>0?new Array(n+(/\./.test(e)?2:1)).join("0")+e:e},generateGradient:function(e,n,a){var s,i,t,r=[];e=this.hexToRgb(e),n=this.hexToRgb(n),a-=1,s=(Math.max(e[0],n[0])-Math.min(e[0],n[0]))/a,i=(Math.max(e[1],n[1])-Math.min(e[1],n[1]))/a,t=(Math.max(e[2],n[2])-Math.min(e[2],n[2]))/a,r.push("#"+this.rgbToHex(e));for(var o=e[0],c=e[1],l=e[2],d=0;d<a-1;d++)o=e[0]<n[0]?o+Math.round(s):o-Math.round(s),c=e[1]<n[1]?c+Math.round(i):c-Math.round(i),l=e[2]<n[2]?l+Math.round(t):l-Math.round(t),r.push("#"+this.rgbToHex([o,c,l]));return r.push("#"+this.rgbToHex(n)),r}};n.Z=a}}]);
//# sourceMappingURL=931.3e0587aa.chunk.js.map