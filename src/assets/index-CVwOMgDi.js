(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const aa="modulepreload",sa=function(E){return"/"+E},It={},fe=function(e,s,t){let n=Promise.resolve();if(s&&s.length>0){let l=function(d){return Promise.all(d.map(c=>Promise.resolve(c).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var r=l;document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");n=l(s.map(d=>{if(d=sa(d),d in It)return;It[d]=!0;const c=d.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":aa,c||(h.as="script"),h.crossOrigin="",h.href=d,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((m,f)=>{h.addEventListener("load",m),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return n.then(a=>{for(const o of a||[])o.status==="rejected"&&i(o.reason);return e().catch(i)})};let kt=0;const ke=()=>++kt,wt=()=>{kt=0},Ht=E=>{kt=E},Me="__public__",Ee={firstStrike:{name:"先攻",description:"攻击没有先攻的随从时，若击杀目标则不受到反伤"},mobility:{name:"机动",description:"每回合可以同时攻击与防御"},taunt:{name:"嘲讽",description:"进入防御状态一回合，无法攻击，下回合开始时失效"},charge:{name:"连击",description:"每回合可以攻击两次"},frenzy:{name:"狂怒",description:"攻击消灭随从后可以再次攻击"},armor:{name:"护甲",description:"每次受到的伤害减少x",hasValue:!0},prepare:{name:"准备",description:"打出后x个回合内无法行动",hasValue:!0},brutal:{name:"暴虐",description:"只能攻击随从"},decapitate:{name:"斩首",description:"只能攻击英雄"},cannotMove:{name:"不动",description:"永远无法进行任何行动"},divineShield:{name:"圣盾",description:"免疫受到的第一次伤害"},element_fire:{name:"🔥",description:"攻击附带灼烧元素：第二次造成灼烧伤害时触发额外50%伤害"},element_ice:{name:"❄️",description:"攻击附带冰冻元素：第二次造成冰冻伤害时冰冻目标一回合"},element_lightning:{name:"⚡️",description:"攻击附带电击元素：第二次造成电击伤害时对随机目标额外造成50%伤害"}},ve=(E,e)=>E.keywords.some(s=>s.name===e),yt={fire:"🔥",ice:"❄️",lightning:"⚡️"},Vt={fire:"灼烧",ice:"冰冻",lightning:"电击"},Et=E=>{for(const e of E.keywords){if(`${e.name}`,e.name==="🔥")return"fire";if(e.name==="❄️")return"ice";if(e.name==="⚡️")return"lightning"}},ra=Object.freeze(Object.defineProperty({__proto__:null,CARD_GROUP_PUBLIC_ID:Me,ELEMENT_EMOJI:yt,ELEMENT_NAME:Vt,KEYWORDS:Ee,generateCardId:ke,getAttackElementType:Et,hasKeyword:ve,resetCardIdCounter:wt,setCardIdCounter:Ht},Symbol.toStringTag,{value:"Module"})),me=(E,e)=>!!(E.moments&&E.moments.includes(e)||E.moment===e),St=E=>{if(!E||!E.skills)return E||null;const e=E.skills.map(s=>({...s,remainingCooldown:0,usesLeft:s.limited?s.maxUses??1:void 0}));return{...E,skills:e}},be=E=>{const e=[E.name||"",E.type||"",E.cost??0,E.type!=="spell"?E.attack??0:0,E.type!=="spell"?E.health??0:0,E.armorValue??0],s=(E.keywords||[]).map(t=>`${t.name}:${t.value??""}`).sort().join("|");return e.push(s),e.join("|")},Je=E=>{const e=new Map;for(const s of E){const t=be(s),n=e.get(t);n?n.count++:e.set(t,{card:s,count:1})}return Array.from(e.values())},Ye=E=>{const e=[];for(const s of E)for(let t=0;t<s.count;t++)e.push({...s.card,id:ke()});return e},De=E=>E.groups[0],zt=(E,e)=>E.groups.find(s=>s.id===e),Ft=E=>{const e=[];for(const s of E.groups)for(const t of s.cards)t.card.type==="hero"&&e.push(t.card);return e},Ze=(E,e)=>{if(e.type!=="hero")return;const s=be(e);return E.groups.find(t=>t.cards.some(n=>be(n.card)===s))};let na=0;const ue=(E,e,s,t)=>{const n={id:++na,turn:E.turnNumber,playerId:e,type:s,message:t,timestamp:Date.now()};return{...E,gameLogs:[...E.gameLogs,n]}},rt=(E,e,s)=>{const t=Math.min(e,s),n=s-t,i=Math.min(E-e,n);return{newEnergy:E-t-i,newBonusEnergy:e-t}},bt=()=>({id:ke(),name:"幸运币",cost:0,attack:0,health:0,maxHealth:0,type:"spell",keywords:[],legacyEffect:"gain_energy",legacyEffectValue:1,imageData:"/cards/coin.png"});function He(E){const e=[...E];for(let s=e.length-1;s>0;s--){const t=Math.floor(Math.random()*(s+1));[e[s],e[t]]=[e[t],e[s]]}return e}function ia(E,e){const s=[...E];let t=e;const n=()=>(t=(t*16807+0)%2147483647,(t-1)/2147483646);for(let i=s.length-1;i>0;i--){const r=Math.floor(n()*(i+1));[s[i],s[r]]=[s[r],s[i]]}return s}const Oe=E=>({id:E,name:`玩家${E}`,health:30,maxHealth:30,energy:1,maxEnergy:1,hand:[],board:[],deck:[],personalBattleDeck:[],halfPublicDeck:[]}),jt=E=>{wt();const e=E&&E.length>0?Je(E):[],s=[];for(const t of e)t.card.type==="hero"&&s.push(t.card);return{phase:"menu",soundEffects:[],pendingVisualEffects:[],currentPlayerId:1,turnNumber:1,players:[Oe(1),Oe(2)],sharedDeck:e,heroCards:s,heroCard:null,groups:[{id:Me,name:"公用卡组",cards:e}],publicBattleDeck:[],winner:null,waitingForNextPlayer:!1,newlyDrawnCardIds:[],gameLogs:[],discardPile:[],mulliganCards:[],mulliganSelected:[],mulliganFirstPlayer:1,mulliganDone:0,p2MulliganCards:[],p2MulliganSelected:[],skipFirstDraw:!1,online:{isOnline:!1,playerId:"",playerNickname:"",currentRoom:null,messages:[],playerReady:[],localDeckImport:null,remoteDeckImports:{},battlePlayers:[],isSpectator:!1,spectatorViewPlayerId:"",diceRolls:[],firstPlayerId:"",lastLoserId:"",rematchRequested:[],isWaitingForGameState:!1,heroSelections:{}}}},oa=E=>({...E,phase:"setup"}),la=E=>({...E,phase:"robotSetup"}),da=(E,e,s)=>{const t=Ye(E.groups[0].cards.filter(h=>h.card.type!=="hero")),n=t.length>0?He(t):[];let i=[];if(s){const h=Ze(E,s);h&&h.id!==Me&&(i=Ye(h.cards.filter(m=>m.card.type!=="hero")))}const r=i.length>0?He(i):[],a=He([...i]),o=[],l=2,d={id:ke(),name:"🤖 Robot",type:"hero",cost:0,attack:0,health:0,maxHealth:0,keywords:[],imageData:"/robot-hero.png",skills:[{id:1,name:"芯片强化",type:"active",cost:1,cooldown:2,iconData:"/robot-skill.png",description:"对选择随从+1/+1",effects:[{moment:"打出时",targets:["选择随从"],effect:"属性变化",value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0,isAttackSet:!1,isHealthSet:!1,isCostPositive:!0,isCostSet:!1,costValue:0,triggerNumbers:[1,2,3,4,5,6],randomTargetTimes:1}]}],heroSpeech:{greeting:"你好！",apology:"抱歉。",taunt:"吁，Loser！",exclamation:"Awww man！",pity:"aww...",flirt:"我喜欢你。",voiceType:"female"}},c={phase:"mulligan",soundEffects:[],pendingVisualEffects:[],currentPlayerId:1,turnNumber:1,players:[{...Oe(1),name:e||"玩家",deck:a,hand:[],energy:1,maxEnergy:1,heroCard:s||null,personalBattleDeck:r},{...Oe(2),name:"🤖 Robot",deck:o,hand:[],health:40,maxHealth:40,energy:1,maxEnergy:1,heroCard:d,personalBattleDeck:[]}],winner:null,sharedDeck:E.sharedDeck,heroCards:E.heroCards||[],heroCard:null,groups:E.groups,publicBattleDeck:n,waitingForNextPlayer:!1,newlyDrawnCardIds:[],gameLogs:E.gameLogs||[],discardPile:[],online:E.online,mulliganCards:[],mulliganSelected:[],mulliganFirstPlayer:1,mulliganDone:0,p2MulliganCards:[],p2MulliganSelected:[],skipFirstDraw:!0};for(let h=0;h<3;h++)nt(c,l);const p=[];for(let h=0;h<4;h++){const m=je(c,1,!1);m&&p.push(m)}return c.mulliganCards=p,c.newlyDrawnCardIds=p.map(h=>h.id),c},Gt=(E,e)=>{let s=E;const t=e-1,n=[...s.players[t].board];for(const a of n)if(a.pendingNextTurnEffect&&a.pendingNextTurnEffectOwnerId===e){if(!s.players[t].board.some(c=>c.id===a.id)){const c=s.players[t].board.findIndex(p=>p.id===a.id);c!==-1&&(s.players[t].board[c].pendingNextTurnEffect=void 0,s.players[t].board[c].pendingNextTurnEffectOwnerId=void 0);continue}s=Te(s,[a.pendingNextTurnEffect],e,a.name,"下回合开始时",{targetMinion:a,attackerMinion:a,sourceCard:a});const d=s.players[t].board.findIndex(c=>c.id===a.id);d!==-1&&(s.players[t].board[d].pendingNextTurnEffect=void 0,s.players[t].board[d].pendingNextTurnEffectOwnerId=void 0)}const i=s.players[t],r=i.pendingSpellNextTurnEffects||[];if(r.length>0){console.log('[processNextTurnEffects] 处理法术牌"下回合开始时"效果:',r.length,"个");for(const a of r)s=Te(s,[a.effect],e,"法术效果","下回合开始时",{sourceCard:a.sourceCard});s.players[t]={...i,pendingSpellNextTurnEffects:[]}}return s},ca=E=>{const e=E.currentPlayerId-1,s=E.currentPlayerId,t=E.currentPlayerId===1?2:1,n=t-1,i=E.players[e],r={...i,energy:0},a=i.board;let o={...E,players:E.players.map((g,y)=>y===e?r:g)};for(const g of a){const x=(g.effects||(g.effect?[g.effect]:[])).filter(k=>me(k,"回合结束时")&&k.effect);x.length>0&&(o=Te(o,x,s,g.name,"回合结束时",{targetMinion:g,attackerMinion:g,sourceCard:g}))}const l=s-1;o.players[l]={...o.players[l],board:o.players[l].board.map(g=>({...g,playedThisTurn:!1}))},o.players[l]={...o.players[l],board:o.players[l].board.map(g=>{const y=g.keywords.some(x=>x.name==="不动");if(g.preparation>0){const x=g.preparation-1;return{...g,preparation:x,canAttack:y?!1:x===0&&!Ge(g)?!0:g.canAttack,canAttackHeroes:y?!1:x===0&&!Ge(g)?!ve(g,"暴虐"):g.canAttackHeroes,canAttackMinions:y?!1:x===0&&!Ge(g)?!ve(g,"斩首"):g.canAttackMinions}}return g})},o.players[l]={...o.players[l],heroMarkCount:0};const d=g=>{const y=g.heroCard?.skills?.map(x=>{const k=x.remainingCooldown??0,u=Math.max(0,k-1);return{...x,remainingCooldown:u}});return{...g,heroCard:g.heroCard?{...g.heroCard,skills:y}:void 0}};o={...o,players:o.players.map(d)},o.players[n];const c=o.currentPlayerId===1?o.turnNumber+1:o.turnNumber;let p={...o,currentPlayerId:t,turnNumber:c,waitingForNextPlayer:!1,newlyDrawnCardIds:[]};const h=Math.min(10,c),m=p.players[n];p.players[n]={...m,maxEnergy:h,energy:h,heroSkillUsed:m.heroCard?.skills?.map(()=>!1),board:m.board.map(g=>{const y=g.keywords.some(x=>x.name==="不动");return g.keywords.some(x=>x.name==="嘲讽"),{...g,keywords:g.keywords.filter(x=>x.name!=="嘲讽"),playedThisTurn:!1,canAttack:y?!1:!(g.preparation>0),hasAttacked:!1,attacksThisTurn:0,canAttackHeroes:y||g.preparation>0?!1:!ve(g,"暴虐"),canAttackMinions:y||g.preparation>0?!1:!ve(g,"斩首"),isDefending:!1}})};const f=p.players[e].heroCard;if(f&&f.skills)for(let g=0;g<f.skills.length;g++){const y=f.skills[g];if(y.type!=="passive")continue;const k=(y.effects||(y.effect?[y.effect]:[])).filter(u=>me(u,"回合结束时")&&u.effect);k.length>0&&(p=Te(p,k,s,`${p.players[e].name}的被动【${y.name}】`,"回合结束时",{sourceCard:f}))}if(t===1&&c===1){const g={...bt(),id:ke()};p.players[n].hand.push(g),p.newlyDrawnCardIds.push(g.id)}return p=(g=>{let y=g;const x=[...y.players[n].board];for(const k of x){if(!y.players[n].board.some(T=>T.id===k.id))continue;const S=(k.effects||(k.effect?[k.effect]:[])).filter(T=>me(T,"回合开始时")&&T.effect);S.length>0&&(y=Te(y,S,t,k.name,"回合开始时",{targetMinion:k,attackerMinion:k,sourceCard:k}))}return y})(p),p=Gt(p,t),p.phase="robotBattle",c>1&&nt(p,t),p},ha=(E,e,s,t,n)=>{const i=Ye(E.groups[0].cards.filter(f=>f.card.type!=="hero")),r=i.length>0?He(i):[];let a=[];if(t){const f=Ze(E,t);f&&f.id!==Me&&(a=Ye(f.cards.filter(b=>b.card.type!=="hero")))}const o=a.length>0?He(a):[];let l=[];if(n){const f=Ze(E,n);f&&f.id!==Me&&(l=Ye(f.cards.filter(b=>b.card.type!=="hero")))}const d=l.length>0?He(l):[],c=He([...a]),p=He([...l]),h={phase:"mulligan",soundEffects:[],turnNumber:1,players:[{...Oe(1),name:e||"玩家1",deck:c,energy:1,maxEnergy:1,heroCard:St(t),personalBattleDeck:o},{...Oe(2),name:s||"玩家2",deck:p,energy:1,maxEnergy:1,heroCard:St(n),personalBattleDeck:d}],winner:null,sharedDeck:E.sharedDeck,heroCards:E.heroCards||[],heroCard:null,groups:E.groups,publicBattleDeck:r,waitingForNextPlayer:!1,newlyDrawnCardIds:[],gameLogs:[],discardPile:[],currentPlayerId:1,mulliganCards:[],mulliganSelected:[],mulliganFirstPlayer:1,mulliganDone:0,p2MulliganCards:[],p2MulliganSelected:[],skipFirstDraw:!1,online:E.online,pendingVisualEffects:[]},m=[];for(let f=0;f<3;f++){const b=je(h,1,!1);b&&m.push(b)}return h.mulliganCards=m,h.newlyDrawnCardIds=m.map(f=>f.id),h},je=(E,e,s=!0)=>{const t=e-1,n=E.players[t],i=n.halfPublicDeck&&n.halfPublicDeck.length>0,r=i?n.halfPublicDeck:E.publicBattleDeck||[],a=n.personalBattleDeck||[],o=r.length,l=a.length,d=o+l;if(d===0){if(n.deck&&n.deck.length>0){const p={...n.deck[0],id:ke()},h=n.deck.slice(1);return E.players[t]={...n,deck:h,hand:s?[...n.hand,p]:n.hand},E.newlyDrawnCardIds=[...E.newlyDrawnCardIds,p.id],p}return E.players[t]={...n,health:n.health-1},null}let c;if(l===0?c=!0:o===0?c=!1:c=Math.random()<o/d,c){const p={...r[0],id:ke()};return i?E.players[t]={...n,halfPublicDeck:r.slice(1),personalBattleDeck:a,hand:s?[...n.hand,p]:n.hand}:(E.publicBattleDeck=r.slice(1),E.players[t]={...n,personalBattleDeck:a,hand:s?[...n.hand,p]:n.hand}),E.newlyDrawnCardIds=[...E.newlyDrawnCardIds,p.id],p}else{const p={...a[0],id:ke()};return E.players[t]={...n,halfPublicDeck:i?r:n.halfPublicDeck,personalBattleDeck:a.slice(1),hand:s?[...n.hand,p]:n.hand},E.newlyDrawnCardIds=[...E.newlyDrawnCardIds,p.id],p}},nt=(E,e)=>{je(E,e)},ua=(E,e)=>{const s={...E},t=e-1,n=s.players[t];if(n.deck&&n.deck.length>0){const i={...n.deck[0],id:ke()},r=n.deck.slice(1);return s.players[t]={...n,deck:r,hand:[...n.hand,i]},s.newlyDrawnCardIds=[...s.newlyDrawnCardIds,i.id],ue(s,e,"draw_card",`${s.players[t].name} 抽了 1 张牌`)}else return s.players[t]={...n,health:n.health-1},ue(s,e,"damage",`${s.players[t].name} 疲劳受伤 1 点`)},Ut=(E,e,s)=>{const t=e-1,n=E.players[t],i=n.hand.findIndex(P=>P.id===s);if(i===-1)return E;const r=n.hand[i];if(n.energy<r.cost)return E;const a={...E,newlyDrawnCardIds:[]};if(a.players=[...E.players],r.type==="spell"){console.log("[playCard] 处理法术卡:",r.name,"legacyEffect:",r.legacyEffect,"effects:",r.effects);const{newEnergy:P,newBonusEnergy:B}=rt(n.energy,n.bonusEnergy||0,r.cost);let $=P,N=B;console.log("[playCard] 初始能量:",n.energy,"绿色能量:",n.bonusEnergy,"费用:",r.cost,"扣除后:",$,"剩余绿色:",N),r.legacyEffect==="gain_energy"&&r.legacyEffectValue&&($=$+r.legacyEffectValue,N+=r.legacyEffectValue,console.log("[playCard] legacyEffect获得能量:",r.legacyEffectValue,"总bonusEnergy:",N)),a.players[t]={...n,energy:$,bonusEnergy:N,hand:n.hand.filter((re,q)=>q!==i)},a.discardPile=[r,...a.discardPile];const J=r.effects||[];let U=a;const ne=J.filter(re=>me(re,"下回合开始时")&&re.effect);if(ne.length>0){const re=U.players[t],q=re.pendingSpellNextTurnEffects||[];U.players[t]={...re,pendingSpellNextTurnEffects:[...q,...ne.map(C=>({effect:C,sourceCard:r}))]},console.log('[playCard] 暂存"下回合开始时"效果:',r.name,ne)}const Z=J.filter(re=>!me(re,"下回合开始时"));for(const re of Z)if(re.effect)if(re.effect==="获得能量"&&re.value){const q=U.players[t];U.players[t]={...q,energy:q.energy+re.value,bonusEnergy:(q.bonusEnergy||0)+re.value},console.log("[playCard] effects获得能量:",re.value)}else if(re.effect==="失去能量"&&re.value){const q=U.players[t],C=Math.min(re.value,q.energy);U.players[t]={...q,energy:q.energy-C},console.log("[playCard] effects失去能量:",C)}else{const q=re.targets||[];q.includes("选择目标")||q.includes("选择随从")||(U=Te(U,[re],e,r.name,"打出时",{sourceCard:r}),console.log("[playCard] 执行效果:",re.effect,"目标:",q))}return U=ue(U,e,"play_card",`${U.players[t].name} 打出 ${r.name}（法术）`),U}const o=ve(r,"嘲讽"),l=ve(r,"连击"),d=ve(r,"圣盾"),c=r.keywords.find(P=>P.name==="准备"),p=c?c.value??1:0,h=ve(r,"暴虐"),m=ve(r,"斩首"),f=ve(r,"机动"),b=ve(r,"不动"),g=f&&!o&&!b&&p===0,y={...r,canAttack:b?!1:g,hasAttacked:!1,attacksThisTurn:0,maxAttacksPerTurn:l?2:1,divineShieldActive:d,canAttackHeroes:b?!1:g&&!h,canAttackMinions:b?!1:g&&!m,playedThisTurn:!0,isDefending:b?!1:o,preparation:p},k=(r.effects||(r.effect?[r.effect]:[])).find(P=>me(P,"下回合开始时")&&P.effect);k&&(y.pendingNextTurnEffect=k,y.pendingNextTurnEffectOwnerId=e);const u=a.players[t],w=u.hand.filter((P,B)=>B!==i),{newEnergy:I,newBonusEnergy:S}=rt(u.energy,u.bonusEnergy||0,r.cost);a.players[t]={...u,energy:I,bonusEnergy:S,hand:w,board:[...u.board,y]};const D=(r.effects||(r.effect?[r.effect]:[])).filter(P=>me(P,"打出时")&&P.effect);let O=ue(a,e,"play_card",`${a.players[t].name} 打出 ${r.name}（${r.attack}/${r.health}）`);if(D.length>0){console.log("触发打出时效果:",r.name,D);for(const P of D){const B=P.targets||[];B.includes("选择目标")||B.includes("选择随从")||(O=Te(O,[P],e,r.name,"打出时",{excludeMinionId:y.id,sourceCard:y}))}}return O},fa=(E,e,s,t,n)=>{const i=e-1,r=E.players[i],a=r.heroCard;if(!a||!a.skills||s<0||s>=a.skills.length)return E;const o=a.skills[s],l=o.effects||(o.effect?[o.effect]:[]);if(l.length===0||l.every(w=>!w.effect)||r.energy<(o.cost??0))return E;const d=r.heroSkillUsed||[];if(d[s]||(o.remainingCooldown??0)>0)return E;const p=o.usesLeft??(o.limited?o.maxUses:void 0);if(o.limited&&(p===void 0||p<=0))return E;const{newEnergy:h,newBonusEnergy:m}=rt(r.energy,r.bonusEnergy||0,o.cost??0);let f={...E,players:[...E.players]};const b=[...d];b[s]=!0;const g=o.cooldown??0,y=g>0?g*2+1:0,x=o.limited&&p!==void 0?p-1:void 0,k=a.skills.map((w,I)=>I===s?{...w,remainingCooldown:y,usesLeft:x}:w);f.players[i]={...r,energy:h,bonusEnergy:m,heroSkillUsed:b,heroCard:{...a,skills:k}};const u=l.filter(w=>me(w,"打出时")&&w.effect);for(const w of u){const I=w.targets||[];if(!(I.includes("选择目标")||I.includes("选择随从")))f=Te(f,[w],e,`技能「${o.name}」`,"打出时",{sourceCard:a});else if(t!==void 0){let T={};if(n!==void 0){const D=t-1,O=f.players[D].board.find(P=>P.id===n);T={targetPlayerId:t,targetCardId:n,targetMinion:O,sourceCard:a}}else T={targetPlayerId:t,sourceCard:a};f=Te(f,[w],e,`技能「${o.name}」`,"打出时",T)}}return f=ue(f,e,"play_card",`${r.name} 发动技能「${o.name}」`),f},pa=(E,e,s,t,n)=>{const i=e-1,r=E.players[i].hand.find(h=>h.id===s);if(!r)return E;let a=E;if(r.type==="spell"?a=ue(E,e,"play_card",`${E.players[i].name} 打出 ${r.name}（法术）`):a=ue(E,e,"play_card",`${E.players[i].name} 打出 ${r.name}（${r.attack}/${r.health}）`),r.type==="spell"){const h=a.players[i],{newEnergy:m,newBonusEnergy:f}=rt(h.energy,h.bonusEnergy||0,r.cost);let b={...a,players:[...a.players]};b.players[i]={...h,energy:m,bonusEnergy:f,hand:h.hand.filter(k=>k.id!==s)},b.discardPile=[r,...b.discardPile];const g=r.effects||[],y=g.filter(k=>me(k,"下回合开始时")&&k.effect);if(y.length>0){const k=b.players[i],u=k.pendingSpellNextTurnEffects||[];b.players[i]={...k,pendingSpellNextTurnEffects:[...u,...y.map(w=>({effect:w,sourceCard:r}))]},console.log('[playCardWithTarget] 暂存"下回合开始时"效果:',r.name,y)}const x=g.filter(k=>!me(k,"下回合开始时"));for(const k of x){if(!k.effect)continue;let u;if(n!==void 0){const w=t-1,I=a.players[w].board.find(S=>S.id===n);u={targetPlayerId:t,targetCardId:n,targetMinion:I}}else u={targetPlayerId:t};if(b=Te(b,[k],e,r.name,"打出时",{...u,sourceCard:r}),k.effect==="造成伤害"){const w=k.value||1,I=t-1,S=b.players[I];if(n!==void 0){const T=S.board.find(D=>D.id===n);T&&(b=ue(b,e,"damage",`${r.name} 对 ${T.name} 造成 ${w} 点伤害`))}else b=ue(b,e,"damage",`${r.name} 对 ${S.name} 造成 ${w} 点伤害`)}}return b}const o=Ut(a,e,s),l=o.players[i],d=l.board[l.board.length-1];if(!d)return o;const c=r.effects||(r.effect?[r.effect]:[]);if(c.length===0)return o;let p=o;for(const h of c)if(me(h,"打出时"))if(h.effect==="造成伤害"){const m=h.value||1,f=h.elementType;if(n!==void 0){const b=t-1,g=p.players[b].board.findIndex(y=>y.id===n);if(g!==-1){p={...p},p.players=[...p.players];let y={...p.players[b]};y.board=[...y.board];const x=y.board[g];if(y.board[g]=Se(x,m),p.players[b]=y,f){const S=y.board.findIndex(T=>T.id===n&&T.health>0);if(S!==-1){const T=Be(p,"minion",b,S,m,f,e);if(p=T.state,T.triggered&&T.extraDamage&&f==="fire"){const D=p.players[b],O=D.board[S];if(O&&O.health>0){const P=Se(O,T.extraDamage),B={...D,board:[...D.board]};B.board[S]=P;const $=[...p.players];$[b]=B,p={...p,players:$}}}y={...p.players[b]}}}const k=y.board[g],u=(k.effects||[]).filter(S=>me(S,"失去生命时")&&S.effect);for(const S of u)p=we(p,S,b+1,{sourceCard:k,attackerMinion:k}),p={...p},p.players=[...p.players],y={...p.players[b]};p=ue(p,e,"damage",`${d.name} 对 ${x.name} 造成 ${m} 点伤害`);const I=y.board.filter(S=>S.health<=0).map(S=>({...S,health:S.maxHealth}));y.board=y.board.filter(S=>S.health>0),p.discardPile=[...I,...p.discardPile],p.players[b]=y}}else{const b=t-1;p={...p},p.players=[...p.players];const g={...p.players[b]};if(g.health-=m,p=ue(p,e,"damage",`${d.name} 对 ${g.name} 造成 ${m} 点伤害`),p.players[b]=g,f){const w=Be(p,"hero",b,void 0,m,f,e);p=w.state;for(const I of w.logMessages)p=ue(p,e,"element",I);if(w.triggered&&w.extraDamage&&f==="fire"){const I={...p.players[b]};I.health-=w.extraDamage,p.players[b]=I}if(w.triggered&&w.extraDamageIsLightning){const I=w.extraDamage,S=p.players[b],T=S.board.filter(O=>O.health>0),D=[];if(T.forEach(O=>D.push({type:"minion",idx:S.board.indexOf(O)})),S.health>0&&D.push({type:"hero",idx:-1}),D.length>0){const O=D[Math.floor(Math.random()*D.length)];if(O.type==="hero"){const P={...p.players[b]};P.health-=I,p.players[b]=P}else{const P={...S};P.board=[...P.board];const B=Se(P.board[O.idx],I);if(P.board[O.idx]=B,B.health<=0){const $={...B,health:B.maxHealth};P.board=P.board.filter(N=>N.id!==B.id),p.discardPile=[$,...p.discardPile],p=ue(p,p.players[b].id,"element",`💀${B.name}被电击消灭`)}p.players[b]=P}}}}const y=g.id,x=y-1,k=p.players[x].heroCard,u=k?.skills||[];for(let w=0;w<u.length;w++){const I=u[w];if(I.type!=="passive")continue;const T=(I.effects||(I.effect?[I.effect]:[])).filter(D=>me(D,"受伤时")&&D.effect);if(T.length>0&&k){p=ue(p,y,"hero_skill",`${p.players[x].name} 的被动技能【${I.name}】触发`);for(const D of T)p=we(p,D,y,{sourceCard:k})}}p=Fe(p)}}else if(h.effect==="属性变化"){const m=h.attackValue??0,f=h.healthValue??0;if(n!==void 0){const b=t-1;p={...p},p.players=[...p.players];const g={...p.players[b]};g.board=[...g.board];const y=g.board.findIndex(x=>x.id===n);if(y!==-1){const x=g.board[y],k=h.isAttackSet?m-x.attack:h.isAttackPositive?m:-m,u=h.isHealthSet?f-x.health:h.isHealthPositive?f:-f,w=Math.max(0,x.attack+k),I=x.health+u,S=x.maxHealth+u;g.board[y]={...x,attack:w,health:I,maxHealth:Math.max(1,S)};const T=h.isAttackSet?"=":k>=0?"+":"",D=h.isHealthSet?"=":u>=0?"+":"";if(p=ue(p,e,"minion_skill",`${d.name} 使 ${x.name} 属性变为${T}${h.isAttackSet?m:k}/${D}${h.isHealthSet?f:u}`),I<=0){const P=g.board.filter(B=>B.health<=0).map(B=>({...B,health:B.maxHealth}));g.board=g.board.filter(B=>B.health>0),p.discardPile=[...P,...p.discardPile]}p.players[b]=g}}}else{const m=t-1,f=n!==void 0?p.players[m].board.find(b=>b.id===n):void 0;p=we(p,h,e,{targetPlayerId:t,targetCardId:n,targetMinion:f,attackerMinion:d,sourceCard:d})}return p},ma=(E,e,s,t,n)=>{console.log("[executePlayedMinionEffect] 开始执行, playerId:",e,"targetPlayerId:",t,"targetCardId:",n);const i=e-1,r=E.players[i],a=r.board[r.board.length-1];if(!a)return console.log("[executePlayedMinionEffect] 未找到打出的随从"),E;const l=(a.effects||(a.effect?[a.effect]:[])).filter(c=>me(c,"打出时")&&c.effect);if(console.log("[executePlayedMinionEffect] playedMinion:",a.name,"playEffects:",l),l.length===0)return console.log("[executePlayedMinionEffect] 没有打出时效果"),E;let d=E;for(const c of l){console.log("[executePlayedMinionEffect] 处理效果:",c.effect,"targets:",c.targets);const p=t-1,h=d.players[p],m=n!==void 0?h.board.find(b=>b.id===n):null;console.log("[executePlayedMinionEffect] targetMinion:",m?.name);const f=m?{targetPlayerId:t,targetCardId:n,targetMinion:m}:{targetPlayerId:t};d=Te(d,[c],e,a.name,"打出时",{...f,sourceCard:a}),console.log("[executePlayedMinionEffect] 效果执行完成")}return d},Ge=E=>E.keywords.some(e=>e.name==="嘲讽"),Wt=E=>E.isDefending||Ge(E),Yt=E=>E.some(e=>Wt(e)),ga=E=>!(!E.canAttack||E.attacksThisTurn>=E.maxAttacksPerTurn||E.keywords.some(e=>e.name==="连击"||e.name==="狂怒")||E.isDefending||E.keywords.some(e=>e.name==="不动")),ya=(E,e)=>{if(ve(E,"护甲")){const s=E.armorValue||1;return Math.max(0,e-s)}return e},Se=(E,e)=>{if(E.divineShieldActive&&e>0)return{...E,divineShieldActive:!1};const s=ya(E,e);return{...E,health:E.health-s}},Be=(E,e,s,t,n,i,r)=>{let a=E;const o=[],l=yt[i],d=Vt[i],c=()=>e==="minion"&&t!==void 0?a.players[s].board[t]?.elementStatus:a.players[s].elementStatus,p=m=>{if(e==="minion"&&t!==void 0){const f={...a.players[s]};f.board=[...f.board],f.board[t]={...f.board[t],elementStatus:m};const b=[...a.players];b[s]=f,a={...a,players:b}}else{const f={...a.players[s],elementStatus:m},b=[...a.players];b[s]=f,a={...a,players:b}}},h=c();if(!h){p({type:i,sourcePlayerId:r});const m=e==="minion"&&t!==void 0?a.players[s].board[t]?.name||"随从":a.players[s].name||"英雄";return console.log("[processElementOnTarget] 叠加元素状态:",m,"类型:",i,"targetType:",e,"minionIndex:",t),o.push(`${m} 被叠加了${l}${d}状态`),{state:a,triggered:!1,elementType:i,logMessages:o}}if(h.type===i){p(void 0);const m=e==="minion"&&t!==void 0?a.players[s].board[t]?.name||"随从":a.players[s].name||"英雄";if(i==="fire"){const f=Math.ceil(n*.5);if(o.push(`${l} ${m} 的${d}状态触发！额外受到 ${f} 点伤害`),e==="minion"&&t!==void 0){const b=a.players[s].board[t];b&&(a={...a,pendingVisualEffects:[...a.pendingVisualEffects||[],{type:"fire_explosion",targetMinionId:b.id,targetPlayerId:a.players[s].id,targetType:"minion"}]})}else e==="hero"&&(a={...a,pendingVisualEffects:[...a.pendingVisualEffects||[],{type:"fire_explosion",targetPlayerId:a.players[s].id,targetType:"hero"}]});return{state:a,triggered:!0,elementType:i,extraDamage:f,logMessages:o}}else if(i==="ice"){if(o.push(`${l} ${m} 的${d}状态触发！`),e==="minion"&&t!==void 0){const f={...a.players[s]};f.board=[...f.board],f.board[t]={...f.board[t],frozen:!0};const b=[...a.players];b[s]=f,a={...a,players:b},o.push(`${m} 被冰冻，下回合无法行动`);const g=a.players[s].board[t];a={...a,pendingVisualEffects:[...a.pendingVisualEffects||[],{type:"ice_explosion",targetMinionId:g.id,targetPlayerId:a.players[s].id,targetType:"minion"}]}}else{const f={...a.players[s]};f.frozen=!0;const b=[...a.players];b[s]=f,a={...a,players:b},o.push(`${m} 被冰冻，下回合开始时失去20%能量`),a={...a,pendingVisualEffects:[...a.pendingVisualEffects||[],{type:"ice_explosion",targetPlayerId:a.players[s].id,targetType:"hero"}]}}return{state:a,triggered:!0,elementType:i,logMessages:o}}else if(i==="lightning"){const f=Math.ceil(n*.5);return o.push(`${l} ${m} 的${d}状态触发！`),{state:a,triggered:!0,elementType:i,extraDamage:f,extraDamageIsLightning:!0,logMessages:o}}return{state:a,triggered:!1,elementType:i,logMessages:o}}else{const m=yt[h.type];p({type:i,sourcePlayerId:r});const f=e==="minion"&&t!==void 0?a.players[s].board[t]?.name||"随从":a.players[s].name||"英雄";return o.push(`${f} 的${m}状态被${l}覆盖`),{state:a,triggered:!1,elementType:i,logMessages:o}}},Ue=(E,e,s)=>{switch(e){case"<":return E<s;case"=":return E===s;case">":return E>s;case"<=":return E<=s;case">=":return E>=s;default:return E===s}},et=E=>E==="<="?"≤":E===">="?"≥":E,qt=(E,e,s,t)=>{const n=E.conditionType||(!E.triggerNumbers||E.triggerNumbers.length===6?"guaranteed":"d6");if(n==="guaranteed")return{passed:!0,logMessage:""};if(n==="d6"){if(E.triggerNumbers&&E.triggerNumbers.length>0&&E.triggerNumbers.length<6){const o=Math.floor(Math.random()*6)+1,l=E.triggerNumbers.includes(o);return{passed:l,logMessage:`🎲D6=${o}${l?"✅️":"❌️"} [${E.triggerNumbers.join(",")}]`}}return{passed:!0,logMessage:""}}const i=s===1?2:1,r=e.players[s-1],a=e.players[i-1];if(n==="hero_hp"){const o=E.conditionSides||["friendly"],l=E.conditionOperator||"=",d=E.conditionValue??0,c=E.conditionSideLogic||"and",p=et(l),h=[];if(o.includes("friendly")){const g=r.heroCard?.health??r.health;h.push({label:"我方",hp:g,passed:Ue(g,l,d)})}if(o.includes("enemy")){const g=a.health;h.push({label:"敌方",hp:g,passed:Ue(g,l,d)})}const m=c==="and"?h.every(g=>g.passed):h.some(g=>g.passed),f=o.includes("friendly")&&o.includes("enemy")?"双方":h[0]?.label||"",b=h.map(g=>`${g.label}${g.hp}${p}${d}`);return{passed:m,logMessage:`判断${f}英雄血量 ${b.join(c==="and"?"且":"或")}${m?"✅️":"❌️"}`}}if(n==="minion_count"){const o=E.conditionSides||["friendly"],l=E.conditionOperator||"=",d=E.conditionValue??0,c=E.conditionSideLogic||"and",p=et(l),h=[];if(o.includes("friendly")){const g=r.board.length;h.push({label:"我方",count:g,passed:Ue(g,l,d)})}if(o.includes("enemy")){const g=a.board.length;h.push({label:"敌方",count:g,passed:Ue(g,l,d)})}const m=c==="and"?h.every(g=>g.passed):h.some(g=>g.passed),f=o.includes("friendly")&&o.includes("enemy")?"双方":h[0]?.label||"",b=h.map(g=>`${g.label}${g.count}${p}${d}`);return{passed:m,logMessage:`判断${f}随从数 ${b.join(c==="and"?"且":"或")}${m?"✅️":"❌️"}`}}if(n==="hand_count"){const o=E.conditionSides||["friendly"],l=E.conditionOperator||"=",d=E.conditionValue??0,c=E.conditionSideLogic||"and",p=et(l),h=[];if(o.includes("friendly")){const g=r.hand.length;h.push({label:"我方",count:g,passed:Ue(g,l,d)})}if(o.includes("enemy")){const g=a.hand.length;h.push({label:"敌方",count:g,passed:Ue(g,l,d)})}const m=c==="and"?h.every(g=>g.passed):h.some(g=>g.passed),f=o.includes("friendly")&&o.includes("enemy")?"双方":h[0]?.label||"",b=h.map(g=>`${g.label}${g.count}${p}${d}`);return{passed:m,logMessage:`判断${f}手牌数 ${b.join(c==="and"?"且":"或")}${m?"✅️":"❌️"}`}}if(n==="exists_minion"){const o=E.conditionMinionName?.trim();if(!o)return{passed:!0,logMessage:""};const l=[...r.board,...a.board].some(d=>d.name===o);return{passed:l,logMessage:`判断场上存在"${o}"${l?"✅️":"❌️"}`}}if(n==="target_attr"){const o=E.conditionTargetAttrs;if(!o)return{passed:!0,logMessage:""};const l=t?.targetMinion;if(!l)return{passed:!1,logMessage:"判断目标属性：无目标❌️"};const d={cost:"能量花费",attack:"攻击力",health:"生命值"},c={cost:m=>m.cost,attack:m=>m.attack,health:m=>m.health},p=[];for(const m of["cost","attack","health"]){const f=o[m];if(f?.enabled){const b=c[m](l),g=Ue(b,f.operator||"=",f.value);p.push({label:`${d[m]}${b}${et(f.operator||"=")}${f.value}`,passed:g})}}if(p.length===0)return{passed:!0,logMessage:""};const h=p.every(m=>m.passed);return{passed:h,logMessage:`判断目标${p.map(m=>m.label).join("且")}${h?"✅️":"❌️"}`}}return{passed:!0,logMessage:""}},Te=(E,e,s,t,n,i)=>{let r=E;for(const a of e){const o=qt(a,r,s,i);o.passed?(o.logMessage?r=ue(r,s,"condition",`${t} ${o.logMessage} 发动了【${n}】技能`):r=ue(r,s,"minion_skill",`${t} 发动了【${n}】技能`),r=we(r,a,s,i)):r=ue(r,s,"condition",`${t} ${o.logMessage} 条件不满足，跳过`)}return r},we=(E,e,s,t)=>{if(console.log("[executeEffect] 开始执行效果:",e.effect,"moment:",e.moment,"targets:",e.targets,"ownerPlayerId:",s,"context:",t),e.isOpponent&&(s=s===1?2:1,console.log("[executeEffect] 对手目标，切换ownerPlayerId为:",s)),e.triggerNumbers&&e.triggerNumbers.length>0&&e.triggerNumbers.length<6){const d=Math.floor(Math.random()*6)+1;if(!e.triggerNumbers.includes(d))return ue(E,s,"dice_roll",`🎲 = ${d}❌️ [${e.triggerNumbers.join(",")}]`);E=ue(E,s,"dice_roll",`🎲 = ${d}✅️ [${e.triggerNumbers.join(",")}]`)}if(!e.effect)return console.log("[executeEffect] 效果为空，跳过"),E;const n=s-1,i=s===1?2:1,r=i-1;let a={...E};if(a.players=[...E.players],e.isRandomTarget&&e.randomTargetTimes&&e.randomTargetTimes>1){for(let d=0;d<e.randomTargetTimes;d++){const c={...e,randomTargetTimes:1};a=we(a,c,s,t),a={...a},a.players=[...a.players]}return a}if(a.soundEffects=[...E.soundEffects||[]],e.effect==="抽牌"&&(a.sharedDeck=[...E.sharedDeck],a.newlyDrawnCardIds=[...E.newlyDrawnCardIds]),e.effect==="抽牌"){const d=e.value||1;for(let c=0;c<d;c++)nt(a,s),a.newlyDrawnCardIds=[...a.newlyDrawnCardIds];return console.log("executeEffect 抽牌完成, 玩家手牌数:",a.players[n].hand.length),a}if(e.effect==="弃牌"){const d=Math.min(e.value||1,a.players[n].hand.length),c=[];for(let p=0;p<d;p++){const h=a.players[n].hand.shift();h&&(c.push(h),console.log(`[executeEffect] 弃牌: ${h.name}`))}return a.discardPile=[...c,...a.discardPile],console.log("executeEffect 弃牌完成, 玩家手牌数:",a.players[n].hand.length),a}let o=e.targets||[];const l=o.some(d=>d.includes("所有"));if(e.isRandomTarget&&(o.length>1||l)){const d=Math.floor(Math.random()*o.length),c=o[d];c.includes("所有")||(a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${c}`)),o=[c]}if(e.effect==="造成伤害"){a.soundEffects.push("wood");const d=e.value||1,c=e.elementType,p=t?.excludeMinionId,h=[];let m=0;const f=(b,g,y,x)=>{if(!c)return b;const k=Be(b,"minion",y,g,x,c,s);let u=k.state;if(k.triggered&&k.extraDamage){if(c==="fire"){const w=u.players[y],I=w.board[g];if(I&&I.health>0){const S=Se(I,k.extraDamage);u=ue(u,s,"element",`🔥${I.name}受到了额外的${k.extraDamage}点灼烧伤害`);const T={...w,board:[...w.board]};T.board[g]=S;const D=[...u.players];D[y]=T,u={...u,players:D}}}else if(c==="lightning"){const w=u.players[y],I=w.board.filter(T=>T.health>0),S=[];if(I.forEach((T,D)=>S.push({type:"minion",idx:D})),w.health>0&&S.push({type:"hero"}),S.length>0){const T=S[Math.floor(Math.random()*S.length)];if(T.type==="minion"){const O=w.board[T.idx],P=Se(O,k.extraDamage);u=ue(u,s,"element",`⚡️${O.name}受到了额外的${k.extraDamage}点电击伤害`);const B={...w,board:[...w.board]};B.board[T.idx]=P;const $=[...u.players];$[y]=B,u={...u,players:$}}else{u=ue(u,s,"element",`⚡️${w.name}受到了额外的${k.extraDamage}点电击伤害`);const O={...w,health:w.health-k.extraDamage},P=[...u.players];P[y]=O,u={...u,players:P}}const D={type:"lightning_explosion",targetPlayerId:w.id,targetType:T.type==="hero"?"hero":"minion"};T.type==="minion"&&(D.targetMinionId=w.board[T.idx].id),u={...u,pendingVisualEffects:[...u.pendingVisualEffects||[],D]}}}}return u};for(const b of o)if(b==="我方所有随从"){let g={...a.players[n]},y=g.board.filter(u=>!(p&&u.id===p));if(y.length===0&&e.isRandomTarget){if(a=ue(a,s,"minion_skill","🎯 我方无随从，随机目标改为我方英雄"),m++,g.health-=d,a.players[n]=g,c){const u=Be(a,"hero",n,void 0,d,c,s);a=u.state;for(const w of u.logMessages)a=ue(a,s,"element",w);if(u.triggered&&u.extraDamage&&c==="fire"){const w={...a.players[n]};w.health-=u.extraDamage,a.players[n]=w}if(u.triggered&&u.extraDamageIsLightning){const w=u.extraDamage,I=a.players[n],S=I.board.filter(D=>D.health>0),T=[];if(S.forEach(D=>T.push({type:"minion",idx:I.board.indexOf(D)})),I.health>0&&T.push({type:"hero",idx:-1}),T.length>0){const D=T[Math.floor(Math.random()*T.length)];if(D.type==="hero"){const O={...a.players[n]};O.health-=w,a.players[n]=O}else{const O={...I};O.board=[...O.board],O.board[D.idx]=Se(O.board[D.idx],w),a.players[n]=O}}}}a=Fe(a);continue}if(e.isRandomTarget&&y.length>1){const u=Math.floor(Math.random()*y.length),w=y[u];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${w.name}`),y=[w]}if(y.forEach(u=>h.push(u.name)),g.board=g.board.map(u=>p&&u.id===p||!y.some(w=>w.id===u.id)?u:Se(u,d)),a.players[n]=g,c)for(const u of y){const w=g.board.findIndex(I=>I.id===u.id&&I.health>0);w!==-1&&(a=f(a,w,n,d),g={...a.players[n]})}for(const u of g.board){if(p&&u.id===p)continue;const w=(u.effects||[]).filter(I=>me(I,"失去生命时")&&I.effect);for(const I of w)a=we(a,I,s,{sourceCard:u,attackerMinion:u}),a={...a},a.players=[...a.players],g={...a.players[n]}}const x=g.board.filter(u=>u.health<=0);g.board=g.board.filter(u=>u.health>0);const k=x.map(u=>({...u,health:u.maxHealth}));a.discardPile=[...k,...a.discardPile],a.players[n]=g,console.log("[造成伤害-我方所有随从] 死亡随从数量:",x.length);for(const u of x){console.log("[造成伤害-我方所有随从] 检查死亡随从:",u.name);const w=(u.effects||[]).filter(I=>me(I,"死亡时")&&I.effect);console.log("[造成伤害-我方所有随从] 死亡时效果:",w);for(const I of w)a=we(a,I,s,{attackerMinion:u,sourceCard:u})}}else if(b==="敌方所有随从"){let g={...a.players[r]},y=[...g.board];if(y.length===0&&e.isRandomTarget){if(a=ue(a,s,"minion_skill","🎯 敌方无随从，随机目标改为敌方英雄"),m++,g.health-=d,a.players[r]=g,c){const u=Be(a,"hero",r,void 0,d,c,s);a=u.state;for(const w of u.logMessages)a=ue(a,s,"element",w);if(u.triggered&&u.extraDamage&&c==="fire"){const w={...a.players[r]};w.health-=u.extraDamage,a.players[r]=w}if(u.triggered&&u.extraDamageIsLightning){const w=u.extraDamage,I=a.players[r],S=I.board.filter(D=>D.health>0),T=[];if(S.forEach(D=>T.push({type:"minion",idx:I.board.indexOf(D)})),I.health>0&&T.push({type:"hero",idx:-1}),T.length>0){const D=T[Math.floor(Math.random()*T.length)];if(D.type==="hero"){const O={...a.players[r]};O.health-=w,a.players[r]=O}else{const O={...I};O.board=[...O.board],O.board[D.idx]=Se(O.board[D.idx],w),a.players[r]=O}}}}a=Fe(a);continue}if(e.isRandomTarget&&y.length>1){const u=Math.floor(Math.random()*y.length),w=y[u];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${w.name}`),y=[w]}if(y.forEach(u=>h.push(u.name)),g.board=g.board.map(u=>y.some(w=>w.id===u.id)?Se(u,d):u),a.players[r]=g,c)for(const u of y){const w=g.board.findIndex(I=>I.id===u.id&&I.health>0);w!==-1&&(a=f(a,w,r,d),g={...a.players[r]})}for(const u of g.board){const w=(u.effects||[]).filter(I=>me(I,"失去生命时")&&I.effect);for(const I of w)a=we(a,I,i,{sourceCard:u,attackerMinion:u}),a={...a},a.players=[...a.players],g={...a.players[r]}}const x=g.board.filter(u=>u.health<=0);g.board=g.board.filter(u=>u.health>0);const k=x.map(u=>({...u,health:u.maxHealth}));a.discardPile=[...k,...a.discardPile],a.players[r]=g,console.log("[造成伤害-敌方所有随从] 死亡随从数量:",x.length);for(const u of x){console.log("[造成伤害-敌方所有随从] 检查死亡随从:",u.name);const w=(u.effects||[]).filter(I=>me(I,"死亡时")&&I.effect);console.log("[造成伤害-敌方所有随从] 死亡时效果:",w);for(const I of w)a=we(a,I,i,{attackerMinion:u,sourceCard:u})}}else if(b==="敌方英雄"){const g={...a.players[r]};if(g.health-=d,a.players[r]=g,m++,c){const y=Be(a,"hero",r,void 0,d,c,s);a=y.state;for(const x of y.logMessages)a=ue(a,s,"element",x);if(y.triggered&&y.extraDamage&&c==="fire"){const x={...a.players[r]};x.health-=y.extraDamage,a.players[r]=x}if(y.triggered&&y.extraDamageIsLightning){const x=y.extraDamage,k=a.players[r],u=k.board.filter(I=>I.health>0),w=[];if(u.forEach(I=>w.push({type:"minion",idx:k.board.indexOf(I)})),k.health>0&&w.push({type:"hero",idx:-1}),w.length>0){const I=w[Math.floor(Math.random()*w.length)];if(I.type==="hero"){const S={...a.players[r]};S.health-=x,a.players[r]=S}else{const S={...k};S.board=[...S.board],S.board[I.idx]=Se(S.board[I.idx],x),a.players[r]=S}}}}a=Fe(a)}else if(b==="我方英雄"){const g={...a.players[n]};if(g.health-=d,a.players[n]=g,m++,c){const y=Be(a,"hero",n,void 0,d,c,s);a=y.state;for(const x of y.logMessages)a=ue(a,s,"element",x);if(y.triggered&&y.extraDamage&&c==="fire"){const x={...a.players[n]};x.health-=y.extraDamage,a.players[n]=x}if(y.triggered&&y.extraDamageIsLightning){const x=y.extraDamage,k=a.players[n],u=k.board.filter(I=>I.health>0),w=[];if(u.forEach(I=>w.push({type:"minion",idx:k.board.indexOf(I)})),k.health>0&&w.push({type:"hero",idx:-1}),w.length>0){const I=w[Math.floor(Math.random()*w.length)];if(I.type==="hero"){const S={...a.players[n]};S.health-=x,a.players[n]=S}else{const S={...k};S.board=[...S.board],S.board[I.idx]=Se(S.board[I.idx],x),a.players[n]=S}}}}a=Fe(a)}else if(b==="攻击目标"&&t?.targetMinion){const g=t.targetPlayerId?t.targetPlayerId-1:r;let y={...a.players[g]};const x=y.board.findIndex(k=>k.id===t.targetCardId);if(x!==-1){if(h.push(t.targetMinion.name),y.board=y.board.map((w,I)=>I===x?Se(w,d):w),a.players[g]=y,c){const w=y.board.findIndex(I=>I.id===t.targetCardId&&I.health>0);w!==-1&&(a=f(a,w,g,d),y={...a.players[g]})}const k=y.board.find(w=>w.id===t.targetCardId);if(k){const w=(k.effects||[]).filter(I=>me(I,"失去生命时")&&I.effect);for(const I of w)a=we(a,I,g+1,{sourceCard:k,attackerMinion:k}),a={...a},a.players=[...a.players],y={...a.players[g]}}const u=y.board.find(w=>w.id===t.targetCardId&&w.health<=0);if(u){y.board=y.board.filter(S=>S.health>0);const w={...u,health:u.maxHealth};a.discardPile=[w,...a.discardPile],a.players[g]=y;const I=(u.effects||[]).filter(S=>me(S,"死亡时")&&S.effect);for(const S of I)a=we(a,S,g+1,{attackerMinion:u,sourceCard:u})}else a.players[g]=y}}else if((b==="选择目标"||b==="选择随从")&&t?.targetMinion){const g=t.targetPlayerId?t.targetPlayerId-1:r;let y={...a.players[g]};const x=y.board.findIndex(k=>k.id===t.targetCardId);if(x!==-1){if(h.push(t.targetMinion.name),y.board=y.board.map((w,I)=>I===x?Se(w,d):w),a.players[g]=y,c){const w=y.board.findIndex(I=>I.id===t.targetCardId&&I.health>0);w!==-1&&(a=f(a,w,g,d),y={...a.players[g]})}const k=y.board.find(w=>w.id===t.targetCardId);if(k){const w=(k.effects||[]).filter(I=>me(I,"失去生命时")&&I.effect);for(const I of w)a=we(a,I,g+1,{sourceCard:k,attackerMinion:k}),a={...a},a.players=[...a.players],y={...a.players[g]}}const u=y.board.find(w=>w.id===t.targetCardId&&w.health<=0);if(u){y.board=y.board.filter(S=>S.health>0);const w={...u,health:u.maxHealth};a.discardPile=[w,...a.discardPile],a.players[g]=y;const I=(u.effects||[]).filter(S=>me(S,"死亡时")&&S.effect);for(const S of I)a=we(a,S,g+1,{attackerMinion:u,sourceCard:u})}else a.players[g]=y}}else if(b==="选择目标"&&!t?.targetMinion&&t?.targetPlayerId){const g=t.targetPlayerId-1,y={...a.players[g]};if(y.health-=d,a.players[g]=y,m++,c){const x=Be(a,"hero",g,void 0,d,c,s);a=x.state;for(const k of x.logMessages)a=ue(a,s,"element",k);if(x.triggered&&x.extraDamage&&c==="fire"){const k={...a.players[g]};k.health-=x.extraDamage,a.players[g]=k}if(x.triggered&&x.extraDamageIsLightning){const k=x.extraDamage,u=a.players[g],w=u.board.filter(S=>S.health>0),I=[];if(w.forEach(S=>I.push({type:"minion",idx:u.board.indexOf(S)})),u.health>0&&I.push({type:"hero",idx:-1}),I.length>0){const S=I[Math.floor(Math.random()*I.length)];if(S.type==="hero"){const T={...a.players[g]};T.health-=k,a.players[g]=T}else{const T={...u};T.board=[...T.board],T.board[S.idx]=Se(T.board[S.idx],k),a.players[g]=T}}}}a=Fe(a)}else if(b==="自己"&&t?.attackerMinion){let g={...a.players[n]};if(h.push(t.attackerMinion.name),g.board=g.board.map(k=>k.id===t.attackerMinion.id?Se(k,d):k),a.players[n]=g,c){const k=g.board.findIndex(u=>u.id===t.attackerMinion.id&&u.health>0);k!==-1&&(a=f(a,k,n,d),g={...a.players[n]})}const y=g.board.find(k=>k.id===t.attackerMinion.id);if(y){const k=(y.effects||[]).filter(u=>me(u,"失去生命时")&&u.effect);for(const u of k)a=we(a,u,s,{sourceCard:y,attackerMinion:y}),a={...a},a.players=[...a.players],g={...a.players[n]}}const x=g.board.find(k=>k.id===t.attackerMinion.id&&k.health<=0);if(x){console.log("[造成伤害-自己] 随从死亡:",x.name,"effects:",x.effects),g.board=g.board.filter(w=>w.health>0);const k={...x,health:x.maxHealth};a.discardPile=[k,...a.discardPile],a.players[n]=g;const u=(x.effects||[]).filter(w=>me(w,"死亡时")&&w.effect);console.log("[造成伤害-自己] 死亡时效果:",u);for(const w of u)console.log("[造成伤害-自己] 执行死亡效果:",w),a=we(a,w,s,{attackerMinion:x,sourceCard:x})}else a.players[n]=g}if(h.length>0||m>0){const b=[];if(h.length>0){const y=[...new Set(h)];y.length<=3?b.push(y.join("、")):b.push(`${y.slice(0,3).join("、")}等${y.length}个目标`)}m>0&&b.push(m===1?"英雄":`${m}位英雄`);const g=`对${b.join("、")}造成了${d}点伤害`;a=ue(a,s,"damage",g)}}if(e.effect==="给予印记"){const d=e.value||1,c=[];let p=0;for(const h of o)if(h==="我方所有随从"){const m={...a.players[n]};let f=[...m.board];if(e.isRandomTarget&&f.length>1){const x=Math.floor(Math.random()*f.length),k=f[x];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${k.name}`),f=[k]}f.forEach(x=>c.push(x.name));const b=m.board.map(x=>f.some(k=>k.id===x.id)?{...x,markCount:(x.markCount||0)+d}:x),g=b.filter(x=>x.health<=0);m.board=b.filter(x=>x.health>0);const y=g.map(x=>({...x,health:x.maxHealth}));a.discardPile=[...y,...a.discardPile],a.players[n]=m}else if(h==="敌方所有随从"){const m={...a.players[r]};let f=[...m.board];if(e.isRandomTarget&&f.length>1){const x=Math.floor(Math.random()*f.length),k=f[x];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${k.name}`),f=[k]}f.forEach(x=>c.push(x.name));const b=m.board.map(x=>f.some(k=>k.id===x.id)?{...x,markCount:(x.markCount||0)+d}:x),g=b.filter(x=>x.health<=0);m.board=b.filter(x=>x.health>0);const y=g.map(x=>({...x,health:x.maxHealth}));a.discardPile=[...y,...a.discardPile],a.players[r]=m}else if(h==="敌方英雄"){const m={...a.players[r]};m.heroMarkCount=(m.heroMarkCount||0)+d,a.players[r]=m,p++}else if(h==="我方英雄"){const m={...a.players[n]};m.heroMarkCount=(m.heroMarkCount||0)+d,a.players[n]=m,p++}else if((h==="攻击目标"||h==="选择目标"||h==="选择随从")&&t?.targetMinion){const m=t.targetPlayerId?t.targetPlayerId-1:r,f={...a.players[m]},b=f.board.findIndex(g=>g.id===t.targetCardId);if(b!==-1){c.push(t.targetMinion.name);const g=f.board.map((k,u)=>u===b?{...k,markCount:(k.markCount||0)+d}:k),y=g.filter(k=>k.health<=0);f.board=g.filter(k=>k.health>0);const x=y.map(k=>({...k,health:k.maxHealth}));a.discardPile=[...x,...a.discardPile],a.players[m]=f}}else if((h==="攻击目标"||h==="选择目标")&&!t?.targetMinion){const m=t?.targetPlayerId?t.targetPlayerId-1:r,f={...a.players[m]};f.heroMarkCount=(f.heroMarkCount||0)+d,a.players[m]=f,p++}if(c.length>0||p>0){const h=[];if(c.length>0){const f=[...new Set(c)];f.length<=3?h.push(f.join("、")):h.push(`${f.slice(0,3).join("、")}等${f.length}个目标`)}p>0&&h.push(p===1?"英雄":`${p}位英雄`);const m=`对${h.join("、")}给予了${d}点印记`;a=ue(a,s,"minion_skill",m)}}if(e.effect==="给予词条"){const d=e.grantedKeywordName||"",c=e.grantedKeywordValue??1;if(!d)return console.log("[executeEffect] 给予词条效果没有指定词条，跳过"),a;const p=[["机动","嘲讽"],["连击","狂怒"],["暴虐","斩首"],["🔥","❄️","⚡️"]],h={};for(const g of p)for(const y of g)h[y]=g;const m=g=>{if(d!=="护甲"&&g.keywords.some(x=>x.name===d))return d;const y=h[d];if(!y)return null;for(const x of g.keywords)if(x.name!==d&&y.includes(x.name))return x.name;return null},f=[],b=[];for(const g of o)if(g==="我方所有随从"){const y={...a.players[n]};let x=[...y.board];if(e.isRandomTarget&&x.length>1){const k=Math.floor(Math.random()*x.length),u=x[k];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${u.name}`),x=[u]}y.board=y.board.map(k=>{if(!x.some(D=>D.id===k.id))return k;const u=m(k);if(u)return b.push(`${k.name}（已有【${u}】）`),k;f.push(k.name);const w=k.keywords.find(D=>D.name==="护甲");let I=w?w.value??1:0;d==="护甲"&&(I+=c);let S=[...k.keywords];d==="护甲"&&(S=S.filter(D=>D.name!=="护甲"));const T=Object.values(Ee).find(D=>D.name===d);return T&&S.push(T.hasValue&&!["🔥","❄️","⚡️"].includes(d)?{...T,value:d==="护甲"?I:c}:{...T}),{...k,keywords:S,armorValue:I>0?I:void 0,divineShieldActive:d==="圣盾"?!0:k.divineShieldActive,canAttackHeroes:d==="伏击"?!0:k.canAttackHeroes,canAttackMinions:d==="突击"?!0:k.canAttackMinions,maxAttacksPerTurn:d==="连击"?k.maxAttacksPerTurn>=2?k.maxAttacksPerTurn:2:k.maxAttacksPerTurn,frozen:d==="❄️"?!1:k.frozen}}),a.players[n]=y}else if(g==="敌方所有随从"){const y={...a.players[r]};let x=[...y.board];if(e.isRandomTarget&&x.length>1){const k=Math.floor(Math.random()*x.length),u=x[k];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${u.name}`),x=[u]}y.board=y.board.map(k=>{if(!x.some(D=>D.id===k.id))return k;const u=m(k);if(u)return b.push(`${k.name}（已有【${u}】）`),k;f.push(k.name);const w=k.keywords.find(D=>D.name==="护甲");let I=w?w.value??1:0;d==="护甲"&&(I+=c);let S=[...k.keywords];d==="护甲"&&(S=S.filter(D=>D.name!=="护甲"));const T=Object.values(Ee).find(D=>D.name===d);return T&&S.push(T.hasValue&&!["🔥","❄️","⚡️"].includes(d)?{...T,value:d==="护甲"?I:c}:{...T}),{...k,keywords:S,armorValue:I>0?I:void 0,divineShieldActive:d==="圣盾"?!0:k.divineShieldActive,canAttackHeroes:d==="伏击"?!0:k.canAttackHeroes,canAttackMinions:d==="突击"?!0:k.canAttackMinions,maxAttacksPerTurn:d==="连击"?k.maxAttacksPerTurn>=2?k.maxAttacksPerTurn:2:k.maxAttacksPerTurn,frozen:d==="❄️"?!1:k.frozen}}),a.players[r]=y}else if((g==="选择目标"||g==="选择随从"||g==="攻击目标")&&t?.targetMinion){const y=t.targetPlayerId?t.targetPlayerId-1:r,x={...a.players[y]},k=x.board.findIndex(u=>u.id===t.targetCardId);if(k!==-1){const u=x.board[k],w=m(u);if(w)b.push(`${u.name}（已有【${w}】）`);else{f.push(u.name);const I=u.keywords.find(O=>O.name==="护甲");let S=I?I.value??1:0;d==="护甲"&&(S+=c);let T=[...u.keywords];d==="护甲"&&(T=T.filter(O=>O.name!=="护甲"));const D=Object.values(Ee).find(O=>O.name===d);D&&T.push(D.hasValue&&!["🔥","❄️","⚡️"].includes(d)?{...D,value:d==="护甲"?S:c}:{...D}),x.board[k]={...u,keywords:T,armorValue:S>0?S:void 0,divineShieldActive:d==="圣盾"?!0:u.divineShieldActive,canAttackHeroes:d==="伏击"?!0:u.canAttackHeroes,canAttackMinions:d==="突击"?!0:u.canAttackMinions,maxAttacksPerTurn:d==="连击"?u.maxAttacksPerTurn>=2?u.maxAttacksPerTurn:2:u.maxAttacksPerTurn,frozen:d==="❄️"?!1:u.frozen}}a.players[y]=x}}else if(g==="自己"&&t?.attackerMinion){const y=t.attackerMinion,x={...a.players[n]},k=x.board.findIndex(u=>u.id===y.id);if(k!==-1){const u=x.board[k],w=m(u);if(w)b.push(`${u.name}（已有【${w}】）`);else{f.push(u.name);const I=u.keywords.find(O=>O.name==="护甲");let S=I?I.value??1:0;d==="护甲"&&(S+=c);let T=[...u.keywords];d==="护甲"&&(T=T.filter(O=>O.name!=="护甲"));const D=Object.values(Ee).find(O=>O.name===d);D&&T.push(D.hasValue&&!["🔥","❄️","⚡️"].includes(d)?{...D,value:d==="护甲"?S:c}:{...D}),x.board[k]={...u,keywords:T,armorValue:S>0?S:void 0,divineShieldActive:d==="圣盾"?!0:u.divineShieldActive,canAttackHeroes:d==="伏击"?!0:u.canAttackHeroes,canAttackMinions:d==="突击"?!0:u.canAttackMinions,maxAttacksPerTurn:d==="连击"?u.maxAttacksPerTurn>=2?u.maxAttacksPerTurn:2:u.maxAttacksPerTurn,frozen:d==="❄️"?!1:u.frozen}}a.players[n]=x}}if(f.length>0){const g=d==="护甲"?`【${d}${c}】`:`【${d}】`,y=f.length<=3?f.join("、"):`${f.slice(0,3).join("、")}等${f.length}个目标`;a=ue(a,s,"minion_skill",`给予${y}${g}`)}b.length>0&&(a=ue(a,s,"minion_skill",`由于互斥，${b.join("、")}无法获得【${d}】`))}if(e.effect==="属性变化"){const d=e.attackValue??0,c=e.healthValue??0,p=e.isAttackPositive?d:-d,h=e.isHealthPositive?c:-c,m=(e.costValue||0)>0?e.isCostSet||e.isCostPositive?e.costValue||0:-(e.costValue||0):0,f=[];for(const b of o)if(b==="我方所有随从"){const g={...a.players[n]};let y=[...g.board];if(e.isRandomTarget&&y.length>1){const u=Math.floor(Math.random()*y.length),w=y[u];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${w.name}`),y=[w]}y.forEach(u=>f.push(u.name)),g.board=g.board.map(u=>{if(!y.some(T=>T.id===u.id))return u;const w=e.isAttackSet?d-u.attack:p,I=e.isHealthSet?c-u.health:h,S=u.health+I;return{...u,attack:Math.max(0,u.attack+w),health:S,maxHealth:Math.max(1,u.maxHealth+I)}});const x=g.board.filter(u=>u.health<=0);g.board=g.board.filter(u=>u.health>0);const k=x.map(u=>({...u,health:u.maxHealth}));a.discardPile=[...k,...a.discardPile],a.players[n]=g,console.log("[属性变化-我方所有随从] 死亡随从数量:",x.length);for(const u of x){console.log("[属性变化-我方所有随从] 检查死亡随从:",u.name,"effects:",u.effects);const w=(u.effects||[]).filter(I=>me(I,"死亡时")&&I.effect);console.log("[属性变化-我方所有随从] 死亡时效果:",w);for(const I of w)console.log("[属性变化-我方所有随从] 执行死亡效果:",I),a=we(a,I,s,{attackerMinion:u})}}else if(b==="敌方所有随从"){const g={...a.players[r]};let y=[...g.board];if(e.isRandomTarget&&y.length>1){const u=Math.floor(Math.random()*y.length),w=y[u];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${w.name}`),y=[w]}y.forEach(u=>f.push(u.name)),g.board=g.board.map(u=>{if(!y.some(T=>T.id===u.id))return u;const w=e.isAttackSet?d-u.attack:p,I=e.isHealthSet?c-u.health:h,S=u.health+I;return{...u,attack:Math.max(0,u.attack+w),health:S,maxHealth:Math.max(1,u.maxHealth+I)}});const x=g.board.filter(u=>u.health<=0);g.board=g.board.filter(u=>u.health>0);const k=x.map(u=>({...u,health:u.maxHealth}));a.discardPile=[...k,...a.discardPile],a.players[r]=g,console.log("[属性变化-敌方所有随从] 死亡随从数量:",x.length);for(const u of x){console.log("[属性变化-敌方所有随从] 检查死亡随从:",u.name,"effects:",u.effects);const w=(u.effects||[]).filter(I=>me(I,"死亡时")&&I.effect);console.log("[属性变化-敌方所有随从] 死亡时效果:",w);for(const I of w)console.log("[属性变化-敌方所有随从] 执行死亡效果:",I),a=we(a,I,i,{attackerMinion:u})}}else if((b==="攻击目标"||b==="选择目标"||b==="选择随从")&&t?.targetMinion){const g=t.targetPlayerId?t.targetPlayerId-1:r,y={...a.players[g]},x=y.board.findIndex(k=>k.id===t.targetCardId);if(x!==-1){f.push(t.targetMinion.name),y.board=y.board.map((u,w)=>{if(w===x){const I=e.isAttackSet?d-u.attack:p,S=e.isHealthSet?c-u.health:h,T=u.health+S;return{...u,attack:Math.max(0,u.attack+I),health:T,maxHealth:Math.max(1,u.maxHealth+S)}}return u});const k=y.board.find(u=>u.id===t.targetCardId&&u.health<=0);if(k){y.board=y.board.filter(I=>I.health>0);const u={...k,health:k.maxHealth};a.discardPile=[u,...a.discardPile];const w=(k.effects||[]).filter(I=>me(I,"死亡时")&&I.effect);for(const I of w)a=we(a,I,g+1,{attackerMinion:k})}a.players[g]=y}}else if(b==="自己"&&t?.attackerMinion){const g={...a.players[n]};f.push(t.attackerMinion.name),g.board=g.board.map(x=>{if(x.id===t.attackerMinion.id){const k=e.isAttackSet?d-x.attack:p,u=e.isHealthSet?c-x.health:h,w=x.health+u;return{...x,attack:Math.max(0,x.attack+k),health:w,maxHealth:Math.max(1,x.maxHealth+u)}}return x});const y=g.board.find(x=>x.id===t.attackerMinion.id&&x.health<=0);if(y){g.board=g.board.filter(u=>u.health>0);const x={...y,health:y.maxHealth};a.discardPile=[x,...a.discardPile],a.players[n]=g;const k=(y.effects||[]).filter(u=>me(u,"死亡时")&&u.effect);for(const u of k)a=we(a,u,s,{attackerMinion:y})}else a.players[n]=g;console.log("属性变化完成")}else if(b==="卡牌"){const g=e.summonSource==="enemy_hand"?r:n,y={...a.players[g]};let x=[...y.hand];if(new Set(x),e.isRandom&&x.length>0){const k=Math.floor(Math.random()*x.length);x=[x[k]]}x.forEach(k=>f.push(k.name)),y.hand=y.hand.map(k=>{if(!x.some(w=>w===k))return k;let u=k.cost;if((e.costValue||0)>0&&(e.isCostSet?u=e.costValue||0:e.isCostPositive?u=k.cost+(e.costValue||0):u=k.cost-(e.costValue||0),u=Math.max(0,u)),k.type==="minion"){const w=e.isAttackSet?d-(k.attack||0):p,I=e.isHealthSet?c-(k.health||0):h;return{...k,cost:u,attack:Math.max(0,(k.attack||0)+w),health:(k.health||0)+I,maxHealth:Math.max(1,(k.maxHealth||k.health||1)+I)}}return{...k,cost:u}}),a.players[g]=y}if(f.length>0)if(o.includes("卡牌")){const g=e.summonSource==="enemy_hand"?"敌方":"我方",y=e.isRandom?"随机一张":"所有",x=e.isCostSet?"=":m>=0?"+":"",k=e.isAttackSet?"=":p>=0?"+":"",u=e.isHealthSet?"=":h>=0?"+":"",w=e.isCostSet?e.costValue||0:m,I=e.isAttackSet?d:p,S=e.isHealthSet?c:h;let T=[];(e.costValue||0)>0&&T.push(`费用${x}${w}`),(e.attackValue||0)>0&&T.push(`攻击${k}${I}`),(e.healthValue||0)>0&&T.push(`血量${u}${S}`),T.length===0&&T.push("无变化");const D=`使${g}${y}手牌${T.join("/")}`;a=ue(a,s,"minion_skill",D)}else{const g=e.isAttackSet?"=":p>=0?"+":"",y=e.isHealthSet?"=":h>=0?"+":"",x=e.isAttackSet?d:p,k=e.isHealthSet?c:h,u=[...new Set(f)],I=`对${u.length<=3?u.join("、"):`${u.slice(0,3).join("、")}等${u.length}个目标`}的属性变为${g}${x}/${y}${k}`;a=ue(a,s,"minion_skill",I)}}if(e.effect==="治愈"){const d=e.value||1,c=[];let p=0;for(const h of o)if(h==="我方所有随从"){const m={...a.players[n]};let f=[...m.board];if(e.isRandomTarget&&f.length>1){const b=Math.floor(Math.random()*f.length),g=f[b];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${g.name}`),f=[g]}f.forEach(b=>c.push(b.name)),m.board=m.board.map(b=>f.some(g=>g.id===b.id)?{...b,health:Math.min(b.maxHealth,b.health+d)}:b),a.players[n]=m}else if(h==="敌方所有随从"){const m={...a.players[r]};let f=[...m.board];if(e.isRandomTarget&&f.length>1){const b=Math.floor(Math.random()*f.length),g=f[b];a=ue(a,s,"minion_skill",`🎯 随机选择目标: ${g.name}`),f=[g]}f.forEach(b=>c.push(b.name)),m.board=m.board.map(b=>f.some(g=>g.id===b.id)?{...b,health:Math.min(b.maxHealth,b.health+d)}:b),a.players[r]=m}else if(h==="敌方英雄"){p++;const m={...a.players[r]};m.health=Math.min(m.maxHealth,m.health+d),a.players[r]=m}else if(h==="我方英雄"){p++;const m={...a.players[n]};m.health=Math.min(m.maxHealth,m.health+d),a.players[n]=m}else if((h==="攻击目标"||h==="选择目标"||h==="选择随从")&&t?.targetMinion){const m=t.targetPlayerId?t.targetPlayerId-1:r,f={...a.players[m]},b=f.board.findIndex(g=>g.id===t.targetCardId);b!==-1&&(c.push(t.targetMinion.name),f.board=f.board.map((g,y)=>y===b?{...g,health:Math.min(g.maxHealth,g.health+d)}:g),a.players[m]=f)}else if((h==="攻击目标"||h==="选择目标")&&!t?.targetMinion){p++;const m=t?.targetPlayerId?t.targetPlayerId-1:r,f={...a.players[m]};f.health=Math.min(f.maxHealth,f.health+d),a.players[m]=f}else if(h==="自己"&&t?.attackerMinion){c.push(t.attackerMinion.name);const m={...a.players[n]};m.board=m.board.map(f=>f.id===t.attackerMinion.id?{...f,health:Math.min(f.maxHealth,f.health+d)}:f),a.players[n]=m}if(c.length>0||p>0){const h=[];if(c.length>0){const f=[...new Set(c)];f.length<=3?h.push(f.join("、")):h.push(`${f.slice(0,3).join("、")}等${f.length}个随从`)}p>0&&h.push(p===1?"英雄":`${p}位英雄`);const m=`为${h.join("、")}恢复了${d}点生命值`;a=ue(a,s,"minion_skill",m)}}if(e.effect==="获得能量"){console.log("[executeEffect] 获得能量效果触发, ownerPlayerId:",s,"ownerPlayerIndex:",n,"value:",e.value),console.log("[executeEffect] targets:",o,"context:",t);const d=e.value||1,c={...a.players[n]};console.log("[executeEffect] 获得能量前, energy:",c.energy,"bonusEnergy:",c.bonusEnergy),c.energy=c.energy+d,c.bonusEnergy=(c.bonusEnergy||0)+d,a.players[n]=c,console.log("[executeEffect] 获得能量后, energy:",c.energy,"bonusEnergy:",c.bonusEnergy);const p=`获得了${d}点能量`;a=ue(a,s,"minion_skill",p)}if(e.effect==="失去能量"){const d=e.value||1,c={...a.players[n]};c.energy=Math.max(0,c.energy-d),a.players[n]=c;const p=`失去了${d}点能量`;a=ue(a,s,"minion_skill",p)}if(e.effect==="召唤"){console.log("[executeEffect] 召唤效果触发, ownerPlayerId:",s,"value:",e.value,"summonedCardIndex:",e.summonedCardIndex);const d=e.value||1;let c;const p=e.summonSource||"derived";if(p!=="derived"){const y=a.players[n],x=a.players[1-n];let k=[];switch(p){case"deck_top":k=y.deck;break;case"discard_top":k=a.discardPile;break;case"my_hand":k=y.hand;break;case"enemy_hand":k=x.hand;break}const u=k.map((w,I)=>w.type==="minion"?I:-1).filter(w=>w>=0);if(u.length>0){const w=e.isRandom?u[Math.floor(Math.random()*u.length)]:u[0];c=k[w],k.splice(w,1)}}else{let y=e.summonedCardIndex??0;if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>0&&(y=e.summonedCardIndices[Math.floor(Math.random()*e.summonedCardIndices.length)]),y!==void 0&&t?.sourceCard?.derivedCards){const x=t.sourceCard.derivedCards;let k=y;k>=x.length&&k>0&&(k=k-1),k>=0&&k<x.length&&(c=x[k])}}if(!c)return console.log("[executeEffect] 召唤效果没有衍生牌模板，跳过"),a;const h={...a.players[n]},m=h.board.length;for(let y=0;y<d;y++){const x=ke(),k=ve(c,"嘲讽"),u=ve(c,"连击"),w=ve(c,"圣盾"),I=c.keywords?.find(N=>N.name==="准备"),S=I?I.value??1:0,T=ve(c,"暴虐"),D=ve(c,"斩首"),O=ve(c,"机动"),P=ve(c,"不动"),B=O&&!k&&!P&&S===0,$={...c,id:x,derivedCards:t?.sourceCard?.derivedCards,maxHealth:c.health,canAttack:P?!1:B,hasAttacked:!1,attacksThisTurn:0,maxAttacksPerTurn:u?2:1,divineShieldActive:w,canAttackHeroes:P?!1:B&&!T,canAttackMinions:P?!1:B&&!D,playedThisTurn:!0,isDefending:P?!1:k,preparation:S,keywords:c.keywords?c.keywords.map(N=>({...N})):[]};h.board.push($),console.log("[executeEffect] 召唤随从:",$.name,"ID:",x)}a.players[n]=h;const f=a.players[n].name,b=c.name||"衍生随从",g=d===1?`${f}召唤了${b}`:`${f}召唤了${d}个${b}`;a=ue(a,s,"minion_skill",g),console.log("[executeEffect] 召唤完成, 场上随从数:",h.board.length,"原数量:",m)}if(e.effect==="获得"){console.log("[executeEffect] 获得效果触发, ownerPlayerId:",s,"value:",e.value,"summonedCardIndex:",e.summonedCardIndex);const d=e.value||1;let c;const p=e.summonSource||"derived";if(p!=="derived"){const x=a.players[n],k=a.players[1-n];let u=[];switch(p){case"deck_top":u=x.deck;break;case"discard_top":u=a.discardPile;break;case"my_hand":u=x.hand;break;case"enemy_hand":u=k.hand;break}if(u.length>0){const w=e.isRandom?Math.floor(Math.random()*u.length):0;c=u[w],u.splice(w,1)}}else{let x=e.summonedCardIndex??0;if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>0&&(x=e.summonedCardIndices[Math.floor(Math.random()*e.summonedCardIndices.length)]),x!==void 0&&t?.sourceCard?.derivedCards){const k=t.sourceCard.derivedCards;let u=x;u>=k.length&&u>0&&(u=u-1),u>=0&&u<k.length&&(c=k[u])}}if(!c)return console.log("[executeEffect] 获得效果没有衍生牌模板，跳过"),a;const h={...a.players[n]},m=h.hand.length;for(let x=0;x<d;x++){const k=ke();if(c.type==="spell"){const u={...c,id:k,derivedCards:t?.sourceCard?.derivedCards,attack:0,health:0,maxHealth:0,keywords:c.keywords?c.keywords.map(w=>({...w})):[],effects:c.effects?c.effects.map(w=>({...w,targets:w.targets?[...w.targets]:[]})):void 0};h.hand.push(u),console.log("[executeEffect] 获得法术牌:",u.name,"ID:",k)}else{const u={...c,id:k,derivedCards:t?.sourceCard?.derivedCards,maxHealth:c.health,keywords:c.keywords?c.keywords.map(w=>({...w})):[],effects:c.effects?c.effects.map(w=>({...w,targets:w.targets?[...w.targets]:[]})):void 0};h.hand.push(u),console.log("[executeEffect] 获得随从牌:",u.name,"ID:",k)}}a.players[n]=h;const f=a.players[n].name,b=c.name||"衍生牌",g=c.type==="spell"?"法术":"随从",y=d===1?`${f}获得了${b}(${g})`:`${f}获得了${d}张${b}(${g})`;a=ue(a,s,"minion_skill",y),console.log("[executeEffect] 获得完成, 手牌数:",h.hand.length,"原数量:",m)}if(e.effect==="变化"){console.log("[executeEffect] 变化效果触发, ownerPlayerId:",s,"value:",e.value,"summonedCardIndex:",e.summonedCardIndex);let d;const c=e.summonSource||"derived";if(c!=="derived"){const J=a.players[n],U=a.players[1-n];let ne=[];switch(c){case"deck_top":ne=J.deck;break;case"discard_top":ne=a.discardPile;break;case"my_hand":ne=J.hand;break;case"enemy_hand":ne=U.hand;break}const Z=ne.map((re,q)=>re.type==="minion"?q:-1).filter(re=>re>=0);if(Z.length>0){const re=e.isRandom?Z[Math.floor(Math.random()*Z.length)]:Z[0];d=ne[re],ne.splice(re,1)}}else{let J=e.summonedCardIndex??0;if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>0&&(J=e.summonedCardIndices[Math.floor(Math.random()*e.summonedCardIndices.length)]),J!==void 0&&t?.sourceCard?.derivedCards){const U=t.sourceCard.derivedCards;let ne=J;ne>=U.length&&ne>0&&(ne=ne-1),ne>=0&&ne<U.length&&(d=U[ne])}}if(!d)return console.log("[executeEffect] 变化效果没有衍生牌模板，跳过"),a;const p={...a.players[n]},h=t?.sourceCard?.id,m=p.board.findIndex(J=>J.id===h);if(m===-1)return console.log("[executeEffect] 变化效果找不到源随从，跳过"),a;const f=ve(d,"嘲讽"),b=ve(d,"连击"),g=ve(d,"圣盾"),y=d.keywords?.find(J=>J.name==="准备"),x=y?y.value??1:0,k=ve(d,"暴虐"),u=ve(d,"斩首"),w=ve(d,"机动"),I=ve(d,"不动"),S=w&&!f&&!I&&x===0,T=ke(),D={...d,id:T,derivedCards:t?.sourceCard?.derivedCards,maxHealth:d.health,canAttack:I?!1:S,hasAttacked:!1,attacksThisTurn:0,maxAttacksPerTurn:b?2:1,divineShieldActive:g,canAttackHeroes:I?!1:S&&!k,canAttackMinions:I?!1:S&&!u,playedThisTurn:!0,isDefending:I?!1:f,preparation:x,keywords:d.keywords?d.keywords.map(J=>({...J})):[]},O=p.board[m];p.board.splice(m,1,D);const P={...O,health:O.maxHealth};a.discardPile=[P,...a.discardPile],console.log("[executeEffect] 变化完成:",t?.sourceCard?.name,"→",D.name,"位置:",m),a.players[n]=p;const B=a.players[n].name,$=d.name||"衍生随从",N=`${B}的${t?.sourceCard?.name||"随从"}变化为${$}`;a=ue(a,s,"minion_skill",N)}return a},ba=(E,e,s,t,n)=>{console.log("attack() 被调用 - 攻击者ID:",e,"攻击者随从ID:",s,"目标玩家ID:",t,"目标随从ID:",n);const i=e-1,r=t-1,a=E.players[i],o=E.players[r];console.log("攻击者玩家战场:",a.board.map(p=>({id:p.id,name:p.name,canAttack:p.canAttack,hasAttacked:p.hasAttacked,canAttackMinions:p.canAttackMinions,canAttackHeroes:p.canAttackHeroes}))),console.log("目标玩家战场:",o.board.map(p=>({id:p.id,name:p.name})));const l=a.board.findIndex(p=>p.id===s);if(console.log("查找攻击者随从索引:",l),l===-1)return console.log("错误：找不到攻击者随从！"),E;const d=a.board[l];if(console.log("攻击者随从状态 - canAttack:",d.canAttack,"attacksThisTurn:",d.attacksThisTurn,"maxAttacksPerTurn:",d.maxAttacksPerTurn),!d.canAttack||d.attacksThisTurn>=d.maxAttacksPerTurn)return console.log("错误：随从不能攻击！"),E;if(d.frozen)return console.log("[冰冻] 随从被冰冻，无法行动:",d.name),E;if(d.keywords.some(p=>p.name==="不动"))return console.log('错误：随从具有"不动"词条，无法攻击！'),E;if(n!==void 0&&!d.canAttackMinions)return console.log("错误：伏击随从不能攻击随从！"),E;if(Yt(o.board)){if(n===void 0)return E;const p=o.board.find(h=>h.id===n);if(!p||!Wt(p))return E}let c={...E};if(c.players=[...E.players],n!==void 0){const p=o.board.findIndex(G=>G.id===n);if(p===-1)return E;const h=o.board[p];console.log("attack() 目标随从:",h.name,"ID:",h.id,"血量:",h.health,"攻击力:",h.attack);const{total:m,newState:f}=Kt(d,c,e,h);c=f,m>0&&console.log("attack() 增加伤害:",m);const b=h.markCount||0,g=d.attack+m+b,y=h.attack;console.log("attack() 伤害计算 - 攻击伤害:",g,"(基础:",d.attack,"+额外:",m,"+印记:",b,") 反伤:",y);const x=Et(d);console.log("[attack] 攻击者:",d.name,"元素类型:",x,"目标:",h.name);const k=Se(h,g);let u=k.health<=0;const w={...o};w.board=w.board.map((G,ae)=>ae===p?k:G),c.players[r]=w;let I=0;if(x){const G=Be(c,"minion",r,p,g,x,e);if(c=G.state,G.triggered&&G.extraDamage){const le=c.players[r].board[p];if(le&&le.health>0){const z=Se(le,G.extraDamage),X={...c.players[r]};X.board=[...X.board],X.board[p]=z;const v=[...c.players];v[r]=X,c={...c,players:v},I=G.extraDamage,c=ue(c,c.players[r].id,"element",`🔥${le.name}受到了额外的${I}点灼烧伤害`),z.health<=0&&(u=!0)}}if(G.triggered&&G.extraDamageIsLightning){const ae=G.extraDamage,le=c.players[r],z=le.board.filter(v=>v.health>0),X=[];if(z.forEach((v,j)=>{X.push({type:"minion",index:le.board.indexOf(v),minion:v})}),le.health>0&&X.push({type:"minion",index:-1,minion:null}),X.length>0){const v=X[Math.floor(Math.random()*X.length)];if(v.index===-1){const H=le.health-ae,M={...le,health:H},A=[...c.players];A[r]=M,c={...c,players:A},console.log(`⚡️${M.name}受到了额外的${ae}点电击伤害`),c=ue(c,c.players[r].id,"element",`⚡️${M.name}受到了额外的${ae}点电击伤害`)}else{const H=le.board[v.index],M=Se(H,ae),A={...le};A.board=[...A.board],A.board[v.index]=M;const R=[...c.players];if(R[r]=A,c={...c,players:R},console.log(`⚡️${H.name}受到了额外的${ae}点电击伤害`),c=ue(c,c.players[r].id,"element",`⚡️${H.name}受到了额外的${ae}点电击伤害`),M.health<=0)if(v.index===p)u=!0;else{const W={...M,health:M.maxHealth};A.board=A.board.filter(F=>F.id!==M.id);const Y=[...c.players];Y[r]=A,c={...c,players:Y,discardPile:[W,...c.discardPile]},c=ue(c,c.players[r].id,"element",`💀${H.name}被电击消灭`)}}const j={type:"lightning_explosion",targetPlayerId:le.id,targetType:v.index===-1?"hero":"minion"};v.index!==-1&&(j.targetMinionId=le.board[v.index].id),c={...c,pendingVisualEffects:[...c.pendingVisualEffects||[],j]}}}}const S=ve(d,"先攻"),T=ve(h,"先攻"),O=!(S&&!T&&u),P=O?Se(d,y):d,B=ve(d,"狂怒"),$=P.attacksThisTurn+1,N=B&&u?!0:$<P.maxAttacksPerTurn,J={...P,attacksThisTurn:B&&u?0:$,hasAttacked:!N,canAttack:N},U=d.effects||(d.effect?[d.effect]:[]),ne=h.effects||(h.effect?[h.effect]:[]);let Z={...a};if(Z.board=Z.board.map((G,ae)=>ae===l?J:G),c.players[i]=Z,O){const G=U.filter(ae=>me(ae,"失去生命时")&&ae.effect);for(const ae of G)c=we(c,ae,e,{sourceCard:d,attackerMinion:d}),c={...c},c.players=[...c.players],Z={...c.players[i]}}const re=Z.board.filter(G=>G.health<=0);Z.board=Z.board.filter(G=>G.health>0);const q=re.map(G=>({...G,health:G.maxHealth}));c.discardPile=[...q,...c.discardPile],c.players[i]=Z;let C={...o};const _=x?c.players[r].board[p]:k;C.board=C.board.map((G,ae)=>ae===p?(console.log("attack() 更新目标随从:",_.name,"新血量:",_.health,"是否死亡:",_.health<=0),_):G),c.players[r]=C;const L=ne.filter(G=>me(G,"失去生命时")&&G.effect);for(const G of L)c=we(c,G,t,{sourceCard:h,attackerMinion:h}),c={...c},c.players=[...c.players],C={...c.players[r]};const V=C.board.filter(G=>G.health<=0);C.board=C.board.filter(G=>G.health>0);const Q=V.map(G=>({...G,health:G.maxHealth}));c.discardPile=[...Q,...c.discardPile],c.players[r]=C,console.log("attack() 执行成功！攻击者攻击次数:",J.attacksThisTurn,"是否还能攻击:",N),console.log("attack() 攻击后目标玩家战场:",c.players[r].board.map(G=>({id:G.id,name:G.name,health:G.health})));const de=U.filter(G=>me(G,"攻击时")&&G.effect&&G.effect!=="增加伤害");if(de.length>0){console.log("触发攻击时效果:",d.name,de);for(const G of de)c=we(c,G,e,{targetPlayerId:t,targetCardId:n,targetMinion:k,attackerMinion:J,sourceCard:J})}if(u){const G=ne.filter(ae=>me(ae,"死亡时")&&ae.effect);if(G.length>0){console.log("触发死亡时效果:",h.name,G);for(const ae of G)c=we(c,ae,t,{attackerMinion:h,sourceCard:h})}}if(J.health<=0){const G=U.filter(ae=>me(ae,"死亡时")&&ae.effect);if(G.length>0){console.log("触发攻击者死亡时效果:",d.name,G);for(const ae of G)c=we(c,ae,e,{attackerMinion:J,sourceCard:J})}}}return console.log("attack() 返回新状态"),Fe(c)},Kt=(E,e,s,t)=>{const n=E.effects||(E.effect?[E.effect]:[]);let i=0,r=e;for(const a of n)if(me(a,"攻击时")&&a.effect==="增加伤害"&&a.targets.includes("攻击目标")){if(a.conditionType&&a.conditionType!=="guaranteed"&&a.conditionType!=="d6"){const o=qt(a,r,s,{targetMinion:t??void 0});if(o.logMessage&&(r=ue(r,s,"condition",`${E.name} ${o.logMessage}`)),!o.passed)continue}if(a.triggerNumbers&&a.triggerNumbers.length>0&&a.triggerNumbers.length<6){const o=Math.floor(Math.random()*6)+1;if(!a.triggerNumbers.includes(o)){r=ue(r,s,"dice_roll",`🎲 = ${o}❌️ [${a.triggerNumbers.join(",")}]`);continue}r=ue(r,s,"dice_roll",`🎲 = ${o}✅️ [${a.triggerNumbers.join(",")}]`)}i+=a.value||0}return{total:i,newState:r}},xa=(E,e,s,t)=>{console.log("attackHero() 被调用 - 攻击者ID:",e,"攻击者随从ID:",s,"目标玩家ID:",t);const n=e-1,i=t-1,r=E.players[n],a=E.players[i];console.log("攻击者玩家战场:",r.board.map(I=>({id:I.id,name:I.name,canAttack:I.canAttack,hasAttacked:I.hasAttacked})));const o=r.board.findIndex(I=>I.id===s);if(console.log("查找攻击者随从索引:",o),o===-1)return console.log("错误：找不到攻击者随从！"),E;const l=r.board[o];if(console.log("攻击者随从状态 - canAttack:",l.canAttack,"attacksThisTurn:",l.attacksThisTurn,"maxAttacksPerTurn:",l.maxAttacksPerTurn),!l.canAttack||l.attacksThisTurn>=l.maxAttacksPerTurn)return console.log("错误：随从不能攻击！"),E;if(l.keywords.some(I=>I.name==="不动"))return console.log('错误：随从具有"不动"词条，无法攻击！'),E;if(l.frozen)return console.log("[冰冻] 随从被冰冻，无法攻击英雄:",l.name),E;if(!l.canAttackHeroes)return console.log("错误：突击随从不能攻击英雄！"),E;if(Yt(a.board))return console.log("错误：目标场上有嘲讽/防御随从！"),E;const d=Et(l);let c={...E};c.players=[...E.players];const{total:p,newState:h}=Kt(l,c,e,null);c=h,p>0&&console.log("attackHero() 增加伤害:",l.name,"额外伤害:",p,"原攻击力:",l.attack,"新攻击力:",l.attack+p);const m=a.heroMarkCount||0,f=l.attack+p+m,b=a.health-f;console.log("attackHero() 计算伤害 - 攻击者攻击力:",l.attack,"印记附加:",m,"目标英雄原血量:",a.health,"新血量:",b);const g=l.attacksThisTurn+1,y=g<l.maxAttacksPerTurn,x={...l,attacksThisTurn:g,hasAttacked:!y,canAttack:y,attack:l.attack};let k={...c};if(k.players[n]={...r,board:r.board.map((I,S)=>S===o?x:I)},k.players[i]={...a,health:b},d){const I=Be(k,"hero",i,void 0,f,d,e);if(k=I.state,I.triggered&&I.extraDamage&&d==="fire"){const S=k.players[i],T=S.health-I.extraDamage;k=ue(k,k.players[i].id,"element",`🔥${S.name}受到了额外的${I.extraDamage}点灼烧伤害`),k.players[i]={...S,health:T}}if(I.triggered&&I.extraDamageIsLightning){const S=I.extraDamage,T=k.players[i],D=T.board.filter(P=>P.health>0),O=[];if(D.forEach((P,B)=>{O.push({type:"minion",index:T.board.indexOf(P)})}),T.health>0&&O.push({type:"minion",index:-1}),O.length>0){const P=O[Math.floor(Math.random()*O.length)];if(P.index===-1){const $=T.health-S;k=ue(k,k.players[i].id,"element",`⚡️${T.name}受到了额外的${S}点电击伤害`),k.players[i]={...T,health:$}}else{const $=T.board[P.index],N=Se($,S),J={...T};if(J.board=[...J.board],J.board[P.index]=N,k=ue(k,k.players[i].id,"element",`⚡️${$.name}受到了额外的${S}点电击伤害`),N.health<=0){const U={...N,health:N.maxHealth};J.board=J.board.filter(ne=>ne.id!==N.id),k.discardPile=[U,...k.discardPile],k=ue(k,k.players[i].id,"element",`💀${$.name}被电击消灭`)}k.players[i]=J}const B={type:"lightning_explosion",targetPlayerId:T.id,targetType:P.index===-1?"hero":"minion"};P.index!==-1&&(B.targetMinionId=T.board[P.index].id),k={...k,pendingVisualEffects:[...k.pendingVisualEffects||[],B]}}}k.players[i].health<=0&&console.log("[元素伤害] 英雄死亡:",k.players[i].name)}console.log("attackHero() 执行成功！目标英雄血量:",b,"攻击者攻击次数:",g,"是否还能攻击:",y);const w=(l.effects||(l.effect?[l.effect]:[])).filter(I=>me(I,"攻击时")&&I.effect&&I.effect!=="增加伤害");if(w.length>0){console.log("触发攻击时效果(攻击英雄):",l.name,w);for(const I of w)k=we(k,I,e,{targetPlayerId:t,targetMinion:void 0,attackerMinion:x,sourceCard:x})}return k=ue(k,e,"damage",`${l.name} 对 ${a.name} 造成 ${f} 点伤害`),Fe(k)},va=(E,e,s)=>{const t=e-1,n=E.players[t],i=n.board.findIndex(c=>c.id===s);if(i===-1)return console.log("toggleDefense: 找不到随从"),E;const r=n.board[i];if(r.isDefending){if(Ge(r))return console.log("toggleDefense: 嘲讽随从无法取消防御"),E;const c={...r,isDefending:!1},p=[...n.board];p[i]=c;const h={...n,board:p},m=[...E.players];return m[t]=h,{...E,players:m}}if(!ga(r))return console.log("toggleDefense: 该随从无法进入防御模式"),E;const a={...r,isDefending:!0},o=[...n.board];o[i]=a;const l={...n,board:o},d=[...E.players];return d[t]=l,console.log(`toggleDefense: ${r.name} 进入防御模式`),{...E,players:d}},Fe=E=>{for(const e of E.players)if(e.health<=0){const s=E.online?.isOnline,t=s?"onlineGameOver":"gameOver",n=e.id===1?2:1,i=E.players[n-1];return console.log("[胜负] 游戏结束判定"),console.log("[胜负] 玩家生命值:",E.players.map(r=>`${r.name}: ${r.health}/${r.maxHealth}`)),console.log("[胜负] 死亡玩家:",`${e.name} (ID: ${e.id}, 生命值: ${e.health})`),console.log("[胜负] 胜利玩家:",`${i.name} (ID: ${i.id}, 生命值: ${i.health})`),console.log("[胜负] 联机模式:",s,"phase:",t),console.log("[胜负] winner 值:",n,"(对应 players["+(n-1)+"])"),{...E,phase:t,winner:n}}return E},ka=E=>{const e=E.currentPlayerId-1,s=E.currentPlayerId;console.log("[DEBUG] endTurn",{stateTurnNumber:E.turnNumber,currentPlayerId:s,phase:E.phase,mulliganFirstPlayer:E.mulliganFirstPlayer,p2MulliganCards:E.p2MulliganCards?.map(Ke),p2MulliganSelected:E.p2MulliganSelected,waitingForNextPlayer:E.waitingForNextPlayer});const t=E.players[e].bonusEnergy||0;let n={...E};n.players=[...E.players];const i=E.players[e].energy;n.players[e]={...E.players[e],energy:Math.max(i-t,0),bonusEnergy:0,board:E.players[e].board.map(a=>({...a,canAttack:!1}))};const r=n.players[e].board;for(const a of r){const l=(a.effects||(a.effect?[a.effect]:[])).filter(d=>me(d,"回合结束时")&&d.effect);l.length>0&&(console.log("触发回合结束时效果:",a.name,l),n=Te(n,l,s,a.name,"回合结束时",{attackerMinion:a,sourceCard:a}))}return n.players[e]={...n.players[e],board:n.players[e].board.map(a=>a.playedThisTurn?{...a,playedThisTurn:!1}:{...a,playedThisTurn:!1})},n.players[e]={...n.players[e],board:n.players[e].board.map(a=>{const o=a.keywords.some(l=>l.name==="不动");if(a.preparation>0){const l=a.preparation-1;return{...a,preparation:l,canAttack:o?!1:l===0&&!Ge(a)?!0:a.canAttack,canAttackHeroes:o?!1:l===0&&!Ge(a)?!0:a.canAttackHeroes,canAttackMinions:o?!1:l===0&&!Ge(a)?!0:a.canAttackMinions}}return a})},n.players[e]={...n.players[e],board:n.players[e].board.map(a=>a.frozen?{...a,frozen:!1}:a)},n.players[e]={...n.players[e],heroMarkCount:0},n.waitingForNextPlayer=!0,n},wa=E=>{const e=E.currentPlayerId===1?2:1,s=e-1;console.log("[DEBUG] startMyTurn",{stateTurnNumber:E.turnNumber,nextPlayerId:e,statePhase:E.phase,mulliganFirstPlayer:E.mulliganFirstPlayer,currentPlayerId:E.currentPlayerId});const t=f=>{const b=f.heroCard?.skills?.map(g=>{const y=g.remainingCooldown??0,x=Math.max(0,y-1);return{...g,remainingCooldown:x}});return{...f,heroCard:f.heroCard?{...f.heroCard,skills:b}:void 0}},n={...E,players:E.players.map(t)},i=n.players.findIndex(f=>f.id===e);let r=!1,a="",o={...n};if(i!==-1){const f=n.players[i];f.frozen&&(r=!0,a=f.name||"英雄");const b=f.board.map(x=>x.frozen?{...x,canAttack:!1,hasAttacked:!0,attacksThisTurn:x.maxAttacksPerTurn}:x),g={...f,board:b,frozen:!1},y=[...n.players];y[i]=g,o={...n,players:y}}if(o.turnNumber===1&&o.mulliganDone===1){console.log("后手第一回合开始，触发换牌");let f={...o};const b=[];for(let g=0;g<4;g++){const y=je(f,e,!1);y&&b.push(y)}return{...f,phase:"mulligan",currentPlayerId:e,waitingForNextPlayer:!1,mulliganCards:[],mulliganSelected:[],p2MulliganCards:b,p2MulliganSelected:[],newlyDrawnCardIds:b.map(g=>g.id)}}let l={...o,newlyDrawnCardIds:[]};l.waitingForNextPlayer=!1,l.currentPlayerId=e,e===1&&(l.turnNumber=E.turnNumber+1);const d=o.players[s],c=Math.min(10,l.turnNumber);if(l.players[s]={...l.players[s],energy:c,maxEnergy:c,bonusEnergy:0,heroSkillUsed:d.heroCard?.skills?.map(()=>!1),board:d.board.map(f=>{const b=f.preparation>0,g=f.keywords.some(y=>y.name==="不动");return f.keywords.some(y=>y.name==="嘲讽"),{...f,keywords:f.keywords.filter(y=>y.name!=="嘲讽"),canAttack:g?!1:!b,hasAttacked:!1,attacksThisTurn:0,playedThisTurn:!1,isDefending:!1,canAttackHeroes:g?!1:!b&&!ve(f,"暴虐"),canAttackMinions:g?!1:!b&&!ve(f,"斩首")}})},r){const f=Math.ceil(c*.2);l=ue(l,e,"element",`🧊${a}被冰冻失去了${f}点能量`),l.players[s]={...l.players[s],energy:Math.max(0,c-f)}}l=(f=>{let b=f;const g=[...b.players[s].board];console.log("回合开始时检查随从效果，随从数量:",g.length);for(const y of g){if(!b.players[s].board.some(I=>I.id===y.id)){console.log("随从已死亡，跳过:",y.name);continue}console.log("随从:",y.name,"effects:",y.effects,"effect:",y.effect);const w=(y.effects||(y.effect?[y.effect]:[])).filter(I=>me(I,"回合开始时")&&I.effect);console.log("回合开始时效果:",w),w.length>0&&(console.log("触发回合开始时效果:",y.name,w),b=Te(b,w,e,y.name,"回合开始时",{attackerMinion:y,sourceCard:y}))}return b})(l),l=Gt(l,e);const h=l.players[s].heroCard,m=h?.skills||[];for(let f=0;f<m.length;f++){const b=m[f];if(b.type!=="passive")continue;const y=(b.effects||(b.effect?[b.effect]:[])).filter(x=>me(x,"回合开始时")&&x.effect);y.length>0&&h&&(l=Te(l,y,e,`${l.players[s].name}的被动【${b.name}】`,"回合开始时",{sourceCard:h}))}return nt(l,e),l},Ea=E=>({phase:"menu",currentPlayerId:1,turnNumber:1,players:[Oe(1),Oe(2)],winner:null,sharedDeck:E.sharedDeck,heroCards:E.heroCards,heroCard:E.heroCard,groups:E.groups,publicBattleDeck:[],waitingForNextPlayer:!1,newlyDrawnCardIds:[],gameLogs:[],discardPile:[],soundEffects:[],mulliganCards:[],mulliganSelected:[],mulliganFirstPlayer:0,mulliganDone:0,skipFirstDraw:!1,pendingVisualEffects:[],p2MulliganCards:[],p2MulliganSelected:[],online:{isOnline:!1,playerId:"",playerNickname:"",currentRoom:null,messages:[],playerReady:[],localDeckImport:null,remoteDeckImports:{},battlePlayers:[],isSpectator:!1,spectatorViewPlayerId:"",diceRolls:[],firstPlayerId:"",lastLoserId:"",rematchRequested:[],isWaitingForGameState:!1,heroSelections:{}}}),Ca=E=>({...E,phase:"cardCreator"}),Ia=E=>({...E,phase:"heroEditor"}),Sa=E=>({...E,phase:"cardManager"}),$a=(E,e)=>{const s=[...E.sharedDeck],t=be(e),n=s.findIndex(o=>be(o.card)===t);n!==-1?s[n]={...s[n],count:s[n].count+1}:s.push({card:e,count:1});const i=E.groups[0],r=[...i.cards],a=r.findIndex(o=>be(o.card)===t);return a!==-1?r[a]={...r[a],count:r[a].count+1}:r.push({card:e,count:1}),{...E,sharedDeck:s,groups:[{...i,cards:r},...E.groups.slice(1)]}},_a=(E,e)=>{const s=be(e),t=[...E.sharedDeck],n=t.findIndex(o=>be(o.card)===s);if(n!==-1)t[n]={...t[n],count:t[n].count+1};else{const o={...e,id:ke()};t.push({card:o,count:1})}const i=E.groups[0],r=[...i.cards],a=r.findIndex(o=>be(o.card)===s);if(a!==-1)r[a]={...r[a],count:r[a].count+1};else{const o={...e,id:ke()};r.push({card:o,count:1})}return{...E,sharedDeck:t,groups:[{...i,cards:r},...E.groups.slice(1)]}},Pa=(E,e)=>{const s=[...E.sharedDeck],t=s.findIndex(o=>o.card.id===e);if(t===-1)return E;const n=s[t],i=E.groups[0],r=i.cards.findIndex(o=>o.card.id===e);let a=[...i.cards];return n.count>1?(s[t]={...n,count:n.count-1},r!==-1&&(a[r]={...a[r],count:a[r].count-1})):(s.splice(t,1),r!==-1&&a.splice(r,1)),{...E,sharedDeck:s,groups:[{...i,cards:a},...E.groups.slice(1)]}},Ta=(E,e)=>{const s=[...E.sharedDeck],t=s.findIndex(i=>i.card.id===e);if(t===-1)return E;const n=s[t];if(n.count>1){s[t]={...n,count:n.count-1};const i=E.groups[0],r=[...i.cards],a=r.findIndex(o=>o.card.id===e);return a!==-1&&(r[a]={...r[a],count:r[a].count-1}),{...E,sharedDeck:s,groups:[{...i,cards:r},...E.groups.slice(1)]}}return E},Aa=(E,e)=>{const s=be(e),t=E.groups[0];return{...E,sharedDeck:E.sharedDeck.filter(n=>be(n.card)!==s),groups:[{...t,cards:t.cards.filter(n=>be(n.card)!==s)},...E.groups.slice(1)]}},Ma=(E,e)=>{const s=e.length>0&&"count"in e[0]?e:Je(e),t=E.groups[0];return{...E,sharedDeck:s,groups:[{...t,cards:[...s]},...E.groups.slice(1)]}},Da=(E,e)=>{const s=e.length>0&&"count"in e[0]?e:Je(e),t=[...E.sharedDeck],n=new Map;for(const o of t)n.set(be(o.card),o);for(const o of s){const l=be(o.card),d=n.get(l);d?d.count+=o.count:(n.set(l,{card:o.card,count:o.count}),t.push({card:o.card,count:o.count}))}const i=E.groups[0],r=[...i.cards],a=new Map;for(const o of r)a.set(be(o.card),o);for(const o of s){const l=be(o.card),d=a.get(l);d?d.count+=o.count:(a.set(l,{card:o.card,count:o.count}),r.push({card:o.card,count:o.count}))}return{...E,sharedDeck:t,groups:[{...i,cards:r},...E.groups.slice(1)]}},La=(E,e)=>({...E,groups:[...E.groups,{id:`group_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,name:e,cards:[]}]}),Ra=(E,e)=>{const s=E.groups.find(n=>n.id===e);if(!s||s.id===Me)return E;const t=E.groups[0];return{...E,groups:[{...t,cards:[...t.cards,...s.cards]},...E.groups.slice(1).filter(n=>n.id!==e)]}},Ba=(E,e,s)=>e===Me?E:{...E,groups:E.groups.map(t=>t.id===e?{...t,name:s}:t)},Oa=(E,e,s)=>{const t=E.groups.find(d=>d.id===e),n=E.groups.find(d=>d.cards.some(c=>c.card.id===s));if(!t||!n||n.id===t.id)return E;const i=n.cards.find(d=>d.card.id===s);if(!i)return E;const r=n.cards.filter(d=>d.card.id!==s),a=be(i.card),l=t.cards.find(d=>be(d.card)===a)?t.cards.map(d=>be(d.card)===a?{...d,count:d.count+i.count}:d):[...t.cards,{card:{...i.card},count:i.count}];return{...E,groups:E.groups.map(d=>d.id===n.id?{...d,cards:r}:d.id===t.id?{...d,cards:l}:d)}},Na=(E,e)=>{switch(e.type){case"SHOW_SETUP":return oa(E);case"START_GAME":return ha(E,e.player1Name,e.player2Name,e.player1Hero,e.player2Hero);case"TOGGLE_MULLIGAN_CARD":{const s=e.cardId,t=E.mulliganSelected.includes(s);return{...E,mulliganSelected:t?E.mulliganSelected.filter(n=>n!==s):[...E.mulliganSelected,s]}}case"TOGGLE_P2_MULLIGAN_CARD":{const s=e.cardId,t=E.p2MulliganSelected.includes(s);return{...E,p2MulliganSelected:t?E.p2MulliganSelected.filter(n=>n!==s):[...E.p2MulliganSelected,s]}}case"CONFIRM_MULLIGAN":if(E.mulliganDone===0&&!e.forceP2Branch){console.log("[DEBUG] CONFIRM_MULLIGAN trigger",{currentPlayer:E.currentPlayerId,turnNumber:E.turnNumber,phase:E.phase,mulliganFirstPlayer:E.mulliganFirstPlayer,mulliganCardsCount:E.mulliganCards.length,mulliganSelected:E.mulliganSelected});const s=E.currentPlayerId,t=s-1,n=E.mulliganSelected,i=E.mulliganCards.filter(l=>!n.includes(l.id));let r={...E};const a=E.mulliganCards.filter(l=>n.includes(l.id)),o=[];for(let l=0;l<n.length;l++){const d=je(r,s,!1);d&&o.push(d)}if(r.players[t]={...r.players[t],personalBattleDeck:[...r.players[t].personalBattleDeck||[],...a]},r.players[t]={...r.players[t],hand:[...r.players[t].hand,...i,...o]},r.mulliganCards=[],r.mulliganSelected=[],r.newlyDrawnCardIds=o.map(l=>l.id),s===1&&E.mulliganFirstPlayer===1)if(r.players.length>1&&r.players[1].name&&r.players[1].name.includes("Robot")){const c=[];for(let h=0;h<4;h++){const m=je(r,2,!0);m&&c.push(m)}if(!c.some(h=>h.legacyEffect==="gain_energy"||h.name==="幸运币")){const h=bt();c.push(h)}r.players[1]={...r.players[1],hand:c},r.phase="robotBattle",r.currentPlayerId=2,r.turnNumber=1,r.mulliganCards=[],r.mulliganDone=2,r.newlyDrawnCardIds=c.map(h=>h.id)}else r.phase=r.online?.currentRoom?"mulligan":"playing",r.currentPlayerId=1,r.mulliganDone=1,r.mulliganCards=[],r.mulliganSelected=[],r.online?.currentRoom;return console.log("[DEBUG] CONFIRM_MULLIGAN return",{currentPlayer:r.currentPlayerId,turnNumber:r.turnNumber,phase:r.phase,mulliganFirstPlayer:r.mulliganFirstPlayer,player0Energy:r.players[0].energy,player0MaxEnergy:r.players[0].maxEnergy,player1Energy:r.players[1].energy,player1MaxEnergy:r.players[1].maxEnergy}),r}else{let s={...E};const t=E.p2MulliganSelected,n=E.p2MulliganCards.filter(l=>!t.includes(l.id)),i=E.p2MulliganCards.filter(l=>t.includes(l.id)),r=[];for(let l=0;l<t.length;l++){const d=je(s,2,!1);d&&r.push(d)}s.players[1]={...s.players[1],personalBattleDeck:[...s.players[1].personalBattleDeck||[],...i]},s.players[1]={...s.players[1],hand:[...s.players[1].hand,...n,...r]},s.p2MulliganCards=[],s.p2MulliganSelected=[],s.newlyDrawnCardIds=r.map(l=>l.id);const a=s.players[1];if(!a.hand.some(l=>l.legacyEffect==="gain_energy"||l.name==="幸运币")){const l=bt();s.players[1]={...a,hand:[...a.hand,l]},s.newlyDrawnCardIds=[...s.newlyDrawnCardIds,l.id]}return s.mulliganDone=2,s.online?.currentRoom?(s.phase="onlineBattle",s.currentPlayerId=1,s.mulliganCards=[],s.mulliganSelected=[]):(s.phase="playing",s.currentPlayerId=2,s.mulliganCards=[],s.mulliganSelected=[]),s}case"END_TURN":return ka(E);case"SHOW_ROBOT_SETUP":return la(E);case"START_ROBOT_BATTLE":return da(E,e.playerName,e.playerHero);case"END_ROBOT_TURN":return ca(E);case"START_MY_TURN":return wa(E);case"DRAW_CARD":return ua(E,e.playerId);case"PLAY_CARD":return Ut(E,e.playerId,e.cardId);case"PLAY_CARD_WITH_TARGET":return pa(E,e.playerId,e.cardId,e.targetPlayerId,e.targetCardId);case"EXECUTE_PLAYED_MINION_EFFECT":return ma(E,e.playerId,e.cardId,e.targetPlayerId,e.targetCardId);case"ATTACK":return ba(E,e.attackerPlayerId,e.attackerCardId,e.targetPlayerId,e.targetCardId);case"ATTACK_HERO":return xa(E,e.attackerPlayerId,e.attackerCardId,e.targetPlayerId);case"TOGGLE_DEFENSE":return va(E,e.playerId,e.cardId);case"BACK_TO_MENU":return Ea(E);case"SHOW_CARD_CREATOR":return Ca(E);case"SHOW_HERO_EDITOR":return Ia(E);case"SHOW_CARD_MANAGER":return Sa(E);case"ADD_CARD":return $a(E,e.card);case"ADD_CARD_BY_TEMPLATE":return _a(E,e.cardTemplate);case"DELETE_CARD":return Pa(E,e.cardId);case"DELETE_HERO_CARD":return{...E,heroCards:E.heroCards.filter(s=>s.id!==e.heroId)};case"DECREASE_CARD_COUNT":return Ta(E,e.cardId);case"DELETE_ALL_CARDS_BY_TEMPLATE":return Aa(E,e.cardTemplate);case"SET_DECK":return Ma(E,e.cards);case"IMPORT_CARDS":return Da(E,e.cards);case"CREATE_GROUP":return La(E,e.name);case"DELETE_GROUP":return Ra(E,e.groupId);case"RENAME_GROUP":return Ba(E,e.groupId,e.name);case"MOVE_CARD_TO_GROUP":return Oa(E,e.groupId,e.cardId);case"CLEAR_NEWLY_DRAWN":return{...E,newlyDrawnCardIds:[]};case"SHOW_LOBBY":return{...E,phase:"lobby",online:{...E.online,isOnline:!0,playerId:e.playerId,playerNickname:e.playerNickname}};case"SHOW_ROOM":return{...E,phase:"room",online:{...E.online,isOnline:!0,playerId:e.playerId,playerNickname:e.playerNickname,currentRoom:e.room,messages:[],playerReady:[],localDeckImport:null,remoteDeckImports:{}}};case"UPDATE_ROOM":return{...E,online:{...E.online,currentRoom:e.room}};case"UPDATE_MESSAGES":return{...E,online:{...E.online,messages:e.messages}};case"ADD_MESSAGE":return{...E,online:{...E.online,messages:[...E.online.messages,e.message]}};case"UPDATE_PLAYER_READY":return{...E,online:{...E.online,playerReady:e.playerReady}};case"LEAVE_ROOM":return{...E,phase:"lobby",online:{...E.online,currentRoom:null,messages:[],playerReady:[],localDeckImport:null,remoteDeckImports:{},battlePlayers:[],isSpectator:!1,spectatorViewPlayerId:"",diceRolls:[],firstPlayerId:"",lastLoserId:"",rematchRequested:[]}};case"SET_ONLINE_HERO":return{...E,online:{...E.online,heroSelections:{...E.online.heroSelections,[e.playerId]:e.heroCard}}};case"UPDATE_LOCAL_DECK_IMPORT":return console.log("[DEBUG reducer] UPDATE_LOCAL_DECK_IMPORT:",e.filename,e.cardCount),{...E,sharedDeck:e.entries,heroCards:e.heroCards!==void 0?e.heroCards:E.heroCards,online:{...E.online,localDeckImport:{filename:e.filename,cardCount:e.cardCount,entries:e.entries}}};case"UPDATE_REMOTE_DECK_IMPORT":return{...E,online:{...E.online,remoteDeckImports:{...E.online.remoteDeckImports,[e.playerId]:{filename:e.filename,cardCount:e.cardCount,playerNickname:e.playerNickname,...e.comparisonData?{comparisonData:e.comparisonData}:{}}}}};case"START_ONLINE_BATTLE":{const t=Array.isArray(e.onlineDeck)&&e.onlineDeck.length>0&&"count"in e.onlineDeck[0]?e.onlineDeck:Je(e.onlineDeck);return{...E,phase:"diceRoll",sharedDeck:t,online:{...E.online,battlePlayers:e.battlePlayers,isSpectator:e.isSpectator,spectatorViewPlayerId:e.battlePlayers[0]?.playerId||"",diceRolls:[],firstPlayerId:"",rematchRequested:[]}}}case"SET_DICE_ROLLS":return{...E,online:{...E.online,diceRolls:e.diceRolls,firstPlayerId:e.firstPlayerId,spectatorViewPlayerId:e.firstPlayerId}};case"START_ONLINE_GAME":{const s=e.player1Name,t=e.player2Name,n=e.player1Hero,i=e.player2Hero;wt();const r=e.player1PersonalKeys||[],a=e.player2PersonalKeys||[],o=[],l=[],d=[];if(e.sharedDeckOrder&&e.sharedDeckOrder.length>0)for(let g=0;g<e.sharedDeckOrder.length;g++){const y=e.sharedDeckOrder[g],x=E.sharedDeck.find(u=>be(u.card)===y);if(!x){console.warn("【START_ONLINE_GAME】本地未找到卡牌模板:",y,"跳过");continue}const k={...x.card,id:ke()};r.includes(y)?l.push(k):a.includes(y)?d.push(k):o.push(k)}else{const g=[];let y=0;for(const x of E.sharedDeck)if(x.card.type!=="hero")for(let k=0;k<x.count;k++)g.push({...x.card,id:1e5+y++});o.push(...He(g))}const c=[],p=[],h=[],m=[];for(let g=0;g<o.length;g++)g%2===0?h.push(o[g]):m.push(o[g]);const f=[];for(let g=0;g<3;g++)if(h.length>0){const y={...h[0],id:ke()};f.push(y),h.splice(0,1)}const b=[];for(let g=0;g<4;g++)if(m.length>0){const y={...m[0],id:ke()};b.push(y),m.splice(0,1)}return{...E,phase:"mulligan",currentPlayerId:1,turnNumber:1,publicBattleDeck:[],sharedDeck:E.sharedDeck,players:[{...Oe(1),name:s,deck:[],personalBattleDeck:l,halfPublicDeck:h,hand:c,energy:1,maxEnergy:1,heroCard:n||null},{...Oe(2),name:t,deck:[],personalBattleDeck:d,halfPublicDeck:m,hand:p,energy:1,maxEnergy:1,heroCard:i||null}],winner:null,waitingForNextPlayer:!1,newlyDrawnCardIds:f.map(g=>g.id),discardPile:[],mulliganCards:f,mulliganSelected:[],p2MulliganCards:b,p2MulliganSelected:[],mulliganFirstPlayer:1,mulliganDone:0,online:{...E.online,firstPlayerId:e.firstPlayerId,isWaitingForGameState:!1,heroSelections:{},rematchRequested:[]}}}case"SET_SPECTATOR_VIEW":return{...E,online:{...E.online,spectatorViewPlayerId:e.playerId}};case"REQUEST_REMATCH":return{...E,online:{...E.online,rematchRequested:[...E.online.rematchRequested,e.playerId]}};case"BACK_TO_ROOM":return{...E,phase:"room",winner:null,online:{...E.online,battlePlayers:[],isSpectator:!1,spectatorViewPlayerId:"",diceRolls:[],firstPlayerId:"",rematchRequested:[],isWaitingForGameState:!1,heroSelections:{}}};case"ONLINE_GAME_OVER":{let s=1;return e.winnerId&&typeof e.winnerId=="string"?(s=E.online.battlePlayers.findIndex(n=>n.playerId===e.winnerId)+1,(s<1||s>2)&&(s=1)):console.error("[ONLINE_GAME_OVER] 无法解析 winner，action内容:",e),{...E,phase:"onlineGameOver",winner:s,online:{...E.online,lastLoserId:e.loserId}}}case"PLAY_HERO_SKILL":{const{playerId:s,skillIndex:t,targetPlayerId:n,targetCardId:i}=e;return fa(E,s,t,n,i)}default:return E}},ie=(E,e)=>Na(E,e),Ke=E=>({id:E.id,templateKey:be(E),name:E.name,type:E.type,cost:E.cost,attack:E.attack,health:E.health,maxHealth:E.maxHealth,armorValue:E.armorValue,imageData:E.imageData}),Ha=E=>({id:E.id,templateKey:be(E),name:E.name,type:E.type,cost:E.cost,attack:E.attack,health:E.health,maxHealth:E.maxHealth,armorValue:E.armorValue,imageData:E.imageData,canAttack:E.canAttack,hasAttacked:E.hasAttacked,attacksThisTurn:E.attacksThisTurn,maxAttacksPerTurn:E.maxAttacksPerTurn,divineShieldActive:E.divineShieldActive,canAttackHeroes:E.canAttackHeroes,canAttackMinions:E.canAttackMinions,playedThisTurn:E.playedThisTurn,isDefending:E.isDefending,preparation:E.preparation,markCount:E.markCount,pendingNextTurnEffect:E.pendingNextTurnEffect?JSON.stringify(E.pendingNextTurnEffect):void 0,keywords:E.keywords}),Xt=E=>{const e=s=>({id:s.id,name:s.name,health:s.health,maxHealth:s.maxHealth,energy:s.energy,maxEnergy:s.maxEnergy,bonusEnergy:s.bonusEnergy||0,heroMarkCount:s.heroMarkCount||0,heroSkillUsed:s.heroSkillUsed||[],heroCard:s.heroCard?Ke(s.heroCard):null,elementStatus:s.elementStatus,frozen:s.frozen,hand:s.hand.map(Ke),board:s.board.map(Ha),pendingSpellNextTurnEffects:s.pendingSpellNextTurnEffects&&s.pendingSpellNextTurnEffects.length>0?JSON.stringify(s.pendingSpellNextTurnEffects.map(t=>({effect:t.effect,sourceCard:{templateKey:be(t.sourceCard),id:t.sourceCard.id,name:t.sourceCard.name,type:t.sourceCard.type}}))):void 0});return{currentPlayerId:E.currentPlayerId,turnNumber:E.turnNumber,players:[e(E.players[0]),e(E.players[1])],winner:E.winner,gamePhase:E.phase==="mulligan"?"mulligan":E.phase==="onlineGameOver"?"onlineGameOver":E.phase==="gameOver"?"gameOver":E.phase==="onlineBattle"?"onlineBattle":"playing",newlyDrawnCardIds:E.newlyDrawnCardIds,recentLogs:E.gameLogs.slice(-10).map(s=>({turn:s.turn,type:s.type,message:s.message})),timestamp:Date.now(),mulliganCards:E.mulliganCards?.map(Ke),mulliganSelected:E.mulliganSelected,p2MulliganCards:E.p2MulliganCards?.map(Ke),p2MulliganSelected:E.p2MulliganSelected,mulliganDone:E.mulliganDone,mulliganFirstPlayer:E.mulliganFirstPlayer,waitingForNextPlayer:E.waitingForNextPlayer,discardPileDiff:[]}},xt=(E,e)=>{const s=e.find(t=>be(t.card)===E);return s?s.card:null},Xe=(E,e)=>{if(E.name==="幸运币")return{id:E.id,name:"幸运币",cost:0,attack:0,health:0,maxHealth:0,type:"spell",keywords:[],legacyEffect:"gain_energy",legacyEffectValue:1,imageData:"/cards/coin.png"};const s=xt(E.templateKey,e);if(!s){const t=e.find(n=>n.card.name===E.name&&n.card.type===E.type);return t?(console.log("[deserialize] 回退匹配成功:",E.name,E.type),{...t.card,id:E.id,cost:E.cost,attack:E.attack,health:E.health,maxHealth:E.maxHealth,armorValue:E.armorValue,imageData:E.imageData||t.card.imageData}):(console.warn(`[deserialize] 模板缺失: ${E.templateKey}，降级重建。name=${E.name}, type=${E.type}, sharedDeck大小=${e.length}`),{id:E.id,name:E.name||"?",cost:E.cost,attack:E.attack,health:E.health,maxHealth:E.maxHealth,type:E.type||"minion",keywords:E.keywords||[],armorValue:E.armorValue,imageData:E.imageData})}return{...s,id:E.id,cost:E.cost,attack:E.attack,health:E.health,maxHealth:E.maxHealth,armorValue:E.armorValue}},Va=(E,e)=>({...Xe(E,e),canAttack:E.canAttack??!0,hasAttacked:E.hasAttacked??!1,attacksThisTurn:E.attacksThisTurn??0,maxAttacksPerTurn:E.maxAttacksPerTurn??1,divineShieldActive:E.divineShieldActive??!1,canAttackHeroes:E.canAttackHeroes??!0,canAttackMinions:E.canAttackMinions??!0,playedThisTurn:E.playedThisTurn??!1,isDefending:E.isDefending??!1,preparation:E.preparation??0,markCount:E.markCount,elementStatus:E.elementStatus,frozen:E.frozen??!1,pendingNextTurnEffect:E.pendingNextTurnEffect?JSON.parse(E.pendingNextTurnEffect):void 0,pendingNextTurnEffectOwnerId:void 0,keywords:E.keywords??[]}),Zt=(E,e)=>{let s=0,t=0;const n=i=>{const r={id:i.id,name:i.name,health:i.health,maxHealth:i.maxHealth,energy:i.energy,maxEnergy:i.maxEnergy,bonusEnergy:i.bonusEnergy,heroMarkCount:i.heroMarkCount,heroSkillUsed:i.heroSkillUsed,heroCard:i.heroCard?Xe(i.heroCard,e):null,elementStatus:i.elementStatus,frozen:i.frozen??!1,hand:i.hand.map(a=>Xe(a,e)),board:i.board.map(a=>Va(a,e)),deck:[],personalBattleDeck:[],halfPublicDeck:[]};if(i.pendingSpellNextTurnEffects)try{const a=JSON.parse(i.pendingSpellNextTurnEffects);r.pendingSpellNextTurnEffects=a.map(o=>{const l=xt(o.sourceCard.templateKey,e);return{effect:o.effect,sourceCard:l?{...l,id:o.sourceCard.id}:{id:o.sourceCard.id,name:o.sourceCard.name,type:o.sourceCard.type,cost:0,attack:0,health:0,maxHealth:0,keywords:[]}}})}catch(a){console.warn("[deserializeGameState] 解析 pendingSpellNextTurnEffects 失败:",a)}return r};for(const i of E.players)for(const r of[...i.hand,...i.board])t++,xt(r.templateKey,e)||s++;return s>0?console.warn(`[deserializeGameState] 模板缺失 ${s}/${t} (${(s/t*100).toFixed(1)}%)`):console.log(`[deserializeGameState] 全部 ${t} 张卡牌模板匹配成功`),{currentPlayerId:E.currentPlayerId,turnNumber:E.turnNumber,players:[n(E.players[0]),n(E.players[1])],winner:E.winner,phase:E.gamePhase,newlyDrawnCardIds:E.newlyDrawnCardIds,mulliganCards:E.mulliganCards?.map(i=>Xe(i,e)),mulliganSelected:E.mulliganSelected,mulliganDone:E.mulliganDone??0,mulliganFirstPlayer:E.mulliganFirstPlayer??1,p2MulliganCards:E.p2MulliganCards?.map(i=>Xe(i,e)),p2MulliganSelected:E.p2MulliganSelected,waitingForNextPlayer:E.waitingForNextPlayer??!1}},$t=Object.freeze(Object.defineProperty({__proto__:null,cardsToDeckEntries:Je,deckEntriesToCards:Ye,deserializeGameState:Zt,drawCardInternalWithReturn:je,executeEffect:we,findHeroGroup:Ze,gameReducer:ie,getAllHeroCards:Ft,getCardTemplateKey:be,getGroupById:zt,getPublicGroup:De,initGameState:jt,serializeGameState:Xt,shuffleWithSeed:ia},Symbol.toStringTag,{value:"Module"})),za="MiaoKaBao_Deck",Fa=1,Ne="deck";function it(){return new Promise((E,e)=>{const s=indexedDB.open(za,Fa);s.onupgradeneeded=()=>{const t=s.result;t.objectStoreNames.contains(Ne)||t.createObjectStore(Ne,{keyPath:"id"})},s.onsuccess=()=>E(s.result),s.onerror=()=>e(s.error)})}async function _t(E,e,s){try{const t=await it(),n=t.transaction(Ne,"readwrite");n.objectStore(Ne).put({id:"main",sharedDeck:E,heroCards:e,groups:s,updatedAt:Date.now()}),await new Promise((r,a)=>{n.oncomplete=()=>r(),n.onerror=()=>a(n.error)}),t.close()}catch(t){console.warn("[deckStorage] 保存卡包失败:",t)}}async function ja(){try{const E=await it(),s=E.transaction(Ne,"readonly").objectStore(Ne),t=await new Promise((n,i)=>{const r=s.get("main");r.onsuccess=()=>n(r.result),r.onerror=()=>i(r.error)});return E.close(),t&&t.sharedDeck&&t.sharedDeck.length>0?{sharedDeck:t.sharedDeck,heroCards:t.heroCards||[],groups:t.groups}:null}catch(E){return console.warn("[deckStorage] 读取卡包失败:",E),null}}async function lt(E){try{const e=await it(),s=e.transaction(Ne,"readwrite"),t=s.objectStore(Ne);E?t.put({id:"folderHandle",handle:E,updatedAt:Date.now()}):t.delete("folderHandle"),await new Promise((n,i)=>{s.oncomplete=()=>n(),s.onerror=()=>i(s.error)}),e.close()}catch(e){console.warn("[deckStorage] 保存文件夹句柄失败:",e)}}async function Ga(){try{const E=await it(),s=E.transaction(Ne,"readonly").objectStore(Ne),t=await new Promise((n,i)=>{const r=s.get("folderHandle");r.onsuccess=()=>n(r.result),r.onerror=()=>i(r.error)});return E.close(),t?.handle||null}catch(E){return console.warn("[deckStorage] 读取文件夹句柄失败:",E),null}}var tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ot(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var dt,Pt;function Ua(){return Pt||(Pt=1,dt=function(E,e,s){var t=[],n=E.length;if(n===0)return t;var i=e<0?Math.max(0,e+n):e||0;for(s!==void 0&&(n=s<0?s+n:s);n-- >i;)t[n-i]=E[n];return t}),dt}var ct={},Tt;function Jt(){return Tt||(Tt=1,(function(E){(function(e){e(typeof DO_NOT_EXPORT_CRC>"u"?E:{})})(function(e){e.version="0.3.0";function s(){for(var l=0,d=new Array(256),c=0;c!=256;++c)l=c,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,l=l&1?-306674912^l>>>1:l>>>1,d[c]=l;return typeof Int32Array<"u"?new Int32Array(d):d}var t=s(),n=typeof Buffer<"u";function i(l){if(l.length>32768&&n)return a(new Buffer(l));for(var d=-1,c=l.length-1,p=0;p<c;)d=t[(d^l.charCodeAt(p++))&255]^d>>>8,d=t[(d^l.charCodeAt(p++))&255]^d>>>8;return p===c&&(d=d>>>8^t[(d^l.charCodeAt(p))&255]),d^-1}function r(l){if(l.length>1e4)return a(l);for(var d=-1,c=0,p=l.length-3;c<p;)d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255];for(;c<p+3;)d=d>>>8^t[(d^l[c++])&255];return d^-1}function a(l){for(var d=-1,c=0,p=l.length-7;c<p;)d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255],d=d>>>8^t[(d^l[c++])&255];for(;c<p+7;)d=d>>>8^t[(d^l[c++])&255];return d^-1}function o(l){for(var d=-1,c=0,p=l.length,h,m;c<p;)h=l.charCodeAt(c++),h<128?d=d>>>8^t[(d^h)&255]:h<2048?(d=d>>>8^t[(d^(192|h>>6&31))&255],d=d>>>8^t[(d^(128|h&63))&255]):h>=55296&&h<57344?(h=(h&1023)+64,m=l.charCodeAt(c++)&1023,d=d>>>8^t[(d^(240|h>>8&7))&255],d=d>>>8^t[(d^(128|h>>2&63))&255],d=d>>>8^t[(d^(128|m>>6&15|h&3))&255],d=d>>>8^t[(d^(128|m&63))&255]):(d=d>>>8^t[(d^(224|h>>12&15))&255],d=d>>>8^t[(d^(128|h>>6&63))&255],d=d>>>8^t[(d^(128|h&63))&255]);return d^-1}e.table=t,e.bstr=i,e.buf=r,e.str=o})})(ct)),ct}var ht,At;function Wa(){if(At)return ht;At=1;var E=Ua(),e=Jt();ht=i;var s=new Uint8Array(4),t=new Int32Array(s.buffer),n=new Uint32Array(s.buffer);function i(r){var a=8,o=a,l;for(l=0;l<r.length;l++)a+=r[l].data.length,a+=12;var d=new Uint8Array(a);for(d[0]=137,d[1]=80,d[2]=78,d[3]=71,d[4]=13,d[5]=10,d[6]=26,d[7]=10,l=0;l<r.length;l++){var c=r[l],p=c.name,h=c.data,m=h.length,f=[p.charCodeAt(0),p.charCodeAt(1),p.charCodeAt(2),p.charCodeAt(3)];n[0]=m,d[o++]=s[3],d[o++]=s[2],d[o++]=s[1],d[o++]=s[0],d[o++]=f[0],d[o++]=f[1],d[o++]=f[2],d[o++]=f[3];for(var b=0;b<m;)d[o++]=h[b++];var g=f.concat(E(h)),y=e.buf(g);t[0]=y,d[o++]=s[3],d[o++]=s[2],d[o++]=s[1],d[o++]=s[0]}return d}return ht}var Ya=Wa();const ut=ot(Ya);var ft,Mt;function qa(){if(Mt)return ft;Mt=1;var E=Jt();ft=n;var e=new Uint8Array(4),s=new Int32Array(e.buffer),t=new Uint32Array(e.buffer);function n(i){if(i[0]!==137)throw new Error("Invalid .png file header");if(i[1]!==80)throw new Error("Invalid .png file header");if(i[2]!==78)throw new Error("Invalid .png file header");if(i[3]!==71)throw new Error("Invalid .png file header");if(i[4]!==13)throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");if(i[5]!==10)throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");if(i[6]!==26)throw new Error("Invalid .png file header");if(i[7]!==10)throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");for(var r=!1,a=[],o=8;o<i.length;){e[3]=i[o++],e[2]=i[o++],e[1]=i[o++],e[0]=i[o++];var l=t[0]+4,d=new Uint8Array(l);d[0]=i[o++],d[1]=i[o++],d[2]=i[o++],d[3]=i[o++];var c=String.fromCharCode(d[0])+String.fromCharCode(d[1])+String.fromCharCode(d[2])+String.fromCharCode(d[3]);if(!a.length&&c!=="IHDR")throw new Error("IHDR header missing");if(c==="IEND"){r=!0,a.push({name:c,data:new Uint8Array(0)});break}for(var p=4;p<l;p++)d[p]=i[o++];e[3]=i[o++],e[2]=i[o++],e[1]=i[o++],e[0]=i[o++];var h=s[0],m=E.buf(d);if(m!==h)throw new Error("CRC values for "+c+" header do not match, PNG file is likely corrupted");var f=new Uint8Array(d.buffer.slice(4));a.push({name:c,data:f})}if(!r)throw new Error(".png file ended prematurely: no IEND header was found");return a}return ft}var Ka=qa();const We=ot(Ka);var at={},pt,Dt;function Xa(){if(Dt)return pt;Dt=1,pt=E;function E(e,s){if(e=String(e),s=String(s),!/^[\x00-\xFF]+$/.test(e)||!/^[\x00-\xFF]+$/.test(s))throw new Error("Only Latin-1 characters are permitted in PNG tEXt chunks. You might want to consider base64 encoding and/or zEXt compression");if(e.length>=80)throw new Error('Keyword "'+e+'" is longer than the 79-character limit imposed by the PNG specification');for(var t=e.length+s.length+1,n=new Uint8Array(t),i=0,r,a=0;a<e.length;a++){if(!(r=e.charCodeAt(a)))throw new Error("0x00 character is not permitted in tEXt keywords");n[i++]=r}n[i++]=0;for(var o=0;o<s.length;o++){if(!(r=s.charCodeAt(o)))throw new Error("0x00 character is not permitted in tEXt content");n[i++]=r}return{name:"tEXt",data:n}}return pt}var mt,Lt;function Za(){if(Lt)return mt;Lt=1,mt=E;function E(e){e.data&&e.name&&(e=e.data);for(var s=!0,t="",n="",i=0;i<e.length;i++){var r=e[i];if(s)r?n+=String.fromCharCode(r):s=!1;else if(r)t+=String.fromCharCode(r);else throw new Error("Invalid NULL character found. 0x00 character is not permitted in tEXt content")}return{keyword:n,text:t}}return mt}var Rt;function Ja(){return Rt||(Rt=1,at.encode=Xa(),at.decode=Za()),at}var Qa=Ja();const Ve=ot(Qa);function st(E){throw new Error('Could not dynamically require "'+E+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var gt={exports:{}};var Bt;function es(){return Bt||(Bt=1,(function(E,e){(function(s){E.exports=s()})(function(){return(function s(t,n,i){function r(l,d){if(!n[l]){if(!t[l]){var c=typeof st=="function"&&st;if(!d&&c)return c(l,!0);if(a)return a(l,!0);var p=new Error("Cannot find module '"+l+"'");throw p.code="MODULE_NOT_FOUND",p}var h=n[l]={exports:{}};t[l][0].call(h.exports,function(m){var f=t[l][1][m];return r(f||m)},h,h.exports,s,t,n,i)}return n[l].exports}for(var a=typeof st=="function"&&st,o=0;o<i.length;o++)r(i[o]);return r})({1:[function(s,t,n){var i=s("./utils"),r=s("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(o){for(var l,d,c,p,h,m,f,b=[],g=0,y=o.length,x=y,k=i.getTypeOf(o)!=="string";g<o.length;)x=y-g,c=k?(l=o[g++],d=g<y?o[g++]:0,g<y?o[g++]:0):(l=o.charCodeAt(g++),d=g<y?o.charCodeAt(g++):0,g<y?o.charCodeAt(g++):0),p=l>>2,h=(3&l)<<4|d>>4,m=1<x?(15&d)<<2|c>>6:64,f=2<x?63&c:64,b.push(a.charAt(p)+a.charAt(h)+a.charAt(m)+a.charAt(f));return b.join("")},n.decode=function(o){var l,d,c,p,h,m,f=0,b=0,g="data:";if(o.substr(0,g.length)===g)throw new Error("Invalid base64 input, it looks like a data url.");var y,x=3*(o=o.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(o.charAt(o.length-1)===a.charAt(64)&&x--,o.charAt(o.length-2)===a.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=r.uint8array?new Uint8Array(0|x):new Array(0|x);f<o.length;)l=a.indexOf(o.charAt(f++))<<2|(p=a.indexOf(o.charAt(f++)))>>4,d=(15&p)<<4|(h=a.indexOf(o.charAt(f++)))>>2,c=(3&h)<<6|(m=a.indexOf(o.charAt(f++))),y[b++]=l,h!==64&&(y[b++]=d),m!==64&&(y[b++]=c);return y}},{"./support":30,"./utils":32}],2:[function(s,t,n){var i=s("./external"),r=s("./stream/DataWorker"),a=s("./stream/Crc32Probe"),o=s("./stream/DataLengthProbe");function l(d,c,p,h,m){this.compressedSize=d,this.uncompressedSize=c,this.crc32=p,this.compression=h,this.compressedContent=m}l.prototype={getContentWorker:function(){var d=new r(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")),c=this;return d.on("end",function(){if(this.streamInfo.data_length!==c.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new r(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},l.createWorkerFrom=function(d,c,p){return d.pipe(new a).pipe(new o("uncompressedSize")).pipe(c.compressWorker(p)).pipe(new o("compressedSize")).withStreamInfo("compression",c)},t.exports=l},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(s,t,n){var i=s("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},n.DEFLATE=s("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(s,t,n){var i=s("./utils"),r=(function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var d=0;d<8;d++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o})();t.exports=function(a,o){return a!==void 0&&a.length?i.getTypeOf(a)!=="string"?(function(l,d,c,p){var h=r,m=p+c;l^=-1;for(var f=p;f<m;f++)l=l>>>8^h[255&(l^d[f])];return-1^l})(0|o,a,a.length,0):(function(l,d,c,p){var h=r,m=p+c;l^=-1;for(var f=p;f<m;f++)l=l>>>8^h[255&(l^d.charCodeAt(f))];return-1^l})(0|o,a,a.length,0):0}},{"./utils":32}],5:[function(s,t,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(s,t,n){var i=null;i=typeof Promise<"u"?Promise:s("lie"),t.exports={Promise:i}},{lie:37}],7:[function(s,t,n){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",r=s("pako"),a=s("./utils"),o=s("./stream/GenericWorker"),l=i?"uint8array":"array";function d(c,p){o.call(this,"FlateWorker/"+c),this._pako=null,this._pakoAction=c,this._pakoOptions=p,this.meta={}}n.magic="\b\0",a.inherits(d,o),d.prototype.processChunk=function(c){this.meta=c.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(l,c.data),!1)},d.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new r[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var c=this;this._pako.onData=function(p){c.push({data:p,meta:c.meta})}},n.compressWorker=function(c){return new d("Deflate",c)},n.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(s,t,n){function i(h,m){var f,b="";for(f=0;f<m;f++)b+=String.fromCharCode(255&h),h>>>=8;return b}function r(h,m,f,b,g,y){var x,k,u=h.file,w=h.compression,I=y!==l.utf8encode,S=a.transformTo("string",y(u.name)),T=a.transformTo("string",l.utf8encode(u.name)),D=u.comment,O=a.transformTo("string",y(D)),P=a.transformTo("string",l.utf8encode(D)),B=T.length!==u.name.length,$=P.length!==D.length,N="",J="",U="",ne=u.dir,Z=u.date,re={crc32:0,compressedSize:0,uncompressedSize:0};m&&!f||(re.crc32=h.crc32,re.compressedSize=h.compressedSize,re.uncompressedSize=h.uncompressedSize);var q=0;m&&(q|=8),I||!B&&!$||(q|=2048);var C=0,_=0;ne&&(C|=16),g==="UNIX"?(_=798,C|=(function(V,Q){var de=V;return V||(de=Q?16893:33204),(65535&de)<<16})(u.unixPermissions,ne)):(_=20,C|=(function(V){return 63&(V||0)})(u.dosPermissions)),x=Z.getUTCHours(),x<<=6,x|=Z.getUTCMinutes(),x<<=5,x|=Z.getUTCSeconds()/2,k=Z.getUTCFullYear()-1980,k<<=4,k|=Z.getUTCMonth()+1,k<<=5,k|=Z.getUTCDate(),B&&(J=i(1,1)+i(d(S),4)+T,N+="up"+i(J.length,2)+J),$&&(U=i(1,1)+i(d(O),4)+P,N+="uc"+i(U.length,2)+U);var L="";return L+=`
\0`,L+=i(q,2),L+=w.magic,L+=i(x,2),L+=i(k,2),L+=i(re.crc32,4),L+=i(re.compressedSize,4),L+=i(re.uncompressedSize,4),L+=i(S.length,2),L+=i(N.length,2),{fileRecord:c.LOCAL_FILE_HEADER+L+S+N,dirRecord:c.CENTRAL_FILE_HEADER+i(_,2)+L+i(O.length,2)+"\0\0\0\0"+i(C,4)+i(b,4)+S+N+O}}var a=s("../utils"),o=s("../stream/GenericWorker"),l=s("../utf8"),d=s("../crc32"),c=s("../signature");function p(h,m,f,b){o.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=m,this.zipPlatform=f,this.encodeFileName=b,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(p,o),p.prototype.push=function(h){var m=h.meta.percent||0,f=this.entriesCount,b=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,o.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:f?(m+100*(f-b-1))/f:100}}))},p.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var m=this.streamFiles&&!h.file.dir;if(m){var f=r(h,m,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:f.fileRecord,meta:{percent:0}})}else this.accumulate=!0},p.prototype.closedSource=function(h){this.accumulate=!1;var m=this.streamFiles&&!h.file.dir,f=r(h,m,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(f.dirRecord),m)this.push({data:(function(b){return c.DATA_DESCRIPTOR+i(b.crc32,4)+i(b.compressedSize,4)+i(b.uncompressedSize,4)})(h),meta:{percent:100}});else for(this.push({data:f.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},p.prototype.flush=function(){for(var h=this.bytesWritten,m=0;m<this.dirRecords.length;m++)this.push({data:this.dirRecords[m],meta:{percent:100}});var f=this.bytesWritten-h,b=(function(g,y,x,k,u){var w=a.transformTo("string",u(k));return c.CENTRAL_DIRECTORY_END+"\0\0\0\0"+i(g,2)+i(g,2)+i(y,4)+i(x,4)+i(w.length,2)+w})(this.dirRecords.length,f,h,this.zipComment,this.encodeFileName);this.push({data:b,meta:{percent:100}})},p.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},p.prototype.registerPrevious=function(h){this._sources.push(h);var m=this;return h.on("data",function(f){m.processChunk(f)}),h.on("end",function(){m.closedSource(m.previous.streamInfo),m._sources.length?m.prepareNextSource():m.end()}),h.on("error",function(f){m.error(f)}),this},p.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},p.prototype.error=function(h){var m=this._sources;if(!o.prototype.error.call(this,h))return!1;for(var f=0;f<m.length;f++)try{m[f].error(h)}catch{}return!0},p.prototype.lock=function(){o.prototype.lock.call(this);for(var h=this._sources,m=0;m<h.length;m++)h[m].lock()},t.exports=p},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(s,t,n){var i=s("../compressions"),r=s("./ZipFileWorker");n.generateWorker=function(a,o,l){var d=new r(o.streamFiles,l,o.platform,o.encodeFileName),c=0;try{a.forEach(function(p,h){c++;var m=(function(y,x){var k=y||x,u=i[k];if(!u)throw new Error(k+" is not a valid compression method !");return u})(h.options.compression,o.compression),f=h.options.compressionOptions||o.compressionOptions||{},b=h.dir,g=h.date;h._compressWorker(m,f).withStreamInfo("file",{name:p,dir:b,date:g,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(d)}),d.entriesCount=c}catch(p){d.error(p)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(s,t,n){function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var r=new i;for(var a in this)typeof this[a]!="function"&&(r[a]=this[a]);return r}}(i.prototype=s("./object")).loadAsync=s("./load"),i.support=s("./support"),i.defaults=s("./defaults"),i.version="3.10.1",i.loadAsync=function(r,a){return new i().loadAsync(r,a)},i.external=s("./external"),t.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(s,t,n){var i=s("./utils"),r=s("./external"),a=s("./utf8"),o=s("./zipEntries"),l=s("./stream/Crc32Probe"),d=s("./nodejsUtils");function c(p){return new r.Promise(function(h,m){var f=p.decompressed.getContentWorker().pipe(new l);f.on("error",function(b){m(b)}).on("end",function(){f.streamInfo.crc32!==p.decompressed.crc32?m(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}t.exports=function(p,h){var m=this;return h=i.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),d.isNode&&d.isStream(p)?r.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",p,!0,h.optimizedBinaryString,h.base64).then(function(f){var b=new o(h);return b.load(f),b}).then(function(f){var b=[r.Promise.resolve(f)],g=f.files;if(h.checkCRC32)for(var y=0;y<g.length;y++)b.push(c(g[y]));return r.Promise.all(b)}).then(function(f){for(var b=f.shift(),g=b.files,y=0;y<g.length;y++){var x=g[y],k=x.fileNameStr,u=i.resolve(x.fileNameStr);m.file(u,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:h.createFolders}),x.dir||(m.file(u).unsafeOriginalName=k)}return b.zipComment.length&&(m.comment=b.zipComment),m})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(s,t,n){var i=s("../utils"),r=s("../stream/GenericWorker");function a(o,l){r.call(this,"Nodejs stream input adapter for "+o),this._upstreamEnded=!1,this._bindStream(l)}i.inherits(a,r),a.prototype._bindStream=function(o){var l=this;(this._stream=o).pause(),o.on("data",function(d){l.push({data:d,meta:{percent:0}})}).on("error",function(d){l.isPaused?this.generatedError=d:l.error(d)}).on("end",function(){l.isPaused?l._upstreamEnded=!0:l.end()})},a.prototype.pause=function(){return!!r.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!r.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(s,t,n){var i=s("readable-stream").Readable;function r(a,o,l){i.call(this,o),this._helper=a;var d=this;a.on("data",function(c,p){d.push(c)||d._helper.pause(),l&&l(p)}).on("error",function(c){d.emit("error",c)}).on("end",function(){d.push(null)})}s("../utils").inherits(r,i),r.prototype._read=function(){this._helper.resume()},t.exports=r},{"../utils":32,"readable-stream":16}],14:[function(s,t,n){t.exports={isNode:typeof Buffer<"u",newBufferFrom:function(i,r){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(i,r);if(typeof i=="number")throw new Error('The "data" argument must not be a number');return new Buffer(i,r)},allocBuffer:function(i){if(Buffer.alloc)return Buffer.alloc(i);var r=new Buffer(i);return r.fill(0),r},isBuffer:function(i){return Buffer.isBuffer(i)},isStream:function(i){return i&&typeof i.on=="function"&&typeof i.pause=="function"&&typeof i.resume=="function"}}},{}],15:[function(s,t,n){function i(u,w,I){var S,T=a.getTypeOf(w),D=a.extend(I||{},d);D.date=D.date||new Date,D.compression!==null&&(D.compression=D.compression.toUpperCase()),typeof D.unixPermissions=="string"&&(D.unixPermissions=parseInt(D.unixPermissions,8)),D.unixPermissions&&16384&D.unixPermissions&&(D.dir=!0),D.dosPermissions&&16&D.dosPermissions&&(D.dir=!0),D.dir&&(u=g(u)),D.createFolders&&(S=b(u))&&y.call(this,S,!0);var O=T==="string"&&D.binary===!1&&D.base64===!1;I&&I.binary!==void 0||(D.binary=!O),(w instanceof c&&w.uncompressedSize===0||D.dir||!w||w.length===0)&&(D.base64=!1,D.binary=!0,w="",D.compression="STORE",T="string");var P=null;P=w instanceof c||w instanceof o?w:m.isNode&&m.isStream(w)?new f(u,w):a.prepareContent(u,w,D.binary,D.optimizedBinaryString,D.base64);var B=new p(u,P,D);this.files[u]=B}var r=s("./utf8"),a=s("./utils"),o=s("./stream/GenericWorker"),l=s("./stream/StreamHelper"),d=s("./defaults"),c=s("./compressedObject"),p=s("./zipObject"),h=s("./generate"),m=s("./nodejsUtils"),f=s("./nodejs/NodejsStreamInputAdapter"),b=function(u){u.slice(-1)==="/"&&(u=u.substring(0,u.length-1));var w=u.lastIndexOf("/");return 0<w?u.substring(0,w):""},g=function(u){return u.slice(-1)!=="/"&&(u+="/"),u},y=function(u,w){return w=w!==void 0?w:d.createFolders,u=g(u),this.files[u]||i.call(this,u,null,{dir:!0,createFolders:w}),this.files[u]};function x(u){return Object.prototype.toString.call(u)==="[object RegExp]"}var k={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(u){var w,I,S;for(w in this.files)S=this.files[w],(I=w.slice(this.root.length,w.length))&&w.slice(0,this.root.length)===this.root&&u(I,S)},filter:function(u){var w=[];return this.forEach(function(I,S){u(I,S)&&w.push(S)}),w},file:function(u,w,I){if(arguments.length!==1)return u=this.root+u,i.call(this,u,w,I),this;if(x(u)){var S=u;return this.filter(function(D,O){return!O.dir&&S.test(D)})}var T=this.files[this.root+u];return T&&!T.dir?T:null},folder:function(u){if(!u)return this;if(x(u))return this.filter(function(T,D){return D.dir&&u.test(T)});var w=this.root+u,I=y.call(this,w),S=this.clone();return S.root=I.name,S},remove:function(u){u=this.root+u;var w=this.files[u];if(w||(u.slice(-1)!=="/"&&(u+="/"),w=this.files[u]),w&&!w.dir)delete this.files[u];else for(var I=this.filter(function(T,D){return D.name.slice(0,u.length)===u}),S=0;S<I.length;S++)delete this.files[I[S].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(u){var w,I={};try{if((I=a.extend(u||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:r.utf8encode})).type=I.type.toLowerCase(),I.compression=I.compression.toUpperCase(),I.type==="binarystring"&&(I.type="string"),!I.type)throw new Error("No output type specified.");a.checkSupport(I.type),I.platform!=="darwin"&&I.platform!=="freebsd"&&I.platform!=="linux"&&I.platform!=="sunos"||(I.platform="UNIX"),I.platform==="win32"&&(I.platform="DOS");var S=I.comment||this.comment||"";w=h.generateWorker(this,I,S)}catch(T){(w=new o("error")).error(T)}return new l(w,I.type||"string",I.mimeType)},generateAsync:function(u,w){return this.generateInternalStream(u).accumulate(w)},generateNodeStream:function(u,w){return(u=u||{}).type||(u.type="nodebuffer"),this.generateInternalStream(u).toNodejsStream(w)}};t.exports=k},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(s,t,n){t.exports=s("stream")},{stream:void 0}],17:[function(s,t,n){var i=s("./DataReader");function r(a){i.call(this,a);for(var o=0;o<this.data.length;o++)a[o]=255&a[o]}s("../utils").inherits(r,i),r.prototype.byteAt=function(a){return this.data[this.zero+a]},r.prototype.lastIndexOfSignature=function(a){for(var o=a.charCodeAt(0),l=a.charCodeAt(1),d=a.charCodeAt(2),c=a.charCodeAt(3),p=this.length-4;0<=p;--p)if(this.data[p]===o&&this.data[p+1]===l&&this.data[p+2]===d&&this.data[p+3]===c)return p-this.zero;return-1},r.prototype.readAndCheckSignature=function(a){var o=a.charCodeAt(0),l=a.charCodeAt(1),d=a.charCodeAt(2),c=a.charCodeAt(3),p=this.readData(4);return o===p[0]&&l===p[1]&&d===p[2]&&c===p[3]},r.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var o=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,o},t.exports=r},{"../utils":32,"./DataReader":18}],18:[function(s,t,n){var i=s("../utils");function r(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}r.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var o,l=0;for(this.checkOffset(a),o=this.index+a-1;o>=this.index;o--)l=(l<<8)+this.byteAt(o);return this.index+=a,l},readString:function(a){return i.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},t.exports=r},{"../utils":32}],19:[function(s,t,n){var i=s("./Uint8ArrayReader");function r(a){i.call(this,a)}s("../utils").inherits(r,i),r.prototype.readData=function(a){this.checkOffset(a);var o=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,o},t.exports=r},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(s,t,n){var i=s("./DataReader");function r(a){i.call(this,a)}s("../utils").inherits(r,i),r.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},r.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},r.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},r.prototype.readData=function(a){this.checkOffset(a);var o=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,o},t.exports=r},{"../utils":32,"./DataReader":18}],21:[function(s,t,n){var i=s("./ArrayReader");function r(a){i.call(this,a)}s("../utils").inherits(r,i),r.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var o=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,o},t.exports=r},{"../utils":32,"./ArrayReader":17}],22:[function(s,t,n){var i=s("../utils"),r=s("../support"),a=s("./ArrayReader"),o=s("./StringReader"),l=s("./NodeBufferReader"),d=s("./Uint8ArrayReader");t.exports=function(c){var p=i.getTypeOf(c);return i.checkSupport(p),p!=="string"||r.uint8array?p==="nodebuffer"?new l(c):r.uint8array?new d(i.transformTo("uint8array",c)):new a(i.transformTo("array",c)):new o(c)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(s,t,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(s,t,n){var i=s("./GenericWorker"),r=s("../utils");function a(o){i.call(this,"ConvertWorker to "+o),this.destType=o}r.inherits(a,i),a.prototype.processChunk=function(o){this.push({data:r.transformTo(this.destType,o.data),meta:o.meta})},t.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(s,t,n){var i=s("./GenericWorker"),r=s("../crc32");function a(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}s("../utils").inherits(a,i),a.prototype.processChunk=function(o){this.streamInfo.crc32=r(o.data,this.streamInfo.crc32||0),this.push(o)},t.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(s,t,n){var i=s("../utils"),r=s("./GenericWorker");function a(o){r.call(this,"DataLengthProbe for "+o),this.propName=o,this.withStreamInfo(o,0)}i.inherits(a,r),a.prototype.processChunk=function(o){if(o){var l=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=l+o.data.length}r.prototype.processChunk.call(this,o)},t.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(s,t,n){var i=s("../utils"),r=s("./GenericWorker");function a(o){r.call(this,"DataWorker");var l=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,o.then(function(d){l.dataIsReady=!0,l.data=d,l.max=d&&d.length||0,l.type=i.getTypeOf(d),l.isPaused||l._tickAndRepeat()},function(d){l.error(d)})}i.inherits(a,r),a.prototype.cleanUp=function(){r.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!r.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var o=null,l=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":o=this.data.substring(this.index,l);break;case"uint8array":o=this.data.subarray(this.index,l);break;case"array":case"nodebuffer":o=this.data.slice(this.index,l)}return this.index=l,this.push({data:o,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(s,t,n){function i(r){this.name=r||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(r){this.emit("data",r)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(r){this.emit("error",r)}return!0},error:function(r){return!this.isFinished&&(this.isPaused?this.generatedError=r:(this.isFinished=!0,this.emit("error",r),this.previous&&this.previous.error(r),this.cleanUp()),!0)},on:function(r,a){return this._listeners[r].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(r,a){if(this._listeners[r])for(var o=0;o<this._listeners[r].length;o++)this._listeners[r][o].call(this,a)},pipe:function(r){return r.registerPrevious(this)},registerPrevious:function(r){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=r.streamInfo,this.mergeStreamInfo(),this.previous=r;var a=this;return r.on("data",function(o){a.processChunk(o)}),r.on("end",function(){a.end()}),r.on("error",function(o){a.error(o)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var r=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),r=!0),this.previous&&this.previous.resume(),!r},flush:function(){},processChunk:function(r){this.push(r)},withStreamInfo:function(r,a){return this.extraStreamInfo[r]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var r in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,r)&&(this.streamInfo[r]=this.extraStreamInfo[r])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var r="Worker "+this.name;return this.previous?this.previous+" -> "+r:r}},t.exports=i},{}],29:[function(s,t,n){var i=s("../utils"),r=s("./ConvertWorker"),a=s("./GenericWorker"),o=s("../base64"),l=s("../support"),d=s("../external"),c=null;if(l.nodestream)try{c=s("../nodejs/NodejsStreamOutputAdapter")}catch{}function p(m,f){return new d.Promise(function(b,g){var y=[],x=m._internalType,k=m._outputType,u=m._mimeType;m.on("data",function(w,I){y.push(w),f&&f(I)}).on("error",function(w){y=[],g(w)}).on("end",function(){try{var w=(function(I,S,T){switch(I){case"blob":return i.newBlob(i.transformTo("arraybuffer",S),T);case"base64":return o.encode(S);default:return i.transformTo(I,S)}})(k,(function(I,S){var T,D=0,O=null,P=0;for(T=0;T<S.length;T++)P+=S[T].length;switch(I){case"string":return S.join("");case"array":return Array.prototype.concat.apply([],S);case"uint8array":for(O=new Uint8Array(P),T=0;T<S.length;T++)O.set(S[T],D),D+=S[T].length;return O;case"nodebuffer":return Buffer.concat(S);default:throw new Error("concat : unsupported type '"+I+"'")}})(x,y),u);b(w)}catch(I){g(I)}y=[]}).resume()})}function h(m,f,b){var g=f;switch(f){case"blob":case"arraybuffer":g="uint8array";break;case"base64":g="string"}try{this._internalType=g,this._outputType=f,this._mimeType=b,i.checkSupport(g),this._worker=m.pipe(new r(g)),m.lock()}catch(y){this._worker=new a("error"),this._worker.error(y)}}h.prototype={accumulate:function(m){return p(this,m)},on:function(m,f){var b=this;return m==="data"?this._worker.on(m,function(g){f.call(b,g.data,g.meta)}):this._worker.on(m,function(){i.delay(f,arguments,b)}),this},resume:function(){return i.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(m){if(i.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new c(this,{objectMode:this._outputType!=="nodebuffer"},m)}},t.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(s,t,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var i=new ArrayBuffer(0);try{n.blob=new Blob([i],{type:"application/zip"}).size===0}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);r.append(i),n.blob=r.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!s("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(s,t,n){for(var i=s("./utils"),r=s("./support"),a=s("./nodejsUtils"),o=s("./stream/GenericWorker"),l=new Array(256),d=0;d<256;d++)l[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;l[254]=l[254]=1;function c(){o.call(this,"utf-8 decode"),this.leftOver=null}function p(){o.call(this,"utf-8 encode")}n.utf8encode=function(h){return r.nodebuffer?a.newBufferFrom(h,"utf-8"):(function(m){var f,b,g,y,x,k=m.length,u=0;for(y=0;y<k;y++)(64512&(b=m.charCodeAt(y)))==55296&&y+1<k&&(64512&(g=m.charCodeAt(y+1)))==56320&&(b=65536+(b-55296<<10)+(g-56320),y++),u+=b<128?1:b<2048?2:b<65536?3:4;for(f=r.uint8array?new Uint8Array(u):new Array(u),y=x=0;x<u;y++)(64512&(b=m.charCodeAt(y)))==55296&&y+1<k&&(64512&(g=m.charCodeAt(y+1)))==56320&&(b=65536+(b-55296<<10)+(g-56320),y++),b<128?f[x++]=b:(b<2048?f[x++]=192|b>>>6:(b<65536?f[x++]=224|b>>>12:(f[x++]=240|b>>>18,f[x++]=128|b>>>12&63),f[x++]=128|b>>>6&63),f[x++]=128|63&b);return f})(h)},n.utf8decode=function(h){return r.nodebuffer?i.transformTo("nodebuffer",h).toString("utf-8"):(function(m){var f,b,g,y,x=m.length,k=new Array(2*x);for(f=b=0;f<x;)if((g=m[f++])<128)k[b++]=g;else if(4<(y=l[g]))k[b++]=65533,f+=y-1;else{for(g&=y===2?31:y===3?15:7;1<y&&f<x;)g=g<<6|63&m[f++],y--;1<y?k[b++]=65533:g<65536?k[b++]=g:(g-=65536,k[b++]=55296|g>>10&1023,k[b++]=56320|1023&g)}return k.length!==b&&(k.subarray?k=k.subarray(0,b):k.length=b),i.applyFromCharCode(k)})(h=i.transformTo(r.uint8array?"uint8array":"array",h))},i.inherits(c,o),c.prototype.processChunk=function(h){var m=i.transformTo(r.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(r.uint8array){var f=m;(m=new Uint8Array(f.length+this.leftOver.length)).set(this.leftOver,0),m.set(f,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var b=(function(y,x){var k;for((x=x||y.length)>y.length&&(x=y.length),k=x-1;0<=k&&(192&y[k])==128;)k--;return k<0||k===0?x:k+l[y[k]]>x?k:x})(m),g=m;b!==m.length&&(r.uint8array?(g=m.subarray(0,b),this.leftOver=m.subarray(b,m.length)):(g=m.slice(0,b),this.leftOver=m.slice(b,m.length))),this.push({data:n.utf8decode(g),meta:h.meta})},c.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=c,i.inherits(p,o),p.prototype.processChunk=function(h){this.push({data:n.utf8encode(h.data),meta:h.meta})},n.Utf8EncodeWorker=p},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(s,t,n){var i=s("./support"),r=s("./base64"),a=s("./nodejsUtils"),o=s("./external");function l(f){return f}function d(f,b){for(var g=0;g<f.length;++g)b[g]=255&f.charCodeAt(g);return b}s("setimmediate"),n.newBlob=function(f,b){n.checkSupport("blob");try{return new Blob([f],{type:b})}catch{try{var g=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return g.append(f),g.getBlob(b)}catch{throw new Error("Bug : can't construct the Blob.")}}};var c={stringifyByChunk:function(f,b,g){var y=[],x=0,k=f.length;if(k<=g)return String.fromCharCode.apply(null,f);for(;x<k;)b==="array"||b==="nodebuffer"?y.push(String.fromCharCode.apply(null,f.slice(x,Math.min(x+g,k)))):y.push(String.fromCharCode.apply(null,f.subarray(x,Math.min(x+g,k)))),x+=g;return y.join("")},stringifyByChar:function(f){for(var b="",g=0;g<f.length;g++)b+=String.fromCharCode(f[g]);return b},applyCanBeUsed:{uint8array:(function(){try{return i.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return i.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}})()}};function p(f){var b=65536,g=n.getTypeOf(f),y=!0;if(g==="uint8array"?y=c.applyCanBeUsed.uint8array:g==="nodebuffer"&&(y=c.applyCanBeUsed.nodebuffer),y)for(;1<b;)try{return c.stringifyByChunk(f,g,b)}catch{b=Math.floor(b/2)}return c.stringifyByChar(f)}function h(f,b){for(var g=0;g<f.length;g++)b[g]=f[g];return b}n.applyFromCharCode=p;var m={};m.string={string:l,array:function(f){return d(f,new Array(f.length))},arraybuffer:function(f){return m.string.uint8array(f).buffer},uint8array:function(f){return d(f,new Uint8Array(f.length))},nodebuffer:function(f){return d(f,a.allocBuffer(f.length))}},m.array={string:p,array:l,arraybuffer:function(f){return new Uint8Array(f).buffer},uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return a.newBufferFrom(f)}},m.arraybuffer={string:function(f){return p(new Uint8Array(f))},array:function(f){return h(new Uint8Array(f),new Array(f.byteLength))},arraybuffer:l,uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return a.newBufferFrom(new Uint8Array(f))}},m.uint8array={string:p,array:function(f){return h(f,new Array(f.length))},arraybuffer:function(f){return f.buffer},uint8array:l,nodebuffer:function(f){return a.newBufferFrom(f)}},m.nodebuffer={string:p,array:function(f){return h(f,new Array(f.length))},arraybuffer:function(f){return m.nodebuffer.uint8array(f).buffer},uint8array:function(f){return h(f,new Uint8Array(f.length))},nodebuffer:l},n.transformTo=function(f,b){if(b=b||"",!f)return b;n.checkSupport(f);var g=n.getTypeOf(b);return m[g][f](b)},n.resolve=function(f){for(var b=f.split("/"),g=[],y=0;y<b.length;y++){var x=b[y];x==="."||x===""&&y!==0&&y!==b.length-1||(x===".."?g.pop():g.push(x))}return g.join("/")},n.getTypeOf=function(f){return typeof f=="string"?"string":Object.prototype.toString.call(f)==="[object Array]"?"array":i.nodebuffer&&a.isBuffer(f)?"nodebuffer":i.uint8array&&f instanceof Uint8Array?"uint8array":i.arraybuffer&&f instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(f){if(!i[f.toLowerCase()])throw new Error(f+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(f){var b,g,y="";for(g=0;g<(f||"").length;g++)y+="\\x"+((b=f.charCodeAt(g))<16?"0":"")+b.toString(16).toUpperCase();return y},n.delay=function(f,b,g){setImmediate(function(){f.apply(g||null,b||[])})},n.inherits=function(f,b){function g(){}g.prototype=b.prototype,f.prototype=new g},n.extend=function(){var f,b,g={};for(f=0;f<arguments.length;f++)for(b in arguments[f])Object.prototype.hasOwnProperty.call(arguments[f],b)&&g[b]===void 0&&(g[b]=arguments[f][b]);return g},n.prepareContent=function(f,b,g,y,x){return o.Promise.resolve(b).then(function(k){return i.blob&&(k instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(k))!==-1)&&typeof FileReader<"u"?new o.Promise(function(u,w){var I=new FileReader;I.onload=function(S){u(S.target.result)},I.onerror=function(S){w(S.target.error)},I.readAsArrayBuffer(k)}):k}).then(function(k){var u=n.getTypeOf(k);return u?(u==="arraybuffer"?k=n.transformTo("uint8array",k):u==="string"&&(x?k=r.decode(k):g&&y!==!0&&(k=(function(w){return d(w,i.uint8array?new Uint8Array(w.length):new Array(w.length))})(k))),k):o.Promise.reject(new Error("Can't read the data of '"+f+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(s,t,n){var i=s("./reader/readerFor"),r=s("./utils"),a=s("./signature"),o=s("./zipEntry"),l=s("./support");function d(c){this.files=[],this.loadOptions=c}d.prototype={checkSignature:function(c){if(!this.reader.readAndCheckSignature(c)){this.reader.index-=4;var p=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+r.pretty(p)+", expected "+r.pretty(c)+")")}},isSignature:function(c,p){var h=this.reader.index;this.reader.setIndex(c);var m=this.reader.readString(4)===p;return this.reader.setIndex(h),m},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var c=this.reader.readData(this.zipCommentLength),p=l.uint8array?"uint8array":"array",h=r.transformTo(p,c);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var c,p,h,m=this.zip64EndOfCentralSize-44;0<m;)c=this.reader.readInt(2),p=this.reader.readInt(4),h=this.reader.readData(p),this.zip64ExtensibleData[c]={id:c,length:p,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var c,p;for(c=0;c<this.files.length;c++)p=this.files[c],this.reader.setIndex(p.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),p.readLocalPart(this.reader),p.handleUTF8(),p.processAttributes()},readCentralDir:function(){var c;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(c=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(c);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var c=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(c<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(c);var p=c;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===r.MAX_VALUE_16BITS||this.diskWithCentralDirStart===r.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===r.MAX_VALUE_16BITS||this.centralDirRecords===r.MAX_VALUE_16BITS||this.centralDirSize===r.MAX_VALUE_32BITS||this.centralDirOffset===r.MAX_VALUE_32BITS){if(this.zip64=!0,(c=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(c),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var m=p-h;if(0<m)this.isSignature(p,a.CENTRAL_FILE_HEADER)||(this.reader.zero=m);else if(m<0)throw new Error("Corrupted zip: missing "+Math.abs(m)+" bytes.")},prepareReader:function(c){this.reader=i(c)},load:function(c){this.prepareReader(c),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(s,t,n){var i=s("./reader/readerFor"),r=s("./utils"),a=s("./compressedObject"),o=s("./crc32"),l=s("./utf8"),d=s("./compressions"),c=s("./support");function p(h,m){this.options=h,this.loadOptions=m}p.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var m,f;if(h.skip(22),this.fileNameLength=h.readInt(2),f=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(f),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((m=(function(b){for(var g in d)if(Object.prototype.hasOwnProperty.call(d,g)&&d[g].magic===b)return d[g];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+r.pretty(this.compressionMethod)+" unknown (inner file : "+r.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,m,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var m=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(m),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=i(this.extraFields[1].value);this.uncompressedSize===r.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===r.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===r.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===r.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var m,f,b,g=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<g;)m=h.readInt(2),f=h.readInt(2),b=h.readData(f),this.extraFields[m]={id:m,length:f,value:b};h.setIndex(g)},handleUTF8:function(){var h=c.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=l.utf8decode(this.fileName),this.fileCommentStr=l.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var f=r.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(f)}var b=this.findExtraFieldUnicodeComment();if(b!==null)this.fileCommentStr=b;else{var g=r.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(g)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var m=i(h.value);return m.readInt(1)!==1||o(this.fileName)!==m.readInt(4)?null:l.utf8decode(m.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var m=i(h.value);return m.readInt(1)!==1||o(this.fileComment)!==m.readInt(4)?null:l.utf8decode(m.readData(h.length-5))}return null}},t.exports=p},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(s,t,n){function i(m,f,b){this.name=m,this.dir=b.dir,this.date=b.date,this.comment=b.comment,this.unixPermissions=b.unixPermissions,this.dosPermissions=b.dosPermissions,this._data=f,this._dataBinary=b.binary,this.options={compression:b.compression,compressionOptions:b.compressionOptions}}var r=s("./stream/StreamHelper"),a=s("./stream/DataWorker"),o=s("./utf8"),l=s("./compressedObject"),d=s("./stream/GenericWorker");i.prototype={internalStream:function(m){var f=null,b="string";try{if(!m)throw new Error("No output type specified.");var g=(b=m.toLowerCase())==="string"||b==="text";b!=="binarystring"&&b!=="text"||(b="string"),f=this._decompressWorker();var y=!this._dataBinary;y&&!g&&(f=f.pipe(new o.Utf8EncodeWorker)),!y&&g&&(f=f.pipe(new o.Utf8DecodeWorker))}catch(x){(f=new d("error")).error(x)}return new r(f,b,"")},async:function(m,f){return this.internalStream(m).accumulate(f)},nodeStream:function(m,f){return this.internalStream(m||"nodebuffer").toNodejsStream(f)},_compressWorker:function(m,f){if(this._data instanceof l&&this._data.compression.magic===m.magic)return this._data.getCompressedWorker();var b=this._decompressWorker();return this._dataBinary||(b=b.pipe(new o.Utf8EncodeWorker)),l.createWorkerFrom(b,m,f)},_decompressWorker:function(){return this._data instanceof l?this._data.getContentWorker():this._data instanceof d?this._data:new a(this._data)}};for(var c=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],p=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<c.length;h++)i.prototype[c[h]]=p;t.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(s,t,n){(function(i){var r,a,o=i.MutationObserver||i.WebKitMutationObserver;if(o){var l=0,d=new o(m),c=i.document.createTextNode("");d.observe(c,{characterData:!0}),r=function(){c.data=l=++l%2}}else if(i.setImmediate||i.MessageChannel===void 0)r="document"in i&&"onreadystatechange"in i.document.createElement("script")?function(){var f=i.document.createElement("script");f.onreadystatechange=function(){m(),f.onreadystatechange=null,f.parentNode.removeChild(f),f=null},i.document.documentElement.appendChild(f)}:function(){setTimeout(m,0)};else{var p=new i.MessageChannel;p.port1.onmessage=m,r=function(){p.port2.postMessage(0)}}var h=[];function m(){var f,b;a=!0;for(var g=h.length;g;){for(b=h,h=[],f=-1;++f<g;)b[f]();g=h.length}a=!1}t.exports=function(f){h.push(f)!==1||a||r()}}).call(this,typeof tt<"u"?tt:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(s,t,n){var i=s("immediate");function r(){}var a={},o=["REJECTED"],l=["FULFILLED"],d=["PENDING"];function c(g){if(typeof g!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,g!==r&&f(this,g)}function p(g,y,x){this.promise=g,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function h(g,y,x){i(function(){var k;try{k=y(x)}catch(u){return a.reject(g,u)}k===g?a.reject(g,new TypeError("Cannot resolve promise with itself")):a.resolve(g,k)})}function m(g){var y=g&&g.then;if(g&&(typeof g=="object"||typeof g=="function")&&typeof y=="function")return function(){y.apply(g,arguments)}}function f(g,y){var x=!1;function k(I){x||(x=!0,a.reject(g,I))}function u(I){x||(x=!0,a.resolve(g,I))}var w=b(function(){y(u,k)});w.status==="error"&&k(w.value)}function b(g,y){var x={};try{x.value=g(y),x.status="success"}catch(k){x.status="error",x.value=k}return x}(t.exports=c).prototype.finally=function(g){if(typeof g!="function")return this;var y=this.constructor;return this.then(function(x){return y.resolve(g()).then(function(){return x})},function(x){return y.resolve(g()).then(function(){throw x})})},c.prototype.catch=function(g){return this.then(null,g)},c.prototype.then=function(g,y){if(typeof g!="function"&&this.state===l||typeof y!="function"&&this.state===o)return this;var x=new this.constructor(r);return this.state!==d?h(x,this.state===l?g:y,this.outcome):this.queue.push(new p(x,g,y)),x},p.prototype.callFulfilled=function(g){a.resolve(this.promise,g)},p.prototype.otherCallFulfilled=function(g){h(this.promise,this.onFulfilled,g)},p.prototype.callRejected=function(g){a.reject(this.promise,g)},p.prototype.otherCallRejected=function(g){h(this.promise,this.onRejected,g)},a.resolve=function(g,y){var x=b(m,y);if(x.status==="error")return a.reject(g,x.value);var k=x.value;if(k)f(g,k);else{g.state=l,g.outcome=y;for(var u=-1,w=g.queue.length;++u<w;)g.queue[u].callFulfilled(y)}return g},a.reject=function(g,y){g.state=o,g.outcome=y;for(var x=-1,k=g.queue.length;++x<k;)g.queue[x].callRejected(y);return g},c.resolve=function(g){return g instanceof this?g:a.resolve(new this(r),g)},c.reject=function(g){var y=new this(r);return a.reject(y,g)},c.all=function(g){var y=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=g.length,k=!1;if(!x)return this.resolve([]);for(var u=new Array(x),w=0,I=-1,S=new this(r);++I<x;)T(g[I],I);return S;function T(D,O){y.resolve(D).then(function(P){u[O]=P,++w!==x||k||(k=!0,a.resolve(S,u))},function(P){k||(k=!0,a.reject(S,P))})}},c.race=function(g){var y=this;if(Object.prototype.toString.call(g)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=g.length,k=!1;if(!x)return this.resolve([]);for(var u=-1,w=new this(r);++u<x;)I=g[u],y.resolve(I).then(function(S){k||(k=!0,a.resolve(w,S))},function(S){k||(k=!0,a.reject(w,S))});var I;return w}},{immediate:36}],38:[function(s,t,n){var i={};(0,s("./lib/utils/common").assign)(i,s("./lib/deflate"),s("./lib/inflate"),s("./lib/zlib/constants")),t.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(s,t,n){var i=s("./zlib/deflate"),r=s("./utils/common"),a=s("./utils/strings"),o=s("./zlib/messages"),l=s("./zlib/zstream"),d=Object.prototype.toString,c=0,p=-1,h=0,m=8;function f(g){if(!(this instanceof f))return new f(g);this.options=r.assign({level:p,method:m,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},g||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var x=i.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(x!==c)throw new Error(o[x]);if(y.header&&i.deflateSetHeader(this.strm,y.header),y.dictionary){var k;if(k=typeof y.dictionary=="string"?a.string2buf(y.dictionary):d.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(x=i.deflateSetDictionary(this.strm,k))!==c)throw new Error(o[x]);this._dict_set=!0}}function b(g,y){var x=new f(y);if(x.push(g,!0),x.err)throw x.msg||o[x.err];return x.result}f.prototype.push=function(g,y){var x,k,u=this.strm,w=this.options.chunkSize;if(this.ended)return!1;k=y===~~y?y:y===!0?4:0,typeof g=="string"?u.input=a.string2buf(g):d.call(g)==="[object ArrayBuffer]"?u.input=new Uint8Array(g):u.input=g,u.next_in=0,u.avail_in=u.input.length;do{if(u.avail_out===0&&(u.output=new r.Buf8(w),u.next_out=0,u.avail_out=w),(x=i.deflate(u,k))!==1&&x!==c)return this.onEnd(x),!(this.ended=!0);u.avail_out!==0&&(u.avail_in!==0||k!==4&&k!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(r.shrinkBuf(u.output,u.next_out))):this.onData(r.shrinkBuf(u.output,u.next_out)))}while((0<u.avail_in||u.avail_out===0)&&x!==1);return k===4?(x=i.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===c):k!==2||(this.onEnd(c),!(u.avail_out=0))},f.prototype.onData=function(g){this.chunks.push(g)},f.prototype.onEnd=function(g){g===c&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},n.Deflate=f,n.deflate=b,n.deflateRaw=function(g,y){return(y=y||{}).raw=!0,b(g,y)},n.gzip=function(g,y){return(y=y||{}).gzip=!0,b(g,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(s,t,n){var i=s("./zlib/inflate"),r=s("./utils/common"),a=s("./utils/strings"),o=s("./zlib/constants"),l=s("./zlib/messages"),d=s("./zlib/zstream"),c=s("./zlib/gzheader"),p=Object.prototype.toString;function h(f){if(!(this instanceof h))return new h(f);this.options=r.assign({chunkSize:16384,windowBits:0,to:""},f||{});var b=this.options;b.raw&&0<=b.windowBits&&b.windowBits<16&&(b.windowBits=-b.windowBits,b.windowBits===0&&(b.windowBits=-15)),!(0<=b.windowBits&&b.windowBits<16)||f&&f.windowBits||(b.windowBits+=32),15<b.windowBits&&b.windowBits<48&&(15&b.windowBits)==0&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var g=i.inflateInit2(this.strm,b.windowBits);if(g!==o.Z_OK)throw new Error(l[g]);this.header=new c,i.inflateGetHeader(this.strm,this.header)}function m(f,b){var g=new h(b);if(g.push(f,!0),g.err)throw g.msg||l[g.err];return g.result}h.prototype.push=function(f,b){var g,y,x,k,u,w,I=this.strm,S=this.options.chunkSize,T=this.options.dictionary,D=!1;if(this.ended)return!1;y=b===~~b?b:b===!0?o.Z_FINISH:o.Z_NO_FLUSH,typeof f=="string"?I.input=a.binstring2buf(f):p.call(f)==="[object ArrayBuffer]"?I.input=new Uint8Array(f):I.input=f,I.next_in=0,I.avail_in=I.input.length;do{if(I.avail_out===0&&(I.output=new r.Buf8(S),I.next_out=0,I.avail_out=S),(g=i.inflate(I,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&T&&(w=typeof T=="string"?a.string2buf(T):p.call(T)==="[object ArrayBuffer]"?new Uint8Array(T):T,g=i.inflateSetDictionary(this.strm,w)),g===o.Z_BUF_ERROR&&D===!0&&(g=o.Z_OK,D=!1),g!==o.Z_STREAM_END&&g!==o.Z_OK)return this.onEnd(g),!(this.ended=!0);I.next_out&&(I.avail_out!==0&&g!==o.Z_STREAM_END&&(I.avail_in!==0||y!==o.Z_FINISH&&y!==o.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=a.utf8border(I.output,I.next_out),k=I.next_out-x,u=a.buf2string(I.output,x),I.next_out=k,I.avail_out=S-k,k&&r.arraySet(I.output,I.output,x,k,0),this.onData(u)):this.onData(r.shrinkBuf(I.output,I.next_out)))),I.avail_in===0&&I.avail_out===0&&(D=!0)}while((0<I.avail_in||I.avail_out===0)&&g!==o.Z_STREAM_END);return g===o.Z_STREAM_END&&(y=o.Z_FINISH),y===o.Z_FINISH?(g=i.inflateEnd(this.strm),this.onEnd(g),this.ended=!0,g===o.Z_OK):y!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),!(I.avail_out=0))},h.prototype.onData=function(f){this.chunks.push(f)},h.prototype.onEnd=function(f){f===o.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},n.Inflate=h,n.inflate=m,n.inflateRaw=function(f,b){return(b=b||{}).raw=!0,m(f,b)},n.ungzip=m},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(s,t,n){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(o){for(var l=Array.prototype.slice.call(arguments,1);l.length;){var d=l.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var c in d)d.hasOwnProperty(c)&&(o[c]=d[c])}}return o},n.shrinkBuf=function(o,l){return o.length===l?o:o.subarray?o.subarray(0,l):(o.length=l,o)};var r={arraySet:function(o,l,d,c,p){if(l.subarray&&o.subarray)o.set(l.subarray(d,d+c),p);else for(var h=0;h<c;h++)o[p+h]=l[d+h]},flattenChunks:function(o){var l,d,c,p,h,m;for(l=c=0,d=o.length;l<d;l++)c+=o[l].length;for(m=new Uint8Array(c),l=p=0,d=o.length;l<d;l++)h=o[l],m.set(h,p),p+=h.length;return m}},a={arraySet:function(o,l,d,c,p){for(var h=0;h<c;h++)o[p+h]=l[d+h]},flattenChunks:function(o){return[].concat.apply([],o)}};n.setTyped=function(o){o?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,r)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(i)},{}],42:[function(s,t,n){var i=s("./common"),r=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var o=new i.Buf8(256),l=0;l<256;l++)o[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function d(c,p){if(p<65537&&(c.subarray&&a||!c.subarray&&r))return String.fromCharCode.apply(null,i.shrinkBuf(c,p));for(var h="",m=0;m<p;m++)h+=String.fromCharCode(c[m]);return h}o[254]=o[254]=1,n.string2buf=function(c){var p,h,m,f,b,g=c.length,y=0;for(f=0;f<g;f++)(64512&(h=c.charCodeAt(f)))==55296&&f+1<g&&(64512&(m=c.charCodeAt(f+1)))==56320&&(h=65536+(h-55296<<10)+(m-56320),f++),y+=h<128?1:h<2048?2:h<65536?3:4;for(p=new i.Buf8(y),f=b=0;b<y;f++)(64512&(h=c.charCodeAt(f)))==55296&&f+1<g&&(64512&(m=c.charCodeAt(f+1)))==56320&&(h=65536+(h-55296<<10)+(m-56320),f++),h<128?p[b++]=h:(h<2048?p[b++]=192|h>>>6:(h<65536?p[b++]=224|h>>>12:(p[b++]=240|h>>>18,p[b++]=128|h>>>12&63),p[b++]=128|h>>>6&63),p[b++]=128|63&h);return p},n.buf2binstring=function(c){return d(c,c.length)},n.binstring2buf=function(c){for(var p=new i.Buf8(c.length),h=0,m=p.length;h<m;h++)p[h]=c.charCodeAt(h);return p},n.buf2string=function(c,p){var h,m,f,b,g=p||c.length,y=new Array(2*g);for(h=m=0;h<g;)if((f=c[h++])<128)y[m++]=f;else if(4<(b=o[f]))y[m++]=65533,h+=b-1;else{for(f&=b===2?31:b===3?15:7;1<b&&h<g;)f=f<<6|63&c[h++],b--;1<b?y[m++]=65533:f<65536?y[m++]=f:(f-=65536,y[m++]=55296|f>>10&1023,y[m++]=56320|1023&f)}return d(y,m)},n.utf8border=function(c,p){var h;for((p=p||c.length)>c.length&&(p=c.length),h=p-1;0<=h&&(192&c[h])==128;)h--;return h<0||h===0?p:h+o[c[h]]>p?h:p}},{"./common":41}],43:[function(s,t,n){t.exports=function(i,r,a,o){for(var l=65535&i|0,d=i>>>16&65535|0,c=0;a!==0;){for(a-=c=2e3<a?2e3:a;d=d+(l=l+r[o++]|0)|0,--c;);l%=65521,d%=65521}return l|d<<16|0}},{}],44:[function(s,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(s,t,n){var i=(function(){for(var r,a=[],o=0;o<256;o++){r=o;for(var l=0;l<8;l++)r=1&r?3988292384^r>>>1:r>>>1;a[o]=r}return a})();t.exports=function(r,a,o,l){var d=i,c=l+o;r^=-1;for(var p=l;p<c;p++)r=r>>>8^d[255&(r^a[p])];return-1^r}},{}],46:[function(s,t,n){var i,r=s("../utils/common"),a=s("./trees"),o=s("./adler32"),l=s("./crc32"),d=s("./messages"),c=0,p=4,h=0,m=-2,f=-1,b=4,g=2,y=8,x=9,k=286,u=30,w=19,I=2*k+1,S=15,T=3,D=258,O=D+T+1,P=42,B=113,$=1,N=2,J=3,U=4;function ne(v,j){return v.msg=d[j],j}function Z(v){return(v<<1)-(4<v?9:0)}function re(v){for(var j=v.length;0<=--j;)v[j]=0}function q(v){var j=v.state,H=j.pending;H>v.avail_out&&(H=v.avail_out),H!==0&&(r.arraySet(v.output,j.pending_buf,j.pending_out,H,v.next_out),v.next_out+=H,j.pending_out+=H,v.total_out+=H,v.avail_out-=H,j.pending-=H,j.pending===0&&(j.pending_out=0))}function C(v,j){a._tr_flush_block(v,0<=v.block_start?v.block_start:-1,v.strstart-v.block_start,j),v.block_start=v.strstart,q(v.strm)}function _(v,j){v.pending_buf[v.pending++]=j}function L(v,j){v.pending_buf[v.pending++]=j>>>8&255,v.pending_buf[v.pending++]=255&j}function V(v,j){var H,M,A=v.max_chain_length,R=v.strstart,W=v.prev_length,Y=v.nice_match,F=v.strstart>v.w_size-O?v.strstart-(v.w_size-O):0,te=v.window,se=v.w_mask,ee=v.prev,K=v.strstart+D,ce=te[R+W-1],he=te[R+W];v.prev_length>=v.good_match&&(A>>=2),Y>v.lookahead&&(Y=v.lookahead);do if(te[(H=j)+W]===he&&te[H+W-1]===ce&&te[H]===te[R]&&te[++H]===te[R+1]){R+=2,H++;do;while(te[++R]===te[++H]&&te[++R]===te[++H]&&te[++R]===te[++H]&&te[++R]===te[++H]&&te[++R]===te[++H]&&te[++R]===te[++H]&&te[++R]===te[++H]&&te[++R]===te[++H]&&R<K);if(M=D-(K-R),R=K-D,W<M){if(v.match_start=j,Y<=(W=M))break;ce=te[R+W-1],he=te[R+W]}}while((j=ee[j&se])>F&&--A!=0);return W<=v.lookahead?W:v.lookahead}function Q(v){var j,H,M,A,R,W,Y,F,te,se,ee=v.w_size;do{if(A=v.window_size-v.lookahead-v.strstart,v.strstart>=ee+(ee-O)){for(r.arraySet(v.window,v.window,ee,ee,0),v.match_start-=ee,v.strstart-=ee,v.block_start-=ee,j=H=v.hash_size;M=v.head[--j],v.head[j]=ee<=M?M-ee:0,--H;);for(j=H=ee;M=v.prev[--j],v.prev[j]=ee<=M?M-ee:0,--H;);A+=ee}if(v.strm.avail_in===0)break;if(W=v.strm,Y=v.window,F=v.strstart+v.lookahead,te=A,se=void 0,se=W.avail_in,te<se&&(se=te),H=se===0?0:(W.avail_in-=se,r.arraySet(Y,W.input,W.next_in,se,F),W.state.wrap===1?W.adler=o(W.adler,Y,se,F):W.state.wrap===2&&(W.adler=l(W.adler,Y,se,F)),W.next_in+=se,W.total_in+=se,se),v.lookahead+=H,v.lookahead+v.insert>=T)for(R=v.strstart-v.insert,v.ins_h=v.window[R],v.ins_h=(v.ins_h<<v.hash_shift^v.window[R+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[R+T-1])&v.hash_mask,v.prev[R&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=R,R++,v.insert--,!(v.lookahead+v.insert<T)););}while(v.lookahead<O&&v.strm.avail_in!==0)}function de(v,j){for(var H,M;;){if(v.lookahead<O){if(Q(v),v.lookahead<O&&j===c)return $;if(v.lookahead===0)break}if(H=0,v.lookahead>=T&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+T-1])&v.hash_mask,H=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),H!==0&&v.strstart-H<=v.w_size-O&&(v.match_length=V(v,H)),v.match_length>=T)if(M=a._tr_tally(v,v.strstart-v.match_start,v.match_length-T),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=T){for(v.match_length--;v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+T-1])&v.hash_mask,H=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart,--v.match_length!=0;);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else M=a._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(M&&(C(v,!1),v.strm.avail_out===0))return $}return v.insert=v.strstart<T-1?v.strstart:T-1,j===p?(C(v,!0),v.strm.avail_out===0?J:U):v.last_lit&&(C(v,!1),v.strm.avail_out===0)?$:N}function oe(v,j){for(var H,M,A;;){if(v.lookahead<O){if(Q(v),v.lookahead<O&&j===c)return $;if(v.lookahead===0)break}if(H=0,v.lookahead>=T&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+T-1])&v.hash_mask,H=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=T-1,H!==0&&v.prev_length<v.max_lazy_match&&v.strstart-H<=v.w_size-O&&(v.match_length=V(v,H),v.match_length<=5&&(v.strategy===1||v.match_length===T&&4096<v.strstart-v.match_start)&&(v.match_length=T-1)),v.prev_length>=T&&v.match_length<=v.prev_length){for(A=v.strstart+v.lookahead-T,M=a._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-T),v.lookahead-=v.prev_length-1,v.prev_length-=2;++v.strstart<=A&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+T-1])&v.hash_mask,H=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),--v.prev_length!=0;);if(v.match_available=0,v.match_length=T-1,v.strstart++,M&&(C(v,!1),v.strm.avail_out===0))return $}else if(v.match_available){if((M=a._tr_tally(v,0,v.window[v.strstart-1]))&&C(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return $}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(M=a._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<T-1?v.strstart:T-1,j===p?(C(v,!0),v.strm.avail_out===0?J:U):v.last_lit&&(C(v,!1),v.strm.avail_out===0)?$:N}function G(v,j,H,M,A){this.good_length=v,this.max_lazy=j,this.nice_length=H,this.max_chain=M,this.func=A}function ae(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new r.Buf16(2*I),this.dyn_dtree=new r.Buf16(2*(2*u+1)),this.bl_tree=new r.Buf16(2*(2*w+1)),re(this.dyn_ltree),re(this.dyn_dtree),re(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new r.Buf16(S+1),this.heap=new r.Buf16(2*k+1),re(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new r.Buf16(2*k+1),re(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function le(v){var j;return v&&v.state?(v.total_in=v.total_out=0,v.data_type=g,(j=v.state).pending=0,j.pending_out=0,j.wrap<0&&(j.wrap=-j.wrap),j.status=j.wrap?P:B,v.adler=j.wrap===2?0:1,j.last_flush=c,a._tr_init(j),h):ne(v,m)}function z(v){var j=le(v);return j===h&&(function(H){H.window_size=2*H.w_size,re(H.head),H.max_lazy_match=i[H.level].max_lazy,H.good_match=i[H.level].good_length,H.nice_match=i[H.level].nice_length,H.max_chain_length=i[H.level].max_chain,H.strstart=0,H.block_start=0,H.lookahead=0,H.insert=0,H.match_length=H.prev_length=T-1,H.match_available=0,H.ins_h=0})(v.state),j}function X(v,j,H,M,A,R){if(!v)return m;var W=1;if(j===f&&(j=6),M<0?(W=0,M=-M):15<M&&(W=2,M-=16),A<1||x<A||H!==y||M<8||15<M||j<0||9<j||R<0||b<R)return ne(v,m);M===8&&(M=9);var Y=new ae;return(v.state=Y).strm=v,Y.wrap=W,Y.gzhead=null,Y.w_bits=M,Y.w_size=1<<Y.w_bits,Y.w_mask=Y.w_size-1,Y.hash_bits=A+7,Y.hash_size=1<<Y.hash_bits,Y.hash_mask=Y.hash_size-1,Y.hash_shift=~~((Y.hash_bits+T-1)/T),Y.window=new r.Buf8(2*Y.w_size),Y.head=new r.Buf16(Y.hash_size),Y.prev=new r.Buf16(Y.w_size),Y.lit_bufsize=1<<A+6,Y.pending_buf_size=4*Y.lit_bufsize,Y.pending_buf=new r.Buf8(Y.pending_buf_size),Y.d_buf=1*Y.lit_bufsize,Y.l_buf=3*Y.lit_bufsize,Y.level=j,Y.strategy=R,Y.method=H,z(v)}i=[new G(0,0,0,0,function(v,j){var H=65535;for(H>v.pending_buf_size-5&&(H=v.pending_buf_size-5);;){if(v.lookahead<=1){if(Q(v),v.lookahead===0&&j===c)return $;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var M=v.block_start+H;if((v.strstart===0||v.strstart>=M)&&(v.lookahead=v.strstart-M,v.strstart=M,C(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-O&&(C(v,!1),v.strm.avail_out===0))return $}return v.insert=0,j===p?(C(v,!0),v.strm.avail_out===0?J:U):(v.strstart>v.block_start&&(C(v,!1),v.strm.avail_out),$)}),new G(4,4,8,4,de),new G(4,5,16,8,de),new G(4,6,32,32,de),new G(4,4,16,16,oe),new G(8,16,32,32,oe),new G(8,16,128,128,oe),new G(8,32,128,256,oe),new G(32,128,258,1024,oe),new G(32,258,258,4096,oe)],n.deflateInit=function(v,j){return X(v,j,y,15,8,0)},n.deflateInit2=X,n.deflateReset=z,n.deflateResetKeep=le,n.deflateSetHeader=function(v,j){return v&&v.state?v.state.wrap!==2?m:(v.state.gzhead=j,h):m},n.deflate=function(v,j){var H,M,A,R;if(!v||!v.state||5<j||j<0)return v?ne(v,m):m;if(M=v.state,!v.output||!v.input&&v.avail_in!==0||M.status===666&&j!==p)return ne(v,v.avail_out===0?-5:m);if(M.strm=v,H=M.last_flush,M.last_flush=j,M.status===P)if(M.wrap===2)v.adler=0,_(M,31),_(M,139),_(M,8),M.gzhead?(_(M,(M.gzhead.text?1:0)+(M.gzhead.hcrc?2:0)+(M.gzhead.extra?4:0)+(M.gzhead.name?8:0)+(M.gzhead.comment?16:0)),_(M,255&M.gzhead.time),_(M,M.gzhead.time>>8&255),_(M,M.gzhead.time>>16&255),_(M,M.gzhead.time>>24&255),_(M,M.level===9?2:2<=M.strategy||M.level<2?4:0),_(M,255&M.gzhead.os),M.gzhead.extra&&M.gzhead.extra.length&&(_(M,255&M.gzhead.extra.length),_(M,M.gzhead.extra.length>>8&255)),M.gzhead.hcrc&&(v.adler=l(v.adler,M.pending_buf,M.pending,0)),M.gzindex=0,M.status=69):(_(M,0),_(M,0),_(M,0),_(M,0),_(M,0),_(M,M.level===9?2:2<=M.strategy||M.level<2?4:0),_(M,3),M.status=B);else{var W=y+(M.w_bits-8<<4)<<8;W|=(2<=M.strategy||M.level<2?0:M.level<6?1:M.level===6?2:3)<<6,M.strstart!==0&&(W|=32),W+=31-W%31,M.status=B,L(M,W),M.strstart!==0&&(L(M,v.adler>>>16),L(M,65535&v.adler)),v.adler=1}if(M.status===69)if(M.gzhead.extra){for(A=M.pending;M.gzindex<(65535&M.gzhead.extra.length)&&(M.pending!==M.pending_buf_size||(M.gzhead.hcrc&&M.pending>A&&(v.adler=l(v.adler,M.pending_buf,M.pending-A,A)),q(v),A=M.pending,M.pending!==M.pending_buf_size));)_(M,255&M.gzhead.extra[M.gzindex]),M.gzindex++;M.gzhead.hcrc&&M.pending>A&&(v.adler=l(v.adler,M.pending_buf,M.pending-A,A)),M.gzindex===M.gzhead.extra.length&&(M.gzindex=0,M.status=73)}else M.status=73;if(M.status===73)if(M.gzhead.name){A=M.pending;do{if(M.pending===M.pending_buf_size&&(M.gzhead.hcrc&&M.pending>A&&(v.adler=l(v.adler,M.pending_buf,M.pending-A,A)),q(v),A=M.pending,M.pending===M.pending_buf_size)){R=1;break}R=M.gzindex<M.gzhead.name.length?255&M.gzhead.name.charCodeAt(M.gzindex++):0,_(M,R)}while(R!==0);M.gzhead.hcrc&&M.pending>A&&(v.adler=l(v.adler,M.pending_buf,M.pending-A,A)),R===0&&(M.gzindex=0,M.status=91)}else M.status=91;if(M.status===91)if(M.gzhead.comment){A=M.pending;do{if(M.pending===M.pending_buf_size&&(M.gzhead.hcrc&&M.pending>A&&(v.adler=l(v.adler,M.pending_buf,M.pending-A,A)),q(v),A=M.pending,M.pending===M.pending_buf_size)){R=1;break}R=M.gzindex<M.gzhead.comment.length?255&M.gzhead.comment.charCodeAt(M.gzindex++):0,_(M,R)}while(R!==0);M.gzhead.hcrc&&M.pending>A&&(v.adler=l(v.adler,M.pending_buf,M.pending-A,A)),R===0&&(M.status=103)}else M.status=103;if(M.status===103&&(M.gzhead.hcrc?(M.pending+2>M.pending_buf_size&&q(v),M.pending+2<=M.pending_buf_size&&(_(M,255&v.adler),_(M,v.adler>>8&255),v.adler=0,M.status=B)):M.status=B),M.pending!==0){if(q(v),v.avail_out===0)return M.last_flush=-1,h}else if(v.avail_in===0&&Z(j)<=Z(H)&&j!==p)return ne(v,-5);if(M.status===666&&v.avail_in!==0)return ne(v,-5);if(v.avail_in!==0||M.lookahead!==0||j!==c&&M.status!==666){var Y=M.strategy===2?(function(F,te){for(var se;;){if(F.lookahead===0&&(Q(F),F.lookahead===0)){if(te===c)return $;break}if(F.match_length=0,se=a._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++,se&&(C(F,!1),F.strm.avail_out===0))return $}return F.insert=0,te===p?(C(F,!0),F.strm.avail_out===0?J:U):F.last_lit&&(C(F,!1),F.strm.avail_out===0)?$:N})(M,j):M.strategy===3?(function(F,te){for(var se,ee,K,ce,he=F.window;;){if(F.lookahead<=D){if(Q(F),F.lookahead<=D&&te===c)return $;if(F.lookahead===0)break}if(F.match_length=0,F.lookahead>=T&&0<F.strstart&&(ee=he[K=F.strstart-1])===he[++K]&&ee===he[++K]&&ee===he[++K]){ce=F.strstart+D;do;while(ee===he[++K]&&ee===he[++K]&&ee===he[++K]&&ee===he[++K]&&ee===he[++K]&&ee===he[++K]&&ee===he[++K]&&ee===he[++K]&&K<ce);F.match_length=D-(ce-K),F.match_length>F.lookahead&&(F.match_length=F.lookahead)}if(F.match_length>=T?(se=a._tr_tally(F,1,F.match_length-T),F.lookahead-=F.match_length,F.strstart+=F.match_length,F.match_length=0):(se=a._tr_tally(F,0,F.window[F.strstart]),F.lookahead--,F.strstart++),se&&(C(F,!1),F.strm.avail_out===0))return $}return F.insert=0,te===p?(C(F,!0),F.strm.avail_out===0?J:U):F.last_lit&&(C(F,!1),F.strm.avail_out===0)?$:N})(M,j):i[M.level].func(M,j);if(Y!==J&&Y!==U||(M.status=666),Y===$||Y===J)return v.avail_out===0&&(M.last_flush=-1),h;if(Y===N&&(j===1?a._tr_align(M):j!==5&&(a._tr_stored_block(M,0,0,!1),j===3&&(re(M.head),M.lookahead===0&&(M.strstart=0,M.block_start=0,M.insert=0))),q(v),v.avail_out===0))return M.last_flush=-1,h}return j!==p?h:M.wrap<=0?1:(M.wrap===2?(_(M,255&v.adler),_(M,v.adler>>8&255),_(M,v.adler>>16&255),_(M,v.adler>>24&255),_(M,255&v.total_in),_(M,v.total_in>>8&255),_(M,v.total_in>>16&255),_(M,v.total_in>>24&255)):(L(M,v.adler>>>16),L(M,65535&v.adler)),q(v),0<M.wrap&&(M.wrap=-M.wrap),M.pending!==0?h:1)},n.deflateEnd=function(v){var j;return v&&v.state?(j=v.state.status)!==P&&j!==69&&j!==73&&j!==91&&j!==103&&j!==B&&j!==666?ne(v,m):(v.state=null,j===B?ne(v,-3):h):m},n.deflateSetDictionary=function(v,j){var H,M,A,R,W,Y,F,te,se=j.length;if(!v||!v.state||(R=(H=v.state).wrap)===2||R===1&&H.status!==P||H.lookahead)return m;for(R===1&&(v.adler=o(v.adler,j,se,0)),H.wrap=0,se>=H.w_size&&(R===0&&(re(H.head),H.strstart=0,H.block_start=0,H.insert=0),te=new r.Buf8(H.w_size),r.arraySet(te,j,se-H.w_size,H.w_size,0),j=te,se=H.w_size),W=v.avail_in,Y=v.next_in,F=v.input,v.avail_in=se,v.next_in=0,v.input=j,Q(H);H.lookahead>=T;){for(M=H.strstart,A=H.lookahead-(T-1);H.ins_h=(H.ins_h<<H.hash_shift^H.window[M+T-1])&H.hash_mask,H.prev[M&H.w_mask]=H.head[H.ins_h],H.head[H.ins_h]=M,M++,--A;);H.strstart=M,H.lookahead=T-1,Q(H)}return H.strstart+=H.lookahead,H.block_start=H.strstart,H.insert=H.lookahead,H.lookahead=0,H.match_length=H.prev_length=T-1,H.match_available=0,v.next_in=Y,v.input=F,v.avail_in=W,H.wrap=R,h},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(s,t,n){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(s,t,n){t.exports=function(i,r){var a,o,l,d,c,p,h,m,f,b,g,y,x,k,u,w,I,S,T,D,O,P,B,$,N;a=i.state,o=i.next_in,$=i.input,l=o+(i.avail_in-5),d=i.next_out,N=i.output,c=d-(r-i.avail_out),p=d+(i.avail_out-257),h=a.dmax,m=a.wsize,f=a.whave,b=a.wnext,g=a.window,y=a.hold,x=a.bits,k=a.lencode,u=a.distcode,w=(1<<a.lenbits)-1,I=(1<<a.distbits)-1;e:do{x<15&&(y+=$[o++]<<x,x+=8,y+=$[o++]<<x,x+=8),S=k[y&w];t:for(;;){if(y>>>=T=S>>>24,x-=T,(T=S>>>16&255)===0)N[d++]=65535&S;else{if(!(16&T)){if((64&T)==0){S=k[(65535&S)+(y&(1<<T)-1)];continue t}if(32&T){a.mode=12;break e}i.msg="invalid literal/length code",a.mode=30;break e}D=65535&S,(T&=15)&&(x<T&&(y+=$[o++]<<x,x+=8),D+=y&(1<<T)-1,y>>>=T,x-=T),x<15&&(y+=$[o++]<<x,x+=8,y+=$[o++]<<x,x+=8),S=u[y&I];a:for(;;){if(y>>>=T=S>>>24,x-=T,!(16&(T=S>>>16&255))){if((64&T)==0){S=u[(65535&S)+(y&(1<<T)-1)];continue a}i.msg="invalid distance code",a.mode=30;break e}if(O=65535&S,x<(T&=15)&&(y+=$[o++]<<x,(x+=8)<T&&(y+=$[o++]<<x,x+=8)),h<(O+=y&(1<<T)-1)){i.msg="invalid distance too far back",a.mode=30;break e}if(y>>>=T,x-=T,(T=d-c)<O){if(f<(T=O-T)&&a.sane){i.msg="invalid distance too far back",a.mode=30;break e}if(B=g,(P=0)===b){if(P+=m-T,T<D){for(D-=T;N[d++]=g[P++],--T;);P=d-O,B=N}}else if(b<T){if(P+=m+b-T,(T-=b)<D){for(D-=T;N[d++]=g[P++],--T;);if(P=0,b<D){for(D-=T=b;N[d++]=g[P++],--T;);P=d-O,B=N}}}else if(P+=b-T,T<D){for(D-=T;N[d++]=g[P++],--T;);P=d-O,B=N}for(;2<D;)N[d++]=B[P++],N[d++]=B[P++],N[d++]=B[P++],D-=3;D&&(N[d++]=B[P++],1<D&&(N[d++]=B[P++]))}else{for(P=d-O;N[d++]=N[P++],N[d++]=N[P++],N[d++]=N[P++],2<(D-=3););D&&(N[d++]=N[P++],1<D&&(N[d++]=N[P++]))}break}}break}}while(o<l&&d<p);o-=D=x>>3,y&=(1<<(x-=D<<3))-1,i.next_in=o,i.next_out=d,i.avail_in=o<l?l-o+5:5-(o-l),i.avail_out=d<p?p-d+257:257-(d-p),a.hold=y,a.bits=x}},{}],49:[function(s,t,n){var i=s("../utils/common"),r=s("./adler32"),a=s("./crc32"),o=s("./inffast"),l=s("./inftrees"),d=1,c=2,p=0,h=-2,m=1,f=852,b=592;function g(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new i.Buf16(320),this.work=new i.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(P){var B;return P&&P.state?(B=P.state,P.total_in=P.total_out=B.total=0,P.msg="",B.wrap&&(P.adler=1&B.wrap),B.mode=m,B.last=0,B.havedict=0,B.dmax=32768,B.head=null,B.hold=0,B.bits=0,B.lencode=B.lendyn=new i.Buf32(f),B.distcode=B.distdyn=new i.Buf32(b),B.sane=1,B.back=-1,p):h}function k(P){var B;return P&&P.state?((B=P.state).wsize=0,B.whave=0,B.wnext=0,x(P)):h}function u(P,B){var $,N;return P&&P.state?(N=P.state,B<0?($=0,B=-B):($=1+(B>>4),B<48&&(B&=15)),B&&(B<8||15<B)?h:(N.window!==null&&N.wbits!==B&&(N.window=null),N.wrap=$,N.wbits=B,k(P))):h}function w(P,B){var $,N;return P?(N=new y,(P.state=N).window=null,($=u(P,B))!==p&&(P.state=null),$):h}var I,S,T=!0;function D(P){if(T){var B;for(I=new i.Buf32(512),S=new i.Buf32(32),B=0;B<144;)P.lens[B++]=8;for(;B<256;)P.lens[B++]=9;for(;B<280;)P.lens[B++]=7;for(;B<288;)P.lens[B++]=8;for(l(d,P.lens,0,288,I,0,P.work,{bits:9}),B=0;B<32;)P.lens[B++]=5;l(c,P.lens,0,32,S,0,P.work,{bits:5}),T=!1}P.lencode=I,P.lenbits=9,P.distcode=S,P.distbits=5}function O(P,B,$,N){var J,U=P.state;return U.window===null&&(U.wsize=1<<U.wbits,U.wnext=0,U.whave=0,U.window=new i.Buf8(U.wsize)),N>=U.wsize?(i.arraySet(U.window,B,$-U.wsize,U.wsize,0),U.wnext=0,U.whave=U.wsize):(N<(J=U.wsize-U.wnext)&&(J=N),i.arraySet(U.window,B,$-N,J,U.wnext),(N-=J)?(i.arraySet(U.window,B,$-N,N,0),U.wnext=N,U.whave=U.wsize):(U.wnext+=J,U.wnext===U.wsize&&(U.wnext=0),U.whave<U.wsize&&(U.whave+=J))),0}n.inflateReset=k,n.inflateReset2=u,n.inflateResetKeep=x,n.inflateInit=function(P){return w(P,15)},n.inflateInit2=w,n.inflate=function(P,B){var $,N,J,U,ne,Z,re,q,C,_,L,V,Q,de,oe,G,ae,le,z,X,v,j,H,M,A=0,R=new i.Buf8(4),W=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return h;($=P.state).mode===12&&($.mode=13),ne=P.next_out,J=P.output,re=P.avail_out,U=P.next_in,N=P.input,Z=P.avail_in,q=$.hold,C=$.bits,_=Z,L=re,j=p;e:for(;;)switch($.mode){case m:if($.wrap===0){$.mode=13;break}for(;C<16;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}if(2&$.wrap&&q===35615){R[$.check=0]=255&q,R[1]=q>>>8&255,$.check=a($.check,R,2,0),C=q=0,$.mode=2;break}if($.flags=0,$.head&&($.head.done=!1),!(1&$.wrap)||(((255&q)<<8)+(q>>8))%31){P.msg="incorrect header check",$.mode=30;break}if((15&q)!=8){P.msg="unknown compression method",$.mode=30;break}if(C-=4,v=8+(15&(q>>>=4)),$.wbits===0)$.wbits=v;else if(v>$.wbits){P.msg="invalid window size",$.mode=30;break}$.dmax=1<<v,P.adler=$.check=1,$.mode=512&q?10:12,C=q=0;break;case 2:for(;C<16;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}if($.flags=q,(255&$.flags)!=8){P.msg="unknown compression method",$.mode=30;break}if(57344&$.flags){P.msg="unknown header flags set",$.mode=30;break}$.head&&($.head.text=q>>8&1),512&$.flags&&(R[0]=255&q,R[1]=q>>>8&255,$.check=a($.check,R,2,0)),C=q=0,$.mode=3;case 3:for(;C<32;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}$.head&&($.head.time=q),512&$.flags&&(R[0]=255&q,R[1]=q>>>8&255,R[2]=q>>>16&255,R[3]=q>>>24&255,$.check=a($.check,R,4,0)),C=q=0,$.mode=4;case 4:for(;C<16;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}$.head&&($.head.xflags=255&q,$.head.os=q>>8),512&$.flags&&(R[0]=255&q,R[1]=q>>>8&255,$.check=a($.check,R,2,0)),C=q=0,$.mode=5;case 5:if(1024&$.flags){for(;C<16;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}$.length=q,$.head&&($.head.extra_len=q),512&$.flags&&(R[0]=255&q,R[1]=q>>>8&255,$.check=a($.check,R,2,0)),C=q=0}else $.head&&($.head.extra=null);$.mode=6;case 6:if(1024&$.flags&&(Z<(V=$.length)&&(V=Z),V&&($.head&&(v=$.head.extra_len-$.length,$.head.extra||($.head.extra=new Array($.head.extra_len)),i.arraySet($.head.extra,N,U,V,v)),512&$.flags&&($.check=a($.check,N,V,U)),Z-=V,U+=V,$.length-=V),$.length))break e;$.length=0,$.mode=7;case 7:if(2048&$.flags){if(Z===0)break e;for(V=0;v=N[U+V++],$.head&&v&&$.length<65536&&($.head.name+=String.fromCharCode(v)),v&&V<Z;);if(512&$.flags&&($.check=a($.check,N,V,U)),Z-=V,U+=V,v)break e}else $.head&&($.head.name=null);$.length=0,$.mode=8;case 8:if(4096&$.flags){if(Z===0)break e;for(V=0;v=N[U+V++],$.head&&v&&$.length<65536&&($.head.comment+=String.fromCharCode(v)),v&&V<Z;);if(512&$.flags&&($.check=a($.check,N,V,U)),Z-=V,U+=V,v)break e}else $.head&&($.head.comment=null);$.mode=9;case 9:if(512&$.flags){for(;C<16;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}if(q!==(65535&$.check)){P.msg="header crc mismatch",$.mode=30;break}C=q=0}$.head&&($.head.hcrc=$.flags>>9&1,$.head.done=!0),P.adler=$.check=0,$.mode=12;break;case 10:for(;C<32;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}P.adler=$.check=g(q),C=q=0,$.mode=11;case 11:if($.havedict===0)return P.next_out=ne,P.avail_out=re,P.next_in=U,P.avail_in=Z,$.hold=q,$.bits=C,2;P.adler=$.check=1,$.mode=12;case 12:if(B===5||B===6)break e;case 13:if($.last){q>>>=7&C,C-=7&C,$.mode=27;break}for(;C<3;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}switch($.last=1&q,C-=1,3&(q>>>=1)){case 0:$.mode=14;break;case 1:if(D($),$.mode=20,B!==6)break;q>>>=2,C-=2;break e;case 2:$.mode=17;break;case 3:P.msg="invalid block type",$.mode=30}q>>>=2,C-=2;break;case 14:for(q>>>=7&C,C-=7&C;C<32;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}if((65535&q)!=(q>>>16^65535)){P.msg="invalid stored block lengths",$.mode=30;break}if($.length=65535&q,C=q=0,$.mode=15,B===6)break e;case 15:$.mode=16;case 16:if(V=$.length){if(Z<V&&(V=Z),re<V&&(V=re),V===0)break e;i.arraySet(J,N,U,V,ne),Z-=V,U+=V,re-=V,ne+=V,$.length-=V;break}$.mode=12;break;case 17:for(;C<14;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}if($.nlen=257+(31&q),q>>>=5,C-=5,$.ndist=1+(31&q),q>>>=5,C-=5,$.ncode=4+(15&q),q>>>=4,C-=4,286<$.nlen||30<$.ndist){P.msg="too many length or distance symbols",$.mode=30;break}$.have=0,$.mode=18;case 18:for(;$.have<$.ncode;){for(;C<3;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}$.lens[W[$.have++]]=7&q,q>>>=3,C-=3}for(;$.have<19;)$.lens[W[$.have++]]=0;if($.lencode=$.lendyn,$.lenbits=7,H={bits:$.lenbits},j=l(0,$.lens,0,19,$.lencode,0,$.work,H),$.lenbits=H.bits,j){P.msg="invalid code lengths set",$.mode=30;break}$.have=0,$.mode=19;case 19:for(;$.have<$.nlen+$.ndist;){for(;G=(A=$.lencode[q&(1<<$.lenbits)-1])>>>16&255,ae=65535&A,!((oe=A>>>24)<=C);){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}if(ae<16)q>>>=oe,C-=oe,$.lens[$.have++]=ae;else{if(ae===16){for(M=oe+2;C<M;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}if(q>>>=oe,C-=oe,$.have===0){P.msg="invalid bit length repeat",$.mode=30;break}v=$.lens[$.have-1],V=3+(3&q),q>>>=2,C-=2}else if(ae===17){for(M=oe+3;C<M;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}C-=oe,v=0,V=3+(7&(q>>>=oe)),q>>>=3,C-=3}else{for(M=oe+7;C<M;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}C-=oe,v=0,V=11+(127&(q>>>=oe)),q>>>=7,C-=7}if($.have+V>$.nlen+$.ndist){P.msg="invalid bit length repeat",$.mode=30;break}for(;V--;)$.lens[$.have++]=v}}if($.mode===30)break;if($.lens[256]===0){P.msg="invalid code -- missing end-of-block",$.mode=30;break}if($.lenbits=9,H={bits:$.lenbits},j=l(d,$.lens,0,$.nlen,$.lencode,0,$.work,H),$.lenbits=H.bits,j){P.msg="invalid literal/lengths set",$.mode=30;break}if($.distbits=6,$.distcode=$.distdyn,H={bits:$.distbits},j=l(c,$.lens,$.nlen,$.ndist,$.distcode,0,$.work,H),$.distbits=H.bits,j){P.msg="invalid distances set",$.mode=30;break}if($.mode=20,B===6)break e;case 20:$.mode=21;case 21:if(6<=Z&&258<=re){P.next_out=ne,P.avail_out=re,P.next_in=U,P.avail_in=Z,$.hold=q,$.bits=C,o(P,L),ne=P.next_out,J=P.output,re=P.avail_out,U=P.next_in,N=P.input,Z=P.avail_in,q=$.hold,C=$.bits,$.mode===12&&($.back=-1);break}for($.back=0;G=(A=$.lencode[q&(1<<$.lenbits)-1])>>>16&255,ae=65535&A,!((oe=A>>>24)<=C);){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}if(G&&(240&G)==0){for(le=oe,z=G,X=ae;G=(A=$.lencode[X+((q&(1<<le+z)-1)>>le)])>>>16&255,ae=65535&A,!(le+(oe=A>>>24)<=C);){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}q>>>=le,C-=le,$.back+=le}if(q>>>=oe,C-=oe,$.back+=oe,$.length=ae,G===0){$.mode=26;break}if(32&G){$.back=-1,$.mode=12;break}if(64&G){P.msg="invalid literal/length code",$.mode=30;break}$.extra=15&G,$.mode=22;case 22:if($.extra){for(M=$.extra;C<M;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}$.length+=q&(1<<$.extra)-1,q>>>=$.extra,C-=$.extra,$.back+=$.extra}$.was=$.length,$.mode=23;case 23:for(;G=(A=$.distcode[q&(1<<$.distbits)-1])>>>16&255,ae=65535&A,!((oe=A>>>24)<=C);){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}if((240&G)==0){for(le=oe,z=G,X=ae;G=(A=$.distcode[X+((q&(1<<le+z)-1)>>le)])>>>16&255,ae=65535&A,!(le+(oe=A>>>24)<=C);){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}q>>>=le,C-=le,$.back+=le}if(q>>>=oe,C-=oe,$.back+=oe,64&G){P.msg="invalid distance code",$.mode=30;break}$.offset=ae,$.extra=15&G,$.mode=24;case 24:if($.extra){for(M=$.extra;C<M;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}$.offset+=q&(1<<$.extra)-1,q>>>=$.extra,C-=$.extra,$.back+=$.extra}if($.offset>$.dmax){P.msg="invalid distance too far back",$.mode=30;break}$.mode=25;case 25:if(re===0)break e;if(V=L-re,$.offset>V){if((V=$.offset-V)>$.whave&&$.sane){P.msg="invalid distance too far back",$.mode=30;break}Q=V>$.wnext?(V-=$.wnext,$.wsize-V):$.wnext-V,V>$.length&&(V=$.length),de=$.window}else de=J,Q=ne-$.offset,V=$.length;for(re<V&&(V=re),re-=V,$.length-=V;J[ne++]=de[Q++],--V;);$.length===0&&($.mode=21);break;case 26:if(re===0)break e;J[ne++]=$.length,re--,$.mode=21;break;case 27:if($.wrap){for(;C<32;){if(Z===0)break e;Z--,q|=N[U++]<<C,C+=8}if(L-=re,P.total_out+=L,$.total+=L,L&&(P.adler=$.check=$.flags?a($.check,J,L,ne-L):r($.check,J,L,ne-L)),L=re,($.flags?q:g(q))!==$.check){P.msg="incorrect data check",$.mode=30;break}C=q=0}$.mode=28;case 28:if($.wrap&&$.flags){for(;C<32;){if(Z===0)break e;Z--,q+=N[U++]<<C,C+=8}if(q!==(4294967295&$.total)){P.msg="incorrect length check",$.mode=30;break}C=q=0}$.mode=29;case 29:j=1;break e;case 30:j=-3;break e;case 31:return-4;default:return h}return P.next_out=ne,P.avail_out=re,P.next_in=U,P.avail_in=Z,$.hold=q,$.bits=C,($.wsize||L!==P.avail_out&&$.mode<30&&($.mode<27||B!==4))&&O(P,P.output,P.next_out,L-P.avail_out)?($.mode=31,-4):(_-=P.avail_in,L-=P.avail_out,P.total_in+=_,P.total_out+=L,$.total+=L,$.wrap&&L&&(P.adler=$.check=$.flags?a($.check,J,L,P.next_out-L):r($.check,J,L,P.next_out-L)),P.data_type=$.bits+($.last?64:0)+($.mode===12?128:0)+($.mode===20||$.mode===15?256:0),(_==0&&L===0||B===4)&&j===p&&(j=-5),j)},n.inflateEnd=function(P){if(!P||!P.state)return h;var B=P.state;return B.window&&(B.window=null),P.state=null,p},n.inflateGetHeader=function(P,B){var $;return P&&P.state?(2&($=P.state).wrap)==0?h:(($.head=B).done=!1,p):h},n.inflateSetDictionary=function(P,B){var $,N=B.length;return P&&P.state?($=P.state).wrap!==0&&$.mode!==11?h:$.mode===11&&r(1,B,N,0)!==$.check?-3:O(P,B,N,N)?($.mode=31,-4):($.havedict=1,p):h},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(s,t,n){var i=s("../utils/common"),r=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(d,c,p,h,m,f,b,g){var y,x,k,u,w,I,S,T,D,O=g.bits,P=0,B=0,$=0,N=0,J=0,U=0,ne=0,Z=0,re=0,q=0,C=null,_=0,L=new i.Buf16(16),V=new i.Buf16(16),Q=null,de=0;for(P=0;P<=15;P++)L[P]=0;for(B=0;B<h;B++)L[c[p+B]]++;for(J=O,N=15;1<=N&&L[N]===0;N--);if(N<J&&(J=N),N===0)return m[f++]=20971520,m[f++]=20971520,g.bits=1,0;for($=1;$<N&&L[$]===0;$++);for(J<$&&(J=$),P=Z=1;P<=15;P++)if(Z<<=1,(Z-=L[P])<0)return-1;if(0<Z&&(d===0||N!==1))return-1;for(V[1]=0,P=1;P<15;P++)V[P+1]=V[P]+L[P];for(B=0;B<h;B++)c[p+B]!==0&&(b[V[c[p+B]]++]=B);if(I=d===0?(C=Q=b,19):d===1?(C=r,_-=257,Q=a,de-=257,256):(C=o,Q=l,-1),P=$,w=f,ne=B=q=0,k=-1,u=(re=1<<(U=J))-1,d===1&&852<re||d===2&&592<re)return 1;for(;;){for(S=P-ne,D=b[B]<I?(T=0,b[B]):b[B]>I?(T=Q[de+b[B]],C[_+b[B]]):(T=96,0),y=1<<P-ne,$=x=1<<U;m[w+(q>>ne)+(x-=y)]=S<<24|T<<16|D|0,x!==0;);for(y=1<<P-1;q&y;)y>>=1;if(y!==0?(q&=y-1,q+=y):q=0,B++,--L[P]==0){if(P===N)break;P=c[p+b[B]]}if(J<P&&(q&u)!==k){for(ne===0&&(ne=J),w+=$,Z=1<<(U=P-ne);U+ne<N&&!((Z-=L[U+ne])<=0);)U++,Z<<=1;if(re+=1<<U,d===1&&852<re||d===2&&592<re)return 1;m[k=q&u]=J<<24|U<<16|w-f|0}}return q!==0&&(m[w+q]=P-ne<<24|64<<16|0),g.bits=J,0}},{"../utils/common":41}],51:[function(s,t,n){t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(s,t,n){var i=s("../utils/common"),r=0,a=1;function o(A){for(var R=A.length;0<=--R;)A[R]=0}var l=0,d=29,c=256,p=c+1+d,h=30,m=19,f=2*p+1,b=15,g=16,y=7,x=256,k=16,u=17,w=18,I=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],T=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],O=new Array(2*(p+2));o(O);var P=new Array(2*h);o(P);var B=new Array(512);o(B);var $=new Array(256);o($);var N=new Array(d);o(N);var J,U,ne,Z=new Array(h);function re(A,R,W,Y,F){this.static_tree=A,this.extra_bits=R,this.extra_base=W,this.elems=Y,this.max_length=F,this.has_stree=A&&A.length}function q(A,R){this.dyn_tree=A,this.max_code=0,this.stat_desc=R}function C(A){return A<256?B[A]:B[256+(A>>>7)]}function _(A,R){A.pending_buf[A.pending++]=255&R,A.pending_buf[A.pending++]=R>>>8&255}function L(A,R,W){A.bi_valid>g-W?(A.bi_buf|=R<<A.bi_valid&65535,_(A,A.bi_buf),A.bi_buf=R>>g-A.bi_valid,A.bi_valid+=W-g):(A.bi_buf|=R<<A.bi_valid&65535,A.bi_valid+=W)}function V(A,R,W){L(A,W[2*R],W[2*R+1])}function Q(A,R){for(var W=0;W|=1&A,A>>>=1,W<<=1,0<--R;);return W>>>1}function de(A,R,W){var Y,F,te=new Array(b+1),se=0;for(Y=1;Y<=b;Y++)te[Y]=se=se+W[Y-1]<<1;for(F=0;F<=R;F++){var ee=A[2*F+1];ee!==0&&(A[2*F]=Q(te[ee]++,ee))}}function oe(A){var R;for(R=0;R<p;R++)A.dyn_ltree[2*R]=0;for(R=0;R<h;R++)A.dyn_dtree[2*R]=0;for(R=0;R<m;R++)A.bl_tree[2*R]=0;A.dyn_ltree[2*x]=1,A.opt_len=A.static_len=0,A.last_lit=A.matches=0}function G(A){8<A.bi_valid?_(A,A.bi_buf):0<A.bi_valid&&(A.pending_buf[A.pending++]=A.bi_buf),A.bi_buf=0,A.bi_valid=0}function ae(A,R,W,Y){var F=2*R,te=2*W;return A[F]<A[te]||A[F]===A[te]&&Y[R]<=Y[W]}function le(A,R,W){for(var Y=A.heap[W],F=W<<1;F<=A.heap_len&&(F<A.heap_len&&ae(R,A.heap[F+1],A.heap[F],A.depth)&&F++,!ae(R,Y,A.heap[F],A.depth));)A.heap[W]=A.heap[F],W=F,F<<=1;A.heap[W]=Y}function z(A,R,W){var Y,F,te,se,ee=0;if(A.last_lit!==0)for(;Y=A.pending_buf[A.d_buf+2*ee]<<8|A.pending_buf[A.d_buf+2*ee+1],F=A.pending_buf[A.l_buf+ee],ee++,Y===0?V(A,F,R):(V(A,(te=$[F])+c+1,R),(se=I[te])!==0&&L(A,F-=N[te],se),V(A,te=C(--Y),W),(se=S[te])!==0&&L(A,Y-=Z[te],se)),ee<A.last_lit;);V(A,x,R)}function X(A,R){var W,Y,F,te=R.dyn_tree,se=R.stat_desc.static_tree,ee=R.stat_desc.has_stree,K=R.stat_desc.elems,ce=-1;for(A.heap_len=0,A.heap_max=f,W=0;W<K;W++)te[2*W]!==0?(A.heap[++A.heap_len]=ce=W,A.depth[W]=0):te[2*W+1]=0;for(;A.heap_len<2;)te[2*(F=A.heap[++A.heap_len]=ce<2?++ce:0)]=1,A.depth[F]=0,A.opt_len--,ee&&(A.static_len-=se[2*F+1]);for(R.max_code=ce,W=A.heap_len>>1;1<=W;W--)le(A,te,W);for(F=K;W=A.heap[1],A.heap[1]=A.heap[A.heap_len--],le(A,te,1),Y=A.heap[1],A.heap[--A.heap_max]=W,A.heap[--A.heap_max]=Y,te[2*F]=te[2*W]+te[2*Y],A.depth[F]=(A.depth[W]>=A.depth[Y]?A.depth[W]:A.depth[Y])+1,te[2*W+1]=te[2*Y+1]=F,A.heap[1]=F++,le(A,te,1),2<=A.heap_len;);A.heap[--A.heap_max]=A.heap[1],(function(he,ge){var ye,pe,Ce,xe,Pe,Le,_e=ge.dyn_tree,Re=ge.max_code,Qt=ge.stat_desc.static_tree,ea=ge.stat_desc.has_stree,ta=ge.stat_desc.extra_bits,Ct=ge.stat_desc.extra_base,qe=ge.stat_desc.max_length,Qe=0;for(xe=0;xe<=b;xe++)he.bl_count[xe]=0;for(_e[2*he.heap[he.heap_max]+1]=0,ye=he.heap_max+1;ye<f;ye++)qe<(xe=_e[2*_e[2*(pe=he.heap[ye])+1]+1]+1)&&(xe=qe,Qe++),_e[2*pe+1]=xe,Re<pe||(he.bl_count[xe]++,Pe=0,Ct<=pe&&(Pe=ta[pe-Ct]),Le=_e[2*pe],he.opt_len+=Le*(xe+Pe),ea&&(he.static_len+=Le*(Qt[2*pe+1]+Pe)));if(Qe!==0){do{for(xe=qe-1;he.bl_count[xe]===0;)xe--;he.bl_count[xe]--,he.bl_count[xe+1]+=2,he.bl_count[qe]--,Qe-=2}while(0<Qe);for(xe=qe;xe!==0;xe--)for(pe=he.bl_count[xe];pe!==0;)Re<(Ce=he.heap[--ye])||(_e[2*Ce+1]!==xe&&(he.opt_len+=(xe-_e[2*Ce+1])*_e[2*Ce],_e[2*Ce+1]=xe),pe--)}})(A,R),de(te,ce,A.bl_count)}function v(A,R,W){var Y,F,te=-1,se=R[1],ee=0,K=7,ce=4;for(se===0&&(K=138,ce=3),R[2*(W+1)+1]=65535,Y=0;Y<=W;Y++)F=se,se=R[2*(Y+1)+1],++ee<K&&F===se||(ee<ce?A.bl_tree[2*F]+=ee:F!==0?(F!==te&&A.bl_tree[2*F]++,A.bl_tree[2*k]++):ee<=10?A.bl_tree[2*u]++:A.bl_tree[2*w]++,te=F,ce=(ee=0)===se?(K=138,3):F===se?(K=6,3):(K=7,4))}function j(A,R,W){var Y,F,te=-1,se=R[1],ee=0,K=7,ce=4;for(se===0&&(K=138,ce=3),Y=0;Y<=W;Y++)if(F=se,se=R[2*(Y+1)+1],!(++ee<K&&F===se)){if(ee<ce)for(;V(A,F,A.bl_tree),--ee!=0;);else F!==0?(F!==te&&(V(A,F,A.bl_tree),ee--),V(A,k,A.bl_tree),L(A,ee-3,2)):ee<=10?(V(A,u,A.bl_tree),L(A,ee-3,3)):(V(A,w,A.bl_tree),L(A,ee-11,7));te=F,ce=(ee=0)===se?(K=138,3):F===se?(K=6,3):(K=7,4)}}o(Z);var H=!1;function M(A,R,W,Y){L(A,(l<<1)+(Y?1:0),3),(function(F,te,se,ee){G(F),_(F,se),_(F,~se),i.arraySet(F.pending_buf,F.window,te,se,F.pending),F.pending+=se})(A,R,W)}n._tr_init=function(A){H||((function(){var R,W,Y,F,te,se=new Array(b+1);for(F=Y=0;F<d-1;F++)for(N[F]=Y,R=0;R<1<<I[F];R++)$[Y++]=F;for($[Y-1]=F,F=te=0;F<16;F++)for(Z[F]=te,R=0;R<1<<S[F];R++)B[te++]=F;for(te>>=7;F<h;F++)for(Z[F]=te<<7,R=0;R<1<<S[F]-7;R++)B[256+te++]=F;for(W=0;W<=b;W++)se[W]=0;for(R=0;R<=143;)O[2*R+1]=8,R++,se[8]++;for(;R<=255;)O[2*R+1]=9,R++,se[9]++;for(;R<=279;)O[2*R+1]=7,R++,se[7]++;for(;R<=287;)O[2*R+1]=8,R++,se[8]++;for(de(O,p+1,se),R=0;R<h;R++)P[2*R+1]=5,P[2*R]=Q(R,5);J=new re(O,I,c+1,p,b),U=new re(P,S,0,h,b),ne=new re(new Array(0),T,0,m,y)})(),H=!0),A.l_desc=new q(A.dyn_ltree,J),A.d_desc=new q(A.dyn_dtree,U),A.bl_desc=new q(A.bl_tree,ne),A.bi_buf=0,A.bi_valid=0,oe(A)},n._tr_stored_block=M,n._tr_flush_block=function(A,R,W,Y){var F,te,se=0;0<A.level?(A.strm.data_type===2&&(A.strm.data_type=(function(ee){var K,ce=4093624447;for(K=0;K<=31;K++,ce>>>=1)if(1&ce&&ee.dyn_ltree[2*K]!==0)return r;if(ee.dyn_ltree[18]!==0||ee.dyn_ltree[20]!==0||ee.dyn_ltree[26]!==0)return a;for(K=32;K<c;K++)if(ee.dyn_ltree[2*K]!==0)return a;return r})(A)),X(A,A.l_desc),X(A,A.d_desc),se=(function(ee){var K;for(v(ee,ee.dyn_ltree,ee.l_desc.max_code),v(ee,ee.dyn_dtree,ee.d_desc.max_code),X(ee,ee.bl_desc),K=m-1;3<=K&&ee.bl_tree[2*D[K]+1]===0;K--);return ee.opt_len+=3*(K+1)+5+5+4,K})(A),F=A.opt_len+3+7>>>3,(te=A.static_len+3+7>>>3)<=F&&(F=te)):F=te=W+5,W+4<=F&&R!==-1?M(A,R,W,Y):A.strategy===4||te===F?(L(A,2+(Y?1:0),3),z(A,O,P)):(L(A,4+(Y?1:0),3),(function(ee,K,ce,he){var ge;for(L(ee,K-257,5),L(ee,ce-1,5),L(ee,he-4,4),ge=0;ge<he;ge++)L(ee,ee.bl_tree[2*D[ge]+1],3);j(ee,ee.dyn_ltree,K-1),j(ee,ee.dyn_dtree,ce-1)})(A,A.l_desc.max_code+1,A.d_desc.max_code+1,se+1),z(A,A.dyn_ltree,A.dyn_dtree)),oe(A),Y&&G(A)},n._tr_tally=function(A,R,W){return A.pending_buf[A.d_buf+2*A.last_lit]=R>>>8&255,A.pending_buf[A.d_buf+2*A.last_lit+1]=255&R,A.pending_buf[A.l_buf+A.last_lit]=255&W,A.last_lit++,R===0?A.dyn_ltree[2*W]++:(A.matches++,R--,A.dyn_ltree[2*($[W]+c+1)]++,A.dyn_dtree[2*C(R)]++),A.last_lit===A.lit_bufsize-1},n._tr_align=function(A){L(A,2,3),V(A,x,O),(function(R){R.bi_valid===16?(_(R,R.bi_buf),R.bi_buf=0,R.bi_valid=0):8<=R.bi_valid&&(R.pending_buf[R.pending++]=255&R.bi_buf,R.bi_buf>>=8,R.bi_valid-=8)})(A)}},{"../utils/common":41}],53:[function(s,t,n){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(s,t,n){(function(i){(function(r,a){if(!r.setImmediate){var o,l,d,c,p=1,h={},m=!1,f=r.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(r);b=b&&b.setTimeout?b:r,o={}.toString.call(r.process)==="[object process]"?function(k){process.nextTick(function(){y(k)})}:(function(){if(r.postMessage&&!r.importScripts){var k=!0,u=r.onmessage;return r.onmessage=function(){k=!1},r.postMessage("","*"),r.onmessage=u,k}})()?(c="setImmediate$"+Math.random()+"$",r.addEventListener?r.addEventListener("message",x,!1):r.attachEvent("onmessage",x),function(k){r.postMessage(c+k,"*")}):r.MessageChannel?((d=new MessageChannel).port1.onmessage=function(k){y(k.data)},function(k){d.port2.postMessage(k)}):f&&"onreadystatechange"in f.createElement("script")?(l=f.documentElement,function(k){var u=f.createElement("script");u.onreadystatechange=function(){y(k),u.onreadystatechange=null,l.removeChild(u),u=null},l.appendChild(u)}):function(k){setTimeout(y,0,k)},b.setImmediate=function(k){typeof k!="function"&&(k=new Function(""+k));for(var u=new Array(arguments.length-1),w=0;w<u.length;w++)u[w]=arguments[w+1];var I={callback:k,args:u};return h[p]=I,o(p),p++},b.clearImmediate=g}function g(k){delete h[k]}function y(k){if(m)setTimeout(y,0,k);else{var u=h[k];if(u){m=!0;try{(function(w){var I=w.callback,S=w.args;switch(S.length){case 0:I();break;case 1:I(S[0]);break;case 2:I(S[0],S[1]);break;case 3:I(S[0],S[1],S[2]);break;default:I.apply(a,S)}})(u)}finally{g(k),m=!1}}}}function x(k){k.source===r&&typeof k.data=="string"&&k.data.indexOf(c)===0&&y(+k.data.slice(c.length))}})(typeof self>"u"?i===void 0?this:i:self)}).call(this,typeof tt<"u"?tt:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(gt)),gt.exports}var ts=es();const Ot=ot(ts),ze=(E,e)=>!!(E.moments&&E.moments.includes(e)||E.moment===e),$e={打出时:"🚩",死亡时:"☠️",攻击时:"🗡️",失去生命时:"💔",回合结束时:"📘",回合开始时:"📗",下回合开始时:"⏱️",受伤时:"💔"},Nt={my_hand:"我方手牌数",enemy_hand:"敌方手牌数",my_minions:"我方随从数",enemy_minions:"敌方随从数"};function as(E,e){const s=E.type==="hero",t=e.type==="hero";if(s!==t)return s?-1:1;if(E.cost!==e.cost)return E.cost-e.cost;const n=E.type!=="spell",i=e.type!=="spell";if(n!==i)return n?-1:1;const r=(E.attack||0)+(E.health||0),a=(e.attack||0)+(e.health||0);return r!==a?r-a:E.name.localeCompare(e.name,"en")}function Ie(E,e){return E==="deck_top"?e?"抽牌堆的卡牌":"抽牌堆顶的卡牌":E==="discard_top"?e?"弃牌堆的卡牌":"弃牌堆顶的卡牌":E==="my_hand"?e?"我方手牌":"我方所有手牌":E==="enemy_hand"?e?"敌方手牌":"敌方所有手牌":"未知来源"}const Ae=class Ae{constructor(){this.selectedMinion=null,this.isAttacking=!1,this.dyingMinions=new Set,this.lastGameStateTimestamp=0,this.draggedCard=null,this.dragElement=null,this._pendingClickCardId=void 0,this._lastBroadcastDiscardPileLen=0,this._pendingEnemyHandCard=void 0,this._pendingEnemyHandEffectType=void 0,this.isHandDragStarted=!1,this.handDragStartX=0,this.handDragStartY=0,this.globalListenersAttached=!1,this.attackingMinion=null,this.attackArrowEl=null,this.attackArrowStartX=0,this.attackArrowStartY=0,this.selectedHandCard=null,this.selectedAttackingMinion=null,this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null,this.selectingTargetForSkill=null,this.targetArrowStartX=0,this.targetArrowStartY=0,this.targetArrowColor="#4a90d9",this.editingCards=[],this.currentCardIndex=0,this.currentEffectIndex=0,this.showKeywordsPanel=!1,this.showMomentPanel=!1,this.showTargetPanel=!1,this.showEffectPanel=!1,this.showConditionPanel=!1,this.isPortraitMode=!1,this.showSidePanel=!1,this.pendingScrollRestoration=null,this.savedCardManagerScrollY=0,this.robotTurnExecuting=!1,this.heroName="",this.heroImageData=null,this.isHeroEditMode=!1,this.editingHeroId=null,this.heroDerivedCards=[],this.heroEditingDerivedIndex=null,this.heroSkills=[],this.heroEditingSkillIndex=null,this.heroEditingSkillEffectIndex=0,this.heroSkillTempImageData=null,this.heroSkillCropIndex=null,this.showHeroSkillMomentPanel=!1,this.showHeroSkillTargetPanel=!1,this.showHeroSkillEffectPanel=!1,this.showHeroSkillConditionPanel=!1,this.heroSpeech={greeting:"",apology:"",taunt:"",exclamation:"",pity:"",flirt:""},this.heroVoiceType="none",this.speechCooldown=!1,this.speechLastTurnCheck=0,this.speechLastRobotBoardSize=0,this.speechLastRobotBoardIds=new Set,this.speechLastRobotHealth=40,this.speechLastHandSize=0,this.speechLastPlayerEnergy=0,this.speechLastRobotTotalHealth=0,this.speechTurnSpokenTypes=new Set,this.flirtAudioPlaying=!1,this.lastPlayerActionTimestamp=Date.now(),this.playerIdleTaunted=!1,this.speechLastActionSignature="",this.showSpeechMenu=!1,this.speechMenuTimer=null,this.activeSpeechBubble=null,this.cropTarget="main",this.importMode="full",this.isDrawingMode=!1,this.drawingTool="brush",this.drawingCanvasRef=null,this.drawingCtxRef=null,this.drawingBaseImageData=null,this.brushSizePreset="medium",this.COLORS=["#c9524a","#d4894a","#c9a84a","#4a8a5a","#4a8a8a","#4a6a9a","#7a5a8a","#000000"],this.drawingColor="#000000",this.currentColorIndex=7,this.menuSubScreen="",this._lastAnimatedRenderKey="",this.onlineLoginError=null,this._suppressFirstRender=!1,this.player1SelectedHero=null,this.player2SelectedHero=null,this.renamingGroupId=null,this.collapsedGroups=new Set,this.elementClickCount=0,this.lastElementKeyword=null,this.isEditMode=!1,this.editingCardSample=null,this.sortedCardList=[],this.lastDeckVersion=0,this.lastPhase="",this.showGameMenu=!1,this.showMenuOptions=!1,this.soundVolume=Math.min(100,Math.max(0,parseInt(localStorage.getItem("soundVolume")||"50"))),this.musicVolume=Math.min(100,Math.max(0,parseInt(localStorage.getItem("musicVolume")||"50"))),this.bgMusic=null,this.currentBgmTrack="",this._bgmPaused=!1,this._bgmAutoPaused=!1,this.deckFolderHandle=null,this.deckFolderZips=[],this.deckFolderName="",this.deckFolderConnected=!1,this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.savedGameState=null,this.previousMinionStats=new Map,this.deathAnimationQueue=[],this.previousBoardMinionIds=new Set,this.damageNumbers=[],this.previousPlayerHealth=[30,30],this.roomSubscription=null,this.battleStatePollInterval=null,this.isSubscribing=!1,this.pollingInterval=null,this.onlineViewPlayerIndex=0,this.cardTemplates=[{name:"少年剑客",cost:1,attack:2,health:1,maxHealth:1,type:"minion",keywords:[],imageData:"/cards/card_swordsman.png"},{name:"花灵仙子",cost:1,attack:0,health:2,maxHealth:2,type:"minion",keywords:[],imageData:"/cards/card_fairy.png"},{name:"麦田收割者",cost:2,attack:2,health:2,maxHealth:2,type:"minion",keywords:[],imageData:"/cards/card_harvest_maiden.png"},{name:"铁匠",cost:2,attack:2,health:3,maxHealth:3,type:"minion",keywords:[Ee.armor],imageData:"/cards/card_blacksmith.png"},{name:"血刃刺客",cost:2,attack:3,health:1,maxHealth:1,type:"minion",keywords:[Ee.firstStrike],imageData:"/cards/card_assassin.png"},{name:"重装守卫",cost:3,attack:1,health:6,maxHealth:6,type:"minion",keywords:[Ee.taunt],imageData:"/cards/card_guardian.png"},{name:"秘法师",cost:4,attack:1,health:4,maxHealth:4,type:"minion",keywords:[],imageData:"/cards/card_archmage.png"},{name:"圣殿骑士",cost:4,attack:4,health:4,maxHealth:4,type:"minion",keywords:[],imageData:"/cards/card_templar.png"}],this.clickSoundFiles=[],this.drawSoundFiles=[],this.woodSoundFiles=[],this.clickAudioPool=[],this.clickAudioIndex=0,this.woodAudioPool=[],this.woodAudioIndex=0,this.drawAudioPool=[],this.drawAudioIndex=0,this.pendingSavePromise=null,this.customCursorEl=null,this.pendingImportCards=[],this.pendingImportMode=null,this.pendingImportType=null,this.pendingOnlineImportCards=[],this.pendingOnlineImportMode=null,this.pendingOnlineImportType=null,this.fxCanvas=null,this.fxCtx=null,this.fxParticles=[],this.fxAnimationId=0,this.fxRunning=!1,this.fxLoop=()=>{const e=this.fxCtx,s=this.fxCanvas;if(!e||!s){this.fxRunning=!1;return}e.clearRect(0,0,s.width,s.height);const t=1/60;e.globalCompositeOperation="lighter";for(let n=this.fxParticles.length-1;n>=0;n--){const i=this.fxParticles[n];if(i.life-=t/i.maxLife,i.life<=0){this.fxParticles.splice(n,1);continue}i.gravity&&(i.vy+=i.gravity*t),i.x+=i.vx*t,i.y+=i.vy*t,i.vx*=.98,i.vy*=.98,i.alpha=i.life*(i.alpha>.5?i.alpha:1);const r=i.size*Math.max(.1,i.life);let a=i.color;if(!(!a.startsWith("rgba")&&!a.startsWith("#"))){if(a.startsWith("#")){const o=1-i.life;a==="#ff6600"&&(a=o>.5?"#cc2200":"#ff6600")}}if(i.trail&&i.history){i.history.push({x:i.x,y:i.y}),i.history.length>(i.trailLength||5)&&i.history.shift();for(let o=0;o<i.history.length-1;o++){const l=o/i.history.length*i.alpha*.5;e.beginPath(),e.arc(i.history[o].x,i.history[o].y,r*(o/i.history.length)*.6,0,Math.PI*2),e.fillStyle=a.replace(")",`,${l})`).replace("rgb","rgba"),a.includes("rgba")||(e.fillStyle=`rgba(${parseInt(a.slice(1,3),16)},${parseInt(a.slice(3,5),16)},${parseInt(a.slice(5,7),16)},${l})`),e.fill()}}if(e.beginPath(),i.shape==="spark"){const o=r*3,l=r;e.ellipse(i.x,i.y,o/2,l/2,Math.atan2(i.vy,i.vx),0,Math.PI*2)}else e.arc(i.x,i.y,r,0,Math.PI*2);if(a.startsWith("rgba")){const o=a.match(/rgba\((\d+),(\d+),(\d+),([\d.]+)\)/);o?e.fillStyle=`rgba(${o[1]},${o[2]},${o[3]},${parseFloat(o[4])*i.alpha})`:e.fillStyle=a}else if(a.startsWith("#")){const o=parseInt(a.slice(1,3),16),l=parseInt(a.slice(3,5),16),d=parseInt(a.slice(5,7),16);e.fillStyle=`rgba(${o},${l},${d},${i.alpha})`}else e.fillStyle=a;e.fill()}e.globalCompositeOperation="source-over",this.fxParticles.length>0?this.fxAnimationId=requestAnimationFrame(this.fxLoop):this.fxRunning=!1},this.thumbsDownAnimCssInjected=!1,this.thumbsDownIntervalId=null,this._suppressFirstRender=!!sessionStorage.getItem("_pageAnimLoaded"),sessionStorage.getItem("_pageAnimLoaded")||sessionStorage.setItem("_pageAnimLoaded","1"),this.state=jt(),this.app=document.getElementById("app"),this.boundMouseMove=this.handleMouseMove.bind(this),this.boundMouseUp=this.handleMouseUp.bind(this),this.initClickSounds(),this.render(),this.loadPersistedDeck(),this.loadDeckFolder(),this.startBackgroundMusic(),this.createNowPlayingDisplay(),this.initAtmosphere(),document.addEventListener("visibilitychange",()=>{document.hidden?(this.bgMusic&&!this.bgMusic.paused&&(this.bgMusic.pause(),this._bgmAutoPaused=!0),this.syncSharedDeck(),this.pendingSavePromise=_t(this.state.sharedDeck,this.state.heroCards||[],this.state.groups)):this._bgmAutoPaused&&!this._bgmPaused&&(this.bgMusic?.play().catch(()=>{}),this._bgmAutoPaused=!1)}),document.addEventListener("keydown",e=>{if(e.key!=="Escape")return;const s=this.state.phase;["playing","mulligan","gameOver","robotBattle","robotGameOver","onlineBattle","onlineGameOver"].includes(s)?this.showGameMenu=!this.showGameMenu:s==="menu"?this.showMenuOptions=!this.showMenuOptions:(this.state=ie(this.state,{type:"BACK_TO_MENU"}),this.showMenuOptions=!1,this.showGameMenu=!1),this.render()})}get currentCard(){return this.editingCards[this.currentCardIndex]||this.editingCards[0]||this.createDefaultCard()}set currentCard(e){this.editingCards[this.currentCardIndex]&&(this.editingCards[this.currentCardIndex]=e)}getBrushSize(){return this.drawingTool==="brush"?this.brushSizePreset==="thin"?1:this.brushSizePreset==="medium"?3:9:this.brushSizePreset==="thin"?5:this.brushSizePreset==="medium"?15:45}createDefaultEffect(){return{moment:null,targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0,isAttackSet:!1,isHealthSet:!1,costValue:0,isCostPositive:!0,isCostSet:!1,triggerNumbers:[1,2,3,4,5,6],randomTargetTimes:1}}createDefaultCard(e="minion"){return{name:"",cost:1,attack:e==="spell"?0:1,health:e==="spell"?0:1,keywords:[],armorValue:1,preparationValue:1,effects:[],type:e,spellEffect:{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0,isAttackSet:!1,isHealthSet:!1,costValue:0,isCostPositive:!0,isCostSet:!1},imageData:null}}initCardsArray(e="minion"){this.editingCards=[this.createDefaultCard(e)],this.currentCardIndex=0,this.currentEffectIndex=0}addDerivedCard(){const e=this.createDefaultCard("minion");e.name=`衍生卡${this.editingCards.length}`,this.editingCards.push(e),this.currentCardIndex=this.editingCards.length-1,this.currentEffectIndex=0}deleteDerivedCard(e){e!==0&&(this.editingCards.splice(e,1),this.currentCardIndex=0,this.currentEffectIndex=0)}getMainCard(){return this.editingCards[0]}getCardByIndex(e){return this.editingCards[e]}cloneCardByIndex(e){const s=this.editingCards[e];return s?{id:ke(),name:s.name||"未知卡牌",cost:s.cost,attack:s.attack,health:s.health,maxHealth:s.health,type:s.type,keywords:s.keywords.map(t=>({...t})),armorValue:s.armorValue,effects:s.effects?.map(t=>({...t})),imageData:s.imageData||void 0}:null}getCurrentEffect(){return!this.currentCard.effects||this.currentCard.effects.length===0?null:this.currentCard.effects[this.currentEffectIndex]||null}addNewEffect(){return this.currentCard.effects||(this.currentCard.effects=[]),this.currentCard.effects.push(this.createDefaultEffect()),this.currentEffectIndex=this.currentCard.effects.length-1,this.showMomentPanel=!0,this.currentCard.effects[this.currentEffectIndex]}async loadPersistedDeck(){try{const e=await ja();if(e&&e.sharedDeck.length>0){if(this.state=ie(this.state,{type:"SET_DECK",cards:e.sharedDeck}),e.heroCards.length>0&&(this.state={...this.state,heroCards:e.heroCards}),e.groups&&e.groups.length>1){const t=this.state.groups;for(const n of e.groups.slice(1))t.find(i=>i.id===n.id)||t.push(n);this.state={...this.state,groups:t}}else try{const t=localStorage.getItem("miaoKaBao_customGroups");if(t){const i=JSON.parse(t).slice(1);if(i.length>0){const r=this.state.groups;for(const a of i)r.find(o=>o.id===a.id)||r.push(a);this.state={...this.state,groups:r}}}}catch(t){console.warn("[deckStorage] localStorage 恢复子卡组失败:",t)}console.log(`[deckStorage] 已从本地恢复卡包，共 ${e.sharedDeck.reduce((t,n)=>t+n.count,0)} 张`);let s=0;for(const t of this.state.groups)for(const n of t.cards)n.card.id>s&&(s=n.card.id);Ht(s),this.render();return}}catch(e){console.warn("[deckStorage] 读取失败:",e)}this.render()}async loadDeckFolder(){try{const e=await Ga();e&&(this.deckFolderHandle=e,await this.refreshDeckFolderZips(),this.deckFolderConnected=!0,console.log(`[deckStorage] 已恢复卡包文件夹，找到 ${this.deckFolderZips.length} 个 ZIP`),this.render())}catch(e){console.warn("[deckStorage] 加载卡包文件夹失败:",e)}}async refreshDeckFolderZips(){if(this.deckFolderZips=[],!!this.deckFolderHandle)try{const e=this.deckFolderHandle;if(await e.queryPermission({mode:"read"})!=="granted"&&await e.requestPermission({mode:"read"})!=="granted"){console.warn("[deckStorage] 文件夹权限被拒绝"),this.deckFolderHandle=null,this.deckFolderConnected=!1,await lt(null);return}const s=[];for await(const t of e.values())t.kind==="file"&&t.name.toLowerCase().endsWith(".zip")&&s.push({name:t.name,handle:t});s.sort((t,n)=>t.name.localeCompare(n.name)),this.deckFolderZips=s}catch(e){console.warn("[deckStorage] 读取文件夹失败:",e),this.deckFolderHandle=null,this.deckFolderConnected=!1,await lt(null)}}initClickSounds(){this.clickSoundFiles=Array.from({length:11},(s,t)=>`/sounds/bluntwood/bluntwood_${t+1}.ogg`),this.drawSoundFiles=Array.from({length:11},(s,t)=>`/sounds/snow/snow_${t+1}.ogg`),this.woodSoundFiles=Array.from({length:11},(s,t)=>`/sounds/wood/wood_walk${t+1}.ogg`);for(let s=0;s<3;s++)this.clickAudioPool.push(new Audio),this.woodAudioPool.push(new Audio),this.drawAudioPool.push(new Audio);this.app.addEventListener("click",s=>{const t=s.target;(t.tagName==="BUTTON"||t.closest("button")||t.classList.contains("btn"))&&this.playClickSound()});const e=()=>{this.bgMusic&&this.bgMusic.paused&&!this._bgmPaused&&this.musicVolume>0&&this.bgMusic.play().catch(()=>{})};document.addEventListener("click",e,{once:!0})}playClickSound(){if(this.soundVolume===0||this.clickSoundFiles.length===0)return;const e=this.clickSoundFiles[Math.floor(Math.random()*this.clickSoundFiles.length)],s=this.clickAudioPool[this.clickAudioIndex];this.clickAudioIndex=(this.clickAudioIndex+1)%this.clickAudioPool.length,s.src=e,s.currentTime=0,s.volume=this.soundVolume/100,s.play().catch(()=>{})}startBackgroundMusic(e){try{if(this.musicVolume===0)return;const s=e??this.getMenuBgmTrack();this.switchBGM(s)}catch{}}stopBackgroundMusic(){this.bgMusic&&(this.bgMusic.pause(),this.bgMusic.currentTime=0)}getMenuBgmTrack(){return Math.random()<.05?"/sounds/Music/beauteous_rain.mp3":"/sounds/Music/passing_summer.mp3"}getBattleBgmTrack(){return"/sounds/Music/indecisive.mp3"}switchBGM(e){try{if(this.musicVolume===0)return;if(this.bgMusic&&this.currentBgmTrack===e){this.bgMusic.volume=this.musicVolume/100,this.bgMusic.paused&&!this._bgmPaused&&this.bgMusic.play().catch(()=>{});return}if(this.bgMusic){try{this.bgMusic.pause()}catch{}this.bgMusic.src=""}const s=new Audio(e);s.loop=!0,s.volume=this.musicVolume/100,s.play().catch(()=>{}),this.bgMusic=s,this.currentBgmTrack=e,this.updateNowPlayingDisplay(e)}catch{}}switchBGMForScene(){if(this.musicVolume===0||this._bgmPaused)return;const e=this.state.phase,s=["playing","mulligan","gameOver","robotBattle","robotGameOver","onlineBattle","onlineGameOver"];if(s.includes(e)&&this.showMenuOptions){this.bgMusic&&!this.bgMusic.paused&&this.bgMusic.pause();return}if(s.includes(e)){const t=this.getBattleBgmTrack();this.currentBgmTrack!==t&&this.switchBGM(t)}else e==="menu"?this.currentBgmTrack==="/sounds/Music/passing_summer.mp3"||this.currentBgmTrack==="/sounds/Music/beauteous_rain.mp3"?this.bgMusic&&this.bgMusic.paused&&this.bgMusic.play().catch(()=>{}):this.switchBGM(this.getMenuBgmTrack()):this.bgMusic&&this.bgMusic.paused&&this.bgMusic.play().catch(()=>{})}createNowPlayingDisplay(){const e=document.createElement("div");e.id="now-playing-display";const s=this.currentBgmTrack?this.currentBgmTrack.split("/").pop()||this.currentBgmTrack:"　";if(e.innerHTML='<span class="npl">正在播放：</span><span class="npn"><span class="npn-inner"><span style="margin-right:24px">'+s+'</span><span style="margin-right:24px">'+s+"</span></span></span>",this.musicVolume===0&&(e.style.display="none"),document.body.appendChild(e),e.addEventListener("click",()=>{this.bgMusic&&this.musicVolume!==0&&(this._bgmPaused=!this._bgmPaused,this._bgmPaused?(this.bgMusic.pause(),e.classList.add("paused"),e.querySelector(".npl").textContent="暂停播放："):(this.bgMusic.play().catch(()=>{}),e.classList.remove("paused"),e.querySelector(".npl").textContent="正在播放："))}),!document.getElementById("np-style")){const t=document.createElement("style");t.id="np-style",t.textContent=`
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
    `,document.body.insertBefore(e,document.body.firstChild)}updateAtmosphereIntensity(e){const s=document.getElementById("game-atmosphere");if(!s)return;const t=e==="menu";s.className=t?"atmos-full":"atmos-ambient"}playDrawSound(){if(this.soundVolume===0||this.drawSoundFiles.length===0)return;const e=this.drawSoundFiles[Math.floor(Math.random()*this.drawSoundFiles.length)],s=this.drawAudioPool[this.drawAudioIndex];this.drawAudioIndex=(this.drawAudioIndex+1)%this.drawAudioPool.length,s.src=e,s.currentTime=0,s.volume=this.soundVolume/100,s.play().catch(()=>{})}playWoodSound(){if(this.soundVolume===0||this.woodSoundFiles.length===0)return;const e=this.woodSoundFiles[Math.floor(Math.random()*this.woodSoundFiles.length)],s=this.woodAudioPool[this.woodAudioIndex];this.woodAudioIndex=(this.woodAudioIndex+1)%this.woodAudioPool.length,s.src=e,s.currentTime=0,s.volume=this.soundVolume/100,s.play().catch(()=>{})}playPendingSounds(){if(this.state.soundEffects&&this.state.soundEffects.length>0){for(const e of this.state.soundEffects)e==="wood"&&this.playWoodSound();this.state={...this.state,soundEffects:[]}}}async autoSetReadyAfterDeckImport(e){const{currentRoom:s,playerId:t,playerNickname:n}=this.state.online;if(!(!s||!t)&&e){const{setPlayerReady:i,getPlayerReady:r}=await fe(async()=>{const{setPlayerReady:l,getPlayerReady:d}=await import("./online-D2Ox2vtC.js");return{setPlayerReady:l,getPlayerReady:d}},[]);if((await i(s.id,t,n,!0)).success){const l=await r(s.id);this.state=ie(this.state,{type:"UPDATE_PLAYER_READY",playerReady:l})}const o=document.querySelector('.bottom-player-area [data-own-hero="true"]');o&&o.addEventListener("mouseup",l=>{if(this.attackingMinion&&!l.target.closest(".minion-card")&&!this.isAttacking){this.hideAttackArrow();const d=this.attackingMinion;this.attackingMinion=null,this.hideDefenseOverlayDOM();const c=this.state.phase==="onlineBattle",p=c?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,m=this.state.players[p].board.find(I=>I.id===d.id);if(!m)return;const f=m.keywords.some(I=>I.name==="连击"),b=m.keywords.some(I=>I.name==="狂怒"),g=m.keywords.some(I=>I.name==="嘲讽"),y=m.keywords.some(I=>I.name==="机动"),x=m.keywords.some(I=>I.name==="不动"),k=m.maxAttacksPerTurn||1,u=(m.attacksThisTurn||0)>=k;if(m.isDefending){const I=c?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=ie(this.state,{type:"TOGGLE_DEFENSE",playerId:I,cardId:d.id}),this.render(),c){const S=this.state.online.currentRoom;S&&(fe(async()=>{const{broadcastGameAction:T}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:T}},[]).then(({broadcastGameAction:T})=>{T(S.id,{type:"STATE_SYNC",playerId:I}).catch(console.error)}),this.broadcastGameState())}return}if(!x&&!f&&!b&&!g&&(!m.hasAttacked||y)&&!u){const I=c?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=ie(this.state,{type:"TOGGLE_DEFENSE",playerId:I,cardId:d.id}),this.render(),c){const S=this.state.online.currentRoom;S&&(fe(async()=>{const{broadcastGameAction:T}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:T}},[]).then(({broadcastGameAction:T})=>{T(S.id,{type:"STATE_SYNC",playerId:I}).catch(console.error)}),this.broadcastGameState())}}}})}}computeComparisonData(){const e={},s=this.state.groups;for(const t of s)for(const n of t.cards){const i=n.card.name;e[i]||(e[i]={count:0,groups:{}}),e[i].count+=n.count,e[i].groups[t.name]=(e[i].groups[t.name]||0)+n.count}return e}async autoSyncLocalDeckIfNeeded(){const{currentRoom:e,playerId:s,localDeckImport:t}=this.state.online;if(!e||!s||this.state.sharedDeck.length===0)return;const n=this.state.sharedDeck.reduce((r,a)=>r+a.count,0);if(!t||t.cardCount!==n){this.state=ie(this.state,{type:"UPDATE_LOCAL_DECK_IMPORT",filename:"本地卡包",cardCount:n,entries:this.state.sharedDeck});try{const r=this.computeComparisonData(),{sendMessage:a}=await fe(async()=>{const{sendMessage:o}=await import("./online-D2Ox2vtC.js");return{sendMessage:o}},[]);await a(e.id,s,"__SYSTEM__",`__DECK_DATA__|${n}|${JSON.stringify(r)}`),await a(e.id,s,"__SYSTEM__",`__DECK_IMPORT__|本地卡包|${n}`)}catch(r){console.error("[autoSyncLocalDeck] 同步失败:",r)}}}parseDeckDataMessage(e){const s=e.split("|");if(s.length<3)return null;const t=parseInt(s[1],10);try{const n=JSON.parse(s.slice(2).join("|"));return{cardCount:t,comparisonData:n}}catch{return null}}renderDeckPreview(){const e=this.state.groups;let s=0;const t=e.map(i=>{const r=[...i.cards].sort((o,l)=>{const d=c=>`${c.type==="hero"?"0":c.type==="minion"?"1":"2"}_${c.name}`;return d(o.card).localeCompare(d(l.card))}),a=r.reduce((o,l)=>o+l.count,0);return s+=a,{group:i,sortedCards:r,groupCount:a}});new Set(e.map(i=>i.id));const n=document.createElement("div");n.className="fixed inset-0 z-50 overflow-y-auto",n.style.cssText="background: rgba(0,0,0,0.6); padding: 20px;",n.id="deck-preview-overlay",n.innerHTML=`
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

        ${t.map(({group:i,sortedCards:r,groupCount:a},o)=>`
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
              ${r.length===0?'<div class="text-sm italic" style="color: #b0a090;">（空）</div>':""}
              ${r.map(l=>{const d=l.card,c=l.count,p=d.type==="hero";return`
                <div class="card-item-wrapper" style="display: flex; flex-direction: column; width: ${p?"225px":"150px"};">
                  <div class="card-item main-card-item w-full rounded-xl ${p?"aspect-[4/3]":"aspect-[2/3]"} shadow-md"
                    style="${this.getCardBgInline(d)} border: 3px solid #d4c4a8; box-shadow: 0 4px 12px rgba(0,0,0,0.15); position: relative;"
                    title="${d.name}">
                    ${p?"":`<div class="card-cost-badge">${d.cost}</div>`}
                    ${p?"":`<div class="card-count-badge">x${c}</div>`}
                    <div class="absolute left-1 right-1 text-center truncate font-bold"
                      style="top: 4px; color: white; font-size: 14px; z-index: 5; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 1px black;">
                      ${d.name}
                    </div>
                    ${p&&d.skills&&d.skills.length>0?`
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
                    ${!p&&(d.keywords.length>0||this.getCardFullEffectText(d))?`
                      <div class="card-description-wrapper">
                        ${d.keywords.length>0?`
                          <div class="card-keywords-area">
                            ${d.keywords.map(h=>{const m=h.name==="护甲"?h.value??d.armorValue??1:"";return'<span class="card-keyword-tag">'+h.name+m+"</span>"}).join("")}
                          </div>
                        `:""}
                        ${this.getCardFullEffectText(d)?`
                          <div class="card-effect-area">${this.getCardFullEffectText(d)}</div>
                        `:""}
                      </div>
                    `:""}
                    ${!p&&d.type!=="spell"?`<div class="card-attack-badge">${d.attack}</div>`:""}
                    ${!p&&d.type!=="spell"?`<div class="card-health-badge">${d.health}</div>`:""}
                  </div>
                </div>
                `}).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `,document.body.appendChild(n),document.getElementById("close-preview-btn")?.addEventListener("click",()=>{n.remove()}),n.addEventListener("click",i=>{i.target===n&&n.remove()}),n.querySelectorAll(".preview-collapse-btn").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.groupId||"",a=n.querySelector(`.preview-cards-grid[data-group-id="${r}"]`);if(!a)return;const o=a.style.display==="none";a.style.display=o?"":"none",i.textContent=o?"▼":"▶"})}),document.querySelectorAll('.condition-side-check[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("change",r=>{r.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex],d=i.dataset.side;if(l.conditionSides||(l.conditionSides=["friendly"]),i.checked)l.conditionSides.includes(d)||l.conditionSides.push(d);else if(l.conditionSides.length>1)l.conditionSides=l.conditionSides.filter(p=>p!==d);else{l.conditionSides=["friendly"],i.checked=!0;return}this.render()})}),document.querySelectorAll('.condition-logic-radio[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("change",r=>{r.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex];l.conditionSideLogic=i.value,this.render()})}),document.querySelectorAll('.condition-op-btn[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex],d=i.dataset.op,c=l.conditionOperator||"=",p=c==="<"||c==="<=",h=c===">"||c===">=",m=c==="="||c==="<="||c===">=";let f=p,b=h,g=m;d==="<"?(b=!1,f=!p):d===">"?(f=!1,b=!h):d==="="&&(g=!m),f&&g?l.conditionOperator="<=":b&&g?l.conditionOperator=">=":f?l.conditionOperator="<":b?l.conditionOperator=">":l.conditionOperator="=",this.render()})}),document.querySelectorAll('.condition-value-input[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("input",r=>{r.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex];l.conditionValue=Math.max(0,parseInt(r.target.value)||0)})}),document.querySelectorAll('.condition-minion-name-input[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("input",r=>{r.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex];l.conditionMinionName=r.target.value,this.render()})}),document.querySelectorAll('.condition-target-attr-check[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("change",r=>{r.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex],d=i.dataset.attr;l.conditionTargetAttrs||(l.conditionTargetAttrs={cost:{enabled:!0,operator:"=",value:0},attack:{enabled:!0,operator:"=",value:0},health:{enabled:!0,operator:"=",value:0}});const c=l.conditionTargetAttrs;c[d].enabled=r.target.checked,this.render()})}),document.querySelectorAll('.condition-target-op-btn[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("click",r=>{r.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex],d=i.dataset.attr,c=i.dataset.op;l.conditionTargetAttrs||(l.conditionTargetAttrs={cost:{enabled:!0,operator:"=",value:0},attack:{enabled:!0,operator:"=",value:0},health:{enabled:!0,operator:"=",value:0}});const p=l.conditionTargetAttrs,h=p[d].operator||"=",m=h==="<"||h==="<=",f=h===">"||h===">=",b=h==="="||h==="<="||h===">=";let g=m,y=f,x=b;c==="<"?(y=!1,g=!m):c===">"?(g=!1,y=!f):c==="="&&(x=!b),g&&x?p[d].operator="<=":y&&x?p[d].operator=">=":g?p[d].operator="<":y?p[d].operator=">":p[d].operator="=",this.render()})}),document.querySelectorAll('.condition-target-attr-input[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("input",r=>{r.stopPropagation();const a=this.heroEditingSkillIndex;if(typeof a!="number"||a<0)return;const o=this.heroSkills[a];if(!o?.effects?.[this.heroEditingSkillEffectIndex])return;const l=o.effects[this.heroEditingSkillEffectIndex],d=i.dataset.attr;l.conditionTargetAttrs||(l.conditionTargetAttrs={cost:{enabled:!0,operator:"=",value:0},attack:{enabled:!0,operator:"=",value:0},health:{enabled:!0,operator:"=",value:0}});const c=l.conditionTargetAttrs;c[d].value=Math.max(0,parseInt(r.target.value)||0),this.render()})})}compareDecks(e,s,t,n){const i=new Set([...Object.keys(e),...Object.keys(s)]),r=[];for(const a of i){const o=e[a],l=s[a];if(!o)r.push(`${a} ${t}❌️ ${n}✔️`);else if(!l)r.push(`${a} ${t}✔️ ${n}❌️`);else if(o.count!==l.count)r.push(`${a} ${t}：${o.count}张 ${n}：${l.count}张❌️`);else{const d=JSON.stringify(o.groups),c=JSON.stringify(l.groups);if(d!==c){const p=new Set([...Object.keys(o.groups),...Object.keys(l.groups)]),h=[];for(const m of p){const f=o.groups[m]||0,b=l.groups[m]||0;f!==b&&h.push(`${m}:${t}${f}张/${n}${b}张`)}r.push(`${a} ${t}：${o.count}张 ${n}：${l.count}张 (卡组分布不一致:${h.join(";")})❌️`)}}}return r}render(){this.playPendingSounds();const e=this.state.phase;e!==this.lastPhase&&e==="cardManager"&&(this.lastDeckVersion=0,this.sortedCardList=[],(this.lastPhase==="menu"||this.lastPhase===""||this.lastPhase==="setup")&&(this.collapsedGroups=new Set(this.state.groups.map(l=>l.id)))),this.lastPhase==="cardManager"&&e!=="cardManager"&&(this.savedCardManagerScrollY=window.scrollY);const s=["room","mulligan","onlineBattle","onlineGameOver"],t=s.includes(this.lastPhase),n=s.includes(e);if(t&&!n&&this.unsubscribeFromRoom(),this.lastPhase,this.lastPhase=e,["menu","playing","mulligan","robotBattle","onlineBattle"].includes(this.state.phase)?(window.scrollTo(0,0),document.body.style.setProperty("overflow","hidden","important")):document.body.style.overflow="",this.switchBGMForScene(),this.updateAtmosphereIntensity(this.state.phase),this.state.phase==="menu")this.renderMenu();else if(this.state.phase==="setup")this.renderSetup();else if(this.state.phase==="robotSetup")this.renderSetup();else if(this.state.phase==="playing")this.renderGame(),this.state.newlyDrawnCardIds.length>0&&setTimeout(()=>this.playDrawCardAnimation(300),100),this.processPendingVisualEffects();else if(this.state.phase==="mulligan"){const l=this.state.online?.playerId&&this.state.online?.firstPlayerId;if(console.log("[render] mulligan phase",{isOnline:l,playerId:this.state.online?.playerId,firstPlayerId:this.state.online?.firstPlayerId,currentPlayerId:this.state.currentPlayerId}),l){this.renderOnlineBattle();const{playerId:d,firstPlayerId:c}=this.state.online,p=d===c;p&&this.state.mulliganDone<1||!p&&this.state.mulliganDone<2?this.renderMulliganOverlay():this.app.innerHTML+='<div id="mulligan-waiting" class="absolute inset-0 flex items-center justify-center bg-black/70 z-50"><div class="text-white text-2xl font-bold bg-gray-900/80 px-8 py-6 rounded-xl shadow-xl">等待对手换牌...</div></div>',this.processPendingVisualEffects()}else this.renderGame(),this.renderMulliganOverlay(),this.processPendingVisualEffects()}else if(this.state.phase==="gameOver")this.renderGame(),this.renderGameOver();else if(this.state.phase==="robotBattle"){if(this.renderGame(),this.state.currentPlayerId===2&&!this.robotTurnExecuting?setTimeout(()=>this.executeRobotTurn(),1500):this.state.currentPlayerId===1&&this.state.newlyDrawnCardIds.length>0&&setTimeout(()=>this.playDrawCardAnimation(300),100),this.processPendingVisualEffects(),this.state.currentPlayerId===1){this.robotCheckPlayerTurnReaction();const l=this.state.players[0],d=`${this.state.turnNumber}|${l.hand.length}|${l.board.length}|${l.energy}`;d!==this.speechLastActionSignature?(this.speechLastActionSignature=d,this.lastPlayerActionTimestamp=Date.now(),this.playerIdleTaunted=!1):!this.playerIdleTaunted&&Date.now()-this.lastPlayerActionTimestamp>1e4&&(this.robotSpeak("taunt",1),this.playerIdleTaunted=!0)}}else this.state.phase==="robotGameOver"?(this.renderGame(),this.renderRobotGameOver()):this.state.phase==="cardCreator"?this.renderCardCreator():this.state.phase==="heroEditor"?this.renderHeroEditor():this.state.phase==="cardManager"?this.renderCardManager():this.state.phase==="lobby"?this.renderLobby():this.state.phase==="room"?this.renderRoom():this.state.phase==="onlineBattle"?(console.log("[render] 路由到 renderOnlineBattle, isWaitingForGameState=",this.state.online.isWaitingForGameState),this.state.online.isWaitingForGameState?this.renderWaitingForGameState():this.renderOnlineBattle(),!this.state.online.isWaitingForGameState&&this.state.newlyDrawnCardIds.length>0&&setTimeout(()=>this.playDrawCardAnimation(300),100),this.processPendingVisualEffects()):this.state.phase==="onlineGameOver"&&(this.renderOnlineBattle(),this.renderOnlineGameOver());const r=this.state.phase==="menu"?`menu|${this.menuSubScreen}`:this.state.phase,o={mulligan:["playing","onlineBattle"],playing:["gameOver"],onlineBattle:["onlineGameOver"],robotBattle:["robotGameOver"]}[this._lastAnimatedRenderKey]?.includes(r);if(r!==this._lastAnimatedRenderKey){if(this._lastAnimatedRenderKey=r,this._suppressFirstRender)this._suppressFirstRender=!1;else if(!o){const l=Array.from(this.app.children);if(l.length>0){this.app.classList.add("page-enter-animating"),l.forEach(p=>p.classList.remove("page-enter")),this.app.firstElementChild?.offsetWidth,l.forEach(p=>p.classList.add("page-enter"));const d=l[l.length-1],c=()=>{this.app.classList.remove("page-enter-animating"),d.removeEventListener("animationend",c)};d.addEventListener("animationend",c)}}}}renderMenu(){if(this.menuSubScreen==="modeSelect"){this.renderModeSelect();return}if(this.menuSubScreen==="onlineLogin"){this.renderOnlineLogin();return}const e=this.savedGameState!==null;this.app.innerHTML=`
      
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
          <div class="text-center p-12 rounded-3xl shadow-2xl" style="background: rgba(255, 255, 255, 0.97); border: 8px solid #d4c4a8;">
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
    `,document.getElementById("continue-saved-btn")?.addEventListener("click",()=>{this.savedGameState&&(this.state=this.savedGameState,this.savedGameState=null,this.render())}),document.getElementById("start-btn")?.addEventListener("click",()=>{this.menuSubScreen="modeSelect",this.render()}),document.getElementById("card-creator-btn")?.addEventListener("click",()=>{this.state=ie(this.state,{type:"SHOW_CARD_CREATOR"}),this.render()}),document.getElementById("card-manager-btn")?.addEventListener("click",()=>{this.state=ie(this.state,{type:"SHOW_CARD_MANAGER"}),this.render()}),document.getElementById("menu-options-btn")?.addEventListener("click",()=>{this.showMenuOptions=!0,this.render()}),document.getElementById("back-to-menu-btn")?.addEventListener("click",()=>{this.showMenuOptions=!1,this.render()}),document.getElementById("sound-volume")?.addEventListener("input",s=>{this.soundVolume=parseInt(s.target.value),localStorage.setItem("soundVolume",String(this.soundVolume));const t=document.getElementById("sound-volume-label");t&&(t.textContent=this.soundVolume+"%")}),document.getElementById("music-volume")?.addEventListener("input",s=>{const t=this.musicVolume;this.musicVolume=parseInt(s.target.value),localStorage.setItem("musicVolume",String(this.musicVolume));const n=document.getElementById("music-volume-label");n&&(n.textContent=this.musicVolume+"%");const i=document.getElementById("now-playing-display");i&&(i.style.display=this.musicVolume===0?"none":""),this.musicVolume>0?t===0?this.startBackgroundMusic():this.bgMusic&&(this.bgMusic.volume=this.musicVolume/100):this.stopBackgroundMusic()}),document.getElementById("menu-options-overlay")?.addEventListener("click",s=>{s.target.id==="menu-options-overlay"&&(this.showMenuOptions=!1,this.render())})}renderModeSelect(){this.app.innerHTML=`
      <div class="min-h-screen flex items-center justify-center" style="background: transparent;">
        <div class="text-center p-12 rounded-3xl shadow-2xl" style="background: rgba(255, 255, 255, 0.95); border: 8px solid #d4c4a8; ${this.isPortraitMode?"transform: scale(0.8); transform-origin: center center;":""}">
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
    `,document.getElementById("local-play-btn")?.addEventListener("click",()=>{this.state=ie(this.state,{type:"SHOW_SETUP"}),this.render()}),document.getElementById("robot-play-btn")?.addEventListener("click",()=>{this.state=ie(this.state,{type:"SHOW_ROBOT_SETUP"}),this.render()}),document.getElementById("online-play-btn")?.addEventListener("click",async()=>{this.menuSubScreen="onlineLogin";try{const{isSupabaseConfigured:e,getSupabaseConfigError:s}=await fe(async()=>{const{isSupabaseConfigured:t,getSupabaseConfigError:n}=await import("./online-D2Ox2vtC.js");return{isSupabaseConfigured:t,getSupabaseConfigError:n}},[]);e()?this.onlineLoginError=null:this.onlineLoginError=s()||"联机功能暂不可用"}catch(e){console.error("检查配置失败:",e),this.onlineLoginError="联机功能暂不可用"}this.render()}),document.getElementById("back-btn")?.addEventListener("click",()=>{this.menuSubScreen="",this.render()})}renderOnlineLogin(){if(this.onlineLoginError){this.app.innerHTML=`
        <div class="min-h-screen flex items-center justify-center" style="background: transparent;">
          <div class="text-center p-12 rounded-3xl shadow-2xl" style="background: rgba(255, 255, 255, 0.95); border: 8px solid #d4c4a8; ${this.isPortraitMode?"transform: scale(0.8); transform-origin: center center;":""}">
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
        <div class="text-center p-12 rounded-3xl shadow-2xl" style="background: rgba(255, 255, 255, 0.95); border: 8px solid #d4c4a8;">
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
    `,document.getElementById("back-to-menu-btn")?.addEventListener("click",()=>{this.menuSubScreen="",this.render()}),document.getElementById("enter-lobby-btn")?.addEventListener("click",async()=>{const s=document.getElementById("online-nickname").value.trim();if(!s){alert("请输入昵称");return}localStorage.setItem("miaoKaBao_nickname",s);const t=`player_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;this.state=ie(this.state,{type:"SHOW_LOBBY",playerId:t,playerNickname:s}),this.render()})}renderLobby(){const{playerId:e,playerNickname:s}=this.state.online;this.app.innerHTML=`
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
    `,this.loadRooms(),document.getElementById("leave-lobby-btn")?.addEventListener("click",()=>{this.state=ie(this.state,{type:"BACK_TO_MENU"}),this.render()}),document.getElementById("refresh-rooms-btn")?.addEventListener("click",()=>{this.loadRooms()}),document.getElementById("create-room-btn")?.addEventListener("click",async t=>{const n=t.target;if(n.disabled)return;const r=document.getElementById("room-name").value.trim()||s,a=document.getElementById("room-password").value.trim()||null;n.disabled=!0,n.textContent="创建中...";try{const{createRoom:o}=await fe(async()=>{const{createRoom:d}=await import("./online-D2Ox2vtC.js");return{createRoom:d}},[]),l=await o(r,a,e,s);l.success&&l.room?(this.state=ie(this.state,{type:"SHOW_ROOM",room:l.room,playerId:e,playerNickname:s}),this.render()):(alert(`创建房间失败: ${l.error||"未知错误"}，请重试`),n.disabled=!1,n.textContent="创建房间")}catch(o){console.error("创建房间失败:",o),alert("创建房间失败，请检查网络连接"),n.disabled=!1,n.textContent="创建房间"}})}async loadRooms(){try{const{getRooms:e}=await fe(async()=>{const{getRooms:n}=await import("./online-D2Ox2vtC.js");return{getRooms:n}},[]),s=await e(),t=document.getElementById("rooms-list");if(!t)return;if(s.length===0){t.innerHTML=`
          <div class="text-center py-8" style="color: #a08060;">
            暂无可加入的房间，创建一个吧！
          </div>
        `;return}t.innerHTML=s.map(n=>`
        <div class="flex items-center justify-between p-4 rounded-xl transition-all hover:shadow-lg"
          style="background: rgba(212, 196, 168, 0.2); border: 2px solid #d4c4a8;">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold"
              style="background: linear-gradient(135deg, #d4a574 0%, #c4956a 100%); color: #fff;">
              ${n.room_name.charAt(0)}
            </div>
            <div>
              <div class="font-bold" style="color: #5a4a3a;">${n.room_name}</div>
              <div class="text-sm" style="color: #8b7355;">
                房主: ${n.host_nickname} ${n.password?"🔒 有密码":""}
              </div>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <span class="px-3 py-1 rounded-lg text-sm font-bold"
              style="background: ${(n.player_count||0)>=2?"rgba(224, 112, 112, 0.3)":"rgba(124, 184, 124, 0.3)"}; color: ${(n.player_count||0)>=2?"#c05050":"#5a9a5a"};">
              ${n.player_count||0}/2
            </span>
            <button class="join-room-btn px-4 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
              data-room-id="${n.id}"
              data-has-password="${n.password?"true":"false"}"
              ${(n.player_count||0)>=2?'disabled style="background: #ccc; color: #888; border: 2px solid #aaa; cursor: not-allowed;"':'style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 3px solid #4a8a4a;"'}>
              ${(n.player_count||0)>=2?"已满":"加入"}
            </button>
          </div>
        </div>
      `).join(""),document.querySelectorAll(".join-room-btn:not([disabled])").forEach(n=>{n.addEventListener("click",async()=>{const i=parseInt(n.getAttribute("data-room-id")||"0");n.getAttribute("data-has-password")==="true"?this.showPasswordDialog(i):await this.joinRoom(i)})})}catch(e){console.error("加载房间列表失败:",e);const s=document.getElementById("rooms-list");s&&(s.innerHTML=`
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
    `,document.body.appendChild(s),document.getElementById("cancel-password-btn")?.addEventListener("click",()=>{s.remove()}),document.getElementById("confirm-password-btn")?.addEventListener("click",async()=>{const t=document.getElementById("room-password-input").value;s.remove(),await this.joinRoom(e,t)})}async joinRoom(e,s){const{playerId:t,playerNickname:n}=this.state.online;try{const{joinRoom:i}=await fe(async()=>{const{joinRoom:a}=await import("./online-D2Ox2vtC.js");return{joinRoom:a}},[]),r=await i(e,t,n,s);r.success&&r.room?(this.state=ie(this.state,{type:"SHOW_ROOM",room:r.room,playerId:t,playerNickname:n}),this.render()):alert(r.error||"加入房间失败")}catch(i){console.error("加入房间失败:",i),alert("加入房间失败，请检查网络连接")}}renderRoom(){const{playerId:e,playerNickname:s,currentRoom:t,messages:n,playerReady:i}=this.state.online;if(!t){this.state=ie(this.state,{type:"SHOW_LOBBY",playerId:e,playerNickname:s}),this.render();return}const r=t.host_id===e,a=i.find(D=>D.player_id===e),o=i.filter(D=>D.is_ready).length,l=o>=2,d=r&&l,c=this.state.online.localDeckImport;console.log("[DEBUG] renderRoom myImport:",c,"phase:",this.state.phase);const h=Object.values(this.state.online.remoteDeckImports)[0],m=!!c&&!!h&&c.filename===h.filename&&c.cardCount===h.cardCount;a?.is_ready;const f=i[0],b=i[1];this.app.innerHTML=`
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
              <span class="text-xs" style="color: #8b7355;">${r?"(房主)":"(访客)"}</span>
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
                  <div class="p-4 rounded-xl flex items-center gap-3 ${f?"":"opacity-50"}"
                    style="background: ${f?.player_id===e?"rgba(111, 168, 220, 0.2)":"rgba(212, 196, 168, 0.2)"}; border: 3px solid ${f?.player_id===e?"#6fa8dc":"#d4c4a8"};">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl hero-select-trigger"
                      data-player-id="${f?.player_id||""}"
                      style="background: linear-gradient(135deg, #d4a574 0%, #c4956a 100%); color: #fff; border: 2px solid #b8956a; ${this.state.online.heroSelections[f?.player_id||""]?"background: none; border: 2px solid #b8956a; overflow: hidden; padding: 0;":""}">
                      ${this.state.online.heroSelections[f?.player_id||""]?`<img src="${this.state.online.heroSelections[f?.player_id||""]?.imageData||""}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`:f?f.player_nickname.charAt(0):"?"}
                    </div>
                    <div class="flex-1">
                      <div class="font-bold text-lg" style="color: #5a4a3a;">${f?.player_nickname||"等待中..."}</div>
                      <div class="text-sm" style="color: ${f?.is_ready?"#7cb87c":"#d4a574"};">${f?.is_ready?"✓ 已准备":"⏳ 等候中"}</div>
                    </div>
                    ${f?.player_id===t.host_id?'<span class="text-lg">👑</span>':""}
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
                    ${i.map(D=>{const O=D.player_id===e,P=O?c:this.state.online.remoteDeckImports[D.player_id],B=O?c?c.cardCount:this.state.sharedDeck.reduce(($,N)=>$+N.count,0):P?P.cardCount:0;return`<div class="flex justify-between">
                        <span style="color: #5a4a3a;">${D.player_nickname}:</span>
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

                  ${r?`
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
                  ${n.filter(D=>D.sender_nickname!=="__SYSTEM__").length===0?`
                    <div class="text-center py-8" style="color: #a08060;">
                      暂无消息，发送第一条消息吧！
                    </div>
                  `:n.filter(D=>D.sender_nickname!=="__SYSTEM__").map(D=>`
                    <div class="p-2 rounded-lg ${D.sender_id===e?"ml-8":"mr-8"}"
                      style="background: ${D.sender_id===e?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"};">
                      <div class="text-xs font-bold mb-1" style="color: ${D.sender_id===e?"#4a90d9":"#8b7355"};">
                        ${D.sender_nickname}
                      </div>
                      <div style="color: #5a4a3a;">${D.message}</div>
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

    `,this.loadRoomData();const g=document.getElementById("leave-room-btn");g&&(g.onclick=async()=>{try{await this.unsubscribeFromRoom();const{leaveRoom:D}=await fe(async()=>{const{leaveRoom:O}=await import("./online-D2Ox2vtC.js");return{leaveRoom:O}},[]);await D(t.id,e),this.state=ie(this.state,{type:"LEAVE_ROOM"}),this.render()}catch(D){console.error("离开房间失败:",D),this.state=ie(this.state,{type:"LEAVE_ROOM"}),this.render()}}),document.querySelectorAll(".hero-select-trigger").forEach(D=>{D.onclick=O=>{console.debug("[HeroSelect] 头像被点击, data-player-id:",D.getAttribute("data-player-id"));const P=D.getAttribute("data-player-id");if(!P){console.debug("[HeroSelect] 无 playerId，跳过");return}const B=document.getElementById("online-hero-modal");if(!B){console.debug("[HeroSelect] 未找到 online-hero-modal 弹窗");return}console.debug("[HeroSelect] 弹窗元素存在，继续",B);let $=[];try{const ne=(window.__gameState||this.state).groups||[{id:Me,name:"公用卡组",cards:[]}];for(const Z of ne)for(const re of Z.cards)re.card.type==="hero"&&$.push(re.card)}catch(U){console.error("获取英雄列表失败:",U);return}if($.length===0)return;const N=document.getElementById("online-hero-select-list"),J=document.getElementById("online-hero-empty");N&&(N.innerHTML="",J.classList.add("hidden"),N.innerHTML=$.map(U=>`
          <div class="cursor-pointer rounded-xl p-2 transition-all transform hover:scale-105 online-hero-option" data-hero-card='${JSON.stringify(U).replace(/'/g,"&#39;")}' style="background: #f5f0e8; border: 2px solid transparent;">
            <div class="w-full rounded-lg overflow-hidden mb-1" style="aspect-ratio: 4/3;">
              ${U.imageData?`<img src="${U.imageData}" class="w-full h-full object-cover">`:'<div class="w-full h-full flex items-center justify-center" style="background: #e8dfd0;"><span style="font-size: 2rem;">🦸</span></div>'}
            </div>
            <div class="text-xs font-bold text-center truncate" style="color: #5a4a3a;">${U.name}</div>
          </div>
        `).join(""),B.classList.remove("hidden"),N.querySelectorAll(".online-hero-option").forEach(U=>{U.addEventListener("click",()=>{try{const ne=JSON.parse(U.getAttribute("data-hero-card")||"{}");this.state=ie(this.state,{type:"SET_ONLINE_HERO",playerId:P,heroCard:ne}),this.render(),this.state.online?.currentRoom&&fe(async()=>{const{sendMessage:Z}=await import("./online-D2Ox2vtC.js");return{sendMessage:Z}},[]).then(({sendMessage:Z})=>{Z(this.state.online.currentRoom.id,this.state.online.playerId,"__SYSTEM__",`__HERO_SELECT__|${JSON.stringify({playerId:P,heroCard:ne})}`)})}catch(ne){console.error("选择英雄失败:",ne)}B.classList.add("hidden")})}))}});const y=document.getElementById("close-online-hero-select");y&&(y.onclick=()=>{const D=document.getElementById("online-hero-modal");D&&D.classList.add("hidden")});const x=document.getElementById("online-hero-modal");x&&x.addEventListener("click",D=>{D.target===x&&x.classList.add("hidden")});const k=document.getElementById("start-game-btn");k&&(k.onclick=async()=>{if(!d)return;const D=this.state.online.remoteDeckImports,O=Object.keys(D).find(U=>U!==e),P=O?D[O]:null,B=this.computeComparisonData();if(!P||!P.comparisonData){alert("尚未收到对方的卡包信息，请稍后重试");return}const $=s,N=P.playerNickname,J=this.compareDecks(B,P.comparisonData,$,N);if(J.length>0){try{const{sendMessage:U}=await fe(async()=>{const{sendMessage:ne}=await import("./online-D2Ox2vtC.js");return{sendMessage:ne}},[]);await U(t.id,e,"__SYSTEM__","⚠️ 卡包信息不一致！");for(const ne of J)await U(t.id,e,"__SYSTEM__",ne);typeof this.loadMessages=="function"&&this.loadMessages()}catch(U){console.error("发送卡包差异消息失败:",U)}return}try{const{startGame:U}=await fe(async()=>{const{startGame:Z}=await import("./online-D2Ox2vtC.js");return{startGame:Z}},[]);await U(t.id)?await this.enterOnlineBattle():alert("开始游戏失败")}catch(U){console.error("开始游戏失败:",U),alert("开始游戏失败")}});const u=document.getElementById("preview-deck-btn");u&&(u.onclick=()=>{this.renderDeckPreview()});const w=document.getElementById("ready-toggle-btn");w&&(w.onclick=async()=>{try{const{setPlayerReady:D,getPlayerReady:O}=await fe(async()=>{const{setPlayerReady:$,getPlayerReady:N}=await import("./online-D2Ox2vtC.js");return{setPlayerReady:$,getPlayerReady:N}},[]),P=!a?.is_ready,B=await D(t.id,e,s,P);if(B.success){const $=await O(t.id);this.state=ie(this.state,{type:"UPDATE_PLAYER_READY",playerReady:$}),this.render()}else alert(B.error||"操作失败")}catch(D){console.error("准备状态切换失败:",D)}});const I=async()=>{const D=document.getElementById("message-input"),O=D.value.trim();if(O)try{const{sendMessage:P}=await fe(async()=>{const{sendMessage:B}=await import("./online-D2Ox2vtC.js");return{sendMessage:B}},[]);await P(t.id,e,s,O),D.value="",await this.loadMessages()}catch(P){console.error("发送消息失败:",P)}},S=document.getElementById("send-message-btn");S&&(S.onclick=I);const T=document.getElementById("message-input");T&&(T.onkeypress=D=>{D.key==="Enter"&&I()}),setTimeout(()=>{this.autoSyncLocalDeckIfNeeded().catch(D=>console.error("[renderRoom] autoSync失败:",D))},500)}renderOnlineBattle(){const{currentPlayerId:e,turnNumber:s,players:t,online:n,sharedDeck:i}=this.state,{isSpectator:r,spectatorViewPlayerId:a,battlePlayers:o,playerId:l,firstPlayerId:d}=n;typeof window<"u"&&(this.isPortraitMode=window.innerWidth/window.innerHeight<3/4),console.log("【renderOnlineBattle】关键状态:",{playerId:l,firstPlayerId:d,currentPlayerId:e,turnNumber:s,battlePlayers:o.map(S=>({id:S.playerId,name:S.playerNickname})),isSpectator:r,phase:this.state.phase,hasSubscription:!!this.roomSubscription});let c;r?c=a||d:c=l;const p=c===d,h=p?0:1;console.log("【renderOnlineBattle】视角计算:",{viewPlayerId:c,firstPlayerId:d,isFirstPlayer:p,viewPlayerIndex:h}),this.onlineViewPlayerIndex=h;const m=t[h],f=t[1-h],b=p?o.find(S=>S.playerId!==d)?.playerId||"":d,g=r?e===1?d===a:d!==a:e===1?l===d:l!==d,y=!r&&g;console.log("renderOnlineBattle: playerId=",l,"firstPlayerId=",d,"currentPlayerId=",e,"isMyTurn=",g,"canAct=",y);const x=f.board.some(S=>S.isDefending||S.keywords.some(T=>T.name==="嘲讽")),w=m.board.filter(S=>S.canAttack&&!S.hasAttacked&&S.attack>0).length>0&&!x&&y,I=this.isPortraitMode?"compact-mode":"";this.app.innerHTML=`
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
              
              ${r?"":`
                <button id="surrender-btn" class="px-8 py-3 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                  style="background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: 3px solid #a04040;">
                  🏳️ 认输
                </button>
              `}
            </div>
          </div>
        </div>
      `:""}
      
      <div class="game-container ${I}" id="game-container" style="min-height: 100vh; background: transparent; display: flex; flex-direction: column;">
        
        <!-- 上方玩家区域（对手） -->
        <div class="top-player-area p-1" style="flex-shrink: 0;">
          <div class="relative mb-1" style="min-height: 110px;">
            ${this.renderHeroSkills(f,!0)}
            <!-- 4:3纸材质英雄模块（居中） -->
            <div class="mx-auto relative ${r?"cursor-pointer hover:scale-105 transition-all":""}" data-player-hero="${f.id}"
              style="width: 140px; height: 105px; ${this.renderHeroBackground(f.heroCard)} border: 4px solid #d4c4a8; border-radius: 8px;${f.elementStatus?"padding: 7px; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[f.elementStatus.type]||"transparent")+";":""}"
              ${r?`data-switch-view="${b}"`:""}>
              ${f.heroCard?.imageData?"":'<div class="w-full h-full flex items-center justify-center"><span class="font-bold text-lg" style="color: #5a4a3a;">英雄</span></div>'}
              ${f.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:8px;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
              <!-- 血量（底部居中，一半出框） -->
              <div class="absolute flex items-center justify-center font-bold text-white text-sm shadow-md"
                style="bottom: -10px; left: 50%; transform: translateX(-50%); width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #c0392b 0%, #a93226 100%); border: 3px solid #8b0000; z-index: 10;"
                data-player-hp="${f.id}">
                ${f.health}
              </div>
              ${f.heroMarkCount&&f.heroMarkCount>0?`
                <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md"
                  style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                  ${f.heroMarkCount}
                </div>
              `:""}
            </div>
            <!-- 昵称和能量（绝对定位在英雄模块右侧） -->
            <div class="absolute flex flex-col items-start" style="left: calc(50% + 78px); top: 15px;">
              <div class="font-bold text-lg" style="color: #fff; text-shadow: 0 0 8px rgba(0,0,0,0.6), 0 0 16px rgba(0,0,0,0.3);">${f.name}</div>
              <div class="flex items-center gap-1">
                ${this.renderHeroName(f.heroCard)}
                <span class="text-xs mt-0.5" style="color: rgba(255,255,255,0.85); text-shadow: 0 0 6px rgba(0,0,0,0.6);">手牌数：${f.hand.length}</span>
              </div>
              ${this.renderEnergy(f.maxEnergy,f.energy,f.bonusEnergy||0)}
              ${r?'<span class="text-xs text-blue-500">👁️ 点击切换视角</span>':""}
            </div>
          </div>
          
          <!-- 对手战场 -->
          <div class="top-board flex justify-center gap-2 min-h-20 p-2 rounded-xl mx-4" id="opponent-play-area" style="background: rgba(255, 255, 255, 0.6); border: 3px solid #d4c4a8;">
            ${f.board.map(S=>{const T=f.board.some(N=>N.isDefending||N.keywords.some(J=>J.name==="嘲讽")),D=S.isDefending||S.keywords.some(N=>N.name==="嘲讽"),O=T&&!D?"non-taunt-target":"",P=this.selectedAttackingMinion!==null&&y,B=(this.selectingTargetForCard!==null||this.selectingTargetForSkill!==null)&&y,$=this.getEffectIcons(S.effects);return S.elementStatus&&console.log("[元素边框-对手战场] 随从:",S.name,"元素类型:",S.elementStatus.type,"style中将包含box-shadow"),`
                <div class="minion-card group relative rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all ${S.isDefending?"is-defending":""} ${S.keywords.some(N=>N.name==="嘲讽")?"taunt-minion":""} ${O} ${D&&P?"taunt-target":""} ${P||B?"attack-target":""}${S.elementStatus?" element-status-"+S.elementStatus.type:""}"
                  style="${this.getCardBgInline(S,"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)")} border: 4px solid ${B?"#4a90d9":D?"#6b7db3":"#c4b49c"};${S.elementStatus?"padding: 7px; background-clip: padding-box; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[S.elementStatus.type]||"transparent")+";":""}"
                  data-minion-id="${S.id}" data-player-id="${f.id}" data-has-effects="${S.effects&&S.effects.length>0?"true":"false"}">
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
            data-player-id="${f.id}">
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
            data-player-id="${m.id}" data-deck-count="${m.deck.length}">
            <div class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-xs font-bold pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50"
              style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; background: rgba(0,0,0,0.7);">
              抽牌堆：${m.deck.length}张牌
            </div>
          </div>
        </div>
        
        <!-- 下方玩家区域（自己） -->
        <div class="bottom-player-area pt-0 pb-0 px-2">
          <!-- 我的战场 -->
          <div class="bottom-board flex justify-center gap-2 min-h-20 p-2 rounded-xl mx-4" id="play-area" style="background: rgba(255, 255, 255, 0.6); border: 3px solid ${this.selectedHandCard?"#7cb87c":this.selectingTargetForCard?"#4a90d9":"#d4c4a8"};">
            ${m.board.map(S=>{const T=S.canAttack&&!S.hasAttacked&&y&&S.attack>0,D=this.selectedAttackingMinion?.id===S.id,O=(this.selectingTargetForCard!==null||this.selectingTargetForSkill!==null)&&y,P=this.getEffectIcons(S.effects);return S.elementStatus&&console.log("[元素边框-己方战场(顶部)] 随从:",S.name,"元素类型:",S.elementStatus.type,"style中将包含box-shadow"),`
                <div class="minion-card group relative rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all ${T?"can-attack":""} ${D?"selected-attacker":""} ${O?"target-select-mode":""}${S.elementStatus?" element-status-"+S.elementStatus.type:""}"
                  style="${this.getCardBgInline(S,"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)")} border: 4px solid ${D?"#ff6b6b":O?"#4a90d9":S.keywords.some(B=>B.name==="不动")?"#808080":T?"#7cb87c":S.playedThisTurn?"#4a90d9":"#c4b49c"};${S.elementStatus?"padding: 7px; background-clip: padding-box; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[S.elementStatus.type]||"transparent")+";":""}"
                  data-minion-id="${S.id}" data-player-id="${m.id}" data-has-effects="${S.effects&&S.effects.length>0?"true":"false"}"
                  data-base-border="${S.keywords.some(B=>B.name==="不动")?"#808080":T?"#7cb87c":S.playedThisTurn?"#4a90d9":"#c4b49c"}">
                  <div class="h-full flex flex-col items-center justify-end py-1 px-2">
                    <div class="minion-name-overlay absolute inset-0 flex items-center justify-center px-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <span class="text-xs font-bold text-center leading-tight" style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black;">${S.name}</span>
                    </div>
                    ${S.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:inherit;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
                    <div class="flex items-center justify-center gap-1 flex-wrap max-w-full pt-1">
                      ${this.renderKeywords(S.keywords,S.armorValue,S.divineShieldActive,S.playedThisTurn,S.preparation)}
                      ${P?`<div class="effect-icons text-xs">${P}</div>`:""}
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
            ${this.renderHeroSkills(m,!1)}
            <!-- 4:3纸材质英雄模块（居中） -->
            <div class="mx-auto relative" data-own-hero="true" data-player-hero="${m.id}"
              style="width: 140px; height: 105px; ${this.renderHeroBackground(m.heroCard)} border: 4px solid #d4c4a8; border-radius: 8px;${m.elementStatus?"padding: 7px; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[m.elementStatus.type]||"transparent")+";":""}">
              ${m.heroCard?.imageData?"":'<div class="w-full h-full flex items-center justify-center"><span class="font-bold text-lg" style="color: #5a4a3a;">英雄</span></div>'}
              ${m.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:8px;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
              <!-- 血量（底部居中，一半出框） -->
              <div class="absolute flex items-center justify-center font-bold text-white text-sm shadow-md"
                style="bottom: -10px; left: 50%; transform: translateX(-50%); width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #c0a080 0%, #a08060 100%); border: 3px solid #8b7355; z-index: 10;"
                data-player-hp="${m.id}">
                ${m.health}
              </div>
              ${m.heroMarkCount&&m.heroMarkCount>0?`
                <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md"
                  style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                  ${m.heroMarkCount}
                </div>
              `:""}
              ${this.renderDefenseOverlay(m)}
              ${this.renderSpeechMenuHtml()}
            </div>
            <!-- 昵称和能量（绝对定位在英雄模块右侧） -->
            <!-- 昵称和能量（绝对定位在英雄模块右侧） -->
            <div class="absolute flex flex-col items-start" style="left: calc(50% + 78px); top: 15px;">
              <div class="font-bold text-lg" style="color: #fff; text-shadow: 0 0 8px rgba(0,0,0,0.6), 0 0 16px rgba(0,0,0,0.3);">${m.name}</div>
              <div class="flex items-center gap-1">
                ${this.renderHeroName(m.heroCard)}
                <span class="text-xs mt-0.5" style="color: rgba(255,255,255,0.85); text-shadow: 0 0 6px rgba(0,0,0,0.6);">手牌数：${m.hand.length}</span>
              </div>
              ${this.renderEnergy(m.maxEnergy,m.energy,m.bonusEnergy||0)}
            </div>
          </div>
          
          <!-- 手牌区域 + 按钮 + 日志 -->
          <div class="hand-area flex items-end justify-center ${this.isPortraitMode?"flex-col items-center":""}">
            <!-- 手牌容器 -->
            <div class="hand-container" id="hand-container" style="flex: 0 0 auto; display: flex; justify-content: center; overflow: visible !important; overflow-x: visible !important; overflow-y: visible !important; height: auto !important; min-height: unset !important;">
              ${r?`
                <div class="flex justify-center items-center py-8">
                  <div class="text-xl" style="color: #a08060;">👁️ 观战模式：无法查看手牌</div>
                </div>
              `:this.renderHand(m.hand,m.energy,this.isPortraitMode)}
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
                <button id="all-attack-btn" class="action-btn ${this.isPortraitMode?"py-1 text-sm":"py-2 text-lg"} font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all ${w?"attack-available":"attack-disabled"}"
                  style="background: ${w?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"linear-gradient(135deg, #888 0%, #666 100%)"}; color: #fff; border: 3px solid ${w?"#a04040":"#555"};">
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
    `,this.attachOnlineBattleEvents(y,m,f,h)}attachOnlineBattleEvents(e,s,t,n){const{isSpectator:i}=this.state.online;document.getElementById("game-menu-btn")?.addEventListener("click",()=>{this.showGameMenu=!0,this.render()}),document.getElementById("continue-game-btn")?.addEventListener("click",()=>{this.showGameMenu=!1,this.render()});const r=document.getElementById("surrender-btn");if(r){const d=r.cloneNode(!0);r.parentNode?.replaceChild(d,r),d.addEventListener("click",async()=>{this.showGameMenu=!1;const{playerId:c,firstPlayerId:p,battlePlayers:h,currentRoom:m}=this.state.online,f=c,b=h.find(g=>g.playerId!==c)?.playerId||"";if(console.log("[认输] 认输按钮点击"),console.log("[认输] 输家 ID:",f,"赢家 ID:",b),console.log("[认输] battlePlayers:",h.map(g=>({id:g.playerId,name:g.playerNickname}))),console.log("[认输] 当前房间:",m?.id,"订阅状态:",this.roomSubscription?"存在":"不存在"),console.log("[认输] 更新本地状态为 onlineGameOver"),this.state=ie(this.state,{type:"ONLINE_GAME_OVER",winnerId:b,loserId:f}),console.log("[认输] 更新后 phase:",this.state.phase,"winner:",this.state.winner),this.render(),m)try{const{broadcastGameAction:g}=await fe(async()=>{const{broadcastGameAction:y}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:y}},[]);console.log("[认输] 正在广播认输消息到对手..."),await g(m.id,{type:"SURRENDER",loserId:f},this.roomSubscription||void 0),console.log("[认输] 已成功广播认输消息"),await this.broadcastGameState(),console.log("[认输] 已广播游戏结束状态")}catch(g){console.error("[认输] 广播认输消息失败:",g)}else console.error("[认输] 没有当前房间，无法广播")}),console.log("【attachOnlineBattleEvents】已绑定联机模式认输按钮事件")}if(document.getElementById("game-menu-overlay")?.addEventListener("click",d=>{d.target.id==="game-menu-overlay"&&(this.showGameMenu=!1,this.render())}),document.getElementById("discard-pile-btn")?.addEventListener("click",d=>{const c=parseInt(d.currentTarget.getAttribute("data-player-id")||"0");c>0&&(this.showDiscardPileViewer=!0,this.viewingDiscardPilePlayerId=c,this.render())}),document.getElementById("discard-pile-viewer-close")?.addEventListener("click",()=>{this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.render()}),document.getElementById("discard-pile-viewer-overlay")?.addEventListener("click",d=>{d.target.id==="discard-pile-viewer-overlay"&&(this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.render())}),i&&document.querySelectorAll("[data-switch-view]").forEach(d=>{d.addEventListener("click",()=>{const c=d.dataset.switchView;c&&(this.state=ie(this.state,{type:"SET_SPECTATOR_VIEW",playerId:c}),this.render())})}),!e)return;this.attachEventListeners();const a=document.getElementById("end-turn-btn");if(a){const d=a.cloneNode(!0);a.parentNode?.replaceChild(d,a),d.addEventListener("click",()=>{console.log("联机模式结束回合按钮被点击"),this.handleEndTurnOnline()}),console.log("已绑定联机模式结束回合按钮事件")}else console.log("未找到结束回合按钮");const o=document.getElementById("all-attack-btn");o&&o.addEventListener("click",()=>{this.allAttackHeroOnline()});const l=document.getElementById("refresh-room-btn");l&&l.addEventListener("click",async()=>{console.log("刷新房间按钮被点击"),await this.refreshOnlineBattleState()})}async refreshOnlineBattleState(){const{currentRoom:e}=this.state.online;if(e)try{const s=(await fe(async()=>{const{getDb:n}=await import("./online-D2Ox2vtC.js");return{getDb:n}},[])).getDb(),{data:t}=await s.from("game_rooms").select("game_state").eq("id",e.id).single();if(t?.game_state){const n=t.game_state;console.log("刷新获取到游戏状态，回合:",n.turnNumber),this.handleRemoteGameStateUpdate(n)}}catch(s){console.error("刷新房间状态失败:",s)}}async handleEndTurnOnline(e=!1){if(console.log("handleEndTurnOnline 被调用, 当前phase:",this.state.phase,"currentPlayerId:",this.state.currentPlayerId),this.state=ie(this.state,{type:"END_TURN"}),this.state.online?.currentRoom&&this.state.mulliganDone===1){console.log("[handleEndTurnOnline] 等待后手完成换牌，mulliganDone:",this.state.mulliganDone),this.render(),this.checkOnlineGameOver();return}this.state=ie(this.state,{type:"START_MY_TURN"}),e||await this.broadcastGameState(),this.render(),this.checkOnlineGameOver()}async broadcastGameState(){const{currentRoom:e,firstPlayerId:s}=this.state.online;if(!e)return;console.log("广播轻量游戏状态，当前玩家:",this.state.currentPlayerId,"回合:",this.state.turnNumber,"阶段:",this.state.phase);const t=Xt(this.state),n=this.state.discardPile.length,i=this._lastBroadcastDiscardPileLen,r=n>i?this.state.discardPile.slice(i).map(a=>({id:a.id,templateKey:be(a),name:a.name})):[];t.discardPileDiff=r,this._lastBroadcastDiscardPileLen=n,console.log("轻量状态序列化完成，大小约:",JSON.stringify(t).length,"bytes, gamePhase:",t.gamePhase,"discardPileDiff:",r.length);try{const{broadcastGameAction:a}=await fe(async()=>{const{broadcastGameAction:l}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:l}},[]),o=JSON.stringify(t).length;console.log(`【STATE_SYNC】消息大小: ${o} bytes, 使用持久 channel: ${!!this.roomSubscription}`),await a(e.id,{type:"STATE_SYNC",syncState:t},this.roomSubscription||void 0),console.log("【STATE_SYNC】通过持久 channel 广播成功")}catch(a){console.error("【STATE_SYNC】Realtime 广播失败:",a)}try{await(await fe(async()=>{const{getDb:o}=await import("./online-D2Ox2vtC.js");return{getDb:o}},[])).getDb().from("game_rooms").update({game_state:t}).eq("id",e.id),console.log("【STATE_SYNC】轻量状态已保存到数据库（fallback）")}catch(a){console.error("【STATE_SYNC】保存到数据库失败:",a)}}async checkOnlineGameOver(){const{players:e,online:s}=this.state,{battlePlayers:t,firstPlayerId:n}=s;if(e[0].health<=0||e[1].health<=0){const i=e[0].health<=0?1:0,r=1-i,a=i===0?n:t.find(l=>l.playerId!==n).playerId,o=r===0?n:t.find(l=>l.playerId!==n).playerId;this.state=ie(this.state,{type:"ONLINE_GAME_OVER",winnerId:a,loserId:o}),await this.broadcastGameState(),this.render()}}async allAttackHeroOnline(){if(this.isAttacking)return;this.isAttacking=!0;const{players:e,online:s}=this.state,{playerId:t,firstPlayerId:n,currentRoom:i}=s,r=t===n?0:1,a=e[r],o=1-r,l=r+1,d=o+1,c=a.board.filter(p=>p.canAttack&&p.canAttackHeroes&&!p.hasAttacked&&!p.isDefending);if(c.length===0){this.isAttacking=!1;return}for(const p of c){if(this.savePotentialDeathMinions(p.id),this.playWoodSound(),await this.attackAnimation(p.id,!0,p.attack),this.state=ie(this.state,{type:"ATTACK_HERO",attackerPlayerId:l,attackerCardId:p.id,targetPlayerId:d}),this.render(),i&&await this.broadcastGameState(),this.state.phase==="onlineGameOver"){this.isAttacking=!1;return}await new Promise(h=>setTimeout(h,200))}this.isAttacking=!1}async renderOnlineGameOver(){const{winner:e,players:s,online:t}=this.state,{battlePlayers:n,isSpectator:i,rematchRequested:r,playerId:a,lastLoserId:o,firstPlayerId:l}=t;if(!e||n.length<2){console.error("[渲染] 无效的 winner 或 battlePlayers 数量不足",e,n.length),this.state=ie(this.state,{type:"BACK_TO_ROOM"}),this.render();return}if(typeof e!="number"||e<1||e>2){console.error("[渲染] 无效的 winner 值，无法显示结算动画",e),console.error("[渲染] players:",s),this.state=ie(this.state,{type:"BACK_TO_ROOM"}),this.render();return}const d=s.find(m=>m.id===e),c=s.find(m=>m.id!==e);if(!d||!c){console.error("[渲染] 找不到胜者或败者",e,s),this.state=ie(this.state,{type:"BACK_TO_ROOM"}),this.render();return}console.log("[动画] 渲染联机游戏结束界面"),console.log("[动画] winner (原始值):",e,"类型:",typeof e),console.log("[动画] winnerPlayer:",d.name,"(id:",d.id,")"),console.log("[动画] loserPlayer:",c.name,"(id:",c.id,")"),console.log("[动画] firstPlayerId:",l,"playerId:",a,"isSpectator:",i),console.log("[动画] battlePlayers:",n.map(m=>({id:m.playerId,name:m.playerNickname}))),r.includes(a),r.length;const p=`
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
    `;await this.applyGrayscaleTransition(p);const h=document.getElementById("game-over-overlay");h&&h.addEventListener("click",async()=>{this.stopThumbsDownEmojis();const{currentRoom:m}=this.state.online;if(m)try{const{updateRoomStatus:f,resetAllPlayerReady:b}=await fe(async()=>{const{updateRoomStatus:g,resetAllPlayerReady:y}=await import("./online-D2Ox2vtC.js");return{updateRoomStatus:g,resetAllPlayerReady:y}},[]);await f(m.id,"waiting"),await b(m.id),console.log("已更新房间状态为 waiting 并重置准备状态")}catch(f){console.error("更新房间状态失败:",f)}await this.unsubscribeFromRoom(),this.state=ie(this.state,{type:"BACK_TO_ROOM"}),await this.loadRoomData(),this.render()}),this.spawnThumbsDownEmojis()}async loadRoomData(){if(await Promise.all([this.loadMessages(),this.loadPlayerReady(),this.loadRoomInfo()]),this.roomSubscription){console.log("已有房间订阅，跳过重复订阅");return}try{await this.subscribeToRoomUpdates(),console.log("订阅房间更新成功")}catch(e){console.error("订阅房间更新失败，将使用轮询模式:",e),alert("订阅失败，将使用轮询模式，可能会有延迟")}this.startPolling()}startPolling(){this.pollingInterval&&clearInterval(this.pollingInterval),this.pollingInterval=setInterval(async()=>{if(this.state.phase!=="room"){clearInterval(this.pollingInterval),this.pollingInterval=null;return}try{await Promise.all([this.loadRoomInfo(),this.loadMessages(),this.loadPlayerReady()])}catch(e){console.error("轮询失败:",e)}},2e3)}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async loadRoomInfo(){const{currentRoom:e}=this.state.online;if(e)try{const{getRoomById:s}=await fe(async()=>{const{getRoomById:n}=await import("./online-D2Ox2vtC.js");return{getRoomById:n}},[]),t=await s(e.id);if(t){if(t.status==="playing"&&this.state.phase==="room"){console.log("轮询检测到游戏开始，进入战斗界面"),this.state=ie(this.state,{type:"UPDATE_ROOM",room:t}),await this.enterOnlineBattle();return}const n=this.state.online.currentRoom?.guest_id,i=this.state.online.currentRoom?.guest_nickname;(t.guest_id!==n||t.guest_nickname!==i)&&(console.log("检测到房间信息变化:",t),this.state=ie(this.state,{type:"UPDATE_ROOM",room:t}),this.state.phase==="room"&&this.render())}}catch(s){console.error("加载房间信息失败:",s)}}async subscribeToRoomUpdates(e=0){const{currentRoom:s,playerId:t}=this.state.online;if(!(!s||this.isSubscribing)){this.isSubscribing=!0;try{const{subscribeToRoom:n,unsubscribeFromRoom:i}=await fe(async()=>{const{subscribeToRoom:r,unsubscribeFromRoom:a}=await import("./online-D2Ox2vtC.js");return{subscribeToRoom:r,unsubscribeFromRoom:a}},[]);this.roomSubscription&&(await i(this.roomSubscription),this.roomSubscription=null),this.roomSubscription=await n(s.id,async r=>{console.log("房间更新:",r),this.state=ie(this.state,{type:"UPDATE_ROOM",room:r}),r.status==="playing"&&this.state.phase==="room"?(console.log("检测到游戏开始，进入战斗界面"),await this.enterOnlineBattle()):this.state.phase==="room"&&this.render()},async r=>{if(console.log("收到新消息:",r),r.sender_nickname==="__SYSTEM__"&&r.message.startsWith("__DECK_DATA__")){const l=this.parseDeckDataMessage(r.message);if(l){const d=this.state.online.playerReady.find(p=>p.player_id===r.sender_id),c=d?d.player_nickname:r.sender_id;this.state=ie(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:r.sender_id,filename:"本地卡包",cardCount:l.cardCount,playerNickname:c,comparisonData:l.comparisonData}),this.state.phase==="room"&&this.render()}return}if(r.sender_nickname==="__SYSTEM__"&&r.message.startsWith("__DECK_IMPORT__")){if(this.state.online.remoteDeckImports[r.sender_id]?.comparisonData)return;const l=r.message.split("|");if(l.length>=3){const d=l[1],c=parseInt(l[2],10);console.log("[DEBUG] 收到系统消息-卡包导入:",r.sender_id,d,c),this.state=ie(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:r.sender_id,filename:d,cardCount:c,playerNickname:r.sender_id}),this.state.phase==="room"&&this.render()}return}if(r.sender_nickname==="__SYSTEM__"&&r.message.startsWith("__HERO_SELECT__")){try{const l=JSON.parse(r.message.split("|")[1]);this.state=ie(this.state,{type:"SET_ONLINE_HERO",playerId:l.playerId,heroCard:l.heroCard}),this.state.phase==="room"&&this.render()}catch(l){console.error("解析 HERO_SELECT 失败:",l)}return}if(r.sender_nickname==="__SYSTEM__"&&r.message.startsWith("__MULLIGAN_CONFIRM__")){if(this.state.online.playerId===this.state.online.firstPlayerId){if(this.state.mulliganDone>=2){console.log("【MULLIGAN_CONFIRM】跳过重复处理，mulliganDone 已为:",this.state.mulliganDone);return}const l=r.message.split("|");try{const d=JSON.parse(l[1]);this.state={...this.state,p2MulliganSelected:d},this.state=ie(this.state,{type:"CONFIRM_MULLIGAN"}),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100),await this.broadcastGameState()}catch(d){console.error("解析 MULLIGAN_CONFIRM 失败:",d)}}return}const{messages:a}=this.state.online;a.some(l=>l.id===r.id)||(this.state=ie(this.state,{type:"ADD_MESSAGE",message:r}),this.updateMessagesDisplay())},r=>{console.log("准备状态更新:",r),this.state=ie(this.state,{type:"UPDATE_PLAYER_READY",playerReady:r}),this.state.phase==="room"&&this.render()},r=>{console.log("游戏状态更新:",r),(this.state.phase==="onlineBattle"||this.state.phase==="mulligan")&&this.handleRemoteGameStateUpdate(r)},async r=>{console.log("收到游戏操作:",r),await this.handleOnlineGameAction(r)},r=>{console.log("收到卡包导入广播:",r),this.state=ie(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:r.playerId,filename:r.filename||"本地卡包",cardCount:r.cardCount,playerNickname:r.playerNickname,comparisonData:r.comparisonData}),this.state.phase==="room"&&this.render()}),console.log("已订阅房间更新")}catch(n){if(console.error("订阅房间更新失败:",n),e<3)return console.log(`订阅失败，自动重试 (${e+1}/3)...`),await new Promise(i=>setTimeout(i,1e3)),this.isSubscribing=!1,this.subscribeToRoomUpdates(e+1);throw console.error("订阅房间更新失败，已重试3次，放弃"),n}finally{this.isSubscribing=!1}}}async handleRemoteGameStateUpdate(e){if(e&&"gamePhase"in e){console.log("【handleRemoteGameStateUpdate】收到轻量状态，转发给 handleOnlineGameAction"),await this.handleOnlineGameAction({type:"STATE_SYNC",syncState:e});return}const{playerId:t,firstPlayerId:n,isSpectator:i}=this.state.online;if(console.log("收到远程游戏状态更新(全量格式)，当前玩家:",e.currentPlayerId,"回合:",e.turnNumber,"时间戳:",e.timestamp,"游戏阶段:",e.gamePhase,"胜者:",e.winner,"是否正在攻击:",this.isAttacking),e.gamePhase==="gameOver"&&e.winner){console.log("收到游戏结束状态，胜者:",e.winner);const{battlePlayers:l}=this.state.online,d=e.winner.id===String(this.state.online.firstPlayerId)?String(l.find(c=>c.playerId!==this.state.online.firstPlayerId).playerId):String(this.state.online.firstPlayerId);this.state=ie(this.state,{type:"ONLINE_GAME_OVER",winnerId:e.winner.id,loserId:d}),this.render();return}if(this.isAttacking){console.log("正在攻击动画中，跳过远程状态更新");return}if(e.timestamp&&this.lastGameStateTimestamp&&e.timestamp<this.lastGameStateTimestamp){console.log("跳过过期的远程状态更新，时间戳:",e.timestamp,"当前:",this.lastGameStateTimestamp);return}e.timestamp&&(this.lastGameStateTimestamp=e.timestamp);const r=this.state.currentPlayerId===1?t===n:t!==n,a=e.currentPlayerId===1?t===n:t!==n;let o=[];if(e.currentPlayerId===1&&t===n){const l=this.state.players[0].hand,d=e.players[0].hand;d.length>l.length&&(o=d.slice(l.length).map(c=>c.id))}else if(e.currentPlayerId===2&&t!==n){const l=this.state.players[1].hand,d=e.players[1].hand;d.length>l.length&&(o=d.slice(l.length).map(c=>c.id))}if(this.state={...this.state,currentPlayerId:e.currentPlayerId,turnNumber:e.turnNumber,players:e.players.map((l,d)=>({id:l.id,name:l.name,health:l.health,maxHealth:l.maxHealth||30,heroMarkCount:l.heroMarkCount||0,energy:l.energy,maxEnergy:l.maxEnergy,hand:l.hand.map(c=>({...c})),deck:l.deck.map(c=>({...c})),board:l.board.map(c=>({...c}))})),discardPile:(e.discardPile||[]).map(l=>({...l})),newlyDrawnCardIds:o,gameLogs:e.gameLogs||this.state.gameLogs},this.state.players[0].health<=0||this.state.players[1].health<=0){const{battlePlayers:l,firstPlayerId:d}=this.state.online,c=this.state.players[0].health<=0?1:0,p=c===0?d:l.find(m=>m.playerId!==d).playerId,h=c===0?l.find(m=>m.playerId!==d).playerId:d;this.state=ie(this.state,{type:"ONLINE_GAME_OVER",winnerId:p,loserId:h}),this.render();return}!r&&a&&!i&&o.length>0?(console.log("回合切换到己方，播放抽牌动画"),this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100)):this.render()}async handleOnlineGameAction(e){const{phase:s,online:t}=this.state;if(console.log("处理游戏操作消息:",e.type,"当前阶段:",s,"是否正在攻击:",this.isAttacking),this.isAttacking&&e.type!=="MINION_ATTACK_HERO"){console.log("正在攻击动画中，跳过状态更新");return}switch(e.type){case"STATE_SYNC":{const n=e.syncState;if(!n){console.error("【STATE_SYNC】收到空状态");break}if(this.state.online.playerId,n.timestamp&&n.timestamp<=this.lastGameStateTimestamp){console.log("【STATE_SYNC】跳过旧状态或自己的广播");break}if(this.state.mulliganDone>=2&&(n.mulliganDone??0)<2){console.log("【STATE_SYNC】跳过过期换牌状态（本地已完成换牌，mulliganDone:",this.state.mulliganDone,"，收到:",n.mulliganDone,"）");break}console.log("【STATE_SYNC】收到轻量状态同步，回合:",n.turnNumber,"当前玩家:",n.currentPlayerId,"阶段:",n.gamePhase),this.lastGameStateTimestamp=n.timestamp;const i=this.state.sharedDeck||[];console.log("【STATE_SYNC】反序列化前 sharedDeck 大小:",i.length,"当前phase:",this.state.phase);const r=Zt(n,i);console.log("【STATE_SYNC】反序列化后 restoredState.phase:",r.phase);const a=this.state.currentPlayerId===1?this.state.online.playerId===this.state.online.firstPlayerId:this.state.online.playerId!==this.state.online.firstPlayerId,o=r.currentPlayerId===1?this.state.online.playerId===this.state.online.firstPlayerId:this.state.online.playerId!==this.state.online.firstPlayerId,l=this.state.players[0],d=this.state.players[1];this.state={...this.state,...r,online:{...this.state.online,isWaitingForGameState:!1}},l&&(this.state.players[0].halfPublicDeck=l.halfPublicDeck||[],this.state.players[0].personalBattleDeck=l.personalBattleDeck||[]),d&&(this.state.players[1].halfPublicDeck=d.halfPublicDeck||[],this.state.players[1].personalBattleDeck=d.personalBattleDeck||[]);const c=n.discardPileDiff;if(c&&c.length>0){const p=this.state.sharedDeck||[],h=c.map(m=>{const f=p.find(b=>be(b.card)===m.templateKey);return f?{...f.card,id:m.id}:null}).filter(Boolean);h.length>0&&(this.state.discardPile=[...this.state.discardPile,...h])}if(console.log("【STATE_SYNC】状态已恢复，玩家1手牌:",this.state.players[0].hand.length,"玩家2手牌:",this.state.players[1].hand.length),this.state.phase==="onlineGameOver"){this.render();break}!a&&o&&!this.isAttacking&&n.newlyDrawnCardIds.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100)):this.render();break}case"GAME_INIT":{console.log("【GAME_INIT】收到初始化消息，sharedDeckOrder长度:",e.sharedDeckOrder.length,"先手:",e.firstPlayerId);const{playerId:n,isSpectator:i}=this.state.online;if(n===e.firstPlayerId){console.log("【GAME_INIT】我是先手，跳过自己广播的消息");break}if(i){console.log("【GAME_INIT】观战者收到初始化消息，暂不处理");break}this.state=ie(this.state,{type:"START_ONLINE_GAME",firstPlayerId:e.firstPlayerId,player1Name:e.player1Name,player2Name:e.player2Name,sharedDeckOrder:e.sharedDeckOrder,player1PersonalKeys:e.player1PersonalKeys,player2PersonalKeys:e.player2PersonalKeys}),this.state={...this.state,online:{...this.state.online,isWaitingForGameState:!1}},this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100),this.battleStatePollInterval&&clearInterval(this.battleStatePollInterval);const r=this.state.online.currentRoom?.id;r&&(this.battleStatePollInterval=window.setInterval(async()=>{if(this.state.phase!=="onlineBattle"&&this.state.phase!=="mulligan"){this.battleStatePollInterval&&(clearInterval(this.battleStatePollInterval),this.battleStatePollInterval=null);return}try{const{getDb:a}=await fe(async()=>{const{getDb:p}=await import("./online-D2Ox2vtC.js");return{getDb:p}},[]),{data:o,error:l}=await a().from("game_rooms").select("game_state").eq("id",r).single();if(l||!o?.game_state)return;const d=o.game_state;d&&"gamePhase"in d?await this.handleOnlineGameAction({type:"STATE_SYNC",syncState:d}):console.log("【轮询】数据库中的 game_state 不是轻量格式，跳过")}catch{}},2e3),console.log("【GAME_INIT】后手启动战斗状态轮询(fallback)"));break}case"FULL_STATE_SYNC":if(e.gameState.timestamp===0){console.log("收到状态同步请求");const{firstPlayerId:i,playerId:r,currentRoom:a}=t;if(r===i&&s==="onlineBattle"){console.log("我是先手，重新广播游戏状态");try{const{broadcastGameAction:o}=await fe(async()=>{const{broadcastGameAction:l}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:l}},[]);await o(a.id,{type:"GAME_START",gameState:{currentPlayerId:this.state.currentPlayerId,turnNumber:this.state.turnNumber,players:this.state.players.map(l=>({id:l.id,name:l.name,health:l.health,energy:l.energy,maxEnergy:l.maxEnergy,hand:l.hand.map(d=>({...d})),deck:l.deck.map(d=>({...d})),board:l.board.map(d=>({...d}))})),firstPlayerId:i,gamePhase:"playing",timestamp:Date.now()}},this.roomSubscription||void 0)}catch(o){console.error("广播游戏状态失败:",o)}}break}case"GAME_START":{console.log("【GAME_START】收到消息，更新游戏状态");const n=e.gameState,i=n.firstPlayerId,{playerId:r,firstPlayerId:a}=t;if(n.timestamp&&n.timestamp<=this.lastGameStateTimestamp){console.log("【GAME_START】收到旧状态，跳过",{receivedTimestamp:n.timestamp,currentTimestamp:this.lastGameStateTimestamp});break}const o=r===i,l=this.state.phase==="onlineBattle"&&this.state.turnNumber>0,d=o&&l;if(console.log("【GAME_START】判断是否自己的广播:",{playerId:r,messageFirstPlayerId:i,currentFirstPlayerId:a,isFirstPlayer:o,isInBattle:l,phase:this.state.phase,turnNumber:this.state.turnNumber,isMyBroadcast:d}),d){console.log("【GAME_START】我是先手且已在战斗中，跳过自己广播的消息");break}if(n.timestamp&&(this.lastGameStateTimestamp=n.timestamp),n.gamePhase==="gameOver"&&n.winner!==void 0){console.log("[同步] 收到远程游戏结束状态"),console.log("[同步] gamePhase:",n.gamePhase),console.log("[同步] winner (原始值):",n.winner,"类型:",typeof n.winner),console.log("[同步] winner (JSON):",JSON.stringify(n.winner));const{battlePlayers:p}=this.state.online;let h;if(typeof n.winner=="object"&&n.winner!==null){console.warn("[同步] 收到旧格式的 winner 对象，需要更新广播方",n.winner);const b=n.winner.id;h=p.findIndex(g=>g.playerId===b)+1}else h=Number(n.winner);(isNaN(h)||h<1||h>2)&&(console.error("[同步] winner 解析失败，使用默认值 1",n.winner),h=1);const m=h===1?p[0].playerId:p[1].playerId,f=h===1?p[1].playerId:p[0].playerId;console.log("[同步] winnerIndex:",h,"winnerId:",m,"loserId:",f),console.log("[同步] battlePlayers:",p.map(b=>({id:b.playerId,name:b.playerNickname}))),this.state=ie(this.state,{type:"ONLINE_GAME_OVER",winnerId:m,loserId:f}),this.render();break}const c=[];n.players.forEach(p=>{p.hand.forEach(h=>{c.push(h.id)})}),this.state={...this.state,phase:"onlineBattle",currentPlayerId:n.currentPlayerId,turnNumber:n.turnNumber,players:n.players.map((p,h)=>({id:p.id,name:p.name,health:p.health,energy:p.energy,maxEnergy:p.maxEnergy,hand:p.hand.map(m=>({...m})),deck:p.deck.map(m=>({...m})),board:p.board.map(m=>({...m}))})),discardPile:(n.discardPile||[]).map(p=>({...p})),newlyDrawnCardIds:c,online:{...this.state.online,firstPlayerId:n.firstPlayerId,isWaitingForGameState:!1}},console.log("游戏状态已更新，玩家1手牌数:",this.state.players[0].hand.length,"玩家2手牌数:",this.state.players[1].hand.length),this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100);break}case"END_TURN":{const n=this.state.online.playerId;if(e.playerId===n)break;console.log("收到 END_TURN 消息，对手结束回合，等待 STATE_SYNC 同步状态");break}case"PLAY_CARD":{console.log("收到 PLAY_CARD 消息，等待 STATE_SYNC 同步状态");break}case"EXECUTE_PLAYED_MINION_EFFECT":{console.log("收到 EXECUTE_PLAYED_MINION_EFFECT 消息，等待 STATE_SYNC 同步状态");break}case"HERO_SKILL":{console.log("收到 HERO_SKILL 消息，等待 STATE_SYNC 同步状态");break}case"MINION_ATTACK_HERO":{console.log("收到 MINION_ATTACK_HERO 消息，攻击者:",e.attackerCardId,"伤害:",e.damage,"当前isAttacking:",this.isAttacking);const n=e.attackerCardId,i=e.damage;this.playWoodSound(),await this.attackAnimation(n,!0,i,!0);break}case"ATTACK_MINION":{console.log("收到 ATTACK_MINION 消息，等待 STATE_SYNC 同步状态");break}case"ATTACK_HERO":{console.log("收到 ATTACK_HERO 消息，等待 STATE_SYNC 同步状态");break}case"SURRENDER":{console.log("[认输] 收到 SURRENDER 消息"),console.log("[认输] 输家 ID:",e.loserId,"当前 phase:",s);const{battlePlayers:n}=this.state.online,i=e.loserId===n[0].playerId?n[1].playerId:n[0].playerId;console.log("[认输] 计算胜者 ID:",i),console.log("[认输] battlePlayers:",n.map(r=>r.playerId)),this.state=ie(this.state,{type:"ONLINE_GAME_OVER",winnerId:i,loserId:e.loserId}),console.log("[认输] 更新后 phase:",this.state.phase,"winner:",this.state.winner),this.render();break}case"VOICE_SPEECH":{if(e.playerId!==this.state.online.playerId){const i=e.playerId===this.state.online.firstPlayerId?1:2;this.renderRemoteSpeechBubble(this.app,e.speechType,i)}break}case"REMATCH_REQUEST":{console.log("收到 REMATCH_REQUEST 消息，请求者:",e.playerId);const{rematchRequested:n,lastLoserId:i,battlePlayers:r,playerId:a,currentRoom:o}=this.state.online;if(!n.includes(e.playerId)){const l=[...n,e.playerId];if(this.state={...this.state,online:{...this.state.online,rematchRequested:l}},l.length===2){console.log("双方都请求了再战，开始新游戏");const d=i||r[0].playerId;if(this.roomSubscription?console.log("【再战】订阅已存在"):(console.log("【再战】订阅不存在，重新订阅"),await this.subscribeToRoomUpdates()),a===d){console.log("我是再战先手，初始化游戏");const c=r.find(h=>h.playerId===d),p=r.find(h=>h.playerId!==d);if(this.state=ie(this.state,{type:"START_ONLINE_GAME",firstPlayerId:d,player1Name:c.playerNickname,player2Name:p.playerNickname}),console.log("【再战】先手等待 2 秒后广播..."),await new Promise(h=>setTimeout(h,2e3)),o)try{const{broadcastGameAction:h}=await fe(async()=>{const{broadcastGameAction:m}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:m}},[]);console.log("【再战】先手广播 GAME_START，订阅状态:",this.roomSubscription?"存在":"不存在"),await h(o.id,{type:"GAME_START",gameState:{currentPlayerId:this.state.currentPlayerId,turnNumber:this.state.turnNumber,players:this.state.players.map(m=>({id:m.id,name:m.name,health:m.health,energy:m.energy,maxEnergy:m.maxEnergy,hand:m.hand.map(f=>({...f})),deck:m.deck.map(f=>({...f})),board:m.board.map(f=>({...f}))})),firstPlayerId:d,gamePhase:"playing",timestamp:Date.now()}},this.roomSubscription||void 0),console.log("【再战】已广播游戏开始状态")}catch(h){console.error("【再战】广播游戏开始状态失败:",h)}this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100)}else{console.log("我是再战后手，等待先手初始化"),this.state={...this.state,phase:"onlineBattle",online:{...this.state.online,isWaitingForGameState:!0}},this.render();return}}else this.render()}break}case"DISCARD_PILE_ADD":{const n=e.cards;if(n&&n.length>0)for(const i of n)this.state.discardPile.push(i);break}case"DISCARD_PILE_REMOVE":{const n=e.cardTemplateKeys;if(n&&n.length>0)for(const i of n){const r=this.state.discardPile.findIndex(a=>be(a)===i);r>=0&&this.state.discardPile.splice(r,1)}break}case"FETCH_FROM_ENEMY_HAND":{const{playerId:n}=this.state.online,r=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,a=this.state.players[r];if(a.hand.length>0){const o=Math.floor(Math.random()*a.hand.length),l=a.hand.splice(o,1)[0],d={id:l.id,templateKey:be(l),name:l.name,type:l.type,cost:l.cost,attack:l.attack,health:l.health,maxHealth:l.maxHealth,armorValue:l.armorValue,imageData:l.imageData||""},{broadcastGameAction:c}=await fe(async()=>{const{broadcastGameAction:p}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:p}},[]);await c(this.state.online.currentRoom.id,{type:"ENEMY_HAND_CARD_RESPONSE",sourcePlayerId:n,card:d,effectType:e.effectType}),this.render()}break}case"ENEMY_HAND_CARD_RESPONSE":{e.card&&String(e.sourcePlayerId)!==this.state.online.playerId&&(this._pendingEnemyHandCard=e.card,this._pendingEnemyHandEffectType=e.effectType);break}case"REMOVE_FROM_ENEMY_HAND":{if(e.cardTemplateKey&&String(e.sourcePlayerId)!==this.state.online.playerId){const n=e.cardTemplateKey,i=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,r=this.state.players[i],a=r.hand.findIndex(o=>be(o)===n);a>=0&&(r.hand.splice(a,1),this.render())}break}}}async enterOnlineBattle(){const{currentRoom:e,playerId:s,playerNickname:t,lastLoserId:n}=this.state.online;if(e){this.lastGameStateTimestamp=0,console.log("【enterOnlineBattle】开始进入战斗",{playerId:s,currentRoomId:e.id,lastLoserId:n,hasSubscription:!!this.roomSubscription,timestampReset:!0});try{const{getPlayerReady:i}=await fe(async()=>{const{getPlayerReady:f}=await import("./online-D2Ox2vtC.js");return{getPlayerReady:f}},[]),a=(await i(e.id)).filter(f=>f.is_ready).slice(0,2).map(f=>({playerId:f.player_id,playerNickname:f.player_nickname,isReady:f.is_ready}));if(console.log("【enterOnlineBattle】对战玩家:",a.map(f=>({id:f.playerId,name:f.playerNickname}))),a.length<2){console.error("对战玩家不足");return}const o=!a.find(f=>f.playerId===s),l=this.state.sharedDeck,d=l.reduce((f,b)=>f+b.count,0);if(console.log("进入联机战斗，本地卡包数量:",d,"模板数:",l.length),l.length===0){console.error("本地卡包为空，无法进入战斗"),alert("本地卡包为空，请先在房间内导入卡包");return}this.state=ie(this.state,{type:"START_ONLINE_BATTLE",battlePlayers:a,isSpectator:o,onlineDeck:l});const c=[a[0].playerId,a[1].playerId].sort(),p=e.id,h=p%2;let m;if(n?(m=n,console.log("【enterOnlineBattle】再战模式，输家先手:",m)):(m=h===0?c[0]:c[1],console.log("【enterOnlineBattle】首局，随机决定先手:",m)),console.log("【enterOnlineBattle】先后手计算: 房间ID=",e.id,"哈希=",p,"随机值=",h,"先手=",m,"我=",s),this.state={...this.state,online:{...this.state.online,firstPlayerId:m,diceRolls:[]}},s===m)if(this.roomSubscription)console.log("【enterOnlineBattle - 先手】订阅已存在");else{console.log("【enterOnlineBattle - 先手】订阅不存在，尝试重新订阅");try{await this.subscribeToRoomUpdates(),console.log("【enterOnlineBattle - 先手】订阅成功")}catch{console.warn("【enterOnlineBattle - 先手】订阅失败，将使用数据库轮询同步游戏状态")}}else console.log("【enterOnlineBattle - 后手】跳过订阅检查，直接使用数据库轮询");if(s===m){console.log("我是先手玩家，初始化游戏状态"),this.state={...this.state,online:{...this.state.online,isWaitingForGameState:!1}},await this.startOnlineGameWithFirstPlayer(m,a),this.battleStatePollInterval&&clearInterval(this.battleStatePollInterval);const f=this.state.online.currentRoom?.id;f&&(this.battleStatePollInterval=window.setInterval(async()=>{if(this.state.phase!=="onlineBattle"&&this.state.phase!=="mulligan"){this.battleStatePollInterval&&(clearInterval(this.battleStatePollInterval),this.battleStatePollInterval=null);return}try{const{getDb:b}=await fe(async()=>{const{getDb:u}=await import("./online-D2Ox2vtC.js");return{getDb:u}},[]),{data:g,error:y}=await b().from("game_rooms").select("game_state").eq("id",f).single();if(y||!g?.game_state)return;const x=g.game_state;x&&"gamePhase"in x&&(this.state.mulliganDone===1&&x.mulliganDone===2&&console.log("【先手轮询】检测到后手已完成换牌(mulliganDone=2)，处理状态同步"),await this.handleOnlineGameAction({type:"STATE_SYNC",syncState:x}))}catch{}},2e3),console.log("【先手】启动战斗状态轮询(fallback)"))}else if(o){console.log("我是观战者，等待游戏状态"),this.state={...this.state,phase:"onlineBattle",online:{...this.state.online,isWaitingForGameState:!0}},this.render();const f=async()=>{if(this.state.online.isWaitingForGameState){try{const b=(await fe(async()=>{const{getDb:y}=await import("./online-D2Ox2vtC.js");return{getDb:y}},[])).getDb(),{data:g}=await b.from("game_rooms").select("game_state").eq("id",e.id).single();if(g?.game_state){console.log("【观战者】从数据库获取到初始化信息");const y=g.game_state;y.sharedDeckOrder&&y.sharedDeckOrder.length>0?await this.handleOnlineGameAction({type:"GAME_INIT",sharedDeckOrder:y.sharedDeckOrder,firstPlayerId:y.firstPlayerId,player1Name:y.player1Name,player2Name:y.player2Name,randomSeed:y.randomSeed}):await this.handleOnlineGameAction({type:"GAME_START",gameState:y});return}}catch(b){console.error("【观战者】轮询游戏状态失败:",b)}setTimeout(f,1e3)}};setTimeout(f,1e3)}else{console.log("我是后手玩家，等待先手初始化游戏状态"),this.state={...this.state,phase:"onlineBattle",online:{...this.state.online,isWaitingForGameState:!0}},this.render();const f=async()=>{if(!this.state.online.isWaitingForGameState){console.log("【后手轮询】不再等待游戏状态，停止轮询");return}try{const g=(await fe(async()=>{const{getDb:k}=await import("./online-D2Ox2vtC.js");return{getDb:k}},[])).getDb(),{data:y,error:x}=await g.from("game_rooms").select("game_state").eq("id",e.id).single();if(x)console.error("【后手轮询】查询游戏状态失败:",x);else if(y?.game_state){console.log("【后手轮询】从数据库获取到初始化信息:",y.game_state);const k=y.game_state;k.sharedDeckOrder&&k.sharedDeckOrder.length>0?await this.handleOnlineGameAction({type:"GAME_INIT",sharedDeckOrder:k.sharedDeckOrder,firstPlayerId:k.firstPlayerId,player1Name:k.player1Name,player2Name:k.player2Name,randomSeed:k.randomSeed}):await this.handleOnlineGameAction({type:"GAME_START",gameState:k});return}else console.log("【后手轮询】数据库中暂无游戏状态，继续轮询...")}catch(g){console.error("【后手轮询】轮询游戏状态失败:",g)}setTimeout(f,1e3)};console.log("【后手】1秒后开始数据库轮询"),setTimeout(f,1e3);const b=async g=>{if(this.state.online.isWaitingForGameState){console.log(`请求状态同步（第${g}次）`);try{const{broadcastGameAction:y}=await fe(async()=>{const{broadcastGameAction:x}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:x}},[]);await y(e.id,{type:"FULL_STATE_SYNC",gameState:{currentPlayerId:0,turnNumber:0,players:[],firstPlayerId:"",gamePhase:"playing",timestamp:0}},this.roomSubscription||void 0)}catch(y){console.error("请求状态同步失败:",y)}g<3&&this.state.online.isWaitingForGameState&&setTimeout(()=>b(g+1),5e3)}};setTimeout(()=>b(1),3e3)}}catch(i){console.error("进入战斗失败:",i)}}}renderWaitingForGameState(){this.app.innerHTML=`
      <div class="min-h-screen flex items-center justify-center" style="background: transparent;">
        <div class="text-center p-8 rounded-2xl shadow-2xl" style="background: rgba(255, 255, 255, 0.9); border: 4px solid #d4c4a8;">
          <div class="text-4xl mb-4">⏳</div>
          <h2 class="text-2xl font-bold mb-4" style="color: #5a4a3a;">等待游戏开始...</h2>
          <p class="text-lg" style="color: #8b7355;">先手玩家正在初始化游戏</p>
        </div>
      </div>
    `}async startOnlineGameWithFirstPlayer(e,s){console.log("【startOnlineGameWithFirstPlayer】开始执行，先手ID:",e,"battlePlayers数量:",s.length);const{currentRoom:t,playerId:n}=this.state.online,{sharedDeck:i}=this.state;if(!t){console.error("【startOnlineGameWithFirstPlayer】currentRoom 为空，无法开始游戏"),alert("房间信息丢失，请重新进入房间");return}const r=s.find(w=>w.playerId===e),a=s.find(w=>w.playerId!==e);if(!r||!a){console.error("【startOnlineGameWithFirstPlayer】玩家查找失败，firstPlayer:",r,"secondPlayer:",a),alert("玩家信息丢失，请重新进入房间");return}if(console.log("【startOnlineGameWithFirstPlayer】卡包数量:",i.length,"先手:",r.playerNickname),i.length===0){console.error("【startOnlineGameWithFirstPlayer】卡包为空，无法开始游戏"),alert("卡包为空，请先在房间中添加卡牌");return}const o=t.id,{deckEntriesToCards:l,shuffleWithSeed:d,getCardTemplateKey:c}=await fe(async()=>{const{deckEntriesToCards:w,shuffleWithSeed:I,getCardTemplateKey:S}=await Promise.resolve().then(()=>$t);return{deckEntriesToCards:w,shuffleWithSeed:I,getCardTemplateKey:S}},void 0),h=l(i).filter(w=>w.type!=="hero"),f=d(h,o).map(w=>c(w));console.log("【先手】生成 sharedDeckOrder，长度:",f.length,"seed:",o);const{findHeroGroup:b}=await fe(async()=>{const{findHeroGroup:w}=await Promise.resolve().then(()=>$t);return{findHeroGroup:w}},void 0),{CARD_GROUP_PUBLIC_ID:g}=await fe(async()=>{const{CARD_GROUP_PUBLIC_ID:w}=await Promise.resolve().then(()=>ra);return{CARD_GROUP_PUBLIC_ID:w}},void 0),y=this.state.online.heroSelections[e]??void 0,x=this.state.online.heroSelections[a.playerId]??void 0,k=[],u=[];if(y){const w=b(this.state,y);if(w&&w.id!==g){const I=l(w.cards.filter(S=>S.card.type!=="hero"));for(const S of I)k.push(c(S))}}if(x){const w=b(this.state,x);if(w&&w.id!==g){const I=l(w.cards.filter(S=>S.card.type!=="hero"));for(const S of I)u.push(c(S))}}if(this.state=ie(this.state,{type:"START_ONLINE_GAME",firstPlayerId:e,player1Name:r.playerNickname,player2Name:a.playerNickname,sharedDeckOrder:f,player1PersonalKeys:k,player2PersonalKeys:u,player1Hero:y,player2Hero:x}),this.render(),t&&n===e){try{const w=(await fe(async()=>{const{getDb:S}=await import("./online-D2Ox2vtC.js");return{getDb:S}},[])).getDb(),{error:I}=await w.from("game_rooms").update({game_state:{sharedDeckOrder:f,firstPlayerId:e,player1Name:r.playerNickname,player2Name:a.playerNickname,randomSeed:o,player1PersonalKeys:k,player2PersonalKeys:u}}).eq("id",t.id);I?console.error("【先手】保存初始化信息到数据库失败:",I):console.log("【先手】已将初始化信息保存到数据库")}catch(w){console.error("【先手】保存初始化信息到数据库失败:",w)}console.log("先手玩家等待 1.5 秒后广播 GAME_INIT..."),await new Promise(w=>setTimeout(w,1500));try{const{broadcastGameAction:w}=await fe(async()=>{const{broadcastGameAction:I}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:I}},[]);console.log("先手广播 GAME_INIT，房间:",t.id,"订阅状态:",this.roomSubscription?"存在":"不存在"),await w(t.id,{type:"GAME_INIT",sharedDeckOrder:f,firstPlayerId:e,player1Name:r.playerNickname,player2Name:a.playerNickname,randomSeed:o,player1PersonalKeys:k,player2PersonalKeys:u},this.roomSubscription||void 0),console.log("已广播 GAME_INIT")}catch(w){console.error("广播 GAME_INIT 失败:",w)}}setTimeout(()=>this.playDrawCardAnimation(300),100)}updateMessagesDisplay(){const e=document.getElementById("messages-container"),{messages:s,playerId:t}=this.state.online;e&&s.length>0&&(e.innerHTML=s.map(n=>`
        <div class="p-2 rounded-lg ${n.sender_id===t?"ml-8":"mr-8"}"
          style="background: ${n.sender_id===t?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"};">
          <div class="text-xs font-bold mb-1" style="color: ${n.sender_id===t?"#4a90d9":"#8b7355"};">
            ${n.sender_nickname}
          </div>
          <div style="color: #5a4a3a;">${n.message}</div>
        </div>
      `).join(""),e.scrollTop=e.scrollHeight)}async unsubscribeFromRoom(){if(this.stopPolling(),this.lastGameStateTimestamp=0,this.roomSubscription)try{const{unsubscribeFromRoom:e}=await fe(async()=>{const{unsubscribeFromRoom:s}=await import("./online-D2Ox2vtC.js");return{unsubscribeFromRoom:s}},[]);await e(this.roomSubscription),this.roomSubscription=null,console.log("已取消房间订阅")}catch(e){console.error("取消订阅失败:",e)}}async loadMessages(){const{currentRoom:e}=this.state.online;if(e)try{const{getMessages:s}=await fe(async()=>{const{getMessages:i}=await import("./online-D2Ox2vtC.js");return{getMessages:i}},[]),t=await s(e.id);this.state=ie(this.state,{type:"UPDATE_MESSAGES",messages:t});for(const i of t)if(i.sender_nickname==="__SYSTEM__"){if(i.message.startsWith("__DECK_DATA__")){const r=this.parseDeckDataMessage(i.message);if(r){const a=this.state.online.playerReady.find(l=>l.player_id===i.sender_id),o=a?a.player_nickname:i.sender_id;this.state=ie(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:i.sender_id,filename:"本地卡包",cardCount:r.cardCount,playerNickname:o,comparisonData:r.comparisonData})}}else if(i.message.startsWith("__DECK_IMPORT__")){const r=i.message.split("|");if(r.length>=3){const a=r[1],o=parseInt(r[2],10);this.state.online.remoteDeckImports[i.sender_id]?.comparisonData||(this.state=ie(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:i.sender_id,filename:a,cardCount:o,playerNickname:i.sender_id}))}}}const n=document.getElementById("messages-container");if(n&&t.length>0){const{playerId:i}=this.state.online;n.innerHTML=t.map(r=>`
          <div class="p-2 rounded-lg ${r.sender_id===i?"ml-8":"mr-8"}"
            style="background: ${r.sender_id===i?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"};">
            <div class="text-xs font-bold mb-1" style="color: ${r.sender_id===i?"#4a90d9":"#8b7355"};">
              ${r.sender_nickname}
            </div>
            <div style="color: #5a4a3a;">${r.message}</div>
          </div>
        `).join(""),n.scrollTop=n.scrollHeight}}catch(s){console.error("加载消息失败:",s)}}async loadPlayerReady(){const{currentRoom:e,playerReady:s}=this.state.online;if(e)try{const{getPlayerReady:t}=await fe(async()=>{const{getPlayerReady:r}=await import("./online-D2Ox2vtC.js");return{getPlayerReady:r}},[]),n=await t(e.id);(n.length!==s.length||n.some((r,a)=>!s[a]||r.is_ready!==s[a].is_ready||r.player_id!==s[a].player_id))&&(console.log("准备状态有变化，更新显示"),this.state=ie(this.state,{type:"UPDATE_PLAYER_READY",playerReady:n}),this.state.phase==="room"&&this.render())}catch(t){console.error("加载准备状态失败:",t)}}renderHeroEditor(){if(typeof window<"u"&&(this.isPortraitMode=window.innerWidth/window.innerHeight<3/4),!this.pendingScrollRestoration){const e=document.querySelector(".editor-left-panel-scroll");e&&(this.pendingScrollRestoration={selector:".editor-left-panel-scroll",scrollTop:e.scrollTop})}if(this.isPortraitMode){const e=document.querySelector(".portrait-side-panel-scroll");if(e){const s=e.scrollTop;s>0&&(this.pendingScrollRestoration?this.pendingScrollRestoration.portraitScrollTop=s:this.pendingScrollRestoration={selector:".portrait-side-panel-scroll",scrollTop:s})}}if(this.app.innerHTML=`
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
                ${(()=>{const e=this.heroSkills[this.heroEditingSkillIndex],s=e?.effects||[],t=s[this.heroEditingSkillEffectIndex];if(!t)return"";const n=t.moment||"打出时";return`
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
                    ${s.map((i,r)=>`
                      <button class="hero-skill-effect-tab px-2 py-0.5 rounded text-xs font-bold transition-all"
                        data-hero-skill-effect-index="${r}"
                        style="background: ${this.heroEditingSkillEffectIndex===r?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"rgba(212, 196, 168, 0.4)"}; color: ${this.heroEditingSkillEffectIndex===r?"#fff":"#8b7355"}; border: 1px solid ${this.heroEditingSkillEffectIndex===r?"#a08060":"#d4c4a8"};">
                        效果${r+1}
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
                      <div class="hero-skill-moment-item p-1.5 rounded-lg cursor-pointer transition-all ${n===i?"selected":""}"
                        data-hero-skill-moment="${i}"
                        style="background: ${n===i?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${n===i?"#6fa8dc":"#d4c4a8"};">
                        <div class="font-bold text-xs" style="color: #5a4a3a;">${i==="打出时"?"发动时":i==="⚙️变量变化时"?"变量变化时":($e[i]||"")+i}</div>
                      </div>
                    `).join("")}
                  </div>
                  `:`
                  <div class="text-xs" style="color: #8b7355;">${n==="打出时"?"发动时":($e[n]||"")+n}</div>
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
                    ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...t?.moment==="攻击时"?["target_attr"]:[]].map(i=>{const r=this.isConditionSelected(i,t),a=this.getConditionItemStyle(i,t),o=i==="guaranteed"?"必然触发":i==="d6"?"🎲 D6":i==="hero_hp"?"英雄血量":i==="minion_count"?"随从数":i==="hand_count"?"手牌数":i==="exists_minion"?"存在随从":"目标属性",l=i==="d6"?"w-6 h-6":"";return`
                        <div class="hero-skill-condition-item p-1.5 rounded-lg cursor-pointer transition-all ${r?"selected":""}"
                          data-hero-skill-condition="${i}"
                          style="${a}">
                          <div class="font-bold text-xs" style="color: #5a4a3a;">${o}</div>
                          ${i==="d6"&&r?`
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
                          ${r?this.getConditionSubEditor("hero-skill",t):""}
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
                    ${(()=>{const i=t.targets||[],r=[];return i.includes("无需目标")&&r.push("抽牌","弃牌","获得能量","失去能量"),i.includes("卡牌")&&(r.push("召唤","获得"),r.push("属性变化")),(!i.includes("无需目标")&&!i.includes("卡牌")||i.length>1)&&(r.push("造成伤害","给予印记","治愈"),i.some(a=>a==="选择随从"||a==="我方所有随从"||a==="敌方所有随从")&&r.push("属性变化")),r.map(a=>`
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
                              ${(()=>{const i=[{key:"derived",label:"衍生卡"},{key:"deck_top",label:"抽牌堆顶"},{key:"discard_top",label:"弃牌堆顶"},{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],r=t.summonSource??"derived";return i.map(a=>`
                                  <div class="hero-skill-summon-source-btn px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${r===a.key?"selected":""}"
                                    data-source="${a.key}"
                                    style="background: ${r===a.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${r===a.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
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
                    ${e.keywords.map(n=>{const i=n.name==="护甲"?n.value??e.armorValue:n.name==="准备"?n.value??1:"";return'<span class="keyword-tag" style="font-size: 9px; padding: 1px 4px; border-radius: 3px;">'+n.name+(i||(n.name==="准备"?n.value??1:""))+"</span>"}).join("")}
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
    `,this.attachHeroEditorEvents(),this.pendingScrollRestoration){const{selector:e,scrollTop:s,containerIndex:t,portraitScrollTop:n}=this.pendingScrollRestoration,i=document.querySelectorAll(e),r=i[t??0]||i[0];if(r&&(r.scrollTop=s),n!==void 0){const a=document.querySelector(".portrait-side-panel-scroll");a&&(a.scrollTop=n)}this.pendingScrollRestoration=null}}async enterDrawingMode(){this.isDrawingMode=!0,this.drawingTool="brush";const e=this.state.phase;if(this.heroEditingDerivedIndex!==null?this.drawingBaseImageData=this.heroDerivedCards[this.heroEditingDerivedIndex]?.imageData||null:this.isHeroEditMode||e==="heroEditor"?this.drawingBaseImageData=this.heroImageData||null:this.drawingBaseImageData=this.currentCard.imageData||null,!this.drawingBaseImageData)try{const s=await this.loadImageAsDataURL("/images/paper_texture_custom.png");this.drawingBaseImageData=s,this.heroEditingDerivedIndex!==null?this.heroDerivedCards[this.heroEditingDerivedIndex].imageData=s:this.isHeroEditMode||e==="heroEditor"?this.heroImageData=s:this.currentCard.imageData=s}catch(s){console.error("加载默认纸材质失败:",s)}this.isHeroEditMode||this.heroEditingDerivedIndex!==null||e==="heroEditor"?this.renderHeroEditor():this.renderCardCreator(),setTimeout(()=>{let s="card-drawing-canvas";this.heroEditingDerivedIndex!==null?s="hero-derived-drawing-canvas":(this.isHeroEditMode||e==="heroEditor")&&(s="hero-drawing-canvas");const t=document.getElementById(s);if(t){this.initDrawingCanvas(t),this.setupDrawingEvents(t),this.createCustomCursor(),this.updateCursorStyle();const n=()=>{t.style.cursor="none",this.showCustomCursor()},i=()=>{t.style.cursor="",this.hideCustomCursor()},r=()=>{this.showCustomCursor()},a=()=>{this.hideCustomCursor()};t.addEventListener("mouseenter",n),t.addEventListener("mouseleave",i),t.addEventListener("touchstart",r,{passive:!0}),t.addEventListener("touchend",a,{passive:!0}),t.__cursorCleanup=()=>{t.removeEventListener("mouseenter",n),t.removeEventListener("mouseleave",i),t.removeEventListener("touchstart",r),t.removeEventListener("touchend",a)};const o=["drawing-brush-btn","hero-drawing-brush-btn"],l=["drawing-eraser-btn","hero-drawing-eraser-btn"];o.forEach(h=>{const m=document.getElementById(h);if(m){const f=()=>{this.drawingTool="brush",this.updateCursorStyle(),this.refreshDrawingToolButtons()};m.addEventListener("click",f),m.__toolCleanup=()=>m.removeEventListener("click",f)}}),l.forEach(h=>{const m=document.getElementById(h);if(m){const f=()=>{this.drawingTool="eraser",this.updateCursorStyle(),this.refreshDrawingToolButtons()};m.addEventListener("click",f),m.__toolCleanup=()=>m.removeEventListener("click",f)}}),["drawing-clear-btn","hero-drawing-clear-btn"].forEach(h=>{const m=document.getElementById(h);if(m){const f=()=>{this.drawingCtxRef&&this.drawingCtxRef.clearRect(0,0,this.drawingCanvasRef.width,this.drawingCanvasRef.height)};m.addEventListener("click",f),m.__toolCleanup=()=>m.removeEventListener("click",f)}});const c={"brush-thin-btn":"thin","hero-brush-thin-btn":"thin","brush-medium-btn":"medium","hero-brush-medium-btn":"medium","brush-thick-btn":"thick","hero-brush-thick-btn":"thick"};Object.keys(c).forEach(h=>{const m=document.getElementById(h);if(m){const f=()=>{this.brushSizePreset=c[h],this.updateCursorStyle(),this.refreshDrawingToolButtons()};m.addEventListener("click",f),m.__toolCleanup=()=>m.removeEventListener("click",f)}});const p=[];for(let h=0;h<8;h++)p.push(`color-swatch-${h}`,`hero-color-swatch-${h}`);p.forEach(h=>{const m=document.getElementById(h);if(m){const f=()=>{const b=parseInt(h.match(/(\d+)$/)?.[1]??"7");this.drawingColor=this.COLORS[b],this.currentColorIndex=b,this.updateCursorStyle(),this.refreshColorSwatches()};m.addEventListener("click",f),m.__colorCleanup=()=>m.removeEventListener("click",f)}})}},0)}refreshDrawingToolButtons(){const e=["drawing-brush-btn","hero-drawing-brush-btn"],s=["drawing-eraser-btn","hero-drawing-eraser-btn"];e.forEach(n=>{const i=document.getElementById(n);i&&(i.style.background=this.drawingTool==="brush"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)",i.style.border=`2px solid ${this.drawingTool==="brush"?"#4a8a4a":"#d4c4a8"}`,i.style.color=this.drawingTool==="brush"?"#fff":"#5a4a3a")}),s.forEach(n=>{const i=document.getElementById(n);i&&(i.style.background=this.drawingTool==="eraser"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)",i.style.border=`2px solid ${this.drawingTool==="eraser"?"#4a8a4a":"#d4c4a8"}`,i.style.color=this.drawingTool==="eraser"?"#fff":"#5a4a3a")}),["brush-thin-btn","hero-brush-thin-btn","brush-medium-btn","hero-brush-medium-btn","brush-thick-btn","hero-brush-thick-btn"].forEach(n=>{const i=document.getElementById(n);if(i){const r=this.brushSizePreset===(n.includes("thin")?"thin":n.includes("medium")?"medium":"thick");i.style.background=r?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)",i.style.border=`2px solid ${r?"#4a8a4a":"#d4c4a8"}`,i.style.color=r?"#fff":"#5a4a3a"}})}refreshColorSwatches(){for(let e=0;e<8;e++){const s=document.getElementById(`color-swatch-${e}`),t=document.getElementById(`hero-color-swatch-${e}`),n=e===this.currentColorIndex?"2px solid #ffffff":"2px solid transparent";s&&(s.style.border=n),t&&(t.style.border=n)}}exitDrawingMode(e=!1){if(this.removeCustomCursor(),e&&this.drawingCanvasRef){const s=new Image;s.onload=()=>{const t=document.createElement("canvas"),n=t.getContext("2d");t.width=this.drawingCanvasRef.width,t.height=this.drawingCanvasRef.height,n.drawImage(s,0,0,t.width,t.height),n.drawImage(this.drawingCanvasRef,0,0);const i=t.toDataURL("image/png");this.heroEditingDerivedIndex!==null?this.heroDerivedCards[this.heroEditingDerivedIndex].imageData=i:this.isHeroEditMode||this.state.phase==="heroEditor"?this.heroImageData=i:this.currentCard.imageData=i,this.isDrawingMode=!1,this.drawingCanvasRef=null,this.drawingCtxRef=null,this.isHeroEditMode||this.heroEditingDerivedIndex!==null||this.state.phase==="heroEditor"?this.renderHeroEditor():this.renderCardCreator()},s.onerror=()=>{const t=this.drawingCanvasRef.toDataURL("image/png");this.heroEditingDerivedIndex!==null?this.heroDerivedCards[this.heroEditingDerivedIndex].imageData=t:this.isHeroEditMode||this.state.phase==="heroEditor"?this.heroImageData=t:this.currentCard.imageData=t,this.isDrawingMode=!1,this.drawingCanvasRef=null,this.drawingCtxRef=null,this.isHeroEditMode||this.heroEditingDerivedIndex!==null||this.state.phase==="heroEditor"?this.renderHeroEditor():this.renderCardCreator()},s.src=this.drawingBaseImageData||""}else this.isDrawingMode=!1,this.drawingCanvasRef=null,this.drawingCtxRef=null,this.isHeroEditMode||this.heroEditingDerivedIndex!==null||this.state.phase==="heroEditor"?this.renderHeroEditor():this.renderCardCreator()}loadImageAsDataURL(e){return new Promise((s,t)=>{const n=new Image;n.crossOrigin="anonymous",n.onload=()=>{const i=document.createElement("canvas");i.width=n.naturalWidth,i.height=n.naturalHeight;const r=i.getContext("2d");if(!r){t(new Error("无法创建 canvas context"));return}r.drawImage(n,0,0),s(i.toDataURL("image/png"))},n.onerror=()=>t(new Error(`加载图片失败: ${e}`)),n.src=e})}initDrawingCanvas(e){const s=e.getContext("2d");if(!s)return;this.drawingCanvasRef=e,this.drawingCtxRef=s;const t=window.devicePixelRatio||1,n=e.getBoundingClientRect();e.width=n.width*t,e.height=n.height*t,s.scale(t,t),s.lineCap="square",s.lineJoin="miter"}getDrawingSize(){const e={thin:{brush:1,eraser:5},medium:{brush:3,eraser:15},thick:{brush:9,eraser:45}},s=e[this.brushSizePreset]??e.medium;return this.drawingTool==="brush"?s.brush:s.eraser}setupDrawingEvents(e){let s=!1;const t=p=>{const h=e.getBoundingClientRect();let m,f;return"touches"in p?(m=p.touches[0]?.clientX??p.changedTouches[0]?.clientX??0,f=p.touches[0]?.clientY??p.changedTouches[0]?.clientY??0):(m=p.clientX,f=p.clientY),{x:m-h.left,y:f-h.top}},n=()=>{const p={thin:{brush:1,eraser:5},medium:{brush:3,eraser:15},thick:{brush:9,eraser:45}};return p[this.brushSizePreset]??p.medium},i=(p,h)=>{const m=this.drawingCtxRef;if(!m)return;const f=this.drawingTool==="brush"?n().brush:n().eraser;this.drawingTool==="eraser"?m.globalCompositeOperation="destination-out":(m.globalCompositeOperation="source-over",m.fillStyle=this.drawingColor),m.fillRect(p-f/2,h-f/2,f,f)};let r=0,a=0;const o=(p,h)=>{const m=this.drawingTool==="brush"?n().brush:n().eraser,f=p-r,b=h-a,g=Math.sqrt(f*f+b*b);if(g>m){const y=Math.floor(g/m),x=f/g*m,k=b/g*m;for(let u=1;u<=y;u++)i(r+x*u,a+k*u)}else i(p,h);r=p,a=h},l=p=>{p.preventDefault(),s=!0;const h=t(p);r=h.x,a=h.y,i(h.x,h.y),this.updateCustomCursor(h.x+e.getBoundingClientRect().left,h.y+e.getBoundingClientRect().top),this.showCustomCursor()},d=p=>{p.preventDefault();const h=t(p);this.updateCustomCursor(h.x+e.getBoundingClientRect().left,h.y+e.getBoundingClientRect().top),s&&o(h.x,h.y)},c=()=>{s=!1,this.drawingCtxRef&&(this.drawingCtxRef.globalCompositeOperation="source-over")};e.addEventListener("mousedown",l),e.addEventListener("mousemove",d),e.addEventListener("mouseup",c),e.addEventListener("mouseleave",c),e.addEventListener("touchstart",l,{passive:!1}),e.addEventListener("touchmove",d,{passive:!1}),e.addEventListener("touchend",c),e.addEventListener("touchcancel",c),e.__drawingCleanup=()=>{e.removeEventListener("mousedown",l),e.removeEventListener("mousemove",d),e.removeEventListener("mouseup",c),e.removeEventListener("mouseleave",c),e.removeEventListener("touchstart",l),e.removeEventListener("touchmove",d),e.removeEventListener("touchend",c),e.removeEventListener("touchcancel",c)}}createCustomCursor(){if(this.customCursorEl)return;const e=document.createElement("div");e.id="drawing-custom-cursor",e.style.position="fixed",e.style.pointerEvents="none",e.style.zIndex="9999",e.style.display="none",document.body.appendChild(e),this.customCursorEl=e,this.updateCursorStyle()}updateCursorStyle(){if(!this.customCursorEl)return;const e=this.getDrawingSize();this.drawingTool==="brush"?(this.customCursorEl.style.width=e+"px",this.customCursorEl.style.height=e+"px",this.customCursorEl.style.backgroundColor=this.drawingColor,this.customCursorEl.style.outline="1px solid #ffffff"):(this.customCursorEl.style.width=e+"px",this.customCursorEl.style.height=e+"px",this.customCursorEl.style.backgroundColor="#ffffff",this.customCursorEl.style.border="1px solid #000000")}updateCustomCursor(e,s){if(!this.customCursorEl)return;const t=this.getDrawingSize();this.customCursorEl.style.left=e-t/2+"px",this.customCursorEl.style.top=s-t/2+"px"}showCustomCursor(){this.customCursorEl&&(this.customCursorEl.style.display="block")}hideCustomCursor(){this.customCursorEl&&(this.customCursorEl.style.display="none")}removeCustomCursor(){this.customCursorEl&&(document.body.removeChild(this.customCursorEl),this.customCursorEl=null),["card-drawing-canvas","hero-drawing-canvas","hero-derived-drawing-canvas"].forEach(t=>{const n=document.getElementById(t);n&&(n.__drawingCleanup&&n.__drawingCleanup(),n.__cursorCleanup&&n.__cursorCleanup())}),["drawing-brush-btn","hero-drawing-brush-btn","drawing-eraser-btn","hero-drawing-eraser-btn"].forEach(t=>{const n=document.getElementById(t);n&&n.__toolCleanup&&n.__toolCleanup()})}renderCardCreator(){(!this.editingCards||this.editingCards.length===0)&&this.initCardsArray("minion");const e=Object.values(Ee),s=this.currentCard.keywords.some(u=>u.name==="护甲"),t=this.getCurrentEffect(),n=(this.currentCard.effects?.length||0)>0;typeof window<"u"&&(this.isPortraitMode=window.innerWidth/window.innerHeight<3/4);const i=u=>{switch(u){case"死亡时":return["无需目标","卡牌","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];case"打出时":return["无需目标","卡牌","选择目标","选择随从","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];case"回合开始时":case"回合结束时":case"⚙️变量变化时":return["无需目标","卡牌","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];case"攻击时":return["攻击目标","无需目标","卡牌","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];case"失去生命时":return["无需目标","卡牌","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];default:return["无需目标","卡牌","选择目标","选择随从","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"]}},r=()=>{if(!t)return[];const u=t.moments||(t.moment?[t.moment]:[]);if(u.length===0)return[];let w=null;for(const I of u){const S=i(I);w===null?w=[...S]:w=w.filter(T=>S.includes(T))}return w||[]},a=()=>t?t.conditionType?t.conditionType:!t.triggerNumbers||t.triggerNumbers.length===6?"guaranteed":"d6":"guaranteed",o=u=>{const w=a();if(w==="exists_minion"){const $=t?.conditionMinionName||"";return`
        <div class="mt-2 pl-1" onclick="event.stopPropagation()">
          <div style="font-size:11px;color:#5a4a3a;margin-bottom:4px;">随从名称：</div>
          <input type="text" class="condition-minion-name-input" data-editor="${u}" value="${$}"
            style="width:100%;padding:4px 8px;border:1px solid #c0a080;border-radius:4px;font-size:12px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="输入随从名称">
        </div>`}if(w==="target_attr"){const $=["cost","attack","health"],N={cost:"能量花费",attack:"攻击力",health:"生命值"};return`<div class="mt-2 space-y-1 pl-1">${$.map(U=>{const ne=t?.conditionTargetAttrs?.[U],Z=ne?.enabled??!0,re=ne?.operator||"=",q=ne?.value??0,C=["<","=",">"].map(_=>{const Q=(_==="<"?re==="<":_==="="?re==="=":re===">")||(_==="<"&&re==="<="||_===">"&&re===">="||_==="="&&(re==="<="||re===">="));return`<button class="condition-target-op-btn" data-attr="${U}" data-op="${_}" data-editor="${u}"
              style="${Q?"rgba(34,197,94,0.25)":"rgba(212,196,168,0.3)"};border:1px solid ${Q?"#22c55e":"#d4c4a8"};color:${Q?"#22c55e":"#8b7355"};width:28px;height:24px;border-radius:4px;font-size:12px;font-weight:bold;cursor:pointer;">${_==="<"?"＜":_==="="?"＝":"＞"}</button>`}).join("");return`
          <div style="font-size:11px;" onclick="event.stopPropagation()">
            <div class="flex items-center gap-2" style="margin-bottom:3px;">
              <input type="checkbox" class="condition-target-attr-check" data-attr="${U}" data-editor="${u}" ${Z?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              <span style="color:#5a4a3a;">${N[U]}</span>
            </div>
            <div class="flex items-center gap-2">
              ${C}
              <input type="number" class="condition-target-attr-input" data-attr="${U}" data-editor="${u}" value="${q}"
                style="width:45px;padding:2px 4px;border:1px solid #c0a080;border-radius:4px;font-size:11px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="0">
            </div>
          </div>`}).join("")}</div>`}if(!["hero_hp","minion_count","hand_count"].includes(w))return"";const I=t?.conditionSides||["friendly"],S=I.includes("friendly"),T=I.includes("enemy"),D=S&&T,O=t?.conditionSideLogic||"and",P=t?.conditionOperator||"=",B=t?.conditionValue??0;return`
        <div class="mt-2 space-y-2 pl-1" onclick="event.stopPropagation()">
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="checkbox" class="condition-side-check" data-side="friendly" data-editor="${u}" ${S?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              我方
            </label>
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="checkbox" class="condition-side-check" data-side="enemy" data-editor="${u}" ${T?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              敌方
            </label>
          </div>
          ${D?`
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-${u}" class="condition-logic-radio" data-editor="${u}" value="and" ${O==="and"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              与
            </label>
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-${u}" class="condition-logic-radio" data-editor="${u}" value="or" ${O==="or"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              或
            </label>
          </div>
          `:""}
          <div class="flex items-center gap-2">
            ${["<","=",">"].map($=>`<button class="condition-op-btn" data-op="${$}" data-editor="${u}"
                style="${P===$||($==="<"&&P==="<="||$===">"&&P===">="||$==="="&&(P==="<="||P===">="))?"background:rgba(34,197,94,0.25);border:1px solid #22c55e;color:#22c55e;":"background:rgba(212,196,168,0.3);border:1px solid #d4c4a8;color:#8b7355;"}width:32px;height:28px;border-radius:4px;font-size:14px;font-weight:bold;cursor:pointer;">
                ${$==="<"?"＜":$==="="?"＝":"＞"}
              </button>`).join("")}
            <input type="number" class="condition-value-input" data-editor="${u}" value="${B}"
              style="width:55px;padding:2px 6px;border:1px solid #c0a080;border-radius:4px;font-size:12px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;"
              placeholder="0">
          </div>
        </div>
      `},l=()=>{const u=a();if(u==="guaranteed"||!u)return"必然触发";if(u==="d6"){const N=t?.triggerNumbers||[];return N.length>0&&N.length<6?`🎲 D6（${N.join("、")}）`:"🎲 D6"}if(u==="exists_minion"){const N=t?.conditionMinionName?.trim();return N?`存在随从「${N}」`:"存在随从"}if(u==="target_attr"){const N=t?.conditionTargetAttrs;if(!N)return"目标属性";const J=[];for(const U of["cost","attack","health"]){const ne=N[U];if(ne?.enabled){const Z=ne.operator||"=",re=Z==="<="?"≤":Z===">="?"≥":Z;J.push(`${U==="cost"?"能量":U==="attack"?"攻击":"生命"}${re}${ne.value}`)}}return J.length?`目标${J.join("、")}`:"目标属性"}const I={hero_hp:"英雄血量",minion_count:"随从数",hand_count:"手牌数"}[u]||u,S=t?.conditionSides||["friendly"],T=S.includes("friendly")&&S.includes("enemy")?"双方":S.includes("friendly")?"我方":"敌方",D=t?.conditionSideLogic||"and",O=S.includes("friendly")&&S.includes("enemy")?D==="and"?"均":"有一":"",P=t?.conditionOperator||"=",B=P==="<="?"≤":P===">="?"≥":P,$=t?.conditionValue??0;return`${T}${I}${O}${B}${$}`},d=u=>a()===u,c=u=>{const w=d(u),I=u==="guaranteed";return w?I?"background:rgba(34,197,94,0.25);border:2px solid #22c55e;":"background:transparent;border:2px solid #c0a080;":"background:rgba(212,196,168,0.3);border:2px solid #d4c4a8;"},p=()=>{if(!t)return[];const u=[],w=t.targets;w.length>0&&w.every(S=>S==="敌方英雄"||S==="我方英雄"),w.some(S=>S!=="敌方英雄"&&S!=="我方英雄"&&S!=="无需目标");const I=w.some(S=>S==="选择随从"||S==="自己"||S==="我方所有随从"||S==="敌方所有随从");return w.includes("无需目标")&&(u.push("抽牌"),u.push("弃牌"),u.push("获得能量"),u.push("失去能量")),w.includes("卡牌")&&(u.push("召唤"),u.push("获得"),!f.includes("打出时")&&!f.includes("死亡时")&&u.push("变化"),u.push("属性变化")),(!w.includes("无需目标")&&!w.includes("卡牌")||w.length>1)&&(f.includes("攻击时")&&w.some(S=>["攻击目标","攻击者"].includes(S))?u.push("增加伤害"):u.push("造成伤害"),u.push("给予印记"),u.push("治愈"),I&&u.push("属性变化"),I&&u.push("给予词条")),u},h=u=>t?.targets.includes(u)??!1,m=t?.moment,f=t?.moments||(m?[m]:[]),b=u=>f.includes(u),g=t?.targets||[],y=t?.effect,x=document.querySelector(".editor-left-panel-scroll"),k=x?x.scrollTop:void 0;if(this.pendingScrollRestoration?this.pendingScrollRestoration.leftPanelScrollTop=k:k!==void 0&&k>0&&(this.pendingScrollRestoration={selector:".editor-left-panel-scroll",scrollTop:k}),this.isPortraitMode){const u=document.querySelector(".portrait-side-panel-scroll");if(u){const w=u.scrollTop;w>0&&(this.pendingScrollRestoration?this.pendingScrollRestoration.portraitScrollTop=w:this.pendingScrollRestoration={selector:".portrait-side-panel-scroll",scrollTop:w})}}if(this.app.innerHTML=`
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
                  ${this.editingCards.map((u,w)=>`
                    <div class="card-list-item px-3 py-2 rounded-lg cursor-pointer transition-all text-sm ${this.currentCardIndex===w?"ring-2":""}"
                      data-card-index="${w}"
                      style="background: ${this.currentCardIndex===w?"rgba(111, 168, 220, 0.4)":"rgba(212, 196, 168, 0.4)"}; border: 2px solid ${this.currentCardIndex===w?"#6fa8dc":"#d4c4a8"};">
                      <div class="flex items-center justify-between">
                        <div class="flex flex-col flex-1 min-w-0">
                          <div class="font-bold text-sm truncate" style="color: ${w===0?"#5a4a3a":"#4a8a4a"};">${u.name||(w===0?"主卡":`衍生${w}`)}</div>
                          <div class="text-xs" style="color: #8b7355;">${u.type==="spell"?"✨法术":"⚔️随从"} | ${u.cost??1}费 ${u.type!=="spell"?`${u.attack??1}/${u.health??1}`:""}</div>
                        </div>
                        ${w!==0?`
                          <button class="card-list-delete-btn w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ml-2 flex-shrink-0"
                            data-card-index="${w}"
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
                  ${(this.currentCard.effects||[]).map((u,w)=>`
                    <button class="effect-tab px-2 py-1 rounded-lg font-bold text-xs transition-all ${w===this.currentEffectIndex?"ring-2":""}"
                      data-effect-index="${w}"
                      style="background: ${w===this.currentEffectIndex?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${w===this.currentEffectIndex?"#fff":"#5a4a3a"}; border: 2px solid ${w===this.currentEffectIndex?"#4a90d9":"#d4c4a8"};">
                      效果${w+1}
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
              
              ${(()=>{const u=this.currentCard.effects?.[this.currentEffectIndex];if(!u)return"";const w=u.moment||"打出时";return`
              <!-- 法术时刻选择 -->
              <div class="mb-4">
                <button id="toggle-spell-moment-btn-side" class="w-full flex items-center justify-between font-bold text-sm mb-2" style="color: #8b7355;">
                  <span>时刻</span>
                  <span class="text-lg">${this.showMomentPanel?"▼":"▶"}</span>
                </button>
                ${this.showMomentPanel?`
                <div class="space-y-1">
                  ${["打出时","下回合开始时"].map(I=>`
                    <div class="spell-moment-item p-2 rounded-lg cursor-pointer transition-all ${w===I?"selected":""}"
                      data-spell-moment="${I}"
                      style="background: ${w===I?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${w===I?"#6fa8dc":"#d4c4a8"};">
                      <div class="font-bold text-xs" style="color: #5a4a3a;">${I==="打出时"?"":$e[I]}${I}</div>
                    </div>
                  `).join("")}
                </div>
                `:`
                <div class="text-sm" style="color: #8b7355;">
                  ${w}
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
                    ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...u?.moment==="攻击时"?["target_attr"]:[]].map(I=>{const S=this.isConditionSelected(I,u),T=this.getConditionItemStyle(I,u);return`
                        <div class="spell-condition-item-side p-2 rounded-lg cursor-pointer transition-all ${S?"selected":""}"
                          data-spell-condition-side="${I}"
                          style="${T}">
                          <div class="font-bold text-xs" style="color: #5a4a3a;">${I==="guaranteed"?"必然触发":I==="d6"?"🎲 D6":I==="hero_hp"?"英雄血量":I==="minion_count"?"随从数":I==="hand_count"?"手牌数":I==="exists_minion"?"存在随从":"目标属性"}</div>
                          ${I==="d6"&&S?`
                            <div class="flex gap-1 mt-2">
                              ${[1,2,3,4,5,6].map(O=>`
                                <button class="trigger-num-btn w-7 h-7 rounded text-xs font-bold ${(u.triggerNumbers||[1,2,3,4,5,6]).includes(O)?"selected":""}"
                                  data-trigger-num="${O}" data-editor="spell"
                                  style="background: ${(u.triggerNumbers||[1,2,3,4,5,6]).includes(O)?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"#dccfc0"}; color: ${(u.triggerNumbers||[1,2,3,4,5,6]).includes(O)?"#fff":"#8b7355"}; border: 1px solid ${(u.triggerNumbers||[1,2,3,4,5,6]).includes(O)?"#a08060":"#d4c4a8"};">
                                  ${O}
                                </button>
                              `).join("")}
                            </div>
                          `:""}
                          ${S?this.getConditionSubEditor("spell",u):""}
                        </div>
                      `}).join("")}
                  </div>
                `:`
                  <div class="text-sm" style="color: #8b7355;">
                    ${this.getConditionCollapsedText(u)}
                  </div>
                `}
              </div>
              
              <!-- 法术目标选择 -->
              <div class="mb-4">
                <button id="toggle-spell-target-btn-side" class="w-full flex items-center justify-between font-bold text-sm mb-2" style="color: #8b7355;">
                  <div class="flex items-center gap-2">
                    <span>目标</span>
                    ${u.targets?.length>1||u.targets?.includes("我方所有随从")||u.targets?.includes("敌方所有随从")?`
                      <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                        <input type="checkbox" id="random-target-check-spell-side" ${u.isRandomTarget?"checked":""}
                          style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                        随机
                      </label>
                      ${u.isRandomTarget?`
                        <label class="flex items-center gap-1" style="font-size: 11px; color: #a08060; font-weight: normal;">
                          次数
                          <input type="number" id="random-target-times-spell-side" value="${u.randomTargetTimes??1}" min="1" max="99"
                            style="width: 35px; height: 18px; font-size: 11px; background: rgba(255,255,255,0.5); border: 1px solid #d4c4a8; border-radius: 4px; text-align: center; color: #5a4a3a;">
                        </label>
                      `:""}
                    `:""}
                  </div>
                  <span class="flex items-center gap-2">
                    ${!this.showTargetPanel&&(u.targets?.includes("无需目标")||u.targets?.includes("卡牌"))?`
                      <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;" onclick="event.stopPropagation()">
                        <input type="checkbox" id="opponent-checkbox-spell-side" ${u.isOpponent?"checked":""} style="accent-color: #c4a574;">
                        <span>对手</span>
                      </label>
                    `:""}
                    <span class="text-lg">${this.showTargetPanel?"▼":"▶"}</span>
                  </span>
                </button>
                ${this.showTargetPanel?`
                <div class="space-y-1 max-h-40 overflow-y-auto target-scroll-container">
                  ${["无需目标","卡牌","选择目标","选择随从","我方英雄","敌方英雄","我方所有随从","敌方所有随从"].map(I=>`
                    <div class="spell-target-item p-2 rounded-lg cursor-pointer transition-all ${u.targets?.includes(I)?"selected":""}"
                      data-spell-target="${I}"
                      style="background: ${u.targets?.includes(I)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${u.targets?.includes(I)?"#f5a623":"#d4c4a8"};">
                      <div class="font-bold text-xs" style="color: #5a4a3a;">${I}</div>
                    </div>
                  `).join("")}
                </div>
                `:`
                <div class="text-sm" style="color: #8b7355;">
                  ${u.targets?.length>0?`${u.isOpponent?"对手 ":""}${u.targets.join("、")}`:"点击展开选择"}
                </div>
                `}
              </div>
              
              ${u.targets?.length>0?`
              <!-- 法术效果选择 -->
              <div class="mb-4">
                <div class="font-bold text-sm mb-2" style="color: #8b7355;">效果</div>
                <div class="space-y-1">
                  ${(()=>{const I=u.targets||[],S=[],T=u.moments||(u.moment?[u.moment]:[]),D=I.some(O=>O==="选择随从"||O==="自己"||O==="我方所有随从"||O==="敌方所有随从");return I.includes("无需目标")&&S.push("抽牌","弃牌","获得能量","失去能量"),I.includes("卡牌")&&(S.push("召唤","获得"),!T.includes("打出时")&&!T.includes("死亡时")&&S.push("变化"),S.push("属性变化")),(!I.includes("无需目标")&&!I.includes("卡牌")||I.length>1)&&(S.push("造成伤害","给予印记","治愈"),D&&S.push("属性变化")),S.map(O=>`
                      <div class="spell-effect-item p-2 rounded-lg cursor-pointer transition-all ${u.effect===O?"selected":""}"
                        data-spell-effect-type="${O}"
                        style="background: ${u.effect===O?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${u.effect===O?"#e07070":"#d4c4a8"};">
                        <div class="font-bold text-xs" style="color: #5a4a3a;">${O}</div>
                      </div>
                    `).join("")})()}
                </div>
                
                ${u.effect?`
                  <div class="mt-2 pt-2" style="border-top: 1px solid #d4c4a8;">
                    ${u.effect==="属性变化"?`
                      <div class="space-y-1">
                        ${u.targets?.includes("卡牌")?`
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-xs mr-1" style="color: #8b7355;">费:</label>
                          <input type="number" id="spell-cost-value-side" value="${u.costValue}" min="0" max="99"
                            class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-1"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="spell-cost-positive-btn-side" class="w-6 h-6 rounded font-bold text-xs ${u.costValue===0?"opacity-50":""}"
                            style="background: ${u.costValue===0?"#999":!u.isCostSet&&u.isCostPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.costValue===0?"#777":!u.isCostSet&&u.isCostPositive?"#4a8a4a":"#aaa"};">
                            +
                          </button>
                          <button id="spell-cost-zero-btn-side" class="w-6 h-6 rounded font-bold text-xs ${u.costValue===0?"":"opacity-50"}"
                            style="background: ${u.costValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.costValue===0?"#3a7ab0":"#aaa"};">
                            0
                          </button>
                          <button id="spell-cost-negative-btn-side" class="w-6 h-6 rounded font-bold text-xs ${u.costValue===0?"opacity-50":""}"
                            style="background: ${u.costValue===0?"#999":!u.isCostSet&&!u.isCostPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.costValue===0?"#777":!u.isCostSet&&!u.isCostPositive?"#a04040":"#aaa"};">
                            -
                          </button>
                          <button id="spell-cost-set-btn-side" class="w-6 h-6 rounded font-bold text-xs ${u.costValue===0?"opacity-50":""}"
                            style="background: ${u.costValue===0?"#999":u.isCostSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.costValue===0?"#777":u.isCostSet?"#b89020":"#aaa"};">
                            =
                          </button>
                        </div>
                        `:""}
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-xs mr-1" style="color: #8b7355;">攻:</label>
                          <input type="number" id="spell-attack-value-side" value="${u.attackValue}" min="0" max="99"
                            class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-1"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="spell-attack-positive-btn-side" class="w-6 h-6 rounded font-bold text-xs ${u.attackValue===0?"opacity-50":""}"
                            style="background: ${u.attackValue===0?"#999":!u.isAttackSet&&u.isAttackPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.attackValue===0?"#777":!u.isAttackSet&&u.isAttackPositive?"#4a8a4a":"#aaa"};">
                            +
                          </button>
                          <button id="spell-attack-zero-btn-side" class="w-6 h-6 rounded font-bold text-xs ${u.attackValue===0?"":"opacity-50"}"
                            style="background: ${u.attackValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.attackValue===0?"#3a7ab0":"#aaa"};">
                            0
                          </button>
                          <button id="spell-attack-negative-btn-side" class="w-6 h-6 rounded font-bold text-xs ${u.attackValue===0?"opacity-50":""}"
                            style="background: ${u.attackValue===0?"#999":!u.isAttackSet&&!u.isAttackPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.attackValue===0?"#777":!u.isAttackSet&&!u.isAttackPositive?"#a04040":"#aaa"};">
                            -
                          </button>
                          <button id="spell-attack-set-btn-side" class="w-6 h-6 rounded font-bold text-xs ${u.attackValue===0?"opacity-50":""}"
                            style="background: ${u.attackValue===0?"#999":u.isAttackSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.attackValue===0?"#777":u.isAttackSet?"#b89020":"#aaa"};">
                            =
                          </button>
                        </div>
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-xs mr-1" style="color: #8b7355;">血:</label>
                          <input type="number" id="spell-health-value-side" value="${u.healthValue}" min="0" max="99"
                            class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-1"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="spell-health-positive-btn-side" class="w-6 h-6 rounded font-bold text-xs ${u.healthValue===0?"opacity-50":""}"
                            style="background: ${u.healthValue===0?"#999":!u.isHealthSet&&u.isHealthPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.healthValue===0?"#777":!u.isHealthSet&&u.isHealthPositive?"#4a8a4a":"#aaa"};">
                            +
                          </button>
                          <button id="spell-health-zero-btn-side" class="w-6 h-6 rounded font-bold text-xs ${u.healthValue===0?"":"opacity-50"}"
                            style="background: ${u.healthValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.healthValue===0?"#3a7ab0":"#aaa"};">
                            0
                          </button>
                          <button id="spell-health-negative-btn-side" class="w-6 h-6 rounded font-bold text-xs ${u.healthValue===0?"opacity-50":""}"
                            style="background: ${u.healthValue===0?"#999":!u.isHealthSet&&!u.isHealthPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.healthValue===0?"#777":!u.isHealthSet&&!u.isHealthPositive?"#a04040":"#aaa"};">
                            -
                          </button>
                          <button id="spell-health-set-btn-side" class="w-6 h-6 rounded font-bold text-xs ${u.healthValue===0?"opacity-50":""}"
                            style="background: ${u.healthValue===0?"#999":u.isHealthSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.healthValue===0?"#777":u.isHealthSet?"#b89020":"#aaa"};">
                            =
                          </button>
                        </div>
                      </div>
                    `:`
                      <div class="flex items-center gap-2">
                        <label class="font-bold text-xs" style="color: #8b7355;">数值:</label>
                        <input type="number" id="spell-effect-value-side" value="${u.value}" min="1" max="99"
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
                  ${e.map(u=>`
                    <div class="keyword-item p-2 rounded-lg cursor-pointer transition-all ${this.currentCard.keywords.some(w=>w.name===u.name)?"selected":""}"
                      data-keyword-name="${u.name}"
                      style="background: ${this.currentCard.keywords.some(w=>w.name===u.name)?"rgba(124, 184, 124, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${this.currentCard.keywords.some(w=>w.name===u.name)?"#7cb87c":"#d4c4a8"};">
                      <div class="font-bold text-xs" style="color: #5a4a3a;">${u.name}</div>
                      <div class="text-xs" style="color: #8b7355;">${u.description}</div>
                    </div>
                  `).join("")}
                  <div class="clear-keywords-btn p-2 rounded-lg cursor-pointer transition-all mt-2" 
                    style="background: rgba(200, 100, 100, 0.12); border: 2px dashed #c86464;">
                    <div class="font-bold text-xs" style="color: #c86464; text-align: center;">清空词条</div>
                  </div>
                </div>
                `:`
                <div class="text-xs" style="color: #8b7355;">
                  ${this.currentCard.keywords.length>0?this.currentCard.keywords.map(u=>u.name).join("、"):"点击▶展开"}
                </div>
                `}
              </div>
              `}
              
              <!-- 多技能效果切换 -->
              <div class="mb-3">
                <div class="font-bold text-sm mb-2" style="color: #8b7355;">技能</div>
                <div class="flex items-center gap-2 flex-wrap">
                  ${(this.currentCard.effects||[]).map((u,w)=>`
                    <button class="effect-tab px-2 py-1 rounded-lg font-bold text-xs transition-all ${w===this.currentEffectIndex?"ring-2":""}"
                      data-effect-index="${w}"
                      style="background: ${w===this.currentEffectIndex?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${w===this.currentEffectIndex?"#fff":"#5a4a3a"}; border: 2px solid ${w===this.currentEffectIndex?"#4a90d9":"#d4c4a8"};">
                      技能${w+1}
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
              
              ${n&&t?`
              <!-- 时刻选择 -->
              <div class="mb-2">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-sm" style="color: #8b7355;">时刻</span>
                </div>
                <div class="flex gap-1 flex-wrap">
                  ${["打出时","死亡时","攻击时","失去生命时","回合结束时","回合开始时","下回合开始时"].filter(u=>this.currentCardIndex===0||u!=="打出时").map(u=>`
                    <div class="moment-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${b(u)?"selected":""}"
                      data-moment="${u}"
                      style="background: ${b(u)?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${b(u)?"#6fa8dc":"#d4c4a8"};">
                      ${$e[u]+u}
                    </div>
                  `).join("")}
                </div>

              </div>
              `:""}
              
              <!-- 条件选择 -->
              ${n&&t?`
              <div class="mb-2">
                <div class="flex items-center gap-2 mb-2">
                  <span class="font-bold text-sm" style="color: #8b7355;">条件</span>
                </div>
                <div class="space-y-1">
                  ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...t&&t.moment==="攻击时"?["target_attr"]:[]].map(u=>{const w=d(u),I=c(u);return`
                      <div class="condition-item-spell p-2 rounded-lg cursor-pointer transition-all ${w?"selected":""}"
                        data-spell-condition="${u}"
                        data-editor="spell"
                        style="${I}">
                        <div class="font-bold text-xs" style="color: #5a4a3a;">${u==="guaranteed"?"必然触发":u==="d6"?"🎲 D6":u==="hero_hp"?"英雄血量":u==="minion_count"?"随从数":u==="hand_count"?"手牌数":u==="exists_minion"?"存在随从":"目标属性"}</div>
                        ${u==="d6"&&w?`
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
                        ${w?o("spell"):""}
                      </div>
                    `}).join("")}
                </div>
              </div>
              `:""}
              
              <!-- 目标选择 -->
              ${f.length>0?`
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
                  ${r().map(u=>`
                    <div class="target-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${h(u)?"selected":""}"
                      data-target="${u}"
                      style="background: ${h(u)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${h(u)?"#f5a623":"#d4c4a8"};">
                      ${u}
                    </div>
                  `).join("")}
                </div>
              </div>
              `:""}
              
              <!-- 效果选择 -->
              ${m&&g.length>0?`
              <div class="mb-2">
                <div class="font-bold text-sm mb-2" style="color: #8b7355;">效果</div>
                <div class="flex flex-wrap gap-1">
                  ${p().map(u=>`
                    <div class="effect-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${y===u?"selected":""}"
                      data-effect="${u}"
                      style="background: ${y===u?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${y===u?"#e07070":"#d4c4a8"};">
                      ${u}
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
                              ${(()=>{const u=[{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],w=t.summonSource??"my_hand";return u.map(I=>`
                                  <div class="summon-source-btn-2 px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${w===I.key?"selected":""}"
                                    data-source="${I.key}"
                                    style="background: ${w===I.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${w===I.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                    ${I.label}
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
                          ${Object.values(Ee).filter(u=>u.name!=="准备").map(u=>{const w=t.grantedKeywordName===u.name,I=["🔥","❄️","⚡️"].includes(u.name);return`
                              <div class="grant-keyword-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${w?"selected":""}"
                                data-grant-keyword="${u.name}"
                                style="background: ${w?"rgba(139, 115, 85, 0.35)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${w?"#8b7355":"#d4c4a8"}; font-size: ${I?"14px":"11px"};">
                                ${u.name}
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
                            ${(()=>{const u=[{key:"derived",label:"衍生卡"},{key:"deck_top",label:"抽牌堆顶"},{key:"discard_top",label:"弃牌堆顶"},{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],w=t.summonSource??"derived";return u.map(I=>`
                                <div class="summon-source-btn px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${w===I.key?"selected":""}"
                                  data-source="${I.key}"
                                  style="background: ${w===I.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${w===I.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                  ${I.label}
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
                          ${(()=>{const u=t.isRandom?t.summonedCardIndices??[]:t.summonedCardIndex!==void 0?[t.summonedCardIndex]:[];return this.editingCards.map((I,S)=>{if((y==="变化"||y==="召唤")&&I.type==="spell"||y==="变化"&&S===this.currentCardIndex||y==="召唤"&&f.includes("打出时")&&S===this.currentCardIndex)return null;const T=u.includes(S);return`
                                <div class="summon-card-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${T?"selected":""}"
                                  data-summon-index="${S}"
                                  style="background: ${T?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${T?"#6fa8dc":"#d4c4a8"};">
                                  ${I.name||"未命名"}
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
                ${this.editingCards.map((u,w)=>`
                  <div class="card-list-item px-3 py-2 rounded-lg cursor-pointer transition-all text-sm ${this.currentCardIndex===w?"ring-2":""}"
                    data-card-index="${w}"
                    style="background: ${this.currentCardIndex===w?"rgba(111, 168, 220, 0.4)":"rgba(212, 196, 168, 0.4)"}; border: 2px solid ${this.currentCardIndex===w?"#6fa8dc":"#d4c4a8"};">
                    <div class="flex items-center justify-between">
                      <div class="flex flex-col flex-1 min-w-0">
                        <div class="font-bold text-sm truncate" style="color: ${w===0?"#5a4a3a":"#4a8a4a"};">${u.name||(w===0?"主卡":`衍生${w}`)}</div>
                        <div class="text-xs" style="color: #8b7355;">${u.type==="spell"?"✨法术":"⚔️随从"} | ${u.cost??1}费 ${u.type!=="spell"?`${u.attack??1}/${u.health??1}`:""}</div>
                      </div>
                      ${w!==0?`
                        <button class="card-list-delete-btn w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ml-2 flex-shrink-0"
                          data-card-index="${w}"
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
                ${(this.currentCard.effects||[]).map((u,w)=>`
                  <button class="effect-tab px-3 py-1 rounded-lg font-bold text-sm transition-all ${w===this.currentEffectIndex?"ring-2":""}"
                    data-effect-index="${w}"
                    style="background: ${w===this.currentEffectIndex?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${w===this.currentEffectIndex?"#fff":"#5a4a3a"}; border: 2px solid ${w===this.currentEffectIndex?"#4a90d9":"#d4c4a8"};">
                    效果${w+1}
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
            
            ${(()=>{const u=this.currentCard.effects?.[this.currentEffectIndex];if(!u)return"";const w=u.moment||"打出时";return`
              <!-- 法术时刻选择 -->
              <div class="p-2" style="border-bottom: 1px solid #c0a080;">
                <button id="toggle-spell-moment-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <span>时刻</span>
                <span class="text-lg">${this.showMomentPanel?"▼":"▶"}</span>
              </button>
              ${this.showMomentPanel?`
                <div class="mt-2 space-y-1">
                  ${["打出时","下回合开始时"].map(I=>`
                    <div class="spell-moment-item p-2 rounded-lg cursor-pointer transition-all ${w===I?"selected":""}"
                      data-spell-moment="${I}"
                      style="background: ${w===I?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${w===I?"#6fa8dc":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${I==="打出时"?"":$e[I]}${I}</div>
                    </div>
                  `).join("")}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${w==="打出时"?"打出时":`${$e[w]}${w}`}
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
                    ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...u?.moment==="攻击时"?["target_attr"]:[]].map(I=>{const S=this.isConditionSelected(I,u),T=this.getConditionItemStyle(I,u);return`
                        <div class="spell-condition-item p-2 rounded-lg cursor-pointer transition-all ${S?"selected":""}"
                          data-spell-condition="${I}"
                          style="${T}">
                          <div class="font-bold text-sm" style="color: #5a4a3a;">${I==="guaranteed"?"必然触发":I==="d6"?"🎲 D6":I==="hero_hp"?"英雄血量":I==="minion_count"?"随从数":I==="hand_count"?"手牌数":I==="exists_minion"?"存在随从":"目标属性"}</div>
                          ${I==="d6"&&S?`
                            <div class="flex gap-1 mt-2">
                              ${[1,2,3,4,5,6].map(O=>`
                                <button class="trigger-num-btn w-7 h-7 rounded text-xs font-bold ${(u.triggerNumbers||[1,2,3,4,5,6]).includes(O)?"selected":""}"
                                  data-trigger-num="${O}" data-editor="spell"
                                  style="background: ${(u.triggerNumbers||[1,2,3,4,5,6]).includes(O)?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"#dccfc0"}; color: ${(u.triggerNumbers||[1,2,3,4,5,6]).includes(O)?"#fff":"#8b7355"}; border: 1px solid ${(u.triggerNumbers||[1,2,3,4,5,6]).includes(O)?"#a08060":"#d4c4a8"};">
                                  ${O}
                                </button>
                              `).join("")}
                            </div>
                          `:""}
                          ${S?this.getConditionSubEditor("spell",u):""}
                        </div>
                      `}).join("")}
                  </div>
                `:`
                  <div class="mt-1 text-sm" style="color: #8b7355;">
                    ${this.getConditionCollapsedText(u)}
                  </div>
                `}
              </div>
            
              <!-- 法术目标选择 -->
              <div class="p-2" style="border-bottom: 1px solid #c0a080;">
                <button id="toggle-spell-target-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <div class="flex items-center gap-2">
                  <span>目标</span>
                  ${u.targets?.length>1||u.targets?.includes("我方所有随从")||u.targets?.includes("敌方所有随从")?`
                    <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                      <input type="checkbox" id="random-target-check-spell" ${u.isRandomTarget?"checked":""}
                        style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                      随机
                    </label>
                    ${u.isRandomTarget?`
                      <label class="flex items-center gap-1" style="font-size: 11px; color: #a08060; font-weight: normal;">
                        次数
                        <input type="number" id="random-target-times-spell" value="${u.randomTargetTimes??1}" min="1" max="99"
                          style="width: 35px; height: 18px; font-size: 11px; background: rgba(255,255,255,0.5); border: 1px solid #d4c4a8; border-radius: 4px; text-align: center; color: #5a4a3a;">
                      </label>
                    `:""}
                  `:""}
                </div>
                <span class="flex items-center gap-2">
                  ${!this.showTargetPanel&&(u.targets?.includes("无需目标")||u.targets?.includes("卡牌"))?`
                    <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;" onclick="event.stopPropagation()">
                      <input type="checkbox" id="opponent-checkbox-spell" ${u.isOpponent?"checked":""} style="accent-color: #c4a574;">
                      <span>对手</span>
                    </label>
                  `:""}
                  <span class="text-lg">${this.showTargetPanel?"▼":"▶"}</span>
                </span>
              </button>
              ${this.showTargetPanel?`
                <div class="mt-2 space-y-1 max-h-40 overflow-y-auto target-scroll-container">
                  ${["无需目标","卡牌","选择目标","选择随从","我方英雄","敌方英雄","我方所有随从","敌方所有随从"].map(I=>`
                    <div class="spell-target-item p-2 rounded-lg cursor-pointer transition-all ${u.targets?.includes(I)?"selected":""}"
                      data-spell-target="${I}"
                      style="background: ${u.targets?.includes(I)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${u.targets?.includes(I)?"#f5a623":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${I}</div>
                    </div>
                  `).join("")}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${u.targets?.length>0?`${u.isOpponent?"对手 ":""}${u.targets.join("、")}`:"点击展开选择"}
                </div>
              `}
              </div>
            
            ${u.targets?.length>0?`
              <!-- 法术效果选择 -->
              <div class="p-2">
                <button id="toggle-spell-effect-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <span>效果</span>
                <span class="text-lg">${this.showEffectPanel?"▼":"▶"}</span>
              </button>
              ${this.showEffectPanel?`
                <div class="mt-2 space-y-1">
                  ${(()=>{const I=u.targets||[],S=[],T=u.moments||(u.moment?[u.moment]:[]),D=I.some(O=>O==="选择随从"||O==="自己"||O==="我方所有随从"||O==="敌方所有随从");return I.includes("无需目标")&&S.push("抽牌","弃牌","获得能量","失去能量"),I.includes("卡牌")&&(S.push("召唤","获得"),!T.includes("打出时")&&!T.includes("死亡时")&&S.push("变化"),S.push("属性变化")),(!I.includes("无需目标")&&!I.includes("卡牌")||I.length>1)&&(S.push("造成伤害","给予印记","治愈"),D&&S.push("属性变化")),S.map(O=>`
                      <div class="spell-effect-item p-2 rounded-lg cursor-pointer transition-all ${u.effect===O?"selected":""}"
                        data-spell-effect-type="${O}"
                        style="background: ${u.effect===O?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${u.effect===O?"#e07070":"#d4c4a8"};">
                        <div class="font-bold text-sm" style="color: #5a4a3a;">${O}</div>
                      </div>
                    `).join("")})()}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${u.effect||"点击展开选择"}
                </div>
              `}
              
              <!-- 效果数值（选中效果后始终显示在折叠栏下方） -->
              ${u.effect?`
                <div class="mt-3 pt-3" style="border-top: 2px solid #d4c4a8;">
                  ${u.effect==="属性变化"?`
                    <div class="space-y-2">
                      ${u.targets?.includes("卡牌")?`
                      <div class="flex items-center gap-0">
                        <label class="font-bold text-sm mr-2" style="color: #8b7355;">费用:</label>
                        <input type="number" id="spell-cost-value" value="${u.costValue}" min="0" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        <button id="spell-cost-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${u.costValue===0?"opacity-50":""}"
                          style="background: ${u.costValue===0?"#999":!u.isCostSet&&u.isCostPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.costValue===0?"#777":!u.isCostSet&&u.isCostPositive?"#4a8a4a":"#aaa"};">
                          +
                        </button>
                        <button id="spell-cost-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${u.costValue===0?"":"opacity-50"}"
                          style="background: ${u.costValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.costValue===0?"#3a7ab0":"#aaa"};">
                          0
                        </button>
                        <button id="spell-cost-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${u.costValue===0?"opacity-50":""}"
                          style="background: ${u.costValue===0?"#999":!u.isCostSet&&!u.isCostPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.costValue===0?"#777":!u.isCostSet&&!u.isCostPositive?"#a04040":"#aaa"};">
                          -
                        </button>
                        <button id="spell-cost-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${u.costValue===0?"opacity-50":""}"
                          style="background: ${u.costValue===0?"#999":u.isCostSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.costValue===0?"#777":u.isCostSet?"#b89020":"#aaa"};">
                          =
                        </button>
                      </div>
                      `:""}
                      <div class="flex items-center gap-0">
                        <label class="font-bold text-sm mr-2" style="color: #8b7355;">攻击:</label>
                        <input type="number" id="spell-attack-value" value="${u.attackValue}" min="0" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        <button id="spell-attack-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${u.attackValue===0?"opacity-50":""}"
                          style="background: ${u.attackValue===0?"#999":!u.isAttackSet&&u.isAttackPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.attackValue===0?"#777":!u.isAttackSet&&u.isAttackPositive?"#4a8a4a":"#aaa"};">
                          +
                        </button>
                        <button id="spell-attack-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${u.attackValue===0?"":"opacity-50"}"
                          style="background: ${u.attackValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.attackValue===0?"#3a7ab0":"#aaa"};">
                          0
                        </button>
                        <button id="spell-attack-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${u.attackValue===0?"opacity-50":""}"
                          style="background: ${u.attackValue===0?"#999":!u.isAttackSet&&!u.isAttackPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.attackValue===0?"#777":!u.isAttackSet&&!u.isAttackPositive?"#a04040":"#aaa"};">
                          -
                        </button>
                        <button id="spell-attack-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${u.attackValue===0?"opacity-50":""}"
                          style="background: ${u.attackValue===0?"#999":u.isAttackSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.attackValue===0?"#777":u.isAttackSet?"#b89020":"#aaa"};">
                          =
                        </button>
                      </div>
                      <div class="flex items-center gap-0">
                        <label class="font-bold text-sm mr-2" style="color: #8b7355;">生命:</label>
                        <input type="number" id="spell-health-value" value="${u.healthValue}" min="0" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        <button id="spell-health-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${u.healthValue===0?"opacity-50":""}"
                          style="background: ${u.healthValue===0?"#999":!u.isHealthSet&&u.isHealthPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.healthValue===0?"#777":!u.isHealthSet&&u.isHealthPositive?"#4a8a4a":"#aaa"};">
                          +
                        </button>
                        <button id="spell-health-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${u.healthValue===0?"":"opacity-50"}"
                          style="background: ${u.healthValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.healthValue===0?"#3a7ab0":"#aaa"};">
                          0
                        </button>
                        <button id="spell-health-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${u.healthValue===0?"opacity-50":""}"
                          style="background: ${u.healthValue===0?"#999":!u.isHealthSet&&!u.isHealthPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.healthValue===0?"#777":!u.isHealthSet&&!u.isHealthPositive?"#a04040":"#aaa"};">
                          -
                        </button>
                        <button id="spell-health-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${u.healthValue===0?"opacity-50":""}"
                          style="background: ${u.healthValue===0?"#999":u.isHealthSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${u.healthValue===0?"#777":u.isHealthSet?"#b89020":"#aaa"};">
                          =
                        </button>
                      </div>
                    </div>
                  `:`
                    <div class="flex items-center gap-2">
                      <label class="font-bold text-sm" style="color: #8b7355;">数值:</label>
                      <input type="number" id="spell-effect-value" value="${u.value}" min="1" max="99"
                        class="w-16 px-2 py-1 rounded-lg outline-none text-center text-sm"
                        style="border: 2px solid #d4c4a8; background: #faf8f5;">
                    </div>
                  `}
                  ${u.effect==="造成伤害"?`
                    <div class="flex items-center gap-2">
                      <label class="font-bold text-sm" style="color: #8b7355;">元素:</label>
                      <div class="flex gap-1">
                        <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${u.elementType?"":"selected"}"
                          data-element-type="" data-spell="1"
                          style="background: ${u.elementType?"rgba(212, 196, 168, 0.2)":"rgba(212, 196, 168, 0.6)"}; border: 2px solid ${u.elementType?"transparent":"#d4c4a8"};">
                          无
                        </div>
                        <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${u.elementType==="fire"?"selected":""}"
                          data-element-type="fire" data-spell="1"
                          style="background: ${u.elementType==="fire"?"rgba(255, 140, 0, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${u.elementType==="fire"?"#ff8c00":"transparent"};">
                          🔥
                        </div>
                        <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${u.elementType==="ice"?"selected":""}"
                          data-element-type="ice" data-spell="1"
                          style="background: ${u.elementType==="ice"?"rgba(100, 180, 255, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${u.elementType==="ice"?"#64b4ff":"transparent"};">
                          ❄️
                        </div>
                        <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${u.elementType==="lightning"?"selected":""}"
                          data-element-type="lightning" data-spell="1"
                          style="background: ${u.elementType==="lightning"?"rgba(160, 80, 255, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${u.elementType==="lightning"?"#a050ff":"transparent"};">
                          ⚡️
                        </div>
                      </div>
                    </div>
                  `:""}
                  ${["召唤","获得","变化"].includes(u.effect)||u.effect==="属性变化"&&u.targets?.includes("卡牌")?`
                    <div class="mt-2">
                      <div class="mb-1">
                        <div class="font-bold text-sm mb-1" style="color: #8b7355;">来源</div>
                        <div class="flex flex-wrap gap-1">
                          ${(()=>{const I=u.effect==="属性变化"?[{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}]:[{key:"derived",label:"衍生卡"},{key:"deck_top",label:"抽牌堆顶"},{key:"discard_top",label:"弃牌堆顶"},{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],S=u.effect==="属性变化"?u.summonSource??"my_hand":u.summonSource??"derived";return I.map(T=>`
                              <div class="spell-summon-source-btn px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${S===T.key?"selected":""}"
                                data-source="${T.key}"
                                style="background: ${S===T.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${S===T.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                ${T.label}
                              </div>
                            `).join("")})()}
                        </div>
                      </div>
                      <div class="flex items-center justify-between mb-1">
                        <div class="font-bold text-sm" style="color: #8b7355;">${u.effect==="属性变化"?"卡牌属性变化":u.effect==="召唤"?"召唤卡牌":u.effect==="获得"?"获得卡牌":"变化为"}</div>
                        <div class="flex items-center gap-2">
                          <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;">
                            <input type="checkbox" id="spell-summon-random-checkbox" class="cursor-pointer" ${u.isRandom?"checked":""}>
                            <span>随机</span>
                          </label>
                          ${u.effect==="召唤"||u.effect==="获得"?`
                          <div class="flex items-center gap-1">
                            <span class="text-xs" style="color: #8b7355;">数量</span>
                            <input type="number" id="spell-summon-count-input" value="${u.value||1}" min="1" max="99"
                              class="w-12 h-6 text-center text-xs border rounded"
                              style="background: rgba(212, 196, 168, 0.2); border-color: #d4c4a8; color: #5a4a3a;">
                          </div>
                          `:""}
                        </div>
                      </div>
                      ${u.effect!=="属性变化"&&(u.summonSource??"derived")==="derived"?`
                      <div class="flex flex-col gap-1 max-h-24 overflow-y-auto">
                        ${(()=>{const I=u.isRandom?u.summonedCardIndices??[]:u.summonedCardIndex!==void 0?[u.summonedCardIndex]:[];return this.editingCards.map((T,D)=>{if((u.effect==="变化"||u.effect==="召唤")&&T.type==="spell"||u.effect==="变化"&&D===this.currentCardIndex||u.effect==="召唤"&&ze(u,"打出时")&&D===this.currentCardIndex)return null;const O=I.includes(D);return`
                              <div class="spell-summon-card-item px-2 py-1 rounded-lg cursor-pointer transition-all text-sm ${O?"selected":""}"
                                data-spell-summon-index="${D}"
                                style="background: ${O?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${O?"#6fa8dc":"#d4c4a8"};">
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
                  ${e.map(u=>`
                    <div class="keyword-item p-2 rounded-lg cursor-pointer transition-all ${this.currentCard.keywords.some(w=>w.name===u.name)?"selected":""}"
                      data-keyword-name="${u.name}"
                      style="background: ${this.currentCard.keywords.some(w=>w.name===u.name)?"rgba(124, 184, 124, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${this.currentCard.keywords.some(w=>w.name===u.name)?"#7cb87c":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${u.name}</div>
                      <div class="text-xs" style="color: #8b7355;">${u.description}</div>
                    </div>
                  `).join("")}
                  <div class="clear-keywords-btn p-2 rounded-lg cursor-pointer transition-all mt-2" 
                    style="background: rgba(200, 100, 100, 0.12); border: 2px dashed #c86464;">
                    <div class="font-bold text-sm" style="color: #c86464; text-align: center;">清空词条</div>
                  </div>
                </div>
              `:`
                <div class="mt-2 text-sm" style="color: #8b7355;">
                  ${this.currentCard.keywords.length>0?this.currentCard.keywords.map(u=>u.name).join("、"):"点击展开选择"}
                </div>
              `}
            </div>
            <!-- 随从效果编辑统一容器 -->
            <div class="p-3 rounded-xl" style="background: rgba(255, 255, 255, 0.9); border: 2px solid #c0a080;">
              <!-- 多技能效果切换 -->
              <div class="p-2" style="border-bottom: 1px solid #c0a080;">
              <div class="flex items-center gap-2 flex-wrap">
                ${(this.currentCard.effects||[]).map((u,w)=>`
                  <button class="effect-tab px-3 py-1 rounded-lg font-bold text-sm transition-all ${w===this.currentEffectIndex?"ring-2":""}"
                    data-effect-index="${w}"
                    style="background: ${w===this.currentEffectIndex?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${w===this.currentEffectIndex?"#fff":"#5a4a3a"}; border: 2px solid ${w===this.currentEffectIndex?"#4a90d9":"#d4c4a8"};">
                    技能${w+1}${u.moment?`(${u.moment})`:""}
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
            
            ${n&&t?`
            <!-- 时刻选择框 -->
            <div class="p-2" style="border-bottom: 1px solid #c0a080;">
              <button id="toggle-moment-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <span>时刻</span>
                <span class="text-lg">${this.showMomentPanel?"▼":"▶"}</span>
              </button>
              ${this.showMomentPanel?`
                <div class="mt-2 space-y-1">
                  ${["打出时","死亡时","攻击时","失去生命时","回合结束时","回合开始时","下回合开始时"].filter(u=>this.currentCardIndex===0||u!=="打出时").map(u=>`
                    <div class="moment-item p-2 rounded-lg cursor-pointer transition-all ${b(u)?"selected":""}"
                      data-moment="${u}"
                      style="background: ${b(u)?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${b(u)?"#6fa8dc":"#d4c4a8"};">
                      <div class="font-bold text-xs" style="color: #5a4a3a;">${$e[u]+u}</div>
                    </div>
                  `).join("")}
                </div>
                ${f.includes("⚙️变量变化时")?`
                <div class="flex items-center gap-2 mt-2 flex-wrap">
                  <button id="variable-select-btn-lg" class="px-2 py-1 rounded-lg text-xs font-bold cursor-pointer"
                    style="background: rgba(180,180,180,0.4); color: #666; border: 1px solid #bbb;">
                    🔧 ${t?.variableChange?.variable?Nt[t.variableChange.variable]:"选择变量"}
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
                  ${f.length>0?f.map(u=>$e[u]).join("")+f.join(""):"点击展开选择"}
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
                  ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...t&&t.moment==="攻击时"?["target_attr"]:[]].map(u=>{const w=d(u),I=c(u);return`
                      <div class="condition-item p-2 rounded-lg cursor-pointer transition-all ${w?"selected":""}"
                        data-condition="${u}"
                        data-editor="minion"
                        style="${I}">
                        <div class="font-bold text-sm" style="color: #5a4a3a;">${u==="guaranteed"?"必然触发":u==="d6"?"🎲 D6":u==="hero_hp"?"英雄血量":u==="minion_count"?"随从数":u==="hand_count"?"手牌数":u==="exists_minion"?"存在随从":"目标属性"}</div>
                        ${u==="d6"&&w?`
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
                        ${w?o("minion"):""}
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
            ${m?`
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
                  ${r().map(u=>`
                    <div class="target-item p-2 rounded-lg cursor-pointer transition-all ${h(u)?"selected":""}"
                      data-target="${u}"
                      style="background: ${h(u)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${h(u)?"#f5a623":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${u}</div>
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
            ${m&&g.length>0?`
              <div class="p-2">
              <button id="toggle-effect-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <span>效果</span>
                <span class="text-lg">${this.showEffectPanel?"▼":"▶"}</span>
              </button>
              ${this.showEffectPanel?`
                <div class="mt-2 space-y-1">
                  ${p().map(u=>`
                    <div class="effect-item p-2 rounded-lg cursor-pointer transition-all ${y===u?"selected":""}"
                      data-effect="${u}"
                      style="background: ${y===u?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${y===u?"#e07070":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${u}</div>
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
                            ${(()=>{const u=[{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],w=t.summonSource??"my_hand";return u.map(I=>`
                                <div class="summon-source-btn-2 px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${w===I.key?"selected":""}"
                                  data-source="${I.key}"
                                  style="background: ${w===I.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${w===I.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                  ${I.label}
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
                          ${(()=>{const u=[{key:"derived",label:"衍生卡"},{key:"deck_top",label:"抽牌堆顶"},{key:"discard_top",label:"弃牌堆顶"},{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],w=t.summonSource??"derived";return u.map(I=>`
                              <div class="summon-source-btn-2 px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${w===I.key?"selected":""}"
                                data-source="${I.key}"
                                style="background: ${w===I.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${w===I.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                ${I.label}
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
                        ${(()=>{const u=t.isRandom?t.summonedCardIndices??[]:t.summonedCardIndex!==void 0?[t.summonedCardIndex]:[];return this.editingCards.map((I,S)=>{if((y==="变化"||y==="召唤")&&I.type==="spell"||y==="变化"&&S===this.currentCardIndex||y==="召唤"&&f.includes("打出时")&&S===this.currentCardIndex)return null;const T=u.includes(S);return`
                              <div class="summon-card-item px-2 py-1 rounded-lg cursor-pointer transition-all text-sm ${T?"selected":""}"
                                data-summon-index="${S}"
                                style="background: ${T?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${T?"#6fa8dc":"#d4c4a8"};">
                                ${I.name||"未命名"}
                              </div>
                            `}).filter(Boolean).join("")})()}
                      </div>
                      `:""}
                    </div>
                  `:""}
                  ${y==="给予词条"?`
                    <div class="space-y-2">
                      <div class="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                        ${Object.values(Ee).filter(u=>u.name!=="准备").map(u=>{const w=t.grantedKeywordName===u.name,I=["🔥","❄️","⚡️"].includes(u.name);return`
                            <div class="grant-keyword-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${w?"selected":""}"
                              data-grant-keyword="${u.name}"
                              style="background: ${w?"rgba(139, 115, 85, 0.35)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${w?"#8b7355":"#d4c4a8"}; font-size: ${I?"14px":"11px"};">
                              ${u.name}
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
            ${(()=>{this.currentCard.type;const u=O=>{const P=this.currentCard,B=P.type==="spell"?"#9b8cb8":"#c4b49c",$=5,N=16,J=8,U="base",ne=38,Z=19,re=()=>{const C=(P.effects||[]).filter(_=>_.effect);return C.length===0?"选择法术效果":C.map(_=>{const L=_.isOpponent?"对手":"",V=this.getMomentsText(_.moment),Q=_.targets||[],de=this.mergeTargets(Q);let oe=de.length>0&&!de.includes("无需目标")&&!de.includes("卡牌")?"对"+de.join("、"):"";_.isRandomTarget&&oe&&(oe+="中的随机一个");const G=_.isRandomTarget&&_.randomTargetTimes&&_.randomTargetTimes>1?`${_.randomTargetTimes}次`:"";let ae="";_.conditionType&&_.conditionType!=="guaranteed"&&(ae="若"+(this.getConditionText?this.getConditionText(_)+"，":""));let le="";if(_.triggerNumbers&&_.triggerNumbers.length>0&&([1,2,3,4,5,6].every(v=>_.triggerNumbers.includes(v))||(le=`🎲${_.triggerNumbers.length}/6`)),_.effect==="造成伤害"){const z=_.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[_.elementType]||"";return ae+L+V+oe+"造成"+_.value+"点"+z+"伤害"+le+G}if(_.effect==="抽牌")return ae+L+V+"抽"+_.value+"张牌"+le;if(_.effect==="弃牌")return ae+L+V+"弃"+_.value+"张牌"+le;if(_.effect==="属性变化"){const z=_.isAttackSet?"=":_.isAttackPositive?"+":"-",X=_.isHealthSet?"=":_.isHealthPositive?"+":"-",v=_.attackValue||0,j=_.healthValue||0;return v===0&&j!==0?ae+L+V+oe+X+j+"血量"+le+G:j===0&&v!==0?ae+L+V+oe+z+v+"攻击"+le+G:ae+L+V+oe+z+v+"/"+X+j+le+G}if(_.effect==="给予印记")return ae+L+V+oe+"给予"+_.value+"点印记"+le+G;if(_.effect==="治愈")return ae+L+V+oe+"治愈"+_.value+"点生命"+le+G;if(_.effect==="获得能量")return ae+L+V+"获得"+_.value+"点能量"+le;if(_.effect==="失去能量")return ae+L+V+"失去"+_.value+"点能量"+le;if(_.effect==="召唤"){const z=_.summonSource||"derived";if(z!=="derived"){const H=Ie(z,!!_.isRandom),M=_.isRandom?"中的随机一个":"";return ae+L+V+"召唤"+(_.value||1)+"张"+H+M+le}if(_.isRandom&&_.summonedCardIndices&&_.summonedCardIndices.length>1){const H=_.summonedCardIndices.map(M=>this.editingCards[M]?.name||"衍生随从");return ae+L+V+"召唤"+(_.value||1)+"张"+H.join("、")+"中的随机一个"+le}const X=_.summonedCardIndex??0,j=this.editingCards[X]?.name||"衍生随从";return ae+L+V+"召唤"+(_.value||1)+"张"+j+le}if(_.effect==="获得"){const z=_.summonSource||"derived";if(z!=="derived"){const H=Ie(z,!!_.isRandom),M=_.isRandom?"中的随机一个":"";return ae+L+V+"获得"+(_.value||1)+"张"+H+M+le}if(_.isRandom&&_.summonedCardIndices&&_.summonedCardIndices.length>1){const H=_.summonedCardIndices.map(M=>this.editingCards[M]?.name||"衍生牌");return ae+L+V+"获得"+(_.value||1)+"张"+H.join("、")+"中的随机一个"+le}const X=_.summonedCardIndex??0,j=this.editingCards[X]?.name||"衍生牌";return ae+L+V+"获得"+(_.value||1)+"张"+j+le}if(_.effect==="变化"){const z=_.summonSource||"derived";if(z!=="derived"){const H=Ie(z,!!_.isRandom),M=_.isRandom?"中的随机一个":"";return ae+L+V+"变化为"+H+M+le}if(_.isRandom&&_.summonedCardIndices&&_.summonedCardIndices.length>1){const H=_.summonedCardIndices.map(M=>this.editingCards[M]?.name||"衍生随从");return ae+L+V+"变化为"+H.join("、")+"中的随机一个"+le}const X=_.summonedCardIndex??0,j=this.editingCards[X]?.name||"衍生随从";return ae+L+V+"变化为"+j+le}return ae+""+le}).filter(Boolean).join("；")||"选择法术效果"};return`
                  <div class="card-preview mb-4" 
                    id="main-card-preview"
                    style="position: relative; ${P.imageData?`background: url(${P.imageData}) center/cover no-repeat;`:"background: linear-gradient(135deg, #fff 0%, #f8f4ec 100%);"} border: ${$}px solid ${B}; border-radius: ${N}px; padding: ${J}px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2); ">
                  <div class="h-full flex flex-col">
                    <!-- 费用和名称 -->
                    <div class="flex items-center gap-2 mb-2">
                      <div class="card-cost-diamond"><span>${P.cost}</span></div>
                      <div class="card-name-text flex-1 text-center font-bold text-${U}" style="color: #5a4a3a; word-break: break-all;">${P.name||"未命名"}</div>
                    </div>
                    
                    ${P.type==="spell"?`
                    <!-- 法术效果描述 -->
                    <div class="flex-1 flex items-center justify-center text-center text-sm px-2" style="color: #ffffff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; line-height: 1.4;">
                      ${re()}
                    </div>
                    `:`
                    <!-- 随从效果描述（先渲染，flex-1 占据上半部分空间） -->
                    <div id="minion-effect-text" class="text-center text-xs flex-1 flex items-center justify-center px-1" style="color: #6a5a3a; line-height: 1.3;"></div>

                    <!-- 随从词条（在技能下方，即中线位置） -->
                    ${P.keywords&&P.keywords.length>0?`
                      <div class="flex flex-wrap gap-1 justify-center mb-1">
                        ${P.keywords.map(q=>{const C=q.name==="护甲"?q.value??P.armorValue:"";return'<span class="keyword-tag" style="font-size: 9px; padding: 1px 4px; border-radius: 3px;">'+q.name+C+"</span>"}).join("")}
                      </div>
                    `:""}

                    <!-- 攻击/生命 -->
                    <div class="flex justify-between mt-auto">
                      <div class="card-attack-text" style="width: ${ne}px; height: ${ne}px; background-image: url('/images/icon_attack.png'); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: ${Z}px; filter: drop-shadow(0 0 2px rgba(0,0,0,0.8)) drop-shadow(0 0 5px rgba(0,0,0,0.4)); text-shadow: 0 0 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.5);">${P.attack}</div>
                      <div class="card-health-text" style="width: ${ne}px; height: ${ne}px; background-image: url('/images/icon_health.png'); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: ${Z}px; filter: drop-shadow(0 0 2px rgba(0,0,0,0.8)) drop-shadow(0 0 5px rgba(0,0,0,0.4)); text-shadow: 0 0 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.5);">${P.health}</div>
                    </div>
                    `}
                  </div>
                  ${this.isDrawingMode?`
                  <canvas id="card-drawing-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 20; cursor: none;"></canvas>
                  `:""}
                </div>
                `},w=this.editingCards.length>1,I='<button id="prev-card-btn" class="preview-arrow prev flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg" style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 2px solid #a08060; box-shadow: 0 2px 8px rgba(160, 128, 96, 0.5); z-index: 10;">◀</button>',S='<button id="next-card-btn" class="preview-arrow next flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg" style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 2px solid #a08060; box-shadow: 0 2px 8px rgba(160, 128, 96, 0.5); z-index: 10;">▶</button>',T='<div class="flex-shrink-0 w-10"></div>',D=w?'<div class="text-center text-xs font-bold mt-1" style="color: white; text-shadow: 0 0 3px black;">'+(this.currentCardIndex+1)+" / "+this.editingCards.length+"</div>":"";return'<div class="flex items-center justify-center gap-2 mb-4">'+(w?I:T)+'<div class="flex flex-col items-center">'+u()+D+"</div>"+(w?S:T)+"</div>"})()}

            ${this.isDrawingMode?`
            <!-- 画笔色块 -->
            <div class="flex justify-center gap-1.5 mb-2" style="background: transparent;">
              ${this.COLORS.map((u,w)=>`
                <button id="color-swatch-${w}" class="w-7 h-7 rounded-sm transition-all transform hover:scale-110"
                  style="background: ${u}; border: 2px solid ${w===this.currentColorIndex?"#ffffff":"transparent"}; cursor: pointer;"
                  title="${["红","橙","黄","绿","青","蓝","紫","黑"][w]}"></button>
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
              ${this.currentCard.keywords.some(u=>u.name==="准备")?`
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
    `,this.attachCardCreatorEvents(),this.updateEffectDescription(),this.pendingScrollRestoration){const{selector:u,scrollTop:w,containerIndex:I,leftPanelScrollTop:S,portraitScrollTop:T}=this.pendingScrollRestoration,D=document.querySelectorAll(u),O=D[I??0]||D[0];if(O&&(O.scrollTop=w),S!==void 0){const P=document.querySelector(".editor-left-panel-scroll");P&&(P.scrollTop=S)}if(T!==void 0){const P=document.querySelector(".portrait-side-panel-scroll");P&&(P.scrollTop=T)}this.pendingScrollRestoration=null}}updateCardPreview(){((s,t,n)=>{const i=document.getElementById(s);if(!i||!t)return;const r=i.querySelector(".card-name-text");if(r){const c=t.name!==void 0&&t.name!==null&&t.name!==""?t.name:n;r.textContent=c}const a=i.querySelector(".card-cost-diamond span");a&&(a.textContent=String(t.cost));const o=i.querySelector(".card-attack-text");o&&(o.textContent=String(t.attack||0));const l=i.querySelector(".card-health-text");l&&(l.textContent=String(t.health||0));const d=i.querySelector('.flex.flex-wrap[class*="gap-"]');if(d&&t.type==="minion"){const c=t.keywords||[];c.length>0?(d.innerHTML=c.map(p=>{const h=p.name==="护甲"?p.value??t.armorValue??1:p.name==="准备"?p.value??1:"";return`<span style="font-size: 9px; padding: 1px 4px; border-radius: 3px; background: rgba(212, 180, 140, 0.6); color: #5a4a3a;">${p.name}${h}</span>`}).join(""),d.style.display="flex"):d.style.display="none"}if(t.type==="spell"){const c=i.querySelector(".flex-1.flex.items-center.justify-center.text-center");if(c){const h=(t.effects||[]).filter(m=>m.effect);if(h.length===0)c.textContent="选择法术效果";else{const m=h.map(f=>{const b=f.targets||[],g=this.mergeTargets(b);let y=g.length>0&&!g.includes("无需目标")&&!g.includes("卡牌")?`对${g.join("、")}`:"";f.isRandomTarget&&y&&(y+="中的随机一个");const x=f.isRandomTarget&&f.randomTargetTimes&&f.randomTargetTimes>1?`${f.randomTargetTimes}次`:"";if(f.effect==="造成伤害"){const k=f.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[f.elementType]||"";return`${y}造成${f.value}点${k}伤害${x}`}if(f.effect==="抽牌")return`抽${f.value}张牌`;if(f.effect==="弃牌")return`弃${f.value}张牌`;if(f.effect==="属性变化"){if(g.includes("卡牌")){const S=Ie(f.summonSource||"my_hand",!!f.isRandom),T=f.isRandom?"中的随机一个":"",D=[];if((f.costValue||0)!==0){const O=f.isCostSet?"=":f.isCostPositive?"+":"-",P=f.costValue||0;D.push(`${O}${P}费用`)}if((f.attackValue||0)!==0){const O=f.isAttackSet?"=":f.isAttackPositive?"+":"-";D.push(`${O}${f.attackValue}攻击`)}if((f.healthValue||0)!==0){const O=f.isHealthSet?"=":f.isHealthPositive?"+":"-";D.push(`${O}${f.healthValue}血量`)}return D.length===0?`使${S}${T}无变化`:`使${S}${T}${D.join("/")}`}const k=f.isAttackSet?"=":f.isAttackPositive?"+":"-",u=f.isHealthSet?"=":f.isHealthPositive?"+":"-",w=f.attackValue||0,I=f.healthValue||0;return w===0&&I!==0?`${y}${u}${I}血量${x}`:I===0&&w!==0?`${y}${k}${w}攻击${x}`:`${y}${k}${w}/${u}${I}${x}`}if(f.effect==="给予印记")return`${y}给予${f.value}点印记${x}`;if(f.effect==="治愈")return`${y}治愈${f.value}点生命${x}`;if(f.effect==="获得能量")return`获得${f.value}点能量`;if(f.effect==="失去能量")return`失去${f.value}点能量`;if(f.effect==="召唤"){const k=f.summonSource||"derived";if(k!=="derived"){const S=Ie(k,!!f.isRandom),T=f.isRandom?"中的随机一个":"";return`召唤${f.value||1}张${S}${T}`}if(f.isRandom&&f.summonedCardIndices&&f.summonedCardIndices.length>1){const S=f.summonedCardIndices.map(T=>this.editingCards[T]?.name||"衍生随从");return`召唤${f.value||1}张${S.join("、")}中的随机一个`}const u=f.summonedCardIndex??0,I=this.editingCards[u]?.name||"衍生随从";return`召唤${f.value||1}张${I}`}if(f.effect==="获得"){const k=f.summonSource||"derived";if(k!=="derived"){const S=Ie(k,!!f.isRandom),T=f.isRandom?"中的随机一个":"";return`获得${f.value||1}张${S}${T}`}if(f.isRandom&&f.summonedCardIndices&&f.summonedCardIndices.length>1){const S=f.summonedCardIndices.map(T=>this.editingCards[T]?.name||"衍生牌");return`获得${f.value||1}张${S.join("、")}中的随机一个`}const u=f.summonedCardIndex??0,I=this.editingCards[u]?.name||"衍生牌";return`获得${f.value||1}张${I}`}if(f.effect==="变化"){const k=f.summonSource||"derived";if(k!=="derived"){const S=Ie(k,!!f.isRandom),T=f.isRandom?"中的随机一个":"";return`变化为${S}${T}`}if(f.isRandom&&f.summonedCardIndices&&f.summonedCardIndices.length>1)return`变化为${f.summonedCardIndices.map(T=>this.editingCards[T]?.name||"衍生随从").join("、")}中的随机一个`;const u=f.summonedCardIndex??0;return`变化为${this.editingCards[u]?.name||"衍生随从"}`}return""}).filter(Boolean);c.textContent=m.join("；")||"选择法术效果"}}}})("main-card-preview",this.currentCard,"未命名"),this.updateEffectDescription()}updateEffectDescription(){if(this.currentCard.type==="spell")return;let e=document.getElementById("minion-effect-text");if(e||(e=document.getElementById("minion-effect-text-small")),!e)return;const t=(this.currentCard.effects||[]).filter(n=>(n.moment||n.moments&&n.moments.length>0)&&n.effect);if(t.length===0)e.textContent="";else{const n=new Map;for(const r of t){const a=r.moments||(r.moment?[r.moment]:[]),o=a.map(c=>$e[c]||"").join(""),l=this.getEffectTextWithoutMoment(r),d=a.sort().join("|");n.has(d)||n.set(d,{icon:o,texts:[]}),n.get(d).texts.push(l)}const i=Array.from(n.values()).map(r=>`${r.icon}${r.texts.join("，并")}`);e.textContent=i.join("；")}}normalizeMoments(e){return e?Array.isArray(e)?e:[e]:[]}getMomentsText(e){const s=this.normalizeMoments(e);return s.length===0||s.length===1&&s[0]==="打出时"?"":s.filter(t=>t!=="打出时").map(t=>$e[t]||"").join("")}momentsInclude(e,s){return this.normalizeMoments(e).includes(s)}mergeTargets(e){const s=new Set(e),t=s.has("自己");s.delete("自己");const n=s.has("我方所有随从"),i=s.has("敌方所有随从"),r=s.has("我方英雄"),a=s.has("敌方英雄");if(n&&i&&r&&a){const l=["所有目标"];return t&&l.unshift("自己"),l}r&&a&&!n&&!i&&(s.delete("我方英雄"),s.delete("敌方英雄"),s.add("双方英雄")),n&&i&&(s.delete("我方所有随从"),s.delete("敌方所有随从"),s.add("所有随从")),s.has("我方英雄")&&s.has("我方所有随从")&&(s.delete("我方英雄"),s.delete("我方所有随从"),s.add("我方所有目标")),s.has("敌方英雄")&&s.has("敌方所有随从")&&(s.delete("敌方英雄"),s.delete("敌方所有随从"),s.add("敌方所有目标"));const o=Array.from(s);return t&&o.unshift("自己"),o}getEffectTextWithoutMoment(e,s){const t=e.targets||[],n=this.mergeTargets(t);let i=n.length>0&&!n.includes("无需目标")&&!n.includes("卡牌")?`对${n.join("、")}`:"";e.isRandomTarget&&i&&(i+="中的随机一个");let r="";if(e.effect==="造成伤害"){const d=e.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[e.elementType]||"";r=`造成${e.value||0}点${d}伤害`}else if(e.effect==="增加伤害")r=`增加${e.value||0}点攻击伤害`;else if(e.effect==="抽牌")r=`抽${e.value||0}张牌`;else if(e.effect==="弃牌")r=`弃${e.value||0}张牌`;else if(e.effect==="属性变化"){const d=e.isAttackSet?"=":e.isAttackPositive?"+":"-",c=e.isHealthSet?"=":e.isHealthPositive?"+":"-",p=e.isCostSet?"=":e.isCostPositive?"+":"-",h=e.attackValue||0,m=e.healthValue||0,f=e.costValue||0;if(t.includes("卡牌")){const b=Ie(e.summonSource||"my_hand",!!e.isRandom),g=e.isRandom?"中的随机一个":"";let y=[];f!==0&&y.push(`${p}${f}费用`),h!==0&&y.push(`${d}${h}攻击`),m!==0&&y.push(`${c}${m}血量`),y.length===0&&y.push("费用/攻击/血量不变"),r=`使${b}${g}${y.join("/")}`}else h===0&&m!==0?r=`${c}${m}血量`:m===0&&h!==0?r=`${d}${h}攻击`:r=`${d}${h}/${c}${m}`}else if(e.effect==="给予印记")r=`给予${e.value||0}点印记`;else if(e.effect==="治愈")r=`治愈${e.value||0}点生命`;else if(e.effect==="获得能量")r=`获得${e.value||0}点能量`;else if(e.effect==="失去能量")r=`失去${e.value||0}点能量`;else if(e.effect==="召唤"){const d=e.summonSource||"derived";if(d!=="derived"){const c=Ie(d,!!e.isRandom),p=e.isRandom?"中的随机一个":"";r=`召唤${e.value||1}张${c}${p}`}else if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>1){const c=e.summonedCardIndices.map(p=>(s!==void 0?s?.[p]:this.editingCards?.[p])?.name||"衍生随从");r=`召唤${e.value||1}张${c.join("、")}中的随机一个`}else{const c=e.summonedCardIndex??0,h=(s!==void 0?s?.[c]:this.editingCards?.[c])?.name||"衍生随从";r=`召唤${e.value||1}张${h}`}}else if(e.effect==="获得"){const d=e.summonSource||"derived";if(d!=="derived"){const c=Ie(d,!!e.isRandom),p=e.isRandom?"中的随机一个":"";r=`获得${e.value||1}张${c}${p}`}else if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>1){const c=e.summonedCardIndices.map(p=>(s!==void 0?s?.[p]:this.editingCards?.[p])?.name||"衍生牌");r=`获得${e.value||1}张${c.join("、")}中的随机一个`}else{const c=e.summonedCardIndex??0,h=(s!==void 0?s?.[c]:this.editingCards?.[c])?.name||"衍生牌";r=`获得${e.value||1}张${h}`}}else if(e.effect==="变化"){const d=e.summonSource||"derived";if(d!=="derived"){const c=Ie(d,!!e.isRandom),p=e.isRandom?"中的随机一个":"";r=`变化为${c}${p}`}else if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>1)r=`变化为${e.summonedCardIndices.map(p=>(s!==void 0?s?.[p]:this.editingCards?.[p])?.name||"衍生随从").join("、")}中的随机一个`;else{const c=e.summonedCardIndex??0;r=`变化为${(s!==void 0?s?.[c]:this.editingCards?.[c])?.name||"衍生随从"}`}}else if(e.effect==="给予词条"){const d=e.grantedKeywordName||"";r=`给予${d==="护甲"?`【${d}${e.grantedKeywordValue??1}】`:`【${d}】`}`}let a="";e.triggerNumbers&&e.triggerNumbers.length>0&&([1,2,3,4,5,6].every(p=>e.triggerNumbers.includes(p))||(a=`🎲${e.triggerNumbers.length}/6`));const o=this.getConditionText(e),l=e.isOpponent?"对手":"";return t.includes("无需目标")||t.includes("卡牌")||t.length===0?`${o}${l}${r}${a}`:`${o}${l}${i}${r}${a}`}getCardFullEffectText(e,s){const t=[],n=s||e.derivedCards;if(e.effects&&e.effects.length>0){const i=new Map;for(const r of e.effects){if(!r||!r.effect)continue;const a=r.moments||(r.moment?[r.moment]:[]);if(a.length===0)continue;const o=a.length===1&&a[0]==="打出时"&&e.type==="spell"?"":a.map(c=>$e[c]||"").join(""),l=a.sort().join("|"),d=this.getEffectTextWithoutMoment(r,n);d&&(i.has(l)||i.set(l,{icon:o,texts:[]}),i.get(l).texts.push(d))}for(const r of i.values())t.push(`${r.icon}${r.texts.join("，并")}`)}else if(e.type==="spell"&&e.spellEffect){const i=e.spellEffect,r=i.moments||(i.moment?[i.moment]:[]);if(r.length>0&&i.effect){const a=r.length===1&&r[0]==="打出时"&&e.type==="spell"?"":r.map(l=>$e[l]||"").join(""),o=this.getEffectTextWithoutMoment(i,n);o&&t.push(`${a}${o}`)}}return t.join("<br>；")}getVariableChangePrefix(e){if(!e.variableChange)return"⚙️";const s=Nt[e.variableChange.variable]||"",t=e.variableChange.increase!==!1,n=e.variableChange.decrease!==!1;return t&&n?`${s}⚙️`:t?`${s}📈`:n?`${s}📉`:`${s}⚙️`}getHeroSkillDescription(e){const s=e.effects||(e.effect?[e.effect]:[]);if(s.length===0)return"无效果";const t=new Map;for(const a of s){if(!a.effect)continue;const o=a.moment||"打出时",l=o!=="打出时"?`${$e[o]||""}`:"",d=this.getEffectTextWithoutMoment(a,this.heroDerivedCards);d&&(t.has(o)||t.set(o,{icon:l,texts:[]}),t.get(o).texts.push(d))}const n=[];for(const a of t.values())n.push(`${a.icon}${a.texts.join("，并")}`);const i=n.join("；")||"无效果";if(e.limited)return`${i}（一局${e.maxUses??1}次）`;const r=e.cooldown??0;return r>0?`${i}（CD: ${r}）`:i}isConditionSelected(e,s){return s?s.conditionType?s.conditionType===e:e==="d6"?!!s.triggerNumbers&&s.triggerNumbers.length<6:e==="guaranteed":e==="guaranteed"}getConditionItemStyle(e,s){const t=this.isConditionSelected(e,s);return e==="guaranteed"?t?"background:rgba(34,197,94,0.25);border:2px solid #22c55e;":"background:rgba(212,196,168,0.3);border:2px solid #d4c4a8;":e==="d6"?t?"background:transparent;border:2px solid #c0a080;":"background:rgba(212,196,168,0.3);border:2px solid #d4c4a8;":t?"background:rgba(34,197,94,0.25);border:2px solid #22c55e;":"background:rgba(212,196,168,0.3);border:2px solid #d4c4a8;"}getConditionSubEditor(e,s){const t=this.isConditionSelected("exists_minion",s)?"exists_minion":this.isConditionSelected("target_attr",s)?"target_attr":this.isConditionSelected("hero_hp",s)?"hero_hp":this.isConditionSelected("minion_count",s)?"minion_count":this.isConditionSelected("hand_count",s)?"hand_count":null;if(!t)return"";if(t==="exists_minion"){const p=s?.conditionMinionName||"";return`
      <div class="mt-2 pl-1">
        <div style="font-size:11px;color:#5a4a3a;margin-bottom:4px;">随从名称：</div>
        <input type="text" class="condition-minion-name-input" data-editor="${e}" value="${p}"
          style="width:100%;padding:4px 8px;border:1px solid #c0a080;border-radius:4px;font-size:12px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="输入随从名称">
      </div>`}if(t==="target_attr"){const p=["cost","attack","health"],h={cost:"能量花费",attack:"攻击力",health:"生命值"};return`<div class="mt-2 space-y-1 pl-1">${p.map(f=>{const b=s?.conditionTargetAttrs?.[f],g=b?.enabled??!0,y=b?.operator||"=",x=b?.value??0,k=["<","=",">"].map(u=>{const S=(u==="<"?y==="<":u==="="?y==="=":y===">")||(u==="<"&&y==="<="||u===">"&&y===">="||u==="="&&(y==="<="||y===">="));return`<button class="condition-target-op-btn" data-attr="${f}" data-op="${u}" data-editor="${e}"
            style="${S?"rgba(34,197,94,0.25)":"rgba(212,196,168,0.3)"};border:1px solid ${S?"#22c55e":"#d4c4a8"};color:${S?"#22c55e":"#8b7355"};width:28px;height:24px;border-radius:4px;font-size:12px;font-weight:bold;cursor:pointer;">${u==="<"?"＜":u==="="?"＝":"＞"}</button>`}).join("");return`
        <div style="font-size:11px;" onclick="event.stopPropagation()">
          <div class="flex items-center gap-2" style="margin-bottom:3px;">
            <input type="checkbox" class="condition-target-attr-check" data-attr="${f}" data-editor="${e}" ${g?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
            <span style="color:#5a4a3a;">${h[f]}</span>
          </div>
          <div class="flex items-center gap-2">
            ${k}
            <input type="number" class="condition-target-attr-input" data-attr="${f}" data-editor="${e}" value="${x}"
              style="width:45px;padding:2px 4px;border:1px solid #c0a080;border-radius:4px;font-size:11px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="0">
          </div>
        </div>`}).join("")}</div>`}const n=s?.conditionSides||["friendly"],i=n.includes("friendly"),r=n.includes("enemy"),a=i&&r,o=s?.conditionSideLogic||"and",l=s?.conditionOperator||"=",d=s?.conditionValue??0,c=["<","=",">"].map(p=>{const f=(p==="<"?l==="<":p==="="?l==="=":l===">")||(p==="<"&&l==="<="||p===">"&&l===">=");return`<button class="condition-op-btn" data-op="${p}" data-editor="${e}"
        style="background:${f?"rgba(34,197,94,0.25)":"rgba(212,196,168,0.3)"};border:1px solid ${f?"#22c55e":"#d4c4a8"};color:${f?"#22c55e":"#8b7355"};width:32px;height:28px;border-radius:4px;font-size:14px;font-weight:bold;cursor:pointer;">${p==="<"?"＜":p==="="?"＝":"＞"}</button>`}).join("");return`
      <div class="mt-2 space-y-2 pl-1">
        <div class="flex items-center gap-3" onclick="event.stopPropagation()">
          <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
            <input type="checkbox" class="condition-side-check" data-side="friendly" data-editor="${e}" ${i?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">我方
          </label>
          <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
            <input type="checkbox" class="condition-side-check" data-side="enemy" data-editor="${e}" ${r?"checked":""}
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
      </div>`}setConditionType(e,s){e&&(e==="guaranteed"?(s.conditionType="guaranteed",s.triggerNumbers=[1,2,3,4,5,6],delete s.conditionSides,delete s.conditionSideLogic,delete s.conditionOperator,delete s.conditionValue):e==="d6"?(s.conditionType="d6",(!s.triggerNumbers||s.triggerNumbers.length===6)&&(s.triggerNumbers=[1]),delete s.conditionSides,delete s.conditionSideLogic,delete s.conditionOperator,delete s.conditionValue):e==="exists_minion"?(s.conditionType=e,s.conditionMinionName||(s.conditionMinionName=""),delete s.triggerNumbers,delete s.conditionSides,delete s.conditionSideLogic,delete s.conditionOperator,delete s.conditionValue):e==="target_attr"?(s.conditionType=e,s.conditionTargetAttrs||(s.conditionTargetAttrs={cost:{enabled:!0,operator:"=",value:0},attack:{enabled:!0,operator:"=",value:0},health:{enabled:!0,operator:"=",value:0}}),delete s.triggerNumbers,delete s.conditionSides,delete s.conditionSideLogic,delete s.conditionOperator,delete s.conditionValue):(s.conditionType=e,s.conditionSides||(s.conditionSides=["friendly"]),s.conditionOperator||(s.conditionOperator="="),s.conditionValue===void 0&&(s.conditionValue=0),delete s.triggerNumbers))}getConditionCollapsedText(e){if(!e)return"必然触发";const s=e.conditionType||(!e.triggerNumbers||e.triggerNumbers.length===6?"guaranteed":"d6");if(s==="guaranteed")return"必然触发";if(s==="d6"){const p=e.triggerNumbers||[];return p.length>0&&p.length<6?`🎲 D6（${p.join("、")}）`:"🎲 D6"}if(s==="exists_minion")return`存在随从「${e.conditionMinionName||"..."}」`;if(s==="target_attr"){const p={cost:"能量",attack:"攻击",health:"生命"},h=e.conditionTargetAttrs;if(!h)return"目标属性";const m=[];for(const f of["cost","attack","health"]){const b=h[f];if(b?.enabled){const g=b.operator||"=",y=g==="<="?"≤":g===">="?"≥":g;m.push(`${p[f]}${y}${b.value}`)}}return m.length?`目标${m.join("、")}`:"目标属性"}const n={hero_hp:"英雄血量",minion_count:"随从数",hand_count:"手牌数"}[s]||s,i=e.conditionSides||["friendly"],r=i.includes("friendly")&&i.includes("enemy")?"双方":i.includes("friendly")?"我方":"敌方",a=e.conditionSideLogic||"and",o=i.includes("friendly")&&i.includes("enemy")?a==="and"?"均":"有一":"",l=e?.conditionOperator||"=",d=l==="<="?"≤":l===">="?"≥":l,c=e.conditionValue??0;return`${r}${n}${o}${d}${c}`}getConditionText(e){const s=e.conditionType||(!e.triggerNumbers||e.triggerNumbers.length===6?"guaranteed":"d6");if(s==="guaranteed"||s==="d6")return"";if(s==="exists_minion"){const p=e.conditionMinionName?.trim();return p?`若场上有"${p}"，`:"若场上有指定随从，"}if(s==="target_attr"){const p=e.conditionTargetAttrs;if(!p)return"若目标属性符合条件，";const h={cost:"能量花费",attack:"攻击力",health:"生命值"},m=[];for(const f of["cost","attack","health"]){const b=p[f];if(b?.enabled){const g=b.operator||"=",y=g==="<="?"≤":g===">="?"≥":g;m.push(`${h[f]}${y}${b.value}`)}}return m.length?`若目标${m.join("且")}，`:"若目标属性符合条件，"}const n={hero_hp:"英雄血量",minion_count:"随从数",hand_count:"手牌数"}[s]||s,i=e.conditionSides||["friendly"],r=i.includes("friendly")&&i.includes("enemy")?"双方":i.includes("friendly")?"我方":"敌方",a=e.conditionSideLogic||"and",o=i.includes("friendly")&&i.includes("enemy")?a==="and"?"均":"有一":"",l=e?.conditionOperator||"=",d=l==="<="?"≤":l===">="?"≥":l,c=e.conditionValue??0;return`若${r}${n}${o}${d}${c}，`}getMinionSkillDescription(e){return!e.effects||e.effects.length===0?"":e.effects.map(t=>{const n=t.moment?`${$e[t.moment]||""}`:"",i=this.getEffectTextWithoutMoment(t,e.derivedCards);return`${n} ${i}`.trim()}).filter(t=>t).join(`
`)}showFixedTooltip(e,s,t){let n=document.getElementById("unified-tooltip-overlay");if(!n){n=document.createElement("div"),n.id="unified-tooltip-overlay",n.style.cssText="position:fixed; inset:0; pointer-events:none; z-index:999999; display:none;";const d=document.createElement("div");d.id="unified-tooltip-content",d.style.cssText="position:absolute; background:#b8a17a; border:2px solid #6b5a45; border-radius:8px; padding:10px 14px; box-shadow:0 8px 32px rgba(0,0,0,0.4); max-width:280px; pointer-events:none;",n.appendChild(d),document.body.appendChild(n)}const i=document.getElementById("unified-tooltip-content");i.innerHTML=s,n.style.display="block",n.style.visibility="hidden";const r=i.getBoundingClientRect();n.style.visibility="visible";const a=e.getBoundingClientRect();let o=a.left+a.width/2,l;t==="bottom"?l=a.bottom+8:l=a.top-r.height-8,o=Math.max(8+r.width/2,Math.min(o,window.innerWidth-r.width/2-8)),t==="bottom"&&l+r.height>window.innerHeight-8?l=a.top-r.height-8:t==="top"&&l<8&&(l=a.bottom+8),i.style.left=o+"px",i.style.top=l+"px",i.style.transform="translateX(-50%)"}hideFixedTooltip(){const e=document.getElementById("unified-tooltip-overlay");e&&(e.style.display="none")}attachHeroEditorEvents(){document.getElementById("back-menu-btn")?.addEventListener("click",()=>{this.state=ie(this.state,{type:"BACK_TO_MENU"}),this.render()}),document.getElementById("back-to-manager-btn")?.addEventListener("click",()=>{this.state=ie(this.state,{type:"SHOW_CARD_MANAGER"}),this.isHeroEditMode=!1,this.editingHeroId=null,this.editingCards=[],this.render()}),document.getElementById("hero-editor-more-btn")?.addEventListener("click",()=>{this.showSidePanel=!this.showSidePanel,this.render()}),document.getElementById("close-hero-side-panel-btn")?.addEventListener("click",()=>{this.showSidePanel=!1,this.render()}),document.getElementById("switch-to-normal-editor-btn")?.addEventListener("click",()=>{this.isHeroEditMode=!1,this.editingCards=[],this.state=ie(this.state,{type:"SHOW_CARD_CREATOR"}),this.render()});const e=document.getElementById("hero-name");e&&e.addEventListener("input",c=>{this.heroName=c.target.value});const s=["greeting","apology","taunt","exclamation","pity","flirt"];for(const c of s){const p=document.getElementById(`hero-speech-${c}`);p&&p.addEventListener("input",h=>{this.heroSpeech[c]=h.target.value})}const t=document.getElementById("hero-voice-type");t&&t.querySelectorAll("[data-voice-type]").forEach(c=>{c.addEventListener("click",()=>{this.heroVoiceType=c.dataset.voiceType,this.render()})}),document.getElementById("reset-hero-btn")?.addEventListener("click",()=>{this.heroName="",this.heroImageData=null,this.heroDerivedCards=[],this.heroEditingDerivedIndex=null,this.heroSkills=[],this.heroEditingSkillIndex=null,this.heroSpeech={greeting:"",apology:"",taunt:"",exclamation:"",pity:"",flirt:""},this.heroVoiceType="none",this.render()}),document.getElementById("add-hero-derived-btn")?.addEventListener("click",()=>{this.cropTarget="main";const c=document.createElement("input");c.type="file",c.accept="image/png",c.onchange=async p=>{const h=p.target.files?.[0];if(h)try{const m=await this.importCardFromPNGFile(h);if(!m){alert("无法从该 PNG 文件中读取卡牌数据");return}const{cardData:f,imageData:b}=m,g=f.derivedCards&&f.derivedCards.length>0,y=["召唤","获得","变化"],x=(f.effects||[]).some(w=>y.includes(w.effect));if(g||x){alert("该卡牌携带衍生卡或包含召唤/获得/变化效果，无法作为英雄衍生卡导入");return}const k=[],u={name:f.name||"",type:f.type||"minion",cost:f.cost??1,attack:f.attack??1,health:f.health??1,armorValue:f.armorValue??0,preparationValue:f.preparationValue??1,imageData:b,keywords:(f.keywords||[]).map(w=>w==="风怒"?"__WINDURY__":w).map(w=>w==="__WINDURY__"?"连击":w).map(w=>Object.values(Ee).find(S=>S.name===w)||{name:w,description:"",hasValue:!1}),effects:f.effects||[],effectDescription:f.effectDescription||""};if(k.push(u),f.derivedCards&&f.derivedCards.length>0){u.derivedCards=f.derivedCards;for(const w of f.derivedCards)k.push({name:w.name||"",type:w.type||"minion",cost:w.cost??1,attack:w.attack??1,health:w.health??1,armorValue:w.armorValue??0,preparationValue:w.preparationValue??1,imageData:w.imageData||null,keywords:(w.keywords||[]).map(I=>I==="风怒"?"__WINDURY__":I).map(I=>I==="__WINDURY__"?"连击":I).map(I=>Object.values(Ee).find(T=>T.name===I)||{name:I,description:"",hasValue:!1}),effects:w.effects||[],effectDescription:w.effectDescription||""})}this.heroDerivedCards=[...this.heroDerivedCards,...k],this.heroEditingDerivedIndex=this.heroDerivedCards.length-k.length,this.render()}catch(m){alert("导入失败："+m.message)}},c.click()}),document.querySelectorAll(".hero-card-list-item").forEach(c=>{c.addEventListener("click",p=>{const h=p.target;if(h.classList.contains("hero-card-list-delete-btn")||h.closest(".hero-card-list-delete-btn"))return;const m=c.dataset.heroCardIndex;m==="hero"?this.heroEditingDerivedIndex=null:m!==void 0&&(this.heroEditingDerivedIndex=parseInt(m,10)),this.render()})}),document.querySelectorAll(".hero-card-list-delete-btn").forEach(c=>{c.addEventListener("click",p=>{p.stopPropagation();const h=c.dataset.heroCardIndex;if(h===void 0)return;const m=parseInt(h,10);this.heroDerivedCards=this.heroDerivedCards.filter((f,b)=>b!==m),this.heroEditingDerivedIndex===m?this.heroEditingDerivedIndex=null:this.heroEditingDerivedIndex!==null&&this.heroEditingDerivedIndex>m&&this.heroEditingDerivedIndex--,this.render()})});const n=document.getElementById("hero-derived-name");n&&n.addEventListener("input",c=>{this.heroEditingDerivedIndex!==null&&(this.heroDerivedCards=this.heroDerivedCards.map((p,h)=>h===this.heroEditingDerivedIndex?{...p,name:c.target.value}:p))});const i=document.getElementById("hero-derived-cost");i&&i.addEventListener("input",c=>{if(this.heroEditingDerivedIndex===null)return;const p=parseInt(c.target.value,10)||0;this.heroDerivedCards=this.heroDerivedCards.map((h,m)=>m===this.heroEditingDerivedIndex?{...h,cost:p}:h)});const r=document.getElementById("hero-derived-attack");r&&r.addEventListener("input",c=>{if(this.heroEditingDerivedIndex===null)return;const p=parseInt(c.target.value,10)||0;this.heroDerivedCards=this.heroDerivedCards.map((h,m)=>m===this.heroEditingDerivedIndex?{...h,attack:p}:h)});const a=document.getElementById("hero-derived-health");a&&a.addEventListener("input",c=>{if(this.heroEditingDerivedIndex===null)return;const p=parseInt(c.target.value,10)||1;this.heroDerivedCards=this.heroDerivedCards.map((h,m)=>m===this.heroEditingDerivedIndex?{...h,health:p}:h)}),document.getElementById("draw-hero-image-btn")?.addEventListener("click",()=>{this.isDrawingMode?this.exitDrawingMode(!0):this.enterDrawingMode()}),document.getElementById("import-hero-image-btn")?.addEventListener("click",()=>{this.cropTarget="hero";const c=document.createElement("input");c.type="file",c.accept="image/*",c.onchange=async p=>{const h=p.target.files?.[0];h&&this.openHeroCropModal(h)},c.click()}),document.getElementById("add-hero-to-deck-btn")?.addEventListener("click",()=>{if(!this.heroName.trim()){alert("请输入英雄名称");return}const c={id:this.isHeroEditMode&&this.editingHeroId?this.editingHeroId:ke(),name:this.heroName.trim(),cost:0,attack:0,health:30,maxHealth:30,type:"hero",keywords:[],imageData:this.heroImageData||void 0,skills:this.heroSkills,heroSpeech:{...this.heroSpeech,voiceType:this.heroVoiceType},derivedCards:this.heroDerivedCards.length>0?this.heroDerivedCards.map(h=>({name:h.name,type:h.type,cost:h.cost,attack:h.attack,health:h.health,maxHealth:h.health,imageData:h.imageData||void 0,keywords:h.keywords,effects:h.effects})):void 0};if(this.isHeroEditMode&&this.editingHeroId)this.state={...this.state,groups:this.state.groups.map(h=>({...h,cards:h.cards.map(m=>m.card.id===this.editingHeroId?{...m,card:c}:m)}))};else{const h=De(this.state);this.state={...this.state,groups:this.state.groups.map(m=>m.id===h.id?{...m,cards:[...m.cards,{card:c,count:1}]}:m)}}this.syncSharedDeck(),this.saveDeck();const p=document.getElementById("hero-add-success");p?.classList.remove("hidden"),setTimeout(()=>{p?.classList.add("hidden")},1500)}),document.getElementById("import-hero-code-btn")?.addEventListener("click",()=>{const c=document.createElement("input");c.type="file",c.accept="image/png",c.onchange=async p=>{const h=p.target.files?.[0];if(h){if(h.type!=="image/png"){alert("请选择 PNG 格式的文件");return}try{const m=await this.importHeroFromPNGFile(h);if(!m){alert("无法从该 PNG 文件中读取英雄牌数据，请确保这是英雄牌文件");return}this.heroName=m.heroData.name||"",this.heroImageData=m.imageData,this.heroSpeech=m.heroData.heroSpeech?{...m.heroData.heroSpeech}:{greeting:"",apology:"",taunt:"",exclamation:"",pity:"",flirt:""},this.heroVoiceType=m.heroData.heroSpeech?.voiceType||"none",this.render()}catch(m){alert("导入失败："+m.message)}}},c.click()}),document.getElementById("hero-import-confirm-btn")?.addEventListener("click",async()=>{const c=document.createElement("input");c.type="file",c.accept="image/png",c.onchange=async p=>{const h=p.target.files?.[0];if(h){if(h.type!=="image/png"){alert("请选择 PNG 格式的文件");return}try{const m=await this.importHeroFromPNGFile(h);if(!m){alert("无法从该 PNG 文件中读取英雄牌数据");return}this.heroName=m.heroData.name||"",this.heroImageData=m.imageData,this.render()}catch(m){alert("导入失败："+m.message)}}},c.click()}),document.getElementById("export-hero-code-btn")?.addEventListener("click",async()=>{try{const c=await this.exportHeroToPNGBlob(),p=URL.createObjectURL(c),h=document.createElement("a"),m=(this.heroName||"未命名英雄").replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g,"_");h.href=p,h.download=`${m}.png`,h.click(),URL.revokeObjectURL(p)}catch(c){alert("导出失败："+c.message)}}),document.getElementById("hero-copy-btn")?.addEventListener("click",()=>{const c=document.getElementById("hero-export-text");c&&(c.select(),document.execCommand("copy"),alert("已复制到剪贴板！"))}),document.getElementById("add-hero-skill-btn")?.addEventListener("click",()=>{this.heroSkills.push({id:Date.now(),name:`技能${this.heroSkills.length+1}`,type:"active",cost:1,effects:[{...this.createDefaultEffect(),moment:"打出时"}]}),this.heroEditingSkillIndex=this.heroSkills.length-1,this.heroEditingSkillEffectIndex=0,this.render()}),document.querySelectorAll(".hero-skill-delete-btn").forEach(c=>{c.addEventListener("click",p=>{p.stopPropagation();const h=c.dataset.heroSkillIndex;if(h===void 0)return;const m=Number(h);this.heroSkills.splice(m,1),this.render()})}),document.getElementById("hero-skill-type-active")?.addEventListener("click",()=>{const c=this.heroEditingSkillIndex;c===null||!this.heroSkills[c]||(this.heroSkills[c].type="active",this.render())}),document.getElementById("hero-skill-type-passive")?.addEventListener("click",()=>{const c=this.heroEditingSkillIndex;if(c===null||!this.heroSkills[c])return;this.heroSkills[c].type="passive";const p=this.heroSkills[c].effects||[];p.length>0&&p[0].moment==="打出时"&&(p[0].moment="回合开始时"),this.render()}),document.getElementById("add-hero-skill-effect-btn")?.addEventListener("click",()=>{const c=this.heroEditingSkillIndex;if(c===null||!this.heroSkills[c])return;this.heroSkills[c].effects||(this.heroSkills[c].effects=[]);const p=this.heroSkills[c].type==="passive";this.heroSkills[c].effects.push({...this.createDefaultEffect(),moment:p?"回合开始时":"打出时"}),this.heroEditingSkillEffectIndex=this.heroSkills[c].effects.length-1,this.render()}),document.getElementById("remove-hero-skill-effect-btn")?.addEventListener("click",()=>{const c=this.heroEditingSkillIndex;if(c===null||!this.heroSkills[c]?.effects)return;const p=this.heroSkills[c].effects;p.length<=1||(p.splice(this.heroEditingSkillEffectIndex,1),this.heroEditingSkillEffectIndex>=p.length&&(this.heroEditingSkillEffectIndex=p.length-1),this.render())}),document.querySelectorAll(".hero-skill-effect-tab").forEach(c=>{c.addEventListener("click",()=>{const p=c.dataset.heroSkillEffectIndex;p!==void 0&&(this.heroEditingSkillEffectIndex=Number(p),this.render())})}),document.querySelectorAll(".hero-skill-icon").forEach(c=>{c.addEventListener("click",p=>{p.stopPropagation();const h=c.dataset.heroSkillIcon;if(h===void 0)return;const m=document.createElement("input");m.type="file",m.accept="image/*",m.onchange=async f=>{const b=f.target.files?.[0];b&&this.openSkillIconCropModal(b,Number(h))},m.click()})}),document.querySelectorAll(".hero-skill-list-item").forEach(c=>{c.addEventListener("click",p=>{const h=p.target;if(h.closest(".hero-skill-delete-btn")||h.closest(".hero-skill-icon"))return;const m=c.dataset.heroSkillIndex;m!==void 0&&(this.heroEditingSkillIndex=Number(m),this.heroSkills[this.heroEditingSkillIndex],this.render())})}),document.getElementById("hero-skill-name")?.addEventListener("input",c=>{const p=c.target;if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){this.heroSkills[this.heroEditingSkillIndex].name=p.value;const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${this.heroEditingSkillIndex}"] .skill-name-text`);h&&(h.textContent=p.value)}}),document.getElementById("hero-skill-cost")?.addEventListener("input",c=>{const p=c.target;if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){const h=Number(p.value);this.heroSkills[this.heroEditingSkillIndex].cost=h;const m=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${this.heroEditingSkillIndex}"] .skill-cost-num`);m&&(m.textContent=String(h))}}),document.getElementById("hero-skill-cooldown")?.addEventListener("input",c=>{const p=c.target;if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){const h=Math.max(0,Math.min(10,Number(p.value)||0));this.heroSkills[this.heroEditingSkillIndex].cooldown=h;const m=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${this.heroEditingSkillIndex}"] .skill-desc-text`);m&&(m.textContent=this.getHeroSkillDescription(this.heroSkills[this.heroEditingSkillIndex]))}}),document.getElementById("hero-skill-limited-checkbox")?.addEventListener("change",c=>{if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){const p=c.target.checked;this.heroSkills[this.heroEditingSkillIndex].limited=p,p&&!this.heroSkills[this.heroEditingSkillIndex].maxUses&&(this.heroSkills[this.heroEditingSkillIndex].maxUses=1),this.render()}}),document.getElementById("hero-skill-limited-input")?.addEventListener("input",c=>{const p=c.target;if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){const h=Math.max(1,Math.min(10,Number(p.value)||1));this.heroSkills[this.heroEditingSkillIndex].maxUses=h;const m=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${this.heroEditingSkillIndex}"] .skill-desc-text`);m&&(m.textContent=this.getHeroSkillDescription(this.heroSkills[this.heroEditingSkillIndex]))}});const o=this.heroEditingSkillIndex,l=o!==null?this.heroSkills[o]:null;l?.effects?.[this.heroEditingSkillEffectIndex],document.getElementById("toggle-hero-skill-moment-btn")?.addEventListener("click",()=>{this.showHeroSkillMomentPanel=!this.showHeroSkillMomentPanel,this.render()}),document.querySelectorAll(".hero-skill-moment-item").forEach(c=>{c.addEventListener("click",()=>{const p=c.dataset.heroSkillMoment;if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].moment=p,this.showHeroSkillMomentPanel=!1;const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);h&&(h.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}})}),document.getElementById("toggle-hero-skill-condition-btn")?.addEventListener("click",()=>{this.showHeroSkillConditionPanel=!this.showHeroSkillConditionPanel,this.render()}),document.querySelectorAll(".hero-skill-condition-item").forEach(c=>{c.addEventListener("click",p=>{p.stopPropagation();const h=c.dataset.heroSkillCondition;if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const m=l.effects[this.heroEditingSkillEffectIndex];this.setConditionType(h,m),this.render()}})}),document.getElementById("toggle-hero-skill-target-btn")?.addEventListener("click",()=>{this.showHeroSkillTargetPanel=!this.showHeroSkillTargetPanel,this.render()}),document.querySelectorAll(".hero-skill-target-item").forEach(c=>{c.addEventListener("click",()=>{const p=c.dataset.heroSkillTarget;if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const h=l.effects[this.heroEditingSkillEffectIndex];if(h.targets||(h.targets=[]),["无需目标","卡牌","选择目标","选择随从"].includes(p))h.targets.includes(p)?h.targets=[]:(h.targets=[p],(p==="无需目标"||p==="卡牌")&&(this.showHeroSkillTargetPanel=!1));else if(h.targets.some(g=>["无需目标","卡牌","选择目标","选择随从"].includes(g)))h.targets=[p];else{const g=h.targets.indexOf(p);g>=0?h.targets.splice(g,1):h.targets.push(p)}this.showHeroSkillEffectPanel=!0;const m=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);m&&(m.textContent=this.getHeroSkillDescription(this.heroSkills[o]));const f=document.querySelector(".hero-skill-target-scroll");f&&(this.pendingScrollRestoration={selector:".hero-skill-target-scroll",scrollTop:f.scrollTop}),this.render()}})});const d=document.getElementById("random-target-check-hero-skill");d?.addEventListener("click",c=>{c.stopPropagation()}),d?.addEventListener("change",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const p=l.effects[this.heroEditingSkillEffectIndex];p.isRandomTarget=c.target.checked;const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);h&&(h.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.querySelectorAll('.trigger-num-btn[data-editor="hero-skill"]').forEach(c=>{c.addEventListener("click",p=>{p.stopPropagation();const h=this.heroEditingSkillIndex;if(typeof h!="number"||h<0)return;const m=this.heroSkills[h];if(!m?.effects?.[this.heroEditingSkillEffectIndex])return;const f=parseInt(c.dataset.triggerNum||"1",10),b=m.effects[this.heroEditingSkillEffectIndex];b.triggerNumbers||(b.triggerNumbers=[1,2,3,4,5,6]);const g=b.triggerNumbers.indexOf(f);if(g>=0){if(b.triggerNumbers.length===1)return;b.triggerNumbers.splice(g,1)}else b.triggerNumbers.push(f),b.triggerNumbers.sort((y,x)=>y-x);this.render()})}),document.getElementById("hero-skill-opponent-checkbox")?.addEventListener("change",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isOpponent=c.target.checked;const p=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);p&&(p.textContent=this.getHeroSkillDescription(this.heroSkills[o]))}}),document.querySelectorAll(".hero-skill-effect-item").forEach(c=>{c.addEventListener("click",()=>{const p=c.dataset.heroSkillEffect;if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].effect=p;const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);h&&(h.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}})}),document.getElementById("hero-skill-effect-value")?.addEventListener("input",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].value=Number(c.target.value);const p=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);p&&(p.textContent=this.getHeroSkillDescription(this.heroSkills[o]))}}),document.getElementById("hero-skill-attack-value")?.addEventListener("input",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].attackValue=Number(c.target.value);const p=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);p&&(p.textContent=this.getHeroSkillDescription(this.heroSkills[o]))}}),document.getElementById("hero-skill-health-value")?.addEventListener("input",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].healthValue=Number(c.target.value);const p=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);p&&(p.textContent=this.getHeroSkillDescription(this.heroSkills[o]))}}),document.getElementById("hero-skill-atk-pos-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isAttackSet=!1,l.effects[this.heroEditingSkillEffectIndex].isAttackPositive=!0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-atk-zero-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].attackValue=0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-atk-neg-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isAttackSet=!1,l.effects[this.heroEditingSkillEffectIndex].isAttackPositive=!1;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-atk-set-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isAttackSet=!0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-hp-pos-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isHealthSet=!1,l.effects[this.heroEditingSkillEffectIndex].isHealthPositive=!0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-hp-zero-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].healthValue=0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-hp-neg-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isHealthSet=!1,l.effects[this.heroEditingSkillEffectIndex].isHealthPositive=!1;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-hp-set-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isHealthSet=!0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-cost-pos-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isCostSet=!1,l.effects[this.heroEditingSkillEffectIndex].isCostPositive=!0,l.effects[this.heroEditingSkillEffectIndex].costValue===0&&(l.effects[this.heroEditingSkillEffectIndex].costValue=1);const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-cost-zero-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].costValue=0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-cost-neg-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isCostSet=!1,l.effects[this.heroEditingSkillEffectIndex].isCostPositive=!1,l.effects[this.heroEditingSkillEffectIndex].costValue===0&&(l.effects[this.heroEditingSkillEffectIndex].costValue=1);const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.getElementById("hero-skill-cost-set-btn")?.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){l.effects[this.heroEditingSkillEffectIndex].isCostSet=!0,l.effects[this.heroEditingSkillEffectIndex].costValue===0&&(l.effects[this.heroEditingSkillEffectIndex].costValue=1);const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}}),document.querySelectorAll(".hero-skill-summon-source-btn").forEach(c=>{c.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const p=c.dataset.source;l.effects[this.heroEditingSkillEffectIndex].summonSource=p;const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${o}"] .skill-desc-text`);h&&(h.textContent=this.getHeroSkillDescription(this.heroSkills[o])),this.render()}})}),document.querySelectorAll(".hero-skill-summon-card-item").forEach(c=>{c.addEventListener("click",()=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const p=parseInt(c.dataset.heroSkillSummonIndex||"0",10),h=l.effects[this.heroEditingSkillEffectIndex];if(h.isRandom){h.summonedCardIndices=h.summonedCardIndices||[];const m=h.summonedCardIndices.indexOf(p);m>=0?h.summonedCardIndices.splice(m,1):h.summonedCardIndices.push(p)}else h.summonedCardIndex=h.summonedCardIndex===p?void 0:p;this.render()}})}),document.getElementById("hero-skill-summon-random-checkbox")?.addEventListener("change",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const p=l.effects[this.heroEditingSkillEffectIndex];p.isRandom=c.target.checked,p.isRandom?(p.summonedCardIndices=p.summonedCardIndex!==void 0?[p.summonedCardIndex]:[],p.summonedCardIndex=void 0):(p.summonedCardIndex=p.summonedCardIndices?.[0],p.summonedCardIndices=void 0),this.render()}}),document.getElementById("hero-skill-summon-count-input")?.addEventListener("change",c=>{if(o!==null&&l?.effects?.[this.heroEditingSkillEffectIndex]){const p=l.effects[this.heroEditingSkillEffectIndex],h=parseInt(c.target.value)||1;p.value=Math.max(1,h),this.render()}})}openHeroCropModal(e){const s=document.getElementById("crop-modal"),t=document.getElementById("crop-canvas");if(!s||!t)return;const n=Math.min(window.innerWidth*.65,480),i=Math.min(window.innerHeight*.55,520),r=4/3;let a=0,o=0,l=0,d=0;n/i>r?(o=i*.88,a=o*r):(a=n*.88,o=a/r),l=(n-a)/2,d=(i-o)/2,t.width=n,t.height=i;const c=t.getContext("2d");if(!c)return;c.imageSmoothingEnabled=!1;let p=1,h=0,m=0,f=!1,b=0,g=0,y=0,x=0,k=null,u=null,w=!1,I=15,S="medium",T=!1,D=null;const O=()=>{["thin","medium","thick"].forEach(X=>{const v=document.getElementById(`hero-crop-eraser-${X}-btn`);if(v){const j=S===X;v.style.borderColor=j?"#4a9":"#666",v.style.background=j?"#2a6":"#444",v.style.color=j?"#fff":"#aaa"}})},P=(z,X)=>{if(!D||!k)return;const v=(z-h)/p,j=(X-m)/p,H=I/p,M=D.getContext("2d");M.fillStyle="#ffffff",M.beginPath(),M.arc(v,j,Math.max(1,H/2),0,Math.PI*2),M.fill(),Z()},B=z=>{const v=z+8,j=document.createElement("canvas");j.width=v,j.height=v;const H=j.getContext("2d");return H.strokeStyle="rgba(255,255,255,0.95)",H.lineWidth=2,H.beginPath(),H.arc(v/2,v/2,z/2,0,Math.PI*2),H.stroke(),H.strokeStyle="rgba(0,0,0,0.3)",H.lineWidth=1,H.beginPath(),H.arc(v/2,v/2,z/2,0,Math.PI*2),H.stroke(),`url(${j.toDataURL()}) ${v/2} ${v/2}, crosshair`},$=(z,X,v,j,H)=>{const M=n,A=i;z.clearRect(0,0,M,A),z.fillStyle="#1a1a1a",z.fillRect(0,0,M,A),z.save(),z.beginPath(),z.rect(l-30,d-30,a+60,o+60),z.clip(),z.drawImage(X,j,H,X.naturalWidth*v,X.naturalHeight*v),D&&(z.globalCompositeOperation="destination-out",z.drawImage(D,j,H,D.width*v,D.height*v),z.globalCompositeOperation="source-over"),z.restore(),z.fillStyle="rgba(0,0,0,0.6)",z.fillRect(0,0,M,d),z.fillRect(0,d+o,M,A-d-o),z.fillRect(0,d,l,o),z.fillRect(l+a,d,M-l-a,o),z.strokeStyle="rgba(200,160,100,0.9)",z.lineWidth=2,z.strokeRect(l,d,a,o),z.strokeStyle="rgba(255,255,255,0.25)",z.lineWidth=1;const R=o/3,W=a/3;z.beginPath(),z.moveTo(l,d+R),z.lineTo(l+a,d+R),z.moveTo(l,d+R*2),z.lineTo(l+a,d+R*2),z.moveTo(l+W,d),z.lineTo(l+W,d+o),z.moveTo(l+W*2,d),z.lineTo(l+W*2,d+o),z.stroke()};s.style.display="flex";const N=new Image;N.onload=()=>{k=N,D=document.createElement("canvas"),D.width=N.naturalWidth,D.height=N.naturalHeight,D.getContext("2d").clearRect(0,0,D.width,D.height);const X=document.getElementById("hero-crop-eraser-panel");X&&(X.style.display=this.isPortraitMode?"none":"flex"),O();const v=a/N.naturalWidth,j=o/N.naturalHeight;p=Math.max(v,j),h=l+a/2-N.naturalWidth*p/2,m=d+o/2-N.naturalHeight*p/2,$(c,N,p,h,m)},N.src=URL.createObjectURL(e);const J=t.cloneNode(!0);t.parentNode?.replaceChild(J,t);const U=J,ne=U.getContext("2d");ne.imageSmoothingEnabled=!1;const Z=()=>{k&&ne&&$(ne,k,p,h,m)};U.addEventListener("mousedown",z=>{if(w&&k){T=!0,U.style.cursor=B(I),P(z.offsetX,z.offsetY);return}f=!0,b=z.offsetX,g=z.offsetY,y=h,x=m,U.style.cursor="grabbing"});const re=z=>{if(T&&k){const v=U.getBoundingClientRect();P(z.clientX-v.left,z.clientY-v.top);return}if(!f||!U)return;const X=U.getBoundingClientRect();h=y+(z.clientX-X.left-b),m=x+(z.clientY-X.top-g),Z()},q=()=>{if(T){T=!1,U.style.cursor=w?B(I):"grab";return}f&&(f=!1,U.style.cursor="grab")};window.addEventListener("mousemove",re),window.addEventListener("mouseup",q);const C=z=>{if(!k||!U.isConnected||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(z.key))return;z.preventDefault();const X=2;z.key==="ArrowLeft"?h-=X:z.key==="ArrowRight"?h+=X:z.key==="ArrowUp"?m-=X:z.key==="ArrowDown"&&(m+=X),Z()};document.addEventListener("keydown",C),U.addEventListener("wheel",z=>{if(z.preventDefault(),!k)return;const X=U.getBoundingClientRect(),v=z.clientX-X.left,j=z.clientY-X.top,H=z.deltaY<0?1.03:.97,M=Math.max(.1,p*H);h=v-(v-h)*(M/p),m=j-(j-m)*(M/p),p=M,Z()},{passive:!1});let _=0,L=1,V=0,Q=0;U.addEventListener("touchstart",z=>{if(w&&k&&z.touches.length===1){T=!0;const X=U.getBoundingClientRect();P(z.touches[0].clientX-X.left,z.touches[0].clientY-X.top);return}if(z.touches.length===1){f=!0;const X=U.getBoundingClientRect();b=z.touches[0].clientX-X.left,g=z.touches[0].clientY-X.top,y=h,x=m}else if(z.touches.length===2){f=!1;const X=z.touches[0].clientX-z.touches[1].clientX,v=z.touches[0].clientY-z.touches[1].clientY;_=Math.sqrt(X*X+v*v),L=p,V=h,Q=m}},{passive:!0}),U.addEventListener("touchmove",z=>{if(z.preventDefault(),T&&k&&z.touches.length===1){const X=U.getBoundingClientRect();P(z.touches[0].clientX-X.left,z.touches[0].clientY-X.top);return}if(z.touches.length===1&&f){const X=U.getBoundingClientRect();h=y+(z.touches[0].clientX-X.left-b),m=x+(z.touches[0].clientY-X.top-g),Z()}else if(z.touches.length===2){const X=z.touches[0].clientX-z.touches[1].clientX,v=z.touches[0].clientY-z.touches[1].clientY,H=Math.sqrt(X*X+v*v)/Math.max(.001,_),M=Math.max(.1,Math.min(10,L*H)),A=U.getBoundingClientRect(),R=(z.touches[0].clientX+z.touches[1].clientX)/2-A.left,W=(z.touches[0].clientY+z.touches[1].clientY)/2-A.top;h=R-(R-V)*(M/L),m=W-(W-Q)*(M/L),p=M,Z()}},{passive:!1}),U.addEventListener("touchend",()=>{T=!1,f=!1},{passive:!0}),document.getElementById("crop-hcenter-btn")?.addEventListener("click",()=>{k&&(h=l+a/2-k.naturalWidth*p/2,Z())}),document.getElementById("crop-vcenter-btn")?.addEventListener("click",()=>{k&&(m=d+o/2-k.naturalHeight*p/2,Z())}),document.getElementById("crop-cover-btn")?.addEventListener("click",()=>{if(!k)return;const z=a/k.naturalWidth,X=o/k.naturalHeight;p=Math.max(z,X),h=l+a/2-k.naturalWidth*p/2,m=d+o/2-k.naturalHeight*p/2,Z()}),document.getElementById("crop-contain-btn")?.addEventListener("click",()=>{if(!k)return;const z=a/k.naturalWidth,X=o/k.naturalHeight;p=Math.min(z,X),h=l+a/2-k.naturalWidth*p/2,m=d+o/2-k.naturalHeight*p/2,Z()}),document.getElementById("hero-crop-eraser-btn")?.addEventListener("click",()=>{w=!w;const z=document.getElementById("hero-crop-eraser-btn");z&&(z.style.borderColor=w?"#4a9":"#888"),U.style.cursor=w?B(I):"grab"}),document.getElementById("hero-crop-eraser-thin-btn")?.addEventListener("click",()=>{I=5,S="thin",O(),w&&(U.style.cursor=B(5))}),document.getElementById("hero-crop-eraser-medium-btn")?.addEventListener("click",()=>{I=15,S="medium",O(),w&&(U.style.cursor=B(15))}),document.getElementById("hero-crop-eraser-thick-btn")?.addEventListener("click",()=>{I=45,S="thick",O(),w&&(U.style.cursor=B(45))}),U.__cropCleanup=()=>{window.removeEventListener("mousemove",re),window.removeEventListener("mouseup",q),document.removeEventListener("keydown",C);const z=document.getElementById("hero-crop-eraser-panel");z&&(z.style.display="none");const X=document.getElementById("hero-crop-eraser-btn");X&&(X.style.borderColor="#888"),w=!1,T=!1,D=null};const de=()=>{const z=document.getElementById("crop-modal"),X=document.getElementById("crop-canvas");z&&(z.style.display="none"),k&&(URL.revokeObjectURL(k.src),k=null),X?.__cropCleanup&&X.__cropCleanup()},oe=document.getElementById("crop-cancel-btn"),G=oe?.cloneNode(!0);oe&&G&&(oe.parentNode?.replaceChild(G,oe),G.addEventListener("click",de));const ae=document.getElementById("crop-confirm-btn"),le=ae?.cloneNode(!0);ae&&le&&(ae.parentNode?.replaceChild(le,ae),le.addEventListener("click",async()=>{if(!k){de();return}const z=(l-h)/p,X=(d-m)/p,v=a/p,j=o/p,H=document.createElement("canvas");H.width=800,H.height=600;const M=H.getContext("2d");if(!M){de();return}M.imageSmoothingEnabled=!1,M.drawImage(k,z,X,v,j,0,0,800,600),D&&(M.globalCompositeOperation="destination-out",M.drawImage(D,z,X,v,j,0,0,800,600),M.globalCompositeOperation="source-over");const A=H.toDataURL("image/png");try{const{bgDataUrl:R}=await this.generateAtmosphereBackground(A),W=new Image;W.onload=()=>{const Y=document.createElement("canvas");Y.width=400,Y.height=300;const F=Y.getContext("2d");if(F){F.imageSmoothingEnabled=!1,F.drawImage(W,0,0,400,300);const te=Y.toDataURL("image/png"),se=document.createElement("canvas");se.width=400,se.height=300;const ee=se.getContext("2d");if(ee){ee.imageSmoothingEnabled=!1;const K=new Image;K.onload=()=>{ee.drawImage(K,0,0,400,300);const ce=new Image;ce.onload=()=>{const he=Math.max(400/ce.naturalWidth,300/ce.naturalHeight),ge=ce.naturalWidth*he,ye=ce.naturalHeight*he,pe=(400-ge)/2,Ce=(300-ye)/2,xe=30,Pe=.85,Le=xe*4,_e=document.createElement("canvas");_e.width=ge+Le*2,_e.height=ye+Le*2;const Re=_e.getContext("2d");Re&&(Re.imageSmoothingEnabled=!1,Re.drawImage(ce,Le,Le,ge,ye),Re.globalCompositeOperation="source-in",Re.fillStyle="#000000",Re.fillRect(0,0,_e.width,_e.height),Re.globalCompositeOperation="source-over",ee.save(),ee.filter=`blur(${xe}px)`,ee.globalAlpha=Pe,ee.drawImage(_e,pe-Le,Ce-Le),ee.restore()),ee.drawImage(ce,pe,Ce,ge,ye),u=se.toDataURL("image/png"),this.heroImageData=u,this.render()},ce.src=A},K.src=te}}},W.src=R}catch(R){alert("生成氛围感背景失败："+R.message)}de()}))}openVariableSelectorModal(e){document.getElementById("variable-selector-overlay")?.remove();const s=[{key:"my_hand",label:"<我方手牌数>"},{key:"enemy_hand",label:"<敌方手牌数>"},{key:"my_minions",label:"<我方随从数>"},{key:"enemy_minions",label:"<敌方随从数>"}],t=document.createElement("div");t.id="variable-selector-overlay",t.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9999999;display:flex;align-items:center;justify-content:center;";const n=document.createElement("div");n.style.cssText="background:#f5edd6;border-radius:12px;padding:16px;min-width:200px;max-width:280px;box-shadow:0 4px 20px rgba(0,0,0,0.3);",n.innerHTML=`
      <div style="font-weight:bold;font-size:14px;color:#5a4a3a;margin-bottom:10px;text-align:center;">变量列表</div>
      ${s.map(i=>`
        <div class="variable-option" data-variable="${i.key}"
          style="padding:8px 12px;margin:4px 0;border-radius:8px;cursor:pointer;font-size:13px;color:#5a4a3a;background:rgba(212,196,168,0.4);border:1px solid #d4c4a8;transition:all 0.15s;">
          ${i.label}
        </div>
      `).join("")}
    `,t.appendChild(n),document.body.appendChild(t),n.querySelectorAll(".variable-option").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.variable;t.remove(),e(r)}),i.addEventListener("mouseenter",()=>{i.style.background="rgba(111,168,220,0.3)",i.style.borderColor="#6fa8dc"}),i.addEventListener("mouseleave",()=>{i.style.background="rgba(212,196,168,0.4)",i.style.borderColor="#d4c4a8"})}),t.addEventListener("click",i=>{i.target===t&&t.remove()})}openSkillIconCropModal(e,s){const t=document.getElementById("crop-modal"),n=document.getElementById("crop-canvas");if(!t||!n)return;const i=n.getContext("2d");if(!i)return;i.imageSmoothingEnabled=!1,t.style.display="flex";const r=400,a=600,o=600;n.width=a,n.height=o;const l=(a-r)/2,d=(o-r)/2,c=new FileReader;let p="";const h=new Image;h.onload=()=>{const m=h.naturalWidth,f=h.naturalHeight,b=a/m,g=o/f,y=Math.min(b,g);let x=(a-m*y)/2,k=(o-f*y)/2,u=y,w=!1,I=0,S=0,T=0,D=1,O=0,P=0,B=0,$=0;const N=()=>{i.clearRect(0,0,a,o),i.drawImage(h,x,k,m*u,f*u),i.fillStyle="rgba(0,0,0,0.5)",i.beginPath(),i.rect(0,0,a,o),i.arc(l+r/2,d+r/2,r/2,0,Math.PI*2,!0),i.fill("evenodd"),i.strokeStyle="white",i.lineWidth=2,i.setLineDash([8,6]),i.beginPath(),i.arc(l+r/2,d+r/2,r/2,0,Math.PI*2),i.stroke(),i.setLineDash([])};N();const J=G=>{w=!0,I=G.clientX,S=G.clientY},U=G=>{if(!w)return;const ae=G.clientX-I,le=G.clientY-S;x+=ae,k+=le,I=G.clientX,S=G.clientY,N()},ne=()=>{w=!1};n.addEventListener("mousedown",J),window.addEventListener("mousemove",U),window.addEventListener("mouseup",ne);const Z=(G,ae)=>Math.sqrt((G.clientX-ae.clientX)**2+(G.clientY-ae.clientY)**2),re=G=>{if(G.preventDefault(),G.touches.length===1)w=!0,I=G.touches[0].clientX,S=G.touches[0].clientY;else if(G.touches.length===2){w=!1,T=Z(G.touches[0],G.touches[1]),D=u,O=(G.touches[0].clientX+G.touches[1].clientX)/2,P=(G.touches[0].clientY+G.touches[1].clientY)/2;const ae=n.getBoundingClientRect();B=O-ae.left,$=P-ae.top,B=(B-x)/u,$=($-k)/u}},q=G=>{if(G.preventDefault(),G.touches.length===1&&w){const ae=G.touches[0].clientX-I,le=G.touches[0].clientY-S;x+=ae,k+=le,I=G.touches[0].clientX,S=G.touches[0].clientY,N()}else if(G.touches.length===2){const ae=Z(G.touches[0],G.touches[1]),le=Math.max(.1,Math.min(D*(ae/T),5)),z=n.getBoundingClientRect(),X=(G.touches[0].clientX+G.touches[1].clientX)/2-z.left,v=(G.touches[0].clientY+G.touches[1].clientY)/2-z.top;x=X-B*le,k=v-$*le,u=le,N()}},C=G=>{G.touches.length===0&&(w=!1)};n.addEventListener("touchstart",re,{passive:!1}),n.addEventListener("touchmove",q,{passive:!1}),n.addEventListener("touchend",C);const _=G=>{G.preventDefault();const ae=n.getBoundingClientRect(),le=G.clientX-ae.left,z=G.clientY-ae.top,X=G.deltaY>0?.97:1.03,v=Math.max(.1,u*X),j=(le-x)/u,H=(z-k)/u;x=le-j*v,k=z-H*v,u=v,N()};n.addEventListener("wheel",_,{passive:!1});const L=G=>{if(!h||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(G.key))return;G.preventDefault();const ae=2;G.key==="ArrowLeft"?x-=ae:G.key==="ArrowRight"?x+=ae:G.key==="ArrowUp"?k-=ae:G.key==="ArrowDown"&&(k+=ae),N()};document.addEventListener("keydown",L);const V=()=>{t.style.display="none",n.removeEventListener("mousedown",J),window.removeEventListener("mousemove",U),window.removeEventListener("mouseup",ne),n.removeEventListener("wheel",_),n.removeEventListener("touchstart",re),n.removeEventListener("touchmove",q),n.removeEventListener("touchend",C),de.removeEventListener("click",oe),Q.removeEventListener("click",V),document.removeEventListener("keydown",L)},Q=document.getElementById("crop-cancel-btn"),de=document.getElementById("crop-confirm-btn");Q.addEventListener("click",V);const oe=async()=>{if(!h){V();return}const G=(l-x)/u,ae=(d-k)/u,le=r/u,z=r/u,X=document.createElement("canvas");X.width=r,X.height=r;const v=X.getContext("2d");if(!v){V();return}v.imageSmoothingEnabled=!1,v.drawImage(h,G,ae,le,z,0,0,r,r);const j=X.toDataURL("image/png");try{const{bgDataUrl:H}=await this.generateAtmosphereBackground(j),M=new Image;M.onload=()=>{const A=document.createElement("canvas");A.width=100,A.height=100;const R=A.getContext("2d");if(!R){V();return}R.imageSmoothingEnabled=!1,R.beginPath(),R.arc(50,50,50,0,Math.PI*2),R.closePath(),R.save(),R.clip();const W=Math.max(100/M.naturalWidth,100/M.naturalHeight),Y=M.naturalWidth*W,F=M.naturalHeight*W,te=(100-Y)/2,se=(100-F)/2;R.drawImage(M,te,se,Y,F),R.drawImage(X,0,0,r,r,0,0,100,100),R.restore();const ee=A.toDataURL("image/png");this.heroSkills[s]&&(this.heroSkills[s].iconData=ee),this.render(),V()},M.src=H}catch(H){alert("生成氛围感背景失败："+H.message),V()}};document.getElementById("crop-hcenter-btn")?.addEventListener("click",()=>{h&&(x=l+r/2-h.naturalWidth*u/2,N())}),document.getElementById("crop-vcenter-btn")?.addEventListener("click",()=>{h&&(k=d+r/2-h.naturalHeight*u/2,N())}),document.getElementById("crop-cover-btn")?.addEventListener("click",()=>{if(!h)return;const G=r/h.naturalWidth,ae=r/h.naturalHeight;u=Math.max(G,ae),x=l+r/2-h.naturalWidth*u/2,k=d+r/2-h.naturalHeight*u/2,N()}),document.getElementById("crop-contain-btn")?.addEventListener("click",()=>{if(!h)return;const G=r/h.naturalWidth,ae=r/h.naturalHeight;u=Math.min(G,ae),x=l+r/2-h.naturalWidth*u/2,k=d+r/2-h.naturalHeight*u/2,N()}),de.addEventListener("click",oe)},c.onload=()=>{p=c.result,h.src=p},c.readAsDataURL(e)}attachCardCreatorEvents(){document.getElementById("side-panel-handle")?.addEventListener("click",()=>{this.showSidePanel=!this.showSidePanel,this.renderCardCreator()}),document.getElementById("close-side-panel-btn")?.addEventListener("click",()=>{this.showSidePanel=!1,this.renderCardCreator()}),document.getElementById("toggle-side-panel-btn")?.addEventListener("click",()=>{this.showSidePanel=!this.showSidePanel,this.renderCardCreator()}),document.getElementById("card-type-minion")?.addEventListener("click",()=>{this.currentCard.type="minion",this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("card-type-spell")?.addEventListener("click",()=>{this.currentCard.type="spell",(!this.currentCard.effects||this.currentCard.effects.length===0)&&(this.currentCard.effects=[{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}]),this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("card-type-minion-side")?.addEventListener("click",()=>{this.currentCard.type="minion",this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("card-type-spell-side")?.addEventListener("click",()=>{this.currentCard.type="spell",(!this.currentCard.effects||this.currentCard.effects.length===0)&&(this.currentCard.effects=[{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}]),this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("add-derived-card-btn")?.addEventListener("click",()=>{this.addDerivedCard(),this.renderCardCreator()}),document.querySelectorAll(".card-list-item").forEach(C=>{C.addEventListener("click",_=>{if(_.target.classList.contains("card-list-delete-btn"))return;const V=parseInt(C.dataset.cardIndex||"0",10);this.currentCardIndex=V,this.currentEffectIndex=0,this.renderCardCreator()})}),document.querySelectorAll(".card-list-delete-btn").forEach(C=>{C.addEventListener("click",_=>{_.stopPropagation();const L=parseInt(C.dataset.cardIndex||"0",10);L!==0&&(this.deleteDerivedCard(L),this.renderCardCreator())})}),document.getElementById("prev-card-btn")?.addEventListener("click",()=>{this.currentCardIndex=(this.currentCardIndex-1+this.editingCards.length)%this.editingCards.length,this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("next-card-btn")?.addEventListener("click",()=>{this.currentCardIndex=(this.currentCardIndex+1)%this.editingCards.length,this.currentEffectIndex=0,this.renderCardCreator()}),document.querySelectorAll(".spell-target-item").forEach(C=>{C.addEventListener("click",()=>{const _=C.dataset.spellTarget,L=this.currentCard.effects?.[this.currentEffectIndex];if(!L)return;L.targets||(L.targets=[]);const V=C.closest(".target-scroll-container"),Q=document.querySelectorAll(".target-scroll-container"),de=Array.from(Q).indexOf(V);if(this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:V?V.scrollTop:0,containerIndex:de>=0?de:0},["无需目标","卡牌","选择目标","选择随从"].includes(_))L.targets.includes(_)?L.targets=[]:(L.targets=[_],this.showTargetPanel=!1);else if(L.targets.some(G=>["无需目标","卡牌","选择目标","选择随从"].includes(G)))L.targets=[_];else{const G=L.targets.indexOf(_);G>=0?L.targets.splice(G,1):L.targets.push(_)}this.showEffectPanel=!0,this.renderCardCreator()})}),document.querySelectorAll(".spell-moment-item").forEach(C=>{C.addEventListener("click",()=>{const _=C.dataset.spellMoment,L=this.currentCard.effects?.[this.currentEffectIndex],V=!!L?.moment;if(L&&(L.moment=_,(_==="打出时"||_==="死亡时")&&L.effect==="变化"&&(L.effect=null,L.summonedCardIndex=void 0),_==="打出时"&&L.effect==="召唤"&&L.summonedCardIndex===this.currentCardIndex)){const Q=this.editingCards.map((de,oe)=>oe).filter(de=>!(this.editingCards[de].type==="spell"||de===this.currentCardIndex));L.summonedCardIndex=Q.length>0?Q[0]:0}V||(this.showMomentPanel=!1),this.renderCardCreator()})}),document.querySelectorAll(".spell-effect-item").forEach(C=>{C.addEventListener("click",()=>{const _=C.dataset.spellEffectType,L=this.currentCard.effects?.[this.currentEffectIndex];if(L&&(L.effect=_,["召唤","获得","变化"].includes(_))){L.value=1;const V=this.editingCards.map((Q,de)=>de).filter(Q=>!((_==="变化"||_==="召唤")&&this.editingCards[Q].type==="spell"||_==="变化"&&Q===this.currentCardIndex||_==="召唤"&&ze(L,"打出时")&&Q===this.currentCardIndex));L.summonedCardIndex=V.length>0?V[0]:0}this.showEffectPanel=!1,this.renderCardCreator()})}),document.getElementById("toggle-spell-target-btn")?.addEventListener("click",()=>{this.showTargetPanel=!this.showTargetPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-target-btn-side")?.addEventListener("click",()=>{this.showTargetPanel=!this.showTargetPanel,this.renderCardCreator()});const e=document.getElementById("opponent-checkbox-spell-side");e?.addEventListener("click",C=>{C.stopPropagation()}),e?.addEventListener("change",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.isOpponent=C.target.checked,this.renderCardCreator())});const s=document.getElementById("opponent-checkbox-spell");s?.addEventListener("click",C=>{C.stopPropagation()}),s?.addEventListener("change",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.isOpponent=C.target.checked,this.renderCardCreator())}),document.getElementById("toggle-spell-moment-btn")?.addEventListener("click",()=>{this.showMomentPanel=!this.showMomentPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-moment-btn-side")?.addEventListener("click",()=>{this.showMomentPanel=!this.showMomentPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-effect-btn")?.addEventListener("click",()=>{this.showEffectPanel=!this.showEffectPanel,this.renderCardCreator()}),document.getElementById("spell-effect-value")?.addEventListener("input",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.value=Math.max(1,parseInt(C.target.value)||1)),this.updateCardPreview()}),document.querySelectorAll(".element-select-btn").forEach(C=>{C.addEventListener("click",()=>{const _=C,L=_.dataset.elementType||void 0;_.dataset.spell;const V=this.currentCard.effects?.[this.currentEffectIndex];V&&(V.elementType=L,this.updateCardPreview(),this.renderCardCreator())})}),document.querySelectorAll(".spell-summon-source-btn").forEach(C=>{C.addEventListener("click",()=>{const _=C.dataset.source,L=this.currentCard.effects?.[this.currentEffectIndex];L&&L.effect&&["召唤","获得","变化","属性变化"].includes(L.effect)&&(L.summonSource=_,this.updateEffectDescription(),this.renderCardCreator())})}),document.querySelectorAll(".spell-summon-card-item").forEach(C=>{C.addEventListener("click",()=>{const _=parseInt(C.dataset.spellSummonIndex||"0"),L=this.currentCard.effects?.[this.currentEffectIndex];if(L&&L.effect&&["召唤","获得","变化"].includes(L.effect)){if(L.isRandom){const V=L.summonedCardIndices??[];V.includes(_)?L.summonedCardIndices=V.filter(Q=>Q!==_):L.summonedCardIndices=[...V,_],L.summonedCardIndex=L.summonedCardIndices[0]??0}else L.summonedCardIndex=_,L.summonedCardIndices=void 0;this.updateCardPreview(),this.renderCardCreator()}})}),document.getElementById("spell-summon-random-checkbox")?.addEventListener("change",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&_.effect&&["召唤","获得","变化","属性变化"].includes(_.effect)&&(_.isRandom=C.target.checked,!_.isRandom&&_.summonedCardIndices&&_.summonedCardIndices.length>0?(_.summonedCardIndex=_.summonedCardIndices[0],_.summonedCardIndices=void 0):_.isRandom&&_.summonedCardIndex!==void 0&&(_.summonedCardIndices=[_.summonedCardIndex]),this.updateCardPreview(),this.renderCardCreator())}),document.getElementById("spell-summon-count-input")?.addEventListener("change",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];if(_&&_.effect&&["召唤","获得"].includes(_.effect)){const L=parseInt(C.target.value)||1;_.value=Math.max(1,L),this.updateCardPreview(),this.renderCardCreator()}}),document.getElementById("spell-attack-value")?.addEventListener("input",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.attackValue=Math.max(0,parseInt(C.target.value)||0)),this.updateCardPreview()}),document.getElementById("spell-health-value")?.addEventListener("input",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.healthValue=Math.max(0,parseInt(C.target.value)||0)),this.updateCardPreview()}),document.getElementById("spell-attack-positive-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isAttackSet=!1,C.isAttackPositive=!0,C.attackValue===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-zero-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.attackValue=0,C.healthValue===0&&(C.costValue||0)===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-negative-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isAttackSet=!1,C.isAttackPositive=!1,C.attackValue===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-set-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isAttackSet=!0,C.attackValue===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-positive-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isHealthSet=!1,C.isHealthPositive=!0,C.healthValue===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-zero-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.healthValue=0,C.attackValue===0&&(C.costValue||0)===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-negative-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isHealthSet=!1,C.isHealthPositive=!1,C.healthValue===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-set-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isHealthSet=!0,C.healthValue===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-cost-positive-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isCostSet=!1,C.isCostPositive=!0,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("spell-cost-zero-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.costValue=0,this.renderCardCreator())}),document.getElementById("spell-cost-negative-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isCostSet=!1,C.isCostPositive=!1,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("spell-cost-set-btn")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isCostSet=!0,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("spell-effect-value-side")?.addEventListener("input",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.value=Math.max(1,parseInt(C.target.value)||1)),this.renderCardCreator()}),document.getElementById("spell-attack-value-side")?.addEventListener("input",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.attackValue=Math.max(0,parseInt(C.target.value)||0)),this.renderCardCreator()}),document.getElementById("spell-health-value-side")?.addEventListener("input",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.healthValue=Math.max(0,parseInt(C.target.value)||0)),this.renderCardCreator()}),document.getElementById("spell-attack-positive-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isAttackSet=!1,C.isAttackPositive=!0,C.attackValue===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-zero-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.attackValue=0,C.healthValue===0&&(C.costValue||0)===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-negative-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isAttackSet=!1,C.isAttackPositive=!1,C.attackValue===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-set-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isAttackSet=!0,C.attackValue===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-positive-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isHealthSet=!1,C.isHealthPositive=!0,C.healthValue===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-zero-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.healthValue=0,C.attackValue===0&&(C.costValue||0)===0&&(C.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-negative-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isHealthSet=!1,C.isHealthPositive=!1,C.healthValue===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-set-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isHealthSet=!0,C.healthValue===0&&(C.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-cost-positive-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isCostSet=!1,C.isCostPositive=!0,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("spell-cost-zero-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.costValue=0,this.renderCardCreator())}),document.getElementById("spell-cost-negative-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isCostSet=!1,C.isCostPositive=!1,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("spell-cost-set-btn-side")?.addEventListener("click",()=>{const C=this.currentCard.effects?.[this.currentEffectIndex];C&&(C.isCostSet=!0,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("toggle-keywords-btn")?.addEventListener("click",()=>{this.showKeywordsPanel=!this.showKeywordsPanel,this.renderCardCreator()}),document.getElementById("toggle-keywords-section-btn")?.addEventListener("click",()=>{this.showKeywordsPanel=!this.showKeywordsPanel,this.renderCardCreator()}),document.getElementById("toggle-moment-btn")?.addEventListener("click",()=>{this.showMomentPanel=!this.showMomentPanel,this.renderCardCreator()}),document.querySelectorAll(".trigger-num-btn").forEach(C=>{C.addEventListener("click",_=>{_.stopPropagation();const L=parseInt(C.dataset.triggerNum||"1",10),V=C.dataset.editor;let Q=null;if(V==="spell"?Q=this.currentCard.effects?.[this.currentEffectIndex]||null:Q=this.currentCard.effects?.[this.currentEffectIndex]||null,!Q)return;Q.triggerNumbers||(Q.triggerNumbers=[1,2,3,4,5,6]);const de=Q.triggerNumbers.indexOf(L);if(de>=0){if(Q.triggerNumbers.length===1)return;Q.triggerNumbers.splice(de,1)}else Q.triggerNumbers.push(L),Q.triggerNumbers.sort((oe,G)=>oe-G);this.renderCardCreator()})}),document.getElementById("toggle-condition-btn")?.addEventListener("click",()=>{this.showConditionPanel=!this.showConditionPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-condition-btn-side")?.addEventListener("click",()=>{this.showConditionPanel=!this.showConditionPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-condition-btn")?.addEventListener("click",()=>{this.showConditionPanel=!this.showConditionPanel,this.renderCardCreator()}),document.querySelectorAll(".condition-item").forEach(C=>{C.addEventListener("click",_=>{_.stopPropagation();const L=C.dataset.condition,V=this.currentCard.effects?.[this.currentEffectIndex];V&&(this.setConditionType(L,V),this.renderCardCreator())})}),document.querySelectorAll(".condition-item-spell").forEach(C=>{C.addEventListener("click",_=>{_.stopPropagation();const L=C.dataset.spellCondition,V=this.currentCard.effects?.[this.currentEffectIndex];V&&(this.setConditionType(L,V),this.renderCardCreator())})}),document.querySelectorAll(".spell-condition-item-side").forEach(C=>{C.addEventListener("click",_=>{_.stopPropagation();const L=C.dataset.spellConditionSide,V=this.currentCard.effects?.[this.currentEffectIndex];V&&(this.setConditionType(L,V),this.renderCardCreator())})}),document.getElementById("toggle-target-btn")?.addEventListener("click",()=>{this.showTargetPanel=!this.showTargetPanel,this.renderCardCreator()});const t=document.getElementById("random-target-check");t?.addEventListener("click",C=>{C.stopPropagation()}),t?.addEventListener("change",C=>{const _=this.currentCard.effects[this.currentEffectIndex];if(_){_.isRandomTarget=C.target.checked,this.renderCardCreator();const L=document.getElementById("toggle-target-btn");L&&L.scrollIntoView({behavior:"instant",block:"nearest"})}});const n=document.getElementById("random-target-check-spell-side");n?.addEventListener("click",C=>{C.stopPropagation()}),n?.addEventListener("change",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];if(_){const L=document.querySelector(".target-scroll-container");L&&(this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:L.scrollTop}),_.isRandomTarget=C.target.checked,this.renderCardCreator()}});const i=document.getElementById("random-target-check-spell");i?.addEventListener("click",C=>{C.stopPropagation()}),i?.addEventListener("change",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];if(_){const L=document.querySelector(".target-scroll-container");L&&(this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:L.scrollTop}),_.isRandomTarget=C.target.checked,this.renderCardCreator()}}),document.getElementById("random-target-times-spell-side")?.addEventListener("change",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.randomTargetTimes=Math.max(1,parseInt(C.target.value)||1),this.renderCardCreator())}),document.getElementById("random-target-times-spell")?.addEventListener("change",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.randomTargetTimes=Math.max(1,parseInt(C.target.value)||1),this.renderCardCreator())});const r=document.getElementById("opponent-target-check");r?.addEventListener("click",C=>{C.stopPropagation()}),r?.addEventListener("change",C=>{const _=this.currentCard.effects[this.currentEffectIndex];if(_){_.isOpponent=C.target.checked,this.renderCardCreator();const L=document.getElementById("toggle-target-btn");L&&L.scrollIntoView({behavior:"instant",block:"nearest"})}}),document.getElementById("variable-select-btn")?.addEventListener("click",()=>{this.openVariableSelectorModal(C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.variableChange?_.variableChange.variable=C:_.variableChange={variable:C,increase:!0,decrease:!0},this.renderCardCreator())})}),document.getElementById("variable-select-btn-lg")?.addEventListener("click",()=>{this.openVariableSelectorModal(C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.variableChange?_.variableChange.variable=C:_.variableChange={variable:C,increase:!0,decrease:!0},this.renderCardCreator())})});const a=document.getElementById("var-increase-check"),o=document.getElementById("var-decrease-check");a?.addEventListener("click",C=>C.stopPropagation()),o?.addEventListener("click",C=>C.stopPropagation()),a?.addEventListener("change",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.variableChange||(_.variableChange={variable:"my_hand",increase:!0,decrease:!0}),_.variableChange.increase=C.target.checked,this.renderCardCreator())}),o?.addEventListener("change",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.variableChange||(_.variableChange={variable:"my_hand",increase:!0,decrease:!0}),_.variableChange.decrease=C.target.checked,this.renderCardCreator())});const l=document.getElementById("var-increase-check-lg"),d=document.getElementById("var-decrease-check-lg");l?.addEventListener("click",C=>C.stopPropagation()),d?.addEventListener("click",C=>C.stopPropagation()),l?.addEventListener("change",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.variableChange||(_.variableChange={variable:"my_hand",increase:!0,decrease:!0}),_.variableChange.increase=C.target.checked,this.renderCardCreator())}),d?.addEventListener("change",C=>{const _=this.currentCard.effects?.[this.currentEffectIndex];_&&(_.variableChange||(_.variableChange={variable:"my_hand",increase:!0,decrease:!0}),_.variableChange.decrease=C.target.checked,this.renderCardCreator())}),document.getElementById("toggle-effect-btn")?.addEventListener("click",()=>{this.showEffectPanel=!this.showEffectPanel,this.renderCardCreator()}),document.getElementById("card-name")?.addEventListener("input",C=>{this.currentCard.name=C.target.value,this.updateCardPreview()}),document.getElementById("card-cost")?.addEventListener("input",C=>{this.currentCard.cost=Math.min(20,Math.max(0,parseInt(C.target.value)||0)),this.updateCardPreview()}),document.getElementById("card-attack")?.addEventListener("input",C=>{this.currentCard.attack=Math.max(0,parseInt(C.target.value)||0),this.updateCardPreview()}),document.getElementById("card-health")?.addEventListener("input",C=>{this.currentCard.health=Math.max(1,parseInt(C.target.value)||1),this.updateCardPreview()}),document.getElementById("card-armor")?.addEventListener("input",C=>{const _=Math.max(1,parseInt(C.target.value)||1);this.currentCard.armorValue=_,this.currentCard.keywords&&(this.currentCard.keywords=this.currentCard.keywords.map(L=>L.name==="护甲"?{...L,value:_}:L)),this.updateCardPreview()}),document.getElementById("card-preparation")?.addEventListener("input",C=>{const _=Math.max(1,parseInt(C.target.value)||1);this.currentCard.preparationValue=_,this.currentCard.keywords&&(this.currentCard.keywords=this.currentCard.keywords.map(L=>L.name==="准备"?{...L,value:_}:L)),this.updateCardPreview()}),document.getElementById("reset-card-btn")?.addEventListener("click",()=>{const C=this.currentCard.type;this.initCardsArray(C),this.renderCardCreator()}),document.getElementById("effect-value")?.addEventListener("input",C=>{const _=this.getCurrentEffect();_&&(_.value=Math.max(1,parseInt(C.target.value)||1),this.updateEffectDescription())}),document.querySelectorAll(".grant-keyword-item").forEach(C=>{C.addEventListener("click",()=>{const _=C.dataset.grantKeyword,L=this.getCurrentEffect();L&&L.effect==="给予词条"&&(L.grantedKeywordName===_?(L.grantedKeywordName="",L.grantedKeywordValue=void 0):(L.grantedKeywordName=_,_==="护甲"||["🔥","❄️","⚡️"].includes(_)?L.grantedKeywordValue=L.grantedKeywordValue??1:L.grantedKeywordValue=void 0),this.updateEffectDescription(),this.renderCardCreator())})}),document.getElementById("grant-keyword-value")?.addEventListener("input",C=>{const _=this.getCurrentEffect();_&&_.effect==="给予词条"&&(_.grantedKeywordValue=Math.max(1,parseInt(C.target.value)||1),this.updateEffectDescription())}),document.querySelectorAll(".summon-source-btn, .summon-source-btn-2").forEach(C=>{C.addEventListener("click",()=>{const _=C.dataset.source,L=this.getCurrentEffect();L&&L.effect&&["召唤","获得","变化","属性变化"].includes(L.effect)&&(L.summonSource=_,this.updateEffectDescription(),this.renderCardCreator())})}),document.querySelectorAll(".summon-card-item").forEach(C=>{C.addEventListener("click",()=>{const _=parseInt(C.dataset.summonIndex||"0"),L=this.getCurrentEffect();if(L&&L.effect&&["召唤","获得","变化"].includes(L.effect)){if(L.isRandom){const V=L.summonedCardIndices??[];V.includes(_)?L.summonedCardIndices=V.filter(Q=>Q!==_):L.summonedCardIndices=[...V,_],L.summonedCardIndex=L.summonedCardIndices[0]??0}else L.summonedCardIndex=_,L.summonedCardIndices=void 0;this.updateEffectDescription(),this.renderCardCreator()}})}),["summon-random-checkbox","summon-random-checkbox-2","attr-random-checkbox-2"].forEach(C=>{document.getElementById(C)?.addEventListener("change",_=>{const L=this.getCurrentEffect();L&&L.effect&&["召唤","获得","变化","属性变化"].includes(L.effect)&&(L.isRandom=_.target.checked,!L.isRandom&&L.summonedCardIndices&&L.summonedCardIndices.length>0?(L.summonedCardIndex=L.summonedCardIndices[0],L.summonedCardIndices=void 0):L.isRandom&&L.summonedCardIndex!==void 0&&(L.summonedCardIndices=[L.summonedCardIndex]),this.updateEffectDescription(),this.renderCardCreator())})}),["summon-count-input","summon-count-input-2"].forEach(C=>{document.getElementById(C)?.addEventListener("change",_=>{const L=this.getCurrentEffect();if(L&&L.effect&&["召唤","获得"].includes(L.effect)){const V=parseInt(_.target.value)||1;L.value=Math.max(1,V),this.updateEffectDescription(),this.renderCardCreator()}})}),document.getElementById("positive-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isPositive=!0,this.renderCardCreator())}),document.getElementById("negative-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isPositive=!1,this.renderCardCreator())}),document.getElementById("clear-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects[this.currentEffectIndex]=this.createDefaultEffect(),this.renderCardCreator()});const c={rage:["连击","狂怒"],"🔥":["🔥","❄️","⚡️"],机动:["机动","嘲讽"]},p={};Object.values(c).forEach(C=>{C.forEach(_=>{p[_]=C})}),document.querySelectorAll(".keyword-item").forEach(C=>{C.addEventListener("click",_=>{_.preventDefault(),_.stopPropagation();const L=C.closest(".keyword-scroll-container"),V=document.querySelectorAll(".keyword-scroll-container"),Q=Array.from(V).indexOf(L);this.pendingScrollRestoration={selector:".keyword-scroll-container",scrollTop:L?L.scrollTop:0,containerIndex:Q>=0?Q:0};const de=C.dataset.keywordName,oe=Object.values(Ee).find(G=>G.name===de);if(oe){["🔥","❄️","⚡️"].includes(de)?(this.lastElementKeyword===de?this.elementClickCount++:(this.elementClickCount=1,this.lastElementKeyword=de),this.elementClickCount>=6&&(this.elementClickCount=0,this.lastElementKeyword=null,this.triggerEditorExplosion(de))):(this.elementClickCount=0,this.lastElementKeyword=null);const ae=this.currentCard.keywords.findIndex(le=>le.name===de);if(ae>=0)this.currentCard.keywords.splice(ae,1);else{const le=p[de];if(le&&(this.currentCard.keywords=this.currentCard.keywords.filter(z=>!le.includes(z.name))),oe.hasValue){const z=oe.name==="护甲"?this.currentCard.armorValue:oe.name==="准备"?this.currentCard.preparationValue:1;this.currentCard.keywords.push({...oe,value:z})}else this.currentCard.keywords.push(oe)}this.renderCardCreator()}})}),document.querySelectorAll(".clear-keywords-btn").forEach(C=>{C.addEventListener("click",_=>{_.preventDefault(),_.stopPropagation(),this.currentCard.keywords=[],this.renderCardCreator()})}),document.querySelectorAll(".effect-tab").forEach(C=>{C.addEventListener("click",()=>{const _=parseInt(C.dataset.effectIndex||"0");this.currentEffectIndex=_,this.renderCardCreator()})}),document.getElementById("add-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects||(this.currentCard.effects=[]),this.currentCard.effects.push(this.createDefaultEffect()),this.currentEffectIndex=this.currentCard.effects.length-1,this.showMomentPanel=!0,this.renderCardCreator()}),document.getElementById("remove-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects&&this.currentCard.effects.length>0&&(this.currentCard.effects.pop(),this.currentEffectIndex>=this.currentCard.effects.length&&(this.currentEffectIndex=Math.max(0,this.currentCard.effects.length-1)),this.renderCardCreator())}),document.getElementById("add-spell-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects||(this.currentCard.effects=[]),this.currentCard.effects.push({moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0,randomTargetTimes:1}),this.currentEffectIndex=this.currentCard.effects.length-1,this.renderCardCreator()}),document.getElementById("remove-spell-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects&&this.currentCard.effects.length>1&&(this.currentCard.effects.pop(),this.currentEffectIndex>=this.currentCard.effects.length&&(this.currentEffectIndex=Math.max(0,this.currentCard.effects.length-1)),this.renderCardCreator())}),document.querySelectorAll(".moment-item").forEach(C=>{C.addEventListener("click",()=>{const _=this.getCurrentEffect();if(_){const L=C.dataset.moment;_.moments||(_.moments=_.moment?[_.moment]:[]);const V=_.moments.length>0,Q=_.moments.indexOf(L);Q>=0?_.moments.splice(Q,1):_.moments.push(L),_.moment=_.moments.length>0?_.moments[0]:null,_.moments.length===1&&!V&&(_.targets=[],_.effect=null,this.showMomentPanel=!1,this.showTargetPanel=!0)}this.renderCardCreator()})}),document.querySelectorAll(".target-item").forEach(C=>{C.addEventListener("click",()=>{const _=this.getCurrentEffect();if(!_)return;const L=C.closest(".target-scroll-container"),V=document.querySelectorAll(".target-scroll-container"),Q=Array.from(V).indexOf(L);this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:L?L.scrollTop:0,containerIndex:Q>=0?Q:0};const de=C.dataset.target,oe=_.targets;if(["无需目标","卡牌","选择目标","选择随从","攻击目标"].includes(de))oe.includes(de)?_.targets=[]:(_.targets=[de],this.showTargetPanel=!1);else if(oe.some(ae=>["无需目标","卡牌","选择目标","选择随从","攻击目标"].includes(ae)))_.targets=[de];else{const ae=oe.indexOf(de);ae>=0?oe.splice(ae,1):oe.push(de)}_.effect=null,this.showEffectPanel=!0,this.renderCardCreator()})}),document.querySelectorAll(".effect-item").forEach(C=>{C.addEventListener("click",()=>{const _=this.getCurrentEffect();if(!_)return;const L=C.dataset.effect;if(_.effect=L,L==="造成伤害")_.value=1;else if(L==="抽牌")_.value=1;else if(L==="弃牌")_.value=1;else if(L==="属性变化")_.attackValue=1,_.healthValue=1,_.isAttackPositive=!0,_.isHealthPositive=!0;else if(L==="给予印记")_.value=1;else if(["召唤","获得","变化"].includes(L)){_.value=1;const V=this.editingCards.map((Q,de)=>de).filter(Q=>!((L==="变化"||L==="召唤")&&this.editingCards[Q].type==="spell"||L==="变化"&&Q===this.currentCardIndex||L==="召唤"&&ze(_,"打出时")&&Q===this.currentCardIndex));_.summonedCardIndex=V.length>0?V[0]:0}this.showEffectPanel=!1,this.renderCardCreator()})}),document.getElementById("effect-attack-value")?.addEventListener("input",C=>{const _=this.getCurrentEffect();if(_){const L=parseInt(C.target.value);_.attackValue=isNaN(L)?0:Math.max(0,Math.min(99,L)),this.updateEffectDescription(),this.updateCardPreview()}}),document.getElementById("effect-health-value")?.addEventListener("input",C=>{const _=this.getCurrentEffect();if(_){const L=parseInt(C.target.value);_.healthValue=isNaN(L)?0:Math.max(0,Math.min(99,L)),this.updateEffectDescription(),this.updateCardPreview()}}),document.getElementById("attack-positive-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isAttackSet=!1,C.isAttackPositive=!0,C.attackValue===0&&(C.attackValue=1),this.renderCardCreator())}),document.getElementById("attack-zero-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.attackValue=0,C.healthValue===0&&(C.costValue||0)===0&&(C.healthValue=1),this.renderCardCreator())}),document.getElementById("attack-negative-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isAttackSet=!1,C.isAttackPositive=!1,C.attackValue===0&&(C.attackValue=1),this.renderCardCreator())}),document.getElementById("attack-set-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isAttackSet=!0,C.attackValue===0&&(C.attackValue=1),this.renderCardCreator())}),document.getElementById("health-positive-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isHealthSet=!1,C.isHealthPositive=!0,C.healthValue===0&&(C.healthValue=1),this.renderCardCreator())}),document.getElementById("health-zero-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.healthValue=0,C.attackValue===0&&(C.costValue||0)===0&&(C.attackValue=1),this.renderCardCreator())}),document.getElementById("health-negative-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isHealthSet=!1,C.isHealthPositive=!1,C.healthValue===0&&(C.healthValue=1),this.renderCardCreator())}),document.getElementById("health-set-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isHealthSet=!0,C.healthValue===0&&(C.healthValue=1),this.renderCardCreator())}),document.getElementById("cost-positive-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isCostSet=!1,C.isCostPositive=!0,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("cost-zero-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.costValue=0,this.renderCardCreator())}),document.getElementById("cost-negative-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isCostSet=!1,C.isCostPositive=!1,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("cost-set-btn")?.addEventListener("click",()=>{const C=this.getCurrentEffect();C&&(C.isCostSet=!0,C.costValue===0&&(C.costValue=1),this.renderCardCreator())}),document.getElementById("add-to-deck-btn")?.addEventListener("click",async()=>{if(this.editingCards.some((z,X)=>(z.effects||[]).some(j=>j.effect==="召唤"?j.summonSource&&j.summonSource!=="derived"?!1:this.editingCards.filter((M,A)=>!(this.editingCards[A].type==="spell"||ze(j,"打出时")&&A===X)).length===0||j.summonedCardIndex!==void 0&&this.editingCards[j.summonedCardIndex]?.type==="spell":j.effect==="获得"?j.summonSource&&j.summonSource!=="derived"?!1:this.editingCards.length===0:j.effect==="变化"?j.summonSource&&j.summonSource!=="derived"?!1:!!(this.editingCards.filter((M,A)=>!(this.editingCards[A].type==="spell"||A===X)).length===0||this.momentsInclude(j.moment,"打出时")||this.momentsInclude(j.moment,"死亡时")||j.summonedCardIndex!==void 0&&this.editingCards[j.summonedCardIndex]?.type==="spell"):!1))){alert("存在无效的召唤/变化效果（不能选择法术牌，打出时/死亡时不能变化），请修改后再试");return}const _=this.editingCards[0],L=_.keywords.map(z=>z.name==="护甲"?{...z,value:_.armorValue}:z.name==="准备"?{...z,value:_.preparationValue}:z);let V="";const de=(_.effects||[]).filter(z=>z.moment&&z.effect);if(_.type==="spell"){const z=(_.effects||[]).filter(X=>X.effect);if(z.length>0){const X=[];z.forEach(v=>{const j=v.targets||[],H=this.mergeTargets(j);let M=H.length>0&&!H.includes("无需目标")&&!H.includes("卡牌")?`对${H.join("、")}`:"";v.isRandomTarget&&M&&(M+="中的随机一个");const A=v.isRandomTarget&&v.randomTargetTimes&&v.randomTargetTimes>1?`${v.randomTargetTimes}次`:"",R=v.moments||(v.moment?[v.moment]:[]),W=R.length===1&&R[0]==="打出时"?"":R.map(te=>$e[te]||"").join(""),Y=v.isOpponent?"对手":"";let F="";if(v.triggerNumbers&&v.triggerNumbers.length>0&&([1,2,3,4,5,6].every(ee=>v.triggerNumbers.includes(ee))||(F=`🎲${v.triggerNumbers.length}/6`)),v.effect==="造成伤害"){const te=v.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[v.elementType]||"";X.push(`${W}${Y}${M}造成${v.value}点${te}伤害${F}${A}`)}else if(v.effect==="抽牌")X.push(`${W}${Y}抽${v.value}张牌${F}`);else if(v.effect==="弃牌")X.push(`${W}${Y}弃${v.value}张牌${F}`);else if(v.effect==="属性变化")if(v.targets?.includes("卡牌")){const te=v.summonSource||"my_hand",se=Ie(te,!!v.isRandom),ee=v.isRandom?"中的随机一个":"",K=v.isCostSet?"=":v.isCostPositive?"+":"-",ce=v.isAttackSet?"=":v.isAttackPositive?"+":"-",he=v.isHealthSet?"=":v.isHealthPositive?"+":"-",ge=v.costValue||0,ye=v.attackValue||0,pe=v.healthValue||0;let Ce=[];ge!==0&&Ce.push(`费用${K}${ge}`),ye!==0&&Ce.push(`攻击${ce}${ye}`),pe!==0&&Ce.push(`血量${he}${pe}`),Ce.length===0&&Ce.push("无变化"),X.push(`${W}${Y}使${se}${ee}${Ce.join("/")}${F}${A}`)}else{const te=v.isAttackPositive?"+":"-",se=v.isHealthPositive?"+":"-",ee=v.attackValue||0,K=v.healthValue||0;let ce="";ee===0&&K!==0?ce=`${se}${K}血量`:K===0&&ee!==0?ce=`${te}${ee}攻击`:ce=`${te}${ee}/${se}${K}`,X.push(`${W}${Y}${M}${ce}${F}${A}`)}else if(v.effect==="给予印记")X.push(`${W}${Y}${M}给予${v.value}点印记${F}${A}`);else if(v.effect==="治愈")X.push(`${W}${Y}${M}治愈${v.value}点生命${F}${A}`);else if(v.effect==="获得能量")X.push(`${W}${Y}获得${v.value}点能量${F}`);else if(v.effect==="失去能量")X.push(`${W}${Y}失去${v.value}点能量${F}`);else if(v.effect==="召唤"){const te=v.summonSource||"derived";if(te!=="derived"){const se=Ie(te,!!v.isRandom),ee=v.isRandom?"中的随机一个":"";X.push(`${W}${Y}召唤${v.value||1}张${se}${ee}${F}`)}else if(this.editingCards.filter((ee,K)=>!(ze(v,"打出时")&&K===0)).length===0)X.push(`${W}${Y}召唤${v.value||1}张${F}`);else if(v.isRandom&&v.summonedCardIndices&&v.summonedCardIndices.length>1){const ee=v.summonedCardIndices.map(K=>this.editingCards[K]?.name||"衍生随从");X.push(`${W}${Y}召唤${v.value||1}张${ee.join("、")}中的随机一个${F}`)}else{const ee=v.summonedCardIndex??0,ce=this.editingCards[ee]?.name||"衍生随从";X.push(`${W}${Y}召唤${v.value||1}张${ce}`)}}}),V=X.join("；")}}else if(de.length>0){const z=new Map;de.forEach(v=>{const j=v.targets||[],H=this.mergeTargets(j);let M=H.length>0&&!H.includes("无需目标")&&!H.includes("卡牌")?`对${H.join("、")}`:"";v.isRandomTarget&&M&&(M+="中的随机一个"),(v.moments||(v.moment?[v.moment]:[])).map(F=>$e[F]||"").join("");let R="";const W=v.isOpponent?"对手":"";let Y="";if(v.triggerNumbers&&v.triggerNumbers.length>0&&([1,2,3,4,5,6].every(se=>v.triggerNumbers.includes(se))||(Y=`🎲${v.triggerNumbers.length}/6`)),v.effect==="造成伤害"){const F=v.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[v.elementType]||"";R=`${W}${M}造成${v.value}点${F}伤害${Y}`}else if(v.effect==="抽牌")R=`${W}抽${v.value}张牌${Y}`;else if(v.effect==="弃牌")R=`${W}弃${v.value}张牌${Y}`;else if(v.effect==="属性变化")if(v.targets?.includes("卡牌")){const F=v.summonSource||"my_hand",te=Ie(F,!!v.isRandom),se=v.isRandom?"中的随机一个":"",ee=v.isCostSet?"=":v.isCostPositive?"+":"-",K=v.isAttackSet?"=":v.isAttackPositive?"+":"-",ce=v.isHealthSet?"=":v.isHealthPositive?"+":"-",he=v.costValue||0,ge=v.attackValue||0,ye=v.healthValue||0;let pe=[];he!==0&&pe.push(`费用${ee}${he}`),ge!==0&&pe.push(`攻击${K}${ge}`),ye!==0&&pe.push(`血量${ce}${ye}`),pe.length===0&&pe.push("无变化"),R=`${W}使${te}${se}${pe.join("/")}${Y}`}else{const F=v.isAttackPositive?"+":"-",te=v.isHealthPositive?"+":"-",se=v.attackValue||0,ee=v.healthValue||0;se===0&&ee!==0?R=`${W}${M}${te}${ee}血量${Y}`:ee===0&&se!==0?R=`${W}${M}${F}${se}攻击${Y}`:R=`${W}${M}${F}${se}/${te}${ee}${Y}`}else if(v.effect==="给予印记")R=`${W}${M}给予${v.value}点印记${Y}`;else if(v.effect==="治愈")R=`${W}${M}治愈${v.value}点生命${Y}`;else if(v.effect==="获得能量")R=`${W}获得${v.value}点能量${Y}`;else if(v.effect==="失去能量")R=`${W}失去${v.value}点能量${Y}`;else if(v.effect==="召唤"){const F=v.summonSource||"derived";if(F!=="derived"){const te=Ie(F,!!v.isRandom),se=v.isRandom?"中的随机一个":"";R=`${W}召唤${v.value||1}张${te}${se}${Y}`}else if(this.editingCards.filter((se,ee)=>!(ze(v,"打出时")&&ee===0)).length===0)R=`${W}召唤${v.value||1}张${Y}`;else if(v.isRandom&&v.summonedCardIndices&&v.summonedCardIndices.length>1){const se=v.summonedCardIndices.map(ee=>this.editingCards[ee]?.name||"衍生随从");R=`${W}召唤${v.value||1}张${se.join("、")}中的随机一个${Y}`}else{const se=v.summonedCardIndex??0,K=this.editingCards[se]?.name||"衍生随从";R=`${W}召唤${v.value||1}张${K}${Y}`}}else if(v.effect==="获得"){const F=v.summonSource||"derived";if(F!=="derived"){const te=Ie(F,!!v.isRandom),se=v.isRandom?"中的随机一个":"";R=`${W}获得${v.value||1}张${te}${se}${Y}`}else if(this.editingCards.filter((se,ee)=>!(ze(v,"打出时")&&ee===0)).length===0)R=`${W}获得${v.value||1}张${Y}`;else if(v.isRandom&&v.summonedCardIndices&&v.summonedCardIndices.length>1){const se=v.summonedCardIndices.map(ee=>this.editingCards[ee]?.name||"衍生牌");R=`${W}获得${v.value||1}张${se.join("、")}中的随机一个${Y}`}else{const se=v.summonedCardIndex??0,K=this.editingCards[se]?.name||"衍生牌";R=`${W}获得${v.value||1}张${K}${Y}`}}else if(v.effect==="变化"){const F=v.summonSource||"derived";if(F!=="derived"){const te=Ie(F,!!v.isRandom),se=v.isRandom?"中的随机一个":"";R=`${W}变化为${te}${se}${Y}`}else if(v.isRandom&&v.summonedCardIndices&&v.summonedCardIndices.length>1){const te=v.summonedCardIndices.map(se=>this.editingCards[se]?.name||"衍生随从");R=`${W}变化为${te.join("、")}中的随机一个${Y}`}else{const te=v.summonedCardIndex??0,ee=this.editingCards[te]?.name||"衍生随从";R=`${W}变化为${ee}${Y}`}}if(R){const F=v.moments||(v.moment?[v.moment]:[]),te=F.map(ee=>$e[ee]||"").join(""),se=F.sort().join("|");z.has(se)||z.set(se,{icon:te,texts:[]}),z.get(se).texts.push(R)}}),V=Array.from(z.values()).map(v=>`${v.icon}${v.texts.join("，并")}`).join("；")}const oe=z=>{const X={...z};return z.targets&&(X.targets=[...z.targets]),X},G=()=>{if(this.editingCards.length!==0)return this.editingCards.map(z=>{const X=z.type==="spell",v=(z.effects||[]).filter(j=>j.effect);return{name:z.name||"未命名",cost:z.cost,attack:X?0:z.attack,health:X?0:z.health,maxHealth:X?0:z.health,type:z.type,keywords:X?[]:z.keywords.map(j=>j.name==="护甲"?{...j,value:z.armorValue}:{...j}),armorValue:X?void 0:z.armorValue,effects:v.length>0?v.map(j=>oe(X?{...j,moment:"打出时"}:j)):void 0,effectDescription:void 0,imageData:z.imageData||void 0}})},ae=()=>{const z=G();if(_.type==="spell"){const X=(_.effects||[]).filter(v=>v.effect);return{id:ke(),name:_.name||"未命名",cost:_.cost,attack:0,health:0,maxHealth:0,type:"spell",keywords:[],effects:X.length>0?X.map(v=>oe({...v,moment:v.moment||"打出时"})):void 0,effectDescription:V||void 0,imageData:_.imageData||void 0,derivedCards:z}}else return{id:ke(),name:_.name||"未命名",cost:_.cost,attack:_.attack,health:_.health,maxHealth:_.health,type:"minion",keywords:L,armorValue:_.armorValue,effects:de.length>0?de.map(oe):void 0,effectDescription:V||void 0,imageData:_.imageData||void 0,derivedCards:z}};if(this.isEditMode&&this.editingCardSample){const z=be(this.editingCardSample),X=this.state.groups.map(H=>{const M=H.cards.find(A=>be(A.card)===z);return{group:H,entry:M}}).filter(H=>H.entry);let v=0,j=null;for(const H of X)v+=H.entry.count,j||(j=H.group.id);if(v>0&&j){const H=this.state.groups.map(Y=>({...Y,cards:Y.cards.filter(F=>be(F.card)!==z)})),A={card:ae(),count:v},R=H.findIndex(Y=>Y.id===j);R!==-1&&(H[R]={...H[R],cards:[...H[R].cards,A]}),this.state={...this.state,groups:H,sharedDeck:H[0].cards};const W=[];for(const Y of H)for(const F of Y.cards)F.card.type==="hero"&&W.push(F.card);this.state.heroCards=W,this.saveDeck()}}else{const z=ae();this.state=ie(this.state,{type:"ADD_CARD",card:z}),this.saveDeck()}const le=document.getElementById("add-success");le?.classList.remove("hidden"),setTimeout(()=>{le?.classList.add("hidden")},1500)}),document.getElementById("export-code-btn")?.addEventListener("click",async()=>{try{if(this.editingCards.some((A,R)=>(A.effects||[]).some(Y=>Y.effect==="召唤"?Y.summonSource&&Y.summonSource!=="derived"?!1:this.editingCards.filter((te,se)=>!(this.editingCards[se].type==="spell"||ze(Y,"打出时")&&se===R)).length===0||Y.summonedCardIndex!==void 0&&this.editingCards[Y.summonedCardIndex]?.type==="spell":Y.effect==="获得"?Y.summonSource&&Y.summonSource!=="derived"?!1:this.editingCards.length===0:Y.effect==="变化"?Y.summonSource&&Y.summonSource!=="derived"?!1:!!(this.editingCards.filter((te,se)=>!(this.editingCards[se].type==="spell"||se===R)).length===0||this.momentsInclude(Y.moment,"打出时")||Y.summonedCardIndex!==void 0&&this.editingCards[Y.summonedCardIndex]?.type==="spell"):!1))){alert("存在无效的召唤/变化效果（不能选择法术牌，打出时不能变化），请修改后再试");return}const _=A=>{const R={...A};return A.targets&&(R.targets=[...A.targets]),R},L=(A,R)=>{const W=(A.effects||[]).filter(Y=>Y.effect);return{name:A.name||(R===0?"未命名":`衍生卡${R}`),type:A.type,cost:A.cost,attack:A.attack,health:A.health,keywords:A.keywords.map(Y=>Y.name),armorValue:A.armorValue,effects:W.length>0?W.map(_):void 0,effect:W.length>0?_(W[0]):void 0,effectDescription:A.effectDescription||void 0,spellEffect:A.spellEffect||void 0,imageData:A.imageData||void 0,version:3}};let V;const Q=this.editingCards[0];if(!!Q?.imageData&&Q.imageData){const W=await(await(await fetch(Q.imageData)).blob()).arrayBuffer();V=new Uint8Array(W)}else{const A=document.createElement("canvas");A.width=200,A.height=300;const R=A.getContext("2d");R.fillStyle="#f8f4ec",R.fillRect(0,0,200,300);const W=A.toDataURL("image/png"),te=await(await(await fetch(W)).blob()).arrayBuffer();V=new Uint8Array(te)}const oe=We(V),G=L(Q,0),ae=JSON.stringify(G),le=btoa(unescape(encodeURIComponent(ae))),z=Ve.encode("CardData",le);oe.splice(1,0,z);for(let A=1;A<this.editingCards.length;A++){const R=this.editingCards[A],W=JSON.stringify(L(R,A)),Y=btoa(unescape(encodeURIComponent(W))),F=Ve.encode(`CardData_${A}`,Y);oe.splice(1+A,0,F)}const X=ut(oe),v=new Blob([X],{type:"image/png"}),H=`${(Q.name||"未命名").replace(/[\\/:*?"<>|]/g,"_").replace(/\s+/g,"_")}.png`;if(this.deckFolderHandle)try{const R=await(await this.deckFolderHandle.getFileHandle(H,{create:!0})).createWritable();await R.write(v),await R.close(),console.log(`PNG 已导出到文件夹: ${H}`)}catch(A){console.warn("写入文件夹失败，改用下载:",A);const R=URL.createObjectURL(v),W=document.createElement("a");W.href=R,W.download=H,document.body.appendChild(W),W.click(),document.body.removeChild(W),URL.revokeObjectURL(R)}else{const A=URL.createObjectURL(v),R=document.createElement("a");R.href=A,R.download=H,document.body.appendChild(R),R.click(),document.body.removeChild(R),URL.revokeObjectURL(A)}const M=document.getElementById("export-success");M&&(M.classList.remove("hidden"),setTimeout(()=>M.classList.add("hidden"),1500))}catch(C){alert("导出失败："+C.message)}}),document.getElementById("copy-btn")?.addEventListener("click",async()=>{const C=document.getElementById("export-text");if(C){const _=C.value;try{await navigator.clipboard.writeText(_);const L=document.getElementById("copy-btn");L&&(L.textContent="✓ 已复制！",setTimeout(()=>{L.textContent="📋 复制"},1500))}catch{C.select(),document.execCommand("copy");const V=document.getElementById("copy-btn");V&&(V.textContent="✓ 已复制！",setTimeout(()=>{V.textContent="📋 复制"},1500))}}}),document.getElementById("import-code-btn")?.addEventListener("click",()=>{const C=document.createElement("input");C.type="file",C.accept=".png,image/png",C.style.cssText="position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;",document.body.appendChild(C),C.addEventListener("change",async _=>{const L=_.target.files?.[0];if(document.body.removeChild(C),!!L)try{const V=await L.arrayBuffer(),Q=new Uint8Array(V),de=We(Q);let oe=null;for(const H of de)if(H.name==="tEXt")try{const M=Ve.decode(H);M.keyword==="CardData"&&(oe=M.text)}catch{}if(!oe){alert("无效卡牌文件：缺少卡牌数据（CardData）");return}let G;try{G=decodeURIComponent(escape(atob(oe)))}catch{G=oe}const ae=JSON.parse(G);if(!ae.name&&ae.name!==""){alert("数据不完整：缺少卡牌名称");return}const le=H=>{const M={...H};return H.targets&&(M.targets=[...H.targets]),M},z=ae.effects||(ae.effect?[ae.effect]:[]),X=[ae];for(const H of de)if(H.name==="tEXt")try{const M=Ve.decode(H);if(M.keyword.match(/^CardData_\d+$/)){const A=parseInt(M.keyword.replace("CardData_",""),10);let R;try{R=decodeURIComponent(escape(atob(M.text)))}catch{R=M.text}X[A]=JSON.parse(R)}}catch{}this.editingCards=X.map((H,M)=>({name:H.name||(M===0?"":`衍生卡${M}`),type:H.type||"minion",cost:H.cost??1,attack:H.attack??(H.type==="spell"?0:1),health:H.health??(H.type==="spell"?0:1),keywords:(H.keywords||[]).map(A=>Object.values(Ee).find(W=>W.name===A)||{name:A,description:"",hasValue:!1}),armorValue:H.armorValue??1,preparationValue:H.preparationValue??1,effects:(H.effects||[]).map(le),spellEffect:H.spellEffect?le(H.spellEffect):H.effects?.[0]||H.effect||{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0},effectDescription:H.effectDescription||void 0,imageData:H.imageData||null})),this.currentCardIndex=0,this.currentEffectIndex=0;const v=URL.createObjectURL(L),j=await this.compressImageData(v);URL.revokeObjectURL(v),this.editingCards[0].imageData=j,this.renderCardCreator(),this.updateEffectDescription()}catch(V){alert("导入失败："+(V.message||"文件格式错误或数据损坏"))}}),C.click()}),document.getElementById("import-confirm-btn")?.addEventListener("click",()=>{const C=document.getElementById("import-text");if(C)try{const _=C.value.trim();if(!_){alert("请输入卡牌代码");return}const L=JSON.parse(decodeURIComponent(atob(_))),V=oe=>{const G={...oe};return oe.targets&&(G.targets=[...oe.targets]),G},Q=L.effects||(L.effect?[L.effect]:[]);this.currentCard={name:L.name||"",type:L.type||"minion",cost:L.cost??1,attack:L.attack??1,health:L.health??1,keywords:(L.keywords||[]).map(oe=>Object.values(Ee).find(ae=>ae.name===oe)||{name:oe,description:"",hasValue:!1}),armorValue:L.armorValue??1,preparationValue:L.preparationValue??1,effects:Q.map(V),spellEffect:L.type==="spell"?L.effects?.[0]||L.effect||{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}:{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}},this.currentEffectIndex=0,this.renderCardCreator();const de=document.getElementById("import-output");de&&de.classList.add("hidden"),C.value=""}catch{alert("导入失败：卡牌代码格式错误")}}),document.getElementById("switch-to-hero-editor-btn")?.addEventListener("click",()=>{this.isHeroEditMode=!1,this.state=ie(this.state,{type:"SHOW_HERO_EDITOR"}),this.render()}),document.getElementById("back-menu-btn")?.addEventListener("click",()=>{this.state=ie(this.state,{type:"BACK_TO_MENU"}),this.isEditMode=!1,this.editingCardSample=null,this.render()}),document.getElementById("back-to-manager-btn")?.addEventListener("click",()=>{this.state=ie(this.state,{type:"SHOW_CARD_MANAGER"}),this.isEditMode=!1,this.editingCardSample=null,this.render()});let h=null,m=null,f=1,b=0,g=0,y=!1,x=0,k=0,u=0,w=0,I=!1,S="medium",T=15,D=null;const O=Math.min(window.innerWidth*.65,480),P=Math.min(window.innerHeight*.55,520);let B=0,$=0,N=0,J=0;const U=C=>{const _=document.getElementById("crop-modal"),L=document.getElementById("crop-canvas");if(!_||!L)return;h=null,y=!1,m=null,I=!1,S="medium",T=15,D=null;let V=!1;L.width=O,L.height=P;const Q=L.getContext("2d");if(!Q)return;Q.imageSmoothingEnabled=!1;const de=document.getElementById("crop-eraser-panel");de&&(de.style.display=this.isPortraitMode?"none":"flex");const G=this.importMode==="template"?1:200/300;O/P>G?($=P*.88,B=$*G):(B=O*.88,$=B/G),N=(O-B)/2,J=(P-$)/2;const ae=(K,ce,he,ge,ye)=>{const pe=O,Ce=P;K.clearRect(0,0,pe,Ce),K.fillStyle="#1a1a1a",K.fillRect(0,0,pe,Ce),K.save(),K.beginPath(),K.rect(N-30,J-30,B+60,$+60),K.clip(),K.drawImage(ce,ge,ye,ce.naturalWidth*he,ce.naturalHeight*he),K.restore(),D&&(K.save(),K.beginPath(),K.rect(N-30,J-30,B+60,$+60),K.clip(),K.globalCompositeOperation="destination-out",K.drawImage(D,ge,ye,D.width*he,D.height*he),K.restore()),K.fillStyle="rgba(0,0,0,0.6)",K.fillRect(0,0,pe,J),K.fillRect(0,J+$,pe,Ce-J-$),K.fillRect(0,J,N,$),K.fillRect(N+B,J,pe-N-B,$),K.strokeStyle="rgba(200,160,100,0.9)",K.lineWidth=2,K.strokeRect(N,J,B,$),K.strokeStyle="rgba(255,255,255,0.25)",K.lineWidth=1;const xe=$/3,Pe=B/3;K.beginPath(),K.moveTo(N,J+xe),K.lineTo(N+B,J+xe),K.moveTo(N,J+xe*2),K.lineTo(N+B,J+xe*2),K.moveTo(N+Pe,J),K.lineTo(N+Pe,J+$),K.moveTo(N+Pe*2,J),K.lineTo(N+Pe*2,J+$),K.stroke()};_.style.display="flex";const le=new Image;le.onload=()=>{m=le,D=document.createElement("canvas"),D.width=le.naturalWidth,D.height=le.naturalHeight,D.getContext("2d").clearRect(0,0,D.width,D.height);const ce=B/le.naturalWidth,he=$/le.naturalHeight;f=Math.max(ce,he),b=N+B/2-le.naturalWidth*f/2,g=J+$/2-le.naturalHeight*f/2,ae(Q,le,f,b,g)},le.src=URL.createObjectURL(C);const z=L.cloneNode(!0);L.parentNode?.replaceChild(z,L);const X=z,v=X.getContext("2d");v.imageSmoothingEnabled=!1;const j=()=>{m&&v&&ae(v,m,f,b,g)};X.addEventListener("mousedown",K=>{if(I&&m&&D){V=!0,X.style.cursor=M(T),H(K.offsetX,K.offsetY);return}y=!0,x=K.offsetX,k=K.offsetY,u=b,w=g,X.style.cursor="grabbing"});const H=(K,ce)=>{if(!D||!m)return;const he=(K-b)/f,ge=(ce-g)/f,ye=T/f,pe=D.getContext("2d");pe.fillStyle="#ffffff",pe.beginPath(),pe.arc(he,ge,ye/2,0,Math.PI*2),pe.fill(),j()},M=K=>{const he=K+8,ge=document.createElement("canvas");ge.width=he,ge.height=he;const ye=ge.getContext("2d");return ye.strokeStyle="rgba(255,255,255,0.95)",ye.lineWidth=2,ye.beginPath(),ye.arc(he/2,he/2,K/2,0,Math.PI*2),ye.stroke(),ye.strokeStyle="rgba(0,0,0,0.3)",ye.lineWidth=1,ye.beginPath(),ye.arc(he/2,he/2,K/2,0,Math.PI*2),ye.stroke(),`url(${ge.toDataURL()}) ${he/2} ${he/2}, crosshair`},A=K=>{if(V&&m&&D){const he=X.getBoundingClientRect();H(K.clientX-he.left,K.clientY-he.top);return}if(!y||!X)return;const ce=X.getBoundingClientRect();b=u+(K.clientX-ce.left-x),g=w+(K.clientY-ce.top-k),j()},R=()=>{if(V){V=!1,X.style.cursor=I?M(T):"grab";return}y&&(y=!1,X.style.cursor="grab")};window.addEventListener("mousemove",A),window.addEventListener("mouseup",R),X.addEventListener("wheel",K=>{if(K.preventDefault(),!m)return;const ce=X.getBoundingClientRect(),he=K.clientX-ce.left,ge=K.clientY-ce.top,ye=K.deltaY<0?1.03:.97,pe=Math.max(.1,f*ye);b=he-(he-b)*(pe/f),g=ge-(ge-g)*(pe/f),f=pe,j()},{passive:!1});const W=K=>{if(!m||!X.isConnected||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(K.key))return;K.preventDefault();const ce=2;K.key==="ArrowLeft"?b-=ce:K.key==="ArrowRight"?b+=ce:K.key==="ArrowUp"?g-=ce:K.key==="ArrowDown"&&(g+=ce),j()};document.addEventListener("keydown",W);let Y=0,F=1,te=0,se=0;X.addEventListener("touchstart",K=>{if(K.touches.length===1){if(I&&m&&D){V=!0;const he=X.getBoundingClientRect();H(K.touches[0].clientX-he.left,K.touches[0].clientY-he.top);return}y=!0;const ce=X.getBoundingClientRect();x=K.touches[0].clientX-ce.left,k=K.touches[0].clientY-ce.top,u=b,w=g}else if(K.touches.length===2){y=!1;const ce=K.touches[0].clientX-K.touches[1].clientX,he=K.touches[0].clientY-K.touches[1].clientY;Y=Math.sqrt(ce*ce+he*he),F=f,te=b,se=g}},{passive:!0}),X.addEventListener("touchmove",K=>{if(K.preventDefault(),K.touches.length===1&&V&&m&&D){const ce=X.getBoundingClientRect();H(K.touches[0].clientX-ce.left,K.touches[0].clientY-ce.top)}else if(K.touches.length===1&&y){const ce=X.getBoundingClientRect();b=u+(K.touches[0].clientX-ce.left-x),g=w+(K.touches[0].clientY-ce.top-k),j()}else if(K.touches.length===2){const ce=K.touches[0].clientX-K.touches[1].clientX,he=K.touches[0].clientY-K.touches[1].clientY,ye=Math.sqrt(ce*ce+he*he)/Math.max(.001,Y),pe=Math.max(.1,Math.min(10,F*ye)),Ce=X.getBoundingClientRect(),xe=(K.touches[0].clientX+K.touches[1].clientX)/2-Ce.left,Pe=(K.touches[0].clientY+K.touches[1].clientY)/2-Ce.top;b=xe-(xe-te)*(pe/F),g=Pe-(Pe-se)*(pe/F),f=pe,j()}},{passive:!1}),X.addEventListener("touchend",()=>{V=!1,y=!1},{passive:!0}),document.getElementById("crop-hcenter-btn")?.addEventListener("click",()=>{m&&(b=N+B/2-m.naturalWidth*f/2,j())}),document.getElementById("crop-vcenter-btn")?.addEventListener("click",()=>{m&&(g=J+$/2-m.naturalHeight*f/2,j())}),document.getElementById("crop-cover-btn")?.addEventListener("click",()=>{if(!m)return;const K=B/m.naturalWidth,ce=$/m.naturalHeight;f=Math.max(K,ce),b=N+B/2-m.naturalWidth*f/2,g=J+$/2-m.naturalHeight*f/2,j()}),document.getElementById("crop-contain-btn")?.addEventListener("click",()=>{if(!m)return;const K=B/m.naturalWidth,ce=$/m.naturalHeight;f=Math.min(K,ce),b=N+B/2-m.naturalWidth*f/2,g=J+$/2-m.naturalHeight*f/2,j()});const ee=()=>{["thin","medium","thick"].forEach(K=>{const ce=document.getElementById(`crop-eraser-${K}-btn`);if(ce){const he=S===K;ce.style.borderColor=he?"#4a9":"#666",ce.style.background=he?"#2a6":"#444",ce.style.color=he?"#fff":"#aaa"}})};document.getElementById("crop-eraser-btn")?.addEventListener("click",()=>{I=!I;const K=document.getElementById("crop-eraser-btn");K&&(K.style.borderColor=I?"#4a9":"#888"),X.style.cursor=I?M(T):"grab"}),document.getElementById("crop-eraser-thin-btn")?.addEventListener("click",()=>{T=5,S="thin",ee(),I&&(X.style.cursor=M(5))}),document.getElementById("crop-eraser-medium-btn")?.addEventListener("click",()=>{T=15,S="medium",ee(),I&&(X.style.cursor=M(15))}),document.getElementById("crop-eraser-thick-btn")?.addEventListener("click",()=>{T=45,S="thick",ee(),I&&(X.style.cursor=M(45))}),ee(),X.__cropCleanup=()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",R),document.removeEventListener("keydown",W);const K=document.getElementById("crop-eraser-panel");K&&(K.style.display="none");const ce=document.getElementById("crop-eraser-btn");ce&&(ce.style.borderColor="#888"),I=!1,V=!1,D=null}},ne=()=>{const C=document.getElementById("crop-modal"),_=document.getElementById("crop-canvas");C&&(C.style.display="none"),m&&(URL.revokeObjectURL(m.src),m=null),_?.__cropCleanup&&_.__cropCleanup()},Z=document.getElementById("import-mode-full"),re=document.getElementById("import-mode-template"),q=()=>{Z&&re&&(this.importMode=Z.checked?"full":"template")};Z?.addEventListener("change",()=>{Z.checked&&re?re.checked=!1:Z.checked||(Z.checked=!0),q()}),re?.addEventListener("change",()=>{re.checked&&Z?Z.checked=!1:re.checked||(re.checked=!0),q()}),document.getElementById("draw-image-btn")?.addEventListener("click",()=>{this.isDrawingMode?this.exitDrawingMode(!0):this.enterDrawingMode()}),document.getElementById("import-image-btn")?.addEventListener("click",()=>{this.cropTarget="main";const C=document.createElement("input");C.type="file",C.accept="image/*",C.style.cssText="position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;",document.body.appendChild(C),C.addEventListener("change",_=>{const L=_.target.files?.[0];if(document.body.removeChild(C),!L||!L.type.startsWith("image/")){alert("请选择图片文件");return}U(L)}),C.click()}),document.getElementById("crop-cancel-btn")?.addEventListener("click",ne),document.getElementById("crop-confirm-btn")?.addEventListener("click",async()=>{if(!m){ne();return}if(this.importMode==="template"){const C=document.createElement("canvas"),_=Math.max(B,$);C.width=_,C.height=_;const L=C.getContext("2d");if(L){L.imageSmoothingEnabled=!1;const V=(N-b)/f,Q=(J-g)/f,de=B/f,oe=$/f;L.drawImage(m,V,Q,de,oe,0,0,_,_),D&&(L.globalCompositeOperation="destination-out",L.drawImage(D,V,Q,de,oe,0,0,_,_),L.globalCompositeOperation="source-over");const G=C.toDataURL("image/png");try{const ae=await this.generateAtmosphereCard(G);h=await this.compressImageData(ae),this.currentCard.imageData=h;const z=document.getElementById("main-card-preview");z&&h&&(z.style.backgroundImage=`url(${h})`,z.style.backgroundSize="cover",z.style.backgroundPosition="center",z.style.backgroundRepeat="no-repeat")}catch(ae){alert("生成氛围感光效图片失败："+ae.message)}}}else{const C=(N-b)/f,_=(J-g)/f,L=B/f,V=$/f,Q=document.createElement("canvas");Q.width=800,Q.height=1200;const de=Q.getContext("2d");if(de){de.imageSmoothingEnabled=!1,de.drawImage(m,C,_,L,V,0,0,800,1200),D&&(de.globalCompositeOperation="destination-out",de.drawImage(D,C,_,L,V,0,0,800,1200),de.globalCompositeOperation="source-over");const oe=Q.toDataURL("image/png");try{const{bgDataUrl:G}=await this.generateAtmosphereBackground(oe),ae=await this.compressImageData(G),le=document.createElement("canvas");le.width=200,le.height=300;const z=le.getContext("2d");if(z){z.imageSmoothingEnabled=!1;const X=new Image;X.onload=()=>{z.drawImage(X,0,0,200,300);const v=new Image;v.onload=()=>{const j=Math.max(200/v.naturalWidth,300/v.naturalHeight),H=v.naturalWidth*j,M=v.naturalHeight*j,A=(200-H)/2,R=(300-M)/2,W=30,Y=.85,F=W*4,te=document.createElement("canvas");te.width=H+F*2,te.height=M+F*2;const se=te.getContext("2d");se&&(se.imageSmoothingEnabled=!1,se.drawImage(v,F,F,H,M),se.globalCompositeOperation="source-in",se.fillStyle="#000000",se.fillRect(0,0,te.width,te.height),se.globalCompositeOperation="source-over",z.save(),z.filter=`blur(${W}px)`,z.globalAlpha=Y,z.drawImage(te,A-F,R-F),z.restore()),z.drawImage(v,A,R,H,M),h=le.toDataURL("image/png"),this.currentCard.imageData=h;const ee=document.getElementById("main-card-preview");ee&&h&&(ee.style.backgroundImage=`url(${h})`,ee.style.backgroundSize="cover",ee.style.backgroundPosition="center",ee.style.backgroundRepeat="no-repeat")},v.src=oe},X.src=ae}}catch(G){alert("生成氛围感背景失败："+G.message)}}}ne()}),document.querySelectorAll(".condition-side-check").forEach(C=>{C.addEventListener("change",_=>{_.stopPropagation();const L=C.dataset.editor,V=C.dataset.side;let Q=null;if(L==="hero-skill"||(Q=this.currentCard.effects?.[this.currentEffectIndex]||null,!Q))return;if(Q.conditionSides||(Q.conditionSides=["friendly"]),C.checked)Q.conditionSides.includes(V)||Q.conditionSides.push(V);else if(Q.conditionSides.length>1)Q.conditionSides=Q.conditionSides.filter(oe=>oe!==V);else{Q.conditionSides=["friendly"],C.checked=!0;return}this.renderCardCreator()})}),document.querySelectorAll(".condition-logic-radio").forEach(C=>{C.addEventListener("change",_=>{_.stopPropagation();const L=C.dataset.editor,V=C.value;let Q=null;L!=="hero-skill"&&(Q=this.currentCard.effects?.[this.currentEffectIndex]||null,Q&&(Q.conditionSideLogic=V,this.renderCardCreator()))})}),document.querySelectorAll(".condition-op-btn").forEach(C=>{C.addEventListener("click",_=>{_.stopPropagation();const L=C.dataset.editor,V=C.dataset.op;let Q=null;if(L==="hero-skill"||(Q=this.currentCard.effects?.[this.currentEffectIndex]||null,!Q))return;const de=Q.conditionOperator||"=",oe=de==="<"||de==="<=",G=de===">"||de===">=",ae=de==="="||de==="<="||de===">=";let le=oe,z=G,X=ae;V==="<"?(z=!1,le=!oe):V===">"?(le=!1,z=!G):V==="="&&(X=!ae),le&&X?Q.conditionOperator="<=":z&&X?Q.conditionOperator=">=":le?Q.conditionOperator="<":z?Q.conditionOperator=">":Q.conditionOperator="=",this.renderCardCreator()})}),document.querySelectorAll(".condition-value-input").forEach(C=>{C.addEventListener("input",_=>{_.stopPropagation();const L=C.dataset.editor;let V=null;L!=="hero-skill"&&(V=this.currentCard.effects?.[this.currentEffectIndex]||null,V&&(V.conditionValue=Math.max(0,parseInt(_.target.value)||0)))})}),document.querySelectorAll(".condition-minion-name-input").forEach(C=>{C.addEventListener("input",_=>{_.stopPropagation();const L=C.dataset.editor;let V=null;L!=="hero-skill"&&(V=this.currentCard.effects?.[this.currentEffectIndex]||null,V&&(V.conditionMinionName=_.target.value,this.renderCardCreator()))})}),document.querySelectorAll(".condition-target-attr-check").forEach(C=>{C.addEventListener("change",_=>{_.stopPropagation();const L=C.dataset.editor,V=C.dataset.attr;if(L==="hero-skill")return;const Q=this.currentCard.effects?.[this.currentEffectIndex];if(!Q)return;Q.conditionTargetAttrs||(Q.conditionTargetAttrs={cost:{enabled:!0,operator:"=",value:0},attack:{enabled:!0,operator:"=",value:0},health:{enabled:!0,operator:"=",value:0}});const de=Q.conditionTargetAttrs;de[V].enabled=_.target.checked,this.renderCardCreator()})}),document.querySelectorAll(".condition-target-op-btn").forEach(C=>{C.addEventListener("click",_=>{_.stopPropagation();const L=C.dataset.editor,V=C.dataset.attr,Q=C.dataset.op;let de=null;if(L==="hero-skill"||(de=this.currentCard.effects?.[this.currentEffectIndex]||null,!de))return;de.conditionTargetAttrs||(de.conditionTargetAttrs={cost:{enabled:!0,operator:"=",value:0},attack:{enabled:!0,operator:"=",value:0},health:{enabled:!0,operator:"=",value:0}});const oe=de.conditionTargetAttrs,G=oe[V].operator||"=",ae=G==="<"||G==="<=",le=G===">"||G===">=",z=G==="="||G==="<="||G===">=";let X=ae,v=le,j=z;Q==="<"?(v=!1,X=!ae):Q===">"?(X=!1,v=!le):Q==="="&&(j=!z),X&&j?oe[V].operator="<=":v&&j?oe[V].operator=">=":X?oe[V].operator="<":v?oe[V].operator=">":oe[V].operator="=",this.renderCardCreator()})}),document.querySelectorAll(".condition-target-attr-input").forEach(C=>{C.addEventListener("input",_=>{_.stopPropagation();const L=C.dataset.editor,V=C.dataset.attr;let Q=null;L!=="hero-skill"&&(Q=this.currentCard.effects?.[this.currentEffectIndex]||null,Q&&(Q.conditionTargetAttrs||(Q.conditionTargetAttrs={cost:{enabled:!0,operator:"=",value:0},attack:{enabled:!0,operator:"=",value:0},health:{enabled:!0,operator:"=",value:0}}),Q.conditionTargetAttrs[V].value=Math.max(0,parseInt(_.target.value)||0),this.renderCardCreator()))})}),this.setupWheelScrollForwarding()}setupWheelScrollForwarding(){if(!this.isPortraitMode){const e=this.app.querySelector(".card-creator-active");e&&e.addEventListener("wheel",s=>{const t=s,n=t.target;if(n.closest(".editor-left-panel-scroll")||n.closest(".keyword-scroll-container, .target-scroll-container"))return;const i=document.querySelector(".editor-left-panel-scroll");i&&(t.preventDefault(),i.scrollBy({top:t.deltaY,behavior:"smooth"}))},{passive:!1})}}renderCardManager(){this.isPortraitMode=window.innerWidth/window.innerHeight<3/4;const e=this.state.groups;let s=0;const t=e.map(n=>{const i=[...n.cards].sort((a,o)=>as(a.card,o.card)),r=i.reduce((a,o)=>a+o.count,0);return s+=r,{group:n,sortedCards:i,groupCount:r}});this.app.innerHTML=`
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
          ${this.deckFolderZips.length>0?`
          <div class="mb-4 p-3 rounded-xl" style="background: rgba(255, 255, 255, 0.85); border: 2px solid #c0a080;">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-bold" style="color: #8b7355;">📁 ${this.deckFolderName||"卡包文件夹"}</span>
              <button id="disconnect-folder-btn" class="text-xs px-2 py-1 rounded font-bold transition-all hover:scale-105"
                style="background: #e07070; color: #fff; border: 1px solid #a04040;">
                断开
              </button>
            </div>
            <div class="flex flex-wrap gap-2">
              ${this.deckFolderZips.map(n=>`
                <button class="deck-folder-zip-btn px-3 py-1.5 rounded-lg font-bold text-sm transition-all hover:scale-105 whitespace-nowrap"
                  data-zip-name="${n.name}"
                  style="background: linear-gradient(135deg, #d4c4a8 0%, #c0a080 100%); color: #5a4a3a; border: 2px solid #a08060;">
                  📄 ${n.name}
                </button>
              `).join("")}
            </div>
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
          ${t.map(({group:n,sortedCards:i,groupCount:r},a)=>`
            <!-- 分组标题行 -->
            <div class="group-header flex items-center gap-3 mb-3 ${a>0?"mt-8":""}">
              <button class="collapse-group-btn text-lg font-bold transform hover:scale-110 transition-all cursor-pointer select-none"
                data-group-id="${n.id}"
                style="color: #a08060; line-height: 1; font-size: 18px; background: none; border: none; padding: 0 2px;"
                title="${this.collapsedGroups.has(n.id)?"展开":"折叠"}">
                ${this.collapsedGroups.has(n.id)?"▶":"▼"}
              </button>
              ${a===0?`
                <span class="text-xl font-bold whitespace-nowrap" style="color: #8b7355; font-family: 'Georgia', serif;">${n.name}</span>
                <hr class="flex-1" style="border-color: #d4c4a8; border-width: 1px; border-style: solid;">
                <span class="text-sm mr-1" style="color: #999;">(${r} 张)</span>
                <button id="create-group-btn" class="px-4 py-1.5 font-bold rounded-lg shadow-md transform hover:scale-105 transition-all whitespace-nowrap text-sm"
                  style="background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: 2px solid #4a8a4a;">
                  + 新建分组
                </button>
              `:`
                <span class="group-name-text text-xl font-bold whitespace-nowrap" style="color: #8b7355; font-family: 'Georgia', serif; cursor: pointer;" data-group-id="${n.id}" title="双击重命名">${n.name}</span>
                <hr class="flex-1" style="border-color: #d4c4a8; border-width: 1px; border-style: solid;">
                <span class="text-sm mr-1" style="color: #999;">(${r} 张)</span>
                <button class="disband-group-btn px-4 py-1.5 font-bold rounded-lg shadow-md transform hover:scale-105 transition-all whitespace-nowrap text-sm"
                  data-group-id="${n.id}"
                  style="background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: 2px solid #a04040;">
                  ✕ 解散分组
                </button>
              `}
            </div>
            <!-- 卡牌网格 -->
            <div class="flex flex-wrap gap-3 ${this.collapsedGroups.has(n.id)?"collapsed-group":""}" data-group-id="${n.id}" style="justify-content: flex-start; align-items: flex-start;">
              ${i.length===0?'<div class="text-sm italic" style="color: #b0a090;">（空）</div>':""}
              ${i.map(o=>{const l=o.card,d=l,c=o.count,p=l.id,h=d.type==="hero";return`
                <div class="card-item-wrapper" draggable="${this.collapsedGroups.has(n.id)?"true":"false"}" data-group-id="${n.id}" data-card-id="${p}" style="display: flex; flex-direction: row; align-items: stretch; width: ${h?"225px":"150px"}; overflow: visible; gap: 6px;">
                  <div class="card-item main-card-item w-full rounded-xl ${h?"aspect-[4/3]":"aspect-[2/3]"} shadow-md" style="${this.getCardBgInline(l)} border: 3px solid #d4c4a8; z-index: 1; box-shadow: 0 4px 12px rgba(0,0,0,0.15); flex: 1; min-width: 0; position: relative;" data-card-id="${p}">
                    ${h?"":`<div class="card-cost-badge">${d.cost}</div>`}
                    ${h?"":d.type==="hero"?'<div class="absolute" style="top: 28px; left: 2px; font-size: 10px; font-weight: bold; color: #ffd700; text-shadow: 0 0 3px black, 0 0 2px black;">英雄</div>':""}
                    ${h?"":`<div class="card-count-badge">x${c}</div>`}
                    <div class="absolute left-1 right-1 text-center truncate font-bold" style="top: 4px; color: white; font-size: 14px; z-index: 5; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 1px black;">
                      ${d.name}
                    </div>
                    ${h&&d.skills&&d.skills.length>0?`
                      <div class="hero-skills-row" style="position: absolute; bottom: 6px; left: 6px; display: flex; gap: 6px; z-index: 10; pointer-events: none;">
                        ${d.skills.map(m=>`
                          <div class="hero-skill-icon" title="${m.name}" style="position: relative; width: 36px; height: 36px;">
                            <div style="width: 36px; height: 36px; border-radius: 50%; background-image: url(${m.iconData||""}); background-size: cover; background-position: center; border: 2.5px solid #d4c4a8; box-shadow: 0 2px 8px rgba(0,0,0,0.35);"></div>
                            ${m.type==="passive"?`
                              <!-- 被动技能：只显示能量宝石，无数字 -->
                              <div style="position: absolute; bottom: -3px; right: -3px; width: 18px; height: 18px; background: url('/images/energy_gem_v2.png') center/cover no-repeat; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4));"></div>
                            `:`
                              <!-- 主动技能：能量宝石 + 数字 -->
                              <div style="position: absolute; bottom: -3px; right: -3px; width: 20px; height: 20px; background: url('/images/energy_gem_v2.png') center/cover no-repeat; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4));">
                                <span style="font-size: 10px; font-weight: bold; color: #fff; text-shadow: 0 0 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.5); line-height: 1;">${m.cost??1}</span>
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
                            ${d.keywords.map(m=>{const f=m.name==="护甲"?m.value??d.armorValue??1:"";return`<span class="card-keyword-tag">${m.name}${f}</span>`}).join("")}
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
                    <button class="delete-btn" style="width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: none; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; cursor: pointer; z-index: 20; padding: 0; line-height: 1; box-shadow: 0 2px 6px rgba(160, 64, 64, 0.5); flex-shrink: 0;" data-card-id="${p}" title="删除全部">✕</button>
                    <button class="edit-card-btn" style="width: 26px; height: 26px; border-radius: 6px; background: linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%); color: #fff; border: none; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; cursor: pointer; z-index: 20; padding: 0; line-height: 1; box-shadow: 0 2px 6px rgba(61, 133, 198, 0.5); flex-shrink: 0;" data-card-id="${p}" title="编辑">✎</button>
                    ${h?"":`
                    <button class="increase-card-btn" style="width: 26px; height: 26px; border-radius: 6px; background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: none; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: bold; cursor: pointer; z-index: 20; padding: 0; line-height: 1; box-shadow: 0 2px 6px rgba(58, 122, 58, 0.5); flex-shrink: 0;" data-card-id="${p}" title="增加">+</button>
                    <button class="decrease-card-btn" style="width: 26px; height: 26px; border-radius: 6px; background: linear-gradient(135deg, #f5a623 0%, #d48a1c 100%); color: #fff; border: none; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: bold; cursor: pointer; z-index: 20; padding: 0; line-height: 1; box-shadow: 0 2px 6px rgba(212, 138, 28, 0.5); flex-shrink: 0;" data-card-id="${p}" title="减少">−</button>
                    `}
                  </div>
                </div>
                `}).join("")}
            </div>
          `).join("")}
        </div>
      </div>
    `,this.attachCardManagerEvents(),this.savedCardManagerScrollY>0&&requestAnimationFrame(()=>{window.scrollTo({top:this.savedCardManagerScrollY,behavior:"instant"}),this.savedCardManagerScrollY=0})}parseCardTemplateFromDataset(e){const s=(e.cardKeywords||"").split(",").filter(Boolean).map(t=>Object.values(Ee).find(n=>n.name===t)).filter(Boolean);return{name:e.cardName||"",cost:parseInt(e.cardCost||"0"),attack:parseInt(e.cardAttack||"0"),health:parseInt(e.cardHealth||"1"),maxHealth:parseInt(e.cardHealth||"1"),type:"minion",keywords:s}}attachCardManagerEvents(){document.getElementById("create-group-btn")?.addEventListener("click",()=>{const a=`卡组${this.state.groups.filter(l=>l.id!==Me).length+1}`;this.state=ie(this.state,{type:"CREATE_GROUP",name:a});const o=this.state.groups.find(l=>l.id!==Me&&!this.collapsedGroups.has(l.id));o&&this.collapsedGroups.add(o.id),this.saveDeck(),this.renderCardManager()}),document.querySelectorAll(".disband-group-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.groupId||"";a&&(this.state=ie(this.state,{type:"DELETE_GROUP",groupId:a}),this.saveDeck(),this.renderCardManager())})}),document.querySelectorAll(".collapse-group-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r.dataset.groupId||"";a&&(this.collapsedGroups.has(a)?this.collapsedGroups.delete(a):this.collapsedGroups.add(a),this.renderCardManager())})}),document.querySelectorAll(".group-name-text").forEach(r=>{r.addEventListener("dblclick",()=>{const a=r.dataset.groupId||"";if(!a)return;const o=zt(this.state,a)?.name||"",l=r,d=document.createElement("input");d.type="text",d.value=o,d.className="group-rename-input",d.style.cssText="font-size: inherit; font-weight: bold; font-family: Georgia, serif; color: #8b7355; background: rgba(139, 115, 85, 0.1); border: 1px solid #8b7355; border-radius: 4px; padding: 2px 6px; outline: none; width: 150px;",l.replaceWith(d),d.focus(),d.select();const c=()=>{const p=d.value.trim();p&&p!==o&&(this.state=ie(this.state,{type:"RENAME_GROUP",groupId:a,name:p}),this.saveDeck()),this.renderCardManager()};d.addEventListener("blur",c),d.addEventListener("keydown",p=>{p.key==="Enter"?(p.preventDefault(),d.blur()):p.key==="Escape"&&(d.value=o,d.blur())})})});let e=null,s=null;const t=r=>{const a=r.target.closest(".card-item-wrapper");if(!a)return;e=parseInt(a.dataset.cardId||"",10),s=a.dataset.groupId||null,r.dataTransfer?.setData("text/plain",`${e}`),r.dataTransfer.effectAllowed="move",a.style.opacity="0.35",a.style.transition="opacity 0.15s ease",document.body.style.cursor="none";const o=a.querySelector(".card-item");if(o){const c=(o.getAttribute("style")||"").match(/(background-image[^;]*;?\s*background-size[^;]*;?\s*background-position[^;]*;?)/i),p=c?c[1]:"background: #f8f4ec;",h=o.classList.contains("aspect-[4/3]"),m=60,f=h?45:90,b=document.createElement("div");b.style.cssText=`${p} background-repeat: no-repeat;`,b.style.position="fixed",b.style.left="-9999px",b.style.top="-9999px",b.style.pointerEvents="none",b.style.opacity="1",b.style.width=m+"px",b.style.height=f+"px",b.style.borderRadius="6px",b.style.border="2px solid #d4c4a8",b.style.boxShadow="0 4px 16px rgba(0,0,0,0.4)",document.body.appendChild(b),r.dataTransfer?.setDragImage(b,m/2,f/2),requestAnimationFrame(()=>{document.body.removeChild(b)})}const l=()=>{a.style.opacity="",a.style.transition="",document.body.style.cursor="",a.removeEventListener("dragend",l)};a.addEventListener("dragend",l)};document.querySelectorAll(".card-item-wrapper").forEach(r=>{r.addEventListener("dragstart",t)}),document.querySelectorAll(".group-header, .flex.flex-wrap.gap-3").forEach(r=>{r.addEventListener("dragover",a=>{a.preventDefault(),a.dataTransfer.dropEffect="move"}),r.addEventListener("drop",a=>{a.preventDefault();const o=a.target.closest(".group-header");let l=null;if(o){const d=o.querySelector(".group-name-text");if(d)l=d.dataset.groupId||null;else{const c=o.nextElementSibling;c&&(l=c.dataset.groupId||null)}}else l=a.target.closest(".flex.flex-wrap.gap-3")?.dataset.groupId||null;e!==null&&l&&l!==s&&(this.state=ie(this.state,{type:"MOVE_CARD_TO_GROUP",cardId:e,groupId:l}),e=null,s=null,this.saveDeck(),this.renderCardManager())})}),(()=>{const a=window.innerHeight,o=l=>{const d=l.clientY;d<a*.15?window.scrollBy(0,-3):d>a*(1-.15)&&window.scrollBy(0,3)};document.addEventListener("dragover",o),document.addEventListener("dragend",()=>{document.removeEventListener("dragover",o),e=null,s=null},{once:!0})})(),document.getElementById("merge-import-btn")?.addEventListener("click",()=>{if(!this.pendingImportType)return;this.pendingImportMode="merge";const r=document.getElementById("import-mode-dialog");r&&(r.style.display="none");const a=document.createElement("input");a.type="file",a.accept=this.pendingImportType==="zip"?".zip,application/zip":".png",a.onchange=async o=>{const l=o.target.files?.[0];if(!l){this.pendingImportMode=null,this.pendingImportType=null;return}const d=document.getElementById("import-zip-btn");d&&(d.textContent="⌛️ 导入中...",d.disabled=!0);try{let c=[],p=[];if(this.pendingImportType==="zip"){const m=await this.parseGroupsFromZipBlob(l);c=[],p=m.heroCards;const f=De(this.state);if(m.groups.length>0){const b=m.groups[0].cards;f.cards=this.mergeDeckEntries(f.cards,b),c=b}for(let b=1;b<m.groups.length;b++){const g=m.groups[b],y=this.state.groups.find(x=>x.name===g.name);if(y)y.cards=this.mergeDeckEntries(y.cards,g.cards);else{const x={id:`group_${Date.now()}_${b}`,name:g.name,cards:[...g.cards]};this.state.groups.push(x)}c=[...c,...g.cards]}if(c.length===0){alert("无效卡包：ZIP 中没有找到 PNG 卡牌文件");return}}else{const m=await this.importCardFromPNGFile(l);if(!m){alert("导入失败：无法解析卡牌文件");return}const{cardData:f,imageData:b}=m,g=f.effects||(f.effect?[f.effect]:[]),y=x=>{const k={...x};return x.targets&&(k.targets=[...x.targets]),k};c=[{card:{id:ke(),name:f.name||"",type:f.type||"minion",cost:f.cost??1,attack:f.attack??1,health:f.health??1,maxHealth:f.health??1,keywords:(f.keywords||[]).map(x=>x==="风怒"?"__WINDURY__":x).map(x=>x==="__WINDURY__"?"连击":x).map(x=>Object.values(Ee).find(u=>u.name===x)||{name:x,description:"",hasValue:!1}),armorValue:f.armorValue??1,effects:g.map(y),effect:g.length>0?y(g[0]):void 0,effectDescription:f.effectDescription||"",derivedCards:f.derivedCards,imageData:b},count:1}]}const h=c.reduce((m,f)=>m+f.count,0);if(this.pendingImportType!=="zip"){const m=De(this.state),f=this.mergeDeckEntries(m.cards,c);m.cards=f,p.length>0&&p.forEach(b=>{const g=m.cards.find(y=>y.card.id===b.id);g?g.count++:m.cards.push({card:b,count:1})})}this.state={...this.state,groups:[...this.state.groups]},this.pendingImportCards=[],this.pendingImportMode=null,this.pendingImportType=null,this.collapsedGroups=new Set(this.state.groups.map(m=>m.id)),this.saveDeck(),this.renderCardManager(),this.showResult("import-result",`✓ 已合并导入 ${h} 张卡牌`)}catch(c){console.error("合并导入失败:",c),alert("导入失败："+(c instanceof Error?c.message:"未知错误"))}finally{d&&(d.textContent="📂 导入卡包(ZIP)",d.disabled=!1)}},a.click()}),document.getElementById("replace-import-btn")?.addEventListener("click",()=>{if(!this.pendingImportType)return;this.pendingImportMode="replace";const r=document.getElementById("import-mode-dialog");r&&(r.style.display="none");const a=document.createElement("input");a.type="file",a.accept=this.pendingImportType==="zip"?".zip,application/zip":".png",a.onchange=async o=>{const l=o.target.files?.[0];if(!l){this.pendingImportMode=null,this.pendingImportType=null;return}const d=document.getElementById("import-zip-btn");d&&(d.textContent="⌛️ 导入中...",d.disabled=!0);try{let c=[],p=[];if(this.pendingImportType==="zip"){const h=await this.parseGroupsFromZipBlob(l);c=[],p=h.heroCards;const m=De(this.state);this.state.groups=[m],h.groups.length>0?(m.cards=[...h.groups[0].cards],c=[...h.groups[0].cards]):m.cards=[];for(let f=1;f<h.groups.length;f++){const b=h.groups[f],g={id:`group_${Date.now()}_${f}`,name:b.name,cards:[...b.cards]};this.state.groups.push(g),c=[...c,...b.cards]}if(c.length===0){alert("无效卡包：ZIP 中没有找到 PNG 卡牌文件");return}}else{if(!confirm("覆盖导入将清空当前所有卡牌，确定继续？")){this.pendingImportMode=null,this.pendingImportType=null;return}const h=await this.importCardFromPNGFile(l);if(!h){alert("导入失败：无法解析卡牌文件");return}const{cardData:m,imageData:f}=h,b=m.effects||(m.effect?[m.effect]:[]),g=y=>{const x={...y};return y.targets&&(x.targets=[...y.targets]),x};c=[{card:{id:ke(),name:m.name||"",type:m.type||"minion",cost:m.cost??1,attack:m.attack??1,health:m.health??1,maxHealth:m.health??1,keywords:(m.keywords||[]).map(y=>y==="风怒"?"__WINDURY__":y).map(y=>y==="__WINDURY__"?"连击":y).map(y=>Object.values(Ee).find(k=>k.name===y)||{name:y,description:"",hasValue:!1}),armorValue:m.armorValue??1,effects:b.map(g),effect:b.length>0?g(b[0]):void 0,effectDescription:m.effectDescription||"",derivedCards:m.derivedCards,imageData:f},count:1}]}if(this.pendingImportType!=="zip"){const h=De(this.state);h.cards=c,p.length>0&&p.forEach(m=>{const f=h.cards.find(b=>b.card.id===m.id);f?f.count++:h.cards.push({card:m,count:1})})}this.state={...this.state,groups:[...this.state.groups]},this.pendingImportCards=[],this.pendingImportMode=null,this.pendingImportType=null,this.collapsedGroups=new Set(this.state.groups.map(h=>h.id)),this.saveDeck(),this.renderCardManager(),this.showResult("import-result","✓ 已覆盖导入")}catch(c){console.error("覆盖导入失败:",c),alert("导入失败："+(c instanceof Error?c.message:"未知错误"))}finally{d&&(d.textContent="📂 导入卡包(ZIP)",d.disabled=!1)}},a.click()}),document.getElementById("cancel-import-btn")?.addEventListener("click",()=>{this.pendingImportCards=[],this.pendingImportMode=null,this.pendingImportType=null;const r=document.getElementById("import-mode-dialog");r&&(r.style.display="none")}),document.getElementById("clear-deck-btn")?.addEventListener("click",()=>{const r=this.state.groups.reduce((a,o)=>a+o.cards.reduce((l,d)=>l+d.count,0),0);if(r===0){alert("卡包已经是空的！");return}confirm(`确定要清除全部 ${r} 张卡牌吗？`)&&(this.state={...this.state,groups:[{id:Me,name:"公用卡组",cards:[]}]},this.state.sharedDeck=[],this.saveDeck(),this.renderCardManager())}),document.getElementById("export-zip-btn")?.addEventListener("click",()=>{if(!this.state.groups.some(a=>a.cards.length>0)){alert("卡包为空，无法导出！");return}this.exportDeckToZip()}),document.getElementById("deck-folder-btn")?.addEventListener("click",async()=>{try{if(!this.deckFolderHandle){if(typeof window.showDirectoryPicker!="function"){alert(`当前浏览器不支持「卡包组文件夹」功能（需要 Chrome/Edge 最新版，且页面必须在安全上下文 HTTPS 或 localhost 中）。

你可以改用「导入卡包(ZIP)」按钮手动导入卡包文件。`);return}const r=await window.showDirectoryPicker();this.deckFolderHandle=r,this.deckFolderName=r.name,await lt(r)}await this.refreshDeckFolderZips(),this.render()}catch(r){if(r.name==="AbortError")return;if(r.name==="SecurityError"){alert(`无法访问文件夹：浏览器安全策略阻止了此操作。

可能原因：页面被嵌入在 iframe 中，或当前环境限制了文件系统访问。
建议改用「导入卡包(ZIP)」按钮手动导入。`),console.warn("选择文件夹失败(SecurityError):",r.message);return}alert("选择文件夹失败："+(r instanceof Error?r.message:"未知错误")),console.warn("选择文件夹失败:",r)}}),document.getElementById("import-zip-btn")?.addEventListener("click",()=>{this.pendingImportType="zip";const r=document.getElementById("import-mode-dialog");r&&(r.style.display="block")}),document.getElementById("import-card-to-deck-btn")?.addEventListener("click",()=>{const r=document.createElement("input");r.type="file",r.accept="image/png",r.style.cssText="position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;",document.body.appendChild(r),r.addEventListener("change",async a=>{const o=a.target.files?.[0];if(document.body.removeChild(r),!o)return;const l=document.getElementById("import-card-to-deck-btn");l&&(l.textContent="⌛️ 导入中...",l.disabled=!0);try{const d=await this.importCardFromPNGFile(o);if(!d){alert("无法从该 PNG 文件中读取卡牌数据");return}const{cardData:c,imageData:p}=d,h=c.effects||(c.effect?[c.effect]:[]),m=y=>{const x={...y};return y.targets&&(x.targets=[...y.targets]),x},f={id:ke(),name:c.name||"",type:c.type||"minion",cost:c.cost??1,attack:c.attack??1,health:c.health??1,maxHealth:c.health??1,keywords:(c.keywords||[]).map(y=>y==="风怒"?"__WINDURY__":y).map(y=>y==="__WINDURY__"?"连击":y).map(y=>Object.values(Ee).find(k=>k.name===y)||{name:y,description:"",hasValue:!1}),armorValue:c.armorValue??1,effects:h.map(m),effect:h.length>0?m(h[0]):void 0,effectDescription:c.effectDescription||"",derivedCards:c.derivedCards,imageData:p},b=De(this.state),g=b.cards.find(y=>y.card.id===f.id);g?g.count++:b.cards.push({card:f,count:1}),this.state={...this.state,groups:[...this.state.groups]},this.saveDeck(),this.renderCardManager(),this.showResult("import-result","✓ 已导入卡牌")}catch(d){console.error("导入卡牌失败:",d),alert("导入失败："+(d instanceof Error?d.message:"未知错误"))}finally{l&&(l.textContent="🃏 导入卡牌",l.disabled=!1)}}),r.click()}),document.querySelectorAll(".increase-card-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r,o=parseInt(a.dataset.cardId||"0"),d=a.closest("[data-group-id]")?.dataset.groupId,c=this.state.groups.find(p=>p.id===d);if(c){const p=c.cards.find(h=>h.card.id===o);if(p){p.count=(p.count||1)+1,this.state={...this.state,groups:[...this.state.groups]},this.syncSharedDeck(),this.saveDeck(),this.renderCardManager();return}}})}),document.querySelectorAll(".decrease-card-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r,o=parseInt(a.dataset.cardId||"0"),d=a.closest("[data-group-id]")?.dataset.groupId,c=this.state.groups.find(p=>p.id===d);if(c){const p=c.cards.find(h=>h.card.id===o);if(p){if(p.count&&p.count>1)p.count-=1;else return;this.state={...this.state,groups:[...this.state.groups]},this.syncSharedDeck(),this.saveDeck(),this.renderCardManager();return}}})}),document.querySelectorAll(".edit-card-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r,o=parseInt(a.dataset.cardId||"0"),d=a.closest("[data-group-id]")?.dataset.groupId,c=this.state.groups.find(m=>m.id===d);let p;if(c&&(p=c.cards.find(m=>m.card.id===o)),!p)return;const h=p.card;if(h.type==="hero"){this.heroName=h.name,this.heroImageData=h.imageData||"",this.isHeroEditMode=!0,this.editingHeroId=h.id,this.heroDerivedCards=h.derivedCards?h.derivedCards.map(m=>({name:m.name||"",type:m.type||"minion",cost:m.cost??1,attack:m.attack??1,health:m.health??1,armorValue:m.armorValue??0,preparationValue:m.preparationValue??1,imageData:m.imageData||"",keywords:m.keywords||[],effects:m.effects||[]})):[],this.heroSkills=h.skills||[],this.heroSpeech=h.heroSpeech?{...h.heroSpeech}:{greeting:"",apology:"",taunt:"",exclamation:"",pity:"",flirt:""},this.heroVoiceType=h.heroSpeech?.voiceType||"none",this.heroEditingDerivedIndex=null,this.heroEditingSkillIndex=null,this.editingCards=[],this.state=ie(this.state,{type:"SHOW_HERO_EDITOR"}),this.render();return}this.isEditMode=!0,this.editingCardSample=h,this.currentCardIndex=0,this.currentCard={name:h.name,type:h.type||"minion",cost:h.cost,attack:h.attack,health:h.health,keywords:[...h.keywords],armorValue:h.armorValue||1,preparationValue:h.preparationValue||1,imageData:h.imageData||null,effects:h.effects?h.effects.map(m=>({...m,moment:m.moment||"打出时",targets:m.targets||[],attackValue:m.attackValue??1,healthValue:m.healthValue??1,isAttackPositive:m.isAttackPositive??!0,isHealthPositive:m.isHealthPositive??!0})):h.effect?[{...h.effect,moment:h.effect.moment||"打出时",targets:h.effect.targets||[],attackValue:h.effect.attackValue??1,healthValue:h.effect.healthValue??1,isAttackPositive:h.effect.isAttackPositive??!0,isHealthPositive:h.effect.isHealthPositive??!0}]:[],spellEffect:h.type==="spell"?h.effects?.[0]||h.effect||{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}:{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}},this.currentEffectIndex=0,h.derivedCards&&h.derivedCards.length>0?(this.editingCards=h.derivedCards.map((m,f)=>{const b=m.type==="spell";return{name:m.name||(f===0?"":`衍生卡${f}`),type:m.type||"minion",cost:m.cost??1,attack:m.attack??(b?0:1),health:m.health??(b?0:1),keywords:(m.keywords||[]).map(g=>Object.values(Ee).find(x=>x.name===g.name)||{name:g.name,description:"",hasValue:!1}),armorValue:m.armorValue??1,preparationValue:m.preparationValue??1,effects:(m.effects||[]).map(g=>({...g,moment:g.moment||"打出时",targets:g.targets||[],attackValue:g.attackValue??1,healthValue:g.healthValue??1,isAttackPositive:g.isAttackPositive??!0,isHealthPositive:g.isHealthPositive??!0})),spellEffect:b?m.effects?.[0]||{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}:{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0},imageData:m.imageData||null}}),this.editingCards[0]=this.currentCard):this.editingCards=[this.currentCard],this.currentCardIndex=0,this.state=ie(this.state,{type:"SHOW_CARD_CREATOR"}),this.render()})}),document.querySelectorAll(".delete-btn, .delete-all-btn").forEach(r=>{r.addEventListener("click",()=>{const a=r,o=parseInt(a.dataset.cardId||"0"),d=a.closest("[data-group-id]")?.dataset.groupId,c=this.state.groups.find(p=>p.id===d);if(c){c.cards=c.cards.filter(p=>p.card.id!==o),this.state={...this.state,groups:[...this.state.groups]},this.syncSharedDeck(),this.saveDeck(),this.renderCardManager();return}})}),document.querySelectorAll(".deck-folder-zip-btn").forEach(r=>{r.addEventListener("click",async a=>{const o=a.currentTarget.dataset.zipName;if(!o)return;const l=this.deckFolderZips.find(d=>d.name===o);if(l)try{const d=await l.handle.getFile(),c=await this.parseGroupsFromZipBlob(d),p=c.heroCards,h=De(this.state);if(c.groups.length>0){const m=c.groups[0].cards;h.cards=this.mergeDeckEntries(h.cards,m)}for(let m=1;m<c.groups.length;m++){const f=c.groups[m],b=this.state.groups.find(g=>g.name===f.name);if(b)b.cards=this.mergeDeckEntries(b.cards,f.cards);else{const g={id:`group_${Date.now()}_${m}`,name:f.name,cards:[...f.cards]};this.state.groups.push(g)}}this.state={...this.state,groups:[...this.state.groups]},this.syncSharedDeck(),this.saveDeck(),this.showResult("import-result",`✓ 导入成功：${o}`),this.renderCardManager()}catch(d){alert(`导入失败：${d instanceof Error?d.message:"未知错误"}`)}})}),document.getElementById("back-menu-btn")?.addEventListener("click",()=>{this.saveDeck(),this.state=ie(this.state,{type:"BACK_TO_MENU"}),this.render()})}showResult(e,s){const t=document.getElementById(e);t&&(t.textContent=s,t.style.display="block",setTimeout(()=>{t.style.display="none"},2e3))}playDrawCardAnimation(e=0){this.playDrawSound();const s=document.querySelectorAll(".hand-card-wrapper.newly-drawn");if(s.length===0){console.log("没有新抽的牌需要动画"),this.state=ie(this.state,{type:"CLEAR_NEWLY_DRAWN"});return}console.log("开始播放抽牌动画，牌数:",s.length);const t=document.getElementById("end-turn-btn")||document.getElementById("my-turn-btn"),n=document.getElementById("hand-container");if(!t||!n){console.log("找不到按钮或容器，直接显示手牌"),s.forEach(l=>{l.classList.remove("newly-drawn"),l.style.opacity="1"}),this.state=ie(this.state,{type:"CLEAR_NEWLY_DRAWN"});return}const i=t.getBoundingClientRect(),r=i.left+i.width/2,a=i.top+i.height/2;s.forEach((l,d)=>{const c=l.dataset.cardId,p=e+d*200;setTimeout(()=>{c&&this.animateSingleCard(parseInt(c),r,a)},p)});const o=e+s.length*200+500;setTimeout(()=>{document.querySelectorAll(".hand-card-wrapper.newly-drawn").forEach(l=>{l.classList.remove("newly-drawn"),l.style.opacity="1"}),this.state=ie(this.state,{type:"CLEAR_NEWLY_DRAWN"})},o)}animateSingleCard(e,s,t){const n=document.querySelector(`.hand-card-wrapper[data-card-id="${e}"]`);if(!n){console.log("animateSingleCard: 找不到卡牌元素",e);return}const i=n.getBoundingClientRect(),r=i.left+i.width/2,a=i.top+i.height/2,o=getComputedStyle(n).getPropertyValue("--rotate").trim(),l=parseFloat(o)||0,d=document.createElement("div");d.className="draw-card-animation",d.innerHTML=`
      <div class="draw-card-fly" style="
        width: 30px;
        height: 42px;
        background: linear-gradient(135deg, #fff 0%, #f8f4ec 100%);
        border: 2px solid #c4b49c;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      "></div>
    `,d.style.left="0",d.style.top="0",document.body.appendChild(d);const c=(s+r)/2,p=Math.min(t,a)-100,h=350,m=performance.now(),f=(g,y)=>{const x=document.createElement("div");x.className="draw-trail-particle",x.style.left=`${g}px`,x.style.top=`${y}px`,x.style.background="linear-gradient(135deg, rgba(212, 196, 168, 0.9) 0%, rgba(196, 180, 156, 0.7) 100%)",document.body.appendChild(x),setTimeout(()=>{x.style.transition="opacity 0.25s, transform 0.25s",x.style.opacity="0",x.style.transform="scale(0.2)",setTimeout(()=>x.remove(),250)},30)},b=g=>{const y=g-m,x=Math.min(y/h,1),k=1-Math.pow(1-x,3),u=k,w=(1-u)*(1-u)*s+2*(1-u)*u*c+u*u*r,I=(1-u)*(1-u)*t+2*(1-u)*u*p+u*u*a,S=.3+.7*k;d.style.transform=`translate(${w-15}px, ${I-21}px) scale(${S})`,d.style.opacity="1",y%25<15&&x<.85&&f(w+(Math.random()-.5)*8,I+(Math.random()-.5)*8),x<1?requestAnimationFrame(b):(d.remove(),n.classList.remove("newly-drawn"),n.style.transition="opacity 0.25s, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",n.style.opacity="1",n.style.transform=`rotate(${l}deg) scale(1)`,setTimeout(()=>{n.style.removeProperty("transform"),n.style.removeProperty("opacity"),n.style.removeProperty("transition")},400))};requestAnimationFrame(b)}mergeDeckEntries(e,s){const t=new Map;for(const n of e)t.set(be(n.card),{...n});for(const n of s){const i=be(n.card),r=t.get(i);r?r.count+=n.count:t.set(i,{...n})}return Array.from(t.values())}saveDeck(e){try{if(e!==void 0){const s=De(this.state);s.cards=e,this.state={...this.state,groups:[...this.state.groups]}}this.syncSharedDeck()}catch(s){console.warn("保存分组信息失败:",s)}this.pendingSavePromise=_t(this.state.sharedDeck,this.state.heroCards||[],this.state.groups).catch(s=>{console.warn("IndexedDB 保存卡包失败:",s)})}syncSharedDeck(){const e=De(this.state);this.state.sharedDeck=e.cards;const s=[];for(const t of this.state.groups)for(const n of t.cards)n.card.type==="hero"&&s.push(n.card);this.state.heroCards=s}saveDeckToFile(){const e=o=>{const l={...o};return o.targets&&(l.targets=[...o.targets]),o.isOpponent&&(l.isOpponent=o.isOpponent),l},s=this.state.sharedDeck.reduce((o,l)=>o+l.count,0),t=[];t.push("# 妙卡包 - 卡包文件"),t.push(`# 生成时间: ${new Date().toLocaleString()}`),t.push(`# 总卡牌数: ${s}`),t.push(""),this.state.sharedDeck.forEach(({card:o,count:l})=>{t.push(`${o.name} x${l}`);const d={name:o.name,type:o.type,cost:o.cost,attack:o.attack,health:o.health,keywords:o.keywords.map(p=>p.name),armorValue:o.armorValue,effects:o.effects?o.effects.map(e):void 0,effect:o.effect?e(o.effect):void 0,effectDescription:o.effectDescription||void 0,derivedCards:o.derivedCards,spellEffect:o.type==="spell"?o.legacyEffect:void 0,spellValue:o.type==="spell"?o.legacyEffectValue:void 0},c=btoa(encodeURIComponent(JSON.stringify(d)));t.push(c),t.push("")});const n=t.join(`
`),i=new Blob([n],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(i),a=document.createElement("a");a.href=r,a.download="cards.txt",a.click(),URL.revokeObjectURL(r),this.showResult("import-result","✓ 卡包已保存！")}parseDeckFile(e){const s=[],t=e.split(`
`);for(let n=0;n<t.length;n++){const i=t[n].trim();if(i.startsWith("#")||i==="")continue;const r=i.match(/^(.+?)\s*x(\d+)$/);if(r){const a=r[1].trim(),o=parseInt(r[2]),l=t[n+1]?.trim();if(l&&!l.startsWith("#")&&l!=="")try{const d=JSON.parse(decodeURIComponent(atob(l))),c=(d.keywords||[]).map(m=>Object.values(Ee).find(f=>f.name===m)).filter(Boolean);let p=[];d.effects&&Array.isArray(d.effects)&&d.effects.length>0?p=d.effects.filter(m=>m.effect).map(m=>({moment:m.moment||(d.type==="spell"?"打出时":void 0),targets:m.targets||[],effect:m.effect,value:m.value||0,attackValue:m.attackValue||0,healthValue:m.healthValue||0,isPositive:m.isPositive!==!1,isAttackPositive:m.isAttackPositive!==!1,isHealthPositive:m.isHealthPositive!==!1,summonedCardIndex:m.summonedCardIndex,summonedCardIndices:m.summonedCardIndices,isRandom:m.isRandom})):d.effect&&d.effect.effect&&(p=[{moment:d.effect.moment||(d.type==="spell"?"打出时":void 0),targets:d.effect.targets||[],effect:d.effect.effect,value:d.effect.value||0,attackValue:d.effect.attackValue||0,healthValue:d.effect.healthValue||0,isPositive:d.effect.isPositive!==!1,isAttackPositive:d.effect.isAttackPositive!==!1,isHealthPositive:d.effect.isHealthPositive!==!1,summonedCardIndex:d.effect.summonedCardIndex,summonedCardIndices:d.effect.summonedCardIndices,isRandom:d.effect.isRandom,isOpponent:d.effect.isOpponent}]);const h=p.map(m=>{const f=m.targets||[],b=this.mergeTargets(f),g=b.includes("无需目标")||b.includes("卡牌")||f.length===0,y=b.length>0&&!g?`对${b.join("、")}`:"",x=m.isOpponent?"对手":"",k=m.moments||(m.moment?[m.moment]:[]),u=k.length===1&&k[0]==="打出时"?"":k.map(I=>$e[I]||"").join(""),w=g?x:"";if(m.effect==="造成伤害"){const I=m.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[m.elementType]||"";return`${u}${w}${y}造成${m.value}点${I}伤害`}else{if(m.effect==="抽牌")return`${u}${w}抽${m.value}张牌`;if(m.effect==="弃牌")return`${u}${w}弃${m.value}张牌`;if(m.effect==="属性变化"){const I=m.isAttackPositive!==!1?"+":"-",S=m.isHealthPositive!==!1?"+":"-",T=m.attackValue||0,D=m.healthValue||0;return T===0||D===0?`${u}${w}${y}${I}${T}/${S}${D}`:`${u}${w}${y}${I}${T}/${S}${D}`}else{if(m.effect==="给予印记")return`${u}${w}${y}给予${m.value}点印记`;if(m.effect==="治愈")return`${u}${w}${y}治愈${m.value}点生命`;if(m.effect==="获得能量")return`${u}${w}获得${m.value}点能量`;if(m.effect==="失去能量")return`${u}${w}失去${m.value}点能量`;if(m.effect==="召唤"){const I=m.value||1;let S;return m.summonSource&&m.summonSource!=="derived"?S=Ie(m.summonSource,!!m.isRandom):S="衍生随从",`${u}${w}召唤${I}张${S}`}else if(m.effect==="获得"){const I=m.value||1;let S;return m.summonSource&&m.summonSource!=="derived"?S=Ie(m.summonSource,!!m.isRandom):S="衍生牌",`${u}${w}获得${I}张${S}(随从)`}}}return""}).filter(Boolean).join("；");for(let m=0;m<o;m++)s.push({id:ke(),name:d.name||a,cost:d.cost||0,attack:d.attack||0,health:d.health||1,maxHealth:d.health||1,type:d.type||"minion",keywords:[...c],armorValue:d.armorValue,effects:p.length>0?p:void 0,effect:p.length>0?p[0]:void 0,effectDescription:h||void 0,derivedCards:d.derivedCards,legacyEffect:d.type==="spell"?d.spellEffect:void 0,legacyEffectValue:d.type==="spell"?d.spellValue:void 0});n++}catch{console.error("解析卡牌代码失败:",l)}}}return s}renderSetup(){const e=this.state.sharedDeck.reduce((l,d)=>l+d.count,0),s=this.state.phase==="robotSetup",t=localStorage.getItem("miaoKaBao_player1Name")||"",n=localStorage.getItem("miaoKaBao_player2Name")||"";this.app.innerHTML=`
      <div class="min-h-screen flex items-center justify-center" style="background: transparent;">
        <div class="text-center p-12 rounded-3xl shadow-2xl" style="background: rgba(255, 255, 255, 0.95); border: 8px solid #d4c4a8;">
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
              <input type="text" id="player2-name" placeholder="请输入昵称" value="${n}"
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
    `,document.getElementById("setup-import-file")?.addEventListener("change",async l=>{const d=l.target.files?.[0];if(!d)return;const c=document.querySelector('label[for="setup-import-file"]'),p=c?.textContent||"📂 导入卡包文件";c&&(c.textContent="⌛️ 导入中...");try{const{normalEntries:h,heroCards:m}=await this.importDeckFromZip(d);if(h.length===0&&m.length===0){alert("无效卡包：ZIP 中没有找到 PNG 卡牌文件");return}const f=h.reduce((x,k)=>x+k.count,0)+m.length,b=De(this.state),g=this.mergeDeckEntries(b.cards,h);b.cards=g,m.length>0&&m.forEach(x=>{const k=b.cards.find(u=>u.card.id===x.id);k?k.count++:b.cards.push({card:x,count:1})}),this.state={...this.state,groups:[...this.state.groups]},this.state.sharedDeck=b.cards,this.saveDeck();const y=document.getElementById("setup-import-info");y&&(y.textContent=`✓ 已导入 ${f} 张卡牌`,y.classList.remove("hidden")),setTimeout(()=>{(this.state.phase==="setup"||this.state.phase==="robotSetup")&&this.renderSetup()},1500)}catch(h){console.error("导入卡包失败:",h),alert("导入失败："+(h instanceof Error?h.message:"未知错误"))}finally{c&&(c.textContent=p),l.target.value=""}});const i=document.getElementById("hero-select-modal"),r=document.getElementById("hero-select-list"),a=document.getElementById("hero-select-empty"),o=l=>{r.innerHTML="";const d=Ft(this.state);if(d.length===0)a.classList.remove("hidden");else{if(a.classList.add("hidden"),d.length>=2){const c=document.createElement("div");c.className="cursor-pointer rounded-xl p-2 transition-all transform hover:scale-105",c.style.cssText="background: #f5f0e8; border: 2px dashed #c4a882;",c.innerHTML=`
            <div class="w-full rounded-lg overflow-hidden mb-1 flex items-center justify-center" style="aspect-ratio: 4/3; background: #e8dfd0;">
              <span style="font-size: 2rem;">🎲</span>
            </div>
            <div class="text-xs font-bold text-center truncate" style="color: #5a4a3a;">随机</div>
          `,c.addEventListener("click",()=>{const p=d[Math.floor(Math.random()*d.length)];l===1?this.player1SelectedHero=p:this.player2SelectedHero=p,i.classList.add("hidden");const h=l===1?"select-hero-p1-btn":"select-hero-p2-btn",m=document.getElementById(h);if(m){const f=m.textContent;m.textContent="✅ 已随机",m.style.background="linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)",this.render(),setTimeout(()=>{document.getElementById(h)&&(m.textContent=f,m.style.background="linear-gradient(135deg, #c4a882 0%, #b89a72 100%)")},1200)}else this.render()}),r.appendChild(c)}d.forEach(c=>{const p=document.createElement("div"),h=l===1?this.player1SelectedHero?.id===c.id:this.player2SelectedHero?.id===c.id;p.className=`cursor-pointer rounded-xl p-2 transition-all transform hover:scale-105 ${h?"ring-4":""}`,p.style.cssText=h?"ring-color: #4CAF50; background: rgba(76, 175, 80, 0.1);":"background: #f5f0e8;",p.innerHTML=`
            <div class="w-full rounded-lg overflow-hidden mb-1" style="aspect-ratio: 4/3;">
              ${c.imageData?`<img src="${c.imageData}" class="w-full h-full object-cover">`:'<div class="w-full h-full flex items-center justify-center" style="background: #e8dfd0;"><span style="font-size: 2rem;">🦸</span></div>'}
            </div>
            <div class="text-xs font-bold text-center truncate" style="color: #5a4a3a;">${c.name}</div>
          `,p.addEventListener("click",()=>{l===1?this.player1SelectedHero=c:this.player2SelectedHero=c,i.classList.add("hidden");const m=l===1?"select-hero-p1-btn":"select-hero-p2-btn",f=document.getElementById(m);if(f){const b=f.textContent;f.textContent="✅ 选择完成",f.style.background="linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)",this.render(),setTimeout(()=>{document.getElementById(m)&&(f.textContent=b,f.style.background="linear-gradient(135deg, #c4a882 0%, #b89a72 100%)")},1200)}else this.render()}),r.appendChild(p)})}i.classList.remove("hidden")};document.getElementById("select-hero-p1-btn")?.addEventListener("click",()=>o(1)),document.getElementById("select-hero-p2-btn")?.addEventListener("click",()=>o(2)),document.getElementById("close-hero-select-modal")?.addEventListener("click",()=>i.classList.add("hidden")),i.addEventListener("click",l=>{l.target===i&&i.classList.add("hidden")}),document.getElementById("back-btn")?.addEventListener("click",()=>{this.state=ie(this.state,{type:"BACK_TO_MENU"}),this.render()}),document.getElementById("confirm-btn")?.addEventListener("click",()=>{const l=document.getElementById("player1-name").value;localStorage.setItem("miaoKaBao_player1Name",l);const d=h=>{const m=this.state.groups;if(!m||m.length===0)return 0;const f=m[0].cards.filter(g=>g.card.type!=="hero").reduce((g,y)=>g+y.count,0);let b=0;if(h?.type==="hero"){const g=Ze(this.state,h);g&&g.id!==Me&&(b=g.cards.filter(y=>y.card.type!=="hero").reduce((y,x)=>y+x.count,0))}return f+b},c=d(this.player1SelectedHero),p=s?this.state.groups[0].cards.filter(h=>h.card.type!=="hero").reduce((h,m)=>h+m.count,0):d(this.player2SelectedHero);if(c<12||p<12){alert(`卡组不足！
玩家1: ${c}张
玩家2: ${p}张
双方卡组（公用卡组+英雄个人卡组）至少需要12张才能开始对战！`);return}if(s)this.state=ie(this.state,{type:"START_ROBOT_BATTLE",playerName:l,playerHero:this.player1SelectedHero||void 0}),this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100);else{const h=document.getElementById("player2-name").value;localStorage.setItem("miaoKaBao_player2Name",h),this.state=ie(this.state,{type:"START_GAME",player1Name:l,player2Name:h,player1Hero:this.player1SelectedHero||void 0,player2Hero:this.player2SelectedHero||void 0}),this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100)}})}renderHeroBackground(e){return e?.imageData?`background-image: url('${e.imageData}'); background-size: cover; background-position: center;`:"background: linear-gradient(135deg, #fff 0%, #f8f4ec 100%);"}renderHeroName(e){return e?.name?`<div class="text-xs mt-0.5" style="color: rgba(255,255,255,0.85); text-shadow: 0 0 6px rgba(0,0,0,0.6);">${e.name}</div>`:""}renderEnergy(e,s,t=0){const n=s-t;let i="#4a90d9";s===0?i="#888888":t>0&&s===t&&(i="#5a9a5a");const r=Math.max(e,s);return`<div class="flex gap-1 mt-1 items-center">
      <div class="font-bold text-xl mr-1" style="color: ${i}; text-shadow: 0 0 8px rgba(0,0,0,0.6), 0 0 16px rgba(0,0,0,0.3);">${s}</div>
      ${Array(r).fill(0).map((a,o)=>{const l=o<s,d=o>=n&&l;return`<div class="energy-crystal ${l?"":"empty"} ${d?"bonus":""}"></div>`}).join("")}
    </div>`}renderHeroSkills(e,s){const t=e.heroCard?.skills||[];if(t.length===0)return"";const i=this.state.players.find(o=>o.id===this.state.currentPlayerId)?.id===e.id,r=e.heroSkillUsed||[];return`<div class="flex flex-row-reverse items-center gap-2" style="position: absolute; right: calc(50% + 96px); top: 50%; transform: translateY(-50%);">${t.map((o,l)=>{const d=o.type==="passive",c=r[l]||!1,p=e.energy>=(o.cost??0),m=(o.remainingCooldown??0)>0,f=o.usesLeft??(o.limited?o.maxUses:void 0),b=o.limited&&f===0,g=d||c||!p||!i||m||b,y=c||m||b?"grayscale":"",x=this.selectingTargetForSkill!==null&&this.selectingTargetForSkill.skillIndex===l&&this.selectingTargetForSkill.playerId===e.id,k=x?"#a855f7":g?"#c4b49c":"#4ade80";return`
        <div class="hero-skill-icon-wrapper hero-skill-icon-btn relative group" data-skill-index="${l}" data-player-id="${e.id}" data-is-opponent="${s}">
          <div class="w-[72px] h-[72px] rounded-full border-4 overflow-hidden ${y} ${x?"animate-pulse":""}"
            style="border-color: ${k}; ${x?"box-shadow: 0 0 16px 4px rgba(168,85,247,0.7);":""} background: ${o.iconData?`url('${o.iconData}') center/cover no-repeat`:"url('/images/wood_texture_seamless.png') center/cover no-repeat"};">
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
      `}).join("")}</div>`}renderDefenseOverlay(e){const s=this.selectedAttackingMinion||this.attackingMinion;return!s||!(s.keywords.some(i=>i.name==="不动")?!1:s.isDefending?!0:!(s.attack<=0||["连击","狂怒"].some(i=>s.keywords.some(r=>r.name===i))||s.hasAttacked&&!s.keywords.some(i=>i.name==="机动")))?"":`
      <div id="defense-overlay" class="absolute inset-0 flex items-center justify-center" style="background: rgba(0,0,0,0.55); border-radius: 8px; z-index: 20; cursor: pointer;">
        <span class="text-sm font-bold text-center px-2" style="color: #fff; text-shadow: 0 1px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.6); line-height: 1.3;">${s.isDefending?"选择以取消防御":"选择以进入防御"}</span>
      </div>
    `}updateDefenseOverlayDOM(e){const s=document.getElementById("defense-overlay");if(!s)return;if(!(e.keywords.some(n=>n.name==="不动")?!1:e.isDefending?!0:!(e.attack<=0||["连击","狂怒"].some(n=>e.keywords.some(i=>i.name===n))||e.hasAttacked&&!e.keywords.some(n=>n.name==="机动")))){s.style.display="none";return}s.style.display="flex",s.querySelector("span").textContent=e.isDefending?"选择以取消防御":"选择以进入防御"}hideDefenseOverlayDOM(){const e=document.getElementById("defense-overlay");e&&(e.style.display="none")}syncSelectionToDOM(){if(document.querySelectorAll(".hand-card-wrapper.selected").forEach(e=>{e.classList.remove("selected"),e.querySelector(".hand-card-inner")?.classList.remove("selected")}),this.selectedHandCard){const e=document.querySelector(`.hand-card-wrapper[data-card-id="${this.selectedHandCard.id}"]`);e&&(e.classList.add("selected"),e.querySelector(".hand-card-inner")?.classList.add("selected"))}if(document.querySelectorAll(".bottom-board .minion-card.selected-attacker").forEach(e=>{e.classList.remove("selected-attacker"),parseInt(e.dataset.minionId);const s=e.dataset.baseBorder||"#c4b49c";this.selectingTargetForCard||this.selectingTargetForSkill?e.style.borderColor="#4a90d9":e.style.borderColor=s}),this.selectedAttackingMinion){const e=document.querySelector(`.bottom-board .minion-card[data-minion-id="${this.selectedAttackingMinion.id}"]`);e&&(e.classList.add("selected-attacker"),e.style.borderColor="#ff6b6b")}this.updatePlayAreaBorderDOM()}updatePlayAreaBorderDOM(){const e=document.getElementById("play-area");e&&(this.selectedHandCard?e.style.borderColor="#7cb87c":this.selectingTargetForCard?e.style.borderColor="#4a90d9":e.style.borderColor="#d4c4a8")}renderKeywords(e,s,t,n,i){if(e.length===0&&!i)return"";const r=e.filter(a=>!(a.name==="圣盾"&&t===!1));return r.length===0&&!i?"":`<div class="keywords-display">
      ${r.map(a=>{if(a.name==="护甲"){const o=a.value??s??1;return`<span class="keyword-tag">${a.name}${o}</span>`}return`<span class="keyword-tag">${a.name}</span>`}).join(" ")}
      ${i&&i>0?`<span class="keyword-tag">准备${i}</span>`:""}
    </div>`}renderKeywordsTooltip(e,s){if(e.length===0)return"";const t=e.filter(n=>!(n.name==="圣盾"&&s===!1));return t.length===0?"":`<div class="keywords-tooltip absolute left-1/2 -translate-x-1/2 top-full mt-2 p-3 rounded-lg shadow-2xl z-[99999] hidden group-hover:block pointer-events-none whitespace-nowrap" style="background: rgba(20, 15, 10, 0.97); min-width: 200px; border: 1px solid rgba(180, 150, 100, 0.4);">
      <div class="text-center text-xs mb-2 border-b pb-1" style="color: #c4a870; border-color: rgba(180, 150, 100, 0.3);">词条说明</div>
      ${t.map(n=>`
        <div class="text-sm mb-1 whitespace-normal">
          <span class="font-bold" style="color: #7cb9e8;">${n.name}</span>
          <span style="color: #e8e0d0;">: ${n.description}</span>
        </div>
      `).join("")}
    </div>`}getEffectIcons(e){if(!e||e.length===0)return"";const s=new Set;return e.forEach(t=>{t.moment&&s.add(t.moment)}),s.size===0?"":Array.from(s).map(t=>$e[t]||"").join("")}renderEffectsTooltip(e){if(!e||e.length===0)return"";const s=e.map(t=>{const n=this.getMomentsText(t.moment),i=this.mergeTargets(t.targets).join("、");let r="";if(t.effect==="造成伤害"){const a=t.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[t.elementType]||"";r=`对${i}造成 ${t.value} 点${a}伤害`}else if(t.effect==="给予印记")r=`给${i} ${t.value} 点印记`;else if(t.effect==="治愈")r=`为${i}恢复 ${t.value} 点生命`;else if(t.effect==="属性变化"){const a=t.isAttackPositive?`+${t.attackValue}`:`-${t.attackValue}`,o=t.isHealthPositive?`+${t.healthValue}`:`-${t.healthValue}`;r=`${i}获得 ${a}/${o}`}else if(t.effect==="抽牌")r=`抽 ${t.value} 张牌`;else if(t.effect==="获得能量")r=`获得 ${t.value} 点能量`;else if(t.effect==="失去能量")r=`失去 ${t.value} 点能量`;else if(t.effect==="召唤"){let a;t.summonSource&&t.summonSource!=="derived"?a=Ie(t.summonSource,!!t.isRandom):a="衍生随从",r=`召唤 ${t.value||1} 张${a}`}else if(t.effect==="获得"){let a;t.summonSource&&t.summonSource!=="derived"?a=Ie(t.summonSource,!!t.isRandom):a="衍生牌",r=`获得 ${t.value||1} 张${a}`}return r?`${n}${r}`:""}).filter(t=>t!=="");return s.length===0?"":`<div class="effects-tooltip absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-3 rounded-lg shadow-2xl z-[100000] hidden pointer-events-none whitespace-nowrap" style="background: rgba(20, 15, 10, 0.97); min-width: 200px; border: 1px solid rgba(180, 150, 100, 0.4);">
      <div class="text-center text-xs mb-2 border-b pb-1" style="color: #c4a870; border-color: rgba(180, 150, 100, 0.3);">技能说明</div>
      ${s.map(t=>`
        <div class="text-sm mb-1 whitespace-normal" style="color: #f0e6d2;">${t}</div>
      `).join("")}
    </div>`}renderGameLogs(){const e=this.state.gameLogs||[];return e.length===0?'<div class="px-2 py-1 text-center" style="color: #8b7355;">暂无记录</div>':e.slice(-5).reverse().map(t=>{let n="#5a4a3a",i="";switch(t.type){case"turn_start":n="#4a90d9",i="🌅";break;case"turn_end":n="#8b7355",i="🌙";break;case"draw_card":n="#5a9a5a",i="🃏";break;case"play_card":n="#9b59b6",i="📤";break;case"attack":n="#e07070",i="⚔️";break;case"damage":n="#c05050",i="💥";break;case"minion_skill":n="#f5a623",i="✨";break}return`<div class="px-2 py-0.5 border-b" style="border-color: #e8dcc8; color: ${n};">${i} ${t.message}</div>`}).join("")}getCardBgStyle(e,s="url('/images/wood_texture_seamless.png')"){return e.imageData?`background-image: url(${e.imageData}); background-size: cover; background-position: center; background-repeat: no-repeat;`:`background-image: ${s}; background-size: cover;`}getCardBgInline(e,s="rgba(255, 255, 255, 0.95)"){return e.imageData?`background-image: url(${e.imageData}); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: #f8f4ec;`:`background: ${s};`}sanitizeFileName(e){return e.replace(/[\\/:*?"<>|]/g,"_").replace(/\s+/g,"_").substring(0,100)}async exportCardToPNGBlob(e){const s=y=>{const x={...y};return y.targets&&(x.targets=[...y.targets]),y.isOpponent!==void 0&&(x.isOpponent=y.isOpponent),x},n=(e.effects||[]).filter(y=>y.effect),i={name:e.name||"未命名",type:e.type,cost:e.cost,attack:e.attack,health:e.health,keywords:(e.keywords||[]).map(y=>y.name),armorValue:e.armorValue,effects:n.length>0?n.map(s):void 0,effect:n.length>0?s(n[0]):void 0,spellEffect:e.spellEffect?s(e.spellEffect):void 0,effectDescription:e.effectDescription||void 0,derivedCards:e.derivedCards,version:3};let r;const a=document.createElement("canvas");a.width=200,a.height=300;const o=a.getContext("2d");if(e.imageData){const y=new Image;await new Promise((x,k)=>{y.onload=x,y.onerror=k,y.src=e.imageData}),o.drawImage(y,0,0,200,300)}else o.fillStyle="#f8f4ec",o.fillRect(0,0,200,300);const l=a.toDataURL("image/png"),p=await(await(await fetch(l)).blob()).arrayBuffer();r=new Uint8Array(p);const h=We(r),m=JSON.stringify(i),f=btoa(unescape(encodeURIComponent(m))),b=Ve.encode("CardData",f);h.splice(1,0,b);const g=ut(h);return new Blob([g],{type:"image/png"})}async exportHeroToPNGBlob(e){const s=e?.name||this.heroName||"未命名英雄",t=e?.imageData||this.heroImageData,n=e?.derivedCards?e.derivedCards.map(k=>({name:k.name,type:k.type,cost:k.cost,attack:k.attack,health:k.health,imageData:k.imageData,keywords:k.keywords,effects:k.effects})):this.heroDerivedCards.map(k=>({name:k.name,type:k.type,cost:k.cost,attack:k.attack,health:k.health,imageData:k.imageData,keywords:k.keywords,effects:k.effects})),i=e?.skills&&e.skills.length>0?e.skills.map(k=>({name:k.name,type:k.type,cost:k.cost,cooldown:k.cooldown,limited:k.limited,maxUses:k.maxUses,iconData:k.iconData,description:k.description,effects:k.effects||(k.effect?[k.effect]:null)})):this.heroSkills.map(k=>({name:k.name,type:k.type,cost:k.cost,cooldown:k.cooldown,limited:k.limited,maxUses:k.maxUses,iconData:k.iconData,description:k.description,effects:k.effects||(k.effect?[k.effect]:null)})),r=e?.heroSpeech?{...e.heroSpeech}:{...this.heroSpeech},a={name:s,type:"hero",version:1,derivedCards:n,skills:i,heroSpeech:r},o=document.createElement("canvas");o.width=400,o.height=300;const l=o.getContext("2d");if(t){const k=new Image;await new Promise((u,w)=>{k.onload=u,k.onerror=w,k.src=t}),l.drawImage(k,0,0,400,300)}else l.fillStyle="#f8f4ec",l.fillRect(0,0,400,300);const d=o.toDataURL("image/png"),h=await(await(await fetch(d)).blob()).arrayBuffer(),m=new Uint8Array(h),f=We(m),b=JSON.stringify(a),g=btoa(unescape(encodeURIComponent(b))),y=Ve.encode("HeroCardData",g);f.splice(1,0,y);const x=ut(f);return new Blob([x],{type:"image/png"})}async importHeroFromPNGFile(e){try{const s=await e.arrayBuffer(),t=new Uint8Array(s),n=We(t);let i=null;for(const c of n)if(c.name==="tEXt")try{const p=Ve.decode(c);if(p.keyword==="HeroCardData"){i=p.text;break}}catch{}if(!i)return null;let r;try{r=decodeURIComponent(escape(atob(i)))}catch{r=i}const a=JSON.parse(r);if(!a.name&&a.name!=="")return null;a.derivedCards&&Array.isArray(a.derivedCards)?this.heroDerivedCards=a.derivedCards.map(c=>({name:c.name||"",type:c.type||"minion",cost:c.cost??1,attack:c.attack??1,health:c.health??1,armorValue:c.armorValue??0,imageData:c.imageData||null,keywords:c.keywords||[],effects:c.effects||[]})):this.heroDerivedCards=[],this.heroEditingDerivedIndex=null,a.skills&&Array.isArray(a.skills)?this.heroSkills=a.skills.map(c=>{const p=m=>({moment:m.moment||"打出时",targets:m.targets||[],effect:m.effect||"无效果",value:m.value??0,isOpponent:m.isOpponent||!1,attackValue:m.attackValue??0,healthValue:m.healthValue??0,isAttackPositive:m.isAttackPositive??!0,isHealthPositive:m.isHealthPositive??!0,variableChange:m.variableChange||void 0,isRandom:m.isRandom||!1,isRandomTarget:m.isRandomTarget||!1,triggerNumbers:m.triggerNumbers||void 0,summonedCardIndex:m.summonedCardIndex??void 0,summonedCardIndices:m.summonedCardIndices??void 0}),h=c.effects&&Array.isArray(c.effects)?c.effects.map(p):c.effect?[p(c.effect)]:[];return{id:Date.now()+Math.floor(Math.random()*1e3),name:c.name||"技能",type:c.type||"active",cost:c.cost??1,cooldown:c.cooldown??0,limited:c.limited||!1,maxUses:c.maxUses??1,iconData:c.iconData||null,description:c.description||"",effects:h}}):this.heroSkills=[],this.heroEditingSkillIndex=null;const o=URL.createObjectURL(e),l=new Image;await new Promise((c,p)=>{l.onload=c,l.onerror=p,l.src=o});const d=await this.compressImageData(o,400,300);return URL.revokeObjectURL(o),{heroData:a,imageData:d}}catch{return null}}async importCardFromPNGFile(e){try{const s=await e.arrayBuffer(),t=new Uint8Array(s),n=We(t);let i=null;const r=[];for(const p of n)if(p.name==="tEXt")try{const h=Ve.decode(p);h.keyword==="CardData"?i=h.text:/^CardData_\d+$/.test(h.keyword)&&r.push(h.text)}catch{}if(!i)return null;let a;try{a=decodeURIComponent(escape(atob(i)))}catch{a=i}const o=JSON.parse(a);if(!o.name&&o.name!=="")return null;r.length>0?o.derivedCards=r.map(p=>{let h;try{h=decodeURIComponent(escape(atob(p)))}catch{h=p}return JSON.parse(h)}):o.derivedCards=o.derivedCards||[];const l=URL.createObjectURL(e),d=new Image;await new Promise((p,h)=>{d.onload=p,d.onerror=h,d.src=l});const c=await this.compressImageData(l);return URL.revokeObjectURL(l),{cardData:o,imageData:c}}catch{return null}}async importDeckFromZip(e){const s=await this.parseGroupsFromZipBlob(e),t=[];for(const n of s.groups)for(const i of n.cards){const r=t.find(a=>a.card.name===i.card.name);r?r.count+=i.count:t.push({card:i.card,count:i.count})}return{normalEntries:t,heroCards:s.heroCards}}async parseGroupsFromZipBlob(e){const s=await Ot.loadAsync(e),t=Object.keys(s.files),n=t.some(c=>c.includes("/")&&!c.startsWith("manifest.txt")),i=[];if(n){const c=new Set;for(const m of t)if(m.includes("/")){const f=m.split("/")[0];c.add(f)}else m.startsWith("manifest.txt")||c.add("");const p=s.file("manifest.txt");let h=null;p&&(h=await p.async("text")),i.push({name:"",cards:[],manifest:h});for(const m of c){if(m==="")continue;const f=s.file(`${m}/manifest.txt`);let b=null;f&&(b=await f.async("text"));let g=m;if(b){const y=b.match(/子卡组[：:]\s*(.+)/);y&&(g=y[1].trim())}i.push({name:g,cards:[],manifest:b})}}else{const c=s.file("manifest.txt");let p=null;c&&(p=await c.async("text")),i.push({name:"",cards:[],manifest:p})}const r=i.map(c=>{const p=new Map,h=new Map;if(c.manifest){const m=c.manifest.split(`
`);for(const f of m){const b=f.trim();if(b.startsWith("#")||b===""||b.startsWith("##"))continue;let g,y;const x=b.match(/^\[英雄\]\s*(.+?)\s*x\s*(\d+)$/),k=b.match(/^(.+?)\s*x\s*(\d+)$/);x?(g=x[1].trim(),y=parseInt(x[2]),h.set(g,y)):k&&(g=k[1].trim(),y=parseInt(k[2]),p.set(g,y))}}for(const[m,f]of h)p.set(m,f);return p}),a=c=>{const p={...c};return c.targets&&(p.targets=[...c.targets]),p},o=[],l=Object.values(s.files).filter(c=>c.name.toLowerCase().endsWith(".png"));for(const c of l){const p=c.name;let h=0;if(n&&p.includes("/")){const m=p.split("/")[0],f=i.findIndex((b,g)=>g>0&&b.name!==""&&(p.startsWith(b.name+"/")||m===b.name));f>0&&(h=f)}try{const m=await c.async("blob"),f=new File([m],p,{type:"image/png"}),b=await this.importCardFromPNGFile(f);if(b){const{cardData:y,imageData:x}=b,k=y.effects||(y.effect?[y.effect]:[]),u={id:ke(),name:y.name||"",type:y.type||"minion",cost:y.cost??1,attack:y.attack??1,health:y.health??1,maxHealth:y.health??1,keywords:(y.keywords||[]).map(I=>I==="风怒"?"__WINDURY__":I).map(I=>I==="__WINDURY__"?"连击":I).map(I=>Object.values(Ee).find(T=>T.name===I)||{name:I,description:"",hasValue:!1}),armorValue:y.armorValue??1,effects:k.map(a),effect:k.length>0?a(k[0]):void 0,effectDescription:y.effectDescription||"",derivedCards:y.derivedCards,imageData:x},w=r[h].get(y.name)||1;i[h].cards.push({card:u,count:w});continue}const g=await this.importHeroFromPNGFile(f);if(g){const{heroData:y,imageData:x}=g,k={id:ke(),name:y.name||"",type:"hero",cost:0,attack:0,health:0,maxHealth:0,keywords:[],imageData:x,skills:y.skills||[],derivedCards:y.derivedCards||[],heroSpeech:y.heroSpeech},u=r[h].get(y.name)||1;i[h].cards.push({card:k,count:u}),o.push(k)}}catch{}}const d=[];d.push({name:"",cards:i[0].cards});for(let c=1;c<i.length;c++)i[c].cards.length>0&&d.push({name:i[c].name,cards:i[c].cards});return{groups:d,heroCards:o}}async exportDeckToZip(e){try{const s=document.getElementById("export-zip-btn");s&&(s.textContent="⏳ 打包中...",s.disabled=!0);const t=document.getElementById("import-result");t&&(t.classList.remove("hidden"),t.textContent="正在打包，请稍候...");const n=new Ot,i=this.state.groups;let r=0;const a=i[0],o=["# 妙卡包 - 公用卡组"];o.push(`# 导出时间: ${new Date().toLocaleString()}`),o.push(`# 卡牌种类: ${a.cards.length}`),o.push("# 格式：卡牌名称 x 数量"),o.push("");for(const p of a.cards){const h=p.card,m=p.count,f=this.sanitizeFileName(h.name||"未命名"),b=h.type==="hero"?await this.exportHeroToPNGBlob(h):await this.exportCardToPNGBlob(h);n.file(`${f}.png`,b);const g=h.type==="hero"?"[英雄] ":"";o.push(`${g}${h.name} x ${m}`),r++}n.file("manifest.txt",o.join(`
`));for(let p=1;p<i.length;p++){const h=i[p];if(h.cards.length===0)continue;const m=this.sanitizeFileName(h.name||"未命名卡组"),f=[`# 妙卡包 - 子卡组：${h.name}`];f.push(`# 导出时间: ${new Date().toLocaleString()}`),f.push(`# 卡牌种类: ${h.cards.length}`),f.push("# 格式：卡牌名称 x 数量"),f.push("");for(const b of h.cards){const g=b.card,y=b.count,x=this.sanitizeFileName(g.name||"未命名"),k=g.type==="hero"?await this.exportHeroToPNGBlob(g):await this.exportCardToPNGBlob(g);n.file(`${m}/${x}.png`,k);const u=g.type==="hero"?"[英雄] ":"";f.push(`${u}${g.name} x ${y}`),r++}n.file(`${m}/manifest.txt`,f.join(`
`))}const l=await n.generateAsync({type:"blob"}),c=`妙卡包_卡包_${new Date().toISOString().slice(0,19).replace(/[T:]/g,"-")}.zip`;if(this.deckFolderHandle){const h=await(await this.deckFolderHandle.getFileHandle(c,{create:!0})).createWritable();await h.write(l),await h.close(),console.log(`ZIP 已导出到文件夹: ${c}`)}else{const p=URL.createObjectURL(l),h=document.createElement("a");h.href=p,h.download=c,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(p)}s&&(s.textContent="📦 导出卡包(ZIP)",s.disabled=!1),t&&(t.textContent=`✓ 导出成功！共 ${r} 种卡牌（${i.length} 个分组）`,setTimeout(()=>t.classList.add("hidden"),3e3))}catch(s){const t=document.getElementById("export-zip-btn");t&&(t.textContent="📦 导出卡包(ZIP)",t.disabled=!1);const n=document.getElementById("import-result");n&&(n.textContent="✗ 导出失败："+s.message),alert("导出卡包失败："+s.message)}}async generateAtmosphereCard(e){return new Promise((s,t)=>{const n=new Image;n.onload=()=>{try{const i=document.createElement("canvas");i.width=n.naturalWidth,i.height=n.naturalHeight;const r=i.getContext("2d");if(!r){t(new Error("canvas context null"));return}r.drawImage(n,0,0);const a=r.getImageData(0,0,n.naturalWidth,n.naturalHeight).data,o=24,l=new Map,d=n.naturalWidth,c=n.naturalHeight;for(let D=0;D<c;D+=2)for(let O=0;O<d;O+=2){const P=(D*d+O)*4,B=a[P],$=a[P+1],N=a[P+2];if(a[P+3]<128||B<15&&$<15&&N<15||B>240&&$>240&&N>240)continue;const U=Math.floor(B/o)*o,ne=Math.floor($/o)*o,Z=Math.floor(N/o)*o,re=`${U},${ne},${Z}`,q=Math.max(B,$,N),C=Math.min(B,$,N),_=q===0?0:(q-C)/q,L=l.get(re);L?(L.r+=B,L.g+=$,L.b+=N,L.count++,L.sat+=_):l.set(re,{r:B,g:$,b:N,count:1,sat:_})}if(l.size===0){s(this.drawAtmosphereCard(n,"#2a2a3a","#7a5a3a","#3a5a7a"));return}const p=Array.from(l.entries()).map(([D,O])=>({r:Math.round(O.r/O.count),g:Math.round(O.g/O.count),b:Math.round(O.b/O.count),sat:O.sat/O.count,count:O.count})),h=Math.floor(c*.15),m=Math.floor(d*.15),f=new Map;for(let D=0;D<c;D+=2)for(let O=0;O<d;O+=2){if(!(D<h||D>=c-h||O<m||O>=d-m))continue;const B=(D*d+O)*4,$=a[B],N=a[B+1],J=a[B+2];if(a[B+3]<128)continue;const ne=Math.floor($/o)*o,Z=Math.floor(N/o)*o,re=Math.floor(J/o)*o,q=`${ne},${Z},${re}`;f.set(q,(f.get(q)||0)+1)}p.sort((D,O)=>O.count-D.count);let b=p[0];const g=Array.from(f.entries()).sort((D,O)=>O[1]-D[1]);if(g.length>0){const D=g[0][0],O=p.find(P=>{const B=Math.floor(P.r/o)*o,$=Math.floor(P.g/o)*o,N=Math.floor(P.b/o)*o;return`${B},${$},${N}`===D});O&&(b=O)}const y=[...p].sort((D,O)=>O.sat-D.sat),x=y[0].sat,k=y.length>1?y[1].sat:0,u=x>k*1.5&&x>.3,w=(D,O)=>Math.sqrt((D.r-O.r)**2+(D.g-O.g)**2+(D.b-O.b)**2);let I=p.find(D=>w(D,b)>60)||p[1]||b;u&&y[0]!==b&&(I=y[0]);let S=p.find(D=>D!==b&&D!==I&&w(D,b)>60&&w(D,I)>40)||p[2]||I;const T=D=>`#${D.r.toString(16).padStart(2,"0")}${D.g.toString(16).padStart(2,"0")}${D.b.toString(16).padStart(2,"0")}`;s(this.drawAtmosphereCard(n,T(b),T(I),T(S)))}catch(i){t(i)}},n.onerror=t,n.src=e})}drawAtmosphereCard(e,s,t,n){const i=document.createElement("canvas");i.width=800,i.height=1200;const r=i.getContext("2d");if(!r)return"";r.imageSmoothingEnabled=!1,r.fillStyle=s,r.fillRect(0,0,800,1200);let a=r.createRadialGradient(960,-100,0,960,-100,800);a.addColorStop(0,t+"ff"),a.addColorStop(.3,t+"dd"),a.addColorStop(.6,t+"77"),a.addColorStop(1,"transparent"),r.fillStyle=a,r.fillRect(0,0,800,1200),a=r.createRadialGradient(-100,1100,0,-100,1100,700),a.addColorStop(0,n+"ff"),a.addColorStop(.35,n+"cc"),a.addColorStop(.65,n+"66"),a.addColorStop(1,"transparent"),r.fillStyle=a,r.fillRect(0,0,800,1200),a=r.createRadialGradient(400,200,0,400,200,450),a.addColorStop(0,t+"dd"),a.addColorStop(.5,t+"88"),a.addColorStop(1,"transparent"),r.fillStyle=a,r.fillRect(0,0,800,1200),a=r.createRadialGradient(400,600,0,400,600,550),a.addColorStop(0,s+"cc"),a.addColorStop(.5,s+"66"),a.addColorStop(1,"transparent"),r.fillStyle=a,r.fillRect(0,0,800,1200);const o=800*.78,l=(800-o)/2,d=1200*.18,c=30,p=.85,h=c*4,m=document.createElement("canvas");m.width=o+h*2,m.height=o+h*2;const f=m.getContext("2d");if(f){f.imageSmoothingEnabled=!1;const u=Math.max(o/e.naturalWidth,o/e.naturalHeight),w=e.naturalWidth*u,I=e.naturalHeight*u;f.drawImage(e,(o-w)/2+h,(o-I)/2+h,w,I),f.globalCompositeOperation="source-in",f.fillStyle="#000000",f.fillRect(0,0,m.width,m.height),f.globalCompositeOperation="source-over",r.save(),r.beginPath(),r.rect(l-h,d-h,o+h*2,o+h*2),r.clip(),r.filter=`blur(${c}px)`,r.globalAlpha=p,r.drawImage(m,l-h,d-h),r.restore()}r.save(),r.beginPath();const b=40;r.moveTo(l+b,d),r.lineTo(l+o-b,d),r.quadraticCurveTo(l+o,d,l+o,d+b),r.lineTo(l+o,d+o-b),r.quadraticCurveTo(l+o,d+o,l+o-b,d+o),r.lineTo(l+b,d+o),r.quadraticCurveTo(l,d+o,l,d+o-b),r.lineTo(l,d+b),r.quadraticCurveTo(l,d,l+b,d),r.closePath(),r.clip();const g=Math.max(o/e.naturalWidth,o/e.naturalHeight),y=e.naturalWidth*g,x=e.naturalHeight*g;r.drawImage(e,l+(o-y)/2,d+(o-x)/2,y,x),r.restore();const k=r.createLinearGradient(0,920,0,1200);return k.addColorStop(0,"rgba(0,0,0,0)"),k.addColorStop(.4,"rgba(0,0,0,0.4)"),k.addColorStop(1,"rgba(0,0,0,0.85)"),r.fillStyle=k,r.fillRect(0,920,800,280),i.toDataURL("image/png")}async generateAtmosphereBackground(e){return new Promise((s,t)=>{const n=new Image;n.onload=()=>{try{const i=document.createElement("canvas");i.width=n.naturalWidth,i.height=n.naturalHeight;const r=i.getContext("2d");if(!r){t(new Error("canvas context null"));return}r.drawImage(n,0,0);const a=r.getImageData(0,0,n.naturalWidth,n.naturalHeight).data,o=24,l=new Map,d=n.naturalWidth,c=n.naturalHeight;for(let N=0;N<c;N+=2)for(let J=0;J<d;J+=2){const U=(N*d+J)*4,ne=a[U],Z=a[U+1],re=a[U+2];if(a[U+3]<128||ne<15&&Z<15&&re<15||ne>240&&Z>240&&re>240)continue;const C=Math.floor(ne/o)*o,_=Math.floor(Z/o)*o,L=Math.floor(re/o)*o,V=`${C},${_},${L}`,Q=Math.max(ne,Z,re),de=Math.min(ne,Z,re),oe=Q===0?0:(Q-de)/Q,G=l.get(V);G?(G.r+=ne,G.g+=Z,G.b+=re,G.count++,G.sat+=oe):l.set(V,{r:ne,g:Z,b:re,count:1,sat:oe})}if(l.size===0){s({bgDataUrl:"",colors:{dominant:"#2a2a3a",secondary:"#7a5a3a",tertiary:"#3a5a7a"}});return}const p=Array.from(l.entries()).map(([N,J])=>({r:Math.round(J.r/J.count),g:Math.round(J.g/J.count),b:Math.round(J.b/J.count),sat:J.sat/J.count,count:J.count}));p.sort((N,J)=>J.count-N.count);const h=Math.floor(c*.15),m=Math.floor(d*.15),f=new Map;for(let N=0;N<c;N+=2)for(let J=0;J<d;J+=2){if(!(N<h||N>=c-h||J<m||J>=d-m))continue;const ne=(N*d+J)*4,Z=a[ne],re=a[ne+1],q=a[ne+2];if(a[ne+3]<128)continue;const _=Math.floor(Z/o)*o,L=Math.floor(re/o)*o,V=Math.floor(q/o)*o,Q=`${_},${L},${V}`;f.set(Q,(f.get(Q)||0)+1)}let b=p[0];const g=Array.from(f.entries()).sort((N,J)=>J[1]-N[1]);if(g.length>0){const N=g[0][0],J=p.find(U=>{const ne=Math.floor(U.r/o)*o,Z=Math.floor(U.g/o)*o,re=Math.floor(U.b/o)*o;return`${ne},${Z},${re}`===N});J&&(b=J)}const y=[...p].sort((N,J)=>J.sat-N.sat),x=y[0].sat,k=y.length>1?y[1].sat:0,u=x>k*1.5&&x>.3,w=(N,J)=>Math.sqrt((N.r-J.r)**2+(N.g-J.g)**2+(N.b-J.b)**2);let I=p.find(N=>w(N,b)>60)||p[1]||b;u&&y[0]!==b&&(I=y[0]);let S=p.find(N=>N!==b&&N!==I&&w(N,b)>60&&w(N,I)>40)||p[2]||I;const T=N=>`#${N.r.toString(16).padStart(2,"0")}${N.g.toString(16).padStart(2,"0")}${N.b.toString(16).padStart(2,"0")}`,D={dominant:T(b),secondary:T(I),tertiary:T(S)},O=document.createElement("canvas");O.width=800,O.height=1200;const P=O.getContext("2d");if(!P){t(new Error("bg canvas context null"));return}P.fillStyle=D.dominant,P.fillRect(0,0,800,1200);let B=P.createRadialGradient(960,-100,0,960,-100,800);B.addColorStop(0,D.secondary+"ff"),B.addColorStop(.3,D.secondary+"dd"),B.addColorStop(.6,D.secondary+"77"),B.addColorStop(1,"transparent"),P.fillStyle=B,P.fillRect(0,0,800,1200),B=P.createRadialGradient(-100,1100,0,-100,1100,700),B.addColorStop(0,D.tertiary+"ff"),B.addColorStop(.35,D.tertiary+"cc"),B.addColorStop(.65,D.tertiary+"66"),B.addColorStop(1,"transparent"),P.fillStyle=B,P.fillRect(0,0,800,1200),B=P.createRadialGradient(400,200,0,400,200,450),B.addColorStop(0,D.secondary+"dd"),B.addColorStop(.5,D.secondary+"88"),B.addColorStop(1,"transparent"),P.fillStyle=B,P.fillRect(0,0,800,1200),B=P.createRadialGradient(400,600,0,400,600,550),B.addColorStop(0,D.dominant+"cc"),B.addColorStop(.5,D.dominant+"66"),B.addColorStop(1,"transparent"),P.fillStyle=B,P.fillRect(0,0,800,1200);const $=P.createLinearGradient(0,920,0,1200);$.addColorStop(0,"rgba(0,0,0,0)"),$.addColorStop(.4,"rgba(0,0,0,0.4)"),$.addColorStop(1,"rgba(0,0,0,0.85)"),P.fillStyle=$,P.fillRect(0,920,800,280),s({bgDataUrl:O.toDataURL("image/png"),colors:D})}catch(i){t(i)}},n.onerror=()=>t(new Error("图片加载失败")),n.src=e})}async compressImageData(e,s=200,t=300){return new Promise((n,i)=>{const r=new Image;r.onload=()=>{const a=document.createElement("canvas");a.width=s,a.height=t;const o=a.getContext("2d");if(!o){n(e);return}o.imageSmoothingEnabled=!1,o.drawImage(r,0,0,s,t),n(a.toDataURL("image/png"))},r.onerror=()=>n(e),r.src=e})}async expandEntriesForOnline(e){const s=new Set,t=new Map,n=[];for(const i of e){const r=be(i.card),a=s.has(r);a||s.add(r);let o="";!a&&i.card.imageData&&(t.has(r)?o=t.get(r):(o=await this.compressImageData(i.card.imageData),t.set(r,o)));for(let l=0;l<i.count;l++)n.push({...i.card,id:ke(),imageData:a?"":o})}return n}renderHand(e,s,t=!1){if(e.length===0)return"";const n=e.length,i=t?Math.min(n*5,40):Math.min(n*8,60),r=-i/2,a=n>1?i/(n-1):0;return e.map((o,l)=>{const d=n===1?0:r+l*a,c=s>=o.cost,p=o.type==="spell",h=this.selectedHandCard?.id===o.id,m=this.state.newlyDrawnCardIds.includes(o.id);return`
        <div class="hand-card-wrapper ${h?"selected":""} ${m?"newly-drawn":""} ${t?"portrait-mode":""}" 
             data-index="${l}"
             data-card-id="${o.id}"
             style="--rotate: ${d}deg; z-index: ${l+10};">
          <div class="hand-card-inner ${c?"can-play":""} ${p?"spell-card":""} ${h?"selected":""} ${t?"portrait-mode":""}"
               style="${c?p?"border: 2px solid #9c27b0;":"border: 2px solid #4caf50;":"border: 2px solid #9e9e9e;"} ${this.getCardBgStyle(o)}">
            <div class="card-top-row">
              <div class="card-cost-diamond">
                <span>${o.cost}</span>
              </div>
              <div class="card-name">${o.name}</div>
            </div>
            ${o.keywords.length>0?this.renderKeywords(o.keywords,o.armorValue):""}
            ${(()=>{const f=this.getCardFullEffectText(o);return f?`<div class="card-effect-text">${f}</div>`:""})()}
            ${p?`
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
      `}).join("")}renderMulliganOverlay(){const{mulliganCards:e,mulliganSelected:s,p2MulliganCards:t,p2MulliganSelected:n,currentPlayerId:i,mulliganFirstPlayer:r,turnNumber:a,online:o,mulliganDone:l}=this.state;console.log("[DEBUG] renderMulliganOverlay",{currentPlayerId:i,turnNumber:a,mulliganFirstPlayer:r,mulliganCardsCount:e.length,p2MulliganCardsCount:t.length,mulliganSelected:s,p2MulliganSelected:n,mulliganDone:l,onlinePlayerId:o?.playerId,onlineFirstPlayerId:o?.firstPlayerId});const d=o?.playerId&&o?.firstPlayerId;if(d){const w=o.playerId===o.firstPlayerId;if(!(w&&l<1||!w&&l<2)){console.log("[renderMulliganOverlay] 非自己的换牌回合，跳过渲染");return}}const c=d?o.playerId===o.firstPlayerId:i===1,p=!c,h=c?e:t,m=c?s:n,b=p?"后手":"先手",g=m.length,y=w=>{const I=w.type==="spell",S=this.getCardFullEffectText(w);return`
        <div class="mulligan-card-inner" style="${this.getCardBgStyle(w)}">
          <div class="card-top-row">
            <div class="card-cost-diamond"><span>${w.cost}</span></div>
            <div class="card-name">${w.name}</div>
          </div>
          ${w.keywords.length>0?this.renderKeywords(w.keywords):""}
          ${S?`<div class="card-effect-text">${S}</div>`:""}
          ${I?`
            <div class="card-bottom-row" style="justify-content: center; align-items: center; height: 24px;">
              <!-- 法术牌不显示攻防数值 -->
            </div>
          `:`
            <div class="card-bottom-row">
              <div class="stat-row">
                <div class="stat-attack">${w.attack}</div>
                <div class="stat-health">${w.health}</div>
              </div>
            </div>
          `}
        </div>
      `},x=h.map(w=>{const I=m.includes(w.id),S=y(w);return`
        <div class="mulligan-card-wrapper relative cursor-pointer hover:scale-105 transition-transform" data-card-id="${w.id}">
          ${S}
          ${I?`
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="w-full h-full absolute bg-red-500/50 rounded-xl"></div>
              <div class="text-9xl text-red-600 font-bold rotate-12 select-none pointer-events-none" style="text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;">✕</div>
            </div>
          `:""}
        </div>
      `}).join(""),k=document.createElement("div");k.id="mulligan-overlay",k.className="fixed inset-0 z-50 flex flex-col items-center justify-center",k.style.background="rgba(0, 0, 0, 0.75)",k.innerHTML=`
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
    `;const u=document.getElementById("mulligan-overlay");u&&u.remove(),document.body.appendChild(k),k.querySelectorAll(".mulligan-card-wrapper").forEach(w=>{const I=parseInt(w.getAttribute("data-card-id")||"0");w.addEventListener("click",()=>{const S=p?"TOGGLE_P2_MULLIGAN_CARD":"TOGGLE_MULLIGAN_CARD";this.state=ie(this.state,{type:S,cardId:I});const T=p?this.state.p2MulliganSelected:this.state.mulliganSelected,D=T.includes(I),O=w.querySelector(".mulligan-selected-overlay");if(D&&!O){const B=document.createElement("div");B.className="mulligan-selected-overlay absolute inset-0 flex items-center justify-center pointer-events-none",B.innerHTML='<div class="w-full h-full absolute bg-red-500/50 rounded-xl"></div><div class="text-9xl text-red-600 font-bold rotate-12 select-none pointer-events-none" style="text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;">✕</div>',w.appendChild(B)}else!D&&O&&O.remove();const P=document.getElementById("mulligan-confirm-btn");if(P){const B=T.length;P.textContent=B>0?`确认（已选 ${B} 张）`:"确认"}})}),k.querySelector("#mulligan-confirm-btn")?.addEventListener("click",async()=>{const w=this.state.online;if(w?.currentRoom){if(w.playerId===w.firstPlayerId){const D=document.getElementById("mulligan-overlay");D&&D.remove(),this.state=ie(this.state,{type:"CONFIRM_MULLIGAN"}),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100),await this.broadcastGameState()}else{const D=this.state.p2MulliganSelected,O=document.getElementById("mulligan-overlay");O&&O.remove(),this.state=ie(this.state,{type:"CONFIRM_MULLIGAN",forceP2Branch:!0}),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100);try{await this.broadcastGameState(),console.log("P2 换牌后已广播 STATE_SYNC")}catch(P){console.error("P2 换牌后广播 STATE_SYNC 失败:",P)}try{const P=w.currentRoom?.id;if(!P){console.error("MULLIGAN_CONFIRM: currentRoom is null");return}const{sendMessage:B}=await fe(async()=>{const{sendMessage:N}=await import("./online-D2Ox2vtC.js");return{sendMessage:N}},[]);await B(P,w.playerId,"__SYSTEM__",`__MULLIGAN_CONFIRM__|${JSON.stringify(D)}`)?console.log("MULLIGAN_CONFIRM 已发送给先手"):console.warn("MULLIGAN_CONFIRM 发送可能失败（返回 null），已通过 STATE_SYNC 兜底")}catch(P){console.error("发送 MULLIGAN_CONFIRM 失败:",P)}}return}const S=document.getElementById("mulligan-overlay");S&&S.remove(),this.state=ie(this.state,{type:"CONFIRM_MULLIGAN"}),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100)})}renderDiscardPileViewer(){if(!this.showDiscardPileViewer)return"";const e=this.state.discardPile.map(s=>{const t=this.getCardFullEffectText(s);return`
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
                  ${s.keywords.map(n=>{const i=n.name==="护甲"?n.value??s.armorValue??1:"";return`<span class="card-keyword-tag">${n.name}${i}</span>`}).join("")}
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
    `}renderGame(){const{waitingForNextPlayer:e,currentPlayerId:s,turnNumber:t,sharedDeck:n,players:i}=this.state;typeof window<"u"&&(this.isPortraitMode=window.innerWidth/window.innerHeight<3/4);const r=this.state.phase==="robotBattle",a=r?!1:s===2,o=a?i[0]:i[1],l=a?i[1]:i[0],d=o.id,c=l.id,p=r&&s===2,h=r?!0:!e,f=l.board.filter(x=>x.canAttack&&!x.hasAttacked&&x.attack>0&&!x.isDefending).length>0,b=o.board.some(x=>x.isDefending||x.keywords.some(k=>k.name==="嘲讽")),g=f&&!b,y=this.isPortraitMode?"compact-mode":"";this.app.innerHTML=`
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
            ${o.board.map(x=>{const k=o.board.some(O=>O.isDefending||O.keywords.some(P=>P.name==="嘲讽")),u=x.isDefending||x.keywords.some(O=>O.name==="嘲讽"),w=k&&!u?"non-taunt-target":"",I=this.selectedAttackingMinion!==null,S=this.selectingTargetForCard!==null||this.selectingTargetForSkill!==null,T=x.markCount||0,D=this.getEffectIcons(x.effects);return x.elementStatus&&console.log("[元素边框-联机顶部] 随从:",x.name,"元素类型:",x.elementStatus.type,"style中将包含box-shadow"),`
              <div class="minion-card group relative rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all ${this.dyingMinions.has(x.id)?"minion-dying":""} ${x.isDefending?"is-defending":""} ${x.keywords.some(O=>O.name==="嘲讽")?"taunt-minion":""} ${w} ${I?"attack-target":""} ${S?"target-select-mode":""}${x.elementStatus?" element-status-"+x.elementStatus.type:""}" 
                style="${this.getCardBgInline(x,"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)")} border: 4px solid ${S?"#4a90d9":x.isDefending||x.keywords.some(O=>O.name==="嘲讽")?"#6b7db3":x.canAttack&&!x.hasAttacked?"#7cb87c":"#c4b49c"};${x.elementStatus?"padding: 7px; background-clip: padding-box; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[x.elementStatus.type]||"transparent")+";":""}"
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
                    ${D?`<div class="effect-icons text-xs">${D}</div>`:""}
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
            ${l.board.map(x=>{const k=this.selectedAttackingMinion?.id===x.id,u=this.selectingTargetForCard!==null||this.selectingTargetForSkill!==null,w=x.markCount||0,I=this.getEffectIcons(x.effects);return x.elementStatus&&console.log("[元素边框-联机底部] 随从:",x.name,"元素类型:",x.elementStatus.type,"style中将包含box-shadow"),`
              <div class="minion-card group relative rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all ${x.canAttack&&!x.isDefending||x.canAttack&&x.isDefending&&x.keywords.some(S=>S.name==="机动")?"can-attack":""} ${x.isDefending?"is-defending":""} ${this.dyingMinions.has(x.id)?"minion-dying":""} ${k?"selected-attacker":""} ${u?"target-select-mode":""}${x.elementStatus?" element-status-"+x.elementStatus.type:""}" 
                style="${this.getCardBgInline(x,"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)")} border: 4px solid ${k?"#ff6b6b":u?"#4a90d9":x.keywords.some(S=>S.name==="不动")?"#808080":x.isDefending?"#6b7db3":x.canAttack&&!x.hasAttacked?"#7cb87c":x.playedThisTurn?"#4a90d9":"#c4b49c"};${x.elementStatus?"padding: 7px; background-clip: padding-box; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[x.elementStatus.type]||"transparent")+";":""}"
                data-minion-id="${x.id}" data-player-id="${c}" data-has-effects="${x.effects&&x.effects.length>0?"true":"false"}"
                data-base-border="${x.keywords.some(S=>S.name==="不动")?"#808080":x.isDefending?"#6b7db3":x.canAttack&&!x.hasAttacked?"#7cb87c":x.playedThisTurn?"#4a90d9":"#c4b49c"}">
                ${w>0?`
                  <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md" 
                    style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                    ${w}
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
                    ${I?`<div class="effect-icons text-xs">${I}</div>`:""}
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
                ${p?`
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
    `,this.attachEventListeners(),this.checkAndTriggerStatEffects()}saveCurrentMinionStats(){this.previousMinionStats.clear(),this.state.players.forEach(e=>{e.board.forEach(s=>{this.previousMinionStats.set(s.id,{attack:s.attack,health:s.health,maxHealth:s.maxHealth})})})}checkAndTriggerStatEffects(){const e=[],s=new Set;this.state.players.forEach(n=>{n.board.forEach(i=>{s.add(i.id)})});const t=[];this.previousBoardMinionIds.size>0&&this.previousBoardMinionIds.forEach(n=>{s.has(n)||t.push(n)}),this.state.players.forEach(n=>{n.board.forEach(i=>{const r=this.previousMinionStats.get(i.id);if(r){const a=r.attack!==i.attack||r.maxHealth!==i.maxHealth,o=r.health-i.health;o>0?e.push({id:i.id,type:"damaged",damage:o}):a&&e.push({id:i.id,type:"stat-change",damage:0})}})}),this.state.players.forEach((n,i)=>{const a=this.previousPlayerHealth[i]-n.health;if(a>0){const o=document.querySelector(`[data-player-hp="${n.id}"]`);if(o){const l=o.getBoundingClientRect();this.damageNumbers.push({x:l.left+l.width/2,y:l.top+l.height/2,damage:a})}}this.previousPlayerHealth[i]=n.health}),this.saveCurrentMinionStats(),this.previousBoardMinionIds=s,e.length>0&&requestAnimationFrame(()=>{e.forEach(({id:n,type:i,damage:r})=>{const a=document.querySelector(`[data-minion-id="${n}"]`);if(a){if(a.classList.remove("minion-stat-change","minion-damaged"),a.offsetWidth,i==="damaged"){if(a.classList.add("minion-damaged"),r>0){const o=a.getBoundingClientRect();this.showDamageNumber(o.left+o.width/2,o.top+o.height/2,r)}}else a.classList.add("minion-stat-change");setTimeout(()=>{a.classList.remove("minion-stat-change","minion-damaged")},300)}else if(i==="damaged"&&r>0){const o=this.deathAnimationQueue.find(l=>l.id===n);o&&this.showDamageNumber(o.x+40,o.y+35,r)}})}),this.damageNumbers.length>0&&requestAnimationFrame(()=>{this.damageNumbers.forEach(({x:n,y:i,damage:r})=>{this.showDamageNumber(n,i,r)}),this.damageNumbers=[]}),t.length>0&&(t.forEach(n=>{const i=this.previousMinionStats.get(n),r=this.deathAnimationQueue.find(a=>a.id===n);if(i&&r){const a=Math.max(1,i.health);this.showDamageNumber(r.x+40,r.y+50,a)}}),setTimeout(()=>{this.playDeathAnimations(t)},100))}showDamageNumber(e,s,t){const n=document.createElement("div");n.className="damage-number",n.style.left=`${e}px`,n.style.top=`${s}px`,n.textContent=`${t}`,document.body.appendChild(n),setTimeout(()=>{n.remove()},550)}playDeathAnimations(e){e.forEach(s=>{const t=this.deathAnimationQueue.find(n=>n.id===s);t&&(this.createTearAnimationWithInfo(t),this.deathAnimationQueue=this.deathAnimationQueue.filter(n=>n.id!==s))})}createTearAnimationWithInfo(e){const s=document.createElement("div");s.className="minion-tear-top",s.style.left=`${e.x}px`,s.style.top=`${e.y}px`,s.innerHTML=`
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
    `,document.body.appendChild(s),document.body.appendChild(t),setTimeout(()=>{s.remove(),t.remove()},400)}saveMinionPositions(){document.querySelectorAll(".minion-card").forEach(e=>{const s=e,t=parseInt(s.dataset.minionId||"0"),n=parseInt(s.dataset.playerId||"0"),i=s.getBoundingClientRect(),r=this.deathAnimationQueue.find(a=>a.id===t);if(r)r.x=i.left,r.y=i.top,r.playerId=n;else{const a=this.state.players.flat().flatMap(o=>o.board).find(o=>o.id===t);a&&this.deathAnimationQueue.push({id:a.id,name:a.name,attack:a.attack,health:a.health,x:i.left,y:i.top,playerId:n})}})}findAttackBonusForMinion(e){const s=e.effects||[];for(const t of s)if(this.momentsInclude(t.moment,"攻击时")&&t.effect==="造成伤害"&&t.targets?.[0]==="攻击目标")return t.value||0;return 0}ensureFxCanvas(){if(this.fxCanvas&&this.fxCanvas.parentElement)return;this.fxCanvas&&(this.fxCanvas.remove(),this.fxCanvas=null,this.fxCtx=null),this.fxCanvas=document.createElement("canvas"),this.fxCanvas.id="fx-canvas",this.fxCanvas.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:999;width:100vw;height:100vh;",this.fxCanvas.width=window.innerWidth,this.fxCanvas.height=window.innerHeight,document.body.appendChild(this.fxCanvas),this.fxCtx=this.fxCanvas.getContext("2d");const e=()=>{this.fxCanvas&&(this.fxCanvas.width=window.innerWidth,this.fxCanvas.height=window.innerHeight)};window.addEventListener("resize",e)}getMinionCenter(e){const s=document.querySelector(`[data-minion-id="${e}"]`);if(!s)return null;const t=s.getBoundingClientRect(),n=this.fxCanvas?.parentElement;if(!n)return null;const i=n.getBoundingClientRect();return{x:t.left-i.left+t.width/2,y:t.top-i.top+t.height/2}}triggerFireExplosion(e){this.ensureFxCanvas();const s=this.getMinionCenter(e);if(s){this.fxCanvas.width,this.fxCanvas.height;for(let t=0;t<10;t++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*20,vy:(Math.random()-.5)*20,size:16+Math.random()*22,life:1,maxLife:.8+Math.random()*.5,color:t===0?"#fffbe6":"#ffcc00",decay:.96,shape:"circle",alpha:1});for(let t=0;t<50;t++){const n=Math.random()*Math.PI*2,i=40+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i-10,size:5+Math.random()*8,life:1,maxLife:1+Math.random()*.8,color:["#ff6600","#ff3300","#ff8800","#cc2200"][Math.floor(Math.random()*4)],decay:.975,shape:"spark",alpha:1,gravity:80,trail:!0,trailLength:6,history:[]})}for(let t=0;t<30;t++){const n=Math.random()*Math.PI*2,i=60+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i-10,size:2+Math.random()*3,life:1,maxLife:.8+Math.random()*.7,color:["#ffe066","#ff9900","#fff"][Math.floor(Math.random()*3)],decay:.97,shape:"circle",alpha:1,gravity:40})}for(let t=0;t<12;t++){const n=-Math.PI/2+(Math.random()-.5)*Math.PI*.6,i=10+Math.random()*30;this.fxParticles.push({x:s.x+(Math.random()-.5)*10,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i,size:8+Math.random()*12,life:1,maxLife:2+Math.random()*1.5,color:"rgba(80,70,60,0.5)",decay:.99,shape:"circle",alpha:.5,gravity:-15})}this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerEditorExplosion(e){const s=document.getElementById("main-card-preview");if(!s)return;const t=document.getElementById("editor-explosion-container");t?.parentNode&&t.remove();const n=document.createElement("div");n.id="editor-explosion-container",n.className="editor-explosion-container pointer-events-none",n.style.cssText="position:absolute;inset:0;z-index:100;overflow:hidden;border-radius:8px;",s.style.position="relative",s.appendChild(n);const r={"🔥":["#ff4500","#ff6347","#ff8c00","#ffd700","#ff0000","#ff3300"],"❄️":["#00bfff","#87ceeb","#e0ffff","#add8e6","#4169e1","#00d4ff"],"⚡️":["#8b00ff","#9400d3","#ba55d3","#dda0dd","#7b68ee","#9932cc"]}[e]||["#ffffff"];for(let a=0;a<50;a++){const o=document.createElement("div"),l=3+Math.random()*10,d=Math.random()*Math.PI*2,c=30+Math.random()*120,p=Math.cos(d)*c,h=Math.sin(d)*c,m=r[Math.floor(Math.random()*r.length)],f=.5+Math.random()*.8,b=Math.random()*.15;o.style.cssText=`position:absolute;left:50%;top:50%;width:${l}px;height:${l}px;border-radius:50%;background:${m};box-shadow:0 0 ${l*1.5}px ${m};opacity:1;transform:translate(-50%,-50%);--dx:${p}px;--dy:${h}px;animation:editor-particle-explode ${f}s ease-out ${b}s forwards;`,n.appendChild(o)}setTimeout(()=>{n.parentNode&&n.remove()},2e3)}getHeroCenter(e){const s=document.querySelector(`[data-player-hero="${e}"]`);if(!s)return null;const t=s.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2}}getSpeechText(e,s){const n=s?.heroCard?.heroSpeech?.[e]?.trim()||this.heroSpeech[e]?.trim();return n||{greeting:"你好！",apology:"抱歉。",taunt:"吁，Loser！",exclamation:"Awww man！",pity:"aww...",flirt:"我喜欢你。"}[e]||""}showSpeechBubble(e,s,t){const n=`speech-bubble-player-${t}`,i=document.getElementById(n);i&&i.remove();const r=t===1,a=document.createElement("div");a.id=n,a.innerHTML=`
      <div style="position: relative; background: ${r?"#fff":"#e8f0fe"};
        border: 3px solid ${r?"#c0a080":"#6fa8dc"};
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
          border-right: 10px solid ${r?"#c0a080":"#6fa8dc"};"></div>
        <div style="position: absolute; top: 50%; left: -7px; transform: translateY(-50%);
          width: 0; height: 0;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-right: 8px solid ${r?"#fff":"#e8f0fe"};"></div>
      </div>`,a.style.cssText="position: fixed; z-index: 9999; animation: speechFadeIn 0.3s ease-out;",document.body.appendChild(a);const o=document.querySelector(`[data-player-hero="${t}"]`);if(o){const l=o.getBoundingClientRect();a.style.left=l.right+16+"px",a.style.top=l.top+l.height/2-20+"px"}else a.style.left="50%",a.style.top="50%",a.style.transform="translate(-50%, -50%)";setTimeout(()=>{a.parentNode&&(a.style.transition="opacity 0.5s ease-out",a.style.opacity="0",setTimeout(()=>{a.parentNode&&a.remove()},500))},2500)}hideSpeechMenu(){const e=document.getElementById("speech-menu-container");e&&e.style.display!=="none"&&(e.style.animation="speechMenuFadeOut 0.15s ease-in forwards",setTimeout(()=>{e.parentNode&&(e.style.display="none")},150)),this.showSpeechMenu=!1,this.clearSpeechMenuTimer()}clearSpeechMenuTimer(){this.speechMenuTimer!==null&&(clearTimeout(this.speechMenuTimer),this.speechMenuTimer=null)}updateSpeechMenuCooldownAttr(){const e=document.getElementById("speech-menu-container");e&&e.setAttribute("data-cooldown",this.speechCooldown?"true":"false")}triggerSpeech(e){if(this.speechCooldown)return;this.speechCooldown=!0,this.speechTurnSpokenTypes.add(e),this.updateSpeechMenuCooldownAttr(),setTimeout(()=>{this.speechCooldown=!1,this.updateSpeechMenuCooldownAttr()},500);const s=this.state.phase==="onlineBattle",t=this.state.phase==="robotBattle";this.state.phase;let n,i;if(s)n=this.state.players[this.onlineViewPlayerIndex],i=n?.id||1;else if(t)n=this.state.players[0],i=n?.id||1;else{const l=document.querySelector('.bottom-player-area [data-own-hero="true"]'),d=parseInt(l?.getAttribute("data-player-hero")||"1");n=this.state.players.find(c=>c.id===d),i=d}const r=this.getSpeechText(e,n),a=n?.name||"我";this.showSpeechBubble(r,a,i),this.hideSpeechMenu();const o=n?.heroCard?.heroSpeech?.voiceType||"none";if(e==="flirt"&&this.soundVolume>0&&!this.flirtAudioPlaying){const l=new Audio("/flirt_audio.wav");l.volume=this.soundVolume/100,this.flirtAudioPlaying=!0;const d=this.bgMusic&&!this.bgMusic.paused?this.bgMusic:null,c=d?this.musicVolume/100:0;if(d){const p=c/33,h=setInterval(()=>{const m=Math.max(0,d.volume-p);d.volume=m,m<=0&&(clearInterval(h),d.volume=0)},30)}l.onended=()=>{if(this.flirtAudioPlaying=!1,d){let p=0;const h=c/33,m=setInterval(()=>{p=Math.min(c,p+h),d.volume=p,p>=c&&(clearInterval(m),d.volume=c)},30)}},l.play().catch(()=>{})}else if(o==="male"&&this.soundVolume>0&&Ae.MALE_AUDIO_FILES[e]){const l=new Audio(Ae.MALE_AUDIO_FILES[e]);l.volume=this.soundVolume/100,l.play().catch(()=>{})}else if(o==="female"&&this.soundVolume>0&&Ae.FEMALE_AUDIO_FILES[e]){const l=new Audio(Ae.FEMALE_AUDIO_FILES[e]);l.volume=this.soundVolume/100,l.play().catch(()=>{})}if(s&&this.state.online.currentRoom&&fe(async()=>{const{broadcastGameAction:l}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:l}},[]).then(({broadcastGameAction:l})=>{l(this.state.online.currentRoom.id,{type:"VOICE_SPEECH",playerId:this.state.online.playerId,speechType:e}).catch(console.error)}),this.state.phase==="robotBattle"){const l=this.state.players[1]?.heroCard;setTimeout(()=>{const d=[{type:"greeting",weight:19},{type:"apology",weight:19},{type:"taunt",weight:19},{type:"exclamation",weight:19},{type:"pity",weight:19},{type:"flirt",weight:5}],c=d.reduce((y,x)=>y+x.weight,0);let p=Math.random()*c,h="greeting";for(const y of d)if(p-=y.weight,p<=0){h=y.type;break}const m={greeting:"你好！",apology:"抱歉。",taunt:"吁，Loser！",exclamation:"Awww man！",pity:"aww...",flirt:"我喜欢你。"},f=l?.heroSpeech?.[h]||m[h],b=l?.name||"Robot";this.showSpeechBubble(f,b,2);const g=l?.heroSpeech?.voiceType||"none";if(h==="flirt"&&this.soundVolume>0&&!this.flirtAudioPlaying){const y=new Audio("/flirt_audio.wav");y.volume=this.soundVolume/100,this.flirtAudioPlaying=!0;const x=this.bgMusic&&!this.bgMusic.paused?this.bgMusic:null,k=x?this.musicVolume/100:0;if(x){const u=k/33,w=setInterval(()=>{const I=Math.max(0,x.volume-u);x.volume=I,I<=0&&(clearInterval(w),x.volume=0)},30)}y.onended=()=>{if(this.flirtAudioPlaying=!1,x){let u=0;const w=k/33,I=setInterval(()=>{u=Math.min(k,u+w),x.volume=u,u>=k&&(clearInterval(I),x.volume=k)},30)}},y.play().catch(()=>{})}else if(g==="female"&&this.soundVolume>0&&Ae.FEMALE_AUDIO_FILES[h]){const y=new Audio(Ae.FEMALE_AUDIO_FILES[h]);y.volume=this.soundVolume/100,y.play().catch(()=>{})}},1e3)}}renderSpeechMenuHtml(){return`<div id="speech-menu-container" data-cooldown="${this.speechCooldown?"true":"false"}" style="display:none; position:absolute; top:0; left:0; width:140px; height:105px; z-index:50; pointer-events:none;">
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
    </div>`}renderRemoteSpeechBubble(e,s,t){const n=this.state.players.find(o=>o.id===t),a=n?.heroCard?.heroSpeech?.[s]?.trim()||this.getSpeechText(s);this.showSpeechBubble(a,n?.name||"对手",t)}triggerFireExplosionOnHero(e){this.ensureFxCanvas();const s=this.getHeroCenter(e);if(s){this.fxCanvas.width,this.fxCanvas.height;for(let t=0;t<10;t++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*20,vy:(Math.random()-.5)*20,size:16+Math.random()*22,life:1,maxLife:.8+Math.random()*.5,color:t===0?"#fffbe6":"#ffcc00",decay:.96,shape:"circle",alpha:1});for(let t=0;t<50;t++){const n=Math.random()*Math.PI*2,i=40+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i-10,size:5+Math.random()*8,life:1,maxLife:1+Math.random()*.8,color:["#ff6600","#ff3300","#ff8800","#cc2200"][Math.floor(Math.random()*4)],decay:.975,shape:"spark",alpha:1,gravity:80,trail:!0,trailLength:6,history:[]})}for(let t=0;t<30;t++){const n=Math.random()*Math.PI*2,i=60+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i-10,size:2+Math.random()*3,life:1,maxLife:.8+Math.random()*.7,color:["#ffe066","#ff9900","#fff"][Math.floor(Math.random()*3)],decay:.97,shape:"circle",alpha:1,gravity:40})}for(let t=0;t<12;t++){const n=-Math.PI/2+(Math.random()-.5)*Math.PI*.6,i=10+Math.random()*30;this.fxParticles.push({x:s.x+(Math.random()-.5)*10,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i,size:8+Math.random()*12,life:1,maxLife:2+Math.random()*1.5,color:"rgba(80,70,60,0.5)",decay:.99,shape:"circle",alpha:.5,gravity:-15})}this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerIceExplosion(e){this.ensureFxCanvas();const s=this.getMinionCenter(e);if(s){this.fxCanvas.width,this.fxCanvas.height;for(let t=0;t<8;t++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*15,vy:(Math.random()-.5)*15,size:14+Math.random()*18,life:1,maxLife:.9+Math.random()*.5,color:t===0?"#ffffff":"#a0e0ff",decay:.955,shape:"circle",alpha:1});for(let t=0;t<45;t++){const n=Math.random()*Math.PI*2,i=35+Math.random()*120;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i-5,size:3+Math.random()*7,life:1,maxLife:1+Math.random()*.8,color:["#c8e8ff","#e0f0ff","#a0d0ff","#ffffff"][Math.floor(Math.random()*4)],decay:.97,shape:"diamond",alpha:1,gravity:50})}for(let t=0;t<30;t++){const n=-Math.PI/2+(Math.random()-.5)*Math.PI*.8,i=20+Math.random()*60;this.fxParticles.push({x:s.x+(Math.random()-.5)*30,y:s.y,vx:Math.cos(n)*i+(Math.random()-.5)*30,vy:Math.sin(n)*i,size:3+Math.random()*6,life:1,maxLife:1.5+Math.random()*1,color:"rgba(220,240,255,0.9)",decay:.99,shape:"circle",alpha:.9,gravity:-10})}for(let t=0;t<12;t++){const n=-Math.PI/2+(Math.random()-.5)*Math.PI*.5,i=8+Math.random()*20;this.fxParticles.push({x:s.x+(Math.random()-.5)*8,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i,size:10+Math.random()*14,life:1,maxLife:2+Math.random()*1.5,color:"rgba(180,210,240,0.5)",decay:.985,shape:"circle",alpha:.5,gravity:-20})}this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerIceExplosionOnHero(e){this.ensureFxCanvas();const s=this.getHeroCenter(e);if(s){for(let t=0;t<8;t++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*15,vy:(Math.random()-.5)*15,size:14+Math.random()*18,life:1,maxLife:.9+Math.random()*.5,color:t===0?"#ffffff":"#a0e0ff",decay:.955,shape:"circle",alpha:1});for(let t=0;t<45;t++){const n=Math.random()*Math.PI*2,i=35+Math.random()*120;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i-5,size:3+Math.random()*7,life:1,maxLife:1+Math.random()*.8,color:["#c8e8ff","#e0f0ff","#a0d0ff","#ffffff"][Math.floor(Math.random()*4)],decay:.97,shape:"diamond",alpha:1,gravity:50})}for(let t=0;t<30;t++){const n=-Math.PI/2+(Math.random()-.5)*Math.PI*.8,i=20+Math.random()*60;this.fxParticles.push({x:s.x+(Math.random()-.5)*30,y:s.y,vx:Math.cos(n)*i+(Math.random()-.5)*30,vy:Math.sin(n)*i,size:3+Math.random()*6,life:1,maxLife:1.5+Math.random()*1,color:"rgba(220,240,255,0.9)",decay:.99,shape:"circle",alpha:.9,gravity:-10})}for(let t=0;t<12;t++){const n=-Math.PI/2+(Math.random()-.5)*Math.PI*.5,i=8+Math.random()*20;this.fxParticles.push({x:s.x+(Math.random()-.5)*8,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i,size:10+Math.random()*14,life:1,maxLife:2+Math.random()*1.5,color:"rgba(180,210,240,0.5)",decay:.985,shape:"circle",alpha:.5,gravity:-20})}this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerLightningExplosion(e){this.ensureFxCanvas();const s=this.getMinionCenter(e);if(s){this.fxCanvas.width,this.fxCanvas.height;for(let t=0;t<8;t++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,size:18+Math.random()*24,life:1,maxLife:.7+Math.random()*.4,color:t===0?"#ffffff":["#7AB8B8","#90D0D0","#B0E0E0"][Math.floor(Math.random()*3)],decay:.95,shape:"circle",alpha:1});for(let t=0;t<40;t++){const n=Math.random()*Math.PI*2,i=30+Math.random()*100;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i+(Math.random()-.5)*30,size:4+Math.random()*10,life:1,maxLife:.8+Math.random()*.6,color:["#7AB8B8","#90D0D0","#B0E0E0","#C8E8E8","#D8F0F0"][Math.floor(Math.random()*5)],decay:.96,shape:"zigzag",alpha:1,gravity:20,trail:!0,trailLength:8,history:[]})}for(let t=0;t<25;t++){const n=Math.random()*Math.PI*2,i=50+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i,size:2+Math.random()*4,life:1,maxLife:.6+Math.random()*.5,color:["#90D0D0","#B8E8E8","#ffffff","#D8F0F0"][Math.floor(Math.random()*4)],decay:.955,shape:"circle",alpha:1,gravity:0})}for(let t=0;t<10;t++)this.fxParticles.push({x:s.x+(Math.random()-.5)*6,y:s.y+(Math.random()-.5)*6,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,size:8+Math.random()*12,life:1,maxLife:1.2+Math.random()*.8,color:"rgba(120,200,200,0.4)",decay:.98,shape:"circle",alpha:.4,gravity:0});this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerLightningExplosionOnHero(e){this.ensureFxCanvas();const s=this.getHeroCenter(e);if(s){for(let t=0;t<8;t++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,size:18+Math.random()*24,life:1,maxLife:.7+Math.random()*.4,color:t===0?"#ffffff":["#7AB8B8","#90D0D0","#B0E0E0"][Math.floor(Math.random()*3)],decay:.95,shape:"circle",alpha:1});for(let t=0;t<40;t++){const n=Math.random()*Math.PI*2,i=30+Math.random()*100;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i+(Math.random()-.5)*30,size:4+Math.random()*10,life:1,maxLife:.8+Math.random()*.6,color:["#7AB8B8","#90D0D0","#B0E0E0","#C8E8E8","#D8F0F0"][Math.floor(Math.random()*5)],decay:.96,shape:"zigzag",alpha:1,gravity:20,trail:!0,trailLength:8,history:[]})}for(let t=0;t<25;t++){const n=Math.random()*Math.PI*2,i=50+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(n)*i,vy:Math.sin(n)*i,size:2+Math.random()*4,life:1,maxLife:.6+Math.random()*.5,color:["#90D0D0","#B8E8E8","#ffffff","#D8F0F0"][Math.floor(Math.random()*4)],decay:.955,shape:"circle",alpha:1,gravity:0})}for(let t=0;t<10;t++)this.fxParticles.push({x:s.x+(Math.random()-.5)*6,y:s.y+(Math.random()-.5)*6,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,size:8+Math.random()*12,life:1,maxLife:1.2+Math.random()*.8,color:"rgba(120,200,200,0.4)",decay:.98,shape:"circle",alpha:.4,gravity:0});this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}processPendingVisualEffects(){const e=this.state.pendingVisualEffects||[];if(e.length!==0){for(const s of e)s.type==="fire_explosion"?s.targetType==="hero"?this.triggerFireExplosionOnHero(s.targetPlayerId):this.triggerFireExplosion(s.targetMinionId):s.type==="ice_explosion"?s.targetType==="hero"?this.triggerIceExplosionOnHero(s.targetPlayerId):this.triggerIceExplosion(s.targetMinionId):s.type==="lightning_explosion"&&(s.targetType==="hero"?this.triggerLightningExplosionOnHero(s.targetPlayerId):this.triggerLightningExplosion(s.targetMinionId));this.state={...this.state,pendingVisualEffects:[]}}}savePotentialDeathMinions(e,s){this.state.players.forEach(t=>{t.board.forEach(n=>{if(!this.deathAnimationQueue.find(r=>r.id===n.id)){const r=document.querySelector(`[data-minion-id="${n.id}"]`);let a=0,o=0,l=t.id;if(r){const d=r.getBoundingClientRect();a=d.left,o=d.top,l=parseInt(r.dataset.playerId||"0")}this.deathAnimationQueue.push({id:n.id,name:n.name,attack:n.attack,health:n.health,x:a,y:o,playerId:l})}})}),document.querySelectorAll(".minion-card").forEach(t=>{const n=t,i=parseInt(n.dataset.minionId||"0"),r=parseInt(n.dataset.playerId||"0"),a=n.getBoundingClientRect(),o=this.deathAnimationQueue.find(l=>l.id===i);o&&(o.x=a.left,o.y=a.top,o.playerId=r)})}async renderGameOver(){const e=this.state.winner;if(!e){console.error("[动画] renderGameOver: winner 为 null，无法渲染游戏结束界面"),this.state=ie(this.state,{type:"BACK_TO_MENU"}),this.render();return}const s=e===1?1:0,t=this.state.players[s],n=this.state.players[e-1];console.log("[动画] 渲染本机游戏结束界面"),console.log("[动画] winner (索引):",e,"(对应 players["+(e-1)+"])"),console.log("[动画] winner 名字:",n.name,"生命值:",n.health),console.log("[动画] loserIndex:",s,"loser 名字:",t.name,"生命值:",t.health);const i=`
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
    `;await this.applyGrayscaleTransition(i);const r=document.getElementById("game-over-overlay");r&&r.addEventListener("click",()=>{this.stopThumbsDownEmojis(),this.state=ie(this.state,{type:"BACK_TO_MENU"}),this.render()}),this.spawnThumbsDownEmojis()}robotThreatScore(e){let s=e.attack*1.5;s+=e.health/Math.max(e.maxHealth,1)*2,e.keywords.some(n=>n.name==="连击")&&(s+=5),e.keywords.some(n=>n.name==="狂怒")&&(s+=5),e.divineShieldActive&&(s+=8),e.keywords.some(n=>n.name==="元素")&&(s+=3),e.keywords.some(n=>n.name==="先攻")&&(s+=3),e.isDefending&&(s+=2);const t=e.armorValue||0;return s+=t*.5,s}robotValueScore(e){let s=e.attack*1.2+e.health*.8;return e.keywords.some(t=>t.name==="连击")&&(s+=5),e.keywords.some(t=>t.name==="狂怒")&&(s+=5),e.keywords.some(t=>t.name==="先攻")&&(s+=3),e.keywords.some(t=>t.name==="机动")&&(s+=3),e.divineShieldActive&&(s+=4),e.keywords.some(t=>t.name==="元素")&&(s+=2),e.keywords.some(t=>t.name==="嘲讽")&&(s+=2),s}robotScoreCardForPlay(e,s,t,n){if(e.legacyEffect==="gain_energy")return 0;if(e.type==="minion"){let i=e.attack*1.5+e.health*1-e.cost*.5;return e.keywords?.some(r=>r.name==="连击")&&(i+=5),e.keywords?.some(r=>r.name==="狂怒")&&(i+=5),e.keywords?.some(r=>r.name==="圣盾")&&(i+=4),e.keywords?.some(r=>r.name==="先攻")&&(i+=3),e.keywords?.some(r=>r.name==="机动")&&(i+=3),e.keywords?.some(r=>r.name==="元素")&&(i+=2),e.keywords?.some(r=>r.name==="嘲讽")&&(i+=2),s.length<3&&(i+=3),t.length>=s.length+2&&(i+=4),i}if(e.type==="spell"){let i=0;const r=e.effects||[];for(const a of r)switch(a.effect){case"造成伤害":{i+=a.value*1;for(const o of t)a.value>=o.health&&(i+=this.robotThreatScore(o)*1.2);break}case"治愈":{i+=a.value*.5,s.filter(l=>l.health<=l.maxHealth*.4).length>0&&(i+=8);break}case"抽牌":{i+=a.value*3,n<=2&&(i+=15);break}case"属性变化":{if(a.isPositive)i+=(a.attackValue||0)*.8+(a.healthValue||0)*.6,s.some(o=>o.attack>=4)&&(i+=5);else{i+=(a.attackValue||0)*1+(a.healthValue||0)*.8;for(const o of t)a.attackValue&&o.attack<=-a.attackValue&&(i+=5),a.healthValue&&o.health<=-a.healthValue&&(i+=5)}break}case"给予印记":{i+=a.value*1;break}case"获得能量":{i+=a.value*2;break}case"召唤":{i+=a.value*4;break}case"给予词条":{a.grantedKeywordName==="嘲讽"||a.grantedKeywordName==="圣盾"?i+=6:i+=4;break}default:i+=2;break}return i}return 0}robotSelectBuffTarget(e,s){if(s.length===0)return 0;let t=-1,n=0;for(const i of s){let r=this.robotValueScore(i);if(e.effect==="治愈"){const a=i.maxHealth-i.health;r+=a*1.5,i.health<=2&&(r+=10)}e.effect==="属性变化"&&((e.attackValue||0)>0&&(r+=i.attack*.5),(e.healthValue||0)>0&&i.health<=3&&(r+=8)),e.effect==="给予词条"&&i.health<=3&&i.attack>=3&&(r+=6),i.canAttack&&!i.hasAttacked&&(r+=3),r>t&&(t=r,n=i.id)}return n}robotSelectDebuffTarget(e,s){if(s.length===0)return 0;let t=-1,n=0;for(const i of s){let r=this.robotThreatScore(i);const a=e.value||0;if(a>0&&a>=i.health&&i.health>0&&(r+=20,a-i.health<=2&&(r+=5)),i.divineShieldActive&&a>0&&(r+=5),e.effect==="属性变化"){const o=Math.abs(e.attackValue||0);o>0&&i.attack>0&&(r+=Math.min(i.attack,o)*1.5)}r>t&&(t=r,n=i.id)}return n}robotScoreAttackTarget(e,s,t){let n=0;const i=Math.max(0,e.attack-(s.armorValue||0)),r=i>=s.health,a=e.keywords.some(c=>c.name==="先攻"),o=e.attack*1.5+e.health*.5;if(r){const c=i-s.health,p=Math.max(0,10-c*2);n+=10+p}const l=Math.min(e.health,s.attack);if(a||(l>=e.health&&r?n-=o*.6:l>=e.health?n-=o:l<=0?n+=5:n-=l*.3),a?n+=this.robotThreatScore(s)*.5:n+=this.robotThreatScore(s),s.divineShieldActive&&(e.attack<=3?n+=10:n-=5),e.divineShieldActive&&s.attack>0&&(n+=s.attack*.2),!a&&s.keywords.some(c=>c.name==="先攻")&&s.attack>=e.health&&(n-=15),(s.armorValue||0)>0)if(i<=0)n-=30;else if(i<s.health){const c=i/s.health;n-=8*(1-c)}else n-=3;return r&&e.keywords.some(c=>["狂怒","连击"].includes(c.name))&&(n+=8),s.elementStatus&&e.attack>0&&(n+=4),s.isDefending&&(n+=2),t==="AGGRESSIVE"&&(n-=25),t==="CONTROL"&&s.attack>=3&&(n+=5),n}robotShouldUseCoin(e,s){const t=e.players[1],n=t.energy,i=t.hand;if(!i.some(a=>a.legacyEffect==="gain_energy"))return!1;if(n<s.cost&&n+1>=s.cost){const a=this.robotScoreCardForPlay(s,t.board,e.players[0].board,i.length);return(s.effects?.some(p=>(p.targets||[]).some(m=>["选择目标","选择随从"].includes(m)))?s.effects?.some(p=>p.targets?.includes("自己"))?t.board.length>0:s.effects?.some(p=>p.targets?.includes("选择目标")||p.targets?.includes("选择随从"))?e.players[0].board.length>0:!0:!0)?a>=5?!0:n<=2&&i.some(l=>l.cost>=5&&l!==s)||a<5&&!i.filter(c=>c!==s&&c!==i.find(p=>p.legacyEffect==="gain_energy")).some(c=>c.cost<=n+1)?!1:a>=3:!1}return!1}async robotUseHeroSkill(){const e=this.state.players[1],s=e.heroCard;if(!s?.skills?.length||e.energy<1)return;const t=0,n=s.skills[t];if(!n||e.heroSkillUsed?.[t]||(n.remainingCooldown??0)>0)return;const i=this.state.players[1].board;if(i.length===0)return;let r=-1,a=0;for(const o of i){let l=0;o.canAttack&&!o.hasAttacked&&(l+=o.attack*.8),o.health<=2&&(l+=this.robotValueScore(o)>=4?15:5),o.keywords.some(d=>d.name==="连击")&&(l+=4),o.keywords.some(d=>d.name==="狂怒")&&(l+=4),o.keywords.some(d=>d.name==="先攻")&&(l+=3),o.divineShieldActive&&(l+=2),o.isDefending&&(l+=2),o.health<=o.maxHealth*.5&&(l+=3);for(const d of this.state.players[0].board)o.attack+1>=d.health&&o.attack<d.health&&(l+=this.robotThreatScore(d)*1.2);l>r&&(r=l,a=o.id)}r<3||(this.state=ie(this.state,{type:"PLAY_HERO_SKILL",playerId:2,skillIndex:t,targetPlayerId:2,targetCardId:a}),this.render(),await new Promise(o=>setTimeout(o,1200)))}async robotSpeak(e,s=1){if(this.speechCooldown||this.speechTurnSpokenTypes.has(e)||Math.random()>s)return;const t=this.state.players.find(r=>r.id===2);if(!t)return;const n=this.getSpeechText(e,t);if(!n)return;if(this.speechCooldown=!0,this.updateSpeechMenuCooldownAttr(),await new Promise(r=>setTimeout(r,500)),this.showSpeechBubble(n,t.name||"Robot",2),(t.heroCard?.heroSpeech?.voiceType||"none")==="female"&&this.soundVolume>0&&Ae.FEMALE_AUDIO_FILES[e]){const r=new Audio(Ae.FEMALE_AUDIO_FILES[e]);r.volume=this.soundVolume/100,r.play().catch(()=>{})}this.speechCooldown=!0,this.updateSpeechMenuCooldownAttr(),setTimeout(()=>{this.speechCooldown=!1,this.updateSpeechMenuCooldownAttr()},3e3)}robotCheckPlayerTurnReaction(){if(this.state.phase!=="robotBattle"||this.state.currentPlayerId!==1)return;const e=this.state.turnNumber,s=this.state.players[1].board,t=new Set(s.map(r=>r.id)),n=this.state.players[0];if(e!==this.speechLastTurnCheck){this.speechLastTurnCheck=e,this.speechLastRobotBoardSize=s.length,this.speechLastRobotBoardIds=t,this.speechLastRobotHealth=this.state.players[1].health,this.speechLastRobotTotalHealth=s.reduce((r,a)=>r+a.health,0),this.speechLastHandSize=n.hand.length,this.speechLastPlayerEnergy=n.energy,this.speechTurnSpokenTypes.clear();return}n.hand.length<this.speechLastHandSize&&n.energy<this.speechLastPlayerEnergy&&this.robotSpeak("exclamation",.3);const i=s.reduce((r,a)=>r+a.health,0);i>this.speechLastRobotTotalHealth&&t.size===this.speechLastRobotBoardIds.size&&n.hand.length!==this.speechLastHandSize&&this.robotSpeak("flirt",.2);for(const r of this.speechLastRobotBoardIds)if(!t.has(r)){this.robotSpeak("taunt",.5);break}this.speechLastHandSize=n.hand.length,this.speechLastPlayerEnergy=n.energy,this.speechLastRobotBoardSize=s.length,this.speechLastRobotBoardIds=t,this.speechLastRobotHealth=this.state.players[1].health,this.speechLastRobotTotalHealth=i}async executeRobotTurn(){if(!this.robotTurnExecuting){if(this.robotTurnExecuting=!0,this.state.phase!=="robotBattle"||this.state.currentPlayerId!==2){this.robotTurnExecuting=!1;return}if(this.state.players[0].health<=0||this.state.players[1].health<=0){this.robotTurnExecuting=!1;return}this.speechTurnSpokenTypes.clear(),await this.robotUseHeroSkill(),await this.robotPlayPhase(),await this.robotAttackPhase(),await this.robotDefensePhase(),this.state.turnNumber===1&&(await this.robotSpeak("greeting",1),await new Promise(e=>setTimeout(e,800))),this.state.currentPlayerId===2&&(this.state=ie(this.state,{type:"END_ROBOT_TURN"}),this.selectedMinion=null,this.render()),this.robotTurnExecuting=!1}}async robotPlayPhase(){let e=this.state.players[1],s=this.state.players[0];const t=e.hand.find(r=>r.legacyEffect==="gain_energy"),i=e.hand.filter(r=>r!==t).map(r=>({card:r,score:this.robotScoreCardForPlay(r,e.board,s.board,e.hand.length)})).sort((r,a)=>a.score-r.score);for(const{card:r}of i){if(this.state.currentPlayerId!==2)break;if(e=this.state.players[1],s=this.state.players[0],e.energy<r.cost)if(t&&this.robotShouldUseCoin(this.state,r)){if(this.playWoodSound(),this.state=ie(this.state,{type:"PLAY_CARD",playerId:2,cardId:t.id}),this.render(),await new Promise(l=>setTimeout(l,1200)),e=this.state.players[1],e.energy<r.cost)continue}else continue;const o=r.effects?.some(l=>(l.targets||[]).some(c=>["选择目标","选择随从","自己"].includes(c)));if(o?await this.robotPlayCardWithTarget(r):(this.playWoodSound(),this.state=ie(this.state,{type:"PLAY_CARD",playerId:2,cardId:r.id})),this.render(),await new Promise(l=>setTimeout(l,1500)),r.cost>=6&&await this.robotSpeak("exclamation",.5),r.type==="minion"&&!o){const l=r.effects?.find(d=>{const c=d.targets||[];return this.momentsInclude(d.moment,"打出时")&&c.some(p=>["选择目标","选择随从","自己"].includes(p))});l&&await this.robotExecuteMinionEffect(r,l)}}if(t&&this.state.currentPlayerId===2&&(e=this.state.players[1],e.hand.some(a=>a.id===t.id))){const a=e.energy;!e.hand.some(l=>l.id!==t.id&&l.cost<=a)&&a<=1&&(this.playWoodSound(),this.state=ie(this.state,{type:"PLAY_CARD",playerId:2,cardId:t.id}),this.render(),await new Promise(l=>setTimeout(l,1200)))}}async robotPlayCardWithTarget(e){const s=e.effects?.find(l=>(l.targets||[]).some(c=>["选择目标","选择随从","自己"].includes(c)));if(!s)return;const n=(s.targets||[]).find(l=>["选择目标","选择随从","自己"].includes(l)),i=this.state.players[1],r=this.state.players[0];let a=1,o=0;n==="自己"?(a=2,o=0):n==="选择随从"?s.effect==="治愈"||s.effect==="给予印记"||s.effect==="属性变化"&&s.isPositive!==!1||s.effect==="给予词条"?(a=2,o=i.board.length>0?this.robotSelectBuffTarget(s,i.board):0):(a=1,o=r.board.length>0?this.robotSelectDebuffTarget(s,r.board):0):(a=1,r.board.length>0?o=this.robotSelectDebuffTarget(s,r.board)||0:o=0),this.playWoodSound(),this.state=ie(this.state,{type:"PLAY_CARD_WITH_TARGET",playerId:2,cardId:e.id,targetPlayerId:a,targetCardId:o})}async robotExecuteMinionEffect(e,s){const n=(s.targets||[]).find(l=>["选择目标","选择随从","自己"].includes(l)),i=this.state.players[1],r=this.state.players[0];let a=1,o=0;n==="自己"?(a=2,o=0):n==="选择随从"?s.effect==="治愈"||s.effect==="给予印记"||s.effect==="属性变化"&&s.isPositive!==!1||s.effect==="给予词条"?(a=2,o=i.board.length>0?this.robotSelectBuffTarget(s,i.board):0):(a=1,o=r.board.length>0?this.robotSelectDebuffTarget(s,r.board):0):(a=1,o=0),this.state=ie(this.state,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:2,cardId:e.id,targetPlayerId:a,targetCardId:o}),this.render(),await new Promise(l=>setTimeout(l,1500))}async robotAttackPhase(){let e="TEMPO";const s=this.state.players[1],t=this.state.players[0],n=s.health,i=t.health,r=s.board,a=t.board;r.reduce((p,h)=>p+(h.canAttack&&!h.hasAttacked?h.attack:0),0)>=i?e="AGGRESSIVE":r.length<=a.length+1?e="CONTROL":(n<15||a.reduce((p,h)=>p+h.attack,0)>n/3)&&(e="DEFENSIVE");const l=p=>p.keywords.some(h=>h.name==="先攻")?0:p.attack<=3?1:2;let d=0;const c=20;for(;this.state.currentPlayerId===2&&d<c;){d++;const p=this.state.players[1].board,h=this.state.players[0].board,m=p.filter(y=>y.canAttack&&!y.hasAttacked&&y.attack>0).sort((y,x)=>l(y)-l(x));if(m.length===0||this.state.players[0].health<=0)break;const f=m[0];if(this.state.players[0].health<=0)break;const b=h.filter(y=>y.isDefending||y.keywords.some(x=>x.name==="嘲讽")),g=b.length>0?b:h;if(f.canAttackMinions){if(g.length>0){let y=-999,x=null;for(const k of g){const u=this.robotScoreAttackTarget(f,k,e);u>y&&(y=u,x=k)}if(x&&y>0){if(this.playWoodSound(),this.state=ie(this.state,{type:"ATTACK",attackerPlayerId:2,attackerCardId:f.id,targetPlayerId:1,targetCardId:x.id}),this.render(),await new Promise(k=>setTimeout(k,1500)),this.state.players[0].health<=0)break;x&&this.robotThreatScore(x)>=8&&(Math.random()<.6?await this.robotSpeak("taunt",1):await this.robotSpeak("apology",1));continue}}}if(f.canAttackHeroes){if(f.attack<=2&&f.health>=3&&g.length>0&&g.every(y=>this.robotScoreAttackTarget(f,y,e)<=0))continue;if(this.playWoodSound(),this.state=ie(this.state,{type:"ATTACK_HERO",attackerPlayerId:2,attackerCardId:f.id,targetPlayerId:1}),this.render(),await new Promise(y=>setTimeout(y,1500)),this.state.players[0].health<=0)break}}}async robotDefensePhase(){const e=this.state.players[1],t=this.state.players[0].board,n=e.health,i=t.length>0?Math.max(...t.map(o=>o.attack)):0,r=t.reduce((o,l)=>o+l.attack,0),a=e.board.filter(o=>!(o.isDefending||o.keywords.some(l=>["连击","狂怒"].includes(l.name))||o.hasAttacked||o.attack<=0));for(const o of a){if(this.state.currentPlayerId!==2)break;const l=o.keywords.some(h=>h.name==="机动"),d=o.keywords.some(h=>h.name==="不动"),c=this.robotValueScore(o);let p=!1;o.health>=o.attack*3+2&&o.health>=5||l?p=!0:d||(n<15&&c>=5||o.attack>=4&&o.health>=3||t.length>=3&&r>=8&&c>=4||o.health<=i&&c>=4||n<=10&&o.health>=3||t.filter(h=>h.attack>0).length>=2&&c>=5)&&(p=!0),p&&(this.state=ie(this.state,{type:"TOGGLE_DEFENSE",playerId:2,cardId:o.id}),this.render(),await new Promise(h=>setTimeout(h,800)))}if(t.length<=1&&r<=3&&n>20)for(const o of e.board.filter(l=>l.isDefending)){if(this.state.currentPlayerId!==2)break;this.state=ie(this.state,{type:"TOGGLE_DEFENSE",playerId:2,cardId:o.id}),this.render(),await new Promise(l=>setTimeout(l,600))}}async renderRobotGameOver(){const e=this.state.winner;if(!e){this.state=ie(this.state,{type:"BACK_TO_MENU"}),this.render();return}const s=e===1?1:0,t=this.state.players[s];this.state.players[e-1];const n=e===1,i=`
      <div id="game-over-overlay" class="fixed inset-0 flex flex-col items-center justify-center" style="background: #000;">
        <div id="thumbs-down-layer" style="position: absolute; inset: 0; pointer-events: none; overflow: hidden;"></div>
        <div class="text-center" style="position: relative; z-index: 2;">
          <h1 class="text-8xl font-bold mb-8" style="color: ${n?"#00ff00":"#ff0000"}; font-family: 'Georgia', serif; text-shadow: 0 0 20px rgba(${n?"0, 255, 0":"255, 0, 0"}, 0.5);">
            ${n?"Victory!":"Defeat!"}
          </h1>
          <p class="text-4xl font-bold mb-4" style="color: #fff; font-family: 'Georgia', serif;">
            ${n?"你击败了 Robot!":"Robot 击败了你!"}
          </p>
          <p class="text-2xl mb-12" style="color: #aaa;">
            ${t.name} 被击败了
          </p>
          <p class="text-sm mt-12" style="color: #666; cursor: default;">- 点击屏幕返回主菜单 -</p>
        </div>
      </div>
    `;await this.applyGrayscaleTransition(i);const r=document.getElementById("game-over-overlay");r&&r.addEventListener("click",()=>{this.stopThumbsDownEmojis(),this.state=ie(this.state,{type:"BACK_TO_MENU"}),this.render()}),this.spawnThumbsDownEmojis()}spawnThumbsDownEmojis(){if(!this.thumbsDownAnimCssInjected){const s=document.createElement("style");s.textContent=`
        @keyframes thumbsDownAnim {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(var(--start-s)); }
          25% { opacity: 1; transform: translate(-50%, -50%) scale(var(--end-s)); }
          60% { opacity: 1; transform: translate(-50%, -50%) scale(var(--end-s)); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.05); }
        }
      `,document.head.appendChild(s),this.thumbsDownAnimCssInjected=!0}this.thumbsDownIntervalId!==null&&clearInterval(this.thumbsDownIntervalId);const e=150+Math.random()*100;this.thumbsDownIntervalId=window.setInterval(()=>{const s=document.createElement("div");s.textContent="👎";const t=36+Math.random()*44,n=.25+Math.random()*.3,i=1+Math.random()*.6,r=2e3+Math.random()*600;s.style.cssText=`
        position: fixed;
        left: ${5+Math.random()*90}%;
        top: ${5+Math.random()*90}%;
        font-size: ${t}px;
        line-height: 1;
        pointer-events: none;
        --start-s: ${n};
        --end-s: ${i};
        animation: thumbsDownAnim ${r}ms ease-in-out 0ms forwards;
      `;const a=document.getElementById("thumbs-down-layer");a?a.appendChild(s):document.body.appendChild(s),setTimeout(()=>s.remove(),r+50)},e)}stopThumbsDownEmojis(){this.thumbsDownIntervalId!==null&&(clearInterval(this.thumbsDownIntervalId),this.thumbsDownIntervalId=null)}applyGrayscaleTransition(e){return new Promise(s=>{const t=document.body.style.overflow,n=document.documentElement.style.overflow;document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",this.switchBGM("/sounds/boooh.mp3");const i=document.createElement("div");i.style.cssText=`
        position: fixed; inset: 0; z-index: 9997;
        pointer-events: none;
        background: transparent;
        backdrop-filter: grayscale(0) brightness(1);
        -webkit-backdrop-filter: grayscale(0) brightness(1);
        transition: none;
      `,document.body.appendChild(i),requestAnimationFrame(()=>{i.style.transition="backdrop-filter 3s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 3s cubic-bezier(0.4, 0, 0.2, 1)",i.style.backdropFilter="grayscale(1) brightness(1)",i.style.webkitBackdropFilter="grayscale(1) brightness(1)"});let r=null;setTimeout(()=>{const a=document.createElement("div");a.innerHTML=e,r=a.firstElementChild,r&&(r.style.opacity="0",r.style.transition="opacity 3s cubic-bezier(0.4, 0, 0.2, 1)",r.style.zIndex="9999",document.body.appendChild(r),r.offsetHeight,r.style.opacity="1")},2e3),setTimeout(()=>{i.remove(),r&&(this.app.innerHTML="",this.app.appendChild(r)),document.body.style.overflow=t,document.documentElement.style.overflow=n,s()},5e3)})}screenShake(e){return new Promise(s=>{s()})}attackAnimation(e,s,t,n=!1){return new Promise(i=>{this.state.phase;const r=n?`.top-board [data-minion-id="${e}"]`:`.bottom-board [data-minion-id="${e}"]`;console.log("attackAnimation - 攻击者ID:",e,"isOpponent:",n,"选择器:",r);const a=document.querySelector(r);if(!a){console.log("attackAnimation - 找不到攻击者元素:",e,"isOpponent:",n);const l=document.querySelectorAll(".minion-card");console.log("当前所有随从:",Array.from(l).map(d=>({id:d.dataset.minionId,classList:d.className}))),i();return}const o=n?80:s?-100:-80;console.log("attackAnimation - 找到攻击者，执行动画，移动:",o),a.style.transition="transform 0.15s ease-out",a.style.transform=`translateY(${o}px) scale(1.1)`,a.style.zIndex="100",setTimeout(()=>{a.style.transition="transform 0.15s ease-in",a.style.transform="",setTimeout(()=>{a.style.zIndex="",this.screenShake(t).then(i)},150)},150)})}async tryPlayCard(e){if(this.state.players[this.state.currentPlayerId-1].energy<e.cost)return;const n=(e.effects||(e.effect?[e.effect]:[])).filter(i=>this.momentsInclude(i.moment,"打出时"));for(const i of n){if(!i.effect)continue;const r=i.targets||[];if(console.log("[tryPlayCard] 检查卡牌:",e.name,"effect:",i.effect,"targets:",r,"type:",e.type),r.includes("选择目标")||r.includes("选择随从")){if(console.log("[tryPlayCard] 需要选择目标，card.type:",e.type),e.type==="spell"){console.log("[tryPlayCard] 法术卡进入目标选择模式"),this.selectingTargetForCard=e,this.selectingTargetEffect=i,this.selectingTargetMinionId=null,this.targetArrowColor="#9b59b6",this.selectedHandCard=null,this.render(),setTimeout(()=>{const l=document.querySelector(".bottom-player-area [data-player-hp]");if(console.log("[tryPlayCard] 寻找英雄元素:",l),l){const d=l.getBoundingClientRect();this.targetArrowStartX=d.left+d.width/2,this.targetArrowStartY=d.top+d.height/2,console.log("[tryPlayCard] 英雄位置:",this.targetArrowStartX,this.targetArrowStartY)}else this.targetArrowStartX=window.innerWidth/2,this.targetArrowStartY=window.innerHeight-100,console.log("[tryPlayCard] 使用备用位置:",this.targetArrowStartX,this.targetArrowStartY);this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,"purple")},50);return}this.playWoodSound(),this.state=ie(this.state,{type:"PLAY_CARD",playerId:this.state.currentPlayerId,cardId:e.id});const a=this.state.players[this.state.currentPlayerId-1].board,o=a[a.length-1];this.selectingTargetForCard=e,this.selectingTargetEffect=i,this.selectingTargetMinionId=o?o.id:null,this.targetArrowColor="#4a90d9",this.selectedHandCard=null,this.render(),setTimeout(()=>{if(this.selectingTargetMinionId){const l=document.querySelector(`[data-minion-id="${this.selectingTargetMinionId}"]`);if(l){const d=l.getBoundingClientRect();this.targetArrowStartX=d.left+d.width/2,this.targetArrowStartY=d.top+d.height/2,this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,"blue")}}},50);return}}this.playCardDirectly(e)}async playCardDirectly(e){e.type==="minion"&&this.playWoodSound();const t=(e.effects||(e.effect?[e.effect]:[])).filter(n=>n.moment==="打出时"&&n.effect==="抽牌"&&(n.targets||[]).includes("无需目标"));if(this.state=ie(this.state,{type:"PLAY_CARD",playerId:this.state.currentPlayerId,cardId:e.id}),this.selectedHandCard=null,this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.render(),this.state.phase==="onlineBattle"){const n=this.state.online.currentRoom;if(n){const{broadcastGameAction:i}=await fe(async()=>{const{broadcastGameAction:r}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:r}},[]);i(n.id,{type:"PLAY_CARD",playerId:this.state.online.playerId,cardId:e.id}).catch(console.error),await this.broadcastGameState()}}t.length>0&&t.reduce((i,r)=>i+(r.value||1),0)>0&&setTimeout(()=>this.playDrawCardAnimation(),100)}async executeCardWithTarget(e,s,t,n){if(console.log("[executeCardWithTarget] 开始执行:",e.name,"effect:",s,"targetPlayerId:",t,"targetMinionId:",n),this.hideTargetArrow(),this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null,e.type==="spell"?this.state=ie(this.state,{type:"PLAY_CARD_WITH_TARGET",playerId:this.state.currentPlayerId,cardId:e.id,targetPlayerId:t,targetCardId:n}):this.state=ie(this.state,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:this.state.currentPlayerId,cardId:e.id,targetPlayerId:t,targetCardId:n}),this.render(),this.state.phase==="onlineBattle"){const r=this.state.online.currentRoom;if(r){const{broadcastGameAction:a}=await fe(async()=>{const{broadcastGameAction:o}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:o}},[]);a(r.id,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:this.state.online.playerId,cardId:e.id,targetPlayerId:t,targetCardId:n}).catch(console.error),await this.broadcastGameState()}}}async executeCardEffectOnHero(e,s,t){if(console.log("[executeCardEffectOnHero] 开始执行:",e.name,"effect:",s,"targetPlayerId:",t),this.hideTargetArrow(),this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null,e.type==="spell"?this.state=ie(this.state,{type:"PLAY_CARD_WITH_TARGET",playerId:this.state.currentPlayerId,cardId:e.id,targetPlayerId:t}):this.state=ie(this.state,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:this.state.currentPlayerId,cardId:e.id,targetPlayerId:t}),this.render(),this.state.phase==="onlineBattle"){const i=this.state.online.currentRoom;if(i){const{broadcastGameAction:r}=await fe(async()=>{const{broadcastGameAction:a}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:a}},[]);r(i.id,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:this.state.online.playerId,cardId:e.id,targetPlayerId:t}).catch(console.error),await this.broadcastGameState()}}}async executeHeroSkillWithTarget(e,s,t){this.hideTargetArrow(),this.selectingTargetForSkill=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null;const n=this.state.currentPlayerId;if(this.state=ie(this.state,{type:"PLAY_HERO_SKILL",playerId:n,skillIndex:e,targetPlayerId:s,targetCardId:t}),this.render(),this.state.phase==="onlineBattle"){const r=this.state.online.currentRoom;if(r){const{broadcastGameAction:a}=await fe(async()=>{const{broadcastGameAction:o}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:o}},[]);a(r.id,{type:"HERO_SKILL",playerId:this.state.online.playerId,skillIndex:e,targetPlayerId:s,targetCardId:t}).catch(console.error),await this.broadcastGameState()}}}async executeHeroSkillOnHero(e,s){this.hideTargetArrow(),this.selectingTargetForSkill=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null;const t=this.state.currentPlayerId;if(this.state=ie(this.state,{type:"PLAY_HERO_SKILL",playerId:t,skillIndex:e,targetPlayerId:s}),this.render(),this.state.phase==="onlineBattle"){const i=this.state.online.currentRoom;if(i){const{broadcastGameAction:r}=await fe(async()=>{const{broadcastGameAction:a}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:a}},[]);r(i.id,{type:"HERO_SKILL",playerId:this.state.online.playerId,skillIndex:e,targetPlayerId:s}).catch(console.error),await this.broadcastGameState()}}}async allAttackHero(){if(this.isAttacking)return;this.isAttacking=!0;const e=this.state.players[this.state.currentPlayerId-1],s=this.state.currentPlayerId===1?2:1,n=this.state.players[s-1].board.some(r=>r.isDefending||r.keywords.some(a=>a.name==="嘲讽")),i=e.board.filter(r=>{if(!r.canAttack||!r.canAttackHeroes||r.attack<=0||r.isDefending)return!1;const a=r.maxAttacksPerTurn||1;return!((r.attacksThisTurn||0)>=a)});if(i.length===0||n){this.isAttacking=!1;return}for(const r of i){const o=(r.maxAttacksPerTurn||1)-(r.attacksThisTurn||0);for(let l=0;l<o;l++){const d=this.state.players[this.state.currentPlayerId-1].board.find(c=>c.id===r.id);if(!d||!d.canAttack||d.attack<=0)break;if(this.playWoodSound(),this.savePotentialDeathMinions(r.id),await this.attackAnimation(r.id,!0,d.attack),this.state=ie(this.state,{type:"ATTACK_HERO",attackerPlayerId:this.state.currentPlayerId,attackerCardId:r.id,targetPlayerId:s}),this.render(),this.state.phase==="gameOver"){this.isAttacking=!1;return}await new Promise(c=>setTimeout(c,200))}}if(this.isAttacking=!1,this.state.phase==="onlineBattle"){const r=this.state.online.currentRoom;if(r){const{broadcastGameAction:a}=await fe(async()=>{const{broadcastGameAction:l}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:l}},[]),o=this.state.currentPlayerId===1?2:1;for(const l of this.state.players[this.state.currentPlayerId-1].board)l.canAttack&&a(r.id,{type:"ATTACK_HERO",attackerPlayerId:this.state.online.playerId,attackerCardId:l.id,targetPlayerId:o}).catch(console.error);await this.broadcastGameState()}}}attachEventListeners(){const e=this.state.phase==="onlineBattle";document.getElementById("game-container")?.addEventListener("click",o=>{const l=o.target;!l.closest(".hero-skill-icon-wrapper")&&!l.closest(".minion-card")&&!l.closest('[data-own-hero="true"]')&&(this.hideFixedTooltip(),this.selectedAttackingMinion&&(this.selectedAttackingMinion=null,this.hideDefenseOverlayDOM(),this.syncSelectionToDOM()),!l.closest("[data-speech-type]")&&!l.closest("#speech-menu-container")&&this.hideSpeechMenu())}),document.getElementById("game-menu-btn")?.addEventListener("click",()=>{this.showGameMenu=!0,this.render()}),document.getElementById("continue-game-btn")?.addEventListener("click",()=>{this.showGameMenu=!1,this.render()}),document.getElementById("save-exit-btn")?.addEventListener("click",()=>{this.savedGameState={...this.state,newlyDrawnCardIds:[]},this.showGameMenu=!1,this.state=ie(this.state,{type:"BACK_TO_MENU"}),this.render()}),e||document.getElementById("surrender-btn")?.addEventListener("click",()=>{this.showGameMenu=!1;const o=this.state.currentPlayerId===1?2:1;this.state={...this.state,phase:"gameOver",winner:o},this.render()}),document.getElementById("game-menu-overlay")?.addEventListener("click",o=>{o.target.id==="game-menu-overlay"&&(this.showGameMenu=!1,this.render())}),document.getElementById("discard-pile-btn")?.addEventListener("click",o=>{const l=parseInt(o.currentTarget.getAttribute("data-player-id")||"0");l>0&&(this.showDiscardPileViewer=!0,this.viewingDiscardPilePlayerId=l,this.render())}),document.getElementById("discard-pile-viewer-close")?.addEventListener("click",()=>{this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.render()}),document.getElementById("discard-pile-viewer-overlay")?.addEventListener("click",o=>{o.target.id==="discard-pile-viewer-overlay"&&(this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.render())});const s=this.state.phase==="robotBattle",t=s&&this.state.currentPlayerId===2;document.getElementById("end-turn-btn")?.addEventListener("click",()=>{s?this.state=ie(this.state,{type:"END_ROBOT_TURN"}):this.state=ie(this.state,{type:"END_TURN"}),this.selectedMinion=null,this.render()}),document.getElementById("my-turn-btn")?.addEventListener("click",()=>{this.state=ie(this.state,{type:"START_MY_TURN"}),this.selectedMinion=null,this.render(),setTimeout(()=>this.playDrawCardAnimation(),100)}),document.getElementById("all-attack-btn")?.addEventListener("click",()=>{this.allAttackHero()}),t||(this.setupHandDrag(),this.setupMinionAttack(),document.querySelectorAll(".hero-skill-icon-btn").forEach(o=>{o.addEventListener("click",async l=>{const d=l.currentTarget,c=parseInt(d.dataset.playerId),p=parseInt(d.dataset.skillIndex);if(this.state.currentPlayerId!==c)return;const h=this.state.players[c-1],m=h.heroCard;if(!m||!m.skills)return;const f=m.skills[p];if(!f||f.type==="passive")return;const b=f.cost??0;if(h.energy<b)return;const y=(f.effects||(f.effect?[f.effect]:[])).filter(k=>k.moment==="打出时"||k.moment===null);if(y.some(k=>{const u=k.targets||[];return u.includes("选择目标")||u.includes("选择随从")})){if(this.selectingTargetForSkill&&this.selectingTargetForSkill.skillIndex===p&&this.selectingTargetForSkill.playerId===c){this.selectingTargetForSkill=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null,this.hideTargetArrow(),this.render();return}this.selectingTargetForSkill={skillIndex:p,playerId:c};const k=y.find(u=>{const w=u.targets||[];return w.includes("选择目标")||w.includes("选择随从")});this.selectingTargetEffect=k||null,this.selectingTargetMinionId=null,this.targetArrowColor="#a855f7",this.selectedHandCard=null,this.render(),setTimeout(()=>{const u=document.querySelector(`.hero-skill-icon-btn[data-skill-index="${p}"][data-player-id="${c}"]`);if(u){const w=u.getBoundingClientRect();this.targetArrowStartX=w.left+w.width/2,this.targetArrowStartY=w.top+w.height/2,this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,this.targetArrowColor)}},50);return}if(this.state=ie(this.state,{type:"PLAY_HERO_SKILL",playerId:c,skillIndex:p}),e){const k=this.state.online.currentRoom;if(k){const{broadcastGameAction:u}=await fe(async()=>{const{broadcastGameAction:w}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:w}},[]);u(k.id,{type:"HERO_SKILL",playerId:this.state.online.playerId,skillIndex:p}).catch(console.error),await this.broadcastGameState()}}this.render()})})),document.querySelectorAll(".hero-skill-icon-wrapper").forEach(o=>{o.addEventListener("mouseenter",l=>{const d=l.currentTarget,c=parseInt(d.dataset.playerId),p=parseInt(d.dataset.skillIndex),h=d.dataset.isOpponent==="true",f=this.state.players.find(S=>S.id===c)?.heroCard?.skills?.[p];if(!f)return;const b=f.type==="passive",g=f.remainingCooldown??0,y=Math.floor(g/2),x=!b&&y>0?`<div style="font-size:11px; color:#ffcccc; margin-top:4px; text-shadow:0 0 4px rgba(0,0,0,0.8);">冷却中：剩余 ${y} 回合</div>`:"",k=f.usesLeft??(f.limited?f.maxUses:void 0),u=!b&&f.limited?`<div style="font-size:11px; color:${k===0?"#ff9999":"#ffffcc"}; margin-top:4px; text-shadow:0 0 4px rgba(0,0,0,0.8);">${k===0?"次数已用尽":`剩余次数：${k}`}</div>`:"",I=`
          <div>
            ${b?'<span style="display:inline-block; background:rgba(192,160,128,0.6); color:#fff; padding:1px 6px; border-radius:4px; font-size:11px; margin-bottom:4px;">被动技能</span>':""}
            <div style="font-weight:bold; font-size:14px; margin-bottom:4px; color:#fff; text-shadow:0 0 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6);">${f.name}</div>
            <div style="font-size:12px; color:#fff; text-shadow:0 0 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6); white-space:pre-line;">${this.getHeroSkillDescription(f)}</div>
            ${x}
            ${u}
          </div>
        `;this.showFixedTooltip(d,I,h?"bottom":"top")}),o.addEventListener("mouseleave",()=>this.hideFixedTooltip())}),document.querySelectorAll('.minion-card[data-has-effects="true"]').forEach(o=>{o.addEventListener("mouseenter",l=>{const d=l.currentTarget,c=parseInt(d.dataset.playerId),p=parseInt(d.dataset.minionId),m=this.state.players.find(b=>b.id===c)?.board.find(b=>b.id===p);if(!m||!m.effects?.length)return;const f=`
          <div>
            <div style="font-weight:bold; font-size:14px; margin-bottom:4px; color:#fff; text-shadow:0 0 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6);">${m.name}</div>
            <div style="font-size:12px; color:#fff; text-shadow:0 0 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6); white-space:pre-line;">${this.getMinionSkillDescription(m)}</div>
          </div>
        `;this.showFixedTooltip(d,f,"bottom")}),o.addEventListener("mouseleave",()=>this.hideFixedTooltip())});const n=document.getElementById("play-area");if(n&&n.addEventListener("click",o=>{if(this.selectingTargetForCard&&!o.target.closest(".minion-card")){this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.render();return}if(this.selectingTargetForSkill&&!o.target.closest(".minion-card")){this.selectingTargetForSkill=null,this.selectingTargetEffect=null,this.hideTargetArrow(),this.render();return}this.selectedHandCard&&!o.target.closest(".minion-card")&&this.tryPlayCard(this.selectedHandCard)}),this.selectingTargetForCard&&this.selectingTargetEffect){document.querySelectorAll(".top-board .minion-card").forEach(l=>{l.addEventListener("click",d=>{if(d.stopPropagation(),!this.selectingTargetForCard||!this.selectingTargetEffect)return;const c=parseInt(l.dataset.minionId),p=parseInt(l.dataset.playerId);this.executeCardWithTarget(this.selectingTargetForCard,this.selectingTargetEffect,p,c)})}),document.querySelectorAll(".bottom-board .minion-card").forEach(l=>{l.addEventListener("click",d=>{if(d.stopPropagation(),!this.selectingTargetForCard||!this.selectingTargetEffect)return;const c=parseInt(l.dataset.minionId),p=parseInt(l.dataset.playerId);this.executeCardWithTarget(this.selectingTargetForCard,this.selectingTargetEffect,p,c)})});const o=document.querySelector(".top-player-area");o&&o.addEventListener("click",l=>{if(!l.target.closest(".minion-card")){const d=this.selectingTargetEffect?.targets||[];if(this.selectingTargetEffect&&d.includes("选择目标")&&!d.includes("选择随从")){const c=this.state.currentPlayerId===1?2:1;this.executeCardEffectOnHero(this.selectingTargetForCard,this.selectingTargetEffect,c)}}})}if(this.selectingTargetForSkill&&this.selectingTargetEffect){const o=this.selectingTargetForSkill.skillIndex;document.querySelectorAll(".top-board .minion-card").forEach(d=>{d.addEventListener("click",c=>{if(c.stopPropagation(),!this.selectingTargetForSkill||!this.selectingTargetEffect)return;const p=parseInt(d.dataset.minionId),h=parseInt(d.dataset.playerId);this.executeHeroSkillWithTarget(o,h,p)})}),document.querySelectorAll(".bottom-board .minion-card").forEach(d=>{d.addEventListener("click",c=>{if(c.stopPropagation(),!this.selectingTargetForSkill||!this.selectingTargetEffect)return;const p=parseInt(d.dataset.minionId),h=parseInt(d.dataset.playerId);this.executeHeroSkillWithTarget(o,h,p)})});const l=document.querySelector(".top-player-area");l&&l.addEventListener("click",d=>{if(!d.target.closest(".minion-card")){const c=this.selectingTargetEffect?.targets||[];if(this.selectingTargetEffect&&c.includes("选择目标")&&!c.includes("选择随从")){const p=this.state.currentPlayerId===1?2:1;this.executeHeroSkillOnHero(o,p)}}})}const i=document.querySelector(".bottom-player-area");i&&i.addEventListener("click",()=>{this.selectingTargetEffect?.effect==="治愈"&&this.selectingTargetForCard&&this.selectingTargetEffect&&this.executeCardEffectOnHero(this.selectingTargetForCard,this.selectingTargetEffect,this.state.currentPlayerId),this.selectingTargetEffect?.effect==="治愈"&&this.selectingTargetForSkill&&this.selectingTargetEffect&&this.executeHeroSkillOnHero(this.selectingTargetForSkill.skillIndex,this.state.currentPlayerId)}),document.querySelectorAll(".top-board .minion-card").forEach(o=>{o.addEventListener("click",async l=>{if(this.selectedAttackingMinion&&!this.isAttacking){l.stopPropagation(),this.isAttacking=!0;const d=parseInt(o.dataset.minionId),c=parseInt(o.dataset.playerId),p=this.selectedAttackingMinion;this.selectedAttackingMinion=null;const h=this.state.phase==="onlineBattle",m=h?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;console.log("攻击随从 - 联机模式:",h,"视角索引:",this.onlineViewPlayerIndex,"攻击者ID:",m,"目标玩家ID:",c,"目标随从ID:",d),this.savePotentialDeathMinions(p.id,d);const f=this.state.players.find(y=>y.id===m)?.board.find(y=>y.id===p.id),b=f?this.findAttackBonusForMinion(f):0,g=b>0?f.attack:0;if(b>0&&(f.attack+=b),this.playWoodSound(),await this.attackAnimation(p.id,!1,f?f.attack:p.attack),this.state=ie(this.state,{type:"ATTACK",attackerPlayerId:m,attackerCardId:p.id,targetPlayerId:c,targetCardId:d}),b>0){const y=this.state.players.find(x=>x.id===m)?.board.find(x=>x.id===p.id);y?y.attack-=b:f&&(f.attack=g)}h&&await this.broadcastGameState(),this.isAttacking=!1,this.state.newlyDrawnCardIds.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(),50)):this.render()}})});const r=document.querySelector(".top-player-area");r&&r.addEventListener("click",async o=>{if(this.selectedAttackingMinion&&!o.target.closest(".minion-card")&&!this.isAttacking){this.isAttacking=!0;const l=this.state.phase==="onlineBattle",d=l?this.onlineViewPlayerIndex===0?2:1:this.state.currentPlayerId===1?2:1,c=this.selectedAttackingMinion;this.selectedAttackingMinion=null;const p=l?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;console.log("攻击英雄 - 联机模式:",l,"视角索引:",this.onlineViewPlayerIndex,"攻击者ID:",p,"目标玩家ID:",d),this.savePotentialDeathMinions(c.id),this.playWoodSound(),await this.attackAnimation(c.id,!0,c.attack),this.state=ie(this.state,{type:"ATTACK_HERO",attackerPlayerId:p,attackerCardId:c.id,targetPlayerId:d}),l&&await this.broadcastGameState(),this.isAttacking=!1,this.render()}});const a=document.querySelector('.bottom-player-area [data-own-hero="true"]');if(a&&a.addEventListener("click",o=>{if(!o.target.closest("[data-speech-type]")){if(this.selectedAttackingMinion&&!o.target.closest(".minion-card")&&!this.isAttacking&&!this.state.waitingForNextPlayer){const l=this.selectedAttackingMinion,d=this.state.phase==="onlineBattle",c=d?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,h=this.state.players[c].board.find(w=>w.id===l.id);if(!h)return;const m=h.keywords.some(w=>w.name==="连击"),f=h.keywords.some(w=>w.name==="狂怒"),b=h.keywords.some(w=>w.name==="嘲讽"),g=h.keywords.some(w=>w.name==="机动"),y=h.keywords.some(w=>w.name==="不动"),x=h.maxAttacksPerTurn||1,k=(h.attacksThisTurn||0)>=x;if(h.isDefending){o.stopPropagation(),this.selectedAttackingMinion=null;const w=d?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=ie(this.state,{type:"TOGGLE_DEFENSE",playerId:w,cardId:l.id}),this.render(),d){const I=this.state.online.currentRoom;I&&(fe(async()=>{const{broadcastGameAction:S}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:S}},[]).then(({broadcastGameAction:S})=>{S(I.id,{type:"STATE_SYNC",playerId:w}).catch(console.error)}),this.broadcastGameState())}return}if(!y&&!m&&!f&&!b&&(!h.hasAttacked||g)&&!k){o.stopPropagation(),this.selectedAttackingMinion=null;const w=d?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=ie(this.state,{type:"TOGGLE_DEFENSE",playerId:w,cardId:l.id}),this.render(),d){const I=this.state.online.currentRoom;I&&(fe(async()=>{const{broadcastGameAction:S}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:S}},[]).then(({broadcastGameAction:S})=>{S(I.id,{type:"STATE_SYNC",playerId:w}).catch(console.error)}),this.broadcastGameState())}}}else if(!this.selectedAttackingMinion&&!this.isAttacking&&!this.state.waitingForNextPlayer){o.stopPropagation();const l=document.getElementById("speech-menu-container");l&&(l.style.display==="none"||!l.style.display?(l.setAttribute("data-cooldown",this.speechCooldown?"true":"false"),l.style.display="block",l.style.animation="none",l.offsetHeight,l.style.animation="speechMenuFadeIn 0.25s ease-out",this.showSpeechMenu=!0,this.clearSpeechMenuTimer(),this.speechMenuTimer=setTimeout(()=>{this.hideSpeechMenu()},5e3)):this.hideSpeechMenu())}}}),document.addEventListener("click",o=>{const l=o.target.closest("[data-speech-type]");if(l){const d=l.dataset.speechType;this.triggerSpeech(d)}}),this.attackingMinion&&!this.isAttacking){document.querySelectorAll(".top-board .minion-card").forEach(l=>{l.addEventListener("mouseup",async d=>{if(this.attackingMinion&&!this.isAttacking){d.stopPropagation(),this.isAttacking=!0;const c=parseInt(d.currentTarget.dataset.minionId),p=parseInt(d.currentTarget.dataset.playerId);this.hideAttackArrow();const m=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;this.savePotentialDeathMinions(this.attackingMinion.id,c);const f=this.state.players.find(x=>x.id===m)?.board.find(x=>x.id===this.attackingMinion?.id),b=f?this.findAttackBonusForMinion(f):0,g=b>0?f.attack:0;if(b>0&&(f.attack+=b),this.playWoodSound(),await this.attackAnimation(this.attackingMinion.id,!1,f?f.attack:this.attackingMinion.attack),this.state=ie(this.state,{type:"ATTACK",attackerPlayerId:m,attackerCardId:this.attackingMinion.id,targetPlayerId:p,targetCardId:c}),b>0){const x=this.state.players.find(k=>k.id===m)?.board.find(k=>k.id===this.attackingMinion?.id);x?x.attack-=b:f&&(f.attack=g)}const y=this.attackingMinion.id;if(this.attackingMinion=null,this.hideDefenseOverlayDOM(),this.isAttacking=!1,this.state.newlyDrawnCardIds.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(),50)):this.render(),this.state.phase==="onlineBattle"){const x=this.state.online.currentRoom;if(x){const{broadcastGameAction:k}=await fe(async()=>{const{broadcastGameAction:u}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:u}},[]);k(x.id,{type:"ATTACK_MINION",attackerPlayerId:this.state.online.playerId,attackerCardId:y,targetPlayerId:p,targetCardId:c}).catch(console.error),await this.broadcastGameState()}}}})});const o=document.querySelector(".top-player-area");o&&o.addEventListener("mouseup",async l=>{if(this.attackingMinion&&!l.target.closest(".minion-card")&&!this.isAttacking){this.isAttacking=!0;const d=this.state.phase==="onlineBattle",c=d?this.onlineViewPlayerIndex===0?2:1:this.state.currentPlayerId===1?2:1,p=d?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;this.hideAttackArrow(),this.savePotentialDeathMinions(this.attackingMinion.id);const h=this.findAttackBonusForMinion(this.attackingMinion),m=h>0?this.attackingMinion.attack:0;h>0&&(this.attackingMinion.attack+=h),this.playWoodSound(),await this.attackAnimation(this.attackingMinion.id,!0,this.attackingMinion.attack),this.state=ie(this.state,{type:"ATTACK_HERO",attackerPlayerId:p,attackerCardId:this.attackingMinion.id,targetPlayerId:c}),h>0&&(this.attackingMinion.attack-=h,this.attackingMinion&&this.attackingMinion.attack<m&&(this.attackingMinion.attack=m));const f=this.attackingMinion.id;if(this.attackingMinion=null,this.isAttacking=!1,this.render(),this.state.phase==="onlineBattle"){const b=this.state.online.currentRoom;if(b){const{broadcastGameAction:g}=await fe(async()=>{const{broadcastGameAction:y}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:y}},[]);g(b.id,{type:"ATTACK_HERO",attackerPlayerId:this.state.online.playerId,attackerCardId:f,targetPlayerId:c}).catch(console.error),await this.broadcastGameState()}}}})}}setupMinionAttack(){const e=document.querySelectorAll(".bottom-board .minion-card");console.log("setupMinionAttack - 底部随从数量:",e.length,"视角索引:",this.onlineViewPlayerIndex,"游戏阶段:",this.state.phase),e.forEach(s=>{const t=parseInt(s.dataset.minionId),n=i=>{if(i.keywords.some(m=>m.name==="不动"))return!1;const r=i.keywords.some(m=>m.name==="连击"),a=i.keywords.some(m=>m.name==="狂怒"),o=i.keywords.some(m=>m.name==="嘲讽"),l=i.keywords.some(m=>m.name==="机动"),d=i.maxAttacksPerTurn||1,c=(i.attacksThisTurn||0)>=d,p=!i.hasAttacked&&!c&&(!i.isDefending||i.isDefending&&l),h=!i.isDefending&&!r&&!a&&!o&&(!i.hasAttacked||l)&&!c;return p||h};s.addEventListener("click",i=>{if(this.state.waitingForNextPlayer||this.isAttacking)return;const r=this.state.phase==="onlineBattle",a=r?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,l=this.state.players[a].board.find(d=>d.id===t);if(console.log("点击随从 - 联机模式:",r,"玩家索引:",a,"随从ID:",t,"随从数据:",l?"找到":"未找到"),l&&l.isDefending){i.stopPropagation();const d=r?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=ie(this.state,{type:"TOGGLE_DEFENSE",playerId:d,cardId:l.id}),this.render(),r){const c=this.state.online.currentRoom;c&&(fe(async()=>{const{broadcastGameAction:p}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:p}},[]).then(({broadcastGameAction:p})=>{p(c.id,{type:"STATE_SYNC",playerId:d}).catch(console.error)}),this.broadcastGameState())}return}if(l&&n(l)){if(this.selectedAttackingMinion?.id===t){this.selectedAttackingMinion=null,this.syncSelectionToDOM();return}this.selectedAttackingMinion=l,this.selectedHandCard=null,this.syncSelectionToDOM()}}),s.addEventListener("mousedown",i=>{const r=i;if(this.state.waitingForNextPlayer||this.isAttacking)return;const o=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,d=this.state.players[o].board.find(c=>c.id===t);if(d&&(n(d)||d.isDefending)){i.preventDefault(),this.attackingMinion=d,this.updateDefenseOverlayDOM(d);const c=s.getBoundingClientRect();this.attackArrowStartX=c.left+c.width/2,this.attackArrowStartY=c.top+c.height/2,this.showAttackArrow(this.attackArrowStartX,this.attackArrowStartY,r.clientX,r.clientY)}})})}showAttackArrow(e,s,t,n){const i=document.getElementById("attack-arrow"),r=document.getElementById("arrow-line");i&&r&&(i.style.display="block",r.setAttribute("x1",String(e)),r.setAttribute("y1",String(s)),r.setAttribute("x2",String(t)),r.setAttribute("y2",String(n)))}hideAttackArrow(){const e=document.getElementById("attack-arrow");e&&(e.style.display="none")}updateAttackArrow(e,s){const t=document.getElementById("arrow-line");t&&(t.setAttribute("x2",String(e)),t.setAttribute("y2",String(s)))}showTargetArrow(e,s,t,n,i){const r=document.getElementById("target-arrow"),a=document.getElementById("target-arrow-line"),o=document.getElementById("target-arrowhead"),d=i||this.targetArrowColor;if(r&&a&&o){r.style.display="block",a.setAttribute("x1",String(e)),a.setAttribute("y1",String(s)),a.setAttribute("x2",String(t)),a.setAttribute("y2",String(n)),a.setAttribute("stroke",d);const c=o.querySelector("polygon");c&&c.setAttribute("fill",d)}}hideTargetArrow(){const e=document.getElementById("target-arrow");e&&(e.style.display="none")}updateTargetArrow(e,s){const t=document.getElementById("target-arrow-line");t&&(t.setAttribute("x2",String(e)),t.setAttribute("y2",String(s)))}setupHandDrag(){this.globalListenersAttached||(document.addEventListener("mousemove",this.boundMouseMove),document.addEventListener("mouseup",this.boundMouseUp),this.globalListenersAttached=!0);const e=document.querySelectorAll(".hand-card-wrapper"),s=document.getElementById("drag-card");e.forEach(t=>{t.addEventListener("mouseenter",()=>{t.classList.add("hovered")}),t.addEventListener("mouseleave",()=>{t.classList.remove("hovered")}),t.addEventListener("click",n=>{if(this.state.waitingForNextPlayer||this.isAttacking)return;let i;if(this._pendingClickCardId!==void 0?(i=this._pendingClickCardId,this._pendingClickCardId=void 0):i=parseInt(t.dataset.cardId),isNaN(i))return;const a=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,o=this.state.players[a],l=o.hand.find(d=>d.id===i);if(l){if(this.selectedHandCard?.id===l.id){this.selectedHandCard=null,this.syncSelectionToDOM();return}o.energy>=l.cost&&(this.selectedHandCard=l,this.selectedAttackingMinion=null,this.syncSelectionToDOM())}}),t.addEventListener("mousedown",n=>{const i=n;if(this.state.waitingForNextPlayer||this.isAttacking)return;const r=parseInt(t.dataset.cardId);if(isNaN(r))return;const o=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,l=this.state.players[o].hand.find(d=>d.id===r);if(l&&(this.handDragStartX=i.clientX,this.handDragStartY=i.clientY,this.isHandDragStarted=!1,this.draggedCard=l,this.dragElement=t,s)){const d=l.type==="spell",c=this.getCardBgStyle(l);s.innerHTML=`
            <div class="drag-card-inner ${d?"spell-card":""}" style="${c}">
              <div class="card-top-row">
                <div class="card-cost-diamond">
                  <span>${l.cost}</span>
                </div>
                <div class="card-name">${l.name}</div>
              </div>
              ${l.keywords.length>0?this.renderKeywords(l.keywords,l.armorValue):""}
              ${(()=>{const p=this.getCardFullEffectText(l);return p?`<div class="card-effect-text">${p}</div>`:""})()}
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
          `,s.style.display="none",s.style.left=`${i.clientX-60}px`,s.style.top=`${i.clientY-80}px`}}),t.addEventListener("touchstart",n=>{const i=n;if(this.state.waitingForNextPlayer||this.isAttacking)return;const r=parseInt(t.dataset.cardId);if(isNaN(r))return;const o=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,l=this.state.players[o].hand.find(d=>d.id===r);if(l&&(this.handDragStartX=i.touches[0].clientX,this.handDragStartY=i.touches[0].clientY,this.isHandDragStarted=!1,this.draggedCard=l,this.dragElement=t,s)){const d=l.type==="spell",c=this.getCardBgStyle(l);s.innerHTML=`
            <div class="drag-card-inner ${d?"spell-card":""}" style="${c}">
              <div class="card-top-row">
                <div class="card-cost-diamond">
                  <span>${l.cost}</span>
                </div>
                <div class="card-name">${l.name}</div>
              </div>
              ${l.keywords.length>0?this.renderKeywords(l.keywords,l.armorValue):""}
              ${(()=>{const p=this.getCardFullEffectText(l);return p?`<div class="card-effect-text">${p}</div>`:""})()}
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
          `,s.style.display="none",s.style.left=`${this.handDragStartX-60}px`,s.style.top=`${this.handDragStartY-80}px`}},{passive:!0})})}handleMouseMove(e){if(this.attackingMinion){this.showAttackArrow(this.attackArrowStartX,this.attackArrowStartY,e.clientX,e.clientY);return}if(this.selectingTargetForCard||this.selectingTargetForSkill){this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,e.clientX,e.clientY,this.targetArrowColor);return}const s=document.getElementById("drag-card"),t=document.getElementById("play-area");if(this.draggedCard&&s&&this.dragElement){const n=e.clientX-this.handDragStartX,i=e.clientY-this.handDragStartY;if(!this.isHandDragStarted&&(Math.abs(n)>5||Math.abs(i)>5)&&(this.isHandDragStarted=!0,this.dragElement.classList.add("dragging"),s.style.display="block"),s.style.left=`${e.clientX-60}px`,s.style.top=`${e.clientY-80}px`,t){const r=t.getBoundingClientRect();e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom?t.classList.add("drop-target"):t.classList.remove("drop-target")}}}async handleMouseUp(e){if(this.attackingMinion&&!this.isAttacking){this.hideAttackArrow();const n=e.target;if(this.attackingMinion.isDefending&&!this.attackingMinion.keywords.some(l=>l.name==="机动")){if(n.closest('[data-own-hero="true"]')){const d=this.state.phase==="onlineBattle",c=d?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=ie(this.state,{type:"TOGGLE_DEFENSE",playerId:c,cardId:this.attackingMinion.id}),this.attackingMinion=null,this.hideDefenseOverlayDOM(),this.render(),d){const p=this.state.online.currentRoom;p&&(fe(async()=>{const{broadcastGameAction:h}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:h}},[]).then(({broadcastGameAction:h})=>{h(p.id,{type:"STATE_SYNC",playerId:c}).catch(console.error)}),this.broadcastGameState())}return}this.attackingMinion=null,this.hideDefenseOverlayDOM();return}const i=n.closest(".top-board .minion-card"),r=n.closest(".top-player-area"),a=this.state.phase==="onlineBattle",o=a?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(console.log("handleMouseUp - 攻击随从模式 - 联机模式:",a,"视角索引:",this.onlineViewPlayerIndex,"攻击者ID:",o),i){const l=parseInt(i.dataset.minionId),d=parseInt(i.dataset.playerId),c=this.attackingMinion;this.attackingMinion=null,this.hideDefenseOverlayDOM(),this.isAttacking=!0,this.playWoodSound(),this.attackAnimation(c.id,!1,c.attack).then(async()=>{if(this.state=ie(this.state,{type:"ATTACK",attackerPlayerId:o,attackerCardId:c.id,targetPlayerId:d,targetCardId:l}),this.isAttacking=!1,this.state.newlyDrawnCardIds.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(),50)):this.render(),a){const p=this.state.online.currentRoom;if(p){const{broadcastGameAction:h}=await fe(async()=>{const{broadcastGameAction:m}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:m}},[]);h(p.id,{type:"ATTACK_MINION",attackerPlayerId:this.state.online.playerId,attackerCardId:c.id,targetPlayerId:d,targetCardId:l}).catch(console.error)}}});return}else if(r&&!n.closest(".minion-card")){const l=a?2-this.onlineViewPlayerIndex:this.state.currentPlayerId===1?2:1,d=this.attackingMinion;this.attackingMinion=null,this.hideDefenseOverlayDOM(),this.isAttacking=!0,this.savePotentialDeathMinions(d.id),this.playWoodSound(),this.attackAnimation(d.id,!0,d.attack).then(async()=>{if(this.state=ie(this.state,{type:"ATTACK_HERO",attackerPlayerId:o,attackerCardId:d.id,targetPlayerId:l}),this.isAttacking=!1,this.state.newlyDrawnCardIds.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(),50)):this.render(),a){const c=this.state.online.currentRoom;if(c){const{broadcastGameAction:p}=await fe(async()=>{const{broadcastGameAction:h}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:h}},[]);p(c.id,{type:"ATTACK_HERO",attackerPlayerId:this.state.online.playerId,attackerCardId:d.id,targetPlayerId:l}).catch(console.error)}}});return}else if(n.closest('.bottom-player-area [data-own-hero="true"]')){const l=this.state.phase==="onlineBattle",d=l?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,p=this.state.players[d].board.find(h=>h.id===this.attackingMinion.id);if(this.attackingMinion=null,this.hideDefenseOverlayDOM(),p){const h=l?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=ie(this.state,{type:"TOGGLE_DEFENSE",playerId:h,cardId:p.id}),this.render(),l){const m=this.state.online.currentRoom;m&&(fe(async()=>{const{broadcastGameAction:f}=await import("./online-D2Ox2vtC.js");return{broadcastGameAction:f}},[]).then(({broadcastGameAction:f})=>{f(m.id,{type:"STATE_SYNC",playerId:h}).catch(console.error)}),this.broadcastGameState())}}return}this.attackingMinion=null,this.hideDefenseOverlayDOM();return}if(this.selectingTargetForCard&&this.selectingTargetEffect){this.hideTargetArrow();const n=e.target,i=n.closest(".minion-card"),r=n.closest(".top-player-area"),a=n.closest(".bottom-player-area");if(i){const o=parseInt(i.dataset.minionId),l=parseInt(i.dataset.playerId);this.executeCardWithTarget(this.selectingTargetForCard,this.selectingTargetEffect,l,o);return}else if(r&&!n.closest(".minion-card")){const o=this.selectingTargetEffect?.targets||[];if(o.includes("选择目标")&&!o.includes("选择随从")){const l=this.state.currentPlayerId===1?2:1;this.executeCardEffectOnHero(this.selectingTargetForCard,this.selectingTargetEffect,l);return}}else if(a&&!n.closest(".minion-card")){if(this.selectingTargetEffect?.effect==="治愈"&&this.selectingTargetForCard&&this.selectingTargetEffect){this.executeCardEffectOnHero(this.selectingTargetForCard,this.selectingTargetEffect,this.state.currentPlayerId);return}if(this.selectingTargetMinionId){const o=document.querySelector(`[data-minion-id="${this.selectingTargetMinionId}"]`);if(o){const l=o.getBoundingClientRect();this.showTargetArrow(l.left+l.width/2,l.top+l.height/2,e.clientX,e.clientY,"blue")}}else{const o=document.querySelector(".bottom-player-area [data-player-hp]");if(o){const l=o.getBoundingClientRect();this.showTargetArrow(l.left+l.width/2,l.top+l.height/2,e.clientX,e.clientY,"purple")}}return}if(this.selectingTargetMinionId){const o=document.querySelector(`[data-minion-id="${this.selectingTargetMinionId}"]`);if(o){const l=o.getBoundingClientRect();this.showTargetArrow(l.left+l.width/2,l.top+l.height/2,e.clientX,e.clientY,"blue")}}else{const o=document.querySelector(".bottom-player-area [data-player-hp]");if(o){const l=o.getBoundingClientRect();this.showTargetArrow(l.left+l.width/2,l.top+l.height/2,e.clientX,e.clientY,"purple")}}return}if(this.selectingTargetForSkill&&this.selectingTargetEffect){this.hideTargetArrow();const n=this.selectingTargetForSkill.skillIndex,i=e.target,r=i.closest(".minion-card"),a=i.closest(".top-player-area"),o=i.closest(".bottom-player-area");if(r){const d=parseInt(r.dataset.minionId),c=parseInt(r.dataset.playerId);this.executeHeroSkillWithTarget(n,c,d);return}else if(a&&!i.closest(".minion-card")){const d=this.selectingTargetEffect?.targets||[];if(d.includes("选择目标")&&!d.includes("选择随从")){const c=this.state.currentPlayerId===1?2:1;this.executeHeroSkillOnHero(n,c);return}}else if(o&&!i.closest(".minion-card")){if(this.selectingTargetEffect?.effect==="治愈"){this.executeHeroSkillOnHero(n,this.state.currentPlayerId);return}const d=document.querySelector(".bottom-player-area [data-player-hp]");if(d){const c=d.getBoundingClientRect();this.showTargetArrow(c.left+c.width/2,c.top+c.height/2,e.clientX,e.clientY,"blue")}return}const l=document.querySelector(".bottom-player-area [data-player-hp]");if(l){const d=l.getBoundingClientRect();this.showTargetArrow(d.left+d.width/2,d.top+d.height/2,e.clientX,e.clientY,"blue")}return}const s=document.getElementById("drag-card"),t=document.getElementById("play-area");if(this.draggedCard&&!this.isHandDragStarted){this._pendingClickCardId=this.draggedCard.id,s&&(s.style.display="none"),t&&t.classList.remove("drop-target"),this.draggedCard=null,this.dragElement=null;return}if(this.draggedCard&&s&&t){const n=t.getBoundingClientRect(),i=this.state.players[this.state.currentPlayerId-1];if(e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom&&i.energy>=this.draggedCard.cost){const a=(this.draggedCard.effects||(this.draggedCard.effect?[this.draggedCard.effect]:[])).filter(l=>this.momentsInclude(l.moment,"打出时")&&l.effect);let o=!1;for(const l of a){const d=l.targets||[];if(d.includes("选择目标")||d.includes("选择随从")){o=!0;const c=this.draggedCard.type==="spell";c||(this.state=ie(this.state,{type:"PLAY_CARD",playerId:this.state.currentPlayerId,cardId:this.draggedCard.id}));const p=this.state.players[this.state.currentPlayerId-1].board,h=p[p.length-1];this.selectingTargetForCard=this.draggedCard,this.selectingTargetEffect=l,this.selectingTargetMinionId=c?null:h?h.id:null,this.targetArrowColor=c?"#9b59b6":"#4a90d9",s.style.display="none",t.classList.remove("drop-target"),this.dragElement&&this.dragElement.classList.remove("dragging"),this.draggedCard=null,this.dragElement=null,this.isHandDragStarted=!1,this.render(),setTimeout(()=>{if(c){const m=document.querySelector(".bottom-player-area [data-player-hp]");if(m){const f=m.getBoundingClientRect();this.targetArrowStartX=f.left+f.width/2,this.targetArrowStartY=f.top+f.height/2,this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,"purple")}}else if(this.selectingTargetMinionId){const m=document.querySelector(`[data-minion-id="${this.selectingTargetMinionId}"]`);if(m){const f=m.getBoundingClientRect();this.targetArrowStartX=f.left+f.width/2,this.targetArrowStartY=f.top+f.height/2,this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,"blue")}}},50);return}}o||(this.playCardDirectly(this.draggedCard),s.style.display="none",t.classList.remove("drop-target"),this.dragElement&&this.dragElement.classList.remove("dragging"),this.draggedCard=null,this.dragElement=null);return}else this.render();s&&(s.style.display="none"),t&&t.classList.remove("drop-target"),this.dragElement&&this.dragElement.classList.remove("dragging"),this.draggedCard=null,this.dragElement=null}else s&&(s.style.display="none"),t&&t.classList.remove("drop-target"),this.dragElement&&this.dragElement.classList.remove("dragging"),this.draggedCard=null,this.dragElement=null}getCardColor(e){switch(e){case"minion":return"#7cb87c";case"spell":return"#6fa8dc";case"weapon":return"#d4a574";default:return"#a08060"}}getCardColorDark(e){switch(e){case"minion":return"#5a9a5a";case"spell":return"#4a90d9";case"weapon":return"#c4956a";default:return"#8b7355"}}getCardBorderColor(e){switch(e){case"minion":return"#4a8a4a";case"spell":return"#3d85c6";case"weapon":return"#b8956a";default:return"#a08060"}}};Ae.MALE_AUDIO_FILES={greeting:"/male_greeting.m4a",apology:"/male_apology.m4a",taunt:"/male_taunt.wav",exclamation:"/male_exclamation.wav",pity:"/male_pity.wav"},Ae.FEMALE_AUDIO_FILES={greeting:"/female_greeting.wav",apology:"/female_apology.wav",taunt:"/female_taunt.wav",exclamation:"/female_exclamation.wav",pity:"/female_pity.wav",flirt:"/flirt_audio.wav"};let vt=Ae;new vt;
