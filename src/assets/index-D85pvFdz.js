const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/online-fGHm1H1u.js","assets/supabase-client-CcfVv7ux.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const aa="modulepreload",sa=function(I){return"/"+I},It={},fe=function(e,s,t){let r=Promise.resolve();if(s&&s.length>0){let l=function(d){return Promise.all(d.map(c=>Promise.resolve(c).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var n=l;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");r=l(s.map(d=>{if(d=sa(d),d in It)return;It[d]=!0;const c=d.endsWith(".css"),m=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":aa,c||(h.as="script"),h.crossOrigin="",h.href=d,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((u,p)=>{h.addEventListener("load",u),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&i(o.reason);return e().catch(i)})};let kt=0;const ke=()=>++kt,wt=()=>{kt=0},Vt=I=>{kt=I},Me="__public__",Ee={firstStrike:{name:"先攻",description:"攻击没有先攻的随从时，若击杀目标则不受到反伤"},mobility:{name:"机动",description:"每回合可以同时攻击与防御"},taunt:{name:"嘲讽",description:"进入防御状态一回合，无法攻击，下回合开始时失效"},charge:{name:"连击",description:"每回合可以攻击两次"},frenzy:{name:"狂怒",description:"攻击消灭随从后可以再次攻击"},armor:{name:"护甲",description:"每次受到的伤害减少x",hasValue:!0},prepare:{name:"准备",description:"打出后x个回合内无法行动",hasValue:!0},brutal:{name:"暴虐",description:"只能攻击随从"},decapitate:{name:"斩首",description:"只能攻击英雄"},cannotMove:{name:"不动",description:"永远无法进行任何行动"},divineShield:{name:"圣盾",description:"免疫受到的第一次伤害"},element_fire:{name:"🔥",description:"攻击附带灼烧元素：第二次造成灼烧伤害时触发额外50%伤害"},element_ice:{name:"❄️",description:"攻击附带冰冻元素：第二次造成冰冻伤害时冰冻目标一回合"},element_lightning:{name:"⚡️",description:"攻击附带电击元素：第二次造成电击伤害时对随机目标额外造成50%伤害"}},ve=(I,e)=>I.keywords.some(s=>s.name===e),yt={fire:"🔥",ice:"❄️",lightning:"⚡️"},zt={fire:"灼烧",ice:"冰冻",lightning:"电击"},Et=I=>{for(const e of I.keywords){if(`${e.name}`,e.name==="🔥")return"fire";if(e.name==="❄️")return"ice";if(e.name==="⚡️")return"lightning"}},na=Object.freeze(Object.defineProperty({__proto__:null,CARD_GROUP_PUBLIC_ID:Me,ELEMENT_EMOJI:yt,ELEMENT_NAME:zt,KEYWORDS:Ee,generateCardId:ke,getAttackElementType:Et,hasKeyword:ve,resetCardIdCounter:wt,setCardIdCounter:Vt},Symbol.toStringTag,{value:"Module"})),me=(I,e)=>!!(I.moments&&I.moments.includes(e)||I.moment===e),St=I=>{if(!I||!I.skills)return I||null;const e=I.skills.map(s=>({...s,remainingCooldown:0,usesLeft:s.limited?s.maxUses??1:void 0}));return{...I,skills:e}},be=I=>{const e=[I.name||"",I.type||"",I.cost??0,I.type!=="spell"?I.attack??0:0,I.type!=="spell"?I.health??0:0,I.armorValue??0],s=(I.keywords||[]).map(t=>`${t.name}:${t.value??""}`).sort().join("|");return e.push(s),e.join("|")},Qe=I=>{const e=new Map;for(const s of I){const t=be(s),r=e.get(t);r?r.count++:e.set(t,{card:s,count:1})}return Array.from(e.values())},Ye=I=>{const e=[];for(const s of I)for(let t=0;t<s.count;t++)e.push({...s.card,id:ke()});return e},De=I=>I.groups[0],Ft=(I,e)=>I.groups.find(s=>s.id===e),jt=I=>{const e=[];for(const s of I.groups)for(const t of s.cards)t.card.type==="hero"&&e.push(t.card);return e},Je=(I,e)=>{if(e.type!=="hero")return;const s=be(e);return I.groups.find(t=>t.cards.some(r=>be(r.card)===s))};let ra=0;const ue=(I,e,s,t)=>{const r={id:++ra,turn:I.turnNumber,playerId:e,type:s,message:t,timestamp:Date.now()};return{...I,gameLogs:[...I.gameLogs,r]}},nt=(I,e,s)=>{const t=Math.min(e,s),r=s-t,i=Math.min(I-e,r);return{newEnergy:I-t-i,newBonusEnergy:e-t}},bt=()=>({id:ke(),name:"幸运币",cost:0,attack:0,health:0,maxHealth:0,type:"spell",keywords:[],legacyEffect:"gain_energy",legacyEffectValue:1,imageData:"/cards/coin.png"});function He(I){const e=[...I];for(let s=e.length-1;s>0;s--){const t=Math.floor(Math.random()*(s+1));[e[s],e[t]]=[e[t],e[s]]}return e}function ia(I,e){const s=[...I];let t=e;const r=()=>(t=(t*16807+0)%2147483647,(t-1)/2147483646);for(let i=s.length-1;i>0;i--){const n=Math.floor(r()*(i+1));[s[i],s[n]]=[s[n],s[i]]}return s}const Oe=I=>({id:I,name:`玩家${I}`,health:30,maxHealth:30,energy:1,maxEnergy:1,hand:[],board:[],deck:[],personalBattleDeck:[],halfPublicDeck:[]}),Gt=I=>{wt();const e=I&&I.length>0?Qe(I):[],s=[];for(const t of e)t.card.type==="hero"&&s.push(t.card);return{phase:"menu",soundEffects:[],pendingVisualEffects:[],currentPlayerId:1,turnNumber:1,players:[Oe(1),Oe(2)],sharedDeck:e,heroCards:s,heroCard:null,groups:[{id:Me,name:"公用卡组",cards:e}],publicBattleDeck:[],winner:null,waitingForNextPlayer:!1,newlyDrawnCardIds:[],gameLogs:[],discardPile:[],mulliganCards:[],mulliganSelected:[],mulliganFirstPlayer:1,mulliganDone:0,p2MulliganCards:[],p2MulliganSelected:[],skipFirstDraw:!1,online:{isOnline:!1,playerId:"",playerNickname:"",currentRoom:null,messages:[],playerReady:[],localDeckImport:null,remoteDeckImports:{},battlePlayers:[],isSpectator:!1,spectatorViewPlayerId:"",diceRolls:[],firstPlayerId:"",lastLoserId:"",rematchRequested:[],isWaitingForGameState:!1,heroSelections:{}}}},oa=I=>({...I,phase:"setup"}),la=I=>({...I,phase:"robotSetup"}),da=(I,e,s)=>{const t=Ye(I.groups[0].cards.filter(h=>h.card.type!=="hero")),r=t.length>0?He(t):[];let i=[];if(s){const h=Je(I,s);h&&h.id!==Me&&(i=Ye(h.cards.filter(u=>u.card.type!=="hero")))}const n=i.length>0?He(i):[],a=He([...i]),o=[],l=2,d={id:ke(),name:"🤖 Robot",type:"hero",cost:0,attack:0,health:0,maxHealth:0,keywords:[],imageData:"/robot-hero.png",skills:[{id:1,name:"芯片强化",type:"active",cost:1,cooldown:2,iconData:"/robot-skill.png",description:"对选择随从+1/+1",effects:[{moment:"打出时",targets:["选择随从"],effect:"属性变化",value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0,isAttackSet:!1,isHealthSet:!1,isCostPositive:!0,isCostSet:!1,costValue:0,triggerNumbers:[1,2,3,4,5,6],randomTargetTimes:1}]}],heroSpeech:{greeting:"你好！",apology:"抱歉。",taunt:"吁，Loser！",exclamation:"Awww man！",pity:"aww...",flirt:"我喜欢你。",voiceType:"female"}},c={phase:"mulligan",soundEffects:[],pendingVisualEffects:[],currentPlayerId:1,turnNumber:1,players:[{...Oe(1),name:e||"玩家",deck:a,hand:[],energy:1,maxEnergy:1,heroCard:s||null,personalBattleDeck:n},{...Oe(2),name:"🤖 Robot",deck:o,hand:[],health:40,maxHealth:40,energy:1,maxEnergy:1,heroCard:d,personalBattleDeck:[]}],winner:null,sharedDeck:I.sharedDeck,heroCards:I.heroCards||[],heroCard:null,groups:I.groups,publicBattleDeck:r,waitingForNextPlayer:!1,newlyDrawnCardIds:[],gameLogs:I.gameLogs||[],discardPile:[],online:I.online,mulliganCards:[],mulliganSelected:[],mulliganFirstPlayer:1,mulliganDone:0,p2MulliganCards:[],p2MulliganSelected:[],skipFirstDraw:!0};for(let h=0;h<3;h++)rt(c,l);const m=[];for(let h=0;h<4;h++){const u=Ge(c,1,!1);u&&m.push(u)}return c.mulliganCards=m,c.newlyDrawnCardIds=m.map(h=>h.id),c},Ut=(I,e)=>{let s=I;const t=e-1,r=[...s.players[t].board];for(const a of r)if(a.pendingNextTurnEffect&&a.pendingNextTurnEffectOwnerId===e){if(!s.players[t].board.some(c=>c.id===a.id)){const c=s.players[t].board.findIndex(m=>m.id===a.id);c!==-1&&(s.players[t].board[c].pendingNextTurnEffect=void 0,s.players[t].board[c].pendingNextTurnEffectOwnerId=void 0);continue}s=Te(s,[a.pendingNextTurnEffect],e,a.name,"下回合开始时",{targetMinion:a,attackerMinion:a,sourceCard:a});const d=s.players[t].board.findIndex(c=>c.id===a.id);d!==-1&&(s.players[t].board[d].pendingNextTurnEffect=void 0,s.players[t].board[d].pendingNextTurnEffectOwnerId=void 0)}const i=s.players[t],n=i.pendingSpellNextTurnEffects||[];if(n.length>0){console.log('[processNextTurnEffects] 处理法术牌"下回合开始时"效果:',n.length,"个");for(const a of n)s=Te(s,[a.effect],e,"法术效果","下回合开始时",{sourceCard:a.sourceCard});s.players[t]={...i,pendingSpellNextTurnEffects:[]}}return s},ca=I=>{const e=I.currentPlayerId-1,s=I.currentPlayerId,t=I.currentPlayerId===1?2:1,r=t-1,i=I.players[e],n={...i,energy:0},a=i.board;let o={...I,players:I.players.map((g,y)=>y===e?n:g)};for(const g of a){const x=(g.effects||(g.effect?[g.effect]:[])).filter(w=>me(w,"回合结束时")&&w.effect);x.length>0&&(o=Te(o,x,s,g.name,"回合结束时",{targetMinion:g,attackerMinion:g,sourceCard:g}))}const l=s-1;o.players[l]={...o.players[l],board:o.players[l].board.map(g=>({...g,playedThisTurn:!1}))},o.players[l]={...o.players[l],board:o.players[l].board.map(g=>{const y=g.keywords.some(x=>x.name==="不动");if(g.preparation>0){const x=g.preparation-1;return{...g,preparation:x,canAttack:y?!1:x===0&&!Ue(g)?!0:g.canAttack,canAttackHeroes:y?!1:x===0&&!Ue(g)?!ve(g,"暴虐"):g.canAttackHeroes,canAttackMinions:y?!1:x===0&&!Ue(g)?!ve(g,"斩首"):g.canAttackMinions}}return g})},o.players[l]={...o.players[l],heroMarkCount:0};const d=g=>{const y=g.heroCard?.skills?.map(x=>{const w=x.remainingCooldown??0,f=Math.max(0,w-1);return{...x,remainingCooldown:f}});return{...g,heroCard:g.heroCard?{...g.heroCard,skills:y}:void 0}};o={...o,players:o.players.map(d)},o.players[r];const c=o.currentPlayerId===1?o.turnNumber+1:o.turnNumber;let m={...o,currentPlayerId:t,turnNumber:c,waitingForNextPlayer:!1,newlyDrawnCardIds:[]};const h=Math.min(10,c),u=m.players[r];m.players[r]={...u,maxEnergy:h,energy:h,heroSkillUsed:u.heroCard?.skills?.map(()=>!1),board:u.board.map(g=>{const y=g.keywords.some(x=>x.name==="不动");return g.keywords.some(x=>x.name==="嘲讽"),{...g,keywords:g.keywords.filter(x=>x.name!=="嘲讽"),playedThisTurn:!1,canAttack:y?!1:!(g.preparation>0),hasAttacked:!1,attacksThisTurn:0,canAttackHeroes:y||g.preparation>0?!1:!ve(g,"暴虐"),canAttackMinions:y||g.preparation>0?!1:!ve(g,"斩首"),isDefending:!1}})};const p=m.players[e].heroCard;if(p&&p.skills)for(let g=0;g<p.skills.length;g++){const y=p.skills[g];if(y.type!=="passive")continue;const w=(y.effects||(y.effect?[y.effect]:[])).filter(f=>me(f,"回合结束时")&&f.effect);w.length>0&&(m=Te(m,w,s,`${m.players[e].name}的被动【${y.name}】`,"回合结束时",{sourceCard:p}))}if(t===1&&c===1){const g={...bt(),id:ke()};m.players[r].hand.push(g),m.newlyDrawnCardIds.push(g.id)}return m=(g=>{let y=g;const x=[...y.players[r].board];for(const w of x){if(!y.players[r].board.some(T=>T.id===w.id))continue;const S=(w.effects||(w.effect?[w.effect]:[])).filter(T=>me(T,"回合开始时")&&T.effect);S.length>0&&(y=Te(y,S,t,w.name,"回合开始时",{targetMinion:w,attackerMinion:w,sourceCard:w}))}return y})(m),m=Ut(m,t),m.phase="robotBattle",c>1&&rt(m,t),m},ha=(I,e,s,t,r)=>{const i=Ye(I.groups[0].cards.filter(p=>p.card.type!=="hero")),n=i.length>0?He(i):[];let a=[];if(t){const p=Je(I,t);p&&p.id!==Me&&(a=Ye(p.cards.filter(b=>b.card.type!=="hero")))}const o=a.length>0?He(a):[];let l=[];if(r){const p=Je(I,r);p&&p.id!==Me&&(l=Ye(p.cards.filter(b=>b.card.type!=="hero")))}const d=l.length>0?He(l):[],c=He([...a]),m=He([...l]),h={phase:"mulligan",soundEffects:[],turnNumber:1,players:[{...Oe(1),name:e||"玩家1",deck:c,energy:1,maxEnergy:1,heroCard:St(t),personalBattleDeck:o},{...Oe(2),name:s||"玩家2",deck:m,energy:1,maxEnergy:1,heroCard:St(r),personalBattleDeck:d}],winner:null,sharedDeck:I.sharedDeck,heroCards:I.heroCards||[],heroCard:null,groups:I.groups,publicBattleDeck:n,waitingForNextPlayer:!1,newlyDrawnCardIds:[],gameLogs:[],discardPile:[],currentPlayerId:1,mulliganCards:[],mulliganSelected:[],mulliganFirstPlayer:1,mulliganDone:0,p2MulliganCards:[],p2MulliganSelected:[],skipFirstDraw:!1,online:I.online,pendingVisualEffects:[]},u=[];for(let p=0;p<3;p++){const b=Ge(h,1,!1);b&&u.push(b)}return h.mulliganCards=u,h.newlyDrawnCardIds=u.map(p=>p.id),h},Ge=(I,e,s=!0)=>{const t=e-1,r=I.players[t],i=r.halfPublicDeck&&r.halfPublicDeck.length>0,n=i?r.halfPublicDeck:I.publicBattleDeck||[],a=r.personalBattleDeck||[],o=n.length,l=a.length,d=o+l;if(d===0){if(r.deck&&r.deck.length>0){const m={...r.deck[0],id:ke()},h=r.deck.slice(1);return I.players[t]={...r,deck:h,hand:s?[...r.hand,m]:r.hand},I.newlyDrawnCardIds=[...I.newlyDrawnCardIds,m.id],m}return I.players[t]={...r,health:r.health-1},null}let c;if(l===0?c=!0:o===0?c=!1:c=Math.random()<o/d,c){const m={...n[0],id:ke()};return i?I.players[t]={...r,halfPublicDeck:n.slice(1),personalBattleDeck:a,hand:s?[...r.hand,m]:r.hand}:(I.publicBattleDeck=n.slice(1),I.players[t]={...r,personalBattleDeck:a,hand:s?[...r.hand,m]:r.hand}),I.newlyDrawnCardIds=[...I.newlyDrawnCardIds,m.id],m}else{const m={...a[0],id:ke()};return I.players[t]={...r,halfPublicDeck:i?n:r.halfPublicDeck,personalBattleDeck:a.slice(1),hand:s?[...r.hand,m]:r.hand},I.newlyDrawnCardIds=[...I.newlyDrawnCardIds,m.id],m}},rt=(I,e)=>{Ge(I,e)},ua=(I,e)=>{const s={...I},t=e-1,r=s.players[t];if(r.deck&&r.deck.length>0){const i={...r.deck[0],id:ke()},n=r.deck.slice(1);return s.players[t]={...r,deck:n,hand:[...r.hand,i]},s.newlyDrawnCardIds=[...s.newlyDrawnCardIds,i.id],ue(s,e,"draw_card",`${s.players[t].name} 抽了 1 张牌`)}else return s.players[t]={...r,health:r.health-1},ue(s,e,"damage",`${s.players[t].name} 疲劳受伤 1 点`)},Wt=(I,e,s)=>{const t=e-1,r=I.players[t],i=r.hand.findIndex(_=>_.id===s);if(i===-1)return I;const n=r.hand[i];if(r.energy<n.cost)return I;const a={...I,newlyDrawnCardIds:[]};if(a.players=[...I.players],n.type==="spell"){console.log("[playCard] 处理法术卡:",n.name,"legacyEffect:",n.legacyEffect,"effects:",n.effects);const{newEnergy:_,newBonusEnergy:B}=nt(r.energy,r.bonusEnergy||0,n.cost);let $=_,N=B;console.log("[playCard] 初始能量:",r.energy,"绿色能量:",r.bonusEnergy,"费用:",n.cost,"扣除后:",$,"剩余绿色:",N),n.legacyEffect==="gain_energy"&&n.legacyEffectValue&&($=$+n.legacyEffectValue,N+=n.legacyEffectValue,console.log("[playCard] legacyEffect获得能量:",n.legacyEffectValue,"总bonusEnergy:",N)),a.players[t]={...r,energy:$,bonusEnergy:N,hand:r.hand.filter((se,Y)=>Y!==i)},a.discardPile=[n,...a.discardPile];const J=n.effects||[];let U=a;const ne=J.filter(se=>me(se,"下回合开始时")&&se.effect);if(ne.length>0){const se=U.players[t],Y=se.pendingSpellNextTurnEffects||[];U.players[t]={...se,pendingSpellNextTurnEffects:[...Y,...ne.map(C=>({effect:C,sourceCard:n}))]},console.log('[playCard] 暂存"下回合开始时"效果:',n.name,ne)}const Z=J.filter(se=>!me(se,"下回合开始时"));for(const se of Z)if(se.effect)if(se.effect==="获得能量"&&se.value){const Y=U.players[t];U.players[t]={...Y,energy:Y.energy+se.value,bonusEnergy:(Y.bonusEnergy||0)+se.value},console.log("[playCard] effects获得能量:",se.value)}else if(se.effect==="失去能量"&&se.value){const Y=U.players[t],C=Math.min(se.value,Y.energy);U.players[t]={...Y,energy:Y.energy-C},console.log("[playCard] effects失去能量:",C)}else{const Y=se.targets||[];Y.includes("选择目标")||Y.includes("选择随从")||(U=Te(U,[se],e,n.name,"打出时",{sourceCard:n}),console.log("[playCard] 执行效果:",se.effect,"目标:",Y))}return U=ue(U,e,"play_card",`${U.players[t].name} 打出 ${n.name}（法术）`),U}const o=ve(n,"嘲讽"),l=ve(n,"连击"),d=ve(n,"圣盾"),c=n.keywords.find(_=>_.name==="准备"),m=c?c.value??1:0,h=ve(n,"暴虐"),u=ve(n,"斩首"),p=ve(n,"机动"),b=ve(n,"不动"),g=p&&!o&&!b&&m===0,y={...n,canAttack:b?!1:g,hasAttacked:!1,attacksThisTurn:0,maxAttacksPerTurn:l?2:1,divineShieldActive:d,canAttackHeroes:b?!1:g&&!h,canAttackMinions:b?!1:g&&!u,playedThisTurn:!0,isDefending:b?!1:o,preparation:m},w=(n.effects||(n.effect?[n.effect]:[])).find(_=>me(_,"下回合开始时")&&_.effect);w&&(y.pendingNextTurnEffect=w,y.pendingNextTurnEffectOwnerId=e);const f=a.players[t],v=f.hand.filter((_,B)=>B!==i),{newEnergy:E,newBonusEnergy:S}=nt(f.energy,f.bonusEnergy||0,n.cost);a.players[t]={...f,energy:E,bonusEnergy:S,hand:v,board:[...f.board,y]};const A=(n.effects||(n.effect?[n.effect]:[])).filter(_=>me(_,"打出时")&&_.effect);let R=ue(a,e,"play_card",`${a.players[t].name} 打出 ${n.name}（${n.attack}/${n.health}）`);if(A.length>0){console.log("触发打出时效果:",n.name,A);for(const _ of A){const B=_.targets||[];B.includes("选择目标")||B.includes("选择随从")||(R=Te(R,[_],e,n.name,"打出时",{excludeMinionId:y.id,sourceCard:y}))}}return R},fa=(I,e,s,t,r)=>{const i=e-1,n=I.players[i],a=n.heroCard;if(!a||!a.skills||s<0||s>=a.skills.length)return I;const o=a.skills[s],l=o.effects||(o.effect?[o.effect]:[]);if(l.length===0||l.every(v=>!v.effect)||n.energy<(o.cost??0))return I;const d=n.heroSkillUsed||[];if(d[s]||(o.remainingCooldown??0)>0)return I;const m=o.usesLeft??(o.limited?o.maxUses:void 0);if(o.limited&&(m===void 0||m<=0))return I;const{newEnergy:h,newBonusEnergy:u}=nt(n.energy,n.bonusEnergy||0,o.cost??0);let p={...I,players:[...I.players]};const b=[...d];b[s]=!0;const g=o.cooldown??0,y=g>0?g*2+1:0,x=o.limited&&m!==void 0?m-1:void 0,w=a.skills.map((v,E)=>E===s?{...v,remainingCooldown:y,usesLeft:x}:v);p.players[i]={...n,energy:h,bonusEnergy:u,heroSkillUsed:b,heroCard:{...a,skills:w}};const f=l.filter(v=>me(v,"打出时")&&v.effect);for(const v of f){const E=v.targets||[];if(!(E.includes("选择目标")||E.includes("选择随从")))p=Te(p,[v],e,`技能「${o.name}」`,"打出时",{sourceCard:a});else if(t!==void 0){let T={};if(r!==void 0){const A=t-1,R=p.players[A].board.find(_=>_.id===r);T={targetPlayerId:t,targetCardId:r,targetMinion:R,sourceCard:a}}else T={targetPlayerId:t,sourceCard:a};p=Te(p,[v],e,`技能「${o.name}」`,"打出时",T)}}return p=ue(p,e,"play_card",`${n.name} 发动技能「${o.name}」`),p},pa=(I,e,s,t,r)=>{const i=e-1,n=I.players[i].hand.find(h=>h.id===s);if(!n)return I;let a=I;if(n.type==="spell"?a=ue(I,e,"play_card",`${I.players[i].name} 打出 ${n.name}（法术）`):a=ue(I,e,"play_card",`${I.players[i].name} 打出 ${n.name}（${n.attack}/${n.health}）`),n.type==="spell"){const h=a.players[i],{newEnergy:u,newBonusEnergy:p}=nt(h.energy,h.bonusEnergy||0,n.cost);let b={...a,players:[...a.players]};b.players[i]={...h,energy:u,bonusEnergy:p,hand:h.hand.filter(w=>w.id!==s)},b.discardPile=[n,...b.discardPile];const g=n.effects||[],y=g.filter(w=>me(w,"下回合开始时")&&w.effect);if(y.length>0){const w=b.players[i],f=w.pendingSpellNextTurnEffects||[];b.players[i]={...w,pendingSpellNextTurnEffects:[...f,...y.map(v=>({effect:v,sourceCard:n}))]},console.log('[playCardWithTarget] 暂存"下回合开始时"效果:',n.name,y)}const x=g.filter(w=>!me(w,"下回合开始时"));for(const w of x){if(!w.effect)continue;let f;if(r!==void 0){const v=t-1,E=a.players[v].board.find(S=>S.id===r);f={targetPlayerId:t,targetCardId:r,targetMinion:E}}else f={targetPlayerId:t};if(b=Te(b,[w],e,n.name,"打出时",{...f,sourceCard:n}),w.effect==="造成伤害"){const v=w.value||1,E=t-1,S=b.players[E];if(r!==void 0){const T=S.board.find(A=>A.id===r);T&&(b=ue(b,e,"damage",`${n.name} 对 ${T.name} 造成 ${v} 点伤害`))}else b=ue(b,e,"damage",`${n.name} 对 ${S.name} 造成 ${v} 点伤害`)}}return b}const o=Wt(a,e,s),l=o.players[i],d=l.board[l.board.length-1];if(!d)return o;const c=n.effects||(n.effect?[n.effect]:[]);if(c.length===0)return o;let m=o;for(const h of c)if(me(h,"打出时"))if(h.effect==="造成伤害"){const u=h.value||1,p=h.elementType;if(r!==void 0){const b=t-1,g=m.players[b].board.findIndex(y=>y.id===r);if(g!==-1){m={...m},m.players=[...m.players];let y={...m.players[b]};y.board=[...y.board];const x=y.board[g];if(y.board[g]=Se(x,u),m.players[b]=y,p){const S=y.board.findIndex(T=>T.id===r&&T.health>0);if(S!==-1){const T=Be(m,"minion",b,S,u,p,e);if(m=T.state,T.triggered&&T.extraDamage&&p==="fire"){const A=m.players[b],R=A.board[S];if(R&&R.health>0){const _=Se(R,T.extraDamage),B={...A,board:[...A.board]};B.board[S]=_;const $=[...m.players];$[b]=B,m={...m,players:$}}}y={...m.players[b]}}}const w=y.board[g],f=(w.effects||[]).filter(S=>me(S,"失去生命时")&&S.effect);for(const S of f)m=we(m,S,b+1,{sourceCard:w,attackerMinion:w}),m={...m},m.players=[...m.players],y={...m.players[b]};m=ue(m,e,"damage",`${d.name} 对 ${x.name} 造成 ${u} 点伤害`);const E=y.board.filter(S=>S.health<=0).map(S=>({...S,health:S.maxHealth}));y.board=y.board.filter(S=>S.health>0),m.discardPile=[...E,...m.discardPile],m.players[b]=y}}else{const b=t-1;m={...m},m.players=[...m.players];const g={...m.players[b]};if(g.health-=u,m=ue(m,e,"damage",`${d.name} 对 ${g.name} 造成 ${u} 点伤害`),m.players[b]=g,p){const v=Be(m,"hero",b,void 0,u,p,e);m=v.state;for(const E of v.logMessages)m=ue(m,e,"element",E);if(v.triggered&&v.extraDamage&&p==="fire"){const E={...m.players[b]};E.health-=v.extraDamage,m.players[b]=E}if(v.triggered&&v.extraDamageIsLightning){const E=v.extraDamage,S=m.players[b],T=S.board.filter(R=>R.health>0),A=[];if(T.forEach(R=>A.push({type:"minion",idx:S.board.indexOf(R)})),S.health>0&&A.push({type:"hero",idx:-1}),A.length>0){const R=A[Math.floor(Math.random()*A.length)];if(R.type==="hero"){const _={...m.players[b]};_.health-=E,m.players[b]=_}else{const _={...S};_.board=[..._.board];const B=Se(_.board[R.idx],E);if(_.board[R.idx]=B,B.health<=0){const $={...B,health:B.maxHealth};_.board=_.board.filter(N=>N.id!==B.id),m.discardPile=[$,...m.discardPile],m=ue(m,m.players[b].id,"element",`💀${B.name}被电击消灭`)}m.players[b]=_}}}}const y=g.id,x=y-1,w=m.players[x].heroCard,f=w?.skills||[];for(let v=0;v<f.length;v++){const E=f[v];if(E.type!=="passive")continue;const T=(E.effects||(E.effect?[E.effect]:[])).filter(A=>me(A,"受伤时")&&A.effect);if(T.length>0&&w){m=ue(m,y,"hero_skill",`${m.players[x].name} 的被动技能【${E.name}】触发`);for(const A of T)m=we(m,A,y,{sourceCard:w})}}m=je(m)}}else if(h.effect==="属性变化"){const u=h.attackValue??0,p=h.healthValue??0;if(r!==void 0){const b=t-1;m={...m},m.players=[...m.players];const g={...m.players[b]};g.board=[...g.board];const y=g.board.findIndex(x=>x.id===r);if(y!==-1){const x=g.board[y],w=h.isAttackSet?u-x.attack:h.isAttackPositive?u:-u,f=h.isHealthSet?p-x.health:h.isHealthPositive?p:-p,v=Math.max(0,x.attack+w),E=x.health+f,S=x.maxHealth+f;g.board[y]={...x,attack:v,health:E,maxHealth:Math.max(1,S)};const T=h.isAttackSet?"=":w>=0?"+":"",A=h.isHealthSet?"=":f>=0?"+":"";if(m=ue(m,e,"minion_skill",`${d.name} 使 ${x.name} 属性变为${T}${h.isAttackSet?u:w}/${A}${h.isHealthSet?p:f}`),E<=0){const _=g.board.filter(B=>B.health<=0).map(B=>({...B,health:B.maxHealth}));g.board=g.board.filter(B=>B.health>0),m.discardPile=[..._,...m.discardPile]}m.players[b]=g}}}else{const u=t-1,p=r!==void 0?m.players[u].board.find(b=>b.id===r):void 0;m=we(m,h,e,{targetPlayerId:t,targetCardId:r,targetMinion:p,attackerMinion:d,sourceCard:d})}return m},ma=(I,e,s,t,r)=>{console.log("[executePlayedMinionEffect] 开始执行, playerId:",e,"targetPlayerId:",t,"targetCardId:",r);const i=e-1,n=I.players[i],a=n.board[n.board.length-1];if(!a)return console.log("[executePlayedMinionEffect] 未找到打出的随从"),I;const l=(a.effects||(a.effect?[a.effect]:[])).filter(c=>me(c,"打出时")&&c.effect);if(console.log("[executePlayedMinionEffect] playedMinion:",a.name,"playEffects:",l),l.length===0)return console.log("[executePlayedMinionEffect] 没有打出时效果"),I;let d=I;for(const c of l){console.log("[executePlayedMinionEffect] 处理效果:",c.effect,"targets:",c.targets);const m=t-1,h=d.players[m],u=r!==void 0?h.board.find(b=>b.id===r):null;console.log("[executePlayedMinionEffect] targetMinion:",u?.name);const p=u?{targetPlayerId:t,targetCardId:r,targetMinion:u}:{targetPlayerId:t};d=Te(d,[c],e,a.name,"打出时",{...p,sourceCard:a}),console.log("[executePlayedMinionEffect] 效果执行完成")}return d},Ue=I=>I.keywords.some(e=>e.name==="嘲讽"),Yt=I=>I.isDefending||Ue(I),qt=I=>I.some(e=>Yt(e)),ga=I=>!(!I.canAttack||I.attacksThisTurn>=I.maxAttacksPerTurn||I.keywords.some(e=>e.name==="连击"||e.name==="狂怒")||I.isDefending||I.keywords.some(e=>e.name==="不动")),ya=(I,e)=>{if(ve(I,"护甲")){const s=I.armorValue||1;return Math.max(0,e-s)}return e},Se=(I,e)=>{if(I.divineShieldActive&&e>0)return{...I,divineShieldActive:!1};const s=ya(I,e);return{...I,health:I.health-s}},Be=(I,e,s,t,r,i,n)=>{let a=I;const o=[],l=yt[i],d=zt[i],c=()=>e==="minion"&&t!==void 0?a.players[s].board[t]?.elementStatus:a.players[s].elementStatus,m=u=>{if(e==="minion"&&t!==void 0){const p={...a.players[s]};p.board=[...p.board],p.board[t]={...p.board[t],elementStatus:u};const b=[...a.players];b[s]=p,a={...a,players:b}}else{const p={...a.players[s],elementStatus:u},b=[...a.players];b[s]=p,a={...a,players:b}}},h=c();if(!h){m({type:i,sourcePlayerId:n});const u=e==="minion"&&t!==void 0?a.players[s].board[t]?.name||"随从":a.players[s].name||"英雄";return console.log("[processElementOnTarget] 叠加元素状态:",u,"类型:",i,"targetType:",e,"minionIndex:",t),o.push(`${u} 被叠加了${l}${d}状态`),{state:a,triggered:!1,elementType:i,logMessages:o}}if(h.type===i){m(void 0);const u=e==="minion"&&t!==void 0?a.players[s].board[t]?.name||"随从":a.players[s].name||"英雄";if(i==="fire"){const p=Math.ceil(r*.5);if(o.push(`${l} ${u} 的${d}状态触发！额外受到 ${p} 点伤害`),e==="minion"&&t!==void 0){const b=a.players[s].board[t];b&&(a={...a,pendingVisualEffects:[...a.pendingVisualEffects||[],{type:"fire_explosion",targetMinionId:b.id,targetPlayerId:a.players[s].id,targetType:"minion"}]})}else e==="hero"&&(a={...a,pendingVisualEffects:[...a.pendingVisualEffects||[],{type:"fire_explosion",targetPlayerId:a.players[s].id,targetType:"hero"}]});return{state:a,triggered:!0,elementType:i,extraDamage:p,logMessages:o}}else if(i==="ice"){if(o.push(`${l} ${u} 的${d}状态触发！`),e==="minion"&&t!==void 0){const p={...a.players[s]};p.board=[...p.board],p.board[t]={...p.board[t],frozen:!0};const b=[...a.players];b[s]=p,a={...a,players:b},o.push(`${u} 被冰冻，下回合无法行动`);const g=a.players[s].board[t];a={...a,pendingVisualEffects:[...a.pendingVisualEffects||[],{type:"ice_explosion",targetMinionId:g.id,targetPlayerId:a.players[s].id,targetType:"minion"}]}}else{const p={...a.players[s]};p.frozen=!0;const b=[...a.players];b[s]=p,a={...a,players:b},o.push(`${u} 被冰冻，下回合开始时失去20%能量`),a={...a,pendingVisualEffects:[...a.pendingVisualEffects||[],{type:"ice_explosion",targetPlayerId:a.players[s].id,targetType:"hero"}]}}return{state:a,triggered:!0,elementType:i,logMessages:o}}else if(i==="lightning"){const p=Math.ceil(r*.5);return o.push(`${l} ${u} 的${d}状态触发！`),{state:a,triggered:!0,elementType:i,extraDamage:p,extraDamageIsLightning:!0,logMessages:o}}return{state:a,triggered:!1,elementType:i,logMessages:o}}else{const u=yt[h.type];m({type:i,sourcePlayerId:n});const p=e==="minion"&&t!==void 0?a.players[s].board[t]?.name||"随从":a.players[s].name||"英雄";return o.push(`${p} 的${u}状态被${l}覆盖`),{state:a,triggered:!1,elementType:i,logMessages:o}}},Ve=(I,e,s)=>{switch(e){case"<":return I<s;case"=":return I===s;case">":return I>s;case"<=":return I<=s;case">=":return I>=s;default:return I===s}},Ke=I=>I==="<="?"≤":I===">="?"≥":I,it=(I,e,s,t)=>{const r=I.conditionType||(!I.triggerNumbers||I.triggerNumbers.length===6?"guaranteed":"d6");if(r==="guaranteed")return{passed:!0,logMessage:""};if(r==="d6"){if(I.triggerNumbers&&I.triggerNumbers.length>0&&I.triggerNumbers.length<6){const o=Math.floor(Math.random()*6)+1,l=I.triggerNumbers.includes(o);return{passed:l,logMessage:`🎲D6=${o}${l?"✅️":"❌️"} [${I.triggerNumbers.join(",")}]`}}return{passed:!0,logMessage:""}}const i=s===1?2:1,n=e.players[s-1],a=e.players[i-1];if(r==="hero_hp"){const o=I.conditionSides||["friendly"],l=I.conditionOperator||"=",d=I.conditionValue??0,c=I.conditionSideLogic||"and",m=Ke(l),h=[];if(o.includes("friendly")){const g=n.heroCard?.health??n.health;h.push({label:"我方",hp:g,passed:Ve(g,l,d)})}if(o.includes("enemy")){const g=a.health;h.push({label:"敌方",hp:g,passed:Ve(g,l,d)})}const u=c==="and"?h.every(g=>g.passed):h.some(g=>g.passed),p=o.includes("friendly")&&o.includes("enemy")?"双方":h[0]?.label||"",b=h.map(g=>`${g.label}${g.hp}${m}${d}`);return{passed:u,logMessage:`判断${p}英雄血量 ${b.join(c==="and"?"且":"或")}${u?"✅️":"❌️"}`}}if(r==="minion_count"){const o=I.conditionSides||["friendly"],l=I.conditionOperator||"=",d=I.conditionValue??0,c=I.conditionSideLogic||"and",m=Ke(l),h=[];if(o.includes("friendly")){const g=n.board.length;h.push({label:"我方",count:g,passed:Ve(g,l,d)})}if(o.includes("enemy")){const g=a.board.length;h.push({label:"敌方",count:g,passed:Ve(g,l,d)})}const u=c==="and"?h.every(g=>g.passed):h.some(g=>g.passed),p=o.includes("friendly")&&o.includes("enemy")?"双方":h[0]?.label||"",b=h.map(g=>`${g.label}${g.count}${m}${d}`);return{passed:u,logMessage:`判断${p}随从数 ${b.join(c==="and"?"且":"或")}${u?"✅️":"❌️"}`}}if(r==="hand_count"){const o=I.conditionSides||["friendly"],l=I.conditionOperator||"=",d=I.conditionValue??0,c=I.conditionSideLogic||"and",m=Ke(l),h=[];if(o.includes("friendly")){const g=n.hand.length;h.push({label:"我方",count:g,passed:Ve(g,l,d)})}if(o.includes("enemy")){const g=a.hand.length;h.push({label:"敌方",count:g,passed:Ve(g,l,d)})}const u=c==="and"?h.every(g=>g.passed):h.some(g=>g.passed),p=o.includes("friendly")&&o.includes("enemy")?"双方":h[0]?.label||"",b=h.map(g=>`${g.label}${g.count}${m}${d}`);return{passed:u,logMessage:`判断${p}手牌数 ${b.join(c==="and"?"且":"或")}${u?"✅️":"❌️"}`}}if(r==="exists_minion"){const o=I.conditionSides||["friendly"],l=I.conditionSideLogic||"and",d=I.conditionMinionCheckName??!1,c=I.conditionMinionName?.trim(),m=I.conditionMinionAttrs,h={cost:"能量花费",attack:"攻击力",health:"生命值"},u={cost:f=>f.cost,attack:f=>f.attack,health:f=>f.health},p=[];if(d&&c&&p.push(f=>({passed:f.name===c,detail:`名称"${f.name}"${f.name===c?"✅":"❌"}`})),m)for(const f of["cost","attack","health"]){const v=m[f];v?.enabled&&p.push(E=>{const S=u[f](E),T=Ve(S,v.operator||"=",v.value);return{passed:T,detail:`${h[f]}${S}${Ke(v.operator||"=")}${v.value}${T?"✅":"❌"}`}})}if(p.length===0)return{passed:!0,logMessage:""};const b=f=>{const v=[];return{found:f.board.some(S=>p.every(A=>{const R=A(S);return v.push(R.detail),R.passed})),details:v}},g={friendly:"我方",enemy:"敌方"},y=[];for(const f of o){const E=b(f==="friendly"?n:a);y.push({label:g[f],found:E.found,details:E.details})}let x;y.length===1?x=y[0].found:x=l==="and"?y.every(f=>f.found):y.some(f=>f.found);const w=y.map(f=>`${f.label}(${f.details.join(",")})`).join(";");return{passed:x,logMessage:`存在随从检查：${w}${x?"✅":"❌"}`}}if(r==="target_attr"){const o=I.conditionTargetAttrs;if(!o)return{passed:!0,logMessage:""};const l=t?.targetMinion;if(!l)return{passed:!1,logMessage:"判断目标属性：无目标❌️"};const d={cost:"能量花费",attack:"攻击力",health:"生命值"},c={cost:u=>u.cost,attack:u=>u.attack,health:u=>u.health},m=[];for(const u of["cost","attack","health"]){const p=o[u];if(p?.enabled){const b=c[u](l),g=Ve(b,p.operator||"=",p.value);m.push({label:`${d[u]}${b}${Ke(p.operator||"=")}${p.value}`,passed:g})}}if(m.length===0)return{passed:!0,logMessage:""};const h=m.every(u=>u.passed);return{passed:h,logMessage:`判断目标${m.map(u=>u.label).join("且")}${h?"✅️":"❌️"}`}}return{passed:!0,logMessage:""}},Te=(I,e,s,t,r,i)=>{let n=I;for(const a of e){const o=it(a,n,s,i);o.passed?(o.logMessage?n=ue(n,s,"condition",`${t} ${o.logMessage} 发动了【${r}】技能`):n=ue(n,s,"minion_skill",`${t} 发动了【${r}】技能`),n=we(n,a,s,i)):n=ue(n,s,"condition",`${t} ${o.logMessage} 条件不满足，跳过`)}return n},we=(I,e,s,t)=>{if(console.log("[executeEffect] 开始执行效果:",e.effect,"moment:",e.moment,"targets:",e.targets,"ownerPlayerId:",s,"context:",t),e.isOpponent&&(s=s===1?2:1,console.log("[executeEffect] 对手目标，切换ownerPlayerId为:",s)),e.triggerNumbers&&e.triggerNumbers.length>0&&e.triggerNumbers.length<6){const d=Math.floor(Math.random()*6)+1;if(!e.triggerNumbers.includes(d))return ue(I,s,"dice_roll",`🎲 = ${d}❌️ [${e.triggerNumbers.join(",")}]`);I=ue(I,s,"dice_roll",`🎲 = ${d}✅️ [${e.triggerNumbers.join(",")}]`)}if(!e.effect)return console.log("[executeEffect] 效果为空，跳过"),I;const r=s-1,i=s===1?2:1,n=i-1;let a={...I};if(a.players=[...I.players],e.isRandomTarget&&e.randomTargetTimes&&e.randomTargetTimes>1){for(let d=0;d<e.randomTargetTimes;d++){const c={...e,randomTargetTimes:1};a=we(a,c,s,t),a={...a},a.players=[...a.players]}return a}if(a.soundEffects=[...I.soundEffects||[]],e.effect==="抽牌"&&(a.sharedDeck=[...I.sharedDeck],a.newlyDrawnCardIds=[...I.newlyDrawnCardIds]),e.effect==="抽牌"){const d=e.value||1;for(let c=0;c<d;c++)rt(a,s),a.newlyDrawnCardIds=[...a.newlyDrawnCardIds];return console.log("executeEffect 抽牌完成, 玩家手牌数:",a.players[r].hand.length),a}if(e.effect==="弃牌"){const d=Math.min(e.value||1,a.players[r].hand.length),c=[];for(let m=0;m<d;m++){const h=a.players[r].hand.shift();h&&(c.push(h),console.log(`[executeEffect] 弃牌: ${h.name}`))}return a.discardPile=[...c,...a.discardPile],console.log("executeEffect 弃牌完成, 玩家手牌数:",a.players[r].hand.length),a}let o=e.targets||[];const l=o.some(d=>d.includes("所有"));if(e.isRandomTarget&&(o.length>1||l)){const d=Math.floor(Math.random()*o.length),c=o[d];c.includes("所有")||(a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${c}`)),o=[c]}if(e.effect==="造成伤害"){a.soundEffects.push("wood");const d=e.value||1,c=e.elementType,m=t?.excludeMinionId,h=[];let u=0;const p=(b,g,y,x)=>{if(!c)return{state:b,originalElementStatus:void 0};const f=b.players[y].board[g]?.elementStatus,v=Be(b,"minion",y,g,x,c,s);let E=v.state;if(v.triggered&&v.extraDamage){if(c==="fire"){const S=E.players[y],T=S.board[g];if(T&&T.health>0){const A=Se(T,v.extraDamage);E=ue(E,s,"element",`🔥${T.name}受到了额外的${v.extraDamage}点灼烧伤害`);const R={...S,board:[...S.board]};R.board[g]=A;const _=[...E.players];_[y]=R,E={...E,players:_}}}else if(c==="lightning"){const S=E.players[y],T=S.board.filter(R=>R.health>0),A=[];if(T.forEach((R,_)=>A.push({type:"minion",idx:_})),S.health>0&&A.push({type:"hero"}),A.length>0){const R=A[Math.floor(Math.random()*A.length)];if(R.type==="minion"){const B=S.board[R.idx],$=Se(B,v.extraDamage);E=ue(E,s,"element",`⚡️${B.name}受到了额外的${v.extraDamage}点电击伤害`);const N={...S,board:[...S.board]};N.board[R.idx]=$;const J=[...E.players];J[y]=N,E={...E,players:J}}else{E=ue(E,s,"element",`⚡️${S.name}受到了额外的${v.extraDamage}点电击伤害`);const B={...S,health:S.health-v.extraDamage},$=[...E.players];$[y]=B,E={...E,players:$}}const _={type:"lightning_explosion",targetPlayerId:S.id,targetType:R.type==="hero"?"hero":"minion"};R.type==="minion"&&(_.targetMinionId=S.board[R.idx].id),E={...E,pendingVisualEffects:[...E.pendingVisualEffects||[],_]}}}}return{state:E,originalElementStatus:f}};for(const b of o)if(b==="我方所有随从"){let g={...a.players[r]},y=g.board.filter(v=>!(m&&v.id===m));if(y.length===0&&e.isRandomTarget){if(a=ue(a,s,"minion_skill","🎯 我方无随从，随机目标改为我方英雄"),u++,g.health-=d,a.players[r]=g,c){const v=Be(a,"hero",r,void 0,d,c,s);a=v.state;for(const E of v.logMessages)a=ue(a,s,"element",E);if(v.triggered&&v.extraDamage&&c==="fire"){const E={...a.players[r]};E.health-=v.extraDamage,a.players[r]=E}if(v.triggered&&v.extraDamageIsLightning){const E=v.extraDamage,S=a.players[r],T=S.board.filter(R=>R.health>0),A=[];if(T.forEach(R=>A.push({type:"minion",idx:S.board.indexOf(R)})),S.health>0&&A.push({type:"hero",idx:-1}),A.length>0){const R=A[Math.floor(Math.random()*A.length)];if(R.type==="hero"){const _={...a.players[r]};_.health-=E,a.players[r]=_}else{const _={...S};_.board=[..._.board],_.board[R.idx]=Se(_.board[R.idx],E),a.players[r]=_}}}}a=je(a);continue}if(e.isRandomTarget&&y.length>1){const v=Math.floor(Math.random()*y.length),E=y[v];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${E.name}`),y=[E]}y.forEach(v=>h.push(v.name)),g.board=g.board.map(v=>m&&v.id===m||!y.some(E=>E.id===v.id)?v:Se(v,d)),a.players[r]=g;const x=new Map;if(c)for(const v of y){const E=g.board.findIndex(S=>S.id===v.id&&S.health>0);if(E!==-1){const S=p(a,E,r,d);a=S.state,x.set(v.id,S.originalElementStatus),g={...a.players[r]}}}for(const v of g.board){if(m&&v.id===m)continue;const E=(v.effects||[]).filter(S=>me(S,"失去生命时")&&S.effect);for(const S of E)a=we(a,S,s,{sourceCard:v,attackerMinion:v}),a={...a},a.players=[...a.players],g={...a.players[r]}}const w=g.board.filter(v=>v.health<=0);if(c){for(const v of w)if(!x.get(v.id)){const S=g.board.findIndex(T=>T.id===v.id);if(S!==-1){const T=S>0?g.board[S-1]:null,A=S<g.board.length-1?g.board[S+1]:null;if(T&&T.health>0){const R={...a.players[r]};R.board=[...R.board];const _=g.board.findIndex(B=>B.id===T.id);if(_!==-1){R.board[_]={...R.board[_],elementStatus:{type:c,sourcePlayerId:s}};const B=[...a.players];B[r]=R,a={...a,players:B}}}if(A&&A.health>0){const R={...a.players[r]};R.board=[...R.board];const _=g.board.findIndex(B=>B.id===A.id);if(_!==-1){R.board[_]={...R.board[_],elementStatus:{type:c,sourcePlayerId:s}};const B=[...a.players];B[r]=R,a={...a,players:B}}}}}}g={...a.players[r]},g.board=g.board.filter(v=>v.health>0);const f=w.map(v=>({...v,health:v.maxHealth}));a.discardPile=[...f,...a.discardPile],a.players[r]=g,console.log("[造成伤害-我方所有随从] 死亡随从数量:",w.length);for(const v of w){console.log("[造成伤害-我方所有随从] 检查死亡随从:",v.name);const E=(v.effects||[]).filter(S=>me(S,"死亡时")&&S.effect);console.log("[造成伤害-我方所有随从] 死亡时效果:",E);for(const S of E)a=we(a,S,s,{attackerMinion:v,sourceCard:v})}}else if(b==="敌方所有随从"){let g={...a.players[n]},y=[...g.board];if(y.length===0&&e.isRandomTarget){if(a=ue(a,s,"minion_skill","🎯 敌方无随从，随机目标改为敌方英雄"),u++,g.health-=d,a.players[n]=g,c){const v=Be(a,"hero",n,void 0,d,c,s);a=v.state;for(const E of v.logMessages)a=ue(a,s,"element",E);if(v.triggered&&v.extraDamage&&c==="fire"){const E={...a.players[n]};E.health-=v.extraDamage,a.players[n]=E}if(v.triggered&&v.extraDamageIsLightning){const E=v.extraDamage,S=a.players[n],T=S.board.filter(R=>R.health>0),A=[];if(T.forEach(R=>A.push({type:"minion",idx:S.board.indexOf(R)})),S.health>0&&A.push({type:"hero",idx:-1}),A.length>0){const R=A[Math.floor(Math.random()*A.length)];if(R.type==="hero"){const _={...a.players[n]};_.health-=E,a.players[n]=_}else{const _={...S};_.board=[..._.board],_.board[R.idx]=Se(_.board[R.idx],E),a.players[n]=_}}}}a=je(a);continue}if(e.isRandomTarget&&y.length>1){const v=Math.floor(Math.random()*y.length),E=y[v];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${E.name}`),y=[E]}y.forEach(v=>h.push(v.name)),g.board=g.board.map(v=>y.some(E=>E.id===v.id)?Se(v,d):v),a.players[n]=g;const x=new Map;if(c)for(const v of y){const E=g.board.findIndex(S=>S.id===v.id&&S.health>0);if(E!==-1){const S=p(a,E,n,d);a=S.state,x.set(v.id,S.originalElementStatus),g={...a.players[n]}}}for(const v of g.board){const E=(v.effects||[]).filter(S=>me(S,"失去生命时")&&S.effect);for(const S of E)a=we(a,S,i,{sourceCard:v,attackerMinion:v}),a={...a},a.players=[...a.players],g={...a.players[n]}}const w=g.board.filter(v=>v.health<=0);if(c){for(const v of w)if(!x.get(v.id)){const S=g.board.findIndex(T=>T.id===v.id);if(S!==-1){const T=S>0?g.board[S-1]:null,A=S<g.board.length-1?g.board[S+1]:null;if(T&&T.health>0){const R={...a.players[n]};R.board=[...R.board];const _=g.board.findIndex(B=>B.id===T.id);if(_!==-1){R.board[_]={...R.board[_],elementStatus:{type:c,sourcePlayerId:s}};const B=[...a.players];B[n]=R,a={...a,players:B}}}if(A&&A.health>0){const R={...a.players[n]};R.board=[...R.board];const _=g.board.findIndex(B=>B.id===A.id);if(_!==-1){R.board[_]={...R.board[_],elementStatus:{type:c,sourcePlayerId:s}};const B=[...a.players];B[n]=R,a={...a,players:B}}}}}}g={...a.players[n]},g.board=g.board.filter(v=>v.health>0);const f=w.map(v=>({...v,health:v.maxHealth}));a.discardPile=[...f,...a.discardPile],a.players[n]=g,console.log("[造成伤害-敌方所有随从] 死亡随从数量:",w.length);for(const v of w){console.log("[造成伤害-敌方所有随从] 检查死亡随从:",v.name);const E=(v.effects||[]).filter(S=>me(S,"死亡时")&&S.effect);console.log("[造成伤害-敌方所有随从] 死亡时效果:",E);for(const S of E)a=we(a,S,i,{attackerMinion:v,sourceCard:v})}}else if(b==="敌方英雄"){const g={...a.players[n]};if(g.health-=d,a.players[n]=g,u++,c){const y=Be(a,"hero",n,void 0,d,c,s);a=y.state;for(const x of y.logMessages)a=ue(a,s,"element",x);if(y.triggered&&y.extraDamage&&c==="fire"){const x={...a.players[n]};x.health-=y.extraDamage,a.players[n]=x}if(y.triggered&&y.extraDamageIsLightning){const x=y.extraDamage,w=a.players[n],f=w.board.filter(E=>E.health>0),v=[];if(f.forEach(E=>v.push({type:"minion",idx:w.board.indexOf(E)})),w.health>0&&v.push({type:"hero",idx:-1}),v.length>0){const E=v[Math.floor(Math.random()*v.length)];if(E.type==="hero"){const S={...a.players[n]};S.health-=x,a.players[n]=S}else{const S={...w};S.board=[...S.board],S.board[E.idx]=Se(S.board[E.idx],x),a.players[n]=S}}}}a=je(a)}else if(b==="我方英雄"){const g={...a.players[r]};if(g.health-=d,a.players[r]=g,u++,c){const y=Be(a,"hero",r,void 0,d,c,s);a=y.state;for(const x of y.logMessages)a=ue(a,s,"element",x);if(y.triggered&&y.extraDamage&&c==="fire"){const x={...a.players[r]};x.health-=y.extraDamage,a.players[r]=x}if(y.triggered&&y.extraDamageIsLightning){const x=y.extraDamage,w=a.players[r],f=w.board.filter(E=>E.health>0),v=[];if(f.forEach(E=>v.push({type:"minion",idx:w.board.indexOf(E)})),w.health>0&&v.push({type:"hero",idx:-1}),v.length>0){const E=v[Math.floor(Math.random()*v.length)];if(E.type==="hero"){const S={...a.players[r]};S.health-=x,a.players[r]=S}else{const S={...w};S.board=[...S.board],S.board[E.idx]=Se(S.board[E.idx],x),a.players[r]=S}}}}a=je(a)}else if(b==="攻击目标"&&t?.targetMinion){const g=t.targetPlayerId?t.targetPlayerId-1:n;let y={...a.players[g]};const x=y.board.findIndex(w=>w.id===t.targetCardId);if(x!==-1){h.push(t.targetMinion.name),y.board=y.board.map((E,S)=>S===x?Se(E,d):E),a.players[g]=y;let w;if(c){const E=y.board.findIndex(S=>S.id===t.targetCardId&&S.health>0);if(E!==-1){const S=p(a,E,g,d);a=S.state,w=S.originalElementStatus,y={...a.players[g]}}}const f=y.board.find(E=>E.id===t.targetCardId);if(f){const E=(f.effects||[]).filter(S=>me(S,"失去生命时")&&S.effect);for(const S of E)a=we(a,S,g+1,{sourceCard:f,attackerMinion:f}),a={...a},a.players=[...a.players],y={...a.players[g]}}const v=y.board.find(E=>E.id===t.targetCardId&&E.health<=0);if(v){if(c&&!w){const T=y.board.findIndex(A=>A.id===v.id);if(T!==-1){const A=T>0?y.board[T-1]:null,R=T<y.board.length-1?y.board[T+1]:null;if(A&&A.health>0){const _={...a.players[g]};_.board=[..._.board];const B=y.board.findIndex($=>$.id===A.id);if(B!==-1){_.board[B]={..._.board[B],elementStatus:{type:c,sourcePlayerId:s}};const $=[...a.players];$[g]=_,a={...a,players:$}}}if(R&&R.health>0){const _={...a.players[g]};_.board=[..._.board];const B=y.board.findIndex($=>$.id===R.id);if(B!==-1){_.board[B]={..._.board[B],elementStatus:{type:c,sourcePlayerId:s}};const $=[...a.players];$[g]=_,a={...a,players:$}}}}}y={...a.players[g]},y.board=y.board.filter(T=>T.health>0);const E={...v,health:v.maxHealth};a.discardPile=[E,...a.discardPile],a.players[g]=y;const S=(v.effects||[]).filter(T=>me(T,"死亡时")&&T.effect);for(const T of S)a=we(a,T,g+1,{attackerMinion:v,sourceCard:v})}else a.players[g]=y}}else if((b==="选择目标"||b==="选择随从")&&t?.targetMinion){const g=t.targetPlayerId?t.targetPlayerId-1:n;let y={...a.players[g]};const x=y.board.findIndex(w=>w.id===t.targetCardId);if(x!==-1){h.push(t.targetMinion.name),y.board=y.board.map((E,S)=>S===x?Se(E,d):E),a.players[g]=y;let w;if(c){const E=y.board.findIndex(S=>S.id===t.targetCardId&&S.health>0);if(E!==-1){const S=p(a,E,g,d);a=S.state,w=S.originalElementStatus,y={...a.players[g]}}}const f=y.board.find(E=>E.id===t.targetCardId);if(f){const E=(f.effects||[]).filter(S=>me(S,"失去生命时")&&S.effect);for(const S of E)a=we(a,S,g+1,{sourceCard:f,attackerMinion:f}),a={...a},a.players=[...a.players],y={...a.players[g]}}const v=y.board.find(E=>E.id===t.targetCardId&&E.health<=0);if(v){if(c&&!w){const T=y.board.findIndex(A=>A.id===v.id);if(T!==-1){const A=T>0?y.board[T-1]:null,R=T<y.board.length-1?y.board[T+1]:null;if(A&&A.health>0){const _={...a.players[g]};_.board=[..._.board];const B=y.board.findIndex($=>$.id===A.id);if(B!==-1){_.board[B]={..._.board[B],elementStatus:{type:c,sourcePlayerId:s}};const $=[...a.players];$[g]=_,a={...a,players:$}}}if(R&&R.health>0){const _={...a.players[g]};_.board=[..._.board];const B=y.board.findIndex($=>$.id===R.id);if(B!==-1){_.board[B]={..._.board[B],elementStatus:{type:c,sourcePlayerId:s}};const $=[...a.players];$[g]=_,a={...a,players:$}}}}}y={...a.players[g]},y.board=y.board.filter(T=>T.health>0);const E={...v,health:v.maxHealth};a.discardPile=[E,...a.discardPile],a.players[g]=y;const S=(v.effects||[]).filter(T=>me(T,"死亡时")&&T.effect);for(const T of S)a=we(a,T,g+1,{attackerMinion:v,sourceCard:v})}else a.players[g]=y}}else if(b==="选择目标"&&!t?.targetMinion&&t?.targetPlayerId){const g=t.targetPlayerId-1,y={...a.players[g]};if(y.health-=d,a.players[g]=y,u++,c){const x=Be(a,"hero",g,void 0,d,c,s);a=x.state;for(const w of x.logMessages)a=ue(a,s,"element",w);if(x.triggered&&x.extraDamage&&c==="fire"){const w={...a.players[g]};w.health-=x.extraDamage,a.players[g]=w}if(x.triggered&&x.extraDamageIsLightning){const w=x.extraDamage,f=a.players[g],v=f.board.filter(S=>S.health>0),E=[];if(v.forEach(S=>E.push({type:"minion",idx:f.board.indexOf(S)})),f.health>0&&E.push({type:"hero",idx:-1}),E.length>0){const S=E[Math.floor(Math.random()*E.length)];if(S.type==="hero"){const T={...a.players[g]};T.health-=w,a.players[g]=T}else{const T={...f};T.board=[...T.board],T.board[S.idx]=Se(T.board[S.idx],w),a.players[g]=T}}}}a=je(a)}else if(b==="自己"&&t?.attackerMinion){let g={...a.players[r]};h.push(t.attackerMinion.name),g.board=g.board.map(f=>f.id===t.attackerMinion.id?Se(f,d):f),a.players[r]=g;let y;if(c){const f=g.board.findIndex(v=>v.id===t.attackerMinion.id&&v.health>0);if(f!==-1){const v=p(a,f,r,d);a=v.state,y=v.originalElementStatus,g={...a.players[r]}}}const x=g.board.find(f=>f.id===t.attackerMinion.id);if(x){const f=(x.effects||[]).filter(v=>me(v,"失去生命时")&&v.effect);for(const v of f)a=we(a,v,s,{sourceCard:x,attackerMinion:x}),a={...a},a.players=[...a.players],g={...a.players[r]}}const w=g.board.find(f=>f.id===t.attackerMinion.id&&f.health<=0);if(w){if(c&&!y){const E=g.board.findIndex(S=>S.id===w.id);if(E!==-1){const S=E>0?g.board[E-1]:null,T=E<g.board.length-1?g.board[E+1]:null;if(S&&S.health>0){const A={...a.players[r]};A.board=[...A.board];const R=g.board.findIndex(_=>_.id===S.id);if(R!==-1){A.board[R]={...A.board[R],elementStatus:{type:c,sourcePlayerId:s}};const _=[...a.players];_[r]=A,a={...a,players:_}}}if(T&&T.health>0){const A={...a.players[r]};A.board=[...A.board];const R=g.board.findIndex(_=>_.id===T.id);if(R!==-1){A.board[R]={...A.board[R],elementStatus:{type:c,sourcePlayerId:s}};const _=[...a.players];_[r]=A,a={...a,players:_}}}}}g={...a.players[r]},console.log("[造成伤害-自己] 随从死亡:",w.name,"effects:",w.effects),g.board=g.board.filter(E=>E.health>0);const f={...w,health:w.maxHealth};a.discardPile=[f,...a.discardPile],a.players[r]=g;const v=(w.effects||[]).filter(E=>me(E,"死亡时")&&E.effect);console.log("[造成伤害-自己] 死亡时效果:",v);for(const E of v)console.log("[造成伤害-自己] 执行死亡效果:",E),a=we(a,E,s,{attackerMinion:w,sourceCard:w})}else a.players[r]=g}if(h.length>0||u>0){const b=[];if(h.length>0){const y=[...new Set(h)];y.length<=3?b.push(y.join("、")):b.push(`${y.slice(0,3).join("、")}等${y.length}个目标`)}u>0&&b.push(u===1?"英雄":`${u}位英雄`);const g=`对${b.join("、")}造成了${d}点伤害`;a=ue(a,s,"damage",g)}}if(e.effect==="给予印记"){const d=e.value||1,c=[];let m=0;for(const h of o)if(h==="我方所有随从"){const u={...a.players[r]};let p=[...u.board];if(e.isRandomTarget&&p.length>1){const x=Math.floor(Math.random()*p.length),w=p[x];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${w.name}`),p=[w]}p.forEach(x=>c.push(x.name));const b=u.board.map(x=>p.some(w=>w.id===x.id)?{...x,markCount:(x.markCount||0)+d}:x),g=b.filter(x=>x.health<=0);u.board=b.filter(x=>x.health>0);const y=g.map(x=>({...x,health:x.maxHealth}));a.discardPile=[...y,...a.discardPile],a.players[r]=u}else if(h==="敌方所有随从"){const u={...a.players[n]};let p=[...u.board];if(e.isRandomTarget&&p.length>1){const x=Math.floor(Math.random()*p.length),w=p[x];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${w.name}`),p=[w]}p.forEach(x=>c.push(x.name));const b=u.board.map(x=>p.some(w=>w.id===x.id)?{...x,markCount:(x.markCount||0)+d}:x),g=b.filter(x=>x.health<=0);u.board=b.filter(x=>x.health>0);const y=g.map(x=>({...x,health:x.maxHealth}));a.discardPile=[...y,...a.discardPile],a.players[n]=u}else if(h==="敌方英雄"){const u={...a.players[n]};u.heroMarkCount=(u.heroMarkCount||0)+d,a.players[n]=u,m++}else if(h==="我方英雄"){const u={...a.players[r]};u.heroMarkCount=(u.heroMarkCount||0)+d,a.players[r]=u,m++}else if((h==="攻击目标"||h==="选择目标"||h==="选择随从")&&t?.targetMinion){const u=t.targetPlayerId?t.targetPlayerId-1:n,p={...a.players[u]},b=p.board.findIndex(g=>g.id===t.targetCardId);if(b!==-1){c.push(t.targetMinion.name);const g=p.board.map((w,f)=>f===b?{...w,markCount:(w.markCount||0)+d}:w),y=g.filter(w=>w.health<=0);p.board=g.filter(w=>w.health>0);const x=y.map(w=>({...w,health:w.maxHealth}));a.discardPile=[...x,...a.discardPile],a.players[u]=p}}else if((h==="攻击目标"||h==="选择目标")&&!t?.targetMinion){const u=t?.targetPlayerId?t.targetPlayerId-1:n,p={...a.players[u]};p.heroMarkCount=(p.heroMarkCount||0)+d,a.players[u]=p,m++}if(c.length>0||m>0){const h=[];if(c.length>0){const p=[...new Set(c)];p.length<=3?h.push(p.join("、")):h.push(`${p.slice(0,3).join("、")}等${p.length}个目标`)}m>0&&h.push(m===1?"英雄":`${m}位英雄`);const u=`对${h.join("、")}给予了${d}点印记`;a=ue(a,s,"minion_skill",u)}}if(e.effect==="给予词条"){const d=e.grantedKeywordName||"",c=e.grantedKeywordValue??1;if(!d)return console.log("[executeEffect] 给予词条效果没有指定词条，跳过"),a;const m=[["机动","嘲讽"],["连击","狂怒"],["暴虐","斩首"],["🔥","❄️","⚡️"]],h={};for(const g of m)for(const y of g)h[y]=g;const u=g=>{if(d!=="护甲"&&g.keywords.some(x=>x.name===d))return d;const y=h[d];if(!y)return null;for(const x of g.keywords)if(x.name!==d&&y.includes(x.name))return x.name;return null},p=[],b=[];for(const g of o)if(g==="我方所有随从"){const y={...a.players[r]};let x=[...y.board];if(e.isRandomTarget&&x.length>1){const w=Math.floor(Math.random()*x.length),f=x[w];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${f.name}`),x=[f]}y.board=y.board.map(w=>{if(!x.some(A=>A.id===w.id))return w;const f=u(w);if(f)return b.push(`${w.name}（已有【${f}】）`),w;p.push(w.name);const v=w.keywords.find(A=>A.name==="护甲");let E=v?v.value??1:0;d==="护甲"&&(E+=c);let S=[...w.keywords];d==="护甲"&&(S=S.filter(A=>A.name!=="护甲"));const T=Object.values(Ee).find(A=>A.name===d);return T&&S.push(T.hasValue&&!["🔥","❄️","⚡️"].includes(d)?{...T,value:d==="护甲"?E:c}:{...T}),{...w,keywords:S,armorValue:E>0?E:void 0,divineShieldActive:d==="圣盾"?!0:w.divineShieldActive,canAttackHeroes:d==="伏击"?!0:w.canAttackHeroes,canAttackMinions:d==="突击"?!0:w.canAttackMinions,maxAttacksPerTurn:d==="连击"?w.maxAttacksPerTurn>=2?w.maxAttacksPerTurn:2:w.maxAttacksPerTurn,frozen:d==="❄️"?!1:w.frozen}}),a.players[r]=y}else if(g==="敌方所有随从"){const y={...a.players[n]};let x=[...y.board];if(e.isRandomTarget&&x.length>1){const w=Math.floor(Math.random()*x.length),f=x[w];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${f.name}`),x=[f]}y.board=y.board.map(w=>{if(!x.some(A=>A.id===w.id))return w;const f=u(w);if(f)return b.push(`${w.name}（已有【${f}】）`),w;p.push(w.name);const v=w.keywords.find(A=>A.name==="护甲");let E=v?v.value??1:0;d==="护甲"&&(E+=c);let S=[...w.keywords];d==="护甲"&&(S=S.filter(A=>A.name!=="护甲"));const T=Object.values(Ee).find(A=>A.name===d);return T&&S.push(T.hasValue&&!["🔥","❄️","⚡️"].includes(d)?{...T,value:d==="护甲"?E:c}:{...T}),{...w,keywords:S,armorValue:E>0?E:void 0,divineShieldActive:d==="圣盾"?!0:w.divineShieldActive,canAttackHeroes:d==="伏击"?!0:w.canAttackHeroes,canAttackMinions:d==="突击"?!0:w.canAttackMinions,maxAttacksPerTurn:d==="连击"?w.maxAttacksPerTurn>=2?w.maxAttacksPerTurn:2:w.maxAttacksPerTurn,frozen:d==="❄️"?!1:w.frozen}}),a.players[n]=y}else if((g==="选择目标"||g==="选择随从"||g==="攻击目标")&&t?.targetMinion){const y=t.targetPlayerId?t.targetPlayerId-1:n,x={...a.players[y]},w=x.board.findIndex(f=>f.id===t.targetCardId);if(w!==-1){const f=x.board[w],v=u(f);if(v)b.push(`${f.name}（已有【${v}】）`);else{p.push(f.name);const E=f.keywords.find(R=>R.name==="护甲");let S=E?E.value??1:0;d==="护甲"&&(S+=c);let T=[...f.keywords];d==="护甲"&&(T=T.filter(R=>R.name!=="护甲"));const A=Object.values(Ee).find(R=>R.name===d);A&&T.push(A.hasValue&&!["🔥","❄️","⚡️"].includes(d)?{...A,value:d==="护甲"?S:c}:{...A}),x.board[w]={...f,keywords:T,armorValue:S>0?S:void 0,divineShieldActive:d==="圣盾"?!0:f.divineShieldActive,canAttackHeroes:d==="伏击"?!0:f.canAttackHeroes,canAttackMinions:d==="突击"?!0:f.canAttackMinions,maxAttacksPerTurn:d==="连击"?f.maxAttacksPerTurn>=2?f.maxAttacksPerTurn:2:f.maxAttacksPerTurn,frozen:d==="❄️"?!1:f.frozen}}a.players[y]=x}}else if(g==="自己"&&t?.attackerMinion){const y=t.attackerMinion,x={...a.players[r]},w=x.board.findIndex(f=>f.id===y.id);if(w!==-1){const f=x.board[w],v=u(f);if(v)b.push(`${f.name}（已有【${v}】）`);else{p.push(f.name);const E=f.keywords.find(R=>R.name==="护甲");let S=E?E.value??1:0;d==="护甲"&&(S+=c);let T=[...f.keywords];d==="护甲"&&(T=T.filter(R=>R.name!=="护甲"));const A=Object.values(Ee).find(R=>R.name===d);A&&T.push(A.hasValue&&!["🔥","❄️","⚡️"].includes(d)?{...A,value:d==="护甲"?S:c}:{...A}),x.board[w]={...f,keywords:T,armorValue:S>0?S:void 0,divineShieldActive:d==="圣盾"?!0:f.divineShieldActive,canAttackHeroes:d==="伏击"?!0:f.canAttackHeroes,canAttackMinions:d==="突击"?!0:f.canAttackMinions,maxAttacksPerTurn:d==="连击"?f.maxAttacksPerTurn>=2?f.maxAttacksPerTurn:2:f.maxAttacksPerTurn,frozen:d==="❄️"?!1:f.frozen}}a.players[r]=x}}if(p.length>0){const g=d==="护甲"?`【${d}${c}】`:`【${d}】`,y=p.length<=3?p.join("、"):`${p.slice(0,3).join("、")}等${p.length}个目标`;a=ue(a,s,"minion_skill",`给予${y}${g}`)}b.length>0&&(a=ue(a,s,"minion_skill",`由于互斥，${b.join("、")}无法获得【${d}】`))}if(e.effect==="属性变化"){const d=e.attackValue??0,c=e.healthValue??0,m=e.isAttackPositive?d:-d,h=e.isHealthPositive?c:-c,u=(e.costValue||0)>0?e.isCostSet||e.isCostPositive?e.costValue||0:-(e.costValue||0):0,p=[];for(const b of o)if(b==="我方所有随从"){const g={...a.players[r]};let y=[...g.board];if(e.isRandomTarget&&y.length>1){const f=Math.floor(Math.random()*y.length),v=y[f];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${v.name}`),y=[v]}y.forEach(f=>p.push(f.name)),g.board=g.board.map(f=>{if(!y.some(T=>T.id===f.id))return f;const v=e.isAttackSet?d-f.attack:m,E=e.isHealthSet?c-f.health:h,S=f.health+E;return{...f,attack:Math.max(0,f.attack+v),health:S,maxHealth:Math.max(1,f.maxHealth+E)}});const x=g.board.filter(f=>f.health<=0);g.board=g.board.filter(f=>f.health>0);const w=x.map(f=>({...f,health:f.maxHealth}));a.discardPile=[...w,...a.discardPile],a.players[r]=g,console.log("[属性变化-我方所有随从] 死亡随从数量:",x.length);for(const f of x){console.log("[属性变化-我方所有随从] 检查死亡随从:",f.name,"effects:",f.effects);const v=(f.effects||[]).filter(E=>me(E,"死亡时")&&E.effect);console.log("[属性变化-我方所有随从] 死亡时效果:",v);for(const E of v)console.log("[属性变化-我方所有随从] 执行死亡效果:",E),a=we(a,E,s,{attackerMinion:f})}}else if(b==="敌方所有随从"){const g={...a.players[n]};let y=[...g.board];if(e.isRandomTarget&&y.length>1){const f=Math.floor(Math.random()*y.length),v=y[f];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${v.name}`),y=[v]}y.forEach(f=>p.push(f.name)),g.board=g.board.map(f=>{if(!y.some(T=>T.id===f.id))return f;const v=e.isAttackSet?d-f.attack:m,E=e.isHealthSet?c-f.health:h,S=f.health+E;return{...f,attack:Math.max(0,f.attack+v),health:S,maxHealth:Math.max(1,f.maxHealth+E)}});const x=g.board.filter(f=>f.health<=0);g.board=g.board.filter(f=>f.health>0);const w=x.map(f=>({...f,health:f.maxHealth}));a.discardPile=[...w,...a.discardPile],a.players[n]=g,console.log("[属性变化-敌方所有随从] 死亡随从数量:",x.length);for(const f of x){console.log("[属性变化-敌方所有随从] 检查死亡随从:",f.name,"effects:",f.effects);const v=(f.effects||[]).filter(E=>me(E,"死亡时")&&E.effect);console.log("[属性变化-敌方所有随从] 死亡时效果:",v);for(const E of v)console.log("[属性变化-敌方所有随从] 执行死亡效果:",E),a=we(a,E,i,{attackerMinion:f})}}else if((b==="攻击目标"||b==="选择目标"||b==="选择随从")&&t?.targetMinion){const g=t.targetPlayerId?t.targetPlayerId-1:n,y={...a.players[g]},x=y.board.findIndex(w=>w.id===t.targetCardId);if(x!==-1){p.push(t.targetMinion.name),y.board=y.board.map((f,v)=>{if(v===x){const E=e.isAttackSet?d-f.attack:m,S=e.isHealthSet?c-f.health:h,T=f.health+S;return{...f,attack:Math.max(0,f.attack+E),health:T,maxHealth:Math.max(1,f.maxHealth+S)}}return f});const w=y.board.find(f=>f.id===t.targetCardId&&f.health<=0);if(w){y.board=y.board.filter(E=>E.health>0);const f={...w,health:w.maxHealth};a.discardPile=[f,...a.discardPile];const v=(w.effects||[]).filter(E=>me(E,"死亡时")&&E.effect);for(const E of v)a=we(a,E,g+1,{attackerMinion:w})}a.players[g]=y}}else if(b==="自己"&&t?.attackerMinion){const g={...a.players[r]};p.push(t.attackerMinion.name),g.board=g.board.map(x=>{if(x.id===t.attackerMinion.id){const w=e.isAttackSet?d-x.attack:m,f=e.isHealthSet?c-x.health:h,v=x.health+f;return{...x,attack:Math.max(0,x.attack+w),health:v,maxHealth:Math.max(1,x.maxHealth+f)}}return x});const y=g.board.find(x=>x.id===t.attackerMinion.id&&x.health<=0);if(y){g.board=g.board.filter(f=>f.health>0);const x={...y,health:y.maxHealth};a.discardPile=[x,...a.discardPile],a.players[r]=g;const w=(y.effects||[]).filter(f=>me(f,"死亡时")&&f.effect);for(const f of w)a=we(a,f,s,{attackerMinion:y})}else a.players[r]=g;console.log("属性变化完成")}else if(b==="卡牌"){const g=e.summonSource==="enemy_hand"?n:r,y={...a.players[g]};let x=[...y.hand];if(new Set(x),e.isRandom&&x.length>0){const w=Math.floor(Math.random()*x.length);x=[x[w]]}x.forEach(w=>p.push(w.name)),y.hand=y.hand.map(w=>{if(!x.some(v=>v===w))return w;let f=w.cost;if((e.costValue||0)>0&&(e.isCostSet?f=e.costValue||0:e.isCostPositive?f=w.cost+(e.costValue||0):f=w.cost-(e.costValue||0),f=Math.max(0,f)),w.type==="minion"){const v=e.isAttackSet?d-(w.attack||0):m,E=e.isHealthSet?c-(w.health||0):h;return{...w,cost:f,attack:Math.max(0,(w.attack||0)+v),health:(w.health||0)+E,maxHealth:Math.max(1,(w.maxHealth||w.health||1)+E)}}return{...w,cost:f}}),a.players[g]=y}if(p.length>0)if(o.includes("卡牌")){const g=e.summonSource==="enemy_hand"?"敌方":"我方",y=e.isRandom?"随机一张":"所有",x=e.isCostSet?"=":u>=0?"+":"",w=e.isAttackSet?"=":m>=0?"+":"",f=e.isHealthSet?"=":h>=0?"+":"",v=e.isCostSet?e.costValue||0:u,E=e.isAttackSet?d:m,S=e.isHealthSet?c:h;let T=[];(e.costValue||0)>0&&T.push(`费用${x}${v}`),(e.attackValue||0)>0&&T.push(`攻击${w}${E}`),(e.healthValue||0)>0&&T.push(`血量${f}${S}`),T.length===0&&T.push("无变化");const A=`使${g}${y}手牌${T.join("/")}`;a=ue(a,s,"minion_skill",A)}else{const g=e.isAttackSet?"=":m>=0?"+":"",y=e.isHealthSet?"=":h>=0?"+":"",x=e.isAttackSet?d:m,w=e.isHealthSet?c:h,f=[...new Set(p)],E=`对${f.length<=3?f.join("、"):`${f.slice(0,3).join("、")}等${f.length}个目标`}的属性变为${g}${x}/${y}${w}`;a=ue(a,s,"minion_skill",E)}}if(e.effect==="治愈"){const d=e.value||1,c=[];let m=0;for(const h of o)if(h==="我方所有随从"){const u={...a.players[r]};let p=[...u.board];if(e.isRandomTarget&&p.length>1){const b=Math.floor(Math.random()*p.length),g=p[b];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${g.name}`),p=[g]}p.forEach(b=>c.push(b.name)),u.board=u.board.map(b=>p.some(g=>g.id===b.id)?{...b,health:Math.min(b.maxHealth,b.health+d)}:b),a.players[r]=u}else if(h==="敌方所有随从"){const u={...a.players[n]};let p=[...u.board];if(e.isRandomTarget&&p.length>1){const b=Math.floor(Math.random()*p.length),g=p[b];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${g.name}`),p=[g]}p.forEach(b=>c.push(b.name)),u.board=u.board.map(b=>p.some(g=>g.id===b.id)?{...b,health:Math.min(b.maxHealth,b.health+d)}:b),a.players[n]=u}else if(h==="敌方英雄"){m++;const u={...a.players[n]};u.health=Math.min(u.maxHealth,u.health+d),a.players[n]=u}else if(h==="我方英雄"){m++;const u={...a.players[r]};u.health=Math.min(u.maxHealth,u.health+d),a.players[r]=u}else if((h==="攻击目标"||h==="选择目标"||h==="选择随从")&&t?.targetMinion){const u=t.targetPlayerId?t.targetPlayerId-1:n,p={...a.players[u]},b=p.board.findIndex(g=>g.id===t.targetCardId);b!==-1&&(c.push(t.targetMinion.name),p.board=p.board.map((g,y)=>y===b?{...g,health:Math.min(g.maxHealth,g.health+d)}:g),a.players[u]=p)}else if((h==="攻击目标"||h==="选择目标")&&!t?.targetMinion){m++;const u=t?.targetPlayerId?t.targetPlayerId-1:n,p={...a.players[u]};p.health=Math.min(p.maxHealth,p.health+d),a.players[u]=p}else if(h==="自己"&&t?.attackerMinion){c.push(t.attackerMinion.name);const u={...a.players[r]};u.board=u.board.map(p=>p.id===t.attackerMinion.id?{...p,health:Math.min(p.maxHealth,p.health+d)}:p),a.players[r]=u}if(c.length>0||m>0){const h=[];if(c.length>0){const p=[...new Set(c)];p.length<=3?h.push(p.join("、")):h.push(`${p.slice(0,3).join("、")}等${p.length}个随从`)}m>0&&h.push(m===1?"英雄":`${m}位英雄`);const u=`为${h.join("、")}恢复了${d}点生命值`;a=ue(a,s,"minion_skill",u)}}if(e.effect==="获得能量"){console.log("[executeEffect] 获得能量效果触发, ownerPlayerId:",s,"ownerPlayerIndex:",r,"value:",e.value),console.log("[executeEffect] targets:",o,"context:",t);const d=e.value||1,c={...a.players[r]};console.log("[executeEffect] 获得能量前, energy:",c.energy,"bonusEnergy:",c.bonusEnergy),c.energy=c.energy+d,c.bonusEnergy=(c.bonusEnergy||0)+d,a.players[r]=c,console.log("[executeEffect] 获得能量后, energy:",c.energy,"bonusEnergy:",c.bonusEnergy);const m=`获得了${d}点能量`;a=ue(a,s,"minion_skill",m)}if(e.effect==="失去能量"){const d=e.value||1,c={...a.players[r]};c.energy=Math.max(0,c.energy-d),a.players[r]=c;const m=`失去了${d}点能量`;a=ue(a,s,"minion_skill",m)}if(e.effect==="召唤"){console.log("[executeEffect] 召唤效果触发, ownerPlayerId:",s,"value:",e.value,"summonedCardIndex:",e.summonedCardIndex);const d=e.value||1;let c;const m=e.summonSource||"derived";if(m!=="derived"){const y=a.players[r],x=a.players[1-r];let w=[];switch(m){case"deck_top":w=y.deck;break;case"discard_top":w=a.discardPile;break;case"my_hand":w=y.hand;break;case"enemy_hand":w=x.hand;break}const f=w.map((v,E)=>v.type==="minion"?E:-1).filter(v=>v>=0);if(f.length>0){const v=e.isRandom?f[Math.floor(Math.random()*f.length)]:f[0];c=w[v],w.splice(v,1)}}else{let y=e.summonedCardIndex??0;if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>0&&(y=e.summonedCardIndices[Math.floor(Math.random()*e.summonedCardIndices.length)]),y!==void 0&&t?.sourceCard?.derivedCards){const x=t.sourceCard.derivedCards;let w=y;w>=x.length&&w>0&&(w=w-1),w>=0&&w<x.length&&(c=x[w])}}if(!c)return console.log("[executeEffect] 召唤效果没有衍生牌模板，跳过"),a;const h={...a.players[r]},u=h.board.length;for(let y=0;y<d;y++){const x=ke(),w=ve(c,"嘲讽"),f=ve(c,"连击"),v=ve(c,"圣盾"),E=c.keywords?.find(N=>N.name==="准备"),S=E?E.value??1:0,T=ve(c,"暴虐"),A=ve(c,"斩首"),R=ve(c,"机动"),_=ve(c,"不动"),B=R&&!w&&!_&&S===0,$={...c,id:x,derivedCards:t?.sourceCard?.derivedCards,maxHealth:c.health,canAttack:_?!1:B,hasAttacked:!1,attacksThisTurn:0,maxAttacksPerTurn:f?2:1,divineShieldActive:v,canAttackHeroes:_?!1:B&&!T,canAttackMinions:_?!1:B&&!A,playedThisTurn:!0,isDefending:_?!1:w,preparation:S,keywords:c.keywords?c.keywords.map(N=>({...N})):[]};h.board.push($),console.log("[executeEffect] 召唤随从:",$.name,"ID:",x)}a.players[r]=h;const p=a.players[r].name,b=c.name||"衍生随从",g=d===1?`${p}召唤了${b}`:`${p}召唤了${d}个${b}`;a=ue(a,s,"minion_skill",g),console.log("[executeEffect] 召唤完成, 场上随从数:",h.board.length,"原数量:",u)}if(e.effect==="获得"){console.log("[executeEffect] 获得效果触发, ownerPlayerId:",s,"value:",e.value,"summonedCardIndex:",e.summonedCardIndex);const d=e.value||1;let c;const m=e.summonSource||"derived";if(m!=="derived"){const x=a.players[r],w=a.players[1-r];let f=[];switch(m){case"deck_top":f=x.deck;break;case"discard_top":f=a.discardPile;break;case"my_hand":f=x.hand;break;case"enemy_hand":f=w.hand;break}if(f.length>0){const v=e.isRandom?Math.floor(Math.random()*f.length):0;c=f[v],f.splice(v,1)}}else{let x=e.summonedCardIndex??0;if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>0&&(x=e.summonedCardIndices[Math.floor(Math.random()*e.summonedCardIndices.length)]),x!==void 0&&t?.sourceCard?.derivedCards){const w=t.sourceCard.derivedCards;let f=x;f>=w.length&&f>0&&(f=f-1),f>=0&&f<w.length&&(c=w[f])}}if(!c)return console.log("[executeEffect] 获得效果没有衍生牌模板，跳过"),a;const h={...a.players[r]},u=h.hand.length;for(let x=0;x<d;x++){const w=ke();if(c.type==="spell"){const f={...c,id:w,derivedCards:t?.sourceCard?.derivedCards,attack:0,health:0,maxHealth:0,keywords:c.keywords?c.keywords.map(v=>({...v})):[],effects:c.effects?c.effects.map(v=>({...v,targets:v.targets?[...v.targets]:[]})):void 0};h.hand.push(f),console.log("[executeEffect] 获得法术牌:",f.name,"ID:",w)}else{const f={...c,id:w,derivedCards:t?.sourceCard?.derivedCards,maxHealth:c.health,keywords:c.keywords?c.keywords.map(v=>({...v})):[],effects:c.effects?c.effects.map(v=>({...v,targets:v.targets?[...v.targets]:[]})):void 0};h.hand.push(f),console.log("[executeEffect] 获得随从牌:",f.name,"ID:",w)}}a.players[r]=h;const p=a.players[r].name,b=c.name||"衍生牌",g=c.type==="spell"?"法术":"随从",y=d===1?`${p}获得了${b}(${g})`:`${p}获得了${d}张${b}(${g})`;a=ue(a,s,"minion_skill",y),console.log("[executeEffect] 获得完成, 手牌数:",h.hand.length,"原数量:",u)}if(e.effect==="变化"){console.log("[executeEffect] 变化效果触发, ownerPlayerId:",s,"value:",e.value,"summonedCardIndex:",e.summonedCardIndex);let d;const c=e.summonSource||"derived";if(c!=="derived"){const J=a.players[r],U=a.players[1-r];let ne=[];switch(c){case"deck_top":ne=J.deck;break;case"discard_top":ne=a.discardPile;break;case"my_hand":ne=J.hand;break;case"enemy_hand":ne=U.hand;break}const Z=ne.map((se,Y)=>se.type==="minion"?Y:-1).filter(se=>se>=0);if(Z.length>0){const se=e.isRandom?Z[Math.floor(Math.random()*Z.length)]:Z[0];d=ne[se],ne.splice(se,1)}}else{let J=e.summonedCardIndex??0;if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>0&&(J=e.summonedCardIndices[Math.floor(Math.random()*e.summonedCardIndices.length)]),J!==void 0&&t?.sourceCard?.derivedCards){const U=t.sourceCard.derivedCards;let ne=J;ne>=U.length&&ne>0&&(ne=ne-1),ne>=0&&ne<U.length&&(d=U[ne])}}if(!d)return console.log("[executeEffect] 变化效果没有衍生牌模板，跳过"),a;const m={...a.players[r]},h=t?.sourceCard?.id,u=m.board.findIndex(J=>J.id===h);if(u===-1)return console.log("[executeEffect] 变化效果找不到源随从，跳过"),a;const p=ve(d,"嘲讽"),b=ve(d,"连击"),g=ve(d,"圣盾"),y=d.keywords?.find(J=>J.name==="准备"),x=y?y.value??1:0,w=ve(d,"暴虐"),f=ve(d,"斩首"),v=ve(d,"机动"),E=ve(d,"不动"),S=v&&!p&&!E&&x===0,T=ke(),A={...d,id:T,derivedCards:t?.sourceCard?.derivedCards,maxHealth:d.health,canAttack:E?!1:S,hasAttacked:!1,attacksThisTurn:0,maxAttacksPerTurn:b?2:1,divineShieldActive:g,canAttackHeroes:E?!1:S&&!w,canAttackMinions:E?!1:S&&!f,playedThisTurn:!0,isDefending:E?!1:p,preparation:x,keywords:d.keywords?d.keywords.map(J=>({...J})):[]},R=m.board[u];m.board.splice(u,1,A);const _={...R,health:R.maxHealth};a.discardPile=[_,...a.discardPile],console.log("[executeEffect] 变化完成:",t?.sourceCard?.name,"→",A.name,"位置:",u),a.players[r]=m;const B=a.players[r].name,$=d.name||"衍生随从",N=`${B}的${t?.sourceCard?.name||"随从"}变化为${$}`;a=ue(a,s,"minion_skill",N)}return a},ba=(I,e,s,t,r)=>{console.log("attack() 被调用 - 攻击者ID:",e,"攻击者随从ID:",s,"目标玩家ID:",t,"目标随从ID:",r);const i=e-1,n=t-1,a=I.players[i],o=I.players[n];console.log("攻击者玩家战场:",a.board.map(m=>({id:m.id,name:m.name,canAttack:m.canAttack,hasAttacked:m.hasAttacked,canAttackMinions:m.canAttackMinions,canAttackHeroes:m.canAttackHeroes}))),console.log("目标玩家战场:",o.board.map(m=>({id:m.id,name:m.name})));const l=a.board.findIndex(m=>m.id===s);if(console.log("查找攻击者随从索引:",l),l===-1)return console.log("错误：找不到攻击者随从！"),I;const d=a.board[l];if(console.log("攻击者随从状态 - canAttack:",d.canAttack,"attacksThisTurn:",d.attacksThisTurn,"maxAttacksPerTurn:",d.maxAttacksPerTurn),!d.canAttack||d.attacksThisTurn>=d.maxAttacksPerTurn)return console.log("错误：随从不能攻击！"),I;if(d.frozen)return console.log("[冰冻] 随从被冰冻，无法行动:",d.name),I;if(d.keywords.some(m=>m.name==="不动"))return console.log('错误：随从具有"不动"词条，无法攻击！'),I;if(r!==void 0&&!d.canAttackMinions)return console.log("错误：伏击随从不能攻击随从！"),I;if(qt(o.board)){if(r===void 0)return I;const m=o.board.find(h=>h.id===r);if(!m||!Yt(m))return I}let c={...I};if(c.players=[...I.players],r!==void 0){const m=o.board.findIndex(F=>F.id===r);if(m===-1)return I;const h=o.board[m];console.log("attack() 目标随从:",h.name,"ID:",h.id,"血量:",h.health,"攻击力:",h.attack);const{total:u,newState:p}=Kt(d,c,e,h);c=p,u>0&&console.log("attack() 增加伤害:",u);const b=h.markCount||0,g=d.attack+u+b,y=h.attack;console.log("attack() 伤害计算 - 攻击伤害:",g,"(基础:",d.attack,"+额外:",u,"+印记:",b,") 反伤:",y);const x=Et(d);console.log("[attack] 攻击者:",d.name,"元素类型:",x,"目标:",h.name);const w=Se(h,g);let f=w.health<=0;const v={...o};v.board=v.board.map((F,ee)=>ee===m?w:F),c.players[n]=v;let E=0;if(x){const F=Be(c,"minion",n,m,g,x,e);if(c=F.state,F.triggered&&F.extraDamage){const de=c.players[n].board[m];if(de&&de.health>0){const z=Se(de,F.extraDamage),W={...c.players[n]};W.board=[...W.board],W.board[m]=z;const k=[...c.players];k[n]=W,c={...c,players:k},E=F.extraDamage,c=ue(c,c.players[n].id,"element",`🔥${de.name}受到了额外的${E}点灼烧伤害`),z.health<=0&&(f=!0)}}if(F.triggered&&F.extraDamageIsLightning){const ee=F.extraDamage,de=c.players[n],z=de.board.filter(k=>k.health>0),W=[];if(z.forEach((k,j)=>{W.push({type:"minion",index:de.board.indexOf(k),minion:k})}),de.health>0&&W.push({type:"minion",index:-1,minion:null}),W.length>0){const k=W[Math.floor(Math.random()*W.length)];if(k.index===-1){const H=de.health-ee,D={...de,health:H},M=[...c.players];M[n]=D,c={...c,players:M},console.log(`⚡️${D.name}受到了额外的${ee}点电击伤害`),c=ue(c,c.players[n].id,"element",`⚡️${D.name}受到了额外的${ee}点电击伤害`)}else{const H=de.board[k.index],D=Se(H,ee),M={...de};M.board=[...M.board],M.board[k.index]=D;const O=[...c.players];if(O[n]=M,c={...c,players:O},console.log(`⚡️${H.name}受到了额外的${ee}点电击伤害`),c=ue(c,c.players[n].id,"element",`⚡️${H.name}受到了额外的${ee}点电击伤害`),D.health<=0)if(k.index===m)f=!0;else{const q={...D,health:D.maxHealth};M.board=M.board.filter(G=>G.id!==D.id);const K=[...c.players];K[n]=M,c={...c,players:K,discardPile:[q,...c.discardPile]},c=ue(c,c.players[n].id,"element",`💀${H.name}被电击消灭`)}}const j={type:"lightning_explosion",targetPlayerId:de.id,targetType:k.index===-1?"hero":"minion"};k.index!==-1&&(j.targetMinionId=de.board[k.index].id),c={...c,pendingVisualEffects:[...c.pendingVisualEffects||[],j]}}}}const S=ve(d,"先攻"),T=ve(h,"先攻"),R=!(S&&!T&&f),_=R?Se(d,y):d,B=ve(d,"狂怒"),$=_.attacksThisTurn+1,N=B&&f?!0:$<_.maxAttacksPerTurn,J={..._,attacksThisTurn:B&&f?0:$,hasAttacked:!N,canAttack:N},U=d.effects||(d.effect?[d.effect]:[]),ne=h.effects||(h.effect?[h.effect]:[]);let Z={...a};if(Z.board=Z.board.map((F,ee)=>ee===l?J:F),c.players[i]=Z,R){const F=U.filter(ee=>me(ee,"失去生命时")&&ee.effect);for(const ee of F)c=we(c,ee,e,{sourceCard:d,attackerMinion:d}),c={...c},c.players=[...c.players],Z={...c.players[i]}}const se=Z.board.filter(F=>F.health<=0);Z.board=Z.board.filter(F=>F.health>0);const Y=se.map(F=>({...F,health:F.maxHealth}));c.discardPile=[...Y,...c.discardPile],c.players[i]=Z;let C={...o};const P=x?c.players[n].board[m]:w;C.board=C.board.map((F,ee)=>ee===m?(console.log("attack() 更新目标随从:",P.name,"新血量:",P.health,"是否死亡:",P.health<=0),P):F),c.players[n]=C;const L=ne.filter(F=>me(F,"失去生命时")&&F.effect);for(const F of L)c=we(c,F,t,{sourceCard:h,attackerMinion:h}),c={...c},c.players=[...c.players],C={...c.players[n]};if(f&&x&&!h.elementStatus){const F=c.players[n].board,ee=m>0?F[m-1]:null,de=m<F.length-1?F[m+1]:null;if(ee&&ee.health>0){const z={...c.players[n]};z.board=[...z.board],z.board[m-1]={...z.board[m-1],elementStatus:{type:x,sourcePlayerId:e}};const W=[...c.players];W[n]=z,c={...c,players:W}}if(de&&de.health>0){const z={...c.players[n]};z.board=[...z.board],z.board[m+1]={...z.board[m+1],elementStatus:{type:x,sourcePlayerId:e}};const W=[...c.players];W[n]=z,c={...c,players:W}}}C={...c.players[n]};const V=C.board.filter(F=>F.health<=0);C.board=C.board.filter(F=>F.health>0);const Q=V.map(F=>({...F,health:F.maxHealth}));c.discardPile=[...Q,...c.discardPile],c.players[n]=C,console.log("attack() 执行成功！攻击者攻击次数:",J.attacksThisTurn,"是否还能攻击:",N),console.log("attack() 攻击后目标玩家战场:",c.players[n].board.map(F=>({id:F.id,name:F.name,health:F.health})));const oe=U.filter(F=>me(F,"攻击时")&&F.effect&&F.effect!=="增加伤害");if(oe.length>0){console.log("触发攻击时效果:",d.name,oe);for(const F of oe)c=we(c,F,e,{targetPlayerId:t,targetCardId:r,targetMinion:w,attackerMinion:J,sourceCard:J})}if(f){const F=ne.filter(ee=>me(ee,"死亡时")&&ee.effect);if(F.length>0){console.log("触发死亡时效果:",h.name,F);for(const ee of F)c=we(c,ee,t,{attackerMinion:h,sourceCard:h})}}if(J.health<=0){const F=U.filter(ee=>me(ee,"死亡时")&&ee.effect);if(F.length>0){console.log("触发攻击者死亡时效果:",d.name,F);for(const ee of F)c=we(c,ee,e,{attackerMinion:J,sourceCard:J})}}}return console.log("attack() 返回新状态"),je(c)},Kt=(I,e,s,t)=>{const r=I.effects||(I.effect?[I.effect]:[]);let i=0,n=e;for(const a of r)if(me(a,"攻击时")&&a.effect==="增加伤害"&&a.targets.includes("攻击目标")){if(a.conditionType&&a.conditionType!=="guaranteed"&&a.conditionType!=="d6"){const o=it(a,n,s,{targetMinion:t??void 0});if(o.logMessage&&(n=ue(n,s,"condition",`${I.name} ${o.logMessage}`)),!o.passed)continue}if(a.triggerNumbers&&a.triggerNumbers.length>0&&a.triggerNumbers.length<6){const o=Math.floor(Math.random()*6)+1;if(!a.triggerNumbers.includes(o)){n=ue(n,s,"dice_roll",`🎲 = ${o}❌️ [${a.triggerNumbers.join(",")}]`);continue}n=ue(n,s,"dice_roll",`🎲 = ${o}✅️ [${a.triggerNumbers.join(",")}]`)}i+=a.value||0}return{total:i,newState:n}},xa=(I,e,s,t)=>{console.log("attackHero() 被调用 - 攻击者ID:",e,"攻击者随从ID:",s,"目标玩家ID:",t);const r=e-1,i=t-1,n=I.players[r],a=I.players[i];console.log("攻击者玩家战场:",n.board.map(E=>({id:E.id,name:E.name,canAttack:E.canAttack,hasAttacked:E.hasAttacked})));const o=n.board.findIndex(E=>E.id===s);if(console.log("查找攻击者随从索引:",o),o===-1)return console.log("错误：找不到攻击者随从！"),I;const l=n.board[o];if(console.log("攻击者随从状态 - canAttack:",l.canAttack,"attacksThisTurn:",l.attacksThisTurn,"maxAttacksPerTurn:",l.maxAttacksPerTurn),!l.canAttack||l.attacksThisTurn>=l.maxAttacksPerTurn)return console.log("错误：随从不能攻击！"),I;if(l.keywords.some(E=>E.name==="不动"))return console.log('错误：随从具有"不动"词条，无法攻击！'),I;if(l.frozen)return console.log("[冰冻] 随从被冰冻，无法攻击英雄:",l.name),I;if(!l.canAttackHeroes)return console.log("错误：突击随从不能攻击英雄！"),I;if(qt(a.board))return console.log("错误：目标场上有嘲讽/防御随从！"),I;const d=Et(l);let c={...I};c.players=[...I.players];const{total:m,newState:h}=Kt(l,c,e,null);c=h,m>0&&console.log("attackHero() 增加伤害:",l.name,"额外伤害:",m,"原攻击力:",l.attack,"新攻击力:",l.attack+m);const u=a.heroMarkCount||0,p=l.attack+m+u,b=a.health-p;console.log("attackHero() 计算伤害 - 攻击者攻击力:",l.attack,"印记附加:",u,"目标英雄原血量:",a.health,"新血量:",b);const g=l.attacksThisTurn+1,y=g<l.maxAttacksPerTurn,x={...l,attacksThisTurn:g,hasAttacked:!y,canAttack:y,attack:l.attack};let w={...c};if(w.players[r]={...n,board:n.board.map((E,S)=>S===o?x:E)},w.players[i]={...a,health:b},d){const E=Be(w,"hero",i,void 0,p,d,e);if(w=E.state,E.triggered&&E.extraDamage&&d==="fire"){const S=w.players[i],T=S.health-E.extraDamage;w=ue(w,w.players[i].id,"element",`🔥${S.name}受到了额外的${E.extraDamage}点灼烧伤害`),w.players[i]={...S,health:T}}if(E.triggered&&E.extraDamageIsLightning){const S=E.extraDamage,T=w.players[i],A=T.board.filter(_=>_.health>0),R=[];if(A.forEach((_,B)=>{R.push({type:"minion",index:T.board.indexOf(_)})}),T.health>0&&R.push({type:"minion",index:-1}),R.length>0){const _=R[Math.floor(Math.random()*R.length)];if(_.index===-1){const $=T.health-S;w=ue(w,w.players[i].id,"element",`⚡️${T.name}受到了额外的${S}点电击伤害`),w.players[i]={...T,health:$}}else{const $=T.board[_.index],N=Se($,S),J={...T};if(J.board=[...J.board],J.board[_.index]=N,w=ue(w,w.players[i].id,"element",`⚡️${$.name}受到了额外的${S}点电击伤害`),N.health<=0){const U={...N,health:N.maxHealth};J.board=J.board.filter(ne=>ne.id!==N.id),w.discardPile=[U,...w.discardPile],w=ue(w,w.players[i].id,"element",`💀${$.name}被电击消灭`)}w.players[i]=J}const B={type:"lightning_explosion",targetPlayerId:T.id,targetType:_.index===-1?"hero":"minion"};_.index!==-1&&(B.targetMinionId=T.board[_.index].id),w={...w,pendingVisualEffects:[...w.pendingVisualEffects||[],B]}}}w.players[i].health<=0&&console.log("[元素伤害] 英雄死亡:",w.players[i].name)}console.log("attackHero() 执行成功！目标英雄血量:",b,"攻击者攻击次数:",g,"是否还能攻击:",y);const v=(l.effects||(l.effect?[l.effect]:[])).filter(E=>me(E,"攻击时")&&E.effect&&E.effect!=="增加伤害");if(v.length>0){console.log("触发攻击时效果(攻击英雄):",l.name,v);for(const E of v)w=we(w,E,e,{targetPlayerId:t,targetMinion:void 0,attackerMinion:x,sourceCard:x})}return w=ue(w,e,"damage",`${l.name} 对 ${a.name} 造成 ${p} 点伤害`),je(w)},va=(I,e,s)=>{const t=e-1,r=I.players[t],i=r.board.findIndex(c=>c.id===s);if(i===-1)return console.log("toggleDefense: 找不到随从"),I;const n=r.board[i];if(n.isDefending){if(Ue(n))return console.log("toggleDefense: 嘲讽随从无法取消防御"),I;const c={...n,isDefending:!1},m=[...r.board];m[i]=c;const h={...r,board:m},u=[...I.players];return u[t]=h,{...I,players:u}}if(!ga(n))return console.log("toggleDefense: 该随从无法进入防御模式"),I;const a={...n,isDefending:!0},o=[...r.board];o[i]=a;const l={...r,board:o},d=[...I.players];return d[t]=l,console.log(`toggleDefense: ${n.name} 进入防御模式`),{...I,players:d}},je=I=>{for(const e of I.players)if(e.health<=0){const s=I.online?.isOnline,t=s?"onlineGameOver":"gameOver",r=e.id===1?2:1,i=I.players[r-1];return console.log("[胜负] 游戏结束判定"),console.log("[胜负] 玩家生命值:",I.players.map(n=>`${n.name}: ${n.health}/${n.maxHealth}`)),console.log("[胜负] 死亡玩家:",`${e.name} (ID: ${e.id}, 生命值: ${e.health})`),console.log("[胜负] 胜利玩家:",`${i.name} (ID: ${i.id}, 生命值: ${i.health})`),console.log("[胜负] 联机模式:",s,"phase:",t),console.log("[胜负] winner 值:",r,"(对应 players["+(r-1)+"])"),{...I,phase:t,winner:r}}return I},ka=I=>{const e=I.currentPlayerId-1,s=I.currentPlayerId;console.log("[DEBUG] endTurn",{stateTurnNumber:I.turnNumber,currentPlayerId:s,phase:I.phase,mulliganFirstPlayer:I.mulliganFirstPlayer,p2MulliganCards:I.p2MulliganCards?.map(Xe),p2MulliganSelected:I.p2MulliganSelected,waitingForNextPlayer:I.waitingForNextPlayer});const t=I.players[e].bonusEnergy||0;let r={...I};r.players=[...I.players];const i=I.players[e].energy;r.players[e]={...I.players[e],energy:Math.max(i-t,0),bonusEnergy:0,board:I.players[e].board.map(a=>({...a,canAttack:!1}))};const n=r.players[e].board;for(const a of n){const l=(a.effects||(a.effect?[a.effect]:[])).filter(d=>me(d,"回合结束时")&&d.effect);l.length>0&&(console.log("触发回合结束时效果:",a.name,l),r=Te(r,l,s,a.name,"回合结束时",{attackerMinion:a,sourceCard:a}))}return r.players[e]={...r.players[e],board:r.players[e].board.map(a=>a.playedThisTurn?{...a,playedThisTurn:!1}:{...a,playedThisTurn:!1})},r.players[e]={...r.players[e],board:r.players[e].board.map(a=>{const o=a.keywords.some(l=>l.name==="不动");if(a.preparation>0){const l=a.preparation-1;return{...a,preparation:l,canAttack:o?!1:l===0&&!Ue(a)?!0:a.canAttack,canAttackHeroes:o?!1:l===0&&!Ue(a)?!0:a.canAttackHeroes,canAttackMinions:o?!1:l===0&&!Ue(a)?!0:a.canAttackMinions}}return a})},r.players[e]={...r.players[e],board:r.players[e].board.map(a=>a.frozen?{...a,frozen:!1}:a)},r.players[e]={...r.players[e],heroMarkCount:0},r.waitingForNextPlayer=!0,r},wa=I=>{const e=I.currentPlayerId===1?2:1,s=e-1;console.log("[DEBUG] startMyTurn",{stateTurnNumber:I.turnNumber,nextPlayerId:e,statePhase:I.phase,mulliganFirstPlayer:I.mulliganFirstPlayer,currentPlayerId:I.currentPlayerId});const t=p=>{const b=p.heroCard?.skills?.map(g=>{const y=g.remainingCooldown??0,x=Math.max(0,y-1);return{...g,remainingCooldown:x}});return{...p,heroCard:p.heroCard?{...p.heroCard,skills:b}:void 0}},r={...I,players:I.players.map(t)},i=r.players.findIndex(p=>p.id===e);let n=!1,a="",o={...r};if(i!==-1){const p=r.players[i];p.frozen&&(n=!0,a=p.name||"英雄");const b=p.board.map(x=>x.frozen?{...x,canAttack:!1,hasAttacked:!0,attacksThisTurn:x.maxAttacksPerTurn}:x),g={...p,board:b,frozen:!1},y=[...r.players];y[i]=g,o={...r,players:y}}if(o.turnNumber===1&&o.mulliganDone===1&&o.p2MulliganCards.length===0){console.log("后手第一回合开始，触发换牌");let p={...o};const b=[];for(let g=0;g<4;g++){const y=Ge(p,e,!1);y&&b.push(y)}return{...p,phase:"mulligan",currentPlayerId:e,waitingForNextPlayer:!1,mulliganCards:[],mulliganSelected:[],p2MulliganCards:b,p2MulliganSelected:[],newlyDrawnCardIds:b.map(g=>g.id)}}let l={...o,newlyDrawnCardIds:[]};l.waitingForNextPlayer=!1,l.currentPlayerId=e,e===1&&(l.turnNumber=I.turnNumber+1);const d=o.players[s],c=Math.min(10,l.turnNumber);if(l.players[s]={...l.players[s],energy:c,maxEnergy:c,bonusEnergy:0,heroSkillUsed:d.heroCard?.skills?.map(()=>!1),board:d.board.map(p=>{const b=p.preparation>0,g=p.keywords.some(y=>y.name==="不动");return p.keywords.some(y=>y.name==="嘲讽"),{...p,keywords:p.keywords.filter(y=>y.name!=="嘲讽"),canAttack:g?!1:!b,hasAttacked:!1,attacksThisTurn:0,playedThisTurn:!1,isDefending:!1,canAttackHeroes:g?!1:!b&&!ve(p,"暴虐"),canAttackMinions:g?!1:!b&&!ve(p,"斩首")}})},n){const p=Math.ceil(c*.2);l=ue(l,e,"element",`🧊${a}被冰冻失去了${p}点能量`),l.players[s]={...l.players[s],energy:Math.max(0,c-p)}}l=(p=>{let b=p;const g=[...b.players[s].board];console.log("回合开始时检查随从效果，随从数量:",g.length);for(const y of g){if(!b.players[s].board.some(E=>E.id===y.id)){console.log("随从已死亡，跳过:",y.name);continue}console.log("随从:",y.name,"effects:",y.effects,"effect:",y.effect);const v=(y.effects||(y.effect?[y.effect]:[])).filter(E=>me(E,"回合开始时")&&E.effect);console.log("回合开始时效果:",v),v.length>0&&(console.log("触发回合开始时效果:",y.name,v),b=Te(b,v,e,y.name,"回合开始时",{attackerMinion:y,sourceCard:y}))}return b})(l),l=Ut(l,e);const h=l.players[s].heroCard,u=h?.skills||[];for(let p=0;p<u.length;p++){const b=u[p];if(b.type!=="passive")continue;const y=(b.effects||(b.effect?[b.effect]:[])).filter(x=>me(x,"回合开始时")&&x.effect);y.length>0&&h&&(l=Te(l,y,e,`${l.players[s].name}的被动【${b.name}】`,"回合开始时",{sourceCard:h}))}return rt(l,e),l},Ea=I=>({phase:"menu",currentPlayerId:1,turnNumber:1,players:[Oe(1),Oe(2)],winner:null,sharedDeck:I.sharedDeck,heroCards:I.heroCards,heroCard:I.heroCard,groups:I.groups,publicBattleDeck:[],waitingForNextPlayer:!1,newlyDrawnCardIds:[],gameLogs:[],discardPile:[],soundEffects:[],mulliganCards:[],mulliganSelected:[],mulliganFirstPlayer:0,mulliganDone:0,skipFirstDraw:!1,pendingVisualEffects:[],p2MulliganCards:[],p2MulliganSelected:[],online:{isOnline:!1,playerId:"",playerNickname:"",currentRoom:null,messages:[],playerReady:[],localDeckImport:null,remoteDeckImports:{},battlePlayers:[],isSpectator:!1,spectatorViewPlayerId:"",diceRolls:[],firstPlayerId:"",lastLoserId:"",rematchRequested:[],isWaitingForGameState:!1,heroSelections:{}}}),Ca=I=>({...I,phase:"cardCreator"}),Ia=I=>({...I,phase:"heroEditor"}),Sa=I=>({...I,phase:"cardManager"}),$a=(I,e)=>{const s=[...I.sharedDeck],t=be(e),r=s.findIndex(o=>be(o.card)===t);r!==-1?s[r]={...s[r],count:s[r].count+1}:s.push({card:e,count:1});const i=I.groups[0],n=[...i.cards],a=n.findIndex(o=>be(o.card)===t);return a!==-1?n[a]={...n[a],count:n[a].count+1}:n.push({card:e,count:1}),{...I,sharedDeck:s,groups:[{...i,cards:n},...I.groups.slice(1)]}},_a=(I,e)=>{const s=be(e),t=[...I.sharedDeck],r=t.findIndex(o=>be(o.card)===s);if(r!==-1)t[r]={...t[r],count:t[r].count+1};else{const o={...e,id:ke()};t.push({card:o,count:1})}const i=I.groups[0],n=[...i.cards],a=n.findIndex(o=>be(o.card)===s);if(a!==-1)n[a]={...n[a],count:n[a].count+1};else{const o={...e,id:ke()};n.push({card:o,count:1})}return{...I,sharedDeck:t,groups:[{...i,cards:n},...I.groups.slice(1)]}},Pa=(I,e)=>{const s=[...I.sharedDeck],t=s.findIndex(o=>o.card.id===e);if(t===-1)return I;const r=s[t],i=I.groups[0],n=i.cards.findIndex(o=>o.card.id===e);let a=[...i.cards];return r.count>1?(s[t]={...r,count:r.count-1},n!==-1&&(a[n]={...a[n],count:a[n].count-1})):(s.splice(t,1),n!==-1&&a.splice(n,1)),{...I,sharedDeck:s,groups:[{...i,cards:a},...I.groups.slice(1)]}},Ta=(I,e)=>{const s=[...I.sharedDeck],t=s.findIndex(i=>i.card.id===e);if(t===-1)return I;const r=s[t];if(r.count>1){s[t]={...r,count:r.count-1};const i=I.groups[0],n=[...i.cards],a=n.findIndex(o=>o.card.id===e);return a!==-1&&(n[a]={...n[a],count:n[a].count-1}),{...I,sharedDeck:s,groups:[{...i,cards:n},...I.groups.slice(1)]}}return I},Aa=(I,e)=>{const s=be(e),t=I.groups[0];return{...I,sharedDeck:I.sharedDeck.filter(r=>be(r.card)!==s),groups:[{...t,cards:t.cards.filter(r=>be(r.card)!==s)},...I.groups.slice(1)]}},Ma=(I,e)=>{const s=e.length>0&&"count"in e[0]?e:Qe(e),t=I.groups[0];return{...I,sharedDeck:s,groups:[{...t,cards:[...s]},...I.groups.slice(1)]}},Da=(I,e)=>{const s=e.length>0&&"count"in e[0]?e:Qe(e),t=[...I.sharedDeck],r=new Map;for(const o of t)r.set(be(o.card),o);for(const o of s){const l=be(o.card),d=r.get(l);d?d.count+=o.count:(r.set(l,{card:o.card,count:o.count}),t.push({card:o.card,count:o.count}))}const i=I.groups[0],n=[...i.cards],a=new Map;for(const o of n)a.set(be(o.card),o);for(const o of s){const l=be(o.card),d=a.get(l);d?d.count+=o.count:(a.set(l,{card:o.card,count:o.count}),n.push({card:o.card,count:o.count}))}return{...I,sharedDeck:t,groups:[{...i,cards:n},...I.groups.slice(1)]}},La=(I,e)=>({...I,groups:[...I.groups,{id:`group_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,name:e,cards:[]}]}),Ra=(I,e)=>{const s=I.groups.find(r=>r.id===e);if(!s||s.id===Me)return I;const t=I.groups[0];return{...I,groups:[{...t,cards:[...t.cards,...s.cards]},...I.groups.slice(1).filter(r=>r.id!==e)]}},Ba=(I,e,s)=>e===Me?I:{...I,groups:I.groups.map(t=>t.id===e?{...t,name:s}:t)},Oa=(I,e,s)=>{const t=I.groups.find(d=>d.id===e),r=I.groups.find(d=>d.cards.some(c=>c.card.id===s));if(!t||!r||r.id===t.id)return I;const i=r.cards.find(d=>d.card.id===s);if(!i)return I;const n=r.cards.filter(d=>d.card.id!==s),a=be(i.card),l=t.cards.find(d=>be(d.card)===a)?t.cards.map(d=>be(d.card)===a?{...d,count:d.count+i.count}:d):[...t.cards,{card:{...i.card},count:i.count}];return{...I,groups:I.groups.map(d=>d.id===r.id?{...d,cards:n}:d.id===t.id?{...d,cards:l}:d)}},Na=(I,e)=>{switch(e.type){case"SHOW_SETUP":return oa(I);case"START_GAME":return ha(I,e.player1Name,e.player2Name,e.player1Hero,e.player2Hero);case"TOGGLE_MULLIGAN_CARD":{const s=e.cardId,t=I.mulliganSelected.includes(s);return{...I,mulliganSelected:t?I.mulliganSelected.filter(r=>r!==s):[...I.mulliganSelected,s]}}case"TOGGLE_P2_MULLIGAN_CARD":{const s=e.cardId,t=I.p2MulliganSelected.includes(s);return{...I,p2MulliganSelected:t?I.p2MulliganSelected.filter(r=>r!==s):[...I.p2MulliganSelected,s]}}case"CONFIRM_MULLIGAN":if(I.mulliganDone===0&&!e.forceP2Branch){console.log("[DEBUG] CONFIRM_MULLIGAN trigger",{currentPlayer:I.currentPlayerId,turnNumber:I.turnNumber,phase:I.phase,mulliganFirstPlayer:I.mulliganFirstPlayer,mulliganCardsCount:I.mulliganCards.length,mulliganSelected:I.mulliganSelected});const s=I.currentPlayerId,t=s-1,r=I.mulliganSelected,i=I.mulliganCards.filter(l=>!r.includes(l.id));let n={...I};const a=I.mulliganCards.filter(l=>r.includes(l.id)),o=[];for(let l=0;l<r.length;l++){const d=Ge(n,s,!1);d&&o.push(d)}if(n.players[t]={...n.players[t],personalBattleDeck:[...n.players[t].personalBattleDeck||[],...a]},n.players[t]={...n.players[t],hand:[...n.players[t].hand,...i,...o]},n.mulliganCards=[],n.mulliganSelected=[],n.newlyDrawnCardIds=o.map(l=>l.id),s===1&&I.mulliganFirstPlayer===1)if(n.players.length>1&&n.players[1].name&&n.players[1].name.includes("Robot")){const c=[];for(let h=0;h<4;h++){const u=Ge(n,2,!0);u&&c.push(u)}if(!c.some(h=>h.legacyEffect==="gain_energy"||h.name==="幸运币")){const h=bt();c.push(h)}n.players[1]={...n.players[1],hand:c},n.phase="robotBattle",n.currentPlayerId=2,n.turnNumber=1,n.mulliganCards=[],n.mulliganDone=2,n.newlyDrawnCardIds=c.map(h=>h.id)}else n.phase=n.online?.currentRoom?"mulligan":"playing",n.currentPlayerId=1,n.mulliganDone=1,n.mulliganCards=[],n.mulliganSelected=[],n.online?.currentRoom;return console.log("[DEBUG] CONFIRM_MULLIGAN return",{currentPlayer:n.currentPlayerId,turnNumber:n.turnNumber,phase:n.phase,mulliganFirstPlayer:n.mulliganFirstPlayer,player0Energy:n.players[0].energy,player0MaxEnergy:n.players[0].maxEnergy,player1Energy:n.players[1].energy,player1MaxEnergy:n.players[1].maxEnergy}),n}else{let s={...I};const t=I.p2MulliganSelected,r=I.p2MulliganCards.filter(l=>!t.includes(l.id)),i=I.p2MulliganCards.filter(l=>t.includes(l.id)),n=[];for(let l=0;l<t.length;l++){const d=Ge(s,2,!1);d&&n.push(d)}s.players[1]={...s.players[1],personalBattleDeck:[...s.players[1].personalBattleDeck||[],...i]},s.players[1]={...s.players[1],hand:[...s.players[1].hand,...r,...n]},s.p2MulliganCards=[],s.p2MulliganSelected=[],s.newlyDrawnCardIds=n.map(l=>l.id);const a=s.players[1];if(!a.hand.some(l=>l.legacyEffect==="gain_energy"||l.name==="幸运币")){const l=bt();s.players[1]={...a,hand:[...a.hand,l]},s.newlyDrawnCardIds=[...s.newlyDrawnCardIds,l.id]}return s.mulliganDone=2,s.online?.currentRoom?(s.phase="onlineBattle",s.currentPlayerId=1,s.waitingForNextPlayer=!0,s.mulliganCards=[],s.mulliganSelected=[]):(s.phase="playing",s.currentPlayerId=2,s.mulliganCards=[],s.mulliganSelected=[]),s}case"END_TURN":return ka(I);case"SHOW_ROBOT_SETUP":return la(I);case"START_ROBOT_BATTLE":return da(I,e.playerName,e.playerHero);case"END_ROBOT_TURN":return ca(I);case"START_MY_TURN":return wa(I);case"DRAW_CARD":return ua(I,e.playerId);case"PLAY_CARD":return Wt(I,e.playerId,e.cardId);case"PLAY_CARD_WITH_TARGET":return pa(I,e.playerId,e.cardId,e.targetPlayerId,e.targetCardId);case"EXECUTE_PLAYED_MINION_EFFECT":return ma(I,e.playerId,e.cardId,e.targetPlayerId,e.targetCardId);case"ATTACK":return ba(I,e.attackerPlayerId,e.attackerCardId,e.targetPlayerId,e.targetCardId);case"ATTACK_HERO":return xa(I,e.attackerPlayerId,e.attackerCardId,e.targetPlayerId);case"TOGGLE_DEFENSE":return va(I,e.playerId,e.cardId);case"BACK_TO_MENU":return Ea(I);case"SHOW_CARD_CREATOR":return Ca(I);case"SHOW_HERO_EDITOR":return Ia(I);case"SHOW_CARD_MANAGER":return Sa(I);case"ADD_CARD":return $a(I,e.card);case"ADD_CARD_BY_TEMPLATE":return _a(I,e.cardTemplate);case"DELETE_CARD":return Pa(I,e.cardId);case"DELETE_HERO_CARD":return{...I,heroCards:I.heroCards.filter(s=>s.id!==e.heroId)};case"DECREASE_CARD_COUNT":return Ta(I,e.cardId);case"DELETE_ALL_CARDS_BY_TEMPLATE":return Aa(I,e.cardTemplate);case"SET_DECK":return Ma(I,e.cards);case"IMPORT_CARDS":return Da(I,e.cards);case"CREATE_GROUP":return La(I,e.name);case"DELETE_GROUP":return Ra(I,e.groupId);case"RENAME_GROUP":return Ba(I,e.groupId,e.name);case"MOVE_CARD_TO_GROUP":return Oa(I,e.groupId,e.cardId);case"CLEAR_NEWLY_DRAWN":return{...I,newlyDrawnCardIds:[]};case"SHOW_LOBBY":return{...I,phase:"lobby",online:{...I.online,isOnline:!0,playerId:e.playerId,playerNickname:e.playerNickname}};case"SHOW_ROOM":return{...I,phase:"room",online:{...I.online,isOnline:!0,playerId:e.playerId,playerNickname:e.playerNickname,currentRoom:e.room,messages:[],playerReady:[],localDeckImport:null,remoteDeckImports:{}}};case"UPDATE_ROOM":return{...I,online:{...I.online,currentRoom:e.room}};case"UPDATE_MESSAGES":return{...I,online:{...I.online,messages:e.messages}};case"ADD_MESSAGE":return{...I,online:{...I.online,messages:[...I.online.messages,e.message]}};case"UPDATE_PLAYER_READY":return{...I,online:{...I.online,playerReady:e.playerReady}};case"LEAVE_ROOM":return{...I,phase:"lobby",online:{...I.online,currentRoom:null,messages:[],playerReady:[],localDeckImport:null,remoteDeckImports:{},battlePlayers:[],isSpectator:!1,spectatorViewPlayerId:"",diceRolls:[],firstPlayerId:"",lastLoserId:"",rematchRequested:[]}};case"SET_ONLINE_HERO":return{...I,online:{...I.online,heroSelections:{...I.online.heroSelections,[e.playerId]:e.heroCard}}};case"UPDATE_LOCAL_DECK_IMPORT":return console.log("[DEBUG reducer] UPDATE_LOCAL_DECK_IMPORT:",e.filename,e.cardCount),{...I,sharedDeck:e.entries,heroCards:e.heroCards!==void 0?e.heroCards:I.heroCards,online:{...I.online,localDeckImport:{filename:e.filename,cardCount:e.cardCount,entries:e.entries}}};case"UPDATE_REMOTE_DECK_IMPORT":return{...I,online:{...I.online,remoteDeckImports:{...I.online.remoteDeckImports,[e.playerId]:{filename:e.filename,cardCount:e.cardCount,playerNickname:e.playerNickname,...e.comparisonData?{comparisonData:e.comparisonData}:{}}}}};case"START_ONLINE_BATTLE":{const t=Array.isArray(e.onlineDeck)&&e.onlineDeck.length>0&&"count"in e.onlineDeck[0]?e.onlineDeck:Qe(e.onlineDeck);return{...I,phase:"diceRoll",sharedDeck:t,online:{...I.online,battlePlayers:e.battlePlayers,isSpectator:e.isSpectator,spectatorViewPlayerId:e.battlePlayers[0]?.playerId||"",diceRolls:[],firstPlayerId:"",rematchRequested:[]}}}case"SET_DICE_ROLLS":return{...I,online:{...I.online,diceRolls:e.diceRolls,firstPlayerId:e.firstPlayerId,spectatorViewPlayerId:e.firstPlayerId}};case"START_ONLINE_GAME":{const s=e.player1Name,t=e.player2Name,r=e.player1Hero,i=e.player2Hero;wt();const n=e.player1PersonalKeys||[],a=e.player2PersonalKeys||[],o=[],l=[],d=[];if(e.sharedDeckOrder&&e.sharedDeckOrder.length>0)for(let g=0;g<e.sharedDeckOrder.length;g++){const y=e.sharedDeckOrder[g],x=I.sharedDeck.find(f=>be(f.card)===y);if(!x){console.warn("【START_ONLINE_GAME】本地未找到卡牌模板:",y,"跳过");continue}const w={...x.card,id:ke()};n.includes(y)?l.push(w):a.includes(y)?d.push(w):o.push(w)}else{const g=[];let y=0;for(const x of I.sharedDeck)if(x.card.type!=="hero")for(let w=0;w<x.count;w++)g.push({...x.card,id:1e5+y++});o.push(...He(g))}const c=[],m=[],h=[],u=[];for(let g=0;g<o.length;g++)g%2===0?h.push(o[g]):u.push(o[g]);const p=[];for(let g=0;g<3;g++)if(h.length>0){const y={...h[0],id:ke()};p.push(y),h.splice(0,1)}const b=[];for(let g=0;g<4;g++)if(u.length>0){const y={...u[0],id:ke()};b.push(y),u.splice(0,1)}return{...I,phase:"mulligan",currentPlayerId:1,turnNumber:1,publicBattleDeck:[],sharedDeck:I.sharedDeck,players:[{...Oe(1),name:s,deck:[],personalBattleDeck:l,halfPublicDeck:h,hand:c,energy:1,maxEnergy:1,heroCard:r||null},{...Oe(2),name:t,deck:[],personalBattleDeck:d,halfPublicDeck:u,hand:m,energy:1,maxEnergy:1,heroCard:i||null}],winner:null,waitingForNextPlayer:!1,newlyDrawnCardIds:p.map(g=>g.id),discardPile:[],mulliganCards:p,mulliganSelected:[],p2MulliganCards:b,p2MulliganSelected:[],mulliganFirstPlayer:1,mulliganDone:0,online:{...I.online,firstPlayerId:e.firstPlayerId,isWaitingForGameState:!1,heroSelections:{},rematchRequested:[]}}}case"SET_SPECTATOR_VIEW":return{...I,online:{...I.online,spectatorViewPlayerId:e.playerId}};case"REQUEST_REMATCH":return{...I,online:{...I.online,rematchRequested:[...I.online.rematchRequested,e.playerId]}};case"BACK_TO_ROOM":return{...I,phase:"room",winner:null,online:{...I.online,battlePlayers:[],isSpectator:!1,spectatorViewPlayerId:"",diceRolls:[],firstPlayerId:"",rematchRequested:[],isWaitingForGameState:!1,heroSelections:{}}};case"ONLINE_GAME_OVER":{let s=1;return e.winnerId&&typeof e.winnerId=="string"?(s=I.online.battlePlayers.findIndex(r=>r.playerId===e.winnerId)+1,(s<1||s>2)&&(s=1)):console.error("[ONLINE_GAME_OVER] 无法解析 winner，action内容:",e),{...I,phase:"onlineGameOver",winner:s,online:{...I.online,lastLoserId:e.loserId}}}case"PLAY_HERO_SKILL":{const{playerId:s,skillIndex:t,targetPlayerId:r,targetCardId:i}=e;return fa(I,s,t,r,i)}default:return I}},le=(I,e)=>Na(I,e),Xe=I=>({id:I.id,templateKey:be(I),name:I.name,type:I.type,cost:I.cost,attack:I.attack,health:I.health,maxHealth:I.maxHealth,armorValue:I.armorValue,imageData:I.imageData}),Ha=I=>({id:I.id,templateKey:be(I),name:I.name,type:I.type,cost:I.cost,attack:I.attack,health:I.health,maxHealth:I.maxHealth,armorValue:I.armorValue,imageData:I.imageData,canAttack:I.canAttack,hasAttacked:I.hasAttacked,attacksThisTurn:I.attacksThisTurn,maxAttacksPerTurn:I.maxAttacksPerTurn,divineShieldActive:I.divineShieldActive,canAttackHeroes:I.canAttackHeroes,canAttackMinions:I.canAttackMinions,playedThisTurn:I.playedThisTurn,isDefending:I.isDefending,preparation:I.preparation,markCount:I.markCount,pendingNextTurnEffect:I.pendingNextTurnEffect?JSON.stringify(I.pendingNextTurnEffect):void 0,keywords:I.keywords}),Xt=I=>{const e=s=>({id:s.id,name:s.name,health:s.health,maxHealth:s.maxHealth,energy:s.energy,maxEnergy:s.maxEnergy,bonusEnergy:s.bonusEnergy||0,heroMarkCount:s.heroMarkCount||0,heroSkillUsed:s.heroSkillUsed||[],heroCard:s.heroCard?Xe(s.heroCard):null,elementStatus:s.elementStatus,frozen:s.frozen,hand:s.hand.map(Xe),board:s.board.map(Ha),pendingSpellNextTurnEffects:s.pendingSpellNextTurnEffects&&s.pendingSpellNextTurnEffects.length>0?JSON.stringify(s.pendingSpellNextTurnEffects.map(t=>({effect:t.effect,sourceCard:{templateKey:be(t.sourceCard),id:t.sourceCard.id,name:t.sourceCard.name,type:t.sourceCard.type}}))):void 0});return{currentPlayerId:I.currentPlayerId,turnNumber:I.turnNumber,players:[e(I.players[0]),e(I.players[1])],winner:I.winner,gamePhase:I.phase==="mulligan"?"mulligan":I.phase==="onlineGameOver"?"onlineGameOver":I.phase==="gameOver"?"gameOver":I.phase==="onlineBattle"?"onlineBattle":"playing",newlyDrawnCardIds:I.newlyDrawnCardIds,recentLogs:I.gameLogs.slice(-10).map(s=>({turn:s.turn,type:s.type,message:s.message})),timestamp:Date.now(),mulliganCards:I.mulliganCards?.map(Xe),mulliganSelected:I.mulliganSelected,p2MulliganCards:I.p2MulliganCards?.map(Xe),p2MulliganSelected:I.p2MulliganSelected,mulliganDone:I.mulliganDone,mulliganFirstPlayer:I.mulliganFirstPlayer,waitingForNextPlayer:I.waitingForNextPlayer,discardPileDiff:[]}},xt=(I,e)=>{const s=e.find(t=>be(t.card)===I);return s?s.card:null},Ze=(I,e)=>{if(I.name==="幸运币")return{id:I.id,name:"幸运币",cost:0,attack:0,health:0,maxHealth:0,type:"spell",keywords:[],legacyEffect:"gain_energy",legacyEffectValue:1,imageData:"/cards/coin.png"};const s=xt(I.templateKey,e);if(!s){const t=e.find(r=>r.card.name===I.name&&r.card.type===I.type);return t?(console.log("[deserialize] 回退匹配成功:",I.name,I.type),{...t.card,id:I.id,cost:I.cost,attack:I.attack,health:I.health,maxHealth:I.maxHealth,armorValue:I.armorValue,imageData:I.imageData||t.card.imageData}):(console.warn(`[deserialize] 模板缺失: ${I.templateKey}，降级重建。name=${I.name}, type=${I.type}, sharedDeck大小=${e.length}`),{id:I.id,name:I.name||"?",cost:I.cost,attack:I.attack,health:I.health,maxHealth:I.maxHealth,type:I.type||"minion",keywords:I.keywords||[],armorValue:I.armorValue,imageData:I.imageData})}return{...s,id:I.id,cost:I.cost,attack:I.attack,health:I.health,maxHealth:I.maxHealth,armorValue:I.armorValue}},Va=(I,e)=>({...Ze(I,e),canAttack:I.canAttack??!0,hasAttacked:I.hasAttacked??!1,attacksThisTurn:I.attacksThisTurn??0,maxAttacksPerTurn:I.maxAttacksPerTurn??1,divineShieldActive:I.divineShieldActive??!1,canAttackHeroes:I.canAttackHeroes??!0,canAttackMinions:I.canAttackMinions??!0,playedThisTurn:I.playedThisTurn??!1,isDefending:I.isDefending??!1,preparation:I.preparation??0,markCount:I.markCount,elementStatus:I.elementStatus,frozen:I.frozen??!1,pendingNextTurnEffect:I.pendingNextTurnEffect?JSON.parse(I.pendingNextTurnEffect):void 0,pendingNextTurnEffectOwnerId:void 0,keywords:I.keywords??[]}),Zt=(I,e)=>{let s=0,t=0;const r=i=>{const n={id:i.id,name:i.name,health:i.health,maxHealth:i.maxHealth,energy:i.energy,maxEnergy:i.maxEnergy,bonusEnergy:i.bonusEnergy,heroMarkCount:i.heroMarkCount,heroSkillUsed:i.heroSkillUsed,heroCard:i.heroCard?Ze(i.heroCard,e):null,elementStatus:i.elementStatus,frozen:i.frozen??!1,hand:i.hand.map(a=>Ze(a,e)),board:i.board.map(a=>Va(a,e)),deck:[],personalBattleDeck:[],halfPublicDeck:[]};if(i.pendingSpellNextTurnEffects)try{const a=JSON.parse(i.pendingSpellNextTurnEffects);n.pendingSpellNextTurnEffects=a.map(o=>{const l=xt(o.sourceCard.templateKey,e);return{effect:o.effect,sourceCard:l?{...l,id:o.sourceCard.id}:{id:o.sourceCard.id,name:o.sourceCard.name,type:o.sourceCard.type,cost:0,attack:0,health:0,maxHealth:0,keywords:[]}}})}catch(a){console.warn("[deserializeGameState] 解析 pendingSpellNextTurnEffects 失败:",a)}return n};for(const i of I.players)for(const n of[...i.hand,...i.board])t++,xt(n.templateKey,e)||s++;return s>0?console.warn(`[deserializeGameState] 模板缺失 ${s}/${t} (${(s/t*100).toFixed(1)}%)`):console.log(`[deserializeGameState] 全部 ${t} 张卡牌模板匹配成功`),{currentPlayerId:I.currentPlayerId,turnNumber:I.turnNumber,players:[r(I.players[0]),r(I.players[1])],winner:I.winner,phase:I.gamePhase,newlyDrawnCardIds:I.newlyDrawnCardIds,mulliganCards:I.mulliganCards?.map(i=>Ze(i,e)),mulliganSelected:I.mulliganSelected,mulliganDone:I.mulliganDone??0,mulliganFirstPlayer:I.mulliganFirstPlayer??1,p2MulliganCards:I.p2MulliganCards?.map(i=>Ze(i,e)),p2MulliganSelected:I.p2MulliganSelected,waitingForNextPlayer:I.waitingForNextPlayer??!1}},$t=Object.freeze(Object.defineProperty({__proto__:null,cardsToDeckEntries:Qe,deckEntriesToCards:Ye,deserializeGameState:Zt,drawCardInternalWithReturn:Ge,evaluateCondition:it,executeEffect:we,findHeroGroup:Je,gameReducer:le,getAllHeroCards:jt,getCardTemplateKey:be,getGroupById:Ft,getPublicGroup:De,initGameState:Gt,serializeGameState:Xt,shuffleWithSeed:ia},Symbol.toStringTag,{value:"Module"})),za="MiaoKaBao_Deck",Fa=1,Ne="deck";function ot(){return new Promise((I,e)=>{const s=indexedDB.open(za,Fa);s.onupgradeneeded=()=>{const t=s.result;t.objectStoreNames.contains(Ne)||t.createObjectStore(Ne,{keyPath:"id"})},s.onsuccess=()=>I(s.result),s.onerror=()=>e(s.error)})}async function _t(I,e,s){try{const t=await ot(),r=t.transaction(Ne,"readwrite");r.objectStore(Ne).put({id:"main",sharedDeck:I,heroCards:e,groups:s,updatedAt:Date.now()}),await new Promise((n,a)=>{r.oncomplete=()=>n(),r.onerror=()=>a(r.error)}),t.close()}catch(t){console.warn("[deckStorage] 保存卡包失败:",t)}}async function ja(){try{const I=await ot(),s=I.transaction(Ne,"readonly").objectStore(Ne),t=await new Promise((r,i)=>{const n=s.get("main");n.onsuccess=()=>r(n.result),n.onerror=()=>i(n.error)});return I.close(),t&&t.sharedDeck&&t.sharedDeck.length>0?{sharedDeck:t.sharedDeck,heroCards:t.heroCards||[],groups:t.groups}:null}catch(I){return console.warn("[deckStorage] 读取卡包失败:",I),null}}async function Pt(I){try{const e=await ot(),s=e.transaction(Ne,"readwrite"),t=s.objectStore(Ne);I?t.put({id:"folderHandle",handle:I,updatedAt:Date.now()}):t.delete("folderHandle"),await new Promise((r,i)=>{s.oncomplete=()=>r(),s.onerror=()=>i(s.error)}),e.close()}catch(e){console.warn("[deckStorage] 保存文件夹句柄失败:",e)}}async function Ga(){try{const I=await ot(),s=I.transaction(Ne,"readonly").objectStore(Ne),t=await new Promise((r,i)=>{const n=s.get("folderHandle");n.onsuccess=()=>r(n.result),n.onerror=()=>i(n.error)});return I.close(),t?.handle||null}catch(I){return console.warn("[deckStorage] 读取文件夹句柄失败:",I),null}}var tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lt(I){return I&&I.__esModule&&Object.prototype.hasOwnProperty.call(I,"default")?I.default:I}var dt,Tt;function Ua(){return Tt||(Tt=1,dt=function(I,e,s){var t=[],r=I.length;if(r===0)return t;var i=e<0?Math.max(0,e+r):e||0;for(s!==void 0&&(r=s<0?s+r:s);r-- >i;)t[r-i]=I[r];return t}),dt}var ct={},At;function Jt(){return At||(At=1,(function(I){(function(e){e(typeof DO_NOT_EXPORT_CRC>"u"?I:{})})(function(e){e.version="0.3.0";function s(){for(var l=0,d=new Array(256),c=0;c!=256;++c)l=c,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,d[c]=l;return typeof Int32Array<"u"?new Int32Array(d):d}var t=s(),r=typeof Buffer<"u";function i(l){if(l.length>32768&&r)return a(new Buffer(l));for(var d=-1,c=l.length-1,m=0;m<c;)d=t[(d^l.charCodeAt(m++))&255]^d>>>8,d=t[(d^l.charCodeAt(m++))&255]^d>>>8;return m===c&&(d=d>>>8^t[(d^l.charCodeAt(m))&255]),d^-1}function n(l){if(l.length>1e4)return a(l);for(var d=-1,c=0,m=l.length-3;c<m;)d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255];for(;c<m+3;)d=d>>>8^t[(d^l[c++])&255];return d^-1}function a(l){for(var d=-1,c=0,m=l.length-7;c<m;)d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255];for(;c<m+7;)d=d>>>8^t[(d^l[c++])&255];return d^-1}function o(l){for(var d=-1,c=0,m=l.length,h,u;c<m;)h=l.charCodeAt(c++),h<128?d=d>>>8^t[(d^h)&255]:h<2048?(d=d>>>8^t[(d^(192|h>>6&31))&255],d=d>>>8^t[(d^(128|h&63))&255]):h>=55296&&h<57344?(h=(h&1023)+64,u=l.charCodeAt(c++)&1023,d=d>>>8^t[(d^(240|h>>8&7))&255],d=d>>>8^t[(d^(128|h>>2&63))&255],d=d>>>8^t[(d^(128|u>>6&15|h&3))&255],d=d>>>8^t[(d^(128|u&63))&255]):(d=d>>>8^t[(d^(224|h>>12&15))&255],d=d>>>8^t[(d^(128|h>>6&63))&255],d=d>>>8^t[(d^(128|h&63))&255]);return d^-1}e.table=t,e.bstr=i,e.buf=n,e.str=o})})(ct)),ct}var ht,Mt;function Wa(){if(Mt)return ht;Mt=1;var I=Ua(),e=Jt();ht=i;var s=new Uint8Array(4),t=new Int32Array(s.buffer),r=new Uint32Array(s.buffer);function i(n){var a=8,o=a,l;for(l=0;l<n.length;l++)a+=n[l].data.length,a+=12;var d=new Uint8Array(a);for(d[0]=137,d[1]=80,d[2]=78,d[3]=71,d[4]=13,d[5]=10,d[6]=26,d[7]=10,l=0;l<n.length;l++){var c=n[l],m=c.name,h=c.data,u=h.length,p=[m.charCodeAt(0),m.charCodeAt(1),m.charCodeAt(2),m.charCodeAt(3)];r[0]=u,d[o++]=s[3],d[o++]=s[2],d[o++]=s[1],d[o++]=s[0],d[o++]=p[0],d[o++]=p[1],d[o++]=p[2],d[o++]=p[3];for(var b=0;b<u;)d[o++]=h[b++];var g=p.concat(I(h)),y=e.buf(g);t[0]=y,d[o++]=s[3],d[o++]=s[2],d[o++]=s[1],d[o++]=s[0]}return d}return ht}var Ya=Wa();const ut=lt(Ya);var ft,Dt;function qa(){if(Dt)return ft;Dt=1;var I=Jt();ft=r;var e=new Uint8Array(4),s=new Int32Array(e.buffer),t=new Uint32Array(e.buffer);function r(i){if(i[0]!==137)throw new Error("Invalid .png file header");if(i[1]!==80)throw new Error("Invalid .png file header");if(i[2]!==78)throw new Error("Invalid .png file header");if(i[3]!==71)throw new Error("Invalid .png file header");if(i[4]!==13)throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");if(i[5]!==10)throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");if(i[6]!==26)throw new Error("Invalid .png file header");if(i[7]!==10)throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");for(var n=!1,a=[],o=8;o<i.length;){e[3]=i[o++],e[2]=i[o++],e[1]=i[o++],e[0]=i[o++];var l=t[0]+4,d=new Uint8Array(l);d[0]=i[o++],d[1]=i[o++],d[2]=i[o++],d[3]=i[o++];var c=String.fromCharCode(d[0])+String.fromCharCode(d[1])+String.fromCharCode(d[2])+String.fromCharCode(d[3]);if(!a.length&&c!=="IHDR")throw new Error("IHDR header missing");if(c==="IEND"){n=!0,a.push({name:c,data:new Uint8Array(0)});break}for(var m=4;m<l;m++)d[m]=i[o++];e[3]=i[o++],e[2]=i[o++],e[1]=i[o++],e[0]=i[o++];var h=s[0],u=I.buf(d);if(u!==h)throw new Error("CRC values for "+c+" header do not match, PNG file is likely corrupted");var p=new Uint8Array(d.buffer.slice(4));a.push({name:c,data:p})}if(!n)throw new Error(".png file ended prematurely: no IEND header was found");return a}return ft}var Ka=qa();const We=lt(Ka);var at={},pt,Lt;function Xa(){if(Lt)return pt;Lt=1,pt=I;function I(e,s){if(e=String(e),s=String(s),!/^[\x00-\xFF]+$/.test(e)||!/^[\x00-\xFF]+$/.test(s))throw new Error("Only Latin-1 characters are permitted in PNG tEXt chunks. You might want to consider base64 encoding and/or zEXt compression");if(e.length>=80)throw new Error('Keyword "'+e+'" is longer than the 79-character limit imposed by the PNG specification');for(var t=e.length+s.length+1,r=new Uint8Array(t),i=0,n,a=0;a<e.length;a++){if(!(n=e.charCodeAt(a)))throw new Error("0x00 character is not permitted in tEXt keywords");r[i++]=n}r[i++]=0;for(var o=0;o<s.length;o++){if(!(n=s.charCodeAt(o)))throw new Error("0x00 character is not permitted in tEXt content");r[i++]=n}return{name:"tEXt",data:r}}return pt}var mt,Rt;function Za(){if(Rt)return mt;Rt=1,mt=I;function I(e){e.data&&e.name&&(e=e.data);for(var s=!0,t="",r="",i=0;i<e.length;i++){var n=e[i];if(s)n?r+=String.fromCharCode(n):s=!1;else if(n)t+=String.fromCharCode(n);else throw new Error("Invalid NULL character found. 0x00 character is not permitted in tEXt content")}return{keyword:r,text:t}}return mt}var Bt;function Ja(){return Bt||(Bt=1,at.encode=Xa(),at.decode=Za()),at}var Qa=Ja();const ze=lt(Qa);function st(I){throw new Error('Could not dynamically require "'+I+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var gt={exports:{}};var Ot;function es(){return Ot||(Ot=1,(function(I,e){(function(s){I.exports=s()})(function(){return(function s(t,r,i){function n(l,d){if(!r[l]){if(!t[l]){var c=typeof st=="function"&&st;if(!d&&c)return c(l,!0);if(a)return a(l,!0);var m=new Error("Cannot find module '"+l+"'");throw m.code="MODULE_NOT_FOUND",m}var h=r[l]={exports:{}};t[l][0].call(h.exports,function(u){var p=t[l][1][u];return n(p||u)},h,h.exports,s,t,r,i)}return r[l].exports}for(var a=typeof st=="function"&&st,o=0;o<i.length;o++)n(i[o]);return n})({1:[function(s,t,r){var i=s("./utils"),n=s("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(o){for(var l,d,c,m,h,u,p,b=[],g=0,y=o.length,x=y,w=i.getTypeOf(o)!=="string";g<o.length;)x=y-g,c=w?(l=o[g++],d=g<y?o[g++]:0,g<y?o[g++]:0):(l=o.charCodeAt(g++),d=g<y?o.charCodeAt(g++):0,g<y?o.charCodeAt(g++):0),m=l>>2,h=(3&l)<<4|d>>4,u=1<x?(15&d)<<2|c>>6:64,p=2<x?63&c:64,b.push(a.charAt(m)+a.charAt(h)+a.charAt(u)+a.charAt(p));return b.join("")},r.decode=function(o){var l,d,c,m,h,u,p=0,b=0,g="data:";if(o.substr(0,g.length)===g)throw new Error("Invalid base64 input, it looks like a data url.");var y,x=3*(o=o.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(o.charAt(o.length-1)===a.charAt(64)&&x--,o.charAt(o.length-2)===a.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=n.uint8array?new Uint8Array(0|x):new Array(0|x);p<o.length;)l=a.indexOf(o.charAt(p++))<<2|(m=a.indexOf(o.charAt(p++)))>>4,d=(15&m)<<4|(h=a.indexOf(o.charAt(p++)))>>2,c=(3&h)<<6|(u=a.indexOf(o.charAt(p++))),y[b++]=l,h!==64&&(y[b++]=d),u!==64&&(y[b++]=c);return y}},{"./support":30,"./utils":32}],2:[function(s,t,r){var i=s("./external"),n=s("./stream/DataWorker"),a=s("./stream/Crc32Probe"),o=s("./stream/DataLengthProbe");function l(d,c,m,h,u){this.compressedSize=d,this.uncompressedSize=c,this.crc32=m,this.compression=h,this.compressedContent=u}l.prototype={getContentWorker:function(){var d=new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")),c=this;return d.on("end",function(){if(this.streamInfo.data_length!==c.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(d,c,m){return d.pipe(new a).pipe(new o("uncompressedSize")).pipe(c.compressWorker(m)).pipe(new o("compressedSize")).withStreamInfo("compression",c)},t.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(s,t,r){var i=s("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},r.DEFLATE=s("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(s,t,r){var i=s("./utils"),n=(function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o})();t.exports=function(a,o){return a!==void 0&&a.length?i.getTypeOf(a)!=="string"?(function(l,d,c,m){var h=n,u=m+c;l^=-1;for(var p=m;p<u;p++)l=l>>>8^h[255&(l^d[p])];return-1^l})(0|o,a,a.length,0):(function(l,d,c,m){var h=n,u=m+c;l^=-1;for(var p=m;p<u;p++)l=l>>>8^h[255&(l^d.charCodeAt(p))];return-1^l})(0|o,a,a.length,0):0}},{"./utils":32}],5:[function(s,t,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(s,t,r){var i=null;i=typeof Promise<"u"?Promise:s("lie"),t.exports={Promise:i}},{lie:37}],7:[function(s,t,r){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",n=s("pako"),a=s("./utils"),o=s("./stream/GenericWorker"),l=i?"uint8array":"array";function d(c,m){o.call(this,"FlateWorker/"+c),this._pako=null,this._pakoAction=c,this._pakoOptions=m,this.meta={}}r.magic="\b\0",a.inherits(d,o),d.prototype.processChunk=function(c){this.meta=c.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(l,c.data),!1)},d.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new n[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var c=this;this._pako.onData=function(m){c.push({data:m,meta:c.meta})}},r.compressWorker=function(c){return new d("Deflate",c)},r.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(s,t,r){function i(h,u){var p,b="";for(p=0;p<u;p++)b+=String.fromCharCode(255&h),h>>>=8;return b}function n(h,u,p,b,g,y){var x,w,f=h.file,v=h.compression,E=y!==l.utf8encode,S=a.transformTo("string",y(f.name)),T=a.transformTo("string",l.utf8encode(f.name)),A=f.comment,R=a.transformTo("string",y(A)),_=a.transformTo("string",l.utf8encode(A)),B=T.length!==f.name.length,$=_.length!==A.length,N="",J="",U="",ne=f.dir,Z=f.date,se={crc32:0,compressedSize:0,uncompressedSize:0};u&&!p||(se.crc32=h.crc32,se.compressedSize=h.compressedSize,se.uncompressedSize=h.uncompressedSize);var Y=0;u&&(Y|=8),E||!B&&!$||(Y|=2048);var C=0,P=0;ne&&(C|=16),g==="UNIX"?(P=798,C|=(function(V,Q){var oe=V;return V||(oe=Q?16893:33204),(65535&oe)<<16})(f.unixPermissions,ne)):(P=20,C|=(function(V){return 63&(V||0)})(f.dosPermissions)),x=Z.getUTCHours(),x<<=6,x|=Z.getUTCMinutes(),x<<=5,x|=Z.getUTCSeconds()/2,w=Z.getUTCFullYear()-1980,w<<=4,w|=Z.getUTCMonth()+1,w<<=5,w|=Z.getUTCDate(),B&&(J=i(1,1)+i(d(S),4)+T,N+="up"+i(J.length,2)+J),$&&(U=i(1,1)+i(d(R),4)+_,N+="uc"+i(U.length,2)+U);var L="";return L+=`
\0`,L+=i(Y,2),L+=v.magic,L+=i(x,2),L+=i(w,2),L+=i(se.crc32,4),L+=i(se.compressedSize,4),L+=i(se.uncompressedSize,4),L+=i(S.length,2),L+=i(N.length,2),{fileRecord:c.LOCAL_FILE_HEADER+L+S+N,dirRecord:c.CENTRAL_FILE_HEADER+i(P,2)+L+i(R.length,2)+"\0\0\0\0"+i(C,4)+i(b,4)+S+N+R}}var a=s("../utils"),o=s("../stream/GenericWorker"),l=s("../utf8"),d=s("../crc32"),c=s("../signature");function m(h,u,p,b){o.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=u,this.zipPlatform=p,this.encodeFileName=b,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,o),m.prototype.push=function(h){var u=h.meta.percent||0,p=this.entriesCount,b=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,o.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:p?(u+100*(p-b-1))/p:100}}))},m.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var u=this.streamFiles&&!h.file.dir;if(u){var p=n(h,u,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:p.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(h){this.accumulate=!1;var u=this.streamFiles&&!h.file.dir,p=n(h,u,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(p.dirRecord),u)this.push({data:(function(b){return c.DATA_DESCRIPTOR+i(b.crc32,4)+i(b.compressedSize,4)+i(b.uncompressedSize,4)})(h),meta:{percent:100}});else for(this.push({data:p.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var h=this.bytesWritten,u=0;u<this.dirRecords.length;u++)this.push({data:this.dirRecords[u],meta:{percent:100}});var p=this.bytesWritten-h,b=(function(g,y,x,w,f){var v=a.transformTo("string",f(w));return c.CENTRAL_DIRECTORY_END+"\0\0\0\0"+i(g,2)+i(g,2)+i(y,4)+i(x,4)+i(v.length,2)+v})(this.dirRecords.length,p,h,this.zipComment,this.encodeFileName);this.push({data:b,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(h){this._sources.push(h);var u=this;return h.on("data",function(p){u.processChunk(p)}),h.on("end",function(){u.closedSource(u.previous.streamInfo),u._sources.length?u.prepareNextSource():u.end()}),h.on("error",function(p){u.error(p)}),this},m.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(h){var u=this._sources;if(!o.prototype.error.call(this,h))return!1;for(var p=0;p<u.length;p++)try{u[p].error(h)}catch{}return!0},m.prototype.lock=function(){o.prototype.lock.call(this);for(var h=this._sources,u=0;u<h.length;u++)h[u].lock()},t.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(s,t,r){var i=s("../compressions"),n=s("./ZipFileWorker");r.generateWorker=function(a,o,l){var d=new n(o.streamFiles,l,o.platform,o.encodeFileName),c=0;try{a.forEach(function(m,h){c++;var u=(function(y,x){var w=y||x,f=i[w];if(!f)throw new Error(w+" is not a valid compression method !");return f})(h.options.compression,o.compression),p=h.options.compressionOptions||o.compressionOptions||{},b=h.dir,g=h.date;h._compressWorker(u,p).withStreamInfo("file",{name:m,dir:b,date:g,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(d)}),d.entriesCount=c}catch(m){d.error(m)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(s,t,r){function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var n=new i;for(var a in this)typeof this[a]!="function"&&(n[a]=this[a]);return n}}(i.prototype=s("./object")).loadAsync=s("./load"),i.support=s("./support"),i.defaults=s("./defaults"),i.version="3.10.1",i.loadAsync=function(n,a){return new i().loadAsync(n,a)},i.external=s("./external"),t.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(s,t,r){var i=s("./utils"),n=s("./external"),a=s("./utf8"),o=s("./zipEntries"),l=s("./stream/Crc32Probe"),d=s("./nodejsUtils");function c(m){return new n.Promise(function(h,u){var p=m.decompressed.getContentWorker().pipe(new l);p.on("error",function(b){u(b)}).on("end",function(){p.streamInfo.crc32!==m.decompressed.crc32?u(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}t.exports=function(m,h){var u=this;return h=i.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),d.isNode&&d.isStream(m)?n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",m,!0,h.optimizedBinaryString,h.base64).then(function(p){var b=new o(h);return b.load(p),b}).then(function(p){var b=[n.Promise.resolve(p)],g=p.files;if(h.checkCRC32)for(var y=0;y<g.length;y++)b.push(c(g[y]));return n.Promise.all(b)}).then(function(p){for(var b=p.shift(),g=b.files,y=0;y<g.length;y++){var x=g[y],w=x.fileNameStr,f=i.resolve(x.fileNameStr);u.file(f,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:h.createFolders}),x.dir||(u.file(f).unsafeOriginalName=w)}return b.zipComment.length&&(u.comment=b.zipComment),u})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(s,t,r){var i=s("../utils"),n=s("../stream/GenericWorker");function a(o,l){n.call(this,"Nodejs stream input adapter for "+o),this._upstreamEnded=!1,this._bindStream(l)}i.inherits(a,n),a.prototype._bindStream=function(o){var l=this;(this._stream=o).pause(),o.on("data",function(d){l.push({data:d,meta:{percent:0}})}).on("error",function(d){l.isPaused?this.generatedError=d:l.error(d)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},a.prototype.pause=function(){return!!n.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(s,t,r){var i=s("readable-stream").Readable;function n(a,o,l){i.call(this,o),this._helper=a;var d=this;a.on("data",function(c,m){d.push(c)||d._helper.pause(),l&&l(m)}).on("error",function(c){d.emit("error",c)}).on("end",function(){d.push(null)})}s("../utils").inherits(n,i),n.prototype._read=function(){this._helper.resume()},t.exports=n},{"../utils":32,"readable-stream":16}],14:[function(s,t,r){t.exports={isNode:typeof Buffer<"u",newBufferFrom:function(i,n){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(i,n);if(typeof i=="number")throw new Error('The "data" argument must not be a number');return new Buffer(i,n)},allocBuffer:function(i){if(Buffer.alloc)return Buffer.alloc(i);var n=new Buffer(i);return n.fill(0),n},isBuffer:function(i){return Buffer.isBuffer(i)},isStream:function(i){return i&&typeof i.on=="function"&&typeof i.pause=="function"&&typeof i.resume=="function"}}},{}],15:[function(s,t,r){function i(f,v,E){var S,T=a.getTypeOf(v),A=a.extend(E||{},d);A.date=A.date||new Date,A.compression!==null&&(A.compression=A.compression.toUpperCase()),typeof A.unixPermissions=="string"&&(A.unixPermissions=parseInt(A.unixPermissions,8)),A.unixPermissions&&16384&A.unixPermissions&&(A.dir=!0),A.dosPermissions&&16&A.dosPermissions&&(A.dir=!0),A.dir&&(f=g(f)),A.createFolders&&(S=b(f))&&y.call(this,S,!0);var R=T==="string"&&A.binary===!1&&A.base64===!1;E&&E.binary!==void 0||(A.binary=!R),(v instanceof c&&v.uncompressedSize===0||A.dir||!v||v.length===0)&&(A.base64=!1,A.binary=!0,v="",A.compression="STORE",T="string");var _=null;_=v instanceof c||v instanceof o?v:u.isNode&&u.isStream(v)?new p(f,v):a.prepareContent(f,v,A.binary,A.optimizedBinaryString,A.base64);var B=new m(f,_,A);this.files[f]=B}var n=s("./utf8"),a=s("./utils"),o=s("./stream/GenericWorker"),l=s("./stream/StreamHelper"),d=s("./defaults"),c=s("./compressedObject"),m=s("./zipObject"),h=s("./generate"),u=s("./nodejsUtils"),p=s("./nodejs/NodejsStreamInputAdapter"),b=function(f){f.slice(-1)==="/"&&(f=f.substring(0,f.length-1));var v=f.lastIndexOf("/");return 0<v?f.substring(0,v):""},g=function(f){return f.slice(-1)!=="/"&&(f+="/"),f},y=function(f,v){return v=v!==void 0?v:d.createFolders,f=g(f),this.files[f]||i.call(this,f,null,{dir:!0,createFolders:v}),this.files[f]};function x(f){return Object.prototype.toString.call(f)==="[object RegExp]"}var w={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(f){var v,E,S;for(v in this.files)S=this.files[v],(E=v.slice(this.root.length,v.length))&&v.slice(0,this.root.length)===this.root&&f(E,S)},filter:function(f){var v=[];return this.forEach(function(E,S){f(E,S)&&v.push(S)}),v},file:function(f,v,E){if(arguments.length!==1)return f=this.root+f,i.call(this,f,v,E),this;if(x(f)){var S=f;return this.filter(function(A,R){return!R.dir&&S.test(A)})}var T=this.files[this.root+f];return T&&!T.dir?T:null},folder:function(f){if(!f)return this;if(x(f))return this.filter(function(T,A){return A.dir&&f.test(T)});var v=this.root+f,E=y.call(this,v),S=this.clone();return S.root=E.name,S},remove:function(f){f=this.root+f;var v=this.files[f];if(v||(f.slice(-1)!=="/"&&(f+="/"),v=this.files[f]),v&&!v.dir)delete this.files[f];else for(var E=this.filter(function(T,A){return A.name.slice(0,f.length)===f}),S=0;S<E.length;S++)delete this.files[E[S].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(f){var v,E={};try{if((E=a.extend(f||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode})).type=E.type.toLowerCase(),E.compression=E.compression.toUpperCase(),E.type==="binarystring"&&(E.type="string"),!E.type)throw new Error("No output type specified.");a.checkSupport(E.type),E.platform!=="darwin"&&E.platform!=="freebsd"&&E.platform!=="linux"&&E.platform!=="sunos"||(E.platform="UNIX"),E.platform==="win32"&&(E.platform="DOS");var S=E.comment||this.comment||"";v=h.generateWorker(this,E,S)}catch(T){(v=new o("error")).error(T)}return new l(v,E.type||"string",E.mimeType)},generateAsync:function(f,v){return this.generateInternalStream(f).accumulate(v)},generateNodeStream:function(f,v){return(f=f||{}).type||(f.type="nodebuffer"),this.generateInternalStream(f).toNodejsStream(v)}};t.exports=w},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(s,t,r){t.exports=s("stream")},{stream:void 0}],17:[function(s,t,r){var i=s("./DataReader");function n(a){i.call(this,a);for(var o=0;o<this.data.length;o++)a[o]=255&a[o]}s("../utils").inherits(n,i),n.prototype.byteAt=function(a){return this.data[this.zero+a]},n.prototype.lastIndexOfSignature=function(a){for(var o=a.charCodeAt(0),l=a.charCodeAt(1),d=a.charCodeAt(2),c=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===o&&this.data[m+1]===l&&this.data[m+2]===d&&this.data[m+3]===c)return m-this.zero;return-1},n.prototype.readAndCheckSignature=function(a){var o=a.charCodeAt(0),l=a.charCodeAt(1),d=a.charCodeAt(2),c=a.charCodeAt(3),m=this.readData(4);return o===m[0]&&l===m[1]&&d===m[2]&&c===m[3]},n.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var o=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,o},t.exports=n},{"../utils":32,"./DataReader":18}],18:[function(s,t,r){var i=s("../utils");function n(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}n.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var o,l=0;for(this.checkOffset(a),o=this.index+a-1;o>=this.index;o--)l=(l<<8)+this.byteAt(o);return this.index+=a,l},readString:function(a){return i.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},t.exports=n},{"../utils":32}],19:[function(s,t,r){var i=s("./Uint8ArrayReader");function n(a){i.call(this,a)}s("../utils").inherits(n,i),n.prototype.readData=function(a){this.checkOffset(a);var o=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,o},t.exports=n},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(s,t,r){var i=s("./DataReader");function n(a){i.call(this,a)}s("../utils").inherits(n,i),n.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},n.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},n.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},n.prototype.readData=function(a){this.checkOffset(a);var o=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,o},t.exports=n},{"../utils":32,"./DataReader":18}],21:[function(s,t,r){var i=s("./ArrayReader");function n(a){i.call(this,a)}s("../utils").inherits(n,i),n.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var o=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,o},t.exports=n},{"../utils":32,"./ArrayReader":17}],22:[function(s,t,r){var i=s("../utils"),n=s("../support"),a=s("./ArrayReader"),o=s("./StringReader"),l=s("./NodeBufferReader"),d=s("./Uint8ArrayReader");t.exports=function(c){var m=i.getTypeOf(c);return i.checkSupport(m),m!=="string"||n.uint8array?m==="nodebuffer"?new l(c):n.uint8array?new d(i.transformTo("uint8array",c)):new a(i.transformTo("array",c)):new o(c)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(s,t,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(s,t,r){var i=s("./GenericWorker"),n=s("../utils");function a(o){i.call(this,"ConvertWorker to "+o),this.destType=o}n.inherits(a,i),a.prototype.processChunk=function(o){this.push({data:n.transformTo(this.destType,o.data),meta:o.meta})},t.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(s,t,r){var i=s("./GenericWorker"),n=s("../crc32");function a(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}s("../utils").inherits(a,i),a.prototype.processChunk=function(o){this.streamInfo.crc32=n(o.data,this.streamInfo.crc32||0),this.push(o)},t.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(s,t,r){var i=s("../utils"),n=s("./GenericWorker");function a(o){n.call(this,"DataLengthProbe for "+o),this.propName=o,this.withStreamInfo(o,0)}i.inherits(a,n),a.prototype.processChunk=function(o){if(o){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+o.data.length}n.prototype.processChunk.call(this,o)},t.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(s,t,r){var i=s("../utils"),n=s("./GenericWorker");function a(o){n.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,o.then(function(d){l.dataIsReady=!0,l.data=d,l.max=d&&d.length||0,l.type=i.getTypeOf(d),l.isPaused||l._tickAndRepeat()},function(d){l.error(d)})}i.inherits(a,n),a.prototype.cleanUp=function(){n.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var o=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":o=this.data.substring(this.index,l);break;case"uint8array":o=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":o=this.data.slice(this.index,l)}return this.index=l,this.push({data:o,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(s,t,r){function i(n){this.name=n||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(n){this.emit("data",n)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(n){this.emit("error",n)}return!0},error:function(n){return!this.isFinished&&(this.isPaused?this.generatedError=n:(this.isFinished=!0,this.emit("error",n),this.previous&&this.previous.error(n),this.cleanUp()),!0)},on:function(n,a){return this._listeners[n].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(n,a){if(this._listeners[n])for(var o=0;o<this._listeners[n].length;o++)this._listeners[n][o].call(this,a)},pipe:function(n){return n.registerPrevious(this)},registerPrevious:function(n){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=n.streamInfo,this.mergeStreamInfo(),this.previous=n;var a=this;return n.on("data",function(o){a.processChunk(o)}),n.on("end",function(){a.end()}),n.on("error",function(o){a.error(o)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var n=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),n=!0),this.previous&&this.previous.resume(),!n},flush:function(){},processChunk:function(n){this.push(n)},withStreamInfo:function(n,a){return this.extraStreamInfo[n]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var n in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,n)&&(this.streamInfo[n]=this.extraStreamInfo[n])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var n="Worker "+this.name;return this.previous?this.previous+" -> "+n:n}},t.exports=i},{}],29:[function(s,t,r){var i=s("../utils"),n=s("./ConvertWorker"),a=s("./GenericWorker"),o=s("../base64"),l=s("../support"),d=s("../external"),c=null;if(l.nodestream)try{c=s("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(u,p){return new d.Promise(function(b,g){var y=[],x=u._internalType,w=u._outputType,f=u._mimeType;u.on("data",function(v,E){y.push(v),p&&p(E)}).on("error",function(v){y=[],g(v)}).on("end",function(){try{var v=(function(E,S,T){switch(E){case"blob":return i.newBlob(i.transformTo("arraybuffer",S),T);case"base64":return o.encode(S);default:return i.transformTo(E,S)}})(w,(function(E,S){var T,A=0,R=null,_=0;for(T=0;T<S.length;T++)_+=S[T].length;switch(E){case"string":return S.join("");case"array":return Array.prototype.concat.apply([],S);case"uint8array":for(R=new Uint8Array(_),T=0;T<S.length;T++)R.set(S[T],A),A+=S[T].length;return R;case"nodebuffer":return Buffer.concat(S);default:throw new Error("concat : unsupported type '"+E+"'")}})(x,y),f);b(v)}catch(E){g(E)}y=[]}).resume()})}function h(u,p,b){var g=p;switch(p){case"blob":case"arraybuffer":g="uint8array";break;case"base64":g="string"}try{this._internalType=g,this._outputType=p,this._mimeType=b,i.checkSupport(g),this._worker=u.pipe(new n(g)),u.lock()}catch(y){this._worker=new a("error"),this._worker.error(y)}}h.prototype={accumulate:function(u){return m(this,u)},on:function(u,p){var b=this;return u==="data"?this._worker.on(u,function(g){p.call(b,g.data,g.meta)}):this._worker.on(u,function(){i.delay(p,arguments,b)}),this},resume:function(){return i.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(u){if(i.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new c(this,{objectMode:this._outputType!=="nodebuffer"},u)}},t.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(s,t,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var i=new ArrayBuffer(0);try{r.blob=new Blob([i],{type:"application/zip"}).size===0}catch{try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);n.append(i),r.blob=n.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!s("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(s,t,r){for(var i=s("./utils"),n=s("./support"),a=s("./nodejsUtils"),o=s("./stream/GenericWorker"),l=new Array(256),d=0;d<256;d++)l[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;l[254]=l[254]=1;function c(){o.call(this,"utf-8 decode"),this.leftOver=null}function m(){o.call(this,"utf-8 encode")}r.utf8encode=function(h){return n.nodebuffer?a.newBufferFrom(h,"utf-8"):(function(u){var p,b,g,y,x,w=u.length,f=0;for(y=0;y<w;y++)(64512&(b=u.charCodeAt(y)))==55296&&y+1<w&&(64512&(g=u.charCodeAt(y+1)))==56320&&(b=65536+(b-55296<<10)+(g-56320),y++),f+=b<128?1:b<2048?2:b<65536?3:4;for(p=n.uint8array?new Uint8Array(f):new Array(f),y=x=0;x<f;y++)(64512&(b=u.charCodeAt(y)))==55296&&y+1<w&&(64512&(g=u.charCodeAt(y+1)))==56320&&(b=65536+(b-55296<<10)+(g-56320),y++),b<128?p[x++]=b:(b<2048?p[x++]=192|b>>>6:(b<65536?p[x++]=224|b>>>12:(p[x++]=240|b>>>18,p[x++]=128|b>>>12&63),p[x++]=128|b>>>6&63),p[x++]=128|63&b);return p})(h)},r.utf8decode=function(h){return n.nodebuffer?i.transformTo("nodebuffer",h).toString("utf-8"):(function(u){var p,b,g,y,x=u.length,w=new Array(2*x);for(p=b=0;p<x;)if((g=u[p++])<128)w[b++]=g;else if(4<(y=l[g]))w[b++]=65533,p+=y-1;else{for(g&=y===2?31:y===3?15:7;1<y&&p<x;)g=g<<6|63&u[p++],y--;1<y?w[b++]=65533:g<65536?w[b++]=g:(g-=65536,w[b++]=55296|g>>10&1023,w[b++]=56320|1023&g)}return w.length!==b&&(w.subarray?w=w.subarray(0,b):w.length=b),i.applyFromCharCode(w)})(h=i.transformTo(n.uint8array?"uint8array":"array",h))},i.inherits(c,o),c.prototype.processChunk=function(h){var u=i.transformTo(n.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(n.uint8array){var p=u;(u=new Uint8Array(p.length+this.leftOver.length)).set(this.leftOver,0),u.set(p,this.leftOver.length)}else u=this.leftOver.concat(u);this.leftOver=null}var b=(function(y,x){var w;for((x=x||y.length)>y.length&&(x=y.length),w=x-1;0<=w&&(192&y[w])==128;)w--;return w<0||w===0?x:w+l[y[w]]>x?w:x})(u),g=u;b!==u.length&&(n.uint8array?(g=u.subarray(0,b),this.leftOver=u.subarray(b,u.length)):(g=u.slice(0,b),this.leftOver=u.slice(b,u.length))),this.push({data:r.utf8decode(g),meta:h.meta})},c.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=c,i.inherits(m,o),m.prototype.processChunk=function(h){this.push({data:r.utf8encode(h.data),meta:h.meta})},r.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(s,t,r){var i=s("./support"),n=s("./base64"),a=s("./nodejsUtils"),o=s("./external");function l(p){return p}function d(p,b){for(var g=0;g<p.length;++g)b[g]=255&p.charCodeAt(g);return b}s("setimmediate"),r.newBlob=function(p,b){r.checkSupport("blob");try{return new Blob([p],{type:b})}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return g.append(p),g.getBlob(b)}catch{throw new Error("Bug : can't construct the Blob.")}}};var c={stringifyByChunk:function(p,b,g){var y=[],x=0,w=p.length;if(w<=g)return String.fromCharCode.apply(null,p);for(;x<w;)b==="array"||b==="nodebuffer"?y.push(String.fromCharCode.apply(null,p.slice(x,Math.min(x+g,w)))):y.push(String.fromCharCode.apply(null,p.subarray(x,Math.min(x+g,w)))),x+=g;return y.join("")},stringifyByChar:function(p){for(var b="",g=0;g<p.length;g++)b+=String.fromCharCode(p[g]);return b},applyCanBeUsed:{uint8array:(function(){try{return i.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return i.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}})()}};function m(p){var b=65536,g=r.getTypeOf(p),y=!0;if(g==="uint8array"?y=c.applyCanBeUsed.uint8array:g==="nodebuffer"&&(y=c.applyCanBeUsed.nodebuffer),y)for(;1<b;)try{return c.stringifyByChunk(p,g,b)}catch{b=Math.floor(b/2)}return c.stringifyByChar(p)}function h(p,b){for(var g=0;g<p.length;g++)b[g]=p[g];return b}r.applyFromCharCode=m;var u={};u.string={string:l,array:function(p){return d(p,new Array(p.length))},arraybuffer:function(p){return u.string.uint8array(p).buffer},uint8array:function(p){return d(p,new Uint8Array(p.length))},nodebuffer:function(p){return d(p,a.allocBuffer(p.length))}},u.array={string:m,array:l,arraybuffer:function(p){return new Uint8Array(p).buffer},uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return a.newBufferFrom(p)}},u.arraybuffer={string:function(p){return m(new Uint8Array(p))},array:function(p){return h(new Uint8Array(p),new Array(p.byteLength))},arraybuffer:l,uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return a.newBufferFrom(new Uint8Array(p))}},u.uint8array={string:m,array:function(p){return h(p,new Array(p.length))},arraybuffer:function(p){return p.buffer},uint8array:l,nodebuffer:function(p){return a.newBufferFrom(p)}},u.nodebuffer={string:m,array:function(p){return h(p,new Array(p.length))},arraybuffer:function(p){return u.nodebuffer.uint8array(p).buffer},uint8array:function(p){return h(p,new Uint8Array(p.length))},nodebuffer:l},r.transformTo=function(p,b){if(b=b||"",!p)return b;r.checkSupport(p);var g=r.getTypeOf(b);return u[g][p](b)},r.resolve=function(p){for(var b=p.split("/"),g=[],y=0;y<b.length;y++){var x=b[y];x==="."||x===""&&y!==0&&y!==b.length-1||(x===".."?g.pop():g.push(x))}return g.join("/")},r.getTypeOf=function(p){return typeof p=="string"?"string":Object.prototype.toString.call(p)==="[object Array]"?"array":i.nodebuffer&&a.isBuffer(p)?"nodebuffer":i.uint8array&&p instanceof Uint8Array?"uint8array":i.arraybuffer&&p instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(p){if(!i[p.toLowerCase()])throw new Error(p+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(p){var b,g,y="";for(g=0;g<(p||"").length;g++)y+="\\x"+((b=p.charCodeAt(g))<16?"0":"")+b.toString(16).toUpperCase();return y},r.delay=function(p,b,g){setImmediate(function(){p.apply(g||null,b||[])})},r.inherits=function(p,b){function g(){}g.prototype=b.prototype,p.prototype=new g},r.extend=function(){var p,b,g={};for(p=0;p<arguments.length;p++)for(b in arguments[p])Object.prototype.hasOwnProperty.call(arguments[p],b)&&g[b]===void 0&&(g[b]=arguments[p][b]);return g},r.prepareContent=function(p,b,g,y,x){return o.Promise.resolve(b).then(function(w){return i.blob&&(w instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(w))!==-1)&&typeof FileReader<"u"?new o.Promise(function(f,v){var E=new FileReader;E.onload=function(S){f(S.target.result)},E.onerror=function(S){v(S.target.error)},E.readAsArrayBuffer(w)}):w}).then(function(w){var f=r.getTypeOf(w);return f?(f==="arraybuffer"?w=r.transformTo("uint8array",w):f==="string"&&(x?w=n.decode(w):g&&y!==!0&&(w=(function(v){return d(v,i.uint8array?new Uint8Array(v.length):new Array(v.length))})(w))),w):o.Promise.reject(new Error("Can't read the data of '"+p+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(s,t,r){var i=s("./reader/readerFor"),n=s("./utils"),a=s("./signature"),o=s("./zipEntry"),l=s("./support");function d(c){this.files=[],this.loadOptions=c}d.prototype={checkSignature:function(c){if(!this.reader.readAndCheckSignature(c)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+n.pretty(m)+", expected "+n.pretty(c)+")")}},isSignature:function(c,m){var h=this.reader.index;this.reader.setIndex(c);var u=this.reader.readString(4)===m;return this.reader.setIndex(h),u},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var c=this.reader.readData(this.zipCommentLength),m=l.uint8array?"uint8array":"array",h=n.transformTo(m,c);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var c,m,h,u=this.zip64EndOfCentralSize-44;0<u;)c=this.reader.readInt(2),m=this.reader.readInt(4),h=this.reader.readData(m),this.zip64ExtensibleData[c]={id:c,length:m,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var c,m;for(c=0;c<this.files.length;c++)m=this.files[c],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var c;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(c=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(c);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var c=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(c<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(c);var m=c;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===n.MAX_VALUE_16BITS||this.diskWithCentralDirStart===n.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===n.MAX_VALUE_16BITS||this.centralDirRecords===n.MAX_VALUE_16BITS||this.centralDirSize===n.MAX_VALUE_32BITS||this.centralDirOffset===n.MAX_VALUE_32BITS){if(this.zip64=!0,(c=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(c),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var u=m-h;if(0<u)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=u);else if(u<0)throw new Error("Corrupted zip: missing "+Math.abs(u)+" bytes.")},prepareReader:function(c){this.reader=i(c)},load:function(c){this.prepareReader(c),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(s,t,r){var i=s("./reader/readerFor"),n=s("./utils"),a=s("./compressedObject"),o=s("./crc32"),l=s("./utf8"),d=s("./compressions"),c=s("./support");function m(h,u){this.options=h,this.loadOptions=u}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var u,p;if(h.skip(22),this.fileNameLength=h.readInt(2),p=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(p),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((u=(function(b){for(var g in d)if(Object.prototype.hasOwnProperty.call(d,g)&&d[g].magic===b)return d[g];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+n.pretty(this.compressionMethod)+" unknown (inner file : "+n.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,u,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var u=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(u),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=i(this.extraFields[1].value);this.uncompressedSize===n.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===n.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===n.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===n.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var u,p,b,g=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<g;)u=h.readInt(2),p=h.readInt(2),b=h.readData(p),this.extraFields[u]={id:u,length:p,value:b};h.setIndex(g)},handleUTF8:function(){var h=c.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var u=this.findExtraFieldUnicodePath();if(u!==null)this.fileNameStr=u;else{var p=n.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(p)}var b=this.findExtraFieldUnicodeComment();if(b!==null)this.fileCommentStr=b;else{var g=n.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(g)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var u=i(h.value);return u.readInt(1)!==1||o(this.fileName)!==u.readInt(4)?null:l.utf8decode(u.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var u=i(h.value);return u.readInt(1)!==1||o(this.fileComment)!==u.readInt(4)?null:l.utf8decode(u.readData(h.length-5))}return null}},t.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(s,t,r){function i(u,p,b){this.name=u,this.dir=b.dir,this.date=b.date,this.comment=b.comment,this.unixPermissions=b.unixPermissions,this.dosPermissions=b.dosPermissions,this._data=p,this._dataBinary=b.binary,this.options={compression:b.compression,compressionOptions:b.compressionOptions}}var n=s("./stream/StreamHelper"),a=s("./stream/DataWorker"),o=s("./utf8"),l=s("./compressedObject"),d=s("./stream/GenericWorker");i.prototype={internalStream:function(u){var p=null,b="string";try{if(!u)throw new Error("No output type specified.");var g=(b=u.toLowerCase())==="string"||b==="text";b!=="binarystring"&&b!=="text"||(b="string"),p=this._decompressWorker();var y=!this._dataBinary;y&&!g&&(p=p.pipe(new o.Utf8EncodeWorker)),!y&&g&&(p=p.pipe(new o.Utf8DecodeWorker))}catch(x){(p=new d("error")).error(x)}return new n(p,b,"")},async:function(u,p){return this.internalStream(u).accumulate(p)},nodeStream:function(u,p){return this.internalStream(u||"nodebuffer").toNodejsStream(p)},_compressWorker:function(u,p){if(this._data instanceof l&&this._data.compression.magic===u.magic)return this._data.getCompressedWorker();var b=this._decompressWorker();return this._dataBinary||(b=b.pipe(new o.Utf8EncodeWorker)),l.createWorkerFrom(b,u,p)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof d?this._data:new a(this._data)}};for(var c=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<c.length;h++)i.prototype[c[h]]=m;t.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(s,t,r){(function(i){var n,a,o=i.MutationObserver||i.WebKitMutationObserver;if(o){var l=0,d=new o(u),c=i.document.createTextNode("");d.observe(c,{characterData:!0}),n=function(){c.data=l=++l%2}}else if(i.setImmediate||i.MessageChannel===void 0)n="document"in i&&"onreadystatechange"in i.document.createElement("script")?function(){var p=i.document.createElement("script");p.onreadystatechange=function(){u(),p.onreadystatechange=null,p.parentNode.removeChild(p),p=null},i.document.documentElement.appendChild(p)}:function(){setTimeout(u,0)};else{var m=new i.MessageChannel;m.port1.onmessage=u,n=function(){m.port2.postMessage(0)}}var h=[];function u(){var p,b;a=!0;for(var g=h.length;g;){for(b=h,h=[],p=-1;++p<g;)b[p]();g=h.length}a=!1}t.exports=function(p){h.push(p)!==1||a||n()}}).call(this,typeof tt<"u"?tt:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(s,t,r){var i=s("immediate");function n(){}var a={},o=["REJECTED"],l=["FULFILLED"],d=["PENDING"];function c(g){if(typeof g!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,g!==n&&p(this,g)}function m(g,y,x){this.promise=g,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function h(g,y,x){i(function(){var w;try{w=y(x)}catch(f){return a.reject(g,f)}w===g?a.reject(g,new TypeError("Cannot resolve promise with itself")):a.resolve(g,w)})}function u(g){var y=g&&g.then;if(g&&(typeof g=="object"||typeof g=="function")&&typeof y=="function")return function(){y.apply(g,arguments)}}function p(g,y){var x=!1;function w(E){x||(x=!0,a.reject(g,E))}function f(E){x||(x=!0,a.resolve(g,E))}var v=b(function(){y(f,w)});v.status==="error"&&w(v.value)}function b(g,y){var x={};try{x.value=g(y),x.status="success"}catch(w){x.status="error",x.value=w}return x}(t.exports=c).prototype.finally=function(g){if(typeof g!="function")return this;var y=this.constructor;return this.then(function(x){return y.resolve(g()).then(function(){return x})},function(x){return y.resolve(g()).then(function(){throw x})})},c.prototype.catch=function(g){return this.then(null,g)},c.prototype.then=function(g,y){if(typeof g!="function"&&this.state===l||typeof y!="function"&&this.state===o)return this;var x=new this.constructor(n);return this.state!==d?h(x,this.state===l?g:y,this.outcome):this.queue.push(new m(x,g,y)),x},m.prototype.callFulfilled=function(g){a.resolve(this.promise,g)},m.prototype.otherCallFulfilled=function(g){h(this.promise,this.onFulfilled,g)},m.prototype.callRejected=function(g){a.reject(this.promise,g)},m.prototype.otherCallRejected=function(g){h(this.promise,this.onRejected,g)},a.resolve=function(g,y){var x=b(u,y);if(x.status==="error")return a.reject(g,x.value);var w=x.value;if(w)p(g,w);else{g.state=l,g.outcome=y;for(var f=-1,v=g.queue.length;++f<v;)g.queue[f].callFulfilled(y)}return g},a.reject=function(g,y){g.state=o,g.outcome=y;for(var x=-1,w=g.queue.length;++x<w;)g.queue[x].callRejected(y);return g},c.resolve=function(g){return g instanceof this?g:a.resolve(new this(n),g)},c.reject=function(g){var y=new this(n);return a.reject(y,g)},c.all=function(g){var y=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=g.length,w=!1;if(!x)return this.resolve([]);for(var f=new Array(x),v=0,E=-1,S=new this(n);++E<x;)T(g[E],E);return S;function T(A,R){y.resolve(A).then(function(_){f[R]=_,++v!==x||w||(w=!0,a.resolve(S,f))},function(_){w||(w=!0,a.reject(S,_))})}},c.race=function(g){var y=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=g.length,w=!1;if(!x)return this.resolve([]);for(var f=-1,v=new this(n);++f<x;)E=g[f],y.resolve(E).then(function(S){w||(w=!0,a.resolve(v,S))},function(S){w||(w=!0,a.reject(v,S))});var E;return v}},{immediate:36}],38:[function(s,t,r){var i={};(0,s("./lib/utils/common").assign)(i,s("./lib/deflate"),s("./lib/inflate"),s("./lib/zlib/constants")),t.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(s,t,r){var i=s("./zlib/deflate"),n=s("./utils/common"),a=s("./utils/strings"),o=s("./zlib/messages"),l=s("./zlib/zstream"),d=Object.prototype.toString,c=0,m=-1,h=0,u=8;function p(g){if(!(this instanceof p))return new p(g);this.options=n.assign({level:m,method:u,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},g||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var x=i.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(x!==c)throw new Error(o[x]);if(y.header&&i.deflateSetHeader(this.strm,y.header),y.dictionary){var w;if(w=typeof y.dictionary=="string"?a.string2buf(y.dictionary):d.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(x=i.deflateSetDictionary(this.strm,w))!==c)throw new Error(o[x]);this._dict_set=!0}}function b(g,y){var x=new p(y);if(x.push(g,!0),x.err)throw x.msg||o[x.err];return x.result}p.prototype.push=function(g,y){var x,w,f=this.strm,v=this.options.chunkSize;if(this.ended)return!1;w=y===~~y?y:y===!0?4:0,typeof g=="string"?f.input=a.string2buf(g):d.call(g)==="[object ArrayBuffer]"?f.input=new Uint8Array(g):f.input=g,f.next_in=0,f.avail_in=f.input.length;do{if(f.avail_out===0&&(f.output=new n.Buf8(v),f.next_out=0,f.avail_out=v),(x=i.deflate(f,w))!==1&&x!==c)return this.onEnd(x),!(this.ended=!0);f.avail_out!==0&&(f.avail_in!==0||w!==4&&w!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(n.shrinkBuf(f.output,f.next_out))):this.onData(n.shrinkBuf(f.output,f.next_out)))}while((0<f.avail_in||f.avail_out===0)&&x!==1);return w===4?(x=i.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===c):w!==2||(this.onEnd(c),!(f.avail_out=0))},p.prototype.onData=function(g){this.chunks.push(g)},p.prototype.onEnd=function(g){g===c&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Deflate=p,r.deflate=b,r.deflateRaw=function(g,y){return(y=y||{}).raw=!0,b(g,y)},r.gzip=function(g,y){return(y=y||{}).gzip=!0,b(g,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(s,t,r){var i=s("./zlib/inflate"),n=s("./utils/common"),a=s("./utils/strings"),o=s("./zlib/constants"),l=s("./zlib/messages"),d=s("./zlib/zstream"),c=s("./zlib/gzheader"),m=Object.prototype.toString;function h(p){if(!(this instanceof h))return new h(p);this.options=n.assign({chunkSize:16384,windowBits:0,to:""},p||{});var b=this.options;b.raw&&0<=b.windowBits&&b.windowBits<16&&(b.windowBits=-b.windowBits,b.windowBits===0&&(b.windowBits=-15)),!(0<=b.windowBits&&b.windowBits<16)||p&&p.windowBits||(b.windowBits+=32),15<b.windowBits&&b.windowBits<48&&(15&b.windowBits)==0&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var g=i.inflateInit2(this.strm,b.windowBits);if(g!==o.Z_OK)throw new Error(l[g]);this.header=new c,i.inflateGetHeader(this.strm,this.header)}function u(p,b){var g=new h(b);if(g.push(p,!0),g.err)throw g.msg||l[g.err];return g.result}h.prototype.push=function(p,b){var g,y,x,w,f,v,E=this.strm,S=this.options.chunkSize,T=this.options.dictionary,A=!1;if(this.ended)return!1;y=b===~~b?b:b===!0?o.Z_FINISH:o.Z_NO_FLUSH,typeof p=="string"?E.input=a.binstring2buf(p):m.call(p)==="[object ArrayBuffer]"?E.input=new Uint8Array(p):E.input=p,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new n.Buf8(S),E.next_out=0,E.avail_out=S),(g=i.inflate(E,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&T&&(v=typeof T=="string"?a.string2buf(T):m.call(T)==="[object ArrayBuffer]"?new Uint8Array(T):T,g=i.inflateSetDictionary(this.strm,v)),g===o.Z_BUF_ERROR&&A===!0&&(g=o.Z_OK,A=!1),g!==o.Z_STREAM_END&&g!==o.Z_OK)return this.onEnd(g),!(this.ended=!0);E.next_out&&(E.avail_out!==0&&g!==o.Z_STREAM_END&&(E.avail_in!==0||y!==o.Z_FINISH&&y!==o.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=a.utf8border(E.output,E.next_out),w=E.next_out-x,f=a.buf2string(E.output,x),E.next_out=w,E.avail_out=S-w,w&&n.arraySet(E.output,E.output,x,w,0),this.onData(f)):this.onData(n.shrinkBuf(E.output,E.next_out)))),E.avail_in===0&&E.avail_out===0&&(A=!0)}while((0<E.avail_in||E.avail_out===0)&&g!==o.Z_STREAM_END);return g===o.Z_STREAM_END&&(y=o.Z_FINISH),y===o.Z_FINISH?(g=i.inflateEnd(this.strm),this.onEnd(g),this.ended=!0,g===o.Z_OK):y!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),!(E.avail_out=0))},h.prototype.onData=function(p){this.chunks.push(p)},h.prototype.onEnd=function(p){p===o.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},r.Inflate=h,r.inflate=u,r.inflateRaw=function(p,b){return(b=b||{}).raw=!0,u(p,b)},r.ungzip=u},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(s,t,r){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(o){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var d=l.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var c in d)d.hasOwnProperty(c)&&(o[c]=d[c])}}return o},r.shrinkBuf=function(o,l){return o.length===l?o:o.subarray?o.subarray(0,l):(o.length=l,o)};var n={arraySet:function(o,l,d,c,m){if(l.subarray&&o.subarray)o.set(l.subarray(d,d+c),m);else for(var h=0;h<c;h++)o[m+h]=l[d+h]},flattenChunks:function(o){var l,d,c,m,h,u;for(l=c=0,d=o.length;l<d;l++)c+=o[l].length;for(u=new Uint8Array(c),l=m=0,d=o.length;l<d;l++)h=o[l],u.set(h,m),m+=h.length;return u}},a={arraySet:function(o,l,d,c,m){for(var h=0;h<c;h++)o[m+h]=l[d+h]},flattenChunks:function(o){return[].concat.apply([],o)}};r.setTyped=function(o){o?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,n)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(i)},{}],42:[function(s,t,r){var i=s("./common"),n=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{n=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var o=new i.Buf8(256),l=0;l<256;l++)o[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function d(c,m){if(m<65537&&(c.subarray&&a||!c.subarray&&n))return String.fromCharCode.apply(null,i.shrinkBuf(c,m));for(var h="",u=0;u<m;u++)h+=String.fromCharCode(c[u]);return h}o[254]=o[254]=1,r.string2buf=function(c){var m,h,u,p,b,g=c.length,y=0;for(p=0;p<g;p++)(64512&(h=c.charCodeAt(p)))==55296&&p+1<g&&(64512&(u=c.charCodeAt(p+1)))==56320&&(h=65536+(h-55296<<10)+(u-56320),p++),y+=h<128?1:h<2048?2:h<65536?3:4;for(m=new i.Buf8(y),p=b=0;b<y;p++)(64512&(h=c.charCodeAt(p)))==55296&&p+1<g&&(64512&(u=c.charCodeAt(p+1)))==56320&&(h=65536+(h-55296<<10)+(u-56320),p++),h<128?m[b++]=h:(h<2048?m[b++]=192|h>>>6:(h<65536?m[b++]=224|h>>>12:(m[b++]=240|h>>>18,m[b++]=128|h>>>12&63),m[b++]=128|h>>>6&63),m[b++]=128|63&h);return m},r.buf2binstring=function(c){return d(c,c.length)},r.binstring2buf=function(c){for(var m=new i.Buf8(c.length),h=0,u=m.length;h<u;h++)m[h]=c.charCodeAt(h);return m},r.buf2string=function(c,m){var h,u,p,b,g=m||c.length,y=new Array(2*g);for(h=u=0;h<g;)if((p=c[h++])<128)y[u++]=p;else if(4<(b=o[p]))y[u++]=65533,h+=b-1;else{for(p&=b===2?31:b===3?15:7;1<b&&h<g;)p=p<<6|63&c[h++],b--;1<b?y[u++]=65533:p<65536?y[u++]=p:(p-=65536,y[u++]=55296|p>>10&1023,y[u++]=56320|1023&p)}return d(y,u)},r.utf8border=function(c,m){var h;for((m=m||c.length)>c.length&&(m=c.length),h=m-1;0<=h&&(192&c[h])==128;)h--;return h<0||h===0?m:h+o[c[h]]>m?h:m}},{"./common":41}],43:[function(s,t,r){t.exports=function(i,n,a,o){for(var l=65535&i|0,d=i>>>16&65535|0,c=0;a!==0;){for(a-=c=2e3<a?2e3:a;d=d+(l=l+n[o++]|0)|0,--c;);l%=65521,d%=65521}return l|d<<16|0}},{}],44:[function(s,t,r){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(s,t,r){var i=(function(){for(var n,a=[],o=0;o<256;o++){n=o;for(var l=0;l<8;l++)n=1&n?3988292384^n>>>1:n>>>1;a[o]=n}return a})();t.exports=function(n,a,o,l){var d=i,c=l+o;n^=-1;for(var m=l;m<c;m++)n=n>>>8^d[255&(n^a[m])];return-1^n}},{}],46:[function(s,t,r){var i,n=s("../utils/common"),a=s("./trees"),o=s("./adler32"),l=s("./crc32"),d=s("./messages"),c=0,m=4,h=0,u=-2,p=-1,b=4,g=2,y=8,x=9,w=286,f=30,v=19,E=2*w+1,S=15,T=3,A=258,R=A+T+1,_=42,B=113,$=1,N=2,J=3,U=4;function ne(k,j){return k.msg=d[j],j}function Z(k){return(k<<1)-(4<k?9:0)}function se(k){for(var j=k.length;0<=--j;)k[j]=0}function Y(k){var j=k.state,H=j.pending;H>k.avail_out&&(H=k.avail_out),H!==0&&(n.arraySet(k.output,j.pending_buf,j.pending_out,H,k.next_out),k.next_out+=H,j.pending_out+=H,k.total_out+=H,k.avail_out-=H,j.pending-=H,j.pending===0&&(j.pending_out=0))}function C(k,j){a._tr_flush_block(k,0<=k.block_start?k.block_start:-1,k.strstart-k.block_start,j),k.block_start=k.strstart,Y(k.strm)}function P(k,j){k.pending_buf[k.pending++]=j}function L(k,j){k.pending_buf[k.pending++]=j>>>8&255,k.pending_buf[k.pending++]=255&j}function V(k,j){var H,D,M=k.max_chain_length,O=k.strstart,q=k.prev_length,K=k.nice_match,G=k.strstart>k.w_size-R?k.strstart-(k.w_size-R):0,ae=k.window,re=k.w_mask,te=k.prev,X=k.strstart+A,ce=ae[O+q-1],he=ae[O+q];k.prev_length>=k.good_match&&(M>>=2),K>k.lookahead&&(K=k.lookahead);do if(ae[(H=j)+q]===he&&ae[H+q-1]===ce&&ae[H]===ae[O]&&ae[++H]===ae[O+1]){O+=2,H++;do;while(ae[++O]===ae[++H]&&ae[++O]===ae[++H]&&ae[++O]===ae[++H]&&ae[++O]===ae[++H]&&ae[++O]===ae[++H]&&ae[++O]===ae[++H]&&ae[++O]===ae[++H]&&ae[++O]===ae[++H]&&O<X);if(D=A-(X-O),O=X-A,q<D){if(k.match_start=j,K<=(q=D))break;ce=ae[O+q-1],he=ae[O+q]}}while((j=te[j&re])>G&&--M!=0);return q<=k.lookahead?q:k.lookahead}function Q(k){var j,H,D,M,O,q,K,G,ae,re,te=k.w_size;do{if(M=k.window_size-k.lookahead-k.strstart,k.strstart>=te+(te-R)){for(n.arraySet(k.window,k.window,te,te,0),k.match_start-=te,k.strstart-=te,k.block_start-=te,j=H=k.hash_size;D=k.head[--j],k.head[j]=te<=D?D-te:0,--H;);for(j=H=te;D=k.prev[--j],k.prev[j]=te<=D?D-te:0,--H;);M+=te}if(k.strm.avail_in===0)break;if(q=k.strm,K=k.window,G=k.strstart+k.lookahead,ae=M,re=void 0,re=q.avail_in,ae<re&&(re=ae),H=re===0?0:(q.avail_in-=re,n.arraySet(K,q.input,q.next_in,re,G),q.state.wrap===1?q.adler=o(q.adler,K,re,G):q.state.wrap===2&&(q.adler=l(q.adler,K,re,G)),q.next_in+=re,q.total_in+=re,re),k.lookahead+=H,k.lookahead+k.insert>=T)for(O=k.strstart-k.insert,k.ins_h=k.window[O],k.ins_h=(k.ins_h<<k.hash_shift^k.window[O+1])&k.hash_mask;k.insert&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[O+T-1])&k.hash_mask,k.prev[O&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=O,O++,k.insert--,!(k.lookahead+k.insert<T)););}while(k.lookahead<R&&k.strm.avail_in!==0)}function oe(k,j){for(var H,D;;){if(k.lookahead<R){if(Q(k),k.lookahead<R&&j===c)return $;if(k.lookahead===0)break}if(H=0,k.lookahead>=T&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+T-1])&k.hash_mask,H=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart),H!==0&&k.strstart-H<=k.w_size-R&&(k.match_length=V(k,H)),k.match_length>=T)if(D=a._tr_tally(k,k.strstart-k.match_start,k.match_length-T),k.lookahead-=k.match_length,k.match_length<=k.max_lazy_match&&k.lookahead>=T){for(k.match_length--;k.strstart++,k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+T-1])&k.hash_mask,H=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart,--k.match_length!=0;);k.strstart++}else k.strstart+=k.match_length,k.match_length=0,k.ins_h=k.window[k.strstart],k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+1])&k.hash_mask;else D=a._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++;if(D&&(C(k,!1),k.strm.avail_out===0))return $}return k.insert=k.strstart<T-1?k.strstart:T-1,j===m?(C(k,!0),k.strm.avail_out===0?J:U):k.last_lit&&(C(k,!1),k.strm.avail_out===0)?$:N}function ie(k,j){for(var H,D,M;;){if(k.lookahead<R){if(Q(k),k.lookahead<R&&j===c)return $;if(k.lookahead===0)break}if(H=0,k.lookahead>=T&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+T-1])&k.hash_mask,H=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart),k.prev_length=k.match_length,k.prev_match=k.match_start,k.match_length=T-1,H!==0&&k.prev_length<k.max_lazy_match&&k.strstart-H<=k.w_size-R&&(k.match_length=V(k,H),k.match_length<=5&&(k.strategy===1||k.match_length===T&&4096<k.strstart-k.match_start)&&(k.match_length=T-1)),k.prev_length>=T&&k.match_length<=k.prev_length){for(M=k.strstart+k.lookahead-T,D=a._tr_tally(k,k.strstart-1-k.prev_match,k.prev_length-T),k.lookahead-=k.prev_length-1,k.prev_length-=2;++k.strstart<=M&&(k.ins_h=(k.ins_h<<k.hash_shift^k.window[k.strstart+T-1])&k.hash_mask,H=k.prev[k.strstart&k.w_mask]=k.head[k.ins_h],k.head[k.ins_h]=k.strstart),--k.prev_length!=0;);if(k.match_available=0,k.match_length=T-1,k.strstart++,D&&(C(k,!1),k.strm.avail_out===0))return $}else if(k.match_available){if((D=a._tr_tally(k,0,k.window[k.strstart-1]))&&C(k,!1),k.strstart++,k.lookahead--,k.strm.avail_out===0)return $}else k.match_available=1,k.strstart++,k.lookahead--}return k.match_available&&(D=a._tr_tally(k,0,k.window[k.strstart-1]),k.match_available=0),k.insert=k.strstart<T-1?k.strstart:T-1,j===m?(C(k,!0),k.strm.avail_out===0?J:U):k.last_lit&&(C(k,!1),k.strm.avail_out===0)?$:N}function F(k,j,H,D,M){this.good_length=k,this.max_lazy=j,this.nice_length=H,this.max_chain=D,this.func=M}function ee(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new n.Buf16(2*E),this.dyn_dtree=new n.Buf16(2*(2*f+1)),this.bl_tree=new n.Buf16(2*(2*v+1)),se(this.dyn_ltree),se(this.dyn_dtree),se(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new n.Buf16(S+1),this.heap=new n.Buf16(2*w+1),se(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new n.Buf16(2*w+1),se(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function de(k){var j;return k&&k.state?(k.total_in=k.total_out=0,k.data_type=g,(j=k.state).pending=0,j.pending_out=0,j.wrap<0&&(j.wrap=-j.wrap),j.status=j.wrap?_:B,k.adler=j.wrap===2?0:1,j.last_flush=c,a._tr_init(j),h):ne(k,u)}function z(k){var j=de(k);return j===h&&(function(H){H.window_size=2*H.w_size,se(H.head),H.max_lazy_match=i[H.level].max_lazy,H.good_match=i[H.level].good_length,H.nice_match=i[H.level].nice_length,H.max_chain_length=i[H.level].max_chain,H.strstart=0,H.block_start=0,H.lookahead=0,H.insert=0,H.match_length=H.prev_length=T-1,H.match_available=0,H.ins_h=0})(k.state),j}function W(k,j,H,D,M,O){if(!k)return u;var q=1;if(j===p&&(j=6),D<0?(q=0,D=-D):15<D&&(q=2,D-=16),M<1||x<M||H!==y||D<8||15<D||j<0||9<j||O<0||b<O)return ne(k,u);D===8&&(D=9);var K=new ee;return(k.state=K).strm=k,K.wrap=q,K.gzhead=null,K.w_bits=D,K.w_size=1<<K.w_bits,K.w_mask=K.w_size-1,K.hash_bits=M+7,K.hash_size=1<<K.hash_bits,K.hash_mask=K.hash_size-1,K.hash_shift=~~((K.hash_bits+T-1)/T),K.window=new n.Buf8(2*K.w_size),K.head=new n.Buf16(K.hash_size),K.prev=new n.Buf16(K.w_size),K.lit_bufsize=1<<M+6,K.pending_buf_size=4*K.lit_bufsize,K.pending_buf=new n.Buf8(K.pending_buf_size),K.d_buf=1*K.lit_bufsize,K.l_buf=3*K.lit_bufsize,K.level=j,K.strategy=O,K.method=H,z(k)}i=[new F(0,0,0,0,function(k,j){var H=65535;for(H>k.pending_buf_size-5&&(H=k.pending_buf_size-5);;){if(k.lookahead<=1){if(Q(k),k.lookahead===0&&j===c)return $;if(k.lookahead===0)break}k.strstart+=k.lookahead,k.lookahead=0;var D=k.block_start+H;if((k.strstart===0||k.strstart>=D)&&(k.lookahead=k.strstart-D,k.strstart=D,C(k,!1),k.strm.avail_out===0)||k.strstart-k.block_start>=k.w_size-R&&(C(k,!1),k.strm.avail_out===0))return $}return k.insert=0,j===m?(C(k,!0),k.strm.avail_out===0?J:U):(k.strstart>k.block_start&&(C(k,!1),k.strm.avail_out),$)}),new F(4,4,8,4,oe),new F(4,5,16,8,oe),new F(4,6,32,32,oe),new F(4,4,16,16,ie),new F(8,16,32,32,ie),new F(8,16,128,128,ie),new F(8,32,128,256,ie),new F(32,128,258,1024,ie),new F(32,258,258,4096,ie)],r.deflateInit=function(k,j){return W(k,j,y,15,8,0)},r.deflateInit2=W,r.deflateReset=z,r.deflateResetKeep=de,r.deflateSetHeader=function(k,j){return k&&k.state?k.state.wrap!==2?u:(k.state.gzhead=j,h):u},r.deflate=function(k,j){var H,D,M,O;if(!k||!k.state||5<j||j<0)return k?ne(k,u):u;if(D=k.state,!k.output||!k.input&&k.avail_in!==0||D.status===666&&j!==m)return ne(k,k.avail_out===0?-5:u);if(D.strm=k,H=D.last_flush,D.last_flush=j,D.status===_)if(D.wrap===2)k.adler=0,P(D,31),P(D,139),P(D,8),D.gzhead?(P(D,(D.gzhead.text?1:0)+(D.gzhead.hcrc?2:0)+(D.gzhead.extra?4:0)+(D.gzhead.name?8:0)+(D.gzhead.comment?16:0)),P(D,255&D.gzhead.time),P(D,D.gzhead.time>>8&255),P(D,D.gzhead.time>>16&255),P(D,D.gzhead.time>>24&255),P(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),P(D,255&D.gzhead.os),D.gzhead.extra&&D.gzhead.extra.length&&(P(D,255&D.gzhead.extra.length),P(D,D.gzhead.extra.length>>8&255)),D.gzhead.hcrc&&(k.adler=l(k.adler,D.pending_buf,D.pending,0)),D.gzindex=0,D.status=69):(P(D,0),P(D,0),P(D,0),P(D,0),P(D,0),P(D,D.level===9?2:2<=D.strategy||D.level<2?4:0),P(D,3),D.status=B);else{var q=y+(D.w_bits-8<<4)<<8;q|=(2<=D.strategy||D.level<2?0:D.level<6?1:D.level===6?2:3)<<6,D.strstart!==0&&(q|=32),q+=31-q%31,D.status=B,L(D,q),D.strstart!==0&&(L(D,k.adler>>>16),L(D,65535&k.adler)),k.adler=1}if(D.status===69)if(D.gzhead.extra){for(M=D.pending;D.gzindex<(65535&D.gzhead.extra.length)&&(D.pending!==D.pending_buf_size||(D.gzhead.hcrc&&D.pending>M&&(k.adler=l(k.adler,D.pending_buf,D.pending-M,M)),Y(k),M=D.pending,D.pending!==D.pending_buf_size));)P(D,255&D.gzhead.extra[D.gzindex]),D.gzindex++;D.gzhead.hcrc&&D.pending>M&&(k.adler=l(k.adler,D.pending_buf,D.pending-M,M)),D.gzindex===D.gzhead.extra.length&&(D.gzindex=0,D.status=73)}else D.status=73;if(D.status===73)if(D.gzhead.name){M=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>M&&(k.adler=l(k.adler,D.pending_buf,D.pending-M,M)),Y(k),M=D.pending,D.pending===D.pending_buf_size)){O=1;break}O=D.gzindex<D.gzhead.name.length?255&D.gzhead.name.charCodeAt(D.gzindex++):0,P(D,O)}while(O!==0);D.gzhead.hcrc&&D.pending>M&&(k.adler=l(k.adler,D.pending_buf,D.pending-M,M)),O===0&&(D.gzindex=0,D.status=91)}else D.status=91;if(D.status===91)if(D.gzhead.comment){M=D.pending;do{if(D.pending===D.pending_buf_size&&(D.gzhead.hcrc&&D.pending>M&&(k.adler=l(k.adler,D.pending_buf,D.pending-M,M)),Y(k),M=D.pending,D.pending===D.pending_buf_size)){O=1;break}O=D.gzindex<D.gzhead.comment.length?255&D.gzhead.comment.charCodeAt(D.gzindex++):0,P(D,O)}while(O!==0);D.gzhead.hcrc&&D.pending>M&&(k.adler=l(k.adler,D.pending_buf,D.pending-M,M)),O===0&&(D.status=103)}else D.status=103;if(D.status===103&&(D.gzhead.hcrc?(D.pending+2>D.pending_buf_size&&Y(k),D.pending+2<=D.pending_buf_size&&(P(D,255&k.adler),P(D,k.adler>>8&255),k.adler=0,D.status=B)):D.status=B),D.pending!==0){if(Y(k),k.avail_out===0)return D.last_flush=-1,h}else if(k.avail_in===0&&Z(j)<=Z(H)&&j!==m)return ne(k,-5);if(D.status===666&&k.avail_in!==0)return ne(k,-5);if(k.avail_in!==0||D.lookahead!==0||j!==c&&D.status!==666){var K=D.strategy===2?(function(G,ae){for(var re;;){if(G.lookahead===0&&(Q(G),G.lookahead===0)){if(ae===c)return $;break}if(G.match_length=0,re=a._tr_tally(G,0,G.window[G.strstart]),G.lookahead--,G.strstart++,re&&(C(G,!1),G.strm.avail_out===0))return $}return G.insert=0,ae===m?(C(G,!0),G.strm.avail_out===0?J:U):G.last_lit&&(C(G,!1),G.strm.avail_out===0)?$:N})(D,j):D.strategy===3?(function(G,ae){for(var re,te,X,ce,he=G.window;;){if(G.lookahead<=A){if(Q(G),G.lookahead<=A&&ae===c)return $;if(G.lookahead===0)break}if(G.match_length=0,G.lookahead>=T&&0<G.strstart&&(te=he[X=G.strstart-1])===he[++X]&&te===he[++X]&&te===he[++X]){ce=G.strstart+A;do;while(te===he[++X]&&te===he[++X]&&te===he[++X]&&te===he[++X]&&te===he[++X]&&te===he[++X]&&te===he[++X]&&te===he[++X]&&X<ce);G.match_length=A-(ce-X),G.match_length>G.lookahead&&(G.match_length=G.lookahead)}if(G.match_length>=T?(re=a._tr_tally(G,1,G.match_length-T),G.lookahead-=G.match_length,G.strstart+=G.match_length,G.match_length=0):(re=a._tr_tally(G,0,G.window[G.strstart]),G.lookahead--,G.strstart++),re&&(C(G,!1),G.strm.avail_out===0))return $}return G.insert=0,ae===m?(C(G,!0),G.strm.avail_out===0?J:U):G.last_lit&&(C(G,!1),G.strm.avail_out===0)?$:N})(D,j):i[D.level].func(D,j);if(K!==J&&K!==U||(D.status=666),K===$||K===J)return k.avail_out===0&&(D.last_flush=-1),h;if(K===N&&(j===1?a._tr_align(D):j!==5&&(a._tr_stored_block(D,0,0,!1),j===3&&(se(D.head),D.lookahead===0&&(D.strstart=0,D.block_start=0,D.insert=0))),Y(k),k.avail_out===0))return D.last_flush=-1,h}return j!==m?h:D.wrap<=0?1:(D.wrap===2?(P(D,255&k.adler),P(D,k.adler>>8&255),P(D,k.adler>>16&255),P(D,k.adler>>24&255),P(D,255&k.total_in),P(D,k.total_in>>8&255),P(D,k.total_in>>16&255),P(D,k.total_in>>24&255)):(L(D,k.adler>>>16),L(D,65535&k.adler)),Y(k),0<D.wrap&&(D.wrap=-D.wrap),D.pending!==0?h:1)},r.deflateEnd=function(k){var j;return k&&k.state?(j=k.state.status)!==_&&j!==69&&j!==73&&j!==91&&j!==103&&j!==B&&j!==666?ne(k,u):(k.state=null,j===B?ne(k,-3):h):u},r.deflateSetDictionary=function(k,j){var H,D,M,O,q,K,G,ae,re=j.length;if(!k||!k.state||(O=(H=k.state).wrap)===2||O===1&&H.status!==_||H.lookahead)return u;for(O===1&&(k.adler=o(k.adler,j,re,0)),H.wrap=0,re>=H.w_size&&(O===0&&(se(H.head),H.strstart=0,H.block_start=0,H.insert=0),ae=new n.Buf8(H.w_size),n.arraySet(ae,j,re-H.w_size,H.w_size,0),j=ae,re=H.w_size),q=k.avail_in,K=k.next_in,G=k.input,k.avail_in=re,k.next_in=0,k.input=j,Q(H);H.lookahead>=T;){for(D=H.strstart,M=H.lookahead-(T-1);H.ins_h=(H.ins_h<<H.hash_shift^H.window[D+T-1])&H.hash_mask,H.prev[D&H.w_mask]=H.head[H.ins_h],H.head[H.ins_h]=D,D++,--M;);H.strstart=D,H.lookahead=T-1,Q(H)}return H.strstart+=H.lookahead,H.block_start=H.strstart,H.insert=H.lookahead,H.lookahead=0,H.match_length=H.prev_length=T-1,H.match_available=0,k.next_in=K,k.input=G,k.avail_in=q,H.wrap=O,h},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(s,t,r){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(s,t,r){t.exports=function(i,n){var a,o,l,d,c,m,h,u,p,b,g,y,x,w,f,v,E,S,T,A,R,_,B,$,N;a=i.state,o=i.next_in,$=i.input,l=o+(i.avail_in-5),d=i.next_out,N=i.output,c=d-(n-i.avail_out),m=d+(i.avail_out-257),h=a.dmax,u=a.wsize,p=a.whave,b=a.wnext,g=a.window,y=a.hold,x=a.bits,w=a.lencode,f=a.distcode,v=(1<<a.lenbits)-1,E=(1<<a.distbits)-1;e:do{x<15&&(y+=$[o++]<<x,x+=8,y+=$[o++]<<x,x+=8),S=w[y&v];t:for(;;){if(y>>>=T=S>>>24,x-=T,(T=S>>>16&255)===0)N[d++]=65535&S;else{if(!(16&T)){if((64&T)==0){S=w[(65535&S)+(y&(1<<T)-1)];continue t}if(32&T){a.mode=12;break e}i.msg="invalid literal/length code",a.mode=30;break e}A=65535&S,(T&=15)&&(x<T&&(y+=$[o++]<<x,x+=8),A+=y&(1<<T)-1,y>>>=T,x-=T),x<15&&(y+=$[o++]<<x,x+=8,y+=$[o++]<<x,x+=8),S=f[y&E];a:for(;;){if(y>>>=T=S>>>24,x-=T,!(16&(T=S>>>16&255))){if((64&T)==0){S=f[(65535&S)+(y&(1<<T)-1)];continue a}i.msg="invalid distance code",a.mode=30;break e}if(R=65535&S,x<(T&=15)&&(y+=$[o++]<<x,(x+=8)<T&&(y+=$[o++]<<x,x+=8)),h<(R+=y&(1<<T)-1)){i.msg="invalid distance too far back",a.mode=30;break e}if(y>>>=T,x-=T,(T=d-c)<R){if(p<(T=R-T)&&a.sane){i.msg="invalid distance too far back",a.mode=30;break e}if(B=g,(_=0)===b){if(_+=u-T,T<A){for(A-=T;N[d++]=g[_++],--T;);_=d-R,B=N}}else if(b<T){if(_+=u+b-T,(T-=b)<A){for(A-=T;N[d++]=g[_++],--T;);if(_=0,b<A){for(A-=T=b;N[d++]=g[_++],--T;);_=d-R,B=N}}}else if(_+=b-T,T<A){for(A-=T;N[d++]=g[_++],--T;);_=d-R,B=N}for(;2<A;)N[d++]=B[_++],N[d++]=B[_++],N[d++]=B[_++],A-=3;A&&(N[d++]=B[_++],1<A&&(N[d++]=B[_++]))}else{for(_=d-R;N[d++]=N[_++],N[d++]=N[_++],N[d++]=N[_++],2<(A-=3););A&&(N[d++]=N[_++],1<A&&(N[d++]=N[_++]))}break}}break}}while(o<l&&d<m);o-=A=x>>3,y&=(1<<(x-=A<<3))-1,i.next_in=o,i.next_out=d,i.avail_in=o<l?l-o+5:5-(o-l),i.avail_out=d<m?m-d+257:257-(d-m),a.hold=y,a.bits=x}},{}],49:[function(s,t,r){var i=s("../utils/common"),n=s("./adler32"),a=s("./crc32"),o=s("./inffast"),l=s("./inftrees"),d=1,c=2,m=0,h=-2,u=1,p=852,b=592;function g(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new i.Buf16(320),this.work=new i.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(_){var B;return _&&_.state?(B=_.state,_.total_in=_.total_out=B.total=0,_.msg="",B.wrap&&(_.adler=1&B.wrap),B.mode=u,B.last=0,B.havedict=0,B.dmax=32768,B.head=null,B.hold=0,B.bits=0,B.lencode=B.lendyn=new i.Buf32(p),B.distcode=B.distdyn=new i.Buf32(b),B.sane=1,B.back=-1,m):h}function w(_){var B;return _&&_.state?((B=_.state).wsize=0,B.whave=0,B.wnext=0,x(_)):h}function f(_,B){var $,N;return _&&_.state?(N=_.state,B<0?($=0,B=-B):($=1+(B>>4),B<48&&(B&=15)),B&&(B<8||15<B)?h:(N.window!==null&&N.wbits!==B&&(N.window=null),N.wrap=$,N.wbits=B,w(_))):h}function v(_,B){var $,N;return _?(N=new y,(_.state=N).window=null,($=f(_,B))!==m&&(_.state=null),$):h}var E,S,T=!0;function A(_){if(T){var B;for(E=new i.Buf32(512),S=new i.Buf32(32),B=0;B<144;)_.lens[B++]=8;for(;B<256;)_.lens[B++]=9;for(;B<280;)_.lens[B++]=7;for(;B<288;)_.lens[B++]=8;for(l(d,_.lens,0,288,E,0,_.work,{bits:9}),B=0;B<32;)_.lens[B++]=5;l(c,_.lens,0,32,S,0,_.work,{bits:5}),T=!1}_.lencode=E,_.lenbits=9,_.distcode=S,_.distbits=5}function R(_,B,$,N){var J,U=_.state;return U.window===null&&(U.wsize=1<<U.wbits,U.wnext=0,U.whave=0,U.window=new i.Buf8(U.wsize)),N>=U.wsize?(i.arraySet(U.window,B,$-U.wsize,U.wsize,0),U.wnext=0,U.whave=U.wsize):(N<(J=U.wsize-U.wnext)&&(J=N),i.arraySet(U.window,B,$-N,J,U.wnext),(N-=J)?(i.arraySet(U.window,B,$-N,N,0),U.wnext=N,U.whave=U.wsize):(U.wnext+=J,U.wnext===U.wsize&&(U.wnext=0),U.whave<U.wsize&&(U.whave+=J))),0}r.inflateReset=w,r.inflateReset2=f,r.inflateResetKeep=x,r.inflateInit=function(_){return v(_,15)},r.inflateInit2=v,r.inflate=function(_,B){var $,N,J,U,ne,Z,se,Y,C,P,L,V,Q,oe,ie,F,ee,de,z,W,k,j,H,D,M=0,O=new i.Buf8(4),q=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return h;($=_.state).mode===12&&($.mode=13),ne=_.next_out,J=_.output,se=_.avail_out,U=_.next_in,N=_.input,Z=_.avail_in,Y=$.hold,C=$.bits,P=Z,L=se,j=m;e:for(;;)switch($.mode){case u:if($.wrap===0){$.mode=13;break}for(;C<16;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}if(2&$.wrap&&Y===35615){O[$.check=0]=255&Y,O[1]=Y>>>8&255,$.check=a($.check,O,2,0),C=Y=0,$.mode=2;break}if($.flags=0,$.head&&($.head.done=!1),!(1&$.wrap)||(((255&Y)<<8)+(Y>>8))%31){_.msg="incorrect header check",$.mode=30;break}if((15&Y)!=8){_.msg="unknown compression method",$.mode=30;break}if(C-=4,k=8+(15&(Y>>>=4)),$.wbits===0)$.wbits=k;else if(k>$.wbits){_.msg="invalid window size",$.mode=30;break}$.dmax=1<<k,_.adler=$.check=1,$.mode=512&Y?10:12,C=Y=0;break;case 2:for(;C<16;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}if($.flags=Y,(255&$.flags)!=8){_.msg="unknown compression method",$.mode=30;break}if(57344&$.flags){_.msg="unknown header flags set",$.mode=30;break}$.head&&($.head.text=Y>>8&1),512&$.flags&&(O[0]=255&Y,O[1]=Y>>>8&255,$.check=a($.check,O,2,0)),C=Y=0,$.mode=3;case 3:for(;C<32;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}$.head&&($.head.time=Y),512&$.flags&&(O[0]=255&Y,O[1]=Y>>>8&255,O[2]=Y>>>16&255,O[3]=Y>>>24&255,$.check=a($.check,O,4,0)),C=Y=0,$.mode=4;case 4:for(;C<16;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}$.head&&($.head.xflags=255&Y,$.head.os=Y>>8),512&$.flags&&(O[0]=255&Y,O[1]=Y>>>8&255,$.check=a($.check,O,2,0)),C=Y=0,$.mode=5;case 5:if(1024&$.flags){for(;C<16;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}$.length=Y,$.head&&($.head.extra_len=Y),512&$.flags&&(O[0]=255&Y,O[1]=Y>>>8&255,$.check=a($.check,O,2,0)),C=Y=0}else $.head&&($.head.extra=null);$.mode=6;case 6:if(1024&$.flags&&(Z<(V=$.length)&&(V=Z),V&&($.head&&(k=$.head.extra_len-$.length,$.head.extra||($.head.extra=new Array($.head.extra_len)),i.arraySet($.head.extra,N,U,V,k)),512&$.flags&&($.check=a($.check,N,V,U)),Z-=V,U+=V,$.length-=V),$.length))break e;$.length=0,$.mode=7;case 7:if(2048&$.flags){if(Z===0)break e;for(V=0;k=N[U+V++],$.head&&k&&$.length<65536&&($.head.name+=String.fromCharCode(k)),k&&V<Z;);if(512&$.flags&&($.check=a($.check,N,V,U)),Z-=V,U+=V,k)break e}else $.head&&($.head.name=null);$.length=0,$.mode=8;case 8:if(4096&$.flags){if(Z===0)break e;for(V=0;k=N[U+V++],$.head&&k&&$.length<65536&&($.head.comment+=String.fromCharCode(k)),k&&V<Z;);if(512&$.flags&&($.check=a($.check,N,V,U)),Z-=V,U+=V,k)break e}else $.head&&($.head.comment=null);$.mode=9;case 9:if(512&$.flags){for(;C<16;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}if(Y!==(65535&$.check)){_.msg="header crc mismatch",$.mode=30;break}C=Y=0}$.head&&($.head.hcrc=$.flags>>9&1,$.head.done=!0),_.adler=$.check=0,$.mode=12;break;case 10:for(;C<32;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}_.adler=$.check=g(Y),C=Y=0,$.mode=11;case 11:if($.havedict===0)return _.next_out=ne,_.avail_out=se,_.next_in=U,_.avail_in=Z,$.hold=Y,$.bits=C,2;_.adler=$.check=1,$.mode=12;case 12:if(B===5||B===6)break e;case 13:if($.last){Y>>>=7&C,C-=7&C,$.mode=27;break}for(;C<3;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}switch($.last=1&Y,C-=1,3&(Y>>>=1)){case 0:$.mode=14;break;case 1:if(A($),$.mode=20,B!==6)break;Y>>>=2,C-=2;break e;case 2:$.mode=17;break;case 3:_.msg="invalid block type",$.mode=30}Y>>>=2,C-=2;break;case 14:for(Y>>>=7&C,C-=7&C;C<32;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}if((65535&Y)!=(Y>>>16^65535)){_.msg="invalid stored block lengths",$.mode=30;break}if($.length=65535&Y,C=Y=0,$.mode=15,B===6)break e;case 15:$.mode=16;case 16:if(V=$.length){if(Z<V&&(V=Z),se<V&&(V=se),V===0)break e;i.arraySet(J,N,U,V,ne),Z-=V,U+=V,se-=V,ne+=V,$.length-=V;break}$.mode=12;break;case 17:for(;C<14;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}if($.nlen=257+(31&Y),Y>>>=5,C-=5,$.ndist=1+(31&Y),Y>>>=5,C-=5,$.ncode=4+(15&Y),Y>>>=4,C-=4,286<$.nlen||30<$.ndist){_.msg="too many length or distance symbols",$.mode=30;break}$.have=0,$.mode=18;case 18:for(;$.have<$.ncode;){for(;C<3;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}$.lens[q[$.have++]]=7&Y,Y>>>=3,C-=3}for(;$.have<19;)$.lens[q[$.have++]]=0;if($.lencode=$.lendyn,$.lenbits=7,H={bits:$.lenbits},j=l(0,$.lens,0,19,$.lencode,0,$.work,H),$.lenbits=H.bits,j){_.msg="invalid code lengths set",$.mode=30;break}$.have=0,$.mode=19;case 19:for(;$.have<$.nlen+$.ndist;){for(;F=(M=$.lencode[Y&(1<<$.lenbits)-1])>>>16&255,ee=65535&M,!((ie=M>>>24)<=C);){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}if(ee<16)Y>>>=ie,C-=ie,$.lens[$.have++]=ee;else{if(ee===16){for(D=ie+2;C<D;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}if(Y>>>=ie,C-=ie,$.have===0){_.msg="invalid bit length repeat",$.mode=30;break}k=$.lens[$.have-1],V=3+(3&Y),Y>>>=2,C-=2}else if(ee===17){for(D=ie+3;C<D;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}C-=ie,k=0,V=3+(7&(Y>>>=ie)),Y>>>=3,C-=3}else{for(D=ie+7;C<D;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}C-=ie,k=0,V=11+(127&(Y>>>=ie)),Y>>>=7,C-=7}if($.have+V>$.nlen+$.ndist){_.msg="invalid bit length repeat",$.mode=30;break}for(;V--;)$.lens[$.have++]=k}}if($.mode===30)break;if($.lens[256]===0){_.msg="invalid code -- missing end-of-block",$.mode=30;break}if($.lenbits=9,H={bits:$.lenbits},j=l(d,$.lens,0,$.nlen,$.lencode,0,$.work,H),$.lenbits=H.bits,j){_.msg="invalid literal/lengths set",$.mode=30;break}if($.distbits=6,$.distcode=$.distdyn,H={bits:$.distbits},j=l(c,$.lens,$.nlen,$.ndist,$.distcode,0,$.work,H),$.distbits=H.bits,j){_.msg="invalid distances set",$.mode=30;break}if($.mode=20,B===6)break e;case 20:$.mode=21;case 21:if(6<=Z&&258<=se){_.next_out=ne,_.avail_out=se,_.next_in=U,_.avail_in=Z,$.hold=Y,$.bits=C,o(_,L),ne=_.next_out,J=_.output,se=_.avail_out,U=_.next_in,N=_.input,Z=_.avail_in,Y=$.hold,C=$.bits,$.mode===12&&($.back=-1);break}for($.back=0;F=(M=$.lencode[Y&(1<<$.lenbits)-1])>>>16&255,ee=65535&M,!((ie=M>>>24)<=C);){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}if(F&&(240&F)==0){for(de=ie,z=F,W=ee;F=(M=$.lencode[W+((Y&(1<<de+z)-1)>>de)])>>>16&255,ee=65535&M,!(de+(ie=M>>>24)<=C);){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}Y>>>=de,C-=de,$.back+=de}if(Y>>>=ie,C-=ie,$.back+=ie,$.length=ee,F===0){$.mode=26;break}if(32&F){$.back=-1,$.mode=12;break}if(64&F){_.msg="invalid literal/length code",$.mode=30;break}$.extra=15&F,$.mode=22;case 22:if($.extra){for(D=$.extra;C<D;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}$.length+=Y&(1<<$.extra)-1,Y>>>=$.extra,C-=$.extra,$.back+=$.extra}$.was=$.length,$.mode=23;case 23:for(;F=(M=$.distcode[Y&(1<<$.distbits)-1])>>>16&255,ee=65535&M,!((ie=M>>>24)<=C);){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}if((240&F)==0){for(de=ie,z=F,W=ee;F=(M=$.distcode[W+((Y&(1<<de+z)-1)>>de)])>>>16&255,ee=65535&M,!(de+(ie=M>>>24)<=C);){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}Y>>>=de,C-=de,$.back+=de}if(Y>>>=ie,C-=ie,$.back+=ie,64&F){_.msg="invalid distance code",$.mode=30;break}$.offset=ee,$.extra=15&F,$.mode=24;case 24:if($.extra){for(D=$.extra;C<D;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}$.offset+=Y&(1<<$.extra)-1,Y>>>=$.extra,C-=$.extra,$.back+=$.extra}if($.offset>$.dmax){_.msg="invalid distance too far back",$.mode=30;break}$.mode=25;case 25:if(se===0)break e;if(V=L-se,$.offset>V){if((V=$.offset-V)>$.whave&&$.sane){_.msg="invalid distance too far back",$.mode=30;break}Q=V>$.wnext?(V-=$.wnext,$.wsize-V):$.wnext-V,V>$.length&&(V=$.length),oe=$.window}else oe=J,Q=ne-$.offset,V=$.length;for(se<V&&(V=se),se-=V,$.length-=V;J[ne++]=oe[Q++],--V;);$.length===0&&($.mode=21);break;case 26:if(se===0)break e;J[ne++]=$.length,se--,$.mode=21;break;case 27:if($.wrap){for(;C<32;){if(Z===0)break e;Z--,Y|=N[U++]<<C,C+=8}if(L-=se,_.total_out+=L,$.total+=L,L&&(_.adler=$.check=$.flags?a($.check,J,L,ne-L):n($.check,J,L,ne-L)),L=se,($.flags?Y:g(Y))!==$.check){_.msg="incorrect data check",$.mode=30;break}C=Y=0}$.mode=28;case 28:if($.wrap&&$.flags){for(;C<32;){if(Z===0)break e;Z--,Y+=N[U++]<<C,C+=8}if(Y!==(4294967295&$.total)){_.msg="incorrect length check",$.mode=30;break}C=Y=0}$.mode=29;case 29:j=1;break e;case 30:j=-3;break e;case 31:return-4;default:return h}return _.next_out=ne,_.avail_out=se,_.next_in=U,_.avail_in=Z,$.hold=Y,$.bits=C,($.wsize||L!==_.avail_out&&$.mode<30&&($.mode<27||B!==4))&&R(_,_.output,_.next_out,L-_.avail_out)?($.mode=31,-4):(P-=_.avail_in,L-=_.avail_out,_.total_in+=P,_.total_out+=L,$.total+=L,$.wrap&&L&&(_.adler=$.check=$.flags?a($.check,J,L,_.next_out-L):n($.check,J,L,_.next_out-L)),_.data_type=$.bits+($.last?64:0)+($.mode===12?128:0)+($.mode===20||$.mode===15?256:0),(P==0&&L===0||B===4)&&j===m&&(j=-5),j)},r.inflateEnd=function(_){if(!_||!_.state)return h;var B=_.state;return B.window&&(B.window=null),_.state=null,m},r.inflateGetHeader=function(_,B){var $;return _&&_.state?(2&($=_.state).wrap)==0?h:(($.head=B).done=!1,m):h},r.inflateSetDictionary=function(_,B){var $,N=B.length;return _&&_.state?($=_.state).wrap!==0&&$.mode!==11?h:$.mode===11&&n(1,B,N,0)!==$.check?-3:R(_,B,N,N)?($.mode=31,-4):($.havedict=1,m):h},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(s,t,r){var i=s("../utils/common"),n=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(d,c,m,h,u,p,b,g){var y,x,w,f,v,E,S,T,A,R=g.bits,_=0,B=0,$=0,N=0,J=0,U=0,ne=0,Z=0,se=0,Y=0,C=null,P=0,L=new i.Buf16(16),V=new i.Buf16(16),Q=null,oe=0;for(_=0;_<=15;_++)L[_]=0;for(B=0;B<h;B++)L[c[m+B]]++;for(J=R,N=15;1<=N&&L[N]===0;N--);if(N<J&&(J=N),N===0)return u[p++]=20971520,u[p++]=20971520,g.bits=1,0;for($=1;$<N&&L[$]===0;$++);for(J<$&&(J=$),_=Z=1;_<=15;_++)if(Z<<=1,(Z-=L[_])<0)return-1;if(0<Z&&(d===0||N!==1))return-1;for(V[1]=0,_=1;_<15;_++)V[_+1]=V[_]+L[_];for(B=0;B<h;B++)c[m+B]!==0&&(b[V[c[m+B]]++]=B);if(E=d===0?(C=Q=b,19):d===1?(C=n,P-=257,Q=a,oe-=257,256):(C=o,Q=l,-1),_=$,v=p,ne=B=Y=0,w=-1,f=(se=1<<(U=J))-1,d===1&&852<se||d===2&&592<se)return 1;for(;;){for(S=_-ne,A=b[B]<E?(T=0,b[B]):b[B]>E?(T=Q[oe+b[B]],C[P+b[B]]):(T=96,0),y=1<<_-ne,$=x=1<<U;u[v+(Y>>ne)+(x-=y)]=S<<24|T<<16|A|0,x!==0;);for(y=1<<_-1;Y&y;)y>>=1;if(y!==0?(Y&=y-1,Y+=y):Y=0,B++,--L[_]==0){if(_===N)break;_=c[m+b[B]]}if(J<_&&(Y&f)!==w){for(ne===0&&(ne=J),v+=$,Z=1<<(U=_-ne);U+ne<N&&!((Z-=L[U+ne])<=0);)U++,Z<<=1;if(se+=1<<U,d===1&&852<se||d===2&&592<se)return 1;u[w=Y&f]=J<<24|U<<16|v-p|0}}return Y!==0&&(u[v+Y]=_-ne<<24|64<<16|0),g.bits=J,0}},{"../utils/common":41}],51:[function(s,t,r){t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(s,t,r){var i=s("../utils/common"),n=0,a=1;function o(M){for(var O=M.length;0<=--O;)M[O]=0}var l=0,d=29,c=256,m=c+1+d,h=30,u=19,p=2*m+1,b=15,g=16,y=7,x=256,w=16,f=17,v=18,E=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],T=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],A=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],R=new Array(2*(m+2));o(R);var _=new Array(2*h);o(_);var B=new Array(512);o(B);var $=new Array(256);o($);var N=new Array(d);o(N);var J,U,ne,Z=new Array(h);function se(M,O,q,K,G){this.static_tree=M,this.extra_bits=O,this.extra_base=q,this.elems=K,this.max_length=G,this.has_stree=M&&M.length}function Y(M,O){this.dyn_tree=M,this.max_code=0,this.stat_desc=O}function C(M){return M<256?B[M]:B[256+(M>>>7)]}function P(M,O){M.pending_buf[M.pending++]=255&O,M.pending_buf[M.pending++]=O>>>8&255}function L(M,O,q){M.bi_valid>g-q?(M.bi_buf|=O<<M.bi_valid&65535,P(M,M.bi_buf),M.bi_buf=O>>g-M.bi_valid,M.bi_valid+=q-g):(M.bi_buf|=O<<M.bi_valid&65535,M.bi_valid+=q)}function V(M,O,q){L(M,q[2*O],q[2*O+1])}function Q(M,O){for(var q=0;q|=1&M,M>>>=1,q<<=1,0<--O;);return q>>>1}function oe(M,O,q){var K,G,ae=new Array(b+1),re=0;for(K=1;K<=b;K++)ae[K]=re=re+q[K-1]<<1;for(G=0;G<=O;G++){var te=M[2*G+1];te!==0&&(M[2*G]=Q(ae[te]++,te))}}function ie(M){var O;for(O=0;O<m;O++)M.dyn_ltree[2*O]=0;for(O=0;O<h;O++)M.dyn_dtree[2*O]=0;for(O=0;O<u;O++)M.bl_tree[2*O]=0;M.dyn_ltree[2*x]=1,M.opt_len=M.static_len=0,M.last_lit=M.matches=0}function F(M){8<M.bi_valid?P(M,M.bi_buf):0<M.bi_valid&&(M.pending_buf[M.pending++]=M.bi_buf),M.bi_buf=0,M.bi_valid=0}function ee(M,O,q,K){var G=2*O,ae=2*q;return M[G]<M[ae]||M[G]===M[ae]&&K[O]<=K[q]}function de(M,O,q){for(var K=M.heap[q],G=q<<1;G<=M.heap_len&&(G<M.heap_len&&ee(O,M.heap[G+1],M.heap[G],M.depth)&&G++,!ee(O,K,M.heap[G],M.depth));)M.heap[q]=M.heap[G],q=G,G<<=1;M.heap[q]=K}function z(M,O,q){var K,G,ae,re,te=0;if(M.last_lit!==0)for(;K=M.pending_buf[M.d_buf+2*te]<<8|M.pending_buf[M.d_buf+2*te+1],G=M.pending_buf[M.l_buf+te],te++,K===0?V(M,G,O):(V(M,(ae=$[G])+c+1,O),(re=E[ae])!==0&&L(M,G-=N[ae],re),V(M,ae=C(--K),q),(re=S[ae])!==0&&L(M,K-=Z[ae],re)),te<M.last_lit;);V(M,x,O)}function W(M,O){var q,K,G,ae=O.dyn_tree,re=O.stat_desc.static_tree,te=O.stat_desc.has_stree,X=O.stat_desc.elems,ce=-1;for(M.heap_len=0,M.heap_max=p,q=0;q<X;q++)ae[2*q]!==0?(M.heap[++M.heap_len]=ce=q,M.depth[q]=0):ae[2*q+1]=0;for(;M.heap_len<2;)ae[2*(G=M.heap[++M.heap_len]=ce<2?++ce:0)]=1,M.depth[G]=0,M.opt_len--,te&&(M.static_len-=re[2*G+1]);for(O.max_code=ce,q=M.heap_len>>1;1<=q;q--)de(M,ae,q);for(G=X;q=M.heap[1],M.heap[1]=M.heap[M.heap_len--],de(M,ae,1),K=M.heap[1],M.heap[--M.heap_max]=q,M.heap[--M.heap_max]=K,ae[2*G]=ae[2*q]+ae[2*K],M.depth[G]=(M.depth[q]>=M.depth[K]?M.depth[q]:M.depth[K])+1,ae[2*q+1]=ae[2*K+1]=G,M.heap[1]=G++,de(M,ae,1),2<=M.heap_len;);M.heap[--M.heap_max]=M.heap[1],(function(he,ge){var ye,pe,Ce,xe,Pe,Le,_e=ge.dyn_tree,Re=ge.max_code,Qt=ge.stat_desc.static_tree,ea=ge.stat_desc.has_stree,ta=ge.stat_desc.extra_bits,Ct=ge.stat_desc.extra_base,qe=ge.stat_desc.max_length,et=0;for(xe=0;xe<=b;xe++)he.bl_count[xe]=0;for(_e[2*he.heap[he.heap_max]+1]=0,ye=he.heap_max+1;ye<p;ye++)qe<(xe=_e[2*_e[2*(pe=he.heap[ye])+1]+1]+1)&&(xe=qe,et++),_e[2*pe+1]=xe,Re<pe||(he.bl_count[xe]++,Pe=0,Ct<=pe&&(Pe=ta[pe-Ct]),Le=_e[2*pe],he.opt_len+=Le*(xe+Pe),ea&&(he.static_len+=Le*(Qt[2*pe+1]+Pe)));if(et!==0){do{for(xe=qe-1;he.bl_count[xe]===0;)xe--;he.bl_count[xe]--,he.bl_count[xe+1]+=2,he.bl_count[qe]--,et-=2}while(0<et);for(xe=qe;xe!==0;xe--)for(pe=he.bl_count[xe];pe!==0;)Re<(Ce=he.heap[--ye])||(_e[2*Ce+1]!==xe&&(he.opt_len+=(xe-_e[2*Ce+1])*_e[2*Ce],_e[2*Ce+1]=xe),pe--)}})(M,O),oe(ae,ce,M.bl_count)}function k(M,O,q){var K,G,ae=-1,re=O[1],te=0,X=7,ce=4;for(re===0&&(X=138,ce=3),O[2*(q+1)+1]=65535,K=0;K<=q;K++)G=re,re=O[2*(K+1)+1],++te<X&&G===re||(te<ce?M.bl_tree[2*G]+=te:G!==0?(G!==ae&&M.bl_tree[2*G]++,M.bl_tree[2*w]++):te<=10?M.bl_tree[2*f]++:M.bl_tree[2*v]++,ae=G,ce=(te=0)===re?(X=138,3):G===re?(X=6,3):(X=7,4))}function j(M,O,q){var K,G,ae=-1,re=O[1],te=0,X=7,ce=4;for(re===0&&(X=138,ce=3),K=0;K<=q;K++)if(G=re,re=O[2*(K+1)+1],!(++te<X&&G===re)){if(te<ce)for(;V(M,G,M.bl_tree),--te!=0;);else G!==0?(G!==ae&&(V(M,G,M.bl_tree),te--),V(M,w,M.bl_tree),L(M,te-3,2)):te<=10?(V(M,f,M.bl_tree),L(M,te-3,3)):(V(M,v,M.bl_tree),L(M,te-11,7));ae=G,ce=(te=0)===re?(X=138,3):G===re?(X=6,3):(X=7,4)}}o(Z);var H=!1;function D(M,O,q,K){L(M,(l<<1)+(K?1:0),3),(function(G,ae,re,te){F(G),P(G,re),P(G,~re),i.arraySet(G.pending_buf,G.window,ae,re,G.pending),G.pending+=re})(M,O,q)}r._tr_init=function(M){H||((function(){var O,q,K,G,ae,re=new Array(b+1);for(G=K=0;G<d-1;G++)for(N[G]=K,O=0;O<1<<E[G];O++)$[K++]=G;for($[K-1]=G,G=ae=0;G<16;G++)for(Z[G]=ae,O=0;O<1<<S[G];O++)B[ae++]=G;for(ae>>=7;G<h;G++)for(Z[G]=ae<<7,O=0;O<1<<S[G]-7;O++)B[256+ae++]=G;for(q=0;q<=b;q++)re[q]=0;for(O=0;O<=143;)R[2*O+1]=8,O++,re[8]++;for(;O<=255;)R[2*O+1]=9,O++,re[9]++;for(;O<=279;)R[2*O+1]=7,O++,re[7]++;for(;O<=287;)R[2*O+1]=8,O++,re[8]++;for(oe(R,m+1,re),O=0;O<h;O++)_[2*O+1]=5,_[2*O]=Q(O,5);J=new se(R,E,c+1,m,b),U=new se(_,S,0,h,b),ne=new se(new Array(0),T,0,u,y)})(),H=!0),M.l_desc=new Y(M.dyn_ltree,J),M.d_desc=new Y(M.dyn_dtree,U),M.bl_desc=new Y(M.bl_tree,ne),M.bi_buf=0,M.bi_valid=0,ie(M)},r._tr_stored_block=D,r._tr_flush_block=function(M,O,q,K){var G,ae,re=0;0<M.level?(M.strm.data_type===2&&(M.strm.data_type=(function(te){var X,ce=4093624447;for(X=0;X<=31;X++,ce>>>=1)if(1&ce&&te.dyn_ltree[2*X]!==0)return n;if(te.dyn_ltree[18]!==0||te.dyn_ltree[20]!==0||te.dyn_ltree[26]!==0)return a;for(X=32;X<c;X++)if(te.dyn_ltree[2*X]!==0)return a;return n})(M)),W(M,M.l_desc),W(M,M.d_desc),re=(function(te){var X;for(k(te,te.dyn_ltree,te.l_desc.max_code),k(te,te.dyn_dtree,te.d_desc.max_code),W(te,te.bl_desc),X=u-1;3<=X&&te.bl_tree[2*A[X]+1]===0;X--);return te.opt_len+=3*(X+1)+5+5+4,X})(M),G=M.opt_len+3+7>>>3,(ae=M.static_len+3+7>>>3)<=G&&(G=ae)):G=ae=q+5,q+4<=G&&O!==-1?D(M,O,q,K):M.strategy===4||ae===G?(L(M,2+(K?1:0),3),z(M,R,_)):(L(M,4+(K?1:0),3),(function(te,X,ce,he){var ge;for(L(te,X-257,5),L(te,ce-1,5),L(te,he-4,4),ge=0;ge<he;ge++)L(te,te.bl_tree[2*A[ge]+1],3);j(te,te.dyn_ltree,X-1),j(te,te.dyn_dtree,ce-1)})(M,M.l_desc.max_code+1,M.d_desc.max_code+1,re+1),z(M,M.dyn_ltree,M.dyn_dtree)),ie(M),K&&F(M)},r._tr_tally=function(M,O,q){return M.pending_buf[M.d_buf+2*M.last_lit]=O>>>8&255,M.pending_buf[M.d_buf+2*M.last_lit+1]=255&O,M.pending_buf[M.l_buf+M.last_lit]=255&q,M.last_lit++,O===0?M.dyn_ltree[2*q]++:(M.matches++,O--,M.dyn_ltree[2*($[q]+c+1)]++,M.dyn_dtree[2*C(O)]++),M.last_lit===M.lit_bufsize-1},r._tr_align=function(M){L(M,2,3),V(M,x,R),(function(O){O.bi_valid===16?(P(O,O.bi_buf),O.bi_buf=0,O.bi_valid=0):8<=O.bi_valid&&(O.pending_buf[O.pending++]=255&O.bi_buf,O.bi_buf>>=8,O.bi_valid-=8)})(M)}},{"../utils/common":41}],53:[function(s,t,r){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(s,t,r){(function(i){(function(n,a){if(!n.setImmediate){var o,l,d,c,m=1,h={},u=!1,p=n.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(n);b=b&&b.setTimeout?b:n,o={}.toString.call(n.process)==="[object process]"?function(w){process.nextTick(function(){y(w)})}:(function(){if(n.postMessage&&!n.importScripts){var w=!0,f=n.onmessage;return n.onmessage=function(){w=!1},n.postMessage("","*"),n.onmessage=f,w}})()?(c="setImmediate$"+Math.random()+"$",n.addEventListener?n.addEventListener("message",x,!1):n.attachEvent("onmessage",x),function(w){n.postMessage(c+w,"*")}):n.MessageChannel?((d=new MessageChannel).port1.onmessage=function(w){y(w.data)},function(w){d.port2.postMessage(w)}):p&&"onreadystatechange"in p.createElement("script")?(l=p.documentElement,function(w){var f=p.createElement("script");f.onreadystatechange=function(){y(w),f.onreadystatechange=null,l.removeChild(f),f=null},l.appendChild(f)}):function(w){setTimeout(y,0,w)},b.setImmediate=function(w){typeof w!="function"&&(w=new Function(""+w));for(var f=new Array(arguments.length-1),v=0;v<f.length;v++)f[v]=arguments[v+1];var E={callback:w,args:f};return h[m]=E,o(m),m++},b.clearImmediate=g}function g(w){delete h[w]}function y(w){if(u)setTimeout(y,0,w);else{var f=h[w];if(f){u=!0;try{(function(v){var E=v.callback,S=v.args;switch(S.length){case 0:E();break;case 1:E(S[0]);break;case 2:E(S[0],S[1]);break;case 3:E(S[0],S[1],S[2]);break;default:E.apply(a,S)}})(f)}finally{g(w),u=!1}}}}function x(w){w.source===n&&typeof w.data=="string"&&w.data.indexOf(c)===0&&y(+w.data.slice(c.length))}})(typeof self>"u"?i===void 0?this:i:self)}).call(this,typeof tt<"u"?tt:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(gt)),gt.exports}var ts=es();const Nt=lt(ts),Fe=(I,e)=>!!(I.moments&&I.moments.includes(e)||I.moment===e),$e={打出时:"🚩",死亡时:"☠️",攻击时:"🗡️",失去生命时:"💔",回合结束时:"📘",回合开始时:"📗",下回合开始时:"⏱️",受伤时:"💔"},Ht={my_hand:"我方手牌数",enemy_hand:"敌方手牌数",my_minions:"我方随从数",enemy_minions:"敌方随从数"};function as(I,e){const s=I.type==="hero",t=e.type==="hero";if(s!==t)return s?-1:1;if(I.cost!==e.cost)return I.cost-e.cost;const r=I.type!=="spell",i=e.type!=="spell";if(r!==i)return r?-1:1;const n=(I.attack||0)+(I.health||0),a=(e.attack||0)+(e.health||0);return n!==a?n-a:I.name.localeCompare(e.name,"en")}function Ie(I,e){return I==="deck_top"?e?"抽牌堆的卡牌":"抽牌堆顶的卡牌":I==="discard_top"?e?"弃牌堆的卡牌":"弃牌堆顶的卡牌":I==="my_hand"?e?"我方手牌":"我方所有手牌":I==="enemy_hand"?e?"敌方手牌":"敌方所有手牌":"未知来源"}const Ae=class Ae{constructor(){this.selectedMinion=null,this.isAttacking=!1,this.dyingMinions=new Set,this.lastGameStateTimestamp=0,this._p2MulliganConfirmed=!1,this.draggedCard=null,this.dragElement=null,this._pendingClickCardId=void 0,this._lastBroadcastDiscardPileLen=0,this._pendingEnemyHandCard=void 0,this._pendingEnemyHandEffectType=void 0,this.isHandDragStarted=!1,this.handDragStartX=0,this.handDragStartY=0,this.globalListenersAttached=!1,this.attackingMinion=null,this.attackArrowEl=null,this.attackArrowStartX=0,this.attackArrowStartY=0,this.selectedHandCard=null,this.selectedAttackingMinion=null,this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null,this.selectingTargetForSkill=null,this.targetArrowStartX=0,this.targetArrowStartY=0,this.targetArrowColor="#4a90d9",this.editingCards=[],this.currentCardIndex=0,this.currentEffectIndex=0,this.showKeywordsPanel=!1,this.showMomentPanel=!1,this.showTargetPanel=!1,this.showEffectPanel=!1,this.showConditionPanel=!1,this.isPortraitMode=!1,this.showSidePanel=!1,this.pendingScrollRestoration=null,this.savedCardManagerScrollY=0,this.robotTurnExecuting=!1,this.heroName="",this.heroImageData=null,this.isHeroEditMode=!1,this.editingHeroId=null,this.heroDerivedCards=[],this.heroEditingDerivedIndex=null,this.heroSkills=[],this.heroEditingSkillIndex=null,this.heroEditingSkillEffectIndex=0,this.heroSkillTempImageData=null,this.heroSkillCropIndex=null,this.showHeroSkillMomentPanel=!1,this.showHeroSkillTargetPanel=!1,this.showHeroSkillEffectPanel=!1,this.showHeroSkillConditionPanel=!1,this.heroSpeech={greeting:"",apology:"",taunt:"",exclamation:"",pity:"",flirt:""},this.heroVoiceType="none",this.speechCooldown=!1,this.speechLastTurnCheck=0,this.speechLastRobotBoardSize=0,this.speechLastRobotBoardIds=new Set,this.speechLastRobotHealth=40,this.speechLastHandSize=0,this.speechLastPlayerEnergy=0,this.speechLastRobotTotalHealth=0,this.speechTurnSpokenTypes=new Set,this.flirtAudioPlaying=!1,this.lastPlayerActionTimestamp=Date.now(),this.playerIdleTaunted=!1,this.speechLastActionSignature="",this.showSpeechMenu=!1,this.speechMenuTimer=null,this.activeSpeechBubble=null,this.cropTarget="main",this.importMode="full",this.isDrawingMode=!1,this.drawingTool="brush",this.drawingCanvasRef=null,this.drawingCtxRef=null,this.drawingBaseImageData=null,this.brushSizePreset="medium",this.COLORS=["#c9524a","#d4894a","#c9a84a","#4a8a5a","#4a8a8a","#4a6a9a","#7a5a8a","#000000"],this.drawingColor="#000000",this.currentColorIndex=7,this.menuSubScreen="",this._lastAnimatedRenderKey="",this.onlineLoginError=null,this._suppressFirstRender=!1,this.player1SelectedHero=null,this.player2SelectedHero=null,this.renamingGroupId=null,this.collapsedGroups=new Set,this.elementClickCount=0,this.lastElementKeyword=null,this.isEditMode=!1,this.editingCardSample=null,this.sortedCardList=[],this.lastDeckVersion=0,this.lastPhase="",this.showGameMenu=!1,this.showMenuOptions=!1,this.soundVolume=Math.min(100,Math.max(0,parseInt(localStorage.getItem("soundVolume")||"50"))),this.musicVolume=Math.min(100,Math.max(0,parseInt(localStorage.getItem("musicVolume")||"50"))),this.bgMusic=null,this.currentBgmTrack="",this._bgmPaused=!1,this._bgmAutoPaused=!1,this.deckFolderHandle=null,this.deckFolderZips=[],this.deckFolderName="",this.deckFolderConnected=!1,this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.savedGameState=null,this.previousMinionStats=new Map,this.deathAnimationQueue=[],this.previousBoardMinionIds=new Set,this.damageNumbers=[],this.previousPlayerHealth=[30,30],this.roomSubscription=null,this.battleStatePollInterval=null,this.isSubscribing=!1,this.pollingInterval=null,this.onlineViewPlayerIndex=0,this.cardTemplates=[{name:"少年剑客",cost:1,attack:2,health:1,maxHealth:1,type:"minion",keywords:[],imageData:"/cards/card_swordsman.png"},{name:"花灵仙子",cost:1,attack:0,health:2,maxHealth:2,type:"minion",keywords:[],imageData:"/cards/card_fairy.png"},{name:"麦田收割者",cost:2,attack:2,health:2,maxHealth:2,type:"minion",keywords:[],imageData:"/cards/card_harvest_maiden.png"},{name:"铁匠",cost:2,attack:2,health:3,maxHealth:3,type:"minion",keywords:[Ee.armor],imageData:"/cards/card_blacksmith.png"},{name:"血刃刺客",cost:2,attack:3,health:1,maxHealth:1,type:"minion",keywords:[Ee.firstStrike],imageData:"/cards/card_assassin.png"},{name:"重装守卫",cost:3,attack:1,health:6,maxHealth:6,type:"minion",keywords:[Ee.taunt],imageData:"/cards/card_guardian.png"},{name:"秘法师",cost:4,attack:1,health:4,maxHealth:4,type:"minion",keywords:[],imageData:"/cards/card_archmage.png"},{name:"圣殿骑士",cost:4,attack:4,health:4,maxHealth:4,type:"minion",keywords:[],imageData:"/cards/card_templar.png"}],this.clickSoundFiles=[],this.drawSoundFiles=[],this.woodSoundFiles=[],this.clickAudioPool=[],this.clickAudioIndex=0,this.woodAudioPool=[],this.woodAudioIndex=0,this.drawAudioPool=[],this.drawAudioIndex=0,this.pendingSavePromise=null,this.customCursorEl=null,this.pendingImportCards=[],this.pendingImportMode=null,this.pendingImportType=null,this.pendingOnlineImportCards=[],this.pendingOnlineImportMode=null,this.pendingOnlineImportType=null,this.fxCanvas=null,this.fxCtx=null,this.fxParticles=[],this.fxAnimationId=0,this.fxRunning=!1,this.fxLoop=()=>{const e=this.fxCtx,s=this.fxCanvas;if(!e||!s){this.fxRunning=!1;return}e.clearRect(0,0,s.width,s.height);const t=1/60;e.globalCompositeOperation="lighter";for(let r=this.fxParticles.length-1;r>=0;r--){const i=this.fxParticles[r];if(i.life-=t/i.maxLife,i.life<=0){this.fxParticles.splice(r,1);continue}i.gravity&&(i.vy+=i.gravity*t),i.x+=i.vx*t,i.y+=i.vy*t,i.vx*=.98,i.vy*=.98,i.alpha=i.life*(i.alpha>.5?i.alpha:1);const n=i.size*Math.max(.1,i.life);let a=i.color;if(!(!a.startsWith("rgba")&&!a.startsWith("#"))){if(a.startsWith("#")){const o=1-i.life;a==="#ff6600"&&(a=o>.5?"#cc2200":"#ff6600")}}if(i.trail&&i.history){i.history.push({x:i.x,y:i.y}),i.history.length>(i.trailLength||5)&&i.history.shift();for(let o=0;o<i.history.length-1;o++){const l=o/i.history.length*i.alpha*.5;e.beginPath(),e.arc(i.history[o].x,i.history[o].y,n*(o/i.history.length)*.6,0,Math.PI*2),e.fillStyle=a.replace(")",`,${l})`).replace("rgb","rgba"),a.includes("rgba")||(e.fillStyle=`rgba(${parseInt(a.slice(1,3),16)},${parseInt(a.slice(3,5),16)},${parseInt(a.slice(5,7),16)},${l})`),e.fill()}}if(e.beginPath(),i.shape==="spark"){const o=n*3,l=n;e.ellipse(i.x,i.y,o/2,l/2,Math.atan2(i.vy,i.vx),0,Math.PI*2)}else e.arc(i.x,i.y,n,0,Math.PI*2);if(a.startsWith("rgba")){const o=a.match(/rgba\((\d+),(\d+),(\d+),([\d.]+)\)/);o?e.fillStyle=`rgba(${o[1]},${o[2]},${o[3]},${parseFloat(o[4])*i.alpha})`:e.fillStyle=a}else if(a.startsWith("#")){const o=parseInt(a.slice(1,3),16),l=parseInt(a.slice(3,5),16),d=parseInt(a.slice(5,7),16);e.fillStyle=`rgba(${o},${l},${d},${i.alpha})`}else e.fillStyle=a;e.fill()}e.globalCompositeOperation="source-over",this.fxParticles.length>0?this.fxAnimationId=requestAnimationFrame(this.fxLoop):this.fxRunning=!1},this.thumbsDownAnimCssInjected=!1,this.thumbsDownIntervalId=null,this._suppressFirstRender=!!sessionStorage.getItem("_pageAnimLoaded"),sessionStorage.getItem("_pageAnimLoaded")||sessionStorage.setItem("_pageAnimLoaded","1"),this.state=Gt(),this.app=document.getElementById("app"),this.boundMouseMove=this.handleMouseMove.bind(this),this.boundMouseUp=this.handleMouseUp.bind(this),this.initClickSounds(),this.render(),this.loadPersistedDeck(),this.loadDeckFolder(),this.startBackgroundMusic(),this.createNowPlayingDisplay(),this.initAtmosphere(),document.addEventListener("visibilitychange",()=>{document.hidden?(this.bgMusic&&!this.bgMusic.paused&&(this.bgMusic.pause(),this._bgmAutoPaused=!0),this.syncSharedDeck(),this.pendingSavePromise=_t(this.state.sharedDeck,this.state.heroCards||[],this.state.groups)):this._bgmAutoPaused&&!this._bgmPaused&&(this.bgMusic?.play().catch(()=>{}),this._bgmAutoPaused=!1)}),document.addEventListener("keydown",e=>{if(e.key!=="Escape")return;const s=this.state.phase;["playing","mulligan","gameOver","robotBattle","robotGameOver","onlineBattle","onlineGameOver"].includes(s)?this.showGameMenu=!this.showGameMenu:s==="menu"?this.showMenuOptions=!this.showMenuOptions:(this.state=le(this.state,{type:"BACK_TO_MENU"}),this.showMenuOptions=!1,this.showGameMenu=!1),this.render()})}get currentCard(){return this.editingCards[this.currentCardIndex]||this.editingCards[0]||this.createDefaultCard()}set currentCard(e){this.editingCards[this.currentCardIndex]&&(this.editingCards[this.currentCardIndex]=e)}getBrushSize(){return this.drawingTool==="brush"?this.brushSizePreset==="thin"?1:this.brushSizePreset==="medium"?3:9:this.brushSizePreset==="thin"?5:this.brushSizePreset==="medium"?15:45}createDefaultEffect(){return{moment:null,targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0,isAttackSet:!1,isHealthSet:!1,costValue:0,isCostPositive:!0,isCostSet:!1,triggerNumbers:[1,2,3,4,5,6],randomTargetTimes:1}}createDefaultCard(e="minion"){return{name:"",cost:1,attack:e==="spell"?0:1,health:e==="spell"?0:1,keywords:[],armorValue:1,preparationValue:1,effects:[],type:e,spellEffect:{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0,isAttackSet:!1,isHealthSet:!1,costValue:0,isCostPositive:!0,isCostSet:!1},imageData:null}}initCardsArray(e="minion"){this.editingCards=[this.createDefaultCard(e)],this.currentCardIndex=0,this.currentEffectIndex=0}addDerivedCard(){const e=this.createDefaultCard("minion");e.name=`衍生卡${this.editingCards.length}`,this.editingCards.push(e),this.currentCardIndex=this.editingCards.length-1,this.currentEffectIndex=0}deleteDerivedCard(e){e!==0&&(this.editingCards.splice(e,1),this.currentCardIndex=0,this.currentEffectIndex=0)}getMainCard(){return this.editingCards[0]}getCardByIndex(e){return this.editingCards[e]}cloneCardByIndex(e){const s=this.editingCards[e];return s?{id:ke(),name:s.name||"未知卡牌",cost:s.cost,attack:s.attack,health:s.health,maxHealth:s.health,type:s.type,keywords:s.keywords.map(t=>({...t})),armorValue:s.armorValue,effects:s.effects?.map(t=>({...t})),imageData:s.imageData||void 0}:null}getCurrentEffect(){return!this.currentCard.effects||this.currentCard.effects.length===0?null:this.currentCard.effects[this.currentEffectIndex]||null}addNewEffect(){return this.currentCard.effects||(this.currentCard.effects=[]),this.currentCard.effects.push(this.createDefaultEffect()),this.currentEffectIndex=this.currentCard.effects.length-1,this.showMomentPanel=!0,this.currentCard.effects[this.currentEffectIndex]}async loadPersistedDeck(){try{const e=await ja();if(e&&e.sharedDeck){if(this.state=le(this.state,{type:"SET_DECK",cards:e.sharedDeck}),e.heroCards.length>0&&(this.state={...this.state,heroCards:e.heroCards}),e.groups&&e.groups.length>1){const r=this.state.groups;for(const i of e.groups.slice(1))r.find(n=>n.id===i.id)||r.push(i);this.state={...this.state,groups:r}}else try{const r=localStorage.getItem("miaoKaBao_customGroups");if(r){const n=JSON.parse(r).slice(1);if(n.length>0){const a=this.state.groups;for(const o of n)a.find(l=>l.id===o.id)||a.push(o);this.state={...this.state,groups:a}}}}catch(r){console.warn("[deckStorage] localStorage 恢复子卡组失败:",r)}const s=e.sharedDeck.reduce((r,i)=>r+i.count,0);console.log(`[deckStorage] 已从本地恢复卡包，共 ${s} 张`);let t=0;for(const r of this.state.groups)for(const i of r.cards)i.card.id>t&&(t=i.card.id);Vt(t),this.render();return}}catch(e){console.warn("[deckStorage] 读取失败:",e)}this.render()}async loadDeckFolder(){try{const e=await Ga();e&&(this.deckFolderHandle=e,this.deckFolderName=e.name,await this.refreshDeckFolderZips()?(this.deckFolderConnected=!0,console.log(`[deckStorage] 已恢复卡包文件夹「${e.name}」，找到 ${this.deckFolderZips.length} 个 ZIP`)):(this.deckFolderConnected=!1,console.log(`[deckStorage] 已恢复卡包文件夹「${e.name}」，但权限不足，等待用户重新授权`)),this.render())}catch(e){console.warn("[deckStorage] 加载卡包文件夹失败:",e)}}async refreshDeckFolderZips(){if(this.deckFolderZips=[],!this.deckFolderHandle)return!1;try{const e=this.deckFolderHandle;if(await e.queryPermission({mode:"read"})!=="granted"&&await e.requestPermission({mode:"read"})!=="granted")return console.warn("[deckStorage] 文件夹权限不足，保留 handle 等待用户重新授权"),!1;const s=[];for await(const t of e.values())t.kind==="file"&&t.name.toLowerCase().endsWith(".zip")&&s.push({name:t.name,handle:t});return s.sort((t,r)=>t.name.localeCompare(r.name)),this.deckFolderZips=s,!0}catch(e){return console.warn("[deckStorage] 读取文件夹失败:",e),!1}}initClickSounds(){this.clickSoundFiles=Array.from({length:11},(s,t)=>`/sounds/bluntwood/bluntwood_${t+1}.ogg`),this.drawSoundFiles=Array.from({length:11},(s,t)=>`/sounds/snow/snow_${t+1}.ogg`),this.woodSoundFiles=Array.from({length:11},(s,t)=>`/sounds/wood/wood_walk${t+1}.ogg`);for(let s=0;s<3;s++)this.clickAudioPool.push(new Audio),this.woodAudioPool.push(new Audio),this.drawAudioPool.push(new Audio);this.app.addEventListener("click",s=>{const t=s.target;(t.tagName==="BUTTON"||t.closest("button")||t.classList.contains("btn"))&&this.playClickSound()});const e=()=>{this.bgMusic&&this.bgMusic.paused&&!this._bgmPaused&&this.musicVolume>0&&this.bgMusic.play().catch(()=>{})};document.addEventListener("click",e,{once:!0})}playClickSound(){if(this.soundVolume===0||this.clickSoundFiles.length===0)return;const e=this.clickSoundFiles[Math.floor(Math.random()*this.clickSoundFiles.length)],s=this.clickAudioPool[this.clickAudioIndex];this.clickAudioIndex=(this.clickAudioIndex+1)%this.clickAudioPool.length,s.src=e,s.currentTime=0,s.volume=this.soundVolume/100,s.play().catch(()=>{})}startBackgroundMusic(e){try{if(this.musicVolume===0)return;const s=e??this.getMenuBgmTrack();this.switchBGM(s)}catch{}}stopBackgroundMusic(){this.bgMusic&&(this.bgMusic.pause(),this.bgMusic.currentTime=0)}getMenuBgmTrack(){return Math.random()<.05?"/sounds/Music/beauteous_rain.mp3":"/sounds/Music/passing_summer.mp3"}getBattleBgmTrack(){return"/sounds/Music/indecisive.mp3"}switchBGM(e){try{if(this.musicVolume===0)return;if(this.bgMusic&&this.currentBgmTrack===e){this.bgMusic.volume=this.musicVolume/100,this.bgMusic.paused&&!this._bgmPaused&&this.bgMusic.play().catch(()=>{});return}if(this.bgMusic){try{this.bgMusic.pause()}catch{}this.bgMusic.src=""}const s=new Audio(e);s.loop=!0,s.volume=this.musicVolume/100,s.play().catch(()=>{}),this.bgMusic=s,this.currentBgmTrack=e,this.updateNowPlayingDisplay(e)}catch{}}switchBGMForScene(){if(this.musicVolume===0||this._bgmPaused)return;const e=this.state.phase,s=["playing","mulligan","gameOver","robotBattle","robotGameOver","onlineBattle","onlineGameOver"];if(s.includes(e)&&this.showMenuOptions){this.bgMusic&&!this.bgMusic.paused&&this.bgMusic.pause();return}if(s.includes(e)){const t=this.getBattleBgmTrack();this.currentBgmTrack!==t&&this.switchBGM(t)}else e==="menu"?this.currentBgmTrack==="/sounds/Music/passing_summer.mp3"||this.currentBgmTrack==="/sounds/Music/beauteous_rain.mp3"?this.bgMusic&&this.bgMusic.paused&&this.bgMusic.play().catch(()=>{}):this.switchBGM(this.getMenuBgmTrack()):this.bgMusic&&this.bgMusic.paused&&this.bgMusic.play().catch(()=>{})}createNowPlayingDisplay(){const e=document.createElement("div");e.id="now-playing-display";const s=this.currentBgmTrack?this.currentBgmTrack.split("/").pop()||this.currentBgmTrack:"　";if(e.innerHTML='<span class="npl">正在播放：</span><span class="npn"><span class="npn-inner"><span style="margin-right:24px">'+s+'</span><span style="margin-right:24px">'+s+"</span></span></span>",this.musicVolume===0&&(e.style.display="none"),document.body.appendChild(e),e.addEventListener("click",()=>{this.bgMusic&&this.musicVolume!==0&&(this._bgmPaused=!this._bgmPaused,this._bgmPaused?(this.bgMusic.pause(),e.classList.add("paused"),e.querySelector(".npl").textContent="暂停播放："):(this.bgMusic.play().catch(()=>{}),e.classList.remove("paused"),e.querySelector(".npl").textContent="正在播放："))}),!document.getElementById("np-style")){const t=document.createElement("style");t.id="np-style",t.textContent=`
        #now-playing-display {
          position:fixed;top:6px;right:10px;z-index:99999;
          color:rgba(255,255,255,0.75);font-size:11px;
          font-family:'Courier New',monospace;
          text-shadow:0 0 8px rgba(0,0,0,0.9),0 0 4px rgba(0,0,0,0.7);
          cursor:pointer;user-select:none;
          display:flex;align-items:center;gap:4px;white-space:nowrap;
        }
        .npl{flex-shrink:0}
        .npn{display:inline-block;overflow:hidden;max-width:160px;vertical-align:bottom}
        .npn-inner{display:inline-flex;white-space:nowrap;animation:npMarquee 6s linear infinite;will-change:transform}
        @keyframes npMarquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        /* 暂停状态 */
        #now-playing-display.paused .npn-inner{animation-play-state:paused}
        #now-playing-display.paused .npl{color:rgba(255,180,80,0.9)}
        /* ===== 全局氛围容器（场景自适应） ===== */
        #game-atmosphere{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden}
        #game-atmosphere .menu-beam{transition:opacity 2s ease}
        #game-atmosphere .candle-light{transition:opacity 2s ease}
        #game-atmosphere .dust-particle{transition:opacity 2s ease}
        /* 全亮模式（主菜单） */
        #game-atmosphere.atmos-full .menu-beam{opacity:1}
        #game-atmosphere.atmos-full .candle-light{opacity:1}
        #game-atmosphere.atmos-full .dust-particle{opacity:1}
        /* 环境渐变模式（非菜单界面）—— 缓慢淡化到定值，不消失 */
        #game-atmosphere.atmos-ambient .menu-beam{opacity:0.05}
        #game-atmosphere.atmos-ambient .candle-light{opacity:0}
        #game-atmosphere.atmos-ambient .dust-particle{opacity:0.08}
        
        /* ===== 光束扫入灯效 ===== */
        .menu-beam{position:fixed;width:700px;height:700px;border-radius:50%;
          filter:blur(45px);pointer-events:none;z-index:0;
          background:radial-gradient(circle,rgba(255,110,10,0.22) 0%,rgba(230,70,0,0.10) 30%,transparent 60%)}
        .beam1{animation:beamSweep1 12s ease-in-out infinite backwards;top:-250px;left:-250px}
        .beam2{animation:beamSweep2 15s ease-in-out infinite backwards;top:-250px;right:-250px;animation-delay:3s}
        .beam3{animation:beamSweep3 10s ease-in-out infinite backwards;bottom:-250px;left:-250px;animation-delay:7s}
        .beam4{animation:beamSweep4 18s ease-in-out infinite backwards;bottom:-250px;right:-250px;animation-delay:5s}
        @keyframes beamSweep1{0%{transform:translate(-40vw,-40vh);opacity:0}10%{opacity:0.55}40%{opacity:0.3}60%{opacity:0.5}80%{opacity:0.3}100%{transform:translate(130vw,130vh);opacity:0}}
        @keyframes beamSweep2{0%{transform:translate(40vw,-40vh);opacity:0}10%{opacity:0.5}40%{opacity:0.25}60%{opacity:0.45}80%{opacity:0.25}100%{transform:translate(-130vw,130vh);opacity:0}}
        @keyframes beamSweep3{0%{transform:translate(-40vw,40vh);opacity:0}10%{opacity:0.5}40%{opacity:0.25}60%{opacity:0.45}80%{opacity:0.25}100%{transform:translate(130vw,-130vh);opacity:0}}
        @keyframes beamSweep4{0%{transform:translate(40vw,40vh);opacity:0}10%{opacity:0.45}40%{opacity:0.25}60%{opacity:0.4}80%{opacity:0.25}100%{transform:translate(-130vw,-130vh);opacity:0}}}
        
        /* ===== 烛光摇曳 ===== */
        .candle-light{position:fixed;width:5px;height:5px;border-radius:50%;
          background:rgba(255,180,80,0.6);
          box-shadow:0 0 10px 3px rgba(255,160,50,0.25),0 0 20px 6px rgba(255,140,30,0.1);
          pointer-events:none;z-index:1}
        .cl1{animation:candleFlicker1 2.2s ease-in-out infinite alternate}
        .cl2{animation:candleFlicker2 2.8s ease-in-out infinite alternate}
        .cl3{animation:candleFlicker3 1.8s ease-in-out infinite alternate}
        @keyframes candleFlicker1{0%{opacity:0.25;transform:scale(0.8)}50%{opacity:0.65;transform:scale(1.15)}100%{opacity:0.3;transform:scale(0.85)}}
        @keyframes candleFlicker2{0%{opacity:0.3;transform:scale(0.85)}50%{opacity:0.7;transform:scale(1.1)}100%{opacity:0.2;transform:scale(0.75)}}
        @keyframes candleFlicker3{0%{opacity:0.2;transform:scale(0.75)}50%{opacity:0.55;transform:scale(1.2)}100%{opacity:0.35;transform:scale(0.9)}}
        
        /* ===== 光尘粒子（与烛光同色暖橙） ===== */
        .dust-particle{position:fixed;width:6px;height:6px;border-radius:50%;
          background:rgba(255,180,80,0.5);
          box-shadow:0 0 8px 3px rgba(255,160,50,0.2);
          pointer-events:none;z-index:1}
        @keyframes dustDrift1{0%{transform:translate(0,0);opacity:0}15%{opacity:0.5}50%{transform:translate(20vw,-15vh) scale(1.25);opacity:0.6}85%{opacity:0.35}100%{transform:translate(40vw,-30vh);opacity:0}}
        @keyframes dustDrift2{0%{transform:translate(0,0);opacity:0}15%{opacity:0.45}50%{transform:translate(-17.5vw,12.5vh) scale(1.2);opacity:0.55}85%{opacity:0.3}100%{transform:translate(-35vw,25vh);opacity:0}}
        @keyframes dustDrift3{0%{transform:translate(0,0);opacity:0}15%{opacity:0.5}50%{transform:translate(15vw,17.5vh) scale(1.3);opacity:0.6}85%{opacity:0.35}100%{transform:translate(30vw,35vh);opacity:0}}
        @keyframes dustDrift4{0%{transform:translate(0,0);opacity:0}15%{opacity:0.45}50%{transform:translate(-12.5vw,-15vh) scale(1.2);opacity:0.55}85%{opacity:0.3}100%{transform:translate(-25vw,-30vh);opacity:0}}
        @keyframes dustDrift5{0%{transform:translate(0,0);opacity:0}15%{opacity:0.4}50%{transform:translate(25vw,5vh) scale(1.15);opacity:0.5}85%{opacity:0.25}100%{transform:translate(50vw,10vh);opacity:0}}
        @keyframes dustDrift6{0%{transform:translate(0,0);opacity:0}15%{opacity:0.45}50%{transform:translate(-20vw,-5vh) scale(1.2);opacity:0.55}85%{opacity:0.25}100%{transform:translate(-40vw,-10vh);opacity:0}}
        @keyframes dustDrift7{0%{transform:translate(0,0);opacity:0}15%{opacity:0.35}50%{transform:translate(7.5vw,-22.5vh) scale(1.25);opacity:0.45}85%{opacity:0.25}100%{transform:translate(15vw,-45vh);opacity:0}}
        @keyframes dustDrift8{0%{transform:translate(0,0);opacity:0}15%{opacity:0.4}50%{transform:translate(-5vw,25vh) scale(1.2);opacity:0.5}85%{opacity:0.25}100%{transform:translate(-10vw,50vh);opacity:0}}

        /* 语音菜单动画 */
        @keyframes speechMenuFadeIn{0%{opacity:0;transform:scale(0.7)}100%{opacity:1;transform:scale(1)}}
        @keyframes speechMenuFadeOut{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.7)}}
        @keyframes speechFadeIn{0%{opacity:0;transform:scale(0.85)}100%{opacity:1;transform:scale(1)}}
        .speech-btn:hover{transform:scale(1.12) !important;box-shadow:0 6px 16px rgba(0,0,0,0.4) !important;}
        .speech-btn:active{transform:scale(0.95) !important;}
      `,document.head.appendChild(t)}}updateNowPlayingDisplay(e){const s=document.querySelector("#now-playing-display .npn-inner");if(!s)return;const t=e.split("/").pop()||e;s.innerHTML=`<span style="margin-right:24px">${t}</span><span style="margin-right:24px">${t}</span>`}initAtmosphere(){if(document.getElementById("game-atmosphere"))return;const e=document.createElement("div");e.id="game-atmosphere",e.className="atmos-full",e.innerHTML=`
      <div class="menu-beam beam1"></div>
      <div class="menu-beam beam2"></div>
      <div class="menu-beam beam3"></div>
      <div class="menu-beam beam4"></div>
      <!-- 烛火光点 -->
      <div class="candle-light cl1" style="top:35%;left:15%"></div>
      <div class="candle-light cl2" style="top:20%;right:18%"></div>
      <div class="candle-light cl3" style="bottom:25%;left:40%"></div>
      <!-- 光尘粒子（20个，与烛光同色暖橙） -->
      <div class="dust-particle" style="top:12%;left:20%;animation:dustDrift1 14s ease-in-out infinite backwards;animation-delay:0s"></div>
      <div class="dust-particle" style="top:55%;left:75%;animation:dustDrift2 16s ease-in-out infinite backwards;animation-delay:2s"></div>
      <div class="dust-particle" style="top:30%;left:45%;animation:dustDrift3 12s ease-in-out infinite backwards;animation-delay:4s"></div>
      <div class="dust-particle" style="top:78%;left:30%;animation:dustDrift4 18s ease-in-out infinite backwards;animation-delay:1s"></div>
      <div class="dust-particle" style="top:42%;left:80%;animation:dustDrift5 15s ease-in-out infinite backwards;animation-delay:6s"></div>
      <div class="dust-particle" style="top:18%;left:55%;animation:dustDrift6 13s ease-in-out infinite backwards;animation-delay:3s"></div>
      <div class="dust-particle" style="top:85%;left:60%;animation:dustDrift7 17s ease-in-out infinite backwards;animation-delay:7s"></div>
      <div class="dust-particle" style="top:35%;left:10%;animation:dustDrift8 14s ease-in-out infinite backwards;animation-delay:5s"></div>
      <div class="dust-particle" style="top:65%;left:35%;animation:dustDrift1 16s ease-in-out infinite backwards;animation-delay:8s"></div>
      <div class="dust-particle" style="top:8%;left:70%;animation:dustDrift2 12s ease-in-out infinite backwards;animation-delay:1s"></div>
      <div class="dust-particle" style="top:50%;left:15%;animation:dustDrift3 18s ease-in-out infinite backwards;animation-delay:9s"></div>
      <div class="dust-particle" style="top:90%;left:50%;animation:dustDrift4 13s ease-in-out infinite backwards;animation-delay:4s"></div>
      <div class="dust-particle" style="top:22%;left:88%;animation:dustDrift5 15s ease-in-out infinite backwards;animation-delay:11s"></div>
      <div class="dust-particle" style="top:70%;left:5%;animation:dustDrift6 11s ease-in-out infinite backwards;animation-delay:6s"></div>
      <div class="dust-particle" style="top:45%;left:50%;animation:dustDrift7 19s ease-in-out infinite backwards;animation-delay:2s"></div>
      <div class="dust-particle" style="top:5%;left:40%;animation:dustDrift8 14s ease-in-out infinite backwards;animation-delay:10s"></div>
      <div class="dust-particle" style="top:60%;left:68%;animation:dustDrift1 13s ease-in-out infinite backwards;animation-delay:3s"></div>
      <div class="dust-particle" style="top:28%;left:32%;animation:dustDrift2 17s ease-in-out infinite backwards;animation-delay:12s"></div>
      <div class="dust-particle" style="top:75%;left:22%;animation:dustDrift3 14s ease-in-out infinite backwards;animation-delay:0s"></div>
      <div class="dust-particle" style="top:15%;left:65%;animation:dustDrift4 16s ease-in-out infinite backwards;animation-delay:9s"></div>
      <div class="dust-particle" style="top:40%;left:92%;animation:dustDrift5 12s ease-in-out infinite backwards;animation-delay:5s"></div>
    `,document.body.insertBefore(e,document.body.firstChild)}updateAtmosphereIntensity(e){const s=document.getElementById("game-atmosphere");if(!s)return;const t=e==="menu";s.className=t?"atmos-full":"atmos-ambient"}playDrawSound(){if(this.soundVolume===0||this.drawSoundFiles.length===0)return;const e=this.drawSoundFiles[Math.floor(Math.random()*this.drawSoundFiles.length)],s=this.drawAudioPool[this.drawAudioIndex];this.drawAudioIndex=(this.drawAudioIndex+1)%this.drawAudioPool.length,s.src=e,s.currentTime=0,s.volume=this.soundVolume/100,s.play().catch(()=>{})}playWoodSound(){if(this.soundVolume===0||this.woodSoundFiles.length===0)return;const e=this.woodSoundFiles[Math.floor(Math.random()*this.woodSoundFiles.length)],s=this.woodAudioPool[this.woodAudioIndex];this.woodAudioIndex=(this.woodAudioIndex+1)%this.woodAudioPool.length,s.src=e,s.currentTime=0,s.volume=this.soundVolume/100,s.play().catch(()=>{})}playPendingSounds(){if(this.state.soundEffects&&this.state.soundEffects.length>0){for(const e of this.state.soundEffects)e==="wood"&&this.playWoodSound();this.state={...this.state,soundEffects:[]}}}async autoSetReadyAfterDeckImport(e){const{currentRoom:s,playerId:t,playerNickname:r}=this.state.online;if(!(!s||!t)&&e){const{setPlayerReady:i,getPlayerReady:n}=await fe(async()=>{const{setPlayerReady:l,getPlayerReady:d}=await import("./online-fGHm1H1u.js");return{setPlayerReady:l,getPlayerReady:d}},__vite__mapDeps([0,1]));if((await i(s.id,t,r,!0)).success){const l=await n(s.id);this.state=le(this.state,{type:"UPDATE_PLAYER_READY",playerReady:l})}const o=document.querySelector('.bottom-player-area [data-own-hero="true"]');o&&o.addEventListener("mouseup",l=>{if(this.attackingMinion&&!l.target.closest(".minion-card")&&!this.isAttacking){this.hideAttackArrow();const d=this.attackingMinion;this.attackingMinion=null,this.hideDefenseOverlayDOM();const c=this.state.phase==="onlineBattle",m=c?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,u=this.state.players[m].board.find(E=>E.id===d.id);if(!u)return;const p=u.keywords.some(E=>E.name==="连击"),b=u.keywords.some(E=>E.name==="狂怒"),g=u.keywords.some(E=>E.name==="嘲讽"),y=u.keywords.some(E=>E.name==="机动"),x=u.keywords.some(E=>E.name==="不动"),w=u.maxAttacksPerTurn||1,f=(u.attacksThisTurn||0)>=w;if(u.isDefending){const E=c?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=le(this.state,{type:"TOGGLE_DEFENSE",playerId:E,cardId:d.id}),this.render(),c){const S=this.state.online.currentRoom;S&&(fe(async()=>{const{broadcastGameAction:T}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:T}},__vite__mapDeps([0,1])).then(({broadcastGameAction:T})=>{T(S.id,{type:"STATE_SYNC",playerId:E}).catch(console.error)}),this.broadcastGameState())}return}if(!x&&!p&&!b&&!g&&(!u.hasAttacked||y)&&!f){const E=c?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=le(this.state,{type:"TOGGLE_DEFENSE",playerId:E,cardId:d.id}),this.render(),c){const S=this.state.online.currentRoom;S&&(fe(async()=>{const{broadcastGameAction:T}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:T}},__vite__mapDeps([0,1])).then(({broadcastGameAction:T})=>{T(S.id,{type:"STATE_SYNC",playerId:E}).catch(console.error)}),this.broadcastGameState())}}}})}}computeComparisonData(){const e={},s=this.state.groups;for(const t of s)for(const r of t.cards){const i=r.card.name;e[i]||(e[i]={count:0,groups:{}}),e[i].count+=r.count,e[i].groups[t.name]=(e[i].groups[t.name]||0)+r.count}return e}async autoSyncLocalDeckIfNeeded(){const{currentRoom:e,playerId:s,localDeckImport:t}=this.state.online;if(!e||!s||this.state.sharedDeck.length===0)return;const r=this.state.sharedDeck.reduce((n,a)=>n+a.count,0);if(!t||t.cardCount!==r){this.state=le(this.state,{type:"UPDATE_LOCAL_DECK_IMPORT",filename:"本地卡包",cardCount:r,entries:this.state.sharedDeck});try{const n=this.computeComparisonData(),{sendMessage:a}=await fe(async()=>{const{sendMessage:o}=await import("./online-fGHm1H1u.js");return{sendMessage:o}},__vite__mapDeps([0,1]));await a(e.id,s,"__SYSTEM__",`__DECK_DATA__|${r}|${JSON.stringify(n)}`),await a(e.id,s,"__SYSTEM__",`__DECK_IMPORT__|本地卡包|${r}`)}catch(n){console.error("[autoSyncLocalDeck] 同步失败:",n)}}}parseDeckDataMessage(e){const s=e.split("|");if(s.length<3)return null;const t=parseInt(s[1],10);try{const r=JSON.parse(s.slice(2).join("|"));return{cardCount:t,comparisonData:r}}catch{return null}}renderDeckPreview(){const e=this.state.groups;let s=0;const t=e.map(i=>{const n=[...i.cards].sort((o,l)=>{const d=c=>`${c.type==="hero"?"0":c.type==="minion"?"1":"2"}_${c.name}`;return d(o.card).localeCompare(d(l.card))}),a=n.reduce((o,l)=>o+l.count,0);return s+=a,{group:i,sortedCards:n,groupCount:a}});new Set(e.map(i=>i.id));const r=document.createElement("div");r.className="fixed inset-0 z-50 overflow-y-auto",r.style.cssText="background: rgba(0,0,0,0.6); padding: 20px;",r.id="deck-preview-overlay",r.innerHTML=`
      <div class="max-w-6xl mx-auto">
        <div class="flex justify-between items-center mb-4 p-4 rounded-2xl shadow-xl"
          style="background: rgba(255,255,255,0.97); border: 4px solid #d4c4a8;">
          <h2 class="text-2xl font-bold" style="color: #8b7355; font-family: 'Georgia', serif;">📋 卡包预览</h2>
          <div class="flex items-center gap-4">
            <span class="text-lg font-bold" style="color: #8b7355;">共 ${s} 张</span>
            <button id="close-preview-btn" class="px-6 py-2 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
              style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 3px solid #a08060;">
              关闭
            </button>
          </div>
        </div>

        ${t.map(({group:i,sortedCards:n,groupCount:a},o)=>`
          <div class="mb-6 p-4 rounded-2xl shadow-xl" style="background: rgba(255,255,255,0.95); border: 3px solid #d4c4a8;">
            <div class="flex items-center gap-3 mb-3">
              <button class="preview-collapse-btn text-lg font-bold transform hover:scale-110 transition-all cursor-pointer select-none"
                data-group-id="${i.id}"
                style="color: #a08060; line-height: 1; font-size: 18px; background: none; border: none; padding: 0 2px;">
                ▼
              </button>
              <span class="text-xl font-bold" style="color: #8b7355; font-family: 'Georgia', serif;">${i.name}</span>
              <hr class="flex-1" style="border-color: #d4c4a8; border-width: 1px; border-style: solid;">
              <span class="text-sm" style="color: #999;">(${a} 张)</span>
            </div>
            <div class="preview-cards-grid flex flex-wrap gap-3" data-group-id="${i.id}" style="justify-content: flex-start; align-items: flex-start;">
              ${n.length===0?'<div class="text-sm italic" style="color: #b0a090;">（空）</div>':""}
              ${n.map(l=>{const d=l.card,c=l.count,m=d.type==="hero";return`
                <div class="card-item-wrapper" style="display: flex; flex-direction: column; width: ${m?"225px":"150px"};">
                  <div class="card-item main-card-item w-full rounded-xl ${m?"aspect-[4/3]":"aspect-[2/3]"} shadow-md"
                    style="${this.getCardBgInline(d)} border: 3px solid #d4c4a8; box-shadow: 0 4px 12px rgba(0,0,0,0.15); position: relative;"
                    title="${d.name}">
                    ${m?"":`<div class="card-cost-badge">${d.cost}</div>`}
                    ${m?"":`<div class="card-count-badge">x${c}</div>`}
                    <div class="absolute left-1 right-1 text-center truncate font-bold"
                      style="top: 4px; color: white; font-size: 14px; z-index: 5; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 1px black;">
                      ${d.name}
                    </div>
                    ${m&&d.skills&&d.skills.length>0?`
                      <div class="hero-skills-row" style="position: absolute; bottom: 6px; left: 6px; display: flex; gap: 6px; z-index: 10; pointer-events: none;">
                        ${d.skills.map(h=>`
                          <div class="hero-skill-icon" title="${h.name}" style="position: relative; width: 36px; height: 36px;">
                            <div style="width: 36px; height: 36px; border-radius: 50%; background-image: url(${h.iconData||""}); background-size: cover; background-position: center; border: 2.5px solid #d4c4a8; box-shadow: 0 2px 8px rgba(0,0,0,0.35);"></div>
                            ${h.type==="passive"?`
                              <div style="position: absolute; bottom: -3px; right: -3px; width: 18px; height: 18px; background: url('/images/energy_gem_v2.png') center/cover no-repeat; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4));"></div>
                            `:`
                              <div style="position: absolute; bottom: -3px; right: -3px; width: 20px; height: 20px; background: url('/images/energy_gem_v2.png') center/cover no-repeat; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4));">
                                <span style="font-size: 10px; font-weight: bold; color: #fff; text-shadow: 0 0 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.5); line-height: 1;">${h.cost??1}</span>
                              </div>
                            `}
                          </div>
                        `).join("")}
                      </div>
                    `:""}
                    ${!m&&(d.keywords.length>0||this.getCardFullEffectText(d))?`
                      <div class="card-description-wrapper">
                        ${d.keywords.length>0?`
                          <div class="card-keywords-area">
                            ${d.keywords.map(h=>{const u=h.name==="护甲"?h.value??d.armorValue??1:"";return'<span class="card-keyword-tag">'+h.name+u+"</span>"}).join("")}
                          </div>
                        `:""}
                        ${this.getCardFullEffectText(d)?`
                          <div class="card-effect-area">${this.getCardFullEffectText(d)}</div>
                        `:""}
                      </div>
                    `:""}
                    ${!m&&d.type!=="spell"?`<div class="card-attack-badge">${d.attack}</div>`:""}
                    ${!m&&d.type!=="spell"?`<div class="card-health-badge">${d.health}</div>`:""}
                  </div>
                </div>
                `}).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `,document.body.appendChild(r),document.getElementById("close-preview-btn")?.addEventListener("click",()=>{r.remove()}),r.addEventListener("click",i=>{i.target===r&&r.remove()}),r.querySelectorAll(".preview-collapse-btn").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.groupId||"",a=r.querySelector(`.preview-cards-grid[data-group-id="${n}"]`);if(!a)return;const o=a.style.display==="none";a.style.display=o?"":"none",i.textContent=o?"▼":"▶"})}),document.querySelectorAll('.condition-side-check[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("change",n=>{n.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex],d=i.dataset.side;if(l.conditionSides||(l.conditionSides=["friendly"]),i.checked)l.conditionSides.includes(d)||l.conditionSides.push(d);else if(l.conditionSides.length>1)l.conditionSides=l.conditionSides.filter(m=>m!==d);else{l.conditionSides=["friendly"],i.checked=!0;return}this.render()})}),document.querySelectorAll('.condition-logic-radio[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("change",n=>{n.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex];l.conditionSideLogic=i.value,this.render()})}),document.querySelectorAll('.condition-op-btn[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("click",n=>{n.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex],d=i.dataset.op,c=l.conditionOperator||"=",m=c==="<"||c==="<=",h=c===">"||c===">=",u=c==="="||c==="<="||c===">=";let p=m,b=h,g=u;d==="<"?(b=!1,p=!m):d===">"?(p=!1,b=!h):d==="="&&(g=!u),p&&g?l.conditionOperator="<=":b&&g?l.conditionOperator=">=":p?l.conditionOperator="<":b?l.conditionOperator=">":l.conditionOperator="=",this.render()})}),document.querySelectorAll('.condition-value-input[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("input",n=>{n.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex];l.conditionValue=Math.max(0,parseInt(n.target.value)||0)})}),document.querySelectorAll('.condition-minion-name-input[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("input",n=>{n.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex];l.conditionMinionName=n.target.value})}),document.querySelectorAll('.condition-target-attr-check[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("change",n=>{n.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex],d=i.dataset.attr;l.conditionTargetAttrs||(l.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const c=l.conditionTargetAttrs;c[d].enabled=n.target.checked,this.render()})}),document.querySelectorAll('.condition-target-op-btn[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("click",n=>{n.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex],d=i.dataset.attr,c=i.dataset.op;l.conditionTargetAttrs||(l.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const m=l.conditionTargetAttrs,h=m[d].operator||"=",u=h==="<"||h==="<=",p=h===">"||h===">=",b=h==="="||h==="<="||h===">=";let g=u,y=p,x=b;c==="<"?(y=!1,g=!u):c===">"?(g=!1,y=!p):c==="="&&(x=!b),g&&x?m[d].operator="<=":y&&x?m[d].operator=">=":g?m[d].operator="<":y?m[d].operator=">":m[d].operator="=",this.render()})}),document.querySelectorAll('.condition-target-attr-input[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("input",n=>{n.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex],d=i.dataset.attr;l.conditionTargetAttrs||(l.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const c=l.conditionTargetAttrs;c[d].value=Math.max(0,parseInt(n.target.value)||0),this.render()})})}compareDecks(e,s,t,r){const i=new Set([...Object.keys(e),...Object.keys(s)]),n=[];for(const a of i){const o=e[a],l=s[a];if(!o)n.push(`${a} ${t}❌️ ${r}✔️`);else if(!l)n.push(`${a} ${t}✔️ ${r}❌️`);else if(o.count!==l.count)n.push(`${a} ${t}：${o.count}张 ${r}：${l.count}张❌️`);else{const d=JSON.stringify(o.groups),c=JSON.stringify(l.groups);if(d!==c){const m=new Set([...Object.keys(o.groups),...Object.keys(l.groups)]),h=[];for(const u of m){const p=o.groups[u]||0,b=l.groups[u]||0;p!==b&&h.push(`${u}:${t}${p}张/${r}${b}张`)}n.push(`${a} ${t}：${o.count}张 ${r}：${l.count}张 (卡组分布不一致:${h.join(";")})❌️`)}}}return n}render(){this.playPendingSounds();const e=this.state.phase;e!==this.lastPhase&&e==="cardManager"&&(this.lastDeckVersion=0,this.sortedCardList=[],(this.lastPhase==="menu"||this.lastPhase===""||this.lastPhase==="setup")&&(this.collapsedGroups=new Set(this.state.groups.map(l=>l.id)))),this.lastPhase==="cardManager"&&e!=="cardManager"&&(this.savedCardManagerScrollY=window.scrollY);const s=["room","mulligan","onlineBattle","onlineGameOver"],t=s.includes(this.lastPhase),r=s.includes(e);if(t&&!r&&this.unsubscribeFromRoom(),this.lastPhase,this.lastPhase=e,["menu","playing","mulligan","robotBattle","onlineBattle"].includes(this.state.phase)?(window.scrollTo(0,0),document.body.style.setProperty("overflow","hidden","important")):document.body.style.overflow="",this.switchBGMForScene(),this.updateAtmosphereIntensity(this.state.phase),this.state.phase==="menu")this.renderMenu();else if(this.state.phase==="setup")this.renderSetup();else if(this.state.phase==="robotSetup")this.renderSetup();else if(this.state.phase==="playing")this.renderGame(),this.state.newlyDrawnCardIds.length>0&&setTimeout(()=>this.playDrawCardAnimation(300),100),this.processPendingVisualEffects();else if(this.state.phase==="mulligan"){const l=this.state.online?.playerId&&this.state.online?.firstPlayerId;if(console.log("[render] mulligan phase",{isOnline:l,playerId:this.state.online?.playerId,firstPlayerId:this.state.online?.firstPlayerId,currentPlayerId:this.state.currentPlayerId}),l){this.renderOnlineBattle();const{playerId:d,firstPlayerId:c}=this.state.online,m=d===c;m&&this.state.mulliganDone<1||!m&&this.state.mulliganDone<2?this.renderMulliganOverlay():this.app.innerHTML+='<div id="mulligan-waiting" class="absolute inset-0 flex items-center justify-center bg-black/70 z-50"><div class="text-white text-2xl font-bold bg-gray-900/80 px-8 py-6 rounded-xl shadow-xl">等待对手换牌...</div></div>',this.processPendingVisualEffects()}else this.renderGame(),this.renderMulliganOverlay(),this.processPendingVisualEffects()}else if(this.state.phase==="gameOver")this.renderGame(),this.renderGameOver();else if(this.state.phase==="robotBattle"){if(this.renderGame(),this.state.currentPlayerId===2&&!this.robotTurnExecuting?setTimeout(()=>this.executeRobotTurn(),1500):this.state.currentPlayerId===1&&this.state.newlyDrawnCardIds.length>0&&setTimeout(()=>this.playDrawCardAnimation(300),100),this.processPendingVisualEffects(),this.state.currentPlayerId===1){this.robotCheckPlayerTurnReaction();const l=this.state.players[0],d=`${this.state.turnNumber}|${l.hand.length}|${l.board.length}|${l.energy}`;d!==this.speechLastActionSignature?(this.speechLastActionSignature=d,this.lastPlayerActionTimestamp=Date.now(),this.playerIdleTaunted=!1):!this.playerIdleTaunted&&Date.now()-this.lastPlayerActionTimestamp>1e4&&(this.robotSpeak("taunt",1),this.playerIdleTaunted=!0)}}else this.state.phase==="robotGameOver"?(this.renderGame(),this.renderRobotGameOver()):this.state.phase==="cardCreator"?this.renderCardCreator():this.state.phase==="heroEditor"?this.renderHeroEditor():this.state.phase==="cardManager"?this.renderCardManager():this.state.phase==="lobby"?this.renderLobby():this.state.phase==="room"?this.renderRoom():this.state.phase==="onlineBattle"?(console.log("[render] 路由到 renderOnlineBattle, isWaitingForGameState=",this.state.online.isWaitingForGameState),this.state.online.isWaitingForGameState?this.renderWaitingForGameState():this.renderOnlineBattle(),!this.state.online.isWaitingForGameState&&this.state.newlyDrawnCardIds.length>0&&setTimeout(()=>this.playDrawCardAnimation(300),100),this.processPendingVisualEffects()):this.state.phase==="onlineGameOver"&&(this.renderOnlineBattle(),this.renderOnlineGameOver());const n=this.state.phase==="menu"?`menu|${this.menuSubScreen}`:this.state.phase,o={mulligan:["playing","onlineBattle"],robotSetup:["robotBattle"],playing:["gameOver"],onlineBattle:["onlineGameOver"],robotBattle:["robotGameOver"]}[this._lastAnimatedRenderKey]?.includes(n);if(n!==this._lastAnimatedRenderKey){if(this._lastAnimatedRenderKey=n,this._suppressFirstRender)this._suppressFirstRender=!1;else if(!o){const l=Array.from(this.app.children);if(l.length>0){this.app.classList.add("page-enter-animating"),l.forEach(m=>m.classList.remove("page-enter")),this.app.firstElementChild?.offsetWidth,l.forEach(m=>m.classList.add("page-enter"));const d=l[l.length-1],c=()=>{this.app.classList.remove("page-enter-animating"),d.removeEventListener("animationend",c)};d.addEventListener("animationend",c)}}}}renderMenu(){if(this.menuSubScreen==="modeSelect"){this.renderModeSelect();return}if(this.menuSubScreen==="onlineLogin"){this.renderOnlineLogin();return}const e=this.savedGameState!==null;this.app.innerHTML=`
      
      <!-- 选项按钮（左上角） -->
      <button id="menu-options-btn" class="fixed top-4 left-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl font-bold transition-all hover:scale-110 z-50"
        style="background: linear-gradient(135deg, #c0a080 0%, #a08060 100%); border: 3px solid #8b7355; color: #fff;">
        ☰
      </button>
      
      <!-- 选项弹窗 -->
      ${this.showMenuOptions?`
        <div id="menu-options-overlay" class="fixed inset-0 flex items-center justify-center z-[2000]" style="background: rgba(0, 0, 0, 0.5);">
          <div class="p-8 rounded-2xl shadow-2xl text-center min-w-[280px]" style="background: rgba(245, 240, 230, 0.98); border: 4px solid #d4c4a8;">
            <h2 class="text-2xl font-bold mb-6" style="color: #5a4a3a; font-family: 'Georgia', serif;">选项</h2>
            <div class="flex flex-col gap-4">
              <button id="back-to-menu-btn" class="px-8 py-3 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #d4a574 0%, #c4956a 100%); color: #fff; border: 3px solid #b8956a;">
                <img src="/logo.png" alt="" style="width:28px;height:28px;vertical-align:middle;border-radius:4px;display:inline-block;image-rendering:pixelated;" />妙卡包
              </button>
              <div class="flex flex-col gap-3 px-4 py-3 rounded-lg"
                style="background: rgba(200, 180, 160, 0.2); border: 2px solid #d4c4a8;">
                <div class="flex items-center justify-between">
                  <span class="text-lg font-bold" style="color: #5a4a3a;">🔊 音效</span>
                  <span class="text-sm font-bold" style="color: #8b7355; min-width: 2em;" id="sound-volume-label">${this.soundVolume}%</span>
                </div>
                <input type="range" id="sound-volume" min="0" max="100" value="${this.soundVolume}"
                  class="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style="accent-color: #8b7355; background: #d4c4a8;">
              </div>
              <div class="flex flex-col gap-3 px-4 py-3 rounded-lg"
                style="background: rgba(200, 180, 160, 0.2); border: 2px solid #d4c4a8;">
                <div class="flex items-center justify-between">
                  <span class="text-lg font-bold" style="color: #5a4a3a;">🎵 音乐</span>
                  <span class="text-sm font-bold" style="color: #8b7355; min-width: 2em;" id="music-volume-label">${this.musicVolume}%</span>
                </div>
                <input type="range" id="music-volume" min="0" max="100" value="${this.musicVolume}"
                  class="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style="accent-color: #8b7355; background: #d4c4a8;">
              </div>
            </div>
          </div>
        </div>
      `:""}
      
      <div class="fixed inset-0 flex flex-col items-center justify-center" style="background: transparent; pointer-events: none;">
        <div style="pointer-events: auto;">
          <div class="text-center p-12 rounded-3xl shadow-2xl" style="background: url('/images/paper_texture_custom.png') center/cover, rgba(255, 255, 255, 0.97); border: 8px solid #d4c4a8;">
          <h1 class="text-6xl font-bold mb-8" style="color: #8b7355; text-shadow: 2px 2px 4px rgba(139, 115, 85, 0.2); font-family: 'Georgia', serif;">
            妙卡包
          </h1>
          <div class="flex flex-col gap-4">
            ${e?`
              <button id="continue-saved-btn" class="px-12 py-4 text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse" style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 4px solid #4a8a4a;">
                😡 继续
              </button>
            `:""}
            ${e?"":`
              <button id="start-btn" class="px-12 py-4 text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200" style="background: linear-gradient(135deg, #d4a574 0%, #c4956a 100%); color: #fff; border: 4px solid #b8956a;">
                ⚔️ 刷牌
              </button>
            `}
            <button id="card-creator-btn" class="px-12 py-4 text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200" style="background: linear-gradient(135deg, #d4a574 0%, #c4956a 100%); color: #fff; border: 4px solid #b8956a;">
              🎨 画牌
            </button>
            <button id="card-manager-btn" class="px-12 py-4 text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200" style="background: linear-gradient(135deg, #d4a574 0%, #c4956a 100%); color: #fff; border: 4px solid #b8956a;">
              📇 卡包
            </button>
          </div>
        </div>
        <div class="mt-4 text-sm text-center" style="color: #a08060;">
          作者：我去3000年
        </div>
      </div>
    `,document.getElementById("continue-saved-btn")?.addEventListener("click",()=>{this.savedGameState&&(this.state=this.savedGameState,this.savedGameState=null,this.render())}),document.getElementById("start-btn")?.addEventListener("click",()=>{this.menuSubScreen="modeSelect",this.render()}),document.getElementById("card-creator-btn")?.addEventListener("click",()=>{this.state=le(this.state,{type:"SHOW_CARD_CREATOR"}),this.render()}),document.getElementById("card-manager-btn")?.addEventListener("click",()=>{this.state=le(this.state,{type:"SHOW_CARD_MANAGER"}),this.render()}),document.getElementById("menu-options-btn")?.addEventListener("click",()=>{this.showMenuOptions=!0,this.render()}),document.getElementById("back-to-menu-btn")?.addEventListener("click",()=>{this.showMenuOptions=!1,this.render()}),document.getElementById("sound-volume")?.addEventListener("input",s=>{this.soundVolume=parseInt(s.target.value),localStorage.setItem("soundVolume",String(this.soundVolume));const t=document.getElementById("sound-volume-label");t&&(t.textContent=this.soundVolume+"%")}),document.getElementById("music-volume")?.addEventListener("input",s=>{const t=this.musicVolume;this.musicVolume=parseInt(s.target.value),localStorage.setItem("musicVolume",String(this.musicVolume));const r=document.getElementById("music-volume-label");r&&(r.textContent=this.musicVolume+"%");const i=document.getElementById("now-playing-display");i&&(i.style.display=this.musicVolume===0?"none":""),this.musicVolume>0?t===0?this.startBackgroundMusic():this.bgMusic&&(this.bgMusic.volume=this.musicVolume/100):this.stopBackgroundMusic()}),document.getElementById("menu-options-overlay")?.addEventListener("click",s=>{s.target.id==="menu-options-overlay"&&(this.showMenuOptions=!1,this.render())})}renderModeSelect(){this.app.innerHTML=`
      <div class="min-h-screen flex items-center justify-center" style="background: transparent;">
        <div class="text-center p-12 rounded-3xl shadow-2xl" style="background: url('/images/paper_texture_custom.png') center/cover, rgba(255, 255, 255, 0.95); border: 8px solid #d4c4a8; ${this.isPortraitMode?"transform: scale(0.8); transform-origin: center center;":""}">
          <h2 class="text-4xl font-bold mb-8" style="color: #8b7355; font-family: 'Georgia', serif;">
            ⚔️ 选择对战模式
          </h2>
          <div class="flex flex-col gap-4">
            <button id="local-play-btn" class="px-12 py-4 text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200" style="background: linear-gradient(135deg, #d4a574 0%, #c4956a 100%); color: #fff; border: 4px solid #b8956a;">
              💻 本机对战
            </button>
            <button id="robot-play-btn" class="px-12 py-4 text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200" style="background: linear-gradient(135deg, #a0a0a0 0%, #808080 100%); color: #fff; border: 4px solid #606060;">
              🤖 Robot对战
            </button>
            <button id="online-play-btn" class="px-12 py-4 text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200" style="background: linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%); color: #fff; border: 4px solid #3d85c6;">
              🌐 远程联机 (beta)
            </button>
            <hr class="my-2" style="border-color: #d4c4a8;">
            <button id="back-btn" class="px-8 py-3 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all" style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 3px solid #a08060;">
              ← 返回
            </button>
          </div>
        </div>
      </div>
    `,(async()=>{try{const{isSupabaseConfigured:e}=await fe(async()=>{const{isSupabaseConfigured:t}=await import("./supabase-client-CcfVv7ux.js");return{isSupabaseConfigured:t}},[]),s=document.getElementById("online-play-btn");s&&!e()&&(s.textContent="📲 局域网联机 (beta)")}catch{}})(),document.getElementById("local-play-btn")?.addEventListener("click",()=>{this.state=le(this.state,{type:"SHOW_SETUP"}),this.render()}),document.getElementById("robot-play-btn")?.addEventListener("click",()=>{this.state=le(this.state,{type:"SHOW_ROBOT_SETUP"}),this.render()}),document.getElementById("online-play-btn")?.addEventListener("click",async()=>{this.menuSubScreen="onlineLogin",this.onlineLoginError=null;try{const{isSupabaseConfigured:e}=await fe(async()=>{const{isSupabaseConfigured:s}=await import("./supabase-client-CcfVv7ux.js");return{isSupabaseConfigured:s}},[]);e()||localStorage.setItem("force_transport","local")}catch{localStorage.setItem("force_transport","local")}this.render()}),document.getElementById("back-btn")?.addEventListener("click",()=>{this.menuSubScreen="",this.render()})}renderOnlineLogin(){if(this.onlineLoginError){this.app.innerHTML=`
        <div class="min-h-screen flex items-center justify-center" style="background: transparent;">
          <div class="text-center p-12 rounded-3xl shadow-2xl" style="background: url('/images/paper_texture_custom.png') center/cover, rgba(255, 255, 255, 0.95); border: 8px solid #d4c4a8; ${this.isPortraitMode?"transform: scale(0.8); transform-origin: center center;":""}">
            <h2 class="text-4xl font-bold mb-8" style="color: #8b7355; font-family: 'Georgia', serif;">
              🌐 远程联机
            </h2>
            <div class="p-6 rounded-xl mb-6" style="background: rgba(224, 112, 112, 0.2); border: 2px solid #e07070;">
              <p class="text-lg" style="color: #c05050;">⚠️ ${this.onlineLoginError}</p>
              <p class="text-sm mt-2" style="color: #8b7355;">请确保环境变量 COZE_SUPABASE_URL 和 COZE_SUPABASE_ANON_KEY 已正确配置</p>
            </div>
            <button id="back-to-menu-btn" class="px-8 py-3 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
              style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 3px solid #a08060;">
              返回主菜单
            </button>
          </div>
        </div>
      `,document.getElementById("back-to-menu-btn")?.addEventListener("click",()=>{this.menuSubScreen="",this.render()});return}const e=localStorage.getItem("miaoKaBao_nickname")||"";this.app.innerHTML=`
      <div class="min-h-screen flex items-center justify-center" style="background: transparent;">
        <div class="text-center p-12 rounded-3xl shadow-2xl" style="background: url('/images/paper_texture_custom.png') center/cover, rgba(255, 255, 255, 0.95); border: 8px solid #d4c4a8;">
          <h2 class="text-4xl font-bold mb-8" style="color: #8b7355; font-family: 'Georgia', serif;">
            🌐 远程联机
          </h2>
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <label class="text-xl font-bold w-24" style="color: #a08060;">昵称:</label>
              <input type="text" id="online-nickname" placeholder="请输入你的昵称" value="${e}"
                class="px-4 py-3 rounded-lg text-lg w-64 outline-none"
                style="border: 3px solid #d4c4a8; background: #faf8f5;">
            </div>
            <div class="flex gap-4 justify-center mt-8">
              <button id="back-to-menu-btn" class="px-8 py-3 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 3px solid #a08060;">
                ← 返回
              </button>
              <button id="enter-lobby-btn" class="px-8 py-3 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%); color: #fff; border: 3px solid #3d85c6;">
                进入大厅
              </button>
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("back-to-menu-btn")?.addEventListener("click",()=>{this.menuSubScreen="",this.render()}),document.getElementById("enter-lobby-btn")?.addEventListener("click",async()=>{const s=document.getElementById("online-nickname").value.trim();if(!s){alert("请输入昵称");return}localStorage.setItem("miaoKaBao_nickname",s);const t=`player_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;this.state=le(this.state,{type:"SHOW_LOBBY",playerId:t,playerNickname:s}),this.render()})}renderLobby(){const{playerId:e,playerNickname:s}=this.state.online;this.app.innerHTML=`
      <div class="min-h-screen p-8" style="background: transparent;">
        <div class="max-w-4xl mx-auto">
          <!-- 顶部栏 -->
          <div class="flex items-center justify-between mb-6 p-4 rounded-2xl shadow-xl" style="background: rgba(255, 255, 255, 0.95); border: 4px solid #d4c4a8;">
            <div class="flex items-center gap-4">
              <button id="leave-lobby-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 3px solid #a08060;">
                ← 返回
              </button>
              <h2 class="text-3xl font-bold" style="color: #8b7355; font-family: 'Georgia', serif;">🌐 联机大厅</h2>
            </div>
            <div class="flex items-center gap-2 px-4 py-2 rounded-xl" style="background: rgba(111, 168, 220, 0.2); border: 2px solid #6fa8dc;">
              <span style="color: #5a4a3a;">👤</span>
              <span class="font-bold" style="color: #4a90d9;">${s}</span>
            </div>
          </div>

          <!-- 创建房间 -->
          <div class="mb-6 p-6 rounded-2xl shadow-xl" style="background: rgba(255, 255, 255, 0.95); border: 4px solid #d4c4a8;">
            <h3 class="text-xl font-bold mb-4" style="color: #8b7355;">创建房间</h3>
            <div class="flex gap-4 items-end">
              <div class="flex-1">
                <label class="block text-sm font-bold mb-1" style="color: #a08060;">房间名称</label>
                <input type="text" id="room-name" placeholder="输入房间名称"
                  class="w-full px-4 py-2 rounded-lg outline-none"
                  style="border: 2px solid #d4c4a8; background: #faf8f5;">
              </div>
              <div class="w-40">
                <label class="block text-sm font-bold mb-1" style="color: #a08060;">密码（可选）</label>
                <input type="text" id="room-password" placeholder="留空为无密码"
                  class="w-full px-4 py-2 rounded-lg outline-none"
                  style="border: 2px solid #d4c4a8; background: #faf8f5;">
              </div>
              <button id="create-room-btn" class="px-6 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%); color: #fff; border: 3px solid #3d85c6;">
                创建房间
              </button>
            </div>
          </div>

          <!-- 房间列表 -->
          <div class="p-6 rounded-2xl shadow-xl" style="background: rgba(255, 255, 255, 0.95); border: 4px solid #d4c4a8;">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold" style="color: #8b7355;">房间列表</h3>
              <button id="refresh-rooms-btn" class="px-4 py-1 text-sm font-bold rounded-lg"
                style="background: rgba(111, 168, 220, 0.3); color: #4a90d9; border: 2px solid #6fa8dc;">
                🔄 刷新
              </button>
            </div>
            <div id="rooms-list" class="space-y-2">
              <div class="text-center py-8" style="color: #a08060;">
                加载中...
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.loadRooms(),document.getElementById("leave-lobby-btn")?.addEventListener("click",()=>{this.state=le(this.state,{type:"BACK_TO_MENU"}),this.render()}),document.getElementById("refresh-rooms-btn")?.addEventListener("click",()=>{this.loadRooms()}),document.getElementById("create-room-btn")?.addEventListener("click",async t=>{const r=t.target;if(r.disabled)return;const n=document.getElementById("room-name").value.trim()||s,a=document.getElementById("room-password").value.trim()||null;r.disabled=!0,r.textContent="创建中...";try{const{createRoom:o}=await fe(async()=>{const{createRoom:d}=await import("./online-fGHm1H1u.js");return{createRoom:d}},__vite__mapDeps([0,1])),l=await o(n,a,e,s);l.success&&l.room?(this.state=le(this.state,{type:"SHOW_ROOM",room:l.room,playerId:e,playerNickname:s}),this.render()):(alert(`创建房间失败: ${l.error||"未知错误"}，请重试`),r.disabled=!1,r.textContent="创建房间")}catch(o){console.error("创建房间失败:",o),alert("创建房间失败，请检查网络连接"),r.disabled=!1,r.textContent="创建房间"}})}async loadRooms(){try{const{getRooms:e}=await fe(async()=>{const{getRooms:r}=await import("./online-fGHm1H1u.js");return{getRooms:r}},__vite__mapDeps([0,1])),s=await e(),t=document.getElementById("rooms-list");if(!t)return;if(s.length===0){t.innerHTML=`
          <div class="text-center py-8" style="color: #a08060;">
            暂无可加入的房间，创建一个吧！
          </div>
        `;return}t.innerHTML=s.map(r=>`
        <div class="flex items-center justify-between p-4 rounded-xl transition-all hover:shadow-lg"
          style="background: rgba(212, 196, 168, 0.2); border: 2px solid #d4c4a8;">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold"
              style="background: linear-gradient(135deg, #d4a574 0%, #c4956a 100%); color: #fff;">
              ${r.room_name.charAt(0)}
            </div>
            <div>
              <div class="font-bold" style="color: #5a4a3a;">${r.room_name}</div>
              <div class="text-sm" style="color: #8b7355;">
                房主: ${r.host_nickname} ${r.password?"🔒 有密码":""}
              </div>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <span class="px-3 py-1 rounded-lg text-sm font-bold"
              style="background: ${(r.player_count||0)>=2?"rgba(224, 112, 112, 0.3)":"rgba(124, 184, 124, 0.3)"}; color: ${(r.player_count||0)>=2?"#c05050":"#5a9a5a"};">
              ${r.player_count||0}/2
            </span>
            <button class="join-room-btn px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
              data-room-id="${r.id}"
              data-has-password="${r.password?"true":"false"}"
              ${(r.player_count||0)>=2?'disabled style="background: #ccc; color: #888; border: 2px solid #aaa; cursor: not-allowed;"':'style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;"'}>
              ${(r.player_count||0)>=2?"已满":"加入"}
            </button>
          </div>
        </div>
      `).join(""),document.querySelectorAll(".join-room-btn:not([disabled])").forEach(r=>{r.addEventListener("click",async()=>{const i=parseInt(r.getAttribute("data-room-id")||"0");r.getAttribute("data-has-password")==="true"?this.showPasswordDialog(i):await this.joinRoom(i)})})}catch(e){console.error("加载房间列表失败:",e);const s=document.getElementById("rooms-list");s&&(s.innerHTML=`
          <div class="text-center py-8" style="color: #e07070;">
            加载失败，请点击刷新重试
          </div>
        `)}}showPasswordDialog(e){const s=document.createElement("div");s.className="fixed inset-0 flex items-center justify-center z-50",s.style.background="rgba(0, 0, 0, 0.5)",s.innerHTML=`
      <div class="p-6 rounded-2xl shadow-2xl" style="background: rgba(255, 255, 255, 0.98); border: 4px solid #d4c4a8;">
        <h4 class="text-xl font-bold mb-4" style="color: #8b7355;">🔒 输入房间密码</h4>
        <input type="password" id="room-password-input" placeholder="请输入密码"
          class="w-full px-4 py-2 rounded-lg outline-none mb-4"
          style="border: 2px solid #d4c4a8; background: #faf8f5;">
        <div class="flex gap-4 justify-center">
          <button id="cancel-password-btn" class="px-4 py-2 font-bold rounded-lg"
            style="background: #ccc; color: #5a4a3a; border: 2px solid #aaa;">
            取消
          </button>
          <button id="confirm-password-btn" class="px-4 py-2 font-bold rounded-lg"
            style="background: linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%); color: #fff; border: 3px solid #3d85c6;">
            确认
          </button>
        </div>
      </div>
    `,document.body.appendChild(s),document.getElementById("cancel-password-btn")?.addEventListener("click",()=>{s.remove()}),document.getElementById("confirm-password-btn")?.addEventListener("click",async()=>{const t=document.getElementById("room-password-input").value;s.remove(),await this.joinRoom(e,t)})}async joinRoom(e,s){const{playerId:t,playerNickname:r}=this.state.online;try{const{joinRoom:i}=await fe(async()=>{const{joinRoom:a}=await import("./online-fGHm1H1u.js");return{joinRoom:a}},__vite__mapDeps([0,1])),n=await i(e,t,r,s);n.success&&n.room?(this.state=le(this.state,{type:"SHOW_ROOM",room:n.room,playerId:t,playerNickname:r}),this.render()):alert(n.error||"加入房间失败")}catch(i){console.error("加入房间失败:",i),alert("加入房间失败，请检查网络连接")}}renderRoom(){const{playerId:e,playerNickname:s,currentRoom:t,messages:r,playerReady:i}=this.state.online;if(!t){this.state=le(this.state,{type:"SHOW_LOBBY",playerId:e,playerNickname:s}),this.render();return}const n=t.host_id===e,a=i.find(A=>A.player_id===e),o=i.filter(A=>A.is_ready).length,l=o>=2,d=n&&l,c=this.state.online.localDeckImport;console.log("[DEBUG] renderRoom myImport:",c,"phase:",this.state.phase);const h=Object.values(this.state.online.remoteDeckImports)[0],u=!!c&&!!h&&c.filename===h.filename&&c.cardCount===h.cardCount;a?.is_ready;const p=i[0],b=i[1];this.app.innerHTML=`
      <div class="min-h-screen p-8" style="background: transparent;">
        <div class="max-w-4xl mx-auto">
          <!-- 顶部栏 -->
          <div class="flex items-center justify-between mb-6 p-4 rounded-2xl shadow-xl" style="background: rgba(255, 255, 255, 0.95); border: 4px solid #d4c4a8;">
            <div class="flex items-center gap-4">
              <button id="leave-room-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: 3px solid #a04040;">
                ← 离开房间
              </button>
              <div>
                <h2 class="text-2xl font-bold" style="color: #8b7355; font-family: 'Georgia', serif;">🏠 ${t.room_name}</h2>
                <div class="text-sm" style="color: #8b7355;">房间ID: ${t.id}</div>
              </div>
            </div>
            <div class="flex items-center gap-2 px-4 py-2 rounded-xl" style="background: rgba(111, 168, 220, 0.2); border: 2px solid #6fa8dc;">
              <span style="color: #5a4a3a;">👤</span>
              <span class="font-bold" style="color: #4a90d9;">${s}</span>
              <span class="text-xs" style="color: #8b7355;">${n?"(房主)":"(访客)"}</span>
            </div>
          </div>

          <div class="flex gap-6">
            <!-- 左侧：玩家区域 -->
            <div class="w-1/3">
              <div class="p-6 rounded-2xl shadow-xl" style="background: rgba(255, 255, 255, 0.95); border: 4px solid #d4c4a8;">
                <h3 class="text-xl font-bold mb-4" style="color: #8b7355;">对战玩家</h3>
                
                <!-- 准备玩家大框 -->
                <div class="space-y-3 mb-4">
                  <!-- 玩家1 -->
                  <div class="p-4 rounded-xl flex items-center gap-3 ${p?"":"opacity-50"}"
                    style="background: ${p?.player_id===e?"rgba(111, 168, 220, 0.2)":"rgba(212, 196, 168, 0.2)"}; border: 3px solid ${p?.player_id===e?"#6fa8dc":"#d4c4a8"};">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl hero-select-trigger"
                      data-player-id="${p?.player_id||""}"
                      style="background: linear-gradient(135deg, #d4a574 0%, #c4956a 100%); color: #fff; border: 2px solid #b8956a; ${this.state.online.heroSelections[p?.player_id||""]?"background: none; border: 2px solid #b8956a; overflow: hidden; padding: 0;":""}">
                      ${this.state.online.heroSelections[p?.player_id||""]?`<img src="${this.state.online.heroSelections[p?.player_id||""]?.imageData||""}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`:p?p.player_nickname.charAt(0):"?"}
                    </div>
                    <div class="flex-1">
                      <div class="font-bold text-lg" style="color: #5a4a3a;">${p?.player_nickname||"等待中..."}</div>
                      <div class="text-sm" style="color: ${p?.is_ready?"#7cb87c":"#d4a574"};">${p?.is_ready?"✓ 已准备":"⏳ 等候中"}</div>
                    </div>
                    ${p?.player_id===t.host_id?'<span class="text-lg">👑</span>':""}
                  </div>
                  
                  <!-- 玩家2 -->
                  <div class="p-4 rounded-xl flex items-center gap-3 ${b?"":"opacity-50"}"
                    style="background: ${b?.player_id===e?"rgba(111, 168, 220, 0.2)":"rgba(212, 196, 168, 0.2)"}; border: 3px solid ${b?.player_id===e?"#6fa8dc":"#d4c4a8"};">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl hero-select-trigger"
                      data-player-id="${b?.player_id||""}"
                      style="background: linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%); color: #fff; border: 2px solid #3d85c6; ${this.state.online.heroSelections[b?.player_id||""]?"background: none; border: 2px solid #3d85c6; overflow: hidden; padding: 0;":""}">
                      ${this.state.online.heroSelections[b?.player_id||""]?`<img src="${this.state.online.heroSelections[b?.player_id||""]?.imageData||""}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`:b?b.player_nickname.charAt(0):"?"}
                    </div>
                    <div class="flex-1">
                      <div class="font-bold text-lg" style="color: #5a4a3a;">${b?.player_nickname||"等待中..."}</div>
                      <div class="text-sm" style="color: ${b?.is_ready?"#7cb87c":"#d4a574"};">${b?.is_ready?"✓ 已准备":"⏳ 等候中"}</div>
                    </div>
                  </div>
                </div>
                
                <!-- 卡包导入状态 -->
                <div class="mb-4 p-3 rounded-xl" style="background: rgba(212, 196, 168, 0.15); border: 2px solid #d4c4a8;">
                  <div class="text-sm font-bold mb-2" style="color: #8b7355;">卡包信息</div>
                  <div class="space-y-1 text-xs">
                    ${i.map(A=>{const R=A.player_id===e,_=R?c:this.state.online.remoteDeckImports[A.player_id],B=R?c?c.cardCount:this.state.sharedDeck.reduce(($,N)=>$+N.count,0):_?_.cardCount:0;return`<div class="flex justify-between">
                        <span style="color: #5a4a3a;">${A.player_nickname}:</span>
                        <span style="color: ${B>0?"#5a9a5a":"#a08060"};">${B>0?B+" 张卡":"未导入"}</span>
                      </div>`}).join("")}
                  </div>
                  <div class="flex gap-2 mt-2">
                    <button id="preview-deck-btn" class="flex-1 px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                      style="background: linear-gradient(135deg, #c9a87c 0%, #b89570 100%); color: #fff; border: 2px solid #a08060; font-size: 14px;">
                      📋 预览
                    </button>
                    <button id="ready-toggle-btn" class="flex-1 px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                      style="background: ${a?.is_ready?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)"}; color: #fff; border: 2px solid ${a?.is_ready?"#a04040":"#4a8a4a"}; font-size: 14px; cursor: pointer;">
                      ${a?.is_ready?"❌️ 取消":"✔ 准备"}
                    </button>
                  </div>
                </div>

                <!-- 操作按钮 -->
                <div class="space-y-3">
                  <!-- 已准备人数提示 -->
                  <div class="text-center text-sm" style="color: ${o>=2?"#c05050":"#8b7355"};">
                    📊 已准备：${o}/2 人 ${o>=2?"(已满)":""}
                  </div>

                  ${n?`
                    <button id="start-game-btn" class="w-full px-4 py-3 font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all ${d?"":"opacity-50"}"
                      style="background: linear-gradient(135deg, #f5a623 0%, #d48a1c 100%); color: #fff; border: 3px solid #b8956a;"
                      ${d?"":"disabled"}>
                      ⚔️ 开始游戏
                    </button>
                    ${d?"":'<div class="text-center text-sm" style="color: #a08060;">需要双方准备完毕才能开始</div>'}
                  `:""}
                </div>
              </div>
            </div>

            <!-- 右侧：聊天框 -->
            <div class="flex-1">
              <div class="p-6 rounded-2xl shadow-xl h-full flex flex-col" style="background: rgba(255, 255, 255, 0.95); border: 4px solid #d4c4a8;">
                <h3 class="text-xl font-bold mb-4" style="color: #8b7355;">聊天</h3>
                
                <!-- 消息列表 -->
                <div id="messages-container" class="flex-1 overflow-y-auto space-y-2 mb-4 p-2 rounded-xl" style="background: rgba(212, 196, 168, 0.1); min-height: 300px; max-height: 400px;">
                  ${r.filter(A=>A.sender_nickname!=="__SYSTEM__").length===0?`
                    <div class="text-center py-8" style="color: #a08060;">
                      暂无消息，发送第一条消息吧！
                    </div>
                  `:r.filter(A=>A.sender_nickname!=="__SYSTEM__").map(A=>`
                    <div class="p-2 rounded-lg ${A.sender_id===e?"ml-8":"mr-8"}"
                      style="background: ${A.sender_id===e?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"};">
                      <div class="text-xs font-bold mb-1" style="color: ${A.sender_id===e?"#4a90d9":"#8b7355"};">
                        ${A.sender_nickname}
                      </div>
                      <div style="color: #5a4a3a;">${A.message}</div>
                    </div>
                  `).join("")}
                </div>
                
                <!-- 发送消息 -->
                <div class="flex gap-2">
                  <input type="text" id="message-input" placeholder="输入消息..."
                    class="flex-1 px-4 py-2 rounded-lg outline-none"
                    style="border: 2px solid #d4c4a8; background: #faf8f5;">
                  <button id="send-message-btn" class="px-6 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                    style="background: linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%); color: #fff; border: 3px solid #3d85c6;">
                    发送
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          <!-- 英雄选择弹窗 -->
          <div id="online-hero-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center" style="background: rgba(0, 0, 0, 0.6);">
            <div class="p-6 rounded-2xl shadow-2xl max-w-lg w-full mx-4" style="background: #faf8f5; border: 4px solid #d4c4a8;">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold" style="color: #8b7355;">选择英雄牌</h3>
                <button id="close-online-hero-select" class="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                  style="background: #e8dfd0; color: #8b7355;">✕</button>
              </div>
              <div id="online-hero-select-list" class="grid grid-cols-3 gap-3 max-h-64 overflow-y-auto p-2">
                <!-- 英雄牌列表动态生成 -->
              </div>
              <div id="online-hero-empty" class="hidden text-center py-8" style="color: #a08060;">
                暂无英雄牌，请先在卡牌编辑中创建并加入卡包
              </div>
            </div>
          </div>

    `,this.loadRoomData();const g=document.getElementById("leave-room-btn");g&&(g.onclick=async()=>{try{await this.unsubscribeFromRoom();const{leaveRoom:A}=await fe(async()=>{const{leaveRoom:R}=await import("./online-fGHm1H1u.js");return{leaveRoom:R}},__vite__mapDeps([0,1]));await A(t.id,e),this.state=le(this.state,{type:"LEAVE_ROOM"}),this.render()}catch(A){console.error("离开房间失败:",A),this.state=le(this.state,{type:"LEAVE_ROOM"}),this.render()}}),document.querySelectorAll(".hero-select-trigger").forEach(A=>{A.onclick=R=>{console.debug("[HeroSelect] 头像被点击, data-player-id:",A.getAttribute("data-player-id"));const _=A.getAttribute("data-player-id");if(!_){console.debug("[HeroSelect] 无 playerId，跳过");return}const B=document.getElementById("online-hero-modal");if(!B){console.debug("[HeroSelect] 未找到 online-hero-modal 弹窗");return}console.debug("[HeroSelect] 弹窗元素存在，继续",B);let $=[];try{const Z=(window.__gameState||this.state).groups||[{id:Me,name:"公用卡组",cards:[]}];for(const se of Z)for(const Y of se.cards)Y.card.type==="hero"&&$.push(Y.card)}catch(ne){console.error("获取英雄列表失败:",ne);return}if($.length===0)return;const N=this.state.online?.currentRoom;if(N&&this.state.online?.heroSelections){const ne=N.host_id===_?N.guest_id:N.host_id;if(ne){const Z=this.state.online.heroSelections[ne];Z&&($=$.filter(se=>se.id!==Z.id))}}if($.length===0)return;const J=document.getElementById("online-hero-select-list"),U=document.getElementById("online-hero-empty");J&&(J.innerHTML="",U.classList.add("hidden"),J.innerHTML=$.map(ne=>`
          <div class="cursor-pointer rounded-xl p-2 transition-all transform hover:scale-105 online-hero-option" data-hero-card='${JSON.stringify(ne).replace(/'/g,"&#39;")}' style="background: #f5f0e8; border: 2px solid transparent;">
            <div class="w-full rounded-lg overflow-hidden mb-1" style="aspect-ratio: 4/3;">
              ${ne.imageData?`<img src="${ne.imageData}" class="w-full h-full object-cover">`:'<div class="w-full h-full flex items-center justify-center" style="background: #e8dfd0;"><span style="font-size: 2rem;">🦸</span></div>'}
            </div>
            <div class="text-xs font-bold text-center truncate" style="color: #5a4a3a;">${ne.name}</div>
          </div>
        `).join(""),B.classList.remove("hidden"),J.querySelectorAll(".online-hero-option").forEach(ne=>{ne.addEventListener("click",()=>{try{const Z=JSON.parse(ne.getAttribute("data-hero-card")||"{}");this.state=le(this.state,{type:"SET_ONLINE_HERO",playerId:_,heroCard:Z}),this.render(),this.state.online?.currentRoom&&fe(async()=>{const{sendMessage:se}=await import("./online-fGHm1H1u.js");return{sendMessage:se}},__vite__mapDeps([0,1])).then(({sendMessage:se})=>{se(this.state.online.currentRoom.id,this.state.online.playerId,"__SYSTEM__",`__HERO_SELECT__|${JSON.stringify({playerId:_,heroCard:Z})}`)})}catch(Z){console.error("选择英雄失败:",Z)}B.classList.add("hidden")})}))}});const y=document.getElementById("close-online-hero-select");y&&(y.onclick=()=>{const A=document.getElementById("online-hero-modal");A&&A.classList.add("hidden")});const x=document.getElementById("online-hero-modal");x&&x.addEventListener("click",A=>{A.target===x&&x.classList.add("hidden")});const w=document.getElementById("start-game-btn");w&&(w.onclick=async()=>{if(!d)return;const A=this.state.online.remoteDeckImports,R=Object.keys(A).find(U=>U!==e),_=R?A[R]:null,B=this.computeComparisonData();if(!_||!_.comparisonData){alert("尚未收到对方的卡包信息，请稍后重试");return}const $=s,N=_.playerNickname,J=this.compareDecks(B,_.comparisonData,$,N);if(J.length>0){try{const{sendMessage:U}=await fe(async()=>{const{sendMessage:ne}=await import("./online-fGHm1H1u.js");return{sendMessage:ne}},__vite__mapDeps([0,1]));await U(t.id,e,"__SYSTEM__","⚠️ 卡包信息不一致！");for(const ne of J)await U(t.id,e,"__SYSTEM__",ne);typeof this.loadMessages=="function"&&this.loadMessages()}catch(U){console.error("发送卡包差异消息失败:",U)}return}try{const{startGame:U}=await fe(async()=>{const{startGame:Z}=await import("./online-fGHm1H1u.js");return{startGame:Z}},__vite__mapDeps([0,1]));await U(t.id)?await this.enterOnlineBattle():alert("开始游戏失败")}catch(U){console.error("开始游戏失败:",U),alert("开始游戏失败")}});const f=document.getElementById("preview-deck-btn");f&&(f.onclick=()=>{this.renderDeckPreview()});const v=document.getElementById("ready-toggle-btn");v&&(v.onclick=async()=>{try{const{setPlayerReady:A,getPlayerReady:R}=await fe(async()=>{const{setPlayerReady:$,getPlayerReady:N}=await import("./online-fGHm1H1u.js");return{setPlayerReady:$,getPlayerReady:N}},__vite__mapDeps([0,1])),_=!a?.is_ready,B=await A(t.id,e,s,_);if(B.success){const $=await R(t.id);this.state=le(this.state,{type:"UPDATE_PLAYER_READY",playerReady:$}),this.render()}else alert(B.error||"操作失败")}catch(A){console.error("准备状态切换失败:",A)}});const E=async()=>{const A=document.getElementById("message-input"),R=A.value.trim();if(R)try{const{sendMessage:_}=await fe(async()=>{const{sendMessage:B}=await import("./online-fGHm1H1u.js");return{sendMessage:B}},__vite__mapDeps([0,1]));await _(t.id,e,s,R),A.value="",await this.loadMessages()}catch(_){console.error("发送消息失败:",_)}},S=document.getElementById("send-message-btn");S&&(S.onclick=E);const T=document.getElementById("message-input");T&&(T.onkeypress=A=>{A.key==="Enter"&&E()}),setTimeout(()=>{this.autoSyncLocalDeckIfNeeded().catch(A=>console.error("[renderRoom] autoSync失败:",A))},500)}renderOnlineBattle(){const{currentPlayerId:e,turnNumber:s,players:t,online:r,sharedDeck:i}=this.state,{isSpectator:n,spectatorViewPlayerId:a,battlePlayers:o,playerId:l,firstPlayerId:d}=r;typeof window<"u"&&(this.isPortraitMode=window.innerWidth/window.innerHeight<3/4),console.log("【renderOnlineBattle】关键状态:",{playerId:l,firstPlayerId:d,currentPlayerId:e,turnNumber:s,battlePlayers:o.map(S=>({id:S.playerId,name:S.playerNickname})),isSpectator:n,phase:this.state.phase,hasSubscription:!!this.roomSubscription});let c;n?c=a||d:c=l;const m=c===d,h=m?0:1;console.log("【renderOnlineBattle】视角计算:",{viewPlayerId:c,firstPlayerId:d,isFirstPlayer:m,viewPlayerIndex:h}),this.onlineViewPlayerIndex=h;const u=t[h],p=t[1-h],b=m?o.find(S=>S.playerId!==d)?.playerId||"":d,g=n?e===1?d===a:d!==a:e===1?l===d:l!==d,y=!n&&g;console.log("renderOnlineBattle: playerId=",l,"firstPlayerId=",d,"currentPlayerId=",e,"isMyTurn=",g,"canAct=",y);const x=p.board.some(S=>S.isDefending||S.keywords.some(T=>T.name==="嘲讽")),v=u.board.filter(S=>S.canAttack&&!S.hasAttacked&&S.attack>0).length>0&&!x&&y,E=this.isPortraitMode?"compact-mode":"";this.app.innerHTML=`
      <!-- 菜单按钮（左上角） -->
      <button id="game-menu-btn" class="fixed top-4 left-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl font-bold transition-all hover:scale-110 z-50"
        style="background: linear-gradient(135deg, #c0a080 0%, #a08060 100%); border: 3px solid #8b7355; color: #fff;">
        ☰
      </button>
      
      <!-- 游戏菜单弹窗 -->
      ${this.showGameMenu?`
        <div id="game-menu-overlay" class="fixed inset-0 flex items-center justify-center z-[2000]" style="background: rgba(0, 0, 0, 0.5);">
          <div class="p-8 rounded-2xl shadow-2xl text-center" style="background: rgba(245, 240, 230, 0.98); border: 4px solid #d4c4a8;">
            <h2 class="text-2xl font-bold mb-6" style="color: #5a4a3a; font-family: 'Georgia', serif;">游戏菜单</h2>
            
            <div class="flex flex-col gap-4">
              <button id="continue-game-btn" class="px-8 py-3 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;">
                ▶ 继续游戏
              </button>
              
              ${n?"":`
                <button id="surrender-btn" class="px-8 py-3 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                  style="background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: 3px solid #a04040;">
                  🏳️ 认输
                </button>
              `}
            </div>
          </div>
        </div>
      `:""}
      
      <div class="game-container ${E}" id="game-container" style="min-height: 100vh; background: transparent; display: flex; flex-direction: column;">
        
        <!-- 上方玩家区域（对手） -->
        <div class="top-player-area p-1" style="flex-shrink: 0;">
          <div class="relative mb-1" style="min-height: 110px;">
            ${this.renderHeroSkills(p,!0)}
            <!-- 4:3纸材质英雄模块（居中） -->
            <div class="mx-auto relative ${n?"cursor-pointer hover:scale-105 transition-all":""}" data-player-hero="${p.id}"
              style="width: 140px; height: 105px; ${this.renderHeroBackground(p.heroCard)} border: 4px solid #d4c4a8; border-radius: 8px;${p.elementStatus?"padding: 7px; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[p.elementStatus.type]||"transparent")+";":""}"
              ${n?`data-switch-view="${b}"`:""}>
              ${p.heroCard?.imageData?"":'<div class="w-full h-full flex items-center justify-center"><span class="font-bold text-lg" style="color: #5a4a3a;">英雄</span></div>'}
              ${p.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:8px;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
              <!-- 血量（底部居中，一半出框） -->
              <div class="absolute flex items-center justify-center font-bold text-white text-sm shadow-md"
                style="bottom: -10px; left: 50%; transform: translateX(-50%); width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #c0392b 0%, #a93226 100%); border: 3px solid #8b0000; z-index: 10;"
                data-player-hp="${p.id}">
                ${p.health}
              </div>
              ${p.heroMarkCount&&p.heroMarkCount>0?`
                <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md"
                  style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                  ${p.heroMarkCount}
                </div>
              `:""}
            </div>
            <!-- 昵称和能量（绝对定位在英雄模块右侧） -->
            <div class="absolute flex flex-col items-start" style="left: calc(50% + 78px); top: 15px;">
              <div class="font-bold text-lg" style="color: #fff; text-shadow: 0 0 8px rgba(0,0,0,0.6), 0 0 16px rgba(0,0,0,0.3);">${p.name}</div>
              <div class="flex items-center gap-1">
                ${this.renderHeroName(p.heroCard)}
                <span class="text-xs mt-0.5" style="color: rgba(255,255,255,0.85); text-shadow: 0 0 6px rgba(0,0,0,0.6);">手牌数：${p.hand.length}</span>
              </div>
              ${this.renderEnergy(p.maxEnergy,p.energy,p.bonusEnergy||0)}
              ${n?'<span class="text-xs text-blue-500">👁️ 点击切换视角</span>':""}
            </div>
          </div>
          
          <!-- 对手战场 -->
          <div class="top-board flex justify-center gap-2 min-h-20 p-2 rounded-xl mx-4" id="opponent-play-area" style="background: rgba(255, 255, 255, 0.6); border: 3px solid #d4c4a8;">
            ${p.board.map(S=>{const T=p.board.some(N=>N.isDefending||N.keywords.some(J=>J.name==="嘲讽")),A=S.isDefending||S.keywords.some(N=>N.name==="嘲讽"),R=T&&!A?"non-taunt-target":"",_=this.selectedAttackingMinion!==null&&y,B=(this.selectingTargetForCard!==null||this.selectingTargetForSkill!==null)&&y,$=this.getEffectIcons(S.effects);return S.elementStatus&&console.log("[元素边框-对手战场] 随从:",S.name,"元素类型:",S.elementStatus.type,"style中将包含box-shadow"),`
                <div class="minion-card group relative rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all ${S.isDefending?"is-defending":""} ${S.keywords.some(N=>N.name==="嘲讽")?"taunt-minion":""} ${R} ${A&&_?"taunt-target":""} ${_||B?"attack-target":""}${S.elementStatus?" element-status-"+S.elementStatus.type:""}"
                  style="${this.getCardBgInline(S,"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)")} border: 4px solid ${B?"#4a90d9":A?"#6b7db3":"#c4b49c"};${S.elementStatus?"padding: 7px; background-clip: padding-box; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[S.elementStatus.type]||"transparent")+";":""}"
                  data-minion-id="${S.id}" data-player-id="${p.id}" data-has-effects="${S.effects&&S.effects.length>0?"true":"false"}">
                  <div class="h-full flex flex-col items-center justify-end py-1 px-2">
                    <div class="minion-name-overlay absolute inset-0 flex items-center justify-center px-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <span class="text-xs font-bold text-center leading-tight" style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black;">${S.name}</span>
                    </div>
                    ${S.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:inherit;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
                    <div class="flex items-center justify-center gap-1 flex-wrap max-w-full pt-1">
                      ${this.renderKeywords(S.keywords,S.armorValue,S.divineShieldActive,S.playedThisTurn,S.preparation)}
                      ${$?`<div class="effect-icons text-xs">${$}</div>`:""}
                    </div>
                    <div class="flex justify-between w-full pb-1">
                      <div class="stat-circle stat-attack">${S.attack}</div>
                      <div class="stat-circle stat-health">${S.health}</div>
                    </div>
                  </div>
                  ${S.keywords.length>0?this.renderKeywordsTooltip(S.keywords,S.divineShieldActive):""}
                </div>
              `}).join("")}
          </div>
        </div>
        
                <!-- 中央分隔区域（无背景色，只保留分割线和信息） -->
        <div class="flex items-center justify-center" style="background: transparent !important; padding: 2px 0;">
          <!-- 弃牌堆按钮（左） -->
          <div id="discard-pile-btn" class="discard-pile-btn group relative cursor-pointer flex-shrink-0 mx-10 rounded-sm"
            style="width: 29px; height: 43px; background: url('/discard-pile.png') center/cover no-repeat;"
            data-player-id="${p.id}">
            <div class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-xs font-bold pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50"
              style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; background: rgba(0,0,0,0.7);">
              弃牌堆：${this.state.discardPile.length}张牌
            </div>
          </div>
          <div class="flex-1 h-0.5 mx-2 rounded-full" style="background: linear-gradient(90deg, transparent 0%, #c4b49c 50%, transparent 100%);"></div>
          ${this.selectingTargetForCard||this.selectingTargetForSkill?`
            <div class="px-6 py-1 rounded-full font-bold text-sm shadow-lg animate-pulse" style="background: linear-gradient(135deg, #4a90d9 0%, #3d7cc6 100%); color: white; border: 2px solid #3a7bc8;">
              🎯 选择目标
            </div>
          `:`
            <div class="px-4 py-0.5 rounded-full font-bold text-xs shadow-sm" style="background: rgba(255, 255, 255, 0.9); color: #5a4a3a; border: 2px solid #d4c4a8;">
              回合 ${s}
            </div>
          `}
          <div class="flex-1 h-0.5 mx-2 rounded-full" style="background: linear-gradient(90deg, transparent 0%, #c4b49c 50%, transparent 100%);"></div>
          <!-- 抽牌堆按钮（右） -->
          <div id="draw-pile-btn" class="draw-pile-btn group relative flex-shrink-0 mx-10 rounded-sm"
            style="width: 29px; height: 43px; background: url('/card-pile.png') center/cover no-repeat;"
            data-player-id="${u.id}" data-deck-count="${u.deck.length}">
            <div class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-xs font-bold pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50"
              style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; background: rgba(0,0,0,0.7);">
              抽牌堆：${u.deck.length}张牌
            </div>
          </div>
        </div>
        
        <!-- 下方玩家区域（自己） -->
        <div class="bottom-player-area pt-0 pb-0 px-2">
          <!-- 我的战场 -->
          <div class="bottom-board flex justify-center gap-2 min-h-20 p-2 rounded-xl mx-4" id="play-area" style="background: rgba(255, 255, 255, 0.6); border: 3px solid ${this.selectedHandCard?"#7cb87c":this.selectingTargetForCard?"#4a90d9":"#d4c4a8"};">
            ${u.board.map(S=>{const T=S.canAttack&&!S.hasAttacked&&y&&S.attack>0,A=this.selectedAttackingMinion?.id===S.id,R=(this.selectingTargetForCard!==null||this.selectingTargetForSkill!==null)&&y,_=this.getEffectIcons(S.effects);return S.elementStatus&&console.log("[元素边框-己方战场(顶部)] 随从:",S.name,"元素类型:",S.elementStatus.type,"style中将包含box-shadow"),`
                <div class="minion-card group relative rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all ${T?"can-attack":""} ${A?"selected-attacker":""} ${R?"target-select-mode":""}${S.elementStatus?" element-status-"+S.elementStatus.type:""}"
                  style="${this.getCardBgInline(S,"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)")} border: 4px solid ${A?"#ff6b6b":R?"#4a90d9":S.keywords.some(B=>B.name==="不动")?"#808080":T?"#7cb87c":S.playedThisTurn?"#4a90d9":"#c4b49c"};${S.elementStatus?"padding: 7px; background-clip: padding-box; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[S.elementStatus.type]||"transparent")+";":""}"
                  data-minion-id="${S.id}" data-player-id="${u.id}" data-has-effects="${S.effects&&S.effects.length>0?"true":"false"}"
                  data-base-border="${S.keywords.some(B=>B.name==="不动")?"#808080":T?"#7cb87c":S.playedThisTurn?"#4a90d9":"#c4b49c"}">
                  <div class="h-full flex flex-col items-center justify-end py-1 px-2">
                    <div class="minion-name-overlay absolute inset-0 flex items-center justify-center px-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <span class="text-xs font-bold text-center leading-tight" style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black;">${S.name}</span>
                    </div>
                    ${S.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:inherit;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
                    <div class="flex items-center justify-center gap-1 flex-wrap max-w-full pt-1">
                      ${this.renderKeywords(S.keywords,S.armorValue,S.divineShieldActive,S.playedThisTurn,S.preparation)}
                      ${_?`<div class="effect-icons text-xs">${_}</div>`:""}
                    </div>
                    <div class="flex justify-between w-full pb-1">
                      <div class="stat-circle stat-attack">${S.attack}</div>
                      <div class="stat-circle stat-health">${S.health}</div>
                    </div>
                  </div>
                  ${S.keywords.length>0?this.renderKeywordsTooltip(S.keywords,S.divineShieldActive):""}
                </div>
              `}).join("")}
          </div>
          
          <!-- 我的信息（居中） -->
          <div class="relative mb-1" style="min-height: 110px;">
            ${this.renderHeroSkills(u,!1)}
            <!-- 4:3纸材质英雄模块（居中） -->
            <div class="mx-auto relative" data-own-hero="true" data-player-hero="${u.id}"
              style="width: 140px; height: 105px; ${this.renderHeroBackground(u.heroCard)} border: 4px solid #d4c4a8; border-radius: 8px;${u.elementStatus?"padding: 7px; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[u.elementStatus.type]||"transparent")+";":""}">
              ${u.heroCard?.imageData?"":'<div class="w-full h-full flex items-center justify-center"><span class="font-bold text-lg" style="color: #5a4a3a;">英雄</span></div>'}
              ${u.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:8px;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
              <!-- 血量（底部居中，一半出框） -->
              <div class="absolute flex items-center justify-center font-bold text-white text-sm shadow-md"
                style="bottom: -10px; left: 50%; transform: translateX(-50%); width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #c0a080 0%, #a08060 100%); border: 3px solid #8b7355; z-index: 10;"
                data-player-hp="${u.id}">
                ${u.health}
              </div>
              ${u.heroMarkCount&&u.heroMarkCount>0?`
                <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md"
                  style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                  ${u.heroMarkCount}
                </div>
              `:""}
              ${this.renderDefenseOverlay(u)}
              ${this.renderSpeechMenuHtml()}
            </div>
            <!-- 昵称和能量（绝对定位在英雄模块右侧） -->
            <!-- 昵称和能量（绝对定位在英雄模块右侧） -->
            <div class="absolute flex flex-col items-start" style="left: calc(50% + 78px); top: 15px;">
              <div class="font-bold text-lg" style="color: #fff; text-shadow: 0 0 8px rgba(0,0,0,0.6), 0 0 16px rgba(0,0,0,0.3);">${u.name}</div>
              <div class="flex items-center gap-1">
                ${this.renderHeroName(u.heroCard)}
                <span class="text-xs mt-0.5" style="color: rgba(255,255,255,0.85); text-shadow: 0 0 6px rgba(0,0,0,0.6);">手牌数：${u.hand.length}</span>
              </div>
              ${this.renderEnergy(u.maxEnergy,u.energy,u.bonusEnergy||0)}
            </div>
          </div>
          
          <!-- 手牌区域 + 按钮 + 日志 -->
          <div class="hand-area flex items-end justify-center ${this.isPortraitMode?"flex-col items-center":""}">
            <!-- 手牌容器 -->
            <div class="hand-container" id="hand-container" style="flex: 0 0 auto; display: flex; justify-content: center; overflow: visible !important; overflow-x: visible !important; overflow-y: visible !important; height: auto !important; min-height: unset !important;">
              ${n?`
                <div class="flex justify-center items-center py-8">
                  <div class="text-xl" style="color: #a08060;">👁️ 观战模式：无法查看手牌</div>
                </div>
              `:this.renderHand(u.hand,u.energy,this.isPortraitMode)}
            </div>
            
            <!-- 游戏日志栏（左下角） -->
            <div class="game-log-container rounded-lg shadow-lg overflow-hidden" style="position: absolute; left: 20px; bottom: 10px; width: ${this.isPortraitMode?"150px":"200px"}; max-height: 180px; background: rgba(255, 255, 255, 0.95); border: 2px solid #d4c4a8;">
              <div class="text-xs font-bold px-2 py-1" style="background: linear-gradient(135deg, #c0a080 0%, #a08060 100%); color: #fff;">📜 日志</div>
              <div class="game-log-content overflow-y-auto" style="max-height: 150px; font-size: 10px;">
                ${this.renderGameLogs()}
              </div>
            </div>
            <!-- 按钮组（右下角） -->
            <div class="action-buttons ${this.isPortraitMode?"flex-row gap-1":"flex flex-col gap-1"}" style="position: absolute; right: 20px; bottom: 10px; width: ${this.isPortraitMode?"150px":"200px"};">
              ${y?`
                <button id="end-turn-btn" class="action-btn ${this.isPortraitMode?"py-1 text-sm":"py-2 text-lg"} font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                  style="background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: 3px solid #a04040;">
                  结束回合
                </button>
                <button id="all-attack-btn" class="action-btn ${this.isPortraitMode?"py-1 text-sm":"py-2 text-lg"} font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all ${v?"attack-available":"attack-disabled"}"
                  style="background: ${v?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"linear-gradient(135deg, #888 0%, #666 100%)"}; color: #fff; border: 3px solid ${v?"#a04040":"#555"};">
                  ⚔️ 全部打脸
                </button>
              `:""}
              <!-- 刷新按钮始终显示 -->
              <button id="refresh-room-btn" class="action-btn ${this.isPortraitMode?"py-1 text-xs":"py-1 text-sm"} font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #6a9fd4 0%, #4a7fb4 100%); color: #fff; border: 2px solid #3a6fa4;">
                🔄 刷新房间
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 攻击箭头 -->
      <svg id="attack-arrow" class="attack-arrow" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 99999;">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#e05050"/>
          </marker>
        </defs>
        <line id="arrow-line" stroke="#e05050" stroke-width="4" marker-end="url(#arrowhead)"/>
      </svg>
      
      <!-- 目标选择箭头（蓝色） -->
      <svg id="target-arrow" class="target-arrow" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 99999;">
        <defs>
          <marker id="target-arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#4a90d9"/>
          </marker>
        </defs>
        <line id="target-arrow-line" stroke="#4a90d9" stroke-width="4" marker-end="url(#target-arrowhead)"/>
      </svg>
      
      <!-- 弃牌堆查看器弹窗 -->
      ${this.renderDiscardPileViewer()}
    `,this.attachOnlineBattleEvents(y,u,p,h)}attachOnlineBattleEvents(e,s,t,r){const{isSpectator:i}=this.state.online;document.getElementById("game-menu-btn")?.addEventListener("click",()=>{this.showGameMenu=!0,this.render()}),document.getElementById("continue-game-btn")?.addEventListener("click",()=>{this.showGameMenu=!1,this.render()});const n=document.getElementById("surrender-btn");if(n){const d=n.cloneNode(!0);n.parentNode?.replaceChild(d,n),d.addEventListener("click",async()=>{this.showGameMenu=!1;const{playerId:c,firstPlayerId:m,battlePlayers:h,currentRoom:u}=this.state.online,p=c,b=h.find(g=>g.playerId!==c)?.playerId||"";if(console.log("[认输] 认输按钮点击"),console.log("[认输] 输家 ID:",p,"赢家 ID:",b),console.log("[认输] battlePlayers:",h.map(g=>({id:g.playerId,name:g.playerNickname}))),console.log("[认输] 当前房间:",u?.id,"订阅状态:",this.roomSubscription?"存在":"不存在"),console.log("[认输] 更新本地状态为 onlineGameOver"),this.state=le(this.state,{type:"ONLINE_GAME_OVER",winnerId:b,loserId:p}),console.log("[认输] 更新后 phase:",this.state.phase,"winner:",this.state.winner),this.render(),u)try{const{broadcastGameAction:g}=await fe(async()=>{const{broadcastGameAction:y}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:y}},__vite__mapDeps([0,1]));console.log("[认输] 正在广播认输消息到对手..."),await g(u.id,{type:"SURRENDER",loserId:p},this.roomSubscription||void 0),console.log("[认输] 已成功广播认输消息"),await this.broadcastGameState(),console.log("[认输] 已广播游戏结束状态")}catch(g){console.error("[认输] 广播认输消息失败:",g)}else console.error("[认输] 没有当前房间，无法广播")}),console.log("【attachOnlineBattleEvents】已绑定联机模式认输按钮事件")}if(document.getElementById("game-menu-overlay")?.addEventListener("click",d=>{d.target.id==="game-menu-overlay"&&(this.showGameMenu=!1,this.render())}),document.getElementById("discard-pile-btn")?.addEventListener("click",d=>{const c=parseInt(d.currentTarget.getAttribute("data-player-id")||"0");c>0&&(this.showDiscardPileViewer=!0,this.viewingDiscardPilePlayerId=c,this.render())}),document.getElementById("discard-pile-viewer-close")?.addEventListener("click",()=>{this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.render()}),document.getElementById("discard-pile-viewer-overlay")?.addEventListener("click",d=>{d.target.id==="discard-pile-viewer-overlay"&&(this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.render())}),i&&document.querySelectorAll("[data-switch-view]").forEach(d=>{d.addEventListener("click",()=>{const c=d.dataset.switchView;c&&(this.state=le(this.state,{type:"SET_SPECTATOR_VIEW",playerId:c}),this.render())})}),!e)return;this.attachEventListeners();const a=document.getElementById("end-turn-btn");if(a){const d=a.cloneNode(!0);a.parentNode?.replaceChild(d,a),d.addEventListener("click",()=>{console.log("联机模式结束回合按钮被点击"),this.handleEndTurnOnline()}),console.log("已绑定联机模式结束回合按钮事件")}else console.log("未找到结束回合按钮");const o=document.getElementById("all-attack-btn");o&&o.addEventListener("click",()=>{this.allAttackHeroOnline()});const l=document.getElementById("refresh-room-btn");l&&l.addEventListener("click",async()=>{console.log("刷新房间按钮被点击"),await this.refreshOnlineBattleState()})}async refreshOnlineBattleState(){const{currentRoom:e}=this.state.online;if(e)try{const s=(await fe(async()=>{const{getDb:r}=await import("./online-fGHm1H1u.js");return{getDb:r}},__vite__mapDeps([0,1]))).getDb(),{data:t}=await s.from("game_rooms").select("game_state").eq("id",e.id).single();if(t?.game_state){const r=t.game_state;console.log("刷新获取到游戏状态，回合:",r.turnNumber),this.handleRemoteGameStateUpdate(r)}}catch(s){console.error("刷新房间状态失败:",s)}}async handleEndTurnOnline(e=!1){console.log("handleEndTurnOnline 被调用, 当前phase:",this.state.phase,"currentPlayerId:",this.state.currentPlayerId),this.state=le(this.state,{type:"END_TURN"});const s=this.state.online?.currentRoom;if(s&&this.state.mulliganDone===1){console.log("[handleEndTurnOnline] 等待后手完成换牌，mulliganDone:",this.state.mulliganDone),this.render(),this.checkOnlineGameOver();return}s?this.state={...this.state,currentPlayerId:this.state.currentPlayerId===1?2:1}:this.state=le(this.state,{type:"START_MY_TURN"}),e||await this.broadcastGameState(),this.render(),this.checkOnlineGameOver()}async broadcastGameState(){const{currentRoom:e,firstPlayerId:s}=this.state.online;if(!e)return;console.log("广播轻量游戏状态，当前玩家:",this.state.currentPlayerId,"回合:",this.state.turnNumber,"阶段:",this.state.phase);const t=Xt(this.state),r=this.state.discardPile.length,i=this._lastBroadcastDiscardPileLen,n=r>i?this.state.discardPile.slice(i).map(a=>({id:a.id,templateKey:be(a),name:a.name})):[];t.discardPileDiff=n,this._lastBroadcastDiscardPileLen=r,console.log("轻量状态序列化完成，大小约:",JSON.stringify(t).length,"bytes, gamePhase:",t.gamePhase,"discardPileDiff:",n.length);try{const{broadcastGameAction:a}=await fe(async()=>{const{broadcastGameAction:l}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:l}},__vite__mapDeps([0,1])),o=JSON.stringify(t).length;console.log(`【STATE_SYNC】消息大小: ${o} bytes, 使用持久 channel: ${!!this.roomSubscription}`),await a(e.id,{type:"STATE_SYNC",syncState:t},this.roomSubscription||void 0),console.log("【STATE_SYNC】通过持久 channel 广播成功")}catch(a){console.error("【STATE_SYNC】Realtime 广播失败:",a)}try{await(await fe(async()=>{const{getDb:o}=await import("./online-fGHm1H1u.js");return{getDb:o}},__vite__mapDeps([0,1]))).getDb().from("game_rooms").update({game_state:t}).eq("id",e.id),console.log("【STATE_SYNC】轻量状态已保存到数据库（fallback）")}catch(a){console.error("【STATE_SYNC】保存到数据库失败:",a)}}async checkOnlineGameOver(){const{players:e,online:s}=this.state,{battlePlayers:t,firstPlayerId:r}=s;if(e[0].health<=0||e[1].health<=0){const i=e[0].health<=0?1:0,n=1-i,a=i===0?r:t.find(l=>l.playerId!==r).playerId,o=n===0?r:t.find(l=>l.playerId!==r).playerId;this.state=le(this.state,{type:"ONLINE_GAME_OVER",winnerId:a,loserId:o}),await this.broadcastGameState(),this.render()}}async allAttackHeroOnline(){if(this.isAttacking)return;this.isAttacking=!0;const{players:e,online:s}=this.state,{playerId:t,firstPlayerId:r,currentRoom:i}=s,n=t===r?0:1,a=e[n],o=1-n,l=n+1,d=o+1,c=a.board.filter(m=>m.canAttack&&m.canAttackHeroes&&!m.hasAttacked&&!m.isDefending);if(c.length===0){this.isAttacking=!1;return}for(const m of c){if(this.savePotentialDeathMinions(m.id),this.playWoodSound(),await this.attackAnimation(m.id,!0,m.attack),this.state=le(this.state,{type:"ATTACK_HERO",attackerPlayerId:l,attackerCardId:m.id,targetPlayerId:d}),this.render(),i&&await this.broadcastGameState(),this.state.phase==="onlineGameOver"){this.isAttacking=!1;return}await new Promise(h=>setTimeout(h,200))}this.isAttacking=!1}async renderOnlineGameOver(){const{winner:e,players:s,online:t}=this.state,{battlePlayers:r,isSpectator:i,rematchRequested:n,playerId:a,lastLoserId:o,firstPlayerId:l}=t;if(!e||r.length<2){console.error("[渲染] 无效的 winner 或 battlePlayers 数量不足",e,r.length),this.state=le(this.state,{type:"BACK_TO_ROOM"}),this.render();return}if(typeof e!="number"||e<1||e>2){console.error("[渲染] 无效的 winner 值，无法显示结算动画",e),console.error("[渲染] players:",s),this.state=le(this.state,{type:"BACK_TO_ROOM"}),this.render();return}const d=s.find(u=>u.id===e),c=s.find(u=>u.id!==e);if(!d||!c){console.error("[渲染] 找不到胜者或败者",e,s),this.state=le(this.state,{type:"BACK_TO_ROOM"}),this.render();return}console.log("[动画] 渲染联机游戏结束界面"),console.log("[动画] winner (原始值):",e,"类型:",typeof e),console.log("[动画] winnerPlayer:",d.name,"(id:",d.id,")"),console.log("[动画] loserPlayer:",c.name,"(id:",c.id,")"),console.log("[动画] firstPlayerId:",l,"playerId:",a,"isSpectator:",i),console.log("[动画] battlePlayers:",r.map(u=>({id:u.playerId,name:u.playerNickname}))),n.includes(a),n.length;const m=`
      <div id="game-over-overlay" class="fixed inset-0 flex flex-col items-center justify-center" style="background: #000;">
        <div id="thumbs-down-layer" style="position: absolute; inset: 0; pointer-events: none; overflow: hidden;"></div>
        <div class="text-center" style="position: relative; z-index: 2;">
          <h1 class="text-8xl font-bold mb-8" style="color: #ff0000; font-family: 'Georgia', serif; text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);">
            Loser is
          </h1>
          <p class="text-6xl font-bold mb-12" style="color: #fff; font-family: 'Georgia', serif;">
            ${c.name}
          </p>

          <p class="text-sm mt-12" style="color: #666; cursor: default;">- 点击屏幕返回联机房间 -</p>
        </div>

        ${i?`
          <div class="fixed bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg" style="background: rgba(255, 255, 255, 0.2); z-index: 2;">
            <span class="text-white">👁️ 观战模式</span>
          </div>
        `:""}
      </div>
    `;await this.applyGrayscaleTransition(m);const h=document.getElementById("game-over-overlay");h&&h.addEventListener("click",async()=>{this.stopThumbsDownEmojis();const{currentRoom:u}=this.state.online;if(u)try{const{updateRoomStatus:p,resetAllPlayerReady:b}=await fe(async()=>{const{updateRoomStatus:g,resetAllPlayerReady:y}=await import("./online-fGHm1H1u.js");return{updateRoomStatus:g,resetAllPlayerReady:y}},__vite__mapDeps([0,1]));await p(u.id,"waiting"),await b(u.id),console.log("已更新房间状态为 waiting 并重置准备状态")}catch(p){console.error("更新房间状态失败:",p)}await this.unsubscribeFromRoom(),this.state=le(this.state,{type:"BACK_TO_ROOM"}),await this.loadRoomData(),this.render()}),this.spawnThumbsDownEmojis()}async loadRoomData(){if(await Promise.all([this.loadMessages(),this.loadPlayerReady(),this.loadRoomInfo()]),this.roomSubscription){console.log("已有房间订阅，跳过重复订阅");return}try{await this.subscribeToRoomUpdates(),console.log("订阅房间更新成功")}catch(e){console.error("订阅房间更新失败，将使用轮询模式:",e),alert("订阅失败，将使用轮询模式，可能会有延迟")}this.startPolling()}startPolling(){this.pollingInterval&&clearInterval(this.pollingInterval),this.pollingInterval=setInterval(async()=>{if(this.state.phase!=="room"){clearInterval(this.pollingInterval),this.pollingInterval=null;return}try{await Promise.all([this.loadRoomInfo(),this.loadMessages(),this.loadPlayerReady()])}catch(e){console.error("轮询失败:",e)}},2e3)}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async loadRoomInfo(){const{currentRoom:e}=this.state.online;if(e)try{const{getRoomById:s}=await fe(async()=>{const{getRoomById:r}=await import("./online-fGHm1H1u.js");return{getRoomById:r}},__vite__mapDeps([0,1])),t=await s(e.id);if(t){if(t.status==="playing"&&this.state.phase==="room"){console.log("轮询检测到游戏开始，进入战斗界面"),this.state=le(this.state,{type:"UPDATE_ROOM",room:t}),await this.enterOnlineBattle();return}const r=this.state.online.currentRoom?.guest_id,i=this.state.online.currentRoom?.guest_nickname;(t.guest_id!==r||t.guest_nickname!==i)&&(console.log("检测到房间信息变化:",t),this.state=le(this.state,{type:"UPDATE_ROOM",room:t}),this.state.phase==="room"&&this.render())}}catch(s){console.error("加载房间信息失败:",s)}}async subscribeToRoomUpdates(e=0){const{currentRoom:s,playerId:t}=this.state.online;if(!(!s||this.isSubscribing)){this.isSubscribing=!0;try{const{subscribeToRoom:r,unsubscribeFromRoom:i}=await fe(async()=>{const{subscribeToRoom:n,unsubscribeFromRoom:a}=await import("./online-fGHm1H1u.js");return{subscribeToRoom:n,unsubscribeFromRoom:a}},__vite__mapDeps([0,1]));this.roomSubscription&&(await i(this.roomSubscription),this.roomSubscription=null),this.roomSubscription=await r(s.id,async n=>{console.log("房间更新:",n),this.state=le(this.state,{type:"UPDATE_ROOM",room:n}),n.status==="playing"&&this.state.phase==="room"?(console.log("检测到游戏开始，进入战斗界面"),await this.enterOnlineBattle()):this.state.phase==="room"&&this.render()},async n=>{if(console.log("收到新消息:",n),n.sender_nickname==="__SYSTEM__"&&n.message.startsWith("__DECK_DATA__")){const l=this.parseDeckDataMessage(n.message);if(l){const d=this.state.online.playerReady.find(m=>m.player_id===n.sender_id),c=d?d.player_nickname:n.sender_id;this.state=le(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:n.sender_id,filename:"本地卡包",cardCount:l.cardCount,playerNickname:c,comparisonData:l.comparisonData}),this.state.phase==="room"&&this.render()}return}if(n.sender_nickname==="__SYSTEM__"&&n.message.startsWith("__DECK_IMPORT__")){if(this.state.online.remoteDeckImports[n.sender_id]?.comparisonData)return;const l=n.message.split("|");if(l.length>=3){const d=l[1],c=parseInt(l[2],10);console.log("[DEBUG] 收到系统消息-卡包导入:",n.sender_id,d,c),this.state=le(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:n.sender_id,filename:d,cardCount:c,playerNickname:n.sender_id}),this.state.phase==="room"&&this.render()}return}if(n.sender_nickname==="__SYSTEM__"&&n.message.startsWith("__HERO_SELECT__")){try{const l=JSON.parse(n.message.split("|")[1]);this.state=le(this.state,{type:"SET_ONLINE_HERO",playerId:l.playerId,heroCard:l.heroCard}),this.state.phase==="room"&&this.render()}catch(l){console.error("解析 HERO_SELECT 失败:",l)}return}if(n.sender_nickname==="__SYSTEM__"&&n.message.startsWith("__MULLIGAN_CONFIRM__")){const l=n.message.split("|");try{const d=JSON.parse(l[1]);if(this.state.online.playerId===this.state.online.firstPlayerId){if(this.state.mulliganDone>=2){console.log("【MULLIGAN_CONFIRM】跳过重复处理，mulliganDone 已为:",this.state.mulliganDone);return}if(this.state={...this.state,p2MulliganSelected:d},this.state.mulliganDone>=1){this.state=le(this.state,{type:"CONFIRM_MULLIGAN"});{const c=this.state.online.playerId==="1"?2:1;this.state=le({...this.state,currentPlayerId:c},{type:"START_MY_TURN"})}this.lastGameStateTimestamp=Date.now(),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100),await this.broadcastGameState()}else console.log("【MULLIGAN_CONFIRM】P1尚未换牌，保存P2换牌数据，等待P1确认后处理"),this._p2MulliganConfirmed=!0}else{if(console.log("【MULLIGAN_CONFIRM】后手收到先手的换牌确认，discardIds:",d),this.state.mulliganDone>=2){console.log("【MULLIGAN_CONFIRM(P2)】跳过重复处理，mulliganDone 已为:",this.state.mulliganDone);return}this.state={...this.state,mulliganSelected:d},this.state=le(this.state,{type:"CONFIRM_MULLIGAN"}),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100),await this.broadcastGameState()}}catch(d){console.error("解析 MULLIGAN_CONFIRM 失败:",d)}return}const{messages:a}=this.state.online;a.some(l=>l.id===n.id)||(this.state=le(this.state,{type:"ADD_MESSAGE",message:n}),this.updateMessagesDisplay())},n=>{console.log("准备状态更新:",n),this.state=le(this.state,{type:"UPDATE_PLAYER_READY",playerReady:n}),this.state.phase==="room"&&this.render()},n=>{console.log("游戏状态更新:",n),(this.state.phase==="onlineBattle"||this.state.phase==="mulligan")&&this.handleRemoteGameStateUpdate(n)},async n=>{console.log("收到游戏操作:",n),await this.handleOnlineGameAction(n)},n=>{console.log("收到卡包导入广播:",n),this.state=le(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:n.playerId,filename:n.filename||"本地卡包",cardCount:n.cardCount,playerNickname:n.playerNickname,comparisonData:n.comparisonData}),this.state.phase==="room"&&this.render()}),console.log("已订阅房间更新")}catch(r){if(console.error("订阅房间更新失败:",r),e<3)return console.log(`订阅失败，自动重试 (${e+1}/3)...`),await new Promise(i=>setTimeout(i,1e3)),this.isSubscribing=!1,this.subscribeToRoomUpdates(e+1);throw console.error("订阅房间更新失败，已重试3次，放弃"),r}finally{this.isSubscribing=!1}}}async handleRemoteGameStateUpdate(e){if(e&&"gamePhase"in e){console.log("【handleRemoteGameStateUpdate】收到轻量状态，转发给 handleOnlineGameAction"),await this.handleOnlineGameAction({type:"STATE_SYNC",syncState:e});return}const{playerId:t,firstPlayerId:r,isSpectator:i}=this.state.online;if(console.log("收到远程游戏状态更新(全量格式)，当前玩家:",e.currentPlayerId,"回合:",e.turnNumber,"时间戳:",e.timestamp,"游戏阶段:",e.gamePhase,"胜者:",e.winner,"是否正在攻击:",this.isAttacking),e.gamePhase==="gameOver"&&e.winner){console.log("收到游戏结束状态，胜者:",e.winner);const{battlePlayers:l}=this.state.online,d=e.winner.id===String(this.state.online.firstPlayerId)?String(l.find(c=>c.playerId!==this.state.online.firstPlayerId).playerId):String(this.state.online.firstPlayerId);this.state=le(this.state,{type:"ONLINE_GAME_OVER",winnerId:e.winner.id,loserId:d}),this.render();return}if(this.isAttacking){console.log("正在攻击动画中，跳过远程状态更新");return}if(e.timestamp&&this.lastGameStateTimestamp&&e.timestamp<this.lastGameStateTimestamp){console.log("跳过过期的远程状态更新，时间戳:",e.timestamp,"当前:",this.lastGameStateTimestamp);return}e.timestamp&&(this.lastGameStateTimestamp=e.timestamp);const n=this.state.currentPlayerId===1?t===r:t!==r,a=e.currentPlayerId===1?t===r:t!==r;let o=[];if(e.currentPlayerId===1&&t===r){const l=this.state.players[0].hand,d=e.players[0].hand;d.length>l.length&&(o=d.slice(l.length).map(c=>c.id))}else if(e.currentPlayerId===2&&t!==r){const l=this.state.players[1].hand,d=e.players[1].hand;d.length>l.length&&(o=d.slice(l.length).map(c=>c.id))}if(this.state={...this.state,currentPlayerId:e.currentPlayerId,turnNumber:e.turnNumber,players:e.players.map((l,d)=>({id:l.id,name:l.name,health:l.health,maxHealth:l.maxHealth||30,heroMarkCount:l.heroMarkCount||0,energy:l.energy,maxEnergy:l.maxEnergy,hand:l.hand.map(c=>({...c})),deck:l.deck.map(c=>({...c})),board:l.board.map(c=>({...c}))})),discardPile:(e.discardPile||[]).map(l=>({...l})),newlyDrawnCardIds:o,gameLogs:e.gameLogs||this.state.gameLogs},this.state.players[0].health<=0||this.state.players[1].health<=0){const{battlePlayers:l,firstPlayerId:d}=this.state.online,c=this.state.players[0].health<=0?1:0,m=c===0?d:l.find(u=>u.playerId!==d).playerId,h=c===0?l.find(u=>u.playerId!==d).playerId:d;this.state=le(this.state,{type:"ONLINE_GAME_OVER",winnerId:m,loserId:h}),this.render();return}!n&&a&&!i&&o.length>0?(console.log("回合切换到己方，播放抽牌动画"),this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100)):this.render()}async handleOnlineGameAction(e){const{phase:s,online:t}=this.state;if(console.log("处理游戏操作消息:",e.type,"当前阶段:",s,"是否正在攻击:",this.isAttacking),this.isAttacking&&e.type!=="MINION_ATTACK_HERO"){console.log("正在攻击动画中，跳过状态更新");return}switch(e.type){case"STATE_SYNC":{const r=e.syncState;if(!r){console.error("【STATE_SYNC】收到空状态");break}if(this.state.online.playerId,r.timestamp&&r.timestamp<=this.lastGameStateTimestamp){console.log("【STATE_SYNC】跳过旧状态或自己的广播");break}if(this.state.mulliganDone>=2&&((r.mulliganDone??0)<2||r.gamePhase==="mulligan")){console.log("【STATE_SYNC】跳过过期换牌状态（本地已完成换牌，mulliganDone:",this.state.mulliganDone,"，收到:",r.mulliganDone,"，gamePhase:",r.gamePhase,"）");break}const a=(this.state.online.playerId===this.state.online.firstPlayerId?this.state.mulliganDone<1:this.state.mulliganDone<2)&&(r.mulliganDone??0)>=2;let o=null;if(a&&(console.log("【STATE_SYNC】本地换牌尚未完成，保护本地换牌字段后合并（本地mulliganDone:",this.state.mulliganDone,"，收到:",r.mulliganDone,"）"),o={mulliganDone:this.state.mulliganDone,mulliganCards:this.state.mulliganCards,mulliganSelected:this.state.mulliganSelected,p2MulliganCards:this.state.p2MulliganCards,p2MulliganSelected:this.state.p2MulliganSelected,phase:this.state.phase}),this.state.phase==="onlineBattle"&&this.state.turnNumber>=1&&(r.gamePhase==="mulligan"||(r.turnNumber??1)<this.state.turnNumber)){console.log("【STATE_SYNC】本地回合进度已超过收到的状态，跳过旧状态同步（本地turnNumber:",this.state.turnNumber,"，收到turnNumber:",r.turnNumber,"，收到gamePhase:",r.gamePhase,"）");break}console.log("【STATE_SYNC】收到轻量状态同步，回合:",r.turnNumber,"当前玩家:",r.currentPlayerId,"阶段:",r.gamePhase),this.lastGameStateTimestamp=r.timestamp;const l=this.state.sharedDeck||[];console.log("【STATE_SYNC】反序列化前 sharedDeck 大小:",l.length,"当前phase:",this.state.phase);const d=Zt(r,l);console.log("【STATE_SYNC】反序列化后 restoredState.phase:",d.phase);const c=this.state.currentPlayerId===1?this.state.online.playerId===this.state.online.firstPlayerId:this.state.online.playerId!==this.state.online.firstPlayerId,m=d.currentPlayerId===1?this.state.online.playerId===this.state.online.firstPlayerId:this.state.online.playerId!==this.state.online.firstPlayerId,h=this.state.players[0],u=this.state.players[1];if(this.state={...this.state,...d,online:{...this.state.online,isWaitingForGameState:!1}},h&&(this.state.players[0].halfPublicDeck=h.halfPublicDeck||[],this.state.players[0].personalBattleDeck=h.personalBattleDeck||[]),u&&(this.state.players[1].halfPublicDeck=u.halfPublicDeck||[],this.state.players[1].personalBattleDeck=u.personalBattleDeck||[]),o&&(this.state={...this.state,...o},console.log("【STATE_SYNC】已恢复本地换牌字段，当前phase:",this.state.phase,"mulliganDone:",this.state.mulliganDone)),m&&d.waitingForNextPlayer){const g=this.state.online.playerId==="1"?2:1;this.state=le({...this.state,currentPlayerId:g},{type:"START_MY_TURN"}),this.broadcastGameState()}const p=r.discardPileDiff;if(p&&p.length>0){const g=this.state.sharedDeck||[],y=p.map(x=>{const w=g.find(f=>be(f.card)===x.templateKey);return w?{...w.card,id:x.id}:null}).filter(Boolean);y.length>0&&(this.state.discardPile=[...this.state.discardPile,...y])}if(console.log("【STATE_SYNC】状态已恢复，玩家1手牌:",this.state.players[0].hand.length,"玩家2手牌:",this.state.players[1].hand.length),this.state.phase==="onlineGameOver"){this.render();break}const b=this.state.newlyDrawnCardIds||[];!c&&m&&!this.isAttacking&&b.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100)):this.render();break}case"GAME_INIT":{console.log("【GAME_INIT】收到初始化消息，sharedDeckOrder长度:",e.sharedDeckOrder.length,"先手:",e.firstPlayerId);const{playerId:r,isSpectator:i}=this.state.online;if(r===e.firstPlayerId){console.log("【GAME_INIT】我是先手，跳过自己广播的消息");break}if(i){console.log("【GAME_INIT】观战者收到初始化消息，暂不处理");break}this.state=le(this.state,{type:"START_ONLINE_GAME",firstPlayerId:e.firstPlayerId,player1Name:e.player1Name,player2Name:e.player2Name,sharedDeckOrder:e.sharedDeckOrder,player1PersonalKeys:e.player1PersonalKeys,player2PersonalKeys:e.player2PersonalKeys}),this.state={...this.state,online:{...this.state.online,isWaitingForGameState:!1}},this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100),this.battleStatePollInterval&&clearInterval(this.battleStatePollInterval);const n=this.state.online.currentRoom?.id;n&&(this.battleStatePollInterval=window.setInterval(async()=>{if(this.state.phase!=="onlineBattle"&&this.state.phase!=="mulligan"){this.battleStatePollInterval&&(clearInterval(this.battleStatePollInterval),this.battleStatePollInterval=null);return}try{const{getDb:a}=await fe(async()=>{const{getDb:m}=await import("./online-fGHm1H1u.js");return{getDb:m}},__vite__mapDeps([0,1])),{data:o,error:l}=await a().from("game_rooms").select("game_state").eq("id",n).single();if(l||!o?.game_state)return;const d=o.game_state;d&&"gamePhase"in d?await this.handleOnlineGameAction({type:"STATE_SYNC",syncState:d}):console.log("【轮询】数据库中的 game_state 不是轻量格式，跳过")}catch{}},2e3),console.log("【GAME_INIT】后手启动战斗状态轮询(fallback)"));break}case"FULL_STATE_SYNC":if(e.gameState.timestamp===0){console.log("收到状态同步请求");const{firstPlayerId:i,playerId:n,currentRoom:a}=t;if(n===i&&s==="onlineBattle"){console.log("我是先手，重新广播游戏状态");try{const{broadcastGameAction:o}=await fe(async()=>{const{broadcastGameAction:l}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:l}},__vite__mapDeps([0,1]));await o(a.id,{type:"GAME_START",gameState:{currentPlayerId:this.state.currentPlayerId,turnNumber:this.state.turnNumber,players:this.state.players.map(l=>({id:l.id,name:l.name,health:l.health,energy:l.energy,maxEnergy:l.maxEnergy,hand:l.hand.map(d=>({...d})),deck:l.deck.map(d=>({...d})),board:l.board.map(d=>({...d}))})),firstPlayerId:i,gamePhase:"playing",timestamp:Date.now()}},this.roomSubscription||void 0)}catch(o){console.error("广播游戏状态失败:",o)}}break}case"GAME_START":{console.log("【GAME_START】收到消息，更新游戏状态");const r=e.gameState,i=r.firstPlayerId,{playerId:n,firstPlayerId:a}=t;if(r.timestamp&&r.timestamp<=this.lastGameStateTimestamp){console.log("【GAME_START】收到旧状态，跳过",{receivedTimestamp:r.timestamp,currentTimestamp:this.lastGameStateTimestamp});break}const o=n===i,l=this.state.phase==="onlineBattle"&&this.state.turnNumber>0,d=o&&l;if(console.log("【GAME_START】判断是否自己的广播:",{playerId:n,messageFirstPlayerId:i,currentFirstPlayerId:a,isFirstPlayer:o,isInBattle:l,phase:this.state.phase,turnNumber:this.state.turnNumber,isMyBroadcast:d}),d){console.log("【GAME_START】我是先手且已在战斗中，跳过自己广播的消息");break}if(r.timestamp&&(this.lastGameStateTimestamp=r.timestamp),r.gamePhase==="gameOver"&&r.winner!==void 0){console.log("[同步] 收到远程游戏结束状态"),console.log("[同步] gamePhase:",r.gamePhase),console.log("[同步] winner (原始值):",r.winner,"类型:",typeof r.winner),console.log("[同步] winner (JSON):",JSON.stringify(r.winner));const{battlePlayers:m}=this.state.online;let h;if(typeof r.winner=="object"&&r.winner!==null){console.warn("[同步] 收到旧格式的 winner 对象，需要更新广播方",r.winner);const b=r.winner.id;h=m.findIndex(g=>g.playerId===b)+1}else h=Number(r.winner);(isNaN(h)||h<1||h>2)&&(console.error("[同步] winner 解析失败，使用默认值 1",r.winner),h=1);const u=h===1?m[0].playerId:m[1].playerId,p=h===1?m[1].playerId:m[0].playerId;console.log("[同步] winnerIndex:",h,"winnerId:",u,"loserId:",p),console.log("[同步] battlePlayers:",m.map(b=>({id:b.playerId,name:b.playerNickname}))),this.state=le(this.state,{type:"ONLINE_GAME_OVER",winnerId:u,loserId:p}),this.render();break}const c=[];r.players.forEach(m=>{m.hand.forEach(h=>{c.push(h.id)})}),this.state={...this.state,phase:"onlineBattle",currentPlayerId:r.currentPlayerId,turnNumber:r.turnNumber,players:r.players.map((m,h)=>({id:m.id,name:m.name,health:m.health,energy:m.energy,maxEnergy:m.maxEnergy,hand:m.hand.map(u=>({...u})),deck:m.deck.map(u=>({...u})),board:m.board.map(u=>({...u}))})),discardPile:(r.discardPile||[]).map(m=>({...m})),newlyDrawnCardIds:c,online:{...this.state.online,firstPlayerId:r.firstPlayerId,isWaitingForGameState:!1}},console.log("游戏状态已更新，玩家1手牌数:",this.state.players[0].hand.length,"玩家2手牌数:",this.state.players[1].hand.length),this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100);break}case"END_TURN":{const r=this.state.online.playerId;if(e.playerId===r)break;console.log("收到 END_TURN 消息，对手结束回合，等待 STATE_SYNC 同步状态");break}case"PLAY_CARD":{console.log("收到 PLAY_CARD 消息，等待 STATE_SYNC 同步状态");break}case"EXECUTE_PLAYED_MINION_EFFECT":{console.log("收到 EXECUTE_PLAYED_MINION_EFFECT 消息，等待 STATE_SYNC 同步状态");break}case"HERO_SKILL":{console.log("收到 HERO_SKILL 消息，等待 STATE_SYNC 同步状态");break}case"MINION_ATTACK_HERO":{console.log("收到 MINION_ATTACK_HERO 消息，攻击者:",e.attackerCardId,"伤害:",e.damage,"当前isAttacking:",this.isAttacking);const r=e.attackerCardId,i=e.damage;this.playWoodSound(),await this.attackAnimation(r,!0,i,!0);break}case"ATTACK_MINION":{console.log("收到 ATTACK_MINION 消息，等待 STATE_SYNC 同步状态");break}case"ATTACK_HERO":{console.log("收到 ATTACK_HERO 消息，等待 STATE_SYNC 同步状态");break}case"SURRENDER":{console.log("[认输] 收到 SURRENDER 消息"),console.log("[认输] 输家 ID:",e.loserId,"当前 phase:",s);const{battlePlayers:r}=this.state.online,i=e.loserId===r[0].playerId?r[1].playerId:r[0].playerId;console.log("[认输] 计算胜者 ID:",i),console.log("[认输] battlePlayers:",r.map(n=>n.playerId)),this.state=le(this.state,{type:"ONLINE_GAME_OVER",winnerId:i,loserId:e.loserId}),console.log("[认输] 更新后 phase:",this.state.phase,"winner:",this.state.winner),this.render();break}case"VOICE_SPEECH":{if(e.playerId!==this.state.online.playerId){const i=e.playerId===this.state.online.firstPlayerId?1:2;this.renderRemoteSpeechBubble(this.app,e.speechType,i)}break}case"REMATCH_REQUEST":{console.log("收到 REMATCH_REQUEST 消息，请求者:",e.playerId);const{rematchRequested:r,lastLoserId:i,battlePlayers:n,playerId:a,currentRoom:o}=this.state.online;if(!r.includes(e.playerId)){const l=[...r,e.playerId];if(this.state={...this.state,online:{...this.state.online,rematchRequested:l}},l.length===2){console.log("双方都请求了再战，开始新游戏");const d=i||n[0].playerId;if(this.roomSubscription?console.log("【再战】订阅已存在"):(console.log("【再战】订阅不存在，重新订阅"),await this.subscribeToRoomUpdates()),a===d){console.log("我是再战先手，初始化游戏");const c=n.find(h=>h.playerId===d),m=n.find(h=>h.playerId!==d);if(this.state=le(this.state,{type:"START_ONLINE_GAME",firstPlayerId:d,player1Name:c.playerNickname,player2Name:m.playerNickname}),console.log("【再战】先手等待 2 秒后广播..."),await new Promise(h=>setTimeout(h,2e3)),o)try{const{broadcastGameAction:h}=await fe(async()=>{const{broadcastGameAction:u}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:u}},__vite__mapDeps([0,1]));console.log("【再战】先手广播 GAME_START，订阅状态:",this.roomSubscription?"存在":"不存在"),await h(o.id,{type:"GAME_START",gameState:{currentPlayerId:this.state.currentPlayerId,turnNumber:this.state.turnNumber,players:this.state.players.map(u=>({id:u.id,name:u.name,health:u.health,energy:u.energy,maxEnergy:u.maxEnergy,hand:u.hand.map(p=>({...p})),deck:u.deck.map(p=>({...p})),board:u.board.map(p=>({...p}))})),firstPlayerId:d,gamePhase:"playing",timestamp:Date.now()}},this.roomSubscription||void 0),console.log("【再战】已广播游戏开始状态")}catch(h){console.error("【再战】广播游戏开始状态失败:",h)}this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100)}else{console.log("我是再战后手，等待先手初始化"),this.state={...this.state,phase:"onlineBattle",online:{...this.state.online,isWaitingForGameState:!0}},this.render();return}}else this.render()}break}case"DISCARD_PILE_ADD":{const r=e.cards;if(r&&r.length>0)for(const i of r)this.state.discardPile.push(i);break}case"DISCARD_PILE_REMOVE":{const r=e.cardTemplateKeys;if(r&&r.length>0)for(const i of r){const n=this.state.discardPile.findIndex(a=>be(a)===i);n>=0&&this.state.discardPile.splice(n,1)}break}case"FETCH_FROM_ENEMY_HAND":{const{playerId:r}=this.state.online,n=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,a=this.state.players[n];if(a.hand.length>0){const o=Math.floor(Math.random()*a.hand.length),l=a.hand.splice(o,1)[0],d={id:l.id,templateKey:be(l),name:l.name,type:l.type,cost:l.cost,attack:l.attack,health:l.health,maxHealth:l.maxHealth,armorValue:l.armorValue,imageData:l.imageData||""},{broadcastGameAction:c}=await fe(async()=>{const{broadcastGameAction:m}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:m}},__vite__mapDeps([0,1]));await c(this.state.online.currentRoom.id,{type:"ENEMY_HAND_CARD_RESPONSE",sourcePlayerId:r,card:d,effectType:e.effectType}),this.render()}break}case"ENEMY_HAND_CARD_RESPONSE":{e.card&&String(e.sourcePlayerId)!==this.state.online.playerId&&(this._pendingEnemyHandCard=e.card,this._pendingEnemyHandEffectType=e.effectType);break}case"REMOVE_FROM_ENEMY_HAND":{if(e.cardTemplateKey&&String(e.sourcePlayerId)!==this.state.online.playerId){const r=e.cardTemplateKey,i=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,n=this.state.players[i],a=n.hand.findIndex(o=>be(o)===r);a>=0&&(n.hand.splice(a,1),this.render())}break}}}async enterOnlineBattle(){const{currentRoom:e,playerId:s,playerNickname:t,lastLoserId:r}=this.state.online;if(e){this.lastGameStateTimestamp=0,console.log("【enterOnlineBattle】开始进入战斗",{playerId:s,currentRoomId:e.id,lastLoserId:r,hasSubscription:!!this.roomSubscription,timestampReset:!0});try{const{getPlayerReady:i}=await fe(async()=>{const{getPlayerReady:p}=await import("./online-fGHm1H1u.js");return{getPlayerReady:p}},__vite__mapDeps([0,1])),a=(await i(e.id)).filter(p=>p.is_ready).slice(0,2).map(p=>({playerId:p.player_id,playerNickname:p.player_nickname,isReady:p.is_ready}));if(console.log("【enterOnlineBattle】对战玩家:",a.map(p=>({id:p.playerId,name:p.playerNickname}))),a.length<2){console.error("对战玩家不足");return}const o=!a.find(p=>p.playerId===s),l=this.state.sharedDeck,d=l.reduce((p,b)=>p+b.count,0);if(console.log("进入联机战斗，本地卡包数量:",d,"模板数:",l.length),l.length===0){console.error("本地卡包为空，无法进入战斗"),alert("本地卡包为空，请先在房间内导入卡包");return}this.state=le(this.state,{type:"START_ONLINE_BATTLE",battlePlayers:a,isSpectator:o,onlineDeck:l});const c=[a[0].playerId,a[1].playerId].sort(),m=e.id,h=m%2;let u;if(r?(u=r,console.log("【enterOnlineBattle】再战模式，输家先手:",u)):(u=h===0?c[0]:c[1],console.log("【enterOnlineBattle】首局，随机决定先手:",u)),console.log("【enterOnlineBattle】先后手计算: 房间ID=",e.id,"哈希=",m,"随机值=",h,"先手=",u,"我=",s),this.state={...this.state,online:{...this.state.online,firstPlayerId:u,diceRolls:[]}},s===u)if(this.roomSubscription)console.log("【enterOnlineBattle - 先手】订阅已存在");else{console.log("【enterOnlineBattle - 先手】订阅不存在，尝试重新订阅");try{await this.subscribeToRoomUpdates(),console.log("【enterOnlineBattle - 先手】订阅成功")}catch{console.warn("【enterOnlineBattle - 先手】订阅失败，将使用数据库轮询同步游戏状态")}}else console.log("【enterOnlineBattle - 后手】跳过订阅检查，直接使用数据库轮询");if(s===u){console.log("我是先手玩家，初始化游戏状态"),this.state={...this.state,online:{...this.state.online,isWaitingForGameState:!1}},await this.startOnlineGameWithFirstPlayer(u,a),this.battleStatePollInterval&&clearInterval(this.battleStatePollInterval);const p=this.state.online.currentRoom?.id;p&&(this.battleStatePollInterval=window.setInterval(async()=>{if(this.state.phase!=="onlineBattle"&&this.state.phase!=="mulligan"){this.battleStatePollInterval&&(clearInterval(this.battleStatePollInterval),this.battleStatePollInterval=null);return}try{const{getDb:b}=await fe(async()=>{const{getDb:f}=await import("./online-fGHm1H1u.js");return{getDb:f}},__vite__mapDeps([0,1])),{data:g,error:y}=await b().from("game_rooms").select("game_state").eq("id",p).single();if(y||!g?.game_state)return;const x=g.game_state;x&&"gamePhase"in x&&(this.state.mulliganDone===1&&x.mulliganDone===2&&console.log("【先手轮询】检测到后手已完成换牌(mulliganDone=2)，处理状态同步"),await this.handleOnlineGameAction({type:"STATE_SYNC",syncState:x}))}catch{}},2e3),console.log("【先手】启动战斗状态轮询(fallback)"))}else if(o){console.log("我是观战者，等待游戏状态"),this.state={...this.state,phase:"onlineBattle",online:{...this.state.online,isWaitingForGameState:!0}},this.render();const p=async()=>{if(this.state.online.isWaitingForGameState){try{const b=(await fe(async()=>{const{getDb:y}=await import("./online-fGHm1H1u.js");return{getDb:y}},__vite__mapDeps([0,1]))).getDb(),{data:g}=await b.from("game_rooms").select("game_state").eq("id",e.id).single();if(g?.game_state){console.log("【观战者】从数据库获取到初始化信息");const y=g.game_state;y.sharedDeckOrder&&y.sharedDeckOrder.length>0?await this.handleOnlineGameAction({type:"GAME_INIT",sharedDeckOrder:y.sharedDeckOrder,firstPlayerId:y.firstPlayerId,player1Name:y.player1Name,player2Name:y.player2Name,randomSeed:y.randomSeed}):await this.handleOnlineGameAction({type:"GAME_START",gameState:y});return}}catch(b){console.error("【观战者】轮询游戏状态失败:",b)}setTimeout(p,1e3)}};setTimeout(p,1e3)}else{console.log("我是后手玩家，等待先手初始化游戏状态"),this.state={...this.state,phase:"onlineBattle",online:{...this.state.online,isWaitingForGameState:!0}},this.render();const p=async()=>{if(!this.state.online.isWaitingForGameState){console.log("【后手轮询】不再等待游戏状态，停止轮询");return}try{const g=(await fe(async()=>{const{getDb:w}=await import("./online-fGHm1H1u.js");return{getDb:w}},__vite__mapDeps([0,1]))).getDb(),{data:y,error:x}=await g.from("game_rooms").select("game_state").eq("id",e.id).single();if(x)console.error("【后手轮询】查询游戏状态失败:",x);else if(y?.game_state){console.log("【后手轮询】从数据库获取到初始化信息:",y.game_state);const w=y.game_state;w.sharedDeckOrder&&w.sharedDeckOrder.length>0?await this.handleOnlineGameAction({type:"GAME_INIT",sharedDeckOrder:w.sharedDeckOrder,firstPlayerId:w.firstPlayerId,player1Name:w.player1Name,player2Name:w.player2Name,randomSeed:w.randomSeed}):await this.handleOnlineGameAction({type:"GAME_START",gameState:w});return}else console.log("【后手轮询】数据库中暂无游戏状态，继续轮询...")}catch(g){console.error("【后手轮询】轮询游戏状态失败:",g)}setTimeout(p,1e3)};console.log("【后手】1秒后开始数据库轮询"),setTimeout(p,1e3);const b=async g=>{if(this.state.online.isWaitingForGameState){console.log(`请求状态同步（第${g}次）`);try{const{broadcastGameAction:y}=await fe(async()=>{const{broadcastGameAction:x}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:x}},__vite__mapDeps([0,1]));await y(e.id,{type:"FULL_STATE_SYNC",gameState:{currentPlayerId:0,turnNumber:0,players:[],firstPlayerId:"",gamePhase:"playing",timestamp:0}},this.roomSubscription||void 0)}catch(y){console.error("请求状态同步失败:",y)}g<3&&this.state.online.isWaitingForGameState&&setTimeout(()=>b(g+1),5e3)}};setTimeout(()=>b(1),3e3)}}catch(i){console.error("进入战斗失败:",i)}}}renderWaitingForGameState(){this.app.innerHTML=`
      <div class="min-h-screen flex items-center justify-center" style="background: transparent;">
        <div class="text-center p-8 rounded-2xl shadow-2xl" style="background: rgba(255, 255, 255, 0.9); border: 4px solid #d4c4a8;">
          <div class="text-4xl mb-4">⏳</div>
          <h2 class="text-2xl font-bold mb-4" style="color: #5a4a3a;">等待游戏开始...</h2>
          <p class="text-lg" style="color: #8b7355;">先手玩家正在初始化游戏</p>
        </div>
      </div>
    `}async startOnlineGameWithFirstPlayer(e,s){console.log("【startOnlineGameWithFirstPlayer】开始执行，先手ID:",e,"battlePlayers数量:",s.length);const{currentRoom:t,playerId:r}=this.state.online,{sharedDeck:i}=this.state;if(!t){console.error("【startOnlineGameWithFirstPlayer】currentRoom 为空，无法开始游戏"),alert("房间信息丢失，请重新进入房间");return}const n=s.find(v=>v.playerId===e),a=s.find(v=>v.playerId!==e);if(!n||!a){console.error("【startOnlineGameWithFirstPlayer】玩家查找失败，firstPlayer:",n,"secondPlayer:",a),alert("玩家信息丢失，请重新进入房间");return}if(console.log("【startOnlineGameWithFirstPlayer】卡包数量:",i.length,"先手:",n.playerNickname),i.length===0){console.error("【startOnlineGameWithFirstPlayer】卡包为空，无法开始游戏"),alert("卡包为空，请先在房间中添加卡牌");return}const o=Math.floor(Math.random()*2147483647),{deckEntriesToCards:l,shuffleWithSeed:d,getCardTemplateKey:c}=await fe(async()=>{const{deckEntriesToCards:v,shuffleWithSeed:E,getCardTemplateKey:S}=await Promise.resolve().then(()=>$t);return{deckEntriesToCards:v,shuffleWithSeed:E,getCardTemplateKey:S}},void 0),h=l(i).filter(v=>v.type!=="hero"),p=d(h,o).map(v=>c(v));console.log("【先手】生成 sharedDeckOrder，长度:",p.length,"seed:",o);const{findHeroGroup:b}=await fe(async()=>{const{findHeroGroup:v}=await Promise.resolve().then(()=>$t);return{findHeroGroup:v}},void 0),{CARD_GROUP_PUBLIC_ID:g}=await fe(async()=>{const{CARD_GROUP_PUBLIC_ID:v}=await Promise.resolve().then(()=>na);return{CARD_GROUP_PUBLIC_ID:v}},void 0),y=this.state.online.heroSelections[e]??void 0,x=this.state.online.heroSelections[a.playerId]??void 0,w=[],f=[];if(y){const v=b(this.state,y);if(v&&v.id!==g){const E=l(v.cards.filter(S=>S.card.type!=="hero"));for(const S of E)w.push(c(S))}}if(x){const v=b(this.state,x);if(v&&v.id!==g){const E=l(v.cards.filter(S=>S.card.type!=="hero"));for(const S of E)f.push(c(S))}}if(this.state=le(this.state,{type:"START_ONLINE_GAME",firstPlayerId:e,player1Name:n.playerNickname,player2Name:a.playerNickname,sharedDeckOrder:p,player1PersonalKeys:w,player2PersonalKeys:f,player1Hero:y,player2Hero:x}),this.render(),t&&r===e){try{const v=(await fe(async()=>{const{getDb:S}=await import("./online-fGHm1H1u.js");return{getDb:S}},__vite__mapDeps([0,1]))).getDb(),{error:E}=await v.from("game_rooms").update({game_state:{sharedDeckOrder:p,firstPlayerId:e,player1Name:n.playerNickname,player2Name:a.playerNickname,randomSeed:o,player1PersonalKeys:w,player2PersonalKeys:f}}).eq("id",t.id);E?console.error("【先手】保存初始化信息到数据库失败:",E):console.log("【先手】已将初始化信息保存到数据库")}catch(v){console.error("【先手】保存初始化信息到数据库失败:",v)}console.log("先手玩家等待 1.5 秒后广播 GAME_INIT..."),await new Promise(v=>setTimeout(v,1500));try{const{broadcastGameAction:v}=await fe(async()=>{const{broadcastGameAction:E}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:E}},__vite__mapDeps([0,1]));console.log("先手广播 GAME_INIT，房间:",t.id,"订阅状态:",this.roomSubscription?"存在":"不存在"),await v(t.id,{type:"GAME_INIT",sharedDeckOrder:p,firstPlayerId:e,player1Name:n.playerNickname,player2Name:a.playerNickname,randomSeed:o,player1PersonalKeys:w,player2PersonalKeys:f},this.roomSubscription||void 0),console.log("已广播 GAME_INIT")}catch(v){console.error("广播 GAME_INIT 失败:",v)}}setTimeout(()=>this.playDrawCardAnimation(300),100)}updateMessagesDisplay(){const e=document.getElementById("messages-container"),{messages:s,playerId:t}=this.state.online;e&&s.length>0&&(e.innerHTML=s.map(r=>`
        <div class="p-2 rounded-lg ${r.sender_id===t?"ml-8":"mr-8"}"
          style="background: ${r.sender_id===t?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"};">
          <div class="text-xs font-bold mb-1" style="color: ${r.sender_id===t?"#4a90d9":"#8b7355"};">
            ${r.sender_nickname}
          </div>
          <div style="color: #5a4a3a;">${r.message}</div>
        </div>
      `).join(""),e.scrollTop=e.scrollHeight)}async unsubscribeFromRoom(){if(this.stopPolling(),this.lastGameStateTimestamp=0,this.roomSubscription)try{const{unsubscribeFromRoom:e}=await fe(async()=>{const{unsubscribeFromRoom:s}=await import("./online-fGHm1H1u.js");return{unsubscribeFromRoom:s}},__vite__mapDeps([0,1]));await e(this.roomSubscription),this.roomSubscription=null,console.log("已取消房间订阅")}catch(e){console.error("取消订阅失败:",e)}}async loadMessages(){const{currentRoom:e}=this.state.online;if(e)try{const{getMessages:s}=await fe(async()=>{const{getMessages:i}=await import("./online-fGHm1H1u.js");return{getMessages:i}},__vite__mapDeps([0,1])),t=await s(e.id);this.state=le(this.state,{type:"UPDATE_MESSAGES",messages:t});for(const i of t)if(i.sender_nickname==="__SYSTEM__"){if(i.message.startsWith("__DECK_DATA__")){const n=this.parseDeckDataMessage(i.message);if(n){const a=this.state.online.playerReady.find(l=>l.player_id===i.sender_id),o=a?a.player_nickname:i.sender_id;this.state=le(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:i.sender_id,filename:"本地卡包",cardCount:n.cardCount,playerNickname:o,comparisonData:n.comparisonData})}}else if(i.message.startsWith("__DECK_IMPORT__")){const n=i.message.split("|");if(n.length>=3){const a=n[1],o=parseInt(n[2],10);this.state.online.remoteDeckImports[i.sender_id]?.comparisonData||(this.state=le(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:i.sender_id,filename:a,cardCount:o,playerNickname:i.sender_id}))}}}const r=document.getElementById("messages-container");if(r&&t.length>0){const{playerId:i}=this.state.online;r.innerHTML=t.map(n=>`
          <div class="p-2 rounded-lg ${n.sender_id===i?"ml-8":"mr-8"}"
            style="background: ${n.sender_id===i?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"};">
            <div class="text-xs font-bold mb-1" style="color: ${n.sender_id===i?"#4a90d9":"#8b7355"};">
              ${n.sender_nickname}
            </div>
            <div style="color: #5a4a3a;">${n.message}</div>
          </div>
        `).join(""),r.scrollTop=r.scrollHeight}}catch(s){console.error("加载消息失败:",s)}}async loadPlayerReady(){const{currentRoom:e,playerReady:s}=this.state.online;if(e)try{const{getPlayerReady:t}=await fe(async()=>{const{getPlayerReady:n}=await import("./online-fGHm1H1u.js");return{getPlayerReady:n}},__vite__mapDeps([0,1])),r=await t(e.id);(r.length!==s.length||r.some((n,a)=>!s[a]||n.is_ready!==s[a].is_ready||n.player_id!==s[a].player_id))&&(console.log("准备状态有变化，更新显示"),this.state=le(this.state,{type:"UPDATE_PLAYER_READY",playerReady:r}),this.state.phase==="room"&&this.render())}catch(t){console.error("加载准备状态失败:",t)}}renderHeroEditor(){if(typeof window<"u"&&(this.isPortraitMode=window.innerWidth/window.innerHeight<3/4),!this.pendingScrollRestoration){const e=document.querySelector(".editor-left-panel-scroll");e&&(this.pendingScrollRestoration={selector:".editor-left-panel-scroll",scrollTop:e.scrollTop})}if(this.isPortraitMode){const e=document.querySelector(".portrait-side-panel-scroll");if(e){const s=e.scrollTop;s>0&&(this.pendingScrollRestoration?this.pendingScrollRestoration.portraitScrollTop=s:this.pendingScrollRestoration={selector:".portrait-side-panel-scroll",scrollTop:s})}}if(this.app.innerHTML=`
      <div class="min-h-screen card-creator-active ${this.isPortraitMode?"flex flex-col p-2 h-auto overflow-visible":"flex flex-col items-center pt-4 px-4 h-screen overflow-hidden"}" style="background: transparent;">
        ${this.isPortraitMode?"":`
        <!-- 隐藏左侧滚动条 -->
        <style>
          .scrollable-panel::-webkit-scrollbar { display: none; }
        </style>
        `}

        ${this.isPortraitMode?`
          <!-- 竖屏模式：顶部操作栏 -->
          <div class="flex items-center justify-between w-full mb-2 p-2 rounded-xl" style="background: rgba(255, 255, 255, 0.9); border: 3px solid #d4c4a8;">
            <div class="flex items-center gap-2">
              <button id="hero-editor-more-btn" class="px-2 py-1 font-bold rounded-lg text-sm"
                style="background: linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%); color: #fff; border: 2px solid #3d85c6;">
                📋 更多编辑
              </button>
              <span class="font-bold text-base" style="color: #5a4a3a; font-family: 'Georgia', serif;">${this.isHeroEditMode?"编辑英雄牌":"创建英雄牌"}</span>
            </div>
            <button id="${this.isHeroEditMode?"back-to-manager-btn":"back-menu-btn"}" class="px-3 py-1 font-bold rounded-lg text-sm"
              style="background: linear-gradient(135deg, ${this.isHeroEditMode?"#6fa8dc":"#c0a080"} 0%, ${this.isHeroEditMode?"#4a90d9":"#b09070"} 100%); color: #fff; border: 2px solid ${this.isHeroEditMode?"#3d85c6":"#a08060"};">
              ${this.isHeroEditMode?"← 返回卡包管理":"← 返回菜单"}
            </button>
          </div>

          <!-- 竖屏模式：左侧贴附的可拉开面板 -->
          <div id="hero-side-panel" class="fixed left-0 top-0 h-full z-50 flex" style="transform: translateX(${this.showSidePanel?"0":"-280px"}); transition: transform 0.3s ease;">
            <!-- 面板内容 -->
            <div class="h-full overflow-y-auto p-3 portrait-side-panel-scroll" style="width: 280px; background: rgba(245, 240, 230, 0.98); border-right: 4px solid #d4c4a8; position: relative;">
              <div class="flex justify-between items-center mb-3">
                <span class="font-bold text-lg" style="color: #8b7355;">更多编辑</span>
                <button id="close-hero-side-panel-btn" class="w-8 h-8 rounded-full flex items-center justify-center" style="background: rgba(212, 196, 168, 0.5); color: #5a4a3a;">◀</button>
              </div>
              <!-- 卡牌列表 -->
              <div class="mb-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-sm" style="color: #8b7355;">卡牌列表</span>
                  <button id="add-hero-derived-btn" class="px-2 py-1 rounded text-xs font-bold" style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 1px solid #4a8a4a;">+ 衍生卡</button>
                </div>
                <div class="flex flex-col gap-1 max-h-48 overflow-y-auto overflow-x-hidden">
                  <!-- 英雄本身 -->
                  <div class="hero-card-list-item px-3 py-2 rounded-lg cursor-pointer transition-all text-sm ${this.heroEditingDerivedIndex===null?"ring-2":""}"
                    data-hero-card-index="hero"
                    style="background: ${this.heroEditingDerivedIndex===null?"rgba(192, 160, 128, 0.5)":"rgba(212, 196, 168, 0.4)"}; border: 2px solid ${this.heroEditingDerivedIndex===null?"#c0a080":"#d4c4a8"};">
                    <div class="flex items-center justify-between">
                      <div class="flex flex-col flex-1 min-w-0">
                        <div class="font-bold text-sm truncate" style="color: #8b5a2b;">${this.heroName||"英雄"}</div>
                        <div class="text-xs" style="color: #8b7355;">🦸 英雄</div>
                      </div>
                    </div>
                  </div>
                  ${this.heroDerivedCards.map((e,s)=>`
                    <div class="hero-card-list-item px-3 py-2 rounded-lg cursor-pointer transition-all text-sm ${this.heroEditingDerivedIndex===s?"ring-2":""}"
                      data-hero-card-index="${s}"
                      style="background: ${this.heroEditingDerivedIndex===s?"rgba(111, 168, 220, 0.4)":"rgba(212, 196, 168, 0.4)"}; border: 2px solid ${this.heroEditingDerivedIndex===s?"#6fa8dc":"#d4c4a8"};">
                      <div class="flex items-center justify-between">
                        <div class="flex flex-col flex-1 min-w-0">
                          <div class="font-bold text-sm truncate" style="color: #4a8a4a;">${e.name||`衍生${s+1}`}</div>
                          <div class="text-xs" style="color: #8b7355;">${e.type==="spell"?"✨法术":"⚔️随从"} | ${e.cost??1}费 ${e.type!=="spell"?`${e.attack??1}/${e.health??1}`:""}</div>
                        </div>
                        <button class="hero-card-list-delete-btn w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ml-2 flex-shrink-0"
                          data-hero-card-index="${s}"
                          style="background: rgba(224, 112, 112, 0.7); color: #fff; border: none; line-height: 1;">×</button>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>
              <!-- 技能列表 -->
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-sm" style="color: #8b7355;">技能列表</span>
                  <button id="add-hero-skill-btn" class="px-2 py-1 rounded text-xs font-bold" style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 1px solid #4a8a4a;">+ 技能</button>
                </div>
                <div class="flex flex-col gap-2 max-h-48 overflow-y-auto overflow-x-hidden">
                  ${this.heroSkills.length===0?`
                    <div class="text-xs text-center py-3 rounded-lg" style="color: #a09080; background: rgba(212, 196, 168, 0.3);">暂无技能</div>
                  `:this.heroSkills.map((e,s)=>`
                    <div class="hero-skill-list-item flex items-start gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all"
                      data-hero-skill-index="${s}"
                      style="background: ${this.heroEditingSkillIndex===s?"rgba(192, 160, 128, 0.5)":"rgba(212, 196, 168, 0.4)"}; border: 2px solid ${this.heroEditingSkillIndex===s?"#c0a080":"#d4c4a8"};">
                      <div class="relative flex-shrink-0" style="width: 56px; height: 56px;">
                        <div class="hero-skill-icon w-14 h-14 rounded-full cursor-pointer overflow-hidden flex items-center justify-center"
                          data-hero-skill-icon="${s}"
                          style="background: ${e.iconData?"transparent":"url('/images/wood_texture_seamless.png') center/cover no-repeat"}; border: 2px solid #c0a080;">
                          ${e.iconData?`<img src="${e.iconData}" class="w-full h-full object-cover" style="border-radius: 50%;">`:""}
                        </div>
                        <div style="position: absolute; right: -4px; bottom: -4px; width: 20px; height: 20px; background-image: url('/images/energy_gem_v2.png'); background-size: contain; background-repeat: no-repeat; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4)); z-index: 10;">
                          <span class="skill-cost-num" style="color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.8); font-weight: bold; font-size: 9px;">${e.type==="passive"?"":e.cost??0}</span>
                        </div>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="skill-name-text font-bold text-sm truncate" style="color: #8b5a2b;">${e.name||`技能 ${s+1}`}</div>
                        <div class="skill-desc-text text-xs mt-0.5" style="color: #8b7355;">${this.getHeroSkillDescription(e)}</div>
                      </div>
                      <button class="hero-skill-delete-btn w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                        data-hero-skill-index="${s}"
                        style="background: rgba(224, 112, 112, 0.7); color: #fff; border: none; line-height: 1;">×</button>
                    </div>
                  `).join("")}
                </div>
                ${this.heroEditingSkillIndex!==null?`
                ${(()=>{const e=this.heroSkills[this.heroEditingSkillIndex],s=e?.type==="passive";return`
                <div class="mt-3 p-3 rounded-xl" style="background: rgba(255, 255, 255, 0.7); border: 2px solid #c0a080;">
                  <!-- 技能类型 -->
                  <div class="flex items-center justify-between mb-2">
                    <div class="font-bold text-xs" style="color: #8b7355;">技能类型</div>
                    <div class="flex gap-1">
                      <button id="hero-skill-type-active" class="px-2 py-0.5 rounded text-xs font-bold transition-all"
                        style="background: ${s?"rgba(212, 196, 168, 0.3)":"linear-gradient(135deg, #c0a080 0%, #a08060 100%)"}; color: ${s?"#8b7355":"#fff"}; border: 1px solid ${s?"#d4c4a8":"#a08060"};">主动</button>
                      <button id="hero-skill-type-passive" class="px-2 py-0.5 rounded text-xs font-bold transition-all"
                        style="background: ${s?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"rgba(212, 196, 168, 0.3)"}; color: ${s?"#fff":"#8b7355"}; border: 1px solid ${s?"#a08060":"#d4c4a8"};">被动</button>
                    </div>
                  </div>
                  <!-- 技能属性 -->
                  <div class="flex items-center justify-between mb-2">
                    <div class="font-bold text-xs" style="color: #8b7355;">技能属性</div>
                    ${s?"":`
                    <label class="flex items-center gap-1 cursor-pointer text-xs font-bold" style="color: #5a4a3a;" onclick="event.stopPropagation()">
                      <input type="checkbox" id="hero-skill-limited-checkbox" ${e?.limited?"checked":""} style="accent-color: #c4a574;">
                      <span>有限</span>
                    </label>
                    `}
                  </div>
                  <div class="space-y-2">
                    <div class="flex items-center gap-2">
                      <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">名称:</label>
                      <input type="text" id="hero-skill-name" value="${e?.name||""}" placeholder="技能名称"
                        class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                    </div>
                    ${s?"":`
                    <div class="flex items-center gap-2">
                      <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">花费:</label>
                      <input type="number" id="hero-skill-cost" value="${e?.cost??1}" min="0" max="10"
                        class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                    </div>
                    ${e?.limited??!1?`<div class="flex items-center gap-2">
                          <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">次数:</label>
                          <input type="number" id="hero-skill-limited-input" value="${e?.maxUses??1}" min="1" max="10"
                            class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                        </div>`:`<div class="flex items-center gap-2">
                          <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">CD:</label>
                          <input type="number" id="hero-skill-cooldown" value="${e?.cooldown??0}" min="0" max="10"
                            class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                        </div>`}
                    `}
                  </div>
                  `})()}
                `:""}
              </div>
            </div>
            ${this.isDrawingMode?`
            <!-- 绘制工具覆盖层 -->
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-start gap-3 pt-6" style="background: url('/images/wood_texture_seamless.png') center/cover no-repeat;">
              <button id="hero-drawing-brush-btn" class="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl transition-all transform hover:scale-110"
                style="background: ${this.drawingTool==="brush"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; border: 3px solid ${this.drawingTool==="brush"?"#4a8a4a":"#d4c4a8"}; color: #fff;"
                title="画笔">
                🖌️
              </button>
              <button id="hero-drawing-eraser-btn" class="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl transition-all transform hover:scale-110"
                style="background: ${this.drawingTool==="eraser"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; border: 3px solid ${this.drawingTool==="eraser"?"#4a8a4a":"#d4c4a8"}; color: #fff;"
                title="橡皮">
                🧽
              </button>
              <button id="hero-drawing-clear-btn" class="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl transition-all transform hover:scale-110"
                style="background: rgba(212, 196, 168, 0.5); border: 3px solid #d4c4a8; color: #fff;"
                title="清空">
                🗑
              </button>
              <div class="flex flex-col gap-1 mt-1">
                <button id="hero-brush-thin-btn" class="w-14 h-8 rounded-lg font-bold text-sm transition-all"
                  style="background: ${this.brushSizePreset==="thin"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.brushSizePreset==="thin"?"#fff":"#5a4a3a"}; border: 2px solid ${this.brushSizePreset==="thin"?"#4a8a4a":"#d4c4a8"};">
                  细
                </button>
                <button id="hero-brush-medium-btn" class="w-14 h-8 rounded-lg font-bold text-sm transition-all"
                  style="background: ${this.brushSizePreset==="medium"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.brushSizePreset==="medium"?"#fff":"#5a4a3a"}; border: 2px solid ${this.brushSizePreset==="medium"?"#4a8a4a":"#d4c4a8"};">
                  中
                </button>
                <button id="hero-brush-thick-btn" class="w-14 h-8 rounded-lg font-bold text-sm transition-all"
                  style="background: ${this.brushSizePreset==="thick"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.brushSizePreset==="thick"?"#fff":"#5a4a3a"}; border: 2px solid ${this.brushSizePreset==="thick"?"#4a8a4a":"#d4c4a8"};">
                  粗
                </button>
              </div>
            </div>
            `:""}
          </div>
        `:""}

        <div class="flex gap-6 ${this.isPortraitMode?"flex-col items-center flex-1 w-full":"max-w-6xl w-full flex-1 min-h-0 items-center"}">
          <!-- 左侧区域：卡牌列表（横屏模式） -->
          ${this.isPortraitMode?"":`
          <div class="w-56 flex-shrink-0 p-3 rounded-2xl overflow-y-auto editor-left-panel-scroll self-stretch" style="background: rgba(255, 255, 255, 0.9); border: 3px solid #d4c4a8; position: relative; scrollbar-width: none; -ms-overflow-style: none;">
            <!-- 卡牌列表 -->
            <div class="mb-4">
              <div class="flex items-center justify-between mb-2">
                <span class="font-bold text-sm" style="color: #8b7355;">卡牌列表</span>
                <button id="add-hero-derived-btn" class="px-2 py-1 rounded text-xs font-bold" style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 1px solid #4a8a4a;">+ 衍生卡</button>
              </div>
              <div class="flex flex-col gap-1 max-h-48 overflow-y-auto overflow-x-hidden">
                <!-- 英雄本身 -->
                <div class="hero-card-list-item px-3 py-2 rounded-lg cursor-pointer transition-all text-sm ${this.heroEditingDerivedIndex===null?"ring-2":""}"
                  data-hero-card-index="hero"
                  style="background: ${this.heroEditingDerivedIndex===null?"rgba(192, 160, 128, 0.5)":"rgba(212, 196, 168, 0.4)"}; border: 2px solid ${this.heroEditingDerivedIndex===null?"#c0a080":"#d4c4a8"};">
                  <div class="flex items-center justify-between">
                    <div class="flex flex-col flex-1 min-w-0">
                      <div class="font-bold text-sm truncate" style="color: #8b5a2b;">${this.heroName||"英雄"}</div>
                      <div class="text-xs" style="color: #8b7355;">🦸 英雄</div>
                    </div>
                  </div>
                </div>
                ${this.heroDerivedCards.map((e,s)=>`
                  <div class="hero-card-list-item px-3 py-2 rounded-lg cursor-pointer transition-all text-sm ${this.heroEditingDerivedIndex===s?"ring-2":""}"
                    data-hero-card-index="${s}"
                    style="background: ${this.heroEditingDerivedIndex===s?"rgba(111, 168, 220, 0.4)":"rgba(212, 196, 168, 0.4)"}; border: 2px solid ${this.heroEditingDerivedIndex===s?"#6fa8dc":"#d4c4a8"};">
                    <div class="flex items-center justify-between">
                      <div class="flex flex-col flex-1 min-w-0">
                        <div class="font-bold text-sm truncate" style="color: #4a8a4a;">${e.name||`衍生${s+1}`}</div>
                        <div class="text-xs" style="color: #8b7355;">${e.type==="spell"?"✨法术":"⚔️随从"} | ${e.cost??1}费 ${e.type!=="spell"?`${e.attack??1}/${e.health??1}`:""}</div>
                      </div>
                      <button class="hero-card-list-delete-btn w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ml-2 flex-shrink-0"
                        data-hero-card-index="${s}"
                        style="background: rgba(224, 112, 112, 0.7); color: #fff; border: none; line-height: 1;">×</button>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
            <!-- 技能列表 -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="font-bold text-sm" style="color: #8b7355;">技能列表</span>
                <button id="add-hero-skill-btn" class="px-2 py-1 rounded text-xs font-bold" style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 1px solid #4a8a4a;">+ 技能</button>
              </div>
              <div class="flex flex-col gap-2 max-h-48 overflow-y-auto overflow-x-hidden">
                ${this.heroSkills.length===0?`
                  <div class="text-xs text-center py-3 rounded-lg" style="color: #a09080; background: rgba(212, 196, 168, 0.3);">暂无技能</div>
                `:this.heroSkills.map((e,s)=>`
                  <div class="hero-skill-list-item flex items-start gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all"
                    data-hero-skill-index="${s}"
                    style="background: ${this.heroEditingSkillIndex===s?"rgba(192, 160, 128, 0.5)":"rgba(212, 196, 168, 0.4)"}; border: 2px solid ${this.heroEditingSkillIndex===s?"#c0a080":"#d4c4a8"};">
                    <div class="relative flex-shrink-0" style="width: 56px; height: 56px;">
                      <div class="hero-skill-icon w-14 h-14 rounded-full cursor-pointer overflow-hidden flex items-center justify-center"
                        data-hero-skill-icon="${s}"
                        style="background: ${e.iconData?"transparent":"url('/images/wood_texture_seamless.png') center/cover no-repeat"}; border: 2px solid #c0a080;">
                        ${e.iconData?`<img src="${e.iconData}" class="w-full h-full object-cover" style="border-radius: 50%;">`:""}
                      </div>
                      <div style="position: absolute; right: -4px; bottom: -4px; width: 20px; height: 20px; background-image: url('/images/energy_gem_v2.png'); background-size: contain; background-repeat: no-repeat; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4)); z-index: 10;">
                        <span class="skill-cost-num" style="color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.8); font-weight: bold; font-size: 9px;">${e.type==="passive"?"":e.cost??0}</span>
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="skill-name-text font-bold text-sm truncate" style="color: #8b5a2b;">${e.name||`技能 ${s+1}`}</div>
                      <div class="skill-desc-text text-xs mt-0.5" style="color: #8b7355;">${this.getHeroSkillDescription(e)}</div>
                    </div>
                    <button class="hero-skill-delete-btn w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      data-hero-skill-index="${s}"
                      style="background: rgba(224, 112, 112, 0.7); color: #fff; border: none; line-height: 1;">×</button>
                  </div>
                `).join("")}
              </div>
              ${this.heroEditingSkillIndex!==null?`
              ${(()=>{const e=this.heroSkills[this.heroEditingSkillIndex],s=e?.type==="passive";return`
              <div class="mt-3 p-3 rounded-xl" style="background: rgba(255, 255, 255, 0.7); border: 2px solid #c0a080;">
                <!-- 技能类型 -->
                <div class="flex items-center justify-between mb-2">
                  <div class="font-bold text-xs" style="color: #8b7355;">技能类型</div>
                  <div class="flex gap-1">
                    <button id="hero-skill-type-active" class="px-2 py-0.5 rounded text-xs font-bold transition-all"
                      style="background: ${s?"rgba(212, 196, 168, 0.3)":"linear-gradient(135deg, #c0a080 0%, #a08060 100%)"}; color: ${s?"#8b7355":"#fff"}; border: 1px solid ${s?"#d4c4a8":"#a08060"};">主动</button>
                    <button id="hero-skill-type-passive" class="px-2 py-0.5 rounded text-xs font-bold transition-all"
                      style="background: ${s?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"rgba(212, 196, 168, 0.3)"}; color: ${s?"#fff":"#8b7355"}; border: 1px solid ${s?"#a08060":"#d4c4a8"};">被动</button>
                  </div>
                </div>
                <!-- 技能属性 -->
                <div class="flex items-center justify-between mb-2">
                  <div class="font-bold text-xs" style="color: #8b7355;">技能属性</div>
                  ${s?"":`
                  <label class="flex items-center gap-1 cursor-pointer text-xs font-bold" style="color: #5a4a3a;" onclick="event.stopPropagation()">
                    <input type="checkbox" id="hero-skill-limited-checkbox" ${e?.limited?"checked":""} style="accent-color: #c4a574;">
                    <span>有限</span>
                  </label>
                  `}
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">名称:</label>
                    <input type="text" id="hero-skill-name" value="${e?.name||""}" placeholder="技能名称"
                      class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                  </div>
                  ${s?"":`
                  <div class="flex items-center gap-2">
                    <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">花费:</label>
                    <input type="number" id="hero-skill-cost" value="${e?.cost??1}" min="0" max="10"
                      class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                  </div>
                  ${e?.limited??!1?`<div class="flex items-center gap-2">
                        <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">次数:</label>
                        <input type="number" id="hero-skill-limited-input" value="${e?.maxUses??1}" min="1" max="10"
                          class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                      </div>`:`<div class="flex items-center gap-2">
                        <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">CD:</label>
                        <input type="number" id="hero-skill-cooldown" value="${e?.cooldown??0}" min="0" max="10"
                          class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                      </div>`}
                  `}
                </div>
                `})()}
                ${(()=>{const e=this.heroSkills[this.heroEditingSkillIndex],s=e?.effects||[],t=s[this.heroEditingSkillEffectIndex];if(!t)return"";const r=t.moment||"打出时";return`
                <!-- 技能效果选择 -->
                <div class="mt-3">
                  <div class="flex items-center justify-between mb-1">
                    <span class="font-bold text-xs" style="color: #8b7355;">技能效果</span>
                    <div class="flex items-center gap-1">
                      ${s.length>1?`
                      <button id="remove-hero-skill-effect-btn" class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                        style="background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: 1px solid #a04040;">-</button>
                      `:""}
                      <button id="add-hero-skill-effect-btn" class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                        style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 1px solid #4a8a4a;">+</button>
                    </div>
                  </div>
                  <div class="flex flex-wrap gap-1">
                    ${s.map((i,n)=>`
                      <button class="hero-skill-effect-tab px-2 py-0.5 rounded text-xs font-bold transition-all"
                        data-hero-skill-effect-index="${n}"
                        style="background: ${this.heroEditingSkillEffectIndex===n?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"rgba(212, 196, 168, 0.4)"}; color: ${this.heroEditingSkillEffectIndex===n?"#fff":"#8b7355"}; border: 1px solid ${this.heroEditingSkillEffectIndex===n?"#a08060":"#d4c4a8"};">
                        效果${n+1}
                      </button>
                    `).join("")}
                  </div>
                </div>
                <!-- 技能时刻选择 -->
                <div class="mt-3">
                  <button id="toggle-hero-skill-moment-btn" class="w-full flex items-center justify-between font-bold text-xs mb-1" style="color: #8b7355;">
                    <span>时刻</span>
                    <span class="text-base">${this.showHeroSkillMomentPanel?"▼":"▶"}</span>
                  </button>
                  ${this.showHeroSkillMomentPanel?`
                  <div class="space-y-1">
                    ${(e.type==="passive"?["回合开始时","回合结束时","受伤时"]:["打出时","下回合开始时"]).map(i=>`
                      <div class="hero-skill-moment-item p-1.5 rounded-lg cursor-pointer transition-all ${r===i?"selected":""}"
                        data-hero-skill-moment="${i}"
                        style="background: ${r===i?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${r===i?"#6fa8dc":"#d4c4a8"};">
                        <div class="font-bold text-xs" style="color: #5a4a3a;">${i==="打出时"?"发动时":i==="⚙️变量变化时"?"变量变化时":($e[i]||"")+i}</div>
                      </div>
                    `).join("")}
                  </div>
                  `:`
                  <div class="text-xs" style="color: #8b7355;">${r==="打出时"?"发动时":($e[r]||"")+r}</div>
                  `}
                </div>
                <!-- 技能条件选择 -->
                <div class="mt-2">
                  <button id="toggle-hero-skill-condition-btn" class="w-full flex items-center justify-between font-bold text-xs mb-1" style="color: #8b7355;">
                    <span>条件</span>
                    <span class="text-base">${this.showHeroSkillConditionPanel?"▼":"▶"}</span>
                  </button>
                  ${this.showHeroSkillConditionPanel?`
                  <div class="space-y-1">
                    ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...t?.moment==="攻击时"?["target_attr"]:[]].map(i=>{const n=this.isConditionSelected(i,t),a=this.getConditionItemStyle(i,t),o=i==="guaranteed"?"必然触发":i==="d6"?"🎲 D6":i==="hero_hp"?"英雄血量":i==="minion_count"?"随从数":i==="hand_count"?"手牌数":i==="exists_minion"?"存在随从":"目标属性",l=i==="d6"?"w-6 h-6":"";return`
                        <div class="hero-skill-condition-item px-2 py-1 rounded-lg cursor-pointer transition-all ${n?"selected":""}"
                          data-hero-skill-condition="${i}"
                          style="${a}">
                          <div class="font-bold text-xs" style="color: #5a4a3a;">${o}</div>
                          ${i==="d6"&&n?`
                            <div class="flex gap-1 mt-1">
                              ${[1,2,3,4,5,6].map(d=>`
                                <button class="trigger-num-btn ${l} rounded text-xs font-bold ${(t.triggerNumbers||[1,2,3,4,5,6]).includes(d)?"selected":""}"
                                  data-trigger-num="${d}" data-editor="hero-skill"
                                  style="background: ${(t.triggerNumbers||[1,2,3,4,5,6]).includes(d)?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"#dccfc0"}; color: ${(t.triggerNumbers||[1,2,3,4,5,6]).includes(d)?"#fff":"#8b7355"}; border: 1px solid ${(t.triggerNumbers||[1,2,3,4,5,6]).includes(d)?"#a08060":"#d4c4a8"};">
                                  ${d}
                                </button>
                              `).join("")}
                            </div>
                          `:""}
                          ${n?this.getConditionSubEditor("hero-skill",t):""}
                        </div>
                      `}).join("")}
                  </div>
                  `:`
                  <div class="text-xs" style="color: #8b7355;">
                    ${this.getConditionCollapsedText(t)}
                  </div>
                  `}
                </div>
                <!-- 技能目标选择 -->
                <div class="mt-2">
                  <button id="toggle-hero-skill-target-btn" class="w-full flex items-center justify-between font-bold text-xs mb-1" style="color: #8b7355;">
                    <div class="flex items-center gap-2">
                      <span>目标</span>
                      ${t.targets?.length>1||t.targets?.includes("我方所有随从")||t.targets?.includes("敌方所有随从")?`
                        <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;" onclick="event.stopPropagation()">
                          <input type="checkbox" id="random-target-check-hero-skill" ${t.isRandomTarget?"checked":""}
                            style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                          随机
                          <script>console.log('[RENDER] random checkbox, skill=' + ${this.heroEditingSkillIndex??"null"} + ', effect=' + ${this.heroEditingSkillEffectIndex} + ', isRandomTarget=' + ${t.isRandomTarget} + ', targets=' + JSON.stringify(skillEffect.targets));<\/script>
                        </label>
                      `:""}
                    </div>
                    <span class="flex items-center gap-2">
                      ${!this.showHeroSkillTargetPanel&&(t.targets?.includes("无需目标")||t.targets?.includes("卡牌"))?`
                        <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;" onclick="event.stopPropagation()">
                          <input type="checkbox" id="hero-skill-opponent-checkbox" ${t.isOpponent?"checked":""} style="accent-color: #c4a574;">
                          <span>对手</span>
                        </label>
                      `:""}
                      <span class="text-base">${this.showHeroSkillTargetPanel?"▼":"▶"}</span>
                    </span>
                  </button>
                  ${this.showHeroSkillTargetPanel?`
                  <div class="space-y-1 max-h-32 overflow-y-auto hero-skill-target-scroll">
                    ${["无需目标","卡牌","选择目标","选择随从","我方英雄","敌方英雄","我方所有随从","敌方所有随从"].map(i=>`
                      <div class="hero-skill-target-item p-1.5 rounded-lg cursor-pointer transition-all ${t.targets?.includes(i)?"selected":""}"
                        data-hero-skill-target="${i}"
                        style="background: ${t.targets?.includes(i)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${t.targets?.includes(i)?"#f5a623":"#d4c4a8"};">
                        <div class="font-bold text-xs" style="color: #5a4a3a;">${i}</div>
                      </div>
                    `).join("")}
                  </div>
                  `:`
                  <div class="text-xs" style="color: #8b7355;">
                    ${t.targets?.length>0?`${t.isOpponent?"对手 ":""}${t.targets.join("、")}`:"点击展开选择"}
                  </div>
                  `}
                </div>
                ${t.targets?.length>0?`
                <!-- 技能效果选择 -->
                <div class="mt-2">
                  <div class="font-bold text-xs mb-1" style="color: #8b7355;">效果</div>
                  <div class="space-y-1">
                    ${(()=>{const i=t.targets||[],n=[];return i.includes("无需目标")&&n.push("抽牌","弃牌","获得能量","失去能量"),i.includes("卡牌")&&(n.push("召唤","获得"),n.push("属性变化")),(!i.includes("无需目标")&&!i.includes("卡牌")||i.length>1)&&(n.push("造成伤害","给予印记","治愈"),i.some(a=>a==="选择随从"||a==="我方所有随从"||a==="敌方所有随从")&&n.push("属性变化")),n.map(a=>`
                        <div class="hero-skill-effect-item p-1.5 rounded-lg cursor-pointer transition-all ${t.effect===a?"selected":""}"
                          data-hero-skill-effect="${a}"
                          style="background: ${t.effect===a?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${t.effect===a?"#e07070":"#d4c4a8"};">
                          <div class="font-bold text-xs" style="color: #5a4a3a;">${a}</div>
                        </div>
                      `).join("")})()}
                  </div>
                  ${t.effect?`
                    <div class="mt-1 pt-1" style="border-top: 1px solid #d4c4a8;">
                      ${t.effect==="召唤"||t.effect==="获得"?`
                        <div class="space-y-1">
                          <div class="flex items-center justify-between mb-1">
                            <div class="font-bold text-xs" style="color: #8b7355;">${t.effect==="召唤"?"召唤卡牌":"获得卡牌"}</div>
                            <div class="flex items-center gap-1">
                              <span class="text-xs" style="color: #8b7355;">数量</span>
                              <input type="number" id="hero-skill-summon-count-input" value="${t.value||1}" min="1" max="99"
                                class="w-12 h-6 text-center text-xs border rounded"
                                style="background: rgba(212, 196, 168, 0.2); border-color: #d4c4a8; color: #5a4a3a;">
                            </div>
                          </div>
                          <div class="mb-1">
                            <label class="font-bold text-xs mb-1" style="color: #8b7355;">来源</label>
                            <div class="flex flex-wrap gap-1">
                              ${(()=>{const i=[{key:"derived",label:"衍生卡"},{key:"deck_top",label:"抽牌堆顶"},{key:"discard_top",label:"弃牌堆顶"},{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],n=t.summonSource??"derived";return i.map(a=>`
                                  <div class="hero-skill-summon-source-btn px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${n===a.key?"selected":""}"
                                    data-source="${a.key}"
                                    style="background: ${n===a.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${n===a.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                    ${a.label}
                                  </div>
                                `).join("")})()}
                            </div>
                          </div>
                          <div class="flex items-center justify-between">
                            <label class="font-bold text-xs" style="color: #8b7355;">选择卡牌:</label>
                            <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;">
                              <input type="checkbox" id="hero-skill-summon-random-checkbox" ${t.isRandom?"checked":""}
                                style="accent-color: #c4a574;">
                              <span>随机</span>
                            </label>
                          </div>
                          ${(t.summonSource??"derived")==="derived"?`
                          <div class="flex flex-col gap-1 max-h-24 overflow-y-auto">
                            ${(()=>{const i=t.isRandom?t.summonedCardIndices??[]:t.summonedCardIndex!==void 0?[t.summonedCardIndex]:[];return this.heroDerivedCards.map((a,o)=>{if(a.type==="hero"||t.effect==="召唤"&&a.type!=="minion")return null;const l=i.includes(o);return`
                                  <div class="hero-skill-summon-card-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${l?"selected":""}"
                                    data-hero-skill-summon-index="${o}"
                                    style="background: ${l?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${l?"#6fa8dc":"#d4c4a8"};">
                                    ${a.name||"未命名"}${a.type==="spell"?" [法术]":""}
                                  </div>
                                `}).filter(Boolean).join("")})()}
                          </div>
                          `:""}
                        </div>
                      `:t.effect==="属性变化"?`
                        <div class="space-y-1">
                          ${t.targets?.includes("卡牌")?`
                          <div class="flex items-center gap-0">
                            <label class="font-bold text-xs mr-1" style="color: #8b7355;">费:</label>
                            <input type="number" id="hero-skill-cost-value" value="${t.costValue}" min="0" max="99"
                              class="w-10 px-1 py-0.5 rounded outline-none text-center text-xs mr-1"
                              style="border: 1px solid #d4c4a8; background: #faf8f5;">
                            <button id="hero-skill-cost-pos-btn" class="w-5 h-5 rounded font-bold text-xs ${t.costValue===0?"opacity-50":""}"
                              style="background: ${t.costValue===0?"#999":!t.isCostSet&&t.isCostPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 1px solid ${t.costValue===0?"#777":!t.isCostSet&&t.isCostPositive?"#4a8a4a":"#aaa"};">+</button>
                            <button id="hero-skill-cost-zero-btn" class="w-5 h-5 rounded font-bold text-xs ${t.costValue===0?"":"opacity-50"}"
                              style="background: ${t.costValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 1px solid ${t.costValue===0?"#3a7ab0":"#aaa"};">0</button>
                            <button id="hero-skill-cost-neg-btn" class="w-5 h-5 rounded font-bold text-xs ${t.costValue===0?"opacity-50":""}"
                              style="background: ${t.costValue===0?"#999":!t.isCostSet&&!t.isCostPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 1px solid ${t.costValue===0?"#777":!t.isCostSet&&!t.isCostPositive?"#a04040":"#aaa"};">-</button>
                            <button id="hero-skill-cost-set-btn" class="w-5 h-5 rounded font-bold text-xs ${t.costValue===0?"opacity-50":""}"
                              style="background: ${t.costValue===0?"#999":t.isCostSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 1px solid ${t.costValue===0?"#777":t.isCostSet?"#b89020":"#aaa"};">=</button>
                          </div>
                          `:""}
                          <div class="flex items-center gap-0">
                            <label class="font-bold text-xs mr-1" style="color: #8b7355;">攻:</label>
                            <input type="number" id="hero-skill-attack-value" value="${t.attackValue}" min="0" max="99"
                              class="w-10 px-1 py-0.5 rounded outline-none text-center text-xs mr-1"
                              style="border: 1px solid #d4c4a8; background: #faf8f5;">
                            <button id="hero-skill-atk-pos-btn" class="w-5 h-5 rounded font-bold text-xs ${t.attackValue===0?"opacity-50":""}"
                              style="background: ${t.attackValue===0?"#999":!t.isAttackSet&&t.isAttackPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 1px solid ${t.attackValue===0?"#777":!t.isAttackSet&&t.isAttackPositive?"#4a8a4a":"#aaa"};">+</button>
                            <button id="hero-skill-atk-zero-btn" class="w-5 h-5 rounded font-bold text-xs ${t.attackValue===0?"":"opacity-50"}"
                              style="background: ${t.attackValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 1px solid ${t.attackValue===0?"#3a7ab0":"#aaa"};">0</button>
                            <button id="hero-skill-atk-neg-btn" class="w-5 h-5 rounded font-bold text-xs ${t.attackValue===0?"opacity-50":""}"
                              style="background: ${t.attackValue===0?"#999":!t.isAttackSet&&!t.isAttackPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 1px solid ${t.attackValue===0?"#777":!t.isAttackSet&&!t.isAttackPositive?"#a04040":"#aaa"};">-</button>
                            <button id="hero-skill-atk-set-btn" class="w-5 h-5 rounded font-bold text-xs ${t.attackValue===0?"opacity-50":""}"
                              style="background: ${t.attackValue===0?"#999":t.isAttackSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 1px solid ${t.attackValue===0?"#777":t.isAttackSet?"#b89020":"#aaa"};">=</button>
                          </div>
                          <div class="flex items-center gap-0">
                            <label class="font-bold text-xs mr-1" style="color: #8b7355;">血:</label>
                            <input type="number" id="hero-skill-health-value" value="${t.healthValue}" min="0" max="99"
                              class="w-10 px-1 py-0.5 rounded outline-none text-center text-xs mr-1"
                              style="border: 1px solid #d4c4a8; background: #faf8f5;">
                            <button id="hero-skill-hp-pos-btn" class="w-5 h-5 rounded font-bold text-xs ${t.healthValue===0?"opacity-50":""}"
                              style="background: ${t.healthValue===0?"#999":!t.isHealthSet&&t.isHealthPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 1px solid ${t.healthValue===0?"#777":!t.isHealthSet&&t.isHealthPositive?"#4a8a4a":"#aaa"};">+</button>
                            <button id="hero-skill-hp-zero-btn" class="w-5 h-5 rounded font-bold text-xs ${t.healthValue===0?"":"opacity-50"}"
                              style="background: ${t.healthValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 1px solid ${t.healthValue===0?"#3a7ab0":"#aaa"};">0</button>
                            <button id="hero-skill-hp-neg-btn" class="w-5 h-5 rounded font-bold text-xs ${t.healthValue===0?"opacity-50":""}"
                              style="background: ${t.healthValue===0?"#999":!t.isHealthSet&&!t.isHealthPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 1px solid ${t.healthValue===0?"#777":!t.isHealthSet&&!t.isHealthPositive?"#a04040":"#aaa"};">-</button>
                            <button id="hero-skill-hp-set-btn" class="w-5 h-5 rounded font-bold text-xs ${t.healthValue===0?"opacity-50":""}"
                              style="background: ${t.healthValue===0?"#999":t.isHealthSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 1px solid ${t.healthValue===0?"#777":t.isHealthSet?"#b89020":"#aaa"};">=</button>
                          </div>
                        </div>
                      `:`
                        <div class="flex items-center gap-2">
                          <label class="font-bold text-xs" style="color: #8b7355;">数值:</label>
                          <input type="number" id="hero-skill-effect-value" value="${t.value}" min="1" max="99"
                            class="w-12 px-1 py-0.5 rounded outline-none text-center text-xs"
                            style="border: 1px solid #d4c4a8; background: #faf8f5;">
                        </div>
                      `}
                    </div>
                  `:""}
                </div>
                `:""}
                `})()}
              </div>
              `:""}
            </div>
            ${this.isDrawingMode?`
            <!-- 绘制工具覆盖层 -->
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-start gap-3 pt-6" style="background: url('/images/wood_texture_seamless.png') center/cover no-repeat;">
              <button id="hero-drawing-brush-btn" class="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl transition-all transform hover:scale-110"
                style="background: ${this.drawingTool==="brush"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; border: 3px solid ${this.drawingTool==="brush"?"#4a8a4a":"#d4c4a8"}; color: #fff;"
                title="画笔">
                🖌️
              </button>
              <button id="hero-drawing-eraser-btn" class="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl transition-all transform hover:scale-110"
                style="background: ${this.drawingTool==="eraser"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; border: 3px solid ${this.drawingTool==="eraser"?"#4a8a4a":"#d4c4a8"}; color: #fff;"
                title="橡皮">
                🧽
              </button>
              <button id="hero-drawing-clear-btn" class="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl transition-all transform hover:scale-110"
                style="background: rgba(212, 196, 168, 0.5); border: 3px solid #d4c4a8; color: #fff;"
                title="清空">
                🗑
              </button>
              <div class="flex flex-col gap-1 mt-1">
                <button id="hero-brush-thin-btn" class="w-14 h-8 rounded-lg font-bold text-sm transition-all"
                  style="background: ${this.brushSizePreset==="thin"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.brushSizePreset==="thin"?"#fff":"#5a4a3a"}; border: 2px solid ${this.brushSizePreset==="thin"?"#4a8a4a":"#d4c4a8"};">
                  细
                </button>
                <button id="hero-brush-medium-btn" class="w-14 h-8 rounded-lg font-bold text-sm transition-all"
                  style="background: ${this.brushSizePreset==="medium"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.brushSizePreset==="medium"?"#fff":"#5a4a3a"}; border: 2px solid ${this.brushSizePreset==="medium"?"#4a8a4a":"#d4c4a8"};">
                  中
                </button>
                <button id="hero-brush-thick-btn" class="w-14 h-8 rounded-lg font-bold text-sm transition-all"
                  style="background: ${this.brushSizePreset==="thick"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.brushSizePreset==="thick"?"#fff":"#5a4a3a"}; border: 2px solid ${this.brushSizePreset==="thick"?"#4a8a4a":"#d4c4a8"};">
                  粗
                </button>
              </div>
            </div>
            `:""}
          </div>
          `}

          <!-- 中间区域：预览 + 编辑区 -->
          <div class="${this.isPortraitMode?"w-full flex flex-col items-center flex-1":"flex-1 flex flex-col items-center"}">
            ${this.heroEditingDerivedIndex===null?`
            <!-- ===== 英雄本身预览 ===== -->
            <div id="hero-card-preview" class="relative mb-4"
              style="position: relative; width: 320px; height: 240px; background: ${this.heroImageData?`url(${this.heroImageData}) center/cover no-repeat`:"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)"}; border: 4px solid #d4c4a8; border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);">
              ${this.isDrawingMode?`
              <canvas id="hero-drawing-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 20; cursor: none;"></canvas>
              `:""}
            </div>

            ${this.isDrawingMode?`
            <!-- 画笔色块 -->
            <div class="flex justify-center gap-1.5 mb-2" style="background: transparent;">
              ${this.COLORS.map((e,s)=>`
                <button id="hero-color-swatch-${s}" class="w-7 h-7 rounded-sm transition-all transform hover:scale-110"
                  style="background: ${e}; border: 2px solid ${s===this.currentColorIndex?"#ffffff":"transparent"}; cursor: pointer;"
                  title="${["红","橙","黄","绿","青","蓝","紫","黑"][s]}"></button>
              `).join("")}
            </div>
            `:""}

            <!-- 英雄输入区域 -->
            <div class="w-full max-w-sm space-y-3 p-4 rounded-2xl" style="display: ${this.isDrawingMode?"none":"block"}; background: rgba(255, 255, 255, 0.8); border: 3px solid #d4c4a8;">
              <div class="flex items-center gap-3">
                <label class="w-16 font-bold text-sm" style="color: #5a4a3a;">名称:</label>
                <input type="text" id="hero-name" value="${this.heroName}" placeholder="输入英雄名称"
                  class="flex-1 px-3 py-2 rounded-lg outline-none text-sm"
                  style="border: 2px solid #d4c4a8; background: #faf8f5;">
              </div>

              <!-- 语音台词输入 -->
              <div class="mt-2 pt-2" style="border-top: 2px dashed #d4c4a8;">
                <div class="text-xs font-bold mb-2" style="color: #8b7355;">🎤 对战语音</div>
                <div class="space-y-1.5">
                  ${[{id:"hero-speech-greeting",label:"问候",placeholder:"你好！"},{id:"hero-speech-apology",label:"道歉",placeholder:"抱歉。"},{id:"hero-speech-taunt",label:"嘲讽",placeholder:"吁，Loser！"},{id:"hero-speech-exclamation",label:"感叹",placeholder:"Awww man！"},{id:"hero-speech-pity",label:"可惜",placeholder:"aww..."},{id:"hero-speech-flirt",label:"调情",placeholder:"我喜欢你。"}].map(e=>`
                    <div class="flex items-center gap-2">
                      <label class="w-12 text-xs font-bold flex-shrink-0" style="color: #8b7355;">${e.label}:</label>
                      <input type="text" id="${e.id}" value="${this.heroSpeech[e.id.replace("hero-speech-","")]||""}"
                        placeholder="${e.placeholder}"
                        class="flex-1 px-2 py-1 rounded outline-none text-xs"
                        style="border: 1px solid #d4c4a8; background: #faf8f5; color: #5a4a3a;">
                    </div>
                  `).join("")}
                </div>

                <!-- 语音类型选择 -->
                <div class="flex items-center gap-2">
                  <label class="w-12 text-xs font-bold flex-shrink-0" style="color: #8b7355;">语音:</label>
                  <div class="flex gap-1" id="hero-voice-type">
                    <button data-voice-type="male" class="voice-type-btn px-2 py-1 rounded text-xs border transition-all"
                      style="border-color: #d4c4a8; background: ${this.heroVoiceType==="male"?"#e8ddd0":"#faf8f5"}; color: #5a4a3a;">♂️</button>
                    <button data-voice-type="none" class="voice-type-btn px-2 py-1 rounded text-xs border transition-all"
                      style="border-color: #d4c4a8; background: ${this.heroVoiceType==="none"?"#e8ddd0":"#faf8f5"}; color: #5a4a3a;">-</button>
                    <button data-voice-type="female" class="voice-type-btn px-2 py-1 rounded text-xs border transition-all"
                      style="border-color: #d4c4a8; background: ${this.heroVoiceType==="female"?"#e8ddd0":"#faf8f5"}; color: #5a4a3a;">♀️</button>
                  </div>
                </div>
              </div>

              <!-- 清空一切按钮 -->
              <button id="reset-hero-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm mt-2"
                style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 2px solid #a08060;">
                🗑️ 清空一切
              </button>
            </div>
            `:`
            <!-- ===== 衍生卡预览 ===== -->
            ${(()=>{const e=this.heroDerivedCards[this.heroEditingDerivedIndex];if(!e)return"";const s=e.type==="spell",t=this.getCardFullEffectText(e,e.derivedCards).replace(/<br>；/g,"；");return`
              <div id="hero-derived-preview" class="relative mb-4 card-preview"
                style="position: relative; width: 200px; height: 300px; background: ${e.imageData?`url(${e.imageData}) center/cover no-repeat`:"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)"}; border: 4px solid #d4c4a8; border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2); padding: 10px; display: flex; flex-direction: column;">
                ${this.isDrawingMode?`
                <canvas id="hero-derived-drawing-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 20; cursor: none;"></canvas>
                `:""}
                <!-- 费用 + 名称 -->
                <div class="flex items-center gap-2 mb-2">
                  <div class="card-cost-diamond"><span>${e.cost}</span></div>
                  <div class="flex-1 text-center font-bold text-sm" style="color: #ffffff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; word-break: break-all;">${e.name||"未命名"}</div>
                </div>
                
                ${s?`
                <!-- 法术效果描述 -->
                <div class="flex-1 flex items-center justify-center text-center text-xs px-1" style="color: #ffffff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; line-height: 1.4;">
                  ${t||"选择法术效果"}
                </div>
                `:`
                <!-- 随从效果描述 -->
                <div class="text-center text-xs flex-1 flex items-center justify-center px-1" style="color: #ffffff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; line-height: 1.3;">
                  ${t}
                </div>

                <!-- 随从词条 -->
                ${e.keywords&&e.keywords.length>0?`
                  <div class="flex flex-wrap gap-1 justify-center mb-1">
                    ${e.keywords.map(r=>{const i=r.name==="护甲"?r.value??e.armorValue:r.name==="准备"?r.value??1:"";return'<span class="keyword-tag" style="font-size: 9px; padding: 1px 4px; border-radius: 3px;">'+r.name+(i||(r.name==="准备"?r.value??1:""))+"</span>"}).join("")}
                  </div>
                `:""}

                <!-- 攻击/生命 -->
                <div class="flex justify-between mt-auto">
                  <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #f5a623 0%, #d48a1c 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px; box-shadow: 0 2px 4px rgba(212,138,28,0.3);">${e.attack}</div>
                  <div style="width: 32px; height: 32px; background: linear-gradient(135deg, #f08080 0%, #d06060 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 14px; box-shadow: 0 2px 4px rgba(208,96,96,0.3);">${e.health}</div>
                </div>
                `}
              </div>
              `})()}

            ${this.isDrawingMode?`
            <!-- 画笔色块 -->
            <div class="flex justify-center gap-1.5 mb-2" style="background: transparent;">
              ${this.COLORS.map((e,s)=>`
                <button id="hero-color-swatch-${s}" class="w-7 h-7 rounded-sm transition-all transform hover:scale-110"
                  style="background: ${e}; border: 2px solid ${s===this.currentColorIndex?"#ffffff":"transparent"}; cursor: pointer;"
                  title="${["红","橙","黄","绿","青","蓝","紫","黑"][s]}"></button>
              `).join("")}
            </div>
            `:""}

            <!-- 衍生卡属性编辑 -->
            <div class="w-full max-w-sm space-y-3 p-4 rounded-2xl" style="display: ${this.isDrawingMode?"none":"block"}; background: rgba(255, 255, 255, 0.8); border: 3px solid #d4c4a8;">
              <div class="flex items-center gap-3">
                <label class="w-16 font-bold text-sm" style="color: #5a4a3a;">名称:</label>
                <input type="text" id="hero-derived-name" value="${this.heroDerivedCards[this.heroEditingDerivedIndex]?.name||""}" placeholder="输入卡牌名称"
                  class="flex-1 px-3 py-2 rounded-lg outline-none text-sm"
                  style="border: 2px solid #d4c4a8; background: #faf8f5;">
              </div>
              <div class="flex items-center gap-3">
                <label class="w-16 font-bold text-sm" style="color: #5a4a3a;">费用:</label>
                <input type="number" id="hero-derived-cost" value="${this.heroDerivedCards[this.heroEditingDerivedIndex]?.cost??1}" min="0" max="10"
                  class="flex-1 px-3 py-2 rounded-lg outline-none text-sm"
                  style="border: 2px solid #d4c4a8; background: #faf8f5;">
              </div>
              ${this.heroDerivedCards[this.heroEditingDerivedIndex]?.type!=="spell"?`
              <div class="flex items-center gap-3">
                <label class="w-16 font-bold text-sm" style="color: #5a4a3a;">攻击:</label>
                <input type="number" id="hero-derived-attack" value="${this.heroDerivedCards[this.heroEditingDerivedIndex]?.attack??1}" min="0" max="99"
                  class="flex-1 px-3 py-2 rounded-lg outline-none text-sm"
                  style="border: 2px solid #d4c4a8; background: #faf8f5;">
              </div>
              <div class="flex items-center gap-3">
                <label class="w-16 font-bold text-sm" style="color: #5a4a3a;">生命:</label>
                <input type="number" id="hero-derived-health" value="${this.heroDerivedCards[this.heroEditingDerivedIndex]?.health??1}" min="1" max="99"
                  class="flex-1 px-3 py-2 rounded-lg outline-none text-sm"
                  style="border: 2px solid #d4c4a8; background: #faf8f5;">
              </div>
              `:""}
            </div>
            `}

            ${this.isPortraitMode?`
            <!-- 竖屏模式：操作区域移到下方 -->
            <div class="w-full p-3 rounded-2xl shadow-xl mt-3" style="background: rgba(255, 255, 255, 0.9); border: 4px solid #d4c4a8;">
              <div class="flex flex-wrap gap-2 justify-center">
                <button id="add-hero-to-deck-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                  style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;">
                  ${this.isHeroEditMode?"💾 保存修改":"➕ 加入卡包"}
                </button>
                <button id="switch-to-normal-editor-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                  style="background: linear-gradient(135deg, #c09060 0%, #b08050 100%); color: #fff; border: 3px solid #906830;">
                  ✏️ 编辑普通牌
                </button>
                <button id="draw-hero-image-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                  style="background: linear-gradient(135deg, #c09060 0%, #b08050 100%); color: #fff; border: 3px solid #906830;">
                  ${this.isDrawingMode?"💾 保存并返回":"🖌️ 绘制卡图"}
                </button>
                <button id="import-hero-image-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                  style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;">
                  🖼️ 导入卡图
                </button>
                <div class="flex gap-2">
                  <button id="import-hero-code-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                    style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;">
                    📥 导入文件
                  </button>
                  <button id="export-hero-code-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                    style="background: linear-gradient(135deg, #9b8cb8 0%, #7a6b99 100%); color: #fff; border: 3px solid #6a5b89;">
                    📤 导出文件
                  </button>
                </div>
              </div>
              <div id="hero-import-output" class="hidden mt-2 p-2 rounded-lg" style="background: #f5f0e6; border: 2px solid #d4c4a8;">
                <textarea id="hero-import-text" class="w-full h-12 p-2 rounded text-xs" style="background: #fff; border: 1px solid #d4c4a8; resize: none;" placeholder="粘贴英雄牌代码..."></textarea>
                <button id="hero-import-confirm-btn" class="mt-1 w-full px-2 py-1 text-xs font-bold rounded-lg" style="background: #7cb87c; color: #fff; border: 2px solid #5a9a5a;">
                  ✓ 导入
                </button>
              </div>
              <div id="hero-export-output" class="hidden mt-2 p-2 rounded-lg" style="background: #f5f0e6; border: 2px solid #d4c4a8;">
                <textarea id="hero-export-text" class="w-full h-12 p-2 rounded text-xs" style="background: #fff; border: 1px solid #d4c4a8; resize: none;" readonly></textarea>
                <button id="hero-copy-btn" class="mt-1 w-full px-2 py-1 text-xs font-bold rounded-lg" style="background: #6fa8dc; color: #fff; border: 2px solid #3d85c6;">
                  📋 复制
                </button>
              </div>
            </div>
            `:""}
          </div>

          ${this.isPortraitMode?"":`
          <!-- 右侧操作区域 -->
          <div class="w-56 p-4 rounded-2xl shadow-xl flex-shrink-0 self-center" style="background: rgba(255, 255, 255, 0.9); border: 4px solid #d4c4a8;">
            <h3 class="text-xl font-bold mb-3" style="color: #8b7355;">${this.isHeroEditMode?"编辑英雄牌":"创建英雄牌"}</h3>

            <div class="space-y-3">
              <button id="add-hero-to-deck-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;">
                ${this.isHeroEditMode?"💾 保存修改":"➕ 加入卡包"}
              </button>

              <button id="switch-to-normal-editor-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                style="background: linear-gradient(135deg, #c09060 0%, #b08050 100%); color: #fff; border: 3px solid #906830;">
                ✏️ 编辑普通牌
              </button>

              <hr style="border-color: #d4c4a8;">

              <button id="draw-hero-image-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                style="background: linear-gradient(135deg, #c09060 0%, #b08050 100%); color: #fff; border: 3px solid #906830;">
                ${this.isDrawingMode?"💾 保存并返回":"🖌️ 绘制卡图"}
              </button>

              <button id="import-hero-image-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a; pointer-events: auto;">
                🖼️ 导入卡图
              </button>

              <div id="hero-add-success" class="hidden p-2 rounded-lg text-center font-bold text-sm" style="background: rgba(124, 184, 124, 0.3); color: #5a4a3a; border: 2px solid #7cb87c;">
                ✓ 已加入卡包！
              </div>

              <hr style="border-color: #d4c4a8;">

              <button id="import-hero-code-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;">
                📥 导入英雄文件
              </button>

              <div id="hero-import-output" class="hidden p-2 rounded-lg" style="background: #f5f0e6; border: 2px solid #d4c4a8;">
                <textarea id="hero-import-text" class="w-full h-16 p-2 rounded text-xs" style="background: #fff; border: 1px solid #d4c4a8; resize: none;" placeholder="粘贴英雄牌代码..."></textarea>
                <button id="hero-import-confirm-btn" class="mt-2 w-full px-2 py-1 text-xs font-bold rounded-lg" style="background: #7cb87c; color: #fff; border: 2px solid #5a9a5a;">
                  ✓ 导入
                </button>
              </div>

              <button id="export-hero-code-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                style="background: linear-gradient(135deg, #9b8cb8 0%, #7a6b99 100%); color: #fff; border: 3px solid #6a5b89;">
                📤 导出英雄文件
              </button>

              <div id="hero-export-output" class="hidden p-2 rounded-lg" style="background: #f5f0e6; border: 2px solid #d4c4a8;">
                <textarea id="hero-export-text" class="w-full h-16 p-2 rounded text-xs" style="background: #fff; border: 1px solid #d4c4a8; resize: none;" readonly></textarea>
                <button id="hero-copy-btn" class="mt-2 w-full px-2 py-1 text-xs font-bold rounded-lg" style="background: #6fa8dc; color: #fff; border: 2px solid #3d85c6;">
                  📋 复制
                </button>
              </div>
            </div>

            <hr class="my-3" style="border-color: #d4c4a8;">

            <button id="${this.isHeroEditMode?"back-to-manager-btn":"back-menu-btn"}" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
              style="background: linear-gradient(135deg, ${this.isHeroEditMode?"#6fa8dc":"#c0a080"} 0%, ${this.isHeroEditMode?"#3d85c6":"#b09070"} 100%); color: #fff; border: 3px solid ${this.isHeroEditMode?"#2d75b6":"#a08060"};">
              ${this.isHeroEditMode?"← 返回卡包管理":"←返回菜单"}
            </button>
          </div>
          `}
        </div>
      </div>

      <!-- 裁剪卡图模态框（英雄牌使用 4:3 比例） -->
      <div id="crop-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:99999;display:none;justify-content:center;align-items:center;flex-direction:column;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div id="hero-crop-eraser-panel" style="display:none;flex-direction:column;align-items:center;gap:6px;padding:8px;background:rgba(0,0,0,0.5);border-radius:8px;">
            <button id="hero-crop-eraser-btn" style="width:36px;height:36px;border-radius:6px;font-size:18px;cursor:pointer;border:2px solid #888;background:#555;color:#fff;display:flex;align-items:center;justify-content:center;">🧽</button>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <button id="hero-crop-eraser-thin-btn" style="padding:4px 8px;border-radius:4px;font-size:12px;cursor:pointer;border:2px solid #666;background:#444;color:#aaa;">细</button>
              <button id="hero-crop-eraser-medium-btn" style="padding:4px 8px;border-radius:4px;font-size:12px;cursor:pointer;border:2px solid #4a9;background:#2a6;color:#fff;">中</button>
              <button id="hero-crop-eraser-thick-btn" style="padding:4px 8px;border-radius:4px;font-size:12px;cursor:pointer;border:2px solid #666;background:#444;color:#aaa;">粗</button>
            </div>
          </div>
          <canvas id="crop-canvas" style="border-radius:8px;cursor:grab;"></canvas>
        </div>
        <div style="margin-top:12px;display:flex;gap:12px;justify-content:center;z-index:10;">
          <button id="crop-hcenter-btn" style="padding:8px 24px;border-radius:8px;font-size:14px;font-weight:bold;cursor:pointer;border:2px solid #888;background:#444;color:#ddd;">左右对齐</button>
          <button id="crop-vcenter-btn" style="padding:8px 24px;border-radius:8px;font-size:14px;font-weight:bold;cursor:pointer;border:2px solid #888;background:#444;color:#ddd;">上下对齐</button>
        </div>
        <div style="margin-top:8px;display:flex;gap:12px;justify-content:center;z-index:10;">
          <button id="crop-cover-btn" style="padding:8px 24px;border-radius:8px;font-size:14px;font-weight:bold;cursor:pointer;border:2px solid #888;background:#444;color:#ddd;">Cover</button>
          <button id="crop-contain-btn" style="padding:8px 24px;border-radius:8px;font-size:14px;font-weight:bold;cursor:pointer;border:2px solid #888;background:#444;color:#ddd;">Contain</button>
        </div>
        <div style="margin-top:12px;display:flex;gap:16px;justify-content:center;z-index:10;">
          <button id="crop-cancel-btn" style="padding:12px 36px;border-radius:8px;font-size:15px;font-weight:bold;cursor:pointer;border:2px solid #666;background:#333;color:#ddd;">取消</button>
          <button id="crop-confirm-btn" style="padding:12px 36px;border-radius:8px;font-size:15px;font-weight:bold;cursor:pointer;border:none;background:#5a9a5a;color:#fff;">完成</button>
        </div>
      </div>
    `,this.attachHeroEditorEvents(),this.pendingScrollRestoration){const{selector:e,scrollTop:s,containerIndex:t,portraitScrollTop:r}=this.pendingScrollRestoration,i=document.querySelectorAll(e),n=i[t??0]||i[0];if(n&&(n.scrollTop=s),r!==void 0){const a=document.querySelector(".portrait-side-panel-scroll");a&&(a.scrollTop=r)}this.pendingScrollRestoration=null}}async enterDrawingMode(){this.isDrawingMode=!0,this.drawingTool="brush";const e=this.state.phase;if(this.heroEditingDerivedIndex!==null?this.drawingBaseImageData=this.heroDerivedCards[this.heroEditingDerivedIndex]?.imageData||null:this.isHeroEditMode||e==="heroEditor"?this.drawingBaseImageData=this.heroImageData||null:this.drawingBaseImageData=this.currentCard.imageData||null,!this.drawingBaseImageData)try{const s=await this.loadImageAsDataURL("/images/paper_texture_custom.png");this.drawingBaseImageData=s,this.heroEditingDerivedIndex!==null?this.heroDerivedCards[this.heroEditingDerivedIndex].imageData=s:this.isHeroEditMode||e==="heroEditor"?this.heroImageData=s:this.currentCard.imageData=s}catch(s){console.error("加载默认纸材质失败:",s)}this.isHeroEditMode||this.heroEditingDerivedIndex!==null||e==="heroEditor"?this.renderHeroEditor():this.renderCardCreator(),setTimeout(()=>{let s="card-drawing-canvas";this.heroEditingDerivedIndex!==null?s="hero-derived-drawing-canvas":(this.isHeroEditMode||e==="heroEditor")&&(s="hero-drawing-canvas");const t=document.getElementById(s);if(t){this.initDrawingCanvas(t),this.setupDrawingEvents(t),this.createCustomCursor(),this.updateCursorStyle();const r=()=>{t.style.cursor="none",this.showCustomCursor()},i=()=>{t.style.cursor="",this.hideCustomCursor()},n=()=>{this.showCustomCursor()},a=()=>{this.hideCustomCursor()};t.addEventListener("mouseenter",r),t.addEventListener("mouseleave",i),t.addEventListener("touchstart",n,{passive:!0}),t.addEventListener("touchend",a,{passive:!0}),t.__cursorCleanup=()=>{t.removeEventListener("mouseenter",r),t.removeEventListener("mouseleave",i),t.removeEventListener("touchstart",n),t.removeEventListener("touchend",a)};const o=["drawing-brush-btn","hero-drawing-brush-btn"],l=["drawing-eraser-btn","hero-drawing-eraser-btn"];o.forEach(h=>{const u=document.getElementById(h);if(u){const p=()=>{this.drawingTool="brush",this.updateCursorStyle(),this.refreshDrawingToolButtons()};u.addEventListener("click",p),u.__toolCleanup=()=>u.removeEventListener("click",p)}}),l.forEach(h=>{const u=document.getElementById(h);if(u){const p=()=>{this.drawingTool="eraser",this.updateCursorStyle(),this.refreshDrawingToolButtons()};u.addEventListener("click",p),u.__toolCleanup=()=>u.removeEventListener("click",p)}}),["drawing-clear-btn","hero-drawing-clear-btn"].forEach(h=>{const u=document.getElementById(h);if(u){const p=()=>{this.drawingCtxRef&&this.drawingCtxRef.clearRect(0,0,this.drawingCanvasRef.width,this.drawingCanvasRef.height)};u.addEventListener("click",p),u.__toolCleanup=()=>u.removeEventListener("click",p)}});const c={"brush-thin-btn":"thin","hero-brush-thin-btn":"thin","brush-medium-btn":"medium","hero-brush-medium-btn":"medium","brush-thick-btn":"thick","hero-brush-thick-btn":"thick"};Object.keys(c).forEach(h=>{const u=document.getElementById(h);if(u){const p=()=>{this.brushSizePreset=c[h],this.updateCursorStyle(),this.refreshDrawingToolButtons()};u.addEventListener("click",p),u.__toolCleanup=()=>u.removeEventListener("click",p)}});const m=[];for(let h=0;h<8;h++)m.push(`color-swatch-${h}`,`hero-color-swatch-${h}`);m.forEach(h=>{const u=document.getElementById(h);if(u){const p=()=>{const b=parseInt(h.match(/(\d+)$/)?.[1]??"7");this.drawingColor=this.COLORS[b],this.currentColorIndex=b,this.updateCursorStyle(),this.refreshColorSwatches()};u.addEventListener("click",p),u.__colorCleanup=()=>u.removeEventListener("click",p)}})}},0)}refreshDrawingToolButtons(){const e=["drawing-brush-btn","hero-drawing-brush-btn"],s=["drawing-eraser-btn","hero-drawing-eraser-btn"];e.forEach(r=>{const i=document.getElementById(r);i&&(i.style.background=this.drawingTool==="brush"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)",i.style.border=`2px solid ${this.drawingTool==="brush"?"#4a8a4a":"#d4c4a8"}`,i.style.color=this.drawingTool==="brush"?"#fff":"#5a4a3a")}),s.forEach(r=>{const i=document.getElementById(r);i&&(i.style.background=this.drawingTool==="eraser"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)",i.style.border=`2px solid ${this.drawingTool==="eraser"?"#4a8a4a":"#d4c4a8"}`,i.style.color=this.drawingTool==="eraser"?"#fff":"#5a4a3a")}),["brush-thin-btn","hero-brush-thin-btn","brush-medium-btn","hero-brush-medium-btn","brush-thick-btn","hero-brush-thick-btn"].forEach(r=>{const i=document.getElementById(r);if(i){const n=this.brushSizePreset===(r.includes("thin")?"thin":r.includes("medium")?"medium":"thick");i.style.background=n?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)",i.style.border=`2px solid ${n?"#4a8a4a":"#d4c4a8"}`,i.style.color=n?"#fff":"#5a4a3a"}})}refreshColorSwatches(){for(let e=0;e<8;e++){const s=document.getElementById(`color-swatch-${e}`),t=document.getElementById(`hero-color-swatch-${e}`),r=e===this.currentColorIndex?"2px solid #ffffff":"2px solid transparent";s&&(s.style.border=r),t&&(t.style.border=r)}}exitDrawingMode(e=!1){if(this.removeCustomCursor(),e&&this.drawingCanvasRef){const s=new Image;s.onload=()=>{const t=document.createElement("canvas"),r=t.getContext("2d");t.width=this.drawingCanvasRef.width,t.height=this.drawingCanvasRef.height,r.drawImage(s,0,0,t.width,t.height),r.drawImage(this.drawingCanvasRef,0,0);const i=t.toDataURL("image/png");this.heroEditingDerivedIndex!==null?this.heroDerivedCards[this.heroEditingDerivedIndex].imageData=i:this.isHeroEditMode||this.state.phase==="heroEditor"?this.heroImageData=i:this.currentCard.imageData=i,this.isDrawingMode=!1,this.drawingCanvasRef=null,this.drawingCtxRef=null,this.isHeroEditMode||this.heroEditingDerivedIndex!==null||this.state.phase==="heroEditor"?this.renderHeroEditor():this.renderCardCreator()},s.onerror=()=>{const t=this.drawingCanvasRef.toDataURL("image/png");this.heroEditingDerivedIndex!==null?this.heroDerivedCards[this.heroEditingDerivedIndex].imageData=t:this.isHeroEditMode||this.state.phase==="heroEditor"?this.heroImageData=t:this.currentCard.imageData=t,this.isDrawingMode=!1,this.drawingCanvasRef=null,this.drawingCtxRef=null,this.isHeroEditMode||this.heroEditingDerivedIndex!==null||this.state.phase==="heroEditor"?this.renderHeroEditor():this.renderCardCreator()},s.src=this.drawingBaseImageData||""}else this.isDrawingMode=!1,this.drawingCanvasRef=null,this.drawingCtxRef=null,this.isHeroEditMode||this.heroEditingDerivedIndex!==null||this.state.phase==="heroEditor"?this.renderHeroEditor():this.renderCardCreator()}loadImageAsDataURL(e){return new Promise((s,t)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{const i=document.createElement("canvas");i.width=r.naturalWidth,i.height=r.naturalHeight;const n=i.getContext("2d");if(!n){t(new Error("无法创建 canvas context"));return}n.drawImage(r,0,0),s(i.toDataURL("image/png"))},r.onerror=()=>t(new Error(`加载图片失败: ${e}`)),r.src=e})}initDrawingCanvas(e){const s=e.getContext("2d");if(!s)return;this.drawingCanvasRef=e,this.drawingCtxRef=s;const t=window.devicePixelRatio||1,r=e.getBoundingClientRect();e.width=r.width*t,e.height=r.height*t,s.scale(t,t),s.lineCap="square",s.lineJoin="miter"}getDrawingSize(){const e={thin:{brush:1,eraser:5},medium:{brush:3,eraser:15},thick:{brush:9,eraser:45}},s=e[this.brushSizePreset]??e.medium;return this.drawingTool==="brush"?s.brush:s.eraser}setupDrawingEvents(e){let s=!1;const t=m=>{const h=e.getBoundingClientRect();let u,p;return"touches"in m?(u=m.touches[0]?.clientX??m.changedTouches[0]?.clientX??0,p=m.touches[0]?.clientY??m.changedTouches[0]?.clientY??0):(u=m.clientX,p=m.clientY),{x:u-h.left,y:p-h.top}},r=()=>{const m={thin:{brush:1,eraser:5},medium:{brush:3,eraser:15},thick:{brush:9,eraser:45}};return m[this.brushSizePreset]??m.medium},i=(m,h)=>{const u=this.drawingCtxRef;if(!u)return;const p=this.drawingTool==="brush"?r().brush:r().eraser;this.drawingTool==="eraser"?u.globalCompositeOperation="destination-out":(u.globalCompositeOperation="source-over",u.fillStyle=this.drawingColor),u.fillRect(m-p/2,h-p/2,p,p)};let n=0,a=0;const o=(m,h)=>{const u=this.drawingTool==="brush"?r().brush:r().eraser,p=m-n,b=h-a,g=Math.sqrt(p*p+b*b);if(g>u){const y=Math.floor(g/u),x=p/g*u,w=b/g*u;for(let f=1;f<=y;f++)i(n+x*f,a+w*f)}else i(m,h);n=m,a=h},l=m=>{m.preventDefault(),s=!0;const h=t(m);n=h.x,a=h.y,i(h.x,h.y),this.updateCustomCursor(h.x+e.getBoundingClientRect().left,h.y+e.getBoundingClientRect().top),this.showCustomCursor()},d=m=>{m.preventDefault();const h=t(m);this.updateCustomCursor(h.x+e.getBoundingClientRect().left,h.y+e.getBoundingClientRect().top),s&&o(h.x,h.y)},c=()=>{s=!1,this.drawingCtxRef&&(this.drawingCtxRef.globalCompositeOperation="source-over")};e.addEventListener("mousedown",l),e.addEventListener("mousemove",d),e.addEventListener("mouseup",c),e.addEventListener("mouseleave",c),e.addEventListener("touchstart",l,{passive:!1}),e.addEventListener("touchmove",d,{passive:!1}),e.addEventListener("touchend",c),e.addEventListener("touchcancel",c),e.__drawingCleanup=()=>{e.removeEventListener("mousedown",l),e.removeEventListener("mousemove",d),e.removeEventListener("mouseup",c),e.removeEventListener("mouseleave",c),e.removeEventListener("touchstart",l),e.removeEventListener("touchmove",d),e.removeEventListener("touchend",c),e.removeEventListener("touchcancel",c)}}createCustomCursor(){if(this.customCursorEl)return;const e=document.createElement("div");e.id="drawing-custom-cursor",e.style.position="fixed",e.style.pointerEvents="none",e.style.zIndex="9999",e.style.display="none",document.body.appendChild(e),this.customCursorEl=e,this.updateCursorStyle()}updateCursorStyle(){if(!this.customCursorEl)return;const e=this.getDrawingSize();this.drawingTool==="brush"?(this.customCursorEl.style.width=e+"px",this.customCursorEl.style.height=e+"px",this.customCursorEl.style.backgroundColor=this.drawingColor,this.customCursorEl.style.outline="1px solid #ffffff"):(this.customCursorEl.style.width=e+"px",this.customCursorEl.style.height=e+"px",this.customCursorEl.style.backgroundColor="#ffffff",this.customCursorEl.style.border="1px solid #000000")}updateCustomCursor(e,s){if(!this.customCursorEl)return;const t=this.getDrawingSize();this.customCursorEl.style.left=e-t/2+"px",this.customCursorEl.style.top=s-t/2+"px"}showCustomCursor(){this.customCursorEl&&(this.customCursorEl.style.display="block")}hideCustomCursor(){this.customCursorEl&&(this.customCursorEl.style.display="none")}removeCustomCursor(){this.customCursorEl&&(document.body.removeChild(this.customCursorEl),this.customCursorEl=null),["card-drawing-canvas","hero-drawing-canvas","hero-derived-drawing-canvas"].forEach(t=>{const r=document.getElementById(t);r&&(r.__drawingCleanup&&r.__drawingCleanup(),r.__cursorCleanup&&r.__cursorCleanup())}),["drawing-brush-btn","hero-drawing-brush-btn","drawing-eraser-btn","hero-drawing-eraser-btn"].forEach(t=>{const r=document.getElementById(t);r&&r.__toolCleanup&&r.__toolCleanup()})}renderCardCreator(){(!this.editingCards||this.editingCards.length===0)&&this.initCardsArray("minion");const e=Object.values(Ee),s=this.currentCard.keywords.some(f=>f.name==="护甲"),t=this.getCurrentEffect(),r=(this.currentCard.effects?.length||0)>0;typeof window<"u"&&(this.isPortraitMode=window.innerWidth/window.innerHeight<3/4);const i=f=>{switch(f){case"死亡时":return["无需目标","卡牌","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];case"打出时":return["无需目标","卡牌","选择目标","选择随从","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];case"回合开始时":case"回合结束时":case"⚙️变量变化时":return["无需目标","卡牌","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];case"攻击时":return["攻击目标","无需目标","卡牌","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];case"失去生命时":return["无需目标","卡牌","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];default:return["无需目标","卡牌","选择目标","选择随从","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"]}},n=()=>{if(!t)return[];const f=t.moments||(t.moment?[t.moment]:[]);if(f.length===0)return[];let v=null;for(const E of f){const S=i(E);v===null?v=[...S]:v=v.filter(T=>S.includes(T))}return v||[]},a=()=>t?t.conditionType?t.conditionType:!t.triggerNumbers||t.triggerNumbers.length===6?"guaranteed":"d6":"guaranteed",o=f=>{const v=a();if(v==="exists_minion"){const $=t?.conditionMinionName||"",N=t?.conditionMinionCheckName??!1,J=t?.conditionSides||["friendly"],U=J.includes("friendly"),ne=J.includes("enemy"),Z=U&&ne,se=t?.conditionSideLogic||"and",Y=["cost","attack","health"],C={cost:"能量花费",attack:"攻击力",health:"生命值"},P=Y.map(L=>{const V=t?.conditionMinionAttrs?.[L],Q=V?.enabled??!1,oe=V?.operator||"=",ie=V?.value??0,F=["<","=",">"].map(ee=>{const W=(ee==="<"?oe==="<":ee==="="?oe==="=":oe===">")||(ee==="<"&&oe==="<="||ee===">"&&oe===">="||ee==="="&&(oe==="<="||oe===">="));return`<button class="condition-minion-attr-op-btn" data-attr="${L}" data-op="${ee}" data-editor="${f}"
              style="${W?"rgba(34,197,94,0.25)":"rgba(212,196,168,0.3)"};border:1px solid ${W?"#22c55e":"#d4c4a8"};color:${W?"#22c55e":"#8b7355"};width:28px;height:24px;border-radius:4px;font-size:12px;font-weight:bold;cursor:pointer;">${ee==="<"?"＜":ee==="="?"＝":"＞"}</button>`}).join("");return`
          <div style="font-size:11px;" onclick="event.stopPropagation()">
            <div class="flex items-center gap-2" style="margin-bottom:3px;">
              <input type="checkbox" class="condition-minion-attr-check" data-attr="${L}" data-editor="${f}" ${Q?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              <span style="color:#5a4a3a;">${C[L]}</span>
            </div>
            <div class="flex items-center gap-2">
              ${F}
              <input type="number" class="condition-minion-attr-input" data-attr="${L}" data-editor="${f}" value="${ie}"
                style="width:45px;padding:2px 4px;border:1px solid #c0a080;border-radius:4px;font-size:11px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="0">
            </div>
          </div>`}).join("");return`
        <div class="mt-2 space-y-2 pl-1" onclick="event.stopPropagation()">
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="checkbox" class="condition-side-check" data-side="friendly" data-editor="${f}" ${U?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              我方
            </label>
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="checkbox" class="condition-side-check" data-side="enemy" data-editor="${f}" ${ne?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              敌方
            </label>
          </div>
          ${Z?`
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-exists-${f}" class="condition-logic-radio" data-editor="${f}" value="and" ${se==="and"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              与
            </label>
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-exists-${f}" class="condition-logic-radio" data-editor="${f}" value="or" ${se==="or"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              或
            </label>
          </div>
          `:""}
          <div class="flex items-center gap-2" style="margin-bottom:3px;">
            <input type="checkbox" class="condition-minion-name-check" data-editor="${f}" ${N?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
            <span style="font-size:11px;color:#5a4a3a;">随从名称</span>
          </div>
          <div style="margin-bottom:6px;">
            <input type="text" class="condition-minion-name-input" data-editor="${f}" value="${$}"
              style="width:100%;padding:4px 8px;border:1px solid #c0a080;border-radius:4px;font-size:12px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="输入名称">
          </div>
          <div class="space-y-1">${P}</div>
        </div>`}if(v==="target_attr"){const $=["cost","attack","health"],N={cost:"能量花费",attack:"攻击力",health:"生命值"};return`<div class="mt-2 space-y-1 pl-1">${$.map(U=>{const ne=t?.conditionTargetAttrs?.[U],Z=ne?.enabled??!1,se=ne?.operator||"=",Y=ne?.value??0,C=["<","=",">"].map(P=>{const Q=(P==="<"?se==="<":P==="="?se==="=":se===">")||(P==="<"&&se==="<="||P===">"&&se===">="||P==="="&&(se==="<="||se===">="));return`<button class="condition-target-op-btn" data-attr="${U}" data-op="${P}" data-editor="${f}"
              style="${Q?"rgba(34,197,94,0.25)":"rgba(212,196,168,0.3)"};border:1px solid ${Q?"#22c55e":"#d4c4a8"};color:${Q?"#22c55e":"#8b7355"};width:28px;height:24px;border-radius:4px;font-size:12px;font-weight:bold;cursor:pointer;">${P==="<"?"＜":P==="="?"＝":"＞"}</button>`}).join("");return`
          <div style="font-size:11px;" onclick="event.stopPropagation()">
            <div class="flex items-center gap-2" style="margin-bottom:3px;">
              <input type="checkbox" class="condition-target-attr-check" data-attr="${U}" data-editor="${f}" ${Z?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              <span style="color:#5a4a3a;">${N[U]}</span>
            </div>
            <div class="flex items-center gap-2">
              ${C}
              <input type="number" class="condition-target-attr-input" data-attr="${U}" data-editor="${f}" value="${Y}"
                style="width:45px;padding:2px 4px;border:1px solid #c0a080;border-radius:4px;font-size:11px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="0">
            </div>
          </div>`}).join("")}</div>`}if(!["hero_hp","minion_count","hand_count"].includes(v))return"";const E=t?.conditionSides||["friendly"],S=E.includes("friendly"),T=E.includes("enemy"),A=S&&T,R=t?.conditionSideLogic||"and",_=t?.conditionOperator||"=",B=t?.conditionValue??0;return`
        <div class="mt-2 space-y-2 pl-1" onclick="event.stopPropagation()">
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="checkbox" class="condition-side-check" data-side="friendly" data-editor="${f}" ${S?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              我方
            </label>
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="checkbox" class="condition-side-check" data-side="enemy" data-editor="${f}" ${T?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              敌方
            </label>
          </div>
          ${A?`
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-${f}" class="condition-logic-radio" data-editor="${f}" value="and" ${R==="and"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              与
            </label>
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-${f}" class="condition-logic-radio" data-editor="${f}" value="or" ${R==="or"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              或
            </label>
          </div>
          `:""}
          <div class="flex items-center gap-2">
            ${["<","=",">"].map($=>`<button class="condition-op-btn" data-op="${$}" data-editor="${f}"
                style="${_===$||($==="<"&&_==="<="||$===">"&&_===">="||$==="="&&(_==="<="||_===">="))?"background:rgba(34,197,94,0.25);border:1px solid #22c55e;color:#22c55e;":"background:rgba(212,196,168,0.3);border:1px solid #d4c4a8;color:#8b7355;"}width:32px;height:28px;border-radius:4px;font-size:14px;font-weight:bold;cursor:pointer;">
                ${$==="<"?"＜":$==="="?"＝":"＞"}
              </button>`).join("")}
            <input type="number" class="condition-value-input" data-editor="${f}" value="${B}"
              style="width:55px;padding:2px 6px;border:1px solid #c0a080;border-radius:4px;font-size:12px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;"
              placeholder="0">
          </div>
        </div>
      `},l=()=>{const f=a();if(f==="guaranteed"||!f)return"必然触发";if(f==="d6"){const N=t?.triggerNumbers||[];return N.length>0&&N.length<6?`🎲 D6（${N.join("、")}）`:"🎲 D6"}if(f==="exists_minion"){const N=t?.conditionMinionName?.trim(),J=t?.conditionMinionCheckName??!1,U=t?.conditionSides||["friendly"],ne=U.includes("friendly")&&U.includes("enemy")?"双方":U.includes("friendly")?"我方":"敌方",Z=t?.conditionSideLogic||"and",se=U.includes("friendly")&&U.includes("enemy")?Z==="and"?"均":"有一":"",Y=t?.conditionMinionAttrs,C=[];if(Y){const V={cost:"能量",attack:"攻击",health:"生命"};for(const Q of["cost","attack","health"]){const oe=Y[Q];if(oe?.enabled){const ie=oe.operator||"=",F=ie==="<="?"≤":ie===">="?"≥":ie;C.push(`${V[Q]}${F}${oe.value}`)}}}const P=J&&N?`「${N}」`:"",L=C.length?`[${C.join("、")}]`:"";return`${ne}存在随从${se}${P}${L}`}if(f==="target_attr"){const N=t?.conditionTargetAttrs;if(!N)return"目标属性";const J=[];for(const U of["cost","attack","health"]){const ne=N[U];if(ne?.enabled){const Z=ne.operator||"=",se=Z==="<="?"≤":Z===">="?"≥":Z;J.push(`${U==="cost"?"能量":U==="attack"?"攻击":"生命"}${se}${ne.value}`)}}return J.length?`目标${J.join("、")}`:"目标属性"}const E={hero_hp:"英雄血量",minion_count:"随从数",hand_count:"手牌数"}[f]||f,S=t?.conditionSides||["friendly"],T=S.includes("friendly")&&S.includes("enemy")?"双方":S.includes("friendly")?"我方":"敌方",A=t?.conditionSideLogic||"and",R=S.includes("friendly")&&S.includes("enemy")?A==="and"?"均":"有一":"",_=t?.conditionOperator||"=",B=_==="<="?"≤":_===">="?"≥":_,$=t?.conditionValue??0;return`${T}${E}${R}${B}${$}`},d=f=>a()===f,c=f=>{const v=d(f),E=f==="guaranteed";return v?E?"background:rgba(34,197,94,0.25);border:2px solid #22c55e;":"background:transparent;border:2px solid #c0a080;":"background:rgba(212,196,168,0.3);border:2px solid #d4c4a8;"},m=()=>{if(!t)return[];const f=[],v=t.targets;v.length>0&&v.every(S=>S==="敌方英雄"||S==="我方英雄"),v.some(S=>S!=="敌方英雄"&&S!=="我方英雄"&&S!=="无需目标");const E=v.some(S=>S==="选择随从"||S==="自己"||S==="我方所有随从"||S==="敌方所有随从");return v.includes("无需目标")&&(f.push("抽牌"),f.push("弃牌"),f.push("获得能量"),f.push("失去能量")),v.includes("卡牌")&&(f.push("召唤"),f.push("获得"),!p.includes("打出时")&&!p.includes("死亡时")&&f.push("变化"),f.push("属性变化")),(!v.includes("无需目标")&&!v.includes("卡牌")||v.length>1)&&(p.includes("攻击时")&&v.some(S=>["攻击目标","攻击者"].includes(S))?f.push("增加伤害"):f.push("造成伤害"),f.push("给予印记"),f.push("治愈"),E&&f.push("属性变化"),E&&f.push("给予词条")),f},h=f=>t?.targets.includes(f)??!1,u=t?.moment,p=t?.moments||(u?[u]:[]),b=f=>p.includes(f),g=t?.targets||[],y=t?.effect,x=document.querySelector(".editor-left-panel-scroll"),w=x?x.scrollTop:void 0;if(this.pendingScrollRestoration?this.pendingScrollRestoration.leftPanelScrollTop=w:w!==void 0&&w>0&&(this.pendingScrollRestoration={selector:".editor-left-panel-scroll",scrollTop:w}),this.isPortraitMode){const f=document.querySelector(".portrait-side-panel-scroll");if(f){const v=f.scrollTop;v>0&&(this.pendingScrollRestoration?this.pendingScrollRestoration.portraitScrollTop=v:this.pendingScrollRestoration={selector:".portrait-side-panel-scroll",scrollTop:v})}}if(this.app.innerHTML=`
      <div class="min-h-screen card-creator-active ${this.isPortraitMode?"flex flex-col p-2 h-auto overflow-visible":"flex flex-col items-center pt-4 px-4 h-screen overflow-hidden"}" style="background: transparent;">
        ${this.isPortraitMode?"":`
        <!-- 隐藏左侧滚动条 -->
        <style>
          .scrollable-panel::-webkit-scrollbar { display: none; }
          .editor-left-panel-scroll { display: flex; flex-direction: column; }
          .editor-left-panel-scroll::before,
          .editor-left-panel-scroll::after { content: ''; flex: 1; min-height: 0; }
        </style>
        `}

        ${this.isPortraitMode?`
          <!-- 竖屏模式：顶部操作栏 -->
          <div class="flex items-center justify-between w-full mb-2 p-2 rounded-xl" style="background: rgba(255, 255, 255, 0.9); border: 3px solid #d4c4a8;">
            <button id="toggle-side-panel-btn" class="px-3 py-1 font-bold rounded-lg text-sm"
              style="background: linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%); color: #fff; border: 2px solid #3d85c6;">
              📋 更多编辑
            </button>
            <span class="font-bold text-base" style="color: #5a4a3a; font-family: 'Georgia', serif;">${this.isEditMode?"编辑卡牌":"创建卡牌"}</span>
            <button id="${this.isEditMode?"back-to-manager-btn":"back-menu-btn"}" class="px-3 py-1 font-bold rounded-lg text-sm"
              style="background: linear-gradient(135deg, ${this.isEditMode?"#6fa8dc":"#c0a080"} 0%, ${this.isEditMode?"#4a90d9":"#b09070"} 100%); color: #fff; border: 2px solid ${this.isEditMode?"#3d85c6":"#a08060"};">
              ← ${this.isEditMode?"卡包":"返回菜单"}
            </button>
          </div>

          <!-- 操作提示 -->
          <div id="add-success" class="hidden mt-3 mb-2 p-2 rounded-lg text-center font-bold text-sm" style="background: rgba(124, 184, 124, 0.3); color: #5a4a3a; border: 2px solid #7cb87c;">
            ${this.isEditMode?"✓ 修改已保存！":"✓ 已加入卡包！"}
          </div>
          <div id="export-success" class="hidden mt-3 mb-2 p-2 rounded-lg text-center font-bold text-sm" style="background: rgba(124, 184, 124, 0.3); color: #5a4a3a; border: 2px solid #7cb87c;">
            ✓ 导出成功！
          </div>

          <!-- 竖屏模式：左侧贴附的可拉开面板 -->
          <div id="side-panel" class="fixed left-0 top-0 h-full z-50 flex" style="transform: translateX(${this.showSidePanel?"0":"-280px"}); transition: transform 0.3s ease;">
            <!-- 面板内容 -->
            <div class="h-full overflow-y-auto p-3 portrait-side-panel-scroll" style="width: 280px; background: rgba(245, 240, 230, 0.98); border-right: 4px solid #d4c4a8;">
              <div class="flex justify-between items-center mb-3">
                <span class="font-bold text-lg" style="color: #8b7355;">更多编辑</span>
                <button id="close-side-panel-btn" class="w-8 h-8 rounded-full flex items-center justify-center" style="background: rgba(212, 196, 168, 0.5); color: #5a4a3a;">◀</button>
              </div>
              
              <!-- 卡牌列表 -->
              <div class="mb-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-sm" style="color: #8b7355;">卡牌列表</span>
                  <button id="add-derived-card-btn" class="px-2 py-1 rounded text-xs font-bold" style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 1px solid #4a8a4a;">+ 衍生卡</button>
                </div>
                <div class="flex flex-col gap-1 max-h-40 overflow-y-auto overflow-x-hidden">
                  ${this.editingCards.map((f,v)=>`
                    <div class="card-list-item px-3 py-2 rounded-lg cursor-pointer transition-all text-sm ${this.currentCardIndex===v?"ring-2":""}"
                      data-card-index="${v}"
                      style="background: ${this.currentCardIndex===v?"rgba(111, 168, 220, 0.4)":"rgba(212, 196, 168, 0.4)"}; border: 2px solid ${this.currentCardIndex===v?"#6fa8dc":"#d4c4a8"};">
                      <div class="flex items-center justify-between">
                        <div class="flex flex-col flex-1 min-w-0">
                          <div class="font-bold text-sm truncate" style="color: ${v===0?"#5a4a3a":"#4a8a4a"};">${f.name||(v===0?"主卡":`衍生${v}`)}</div>
                          <div class="text-xs" style="color: #8b7355;">${f.type==="spell"?"✨法术":"⚔️随从"} | ${f.cost??1}费 ${f.type!=="spell"?`${f.attack??1}/${f.health??1}`:""}</div>
                        </div>
                        ${v!==0?`
                          <button class="card-list-delete-btn w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ml-2 flex-shrink-0"
                            data-card-index="${v}"
                            style="background: rgba(224, 112, 112, 0.7); color: #fff; border: none; line-height: 1;">×</button>
                        `:""}
                      </div>
                    </div>
                  `).join("")}
                </div>
                <div class="border-t border-[#d4c4a8] my-2"></div>
                <div class="flex gap-2">
                  <button id="card-type-minion-side" class="flex-1 px-3 py-2 rounded-lg font-bold text-xs transition-all ${this.currentCard.type==="minion"?"ring-2":""}"
                    style="background: ${this.currentCard.type==="minion"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.currentCard.type==="minion"?"#fff":"#5a4a3a"}; border: 2px solid ${this.currentCard.type==="minion"?"#4a8a4a":"#d4c4a8"};">
                    ⚔️ 随从
                  </button>
                  <button id="card-type-spell-side" class="flex-1 px-3 py-2 rounded-lg font-bold text-xs transition-all ${this.currentCard.type==="spell"?"ring-2":""}"
                    style="background: ${this.currentCard.type==="spell"?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.currentCard.type==="spell"?"#fff":"#5a4a3a"}; border: 2px solid ${this.currentCard.type==="spell"?"#4a90d9":"#d4c4a8"};">
                    ✨ 法术
                  </button>
                </div>
              </div>
              
              ${this.currentCard.type==="spell"?`
              <!-- 法术技能切换 -->
              <div class="mb-4">
                <div class="font-bold text-sm mb-2" style="color: #8b7355;">技能</div>
                <div class="flex items-center gap-2 flex-wrap">
                  ${(this.currentCard.effects||[]).map((f,v)=>`
                    <button class="effect-tab px-2 py-1 rounded-lg font-bold text-xs transition-all ${v===this.currentEffectIndex?"ring-2":""}"
                      data-effect-index="${v}"
                      style="background: ${v===this.currentEffectIndex?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${v===this.currentEffectIndex?"#fff":"#5a4a3a"}; border: 2px solid ${v===this.currentEffectIndex?"#4a90d9":"#d4c4a8"};">
                      效果${v+1}
                    </button>
                  `).join("")}
                  <button id="add-spell-effect-btn" class="px-2 py-1 rounded-lg font-bold text-xs"
                    style="background: rgba(124, 184, 124, 0.5); color: #4a8a4a; border: 2px dashed #5a9a5a;">+</button>
                  ${(this.currentCard.effects?.length||0)>1?`
                    <button id="remove-spell-effect-btn" class="px-2 py-1 rounded-lg font-bold text-xs"
                      style="background: rgba(224, 112, 112, 0.5); color: #a04040; border: 2px dashed #c05050;">-</button>
                  `:""}
                </div>
              </div>
              
              ${(()=>{const f=this.currentCard.effects?.[this.currentEffectIndex];if(!f)return"";const v=f.moment||"打出时";return`
              <!-- 法术时刻选择 -->
              <div class="mb-4">
                <button id="toggle-spell-moment-btn-side" class="w-full flex items-center justify-between font-bold text-sm mb-2" style="color: #8b7355;">
                  <span>时刻</span>
                  <span class="text-lg">${this.showMomentPanel?"▼":"▶"}</span>
                </button>
                ${this.showMomentPanel?`
                <div class="space-y-1">
                  ${["打出时","下回合开始时"].map(E=>`
                    <div class="spell-moment-item p-2 rounded-lg cursor-pointer transition-all ${v===E?"selected":""}"
                      data-spell-moment="${E}"
                      style="background: ${v===E?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${v===E?"#6fa8dc":"#d4c4a8"};">
                      <div class="font-bold text-xs" style="color: #5a4a3a;">${E==="打出时"?"":$e[E]}${E}</div>
                    </div>
                  `).join("")}
                </div>
                `:`
                <div class="text-sm" style="color: #8b7355;">
                  ${v}
                </div>
                `}
              </div>
              
              <!-- 法术条件选择（侧栏） -->
              <div class="mb-4">
                <button id="toggle-spell-condition-btn-side" class="w-full flex items-center justify-between font-bold text-sm mb-2" style="color: #8b7355;">
                  <span>条件</span>
                  <span class="text-lg">${this.showConditionPanel?"▼":"▶"}</span>
                </button>
                ${this.showConditionPanel?`
                  <div class="space-y-1">
                    ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...f?.moment==="攻击时"?["target_attr"]:[]].map(E=>{const S=this.isConditionSelected(E,f),T=this.getConditionItemStyle(E,f);return`
                        <div class="spell-condition-item-side px-2 py-1 rounded-lg cursor-pointer transition-all ${S?"selected":""}"
                          data-spell-condition-side="${E}"
                          style="${T}">
                          <div class="font-bold text-xs" style="color: #5a4a3a;">${E==="guaranteed"?"必然触发":E==="d6"?"🎲 D6":E==="hero_hp"?"英雄血量":E==="minion_count"?"随从数":E==="hand_count"?"手牌数":E==="exists_minion"?"存在随从":"目标属性"}</div>
                          ${E==="d6"&&S?`
                            <div class="flex gap-1 mt-2">
                              ${[1,2,3,4,5,6].map(R=>`
                                <button class="trigger-num-btn w-7 h-7 rounded text-xs font-bold ${(f.triggerNumbers||[1,2,3,4,5,6]).includes(R)?"selected":""}"
                                  data-trigger-num="${R}" data-editor="spell"
                                  style="background: ${(f.triggerNumbers||[1,2,3,4,5,6]).includes(R)?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"#dccfc0"}; color: ${(f.triggerNumbers||[1,2,3,4,5,6]).includes(R)?"#fff":"#8b7355"}; border: 1px solid ${(f.triggerNumbers||[1,2,3,4,5,6]).includes(R)?"#a08060":"#d4c4a8"};">
                                  ${R}
                                </button>
                              `).join("")}
                            </div>
                          `:""}
                          ${S?this.getConditionSubEditor("spell",f):""}
                        </div>
                      `}).join("")}
                  </div>
                `:`
                  <div class="text-sm" style="color: #8b7355;">
                    ${this.getConditionCollapsedText(f)}
                  </div>
                `}
              </div>
              
              <!-- 法术目标选择 -->
              <div class="mb-4">
                <button id="toggle-spell-target-btn-side" class="w-full flex items-center justify-between font-bold text-sm mb-2" style="color: #8b7355;">
                  <div class="flex items-center gap-2">
                    <span>目标</span>
                    ${f.targets?.length>1||f.targets?.includes("我方所有随从")||f.targets?.includes("敌方所有随从")?`
                      <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                        <input type="checkbox" id="random-target-check-spell-side" ${f.isRandomTarget?"checked":""}
                          style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                        随机
                      </label>
                      ${f.isRandomTarget?`
                        <label class="flex items-center gap-1" style="font-size: 11px; color: #a08060; font-weight: normal;">
                          次数
                          <input type="number" id="random-target-times-spell-side" value="${f.randomTargetTimes??1}" min="1" max="99"
                            style="width: 35px; height: 18px; font-size: 11px; background: rgba(255,255,255,0.5); border: 1px solid #d4c4a8; border-radius: 4px; text-align: center; color: #5a4a3a;">
                        </label>
                      `:""}
                    `:""}
                  </div>
                  <span class="flex items-center gap-2">
                    ${!this.showTargetPanel&&(f.targets?.includes("无需目标")||f.targets?.includes("卡牌"))?`
                      <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;" onclick="event.stopPropagation()">
                        <input type="checkbox" id="opponent-checkbox-spell-side" ${f.isOpponent?"checked":""} style="accent-color: #c4a574;">
                        <span>对手</span>
                      </label>
                    `:""}
                    <span class="text-lg">${this.showTargetPanel?"▼":"▶"}</span>
                  </span>
                </button>
                ${this.showTargetPanel?`
                <div class="space-y-1 max-h-40 overflow-y-auto target-scroll-container">
                  ${["无需目标","卡牌","选择目标","选择随从","我方英雄","敌方英雄","我方所有随从","敌方所有随从"].map(E=>`
                    <div class="spell-target-item p-2 rounded-lg cursor-pointer transition-all ${f.targets?.includes(E)?"selected":""}"
                      data-spell-target="${E}"
                      style="background: ${f.targets?.includes(E)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${f.targets?.includes(E)?"#f5a623":"#d4c4a8"};">
                      <div class="font-bold text-xs" style="color: #5a4a3a;">${E}</div>
                    </div>
                  `).join("")}
                </div>
                `:`
                <div class="text-sm" style="color: #8b7355;">
                  ${f.targets?.length>0?`${f.isOpponent?"对手 ":""}${f.targets.join("、")}`:"点击展开选择"}
                </div>
                `}
              </div>
              
              ${f.targets?.length>0?`
              <!-- 法术效果选择 -->
              <div class="mb-4">
                <div class="font-bold text-sm mb-2" style="color: #8b7355;">效果</div>
                <div class="space-y-1">
                  ${(()=>{const E=f.targets||[],S=[],T=f.moments||(f.moment?[f.moment]:[]),A=E.some(R=>R==="选择随从"||R==="自己"||R==="我方所有随从"||R==="敌方所有随从");return E.includes("无需目标")&&S.push("抽牌","弃牌","获得能量","失去能量"),E.includes("卡牌")&&(S.push("召唤","获得"),!T.includes("打出时")&&!T.includes("死亡时")&&S.push("变化"),S.push("属性变化")),(!E.includes("无需目标")&&!E.includes("卡牌")||E.length>1)&&(S.push("造成伤害","给予印记","治愈"),A&&S.push("属性变化")),S.map(R=>`
                      <div class="spell-effect-item p-2 rounded-lg cursor-pointer transition-all ${f.effect===R?"selected":""}"
                        data-spell-effect-type="${R}"
                        style="background: ${f.effect===R?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${f.effect===R?"#e07070":"#d4c4a8"};">
                        <div class="font-bold text-xs" style="color: #5a4a3a;">${R}</div>
                      </div>
                    `).join("")})()}
                </div>
                
                ${f.effect?`
                  <div class="mt-2 pt-2" style="border-top: 1px solid #d4c4a8;">
                    ${f.effect==="属性变化"?`
                      <div class="space-y-1">
                        ${f.targets?.includes("卡牌")?`
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-xs mr-1" style="color: #8b7355;">费:</label>
                          <input type="number" id="spell-cost-value-side" value="${f.costValue}" min="0" max="99"
                            class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-1"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="spell-cost-positive-btn-side" class="w-6 h-6 rounded font-bold text-xs ${f.costValue===0?"opacity-50":""}"
                            style="background: ${f.costValue===0?"#999":!f.isCostSet&&f.isCostPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.costValue===0?"#777":!f.isCostSet&&f.isCostPositive?"#4a8a4a":"#aaa"};">
                            +
                          </button>
                          <button id="spell-cost-zero-btn-side" class="w-6 h-6 rounded font-bold text-xs ${f.costValue===0?"":"opacity-50"}"
                            style="background: ${f.costValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.costValue===0?"#3a7ab0":"#aaa"};">
                            0
                          </button>
                          <button id="spell-cost-negative-btn-side" class="w-6 h-6 rounded font-bold text-xs ${f.costValue===0?"opacity-50":""}"
                            style="background: ${f.costValue===0?"#999":!f.isCostSet&&!f.isCostPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.costValue===0?"#777":!f.isCostSet&&!f.isCostPositive?"#a04040":"#aaa"};">
                            -
                          </button>
                          <button id="spell-cost-set-btn-side" class="w-6 h-6 rounded font-bold text-xs ${f.costValue===0?"opacity-50":""}"
                            style="background: ${f.costValue===0?"#999":f.isCostSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.costValue===0?"#777":f.isCostSet?"#b89020":"#aaa"};">
                            =
                          </button>
                        </div>
                        `:""}
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-xs mr-1" style="color: #8b7355;">攻:</label>
                          <input type="number" id="spell-attack-value-side" value="${f.attackValue}" min="0" max="99"
                            class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-1"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="spell-attack-positive-btn-side" class="w-6 h-6 rounded font-bold text-xs ${f.attackValue===0?"opacity-50":""}"
                            style="background: ${f.attackValue===0?"#999":!f.isAttackSet&&f.isAttackPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.attackValue===0?"#777":!f.isAttackSet&&f.isAttackPositive?"#4a8a4a":"#aaa"};">
                            +
                          </button>
                          <button id="spell-attack-zero-btn-side" class="w-6 h-6 rounded font-bold text-xs ${f.attackValue===0?"":"opacity-50"}"
                            style="background: ${f.attackValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.attackValue===0?"#3a7ab0":"#aaa"};">
                            0
                          </button>
                          <button id="spell-attack-negative-btn-side" class="w-6 h-6 rounded font-bold text-xs ${f.attackValue===0?"opacity-50":""}"
                            style="background: ${f.attackValue===0?"#999":!f.isAttackSet&&!f.isAttackPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.attackValue===0?"#777":!f.isAttackSet&&!f.isAttackPositive?"#a04040":"#aaa"};">
                            -
                          </button>
                          <button id="spell-attack-set-btn-side" class="w-6 h-6 rounded font-bold text-xs ${f.attackValue===0?"opacity-50":""}"
                            style="background: ${f.attackValue===0?"#999":f.isAttackSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.attackValue===0?"#777":f.isAttackSet?"#b89020":"#aaa"};">
                            =
                          </button>
                        </div>
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-xs mr-1" style="color: #8b7355;">血:</label>
                          <input type="number" id="spell-health-value-side" value="${f.healthValue}" min="0" max="99"
                            class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-1"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="spell-health-positive-btn-side" class="w-6 h-6 rounded font-bold text-xs ${f.healthValue===0?"opacity-50":""}"
                            style="background: ${f.healthValue===0?"#999":!f.isHealthSet&&f.isHealthPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.healthValue===0?"#777":!f.isHealthSet&&f.isHealthPositive?"#4a8a4a":"#aaa"};">
                            +
                          </button>
                          <button id="spell-health-zero-btn-side" class="w-6 h-6 rounded font-bold text-xs ${f.healthValue===0?"":"opacity-50"}"
                            style="background: ${f.healthValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.healthValue===0?"#3a7ab0":"#aaa"};">
                            0
                          </button>
                          <button id="spell-health-negative-btn-side" class="w-6 h-6 rounded font-bold text-xs ${f.healthValue===0?"opacity-50":""}"
                            style="background: ${f.healthValue===0?"#999":!f.isHealthSet&&!f.isHealthPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.healthValue===0?"#777":!f.isHealthSet&&!f.isHealthPositive?"#a04040":"#aaa"};">
                            -
                          </button>
                          <button id="spell-health-set-btn-side" class="w-6 h-6 rounded font-bold text-xs ${f.healthValue===0?"opacity-50":""}"
                            style="background: ${f.healthValue===0?"#999":f.isHealthSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.healthValue===0?"#777":f.isHealthSet?"#b89020":"#aaa"};">
                            =
                          </button>
                        </div>
                      </div>
                    `:`
                      <div class="flex items-center gap-2">
                        <label class="font-bold text-xs" style="color: #8b7355;">数值:</label>
                        <input type="number" id="spell-effect-value-side" value="${f.value}" min="1" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-xs"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                      </div>
                    `}
                  </div>
                `:""}
              </div>
              `:""}
                `})()}
              `:`
              <!-- 词条选择（可折叠） -->
              <div class="mb-4">
                <button id="toggle-keywords-section-btn" class="w-full flex items-center justify-between font-bold text-sm mb-2" style="color: #8b7355;">
                  <span>词条</span>
                  <span class="text-base">${this.showKeywordsPanel?"▼":"▶"}</span>
                </button>
                ${this.showKeywordsPanel?`
                <div class="space-y-1 max-h-40 overflow-y-auto keyword-scroll-container">
                  ${e.map(f=>`
                    <div class="keyword-item p-2 rounded-lg cursor-pointer transition-all ${this.currentCard.keywords.some(v=>v.name===f.name)?"selected":""}"
                      data-keyword-name="${f.name}"
                      style="background: ${this.currentCard.keywords.some(v=>v.name===f.name)?"rgba(124, 184, 124, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${this.currentCard.keywords.some(v=>v.name===f.name)?"#7cb87c":"#d4c4a8"};">
                      <div class="font-bold text-xs" style="color: #5a4a3a;">${f.name}</div>
                      <div class="text-xs" style="color: #8b7355;">${f.description}</div>
                    </div>
                  `).join("")}
                  <div class="clear-keywords-btn p-2 rounded-lg cursor-pointer transition-all mt-2" 
                    style="background: rgba(200, 100, 100, 0.12); border: 2px dashed #c86464;">
                    <div class="font-bold text-xs" style="color: #c86464; text-align: center;">清空词条</div>
                  </div>
                </div>
                `:`
                <div class="text-xs" style="color: #8b7355;">
                  ${this.currentCard.keywords.length>0?this.currentCard.keywords.map(f=>f.name).join("、"):"点击▶展开"}
                </div>
                `}
              </div>
              `}
              
              <!-- 多技能效果切换 -->
              <div class="mb-3">
                <div class="font-bold text-sm mb-2" style="color: #8b7355;">技能</div>
                <div class="flex items-center gap-2 flex-wrap">
                  ${(this.currentCard.effects||[]).map((f,v)=>`
                    <button class="effect-tab px-2 py-1 rounded-lg font-bold text-xs transition-all ${v===this.currentEffectIndex?"ring-2":""}"
                      data-effect-index="${v}"
                      style="background: ${v===this.currentEffectIndex?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${v===this.currentEffectIndex?"#fff":"#5a4a3a"}; border: 2px solid ${v===this.currentEffectIndex?"#4a90d9":"#d4c4a8"};">
                      技能${v+1}
                    </button>
                  `).join("")}
                  <button id="add-effect-btn" class="px-2 py-1 rounded-lg font-bold text-xs"
                    style="background: rgba(124, 184, 124, 0.5); color: #4a8a4a; border: 2px dashed #5a9a5a;">+</button>
                  ${(this.currentCard.effects?.length||0)>0?`
                    <button id="remove-effect-btn" class="px-2 py-1 rounded-lg font-bold text-xs"
                      style="background: rgba(224, 112, 112, 0.5); color: #a04040; border: 2px dashed #c05050;">-</button>
                  `:""}
                </div>
              </div>
              
              ${r&&t?`
              <!-- 时刻选择 -->
              <div class="mb-2">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-sm" style="color: #8b7355;">时刻</span>
                </div>
                <div class="flex gap-1 flex-wrap">
                  ${["打出时","死亡时","攻击时","失去生命时","回合结束时","回合开始时","下回合开始时"].filter(f=>this.currentCardIndex===0||f!=="打出时").map(f=>`
                    <div class="moment-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${b(f)?"selected":""}"
                      data-moment="${f}"
                      style="background: ${b(f)?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${b(f)?"#6fa8dc":"#d4c4a8"};">
                      ${$e[f]+f}
                    </div>
                  `).join("")}
                </div>

              </div>
              `:""}
              
              <!-- 条件选择 -->
              ${r&&t?`
              <div class="mb-2">
                <button id="toggle-condition-spell-effect-btn" class="w-full flex items-center justify-between font-bold text-sm mb-2" style="color: #8b7355;">
                  <span>条件</span>
                  <span class="text-lg">${this.showConditionPanel?"▼":"▶"}</span>
                </button>
                ${this.showConditionPanel?`
                  <div class="space-y-1">
                    ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...t&&t.moment==="攻击时"?["target_attr"]:[]].map(f=>{const v=d(f),E=c(f);return`
                        <div class="condition-item-spell px-2 py-1 rounded-lg cursor-pointer transition-all ${v?"selected":""}"
                          data-spell-condition="${f}"
                          data-editor="spell"
                          style="${E}">
                          <div class="font-bold text-xs" style="color: #5a4a3a;">${f==="guaranteed"?"必然触发":f==="d6"?"🎲 D6":f==="hero_hp"?"英雄血量":f==="minion_count"?"随从数":f==="hand_count"?"手牌数":f==="exists_minion"?"存在随从":"目标属性"}</div>
                          ${f==="d6"&&v?`
                            <div class="flex gap-1 mt-2">
                              ${[1,2,3,4,5,6].map(T=>`
                                <button class="trigger-num-btn w-6 h-6 rounded text-xs font-bold ${(t.triggerNumbers||[1,2,3,4,5,6]).includes(T)?"selected":""}"
                                  data-trigger-num="${T}" data-editor="spell"
                                  style="background: ${(t.triggerNumbers||[1,2,3,4,5,6]).includes(T)?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"#dccfc0"}; color: ${(t.triggerNumbers||[1,2,3,4,5,6]).includes(T)?"#fff":"#8b7355"}; border: 1px solid ${(t.triggerNumbers||[1,2,3,4,5,6]).includes(T)?"#a08060":"#d4c4a8"};">
                                  ${T}
                                </button>
                              `).join("")}
                            </div>
                          `:""}
                          ${v?o("spell"):""}
                        </div>
                      `}).join("")}
                  </div>
                `:`
                  <div class="mt-1 text-sm" style="color: #8b7355;">
                    ${this.getConditionCollapsedText(t)}
                  </div>
                `}
              </div>
              `:""}
              
              <!-- 目标选择 -->
              ${p.length>0?`
              <div class="mb-2">
                <div class="flex items-center gap-2 flex-wrap mb-2">
                  <span class="font-bold text-sm" style="color: #8b7355;">目标</span>
                  ${g.length>1||g.includes("我方所有随从")||g.includes("敌方所有随从")?`
                    <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                      <input type="checkbox" id="random-target-check" ${t?.isRandomTarget?"checked":""}
                        style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                      随机
                    </label>
                  `:""}
                </div>
                <div class="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                  ${n().map(f=>`
                    <div class="target-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${h(f)?"selected":""}"
                      data-target="${f}"
                      style="background: ${h(f)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${h(f)?"#f5a623":"#d4c4a8"};">
                      ${f}
                    </div>
                  `).join("")}
                </div>
              </div>
              `:""}
              
              <!-- 效果选择 -->
              ${u&&g.length>0?`
              <div class="mb-2">
                <div class="font-bold text-sm mb-2" style="color: #8b7355;">效果</div>
                <div class="flex flex-wrap gap-1">
                  ${m().map(f=>`
                    <div class="effect-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${y===f?"selected":""}"
                      data-effect="${f}"
                      style="background: ${y===f?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${y===f?"#e07070":"#d4c4a8"};">
                      ${f}
                    </div>
                  `).join("")}
                </div>
                
                ${y?`
                  <div class="mt-2 pt-2" style="border-top: 2px solid #d4c4a8;">
                    ${y==="属性变化"?`
                      <div class="space-y-2">
                        ${t.targets?.includes("卡牌")?`
                          <div class="mb-1">
                            <div class="font-bold text-xs mb-1" style="color: #8b7355;">来源</div>
                            <div class="flex flex-wrap gap-1">
                              ${(()=>{const f=[{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],v=t.summonSource??"my_hand";return f.map(E=>`
                                  <div class="summon-source-btn-2 px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${v===E.key?"selected":""}"
                                    data-source="${E.key}"
                                    style="background: ${v===E.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${v===E.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                    ${E.label}
                                  </div>
                                `).join("")})()}
                            </div>
                          </div>
                          <div class="flex items-center justify-between mb-1">
                            <div class="font-bold text-xs" style="color: #8b7355;">属性变化</div>
                            <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;">
                              <input type="checkbox" id="attr-random-checkbox-2" class="cursor-pointer" ${t.isRandom?"checked":""}>
                              <span>随机</span>
                            </label>
                          </div>
                          <div class="flex items-center gap-0">
                            <label class="font-bold text-xs mr-2" style="color: #8b7355;">费用:</label>
                            <input type="number" id="effect-cost-value" value="${t.costValue}" min="0" max="99"
                              class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-2"
                              style="border: 2px solid #d4c4a8; background: #faf8f5;">
                            <button id="cost-positive-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${t.costValue===0?"opacity-50":!t.isCostSet&&t.isCostPositive?"":"opacity-50"}"
                              style="background: ${t.costValue===0?"#999":!t.isCostSet&&t.isCostPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.costValue===0?"#777":!t.isCostSet&&t.isCostPositive?"#4a8a4a":"#aaa"};">+</button>
                            <button id="cost-zero-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${t.costValue===0?"":"opacity-50"}"
                              style="background: ${t.costValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.costValue===0?"#3a7ab0":"#aaa"};">0</button>
                            <button id="cost-negative-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${t.costValue===0?"opacity-50":!t.isCostSet&&!t.isCostPositive?"":"opacity-50"}"
                              style="background: ${t.costValue===0?"#999":!t.isCostSet&&!t.isCostPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.costValue===0?"#777":!t.isCostSet&&!t.isCostPositive?"#a04040":"#aaa"};">-</button>
                            <button id="cost-set-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${t.costValue===0?"opacity-50":t.isCostSet?"":"opacity-50"}"
                              style="background: ${t.costValue===0?"#999":t.isCostSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.costValue===0?"#777":t.isCostSet?"#b89020":"#aaa"};">=</button>
                          </div>
                        `:""}
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-xs mr-2" style="color: #8b7355;">攻击:</label>
                          <input type="number" id="effect-attack-value" value="${t.attackValue}" min="0" max="99"
                            class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-2"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="attack-positive-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${t.attackValue===0?"opacity-50":!t.isAttackSet&&t.isAttackPositive?"":"opacity-50"}"
                            style="background: ${t.attackValue===0?"#999":!t.isAttackSet&&t.isAttackPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.attackValue===0?"#777":!t.isAttackSet&&t.isAttackPositive?"#4a8a4a":"#aaa"};">+</button>
                          <button id="attack-zero-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${t.attackValue===0?"":"opacity-50"}"
                            style="background: ${t.attackValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.attackValue===0?"#3a7ab0":"#aaa"};">0</button>
                          <button id="attack-negative-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${t.attackValue===0?"opacity-50":!t.isAttackSet&&!t.isAttackPositive?"":"opacity-50"}"
                            style="background: ${t.attackValue===0?"#999":!t.isAttackSet&&!t.isAttackPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.attackValue===0?"#777":!t.isAttackSet&&!t.isAttackPositive?"#a04040":"#aaa"};">-</button>
                          <button id="attack-set-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${t.attackValue===0?"opacity-50":t.isAttackSet?"":"opacity-50"}"
                            style="background: ${t.attackValue===0?"#999":t.isAttackSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.attackValue===0?"#777":t.isAttackSet?"#b89020":"#aaa"};">=</button>
                        </div>
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-xs mr-2" style="color: #8b7355;">血量:</label>
                          <input type="number" id="effect-health-value" value="${t.healthValue}" min="0" max="99"
                            class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-2"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="health-positive-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${t.healthValue===0?"opacity-50":!t.isHealthSet&&t.isHealthPositive?"":"opacity-50"}"
                            style="background: ${t.healthValue===0?"#999":!t.isHealthSet&&t.isHealthPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.healthValue===0?"#777":!t.isHealthSet&&t.isHealthPositive?"#4a8a4a":"#aaa"};">+</button>
                          <button id="health-zero-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${t.healthValue===0?"":"opacity-50"}"
                            style="background: ${t.healthValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.healthValue===0?"#3a7ab0":"#aaa"};">0</button>
                          <button id="health-negative-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${t.healthValue===0?"opacity-50":!t.isHealthSet&&!t.isHealthPositive?"":"opacity-50"}"
                            style="background: ${t.healthValue===0?"#999":!t.isHealthSet&&!t.isHealthPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.healthValue===0?"#777":!t.isHealthSet&&!t.isHealthPositive?"#a04040":"#aaa"};">-</button>
                          <button id="health-set-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${t.healthValue===0?"opacity-50":t.isHealthSet?"":"opacity-50"}"
                            style="background: ${t.healthValue===0?"#999":t.isHealthSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.healthValue===0?"#777":t.isHealthSet?"#b89020":"#aaa"};">=</button>
                        </div>
                      </div>
                    `:y==="给予词条"?`
                      <div class="space-y-2">
                        <div class="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                          ${Object.values(Ee).filter(f=>f.name!=="准备").map(f=>{const v=t.grantedKeywordName===f.name,E=["🔥","❄️","⚡️"].includes(f.name);return`
                              <div class="grant-keyword-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${v?"selected":""}"
                                data-grant-keyword="${f.name}"
                                style="background: ${v?"rgba(139, 115, 85, 0.35)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${v?"#8b7355":"#d4c4a8"}; font-size: ${E?"14px":"11px"};">
                                ${f.name}
                              </div>
                            `}).join("")}
                        </div>
                        ${t.grantedKeywordName==="护甲"?`
                          <div class="flex items-center gap-2">
                            <label class="font-bold text-xs" style="color: #8b7355;">护甲值:</label>
                            <input type="number" id="grant-keyword-value" value="${t.grantedKeywordValue??1}" min="1" max="99"
                              class="w-14 px-1 py-1 rounded-lg outline-none text-center text-xs"
                              style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          </div>
                        `:""}
                      </div>
                    `:`
                      <div class="flex items-center gap-2">
                        <label class="font-bold text-xs" style="color: #8b7355;">数值:</label>
                        <input type="number" id="effect-value" value="${t.value}" min="1" max="99"
                          class="w-14 px-1 py-1 rounded-lg outline-none text-center text-xs"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                      </div>
                    `}
                    ${["召唤","获得","变化"].includes(y)||y==="属性变化"&&t.targets?.includes("卡牌")?`
                      <div class="mt-2">
                        <div class="mb-1">
                          <div class="font-bold text-xs mb-1" style="color: #8b7355;">来源</div>
                          <div class="flex flex-wrap gap-1">
                            ${(()=>{const f=[{key:"derived",label:"衍生卡"},{key:"deck_top",label:"抽牌堆顶"},{key:"discard_top",label:"弃牌堆顶"},{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],v=t.summonSource??"derived";return f.map(E=>`
                                <div class="summon-source-btn px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${v===E.key?"selected":""}"
                                  data-source="${E.key}"
                                  style="background: ${v===E.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${v===E.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                  ${E.label}
                                </div>
                              `).join("")})()}
                          </div>
                        </div>
                        <div class="flex items-center justify-between mb-1">
                          <div class="font-bold text-xs" style="color: #8b7355;">${y==="召唤"?"召唤卡牌":y==="获得"?"获得卡牌":"变化为"}</div>
                          <div class="flex items-center gap-2">
                            <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;">
                              <input type="checkbox" id="summon-random-checkbox" class="cursor-pointer" ${t.isRandom?"checked":""}>
                              <span>随机</span>
                            </label>
                            ${y==="召唤"||y==="获得"?`
                            <div class="flex items-center gap-1">
                              <span class="text-xs" style="color: #8b7355;">数量</span>
                              <input type="number" id="summon-count-input" value="${t.value||1}" min="1" max="99"
                                class="w-12 h-6 text-center text-xs border rounded"
                                style="background: rgba(212, 196, 168, 0.2); border-color: #d4c4a8; color: #5a4a3a;">
                            </div>
                            `:""}
                          </div>
                        </div>
                        ${(t.summonSource??"derived")==="derived"?`
                        <div class="flex flex-col gap-1 max-h-24 overflow-y-auto">
                          ${(()=>{const f=t.isRandom?t.summonedCardIndices??[]:t.summonedCardIndex!==void 0?[t.summonedCardIndex]:[];return this.editingCards.map((E,S)=>{if((y==="变化"||y==="召唤")&&E.type==="spell"||y==="变化"&&S===this.currentCardIndex||y==="召唤"&&p.includes("打出时")&&S===this.currentCardIndex)return null;const T=f.includes(S);return`
                                <div class="summon-card-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${T?"selected":""}"
                                  data-summon-index="${S}"
                                  style="background: ${T?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${T?"#6fa8dc":"#d4c4a8"};">
                                  ${E.name||"未命名"}
                                </div>
                              `}).filter(Boolean).join("")})()}
                        </div>
                        `:""}
                      </div>
                    `:""}
                    <button id="clear-effect-btn" class="w-full mt-2 py-1 rounded-lg font-bold text-xs"
                      style="background: #ccc; color: #5a4a3a; border: 2px solid #aaa;">清除效果</button>
                  </div>
                `:""}
              </div>
              `:""}
            </div>
            
            ${this.isDrawingMode?`
            <!-- 绘制工具面板 -->
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-start gap-4 p-4 pt-6" style="background: url('/images/wood_texture_seamless.png') center/cover no-repeat;">
              <button id="drawing-brush-btn" class="w-14 h-14 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all flex items-center justify-center ${this.drawingTool==="brush"?"ring-2":""}"
                style="background: ${this.drawingTool==="brush"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.drawingTool==="brush"?"#fff":"#5a4a3a"}; border: 2px solid ${this.drawingTool==="brush"?"#4a8a4a":"#d4c4a8"};">
                🖌️
              </button>
              <button id="drawing-eraser-btn" class="w-14 h-14 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all flex items-center justify-center ${this.drawingTool==="eraser"?"ring-2":""}"
                style="background: ${this.drawingTool==="eraser"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.drawingTool==="eraser"?"#fff":"#5a4a3a"}; border: 2px solid ${this.drawingTool==="eraser"?"#4a8a4a":"#d4c4a8"};">
                🧽
              </button>
              <button id="drawing-clear-btn" class="w-14 h-14 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all flex items-center justify-center"
                style="background: rgba(212, 196, 168, 0.5); color: #5a4a3a; border: 2px solid #d4c4a8;"
                title="清空">
                🗑
              </button>
              <div class="flex flex-col gap-1 mt-1">
                <button id="brush-thin-btn" class="w-14 h-9 rounded-lg font-bold text-sm shadow transform hover:scale-105 transition-all ${this.brushSizePreset==="thin"?"ring-2":""}"
                  style="background: ${this.brushSizePreset==="thin"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.brushSizePreset==="thin"?"#fff":"#5a4a3a"}; border: 2px solid ${this.brushSizePreset==="thin"?"#4a8a4a":"#d4c4a8"};">
                  细
                </button>
                <button id="brush-medium-btn" class="w-14 h-9 rounded-lg font-bold text-sm shadow transform hover:scale-105 transition-all ${this.brushSizePreset==="medium"?"ring-2":""}"
                  style="background: ${this.brushSizePreset==="medium"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.brushSizePreset==="medium"?"#fff":"#5a4a3a"}; border: 2px solid ${this.brushSizePreset==="medium"?"#4a8a4a":"#d4c4a8"};">
                  中
                </button>
                <button id="brush-thick-btn" class="w-14 h-9 rounded-lg font-bold text-sm shadow transform hover:scale-105 transition-all ${this.brushSizePreset==="thick"?"ring-2":""}"
                  style="background: ${this.brushSizePreset==="thick"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.brushSizePreset==="thick"?"#fff":"#5a4a3a"}; border: 2px solid ${this.brushSizePreset==="thick"?"#4a8a4a":"#d4c4a8"};">
                  粗
                </button>
              </div>
            </div>
            `:""}
            
            <!-- 拉手标签（竖屏模式隐藏） -->
            ${this.isPortraitMode?"":`
            <div class="flex flex-col items-center justify-center cursor-pointer select-none" id="side-panel-handle" style="width: 24px; height: 100%; background: rgba(255, 255, 255, 0.95); border-right: 4px solid #d4c4a8; box-shadow: 2px 0 8px rgba(0,0,0,0.1);">
              <span class="text-lg" style="color: #8b7355;">${this.showSidePanel?"◀":"▶"}</span>
            </div>
            `}
          </div>
        `:""}

        <div class="flex gap-6 ${this.isPortraitMode?"flex-col items-center flex-1 w-full":"max-w-6xl w-full flex-1 min-h-0 items-center"}">
          <!-- 左侧面板：卡牌列表 + 类型选择 + 属性编辑（竖屏模式下隐藏，由更多编辑子界面提供） -->
          ${this.isPortraitMode?"":`
          <div class="w-56 flex-shrink-0 overflow-y-auto editor-left-panel-scroll self-stretch" style="position: relative; scrollbar-width: none; -ms-overflow-style: none;">
            <!-- 卡牌列表（位于"卡牌类型"上方，纵向排列） -->
            <div class="p-3 rounded-2xl shadow-xl mb-4" style="background: rgba(255, 255, 255, 0.9); border: 3px solid #d4c4a8;">
              <div class="flex items-center justify-between mb-2">
                <span class="font-bold text-sm" style="color: #8b7355;">卡牌列表</span>
                <button id="add-derived-card-btn" class="px-2 py-1 rounded text-xs font-bold" style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 1px solid #4a8a4a;">+ 衍生卡</button>
              </div>
              <div class="flex flex-col gap-1 max-h-40 overflow-y-auto overflow-x-hidden">
                ${this.editingCards.map((f,v)=>`
                  <div class="card-list-item px-3 py-2 rounded-lg cursor-pointer transition-all text-sm ${this.currentCardIndex===v?"ring-2":""}"
                    data-card-index="${v}"
                    style="background: ${this.currentCardIndex===v?"rgba(111, 168, 220, 0.4)":"rgba(212, 196, 168, 0.4)"}; border: 2px solid ${this.currentCardIndex===v?"#6fa8dc":"#d4c4a8"};">
                    <div class="flex items-center justify-between">
                      <div class="flex flex-col flex-1 min-w-0">
                        <div class="font-bold text-sm truncate" style="color: ${v===0?"#5a4a3a":"#4a8a4a"};">${f.name||(v===0?"主卡":`衍生${v}`)}</div>
                        <div class="text-xs" style="color: #8b7355;">${f.type==="spell"?"✨法术":"⚔️随从"} | ${f.cost??1}费 ${f.type!=="spell"?`${f.attack??1}/${f.health??1}`:""}</div>
                      </div>
                      ${v!==0?`
                        <button class="card-list-delete-btn w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ml-2 flex-shrink-0"
                          data-card-index="${v}"
                          style="background: rgba(224, 112, 112, 0.7); color: #fff; border: none; line-height: 1;">×</button>
                      `:""}
                    </div>
                  </div>
                `).join("")}
              </div>
              <div class="border-t border-[#d4c4a8] my-2"></div>
              <div class="flex gap-2">
                <button id="card-type-minion" class="flex-1 px-3 py-2 rounded-lg font-bold text-sm transition-all ${this.currentCard.type==="minion"?"ring-2":""}"
                  style="background: ${this.currentCard.type==="minion"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.currentCard.type==="minion"?"#fff":"#5a4a3a"}; border: 2px solid ${this.currentCard.type==="minion"?"#4a8a4a":"#d4c4a8"};">
                  ⚔️ 随从
                </button>
                <button id="card-type-spell" class="flex-1 px-3 py-2 rounded-lg font-bold text-sm transition-all ${this.currentCard.type==="spell"?"ring-2":""}"
                  style="background: ${this.currentCard.type==="spell"?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.currentCard.type==="spell"?"#fff":"#5a4a3a"}; border: 2px solid ${this.currentCard.type==="spell"?"#4a90d9":"#d4c4a8"};">
                  ✨ 法术
                </button>
              </div>
            </div>
            
            ${this.currentCard.type==="spell"?`
            <!-- 法术编辑模块统一容器 -->
            <div class="p-3 rounded-xl" style="background: rgba(255, 255, 255, 0.9); border: 2px solid #c0a080;">
              <!-- 法术技能切换 -->
              <div class="p-2" style="border-bottom: 1px solid #c0a080;">
              <div class="font-bold text-xs mb-2" style="color: #8b7355;">技能效果</div>
              <div class="flex items-center gap-2 flex-wrap">
                ${(this.currentCard.effects||[]).map((f,v)=>`
                  <button class="effect-tab px-3 py-1 rounded-lg font-bold text-sm transition-all ${v===this.currentEffectIndex?"ring-2":""}"
                    data-effect-index="${v}"
                    style="background: ${v===this.currentEffectIndex?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${v===this.currentEffectIndex?"#fff":"#5a4a3a"}; border: 2px solid ${v===this.currentEffectIndex?"#4a90d9":"#d4c4a8"};">
                    效果${v+1}
                  </button>
                `).join("")}
                <button id="add-spell-effect-btn" class="px-3 py-1 rounded-lg font-bold text-sm transition-all"
                  style="background: rgba(124, 184, 124, 0.5); color: #4a8a4a; border: 2px dashed #5a9a5a;">
                  +
                </button>
                ${(this.currentCard.effects?.length||0)>1?`
                  <button id="remove-spell-effect-btn" class="px-3 py-1 rounded-lg font-bold text-sm transition-all"
                    style="background: rgba(224, 112, 112, 0.5); color: #a04040; border: 2px dashed #c05050;">
                    -
                  </button>
                `:""}
              </div>
              </div>
            
            ${(()=>{const f=this.currentCard.effects?.[this.currentEffectIndex];if(!f)return"";const v=f.moment||"打出时";return`
              <!-- 法术时刻选择 -->
              <div class="p-2" style="border-bottom: 1px solid #c0a080;">
                <button id="toggle-spell-moment-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <span>时刻</span>
                <span class="text-lg">${this.showMomentPanel?"▼":"▶"}</span>
              </button>
              ${this.showMomentPanel?`
                <div class="mt-2 space-y-1">
                  ${["打出时","下回合开始时"].map(E=>`
                    <div class="spell-moment-item p-2 rounded-lg cursor-pointer transition-all ${v===E?"selected":""}"
                      data-spell-moment="${E}"
                      style="background: ${v===E?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${v===E?"#6fa8dc":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${E==="打出时"?"":$e[E]}${E}</div>
                    </div>
                  `).join("")}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${v==="打出时"?"打出时":`${$e[v]}${v}`}
                </div>
              `}
              </div>

              <!-- 法术条件选择 -->
              <div class="p-2" style="border-bottom: 1px solid #c0a080;">
                <button id="toggle-spell-condition-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                  <span>条件</span>
                  <span class="text-lg">${this.showConditionPanel?"▼":"▶"}</span>
                </button>
                ${this.showConditionPanel?`
                  <div class="mt-2 space-y-1">
                    ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...f?.moment==="攻击时"?["target_attr"]:[]].map(E=>{const S=this.isConditionSelected(E,f),T=this.getConditionItemStyle(E,f);return`
                        <div class="spell-condition-item px-2 py-1 rounded-lg cursor-pointer transition-all ${S?"selected":""}"
                          data-spell-condition="${E}"
                          style="${T}">
                          <div class="font-bold text-xs" style="color: #5a4a3a;">${E==="guaranteed"?"必然触发":E==="d6"?"🎲 D6":E==="hero_hp"?"英雄血量":E==="minion_count"?"随从数":E==="hand_count"?"手牌数":E==="exists_minion"?"存在随从":"目标属性"}</div>
                          ${E==="d6"&&S?`
                            <div class="flex gap-1 mt-2">
                              ${[1,2,3,4,5,6].map(R=>`
                                <button class="trigger-num-btn w-7 h-7 rounded text-xs font-bold ${(f.triggerNumbers||[1,2,3,4,5,6]).includes(R)?"selected":""}"
                                  data-trigger-num="${R}" data-editor="spell"
                                  style="background: ${(f.triggerNumbers||[1,2,3,4,5,6]).includes(R)?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"#dccfc0"}; color: ${(f.triggerNumbers||[1,2,3,4,5,6]).includes(R)?"#fff":"#8b7355"}; border: 1px solid ${(f.triggerNumbers||[1,2,3,4,5,6]).includes(R)?"#a08060":"#d4c4a8"};">
                                  ${R}
                                </button>
                              `).join("")}
                            </div>
                          `:""}
                          ${S?this.getConditionSubEditor("spell",f):""}
                        </div>
                      `}).join("")}
                  </div>
                `:`
                  <div class="mt-1 text-sm" style="color: #8b7355;">
                    ${this.getConditionCollapsedText(f)}
                  </div>
                `}
              </div>
            
              <!-- 法术目标选择 -->
              <div class="p-2" style="border-bottom: 1px solid #c0a080;">
                <button id="toggle-spell-target-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <div class="flex items-center gap-2">
                  <span>目标</span>
                  ${f.targets?.length>1||f.targets?.includes("我方所有随从")||f.targets?.includes("敌方所有随从")?`
                    <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                      <input type="checkbox" id="random-target-check-spell" ${f.isRandomTarget?"checked":""}
                        style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                      随机
                    </label>
                    ${f.isRandomTarget?`
                      <label class="flex items-center gap-1" style="font-size: 11px; color: #a08060; font-weight: normal;">
                        次数
                        <input type="number" id="random-target-times-spell" value="${f.randomTargetTimes??1}" min="1" max="99"
                          style="width: 35px; height: 18px; font-size: 11px; background: rgba(255,255,255,0.5); border: 1px solid #d4c4a8; border-radius: 4px; text-align: center; color: #5a4a3a;">
                      </label>
                    `:""}
                  `:""}
                </div>
                <span class="flex items-center gap-2">
                  ${!this.showTargetPanel&&(f.targets?.includes("无需目标")||f.targets?.includes("卡牌"))?`
                    <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;" onclick="event.stopPropagation()">
                      <input type="checkbox" id="opponent-checkbox-spell" ${f.isOpponent?"checked":""} style="accent-color: #c4a574;">
                      <span>对手</span>
                    </label>
                  `:""}
                  <span class="text-lg">${this.showTargetPanel?"▼":"▶"}</span>
                </span>
              </button>
              ${this.showTargetPanel?`
                <div class="mt-2 space-y-1 max-h-40 overflow-y-auto target-scroll-container">
                  ${["无需目标","卡牌","选择目标","选择随从","我方英雄","敌方英雄","我方所有随从","敌方所有随从"].map(E=>`
                    <div class="spell-target-item p-2 rounded-lg cursor-pointer transition-all ${f.targets?.includes(E)?"selected":""}"
                      data-spell-target="${E}"
                      style="background: ${f.targets?.includes(E)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${f.targets?.includes(E)?"#f5a623":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${E}</div>
                    </div>
                  `).join("")}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${f.targets?.length>0?`${f.isOpponent?"对手 ":""}${f.targets.join("、")}`:"点击展开选择"}
                </div>
              `}
              </div>
            
            ${f.targets?.length>0?`
              <!-- 法术效果选择 -->
              <div class="p-2">
                <button id="toggle-spell-effect-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <span>效果</span>
                <span class="text-lg">${this.showEffectPanel?"▼":"▶"}</span>
              </button>
              ${this.showEffectPanel?`
                <div class="mt-2 space-y-1">
                  ${(()=>{const E=f.targets||[],S=[],T=f.moments||(f.moment?[f.moment]:[]),A=E.some(R=>R==="选择随从"||R==="自己"||R==="我方所有随从"||R==="敌方所有随从");return E.includes("无需目标")&&S.push("抽牌","弃牌","获得能量","失去能量"),E.includes("卡牌")&&(S.push("召唤","获得"),!T.includes("打出时")&&!T.includes("死亡时")&&S.push("变化"),S.push("属性变化")),(!E.includes("无需目标")&&!E.includes("卡牌")||E.length>1)&&(S.push("造成伤害","给予印记","治愈"),A&&S.push("属性变化")),S.map(R=>`
                      <div class="spell-effect-item p-2 rounded-lg cursor-pointer transition-all ${f.effect===R?"selected":""}"
                        data-spell-effect-type="${R}"
                        style="background: ${f.effect===R?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${f.effect===R?"#e07070":"#d4c4a8"};">
                        <div class="font-bold text-sm" style="color: #5a4a3a;">${R}</div>
                      </div>
                    `).join("")})()}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${f.effect||"点击展开选择"}
                </div>
              `}
              
              <!-- 效果数值（选中效果后始终显示在折叠栏下方） -->
              ${f.effect?`
                <div class="mt-3 pt-3" style="border-top: 2px solid #d4c4a8;">
                  ${f.effect==="属性变化"?`
                    <div class="space-y-2">
                      ${f.targets?.includes("卡牌")?`
                      <div class="flex items-center gap-0">
                        <label class="font-bold text-sm mr-2" style="color: #8b7355;">费用:</label>
                        <input type="number" id="spell-cost-value" value="${f.costValue}" min="0" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        <button id="spell-cost-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${f.costValue===0?"opacity-50":""}"
                          style="background: ${f.costValue===0?"#999":!f.isCostSet&&f.isCostPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.costValue===0?"#777":!f.isCostSet&&f.isCostPositive?"#4a8a4a":"#aaa"};">
                          +
                        </button>
                        <button id="spell-cost-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${f.costValue===0?"":"opacity-50"}"
                          style="background: ${f.costValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.costValue===0?"#3a7ab0":"#aaa"};">
                          0
                        </button>
                        <button id="spell-cost-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${f.costValue===0?"opacity-50":""}"
                          style="background: ${f.costValue===0?"#999":!f.isCostSet&&!f.isCostPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.costValue===0?"#777":!f.isCostSet&&!f.isCostPositive?"#a04040":"#aaa"};">
                          -
                        </button>
                        <button id="spell-cost-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${f.costValue===0?"opacity-50":""}"
                          style="background: ${f.costValue===0?"#999":f.isCostSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.costValue===0?"#777":f.isCostSet?"#b89020":"#aaa"};">
                          =
                        </button>
                      </div>
                      `:""}
                      <div class="flex items-center gap-0">
                        <label class="font-bold text-sm mr-2" style="color: #8b7355;">攻击:</label>
                        <input type="number" id="spell-attack-value" value="${f.attackValue}" min="0" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        <button id="spell-attack-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${f.attackValue===0?"opacity-50":""}"
                          style="background: ${f.attackValue===0?"#999":!f.isAttackSet&&f.isAttackPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.attackValue===0?"#777":!f.isAttackSet&&f.isAttackPositive?"#4a8a4a":"#aaa"};">
                          +
                        </button>
                        <button id="spell-attack-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${f.attackValue===0?"":"opacity-50"}"
                          style="background: ${f.attackValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.attackValue===0?"#3a7ab0":"#aaa"};">
                          0
                        </button>
                        <button id="spell-attack-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${f.attackValue===0?"opacity-50":""}"
                          style="background: ${f.attackValue===0?"#999":!f.isAttackSet&&!f.isAttackPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.attackValue===0?"#777":!f.isAttackSet&&!f.isAttackPositive?"#a04040":"#aaa"};">
                          -
                        </button>
                        <button id="spell-attack-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${f.attackValue===0?"opacity-50":""}"
                          style="background: ${f.attackValue===0?"#999":f.isAttackSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.attackValue===0?"#777":f.isAttackSet?"#b89020":"#aaa"};">
                          =
                        </button>
                      </div>
                      <div class="flex items-center gap-0">
                        <label class="font-bold text-sm mr-2" style="color: #8b7355;">生命:</label>
                        <input type="number" id="spell-health-value" value="${f.healthValue}" min="0" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        <button id="spell-health-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${f.healthValue===0?"opacity-50":""}"
                          style="background: ${f.healthValue===0?"#999":!f.isHealthSet&&f.isHealthPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.healthValue===0?"#777":!f.isHealthSet&&f.isHealthPositive?"#4a8a4a":"#aaa"};">
                          +
                        </button>
                        <button id="spell-health-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${f.healthValue===0?"":"opacity-50"}"
                          style="background: ${f.healthValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.healthValue===0?"#3a7ab0":"#aaa"};">
                          0
                        </button>
                        <button id="spell-health-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${f.healthValue===0?"opacity-50":""}"
                          style="background: ${f.healthValue===0?"#999":!f.isHealthSet&&!f.isHealthPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.healthValue===0?"#777":!f.isHealthSet&&!f.isHealthPositive?"#a04040":"#aaa"};">
                          -
                        </button>
                        <button id="spell-health-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${f.healthValue===0?"opacity-50":""}"
                          style="background: ${f.healthValue===0?"#999":f.isHealthSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${f.healthValue===0?"#777":f.isHealthSet?"#b89020":"#aaa"};">
                          =
                        </button>
                      </div>
                    </div>
                  `:`
                    <div class="flex items-center gap-2">
                      <label class="font-bold text-sm" style="color: #8b7355;">数值:</label>
                      <input type="number" id="spell-effect-value" value="${f.value}" min="1" max="99"
                        class="w-16 px-2 py-1 rounded-lg outline-none text-center text-sm"
                        style="border: 2px solid #d4c4a8; background: #faf8f5;">
                    </div>
                  `}
                  ${f.effect==="造成伤害"?`
                    <div class="flex items-center gap-2">
                      <label class="font-bold text-sm" style="color: #8b7355;">元素:</label>
                      <div class="flex gap-1">
                        <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${f.elementType?"":"selected"}"
                          data-element-type="" data-spell="1"
                          style="background: ${f.elementType?"rgba(212, 196, 168, 0.2)":"rgba(212, 196, 168, 0.6)"}; border: 2px solid ${f.elementType?"transparent":"#d4c4a8"};">
                          无
                        </div>
                        <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${f.elementType==="fire"?"selected":""}"
                          data-element-type="fire" data-spell="1"
                          style="background: ${f.elementType==="fire"?"rgba(255, 140, 0, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${f.elementType==="fire"?"#ff8c00":"transparent"};">
                          🔥
                        </div>
                        <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${f.elementType==="ice"?"selected":""}"
                          data-element-type="ice" data-spell="1"
                          style="background: ${f.elementType==="ice"?"rgba(100, 180, 255, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${f.elementType==="ice"?"#64b4ff":"transparent"};">
                          ❄️
                        </div>
                        <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${f.elementType==="lightning"?"selected":""}"
                          data-element-type="lightning" data-spell="1"
                          style="background: ${f.elementType==="lightning"?"rgba(160, 80, 255, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${f.elementType==="lightning"?"#a050ff":"transparent"};">
                          ⚡️
                        </div>
                      </div>
                    </div>
                  `:""}
                  ${["召唤","获得","变化"].includes(f.effect)||f.effect==="属性变化"&&f.targets?.includes("卡牌")?`
                    <div class="mt-2">
                      <div class="mb-1">
                        <div class="font-bold text-sm mb-1" style="color: #8b7355;">来源</div>
                        <div class="flex flex-wrap gap-1">
                          ${(()=>{const E=f.effect==="属性变化"?[{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}]:[{key:"derived",label:"衍生卡"},{key:"deck_top",label:"抽牌堆顶"},{key:"discard_top",label:"弃牌堆顶"},{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],S=f.effect==="属性变化"?f.summonSource??"my_hand":f.summonSource??"derived";return E.map(T=>`
                              <div class="spell-summon-source-btn px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${S===T.key?"selected":""}"
                                data-source="${T.key}"
                                style="background: ${S===T.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${S===T.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                ${T.label}
                              </div>
                            `).join("")})()}
                        </div>
                      </div>
                      <div class="flex items-center justify-between mb-1">
                        <div class="font-bold text-sm" style="color: #8b7355;">${f.effect==="属性变化"?"卡牌属性变化":f.effect==="召唤"?"召唤卡牌":f.effect==="获得"?"获得卡牌":"变化为"}</div>
                        <div class="flex items-center gap-2">
                          <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;">
                            <input type="checkbox" id="spell-summon-random-checkbox" class="cursor-pointer" ${f.isRandom?"checked":""}>
                            <span>随机</span>
                          </label>
                          ${f.effect==="召唤"||f.effect==="获得"?`
                          <div class="flex items-center gap-1">
                            <span class="text-xs" style="color: #8b7355;">数量</span>
                            <input type="number" id="spell-summon-count-input" value="${f.value||1}" min="1" max="99"
                              class="w-12 h-6 text-center text-xs border rounded"
                              style="background: rgba(212, 196, 168, 0.2); border-color: #d4c4a8; color: #5a4a3a;">
                          </div>
                          `:""}
                        </div>
                      </div>
                      ${f.effect!=="属性变化"&&(f.summonSource??"derived")==="derived"?`
                      <div class="flex flex-col gap-1 max-h-24 overflow-y-auto">
                        ${(()=>{const E=f.isRandom?f.summonedCardIndices??[]:f.summonedCardIndex!==void 0?[f.summonedCardIndex]:[];return this.editingCards.map((T,A)=>{if((f.effect==="变化"||f.effect==="召唤")&&T.type==="spell"||f.effect==="变化"&&A===this.currentCardIndex||f.effect==="召唤"&&Fe(f,"打出时")&&A===this.currentCardIndex)return null;const R=E.includes(A);return`
                              <div class="spell-summon-card-item px-2 py-1 rounded-lg cursor-pointer transition-all text-sm ${R?"selected":""}"
                                data-spell-summon-index="${A}"
                                style="background: ${R?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${R?"#6fa8dc":"#d4c4a8"};">
                                ${T.name||"未命名"}
                              </div>
                            `}).filter(Boolean).join("")})()}
                      </div>
                      `:""}
                    </div>
                  `:""}
                </div>
              `:""}
              </div>
            `:""}
              `})()}
            </div>
            `:`
            <!-- 词条按钮 -->
            <div class="p-4 rounded-2xl shadow-xl mb-4" style="background: rgba(255, 255, 255, 0.9); border: 4px solid #d4c4a8;">
              <button id="toggle-keywords-btn" class="w-full flex items-center justify-between font-bold text-lg" style="color: #8b7355;">
                <span>词条</span>
                <span class="text-xl">${this.showKeywordsPanel?"▼":"▶"}</span>
              </button>
              ${this.showKeywordsPanel?`
                <div class="mt-3 space-y-1 max-h-60 overflow-y-auto keyword-scroll-container">
                  ${e.map(f=>`
                    <div class="keyword-item p-2 rounded-lg cursor-pointer transition-all ${this.currentCard.keywords.some(v=>v.name===f.name)?"selected":""}"
                      data-keyword-name="${f.name}"
                      style="background: ${this.currentCard.keywords.some(v=>v.name===f.name)?"rgba(124, 184, 124, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${this.currentCard.keywords.some(v=>v.name===f.name)?"#7cb87c":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${f.name}</div>
                      <div class="text-xs" style="color: #8b7355;">${f.description}</div>
                    </div>
                  `).join("")}
                  <div class="clear-keywords-btn p-2 rounded-lg cursor-pointer transition-all mt-2" 
                    style="background: rgba(200, 100, 100, 0.12); border: 2px dashed #c86464;">
                    <div class="font-bold text-sm" style="color: #c86464; text-align: center;">清空词条</div>
                  </div>
                </div>
              `:`
                <div class="mt-2 text-sm" style="color: #8b7355;">
                  ${this.currentCard.keywords.length>0?this.currentCard.keywords.map(f=>f.name).join("、"):"点击展开选择"}
                </div>
              `}
            </div>
            <!-- 随从效果编辑统一容器 -->
            <div class="p-3 rounded-xl" style="background: rgba(255, 255, 255, 0.9); border: 2px solid #c0a080;">
              <!-- 多技能效果切换 -->
              <div class="p-2" style="border-bottom: 1px solid #c0a080;">
              <div class="flex items-center gap-2 flex-wrap">
                ${(this.currentCard.effects||[]).map((f,v)=>`
                  <button class="effect-tab px-3 py-1 rounded-lg font-bold text-sm transition-all ${v===this.currentEffectIndex?"ring-2":""}"
                    data-effect-index="${v}"
                    style="background: ${v===this.currentEffectIndex?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${v===this.currentEffectIndex?"#fff":"#5a4a3a"}; border: 2px solid ${v===this.currentEffectIndex?"#4a90d9":"#d4c4a8"};">
                    技能${v+1}${f.moment?`(${f.moment})`:""}
                  </button>
                `).join("")}
                ${this.currentCard.type==="minion"?`
                <button id="add-effect-btn" class="px-3 py-1 rounded-lg font-bold text-sm transition-all"
                  style="background: rgba(124, 184, 124, 0.5); color: #4a8a4a; border: 2px dashed #5a9a5a;">
                  +
                </button>
                `:""}
                ${(this.currentCard.effects?.length||0)>0?`
                  <button id="remove-effect-btn" class="px-3 py-1 rounded-lg font-bold text-sm transition-all"
                    style="background: rgba(224, 112, 112, 0.5); color: #a04040; border: 2px dashed #c05050;">
                    -
                  </button>
                `:""}
              </div>
            </div>
            
            ${r&&t?`
            <!-- 时刻选择框 -->
            <div class="p-2" style="border-bottom: 1px solid #c0a080;">
              <button id="toggle-moment-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <span>时刻</span>
                <span class="text-lg">${this.showMomentPanel?"▼":"▶"}</span>
              </button>
              ${this.showMomentPanel?`
                <div class="mt-2 space-y-1">
                  ${["打出时","死亡时","攻击时","失去生命时","回合结束时","回合开始时","下回合开始时"].filter(f=>this.currentCardIndex===0||f!=="打出时").map(f=>`
                    <div class="moment-item p-2 rounded-lg cursor-pointer transition-all ${b(f)?"selected":""}"
                      data-moment="${f}"
                      style="background: ${b(f)?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${b(f)?"#6fa8dc":"#d4c4a8"};">
                      <div class="font-bold text-xs" style="color: #5a4a3a;">${$e[f]+f}</div>
                    </div>
                  `).join("")}
                </div>
                ${p.includes("⚙️变量变化时")?`
                <div class="flex items-center gap-2 mt-2 flex-wrap">
                  <button id="variable-select-btn-lg" class="px-2 py-1 rounded-lg text-xs font-bold cursor-pointer"
                    style="background: rgba(180,180,180,0.4); color: #666; border: 1px solid #bbb;">
                    🔧 ${t?.variableChange?.variable?Ht[t.variableChange.variable]:"选择变量"}
                  </button>
                  <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #8b7355;" onclick="event.stopPropagation()">
                    <input type="checkbox" id="var-increase-check" ${t?.variableChange?.increase!==!1?"checked":""}
                      style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                    增加
                  </label>
                  <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #8b7355;" onclick="event.stopPropagation()">
                    <input type="checkbox" id="var-decrease-check" ${t?.variableChange?.decrease!==!1?"checked":""}
                      style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                    减少
                  </label>
                </div>
                `:""}
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${p.length>0?p.map(f=>$e[f]).join("")+p.join(""):"点击展开选择"}
                </div>
              `}
            </div>
            
            <!-- 条件选择框 -->
            <div class="p-2" style="border-bottom: 1px solid #c0a080;">
              <button id="toggle-condition-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <span>条件</span>
                <span class="text-lg">${this.showConditionPanel?"▼":"▶"}</span>
              </button>
              ${this.showConditionPanel?`
                <div class="mt-2 space-y-1">
                  ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...t&&t.moment==="攻击时"?["target_attr"]:[]].map(f=>{const v=d(f),E=c(f);return`
                      <div class="condition-item p-2 rounded-lg cursor-pointer transition-all ${v?"selected":""}"
                        data-condition="${f}"
                        data-editor="minion"
                        style="${E}">
                        <div class="font-bold text-sm" style="color: #5a4a3a;">${f==="guaranteed"?"必然触发":f==="d6"?"🎲 D6":f==="hero_hp"?"英雄血量":f==="minion_count"?"随从数":f==="hand_count"?"手牌数":f==="exists_minion"?"存在随从":"目标属性"}</div>
                        ${f==="d6"&&v?`
                          <div class="flex gap-1 mt-2">
                            ${[1,2,3,4,5,6].map(T=>`
                              <button class="trigger-num-btn w-7 h-7 rounded text-xs font-bold ${(t.triggerNumbers||[1,2,3,4,5,6]).includes(T)?"selected":""}"
                                data-trigger-num="${T}" data-editor="minion"
                                style="background: ${(t.triggerNumbers||[1,2,3,4,5,6]).includes(T)?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"#dccfc0"}; color: ${(t.triggerNumbers||[1,2,3,4,5,6]).includes(T)?"#fff":"#8b7355"}; border: 1px solid ${(t.triggerNumbers||[1,2,3,4,5,6]).includes(T)?"#a08060":"#d4c4a8"};">
                                ${T}
                              </button>
                            `).join("")}
                          </div>
                        `:""}
                        ${v?o("minion"):""}
                      </div>
                    `}).join("")}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${l()}
                </div>
              `}
            </div>
            
            <!-- 目标选择框（递进出现） -->
            ${u?`
            <div class="p-2" style="border-bottom: 1px solid #c0a080;">
              <button id="toggle-target-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <div class="flex items-center gap-2">
                  <span>目标</span>
                  ${g.includes("无需目标")||g.includes("卡牌")?`
                    <label class="opponent-label flex items-center gap-1 cursor-pointer ml-2" style="font-size: 11px; color: #c4a574; font-weight: normal;">
                      <input type="checkbox" id="opponent-target-check" ${t?.isOpponent?"checked":""}
                        style="width: 13px; height: 13px; accent-color: #c4a574; cursor: pointer;">
                      对手
                    </label>
                  `:""}
                  ${g.length>1||g.includes("我方所有随从")||g.includes("敌方所有随从")?`
                    <label class="random-target-label flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                      <input type="checkbox" id="random-target-check" ${t?.isRandomTarget?"checked":""}
                        style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                      随机
                    </label>
                  `:""}
                </div>
                <span class="text-lg">${this.showTargetPanel?"▼":"▶"}</span>
              </button>
              ${this.showTargetPanel?`
                <div class="mt-2 space-y-1 max-h-40 overflow-y-auto target-scroll-container">
                  ${n().map(f=>`
                    <div class="target-item p-2 rounded-lg cursor-pointer transition-all ${h(f)?"selected":""}"
                      data-target="${f}"
                      style="background: ${h(f)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${h(f)?"#f5a623":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${f}</div>
                    </div>
                  `).join("")}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${g.length>0?g.join("、"):"点击展开选择"}
                </div>
              `}
            </div>
            `:""}
            
            <!-- 效果选择框（递进出现） -->
            ${u&&g.length>0?`
              <div class="p-2">
              <button id="toggle-effect-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <span>效果</span>
                <span class="text-lg">${this.showEffectPanel?"▼":"▶"}</span>
              </button>
              ${this.showEffectPanel?`
                <div class="mt-2 space-y-1">
                  ${m().map(f=>`
                    <div class="effect-item p-2 rounded-lg cursor-pointer transition-all ${y===f?"selected":""}"
                      data-effect="${f}"
                      style="background: ${y===f?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${y===f?"#e07070":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${f}</div>
                    </div>
                  `).join("")}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${y||"点击展开选择"}
                </div>
              `}
              
              <!-- 效果数值（选中效果后始终显示在折叠栏下方） -->
              ${y?`
                <div class="mt-3 pt-3" style="border-top: 2px solid #d4c4a8;">
                  ${y==="属性变化"?`
                    <div class="space-y-2">
                      ${t.targets?.includes("卡牌")?`
                        <div class="mb-1">
                          <div class="font-bold text-sm mb-1" style="color: #8b7355;">来源</div>
                          <div class="flex flex-wrap gap-1">
                            ${(()=>{const f=[{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],v=t.summonSource??"my_hand";return f.map(E=>`
                                <div class="summon-source-btn-2 px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${v===E.key?"selected":""}"
                                  data-source="${E.key}"
                                  style="background: ${v===E.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${v===E.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                  ${E.label}
                                </div>
                              `).join("")})()}
                          </div>
                        </div>
                        <div class="flex items-center justify-between mb-1">
                          <div class="font-bold text-sm" style="color: #8b7355;">属性变化</div>
                          <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;">
                            <input type="checkbox" id="attr-random-checkbox-2" class="cursor-pointer" ${t.isRandom?"checked":""}>
                            <span>随机</span>
                          </label>
                        </div>
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-sm mr-2" style="color: #8b7355;">费用:</label>
                          <input type="number" id="effect-cost-value" value="${t.costValue}" min="0" max="99"
                            class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="cost-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${t.costValue===0?"opacity-50":!t.isCostSet&&t.isCostPositive?"":"opacity-50"}"
                            style="background: ${t.costValue===0?"#999":!t.isCostSet&&t.isCostPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.costValue===0?"#777":!t.isCostSet&&t.isCostPositive?"#4a8a4a":"#aaa"};">
                            +
                          </button>
                          <button id="cost-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${t.costValue===0?"":"opacity-50"}"
                            style="background: ${t.costValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.costValue===0?"#3a7ab0":"#aaa"};">
                            0
                          </button>
                          <button id="cost-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${t.costValue===0?"opacity-50":!t.isCostSet&&!t.isCostPositive?"":"opacity-50"}"
                            style="background: ${t.costValue===0?"#999":!t.isCostSet&&!t.isCostPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.costValue===0?"#777":!t.isCostSet&&!t.isCostPositive?"#a04040":"#aaa"};">
                            -
                          </button>
                          <button id="cost-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${t.costValue===0?"opacity-50":t.isCostSet?"":"opacity-50"}"
                            style="background: ${t.costValue===0?"#999":t.isCostSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.costValue===0?"#777":t.isCostSet?"#b89020":"#aaa"};">
                            =
                          </button>
                        </div>
                      `:""}
                      <div class="flex items-center gap-0">
                        <label class="font-bold text-sm mr-2" style="color: #8b7355;">攻击:</label>
                        <input type="number" id="effect-attack-value" value="${t.attackValue}" min="0" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        <button id="attack-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${t.attackValue===0?"opacity-50":!t.isAttackSet&&t.isAttackPositive?"":"opacity-50"}"
                          style="background: ${t.attackValue===0?"#999":!t.isAttackSet&&t.isAttackPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.attackValue===0?"#777":!t.isAttackSet&&t.isAttackPositive?"#4a8a4a":"#aaa"};">
                          +
                        </button>
                        <button id="attack-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${t.attackValue===0?"":"opacity-50"}"
                          style="background: ${t.attackValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.attackValue===0?"#3a7ab0":"#aaa"};">
                          0
                        </button>
                        <button id="attack-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${t.attackValue===0?"opacity-50":!t.isAttackSet&&!t.isAttackPositive?"":"opacity-50"}"
                          style="background: ${t.attackValue===0?"#999":!t.isAttackSet&&!t.isAttackPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.attackValue===0?"#777":!t.isAttackSet&&!t.isAttackPositive?"#a04040":"#aaa"};">
                          -
                        </button>
                        <button id="attack-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${t.attackValue===0?"opacity-50":t.isAttackSet?"":"opacity-50"}"
                          style="background: ${t.attackValue===0?"#999":t.isAttackSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.attackValue===0?"#777":t.isAttackSet?"#b89020":"#aaa"};">
                          =
                        </button>
                      </div>
                      <div class="flex items-center gap-0">
                        <label class="font-bold text-sm mr-2" style="color: #8b7355;">血量:</label>
                        <input type="number" id="effect-health-value" value="${t.healthValue}" min="0" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        <button id="health-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${t.healthValue===0?"opacity-50":!t.isHealthSet&&t.isHealthPositive?"":"opacity-50"}"
                          style="background: ${t.healthValue===0?"#999":!t.isHealthSet&&t.isHealthPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.healthValue===0?"#777":!t.isHealthSet&&t.isHealthPositive?"#4a8a4a":"#aaa"};">
                          +
                        </button>
                        <button id="health-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${t.healthValue===0?"":"opacity-50"}"
                          style="background: ${t.healthValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.healthValue===0?"#3a7ab0":"#aaa"};">
                          0
                        </button>
                        <button id="health-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${t.healthValue===0?"opacity-50":!t.isHealthSet&&!t.isHealthPositive?"":"opacity-50"}"
                          style="background: ${t.healthValue===0?"#999":!t.isHealthSet&&!t.isHealthPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.healthValue===0?"#777":!t.isHealthSet&&!t.isHealthPositive?"#a04040":"#aaa"};">
                          -
                        </button>
                        <button id="health-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${t.healthValue===0?"opacity-50":t.isHealthSet?"":"opacity-50"}"
                          style="background: ${t.healthValue===0?"#999":t.isHealthSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${t.healthValue===0?"#777":t.isHealthSet?"#b89020":"#aaa"};">
                          =
                        </button>
                      </div>
                    </div>
                  `:""}
                    ${y==="造成伤害"?`
                      <div class="flex items-center gap-2">
                        <label class="font-bold text-sm" style="color: #8b7355;">数值:</label>
                        <input type="number" id="effect-value" value="${t.value}" min="1" max="99"
                          class="w-16 px-2 py-1 rounded-lg outline-none text-center text-sm"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                      </div>
                      <div class="flex items-center gap-2 mt-1">
                        <label class="font-bold text-sm" style="color: #8b7355;">元素:</label>
                        <div class="flex gap-1">
                          <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${t.elementType?"":"selected"}"
                            data-element-type=""
                            style="background: ${t.elementType?"rgba(212, 196, 168, 0.2)":"rgba(212, 196, 168, 0.6)"}; border: 2px solid ${t.elementType?"transparent":"#d4c4a8"};">
                            无
                          </div>
                          <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${t.elementType==="fire"?"selected":""}"
                            data-element-type="fire"
                            style="background: ${t.elementType==="fire"?"rgba(255, 140, 0, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${t.elementType==="fire"?"#ff8c00":"transparent"};">
                            🔥
                          </div>
                          <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${t.elementType==="ice"?"selected":""}"
                            data-element-type="ice"
                            style="background: ${t.elementType==="ice"?"rgba(100, 180, 255, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${t.elementType==="ice"?"#64b4ff":"transparent"};">
                            ❄️
                          </div>
                          <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${t.elementType==="lightning"?"selected":""}"
                            data-element-type="lightning"
                            style="background: ${t.elementType==="lightning"?"rgba(160, 80, 255, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${t.elementType==="lightning"?"#a050ff":"transparent"};">
                            ⚡️
                          </div>
                        </div>
                      </div>
                    `:""}
                    ${["召唤","获得","变化"].includes(y)?`
                    <div class="mt-2">
                      <div class="mb-1">
                        <div class="font-bold text-sm mb-1" style="color: #8b7355;">来源</div>
                        <div class="flex flex-wrap gap-1">
                          ${(()=>{const f=[{key:"derived",label:"衍生卡"},{key:"deck_top",label:"抽牌堆顶"},{key:"discard_top",label:"弃牌堆顶"},{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],v=t.summonSource??"derived";return f.map(E=>`
                              <div class="summon-source-btn-2 px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${v===E.key?"selected":""}"
                                data-source="${E.key}"
                                style="background: ${v===E.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${v===E.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                ${E.label}
                              </div>
                            `).join("")})()}
                        </div>
                      </div>
                      <div class="flex items-center justify-between mb-1">
                        <div class="font-bold text-sm" style="color: #8b7355;">${y==="召唤"?"召唤卡牌":y==="获得"?"获得卡牌":"变化为"}</div>
                        <div class="flex items-center gap-2">
                          <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;">
                            <input type="checkbox" id="summon-random-checkbox-2" class="cursor-pointer" ${t.isRandom?"checked":""}>
                            <span>随机</span>
                          </label>
                          ${y==="召唤"||y==="获得"?`
                          <div class="flex items-center gap-1">
                            <span class="text-xs" style="color: #8b7355;">数量</span>
                            <input type="number" id="summon-count-input-2" value="${t.value||1}" min="1" max="99"
                              class="w-12 h-6 text-center text-xs border rounded"
                              style="background: rgba(212, 196, 168, 0.2); border-color: #d4c4a8; color: #5a4a3a;">
                          </div>
                          `:""}
                        </div>
                      </div>
                      ${(t.summonSource??"derived")==="derived"?`
                      <div class="flex flex-col gap-1 max-h-24 overflow-y-auto">
                        ${(()=>{const f=t.isRandom?t.summonedCardIndices??[]:t.summonedCardIndex!==void 0?[t.summonedCardIndex]:[];return this.editingCards.map((E,S)=>{if((y==="变化"||y==="召唤")&&E.type==="spell"||y==="变化"&&S===this.currentCardIndex||y==="召唤"&&p.includes("打出时")&&S===this.currentCardIndex)return null;const T=f.includes(S);return`
                              <div class="summon-card-item px-2 py-1 rounded-lg cursor-pointer transition-all text-sm ${T?"selected":""}"
                                data-summon-index="${S}"
                                style="background: ${T?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${T?"#6fa8dc":"#d4c4a8"};">
                                ${E.name||"未命名"}
                              </div>
                            `}).filter(Boolean).join("")})()}
                      </div>
                      `:""}
                    </div>
                  `:""}
                  ${y==="给予词条"?`
                    <div class="space-y-2">
                      <div class="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                        ${Object.values(Ee).filter(f=>f.name!=="准备").map(f=>{const v=t.grantedKeywordName===f.name,E=["🔥","❄️","⚡️"].includes(f.name);return`
                            <div class="grant-keyword-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${v?"selected":""}"
                              data-grant-keyword="${f.name}"
                              style="background: ${v?"rgba(139, 115, 85, 0.35)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${v?"#8b7355":"#d4c4a8"}; font-size: ${E?"14px":"11px"};">
                              ${f.name}
                            </div>
                          `}).join("")}
                      </div>
                      ${t.grantedKeywordName==="护甲"?`
                        <div class="flex items-center gap-2">
                          <label class="font-bold text-sm" style="color: #8b7355;">护甲值:</label>
                          <input type="number" id="grant-keyword-value" value="${t.grantedKeywordValue??1}" min="1" max="99"
                            class="w-16 px-2 py-1 rounded-lg outline-none text-center text-sm"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        </div>
                      `:""}
                    </div>
                  `:""}
                  ${["属性变化","造成伤害","召唤","获得","变化","给予词条"].includes(y)?"":`
                    <div class="flex items-center gap-2">
                      <label class="font-bold text-sm" style="color: #8b7355;">数值:</label>
                      <input type="number" id="effect-value" value="${t.value}" min="1" max="99"
                        class="w-16 px-2 py-1 rounded-lg outline-none text-center text-sm"
                        style="border: 2px solid #d4c4a8; background: #faf8f5;">
                    </div>
                  `}
                  <button id="clear-effect-btn" class="w-full mt-2 py-1 rounded-lg font-bold text-xs"
                    style="background: #ccc; color: #5a4a3a; border: 2px solid #aaa;">
                    清除效果
                  </button>
                </div>
              `:""}
              </div>
            `:""}
            `:""}
            </div>
            `}
            
            ${this.isDrawingMode?`
            <!-- 绘制工具面板 -->
            <div class="absolute inset-0 z-10 flex flex-col items-center justify-start gap-4 p-4 pt-6" style="background: url('/images/wood_texture_seamless.png') center/cover no-repeat;">
              <button id="drawing-brush-btn" class="w-14 h-14 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all flex items-center justify-center ${this.drawingTool==="brush"?"ring-2":""}"
                style="background: ${this.drawingTool==="brush"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.drawingTool==="brush"?"#fff":"#5a4a3a"}; border: 2px solid ${this.drawingTool==="brush"?"#4a8a4a":"#d4c4a8"};">
                🖌️
              </button>
              <button id="drawing-eraser-btn" class="w-14 h-14 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all flex items-center justify-center ${this.drawingTool==="eraser"?"ring-2":""}"
                style="background: ${this.drawingTool==="eraser"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.drawingTool==="eraser"?"#fff":"#5a4a3a"}; border: 2px solid ${this.drawingTool==="eraser"?"#4a8a4a":"#d4c4a8"};">
                🧽
              </button>
              <button id="drawing-clear-btn" class="w-14 h-14 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all flex items-center justify-center"
                style="background: rgba(212, 196, 168, 0.5); color: #5a4a3a; border: 2px solid #d4c4a8;"
                title="清空">
                🗑
              </button>
              <div class="flex flex-col gap-1 mt-1">
                <button id="brush-thin-btn" class="w-14 h-9 rounded-lg font-bold text-sm shadow transform hover:scale-105 transition-all ${this.brushSizePreset==="thin"?"ring-2":""}"
                  style="background: ${this.brushSizePreset==="thin"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.brushSizePreset==="thin"?"#fff":"#5a4a3a"}; border: 2px solid ${this.brushSizePreset==="thin"?"#4a8a4a":"#d4c4a8"};">
                  细
                </button>
                <button id="brush-medium-btn" class="w-14 h-9 rounded-lg font-bold text-sm shadow transform hover:scale-105 transition-all ${this.brushSizePreset==="medium"?"ring-2":""}"
                  style="background: ${this.brushSizePreset==="medium"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.brushSizePreset==="medium"?"#fff":"#5a4a3a"}; border: 2px solid ${this.brushSizePreset==="medium"?"#4a8a4a":"#d4c4a8"};">
                  中
                </button>
                <button id="brush-thick-btn" class="w-14 h-9 rounded-lg font-bold text-sm shadow transform hover:scale-105 transition-all ${this.brushSizePreset==="thick"?"ring-2":""}"
                  style="background: ${this.brushSizePreset==="thick"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${this.brushSizePreset==="thick"?"#fff":"#5a4a3a"}; border: 2px solid ${this.brushSizePreset==="thick"?"#4a8a4a":"#d4c4a8"};">
                  粗
                </button>
              </div>
            </div>
            `:""}
          </div>
          `}
          
          <!-- 中间卡牌预览 -->
          <div class="${this.isPortraitMode?"w-full flex flex-col items-center flex-1":"flex-1 flex flex-col items-center"}">
            
            <!-- 卡牌预览容器 -->
            ${(()=>{this.currentCard.type;const f=R=>{const _=this.currentCard,B=_.type==="spell"?"#9b8cb8":"#c4b49c",$=5,N=16,J=8,U="base",ne=38,Z=19,se=()=>{const C=(_.effects||[]).filter(P=>P.effect);return C.length===0?"选择法术效果":C.map(P=>{const L=P.isOpponent?"对手":"",V=this.getMomentsText(P.moment),Q=P.targets||[],oe=this.mergeTargets(Q);let ie=oe.length>0&&!oe.includes("无需目标")&&!oe.includes("卡牌")?"对"+oe.join("、"):"";P.isRandomTarget&&ie&&(ie+="中的随机一个");const F=P.isRandomTarget&&P.randomTargetTimes&&P.randomTargetTimes>1?`${P.randomTargetTimes}次`:"";let ee="";P.conditionType&&P.conditionType!=="guaranteed"&&(ee=this.getConditionText?this.getConditionText(P):"");let de="";if(P.triggerNumbers&&P.triggerNumbers.length>0&&([1,2,3,4,5,6].every(k=>P.triggerNumbers.includes(k))||(de=`🎲${P.triggerNumbers.length}/6`)),P.effect==="造成伤害"){const z=P.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[P.elementType]||"";return ee+L+V+ie+"造成"+P.value+"点"+z+"伤害"+de+F}if(P.effect==="抽牌")return ee+L+V+"抽"+P.value+"张牌"+de;if(P.effect==="弃牌")return ee+L+V+"弃"+P.value+"张牌"+de;if(P.effect==="属性变化"){const z=P.isAttackSet?"=":P.isAttackPositive?"+":"-",W=P.isHealthSet?"=":P.isHealthPositive?"+":"-",k=P.attackValue||0,j=P.healthValue||0;return k===0&&j!==0?ee+L+V+ie+W+j+"血量"+de+F:j===0&&k!==0?ee+L+V+ie+z+k+"攻击"+de+F:ee+L+V+ie+z+k+"/"+W+j+de+F}if(P.effect==="给予印记")return ee+L+V+ie+"给予"+P.value+"点印记"+de+F;if(P.effect==="治愈")return ee+L+V+ie+"治愈"+P.value+"点生命"+de+F;if(P.effect==="获得能量")return ee+L+V+"获得"+P.value+"点能量"+de;if(P.effect==="失去能量")return ee+L+V+"失去"+P.value+"点能量"+de;if(P.effect==="召唤"){const z=P.summonSource||"derived";if(z!=="derived"){const H=Ie(z,!!P.isRandom),D=P.isRandom?"中的随机一个":"";return ee+L+V+"召唤"+(P.value||1)+"张"+H+D+de}if(P.isRandom&&P.summonedCardIndices&&P.summonedCardIndices.length>1){const H=P.summonedCardIndices.map(D=>this.editingCards[D]?.name||"衍生随从");return ee+L+V+"召唤"+(P.value||1)+"张"+H.join("、")+"中的随机一个"+de}const W=P.summonedCardIndex??0,j=this.editingCards[W]?.name||"衍生随从";return ee+L+V+"召唤"+(P.value||1)+"张"+j+de}if(P.effect==="获得"){const z=P.summonSource||"derived";if(z!=="derived"){const H=Ie(z,!!P.isRandom),D=P.isRandom?"中的随机一个":"";return ee+L+V+"获得"+(P.value||1)+"张"+H+D+de}if(P.isRandom&&P.summonedCardIndices&&P.summonedCardIndices.length>1){const H=P.summonedCardIndices.map(D=>this.editingCards[D]?.name||"衍生牌");return ee+L+V+"获得"+(P.value||1)+"张"+H.join("、")+"中的随机一个"+de}const W=P.summonedCardIndex??0,j=this.editingCards[W]?.name||"衍生牌";return ee+L+V+"获得"+(P.value||1)+"张"+j+de}if(P.effect==="变化"){const z=P.summonSource||"derived";if(z!=="derived"){const H=Ie(z,!!P.isRandom),D=P.isRandom?"中的随机一个":"";return ee+L+V+"变化为"+H+D+de}if(P.isRandom&&P.summonedCardIndices&&P.summonedCardIndices.length>1){const H=P.summonedCardIndices.map(D=>this.editingCards[D]?.name||"衍生随从");return ee+L+V+"变化为"+H.join("、")+"中的随机一个"+de}const W=P.summonedCardIndex??0,j=this.editingCards[W]?.name||"衍生随从";return ee+L+V+"变化为"+j+de}return ee+""+de}).filter(Boolean).join("；")||"选择法术效果"};return`
                  <div class="card-preview mb-4" 
                    id="main-card-preview"
                    style="position: relative; ${_.imageData?`background: url(${_.imageData}) center/cover no-repeat;`:"background: linear-gradient(135deg, #fff 0%, #f8f4ec 100%);"} border: ${$}px solid ${B}; border-radius: ${N}px; padding: ${J}px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2); ">
                  <div class="h-full flex flex-col">
                    <!-- 费用和名称 -->
                    <div class="flex items-center gap-2 mb-2">
                      <div class="card-cost-diamond"><span>${_.cost}</span></div>
                      <div class="card-name-text flex-1 text-center font-bold text-${U}" style="color: #5a4a3a; word-break: break-all;">${_.name||"未命名"}</div>
                    </div>
                    
                    ${_.type==="spell"?`
                    <!-- 法术效果描述 -->
                    <div class="flex-1 flex items-center justify-center text-center text-sm px-2" style="color: #ffffff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; line-height: 1.4;">
                      ${se()}
                    </div>
                    `:`
                    <!-- 随从效果描述（先渲染，flex-1 占据上半部分空间） -->
                    <div id="minion-effect-text" class="text-center text-xs flex-1 flex items-center justify-center px-1" style="color: #6a5a3a; line-height: 1.3;"></div>

                    <!-- 随从词条（在技能下方，即中线位置） -->
                    ${_.keywords&&_.keywords.length>0?`
                      <div class="flex flex-wrap gap-1 justify-center mb-1">
                        ${_.keywords.map(Y=>{const C=Y.name==="护甲"?Y.value??_.armorValue:"";return'<span class="keyword-tag" style="font-size: 9px; padding: 1px 4px; border-radius: 3px;">'+Y.name+C+"</span>"}).join("")}
                      </div>
                    `:""}

                    <!-- 攻击/生命 -->
                    <div class="flex justify-between mt-auto">
                      <div class="card-attack-text" style="width: ${ne}px; height: ${ne}px; background-image: url('/images/icon_attack.png'); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: ${Z}px; filter: drop-shadow(0 0 2px rgba(0,0,0,0.8)) drop-shadow(0 0 5px rgba(0,0,0,0.4)); text-shadow: 0 0 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.5);">${_.attack}</div>
                      <div class="card-health-text" style="width: ${ne}px; height: ${ne}px; background-image: url('/images/icon_health.png'); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: ${Z}px; filter: drop-shadow(0 0 2px rgba(0,0,0,0.8)) drop-shadow(0 0 5px rgba(0,0,0,0.4)); text-shadow: 0 0 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.5);">${_.health}</div>
                    </div>
                    `}
                  </div>
                  ${this.isDrawingMode?`
                  <canvas id="card-drawing-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 20; cursor: none;"></canvas>
                  `:""}
                </div>
                `},v=this.editingCards.length>1,E='<button id="prev-card-btn" class="preview-arrow prev flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg" style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 2px solid #a08060; box-shadow: 0 2px 8px rgba(160, 128, 96, 0.5); z-index: 10;">◀</button>',S='<button id="next-card-btn" class="preview-arrow next flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg" style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 2px solid #a08060; box-shadow: 0 2px 8px rgba(160, 128, 96, 0.5); z-index: 10;">▶</button>',T='<div class="flex-shrink-0 w-10"></div>',A=v?'<div class="text-center text-xs font-bold mt-1" style="color: white; text-shadow: 0 0 3px black;">'+(this.currentCardIndex+1)+" / "+this.editingCards.length+"</div>":"";return'<div class="flex items-center justify-center gap-2 mb-4">'+(v?E:T)+'<div class="flex flex-col items-center">'+f()+A+"</div>"+(v?S:T)+"</div>"})()}

            ${this.isDrawingMode?`
            <!-- 画笔色块 -->
            <div class="flex justify-center gap-1.5 mb-2" style="background: transparent;">
              ${this.COLORS.map((f,v)=>`
                <button id="color-swatch-${v}" class="w-7 h-7 rounded-sm transition-all transform hover:scale-110"
                  style="background: ${f}; border: 2px solid ${v===this.currentColorIndex?"#ffffff":"transparent"}; cursor: pointer;"
                  title="${["红","橙","黄","绿","青","蓝","紫","黑"][v]}"></button>
              `).join("")}
            </div>
            `:""}
            
            <!-- 输入区域 -->
            <div class="w-full max-w-sm space-y-3 p-4 rounded-2xl" style="display: ${this.isDrawingMode?"none":"block"}; background: rgba(255, 255, 255, 0.8); border: 3px solid #d4c4a8;">
              <div class="flex items-center gap-3">
                <label class="w-16 font-bold text-sm" style="color: #5a4a3a;">名称:</label>
                <input type="text" id="card-name" value="${this.currentCard.name}" placeholder="输入卡牌名称"
                  class="flex-1 px-3 py-2 rounded-lg outline-none text-sm"
                  style="border: 2px solid #d4c4a8; background: #faf8f5;">
              </div>
              <div class="flex items-center gap-3">
                <label class="w-16 font-bold text-sm" style="color: #5a4a3a;">费用:</label>
                <input type="number" id="card-cost" value="${this.currentCard.cost}" min="0" max="20"
                  class="w-16 px-3 py-2 rounded-lg outline-none text-center text-sm"
                  style="border: 2px solid #d4c4a8; background: #faf8f5;">
              </div>
              ${this.currentCard.type==="minion"?`
              <div class="flex items-center gap-3">
                <label class="w-16 font-bold text-sm" style="color: #5a4a3a;">攻击:</label>
                <input type="number" id="card-attack" value="${this.currentCard.attack}" min="0" max="99"
                  class="w-16 px-3 py-2 rounded-lg outline-none text-center text-sm"
                  style="border: 2px solid #d4c4a8; background: #faf8f5;">
              </div>
              <div class="flex items-center gap-3">
                <label class="w-16 font-bold text-sm" style="color: #5a4a3a;">生命值:</label>
                <input type="number" id="card-health" value="${this.currentCard.health}" min="1" max="99"
                  class="w-16 px-3 py-2 rounded-lg outline-none text-center text-sm"
                  style="border: 2px solid #d4c4a8; background: #faf8f5;">
              </div>
              ${s?`
              <div class="flex items-center gap-3">
                <label class="w-16 font-bold text-sm" style="color: #5a4a3a;">护甲值:</label>
                <input type="number" id="card-armor" value="${this.currentCard.armorValue}" min="1" max="99"
                  class="w-16 px-3 py-2 rounded-lg outline-none text-center text-sm"
                  style="border: 2px solid #d4c4a8; background: #faf8f5;">
              </div>
              `:""}
              ${this.currentCard.keywords.some(f=>f.name==="准备")?`
              <div class="flex items-center gap-3">
                <label class="w-16 font-bold text-sm" style="color: #5a4a3a;">准备值:</label>
                <input type="number" id="card-preparation" value="${this.currentCard.preparationValue}" min="1" max="99"
                  class="w-16 px-3 py-2 rounded-lg outline-none text-center text-sm"
                  style="border: 2px solid #d4c4a8; background: #faf8f5;">
              </div>
              `:""}
              `:""}
              
              <!-- 清空一切按钮 -->
              <button id="reset-card-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm mt-2"
                style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 2px solid #a08060;">
                🗑️ 清空一切
              </button>
            </div>
            
            ${this.isPortraitMode?`
            <!-- 竖屏模式：操作区域移到下方 -->
            <div class="w-full p-3 rounded-2xl shadow-xl mt-3" style="background: rgba(255, 255, 255, 0.9); border: 4px solid #d4c4a8;">
              <div class="flex flex-wrap gap-2 justify-center">
                <button id="add-to-deck-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                  style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;">
                  ${this.isEditMode?"💾 保存":"➕ 加入卡包"}
                </button>
                <button id="switch-to-hero-editor-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                  style="background: linear-gradient(135deg, #c09060 0%, #b08050 100%); color: #fff; border: 3px solid #906830;">
                  🖋️ 编辑英雄牌
                </button>
                <button id="draw-image-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                  style="background: linear-gradient(135deg, #c09060 0%, #b08050 100%); color: #fff; border: 3px solid #906830;">
                  ${this.isDrawingMode?"💾 保存并返回":"🖌️ 绘制卡图"}
                </button>
                <button id="import-image-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                  style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;">
                  🖼️ 导入卡图
                </button>
                <!-- 导入模式选项 -->
                <div class="flex gap-3 items-center text-sm font-bold" style="color: #5a4a3a;">
                  <label class="flex items-center gap-1 cursor-pointer">
                    <input type="checkbox" id="import-mode-template" class="w-4 h-4">
                    <span>使用模板</span>
                  </label>
                  <label class="flex items-center gap-1 cursor-pointer">
                    <input type="checkbox" id="import-mode-full" class="w-4 h-4" checked>
                    <span>全面卡图</span>
                  </label>
                </div>
                <div class="flex gap-2">
                  <button id="import-code-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                    style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;">
                    📥 导入文件
                  </button>
                  <button id="export-code-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                    style="background: linear-gradient(135deg, #9b8cb8 0%, #7a6b99 100%); color: #fff; border: 3px solid #6a5b89;">
                    📤 导出文件
                  </button>
                </div>
              </div>
              <div id="import-output" class="hidden mt-2 p-2 rounded-lg" style="background: #f5f0e6; border: 2px solid #d4c4a8;">
                <textarea id="import-text" class="w-full h-12 p-2 rounded text-xs" style="background: #fff; border: 1px solid #d4c4a8; resize: none;" placeholder="粘贴卡牌代码..."></textarea>
                <button id="import-confirm-btn" class="mt-1 w-full px-2 py-1 text-xs font-bold rounded-lg" style="background: #7cb87c; color: #fff; border: 2px solid #5a9a5a;">
                  ✓ 导入
                </button>
              </div>
              <div id="export-output" class="hidden mt-2 p-2 rounded-lg" style="background: #f5f0e6; border: 2px solid #d4c4a8;">
                <textarea id="export-text" class="w-full h-12 p-2 rounded text-xs" style="background: #fff; border: 1px solid #d4c4a8; resize: none;" readonly></textarea>
                <button id="copy-btn" class="mt-1 w-full px-2 py-1 text-xs font-bold rounded-lg" style="background: #6fa8dc; color: #fff; border: 2px solid #3d85c6;">
                  📋 复制
                </button>
              </div>
            </div>
            `:""}
          </div>
          
          ${this.isPortraitMode?"":`
          <!-- 右侧操作区域 -->
          <div class="w-56 p-4 rounded-2xl shadow-xl self-center" style="background: rgba(255, 255, 255, 0.9); border: 4px solid #d4c4a8;">
            <h3 class="text-xl font-bold mb-3" style="color: #8b7355;">${this.isEditMode?"编辑卡牌":"创建卡牌"}</h3>
            
            <div class="space-y-3">
              <button id="add-to-deck-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;">
                ${this.isEditMode?"💾 保存修改":"➕ 加入卡包"}
              </button>

              <button id="switch-to-hero-editor-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                style="background: linear-gradient(135deg, #c09060 0%, #b08050 100%); color: #fff; border: 3px solid #906830;">
                🖋️ 编辑英雄牌
              </button>

              <hr class="my-3" style="border-color: #d4c4a8;">

              <button id="draw-image-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                style="background: linear-gradient(135deg, #c09060 0%, #b08050 100%); color: #fff; border: 3px solid #906830;">
                ${this.isDrawingMode?"💾 保存并返回":"🖌️ 绘制卡图"}
              </button>

              <button id="import-image-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a; pointer-events: auto;">
                🖼️ 导入卡图
              </button>

              <!-- 导入模式选项 -->
              <div class="flex gap-3 items-center justify-center text-sm font-bold" style="color: #5a4a3a;">
                <label class="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" id="import-mode-template" class="w-4 h-4">
                  <span>使用模板</span>
                </label>
                <label class="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" id="import-mode-full" class="w-4 h-4" checked>
                  <span>全面卡图</span>
                </label>
              </div>

              <hr style="border-color: #d4c4a8;">

              <button id="import-code-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;">
                📥 导入卡牌文件
              </button>

              <div id="import-output" class="hidden p-2 rounded-lg" style="background: #f5f0e6; border: 2px solid #d4c4a8;">
                <textarea id="import-text" class="w-full h-16 p-2 rounded text-xs" style="background: #fff; border: 1px solid #d4c4a8; resize: none;" placeholder="粘贴卡牌代码..."></textarea>
                <button id="import-confirm-btn" class="mt-2 w-full px-2 py-1 text-xs font-bold rounded-lg" style="background: #7cb87c; color: #fff; border: 2px solid #5a9a5a;">
                  ✓ 导入
                </button>
              </div>

              <button id="export-code-btn" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
                style="background: linear-gradient(135deg, #9b8cb8 0%, #7a6b99 100%); color: #fff; border: 3px solid #6a5b89;">
                📤 导出卡牌文件
              </button>

              <div id="export-output" class="hidden p-2 rounded-lg" style="background: #f5f0e6; border: 2px solid #d4c4a8;">
                <textarea id="export-text" class="w-full h-16 p-2 rounded text-xs" style="background: #fff; border: 1px solid #d4c4a8; resize: none;" readonly></textarea>
                <button id="copy-btn" class="mt-2 w-full px-2 py-1 text-xs font-bold rounded-lg" style="background: #6fa8dc; color: #fff; border: 2px solid #3d85c6;">
                  📋 复制
                </button>
              </div>
            </div>

            <hr class="my-3" style="border-color: #d4c4a8;">

            <button id="${this.isEditMode?"back-to-manager-btn":"back-menu-btn"}" class="w-full px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all text-sm"
              style="background: linear-gradient(135deg, ${this.isEditMode?"#6fa8dc":"#c0a080"} 0%, ${this.isEditMode?"#4a90d9":"#b09070"} 100%); color: #fff; border: 3px solid ${this.isEditMode?"#3d85c6":"#a08060"};">
              ${this.isEditMode?"← 返回卡包管理":"←返回菜单"}
            </button>

            <div id="add-success" class="hidden mt-3 mb-2 p-2 rounded-lg text-center font-bold text-sm" style="background: rgba(124, 184, 124, 0.3); color: #5a4a3a; border: 2px solid #7cb87c;">
              ${this.isEditMode?"✓ 修改已保存！":"✓ 已加入卡包！"}
            </div>
            <div id="export-success" class="hidden mt-3 mb-2 p-2 rounded-lg text-center font-bold text-sm" style="background: rgba(124, 184, 124, 0.3); color: #5a4a3a; border: 2px solid #7cb87c;">
              ✓ 导出成功！
            </div>
          </div>
          `}
        </div>
      </div>

      <!-- 裁剪卡图模态框 -->
      <div id="crop-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:99999;display:none;justify-content:center;align-items:center;flex-direction:column;">
        <div style="display:flex;align-items:center;gap:12px;">
          <div id="crop-eraser-panel" style="display:none;flex-direction:column;align-items:center;gap:6px;padding:8px;background:rgba(0,0,0,0.5);border-radius:8px;">
            <button id="crop-eraser-btn" style="width:36px;height:36px;border-radius:6px;font-size:18px;cursor:pointer;border:2px solid #888;background:#555;color:#fff;display:flex;align-items:center;justify-content:center;">🧽</button>
            <div style="display:flex;flex-direction:column;gap:4px;">
              <button id="crop-eraser-thin-btn" style="padding:4px 8px;border-radius:4px;font-size:12px;cursor:pointer;border:2px solid #666;background:#444;color:#aaa;">细</button>
              <button id="crop-eraser-medium-btn" style="padding:4px 8px;border-radius:4px;font-size:12px;cursor:pointer;border:2px solid #4a9;background:#2a6;color:#fff;">中</button>
              <button id="crop-eraser-thick-btn" style="padding:4px 8px;border-radius:4px;font-size:12px;cursor:pointer;border:2px solid #666;background:#444;color:#aaa;">粗</button>
            </div>
          </div>
          <canvas id="crop-canvas" style="border-radius:8px;cursor:grab;"></canvas>
        </div>
        <div style="margin-top:12px;display:flex;gap:12px;justify-content:center;z-index:10;">
          <button id="crop-hcenter-btn" style="padding:8px 24px;border-radius:8px;font-size:14px;font-weight:bold;cursor:pointer;border:2px solid #888;background:#444;color:#ddd;">左右对齐</button>
          <button id="crop-vcenter-btn" style="padding:8px 24px;border-radius:8px;font-size:14px;font-weight:bold;cursor:pointer;border:2px solid #888;background:#444;color:#ddd;">上下对齐</button>
        </div>
        <div style="margin-top:8px;display:flex;gap:12px;justify-content:center;z-index:10;">
          <button id="crop-cover-btn" style="padding:8px 24px;border-radius:8px;font-size:14px;font-weight:bold;cursor:pointer;border:2px solid #888;background:#444;color:#ddd;">Cover</button>
          <button id="crop-contain-btn" style="padding:8px 24px;border-radius:8px;font-size:14px;font-weight:bold;cursor:pointer;border:2px solid #888;background:#444;color:#ddd;">Contain</button>
        </div>
        <div style="margin-top:12px;display:flex;gap:16px;justify-content:center;z-index:10;">
          <button id="crop-cancel-btn" style="padding:12px 36px;border-radius:8px;font-size:15px;font-weight:bold;cursor:pointer;border:2px solid #666;background:#333;color:#ddd;">取消</button>
          <button id="crop-confirm-btn" style="padding:12px 36px;border-radius:8px;font-size:15px;font-weight:bold;cursor:pointer;border:none;background:#5a9a5a;color:#fff;">完成</button>
        </div>
      </div>
    `,this.attachCardCreatorEvents(),this.updateEffectDescription(),this.pendingScrollRestoration){const{selector:f,scrollTop:v,containerIndex:E,leftPanelScrollTop:S,portraitScrollTop:T}=this.pendingScrollRestoration,A=document.querySelectorAll(f),R=A[E??0]||A[0];if(R&&(R.scrollTop=v),S!==void 0){const _=document.querySelector(".editor-left-panel-scroll");_&&(_.scrollTop=S)}if(T!==void 0){const _=document.querySelector(".portrait-side-panel-scroll");_&&(_.scrollTop=T)}this.pendingScrollRestoration=null}}updateCardPreview(){((s,t,r)=>{const i=document.getElementById(s);if(!i||!t)return;const n=i.querySelector(".card-name-text");if(n){const c=t.name!==void 0&&t.name!==null&&t.name!==""?t.name:r;n.textContent=c}const a=i.querySelector(".card-cost-diamond span");a&&(a.textContent=String(t.cost));const o=i.querySelector(".card-attack-text");o&&(o.textContent=String(t.attack||0));const l=i.querySelector(".card-health-text");l&&(l.textContent=String(t.health||0));const d=i.querySelector('.flex.flex-wrap[class*="gap-"]');if(d&&t.type==="minion"){const c=t.keywords||[];c.length>0?(d.innerHTML=c.map(m=>{const h=m.name==="护甲"?m.value??t.armorValue??1:m.name==="准备"?m.value??1:"";return`<span style="font-size: 9px; padding: 1px 4px; border-radius: 3px; background: rgba(212, 180, 140, 0.6); color: #5a4a3a;">${m.name}${h}</span>`}).join(""),d.style.display="flex"):d.style.display="none"}if(t.type==="spell"){const c=i.querySelector(".flex-1.flex.items-center.justify-center.text-center");if(c){const h=(t.effects||[]).filter(u=>u.effect);if(h.length===0)c.textContent="选择法术效果";else{const u=h.map(p=>{const b=p.targets||[],g=this.mergeTargets(b);let y=g.length>0&&!g.includes("无需目标")&&!g.includes("卡牌")?`对${g.join("、")}`:"";p.isRandomTarget&&y&&(y+="中的随机一个");const x=p.isRandomTarget&&p.randomTargetTimes&&p.randomTargetTimes>1?`${p.randomTargetTimes}次`:"",w=p.conditionType&&p.conditionType!=="guaranteed"?this.getConditionText(p):"";if(p.effect==="造成伤害"){const f=p.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[p.elementType]||"";return w+`${y}造成${p.value}点${f}伤害${x}`}if(p.effect==="抽牌")return w+`抽${p.value}张牌`;if(p.effect==="弃牌")return w+`弃${p.value}张牌`;if(p.effect==="属性变化"){if(g.includes("卡牌")){const T=Ie(p.summonSource||"my_hand",!!p.isRandom),A=p.isRandom?"中的随机一个":"",R=[];if((p.costValue||0)!==0){const _=p.isCostSet?"=":p.isCostPositive?"+":"-",B=p.costValue||0;R.push(`${_}${B}费用`)}if((p.attackValue||0)!==0){const _=p.isAttackSet?"=":p.isAttackPositive?"+":"-";R.push(`${_}${p.attackValue}攻击`)}if((p.healthValue||0)!==0){const _=p.isHealthSet?"=":p.isHealthPositive?"+":"-";R.push(`${_}${p.healthValue}血量`)}return R.length===0?w+`使${T}${A}无变化`:w+`使${T}${A}${R.join("/")}`}const f=p.isAttackSet?"=":p.isAttackPositive?"+":"-",v=p.isHealthSet?"=":p.isHealthPositive?"+":"-",E=p.attackValue||0,S=p.healthValue||0;return E===0&&S!==0?w+`${y}${v}${S}血量${x}`:S===0&&E!==0?w+`${y}${f}${E}攻击${x}`:w+`${y}${f}${E}/${v}${S}${x}`}if(p.effect==="给予印记")return w+`${y}给予${p.value}点印记${x}`;if(p.effect==="治愈")return w+`${y}治愈${p.value}点生命${x}`;if(p.effect==="获得能量")return w+`获得${p.value}点能量`;if(p.effect==="失去能量")return w+`失去${p.value}点能量`;if(p.effect==="召唤"){const f=p.summonSource||"derived";if(f!=="derived"){const T=Ie(f,!!p.isRandom),A=p.isRandom?"中的随机一个":"";return w+`召唤${p.value||1}张${T}${A}`}if(p.isRandom&&p.summonedCardIndices&&p.summonedCardIndices.length>1){const T=p.summonedCardIndices.map(A=>this.editingCards[A]?.name||"衍生随从");return w+`召唤${p.value||1}张${T.join("、")}中的随机一个`}const v=p.summonedCardIndex??0,S=this.editingCards[v]?.name||"衍生随从";return w+`召唤${p.value||1}张${S}`}if(p.effect==="获得"){const f=p.summonSource||"derived";if(f!=="derived"){const T=Ie(f,!!p.isRandom),A=p.isRandom?"中的随机一个":"";return w+`获得${p.value||1}张${T}${A}`}if(p.isRandom&&p.summonedCardIndices&&p.summonedCardIndices.length>1){const T=p.summonedCardIndices.map(A=>this.editingCards[A]?.name||"衍生牌");return w+`获得${p.value||1}张${T.join("、")}中的随机一个`}const v=p.summonedCardIndex??0,S=this.editingCards[v]?.name||"衍生牌";return w+`获得${p.value||1}张${S}`}if(p.effect==="变化"){const f=p.summonSource||"derived";if(f!=="derived"){const T=Ie(f,!!p.isRandom),A=p.isRandom?"中的随机一个":"";return w+`变化为${T}${A}`}if(p.isRandom&&p.summonedCardIndices&&p.summonedCardIndices.length>1){const T=p.summonedCardIndices.map(A=>this.editingCards[A]?.name||"衍生随从");return w+`变化为${T.join("、")}中的随机一个`}const v=p.summonedCardIndex??0,S=this.editingCards[v]?.name||"衍生随从";return w+`变化为${S}`}return""}).filter(Boolean);c.textContent=u.join("；")||"选择法术效果"}}}})("main-card-preview",this.currentCard,"未命名"),this.updateEffectDescription()}updateEffectDescription(){if(this.currentCard.type==="spell")return;let e=document.getElementById("minion-effect-text");if(e||(e=document.getElementById("minion-effect-text-small")),!e)return;const t=(this.currentCard.effects||[]).filter(r=>(r.moment||r.moments&&r.moments.length>0)&&r.effect);if(t.length===0)e.textContent="";else{const r=new Map;for(const n of t){const a=n.moments||(n.moment?[n.moment]:[]),o=a.map(c=>$e[c]||"").join(""),l=this.getEffectTextWithoutMoment(n),d=a.sort().join("|");r.has(d)||r.set(d,{icon:o,texts:[]}),r.get(d).texts.push(l)}const i=Array.from(r.values()).map(n=>`${n.icon}${n.texts.join("，并")}`);e.textContent=i.join("；")}}normalizeMoments(e){return e?Array.isArray(e)?e:[e]:[]}getMomentsText(e){const s=this.normalizeMoments(e);return s.length===0||s.length===1&&s[0]==="打出时"?"":s.filter(t=>t!=="打出时").map(t=>$e[t]||"").join("")}momentsInclude(e,s){return this.normalizeMoments(e).includes(s)}mergeTargets(e){const s=new Set(e),t=s.has("自己");s.delete("自己");const r=s.has("我方所有随从"),i=s.has("敌方所有随从"),n=s.has("我方英雄"),a=s.has("敌方英雄");if(r&&i&&n&&a){const l=["所有目标"];return t&&l.unshift("自己"),l}n&&a&&!r&&!i&&(s.delete("我方英雄"),s.delete("敌方英雄"),s.add("双方英雄")),r&&i&&(s.delete("我方所有随从"),s.delete("敌方所有随从"),s.add("所有随从")),s.has("我方英雄")&&s.has("我方所有随从")&&(s.delete("我方英雄"),s.delete("我方所有随从"),s.add("我方所有目标")),s.has("敌方英雄")&&s.has("敌方所有随从")&&(s.delete("敌方英雄"),s.delete("敌方所有随从"),s.add("敌方所有目标"));const o=Array.from(s);return t&&o.unshift("自己"),o}getEffectTextWithoutMoment(e,s){const t=e.targets||[],r=this.mergeTargets(t);let i=r.length>0&&!r.includes("无需目标")&&!r.includes("卡牌")?`对${r.join("、")}`:"";e.isRandomTarget&&i&&(i+="中的随机一个");let n="";if(e.effect==="造成伤害"){const d=e.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[e.elementType]||"";n=`造成${e.value||0}点${d}伤害`}else if(e.effect==="增加伤害")n=`增加${e.value||0}点攻击伤害`;else if(e.effect==="抽牌")n=`抽${e.value||0}张牌`;else if(e.effect==="弃牌")n=`弃${e.value||0}张牌`;else if(e.effect==="属性变化"){const d=e.isAttackSet?"=":e.isAttackPositive?"+":"-",c=e.isHealthSet?"=":e.isHealthPositive?"+":"-",m=e.isCostSet?"=":e.isCostPositive?"+":"-",h=e.attackValue||0,u=e.healthValue||0,p=e.costValue||0;if(t.includes("卡牌")){const b=Ie(e.summonSource||"my_hand",!!e.isRandom),g=e.isRandom?"中的随机一个":"";let y=[];p!==0&&y.push(`${m}${p}费用`),h!==0&&y.push(`${d}${h}攻击`),u!==0&&y.push(`${c}${u}血量`),y.length===0&&y.push("费用/攻击/血量不变"),n=`使${b}${g}${y.join("/")}`}else h===0&&u!==0?n=`${c}${u}血量`:u===0&&h!==0?n=`${d}${h}攻击`:n=`${d}${h}/${c}${u}`}else if(e.effect==="给予印记")n=`给予${e.value||0}点印记`;else if(e.effect==="治愈")n=`治愈${e.value||0}点生命`;else if(e.effect==="获得能量")n=`获得${e.value||0}点能量`;else if(e.effect==="失去能量")n=`失去${e.value||0}点能量`;else if(e.effect==="召唤"){const d=e.summonSource||"derived";if(d!=="derived"){const c=Ie(d,!!e.isRandom),m=e.isRandom?"中的随机一个":"";n=`召唤${e.value||1}张${c}${m}`}else if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>1){const c=e.summonedCardIndices.map(m=>(s!==void 0?s?.[m]:this.editingCards?.[m])?.name||"衍生随从");n=`召唤${e.value||1}张${c.join("、")}中的随机一个`}else{const c=e.summonedCardIndex??0,h=(s!==void 0?s?.[c]:this.editingCards?.[c])?.name||"衍生随从";n=`召唤${e.value||1}张${h}`}}else if(e.effect==="获得"){const d=e.summonSource||"derived";if(d!=="derived"){const c=Ie(d,!!e.isRandom),m=e.isRandom?"中的随机一个":"";n=`获得${e.value||1}张${c}${m}`}else if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>1){const c=e.summonedCardIndices.map(m=>(s!==void 0?s?.[m]:this.editingCards?.[m])?.name||"衍生牌");n=`获得${e.value||1}张${c.join("、")}中的随机一个`}else{const c=e.summonedCardIndex??0,h=(s!==void 0?s?.[c]:this.editingCards?.[c])?.name||"衍生牌";n=`获得${e.value||1}张${h}`}}else if(e.effect==="变化"){const d=e.summonSource||"derived";if(d!=="derived"){const c=Ie(d,!!e.isRandom),m=e.isRandom?"中的随机一个":"";n=`变化为${c}${m}`}else if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>1)n=`变化为${e.summonedCardIndices.map(m=>(s!==void 0?s?.[m]:this.editingCards?.[m])?.name||"衍生随从").join("、")}中的随机一个`;else{const c=e.summonedCardIndex??0;n=`变化为${(s!==void 0?s?.[c]:this.editingCards?.[c])?.name||"衍生随从"}`}}else if(e.effect==="给予词条"){const d=e.grantedKeywordName||"";n=`给予${d==="护甲"?`【${d}${e.grantedKeywordValue??1}】`:`【${d}】`}`}let a="";e.triggerNumbers&&e.triggerNumbers.length>0&&([1,2,3,4,5,6].every(m=>e.triggerNumbers.includes(m))||(a=`🎲${e.triggerNumbers.length}/6`));const o=this.getConditionText(e),l=e.isOpponent?"对手":"";return t.includes("无需目标")||t.includes("卡牌")||t.length===0?`${o}${l}${n}${a}`:`${o}${l}${i}${n}${a}`}getCardFullEffectText(e,s){const t=[],r=s||e.derivedCards;if(e.effects&&e.effects.length>0){const i=new Map;for(const n of e.effects){if(!n||!n.effect)continue;const a=n.moments||(n.moment?[n.moment]:[]);if(a.length===0)continue;const o=a.length===1&&a[0]==="打出时"&&e.type==="spell"?"":a.map(c=>$e[c]||"").join(""),l=a.sort().join("|"),d=this.getEffectTextWithoutMoment(n,r);d&&(i.has(l)||i.set(l,{icon:o,texts:[]}),i.get(l).texts.push(d))}for(const n of i.values())t.push(`${n.icon}${n.texts.join("，并")}`)}else if(e.type==="spell"&&e.spellEffect){const i=e.spellEffect,n=i.moments||(i.moment?[i.moment]:[]);if(n.length>0&&i.effect){const a=n.length===1&&n[0]==="打出时"&&e.type==="spell"?"":n.map(l=>$e[l]||"").join(""),o=this.getEffectTextWithoutMoment(i,r);o&&t.push(`${a}${o}`)}}return t.join("<br>；")}getVariableChangePrefix(e){if(!e.variableChange)return"⚙️";const s=Ht[e.variableChange.variable]||"",t=e.variableChange.increase!==!1,r=e.variableChange.decrease!==!1;return t&&r?`${s}⚙️`:t?`${s}📈`:r?`${s}📉`:`${s}⚙️`}getHeroSkillDescription(e){const s=e.effects||(e.effect?[e.effect]:[]);if(s.length===0)return"无效果";const t=new Map;for(const a of s){if(!a.effect)continue;const o=a.moment||"打出时",l=o!=="打出时"?`${$e[o]||""}`:"",d=this.getEffectTextWithoutMoment(a,this.heroDerivedCards);d&&(t.has(o)||t.set(o,{icon:l,texts:[]}),t.get(o).texts.push(d))}const r=[];for(const a of t.values())r.push(`${a.icon}${a.texts.join("，并")}`);const i=r.join("；")||"无效果";if(e.limited)return`${i}（一局${e.maxUses??1}次）`;const n=e.cooldown??0;return n>0?`${i}（CD: ${n}）`:i}isConditionSelected(e,s){return s?s.conditionType?s.conditionType===e:e==="d6"?!!s.triggerNumbers&&s.triggerNumbers.length<6:e==="guaranteed":e==="guaranteed"}getConditionItemStyle(e,s){const t=this.isConditionSelected(e,s);return e==="guaranteed"?t?"background:rgba(34,197,94,0.25);border:2px solid #22c55e;":"background:rgba(212,196,168,0.3);border:2px solid #d4c4a8;":e==="d6"?t?"background:transparent;border:2px solid #c0a080;":"background:rgba(212,196,168,0.3);border:2px solid #d4c4a8;":t?"background:rgba(34,197,94,0.25);border:2px solid #22c55e;":"background:rgba(212,196,168,0.3);border:2px solid #d4c4a8;"}getConditionSubEditor(e,s){const t=this.isConditionSelected("exists_minion",s)?"exists_minion":this.isConditionSelected("target_attr",s)?"target_attr":this.isConditionSelected("hero_hp",s)?"hero_hp":this.isConditionSelected("minion_count",s)?"minion_count":this.isConditionSelected("hand_count",s)?"hand_count":null;if(!t)return"";if(t==="exists_minion"){const m=s?.conditionMinionName||"",h=s?.conditionMinionCheckName??!1,u=s?.conditionSides||["friendly"],p=u.includes("friendly"),b=u.includes("enemy"),g=p&&b,y=s?.conditionSideLogic||"and",x=["cost","attack","health"],w={cost:"能量花费",attack:"攻击力",health:"生命值"},f=x.map(v=>{const E=s?.conditionMinionAttrs?.[v],S=E?.enabled??!1,T=E?.operator||"=",A=E?.value??0,R=["<","=",">"].map(_=>{const N=(_==="<"?T==="<":_==="="?T==="=":T===">")||(_==="<"&&T==="<="||_===">"&&T===">="||_==="="&&(T==="<="||T===">="));return`<button class="condition-minion-attr-op-btn" data-attr="${v}" data-op="${_}" data-editor="${e}"
            style="${N?"rgba(34,197,94,0.25)":"rgba(212,196,168,0.3)"};border:1px solid ${N?"#22c55e":"#d4c4a8"};color:${N?"#22c55e":"#8b7355"};width:28px;height:24px;border-radius:4px;font-size:12px;font-weight:bold;cursor:pointer;">${_==="<"?"＜":_==="="?"＝":"＞"}</button>`}).join("");return`
        <div style="font-size:11px;" onclick="event.stopPropagation()">
          <div class="flex items-center gap-2" style="margin-bottom:3px;">
            <input type="checkbox" class="condition-minion-attr-check" data-attr="${v}" data-editor="${e}" ${S?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
            <span style="color:#5a4a3a;">${w[v]}</span>
          </div>
          <div class="flex items-center gap-2">
            ${R}
            <input type="number" class="condition-minion-attr-input" data-attr="${v}" data-editor="${e}" value="${A}"
              style="width:45px;padding:2px 4px;border:1px solid #c0a080;border-radius:4px;font-size:11px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="0">
          </div>
        </div>`}).join("");return`
      <div class="mt-2 space-y-2 pl-1" onclick="event.stopPropagation()">
        <div class="flex items-center gap-3">
          <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
            <input type="checkbox" class="condition-side-check" data-side="friendly" data-editor="${e}" ${p?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
            我方
          </label>
          <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
            <input type="checkbox" class="condition-side-check" data-side="enemy" data-editor="${e}" ${b?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
            敌方
          </label>
        </div>
        ${g?`
        <div class="flex items-center gap-3">
          <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
            <input type="radio" name="condition-logic-exists-${e}" class="condition-logic-radio" data-editor="${e}" value="and" ${y==="and"?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
            与
          </label>
          <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
            <input type="radio" name="condition-logic-exists-${e}" class="condition-logic-radio" data-editor="${e}" value="or" ${y==="or"?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
            或
          </label>
        </div>
        `:""}
        <div class="flex items-center gap-2" style="margin-bottom:3px;">
          <input type="checkbox" class="condition-minion-name-check" data-editor="${e}" ${h?"checked":""}
            style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
          <span style="font-size:11px;color:#5a4a3a;">随从名称</span>
        </div>
        <div style="margin-bottom:6px;">
          <input type="text" class="condition-minion-name-input" data-editor="${e}" value="${m}"
            style="width:100%;padding:4px 8px;border:1px solid #c0a080;border-radius:4px;font-size:12px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="输入名称">
        </div>
        <div class="space-y-1">${f}</div>
      </div>`}if(t==="target_attr"){const m=["cost","attack","health"],h={cost:"能量花费",attack:"攻击力",health:"生命值"};return`<div class="mt-2 space-y-1 pl-1">${m.map(p=>{const b=s?.conditionTargetAttrs?.[p],g=b?.enabled??!1,y=b?.operator||"=",x=b?.value??0,w=["<","=",">"].map(f=>{const S=(f==="<"?y==="<":f==="="?y==="=":y===">")||(f==="<"&&y==="<="||f===">"&&y===">="||f==="="&&(y==="<="||y===">="));return`<button class="condition-target-op-btn" data-attr="${p}" data-op="${f}" data-editor="${e}"
            style="${S?"rgba(34,197,94,0.25)":"rgba(212,196,168,0.3)"};border:1px solid ${S?"#22c55e":"#d4c4a8"};color:${S?"#22c55e":"#8b7355"};width:28px;height:24px;border-radius:4px;font-size:12px;font-weight:bold;cursor:pointer;">${f==="<"?"＜":f==="="?"＝":"＞"}</button>`}).join("");return`
        <div style="font-size:11px;" onclick="event.stopPropagation()">
          <div class="flex items-center gap-2" style="margin-bottom:3px;">
            <input type="checkbox" class="condition-target-attr-check" data-attr="${p}" data-editor="${e}" ${g?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
            <span style="color:#5a4a3a;">${h[p]}</span>
          </div>
          <div class="flex items-center gap-2">
            ${w}
            <input type="number" class="condition-target-attr-input" data-attr="${p}" data-editor="${e}" value="${x}"
              style="width:45px;padding:2px 4px;border:1px solid #c0a080;border-radius:4px;font-size:11px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="0">
          </div>
        </div>`}).join("")}</div>`}const r=s?.conditionSides||["friendly"],i=r.includes("friendly"),n=r.includes("enemy"),a=i&&n,o=s?.conditionSideLogic||"and",l=s?.conditionOperator||"=",d=s?.conditionValue??0,c=["<","=",">"].map(m=>{const p=(m==="<"?l==="<":m==="="?l==="=":l===">")||(m==="<"&&l==="<="||m===">"&&l===">=");return`<button class="condition-op-btn" data-op="${m}" data-editor="${e}"
        style="background:${p?"rgba(34,197,94,0.25)":"rgba(212,196,168,0.3)"};border:1px solid ${p?"#22c55e":"#d4c4a8"};color:${p?"#22c55e":"#8b7355"};width:32px;height:28px;border-radius:4px;font-size:14px;font-weight:bold;cursor:pointer;">${m==="<"?"＜":m==="="?"＝":"＞"}</button>`}).join("");return`
      <div class="mt-2 space-y-2 pl-1">
        <div class="flex items-center gap-3" onclick="event.stopPropagation()">
          <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
            <input type="checkbox" class="condition-side-check" data-side="friendly" data-editor="${e}" ${i?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">我方
          </label>
          <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
            <input type="checkbox" class="condition-side-check" data-side="enemy" data-editor="${e}" ${n?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">敌方
          </label>
        </div>
          ${a?`
        <div class="flex items-center gap-3">
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-${e}" class="condition-logic-radio" data-editor="${e}" value="and" ${o==="and"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">与
            </label>
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-${e}" class="condition-logic-radio" data-editor="${e}" value="or" ${o==="or"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">或
            </label>
        </div>
          `:""}
        <div class="flex items-center gap-2">
          ${c}
          <input type="number" class="condition-value-input" data-editor="${e}" value="${d}"
            style="width:55px;padding:2px 6px;border:1px solid #c0a080;border-radius:4px;font-size:12px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="0">
        </div>
      </div>`}setConditionType(e,s){e&&(e==="guaranteed"?(s.conditionType="guaranteed",s.triggerNumbers=[1,2,3,4,5,6],delete s.conditionSides,delete s.conditionSideLogic,delete s.conditionOperator,delete s.conditionValue):e==="d6"?(s.conditionType="d6",(!s.triggerNumbers||s.triggerNumbers.length===6)&&(s.triggerNumbers=[1]),delete s.conditionSides,delete s.conditionSideLogic,delete s.conditionOperator,delete s.conditionValue):e==="exists_minion"?(s.conditionType=e,s.conditionMinionName||(s.conditionMinionName=""),s.conditionMinionCheckName===void 0&&(s.conditionMinionCheckName=!1),s.conditionMinionAttrs||(s.conditionMinionAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}}),s.conditionSides||(s.conditionSides=["friendly"]),delete s.triggerNumbers,delete s.conditionOperator,delete s.conditionValue,delete s.conditionSideLogic):e==="target_attr"?(s.conditionType=e,s.conditionTargetAttrs||(s.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}}),delete s.triggerNumbers,delete s.conditionSides,delete s.conditionSideLogic,delete s.conditionOperator,delete s.conditionValue):(s.conditionType=e,s.conditionSides||(s.conditionSides=["friendly"]),s.conditionOperator||(s.conditionOperator="="),s.conditionValue===void 0&&(s.conditionValue=0),delete s.triggerNumbers))}getConditionCollapsedText(e){if(!e)return"必然触发";const s=e.conditionType||(!e.triggerNumbers||e.triggerNumbers.length===6?"guaranteed":"d6");if(s==="guaranteed")return"必然触发";if(s==="d6"){const m=e.triggerNumbers||[];return m.length>0&&m.length<6?`🎲 D6（${m.join("、")}）`:"🎲 D6"}if(s==="exists_minion"){const m=e.conditionMinionName?.trim(),h=e.conditionMinionCheckName??!1,u=e.conditionSides||["friendly"],p=u.includes("friendly")&&u.includes("enemy")?"双方":u.includes("friendly")?"我方":"敌方",b=e.conditionSideLogic||"and",g=u.includes("friendly")&&u.includes("enemy")?b==="and"?"均":"有一":"",y=e.conditionMinionAttrs,x=[];if(y){const v={cost:"能量",attack:"攻击",health:"生命"};for(const E of["cost","attack","health"]){const S=y[E];if(S?.enabled){const T=S.operator||"=",A=T==="<="?"≤":T===">="?"≥":T;x.push(`${v[E]}${A}${S.value}`)}}}const w=h&&m?`「${m}」`:"",f=x.length?`[${x.join("、")}]`:"";return`${p}存在随从${g}${w}${f}`}if(s==="target_attr"){const m={cost:"能量",attack:"攻击",health:"生命"},h=e.conditionTargetAttrs;if(!h)return"目标属性";const u=[];for(const p of["cost","attack","health"]){const b=h[p];if(b?.enabled){const g=b.operator||"=",y=g==="<="?"≤":g===">="?"≥":g;u.push(`${m[p]}${y}${b.value}`)}}return u.length?`目标${u.join("、")}`:"目标属性"}const r={hero_hp:"英雄血量",minion_count:"随从数",hand_count:"手牌数"}[s]||s,i=e.conditionSides||["friendly"],n=i.includes("friendly")&&i.includes("enemy")?"双方":i.includes("friendly")?"我方":"敌方",a=e.conditionSideLogic||"and",o=i.includes("friendly")&&i.includes("enemy")?a==="and"?"均":"有一":"",l=e?.conditionOperator||"=",d=l==="<="?"≤":l===">="?"≥":l,c=e.conditionValue??0;return`${n}${r}${o}${d}${c}`}getConditionText(e){const s=e.conditionType||(!e.triggerNumbers||e.triggerNumbers.length===6?"guaranteed":"d6");if(s==="guaranteed"||s==="d6")return"";if(s==="exists_minion"){const m=e.conditionMinionName?.trim(),h=e.conditionMinionCheckName??!1,u=e.conditionSides||["friendly"],p=u.includes("friendly")&&u.includes("enemy")?"双方":u.includes("friendly")?"我方":"敌方",b=e.conditionSideLogic||"and",g=u.includes("friendly")&&u.includes("enemy")?b==="and"?"均":"有一":"",y=e.conditionMinionAttrs,x=[];if(y){const E={cost:"能量花费",attack:"攻击力",health:"生命值"};for(const S of["cost","attack","health"]){const T=y[S];if(T?.enabled){const A=T.operator||"=",R=A==="<="?"≤":A===">="?"≥":A;x.push(`${E[S]}${R}${T.value}`)}}}const w=h&&m?`「${m}」`:"",f=x.length?`[${x.join("且")}]`:"";return`${p}存在${g}${w}${f}`.replace(/^(.+)$/,"若$1")+"，则"}if(s==="target_attr"){const m=e.conditionTargetAttrs;if(!m)return"若目标属性符合条件，则";const h={cost:"能量花费",attack:"攻击力",health:"生命值"},u=[];for(const p of["cost","attack","health"]){const b=m[p];if(b?.enabled){const g=b.operator||"=",y=g==="<="?"≤":g===">="?"≥":g;u.push(`${h[p]}${y}${b.value}`)}}return u.length?`若目标${u.join("且")}，则`:"若目标属性符合条件，则"}const r={hero_hp:"英雄血量",minion_count:"随从数",hand_count:"手牌数"}[s]||s,i=e.conditionSides||["friendly"],n=i.includes("friendly")&&i.includes("enemy")?"双方":i.includes("friendly")?"我方":"敌方",a=e.conditionSideLogic||"and",o=i.includes("friendly")&&i.includes("enemy")?a==="and"?"均":"有一":"",l=e?.conditionOperator||"=",d=l==="<="?"≤":l===">="?"≥":l,c=e.conditionValue??0;return`若${n}${r}${o}${d}${c}，则`}getMinionSkillDescription(e){return!e.effects||e.effects.length===0?"":e.effects.map(t=>{const r=t.moment?`${$e[t.moment]||""}`:"",i=this.getEffectTextWithoutMoment(t,e.derivedCards);return`${r} ${i}`.trim()}).filter(t=>t).join(`
`)}showFixedTooltip(e,s,t){let r=document.getElementById("unified-tooltip-overlay");if(!r){r=document.createElement("div"),r.id="unified-tooltip-overlay",r.style.cssText="position:fixed; inset:0; pointer-events:none; z-index:999999; display:none;";const d=document.createElement("div");d.id="unified-tooltip-content",d.style.cssText="position:absolute; background:#b8a17a; border:2px solid #6b5a45; border-radius:8px; padding:10px 14px; box-shadow:0 8px 32px rgba(0,0,0,0.4); max-width:280px; pointer-events:none;",r.appendChild(d),document.body.appendChild(r)}const i=document.getElementById("unified-tooltip-content");i.innerHTML=s,r.style.display="block",r.style.visibility="hidden";const n=i.getBoundingClientRect();r.style.visibility="visible";const a=e.getBoundingClientRect();let o=a.left+a.width/2,l;t==="bottom"?l=a.bottom+8:l=a.top-n.height-8,o=Math.max(8+n.width/2,Math.min(o,window.innerWidth-n.width/2-8)),t==="bottom"&&l+n.height>window.innerHeight-8?l=a.top-n.height-8:t==="top"&&l<8&&(l=a.bottom+8),i.style.left=o+"px",i.style.top=l+"px",i.style.transform="translateX(-50%)"}hideFixedTooltip(){const e=document.getElementById("unified-tooltip-overlay");e&&(e.style.display="none")}attachHeroEditorEvents(){document.getElementById("back-menu-btn")?.addEventListener("click",()=>{this.state=le(this.state,{type:"BACK_TO_MENU"}),this.render()}),document.getElementById("back-to-manager-btn")?.addEventListener("click",()=>{this.state=le(this.state,{type:"SHOW_CARD_MANAGER"}),this.isHeroEditMode=!1,this.editingHeroId=null,this.editingCards=[],this.render()}),document.getElementById("hero-editor-more-btn")?.addEventListener("click",()=>{this.showSidePanel=!this.showSidePanel,this.render()}),document.getElementById("close-hero-side-panel-btn")?.addEventListener("click",()=>{this.showSidePanel=!1,this.render()}),document.getElementById("switch-to-normal-editor-btn")?.addEventListener("click",()=>{this.isHeroEditMode=!1,this.editingCards=[],this.state=le(this.state,{type:"SHOW_CARD_CREATOR"}),this.render()});const e=document.getElementById("hero-name");e&&e.addEventListener("input",c=>{this.heroName=c.target.value});const s=["greeting","apology","taunt","exclamation","pity","flirt"];for(const c of s){const m=document.getElementById(`hero-speech-${c}`);m&&m.addEventListener("input",h=>{this.heroSpeech[c]=h.target.value})}const t=document.getElementById("hero-voice-type");t&&t.querySelectorAll("[data-voice-type]").forEach(c=>{c.addEventListener("click",()=>{this.heroVoiceType=c.dataset.voiceType,this.render()})}),document.getElementById("reset-hero-btn")?.addEventListener("click",()=>{this.heroName="",this.heroImageData=null,this.heroDerivedCards=[],this.heroEditingDerivedIndex=null,this.heroSkills=[],this.heroEditingSkillIndex=null,this.heroSpeech={greeting:"",apology:"",taunt:"",exclamation:"",pity:"",flirt:""},this.heroVoiceType="none",this.render()}),document.getElementById("add-hero-derived-btn")?.addEventListener("click",()=>{this.cropTarget="main";const c=document.createElement("input");c.type="file",c.accept="image/png",c.onchange=async m=>{const h=m.target.files?.[0];if(h)try{const u=await this.importCardFromPNGFile(h);if(!u){alert("无法从该 PNG 文件中读取卡牌数据");return}const{cardData:p,imageData:b}=u,g=p.derivedCards&&p.derivedCards.length>0,y=["召唤","获得","变化"],x=(p.effects||[]).some(v=>y.includes(v.effect));if(g||x){alert("该卡牌携带衍生卡或包含召唤/获得/变化效果，无法作为英雄衍生卡导入");return}const w=[],f={name:p.name||"",type:p.type||"minion",cost:p.cost??1,attack:p.attack??1,health:p.health??1,armorValue:p.armorValue??0,preparationValue:p.preparationValue??1,imageData:b,keywords:(p.keywords||[]).map(v=>v==="风怒"?"__WINDURY__":v).map(v=>v==="__WINDURY__"?"连击":v).map(v=>Object.values(Ee).find(S=>S.name===v)||{name:v,description:"",hasValue:!1}),effects:p.effects||[],effectDescription:p.effectDescription||""};if(w.push(f),p.derivedCards&&p.derivedCards.length>0){f.derivedCards=p.derivedCards;for(const v of p.derivedCards)w.push({name:v.name||"",type:v.type||"minion",cost:v.cost??1,attack:v.attack??1,health:v.health??1,armorValue:v.armorValue??0,preparationValue:v.preparationValue??1,imageData:v.imageData||null,keywords:(v.keywords||[]).map(E=>E==="风怒"?"__WINDURY__":E).map(E=>E==="__WINDURY__"?"连击":E).map(E=>Object.values(Ee).find(T=>T.name===E)||{name:E,description:"",hasValue:!1}),effects:v.effects||[],effectDescription:v.effectDescription||""})}this.heroDerivedCards=[...this.heroDerivedCards,...w],this.heroEditingDerivedIndex=this.heroDerivedCards.length-w.length,this.render()}catch(u){alert("导入失败："+u.message)}},c.click()}),document.querySelectorAll(".hero-card-list-item").forEach(c=>{c.addEventListener("click",m=>{const h=m.target;if(h.classList.contains("hero-card-list-delete-btn")||h.closest(".hero-card-list-delete-btn"))return;const u=c.dataset.heroCardIndex;u==="hero"?this.heroEditingDerivedIndex=null:u!==void 0&&(this.heroEditingDerivedIndex=parseInt(u,10)),this.render()})}),document.querySelectorAll(".hero-card-list-delete-btn").forEach(c=>{c.addEventListener("click",m=>{m.stopPropagation();const h=c.dataset.heroCardIndex;if(h===void 0)return;const u=parseInt(h,10);this.heroDerivedCards=this.heroDerivedCards.filter((p,b)=>b!==u),this.heroEditingDerivedIndex===u?this.heroEditingDerivedIndex=null:this.heroEditingDerivedIndex!==null&&this.heroEditingDerivedIndex>u&&this.heroEditingDerivedIndex--,this.render()})});const r=document.getElementById("hero-derived-name");r&&r.addEventListener("input",c=>{this.heroEditingDerivedIndex!==null&&(this.heroDerivedCards=this.heroDerivedCards.map((m,h)=>h===this.heroEditingDerivedIndex?{...m,name:c.target.value}:m))});const i=document.getElementById("hero-derived-cost");i&&i.addEventListener("input",c=>{if(this.heroEditingDerivedIndex===null)return;const m=parseInt(c.target.value,10)||0;this.heroDerivedCards=this.heroDerivedCards.map((h,u)=>u===this.heroEditingDerivedIndex?{...h,cost:m}:h)});const n=document.getElementById("hero-derived-attack");n&&n.addEventListener("input",c=>{if(this.heroEditingDerivedIndex===null)return;const m=parseInt(c.target.value,10)||0;this.heroDerivedCards=this.heroDerivedCards.map((h,u)=>u===this.heroEditingDerivedIndex?{...h,attack:m}:h)});const a=document.getElementById("hero-derived-health");a&&a.addEventListener("input",c=>{if(this.heroEditingDerivedIndex===null)return;const m=parseInt(c.target.value,10)||1;this.heroDerivedCards=this.heroDerivedCards.map((h,u)=>u===this.heroEditingDerivedIndex?{...h,health:m}:h)}),document.getElementById("draw-hero-image-btn")?.addEventListener("click",()=>{this.isDrawingMode?this.exitDrawingMode(!0):this.enterDrawingMode()}),document.getElementById("import-hero-image-btn")?.addEventListener("click",()=>{this.cropTarget="hero";const c=document.createElement("input");c.type="file",c.accept="image/*",c.onchange=async m=>{const h=m.target.files?.[0];h&&this.openHeroCropModal(h)},c.click()}),document.getElementById("add-hero-to-deck-btn")?.addEventListener("click",()=>{if(!this.heroName.trim()){alert("请输入英雄名称");return}const c={id:this.isHeroEditMode&&this.editingHeroId?this.editingHeroId:ke(),name:this.heroName.trim(),cost:0,attack:0,health:30,maxHealth:30,type:"hero",keywords:[],imageData:this.heroImageData||void 0,skills:this.heroSkills,heroSpeech:{...this.heroSpeech,voiceType:this.heroVoiceType},derivedCards:this.heroDerivedCards.length>0?this.heroDerivedCards.map(h=>({name:h.name,type:h.type,cost:h.cost,attack:h.attack,health:h.health,maxHealth:h.health,imageData:h.imageData||void 0,keywords:h.keywords,effects:h.effects})):void 0};if(this.isHeroEditMode&&this.editingHeroId)this.state={...this.state,groups:this.state.groups.map(h=>({...h,cards:h.cards.map(u=>u.card.id===this.editingHeroId?{...u,card:c}:u)}))};else{const h=De(this.state);this.state={...this.state,groups:this.state.groups.map(u=>u.id===h.id?{...u,cards:[...u.cards,{card:c,count:1}]}:u)}}this.syncSharedDeck(),this.saveDeck();const m=document.getElementById("hero-add-success");m?.classList.remove("hidden"),setTimeout(()=>{m?.classList.add("hidden")},1500)}),document.getElementById("import-hero-code-btn")?.addEventListener("click",()=>{const c=document.createElement("input");c.type="file",c.accept="image/png",c.onchange=async m=>{const h=m.target.files?.[0];if(h){if(h.type!=="image/png"){alert("请选择 PNG 格式的文件");return}try{const u=await this.importHeroFromPNGFile(h);if(!u){alert("无法从该 PNG 文件中读取英雄牌数据，请确保这是英雄牌文件");return}this.heroName=u.heroData.name||"",this.heroImageData=u.imageData,this.heroSpeech=u.heroData.heroSpeech?{...u.heroData.heroSpeech}:{greeting:"",apology:"",taunt:"",exclamation:"",pity:"",flirt:""},this.heroVoiceType=u.heroData.heroSpeech?.voiceType||"none",this.render()}catch(u){alert("导入失败："+u.message)}}},c.click()}),document.getElementById("hero-import-confirm-btn")?.addEventListener("click",async()=>{const c=document.createElement("input");c.type="file",c.accept="image/png",c.onchange=async m=>{const h=m.target.files?.[0];if(h){if(h.type!=="image/png"){alert("请选择 PNG 格式的文件");return}try{const u=await this.importHeroFromPNGFile(h);if(!u){alert("无法从该 PNG 文件中读取英雄牌数据");return}this.heroName=u.heroData.name||"",this.heroImageData=u.imageData,this.render()}catch(u){alert("导入失败："+u.message)}}},c.click()}),document.getElementById("export-hero-code-btn")?.addEventListener("click",async()=>{try{const c=await this.exportHeroToPNGBlob(),m=URL.createObjectURL(c),h=document.createElement("a"),u=(this.heroName||"未命名英雄").replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g,"_");h.href=m,h.download=`${u}.png`,h.click(),URL.revokeObjectURL(m)}catch(c){alert("导出失败："+c.message)}}),document.getElementById("hero-copy-btn")?.addEventListener("click",()=>{const c=document.getElementById("hero-export-text");c&&(c.select(),document.execCommand("copy"),alert("已复制到剪贴板！"))}),document.getElementById("add-hero-skill-btn")?.addEventListener("click",()=>{this.heroSkills.push({id:Date.now(),name:`技能${this.heroSkills.length+1}`,type:"active",cost:1,effects:[{...this.createDefaultEffect(),moment:"打出时"}]}),this.heroEditingSkillIndex=this.heroSkills.length-1,this.heroEditingSkillEffectIndex=0,this.render()}),document.querySelectorAll(".hero-skill-delete-btn").forEach(c=>{c.addEventListener("click",m=>{m.stopPropagation();const h=c.dataset.heroSkillIndex;if(h===void 0)return;const u=Number(h);this.heroSkills.splice(u,1),this.render()})}),document.getElementById("hero-skill-type-active")?.addEventListener("click",()=>{const c=this.heroEditingSkillIndex;c===null||!this.heroSkills[c]||(this.heroSkills[c].type="active",this.render())}),document.getElementById("hero-skill-type-passive")?.addEventListener("click",()=>{const c=this.heroEditingSkillIndex;if(c===null||!this.heroSkills[c])return;this.heroSkills[c].type="passive";const m=this.heroSkills[c].effects||[];m.length>0&&m[0].moment==="打出时"&&(m[0].moment="回合开始时"),this.render()}),document.getElementById("add-hero-skill-effect-btn")?.addEventListener("click",()=>{const c=this.heroEditingSkillIndex;if(c===null||!this.heroSkills[c])return;this.heroSkills[c].effects||(this.heroSkills[c].effects=[]);const m=this.heroSkills[c].type==="passive";this.heroSkills[c].effects.push({...this.createDefaultEffect(),moment:m?"回合开始时":"打出时"}),this.heroEditingSkillEffectIndex=this.heroSkills[c].effects.length-1,this.render()}),document.getElementById("remove-hero-skill-effect-btn")?.addEventListener("click",()=>{const c=this.heroEditingSkillIndex;if(c===null||!this.heroSkills[c]?.effects)return;const m=this.heroSkills[c].effects;m.length<=1||(m.splice(this.heroEditingSkillEffectIndex,1),this.heroEditingSkillEffectIndex>=m.length&&(this.heroEditingSkillEffectIndex=m.length-1),this.render())}),document.querySelectorAll(".hero-skill-effect-tab").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.heroSkillEffectIndex;m!==void 0&&(this.heroEditingSkillEffectIndex=Number(m),this.render())})}),document.querySelectorAll(".hero-skill-icon").forEach(c=>{c.addEventListener("click",m=>{m.stopPropagation();const h=c.dataset.heroSkillIcon;if(h===void 0)return;const u=document.createElement("input");u.type="file",u.accept="image/*",u.onchange=async p=>{const b=p.target.files?.[0];b&&this.openSkillIconCropModal(b,Number(h))},u.click()})}),document.querySelectorAll(".hero-skill-list-item").forEach(c=>{c.addEventListener("click",m=>{const h=m.target;if(h.closest(".hero-skill-delete-btn")||h.closest(".hero-skill-icon"))return;const u=c.dataset.heroSkillIndex;u!==void 0&&(this.heroEditingSkillIndex=Number(u),this.heroSkills[this.heroEditingSkillIndex],this.render())})}),document.getElementById("hero-skill-name")?.addEventListener("input",c=>{const m=c.target;if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){this.heroSkills[this.heroEditingSkillIndex].name=m.value;const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${this.heroEditingSkillIndex}"] .skill-name-text`);h&&(h.textContent=m.value)}}),document.getElementById("hero-skill-cost")?.addEventListener("input",c=>{const m=c.target;if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){const h=Number(m.value);this.heroSkills[this.heroEditingSkillIndex].cost=h;const u=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${this.heroEditingSkillIndex}"] .skill-cost-num`);u&&(u.textContent=String(h))}}),document.getElementById("hero-skill-cooldown")?.addEventListener("input",c=>{const m=c.target;if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){const h=Math.max(0,Math.min(10,Number(m.value)||0));this.heroSkills[this.heroEditingSkillIndex].cooldown=h;const u=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${this.heroEditingSkillIndex}"] .skill-desc-text`);u&&(u.textContent=this.getHeroSkillDescription(this.heroSkills[this.heroEditingSkillIndex]))}}),document.getElementById("hero-skill-limited-checkbox")?.addEventListener("change",c=>{if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){const m=c.target.checked;this.heroSkills[this.heroEditingSkillIndex].limited=m,m&&!this.heroSkills[this.heroEditingSkillIndex].maxUses&&(this.heroSkills[this.heroEditingSkillIndex].maxUses=1),this.render()}}),document.getElementById("hero-skill-limited-input")?.addEventListener("input",c=>{const m=c.target;if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){const h=Math.max(1,Math.min(10,Number(m.value)||1));this.heroSkills[this.heroEditingSkillIndex].maxUses=h;const u=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${this.heroEditingSkillIndex}"] .skill-desc-text`);u&&(u.textContent=this.getHeroSkillDescription(this.heroSkills[this.heroEditingSkillIndex]))}});const o=this.heroEditingSkillIndex,l=o!==null?this.heroSkills[o]:null;l?.effects?.[this.heroEditingSkillEffectIndex],document.getElementById("toggle-hero-skill-moment-btn")?.addEventListener("click",()=>{this.showHeroSkillMomentPanel=!this.showHeroSkillMomentPanel,this.render()}),document.querySelectorAll(".hero-skill-moment-item").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.heroSkillMoment;if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].moment=m,this.showHeroSkillMomentPanel=!1;const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);h&&(h.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}})}),document.getElementById("toggle-hero-skill-condition-btn")?.addEventListener("click",()=>{this.showHeroSkillConditionPanel=!this.showHeroSkillConditionPanel,this.render()}),document.querySelectorAll(".hero-skill-condition-item").forEach(c=>{c.addEventListener("click",m=>{m.stopPropagation();const h=c.dataset.heroSkillCondition;if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const u=l.effects[this.heroEditingSkillEffectIndex];this.setConditionType(h,u),this.render()}})}),document.getElementById("toggle-hero-skill-target-btn")?.addEventListener("click",()=>{this.showHeroSkillTargetPanel=!this.showHeroSkillTargetPanel,this.render()}),document.querySelectorAll(".hero-skill-target-item").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.heroSkillTarget;if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const h=l.effects[this.heroEditingSkillEffectIndex];if(h.targets||(h.targets=[]),["无需目标","卡牌","选择目标","选择随从"].includes(m))h.targets.includes(m)?h.targets=[]:(h.targets=[m],(m==="无需目标"||m==="卡牌")&&(this.showHeroSkillTargetPanel=!1));else if(h.targets.some(g=>["无需目标","卡牌","选择目标","选择随从"].includes(g)))h.targets=[m];else{const g=h.targets.indexOf(m);g>=0?h.targets.splice(g,1):h.targets.push(m)}this.showHeroSkillEffectPanel=!0;const u=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);u&&(u.textContent=this.getHeroSkillDescription(this.heroSkills[o]));const p=document.querySelector(".hero-skill-target-scroll");p&&(this.pendingScrollRestoration={selector:".hero-skill-target-scroll",scrollTop:p.scrollTop}),this.render()}})});const d=document.getElementById("random-target-check-hero-skill");d?.addEventListener("click",c=>{c.stopPropagation()}),d?.addEventListener("change",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const m=l.effects[this.heroEditingSkillEffectIndex];m.isRandomTarget=c.target.checked;const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);h&&(h.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.querySelectorAll('.trigger-num-btn[data-editor="hero-skill"]').forEach(c=>{c.addEventListener("click",m=>{m.stopPropagation();const h=this.heroEditingSkillIndex;if(typeof h!="number"||h<0)return;const u=this.heroSkills[h];if(!u?.effects?.[this.heroEditingSkillEffectIndex])return;const p=parseInt(c.dataset.triggerNum||"1",10),b=u.effects[this.heroEditingSkillEffectIndex];b.triggerNumbers||(b.triggerNumbers=[1,2,3,4,5,6]);const g=b.triggerNumbers.indexOf(p);if(g>=0){if(b.triggerNumbers.length===1)return;b.triggerNumbers.splice(g,1)}else b.triggerNumbers.push(p),b.triggerNumbers.sort((y,x)=>y-x);this.render()})}),document.getElementById("hero-skill-opponent-checkbox")?.addEventListener("change",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isOpponent=c.target.checked;const m=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);m&&(m.textContent=this.getHeroSkillDescription(this.heroSkills[o]))}}),document.querySelectorAll(".hero-skill-effect-item").forEach(c=>{c.addEventListener("click",()=>{const m=c.dataset.heroSkillEffect;if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].effect=m;const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);h&&(h.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}})}),document.getElementById("hero-skill-effect-value")?.addEventListener("input",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].value=Number(c.target.value);const m=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);m&&(m.textContent=this.getHeroSkillDescription(this.heroSkills[o]))}}),document.getElementById("hero-skill-attack-value")?.addEventListener("input",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].attackValue=Number(c.target.value);const m=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);m&&(m.textContent=this.getHeroSkillDescription(this.heroSkills[o]))}}),document.getElementById("hero-skill-health-value")?.addEventListener("input",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].healthValue=Number(c.target.value);const m=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);m&&(m.textContent=this.getHeroSkillDescription(this.heroSkills[o]))}}),document.getElementById("hero-skill-atk-pos-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isAttackSet=!1,l.effects[this.heroEditingSkillEffectIndex].isAttackPositive=!0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-atk-zero-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].attackValue=0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-atk-neg-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isAttackSet=!1,l.effects[this.heroEditingSkillEffectIndex].isAttackPositive=!1;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-atk-set-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isAttackSet=!0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-hp-pos-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isHealthSet=!1,l.effects[this.heroEditingSkillEffectIndex].isHealthPositive=!0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-hp-zero-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].healthValue=0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-hp-neg-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isHealthSet=!1,l.effects[this.heroEditingSkillEffectIndex].isHealthPositive=!1;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-hp-set-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isHealthSet=!0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-cost-pos-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isCostSet=!1,l.effects[this.heroEditingSkillEffectIndex].isCostPositive=!0,l.effects[this.heroEditingSkillEffectIndex].costValue===0&&(l.effects[this.heroEditingSkillEffectIndex].costValue=1);const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-cost-zero-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].costValue=0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-cost-neg-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isCostSet=!1,l.effects[this.heroEditingSkillEffectIndex].isCostPositive=!1,l.effects[this.heroEditingSkillEffectIndex].costValue===0&&(l.effects[this.heroEditingSkillEffectIndex].costValue=1);const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-cost-set-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isCostSet=!0,l.effects[this.heroEditingSkillEffectIndex].costValue===0&&(l.effects[this.heroEditingSkillEffectIndex].costValue=1);const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.querySelectorAll(".hero-skill-summon-source-btn").forEach(c=>{c.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const m=c.dataset.source;l.effects[this.heroEditingSkillEffectIndex].summonSource=m;const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);h&&(h.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}})}),document.querySelectorAll(".hero-skill-summon-card-item").forEach(c=>{c.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const m=parseInt(c.dataset.heroSkillSummonIndex||"0",10),h=l.effects[this.heroEditingSkillEffectIndex];if(h.isRandom){h.summonedCardIndices=h.summonedCardIndices||[];const u=h.summonedCardIndices.indexOf(m);u>=0?h.summonedCardIndices.splice(u,1):h.summonedCardIndices.push(m)}else h.summonedCardIndex=h.summonedCardIndex===m?void 0:m;this.render()}})}),document.getElementById("hero-skill-summon-random-checkbox")?.addEventListener("change",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const m=l.effects[this.heroEditingSkillEffectIndex];m.isRandom=c.target.checked,m.isRandom?(m.summonedCardIndices=m.summonedCardIndex!==void 0?[m.summonedCardIndex]:[],m.summonedCardIndex=void 0):(m.summonedCardIndex=m.summonedCardIndices?.[0],m.summonedCardIndices=void 0),this.render()}}),document.getElementById("hero-skill-summon-count-input")?.addEventListener("change",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const m=l.effects[this.heroEditingSkillEffectIndex],h=parseInt(c.target.value)||1;m.value=Math.max(1,h),this.render()}})}openHeroCropModal(e){const s=document.getElementById("crop-modal"),t=document.getElementById("crop-canvas");if(!s||!t)return;const r=Math.min(window.innerWidth*.65,480),i=Math.min(window.innerHeight*.55,520),n=4/3;let a=0,o=0,l=0,d=0;r/i>n?(o=i*.88,a=o*n):(a=r*.88,o=a/n),l=(r-a)/2,d=(i-o)/2,t.width=r,t.height=i;const c=t.getContext("2d");if(!c)return;c.imageSmoothingEnabled=!1;let m=1,h=0,u=0,p=!1,b=0,g=0,y=0,x=0,w=null,f=null,v=!1,E=15,S="medium",T=!1,A=null;const R=()=>{["thin","medium","thick"].forEach(W=>{const k=document.getElementById(`hero-crop-eraser-${W}-btn`);if(k){const j=S===W;k.style.borderColor=j?"#4a9":"#666",k.style.background=j?"#2a6":"#444",k.style.color=j?"#fff":"#aaa"}})},_=(z,W)=>{if(!A||!w)return;const k=(z-h)/m,j=(W-u)/m,H=E/m,D=A.getContext("2d");D.fillStyle="#ffffff",D.beginPath(),D.arc(k,j,Math.max(1,H/2),0,Math.PI*2),D.fill(),Z()},B=z=>{const k=z+8,j=document.createElement("canvas");j.width=k,j.height=k;const H=j.getContext("2d");return H.strokeStyle="rgba(255,255,255,0.95)",H.lineWidth=2,H.beginPath(),H.arc(k/2,k/2,z/2,0,Math.PI*2),H.stroke(),H.strokeStyle="rgba(0,0,0,0.3)",H.lineWidth=1,H.beginPath(),H.arc(k/2,k/2,z/2,0,Math.PI*2),H.stroke(),`url(${j.toDataURL()}) ${k/2} ${k/2}, crosshair`},$=(z,W,k,j,H)=>{const D=r,M=i;z.clearRect(0,0,D,M),z.fillStyle="#1a1a1a",z.fillRect(0,0,D,M),z.save(),z.beginPath(),z.rect(l-30,d-30,a+60,o+60),z.clip(),z.drawImage(W,j,H,W.naturalWidth*k,W.naturalHeight*k),A&&(z.globalCompositeOperation="destination-out",z.drawImage(A,j,H,A.width*k,A.height*k),z.globalCompositeOperation="source-over"),z.restore(),z.fillStyle="rgba(0,0,0,0.6)",z.fillRect(0,0,D,d),z.fillRect(0,d+o,D,M-d-o),z.fillRect(0,d,l,o),z.fillRect(l+a,d,D-l-a,o),z.strokeStyle="rgba(200,160,100,0.9)",z.lineWidth=2,z.strokeRect(l,d,a,o),z.strokeStyle="rgba(255,255,255,0.25)",z.lineWidth=1;const O=o/3,q=a/3;z.beginPath(),z.moveTo(l,d+O),z.lineTo(l+a,d+O),z.moveTo(l,d+O*2),z.lineTo(l+a,d+O*2),z.moveTo(l+q,d),z.lineTo(l+q,d+o),z.moveTo(l+q*2,d),z.lineTo(l+q*2,d+o),z.stroke()};s.style.display="flex";const N=new Image;N.onload=()=>{w=N,A=document.createElement("canvas"),A.width=N.naturalWidth,A.height=N.naturalHeight,A.getContext("2d").clearRect(0,0,A.width,A.height);const W=document.getElementById("hero-crop-eraser-panel");W&&(W.style.display=this.isPortraitMode?"none":"flex"),R();const k=a/N.naturalWidth,j=o/N.naturalHeight;m=Math.max(k,j),h=l+a/2-N.naturalWidth*m/2,u=d+o/2-N.naturalHeight*m/2,$(c,N,m,h,u)},N.src=URL.createObjectURL(e);const J=t.cloneNode(!0);t.parentNode?.replaceChild(J,t);const U=J,ne=U.getContext("2d");ne.imageSmoothingEnabled=!1;const Z=()=>{w&&ne&&$(ne,w,m,h,u)};U.addEventListener("mousedown",z=>{if(v&&w){T=!0,U.style.cursor=B(E),_(z.offsetX,z.offsetY);return}p=!0,b=z.offsetX,g=z.offsetY,y=h,x=u,U.style.cursor="grabbing"});const se=z=>{if(T&&w){const k=U.getBoundingClientRect();_(z.clientX-k.left,z.clientY-k.top);return}if(!p||!U)return;const W=U.getBoundingClientRect();h=y+(z.clientX-W.left-b),u=x+(z.clientY-W.top-g),Z()},Y=()=>{if(T){T=!1,U.style.cursor=v?B(E):"grab";return}p&&(p=!1,U.style.cursor="grab")};window.addEventListener("mousemove",se),window.addEventListener("mouseup",Y);const C=z=>{if(!w||!U.isConnected||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(z.key))return;z.preventDefault();const W=2;z.key==="ArrowLeft"?h-=W:z.key==="ArrowRight"?h+=W:z.key==="ArrowUp"?u-=W:z.key==="ArrowDown"&&(u+=W),Z()};document.addEventListener("keydown",C),U.addEventListener("wheel",z=>{if(z.preventDefault(),!w)return;const W=U.getBoundingClientRect(),k=z.clientX-W.left,j=z.clientY-W.top,H=z.deltaY<0?1.03:.97,D=Math.max(.1,m*H);h=k-(k-h)*(D/m),u=j-(j-u)*(D/m),m=D,Z()},{passive:!1});let P=0,L=1,V=0,Q=0;U.addEventListener("touchstart",z=>{if(v&&w&&z.touches.length===1){T=!0;const W=U.getBoundingClientRect();_(z.touches[0].clientX-W.left,z.touches[0].clientY-W.top);return}if(z.touches.length===1){p=!0;const W=U.getBoundingClientRect();b=z.touches[0].clientX-W.left,g=z.touches[0].clientY-W.top,y=h,x=u}else if(z.touches.length===2){p=!1;const W=z.touches[0].clientX-z.touches[1].clientX,k=z.touches[0].clientY-z.touches[1].clientY;P=Math.sqrt(W*W+k*k),L=m,V=h,Q=u}},{passive:!0}),U.addEventListener("touchmove",z=>{if(z.preventDefault(),T&&w&&z.touches.length===1){const W=U.getBoundingClientRect();_(z.touches[0].clientX-W.left,z.touches[0].clientY-W.top);return}if(z.touches.length===1&&p){const W=U.getBoundingClientRect();h=y+(z.touches[0].clientX-W.left-b),u=x+(z.touches[0].clientY-W.top-g),Z()}else if(z.touches.length===2){const W=z.touches[0].clientX-z.touches[1].clientX,k=z.touches[0].clientY-z.touches[1].clientY,H=Math.sqrt(W*W+k*k)/Math.max(.001,P),D=Math.max(.1,Math.min(10,L*H)),M=U.getBoundingClientRect(),O=(z.touches[0].clientX+z.touches[1].clientX)/2-M.left,q=(z.touches[0].clientY+z.touches[1].clientY)/2-M.top;h=O-(O-V)*(D/L),u=q-(q-Q)*(D/L),m=D,Z()}},{passive:!1}),U.addEventListener("touchend",()=>{T=!1,p=!1},{passive:!0}),document.getElementById("crop-hcenter-btn")?.addEventListener("click",()=>{w&&(h=l+a/2-w.naturalWidth*m/2,Z())}),document.getElementById("crop-vcenter-btn")?.addEventListener("click",()=>{w&&(u=d+o/2-w.naturalHeight*m/2,Z())}),document.getElementById("crop-cover-btn")?.addEventListener("click",()=>{if(!w)return;const z=a/w.naturalWidth,W=o/w.naturalHeight;m=Math.max(z,W),h=l+a/2-w.naturalWidth*m/2,u=d+o/2-w.naturalHeight*m/2,Z()}),document.getElementById("crop-contain-btn")?.addEventListener("click",()=>{if(!w)return;const z=a/w.naturalWidth,W=o/w.naturalHeight;m=Math.min(z,W),h=l+a/2-w.naturalWidth*m/2,u=d+o/2-w.naturalHeight*m/2,Z()}),document.getElementById("hero-crop-eraser-btn")?.addEventListener("click",()=>{v=!v;const z=document.getElementById("hero-crop-eraser-btn");z&&(z.style.borderColor=v?"#4a9":"#888"),U.style.cursor=v?B(E):"grab"}),document.getElementById("hero-crop-eraser-thin-btn")?.addEventListener("click",()=>{E=5,S="thin",R(),v&&(U.style.cursor=B(5))}),document.getElementById("hero-crop-eraser-medium-btn")?.addEventListener("click",()=>{E=15,S="medium",R(),v&&(U.style.cursor=B(15))}),document.getElementById("hero-crop-eraser-thick-btn")?.addEventListener("click",()=>{E=45,S="thick",R(),v&&(U.style.cursor=B(45))}),U.__cropCleanup=()=>{window.removeEventListener("mousemove",se),window.removeEventListener("mouseup",Y),document.removeEventListener("keydown",C);const z=document.getElementById("hero-crop-eraser-panel");z&&(z.style.display="none");const W=document.getElementById("hero-crop-eraser-btn");W&&(W.style.borderColor="#888"),v=!1,T=!1,A=null};const oe=()=>{const z=document.getElementById("crop-modal"),W=document.getElementById("crop-canvas");z&&(z.style.display="none"),w&&(URL.revokeObjectURL(w.src),w=null),W?.__cropCleanup&&W.__cropCleanup()},ie=document.getElementById("crop-cancel-btn"),F=ie?.cloneNode(!0);ie&&F&&(ie.parentNode?.replaceChild(F,ie),F.addEventListener("click",oe));const ee=document.getElementById("crop-confirm-btn"),de=ee?.cloneNode(!0);ee&&de&&(ee.parentNode?.replaceChild(de,ee),de.addEventListener("click",async()=>{if(!w){oe();return}const z=(l-h)/m,W=(d-u)/m,k=a/m,j=o/m,H=document.createElement("canvas");H.width=800,H.height=600;const D=H.getContext("2d");if(!D){oe();return}D.imageSmoothingEnabled=!1,D.drawImage(w,z,W,k,j,0,0,800,600),A&&(D.globalCompositeOperation="destination-out",D.drawImage(A,z,W,k,j,0,0,800,600),D.globalCompositeOperation="source-over");const M=H.toDataURL("image/png");try{const{bgDataUrl:O}=await this.generateAtmosphereBackground(M),q=new Image;q.onload=()=>{const K=document.createElement("canvas");K.width=400,K.height=300;const G=K.getContext("2d");if(G){G.imageSmoothingEnabled=!1,G.drawImage(q,0,0,400,300);const ae=K.toDataURL("image/png"),re=document.createElement("canvas");re.width=400,re.height=300;const te=re.getContext("2d");if(te){te.imageSmoothingEnabled=!1;const X=new Image;X.onload=()=>{te.drawImage(X,0,0,400,300);const ce=new Image;ce.onload=()=>{const he=Math.max(400/ce.naturalWidth,300/ce.naturalHeight),ge=ce.naturalWidth*he,ye=ce.naturalHeight*he,pe=(400-ge)/2,Ce=(300-ye)/2,xe=30,Pe=.85,Le=xe*4,_e=document.createElement("canvas");_e.width=ge+Le*2,_e.height=ye+Le*2;const Re=_e.getContext("2d");Re&&(Re.imageSmoothingEnabled=!1,Re.drawImage(ce,Le,Le,ge,ye),Re.globalCompositeOperation="source-in",Re.fillStyle="#000000",Re.fillRect(0,0,_e.width,_e.height),Re.globalCompositeOperation="source-over",te.save(),te.filter=`blur(${xe}px)`,te.globalAlpha=Pe,te.drawImage(_e,pe-Le,Ce-Le),te.restore()),te.drawImage(ce,pe,Ce,ge,ye),f=re.toDataURL("image/png"),this.heroImageData=f,this.render()},ce.src=M},X.src=ae}}},q.src=O}catch(O){alert("生成氛围感背景失败："+O.message)}oe()}))}openVariableSelectorModal(e){document.getElementById("variable-selector-overlay")?.remove();const s=[{key:"my_hand",label:"<我方手牌数>"},{key:"enemy_hand",label:"<敌方手牌数>"},{key:"my_minions",label:"<我方随从数>"},{key:"enemy_minions",label:"<敌方随从数>"}],t=document.createElement("div");t.id="variable-selector-overlay",t.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9999999;display:flex;align-items:center;justify-content:center;";const r=document.createElement("div");r.style.cssText="background:#f5edd6;border-radius:12px;padding:16px;min-width:200px;max-width:280px;box-shadow:0 4px 20px rgba(0,0,0,0.3);",r.innerHTML=`
      <div style="font-weight:bold;font-size:14px;color:#5a4a3a;margin-bottom:10px;text-align:center;">变量列表</div>
      ${s.map(i=>`
        <div class="variable-option" data-variable="${i.key}"
          style="padding:8px 12px;margin:4px 0;border-radius:8px;cursor:pointer;font-size:13px;color:#5a4a3a;background:rgba(212,196,168,0.4);border:1px solid #d4c4a8;transition:all 0.15s;">
          ${i.label}
        </div>
      `).join("")}
    `,t.appendChild(r),document.body.appendChild(t),r.querySelectorAll(".variable-option").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.variable;t.remove(),e(n)}),i.addEventListener("mouseenter",()=>{i.style.background="rgba(111,168,220,0.3)",i.style.borderColor="#6fa8dc"}),i.addEventListener("mouseleave",()=>{i.style.background="rgba(212,196,168,0.4)",i.style.borderColor="#d4c4a8"})}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}openSkillIconCropModal(e,s){const t=document.getElementById("crop-modal"),r=document.getElementById("crop-canvas");if(!t||!r)return;const i=r.getContext("2d");if(!i)return;i.imageSmoothingEnabled=!1,t.style.display="flex";const n=400,a=600,o=600;r.width=a,r.height=o;const l=(a-n)/2,d=(o-n)/2,c=new FileReader;let m="";const h=new Image;h.onload=()=>{const u=h.naturalWidth,p=h.naturalHeight,b=a/u,g=o/p,y=Math.min(b,g);let x=(a-u*y)/2,w=(o-p*y)/2,f=y,v=!1,E=0,S=0,T=0,A=1,R=0,_=0,B=0,$=0;const N=()=>{i.clearRect(0,0,a,o),i.drawImage(h,x,w,u*f,p*f),i.fillStyle="rgba(0,0,0,0.5)",i.beginPath(),i.rect(0,0,a,o),i.arc(l+n/2,d+n/2,n/2,0,Math.PI*2,!0),i.fill("evenodd"),i.strokeStyle="white",i.lineWidth=2,i.setLineDash([8,6]),i.beginPath(),i.arc(l+n/2,d+n/2,n/2,0,Math.PI*2),i.stroke(),i.setLineDash([])};N();const J=F=>{v=!0,E=F.clientX,S=F.clientY},U=F=>{if(!v)return;const ee=F.clientX-E,de=F.clientY-S;x+=ee,w+=de,E=F.clientX,S=F.clientY,N()},ne=()=>{v=!1};r.addEventListener("mousedown",J),window.addEventListener("mousemove",U),window.addEventListener("mouseup",ne);const Z=(F,ee)=>Math.sqrt((F.clientX-ee.clientX)**2+(F.clientY-ee.clientY)**2),se=F=>{if(F.preventDefault(),F.touches.length===1)v=!0,E=F.touches[0].clientX,S=F.touches[0].clientY;else if(F.touches.length===2){v=!1,T=Z(F.touches[0],F.touches[1]),A=f,R=(F.touches[0].clientX+F.touches[1].clientX)/2,_=(F.touches[0].clientY+F.touches[1].clientY)/2;const ee=r.getBoundingClientRect();B=R-ee.left,$=_-ee.top,B=(B-x)/f,$=($-w)/f}},Y=F=>{if(F.preventDefault(),F.touches.length===1&&v){const ee=F.touches[0].clientX-E,de=F.touches[0].clientY-S;x+=ee,w+=de,E=F.touches[0].clientX,S=F.touches[0].clientY,N()}else if(F.touches.length===2){const ee=Z(F.touches[0],F.touches[1]),de=Math.max(.1,Math.min(A*(ee/T),5)),z=r.getBoundingClientRect(),W=(F.touches[0].clientX+F.touches[1].clientX)/2-z.left,k=(F.touches[0].clientY+F.touches[1].clientY)/2-z.top;x=W-B*de,w=k-$*de,f=de,N()}},C=F=>{F.touches.length===0&&(v=!1)};r.addEventListener("touchstart",se,{passive:!1}),r.addEventListener("touchmove",Y,{passive:!1}),r.addEventListener("touchend",C);const P=F=>{F.preventDefault();const ee=r.getBoundingClientRect(),de=F.clientX-ee.left,z=F.clientY-ee.top,W=F.deltaY>0?.97:1.03,k=Math.max(.1,f*W),j=(de-x)/f,H=(z-w)/f;x=de-j*k,w=z-H*k,f=k,N()};r.addEventListener("wheel",P,{passive:!1});const L=F=>{if(!h||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(F.key))return;F.preventDefault();const ee=2;F.key==="ArrowLeft"?x-=ee:F.key==="ArrowRight"?x+=ee:F.key==="ArrowUp"?w-=ee:F.key==="ArrowDown"&&(w+=ee),N()};document.addEventListener("keydown",L);const V=()=>{t.style.display="none",r.removeEventListener("mousedown",J),window.removeEventListener("mousemove",U),window.removeEventListener("mouseup",ne),r.removeEventListener("wheel",P),r.removeEventListener("touchstart",se),r.removeEventListener("touchmove",Y),r.removeEventListener("touchend",C),oe.removeEventListener("click",ie),Q.removeEventListener("click",V),document.removeEventListener("keydown",L)},Q=document.getElementById("crop-cancel-btn"),oe=document.getElementById("crop-confirm-btn");Q.addEventListener("click",V);const ie=async()=>{if(!h){V();return}const F=(l-x)/f,ee=(d-w)/f,de=n/f,z=n/f,W=document.createElement("canvas");W.width=n,W.height=n;const k=W.getContext("2d");if(!k){V();return}k.imageSmoothingEnabled=!1,k.drawImage(h,F,ee,de,z,0,0,n,n);const j=W.toDataURL("image/png");try{const{bgDataUrl:H}=await this.generateAtmosphereBackground(j),D=new Image;D.onload=()=>{const M=document.createElement("canvas");M.width=100,M.height=100;const O=M.getContext("2d");if(!O){V();return}O.imageSmoothingEnabled=!1,O.beginPath(),O.arc(50,50,50,0,Math.PI*2),O.closePath(),O.save(),O.clip();const q=Math.max(100/D.naturalWidth,100/D.naturalHeight),K=D.naturalWidth*q,G=D.naturalHeight*q,ae=(100-K)/2,re=(100-G)/2;O.drawImage(D,ae,re,K,G),O.drawImage(W,0,0,n,n,0,0,100,100),O.restore();const te=M.toDataURL("image/png");this.heroSkills[s]&&(this.heroSkills[s].iconData=te),this.render(),V()},D.src=H}catch(H){alert("生成氛围感背景失败："+H.message),V()}};document.getElementById("crop-hcenter-btn")?.addEventListener("click",()=>{h&&(x=l+n/2-h.naturalWidth*f/2,N())}),document.getElementById("crop-vcenter-btn")?.addEventListener("click",()=>{h&&(w=d+n/2-h.naturalHeight*f/2,N())}),document.getElementById("crop-cover-btn")?.addEventListener("click",()=>{if(!h)return;const F=n/h.naturalWidth,ee=n/h.naturalHeight;f=Math.max(F,ee),x=l+n/2-h.naturalWidth*f/2,w=d+n/2-h.naturalHeight*f/2,N()}),document.getElementById("crop-contain-btn")?.addEventListener("click",()=>{if(!h)return;const F=n/h.naturalWidth,ee=n/h.naturalHeight;f=Math.min(F,ee),x=l+n/2-h.naturalWidth*f/2,w=d+n/2-h.naturalHeight*f/2,N()}),oe.addEventListener("click",ie)},c.onload=()=>{m=c.result,h.src=m},c.readAsDataURL(e)}attachCardCreatorEvents(){document.getElementById("side-panel-handle")?.addEventListener("click",()=>{this.showSidePanel=!this.showSidePanel,this.renderCardCreator()}),document.getElementById("close-side-panel-btn")?.addEventListener("click",()=>{this.showSidePanel=!1,this.renderCardCreator()}),document.getElementById("toggle-side-panel-btn")?.addEventListener("click",()=>{this.showSidePanel=!this.showSidePanel,this.renderCardCreator()}),document.getElementById("card-type-minion")?.addEventListener("click",()=>{this.currentCard.type="minion",this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("card-type-spell")?.addEventListener("click",()=>{this.currentCard.type="spell",(!this.currentCard.effects||this.currentCard.effects.length===0)&&(this.currentCard.effects=[{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}]),this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("card-type-minion-side")?.addEventListener("click",()=>{this.currentCard.type="minion",this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("card-type-spell-side")?.addEventListener("click",()=>{this.currentCard.type="spell",(!this.currentCard.effects||this.currentCard.effects.length===0)&&(this.currentCard.effects=[{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}]),this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("add-derived-card-btn")?.addEventListener("click",()=>{this.addDerivedCard(),this.renderCardCreator()}),document.querySelectorAll(".card-list-item").forEach(C=>{C.addEventListener("click",P=>{if(P.target.classList.contains("card-list-delete-btn"))return;const V=parseInt(C.dataset.cardIndex||"0",10);this.currentCardIndex=V,this.currentEffectIndex=0,this.renderCardCreator()})}),document.querySelectorAll(".card-list-delete-btn").forEach(C=>{C.addEventListener("click",P=>{P.stopPropagation();const L=parseInt(C.dataset.cardIndex||"0",10);L!==0&&(this.deleteDerivedCard(L),this.renderCardCreator())})}),document.getElementById("prev-card-btn")?.addEventListener("click",()=>{this.currentCardIndex=(this.currentCardIndex-1+this.editingCards.length)%this.editingCards.length,this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("next-card-btn")?.addEventListener("click",()=>{this.currentCardIndex=(this.currentCardIndex+1)%this.editingCards.length,this.currentEffectIndex=0,this.renderCardCreator()}),document.querySelectorAll(".spell-target-item").forEach(C=>{C.addEventListener("click",()=>{const P=C.dataset.spellTarget,L=this.currentCard.effects?.[this.currentEffectIndex];if(!L)return;L.targets||(L.targets=[]);const V=C.closest(".target-scroll-container"),Q=document.querySelectorAll(".target-scroll-container"),oe=Array.from(Q).indexOf(V);if(this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:V?V.scrollTop:0,containerIndex:oe>=0?oe:0},["无需目标","卡牌","选择目标","选择随从"].includes(P))L.targets.includes(P)?L.targets=[]:(L.targets=[P],this.showTargetPanel=!1);else if(L.targets.some(F=>["无需目标","卡牌","选择目标","选择随从"].includes(F)))L.targets=[P];else{const F=L.targets.indexOf(P);F>=0?L.targets.splice(F,1):L.targets.push(P)}this.showEffectPanel=!0,this.renderCardCreator()})}),document.querySelectorAll(".spell-moment-item").forEach(C=>{C.addEventListener("click",()=>{const P=C.dataset.spellMoment,L=this.currentCard.effects?.[this.currentEffectIndex],V=!!L?.moment;if(L&&(L.moment=P,(P==="打出时"||P==="死亡时")&&L.effect==="变化"&&(L.effect=null,L.summonedCardIndex=void 0),P==="打出时"&&L.effect==="召唤"&&L.summonedCardIndex===this.currentCardIndex)){const Q=this.editingCards.map((oe,ie)=>ie).filter(oe=>!(this.editingCards[oe].type==="spell"||oe===this.currentCardIndex));L.summonedCardIndex=Q.length>0?Q[0]:0}V||(this.showMomentPanel=!1),this.renderCardCreator()})}),document.querySelectorAll(".spell-effect-item").forEach(C=>{C.addEventListener("click",()=>{const P=C.dataset.spellEffectType,L=this.currentCard.effects?.[this.currentEffectIndex];if(L&&(L.effect=P,["召唤","获得","变化"].includes(P))){L.value=1;const V=this.editingCards.map((Q,oe)=>oe).filter(Q=>!((P==="变化"||P==="召唤")&&this.editingCards[Q].type==="spell"||P==="变化"&&Q===this.currentCardIndex||P==="召唤"&&Fe(L,"打出时")&&Q===this.currentCardIndex));L.summonedCardIndex=V.length>0?V[0]:0}this.showEffectPanel=!1,this.renderCardCreator()})}),document.getElementById("toggle-spell-target-btn")?.addEventListener("click",()=>{this.showTargetPanel=!this.showTargetPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-target-btn-side")?.addEventListener("click",()=>{this.showTargetPanel=!this.showTargetPanel,this.renderCardCreator()});const e=document.getElementById("opponent-checkbox-spell-side");e?.addEventListener("click",C=>{C.stopPropagation()}),e?.addEventListener("change",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.isOpponent=C.target.checked,this.renderCardCreator())});const s=document.getElementById("opponent-checkbox-spell");s?.addEventListener("click",C=>{C.stopPropagation()}),s?.addEventListener("change",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.isOpponent=C.target.checked,this.renderCardCreator())}),document.getElementById("toggle-spell-moment-btn")?.addEventListener("click",()=>{this.showMomentPanel=!this.showMomentPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-moment-btn-side")?.addEventListener("click",()=>{this.showMomentPanel=!this.showMomentPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-effect-btn")?.addEventListener("click",()=>{this.showEffectPanel=!this.showEffectPanel,this.renderCardCreator()}),document.getElementById("spell-effect-value")?.addEventListener("input",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.value=Math.max(1,parseInt(C.target.value)||1)),this.updateCardPreview()}),document.querySelectorAll(".element-select-btn").forEach(C=>{C.addEventListener("click",()=>{const P=C,L=P.dataset.elementType||void 0;P.dataset.spell;const V=this.currentCard.effects?.[this.currentEffectIndex];V&&(V.elementType=L,this.updateCardPreview(),this.renderCardCreator())})}),document.querySelectorAll(".spell-summon-source-btn").forEach(C=>{C.addEventListener("click",()=>{const P=C.dataset.source,L=this.currentCard.effects?.[this.currentEffectIndex];L&&L.effect&&["召唤","获得","变化","属性变化"].includes(L.effect)&&(L.summonSource=P,this.updateEffectDescription(),this.renderCardCreator())})}),document.querySelectorAll(".spell-summon-card-item").forEach(C=>{C.addEventListener("click",()=>{const P=parseInt(C.dataset.spellSummonIndex||"0"),L=this.currentCard.effects?.[this.currentEffectIndex];if(L&&L.effect&&["召唤","获得","变化"].includes(L.effect)){if(L.isRandom){const V=L.summonedCardIndices??[];V.includes(P)?L.summonedCardIndices=V.filter(Q=>Q!==P):L.summonedCardIndices=[...V,P],L.summonedCardIndex=L.summonedCardIndices[0]??0}else L.summonedCardIndex=P,L.summonedCardIndices=void 0;this.updateCardPreview(),this.renderCardCreator()}})}),document.getElementById("spell-summon-random-checkbox")?.addEventListener("change",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&P.effect&&["召唤","获得","变化","属性变化"].includes(P.effect)&&(P.isRandom=C.target.checked,!P.isRandom&&P.summonedCardIndices&&P.summonedCardIndices.length>0?(P.summonedCardIndex=P.summonedCardIndices[0],P.summonedCardIndices=void 0):P.isRandom&&P.summonedCardIndex!==void 0&&(P.summonedCardIndices=[P.summonedCardIndex]),this.updateCardPreview(),this.renderCardCreator())}),document.getElementById("spell-summon-count-input")?.addEventListener("change",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];if(P&&P.effect&&["召唤","获得"].includes(P.effect)){const L=parseInt(C.target.value)||1;P.value=Math.max(1,L),this.updateCardPreview(),this.renderCardCreator()}}),document.getElementById("spell-attack-value")?.addEventListener("input",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.attackValue=Math.max(0,parseInt(C.target.value)||0)),this.updateCardPreview()}),document.getElementById("spell-health-value")?.addEventListener("input",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.healthValue=Math.max(0,parseInt(C.target.value)||0)),this.updateCardPreview()}),document.getElementById("spell-attack-positive-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isAttackSet=!1,C.isAttackPositive=!0,C.attackValue===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-zero-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.attackValue=0,C.healthValue===0&&(C.costValue||0)===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-negative-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isAttackSet=!1,C.isAttackPositive=!1,C.attackValue===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-set-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isAttackSet=!0,C.attackValue===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-positive-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isHealthSet=!1,C.isHealthPositive=!0,C.healthValue===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-zero-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.healthValue=0,C.attackValue===0&&(C.costValue||0)===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-negative-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isHealthSet=!1,C.isHealthPositive=!1,C.healthValue===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-set-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isHealthSet=!0,C.healthValue===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-cost-positive-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isCostSet=!1,C.isCostPositive=!0,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("spell-cost-zero-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.costValue=0,this.renderCardCreator())}),document.getElementById("spell-cost-negative-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isCostSet=!1,C.isCostPositive=!1,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("spell-cost-set-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isCostSet=!0,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("spell-effect-value-side")?.addEventListener("input",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.value=Math.max(1,parseInt(C.target.value)||1)),this.renderCardCreator()}),document.getElementById("spell-attack-value-side")?.addEventListener("input",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.attackValue=Math.max(0,parseInt(C.target.value)||0)),this.renderCardCreator()}),document.getElementById("spell-health-value-side")?.addEventListener("input",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.healthValue=Math.max(0,parseInt(C.target.value)||0)),this.renderCardCreator()}),document.getElementById("spell-attack-positive-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isAttackSet=!1,C.isAttackPositive=!0,C.attackValue===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-zero-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.attackValue=0,C.healthValue===0&&(C.costValue||0)===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-negative-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isAttackSet=!1,C.isAttackPositive=!1,C.attackValue===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-set-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isAttackSet=!0,C.attackValue===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-positive-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isHealthSet=!1,C.isHealthPositive=!0,C.healthValue===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-zero-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.healthValue=0,C.attackValue===0&&(C.costValue||0)===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-negative-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isHealthSet=!1,C.isHealthPositive=!1,C.healthValue===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-set-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isHealthSet=!0,C.healthValue===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-cost-positive-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isCostSet=!1,C.isCostPositive=!0,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("spell-cost-zero-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.costValue=0,this.renderCardCreator())}),document.getElementById("spell-cost-negative-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isCostSet=!1,C.isCostPositive=!1,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("spell-cost-set-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isCostSet=!0,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("toggle-keywords-btn")?.addEventListener("click",()=>{this.showKeywordsPanel=!this.showKeywordsPanel,this.renderCardCreator()}),document.getElementById("toggle-keywords-section-btn")?.addEventListener("click",()=>{this.showKeywordsPanel=!this.showKeywordsPanel,this.renderCardCreator()}),document.getElementById("toggle-moment-btn")?.addEventListener("click",()=>{this.showMomentPanel=!this.showMomentPanel,this.renderCardCreator()}),document.querySelectorAll(".trigger-num-btn").forEach(C=>{C.addEventListener("click",P=>{P.stopPropagation();const L=parseInt(C.dataset.triggerNum||"1",10),V=C.dataset.editor;let Q=null;if(V==="spell"?Q=this.currentCard.effects?.[this.currentEffectIndex]||null:Q=this.currentCard.effects?.[this.currentEffectIndex]||null,!Q)return;Q.triggerNumbers||(Q.triggerNumbers=[1,2,3,4,5,6]);const oe=Q.triggerNumbers.indexOf(L);if(oe>=0){if(Q.triggerNumbers.length===1)return;Q.triggerNumbers.splice(oe,1)}else Q.triggerNumbers.push(L),Q.triggerNumbers.sort((ie,F)=>ie-F);this.renderCardCreator()})}),document.getElementById("toggle-condition-btn")?.addEventListener("click",()=>{this.showConditionPanel=!this.showConditionPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-condition-btn-side")?.addEventListener("click",()=>{this.showConditionPanel=!this.showConditionPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-condition-btn")?.addEventListener("click",()=>{this.showConditionPanel=!this.showConditionPanel,this.renderCardCreator()}),document.getElementById("toggle-condition-spell-effect-btn")?.addEventListener("click",()=>{this.showConditionPanel=!this.showConditionPanel,this.renderCardCreator()}),document.querySelectorAll(".condition-item").forEach(C=>{C.addEventListener("click",P=>{P.stopPropagation();const L=C.dataset.condition,V=this.currentCard.effects?.[this.currentEffectIndex];V&&(this.setConditionType(L,V),this.renderCardCreator())})}),document.querySelectorAll(".condition-item-spell").forEach(C=>{C.addEventListener("click",P=>{P.stopPropagation();const L=C.dataset.spellCondition,V=this.currentCard.effects?.[this.currentEffectIndex];V&&(this.setConditionType(L,V),this.renderCardCreator())})}),document.querySelectorAll(".spell-condition-item-side").forEach(C=>{C.addEventListener("click",P=>{P.stopPropagation();const L=C.dataset.spellConditionSide,V=this.currentCard.effects?.[this.currentEffectIndex];V&&(this.setConditionType(L,V),this.renderCardCreator())})}),document.querySelectorAll(".spell-condition-item").forEach(C=>{C.addEventListener("click",P=>{P.stopPropagation();const L=C.dataset.spellCondition,V=this.currentCard.effects?.[this.currentEffectIndex];V&&(this.setConditionType(L,V),this.renderCardCreator())})}),document.getElementById("toggle-target-btn")?.addEventListener("click",()=>{this.showTargetPanel=!this.showTargetPanel,this.renderCardCreator()});const t=document.getElementById("random-target-check");t?.addEventListener("click",C=>{C.stopPropagation()}),t?.addEventListener("change",C=>{const P=this.currentCard.effects[this.currentEffectIndex];if(P){P.isRandomTarget=C.target.checked,this.renderCardCreator();const L=document.getElementById("toggle-target-btn");L&&L.scrollIntoView({behavior:"instant",block:"nearest"})}});const r=document.getElementById("random-target-check-spell-side");r?.addEventListener("click",C=>{C.stopPropagation()}),r?.addEventListener("change",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];if(P){const L=document.querySelector(".target-scroll-container");L&&(this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:L.scrollTop}),P.isRandomTarget=C.target.checked,this.renderCardCreator()}});const i=document.getElementById("random-target-check-spell");i?.addEventListener("click",C=>{C.stopPropagation()}),i?.addEventListener("change",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];if(P){const L=document.querySelector(".target-scroll-container");L&&(this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:L.scrollTop}),P.isRandomTarget=C.target.checked,this.renderCardCreator()}}),document.getElementById("random-target-times-spell-side")?.addEventListener("change",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.randomTargetTimes=Math.max(1,parseInt(C.target.value)||1),this.renderCardCreator())}),document.getElementById("random-target-times-spell")?.addEventListener("change",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.randomTargetTimes=Math.max(1,parseInt(C.target.value)||1),this.renderCardCreator())});const n=document.getElementById("opponent-target-check");n?.addEventListener("click",C=>{C.stopPropagation()}),n?.addEventListener("change",C=>{const P=this.currentCard.effects[this.currentEffectIndex];if(P){P.isOpponent=C.target.checked,this.renderCardCreator();const L=document.getElementById("toggle-target-btn");L&&L.scrollIntoView({behavior:"instant",block:"nearest"})}}),document.getElementById("variable-select-btn")?.addEventListener("click",()=>{this.openVariableSelectorModal(C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.variableChange?P.variableChange.variable=C:P.variableChange={variable:C,increase:!0,decrease:!0},this.renderCardCreator())})}),document.getElementById("variable-select-btn-lg")?.addEventListener("click",()=>{this.openVariableSelectorModal(C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.variableChange?P.variableChange.variable=C:P.variableChange={variable:C,increase:!0,decrease:!0},this.renderCardCreator())})});const a=document.getElementById("var-increase-check"),o=document.getElementById("var-decrease-check");a?.addEventListener("click",C=>C.stopPropagation()),o?.addEventListener("click",C=>C.stopPropagation()),a?.addEventListener("change",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.variableChange||(P.variableChange={variable:"my_hand",increase:!0,decrease:!0}),P.variableChange.increase=C.target.checked,this.renderCardCreator())}),o?.addEventListener("change",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.variableChange||(P.variableChange={variable:"my_hand",increase:!0,decrease:!0}),P.variableChange.decrease=C.target.checked,this.renderCardCreator())});const l=document.getElementById("var-increase-check-lg"),d=document.getElementById("var-decrease-check-lg");l?.addEventListener("click",C=>C.stopPropagation()),d?.addEventListener("click",C=>C.stopPropagation()),l?.addEventListener("change",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.variableChange||(P.variableChange={variable:"my_hand",increase:!0,decrease:!0}),P.variableChange.increase=C.target.checked,this.renderCardCreator())}),d?.addEventListener("change",C=>{const P=this.currentCard.effects?.[this.currentEffectIndex];P&&(P.variableChange||(P.variableChange={variable:"my_hand",increase:!0,decrease:!0}),P.variableChange.decrease=C.target.checked,this.renderCardCreator())}),document.getElementById("toggle-effect-btn")?.addEventListener("click",()=>{this.showEffectPanel=!this.showEffectPanel,this.renderCardCreator()}),document.getElementById("card-name")?.addEventListener("input",C=>{this.currentCard.name=C.target.value,this.updateCardPreview()}),document.getElementById("card-cost")?.addEventListener("input",C=>{this.currentCard.cost=Math.min(20,Math.max(0,parseInt(C.target.value)||0)),this.updateCardPreview()}),document.getElementById("card-attack")?.addEventListener("input",C=>{this.currentCard.attack=Math.max(0,parseInt(C.target.value)||0),this.updateCardPreview()}),document.getElementById("card-health")?.addEventListener("input",C=>{this.currentCard.health=Math.max(1,parseInt(C.target.value)||1),this.updateCardPreview()}),document.getElementById("card-armor")?.addEventListener("input",C=>{const P=Math.max(1,parseInt(C.target.value)||1);this.currentCard.armorValue=P,this.currentCard.keywords&&(this.currentCard.keywords=this.currentCard.keywords.map(L=>L.name==="护甲"?{...L,value:P}:L)),this.updateCardPreview()}),document.getElementById("card-preparation")?.addEventListener("input",C=>{const P=Math.max(1,parseInt(C.target.value)||1);this.currentCard.preparationValue=P,this.currentCard.keywords&&(this.currentCard.keywords=this.currentCard.keywords.map(L=>L.name==="准备"?{...L,value:P}:L)),this.updateCardPreview()}),document.getElementById("reset-card-btn")?.addEventListener("click",()=>{const C=this.currentCard.type;this.initCardsArray(C),this.renderCardCreator()}),document.getElementById("effect-value")?.addEventListener("input",C=>{const P=this.getCurrentEffect();P&&(P.value=Math.max(1,parseInt(C.target.value)||1),this.updateEffectDescription())}),document.querySelectorAll(".grant-keyword-item").forEach(C=>{C.addEventListener("click",()=>{const P=C.dataset.grantKeyword,L=this.getCurrentEffect();L&&L.effect==="给予词条"&&(L.grantedKeywordName===P?(L.grantedKeywordName="",L.grantedKeywordValue=void 0):(L.grantedKeywordName=P,P==="护甲"||["🔥","❄️","⚡️"].includes(P)?L.grantedKeywordValue=L.grantedKeywordValue??1:L.grantedKeywordValue=void 0),this.updateEffectDescription(),this.renderCardCreator())})}),document.getElementById("grant-keyword-value")?.addEventListener("input",C=>{const P=this.getCurrentEffect();P&&P.effect==="给予词条"&&(P.grantedKeywordValue=Math.max(1,parseInt(C.target.value)||1),this.updateEffectDescription())}),document.querySelectorAll(".summon-source-btn, .summon-source-btn-2").forEach(C=>{C.addEventListener("click",()=>{const P=C.dataset.source,L=this.getCurrentEffect();L&&L.effect&&["召唤","获得","变化","属性变化"].includes(L.effect)&&(L.summonSource=P,this.updateEffectDescription(),this.renderCardCreator())})}),document.querySelectorAll(".summon-card-item").forEach(C=>{C.addEventListener("click",()=>{const P=parseInt(C.dataset.summonIndex||"0"),L=this.getCurrentEffect();if(L&&L.effect&&["召唤","获得","变化"].includes(L.effect)){if(L.isRandom){const V=L.summonedCardIndices??[];V.includes(P)?L.summonedCardIndices=V.filter(Q=>Q!==P):L.summonedCardIndices=[...V,P],L.summonedCardIndex=L.summonedCardIndices[0]??0}else L.summonedCardIndex=P,L.summonedCardIndices=void 0;this.updateEffectDescription(),this.renderCardCreator()}})}),["summon-random-checkbox","summon-random-checkbox-2","attr-random-checkbox-2"].forEach(C=>{document.getElementById(C)?.addEventListener("change",P=>{const L=this.getCurrentEffect();L&&L.effect&&["召唤","获得","变化","属性变化"].includes(L.effect)&&(L.isRandom=P.target.checked,!L.isRandom&&L.summonedCardIndices&&L.summonedCardIndices.length>0?(L.summonedCardIndex=L.summonedCardIndices[0],L.summonedCardIndices=void 0):L.isRandom&&L.summonedCardIndex!==void 0&&(L.summonedCardIndices=[L.summonedCardIndex]),this.updateEffectDescription(),this.renderCardCreator())})}),["summon-count-input","summon-count-input-2"].forEach(C=>{document.getElementById(C)?.addEventListener("change",P=>{const L=this.getCurrentEffect();if(L&&L.effect&&["召唤","获得"].includes(L.effect)){const V=parseInt(P.target.value)||1;L.value=Math.max(1,V),this.updateEffectDescription(),this.renderCardCreator()}})}),document.getElementById("positive-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isPositive=!0,this.renderCardCreator())}),document.getElementById("negative-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isPositive=!1,this.renderCardCreator())}),document.getElementById("clear-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects[this.currentEffectIndex]=this.createDefaultEffect(),this.renderCardCreator()});const c={rage:["连击","狂怒"],"🔥":["🔥","❄️","⚡️"],机动:["机动","嘲讽"]},m={};Object.values(c).forEach(C=>{C.forEach(P=>{m[P]=C})}),document.querySelectorAll(".keyword-item").forEach(C=>{C.addEventListener("click",P=>{P.preventDefault(),P.stopPropagation();const L=C.closest(".keyword-scroll-container"),V=document.querySelectorAll(".keyword-scroll-container"),Q=Array.from(V).indexOf(L);this.pendingScrollRestoration={selector:".keyword-scroll-container",scrollTop:L?L.scrollTop:0,containerIndex:Q>=0?Q:0};const oe=C.dataset.keywordName,ie=Object.values(Ee).find(F=>F.name===oe);if(ie){["🔥","❄️","⚡️"].includes(oe)?(this.lastElementKeyword===oe?this.elementClickCount++:(this.elementClickCount=1,this.lastElementKeyword=oe),this.elementClickCount>=6&&(this.elementClickCount=0,this.lastElementKeyword=null,this.triggerEditorExplosion(oe))):(this.elementClickCount=0,this.lastElementKeyword=null);const ee=this.currentCard.keywords.findIndex(de=>de.name===oe);if(ee>=0)this.currentCard.keywords.splice(ee,1);else{const de=m[oe];if(de&&(this.currentCard.keywords=this.currentCard.keywords.filter(z=>!de.includes(z.name))),ie.hasValue){const z=ie.name==="护甲"?this.currentCard.armorValue:ie.name==="准备"?this.currentCard.preparationValue:1;this.currentCard.keywords.push({...ie,value:z})}else this.currentCard.keywords.push(ie)}this.renderCardCreator()}})}),document.querySelectorAll(".clear-keywords-btn").forEach(C=>{C.addEventListener("click",P=>{P.preventDefault(),P.stopPropagation(),this.currentCard.keywords=[],this.renderCardCreator()})}),document.querySelectorAll(".effect-tab").forEach(C=>{C.addEventListener("click",()=>{const P=parseInt(C.dataset.effectIndex||"0");this.currentEffectIndex=P,this.renderCardCreator()})}),document.getElementById("add-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects||(this.currentCard.effects=[]),this.currentCard.effects.push(this.createDefaultEffect()),this.currentEffectIndex=this.currentCard.effects.length-1,this.showMomentPanel=!0,this.renderCardCreator()}),document.getElementById("remove-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects&&this.currentCard.effects.length>0&&(this.currentCard.effects.pop(),this.currentEffectIndex>=this.currentCard.effects.length&&(this.currentEffectIndex=Math.max(0,this.currentCard.effects.length-1)),this.renderCardCreator())}),document.getElementById("add-spell-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects||(this.currentCard.effects=[]),this.currentCard.effects.push({moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0,randomTargetTimes:1}),this.currentEffectIndex=this.currentCard.effects.length-1,this.renderCardCreator()}),document.getElementById("remove-spell-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects&&this.currentCard.effects.length>1&&(this.currentCard.effects.pop(),this.currentEffectIndex>=this.currentCard.effects.length&&(this.currentEffectIndex=Math.max(0,this.currentCard.effects.length-1)),this.renderCardCreator())}),document.querySelectorAll(".moment-item").forEach(C=>{C.addEventListener("click",()=>{const P=this.getCurrentEffect();if(P){const L=C.dataset.moment;P.moments||(P.moments=P.moment?[P.moment]:[]);const V=P.moments.length>0,Q=P.moments.indexOf(L);Q>=0?P.moments.splice(Q,1):P.moments.push(L),P.moment=P.moments.length>0?P.moments[0]:null,P.moments.length===1&&!V&&(P.targets=[],P.effect=null,this.showMomentPanel=!1,this.showTargetPanel=!0)}this.renderCardCreator()})}),document.querySelectorAll(".target-item").forEach(C=>{C.addEventListener("click",()=>{const P=this.getCurrentEffect();if(!P)return;const L=C.closest(".target-scroll-container"),V=document.querySelectorAll(".target-scroll-container"),Q=Array.from(V).indexOf(L);this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:L?L.scrollTop:0,containerIndex:Q>=0?Q:0};const oe=C.dataset.target,ie=P.targets;if(["无需目标","卡牌","选择目标","选择随从","攻击目标"].includes(oe))ie.includes(oe)?P.targets=[]:(P.targets=[oe],this.showTargetPanel=!1);else if(ie.some(ee=>["无需目标","卡牌","选择目标","选择随从","攻击目标"].includes(ee)))P.targets=[oe];else{const ee=ie.indexOf(oe);ee>=0?ie.splice(ee,1):ie.push(oe)}P.effect=null,this.showEffectPanel=!0,this.renderCardCreator()})}),document.querySelectorAll(".effect-item").forEach(C=>{C.addEventListener("click",()=>{const P=this.getCurrentEffect();if(!P)return;const L=C.dataset.effect;if(P.effect=L,L==="造成伤害")P.value=1;else if(L==="抽牌")P.value=1;else if(L==="弃牌")P.value=1;else if(L==="属性变化")P.attackValue=1,P.healthValue=1,P.isAttackPositive=!0,P.isHealthPositive=!0;else if(L==="给予印记")P.value=1;else if(["召唤","获得","变化"].includes(L)){P.value=1;const V=this.editingCards.map((Q,oe)=>oe).filter(Q=>!((L==="变化"||L==="召唤")&&this.editingCards[Q].type==="spell"||L==="变化"&&Q===this.currentCardIndex||L==="召唤"&&Fe(P,"打出时")&&Q===this.currentCardIndex));P.summonedCardIndex=V.length>0?V[0]:0}this.showEffectPanel=!1,this.renderCardCreator()})}),document.getElementById("effect-attack-value")?.addEventListener("input",C=>{const P=this.getCurrentEffect();if(P){const L=parseInt(C.target.value);P.attackValue=isNaN(L)?0:Math.max(0,Math.min(99,L)),this.updateEffectDescription(),this.updateCardPreview()}}),document.getElementById("effect-health-value")?.addEventListener("input",C=>{const P=this.getCurrentEffect();if(P){const L=parseInt(C.target.value);P.healthValue=isNaN(L)?0:Math.max(0,Math.min(99,L)),this.updateEffectDescription(),this.updateCardPreview()}}),document.getElementById("attack-positive-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isAttackSet=!1,C.isAttackPositive=!0,C.attackValue===0&&(C.attackValue=1),this.renderCardCreator())}),document.getElementById("attack-zero-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.attackValue=0,C.healthValue===0&&(C.costValue||0)===0&&(C.healthValue=1),this.renderCardCreator())}),document.getElementById("attack-negative-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isAttackSet=!1,C.isAttackPositive=!1,C.attackValue===0&&(C.attackValue=1),this.renderCardCreator())}),document.getElementById("attack-set-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isAttackSet=!0,C.attackValue===0&&(C.attackValue=1),this.renderCardCreator())}),document.getElementById("health-positive-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isHealthSet=!1,C.isHealthPositive=!0,C.healthValue===0&&(C.healthValue=1),this.renderCardCreator())}),document.getElementById("health-zero-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.healthValue=0,C.attackValue===0&&(C.costValue||0)===0&&(C.attackValue=1),this.renderCardCreator())}),document.getElementById("health-negative-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isHealthSet=!1,C.isHealthPositive=!1,C.healthValue===0&&(C.healthValue=1),this.renderCardCreator())}),document.getElementById("health-set-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isHealthSet=!0,C.healthValue===0&&(C.healthValue=1),this.renderCardCreator())}),document.getElementById("cost-positive-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isCostSet=!1,C.isCostPositive=!0,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("cost-zero-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.costValue=0,this.renderCardCreator())}),document.getElementById("cost-negative-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isCostSet=!1,C.isCostPositive=!1,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("cost-set-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isCostSet=!0,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("add-to-deck-btn")?.addEventListener("click",async()=>{if(this.editingCards.some((z,W)=>(z.effects||[]).some(j=>j.effect==="召唤"?j.summonSource&&j.summonSource!=="derived"?!1:this.editingCards.filter((D,M)=>!(this.editingCards[M].type==="spell"||Fe(j,"打出时")&&M===W)).length===0||j.summonedCardIndex!==void 0&&this.editingCards[j.summonedCardIndex]?.type==="spell":j.effect==="获得"?j.summonSource&&j.summonSource!=="derived"?!1:this.editingCards.length===0:j.effect==="变化"?j.summonSource&&j.summonSource!=="derived"?!1:!!(this.editingCards.filter((D,M)=>!(this.editingCards[M].type==="spell"||M===W)).length===0||this.momentsInclude(j.moment,"打出时")||this.momentsInclude(j.moment,"死亡时")||j.summonedCardIndex!==void 0&&this.editingCards[j.summonedCardIndex]?.type==="spell"):!1))){alert("存在无效的召唤/变化效果（不能选择法术牌，打出时/死亡时不能变化），请修改后再试");return}const P=this.editingCards[0],L=P.keywords.map(z=>z.name==="护甲"?{...z,value:P.armorValue}:z.name==="准备"?{...z,value:P.preparationValue}:z);let V="";const oe=(P.effects||[]).filter(z=>z.moment&&z.effect);if(P.type==="spell"){const z=(P.effects||[]).filter(W=>W.effect);if(z.length>0){const W=[];z.forEach(k=>{const j=k.targets||[],H=this.mergeTargets(j);let D=H.length>0&&!H.includes("无需目标")&&!H.includes("卡牌")?`对${H.join("、")}`:"";k.isRandomTarget&&D&&(D+="中的随机一个");const M=k.isRandomTarget&&k.randomTargetTimes&&k.randomTargetTimes>1?`${k.randomTargetTimes}次`:"",O=k.moments||(k.moment?[k.moment]:[]),q=O.length===1&&O[0]==="打出时"?"":O.map(ae=>$e[ae]||"").join(""),K=k.isOpponent?"对手":"";let G="";if(k.triggerNumbers&&k.triggerNumbers.length>0&&([1,2,3,4,5,6].every(te=>k.triggerNumbers.includes(te))||(G=`🎲${k.triggerNumbers.length}/6`)),k.effect==="造成伤害"){const ae=k.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[k.elementType]||"";W.push(`${q}${K}${D}造成${k.value}点${ae}伤害${G}${M}`)}else if(k.effect==="抽牌")W.push(`${q}${K}抽${k.value}张牌${G}`);else if(k.effect==="弃牌")W.push(`${q}${K}弃${k.value}张牌${G}`);else if(k.effect==="属性变化")if(k.targets?.includes("卡牌")){const ae=k.summonSource||"my_hand",re=Ie(ae,!!k.isRandom),te=k.isRandom?"中的随机一个":"",X=k.isCostSet?"=":k.isCostPositive?"+":"-",ce=k.isAttackSet?"=":k.isAttackPositive?"+":"-",he=k.isHealthSet?"=":k.isHealthPositive?"+":"-",ge=k.costValue||0,ye=k.attackValue||0,pe=k.healthValue||0;let Ce=[];ge!==0&&Ce.push(`费用${X}${ge}`),ye!==0&&Ce.push(`攻击${ce}${ye}`),pe!==0&&Ce.push(`血量${he}${pe}`),Ce.length===0&&Ce.push("无变化"),W.push(`${q}${K}使${re}${te}${Ce.join("/")}${G}${M}`)}else{const ae=k.isAttackPositive?"+":"-",re=k.isHealthPositive?"+":"-",te=k.attackValue||0,X=k.healthValue||0;let ce="";te===0&&X!==0?ce=`${re}${X}血量`:X===0&&te!==0?ce=`${ae}${te}攻击`:ce=`${ae}${te}/${re}${X}`,W.push(`${q}${K}${D}${ce}${G}${M}`)}else if(k.effect==="给予印记")W.push(`${q}${K}${D}给予${k.value}点印记${G}${M}`);else if(k.effect==="治愈")W.push(`${q}${K}${D}治愈${k.value}点生命${G}${M}`);else if(k.effect==="获得能量")W.push(`${q}${K}获得${k.value}点能量${G}`);else if(k.effect==="失去能量")W.push(`${q}${K}失去${k.value}点能量${G}`);else if(k.effect==="召唤"){const ae=k.summonSource||"derived";if(ae!=="derived"){const re=Ie(ae,!!k.isRandom),te=k.isRandom?"中的随机一个":"";W.push(`${q}${K}召唤${k.value||1}张${re}${te}${G}`)}else if(this.editingCards.filter((te,X)=>!(Fe(k,"打出时")&&X===0)).length===0)W.push(`${q}${K}召唤${k.value||1}张${G}`);else if(k.isRandom&&k.summonedCardIndices&&k.summonedCardIndices.length>1){const te=k.summonedCardIndices.map(X=>this.editingCards[X]?.name||"衍生随从");W.push(`${q}${K}召唤${k.value||1}张${te.join("、")}中的随机一个${G}`)}else{const te=k.summonedCardIndex??0,ce=this.editingCards[te]?.name||"衍生随从";W.push(`${q}${K}召唤${k.value||1}张${ce}`)}}}),V=W.join("；")}}else if(oe.length>0){const z=new Map;oe.forEach(k=>{const j=k.targets||[],H=this.mergeTargets(j);let D=H.length>0&&!H.includes("无需目标")&&!H.includes("卡牌")?`对${H.join("、")}`:"";k.isRandomTarget&&D&&(D+="中的随机一个"),(k.moments||(k.moment?[k.moment]:[])).map(G=>$e[G]||"").join("");let O="";const q=k.isOpponent?"对手":"";let K="";if(k.triggerNumbers&&k.triggerNumbers.length>0&&([1,2,3,4,5,6].every(re=>k.triggerNumbers.includes(re))||(K=`🎲${k.triggerNumbers.length}/6`)),k.effect==="造成伤害"){const G=k.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[k.elementType]||"";O=`${q}${D}造成${k.value}点${G}伤害${K}`}else if(k.effect==="抽牌")O=`${q}抽${k.value}张牌${K}`;else if(k.effect==="弃牌")O=`${q}弃${k.value}张牌${K}`;else if(k.effect==="属性变化")if(k.targets?.includes("卡牌")){const G=k.summonSource||"my_hand",ae=Ie(G,!!k.isRandom),re=k.isRandom?"中的随机一个":"",te=k.isCostSet?"=":k.isCostPositive?"+":"-",X=k.isAttackSet?"=":k.isAttackPositive?"+":"-",ce=k.isHealthSet?"=":k.isHealthPositive?"+":"-",he=k.costValue||0,ge=k.attackValue||0,ye=k.healthValue||0;let pe=[];he!==0&&pe.push(`费用${te}${he}`),ge!==0&&pe.push(`攻击${X}${ge}`),ye!==0&&pe.push(`血量${ce}${ye}`),pe.length===0&&pe.push("无变化"),O=`${q}使${ae}${re}${pe.join("/")}${K}`}else{const G=k.isAttackPositive?"+":"-",ae=k.isHealthPositive?"+":"-",re=k.attackValue||0,te=k.healthValue||0;re===0&&te!==0?O=`${q}${D}${ae}${te}血量${K}`:te===0&&re!==0?O=`${q}${D}${G}${re}攻击${K}`:O=`${q}${D}${G}${re}/${ae}${te}${K}`}else if(k.effect==="给予印记")O=`${q}${D}给予${k.value}点印记${K}`;else if(k.effect==="治愈")O=`${q}${D}治愈${k.value}点生命${K}`;else if(k.effect==="获得能量")O=`${q}获得${k.value}点能量${K}`;else if(k.effect==="失去能量")O=`${q}失去${k.value}点能量${K}`;else if(k.effect==="召唤"){const G=k.summonSource||"derived";if(G!=="derived"){const ae=Ie(G,!!k.isRandom),re=k.isRandom?"中的随机一个":"";O=`${q}召唤${k.value||1}张${ae}${re}${K}`}else if(this.editingCards.filter((re,te)=>!(Fe(k,"打出时")&&te===0)).length===0)O=`${q}召唤${k.value||1}张${K}`;else if(k.isRandom&&k.summonedCardIndices&&k.summonedCardIndices.length>1){const re=k.summonedCardIndices.map(te=>this.editingCards[te]?.name||"衍生随从");O=`${q}召唤${k.value||1}张${re.join("、")}中的随机一个${K}`}else{const re=k.summonedCardIndex??0,X=this.editingCards[re]?.name||"衍生随从";O=`${q}召唤${k.value||1}张${X}${K}`}}else if(k.effect==="获得"){const G=k.summonSource||"derived";if(G!=="derived"){const ae=Ie(G,!!k.isRandom),re=k.isRandom?"中的随机一个":"";O=`${q}获得${k.value||1}张${ae}${re}${K}`}else if(this.editingCards.filter((re,te)=>!(Fe(k,"打出时")&&te===0)).length===0)O=`${q}获得${k.value||1}张${K}`;else if(k.isRandom&&k.summonedCardIndices&&k.summonedCardIndices.length>1){const re=k.summonedCardIndices.map(te=>this.editingCards[te]?.name||"衍生牌");O=`${q}获得${k.value||1}张${re.join("、")}中的随机一个${K}`}else{const re=k.summonedCardIndex??0,X=this.editingCards[re]?.name||"衍生牌";O=`${q}获得${k.value||1}张${X}${K}`}}else if(k.effect==="变化"){const G=k.summonSource||"derived";if(G!=="derived"){const ae=Ie(G,!!k.isRandom),re=k.isRandom?"中的随机一个":"";O=`${q}变化为${ae}${re}${K}`}else if(k.isRandom&&k.summonedCardIndices&&k.summonedCardIndices.length>1){const ae=k.summonedCardIndices.map(re=>this.editingCards[re]?.name||"衍生随从");O=`${q}变化为${ae.join("、")}中的随机一个${K}`}else{const ae=k.summonedCardIndex??0,te=this.editingCards[ae]?.name||"衍生随从";O=`${q}变化为${te}${K}`}}if(O){const G=k.moments||(k.moment?[k.moment]:[]),ae=G.map(te=>$e[te]||"").join(""),re=G.sort().join("|");z.has(re)||z.set(re,{icon:ae,texts:[]}),z.get(re).texts.push(O)}}),V=Array.from(z.values()).map(k=>`${k.icon}${k.texts.join("，并")}`).join("；")}const ie=z=>{const W={...z};return z.targets&&(W.targets=[...z.targets]),W},F=()=>{if(this.editingCards.length!==0)return this.editingCards.map(z=>{const W=z.type==="spell",k=(z.effects||[]).filter(j=>j.effect);return{name:z.name||"未命名",cost:z.cost,attack:W?0:z.attack,health:W?0:z.health,maxHealth:W?0:z.health,type:z.type,keywords:W?[]:z.keywords.map(j=>j.name==="护甲"?{...j,value:z.armorValue}:{...j}),armorValue:W?void 0:z.armorValue,effects:k.length>0?k.map(j=>ie(W?{...j,moment:"打出时"}:j)):void 0,effectDescription:void 0,imageData:z.imageData||void 0}})},ee=()=>{const z=F();if(P.type==="spell"){const W=(P.effects||[]).filter(k=>k.effect);return{id:ke(),name:P.name||"未命名",cost:P.cost,attack:0,health:0,maxHealth:0,type:"spell",keywords:[],effects:W.length>0?W.map(k=>ie({...k,moment:k.moment||"打出时"})):void 0,effectDescription:V||void 0,imageData:P.imageData||void 0,derivedCards:z}}else return{id:ke(),name:P.name||"未命名",cost:P.cost,attack:P.attack,health:P.health,maxHealth:P.health,type:"minion",keywords:L,armorValue:P.armorValue,effects:oe.length>0?oe.map(ie):void 0,effectDescription:V||void 0,imageData:P.imageData||void 0,derivedCards:z}};if(this.isEditMode&&this.editingCardSample){const z=be(this.editingCardSample),W=this.state.groups.map(H=>{const D=H.cards.find(M=>be(M.card)===z);return{group:H,entry:D}}).filter(H=>H.entry);let k=0,j=null;for(const H of W)k+=H.entry.count,j||(j=H.group.id);if(k>0&&j){const H=this.state.groups.map(K=>({...K,cards:K.cards.filter(G=>be(G.card)!==z)})),M={card:ee(),count:k},O=H.findIndex(K=>K.id===j);O!==-1&&(H[O]={...H[O],cards:[...H[O].cards,M]}),this.state={...this.state,groups:H,sharedDeck:H[0].cards};const q=[];for(const K of H)for(const G of K.cards)G.card.type==="hero"&&q.push(G.card);this.state.heroCards=q,this.saveDeck()}}else{const z=ee();this.state=le(this.state,{type:"ADD_CARD",card:z}),this.saveDeck()}const de=document.getElementById("add-success");de?.classList.remove("hidden"),setTimeout(()=>{de?.classList.add("hidden")},1500)}),document.getElementById("export-code-btn")?.addEventListener("click",async()=>{try{if(this.editingCards.some((M,O)=>(M.effects||[]).some(K=>K.effect==="召唤"?K.summonSource&&K.summonSource!=="derived"?!1:this.editingCards.filter((ae,re)=>!(this.editingCards[re].type==="spell"||Fe(K,"打出时")&&re===O)).length===0||K.summonedCardIndex!==void 0&&this.editingCards[K.summonedCardIndex]?.type==="spell":K.effect==="获得"?K.summonSource&&K.summonSource!=="derived"?!1:this.editingCards.length===0:K.effect==="变化"?K.summonSource&&K.summonSource!=="derived"?!1:!!(this.editingCards.filter((ae,re)=>!(this.editingCards[re].type==="spell"||re===O)).length===0||this.momentsInclude(K.moment,"打出时")||K.summonedCardIndex!==void 0&&this.editingCards[K.summonedCardIndex]?.type==="spell"):!1))){alert("存在无效的召唤/变化效果（不能选择法术牌，打出时不能变化），请修改后再试");return}const P=M=>{const O={...M};return M.targets&&(O.targets=[...M.targets]),O},L=(M,O)=>{const q=(M.effects||[]).filter(K=>K.effect);return{name:M.name||(O===0?"未命名":`衍生卡${O}`),type:M.type,cost:M.cost,attack:M.attack,health:M.health,keywords:M.keywords.map(K=>K.name),armorValue:M.armorValue,effects:q.length>0?q.map(P):void 0,effect:q.length>0?P(q[0]):void 0,effectDescription:M.effectDescription||void 0,spellEffect:M.spellEffect||void 0,imageData:M.imageData||void 0,version:3}};let V;const Q=this.editingCards[0];if(!!Q?.imageData&&Q.imageData){const q=await(await(await fetch(Q.imageData)).blob()).arrayBuffer();V=new Uint8Array(q)}else{const M=document.createElement("canvas");M.width=200,M.height=300;const O=M.getContext("2d");O.fillStyle="#f8f4ec",O.fillRect(0,0,200,300);const q=M.toDataURL("image/png"),ae=await(await(await fetch(q)).blob()).arrayBuffer();V=new Uint8Array(ae)}const ie=We(V),F=L(Q,0),ee=JSON.stringify(F),de=btoa(unescape(encodeURIComponent(ee))),z=ze.encode("CardData",de);ie.splice(1,0,z);for(let M=1;M<this.editingCards.length;M++){const O=this.editingCards[M],q=JSON.stringify(L(O,M)),K=btoa(unescape(encodeURIComponent(q))),G=ze.encode(`CardData_${M}`,K);ie.splice(1+M,0,G)}const W=ut(ie),k=new Blob([W],{type:"image/png"}),H=`${(Q.name||"未命名").replace(/[\\/:*?"<>|]/g,"_").replace(/\s+/g,"_")}.png`;if(this.deckFolderHandle)try{const O=await(await this.deckFolderHandle.getFileHandle(H,{create:!0})).createWritable();await O.write(k),await O.close(),console.log(`PNG 已导出到文件夹: ${H}`)}catch(M){console.warn("写入文件夹失败，改用下载:",M);const O=URL.createObjectURL(k),q=document.createElement("a");q.href=O,q.download=H,document.body.appendChild(q),q.click(),document.body.removeChild(q),URL.revokeObjectURL(O)}else{const M=URL.createObjectURL(k),O=document.createElement("a");O.href=M,O.download=H,document.body.appendChild(O),O.click(),document.body.removeChild(O),URL.revokeObjectURL(M)}const D=document.getElementById("export-success");D&&(D.classList.remove("hidden"),setTimeout(()=>D.classList.add("hidden"),1500))}catch(C){alert("导出失败："+C.message)}}),document.getElementById("copy-btn")?.addEventListener("click",async()=>{const C=document.getElementById("export-text");if(C){const P=C.value;try{await navigator.clipboard.writeText(P);const L=document.getElementById("copy-btn");L&&(L.textContent="✓ 已复制！",setTimeout(()=>{L.textContent="📋 复制"},1500))}catch{C.select(),document.execCommand("copy");const V=document.getElementById("copy-btn");V&&(V.textContent="✓ 已复制！",setTimeout(()=>{V.textContent="📋 复制"},1500))}}}),document.getElementById("import-code-btn")?.addEventListener("click",()=>{const C=document.createElement("input");C.type="file",C.accept=".png,image/png",C.style.cssText="position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;",document.body.appendChild(C),C.addEventListener("change",async P=>{const L=P.target.files?.[0];if(document.body.removeChild(C),!!L)try{const V=await L.arrayBuffer(),Q=new Uint8Array(V),oe=We(Q);let ie=null;for(const H of oe)if(H.name==="tEXt")try{const D=ze.decode(H);D.keyword==="CardData"&&(ie=D.text)}catch{}if(!ie){alert("无效卡牌文件：缺少卡牌数据（CardData）");return}let F;try{F=decodeURIComponent(escape(atob(ie)))}catch{F=ie}const ee=JSON.parse(F);if(!ee.name&&ee.name!==""){alert("数据不完整：缺少卡牌名称");return}const de=H=>{const D={...H};return H.targets&&(D.targets=[...H.targets]),D},z=ee.effects||(ee.effect?[ee.effect]:[]),W=[ee];for(const H of oe)if(H.name==="tEXt")try{const D=ze.decode(H);if(D.keyword.match(/^CardData_\d+$/)){const M=parseInt(D.keyword.replace("CardData_",""),10);let O;try{O=decodeURIComponent(escape(atob(D.text)))}catch{O=D.text}W[M]=JSON.parse(O)}}catch{}this.editingCards=W.map((H,D)=>({name:H.name||(D===0?"":`衍生卡${D}`),type:H.type||"minion",cost:H.cost??1,attack:H.attack??(H.type==="spell"?0:1),health:H.health??(H.type==="spell"?0:1),keywords:(H.keywords||[]).map(M=>Object.values(Ee).find(q=>q.name===M)||{name:M,description:"",hasValue:!1}),armorValue:H.armorValue??1,preparationValue:H.preparationValue??1,effects:(H.effects||[]).map(de),spellEffect:H.spellEffect?de(H.spellEffect):H.effects?.[0]||H.effect||{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0},effectDescription:H.effectDescription||void 0,imageData:H.imageData||null})),this.currentCardIndex=0,this.currentEffectIndex=0;const k=URL.createObjectURL(L),j=await this.compressImageData(k);URL.revokeObjectURL(k),this.editingCards[0].imageData=j,this.renderCardCreator(),this.updateEffectDescription()}catch(V){alert("导入失败："+(V.message||"文件格式错误或数据损坏"))}}),C.click()}),document.getElementById("import-confirm-btn")?.addEventListener("click",()=>{const C=document.getElementById("import-text");if(C)try{const P=C.value.trim();if(!P){alert("请输入卡牌代码");return}const L=JSON.parse(decodeURIComponent(atob(P))),V=ie=>{const F={...ie};return ie.targets&&(F.targets=[...ie.targets]),F},Q=L.effects||(L.effect?[L.effect]:[]);this.currentCard={name:L.name||"",type:L.type||"minion",cost:L.cost??1,attack:L.attack??1,health:L.health??1,keywords:(L.keywords||[]).map(ie=>Object.values(Ee).find(ee=>ee.name===ie)||{name:ie,description:"",hasValue:!1}),armorValue:L.armorValue??1,preparationValue:L.preparationValue??1,effects:Q.map(V),spellEffect:L.type==="spell"?L.effects?.[0]||L.effect||{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}:{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}},this.currentEffectIndex=0,this.renderCardCreator();const oe=document.getElementById("import-output");oe&&oe.classList.add("hidden"),C.value=""}catch{alert("导入失败：卡牌代码格式错误")}}),document.getElementById("switch-to-hero-editor-btn")?.addEventListener("click",()=>{this.isHeroEditMode=!1,this.state=le(this.state,{type:"SHOW_HERO_EDITOR"}),this.render()}),document.getElementById("back-menu-btn")?.addEventListener("click",()=>{this.state=le(this.state,{type:"BACK_TO_MENU"}),this.isEditMode=!1,this.editingCardSample=null,this.render()}),document.getElementById("back-to-manager-btn")?.addEventListener("click",()=>{this.state=le(this.state,{type:"SHOW_CARD_MANAGER"}),this.isEditMode=!1,this.editingCardSample=null,this.render()});let h=null,u=null,p=1,b=0,g=0,y=!1,x=0,w=0,f=0,v=0,E=!1,S="medium",T=15,A=null;const R=Math.min(window.innerWidth*.65,480),_=Math.min(window.innerHeight*.55,520);let B=0,$=0,N=0,J=0;const U=C=>{const P=document.getElementById("crop-modal"),L=document.getElementById("crop-canvas");if(!P||!L)return;h=null,y=!1,u=null,E=!1,S="medium",T=15,A=null;let V=!1;L.width=R,L.height=_;const Q=L.getContext("2d");if(!Q)return;Q.imageSmoothingEnabled=!1;const oe=document.getElementById("crop-eraser-panel");oe&&(oe.style.display=this.isPortraitMode?"none":"flex");const F=this.importMode==="template"?1:200/300;R/_>F?($=_*.88,B=$*F):(B=R*.88,$=B/F),N=(R-B)/2,J=(_-$)/2;const ee=(X,ce,he,ge,ye)=>{const pe=R,Ce=_;X.clearRect(0,0,pe,Ce),X.fillStyle="#1a1a1a",X.fillRect(0,0,pe,Ce),X.save(),X.beginPath(),X.rect(N-30,J-30,B+60,$+60),X.clip(),X.drawImage(ce,ge,ye,ce.naturalWidth*he,ce.naturalHeight*he),X.restore(),A&&(X.save(),X.beginPath(),X.rect(N-30,J-30,B+60,$+60),X.clip(),X.globalCompositeOperation="destination-out",X.drawImage(A,ge,ye,A.width*he,A.height*he),X.restore()),X.fillStyle="rgba(0,0,0,0.6)",X.fillRect(0,0,pe,J),X.fillRect(0,J+$,pe,Ce-J-$),X.fillRect(0,J,N,$),X.fillRect(N+B,J,pe-N-B,$),X.strokeStyle="rgba(200,160,100,0.9)",X.lineWidth=2,X.strokeRect(N,J,B,$),X.strokeStyle="rgba(255,255,255,0.25)",X.lineWidth=1;const xe=$/3,Pe=B/3;X.beginPath(),X.moveTo(N,J+xe),X.lineTo(N+B,J+xe),X.moveTo(N,J+xe*2),X.lineTo(N+B,J+xe*2),X.moveTo(N+Pe,J),X.lineTo(N+Pe,J+$),X.moveTo(N+Pe*2,J),X.lineTo(N+Pe*2,J+$),X.stroke()};P.style.display="flex";const de=new Image;de.onload=()=>{u=de,A=document.createElement("canvas"),A.width=de.naturalWidth,A.height=de.naturalHeight,A.getContext("2d").clearRect(0,0,A.width,A.height);const ce=B/de.naturalWidth,he=$/de.naturalHeight;p=Math.max(ce,he),b=N+B/2-de.naturalWidth*p/2,g=J+$/2-de.naturalHeight*p/2,ee(Q,de,p,b,g)},de.src=URL.createObjectURL(C);const z=L.cloneNode(!0);L.parentNode?.replaceChild(z,L);const W=z,k=W.getContext("2d");k.imageSmoothingEnabled=!1;const j=()=>{u&&k&&ee(k,u,p,b,g)};W.addEventListener("mousedown",X=>{if(E&&u&&A){V=!0,W.style.cursor=D(T),H(X.offsetX,X.offsetY);return}y=!0,x=X.offsetX,w=X.offsetY,f=b,v=g,W.style.cursor="grabbing"});const H=(X,ce)=>{if(!A||!u)return;const he=(X-b)/p,ge=(ce-g)/p,ye=T/p,pe=A.getContext("2d");pe.fillStyle="#ffffff",pe.beginPath(),pe.arc(he,ge,ye/2,0,Math.PI*2),pe.fill(),j()},D=X=>{const he=X+8,ge=document.createElement("canvas");ge.width=he,ge.height=he;const ye=ge.getContext("2d");return ye.strokeStyle="rgba(255,255,255,0.95)",ye.lineWidth=2,ye.beginPath(),ye.arc(he/2,he/2,X/2,0,Math.PI*2),ye.stroke(),ye.strokeStyle="rgba(0,0,0,0.3)",ye.lineWidth=1,ye.beginPath(),ye.arc(he/2,he/2,X/2,0,Math.PI*2),ye.stroke(),`url(${ge.toDataURL()}) ${he/2} ${he/2}, crosshair`},M=X=>{if(V&&u&&A){const he=W.getBoundingClientRect();H(X.clientX-he.left,X.clientY-he.top);return}if(!y||!W)return;const ce=W.getBoundingClientRect();b=f+(X.clientX-ce.left-x),g=v+(X.clientY-ce.top-w),j()},O=()=>{if(V){V=!1,W.style.cursor=E?D(T):"grab";return}y&&(y=!1,W.style.cursor="grab")};window.addEventListener("mousemove",M),window.addEventListener("mouseup",O),W.addEventListener("wheel",X=>{if(X.preventDefault(),!u)return;const ce=W.getBoundingClientRect(),he=X.clientX-ce.left,ge=X.clientY-ce.top,ye=X.deltaY<0?1.03:.97,pe=Math.max(.1,p*ye);b=he-(he-b)*(pe/p),g=ge-(ge-g)*(pe/p),p=pe,j()},{passive:!1});const q=X=>{if(!u||!W.isConnected||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(X.key))return;X.preventDefault();const ce=2;X.key==="ArrowLeft"?b-=ce:X.key==="ArrowRight"?b+=ce:X.key==="ArrowUp"?g-=ce:X.key==="ArrowDown"&&(g+=ce),j()};document.addEventListener("keydown",q);let K=0,G=1,ae=0,re=0;W.addEventListener("touchstart",X=>{if(X.touches.length===1){if(E&&u&&A){V=!0;const he=W.getBoundingClientRect();H(X.touches[0].clientX-he.left,X.touches[0].clientY-he.top);return}y=!0;const ce=W.getBoundingClientRect();x=X.touches[0].clientX-ce.left,w=X.touches[0].clientY-ce.top,f=b,v=g}else if(X.touches.length===2){y=!1;const ce=X.touches[0].clientX-X.touches[1].clientX,he=X.touches[0].clientY-X.touches[1].clientY;K=Math.sqrt(ce*ce+he*he),G=p,ae=b,re=g}},{passive:!0}),W.addEventListener("touchmove",X=>{if(X.preventDefault(),X.touches.length===1&&V&&u&&A){const ce=W.getBoundingClientRect();H(X.touches[0].clientX-ce.left,X.touches[0].clientY-ce.top)}else if(X.touches.length===1&&y){const ce=W.getBoundingClientRect();b=f+(X.touches[0].clientX-ce.left-x),g=v+(X.touches[0].clientY-ce.top-w),j()}else if(X.touches.length===2){const ce=X.touches[0].clientX-X.touches[1].clientX,he=X.touches[0].clientY-X.touches[1].clientY,ye=Math.sqrt(ce*ce+he*he)/Math.max(.001,K),pe=Math.max(.1,Math.min(10,G*ye)),Ce=W.getBoundingClientRect(),xe=(X.touches[0].clientX+X.touches[1].clientX)/2-Ce.left,Pe=(X.touches[0].clientY+X.touches[1].clientY)/2-Ce.top;b=xe-(xe-ae)*(pe/G),g=Pe-(Pe-re)*(pe/G),p=pe,j()}},{passive:!1}),W.addEventListener("touchend",()=>{V=!1,y=!1},{passive:!0}),document.getElementById("crop-hcenter-btn")?.addEventListener("click",()=>{u&&(b=N+B/2-u.naturalWidth*p/2,j())}),document.getElementById("crop-vcenter-btn")?.addEventListener("click",()=>{u&&(g=J+$/2-u.naturalHeight*p/2,j())}),document.getElementById("crop-cover-btn")?.addEventListener("click",()=>{if(!u)return;const X=B/u.naturalWidth,ce=$/u.naturalHeight;p=Math.max(X,ce),b=N+B/2-u.naturalWidth*p/2,g=J+$/2-u.naturalHeight*p/2,j()}),document.getElementById("crop-contain-btn")?.addEventListener("click",()=>{if(!u)return;const X=B/u.naturalWidth,ce=$/u.naturalHeight;p=Math.min(X,ce),b=N+B/2-u.naturalWidth*p/2,g=J+$/2-u.naturalHeight*p/2,j()});const te=()=>{["thin","medium","thick"].forEach(X=>{const ce=document.getElementById(`crop-eraser-${X}-btn`);if(ce){const he=S===X;ce.style.borderColor=he?"#4a9":"#666",ce.style.background=he?"#2a6":"#444",ce.style.color=he?"#fff":"#aaa"}})};document.getElementById("crop-eraser-btn")?.addEventListener("click",()=>{E=!E;const X=document.getElementById("crop-eraser-btn");X&&(X.style.borderColor=E?"#4a9":"#888"),W.style.cursor=E?D(T):"grab"}),document.getElementById("crop-eraser-thin-btn")?.addEventListener("click",()=>{T=5,S="thin",te(),E&&(W.style.cursor=D(5))}),document.getElementById("crop-eraser-medium-btn")?.addEventListener("click",()=>{T=15,S="medium",te(),E&&(W.style.cursor=D(15))}),document.getElementById("crop-eraser-thick-btn")?.addEventListener("click",()=>{T=45,S="thick",te(),E&&(W.style.cursor=D(45))}),te(),W.__cropCleanup=()=>{window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",O),document.removeEventListener("keydown",q);const X=document.getElementById("crop-eraser-panel");X&&(X.style.display="none");const ce=document.getElementById("crop-eraser-btn");ce&&(ce.style.borderColor="#888"),E=!1,V=!1,A=null}},ne=()=>{const C=document.getElementById("crop-modal"),P=document.getElementById("crop-canvas");C&&(C.style.display="none"),u&&(URL.revokeObjectURL(u.src),u=null),P?.__cropCleanup&&P.__cropCleanup()},Z=document.getElementById("import-mode-full"),se=document.getElementById("import-mode-template"),Y=()=>{Z&&se&&(this.importMode=Z.checked?"full":"template")};Z?.addEventListener("change",()=>{Z.checked&&se?se.checked=!1:Z.checked||(Z.checked=!0),Y()}),se?.addEventListener("change",()=>{se.checked&&Z?Z.checked=!1:se.checked||(se.checked=!0),Y()}),document.getElementById("draw-image-btn")?.addEventListener("click",()=>{this.isDrawingMode?this.exitDrawingMode(!0):this.enterDrawingMode()}),document.getElementById("import-image-btn")?.addEventListener("click",()=>{this.cropTarget="main";const C=document.createElement("input");C.type="file",C.accept="image/*",C.style.cssText="position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;",document.body.appendChild(C),C.addEventListener("change",P=>{const L=P.target.files?.[0];if(document.body.removeChild(C),!L||!L.type.startsWith("image/")){alert("请选择图片文件");return}U(L)}),C.click()}),document.getElementById("crop-cancel-btn")?.addEventListener("click",ne),document.getElementById("crop-confirm-btn")?.addEventListener("click",async()=>{if(!u){ne();return}if(this.importMode==="template"){const C=document.createElement("canvas"),P=Math.max(B,$);C.width=P,C.height=P;const L=C.getContext("2d");if(L){L.imageSmoothingEnabled=!1;const V=(N-b)/p,Q=(J-g)/p,oe=B/p,ie=$/p;L.drawImage(u,V,Q,oe,ie,0,0,P,P),A&&(L.globalCompositeOperation="destination-out",L.drawImage(A,V,Q,oe,ie,0,0,P,P),L.globalCompositeOperation="source-over");const F=C.toDataURL("image/png");try{const ee=await this.generateAtmosphereCard(F);h=await this.compressImageData(ee),this.currentCard.imageData=h;const z=document.getElementById("main-card-preview");z&&h&&(z.style.backgroundImage=`url(${h})`,z.style.backgroundSize="cover",z.style.backgroundPosition="center",z.style.backgroundRepeat="no-repeat")}catch(ee){alert("生成氛围感光效图片失败："+ee.message)}}}else{const C=(N-b)/p,P=(J-g)/p,L=B/p,V=$/p,Q=document.createElement("canvas");Q.width=800,Q.height=1200;const oe=Q.getContext("2d");if(oe){oe.imageSmoothingEnabled=!1,oe.drawImage(u,C,P,L,V,0,0,800,1200),A&&(oe.globalCompositeOperation="destination-out",oe.drawImage(A,C,P,L,V,0,0,800,1200),oe.globalCompositeOperation="source-over");const ie=Q.toDataURL("image/png");try{const{bgDataUrl:F}=await this.generateAtmosphereBackground(ie),ee=await this.compressImageData(F),de=document.createElement("canvas");de.width=200,de.height=300;const z=de.getContext("2d");if(z){z.imageSmoothingEnabled=!1;const W=new Image;W.onload=()=>{z.drawImage(W,0,0,200,300);const k=new Image;k.onload=()=>{const j=Math.max(200/k.naturalWidth,300/k.naturalHeight),H=k.naturalWidth*j,D=k.naturalHeight*j,M=(200-H)/2,O=(300-D)/2,q=30,K=.85,G=q*4,ae=document.createElement("canvas");ae.width=H+G*2,ae.height=D+G*2;const re=ae.getContext("2d");re&&(re.imageSmoothingEnabled=!1,re.drawImage(k,G,G,H,D),re.globalCompositeOperation="source-in",re.fillStyle="#000000",re.fillRect(0,0,ae.width,ae.height),re.globalCompositeOperation="source-over",z.save(),z.filter=`blur(${q}px)`,z.globalAlpha=K,z.drawImage(ae,M-G,O-G),z.restore()),z.drawImage(k,M,O,H,D),h=de.toDataURL("image/png"),this.currentCard.imageData=h;const te=document.getElementById("main-card-preview");te&&h&&(te.style.backgroundImage=`url(${h})`,te.style.backgroundSize="cover",te.style.backgroundPosition="center",te.style.backgroundRepeat="no-repeat")},k.src=ie},W.src=ee}}catch(F){alert("生成氛围感背景失败："+F.message)}}}ne()}),document.querySelectorAll(".condition-side-check").forEach(C=>{C.addEventListener("change",P=>{P.stopPropagation();const L=C.dataset.editor,V=C.dataset.side;let Q=null;if(L==="hero-skill"||(Q=this.currentCard.effects?.[this.currentEffectIndex]||null,!Q))return;if(Q.conditionSides||(Q.conditionSides=["friendly"]),C.checked)Q.conditionSides.includes(V)||Q.conditionSides.push(V);else if(Q.conditionSides.length>1)Q.conditionSides=Q.conditionSides.filter(ie=>ie!==V);else{Q.conditionSides=["friendly"],C.checked=!0;return}this.renderCardCreator()})}),document.querySelectorAll(".condition-logic-radio").forEach(C=>{C.addEventListener("change",P=>{P.stopPropagation();const L=C.dataset.editor,V=C.value;let Q=null;L!=="hero-skill"&&(Q=this.currentCard.effects?.[this.currentEffectIndex]||null,Q&&(Q.conditionSideLogic=V,this.renderCardCreator()))})}),document.querySelectorAll(".condition-op-btn").forEach(C=>{C.addEventListener("click",P=>{P.stopPropagation();const L=C.dataset.editor,V=C.dataset.op;let Q=null;if(L==="hero-skill"||(Q=this.currentCard.effects?.[this.currentEffectIndex]||null,!Q))return;const oe=Q.conditionOperator||"=",ie=oe==="<"||oe==="<=",F=oe===">"||oe===">=",ee=oe==="="||oe==="<="||oe===">=";let de=ie,z=F,W=ee;V==="<"?(z=!1,de=!ie):V===">"?(de=!1,z=!F):V==="="&&(W=!ee),de&&W?Q.conditionOperator="<=":z&&W?Q.conditionOperator=">=":de?Q.conditionOperator="<":z?Q.conditionOperator=">":Q.conditionOperator="=",this.renderCardCreator()})}),document.querySelectorAll(".condition-value-input").forEach(C=>{C.addEventListener("input",P=>{P.stopPropagation();const L=C.dataset.editor;let V=null;L!=="hero-skill"&&(V=this.currentCard.effects?.[this.currentEffectIndex]||null,V&&(V.conditionValue=Math.max(0,parseInt(P.target.value)||0)))})}),document.querySelectorAll(".condition-minion-name-input").forEach(C=>{C.addEventListener("input",P=>{P.stopPropagation();const L=C.dataset.editor;let V=null;L!=="hero-skill"&&(V=this.currentCard.effects?.[this.currentEffectIndex]||null,V&&(V.conditionMinionName=P.target.value))})}),document.querySelectorAll(".condition-target-attr-check").forEach(C=>{C.addEventListener("change",P=>{P.stopPropagation();const L=C.dataset.editor,V=C.dataset.attr;if(L==="hero-skill")return;const Q=this.currentCard.effects?.[this.currentEffectIndex];if(!Q)return;Q.conditionTargetAttrs||(Q.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const oe=Q.conditionTargetAttrs;oe[V].enabled=P.target.checked,this.renderCardCreator()})}),document.querySelectorAll(".condition-target-op-btn").forEach(C=>{C.addEventListener("click",P=>{P.stopPropagation();const L=C.dataset.editor,V=C.dataset.attr,Q=C.dataset.op;let oe=null;if(L==="hero-skill"||(oe=this.currentCard.effects?.[this.currentEffectIndex]||null,!oe))return;oe.conditionTargetAttrs||(oe.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const ie=oe.conditionTargetAttrs,F=ie[V].operator||"=",ee=F==="<"||F==="<=",de=F===">"||F===">=",z=F==="="||F==="<="||F===">=";let W=ee,k=de,j=z;Q==="<"?(k=!1,W=!ee):Q===">"?(W=!1,k=!de):Q==="="&&(j=!z),W&&j?ie[V].operator="<=":k&&j?ie[V].operator=">=":W?ie[V].operator="<":k?ie[V].operator=">":ie[V].operator="=",this.renderCardCreator()})}),document.querySelectorAll(".condition-target-attr-input").forEach(C=>{C.addEventListener("input",P=>{P.stopPropagation();const L=C.dataset.editor,V=C.dataset.attr;let Q=null;L!=="hero-skill"&&(Q=this.currentCard.effects?.[this.currentEffectIndex]||null,Q&&(Q.conditionTargetAttrs||(Q.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}}),Q.conditionTargetAttrs[V].value=Math.max(0,parseInt(P.target.value)||0),this.renderCardCreator()))})}),document.querySelectorAll(".condition-minion-name-check").forEach(C=>{C.addEventListener("change",P=>{P.stopPropagation();const L=C.dataset.editor;let V=null;L!=="hero-skill"&&(V=this.currentCard.effects?.[this.currentEffectIndex]||null,V&&(V.conditionMinionCheckName=P.target.checked,this.renderCardCreator()))})}),document.querySelectorAll(".condition-minion-attr-check").forEach(C=>{C.addEventListener("change",P=>{P.stopPropagation();const L=C.dataset.editor,V=C.dataset.attr;let Q=null;if(L==="hero-skill"||(Q=this.currentCard.effects?.[this.currentEffectIndex]||null,!Q))return;Q.conditionMinionAttrs||(Q.conditionMinionAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const oe=Q.conditionMinionAttrs;oe[V].enabled=P.target.checked,this.renderCardCreator()})}),document.querySelectorAll(".condition-minion-attr-op-btn").forEach(C=>{C.addEventListener("click",P=>{P.stopPropagation();const L=C.dataset.editor,V=C.dataset.attr,Q=C.dataset.op;let oe=null;if(L==="hero-skill"||(oe=this.currentCard.effects?.[this.currentEffectIndex]||null,!oe))return;oe.conditionMinionAttrs||(oe.conditionMinionAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const ie=oe.conditionMinionAttrs,F=ie[V].operator||"=",ee=F==="<"||F==="<=",de=F===">"||F===">=",z=F==="="||F==="<="||F===">=";let W=ee,k=de,j=z;Q==="<"?(k=!1,W=!ee):Q===">"?(W=!1,k=!de):Q==="="&&(j=!z),W&&j?ie[V].operator="<=":k&&j?ie[V].operator=">=":W?ie[V].operator="<":k?ie[V].operator=">":ie[V].operator="=",this.renderCardCreator()})}),document.querySelectorAll(".condition-minion-attr-input").forEach(C=>{C.addEventListener("input",P=>{P.stopPropagation();const L=C.dataset.editor,V=C.dataset.attr;let Q=null;L!=="hero-skill"&&(Q=this.currentCard.effects?.[this.currentEffectIndex]||null,Q&&(Q.conditionMinionAttrs||(Q.conditionMinionAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}}),Q.conditionMinionAttrs[V].value=Math.max(0,parseInt(P.target.value)||0),this.renderCardCreator()))})}),this.setupWheelScrollForwarding()}setupWheelScrollForwarding(){if(!this.isPortraitMode){const e=this.app.querySelector(".card-creator-active");e&&e.addEventListener("wheel",s=>{const t=s,r=t.target;if(r.closest(".editor-left-panel-scroll")||r.closest(".keyword-scroll-container, .target-scroll-container"))return;const i=document.querySelector(".editor-left-panel-scroll");i&&(t.preventDefault(),i.scrollBy({top:t.deltaY,behavior:"smooth"}))},{passive:!1})}}renderCardManager(){this.isPortraitMode=window.innerWidth/window.innerHeight<3/4;const e=this.state.groups;let s=0;const t=e.map(r=>{const i=[...r.cards].sort((a,o)=>as(a.card,o.card)),n=i.reduce((a,o)=>a+o.count,0);return s+=n,{group:r,sortedCards:i,groupCount:n}});this.app.innerHTML=`
      <div class="min-h-screen p-8" style="background: transparent; ${this.isPortraitMode?"transform: scale(0.75); transform-origin: top left; width: 133.33vw;":""}">
        <div class="max-w-6xl mx-auto">
          <div class="flex justify-between items-center mb-6 card-manager-header">
            <h2 class="text-3xl font-bold" style="color: #8b7355; font-family: 'Georgia', serif;">卡包管理</h2>
            <div class="flex items-center gap-4">
              <div class="text-xl font-bold" style="color: #8b7355;">共 ${s} 张</div>
              <button id="back-menu-btn" class="px-6 py-2 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 3px solid #a08060;">
                ←返回菜单
              </button>
            </div>
          </div>

          <!-- 操作区域 -->
          <div class="mb-6 p-4 rounded-xl" style="background: rgba(255, 255, 255, 0.9); border: 3px solid #d4c4a8;">
            <div class="flex gap-4 items-center flex-wrap">
              <button id="clear-deck-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all whitespace-nowrap"
                style="background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: 2px solid #a04040;">
                🗑️ 全部清除
              </button>
              <div class="w-px h-8" style="background: #d4c4a8;"></div>
              <button id="import-zip-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all whitespace-nowrap"
                style="background: linear-gradient(135deg, #ffc46b 0%, #f0b850 100%); color: #fff; border: 2px solid #e0a848;">
                📂 导入卡包(ZIP)
              </button>
              <button id="export-zip-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all whitespace-nowrap"
                style="background: linear-gradient(135deg, #9b8cb8 0%, #7a6b99 100%); color: #fff; border: 2px solid #6a5b89;">
                📦 导出卡包(ZIP)
              </button>
              <div class="w-px h-8" style="background: #d4c4a8;"></div>
              <button id="deck-folder-btn" class="px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all whitespace-nowrap"
                style="background: linear-gradient(135deg, #c9a87c 0%, #b89570 100%); color: #fff; border: 2px solid #a08060;">
                🗄️ 卡包组文件夹
              </button>
            </div>

            <!-- 导入模式选择 -->
            <div id="import-mode-dialog" class="hidden mt-4 p-4 rounded-lg" style="display: none; background: rgba(212, 196, 168, 0.3); border: 2px solid #d4c4a8;">
              <div class="text-lg font-bold mb-3" style="color: #5a4a3a;">选择导入方式：</div>
              <div class="flex gap-4">
                <button id="merge-import-btn" class="px-6 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                  style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 2px solid #4a8a4a;">
                  合并导入
                </button>
                <button id="replace-import-btn" class="px-6 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                  style="background: linear-gradient(135deg, #f08080 0%, #d06060 100%); color: #fff; border: 2px solid #c06060;">
                  覆盖导入
                </button>
                <button id="cancel-import-btn" class="px-6 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                  style="background: #ccc; color: #666; border: 2px solid #aaa;">
                  取消
                </button>
              </div>
            </div>
            
            <div id="import-result" class="hidden mt-2 p-2 rounded-lg text-center font-bold" style="background: rgba(124, 184, 124, 0.3); color: #5a4a3a; border: 2px solid #7cb87c;">
              ✓ 操作成功！
            </div>
          </div>

          <!-- 卡包文件夹 ZIP 列表 -->
          ${this.deckFolderHandle&&this.deckFolderZips.length>0?`
          <div class="mb-4 p-3 rounded-xl" style="background: rgba(255, 255, 255, 0.85); border: 2px solid #c0a080;">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-bold" style="color: #8b7355;">📁 ${this.deckFolderName||"卡包文件夹"}</span>
              <button id="disconnect-folder-btn" class="text-xs px-2 py-1 rounded font-bold transition-all hover:scale-105"
                style="background: #e07070; color: #fff; border: 1px solid #a04040;">
                断开
              </button>
            </div>
            <div class="flex flex-wrap gap-2">
              ${this.deckFolderZips.map(r=>`
                <button class="deck-folder-zip-btn px-3 py-1.5 rounded-lg font-bold text-sm transition-all hover:scale-105 whitespace-nowrap"
                  data-zip-name="${r.name}"
                  style="background: linear-gradient(135deg, #d4c4a8 0%, #c0a080 100%); color: #5a4a3a; border: 2px solid #a08060;">
                  📄 ${r.name}
                </button>
              `).join("")}
            </div>
          </div>
          `:this.deckFolderHandle&&this.deckFolderZips.length===0?`
          <div class="mb-4 p-3 rounded-xl" style="background: rgba(255, 255, 255, 0.7); border: 2px dashed #c0a080;">
            <div class="flex items-center justify-between">
              <span class="text-sm font-bold" style="color: #8b7355;">📁 ${this.deckFolderName||"卡包文件夹"}</span>
              <button id="disconnect-folder-btn" class="text-xs px-2 py-1 rounded font-bold transition-all hover:scale-105"
                style="background: #e07070; color: #fff; border: 1px solid #a04040;">
                断开
              </button>
            </div>
            <div class="text-xs mt-1" style="color: #a08060;">需要重新授权，点击上方「🗄️ 卡包组文件夹」按钮即可</div>
          </div>
          `:""}

          <!-- 折叠状态样式 -->
          <style>
            .collapsed-group {
              gap: 3px !important;
            }
            .collapsed-group .card-item-wrapper {
              width: 40px !important;
              min-width: unset !important;
              gap: 0 !important;
              overflow: visible !important;
            }
            .collapsed-group .card-item-wrapper .right-actions {
              display: none !important;
            }
            .collapsed-group .card-item-wrapper .card-item {
              width: 40px !important;
              min-width: unset !important;
              flex: none !important;
              margin: 0 !important;
              padding: 0 !important;
              border-width: 1px !important;
              border-radius: 2px !important;
              box-shadow: none !important;
              overflow: hidden !important;
              background-size: cover !important;
              background-position: center !important;
            }
            .collapsed-group .card-item-wrapper .card-item > * {
              display: none !important;
            }
          </style>

          <!-- 分组渲染 -->
          ${t.map(({group:r,sortedCards:i,groupCount:n},a)=>`
            <!-- 分组标题行 -->
            <div class="group-header flex items-center gap-3 mb-3 ${a>0?"mt-8":""}">
              <button class="collapse-group-btn text-lg font-bold transform hover:scale-110 transition-all cursor-pointer select-none"
                data-group-id="${r.id}"
                style="color: #a08060; line-height: 1; font-size: 18px; background: none; border: none; padding: 0 2px;"
                title="${this.collapsedGroups.has(r.id)?"展开":"折叠"}">
                ${this.collapsedGroups.has(r.id)?"▶":"▼"}
              </button>
              ${a===0?`
                <span class="text-xl font-bold whitespace-nowrap" style="color: #8b7355; font-family: 'Georgia', serif;">${r.name}</span>
                <hr class="flex-1" style="border-color: #d4c4a8; border-width: 1px; border-style: solid;">
                <span class="text-sm mr-1" style="color: #999;">(${n} 张)</span>
                <button id="create-group-btn" class="px-4 py-1.5 font-bold rounded-lg shadow-md transform hover:scale-105 transition-all whitespace-nowrap text-sm"
                  style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 2px solid #4a8a4a;">
                  + 新建分组
                </button>
              `:`
                <span class="group-name-text text-xl font-bold whitespace-nowrap" style="color: #8b7355; font-family: 'Georgia', serif; cursor: pointer;" data-group-id="${r.id}" title="双击重命名">${r.name}</span>
                <hr class="flex-1" style="border-color: #d4c4a8; border-width: 1px; border-style: solid;">
                <span class="text-sm mr-1" style="color: #999;">(${n} 张)</span>
                <button class="disband-group-btn px-4 py-1.5 font-bold rounded-lg shadow-md transform hover:scale-105 transition-all whitespace-nowrap text-sm"
                  data-group-id="${r.id}"
                  style="background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: 2px solid #a04040;">
                  ✕ 解散分组
                </button>
              `}
            </div>
            <!-- 卡牌网格 -->
            <div class="flex flex-wrap gap-3 ${this.collapsedGroups.has(r.id)?"collapsed-group":""}" data-group-id="${r.id}" style="justify-content: flex-start; align-items: flex-start;">
              ${i.length===0?'<div class="text-sm italic" style="color: #b0a090;">（空）</div>':""}
              ${i.map(o=>{const l=o.card,d=l,c=o.count,m=l.id,h=d.type==="hero";return`
                <div class="card-item-wrapper" draggable="${this.collapsedGroups.has(r.id)?"true":"false"}" data-group-id="${r.id}" data-card-id="${m}" style="display: flex; flex-direction: row; align-items: stretch; width: ${h?"225px":"150px"}; overflow: visible; gap: 6px;">
                  <div class="card-item main-card-item w-full rounded-xl ${h?"aspect-[4/3]":"aspect-[2/3]"} shadow-md" style="${this.getCardBgInline(l)} border: 3px solid #d4c4a8; z-index: 1; box-shadow: 0 4px 12px rgba(0,0,0,0.15); flex: 1; min-width: 0; position: relative;" data-card-id="${m}">
                    ${h?"":`<div class="card-cost-badge">${d.cost}</div>`}
                    ${h?"":d.type==="hero"?'<div class="absolute" style="top: 28px; left: 2px; font-size: 10px; font-weight: bold; color: #ffd700; text-shadow: 0 0 3px black, 0 0 2px black;">英雄</div>':""}
                    ${h?"":`<div class="card-count-badge">x${c}</div>`}
                    <div class="absolute left-1 right-1 text-center truncate font-bold" style="top: 4px; color: white; font-size: 14px; z-index: 5; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 1px black;">
                      ${d.name}
                    </div>
                    ${h&&d.skills&&d.skills.length>0?`
                      <div class="hero-skills-row" style="position: absolute; bottom: 6px; left: 6px; display: flex; gap: 6px; z-index: 10; pointer-events: none;">
                        ${d.skills.map(u=>`
                          <div class="hero-skill-icon" title="${u.name}" style="position: relative; width: 36px; height: 36px;">
                            <div style="width: 36px; height: 36px; border-radius: 50%; background-image: url(${u.iconData||""}); background-size: cover; background-position: center; border: 2.5px solid #d4c4a8; box-shadow: 0 2px 8px rgba(0,0,0,0.35);"></div>
                            ${u.type==="passive"?`
                              <!-- 被动技能：只显示能量宝石，无数字 -->
                              <div style="position: absolute; bottom: -3px; right: -3px; width: 18px; height: 18px; background: url('/images/energy_gem_v2.png') center/cover no-repeat; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4));"></div>
                            `:`
                              <!-- 主动技能：能量宝石 + 数字 -->
                              <div style="position: absolute; bottom: -3px; right: -3px; width: 20px; height: 20px; background: url('/images/energy_gem_v2.png') center/cover no-repeat; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4));">
                                <span style="font-size: 10px; font-weight: bold; color: #fff; text-shadow: 0 0 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.5); line-height: 1;">${u.cost??1}</span>
                              </div>
                            `}
                          </div>
                        `).join("")}
                      </div>
                    `:""}
                    ${!h&&(d.keywords.length>0||this.getCardFullEffectText(l))?`
                      <div class="card-description-wrapper">
                        ${d.keywords.length>0?`
                          <div class="card-keywords-area">
                            ${d.keywords.map(u=>{const p=u.name==="护甲"?u.value??d.armorValue??1:"";return`<span class="card-keyword-tag">${u.name}${p}</span>`}).join("")}
                          </div>
                        `:""}
                        ${this.getCardFullEffectText(l)?`
                          <div class="card-effect-area">
                            ${this.getCardFullEffectText(l)}
                          </div>
                        `:""}
                      </div>
                    `:""}
                    ${!h&&d.type!=="spell"?`<div class="card-attack-badge">${d.attack}</div>`:""}
                    ${!h&&d.type!=="spell"?`<div class="card-health-badge">${d.health}</div>`:""}
                  </div>
                  <div class="right-actions" style="display: flex; flex-direction: column; gap: 4px; justify-content: center; flex-shrink: 0;">
                    <button class="delete-btn" style="width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: none; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; cursor: pointer; z-index: 20; padding: 0; line-height: 1; box-shadow: 0 2px 6px rgba(160, 64, 64, 0.5); flex-shrink: 0;" data-card-id="${m}" title="删除全部">✕</button>
                    <button class="edit-card-btn" style="width: 26px; height: 26px; border-radius: 6px; background: linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%); color: #fff; border: none; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; cursor: pointer; z-index: 20; padding: 0; line-height: 1; box-shadow: 0 2px 6px rgba(61, 133, 198, 0.5); flex-shrink: 0;" data-card-id="${m}" title="编辑">✎</button>
                    ${h?"":`
                    <button class="increase-card-btn" style="width: 26px; height: 26px; border-radius: 6px; background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: none; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: bold; cursor: pointer; z-index: 20; padding: 0; line-height: 1; box-shadow: 0 2px 6px rgba(58, 122, 58, 0.5); flex-shrink: 0;" data-card-id="${m}" title="增加">+</button>
                    <button class="decrease-card-btn" style="width: 26px; height: 26px; border-radius: 6px; background: linear-gradient(135deg, #f5a623 0%, #d48a1c 100%); color: #fff; border: none; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: bold; cursor: pointer; z-index: 20; padding: 0; line-height: 1; box-shadow: 0 2px 6px rgba(212, 138, 28, 0.5); flex-shrink: 0;" data-card-id="${m}" title="减少">−</button>
                    `}
                  </div>
                </div>
                `}).join("")}
            </div>
          `).join("")}
        </div>
      </div>
    `,this.attachCardManagerEvents(),this.savedCardManagerScrollY>0&&requestAnimationFrame(()=>{window.scrollTo({top:this.savedCardManagerScrollY,behavior:"instant"}),this.savedCardManagerScrollY=0})}parseCardTemplateFromDataset(e){const s=(e.cardKeywords||"").split(",").filter(Boolean).map(t=>Object.values(Ee).find(r=>r.name===t)).filter(Boolean);return{name:e.cardName||"",cost:parseInt(e.cardCost||"0"),attack:parseInt(e.cardAttack||"0"),health:parseInt(e.cardHealth||"1"),maxHealth:parseInt(e.cardHealth||"1"),type:"minion",keywords:s}}attachCardManagerEvents(){document.getElementById("create-group-btn")?.addEventListener("click",()=>{const a=`卡组${this.state.groups.filter(l=>l.id!==Me).length+1}`;this.state=le(this.state,{type:"CREATE_GROUP",name:a});const o=this.state.groups.find(l=>l.id!==Me&&!this.collapsedGroups.has(l.id));o&&this.collapsedGroups.add(o.id),this.saveDeck(),this.renderCardManager()}),document.querySelectorAll(".disband-group-btn").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.groupId||"";a&&(this.state=le(this.state,{type:"DELETE_GROUP",groupId:a}),this.saveDeck(),this.renderCardManager())})}),document.querySelectorAll(".collapse-group-btn").forEach(n=>{n.addEventListener("click",()=>{const a=n.dataset.groupId||"";a&&(this.collapsedGroups.has(a)?this.collapsedGroups.delete(a):this.collapsedGroups.add(a),this.renderCardManager())})}),document.querySelectorAll(".group-name-text").forEach(n=>{n.addEventListener("dblclick",()=>{const a=n.dataset.groupId||"";if(!a)return;const o=Ft(this.state,a)?.name||"",l=n,d=document.createElement("input");d.type="text",d.value=o,d.className="group-rename-input",d.style.cssText="font-size: inherit; font-weight: bold; font-family: Georgia, serif; color: #8b7355; background: rgba(139, 115, 85, 0.1); border: 1px solid #8b7355; border-radius: 4px; padding: 2px 6px; outline: none; width: 150px;",l.replaceWith(d),d.focus(),d.select();const c=()=>{const m=d.value.trim();m&&m!==o&&(this.state=le(this.state,{type:"RENAME_GROUP",groupId:a,name:m}),this.saveDeck()),this.renderCardManager()};d.addEventListener("blur",c),d.addEventListener("keydown",m=>{m.key==="Enter"?(m.preventDefault(),d.blur()):m.key==="Escape"&&(d.value=o,d.blur())})})});let e=null,s=null;const t=n=>{const a=n.target.closest(".card-item-wrapper");if(!a)return;e=parseInt(a.dataset.cardId||"",10),s=a.dataset.groupId||null,n.dataTransfer?.setData("text/plain",`${e}`),n.dataTransfer.effectAllowed="move",a.style.opacity="0.35",a.style.transition="opacity 0.15s ease",document.body.style.cursor="none";const o=a.querySelector(".card-item");if(o){const c=(o.getAttribute("style")||"").match(/(background-image[^;]*;?\s*background-size[^;]*;?\s*background-position[^;]*;?)/i),m=c?c[1]:"background: #f8f4ec;",h=o.classList.contains("aspect-[4/3]"),u=60,p=h?45:90,b=document.createElement("div");b.style.cssText=`${m} background-repeat: no-repeat;`,b.style.position="fixed",b.style.left="-9999px",b.style.top="-9999px",b.style.pointerEvents="none",b.style.opacity="1",b.style.width=u+"px",b.style.height=p+"px",b.style.borderRadius="6px",b.style.border="2px solid #d4c4a8",b.style.boxShadow="0 4px 16px rgba(0,0,0,0.4)",document.body.appendChild(b),n.dataTransfer?.setDragImage(b,u/2,p/2),requestAnimationFrame(()=>{document.body.removeChild(b)})}const l=()=>{a.style.opacity="",a.style.transition="",document.body.style.cursor="",a.removeEventListener("dragend",l)};a.addEventListener("dragend",l)};document.querySelectorAll(".card-item-wrapper").forEach(n=>{n.addEventListener("dragstart",t)}),document.querySelectorAll(".group-header, .flex.flex-wrap.gap-3").forEach(n=>{n.addEventListener("dragover",a=>{a.preventDefault(),a.dataTransfer.dropEffect="move"}),n.addEventListener("drop",a=>{a.preventDefault();const o=a.target.closest(".group-header");let l=null;if(o){const d=o.querySelector(".group-name-text");if(d)l=d.dataset.groupId||null;else{const c=o.nextElementSibling;c&&(l=c.dataset.groupId||null)}}else l=a.target.closest(".flex.flex-wrap.gap-3")?.dataset.groupId||null;e!==null&&l&&l!==s&&(this.state=le(this.state,{type:"MOVE_CARD_TO_GROUP",cardId:e,groupId:l}),e=null,s=null,this.saveDeck(),this.renderCardManager())})}),(()=>{const a=window.innerHeight,o=l=>{const d=l.clientY;d<a*.15?window.scrollBy(0,-3):d>a*(1-.15)&&window.scrollBy(0,3)};document.addEventListener("dragover",o),document.addEventListener("dragend",()=>{document.removeEventListener("dragover",o),e=null,s=null},{once:!0})})(),document.getElementById("merge-import-btn")?.addEventListener("click",()=>{if(!this.pendingImportType)return;this.pendingImportMode="merge";const n=document.getElementById("import-mode-dialog");n&&(n.style.display="none");const a=document.createElement("input");a.type="file",a.accept=this.pendingImportType==="zip"?".zip,application/zip":".png",a.onchange=async o=>{const l=o.target.files?.[0];if(!l){this.pendingImportMode=null,this.pendingImportType=null;return}const d=document.getElementById("import-zip-btn");d&&(d.textContent="⌛️ 导入中...",d.disabled=!0);try{let c=[],m=[];if(this.pendingImportType==="zip"){const u=await this.parseGroupsFromZipBlob(l);c=[],m=u.heroCards;const p=De(this.state);if(u.groups.length>0){const b=u.groups[0].cards;p.cards=this.mergeDeckEntries(p.cards,b),c=b}for(let b=1;b<u.groups.length;b++){const g=u.groups[b],y=this.state.groups.find(x=>x.name===g.name);if(y)y.cards=this.mergeDeckEntries(y.cards,g.cards);else{const x={id:`group_${Date.now()}_${b}`,name:g.name,cards:[...g.cards]};this.state.groups.push(x)}c=[...c,...g.cards]}if(c.length===0){alert("无效卡包：ZIP 中没有找到 PNG 卡牌文件");return}}else{const u=await this.importCardFromPNGFile(l);if(!u){alert("导入失败：无法解析卡牌文件");return}const{cardData:p,imageData:b}=u,g=p.effects||(p.effect?[p.effect]:[]),y=x=>{const w={...x};return x.targets&&(w.targets=[...x.targets]),w};c=[{card:{id:ke(),name:p.name||"",type:p.type||"minion",cost:p.cost??1,attack:p.attack??1,health:p.health??1,maxHealth:p.health??1,keywords:(p.keywords||[]).map(x=>x==="风怒"?"__WINDURY__":x).map(x=>x==="__WINDURY__"?"连击":x).map(x=>Object.values(Ee).find(f=>f.name===x)||{name:x,description:"",hasValue:!1}),armorValue:p.armorValue??1,effects:g.map(y),effect:g.length>0?y(g[0]):void 0,effectDescription:p.effectDescription||"",derivedCards:p.derivedCards,imageData:b},count:1}]}const h=c.reduce((u,p)=>u+p.count,0);if(this.pendingImportType!=="zip"){const u=De(this.state),p=this.mergeDeckEntries(u.cards,c);u.cards=p,m.length>0&&m.forEach(b=>{const g=u.cards.find(y=>y.card.id===b.id);g?g.count++:u.cards.push({card:b,count:1})})}this.state={...this.state,groups:[...this.state.groups]},this.pendingImportCards=[],this.pendingImportMode=null,this.pendingImportType=null,this.collapsedGroups=new Set(this.state.groups.map(u=>u.id)),this.saveDeck(),this.renderCardManager(),this.showResult("import-result",`✓ 已合并导入 ${h} 张卡牌`)}catch(c){console.error("合并导入失败:",c),alert("导入失败："+(c instanceof Error?c.message:"未知错误"))}finally{d&&(d.textContent="📂 导入卡包(ZIP)",d.disabled=!1)}},a.click()}),document.getElementById("replace-import-btn")?.addEventListener("click",()=>{if(!this.pendingImportType)return;this.pendingImportMode="replace";const n=document.getElementById("import-mode-dialog");n&&(n.style.display="none");const a=document.createElement("input");a.type="file",a.accept=this.pendingImportType==="zip"?".zip,application/zip":".png",a.onchange=async o=>{const l=o.target.files?.[0];if(!l){this.pendingImportMode=null,this.pendingImportType=null;return}const d=document.getElementById("import-zip-btn");d&&(d.textContent="⌛️ 导入中...",d.disabled=!0);try{let c=[],m=[];if(this.pendingImportType==="zip"){const h=await this.parseGroupsFromZipBlob(l);c=[],m=h.heroCards;const u=De(this.state);this.state.groups=[u],h.groups.length>0?(u.cards=[...h.groups[0].cards],c=[...h.groups[0].cards]):u.cards=[];for(let p=1;p<h.groups.length;p++){const b=h.groups[p],g={id:`group_${Date.now()}_${p}`,name:b.name,cards:[...b.cards]};this.state.groups.push(g),c=[...c,...b.cards]}if(c.length===0){alert("无效卡包：ZIP 中没有找到 PNG 卡牌文件");return}}else{if(!confirm("覆盖导入将清空当前所有卡牌，确定继续？")){this.pendingImportMode=null,this.pendingImportType=null;return}const h=await this.importCardFromPNGFile(l);if(!h){alert("导入失败：无法解析卡牌文件");return}const{cardData:u,imageData:p}=h,b=u.effects||(u.effect?[u.effect]:[]),g=y=>{const x={...y};return y.targets&&(x.targets=[...y.targets]),x};c=[{card:{id:ke(),name:u.name||"",type:u.type||"minion",cost:u.cost??1,attack:u.attack??1,health:u.health??1,maxHealth:u.health??1,keywords:(u.keywords||[]).map(y=>y==="风怒"?"__WINDURY__":y).map(y=>y==="__WINDURY__"?"连击":y).map(y=>Object.values(Ee).find(w=>w.name===y)||{name:y,description:"",hasValue:!1}),armorValue:u.armorValue??1,effects:b.map(g),effect:b.length>0?g(b[0]):void 0,effectDescription:u.effectDescription||"",derivedCards:u.derivedCards,imageData:p},count:1}]}if(this.pendingImportType!=="zip"){const h=De(this.state);h.cards=c,m.length>0&&m.forEach(u=>{const p=h.cards.find(b=>b.card.id===u.id);p?p.count++:h.cards.push({card:u,count:1})})}this.state={...this.state,groups:[...this.state.groups]},this.pendingImportCards=[],this.pendingImportMode=null,this.pendingImportType=null,this.collapsedGroups=new Set(this.state.groups.map(h=>h.id)),this.saveDeck(),this.renderCardManager(),this.showResult("import-result","✓ 已覆盖导入")}catch(c){console.error("覆盖导入失败:",c),alert("导入失败："+(c instanceof Error?c.message:"未知错误"))}finally{d&&(d.textContent="📂 导入卡包(ZIP)",d.disabled=!1)}},a.click()}),document.getElementById("cancel-import-btn")?.addEventListener("click",()=>{this.pendingImportCards=[],this.pendingImportMode=null,this.pendingImportType=null;const n=document.getElementById("import-mode-dialog");n&&(n.style.display="none")}),document.getElementById("clear-deck-btn")?.addEventListener("click",()=>{const n=this.state.groups.reduce((a,o)=>a+o.cards.reduce((l,d)=>l+d.count,0),0);if(n===0){alert("卡包已经是空的！");return}confirm(`确定要清除全部 ${n} 张卡牌吗？`)&&(this.state={...this.state,groups:[{id:Me,name:"公用卡组",cards:[]}]},this.state.sharedDeck=[],this.saveDeck(),this.renderCardManager())}),document.getElementById("export-zip-btn")?.addEventListener("click",()=>{if(!this.state.groups.some(a=>a.cards.length>0)){alert("卡包为空，无法导出！");return}this.exportDeckToZip()}),document.getElementById("deck-folder-btn")?.addEventListener("click",async()=>{try{if(this.deckFolderHandle){const a=this.deckFolderHandle;if(await a.queryPermission({mode:"read"})!=="granted"&&await a.requestPermission({mode:"read"})!=="granted"){alert("需要授权才能访问该文件夹，请重新选择文件夹。"),this.deckFolderHandle=null,this.deckFolderName="",await Pt(null),this.render();return}await this.refreshDeckFolderZips(),this.render();return}if(typeof window.showDirectoryPicker!="function"){alert(`当前浏览器不支持「卡包组文件夹」功能（需要 Chrome/Edge 最新版，且页面必须在安全上下文 HTTPS 或 localhost 中）。

你可以改用「导入卡包(ZIP)」按钮手动导入卡包文件。`);return}const n=await window.showDirectoryPicker();this.deckFolderHandle=n,this.deckFolderName=n.name,await Pt(n),await this.refreshDeckFolderZips(),this.render()}catch(n){if(n.name==="AbortError")return;if(n.name==="SecurityError"){alert(`无法访问文件夹：浏览器安全策略阻止了此操作。

可能原因：页面被嵌入在 iframe 中，或当前环境限制了文件系统访问。
建议改用「导入卡包(ZIP)」按钮手动导入。`),console.warn("选择文件夹失败(SecurityError):",n.message);return}alert("选择文件夹失败："+(n instanceof Error?n.message:"未知错误")),console.warn("选择文件夹失败:",n)}}),document.getElementById("import-zip-btn")?.addEventListener("click",()=>{this.pendingImportType="zip";const n=document.getElementById("import-mode-dialog");n&&(n.style.display="block")}),document.getElementById("import-card-to-deck-btn")?.addEventListener("click",()=>{const n=document.createElement("input");n.type="file",n.accept="image/png",n.style.cssText="position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;",document.body.appendChild(n),n.addEventListener("change",async a=>{const o=a.target.files?.[0];if(document.body.removeChild(n),!o)return;const l=document.getElementById("import-card-to-deck-btn");l&&(l.textContent="⌛️ 导入中...",l.disabled=!0);try{const d=await this.importCardFromPNGFile(o);if(!d){alert("无法从该 PNG 文件中读取卡牌数据");return}const{cardData:c,imageData:m}=d,h=c.effects||(c.effect?[c.effect]:[]),u=y=>{const x={...y};return y.targets&&(x.targets=[...y.targets]),x},p={id:ke(),name:c.name||"",type:c.type||"minion",cost:c.cost??1,attack:c.attack??1,health:c.health??1,maxHealth:c.health??1,keywords:(c.keywords||[]).map(y=>y==="风怒"?"__WINDURY__":y).map(y=>y==="__WINDURY__"?"连击":y).map(y=>Object.values(Ee).find(w=>w.name===y)||{name:y,description:"",hasValue:!1}),armorValue:c.armorValue??1,effects:h.map(u),effect:h.length>0?u(h[0]):void 0,effectDescription:c.effectDescription||"",derivedCards:c.derivedCards,imageData:m},b=De(this.state),g=b.cards.find(y=>y.card.id===p.id);g?g.count++:b.cards.push({card:p,count:1}),this.state={...this.state,groups:[...this.state.groups]},this.saveDeck(),this.renderCardManager(),this.showResult("import-result","✓ 已导入卡牌")}catch(d){console.error("导入卡牌失败:",d),alert("导入失败："+(d instanceof Error?d.message:"未知错误"))}finally{l&&(l.textContent="🃏 导入卡牌",l.disabled=!1)}}),n.click()}),document.querySelectorAll(".increase-card-btn").forEach(n=>{n.addEventListener("click",()=>{const a=n,o=parseInt(a.dataset.cardId||"0"),d=a.closest("[data-group-id]")?.dataset.groupId,c=this.state.groups.find(m=>m.id===d);if(c){const m=c.cards.find(h=>h.card.id===o);if(m){m.count=(m.count||1)+1,this.state={...this.state,groups:[...this.state.groups]},this.syncSharedDeck(),this.saveDeck(),this.renderCardManager();return}}})}),document.querySelectorAll(".decrease-card-btn").forEach(n=>{n.addEventListener("click",()=>{const a=n,o=parseInt(a.dataset.cardId||"0"),d=a.closest("[data-group-id]")?.dataset.groupId,c=this.state.groups.find(m=>m.id===d);if(c){const m=c.cards.find(h=>h.card.id===o);if(m){if(m.count&&m.count>1)m.count-=1;else return;this.state={...this.state,groups:[...this.state.groups]},this.syncSharedDeck(),this.saveDeck(),this.renderCardManager();return}}})}),document.querySelectorAll(".edit-card-btn").forEach(n=>{n.addEventListener("click",()=>{const a=n,o=parseInt(a.dataset.cardId||"0"),d=a.closest("[data-group-id]")?.dataset.groupId,c=this.state.groups.find(u=>u.id===d);let m;if(c&&(m=c.cards.find(u=>u.card.id===o)),!m)return;const h=m.card;if(h.type==="hero"){this.heroName=h.name,this.heroImageData=h.imageData||"",this.isHeroEditMode=!0,this.editingHeroId=h.id,this.heroDerivedCards=h.derivedCards?h.derivedCards.map(u=>({name:u.name||"",type:u.type||"minion",cost:u.cost??1,attack:u.attack??1,health:u.health??1,armorValue:u.armorValue??0,preparationValue:u.preparationValue??1,imageData:u.imageData||"",keywords:u.keywords||[],effects:u.effects||[]})):[],this.heroSkills=h.skills||[],this.heroSpeech=h.heroSpeech?{...h.heroSpeech}:{greeting:"",apology:"",taunt:"",exclamation:"",pity:"",flirt:""},this.heroVoiceType=h.heroSpeech?.voiceType||"none",this.heroEditingDerivedIndex=null,this.heroEditingSkillIndex=null,this.editingCards=[],this.state=le(this.state,{type:"SHOW_HERO_EDITOR"}),this.render();return}this.isEditMode=!0,this.editingCardSample=h,this.currentCardIndex=0,this.currentCard={name:h.name,type:h.type||"minion",cost:h.cost,attack:h.attack,health:h.health,keywords:[...h.keywords],armorValue:h.armorValue||1,preparationValue:h.preparationValue||1,imageData:h.imageData||null,effects:h.effects?h.effects.map(u=>({...u,moment:u.moment||"打出时",targets:u.targets||[],attackValue:u.attackValue??1,healthValue:u.healthValue??1,isAttackPositive:u.isAttackPositive??!0,isHealthPositive:u.isHealthPositive??!0})):h.effect?[{...h.effect,moment:h.effect.moment||"打出时",targets:h.effect.targets||[],attackValue:h.effect.attackValue??1,healthValue:h.effect.healthValue??1,isAttackPositive:h.effect.isAttackPositive??!0,isHealthPositive:h.effect.isHealthPositive??!0}]:[],spellEffect:h.type==="spell"?h.effects?.[0]||h.effect||{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}:{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}},this.currentEffectIndex=0,h.derivedCards&&h.derivedCards.length>0?(this.editingCards=h.derivedCards.map((u,p)=>{const b=u.type==="spell";return{name:u.name||(p===0?"":`衍生卡${p}`),type:u.type||"minion",cost:u.cost??1,attack:u.attack??(b?0:1),health:u.health??(b?0:1),keywords:(u.keywords||[]).map(g=>Object.values(Ee).find(x=>x.name===g.name)||{name:g.name,description:"",hasValue:!1}),armorValue:u.armorValue??1,preparationValue:u.preparationValue??1,effects:(u.effects||[]).map(g=>({...g,moment:g.moment||"打出时",targets:g.targets||[],attackValue:g.attackValue??1,healthValue:g.healthValue??1,isAttackPositive:g.isAttackPositive??!0,isHealthPositive:g.isHealthPositive??!0})),spellEffect:b?u.effects?.[0]||{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}:{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0},imageData:u.imageData||null}}),this.editingCards[0]=this.currentCard):this.editingCards=[this.currentCard],this.currentCardIndex=0,this.state=le(this.state,{type:"SHOW_CARD_CREATOR"}),this.render()})}),document.querySelectorAll(".delete-btn, .delete-all-btn").forEach(n=>{n.addEventListener("click",()=>{const a=n,o=parseInt(a.dataset.cardId||"0"),d=a.closest("[data-group-id]")?.dataset.groupId,c=this.state.groups.find(m=>m.id===d);if(c){c.cards=c.cards.filter(m=>m.card.id!==o),this.state={...this.state,groups:[...this.state.groups]},this.syncSharedDeck(),this.saveDeck(),this.renderCardManager();return}})}),document.querySelectorAll(".deck-folder-zip-btn").forEach(n=>{n.addEventListener("click",async a=>{const o=a.currentTarget.dataset.zipName;if(!o)return;const l=this.deckFolderZips.find(d=>d.name===o);if(l)try{const d=await l.handle.getFile(),c=await this.parseGroupsFromZipBlob(d),m=c.heroCards,h=De(this.state);if(c.groups.length>0){const u=c.groups[0].cards;h.cards=this.mergeDeckEntries(h.cards,u)}for(let u=1;u<c.groups.length;u++){const p=c.groups[u],b=this.state.groups.find(g=>g.name===p.name);if(b)b.cards=this.mergeDeckEntries(b.cards,p.cards);else{const g={id:`group_${Date.now()}_${u}`,name:p.name,cards:[...p.cards]};this.state.groups.push(g)}}this.state={...this.state,groups:[...this.state.groups]},this.syncSharedDeck(),this.saveDeck(),this.showResult("import-result",`✓ 导入成功：${o}`),this.renderCardManager()}catch(d){alert(`导入失败：${d instanceof Error?d.message:"未知错误"}`)}})}),document.getElementById("back-menu-btn")?.addEventListener("click",()=>{this.saveDeck(),this.state=le(this.state,{type:"BACK_TO_MENU"}),this.render()})}showResult(e,s){const t=document.getElementById(e);t&&(t.textContent=s,t.style.display="block",setTimeout(()=>{t.style.display="none"},2e3))}playDrawCardAnimation(e=0){this.playDrawSound();const s=document.querySelectorAll(".hand-card-wrapper.newly-drawn");if(s.length===0){console.log("没有新抽的牌需要动画"),this.state=le(this.state,{type:"CLEAR_NEWLY_DRAWN"});return}console.log("开始播放抽牌动画，牌数:",s.length);const t=document.getElementById("end-turn-btn")||document.getElementById("my-turn-btn"),r=document.getElementById("hand-container");if(!t||!r){console.log("找不到按钮或容器，直接显示手牌"),s.forEach(l=>{l.classList.remove("newly-drawn"),l.style.opacity="1"}),this.state=le(this.state,{type:"CLEAR_NEWLY_DRAWN"});return}const i=t.getBoundingClientRect(),n=i.left+i.width/2,a=i.top+i.height/2;s.forEach((l,d)=>{const c=l.dataset.cardId,m=e+d*200;setTimeout(()=>{c&&this.animateSingleCard(parseInt(c),n,a)},m)});const o=e+s.length*200+500;setTimeout(()=>{document.querySelectorAll(".hand-card-wrapper.newly-drawn").forEach(l=>{l.classList.remove("newly-drawn"),l.style.opacity="1"}),this.state=le(this.state,{type:"CLEAR_NEWLY_DRAWN"})},o)}animateSingleCard(e,s,t){const r=document.querySelector(`.hand-card-wrapper[data-card-id="${e}"]`);if(!r){console.log("animateSingleCard: 找不到卡牌元素",e);return}const i=r.getBoundingClientRect(),n=i.left+i.width/2,a=i.top+i.height/2,o=getComputedStyle(r).getPropertyValue("--rotate").trim(),l=parseFloat(o)||0,d=document.createElement("div");d.className="draw-card-animation",d.innerHTML=`
      <div class="draw-card-fly" style="
        width: 30px;
        height: 42px;
        background: linear-gradient(135deg, #fff 0%, #f8f4ec 100%);
        border: 2px solid #c4b49c;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      "></div>
    `,d.style.left="0",d.style.top="0",document.body.appendChild(d);const c=(s+n)/2,m=Math.min(t,a)-100,h=350,u=performance.now(),p=(g,y)=>{const x=document.createElement("div");x.className="draw-trail-particle",x.style.left=`${g}px`,x.style.top=`${y}px`,x.style.background="linear-gradient(135deg, rgba(212, 196, 168, 0.9) 0%, rgba(196, 180, 156, 0.7) 100%)",document.body.appendChild(x),setTimeout(()=>{x.style.transition="opacity 0.25s, transform 0.25s",x.style.opacity="0",x.style.transform="scale(0.2)",setTimeout(()=>x.remove(),250)},30)},b=g=>{const y=g-u,x=Math.min(y/h,1),w=1-Math.pow(1-x,3),f=w,v=(1-f)*(1-f)*s+2*(1-f)*f*c+f*f*n,E=(1-f)*(1-f)*t+2*(1-f)*f*m+f*f*a,S=.3+.7*w;d.style.transform=`translate(${v-15}px, ${E-21}px) scale(${S})`,d.style.opacity="1",y%25<15&&x<.85&&p(v+(Math.random()-.5)*8,E+(Math.random()-.5)*8),x<1?requestAnimationFrame(b):(d.remove(),r.classList.remove("newly-drawn"),r.style.transition="opacity 0.25s, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",r.style.opacity="1",r.style.transform=`rotate(${l}deg) scale(1)`,setTimeout(()=>{r.style.removeProperty("transform"),r.style.removeProperty("opacity"),r.style.removeProperty("transition")},400))};requestAnimationFrame(b)}mergeDeckEntries(e,s){const t=new Map;for(const r of e)t.set(be(r.card),{...r});for(const r of s){const i=be(r.card),n=t.get(i);n?n.count+=r.count:t.set(i,{...r})}return Array.from(t.values())}saveDeck(e){try{if(e!==void 0){const s=De(this.state);s.cards=e,this.state={...this.state,groups:[...this.state.groups]}}this.syncSharedDeck()}catch(s){console.warn("保存分组信息失败:",s)}this.pendingSavePromise=_t(this.state.sharedDeck,this.state.heroCards||[],this.state.groups).catch(s=>{console.warn("IndexedDB 保存卡包失败:",s)})}syncSharedDeck(){const e=De(this.state);this.state.sharedDeck=e.cards;const s=[];for(const t of this.state.groups)for(const r of t.cards)r.card.type==="hero"&&s.push(r.card);this.state.heroCards=s}saveDeckToFile(){const e=o=>{const l={...o};return o.targets&&(l.targets=[...o.targets]),o.isOpponent&&(l.isOpponent=o.isOpponent),l},s=this.state.sharedDeck.reduce((o,l)=>o+l.count,0),t=[];t.push("# 妙卡包 - 卡包文件"),t.push(`# 生成时间: ${new Date().toLocaleString()}`),t.push(`# 总卡牌数: ${s}`),t.push(""),this.state.sharedDeck.forEach(({card:o,count:l})=>{t.push(`${o.name} x${l}`);const d={name:o.name,type:o.type,cost:o.cost,attack:o.attack,health:o.health,keywords:o.keywords.map(m=>m.name),armorValue:o.armorValue,effects:o.effects?o.effects.map(e):void 0,effect:o.effect?e(o.effect):void 0,effectDescription:o.effectDescription||void 0,derivedCards:o.derivedCards,spellEffect:o.type==="spell"?o.legacyEffect:void 0,spellValue:o.type==="spell"?o.legacyEffectValue:void 0},c=btoa(encodeURIComponent(JSON.stringify(d)));t.push(c),t.push("")});const r=t.join(`
`),i=new Blob([r],{type:"text/plain;charset=utf-8"}),n=URL.createObjectURL(i),a=document.createElement("a");a.href=n,a.download="cards.txt",a.click(),URL.revokeObjectURL(n),this.showResult("import-result","✓ 卡包已保存！")}parseDeckFile(e){const s=[],t=e.split(`
`);for(let r=0;r<t.length;r++){const i=t[r].trim();if(i.startsWith("#")||i==="")continue;const n=i.match(/^(.+?)\s*x(\d+)$/);if(n){const a=n[1].trim(),o=parseInt(n[2]),l=t[r+1]?.trim();if(l&&!l.startsWith("#")&&l!=="")try{const d=JSON.parse(decodeURIComponent(atob(l))),c=(d.keywords||[]).map(u=>Object.values(Ee).find(p=>p.name===u)).filter(Boolean);let m=[];d.effects&&Array.isArray(d.effects)&&d.effects.length>0?m=d.effects.filter(u=>u.effect).map(u=>({moment:u.moment||(d.type==="spell"?"打出时":void 0),targets:u.targets||[],effect:u.effect,value:u.value||0,attackValue:u.attackValue||0,healthValue:u.healthValue||0,isPositive:u.isPositive!==!1,isAttackPositive:u.isAttackPositive!==!1,isHealthPositive:u.isHealthPositive!==!1,summonedCardIndex:u.summonedCardIndex,summonedCardIndices:u.summonedCardIndices,isRandom:u.isRandom})):d.effect&&d.effect.effect&&(m=[{moment:d.effect.moment||(d.type==="spell"?"打出时":void 0),targets:d.effect.targets||[],effect:d.effect.effect,value:d.effect.value||0,attackValue:d.effect.attackValue||0,healthValue:d.effect.healthValue||0,isPositive:d.effect.isPositive!==!1,isAttackPositive:d.effect.isAttackPositive!==!1,isHealthPositive:d.effect.isHealthPositive!==!1,summonedCardIndex:d.effect.summonedCardIndex,summonedCardIndices:d.effect.summonedCardIndices,isRandom:d.effect.isRandom,isOpponent:d.effect.isOpponent}]);const h=m.map(u=>{const p=u.targets||[],b=this.mergeTargets(p),g=b.includes("无需目标")||b.includes("卡牌")||p.length===0,y=b.length>0&&!g?`对${b.join("、")}`:"",x=u.isOpponent?"对手":"",w=u.moments||(u.moment?[u.moment]:[]),f=w.length===1&&w[0]==="打出时"?"":w.map(E=>$e[E]||"").join(""),v=g?x:"";if(u.effect==="造成伤害"){const E=u.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[u.elementType]||"";return`${f}${v}${y}造成${u.value}点${E}伤害`}else{if(u.effect==="抽牌")return`${f}${v}抽${u.value}张牌`;if(u.effect==="弃牌")return`${f}${v}弃${u.value}张牌`;if(u.effect==="属性变化"){const E=u.isAttackPositive!==!1?"+":"-",S=u.isHealthPositive!==!1?"+":"-",T=u.attackValue||0,A=u.healthValue||0;return T===0||A===0?`${f}${v}${y}${E}${T}/${S}${A}`:`${f}${v}${y}${E}${T}/${S}${A}`}else{if(u.effect==="给予印记")return`${f}${v}${y}给予${u.value}点印记`;if(u.effect==="治愈")return`${f}${v}${y}治愈${u.value}点生命`;if(u.effect==="获得能量")return`${f}${v}获得${u.value}点能量`;if(u.effect==="失去能量")return`${f}${v}失去${u.value}点能量`;if(u.effect==="召唤"){const E=u.value||1;let S;return u.summonSource&&u.summonSource!=="derived"?S=Ie(u.summonSource,!!u.isRandom):S="衍生随从",`${f}${v}召唤${E}张${S}`}else if(u.effect==="获得"){const E=u.value||1;let S;return u.summonSource&&u.summonSource!=="derived"?S=Ie(u.summonSource,!!u.isRandom):S="衍生牌",`${f}${v}获得${E}张${S}(随从)`}}}return""}).filter(Boolean).join("；");for(let u=0;u<o;u++)s.push({id:ke(),name:d.name||a,cost:d.cost||0,attack:d.attack||0,health:d.health||1,maxHealth:d.health||1,type:d.type||"minion",keywords:[...c],armorValue:d.armorValue,effects:m.length>0?m:void 0,effect:m.length>0?m[0]:void 0,effectDescription:h||void 0,derivedCards:d.derivedCards,legacyEffect:d.type==="spell"?d.spellEffect:void 0,legacyEffectValue:d.type==="spell"?d.spellValue:void 0});r++}catch{console.error("解析卡牌代码失败:",l)}}}return s}renderSetup(){const e=this.state.sharedDeck.reduce((l,d)=>l+d.count,0),s=this.state.phase==="robotSetup",t=localStorage.getItem("miaoKaBao_player1Name")||"",r=localStorage.getItem("miaoKaBao_player2Name")||"";this.app.innerHTML=`
      <div class="min-h-screen flex items-center justify-center" style="background: transparent;">
        <div class="text-center p-12 rounded-3xl shadow-2xl" style="background: url('/images/paper_texture_custom.png') center/cover, rgba(255, 255, 255, 0.95); border: 8px solid #d4c4a8;">
          <h2 class="text-3xl font-bold mb-8" style="color: #8b7355; font-family: 'Georgia', serif;">
            ${s?"🤖 Robot 对战设置":"输入玩家昵称"}
          </h2>
          <div class="space-y-6 mb-8">
            ${s?`
            <div class="flex items-center gap-4">
              <div class="flex flex-col items-start w-24">
                <label class="text-xl font-bold" style="color: #a08060;">玩家:</label>
                ${this.player1SelectedHero?`<span class="text-xs mt-1" style="color: #5a4a3a;">${this.player1SelectedHero.name}</span>`:""}
              </div>
              <input type="text" id="player1-name" placeholder="请输入昵称" value="${t}"
                class="px-4 py-3 rounded-lg text-lg w-48 outline-none"
                style="border: 3px solid #d4c4a8; background: #faf8f5;">
              <button id="select-hero-p1-btn" class="px-3 py-2 rounded-lg font-bold text-sm transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #c4a882 0%, #b89a72 100%); color: #fff; border: 2px solid #a08860;">
                📖 选择英雄
              </button>
            </div>
            `:`
            <div class="flex items-center gap-4">
              <div class="flex flex-col items-start w-24">
                <label class="text-xl font-bold" style="color: #a08060;">玩家1:</label>
                ${this.player1SelectedHero?`<span class="text-xs mt-1" style="color: #5a4a3a;">${this.player1SelectedHero.name}</span>`:""}
              </div>
              <input type="text" id="player1-name" placeholder="请输入昵称" value="${t}"
                class="px-4 py-3 rounded-lg text-lg w-48 outline-none"
                style="border: 3px solid #d4c4a8; background: #faf8f5;">
              <button id="select-hero-p1-btn" class="px-3 py-2 rounded-lg font-bold text-sm transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #c4a882 0%, #b89a72 100%); color: #fff; border: 2px solid #a08860;">
                📖 选择英雄
              </button>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex flex-col items-start w-24">
                <label class="text-xl font-bold" style="color: #a08060;">玩家2:</label>
                ${this.player2SelectedHero?`<span class="text-xs mt-1" style="color: #5a4a3a;">${this.player2SelectedHero.name}</span>`:""}
              </div>
              <input type="text" id="player2-name" placeholder="请输入昵称" value="${r}"
                class="px-4 py-3 rounded-lg text-lg w-48 outline-none"
                style="border: 3px solid #d4c4a8; background: #faf8f5;">
              <button id="select-hero-p2-btn" class="px-3 py-2 rounded-lg font-bold text-sm transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #c4a882 0%, #b89a72 100%); color: #fff; border: 2px solid #a08860;">
                📖 选择英雄
              </button>
            </div>
            `}
          </div>

          <!-- 英雄选择弹窗 -->
          <div id="hero-select-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center" style="background: rgba(0, 0, 0, 0.6);">
            <div class="p-6 rounded-2xl shadow-2xl max-w-lg w-full mx-4" style="background: #faf8f5; border: 4px solid #d4c4a8;">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold" style="color: #8b7355;">选择英雄牌</h3>
                <button id="close-hero-select-modal" class="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                  style="background: #e8dfd0; color: #8b7355;">✕</button>
              </div>
              <div id="hero-select-list" class="grid grid-cols-3 gap-3 max-h-64 overflow-y-auto p-2">
                <!-- 英雄牌列表动态生成 -->
              </div>
              <div id="hero-select-empty" class="hidden text-center py-8" style="color: #a08060;">
                暂无英雄牌，请先在卡牌编辑中创建并加入卡包
              </div>
            </div>
          </div>

          <!-- 导入卡包文件 -->
          <div class="mb-6 p-4 rounded-xl" style="background: rgba(212, 196, 168, 0.2); border: 2px dashed #d4c4a8;">
            <div class="flex items-center justify-center gap-4">
              <span class="text-sm" style="color: #8b7355;">当前牌堆: ${e} 张</span>
              <label class="px-4 py-2 font-bold rounded-lg cursor-pointer transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #ffc46b 0%, #f0b850 100%); color: #fff; border: 2px solid #e0a848;">
                📂 导入卡包文件
                <input type="file" id="setup-import-file" accept=".zip,application/zip" class="hidden" />
              </label>
            </div>
            <div id="setup-import-info" class="hidden mt-2 text-sm" style="color: #5a4a3a;"></div>
          </div>
          
          <div class="flex gap-4 justify-center">
            <button id="back-btn" class="px-8 py-3 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
              style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 3px solid #a08060;">
              返回
            </button>
            <button id="confirm-btn" class="px-8 py-3 text-lg font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all"
              style="background: ${s?"linear-gradient(135deg, #a0a0a0 0%, #808080 100%)":"linear-gradient(135deg, #d4a574 0%, #c4956a 100%)"}; color: #fff; border: 3px solid ${s?"#606060":"#b8956a"};">
              确认开始
            </button>
          </div>
        </div>
      </div>
    `,document.getElementById("setup-import-file")?.addEventListener("change",async l=>{const d=l.target.files?.[0];if(!d)return;const c=document.querySelector('label[for="setup-import-file"]'),m=c?.textContent||"📂 导入卡包文件";c&&(c.textContent="⌛️ 导入中...");try{const{normalEntries:h,heroCards:u}=await this.importDeckFromZip(d);if(h.length===0&&u.length===0){alert("无效卡包：ZIP 中没有找到 PNG 卡牌文件");return}const p=h.reduce((x,w)=>x+w.count,0)+u.length,b=De(this.state),g=this.mergeDeckEntries(b.cards,h);b.cards=g,u.length>0&&u.forEach(x=>{const w=b.cards.find(f=>f.card.id===x.id);w?w.count++:b.cards.push({card:x,count:1})}),this.state={...this.state,groups:[...this.state.groups]},this.state.sharedDeck=b.cards,this.saveDeck();const y=document.getElementById("setup-import-info");y&&(y.textContent=`✓ 已导入 ${p} 张卡牌`,y.classList.remove("hidden")),setTimeout(()=>{(this.state.phase==="setup"||this.state.phase==="robotSetup")&&this.renderSetup()},1500)}catch(h){console.error("导入卡包失败:",h),alert("导入失败："+(h instanceof Error?h.message:"未知错误"))}finally{c&&(c.textContent=m),l.target.value=""}});const i=document.getElementById("hero-select-modal"),n=document.getElementById("hero-select-list"),a=document.getElementById("hero-select-empty"),o=l=>{n.innerHTML="";let d=jt(this.state);const c=l===1?this.player2SelectedHero:this.player1SelectedHero;if(c&&(d=d.filter(m=>m.id!==c.id)),d.length===0)a.classList.remove("hidden"),a.textContent=c?"对方已选择了该英雄，请选择其他英雄":"暂无英雄牌，请先在卡牌编辑中创建并加入卡包";else{if(a.classList.add("hidden"),a.textContent="暂无英雄牌，请先在卡牌编辑中创建并加入卡包",d.length>=2){const m=document.createElement("div");m.className="cursor-pointer rounded-xl p-2 transition-all transform hover:scale-105",m.style.cssText="background: #f5f0e8; border: 2px dashed #c4a882;",m.innerHTML=`
            <div class="w-full rounded-lg overflow-hidden mb-1 flex items-center justify-center" style="aspect-ratio: 4/3; background: #e8dfd0;">
              <span style="font-size: 2rem;">🎲</span>
            </div>
            <div class="text-xs font-bold text-center truncate" style="color: #5a4a3a;">随机</div>
          `,m.addEventListener("click",()=>{const h=l===1?this.player1SelectedHero:this.player2SelectedHero,u=h?d.filter(y=>y.id!==h.id):d,p=u[Math.floor(Math.random()*u.length)];l===1?this.player1SelectedHero=p:this.player2SelectedHero=p,i.classList.add("hidden");const b=l===1?"select-hero-p1-btn":"select-hero-p2-btn",g=document.getElementById(b);if(g){const y=g.textContent;g.textContent="✅ 已随机",g.style.background="linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)",this.render(),setTimeout(()=>{document.getElementById(b)&&(g.textContent=y,g.style.background="linear-gradient(135deg, #c4a882 0%, #b89a72 100%)")},1200)}else this.render()}),n.appendChild(m)}d.forEach(m=>{const h=document.createElement("div"),u=l===1?this.player1SelectedHero?.id===m.id:this.player2SelectedHero?.id===m.id;h.className=`cursor-pointer rounded-xl p-2 transition-all transform hover:scale-105 ${u?"ring-4":""}`,h.style.cssText=u?"ring-color: #4CAF50; background: rgba(76, 175, 80, 0.1);":"background: #f5f0e8;",h.innerHTML=`
            <div class="w-full rounded-lg overflow-hidden mb-1" style="aspect-ratio: 4/3;">
              ${m.imageData?`<img src="${m.imageData}" class="w-full h-full object-cover">`:'<div class="w-full h-full flex items-center justify-center" style="background: #e8dfd0;"><span style="font-size: 2rem;">🦸</span></div>'}
            </div>
            <div class="text-xs font-bold text-center truncate" style="color: #5a4a3a;">${m.name}</div>
          `,h.addEventListener("click",()=>{l===1?this.player1SelectedHero=m:this.player2SelectedHero=m,i.classList.add("hidden");const p=l===1?"select-hero-p1-btn":"select-hero-p2-btn",b=document.getElementById(p);if(b){const g=b.textContent;b.textContent="✅ 选择完成",b.style.background="linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)",this.render(),setTimeout(()=>{document.getElementById(p)&&(b.textContent=g,b.style.background="linear-gradient(135deg, #c4a882 0%, #b89a72 100%)")},1200)}else this.render()}),n.appendChild(h)})}i.classList.remove("hidden")};document.getElementById("select-hero-p1-btn")?.addEventListener("click",()=>o(1)),document.getElementById("select-hero-p2-btn")?.addEventListener("click",()=>o(2)),document.getElementById("close-hero-select-modal")?.addEventListener("click",()=>i.classList.add("hidden")),i.addEventListener("click",l=>{l.target===i&&i.classList.add("hidden")}),document.getElementById("back-btn")?.addEventListener("click",()=>{this.state=le(this.state,{type:"BACK_TO_MENU"}),this.render()}),document.getElementById("confirm-btn")?.addEventListener("click",()=>{const l=document.getElementById("player1-name").value;localStorage.setItem("miaoKaBao_player1Name",l);const d=h=>{const u=this.state.groups;if(!u||u.length===0)return 0;const p=u[0].cards.filter(g=>g.card.type!=="hero").reduce((g,y)=>g+y.count,0);let b=0;if(h?.type==="hero"){const g=Je(this.state,h);g&&g.id!==Me&&(b=g.cards.filter(y=>y.card.type!=="hero").reduce((y,x)=>y+x.count,0))}return p+b},c=d(this.player1SelectedHero),m=s?this.state.groups[0].cards.filter(h=>h.card.type!=="hero").reduce((h,u)=>h+u.count,0):d(this.player2SelectedHero);if(c<12||m<12){alert(`卡组不足！
玩家1: ${c}张
玩家2: ${m}张
双方卡组（公用卡组+英雄个人卡组）至少需要12张才能开始对战！`);return}if(s)this.state=le(this.state,{type:"START_ROBOT_BATTLE",playerName:l,playerHero:this.player1SelectedHero||void 0}),this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100);else{const h=document.getElementById("player2-name").value;localStorage.setItem("miaoKaBao_player2Name",h),this.state=le(this.state,{type:"START_GAME",player1Name:l,player2Name:h,player1Hero:this.player1SelectedHero||void 0,player2Hero:this.player2SelectedHero||void 0}),this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100)}})}renderHeroBackground(e){return e?.imageData?`background-image: url('${e.imageData}'); background-size: cover; background-position: center;`:"background: linear-gradient(135deg, #fff 0%, #f8f4ec 100%);"}renderHeroName(e){return e?.name?`<div class="text-xs mt-0.5" style="color: rgba(255,255,255,0.85); text-shadow: 0 0 6px rgba(0,0,0,0.6);">${e.name}</div>`:""}renderEnergy(e,s,t=0){const r=s-t;let i="#4a90d9";s===0?i="#888888":t>0&&s===t&&(i="#5a9a5a");const n=Math.max(e,s);return`<div class="flex gap-1 mt-1 items-center">
      <div class="font-bold text-xl mr-1" style="color: ${i}; text-shadow: 0 0 8px rgba(0,0,0,0.6), 0 0 16px rgba(0,0,0,0.3);">${s}</div>
      ${Array(n).fill(0).map((a,o)=>{const l=o<s,d=o>=r&&l;return`<div class="energy-crystal ${l?"":"empty"} ${d?"bonus":""}"></div>`}).join("")}
    </div>`}renderHeroSkills(e,s){const t=e.heroCard?.skills||[];if(t.length===0)return"";const i=this.state.players.find(o=>o.id===this.state.currentPlayerId)?.id===e.id,n=e.heroSkillUsed||[];return`<div class="flex flex-row-reverse items-center gap-2" style="position: absolute; right: calc(50% + 96px); top: 50%; transform: translateY(-50%);">${t.map((o,l)=>{const d=o.type==="passive",c=n[l]||!1,m=e.energy>=(o.cost??0),u=(o.remainingCooldown??0)>0,p=o.usesLeft??(o.limited?o.maxUses:void 0),b=o.limited&&p===0,g=d||c||!m||!i||u||b,y=c||u||b?"grayscale":"",x=this.selectingTargetForSkill!==null&&this.selectingTargetForSkill.skillIndex===l&&this.selectingTargetForSkill.playerId===e.id,w=x?"#a855f7":g?"#c4b49c":"#4ade80";return`
        <div class="hero-skill-icon-wrapper hero-skill-icon-btn relative group" data-skill-index="${l}" data-player-id="${e.id}" data-is-opponent="${s}">
          <div class="w-[72px] h-[72px] rounded-full border-4 overflow-hidden ${y} ${x?"animate-pulse":""}"
            style="border-color: ${w}; ${x?"box-shadow: 0 0 16px 4px rgba(168,85,247,0.7);":""} background: ${o.iconData?`url('${o.iconData}') center/cover no-repeat`:"url('/images/wood_texture_seamless.png') center/cover no-repeat"};">
          </div>
          ${d?`
          <div class="absolute flex items-center justify-center"
            style="right: -6px; bottom: -6px; width: 28px; height: 28px; background: url('/images/energy_gem_v2.png') center/cover no-repeat; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4));">
          </div>
          `:`
          <div class="absolute flex items-center justify-center font-bold text-white shadow-md"
            style="right: -6px; bottom: -6px; width: 28px; height: 28px; background: url('/images/energy_gem_v2.png') center/cover no-repeat; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4));">
            <span style="font-size: 14px; color: #fff; text-shadow: 0 0 4px rgba(0,0,0,0.8);">${o.cost??0}</span>
          </div>
          `}
        </div>
      `}).join("")}</div>`}renderDefenseOverlay(e){const s=this.selectedAttackingMinion||this.attackingMinion;return!s||!(s.keywords.some(i=>i.name==="不动")?!1:s.isDefending?!0:!(s.attack<=0||["连击","狂怒"].some(i=>s.keywords.some(n=>n.name===i))||s.hasAttacked&&!s.keywords.some(i=>i.name==="机动")))?"":`
      <div id="defense-overlay" class="absolute inset-0 flex items-center justify-center" style="background: rgba(0,0,0,0.55); border-radius: 8px; z-index: 20; cursor: pointer;">
        <span class="text-sm font-bold text-center px-2" style="color: #fff; text-shadow: 0 1px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.6); line-height: 1.3;">${s.isDefending?"选择以取消防御":"选择以进入防御"}</span>
      </div>
    `}updateDefenseOverlayDOM(e){const s=document.getElementById("defense-overlay");if(!s)return;if(!(e.keywords.some(r=>r.name==="不动")?!1:e.isDefending?!0:!(e.attack<=0||["连击","狂怒"].some(r=>e.keywords.some(i=>i.name===r))||e.hasAttacked&&!e.keywords.some(r=>r.name==="机动")))){s.style.display="none";return}s.style.display="flex",s.querySelector("span").textContent=e.isDefending?"选择以取消防御":"选择以进入防御"}hideDefenseOverlayDOM(){const e=document.getElementById("defense-overlay");e&&(e.style.display="none")}syncSelectionToDOM(){if(document.querySelectorAll(".hand-card-wrapper.selected").forEach(e=>{e.classList.remove("selected"),e.querySelector(".hand-card-inner")?.classList.remove("selected")}),this.selectedHandCard){const e=document.querySelector(`.hand-card-wrapper[data-card-id="${this.selectedHandCard.id}"]`);e&&(e.classList.add("selected"),e.querySelector(".hand-card-inner")?.classList.add("selected"))}if(document.querySelectorAll(".bottom-board .minion-card.selected-attacker").forEach(e=>{e.classList.remove("selected-attacker"),parseInt(e.dataset.minionId);const s=e.dataset.baseBorder||"#c4b49c";this.selectingTargetForCard||this.selectingTargetForSkill?e.style.borderColor="#4a90d9":e.style.borderColor=s}),this.selectedAttackingMinion){const e=document.querySelector(`.bottom-board .minion-card[data-minion-id="${this.selectedAttackingMinion.id}"]`);e&&(e.classList.add("selected-attacker"),e.style.borderColor="#ff6b6b")}this.updatePlayAreaBorderDOM()}updatePlayAreaBorderDOM(){const e=document.getElementById("play-area");e&&(this.selectedHandCard?e.style.borderColor="#7cb87c":this.selectingTargetForCard?e.style.borderColor="#4a90d9":e.style.borderColor="#d4c4a8")}renderKeywords(e,s,t,r,i){if(e.length===0&&!i)return"";const n=e.filter(a=>!(a.name==="圣盾"&&t===!1));return n.length===0&&!i?"":`<div class="keywords-display">
      ${n.map(a=>{if(a.name==="护甲"){const o=a.value??s??1;return`<span class="keyword-tag">${a.name}${o}</span>`}return`<span class="keyword-tag">${a.name}</span>`}).join(" ")}
      ${i&&i>0?`<span class="keyword-tag">准备${i}</span>`:""}
    </div>`}renderKeywordsTooltip(e,s){if(e.length===0)return"";const t=e.filter(r=>!(r.name==="圣盾"&&s===!1));return t.length===0?"":`<div class="keywords-tooltip absolute left-1/2 -translate-x-1/2 top-full mt-2 p-3 rounded-lg shadow-2xl z-[99999] hidden group-hover:block pointer-events-none whitespace-nowrap" style="background: rgba(20, 15, 10, 0.97); min-width: 200px; border: 1px solid rgba(180, 150, 100, 0.4);">
      <div class="text-center text-xs mb-2 border-b pb-1" style="color: #c4a870; border-color: rgba(180, 150, 100, 0.3);">词条说明</div>
      ${t.map(r=>`
        <div class="text-sm mb-1 whitespace-normal">
          <span class="font-bold" style="color: #7cb9e8;">${r.name}</span>
          <span style="color: #e8e0d0;">: ${r.description}</span>
        </div>
      `).join("")}
    </div>`}getEffectIcons(e){if(!e||e.length===0)return"";const s=new Set;return e.forEach(t=>{t.moment&&s.add(t.moment)}),s.size===0?"":Array.from(s).map(t=>$e[t]||"").join("")}renderEffectsTooltip(e){if(!e||e.length===0)return"";const s=e.map(t=>{const r=this.getMomentsText(t.moment),i=this.mergeTargets(t.targets).join("、");let n="";if(t.effect==="造成伤害"){const a=t.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[t.elementType]||"";n=`对${i}造成 ${t.value} 点${a}伤害`}else if(t.effect==="给予印记")n=`给${i} ${t.value} 点印记`;else if(t.effect==="治愈")n=`为${i}恢复 ${t.value} 点生命`;else if(t.effect==="属性变化"){const a=t.isAttackPositive?`+${t.attackValue}`:`-${t.attackValue}`,o=t.isHealthPositive?`+${t.healthValue}`:`-${t.healthValue}`;n=`${i}获得 ${a}/${o}`}else if(t.effect==="抽牌")n=`抽 ${t.value} 张牌`;else if(t.effect==="获得能量")n=`获得 ${t.value} 点能量`;else if(t.effect==="失去能量")n=`失去 ${t.value} 点能量`;else if(t.effect==="召唤"){let a;t.summonSource&&t.summonSource!=="derived"?a=Ie(t.summonSource,!!t.isRandom):a="衍生随从",n=`召唤 ${t.value||1} 张${a}`}else if(t.effect==="获得"){let a;t.summonSource&&t.summonSource!=="derived"?a=Ie(t.summonSource,!!t.isRandom):a="衍生牌",n=`获得 ${t.value||1} 张${a}`}return n?`${r}${n}`:""}).filter(t=>t!=="");return s.length===0?"":`<div class="effects-tooltip absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-3 rounded-lg shadow-2xl z-[100000] hidden pointer-events-none whitespace-nowrap" style="background: rgba(20, 15, 10, 0.97); min-width: 200px; border: 1px solid rgba(180, 150, 100, 0.4);">
      <div class="text-center text-xs mb-2 border-b pb-1" style="color: #c4a870; border-color: rgba(180, 150, 100, 0.3);">技能说明</div>
      ${s.map(t=>`
        <div class="text-sm mb-1 whitespace-normal" style="color: #f0e6d2;">${t}</div>
      `).join("")}
    </div>`}renderGameLogs(){const e=this.state.gameLogs||[];return e.length===0?'<div class="px-2 py-1 text-center" style="color: #8b7355;">暂无记录</div>':e.slice(-5).reverse().map(t=>{let r="#5a4a3a",i="";switch(t.type){case"turn_start":r="#4a90d9",i="🌅";break;case"turn_end":r="#8b7355",i="🌙";break;case"draw_card":r="#5a9a5a",i="🃏";break;case"play_card":r="#9b59b6",i="📤";break;case"attack":r="#e07070",i="⚔️";break;case"damage":r="#c05050",i="💥";break;case"minion_skill":r="#f5a623",i="✨";break}return`<div class="px-2 py-0.5 border-b" style="border-color: #e8dcc8; color: ${r};">${i} ${t.message}</div>`}).join("")}getCardBgStyle(e,s="url('/images/wood_texture_seamless.png')"){return e.imageData?`background-image: url(${e.imageData}); background-size: cover; background-position: center; background-repeat: no-repeat;`:`background-image: ${s}; background-size: cover;`}getCardBgInline(e,s="rgba(255, 255, 255, 0.95)"){return e.imageData?`background-image: url(${e.imageData}); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: #f8f4ec;`:`background: ${s};`}sanitizeFileName(e){return e.replace(/[\\/:*?"<>|]/g,"_").replace(/\s+/g,"_").substring(0,100)}async exportCardToPNGBlob(e){const s=y=>{const x={...y};return y.targets&&(x.targets=[...y.targets]),y.isOpponent!==void 0&&(x.isOpponent=y.isOpponent),x},r=(e.effects||[]).filter(y=>y.effect),i={name:e.name||"未命名",type:e.type,cost:e.cost,attack:e.attack,health:e.health,keywords:(e.keywords||[]).map(y=>y.name),armorValue:e.armorValue,effects:r.length>0?r.map(s):void 0,effect:r.length>0?s(r[0]):void 0,spellEffect:e.spellEffect?s(e.spellEffect):void 0,effectDescription:e.effectDescription||void 0,derivedCards:e.derivedCards,version:3};let n;const a=document.createElement("canvas");a.width=200,a.height=300;const o=a.getContext("2d");if(e.imageData){const y=new Image;await new Promise((x,w)=>{y.onload=x,y.onerror=w,y.src=e.imageData}),o.drawImage(y,0,0,200,300)}else o.fillStyle="#f8f4ec",o.fillRect(0,0,200,300);const l=a.toDataURL("image/png"),m=await(await(await fetch(l)).blob()).arrayBuffer();n=new Uint8Array(m);const h=We(n),u=JSON.stringify(i),p=btoa(unescape(encodeURIComponent(u))),b=ze.encode("CardData",p);h.splice(1,0,b);const g=ut(h);return new Blob([g],{type:"image/png"})}async exportHeroToPNGBlob(e){const s=e?.name||this.heroName||"未命名英雄",t=e?.imageData||this.heroImageData,r=e?.derivedCards?e.derivedCards.map(w=>({name:w.name,type:w.type,cost:w.cost,attack:w.attack,health:w.health,imageData:w.imageData,keywords:w.keywords,effects:w.effects})):this.heroDerivedCards.map(w=>({name:w.name,type:w.type,cost:w.cost,attack:w.attack,health:w.health,imageData:w.imageData,keywords:w.keywords,effects:w.effects})),i=e?.skills&&e.skills.length>0?e.skills.map(w=>({name:w.name,type:w.type,cost:w.cost,cooldown:w.cooldown,limited:w.limited,maxUses:w.maxUses,iconData:w.iconData,description:w.description,effects:w.effects||(w.effect?[w.effect]:null)})):this.heroSkills.map(w=>({name:w.name,type:w.type,cost:w.cost,cooldown:w.cooldown,limited:w.limited,maxUses:w.maxUses,iconData:w.iconData,description:w.description,effects:w.effects||(w.effect?[w.effect]:null)})),n=e?.heroSpeech?{...e.heroSpeech}:{...this.heroSpeech},a={name:s,type:"hero",version:1,derivedCards:r,skills:i,heroSpeech:n},o=document.createElement("canvas");o.width=400,o.height=300;const l=o.getContext("2d");if(t){const w=new Image;await new Promise((f,v)=>{w.onload=f,w.onerror=v,w.src=t}),l.drawImage(w,0,0,400,300)}else l.fillStyle="#f8f4ec",l.fillRect(0,0,400,300);const d=o.toDataURL("image/png"),h=await(await(await fetch(d)).blob()).arrayBuffer(),u=new Uint8Array(h),p=We(u),b=JSON.stringify(a),g=btoa(unescape(encodeURIComponent(b))),y=ze.encode("HeroCardData",g);p.splice(1,0,y);const x=ut(p);return new Blob([x],{type:"image/png"})}async importHeroFromPNGFile(e){try{const s=await e.arrayBuffer(),t=new Uint8Array(s),r=We(t);let i=null;for(const c of r)if(c.name==="tEXt")try{const m=ze.decode(c);if(m.keyword==="HeroCardData"){i=m.text;break}}catch{}if(!i)return null;let n;try{n=decodeURIComponent(escape(atob(i)))}catch{n=i}const a=JSON.parse(n);if(!a.name&&a.name!=="")return null;a.derivedCards&&Array.isArray(a.derivedCards)?this.heroDerivedCards=a.derivedCards.map(c=>({name:c.name||"",type:c.type||"minion",cost:c.cost??1,attack:c.attack??1,health:c.health??1,armorValue:c.armorValue??0,imageData:c.imageData||null,keywords:c.keywords||[],effects:c.effects||[]})):this.heroDerivedCards=[],this.heroEditingDerivedIndex=null,a.skills&&Array.isArray(a.skills)?this.heroSkills=a.skills.map(c=>{const m=u=>({moment:u.moment||"打出时",targets:u.targets||[],effect:u.effect||"无效果",value:u.value??0,isOpponent:u.isOpponent||!1,attackValue:u.attackValue??0,healthValue:u.healthValue??0,isAttackPositive:u.isAttackPositive??!0,isHealthPositive:u.isHealthPositive??!0,variableChange:u.variableChange||void 0,isRandom:u.isRandom||!1,isRandomTarget:u.isRandomTarget||!1,triggerNumbers:u.triggerNumbers||void 0,summonedCardIndex:u.summonedCardIndex??void 0,summonedCardIndices:u.summonedCardIndices??void 0}),h=c.effects&&Array.isArray(c.effects)?c.effects.map(m):c.effect?[m(c.effect)]:[];return{id:Date.now()+Math.floor(Math.random()*1e3),name:c.name||"技能",type:c.type||"active",cost:c.cost??1,cooldown:c.cooldown??0,limited:c.limited||!1,maxUses:c.maxUses??1,iconData:c.iconData||null,description:c.description||"",effects:h}}):this.heroSkills=[],this.heroEditingSkillIndex=null;const o=URL.createObjectURL(e),l=new Image;await new Promise((c,m)=>{l.onload=c,l.onerror=m,l.src=o});const d=await this.compressImageData(o,400,300);return URL.revokeObjectURL(o),{heroData:a,imageData:d}}catch{return null}}async importCardFromPNGFile(e){try{const s=await e.arrayBuffer(),t=new Uint8Array(s),r=We(t);let i=null;const n=[];for(const m of r)if(m.name==="tEXt")try{const h=ze.decode(m);h.keyword==="CardData"?i=h.text:/^CardData_\d+$/.test(h.keyword)&&n.push(h.text)}catch{}if(!i)return null;let a;try{a=decodeURIComponent(escape(atob(i)))}catch{a=i}const o=JSON.parse(a);if(!o.name&&o.name!=="")return null;n.length>0?o.derivedCards=n.map(m=>{let h;try{h=decodeURIComponent(escape(atob(m)))}catch{h=m}return JSON.parse(h)}):o.derivedCards=o.derivedCards||[];const l=URL.createObjectURL(e),d=new Image;await new Promise((m,h)=>{d.onload=m,d.onerror=h,d.src=l});const c=await this.compressImageData(l);return URL.revokeObjectURL(l),{cardData:o,imageData:c}}catch{return null}}async importDeckFromZip(e){const s=await this.parseGroupsFromZipBlob(e),t=[];for(const r of s.groups)for(const i of r.cards){const n=t.find(a=>a.card.name===i.card.name);n?n.count+=i.count:t.push({card:i.card,count:i.count})}return{normalEntries:t,heroCards:s.heroCards}}async parseGroupsFromZipBlob(e){const s=await Nt.loadAsync(e),t=Object.keys(s.files),r=t.some(c=>c.includes("/")&&!c.startsWith("manifest.txt")),i=[];if(r){const c=new Set;for(const u of t)if(u.includes("/")){const p=u.split("/")[0];c.add(p)}else u.startsWith("manifest.txt")||c.add("");const m=s.file("manifest.txt");let h=null;m&&(h=await m.async("text")),i.push({name:"",cards:[],manifest:h});for(const u of c){if(u==="")continue;const p=s.file(`${u}/manifest.txt`);let b=null;p&&(b=await p.async("text"));let g=u;if(b){const y=b.match(/子卡组[：:]\s*(.+)/);y&&(g=y[1].trim())}i.push({name:g,cards:[],manifest:b})}}else{const c=s.file("manifest.txt");let m=null;c&&(m=await c.async("text")),i.push({name:"",cards:[],manifest:m})}const n=i.map(c=>{const m=new Map,h=new Map;if(c.manifest){const u=c.manifest.split(`
`);for(const p of u){const b=p.trim();if(b.startsWith("#")||b===""||b.startsWith("##"))continue;let g,y;const x=b.match(/^\[英雄\]\s*(.+?)\s*x\s*(\d+)$/),w=b.match(/^(.+?)\s*x\s*(\d+)$/);x?(g=x[1].trim(),y=parseInt(x[2]),h.set(g,y)):w&&(g=w[1].trim(),y=parseInt(w[2]),m.set(g,y))}}for(const[u,p]of h)m.set(u,p);return m}),a=c=>{const m={...c};return c.targets&&(m.targets=[...c.targets]),m},o=[],l=Object.values(s.files).filter(c=>c.name.toLowerCase().endsWith(".png"));for(const c of l){const m=c.name;let h=0;if(r&&m.includes("/")){const u=m.split("/")[0],p=i.findIndex((b,g)=>g>0&&b.name!==""&&(m.startsWith(b.name+"/")||u===b.name));p>0&&(h=p)}try{const u=await c.async("blob"),p=new File([u],m,{type:"image/png"}),b=await this.importCardFromPNGFile(p);if(b){const{cardData:y,imageData:x}=b,w=y.effects||(y.effect?[y.effect]:[]),f={id:ke(),name:y.name||"",type:y.type||"minion",cost:y.cost??1,attack:y.attack??1,health:y.health??1,maxHealth:y.health??1,keywords:(y.keywords||[]).map(E=>E==="风怒"?"__WINDURY__":E).map(E=>E==="__WINDURY__"?"连击":E).map(E=>Object.values(Ee).find(T=>T.name===E)||{name:E,description:"",hasValue:!1}),armorValue:y.armorValue??1,effects:w.map(a),effect:w.length>0?a(w[0]):void 0,effectDescription:y.effectDescription||"",derivedCards:y.derivedCards,imageData:x},v=n[h].get(y.name)||1;i[h].cards.push({card:f,count:v});continue}const g=await this.importHeroFromPNGFile(p);if(g){const{heroData:y,imageData:x}=g,w={id:ke(),name:y.name||"",type:"hero",cost:0,attack:0,health:0,maxHealth:0,keywords:[],imageData:x,skills:y.skills||[],derivedCards:y.derivedCards||[],heroSpeech:y.heroSpeech},f=n[h].get(y.name)||1;i[h].cards.push({card:w,count:f}),o.push(w)}}catch{}}const d=[];d.push({name:"",cards:i[0].cards});for(let c=1;c<i.length;c++)i[c].cards.length>0&&d.push({name:i[c].name,cards:i[c].cards});return{groups:d,heroCards:o}}async exportDeckToZip(e){try{const s=document.getElementById("export-zip-btn");s&&(s.textContent="⏳ 打包中...",s.disabled=!0);const t=document.getElementById("import-result");t&&(t.classList.remove("hidden"),t.textContent="正在打包，请稍候...");const r=new Nt,i=this.state.groups;let n=0;const a=i[0],o=["# 妙卡包 - 公用卡组"];o.push(`# 导出时间: ${new Date().toLocaleString()}`),o.push(`# 卡牌种类: ${a.cards.length}`),o.push("# 格式：卡牌名称 x 数量"),o.push("");for(const m of a.cards){const h=m.card,u=m.count,p=this.sanitizeFileName(h.name||"未命名"),b=h.type==="hero"?await this.exportHeroToPNGBlob(h):await this.exportCardToPNGBlob(h);r.file(`${p}.png`,b);const g=h.type==="hero"?"[英雄] ":"";o.push(`${g}${h.name} x ${u}`),n++}r.file("manifest.txt",o.join(`
`));for(let m=1;m<i.length;m++){const h=i[m];if(h.cards.length===0)continue;const u=this.sanitizeFileName(h.name||"未命名卡组"),p=[`# 妙卡包 - 子卡组：${h.name}`];p.push(`# 导出时间: ${new Date().toLocaleString()}`),p.push(`# 卡牌种类: ${h.cards.length}`),p.push("# 格式：卡牌名称 x 数量"),p.push("");for(const b of h.cards){const g=b.card,y=b.count,x=this.sanitizeFileName(g.name||"未命名"),w=g.type==="hero"?await this.exportHeroToPNGBlob(g):await this.exportCardToPNGBlob(g);r.file(`${u}/${x}.png`,w);const f=g.type==="hero"?"[英雄] ":"";p.push(`${f}${g.name} x ${y}`),n++}r.file(`${u}/manifest.txt`,p.join(`
`))}const l=await r.generateAsync({type:"blob"}),c=`妙卡包_卡包_${new Date().toISOString().slice(0,19).replace(/[T:]/g,"-")}.zip`;if(this.deckFolderHandle){const h=await(await this.deckFolderHandle.getFileHandle(c,{create:!0})).createWritable();await h.write(l),await h.close(),console.log(`ZIP 已导出到文件夹: ${c}`)}else{const m=URL.createObjectURL(l),h=document.createElement("a");h.href=m,h.download=c,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(m)}s&&(s.textContent="📦 导出卡包(ZIP)",s.disabled=!1),t&&(t.textContent=`✓ 导出成功！共 ${n} 种卡牌（${i.length} 个分组）`,setTimeout(()=>t.classList.add("hidden"),3e3))}catch(s){const t=document.getElementById("export-zip-btn");t&&(t.textContent="📦 导出卡包(ZIP)",t.disabled=!1);const r=document.getElementById("import-result");r&&(r.textContent="✗ 导出失败："+s.message),alert("导出卡包失败："+s.message)}}async generateAtmosphereCard(e){return new Promise((s,t)=>{const r=new Image;r.onload=()=>{try{const i=document.createElement("canvas");i.width=r.naturalWidth,i.height=r.naturalHeight;const n=i.getContext("2d");if(!n){t(new Error("canvas context null"));return}n.drawImage(r,0,0);const a=n.getImageData(0,0,r.naturalWidth,r.naturalHeight).data,o=24,l=new Map,d=r.naturalWidth,c=r.naturalHeight;for(let A=0;A<c;A+=2)for(let R=0;R<d;R+=2){const _=(A*d+R)*4,B=a[_],$=a[_+1],N=a[_+2];if(a[_+3]<128||B<15&&$<15&&N<15||B>240&&$>240&&N>240)continue;const U=Math.floor(B/o)*o,ne=Math.floor($/o)*o,Z=Math.floor(N/o)*o,se=`${U},${ne},${Z}`,Y=Math.max(B,$,N),C=Math.min(B,$,N),P=Y===0?0:(Y-C)/Y,L=l.get(se);L?(L.r+=B,L.g+=$,L.b+=N,L.count++,L.sat+=P):l.set(se,{r:B,g:$,b:N,count:1,sat:P})}if(l.size===0){s(this.drawAtmosphereCard(r,"#2a2a3a","#7a5a3a","#3a5a7a"));return}const m=Array.from(l.entries()).map(([A,R])=>({r:Math.round(R.r/R.count),g:Math.round(R.g/R.count),b:Math.round(R.b/R.count),sat:R.sat/R.count,count:R.count})),h=Math.floor(c*.15),u=Math.floor(d*.15),p=new Map;for(let A=0;A<c;A+=2)for(let R=0;R<d;R+=2){if(!(A<h||A>=c-h||R<u||R>=d-u))continue;const B=(A*d+R)*4,$=a[B],N=a[B+1],J=a[B+2];if(a[B+3]<128)continue;const ne=Math.floor($/o)*o,Z=Math.floor(N/o)*o,se=Math.floor(J/o)*o,Y=`${ne},${Z},${se}`;p.set(Y,(p.get(Y)||0)+1)}m.sort((A,R)=>R.count-A.count);let b=m[0];const g=Array.from(p.entries()).sort((A,R)=>R[1]-A[1]);if(g.length>0){const A=g[0][0],R=m.find(_=>{const B=Math.floor(_.r/o)*o,$=Math.floor(_.g/o)*o,N=Math.floor(_.b/o)*o;return`${B},${$},${N}`===A});R&&(b=R)}const y=[...m].sort((A,R)=>R.sat-A.sat),x=y[0].sat,w=y.length>1?y[1].sat:0,f=x>w*1.5&&x>.3,v=(A,R)=>Math.sqrt((A.r-R.r)**2+(A.g-R.g)**2+(A.b-R.b)**2);let E=m.find(A=>v(A,b)>60)||m[1]||b;f&&y[0]!==b&&(E=y[0]);let S=m.find(A=>A!==b&&A!==E&&v(A,b)>60&&v(A,E)>40)||m[2]||E;const T=A=>`#${A.r.toString(16).padStart(2,"0")}${A.g.toString(16).padStart(2,"0")}${A.b.toString(16).padStart(2,"0")}`;s(this.drawAtmosphereCard(r,T(b),T(E),T(S)))}catch(i){t(i)}},r.onerror=t,r.src=e})}drawAtmosphereCard(e,s,t,r){const i=document.createElement("canvas");i.width=800,i.height=1200;const n=i.getContext("2d");if(!n)return"";n.imageSmoothingEnabled=!1,n.fillStyle=s,n.fillRect(0,0,800,1200);let a=n.createRadialGradient(960,-100,0,960,-100,800);a.addColorStop(0,t+"ff"),a.addColorStop(.3,t+"dd"),a.addColorStop(.6,t+"77"),a.addColorStop(1,"transparent"),n.fillStyle=a,n.fillRect(0,0,800,1200),a=n.createRadialGradient(-100,1100,0,-100,1100,700),a.addColorStop(0,r+"ff"),a.addColorStop(.35,r+"cc"),a.addColorStop(.65,r+"66"),a.addColorStop(1,"transparent"),n.fillStyle=a,n.fillRect(0,0,800,1200),a=n.createRadialGradient(400,200,0,400,200,450),a.addColorStop(0,t+"dd"),a.addColorStop(.5,t+"88"),a.addColorStop(1,"transparent"),n.fillStyle=a,n.fillRect(0,0,800,1200),a=n.createRadialGradient(400,600,0,400,600,550),a.addColorStop(0,s+"cc"),a.addColorStop(.5,s+"66"),a.addColorStop(1,"transparent"),n.fillStyle=a,n.fillRect(0,0,800,1200);const o=800*.78,l=(800-o)/2,d=1200*.18,c=30,m=.85,h=c*4,u=document.createElement("canvas");u.width=o+h*2,u.height=o+h*2;const p=u.getContext("2d");if(p){p.imageSmoothingEnabled=!1;const f=Math.max(o/e.naturalWidth,o/e.naturalHeight),v=e.naturalWidth*f,E=e.naturalHeight*f;p.drawImage(e,(o-v)/2+h,(o-E)/2+h,v,E),p.globalCompositeOperation="source-in",p.fillStyle="#000000",p.fillRect(0,0,u.width,u.height),p.globalCompositeOperation="source-over",n.save(),n.beginPath(),n.rect(l-h,d-h,o+h*2,o+h*2),n.clip(),n.filter=`blur(${c}px)`,n.globalAlpha=m,n.drawImage(u,l-h,d-h),n.restore()}n.save(),n.beginPath();const b=40;n.moveTo(l+b,d),n.lineTo(l+o-b,d),n.quadraticCurveTo(l+o,d,l+o,d+b),n.lineTo(l+o,d+o-b),n.quadraticCurveTo(l+o,d+o,l+o-b,d+o),n.lineTo(l+b,d+o),n.quadraticCurveTo(l,d+o,l,d+o-b),n.lineTo(l,d+b),n.quadraticCurveTo(l,d,l+b,d),n.closePath(),n.clip();const g=Math.max(o/e.naturalWidth,o/e.naturalHeight),y=e.naturalWidth*g,x=e.naturalHeight*g;n.drawImage(e,l+(o-y)/2,d+(o-x)/2,y,x),n.restore();const w=n.createLinearGradient(0,920,0,1200);return w.addColorStop(0,"rgba(0,0,0,0)"),w.addColorStop(.4,"rgba(0,0,0,0.4)"),w.addColorStop(1,"rgba(0,0,0,0.85)"),n.fillStyle=w,n.fillRect(0,920,800,280),i.toDataURL("image/png")}async generateAtmosphereBackground(e){return new Promise((s,t)=>{const r=new Image;r.onload=()=>{try{const i=document.createElement("canvas");i.width=r.naturalWidth,i.height=r.naturalHeight;const n=i.getContext("2d");if(!n){t(new Error("canvas context null"));return}n.drawImage(r,0,0);const a=n.getImageData(0,0,r.naturalWidth,r.naturalHeight).data,o=24,l=new Map,d=r.naturalWidth,c=r.naturalHeight;for(let N=0;N<c;N+=2)for(let J=0;J<d;J+=2){const U=(N*d+J)*4,ne=a[U],Z=a[U+1],se=a[U+2];if(a[U+3]<128||ne<15&&Z<15&&se<15||ne>240&&Z>240&&se>240)continue;const C=Math.floor(ne/o)*o,P=Math.floor(Z/o)*o,L=Math.floor(se/o)*o,V=`${C},${P},${L}`,Q=Math.max(ne,Z,se),oe=Math.min(ne,Z,se),ie=Q===0?0:(Q-oe)/Q,F=l.get(V);F?(F.r+=ne,F.g+=Z,F.b+=se,F.count++,F.sat+=ie):l.set(V,{r:ne,g:Z,b:se,count:1,sat:ie})}if(l.size===0){s({bgDataUrl:"",colors:{dominant:"#2a2a3a",secondary:"#7a5a3a",tertiary:"#3a5a7a"}});return}const m=Array.from(l.entries()).map(([N,J])=>({r:Math.round(J.r/J.count),g:Math.round(J.g/J.count),b:Math.round(J.b/J.count),sat:J.sat/J.count,count:J.count}));m.sort((N,J)=>J.count-N.count);const h=Math.floor(c*.15),u=Math.floor(d*.15),p=new Map;for(let N=0;N<c;N+=2)for(let J=0;J<d;J+=2){if(!(N<h||N>=c-h||J<u||J>=d-u))continue;const ne=(N*d+J)*4,Z=a[ne],se=a[ne+1],Y=a[ne+2];if(a[ne+3]<128)continue;const P=Math.floor(Z/o)*o,L=Math.floor(se/o)*o,V=Math.floor(Y/o)*o,Q=`${P},${L},${V}`;p.set(Q,(p.get(Q)||0)+1)}let b=m[0];const g=Array.from(p.entries()).sort((N,J)=>J[1]-N[1]);if(g.length>0){const N=g[0][0],J=m.find(U=>{const ne=Math.floor(U.r/o)*o,Z=Math.floor(U.g/o)*o,se=Math.floor(U.b/o)*o;return`${ne},${Z},${se}`===N});J&&(b=J)}const y=[...m].sort((N,J)=>J.sat-N.sat),x=y[0].sat,w=y.length>1?y[1].sat:0,f=x>w*1.5&&x>.3,v=(N,J)=>Math.sqrt((N.r-J.r)**2+(N.g-J.g)**2+(N.b-J.b)**2);let E=m.find(N=>v(N,b)>60)||m[1]||b;f&&y[0]!==b&&(E=y[0]);let S=m.find(N=>N!==b&&N!==E&&v(N,b)>60&&v(N,E)>40)||m[2]||E;const T=N=>`#${N.r.toString(16).padStart(2,"0")}${N.g.toString(16).padStart(2,"0")}${N.b.toString(16).padStart(2,"0")}`,A={dominant:T(b),secondary:T(E),tertiary:T(S)},R=document.createElement("canvas");R.width=800,R.height=1200;const _=R.getContext("2d");if(!_){t(new Error("bg canvas context null"));return}_.fillStyle=A.dominant,_.fillRect(0,0,800,1200);let B=_.createRadialGradient(960,-100,0,960,-100,800);B.addColorStop(0,A.secondary+"ff"),B.addColorStop(.3,A.secondary+"dd"),B.addColorStop(.6,A.secondary+"77"),B.addColorStop(1,"transparent"),_.fillStyle=B,_.fillRect(0,0,800,1200),B=_.createRadialGradient(-100,1100,0,-100,1100,700),B.addColorStop(0,A.tertiary+"ff"),B.addColorStop(.35,A.tertiary+"cc"),B.addColorStop(.65,A.tertiary+"66"),B.addColorStop(1,"transparent"),_.fillStyle=B,_.fillRect(0,0,800,1200),B=_.createRadialGradient(400,200,0,400,200,450),B.addColorStop(0,A.secondary+"dd"),B.addColorStop(.5,A.secondary+"88"),B.addColorStop(1,"transparent"),_.fillStyle=B,_.fillRect(0,0,800,1200),B=_.createRadialGradient(400,600,0,400,600,550),B.addColorStop(0,A.dominant+"cc"),B.addColorStop(.5,A.dominant+"66"),B.addColorStop(1,"transparent"),_.fillStyle=B,_.fillRect(0,0,800,1200);const $=_.createLinearGradient(0,920,0,1200);$.addColorStop(0,"rgba(0,0,0,0)"),$.addColorStop(.4,"rgba(0,0,0,0.4)"),$.addColorStop(1,"rgba(0,0,0,0.85)"),_.fillStyle=$,_.fillRect(0,920,800,280),s({bgDataUrl:R.toDataURL("image/png"),colors:A})}catch(i){t(i)}},r.onerror=()=>t(new Error("图片加载失败")),r.src=e})}async compressImageData(e,s=200,t=300){return new Promise((r,i)=>{const n=new Image;n.onload=()=>{const a=document.createElement("canvas");a.width=s,a.height=t;const o=a.getContext("2d");if(!o){r(e);return}o.imageSmoothingEnabled=!1,o.drawImage(n,0,0,s,t),r(a.toDataURL("image/png"))},n.onerror=()=>r(e),n.src=e})}async expandEntriesForOnline(e){const s=new Set,t=new Map,r=[];for(const i of e){const n=be(i.card),a=s.has(n);a||s.add(n);let o="";!a&&i.card.imageData&&(t.has(n)?o=t.get(n):(o=await this.compressImageData(i.card.imageData),t.set(n,o)));for(let l=0;l<i.count;l++)r.push({...i.card,id:ke(),imageData:a?"":o})}return r}renderHand(e,s,t=!1){if(e.length===0)return"";const r=e.length,i=t?Math.min(r*5,40):Math.min(r*8,60),n=-i/2,a=r>1?i/(r-1):0;return e.map((o,l)=>{const d=r===1?0:n+l*a,c=s>=o.cost,m=o.type==="spell",h=this.selectedHandCard?.id===o.id,u=this.state.newlyDrawnCardIds.includes(o.id);return`
        <div class="hand-card-wrapper ${h?"selected":""} ${u?"newly-drawn":""} ${t?"portrait-mode":""}" 
             data-index="${l}"
             data-card-id="${o.id}"
             style="--rotate: ${d}deg; z-index: ${l+10};">
          <div class="hand-card-inner ${c?"can-play":""} ${m?"spell-card":""} ${h?"selected":""} ${t?"portrait-mode":""}"
               style="${c?m?"border: 2px solid #9c27b0;":"border: 2px solid #4caf50;":"border: 2px solid #9e9e9e;"} ${this.getCardBgStyle(o)}">
            <div class="card-top-row">
              <div class="card-cost-diamond">
                <span>${o.cost}</span>
              </div>
              <div class="card-name">${o.name}</div>
            </div>
            ${o.keywords.length>0?this.renderKeywords(o.keywords,o.armorValue):""}
            ${(()=>{const p=this.getCardFullEffectText(o);return p?`<div class="card-effect-text">${p}</div>`:""})()}
            ${m?`
              <div class="card-bottom-row" style="justify-content: center; align-items: center; height: 24px;">
                <!-- 法术牌不显示攻防数值 -->
              </div>
            `:`
              <div class="card-bottom-row">
                <div class="stat-attack">${o.attack}</div>
                <div class="stat-health">${o.health}</div>
              </div>
            `}
          </div>
        </div>
      `}).join("")}renderMulliganOverlay(){const{mulliganCards:e,mulliganSelected:s,p2MulliganCards:t,p2MulliganSelected:r,currentPlayerId:i,mulliganFirstPlayer:n,turnNumber:a,online:o,mulliganDone:l}=this.state;console.log("[DEBUG] renderMulliganOverlay",{currentPlayerId:i,turnNumber:a,mulliganFirstPlayer:n,mulliganCardsCount:e.length,p2MulliganCardsCount:t.length,mulliganSelected:s,p2MulliganSelected:r,mulliganDone:l,onlinePlayerId:o?.playerId,onlineFirstPlayerId:o?.firstPlayerId});const d=o?.playerId&&o?.firstPlayerId;if(d){const v=o.playerId===o.firstPlayerId;if(!(v&&l<1||!v&&l<2)){console.log("[renderMulliganOverlay] 非自己的换牌回合，跳过渲染");return}}const c=d?o.playerId===o.firstPlayerId:i===1,m=!c,h=c?e:t,u=c?s:r,b=m?"后手":"先手",g=u.length,y=v=>{const E=v.type==="spell",S=this.getCardFullEffectText(v);return`
        <div class="mulligan-card-inner" style="${this.getCardBgStyle(v)}">
          <div class="card-top-row">
            <div class="card-cost-diamond"><span>${v.cost}</span></div>
            <div class="card-name">${v.name}</div>
          </div>
          ${v.keywords.length>0?this.renderKeywords(v.keywords):""}
          ${S?`<div class="card-effect-text">${S}</div>`:""}
          ${E?`
            <div class="card-bottom-row" style="justify-content: center; align-items: center; height: 24px;">
              <!-- 法术牌不显示攻防数值 -->
            </div>
          `:`
            <div class="card-bottom-row">
              <div class="stat-row">
                <div class="stat-attack">${v.attack}</div>
                <div class="stat-health">${v.health}</div>
              </div>
            </div>
          `}
        </div>
      `},x=h.map(v=>{const E=u.includes(v.id),S=y(v);return`
        <div class="mulligan-card-wrapper relative cursor-pointer hover:scale-105 transition-transform" data-card-id="${v.id}">
          ${S}
          ${E?`
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="w-full h-full absolute bg-red-500/50 rounded-xl"></div>
              <div class="text-9xl text-red-600 font-bold rotate-12 select-none pointer-events-none" style="text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;">✕</div>
            </div>
          `:""}
        </div>
      `}).join(""),w=document.createElement("div");w.id="mulligan-overlay",w.className="fixed inset-0 z-50 flex flex-col items-center justify-center",w.style.background="rgba(0, 0, 0, 0.75)",w.innerHTML=`
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold text-white mb-2">${b}玩家 · 换牌阶段</h2>
        <p class="text-gray-300">点击卡牌标记弃换，确认后将重新抽取 ${g>0?g+" 张":"相同数量"}</p>
      </div>
      
      <div class="flex flex-wrap justify-center gap-4 mb-8 max-w-4xl">
        ${x}
      </div>
      
      <div class="flex gap-4 mt-4">
        <button id="mulligan-confirm-btn" 
          class="px-8 py-3 text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 bg-green-500 hover:bg-green-600"
          style="color: white; border: 3px solid #22c55e;">
          确认
        </button>

      </div>
    `;const f=document.getElementById("mulligan-overlay");f&&f.remove(),document.body.appendChild(w),w.querySelectorAll(".mulligan-card-wrapper").forEach(v=>{const E=parseInt(v.getAttribute("data-card-id")||"0");v.addEventListener("click",()=>{const S=m?"TOGGLE_P2_MULLIGAN_CARD":"TOGGLE_MULLIGAN_CARD";this.state=le(this.state,{type:S,cardId:E});const T=m?this.state.p2MulliganSelected:this.state.mulliganSelected,A=T.includes(E),R=v.querySelector(".mulligan-selected-overlay");if(A&&!R){const B=document.createElement("div");B.className="mulligan-selected-overlay absolute inset-0 flex items-center justify-center pointer-events-none",B.innerHTML='<div class="w-full h-full absolute bg-red-500/50 rounded-xl"></div><div class="text-9xl text-red-600 font-bold rotate-12 select-none pointer-events-none" style="text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;">✕</div>',v.appendChild(B)}else!A&&R&&R.remove();const _=document.getElementById("mulligan-confirm-btn");if(_){const B=T.length;_.textContent=B>0?`确认（已选 ${B} 张）`:"确认"}})}),w.querySelector("#mulligan-confirm-btn")?.addEventListener("click",async()=>{const v=this.state.online;if(v?.currentRoom){if(v.playerId===v.firstPlayerId){const A=this.state.mulliganSelected,R=document.getElementById("mulligan-overlay");if(R&&R.remove(),this.state=le(this.state,{type:"CONFIRM_MULLIGAN"}),this._p2MulliganConfirmed){console.log("P1 确认换牌，P2 已提前换牌，直接进入游戏"),this._p2MulliganConfirmed=!1,this.state={...this.state,phase:"onlineBattle",mulliganDone:2};{const _=this.state.online.playerId==="1"?2:1;this.state=le({...this.state,currentPlayerId:_},{type:"START_MY_TURN"})}this.lastGameStateTimestamp=Date.now(),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100),await this.broadcastGameState()}else{this.render(),setTimeout(()=>this.playDrawCardAnimation(),100),await this.broadcastGameState();try{const _=v.currentRoom?.id;if(!_){console.error("MULLIGAN_CONFIRM(P1->P2): currentRoom is null");return}const{sendMessage:B}=await fe(async()=>{const{sendMessage:N}=await import("./online-fGHm1H1u.js");return{sendMessage:N}},__vite__mapDeps([0,1]));await B(_,v.playerId,"__SYSTEM__",`__MULLIGAN_CONFIRM__|${JSON.stringify(A)}`)?console.log("MULLIGAN_CONFIRM(P1) 已发送给后手"):console.warn("MULLIGAN_CONFIRM(P1) 发送可能失败（返回 null），已通过 STATE_SYNC 兜底")}catch(_){console.error("发送 MULLIGAN_CONFIRM(P1) 失败:",_)}}}else{const A=this.state.p2MulliganSelected,R=document.getElementById("mulligan-overlay");R&&R.remove(),this.state=le(this.state,{type:"CONFIRM_MULLIGAN",forceP2Branch:!0}),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100);try{await this.broadcastGameState(),console.log("P2 换牌后已广播 STATE_SYNC")}catch(_){console.error("P2 换牌后广播 STATE_SYNC 失败:",_)}try{const _=v.currentRoom?.id;if(!_){console.error("MULLIGAN_CONFIRM: currentRoom is null");return}const{sendMessage:B}=await fe(async()=>{const{sendMessage:N}=await import("./online-fGHm1H1u.js");return{sendMessage:N}},__vite__mapDeps([0,1]));await B(_,v.playerId,"__SYSTEM__",`__MULLIGAN_CONFIRM__|${JSON.stringify(A)}`)?console.log("MULLIGAN_CONFIRM 已发送给先手"):console.warn("MULLIGAN_CONFIRM 发送可能失败（返回 null），已通过 STATE_SYNC 兜底")}catch(_){console.error("发送 MULLIGAN_CONFIRM 失败:",_)}}return}const S=document.getElementById("mulligan-overlay");S&&S.remove(),this.state=le(this.state,{type:"CONFIRM_MULLIGAN"}),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100)})}renderDiscardPileViewer(){if(!this.showDiscardPileViewer)return"";const e=this.state.discardPile.map(s=>{const t=this.getCardFullEffectText(s);return`
        <div class="card-item flex-shrink-0 rounded-xl shadow-md" style="width: 120px; ${this.getCardBgInline(s)} border: 3px solid #d4c4a8; z-index: 1; box-shadow: 0 4px 12px rgba(0,0,0,0.15); aspect-ratio: 2 / 3; position: relative; overflow: visible;">
          <!-- 费用：左上角 -->
          <div class="card-cost-badge">${s.cost}</div>

          <!-- 卡名：顶部居中（白字+黑影） -->
          <div class="absolute left-1 right-1 text-center truncate font-bold" style="top: 4px; color: white; font-size: 14px; z-index: 5; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 1px black;">
            ${s.name}
          </div>

          <!-- 词条+技能描述包裹容器 -->
          ${s.keywords.length>0||t?`
            <div class="card-description-wrapper">
              ${s.keywords.length>0?`
                <div class="card-keywords-area">
                  ${s.keywords.map(r=>{const i=r.name==="护甲"?r.value??s.armorValue??1:"";return`<span class="card-keyword-tag">${r.name}${i}</span>`}).join("")}
                </div>
              `:""}
              ${t?`
                <div class="card-effect-area">
                  ${t}
                </div>
              `:""}
            </div>
          `:""}

          <!-- 攻击力：左下角 -->
          ${s.type!=="spell"?`
            <div class="card-attack-badge">${s.attack}</div>
          `:""}

          <!-- 生命值：右下角 -->
          ${s.type!=="spell"?`
            <div class="card-health-badge">${s.health}</div>
          `:""}
        </div>
      `}).join("");return`
      <div id="discard-pile-viewer-overlay" class="fixed inset-0 flex items-center justify-center z-[3000]" style="background: rgba(0, 0, 0, 0.4);">
        <div class="relative rounded-2xl shadow-2xl p-4" style="background: linear-gradient(135deg, #a08050 0%, #8a6a40 50%, #6a4a30 100%); border: 3px solid #5a3a20; max-width: 90vw; width: 600px;">
          <!-- 关闭按钮 -->
          <button id="discard-pile-viewer-close" class="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-lg cursor-pointer hover:scale-110 transition-transform"
            style="background: linear-gradient(135deg, #e07070 0%, #c05050 100%); border: 2px solid #a04040; z-index: 10;">
            ✕
          </button>
          <!-- 卡牌列表 -->
          <div class="flex gap-2 overflow-x-auto pb-2 pt-2 px-2" style="min-height: 140px;">
            ${this.state.discardPile.length===0?'<div class="w-full text-center text-sm flex items-center justify-center" style="color: #f0e6d0; min-height: 120px;">弃牌堆为空</div>':e}
          </div>
        </div>
      </div>
    `}renderGame(){const{waitingForNextPlayer:e,currentPlayerId:s,turnNumber:t,sharedDeck:r,players:i}=this.state;typeof window<"u"&&(this.isPortraitMode=window.innerWidth/window.innerHeight<3/4);const n=this.state.phase==="robotBattle",a=n?!1:s===2,o=a?i[0]:i[1],l=a?i[1]:i[0],d=o.id,c=l.id,m=n&&s===2,h=n?!0:!e,p=l.board.filter(x=>x.canAttack&&!x.hasAttacked&&x.attack>0&&!x.isDefending).length>0,b=o.board.some(x=>x.isDefending||x.keywords.some(w=>w.name==="嘲讽")),g=p&&!b,y=this.isPortraitMode?"compact-mode":"";this.app.innerHTML=`
      <!-- 菜单按钮（左上角） -->
      <button id="game-menu-btn" class="fixed top-4 left-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl font-bold transition-all hover:scale-110 z-50"
        style="background: linear-gradient(135deg, #c0a080 0%, #a08060 100%); border: 3px solid #8b7355; color: #fff;">
        ☰
      </button>
      
      <!-- 游戏菜单弹窗 -->
      ${this.showGameMenu?`
        <div id="game-menu-overlay" class="fixed inset-0 flex items-center justify-center z-[2000]" style="background: rgba(0, 0, 0, 0.5);">
          <div class="p-8 rounded-2xl shadow-2xl text-center" style="background: rgba(245, 240, 230, 0.98); border: 4px solid #d4c4a8;">
            <h2 class="text-2xl font-bold mb-6" style="color: #5a4a3a; font-family: 'Georgia', serif;">游戏菜单</h2>
            
            <div class="flex flex-col gap-4">
              <button id="continue-game-btn" class="px-8 py-3 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;">
                ▶ 继续游戏
              </button>
              
              <button id="save-exit-btn" class="px-8 py-3 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%); color: #fff; border: 3px solid #3d85c6;">
                💾 保存并退出
              </button>
              
              <button id="surrender-btn" class="px-8 py-3 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                style="background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: 3px solid #a04040;">
                🏳️ 认输
              </button>
            </div>
          </div>
        </div>
      `:""}
      
      <div class="game-container ${y}" id="game-container" style="min-height: 100vh; background: transparent; display: flex; flex-direction: column;">
        
        <!-- 上方玩家区域 -->
        <div class="top-player-area p-1" style="flex-shrink: 0;">
          <!-- 上方玩家信息区域 -->
          <div class="relative mb-1" style="min-height: 110px;">
            ${this.renderHeroSkills(o,!0)}
            <!-- 4:3纸材质英雄模块（居中） -->
            <div class="mx-auto relative" data-player-hero="${d}"
              style="width: 140px; height: 105px; ${this.renderHeroBackground(o.heroCard)} border: 4px solid #d4c4a8; border-radius: 8px;${o.elementStatus?"padding: 7px; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[o.elementStatus.type]||"transparent")+";":""}">
              ${o.heroCard?.imageData?"":'<div class="w-full h-full flex items-center justify-center"><span class="font-bold text-lg" style="color: #5a4a3a;">英雄</span></div>'}
              ${o.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:8px;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
              <!-- 血量（底部居中，一半出框） -->
              <div class="absolute flex items-center justify-center font-bold text-white text-sm shadow-md"
                style="bottom: -10px; left: 50%; transform: translateX(-50%); width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #c0a080 0%, #a08060 100%); border: 3px solid #8b7355; z-index: 10;"
                data-player-hp="${d}">
                ${o.health}
              </div>
              ${o.heroMarkCount&&o.heroMarkCount>0?`
                <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md"
                  style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                  ${o.heroMarkCount}
                </div>
              `:""}
            </div>
            <!-- 昵称和能量（绝对定位在英雄模块右侧） -->
            <div class="absolute flex flex-col items-start" style="left: calc(50% + 78px); top: 15px;">
              <div class="font-bold text-lg" style="color: #fff; text-shadow: 0 0 8px rgba(0,0,0,0.6), 0 0 16px rgba(0,0,0,0.3);">${o.name}</div>
              <div class="flex items-center gap-1">
                ${this.renderHeroName(o.heroCard)}
                <span class="text-xs mt-0.5" style="color: rgba(255,255,255,0.85); text-shadow: 0 0 6px rgba(0,0,0,0.6);">手牌数：${o.hand.length}</span>
              </div>
              ${this.renderEnergy(o.maxEnergy,o.energy,o.bonusEnergy||0)}
            </div>
          </div>
          
          <!-- 上方战场 -->
          <div class="top-board flex justify-center gap-2 min-h-20 p-2 rounded-xl mx-4" id="opponent-play-area" style="background: rgba(255, 255, 255, 0.6); border: 3px solid #d4c4a8;">
            ${o.board.map(x=>{const w=o.board.some(R=>R.isDefending||R.keywords.some(_=>_.name==="嘲讽")),f=x.isDefending||x.keywords.some(R=>R.name==="嘲讽"),v=w&&!f?"non-taunt-target":"",E=this.selectedAttackingMinion!==null,S=this.selectingTargetForCard!==null||this.selectingTargetForSkill!==null,T=x.markCount||0,A=this.getEffectIcons(x.effects);return x.elementStatus&&console.log("[元素边框-联机顶部] 随从:",x.name,"元素类型:",x.elementStatus.type,"style中将包含box-shadow"),`
              <div class="minion-card group relative rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all ${this.dyingMinions.has(x.id)?"minion-dying":""} ${x.isDefending?"is-defending":""} ${x.keywords.some(R=>R.name==="嘲讽")?"taunt-minion":""} ${v} ${E?"attack-target":""} ${S?"target-select-mode":""}${x.elementStatus?" element-status-"+x.elementStatus.type:""}" 
                style="${this.getCardBgInline(x,"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)")} border: 4px solid ${S?"#4a90d9":x.isDefending||x.keywords.some(R=>R.name==="嘲讽")?"#6b7db3":x.canAttack&&!x.hasAttacked?"#7cb87c":"#c4b49c"};${x.elementStatus?"padding: 7px; background-clip: padding-box; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[x.elementStatus.type]||"transparent")+";":""}"
                data-minion-id="${x.id}" data-player-id="${d}" data-has-effects="${x.effects&&x.effects.length>0?"true":"false"}">
                ${T>0?`
                  <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md" 
                    style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                    ${T}
                  </div>
                `:""}
                <div class="h-full flex flex-col items-center justify-end py-1 px-2">
                  <div class="minion-name-overlay absolute inset-0 flex items-center justify-center px-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-xs font-bold text-center leading-tight" style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black;">${x.name}</span>
                  </div>
                  ${x.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:inherit;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
                  <div class="flex items-center justify-center gap-1 flex-wrap max-w-full pt-1">
                    ${this.renderKeywords(x.keywords,x.armorValue,x.divineShieldActive,x.playedThisTurn,x.preparation)}
                    ${A?`<div class="effect-icons text-xs">${A}</div>`:""}
                  </div>
                  <div class="flex justify-between w-full pb-1">
                    <div class="stat-circle stat-attack">${x.attack}</div>
                    <div class="stat-circle stat-health">${x.health}</div>
                  </div>
                </div>
                ${this.renderKeywordsTooltip(x.keywords,x.divineShieldActive)}
              </div>
            `}).join("")}
          </div>
        </div>
        
        <!-- 中央分隔区域（无背景色，只保留分割线和信息） -->
        <div class="flex items-center justify-center" style="background: transparent !important; padding: 2px 0;">
          <!-- 弃牌堆按钮（左） -->
          <div id="discard-pile-btn" class="discard-pile-btn group relative cursor-pointer flex-shrink-0 mx-10 rounded-sm"
            style="width: 29px; height: 43px; background: url('/discard-pile.png') center/cover no-repeat;"
            data-player-id="${o.id}">
            <div class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-xs font-bold pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50"
              style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; background: rgba(0,0,0,0.7);">
              弃牌堆：${this.state.discardPile.length}张牌
            </div>
          </div>
          <div class="flex-1 h-0.5 mx-2 rounded-full" style="background: linear-gradient(90deg, transparent 0%, #c4b49c 50%, transparent 100%);"></div>
          ${this.selectingTargetForCard||this.selectingTargetForSkill?`
            <div class="px-6 py-1 rounded-full font-bold text-sm shadow-lg animate-pulse" style="background: linear-gradient(135deg, #4a90d9 0%, #3d7cc6 100%); color: white; border: 2px solid #3a7bc8;">
              🎯 选择目标
            </div>
          `:`
            <div class="px-4 py-0.5 rounded-full font-bold text-xs shadow-sm" style="background: rgba(255, 255, 255, 0.9); color: #5a4a3a; border: 2px solid #d4c4a8;">
              回合 ${t}
            </div>
          `}
          <div class="flex-1 h-0.5 mx-2 rounded-full" style="background: linear-gradient(90deg, transparent 0%, #c4b49c 50%, transparent 100%);"></div>
          <!-- 抽牌堆按钮（右） -->
          <div id="draw-pile-btn" class="draw-pile-btn group relative flex-shrink-0 mx-10 rounded-sm"
            style="width: 29px; height: 43px; background: url('/card-pile.png') center/cover no-repeat;"
            data-player-id="${l.id}" data-deck-count="${l.deck.length}">
            <div class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-xs font-bold pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50"
              style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; background: rgba(0,0,0,0.7);">
              抽牌堆：${l.deck.length}张牌
            </div>
          </div>
        </div>
        
        <!-- 下方玩家区域 -->
        <div class="bottom-player-area pt-0 pb-2 px-3">
          <!-- 下方战场 -->
          <div class="bottom-board flex justify-center gap-2 min-h-24 p-3 rounded-xl mx-4" id="play-area" style="background: rgba(255, 255, 255, 0.6); border: 3px solid ${this.selectedHandCard?"#7cb87c":this.selectingTargetForCard?"#4a90d9":"#d4c4a8"};">
            ${l.board.map(x=>{const w=this.selectedAttackingMinion?.id===x.id,f=this.selectingTargetForCard!==null||this.selectingTargetForSkill!==null,v=x.markCount||0,E=this.getEffectIcons(x.effects);return x.elementStatus&&console.log("[元素边框-联机底部] 随从:",x.name,"元素类型:",x.elementStatus.type,"style中将包含box-shadow"),`
              <div class="minion-card group relative rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all ${x.canAttack&&!x.isDefending||x.canAttack&&x.isDefending&&x.keywords.some(S=>S.name==="机动")?"can-attack":""} ${x.isDefending?"is-defending":""} ${this.dyingMinions.has(x.id)?"minion-dying":""} ${w?"selected-attacker":""} ${f?"target-select-mode":""}${x.elementStatus?" element-status-"+x.elementStatus.type:""}" 
                style="${this.getCardBgInline(x,"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)")} border: 4px solid ${w?"#ff6b6b":f?"#4a90d9":x.keywords.some(S=>S.name==="不动")?"#808080":x.isDefending?"#6b7db3":x.canAttack&&!x.hasAttacked?"#7cb87c":x.playedThisTurn?"#4a90d9":"#c4b49c"};${x.elementStatus?"padding: 7px; background-clip: padding-box; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[x.elementStatus.type]||"transparent")+";":""}"
                data-minion-id="${x.id}" data-player-id="${c}" data-has-effects="${x.effects&&x.effects.length>0?"true":"false"}"
                data-base-border="${x.keywords.some(S=>S.name==="不动")?"#808080":x.isDefending?"#6b7db3":x.canAttack&&!x.hasAttacked?"#7cb87c":x.playedThisTurn?"#4a90d9":"#c4b49c"}">
                ${v>0?`
                  <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md" 
                    style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                    ${v}
                  </div>
                `:""}
                ${x.isDefending||x.keywords.some(S=>S.name==="嘲讽")?`
                  <div class="absolute left-1/2 -translate-x-1/2 z-10 drop-shadow-md leading-none text-sm"
                    style="bottom: -9px; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));">
                    🛡️
                  </div>
                `:""}
                <div class="h-full flex flex-col items-center justify-end py-1 px-2">
                  <div class="minion-name-overlay absolute inset-0 flex items-center justify-center px-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-xs font-bold text-center leading-tight" style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black;">${x.name}</span>
                  </div>
                  ${x.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:inherit;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
                  <div class="flex items-center justify-center gap-1 flex-wrap max-w-full pt-1">
                    ${this.renderKeywords(x.keywords,x.armorValue,x.divineShieldActive,x.playedThisTurn,x.preparation)}
                    ${E?`<div class="effect-icons text-xs">${E}</div>`:""}
                  </div>
                  <div class="flex justify-between w-full pb-1">
                    <div class="stat-circle stat-attack">${x.attack}</div>
                    <div class="stat-circle stat-health">${x.health}</div>
                  </div>
                </div>
                ${this.renderKeywordsTooltip(x.keywords,x.divineShieldActive)}
              </div>
            `}).join("")}
          </div>
          
          <!-- 下方玩家信息 -->
          <div class="relative mb-1" style="min-height: 110px;">
            ${this.renderHeroSkills(l,!1)}
            <!-- 4:3纸材质英雄模块（居中） -->
            <div class="mx-auto relative" data-own-hero="true" data-player-hero="${c}"
              style="width: 140px; height: 105px; ${this.renderHeroBackground(l.heroCard)} border: 4px solid #d4c4a8; border-radius: 8px;${l.elementStatus?"padding: 7px; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[l.elementStatus.type]||"transparent")+";":""}">
              ${l.heroCard?.imageData?"":'<div class="w-full h-full flex items-center justify-center"><span class="font-bold text-lg" style="color: #5a4a3a;">英雄</span></div>'}
              ${l.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:8px;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
              <!-- 血量（底部居中，一半出框） -->
              <div class="absolute flex items-center justify-center font-bold text-white text-sm shadow-md"
                style="bottom: -10px; left: 50%; transform: translateX(-50%); width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #c0a080 0%, #a08060 100%); border: 3px solid #8b7355; z-index: 10;"
                data-player-hp="${c}">
                ${l.health}
              </div>
              ${l.heroMarkCount&&l.heroMarkCount>0?`
                <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md"
                  style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                  ${l.heroMarkCount}
                </div>
              `:""}
              ${this.renderDefenseOverlay(l)}
              ${this.renderSpeechMenuHtml()}
            </div>
            <!-- 昵称和能量（绝对定位在英雄模块右侧） -->
            <!-- 昵称和能量（绝对定位在英雄模块右侧） -->
            <div class="absolute flex flex-col items-start" style="left: calc(50% + 78px); top: 15px;">
              <div class="font-bold text-lg" style="color: #fff; text-shadow: 0 0 8px rgba(0,0,0,0.6), 0 0 16px rgba(0,0,0,0.3);">${l.name}</div>
              <div class="flex items-center gap-1">
                ${this.renderHeroName(l.heroCard)}
                <span class="text-xs mt-0.5" style="color: rgba(255,255,255,0.85); text-shadow: 0 0 6px rgba(0,0,0,0.6);">手牌数：${l.hand.length}</span>
              </div>
              ${this.renderEnergy(l.maxEnergy,l.energy,l.bonusEnergy||0)}
            </div>
          </div>
          
          <!-- 手牌区域 + 按钮 + 日志 -->
          <div class="hand-area flex items-end justify-center ${this.isPortraitMode?"flex-col items-center":""}" style="position: relative; overflow: visible !important; height: auto !important;">
            <!-- 手牌容器 -->
            <div class="hand-container" id="hand-container" style="flex: 0 0 auto; display: flex; justify-content: center; overflow: visible !important; overflow-x: visible !important; overflow-y: visible !important; height: auto !important; min-height: unset !important;">
              ${h?this.renderHand(l.hand,l.energy,this.isPortraitMode):`
                <div class="text-xl py-6 font-bold text-center" style="color: #8b7355;">等待对手点击"是我的回合"...</div>
              `}
            </div>
            
            <!-- 游戏日志栏（左下角） -->
            <div class="game-log-container rounded-lg shadow-lg overflow-hidden" style="position: absolute; left: 20px; bottom: 10px; width: ${this.isPortraitMode?"150px":"200px"}; max-height: 180px; background: rgba(255, 255, 255, 0.95); border: 2px solid #d4c4a8;">
              <div class="text-xs font-bold px-2 py-1" style="background: linear-gradient(135deg, #c0a080 0%, #a08060 100%); color: #fff;">📜 日志</div>
              <div class="game-log-content overflow-y-auto" style="max-height: 150px; font-size: 10px;">
                ${this.renderGameLogs()}
              </div>
            </div>
            
            <!-- 按钮组（右下角） -->
            ${e?`
              <div class="action-buttons" style="position: absolute; right: 20px; bottom: 10px; width: ${this.isPortraitMode?"150px":"200px"};">
                <button id="my-turn-btn" class="action-btn ${this.isPortraitMode?"py-1 text-sm":"py-2 text-lg"} font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                  style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;">
                  是我的回合！
                </button>
              </div>
            `:`
              <div class="action-buttons ${this.isPortraitMode?"flex-row gap-1":"flex flex-col gap-1"}" style="position: absolute; right: 20px; bottom: 10px; width: ${this.isPortraitMode?"150px":"200px"};">
                ${m?`
                  <button id="robot-thinking-btn" class="action-btn ${this.isPortraitMode?"py-1 text-sm":"py-2 text-lg"} font-bold rounded-lg shadow-lg"
                    style="background: linear-gradient(135deg, #a0a0a0 0%, #808080 100%); color: #fff; border: 3px solid #606060; cursor: default;">
                    🤖 Robot 思考中...
                  </button>
                `:`
                  <button id="end-turn-btn" class="action-btn ${this.isPortraitMode?"py-1 text-sm":"py-2 text-lg"} font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                    style="background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: 3px solid #a04040;">
                    结束回合
                  </button>
                  <button id="all-attack-btn" class="action-btn ${this.isPortraitMode?"py-1 text-sm":"py-2 text-lg"} font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all ${g?"attack-available":"attack-disabled"}"
                    style="background: ${g?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"linear-gradient(135deg, #888 0%, #666 100%)"}; color: #fff; border: 3px solid ${g?"#a04040":"#555"};">
                    ⚔️ 全部打脸
                  </button>
                `}
              </div>
            `}
          </div>
        </div>
      </div>
      
      <!-- 攻击箭头 -->
      <svg id="attack-arrow" class="attack-arrow" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 99999;">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#e05050"/>
          </marker>
        </defs>
        <line id="arrow-line" stroke="#e05050" stroke-width="4" marker-end="url(#arrowhead)"/>
      </svg>
      
      <!-- 目标选择箭头（蓝色） -->
      <svg id="target-arrow" class="target-arrow" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 99999;">
        <defs>
          <marker id="target-arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#4a90d9"/>
          </marker>
        </defs>
        <line id="target-arrow-line" stroke="#4a90d9" stroke-width="4" marker-end="url(#target-arrowhead)"/>
      </svg>
      
      <!-- 弃牌堆查看器弹窗 -->
      ${this.renderDiscardPileViewer()}
      
      <!-- 拖拽时的卡牌 -->
      <div id="drag-card" class="drag-card" style="display: none;"></div>
    `,this.attachEventListeners(),this.checkAndTriggerStatEffects()}saveCurrentMinionStats(){this.previousMinionStats.clear(),this.state.players.forEach(e=>{e.board.forEach(s=>{this.previousMinionStats.set(s.id,{attack:s.attack,health:s.health,maxHealth:s.maxHealth})})})}checkAndTriggerStatEffects(){const e=[],s=new Set;this.state.players.forEach(r=>{r.board.forEach(i=>{s.add(i.id)})});const t=[];this.previousBoardMinionIds.size>0&&this.previousBoardMinionIds.forEach(r=>{s.has(r)||t.push(r)}),this.state.players.forEach(r=>{r.board.forEach(i=>{const n=this.previousMinionStats.get(i.id);if(n){const a=n.attack!==i.attack||n.maxHealth!==i.maxHealth,o=n.health-i.health;o>0?e.push({id:i.id,type:"damaged",damage:o}):a&&e.push({id:i.id,type:"stat-change",damage:0})}})}),this.state.players.forEach((r,i)=>{const a=this.previousPlayerHealth[i]-r.health;if(a>0){const o=document.querySelector(`[data-player-hp="${r.id}"]`);if(o){const l=o.getBoundingClientRect();this.damageNumbers.push({x:l.left+l.width/2,y:l.top+l.height/2,damage:a})}}this.previousPlayerHealth[i]=r.health}),this.saveCurrentMinionStats(),this.previousBoardMinionIds=s,e.length>0&&requestAnimationFrame(()=>{e.forEach(({id:r,type:i,damage:n})=>{const a=document.querySelector(`[data-minion-id="${r}"]`);if(a){if(a.classList.remove("minion-stat-change","minion-damaged"),a.offsetWidth,i==="damaged"){if(a.classList.add("minion-damaged"),n>0){const o=a.getBoundingClientRect();this.showDamageNumber(o.left+o.width/2,o.top+o.height/2,n)}}else a.classList.add("minion-stat-change");setTimeout(()=>{a.classList.remove("minion-stat-change","minion-damaged")},300)}else if(i==="damaged"&&n>0){const o=this.deathAnimationQueue.find(l=>l.id===r);o&&this.showDamageNumber(o.x+40,o.y+35,n)}})}),this.damageNumbers.length>0&&requestAnimationFrame(()=>{this.damageNumbers.forEach(({x:r,y:i,damage:n})=>{this.showDamageNumber(r,i,n)}),this.damageNumbers=[]}),t.length>0&&(t.forEach(r=>{const i=this.previousMinionStats.get(r),n=this.deathAnimationQueue.find(a=>a.id===r);if(i&&n){const a=Math.max(1,i.health);this.showDamageNumber(n.x+40,n.y+50,a)}}),setTimeout(()=>{this.playDeathAnimations(t)},100))}showDamageNumber(e,s,t){const r=document.createElement("div");r.className="damage-number",r.style.left=`${e}px`,r.style.top=`${s}px`,r.textContent=`${t}`,document.body.appendChild(r),setTimeout(()=>{r.remove()},550)}playDeathAnimations(e){e.forEach(s=>{const t=this.deathAnimationQueue.find(r=>r.id===s);t&&(this.createTearAnimationWithInfo(t),this.deathAnimationQueue=this.deathAnimationQueue.filter(r=>r.id!==s))})}createTearAnimationWithInfo(e){const s=document.createElement("div");s.className="minion-tear-top",s.style.left=`${e.x}px`,s.style.top=`${e.y}px`,s.innerHTML=`
      <div class="h-full flex flex-col items-center justify-start pt-2 px-1">
        <div class="font-bold text-xs text-center" style="color: #5a4a3a; word-break: break-all;">${e.name}</div>
      </div>
    `;const t=document.createElement("div");t.className="minion-tear-bottom",t.style.left=`${e.x}px`,t.style.top=`${e.y+50}px`,t.innerHTML=`
      <div class="h-full flex flex-col items-center justify-end pb-2">
        <div class="flex justify-between w-full px-2">
          <div class="stat-circle stat-attack" style="width: 22px; height: 22px; font-size: 12px;">${e.attack}</div>
          <div class="stat-circle stat-health" style="width: 22px; height: 22px; font-size: 12px;">${e.health}</div>
        </div>
      </div>
    `,document.body.appendChild(s),document.body.appendChild(t),setTimeout(()=>{s.remove(),t.remove()},400)}saveMinionPositions(){document.querySelectorAll(".minion-card").forEach(e=>{const s=e,t=parseInt(s.dataset.minionId||"0"),r=parseInt(s.dataset.playerId||"0"),i=s.getBoundingClientRect(),n=this.deathAnimationQueue.find(a=>a.id===t);if(n)n.x=i.left,n.y=i.top,n.playerId=r;else{const a=this.state.players.flat().flatMap(o=>o.board).find(o=>o.id===t);a&&this.deathAnimationQueue.push({id:a.id,name:a.name,attack:a.attack,health:a.health,x:i.left,y:i.top,playerId:r})}})}findAttackBonusForMinion(e){const s=e.effects||[];for(const t of s)if(this.momentsInclude(t.moment,"攻击时")&&t.effect==="造成伤害"&&t.targets?.[0]==="攻击目标")return t.value||0;return 0}ensureFxCanvas(){if(this.fxCanvas&&this.fxCanvas.parentElement)return;this.fxCanvas&&(this.fxCanvas.remove(),this.fxCanvas=null,this.fxCtx=null),this.fxCanvas=document.createElement("canvas"),this.fxCanvas.id="fx-canvas",this.fxCanvas.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:999;width:100vw;height:100vh;",this.fxCanvas.width=window.innerWidth,this.fxCanvas.height=window.innerHeight,document.body.appendChild(this.fxCanvas),this.fxCtx=this.fxCanvas.getContext("2d");const e=()=>{this.fxCanvas&&(this.fxCanvas.width=window.innerWidth,this.fxCanvas.height=window.innerHeight)};window.addEventListener("resize",e)}getMinionCenter(e){const s=document.querySelector(`[data-minion-id="${e}"]`);if(!s)return null;const t=s.getBoundingClientRect(),r=this.fxCanvas?.parentElement;if(!r)return null;const i=r.getBoundingClientRect();return{x:t.left-i.left+t.width/2,y:t.top-i.top+t.height/2}}triggerFireExplosion(e){this.ensureFxCanvas();const s=this.getMinionCenter(e);if(s){this.fxCanvas.width,this.fxCanvas.height;for(let t=0;t<10;t++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*20,vy:(Math.random()-.5)*20,size:16+Math.random()*22,life:1,maxLife:.8+Math.random()*.5,color:t===0?"#fffbe6":"#ffcc00",decay:.96,shape:"circle",alpha:1});for(let t=0;t<50;t++){const r=Math.random()*Math.PI*2,i=40+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i-10,size:5+Math.random()*8,life:1,maxLife:1+Math.random()*.8,color:["#ff6600","#ff3300","#ff8800","#cc2200"][Math.floor(Math.random()*4)],decay:.975,shape:"spark",alpha:1,gravity:80,trail:!0,trailLength:6,history:[]})}for(let t=0;t<30;t++){const r=Math.random()*Math.PI*2,i=60+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i-10,size:2+Math.random()*3,life:1,maxLife:.8+Math.random()*.7,color:["#ffe066","#ff9900","#fff"][Math.floor(Math.random()*3)],decay:.97,shape:"circle",alpha:1,gravity:40})}for(let t=0;t<12;t++){const r=-Math.PI/2+(Math.random()-.5)*Math.PI*.6,i=10+Math.random()*30;this.fxParticles.push({x:s.x+(Math.random()-.5)*10,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:8+Math.random()*12,life:1,maxLife:2+Math.random()*1.5,color:"rgba(80,70,60,0.5)",decay:.99,shape:"circle",alpha:.5,gravity:-15})}this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerEditorExplosion(e){const s=document.getElementById("main-card-preview");if(!s)return;const t=document.getElementById("editor-explosion-container");t?.parentNode&&t.remove();const r=document.createElement("div");r.id="editor-explosion-container",r.className="editor-explosion-container pointer-events-none",r.style.cssText="position:absolute;inset:0;z-index:100;overflow:hidden;border-radius:8px;",s.style.position="relative",s.appendChild(r);const n={"🔥":["#ff4500","#ff6347","#ff8c00","#ffd700","#ff0000","#ff3300"],"❄️":["#00bfff","#87ceeb","#e0ffff","#add8e6","#4169e1","#00d4ff"],"⚡️":["#8b00ff","#9400d3","#ba55d3","#dda0dd","#7b68ee","#9932cc"]}[e]||["#ffffff"];for(let a=0;a<50;a++){const o=document.createElement("div"),l=3+Math.random()*10,d=Math.random()*Math.PI*2,c=30+Math.random()*120,m=Math.cos(d)*c,h=Math.sin(d)*c,u=n[Math.floor(Math.random()*n.length)],p=.5+Math.random()*.8,b=Math.random()*.15;o.style.cssText=`position:absolute;left:50%;top:50%;width:${l}px;height:${l}px;border-radius:50%;background:${u};box-shadow:0 0 ${l*1.5}px ${u};opacity:1;transform:translate(-50%,-50%);--dx:${m}px;--dy:${h}px;animation:editor-particle-explode ${p}s ease-out ${b}s forwards;`,r.appendChild(o)}setTimeout(()=>{r.parentNode&&r.remove()},2e3)}getHeroCenter(e){const s=document.querySelector(`[data-player-hero="${e}"]`);if(!s)return null;const t=s.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}getSpeechText(e,s){const r=s?.heroCard?.heroSpeech?.[e]?.trim()||this.heroSpeech[e]?.trim();return r||{greeting:"你好！",apology:"抱歉。",taunt:"吁，Loser！",exclamation:"Awww man！",pity:"aww...",flirt:"我喜欢你。"}[e]||""}showSpeechBubble(e,s,t){const r=`speech-bubble-player-${t}`,i=document.getElementById(r);i&&i.remove();const n=t===1,a=document.createElement("div");a.id=r,a.innerHTML=`
      <div style="position: relative; background: ${n?"#fff":"#e8f0fe"};
        border: 3px solid ${n?"#c0a080":"#6fa8dc"};
        border-radius: 16px; padding: 12px 20px;
        box-shadow: 0 6px 24px rgba(0,0,0,0.2);
        max-width: 220px; min-width: 80px;
        animation: speechFadeIn 0.3s ease-out;">
        <div style="font-size: 10px; color: #8b7355; margin-bottom: 2px; font-weight: 600;">${s}</div>
        <div style="font-size: 17px; font-weight: bold; color: #5a4a3a; line-height: 1.4;">${e}</div>
        <!-- 气泡尾巴（指向左侧的英雄） -->
        <div style="position: absolute; top: 50%; left: -10px; transform: translateY(-50%);
          width: 0; height: 0;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid ${n?"#c0a080":"#6fa8dc"};"></div>
        <div style="position: absolute; top: 50%; left: -7px; transform: translateY(-50%);
          width: 0; height: 0;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-right: 8px solid ${n?"#fff":"#e8f0fe"};"></div>
      </div>`,a.style.cssText="position: fixed; z-index: 9999; animation: speechFadeIn 0.3s ease-out;",document.body.appendChild(a);const o=document.querySelector(`[data-player-hero="${t}"]`);if(o){const l=o.getBoundingClientRect();a.style.left=l.right+16+"px",a.style.top=l.top+l.height/2-20+"px"}else a.style.left="50%",a.style.top="50%",a.style.transform="translate(-50%, -50%)";setTimeout(()=>{a.parentNode&&(a.style.transition="opacity 0.5s ease-out",a.style.opacity="0",setTimeout(()=>{a.parentNode&&a.remove()},500))},2500)}hideSpeechMenu(){const e=document.getElementById("speech-menu-container");e&&e.style.display!=="none"&&(e.style.animation="speechMenuFadeOut 0.15s ease-in forwards",setTimeout(()=>{e.parentNode&&(e.style.display="none")},150)),this.showSpeechMenu=!1,this.clearSpeechMenuTimer()}clearSpeechMenuTimer(){this.speechMenuTimer!==null&&(clearTimeout(this.speechMenuTimer),this.speechMenuTimer=null)}updateSpeechMenuCooldownAttr(){const e=document.getElementById("speech-menu-container");e&&e.setAttribute("data-cooldown",this.speechCooldown?"true":"false")}triggerSpeech(e){if(this.speechCooldown)return;this.speechCooldown=!0,this.speechTurnSpokenTypes.add(e),this.updateSpeechMenuCooldownAttr(),setTimeout(()=>{this.speechCooldown=!1,this.updateSpeechMenuCooldownAttr()},500);const s=this.state.phase==="onlineBattle",t=this.state.phase==="robotBattle";this.state.phase;let r,i;if(s)r=this.state.players[this.onlineViewPlayerIndex],i=r?.id||1;else if(t)r=this.state.players[0],i=r?.id||1;else{const l=document.querySelector('.bottom-player-area [data-own-hero="true"]'),d=parseInt(l?.getAttribute("data-player-hero")||"1");r=this.state.players.find(c=>c.id===d),i=d}const n=this.getSpeechText(e,r),a=r?.name||"我";this.showSpeechBubble(n,a,i),this.hideSpeechMenu();const o=r?.heroCard?.heroSpeech?.voiceType||"none";if(e==="flirt"&&this.soundVolume>0&&!this.flirtAudioPlaying){const l=new Audio("/flirt_audio.wav");l.volume=this.soundVolume/100,this.flirtAudioPlaying=!0;const d=this.bgMusic&&!this.bgMusic.paused?this.bgMusic:null,c=d?this.musicVolume/100:0;if(d){const m=c/33,h=setInterval(()=>{const u=Math.max(0,d.volume-m);d.volume=u,u<=0&&(clearInterval(h),d.volume=0)},30)}l.onended=()=>{if(this.flirtAudioPlaying=!1,d){let m=0;const h=c/33,u=setInterval(()=>{m=Math.min(c,m+h),d.volume=m,m>=c&&(clearInterval(u),d.volume=c)},30)}},l.play().catch(()=>{})}else if(o==="male"&&this.soundVolume>0&&Ae.MALE_AUDIO_FILES[e]){const l=new Audio(Ae.MALE_AUDIO_FILES[e]);l.volume=this.soundVolume/100,l.play().catch(()=>{})}else if(o==="female"&&this.soundVolume>0&&Ae.FEMALE_AUDIO_FILES[e]){const l=new Audio(Ae.FEMALE_AUDIO_FILES[e]);l.volume=this.soundVolume/100,l.play().catch(()=>{})}if(s&&this.state.online.currentRoom&&fe(async()=>{const{broadcastGameAction:l}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:l}},__vite__mapDeps([0,1])).then(({broadcastGameAction:l})=>{l(this.state.online.currentRoom.id,{type:"VOICE_SPEECH",playerId:this.state.online.playerId,speechType:e}).catch(console.error)}),this.state.phase==="robotBattle"){const l=this.state.players[1]?.heroCard;setTimeout(()=>{const d=[{type:"greeting",weight:19},{type:"apology",weight:19},{type:"taunt",weight:19},{type:"exclamation",weight:19},{type:"pity",weight:19},{type:"flirt",weight:5}],c=d.reduce((y,x)=>y+x.weight,0);let m=Math.random()*c,h="greeting";for(const y of d)if(m-=y.weight,m<=0){h=y.type;break}const u={greeting:"你好！",apology:"抱歉。",taunt:"吁，Loser！",exclamation:"Awww man！",pity:"aww...",flirt:"我喜欢你。"},p=l?.heroSpeech?.[h]||u[h],b=l?.name||"Robot";this.showSpeechBubble(p,b,2);const g=l?.heroSpeech?.voiceType||"none";if(h==="flirt"&&this.soundVolume>0&&!this.flirtAudioPlaying){const y=new Audio("/flirt_audio.wav");y.volume=this.soundVolume/100,this.flirtAudioPlaying=!0;const x=this.bgMusic&&!this.bgMusic.paused?this.bgMusic:null,w=x?this.musicVolume/100:0;if(x){const f=w/33,v=setInterval(()=>{const E=Math.max(0,x.volume-f);x.volume=E,E<=0&&(clearInterval(v),x.volume=0)},30)}y.onended=()=>{if(this.flirtAudioPlaying=!1,x){let f=0;const v=w/33,E=setInterval(()=>{f=Math.min(w,f+v),x.volume=f,f>=w&&(clearInterval(E),x.volume=w)},30)}},y.play().catch(()=>{})}else if(g==="female"&&this.soundVolume>0&&Ae.FEMALE_AUDIO_FILES[h]){const y=new Audio(Ae.FEMALE_AUDIO_FILES[h]);y.volume=this.soundVolume/100,y.play().catch(()=>{})}},1e3)}}renderSpeechMenuHtml(){return`<div id="speech-menu-container" data-cooldown="${this.speechCooldown?"true":"false"}" style="display:none; position:absolute; top:0; left:0; width:140px; height:105px; z-index:50; pointer-events:none;">
      <style>
        #speech-menu-container[data-cooldown="true"] [data-speech-type] {
          opacity: 0.4 !important;
          pointer-events: none !important;
          filter: grayscale(0.8) !important;
        }
      </style>
      <!-- 嘲讽（左上） -->
      <button data-speech-type="taunt"
        style="position:absolute; top:-30px; left:16px; width:44px; height:30px; border-radius:8px;
          background:linear-gradient(135deg,#c0a080,#a08060); border:2px solid #8b7355;
          color:#fff; font-size:11px; font-weight:bold; cursor:pointer; pointer-events:auto;
          box-shadow:0 3px 8px rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center;
          transition:all 0.15s ease; white-space:nowrap; line-height:1;">
        嘲讽
      </button>
      <!-- 感叹（右上） -->
      <button data-speech-type="exclamation"
        style="position:absolute; top:-30px; right:16px; width:44px; height:30px; border-radius:8px;
          background:linear-gradient(135deg,#c0a080,#a08060); border:2px solid #8b7355;
          color:#fff; font-size:11px; font-weight:bold; cursor:pointer; pointer-events:auto;
          box-shadow:0 3px 8px rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center;
          transition:all 0.15s ease; white-space:nowrap; line-height:1;">
        感叹
      </button>
      <!-- 道歉（左中） -->
      <button data-speech-type="apology"
        style="position:absolute; top:25px; left:-20px; width:44px; height:30px; border-radius:8px;
          background:linear-gradient(135deg,#c0a080,#a08060); border:2px solid #8b7355;
          color:#fff; font-size:11px; font-weight:bold; cursor:pointer; pointer-events:auto;
          box-shadow:0 3px 8px rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center;
          transition:all 0.15s ease; white-space:nowrap; line-height:1;">
        道歉
      </button>
      <!-- 可惜（右中） -->
      <button data-speech-type="pity"
        style="position:absolute; top:25px; right:-20px; width:44px; height:30px; border-radius:8px;
          background:linear-gradient(135deg,#c0a080,#a08060); border:2px solid #8b7355;
          color:#fff; font-size:11px; font-weight:bold; cursor:pointer; pointer-events:auto;
          box-shadow:0 3px 8px rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center;
          transition:all 0.15s ease; white-space:nowrap; line-height:1;">
        可惜
      </button>
      <!-- 问候（左下） -->
      <button data-speech-type="greeting"
        style="position:absolute; top:76px; left:16px; width:44px; height:30px; border-radius:8px;
          background:linear-gradient(135deg,#c0a080,#a08060); border:2px solid #8b7355;
          color:#fff; font-size:11px; font-weight:bold; cursor:pointer; pointer-events:auto;
          box-shadow:0 3px 8px rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center;
          transition:all 0.15s ease; white-space:nowrap; line-height:1;">
        问候
      </button>
      <!-- 调情（右下） -->
      <button data-speech-type="flirt"
        style="position:absolute; top:76px; right:16px; width:44px; height:30px; border-radius:8px;
          background:linear-gradient(135deg,#c0a080,#a08060); border:2px solid #8b7355;
          color:#fff; font-size:11px; font-weight:bold; cursor:pointer; pointer-events:auto;
          box-shadow:0 3px 8px rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center;
          transition:all 0.15s ease; white-space:nowrap; line-height:1;">
        调情
      </button>
    </div>`}renderRemoteSpeechBubble(e,s,t){const r=this.state.players.find(o=>o.id===t),a=r?.heroCard?.heroSpeech?.[s]?.trim()||this.getSpeechText(s);this.showSpeechBubble(a,r?.name||"对手",t)}triggerFireExplosionOnHero(e){this.ensureFxCanvas();const s=this.getHeroCenter(e);if(s){this.fxCanvas.width,this.fxCanvas.height;for(let t=0;t<10;t++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*20,vy:(Math.random()-.5)*20,size:16+Math.random()*22,life:1,maxLife:.8+Math.random()*.5,color:t===0?"#fffbe6":"#ffcc00",decay:.96,shape:"circle",alpha:1});for(let t=0;t<50;t++){const r=Math.random()*Math.PI*2,i=40+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i-10,size:5+Math.random()*8,life:1,maxLife:1+Math.random()*.8,color:["#ff6600","#ff3300","#ff8800","#cc2200"][Math.floor(Math.random()*4)],decay:.975,shape:"spark",alpha:1,gravity:80,trail:!0,trailLength:6,history:[]})}for(let t=0;t<30;t++){const r=Math.random()*Math.PI*2,i=60+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i-10,size:2+Math.random()*3,life:1,maxLife:.8+Math.random()*.7,color:["#ffe066","#ff9900","#fff"][Math.floor(Math.random()*3)],decay:.97,shape:"circle",alpha:1,gravity:40})}for(let t=0;t<12;t++){const r=-Math.PI/2+(Math.random()-.5)*Math.PI*.6,i=10+Math.random()*30;this.fxParticles.push({x:s.x+(Math.random()-.5)*10,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:8+Math.random()*12,life:1,maxLife:2+Math.random()*1.5,color:"rgba(80,70,60,0.5)",decay:.99,shape:"circle",alpha:.5,gravity:-15})}this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerIceExplosion(e){this.ensureFxCanvas();const s=this.getMinionCenter(e);if(s){this.fxCanvas.width,this.fxCanvas.height;for(let t=0;t<8;t++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*15,vy:(Math.random()-.5)*15,size:14+Math.random()*18,life:1,maxLife:.9+Math.random()*.5,color:t===0?"#ffffff":"#a0e0ff",decay:.955,shape:"circle",alpha:1});for(let t=0;t<45;t++){const r=Math.random()*Math.PI*2,i=35+Math.random()*120;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i-5,size:3+Math.random()*7,life:1,maxLife:1+Math.random()*.8,color:["#c8e8ff","#e0f0ff","#a0d0ff","#ffffff"][Math.floor(Math.random()*4)],decay:.97,shape:"diamond",alpha:1,gravity:50})}for(let t=0;t<30;t++){const r=-Math.PI/2+(Math.random()-.5)*Math.PI*.8,i=20+Math.random()*60;this.fxParticles.push({x:s.x+(Math.random()-.5)*30,y:s.y,vx:Math.cos(r)*i+(Math.random()-.5)*30,vy:Math.sin(r)*i,size:3+Math.random()*6,life:1,maxLife:1.5+Math.random()*1,color:"rgba(220,240,255,0.9)",decay:.99,shape:"circle",alpha:.9,gravity:-10})}for(let t=0;t<12;t++){const r=-Math.PI/2+(Math.random()-.5)*Math.PI*.5,i=8+Math.random()*20;this.fxParticles.push({x:s.x+(Math.random()-.5)*8,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:10+Math.random()*14,life:1,maxLife:2+Math.random()*1.5,color:"rgba(180,210,240,0.5)",decay:.985,shape:"circle",alpha:.5,gravity:-20})}this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerIceExplosionOnHero(e){this.ensureFxCanvas();const s=this.getHeroCenter(e);if(s){for(let t=0;t<8;t++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*15,vy:(Math.random()-.5)*15,size:14+Math.random()*18,life:1,maxLife:.9+Math.random()*.5,color:t===0?"#ffffff":"#a0e0ff",decay:.955,shape:"circle",alpha:1});for(let t=0;t<45;t++){const r=Math.random()*Math.PI*2,i=35+Math.random()*120;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i-5,size:3+Math.random()*7,life:1,maxLife:1+Math.random()*.8,color:["#c8e8ff","#e0f0ff","#a0d0ff","#ffffff"][Math.floor(Math.random()*4)],decay:.97,shape:"diamond",alpha:1,gravity:50})}for(let t=0;t<30;t++){const r=-Math.PI/2+(Math.random()-.5)*Math.PI*.8,i=20+Math.random()*60;this.fxParticles.push({x:s.x+(Math.random()-.5)*30,y:s.y,vx:Math.cos(r)*i+(Math.random()-.5)*30,vy:Math.sin(r)*i,size:3+Math.random()*6,life:1,maxLife:1.5+Math.random()*1,color:"rgba(220,240,255,0.9)",decay:.99,shape:"circle",alpha:.9,gravity:-10})}for(let t=0;t<12;t++){const r=-Math.PI/2+(Math.random()-.5)*Math.PI*.5,i=8+Math.random()*20;this.fxParticles.push({x:s.x+(Math.random()-.5)*8,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:10+Math.random()*14,life:1,maxLife:2+Math.random()*1.5,color:"rgba(180,210,240,0.5)",decay:.985,shape:"circle",alpha:.5,gravity:-20})}this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerLightningExplosion(e){this.ensureFxCanvas();const s=this.getMinionCenter(e);if(s){this.fxCanvas.width,this.fxCanvas.height;for(let t=0;t<8;t++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,size:18+Math.random()*24,life:1,maxLife:.7+Math.random()*.4,color:t===0?"#ffffff":["#7AB8B8","#90D0D0","#B0E0E0"][Math.floor(Math.random()*3)],decay:.95,shape:"circle",alpha:1});for(let t=0;t<40;t++){const r=Math.random()*Math.PI*2,i=30+Math.random()*100;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i+(Math.random()-.5)*30,size:4+Math.random()*10,life:1,maxLife:.8+Math.random()*.6,color:["#7AB8B8","#90D0D0","#B0E0E0","#C8E8E8","#D8F0F0"][Math.floor(Math.random()*5)],decay:.96,shape:"zigzag",alpha:1,gravity:20,trail:!0,trailLength:8,history:[]})}for(let t=0;t<25;t++){const r=Math.random()*Math.PI*2,i=50+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:2+Math.random()*4,life:1,maxLife:.6+Math.random()*.5,color:["#90D0D0","#B8E8E8","#ffffff","#D8F0F0"][Math.floor(Math.random()*4)],decay:.955,shape:"circle",alpha:1,gravity:0})}for(let t=0;t<10;t++)this.fxParticles.push({x:s.x+(Math.random()-.5)*6,y:s.y+(Math.random()-.5)*6,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,size:8+Math.random()*12,life:1,maxLife:1.2+Math.random()*.8,color:"rgba(120,200,200,0.4)",decay:.98,shape:"circle",alpha:.4,gravity:0});this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerLightningExplosionOnHero(e){this.ensureFxCanvas();const s=this.getHeroCenter(e);if(s){for(let t=0;t<8;t++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,size:18+Math.random()*24,life:1,maxLife:.7+Math.random()*.4,color:t===0?"#ffffff":["#7AB8B8","#90D0D0","#B0E0E0"][Math.floor(Math.random()*3)],decay:.95,shape:"circle",alpha:1});for(let t=0;t<40;t++){const r=Math.random()*Math.PI*2,i=30+Math.random()*100;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i+(Math.random()-.5)*30,size:4+Math.random()*10,life:1,maxLife:.8+Math.random()*.6,color:["#7AB8B8","#90D0D0","#B0E0E0","#C8E8E8","#D8F0F0"][Math.floor(Math.random()*5)],decay:.96,shape:"zigzag",alpha:1,gravity:20,trail:!0,trailLength:8,history:[]})}for(let t=0;t<25;t++){const r=Math.random()*Math.PI*2,i=50+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:2+Math.random()*4,life:1,maxLife:.6+Math.random()*.5,color:["#90D0D0","#B8E8E8","#ffffff","#D8F0F0"][Math.floor(Math.random()*4)],decay:.955,shape:"circle",alpha:1,gravity:0})}for(let t=0;t<10;t++)this.fxParticles.push({x:s.x+(Math.random()-.5)*6,y:s.y+(Math.random()-.5)*6,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,size:8+Math.random()*12,life:1,maxLife:1.2+Math.random()*.8,color:"rgba(120,200,200,0.4)",decay:.98,shape:"circle",alpha:.4,gravity:0});this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}processPendingVisualEffects(){const e=this.state.pendingVisualEffects||[];if(e.length!==0){for(const s of e)s.type==="fire_explosion"?s.targetType==="hero"?this.triggerFireExplosionOnHero(s.targetPlayerId):this.triggerFireExplosion(s.targetMinionId):s.type==="ice_explosion"?s.targetType==="hero"?this.triggerIceExplosionOnHero(s.targetPlayerId):this.triggerIceExplosion(s.targetMinionId):s.type==="lightning_explosion"&&(s.targetType==="hero"?this.triggerLightningExplosionOnHero(s.targetPlayerId):this.triggerLightningExplosion(s.targetMinionId));this.state={...this.state,pendingVisualEffects:[]}}}savePotentialDeathMinions(e,s){this.state.players.forEach(t=>{t.board.forEach(r=>{if(!this.deathAnimationQueue.find(n=>n.id===r.id)){const n=document.querySelector(`[data-minion-id="${r.id}"]`);let a=0,o=0,l=t.id;if(n){const d=n.getBoundingClientRect();a=d.left,o=d.top,l=parseInt(n.dataset.playerId||"0")}this.deathAnimationQueue.push({id:r.id,name:r.name,attack:r.attack,health:r.health,x:a,y:o,playerId:l})}})}),document.querySelectorAll(".minion-card").forEach(t=>{const r=t,i=parseInt(r.dataset.minionId||"0"),n=parseInt(r.dataset.playerId||"0"),a=r.getBoundingClientRect(),o=this.deathAnimationQueue.find(l=>l.id===i);o&&(o.x=a.left,o.y=a.top,o.playerId=n)})}async renderGameOver(){const e=this.state.winner;if(!e){console.error("[动画] renderGameOver: winner 为 null，无法渲染游戏结束界面"),this.state=le(this.state,{type:"BACK_TO_MENU"}),this.render();return}const s=e===1?1:0,t=this.state.players[s],r=this.state.players[e-1];console.log("[动画] 渲染本机游戏结束界面"),console.log("[动画] winner (索引):",e,"(对应 players["+(e-1)+"])"),console.log("[动画] winner 名字:",r.name,"生命值:",r.health),console.log("[动画] loserIndex:",s,"loser 名字:",t.name,"生命值:",t.health);const i=`
      <div id="game-over-overlay" class="fixed inset-0 flex flex-col items-center justify-center" style="background: #000;">
        <div id="thumbs-down-layer" style="position: absolute; inset: 0; pointer-events: none; overflow: hidden;"></div>
        <div class="text-center" style="position: relative; z-index: 2;">
          <h1 class="text-8xl font-bold mb-8" style="color: #ff0000; font-family: 'Georgia', serif; text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);">
            Loser is
          </h1>
          <p class="text-6xl font-bold mb-12" style="color: #fff; font-family: 'Georgia', serif;">
            ${t.name}
          </p>
          <p class="text-sm mt-12" style="color: #666; cursor: default;">- 点击屏幕返回主菜单 -</p>
        </div>
      </div>
    `;await this.applyGrayscaleTransition(i);const n=document.getElementById("game-over-overlay");n&&n.addEventListener("click",()=>{this.stopThumbsDownEmojis(),this.state=le(this.state,{type:"BACK_TO_MENU"}),this.render()}),this.spawnThumbsDownEmojis()}robotThreatScore(e){let s=e.attack*1.5;s+=e.health/Math.max(e.maxHealth,1)*2,e.keywords.some(r=>r.name==="连击")&&(s+=5),e.keywords.some(r=>r.name==="狂怒")&&(s+=5),e.divineShieldActive&&(s+=8),e.keywords.some(r=>r.name==="元素")&&(s+=3),e.keywords.some(r=>r.name==="先攻")&&(s+=3),e.isDefending&&(s+=2);const t=e.armorValue||0;return s+=t*.5,s}robotValueScore(e){let s=e.attack*1.2+e.health*.8;return e.keywords.some(t=>t.name==="连击")&&(s+=5),e.keywords.some(t=>t.name==="狂怒")&&(s+=5),e.keywords.some(t=>t.name==="先攻")&&(s+=3),e.keywords.some(t=>t.name==="机动")&&(s+=3),e.divineShieldActive&&(s+=4),e.keywords.some(t=>t.name==="元素")&&(s+=2),e.keywords.some(t=>t.name==="嘲讽")&&(s+=2),s}evaluateConditionLikelihood(e,s){if(!e||e.length===0)return 1;let t=0,r=0;for(const i of e){const n=i.conditionType||(!i.triggerNumbers||i.triggerNumbers.length===6?"guaranteed":"d6");if(n==="guaranteed"){t+=1,r++;continue}if(n==="d6"){const a=i.triggerNumbers||[],o=a.length===0||a.length>=6?1:a.length/6;t+=o,r++;continue}try{const a=it(i,s,2);t+=a.passed?.85:.25}catch{t+=.5}r++}return r>0?t/r:1}robotScoreCardForPlay(e,s,t,r){if(e.legacyEffect==="gain_energy")return 0;if(e.type==="minion"){let i=e.attack*1.5+e.health*1-e.cost*.5;return e.keywords?.some(n=>n.name==="连击")&&(i+=5),e.keywords?.some(n=>n.name==="狂怒")&&(i+=5),e.keywords?.some(n=>n.name==="圣盾")&&(i+=4),e.keywords?.some(n=>n.name==="先攻")&&(i+=3),e.keywords?.some(n=>n.name==="机动")&&(i+=3),e.keywords?.some(n=>n.name==="元素")&&(i+=2),e.keywords?.some(n=>n.name==="嘲讽")&&(i+=2),s.length<3&&(i+=3),t.length>=s.length+2&&(i+=4),i}if(e.type==="spell"){let i=0;const n=e.effects||[];for(const a of n)switch(a.effect){case"造成伤害":{i+=a.value*1;for(const o of t)a.value>=o.health&&(i+=this.robotThreatScore(o)*1.2);break}case"治愈":{i+=a.value*.5,s.filter(l=>l.health<=l.maxHealth*.4).length>0&&(i+=8);break}case"抽牌":{i+=a.value*3,r<=2&&(i+=15);break}case"属性变化":{if(a.isPositive)i+=(a.attackValue||0)*.8+(a.healthValue||0)*.6,s.some(o=>o.attack>=4)&&(i+=5);else{i+=(a.attackValue||0)*1+(a.healthValue||0)*.8;for(const o of t)a.attackValue&&o.attack<=-a.attackValue&&(i+=5),a.healthValue&&o.health<=-a.healthValue&&(i+=5)}break}case"给予印记":{i+=a.value*1;break}case"获得能量":{i+=a.value*2;break}case"召唤":{i+=a.value*4;break}case"给予词条":{a.grantedKeywordName==="嘲讽"||a.grantedKeywordName==="圣盾"?i+=6:i+=4;break}default:i+=2;break}if(n.length>0){const a=this.evaluateConditionLikelihood(n,this.state);a<.3?i*=.2:a<.6?i*=.5:a<.9&&(i*=.8)}return i}return 0}robotSelectBuffTarget(e,s){if(s.length===0)return 0;let t=-1,r=0;for(const i of s){let n=this.robotValueScore(i);if(e.effect==="治愈"){const a=i.maxHealth-i.health;n+=a*1.5,i.health<=2&&(n+=10)}e.effect==="属性变化"&&((e.attackValue||0)>0&&(n+=i.attack*.5),(e.healthValue||0)>0&&i.health<=3&&(n+=8)),e.effect==="给予词条"&&i.health<=3&&i.attack>=3&&(n+=6),i.canAttack&&!i.hasAttacked&&(n+=3),n>t&&(t=n,r=i.id)}return r}robotSelectDebuffTarget(e,s){if(s.length===0)return 0;let t=-1,r=0;for(const i of s){let n=this.robotThreatScore(i);const a=e.value||0;if(a>0&&a>=i.health&&i.health>0&&(n+=20,a-i.health<=2&&(n+=5)),i.divineShieldActive&&a>0&&(n+=5),e.effect==="属性变化"){const o=Math.abs(e.attackValue||0);o>0&&i.attack>0&&(n+=Math.min(i.attack,o)*1.5)}n>t&&(t=n,r=i.id)}return r}robotScoreAttackTarget(e,s,t){let r=0;const i=Math.max(0,e.attack-(s.armorValue||0)),n=i>=s.health,a=e.keywords.some(c=>c.name==="先攻"),o=e.attack*1.5+e.health*.5;if(n){const c=i-s.health,m=Math.max(0,10-c*2);r+=10+m}const l=Math.min(e.health,s.attack);if(a||(l>=e.health&&n?r-=o*.6:l>=e.health?r-=o:l<=0?r+=5:r-=l*.3),a?r+=this.robotThreatScore(s)*.5:r+=this.robotThreatScore(s),s.divineShieldActive&&(e.attack<=3?r+=10:r-=5),e.divineShieldActive&&s.attack>0&&(r+=s.attack*.2),!a&&s.keywords.some(c=>c.name==="先攻")&&s.attack>=e.health&&(r-=15),(s.armorValue||0)>0)if(i<=0)r-=30;else if(i<s.health){const c=i/s.health;r-=8*(1-c)}else r-=3;if(n&&e.keywords.some(c=>["狂怒","连击"].includes(c.name))&&(r+=8),n&&e.effects&&e.effects.length>0){for(const c of e.effects)if(c.moment==="死亡时"||c.moment==="攻击时"){const m=this.evaluateConditionLikelihood([c],this.state);if(m>0){const h=(c.value||0)+(c.attackValue||0)*2+(c.healthValue||0)*1.5;r+=Math.min(h,15)*m}}}return s.elementStatus&&e.attack>0&&(r+=4),s.isDefending&&(r+=2),t==="AGGRESSIVE"&&(r-=25),t==="CONTROL"&&s.attack>=3&&(r+=5),r}robotShouldUseCoin(e,s){const t=e.players[1],r=t.energy,i=t.hand;if(!i.some(a=>a.legacyEffect==="gain_energy"))return!1;if(r<s.cost&&r+1>=s.cost){const a=this.robotScoreCardForPlay(s,t.board,e.players[0].board,i.length);return(s.effects?.some(m=>(m.targets||[]).some(u=>["选择目标","选择随从"].includes(u)))?s.effects?.some(m=>m.targets?.includes("自己"))?t.board.length>0:s.effects?.some(m=>m.targets?.includes("选择目标")||m.targets?.includes("选择随从"))?e.players[0].board.length>0:!0:!0)?a>=5?!0:r<=2&&i.some(l=>l.cost>=5&&l!==s)||a<5&&!i.filter(c=>c!==s&&c!==i.find(m=>m.legacyEffect==="gain_energy")).some(c=>c.cost<=r+1)?!1:a>=3:!1}return!1}async robotUseHeroSkill(){const e=this.state.players[1],s=e.heroCard;if(!s?.skills?.length||e.energy<1)return;const t=0,r=s.skills[t];if(!r||e.heroSkillUsed?.[t]||(r.remainingCooldown??0)>0)return;const i=this.state.players[1].board;if(i.length===0)return;let n=-1,a=0;for(const o of i){let l=0;o.canAttack&&!o.hasAttacked&&(l+=o.attack*.8),o.health<=2&&(l+=this.robotValueScore(o)>=4?15:5),o.keywords.some(d=>d.name==="连击")&&(l+=4),o.keywords.some(d=>d.name==="狂怒")&&(l+=4),o.keywords.some(d=>d.name==="先攻")&&(l+=3),o.divineShieldActive&&(l+=2),o.isDefending&&(l+=2),o.health<=o.maxHealth*.5&&(l+=3);for(const d of this.state.players[0].board)o.attack+1>=d.health&&o.attack<d.health&&(l+=this.robotThreatScore(d)*1.2);l>n&&(n=l,a=o.id)}n<3||(this.state=le(this.state,{type:"PLAY_HERO_SKILL",playerId:2,skillIndex:t,targetPlayerId:2,targetCardId:a}),this.render(),await new Promise(o=>setTimeout(o,1200)))}async robotSpeak(e,s=1){if(this.speechCooldown||this.speechTurnSpokenTypes.has(e)||Math.random()>s)return;const t=this.state.players.find(n=>n.id===2);if(!t)return;const r=this.getSpeechText(e,t);if(!r)return;if(this.speechCooldown=!0,this.updateSpeechMenuCooldownAttr(),await new Promise(n=>setTimeout(n,500)),this.showSpeechBubble(r,t.name||"Robot",2),(t.heroCard?.heroSpeech?.voiceType||"none")==="female"&&this.soundVolume>0&&Ae.FEMALE_AUDIO_FILES[e]){const n=new Audio(Ae.FEMALE_AUDIO_FILES[e]);n.volume=this.soundVolume/100,n.play().catch(()=>{})}this.speechCooldown=!0,this.updateSpeechMenuCooldownAttr(),setTimeout(()=>{this.speechCooldown=!1,this.updateSpeechMenuCooldownAttr()},3e3)}robotCheckPlayerTurnReaction(){if(this.state.phase!=="robotBattle"||this.state.currentPlayerId!==1)return;const e=this.state.turnNumber,s=this.state.players[1].board,t=new Set(s.map(n=>n.id)),r=this.state.players[0];if(e!==this.speechLastTurnCheck){this.speechLastTurnCheck=e,this.speechLastRobotBoardSize=s.length,this.speechLastRobotBoardIds=t,this.speechLastRobotHealth=this.state.players[1].health,this.speechLastRobotTotalHealth=s.reduce((n,a)=>n+a.health,0),this.speechLastHandSize=r.hand.length,this.speechLastPlayerEnergy=r.energy,this.speechTurnSpokenTypes.clear();return}r.hand.length<this.speechLastHandSize&&r.energy<this.speechLastPlayerEnergy&&this.robotSpeak("exclamation",.3);const i=s.reduce((n,a)=>n+a.health,0);i>this.speechLastRobotTotalHealth&&t.size===this.speechLastRobotBoardIds.size&&r.hand.length!==this.speechLastHandSize&&this.robotSpeak("flirt",.2);for(const n of this.speechLastRobotBoardIds)if(!t.has(n)){this.robotSpeak("taunt",.5);break}this.speechLastHandSize=r.hand.length,this.speechLastPlayerEnergy=r.energy,this.speechLastRobotBoardSize=s.length,this.speechLastRobotBoardIds=t,this.speechLastRobotHealth=this.state.players[1].health,this.speechLastRobotTotalHealth=i}async executeRobotTurn(){if(!this.robotTurnExecuting){if(this.robotTurnExecuting=!0,this.state.phase!=="robotBattle"||this.state.currentPlayerId!==2){this.robotTurnExecuting=!1;return}if(this.state.players[0].health<=0||this.state.players[1].health<=0){this.robotTurnExecuting=!1;return}this.speechTurnSpokenTypes.clear(),await this.robotUseHeroSkill(),await this.robotPlayPhase(),await this.robotAttackPhase(),await this.robotDefensePhase(),this.state.turnNumber===1&&(await this.robotSpeak("greeting",1),await new Promise(e=>setTimeout(e,800))),this.state.currentPlayerId===2&&(this.state=le(this.state,{type:"END_ROBOT_TURN"}),this.selectedMinion=null,this.render()),this.robotTurnExecuting=!1}}async robotPlayPhase(){let e=this.state.players[1],s=this.state.players[0];const t=e.hand.find(n=>n.legacyEffect==="gain_energy"),i=e.hand.filter(n=>n!==t).map(n=>({card:n,score:this.robotScoreCardForPlay(n,e.board,s.board,e.hand.length)})).sort((n,a)=>a.score-n.score);for(const n of i){const a=n.card;if(a.type==="minion"){for(const l of i)if(l.card!==a&&l.card.effects?.some(d=>d.conditionType==="minion_count"&&(!d.conditionSides||d.conditionSides.includes("friendly")))){n.score+=5;break}}}i.sort((n,a)=>a.score-n.score);for(const{card:n}of i){if(this.state.currentPlayerId!==2)break;if(e=this.state.players[1],s=this.state.players[0],e.energy<n.cost)if(t&&this.robotShouldUseCoin(this.state,n)){if(this.playWoodSound(),this.state=le(this.state,{type:"PLAY_CARD",playerId:2,cardId:t.id}),this.render(),await new Promise(l=>setTimeout(l,1200)),e=this.state.players[1],e.energy<n.cost)continue}else continue;const o=n.effects?.some(l=>(l.targets||[]).some(c=>["选择目标","选择随从","自己"].includes(c)));if(o?await this.robotPlayCardWithTarget(n):(this.playWoodSound(),this.state=le(this.state,{type:"PLAY_CARD",playerId:2,cardId:n.id})),this.render(),await new Promise(l=>setTimeout(l,1500)),n.cost>=6&&await this.robotSpeak("exclamation",.5),n.type==="minion"&&!o){const l=n.effects?.find(d=>{const c=d.targets||[];return this.momentsInclude(d.moment,"打出时")&&c.some(m=>["选择目标","选择随从","自己"].includes(m))});l&&await this.robotExecuteMinionEffect(n,l)}}if(t&&this.state.currentPlayerId===2&&(e=this.state.players[1],e.hand.some(a=>a.id===t.id))){const a=e.energy;!e.hand.some(l=>l.id!==t.id&&l.cost<=a)&&a<=1&&(this.playWoodSound(),this.state=le(this.state,{type:"PLAY_CARD",playerId:2,cardId:t.id}),this.render(),await new Promise(l=>setTimeout(l,1200)))}}async robotPlayCardWithTarget(e){const s=e.effects?.find(l=>(l.targets||[]).some(c=>["选择目标","选择随从","自己"].includes(c)));if(!s)return;const r=(s.targets||[]).find(l=>["选择目标","选择随从","自己"].includes(l)),i=this.state.players[1],n=this.state.players[0];let a=1,o=0;r==="自己"?(a=2,o=0):r==="选择随从"?s.effect==="治愈"||s.effect==="给予印记"||s.effect==="属性变化"&&s.isPositive!==!1||s.effect==="给予词条"?(a=2,o=i.board.length>0?this.robotSelectBuffTarget(s,i.board):0):(a=1,o=n.board.length>0?this.robotSelectDebuffTarget(s,n.board):0):(a=1,n.board.length>0?o=this.robotSelectDebuffTarget(s,n.board)||0:o=0),this.playWoodSound(),this.state=le(this.state,{type:"PLAY_CARD_WITH_TARGET",playerId:2,cardId:e.id,targetPlayerId:a,targetCardId:o})}async robotExecuteMinionEffect(e,s){const r=(s.targets||[]).find(l=>["选择目标","选择随从","自己"].includes(l)),i=this.state.players[1],n=this.state.players[0];let a=1,o=0;r==="自己"?(a=2,o=0):r==="选择随从"?s.effect==="治愈"||s.effect==="给予印记"||s.effect==="属性变化"&&s.isPositive!==!1||s.effect==="给予词条"?(a=2,o=i.board.length>0?this.robotSelectBuffTarget(s,i.board):0):(a=1,o=n.board.length>0?this.robotSelectDebuffTarget(s,n.board):0):(a=1,o=0),this.state=le(this.state,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:2,cardId:e.id,targetPlayerId:a,targetCardId:o}),this.render(),await new Promise(l=>setTimeout(l,1500))}async robotAttackPhase(){let e="TEMPO";const s=this.state.players[1],t=this.state.players[0],r=s.health,i=t.health,n=s.board,a=t.board;n.reduce((m,h)=>m+(h.canAttack&&!h.hasAttacked?h.attack:0),0)>=i?e="AGGRESSIVE":n.length<=a.length+1?e="CONTROL":(r<15||a.reduce((m,h)=>m+h.attack,0)>r/3)&&(e="DEFENSIVE");const l=m=>m.keywords.some(h=>h.name==="先攻")?0:m.attack<=3?1:2;let d=0;const c=20;for(;this.state.currentPlayerId===2&&d<c;){d++;const m=this.state.players[1].board,h=this.state.players[0].board,u=m.filter(y=>y.canAttack&&!y.hasAttacked&&y.attack>0).sort((y,x)=>l(y)-l(x));if(u.length===0||this.state.players[0].health<=0)break;const p=u[0];if(this.state.players[0].health<=0)break;const b=h.filter(y=>y.isDefending||y.keywords.some(x=>x.name==="嘲讽")),g=b.length>0?b:h;if(p.canAttackMinions){if(g.length>0){let y=-999,x=null;for(const w of g){const f=this.robotScoreAttackTarget(p,w,e);f>y&&(y=f,x=w)}if(x&&y>0){if(this.playWoodSound(),this.state=le(this.state,{type:"ATTACK",attackerPlayerId:2,attackerCardId:p.id,targetPlayerId:1,targetCardId:x.id}),this.render(),await new Promise(w=>setTimeout(w,1500)),this.state.players[0].health<=0)break;x&&this.robotThreatScore(x)>=8&&(Math.random()<.6?await this.robotSpeak("taunt",1):await this.robotSpeak("apology",1));continue}}}if(p.canAttackHeroes){if(p.attack<=2&&p.health>=3&&g.length>0&&g.every(y=>this.robotScoreAttackTarget(p,y,e)<=0))continue;if(this.playWoodSound(),this.state=le(this.state,{type:"ATTACK_HERO",attackerPlayerId:2,attackerCardId:p.id,targetPlayerId:1}),this.render(),await new Promise(y=>setTimeout(y,1500)),this.state.players[0].health<=0)break}}}async robotDefensePhase(){const e=this.state.players[1],t=this.state.players[0].board,r=e.health,i=t.length>0?Math.max(...t.map(o=>o.attack)):0,n=t.reduce((o,l)=>o+l.attack,0),a=e.board.filter(o=>!(o.isDefending||o.keywords.some(l=>["连击","狂怒"].includes(l.name))||o.hasAttacked||o.attack<=0));for(const o of a){if(this.state.currentPlayerId!==2)break;const l=o.keywords.some(u=>u.name==="机动"),d=o.keywords.some(u=>u.name==="不动"),c=this.robotValueScore(o);let m=0;if(o.effects&&o.effects.length>0)for(const u of o.effects){const p=this.evaluateConditionLikelihood([u],this.state);if(p>.5){const b=(u.value||0)+(u.attackValue||0)*2+(u.healthValue||0)*1.5;m+=Math.min(b,12)*p}}let h=!1;m>=6&&(h=!0),o.health>=o.attack*3+2&&o.health>=5||l?h=!0:d||(r<15&&c>=5||o.attack>=4&&o.health>=3||t.length>=3&&n>=8&&c>=4||o.health<=i&&c>=4||r<=10&&o.health>=3||t.filter(u=>u.attack>0).length>=2&&c>=5)&&(h=!0),h&&(this.state=le(this.state,{type:"TOGGLE_DEFENSE",playerId:2,cardId:o.id}),this.render(),await new Promise(u=>setTimeout(u,800)))}if(t.length<=1&&n<=3&&r>20)for(const o of e.board.filter(l=>l.isDefending)){if(this.state.currentPlayerId!==2)break;this.state=le(this.state,{type:"TOGGLE_DEFENSE",playerId:2,cardId:o.id}),this.render(),await new Promise(l=>setTimeout(l,600))}}async renderRobotGameOver(){const e=this.state.winner;if(!e){this.state=le(this.state,{type:"BACK_TO_MENU"}),this.render();return}const s=e===1?1:0,t=this.state.players[s];this.state.players[e-1];const r=e===1,i=`
      <div id="game-over-overlay" class="fixed inset-0 flex flex-col items-center justify-center" style="background: #000;">
        <div id="thumbs-down-layer" style="position: absolute; inset: 0; pointer-events: none; overflow: hidden;"></div>
        <div class="text-center" style="position: relative; z-index: 2;">
          <h1 class="text-8xl font-bold mb-8" style="color: ${r?"#00ff00":"#ff0000"}; font-family: 'Georgia', serif; text-shadow: 0 0 20px rgba(${r?"0, 255, 0":"255, 0, 0"}, 0.5);">
            ${r?"Victory!":"Defeat!"}
          </h1>
          <p class="text-4xl font-bold mb-4" style="color: #fff; font-family: 'Georgia', serif;">
            ${r?"你击败了 Robot!":"Robot 击败了你!"}
          </p>
          <p class="text-2xl mb-12" style="color: #aaa;">
            ${t.name} 被击败了
          </p>
          <p class="text-sm mt-12" style="color: #666; cursor: default;">- 点击屏幕返回主菜单 -</p>
        </div>
      </div>
    `;await this.applyGrayscaleTransition(i);const n=document.getElementById("game-over-overlay");n&&n.addEventListener("click",()=>{this.stopThumbsDownEmojis(),this.state=le(this.state,{type:"BACK_TO_MENU"}),this.render()}),this.spawnThumbsDownEmojis()}spawnThumbsDownEmojis(){if(!this.thumbsDownAnimCssInjected){const s=document.createElement("style");s.textContent=`
        @keyframes thumbsDownAnim {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(var(--start-s)); }
          25% { opacity: 1; transform: translate(-50%, -50%) scale(var(--end-s)); }
          60% { opacity: 1; transform: translate(-50%, -50%) scale(var(--end-s)); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.05); }
        }
      `,document.head.appendChild(s),this.thumbsDownAnimCssInjected=!0}this.thumbsDownIntervalId!==null&&clearInterval(this.thumbsDownIntervalId);const e=150+Math.random()*100;this.thumbsDownIntervalId=window.setInterval(()=>{const s=document.createElement("div");s.textContent="👎";const t=36+Math.random()*44,r=.25+Math.random()*.3,i=1+Math.random()*.6,n=2e3+Math.random()*600;s.style.cssText=`
        position: fixed;
        left: ${5+Math.random()*90}%;
        top: ${5+Math.random()*90}%;
        font-size: ${t}px;
        line-height: 1;
        pointer-events: none;
        --start-s: ${r};
        --end-s: ${i};
        animation: thumbsDownAnim ${n}ms ease-in-out 0ms forwards;
      `;const a=document.getElementById("thumbs-down-layer");a?a.appendChild(s):document.body.appendChild(s),setTimeout(()=>s.remove(),n+50)},e)}stopThumbsDownEmojis(){this.thumbsDownIntervalId!==null&&(clearInterval(this.thumbsDownIntervalId),this.thumbsDownIntervalId=null)}applyGrayscaleTransition(e){return new Promise(s=>{const t=document.body.style.overflow,r=document.documentElement.style.overflow;document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",this.switchBGM("/sounds/boooh.mp3");const i=document.createElement("div");i.style.cssText=`
        position: fixed; inset: 0; z-index: 9997;
        pointer-events: none;
        background: transparent;
        backdrop-filter: grayscale(0) brightness(1);
        -webkit-backdrop-filter: grayscale(0) brightness(1);
        transition: none;
      `,document.body.appendChild(i),requestAnimationFrame(()=>{i.style.transition="backdrop-filter 3s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 3s cubic-bezier(0.4, 0, 0.2, 1)",i.style.backdropFilter="grayscale(1) brightness(1)",i.style.webkitBackdropFilter="grayscale(1) brightness(1)"});let n=null;setTimeout(()=>{const a=document.createElement("div");a.innerHTML=e,n=a.firstElementChild,n&&(n.style.opacity="0",n.style.transition="opacity 3s cubic-bezier(0.4, 0, 0.2, 1)",n.style.zIndex="9999",document.body.appendChild(n),n.offsetHeight,n.style.opacity="1")},2e3),setTimeout(()=>{i.remove(),n&&(this.app.innerHTML="",this.app.appendChild(n)),document.body.style.overflow=t,document.documentElement.style.overflow=r,s()},5e3)})}screenShake(e){return new Promise(s=>{s()})}attackAnimation(e,s,t,r=!1){return new Promise(i=>{this.state.phase;const n=r?`.top-board [data-minion-id="${e}"]`:`.bottom-board [data-minion-id="${e}"]`;console.log("attackAnimation - 攻击者ID:",e,"isOpponent:",r,"选择器:",n);const a=document.querySelector(n);if(!a){console.log("attackAnimation - 找不到攻击者元素:",e,"isOpponent:",r);const l=document.querySelectorAll(".minion-card");console.log("当前所有随从:",Array.from(l).map(d=>({id:d.dataset.minionId,classList:d.className}))),i();return}const o=r?80:s?-100:-80;console.log("attackAnimation - 找到攻击者，执行动画，移动:",o),a.style.transition="transform 0.15s ease-out",a.style.transform=`translateY(${o}px) scale(1.1)`,a.style.zIndex="100",setTimeout(()=>{a.style.transition="transform 0.15s ease-in",a.style.transform="",setTimeout(()=>{a.style.zIndex="",this.screenShake(t).then(i)},150)},150)})}async tryPlayCard(e){if(this.state.players[this.state.currentPlayerId-1].energy<e.cost)return;const r=(e.effects||(e.effect?[e.effect]:[])).filter(i=>this.momentsInclude(i.moment,"打出时"));for(const i of r){if(!i.effect)continue;const n=i.targets||[];if(console.log("[tryPlayCard] 检查卡牌:",e.name,"effect:",i.effect,"targets:",n,"type:",e.type),n.includes("选择目标")||n.includes("选择随从")){if(console.log("[tryPlayCard] 需要选择目标，card.type:",e.type),e.type==="spell"){console.log("[tryPlayCard] 法术卡进入目标选择模式"),this.selectingTargetForCard=e,this.selectingTargetEffect=i,this.selectingTargetMinionId=null,this.targetArrowColor="#9b59b6",this.selectedHandCard=null,this.render(),setTimeout(()=>{const l=document.querySelector(".bottom-player-area [data-player-hp]");if(console.log("[tryPlayCard] 寻找英雄元素:",l),l){const d=l.getBoundingClientRect();this.targetArrowStartX=d.left+d.width/2,this.targetArrowStartY=d.top+d.height/2,console.log("[tryPlayCard] 英雄位置:",this.targetArrowStartX,this.targetArrowStartY)}else this.targetArrowStartX=window.innerWidth/2,this.targetArrowStartY=window.innerHeight-100,console.log("[tryPlayCard] 使用备用位置:",this.targetArrowStartX,this.targetArrowStartY);this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,"purple")},50);return}this.playWoodSound(),this.state=le(this.state,{type:"PLAY_CARD",playerId:this.state.currentPlayerId,cardId:e.id});const a=this.state.players[this.state.currentPlayerId-1].board,o=a[a.length-1];this.selectingTargetForCard=e,this.selectingTargetEffect=i,this.selectingTargetMinionId=o?o.id:null,this.targetArrowColor="#4a90d9",this.selectedHandCard=null,this.render(),setTimeout(()=>{if(this.selectingTargetMinionId){const l=document.querySelector(`[data-minion-id="${this.selectingTargetMinionId}"]`);if(l){const d=l.getBoundingClientRect();this.targetArrowStartX=d.left+d.width/2,this.targetArrowStartY=d.top+d.height/2,this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,"blue")}}},50);return}}this.playCardDirectly(e)}async playCardDirectly(e){e.type==="minion"&&this.playWoodSound();const t=(e.effects||(e.effect?[e.effect]:[])).filter(r=>r.moment==="打出时"&&r.effect==="抽牌"&&(r.targets||[]).includes("无需目标"));if(this.state=le(this.state,{type:"PLAY_CARD",playerId:this.state.currentPlayerId,cardId:e.id}),this.selectedHandCard=null,this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.render(),this.state.phase==="onlineBattle"){const r=this.state.online.currentRoom;if(r){const{broadcastGameAction:i}=await fe(async()=>{const{broadcastGameAction:n}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:n}},__vite__mapDeps([0,1]));i(r.id,{type:"PLAY_CARD",playerId:this.state.online.playerId,cardId:e.id}).catch(console.error),await this.broadcastGameState()}}t.length>0&&t.reduce((i,n)=>i+(n.value||1),0)>0&&setTimeout(()=>this.playDrawCardAnimation(),100)}async executeCardWithTarget(e,s,t,r){if(console.log("[executeCardWithTarget] 开始执行:",e.name,"effect:",s,"targetPlayerId:",t,"targetMinionId:",r),this.hideTargetArrow(),this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null,e.type==="spell"?this.state=le(this.state,{type:"PLAY_CARD_WITH_TARGET",playerId:this.state.currentPlayerId,cardId:e.id,targetPlayerId:t,targetCardId:r}):this.state=le(this.state,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:this.state.currentPlayerId,cardId:e.id,targetPlayerId:t,targetCardId:r}),this.render(),this.state.phase==="onlineBattle"){const n=this.state.online.currentRoom;if(n){const{broadcastGameAction:a}=await fe(async()=>{const{broadcastGameAction:o}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:o}},__vite__mapDeps([0,1]));a(n.id,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:this.state.online.playerId,cardId:e.id,targetPlayerId:t,targetCardId:r}).catch(console.error),await this.broadcastGameState()}}}async executeCardEffectOnHero(e,s,t){if(console.log("[executeCardEffectOnHero] 开始执行:",e.name,"effect:",s,"targetPlayerId:",t),this.hideTargetArrow(),this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null,e.type==="spell"?this.state=le(this.state,{type:"PLAY_CARD_WITH_TARGET",playerId:this.state.currentPlayerId,cardId:e.id,targetPlayerId:t}):this.state=le(this.state,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:this.state.currentPlayerId,cardId:e.id,targetPlayerId:t}),this.render(),this.state.phase==="onlineBattle"){const i=this.state.online.currentRoom;if(i){const{broadcastGameAction:n}=await fe(async()=>{const{broadcastGameAction:a}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:a}},__vite__mapDeps([0,1]));n(i.id,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:this.state.online.playerId,cardId:e.id,targetPlayerId:t}).catch(console.error),await this.broadcastGameState()}}}async executeHeroSkillWithTarget(e,s,t){this.hideTargetArrow(),this.selectingTargetForSkill=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null;const r=this.state.currentPlayerId;if(this.state=le(this.state,{type:"PLAY_HERO_SKILL",playerId:r,skillIndex:e,targetPlayerId:s,targetCardId:t}),this.render(),this.state.phase==="onlineBattle"){const n=this.state.online.currentRoom;if(n){const{broadcastGameAction:a}=await fe(async()=>{const{broadcastGameAction:o}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:o}},__vite__mapDeps([0,1]));a(n.id,{type:"HERO_SKILL",playerId:this.state.online.playerId,skillIndex:e,targetPlayerId:s,targetCardId:t}).catch(console.error),await this.broadcastGameState()}}}async executeHeroSkillOnHero(e,s){this.hideTargetArrow(),this.selectingTargetForSkill=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null;const t=this.state.currentPlayerId;if(this.state=le(this.state,{type:"PLAY_HERO_SKILL",playerId:t,skillIndex:e,targetPlayerId:s}),this.render(),this.state.phase==="onlineBattle"){const i=this.state.online.currentRoom;if(i){const{broadcastGameAction:n}=await fe(async()=>{const{broadcastGameAction:a}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:a}},__vite__mapDeps([0,1]));n(i.id,{type:"HERO_SKILL",playerId:this.state.online.playerId,skillIndex:e,targetPlayerId:s}).catch(console.error),await this.broadcastGameState()}}}async allAttackHero(){if(this.isAttacking)return;this.isAttacking=!0;const e=this.state.players[this.state.currentPlayerId-1],s=this.state.currentPlayerId===1?2:1,r=this.state.players[s-1].board.some(n=>n.isDefending||n.keywords.some(a=>a.name==="嘲讽")),i=e.board.filter(n=>{if(!n.canAttack||!n.canAttackHeroes||n.attack<=0||n.isDefending)return!1;const a=n.maxAttacksPerTurn||1;return!((n.attacksThisTurn||0)>=a)});if(i.length===0||r){this.isAttacking=!1;return}for(const n of i){const o=(n.maxAttacksPerTurn||1)-(n.attacksThisTurn||0);for(let l=0;l<o;l++){const d=this.state.players[this.state.currentPlayerId-1].board.find(c=>c.id===n.id);if(!d||!d.canAttack||d.attack<=0)break;if(this.playWoodSound(),this.savePotentialDeathMinions(n.id),await this.attackAnimation(n.id,!0,d.attack),this.state=le(this.state,{type:"ATTACK_HERO",attackerPlayerId:this.state.currentPlayerId,attackerCardId:n.id,targetPlayerId:s}),this.render(),this.state.phase==="gameOver"){this.isAttacking=!1;return}await new Promise(c=>setTimeout(c,200))}}if(this.isAttacking=!1,this.state.phase==="onlineBattle"){const n=this.state.online.currentRoom;if(n){const{broadcastGameAction:a}=await fe(async()=>{const{broadcastGameAction:l}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:l}},__vite__mapDeps([0,1])),o=this.state.currentPlayerId===1?2:1;for(const l of this.state.players[this.state.currentPlayerId-1].board)l.canAttack&&a(n.id,{type:"ATTACK_HERO",attackerPlayerId:this.state.online.playerId,attackerCardId:l.id,targetPlayerId:o}).catch(console.error);await this.broadcastGameState()}}}attachEventListeners(){const e=this.state.phase==="onlineBattle";document.getElementById("game-container")?.addEventListener("click",o=>{const l=o.target;!l.closest(".hero-skill-icon-wrapper")&&!l.closest(".minion-card")&&!l.closest('[data-own-hero="true"]')&&(this.hideFixedTooltip(),this.selectedAttackingMinion&&(this.selectedAttackingMinion=null,this.hideDefenseOverlayDOM(),this.syncSelectionToDOM()),!l.closest("[data-speech-type]")&&!l.closest("#speech-menu-container")&&this.hideSpeechMenu())}),document.getElementById("game-menu-btn")?.addEventListener("click",()=>{this.showGameMenu=!0,this.render()}),document.getElementById("continue-game-btn")?.addEventListener("click",()=>{this.showGameMenu=!1,this.render()}),document.getElementById("save-exit-btn")?.addEventListener("click",()=>{this.savedGameState={...this.state,newlyDrawnCardIds:[]},this.showGameMenu=!1,this.state=le(this.state,{type:"BACK_TO_MENU"}),this.render()}),e||document.getElementById("surrender-btn")?.addEventListener("click",()=>{this.showGameMenu=!1;const o=this.state.currentPlayerId===1?2:1;this.state={...this.state,phase:"gameOver",winner:o},this.render()}),document.getElementById("game-menu-overlay")?.addEventListener("click",o=>{o.target.id==="game-menu-overlay"&&(this.showGameMenu=!1,this.render())}),document.getElementById("discard-pile-btn")?.addEventListener("click",o=>{const l=parseInt(o.currentTarget.getAttribute("data-player-id")||"0");l>0&&(this.showDiscardPileViewer=!0,this.viewingDiscardPilePlayerId=l,this.render())}),document.getElementById("discard-pile-viewer-close")?.addEventListener("click",()=>{this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.render()}),document.getElementById("discard-pile-viewer-overlay")?.addEventListener("click",o=>{o.target.id==="discard-pile-viewer-overlay"&&(this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.render())});const s=this.state.phase==="robotBattle",t=s&&this.state.currentPlayerId===2;document.getElementById("end-turn-btn")?.addEventListener("click",()=>{s?this.state=le(this.state,{type:"END_ROBOT_TURN"}):this.state=le(this.state,{type:"END_TURN"}),this.selectedMinion=null,this.render()}),document.getElementById("my-turn-btn")?.addEventListener("click",()=>{this.state=le(this.state,{type:"START_MY_TURN"}),this.selectedMinion=null,this.render(),setTimeout(()=>this.playDrawCardAnimation(),100)}),document.getElementById("all-attack-btn")?.addEventListener("click",()=>{this.allAttackHero()}),t||(this.setupHandDrag(),this.setupMinionAttack(),document.querySelectorAll(".hero-skill-icon-btn").forEach(o=>{o.addEventListener("click",async l=>{const d=l.currentTarget,c=parseInt(d.dataset.playerId),m=parseInt(d.dataset.skillIndex);if(this.state.currentPlayerId!==c)return;const h=this.state.players[c-1],u=h.heroCard;if(!u||!u.skills)return;const p=u.skills[m];if(!p||p.type==="passive")return;const b=p.cost??0;if(h.energy<b)return;const y=(p.effects||(p.effect?[p.effect]:[])).filter(w=>w.moment==="打出时"||w.moment===null);if(y.some(w=>{const f=w.targets||[];return f.includes("选择目标")||f.includes("选择随从")})){if(this.selectingTargetForSkill&&this.selectingTargetForSkill.skillIndex===m&&this.selectingTargetForSkill.playerId===c){this.selectingTargetForSkill=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null,this.hideTargetArrow(),this.render();return}this.selectingTargetForSkill={skillIndex:m,playerId:c};const w=y.find(f=>{const v=f.targets||[];return v.includes("选择目标")||v.includes("选择随从")});this.selectingTargetEffect=w||null,this.selectingTargetMinionId=null,this.targetArrowColor="#a855f7",this.selectedHandCard=null,this.render(),setTimeout(()=>{const f=document.querySelector(`.hero-skill-icon-btn[data-skill-index="${m}"][data-player-id="${c}"]`);if(f){const v=f.getBoundingClientRect();this.targetArrowStartX=v.left+v.width/2,this.targetArrowStartY=v.top+v.height/2,this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,this.targetArrowColor)}},50);return}if(this.state=le(this.state,{type:"PLAY_HERO_SKILL",playerId:c,skillIndex:m}),e){const w=this.state.online.currentRoom;if(w){const{broadcastGameAction:f}=await fe(async()=>{const{broadcastGameAction:v}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:v}},__vite__mapDeps([0,1]));f(w.id,{type:"HERO_SKILL",playerId:this.state.online.playerId,skillIndex:m}).catch(console.error),await this.broadcastGameState()}}this.render()})})),document.querySelectorAll(".hero-skill-icon-wrapper").forEach(o=>{o.addEventListener("mouseenter",l=>{const d=l.currentTarget,c=parseInt(d.dataset.playerId),m=parseInt(d.dataset.skillIndex),h=d.dataset.isOpponent==="true",p=this.state.players.find(S=>S.id===c)?.heroCard?.skills?.[m];if(!p)return;const b=p.type==="passive",g=p.remainingCooldown??0,y=Math.floor(g/2),x=!b&&y>0?`<div style="font-size:11px; color:#ffcccc; margin-top:4px; text-shadow:0 0 4px rgba(0,0,0,0.8);">冷却中：剩余 ${y} 回合</div>`:"",w=p.usesLeft??(p.limited?p.maxUses:void 0),f=!b&&p.limited?`<div style="font-size:11px; color:${w===0?"#ff9999":"#ffffcc"}; margin-top:4px; text-shadow:0 0 4px rgba(0,0,0,0.8);">${w===0?"次数已用尽":`剩余次数：${w}`}</div>`:"",E=`
          <div>
            ${b?'<span style="display:inline-block; background:rgba(192,160,128,0.6); color:#fff; padding:1px 6px; border-radius:4px; font-size:11px; margin-bottom:4px;">被动技能</span>':""}
            <div style="font-weight:bold; font-size:14px; margin-bottom:4px; color:#fff; text-shadow:0 0 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6);">${p.name}</div>
            <div style="font-size:12px; color:#fff; text-shadow:0 0 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6); white-space:pre-line;">${this.getHeroSkillDescription(p)}</div>
            ${x}
            ${f}
          </div>
        `;this.showFixedTooltip(d,E,h?"bottom":"top")}),o.addEventListener("mouseleave",()=>this.hideFixedTooltip())}),document.querySelectorAll('.minion-card[data-has-effects="true"]').forEach(o=>{o.addEventListener("mouseenter",l=>{const d=l.currentTarget,c=parseInt(d.dataset.playerId),m=parseInt(d.dataset.minionId),u=this.state.players.find(b=>b.id===c)?.board.find(b=>b.id===m);if(!u||!u.effects?.length)return;const p=`
          <div>
            <div style="font-weight:bold; font-size:14px; margin-bottom:4px; color:#fff; text-shadow:0 0 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6);">${u.name}</div>
            <div style="font-size:12px; color:#fff; text-shadow:0 0 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6); white-space:pre-line;">${this.getMinionSkillDescription(u)}</div>
          </div>
        `;this.showFixedTooltip(d,p,"bottom")}),o.addEventListener("mouseleave",()=>this.hideFixedTooltip())});const r=document.getElementById("play-area");if(r&&r.addEventListener("click",o=>{if(this.selectingTargetForCard&&!o.target.closest(".minion-card")){this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.render();return}if(this.selectingTargetForSkill&&!o.target.closest(".minion-card")){this.selectingTargetForSkill=null,this.selectingTargetEffect=null,this.hideTargetArrow(),this.render();return}this.selectedHandCard&&!o.target.closest(".minion-card")&&this.tryPlayCard(this.selectedHandCard)}),this.selectingTargetForCard&&this.selectingTargetEffect){document.querySelectorAll(".top-board .minion-card").forEach(l=>{l.addEventListener("click",d=>{if(d.stopPropagation(),!this.selectingTargetForCard||!this.selectingTargetEffect)return;const c=parseInt(l.dataset.minionId),m=parseInt(l.dataset.playerId);this.executeCardWithTarget(this.selectingTargetForCard,this.selectingTargetEffect,m,c)})}),document.querySelectorAll(".bottom-board .minion-card").forEach(l=>{l.addEventListener("click",d=>{if(d.stopPropagation(),!this.selectingTargetForCard||!this.selectingTargetEffect)return;const c=parseInt(l.dataset.minionId),m=parseInt(l.dataset.playerId);this.executeCardWithTarget(this.selectingTargetForCard,this.selectingTargetEffect,m,c)})});const o=document.querySelector(".top-player-area");o&&o.addEventListener("click",l=>{if(!l.target.closest(".minion-card")){const d=this.selectingTargetEffect?.targets||[];if(this.selectingTargetEffect&&d.includes("选择目标")&&!d.includes("选择随从")){const c=this.state.currentPlayerId===1?2:1;this.executeCardEffectOnHero(this.selectingTargetForCard,this.selectingTargetEffect,c)}}})}if(this.selectingTargetForSkill&&this.selectingTargetEffect){const o=this.selectingTargetForSkill.skillIndex;document.querySelectorAll(".top-board .minion-card").forEach(d=>{d.addEventListener("click",c=>{if(c.stopPropagation(),!this.selectingTargetForSkill||!this.selectingTargetEffect)return;const m=parseInt(d.dataset.minionId),h=parseInt(d.dataset.playerId);this.executeHeroSkillWithTarget(o,h,m)})}),document.querySelectorAll(".bottom-board .minion-card").forEach(d=>{d.addEventListener("click",c=>{if(c.stopPropagation(),!this.selectingTargetForSkill||!this.selectingTargetEffect)return;const m=parseInt(d.dataset.minionId),h=parseInt(d.dataset.playerId);this.executeHeroSkillWithTarget(o,h,m)})});const l=document.querySelector(".top-player-area");l&&l.addEventListener("click",d=>{if(!d.target.closest(".minion-card")){const c=this.selectingTargetEffect?.targets||[];if(this.selectingTargetEffect&&c.includes("选择目标")&&!c.includes("选择随从")){const m=this.state.currentPlayerId===1?2:1;this.executeHeroSkillOnHero(o,m)}}})}const i=document.querySelector(".bottom-player-area");i&&i.addEventListener("click",()=>{this.selectingTargetEffect?.effect==="治愈"&&this.selectingTargetForCard&&this.selectingTargetEffect&&this.executeCardEffectOnHero(this.selectingTargetForCard,this.selectingTargetEffect,this.state.currentPlayerId),this.selectingTargetEffect?.effect==="治愈"&&this.selectingTargetForSkill&&this.selectingTargetEffect&&this.executeHeroSkillOnHero(this.selectingTargetForSkill.skillIndex,this.state.currentPlayerId)}),document.querySelectorAll(".top-board .minion-card").forEach(o=>{o.addEventListener("click",async l=>{if(this.selectedAttackingMinion&&!this.isAttacking){l.stopPropagation(),this.isAttacking=!0;const d=parseInt(o.dataset.minionId),c=parseInt(o.dataset.playerId),m=this.selectedAttackingMinion;this.selectedAttackingMinion=null;const h=this.state.phase==="onlineBattle",u=h?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;console.log("攻击随从 - 联机模式:",h,"视角索引:",this.onlineViewPlayerIndex,"攻击者ID:",u,"目标玩家ID:",c,"目标随从ID:",d),this.savePotentialDeathMinions(m.id,d);const p=this.state.players.find(y=>y.id===u)?.board.find(y=>y.id===m.id),b=p?this.findAttackBonusForMinion(p):0,g=b>0?p.attack:0;if(b>0&&(p.attack+=b),this.playWoodSound(),await this.attackAnimation(m.id,!1,p?p.attack:m.attack),this.state=le(this.state,{type:"ATTACK",attackerPlayerId:u,attackerCardId:m.id,targetPlayerId:c,targetCardId:d}),b>0){const y=this.state.players.find(x=>x.id===u)?.board.find(x=>x.id===m.id);y?y.attack-=b:p&&(p.attack=g)}h&&await this.broadcastGameState(),this.isAttacking=!1,this.state.newlyDrawnCardIds.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(),50)):this.render()}})});const n=document.querySelector(".top-player-area");n&&n.addEventListener("click",async o=>{if(this.selectedAttackingMinion&&!o.target.closest(".minion-card")&&!this.isAttacking){this.isAttacking=!0;const l=this.state.phase==="onlineBattle",d=l?this.onlineViewPlayerIndex===0?2:1:this.state.currentPlayerId===1?2:1,c=this.selectedAttackingMinion;this.selectedAttackingMinion=null;const m=l?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;console.log("攻击英雄 - 联机模式:",l,"视角索引:",this.onlineViewPlayerIndex,"攻击者ID:",m,"目标玩家ID:",d),this.savePotentialDeathMinions(c.id),this.playWoodSound(),await this.attackAnimation(c.id,!0,c.attack),this.state=le(this.state,{type:"ATTACK_HERO",attackerPlayerId:m,attackerCardId:c.id,targetPlayerId:d}),l&&await this.broadcastGameState(),this.isAttacking=!1,this.render()}});const a=document.querySelector('.bottom-player-area [data-own-hero="true"]');if(a&&a.addEventListener("click",o=>{if(!o.target.closest("[data-speech-type]")){if(this.selectedAttackingMinion&&!o.target.closest(".minion-card")&&!this.isAttacking&&!this.state.waitingForNextPlayer){const l=this.selectedAttackingMinion,d=this.state.phase==="onlineBattle",c=d?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,h=this.state.players[c].board.find(v=>v.id===l.id);if(!h)return;const u=h.keywords.some(v=>v.name==="连击"),p=h.keywords.some(v=>v.name==="狂怒"),b=h.keywords.some(v=>v.name==="嘲讽"),g=h.keywords.some(v=>v.name==="机动"),y=h.keywords.some(v=>v.name==="不动"),x=h.maxAttacksPerTurn||1,w=(h.attacksThisTurn||0)>=x;if(h.isDefending){o.stopPropagation(),this.selectedAttackingMinion=null;const v=d?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=le(this.state,{type:"TOGGLE_DEFENSE",playerId:v,cardId:l.id}),this.render(),d){const E=this.state.online.currentRoom;E&&(fe(async()=>{const{broadcastGameAction:S}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:S}},__vite__mapDeps([0,1])).then(({broadcastGameAction:S})=>{S(E.id,{type:"STATE_SYNC",playerId:v}).catch(console.error)}),this.broadcastGameState())}return}if(!y&&!u&&!p&&!b&&(!h.hasAttacked||g)&&!w){o.stopPropagation(),this.selectedAttackingMinion=null;const v=d?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=le(this.state,{type:"TOGGLE_DEFENSE",playerId:v,cardId:l.id}),this.render(),d){const E=this.state.online.currentRoom;E&&(fe(async()=>{const{broadcastGameAction:S}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:S}},__vite__mapDeps([0,1])).then(({broadcastGameAction:S})=>{S(E.id,{type:"STATE_SYNC",playerId:v}).catch(console.error)}),this.broadcastGameState())}}}else if(!this.selectedAttackingMinion&&!this.isAttacking&&!this.state.waitingForNextPlayer){o.stopPropagation();const l=document.getElementById("speech-menu-container");l&&(l.style.display==="none"||!l.style.display?(l.setAttribute("data-cooldown",this.speechCooldown?"true":"false"),l.style.display="block",l.style.animation="none",l.offsetHeight,l.style.animation="speechMenuFadeIn 0.25s ease-out",this.showSpeechMenu=!0,this.clearSpeechMenuTimer(),this.speechMenuTimer=setTimeout(()=>{this.hideSpeechMenu()},5e3)):this.hideSpeechMenu())}}}),document.addEventListener("click",o=>{const l=o.target.closest("[data-speech-type]");if(l){const d=l.dataset.speechType;this.triggerSpeech(d)}}),this.attackingMinion&&!this.isAttacking){document.querySelectorAll(".top-board .minion-card").forEach(l=>{l.addEventListener("mouseup",async d=>{if(this.attackingMinion&&!this.isAttacking){d.stopPropagation(),this.isAttacking=!0;const c=parseInt(d.currentTarget.dataset.minionId),m=parseInt(d.currentTarget.dataset.playerId);this.hideAttackArrow();const u=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;this.savePotentialDeathMinions(this.attackingMinion.id,c);const p=this.state.players.find(x=>x.id===u)?.board.find(x=>x.id===this.attackingMinion?.id),b=p?this.findAttackBonusForMinion(p):0,g=b>0?p.attack:0;if(b>0&&(p.attack+=b),this.playWoodSound(),await this.attackAnimation(this.attackingMinion.id,!1,p?p.attack:this.attackingMinion.attack),this.state=le(this.state,{type:"ATTACK",attackerPlayerId:u,attackerCardId:this.attackingMinion.id,targetPlayerId:m,targetCardId:c}),b>0){const x=this.state.players.find(w=>w.id===u)?.board.find(w=>w.id===this.attackingMinion?.id);x?x.attack-=b:p&&(p.attack=g)}const y=this.attackingMinion.id;if(this.attackingMinion=null,this.hideDefenseOverlayDOM(),this.isAttacking=!1,this.state.newlyDrawnCardIds.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(),50)):this.render(),this.state.phase==="onlineBattle"){const x=this.state.online.currentRoom;if(x){const{broadcastGameAction:w}=await fe(async()=>{const{broadcastGameAction:f}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:f}},__vite__mapDeps([0,1]));w(x.id,{type:"ATTACK_MINION",attackerPlayerId:this.state.online.playerId,attackerCardId:y,targetPlayerId:m,targetCardId:c}).catch(console.error),await this.broadcastGameState()}}}})});const o=document.querySelector(".top-player-area");o&&o.addEventListener("mouseup",async l=>{if(this.attackingMinion&&!l.target.closest(".minion-card")&&!this.isAttacking){this.isAttacking=!0;const d=this.state.phase==="onlineBattle",c=d?this.onlineViewPlayerIndex===0?2:1:this.state.currentPlayerId===1?2:1,m=d?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;this.hideAttackArrow(),this.savePotentialDeathMinions(this.attackingMinion.id);const h=this.findAttackBonusForMinion(this.attackingMinion),u=h>0?this.attackingMinion.attack:0;h>0&&(this.attackingMinion.attack+=h),this.playWoodSound(),await this.attackAnimation(this.attackingMinion.id,!0,this.attackingMinion.attack),this.state=le(this.state,{type:"ATTACK_HERO",attackerPlayerId:m,attackerCardId:this.attackingMinion.id,targetPlayerId:c}),h>0&&(this.attackingMinion.attack-=h,this.attackingMinion&&this.attackingMinion.attack<u&&(this.attackingMinion.attack=u));const p=this.attackingMinion.id;if(this.attackingMinion=null,this.isAttacking=!1,this.render(),this.state.phase==="onlineBattle"){const b=this.state.online.currentRoom;if(b){const{broadcastGameAction:g}=await fe(async()=>{const{broadcastGameAction:y}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:y}},__vite__mapDeps([0,1]));g(b.id,{type:"ATTACK_HERO",attackerPlayerId:this.state.online.playerId,attackerCardId:p,targetPlayerId:c}).catch(console.error),await this.broadcastGameState()}}}})}}setupMinionAttack(){const e=document.querySelectorAll(".bottom-board .minion-card");console.log("setupMinionAttack - 底部随从数量:",e.length,"视角索引:",this.onlineViewPlayerIndex,"游戏阶段:",this.state.phase),e.forEach(s=>{const t=parseInt(s.dataset.minionId),r=i=>{if(i.keywords.some(u=>u.name==="不动"))return!1;const n=i.keywords.some(u=>u.name==="连击"),a=i.keywords.some(u=>u.name==="狂怒"),o=i.keywords.some(u=>u.name==="嘲讽"),l=i.keywords.some(u=>u.name==="机动"),d=i.maxAttacksPerTurn||1,c=(i.attacksThisTurn||0)>=d,m=!i.hasAttacked&&!c&&(!i.isDefending||i.isDefending&&l),h=!i.isDefending&&!n&&!a&&!o&&(!i.hasAttacked||l)&&!c;return m||h};s.addEventListener("click",i=>{if(this.state.waitingForNextPlayer||this.isAttacking)return;const n=this.state.phase==="onlineBattle",a=n?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,l=this.state.players[a].board.find(d=>d.id===t);if(console.log("点击随从 - 联机模式:",n,"玩家索引:",a,"随从ID:",t,"随从数据:",l?"找到":"未找到"),l&&l.isDefending){i.stopPropagation();const d=n?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=le(this.state,{type:"TOGGLE_DEFENSE",playerId:d,cardId:l.id}),this.render(),n){const c=this.state.online.currentRoom;c&&(fe(async()=>{const{broadcastGameAction:m}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:m}},__vite__mapDeps([0,1])).then(({broadcastGameAction:m})=>{m(c.id,{type:"STATE_SYNC",playerId:d}).catch(console.error)}),this.broadcastGameState())}return}if(l&&r(l)){if(this.selectedAttackingMinion?.id===t){this.selectedAttackingMinion=null,this.syncSelectionToDOM();return}this.selectedAttackingMinion=l,this.selectedHandCard=null,this.syncSelectionToDOM()}}),s.addEventListener("mousedown",i=>{const n=i;if(this.state.waitingForNextPlayer||this.isAttacking)return;const o=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,d=this.state.players[o].board.find(c=>c.id===t);if(d&&(r(d)||d.isDefending)){i.preventDefault(),this.attackingMinion=d,this.updateDefenseOverlayDOM(d);const c=s.getBoundingClientRect();this.attackArrowStartX=c.left+c.width/2,this.attackArrowStartY=c.top+c.height/2,this.showAttackArrow(this.attackArrowStartX,this.attackArrowStartY,n.clientX,n.clientY)}})})}showAttackArrow(e,s,t,r){const i=document.getElementById("attack-arrow"),n=document.getElementById("arrow-line");i&&n&&(i.style.display="block",n.setAttribute("x1",String(e)),n.setAttribute("y1",String(s)),n.setAttribute("x2",String(t)),n.setAttribute("y2",String(r)))}hideAttackArrow(){const e=document.getElementById("attack-arrow");e&&(e.style.display="none")}updateAttackArrow(e,s){const t=document.getElementById("arrow-line");t&&(t.setAttribute("x2",String(e)),t.setAttribute("y2",String(s)))}showTargetArrow(e,s,t,r,i){const n=document.getElementById("target-arrow"),a=document.getElementById("target-arrow-line"),o=document.getElementById("target-arrowhead"),d=i||this.targetArrowColor;if(n&&a&&o){n.style.display="block",a.setAttribute("x1",String(e)),a.setAttribute("y1",String(s)),a.setAttribute("x2",String(t)),a.setAttribute("y2",String(r)),a.setAttribute("stroke",d);const c=o.querySelector("polygon");c&&c.setAttribute("fill",d)}}hideTargetArrow(){const e=document.getElementById("target-arrow");e&&(e.style.display="none")}updateTargetArrow(e,s){const t=document.getElementById("target-arrow-line");t&&(t.setAttribute("x2",String(e)),t.setAttribute("y2",String(s)))}setupHandDrag(){this.globalListenersAttached||(document.addEventListener("mousemove",this.boundMouseMove),document.addEventListener("mouseup",this.boundMouseUp),this.globalListenersAttached=!0);const e=document.querySelectorAll(".hand-card-wrapper"),s=document.getElementById("drag-card");e.forEach(t=>{t.addEventListener("mouseenter",()=>{t.classList.add("hovered")}),t.addEventListener("mouseleave",()=>{t.classList.remove("hovered")}),t.addEventListener("click",r=>{if(this.state.waitingForNextPlayer||this.isAttacking)return;let i;if(this._pendingClickCardId!==void 0?(i=this._pendingClickCardId,this._pendingClickCardId=void 0):i=parseInt(t.dataset.cardId),isNaN(i))return;const a=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,o=this.state.players[a],l=o.hand.find(d=>d.id===i);if(l){if(this.selectedHandCard?.id===l.id){this.selectedHandCard=null,this.syncSelectionToDOM();return}o.energy>=l.cost&&(this.selectedHandCard=l,this.selectedAttackingMinion=null,this.syncSelectionToDOM())}}),t.addEventListener("mousedown",r=>{const i=r;if(this.state.waitingForNextPlayer||this.isAttacking)return;const n=parseInt(t.dataset.cardId);if(isNaN(n))return;const o=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,l=this.state.players[o].hand.find(d=>d.id===n);if(l&&(this.handDragStartX=i.clientX,this.handDragStartY=i.clientY,this.isHandDragStarted=!1,this.draggedCard=l,this.dragElement=t,s)){const d=l.type==="spell",c=this.getCardBgStyle(l);s.innerHTML=`
            <div class="drag-card-inner ${d?"spell-card":""}" style="${c}">
              <div class="card-top-row">
                <div class="card-cost-diamond">
                  <span>${l.cost}</span>
                </div>
                <div class="card-name">${l.name}</div>
              </div>
              ${l.keywords.length>0?this.renderKeywords(l.keywords,l.armorValue):""}
              ${(()=>{const m=this.getCardFullEffectText(l);return m?`<div class="card-effect-text">${m}</div>`:""})()}
              ${d?`
                <div class="card-bottom-row" style="justify-content: center; align-items: center; height: 24px;">

                </div>
              `:`
                <div class="card-bottom-row">
                  <div class="stat-attack">${l.attack}</div>
                  <div class="stat-health">${l.health}</div>
                </div>
              `}
            </div>
          `,s.style.display="none",s.style.left=`${i.clientX-60}px`,s.style.top=`${i.clientY-80}px`}}),t.addEventListener("touchstart",r=>{const i=r;if(this.state.waitingForNextPlayer||this.isAttacking)return;const n=parseInt(t.dataset.cardId);if(isNaN(n))return;const o=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,l=this.state.players[o].hand.find(d=>d.id===n);if(l&&(this.handDragStartX=i.touches[0].clientX,this.handDragStartY=i.touches[0].clientY,this.isHandDragStarted=!1,this.draggedCard=l,this.dragElement=t,s)){const d=l.type==="spell",c=this.getCardBgStyle(l);s.innerHTML=`
            <div class="drag-card-inner ${d?"spell-card":""}" style="${c}">
              <div class="card-top-row">
                <div class="card-cost-diamond">
                  <span>${l.cost}</span>
                </div>
                <div class="card-name">${l.name}</div>
              </div>
              ${l.keywords.length>0?this.renderKeywords(l.keywords,l.armorValue):""}
              ${(()=>{const m=this.getCardFullEffectText(l);return m?`<div class="card-effect-text">${m}</div>`:""})()}
              ${d?`
                <div class="card-bottom-row" style="justify-content: center; align-items: center; height: 24px;">

                </div>
              `:`
                <div class="card-bottom-row">
                  <div class="stat-attack">${l.attack}</div>
                  <div class="stat-health">${l.health}</div>
                </div>
              `}
            </div>
          `,s.style.display="none",s.style.left=`${this.handDragStartX-60}px`,s.style.top=`${this.handDragStartY-80}px`}},{passive:!0})})}handleMouseMove(e){if(this.attackingMinion){this.showAttackArrow(this.attackArrowStartX,this.attackArrowStartY,e.clientX,e.clientY);return}if(this.selectingTargetForCard||this.selectingTargetForSkill){this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,e.clientX,e.clientY,this.targetArrowColor);return}const s=document.getElementById("drag-card"),t=document.getElementById("play-area");if(this.draggedCard&&s&&this.dragElement){const r=e.clientX-this.handDragStartX,i=e.clientY-this.handDragStartY;if(!this.isHandDragStarted&&(Math.abs(r)>5||Math.abs(i)>5)&&(this.isHandDragStarted=!0,this.dragElement.classList.add("dragging"),s.style.display="block"),s.style.left=`${e.clientX-60}px`,s.style.top=`${e.clientY-80}px`,t){const n=t.getBoundingClientRect();e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom?t.classList.add("drop-target"):t.classList.remove("drop-target")}}}async handleMouseUp(e){if(this.attackingMinion&&!this.isAttacking){this.hideAttackArrow();const r=e.target;if(this.attackingMinion.isDefending&&!this.attackingMinion.keywords.some(l=>l.name==="机动")){if(r.closest('[data-own-hero="true"]')){const d=this.state.phase==="onlineBattle",c=d?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=le(this.state,{type:"TOGGLE_DEFENSE",playerId:c,cardId:this.attackingMinion.id}),this.attackingMinion=null,this.hideDefenseOverlayDOM(),this.render(),d){const m=this.state.online.currentRoom;m&&(fe(async()=>{const{broadcastGameAction:h}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:h}},__vite__mapDeps([0,1])).then(({broadcastGameAction:h})=>{h(m.id,{type:"STATE_SYNC",playerId:c}).catch(console.error)}),this.broadcastGameState())}return}this.attackingMinion=null,this.hideDefenseOverlayDOM();return}const i=r.closest(".top-board .minion-card"),n=r.closest(".top-player-area"),a=this.state.phase==="onlineBattle",o=a?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(console.log("handleMouseUp - 攻击随从模式 - 联机模式:",a,"视角索引:",this.onlineViewPlayerIndex,"攻击者ID:",o),i){const l=parseInt(i.dataset.minionId),d=parseInt(i.dataset.playerId),c=this.attackingMinion;this.attackingMinion=null,this.hideDefenseOverlayDOM(),this.isAttacking=!0,this.playWoodSound(),this.attackAnimation(c.id,!1,c.attack).then(async()=>{if(this.state=le(this.state,{type:"ATTACK",attackerPlayerId:o,attackerCardId:c.id,targetPlayerId:d,targetCardId:l}),this.isAttacking=!1,this.state.newlyDrawnCardIds.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(),50)):this.render(),a){const m=this.state.online.currentRoom;if(m){const{broadcastGameAction:h}=await fe(async()=>{const{broadcastGameAction:u}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:u}},__vite__mapDeps([0,1]));h(m.id,{type:"ATTACK_MINION",attackerPlayerId:this.state.online.playerId,attackerCardId:c.id,targetPlayerId:d,targetCardId:l}).catch(console.error)}}});return}else if(n&&!r.closest(".minion-card")){const l=a?2-this.onlineViewPlayerIndex:this.state.currentPlayerId===1?2:1,d=this.attackingMinion;this.attackingMinion=null,this.hideDefenseOverlayDOM(),this.isAttacking=!0,this.savePotentialDeathMinions(d.id),this.playWoodSound(),this.attackAnimation(d.id,!0,d.attack).then(async()=>{if(this.state=le(this.state,{type:"ATTACK_HERO",attackerPlayerId:o,attackerCardId:d.id,targetPlayerId:l}),this.isAttacking=!1,this.state.newlyDrawnCardIds.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(),50)):this.render(),a){const c=this.state.online.currentRoom;if(c){const{broadcastGameAction:m}=await fe(async()=>{const{broadcastGameAction:h}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:h}},__vite__mapDeps([0,1]));m(c.id,{type:"ATTACK_HERO",attackerPlayerId:this.state.online.playerId,attackerCardId:d.id,targetPlayerId:l}).catch(console.error)}}});return}else if(r.closest('.bottom-player-area [data-own-hero="true"]')){const l=this.state.phase==="onlineBattle",d=l?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,m=this.state.players[d].board.find(h=>h.id===this.attackingMinion.id);if(this.attackingMinion=null,this.hideDefenseOverlayDOM(),m){const h=l?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=le(this.state,{type:"TOGGLE_DEFENSE",playerId:h,cardId:m.id}),this.render(),l){const u=this.state.online.currentRoom;u&&(fe(async()=>{const{broadcastGameAction:p}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:p}},__vite__mapDeps([0,1])).then(({broadcastGameAction:p})=>{p(u.id,{type:"STATE_SYNC",playerId:h}).catch(console.error)}),this.broadcastGameState())}}return}this.attackingMinion=null,this.hideDefenseOverlayDOM();return}if(this.selectingTargetForCard&&this.selectingTargetEffect){this.hideTargetArrow();const r=e.target,i=r.closest(".minion-card"),n=r.closest(".top-player-area"),a=r.closest(".bottom-player-area");if(i){const o=parseInt(i.dataset.minionId),l=parseInt(i.dataset.playerId);this.executeCardWithTarget(this.selectingTargetForCard,this.selectingTargetEffect,l,o);return}else if(n&&!r.closest(".minion-card")){const o=this.selectingTargetEffect?.targets||[];if(o.includes("选择目标")&&!o.includes("选择随从")){const l=this.state.currentPlayerId===1?2:1;this.executeCardEffectOnHero(this.selectingTargetForCard,this.selectingTargetEffect,l);return}}else if(a&&!r.closest(".minion-card")){if(this.selectingTargetEffect?.effect==="治愈"&&this.selectingTargetForCard&&this.selectingTargetEffect){this.executeCardEffectOnHero(this.selectingTargetForCard,this.selectingTargetEffect,this.state.currentPlayerId);return}if(this.selectingTargetMinionId){const o=document.querySelector(`[data-minion-id="${this.selectingTargetMinionId}"]`);if(o){const l=o.getBoundingClientRect();this.showTargetArrow(l.left+l.width/2,l.top+l.height/2,e.clientX,e.clientY,"blue")}}else{const o=document.querySelector(".bottom-player-area [data-player-hp]");if(o){const l=o.getBoundingClientRect();this.showTargetArrow(l.left+l.width/2,l.top+l.height/2,e.clientX,e.clientY,"purple")}}return}if(this.selectingTargetMinionId){const o=document.querySelector(`[data-minion-id="${this.selectingTargetMinionId}"]`);if(o){const l=o.getBoundingClientRect();this.showTargetArrow(l.left+l.width/2,l.top+l.height/2,e.clientX,e.clientY,"blue")}}else{const o=document.querySelector(".bottom-player-area [data-player-hp]");if(o){const l=o.getBoundingClientRect();this.showTargetArrow(l.left+l.width/2,l.top+l.height/2,e.clientX,e.clientY,"purple")}}return}if(this.selectingTargetForSkill&&this.selectingTargetEffect){this.hideTargetArrow();const r=this.selectingTargetForSkill.skillIndex,i=e.target,n=i.closest(".minion-card"),a=i.closest(".top-player-area"),o=i.closest(".bottom-player-area");if(n){const d=parseInt(n.dataset.minionId),c=parseInt(n.dataset.playerId);this.executeHeroSkillWithTarget(r,c,d);return}else if(a&&!i.closest(".minion-card")){const d=this.selectingTargetEffect?.targets||[];if(d.includes("选择目标")&&!d.includes("选择随从")){const c=this.state.currentPlayerId===1?2:1;this.executeHeroSkillOnHero(r,c);return}}else if(o&&!i.closest(".minion-card")){if(this.selectingTargetEffect?.effect==="治愈"){this.executeHeroSkillOnHero(r,this.state.currentPlayerId);return}const d=document.querySelector(".bottom-player-area [data-player-hp]");if(d){const c=d.getBoundingClientRect();this.showTargetArrow(c.left+c.width/2,c.top+c.height/2,e.clientX,e.clientY,"blue")}return}const l=document.querySelector(".bottom-player-area [data-player-hp]");if(l){const d=l.getBoundingClientRect();this.showTargetArrow(d.left+d.width/2,d.top+d.height/2,e.clientX,e.clientY,"blue")}return}const s=document.getElementById("drag-card"),t=document.getElementById("play-area");if(this.draggedCard&&!this.isHandDragStarted){this._pendingClickCardId=this.draggedCard.id,s&&(s.style.display="none"),t&&t.classList.remove("drop-target"),this.draggedCard=null,this.dragElement=null;return}if(this.draggedCard&&s&&t){const r=t.getBoundingClientRect(),i=this.state.players[this.state.currentPlayerId-1];if(e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom&&i.energy>=this.draggedCard.cost){const a=(this.draggedCard.effects||(this.draggedCard.effect?[this.draggedCard.effect]:[])).filter(l=>this.momentsInclude(l.moment,"打出时")&&l.effect);let o=!1;for(const l of a){const d=l.targets||[];if(d.includes("选择目标")||d.includes("选择随从")){o=!0;const c=this.draggedCard.type==="spell";c||(this.state=le(this.state,{type:"PLAY_CARD",playerId:this.state.currentPlayerId,cardId:this.draggedCard.id}));const m=this.state.players[this.state.currentPlayerId-1].board,h=m[m.length-1];this.selectingTargetForCard=this.draggedCard,this.selectingTargetEffect=l,this.selectingTargetMinionId=c?null:h?h.id:null,this.targetArrowColor=c?"#9b59b6":"#4a90d9",s.style.display="none",t.classList.remove("drop-target"),this.dragElement&&this.dragElement.classList.remove("dragging"),this.draggedCard=null,this.dragElement=null,this.isHandDragStarted=!1,this.render(),setTimeout(()=>{if(c){const u=document.querySelector(".bottom-player-area [data-player-hp]");if(u){const p=u.getBoundingClientRect();this.targetArrowStartX=p.left+p.width/2,this.targetArrowStartY=p.top+p.height/2,this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,"purple")}}else if(this.selectingTargetMinionId){const u=document.querySelector(`[data-minion-id="${this.selectingTargetMinionId}"]`);if(u){const p=u.getBoundingClientRect();this.targetArrowStartX=p.left+p.width/2,this.targetArrowStartY=p.top+p.height/2,this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,"blue")}}},50);return}}o||(this.playCardDirectly(this.draggedCard),s.style.display="none",t.classList.remove("drop-target"),this.dragElement&&this.dragElement.classList.remove("dragging"),this.draggedCard=null,this.dragElement=null);return}else this.render();s&&(s.style.display="none"),t&&t.classList.remove("drop-target"),this.dragElement&&this.dragElement.classList.remove("dragging"),this.draggedCard=null,this.dragElement=null}else s&&(s.style.display="none"),t&&t.classList.remove("drop-target"),this.dragElement&&this.dragElement.classList.remove("dragging"),this.draggedCard=null,this.dragElement=null}getCardColor(e){switch(e){case"minion":return"#7cb87c";case"spell":return"#6fa8dc";case"weapon":return"#d4a574";default:return"#a08060"}}getCardColorDark(e){switch(e){case"minion":return"#5a9a5a";case"spell":return"#4a90d9";case"weapon":return"#c4956a";default:return"#8b7355"}}getCardBorderColor(e){switch(e){case"minion":return"#4a8a4a";case"spell":return"#3d85c6";case"weapon":return"#b8956a";default:return"#a08060"}}};Ae.MALE_AUDIO_FILES={greeting:"/male_greeting.m4a",apology:"/male_apology.m4a",taunt:"/male_taunt.wav",exclamation:"/male_exclamation.wav",pity:"/male_pity.wav"},Ae.FEMALE_AUDIO_FILES={greeting:"/female_greeting.wav",apology:"/female_apology.wav",taunt:"/female_taunt.wav",exclamation:"/female_exclamation.wav",pity:"/female_pity.wav",flirt:"/flirt_audio.wav"};let vt=Ae;new vt;
