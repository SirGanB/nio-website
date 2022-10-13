"use strict";(self.webpackChunknio_website=self.webpackChunknio_website||[]).push([[4895],{6833:(a,e,r)=>{r.r(e),r.d(e,{assets:()=>N,contentTitle:()=>v,default:()=>T,frontMatter:()=>f,metadata:()=>C,toc:()=>_});var t=r(7462),s=r(7294),i=r(3905),n=r(1839),l=r(6010),o=r(2389),d=r(7392),u=r(7094),c=r(2466);const m="tabList__CuJ",p="tabItem_LNqP";function g(a){var e;const{lazy:r,block:i,defaultValue:n,values:o,groupId:g,className:b}=a,h=s.Children.map(a.children,(a=>{if((0,s.isValidElement)(a)&&"value"in a.props)return a;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof a.type?a.type:a.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=o??h.map((a=>{let{props:{value:e,label:r,attributes:t}}=a;return{value:e,label:r,attributes:t}})),f=(0,d.l)(k,((a,e)=>a.value===e.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((a=>a.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===n?n:n??(null==(e=h.find((a=>a.props.default)))?void 0:e.props.value)??h[0].props.value;if(null!==v&&!k.some((a=>a.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((a=>a.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:N}=(0,u.U)(),[_,E]=(0,s.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:y}=(0,c.o5)();if(null!=g){const a=C[g];null!=a&&a!==_&&k.some((e=>e.value===a))&&E(a)}const D=a=>{const e=a.currentTarget,r=T.indexOf(e),t=k[r].value;t!==_&&(y(e),E(t),null!=g&&N(g,String(t)))},x=a=>{var e;let r=null;switch(a.key){case"ArrowRight":{const e=T.indexOf(a.currentTarget)+1;r=T[e]??T[0];break}case"ArrowLeft":{const e=T.indexOf(a.currentTarget)-1;r=T[e]??T[T.length-1];break}}null==(e=r)||e.focus()};return s.createElement("div",{className:(0,l.Z)("tabs-container",m)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},b)},k.map((a=>{let{value:e,label:r,attributes:i}=a;return s.createElement("li",(0,t.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:a=>T.push(a),onKeyDown:x,onFocus:D,onClick:D},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":_===e})}),r??e)}))),r?(0,s.cloneElement)(h.filter((a=>a.props.value===_))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},h.map(((a,e)=>(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==_})))))}function b(a){const e=(0,o.Z)();return s.createElement(g,(0,t.Z)({key:String(e)},a))}const h="tabItem_Ymn6";function k(a){let{children:e,hidden:r,className:t}=a;return s.createElement("div",{role:"tabpanel",className:(0,l.Z)(h,t),hidden:r},e)}const f={sidebar_position:5},v="Classe",C={unversionedId:"generator/Classe/classe",id:"generator/Classe/classe",title:"Classe",description:"Cap\xedtulo 02 - Entre a Cruz e a Espada",source:"@site/docs/generator/Classe/classe.mdx",sourceDirName:"generator/Classe",slug:"/generator/Classe/",permalink:"/nio-website/docs/generator/Classe/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/generator/Classe/classe.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Tieflings",permalink:"/nio-website/docs/generator/Raca/Tieflings/"},next:{title:"B\xe1rbaro",permalink:"/nio-website/docs/generator/Classe/Barbaro/"}},N={},_=[{value:"Explana\xe7\xe3o",id:"explana\xe7\xe3o",level:2},{value:"Class Diagram:",id:"class-diagram",level:2}],E={toc:_};function T(a){let{components:e,...r}=a;return(0,i.kt)("wrapper",(0,t.Z)({},E,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"classe"},"Classe"),(0,i.kt)("p",null,"Cap\xedtulo 02 - Entre a Cruz e a Espada"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'"Em virtude da incongru\xeancia gerada pela palavra "Classe", ao notar que a mesma possui significados diferentes quando aplicadas \xe0 programa\xe7\xe3o ou ao universo de D&D.'),(0,i.kt)("p",{parentName:"admonition"},'N\xf3s optamos por utilizar a palavra "Classe" para RPG e para a \xe1rea programa\xe7\xe3o utilizaremos a mesma palavra, por\xe9m, em ingl\xeas "',(0,i.kt)("em",{parentName:"p"},"Class"),'".')),(0,i.kt)("h2",{id:"explana\xe7\xe3o"},"Explana\xe7\xe3o"),(0,i.kt)("p",null,"O conceito de classe no D&D \xe9 um conjunto de tra\xe7os que representam caracter\xedsticas que s\xe3o utilizadas como base para diversas mec\xe2nicas do RPG."),(0,i.kt)("p",null,"A Classe do Jogador determina os tra\xe7os que ser\xe3o utilizados na jogabilidade de uma forma geral."),(0,i.kt)("p",null,"No D&D existem originalmente doze classes, sendo elas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generator/Classe/barbaro"},"B\xe1rbaro")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generator/Classe/bardo"},"Bardo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generator/Classe/bruxo"},"Bruxo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generator/Classe/clerigo"},"Cl\xe9rigo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generator/Classe/druida"},"Druida")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generator/Classe/feiticeiro"},"Feiticeiro")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generator/Classe/guerreiro"},"Guerreiro")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generator/Classe/ladino"},"Ladino")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generator/Classe/mago"},"Mago")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generator/Classe/monge"},"Monge")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generator/Classe/paladino"},"Paladino")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generator/Classe/patrulheiro"},"Patrulheiro"))),(0,i.kt)("p",null,"A classe atribui um arqu\xe9tipo com v\xe1rias mec\xe2nicas ao personagem."),(0,i.kt)("p",null,"Possui como caracter\xedstica uma breve apresenta\xe7\xe3o sobre a classe, determina seus dados de vida, define sua \xe1rvore de habilidades, tamb\xe9m lhe atribui duas profici\xeancias em testes de resist\xeancia (TR), e por \xfaltimo mas n\xe3o menos importante, lhe confere algumas profici\xeancias em armas e\narmaduras."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"class-diagram"},"Class Diagram:"),(0,i.kt)(b,{groupId:"operating-systems",mdxType:"Tabs"},(0,i.kt)(k,{value:"classDiagram",label:"Diagrama de Classe",mdxType:"TabItem"},(0,i.kt)(n.G,{chart:"classDiagram\n  Personagem o-- Classe\n    Classe <|-- Mago\n      Mago <|-- EscolaAbjuracao\n      Mago <|-- EscolaEvocacao\n      Mago <|-- EscolaIlusao\n\n  <<Abstract>> Classe\n  class Classe {\n      - nome : String\n      - nivel : int\n      - descricao : String\n      - dadoVida : String\n      - proficiencias : Proficiencia\n  }\n\n  class Personagem {\n      - classe : Classe\n  }",mdxType:"Mermaid"})),(0,i.kt)(k,{value:"dartCode",label:"C\xf3digo Dart",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import \'habilidade.dart\';\n\nabstract class Classe {\nString _nome = "";\nString _descricao = "";\nint _dadoVida = 0;\nString _habilidadePrimaria = "";\nString _proficienciaArmasArmaduras = "";\nList<Habilidade> _habilidades = [];\n\nString get nome => _nome;\nset nome(String nome) => _nome = nome;\n\nString get descricao => this._descricao;\nset descricao(String descricao) => this._descricao = descricao;\n\nint get dadoVida => this._dadoVida;\nset dadoVida(int value) => this._dadoVida = value;\n\nString get habilidadePrimaria => this._habilidadePrimaria;\nset habilidadePrimaria(String value) => this._habilidadePrimaria = value;\n\nString get proficienciaArmasArmaduras => this._proficienciaArmasArmaduras;\nset proficienciaArmasArmaduras(String value) =>\n    this._proficienciaArmasArmaduras = value;\n\nList<Habilidade> get habilidades => this._habilidades;\naddHabilidade(habilidade) => this._habilidades.add(habilidade);\n')),(0,i.kt)("p",null,"  }"))))}T.isMDXComponent=!0}}]);