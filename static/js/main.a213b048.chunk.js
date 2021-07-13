(this.webpackJsonpneography=this.webpackJsonpneography||[]).push([[0],{14:function(l,e,i){},15:function(l,e,i){},18:function(l,e,i){"use strict";i.r(e);var t=i(1),s=i.n(t),n=i(4),h=i.n(n),a=(i(14),i(15),i(5)),r=i.n(a),f=i(6),o=i(7),c=i(2),u=i(9),C=i(8),b=i(0),d=function(l){Object(u.a)(i,l);var e=Object(C.a)(i);function i(l){var t;return Object(f.a)(this,i),(t=e.call(this,l)).state={nGen:0},t.dimension=5,t.squareSize=12,t.spacing=t.squareSize*t.dimension+20,t.glyphsPerRow=11,t.handleChange=t.handleChange.bind(Object(c.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(c.a)(t)),t}return Object(o.a)(i,[{key:"genRandomNumber",value:function(l){return Math.floor(Math.random()*l+1)}},{key:"handleChange",value:function(l){this.setState({nGen:l.target.value})}},{key:"fillCell",value:function(l,e,i,t,s){l.fillStyle="black";var n=e+s*this.squareSize,h=i+t*this.squareSize;l.fillRect(n,h,this.squareSize,this.squareSize)}},{key:"fillUpperLeft",value:function(l,e,i,t){switch(this.fillCell(e,i,t,0,0),l){case 1:this.fillCell(e,i,t,0,1),this.fillCell(e,i,t,0,2);break;case 2:this.fillCell(e,i,t,1,0),this.fillCell(e,i,t,2,0);break;case 3:this.fillCell(e,i,t,0,1),this.fillCell(e,i,t,0,2),this.fillCell(e,i,t,1,0),this.fillCell(e,i,t,2,0)}}},{key:"fillUpperRight",value:function(l,e,i,t){switch(this.fillCell(e,i,t,0,4),l){case 1:this.fillCell(e,i,t,0,3),this.fillCell(e,i,t,0,2);break;case 2:this.fillCell(e,i,t,1,4),this.fillCell(e,i,t,2,4);break;case 3:this.fillCell(e,i,t,0,3),this.fillCell(e,i,t,0,2),this.fillCell(e,i,t,1,4),this.fillCell(e,i,t,2,4)}}},{key:"fillLowerLeft",value:function(l,e,i,t){switch(this.fillCell(e,i,t,4,0),l){case 1:this.fillCell(e,i,t,4,1),this.fillCell(e,i,t,4,2);break;case 2:this.fillCell(e,i,t,3,0),this.fillCell(e,i,t,2,0);break;case 3:this.fillCell(e,i,t,4,1),this.fillCell(e,i,t,4,2),this.fillCell(e,i,t,3,0),this.fillCell(e,i,t,2,0)}}},{key:"fillLowerRight",value:function(l,e,i,t){switch(this.fillCell(e,i,t,4,4),l){case 1:this.fillCell(e,i,t,4,3),this.fillCell(e,i,t,4,2);break;case 2:this.fillCell(e,i,t,3,4),this.fillCell(e,i,t,2,4);break;case 3:this.fillCell(e,i,t,4,3),this.fillCell(e,i,t,4,2),this.fillCell(e,i,t,3,4),this.fillCell(e,i,t,2,4)}}},{key:"fillCrossUp",value:function(l,e,i,t){2===l&&(this.fillCell(e,i,t,0,2),this.fillCell(e,i,t,1,2),this.fillCell(e,i,t,2,2))}},{key:"fillCrossRight",value:function(l,e,i,t){2===l&&(this.fillCell(e,i,t,2,4),this.fillCell(e,i,t,2,3),this.fillCell(e,i,t,2,2))}},{key:"fillCrossDown",value:function(l,e,i,t){2===l&&(this.fillCell(e,i,t,4,2),this.fillCell(e,i,t,3,2),this.fillCell(e,i,t,2,2))}},{key:"fillCrossLeft",value:function(l,e,i,t){2===l&&(this.fillCell(e,i,t,2,0),this.fillCell(e,i,t,2,1),this.fillCell(e,i,t,2,2))}},{key:"generateGlyph",value:function(l,e,i){this.fillUpperLeft(this.genRandomNumber(3),l,e,i),this.fillUpperRight(this.genRandomNumber(3),l,e,i),this.fillLowerLeft(this.genRandomNumber(3),l,e,i),this.fillLowerRight(this.genRandomNumber(3),l,e,i),this.fillCrossUp(this.genRandomNumber(2),l,e,i),this.fillCrossRight(this.genRandomNumber(2),l,e,i),this.fillCrossDown(this.genRandomNumber(2),l,e,i),this.fillCrossLeft(this.genRandomNumber(2),l,e,i)}},{key:"handleSubmit",value:function(l){var e=0,i=0,t=document.getElementById("canvasChessboard"),s=t.getContext("2d");s.clearRect(0,0,t.width,t.height);for(var n=0;n<this.state.nGen;n++)e=n%this.glyphsPerRow*this.spacing,i=Math.floor(n/this.glyphsPerRow)*this.spacing,this.generateGlyph(s,e,i);l.preventDefault()}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Glyph Generating Idea (Adapted from user Oshimimers)"}),Object(b.jsx)("h4",{children:Object(b.jsx)("a",{href:"https://www.reddit.com/r/neography/comments/caev1r/i_programmed_my_calculator_to_generate_random/",target:"_blank",rel:"noreferrer",children:"(Link to original reddit post)"})}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("label",{children:["Number of Glyphs:",Object(b.jsx)("input",{type:"number",value:this.state.nGen,min:0,max:407,onChange:this.handleChange})]}),Object(b.jsx)("input",{type:"submit",value:"Generate!"})]}),Object(b.jsx)("br",{}),Object(b.jsx)("canvas",{id:"canvasChessboard",width:"900px",height:"3000px"})]})}}]),i}(s.a.Component);var g=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(r.a,{href:"https://github.com/Scorupa/neography",bannerColor:"#C44A41",octoColor:"#fff",size:80,direction:"left"}),Object(b.jsx)(d,{})]})},m=function(l){l&&l instanceof Function&&i.e(3).then(i.bind(null,19)).then((function(e){var i=e.getCLS,t=e.getFID,s=e.getFCP,n=e.getLCP,h=e.getTTFB;i(l),t(l),s(l),n(l),h(l)}))};h.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.a213b048.chunk.js.map