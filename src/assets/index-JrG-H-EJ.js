const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/online-fGHm1H1u.js","assets/supabase-client-CcfVv7ux.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const sa="modulepreload",na=function(E){return"/"+E},St={},ge=function(e,s,a){let r=Promise.resolve();if(s&&s.length>0){let o=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};var n=o;document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),l=t?.nonce||t?.getAttribute("nonce");r=o(s.map(d=>{if(d=na(d),d in St)return;St[d]=!0;const p=d.endsWith(".css"),c=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${c}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":sa,p||(h.as="script"),h.crossOrigin="",h.href=d,l&&h.setAttribute("nonce",l),document.head.appendChild(h),p)return new Promise((f,u)=>{h.addEventListener("load",f),h.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(t){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=t,window.dispatchEvent(l),!l.defaultPrevented)throw t}return r.then(t=>{for(const l of t||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};let wt=0;const Ee=()=>++wt,Et=()=>{wt=0},zt=E=>{wt=E},Le="__public__",$e={firstStrike:{name:"先攻",description:"攻击没有先攻的随从时，若击杀目标则不受到反伤"},mobility:{name:"机动",description:"每回合可以同时攻击与防御"},charge:{name:"冲锋",description:"刚被打出的回合可以直接进行攻击"},taunt:{name:"嘲讽",description:"进入防御状态一回合，无法攻击，下回合开始时失效"},strikeTwice:{name:"连击",description:"每回合可以攻击两次"},frenzy:{name:"狂怒",description:"攻击消灭随从后可以再次攻击"},armor:{name:"护甲",description:"每次受到的伤害减少x",hasValue:!0},prepare:{name:"准备",description:"打出后x个回合内无法行动",hasValue:!0},brutal:{name:"暴虐",description:"只能攻击随从"},decapitate:{name:"斩首",description:"只能攻击英雄"},cannotMove:{name:"不动",description:"永远无法进行任何行动"},divineShield:{name:"圣盾",description:"免疫受到的第一次伤害"},element_fire:{name:"🔥",description:"攻击附带灼烧元素：第二次造成灼烧伤害时触发额外50%伤害"},element_ice:{name:"❄️",description:"攻击附带冰冻元素：第二次造成冰冻伤害时冰冻目标一回合"},element_lightning:{name:"⚡️",description:"攻击附带电击元素：第二次造成电击伤害时对随机目标额外造成50%伤害"}},ke=(E,e)=>E.keywords.some(s=>s.name===e),bt={fire:"🔥",ice:"❄️",lightning:"⚡️"},Ft={fire:"灼烧",ice:"冰冻",lightning:"电击"},Ct=E=>{for(const e of E.keywords){if(`${e.name}`,e.name==="🔥")return"fire";if(e.name==="❄️")return"ice";if(e.name==="⚡️")return"lightning"}},ra=Object.freeze(Object.defineProperty({__proto__:null,CARD_GROUP_PUBLIC_ID:Le,ELEMENT_EMOJI:bt,ELEMENT_NAME:Ft,KEYWORDS:$e,generateCardId:Ee,getAttackElementType:Ct,hasKeyword:ke,resetCardIdCounter:Et,setCardIdCounter:zt},Symbol.toStringTag,{value:"Module"})),be=(E,e)=>!!(E.moments&&E.moments.includes(e)||E.moment===e),$t=E=>{if(!E||!E.skills)return E||null;const e=E.skills.map(s=>({...s,remainingCooldown:0,usesLeft:s.limited?s.maxUses??1:void 0}));return{...E,skills:e}},xe=E=>{const e=[E.name||"",E.type||"",E.cost??0,E.type!=="spell"?E.attack??0:0,E.type!=="spell"?E.health??0:0,E.armorValue??0],s=(E.keywords||[]).map(a=>`${a.name}:${a.value??""}`).sort().join("|");return e.push(s),e.join("|")},Qe=E=>{const e=new Map;for(const s of E){const a=xe(s),r=e.get(a);r?r.count++:e.set(a,{card:s,count:1})}return Array.from(e.values())},Ye=E=>{const e=[];for(const s of E)for(let a=0;a<s.count;a++)e.push({...s.card,id:Ee()});return e},Re=E=>E.groups[0],jt=(E,e)=>E.groups.find(s=>s.id===e),Gt=E=>{const e=[];for(const s of E.groups)for(const a of s.cards)a.card.type==="hero"&&e.push(a.card);return e},Je=(E,e)=>{if(e.type!=="hero")return;const s=xe(e);return E.groups.find(a=>a.cards.some(r=>xe(r.card)===s))};let ia=0;const fe=(E,e,s,a)=>{const r={id:++ia,turn:E.turnNumber,playerId:e,type:s,message:a,timestamp:Date.now()};return{...E,gameLogs:[...E.gameLogs,r]}},rt=(E,e,s)=>{const a=Math.min(e,s),r=s-a,i=Math.min(E-e,r);return{newEnergy:E-a-i,newBonusEnergy:e-a}},xt=()=>({id:Ee(),name:"幸运币",cost:0,attack:0,health:0,maxHealth:0,type:"spell",keywords:[],legacyEffect:"gain_energy",legacyEffectValue:1,imageData:"/cards/coin.png"});function Ve(E){const e=[...E];for(let s=e.length-1;s>0;s--){const a=Math.floor(Math.random()*(s+1));[e[s],e[a]]=[e[a],e[s]]}return e}function oa(E,e){const s=[...E];let a=e;const r=()=>(a=(a*16807+0)%2147483647,(a-1)/2147483646);for(let i=s.length-1;i>0;i--){const n=Math.floor(r()*(i+1));[s[i],s[n]]=[s[n],s[i]]}return s}const Oe=E=>({id:E,name:`玩家${E}`,health:30,maxHealth:30,energy:1,maxEnergy:1,hand:[],board:[],deck:[],personalBattleDeck:[],halfPublicDeck:[]}),Ut=E=>{Et();const e=E&&E.length>0?Qe(E):[],s=[];for(const a of e)a.card.type==="hero"&&s.push(a.card);return{phase:"menu",soundEffects:[],pendingVisualEffects:[],pendingSpeechEvents:[],currentPlayerId:1,turnNumber:1,players:[Oe(1),Oe(2)],sharedDeck:e,heroCards:s,heroCard:null,groups:[{id:Le,name:"公用卡组",cards:e}],publicBattleDeck:[],winner:null,waitingForNextPlayer:!1,newlyDrawnCardIds:[],gameLogs:[],discardPile:[],mulliganCards:[],mulliganSelected:[],mulliganFirstPlayer:1,mulliganDone:0,p2MulliganCards:[],p2MulliganSelected:[],skipFirstDraw:!1,online:{isOnline:!1,playerId:"",playerNickname:"",currentRoom:null,messages:[],playerReady:[],localDeckImport:null,remoteDeckImports:{},battlePlayers:[],isSpectator:!1,spectatorViewPlayerId:"",diceRolls:[],firstPlayerId:"",lastLoserId:"",rematchRequested:[],isWaitingForGameState:!1,heroSelections:{}}}},la=E=>({...E,phase:"setup"}),da=E=>({...E,phase:"robotSetup"}),ca=(E,e,s)=>{const a=Ye(E.groups[0].cards.filter(h=>h.card.type!=="hero")),r=a.length>0?Ve(a):[];let i=[];if(s){const h=Je(E,s);h&&h.id!==Le&&(i=Ye(h.cards.filter(f=>f.card.type!=="hero")))}const n=i.length>0?Ve(i):[],t=Ve([...i]),l=[],o=2,d={id:Ee(),name:"🤖 Robot",type:"hero",cost:0,attack:0,health:0,maxHealth:0,keywords:[],imageData:"/robot-hero.png",skills:[{id:1,name:"芯片强化",type:"active",cost:1,cooldown:2,iconData:"/robot-skill.png",description:"对选择随从+1/+1",effects:[{moment:"打出时",targets:["选择随从"],effect:"属性变化",value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0,isAttackSet:!1,isHealthSet:!1,isCostPositive:!0,isCostSet:!1,costValue:0,triggerNumbers:[1,2,3,4,5,6],randomTargetTimes:1}]}],heroSpeech:{greeting:"你好！",apology:"抱歉。",taunt:"吁，Loser！",exclamation:"Awww man！",pity:"aww...",flirt:"我喜欢你。",voiceType:"female"}},p={phase:"mulligan",soundEffects:[],pendingVisualEffects:[],pendingSpeechEvents:[],currentPlayerId:1,turnNumber:1,players:[{...Oe(1),name:e||"玩家",deck:t,hand:[],energy:1,maxEnergy:1,heroCard:s||null,personalBattleDeck:n},{...Oe(2),name:"🤖 Robot",deck:l,hand:[],health:40,maxHealth:40,energy:1,maxEnergy:1,heroCard:d,personalBattleDeck:[]}],winner:null,sharedDeck:E.sharedDeck,heroCards:E.heroCards||[],heroCard:null,groups:E.groups,publicBattleDeck:r,waitingForNextPlayer:!1,newlyDrawnCardIds:[],gameLogs:E.gameLogs||[],discardPile:[],online:E.online,mulliganCards:[],mulliganSelected:[],mulliganFirstPlayer:1,mulliganDone:0,p2MulliganCards:[],p2MulliganSelected:[],skipFirstDraw:!0};for(let h=0;h<3;h++)it(p,o);const c=[];for(let h=0;h<4;h++){const f=Ge(p,1,!1);f&&c.push(f)}return p.mulliganCards=c,p.newlyDrawnCardIds=c.map(h=>h.id),p},Wt=(E,e)=>{let s=E;const a=e-1,r=[...s.players[a].board];for(const t of r)if(t.pendingNextTurnEffect&&t.pendingNextTurnEffectOwnerId===e){if(!s.players[a].board.some(p=>p.id===t.id)){const p=s.players[a].board.findIndex(c=>c.id===t.id);p!==-1&&(s.players[a].board[p].pendingNextTurnEffect=void 0,s.players[a].board[p].pendingNextTurnEffectOwnerId=void 0);continue}s=Ae(s,[t.pendingNextTurnEffect],e,t.name,"下回合开始时",{targetMinion:t,attackerMinion:t,sourceCard:t});const d=s.players[a].board.findIndex(p=>p.id===t.id);d!==-1&&(s.players[a].board[d].pendingNextTurnEffect=void 0,s.players[a].board[d].pendingNextTurnEffectOwnerId=void 0)}const i=s.players[a],n=i.pendingSpellNextTurnEffects||[];if(n.length>0){console.log('[processNextTurnEffects] 处理法术牌"下回合开始时"效果:',n.length,"个");for(const t of n)s=Ae(s,[t.effect],e,"法术效果","下回合开始时",{sourceCard:t.sourceCard});s.players[a]={...i,pendingSpellNextTurnEffects:[]}}return s},ha=E=>{const e=E.currentPlayerId-1,s=E.currentPlayerId,a=E.currentPlayerId===1?2:1,r=a-1,i=E.players[e],n={...i,energy:0},t=i.board;let l={...E,players:E.players.map((m,y)=>y===e?n:m)};for(const m of t){const x=(m.effects||(m.effect?[m.effect]:[])).filter(v=>be(v,"回合结束时")&&v.effect);x.length>0&&(l=Ae(l,x,s,m.name,"回合结束时",{targetMinion:m,attackerMinion:m,sourceCard:m}))}const o=s-1;l.players[o]={...l.players[o],board:l.players[o].board.map(m=>{const x=m.keywords.some(v=>v.name==="冲锋")?m.keywords.filter(v=>v.name!=="冲锋"):m.keywords;return{...m,keywords:x,playedThisTurn:!1}})},l.players[o]={...l.players[o],board:l.players[o].board.map(m=>{const y=m.keywords.some(x=>x.name==="不动");if(m.preparation>0){const x=m.preparation-1;return{...m,preparation:x,canAttack:y?!1:x===0&&!Ue(m)?!0:m.canAttack,canAttackHeroes:y?!1:x===0&&!Ue(m)?!ke(m,"暴虐"):m.canAttackHeroes,canAttackMinions:y?!1:x===0&&!Ue(m)?!ke(m,"斩首"):m.canAttackMinions}}return m})},l.players[o]={...l.players[o],heroMarkCount:0};const d=m=>{const y=m.heroCard?.skills?.map(x=>{const v=x.remainingCooldown??0,C=Math.max(0,v-1);return{...x,remainingCooldown:C}});return{...m,heroCard:m.heroCard?{...m.heroCard,skills:y}:void 0}};l={...l,players:l.players.map(d)},l.players[r];const p=l.currentPlayerId===1?l.turnNumber+1:l.turnNumber;let c={...l,currentPlayerId:a,turnNumber:p,waitingForNextPlayer:!1,newlyDrawnCardIds:[]};const h=Math.min(10,p),f=c.players[r];c.players[r]={...f,maxEnergy:h,energy:h,heroSkillUsed:f.heroCard?.skills?.map(()=>!1),board:f.board.map(m=>{const y=m.keywords.some(x=>x.name==="不动");return m.keywords.some(x=>x.name==="嘲讽"),{...m,keywords:m.keywords.filter(x=>x.name!=="嘲讽"),playedThisTurn:!1,canAttack:y?!1:!(m.preparation>0),hasAttacked:!1,attacksThisTurn:0,canAttackHeroes:y||m.preparation>0?!1:!ke(m,"暴虐"),canAttackMinions:y||m.preparation>0?!1:!ke(m,"斩首"),isDefending:!1}})};const u=c.players[e].heroCard;if(u&&u.skills)for(let m=0;m<u.skills.length;m++){const y=u.skills[m];if(y.type!=="passive")continue;const v=(y.effects||(y.effect?[y.effect]:[])).filter(C=>be(C,"回合结束时")&&C.effect);v.length>0&&(c=Ae(c,v,s,`${c.players[e].name}的被动【${y.name}】`,"回合结束时",{sourceCard:u}))}if(a===1&&p===1){const m={...xt(),id:Ee()};c.players[r].hand.push(m),c.newlyDrawnCardIds.push(m.id)}return c=(m=>{let y=m;const x=[...y.players[r].board];for(const v of x){if(!y.players[r].board.some(P=>P.id===v.id))continue;const w=(v.effects||(v.effect?[v.effect]:[])).filter(P=>be(P,"回合开始时")&&P.effect);w.length>0&&(y=Ae(y,w,a,v.name,"回合开始时",{targetMinion:v,attackerMinion:v,sourceCard:v}))}return y})(c),c=Wt(c,a),c.phase="robotBattle",p>1&&it(c,a),c},ua=(E,e,s,a,r)=>{const i=Ye(E.groups[0].cards.filter(u=>u.card.type!=="hero")),n=i.length>0?Ve(i):[];let t=[];if(a){const u=Je(E,a);u&&u.id!==Le&&(t=Ye(u.cards.filter(b=>b.card.type!=="hero")))}const l=t.length>0?Ve(t):[];let o=[];if(r){const u=Je(E,r);u&&u.id!==Le&&(o=Ye(u.cards.filter(b=>b.card.type!=="hero")))}const d=o.length>0?Ve(o):[],p=Ve([...t]),c=Ve([...o]),h={phase:"mulligan",soundEffects:[],turnNumber:1,players:[{...Oe(1),name:e||"玩家1",deck:p,energy:1,maxEnergy:1,heroCard:$t(a),personalBattleDeck:l},{...Oe(2),name:s||"玩家2",deck:c,energy:1,maxEnergy:1,heroCard:$t(r),personalBattleDeck:d}],winner:null,sharedDeck:E.sharedDeck,heroCards:E.heroCards||[],heroCard:null,groups:E.groups,publicBattleDeck:n,waitingForNextPlayer:!1,newlyDrawnCardIds:[],gameLogs:[],discardPile:[],currentPlayerId:1,mulliganCards:[],mulliganSelected:[],mulliganFirstPlayer:1,mulliganDone:0,p2MulliganCards:[],p2MulliganSelected:[],skipFirstDraw:!1,online:E.online,pendingVisualEffects:[],pendingSpeechEvents:[]},f=[];for(let u=0;u<3;u++){const b=Ge(h,1,!1);b&&f.push(b)}return h.mulliganCards=f,h.newlyDrawnCardIds=f.map(u=>u.id),h},Ge=(E,e,s=!0)=>{const a=e-1,r=E.players[a],i=r.halfPublicDeck&&r.halfPublicDeck.length>0,n=i?r.halfPublicDeck:E.publicBattleDeck||[],t=r.personalBattleDeck||[],l=n.length,o=t.length,d=l+o;if(d===0){if(r.deck&&r.deck.length>0){const c={...r.deck[0],id:Ee()},h=r.deck.slice(1);return E.players[a]={...r,deck:h,hand:s?[...r.hand,c]:r.hand},E.newlyDrawnCardIds=[...E.newlyDrawnCardIds,c.id],c}return E.players[a]={...r,health:r.health-1},null}let p;if(o===0?p=!0:l===0?p=!1:p=Math.random()<l/d,p){const c={...n[0],id:Ee()};return i?E.players[a]={...r,halfPublicDeck:n.slice(1),personalBattleDeck:t,hand:s?[...r.hand,c]:r.hand}:(E.publicBattleDeck=n.slice(1),E.players[a]={...r,personalBattleDeck:t,hand:s?[...r.hand,c]:r.hand}),E.newlyDrawnCardIds=[...E.newlyDrawnCardIds,c.id],c}else{const c={...t[0],id:Ee()};return E.players[a]={...r,halfPublicDeck:i?n:r.halfPublicDeck,personalBattleDeck:t.slice(1),hand:s?[...r.hand,c]:r.hand},E.newlyDrawnCardIds=[...E.newlyDrawnCardIds,c.id],c}},it=(E,e)=>{Ge(E,e)},fa=(E,e)=>{const s={...E},a=e-1,r=s.players[a];if(r.deck&&r.deck.length>0){const i={...r.deck[0],id:Ee()},n=r.deck.slice(1);return s.players[a]={...r,deck:n,hand:[...r.hand,i]},s.newlyDrawnCardIds=[...s.newlyDrawnCardIds,i.id],fe(s,e,"draw_card",`${s.players[a].name} 抽了 1 张牌`)}else return s.players[a]={...r,health:r.health-1},fe(s,e,"damage",`${s.players[a].name} 疲劳受伤 1 点`)},Yt=(E,e,s)=>{const a=e-1,r=E.players[a],i=r.hand.findIndex($=>$.id===s);if(i===-1)return E;const n=r.hand[i];if(r.energy<n.cost)return E;const t={...E,newlyDrawnCardIds:[]};if(t.players=[...E.players],n.type==="spell"){console.log("[playCard] 处理法术卡:",n.name,"legacyEffect:",n.legacyEffect,"effects:",n.effects);const{newEnergy:$,newBonusEnergy:L}=rt(r.energy,r.bonusEnergy||0,n.cost);let T=$,H=L;console.log("[playCard] 初始能量:",r.energy,"绿色能量:",r.bonusEnergy,"费用:",n.cost,"扣除后:",T,"剩余绿色:",H),n.legacyEffect==="gain_energy"&&n.legacyEffectValue&&(T=T+n.legacyEffectValue,H+=n.legacyEffectValue,console.log("[playCard] legacyEffect获得能量:",n.legacyEffectValue,"总bonusEnergy:",H)),t.players[a]={...r,energy:T,bonusEnergy:H,hand:r.hand.filter((ie,U)=>U!==i)},t.discardPile=[n,...t.discardPile];const Z=n.effects||[];let j=t;const ee=Z.filter(ie=>be(ie,"下回合开始时")&&ie.effect);if(ee.length>0){const ie=j.players[a],U=ie.pendingSpellNextTurnEffects||[];j.players[a]={...ie,pendingSpellNextTurnEffects:[...U,...ee.map(W=>({effect:W,sourceCard:n}))]},console.log('[playCard] 暂存"下回合开始时"效果:',n.name,ee)}const Y=Z.filter(ie=>!be(ie,"下回合开始时"));for(const ie of Y)if(ie.effect)if(ie.effect==="获得能量"&&ie.value){const U=j.players[a];j.players[a]={...U,energy:U.energy+ie.value,bonusEnergy:(U.bonusEnergy||0)+ie.value},console.log("[playCard] effects获得能量:",ie.value)}else if(ie.effect==="失去能量"&&ie.value){const U=j.players[a],W=Math.min(ie.value,U.energy);j.players[a]={...U,energy:U.energy-W},console.log("[playCard] effects失去能量:",W)}else{const U=ie.targets||[];U.includes("选择目标")||U.includes("选择随从")||(j=Ae(j,[ie],e,n.name,"打出时",{sourceCard:n}),console.log("[playCard] 执行效果:",ie.effect,"目标:",U))}return j=fe(j,e,"play_card",`${j.players[a].name} 打出 ${n.name}（法术）`),j}const l=ke(n,"嘲讽"),o=ke(n,"连击"),d=ke(n,"圣盾"),p=n.keywords.find($=>$.name==="准备"),c=p?p.value??1:0,h=ke(n,"暴虐"),f=ke(n,"斩首");ke(n,"机动");const u=ke(n,"冲锋"),b=ke(n,"不动"),m=u&&!l&&!b&&c===0,y={...n,canAttack:b?!1:m,hasAttacked:!1,attacksThisTurn:0,maxAttacksPerTurn:o?2:1,divineShieldActive:d,canAttackHeroes:b?!1:m&&!h,canAttackMinions:b?!1:m&&!f,playedThisTurn:!0,isDefending:b?!1:l,preparation:c},v=(n.effects||(n.effect?[n.effect]:[])).find($=>be($,"下回合开始时")&&$.effect);v&&(y.pendingNextTurnEffect=v,y.pendingNextTurnEffectOwnerId=e);const C=t.players[a],g=C.hand.filter(($,L)=>L!==i),{newEnergy:k,newBonusEnergy:w}=rt(C.energy,C.bonusEnergy||0,n.cost);t.players[a]={...C,energy:k,bonusEnergy:w,hand:g,board:[...C.board,y]};const M=(n.effects||(n.effect?[n.effect]:[])).filter($=>be($,"打出时")&&$.effect);let R=fe(t,e,"play_card",`${t.players[a].name} 打出 ${n.name}（${n.attack}/${n.health}）`);if(M.length>0){console.log("触发打出时效果:",n.name,M);for(const $ of M){const L=$.targets||[];L.includes("选择目标")||L.includes("选择随从")||(R=Ae(R,[$],e,n.name,"打出时",{excludeMinionId:y.id,sourceCard:y,attackerMinion:y}))}}return R},pa=(E,e,s,a,r)=>{const i=e-1,n=E.players[i],t=n.heroCard;if(!t||!t.skills||s<0||s>=t.skills.length)return E;const l=t.skills[s],o=l.effects||(l.effect?[l.effect]:[]);if(o.length===0||o.every(g=>!g.effect)||n.energy<(l.cost??0))return E;const d=n.heroSkillUsed||[];if(d[s]||(l.remainingCooldown??0)>0)return E;const c=l.usesLeft??(l.limited?l.maxUses:void 0);if(l.limited&&(c===void 0||c<=0))return E;const{newEnergy:h,newBonusEnergy:f}=rt(n.energy,n.bonusEnergy||0,l.cost??0);let u={...E,players:[...E.players]};const b=[...d];b[s]=!0;const m=l.cooldown??0,y=m>0?m*2+1:0,x=l.limited&&c!==void 0?c-1:void 0,v=t.skills.map((g,k)=>k===s?{...g,remainingCooldown:y,usesLeft:x}:g);u.players[i]={...n,energy:h,bonusEnergy:f,heroSkillUsed:b,heroCard:{...t,skills:v}};const C=o.filter(g=>be(g,"打出时")&&g.effect);for(const g of C){const k=g.targets||[];if(!(k.includes("选择目标")||k.includes("选择随从")))u=Ae(u,[g],e,`技能「${l.name}」`,"打出时",{sourceCard:t});else if(a!==void 0){let P={};if(r!==void 0){const M=a-1,R=u.players[M].board.find($=>$.id===r);P={targetPlayerId:a,targetCardId:r,targetMinion:R,sourceCard:t}}else P={targetPlayerId:a,sourceCard:t};u=Ae(u,[g],e,`技能「${l.name}」`,"打出时",P)}}return u=fe(u,e,"play_card",`${n.name} 发动技能「${l.name}」`),u},ga=(E,e,s,a,r)=>{const i=e-1,n=E.players[i].hand.find(h=>h.id===s);if(!n)return E;let t=E;if(n.type==="spell"?t=fe(E,e,"play_card",`${E.players[i].name} 打出 ${n.name}（法术）`):t=fe(E,e,"play_card",`${E.players[i].name} 打出 ${n.name}（${n.attack}/${n.health}）`),n.type==="spell"){const h=t.players[i],{newEnergy:f,newBonusEnergy:u}=rt(h.energy,h.bonusEnergy||0,n.cost);let b={...t,players:[...t.players]};b.players[i]={...h,energy:f,bonusEnergy:u,hand:h.hand.filter(v=>v.id!==s)},b.discardPile=[n,...b.discardPile];const m=n.effects||[],y=m.filter(v=>be(v,"下回合开始时")&&v.effect);if(y.length>0){const v=b.players[i],C=v.pendingSpellNextTurnEffects||[];b.players[i]={...v,pendingSpellNextTurnEffects:[...C,...y.map(g=>({effect:g,sourceCard:n}))]},console.log('[playCardWithTarget] 暂存"下回合开始时"效果:',n.name,y)}const x=m.filter(v=>!be(v,"下回合开始时"));for(const v of x){if(!v.effect)continue;let C;if(r!==void 0){const g=a-1,k=t.players[g].board.find(w=>w.id===r);C={targetPlayerId:a,targetCardId:r,targetMinion:k}}else C={targetPlayerId:a};if(b=Ae(b,[v],e,n.name,"打出时",{...C,sourceCard:n}),v.effect==="造成伤害"){const g=v.value||1,k=a-1,w=b.players[k];if(r!==void 0){const P=w.board.find(M=>M.id===r);P&&(b=fe(b,e,"damage",`${n.name} 对 ${P.name} 造成 ${g} 点伤害`))}else b=fe(b,e,"damage",`${n.name} 对 ${w.name} 造成 ${g} 点伤害`)}}return b}const l=Yt(t,e,s),o=l.players[i],d=o.board[o.board.length-1];if(!d)return l;const p=n.effects||(n.effect?[n.effect]:[]);if(p.length===0)return l;let c=l;for(const h of p)if(be(h,"打出时"))if(h.effect==="造成伤害"){const f=h.value||1,u=h.elementType;if(r!==void 0){const b=a-1,m=c.players[b].board.findIndex(y=>y.id===r);if(m!==-1){c={...c},c.players=[...c.players];let y={...c.players[b]};y.board=[...y.board];const x=y.board[m];if(y.board[m]=_e(x,f),c.players[b]=y,u){const P=y.board.findIndex(M=>M.id===r&&M.health>0);if(P!==-1){const M=Be(c,"minion",b,P,f,u,e);if(c=M.state,M.triggered&&M.extraDamage&&u==="fire"){const R=c.players[b],$=R.board[P];if($&&$.health>0){const L=_e($,M.extraDamage),T={...R,board:[...R.board]};T.board[P]=L;const H=[...c.players];H[b]=T,c={...c,players:H}}}y={...c.players[b]}}}const v=y.board[m],C=(v.effects||[]).filter(P=>be(P,"失去生命时")&&P.effect);for(const P of C)c=Ce(c,P,b+1,{sourceCard:v,attackerMinion:v}),c={...c},c.players=[...c.players],y={...c.players[b]};if(c=fe(c,e,"damage",`${d.name} 对 ${x.name} 造成 ${f} 点伤害`),y.board[m]?.health<=0&&u&&!x.elementStatus){const P=c.players[b].board;if(m>0){const M=P[m-1];if(M&&M.health>0){const R={...c.players[b]};R.board=[...R.board],R.board[m-1]={...R.board[m-1],elementStatus:{type:u,sourcePlayerId:e}};const $=[...c.players];$[b]=R,c={...c,players:$}}}if(m<P.length-1){const M=P[m+1];if(M&&M.health>0){const R={...c.players[b]};R.board=[...R.board],R.board[m+1]={...R.board[m+1],elementStatus:{type:u,sourcePlayerId:e}};const $=[...c.players];$[b]=R,c={...c,players:$}}}y={...c.players[b]}}const w=y.board.filter(P=>P.health<=0).map(P=>({...P,health:P.maxHealth}));y.board=y.board.filter(P=>P.health>0),c.discardPile=[...w,...c.discardPile],c.players[b]=y}}else{const b=a-1;c={...c},c.players=[...c.players];const m={...c.players[b]};if(m.health-=f,c=fe(c,e,"damage",`${d.name} 对 ${m.name} 造成 ${f} 点伤害`),c.players[b]=m,u){const g=Be(c,"hero",b,void 0,f,u,e);c=g.state;for(const k of g.logMessages)c=fe(c,e,"element",k);if(g.triggered&&g.extraDamage&&u==="fire"){const k={...c.players[b]};k.health-=g.extraDamage,c.players[b]=k}if(g.triggered&&g.extraDamageIsLightning){const k=g.extraDamage,w=c.players[b],P=w.board.filter(R=>R.health>0),M=[];if(P.forEach(R=>M.push({type:"minion",idx:w.board.indexOf(R)})),w.health>0&&M.push({type:"hero",idx:-1}),M.length>0){const R=M[Math.floor(Math.random()*M.length)];if(R.type==="hero"){const $={...c.players[b]};$.health-=k,c.players[b]=$}else{const $={...w};$.board=[...$.board];const L=_e($.board[R.idx],k);if($.board[R.idx]=L,L.health<=0){const T={...L,health:L.maxHealth};$.board=$.board.filter(H=>H.id!==L.id),c.discardPile=[T,...c.discardPile],c=fe(c,c.players[b].id,"element",`💀${L.name}被电击消灭`)}c.players[b]=$}}}}const y=m.id,x=y-1,v=c.players[x].heroCard,C=v?.skills||[];for(let g=0;g<C.length;g++){const k=C[g];if(k.type!=="passive")continue;const P=(k.effects||(k.effect?[k.effect]:[])).filter(M=>be(M,"受伤时")&&M.effect);if(P.length>0&&v){c=fe(c,y,"hero_skill",`${c.players[x].name} 的被动技能【${k.name}】触发`);for(const M of P)c=Ce(c,M,y,{sourceCard:v})}}c=je(c)}}else if(h.effect==="属性变化"){const f=h.attackValue??0,u=h.healthValue??0;if(r!==void 0){const b=a-1;c={...c},c.players=[...c.players];const m={...c.players[b]};m.board=[...m.board];const y=m.board.findIndex(x=>x.id===r);if(y!==-1){const x=m.board[y],v=h.isAttackSet?f-x.attack:h.isAttackPositive?f:-f,C=h.isHealthSet?u-x.health:h.isHealthPositive?u:-u,g=Math.max(0,x.attack+v),k=x.health+C,w=x.maxHealth+C;m.board[y]={...x,attack:g,health:k,maxHealth:Math.max(1,w)};const P=h.isAttackSet?"=":v>=0?"+":"",M=h.isHealthSet?"=":C>=0?"+":"";if(c=fe(c,e,"minion_skill",`${d.name} 使 ${x.name} 属性变为${P}${h.isAttackSet?f:v}/${M}${h.isHealthSet?u:C}`),k<=0){const $=m.board.filter(L=>L.health<=0).map(L=>({...L,health:L.maxHealth}));m.board=m.board.filter(L=>L.health>0),c.discardPile=[...$,...c.discardPile]}c.players[b]=m}}}else{const f=a-1,u=r!==void 0?c.players[f].board.find(b=>b.id===r):void 0;c=Ce(c,h,e,{targetPlayerId:a,targetCardId:r,targetMinion:u,attackerMinion:d,sourceCard:d})}return c},ma=(E,e,s,a,r)=>{console.log("[executePlayedMinionEffect] 开始执行, playerId:",e,"targetPlayerId:",a,"targetCardId:",r);const i=e-1,n=E.players[i],t=n.board[n.board.length-1];if(!t)return console.log("[executePlayedMinionEffect] 未找到打出的随从"),E;const o=(t.effects||(t.effect?[t.effect]:[])).filter(p=>be(p,"打出时")&&p.effect);if(console.log("[executePlayedMinionEffect] playedMinion:",t.name,"playEffects:",o),o.length===0)return console.log("[executePlayedMinionEffect] 没有打出时效果"),E;let d=E;for(const p of o){console.log("[executePlayedMinionEffect] 处理效果:",p.effect,"targets:",p.targets);const c=a-1,h=d.players[c],f=r!==void 0?h.board.find(b=>b.id===r):null;console.log("[executePlayedMinionEffect] targetMinion:",f?.name);const u=f?{targetPlayerId:a,targetCardId:r,targetMinion:f}:{targetPlayerId:a};d=Ae(d,[p],e,t.name,"打出时",{...u,sourceCard:t}),console.log("[executePlayedMinionEffect] 效果执行完成")}return d},Ue=E=>E.keywords.some(e=>e.name==="嘲讽"),qt=E=>E.isDefending||Ue(E),Kt=E=>E.some(e=>qt(e)),ya=E=>!(!E.canAttack||E.attacksThisTurn>=E.maxAttacksPerTurn||E.keywords.some(e=>e.name==="连击"||e.name==="狂怒")||E.isDefending||E.keywords.some(e=>e.name==="不动")),ba=(E,e)=>{if(ke(E,"护甲")){const s=E.armorValue||1;return Math.max(0,e-s)}return e},_e=(E,e)=>{if(E.divineShieldActive&&e>0)return{...E,divineShieldActive:!1};const s=ba(E,e);return{...E,health:E.health-s}},Be=(E,e,s,a,r,i,n)=>{let t=E;const l=[],o=bt[i],d=Ft[i],p=()=>e==="minion"&&a!==void 0?t.players[s].board[a]?.elementStatus:t.players[s].elementStatus,c=f=>{if(e==="minion"&&a!==void 0){const u={...t.players[s]};u.board=[...u.board],u.board[a]={...u.board[a],elementStatus:f};const b=[...t.players];b[s]=u,t={...t,players:b}}else{const u={...t.players[s],elementStatus:f},b=[...t.players];b[s]=u,t={...t,players:b}}},h=p();if(!h){c({type:i,sourcePlayerId:n});const f=e==="minion"&&a!==void 0?t.players[s].board[a]?.name||"随从":t.players[s].name||"英雄";return console.log("[processElementOnTarget] 叠加元素状态:",f,"类型:",i,"targetType:",e,"minionIndex:",a),l.push(`${f} 被叠加了${o}${d}状态`),{state:t,triggered:!1,elementType:i,logMessages:l}}if(h.type===i){c(void 0);const f=e==="minion"&&a!==void 0?t.players[s].board[a]?.name||"随从":t.players[s].name||"英雄";if(i==="fire"){const u=Math.ceil(r*.5);if(l.push(`${o} ${f} 的${d}状态触发！额外受到 ${u} 点伤害`),e==="minion"&&a!==void 0){const b=t.players[s].board[a];b&&(t={...t,pendingVisualEffects:[...t.pendingVisualEffects||[],{type:"fire_explosion",targetMinionId:b.id,targetPlayerId:t.players[s].id,targetType:"minion"}]})}else e==="hero"&&(t={...t,pendingVisualEffects:[...t.pendingVisualEffects||[],{type:"fire_explosion",targetPlayerId:t.players[s].id,targetType:"hero"}]});return{state:t,triggered:!0,elementType:i,extraDamage:u,logMessages:l}}else if(i==="ice"){if(l.push(`${o} ${f} 的${d}状态触发！`),e==="minion"&&a!==void 0){const u={...t.players[s]};u.board=[...u.board],u.board[a]={...u.board[a],frozen:!0};const b=[...t.players];b[s]=u,t={...t,players:b},l.push(`${f} 被冰冻，下回合无法行动`);const m=t.players[s].board[a];t={...t,pendingVisualEffects:[...t.pendingVisualEffects||[],{type:"ice_explosion",targetMinionId:m.id,targetPlayerId:t.players[s].id,targetType:"minion"}]}}else{const u={...t.players[s]};u.frozen=!0;const b=[...t.players];b[s]=u,t={...t,players:b},l.push(`${f} 被冰冻，下回合开始时失去20%能量`),t={...t,pendingVisualEffects:[...t.pendingVisualEffects||[],{type:"ice_explosion",targetPlayerId:t.players[s].id,targetType:"hero"}]}}return{state:t,triggered:!0,elementType:i,logMessages:l}}else if(i==="lightning"){const u=Math.ceil(r*.5);return l.push(`${o} ${f} 的${d}状态触发！`),{state:t,triggered:!0,elementType:i,extraDamage:u,extraDamageIsLightning:!0,logMessages:l}}return{state:t,triggered:!1,elementType:i,logMessages:l}}else{const f=bt[h.type];c({type:i,sourcePlayerId:n});const u=e==="minion"&&a!==void 0?t.players[s].board[a]?.name||"随从":t.players[s].name||"英雄";return l.push(`${u} 的${f}状态被${o}覆盖`),{state:t,triggered:!1,elementType:i,logMessages:l}}},He=(E,e,s)=>{switch(e){case"<":return E<s;case"=":return E===s;case">":return E>s;case"<=":return E<=s;case">=":return E>=s;default:return E===s}},Ke=E=>E==="<="?"≤":E===">="?"≥":E,ot=(E,e,s,a)=>{const r=E.conditionType||(!E.triggerNumbers||E.triggerNumbers.length===6?"guaranteed":"d6");if(r==="guaranteed")return{passed:!0,logMessage:""};if(r==="d6"){if(E.triggerNumbers&&E.triggerNumbers.length>0&&E.triggerNumbers.length<6){const l=Math.floor(Math.random()*6)+1,o=E.triggerNumbers.includes(l);return{passed:o,logMessage:`🎲D6=${l}${o?"✅️":"❌️"} [${E.triggerNumbers.join(",")}]`}}return{passed:!0,logMessage:""}}const i=s===1?2:1,n=e.players[s-1],t=e.players[i-1];if(r==="hero_hp"){const l=E.conditionSides||["friendly"],o=E.conditionOperator||"=",d=E.conditionValue??0,p=E.conditionSideLogic||"and",c=Ke(o),h=[];if(l.includes("friendly")){const m=n.heroCard?.health??n.health;h.push({label:"我方",hp:m,passed:He(m,o,d)})}if(l.includes("enemy")){const m=t.health;h.push({label:"敌方",hp:m,passed:He(m,o,d)})}const f=p==="and"?h.every(m=>m.passed):h.some(m=>m.passed),u=l.includes("friendly")&&l.includes("enemy")?"双方":h[0]?.label||"",b=h.map(m=>`${m.label}${m.hp}${c}${d}`);return{passed:f,logMessage:`判断${u}英雄血量 ${b.join(p==="and"?"且":"或")}${f?"✅️":"❌️"}`}}if(r==="minion_count"){const l=E.conditionSides||["friendly"],o=E.conditionOperator||"=",d=E.conditionValue??0,p=E.conditionSideLogic||"and",c=Ke(o),h=[];if(l.includes("friendly")){const m=n.board.length;h.push({label:"我方",count:m,passed:He(m,o,d)})}if(l.includes("enemy")){const m=t.board.length;h.push({label:"敌方",count:m,passed:He(m,o,d)})}const f=p==="and"?h.every(m=>m.passed):h.some(m=>m.passed),u=l.includes("friendly")&&l.includes("enemy")?"双方":h[0]?.label||"",b=h.map(m=>`${m.label}${m.count}${c}${d}`);return{passed:f,logMessage:`判断${u}随从数 ${b.join(p==="and"?"且":"或")}${f?"✅️":"❌️"}`}}if(r==="hand_count"){const l=E.conditionSides||["friendly"],o=E.conditionOperator||"=",d=E.conditionValue??0,p=E.conditionSideLogic||"and",c=Ke(o),h=[];if(l.includes("friendly")){const m=n.hand.length;h.push({label:"我方",count:m,passed:He(m,o,d)})}if(l.includes("enemy")){const m=t.hand.length;h.push({label:"敌方",count:m,passed:He(m,o,d)})}const f=p==="and"?h.every(m=>m.passed):h.some(m=>m.passed),u=l.includes("friendly")&&l.includes("enemy")?"双方":h[0]?.label||"",b=h.map(m=>`${m.label}${m.count}${c}${d}`);return{passed:f,logMessage:`判断${u}手牌数 ${b.join(p==="and"?"且":"或")}${f?"✅️":"❌️"}`}}if(r==="exists_minion"){const l=E.conditionSides||["friendly"],o=E.conditionSideLogic||"and",d=E.conditionMinionCheckName??!1,p=E.conditionMinionName?.trim(),c=E.conditionMinionAttrs,h={cost:"能量花费",attack:"攻击力",health:"生命值"},f={cost:k=>k.cost,attack:k=>k.attack,health:k=>k.health},u=[];if(d&&p&&u.push(`名称为「${p}」`),c)for(const k of["cost","attack","health"]){const w=c[k];w?.enabled&&u.push(`${h[k]}${Ke(w.operator||"=")}${w.value}`)}const b=u.length>0?u.join("且"):"",m=[];if(d&&p&&m.push(k=>k.name===p),c)for(const k of["cost","attack","health"]){const w=c[k];w?.enabled&&m.push(P=>He(f[k](P),w.operator||"=",w.value))}if(m.length===0)return{passed:!0,logMessage:""};const y=k=>k.board.some(w=>m.every(P=>P(w))),x={friendly:"我方",enemy:"敌方"},v=[];for(const k of l){const w=k==="friendly"?n:t;v.push({label:x[k],found:y(w)})}let C,g=[];if(v.length===1){const k=v[0];C=k.found;const w=k.found?"存在":"不存在";g.push(`${k.label}${w}${b?"的":""}${b}随从`)}else{C=o==="and"?v.every(k=>k.found):v.some(k=>k.found);for(const k of v){const w=k.found?"存在":"不存在";g.push(`${k.label}${w}${b?"的":""}${b}随从`)}o==="and"?g=[g.join("且")]:g=[g.join("或")]}return{passed:C,logMessage:`存在随从检查：${g.join("，")}${C?"✅":"❌"}`}}if(r==="target_attr"){const l=E.conditionTargetAttrs;if(!l)return{passed:!0,logMessage:""};const o=a?.targetMinion;if(!o)return{passed:!1,logMessage:"判断目标属性：无目标❌️"};const d={cost:"能量花费",attack:"攻击力",health:"生命值"},p={cost:f=>f.cost,attack:f=>f.attack,health:f=>f.health},c=[];for(const f of["cost","attack","health"]){const u=l[f];if(u?.enabled){const b=p[f](o),m=He(b,u.operator||"=",u.value);c.push({label:`${d[f]}${b}${Ke(u.operator||"=")}${u.value}`,passed:m})}}if(c.length===0)return{passed:!0,logMessage:""};const h=c.every(f=>f.passed);return{passed:h,logMessage:`判断目标${c.map(f=>f.label).join("且")}${h?"✅️":"❌️"}`}}return{passed:!0,logMessage:""}},tt=(E,e,s)=>{const a=E.conditionSides||["friendly"];E.conditionSideLogic;const r=E.conditionMinionCheckName??!1,i=E.conditionMinionName?.trim(),n=E.conditionMinionAttrs,t=s-1,l=s===1?1:0,o=e.players[t],d=e.players[l],p={cost:f=>f.cost,attack:f=>f.attack,health:f=>f.health},c=[];if(r&&i&&c.push(f=>f.name===i),n)for(const f of["cost","attack","health"]){const u=n[f];u?.enabled&&c.push(b=>He(p[f](b),u.operator||"=",u.value))}if(c.length===0)return[];const h=[];for(const f of a){const u=f==="friendly"?o:d,b=f==="friendly"?s:s===1?2:1;for(const m of u.board)m.health>0&&c.every(y=>y(m))&&h.push({minion:m,playerId:b})}return h},Ae=(E,e,s,a,r,i)=>{let n=E;for(const t of e){const l=ot(t,n,s,i);l.passed?(l.logMessage?n=fe(n,s,"condition",`${a} ${l.logMessage} 发动了【${r}】技能`):n=fe(n,s,"minion_skill",`${a} 发动了【${r}】技能`),n=Ce(n,t,s,i)):n=fe(n,s,"condition",`${a} ${l.logMessage} 条件不满足，跳过`)}return n},Ce=(E,e,s,a)=>{if(console.log("[executeEffect] 开始执行效果:",e.effect,"moment:",e.moment,"targets:",e.targets,"ownerPlayerId:",s,"context:",a),e.isOpponent&&(s=s===1?2:1,console.log("[executeEffect] 对手目标，切换ownerPlayerId为:",s)),e.triggerNumbers&&e.triggerNumbers.length>0&&e.triggerNumbers.length<6){const d=Math.floor(Math.random()*6)+1;if(!e.triggerNumbers.includes(d))return fe(E,s,"dice_roll",`🎲 = ${d}❌️ [${e.triggerNumbers.join(",")}]`);E=fe(E,s,"dice_roll",`🎲 = ${d}✅️ [${e.triggerNumbers.join(",")}]`)}if(!e.effect)return console.log("[executeEffect] 效果为空，跳过"),E;const r=s-1,i=s===1?2:1,n=i-1;let t={...E};if(t.players=[...E.players],e.isRandomTarget&&e.randomTargetTimes&&e.randomTargetTimes>1){for(let d=0;d<e.randomTargetTimes;d++){const p={...e,randomTargetTimes:1};t=Ce(t,p,s,a),t={...t},t.players=[...t.players]}return t}if(t.soundEffects=[...E.soundEffects||[]],e.effect==="抽牌"&&(t.sharedDeck=[...E.sharedDeck],t.newlyDrawnCardIds=[...E.newlyDrawnCardIds]),e.effect==="抽牌"){const d=e.value||1;for(let p=0;p<d;p++)it(t,s),t.newlyDrawnCardIds=[...t.newlyDrawnCardIds];return console.log("executeEffect 抽牌完成, 玩家手牌数:",t.players[r].hand.length),t}if(e.effect==="弃牌"){const d=Math.min(e.value||1,t.players[r].hand.length),p=[];for(let c=0;c<d;c++){const h=t.players[r].hand.shift();h&&(p.push(h),console.log(`[executeEffect] 弃牌: ${h.name}`))}return t.discardPile=[...p,...t.discardPile],console.log("executeEffect 弃牌完成, 玩家手牌数:",t.players[r].hand.length),t}let l=e.targets||[];const o=l.some(d=>d.includes("所有"));if(e.isRandomTarget&&(l.length>1||o)){const d=Math.floor(Math.random()*l.length),p=l[d];p.includes("所有")||(t=fe(t,s,"minion_skill",`🎯 随机选择目标: ${p}`)),l=[p]}if(e.effect==="造成伤害"){t.soundEffects.push("wood");const d=e.value||1,p=e.elementType,c=a?.excludeMinionId,h=[];let f=0;const u=(b,m,y,x)=>{if(!p)return{state:b,originalElementStatus:void 0};const C=b.players[y].board[m]?.elementStatus,g=Be(b,"minion",y,m,x,p,s);let k=g.state;if(g.triggered&&g.extraDamage){if(p==="fire"){const w=k.players[y],P=w.board[m];if(P&&P.health>0){const M=_e(P,g.extraDamage);k=fe(k,s,"element",`🔥${P.name}受到了额外的${g.extraDamage}点灼烧伤害`);const R={...w,board:[...w.board]};R.board[m]=M;const $=[...k.players];$[y]=R,k={...k,players:$}}}else if(p==="lightning"){const w=k.players[y],P=w.board.filter(R=>R.health>0),M=[];if(P.forEach(R=>M.push({type:"minion",idx:w.board.indexOf(R)})),w.health>0&&M.push({type:"hero"}),M.length>0){const R=M[Math.floor(Math.random()*M.length)];if(R.type==="minion"){const L=w.board[R.idx],T=_e(L,g.extraDamage);k=fe(k,s,"element",`⚡️${L.name}受到了额外的${g.extraDamage}点电击伤害`);const H={...w,board:[...w.board]};H.board[R.idx]=T;const Z=[...k.players];Z[y]=H,k={...k,players:Z}}else{k=fe(k,s,"element",`⚡️${w.name}受到了额外的${g.extraDamage}点电击伤害`);const L={...w,health:w.health-g.extraDamage},T=[...k.players];T[y]=L,k={...k,players:T}}const $={type:"lightning_explosion",targetPlayerId:w.id,targetType:R.type==="hero"?"hero":"minion"};R.type==="minion"&&($.targetMinionId=w.board[R.idx].id),k={...k,pendingVisualEffects:[...k.pendingVisualEffects||[],$]}}}}return{state:k,originalElementStatus:C}};for(const b of l)if(b==="我方所有随从"){let m={...t.players[r]},y=m.board.filter(g=>!(c&&g.id===c));if(y.length===0&&e.isRandomTarget){if(t=fe(t,s,"minion_skill","🎯 我方无随从，随机目标改为我方英雄"),f++,m.health-=d,t.players[r]=m,p){const g=Be(t,"hero",r,void 0,d,p,s);t=g.state;for(const k of g.logMessages)t=fe(t,s,"element",k);if(g.triggered&&g.extraDamage&&p==="fire"){const k={...t.players[r]};k.health-=g.extraDamage,t.players[r]=k}if(g.triggered&&g.extraDamageIsLightning){const k=g.extraDamage,w=t.players[r],P=w.board.filter(R=>R.health>0),M=[];if(P.forEach(R=>M.push({type:"minion",idx:w.board.indexOf(R)})),w.health>0&&M.push({type:"hero",idx:-1}),M.length>0){const R=M[Math.floor(Math.random()*M.length)];if(R.type==="hero"){const $={...t.players[r]};$.health-=k,t.players[r]=$}else{const $={...w};$.board=[...$.board],$.board[R.idx]=_e($.board[R.idx],k),t.players[r]=$}}}}t=je(t);continue}if(e.isRandomTarget&&y.length>1){const g=Math.floor(Math.random()*y.length),k=y[g];t=fe(t,s,"minion_skill",`🎯 随机选择目标: ${k.name}`),y=[k]}y.forEach(g=>h.push(g.name)),m.board=m.board.map(g=>c&&g.id===c||!y.some(k=>k.id===g.id)?g:_e(g,d)),t.players[r]=m;const x=new Map;if(p)for(const g of y){const k=m.board.findIndex(w=>w.id===g.id&&w.health>0);if(k!==-1){const w=u(t,k,r,d);t=w.state,x.set(g.id,w.originalElementStatus),m={...t.players[r]}}}for(const g of m.board){if(c&&g.id===c)continue;const k=(g.effects||[]).filter(w=>be(w,"失去生命时")&&w.effect);for(const w of k)t=Ce(t,w,s,{sourceCard:g,attackerMinion:g}),t={...t},t.players=[...t.players],m={...t.players[r]}}const v=m.board.filter(g=>g.health<=0);if(p){for(const g of v)if(!x.get(g.id)){const w=m.board.findIndex(P=>P.id===g.id);if(w!==-1){const P=w>0?m.board[w-1]:null,M=w<m.board.length-1?m.board[w+1]:null;if(P&&P.health>0){const R={...t.players[r]};R.board=[...R.board];const $=m.board.findIndex(L=>L.id===P.id);if($!==-1){R.board[$]={...R.board[$],elementStatus:{type:p,sourcePlayerId:s}};const L=[...t.players];L[r]=R,t={...t,players:L}}}if(M&&M.health>0){const R={...t.players[r]};R.board=[...R.board];const $=m.board.findIndex(L=>L.id===M.id);if($!==-1){R.board[$]={...R.board[$],elementStatus:{type:p,sourcePlayerId:s}};const L=[...t.players];L[r]=R,t={...t,players:L}}}}}}m={...t.players[r]},m.board=m.board.filter(g=>g.health>0);const C=v.map(g=>({...g,health:g.maxHealth}));t.discardPile=[...C,...t.discardPile],t.players[r]=m,console.log("[造成伤害-我方所有随从] 死亡随从数量:",v.length);for(const g of v){console.log("[造成伤害-我方所有随从] 检查死亡随从:",g.name);const k=(g.effects||[]).filter(w=>be(w,"死亡时")&&w.effect);console.log("[造成伤害-我方所有随从] 死亡时效果:",k);for(const w of k)t=Ce(t,w,s,{attackerMinion:g,sourceCard:g})}}else if(b==="敌方所有随从"){let m={...t.players[n]},y=[...m.board];if(y.length===0&&e.isRandomTarget){if(t=fe(t,s,"minion_skill","🎯 敌方无随从，随机目标改为敌方英雄"),f++,m.health-=d,t.players[n]=m,p){const g=Be(t,"hero",n,void 0,d,p,s);t=g.state;for(const k of g.logMessages)t=fe(t,s,"element",k);if(g.triggered&&g.extraDamage&&p==="fire"){const k={...t.players[n]};k.health-=g.extraDamage,t.players[n]=k}if(g.triggered&&g.extraDamageIsLightning){const k=g.extraDamage,w=t.players[n],P=w.board.filter(R=>R.health>0),M=[];if(P.forEach(R=>M.push({type:"minion",idx:w.board.indexOf(R)})),w.health>0&&M.push({type:"hero",idx:-1}),M.length>0){const R=M[Math.floor(Math.random()*M.length)];if(R.type==="hero"){const $={...t.players[n]};$.health-=k,t.players[n]=$}else{const $={...w};$.board=[...$.board],$.board[R.idx]=_e($.board[R.idx],k),t.players[n]=$}}}}t=je(t);continue}if(e.isRandomTarget&&y.length>1){const g=Math.floor(Math.random()*y.length),k=y[g];t=fe(t,s,"minion_skill",`🎯 随机选择目标: ${k.name}`),y=[k]}y.forEach(g=>h.push(g.name)),m.board=m.board.map(g=>y.some(k=>k.id===g.id)?_e(g,d):g),t.players[n]=m;const x=new Map;if(p)for(const g of y){const k=m.board.findIndex(w=>w.id===g.id&&w.health>0);if(k!==-1){const w=u(t,k,n,d);t=w.state,x.set(g.id,w.originalElementStatus),m={...t.players[n]}}}for(const g of m.board){const k=(g.effects||[]).filter(w=>be(w,"失去生命时")&&w.effect);for(const w of k)t=Ce(t,w,i,{sourceCard:g,attackerMinion:g}),t={...t},t.players=[...t.players],m={...t.players[n]}}const v=m.board.filter(g=>g.health<=0);if(p){for(const g of v)if(!x.get(g.id)){const w=m.board.findIndex(P=>P.id===g.id);if(w!==-1){const P=w>0?m.board[w-1]:null,M=w<m.board.length-1?m.board[w+1]:null;if(P&&P.health>0){const R={...t.players[n]};R.board=[...R.board];const $=m.board.findIndex(L=>L.id===P.id);if($!==-1){R.board[$]={...R.board[$],elementStatus:{type:p,sourcePlayerId:s}};const L=[...t.players];L[n]=R,t={...t,players:L}}}if(M&&M.health>0){const R={...t.players[n]};R.board=[...R.board];const $=m.board.findIndex(L=>L.id===M.id);if($!==-1){R.board[$]={...R.board[$],elementStatus:{type:p,sourcePlayerId:s}};const L=[...t.players];L[n]=R,t={...t,players:L}}}}}}m={...t.players[n]},m.board=m.board.filter(g=>g.health>0);const C=v.map(g=>({...g,health:g.maxHealth}));t.discardPile=[...C,...t.discardPile],t.players[n]=m,console.log("[造成伤害-敌方所有随从] 死亡随从数量:",v.length);for(const g of v){console.log("[造成伤害-敌方所有随从] 检查死亡随从:",g.name);const k=(g.effects||[]).filter(w=>be(w,"死亡时")&&w.effect);console.log("[造成伤害-敌方所有随从] 死亡时效果:",k);for(const w of k)t=Ce(t,w,i,{attackerMinion:g,sourceCard:g})}}else if(b==="敌方英雄"){const m={...t.players[n]};if(m.health-=d,t.players[n]=m,f++,p){const y=Be(t,"hero",n,void 0,d,p,s);t=y.state;for(const x of y.logMessages)t=fe(t,s,"element",x);if(y.triggered&&y.extraDamage&&p==="fire"){const x={...t.players[n]};x.health-=y.extraDamage,t.players[n]=x}if(y.triggered&&y.extraDamageIsLightning){const x=y.extraDamage,v=t.players[n],C=v.board.filter(k=>k.health>0),g=[];if(C.forEach(k=>g.push({type:"minion",idx:v.board.indexOf(k)})),v.health>0&&g.push({type:"hero",idx:-1}),g.length>0){const k=g[Math.floor(Math.random()*g.length)];if(k.type==="hero"){const w={...t.players[n]};w.health-=x,t.players[n]=w}else{const w={...v};w.board=[...w.board],w.board[k.idx]=_e(w.board[k.idx],x),t.players[n]=w}}}}t=je(t)}else if(b==="我方英雄"){const m={...t.players[r]};if(m.health-=d,t.players[r]=m,f++,p){const y=Be(t,"hero",r,void 0,d,p,s);t=y.state;for(const x of y.logMessages)t=fe(t,s,"element",x);if(y.triggered&&y.extraDamage&&p==="fire"){const x={...t.players[r]};x.health-=y.extraDamage,t.players[r]=x}if(y.triggered&&y.extraDamageIsLightning){const x=y.extraDamage,v=t.players[r],C=v.board.filter(k=>k.health>0),g=[];if(C.forEach(k=>g.push({type:"minion",idx:v.board.indexOf(k)})),v.health>0&&g.push({type:"hero",idx:-1}),g.length>0){const k=g[Math.floor(Math.random()*g.length)];if(k.type==="hero"){const w={...t.players[r]};w.health-=x,t.players[r]=w}else{const w={...v};w.board=[...w.board],w.board[k.idx]=_e(w.board[k.idx],x),t.players[r]=w}}}}t=je(t)}else if(b==="攻击目标"&&a?.targetMinion){const m=a.targetPlayerId?a.targetPlayerId-1:n;let y={...t.players[m]};const x=y.board.findIndex(v=>v.id===a.targetCardId);if(x!==-1){h.push(a.targetMinion.name),y.board=y.board.map((k,w)=>w===x?_e(k,d):k),t.players[m]=y;let v;if(p){const k=y.board.findIndex(w=>w.id===a.targetCardId&&w.health>0);if(k!==-1){const w=u(t,k,m,d);t=w.state,v=w.originalElementStatus,y={...t.players[m]}}}const C=y.board.find(k=>k.id===a.targetCardId);if(C){const k=(C.effects||[]).filter(w=>be(w,"失去生命时")&&w.effect);for(const w of k)t=Ce(t,w,m+1,{sourceCard:C,attackerMinion:C}),t={...t},t.players=[...t.players],y={...t.players[m]}}const g=y.board.find(k=>k.id===a.targetCardId&&k.health<=0);if(g){if(p&&!v){const P=y.board.findIndex(M=>M.id===g.id);if(P!==-1){const M=P>0?y.board[P-1]:null,R=P<y.board.length-1?y.board[P+1]:null;if(M&&M.health>0){const $={...t.players[m]};$.board=[...$.board];const L=y.board.findIndex(T=>T.id===M.id);if(L!==-1){$.board[L]={...$.board[L],elementStatus:{type:p,sourcePlayerId:s}};const T=[...t.players];T[m]=$,t={...t,players:T}}}if(R&&R.health>0){const $={...t.players[m]};$.board=[...$.board];const L=y.board.findIndex(T=>T.id===R.id);if(L!==-1){$.board[L]={...$.board[L],elementStatus:{type:p,sourcePlayerId:s}};const T=[...t.players];T[m]=$,t={...t,players:T}}}}}y={...t.players[m]},y.board=y.board.filter(P=>P.health>0);const k={...g,health:g.maxHealth};t.discardPile=[k,...t.discardPile],t.players[m]=y;const w=(g.effects||[]).filter(P=>be(P,"死亡时")&&P.effect);for(const P of w)t=Ce(t,P,m+1,{attackerMinion:g,sourceCard:g})}else t.players[m]=y}}else if((b==="选择目标"||b==="选择随从")&&a?.targetMinion){const m=a.targetPlayerId?a.targetPlayerId-1:n;let y={...t.players[m]};const x=y.board.findIndex(v=>v.id===a.targetCardId);if(x!==-1){h.push(a.targetMinion.name),y.board=y.board.map((k,w)=>w===x?_e(k,d):k),t.players[m]=y;let v;if(p){const k=y.board.findIndex(w=>w.id===a.targetCardId&&w.health>0);if(k!==-1){const w=u(t,k,m,d);t=w.state,v=w.originalElementStatus,y={...t.players[m]}}}const C=y.board.find(k=>k.id===a.targetCardId);if(C){const k=(C.effects||[]).filter(w=>be(w,"失去生命时")&&w.effect);for(const w of k)t=Ce(t,w,m+1,{sourceCard:C,attackerMinion:C}),t={...t},t.players=[...t.players],y={...t.players[m]}}const g=y.board.find(k=>k.id===a.targetCardId&&k.health<=0);if(g){if(p&&!v){const P=y.board.findIndex(M=>M.id===g.id);if(P!==-1){const M=P>0?y.board[P-1]:null,R=P<y.board.length-1?y.board[P+1]:null;if(M&&M.health>0){const $={...t.players[m]};$.board=[...$.board];const L=y.board.findIndex(T=>T.id===M.id);if(L!==-1){$.board[L]={...$.board[L],elementStatus:{type:p,sourcePlayerId:s}};const T=[...t.players];T[m]=$,t={...t,players:T}}}if(R&&R.health>0){const $={...t.players[m]};$.board=[...$.board];const L=y.board.findIndex(T=>T.id===R.id);if(L!==-1){$.board[L]={...$.board[L],elementStatus:{type:p,sourcePlayerId:s}};const T=[...t.players];T[m]=$,t={...t,players:T}}}}}y={...t.players[m]},y.board=y.board.filter(P=>P.health>0);const k={...g,health:g.maxHealth};t.discardPile=[k,...t.discardPile],t.players[m]=y;const w=(g.effects||[]).filter(P=>be(P,"死亡时")&&P.effect);for(const P of w)t=Ce(t,P,m+1,{attackerMinion:g,sourceCard:g})}else t.players[m]=y}}else if(b==="选择目标"&&!a?.targetMinion&&a?.targetPlayerId){const m=a.targetPlayerId-1,y={...t.players[m]};if(y.health-=d,t.players[m]=y,f++,p){const x=Be(t,"hero",m,void 0,d,p,s);t=x.state;for(const v of x.logMessages)t=fe(t,s,"element",v);if(x.triggered&&x.extraDamage&&p==="fire"){const v={...t.players[m]};v.health-=x.extraDamage,t.players[m]=v}if(x.triggered&&x.extraDamageIsLightning){const v=x.extraDamage,C=t.players[m],g=C.board.filter(w=>w.health>0),k=[];if(g.forEach(w=>k.push({type:"minion",idx:C.board.indexOf(w)})),C.health>0&&k.push({type:"hero",idx:-1}),k.length>0){const w=k[Math.floor(Math.random()*k.length)];if(w.type==="hero"){const P={...t.players[m]};P.health-=v,t.players[m]=P}else{const P={...C};P.board=[...P.board],P.board[w.idx]=_e(P.board[w.idx],v),t.players[m]=P}}}}t=je(t)}else if(b==="自己"&&a?.attackerMinion){let m={...t.players[r]};h.push(a.attackerMinion.name),m.board=m.board.map(C=>C.id===a.attackerMinion.id?_e(C,d):C),t.players[r]=m;let y;if(p){const C=m.board.findIndex(g=>g.id===a.attackerMinion.id&&g.health>0);if(C!==-1){const g=u(t,C,r,d);t=g.state,y=g.originalElementStatus,m={...t.players[r]}}}const x=m.board.find(C=>C.id===a.attackerMinion.id);if(x){const C=(x.effects||[]).filter(g=>be(g,"失去生命时")&&g.effect);for(const g of C)t=Ce(t,g,s,{sourceCard:x,attackerMinion:x}),t={...t},t.players=[...t.players],m={...t.players[r]}}const v=m.board.find(C=>C.id===a.attackerMinion.id&&C.health<=0);if(v){if(p&&!y){const k=m.board.findIndex(w=>w.id===v.id);if(k!==-1){const w=k>0?m.board[k-1]:null,P=k<m.board.length-1?m.board[k+1]:null;if(w&&w.health>0){const M={...t.players[r]};M.board=[...M.board];const R=m.board.findIndex($=>$.id===w.id);if(R!==-1){M.board[R]={...M.board[R],elementStatus:{type:p,sourcePlayerId:s}};const $=[...t.players];$[r]=M,t={...t,players:$}}}if(P&&P.health>0){const M={...t.players[r]};M.board=[...M.board];const R=m.board.findIndex($=>$.id===P.id);if(R!==-1){M.board[R]={...M.board[R],elementStatus:{type:p,sourcePlayerId:s}};const $=[...t.players];$[r]=M,t={...t,players:$}}}}}m={...t.players[r]},console.log("[造成伤害-自己] 随从死亡:",v.name,"effects:",v.effects),m.board=m.board.filter(k=>k.health>0);const C={...v,health:v.maxHealth};t.discardPile=[C,...t.discardPile],t.players[r]=m;const g=(v.effects||[]).filter(k=>be(k,"死亡时")&&k.effect);console.log("[造成伤害-自己] 死亡时效果:",g);for(const k of g)console.log("[造成伤害-自己] 执行死亡效果:",k),t=Ce(t,k,s,{attackerMinion:v,sourceCard:v})}else t.players[r]=m}else if(b==="检索随从"){const m=tt(e,t,s);if(m.length>0){let y=m;if(e.targetRetrievedRandom&&m.length>1){const x=Math.floor(Math.random()*m.length),v=m[x];t=fe(t,s,"minion_skill",`🎯 随机检索到: ${v.minion.name}`),y=[v]}for(const x of y){const v=x.playerId-1,C={...t.players[v]},g=C.board.findIndex(w=>w.id===x.minion.id);if(g===-1)continue;h.push(x.minion.name),C.board=C.board.map(w=>w.id===x.minion.id?_e(w,d):w),t.players[v]=C,p&&(t=u(t,g,v,d).state);const k=C.board.find(w=>w.id===x.minion.id&&w.health<=0);if(k){const w={...t.players[v]};w.board=w.board.filter(M=>M.health>0);const P={...k,health:k.maxHealth};t.discardPile=[P,...t.discardPile],t.players[v]=w}}}else t=fe(t,s,"minion_skill","检索随从：未找到匹配目标，跳过")}if(h.length>0||f>0){const b=[];if(h.length>0){const y=[...new Set(h)];y.length<=3?b.push(y.join("、")):b.push(`${y.slice(0,3).join("、")}等${y.length}个目标`)}f>0&&b.push(f===1?"英雄":`${f}位英雄`);const m=`对${b.join("、")}造成了${d}点伤害`;t=fe(t,s,"damage",m)}}if(e.effect==="给予印记"){const d=e.value||1,p=[];let c=0;for(const h of l)if(h==="我方所有随从"){const f={...t.players[r]};let u=[...f.board];if(e.isRandomTarget&&u.length>1){const x=Math.floor(Math.random()*u.length),v=u[x];t=fe(t,s,"minion_skill",`🎯 随机选择目标: ${v.name}`),u=[v]}u.forEach(x=>p.push(x.name));const b=f.board.map(x=>u.some(v=>v.id===x.id)?{...x,markCount:(x.markCount||0)+d}:x),m=b.filter(x=>x.health<=0);f.board=b.filter(x=>x.health>0);const y=m.map(x=>({...x,health:x.maxHealth}));t.discardPile=[...y,...t.discardPile],t.players[r]=f}else if(h==="敌方所有随从"){const f={...t.players[n]};let u=[...f.board];if(e.isRandomTarget&&u.length>1){const x=Math.floor(Math.random()*u.length),v=u[x];t=fe(t,s,"minion_skill",`🎯 随机选择目标: ${v.name}`),u=[v]}u.forEach(x=>p.push(x.name));const b=f.board.map(x=>u.some(v=>v.id===x.id)?{...x,markCount:(x.markCount||0)+d}:x),m=b.filter(x=>x.health<=0);f.board=b.filter(x=>x.health>0);const y=m.map(x=>({...x,health:x.maxHealth}));t.discardPile=[...y,...t.discardPile],t.players[n]=f}else if(h==="敌方英雄"){const f={...t.players[n]};f.heroMarkCount=(f.heroMarkCount||0)+d,t.players[n]=f,c++}else if(h==="我方英雄"){const f={...t.players[r]};f.heroMarkCount=(f.heroMarkCount||0)+d,t.players[r]=f,c++}else if((h==="攻击目标"||h==="选择目标"||h==="选择随从")&&a?.targetMinion){const f=a.targetPlayerId?a.targetPlayerId-1:n,u={...t.players[f]},b=u.board.findIndex(m=>m.id===a.targetCardId);if(b!==-1){p.push(a.targetMinion.name);const m=u.board.map((v,C)=>C===b?{...v,markCount:(v.markCount||0)+d}:v),y=m.filter(v=>v.health<=0);u.board=m.filter(v=>v.health>0);const x=y.map(v=>({...v,health:v.maxHealth}));t.discardPile=[...x,...t.discardPile],t.players[f]=u}}else if((h==="攻击目标"||h==="选择目标")&&!a?.targetMinion){const f=a?.targetPlayerId?a.targetPlayerId-1:n,u={...t.players[f]};u.heroMarkCount=(u.heroMarkCount||0)+d,t.players[f]=u,c++}if(p.length>0||c>0){const h=[];if(p.length>0){const u=[...new Set(p)];u.length<=3?h.push(u.join("、")):h.push(`${u.slice(0,3).join("、")}等${u.length}个目标`)}c>0&&h.push(c===1?"英雄":`${c}位英雄`);const f=`对${h.join("、")}给予了${d}点印记`;t=fe(t,s,"minion_skill",f)}}if(e.effect==="给予词条"){const d=e.grantedKeywordName||"",p=e.grantedKeywordValue??1;if(!d)return console.log("[executeEffect] 给予词条效果没有指定词条，跳过"),t;const c=[["机动","嘲讽"],["连击","狂怒"],["暴虐","斩首"],["🔥","❄️","⚡️"]],h={};for(const m of c)for(const y of m)h[y]=m;const f=m=>{if(d!=="护甲"&&m.keywords.some(x=>x.name===d))return d;const y=h[d];if(!y)return null;for(const x of m.keywords)if(x.name!==d&&y.includes(x.name))return x.name;return null},u=[],b=[];for(const m of l)if(m==="我方所有随从"){const y={...t.players[r]};let x=[...y.board];if(e.isRandomTarget&&x.length>1){const v=Math.floor(Math.random()*x.length),C=x[v];t=fe(t,s,"minion_skill",`🎯 随机选择目标: ${C.name}`),x=[C]}y.board=y.board.map(v=>{if(!x.some(M=>M.id===v.id))return v;const C=f(v);if(C)return b.push(`${v.name}（已有【${C}】）`),v;u.push(v.name);const g=v.keywords.find(M=>M.name==="护甲");let k=g?g.value??1:0;d==="护甲"&&(k+=p);let w=[...v.keywords];d==="护甲"&&(w=w.filter(M=>M.name!=="护甲"));const P=Object.values($e).find(M=>M.name===d);return P&&w.push(P.hasValue&&!["🔥","❄️","⚡️"].includes(d)?{...P,value:d==="护甲"?k:p}:{...P}),{...v,keywords:w,armorValue:k>0?k:void 0,divineShieldActive:d==="圣盾"?!0:v.divineShieldActive,canAttackHeroes:d==="伏击"?!0:v.canAttackHeroes,canAttackMinions:d==="突击"?!0:v.canAttackMinions,maxAttacksPerTurn:d==="连击"?v.maxAttacksPerTurn>=2?v.maxAttacksPerTurn:2:v.maxAttacksPerTurn,frozen:d==="❄️"?!1:v.frozen}}),t.players[r]=y}else if(m==="敌方所有随从"){const y={...t.players[n]};let x=[...y.board];if(e.isRandomTarget&&x.length>1){const v=Math.floor(Math.random()*x.length),C=x[v];t=fe(t,s,"minion_skill",`🎯 随机选择目标: ${C.name}`),x=[C]}y.board=y.board.map(v=>{if(!x.some(M=>M.id===v.id))return v;const C=f(v);if(C)return b.push(`${v.name}（已有【${C}】）`),v;u.push(v.name);const g=v.keywords.find(M=>M.name==="护甲");let k=g?g.value??1:0;d==="护甲"&&(k+=p);let w=[...v.keywords];d==="护甲"&&(w=w.filter(M=>M.name!=="护甲"));const P=Object.values($e).find(M=>M.name===d);return P&&w.push(P.hasValue&&!["🔥","❄️","⚡️"].includes(d)?{...P,value:d==="护甲"?k:p}:{...P}),{...v,keywords:w,armorValue:k>0?k:void 0,divineShieldActive:d==="圣盾"?!0:v.divineShieldActive,canAttackHeroes:d==="伏击"?!0:v.canAttackHeroes,canAttackMinions:d==="突击"?!0:v.canAttackMinions,maxAttacksPerTurn:d==="连击"?v.maxAttacksPerTurn>=2?v.maxAttacksPerTurn:2:v.maxAttacksPerTurn,frozen:d==="❄️"?!1:v.frozen}}),t.players[n]=y}else if((m==="选择目标"||m==="选择随从"||m==="攻击目标")&&a?.targetMinion){const y=a.targetPlayerId?a.targetPlayerId-1:n,x={...t.players[y]},v=x.board.findIndex(C=>C.id===a.targetCardId);if(v!==-1){const C=x.board[v],g=f(C);if(g)b.push(`${C.name}（已有【${g}】）`);else{u.push(C.name);const k=C.keywords.find(R=>R.name==="护甲");let w=k?k.value??1:0;d==="护甲"&&(w+=p);let P=[...C.keywords];d==="护甲"&&(P=P.filter(R=>R.name!=="护甲"));const M=Object.values($e).find(R=>R.name===d);M&&P.push(M.hasValue&&!["🔥","❄️","⚡️"].includes(d)?{...M,value:d==="护甲"?w:p}:{...M}),x.board[v]={...C,keywords:P,armorValue:w>0?w:void 0,divineShieldActive:d==="圣盾"?!0:C.divineShieldActive,canAttackHeroes:d==="伏击"?!0:C.canAttackHeroes,canAttackMinions:d==="突击"?!0:C.canAttackMinions,maxAttacksPerTurn:d==="连击"?C.maxAttacksPerTurn>=2?C.maxAttacksPerTurn:2:C.maxAttacksPerTurn,frozen:d==="❄️"?!1:C.frozen}}t.players[y]=x}}else if(m==="自己"&&a?.attackerMinion){const y=a.attackerMinion,x={...t.players[r]},v=x.board.findIndex(C=>C.id===y.id);if(v!==-1){const C=x.board[v],g=f(C);if(g)b.push(`${C.name}（已有【${g}】）`);else{u.push(C.name);const k=C.keywords.find(R=>R.name==="护甲");let w=k?k.value??1:0;d==="护甲"&&(w+=p);let P=[...C.keywords];d==="护甲"&&(P=P.filter(R=>R.name!=="护甲"));const M=Object.values($e).find(R=>R.name===d);M&&P.push(M.hasValue&&!["🔥","❄️","⚡️"].includes(d)?{...M,value:d==="护甲"?w:p}:{...M}),x.board[v]={...C,keywords:P,armorValue:w>0?w:void 0,divineShieldActive:d==="圣盾"?!0:C.divineShieldActive,canAttackHeroes:d==="伏击"?!0:C.canAttackHeroes,canAttackMinions:d==="突击"?!0:C.canAttackMinions,maxAttacksPerTurn:d==="连击"?C.maxAttacksPerTurn>=2?C.maxAttacksPerTurn:2:C.maxAttacksPerTurn,frozen:d==="❄️"?!1:C.frozen}}t.players[r]=x}}else if(m==="检索随从"){const y=tt(e,t,s);if(y.length>0){let x=y;if(e.targetRetrievedRandom&&y.length>1){const v=Math.floor(Math.random()*y.length),C=y[v];t=fe(t,s,"minion_skill",`🎯 随机检索到: ${C.minion.name}`),x=[C]}for(const v of x){const C=v.playerId-1,g={...t.players[C]},k=g.board.findIndex(M=>M.id===v.minion.id);if(k===-1)continue;const w=g.board[k],P=f(w);if(P)b.push(`${w.name}（已有【${P}】）`);else{u.push(w.name);const M=w.keywords.find(T=>T.name==="护甲");let R=M?M.value??1:0;d==="护甲"&&(R+=p);let $=[...w.keywords];d==="护甲"&&($=$.filter(T=>T.name!=="护甲"));const L=Object.values($e).find(T=>T.name===d);L&&$.push(L.hasValue&&!["🔥","❄️","⚡️"].includes(d)?{...L,value:d==="护甲"?R:p}:{...L}),g.board[k]={...w,keywords:$,armorValue:R>0?R:void 0,divineShieldActive:d==="圣盾"?!0:w.divineShieldActive,canAttackHeroes:d==="伏击"?!0:w.canAttackHeroes,canAttackMinions:d==="突击"?!0:w.canAttackMinions,maxAttacksPerTurn:d==="连击"?w.maxAttacksPerTurn>=2?w.maxAttacksPerTurn:2:w.maxAttacksPerTurn,frozen:d==="❄️"?!1:w.frozen}}t.players[C]=g}}}if(u.length>0){const m=d==="护甲"?`【${d}${p}】`:`【${d}】`,y=u.length<=3?u.join("、"):`${u.slice(0,3).join("、")}等${u.length}个目标`;t=fe(t,s,"minion_skill",`给予${y}${m}`)}b.length>0&&(t=fe(t,s,"minion_skill",`由于互斥，${b.join("、")}无法获得【${d}】`))}if(e.effect==="属性变化"){const d=e.attackValue??0,p=e.healthValue??0,c=e.isAttackPositive?d:-d,h=e.isHealthPositive?p:-p,f=(e.costValue||0)>0?e.isCostSet||e.isCostPositive?e.costValue||0:-(e.costValue||0):0,u=[];for(const b of l)if(b==="我方所有随从"){const m={...t.players[r]};let y=[...m.board];if(e.isRandomTarget&&y.length>1){const C=Math.floor(Math.random()*y.length),g=y[C];t=fe(t,s,"minion_skill",`🎯 随机选择目标: ${g.name}`),y=[g]}y.forEach(C=>u.push(C.name)),m.board=m.board.map(C=>{if(!y.some(P=>P.id===C.id))return C;const g=e.isAttackSet?d-C.attack:c,k=e.isHealthSet?p-C.health:h,w=C.health+k;return{...C,attack:Math.max(0,C.attack+g),health:w,maxHealth:Math.max(1,C.maxHealth+k)}});const x=m.board.filter(C=>C.health<=0);m.board=m.board.filter(C=>C.health>0);const v=x.map(C=>({...C,health:C.maxHealth}));t.discardPile=[...v,...t.discardPile],t.players[r]=m,console.log("[属性变化-我方所有随从] 死亡随从数量:",x.length);for(const C of x){console.log("[属性变化-我方所有随从] 检查死亡随从:",C.name,"effects:",C.effects);const g=(C.effects||[]).filter(k=>be(k,"死亡时")&&k.effect);console.log("[属性变化-我方所有随从] 死亡时效果:",g);for(const k of g)console.log("[属性变化-我方所有随从] 执行死亡效果:",k),t=Ce(t,k,s,{attackerMinion:C})}}else if(b==="敌方所有随从"){const m={...t.players[n]};let y=[...m.board];if(e.isRandomTarget&&y.length>1){const C=Math.floor(Math.random()*y.length),g=y[C];t=fe(t,s,"minion_skill",`🎯 随机选择目标: ${g.name}`),y=[g]}y.forEach(C=>u.push(C.name)),m.board=m.board.map(C=>{if(!y.some(P=>P.id===C.id))return C;const g=e.isAttackSet?d-C.attack:c,k=e.isHealthSet?p-C.health:h,w=C.health+k;return{...C,attack:Math.max(0,C.attack+g),health:w,maxHealth:Math.max(1,C.maxHealth+k)}});const x=m.board.filter(C=>C.health<=0);m.board=m.board.filter(C=>C.health>0);const v=x.map(C=>({...C,health:C.maxHealth}));t.discardPile=[...v,...t.discardPile],t.players[n]=m,console.log("[属性变化-敌方所有随从] 死亡随从数量:",x.length);for(const C of x){console.log("[属性变化-敌方所有随从] 检查死亡随从:",C.name,"effects:",C.effects);const g=(C.effects||[]).filter(k=>be(k,"死亡时")&&k.effect);console.log("[属性变化-敌方所有随从] 死亡时效果:",g);for(const k of g)console.log("[属性变化-敌方所有随从] 执行死亡效果:",k),t=Ce(t,k,i,{attackerMinion:C})}}else if((b==="攻击目标"||b==="选择目标"||b==="选择随从")&&a?.targetMinion){const m=a.targetPlayerId?a.targetPlayerId-1:n,y={...t.players[m]},x=y.board.findIndex(v=>v.id===a.targetCardId);if(x!==-1){u.push(a.targetMinion.name),y.board=y.board.map((C,g)=>{if(g===x){const k=e.isAttackSet?d-C.attack:c,w=e.isHealthSet?p-C.health:h,P=C.health+w;return{...C,attack:Math.max(0,C.attack+k),health:P,maxHealth:Math.max(1,C.maxHealth+w)}}return C});const v=y.board.find(C=>C.id===a.targetCardId&&C.health<=0);if(v){y.board=y.board.filter(k=>k.health>0);const C={...v,health:v.maxHealth};t.discardPile=[C,...t.discardPile];const g=(v.effects||[]).filter(k=>be(k,"死亡时")&&k.effect);for(const k of g)t=Ce(t,k,m+1,{attackerMinion:v})}t.players[m]=y}}else if(b==="自己"&&a?.attackerMinion){const m={...t.players[r]};u.push(a.attackerMinion.name),m.board=m.board.map(x=>{if(x.id===a.attackerMinion.id){const v=e.isAttackSet?d-x.attack:c,C=e.isHealthSet?p-x.health:h,g=x.health+C;return{...x,attack:Math.max(0,x.attack+v),health:g,maxHealth:Math.max(1,x.maxHealth+C)}}return x});const y=m.board.find(x=>x.id===a.attackerMinion.id&&x.health<=0);if(y){m.board=m.board.filter(C=>C.health>0);const x={...y,health:y.maxHealth};t.discardPile=[x,...t.discardPile],t.players[r]=m;const v=(y.effects||[]).filter(C=>be(C,"死亡时")&&C.effect);for(const C of v)t=Ce(t,C,s,{attackerMinion:y})}else t.players[r]=m;console.log("属性变化完成")}else if(b==="检索随从"){const m=tt(e,t,s);if(m.length>0){let y=m;if(e.targetRetrievedRandom&&m.length>1){const x=Math.floor(Math.random()*m.length),v=m[x];t=fe(t,s,"minion_skill",`🎯 随机检索到: ${v.minion.name}`),y=[v]}for(const x of y){const v=x.playerId-1,C={...t.players[v]},g=C.board.findIndex(R=>R.id===x.minion.id);if(g===-1)continue;u.push(x.minion.name);const k=C.board[g],w=e.isAttackSet?d-k.attack:c,P=e.isHealthSet?p-k.health:h,M=k.health+P;if(C.board[g]={...k,attack:Math.max(0,k.attack+w),health:M,maxHealth:Math.max(1,k.maxHealth+P)},t.players[v]=C,M<=0){const R=C.board[g],$={...t.players[v]};$.board=$.board.filter(H=>H.health>0);const L={...R,health:R.maxHealth};t.discardPile=[L,...t.discardPile],t.players[v]=$;const T=(R.effects||[]).filter(H=>be(H,"死亡时")&&H.effect);for(const H of T)t=Ce(t,H,s,{attackerMinion:R})}}}}else if(b==="卡牌"){const m=e.summonSource==="enemy_hand"?n:r,y={...t.players[m]};let x=[...y.hand];if(new Set(x),e.isRandom&&x.length>0){const v=Math.floor(Math.random()*x.length);x=[x[v]]}x.forEach(v=>u.push(v.name)),y.hand=y.hand.map(v=>{if(!x.some(g=>g===v))return v;let C=v.cost;if((e.costValue||0)>0&&(e.isCostSet?C=e.costValue||0:e.isCostPositive?C=v.cost+(e.costValue||0):C=v.cost-(e.costValue||0),C=Math.max(0,C)),v.type==="minion"){const g=e.isAttackSet?d-(v.attack||0):c,k=e.isHealthSet?p-(v.health||0):h;return{...v,cost:C,attack:Math.max(0,(v.attack||0)+g),health:(v.health||0)+k,maxHealth:Math.max(1,(v.maxHealth||v.health||1)+k)}}return{...v,cost:C}}),t.players[m]=y}if(u.length>0)if(l.includes("卡牌")){const m=e.summonSource==="enemy_hand"?"敌方":"我方",y=e.isRandom?"随机一张":"所有",x=e.isCostSet?"=":f>=0?"+":"",v=e.isAttackSet?"=":c>=0?"+":"",C=e.isHealthSet?"=":h>=0?"+":"",g=e.isCostSet?e.costValue||0:f,k=e.isAttackSet?d:c,w=e.isHealthSet?p:h;let P=[];(e.costValue||0)>0&&P.push(`费用${x}${g}`),(e.attackValue||0)>0&&P.push(`攻击${v}${k}`),(e.healthValue||0)>0&&P.push(`血量${C}${w}`),P.length===0&&P.push("无变化");const M=`使${m}${y}手牌${P.join("/")}`;t=fe(t,s,"minion_skill",M)}else{const m=e.isAttackSet?"=":c>=0?"+":"",y=e.isHealthSet?"=":h>=0?"+":"",x=e.isAttackSet?d:c,v=e.isHealthSet?p:h,C=[...new Set(u)],k=`对${C.length<=3?C.join("、"):`${C.slice(0,3).join("、")}等${C.length}个目标`}的属性变为${m}${x}/${y}${v}`;t=fe(t,s,"minion_skill",k)}}if(e.effect==="治愈"){const d=e.value||1,p=[];let c=0;for(const h of l)if(h==="我方所有随从"){const f={...t.players[r]};let u=[...f.board];if(e.isRandomTarget&&u.length>1){const b=Math.floor(Math.random()*u.length),m=u[b];t=fe(t,s,"minion_skill",`🎯 随机选择目标: ${m.name}`),u=[m]}u.forEach(b=>p.push(b.name)),f.board=f.board.map(b=>u.some(m=>m.id===b.id)?{...b,health:Math.min(b.maxHealth,b.health+d)}:b),t.players[r]=f}else if(h==="敌方所有随从"){const f={...t.players[n]};let u=[...f.board];if(e.isRandomTarget&&u.length>1){const b=Math.floor(Math.random()*u.length),m=u[b];t=fe(t,s,"minion_skill",`🎯 随机选择目标: ${m.name}`),u=[m]}u.forEach(b=>p.push(b.name)),f.board=f.board.map(b=>u.some(m=>m.id===b.id)?{...b,health:Math.min(b.maxHealth,b.health+d)}:b),t.players[n]=f}else if(h==="敌方英雄"){c++;const f={...t.players[n]};f.health=Math.min(f.maxHealth,f.health+d),t.players[n]=f}else if(h==="我方英雄"){c++;const f={...t.players[r]};f.health=Math.min(f.maxHealth,f.health+d),t.players[r]=f}else if((h==="攻击目标"||h==="选择目标"||h==="选择随从")&&a?.targetMinion){const f=a.targetPlayerId?a.targetPlayerId-1:n,u={...t.players[f]},b=u.board.findIndex(m=>m.id===a.targetCardId);b!==-1&&(p.push(a.targetMinion.name),u.board=u.board.map((m,y)=>y===b?{...m,health:Math.min(m.maxHealth,m.health+d)}:m),t.players[f]=u)}else if((h==="攻击目标"||h==="选择目标")&&!a?.targetMinion){c++;const f=a?.targetPlayerId?a.targetPlayerId-1:n,u={...t.players[f]};u.health=Math.min(u.maxHealth,u.health+d),t.players[f]=u}else if(h==="自己"&&a?.attackerMinion){p.push(a.attackerMinion.name);const f={...t.players[r]};f.board=f.board.map(u=>u.id===a.attackerMinion.id?{...u,health:Math.min(u.maxHealth,u.health+d)}:u),t.players[r]=f}else if(h==="检索随从"){const f=tt(e,t,s);if(f.length>0){let u=f;if(e.targetRetrievedRandom&&f.length>1){const b=Math.floor(Math.random()*f.length),m=f[b];t=fe(t,s,"minion_skill",`🎯 随机检索到: ${m.minion.name}`),u=[m]}for(const b of u){const m=b.playerId-1,y={...t.players[m]},x=y.board.findIndex(v=>v.id===b.minion.id);x!==-1&&(p.push(b.minion.name),y.board[x]={...y.board[x],health:Math.min(y.board[x].maxHealth,y.board[x].health+d)},t.players[m]=y)}}}if(p.length>0||c>0){const h=[];if(p.length>0){const u=[...new Set(p)];u.length<=3?h.push(u.join("、")):h.push(`${u.slice(0,3).join("、")}等${u.length}个随从`)}c>0&&h.push(c===1?"英雄":`${c}位英雄`);const f=`为${h.join("、")}恢复了${d}点生命值`;t=fe(t,s,"minion_skill",f)}}if(e.effect==="获得能量"){console.log("[executeEffect] 获得能量效果触发, ownerPlayerId:",s,"ownerPlayerIndex:",r,"value:",e.value),console.log("[executeEffect] targets:",l,"context:",a);const d=e.value||1,p={...t.players[r]};console.log("[executeEffect] 获得能量前, energy:",p.energy,"bonusEnergy:",p.bonusEnergy),p.energy=p.energy+d,p.bonusEnergy=(p.bonusEnergy||0)+d,t.players[r]=p,console.log("[executeEffect] 获得能量后, energy:",p.energy,"bonusEnergy:",p.bonusEnergy);const c=`获得了${d}点能量`;t=fe(t,s,"minion_skill",c)}if(e.effect==="失去能量"){const d=e.value||1,p={...t.players[r]};p.energy=Math.max(0,p.energy-d),t.players[r]=p;const c=`失去了${d}点能量`;t=fe(t,s,"minion_skill",c)}if(e.effect==="召唤"){console.log("[executeEffect] 召唤效果触发, ownerPlayerId:",s,"value:",e.value,"summonedCardIndex:",e.summonedCardIndex);const d=e.value||1;let p;const c=e.summonSource||"derived";if(c!=="derived"){const y=t.players[r],x=t.players[1-r];let v=[];switch(c){case"deck_top":v=y.deck;break;case"discard_top":v=t.discardPile;break;case"my_hand":v=y.hand;break;case"enemy_hand":v=x.hand;break}const C=v.map((g,k)=>g.type==="minion"?k:-1).filter(g=>g>=0);if(C.length>0){const g=e.isRandom?C[Math.floor(Math.random()*C.length)]:C[0];p=v[g],v.splice(g,1)}}else{let y=e.summonedCardIndex??0;if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>0&&(y=e.summonedCardIndices[Math.floor(Math.random()*e.summonedCardIndices.length)]),y!==void 0&&a?.sourceCard?.derivedCards){const x=a.sourceCard.derivedCards;let v=y;v>=x.length&&v>0&&(v=v-1),v>=0&&v<x.length&&(p=x[v])}}if(!p)return console.log("[executeEffect] 召唤效果没有衍生牌模板，跳过"),t;const h={...t.players[r]},f=h.board.length;for(let y=0;y<d;y++){const x=Ee(),v=ke(p,"嘲讽"),C=ke(p,"连击"),g=ke(p,"圣盾"),k=p.keywords?.find(H=>H.name==="准备"),w=k?k.value??1:0,P=ke(p,"暴虐"),M=ke(p,"斩首");ke(p,"机动");const R=ke(p,"冲锋"),$=ke(p,"不动"),L=R&&!v&&!$&&w===0,T={...p,id:x,derivedCards:a?.sourceCard?.derivedCards,maxHealth:p.health,canAttack:$?!1:L,hasAttacked:!1,attacksThisTurn:0,maxAttacksPerTurn:C?2:1,divineShieldActive:g,canAttackHeroes:$?!1:L&&!P,canAttackMinions:$?!1:L&&!M,playedThisTurn:!0,isDefending:$?!1:v,preparation:w,keywords:p.keywords?p.keywords.map(H=>({...H})):[]};h.board.push(T),console.log("[executeEffect] 召唤随从:",T.name,"ID:",x)}t.players[r]=h;const u=t.players[r].name,b=p.name||"衍生随从",m=d===1?`${u}召唤了${b}`:`${u}召唤了${d}个${b}`;t=fe(t,s,"minion_skill",m),console.log("[executeEffect] 召唤完成, 场上随从数:",h.board.length,"原数量:",f)}if(e.effect==="获得"){console.log("[executeEffect] 获得效果触发, ownerPlayerId:",s,"value:",e.value,"summonedCardIndex:",e.summonedCardIndex);const d=e.value||1;let p;const c=e.summonSource||"derived";if(c!=="derived"){const x=t.players[r],v=t.players[1-r];let C=[];switch(c){case"deck_top":C=x.deck;break;case"discard_top":C=t.discardPile;break;case"my_hand":C=x.hand;break;case"enemy_hand":C=v.hand;break}if(C.length>0){const g=e.isRandom?Math.floor(Math.random()*C.length):0;p=C[g],C.splice(g,1)}}else{let x=e.summonedCardIndex??0;if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>0&&(x=e.summonedCardIndices[Math.floor(Math.random()*e.summonedCardIndices.length)]),x!==void 0&&a?.sourceCard?.derivedCards){const v=a.sourceCard.derivedCards;let C=x;C>=v.length&&C>0&&(C=C-1),C>=0&&C<v.length&&(p=v[C])}}if(!p)return console.log("[executeEffect] 获得效果没有衍生牌模板，跳过"),t;const h={...t.players[r]},f=h.hand.length;for(let x=0;x<d;x++){const v=Ee();if(p.type==="spell"){const C={...p,id:v,derivedCards:a?.sourceCard?.derivedCards,attack:0,health:0,maxHealth:0,keywords:p.keywords?p.keywords.map(g=>({...g})):[],effects:p.effects?p.effects.map(g=>({...g,targets:g.targets?[...g.targets]:[]})):void 0};h.hand.push(C),console.log("[executeEffect] 获得法术牌:",C.name,"ID:",v)}else{const C={...p,id:v,derivedCards:a?.sourceCard?.derivedCards,maxHealth:p.health,keywords:p.keywords?p.keywords.map(g=>({...g})):[],effects:p.effects?p.effects.map(g=>({...g,targets:g.targets?[...g.targets]:[]})):void 0};h.hand.push(C),console.log("[executeEffect] 获得随从牌:",C.name,"ID:",v)}}t.players[r]=h;const u=t.players[r].name,b=p.name||"衍生牌",m=p.type==="spell"?"法术":"随从",y=d===1?`${u}获得了${b}(${m})`:`${u}获得了${d}张${b}(${m})`;t=fe(t,s,"minion_skill",y),console.log("[executeEffect] 获得完成, 手牌数:",h.hand.length,"原数量:",f)}if(e.effect==="变化"){console.log("[executeEffect] 变化效果触发, ownerPlayerId:",s,"value:",e.value,"summonedCardIndex:",e.summonedCardIndex);let d;const p=e.summonSource||"derived";if(p!=="derived"){const Z=t.players[r],j=t.players[1-r];let ee=[];switch(p){case"deck_top":ee=Z.deck;break;case"discard_top":ee=t.discardPile;break;case"my_hand":ee=Z.hand;break;case"enemy_hand":ee=j.hand;break}const Y=ee.map((ie,U)=>ie.type==="minion"?U:-1).filter(ie=>ie>=0);if(Y.length>0){const ie=e.isRandom?Y[Math.floor(Math.random()*Y.length)]:Y[0];d=ee[ie],ee.splice(ie,1)}}else{let Z=e.summonedCardIndex??0;if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>0&&(Z=e.summonedCardIndices[Math.floor(Math.random()*e.summonedCardIndices.length)]),Z!==void 0&&a?.sourceCard?.derivedCards){const j=a.sourceCard.derivedCards;let ee=Z;ee>=j.length&&ee>0&&(ee=ee-1),ee>=0&&ee<j.length&&(d=j[ee])}}if(!d)return console.log("[executeEffect] 变化效果没有衍生牌模板，跳过"),t;const c={...t.players[r]},h=a?.sourceCard?.id,f=c.board.findIndex(Z=>Z.id===h);if(f===-1)return console.log("[executeEffect] 变化效果找不到源随从，跳过"),t;const u=ke(d,"嘲讽"),b=ke(d,"连击"),m=ke(d,"圣盾"),y=d.keywords?.find(Z=>Z.name==="准备"),x=y?y.value??1:0,v=ke(d,"暴虐"),C=ke(d,"斩首");ke(d,"机动");const g=ke(d,"冲锋"),k=ke(d,"不动"),w=g&&!u&&!k&&x===0,P=Ee(),M={...d,id:P,derivedCards:a?.sourceCard?.derivedCards,maxHealth:d.health,canAttack:k?!1:w,hasAttacked:!1,attacksThisTurn:0,maxAttacksPerTurn:b?2:1,divineShieldActive:m,canAttackHeroes:k?!1:w&&!v,canAttackMinions:k?!1:w&&!C,playedThisTurn:!0,isDefending:k?!1:u,preparation:x,keywords:d.keywords?d.keywords.map(Z=>({...Z})):[]},R=c.board[f];c.board.splice(f,1,M);const $={...R,health:R.maxHealth};t.discardPile=[$,...t.discardPile],console.log("[executeEffect] 变化完成:",a?.sourceCard?.name,"→",M.name,"位置:",f),t.players[r]=c;const L=t.players[r].name,T=d.name||"衍生随从",H=`${L}的${a?.sourceCard?.name||"随从"}变化为${T}`;t=fe(t,s,"minion_skill",H)}if(e.effect==="说话"){const d=e.speechText||"";if(d&&a?.sourceCard?.id){const c=t.players[r].board.findIndex(h=>h.id===a.sourceCard.id);c!==-1&&(t.pendingSpeechEvents=[...t.pendingSpeechEvents||[],{text:d,playerId:s,minionIndex:c}])}return t}return t},xa=(E,e,s,a,r)=>{console.log("attack() 被调用 - 攻击者ID:",e,"攻击者随从ID:",s,"目标玩家ID:",a,"目标随从ID:",r);const i=e-1,n=a-1,t=E.players[i],l=E.players[n];console.log("攻击者玩家战场:",t.board.map(c=>({id:c.id,name:c.name,canAttack:c.canAttack,hasAttacked:c.hasAttacked,canAttackMinions:c.canAttackMinions,canAttackHeroes:c.canAttackHeroes}))),console.log("目标玩家战场:",l.board.map(c=>({id:c.id,name:c.name})));const o=t.board.findIndex(c=>c.id===s);if(console.log("查找攻击者随从索引:",o),o===-1)return console.log("错误：找不到攻击者随从！"),E;const d=t.board[o];if(console.log("攻击者随从状态 - canAttack:",d.canAttack,"attacksThisTurn:",d.attacksThisTurn,"maxAttacksPerTurn:",d.maxAttacksPerTurn),!d.canAttack||d.attacksThisTurn>=d.maxAttacksPerTurn)return console.log("错误：随从不能攻击！"),E;if(d.frozen)return console.log("[冰冻] 随从被冰冻，无法行动:",d.name),E;if(d.keywords.some(c=>c.name==="不动"))return console.log('错误：随从具有"不动"词条，无法攻击！'),E;if(r!==void 0&&!d.canAttackMinions)return console.log("错误：伏击随从不能攻击随从！"),E;if(Kt(l.board)){if(r===void 0)return E;const c=l.board.find(h=>h.id===r);if(!c||!qt(c))return E}let p={...E};if(p.players=[...E.players],r!==void 0){const c=l.board.findIndex(O=>O.id===r);if(c===-1)return E;const h=l.board[c];console.log("attack() 目标随从:",h.name,"ID:",h.id,"血量:",h.health,"攻击力:",h.attack);const{total:f,newState:u}=Xt(d,p,e,h);p=u,f>0&&console.log("attack() 增加伤害:",f);const b=h.markCount||0,m=d.attack+f+b,y=h.attack;console.log("attack() 伤害计算 - 攻击伤害:",m,"(基础:",d.attack,"+额外:",f,"+印记:",b,") 反伤:",y);const x=Ct(d);console.log("[attack] 攻击者:",d.name,"元素类型:",x,"目标:",h.name);const v=_e(h,m);let C=v.health<=0;const g={...l};g.board=g.board.map((O,J)=>J===c?v:O),p.players[n]=g;let k=0;if(x){const O=Be(p,"minion",n,c,m,x,e);if(p=O.state,O.triggered&&O.extraDamage){const re=p.players[n].board[c];if(re&&re.health>0){const G=_e(re,O.extraDamage),ne={...p.players[n]};ne.board=[...ne.board],ne.board[c]=G;const S=[...p.players];S[n]=ne,p={...p,players:S},k=O.extraDamage,p=fe(p,p.players[n].id,"element",`🔥${re.name}受到了额外的${k}点灼烧伤害`),G.health<=0&&(C=!0)}}if(O.triggered&&O.extraDamageIsLightning){const J=O.extraDamage,re=p.players[n],G=re.board.filter(S=>S.health>0),ne=[];if(G.forEach((S,F)=>{ne.push({type:"minion",index:re.board.indexOf(S),minion:S})}),re.health>0&&ne.push({type:"minion",index:-1,minion:null}),ne.length>0){const S=ne[Math.floor(Math.random()*ne.length)];if(S.index===-1){const V=re.health-J,_={...re,health:V},D=[...p.players];D[n]=_,p={...p,players:D},console.log(`⚡️${_.name}受到了额外的${J}点电击伤害`),p=fe(p,p.players[n].id,"element",`⚡️${_.name}受到了额外的${J}点电击伤害`)}else{const V=re.board[S.index],_=_e(V,J),D={...re};D.board=[...D.board],D.board[S.index]=_;const N=[...p.players];if(N[n]=D,p={...p,players:N},console.log(`⚡️${V.name}受到了额外的${J}点电击伤害`),p=fe(p,p.players[n].id,"element",`⚡️${V.name}受到了额外的${J}点电击伤害`),_.health<=0)if(S.index===c)C=!0;else{const X={..._,health:_.maxHealth};D.board=D.board.filter(z=>z.id!==_.id);const K=[...p.players];K[n]=D,p={...p,players:K,discardPile:[X,...p.discardPile]},p=fe(p,p.players[n].id,"element",`💀${V.name}被电击消灭`)}}const F={type:"lightning_explosion",targetPlayerId:re.id,targetType:S.index===-1?"hero":"minion"};S.index!==-1&&(F.targetMinionId=re.board[S.index].id),p={...p,pendingVisualEffects:[...p.pendingVisualEffects||[],F]}}}}const w=ke(d,"先攻"),P=ke(h,"先攻"),R=!(w&&!P&&C),$=R?_e(d,y):d,L=ke(d,"狂怒"),T=$.attacksThisTurn+1,H=L&&C?!0:T<$.maxAttacksPerTurn,Z={...$,attacksThisTurn:L&&C?0:T,hasAttacked:!H,canAttack:H},j=d.effects||(d.effect?[d.effect]:[]),ee=h.effects||(h.effect?[h.effect]:[]);let Y={...t};if(Y.board=Y.board.map((O,J)=>J===o?Z:O),p.players[i]=Y,R){const O=j.filter(J=>be(J,"失去生命时")&&J.effect);for(const J of O)p=Ce(p,J,e,{sourceCard:d,attackerMinion:d}),p={...p},p.players=[...p.players],Y={...p.players[i]}}const ie=Y.board.filter(O=>O.health<=0);Y.board=Y.board.filter(O=>O.health>0);const U=ie.map(O=>({...O,health:O.maxHealth}));p.discardPile=[...U,...p.discardPile],p.players[i]=Y;let W={...l};const he=x?p.players[n].board[c]:v;W.board=W.board.map((O,J)=>J===c?(console.log("attack() 更新目标随从:",he.name,"新血量:",he.health,"是否死亡:",he.health<=0),he):O),p.players[n]=W;const de=ee.filter(O=>be(O,"失去生命时")&&O.effect);for(const O of de)p=Ce(p,O,a,{sourceCard:h,attackerMinion:h}),p={...p},p.players=[...p.players],W={...p.players[n]};if(C&&x&&!h.elementStatus){const O=p.players[n].board,J=c>0?O[c-1]:null,re=c<O.length-1?O[c+1]:null;if(J&&J.health>0){const G={...p.players[n]};G.board=[...G.board],G.board[c-1]={...G.board[c-1],elementStatus:{type:x,sourcePlayerId:e}};const ne=[...p.players];ne[n]=G,p={...p,players:ne}}if(re&&re.health>0){const G={...p.players[n]};G.board=[...G.board],G.board[c+1]={...G.board[c+1],elementStatus:{type:x,sourcePlayerId:e}};const ne=[...p.players];ne[n]=G,p={...p,players:ne}}}W={...p.players[n]};const I=W.board.filter(O=>O.health<=0);W.board=W.board.filter(O=>O.health>0);const A=I.map(O=>({...O,health:O.maxHealth}));p.discardPile=[...A,...p.discardPile],p.players[n]=W,console.log("attack() 执行成功！攻击者攻击次数:",Z.attacksThisTurn,"是否还能攻击:",H),console.log("attack() 攻击后目标玩家战场:",p.players[n].board.map(O=>({id:O.id,name:O.name,health:O.health})));const B=j.filter(O=>be(O,"攻击时")&&O.effect&&O.effect!=="增加伤害");if(B.length>0){console.log("触发攻击时效果:",d.name,B);for(const O of B)p=Ce(p,O,e,{targetPlayerId:a,targetCardId:r,targetMinion:v,attackerMinion:Z,sourceCard:Z})}if(C){const O=ee.filter(J=>be(J,"死亡时")&&J.effect);if(O.length>0){console.log("触发死亡时效果:",h.name,O);for(const J of O)p=Ce(p,J,a,{attackerMinion:h,sourceCard:h})}}if(Z.health<=0){const O=j.filter(J=>be(J,"死亡时")&&J.effect);if(O.length>0){console.log("触发攻击者死亡时效果:",d.name,O);for(const J of O)p=Ce(p,J,e,{attackerMinion:Z,sourceCard:Z})}}}return console.log("attack() 返回新状态"),je(p)},Xt=(E,e,s,a)=>{const r=E.effects||(E.effect?[E.effect]:[]);let i=0,n=e;for(const t of r)if(be(t,"攻击时")&&t.effect==="增加伤害"&&t.targets.includes("攻击目标")){if(t.conditionType&&t.conditionType!=="guaranteed"&&t.conditionType!=="d6"){const l=ot(t,n,s,{targetMinion:a??void 0});if(l.logMessage&&(n=fe(n,s,"condition",`${E.name} ${l.logMessage}`)),!l.passed)continue}if(t.triggerNumbers&&t.triggerNumbers.length>0&&t.triggerNumbers.length<6){const l=Math.floor(Math.random()*6)+1;if(!t.triggerNumbers.includes(l)){n=fe(n,s,"dice_roll",`🎲 = ${l}❌️ [${t.triggerNumbers.join(",")}]`);continue}n=fe(n,s,"dice_roll",`🎲 = ${l}✅️ [${t.triggerNumbers.join(",")}]`)}i+=t.value||0}return{total:i,newState:n}},va=(E,e,s,a)=>{console.log("attackHero() 被调用 - 攻击者ID:",e,"攻击者随从ID:",s,"目标玩家ID:",a);const r=e-1,i=a-1,n=E.players[r],t=E.players[i];console.log("攻击者玩家战场:",n.board.map(k=>({id:k.id,name:k.name,canAttack:k.canAttack,hasAttacked:k.hasAttacked})));const l=n.board.findIndex(k=>k.id===s);if(console.log("查找攻击者随从索引:",l),l===-1)return console.log("错误：找不到攻击者随从！"),E;const o=n.board[l];if(console.log("攻击者随从状态 - canAttack:",o.canAttack,"attacksThisTurn:",o.attacksThisTurn,"maxAttacksPerTurn:",o.maxAttacksPerTurn),!o.canAttack||o.attacksThisTurn>=o.maxAttacksPerTurn)return console.log("错误：随从不能攻击！"),E;if(o.keywords.some(k=>k.name==="不动"))return console.log('错误：随从具有"不动"词条，无法攻击！'),E;if(o.frozen)return console.log("[冰冻] 随从被冰冻，无法攻击英雄:",o.name),E;if(!o.canAttackHeroes)return console.log("错误：突击随从不能攻击英雄！"),E;if(Kt(t.board))return console.log("错误：目标场上有嘲讽/防御随从！"),E;const d=Ct(o);let p={...E};p.players=[...E.players];const{total:c,newState:h}=Xt(o,p,e,null);p=h,c>0&&console.log("attackHero() 增加伤害:",o.name,"额外伤害:",c,"原攻击力:",o.attack,"新攻击力:",o.attack+c);const f=t.heroMarkCount||0,u=o.attack+c+f,b=t.health-u;console.log("attackHero() 计算伤害 - 攻击者攻击力:",o.attack,"印记附加:",f,"目标英雄原血量:",t.health,"新血量:",b);const m=o.attacksThisTurn+1,y=m<o.maxAttacksPerTurn,x={...o,attacksThisTurn:m,hasAttacked:!y,canAttack:y,attack:o.attack};let v={...p};if(v.players[r]={...n,board:n.board.map((k,w)=>w===l?x:k)},v.players[i]={...t,health:b},d){const k=Be(v,"hero",i,void 0,u,d,e);if(v=k.state,k.triggered&&k.extraDamage&&d==="fire"){const w=v.players[i],P=w.health-k.extraDamage;v=fe(v,v.players[i].id,"element",`🔥${w.name}受到了额外的${k.extraDamage}点灼烧伤害`),v.players[i]={...w,health:P}}if(k.triggered&&k.extraDamageIsLightning){const w=k.extraDamage,P=v.players[i],M=P.board.filter($=>$.health>0),R=[];if(M.forEach(($,L)=>{R.push({type:"minion",index:P.board.indexOf($)})}),P.health>0&&R.push({type:"minion",index:-1}),R.length>0){const $=R[Math.floor(Math.random()*R.length)];if($.index===-1){const T=P.health-w;v=fe(v,v.players[i].id,"element",`⚡️${P.name}受到了额外的${w}点电击伤害`),v.players[i]={...P,health:T}}else{const T=P.board[$.index],H=_e(T,w),Z={...P};if(Z.board=[...Z.board],Z.board[$.index]=H,v=fe(v,v.players[i].id,"element",`⚡️${T.name}受到了额外的${w}点电击伤害`),H.health<=0){const j={...H,health:H.maxHealth};Z.board=Z.board.filter(ee=>ee.id!==H.id),v.discardPile=[j,...v.discardPile],v=fe(v,v.players[i].id,"element",`💀${T.name}被电击消灭`)}v.players[i]=Z}const L={type:"lightning_explosion",targetPlayerId:P.id,targetType:$.index===-1?"hero":"minion"};$.index!==-1&&(L.targetMinionId=P.board[$.index].id),v={...v,pendingVisualEffects:[...v.pendingVisualEffects||[],L]}}}v.players[i].health<=0&&console.log("[元素伤害] 英雄死亡:",v.players[i].name)}console.log("attackHero() 执行成功！目标英雄血量:",b,"攻击者攻击次数:",m,"是否还能攻击:",y);const g=(o.effects||(o.effect?[o.effect]:[])).filter(k=>be(k,"攻击时")&&k.effect&&k.effect!=="增加伤害");if(g.length>0){console.log("触发攻击时效果(攻击英雄):",o.name,g);for(const k of g)v=Ce(v,k,e,{targetPlayerId:a,targetMinion:void 0,attackerMinion:x,sourceCard:x})}return v=fe(v,e,"damage",`${o.name} 对 ${t.name} 造成 ${u} 点伤害`),je(v)},ka=(E,e,s)=>{const a=e-1,r=E.players[a],i=r.board.findIndex(p=>p.id===s);if(i===-1)return console.log("toggleDefense: 找不到随从"),E;const n=r.board[i];if(n.isDefending){if(Ue(n))return console.log("toggleDefense: 嘲讽随从无法取消防御"),E;const p={...n,isDefending:!1},c=[...r.board];c[i]=p;const h={...r,board:c},f=[...E.players];return f[a]=h,{...E,players:f}}if(!ya(n))return console.log("toggleDefense: 该随从无法进入防御模式"),E;const t={...n,isDefending:!0},l=[...r.board];l[i]=t;const o={...r,board:l},d=[...E.players];return d[a]=o,console.log(`toggleDefense: ${n.name} 进入防御模式`),{...E,players:d}},je=E=>{for(const e of E.players)if(e.health<=0){const s=E.online?.isOnline,a=s?"onlineGameOver":"gameOver",r=e.id===1?2:1,i=E.players[r-1];return console.log("[胜负] 游戏结束判定"),console.log("[胜负] 玩家生命值:",E.players.map(n=>`${n.name}: ${n.health}/${n.maxHealth}`)),console.log("[胜负] 死亡玩家:",`${e.name} (ID: ${e.id}, 生命值: ${e.health})`),console.log("[胜负] 胜利玩家:",`${i.name} (ID: ${i.id}, 生命值: ${i.health})`),console.log("[胜负] 联机模式:",s,"phase:",a),console.log("[胜负] winner 值:",r,"(对应 players["+(r-1)+"])"),{...E,phase:a,winner:r}}return E},wa=E=>{const e=E.currentPlayerId-1,s=E.currentPlayerId;console.log("[DEBUG] endTurn",{stateTurnNumber:E.turnNumber,currentPlayerId:s,phase:E.phase,mulliganFirstPlayer:E.mulliganFirstPlayer,p2MulliganCards:E.p2MulliganCards?.map(Xe),p2MulliganSelected:E.p2MulliganSelected,waitingForNextPlayer:E.waitingForNextPlayer});const a=E.players[e].bonusEnergy||0;let r={...E};r.players=[...E.players];const i=E.players[e].energy;r.players[e]={...E.players[e],energy:Math.max(i-a,0),bonusEnergy:0,board:E.players[e].board.map(t=>({...t,canAttack:!1}))};const n=r.players[e].board;for(const t of n){const o=(t.effects||(t.effect?[t.effect]:[])).filter(d=>be(d,"回合结束时")&&d.effect);o.length>0&&(console.log("触发回合结束时效果:",t.name,o),r=Ae(r,o,s,t.name,"回合结束时",{attackerMinion:t,sourceCard:t}))}return r.players[e]={...r.players[e],board:r.players[e].board.map(t=>{const o=t.keywords.some(d=>d.name==="冲锋")?t.keywords.filter(d=>d.name!=="冲锋"):t.keywords;return t.playedThisTurn?{...t,keywords:o,playedThisTurn:!1}:{...t,keywords:o,playedThisTurn:!1}})},r.players[e]={...r.players[e],board:r.players[e].board.map(t=>{const l=t.keywords.some(o=>o.name==="不动");if(t.preparation>0){const o=t.preparation-1;return{...t,preparation:o,canAttack:l?!1:o===0&&!Ue(t)?!0:t.canAttack,canAttackHeroes:l?!1:o===0&&!Ue(t)?!0:t.canAttackHeroes,canAttackMinions:l?!1:o===0&&!Ue(t)?!0:t.canAttackMinions}}return t})},r.players[e]={...r.players[e],board:r.players[e].board.map(t=>t.frozen?{...t,frozen:!1}:t)},r.players[e]={...r.players[e],heroMarkCount:0},r.waitingForNextPlayer=!0,r},Ea=E=>{const e=E.currentPlayerId===1?2:1,s=e-1;console.log("[DEBUG] startMyTurn",{stateTurnNumber:E.turnNumber,nextPlayerId:e,statePhase:E.phase,mulliganFirstPlayer:E.mulliganFirstPlayer,currentPlayerId:E.currentPlayerId});const a=u=>{const b=u.heroCard?.skills?.map(m=>{const y=m.remainingCooldown??0,x=Math.max(0,y-1);return{...m,remainingCooldown:x}});return{...u,heroCard:u.heroCard?{...u.heroCard,skills:b}:void 0}},r={...E,players:E.players.map(a)},i=r.players.findIndex(u=>u.id===e);let n=!1,t="",l={...r};if(i!==-1){const u=r.players[i];u.frozen&&(n=!0,t=u.name||"英雄");const b=u.board.map(x=>x.frozen?{...x,canAttack:!1,hasAttacked:!0,attacksThisTurn:x.maxAttacksPerTurn}:x),m={...u,board:b,frozen:!1},y=[...r.players];y[i]=m,l={...r,players:y}}if(l.turnNumber===1&&l.mulliganDone===1&&l.p2MulliganCards.length===0){console.log("后手第一回合开始，触发换牌");let u={...l};const b=[];for(let m=0;m<4;m++){const y=Ge(u,e,!1);y&&b.push(y)}return{...u,phase:"mulligan",currentPlayerId:e,waitingForNextPlayer:!1,mulliganCards:[],mulliganSelected:[],p2MulliganCards:b,p2MulliganSelected:[],newlyDrawnCardIds:b.map(m=>m.id)}}let o={...l,newlyDrawnCardIds:[]};o.waitingForNextPlayer=!1,o.currentPlayerId=e,e===1&&(o.turnNumber=E.turnNumber+1);const d=l.players[s],p=Math.min(10,o.turnNumber);if(o.players[s]={...o.players[s],energy:p,maxEnergy:p,bonusEnergy:0,heroSkillUsed:d.heroCard?.skills?.map(()=>!1),board:d.board.map(u=>{const b=u.preparation>0,m=u.keywords.some(y=>y.name==="不动");return u.keywords.some(y=>y.name==="嘲讽"),{...u,keywords:u.keywords.filter(y=>y.name!=="嘲讽"),canAttack:m?!1:!b,hasAttacked:!1,attacksThisTurn:0,playedThisTurn:!1,isDefending:!1,canAttackHeroes:m?!1:!b&&!ke(u,"暴虐"),canAttackMinions:m?!1:!b&&!ke(u,"斩首")}})},n){const u=Math.ceil(p*.2);o=fe(o,e,"element",`🧊${t}被冰冻失去了${u}点能量`),o.players[s]={...o.players[s],energy:Math.max(0,p-u)}}o=(u=>{let b=u;const m=[...b.players[s].board];console.log("回合开始时检查随从效果，随从数量:",m.length);for(const y of m){if(!b.players[s].board.some(k=>k.id===y.id)){console.log("随从已死亡，跳过:",y.name);continue}console.log("随从:",y.name,"effects:",y.effects,"effect:",y.effect);const g=(y.effects||(y.effect?[y.effect]:[])).filter(k=>be(k,"回合开始时")&&k.effect);console.log("回合开始时效果:",g),g.length>0&&(console.log("触发回合开始时效果:",y.name,g),b=Ae(b,g,e,y.name,"回合开始时",{attackerMinion:y,sourceCard:y}))}return b})(o),o=Wt(o,e);const h=o.players[s].heroCard,f=h?.skills||[];for(let u=0;u<f.length;u++){const b=f[u];if(b.type!=="passive")continue;const y=(b.effects||(b.effect?[b.effect]:[])).filter(x=>be(x,"回合开始时")&&x.effect);y.length>0&&h&&(o=Ae(o,y,e,`${o.players[s].name}的被动【${b.name}】`,"回合开始时",{sourceCard:h}))}return it(o,e),o},Ca=E=>({phase:"menu",currentPlayerId:1,turnNumber:1,players:[Oe(1),Oe(2)],winner:null,sharedDeck:E.sharedDeck,heroCards:E.heroCards,heroCard:E.heroCard,groups:E.groups,publicBattleDeck:[],waitingForNextPlayer:!1,newlyDrawnCardIds:[],gameLogs:[],discardPile:[],soundEffects:[],mulliganCards:[],mulliganSelected:[],mulliganFirstPlayer:0,mulliganDone:0,skipFirstDraw:!1,pendingVisualEffects:[],pendingSpeechEvents:[],p2MulliganCards:[],p2MulliganSelected:[],online:{isOnline:!1,playerId:"",playerNickname:"",currentRoom:null,messages:[],playerReady:[],localDeckImport:null,remoteDeckImports:{},battlePlayers:[],isSpectator:!1,spectatorViewPlayerId:"",diceRolls:[],firstPlayerId:"",lastLoserId:"",rematchRequested:[],isWaitingForGameState:!1,heroSelections:{}}}),Ia=E=>({...E,phase:"cardCreator"}),Sa=E=>({...E,phase:"heroEditor"}),$a=E=>({...E,phase:"cardManager"}),_a=(E,e)=>{const s=[...E.sharedDeck],a=xe(e),r=s.findIndex(l=>xe(l.card)===a);r!==-1?s[r]={...s[r],count:s[r].count+1}:s.push({card:e,count:1});const i=E.groups[0],n=[...i.cards],t=n.findIndex(l=>xe(l.card)===a);return t!==-1?n[t]={...n[t],count:n[t].count+1}:n.push({card:e,count:1}),{...E,sharedDeck:s,groups:[{...i,cards:n},...E.groups.slice(1)]}},Ta=(E,e)=>{const s=xe(e),a=[...E.sharedDeck],r=a.findIndex(l=>xe(l.card)===s);if(r!==-1)a[r]={...a[r],count:a[r].count+1};else{const l={...e,id:Ee()};a.push({card:l,count:1})}const i=E.groups[0],n=[...i.cards],t=n.findIndex(l=>xe(l.card)===s);if(t!==-1)n[t]={...n[t],count:n[t].count+1};else{const l={...e,id:Ee()};n.push({card:l,count:1})}return{...E,sharedDeck:a,groups:[{...i,cards:n},...E.groups.slice(1)]}},Pa=(E,e)=>{const s=[...E.sharedDeck],a=s.findIndex(l=>l.card.id===e);if(a===-1)return E;const r=s[a],i=E.groups[0],n=i.cards.findIndex(l=>l.card.id===e);let t=[...i.cards];return r.count>1?(s[a]={...r,count:r.count-1},n!==-1&&(t[n]={...t[n],count:t[n].count-1})):(s.splice(a,1),n!==-1&&t.splice(n,1)),{...E,sharedDeck:s,groups:[{...i,cards:t},...E.groups.slice(1)]}},Ma=(E,e)=>{const s=[...E.sharedDeck],a=s.findIndex(i=>i.card.id===e);if(a===-1)return E;const r=s[a];if(r.count>1){s[a]={...r,count:r.count-1};const i=E.groups[0],n=[...i.cards],t=n.findIndex(l=>l.card.id===e);return t!==-1&&(n[t]={...n[t],count:n[t].count-1}),{...E,sharedDeck:s,groups:[{...i,cards:n},...E.groups.slice(1)]}}return E},Aa=(E,e)=>{const s=xe(e),a=E.groups[0];return{...E,sharedDeck:E.sharedDeck.filter(r=>xe(r.card)!==s),groups:[{...a,cards:a.cards.filter(r=>xe(r.card)!==s)},...E.groups.slice(1)]}},Da=(E,e)=>{const s=e.length>0&&"count"in e[0]?e:Qe(e),a=E.groups[0];return{...E,sharedDeck:s,groups:[{...a,cards:[...s]},...E.groups.slice(1)]}},La=(E,e)=>{const s=e.length>0&&"count"in e[0]?e:Qe(e),a=[...E.sharedDeck],r=new Map;for(const l of a)r.set(xe(l.card),l);for(const l of s){const o=xe(l.card),d=r.get(o);d?d.count+=l.count:(r.set(o,{card:l.card,count:l.count}),a.push({card:l.card,count:l.count}))}const i=E.groups[0],n=[...i.cards],t=new Map;for(const l of n)t.set(xe(l.card),l);for(const l of s){const o=xe(l.card),d=t.get(o);d?d.count+=l.count:(t.set(o,{card:l.card,count:l.count}),n.push({card:l.card,count:l.count}))}return{...E,sharedDeck:a,groups:[{...i,cards:n},...E.groups.slice(1)]}},Ra=(E,e)=>({...E,groups:[...E.groups,{id:`group_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,name:e,cards:[]}]}),Ba=(E,e)=>{const s=E.groups.find(r=>r.id===e);if(!s||s.id===Le)return E;const a=E.groups[0];return{...E,groups:[{...a,cards:[...a.cards,...s.cards]},...E.groups.slice(1).filter(r=>r.id!==e)]}},Oa=(E,e,s)=>e===Le?E:{...E,groups:E.groups.map(a=>a.id===e?{...a,name:s}:a)},Na=(E,e,s)=>{const a=E.groups.find(d=>d.id===e),r=E.groups.find(d=>d.cards.some(p=>p.card.id===s));if(!a||!r||r.id===a.id)return E;const i=r.cards.find(d=>d.card.id===s);if(!i)return E;const n=r.cards.filter(d=>d.card.id!==s),t=xe(i.card),o=a.cards.find(d=>xe(d.card)===t)?a.cards.map(d=>xe(d.card)===t?{...d,count:d.count+i.count}:d):[...a.cards,{card:{...i.card},count:i.count}];return{...E,groups:E.groups.map(d=>d.id===r.id?{...d,cards:n}:d.id===a.id?{...d,cards:o}:d)}},Ha=(E,e)=>{switch(e.type){case"SHOW_SETUP":return la(E);case"START_GAME":return ua(E,e.player1Name,e.player2Name,e.player1Hero,e.player2Hero);case"TOGGLE_MULLIGAN_CARD":{const s=e.cardId,a=E.mulliganSelected.includes(s);return{...E,mulliganSelected:a?E.mulliganSelected.filter(r=>r!==s):[...E.mulliganSelected,s]}}case"TOGGLE_P2_MULLIGAN_CARD":{const s=e.cardId,a=E.p2MulliganSelected.includes(s);return{...E,p2MulliganSelected:a?E.p2MulliganSelected.filter(r=>r!==s):[...E.p2MulliganSelected,s]}}case"CONFIRM_MULLIGAN":if(E.mulliganDone===0&&!e.forceP2Branch){console.log("[DEBUG] CONFIRM_MULLIGAN trigger",{currentPlayer:E.currentPlayerId,turnNumber:E.turnNumber,phase:E.phase,mulliganFirstPlayer:E.mulliganFirstPlayer,mulliganCardsCount:E.mulliganCards.length,mulliganSelected:E.mulliganSelected});const s=E.currentPlayerId,a=s-1,r=E.mulliganSelected,i=E.mulliganCards.filter(o=>!r.includes(o.id));let n={...E};const t=E.mulliganCards.filter(o=>r.includes(o.id)),l=[];for(let o=0;o<r.length;o++){const d=Ge(n,s,!1);d&&l.push(d)}if(n.players[a]={...n.players[a],personalBattleDeck:[...n.players[a].personalBattleDeck||[],...t]},n.players[a]={...n.players[a],hand:[...n.players[a].hand,...i,...l]},n.mulliganCards=[],n.mulliganSelected=[],n.newlyDrawnCardIds=l.map(o=>o.id),s===1&&E.mulliganFirstPlayer===1)if(n.players.length>1&&n.players[1].name&&n.players[1].name.includes("Robot")){const p=[];for(let h=0;h<4;h++){const f=Ge(n,2,!0);f&&p.push(f)}if(!p.some(h=>h.legacyEffect==="gain_energy"||h.name==="幸运币")){const h=xt();p.push(h)}n.players[1]={...n.players[1],hand:p},n.phase="robotBattle",n.currentPlayerId=2,n.turnNumber=1,n.mulliganCards=[],n.mulliganDone=2,n.newlyDrawnCardIds=p.map(h=>h.id)}else n.phase=n.online?.currentRoom?"mulligan":"playing",n.currentPlayerId=1,n.mulliganDone=1,n.mulliganCards=[],n.mulliganSelected=[],n.online?.currentRoom;return console.log("[DEBUG] CONFIRM_MULLIGAN return",{currentPlayer:n.currentPlayerId,turnNumber:n.turnNumber,phase:n.phase,mulliganFirstPlayer:n.mulliganFirstPlayer,player0Energy:n.players[0].energy,player0MaxEnergy:n.players[0].maxEnergy,player1Energy:n.players[1].energy,player1MaxEnergy:n.players[1].maxEnergy}),n}else{let s={...E};const a=E.p2MulliganSelected,r=E.p2MulliganCards.filter(o=>!a.includes(o.id)),i=E.p2MulliganCards.filter(o=>a.includes(o.id)),n=[];for(let o=0;o<a.length;o++){const d=Ge(s,2,!1);d&&n.push(d)}s.players[1]={...s.players[1],personalBattleDeck:[...s.players[1].personalBattleDeck||[],...i]},s.players[1]={...s.players[1],hand:[...s.players[1].hand,...r,...n]},s.p2MulliganCards=[],s.p2MulliganSelected=[],s.newlyDrawnCardIds=n.map(o=>o.id);const t=s.players[1];if(!t.hand.some(o=>o.legacyEffect==="gain_energy"||o.name==="幸运币")){const o=xt();s.players[1]={...t,hand:[...t.hand,o]},s.newlyDrawnCardIds=[...s.newlyDrawnCardIds,o.id]}return s.mulliganDone=2,s.online?.currentRoom?(s.phase="onlineBattle",s.currentPlayerId=1,s.waitingForNextPlayer=!0,s.mulliganCards=[],s.mulliganSelected=[]):(s.phase="playing",s.currentPlayerId=2,s.mulliganCards=[],s.mulliganSelected=[]),s}case"END_TURN":return wa(E);case"SHOW_ROBOT_SETUP":return da(E);case"START_ROBOT_BATTLE":return ca(E,e.playerName,e.playerHero);case"END_ROBOT_TURN":return ha(E);case"START_MY_TURN":return Ea(E);case"DRAW_CARD":return fa(E,e.playerId);case"PLAY_CARD":return Yt(E,e.playerId,e.cardId);case"PLAY_CARD_WITH_TARGET":return ga(E,e.playerId,e.cardId,e.targetPlayerId,e.targetCardId);case"EXECUTE_PLAYED_MINION_EFFECT":return ma(E,e.playerId,e.cardId,e.targetPlayerId,e.targetCardId);case"ATTACK":return xa(E,e.attackerPlayerId,e.attackerCardId,e.targetPlayerId,e.targetCardId);case"ATTACK_HERO":return va(E,e.attackerPlayerId,e.attackerCardId,e.targetPlayerId);case"TOGGLE_DEFENSE":return ka(E,e.playerId,e.cardId);case"BACK_TO_MENU":return Ca(E);case"SHOW_CARD_CREATOR":return Ia(E);case"SHOW_HERO_EDITOR":return Sa(E);case"SHOW_CARD_MANAGER":return $a(E);case"ADD_CARD":return _a(E,e.card);case"ADD_CARD_BY_TEMPLATE":return Ta(E,e.cardTemplate);case"DELETE_CARD":return Pa(E,e.cardId);case"DELETE_HERO_CARD":return{...E,heroCards:E.heroCards.filter(s=>s.id!==e.heroId)};case"DECREASE_CARD_COUNT":return Ma(E,e.cardId);case"DELETE_ALL_CARDS_BY_TEMPLATE":return Aa(E,e.cardTemplate);case"SET_DECK":return Da(E,e.cards);case"IMPORT_CARDS":return La(E,e.cards);case"CREATE_GROUP":return Ra(E,e.name);case"DELETE_GROUP":return Ba(E,e.groupId);case"RENAME_GROUP":return Oa(E,e.groupId,e.name);case"MOVE_CARD_TO_GROUP":return Na(E,e.groupId,e.cardId);case"CLEAR_NEWLY_DRAWN":return{...E,newlyDrawnCardIds:[]};case"SHOW_LOBBY":return{...E,phase:"lobby",online:{...E.online,isOnline:!0,playerId:e.playerId,playerNickname:e.playerNickname}};case"SHOW_ROOM":return{...E,phase:"room",online:{...E.online,isOnline:!0,playerId:e.playerId,playerNickname:e.playerNickname,currentRoom:e.room,messages:[],playerReady:[],localDeckImport:null,remoteDeckImports:{}}};case"UPDATE_ROOM":return{...E,online:{...E.online,currentRoom:e.room}};case"UPDATE_MESSAGES":return{...E,online:{...E.online,messages:e.messages}};case"ADD_MESSAGE":return{...E,online:{...E.online,messages:[...E.online.messages,e.message]}};case"UPDATE_PLAYER_READY":return{...E,online:{...E.online,playerReady:e.playerReady}};case"LEAVE_ROOM":return{...E,phase:"lobby",online:{...E.online,currentRoom:null,messages:[],playerReady:[],localDeckImport:null,remoteDeckImports:{},battlePlayers:[],isSpectator:!1,spectatorViewPlayerId:"",diceRolls:[],firstPlayerId:"",lastLoserId:"",rematchRequested:[]}};case"SET_ONLINE_HERO":return{...E,online:{...E.online,heroSelections:{...E.online.heroSelections,[e.playerId]:e.heroCard}}};case"UPDATE_LOCAL_DECK_IMPORT":return console.log("[DEBUG reducer] UPDATE_LOCAL_DECK_IMPORT:",e.filename,e.cardCount),{...E,sharedDeck:e.entries,heroCards:e.heroCards!==void 0?e.heroCards:E.heroCards,online:{...E.online,localDeckImport:{filename:e.filename,cardCount:e.cardCount,entries:e.entries}}};case"UPDATE_REMOTE_DECK_IMPORT":return{...E,online:{...E.online,remoteDeckImports:{...E.online.remoteDeckImports,[e.playerId]:{filename:e.filename,cardCount:e.cardCount,playerNickname:e.playerNickname,...e.comparisonData?{comparisonData:e.comparisonData}:{}}}}};case"START_ONLINE_BATTLE":{const a=Array.isArray(e.onlineDeck)&&e.onlineDeck.length>0&&"count"in e.onlineDeck[0]?e.onlineDeck:Qe(e.onlineDeck);return{...E,phase:"diceRoll",sharedDeck:a,online:{...E.online,battlePlayers:e.battlePlayers,isSpectator:e.isSpectator,spectatorViewPlayerId:e.battlePlayers[0]?.playerId||"",diceRolls:[],firstPlayerId:"",rematchRequested:[]}}}case"SET_DICE_ROLLS":return{...E,online:{...E.online,diceRolls:e.diceRolls,firstPlayerId:e.firstPlayerId,spectatorViewPlayerId:e.firstPlayerId}};case"START_ONLINE_GAME":{const s=e.player1Name,a=e.player2Name,r=e.player1Hero,i=e.player2Hero;Et();const n=e.player1PersonalKeys||[],t=e.player2PersonalKeys||[],l=[],o=[],d=[];if(e.sharedDeckOrder&&e.sharedDeckOrder.length>0)for(let m=0;m<e.sharedDeckOrder.length;m++){const y=e.sharedDeckOrder[m],x=E.sharedDeck.find(C=>xe(C.card)===y);if(!x){console.warn("【START_ONLINE_GAME】本地未找到卡牌模板:",y,"跳过");continue}const v={...x.card,id:Ee()};n.includes(y)?o.push(v):t.includes(y)?d.push(v):l.push(v)}else{const m=[];let y=0;for(const x of E.sharedDeck)if(x.card.type!=="hero")for(let v=0;v<x.count;v++)m.push({...x.card,id:1e5+y++});l.push(...Ve(m))}const p=[],c=[],h=[],f=[];for(let m=0;m<l.length;m++)m%2===0?h.push(l[m]):f.push(l[m]);const u=[];for(let m=0;m<3;m++)if(h.length>0){const y={...h[0],id:Ee()};u.push(y),h.splice(0,1)}const b=[];for(let m=0;m<4;m++)if(f.length>0){const y={...f[0],id:Ee()};b.push(y),f.splice(0,1)}return{...E,phase:"mulligan",currentPlayerId:1,turnNumber:1,publicBattleDeck:[],sharedDeck:E.sharedDeck,players:[{...Oe(1),name:s,deck:[],personalBattleDeck:o,halfPublicDeck:h,hand:p,energy:1,maxEnergy:1,heroCard:r||null},{...Oe(2),name:a,deck:[],personalBattleDeck:d,halfPublicDeck:f,hand:c,energy:1,maxEnergy:1,heroCard:i||null}],winner:null,waitingForNextPlayer:!1,newlyDrawnCardIds:u.map(m=>m.id),discardPile:[],mulliganCards:u,mulliganSelected:[],p2MulliganCards:b,p2MulliganSelected:[],mulliganFirstPlayer:1,mulliganDone:0,online:{...E.online,firstPlayerId:e.firstPlayerId,isWaitingForGameState:!1,heroSelections:{},rematchRequested:[]}}}case"SET_SPECTATOR_VIEW":return{...E,online:{...E.online,spectatorViewPlayerId:e.playerId}};case"REQUEST_REMATCH":return{...E,online:{...E.online,rematchRequested:[...E.online.rematchRequested,e.playerId]}};case"BACK_TO_ROOM":return{...E,phase:"room",winner:null,online:{...E.online,battlePlayers:[],isSpectator:!1,spectatorViewPlayerId:"",diceRolls:[],firstPlayerId:"",rematchRequested:[],isWaitingForGameState:!1,heroSelections:{}}};case"ONLINE_GAME_OVER":{let s=1;return e.winnerId&&typeof e.winnerId=="string"?(s=E.online.battlePlayers.findIndex(r=>r.playerId===e.winnerId)+1,(s<1||s>2)&&(s=1)):console.error("[ONLINE_GAME_OVER] 无法解析 winner，action内容:",e),{...E,phase:"onlineGameOver",winner:s,online:{...E.online,lastLoserId:e.loserId}}}case"PLAY_HERO_SKILL":{const{playerId:s,skillIndex:a,targetPlayerId:r,targetCardId:i}=e;return pa(E,s,a,r,i)}default:return E}},oe=(E,e)=>Ha(E,e),Xe=E=>({id:E.id,templateKey:xe(E),name:E.name,type:E.type,cost:E.cost,attack:E.attack,health:E.health,maxHealth:E.maxHealth,armorValue:E.armorValue,imageData:E.imageData}),Va=E=>({id:E.id,templateKey:xe(E),name:E.name,type:E.type,cost:E.cost,attack:E.attack,health:E.health,maxHealth:E.maxHealth,armorValue:E.armorValue,imageData:E.imageData,canAttack:E.canAttack,hasAttacked:E.hasAttacked,attacksThisTurn:E.attacksThisTurn,maxAttacksPerTurn:E.maxAttacksPerTurn,divineShieldActive:E.divineShieldActive,canAttackHeroes:E.canAttackHeroes,canAttackMinions:E.canAttackMinions,playedThisTurn:E.playedThisTurn,isDefending:E.isDefending,preparation:E.preparation,markCount:E.markCount,pendingNextTurnEffect:E.pendingNextTurnEffect?JSON.stringify(E.pendingNextTurnEffect):void 0,keywords:E.keywords}),Zt=E=>{const e=s=>({id:s.id,name:s.name,health:s.health,maxHealth:s.maxHealth,energy:s.energy,maxEnergy:s.maxEnergy,bonusEnergy:s.bonusEnergy||0,heroMarkCount:s.heroMarkCount||0,heroSkillUsed:s.heroSkillUsed||[],heroCard:s.heroCard?Xe(s.heroCard):null,elementStatus:s.elementStatus,frozen:s.frozen,hand:s.hand.map(Xe),board:s.board.map(Va),pendingSpellNextTurnEffects:s.pendingSpellNextTurnEffects&&s.pendingSpellNextTurnEffects.length>0?JSON.stringify(s.pendingSpellNextTurnEffects.map(a=>({effect:a.effect,sourceCard:{templateKey:xe(a.sourceCard),id:a.sourceCard.id,name:a.sourceCard.name,type:a.sourceCard.type}}))):void 0});return{currentPlayerId:E.currentPlayerId,turnNumber:E.turnNumber,players:[e(E.players[0]),e(E.players[1])],winner:E.winner,gamePhase:E.phase==="mulligan"?"mulligan":E.phase==="onlineGameOver"?"onlineGameOver":E.phase==="gameOver"?"gameOver":E.phase==="onlineBattle"?"onlineBattle":"playing",newlyDrawnCardIds:E.newlyDrawnCardIds,recentLogs:E.gameLogs.slice(-10).map(s=>({turn:s.turn,type:s.type,message:s.message})),timestamp:Date.now(),mulliganCards:E.mulliganCards?.map(Xe),mulliganSelected:E.mulliganSelected,p2MulliganCards:E.p2MulliganCards?.map(Xe),p2MulliganSelected:E.p2MulliganSelected,mulliganDone:E.mulliganDone,mulliganFirstPlayer:E.mulliganFirstPlayer,waitingForNextPlayer:E.waitingForNextPlayer,discardPileDiff:[]}},vt=(E,e)=>{const s=e.find(a=>xe(a.card)===E);return s?s.card:null},Ze=(E,e)=>{if(E.name==="幸运币")return{id:E.id,name:"幸运币",cost:0,attack:0,health:0,maxHealth:0,type:"spell",keywords:[],legacyEffect:"gain_energy",legacyEffectValue:1,imageData:"/cards/coin.png"};const s=vt(E.templateKey,e);if(!s){const a=e.find(r=>r.card.name===E.name&&r.card.type===E.type);return a?(console.log("[deserialize] 回退匹配成功:",E.name,E.type),{...a.card,id:E.id,cost:E.cost,attack:E.attack,health:E.health,maxHealth:E.maxHealth,armorValue:E.armorValue,imageData:E.imageData||a.card.imageData}):(console.warn(`[deserialize] 模板缺失: ${E.templateKey}，降级重建。name=${E.name}, type=${E.type}, sharedDeck大小=${e.length}`),{id:E.id,name:E.name||"?",cost:E.cost,attack:E.attack,health:E.health,maxHealth:E.maxHealth,type:E.type||"minion",keywords:E.keywords||[],armorValue:E.armorValue,imageData:E.imageData})}return{...s,id:E.id,cost:E.cost,attack:E.attack,health:E.health,maxHealth:E.maxHealth,armorValue:E.armorValue}},za=(E,e)=>({...Ze(E,e),canAttack:E.canAttack??!0,hasAttacked:E.hasAttacked??!1,attacksThisTurn:E.attacksThisTurn??0,maxAttacksPerTurn:E.maxAttacksPerTurn??1,divineShieldActive:E.divineShieldActive??!1,canAttackHeroes:E.canAttackHeroes??!0,canAttackMinions:E.canAttackMinions??!0,playedThisTurn:E.playedThisTurn??!1,isDefending:E.isDefending??!1,preparation:E.preparation??0,markCount:E.markCount,elementStatus:E.elementStatus,frozen:E.frozen??!1,pendingNextTurnEffect:E.pendingNextTurnEffect?JSON.parse(E.pendingNextTurnEffect):void 0,pendingNextTurnEffectOwnerId:void 0,keywords:E.keywords??[]}),Jt=(E,e)=>{let s=0,a=0;const r=i=>{const n={id:i.id,name:i.name,health:i.health,maxHealth:i.maxHealth,energy:i.energy,maxEnergy:i.maxEnergy,bonusEnergy:i.bonusEnergy,heroMarkCount:i.heroMarkCount,heroSkillUsed:i.heroSkillUsed,heroCard:i.heroCard?Ze(i.heroCard,e):null,elementStatus:i.elementStatus,frozen:i.frozen??!1,hand:i.hand.map(t=>Ze(t,e)),board:i.board.map(t=>za(t,e)),deck:[],personalBattleDeck:[],halfPublicDeck:[]};if(i.pendingSpellNextTurnEffects)try{const t=JSON.parse(i.pendingSpellNextTurnEffects);n.pendingSpellNextTurnEffects=t.map(l=>{const o=vt(l.sourceCard.templateKey,e);return{effect:l.effect,sourceCard:o?{...o,id:l.sourceCard.id}:{id:l.sourceCard.id,name:l.sourceCard.name,type:l.sourceCard.type,cost:0,attack:0,health:0,maxHealth:0,keywords:[]}}})}catch(t){console.warn("[deserializeGameState] 解析 pendingSpellNextTurnEffects 失败:",t)}return n};for(const i of E.players)for(const n of[...i.hand,...i.board])a++,vt(n.templateKey,e)||s++;return s>0?console.warn(`[deserializeGameState] 模板缺失 ${s}/${a} (${(s/a*100).toFixed(1)}%)`):console.log(`[deserializeGameState] 全部 ${a} 张卡牌模板匹配成功`),{currentPlayerId:E.currentPlayerId,turnNumber:E.turnNumber,players:[r(E.players[0]),r(E.players[1])],winner:E.winner,phase:E.gamePhase,newlyDrawnCardIds:E.newlyDrawnCardIds,mulliganCards:E.mulliganCards?.map(i=>Ze(i,e)),mulliganSelected:E.mulliganSelected,mulliganDone:E.mulliganDone??0,mulliganFirstPlayer:E.mulliganFirstPlayer??1,p2MulliganCards:E.p2MulliganCards?.map(i=>Ze(i,e)),p2MulliganSelected:E.p2MulliganSelected,waitingForNextPlayer:E.waitingForNextPlayer??!1}},_t=Object.freeze(Object.defineProperty({__proto__:null,cardsToDeckEntries:Qe,deckEntriesToCards:Ye,deserializeGameState:Jt,drawCardInternalWithReturn:Ge,evaluateCondition:ot,executeEffect:Ce,findHeroGroup:Je,gameReducer:oe,getAllHeroCards:Gt,getCardTemplateKey:xe,getGroupById:jt,getPublicGroup:Re,initGameState:Ut,serializeGameState:Zt,shuffleWithSeed:oa},Symbol.toStringTag,{value:"Module"})),Fa="MiaoKaBao_Deck",ja=1,Ne="deck";function lt(){return new Promise((E,e)=>{const s=indexedDB.open(Fa,ja);s.onupgradeneeded=()=>{const a=s.result;a.objectStoreNames.contains(Ne)||a.createObjectStore(Ne,{keyPath:"id"})},s.onsuccess=()=>E(s.result),s.onerror=()=>e(s.error)})}async function Tt(E,e,s){try{const a=await lt(),r=a.transaction(Ne,"readwrite");r.objectStore(Ne).put({id:"main",sharedDeck:E,heroCards:e,groups:s,updatedAt:Date.now()}),await new Promise((n,t)=>{r.oncomplete=()=>n(),r.onerror=()=>t(r.error)}),a.close()}catch(a){console.warn("[deckStorage] 保存卡包失败:",a)}}async function Ga(){try{const E=await lt(),s=E.transaction(Ne,"readonly").objectStore(Ne),a=await new Promise((r,i)=>{const n=s.get("main");n.onsuccess=()=>r(n.result),n.onerror=()=>i(n.error)});return E.close(),a&&a.sharedDeck&&a.sharedDeck.length>0?{sharedDeck:a.sharedDeck,heroCards:a.heroCards||[],groups:a.groups}:null}catch(E){return console.warn("[deckStorage] 读取卡包失败:",E),null}}async function Pt(E){try{const e=await lt(),s=e.transaction(Ne,"readwrite"),a=s.objectStore(Ne);E?a.put({id:"folderHandle",handle:E,updatedAt:Date.now()}):a.delete("folderHandle"),await new Promise((r,i)=>{s.oncomplete=()=>r(),s.onerror=()=>i(s.error)}),e.close()}catch(e){console.warn("[deckStorage] 保存文件夹句柄失败:",e)}}async function Ua(){try{const E=await lt(),s=E.transaction(Ne,"readonly").objectStore(Ne),a=await new Promise((r,i)=>{const n=s.get("folderHandle");n.onsuccess=()=>r(n.result),n.onerror=()=>i(n.error)});return E.close(),a?.handle||null}catch(E){return console.warn("[deckStorage] 读取文件夹句柄失败:",E),null}}var at=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dt(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var ct,Mt;function Wa(){return Mt||(Mt=1,ct=function(E,e,s){var a=[],r=E.length;if(r===0)return a;var i=e<0?Math.max(0,e+r):e||0;for(s!==void 0&&(r=s<0?s+r:s);r-- >i;)a[r-i]=E[r];return a}),ct}var ht={},At;function Qt(){return At||(At=1,(function(E){(function(e){e(typeof DO_NOT_EXPORT_CRC>"u"?E:{})})(function(e){e.version="0.3.0";function s(){for(var o=0,d=new Array(256),p=0;p!=256;++p)o=p,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,o=o&1?-306674912^o>>>1:o>>>1,d[p]=o;return typeof Int32Array<"u"?new Int32Array(d):d}var a=s(),r=typeof Buffer<"u";function i(o){if(o.length>32768&&r)return t(new Buffer(o));for(var d=-1,p=o.length-1,c=0;c<p;)d=a[(d^o.charCodeAt(c++))&255]^d>>>8,d=a[(d^o.charCodeAt(c++))&255]^d>>>8;return c===p&&(d=d>>>8^a[(d^o.charCodeAt(c))&255]),d^-1}function n(o){if(o.length>1e4)return t(o);for(var d=-1,p=0,c=o.length-3;p<c;)d=d>>>8^a[(d^o[p++])&255],d=d>>>8^a[(d^o[p++])&255],d=d>>>8^a[(d^o[p++])&255],d=d>>>8^a[(d^o[p++])&255];for(;p<c+3;)d=d>>>8^a[(d^o[p++])&255];return d^-1}function t(o){for(var d=-1,p=0,c=o.length-7;p<c;)d=d>>>8^a[(d^o[p++])&255],d=d>>>8^a[(d^o[p++])&255],d=d>>>8^a[(d^o[p++])&255],d=d>>>8^a[(d^o[p++])&255],d=d>>>8^a[(d^o[p++])&255],d=d>>>8^a[(d^o[p++])&255],d=d>>>8^a[(d^o[p++])&255],d=d>>>8^a[(d^o[p++])&255];for(;p<c+7;)d=d>>>8^a[(d^o[p++])&255];return d^-1}function l(o){for(var d=-1,p=0,c=o.length,h,f;p<c;)h=o.charCodeAt(p++),h<128?d=d>>>8^a[(d^h)&255]:h<2048?(d=d>>>8^a[(d^(192|h>>6&31))&255],d=d>>>8^a[(d^(128|h&63))&255]):h>=55296&&h<57344?(h=(h&1023)+64,f=o.charCodeAt(p++)&1023,d=d>>>8^a[(d^(240|h>>8&7))&255],d=d>>>8^a[(d^(128|h>>2&63))&255],d=d>>>8^a[(d^(128|f>>6&15|h&3))&255],d=d>>>8^a[(d^(128|f&63))&255]):(d=d>>>8^a[(d^(224|h>>12&15))&255],d=d>>>8^a[(d^(128|h>>6&63))&255],d=d>>>8^a[(d^(128|h&63))&255]);return d^-1}e.table=a,e.bstr=i,e.buf=n,e.str=l})})(ht)),ht}var ut,Dt;function Ya(){if(Dt)return ut;Dt=1;var E=Wa(),e=Qt();ut=i;var s=new Uint8Array(4),a=new Int32Array(s.buffer),r=new Uint32Array(s.buffer);function i(n){var t=8,l=t,o;for(o=0;o<n.length;o++)t+=n[o].data.length,t+=12;var d=new Uint8Array(t);for(d[0]=137,d[1]=80,d[2]=78,d[3]=71,d[4]=13,d[5]=10,d[6]=26,d[7]=10,o=0;o<n.length;o++){var p=n[o],c=p.name,h=p.data,f=h.length,u=[c.charCodeAt(0),c.charCodeAt(1),c.charCodeAt(2),c.charCodeAt(3)];r[0]=f,d[l++]=s[3],d[l++]=s[2],d[l++]=s[1],d[l++]=s[0],d[l++]=u[0],d[l++]=u[1],d[l++]=u[2],d[l++]=u[3];for(var b=0;b<f;)d[l++]=h[b++];var m=u.concat(E(h)),y=e.buf(m);a[0]=y,d[l++]=s[3],d[l++]=s[2],d[l++]=s[1],d[l++]=s[0]}return d}return ut}var qa=Ya();const ft=dt(qa);var pt,Lt;function Ka(){if(Lt)return pt;Lt=1;var E=Qt();pt=r;var e=new Uint8Array(4),s=new Int32Array(e.buffer),a=new Uint32Array(e.buffer);function r(i){if(i[0]!==137)throw new Error("Invalid .png file header");if(i[1]!==80)throw new Error("Invalid .png file header");if(i[2]!==78)throw new Error("Invalid .png file header");if(i[3]!==71)throw new Error("Invalid .png file header");if(i[4]!==13)throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");if(i[5]!==10)throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");if(i[6]!==26)throw new Error("Invalid .png file header");if(i[7]!==10)throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");for(var n=!1,t=[],l=8;l<i.length;){e[3]=i[l++],e[2]=i[l++],e[1]=i[l++],e[0]=i[l++];var o=a[0]+4,d=new Uint8Array(o);d[0]=i[l++],d[1]=i[l++],d[2]=i[l++],d[3]=i[l++];var p=String.fromCharCode(d[0])+String.fromCharCode(d[1])+String.fromCharCode(d[2])+String.fromCharCode(d[3]);if(!t.length&&p!=="IHDR")throw new Error("IHDR header missing");if(p==="IEND"){n=!0,t.push({name:p,data:new Uint8Array(0)});break}for(var c=4;c<o;c++)d[c]=i[l++];e[3]=i[l++],e[2]=i[l++],e[1]=i[l++],e[0]=i[l++];var h=s[0],f=E.buf(d);if(f!==h)throw new Error("CRC values for "+p+" header do not match, PNG file is likely corrupted");var u=new Uint8Array(d.buffer.slice(4));t.push({name:p,data:u})}if(!n)throw new Error(".png file ended prematurely: no IEND header was found");return t}return pt}var Xa=Ka();const We=dt(Xa);var st={},gt,Rt;function Za(){if(Rt)return gt;Rt=1,gt=E;function E(e,s){if(e=String(e),s=String(s),!/^[\x00-\xFF]+$/.test(e)||!/^[\x00-\xFF]+$/.test(s))throw new Error("Only Latin-1 characters are permitted in PNG tEXt chunks. You might want to consider base64 encoding and/or zEXt compression");if(e.length>=80)throw new Error('Keyword "'+e+'" is longer than the 79-character limit imposed by the PNG specification');for(var a=e.length+s.length+1,r=new Uint8Array(a),i=0,n,t=0;t<e.length;t++){if(!(n=e.charCodeAt(t)))throw new Error("0x00 character is not permitted in tEXt keywords");r[i++]=n}r[i++]=0;for(var l=0;l<s.length;l++){if(!(n=s.charCodeAt(l)))throw new Error("0x00 character is not permitted in tEXt content");r[i++]=n}return{name:"tEXt",data:r}}return gt}var mt,Bt;function Ja(){if(Bt)return mt;Bt=1,mt=E;function E(e){e.data&&e.name&&(e=e.data);for(var s=!0,a="",r="",i=0;i<e.length;i++){var n=e[i];if(s)n?r+=String.fromCharCode(n):s=!1;else if(n)a+=String.fromCharCode(n);else throw new Error("Invalid NULL character found. 0x00 character is not permitted in tEXt content")}return{keyword:r,text:a}}return mt}var Ot;function Qa(){return Ot||(Ot=1,st.encode=Za(),st.decode=Ja()),st}var es=Qa();const ze=dt(es);function nt(E){throw new Error('Could not dynamically require "'+E+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var yt={exports:{}};var Nt;function ts(){return Nt||(Nt=1,(function(E,e){(function(s){E.exports=s()})(function(){return(function s(a,r,i){function n(o,d){if(!r[o]){if(!a[o]){var p=typeof nt=="function"&&nt;if(!d&&p)return p(o,!0);if(t)return t(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var h=r[o]={exports:{}};a[o][0].call(h.exports,function(f){var u=a[o][1][f];return n(u||f)},h,h.exports,s,a,r,i)}return r[o].exports}for(var t=typeof nt=="function"&&nt,l=0;l<i.length;l++)n(i[l]);return n})({1:[function(s,a,r){var i=s("./utils"),n=s("./support"),t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var o,d,p,c,h,f,u,b=[],m=0,y=l.length,x=y,v=i.getTypeOf(l)!=="string";m<l.length;)x=y-m,p=v?(o=l[m++],d=m<y?l[m++]:0,m<y?l[m++]:0):(o=l.charCodeAt(m++),d=m<y?l.charCodeAt(m++):0,m<y?l.charCodeAt(m++):0),c=o>>2,h=(3&o)<<4|d>>4,f=1<x?(15&d)<<2|p>>6:64,u=2<x?63&p:64,b.push(t.charAt(c)+t.charAt(h)+t.charAt(f)+t.charAt(u));return b.join("")},r.decode=function(l){var o,d,p,c,h,f,u=0,b=0,m="data:";if(l.substr(0,m.length)===m)throw new Error("Invalid base64 input, it looks like a data url.");var y,x=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===t.charAt(64)&&x--,l.charAt(l.length-2)===t.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=n.uint8array?new Uint8Array(0|x):new Array(0|x);u<l.length;)o=t.indexOf(l.charAt(u++))<<2|(c=t.indexOf(l.charAt(u++)))>>4,d=(15&c)<<4|(h=t.indexOf(l.charAt(u++)))>>2,p=(3&h)<<6|(f=t.indexOf(l.charAt(u++))),y[b++]=o,h!==64&&(y[b++]=d),f!==64&&(y[b++]=p);return y}},{"./support":30,"./utils":32}],2:[function(s,a,r){var i=s("./external"),n=s("./stream/DataWorker"),t=s("./stream/Crc32Probe"),l=s("./stream/DataLengthProbe");function o(d,p,c,h,f){this.compressedSize=d,this.uncompressedSize=p,this.crc32=c,this.compression=h,this.compressedContent=f}o.prototype={getContentWorker:function(){var d=new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),p=this;return d.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),d},getCompressedWorker:function(){return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},o.createWorkerFrom=function(d,p,c){return d.pipe(new t).pipe(new l("uncompressedSize")).pipe(p.compressWorker(c)).pipe(new l("compressedSize")).withStreamInfo("compression",p)},a.exports=o},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(s,a,r){var i=s("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},r.DEFLATE=s("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(s,a,r){var i=s("./utils"),n=(function(){for(var t,l=[],o=0;o<256;o++){t=o;for(var d=0;d<8;d++)t=1&t?3988292384^t>>>1:t>>>1;l[o]=t}return l})();a.exports=function(t,l){return t!==void 0&&t.length?i.getTypeOf(t)!=="string"?(function(o,d,p,c){var h=n,f=c+p;o^=-1;for(var u=c;u<f;u++)o=o>>>8^h[255&(o^d[u])];return-1^o})(0|l,t,t.length,0):(function(o,d,p,c){var h=n,f=c+p;o^=-1;for(var u=c;u<f;u++)o=o>>>8^h[255&(o^d.charCodeAt(u))];return-1^o})(0|l,t,t.length,0):0}},{"./utils":32}],5:[function(s,a,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(s,a,r){var i=null;i=typeof Promise<"u"?Promise:s("lie"),a.exports={Promise:i}},{lie:37}],7:[function(s,a,r){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",n=s("pako"),t=s("./utils"),l=s("./stream/GenericWorker"),o=i?"uint8array":"array";function d(p,c){l.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=c,this.meta={}}r.magic="\b\0",t.inherits(d,l),d.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(t.transformTo(o,p.data),!1)},d.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},d.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},d.prototype._createPako=function(){this._pako=new n[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(c){p.push({data:c,meta:p.meta})}},r.compressWorker=function(p){return new d("Deflate",p)},r.uncompressWorker=function(){return new d("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(s,a,r){function i(h,f){var u,b="";for(u=0;u<f;u++)b+=String.fromCharCode(255&h),h>>>=8;return b}function n(h,f,u,b,m,y){var x,v,C=h.file,g=h.compression,k=y!==o.utf8encode,w=t.transformTo("string",y(C.name)),P=t.transformTo("string",o.utf8encode(C.name)),M=C.comment,R=t.transformTo("string",y(M)),$=t.transformTo("string",o.utf8encode(M)),L=P.length!==C.name.length,T=$.length!==M.length,H="",Z="",j="",ee=C.dir,Y=C.date,ie={crc32:0,compressedSize:0,uncompressedSize:0};f&&!u||(ie.crc32=h.crc32,ie.compressedSize=h.compressedSize,ie.uncompressedSize=h.uncompressedSize);var U=0;f&&(U|=8),k||!L&&!T||(U|=2048);var W=0,he=0;ee&&(W|=16),m==="UNIX"?(he=798,W|=(function(I,A){var B=I;return I||(B=A?16893:33204),(65535&B)<<16})(C.unixPermissions,ee)):(he=20,W|=(function(I){return 63&(I||0)})(C.dosPermissions)),x=Y.getUTCHours(),x<<=6,x|=Y.getUTCMinutes(),x<<=5,x|=Y.getUTCSeconds()/2,v=Y.getUTCFullYear()-1980,v<<=4,v|=Y.getUTCMonth()+1,v<<=5,v|=Y.getUTCDate(),L&&(Z=i(1,1)+i(d(w),4)+P,H+="up"+i(Z.length,2)+Z),T&&(j=i(1,1)+i(d(R),4)+$,H+="uc"+i(j.length,2)+j);var de="";return de+=`
\0`,de+=i(U,2),de+=g.magic,de+=i(x,2),de+=i(v,2),de+=i(ie.crc32,4),de+=i(ie.compressedSize,4),de+=i(ie.uncompressedSize,4),de+=i(w.length,2),de+=i(H.length,2),{fileRecord:p.LOCAL_FILE_HEADER+de+w+H,dirRecord:p.CENTRAL_FILE_HEADER+i(he,2)+de+i(R.length,2)+"\0\0\0\0"+i(W,4)+i(b,4)+w+H+R}}var t=s("../utils"),l=s("../stream/GenericWorker"),o=s("../utf8"),d=s("../crc32"),p=s("../signature");function c(h,f,u,b){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=f,this.zipPlatform=u,this.encodeFileName=b,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}t.inherits(c,l),c.prototype.push=function(h){var f=h.meta.percent||0,u=this.entriesCount,b=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,l.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:u?(f+100*(u-b-1))/u:100}}))},c.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var f=this.streamFiles&&!h.file.dir;if(f){var u=n(h,f,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:u.fileRecord,meta:{percent:0}})}else this.accumulate=!0},c.prototype.closedSource=function(h){this.accumulate=!1;var f=this.streamFiles&&!h.file.dir,u=n(h,f,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(u.dirRecord),f)this.push({data:(function(b){return p.DATA_DESCRIPTOR+i(b.crc32,4)+i(b.compressedSize,4)+i(b.uncompressedSize,4)})(h),meta:{percent:100}});else for(this.push({data:u.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},c.prototype.flush=function(){for(var h=this.bytesWritten,f=0;f<this.dirRecords.length;f++)this.push({data:this.dirRecords[f],meta:{percent:100}});var u=this.bytesWritten-h,b=(function(m,y,x,v,C){var g=t.transformTo("string",C(v));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+i(m,2)+i(m,2)+i(y,4)+i(x,4)+i(g.length,2)+g})(this.dirRecords.length,u,h,this.zipComment,this.encodeFileName);this.push({data:b,meta:{percent:100}})},c.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},c.prototype.registerPrevious=function(h){this._sources.push(h);var f=this;return h.on("data",function(u){f.processChunk(u)}),h.on("end",function(){f.closedSource(f.previous.streamInfo),f._sources.length?f.prepareNextSource():f.end()}),h.on("error",function(u){f.error(u)}),this},c.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},c.prototype.error=function(h){var f=this._sources;if(!l.prototype.error.call(this,h))return!1;for(var u=0;u<f.length;u++)try{f[u].error(h)}catch{}return!0},c.prototype.lock=function(){l.prototype.lock.call(this);for(var h=this._sources,f=0;f<h.length;f++)h[f].lock()},a.exports=c},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(s,a,r){var i=s("../compressions"),n=s("./ZipFileWorker");r.generateWorker=function(t,l,o){var d=new n(l.streamFiles,o,l.platform,l.encodeFileName),p=0;try{t.forEach(function(c,h){p++;var f=(function(y,x){var v=y||x,C=i[v];if(!C)throw new Error(v+" is not a valid compression method !");return C})(h.options.compression,l.compression),u=h.options.compressionOptions||l.compressionOptions||{},b=h.dir,m=h.date;h._compressWorker(f,u).withStreamInfo("file",{name:c,dir:b,date:m,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(d)}),d.entriesCount=p}catch(c){d.error(c)}return d}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(s,a,r){function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var n=new i;for(var t in this)typeof this[t]!="function"&&(n[t]=this[t]);return n}}(i.prototype=s("./object")).loadAsync=s("./load"),i.support=s("./support"),i.defaults=s("./defaults"),i.version="3.10.1",i.loadAsync=function(n,t){return new i().loadAsync(n,t)},i.external=s("./external"),a.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(s,a,r){var i=s("./utils"),n=s("./external"),t=s("./utf8"),l=s("./zipEntries"),o=s("./stream/Crc32Probe"),d=s("./nodejsUtils");function p(c){return new n.Promise(function(h,f){var u=c.decompressed.getContentWorker().pipe(new o);u.on("error",function(b){f(b)}).on("end",function(){u.streamInfo.crc32!==c.decompressed.crc32?f(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}a.exports=function(c,h){var f=this;return h=i.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:t.utf8decode}),d.isNode&&d.isStream(c)?n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",c,!0,h.optimizedBinaryString,h.base64).then(function(u){var b=new l(h);return b.load(u),b}).then(function(u){var b=[n.Promise.resolve(u)],m=u.files;if(h.checkCRC32)for(var y=0;y<m.length;y++)b.push(p(m[y]));return n.Promise.all(b)}).then(function(u){for(var b=u.shift(),m=b.files,y=0;y<m.length;y++){var x=m[y],v=x.fileNameStr,C=i.resolve(x.fileNameStr);f.file(C,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:h.createFolders}),x.dir||(f.file(C).unsafeOriginalName=v)}return b.zipComment.length&&(f.comment=b.zipComment),f})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(s,a,r){var i=s("../utils"),n=s("../stream/GenericWorker");function t(l,o){n.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(o)}i.inherits(t,n),t.prototype._bindStream=function(l){var o=this;(this._stream=l).pause(),l.on("data",function(d){o.push({data:d,meta:{percent:0}})}).on("error",function(d){o.isPaused?this.generatedError=d:o.error(d)}).on("end",function(){o.isPaused?o._upstreamEnded=!0:o.end()})},t.prototype.pause=function(){return!!n.prototype.pause.call(this)&&(this._stream.pause(),!0)},t.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},a.exports=t},{"../stream/GenericWorker":28,"../utils":32}],13:[function(s,a,r){var i=s("readable-stream").Readable;function n(t,l,o){i.call(this,l),this._helper=t;var d=this;t.on("data",function(p,c){d.push(p)||d._helper.pause(),o&&o(c)}).on("error",function(p){d.emit("error",p)}).on("end",function(){d.push(null)})}s("../utils").inherits(n,i),n.prototype._read=function(){this._helper.resume()},a.exports=n},{"../utils":32,"readable-stream":16}],14:[function(s,a,r){a.exports={isNode:typeof Buffer<"u",newBufferFrom:function(i,n){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(i,n);if(typeof i=="number")throw new Error('The "data" argument must not be a number');return new Buffer(i,n)},allocBuffer:function(i){if(Buffer.alloc)return Buffer.alloc(i);var n=new Buffer(i);return n.fill(0),n},isBuffer:function(i){return Buffer.isBuffer(i)},isStream:function(i){return i&&typeof i.on=="function"&&typeof i.pause=="function"&&typeof i.resume=="function"}}},{}],15:[function(s,a,r){function i(C,g,k){var w,P=t.getTypeOf(g),M=t.extend(k||{},d);M.date=M.date||new Date,M.compression!==null&&(M.compression=M.compression.toUpperCase()),typeof M.unixPermissions=="string"&&(M.unixPermissions=parseInt(M.unixPermissions,8)),M.unixPermissions&&16384&M.unixPermissions&&(M.dir=!0),M.dosPermissions&&16&M.dosPermissions&&(M.dir=!0),M.dir&&(C=m(C)),M.createFolders&&(w=b(C))&&y.call(this,w,!0);var R=P==="string"&&M.binary===!1&&M.base64===!1;k&&k.binary!==void 0||(M.binary=!R),(g instanceof p&&g.uncompressedSize===0||M.dir||!g||g.length===0)&&(M.base64=!1,M.binary=!0,g="",M.compression="STORE",P="string");var $=null;$=g instanceof p||g instanceof l?g:f.isNode&&f.isStream(g)?new u(C,g):t.prepareContent(C,g,M.binary,M.optimizedBinaryString,M.base64);var L=new c(C,$,M);this.files[C]=L}var n=s("./utf8"),t=s("./utils"),l=s("./stream/GenericWorker"),o=s("./stream/StreamHelper"),d=s("./defaults"),p=s("./compressedObject"),c=s("./zipObject"),h=s("./generate"),f=s("./nodejsUtils"),u=s("./nodejs/NodejsStreamInputAdapter"),b=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var g=C.lastIndexOf("/");return 0<g?C.substring(0,g):""},m=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},y=function(C,g){return g=g!==void 0?g:d.createFolders,C=m(C),this.files[C]||i.call(this,C,null,{dir:!0,createFolders:g}),this.files[C]};function x(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var v={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var g,k,w;for(g in this.files)w=this.files[g],(k=g.slice(this.root.length,g.length))&&g.slice(0,this.root.length)===this.root&&C(k,w)},filter:function(C){var g=[];return this.forEach(function(k,w){C(k,w)&&g.push(w)}),g},file:function(C,g,k){if(arguments.length!==1)return C=this.root+C,i.call(this,C,g,k),this;if(x(C)){var w=C;return this.filter(function(M,R){return!R.dir&&w.test(M)})}var P=this.files[this.root+C];return P&&!P.dir?P:null},folder:function(C){if(!C)return this;if(x(C))return this.filter(function(P,M){return M.dir&&C.test(P)});var g=this.root+C,k=y.call(this,g),w=this.clone();return w.root=k.name,w},remove:function(C){C=this.root+C;var g=this.files[C];if(g||(C.slice(-1)!=="/"&&(C+="/"),g=this.files[C]),g&&!g.dir)delete this.files[C];else for(var k=this.filter(function(P,M){return M.name.slice(0,C.length)===C}),w=0;w<k.length;w++)delete this.files[k[w].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var g,k={};try{if((k=t.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:n.utf8encode})).type=k.type.toLowerCase(),k.compression=k.compression.toUpperCase(),k.type==="binarystring"&&(k.type="string"),!k.type)throw new Error("No output type specified.");t.checkSupport(k.type),k.platform!=="darwin"&&k.platform!=="freebsd"&&k.platform!=="linux"&&k.platform!=="sunos"||(k.platform="UNIX"),k.platform==="win32"&&(k.platform="DOS");var w=k.comment||this.comment||"";g=h.generateWorker(this,k,w)}catch(P){(g=new l("error")).error(P)}return new o(g,k.type||"string",k.mimeType)},generateAsync:function(C,g){return this.generateInternalStream(C).accumulate(g)},generateNodeStream:function(C,g){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(g)}};a.exports=v},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(s,a,r){a.exports=s("stream")},{stream:void 0}],17:[function(s,a,r){var i=s("./DataReader");function n(t){i.call(this,t);for(var l=0;l<this.data.length;l++)t[l]=255&t[l]}s("../utils").inherits(n,i),n.prototype.byteAt=function(t){return this.data[this.zero+t]},n.prototype.lastIndexOfSignature=function(t){for(var l=t.charCodeAt(0),o=t.charCodeAt(1),d=t.charCodeAt(2),p=t.charCodeAt(3),c=this.length-4;0<=c;--c)if(this.data[c]===l&&this.data[c+1]===o&&this.data[c+2]===d&&this.data[c+3]===p)return c-this.zero;return-1},n.prototype.readAndCheckSignature=function(t){var l=t.charCodeAt(0),o=t.charCodeAt(1),d=t.charCodeAt(2),p=t.charCodeAt(3),c=this.readData(4);return l===c[0]&&o===c[1]&&d===c[2]&&p===c[3]},n.prototype.readData=function(t){if(this.checkOffset(t),t===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,l},a.exports=n},{"../utils":32,"./DataReader":18}],18:[function(s,a,r){var i=s("../utils");function n(t){this.data=t,this.length=t.length,this.index=0,this.zero=0}n.prototype={checkOffset:function(t){this.checkIndex(this.index+t)},checkIndex:function(t){if(this.length<this.zero+t||t<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+t+"). Corrupted zip ?")},setIndex:function(t){this.checkIndex(t),this.index=t},skip:function(t){this.setIndex(this.index+t)},byteAt:function(){},readInt:function(t){var l,o=0;for(this.checkOffset(t),l=this.index+t-1;l>=this.index;l--)o=(o<<8)+this.byteAt(l);return this.index+=t,o},readString:function(t){return i.transformTo("string",this.readData(t))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var t=this.readInt(4);return new Date(Date.UTC(1980+(t>>25&127),(t>>21&15)-1,t>>16&31,t>>11&31,t>>5&63,(31&t)<<1))}},a.exports=n},{"../utils":32}],19:[function(s,a,r){var i=s("./Uint8ArrayReader");function n(t){i.call(this,t)}s("../utils").inherits(n,i),n.prototype.readData=function(t){this.checkOffset(t);var l=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,l},a.exports=n},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(s,a,r){var i=s("./DataReader");function n(t){i.call(this,t)}s("../utils").inherits(n,i),n.prototype.byteAt=function(t){return this.data.charCodeAt(this.zero+t)},n.prototype.lastIndexOfSignature=function(t){return this.data.lastIndexOf(t)-this.zero},n.prototype.readAndCheckSignature=function(t){return t===this.readData(4)},n.prototype.readData=function(t){this.checkOffset(t);var l=this.data.slice(this.zero+this.index,this.zero+this.index+t);return this.index+=t,l},a.exports=n},{"../utils":32,"./DataReader":18}],21:[function(s,a,r){var i=s("./ArrayReader");function n(t){i.call(this,t)}s("../utils").inherits(n,i),n.prototype.readData=function(t){if(this.checkOffset(t),t===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+t);return this.index+=t,l},a.exports=n},{"../utils":32,"./ArrayReader":17}],22:[function(s,a,r){var i=s("../utils"),n=s("../support"),t=s("./ArrayReader"),l=s("./StringReader"),o=s("./NodeBufferReader"),d=s("./Uint8ArrayReader");a.exports=function(p){var c=i.getTypeOf(p);return i.checkSupport(c),c!=="string"||n.uint8array?c==="nodebuffer"?new o(p):n.uint8array?new d(i.transformTo("uint8array",p)):new t(i.transformTo("array",p)):new l(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(s,a,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(s,a,r){var i=s("./GenericWorker"),n=s("../utils");function t(l){i.call(this,"ConvertWorker to "+l),this.destType=l}n.inherits(t,i),t.prototype.processChunk=function(l){this.push({data:n.transformTo(this.destType,l.data),meta:l.meta})},a.exports=t},{"../utils":32,"./GenericWorker":28}],25:[function(s,a,r){var i=s("./GenericWorker"),n=s("../crc32");function t(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}s("../utils").inherits(t,i),t.prototype.processChunk=function(l){this.streamInfo.crc32=n(l.data,this.streamInfo.crc32||0),this.push(l)},a.exports=t},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(s,a,r){var i=s("../utils"),n=s("./GenericWorker");function t(l){n.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}i.inherits(t,n),t.prototype.processChunk=function(l){if(l){var o=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=o+l.data.length}n.prototype.processChunk.call(this,l)},a.exports=t},{"../utils":32,"./GenericWorker":28}],27:[function(s,a,r){var i=s("../utils"),n=s("./GenericWorker");function t(l){n.call(this,"DataWorker");var o=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(d){o.dataIsReady=!0,o.data=d,o.max=d&&d.length||0,o.type=i.getTypeOf(d),o.isPaused||o._tickAndRepeat()},function(d){o.error(d)})}i.inherits(t,n),t.prototype.cleanUp=function(){n.prototype.cleanUp.call(this),this.data=null},t.prototype.resume=function(){return!!n.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},t.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},t.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,o=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,o);break;case"uint8array":l=this.data.subarray(this.index,o);break;case"array":case"nodebuffer":l=this.data.slice(this.index,o)}return this.index=o,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},a.exports=t},{"../utils":32,"./GenericWorker":28}],28:[function(s,a,r){function i(n){this.name=n||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(n){this.emit("data",n)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(n){this.emit("error",n)}return!0},error:function(n){return!this.isFinished&&(this.isPaused?this.generatedError=n:(this.isFinished=!0,this.emit("error",n),this.previous&&this.previous.error(n),this.cleanUp()),!0)},on:function(n,t){return this._listeners[n].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(n,t){if(this._listeners[n])for(var l=0;l<this._listeners[n].length;l++)this._listeners[n][l].call(this,t)},pipe:function(n){return n.registerPrevious(this)},registerPrevious:function(n){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=n.streamInfo,this.mergeStreamInfo(),this.previous=n;var t=this;return n.on("data",function(l){t.processChunk(l)}),n.on("end",function(){t.end()}),n.on("error",function(l){t.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var n=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),n=!0),this.previous&&this.previous.resume(),!n},flush:function(){},processChunk:function(n){this.push(n)},withStreamInfo:function(n,t){return this.extraStreamInfo[n]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var n in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,n)&&(this.streamInfo[n]=this.extraStreamInfo[n])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var n="Worker "+this.name;return this.previous?this.previous+" -> "+n:n}},a.exports=i},{}],29:[function(s,a,r){var i=s("../utils"),n=s("./ConvertWorker"),t=s("./GenericWorker"),l=s("../base64"),o=s("../support"),d=s("../external"),p=null;if(o.nodestream)try{p=s("../nodejs/NodejsStreamOutputAdapter")}catch{}function c(f,u){return new d.Promise(function(b,m){var y=[],x=f._internalType,v=f._outputType,C=f._mimeType;f.on("data",function(g,k){y.push(g),u&&u(k)}).on("error",function(g){y=[],m(g)}).on("end",function(){try{var g=(function(k,w,P){switch(k){case"blob":return i.newBlob(i.transformTo("arraybuffer",w),P);case"base64":return l.encode(w);default:return i.transformTo(k,w)}})(v,(function(k,w){var P,M=0,R=null,$=0;for(P=0;P<w.length;P++)$+=w[P].length;switch(k){case"string":return w.join("");case"array":return Array.prototype.concat.apply([],w);case"uint8array":for(R=new Uint8Array($),P=0;P<w.length;P++)R.set(w[P],M),M+=w[P].length;return R;case"nodebuffer":return Buffer.concat(w);default:throw new Error("concat : unsupported type '"+k+"'")}})(x,y),C);b(g)}catch(k){m(k)}y=[]}).resume()})}function h(f,u,b){var m=u;switch(u){case"blob":case"arraybuffer":m="uint8array";break;case"base64":m="string"}try{this._internalType=m,this._outputType=u,this._mimeType=b,i.checkSupport(m),this._worker=f.pipe(new n(m)),f.lock()}catch(y){this._worker=new t("error"),this._worker.error(y)}}h.prototype={accumulate:function(f){return c(this,f)},on:function(f,u){var b=this;return f==="data"?this._worker.on(f,function(m){u.call(b,m.data,m.meta)}):this._worker.on(f,function(){i.delay(u,arguments,b)}),this},resume:function(){return i.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(f){if(i.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},f)}},a.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(s,a,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var i=new ArrayBuffer(0);try{r.blob=new Blob([i],{type:"application/zip"}).size===0}catch{try{var n=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);n.append(i),r.blob=n.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!s("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(s,a,r){for(var i=s("./utils"),n=s("./support"),t=s("./nodejsUtils"),l=s("./stream/GenericWorker"),o=new Array(256),d=0;d<256;d++)o[d]=252<=d?6:248<=d?5:240<=d?4:224<=d?3:192<=d?2:1;o[254]=o[254]=1;function p(){l.call(this,"utf-8 decode"),this.leftOver=null}function c(){l.call(this,"utf-8 encode")}r.utf8encode=function(h){return n.nodebuffer?t.newBufferFrom(h,"utf-8"):(function(f){var u,b,m,y,x,v=f.length,C=0;for(y=0;y<v;y++)(64512&(b=f.charCodeAt(y)))==55296&&y+1<v&&(64512&(m=f.charCodeAt(y+1)))==56320&&(b=65536+(b-55296<<10)+(m-56320),y++),C+=b<128?1:b<2048?2:b<65536?3:4;for(u=n.uint8array?new Uint8Array(C):new Array(C),y=x=0;x<C;y++)(64512&(b=f.charCodeAt(y)))==55296&&y+1<v&&(64512&(m=f.charCodeAt(y+1)))==56320&&(b=65536+(b-55296<<10)+(m-56320),y++),b<128?u[x++]=b:(b<2048?u[x++]=192|b>>>6:(b<65536?u[x++]=224|b>>>12:(u[x++]=240|b>>>18,u[x++]=128|b>>>12&63),u[x++]=128|b>>>6&63),u[x++]=128|63&b);return u})(h)},r.utf8decode=function(h){return n.nodebuffer?i.transformTo("nodebuffer",h).toString("utf-8"):(function(f){var u,b,m,y,x=f.length,v=new Array(2*x);for(u=b=0;u<x;)if((m=f[u++])<128)v[b++]=m;else if(4<(y=o[m]))v[b++]=65533,u+=y-1;else{for(m&=y===2?31:y===3?15:7;1<y&&u<x;)m=m<<6|63&f[u++],y--;1<y?v[b++]=65533:m<65536?v[b++]=m:(m-=65536,v[b++]=55296|m>>10&1023,v[b++]=56320|1023&m)}return v.length!==b&&(v.subarray?v=v.subarray(0,b):v.length=b),i.applyFromCharCode(v)})(h=i.transformTo(n.uint8array?"uint8array":"array",h))},i.inherits(p,l),p.prototype.processChunk=function(h){var f=i.transformTo(n.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(n.uint8array){var u=f;(f=new Uint8Array(u.length+this.leftOver.length)).set(this.leftOver,0),f.set(u,this.leftOver.length)}else f=this.leftOver.concat(f);this.leftOver=null}var b=(function(y,x){var v;for((x=x||y.length)>y.length&&(x=y.length),v=x-1;0<=v&&(192&y[v])==128;)v--;return v<0||v===0?x:v+o[y[v]]>x?v:x})(f),m=f;b!==f.length&&(n.uint8array?(m=f.subarray(0,b),this.leftOver=f.subarray(b,f.length)):(m=f.slice(0,b),this.leftOver=f.slice(b,f.length))),this.push({data:r.utf8decode(m),meta:h.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=p,i.inherits(c,l),c.prototype.processChunk=function(h){this.push({data:r.utf8encode(h.data),meta:h.meta})},r.Utf8EncodeWorker=c},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(s,a,r){var i=s("./support"),n=s("./base64"),t=s("./nodejsUtils"),l=s("./external");function o(u){return u}function d(u,b){for(var m=0;m<u.length;++m)b[m]=255&u.charCodeAt(m);return b}s("setimmediate"),r.newBlob=function(u,b){r.checkSupport("blob");try{return new Blob([u],{type:b})}catch{try{var m=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return m.append(u),m.getBlob(b)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(u,b,m){var y=[],x=0,v=u.length;if(v<=m)return String.fromCharCode.apply(null,u);for(;x<v;)b==="array"||b==="nodebuffer"?y.push(String.fromCharCode.apply(null,u.slice(x,Math.min(x+m,v)))):y.push(String.fromCharCode.apply(null,u.subarray(x,Math.min(x+m,v)))),x+=m;return y.join("")},stringifyByChar:function(u){for(var b="",m=0;m<u.length;m++)b+=String.fromCharCode(u[m]);return b},applyCanBeUsed:{uint8array:(function(){try{return i.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return i.nodebuffer&&String.fromCharCode.apply(null,t.allocBuffer(1)).length===1}catch{return!1}})()}};function c(u){var b=65536,m=r.getTypeOf(u),y=!0;if(m==="uint8array"?y=p.applyCanBeUsed.uint8array:m==="nodebuffer"&&(y=p.applyCanBeUsed.nodebuffer),y)for(;1<b;)try{return p.stringifyByChunk(u,m,b)}catch{b=Math.floor(b/2)}return p.stringifyByChar(u)}function h(u,b){for(var m=0;m<u.length;m++)b[m]=u[m];return b}r.applyFromCharCode=c;var f={};f.string={string:o,array:function(u){return d(u,new Array(u.length))},arraybuffer:function(u){return f.string.uint8array(u).buffer},uint8array:function(u){return d(u,new Uint8Array(u.length))},nodebuffer:function(u){return d(u,t.allocBuffer(u.length))}},f.array={string:c,array:o,arraybuffer:function(u){return new Uint8Array(u).buffer},uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return t.newBufferFrom(u)}},f.arraybuffer={string:function(u){return c(new Uint8Array(u))},array:function(u){return h(new Uint8Array(u),new Array(u.byteLength))},arraybuffer:o,uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return t.newBufferFrom(new Uint8Array(u))}},f.uint8array={string:c,array:function(u){return h(u,new Array(u.length))},arraybuffer:function(u){return u.buffer},uint8array:o,nodebuffer:function(u){return t.newBufferFrom(u)}},f.nodebuffer={string:c,array:function(u){return h(u,new Array(u.length))},arraybuffer:function(u){return f.nodebuffer.uint8array(u).buffer},uint8array:function(u){return h(u,new Uint8Array(u.length))},nodebuffer:o},r.transformTo=function(u,b){if(b=b||"",!u)return b;r.checkSupport(u);var m=r.getTypeOf(b);return f[m][u](b)},r.resolve=function(u){for(var b=u.split("/"),m=[],y=0;y<b.length;y++){var x=b[y];x==="."||x===""&&y!==0&&y!==b.length-1||(x===".."?m.pop():m.push(x))}return m.join("/")},r.getTypeOf=function(u){return typeof u=="string"?"string":Object.prototype.toString.call(u)==="[object Array]"?"array":i.nodebuffer&&t.isBuffer(u)?"nodebuffer":i.uint8array&&u instanceof Uint8Array?"uint8array":i.arraybuffer&&u instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(u){if(!i[u.toLowerCase()])throw new Error(u+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(u){var b,m,y="";for(m=0;m<(u||"").length;m++)y+="\\x"+((b=u.charCodeAt(m))<16?"0":"")+b.toString(16).toUpperCase();return y},r.delay=function(u,b,m){setImmediate(function(){u.apply(m||null,b||[])})},r.inherits=function(u,b){function m(){}m.prototype=b.prototype,u.prototype=new m},r.extend=function(){var u,b,m={};for(u=0;u<arguments.length;u++)for(b in arguments[u])Object.prototype.hasOwnProperty.call(arguments[u],b)&&m[b]===void 0&&(m[b]=arguments[u][b]);return m},r.prepareContent=function(u,b,m,y,x){return l.Promise.resolve(b).then(function(v){return i.blob&&(v instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(v))!==-1)&&typeof FileReader<"u"?new l.Promise(function(C,g){var k=new FileReader;k.onload=function(w){C(w.target.result)},k.onerror=function(w){g(w.target.error)},k.readAsArrayBuffer(v)}):v}).then(function(v){var C=r.getTypeOf(v);return C?(C==="arraybuffer"?v=r.transformTo("uint8array",v):C==="string"&&(x?v=n.decode(v):m&&y!==!0&&(v=(function(g){return d(g,i.uint8array?new Uint8Array(g.length):new Array(g.length))})(v))),v):l.Promise.reject(new Error("Can't read the data of '"+u+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(s,a,r){var i=s("./reader/readerFor"),n=s("./utils"),t=s("./signature"),l=s("./zipEntry"),o=s("./support");function d(p){this.files=[],this.loadOptions=p}d.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var c=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+n.pretty(c)+", expected "+n.pretty(p)+")")}},isSignature:function(p,c){var h=this.reader.index;this.reader.setIndex(p);var f=this.reader.readString(4)===c;return this.reader.setIndex(h),f},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),c=o.uint8array?"uint8array":"array",h=n.transformTo(c,p);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,c,h,f=this.zip64EndOfCentralSize-44;0<f;)p=this.reader.readInt(2),c=this.reader.readInt(4),h=this.reader.readData(c),this.zip64ExtensibleData[p]={id:p,length:c,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,c;for(p=0;p<this.files.length;p++)c=this.files[p],this.reader.setIndex(c.localHeaderOffset),this.checkSignature(t.LOCAL_FILE_HEADER),c.readLocalPart(this.reader),c.handleUTF8(),c.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(t.CENTRAL_FILE_HEADER);)(p=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(t.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,t.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var c=p;if(this.checkSignature(t.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===n.MAX_VALUE_16BITS||this.diskWithCentralDirStart===n.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===n.MAX_VALUE_16BITS||this.centralDirRecords===n.MAX_VALUE_16BITS||this.centralDirSize===n.MAX_VALUE_32BITS||this.centralDirOffset===n.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(t.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(t.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,t.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(t.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(t.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var f=c-h;if(0<f)this.isSignature(c,t.CENTRAL_FILE_HEADER)||(this.reader.zero=f);else if(f<0)throw new Error("Corrupted zip: missing "+Math.abs(f)+" bytes.")},prepareReader:function(p){this.reader=i(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},a.exports=d},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(s,a,r){var i=s("./reader/readerFor"),n=s("./utils"),t=s("./compressedObject"),l=s("./crc32"),o=s("./utf8"),d=s("./compressions"),p=s("./support");function c(h,f){this.options=h,this.loadOptions=f}c.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var f,u;if(h.skip(22),this.fileNameLength=h.readInt(2),u=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(u),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((f=(function(b){for(var m in d)if(Object.prototype.hasOwnProperty.call(d,m)&&d[m].magic===b)return d[m];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+n.pretty(this.compressionMethod)+" unknown (inner file : "+n.transformTo("string",this.fileName)+")");this.decompressed=new t(this.compressedSize,this.uncompressedSize,this.crc32,f,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var f=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(f),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=i(this.extraFields[1].value);this.uncompressedSize===n.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===n.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===n.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===n.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var f,u,b,m=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<m;)f=h.readInt(2),u=h.readInt(2),b=h.readData(u),this.extraFields[f]={id:f,length:u,value:b};h.setIndex(m)},handleUTF8:function(){var h=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=o.utf8decode(this.fileName),this.fileCommentStr=o.utf8decode(this.fileComment);else{var f=this.findExtraFieldUnicodePath();if(f!==null)this.fileNameStr=f;else{var u=n.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(u)}var b=this.findExtraFieldUnicodeComment();if(b!==null)this.fileCommentStr=b;else{var m=n.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(m)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var f=i(h.value);return f.readInt(1)!==1||l(this.fileName)!==f.readInt(4)?null:o.utf8decode(f.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var f=i(h.value);return f.readInt(1)!==1||l(this.fileComment)!==f.readInt(4)?null:o.utf8decode(f.readData(h.length-5))}return null}},a.exports=c},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(s,a,r){function i(f,u,b){this.name=f,this.dir=b.dir,this.date=b.date,this.comment=b.comment,this.unixPermissions=b.unixPermissions,this.dosPermissions=b.dosPermissions,this._data=u,this._dataBinary=b.binary,this.options={compression:b.compression,compressionOptions:b.compressionOptions}}var n=s("./stream/StreamHelper"),t=s("./stream/DataWorker"),l=s("./utf8"),o=s("./compressedObject"),d=s("./stream/GenericWorker");i.prototype={internalStream:function(f){var u=null,b="string";try{if(!f)throw new Error("No output type specified.");var m=(b=f.toLowerCase())==="string"||b==="text";b!=="binarystring"&&b!=="text"||(b="string"),u=this._decompressWorker();var y=!this._dataBinary;y&&!m&&(u=u.pipe(new l.Utf8EncodeWorker)),!y&&m&&(u=u.pipe(new l.Utf8DecodeWorker))}catch(x){(u=new d("error")).error(x)}return new n(u,b,"")},async:function(f,u){return this.internalStream(f).accumulate(u)},nodeStream:function(f,u){return this.internalStream(f||"nodebuffer").toNodejsStream(u)},_compressWorker:function(f,u){if(this._data instanceof o&&this._data.compression.magic===f.magic)return this._data.getCompressedWorker();var b=this._decompressWorker();return this._dataBinary||(b=b.pipe(new l.Utf8EncodeWorker)),o.createWorkerFrom(b,f,u)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof d?this._data:new t(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],c=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<p.length;h++)i.prototype[p[h]]=c;a.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(s,a,r){(function(i){var n,t,l=i.MutationObserver||i.WebKitMutationObserver;if(l){var o=0,d=new l(f),p=i.document.createTextNode("");d.observe(p,{characterData:!0}),n=function(){p.data=o=++o%2}}else if(i.setImmediate||i.MessageChannel===void 0)n="document"in i&&"onreadystatechange"in i.document.createElement("script")?function(){var u=i.document.createElement("script");u.onreadystatechange=function(){f(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},i.document.documentElement.appendChild(u)}:function(){setTimeout(f,0)};else{var c=new i.MessageChannel;c.port1.onmessage=f,n=function(){c.port2.postMessage(0)}}var h=[];function f(){var u,b;t=!0;for(var m=h.length;m;){for(b=h,h=[],u=-1;++u<m;)b[u]();m=h.length}t=!1}a.exports=function(u){h.push(u)!==1||t||n()}}).call(this,typeof at<"u"?at:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(s,a,r){var i=s("immediate");function n(){}var t={},l=["REJECTED"],o=["FULFILLED"],d=["PENDING"];function p(m){if(typeof m!="function")throw new TypeError("resolver must be a function");this.state=d,this.queue=[],this.outcome=void 0,m!==n&&u(this,m)}function c(m,y,x){this.promise=m,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function h(m,y,x){i(function(){var v;try{v=y(x)}catch(C){return t.reject(m,C)}v===m?t.reject(m,new TypeError("Cannot resolve promise with itself")):t.resolve(m,v)})}function f(m){var y=m&&m.then;if(m&&(typeof m=="object"||typeof m=="function")&&typeof y=="function")return function(){y.apply(m,arguments)}}function u(m,y){var x=!1;function v(k){x||(x=!0,t.reject(m,k))}function C(k){x||(x=!0,t.resolve(m,k))}var g=b(function(){y(C,v)});g.status==="error"&&v(g.value)}function b(m,y){var x={};try{x.value=m(y),x.status="success"}catch(v){x.status="error",x.value=v}return x}(a.exports=p).prototype.finally=function(m){if(typeof m!="function")return this;var y=this.constructor;return this.then(function(x){return y.resolve(m()).then(function(){return x})},function(x){return y.resolve(m()).then(function(){throw x})})},p.prototype.catch=function(m){return this.then(null,m)},p.prototype.then=function(m,y){if(typeof m!="function"&&this.state===o||typeof y!="function"&&this.state===l)return this;var x=new this.constructor(n);return this.state!==d?h(x,this.state===o?m:y,this.outcome):this.queue.push(new c(x,m,y)),x},c.prototype.callFulfilled=function(m){t.resolve(this.promise,m)},c.prototype.otherCallFulfilled=function(m){h(this.promise,this.onFulfilled,m)},c.prototype.callRejected=function(m){t.reject(this.promise,m)},c.prototype.otherCallRejected=function(m){h(this.promise,this.onRejected,m)},t.resolve=function(m,y){var x=b(f,y);if(x.status==="error")return t.reject(m,x.value);var v=x.value;if(v)u(m,v);else{m.state=o,m.outcome=y;for(var C=-1,g=m.queue.length;++C<g;)m.queue[C].callFulfilled(y)}return m},t.reject=function(m,y){m.state=l,m.outcome=y;for(var x=-1,v=m.queue.length;++x<v;)m.queue[x].callRejected(y);return m},p.resolve=function(m){return m instanceof this?m:t.resolve(new this(n),m)},p.reject=function(m){var y=new this(n);return t.reject(y,m)},p.all=function(m){var y=this;if(Object.prototype.toString.call(m)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=m.length,v=!1;if(!x)return this.resolve([]);for(var C=new Array(x),g=0,k=-1,w=new this(n);++k<x;)P(m[k],k);return w;function P(M,R){y.resolve(M).then(function($){C[R]=$,++g!==x||v||(v=!0,t.resolve(w,C))},function($){v||(v=!0,t.reject(w,$))})}},p.race=function(m){var y=this;if(Object.prototype.toString.call(m)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=m.length,v=!1;if(!x)return this.resolve([]);for(var C=-1,g=new this(n);++C<x;)k=m[C],y.resolve(k).then(function(w){v||(v=!0,t.resolve(g,w))},function(w){v||(v=!0,t.reject(g,w))});var k;return g}},{immediate:36}],38:[function(s,a,r){var i={};(0,s("./lib/utils/common").assign)(i,s("./lib/deflate"),s("./lib/inflate"),s("./lib/zlib/constants")),a.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(s,a,r){var i=s("./zlib/deflate"),n=s("./utils/common"),t=s("./utils/strings"),l=s("./zlib/messages"),o=s("./zlib/zstream"),d=Object.prototype.toString,p=0,c=-1,h=0,f=8;function u(m){if(!(this instanceof u))return new u(m);this.options=n.assign({level:c,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},m||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new o,this.strm.avail_out=0;var x=i.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(x!==p)throw new Error(l[x]);if(y.header&&i.deflateSetHeader(this.strm,y.header),y.dictionary){var v;if(v=typeof y.dictionary=="string"?t.string2buf(y.dictionary):d.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(x=i.deflateSetDictionary(this.strm,v))!==p)throw new Error(l[x]);this._dict_set=!0}}function b(m,y){var x=new u(y);if(x.push(m,!0),x.err)throw x.msg||l[x.err];return x.result}u.prototype.push=function(m,y){var x,v,C=this.strm,g=this.options.chunkSize;if(this.ended)return!1;v=y===~~y?y:y===!0?4:0,typeof m=="string"?C.input=t.string2buf(m):d.call(m)==="[object ArrayBuffer]"?C.input=new Uint8Array(m):C.input=m,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new n.Buf8(g),C.next_out=0,C.avail_out=g),(x=i.deflate(C,v))!==1&&x!==p)return this.onEnd(x),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||v!==4&&v!==2)||(this.options.to==="string"?this.onData(t.buf2binstring(n.shrinkBuf(C.output,C.next_out))):this.onData(n.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&x!==1);return v===4?(x=i.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===p):v!==2||(this.onEnd(p),!(C.avail_out=0))},u.prototype.onData=function(m){this.chunks.push(m)},u.prototype.onEnd=function(m){m===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},r.Deflate=u,r.deflate=b,r.deflateRaw=function(m,y){return(y=y||{}).raw=!0,b(m,y)},r.gzip=function(m,y){return(y=y||{}).gzip=!0,b(m,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(s,a,r){var i=s("./zlib/inflate"),n=s("./utils/common"),t=s("./utils/strings"),l=s("./zlib/constants"),o=s("./zlib/messages"),d=s("./zlib/zstream"),p=s("./zlib/gzheader"),c=Object.prototype.toString;function h(u){if(!(this instanceof h))return new h(u);this.options=n.assign({chunkSize:16384,windowBits:0,to:""},u||{});var b=this.options;b.raw&&0<=b.windowBits&&b.windowBits<16&&(b.windowBits=-b.windowBits,b.windowBits===0&&(b.windowBits=-15)),!(0<=b.windowBits&&b.windowBits<16)||u&&u.windowBits||(b.windowBits+=32),15<b.windowBits&&b.windowBits<48&&(15&b.windowBits)==0&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new d,this.strm.avail_out=0;var m=i.inflateInit2(this.strm,b.windowBits);if(m!==l.Z_OK)throw new Error(o[m]);this.header=new p,i.inflateGetHeader(this.strm,this.header)}function f(u,b){var m=new h(b);if(m.push(u,!0),m.err)throw m.msg||o[m.err];return m.result}h.prototype.push=function(u,b){var m,y,x,v,C,g,k=this.strm,w=this.options.chunkSize,P=this.options.dictionary,M=!1;if(this.ended)return!1;y=b===~~b?b:b===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof u=="string"?k.input=t.binstring2buf(u):c.call(u)==="[object ArrayBuffer]"?k.input=new Uint8Array(u):k.input=u,k.next_in=0,k.avail_in=k.input.length;do{if(k.avail_out===0&&(k.output=new n.Buf8(w),k.next_out=0,k.avail_out=w),(m=i.inflate(k,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&P&&(g=typeof P=="string"?t.string2buf(P):c.call(P)==="[object ArrayBuffer]"?new Uint8Array(P):P,m=i.inflateSetDictionary(this.strm,g)),m===l.Z_BUF_ERROR&&M===!0&&(m=l.Z_OK,M=!1),m!==l.Z_STREAM_END&&m!==l.Z_OK)return this.onEnd(m),!(this.ended=!0);k.next_out&&(k.avail_out!==0&&m!==l.Z_STREAM_END&&(k.avail_in!==0||y!==l.Z_FINISH&&y!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=t.utf8border(k.output,k.next_out),v=k.next_out-x,C=t.buf2string(k.output,x),k.next_out=v,k.avail_out=w-v,v&&n.arraySet(k.output,k.output,x,v,0),this.onData(C)):this.onData(n.shrinkBuf(k.output,k.next_out)))),k.avail_in===0&&k.avail_out===0&&(M=!0)}while((0<k.avail_in||k.avail_out===0)&&m!==l.Z_STREAM_END);return m===l.Z_STREAM_END&&(y=l.Z_FINISH),y===l.Z_FINISH?(m=i.inflateEnd(this.strm),this.onEnd(m),this.ended=!0,m===l.Z_OK):y!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(k.avail_out=0))},h.prototype.onData=function(u){this.chunks.push(u)},h.prototype.onEnd=function(u){u===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=n.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},r.Inflate=h,r.inflate=f,r.inflateRaw=function(u,b){return(b=b||{}).raw=!0,f(u,b)},r.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(s,a,r){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var o=Array.prototype.slice.call(arguments,1);o.length;){var d=o.shift();if(d){if(typeof d!="object")throw new TypeError(d+"must be non-object");for(var p in d)d.hasOwnProperty(p)&&(l[p]=d[p])}}return l},r.shrinkBuf=function(l,o){return l.length===o?l:l.subarray?l.subarray(0,o):(l.length=o,l)};var n={arraySet:function(l,o,d,p,c){if(o.subarray&&l.subarray)l.set(o.subarray(d,d+p),c);else for(var h=0;h<p;h++)l[c+h]=o[d+h]},flattenChunks:function(l){var o,d,p,c,h,f;for(o=p=0,d=l.length;o<d;o++)p+=l[o].length;for(f=new Uint8Array(p),o=c=0,d=l.length;o<d;o++)h=l[o],f.set(h,c),c+=h.length;return f}},t={arraySet:function(l,o,d,p,c){for(var h=0;h<p;h++)l[c+h]=o[d+h]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,n)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,t))},r.setTyped(i)},{}],42:[function(s,a,r){var i=s("./common"),n=!0,t=!0;try{String.fromCharCode.apply(null,[0])}catch{n=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{t=!1}for(var l=new i.Buf8(256),o=0;o<256;o++)l[o]=252<=o?6:248<=o?5:240<=o?4:224<=o?3:192<=o?2:1;function d(p,c){if(c<65537&&(p.subarray&&t||!p.subarray&&n))return String.fromCharCode.apply(null,i.shrinkBuf(p,c));for(var h="",f=0;f<c;f++)h+=String.fromCharCode(p[f]);return h}l[254]=l[254]=1,r.string2buf=function(p){var c,h,f,u,b,m=p.length,y=0;for(u=0;u<m;u++)(64512&(h=p.charCodeAt(u)))==55296&&u+1<m&&(64512&(f=p.charCodeAt(u+1)))==56320&&(h=65536+(h-55296<<10)+(f-56320),u++),y+=h<128?1:h<2048?2:h<65536?3:4;for(c=new i.Buf8(y),u=b=0;b<y;u++)(64512&(h=p.charCodeAt(u)))==55296&&u+1<m&&(64512&(f=p.charCodeAt(u+1)))==56320&&(h=65536+(h-55296<<10)+(f-56320),u++),h<128?c[b++]=h:(h<2048?c[b++]=192|h>>>6:(h<65536?c[b++]=224|h>>>12:(c[b++]=240|h>>>18,c[b++]=128|h>>>12&63),c[b++]=128|h>>>6&63),c[b++]=128|63&h);return c},r.buf2binstring=function(p){return d(p,p.length)},r.binstring2buf=function(p){for(var c=new i.Buf8(p.length),h=0,f=c.length;h<f;h++)c[h]=p.charCodeAt(h);return c},r.buf2string=function(p,c){var h,f,u,b,m=c||p.length,y=new Array(2*m);for(h=f=0;h<m;)if((u=p[h++])<128)y[f++]=u;else if(4<(b=l[u]))y[f++]=65533,h+=b-1;else{for(u&=b===2?31:b===3?15:7;1<b&&h<m;)u=u<<6|63&p[h++],b--;1<b?y[f++]=65533:u<65536?y[f++]=u:(u-=65536,y[f++]=55296|u>>10&1023,y[f++]=56320|1023&u)}return d(y,f)},r.utf8border=function(p,c){var h;for((c=c||p.length)>p.length&&(c=p.length),h=c-1;0<=h&&(192&p[h])==128;)h--;return h<0||h===0?c:h+l[p[h]]>c?h:c}},{"./common":41}],43:[function(s,a,r){a.exports=function(i,n,t,l){for(var o=65535&i|0,d=i>>>16&65535|0,p=0;t!==0;){for(t-=p=2e3<t?2e3:t;d=d+(o=o+n[l++]|0)|0,--p;);o%=65521,d%=65521}return o|d<<16|0}},{}],44:[function(s,a,r){a.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(s,a,r){var i=(function(){for(var n,t=[],l=0;l<256;l++){n=l;for(var o=0;o<8;o++)n=1&n?3988292384^n>>>1:n>>>1;t[l]=n}return t})();a.exports=function(n,t,l,o){var d=i,p=o+l;n^=-1;for(var c=o;c<p;c++)n=n>>>8^d[255&(n^t[c])];return-1^n}},{}],46:[function(s,a,r){var i,n=s("../utils/common"),t=s("./trees"),l=s("./adler32"),o=s("./crc32"),d=s("./messages"),p=0,c=4,h=0,f=-2,u=-1,b=4,m=2,y=8,x=9,v=286,C=30,g=19,k=2*v+1,w=15,P=3,M=258,R=M+P+1,$=42,L=113,T=1,H=2,Z=3,j=4;function ee(S,F){return S.msg=d[F],F}function Y(S){return(S<<1)-(4<S?9:0)}function ie(S){for(var F=S.length;0<=--F;)S[F]=0}function U(S){var F=S.state,V=F.pending;V>S.avail_out&&(V=S.avail_out),V!==0&&(n.arraySet(S.output,F.pending_buf,F.pending_out,V,S.next_out),S.next_out+=V,F.pending_out+=V,S.total_out+=V,S.avail_out-=V,F.pending-=V,F.pending===0&&(F.pending_out=0))}function W(S,F){t._tr_flush_block(S,0<=S.block_start?S.block_start:-1,S.strstart-S.block_start,F),S.block_start=S.strstart,U(S.strm)}function he(S,F){S.pending_buf[S.pending++]=F}function de(S,F){S.pending_buf[S.pending++]=F>>>8&255,S.pending_buf[S.pending++]=255&F}function I(S,F){var V,_,D=S.max_chain_length,N=S.strstart,X=S.prev_length,K=S.nice_match,z=S.strstart>S.w_size-R?S.strstart-(S.w_size-R):0,Q=S.window,ae=S.w_mask,te=S.prev,le=S.strstart+M,ce=Q[N+X-1],ue=Q[N+X];S.prev_length>=S.good_match&&(D>>=2),K>S.lookahead&&(K=S.lookahead);do if(Q[(V=F)+X]===ue&&Q[V+X-1]===ce&&Q[V]===Q[N]&&Q[++V]===Q[N+1]){N+=2,V++;do;while(Q[++N]===Q[++V]&&Q[++N]===Q[++V]&&Q[++N]===Q[++V]&&Q[++N]===Q[++V]&&Q[++N]===Q[++V]&&Q[++N]===Q[++V]&&Q[++N]===Q[++V]&&Q[++N]===Q[++V]&&N<le);if(_=M-(le-N),N=le-M,X<_){if(S.match_start=F,K<=(X=_))break;ce=Q[N+X-1],ue=Q[N+X]}}while((F=te[F&ae])>z&&--D!=0);return X<=S.lookahead?X:S.lookahead}function A(S){var F,V,_,D,N,X,K,z,Q,ae,te=S.w_size;do{if(D=S.window_size-S.lookahead-S.strstart,S.strstart>=te+(te-R)){for(n.arraySet(S.window,S.window,te,te,0),S.match_start-=te,S.strstart-=te,S.block_start-=te,F=V=S.hash_size;_=S.head[--F],S.head[F]=te<=_?_-te:0,--V;);for(F=V=te;_=S.prev[--F],S.prev[F]=te<=_?_-te:0,--V;);D+=te}if(S.strm.avail_in===0)break;if(X=S.strm,K=S.window,z=S.strstart+S.lookahead,Q=D,ae=void 0,ae=X.avail_in,Q<ae&&(ae=Q),V=ae===0?0:(X.avail_in-=ae,n.arraySet(K,X.input,X.next_in,ae,z),X.state.wrap===1?X.adler=l(X.adler,K,ae,z):X.state.wrap===2&&(X.adler=o(X.adler,K,ae,z)),X.next_in+=ae,X.total_in+=ae,ae),S.lookahead+=V,S.lookahead+S.insert>=P)for(N=S.strstart-S.insert,S.ins_h=S.window[N],S.ins_h=(S.ins_h<<S.hash_shift^S.window[N+1])&S.hash_mask;S.insert&&(S.ins_h=(S.ins_h<<S.hash_shift^S.window[N+P-1])&S.hash_mask,S.prev[N&S.w_mask]=S.head[S.ins_h],S.head[S.ins_h]=N,N++,S.insert--,!(S.lookahead+S.insert<P)););}while(S.lookahead<R&&S.strm.avail_in!==0)}function B(S,F){for(var V,_;;){if(S.lookahead<R){if(A(S),S.lookahead<R&&F===p)return T;if(S.lookahead===0)break}if(V=0,S.lookahead>=P&&(S.ins_h=(S.ins_h<<S.hash_shift^S.window[S.strstart+P-1])&S.hash_mask,V=S.prev[S.strstart&S.w_mask]=S.head[S.ins_h],S.head[S.ins_h]=S.strstart),V!==0&&S.strstart-V<=S.w_size-R&&(S.match_length=I(S,V)),S.match_length>=P)if(_=t._tr_tally(S,S.strstart-S.match_start,S.match_length-P),S.lookahead-=S.match_length,S.match_length<=S.max_lazy_match&&S.lookahead>=P){for(S.match_length--;S.strstart++,S.ins_h=(S.ins_h<<S.hash_shift^S.window[S.strstart+P-1])&S.hash_mask,V=S.prev[S.strstart&S.w_mask]=S.head[S.ins_h],S.head[S.ins_h]=S.strstart,--S.match_length!=0;);S.strstart++}else S.strstart+=S.match_length,S.match_length=0,S.ins_h=S.window[S.strstart],S.ins_h=(S.ins_h<<S.hash_shift^S.window[S.strstart+1])&S.hash_mask;else _=t._tr_tally(S,0,S.window[S.strstart]),S.lookahead--,S.strstart++;if(_&&(W(S,!1),S.strm.avail_out===0))return T}return S.insert=S.strstart<P-1?S.strstart:P-1,F===c?(W(S,!0),S.strm.avail_out===0?Z:j):S.last_lit&&(W(S,!1),S.strm.avail_out===0)?T:H}function q(S,F){for(var V,_,D;;){if(S.lookahead<R){if(A(S),S.lookahead<R&&F===p)return T;if(S.lookahead===0)break}if(V=0,S.lookahead>=P&&(S.ins_h=(S.ins_h<<S.hash_shift^S.window[S.strstart+P-1])&S.hash_mask,V=S.prev[S.strstart&S.w_mask]=S.head[S.ins_h],S.head[S.ins_h]=S.strstart),S.prev_length=S.match_length,S.prev_match=S.match_start,S.match_length=P-1,V!==0&&S.prev_length<S.max_lazy_match&&S.strstart-V<=S.w_size-R&&(S.match_length=I(S,V),S.match_length<=5&&(S.strategy===1||S.match_length===P&&4096<S.strstart-S.match_start)&&(S.match_length=P-1)),S.prev_length>=P&&S.match_length<=S.prev_length){for(D=S.strstart+S.lookahead-P,_=t._tr_tally(S,S.strstart-1-S.prev_match,S.prev_length-P),S.lookahead-=S.prev_length-1,S.prev_length-=2;++S.strstart<=D&&(S.ins_h=(S.ins_h<<S.hash_shift^S.window[S.strstart+P-1])&S.hash_mask,V=S.prev[S.strstart&S.w_mask]=S.head[S.ins_h],S.head[S.ins_h]=S.strstart),--S.prev_length!=0;);if(S.match_available=0,S.match_length=P-1,S.strstart++,_&&(W(S,!1),S.strm.avail_out===0))return T}else if(S.match_available){if((_=t._tr_tally(S,0,S.window[S.strstart-1]))&&W(S,!1),S.strstart++,S.lookahead--,S.strm.avail_out===0)return T}else S.match_available=1,S.strstart++,S.lookahead--}return S.match_available&&(_=t._tr_tally(S,0,S.window[S.strstart-1]),S.match_available=0),S.insert=S.strstart<P-1?S.strstart:P-1,F===c?(W(S,!0),S.strm.avail_out===0?Z:j):S.last_lit&&(W(S,!1),S.strm.avail_out===0)?T:H}function O(S,F,V,_,D){this.good_length=S,this.max_lazy=F,this.nice_length=V,this.max_chain=_,this.func=D}function J(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new n.Buf16(2*k),this.dyn_dtree=new n.Buf16(2*(2*C+1)),this.bl_tree=new n.Buf16(2*(2*g+1)),ie(this.dyn_ltree),ie(this.dyn_dtree),ie(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new n.Buf16(w+1),this.heap=new n.Buf16(2*v+1),ie(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new n.Buf16(2*v+1),ie(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function re(S){var F;return S&&S.state?(S.total_in=S.total_out=0,S.data_type=m,(F=S.state).pending=0,F.pending_out=0,F.wrap<0&&(F.wrap=-F.wrap),F.status=F.wrap?$:L,S.adler=F.wrap===2?0:1,F.last_flush=p,t._tr_init(F),h):ee(S,f)}function G(S){var F=re(S);return F===h&&(function(V){V.window_size=2*V.w_size,ie(V.head),V.max_lazy_match=i[V.level].max_lazy,V.good_match=i[V.level].good_length,V.nice_match=i[V.level].nice_length,V.max_chain_length=i[V.level].max_chain,V.strstart=0,V.block_start=0,V.lookahead=0,V.insert=0,V.match_length=V.prev_length=P-1,V.match_available=0,V.ins_h=0})(S.state),F}function ne(S,F,V,_,D,N){if(!S)return f;var X=1;if(F===u&&(F=6),_<0?(X=0,_=-_):15<_&&(X=2,_-=16),D<1||x<D||V!==y||_<8||15<_||F<0||9<F||N<0||b<N)return ee(S,f);_===8&&(_=9);var K=new J;return(S.state=K).strm=S,K.wrap=X,K.gzhead=null,K.w_bits=_,K.w_size=1<<K.w_bits,K.w_mask=K.w_size-1,K.hash_bits=D+7,K.hash_size=1<<K.hash_bits,K.hash_mask=K.hash_size-1,K.hash_shift=~~((K.hash_bits+P-1)/P),K.window=new n.Buf8(2*K.w_size),K.head=new n.Buf16(K.hash_size),K.prev=new n.Buf16(K.w_size),K.lit_bufsize=1<<D+6,K.pending_buf_size=4*K.lit_bufsize,K.pending_buf=new n.Buf8(K.pending_buf_size),K.d_buf=1*K.lit_bufsize,K.l_buf=3*K.lit_bufsize,K.level=F,K.strategy=N,K.method=V,G(S)}i=[new O(0,0,0,0,function(S,F){var V=65535;for(V>S.pending_buf_size-5&&(V=S.pending_buf_size-5);;){if(S.lookahead<=1){if(A(S),S.lookahead===0&&F===p)return T;if(S.lookahead===0)break}S.strstart+=S.lookahead,S.lookahead=0;var _=S.block_start+V;if((S.strstart===0||S.strstart>=_)&&(S.lookahead=S.strstart-_,S.strstart=_,W(S,!1),S.strm.avail_out===0)||S.strstart-S.block_start>=S.w_size-R&&(W(S,!1),S.strm.avail_out===0))return T}return S.insert=0,F===c?(W(S,!0),S.strm.avail_out===0?Z:j):(S.strstart>S.block_start&&(W(S,!1),S.strm.avail_out),T)}),new O(4,4,8,4,B),new O(4,5,16,8,B),new O(4,6,32,32,B),new O(4,4,16,16,q),new O(8,16,32,32,q),new O(8,16,128,128,q),new O(8,32,128,256,q),new O(32,128,258,1024,q),new O(32,258,258,4096,q)],r.deflateInit=function(S,F){return ne(S,F,y,15,8,0)},r.deflateInit2=ne,r.deflateReset=G,r.deflateResetKeep=re,r.deflateSetHeader=function(S,F){return S&&S.state?S.state.wrap!==2?f:(S.state.gzhead=F,h):f},r.deflate=function(S,F){var V,_,D,N;if(!S||!S.state||5<F||F<0)return S?ee(S,f):f;if(_=S.state,!S.output||!S.input&&S.avail_in!==0||_.status===666&&F!==c)return ee(S,S.avail_out===0?-5:f);if(_.strm=S,V=_.last_flush,_.last_flush=F,_.status===$)if(_.wrap===2)S.adler=0,he(_,31),he(_,139),he(_,8),_.gzhead?(he(_,(_.gzhead.text?1:0)+(_.gzhead.hcrc?2:0)+(_.gzhead.extra?4:0)+(_.gzhead.name?8:0)+(_.gzhead.comment?16:0)),he(_,255&_.gzhead.time),he(_,_.gzhead.time>>8&255),he(_,_.gzhead.time>>16&255),he(_,_.gzhead.time>>24&255),he(_,_.level===9?2:2<=_.strategy||_.level<2?4:0),he(_,255&_.gzhead.os),_.gzhead.extra&&_.gzhead.extra.length&&(he(_,255&_.gzhead.extra.length),he(_,_.gzhead.extra.length>>8&255)),_.gzhead.hcrc&&(S.adler=o(S.adler,_.pending_buf,_.pending,0)),_.gzindex=0,_.status=69):(he(_,0),he(_,0),he(_,0),he(_,0),he(_,0),he(_,_.level===9?2:2<=_.strategy||_.level<2?4:0),he(_,3),_.status=L);else{var X=y+(_.w_bits-8<<4)<<8;X|=(2<=_.strategy||_.level<2?0:_.level<6?1:_.level===6?2:3)<<6,_.strstart!==0&&(X|=32),X+=31-X%31,_.status=L,de(_,X),_.strstart!==0&&(de(_,S.adler>>>16),de(_,65535&S.adler)),S.adler=1}if(_.status===69)if(_.gzhead.extra){for(D=_.pending;_.gzindex<(65535&_.gzhead.extra.length)&&(_.pending!==_.pending_buf_size||(_.gzhead.hcrc&&_.pending>D&&(S.adler=o(S.adler,_.pending_buf,_.pending-D,D)),U(S),D=_.pending,_.pending!==_.pending_buf_size));)he(_,255&_.gzhead.extra[_.gzindex]),_.gzindex++;_.gzhead.hcrc&&_.pending>D&&(S.adler=o(S.adler,_.pending_buf,_.pending-D,D)),_.gzindex===_.gzhead.extra.length&&(_.gzindex=0,_.status=73)}else _.status=73;if(_.status===73)if(_.gzhead.name){D=_.pending;do{if(_.pending===_.pending_buf_size&&(_.gzhead.hcrc&&_.pending>D&&(S.adler=o(S.adler,_.pending_buf,_.pending-D,D)),U(S),D=_.pending,_.pending===_.pending_buf_size)){N=1;break}N=_.gzindex<_.gzhead.name.length?255&_.gzhead.name.charCodeAt(_.gzindex++):0,he(_,N)}while(N!==0);_.gzhead.hcrc&&_.pending>D&&(S.adler=o(S.adler,_.pending_buf,_.pending-D,D)),N===0&&(_.gzindex=0,_.status=91)}else _.status=91;if(_.status===91)if(_.gzhead.comment){D=_.pending;do{if(_.pending===_.pending_buf_size&&(_.gzhead.hcrc&&_.pending>D&&(S.adler=o(S.adler,_.pending_buf,_.pending-D,D)),U(S),D=_.pending,_.pending===_.pending_buf_size)){N=1;break}N=_.gzindex<_.gzhead.comment.length?255&_.gzhead.comment.charCodeAt(_.gzindex++):0,he(_,N)}while(N!==0);_.gzhead.hcrc&&_.pending>D&&(S.adler=o(S.adler,_.pending_buf,_.pending-D,D)),N===0&&(_.status=103)}else _.status=103;if(_.status===103&&(_.gzhead.hcrc?(_.pending+2>_.pending_buf_size&&U(S),_.pending+2<=_.pending_buf_size&&(he(_,255&S.adler),he(_,S.adler>>8&255),S.adler=0,_.status=L)):_.status=L),_.pending!==0){if(U(S),S.avail_out===0)return _.last_flush=-1,h}else if(S.avail_in===0&&Y(F)<=Y(V)&&F!==c)return ee(S,-5);if(_.status===666&&S.avail_in!==0)return ee(S,-5);if(S.avail_in!==0||_.lookahead!==0||F!==p&&_.status!==666){var K=_.strategy===2?(function(z,Q){for(var ae;;){if(z.lookahead===0&&(A(z),z.lookahead===0)){if(Q===p)return T;break}if(z.match_length=0,ae=t._tr_tally(z,0,z.window[z.strstart]),z.lookahead--,z.strstart++,ae&&(W(z,!1),z.strm.avail_out===0))return T}return z.insert=0,Q===c?(W(z,!0),z.strm.avail_out===0?Z:j):z.last_lit&&(W(z,!1),z.strm.avail_out===0)?T:H})(_,F):_.strategy===3?(function(z,Q){for(var ae,te,le,ce,ue=z.window;;){if(z.lookahead<=M){if(A(z),z.lookahead<=M&&Q===p)return T;if(z.lookahead===0)break}if(z.match_length=0,z.lookahead>=P&&0<z.strstart&&(te=ue[le=z.strstart-1])===ue[++le]&&te===ue[++le]&&te===ue[++le]){ce=z.strstart+M;do;while(te===ue[++le]&&te===ue[++le]&&te===ue[++le]&&te===ue[++le]&&te===ue[++le]&&te===ue[++le]&&te===ue[++le]&&te===ue[++le]&&le<ce);z.match_length=M-(ce-le),z.match_length>z.lookahead&&(z.match_length=z.lookahead)}if(z.match_length>=P?(ae=t._tr_tally(z,1,z.match_length-P),z.lookahead-=z.match_length,z.strstart+=z.match_length,z.match_length=0):(ae=t._tr_tally(z,0,z.window[z.strstart]),z.lookahead--,z.strstart++),ae&&(W(z,!1),z.strm.avail_out===0))return T}return z.insert=0,Q===c?(W(z,!0),z.strm.avail_out===0?Z:j):z.last_lit&&(W(z,!1),z.strm.avail_out===0)?T:H})(_,F):i[_.level].func(_,F);if(K!==Z&&K!==j||(_.status=666),K===T||K===Z)return S.avail_out===0&&(_.last_flush=-1),h;if(K===H&&(F===1?t._tr_align(_):F!==5&&(t._tr_stored_block(_,0,0,!1),F===3&&(ie(_.head),_.lookahead===0&&(_.strstart=0,_.block_start=0,_.insert=0))),U(S),S.avail_out===0))return _.last_flush=-1,h}return F!==c?h:_.wrap<=0?1:(_.wrap===2?(he(_,255&S.adler),he(_,S.adler>>8&255),he(_,S.adler>>16&255),he(_,S.adler>>24&255),he(_,255&S.total_in),he(_,S.total_in>>8&255),he(_,S.total_in>>16&255),he(_,S.total_in>>24&255)):(de(_,S.adler>>>16),de(_,65535&S.adler)),U(S),0<_.wrap&&(_.wrap=-_.wrap),_.pending!==0?h:1)},r.deflateEnd=function(S){var F;return S&&S.state?(F=S.state.status)!==$&&F!==69&&F!==73&&F!==91&&F!==103&&F!==L&&F!==666?ee(S,f):(S.state=null,F===L?ee(S,-3):h):f},r.deflateSetDictionary=function(S,F){var V,_,D,N,X,K,z,Q,ae=F.length;if(!S||!S.state||(N=(V=S.state).wrap)===2||N===1&&V.status!==$||V.lookahead)return f;for(N===1&&(S.adler=l(S.adler,F,ae,0)),V.wrap=0,ae>=V.w_size&&(N===0&&(ie(V.head),V.strstart=0,V.block_start=0,V.insert=0),Q=new n.Buf8(V.w_size),n.arraySet(Q,F,ae-V.w_size,V.w_size,0),F=Q,ae=V.w_size),X=S.avail_in,K=S.next_in,z=S.input,S.avail_in=ae,S.next_in=0,S.input=F,A(V);V.lookahead>=P;){for(_=V.strstart,D=V.lookahead-(P-1);V.ins_h=(V.ins_h<<V.hash_shift^V.window[_+P-1])&V.hash_mask,V.prev[_&V.w_mask]=V.head[V.ins_h],V.head[V.ins_h]=_,_++,--D;);V.strstart=_,V.lookahead=P-1,A(V)}return V.strstart+=V.lookahead,V.block_start=V.strstart,V.insert=V.lookahead,V.lookahead=0,V.match_length=V.prev_length=P-1,V.match_available=0,S.next_in=K,S.input=z,S.avail_in=X,V.wrap=N,h},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(s,a,r){a.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(s,a,r){a.exports=function(i,n){var t,l,o,d,p,c,h,f,u,b,m,y,x,v,C,g,k,w,P,M,R,$,L,T,H;t=i.state,l=i.next_in,T=i.input,o=l+(i.avail_in-5),d=i.next_out,H=i.output,p=d-(n-i.avail_out),c=d+(i.avail_out-257),h=t.dmax,f=t.wsize,u=t.whave,b=t.wnext,m=t.window,y=t.hold,x=t.bits,v=t.lencode,C=t.distcode,g=(1<<t.lenbits)-1,k=(1<<t.distbits)-1;e:do{x<15&&(y+=T[l++]<<x,x+=8,y+=T[l++]<<x,x+=8),w=v[y&g];t:for(;;){if(y>>>=P=w>>>24,x-=P,(P=w>>>16&255)===0)H[d++]=65535&w;else{if(!(16&P)){if((64&P)==0){w=v[(65535&w)+(y&(1<<P)-1)];continue t}if(32&P){t.mode=12;break e}i.msg="invalid literal/length code",t.mode=30;break e}M=65535&w,(P&=15)&&(x<P&&(y+=T[l++]<<x,x+=8),M+=y&(1<<P)-1,y>>>=P,x-=P),x<15&&(y+=T[l++]<<x,x+=8,y+=T[l++]<<x,x+=8),w=C[y&k];a:for(;;){if(y>>>=P=w>>>24,x-=P,!(16&(P=w>>>16&255))){if((64&P)==0){w=C[(65535&w)+(y&(1<<P)-1)];continue a}i.msg="invalid distance code",t.mode=30;break e}if(R=65535&w,x<(P&=15)&&(y+=T[l++]<<x,(x+=8)<P&&(y+=T[l++]<<x,x+=8)),h<(R+=y&(1<<P)-1)){i.msg="invalid distance too far back",t.mode=30;break e}if(y>>>=P,x-=P,(P=d-p)<R){if(u<(P=R-P)&&t.sane){i.msg="invalid distance too far back",t.mode=30;break e}if(L=m,($=0)===b){if($+=f-P,P<M){for(M-=P;H[d++]=m[$++],--P;);$=d-R,L=H}}else if(b<P){if($+=f+b-P,(P-=b)<M){for(M-=P;H[d++]=m[$++],--P;);if($=0,b<M){for(M-=P=b;H[d++]=m[$++],--P;);$=d-R,L=H}}}else if($+=b-P,P<M){for(M-=P;H[d++]=m[$++],--P;);$=d-R,L=H}for(;2<M;)H[d++]=L[$++],H[d++]=L[$++],H[d++]=L[$++],M-=3;M&&(H[d++]=L[$++],1<M&&(H[d++]=L[$++]))}else{for($=d-R;H[d++]=H[$++],H[d++]=H[$++],H[d++]=H[$++],2<(M-=3););M&&(H[d++]=H[$++],1<M&&(H[d++]=H[$++]))}break}}break}}while(l<o&&d<c);l-=M=x>>3,y&=(1<<(x-=M<<3))-1,i.next_in=l,i.next_out=d,i.avail_in=l<o?o-l+5:5-(l-o),i.avail_out=d<c?c-d+257:257-(d-c),t.hold=y,t.bits=x}},{}],49:[function(s,a,r){var i=s("../utils/common"),n=s("./adler32"),t=s("./crc32"),l=s("./inffast"),o=s("./inftrees"),d=1,p=2,c=0,h=-2,f=1,u=852,b=592;function m($){return($>>>24&255)+($>>>8&65280)+((65280&$)<<8)+((255&$)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new i.Buf16(320),this.work=new i.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x($){var L;return $&&$.state?(L=$.state,$.total_in=$.total_out=L.total=0,$.msg="",L.wrap&&($.adler=1&L.wrap),L.mode=f,L.last=0,L.havedict=0,L.dmax=32768,L.head=null,L.hold=0,L.bits=0,L.lencode=L.lendyn=new i.Buf32(u),L.distcode=L.distdyn=new i.Buf32(b),L.sane=1,L.back=-1,c):h}function v($){var L;return $&&$.state?((L=$.state).wsize=0,L.whave=0,L.wnext=0,x($)):h}function C($,L){var T,H;return $&&$.state?(H=$.state,L<0?(T=0,L=-L):(T=1+(L>>4),L<48&&(L&=15)),L&&(L<8||15<L)?h:(H.window!==null&&H.wbits!==L&&(H.window=null),H.wrap=T,H.wbits=L,v($))):h}function g($,L){var T,H;return $?(H=new y,($.state=H).window=null,(T=C($,L))!==c&&($.state=null),T):h}var k,w,P=!0;function M($){if(P){var L;for(k=new i.Buf32(512),w=new i.Buf32(32),L=0;L<144;)$.lens[L++]=8;for(;L<256;)$.lens[L++]=9;for(;L<280;)$.lens[L++]=7;for(;L<288;)$.lens[L++]=8;for(o(d,$.lens,0,288,k,0,$.work,{bits:9}),L=0;L<32;)$.lens[L++]=5;o(p,$.lens,0,32,w,0,$.work,{bits:5}),P=!1}$.lencode=k,$.lenbits=9,$.distcode=w,$.distbits=5}function R($,L,T,H){var Z,j=$.state;return j.window===null&&(j.wsize=1<<j.wbits,j.wnext=0,j.whave=0,j.window=new i.Buf8(j.wsize)),H>=j.wsize?(i.arraySet(j.window,L,T-j.wsize,j.wsize,0),j.wnext=0,j.whave=j.wsize):(H<(Z=j.wsize-j.wnext)&&(Z=H),i.arraySet(j.window,L,T-H,Z,j.wnext),(H-=Z)?(i.arraySet(j.window,L,T-H,H,0),j.wnext=H,j.whave=j.wsize):(j.wnext+=Z,j.wnext===j.wsize&&(j.wnext=0),j.whave<j.wsize&&(j.whave+=Z))),0}r.inflateReset=v,r.inflateReset2=C,r.inflateResetKeep=x,r.inflateInit=function($){return g($,15)},r.inflateInit2=g,r.inflate=function($,L){var T,H,Z,j,ee,Y,ie,U,W,he,de,I,A,B,q,O,J,re,G,ne,S,F,V,_,D=0,N=new i.Buf8(4),X=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!$||!$.state||!$.output||!$.input&&$.avail_in!==0)return h;(T=$.state).mode===12&&(T.mode=13),ee=$.next_out,Z=$.output,ie=$.avail_out,j=$.next_in,H=$.input,Y=$.avail_in,U=T.hold,W=T.bits,he=Y,de=ie,F=c;e:for(;;)switch(T.mode){case f:if(T.wrap===0){T.mode=13;break}for(;W<16;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}if(2&T.wrap&&U===35615){N[T.check=0]=255&U,N[1]=U>>>8&255,T.check=t(T.check,N,2,0),W=U=0,T.mode=2;break}if(T.flags=0,T.head&&(T.head.done=!1),!(1&T.wrap)||(((255&U)<<8)+(U>>8))%31){$.msg="incorrect header check",T.mode=30;break}if((15&U)!=8){$.msg="unknown compression method",T.mode=30;break}if(W-=4,S=8+(15&(U>>>=4)),T.wbits===0)T.wbits=S;else if(S>T.wbits){$.msg="invalid window size",T.mode=30;break}T.dmax=1<<S,$.adler=T.check=1,T.mode=512&U?10:12,W=U=0;break;case 2:for(;W<16;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}if(T.flags=U,(255&T.flags)!=8){$.msg="unknown compression method",T.mode=30;break}if(57344&T.flags){$.msg="unknown header flags set",T.mode=30;break}T.head&&(T.head.text=U>>8&1),512&T.flags&&(N[0]=255&U,N[1]=U>>>8&255,T.check=t(T.check,N,2,0)),W=U=0,T.mode=3;case 3:for(;W<32;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}T.head&&(T.head.time=U),512&T.flags&&(N[0]=255&U,N[1]=U>>>8&255,N[2]=U>>>16&255,N[3]=U>>>24&255,T.check=t(T.check,N,4,0)),W=U=0,T.mode=4;case 4:for(;W<16;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}T.head&&(T.head.xflags=255&U,T.head.os=U>>8),512&T.flags&&(N[0]=255&U,N[1]=U>>>8&255,T.check=t(T.check,N,2,0)),W=U=0,T.mode=5;case 5:if(1024&T.flags){for(;W<16;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}T.length=U,T.head&&(T.head.extra_len=U),512&T.flags&&(N[0]=255&U,N[1]=U>>>8&255,T.check=t(T.check,N,2,0)),W=U=0}else T.head&&(T.head.extra=null);T.mode=6;case 6:if(1024&T.flags&&(Y<(I=T.length)&&(I=Y),I&&(T.head&&(S=T.head.extra_len-T.length,T.head.extra||(T.head.extra=new Array(T.head.extra_len)),i.arraySet(T.head.extra,H,j,I,S)),512&T.flags&&(T.check=t(T.check,H,I,j)),Y-=I,j+=I,T.length-=I),T.length))break e;T.length=0,T.mode=7;case 7:if(2048&T.flags){if(Y===0)break e;for(I=0;S=H[j+I++],T.head&&S&&T.length<65536&&(T.head.name+=String.fromCharCode(S)),S&&I<Y;);if(512&T.flags&&(T.check=t(T.check,H,I,j)),Y-=I,j+=I,S)break e}else T.head&&(T.head.name=null);T.length=0,T.mode=8;case 8:if(4096&T.flags){if(Y===0)break e;for(I=0;S=H[j+I++],T.head&&S&&T.length<65536&&(T.head.comment+=String.fromCharCode(S)),S&&I<Y;);if(512&T.flags&&(T.check=t(T.check,H,I,j)),Y-=I,j+=I,S)break e}else T.head&&(T.head.comment=null);T.mode=9;case 9:if(512&T.flags){for(;W<16;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}if(U!==(65535&T.check)){$.msg="header crc mismatch",T.mode=30;break}W=U=0}T.head&&(T.head.hcrc=T.flags>>9&1,T.head.done=!0),$.adler=T.check=0,T.mode=12;break;case 10:for(;W<32;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}$.adler=T.check=m(U),W=U=0,T.mode=11;case 11:if(T.havedict===0)return $.next_out=ee,$.avail_out=ie,$.next_in=j,$.avail_in=Y,T.hold=U,T.bits=W,2;$.adler=T.check=1,T.mode=12;case 12:if(L===5||L===6)break e;case 13:if(T.last){U>>>=7&W,W-=7&W,T.mode=27;break}for(;W<3;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}switch(T.last=1&U,W-=1,3&(U>>>=1)){case 0:T.mode=14;break;case 1:if(M(T),T.mode=20,L!==6)break;U>>>=2,W-=2;break e;case 2:T.mode=17;break;case 3:$.msg="invalid block type",T.mode=30}U>>>=2,W-=2;break;case 14:for(U>>>=7&W,W-=7&W;W<32;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}if((65535&U)!=(U>>>16^65535)){$.msg="invalid stored block lengths",T.mode=30;break}if(T.length=65535&U,W=U=0,T.mode=15,L===6)break e;case 15:T.mode=16;case 16:if(I=T.length){if(Y<I&&(I=Y),ie<I&&(I=ie),I===0)break e;i.arraySet(Z,H,j,I,ee),Y-=I,j+=I,ie-=I,ee+=I,T.length-=I;break}T.mode=12;break;case 17:for(;W<14;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}if(T.nlen=257+(31&U),U>>>=5,W-=5,T.ndist=1+(31&U),U>>>=5,W-=5,T.ncode=4+(15&U),U>>>=4,W-=4,286<T.nlen||30<T.ndist){$.msg="too many length or distance symbols",T.mode=30;break}T.have=0,T.mode=18;case 18:for(;T.have<T.ncode;){for(;W<3;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}T.lens[X[T.have++]]=7&U,U>>>=3,W-=3}for(;T.have<19;)T.lens[X[T.have++]]=0;if(T.lencode=T.lendyn,T.lenbits=7,V={bits:T.lenbits},F=o(0,T.lens,0,19,T.lencode,0,T.work,V),T.lenbits=V.bits,F){$.msg="invalid code lengths set",T.mode=30;break}T.have=0,T.mode=19;case 19:for(;T.have<T.nlen+T.ndist;){for(;O=(D=T.lencode[U&(1<<T.lenbits)-1])>>>16&255,J=65535&D,!((q=D>>>24)<=W);){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}if(J<16)U>>>=q,W-=q,T.lens[T.have++]=J;else{if(J===16){for(_=q+2;W<_;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}if(U>>>=q,W-=q,T.have===0){$.msg="invalid bit length repeat",T.mode=30;break}S=T.lens[T.have-1],I=3+(3&U),U>>>=2,W-=2}else if(J===17){for(_=q+3;W<_;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}W-=q,S=0,I=3+(7&(U>>>=q)),U>>>=3,W-=3}else{for(_=q+7;W<_;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}W-=q,S=0,I=11+(127&(U>>>=q)),U>>>=7,W-=7}if(T.have+I>T.nlen+T.ndist){$.msg="invalid bit length repeat",T.mode=30;break}for(;I--;)T.lens[T.have++]=S}}if(T.mode===30)break;if(T.lens[256]===0){$.msg="invalid code -- missing end-of-block",T.mode=30;break}if(T.lenbits=9,V={bits:T.lenbits},F=o(d,T.lens,0,T.nlen,T.lencode,0,T.work,V),T.lenbits=V.bits,F){$.msg="invalid literal/lengths set",T.mode=30;break}if(T.distbits=6,T.distcode=T.distdyn,V={bits:T.distbits},F=o(p,T.lens,T.nlen,T.ndist,T.distcode,0,T.work,V),T.distbits=V.bits,F){$.msg="invalid distances set",T.mode=30;break}if(T.mode=20,L===6)break e;case 20:T.mode=21;case 21:if(6<=Y&&258<=ie){$.next_out=ee,$.avail_out=ie,$.next_in=j,$.avail_in=Y,T.hold=U,T.bits=W,l($,de),ee=$.next_out,Z=$.output,ie=$.avail_out,j=$.next_in,H=$.input,Y=$.avail_in,U=T.hold,W=T.bits,T.mode===12&&(T.back=-1);break}for(T.back=0;O=(D=T.lencode[U&(1<<T.lenbits)-1])>>>16&255,J=65535&D,!((q=D>>>24)<=W);){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}if(O&&(240&O)==0){for(re=q,G=O,ne=J;O=(D=T.lencode[ne+((U&(1<<re+G)-1)>>re)])>>>16&255,J=65535&D,!(re+(q=D>>>24)<=W);){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}U>>>=re,W-=re,T.back+=re}if(U>>>=q,W-=q,T.back+=q,T.length=J,O===0){T.mode=26;break}if(32&O){T.back=-1,T.mode=12;break}if(64&O){$.msg="invalid literal/length code",T.mode=30;break}T.extra=15&O,T.mode=22;case 22:if(T.extra){for(_=T.extra;W<_;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}T.length+=U&(1<<T.extra)-1,U>>>=T.extra,W-=T.extra,T.back+=T.extra}T.was=T.length,T.mode=23;case 23:for(;O=(D=T.distcode[U&(1<<T.distbits)-1])>>>16&255,J=65535&D,!((q=D>>>24)<=W);){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}if((240&O)==0){for(re=q,G=O,ne=J;O=(D=T.distcode[ne+((U&(1<<re+G)-1)>>re)])>>>16&255,J=65535&D,!(re+(q=D>>>24)<=W);){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}U>>>=re,W-=re,T.back+=re}if(U>>>=q,W-=q,T.back+=q,64&O){$.msg="invalid distance code",T.mode=30;break}T.offset=J,T.extra=15&O,T.mode=24;case 24:if(T.extra){for(_=T.extra;W<_;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}T.offset+=U&(1<<T.extra)-1,U>>>=T.extra,W-=T.extra,T.back+=T.extra}if(T.offset>T.dmax){$.msg="invalid distance too far back",T.mode=30;break}T.mode=25;case 25:if(ie===0)break e;if(I=de-ie,T.offset>I){if((I=T.offset-I)>T.whave&&T.sane){$.msg="invalid distance too far back",T.mode=30;break}A=I>T.wnext?(I-=T.wnext,T.wsize-I):T.wnext-I,I>T.length&&(I=T.length),B=T.window}else B=Z,A=ee-T.offset,I=T.length;for(ie<I&&(I=ie),ie-=I,T.length-=I;Z[ee++]=B[A++],--I;);T.length===0&&(T.mode=21);break;case 26:if(ie===0)break e;Z[ee++]=T.length,ie--,T.mode=21;break;case 27:if(T.wrap){for(;W<32;){if(Y===0)break e;Y--,U|=H[j++]<<W,W+=8}if(de-=ie,$.total_out+=de,T.total+=de,de&&($.adler=T.check=T.flags?t(T.check,Z,de,ee-de):n(T.check,Z,de,ee-de)),de=ie,(T.flags?U:m(U))!==T.check){$.msg="incorrect data check",T.mode=30;break}W=U=0}T.mode=28;case 28:if(T.wrap&&T.flags){for(;W<32;){if(Y===0)break e;Y--,U+=H[j++]<<W,W+=8}if(U!==(4294967295&T.total)){$.msg="incorrect length check",T.mode=30;break}W=U=0}T.mode=29;case 29:F=1;break e;case 30:F=-3;break e;case 31:return-4;default:return h}return $.next_out=ee,$.avail_out=ie,$.next_in=j,$.avail_in=Y,T.hold=U,T.bits=W,(T.wsize||de!==$.avail_out&&T.mode<30&&(T.mode<27||L!==4))&&R($,$.output,$.next_out,de-$.avail_out)?(T.mode=31,-4):(he-=$.avail_in,de-=$.avail_out,$.total_in+=he,$.total_out+=de,T.total+=de,T.wrap&&de&&($.adler=T.check=T.flags?t(T.check,Z,de,$.next_out-de):n(T.check,Z,de,$.next_out-de)),$.data_type=T.bits+(T.last?64:0)+(T.mode===12?128:0)+(T.mode===20||T.mode===15?256:0),(he==0&&de===0||L===4)&&F===c&&(F=-5),F)},r.inflateEnd=function($){if(!$||!$.state)return h;var L=$.state;return L.window&&(L.window=null),$.state=null,c},r.inflateGetHeader=function($,L){var T;return $&&$.state?(2&(T=$.state).wrap)==0?h:((T.head=L).done=!1,c):h},r.inflateSetDictionary=function($,L){var T,H=L.length;return $&&$.state?(T=$.state).wrap!==0&&T.mode!==11?h:T.mode===11&&n(1,L,H,0)!==T.check?-3:R($,L,H,H)?(T.mode=31,-4):(T.havedict=1,c):h},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(s,a,r){var i=s("../utils/common"),n=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],t=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],o=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];a.exports=function(d,p,c,h,f,u,b,m){var y,x,v,C,g,k,w,P,M,R=m.bits,$=0,L=0,T=0,H=0,Z=0,j=0,ee=0,Y=0,ie=0,U=0,W=null,he=0,de=new i.Buf16(16),I=new i.Buf16(16),A=null,B=0;for($=0;$<=15;$++)de[$]=0;for(L=0;L<h;L++)de[p[c+L]]++;for(Z=R,H=15;1<=H&&de[H]===0;H--);if(H<Z&&(Z=H),H===0)return f[u++]=20971520,f[u++]=20971520,m.bits=1,0;for(T=1;T<H&&de[T]===0;T++);for(Z<T&&(Z=T),$=Y=1;$<=15;$++)if(Y<<=1,(Y-=de[$])<0)return-1;if(0<Y&&(d===0||H!==1))return-1;for(I[1]=0,$=1;$<15;$++)I[$+1]=I[$]+de[$];for(L=0;L<h;L++)p[c+L]!==0&&(b[I[p[c+L]]++]=L);if(k=d===0?(W=A=b,19):d===1?(W=n,he-=257,A=t,B-=257,256):(W=l,A=o,-1),$=T,g=u,ee=L=U=0,v=-1,C=(ie=1<<(j=Z))-1,d===1&&852<ie||d===2&&592<ie)return 1;for(;;){for(w=$-ee,M=b[L]<k?(P=0,b[L]):b[L]>k?(P=A[B+b[L]],W[he+b[L]]):(P=96,0),y=1<<$-ee,T=x=1<<j;f[g+(U>>ee)+(x-=y)]=w<<24|P<<16|M|0,x!==0;);for(y=1<<$-1;U&y;)y>>=1;if(y!==0?(U&=y-1,U+=y):U=0,L++,--de[$]==0){if($===H)break;$=p[c+b[L]]}if(Z<$&&(U&C)!==v){for(ee===0&&(ee=Z),g+=T,Y=1<<(j=$-ee);j+ee<H&&!((Y-=de[j+ee])<=0);)j++,Y<<=1;if(ie+=1<<j,d===1&&852<ie||d===2&&592<ie)return 1;f[v=U&C]=Z<<24|j<<16|g-u|0}}return U!==0&&(f[g+U]=$-ee<<24|64<<16|0),m.bits=Z,0}},{"../utils/common":41}],51:[function(s,a,r){a.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(s,a,r){var i=s("../utils/common"),n=0,t=1;function l(D){for(var N=D.length;0<=--N;)D[N]=0}var o=0,d=29,p=256,c=p+1+d,h=30,f=19,u=2*c+1,b=15,m=16,y=7,x=256,v=16,C=17,g=18,k=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],w=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],P=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],M=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],R=new Array(2*(c+2));l(R);var $=new Array(2*h);l($);var L=new Array(512);l(L);var T=new Array(256);l(T);var H=new Array(d);l(H);var Z,j,ee,Y=new Array(h);function ie(D,N,X,K,z){this.static_tree=D,this.extra_bits=N,this.extra_base=X,this.elems=K,this.max_length=z,this.has_stree=D&&D.length}function U(D,N){this.dyn_tree=D,this.max_code=0,this.stat_desc=N}function W(D){return D<256?L[D]:L[256+(D>>>7)]}function he(D,N){D.pending_buf[D.pending++]=255&N,D.pending_buf[D.pending++]=N>>>8&255}function de(D,N,X){D.bi_valid>m-X?(D.bi_buf|=N<<D.bi_valid&65535,he(D,D.bi_buf),D.bi_buf=N>>m-D.bi_valid,D.bi_valid+=X-m):(D.bi_buf|=N<<D.bi_valid&65535,D.bi_valid+=X)}function I(D,N,X){de(D,X[2*N],X[2*N+1])}function A(D,N){for(var X=0;X|=1&D,D>>>=1,X<<=1,0<--N;);return X>>>1}function B(D,N,X){var K,z,Q=new Array(b+1),ae=0;for(K=1;K<=b;K++)Q[K]=ae=ae+X[K-1]<<1;for(z=0;z<=N;z++){var te=D[2*z+1];te!==0&&(D[2*z]=A(Q[te]++,te))}}function q(D){var N;for(N=0;N<c;N++)D.dyn_ltree[2*N]=0;for(N=0;N<h;N++)D.dyn_dtree[2*N]=0;for(N=0;N<f;N++)D.bl_tree[2*N]=0;D.dyn_ltree[2*x]=1,D.opt_len=D.static_len=0,D.last_lit=D.matches=0}function O(D){8<D.bi_valid?he(D,D.bi_buf):0<D.bi_valid&&(D.pending_buf[D.pending++]=D.bi_buf),D.bi_buf=0,D.bi_valid=0}function J(D,N,X,K){var z=2*N,Q=2*X;return D[z]<D[Q]||D[z]===D[Q]&&K[N]<=K[X]}function re(D,N,X){for(var K=D.heap[X],z=X<<1;z<=D.heap_len&&(z<D.heap_len&&J(N,D.heap[z+1],D.heap[z],D.depth)&&z++,!J(N,K,D.heap[z],D.depth));)D.heap[X]=D.heap[z],X=z,z<<=1;D.heap[X]=K}function G(D,N,X){var K,z,Q,ae,te=0;if(D.last_lit!==0)for(;K=D.pending_buf[D.d_buf+2*te]<<8|D.pending_buf[D.d_buf+2*te+1],z=D.pending_buf[D.l_buf+te],te++,K===0?I(D,z,N):(I(D,(Q=T[z])+p+1,N),(ae=k[Q])!==0&&de(D,z-=H[Q],ae),I(D,Q=W(--K),X),(ae=w[Q])!==0&&de(D,K-=Y[Q],ae)),te<D.last_lit;);I(D,x,N)}function ne(D,N){var X,K,z,Q=N.dyn_tree,ae=N.stat_desc.static_tree,te=N.stat_desc.has_stree,le=N.stat_desc.elems,ce=-1;for(D.heap_len=0,D.heap_max=u,X=0;X<le;X++)Q[2*X]!==0?(D.heap[++D.heap_len]=ce=X,D.depth[X]=0):Q[2*X+1]=0;for(;D.heap_len<2;)Q[2*(z=D.heap[++D.heap_len]=ce<2?++ce:0)]=1,D.depth[z]=0,D.opt_len--,te&&(D.static_len-=ae[2*z+1]);for(N.max_code=ce,X=D.heap_len>>1;1<=X;X--)re(D,Q,X);for(z=le;X=D.heap[1],D.heap[1]=D.heap[D.heap_len--],re(D,Q,1),K=D.heap[1],D.heap[--D.heap_max]=X,D.heap[--D.heap_max]=K,Q[2*z]=Q[2*X]+Q[2*K],D.depth[z]=(D.depth[X]>=D.depth[K]?D.depth[X]:D.depth[K])+1,Q[2*X+1]=Q[2*K+1]=z,D.heap[1]=z++,re(D,Q,1),2<=D.heap_len;);D.heap[--D.heap_max]=D.heap[1],(function(ue,se){var pe,me,we,ye,ve,Ie,Se=se.dyn_tree,Pe=se.max_code,ea=se.stat_desc.static_tree,ta=se.stat_desc.has_stree,aa=se.stat_desc.extra_bits,It=se.stat_desc.extra_base,qe=se.stat_desc.max_length,et=0;for(ye=0;ye<=b;ye++)ue.bl_count[ye]=0;for(Se[2*ue.heap[ue.heap_max]+1]=0,pe=ue.heap_max+1;pe<u;pe++)qe<(ye=Se[2*Se[2*(me=ue.heap[pe])+1]+1]+1)&&(ye=qe,et++),Se[2*me+1]=ye,Pe<me||(ue.bl_count[ye]++,ve=0,It<=me&&(ve=aa[me-It]),Ie=Se[2*me],ue.opt_len+=Ie*(ye+ve),ta&&(ue.static_len+=Ie*(ea[2*me+1]+ve)));if(et!==0){do{for(ye=qe-1;ue.bl_count[ye]===0;)ye--;ue.bl_count[ye]--,ue.bl_count[ye+1]+=2,ue.bl_count[qe]--,et-=2}while(0<et);for(ye=qe;ye!==0;ye--)for(me=ue.bl_count[ye];me!==0;)Pe<(we=ue.heap[--pe])||(Se[2*we+1]!==ye&&(ue.opt_len+=(ye-Se[2*we+1])*Se[2*we],Se[2*we+1]=ye),me--)}})(D,N),B(Q,ce,D.bl_count)}function S(D,N,X){var K,z,Q=-1,ae=N[1],te=0,le=7,ce=4;for(ae===0&&(le=138,ce=3),N[2*(X+1)+1]=65535,K=0;K<=X;K++)z=ae,ae=N[2*(K+1)+1],++te<le&&z===ae||(te<ce?D.bl_tree[2*z]+=te:z!==0?(z!==Q&&D.bl_tree[2*z]++,D.bl_tree[2*v]++):te<=10?D.bl_tree[2*C]++:D.bl_tree[2*g]++,Q=z,ce=(te=0)===ae?(le=138,3):z===ae?(le=6,3):(le=7,4))}function F(D,N,X){var K,z,Q=-1,ae=N[1],te=0,le=7,ce=4;for(ae===0&&(le=138,ce=3),K=0;K<=X;K++)if(z=ae,ae=N[2*(K+1)+1],!(++te<le&&z===ae)){if(te<ce)for(;I(D,z,D.bl_tree),--te!=0;);else z!==0?(z!==Q&&(I(D,z,D.bl_tree),te--),I(D,v,D.bl_tree),de(D,te-3,2)):te<=10?(I(D,C,D.bl_tree),de(D,te-3,3)):(I(D,g,D.bl_tree),de(D,te-11,7));Q=z,ce=(te=0)===ae?(le=138,3):z===ae?(le=6,3):(le=7,4)}}l(Y);var V=!1;function _(D,N,X,K){de(D,(o<<1)+(K?1:0),3),(function(z,Q,ae,te){O(z),he(z,ae),he(z,~ae),i.arraySet(z.pending_buf,z.window,Q,ae,z.pending),z.pending+=ae})(D,N,X)}r._tr_init=function(D){V||((function(){var N,X,K,z,Q,ae=new Array(b+1);for(z=K=0;z<d-1;z++)for(H[z]=K,N=0;N<1<<k[z];N++)T[K++]=z;for(T[K-1]=z,z=Q=0;z<16;z++)for(Y[z]=Q,N=0;N<1<<w[z];N++)L[Q++]=z;for(Q>>=7;z<h;z++)for(Y[z]=Q<<7,N=0;N<1<<w[z]-7;N++)L[256+Q++]=z;for(X=0;X<=b;X++)ae[X]=0;for(N=0;N<=143;)R[2*N+1]=8,N++,ae[8]++;for(;N<=255;)R[2*N+1]=9,N++,ae[9]++;for(;N<=279;)R[2*N+1]=7,N++,ae[7]++;for(;N<=287;)R[2*N+1]=8,N++,ae[8]++;for(B(R,c+1,ae),N=0;N<h;N++)$[2*N+1]=5,$[2*N]=A(N,5);Z=new ie(R,k,p+1,c,b),j=new ie($,w,0,h,b),ee=new ie(new Array(0),P,0,f,y)})(),V=!0),D.l_desc=new U(D.dyn_ltree,Z),D.d_desc=new U(D.dyn_dtree,j),D.bl_desc=new U(D.bl_tree,ee),D.bi_buf=0,D.bi_valid=0,q(D)},r._tr_stored_block=_,r._tr_flush_block=function(D,N,X,K){var z,Q,ae=0;0<D.level?(D.strm.data_type===2&&(D.strm.data_type=(function(te){var le,ce=4093624447;for(le=0;le<=31;le++,ce>>>=1)if(1&ce&&te.dyn_ltree[2*le]!==0)return n;if(te.dyn_ltree[18]!==0||te.dyn_ltree[20]!==0||te.dyn_ltree[26]!==0)return t;for(le=32;le<p;le++)if(te.dyn_ltree[2*le]!==0)return t;return n})(D)),ne(D,D.l_desc),ne(D,D.d_desc),ae=(function(te){var le;for(S(te,te.dyn_ltree,te.l_desc.max_code),S(te,te.dyn_dtree,te.d_desc.max_code),ne(te,te.bl_desc),le=f-1;3<=le&&te.bl_tree[2*M[le]+1]===0;le--);return te.opt_len+=3*(le+1)+5+5+4,le})(D),z=D.opt_len+3+7>>>3,(Q=D.static_len+3+7>>>3)<=z&&(z=Q)):z=Q=X+5,X+4<=z&&N!==-1?_(D,N,X,K):D.strategy===4||Q===z?(de(D,2+(K?1:0),3),G(D,R,$)):(de(D,4+(K?1:0),3),(function(te,le,ce,ue){var se;for(de(te,le-257,5),de(te,ce-1,5),de(te,ue-4,4),se=0;se<ue;se++)de(te,te.bl_tree[2*M[se]+1],3);F(te,te.dyn_ltree,le-1),F(te,te.dyn_dtree,ce-1)})(D,D.l_desc.max_code+1,D.d_desc.max_code+1,ae+1),G(D,D.dyn_ltree,D.dyn_dtree)),q(D),K&&O(D)},r._tr_tally=function(D,N,X){return D.pending_buf[D.d_buf+2*D.last_lit]=N>>>8&255,D.pending_buf[D.d_buf+2*D.last_lit+1]=255&N,D.pending_buf[D.l_buf+D.last_lit]=255&X,D.last_lit++,N===0?D.dyn_ltree[2*X]++:(D.matches++,N--,D.dyn_ltree[2*(T[X]+p+1)]++,D.dyn_dtree[2*W(N)]++),D.last_lit===D.lit_bufsize-1},r._tr_align=function(D){de(D,2,3),I(D,x,R),(function(N){N.bi_valid===16?(he(N,N.bi_buf),N.bi_buf=0,N.bi_valid=0):8<=N.bi_valid&&(N.pending_buf[N.pending++]=255&N.bi_buf,N.bi_buf>>=8,N.bi_valid-=8)})(D)}},{"../utils/common":41}],53:[function(s,a,r){a.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(s,a,r){(function(i){(function(n,t){if(!n.setImmediate){var l,o,d,p,c=1,h={},f=!1,u=n.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(n);b=b&&b.setTimeout?b:n,l={}.toString.call(n.process)==="[object process]"?function(v){process.nextTick(function(){y(v)})}:(function(){if(n.postMessage&&!n.importScripts){var v=!0,C=n.onmessage;return n.onmessage=function(){v=!1},n.postMessage("","*"),n.onmessage=C,v}})()?(p="setImmediate$"+Math.random()+"$",n.addEventListener?n.addEventListener("message",x,!1):n.attachEvent("onmessage",x),function(v){n.postMessage(p+v,"*")}):n.MessageChannel?((d=new MessageChannel).port1.onmessage=function(v){y(v.data)},function(v){d.port2.postMessage(v)}):u&&"onreadystatechange"in u.createElement("script")?(o=u.documentElement,function(v){var C=u.createElement("script");C.onreadystatechange=function(){y(v),C.onreadystatechange=null,o.removeChild(C),C=null},o.appendChild(C)}):function(v){setTimeout(y,0,v)},b.setImmediate=function(v){typeof v!="function"&&(v=new Function(""+v));for(var C=new Array(arguments.length-1),g=0;g<C.length;g++)C[g]=arguments[g+1];var k={callback:v,args:C};return h[c]=k,l(c),c++},b.clearImmediate=m}function m(v){delete h[v]}function y(v){if(f)setTimeout(y,0,v);else{var C=h[v];if(C){f=!0;try{(function(g){var k=g.callback,w=g.args;switch(w.length){case 0:k();break;case 1:k(w[0]);break;case 2:k(w[0],w[1]);break;case 3:k(w[0],w[1],w[2]);break;default:k.apply(t,w)}})(C)}finally{m(v),f=!1}}}}function x(v){v.source===n&&typeof v.data=="string"&&v.data.indexOf(p)===0&&y(+v.data.slice(p.length))}})(typeof self>"u"?i===void 0?this:i:self)}).call(this,typeof at<"u"?at:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(yt)),yt.exports}var as=ts();const Ht=dt(as),Fe=(E,e)=>!!(E.moments&&E.moments.includes(e)||E.moment===e),Te={打出时:"🚩",死亡时:"☠️",攻击时:"🗡️",失去生命时:"💔",回合结束时:"📘",回合开始时:"📗",下回合开始时:"⏱️",受伤时:"💔"},Vt={my_hand:"我方手牌数",enemy_hand:"敌方手牌数",my_minions:"我方随从数",enemy_minions:"敌方随从数"};function ss(E,e){const s=E.type==="hero",a=e.type==="hero";if(s!==a)return s?-1:1;if(E.cost!==e.cost)return E.cost-e.cost;const r=E.type!=="spell",i=e.type!=="spell";if(r!==i)return r?-1:1;const n=(E.attack||0)+(E.health||0),t=(e.attack||0)+(e.health||0);return n!==t?n-t:E.name.localeCompare(e.name,"en")}function Me(E,e){return E==="deck_top"?e?"抽牌堆的卡牌":"抽牌堆顶的卡牌":E==="discard_top"?e?"弃牌堆的卡牌":"弃牌堆顶的卡牌":E==="my_hand"?e?"我方手牌":"我方所有手牌":E==="enemy_hand"?e?"敌方手牌":"敌方所有手牌":"未知来源"}const De=class De{constructor(){this.selectedMinion=null,this.isAttacking=!1,this.dyingMinions=new Set,this.lastGameStateTimestamp=0,this._p2MulliganConfirmed=!1,this.draggedCard=null,this.dragElement=null,this._pendingClickCardId=void 0,this._lastBroadcastDiscardPileLen=0,this._pendingEnemyHandCard=void 0,this._pendingEnemyHandEffectType=void 0,this.isHandDragStarted=!1,this.handDragStartX=0,this.handDragStartY=0,this.globalListenersAttached=!1,this.attackingMinion=null,this.attackArrowEl=null,this.attackArrowStartX=0,this.attackArrowStartY=0,this.selectedHandCard=null,this.selectedAttackingMinion=null,this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null,this.selectingTargetForSkill=null,this.targetArrowStartX=0,this.targetArrowStartY=0,this.targetArrowColor="#4a90d9",this.editingCards=[],this.currentCardIndex=0,this.currentEffectIndex=0,this.showKeywordsPanel=!1,this.showMomentPanel=!1,this.showTargetPanel=!1,this.showEffectPanel=!1,this.showConditionPanel=!1,this.isPortraitMode=!1,this.showSidePanel=!1,this.pendingScrollRestoration=null,this.savedCardManagerScrollY=0,this.robotTurnExecuting=!1,this.heroName="",this.heroImageData=null,this.isHeroEditMode=!1,this.editingHeroId=null,this.heroDerivedCards=[],this.heroEditingDerivedIndex=null,this.heroSkills=[],this.cardManagerScrollY=0,this.heroEditingSkillIndex=null,this.heroEditingSkillEffectIndex=0,this.heroSkillTempImageData=null,this.heroSkillCropIndex=null,this.showHeroSkillMomentPanel=!1,this.showHeroSkillTargetPanel=!1,this.showHeroSkillEffectPanel=!1,this.showHeroSkillConditionPanel=!1,this.heroSpeech={greeting:"",apology:"",taunt:"",exclamation:"",pity:"",flirt:""},this.heroVoiceType="none",this.speechCooldown=!1,this.speechLastTurnCheck=0,this.speechLastRobotBoardSize=0,this.speechLastRobotBoardIds=new Set,this.speechLastRobotHealth=40,this.speechLastHandSize=0,this.speechLastPlayerEnergy=0,this.speechLastRobotTotalHealth=0,this.speechTurnSpokenTypes=new Set,this.flirtAudioPlaying=!1,this.lastPlayerActionTimestamp=Date.now(),this.playerIdleTaunted=!1,this.speechLastActionSignature="",this.showSpeechMenu=!1,this.speechMenuTimer=null,this.activeSpeechBubble=null,this.cropTarget="main",this.importMode="full",this.isDrawingMode=!1,this.drawingTool="brush",this.drawingCanvasRef=null,this.drawingCtxRef=null,this.drawingBaseImageData=null,this.brushSizePreset="medium",this.COLORS=["#c9524a","#d4894a","#c9a84a","#4a8a5a","#4a8a8a","#4a6a9a","#7a5a8a","#000000"],this.drawingColor="#000000",this.currentColorIndex=7,this.menuSubScreen="",this._lastAnimatedRenderKey="",this.onlineLoginError=null,this._suppressFirstRender=!1,this.player1SelectedHero=null,this.player2SelectedHero=null,this.renamingGroupId=null,this.collapsedGroups=new Set,this.elementClickCount=0,this.lastElementKeyword=null,this.isEditMode=!1,this.editingCardSample=null,this.sortedCardList=[],this.lastDeckVersion=0,this.lastPhase="",this.showGameMenu=!1,this.showMenuOptions=!1,this.soundVolume=Math.min(100,Math.max(0,parseInt(localStorage.getItem("soundVolume")||"50"))),this.musicVolume=Math.min(100,Math.max(0,parseInt(localStorage.getItem("musicVolume")||"50"))),this.uiScale=Math.min(200,Math.max(50,parseInt(localStorage.getItem("uiScale")||"100"))),this.bgMusic=null,this.currentBgmTrack="",this._bgmPaused=!1,this._bgmAutoPaused=!1,this.deckFolderHandle=null,this.deckFolderZips=[],this.deckFolderName="",this.deckFolderConnected=!1,this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.savedGameState=null,this.previousMinionStats=new Map,this.deathAnimationQueue=[],this.previousBoardMinionIds=new Set,this.damageNumbers=[],this.previousPlayerHealth=[30,30],this.roomSubscription=null,this.battleStatePollInterval=null,this.isSubscribing=!1,this.pollingInterval=null,this.onlineViewPlayerIndex=0,this.cardTemplates=[{name:"少年剑客",cost:1,attack:2,health:1,maxHealth:1,type:"minion",keywords:[],imageData:"/cards/card_swordsman.png"},{name:"花灵仙子",cost:1,attack:0,health:2,maxHealth:2,type:"minion",keywords:[],imageData:"/cards/card_fairy.png"},{name:"麦田收割者",cost:2,attack:2,health:2,maxHealth:2,type:"minion",keywords:[],imageData:"/cards/card_harvest_maiden.png"},{name:"铁匠",cost:2,attack:2,health:3,maxHealth:3,type:"minion",keywords:[$e.armor],imageData:"/cards/card_blacksmith.png"},{name:"血刃刺客",cost:2,attack:3,health:1,maxHealth:1,type:"minion",keywords:[$e.firstStrike],imageData:"/cards/card_assassin.png"},{name:"重装守卫",cost:3,attack:1,health:6,maxHealth:6,type:"minion",keywords:[$e.taunt],imageData:"/cards/card_guardian.png"},{name:"秘法师",cost:4,attack:1,health:4,maxHealth:4,type:"minion",keywords:[],imageData:"/cards/card_archmage.png"},{name:"圣殿骑士",cost:4,attack:4,health:4,maxHealth:4,type:"minion",keywords:[],imageData:"/cards/card_templar.png"}],this.clickSoundFiles=[],this.drawSoundFiles=[],this.woodSoundFiles=[],this.clickAudioPool=[],this.clickAudioIndex=0,this.woodAudioPool=[],this.woodAudioIndex=0,this.drawAudioPool=[],this.drawAudioIndex=0,this.pendingSavePromise=null,this.customCursorEl=null,this.pendingImportCards=[],this.pendingImportMode=null,this.pendingImportType=null,this.pendingOnlineImportCards=[],this.pendingOnlineImportMode=null,this.pendingOnlineImportType=null,this.fxCanvas=null,this.fxCtx=null,this.fxParticles=[],this.fxAnimationId=0,this.fxRunning=!1,this.fxLoop=()=>{const e=this.fxCtx,s=this.fxCanvas;if(!e||!s){this.fxRunning=!1;return}e.clearRect(0,0,s.width,s.height);const a=1/60;e.globalCompositeOperation="lighter";for(let r=this.fxParticles.length-1;r>=0;r--){const i=this.fxParticles[r];if(i.life-=a/i.maxLife,i.life<=0){this.fxParticles.splice(r,1);continue}i.gravity&&(i.vy+=i.gravity*a),i.x+=i.vx*a,i.y+=i.vy*a,i.vx*=.98,i.vy*=.98,i.alpha=i.life*(i.alpha>.5?i.alpha:1);const n=i.size*Math.max(.1,i.life);let t=i.color;if(!(!t.startsWith("rgba")&&!t.startsWith("#"))){if(t.startsWith("#")){const l=1-i.life;t==="#ff6600"&&(t=l>.5?"#cc2200":"#ff6600")}}if(i.trail&&i.history){i.history.push({x:i.x,y:i.y}),i.history.length>(i.trailLength||5)&&i.history.shift();for(let l=0;l<i.history.length-1;l++){const o=l/i.history.length*i.alpha*.5;e.beginPath(),e.arc(i.history[l].x,i.history[l].y,n*(l/i.history.length)*.6,0,Math.PI*2),e.fillStyle=t.replace(")",`,${o})`).replace("rgb","rgba"),t.includes("rgba")||(e.fillStyle=`rgba(${parseInt(t.slice(1,3),16)},${parseInt(t.slice(3,5),16)},${parseInt(t.slice(5,7),16)},${o})`),e.fill()}}if(e.beginPath(),i.shape==="spark"){const l=n*3,o=n;e.ellipse(i.x,i.y,l/2,o/2,Math.atan2(i.vy,i.vx),0,Math.PI*2)}else e.arc(i.x,i.y,n,0,Math.PI*2);if(t.startsWith("rgba")){const l=t.match(/rgba\((\d+),(\d+),(\d+),([\d.]+)\)/);l?e.fillStyle=`rgba(${l[1]},${l[2]},${l[3]},${parseFloat(l[4])*i.alpha})`:e.fillStyle=t}else if(t.startsWith("#")){const l=parseInt(t.slice(1,3),16),o=parseInt(t.slice(3,5),16),d=parseInt(t.slice(5,7),16);e.fillStyle=`rgba(${l},${o},${d},${i.alpha})`}else e.fillStyle=t;e.fill()}e.globalCompositeOperation="source-over",this.fxParticles.length>0?this.fxAnimationId=requestAnimationFrame(this.fxLoop):this.fxRunning=!1},this.thumbsDownAnimCssInjected=!1,this.thumbsDownIntervalId=null,this._suppressFirstRender=!!sessionStorage.getItem("_pageAnimLoaded"),sessionStorage.getItem("_pageAnimLoaded")||sessionStorage.setItem("_pageAnimLoaded","1"),this.state=Ut(),this.app=document.getElementById("app"),this.boundMouseMove=this.handleMouseMove.bind(this),this.boundMouseUp=this.handleMouseUp.bind(this),this.initClickSounds(),this.render(),this.loadPersistedDeck(),this.loadDeckFolder(),this.startBackgroundMusic(),this.createNowPlayingDisplay(),this.initAtmosphere(),this.applyUiScale(),document.addEventListener("visibilitychange",()=>{document.hidden?(this.bgMusic&&!this.bgMusic.paused&&(this.bgMusic.pause(),this._bgmAutoPaused=!0),this.syncSharedDeck(),this.pendingSavePromise=Tt(this.state.sharedDeck,this.state.heroCards||[],this.state.groups)):this._bgmAutoPaused&&!this._bgmPaused&&(this.bgMusic?.play().catch(()=>{}),this._bgmAutoPaused=!1)}),document.addEventListener("keydown",e=>{if(e.key!=="Escape")return;const s=this.state.phase;["playing","mulligan","gameOver","robotBattle","robotGameOver","onlineBattle","onlineGameOver"].includes(s)?this.showGameMenu=!this.showGameMenu:s==="menu"?this.showMenuOptions=!this.showMenuOptions:(this.state=oe(this.state,{type:"BACK_TO_MENU"}),this.showMenuOptions=!1,this.showGameMenu=!1),this.render()})}get currentCard(){return this.editingCards[this.currentCardIndex]||this.editingCards[0]||this.createDefaultCard()}set currentCard(e){this.editingCards[this.currentCardIndex]&&(this.editingCards[this.currentCardIndex]=e)}getBrushSize(){return this.drawingTool==="brush"?this.brushSizePreset==="thin"?1:this.brushSizePreset==="medium"?3:9:this.brushSizePreset==="thin"?5:this.brushSizePreset==="medium"?15:45}createDefaultEffect(){return{moment:null,targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0,isAttackSet:!1,isHealthSet:!1,costValue:0,isCostPositive:!0,isCostSet:!1,triggerNumbers:[1,2,3,4,5,6],randomTargetTimes:1}}createDefaultCard(e="minion"){return{name:"",cost:1,attack:e==="spell"?0:1,health:e==="spell"?0:1,keywords:[],armorValue:1,preparationValue:1,effects:[],type:e,spellEffect:{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0,isAttackSet:!1,isHealthSet:!1,costValue:0,isCostPositive:!0,isCostSet:!1},imageData:null}}initCardsArray(e="minion"){this.editingCards=[this.createDefaultCard(e)],this.currentCardIndex=0,this.currentEffectIndex=0}addDerivedCard(){const e=this.createDefaultCard("minion");e.name=`衍生卡${this.editingCards.length}`,this.editingCards.push(e),this.currentCardIndex=this.editingCards.length-1,this.currentEffectIndex=0}deleteDerivedCard(e){e!==0&&(this.editingCards.splice(e,1),this.currentCardIndex=0,this.currentEffectIndex=0)}getMainCard(){return this.editingCards[0]}getCardByIndex(e){return this.editingCards[e]}cloneCardByIndex(e){const s=this.editingCards[e];return s?{id:Ee(),name:s.name||"未知卡牌",cost:s.cost,attack:s.attack,health:s.health,maxHealth:s.health,type:s.type,keywords:s.keywords.map(a=>({...a})),armorValue:s.armorValue,effects:s.effects?.map(a=>({...a})),imageData:s.imageData||void 0}:null}getCurrentEffect(){return!this.currentCard.effects||this.currentCard.effects.length===0?null:this.currentCard.effects[this.currentEffectIndex]||null}addNewEffect(){return this.currentCard.effects||(this.currentCard.effects=[]),this.currentCard.effects.push(this.createDefaultEffect()),this.currentEffectIndex=this.currentCard.effects.length-1,this.showMomentPanel=!0,this.currentCard.effects[this.currentEffectIndex]}async loadPersistedDeck(){try{const e=await Ga();if(e&&e.sharedDeck){if(this.state=oe(this.state,{type:"SET_DECK",cards:e.sharedDeck}),e.heroCards.length>0&&(this.state={...this.state,heroCards:e.heroCards}),e.groups&&e.groups.length>1){const r=this.state.groups;for(const i of e.groups.slice(1))r.find(n=>n.id===i.id)||r.push(i);this.state={...this.state,groups:r}}else try{const r=localStorage.getItem("miaoKaBao_customGroups");if(r){const n=JSON.parse(r).slice(1);if(n.length>0){const t=this.state.groups;for(const l of n)t.find(o=>o.id===l.id)||t.push(l);this.state={...this.state,groups:t}}}}catch(r){console.warn("[deckStorage] localStorage 恢复子卡组失败:",r)}const s=e.sharedDeck.reduce((r,i)=>r+i.count,0);console.log(`[deckStorage] 已从本地恢复卡包，共 ${s} 张`);let a=0;for(const r of this.state.groups)for(const i of r.cards)i.card.id>a&&(a=i.card.id);zt(a),this.render();return}}catch(e){console.warn("[deckStorage] 读取失败:",e)}this.render()}async loadDeckFolder(){try{const e=await Ua();e&&(this.deckFolderHandle=e,this.deckFolderName=e.name,await this.refreshDeckFolderZips()?(this.deckFolderConnected=!0,console.log(`[deckStorage] 已恢复卡包文件夹「${e.name}」，找到 ${this.deckFolderZips.length} 个 ZIP`)):(this.deckFolderConnected=!1,console.log(`[deckStorage] 已恢复卡包文件夹「${e.name}」，但权限不足，等待用户重新授权`)),this.render())}catch(e){console.warn("[deckStorage] 加载卡包文件夹失败:",e)}}async refreshDeckFolderZips(){if(this.deckFolderZips=[],!this.deckFolderHandle)return!1;try{const e=this.deckFolderHandle;if(await e.queryPermission({mode:"read"})!=="granted"&&await e.requestPermission({mode:"read"})!=="granted")return console.warn("[deckStorage] 文件夹权限不足，保留 handle 等待用户重新授权"),!1;const s=[];for await(const a of e.values())a.kind==="file"&&a.name.toLowerCase().endsWith(".zip")&&s.push({name:a.name,handle:a});return s.sort((a,r)=>a.name.localeCompare(r.name)),this.deckFolderZips=s,!0}catch(e){return console.warn("[deckStorage] 读取文件夹失败:",e),!1}}initClickSounds(){this.clickSoundFiles=Array.from({length:11},(s,a)=>`/sounds/bluntwood/bluntwood_${a+1}.ogg`),this.drawSoundFiles=Array.from({length:11},(s,a)=>`/sounds/snow/snow_${a+1}.ogg`),this.woodSoundFiles=Array.from({length:11},(s,a)=>`/sounds/wood/wood_walk${a+1}.ogg`);for(let s=0;s<3;s++)this.clickAudioPool.push(new Audio),this.woodAudioPool.push(new Audio),this.drawAudioPool.push(new Audio);this.app.addEventListener("click",s=>{const a=s.target;(a.tagName==="BUTTON"||a.closest("button")||a.classList.contains("btn"))&&this.playClickSound()});const e=()=>{this.bgMusic&&this.bgMusic.paused&&!this._bgmPaused&&this.musicVolume>0&&this.bgMusic.play().catch(()=>{})};document.addEventListener("click",e,{once:!0})}playClickSound(){if(this.soundVolume===0||this.clickSoundFiles.length===0)return;const e=this.clickSoundFiles[Math.floor(Math.random()*this.clickSoundFiles.length)],s=this.clickAudioPool[this.clickAudioIndex];this.clickAudioIndex=(this.clickAudioIndex+1)%this.clickAudioPool.length,s.src=e,s.currentTime=0,s.volume=this.soundVolume/100,s.play().catch(()=>{})}startBackgroundMusic(e){try{if(this.musicVolume===0)return;const s=e??this.getMenuBgmTrack();this.switchBGM(s)}catch{}}stopBackgroundMusic(){this.bgMusic&&(this.bgMusic.pause(),this.bgMusic.currentTime=0)}applyUiScale(){document.documentElement.style.fontSize=`${16*(this.uiScale/100)}px`}getMenuBgmTrack(){return Math.random()<.05?"/sounds/Music/beauteous_rain.mp3":"/sounds/Music/passing_summer.mp3"}getBattleBgmTrack(){return"/sounds/Music/indecisive.mp3"}switchBGM(e){try{if(this.musicVolume===0)return;if(this.bgMusic&&this.currentBgmTrack===e){this.bgMusic.volume=this.musicVolume/100,this.bgMusic.paused&&!this._bgmPaused&&this.bgMusic.play().catch(()=>{});return}if(this.bgMusic){try{this.bgMusic.pause()}catch{}this.bgMusic.src=""}const s=new Audio(e);s.loop=!0,s.volume=this.musicVolume/100,s.play().catch(()=>{}),this.bgMusic=s,this.currentBgmTrack=e,this.updateNowPlayingDisplay(e)}catch{}}switchBGMForScene(){if(this.musicVolume===0||this._bgmPaused)return;const e=this.state.phase,s=["playing","mulligan","gameOver","robotBattle","robotGameOver","onlineBattle","onlineGameOver"];if(s.includes(e)&&this.showMenuOptions){this.bgMusic&&!this.bgMusic.paused&&this.bgMusic.pause();return}if(s.includes(e)){const a=this.getBattleBgmTrack();this.currentBgmTrack!==a&&this.switchBGM(a)}else e==="menu"?this.currentBgmTrack==="/sounds/Music/passing_summer.mp3"||this.currentBgmTrack==="/sounds/Music/beauteous_rain.mp3"?this.bgMusic&&this.bgMusic.paused&&this.bgMusic.play().catch(()=>{}):this.switchBGM(this.getMenuBgmTrack()):this.bgMusic&&this.bgMusic.paused&&this.bgMusic.play().catch(()=>{})}createNowPlayingDisplay(){const e=document.createElement("div");e.id="now-playing-display";const s=this.currentBgmTrack?this.currentBgmTrack.split("/").pop()||this.currentBgmTrack:"　";if(e.innerHTML='<span class="npl">正在播放：</span><span class="npn"><span class="npn-inner"><span style="margin-right:24px">'+s+'</span><span style="margin-right:24px">'+s+"</span></span></span>",this.musicVolume===0&&(e.style.display="none"),document.body.appendChild(e),e.addEventListener("click",()=>{this.bgMusic&&this.musicVolume!==0&&(this._bgmPaused=!this._bgmPaused,this._bgmPaused?(this.bgMusic.pause(),e.classList.add("paused"),e.querySelector(".npl").textContent="暂停播放："):(this.bgMusic.play().catch(()=>{}),e.classList.remove("paused"),e.querySelector(".npl").textContent="正在播放："))}),!document.getElementById("np-style")){const a=document.createElement("style");a.id="np-style",a.textContent=`
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
        @keyframes speechBubbleFadeIn{0%{opacity:0;transform:scale(0.6) translateY(8px)}100%{opacity:1;transform:scale(1) translateY(0)}}
        @keyframes speechBubbleFadeOut{0%{opacity:1;transform:scale(1) translateY(0)}100%{opacity:0;transform:scale(0.6) translateY(-8px)}}
        .speech-btn:hover{transform:scale(1.12) !important;box-shadow:0 6px 16px rgba(0,0,0,0.4) !important;}
        .speech-btn:active{transform:scale(0.95) !important;}
      `,document.head.appendChild(a)}}updateNowPlayingDisplay(e){const s=document.querySelector("#now-playing-display .npn-inner");if(!s)return;const a=e.split("/").pop()||e;s.innerHTML=`<span style="margin-right:24px">${a}</span><span style="margin-right:24px">${a}</span>`}initAtmosphere(){if(document.getElementById("game-atmosphere"))return;const e=document.createElement("div");e.id="game-atmosphere",e.className="atmos-full",e.innerHTML=`
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
    `,document.body.insertBefore(e,document.body.firstChild)}updateAtmosphereIntensity(e){const s=document.getElementById("game-atmosphere");if(!s)return;const a=e==="menu";s.className=a?"atmos-full":"atmos-ambient"}playDrawSound(){if(this.soundVolume===0||this.drawSoundFiles.length===0)return;const e=this.drawSoundFiles[Math.floor(Math.random()*this.drawSoundFiles.length)],s=this.drawAudioPool[this.drawAudioIndex];this.drawAudioIndex=(this.drawAudioIndex+1)%this.drawAudioPool.length,s.src=e,s.currentTime=0,s.volume=this.soundVolume/100,s.play().catch(()=>{})}playWoodSound(){if(this.soundVolume===0||this.woodSoundFiles.length===0)return;const e=this.woodSoundFiles[Math.floor(Math.random()*this.woodSoundFiles.length)],s=this.woodAudioPool[this.woodAudioIndex];this.woodAudioIndex=(this.woodAudioIndex+1)%this.woodAudioPool.length,s.src=e,s.currentTime=0,s.volume=this.soundVolume/100,s.play().catch(()=>{})}playPendingSounds(){if(this.state.soundEffects&&this.state.soundEffects.length>0){for(const e of this.state.soundEffects)e==="wood"&&this.playWoodSound();this.state={...this.state,soundEffects:[]}}}async autoSetReadyAfterDeckImport(e){const{currentRoom:s,playerId:a,playerNickname:r}=this.state.online;if(!(!s||!a)&&e){const{setPlayerReady:i,getPlayerReady:n}=await ge(async()=>{const{setPlayerReady:o,getPlayerReady:d}=await import("./online-fGHm1H1u.js");return{setPlayerReady:o,getPlayerReady:d}},__vite__mapDeps([0,1]));if((await i(s.id,a,r,!0)).success){const o=await n(s.id);this.state=oe(this.state,{type:"UPDATE_PLAYER_READY",playerReady:o})}const l=document.querySelector('.bottom-player-area [data-own-hero="true"]');l&&l.addEventListener("mouseup",o=>{if(this.attackingMinion&&!o.target.closest(".minion-card")&&!this.isAttacking){this.hideAttackArrow();const d=this.attackingMinion;this.attackingMinion=null,this.hideDefenseOverlayDOM();const p=this.state.phase==="onlineBattle",c=p?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,f=this.state.players[c].board.find(k=>k.id===d.id);if(!f)return;const u=f.keywords.some(k=>k.name==="连击"),b=f.keywords.some(k=>k.name==="狂怒"),m=f.keywords.some(k=>k.name==="嘲讽"),y=f.keywords.some(k=>k.name==="机动"),x=f.keywords.some(k=>k.name==="不动"),v=f.maxAttacksPerTurn||1,C=(f.attacksThisTurn||0)>=v;if(f.isDefending){const k=p?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=oe(this.state,{type:"TOGGLE_DEFENSE",playerId:k,cardId:d.id}),this.render(),p){const w=this.state.online.currentRoom;w&&(ge(async()=>{const{broadcastGameAction:P}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:P}},__vite__mapDeps([0,1])).then(({broadcastGameAction:P})=>{P(w.id,{type:"STATE_SYNC",playerId:k}).catch(console.error)}),this.broadcastGameState())}return}if(!x&&!u&&!b&&!m&&(!f.hasAttacked||y)&&!C&&!(f.playedThisTurn&&f.keywords.some(k=>k.name==="冲锋"))){const k=p?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=oe(this.state,{type:"TOGGLE_DEFENSE",playerId:k,cardId:d.id}),this.render(),p){const w=this.state.online.currentRoom;w&&(ge(async()=>{const{broadcastGameAction:P}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:P}},__vite__mapDeps([0,1])).then(({broadcastGameAction:P})=>{P(w.id,{type:"STATE_SYNC",playerId:k}).catch(console.error)}),this.broadcastGameState())}}}})}}computeComparisonData(){const e={},s=this.state.groups;for(const a of s)for(const r of a.cards){const i=r.card.name;e[i]||(e[i]={count:0,groups:{}}),e[i].count+=r.count,e[i].groups[a.name]=(e[i].groups[a.name]||0)+r.count}return e}async autoSyncLocalDeckIfNeeded(){const{currentRoom:e,playerId:s,localDeckImport:a}=this.state.online;if(!e||!s||this.state.sharedDeck.length===0)return;const r=this.state.sharedDeck.reduce((n,t)=>n+t.count,0);if(!a||a.cardCount!==r){this.state=oe(this.state,{type:"UPDATE_LOCAL_DECK_IMPORT",filename:"本地卡包",cardCount:r,entries:this.state.sharedDeck});try{const n=this.computeComparisonData(),{sendMessage:t}=await ge(async()=>{const{sendMessage:l}=await import("./online-fGHm1H1u.js");return{sendMessage:l}},__vite__mapDeps([0,1]));await t(e.id,s,"__SYSTEM__",`__DECK_DATA__|${r}|${JSON.stringify(n)}`),await t(e.id,s,"__SYSTEM__",`__DECK_IMPORT__|本地卡包|${r}`)}catch(n){console.error("[autoSyncLocalDeck] 同步失败:",n)}}}parseDeckDataMessage(e){const s=e.split("|");if(s.length<3)return null;const a=parseInt(s[1],10);try{const r=JSON.parse(s.slice(2).join("|"));return{cardCount:a,comparisonData:r}}catch{return null}}renderDeckPreview(){const e=this.state.groups;let s=0;const a=e.map(i=>{const n=[...i.cards].sort((l,o)=>{const d=p=>`${p.type==="hero"?"0":p.type==="minion"?"1":"2"}_${p.name}`;return d(l.card).localeCompare(d(o.card))}),t=n.reduce((l,o)=>l+o.count,0);return s+=t,{group:i,sortedCards:n,groupCount:t}});new Set(e.map(i=>i.id));const r=document.createElement("div");r.className="fixed inset-0 z-50 overflow-y-auto",r.style.cssText="background: rgba(0,0,0,0.6); padding: 20px;",r.id="deck-preview-overlay",r.innerHTML=`
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

        ${a.map(({group:i,sortedCards:n,groupCount:t},l)=>`
          <div class="mb-6 p-4 rounded-2xl shadow-xl" style="background: rgba(255,255,255,0.95); border: 3px solid #d4c4a8;">
            <div class="flex items-center gap-3 mb-3">
              <button class="preview-collapse-btn text-lg font-bold transform hover:scale-110 transition-all cursor-pointer select-none"
                data-group-id="${i.id}"
                style="color: #a08060; line-height: 1; font-size: 18px; background: none; border: none; padding: 0 2px;">
                ▼
              </button>
              <span class="text-xl font-bold" style="color: #8b7355; font-family: 'Georgia', serif;">${i.name}</span>
              <hr class="flex-1" style="border-color: #d4c4a8; border-width: 1px; border-style: solid;">
              <span class="text-sm" style="color: #999;">(${t} 张)</span>
            </div>
            <div class="preview-cards-grid flex flex-wrap gap-3" data-group-id="${i.id}" style="justify-content: flex-start; align-items: flex-start;">
              ${n.length===0?'<div class="text-sm italic" style="color: #b0a090;">（空）</div>':""}
              ${n.map(o=>{const d=o.card,p=o.count,c=d.type==="hero";return`
                <div class="card-item-wrapper" style="display: flex; flex-direction: column; width: ${c?"225px":"150px"};">
                  <div class="card-item main-card-item w-full rounded-xl ${c?"aspect-[4/3]":"aspect-[2/3]"} shadow-md"
                    style="${this.getCardBgInline(d)} border: 3px solid #d4c4a8; box-shadow: 0 4px 12px rgba(0,0,0,0.15); position: relative;"
                    title="${d.name}">
                    ${c?"":`<div class="card-cost-badge">${d.cost}</div>`}
                    ${c?"":`<div class="card-count-badge">x${p}</div>`}
                    <div class="absolute left-1 right-1 text-center truncate font-bold"
                      style="top: 4px; color: white; font-size: 14px; z-index: 5; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 1px black;">
                      ${d.name}
                    </div>
                    ${c&&d.skills&&d.skills.length>0?`
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
                    ${!c&&(d.keywords.length>0||this.getCardFullEffectText(d))?`
                      <div class="card-description-wrapper">
                        ${d.keywords.length>0?`
                          <div class="card-keywords-area">
                            ${d.keywords.map(h=>{const f=h.name==="护甲"?h.value??d.armorValue??1:"";return'<span class="card-keyword-tag">'+h.name+f+"</span>"}).join("")}
                          </div>
                        `:""}
                        ${this.getCardFullEffectText(d)?`
                          <div class="card-effect-area">${this.getCardFullEffectText(d)}</div>
                        `:""}
                      </div>
                    `:""}
                    ${!c&&d.type!=="spell"?`<div class="card-attack-badge">${d.attack}</div>`:""}
                    ${!c&&d.type!=="spell"?`<div class="card-health-badge">${d.health}</div>`:""}
                  </div>
                </div>
                `}).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `,document.body.appendChild(r),document.getElementById("close-preview-btn")?.addEventListener("click",()=>{r.remove()}),r.addEventListener("click",i=>{i.target===r&&r.remove()}),r.querySelectorAll(".preview-collapse-btn").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.groupId||"",t=r.querySelector(`.preview-cards-grid[data-group-id="${n}"]`);if(!t)return;const l=t.style.display==="none";t.style.display=l?"":"none",i.textContent=l?"▼":"▶"})}),document.querySelectorAll('.condition-side-check[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("change",n=>{n.stopPropagation();const t=this.heroEditingSkillIndex;if(typeof t!="number"||t<0)return;const l=this.heroSkills[t];if(!l?.effects?.[this.heroEditingSkillEffectIndex])return;const o=l.effects[this.heroEditingSkillEffectIndex],d=i.dataset.side;if(o.conditionSides||(o.conditionSides=["friendly"]),i.checked)o.conditionSides.includes(d)||o.conditionSides.push(d);else if(o.conditionSides.length>1)o.conditionSides=o.conditionSides.filter(c=>c!==d);else{o.conditionSides=["friendly"],i.checked=!0;return}this.render()})}),document.querySelectorAll('.condition-logic-radio[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("change",n=>{n.stopPropagation();const t=this.heroEditingSkillIndex;if(typeof t!="number"||t<0)return;const l=this.heroSkills[t];if(!l?.effects?.[this.heroEditingSkillEffectIndex])return;const o=l.effects[this.heroEditingSkillEffectIndex];o.conditionSideLogic=i.value,this.render()})}),document.querySelectorAll('.condition-op-btn[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("click",n=>{n.stopPropagation();const t=this.heroEditingSkillIndex;if(typeof t!="number"||t<0)return;const l=this.heroSkills[t];if(!l?.effects?.[this.heroEditingSkillEffectIndex])return;const o=l.effects[this.heroEditingSkillEffectIndex],d=i.dataset.op,p=o.conditionOperator||"=",c=p==="<"||p==="<=",h=p===">"||p===">=",f=p==="="||p==="<="||p===">=";let u=c,b=h,m=f;d==="<"?(b=!1,u=!c):d===">"?(u=!1,b=!h):d==="="&&(m=!f),u&&m?o.conditionOperator="<=":b&&m?o.conditionOperator=">=":u?o.conditionOperator="<":b?o.conditionOperator=">":o.conditionOperator="=",this.render()})}),document.querySelectorAll('.condition-value-input[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("input",n=>{n.stopPropagation();const t=this.heroEditingSkillIndex;if(typeof t!="number"||t<0)return;const l=this.heroSkills[t];if(!l?.effects?.[this.heroEditingSkillEffectIndex])return;const o=l.effects[this.heroEditingSkillEffectIndex];o.conditionValue=Math.max(0,parseInt(n.target.value)||0)})}),document.querySelectorAll('.condition-minion-name-input[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("input",n=>{n.stopPropagation();const t=this.heroEditingSkillIndex;if(typeof t!="number"||t<0)return;const l=this.heroSkills[t];if(!l?.effects?.[this.heroEditingSkillEffectIndex])return;const o=l.effects[this.heroEditingSkillEffectIndex];o.conditionMinionName=n.target.value})}),document.querySelectorAll('.condition-target-attr-check[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("change",n=>{n.stopPropagation();const t=this.heroEditingSkillIndex;if(typeof t!="number"||t<0)return;const l=this.heroSkills[t];if(!l?.effects?.[this.heroEditingSkillEffectIndex])return;const o=l.effects[this.heroEditingSkillEffectIndex],d=i.dataset.attr;o.conditionTargetAttrs||(o.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const p=o.conditionTargetAttrs;p[d].enabled=n.target.checked,this.render()})}),document.querySelectorAll('.condition-target-op-btn[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("click",n=>{n.stopPropagation();const t=this.heroEditingSkillIndex;if(typeof t!="number"||t<0)return;const l=this.heroSkills[t];if(!l?.effects?.[this.heroEditingSkillEffectIndex])return;const o=l.effects[this.heroEditingSkillEffectIndex],d=i.dataset.attr,p=i.dataset.op;o.conditionTargetAttrs||(o.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const c=o.conditionTargetAttrs,h=c[d].operator||"=",f=h==="<"||h==="<=",u=h===">"||h===">=",b=h==="="||h==="<="||h===">=";let m=f,y=u,x=b;p==="<"?(y=!1,m=!f):p===">"?(m=!1,y=!u):p==="="&&(x=!b),m&&x?c[d].operator="<=":y&&x?c[d].operator=">=":m?c[d].operator="<":y?c[d].operator=">":c[d].operator="=",this.render()})}),document.querySelectorAll('.condition-target-attr-input[data-editor="hero-skill"]').forEach(i=>{i.addEventListener("input",n=>{n.stopPropagation();const t=this.heroEditingSkillIndex;if(typeof t!="number"||t<0)return;const l=this.heroSkills[t];if(!l?.effects?.[this.heroEditingSkillEffectIndex])return;const o=l.effects[this.heroEditingSkillEffectIndex],d=i.dataset.attr;o.conditionTargetAttrs||(o.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const p=o.conditionTargetAttrs;p[d].value=Math.max(0,parseInt(n.target.value)||0),this.render()})})}compareDecks(e,s,a,r){const i=new Set([...Object.keys(e),...Object.keys(s)]),n=[];for(const t of i){const l=e[t],o=s[t];if(!l)n.push(`${t} ${a}❌️ ${r}✔️`);else if(!o)n.push(`${t} ${a}✔️ ${r}❌️`);else if(l.count!==o.count)n.push(`${t} ${a}：${l.count}张 ${r}：${o.count}张❌️`);else{const d=JSON.stringify(l.groups),p=JSON.stringify(o.groups);if(d!==p){const c=new Set([...Object.keys(l.groups),...Object.keys(o.groups)]),h=[];for(const f of c){const u=l.groups[f]||0,b=o.groups[f]||0;u!==b&&h.push(`${f}:${a}${u}张/${r}${b}张`)}n.push(`${t} ${a}：${l.count}张 ${r}：${o.count}张 (卡组分布不一致:${h.join(";")})❌️`)}}}return n}render(){this.playPendingSounds();const e=this.state.phase;if(e!==this.lastPhase&&e==="cardManager"&&(this.lastDeckVersion=0,this.sortedCardList=[],(this.lastPhase==="menu"||this.lastPhase===""||this.lastPhase==="setup")&&(this.collapsedGroups=new Set(this.state.groups.map(o=>o.id)))),this.lastPhase==="cardManager"&&e!=="cardManager"){const o=this.app.querySelector(".card-manager-scroll");this.savedCardManagerScrollY=o?o.scrollTop:0}const s=["room","mulligan","onlineBattle","onlineGameOver"],a=s.includes(this.lastPhase),r=s.includes(e);if(a&&!r&&this.unsubscribeFromRoom(),this.lastPhase,this.lastPhase=e,["menu","playing","mulligan","robotBattle","onlineBattle"].includes(this.state.phase)?(window.scrollTo(0,0),document.body.style.setProperty("overflow","hidden","important")):document.body.style.overflow="",this.switchBGMForScene(),this.updateAtmosphereIntensity(this.state.phase),this.state.phase==="menu")this.renderMenu();else if(this.state.phase==="setup")this.renderSetup();else if(this.state.phase==="robotSetup")this.renderSetup();else if(this.state.phase==="playing")this.renderGame(),this.state.newlyDrawnCardIds.length>0&&setTimeout(()=>this.playDrawCardAnimation(300),100),this.processPendingVisualEffects(),this.processPendingSpeechEvents();else if(this.state.phase==="mulligan"){const o=this.state.online?.playerId&&this.state.online?.firstPlayerId;if(console.log("[render] mulligan phase",{isOnline:o,playerId:this.state.online?.playerId,firstPlayerId:this.state.online?.firstPlayerId,currentPlayerId:this.state.currentPlayerId}),o){this.renderOnlineBattle();const{playerId:d,firstPlayerId:p}=this.state.online,c=d===p;c&&this.state.mulliganDone<1||!c&&this.state.mulliganDone<2?this.renderMulliganOverlay():this.app.innerHTML+='<div id="mulligan-waiting" class="absolute inset-0 flex items-center justify-center bg-black/70 z-50"><div class="text-white text-2xl font-bold bg-gray-900/80 px-8 py-6 rounded-xl shadow-xl">等待对手换牌...</div></div>',this.processPendingVisualEffects(),this.processPendingSpeechEvents()}else this.renderGame(),this.renderMulliganOverlay(),this.processPendingVisualEffects(),this.processPendingSpeechEvents()}else if(this.state.phase==="gameOver")this.renderGame(),this.renderGameOver();else if(this.state.phase==="robotBattle"){if(this.renderGame(),this.state.currentPlayerId===2&&!this.robotTurnExecuting?setTimeout(()=>this.executeRobotTurn(),1500):this.state.currentPlayerId===1&&this.state.newlyDrawnCardIds.length>0&&setTimeout(()=>this.playDrawCardAnimation(300),100),this.processPendingVisualEffects(),this.processPendingSpeechEvents(),this.state.currentPlayerId===1){this.robotCheckPlayerTurnReaction();const o=this.state.players[0],d=`${this.state.turnNumber}|${o.hand.length}|${o.board.length}|${o.energy}`;d!==this.speechLastActionSignature?(this.speechLastActionSignature=d,this.lastPlayerActionTimestamp=Date.now(),this.playerIdleTaunted=!1):!this.playerIdleTaunted&&Date.now()-this.lastPlayerActionTimestamp>1e4&&(this.robotSpeak("taunt",1),this.playerIdleTaunted=!0)}}else this.state.phase==="robotGameOver"?(this.renderGame(),this.renderRobotGameOver()):this.state.phase==="cardCreator"?this.renderCardCreator():this.state.phase==="heroEditor"?this.renderHeroEditor():this.state.phase==="cardManager"?this.renderCardManager():this.state.phase==="lobby"?this.renderLobby():this.state.phase==="room"?this.renderRoom():this.state.phase==="onlineBattle"?(console.log("[render] 路由到 renderOnlineBattle, isWaitingForGameState=",this.state.online.isWaitingForGameState),this.state.online.isWaitingForGameState?this.renderWaitingForGameState():this.renderOnlineBattle(),!this.state.online.isWaitingForGameState&&this.state.newlyDrawnCardIds.length>0&&setTimeout(()=>this.playDrawCardAnimation(300),100),this.processPendingVisualEffects(),this.processPendingSpeechEvents()):this.state.phase==="onlineGameOver"&&(this.renderOnlineBattle(),this.renderOnlineGameOver());const n=this.state.phase==="menu"?`menu|${this.menuSubScreen}`:this.state.phase,l={mulligan:["playing","onlineBattle","robotBattle"],robotSetup:["robotBattle"],playing:["gameOver"],onlineBattle:["onlineGameOver"],robotBattle:["robotGameOver"]}[this._lastAnimatedRenderKey]?.includes(n);if(n!==this._lastAnimatedRenderKey){if(this._lastAnimatedRenderKey=n,this._suppressFirstRender)this._suppressFirstRender=!1;else if(!l){const o=Array.from(this.app.children);if(o.length>0){this.app.classList.add("page-enter-animating"),o.forEach(c=>c.classList.remove("page-enter")),this.app.firstElementChild?.offsetWidth,o.forEach(c=>c.classList.add("page-enter"));const d=o[o.length-1],p=()=>{this.app.classList.remove("page-enter-animating"),d.removeEventListener("animationend",p)};d.addEventListener("animationend",p)}}}}renderMenu(){if(this.menuSubScreen==="modeSelect"){this.renderModeSelect();return}if(this.menuSubScreen==="onlineLogin"){this.renderOnlineLogin();return}const e=this.savedGameState!==null;this.app.innerHTML=`
      
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
            <div class="flex flex-row gap-4 items-stretch">
              <!-- 左侧：按钮 -->
              <div class="flex flex-col gap-4 justify-start">
                <button id="back-to-menu-btn" class="px-8 py-3 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                  style="background: linear-gradient(135deg, #d4a574 0%, #c4956a 100%); color: #fff; border: 3px solid #b8956a;">
                  <img src="/logo.png" alt="" style="width:28px;height:28px;vertical-align:middle;border-radius:4px;display:inline-block;image-rendering:pixelated;" />妙卡包
                </button>
                <button id="element-banner-btn" class="px-8 py-3 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                  style="background: linear-gradient(135deg, #2a7a7a 0%, #1a5a5a 100%); color: #e0f0f0; border: 3px solid #3a9a9a;">
                  <img src="/element-banner-logo.png" alt="" style="width:28px;height:28px;vertical-align:middle;border-radius:4px;display:inline-block;image-rendering:pixelated;" />元素战棋
                </button>
              </div>
              <!-- 右侧：三个滑动项 -->
              <div class="flex flex-col gap-3 flex-1">
                <div class="flex flex-col gap-3 px-4 py-3 rounded-lg"
                  style="background: rgba(200, 180, 160, 0.2); border: 2px solid #d4c4a8;">
                  <div class="flex items-center justify-between">
                    <span class="text-lg font-bold" style="color: #5a4a3a;">🔍 UI大小</span>
                    <span class="text-sm font-bold" style="color: #8b7355; min-width: 3em;" id="ui-scale-label">${this.uiScale}%</span>
                  </div>
                  <input type="range" id="ui-scale" min="50" max="200" value="${this.uiScale}"
                    class="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style="accent-color: #8b7355; background: #d4c4a8;">
                </div>
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
    `,document.getElementById("continue-saved-btn")?.addEventListener("click",()=>{this.savedGameState&&(this.state=this.savedGameState,this.savedGameState=null,this.render())}),document.getElementById("start-btn")?.addEventListener("click",()=>{this.menuSubScreen="modeSelect",this.render()}),document.getElementById("card-creator-btn")?.addEventListener("click",()=>{this.state=oe(this.state,{type:"SHOW_CARD_CREATOR"}),this.render()}),document.getElementById("card-manager-btn")?.addEventListener("click",()=>{this.state=oe(this.state,{type:"SHOW_CARD_MANAGER"}),this.render()}),document.getElementById("menu-options-btn")?.addEventListener("click",()=>{this.showMenuOptions=!0,this.render()}),document.getElementById("back-to-menu-btn")?.addEventListener("click",()=>{this.showMenuOptions=!1,this.render()}),document.getElementById("element-banner-btn")?.addEventListener("click",()=>{this.showMenuOptions=!1,this.renderElementBanner()}),document.getElementById("sound-volume")?.addEventListener("input",s=>{this.soundVolume=parseInt(s.target.value),localStorage.setItem("soundVolume",String(this.soundVolume));const a=document.getElementById("sound-volume-label");a&&(a.textContent=this.soundVolume+"%")}),document.getElementById("music-volume")?.addEventListener("input",s=>{const a=this.musicVolume;this.musicVolume=parseInt(s.target.value),localStorage.setItem("musicVolume",String(this.musicVolume));const r=document.getElementById("music-volume-label");r&&(r.textContent=this.musicVolume+"%");const i=document.getElementById("now-playing-display");i&&(i.style.display=this.musicVolume===0?"none":""),this.musicVolume>0?a===0?this.startBackgroundMusic():this.bgMusic&&(this.bgMusic.volume=this.musicVolume/100):this.stopBackgroundMusic()}),document.getElementById("ui-scale")?.addEventListener("input",s=>{this.uiScale=parseInt(s.target.value),localStorage.setItem("uiScale",String(this.uiScale));const a=document.getElementById("ui-scale-label");a&&(a.textContent=this.uiScale+"%"),this.applyUiScale()}),document.getElementById("menu-options-overlay")?.addEventListener("click",s=>{s.target.id==="menu-options-overlay"&&(this.showMenuOptions=!1,this.render())})}renderModeSelect(){this.app.innerHTML=`
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
    `,(async()=>{try{const{isSupabaseConfigured:e}=await ge(async()=>{const{isSupabaseConfigured:a}=await import("./supabase-client-CcfVv7ux.js");return{isSupabaseConfigured:a}},[]),s=document.getElementById("online-play-btn");s&&!e()&&(s.textContent="📲 局域网联机 (beta)")}catch{}})(),document.getElementById("local-play-btn")?.addEventListener("click",()=>{this.state=oe(this.state,{type:"SHOW_SETUP"}),this.render()}),document.getElementById("robot-play-btn")?.addEventListener("click",()=>{this.state=oe(this.state,{type:"SHOW_ROBOT_SETUP"}),this.render()}),document.getElementById("online-play-btn")?.addEventListener("click",async()=>{this.menuSubScreen="onlineLogin",this.onlineLoginError=null;try{const{isSupabaseConfigured:e}=await ge(async()=>{const{isSupabaseConfigured:s}=await import("./supabase-client-CcfVv7ux.js");return{isSupabaseConfigured:s}},[]);e()||localStorage.setItem("force_transport","local")}catch{localStorage.setItem("force_transport","local")}this.render()}),document.getElementById("back-btn")?.addEventListener("click",()=>{this.menuSubScreen="",this.render()})}renderOnlineLogin(){if(this.onlineLoginError){this.app.innerHTML=`
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
    `,document.getElementById("back-to-menu-btn")?.addEventListener("click",()=>{this.menuSubScreen="",this.render()}),document.getElementById("enter-lobby-btn")?.addEventListener("click",async()=>{const s=document.getElementById("online-nickname").value.trim();if(!s){alert("请输入昵称");return}localStorage.setItem("miaoKaBao_nickname",s);const a=`player_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;this.state=oe(this.state,{type:"SHOW_LOBBY",playerId:a,playerNickname:s}),this.render()})}renderLobby(){const{playerId:e,playerNickname:s}=this.state.online;this.app.innerHTML=`
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
    `,this.loadRooms(),document.getElementById("leave-lobby-btn")?.addEventListener("click",()=>{this.state=oe(this.state,{type:"BACK_TO_MENU"}),this.render()}),document.getElementById("refresh-rooms-btn")?.addEventListener("click",()=>{this.loadRooms()}),document.getElementById("create-room-btn")?.addEventListener("click",async a=>{const r=a.target;if(r.disabled)return;const n=document.getElementById("room-name").value.trim()||s,t=document.getElementById("room-password").value.trim()||null;r.disabled=!0,r.textContent="创建中...";try{const{createRoom:l}=await ge(async()=>{const{createRoom:d}=await import("./online-fGHm1H1u.js");return{createRoom:d}},__vite__mapDeps([0,1])),o=await l(n,t,e,s);o.success&&o.room?(this.state=oe(this.state,{type:"SHOW_ROOM",room:o.room,playerId:e,playerNickname:s}),this.render()):(alert(`创建房间失败: ${o.error||"未知错误"}，请重试`),r.disabled=!1,r.textContent="创建房间")}catch(l){console.error("创建房间失败:",l),alert("创建房间失败，请检查网络连接"),r.disabled=!1,r.textContent="创建房间"}})}async loadRooms(){try{const{getRooms:e}=await ge(async()=>{const{getRooms:r}=await import("./online-fGHm1H1u.js");return{getRooms:r}},__vite__mapDeps([0,1])),s=await e(),a=document.getElementById("rooms-list");if(!a)return;if(s.length===0){a.innerHTML=`
          <div class="text-center py-8" style="color: #a08060;">
            暂无可加入的房间，创建一个吧！
          </div>
        `;return}a.innerHTML=s.map(r=>`
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
    `,document.body.appendChild(s),document.getElementById("cancel-password-btn")?.addEventListener("click",()=>{s.remove()}),document.getElementById("confirm-password-btn")?.addEventListener("click",async()=>{const a=document.getElementById("room-password-input").value;s.remove(),await this.joinRoom(e,a)})}async joinRoom(e,s){const{playerId:a,playerNickname:r}=this.state.online;try{const{joinRoom:i}=await ge(async()=>{const{joinRoom:t}=await import("./online-fGHm1H1u.js");return{joinRoom:t}},__vite__mapDeps([0,1])),n=await i(e,a,r,s);n.success&&n.room?(this.state=oe(this.state,{type:"SHOW_ROOM",room:n.room,playerId:a,playerNickname:r}),this.render()):alert(n.error||"加入房间失败")}catch(i){console.error("加入房间失败:",i),alert("加入房间失败，请检查网络连接")}}renderRoom(){const{playerId:e,playerNickname:s,currentRoom:a,messages:r,playerReady:i}=this.state.online;if(!a){this.state=oe(this.state,{type:"SHOW_LOBBY",playerId:e,playerNickname:s}),this.render();return}const n=a.host_id===e,t=i.find(M=>M.player_id===e),l=i.filter(M=>M.is_ready).length,o=l>=2,d=n&&o,p=this.state.online.localDeckImport;console.log("[DEBUG] renderRoom myImport:",p,"phase:",this.state.phase);const h=Object.values(this.state.online.remoteDeckImports)[0],f=!!p&&!!h&&p.filename===h.filename&&p.cardCount===h.cardCount;t?.is_ready;const u=i[0],b=i[1];this.app.innerHTML=`
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
                <h2 class="text-2xl font-bold" style="color: #8b7355; font-family: 'Georgia', serif;">🏠 ${a.room_name}</h2>
                <div class="text-sm" style="color: #8b7355;">房间ID: ${a.id}</div>
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
                  <div class="p-4 rounded-xl flex items-center gap-3 ${u?"":"opacity-50"}"
                    style="background: ${u?.player_id===e?"rgba(111, 168, 220, 0.2)":"rgba(212, 196, 168, 0.2)"}; border: 3px solid ${u?.player_id===e?"#6fa8dc":"#d4c4a8"};">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl hero-select-trigger"
                      data-player-id="${u?.player_id||""}"
                      style="background: linear-gradient(135deg, #d4a574 0%, #c4956a 100%); color: #fff; border: 2px solid #b8956a; ${this.state.online.heroSelections[u?.player_id||""]?"background: none; border: 2px solid #b8956a; overflow: hidden; padding: 0;":""}">
                      ${this.state.online.heroSelections[u?.player_id||""]?`<img src="${this.state.online.heroSelections[u?.player_id||""]?.imageData||""}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`:u?u.player_nickname.charAt(0):"?"}
                    </div>
                    <div class="flex-1">
                      <div class="font-bold text-lg" style="color: #5a4a3a;">${u?.player_nickname||"等待中..."}</div>
                      <div class="text-sm" style="color: ${u?.is_ready?"#7cb87c":"#d4a574"};">${u?.is_ready?"✓ 已准备":"⏳ 等候中"}</div>
                    </div>
                    ${u?.player_id===a.host_id?'<span class="text-lg">👑</span>':""}
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
                    ${i.map(M=>{const R=M.player_id===e,$=R?p:this.state.online.remoteDeckImports[M.player_id],L=R?p?p.cardCount:this.state.sharedDeck.reduce((T,H)=>T+H.count,0):$?$.cardCount:0;return`<div class="flex justify-between">
                        <span style="color: #5a4a3a;">${M.player_nickname}:</span>
                        <span style="color: ${L>0?"#5a9a5a":"#a08060"};">${L>0?L+" 张卡":"未导入"}</span>
                      </div>`}).join("")}
                  </div>
                  <div class="flex gap-2 mt-2">
                    <button id="preview-deck-btn" class="flex-1 px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                      style="background: linear-gradient(135deg, #c9a87c 0%, #b89570 100%); color: #fff; border: 2px solid #a08060; font-size: 14px;">
                      📋 预览
                    </button>
                    <button id="ready-toggle-btn" class="flex-1 px-3 py-2 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                      style="background: ${t?.is_ready?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)"}; color: #fff; border: 2px solid ${t?.is_ready?"#a04040":"#4a8a4a"}; font-size: 14px; cursor: pointer;">
                      ${t?.is_ready?"❌️ 取消":"✔ 准备"}
                    </button>
                  </div>
                </div>

                <!-- 操作按钮 -->
                <div class="space-y-3">
                  <!-- 已准备人数提示 -->
                  <div class="text-center text-sm" style="color: ${l>=2?"#c05050":"#8b7355"};">
                    📊 已准备：${l}/2 人 ${l>=2?"(已满)":""}
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
                  ${r.filter(M=>M.sender_nickname!=="__SYSTEM__").length===0?`
                    <div class="text-center py-8" style="color: #a08060;">
                      暂无消息，发送第一条消息吧！
                    </div>
                  `:r.filter(M=>M.sender_nickname!=="__SYSTEM__").map(M=>`
                    <div class="p-2 rounded-lg ${M.sender_id===e?"ml-8":"mr-8"}"
                      style="background: ${M.sender_id===e?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"};">
                      <div class="text-xs font-bold mb-1" style="color: ${M.sender_id===e?"#4a90d9":"#8b7355"};">
                        ${M.sender_nickname}
                      </div>
                      <div style="color: #5a4a3a;">${M.message}</div>
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

    `,this.loadRoomData();const m=document.getElementById("leave-room-btn");m&&(m.onclick=async()=>{try{await this.unsubscribeFromRoom();const{leaveRoom:M}=await ge(async()=>{const{leaveRoom:R}=await import("./online-fGHm1H1u.js");return{leaveRoom:R}},__vite__mapDeps([0,1]));await M(a.id,e),this.state=oe(this.state,{type:"LEAVE_ROOM"}),this.render()}catch(M){console.error("离开房间失败:",M),this.state=oe(this.state,{type:"LEAVE_ROOM"}),this.render()}}),document.querySelectorAll(".hero-select-trigger").forEach(M=>{M.onclick=R=>{console.debug("[HeroSelect] 头像被点击, data-player-id:",M.getAttribute("data-player-id"));const $=M.getAttribute("data-player-id");if(!$){console.debug("[HeroSelect] 无 playerId，跳过");return}const L=document.getElementById("online-hero-modal");if(!L){console.debug("[HeroSelect] 未找到 online-hero-modal 弹窗");return}console.debug("[HeroSelect] 弹窗元素存在，继续",L);let T=[];try{const Y=(window.__gameState||this.state).groups||[{id:Le,name:"公用卡组",cards:[]}];for(const ie of Y)for(const U of ie.cards)U.card.type==="hero"&&T.push(U.card)}catch(ee){console.error("获取英雄列表失败:",ee);return}if(T.length===0)return;const H=this.state.online?.currentRoom;if(H&&this.state.online?.heroSelections){const ee=H.host_id===$?H.guest_id:H.host_id;if(ee){const Y=this.state.online.heroSelections[ee];Y&&(T=T.filter(ie=>ie.id!==Y.id))}}if(T.length===0)return;const Z=document.getElementById("online-hero-select-list"),j=document.getElementById("online-hero-empty");Z&&(Z.innerHTML="",j.classList.add("hidden"),Z.innerHTML=T.map(ee=>`
          <div class="cursor-pointer rounded-xl p-2 transition-all transform hover:scale-105 online-hero-option" data-hero-card='${JSON.stringify(ee).replace(/'/g,"&#39;")}' style="background: #f5f0e8; border: 2px solid transparent;">
            <div class="w-full rounded-lg overflow-hidden mb-1" style="aspect-ratio: 4/3;">
              ${ee.imageData?`<img src="${ee.imageData}" class="w-full h-full object-cover">`:'<div class="w-full h-full flex items-center justify-center" style="background: #e8dfd0;"><span style="font-size: 2rem;">🦸</span></div>'}
            </div>
            <div class="text-xs font-bold text-center truncate" style="color: #5a4a3a;">${ee.name}</div>
          </div>
        `).join(""),L.classList.remove("hidden"),Z.querySelectorAll(".online-hero-option").forEach(ee=>{ee.addEventListener("click",()=>{try{const Y=JSON.parse(ee.getAttribute("data-hero-card")||"{}");this.state=oe(this.state,{type:"SET_ONLINE_HERO",playerId:$,heroCard:Y}),this.render(),this.state.online?.currentRoom&&ge(async()=>{const{sendMessage:ie}=await import("./online-fGHm1H1u.js");return{sendMessage:ie}},__vite__mapDeps([0,1])).then(({sendMessage:ie})=>{ie(this.state.online.currentRoom.id,this.state.online.playerId,"__SYSTEM__",`__HERO_SELECT__|${JSON.stringify({playerId:$,heroCard:Y})}`)})}catch(Y){console.error("选择英雄失败:",Y)}L.classList.add("hidden")})}))}});const y=document.getElementById("close-online-hero-select");y&&(y.onclick=()=>{const M=document.getElementById("online-hero-modal");M&&M.classList.add("hidden")});const x=document.getElementById("online-hero-modal");x&&x.addEventListener("click",M=>{M.target===x&&x.classList.add("hidden")});const v=document.getElementById("start-game-btn");v&&(v.onclick=async()=>{if(!d)return;const M=this.state.online.remoteDeckImports,R=Object.keys(M).find(j=>j!==e),$=R?M[R]:null,L=this.computeComparisonData();if(!$||!$.comparisonData){alert("尚未收到对方的卡包信息，请稍后重试");return}const T=s,H=$.playerNickname,Z=this.compareDecks(L,$.comparisonData,T,H);if(Z.length>0){try{const{sendMessage:j}=await ge(async()=>{const{sendMessage:ee}=await import("./online-fGHm1H1u.js");return{sendMessage:ee}},__vite__mapDeps([0,1]));await j(a.id,e,"__SYSTEM__","⚠️ 卡包信息不一致！");for(const ee of Z)await j(a.id,e,"__SYSTEM__",ee);typeof this.loadMessages=="function"&&this.loadMessages()}catch(j){console.error("发送卡包差异消息失败:",j)}return}try{const{startGame:j}=await ge(async()=>{const{startGame:Y}=await import("./online-fGHm1H1u.js");return{startGame:Y}},__vite__mapDeps([0,1]));await j(a.id)?await this.enterOnlineBattle():alert("开始游戏失败")}catch(j){console.error("开始游戏失败:",j),alert("开始游戏失败")}});const C=document.getElementById("preview-deck-btn");C&&(C.onclick=()=>{this.renderDeckPreview()});const g=document.getElementById("ready-toggle-btn");g&&(g.onclick=async()=>{try{const{setPlayerReady:M,getPlayerReady:R}=await ge(async()=>{const{setPlayerReady:T,getPlayerReady:H}=await import("./online-fGHm1H1u.js");return{setPlayerReady:T,getPlayerReady:H}},__vite__mapDeps([0,1])),$=!t?.is_ready,L=await M(a.id,e,s,$);if(L.success){const T=await R(a.id);this.state=oe(this.state,{type:"UPDATE_PLAYER_READY",playerReady:T}),this.render()}else alert(L.error||"操作失败")}catch(M){console.error("准备状态切换失败:",M)}});const k=async()=>{const M=document.getElementById("message-input"),R=M.value.trim();if(R)try{const{sendMessage:$}=await ge(async()=>{const{sendMessage:L}=await import("./online-fGHm1H1u.js");return{sendMessage:L}},__vite__mapDeps([0,1]));await $(a.id,e,s,R),M.value="",await this.loadMessages()}catch($){console.error("发送消息失败:",$)}},w=document.getElementById("send-message-btn");w&&(w.onclick=k);const P=document.getElementById("message-input");P&&(P.onkeypress=M=>{M.key==="Enter"&&k()}),setTimeout(()=>{this.autoSyncLocalDeckIfNeeded().catch(M=>console.error("[renderRoom] autoSync失败:",M))},500)}renderOnlineBattle(){const{currentPlayerId:e,turnNumber:s,players:a,online:r,sharedDeck:i}=this.state,{isSpectator:n,spectatorViewPlayerId:t,battlePlayers:l,playerId:o,firstPlayerId:d}=r;typeof window<"u"&&(this.isPortraitMode=window.innerWidth/window.innerHeight<3/4),console.log("【renderOnlineBattle】关键状态:",{playerId:o,firstPlayerId:d,currentPlayerId:e,turnNumber:s,battlePlayers:l.map(w=>({id:w.playerId,name:w.playerNickname})),isSpectator:n,phase:this.state.phase,hasSubscription:!!this.roomSubscription});let p;n?p=t||d:p=o;const c=p===d,h=c?0:1;console.log("【renderOnlineBattle】视角计算:",{viewPlayerId:p,firstPlayerId:d,isFirstPlayer:c,viewPlayerIndex:h}),this.onlineViewPlayerIndex=h;const f=a[h],u=a[1-h],b=c?l.find(w=>w.playerId!==d)?.playerId||"":d,m=n?e===1?d===t:d!==t:e===1?o===d:o!==d,y=!n&&m;console.log("renderOnlineBattle: playerId=",o,"firstPlayerId=",d,"currentPlayerId=",e,"isMyTurn=",m,"canAct=",y);const x=u.board.some(w=>w.isDefending||w.keywords.some(P=>P.name==="嘲讽")),g=f.board.filter(w=>w.canAttack&&!w.hasAttacked&&w.attack>0).length>0&&!x&&y,k=this.isPortraitMode?"compact-mode":"";this.app.innerHTML=`
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
      
      <div class="game-container ${k}" id="game-container" style="min-height: 100vh; background: transparent; display: flex; flex-direction: column;">
        
        <!-- 上方玩家区域（对手） -->
        <div class="top-player-area p-1" style="flex-shrink: 0;">
          <div class="relative mb-1" style="min-height: 110px;">
            ${this.renderHeroSkills(u,!0)}
            <!-- 4:3纸材质英雄模块（居中） -->
            <div class="mx-auto relative ${n?"cursor-pointer hover:scale-105 transition-all":""}" data-player-hero="${u.id}"
              style="width: 140px; height: 105px; ${this.renderHeroBackground(u.heroCard)} border: 4px solid #d4c4a8; border-radius: 8px;${u.elementStatus?"padding: 7px; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[u.elementStatus.type]||"transparent")+";":""}"
              ${n?`data-switch-view="${b}"`:""}>
              ${u.heroCard?.imageData?"":'<div class="w-full h-full flex items-center justify-center"><span class="font-bold text-lg" style="color: #5a4a3a;">英雄</span></div>'}
              ${u.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:8px;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
              <!-- 血量（底部居中，一半出框） -->
              <div class="absolute flex items-center justify-center font-bold text-white text-sm shadow-md"
                style="bottom: -10px; left: 50%; transform: translateX(-50%); width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #c0392b 0%, #a93226 100%); border: 3px solid #8b0000; z-index: 10;"
                data-player-hp="${u.id}">
                ${u.health}
              </div>
              ${u.heroMarkCount&&u.heroMarkCount>0?`
                <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md"
                  style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                  ${u.heroMarkCount}
                </div>
              `:""}
            </div>
            <!-- 昵称和能量（绝对定位在英雄模块右侧） -->
            <div class="absolute flex flex-col items-start" style="left: calc(50% + 78px); top: 15px;">
              <div class="font-bold text-lg" style="color: #fff; text-shadow: 0 0 8px rgba(0,0,0,0.6), 0 0 16px rgba(0,0,0,0.3);">${u.name}</div>
              <div class="flex items-center gap-1">
                ${this.renderHeroName(u.heroCard)}
                <span class="text-xs mt-0.5" style="color: rgba(255,255,255,0.85); text-shadow: 0 0 6px rgba(0,0,0,0.6);">手牌数：${u.hand.length}</span>
              </div>
              ${this.renderEnergy(u.maxEnergy,u.energy,u.bonusEnergy||0)}
              ${n?'<span class="text-xs text-blue-500">👁️ 点击切换视角</span>':""}
            </div>
          </div>
          
          <!-- 对手战场 -->
          <div class="top-board flex justify-center gap-2 min-h-20 p-2 rounded-xl mx-4" id="opponent-play-area" style="background: rgba(255, 255, 255, 0.6); border: 3px solid #d4c4a8;">
            ${u.board.map(w=>{const P=u.board.some(H=>H.isDefending||H.keywords.some(Z=>Z.name==="嘲讽")),M=w.isDefending||w.keywords.some(H=>H.name==="嘲讽"),R=P&&!M?"non-taunt-target":"",$=this.selectedAttackingMinion!==null&&y,L=(this.selectingTargetForCard!==null||this.selectingTargetForSkill!==null)&&y,T=this.getEffectIcons(w.effects);return w.elementStatus&&console.log("[元素边框-对手战场] 随从:",w.name,"元素类型:",w.elementStatus.type,"style中将包含box-shadow"),`
                <div class="minion-card group relative rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all ${w.isDefending?"is-defending":""} ${w.keywords.some(H=>H.name==="嘲讽")?"taunt-minion":""} ${R} ${M&&$?"taunt-target":""} ${$||L?"attack-target":""}${w.elementStatus?" element-status-"+w.elementStatus.type:""}"
                  style="${this.getCardBgInline(w,"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)")} border: 4px solid ${L?"#4a90d9":M?"#6b7db3":"#c4b49c"};${w.elementStatus?"padding: 7px; background-clip: padding-box; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[w.elementStatus.type]||"transparent")+";":""}"
                  data-minion-id="${w.id}" data-player-id="${u.id}" data-has-effects="${w.effects&&w.effects.length>0?"true":"false"}">
                  <div class="h-full flex flex-col items-center justify-end py-1 px-2">
                    <div class="minion-name-overlay absolute inset-0 flex items-center justify-center px-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <span class="text-xs font-bold text-center leading-tight" style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black;">${w.name}</span>
                    </div>
                    ${w.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:inherit;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
                    <div class="flex items-center justify-center gap-1 flex-wrap max-w-full pt-1">
                      ${this.renderKeywords(w.keywords,w.armorValue,w.divineShieldActive,w.playedThisTurn,w.preparation)}
                      ${T?`<div class="effect-icons text-xs">${T}</div>`:""}
                    </div>
                    <div class="flex justify-between w-full pb-1">
                      <div class="stat-circle stat-attack">${w.attack}</div>
                      <div class="stat-circle stat-health">${w.health}</div>
                    </div>
                  </div>
                  ${w.keywords.length>0?this.renderKeywordsTooltip(w.keywords,w.divineShieldActive):""}
                </div>
              `}).join("")}
          </div>
        </div>
        
                <!-- 中央分隔区域（无背景色，只保留分割线和信息） -->
        <div class="flex items-center justify-center" style="background: transparent !important; padding: 2px 0;">
          <!-- 弃牌堆按钮（左） -->
          <div id="discard-pile-btn" class="discard-pile-btn group relative cursor-pointer flex-shrink-0 mx-10 rounded-sm"
            style="width: 29px; height: 43px; background: url('/discard-pile.png') center/cover no-repeat;"
            data-player-id="${u.id}">
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
            data-player-id="${f.id}" data-deck-count="${f.deck.length}">
            <div class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-xs font-bold pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50"
              style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; background: rgba(0,0,0,0.7);">
              抽牌堆：${f.deck.length}张牌
            </div>
          </div>
        </div>
        
        <!-- 下方玩家区域（自己） -->
        <div class="bottom-player-area pt-0 pb-0 px-2">
          <!-- 我的战场 -->
          <div class="bottom-board flex justify-center gap-2 min-h-20 p-2 rounded-xl mx-4" id="play-area" style="background: rgba(255, 255, 255, 0.6); border: 3px solid ${this.selectedHandCard?"#7cb87c":this.selectingTargetForCard?"#4a90d9":"#d4c4a8"};">
            ${f.board.map(w=>{const P=w.canAttack&&!w.hasAttacked&&y&&w.attack>0,M=this.selectedAttackingMinion?.id===w.id,R=(this.selectingTargetForCard!==null||this.selectingTargetForSkill!==null)&&y,$=this.getEffectIcons(w.effects);return w.elementStatus&&console.log("[元素边框-己方战场(顶部)] 随从:",w.name,"元素类型:",w.elementStatus.type,"style中将包含box-shadow"),`
                <div class="minion-card group relative rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all ${P?"can-attack":""} ${M?"selected-attacker":""} ${R?"target-select-mode":""}${w.elementStatus?" element-status-"+w.elementStatus.type:""}"
                  style="${this.getCardBgInline(w,"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)")} border: 4px solid ${M?"#ff6b6b":R?"#4a90d9":w.keywords.some(L=>L.name==="不动")?"#808080":P?"#7cb87c":w.playedThisTurn?"#4a90d9":"#c4b49c"};${w.elementStatus?"padding: 7px; background-clip: padding-box; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[w.elementStatus.type]||"transparent")+";":""}"
                  data-minion-id="${w.id}" data-player-id="${f.id}" data-has-effects="${w.effects&&w.effects.length>0?"true":"false"}"
                  data-base-border="${w.keywords.some(L=>L.name==="不动")?"#808080":P?"#7cb87c":w.playedThisTurn?"#4a90d9":"#c4b49c"}">
                  <div class="h-full flex flex-col items-center justify-end py-1 px-2">
                    <div class="minion-name-overlay absolute inset-0 flex items-center justify-center px-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <span class="text-xs font-bold text-center leading-tight" style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black;">${w.name}</span>
                    </div>
                    ${w.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:inherit;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
                    <div class="flex items-center justify-center gap-1 flex-wrap max-w-full pt-1">
                      ${this.renderKeywords(w.keywords,w.armorValue,w.divineShieldActive,w.playedThisTurn,w.preparation)}
                      ${$?`<div class="effect-icons text-xs">${$}</div>`:""}
                    </div>
                    <div class="flex justify-between w-full pb-1">
                      <div class="stat-circle stat-attack">${w.attack}</div>
                      <div class="stat-circle stat-health">${w.health}</div>
                    </div>
                  </div>
                  ${w.keywords.length>0?this.renderKeywordsTooltip(w.keywords,w.divineShieldActive):""}
                </div>
              `}).join("")}
          </div>
          
          <!-- 我的信息（居中） -->
          <div class="relative mb-1" style="min-height: 110px;">
            ${this.renderHeroSkills(f,!1)}
            <!-- 4:3纸材质英雄模块（居中） -->
            <div class="mx-auto relative" data-own-hero="true" data-player-hero="${f.id}"
              style="width: 140px; height: 105px; ${this.renderHeroBackground(f.heroCard)} border: 4px solid #d4c4a8; border-radius: 8px;${f.elementStatus?"padding: 7px; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[f.elementStatus.type]||"transparent")+";":""}">
              ${f.heroCard?.imageData?"":'<div class="w-full h-full flex items-center justify-center"><span class="font-bold text-lg" style="color: #5a4a3a;">英雄</span></div>'}
              ${f.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:8px;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
              <!-- 血量（底部居中，一半出框） -->
              <div class="absolute flex items-center justify-center font-bold text-white text-sm shadow-md"
                style="bottom: -10px; left: 50%; transform: translateX(-50%); width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #c0a080 0%, #a08060 100%); border: 3px solid #8b7355; z-index: 10;"
                data-player-hp="${f.id}">
                ${f.health}
              </div>
              ${f.heroMarkCount&&f.heroMarkCount>0?`
                <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md"
                  style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                  ${f.heroMarkCount}
                </div>
              `:""}
              ${this.renderDefenseOverlay(f)}
              ${this.renderSpeechMenuHtml()}
            </div>
            <!-- 昵称和能量（绝对定位在英雄模块右侧） -->
            <!-- 昵称和能量（绝对定位在英雄模块右侧） -->
            <div class="absolute flex flex-col items-start" style="left: calc(50% + 78px); top: 15px;">
              <div class="font-bold text-lg" style="color: #fff; text-shadow: 0 0 8px rgba(0,0,0,0.6), 0 0 16px rgba(0,0,0,0.3);">${f.name}</div>
              <div class="flex items-center gap-1">
                ${this.renderHeroName(f.heroCard)}
                <span class="text-xs mt-0.5" style="color: rgba(255,255,255,0.85); text-shadow: 0 0 6px rgba(0,0,0,0.6);">手牌数：${f.hand.length}</span>
              </div>
              ${this.renderEnergy(f.maxEnergy,f.energy,f.bonusEnergy||0)}
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
              `:this.renderHand(f.hand,f.energy,this.isPortraitMode)}
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
                <button id="all-attack-btn" class="action-btn ${this.isPortraitMode?"py-1 text-sm":"py-2 text-lg"} font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all ${g?"attack-available":"attack-disabled"}"
                  style="background: ${g?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"linear-gradient(135deg, #888 0%, #666 100%)"}; color: #fff; border: 3px solid ${g?"#a04040":"#555"};">
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
    `,this.attachOnlineBattleEvents(y,f,u,h)}attachOnlineBattleEvents(e,s,a,r){const{isSpectator:i}=this.state.online;document.getElementById("game-menu-btn")?.addEventListener("click",()=>{this.showGameMenu=!0,this.render()}),document.getElementById("continue-game-btn")?.addEventListener("click",()=>{this.showGameMenu=!1,this.render()});const n=document.getElementById("surrender-btn");if(n){const d=n.cloneNode(!0);n.parentNode?.replaceChild(d,n),d.addEventListener("click",async()=>{this.showGameMenu=!1;const{playerId:p,firstPlayerId:c,battlePlayers:h,currentRoom:f}=this.state.online,u=p,b=h.find(m=>m.playerId!==p)?.playerId||"";if(console.log("[认输] 认输按钮点击"),console.log("[认输] 输家 ID:",u,"赢家 ID:",b),console.log("[认输] battlePlayers:",h.map(m=>({id:m.playerId,name:m.playerNickname}))),console.log("[认输] 当前房间:",f?.id,"订阅状态:",this.roomSubscription?"存在":"不存在"),console.log("[认输] 更新本地状态为 onlineGameOver"),this.state=oe(this.state,{type:"ONLINE_GAME_OVER",winnerId:b,loserId:u}),console.log("[认输] 更新后 phase:",this.state.phase,"winner:",this.state.winner),this.render(),f)try{const{broadcastGameAction:m}=await ge(async()=>{const{broadcastGameAction:y}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:y}},__vite__mapDeps([0,1]));console.log("[认输] 正在广播认输消息到对手..."),await m(f.id,{type:"SURRENDER",loserId:u},this.roomSubscription||void 0),console.log("[认输] 已成功广播认输消息"),await this.broadcastGameState(),console.log("[认输] 已广播游戏结束状态")}catch(m){console.error("[认输] 广播认输消息失败:",m)}else console.error("[认输] 没有当前房间，无法广播")}),console.log("【attachOnlineBattleEvents】已绑定联机模式认输按钮事件")}if(document.getElementById("game-menu-overlay")?.addEventListener("click",d=>{d.target.id==="game-menu-overlay"&&(this.showGameMenu=!1,this.render())}),document.getElementById("discard-pile-btn")?.addEventListener("click",d=>{const p=parseInt(d.currentTarget.getAttribute("data-player-id")||"0");p>0&&(this.showDiscardPileViewer=!0,this.viewingDiscardPilePlayerId=p,this.render())}),document.getElementById("discard-pile-viewer-close")?.addEventListener("click",()=>{this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.render()}),document.getElementById("discard-pile-viewer-overlay")?.addEventListener("click",d=>{d.target.id==="discard-pile-viewer-overlay"&&(this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.render())}),i&&document.querySelectorAll("[data-switch-view]").forEach(d=>{d.addEventListener("click",()=>{const p=d.dataset.switchView;p&&(this.state=oe(this.state,{type:"SET_SPECTATOR_VIEW",playerId:p}),this.render())})}),!e)return;this.attachEventListeners();const t=document.getElementById("end-turn-btn");if(t){const d=t.cloneNode(!0);t.parentNode?.replaceChild(d,t),d.addEventListener("click",()=>{console.log("联机模式结束回合按钮被点击"),this.handleEndTurnOnline()}),console.log("已绑定联机模式结束回合按钮事件")}else console.log("未找到结束回合按钮");const l=document.getElementById("all-attack-btn");l&&l.addEventListener("click",()=>{this.allAttackHeroOnline()});const o=document.getElementById("refresh-room-btn");o&&o.addEventListener("click",async()=>{console.log("刷新房间按钮被点击"),await this.refreshOnlineBattleState()})}async refreshOnlineBattleState(){const{currentRoom:e}=this.state.online;if(e)try{const s=(await ge(async()=>{const{getDb:r}=await import("./online-fGHm1H1u.js");return{getDb:r}},__vite__mapDeps([0,1]))).getDb(),{data:a}=await s.from("game_rooms").select("game_state").eq("id",e.id).single();if(a?.game_state){const r=a.game_state;console.log("刷新获取到游戏状态，回合:",r.turnNumber),this.handleRemoteGameStateUpdate(r)}}catch(s){console.error("刷新房间状态失败:",s)}}async handleEndTurnOnline(e=!1){console.log("handleEndTurnOnline 被调用, 当前phase:",this.state.phase,"currentPlayerId:",this.state.currentPlayerId),this.state=oe(this.state,{type:"END_TURN"});const s=this.state.online?.currentRoom;if(s&&this.state.mulliganDone===1){console.log("[handleEndTurnOnline] 等待后手完成换牌，mulliganDone:",this.state.mulliganDone),this.render(),this.checkOnlineGameOver();return}s?this.state={...this.state,currentPlayerId:this.state.currentPlayerId===1?2:1}:this.state=oe(this.state,{type:"START_MY_TURN"}),e||await this.broadcastGameState(),this.render(),this.checkOnlineGameOver()}async broadcastGameState(){const{currentRoom:e,firstPlayerId:s}=this.state.online;if(!e)return;console.log("广播轻量游戏状态，当前玩家:",this.state.currentPlayerId,"回合:",this.state.turnNumber,"阶段:",this.state.phase);const a=Zt(this.state),r=this.state.discardPile.length,i=this._lastBroadcastDiscardPileLen,n=r>i?this.state.discardPile.slice(i).map(t=>({id:t.id,templateKey:xe(t),name:t.name})):[];a.discardPileDiff=n,this._lastBroadcastDiscardPileLen=r,console.log("轻量状态序列化完成，大小约:",JSON.stringify(a).length,"bytes, gamePhase:",a.gamePhase,"discardPileDiff:",n.length);try{const{broadcastGameAction:t}=await ge(async()=>{const{broadcastGameAction:o}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:o}},__vite__mapDeps([0,1])),l=JSON.stringify(a).length;console.log(`【STATE_SYNC】消息大小: ${l} bytes, 使用持久 channel: ${!!this.roomSubscription}`),await t(e.id,{type:"STATE_SYNC",syncState:a},this.roomSubscription||void 0),console.log("【STATE_SYNC】通过持久 channel 广播成功")}catch(t){console.error("【STATE_SYNC】Realtime 广播失败:",t)}try{await(await ge(async()=>{const{getDb:l}=await import("./online-fGHm1H1u.js");return{getDb:l}},__vite__mapDeps([0,1]))).getDb().from("game_rooms").update({game_state:a}).eq("id",e.id),console.log("【STATE_SYNC】轻量状态已保存到数据库（fallback）")}catch(t){console.error("【STATE_SYNC】保存到数据库失败:",t)}}async checkOnlineGameOver(){const{players:e,online:s}=this.state,{battlePlayers:a,firstPlayerId:r}=s;if(e[0].health<=0||e[1].health<=0){const i=e[0].health<=0?1:0,n=1-i,t=i===0?r:a.find(o=>o.playerId!==r).playerId,l=n===0?r:a.find(o=>o.playerId!==r).playerId;this.state=oe(this.state,{type:"ONLINE_GAME_OVER",winnerId:t,loserId:l}),await this.broadcastGameState(),this.render()}}async allAttackHeroOnline(){if(this.isAttacking)return;this.isAttacking=!0;const{players:e,online:s}=this.state,{playerId:a,firstPlayerId:r,currentRoom:i}=s,n=a===r?0:1,t=e[n],l=1-n,o=n+1,d=l+1,p=t.board.filter(c=>c.canAttack&&c.canAttackHeroes&&!c.hasAttacked&&!c.isDefending);if(p.length===0){this.isAttacking=!1;return}for(const c of p){if(this.savePotentialDeathMinions(c.id),this.playWoodSound(),await this.attackAnimation(c.id,!0,c.attack),this.state=oe(this.state,{type:"ATTACK_HERO",attackerPlayerId:o,attackerCardId:c.id,targetPlayerId:d}),this.render(),i&&await this.broadcastGameState(),this.state.phase==="onlineGameOver"){this.isAttacking=!1;return}await new Promise(h=>setTimeout(h,200))}this.isAttacking=!1}async renderOnlineGameOver(){const{winner:e,players:s,online:a}=this.state,{battlePlayers:r,isSpectator:i,rematchRequested:n,playerId:t,lastLoserId:l,firstPlayerId:o}=a;if(!e||r.length<2){console.error("[渲染] 无效的 winner 或 battlePlayers 数量不足",e,r.length),this.state=oe(this.state,{type:"BACK_TO_ROOM"}),this.render();return}if(typeof e!="number"||e<1||e>2){console.error("[渲染] 无效的 winner 值，无法显示结算动画",e),console.error("[渲染] players:",s),this.state=oe(this.state,{type:"BACK_TO_ROOM"}),this.render();return}const d=s.find(f=>f.id===e),p=s.find(f=>f.id!==e);if(!d||!p){console.error("[渲染] 找不到胜者或败者",e,s),this.state=oe(this.state,{type:"BACK_TO_ROOM"}),this.render();return}console.log("[动画] 渲染联机游戏结束界面"),console.log("[动画] winner (原始值):",e,"类型:",typeof e),console.log("[动画] winnerPlayer:",d.name,"(id:",d.id,")"),console.log("[动画] loserPlayer:",p.name,"(id:",p.id,")"),console.log("[动画] firstPlayerId:",o,"playerId:",t,"isSpectator:",i),console.log("[动画] battlePlayers:",r.map(f=>({id:f.playerId,name:f.playerNickname}))),n.includes(t),n.length;const c=`
      <div id="game-over-overlay" class="fixed inset-0 flex flex-col items-center justify-center" style="background: #000;">
        <div id="thumbs-down-layer" style="position: absolute; inset: 0; pointer-events: none; overflow: hidden;"></div>
        <div class="text-center" style="position: relative; z-index: 2;">
          <h1 class="text-8xl font-bold mb-8" style="color: #ff0000; font-family: 'Georgia', serif; text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);">
            Loser is
          </h1>
          <p class="text-6xl font-bold mb-12" style="color: #fff; font-family: 'Georgia', serif;">
            ${p.name}
          </p>

          <p class="text-sm mt-12" style="color: #666; cursor: default;">- 点击屏幕返回联机房间 -</p>
        </div>

        ${i?`
          <div class="fixed bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg" style="background: rgba(255, 255, 255, 0.2); z-index: 2;">
            <span class="text-white">👁️ 观战模式</span>
          </div>
        `:""}
      </div>
    `;await this.applyGrayscaleTransition(c);const h=document.getElementById("game-over-overlay");h&&h.addEventListener("click",async()=>{this.stopThumbsDownEmojis();const{currentRoom:f}=this.state.online;if(f)try{const{updateRoomStatus:u,resetAllPlayerReady:b}=await ge(async()=>{const{updateRoomStatus:m,resetAllPlayerReady:y}=await import("./online-fGHm1H1u.js");return{updateRoomStatus:m,resetAllPlayerReady:y}},__vite__mapDeps([0,1]));await u(f.id,"waiting"),await b(f.id),console.log("已更新房间状态为 waiting 并重置准备状态")}catch(u){console.error("更新房间状态失败:",u)}await this.unsubscribeFromRoom(),this.state=oe(this.state,{type:"BACK_TO_ROOM"}),await this.loadRoomData(),this.render()}),this.spawnThumbsDownEmojis()}async loadRoomData(){if(await Promise.all([this.loadMessages(),this.loadPlayerReady(),this.loadRoomInfo()]),this.roomSubscription){console.log("已有房间订阅，跳过重复订阅");return}try{await this.subscribeToRoomUpdates(),console.log("订阅房间更新成功")}catch(e){console.error("订阅房间更新失败，将使用轮询模式:",e),alert("订阅失败，将使用轮询模式，可能会有延迟")}this.startPolling()}startPolling(){this.pollingInterval&&clearInterval(this.pollingInterval),this.pollingInterval=setInterval(async()=>{if(this.state.phase!=="room"){clearInterval(this.pollingInterval),this.pollingInterval=null;return}try{await Promise.all([this.loadRoomInfo(),this.loadMessages(),this.loadPlayerReady()])}catch(e){console.error("轮询失败:",e)}},2e3)}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async loadRoomInfo(){const{currentRoom:e}=this.state.online;if(e)try{const{getRoomById:s}=await ge(async()=>{const{getRoomById:r}=await import("./online-fGHm1H1u.js");return{getRoomById:r}},__vite__mapDeps([0,1])),a=await s(e.id);if(a){if(a.status==="playing"&&this.state.phase==="room"){console.log("轮询检测到游戏开始，进入战斗界面"),this.state=oe(this.state,{type:"UPDATE_ROOM",room:a}),await this.enterOnlineBattle();return}const r=this.state.online.currentRoom?.guest_id,i=this.state.online.currentRoom?.guest_nickname;(a.guest_id!==r||a.guest_nickname!==i)&&(console.log("检测到房间信息变化:",a),this.state=oe(this.state,{type:"UPDATE_ROOM",room:a}),this.state.phase==="room"&&this.render())}}catch(s){console.error("加载房间信息失败:",s)}}async subscribeToRoomUpdates(e=0){const{currentRoom:s,playerId:a}=this.state.online;if(!(!s||this.isSubscribing)){this.isSubscribing=!0;try{const{subscribeToRoom:r,unsubscribeFromRoom:i}=await ge(async()=>{const{subscribeToRoom:n,unsubscribeFromRoom:t}=await import("./online-fGHm1H1u.js");return{subscribeToRoom:n,unsubscribeFromRoom:t}},__vite__mapDeps([0,1]));this.roomSubscription&&(await i(this.roomSubscription),this.roomSubscription=null),this.roomSubscription=await r(s.id,async n=>{console.log("房间更新:",n),this.state=oe(this.state,{type:"UPDATE_ROOM",room:n}),n.status==="playing"&&this.state.phase==="room"?(console.log("检测到游戏开始，进入战斗界面"),await this.enterOnlineBattle()):this.state.phase==="room"&&this.render()},async n=>{if(console.log("收到新消息:",n),n.sender_nickname==="__SYSTEM__"&&n.message.startsWith("__DECK_DATA__")){const o=this.parseDeckDataMessage(n.message);if(o){const d=this.state.online.playerReady.find(c=>c.player_id===n.sender_id),p=d?d.player_nickname:n.sender_id;this.state=oe(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:n.sender_id,filename:"本地卡包",cardCount:o.cardCount,playerNickname:p,comparisonData:o.comparisonData}),this.state.phase==="room"&&this.render()}return}if(n.sender_nickname==="__SYSTEM__"&&n.message.startsWith("__DECK_IMPORT__")){if(this.state.online.remoteDeckImports[n.sender_id]?.comparisonData)return;const o=n.message.split("|");if(o.length>=3){const d=o[1],p=parseInt(o[2],10);console.log("[DEBUG] 收到系统消息-卡包导入:",n.sender_id,d,p),this.state=oe(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:n.sender_id,filename:d,cardCount:p,playerNickname:n.sender_id}),this.state.phase==="room"&&this.render()}return}if(n.sender_nickname==="__SYSTEM__"&&n.message.startsWith("__HERO_SELECT__")){try{const o=JSON.parse(n.message.split("|")[1]);this.state=oe(this.state,{type:"SET_ONLINE_HERO",playerId:o.playerId,heroCard:o.heroCard}),this.state.phase==="room"&&this.render()}catch(o){console.error("解析 HERO_SELECT 失败:",o)}return}if(n.sender_nickname==="__SYSTEM__"&&n.message.startsWith("__MULLIGAN_CONFIRM__")){const o=n.message.split("|");try{const d=JSON.parse(o[1]);if(this.state.online.playerId===this.state.online.firstPlayerId){if(this.state.mulliganDone>=2){console.log("【MULLIGAN_CONFIRM】跳过重复处理，mulliganDone 已为:",this.state.mulliganDone);return}if(this.state={...this.state,p2MulliganSelected:d},this.state.mulliganDone>=1){this.state=oe(this.state,{type:"CONFIRM_MULLIGAN"});{const p=this.state.online.playerId==="1"?2:1;this.state=oe({...this.state,currentPlayerId:p},{type:"START_MY_TURN"})}this.lastGameStateTimestamp=Date.now(),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100),await this.broadcastGameState()}else console.log("【MULLIGAN_CONFIRM】P1尚未换牌，保存P2换牌数据，等待P1确认后处理"),this._p2MulliganConfirmed=!0}else{if(console.log("【MULLIGAN_CONFIRM】后手收到先手的换牌确认，discardIds:",d),this.state.mulliganDone>=2){console.log("【MULLIGAN_CONFIRM(P2)】跳过重复处理，mulliganDone 已为:",this.state.mulliganDone);return}this.state={...this.state,mulliganSelected:d},this.state=oe(this.state,{type:"CONFIRM_MULLIGAN"}),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100),await this.broadcastGameState()}}catch(d){console.error("解析 MULLIGAN_CONFIRM 失败:",d)}return}const{messages:t}=this.state.online;t.some(o=>o.id===n.id)||(this.state=oe(this.state,{type:"ADD_MESSAGE",message:n}),this.updateMessagesDisplay())},n=>{console.log("准备状态更新:",n),this.state=oe(this.state,{type:"UPDATE_PLAYER_READY",playerReady:n}),this.state.phase==="room"&&this.render()},n=>{console.log("游戏状态更新:",n),(this.state.phase==="onlineBattle"||this.state.phase==="mulligan")&&this.handleRemoteGameStateUpdate(n)},async n=>{console.log("收到游戏操作:",n),await this.handleOnlineGameAction(n)},n=>{console.log("收到卡包导入广播:",n),this.state=oe(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:n.playerId,filename:n.filename||"本地卡包",cardCount:n.cardCount,playerNickname:n.playerNickname,comparisonData:n.comparisonData}),this.state.phase==="room"&&this.render()}),console.log("已订阅房间更新")}catch(r){if(console.error("订阅房间更新失败:",r),e<3)return console.log(`订阅失败，自动重试 (${e+1}/3)...`),await new Promise(i=>setTimeout(i,1e3)),this.isSubscribing=!1,this.subscribeToRoomUpdates(e+1);throw console.error("订阅房间更新失败，已重试3次，放弃"),r}finally{this.isSubscribing=!1}}}async handleRemoteGameStateUpdate(e){if(e&&"gamePhase"in e){console.log("【handleRemoteGameStateUpdate】收到轻量状态，转发给 handleOnlineGameAction"),await this.handleOnlineGameAction({type:"STATE_SYNC",syncState:e});return}const{playerId:a,firstPlayerId:r,isSpectator:i}=this.state.online;if(console.log("收到远程游戏状态更新(全量格式)，当前玩家:",e.currentPlayerId,"回合:",e.turnNumber,"时间戳:",e.timestamp,"游戏阶段:",e.gamePhase,"胜者:",e.winner,"是否正在攻击:",this.isAttacking),e.gamePhase==="gameOver"&&e.winner){console.log("收到游戏结束状态，胜者:",e.winner);const{battlePlayers:o}=this.state.online,d=e.winner.id===String(this.state.online.firstPlayerId)?String(o.find(p=>p.playerId!==this.state.online.firstPlayerId).playerId):String(this.state.online.firstPlayerId);this.state=oe(this.state,{type:"ONLINE_GAME_OVER",winnerId:e.winner.id,loserId:d}),this.render();return}if(this.isAttacking){console.log("正在攻击动画中，跳过远程状态更新");return}if(e.timestamp&&this.lastGameStateTimestamp&&e.timestamp<this.lastGameStateTimestamp){console.log("跳过过期的远程状态更新，时间戳:",e.timestamp,"当前:",this.lastGameStateTimestamp);return}e.timestamp&&(this.lastGameStateTimestamp=e.timestamp);const n=this.state.currentPlayerId===1?a===r:a!==r,t=e.currentPlayerId===1?a===r:a!==r;let l=[];if(e.currentPlayerId===1&&a===r){const o=this.state.players[0].hand,d=e.players[0].hand;d.length>o.length&&(l=d.slice(o.length).map(p=>p.id))}else if(e.currentPlayerId===2&&a!==r){const o=this.state.players[1].hand,d=e.players[1].hand;d.length>o.length&&(l=d.slice(o.length).map(p=>p.id))}if(this.state={...this.state,currentPlayerId:e.currentPlayerId,turnNumber:e.turnNumber,players:e.players.map((o,d)=>({id:o.id,name:o.name,health:o.health,maxHealth:o.maxHealth||30,heroMarkCount:o.heroMarkCount||0,energy:o.energy,maxEnergy:o.maxEnergy,hand:o.hand.map(p=>({...p})),deck:o.deck.map(p=>({...p})),board:o.board.map(p=>({...p}))})),discardPile:(e.discardPile||[]).map(o=>({...o})),newlyDrawnCardIds:l,gameLogs:e.gameLogs||this.state.gameLogs},this.state.players[0].health<=0||this.state.players[1].health<=0){const{battlePlayers:o,firstPlayerId:d}=this.state.online,p=this.state.players[0].health<=0?1:0,c=p===0?d:o.find(f=>f.playerId!==d).playerId,h=p===0?o.find(f=>f.playerId!==d).playerId:d;this.state=oe(this.state,{type:"ONLINE_GAME_OVER",winnerId:c,loserId:h}),this.render();return}!n&&t&&!i&&l.length>0?(console.log("回合切换到己方，播放抽牌动画"),this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100)):this.render()}async handleOnlineGameAction(e){const{phase:s,online:a}=this.state;if(console.log("处理游戏操作消息:",e.type,"当前阶段:",s,"是否正在攻击:",this.isAttacking),this.isAttacking&&e.type!=="MINION_ATTACK_HERO"){console.log("正在攻击动画中，跳过状态更新");return}switch(e.type){case"STATE_SYNC":{const r=e.syncState;if(!r){console.error("【STATE_SYNC】收到空状态");break}if(this.state.online.playerId,r.timestamp&&r.timestamp<=this.lastGameStateTimestamp){console.log("【STATE_SYNC】跳过旧状态或自己的广播");break}if(this.state.mulliganDone>=2&&((r.mulliganDone??0)<2||r.gamePhase==="mulligan")){console.log("【STATE_SYNC】跳过过期换牌状态（本地已完成换牌，mulliganDone:",this.state.mulliganDone,"，收到:",r.mulliganDone,"，gamePhase:",r.gamePhase,"）");break}const t=(this.state.online.playerId===this.state.online.firstPlayerId?this.state.mulliganDone<1:this.state.mulliganDone<2)&&(r.mulliganDone??0)>=2;let l=null;if(t&&(console.log("【STATE_SYNC】本地换牌尚未完成，保护本地换牌字段后合并（本地mulliganDone:",this.state.mulliganDone,"，收到:",r.mulliganDone,"）"),l={mulliganDone:this.state.mulliganDone,mulliganCards:this.state.mulliganCards,mulliganSelected:this.state.mulliganSelected,p2MulliganCards:this.state.p2MulliganCards,p2MulliganSelected:this.state.p2MulliganSelected,phase:this.state.phase}),this.state.phase==="onlineBattle"&&this.state.turnNumber>=1&&(r.gamePhase==="mulligan"||(r.turnNumber??1)<this.state.turnNumber)){console.log("【STATE_SYNC】本地回合进度已超过收到的状态，跳过旧状态同步（本地turnNumber:",this.state.turnNumber,"，收到turnNumber:",r.turnNumber,"，收到gamePhase:",r.gamePhase,"）");break}console.log("【STATE_SYNC】收到轻量状态同步，回合:",r.turnNumber,"当前玩家:",r.currentPlayerId,"阶段:",r.gamePhase),this.lastGameStateTimestamp=r.timestamp;const o=this.state.sharedDeck||[];console.log("【STATE_SYNC】反序列化前 sharedDeck 大小:",o.length,"当前phase:",this.state.phase);const d=Jt(r,o);console.log("【STATE_SYNC】反序列化后 restoredState.phase:",d.phase);const p=this.state.currentPlayerId===1?this.state.online.playerId===this.state.online.firstPlayerId:this.state.online.playerId!==this.state.online.firstPlayerId,c=d.currentPlayerId===1?this.state.online.playerId===this.state.online.firstPlayerId:this.state.online.playerId!==this.state.online.firstPlayerId,h=this.state.players[0],f=this.state.players[1];if(this.state={...this.state,...d,online:{...this.state.online,isWaitingForGameState:!1}},h&&(this.state.players[0].halfPublicDeck=h.halfPublicDeck||[],this.state.players[0].personalBattleDeck=h.personalBattleDeck||[]),f&&(this.state.players[1].halfPublicDeck=f.halfPublicDeck||[],this.state.players[1].personalBattleDeck=f.personalBattleDeck||[]),l&&(this.state={...this.state,...l},console.log("【STATE_SYNC】已恢复本地换牌字段，当前phase:",this.state.phase,"mulliganDone:",this.state.mulliganDone)),c&&d.waitingForNextPlayer){const m=this.state.online.playerId==="1"?2:1;this.state=oe({...this.state,currentPlayerId:m},{type:"START_MY_TURN"}),this.broadcastGameState()}const u=r.discardPileDiff;if(u&&u.length>0){const m=this.state.sharedDeck||[],y=u.map(x=>{const v=m.find(C=>xe(C.card)===x.templateKey);return v?{...v.card,id:x.id}:null}).filter(Boolean);y.length>0&&(this.state.discardPile=[...this.state.discardPile,...y])}if(console.log("【STATE_SYNC】状态已恢复，玩家1手牌:",this.state.players[0].hand.length,"玩家2手牌:",this.state.players[1].hand.length),this.state.phase==="onlineGameOver"){this.render();break}const b=this.state.newlyDrawnCardIds||[];!p&&c&&!this.isAttacking&&b.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100)):this.render();break}case"GAME_INIT":{console.log("【GAME_INIT】收到初始化消息，sharedDeckOrder长度:",e.sharedDeckOrder.length,"先手:",e.firstPlayerId);const{playerId:r,isSpectator:i}=this.state.online;if(r===e.firstPlayerId){console.log("【GAME_INIT】我是先手，跳过自己广播的消息");break}if(i){console.log("【GAME_INIT】观战者收到初始化消息，暂不处理");break}this.state=oe(this.state,{type:"START_ONLINE_GAME",firstPlayerId:e.firstPlayerId,player1Name:e.player1Name,player2Name:e.player2Name,sharedDeckOrder:e.sharedDeckOrder,player1PersonalKeys:e.player1PersonalKeys,player2PersonalKeys:e.player2PersonalKeys}),this.state={...this.state,online:{...this.state.online,isWaitingForGameState:!1}},this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100),this.battleStatePollInterval&&clearInterval(this.battleStatePollInterval);const n=this.state.online.currentRoom?.id;n&&(this.battleStatePollInterval=window.setInterval(async()=>{if(this.state.phase!=="onlineBattle"&&this.state.phase!=="mulligan"){this.battleStatePollInterval&&(clearInterval(this.battleStatePollInterval),this.battleStatePollInterval=null);return}try{const{getDb:t}=await ge(async()=>{const{getDb:c}=await import("./online-fGHm1H1u.js");return{getDb:c}},__vite__mapDeps([0,1])),{data:l,error:o}=await t().from("game_rooms").select("game_state").eq("id",n).single();if(o||!l?.game_state)return;const d=l.game_state;d&&"gamePhase"in d?await this.handleOnlineGameAction({type:"STATE_SYNC",syncState:d}):console.log("【轮询】数据库中的 game_state 不是轻量格式，跳过")}catch{}},2e3),console.log("【GAME_INIT】后手启动战斗状态轮询(fallback)"));break}case"FULL_STATE_SYNC":if(e.gameState.timestamp===0){console.log("收到状态同步请求");const{firstPlayerId:i,playerId:n,currentRoom:t}=a;if(n===i&&s==="onlineBattle"){console.log("我是先手，重新广播游戏状态");try{const{broadcastGameAction:l}=await ge(async()=>{const{broadcastGameAction:o}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:o}},__vite__mapDeps([0,1]));await l(t.id,{type:"GAME_START",gameState:{currentPlayerId:this.state.currentPlayerId,turnNumber:this.state.turnNumber,players:this.state.players.map(o=>({id:o.id,name:o.name,health:o.health,energy:o.energy,maxEnergy:o.maxEnergy,hand:o.hand.map(d=>({...d})),deck:o.deck.map(d=>({...d})),board:o.board.map(d=>({...d}))})),firstPlayerId:i,gamePhase:"playing",timestamp:Date.now()}},this.roomSubscription||void 0)}catch(l){console.error("广播游戏状态失败:",l)}}break}case"GAME_START":{console.log("【GAME_START】收到消息，更新游戏状态");const r=e.gameState,i=r.firstPlayerId,{playerId:n,firstPlayerId:t}=a;if(r.timestamp&&r.timestamp<=this.lastGameStateTimestamp){console.log("【GAME_START】收到旧状态，跳过",{receivedTimestamp:r.timestamp,currentTimestamp:this.lastGameStateTimestamp});break}const l=n===i,o=this.state.phase==="onlineBattle"&&this.state.turnNumber>0,d=l&&o;if(console.log("【GAME_START】判断是否自己的广播:",{playerId:n,messageFirstPlayerId:i,currentFirstPlayerId:t,isFirstPlayer:l,isInBattle:o,phase:this.state.phase,turnNumber:this.state.turnNumber,isMyBroadcast:d}),d){console.log("【GAME_START】我是先手且已在战斗中，跳过自己广播的消息");break}if(r.timestamp&&(this.lastGameStateTimestamp=r.timestamp),r.gamePhase==="gameOver"&&r.winner!==void 0){console.log("[同步] 收到远程游戏结束状态"),console.log("[同步] gamePhase:",r.gamePhase),console.log("[同步] winner (原始值):",r.winner,"类型:",typeof r.winner),console.log("[同步] winner (JSON):",JSON.stringify(r.winner));const{battlePlayers:c}=this.state.online;let h;if(typeof r.winner=="object"&&r.winner!==null){console.warn("[同步] 收到旧格式的 winner 对象，需要更新广播方",r.winner);const b=r.winner.id;h=c.findIndex(m=>m.playerId===b)+1}else h=Number(r.winner);(isNaN(h)||h<1||h>2)&&(console.error("[同步] winner 解析失败，使用默认值 1",r.winner),h=1);const f=h===1?c[0].playerId:c[1].playerId,u=h===1?c[1].playerId:c[0].playerId;console.log("[同步] winnerIndex:",h,"winnerId:",f,"loserId:",u),console.log("[同步] battlePlayers:",c.map(b=>({id:b.playerId,name:b.playerNickname}))),this.state=oe(this.state,{type:"ONLINE_GAME_OVER",winnerId:f,loserId:u}),this.render();break}const p=[];r.players.forEach(c=>{c.hand.forEach(h=>{p.push(h.id)})}),this.state={...this.state,phase:"onlineBattle",currentPlayerId:r.currentPlayerId,turnNumber:r.turnNumber,players:r.players.map((c,h)=>({id:c.id,name:c.name,health:c.health,energy:c.energy,maxEnergy:c.maxEnergy,hand:c.hand.map(f=>({...f})),deck:c.deck.map(f=>({...f})),board:c.board.map(f=>({...f}))})),discardPile:(r.discardPile||[]).map(c=>({...c})),newlyDrawnCardIds:p,online:{...this.state.online,firstPlayerId:r.firstPlayerId,isWaitingForGameState:!1}},console.log("游戏状态已更新，玩家1手牌数:",this.state.players[0].hand.length,"玩家2手牌数:",this.state.players[1].hand.length),this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100);break}case"END_TURN":{const r=this.state.online.playerId;if(e.playerId===r)break;console.log("收到 END_TURN 消息，对手结束回合，等待 STATE_SYNC 同步状态");break}case"PLAY_CARD":{console.log("收到 PLAY_CARD 消息，等待 STATE_SYNC 同步状态");break}case"EXECUTE_PLAYED_MINION_EFFECT":{console.log("收到 EXECUTE_PLAYED_MINION_EFFECT 消息，等待 STATE_SYNC 同步状态");break}case"HERO_SKILL":{console.log("收到 HERO_SKILL 消息，等待 STATE_SYNC 同步状态");break}case"MINION_ATTACK_HERO":{console.log("收到 MINION_ATTACK_HERO 消息，攻击者:",e.attackerCardId,"伤害:",e.damage,"当前isAttacking:",this.isAttacking);const r=e.attackerCardId,i=e.damage;this.playWoodSound(),await this.attackAnimation(r,!0,i,!0);break}case"ATTACK_MINION":{console.log("收到 ATTACK_MINION 消息，等待 STATE_SYNC 同步状态");break}case"ATTACK_HERO":{console.log("收到 ATTACK_HERO 消息，等待 STATE_SYNC 同步状态");break}case"SURRENDER":{console.log("[认输] 收到 SURRENDER 消息"),console.log("[认输] 输家 ID:",e.loserId,"当前 phase:",s);const{battlePlayers:r}=this.state.online,i=e.loserId===r[0].playerId?r[1].playerId:r[0].playerId;console.log("[认输] 计算胜者 ID:",i),console.log("[认输] battlePlayers:",r.map(n=>n.playerId)),this.state=oe(this.state,{type:"ONLINE_GAME_OVER",winnerId:i,loserId:e.loserId}),console.log("[认输] 更新后 phase:",this.state.phase,"winner:",this.state.winner),this.render();break}case"VOICE_SPEECH":{if(e.playerId!==this.state.online.playerId){const i=e.playerId===this.state.online.firstPlayerId?1:2;this.renderRemoteSpeechBubble(this.app,e.speechType,i)}break}case"REMATCH_REQUEST":{console.log("收到 REMATCH_REQUEST 消息，请求者:",e.playerId);const{rematchRequested:r,lastLoserId:i,battlePlayers:n,playerId:t,currentRoom:l}=this.state.online;if(!r.includes(e.playerId)){const o=[...r,e.playerId];if(this.state={...this.state,online:{...this.state.online,rematchRequested:o}},o.length===2){console.log("双方都请求了再战，开始新游戏");const d=i||n[0].playerId;if(this.roomSubscription?console.log("【再战】订阅已存在"):(console.log("【再战】订阅不存在，重新订阅"),await this.subscribeToRoomUpdates()),t===d){console.log("我是再战先手，初始化游戏");const p=n.find(h=>h.playerId===d),c=n.find(h=>h.playerId!==d);if(this.state=oe(this.state,{type:"START_ONLINE_GAME",firstPlayerId:d,player1Name:p.playerNickname,player2Name:c.playerNickname}),console.log("【再战】先手等待 2 秒后广播..."),await new Promise(h=>setTimeout(h,2e3)),l)try{const{broadcastGameAction:h}=await ge(async()=>{const{broadcastGameAction:f}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:f}},__vite__mapDeps([0,1]));console.log("【再战】先手广播 GAME_START，订阅状态:",this.roomSubscription?"存在":"不存在"),await h(l.id,{type:"GAME_START",gameState:{currentPlayerId:this.state.currentPlayerId,turnNumber:this.state.turnNumber,players:this.state.players.map(f=>({id:f.id,name:f.name,health:f.health,energy:f.energy,maxEnergy:f.maxEnergy,hand:f.hand.map(u=>({...u})),deck:f.deck.map(u=>({...u})),board:f.board.map(u=>({...u}))})),firstPlayerId:d,gamePhase:"playing",timestamp:Date.now()}},this.roomSubscription||void 0),console.log("【再战】已广播游戏开始状态")}catch(h){console.error("【再战】广播游戏开始状态失败:",h)}this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100)}else{console.log("我是再战后手，等待先手初始化"),this.state={...this.state,phase:"onlineBattle",online:{...this.state.online,isWaitingForGameState:!0}},this.render();return}}else this.render()}break}case"DISCARD_PILE_ADD":{const r=e.cards;if(r&&r.length>0)for(const i of r)this.state.discardPile.push(i);break}case"DISCARD_PILE_REMOVE":{const r=e.cardTemplateKeys;if(r&&r.length>0)for(const i of r){const n=this.state.discardPile.findIndex(t=>xe(t)===i);n>=0&&this.state.discardPile.splice(n,1)}break}case"FETCH_FROM_ENEMY_HAND":{const{playerId:r}=this.state.online,n=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,t=this.state.players[n];if(t.hand.length>0){const l=Math.floor(Math.random()*t.hand.length),o=t.hand.splice(l,1)[0],d={id:o.id,templateKey:xe(o),name:o.name,type:o.type,cost:o.cost,attack:o.attack,health:o.health,maxHealth:o.maxHealth,armorValue:o.armorValue,imageData:o.imageData||""},{broadcastGameAction:p}=await ge(async()=>{const{broadcastGameAction:c}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:c}},__vite__mapDeps([0,1]));await p(this.state.online.currentRoom.id,{type:"ENEMY_HAND_CARD_RESPONSE",sourcePlayerId:r,card:d,effectType:e.effectType}),this.render()}break}case"ENEMY_HAND_CARD_RESPONSE":{e.card&&String(e.sourcePlayerId)!==this.state.online.playerId&&(this._pendingEnemyHandCard=e.card,this._pendingEnemyHandEffectType=e.effectType);break}case"REMOVE_FROM_ENEMY_HAND":{if(e.cardTemplateKey&&String(e.sourcePlayerId)!==this.state.online.playerId){const r=e.cardTemplateKey,i=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,n=this.state.players[i],t=n.hand.findIndex(l=>xe(l)===r);t>=0&&(n.hand.splice(t,1),this.render())}break}}}async enterOnlineBattle(){const{currentRoom:e,playerId:s,playerNickname:a,lastLoserId:r}=this.state.online;if(e){this.lastGameStateTimestamp=0,console.log("【enterOnlineBattle】开始进入战斗",{playerId:s,currentRoomId:e.id,lastLoserId:r,hasSubscription:!!this.roomSubscription,timestampReset:!0});try{const{getPlayerReady:i}=await ge(async()=>{const{getPlayerReady:u}=await import("./online-fGHm1H1u.js");return{getPlayerReady:u}},__vite__mapDeps([0,1])),t=(await i(e.id)).filter(u=>u.is_ready).slice(0,2).map(u=>({playerId:u.player_id,playerNickname:u.player_nickname,isReady:u.is_ready}));if(console.log("【enterOnlineBattle】对战玩家:",t.map(u=>({id:u.playerId,name:u.playerNickname}))),t.length<2){console.error("对战玩家不足");return}const l=!t.find(u=>u.playerId===s),o=this.state.sharedDeck,d=o.reduce((u,b)=>u+b.count,0);if(console.log("进入联机战斗，本地卡包数量:",d,"模板数:",o.length),o.length===0){console.error("本地卡包为空，无法进入战斗"),alert("本地卡包为空，请先在房间内导入卡包");return}this.state=oe(this.state,{type:"START_ONLINE_BATTLE",battlePlayers:t,isSpectator:l,onlineDeck:o});const p=[t[0].playerId,t[1].playerId].sort(),c=e.id,h=c%2;let f;if(r?(f=r,console.log("【enterOnlineBattle】再战模式，输家先手:",f)):(f=h===0?p[0]:p[1],console.log("【enterOnlineBattle】首局，随机决定先手:",f)),console.log("【enterOnlineBattle】先后手计算: 房间ID=",e.id,"哈希=",c,"随机值=",h,"先手=",f,"我=",s),this.state={...this.state,online:{...this.state.online,firstPlayerId:f,diceRolls:[]}},s===f)if(this.roomSubscription)console.log("【enterOnlineBattle - 先手】订阅已存在");else{console.log("【enterOnlineBattle - 先手】订阅不存在，尝试重新订阅");try{await this.subscribeToRoomUpdates(),console.log("【enterOnlineBattle - 先手】订阅成功")}catch{console.warn("【enterOnlineBattle - 先手】订阅失败，将使用数据库轮询同步游戏状态")}}else console.log("【enterOnlineBattle - 后手】跳过订阅检查，直接使用数据库轮询");if(s===f){console.log("我是先手玩家，初始化游戏状态"),this.state={...this.state,online:{...this.state.online,isWaitingForGameState:!1}},await this.startOnlineGameWithFirstPlayer(f,t),this.battleStatePollInterval&&clearInterval(this.battleStatePollInterval);const u=this.state.online.currentRoom?.id;u&&(this.battleStatePollInterval=window.setInterval(async()=>{if(this.state.phase!=="onlineBattle"&&this.state.phase!=="mulligan"){this.battleStatePollInterval&&(clearInterval(this.battleStatePollInterval),this.battleStatePollInterval=null);return}try{const{getDb:b}=await ge(async()=>{const{getDb:C}=await import("./online-fGHm1H1u.js");return{getDb:C}},__vite__mapDeps([0,1])),{data:m,error:y}=await b().from("game_rooms").select("game_state").eq("id",u).single();if(y||!m?.game_state)return;const x=m.game_state;x&&"gamePhase"in x&&(this.state.mulliganDone===1&&x.mulliganDone===2&&console.log("【先手轮询】检测到后手已完成换牌(mulliganDone=2)，处理状态同步"),await this.handleOnlineGameAction({type:"STATE_SYNC",syncState:x}))}catch{}},2e3),console.log("【先手】启动战斗状态轮询(fallback)"))}else if(l){console.log("我是观战者，等待游戏状态"),this.state={...this.state,phase:"onlineBattle",online:{...this.state.online,isWaitingForGameState:!0}},this.render();const u=async()=>{if(this.state.online.isWaitingForGameState){try{const b=(await ge(async()=>{const{getDb:y}=await import("./online-fGHm1H1u.js");return{getDb:y}},__vite__mapDeps([0,1]))).getDb(),{data:m}=await b.from("game_rooms").select("game_state").eq("id",e.id).single();if(m?.game_state){console.log("【观战者】从数据库获取到初始化信息");const y=m.game_state;y.sharedDeckOrder&&y.sharedDeckOrder.length>0?await this.handleOnlineGameAction({type:"GAME_INIT",sharedDeckOrder:y.sharedDeckOrder,firstPlayerId:y.firstPlayerId,player1Name:y.player1Name,player2Name:y.player2Name,randomSeed:y.randomSeed}):await this.handleOnlineGameAction({type:"GAME_START",gameState:y});return}}catch(b){console.error("【观战者】轮询游戏状态失败:",b)}setTimeout(u,1e3)}};setTimeout(u,1e3)}else{console.log("我是后手玩家，等待先手初始化游戏状态"),this.state={...this.state,phase:"onlineBattle",online:{...this.state.online,isWaitingForGameState:!0}},this.render();const u=async()=>{if(!this.state.online.isWaitingForGameState){console.log("【后手轮询】不再等待游戏状态，停止轮询");return}try{const m=(await ge(async()=>{const{getDb:v}=await import("./online-fGHm1H1u.js");return{getDb:v}},__vite__mapDeps([0,1]))).getDb(),{data:y,error:x}=await m.from("game_rooms").select("game_state").eq("id",e.id).single();if(x)console.error("【后手轮询】查询游戏状态失败:",x);else if(y?.game_state){console.log("【后手轮询】从数据库获取到初始化信息:",y.game_state);const v=y.game_state;v.sharedDeckOrder&&v.sharedDeckOrder.length>0?await this.handleOnlineGameAction({type:"GAME_INIT",sharedDeckOrder:v.sharedDeckOrder,firstPlayerId:v.firstPlayerId,player1Name:v.player1Name,player2Name:v.player2Name,randomSeed:v.randomSeed}):await this.handleOnlineGameAction({type:"GAME_START",gameState:v});return}else console.log("【后手轮询】数据库中暂无游戏状态，继续轮询...")}catch(m){console.error("【后手轮询】轮询游戏状态失败:",m)}setTimeout(u,1e3)};console.log("【后手】1秒后开始数据库轮询"),setTimeout(u,1e3);const b=async m=>{if(this.state.online.isWaitingForGameState){console.log(`请求状态同步（第${m}次）`);try{const{broadcastGameAction:y}=await ge(async()=>{const{broadcastGameAction:x}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:x}},__vite__mapDeps([0,1]));await y(e.id,{type:"FULL_STATE_SYNC",gameState:{currentPlayerId:0,turnNumber:0,players:[],firstPlayerId:"",gamePhase:"playing",timestamp:0}},this.roomSubscription||void 0)}catch(y){console.error("请求状态同步失败:",y)}m<3&&this.state.online.isWaitingForGameState&&setTimeout(()=>b(m+1),5e3)}};setTimeout(()=>b(1),3e3)}}catch(i){console.error("进入战斗失败:",i)}}}renderWaitingForGameState(){this.app.innerHTML=`
      <div class="min-h-screen flex items-center justify-center" style="background: transparent;">
        <div class="text-center p-8 rounded-2xl shadow-2xl" style="background: rgba(255, 255, 255, 0.9); border: 4px solid #d4c4a8;">
          <div class="text-4xl mb-4">⏳</div>
          <h2 class="text-2xl font-bold mb-4" style="color: #5a4a3a;">等待游戏开始...</h2>
          <p class="text-lg" style="color: #8b7355;">先手玩家正在初始化游戏</p>
        </div>
      </div>
    `}async startOnlineGameWithFirstPlayer(e,s){console.log("【startOnlineGameWithFirstPlayer】开始执行，先手ID:",e,"battlePlayers数量:",s.length);const{currentRoom:a,playerId:r}=this.state.online,{sharedDeck:i}=this.state;if(!a){console.error("【startOnlineGameWithFirstPlayer】currentRoom 为空，无法开始游戏"),alert("房间信息丢失，请重新进入房间");return}const n=s.find(g=>g.playerId===e),t=s.find(g=>g.playerId!==e);if(!n||!t){console.error("【startOnlineGameWithFirstPlayer】玩家查找失败，firstPlayer:",n,"secondPlayer:",t),alert("玩家信息丢失，请重新进入房间");return}if(console.log("【startOnlineGameWithFirstPlayer】卡包数量:",i.length,"先手:",n.playerNickname),i.length===0){console.error("【startOnlineGameWithFirstPlayer】卡包为空，无法开始游戏"),alert("卡包为空，请先在房间中添加卡牌");return}const l=Math.floor(Math.random()*2147483647),{deckEntriesToCards:o,shuffleWithSeed:d,getCardTemplateKey:p}=await ge(async()=>{const{deckEntriesToCards:g,shuffleWithSeed:k,getCardTemplateKey:w}=await Promise.resolve().then(()=>_t);return{deckEntriesToCards:g,shuffleWithSeed:k,getCardTemplateKey:w}},void 0),h=o(i).filter(g=>g.type!=="hero"),u=d(h,l).map(g=>p(g));console.log("【先手】生成 sharedDeckOrder，长度:",u.length,"seed:",l);const{findHeroGroup:b}=await ge(async()=>{const{findHeroGroup:g}=await Promise.resolve().then(()=>_t);return{findHeroGroup:g}},void 0),{CARD_GROUP_PUBLIC_ID:m}=await ge(async()=>{const{CARD_GROUP_PUBLIC_ID:g}=await Promise.resolve().then(()=>ra);return{CARD_GROUP_PUBLIC_ID:g}},void 0),y=this.state.online.heroSelections[e]??void 0,x=this.state.online.heroSelections[t.playerId]??void 0,v=[],C=[];if(y){const g=b(this.state,y);if(g&&g.id!==m){const k=o(g.cards.filter(w=>w.card.type!=="hero"));for(const w of k)v.push(p(w))}}if(x){const g=b(this.state,x);if(g&&g.id!==m){const k=o(g.cards.filter(w=>w.card.type!=="hero"));for(const w of k)C.push(p(w))}}if(this.state=oe(this.state,{type:"START_ONLINE_GAME",firstPlayerId:e,player1Name:n.playerNickname,player2Name:t.playerNickname,sharedDeckOrder:u,player1PersonalKeys:v,player2PersonalKeys:C,player1Hero:y,player2Hero:x}),this.render(),a&&r===e){try{const g=(await ge(async()=>{const{getDb:w}=await import("./online-fGHm1H1u.js");return{getDb:w}},__vite__mapDeps([0,1]))).getDb(),{error:k}=await g.from("game_rooms").update({game_state:{sharedDeckOrder:u,firstPlayerId:e,player1Name:n.playerNickname,player2Name:t.playerNickname,randomSeed:l,player1PersonalKeys:v,player2PersonalKeys:C}}).eq("id",a.id);k?console.error("【先手】保存初始化信息到数据库失败:",k):console.log("【先手】已将初始化信息保存到数据库")}catch(g){console.error("【先手】保存初始化信息到数据库失败:",g)}console.log("先手玩家等待 1.5 秒后广播 GAME_INIT..."),await new Promise(g=>setTimeout(g,1500));try{const{broadcastGameAction:g}=await ge(async()=>{const{broadcastGameAction:k}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:k}},__vite__mapDeps([0,1]));console.log("先手广播 GAME_INIT，房间:",a.id,"订阅状态:",this.roomSubscription?"存在":"不存在"),await g(a.id,{type:"GAME_INIT",sharedDeckOrder:u,firstPlayerId:e,player1Name:n.playerNickname,player2Name:t.playerNickname,randomSeed:l,player1PersonalKeys:v,player2PersonalKeys:C},this.roomSubscription||void 0),console.log("已广播 GAME_INIT")}catch(g){console.error("广播 GAME_INIT 失败:",g)}}setTimeout(()=>this.playDrawCardAnimation(300),100)}updateMessagesDisplay(){const e=document.getElementById("messages-container"),{messages:s,playerId:a}=this.state.online;e&&s.length>0&&(e.innerHTML=s.map(r=>`
        <div class="p-2 rounded-lg ${r.sender_id===a?"ml-8":"mr-8"}"
          style="background: ${r.sender_id===a?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"};">
          <div class="text-xs font-bold mb-1" style="color: ${r.sender_id===a?"#4a90d9":"#8b7355"};">
            ${r.sender_nickname}
          </div>
          <div style="color: #5a4a3a;">${r.message}</div>
        </div>
      `).join(""),e.scrollTop=e.scrollHeight)}async unsubscribeFromRoom(){if(this.stopPolling(),this.lastGameStateTimestamp=0,this.roomSubscription)try{const{unsubscribeFromRoom:e}=await ge(async()=>{const{unsubscribeFromRoom:s}=await import("./online-fGHm1H1u.js");return{unsubscribeFromRoom:s}},__vite__mapDeps([0,1]));await e(this.roomSubscription),this.roomSubscription=null,console.log("已取消房间订阅")}catch(e){console.error("取消订阅失败:",e)}}async loadMessages(){const{currentRoom:e}=this.state.online;if(e)try{const{getMessages:s}=await ge(async()=>{const{getMessages:i}=await import("./online-fGHm1H1u.js");return{getMessages:i}},__vite__mapDeps([0,1])),a=await s(e.id);this.state=oe(this.state,{type:"UPDATE_MESSAGES",messages:a});for(const i of a)if(i.sender_nickname==="__SYSTEM__"){if(i.message.startsWith("__DECK_DATA__")){const n=this.parseDeckDataMessage(i.message);if(n){const t=this.state.online.playerReady.find(o=>o.player_id===i.sender_id),l=t?t.player_nickname:i.sender_id;this.state=oe(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:i.sender_id,filename:"本地卡包",cardCount:n.cardCount,playerNickname:l,comparisonData:n.comparisonData})}}else if(i.message.startsWith("__DECK_IMPORT__")){const n=i.message.split("|");if(n.length>=3){const t=n[1],l=parseInt(n[2],10);this.state.online.remoteDeckImports[i.sender_id]?.comparisonData||(this.state=oe(this.state,{type:"UPDATE_REMOTE_DECK_IMPORT",playerId:i.sender_id,filename:t,cardCount:l,playerNickname:i.sender_id}))}}}const r=document.getElementById("messages-container");if(r&&a.length>0){const{playerId:i}=this.state.online;r.innerHTML=a.map(n=>`
          <div class="p-2 rounded-lg ${n.sender_id===i?"ml-8":"mr-8"}"
            style="background: ${n.sender_id===i?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"};">
            <div class="text-xs font-bold mb-1" style="color: ${n.sender_id===i?"#4a90d9":"#8b7355"};">
              ${n.sender_nickname}
            </div>
            <div style="color: #5a4a3a;">${n.message}</div>
          </div>
        `).join(""),r.scrollTop=r.scrollHeight}}catch(s){console.error("加载消息失败:",s)}}async loadPlayerReady(){const{currentRoom:e,playerReady:s}=this.state.online;if(e)try{const{getPlayerReady:a}=await ge(async()=>{const{getPlayerReady:n}=await import("./online-fGHm1H1u.js");return{getPlayerReady:n}},__vite__mapDeps([0,1])),r=await a(e.id);(r.length!==s.length||r.some((n,t)=>!s[t]||n.is_ready!==s[t].is_ready||n.player_id!==s[t].player_id))&&(console.log("准备状态有变化，更新显示"),this.state=oe(this.state,{type:"UPDATE_PLAYER_READY",playerReady:r}),this.state.phase==="room"&&this.render())}catch(a){console.error("加载准备状态失败:",a)}}renderHeroEditor(){if(typeof window<"u"&&(this.isPortraitMode=window.innerWidth/window.innerHeight<3/4),!this.pendingScrollRestoration){const e=document.querySelector(".editor-left-panel-scroll");e&&(this.pendingScrollRestoration={selector:".editor-left-panel-scroll",scrollTop:e.scrollTop})}if(this.isPortraitMode){const e=document.querySelector(".portrait-side-panel-scroll");if(e){const s=e.scrollTop;s>0&&(this.pendingScrollRestoration?this.pendingScrollRestoration.portraitScrollTop=s:this.pendingScrollRestoration={selector:".portrait-side-panel-scroll",scrollTop:s})}}if(this.app.innerHTML=`
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
            <div class="flex flex-col items-start gap-1">
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
                    <div class="flex flex-col items-start gap-1">
                      <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">名称:</label>
                      <input type="text" id="hero-skill-name" value="${e?.name||""}" placeholder="技能名称"
                        class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                    </div>
                    ${s?"":`
                    <div class="flex flex-col items-start gap-1">
                      <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">花费:</label>
                      <input type="number" id="hero-skill-cost" value="${e?.cost??1}" min="0" max="10"
                        class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                    </div>
                    ${e?.limited??!1?`<div class="flex flex-col items-start gap-1">
                          <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">次数:</label>
                          <input type="number" id="hero-skill-limited-input" value="${e?.maxUses??1}" min="1" max="10"
                            class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                        </div>`:`<div class="flex flex-col items-start gap-1">
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
                  <div class="flex flex-col items-start gap-1">
                    <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">名称:</label>
                    <input type="text" id="hero-skill-name" value="${e?.name||""}" placeholder="技能名称"
                      class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                  </div>
                  ${s?"":`
                  <div class="flex flex-col items-start gap-1">
                    <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">花费:</label>
                    <input type="number" id="hero-skill-cost" value="${e?.cost??1}" min="0" max="10"
                      class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                  </div>
                  ${e?.limited??!1?`<div class="flex flex-col items-start gap-1">
                        <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">次数:</label>
                        <input type="number" id="hero-skill-limited-input" value="${e?.maxUses??1}" min="1" max="10"
                          class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                      </div>`:`<div class="flex flex-col items-start gap-1">
                        <label class="text-xs font-bold whitespace-nowrap" style="color: #5a4a3a; width: 36px;">CD:</label>
                        <input type="number" id="hero-skill-cooldown" value="${e?.cooldown??0}" min="0" max="10"
                          class="flex-1 px-2 py-1 rounded text-xs outline-none" style="border: 1px solid #d4c4a8; background: #faf8f5; min-width: 0;">
                      </div>`}
                  `}
                </div>
                `})()}
                ${(()=>{const e=this.heroSkills[this.heroEditingSkillIndex],s=e?.effects||[],a=s[this.heroEditingSkillEffectIndex];if(!a)return"";const r=a.moment||"打出时";return`
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
                        <div class="font-bold text-xs" style="color: #5a4a3a;">${i==="打出时"?"发动时":i==="⚙️变量变化时"?"变量变化时":(Te[i]||"")+i}</div>
                      </div>
                    `).join("")}
                  </div>
                  `:`
                  <div class="text-xs" style="color: #8b7355;">${r==="打出时"?"发动时":(Te[r]||"")+r}</div>
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
                    ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...a?.moment==="攻击时"?["target_attr"]:[]].map(i=>{const n=this.isConditionSelected(i,a),t=this.getConditionItemStyle(i,a),l=i==="guaranteed"?"必然触发":i==="d6"?"🎲 D6":i==="hero_hp"?"英雄血量":i==="minion_count"?"随从数":i==="hand_count"?"手牌数":i==="exists_minion"?"存在随从":"目标属性",o=i==="d6"?"w-6 h-6":"";return`
                        <div class="hero-skill-condition-item px-2 py-1 rounded-lg cursor-pointer transition-all ${n?"selected":""}"
                          data-hero-skill-condition="${i}"
                          style="${t}">
                          <div class="font-bold text-xs" style="color: #5a4a3a;">${l}</div>
                          ${i==="d6"&&n?`
                            <div class="flex gap-1 mt-1">
                              ${[1,2,3,4,5,6].map(d=>`
                                <button class="trigger-num-btn ${o} rounded text-xs font-bold ${(a.triggerNumbers||[1,2,3,4,5,6]).includes(d)?"selected":""}"
                                  data-trigger-num="${d}" data-editor="hero-skill"
                                  style="background: ${(a.triggerNumbers||[1,2,3,4,5,6]).includes(d)?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"#dccfc0"}; color: ${(a.triggerNumbers||[1,2,3,4,5,6]).includes(d)?"#fff":"#8b7355"}; border: 1px solid ${(a.triggerNumbers||[1,2,3,4,5,6]).includes(d)?"#a08060":"#d4c4a8"};">
                                  ${d}
                                </button>
                              `).join("")}
                            </div>
                          `:""}
                          ${n?this.getConditionSubEditor("hero-skill",a):""}
                        </div>
                      `}).join("")}
                  </div>
                  `:`
                  <div class="text-xs" style="color: #8b7355;">
                    ${this.getConditionCollapsedText(a)}
                  </div>
                  `}
                </div>
                <!-- 技能目标选择 -->
                <div class="mt-2">
                  <button id="toggle-hero-skill-target-btn" class="w-full flex items-center justify-between font-bold text-xs mb-1" style="color: #8b7355;">
                    <div class="flex flex-col items-start gap-1">
                      <span>目标</span>
                      ${a.targets?.length>1||a.targets?.includes("我方所有随从")||a.targets?.includes("敌方所有随从")?`
                        <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;" onclick="event.stopPropagation()">
                          <input type="checkbox" id="random-target-check-hero-skill" ${a.isRandomTarget?"checked":""}
                            style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                          随机
                          <script>console.log('[RENDER] random checkbox, skill=' + ${this.heroEditingSkillIndex??"null"} + ', effect=' + ${this.heroEditingSkillEffectIndex} + ', isRandomTarget=' + ${a.isRandomTarget} + ', targets=' + JSON.stringify(skillEffect.targets));<\/script>
                        </label>
                      `:""}
                      ${a.targets?.includes("检索随从")?`
                        <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;" onclick="event.stopPropagation()">
                          <input type="checkbox" id="retrieved-random-check-hero-skill" ${a.targetRetrievedRandom?"checked":""}
                            style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                          检索随机
                        </label>
                      `:""}
                    </div>
                    <span class="flex items-center gap-2">
                      ${!this.showHeroSkillTargetPanel&&(a.targets?.includes("无需目标")||a.targets?.includes("卡牌"))?`
                        <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;" onclick="event.stopPropagation()">
                          <input type="checkbox" id="hero-skill-opponent-checkbox" ${a.isOpponent?"checked":""} style="accent-color: #c4a574;">
                          <span>对手</span>
                        </label>
                      `:""}
                      <span class="text-base">${this.showHeroSkillTargetPanel?"▼":"▶"}</span>
                    </span>
                  </button>
                  ${this.showHeroSkillTargetPanel?`
                  <div class="space-y-1 max-h-32 overflow-y-auto hero-skill-target-scroll">
                    ${["无需目标","卡牌","选择目标","选择随从","我方英雄","敌方英雄","我方所有随从","敌方所有随从",...a?.conditionType==="exists_minion"?["检索随从"]:[]].map(i=>`
                      <div class="hero-skill-target-item p-1.5 rounded-lg cursor-pointer transition-all ${a.targets?.includes(i)?"selected":""}"
                        data-hero-skill-target="${i}"
                        style="background: ${a.targets?.includes(i)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${a.targets?.includes(i)?"#f5a623":"#d4c4a8"};">
                        <div class="font-bold text-xs" style="color: #5a4a3a;">${i}</div>
                      </div>
                    `).join("")}
                  </div>
                  `:`
                  <div class="text-xs" style="color: #8b7355;">
                    ${a.targets?.length>0?`${a.isOpponent?"对手 ":""}${a.targets.join("、")}`:"点击展开选择"}
                  </div>
                  `}
                </div>
                ${a.targets?.length>0?`
                <!-- 技能效果选择 -->
                <div class="mt-2">
                  <div class="font-bold text-xs mb-1" style="color: #8b7355;">效果</div>
                  <div class="space-y-1">
                    ${(()=>{const i=a.targets||[],n=[];return i.includes("无需目标")&&n.push("抽牌","弃牌","获得能量","失去能量"),i.includes("卡牌")&&(n.push("召唤","获得"),n.push("属性变化")),(!i.includes("无需目标")&&!i.includes("卡牌")||i.length>1)&&(n.push("造成伤害","给予印记","治愈"),i.some(t=>t==="选择随从"||t==="我方所有随从"||t==="敌方所有随从"||t==="检索随从")&&(n.push("属性变化"),n.push("给予词条"))),n.map(t=>`
                        <div class="hero-skill-effect-item p-1.5 rounded-lg cursor-pointer transition-all ${a.effect===t?"selected":""}"
                          data-hero-skill-effect="${t}"
                          style="background: ${a.effect===t?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${a.effect===t?"#e07070":"#d4c4a8"};">
                          <div class="font-bold text-xs" style="color: #5a4a3a;">${t}</div>
                        </div>
                      `).join("")})()}
                  </div>
                  ${a.effect?`
                    <div class="mt-1 pt-1" style="border-top: 1px solid #d4c4a8;">
                      ${a.effect==="召唤"||a.effect==="获得"?`
                        <div class="space-y-1">
                          <div class="flex items-center justify-between mb-1">
                            <div class="font-bold text-xs" style="color: #8b7355;">${a.effect==="召唤"?"召唤卡牌":"获得卡牌"}</div>
                            <div class="flex items-center gap-1">
                              <span class="text-xs" style="color: #8b7355;">数量</span>
                              <input type="number" id="hero-skill-summon-count-input" value="${a.value||1}" min="1" max="99"
                                class="w-12 h-6 text-center text-xs border rounded"
                                style="background: rgba(212, 196, 168, 0.2); border-color: #d4c4a8; color: #5a4a3a;">
                            </div>
                          </div>
                          <div class="mb-1">
                            <label class="font-bold text-xs mb-1" style="color: #8b7355;">来源</label>
                            <div class="flex flex-wrap gap-1">
                              ${(()=>{const i=[{key:"derived",label:"衍生卡"},{key:"deck_top",label:"抽牌堆顶"},{key:"discard_top",label:"弃牌堆顶"},{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],n=a.summonSource??"derived";return i.map(t=>`
                                  <div class="hero-skill-summon-source-btn px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${n===t.key?"selected":""}"
                                    data-source="${t.key}"
                                    style="background: ${n===t.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${n===t.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                    ${t.label}
                                  </div>
                                `).join("")})()}
                            </div>
                          </div>
                          <div class="flex items-center justify-between">
                            <label class="font-bold text-xs" style="color: #8b7355;">选择卡牌:</label>
                            <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;">
                              <input type="checkbox" id="hero-skill-summon-random-checkbox" ${a.isRandom?"checked":""}
                                style="accent-color: #c4a574;">
                              <span>随机</span>
                            </label>
                          </div>
                          ${(a.summonSource??"derived")==="derived"?`
                          <div class="flex flex-col gap-1 max-h-24 overflow-y-auto">
                            ${(()=>{const i=a.isRandom?a.summonedCardIndices??[]:a.summonedCardIndex!==void 0?[a.summonedCardIndex]:[];return this.heroDerivedCards.map((t,l)=>{if(t.type==="hero"||a.effect==="召唤"&&t.type!=="minion")return null;const o=i.includes(l);return`
                                  <div class="hero-skill-summon-card-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${o?"selected":""}"
                                    data-hero-skill-summon-index="${l}"
                                    style="background: ${o?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${o?"#6fa8dc":"#d4c4a8"};">
                                    ${t.name||"未命名"}${t.type==="spell"?" [法术]":""}
                                  </div>
                                `}).filter(Boolean).join("")})()}
                          </div>
                          `:""}
                        </div>
                      `:a.effect==="属性变化"?`
                        <div class="space-y-1">
                          ${a.targets?.includes("卡牌")?`
                          <div class="flex items-center gap-0">
                            <label class="font-bold text-xs mr-1" style="color: #8b7355;">费:</label>
                            <input type="number" id="hero-skill-cost-value" value="${a.costValue}" min="0" max="99"
                              class="w-10 px-1 py-0.5 rounded outline-none text-center text-xs mr-1"
                              style="border: 1px solid #d4c4a8; background: #faf8f5;">
                            <button id="hero-skill-cost-pos-btn" class="w-5 h-5 rounded font-bold text-xs ${a.costValue===0?"opacity-50":""}"
                              style="background: ${a.costValue===0?"#999":!a.isCostSet&&a.isCostPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 1px solid ${a.costValue===0?"#777":!a.isCostSet&&a.isCostPositive?"#4a8a4a":"#aaa"};">+</button>
                            <button id="hero-skill-cost-zero-btn" class="w-5 h-5 rounded font-bold text-xs ${a.costValue===0?"":"opacity-50"}"
                              style="background: ${a.costValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 1px solid ${a.costValue===0?"#3a7ab0":"#aaa"};">0</button>
                            <button id="hero-skill-cost-neg-btn" class="w-5 h-5 rounded font-bold text-xs ${a.costValue===0?"opacity-50":""}"
                              style="background: ${a.costValue===0?"#999":!a.isCostSet&&!a.isCostPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 1px solid ${a.costValue===0?"#777":!a.isCostSet&&!a.isCostPositive?"#a04040":"#aaa"};">-</button>
                            <button id="hero-skill-cost-set-btn" class="w-5 h-5 rounded font-bold text-xs ${a.costValue===0?"opacity-50":""}"
                              style="background: ${a.costValue===0?"#999":a.isCostSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 1px solid ${a.costValue===0?"#777":a.isCostSet?"#b89020":"#aaa"};">=</button>
                          </div>
                          `:""}
                          <div class="flex items-center gap-0">
                            <label class="font-bold text-xs mr-1" style="color: #8b7355;">攻:</label>
                            <input type="number" id="hero-skill-attack-value" value="${a.attackValue}" min="0" max="99"
                              class="w-10 px-1 py-0.5 rounded outline-none text-center text-xs mr-1"
                              style="border: 1px solid #d4c4a8; background: #faf8f5;">
                            <button id="hero-skill-atk-pos-btn" class="w-5 h-5 rounded font-bold text-xs ${a.attackValue===0?"opacity-50":""}"
                              style="background: ${a.attackValue===0?"#999":!a.isAttackSet&&a.isAttackPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 1px solid ${a.attackValue===0?"#777":!a.isAttackSet&&a.isAttackPositive?"#4a8a4a":"#aaa"};">+</button>
                            <button id="hero-skill-atk-zero-btn" class="w-5 h-5 rounded font-bold text-xs ${a.attackValue===0?"":"opacity-50"}"
                              style="background: ${a.attackValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 1px solid ${a.attackValue===0?"#3a7ab0":"#aaa"};">0</button>
                            <button id="hero-skill-atk-neg-btn" class="w-5 h-5 rounded font-bold text-xs ${a.attackValue===0?"opacity-50":""}"
                              style="background: ${a.attackValue===0?"#999":!a.isAttackSet&&!a.isAttackPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 1px solid ${a.attackValue===0?"#777":!a.isAttackSet&&!a.isAttackPositive?"#a04040":"#aaa"};">-</button>
                            <button id="hero-skill-atk-set-btn" class="w-5 h-5 rounded font-bold text-xs ${a.attackValue===0?"opacity-50":""}"
                              style="background: ${a.attackValue===0?"#999":a.isAttackSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 1px solid ${a.attackValue===0?"#777":a.isAttackSet?"#b89020":"#aaa"};">=</button>
                          </div>
                          <div class="flex items-center gap-0">
                            <label class="font-bold text-xs mr-1" style="color: #8b7355;">血:</label>
                            <input type="number" id="hero-skill-health-value" value="${a.healthValue}" min="0" max="99"
                              class="w-10 px-1 py-0.5 rounded outline-none text-center text-xs mr-1"
                              style="border: 1px solid #d4c4a8; background: #faf8f5;">
                            <button id="hero-skill-hp-pos-btn" class="w-5 h-5 rounded font-bold text-xs ${a.healthValue===0?"opacity-50":""}"
                              style="background: ${a.healthValue===0?"#999":!a.isHealthSet&&a.isHealthPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 1px solid ${a.healthValue===0?"#777":!a.isHealthSet&&a.isHealthPositive?"#4a8a4a":"#aaa"};">+</button>
                            <button id="hero-skill-hp-zero-btn" class="w-5 h-5 rounded font-bold text-xs ${a.healthValue===0?"":"opacity-50"}"
                              style="background: ${a.healthValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 1px solid ${a.healthValue===0?"#3a7ab0":"#aaa"};">0</button>
                            <button id="hero-skill-hp-neg-btn" class="w-5 h-5 rounded font-bold text-xs ${a.healthValue===0?"opacity-50":""}"
                              style="background: ${a.healthValue===0?"#999":!a.isHealthSet&&!a.isHealthPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 1px solid ${a.healthValue===0?"#777":!a.isHealthSet&&!a.isHealthPositive?"#a04040":"#aaa"};">-</button>
                            <button id="hero-skill-hp-set-btn" class="w-5 h-5 rounded font-bold text-xs ${a.healthValue===0?"opacity-50":""}"
                              style="background: ${a.healthValue===0?"#999":a.isHealthSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 1px solid ${a.healthValue===0?"#777":a.isHealthSet?"#b89020":"#aaa"};">=</button>
                          </div>
                        </div>
                      `:`
                        <div class="flex flex-col items-start gap-1">
                          <label class="font-bold text-xs" style="color: #8b7355;">数值:</label>
                          <input type="number" id="hero-skill-effect-value" value="${a.value}" min="1" max="99"
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
                    <div class="flex flex-col items-start gap-1">
                      <label class="w-12 text-xs font-bold flex-shrink-0" style="color: #8b7355;">${e.label}:</label>
                      <input type="text" id="${e.id}" value="${this.heroSpeech[e.id.replace("hero-speech-","")]||""}"
                        placeholder="${e.placeholder}"
                        class="flex-1 px-2 py-1 rounded outline-none text-xs"
                        style="border: 1px solid #d4c4a8; background: #faf8f5; color: #5a4a3a;">
                    </div>
                  `).join("")}
                </div>

                <!-- 语音类型选择 -->
                <div class="flex flex-col items-start gap-1">
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
            ${(()=>{const e=this.heroDerivedCards[this.heroEditingDerivedIndex];if(!e)return"";const s=e.type==="spell",a=this.getCardFullEffectText(e,e.derivedCards).replace(/<br>；/g,"；");return`
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
                  ${a||"选择法术效果"}
                </div>
                `:`
                <!-- 随从效果描述 -->
                <div class="text-center text-xs flex-1 flex items-center justify-center px-1" style="color: #ffffff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; line-height: 1.3;">
                  ${a}
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
    `,this.attachHeroEditorEvents(),this.pendingScrollRestoration){const{selector:e,scrollTop:s,containerIndex:a,portraitScrollTop:r}=this.pendingScrollRestoration,i=document.querySelectorAll(e),n=i[a??0]||i[0];if(n&&(n.scrollTop=s),r!==void 0){const t=document.querySelector(".portrait-side-panel-scroll");t&&(t.scrollTop=r)}this.pendingScrollRestoration=null}}async enterDrawingMode(){this.isDrawingMode=!0,this.drawingTool="brush";const e=this.state.phase;if(this.heroEditingDerivedIndex!==null?this.drawingBaseImageData=this.heroDerivedCards[this.heroEditingDerivedIndex]?.imageData||null:this.isHeroEditMode||e==="heroEditor"?this.drawingBaseImageData=this.heroImageData||null:this.drawingBaseImageData=this.currentCard.imageData||null,!this.drawingBaseImageData)try{const s=await this.loadImageAsDataURL("/images/paper_texture_custom.png");this.drawingBaseImageData=s,this.heroEditingDerivedIndex!==null?this.heroDerivedCards[this.heroEditingDerivedIndex].imageData=s:this.isHeroEditMode||e==="heroEditor"?this.heroImageData=s:this.currentCard.imageData=s}catch(s){console.error("加载默认纸材质失败:",s)}this.isHeroEditMode||this.heroEditingDerivedIndex!==null||e==="heroEditor"?this.renderHeroEditor():this.renderCardCreator(),setTimeout(()=>{let s="card-drawing-canvas";this.heroEditingDerivedIndex!==null?s="hero-derived-drawing-canvas":(this.isHeroEditMode||e==="heroEditor")&&(s="hero-drawing-canvas");const a=document.getElementById(s);if(a){this.initDrawingCanvas(a),this.setupDrawingEvents(a),this.createCustomCursor(),this.updateCursorStyle();const r=()=>{a.style.cursor="none",this.showCustomCursor()},i=()=>{a.style.cursor="",this.hideCustomCursor()},n=()=>{this.showCustomCursor()},t=()=>{this.hideCustomCursor()};a.addEventListener("mouseenter",r),a.addEventListener("mouseleave",i),a.addEventListener("touchstart",n,{passive:!0}),a.addEventListener("touchend",t,{passive:!0}),a.__cursorCleanup=()=>{a.removeEventListener("mouseenter",r),a.removeEventListener("mouseleave",i),a.removeEventListener("touchstart",n),a.removeEventListener("touchend",t)};const l=["drawing-brush-btn","hero-drawing-brush-btn"],o=["drawing-eraser-btn","hero-drawing-eraser-btn"];l.forEach(h=>{const f=document.getElementById(h);if(f){const u=()=>{this.drawingTool="brush",this.updateCursorStyle(),this.refreshDrawingToolButtons()};f.addEventListener("click",u),f.__toolCleanup=()=>f.removeEventListener("click",u)}}),o.forEach(h=>{const f=document.getElementById(h);if(f){const u=()=>{this.drawingTool="eraser",this.updateCursorStyle(),this.refreshDrawingToolButtons()};f.addEventListener("click",u),f.__toolCleanup=()=>f.removeEventListener("click",u)}}),["drawing-clear-btn","hero-drawing-clear-btn"].forEach(h=>{const f=document.getElementById(h);if(f){const u=()=>{this.drawingCtxRef&&this.drawingCtxRef.clearRect(0,0,this.drawingCanvasRef.width,this.drawingCanvasRef.height)};f.addEventListener("click",u),f.__toolCleanup=()=>f.removeEventListener("click",u)}});const p={"brush-thin-btn":"thin","hero-brush-thin-btn":"thin","brush-medium-btn":"medium","hero-brush-medium-btn":"medium","brush-thick-btn":"thick","hero-brush-thick-btn":"thick"};Object.keys(p).forEach(h=>{const f=document.getElementById(h);if(f){const u=()=>{this.brushSizePreset=p[h],this.updateCursorStyle(),this.refreshDrawingToolButtons()};f.addEventListener("click",u),f.__toolCleanup=()=>f.removeEventListener("click",u)}});const c=[];for(let h=0;h<8;h++)c.push(`color-swatch-${h}`,`hero-color-swatch-${h}`);c.forEach(h=>{const f=document.getElementById(h);if(f){const u=()=>{const b=parseInt(h.match(/(\d+)$/)?.[1]??"7");this.drawingColor=this.COLORS[b],this.currentColorIndex=b,this.updateCursorStyle(),this.refreshColorSwatches()};f.addEventListener("click",u),f.__colorCleanup=()=>f.removeEventListener("click",u)}})}},0)}refreshDrawingToolButtons(){const e=["drawing-brush-btn","hero-drawing-brush-btn"],s=["drawing-eraser-btn","hero-drawing-eraser-btn"];e.forEach(r=>{const i=document.getElementById(r);i&&(i.style.background=this.drawingTool==="brush"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)",i.style.border=`2px solid ${this.drawingTool==="brush"?"#4a8a4a":"#d4c4a8"}`,i.style.color=this.drawingTool==="brush"?"#fff":"#5a4a3a")}),s.forEach(r=>{const i=document.getElementById(r);i&&(i.style.background=this.drawingTool==="eraser"?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)",i.style.border=`2px solid ${this.drawingTool==="eraser"?"#4a8a4a":"#d4c4a8"}`,i.style.color=this.drawingTool==="eraser"?"#fff":"#5a4a3a")}),["brush-thin-btn","hero-brush-thin-btn","brush-medium-btn","hero-brush-medium-btn","brush-thick-btn","hero-brush-thick-btn"].forEach(r=>{const i=document.getElementById(r);if(i){const n=this.brushSizePreset===(r.includes("thin")?"thin":r.includes("medium")?"medium":"thick");i.style.background=n?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"rgba(212, 196, 168, 0.5)",i.style.border=`2px solid ${n?"#4a8a4a":"#d4c4a8"}`,i.style.color=n?"#fff":"#5a4a3a"}})}refreshColorSwatches(){for(let e=0;e<8;e++){const s=document.getElementById(`color-swatch-${e}`),a=document.getElementById(`hero-color-swatch-${e}`),r=e===this.currentColorIndex?"2px solid #ffffff":"2px solid transparent";s&&(s.style.border=r),a&&(a.style.border=r)}}exitDrawingMode(e=!1){if(this.removeCustomCursor(),e&&this.drawingCanvasRef){const s=new Image;s.onload=()=>{const a=document.createElement("canvas"),r=a.getContext("2d");a.width=this.drawingCanvasRef.width,a.height=this.drawingCanvasRef.height,r.drawImage(s,0,0,a.width,a.height),r.drawImage(this.drawingCanvasRef,0,0);const i=a.toDataURL("image/png");this.heroEditingDerivedIndex!==null?this.heroDerivedCards[this.heroEditingDerivedIndex].imageData=i:this.isHeroEditMode||this.state.phase==="heroEditor"?this.heroImageData=i:this.currentCard.imageData=i,this.isDrawingMode=!1,this.drawingCanvasRef=null,this.drawingCtxRef=null,this.isHeroEditMode||this.heroEditingDerivedIndex!==null||this.state.phase==="heroEditor"?this.renderHeroEditor():this.renderCardCreator()},s.onerror=()=>{const a=this.drawingCanvasRef.toDataURL("image/png");this.heroEditingDerivedIndex!==null?this.heroDerivedCards[this.heroEditingDerivedIndex].imageData=a:this.isHeroEditMode||this.state.phase==="heroEditor"?this.heroImageData=a:this.currentCard.imageData=a,this.isDrawingMode=!1,this.drawingCanvasRef=null,this.drawingCtxRef=null,this.isHeroEditMode||this.heroEditingDerivedIndex!==null||this.state.phase==="heroEditor"?this.renderHeroEditor():this.renderCardCreator()},s.src=this.drawingBaseImageData||""}else this.isDrawingMode=!1,this.drawingCanvasRef=null,this.drawingCtxRef=null,this.isHeroEditMode||this.heroEditingDerivedIndex!==null||this.state.phase==="heroEditor"?this.renderHeroEditor():this.renderCardCreator()}loadImageAsDataURL(e){return new Promise((s,a)=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{const i=document.createElement("canvas");i.width=r.naturalWidth,i.height=r.naturalHeight;const n=i.getContext("2d");if(!n){a(new Error("无法创建 canvas context"));return}n.drawImage(r,0,0),s(i.toDataURL("image/png"))},r.onerror=()=>a(new Error(`加载图片失败: ${e}`)),r.src=e})}initDrawingCanvas(e){const s=e.getContext("2d");if(!s)return;this.drawingCanvasRef=e,this.drawingCtxRef=s;const a=window.devicePixelRatio||1,r=e.getBoundingClientRect();e.width=r.width*a,e.height=r.height*a,s.scale(a,a),s.lineCap="square",s.lineJoin="miter"}getDrawingSize(){const e={thin:{brush:1,eraser:5},medium:{brush:3,eraser:15},thick:{brush:9,eraser:45}},s=e[this.brushSizePreset]??e.medium;return this.drawingTool==="brush"?s.brush:s.eraser}setupDrawingEvents(e){let s=!1;const a=c=>{const h=e.getBoundingClientRect();let f,u;return"touches"in c?(f=c.touches[0]?.clientX??c.changedTouches[0]?.clientX??0,u=c.touches[0]?.clientY??c.changedTouches[0]?.clientY??0):(f=c.clientX,u=c.clientY),{x:f-h.left,y:u-h.top}},r=()=>{const c={thin:{brush:1,eraser:5},medium:{brush:3,eraser:15},thick:{brush:9,eraser:45}};return c[this.brushSizePreset]??c.medium},i=(c,h)=>{const f=this.drawingCtxRef;if(!f)return;const u=this.drawingTool==="brush"?r().brush:r().eraser;this.drawingTool==="eraser"?f.globalCompositeOperation="destination-out":(f.globalCompositeOperation="source-over",f.fillStyle=this.drawingColor),f.fillRect(c-u/2,h-u/2,u,u)};let n=0,t=0;const l=(c,h)=>{const f=this.drawingTool==="brush"?r().brush:r().eraser,u=c-n,b=h-t,m=Math.sqrt(u*u+b*b);if(m>f){const y=Math.floor(m/f),x=u/m*f,v=b/m*f;for(let C=1;C<=y;C++)i(n+x*C,t+v*C)}else i(c,h);n=c,t=h},o=c=>{c.preventDefault(),s=!0;const h=a(c);n=h.x,t=h.y,i(h.x,h.y),this.updateCustomCursor(h.x+e.getBoundingClientRect().left,h.y+e.getBoundingClientRect().top),this.showCustomCursor()},d=c=>{c.preventDefault();const h=a(c);this.updateCustomCursor(h.x+e.getBoundingClientRect().left,h.y+e.getBoundingClientRect().top),s&&l(h.x,h.y)},p=()=>{s=!1,this.drawingCtxRef&&(this.drawingCtxRef.globalCompositeOperation="source-over")};e.addEventListener("mousedown",o),e.addEventListener("mousemove",d),e.addEventListener("mouseup",p),e.addEventListener("mouseleave",p),e.addEventListener("touchstart",o,{passive:!1}),e.addEventListener("touchmove",d,{passive:!1}),e.addEventListener("touchend",p),e.addEventListener("touchcancel",p),e.__drawingCleanup=()=>{e.removeEventListener("mousedown",o),e.removeEventListener("mousemove",d),e.removeEventListener("mouseup",p),e.removeEventListener("mouseleave",p),e.removeEventListener("touchstart",o),e.removeEventListener("touchmove",d),e.removeEventListener("touchend",p),e.removeEventListener("touchcancel",p)}}createCustomCursor(){if(this.customCursorEl)return;const e=document.createElement("div");e.id="drawing-custom-cursor",e.style.position="fixed",e.style.pointerEvents="none",e.style.zIndex="9999",e.style.display="none",document.body.appendChild(e),this.customCursorEl=e,this.updateCursorStyle()}updateCursorStyle(){if(!this.customCursorEl)return;const e=this.getDrawingSize();this.drawingTool==="brush"?(this.customCursorEl.style.width=e+"px",this.customCursorEl.style.height=e+"px",this.customCursorEl.style.backgroundColor=this.drawingColor,this.customCursorEl.style.outline="1px solid #ffffff"):(this.customCursorEl.style.width=e+"px",this.customCursorEl.style.height=e+"px",this.customCursorEl.style.backgroundColor="#ffffff",this.customCursorEl.style.border="1px solid #000000")}updateCustomCursor(e,s){if(!this.customCursorEl)return;const a=this.getDrawingSize();this.customCursorEl.style.left=e-a/2+"px",this.customCursorEl.style.top=s-a/2+"px"}showCustomCursor(){this.customCursorEl&&(this.customCursorEl.style.display="block")}hideCustomCursor(){this.customCursorEl&&(this.customCursorEl.style.display="none")}removeCustomCursor(){this.customCursorEl&&(document.body.removeChild(this.customCursorEl),this.customCursorEl=null),["card-drawing-canvas","hero-drawing-canvas","hero-derived-drawing-canvas"].forEach(a=>{const r=document.getElementById(a);r&&(r.__drawingCleanup&&r.__drawingCleanup(),r.__cursorCleanup&&r.__cursorCleanup())}),["drawing-brush-btn","hero-drawing-brush-btn","drawing-eraser-btn","hero-drawing-eraser-btn"].forEach(a=>{const r=document.getElementById(a);r&&r.__toolCleanup&&r.__toolCleanup()})}renderCardCreator(){(!this.editingCards||this.editingCards.length===0)&&this.initCardsArray("minion");const e=Object.values($e).filter(g=>g.name!=="准备"),s=this.currentCard.keywords.some(g=>g.name==="护甲"),a=this.getCurrentEffect(),r=(this.currentCard.effects?.length||0)>0;typeof window<"u"&&(this.isPortraitMode=window.innerWidth/window.innerHeight<3/4);const i=g=>{switch(g){case"死亡时":return["无需目标","卡牌","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];case"打出时":return["无需目标","卡牌","选择目标","选择随从","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];case"回合开始时":case"回合结束时":case"⚙️变量变化时":return["无需目标","卡牌","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];case"攻击时":return["攻击目标","无需目标","卡牌","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];case"失去生命时":return["无需目标","卡牌","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"];default:return["无需目标","卡牌","选择目标","选择随从","自己","我方所有随从","敌方所有随从","我方英雄","敌方英雄"]}},n=()=>{if(!a)return[];const g=a.moments||(a.moment?[a.moment]:[]);if(g.length===0)return[];let k=null;for(const w of g){const P=i(w);k===null?k=[...P]:k=k.filter(M=>P.includes(M))}return k||[]},t=()=>a?a.conditionType?a.conditionType:!a.triggerNumbers||a.triggerNumbers.length===6?"guaranteed":"d6":"guaranteed",l=()=>{const g=n();return t()==="exists_minion"&&!g.includes("检索随从")?[...g,"检索随从"]:g},o=g=>{const k=t();if(k==="exists_minion"){const H=a?.conditionMinionName||"",Z=a?.conditionMinionCheckName??!1,j=a?.conditionSides||["friendly"],ee=j.includes("friendly"),Y=j.includes("enemy"),ie=ee&&Y,U=a?.conditionSideLogic||"and",W=["cost","attack","health"],he={cost:"能量花费",attack:"攻击力",health:"生命值"},de=W.map(I=>{const A=a?.conditionMinionAttrs?.[I],B=A?.enabled??!1,q=A?.operator||"=",O=A?.value??0,J=["<","=",">"].map(re=>{const S=(re==="<"?q==="<":re==="="?q==="=":q===">")||(re==="<"&&q==="<="||re===">"&&q===">="||re==="="&&(q==="<="||q===">="));return`<button class="condition-minion-attr-op-btn" data-attr="${I}" data-op="${re}" data-editor="${g}"
              style="${S?"rgba(34,197,94,0.25)":"rgba(212,196,168,0.3)"};border:1px solid ${S?"#22c55e":"#d4c4a8"};color:${S?"#22c55e":"#8b7355"};width:28px;height:24px;border-radius:4px;font-size:12px;font-weight:bold;cursor:pointer;">${re==="<"?"＜":re==="="?"＝":"＞"}</button>`}).join("");return`
          <div style="font-size:11px;" onclick="event.stopPropagation()">
            <div class="flex items-center gap-2" style="margin-bottom:3px;">
              <input type="checkbox" class="condition-minion-attr-check" data-attr="${I}" data-editor="${g}" ${B?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              <span style="color:#5a4a3a;">${he[I]}</span>
            </div>
            <div class="flex flex-col items-start gap-1">
              ${J}
              <input type="number" class="condition-minion-attr-input" data-attr="${I}" data-editor="${g}" value="${O}"
                style="width:45px;padding:2px 4px;border:1px solid #c0a080;border-radius:4px;font-size:11px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="0">
            </div>
          </div>`}).join("");return`
        <div class="mt-2 space-y-2 pl-1" onclick="event.stopPropagation()">
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="checkbox" class="condition-side-check" data-side="friendly" data-editor="${g}" ${ee?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              我方
            </label>
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="checkbox" class="condition-side-check" data-side="enemy" data-editor="${g}" ${Y?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              敌方
            </label>
          </div>
          ${ie?`
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-exists-${g}" class="condition-logic-radio" data-editor="${g}" value="and" ${U==="and"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              与
            </label>
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-exists-${g}" class="condition-logic-radio" data-editor="${g}" value="or" ${U==="or"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              或
            </label>
          </div>
          `:""}
          <div class="flex items-center gap-2" style="margin-bottom:3px;">
            <input type="checkbox" class="condition-minion-name-check" data-editor="${g}" ${Z?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
            <span style="font-size:11px;color:#5a4a3a;">随从名称</span>
          </div>
          <div style="margin-bottom:6px;">
            <input type="text" class="condition-minion-name-input" data-editor="${g}" value="${H}"
              style="width:100%;padding:4px 8px;border:1px solid #c0a080;border-radius:4px;font-size:12px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="输入名称">
          </div>
          <div class="space-y-1">${de}</div>
        </div>`}if(k==="target_attr"){const H=["cost","attack","health"],Z={cost:"能量花费",attack:"攻击力",health:"生命值"};return`<div class="mt-2 space-y-1 pl-1">${H.map(ee=>{const Y=a?.conditionTargetAttrs?.[ee],ie=Y?.enabled??!1,U=Y?.operator||"=",W=Y?.value??0,he=["<","=",">"].map(de=>{const B=(de==="<"?U==="<":de==="="?U==="=":U===">")||(de==="<"&&U==="<="||de===">"&&U===">="||de==="="&&(U==="<="||U===">="));return`<button class="condition-target-op-btn" data-attr="${ee}" data-op="${de}" data-editor="${g}"
              style="${B?"rgba(34,197,94,0.25)":"rgba(212,196,168,0.3)"};border:1px solid ${B?"#22c55e":"#d4c4a8"};color:${B?"#22c55e":"#8b7355"};width:28px;height:24px;border-radius:4px;font-size:12px;font-weight:bold;cursor:pointer;">${de==="<"?"＜":de==="="?"＝":"＞"}</button>`}).join("");return`
          <div style="font-size:11px;" onclick="event.stopPropagation()">
            <div class="flex items-center gap-2" style="margin-bottom:3px;">
              <input type="checkbox" class="condition-target-attr-check" data-attr="${ee}" data-editor="${g}" ${ie?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              <span style="color:#5a4a3a;">${Z[ee]}</span>
            </div>
            <div class="flex flex-col items-start gap-1">
              ${he}
              <input type="number" class="condition-target-attr-input" data-attr="${ee}" data-editor="${g}" value="${W}"
                style="width:45px;padding:2px 4px;border:1px solid #c0a080;border-radius:4px;font-size:11px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="0">
            </div>
          </div>`}).join("")}</div>`}if(!["hero_hp","minion_count","hand_count"].includes(k))return"";const w=a?.conditionSides||["friendly"],P=w.includes("friendly"),M=w.includes("enemy"),R=P&&M,$=a?.conditionSideLogic||"and",L=a?.conditionOperator||"=",T=a?.conditionValue??0;return`
        <div class="mt-2 space-y-2 pl-1" onclick="event.stopPropagation()">
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="checkbox" class="condition-side-check" data-side="friendly" data-editor="${g}" ${P?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              我方
            </label>
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="checkbox" class="condition-side-check" data-side="enemy" data-editor="${g}" ${M?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              敌方
            </label>
          </div>
          ${R?`
          <div class="flex items-center gap-3">
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-${g}" class="condition-logic-radio" data-editor="${g}" value="and" ${$==="and"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              与
            </label>
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-${g}" class="condition-logic-radio" data-editor="${g}" value="or" ${$==="or"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
              或
            </label>
          </div>
          `:""}
          <div class="flex flex-col items-start gap-1">
            ${["<","=",">"].map(H=>`<button class="condition-op-btn" data-op="${H}" data-editor="${g}"
                style="${L===H||(H==="<"&&L==="<="||H===">"&&L===">="||H==="="&&(L==="<="||L===">="))?"background:rgba(34,197,94,0.25);border:1px solid #22c55e;color:#22c55e;":"background:rgba(212,196,168,0.3);border:1px solid #d4c4a8;color:#8b7355;"}width:32px;height:28px;border-radius:4px;font-size:14px;font-weight:bold;cursor:pointer;">
                ${H==="<"?"＜":H==="="?"＝":"＞"}
              </button>`).join("")}
            <input type="number" class="condition-value-input" data-editor="${g}" value="${T}"
              style="width:55px;padding:2px 6px;border:1px solid #c0a080;border-radius:4px;font-size:12px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;"
              placeholder="0">
          </div>
        </div>
      `},d=()=>{const g=t();if(g==="guaranteed"||!g)return"必然触发";if(g==="d6"){const Z=a?.triggerNumbers||[];return Z.length>0&&Z.length<6?`🎲 D6（${Z.join("、")}）`:"🎲 D6"}if(g==="exists_minion"){const Z=a?.conditionMinionName?.trim(),j=a?.conditionMinionCheckName??!1,ee=a?.conditionSides||["friendly"],Y=ee.includes("friendly")&&ee.includes("enemy")?"双方":ee.includes("friendly")?"我方":"敌方",ie=a?.conditionSideLogic||"and",U=ee.includes("friendly")&&ee.includes("enemy")?ie==="and"?"均":"有一":"",W=a?.conditionMinionAttrs,he=[];if(W){const A={cost:"能量",attack:"攻击",health:"生命"};for(const B of["cost","attack","health"]){const q=W[B];if(q?.enabled){const O=q.operator||"=",J=O==="<="?"≤":O===">="?"≥":O;he.push(`${A[B]}${J}${q.value}`)}}}const de=j&&Z?`「${Z}」`:"",I=he.length?`[${he.join("、")}]`:"";return`${Y}存在随从${U}${de}${I}`}if(g==="target_attr"){const Z=a?.conditionTargetAttrs;if(!Z)return"目标属性";const j=[];for(const ee of["cost","attack","health"]){const Y=Z[ee];if(Y?.enabled){const ie=Y.operator||"=",U=ie==="<="?"≤":ie===">="?"≥":ie;j.push(`${ee==="cost"?"能量":ee==="attack"?"攻击":"生命"}${U}${Y.value}`)}}return j.length?`目标${j.join("、")}`:"目标属性"}const w={hero_hp:"英雄血量",minion_count:"随从数",hand_count:"手牌数"}[g]||g,P=a?.conditionSides||["friendly"],M=P.includes("friendly")&&P.includes("enemy")?"双方":P.includes("friendly")?"我方":"敌方",R=a?.conditionSideLogic||"and",$=P.includes("friendly")&&P.includes("enemy")?R==="and"?"均":"有一":"",L=a?.conditionOperator||"=",T=L==="<="?"≤":L===">="?"≥":L,H=a?.conditionValue??0;return`${M}${w}${$}${T}${H}`},p=g=>t()===g,c=g=>{const k=p(g),w=g==="guaranteed";return k?w?"background:rgba(34,197,94,0.25);border:2px solid #22c55e;":"background:transparent;border:2px solid #c0a080;":"background:rgba(212,196,168,0.3);border:2px solid #d4c4a8;"},h=()=>{if(!a)return[];const g=[],k=a.targets;k.length>0&&k.every(P=>P==="敌方英雄"||P==="我方英雄"),k.some(P=>P!=="敌方英雄"&&P!=="我方英雄"&&P!=="无需目标");const w=k.some(P=>P==="选择随从"||P==="自己"||P==="我方所有随从"||P==="敌方所有随从"||P==="检索随从");return k.includes("无需目标")&&(g.push("抽牌"),g.push("弃牌"),g.push("获得能量"),g.push("失去能量")),k.includes("卡牌")&&(g.push("召唤"),g.push("获得"),!b.includes("打出时")&&!b.includes("死亡时")&&g.push("变化"),g.push("属性变化")),(!k.includes("无需目标")&&!k.includes("卡牌")||k.length>1)&&(b.includes("攻击时")&&k.some(P=>["攻击目标","攻击者"].includes(P))?g.push("增加伤害"):g.push("造成伤害"),g.push("给予印记"),g.push("治愈"),w&&g.push("属性变化"),w&&g.push("给予词条")),g},f=g=>a?.targets.includes(g)??!1,u=a?.moment,b=a?.moments||(u?[u]:[]),m=g=>b.includes(g),y=a?.targets||[],x=a?.effect,v=document.querySelector(".editor-left-panel-scroll"),C=v?v.scrollTop:void 0;if(this.pendingScrollRestoration?this.pendingScrollRestoration.leftPanelScrollTop=C:C!==void 0&&C>0&&(this.pendingScrollRestoration={selector:".editor-left-panel-scroll",scrollTop:C}),this.isPortraitMode){const g=document.querySelector(".portrait-side-panel-scroll");if(g){const k=g.scrollTop;k>0&&(this.pendingScrollRestoration?this.pendingScrollRestoration.portraitScrollTop=k:this.pendingScrollRestoration={selector:".portrait-side-panel-scroll",scrollTop:k})}}if(this.app.innerHTML=`
      <div class="min-h-screen card-creator-active ${this.isPortraitMode?"flex flex-col p-2 h-auto overflow-visible":"flex flex-col items-center px-4 h-screen overflow-hidden"}" style="background: transparent;">
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
                  ${this.editingCards.map((g,k)=>`
                    <div class="card-list-item px-3 py-2 rounded-lg cursor-pointer transition-all text-sm ${this.currentCardIndex===k?"ring-2":""}"
                      data-card-index="${k}"
                      style="background: ${this.currentCardIndex===k?"rgba(111, 168, 220, 0.4)":"rgba(212, 196, 168, 0.4)"}; border: 2px solid ${this.currentCardIndex===k?"#6fa8dc":"#d4c4a8"};">
                      <div class="flex items-center justify-between">
                        <div class="flex flex-col flex-1 min-w-0">
                          <div class="font-bold text-sm truncate" style="color: ${k===0?"#5a4a3a":"#4a8a4a"};">${g.name||(k===0?"主卡":`衍生${k}`)}</div>
                          <div class="text-xs" style="color: #8b7355;">${g.type==="spell"?"✨法术":"⚔️随从"} | ${g.cost??1}费 ${g.type!=="spell"?`${g.attack??1}/${g.health??1}`:""}</div>
                        </div>
                        ${k!==0?`
                          <button class="card-list-delete-btn w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ml-2 flex-shrink-0"
                            data-card-index="${k}"
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
                  ${(this.currentCard.effects||[]).map((g,k)=>`
                    <button class="effect-tab px-2 py-1 rounded-lg font-bold text-xs transition-all ${k===this.currentEffectIndex?"ring-2":""}"
                      data-effect-index="${k}"
                      style="background: ${k===this.currentEffectIndex?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${k===this.currentEffectIndex?"#fff":"#5a4a3a"}; border: 2px solid ${k===this.currentEffectIndex?"#4a90d9":"#d4c4a8"};">
                      效果${k+1}
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
              
              ${(()=>{const g=this.currentCard.effects?.[this.currentEffectIndex];if(!g)return"";const k=g.moment||"打出时";return`
              <!-- 法术时刻选择 -->
              <div class="mb-4">
                <button id="toggle-spell-moment-btn-side" class="w-full flex items-center justify-between font-bold text-sm mb-2" style="color: #8b7355;">
                  <span>时刻</span>
                  <span class="text-lg">${this.showMomentPanel?"▼":"▶"}</span>
                </button>
                ${this.showMomentPanel?`
                <div class="space-y-1">
                  ${["打出时","下回合开始时"].map(w=>`
                    <div class="spell-moment-item p-2 rounded-lg cursor-pointer transition-all ${k===w?"selected":""}"
                      data-spell-moment="${w}"
                      style="background: ${k===w?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${k===w?"#6fa8dc":"#d4c4a8"};">
                      <div class="font-bold text-xs" style="color: #5a4a3a;">${w==="打出时"?"":Te[w]}${w}</div>
                    </div>
                  `).join("")}
                </div>
                `:`
                <div class="text-sm" style="color: #8b7355;">
                  ${k}
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
                    ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...g?.moment==="攻击时"?["target_attr"]:[]].map(w=>{const P=this.isConditionSelected(w,g),M=this.getConditionItemStyle(w,g);return`
                        <div class="spell-condition-item-side px-2 py-1 rounded-lg cursor-pointer transition-all ${P?"selected":""}"
                          data-spell-condition-side="${w}"
                          style="${M}">
                          <div class="font-bold text-xs" style="color: #5a4a3a;">${w==="guaranteed"?"必然触发":w==="d6"?"🎲 D6":w==="hero_hp"?"英雄血量":w==="minion_count"?"随从数":w==="hand_count"?"手牌数":w==="exists_minion"?"存在随从":"目标属性"}</div>
                          ${w==="d6"&&P?`
                            <div class="flex gap-1 mt-2">
                              ${[1,2,3,4,5,6].map($=>`
                                <button class="trigger-num-btn w-7 h-7 rounded text-xs font-bold ${(g.triggerNumbers||[1,2,3,4,5,6]).includes($)?"selected":""}"
                                  data-trigger-num="${$}" data-editor="spell"
                                  style="background: ${(g.triggerNumbers||[1,2,3,4,5,6]).includes($)?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"#dccfc0"}; color: ${(g.triggerNumbers||[1,2,3,4,5,6]).includes($)?"#fff":"#8b7355"}; border: 1px solid ${(g.triggerNumbers||[1,2,3,4,5,6]).includes($)?"#a08060":"#d4c4a8"};">
                                  ${$}
                                </button>
                              `).join("")}
                            </div>
                          `:""}
                          ${P?this.getConditionSubEditor("spell",g):""}
                        </div>
                      `}).join("")}
                  </div>
                `:`
                  <div class="text-sm" style="color: #8b7355;">
                    ${this.getConditionCollapsedText(g)}
                  </div>
                `}
              </div>
              
              <!-- 法术目标选择 -->
              <div class="mb-4">
                <button id="toggle-spell-target-btn-side" class="w-full flex items-center justify-between font-bold text-sm mb-2" style="color: #8b7355;">
                  <div class="flex flex-col items-start gap-1">
                    <span>目标</span>
                    ${g.targets?.length>1||g.targets?.includes("我方所有随从")||g.targets?.includes("敌方所有随从")?`
                      <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                        <input type="checkbox" id="random-target-check-spell-side" ${g.isRandomTarget?"checked":""}
                          style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                        随机
                      </label>
                      ${g.isRandomTarget?`
                        <label class="flex items-center gap-1" style="font-size: 11px; color: #a08060; font-weight: normal;">
                          次数
                          <input type="number" id="random-target-times-spell-side" value="${g.randomTargetTimes??1}" min="1" max="99"
                            style="width: 35px; height: 18px; font-size: 11px; background: rgba(255,255,255,0.5); border: 1px solid #d4c4a8; border-radius: 4px; text-align: center; color: #5a4a3a;">
                        </label>
                      `:""}
                    `:""}
                    ${g.targets?.includes("检索随从")?`
                      <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                        <input type="checkbox" id="retrieved-random-check-spell-side" ${g.targetRetrievedRandom?"checked":""}
                          style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                        检索随机
                      </label>
                    `:""}
                  </div>
                  <span class="flex items-center gap-2">
                    ${!this.showTargetPanel&&(g.targets?.includes("无需目标")||g.targets?.includes("卡牌"))?`
                      <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;" onclick="event.stopPropagation()">
                        <input type="checkbox" id="opponent-checkbox-spell-side" ${g.isOpponent?"checked":""} style="accent-color: #c4a574;">
                        <span>对手</span>
                      </label>
                    `:""}
                    <span class="text-lg">${this.showTargetPanel?"▼":"▶"}</span>
                  </span>
                </button>
                ${this.showTargetPanel?`
                <div class="space-y-1 max-h-40 overflow-y-auto target-scroll-container">
                  ${["无需目标","卡牌","选择目标","选择随从","我方英雄","敌方英雄","我方所有随从","敌方所有随从",...g?.conditionType==="exists_minion"?["检索随从"]:[]].map(w=>`
                    <div class="spell-target-item p-2 rounded-lg cursor-pointer transition-all ${g.targets?.includes(w)?"selected":""}"
                      data-spell-target="${w}"
                      style="background: ${g.targets?.includes(w)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${g.targets?.includes(w)?"#f5a623":"#d4c4a8"};">
                      <div class="font-bold text-xs" style="color: #5a4a3a;">${w}</div>
                    </div>
                  `).join("")}
                </div>
                `:`
                <div class="text-sm" style="color: #8b7355;">
                  ${g.targets?.length>0?`${g.isOpponent?"对手 ":""}${g.targets.join("、")}`:"点击展开选择"}
                </div>
                `}
              </div>
              
              ${g.targets?.length>0?`
              <!-- 法术效果选择 -->
              <div class="mb-4">
                <div class="font-bold text-sm mb-2" style="color: #8b7355;">效果</div>
                <div class="space-y-1">
                  ${(()=>{const w=g.targets||[],P=[],M=g.moments||(g.moment?[g.moment]:[]),R=w.some($=>$==="选择随从"||$==="自己"||$==="我方所有随从"||$==="敌方所有随从"||$==="检索随从");return w.includes("无需目标")&&P.push("抽牌","弃牌","获得能量","失去能量"),w.includes("卡牌")&&(P.push("召唤","获得"),!M.includes("打出时")&&!M.includes("死亡时")&&P.push("变化"),P.push("属性变化")),(!w.includes("无需目标")&&!w.includes("卡牌")||w.length>1)&&(P.push("造成伤害","给予印记","治愈"),R&&(P.push("属性变化"),P.push("给予词条"))),P.map($=>`
                      <div class="spell-effect-item p-2 rounded-lg cursor-pointer transition-all ${g.effect===$?"selected":""}"
                        data-spell-effect-type="${$}"
                        style="background: ${g.effect===$?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${g.effect===$?"#e07070":"#d4c4a8"};">
                        <div class="font-bold text-xs" style="color: #5a4a3a;">${$}</div>
                      </div>
                    `).join("")})()}
                </div>
                
                ${g.effect?`
                  <div class="mt-2 pt-2" style="border-top: 1px solid #d4c4a8;">
                    ${g.effect==="属性变化"?`
                      <div class="space-y-1">
                        ${g.targets?.includes("卡牌")?`
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-xs mr-1" style="color: #8b7355;">费:</label>
                          <input type="number" id="spell-cost-value-side" value="${g.costValue}" min="0" max="99"
                            class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-1"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="spell-cost-positive-btn-side" class="w-6 h-6 rounded font-bold text-xs ${g.costValue===0?"opacity-50":""}"
                            style="background: ${g.costValue===0?"#999":!g.isCostSet&&g.isCostPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.costValue===0?"#777":!g.isCostSet&&g.isCostPositive?"#4a8a4a":"#aaa"};">
                            +
                          </button>
                          <button id="spell-cost-zero-btn-side" class="w-6 h-6 rounded font-bold text-xs ${g.costValue===0?"":"opacity-50"}"
                            style="background: ${g.costValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.costValue===0?"#3a7ab0":"#aaa"};">
                            0
                          </button>
                          <button id="spell-cost-negative-btn-side" class="w-6 h-6 rounded font-bold text-xs ${g.costValue===0?"opacity-50":""}"
                            style="background: ${g.costValue===0?"#999":!g.isCostSet&&!g.isCostPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.costValue===0?"#777":!g.isCostSet&&!g.isCostPositive?"#a04040":"#aaa"};">
                            -
                          </button>
                          <button id="spell-cost-set-btn-side" class="w-6 h-6 rounded font-bold text-xs ${g.costValue===0?"opacity-50":""}"
                            style="background: ${g.costValue===0?"#999":g.isCostSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.costValue===0?"#777":g.isCostSet?"#b89020":"#aaa"};">
                            =
                          </button>
                        </div>
                        `:""}
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-xs mr-1" style="color: #8b7355;">攻:</label>
                          <input type="number" id="spell-attack-value-side" value="${g.attackValue}" min="0" max="99"
                            class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-1"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="spell-attack-positive-btn-side" class="w-6 h-6 rounded font-bold text-xs ${g.attackValue===0?"opacity-50":""}"
                            style="background: ${g.attackValue===0?"#999":!g.isAttackSet&&g.isAttackPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.attackValue===0?"#777":!g.isAttackSet&&g.isAttackPositive?"#4a8a4a":"#aaa"};">
                            +
                          </button>
                          <button id="spell-attack-zero-btn-side" class="w-6 h-6 rounded font-bold text-xs ${g.attackValue===0?"":"opacity-50"}"
                            style="background: ${g.attackValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.attackValue===0?"#3a7ab0":"#aaa"};">
                            0
                          </button>
                          <button id="spell-attack-negative-btn-side" class="w-6 h-6 rounded font-bold text-xs ${g.attackValue===0?"opacity-50":""}"
                            style="background: ${g.attackValue===0?"#999":!g.isAttackSet&&!g.isAttackPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.attackValue===0?"#777":!g.isAttackSet&&!g.isAttackPositive?"#a04040":"#aaa"};">
                            -
                          </button>
                          <button id="spell-attack-set-btn-side" class="w-6 h-6 rounded font-bold text-xs ${g.attackValue===0?"opacity-50":""}"
                            style="background: ${g.attackValue===0?"#999":g.isAttackSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.attackValue===0?"#777":g.isAttackSet?"#b89020":"#aaa"};">
                            =
                          </button>
                        </div>
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-xs mr-1" style="color: #8b7355;">血:</label>
                          <input type="number" id="spell-health-value-side" value="${g.healthValue}" min="0" max="99"
                            class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-1"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="spell-health-positive-btn-side" class="w-6 h-6 rounded font-bold text-xs ${g.healthValue===0?"opacity-50":""}"
                            style="background: ${g.healthValue===0?"#999":!g.isHealthSet&&g.isHealthPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.healthValue===0?"#777":!g.isHealthSet&&g.isHealthPositive?"#4a8a4a":"#aaa"};">
                            +
                          </button>
                          <button id="spell-health-zero-btn-side" class="w-6 h-6 rounded font-bold text-xs ${g.healthValue===0?"":"opacity-50"}"
                            style="background: ${g.healthValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.healthValue===0?"#3a7ab0":"#aaa"};">
                            0
                          </button>
                          <button id="spell-health-negative-btn-side" class="w-6 h-6 rounded font-bold text-xs ${g.healthValue===0?"opacity-50":""}"
                            style="background: ${g.healthValue===0?"#999":!g.isHealthSet&&!g.isHealthPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.healthValue===0?"#777":!g.isHealthSet&&!g.isHealthPositive?"#a04040":"#aaa"};">
                            -
                          </button>
                          <button id="spell-health-set-btn-side" class="w-6 h-6 rounded font-bold text-xs ${g.healthValue===0?"opacity-50":""}"
                            style="background: ${g.healthValue===0?"#999":g.isHealthSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.healthValue===0?"#777":g.isHealthSet?"#b89020":"#aaa"};">
                            =
                          </button>
                        </div>
                      </div>
                    `:x==="说话"?`
                      <div class="flex flex-col items-start gap-1">
                        <label class="font-bold text-xs" style="color: #8b7355;">说话内容:</label>
                        <input type="text" id="effect-speech-text" value="${a.speechText||""}" placeholder="输入说话内容..."
                          class="w-48 px-2 py-1 rounded-lg outline-none text-xs"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                      </div>
                    `:`
                      <div class="flex flex-col items-start gap-1">
                        <label class="font-bold text-xs" style="color: #8b7355;">数值:</label>
                        <input type="number" id="spell-effect-value-side" value="${g.value}" min="1" max="99"
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
                  ${e.map(g=>`
                    <div class="keyword-item p-2 rounded-lg cursor-pointer transition-all ${this.currentCard.keywords.some(k=>k.name===g.name)?"selected":""}"
                      data-keyword-name="${g.name}"
                      style="background: ${this.currentCard.keywords.some(k=>k.name===g.name)?"rgba(124, 184, 124, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${this.currentCard.keywords.some(k=>k.name===g.name)?"#7cb87c":"#d4c4a8"};">
                      <div class="font-bold text-xs" style="color: #5a4a3a;">${g.name}</div>
                      <div class="text-xs" style="color: #8b7355;">${g.description}</div>
                    </div>
                  `).join("")}
                  <div class="clear-keywords-btn p-2 rounded-lg cursor-pointer transition-all mt-2" 
                    style="background: rgba(200, 100, 100, 0.12); border: 2px dashed #c86464;">
                    <div class="font-bold text-xs" style="color: #c86464; text-align: center;">清空词条</div>
                  </div>
                </div>
                `:`
                <div class="text-xs" style="color: #8b7355;">
                  ${this.currentCard.keywords.length>0?this.currentCard.keywords.map(g=>g.name).join("、"):"点击▶展开"}
                </div>
                `}
              </div>
              `}
              
              <!-- 多技能效果切换 -->
              <div class="mb-3">
                <div class="font-bold text-sm mb-2" style="color: #8b7355;">技能</div>
                <div class="flex items-center gap-2 flex-wrap">
                  ${(this.currentCard.effects||[]).map((g,k)=>`
                    <button class="effect-tab px-2 py-1 rounded-lg font-bold text-xs transition-all ${k===this.currentEffectIndex?"ring-2":""}"
                      data-effect-index="${k}"
                      style="background: ${k===this.currentEffectIndex?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${k===this.currentEffectIndex?"#fff":"#5a4a3a"}; border: 2px solid ${k===this.currentEffectIndex?"#4a90d9":"#d4c4a8"};">
                      技能${k+1}
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
              
              ${r&&a?`
              <!-- 时刻选择 -->
              <div class="mb-2">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-sm" style="color: #8b7355;">时刻</span>
                </div>
                <div class="flex gap-1 flex-wrap">
                  ${["打出时","死亡时","攻击时","失去生命时","回合结束时","回合开始时","下回合开始时"].filter(g=>this.currentCardIndex===0||g!=="打出时").map(g=>`
                    <div class="moment-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${m(g)?"selected":""}"
                      data-moment="${g}"
                      style="background: ${m(g)?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${m(g)?"#6fa8dc":"#d4c4a8"};">
                      ${Te[g]+g}
                    </div>
                  `).join("")}
                </div>

              </div>
              `:""}
              
              <!-- 条件选择 -->
              ${r&&a?`
              <div class="mb-2">
                <button id="toggle-condition-spell-effect-btn" class="w-full flex items-center justify-between font-bold text-sm mb-2" style="color: #8b7355;">
                  <span>条件</span>
                  <span class="text-lg">${this.showConditionPanel?"▼":"▶"}</span>
                </button>
                ${this.showConditionPanel?`
                  <div class="space-y-1">
                    ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...a&&a.moment==="攻击时"?["target_attr"]:[]].map(g=>{const k=p(g),w=c(g);return`
                        <div class="condition-item-spell px-2 py-1 rounded-lg cursor-pointer transition-all ${k?"selected":""}"
                          data-spell-condition="${g}"
                          data-editor="spell"
                          style="${w}">
                          <div class="font-bold text-xs" style="color: #5a4a3a;">${g==="guaranteed"?"必然触发":g==="d6"?"🎲 D6":g==="hero_hp"?"英雄血量":g==="minion_count"?"随从数":g==="hand_count"?"手牌数":g==="exists_minion"?"存在随从":"目标属性"}</div>
                          ${g==="d6"&&k?`
                            <div class="flex gap-1 mt-2">
                              ${[1,2,3,4,5,6].map(M=>`
                                <button class="trigger-num-btn w-6 h-6 rounded text-xs font-bold ${(a.triggerNumbers||[1,2,3,4,5,6]).includes(M)?"selected":""}"
                                  data-trigger-num="${M}" data-editor="spell"
                                  style="background: ${(a.triggerNumbers||[1,2,3,4,5,6]).includes(M)?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"#dccfc0"}; color: ${(a.triggerNumbers||[1,2,3,4,5,6]).includes(M)?"#fff":"#8b7355"}; border: 1px solid ${(a.triggerNumbers||[1,2,3,4,5,6]).includes(M)?"#a08060":"#d4c4a8"};">
                                  ${M}
                                </button>
                              `).join("")}
                            </div>
                          `:""}
                          ${k?o("spell"):""}
                        </div>
                      `}).join("")}
                  </div>
                `:`
                  <div class="mt-1 text-sm" style="color: #8b7355;">
                    ${this.getConditionCollapsedText(a)}
                  </div>
                `}
              </div>
              `:""}
              
              <!-- 目标选择 -->
              ${b.length>0?`
              <div class="mb-2">
                <div class="flex items-center gap-2 flex-wrap mb-2">
                  <span class="font-bold text-sm" style="color: #8b7355;">目标</span>
                  ${y.length>1||y.includes("我方所有随从")||y.includes("敌方所有随从")?`
                    <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                      <input type="checkbox" id="random-target-check" ${a?.isRandomTarget?"checked":""}
                        style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                      随机
                    </label>
                  `:""}
                  ${y.includes("检索随从")?`
                    <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                      <input type="checkbox" id="retrieved-random-check" ${a?.targetRetrievedRandom?"checked":""}
                        style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                      检索随机
                    </label>
                  `:""}
                </div>
                <div class="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                  ${l().map(g=>`
                    <div class="target-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${f(g)?"selected":""}"
                      data-target="${g}"
                      style="background: ${f(g)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${f(g)?"#f5a623":"#d4c4a8"};">
                      ${g}
                    </div>
                  `).join("")}
                </div>
              </div>
              `:""}
              
              <!-- 效果选择 -->
              ${u&&y.length>0?`
              <div class="mb-2">
                <div class="font-bold text-sm mb-2" style="color: #8b7355;">效果</div>
                <div class="flex flex-wrap gap-1">
                  ${h().map(g=>`
                    <div class="effect-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${x===g?"selected":""}"
                      data-effect="${g}"
                      style="background: ${x===g?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${x===g?"#e07070":"#d4c4a8"};">
                      ${g}
                    </div>
                  `).join("")}
                </div>
                
                ${x?`
                  <div class="mt-2 pt-2" style="border-top: 2px solid #d4c4a8;">
                    ${x==="属性变化"?`
                      <div class="space-y-2">
                        ${a.targets?.includes("卡牌")?`
                          <div class="mb-1">
                            <div class="font-bold text-xs mb-1" style="color: #8b7355;">来源</div>
                            <div class="flex flex-wrap gap-1">
                              ${(()=>{const g=[{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],k=a.summonSource??"my_hand";return g.map(w=>`
                                  <div class="summon-source-btn-2 px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${k===w.key?"selected":""}"
                                    data-source="${w.key}"
                                    style="background: ${k===w.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${k===w.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                    ${w.label}
                                  </div>
                                `).join("")})()}
                            </div>
                          </div>
                          <div class="flex items-center justify-between mb-1">
                            <div class="font-bold text-xs" style="color: #8b7355;">属性变化</div>
                            <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;">
                              <input type="checkbox" id="attr-random-checkbox-2" class="cursor-pointer" ${a.isRandom?"checked":""}>
                              <span>随机</span>
                            </label>
                          </div>
                          <div class="flex items-center gap-0">
                            <label class="font-bold text-xs mr-2" style="color: #8b7355;">费用:</label>
                            <input type="number" id="effect-cost-value" value="${a.costValue}" min="0" max="99"
                              class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-2"
                              style="border: 2px solid #d4c4a8; background: #faf8f5;">
                            <button id="cost-positive-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${a.costValue===0?"opacity-50":!a.isCostSet&&a.isCostPositive?"":"opacity-50"}"
                              style="background: ${a.costValue===0?"#999":!a.isCostSet&&a.isCostPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.costValue===0?"#777":!a.isCostSet&&a.isCostPositive?"#4a8a4a":"#aaa"};">+</button>
                            <button id="cost-zero-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${a.costValue===0?"":"opacity-50"}"
                              style="background: ${a.costValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.costValue===0?"#3a7ab0":"#aaa"};">0</button>
                            <button id="cost-negative-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${a.costValue===0?"opacity-50":!a.isCostSet&&!a.isCostPositive?"":"opacity-50"}"
                              style="background: ${a.costValue===0?"#999":!a.isCostSet&&!a.isCostPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.costValue===0?"#777":!a.isCostSet&&!a.isCostPositive?"#a04040":"#aaa"};">-</button>
                            <button id="cost-set-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${a.costValue===0?"opacity-50":a.isCostSet?"":"opacity-50"}"
                              style="background: ${a.costValue===0?"#999":a.isCostSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.costValue===0?"#777":a.isCostSet?"#b89020":"#aaa"};">=</button>
                          </div>
                        `:""}
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-xs mr-2" style="color: #8b7355;">攻击:</label>
                          <input type="number" id="effect-attack-value" value="${a.attackValue}" min="0" max="99"
                            class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-2"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="attack-positive-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${a.attackValue===0?"opacity-50":!a.isAttackSet&&a.isAttackPositive?"":"opacity-50"}"
                            style="background: ${a.attackValue===0?"#999":!a.isAttackSet&&a.isAttackPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.attackValue===0?"#777":!a.isAttackSet&&a.isAttackPositive?"#4a8a4a":"#aaa"};">+</button>
                          <button id="attack-zero-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${a.attackValue===0?"":"opacity-50"}"
                            style="background: ${a.attackValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.attackValue===0?"#3a7ab0":"#aaa"};">0</button>
                          <button id="attack-negative-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${a.attackValue===0?"opacity-50":!a.isAttackSet&&!a.isAttackPositive?"":"opacity-50"}"
                            style="background: ${a.attackValue===0?"#999":!a.isAttackSet&&!a.isAttackPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.attackValue===0?"#777":!a.isAttackSet&&!a.isAttackPositive?"#a04040":"#aaa"};">-</button>
                          <button id="attack-set-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${a.attackValue===0?"opacity-50":a.isAttackSet?"":"opacity-50"}"
                            style="background: ${a.attackValue===0?"#999":a.isAttackSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.attackValue===0?"#777":a.isAttackSet?"#b89020":"#aaa"};">=</button>
                        </div>
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-xs mr-2" style="color: #8b7355;">血量:</label>
                          <input type="number" id="effect-health-value" value="${a.healthValue}" min="0" max="99"
                            class="w-12 px-1 py-1 rounded-lg outline-none text-center text-xs mr-2"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="health-positive-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${a.healthValue===0?"opacity-50":!a.isHealthSet&&a.isHealthPositive?"":"opacity-50"}"
                            style="background: ${a.healthValue===0?"#999":!a.isHealthSet&&a.isHealthPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.healthValue===0?"#777":!a.isHealthSet&&a.isHealthPositive?"#4a8a4a":"#aaa"};">+</button>
                          <button id="health-zero-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${a.healthValue===0?"":"opacity-50"}"
                            style="background: ${a.healthValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.healthValue===0?"#3a7ab0":"#aaa"};">0</button>
                          <button id="health-negative-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${a.healthValue===0?"opacity-50":!a.isHealthSet&&!a.isHealthPositive?"":"opacity-50"}"
                            style="background: ${a.healthValue===0?"#999":!a.isHealthSet&&!a.isHealthPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.healthValue===0?"#777":!a.isHealthSet&&!a.isHealthPositive?"#a04040":"#aaa"};">-</button>
                          <button id="health-set-btn" class="w-6 h-6 rounded-lg font-bold text-xs ${a.healthValue===0?"opacity-50":a.isHealthSet?"":"opacity-50"}"
                            style="background: ${a.healthValue===0?"#999":a.isHealthSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.healthValue===0?"#777":a.isHealthSet?"#b89020":"#aaa"};">=</button>
                        </div>
                      </div>
                    `:x==="给予词条"?`
                      <div class="space-y-2">
                        <div class="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                          ${Object.values($e).filter(g=>g.name!=="准备").map(g=>{const k=a.grantedKeywordName===g.name,w=["🔥","❄️","⚡️"].includes(g.name);return`
                              <div class="grant-keyword-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${k?"selected":""}"
                                data-grant-keyword="${g.name}"
                                style="background: ${k?"rgba(139, 115, 85, 0.35)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${k?"#8b7355":"#d4c4a8"}; font-size: ${w?"14px":"11px"};">
                                ${g.name}
                              </div>
                            `}).join("")}
                        </div>
                        ${a.grantedKeywordName==="护甲"?`
                          <div class="flex flex-col items-start gap-1">
                            <label class="font-bold text-xs" style="color: #8b7355;">护甲值:</label>
                            <input type="number" id="grant-keyword-value" value="${a.grantedKeywordValue??1}" min="1" max="99"
                              class="w-14 px-1 py-1 rounded-lg outline-none text-center text-xs"
                              style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          </div>
                        `:""}
                      </div>
                    `:x==="说话"?`
                      <div class="flex flex-col items-start gap-1">
                        <label class="font-bold text-xs" style="color: #8b7355;">说话内容:</label>
                        <input type="text" id="effect-speech-text" value="${a.speechText||""}" placeholder="输入说话内容..."
                          class="w-48 px-2 py-1 rounded-lg outline-none text-xs"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                      </div>
                    `:`
                      <div class="flex flex-col items-start gap-1">
                        <label class="font-bold text-xs" style="color: #8b7355;">数值:</label>
                        <input type="number" id="effect-value" value="${a.value}" min="1" max="99"
                          class="w-14 px-1 py-1 rounded-lg outline-none text-center text-xs"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                      </div>
                    `}
                    ${["召唤","获得","变化"].includes(x)||x==="属性变化"&&a.targets?.includes("卡牌")?`
                      <div class="mt-2">
                        <div class="mb-1">
                          <div class="font-bold text-xs mb-1" style="color: #8b7355;">来源</div>
                          <div class="flex flex-wrap gap-1">
                            ${(()=>{const g=[{key:"derived",label:"衍生卡"},{key:"deck_top",label:"抽牌堆顶"},{key:"discard_top",label:"弃牌堆顶"},{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],k=a.summonSource??"derived";return g.map(w=>`
                                <div class="summon-source-btn px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${k===w.key?"selected":""}"
                                  data-source="${w.key}"
                                  style="background: ${k===w.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${k===w.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                  ${w.label}
                                </div>
                              `).join("")})()}
                          </div>
                        </div>
                        <div class="flex items-center justify-between mb-1">
                          <div class="font-bold text-xs" style="color: #8b7355;">${x==="召唤"?"召唤卡牌":x==="获得"?"获得卡牌":"变化为"}</div>
                          <div class="flex flex-col items-start gap-1">
                            <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;">
                              <input type="checkbox" id="summon-random-checkbox" class="cursor-pointer" ${a.isRandom?"checked":""}>
                              <span>随机</span>
                            </label>
                            ${x==="召唤"||x==="获得"?`
                            <div class="flex items-center gap-1">
                              <span class="text-xs" style="color: #8b7355;">数量</span>
                              <input type="number" id="summon-count-input" value="${a.value||1}" min="1" max="99"
                                class="w-12 h-6 text-center text-xs border rounded"
                                style="background: rgba(212, 196, 168, 0.2); border-color: #d4c4a8; color: #5a4a3a;">
                            </div>
                            `:""}
                          </div>
                        </div>
                        ${(a.summonSource??"derived")==="derived"?`
                        <div class="flex flex-col gap-1 max-h-24 overflow-y-auto">
                          ${(()=>{const g=a.isRandom?a.summonedCardIndices??[]:a.summonedCardIndex!==void 0?[a.summonedCardIndex]:[];return this.editingCards.map((w,P)=>{if((x==="变化"||x==="召唤")&&w.type==="spell"||x==="变化"&&P===this.currentCardIndex||x==="召唤"&&b.includes("打出时")&&P===this.currentCardIndex)return null;const M=g.includes(P);return`
                                <div class="summon-card-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${M?"selected":""}"
                                  data-summon-index="${P}"
                                  style="background: ${M?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${M?"#6fa8dc":"#d4c4a8"};">
                                  ${w.name||"未命名"}
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
                ${this.editingCards.map((g,k)=>`
                  <div class="card-list-item px-3 py-2 rounded-lg cursor-pointer transition-all text-sm ${this.currentCardIndex===k?"ring-2":""}"
                    data-card-index="${k}"
                    style="background: ${this.currentCardIndex===k?"rgba(111, 168, 220, 0.4)":"rgba(212, 196, 168, 0.4)"}; border: 2px solid ${this.currentCardIndex===k?"#6fa8dc":"#d4c4a8"};">
                    <div class="flex items-center justify-between">
                      <div class="flex flex-col flex-1 min-w-0">
                        <div class="font-bold text-sm truncate" style="color: ${k===0?"#5a4a3a":"#4a8a4a"};">${g.name||(k===0?"主卡":`衍生${k}`)}</div>
                        <div class="text-xs" style="color: #8b7355;">${g.type==="spell"?"✨法术":"⚔️随从"} | ${g.cost??1}费 ${g.type!=="spell"?`${g.attack??1}/${g.health??1}`:""}</div>
                      </div>
                      ${k!==0?`
                        <button class="card-list-delete-btn w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ml-2 flex-shrink-0"
                          data-card-index="${k}"
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
                ${(this.currentCard.effects||[]).map((g,k)=>`
                  <button class="effect-tab px-3 py-1 rounded-lg font-bold text-sm transition-all ${k===this.currentEffectIndex?"ring-2":""}"
                    data-effect-index="${k}"
                    style="background: ${k===this.currentEffectIndex?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${k===this.currentEffectIndex?"#fff":"#5a4a3a"}; border: 2px solid ${k===this.currentEffectIndex?"#4a90d9":"#d4c4a8"};">
                    效果${k+1}
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
            
            ${(()=>{const g=this.currentCard.effects?.[this.currentEffectIndex];if(!g)return"";const k=g.moment||"打出时";return`
              <!-- 法术时刻选择 -->
              <div class="p-2" style="border-bottom: 1px solid #c0a080;">
                <button id="toggle-spell-moment-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <span>时刻</span>
                <span class="text-lg">${this.showMomentPanel?"▼":"▶"}</span>
              </button>
              ${this.showMomentPanel?`
                <div class="mt-2 space-y-1">
                  ${["打出时","下回合开始时"].map(w=>`
                    <div class="spell-moment-item p-2 rounded-lg cursor-pointer transition-all ${k===w?"selected":""}"
                      data-spell-moment="${w}"
                      style="background: ${k===w?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${k===w?"#6fa8dc":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${w==="打出时"?"":Te[w]}${w}</div>
                    </div>
                  `).join("")}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${k==="打出时"?"打出时":`${Te[k]}${k}`}
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
                    ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...g?.moment==="攻击时"?["target_attr"]:[]].map(w=>{const P=this.isConditionSelected(w,g),M=this.getConditionItemStyle(w,g);return`
                        <div class="spell-condition-item px-2 py-1 rounded-lg cursor-pointer transition-all ${P?"selected":""}"
                          data-spell-condition="${w}"
                          style="${M}">
                          <div class="font-bold text-xs" style="color: #5a4a3a;">${w==="guaranteed"?"必然触发":w==="d6"?"🎲 D6":w==="hero_hp"?"英雄血量":w==="minion_count"?"随从数":w==="hand_count"?"手牌数":w==="exists_minion"?"存在随从":"目标属性"}</div>
                          ${w==="d6"&&P?`
                            <div class="flex gap-1 mt-2">
                              ${[1,2,3,4,5,6].map($=>`
                                <button class="trigger-num-btn w-7 h-7 rounded text-xs font-bold ${(g.triggerNumbers||[1,2,3,4,5,6]).includes($)?"selected":""}"
                                  data-trigger-num="${$}" data-editor="spell"
                                  style="background: ${(g.triggerNumbers||[1,2,3,4,5,6]).includes($)?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"#dccfc0"}; color: ${(g.triggerNumbers||[1,2,3,4,5,6]).includes($)?"#fff":"#8b7355"}; border: 1px solid ${(g.triggerNumbers||[1,2,3,4,5,6]).includes($)?"#a08060":"#d4c4a8"};">
                                  ${$}
                                </button>
                              `).join("")}
                            </div>
                          `:""}
                          ${P?this.getConditionSubEditor("spell",g):""}
                        </div>
                      `}).join("")}
                  </div>
                `:`
                  <div class="mt-1 text-sm" style="color: #8b7355;">
                    ${this.getConditionCollapsedText(g)}
                  </div>
                `}
              </div>
            
              <!-- 法术目标选择 -->
              <div class="p-2" style="border-bottom: 1px solid #c0a080;">
                <button id="toggle-spell-target-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <div class="flex flex-col items-start gap-1">
                  <span>目标</span>
                  ${g.targets?.length>1||g.targets?.includes("我方所有随从")||g.targets?.includes("敌方所有随从")?`
                    <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                      <input type="checkbox" id="random-target-check-spell" ${g.isRandomTarget?"checked":""}
                        style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                      随机
                    </label>
                    ${g.isRandomTarget?`
                      <label class="flex items-center gap-1" style="font-size: 11px; color: #a08060; font-weight: normal;">
                        次数
                        <input type="number" id="random-target-times-spell" value="${g.randomTargetTimes??1}" min="1" max="99"
                          style="width: 35px; height: 18px; font-size: 11px; background: rgba(255,255,255,0.5); border: 1px solid #d4c4a8; border-radius: 4px; text-align: center; color: #5a4a3a;">
                      </label>
                    `:""}
                  `:""}
                  ${g.targets?.includes("检索随从")?`
                    <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                      <input type="checkbox" id="retrieved-random-check-spell" ${g.targetRetrievedRandom?"checked":""}
                        style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                      检索随机
                    </label>
                  `:""}
                </div>
                <span class="flex items-center gap-2">
                  ${!this.showTargetPanel&&(g.targets?.includes("无需目标")||g.targets?.includes("卡牌"))?`
                    <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;" onclick="event.stopPropagation()">
                      <input type="checkbox" id="opponent-checkbox-spell" ${g.isOpponent?"checked":""} style="accent-color: #c4a574;">
                      <span>对手</span>
                    </label>
                  `:""}
                  <span class="text-lg">${this.showTargetPanel?"▼":"▶"}</span>
                </span>
              </button>
              ${this.showTargetPanel?`
                <div class="mt-2 space-y-1 max-h-40 overflow-y-auto target-scroll-container">
                  ${["无需目标","卡牌","选择目标","选择随从","我方英雄","敌方英雄","我方所有随从","敌方所有随从",...g?.conditionType==="exists_minion"?["检索随从"]:[]].map(w=>`
                    <div class="spell-target-item p-2 rounded-lg cursor-pointer transition-all ${g.targets?.includes(w)?"selected":""}"
                      data-spell-target="${w}"
                      style="background: ${g.targets?.includes(w)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${g.targets?.includes(w)?"#f5a623":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${w}</div>
                    </div>
                  `).join("")}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${g.targets?.length>0?`${g.isOpponent?"对手 ":""}${g.targets.join("、")}`:"点击展开选择"}
                </div>
              `}
              </div>
            
            ${g.targets?.length>0?`
              <!-- 法术效果选择 -->
              <div class="p-2">
                <button id="toggle-spell-effect-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <span>效果</span>
                <span class="text-lg">${this.showEffectPanel?"▼":"▶"}</span>
              </button>
              ${this.showEffectPanel?`
                <div class="mt-2 space-y-1">
                  ${(()=>{const w=g.targets||[],P=[],M=g.moments||(g.moment?[g.moment]:[]),R=w.some($=>$==="选择随从"||$==="自己"||$==="我方所有随从"||$==="敌方所有随从"||$==="检索随从");return w.includes("无需目标")&&P.push("抽牌","弃牌","获得能量","失去能量"),w.includes("卡牌")&&(P.push("召唤","获得"),!M.includes("打出时")&&!M.includes("死亡时")&&P.push("变化"),P.push("属性变化")),(!w.includes("无需目标")&&!w.includes("卡牌")||w.length>1)&&(P.push("造成伤害","给予印记","治愈"),R&&(P.push("属性变化"),P.push("给予词条"))),P.map($=>`
                      <div class="spell-effect-item p-2 rounded-lg cursor-pointer transition-all ${g.effect===$?"selected":""}"
                        data-spell-effect-type="${$}"
                        style="background: ${g.effect===$?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${g.effect===$?"#e07070":"#d4c4a8"};">
                        <div class="font-bold text-sm" style="color: #5a4a3a;">${$}</div>
                      </div>
                    `).join("")})()}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${g.effect||"点击展开选择"}
                </div>
              `}
              
              <!-- 效果数值（选中效果后始终显示在折叠栏下方） -->
              ${g.effect?`
                <div class="mt-3 pt-3" style="border-top: 2px solid #d4c4a8;">
                  ${g.effect==="属性变化"?`
                    <div class="space-y-2">
                      ${g.targets?.includes("卡牌")?`
                      <div class="flex items-center gap-0">
                        <label class="font-bold text-sm mr-2" style="color: #8b7355;">费用:</label>
                        <input type="number" id="spell-cost-value" value="${g.costValue}" min="0" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        <button id="spell-cost-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${g.costValue===0?"opacity-50":""}"
                          style="background: ${g.costValue===0?"#999":!g.isCostSet&&g.isCostPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.costValue===0?"#777":!g.isCostSet&&g.isCostPositive?"#4a8a4a":"#aaa"};">
                          +
                        </button>
                        <button id="spell-cost-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${g.costValue===0?"":"opacity-50"}"
                          style="background: ${g.costValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.costValue===0?"#3a7ab0":"#aaa"};">
                          0
                        </button>
                        <button id="spell-cost-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${g.costValue===0?"opacity-50":""}"
                          style="background: ${g.costValue===0?"#999":!g.isCostSet&&!g.isCostPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.costValue===0?"#777":!g.isCostSet&&!g.isCostPositive?"#a04040":"#aaa"};">
                          -
                        </button>
                        <button id="spell-cost-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${g.costValue===0?"opacity-50":""}"
                          style="background: ${g.costValue===0?"#999":g.isCostSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.costValue===0?"#777":g.isCostSet?"#b89020":"#aaa"};">
                          =
                        </button>
                      </div>
                      `:""}
                      <div class="flex items-center gap-0">
                        <label class="font-bold text-sm mr-2" style="color: #8b7355;">攻击:</label>
                        <input type="number" id="spell-attack-value" value="${g.attackValue}" min="0" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        <button id="spell-attack-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${g.attackValue===0?"opacity-50":""}"
                          style="background: ${g.attackValue===0?"#999":!g.isAttackSet&&g.isAttackPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.attackValue===0?"#777":!g.isAttackSet&&g.isAttackPositive?"#4a8a4a":"#aaa"};">
                          +
                        </button>
                        <button id="spell-attack-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${g.attackValue===0?"":"opacity-50"}"
                          style="background: ${g.attackValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.attackValue===0?"#3a7ab0":"#aaa"};">
                          0
                        </button>
                        <button id="spell-attack-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${g.attackValue===0?"opacity-50":""}"
                          style="background: ${g.attackValue===0?"#999":!g.isAttackSet&&!g.isAttackPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.attackValue===0?"#777":!g.isAttackSet&&!g.isAttackPositive?"#a04040":"#aaa"};">
                          -
                        </button>
                        <button id="spell-attack-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${g.attackValue===0?"opacity-50":""}"
                          style="background: ${g.attackValue===0?"#999":g.isAttackSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.attackValue===0?"#777":g.isAttackSet?"#b89020":"#aaa"};">
                          =
                        </button>
                      </div>
                      <div class="flex items-center gap-0">
                        <label class="font-bold text-sm mr-2" style="color: #8b7355;">生命:</label>
                        <input type="number" id="spell-health-value" value="${g.healthValue}" min="0" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        <button id="spell-health-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${g.healthValue===0?"opacity-50":""}"
                          style="background: ${g.healthValue===0?"#999":!g.isHealthSet&&g.isHealthPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.healthValue===0?"#777":!g.isHealthSet&&g.isHealthPositive?"#4a8a4a":"#aaa"};">
                          +
                        </button>
                        <button id="spell-health-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${g.healthValue===0?"":"opacity-50"}"
                          style="background: ${g.healthValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.healthValue===0?"#3a7ab0":"#aaa"};">
                          0
                        </button>
                        <button id="spell-health-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${g.healthValue===0?"opacity-50":""}"
                          style="background: ${g.healthValue===0?"#999":!g.isHealthSet&&!g.isHealthPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.healthValue===0?"#777":!g.isHealthSet&&!g.isHealthPositive?"#a04040":"#aaa"};">
                          -
                        </button>
                        <button id="spell-health-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${g.healthValue===0?"opacity-50":""}"
                          style="background: ${g.healthValue===0?"#999":g.isHealthSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${g.healthValue===0?"#777":g.isHealthSet?"#b89020":"#aaa"};">
                          =
                        </button>
                      </div>
                    </div>
                  `:g.effect==="说话"?`
                    <div class="flex flex-col items-start gap-1">
                      <label class="font-bold text-sm" style="color: #8b7355;">说话内容:</label>
                      <input type="text" id="spell-effect-speech-text" value="${g.speechText||""}" placeholder="输入说话内容..."
                        class="w-48 px-2 py-1 rounded-lg outline-none text-xs"
                        style="border: 2px solid #d4c4a8; background: #faf8f5;">
                    </div>
                  `:`
                    <div class="flex flex-col items-start gap-1">
                      <label class="font-bold text-sm" style="color: #8b7355;">数值:</label>
                      <input type="number" id="spell-effect-value" value="${g.value}" min="1" max="99"
                        class="w-16 px-2 py-1 rounded-lg outline-none text-center text-sm"
                        style="border: 2px solid #d4c4a8; background: #faf8f5;">
                    </div>
                  `}
                  ${g.effect==="造成伤害"?`
                    <div class="flex flex-col items-start gap-1">
                      <label class="font-bold text-sm" style="color: #8b7355;">元素:</label>
                      <div class="flex gap-1">
                        <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${g.elementType?"":"selected"}"
                          data-element-type="" data-spell="1"
                          style="background: ${g.elementType?"rgba(212, 196, 168, 0.2)":"rgba(212, 196, 168, 0.6)"}; border: 2px solid ${g.elementType?"transparent":"#d4c4a8"};">
                          无
                        </div>
                        <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${g.elementType==="fire"?"selected":""}"
                          data-element-type="fire" data-spell="1"
                          style="background: ${g.elementType==="fire"?"rgba(255, 140, 0, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${g.elementType==="fire"?"#ff8c00":"transparent"};">
                          🔥
                        </div>
                        <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${g.elementType==="ice"?"selected":""}"
                          data-element-type="ice" data-spell="1"
                          style="background: ${g.elementType==="ice"?"rgba(100, 180, 255, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${g.elementType==="ice"?"#64b4ff":"transparent"};">
                          ❄️
                        </div>
                        <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${g.elementType==="lightning"?"selected":""}"
                          data-element-type="lightning" data-spell="1"
                          style="background: ${g.elementType==="lightning"?"rgba(160, 80, 255, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${g.elementType==="lightning"?"#a050ff":"transparent"};">
                          ⚡️
                        </div>
                      </div>
                    </div>
                  `:""}
                  ${["召唤","获得","变化"].includes(g.effect)||g.effect==="属性变化"&&g.targets?.includes("卡牌")?`
                    <div class="mt-2">
                      <div class="mb-1">
                        <div class="font-bold text-sm mb-1" style="color: #8b7355;">来源</div>
                        <div class="flex flex-wrap gap-1">
                          ${(()=>{const w=g.effect==="属性变化"?[{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}]:[{key:"derived",label:"衍生卡"},{key:"deck_top",label:"抽牌堆顶"},{key:"discard_top",label:"弃牌堆顶"},{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],P=g.effect==="属性变化"?g.summonSource??"my_hand":g.summonSource??"derived";return w.map(M=>`
                              <div class="spell-summon-source-btn px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${P===M.key?"selected":""}"
                                data-source="${M.key}"
                                style="background: ${P===M.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${P===M.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                ${M.label}
                              </div>
                            `).join("")})()}
                        </div>
                      </div>
                      <div class="flex items-center justify-between mb-1">
                        <div class="font-bold text-sm" style="color: #8b7355;">${g.effect==="属性变化"?"卡牌属性变化":g.effect==="召唤"?"召唤卡牌":g.effect==="获得"?"获得卡牌":"变化为"}</div>
                        <div class="flex flex-col items-start gap-1">
                          <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;">
                            <input type="checkbox" id="spell-summon-random-checkbox" class="cursor-pointer" ${g.isRandom?"checked":""}>
                            <span>随机</span>
                          </label>
                          ${g.effect==="召唤"||g.effect==="获得"?`
                          <div class="flex items-center gap-1">
                            <span class="text-xs" style="color: #8b7355;">数量</span>
                            <input type="number" id="spell-summon-count-input" value="${g.value||1}" min="1" max="99"
                              class="w-12 h-6 text-center text-xs border rounded"
                              style="background: rgba(212, 196, 168, 0.2); border-color: #d4c4a8; color: #5a4a3a;">
                          </div>
                          `:""}
                        </div>
                      </div>
                      ${g.effect!=="属性变化"&&(g.summonSource??"derived")==="derived"?`
                      <div class="flex flex-col gap-1 max-h-24 overflow-y-auto">
                        ${(()=>{const w=g.isRandom?g.summonedCardIndices??[]:g.summonedCardIndex!==void 0?[g.summonedCardIndex]:[];return this.editingCards.map((M,R)=>{if((g.effect==="变化"||g.effect==="召唤")&&M.type==="spell"||g.effect==="变化"&&R===this.currentCardIndex||g.effect==="召唤"&&Fe(g,"打出时")&&R===this.currentCardIndex)return null;const $=w.includes(R);return`
                              <div class="spell-summon-card-item px-2 py-1 rounded-lg cursor-pointer transition-all text-sm ${$?"selected":""}"
                                data-spell-summon-index="${R}"
                                style="background: ${$?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${$?"#6fa8dc":"#d4c4a8"};">
                                ${M.name||"未命名"}
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
                  ${e.map(g=>`
                    <div class="keyword-item p-2 rounded-lg cursor-pointer transition-all ${this.currentCard.keywords.some(k=>k.name===g.name)?"selected":""}"
                      data-keyword-name="${g.name}"
                      style="background: ${this.currentCard.keywords.some(k=>k.name===g.name)?"rgba(124, 184, 124, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${this.currentCard.keywords.some(k=>k.name===g.name)?"#7cb87c":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${g.name}</div>
                      <div class="text-xs" style="color: #8b7355;">${g.description}</div>
                    </div>
                  `).join("")}
                  <div class="clear-keywords-btn p-2 rounded-lg cursor-pointer transition-all mt-2" 
                    style="background: rgba(200, 100, 100, 0.12); border: 2px dashed #c86464;">
                    <div class="font-bold text-sm" style="color: #c86464; text-align: center;">清空词条</div>
                  </div>
                </div>
              `:`
                <div class="mt-2 text-sm" style="color: #8b7355;">
                  ${this.currentCard.keywords.length>0?this.currentCard.keywords.map(g=>g.name).join("、"):"点击展开选择"}
                </div>
              `}
            </div>
            <!-- 随从效果编辑统一容器 -->
            <div class="p-3 rounded-xl" style="background: rgba(255, 255, 255, 0.9); border: 2px solid #c0a080;">
              <!-- 多技能效果切换 -->
              <div class="p-2" style="border-bottom: 1px solid #c0a080;">
              <div class="flex items-center gap-2 flex-wrap">
                ${(this.currentCard.effects||[]).map((g,k)=>`
                  <button class="effect-tab px-3 py-1 rounded-lg font-bold text-sm transition-all ${k===this.currentEffectIndex?"ring-2":""}"
                    data-effect-index="${k}"
                    style="background: ${k===this.currentEffectIndex?"linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%)":"rgba(212, 196, 168, 0.5)"}; color: ${k===this.currentEffectIndex?"#fff":"#5a4a3a"}; border: 2px solid ${k===this.currentEffectIndex?"#4a90d9":"#d4c4a8"};">
                    技能${k+1}${g.moment?`(${g.moment})`:""}
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
            
            ${r&&a?`
            <!-- 时刻选择框 -->
            <div class="p-2" style="border-bottom: 1px solid #c0a080;">
              <button id="toggle-moment-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <span>时刻</span>
                <span class="text-lg">${this.showMomentPanel?"▼":"▶"}</span>
              </button>
              ${this.showMomentPanel?`
                <div class="mt-2 space-y-1">
                  ${["打出时","死亡时","攻击时","失去生命时","回合结束时","回合开始时","下回合开始时"].filter(g=>this.currentCardIndex===0||g!=="打出时").map(g=>`
                    <div class="moment-item p-2 rounded-lg cursor-pointer transition-all ${m(g)?"selected":""}"
                      data-moment="${g}"
                      style="background: ${m(g)?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${m(g)?"#6fa8dc":"#d4c4a8"};">
                      <div class="font-bold text-xs" style="color: #5a4a3a;">${Te[g]+g}</div>
                    </div>
                  `).join("")}
                </div>
                ${b.includes("⚙️变量变化时")?`
                <div class="flex items-center gap-2 mt-2 flex-wrap">
                  <button id="variable-select-btn-lg" class="px-2 py-1 rounded-lg text-xs font-bold cursor-pointer"
                    style="background: rgba(180,180,180,0.4); color: #666; border: 1px solid #bbb;">
                    🔧 ${a?.variableChange?.variable?Vt[a.variableChange.variable]:"选择变量"}
                  </button>
                  <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #8b7355;" onclick="event.stopPropagation()">
                    <input type="checkbox" id="var-increase-check" ${a?.variableChange?.increase!==!1?"checked":""}
                      style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                    增加
                  </label>
                  <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #8b7355;" onclick="event.stopPropagation()">
                    <input type="checkbox" id="var-decrease-check" ${a?.variableChange?.decrease!==!1?"checked":""}
                      style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                    减少
                  </label>
                </div>
                `:""}
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${b.length>0?b.map(g=>Te[g]).join("")+b.join(""):"点击展开选择"}
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
                  ${["guaranteed","d6","hero_hp","minion_count","hand_count","exists_minion",...a&&a.moment==="攻击时"?["target_attr"]:[]].map(g=>{const k=p(g),w=c(g);return`
                      <div class="condition-item p-2 rounded-lg cursor-pointer transition-all ${k?"selected":""}"
                        data-condition="${g}"
                        data-editor="minion"
                        style="${w}">
                        <div class="font-bold text-sm" style="color: #5a4a3a;">${g==="guaranteed"?"必然触发":g==="d6"?"🎲 D6":g==="hero_hp"?"英雄血量":g==="minion_count"?"随从数":g==="hand_count"?"手牌数":g==="exists_minion"?"存在随从":"目标属性"}</div>
                        ${g==="d6"&&k?`
                          <div class="flex gap-1 mt-2">
                            ${[1,2,3,4,5,6].map(M=>`
                              <button class="trigger-num-btn w-7 h-7 rounded text-xs font-bold ${(a.triggerNumbers||[1,2,3,4,5,6]).includes(M)?"selected":""}"
                                data-trigger-num="${M}" data-editor="minion"
                                style="background: ${(a.triggerNumbers||[1,2,3,4,5,6]).includes(M)?"linear-gradient(135deg, #c0a080 0%, #a08060 100%)":"#dccfc0"}; color: ${(a.triggerNumbers||[1,2,3,4,5,6]).includes(M)?"#fff":"#8b7355"}; border: 1px solid ${(a.triggerNumbers||[1,2,3,4,5,6]).includes(M)?"#a08060":"#d4c4a8"};">
                                ${M}
                              </button>
                            `).join("")}
                          </div>
                        `:""}
                        ${k?o("minion"):""}
                      </div>
                    `}).join("")}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${d()}
                </div>
              `}
            </div>
            
            <!-- 目标选择框（递进出现） -->
            ${u?`
            <div class="p-2" style="border-bottom: 1px solid #c0a080;">
              <button id="toggle-target-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <div class="flex flex-col items-start gap-1">
                  <span>目标</span>
                  ${y.includes("无需目标")||y.includes("卡牌")?`
                    <label class="opponent-label flex items-center gap-1 cursor-pointer ml-2" style="font-size: 11px; color: #c4a574; font-weight: normal;">
                      <input type="checkbox" id="opponent-target-check" ${a?.isOpponent?"checked":""}
                        style="width: 13px; height: 13px; accent-color: #c4a574; cursor: pointer;">
                      对手
                    </label>
                  `:""}
                  ${y.length>1||y.includes("我方所有随从")||y.includes("敌方所有随从")?`
                    <label class="random-target-label flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                      <input type="checkbox" id="random-target-check" ${a?.isRandomTarget?"checked":""}
                        style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                      随机
                    </label>
                  `:""}
                  ${y.includes("检索随从")?`
                    <label class="flex items-center gap-1 cursor-pointer" style="font-size: 11px; color: #a08060; font-weight: normal;">
                      <input type="checkbox" id="retrieved-random-check" ${a?.targetRetrievedRandom?"checked":""}
                        style="width: 13px; height: 13px; accent-color: #8b7355; cursor: pointer;">
                      检索随机
                    </label>
                  `:""}
                </div>
                <span class="text-lg">${this.showTargetPanel?"▼":"▶"}</span>
              </button>
              ${this.showTargetPanel?`
                <div class="mt-2 space-y-1 max-h-40 overflow-y-auto target-scroll-container">
                  ${l().map(g=>`
                    <div class="target-item p-2 rounded-lg cursor-pointer transition-all ${f(g)?"selected":""}"
                      data-target="${g}"
                      style="background: ${f(g)?"rgba(245, 166, 35, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${f(g)?"#f5a623":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${g}</div>
                    </div>
                  `).join("")}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${y.length>0?y.join("、"):"点击展开选择"}
                </div>
              `}
            </div>
            `:""}
            
            <!-- 效果选择框（递进出现） -->
            ${u&&y.length>0?`
              <div class="p-2">
              <button id="toggle-effect-btn" class="w-full flex items-center justify-between font-bold text-xs" style="color: #8b7355;">
                <span>效果</span>
                <span class="text-lg">${this.showEffectPanel?"▼":"▶"}</span>
              </button>
              ${this.showEffectPanel?`
                <div class="mt-2 space-y-1">
                  ${h().map(g=>`
                    <div class="effect-item p-2 rounded-lg cursor-pointer transition-all ${x===g?"selected":""}"
                      data-effect="${g}"
                      style="background: ${x===g?"rgba(224, 112, 112, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${x===g?"#e07070":"#d4c4a8"};">
                      <div class="font-bold text-sm" style="color: #5a4a3a;">${g}</div>
                    </div>
                  `).join("")}
                </div>
              `:`
                <div class="mt-1 text-sm" style="color: #8b7355;">
                  ${x||"点击展开选择"}
                </div>
              `}
              
              <!-- 效果数值（选中效果后始终显示在折叠栏下方） -->
              ${x?`
                <div class="mt-3 pt-3" style="border-top: 2px solid #d4c4a8;">
                  ${x==="属性变化"?`
                    <div class="space-y-2">
                      ${a.targets?.includes("卡牌")?`
                        <div class="mb-1">
                          <div class="font-bold text-sm mb-1" style="color: #8b7355;">来源</div>
                          <div class="flex flex-wrap gap-1">
                            ${(()=>{const g=[{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],k=a.summonSource??"my_hand";return g.map(w=>`
                                <div class="summon-source-btn-2 px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${k===w.key?"selected":""}"
                                  data-source="${w.key}"
                                  style="background: ${k===w.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${k===w.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                  ${w.label}
                                </div>
                              `).join("")})()}
                          </div>
                        </div>
                        <div class="flex items-center justify-between mb-1">
                          <div class="font-bold text-sm" style="color: #8b7355;">属性变化</div>
                          <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;">
                            <input type="checkbox" id="attr-random-checkbox-2" class="cursor-pointer" ${a.isRandom?"checked":""}>
                            <span>随机</span>
                          </label>
                        </div>
                        <div class="flex items-center gap-0">
                          <label class="font-bold text-sm mr-2" style="color: #8b7355;">费用:</label>
                          <input type="number" id="effect-cost-value" value="${a.costValue}" min="0" max="99"
                            class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                          <button id="cost-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${a.costValue===0?"opacity-50":!a.isCostSet&&a.isCostPositive?"":"opacity-50"}"
                            style="background: ${a.costValue===0?"#999":!a.isCostSet&&a.isCostPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.costValue===0?"#777":!a.isCostSet&&a.isCostPositive?"#4a8a4a":"#aaa"};">
                            +
                          </button>
                          <button id="cost-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${a.costValue===0?"":"opacity-50"}"
                            style="background: ${a.costValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.costValue===0?"#3a7ab0":"#aaa"};">
                            0
                          </button>
                          <button id="cost-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${a.costValue===0?"opacity-50":!a.isCostSet&&!a.isCostPositive?"":"opacity-50"}"
                            style="background: ${a.costValue===0?"#999":!a.isCostSet&&!a.isCostPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.costValue===0?"#777":!a.isCostSet&&!a.isCostPositive?"#a04040":"#aaa"};">
                            -
                          </button>
                          <button id="cost-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${a.costValue===0?"opacity-50":a.isCostSet?"":"opacity-50"}"
                            style="background: ${a.costValue===0?"#999":a.isCostSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.costValue===0?"#777":a.isCostSet?"#b89020":"#aaa"};">
                            =
                          </button>
                        </div>
                      `:""}
                      <div class="flex items-center gap-0">
                        <label class="font-bold text-sm mr-2" style="color: #8b7355;">攻击:</label>
                        <input type="number" id="effect-attack-value" value="${a.attackValue}" min="0" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        <button id="attack-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${a.attackValue===0?"opacity-50":!a.isAttackSet&&a.isAttackPositive?"":"opacity-50"}"
                          style="background: ${a.attackValue===0?"#999":!a.isAttackSet&&a.isAttackPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.attackValue===0?"#777":!a.isAttackSet&&a.isAttackPositive?"#4a8a4a":"#aaa"};">
                          +
                        </button>
                        <button id="attack-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${a.attackValue===0?"":"opacity-50"}"
                          style="background: ${a.attackValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.attackValue===0?"#3a7ab0":"#aaa"};">
                          0
                        </button>
                        <button id="attack-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${a.attackValue===0?"opacity-50":!a.isAttackSet&&!a.isAttackPositive?"":"opacity-50"}"
                          style="background: ${a.attackValue===0?"#999":!a.isAttackSet&&!a.isAttackPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.attackValue===0?"#777":!a.isAttackSet&&!a.isAttackPositive?"#a04040":"#aaa"};">
                          -
                        </button>
                        <button id="attack-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${a.attackValue===0?"opacity-50":a.isAttackSet?"":"opacity-50"}"
                          style="background: ${a.attackValue===0?"#999":a.isAttackSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.attackValue===0?"#777":a.isAttackSet?"#b89020":"#aaa"};">
                          =
                        </button>
                      </div>
                      <div class="flex items-center gap-0">
                        <label class="font-bold text-sm mr-2" style="color: #8b7355;">血量:</label>
                        <input type="number" id="effect-health-value" value="${a.healthValue}" min="0" max="99"
                          class="w-14 px-2 py-1 rounded-lg outline-none text-center text-sm mr-2"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        <button id="health-positive-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${a.healthValue===0?"opacity-50":!a.isHealthSet&&a.isHealthPositive?"":"opacity-50"}"
                          style="background: ${a.healthValue===0?"#999":!a.isHealthSet&&a.isHealthPositive?"linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.healthValue===0?"#777":!a.isHealthSet&&a.isHealthPositive?"#4a8a4a":"#aaa"};">
                          +
                        </button>
                        <button id="health-zero-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${a.healthValue===0?"":"opacity-50"}"
                          style="background: ${a.healthValue===0?"linear-gradient(135deg, #6fa8dc 0%, #4a90c0 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.healthValue===0?"#3a7ab0":"#aaa"};">
                          0
                        </button>
                        <button id="health-negative-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${a.healthValue===0?"opacity-50":!a.isHealthSet&&!a.isHealthPositive?"":"opacity-50"}"
                          style="background: ${a.healthValue===0?"#999":!a.isHealthSet&&!a.isHealthPositive?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.healthValue===0?"#777":!a.isHealthSet&&!a.isHealthPositive?"#a04040":"#aaa"};">
                          -
                        </button>
                        <button id="health-set-btn" class="w-8 h-8 rounded-lg font-bold text-sm ${a.healthValue===0?"opacity-50":a.isHealthSet?"":"opacity-50"}"
                          style="background: ${a.healthValue===0?"#999":a.isHealthSet?"linear-gradient(135deg, #f0c040 0%, #d4a020 100%)":"#ccc"}; color: #fff; border: 2px solid ${a.healthValue===0?"#777":a.isHealthSet?"#b89020":"#aaa"};">
                          =
                        </button>
                      </div>
                    </div>
                  `:""}
                    ${x==="造成伤害"?`
                      <div class="flex flex-col items-start gap-1">
                        <label class="font-bold text-sm" style="color: #8b7355;">数值:</label>
                        <input type="number" id="effect-value" value="${a.value}" min="1" max="99"
                          class="w-16 px-2 py-1 rounded-lg outline-none text-center text-sm"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                      </div>
                      <div class="flex flex-col items-start gap-1 mt-1">
                        <label class="font-bold text-sm" style="color: #8b7355;">元素:</label>
                        <div class="flex gap-1">
                          <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${a.elementType?"":"selected"}"
                            data-element-type=""
                            style="background: ${a.elementType?"rgba(212, 196, 168, 0.2)":"rgba(212, 196, 168, 0.6)"}; border: 2px solid ${a.elementType?"transparent":"#d4c4a8"};">
                            无
                          </div>
                          <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${a.elementType==="fire"?"selected":""}"
                            data-element-type="fire"
                            style="background: ${a.elementType==="fire"?"rgba(255, 140, 0, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${a.elementType==="fire"?"#ff8c00":"transparent"};">
                            🔥
                          </div>
                          <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${a.elementType==="ice"?"selected":""}"
                            data-element-type="ice"
                            style="background: ${a.elementType==="ice"?"rgba(100, 180, 255, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${a.elementType==="ice"?"#64b4ff":"transparent"};">
                            ❄️
                          </div>
                          <div class="element-select-btn px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${a.elementType==="lightning"?"selected":""}"
                            data-element-type="lightning"
                            style="background: ${a.elementType==="lightning"?"rgba(160, 80, 255, 0.3)":"rgba(212, 196, 168, 0.2)"}; border: 2px solid ${a.elementType==="lightning"?"#a050ff":"transparent"};">
                            ⚡️
                          </div>
                        </div>
                      </div>
                    `:""}
                    ${x==="说话"?`
                      <div class="flex flex-col items-start gap-1 mt-1">
                        <label class="font-bold text-sm" style="color: #8b7355;">说话内容:</label>
                        <input type="text" id="effect-speech-text" value="${a.speechText||""}" placeholder="输入说话内容..."
                          class="w-48 px-2 py-1 rounded-lg outline-none text-xs"
                          style="border: 2px solid #d4c4a8; background: #faf8f5;">
                      </div>
                    `:""}
                    ${["召唤","获得","变化"].includes(x)?`
                    <div class="mt-2">
                      <div class="mb-1">
                        <div class="font-bold text-sm mb-1" style="color: #8b7355;">来源</div>
                        <div class="flex flex-wrap gap-1">
                          ${(()=>{const g=[{key:"derived",label:"衍生卡"},{key:"deck_top",label:"抽牌堆顶"},{key:"discard_top",label:"弃牌堆顶"},{key:"my_hand",label:"我方手牌"},{key:"enemy_hand",label:"敌方手牌"}],k=a.summonSource??"derived";return g.map(w=>`
                              <div class="summon-source-btn-2 px-2 py-0.5 rounded cursor-pointer transition-all text-xs ${k===w.key?"selected":""}"
                                data-source="${w.key}"
                                style="background: ${k===w.key?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${k===w.key?"#6fa8dc":"#d4c4a8"}; color: #5a4a3a;">
                                ${w.label}
                              </div>
                            `).join("")})()}
                        </div>
                      </div>
                      <div class="flex items-center justify-between mb-1">
                        <div class="font-bold text-sm" style="color: #8b7355;">${x==="召唤"?"召唤卡牌":x==="获得"?"获得卡牌":"变化为"}</div>
                        <div class="flex flex-col items-start gap-1">
                          <label class="flex items-center gap-1 cursor-pointer text-xs" style="color: #8b7355;">
                            <input type="checkbox" id="summon-random-checkbox-2" class="cursor-pointer" ${a.isRandom?"checked":""}>
                            <span>随机</span>
                          </label>
                          ${x==="召唤"||x==="获得"?`
                          <div class="flex items-center gap-1">
                            <span class="text-xs" style="color: #8b7355;">数量</span>
                            <input type="number" id="summon-count-input-2" value="${a.value||1}" min="1" max="99"
                              class="w-12 h-6 text-center text-xs border rounded"
                              style="background: rgba(212, 196, 168, 0.2); border-color: #d4c4a8; color: #5a4a3a;">
                          </div>
                          `:""}
                        </div>
                      </div>
                      ${(a.summonSource??"derived")==="derived"?`
                      <div class="flex flex-col gap-1 max-h-24 overflow-y-auto">
                        ${(()=>{const g=a.isRandom?a.summonedCardIndices??[]:a.summonedCardIndex!==void 0?[a.summonedCardIndex]:[];return this.editingCards.map((w,P)=>{if((x==="变化"||x==="召唤")&&w.type==="spell"||x==="变化"&&P===this.currentCardIndex||x==="召唤"&&b.includes("打出时")&&P===this.currentCardIndex)return null;const M=g.includes(P);return`
                              <div class="summon-card-item px-2 py-1 rounded-lg cursor-pointer transition-all text-sm ${M?"selected":""}"
                                data-summon-index="${P}"
                                style="background: ${M?"rgba(111, 168, 220, 0.3)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${M?"#6fa8dc":"#d4c4a8"};">
                                ${w.name||"未命名"}
                              </div>
                            `}).filter(Boolean).join("")})()}
                      </div>
                      `:""}
                    </div>
                  `:""}
                  ${x==="给予词条"?`
                    <div class="space-y-2">
                      <div class="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                        ${Object.values($e).filter(g=>g.name!=="准备").map(g=>{const k=a.grantedKeywordName===g.name,w=["🔥","❄️","⚡️"].includes(g.name);return`
                            <div class="grant-keyword-item px-2 py-1 rounded-lg cursor-pointer transition-all text-xs ${k?"selected":""}"
                              data-grant-keyword="${g.name}"
                              style="background: ${k?"rgba(139, 115, 85, 0.35)":"rgba(212, 196, 168, 0.3)"}; border: 2px solid ${k?"#8b7355":"#d4c4a8"}; font-size: ${w?"14px":"11px"};">
                              ${g.name}
                            </div>
                          `}).join("")}
                      </div>
                      ${a.grantedKeywordName==="护甲"?`
                        <div class="flex flex-col items-start gap-1">
                          <label class="font-bold text-sm" style="color: #8b7355;">护甲值:</label>
                          <input type="number" id="grant-keyword-value" value="${a.grantedKeywordValue??1}" min="1" max="99"
                            class="w-16 px-2 py-1 rounded-lg outline-none text-center text-sm"
                            style="border: 2px solid #d4c4a8; background: #faf8f5;">
                        </div>
                      `:""}
                    </div>
                  `:""}
                  ${["属性变化","造成伤害","召唤","获得","变化","给予词条"].includes(x)?"":`
                    <div class="flex flex-col items-start gap-1">
                      <label class="font-bold text-sm" style="color: #8b7355;">数值:</label>
                      <input type="number" id="effect-value" value="${a.value}" min="1" max="99"
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
            ${(()=>{this.currentCard.type;const g=$=>{const L=this.currentCard,T=L.type==="spell"?"#9b8cb8":"#c4b49c",H=5,Z=16,j=8,ee="base",Y=38,ie=19,U=()=>this.getCardFullEffectText(L)||"选择法术效果";return`
                  <div class="card-preview mb-4" 
                    id="main-card-preview"
                    style="position: relative; ${L.imageData?`background: url(${L.imageData}) center/cover no-repeat;`:"background: linear-gradient(135deg, #fff 0%, #f8f4ec 100%);"} border: ${H}px solid ${T}; border-radius: ${Z}px; padding: ${j}px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2); ">
                  <div class="h-full flex flex-col">
                    <!-- 费用和名称 -->
                    <div class="flex items-center gap-2 mb-2">
                      <div class="card-cost-diamond"><span>${L.cost}</span></div>
                      <div class="card-name-text flex-1 text-center font-bold text-${ee}" style="color: #5a4a3a; word-break: break-all;">${L.name||"未命名"}</div>
                    </div>
                    
                    ${L.type==="spell"?`
                    <!-- 法术效果描述 -->
                    <div class="flex-1 flex items-center justify-center text-center text-sm px-2" style="color: #ffffff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; line-height: 1.4;">
                      ${U()}
                    </div>
                    `:`
                    <!-- 随从效果描述（先渲染，flex-1 占据上半部分空间） -->
                    <div id="minion-effect-text" class="text-center text-xs flex-1 flex items-center justify-center px-1" style="color: #6a5a3a; line-height: 1.3;"></div>

                    <!-- 随从词条（在技能下方，即中线位置） -->
                    ${L.keywords&&L.keywords.length>0?`
                      <div class="flex flex-wrap gap-1 justify-center mb-1">
                        ${L.keywords.map(W=>{const he=W.name==="护甲"?W.value??L.armorValue:"";return'<span class="keyword-tag" style="font-size: 9px; padding: 1px 4px; border-radius: 3px;">'+W.name+he+"</span>"}).join("")}
                      </div>
                    `:""}

                    <!-- 攻击/生命 -->
                    <div class="flex justify-between mt-auto">
                      <div class="card-attack-text" style="width: ${Y}px; height: ${Y}px; background-image: url('/images/icon_attack.png'); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: ${ie}px; filter: drop-shadow(0 0 2px rgba(0,0,0,0.8)) drop-shadow(0 0 5px rgba(0,0,0,0.4)); text-shadow: 0 0 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.5);">${L.attack}</div>
                      <div class="card-health-text" style="width: ${Y}px; height: ${Y}px; background-image: url('/images/icon_health.png'); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: ${ie}px; filter: drop-shadow(0 0 2px rgba(0,0,0,0.8)) drop-shadow(0 0 5px rgba(0,0,0,0.4)); text-shadow: 0 0 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.5);">${L.health}</div>
                    </div>
                    `}
                  </div>
                  ${this.isDrawingMode?`
                  <canvas id="card-drawing-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 20; cursor: none;"></canvas>
                  `:""}
                </div>
                `},k=this.editingCards.length>1,w='<button id="prev-card-btn" class="preview-arrow prev flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg" style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 2px solid #a08060; box-shadow: 0 2px 8px rgba(160, 128, 96, 0.5); z-index: 10;">◀</button>',P='<button id="next-card-btn" class="preview-arrow next flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg" style="background: linear-gradient(135deg, #c0a080 0%, #b09070 100%); color: #fff; border: 2px solid #a08060; box-shadow: 0 2px 8px rgba(160, 128, 96, 0.5); z-index: 10;">▶</button>',M='<div class="flex-shrink-0 w-10"></div>',R=k?'<div class="text-center text-xs font-bold mt-1" style="color: white; text-shadow: 0 0 3px black;">'+(this.currentCardIndex+1)+" / "+this.editingCards.length+"</div>":"";return'<div class="flex items-center justify-center gap-2 mb-4">'+(k?w:M)+'<div class="flex flex-col items-center">'+g()+R+"</div>"+(k?P:M)+"</div>"})()}

            ${this.isDrawingMode?`
            <!-- 画笔色块 -->
            <div class="flex justify-center gap-1.5 mb-2" style="background: transparent;">
              ${this.COLORS.map((g,k)=>`
                <button id="color-swatch-${k}" class="w-7 h-7 rounded-sm transition-all transform hover:scale-110"
                  style="background: ${g}; border: 2px solid ${k===this.currentColorIndex?"#ffffff":"transparent"}; cursor: pointer;"
                  title="${["红","橙","黄","绿","青","蓝","紫","黑"][k]}"></button>
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
              ${this.currentCard.keywords.some(g=>g.name==="准备")?`
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
    `,this.attachCardCreatorEvents(),this.updateEffectDescription(),this.pendingScrollRestoration){const{selector:g,scrollTop:k,containerIndex:w,leftPanelScrollTop:P,portraitScrollTop:M}=this.pendingScrollRestoration,R=document.querySelectorAll(g),$=R[w??0]||R[0];if($&&($.scrollTop=k),P!==void 0){const L=document.querySelector(".editor-left-panel-scroll");L&&(L.scrollTop=P)}if(M!==void 0){const L=document.querySelector(".portrait-side-panel-scroll");L&&(L.scrollTop=M)}this.pendingScrollRestoration=null}}updateCardPreview(){((s,a,r)=>{const i=document.getElementById(s);if(!i||!a)return;const n=i.querySelector(".card-name-text");if(n){const p=a.name!==void 0&&a.name!==null&&a.name!==""?a.name:r;n.textContent=p}const t=i.querySelector(".card-cost-diamond span");t&&(t.textContent=String(a.cost));const l=i.querySelector(".card-attack-text");l&&(l.textContent=String(a.attack||0));const o=i.querySelector(".card-health-text");o&&(o.textContent=String(a.health||0));const d=i.querySelector('.flex.flex-wrap[class*="gap-"]');if(d&&a.type==="minion"){const p=a.keywords||[];p.length>0?(d.innerHTML=p.map(c=>{const h=c.name==="护甲"?c.value??a.armorValue??1:c.name==="准备"?c.value??1:"";return`<span style="font-size: 9px; padding: 1px 4px; border-radius: 3px; background: rgba(212, 180, 140, 0.6); color: #5a4a3a;">${c.name}${h}</span>`}).join(""),d.style.display="flex"):d.style.display="none"}if(a.type==="spell"){const p=i.querySelector(".flex-1.flex.items-center.justify-center.text-center");if(p){const h=(a.effects||[]).filter(f=>f.effect);if(h.length===0)p.textContent="选择法术效果";else{const f=h.map(u=>{const b=u.targets||[],m=this.mergeTargets(b);let y=m.length>0&&!m.includes("无需目标")&&!m.includes("卡牌")?`对${m.map(C=>C==="检索随从"?"检索到的随从":C).join("、")}`:"";u.isRandomTarget&&y&&(y+="中的随机一个"),u.targetRetrievedRandom&&b.includes("检索随从")&&y&&(y+="中的随机一个");const x=u.isRandomTarget&&u.randomTargetTimes&&u.randomTargetTimes>1?`${u.randomTargetTimes}次`:"",v=u.conditionType&&u.conditionType!=="guaranteed"?this.getConditionText(u):"";if(u.effect==="造成伤害"){const C=u.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[u.elementType]||"";return v+`${y}造成${u.value}点${C}伤害${x}`}if(u.effect==="抽牌")return v+`抽${u.value}张牌`;if(u.effect==="弃牌")return v+`弃${u.value}张牌`;if(u.effect==="属性变化"){if(m.includes("卡牌")){const P=Me(u.summonSource||"my_hand",!!u.isRandom),M=u.isRandom?"中的随机一个":"",R=[];if((u.costValue||0)!==0){const $=u.isCostSet?"=":u.isCostPositive?"+":"-",L=u.costValue||0;R.push(`${$}${L}费用`)}if((u.attackValue||0)!==0){const $=u.isAttackSet?"=":u.isAttackPositive?"+":"-";R.push(`${$}${u.attackValue}攻击`)}if((u.healthValue||0)!==0){const $=u.isHealthSet?"=":u.isHealthPositive?"+":"-";R.push(`${$}${u.healthValue}血量`)}return R.length===0?v+`使${P}${M}无变化`:v+`使${P}${M}${R.join("/")}`}const C=u.isAttackSet?"=":u.isAttackPositive?"+":"-",g=u.isHealthSet?"=":u.isHealthPositive?"+":"-",k=u.attackValue||0,w=u.healthValue||0;return k===0&&w!==0?v+`${y}${g}${w}血量${x}`:w===0&&k!==0?v+`${y}${C}${k}攻击${x}`:v+`${y}${C}${k}/${g}${w}${x}`}if(u.effect==="给予印记")return v+`${y}给予${u.value}点印记${x}`;if(u.effect==="治愈")return v+`${y}治愈${u.value}点生命${x}`;if(u.effect==="获得能量")return v+`获得${u.value}点能量`;if(u.effect==="失去能量")return v+`失去${u.value}点能量`;if(u.effect==="召唤"){const C=u.summonSource||"derived";if(C!=="derived"){const P=Me(C,!!u.isRandom),M=u.isRandom?"中的随机一个":"";return v+`召唤${u.value||1}张${P}${M}`}if(u.isRandom&&u.summonedCardIndices&&u.summonedCardIndices.length>1){const P=u.summonedCardIndices.map(M=>this.editingCards[M]?.name||"衍生随从");return v+`召唤${u.value||1}张${P.join("、")}中的随机一个`}const g=u.summonedCardIndex??0,w=this.editingCards[g]?.name||"衍生随从";return v+`召唤${u.value||1}张${w}`}if(u.effect==="获得"){const C=u.summonSource||"derived";if(C!=="derived"){const P=Me(C,!!u.isRandom),M=u.isRandom?"中的随机一个":"";return v+`获得${u.value||1}张${P}${M}`}if(u.isRandom&&u.summonedCardIndices&&u.summonedCardIndices.length>1){const P=u.summonedCardIndices.map(M=>this.editingCards[M]?.name||"衍生牌");return v+`获得${u.value||1}张${P.join("、")}中的随机一个`}const g=u.summonedCardIndex??0,w=this.editingCards[g]?.name||"衍生牌";return v+`获得${u.value||1}张${w}`}if(u.effect==="变化"){const C=u.summonSource||"derived";if(C!=="derived"){const P=Me(C,!!u.isRandom),M=u.isRandom?"中的随机一个":"";return v+`变化为${P}${M}`}if(u.isRandom&&u.summonedCardIndices&&u.summonedCardIndices.length>1){const P=u.summonedCardIndices.map(M=>this.editingCards[M]?.name||"衍生随从");return v+`变化为${P.join("、")}中的随机一个`}const g=u.summonedCardIndex??0,w=this.editingCards[g]?.name||"衍生随从";return v+`变化为${w}`}return""}).filter(Boolean);p.innerHTML=f.join("；<br>")||"选择法术效果"}}}})("main-card-preview",this.currentCard,"未命名"),this.updateEffectDescription()}updateEffectDescription(){if(this.currentCard.type==="spell")return;let e=document.getElementById("minion-effect-text");if(e||(e=document.getElementById("minion-effect-text-small")),!e)return;const a=(this.currentCard.effects||[]).filter(r=>(r.moment||r.moments&&r.moments.length>0)&&r.effect);if(a.length===0)e.textContent="";else{const r=new Map;for(const n of a){const t=n.moments||(n.moment?[n.moment]:[]),l=t.map(c=>Te[c]||"").join(""),o=this.getConditionText(n);let d=this.getEffectTextWithoutMoment(n);o&&d.startsWith(o)&&(d=d.substring(o.length));const p=t.sort().join("|")+"|"+o;r.has(p)||r.set(p,{icon:l,texts:[],conditionText:o}),r.get(p).texts.push(d)}const i=Array.from(r.values()).map(n=>`${n.icon}${n.conditionText}${n.texts.join("，并")}`);e.innerHTML=i.join("；<br>")}}normalizeMoments(e){return e?Array.isArray(e)?e:[e]:[]}getMomentsText(e){const s=this.normalizeMoments(e);return s.length===0||s.length===1&&s[0]==="打出时"?"":s.filter(a=>a!=="打出时").map(a=>Te[a]||"").join("")}momentsInclude(e,s){return this.normalizeMoments(e).includes(s)}mergeTargets(e){const s=new Set(e),a=s.has("自己");s.delete("自己");const r=s.has("我方所有随从"),i=s.has("敌方所有随从"),n=s.has("我方英雄"),t=s.has("敌方英雄");if(r&&i&&n&&t){const o=["所有目标"];return a&&o.unshift("自己"),o}n&&t&&!r&&!i&&(s.delete("我方英雄"),s.delete("敌方英雄"),s.add("双方英雄")),r&&i&&(s.delete("我方所有随从"),s.delete("敌方所有随从"),s.add("所有随从")),s.has("我方英雄")&&s.has("我方所有随从")&&(s.delete("我方英雄"),s.delete("我方所有随从"),s.add("我方所有目标")),s.has("敌方英雄")&&s.has("敌方所有随从")&&(s.delete("敌方英雄"),s.delete("敌方所有随从"),s.add("敌方所有目标"));const l=Array.from(s);return a&&l.unshift("自己"),l}getEffectTextWithoutMoment(e,s){const a=e.targets||[],r=this.mergeTargets(a);let i=r.length>0&&!r.includes("无需目标")&&!r.includes("卡牌")?`对${r.map(d=>d==="检索随从"?"检索到的随从":d).join("、")}`:"";e.isRandomTarget&&i&&(i+="中的随机一个"),e.targetRetrievedRandom&&a.includes("检索随从")&&i&&(i+="中的随机一个");let n="";if(e.effect==="造成伤害"){const d=e.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[e.elementType]||"";n=`造成${e.value||0}点${d}伤害`}else if(e.effect==="增加伤害")n=`增加${e.value||0}点攻击伤害`;else if(e.effect==="抽牌")n=`抽${e.value||0}张牌`;else if(e.effect==="弃牌")n=`弃${e.value||0}张牌`;else if(e.effect==="属性变化"){const d=e.isAttackSet?"=":e.isAttackPositive?"+":"-",p=e.isHealthSet?"=":e.isHealthPositive?"+":"-",c=e.isCostSet?"=":e.isCostPositive?"+":"-",h=e.attackValue||0,f=e.healthValue||0,u=e.costValue||0;if(a.includes("卡牌")){const b=Me(e.summonSource||"my_hand",!!e.isRandom),m=e.isRandom?"中的随机一个":"";let y=[];u!==0&&y.push(`${c}${u}费用`),h!==0&&y.push(`${d}${h}攻击`),f!==0&&y.push(`${p}${f}血量`),y.length===0&&y.push("费用/攻击/血量不变"),n=`使${b}${m}${y.join("/")}`}else h===0&&f!==0?n=`${p}${f}血量`:f===0&&h!==0?n=`${d}${h}攻击`:n=`${d}${h}/${p}${f}`}else if(e.effect==="给予印记")n=`给予${e.value||0}点印记`;else if(e.effect==="治愈")n=`治愈${e.value||0}点生命`;else if(e.effect==="获得能量")n=`获得${e.value||0}点能量`;else if(e.effect==="失去能量")n=`失去${e.value||0}点能量`;else if(e.effect==="召唤"){const d=e.summonSource||"derived";if(d!=="derived"){const p=Me(d,!!e.isRandom),c=e.isRandom?"中的随机一个":"";n=`召唤${e.value||1}张${p}${c}`}else if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>1){const p=e.summonedCardIndices.map(c=>(s!==void 0?s?.[c]:this.editingCards?.[c])?.name||"衍生随从");n=`召唤${e.value||1}张${p.join("、")}中的随机一个`}else{const p=e.summonedCardIndex??0,h=(s!==void 0?s?.[p]:this.editingCards?.[p])?.name||"衍生随从";n=`召唤${e.value||1}张${h}`}}else if(e.effect==="获得"){const d=e.summonSource||"derived";if(d!=="derived"){const p=Me(d,!!e.isRandom),c=e.isRandom?"中的随机一个":"";n=`获得${e.value||1}张${p}${c}`}else if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>1){const p=e.summonedCardIndices.map(c=>(s!==void 0?s?.[c]:this.editingCards?.[c])?.name||"衍生牌");n=`获得${e.value||1}张${p.join("、")}中的随机一个`}else{const p=e.summonedCardIndex??0,h=(s!==void 0?s?.[p]:this.editingCards?.[p])?.name||"衍生牌";n=`获得${e.value||1}张${h}`}}else if(e.effect==="变化"){const d=e.summonSource||"derived";if(d!=="derived"){const p=Me(d,!!e.isRandom),c=e.isRandom?"中的随机一个":"";n=`变化为${p}${c}`}else if(e.isRandom&&e.summonedCardIndices&&e.summonedCardIndices.length>1)n=`变化为${e.summonedCardIndices.map(c=>(s!==void 0?s?.[c]:this.editingCards?.[c])?.name||"衍生随从").join("、")}中的随机一个`;else{const p=e.summonedCardIndex??0;n=`变化为${(s!==void 0?s?.[p]:this.editingCards?.[p])?.name||"衍生随从"}`}}else if(e.effect==="给予词条"){const d=e.grantedKeywordName||"";n=`给予${d==="护甲"?`【${d}${e.grantedKeywordValue??1}】`:`【${d}】`}`}else e.effect==="说话"&&(n="");let t="";e.triggerNumbers&&e.triggerNumbers.length>0&&([1,2,3,4,5,6].every(c=>e.triggerNumbers.includes(c))||(t=`🎲${e.triggerNumbers.length}/6`));const l=this.getConditionText(e),o=e.isOpponent?"对手":"";return a.includes("无需目标")||a.includes("卡牌")||a.length===0?`${l}${o}${n}${t}`:`${l}${o}${i}${n}${t}`}getCardFullEffectText(e,s){const a=[],r=s||e.derivedCards;if(e.effects&&e.effects.length>0){const i=new Map;for(const n of e.effects){if(!n||!n.effect)continue;const t=n.moments||(n.moment?[n.moment]:[]);if(t.length===0)continue;const l=t.length===1&&t[0]==="打出时"&&e.type==="spell"?"":t.map(c=>Te[c]||"").join("");let o="";n.conditionType&&n.conditionType!=="guaranteed"&&(o=this.getConditionText(n));const d=t.sort().join("|")+"|"+o;let p=this.getEffectTextWithoutMoment(n,r);p&&(o&&p.startsWith(o)&&(p=p.substring(o.length)),i.has(d)||i.set(d,{icon:l,texts:[],conditionText:o}),i.get(d).texts.push(p))}for(const n of i.values())a.push(`${n.icon}${n.conditionText}${n.texts.join("，并")}`)}else if(e.type==="spell"&&e.spellEffect){const i=e.spellEffect,n=i.moments||(i.moment?[i.moment]:[]);if(n.length>0&&i.effect){const t=n.length===1&&n[0]==="打出时"&&e.type==="spell"?"":n.map(o=>Te[o]||"").join(""),l=this.getEffectTextWithoutMoment(i,r);l&&a.push(`${t}${l}`)}}return a.join("；<br>")}getVariableChangePrefix(e){if(!e.variableChange)return"⚙️";const s=Vt[e.variableChange.variable]||"",a=e.variableChange.increase!==!1,r=e.variableChange.decrease!==!1;return a&&r?`${s}⚙️`:a?`${s}📈`:r?`${s}📉`:`${s}⚙️`}getHeroSkillDescription(e){const s=e.effects||(e.effect?[e.effect]:[]);if(s.length===0)return"无效果";const a=new Map;for(const t of s){if(!t.effect)continue;const l=t.moment||"打出时";let o="";t.conditionType&&t.conditionType!=="guaranteed"&&(o=this.getConditionText(t));const d=l!=="打出时"?`${Te[l]||""}`:"",p=l+"|"+o;let c=this.getEffectTextWithoutMoment(t,this.heroDerivedCards);c&&(o&&c.startsWith(o)&&(c=c.substring(o.length)),a.has(p)||a.set(p,{icon:d,conditionText:o,texts:[]}),a.get(p).texts.push(c))}const r=[];for(const t of a.values())r.push(`${t.icon}${t.conditionText}${t.texts.join("，并")}`);const i=r.join("；")||"无效果";if(e.limited)return`${i}（一局${e.maxUses??1}次）`;const n=e.cooldown??0;return n>0?`${i}（CD: ${n}）`:i}isConditionSelected(e,s){return s?s.conditionType?s.conditionType===e:e==="d6"?!!s.triggerNumbers&&s.triggerNumbers.length<6:e==="guaranteed":e==="guaranteed"}getConditionItemStyle(e,s){const a=this.isConditionSelected(e,s);return e==="guaranteed"?a?"background:rgba(34,197,94,0.25);border:2px solid #22c55e;":"background:rgba(212,196,168,0.3);border:2px solid #d4c4a8;":e==="d6"?a?"background:transparent;border:2px solid #c0a080;":"background:rgba(212,196,168,0.3);border:2px solid #d4c4a8;":a?"background:rgba(34,197,94,0.25);border:2px solid #22c55e;":"background:rgba(212,196,168,0.3);border:2px solid #d4c4a8;"}getConditionSubEditor(e,s){const a=this.isConditionSelected("exists_minion",s)?"exists_minion":this.isConditionSelected("target_attr",s)?"target_attr":this.isConditionSelected("hero_hp",s)?"hero_hp":this.isConditionSelected("minion_count",s)?"minion_count":this.isConditionSelected("hand_count",s)?"hand_count":null;if(!a)return"";if(a==="exists_minion"){const c=s?.conditionMinionName||"",h=s?.conditionMinionCheckName??!1,f=s?.conditionSides||["friendly"],u=f.includes("friendly"),b=f.includes("enemy"),m=u&&b,y=s?.conditionSideLogic||"and",x=["cost","attack","health"],v={cost:"能量花费",attack:"攻击力",health:"生命值"},C=x.map(g=>{const k=s?.conditionMinionAttrs?.[g],w=k?.enabled??!1,P=k?.operator||"=",M=k?.value??0,R=["<","=",">"].map($=>{const H=($==="<"?P==="<":$==="="?P==="=":P===">")||($==="<"&&P==="<="||$===">"&&P===">="||$==="="&&(P==="<="||P===">="));return`<button class="condition-minion-attr-op-btn" data-attr="${g}" data-op="${$}" data-editor="${e}"
            style="${H?"rgba(34,197,94,0.25)":"rgba(212,196,168,0.3)"};border:1px solid ${H?"#22c55e":"#d4c4a8"};color:${H?"#22c55e":"#8b7355"};width:28px;height:24px;border-radius:4px;font-size:12px;font-weight:bold;cursor:pointer;">${$==="<"?"＜":$==="="?"＝":"＞"}</button>`}).join("");return`
        <div style="font-size:11px;" onclick="event.stopPropagation()">
          <div class="flex items-center gap-2" style="margin-bottom:3px;">
            <input type="checkbox" class="condition-minion-attr-check" data-attr="${g}" data-editor="${e}" ${w?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
            <span style="color:#5a4a3a;">${v[g]}</span>
          </div>
          <div class="flex flex-col items-start gap-1">
            ${R}
            <input type="number" class="condition-minion-attr-input" data-attr="${g}" data-editor="${e}" value="${M}"
              style="width:45px;padding:2px 4px;border:1px solid #c0a080;border-radius:4px;font-size:11px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="0">
          </div>
        </div>`}).join("");return`
      <div class="mt-2 space-y-2 pl-1" onclick="event.stopPropagation()">
        <div class="flex items-center gap-3">
          <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
            <input type="checkbox" class="condition-side-check" data-side="friendly" data-editor="${e}" ${u?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
            我方
          </label>
          <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
            <input type="checkbox" class="condition-side-check" data-side="enemy" data-editor="${e}" ${b?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
            敌方
          </label>
        </div>
        ${m?`
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
          <input type="text" class="condition-minion-name-input" data-editor="${e}" value="${c}"
            style="width:100%;padding:4px 8px;border:1px solid #c0a080;border-radius:4px;font-size:12px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="输入名称">
        </div>
        <div class="space-y-1">${C}</div>
      </div>`}if(a==="target_attr"){const c=["cost","attack","health"],h={cost:"能量花费",attack:"攻击力",health:"生命值"};return`<div class="mt-2 space-y-1 pl-1">${c.map(u=>{const b=s?.conditionTargetAttrs?.[u],m=b?.enabled??!1,y=b?.operator||"=",x=b?.value??0,v=["<","=",">"].map(C=>{const w=(C==="<"?y==="<":C==="="?y==="=":y===">")||(C==="<"&&y==="<="||C===">"&&y===">="||C==="="&&(y==="<="||y===">="));return`<button class="condition-target-op-btn" data-attr="${u}" data-op="${C}" data-editor="${e}"
            style="${w?"rgba(34,197,94,0.25)":"rgba(212,196,168,0.3)"};border:1px solid ${w?"#22c55e":"#d4c4a8"};color:${w?"#22c55e":"#8b7355"};width:28px;height:24px;border-radius:4px;font-size:12px;font-weight:bold;cursor:pointer;">${C==="<"?"＜":C==="="?"＝":"＞"}</button>`}).join("");return`
        <div style="font-size:11px;" onclick="event.stopPropagation()">
          <div class="flex items-center gap-2" style="margin-bottom:3px;">
            <input type="checkbox" class="condition-target-attr-check" data-attr="${u}" data-editor="${e}" ${m?"checked":""}
              style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">
            <span style="color:#5a4a3a;">${h[u]}</span>
          </div>
          <div class="flex flex-col items-start gap-1">
            ${v}
            <input type="number" class="condition-target-attr-input" data-attr="${u}" data-editor="${e}" value="${x}"
              style="width:45px;padding:2px 4px;border:1px solid #c0a080;border-radius:4px;font-size:11px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="0">
          </div>
        </div>`}).join("")}</div>`}const r=s?.conditionSides||["friendly"],i=r.includes("friendly"),n=r.includes("enemy"),t=i&&n,l=s?.conditionSideLogic||"and",o=s?.conditionOperator||"=",d=s?.conditionValue??0,p=["<","=",">"].map(c=>{const u=(c==="<"?o==="<":c==="="?o==="=":o===">")||(c==="<"&&o==="<="||c===">"&&o===">=");return`<button class="condition-op-btn" data-op="${c}" data-editor="${e}"
        style="background:${u?"rgba(34,197,94,0.25)":"rgba(212,196,168,0.3)"};border:1px solid ${u?"#22c55e":"#d4c4a8"};color:${u?"#22c55e":"#8b7355"};width:32px;height:28px;border-radius:4px;font-size:14px;font-weight:bold;cursor:pointer;">${c==="<"?"＜":c==="="?"＝":"＞"}</button>`}).join("");return`
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
          ${t?`
        <div class="flex items-center gap-3">
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-${e}" class="condition-logic-radio" data-editor="${e}" value="and" ${l==="and"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">与
            </label>
            <label class="flex items-center gap-1 cursor-pointer" style="font-size:11px;color:#5a4a3a;">
              <input type="radio" name="condition-logic-${e}" class="condition-logic-radio" data-editor="${e}" value="or" ${l==="or"?"checked":""}
                style="width:13px;height:13px;accent-color:#22c55e;cursor:pointer;">或
            </label>
        </div>
          `:""}
        <div class="flex flex-col items-start gap-1">
          ${p}
          <input type="number" class="condition-value-input" data-editor="${e}" value="${d}"
            style="width:55px;padding:2px 6px;border:1px solid #c0a080;border-radius:4px;font-size:12px;color:#5a4a3a;background:rgba(255,255,255,0.5);outline:none;" placeholder="0">
        </div>
      </div>`}setConditionType(e,s){e&&(e==="guaranteed"?(s.conditionType="guaranteed",s.triggerNumbers=[1,2,3,4,5,6],delete s.conditionSides,delete s.conditionSideLogic,delete s.conditionOperator,delete s.conditionValue):e==="d6"?(s.conditionType="d6",(!s.triggerNumbers||s.triggerNumbers.length===6)&&(s.triggerNumbers=[1]),delete s.conditionSides,delete s.conditionSideLogic,delete s.conditionOperator,delete s.conditionValue):e==="exists_minion"?(s.conditionType=e,s.conditionMinionName||(s.conditionMinionName=""),s.conditionMinionCheckName===void 0&&(s.conditionMinionCheckName=!1),s.conditionMinionAttrs||(s.conditionMinionAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}}),s.conditionSides||(s.conditionSides=["friendly"]),delete s.triggerNumbers,delete s.conditionOperator,delete s.conditionValue,delete s.conditionSideLogic):e==="target_attr"?(s.conditionType=e,s.conditionTargetAttrs||(s.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}}),delete s.triggerNumbers,delete s.conditionSides,delete s.conditionSideLogic,delete s.conditionOperator,delete s.conditionValue):(s.conditionType=e,s.conditionSides||(s.conditionSides=["friendly"]),s.conditionOperator||(s.conditionOperator="="),s.conditionValue===void 0&&(s.conditionValue=0),delete s.triggerNumbers))}getConditionCollapsedText(e){if(!e)return"必然触发";const s=e.conditionType||(!e.triggerNumbers||e.triggerNumbers.length===6?"guaranteed":"d6");if(s==="guaranteed")return"必然触发";if(s==="d6"){const c=e.triggerNumbers||[];return c.length>0&&c.length<6?`🎲 D6（${c.join("、")}）`:"🎲 D6"}if(s==="exists_minion"){const c=e.conditionMinionName?.trim(),h=e.conditionMinionCheckName??!1,f=e.conditionSides||["friendly"],u=f.includes("friendly")&&f.includes("enemy")?"双方":f.includes("friendly")?"我方":"敌方",b=e.conditionSideLogic||"and",m=f.includes("friendly")&&f.includes("enemy")?b==="and"?"均存在":"至少有一":"存在",y=e.conditionMinionAttrs,x=[];if(y){const g={cost:"能量",attack:"攻击",health:"生命"};for(const k of["cost","attack","health"]){const w=y[k];if(w?.enabled){const P=w.operator||"=",M=P==="<="?"≤":P===">="?"≥":P;x.push(`${g[k]}${M}${w.value}`)}}}const v=h&&c?`「${c}」`:"",C=x.length?`[${x.join("、")}]`:"";return`${u}${m}随从${v}${C}`}if(s==="target_attr"){const c={cost:"能量",attack:"攻击",health:"生命"},h=e.conditionTargetAttrs;if(!h)return"目标属性";const f=[];for(const u of["cost","attack","health"]){const b=h[u];if(b?.enabled){const m=b.operator||"=",y=m==="<="?"≤":m===">="?"≥":m;f.push(`${c[u]}${y}${b.value}`)}}return f.length?`目标${f.join("、")}`:"目标属性"}const r={hero_hp:"英雄血量",minion_count:"随从数",hand_count:"手牌数"}[s]||s,i=e.conditionSides||["friendly"],n=i.includes("friendly")&&i.includes("enemy")?"双方":i.includes("friendly")?"我方":"敌方",t=e.conditionSideLogic||"and",l=i.includes("friendly")&&i.includes("enemy")?t==="and"?"均":"有一":"",o=e?.conditionOperator||"=",d=o==="<="?"≤":o===">="?"≥":o,p=e.conditionValue??0;return`${n}${r}${l}${d}${p}`}getConditionText(e){const s=e.conditionType||(!e.triggerNumbers||e.triggerNumbers.length===6?"guaranteed":"d6");if(s==="guaranteed"||s==="d6")return"";if(s==="exists_minion"){const c=e.conditionMinionName?.trim(),h=e.conditionMinionCheckName??!1,f=e.conditionSides||["friendly"],u=f.includes("friendly")&&f.includes("enemy")?"双方":f.includes("friendly")?"我方":"敌方",b=e.conditionSideLogic||"and",m=f.includes("friendly")&&f.includes("enemy")?b==="and"?"均存在":"至少有一":"存在",y=e.conditionMinionAttrs,x=[];if(y){const k={cost:"能量花费",attack:"攻击力",health:"生命值"};for(const w of["cost","attack","health"]){const P=y[w];if(P?.enabled){const M=P.operator||"=",R=M==="<="?"≤":M===">="?"≥":M;x.push(`${k[w]}${R}${P.value}`)}}}const v=h&&c?`「${c}」`:"",C=x.length?`[${x.join("且")}]`:"";return`${u}${m}${v}${C}`.replace(/^(.+)$/,"若$1")+"，则"}if(s==="target_attr"){const c=e.conditionTargetAttrs;if(!c)return"若目标属性符合条件，则";const h={cost:"能量花费",attack:"攻击力",health:"生命值"},f=[];for(const u of["cost","attack","health"]){const b=c[u];if(b?.enabled){const m=b.operator||"=",y=m==="<="?"≤":m===">="?"≥":m;f.push(`${h[u]}${y}${b.value}`)}}return f.length?`若目标${f.join("且")}，则`:"若目标属性符合条件，则"}const r={hero_hp:"英雄血量",minion_count:"随从数",hand_count:"手牌数"}[s]||s,i=e.conditionSides||["friendly"],n=i.includes("friendly")&&i.includes("enemy")?"双方":i.includes("friendly")?"我方":"敌方",t=e.conditionSideLogic||"and",l=i.includes("friendly")&&i.includes("enemy")?t==="and"?"均":"有一":"",o=e?.conditionOperator||"=",d=o==="<="?"≤":o===">="?"≥":o,p=e.conditionValue??0;return`若${n}${r}${l}${d}${p}，则`}getMinionSkillDescription(e){return!e.effects||e.effects.length===0?"":e.effects.map(a=>{const r=a.moment?`${Te[a.moment]||""}`:"",i=this.getEffectTextWithoutMoment(a,e.derivedCards);return`${r} ${i}`.trim()}).filter(a=>a).join(`
`)}showFixedTooltip(e,s,a){let r=document.getElementById("unified-tooltip-overlay");if(!r){r=document.createElement("div"),r.id="unified-tooltip-overlay",r.style.cssText="position:fixed; inset:0; pointer-events:none; z-index:999999; display:none;";const d=document.createElement("div");d.id="unified-tooltip-content",d.style.cssText="position:absolute; background:#b8a17a; border:2px solid #6b5a45; border-radius:8px; padding:10px 14px; box-shadow:0 8px 32px rgba(0,0,0,0.4); max-width:280px; pointer-events:none;",r.appendChild(d),document.body.appendChild(r)}const i=document.getElementById("unified-tooltip-content");i.innerHTML=s,r.style.display="block",r.style.visibility="hidden";const n=i.getBoundingClientRect();r.style.visibility="visible";const t=e.getBoundingClientRect();let l=t.left+t.width/2,o;a==="bottom"?o=t.bottom+8:o=t.top-n.height-8,l=Math.max(8+n.width/2,Math.min(l,window.innerWidth-n.width/2-8)),a==="bottom"&&o+n.height>window.innerHeight-8?o=t.top-n.height-8:a==="top"&&o<8&&(o=t.bottom+8),i.style.left=l+"px",i.style.top=o+"px",i.style.transform="translateX(-50%)"}hideFixedTooltip(){const e=document.getElementById("unified-tooltip-overlay");e&&(e.style.display="none")}attachHeroEditorEvents(){document.getElementById("back-menu-btn")?.addEventListener("click",()=>{this.state=oe(this.state,{type:"BACK_TO_MENU"}),this.render()}),document.getElementById("back-to-manager-btn")?.addEventListener("click",()=>{this.state=oe(this.state,{type:"SHOW_CARD_MANAGER"}),this.isHeroEditMode=!1,this.editingHeroId=null,this.editingCards=[],this.render()}),document.getElementById("hero-editor-more-btn")?.addEventListener("click",()=>{this.showSidePanel=!this.showSidePanel,this.render()}),document.getElementById("close-hero-side-panel-btn")?.addEventListener("click",()=>{this.showSidePanel=!1,this.render()}),document.getElementById("switch-to-normal-editor-btn")?.addEventListener("click",()=>{this.isHeroEditMode=!1,this.editingCards=[],this.state=oe(this.state,{type:"SHOW_CARD_CREATOR"}),this.render()});const e=document.getElementById("hero-name");e&&e.addEventListener("input",c=>{this.heroName=c.target.value});const s=["greeting","apology","taunt","exclamation","pity","flirt"];for(const c of s){const h=document.getElementById(`hero-speech-${c}`);h&&h.addEventListener("input",f=>{this.heroSpeech[c]=f.target.value})}const a=document.getElementById("hero-voice-type");a&&a.querySelectorAll("[data-voice-type]").forEach(c=>{c.addEventListener("click",()=>{this.heroVoiceType=c.dataset.voiceType,this.render()})}),document.getElementById("reset-hero-btn")?.addEventListener("click",()=>{this.heroName="",this.heroImageData=null,this.heroDerivedCards=[],this.heroEditingDerivedIndex=null,this.heroSkills=[],this.heroEditingSkillIndex=null,this.heroSpeech={greeting:"",apology:"",taunt:"",exclamation:"",pity:"",flirt:""},this.heroVoiceType="none",this.render()}),document.getElementById("add-hero-derived-btn")?.addEventListener("click",()=>{this.cropTarget="main";const c=document.createElement("input");c.type="file",c.accept="image/png",c.onchange=async h=>{const f=h.target.files?.[0];if(f)try{const u=await this.importCardFromPNGFile(f);if(!u){alert("无法从该 PNG 文件中读取卡牌数据");return}const{cardData:b,imageData:m}=u,y=b.derivedCards&&b.derivedCards.length>0,x=["召唤","获得","变化"],v=(b.effects||[]).some(k=>x.includes(k.effect));if(y||v){alert("该卡牌携带衍生卡或包含召唤/获得/变化效果，无法作为英雄衍生卡导入");return}const C=[],g={name:b.name||"",type:b.type||"minion",cost:b.cost??1,attack:b.attack??1,health:b.health??1,armorValue:b.armorValue??0,preparationValue:b.preparationValue??1,imageData:m,keywords:(b.keywords||[]).map(k=>k==="风怒"?"__WINDURY__":k).map(k=>k==="__WINDURY__"?"连击":k).map(k=>Object.values($e).find(P=>P.name===k)||{name:k,description:"",hasValue:!1}),effects:b.effects||[],effectDescription:b.effectDescription||""};if(C.push(g),b.derivedCards&&b.derivedCards.length>0){g.derivedCards=b.derivedCards;for(const k of b.derivedCards)C.push({name:k.name||"",type:k.type||"minion",cost:k.cost??1,attack:k.attack??1,health:k.health??1,armorValue:k.armorValue??0,preparationValue:k.preparationValue??1,imageData:k.imageData||null,keywords:(k.keywords||[]).map(w=>w==="风怒"?"__WINDURY__":w).map(w=>w==="__WINDURY__"?"连击":w).map(w=>Object.values($e).find(M=>M.name===w)||{name:w,description:"",hasValue:!1}),effects:k.effects||[],effectDescription:k.effectDescription||""})}this.heroDerivedCards=[...this.heroDerivedCards,...C],this.heroEditingDerivedIndex=this.heroDerivedCards.length-C.length,this.render()}catch(u){alert("导入失败："+u.message)}},c.click()}),document.querySelectorAll(".hero-card-list-item").forEach(c=>{c.addEventListener("click",h=>{const f=h.target;if(f.classList.contains("hero-card-list-delete-btn")||f.closest(".hero-card-list-delete-btn"))return;const u=c.dataset.heroCardIndex;u==="hero"?this.heroEditingDerivedIndex=null:u!==void 0&&(this.heroEditingDerivedIndex=parseInt(u,10)),this.render()})}),document.querySelectorAll(".hero-card-list-delete-btn").forEach(c=>{c.addEventListener("click",h=>{h.stopPropagation();const f=c.dataset.heroCardIndex;if(f===void 0)return;const u=parseInt(f,10);this.heroDerivedCards=this.heroDerivedCards.filter((b,m)=>m!==u),this.heroEditingDerivedIndex===u?this.heroEditingDerivedIndex=null:this.heroEditingDerivedIndex!==null&&this.heroEditingDerivedIndex>u&&this.heroEditingDerivedIndex--,this.render()})});const r=document.getElementById("hero-derived-name");r&&r.addEventListener("input",c=>{this.heroEditingDerivedIndex!==null&&(this.heroDerivedCards=this.heroDerivedCards.map((h,f)=>f===this.heroEditingDerivedIndex?{...h,name:c.target.value}:h))});const i=document.getElementById("hero-derived-cost");i&&i.addEventListener("input",c=>{if(this.heroEditingDerivedIndex===null)return;const h=parseInt(c.target.value,10)||0;this.heroDerivedCards=this.heroDerivedCards.map((f,u)=>u===this.heroEditingDerivedIndex?{...f,cost:h}:f)});const n=document.getElementById("hero-derived-attack");n&&n.addEventListener("input",c=>{if(this.heroEditingDerivedIndex===null)return;const h=parseInt(c.target.value,10)||0;this.heroDerivedCards=this.heroDerivedCards.map((f,u)=>u===this.heroEditingDerivedIndex?{...f,attack:h}:f)});const t=document.getElementById("hero-derived-health");t&&t.addEventListener("input",c=>{if(this.heroEditingDerivedIndex===null)return;const h=parseInt(c.target.value,10)||1;this.heroDerivedCards=this.heroDerivedCards.map((f,u)=>u===this.heroEditingDerivedIndex?{...f,health:h}:f)}),document.getElementById("draw-hero-image-btn")?.addEventListener("click",()=>{this.isDrawingMode?this.exitDrawingMode(!0):this.enterDrawingMode()}),document.getElementById("import-hero-image-btn")?.addEventListener("click",()=>{this.cropTarget="hero";const c=document.createElement("input");c.type="file",c.accept="image/*",c.onchange=async h=>{const f=h.target.files?.[0];f&&this.openHeroCropModal(f)},c.click()}),document.getElementById("add-hero-to-deck-btn")?.addEventListener("click",()=>{if(!this.heroName.trim()){alert("请输入英雄名称");return}const c={id:this.isHeroEditMode&&this.editingHeroId?this.editingHeroId:Ee(),name:this.heroName.trim(),cost:0,attack:0,health:30,maxHealth:30,type:"hero",keywords:[],imageData:this.heroImageData||void 0,skills:this.heroSkills,heroSpeech:{...this.heroSpeech,voiceType:this.heroVoiceType},derivedCards:this.heroDerivedCards.length>0?this.heroDerivedCards.map(f=>({name:f.name,type:f.type,cost:f.cost,attack:f.attack,health:f.health,maxHealth:f.health,imageData:f.imageData||void 0,keywords:f.keywords,effects:f.effects})):void 0};if(this.isHeroEditMode&&this.editingHeroId)this.state={...this.state,groups:this.state.groups.map(f=>({...f,cards:f.cards.map(u=>u.card.id===this.editingHeroId?{...u,card:c}:u)}))};else{const f=Re(this.state);this.state={...this.state,groups:this.state.groups.map(u=>u.id===f.id?{...u,cards:[...u.cards,{card:c,count:1}]}:u)}}this.syncSharedDeck(),this.saveDeck();const h=document.getElementById("hero-add-success");h?.classList.remove("hidden"),setTimeout(()=>{h?.classList.add("hidden")},1500)}),document.getElementById("import-hero-code-btn")?.addEventListener("click",()=>{const c=document.createElement("input");c.type="file",c.accept="image/png",c.onchange=async h=>{const f=h.target.files?.[0];if(f){if(f.type!=="image/png"){alert("请选择 PNG 格式的文件");return}try{const u=await this.importHeroFromPNGFile(f);if(!u){alert("无法从该 PNG 文件中读取英雄牌数据，请确保这是英雄牌文件");return}this.heroName=u.heroData.name||"",this.heroImageData=u.imageData,this.heroSpeech=u.heroData.heroSpeech?{...u.heroData.heroSpeech}:{greeting:"",apology:"",taunt:"",exclamation:"",pity:"",flirt:""},this.heroVoiceType=u.heroData.heroSpeech?.voiceType||"none",this.render()}catch(u){alert("导入失败："+u.message)}}},c.click()}),document.getElementById("hero-import-confirm-btn")?.addEventListener("click",async()=>{const c=document.createElement("input");c.type="file",c.accept="image/png",c.onchange=async h=>{const f=h.target.files?.[0];if(f){if(f.type!=="image/png"){alert("请选择 PNG 格式的文件");return}try{const u=await this.importHeroFromPNGFile(f);if(!u){alert("无法从该 PNG 文件中读取英雄牌数据");return}this.heroName=u.heroData.name||"",this.heroImageData=u.imageData,this.render()}catch(u){alert("导入失败："+u.message)}}},c.click()}),document.getElementById("export-hero-code-btn")?.addEventListener("click",async()=>{try{const c=await this.exportHeroToPNGBlob(),h=URL.createObjectURL(c),f=document.createElement("a"),u=(this.heroName||"未命名英雄").replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g,"_");f.href=h,f.download=`${u}.png`,f.click(),URL.revokeObjectURL(h)}catch(c){alert("导出失败："+c.message)}}),document.getElementById("hero-copy-btn")?.addEventListener("click",()=>{const c=document.getElementById("hero-export-text");c&&(c.select(),document.execCommand("copy"),alert("已复制到剪贴板！"))}),document.getElementById("add-hero-skill-btn")?.addEventListener("click",()=>{this.heroSkills.push({id:Date.now(),name:`技能${this.heroSkills.length+1}`,type:"active",cost:1,effects:[{...this.createDefaultEffect(),moment:"打出时"}]}),this.heroEditingSkillIndex=this.heroSkills.length-1,this.heroEditingSkillEffectIndex=0,this.render()}),document.querySelectorAll(".hero-skill-delete-btn").forEach(c=>{c.addEventListener("click",h=>{h.stopPropagation();const f=c.dataset.heroSkillIndex;if(f===void 0)return;const u=Number(f);this.heroSkills.splice(u,1),this.render()})}),document.getElementById("hero-skill-type-active")?.addEventListener("click",()=>{const c=this.heroEditingSkillIndex;c===null||!this.heroSkills[c]||(this.heroSkills[c].type="active",this.render())}),document.getElementById("hero-skill-type-passive")?.addEventListener("click",()=>{const c=this.heroEditingSkillIndex;if(c===null||!this.heroSkills[c])return;this.heroSkills[c].type="passive";const h=this.heroSkills[c].effects||[];h.length>0&&h[0].moment==="打出时"&&(h[0].moment="回合开始时"),this.render()}),document.getElementById("add-hero-skill-effect-btn")?.addEventListener("click",()=>{const c=this.heroEditingSkillIndex;if(c===null||!this.heroSkills[c])return;this.heroSkills[c].effects||(this.heroSkills[c].effects=[]);const h=this.heroSkills[c].type==="passive";this.heroSkills[c].effects.push({...this.createDefaultEffect(),moment:h?"回合开始时":"打出时"}),this.heroEditingSkillEffectIndex=this.heroSkills[c].effects.length-1,this.render()}),document.getElementById("remove-hero-skill-effect-btn")?.addEventListener("click",()=>{const c=this.heroEditingSkillIndex;if(c===null||!this.heroSkills[c]?.effects)return;const h=this.heroSkills[c].effects;h.length<=1||(h.splice(this.heroEditingSkillEffectIndex,1),this.heroEditingSkillEffectIndex>=h.length&&(this.heroEditingSkillEffectIndex=h.length-1),this.render())}),document.querySelectorAll(".hero-skill-effect-tab").forEach(c=>{c.addEventListener("click",()=>{const h=c.dataset.heroSkillEffectIndex;h!==void 0&&(this.heroEditingSkillEffectIndex=Number(h),this.render())})}),document.querySelectorAll(".hero-skill-icon").forEach(c=>{c.addEventListener("click",h=>{h.stopPropagation();const f=c.dataset.heroSkillIcon;if(f===void 0)return;const u=document.createElement("input");u.type="file",u.accept="image/*",u.onchange=async b=>{const m=b.target.files?.[0];m&&this.openSkillIconCropModal(m,Number(f))},u.click()})}),document.querySelectorAll(".hero-skill-list-item").forEach(c=>{c.addEventListener("click",h=>{const f=h.target;if(f.closest(".hero-skill-delete-btn")||f.closest(".hero-skill-icon"))return;const u=c.dataset.heroSkillIndex;u!==void 0&&(this.heroEditingSkillIndex=Number(u),this.heroSkills[this.heroEditingSkillIndex],this.render())})}),document.getElementById("hero-skill-name")?.addEventListener("input",c=>{const h=c.target;if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){this.heroSkills[this.heroEditingSkillIndex].name=h.value;const f=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${this.heroEditingSkillIndex}"] .skill-name-text`);f&&(f.textContent=h.value)}}),document.getElementById("hero-skill-cost")?.addEventListener("input",c=>{const h=c.target;if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){const f=Number(h.value);this.heroSkills[this.heroEditingSkillIndex].cost=f;const u=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${this.heroEditingSkillIndex}"] .skill-cost-num`);u&&(u.textContent=String(f))}}),document.getElementById("hero-skill-cooldown")?.addEventListener("input",c=>{const h=c.target;if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){const f=Math.max(0,Math.min(10,Number(h.value)||0));this.heroSkills[this.heroEditingSkillIndex].cooldown=f;const u=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${this.heroEditingSkillIndex}"] .skill-desc-text`);u&&(u.textContent=this.getHeroSkillDescription(this.heroSkills[this.heroEditingSkillIndex]))}}),document.getElementById("hero-skill-limited-checkbox")?.addEventListener("change",c=>{if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){const h=c.target.checked;this.heroSkills[this.heroEditingSkillIndex].limited=h,h&&(this.heroSkills[this.heroEditingSkillIndex].maxUses||(this.heroSkills[this.heroEditingSkillIndex].maxUses=1),this.heroSkills[this.heroEditingSkillIndex].cooldown=0),this.render()}}),document.getElementById("hero-skill-limited-input")?.addEventListener("input",c=>{const h=c.target;if(this.heroEditingSkillIndex!==null&&this.heroSkills[this.heroEditingSkillIndex]){const f=Math.max(1,Math.min(10,Number(h.value)||1));this.heroSkills[this.heroEditingSkillIndex].maxUses=f;const u=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${this.heroEditingSkillIndex}"] .skill-desc-text`);u&&(u.textContent=this.getHeroSkillDescription(this.heroSkills[this.heroEditingSkillIndex]))}});const l=this.heroEditingSkillIndex,o=l!==null?this.heroSkills[l]:null;o?.effects?.[this.heroEditingSkillEffectIndex],document.getElementById("toggle-hero-skill-moment-btn")?.addEventListener("click",()=>{this.showHeroSkillMomentPanel=!this.showHeroSkillMomentPanel,this.render()}),document.querySelectorAll(".hero-skill-moment-item").forEach(c=>{c.addEventListener("click",()=>{const h=c.dataset.heroSkillMoment;if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].moment=h,this.showHeroSkillMomentPanel=!1;const f=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);f&&(f.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}})}),document.getElementById("toggle-hero-skill-condition-btn")?.addEventListener("click",()=>{this.showHeroSkillConditionPanel=!this.showHeroSkillConditionPanel,this.render()}),document.querySelectorAll(".hero-skill-condition-item").forEach(c=>{c.addEventListener("click",h=>{h.stopPropagation();const f=c.dataset.heroSkillCondition;if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){const u=o.effects[this.heroEditingSkillEffectIndex];this.setConditionType(f,u),this.render()}})}),document.getElementById("toggle-hero-skill-target-btn")?.addEventListener("click",()=>{this.showHeroSkillTargetPanel=!this.showHeroSkillTargetPanel,this.render()}),document.querySelectorAll(".hero-skill-target-item").forEach(c=>{c.addEventListener("click",()=>{const h=c.dataset.heroSkillTarget;if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){const f=o.effects[this.heroEditingSkillEffectIndex];if(f.targets||(f.targets=[]),["无需目标","卡牌","选择目标","选择随从"].includes(h))f.targets.includes(h)?f.targets=[]:(f.targets=[h],(h==="无需目标"||h==="卡牌")&&(this.showHeroSkillTargetPanel=!1));else if(f.targets.some(y=>["无需目标","卡牌","选择目标","选择随从"].includes(y)))f.targets=[h];else{const y=f.targets.indexOf(h);y>=0?f.targets.splice(y,1):f.targets.push(h)}this.showHeroSkillEffectPanel=!0;const u=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);u&&(u.textContent=this.getHeroSkillDescription(this.heroSkills[l]));const b=document.querySelector(".hero-skill-target-scroll");b&&(this.pendingScrollRestoration={selector:".hero-skill-target-scroll",scrollTop:b.scrollTop}),this.render()}})});const d=document.getElementById("random-target-check-hero-skill");d?.addEventListener("click",c=>{c.stopPropagation()}),d?.addEventListener("change",c=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){const h=o.effects[this.heroEditingSkillEffectIndex];h.isRandomTarget=c.target.checked;const f=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);f&&(f.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}});const p=document.getElementById("retrieved-random-check-hero-skill");p?.addEventListener("click",c=>{c.stopPropagation()}),p?.addEventListener("change",c=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){const h=o.effects[this.heroEditingSkillEffectIndex];h.targetRetrievedRandom=c.target.checked;const f=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);f&&(f.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}}),document.querySelectorAll('.trigger-num-btn[data-editor="hero-skill"]').forEach(c=>{c.addEventListener("click",h=>{h.stopPropagation();const f=this.heroEditingSkillIndex;if(typeof f!="number"||f<0)return;const u=this.heroSkills[f];if(!u?.effects?.[this.heroEditingSkillEffectIndex])return;const b=parseInt(c.dataset.triggerNum||"1",10),m=u.effects[this.heroEditingSkillEffectIndex];m.triggerNumbers||(m.triggerNumbers=[1,2,3,4,5,6]);const y=m.triggerNumbers.indexOf(b);if(y>=0){if(m.triggerNumbers.length===1)return;m.triggerNumbers.splice(y,1)}else m.triggerNumbers.push(b),m.triggerNumbers.sort((x,v)=>x-v);this.render()})}),document.getElementById("hero-skill-opponent-checkbox")?.addEventListener("change",c=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].isOpponent=c.target.checked;const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);h&&(h.textContent=this.getHeroSkillDescription(this.heroSkills[l]))}}),document.querySelectorAll(".hero-skill-effect-item").forEach(c=>{c.addEventListener("click",()=>{const h=c.dataset.heroSkillEffect;if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].effect=h;const f=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);f&&(f.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}})}),document.getElementById("hero-skill-effect-value")?.addEventListener("input",c=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].value=Number(c.target.value);const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);h&&(h.textContent=this.getHeroSkillDescription(this.heroSkills[l]))}}),document.getElementById("hero-skill-attack-value")?.addEventListener("input",c=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].attackValue=Number(c.target.value);const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);h&&(h.textContent=this.getHeroSkillDescription(this.heroSkills[l]))}}),document.getElementById("hero-skill-health-value")?.addEventListener("input",c=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].healthValue=Number(c.target.value);const h=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);h&&(h.textContent=this.getHeroSkillDescription(this.heroSkills[l]))}}),document.getElementById("hero-skill-atk-pos-btn")?.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].isAttackSet=!1,o.effects[this.heroEditingSkillEffectIndex].isAttackPositive=!0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}}),document.getElementById("hero-skill-atk-zero-btn")?.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].attackValue=0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}}),document.getElementById("hero-skill-atk-neg-btn")?.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].isAttackSet=!1,o.effects[this.heroEditingSkillEffectIndex].isAttackPositive=!1;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}}),document.getElementById("hero-skill-atk-set-btn")?.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].isAttackSet=!0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}}),document.getElementById("hero-skill-hp-pos-btn")?.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].isHealthSet=!1,o.effects[this.heroEditingSkillEffectIndex].isHealthPositive=!0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}}),document.getElementById("hero-skill-hp-zero-btn")?.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].healthValue=0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}}),document.getElementById("hero-skill-hp-neg-btn")?.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].isHealthSet=!1,o.effects[this.heroEditingSkillEffectIndex].isHealthPositive=!1;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}}),document.getElementById("hero-skill-hp-set-btn")?.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].isHealthSet=!0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}}),document.getElementById("hero-skill-cost-pos-btn")?.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].isCostSet=!1,o.effects[this.heroEditingSkillEffectIndex].isCostPositive=!0,o.effects[this.heroEditingSkillEffectIndex].costValue===0&&(o.effects[this.heroEditingSkillEffectIndex].costValue=1);const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}}),document.getElementById("hero-skill-cost-zero-btn")?.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].costValue=0;const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}}),document.getElementById("hero-skill-cost-neg-btn")?.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].isCostSet=!1,o.effects[this.heroEditingSkillEffectIndex].isCostPositive=!1,o.effects[this.heroEditingSkillEffectIndex].costValue===0&&(o.effects[this.heroEditingSkillEffectIndex].costValue=1);const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}}),document.getElementById("hero-skill-cost-set-btn")?.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){o.effects[this.heroEditingSkillEffectIndex].isCostSet=!0,o.effects[this.heroEditingSkillEffectIndex].costValue===0&&(o.effects[this.heroEditingSkillEffectIndex].costValue=1);const c=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);c&&(c.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}}),document.querySelectorAll(".hero-skill-summon-source-btn").forEach(c=>{c.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){const h=c.dataset.source;o.effects[this.heroEditingSkillEffectIndex].summonSource=h;const f=document.querySelector(`.hero-skill-list-item[data-hero-skill-index="${l}"] .skill-desc-text`);f&&(f.textContent=this.getHeroSkillDescription(this.heroSkills[l])),this.render()}})}),document.querySelectorAll(".hero-skill-summon-card-item").forEach(c=>{c.addEventListener("click",()=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){const h=parseInt(c.dataset.heroSkillSummonIndex||"0",10),f=o.effects[this.heroEditingSkillEffectIndex];if(f.isRandom){f.summonedCardIndices=f.summonedCardIndices||[];const u=f.summonedCardIndices.indexOf(h);u>=0?f.summonedCardIndices.splice(u,1):f.summonedCardIndices.push(h)}else f.summonedCardIndex=f.summonedCardIndex===h?void 0:h;this.render()}})}),document.getElementById("hero-skill-summon-random-checkbox")?.addEventListener("change",c=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){const h=o.effects[this.heroEditingSkillEffectIndex];h.isRandom=c.target.checked,h.isRandom?(h.summonedCardIndices=h.summonedCardIndex!==void 0?[h.summonedCardIndex]:[],h.summonedCardIndex=void 0):(h.summonedCardIndex=h.summonedCardIndices?.[0],h.summonedCardIndices=void 0),this.render()}}),document.getElementById("hero-skill-summon-count-input")?.addEventListener("change",c=>{if(l!==null&&o?.effects?.[this.heroEditingSkillEffectIndex]){const h=o.effects[this.heroEditingSkillEffectIndex],f=parseInt(c.target.value)||1;h.value=Math.max(1,f),this.render()}})}openHeroCropModal(e){const s=document.getElementById("crop-modal"),a=document.getElementById("crop-canvas");if(!s||!a)return;const r=Math.min(window.innerWidth*.65,480),i=Math.min(window.innerHeight*.55,520),n=4/3;let t=0,l=0,o=0,d=0;r/i>n?(l=i*.88,t=l*n):(t=r*.88,l=t/n),o=(r-t)/2,d=(i-l)/2,a.width=r,a.height=i;const p=a.getContext("2d");if(!p)return;p.imageSmoothingEnabled=!1;let c=1,h=0,f=0,u=!1,b=0,m=0,y=0,x=0,v=null,C=null,g=!1,k=15,w="medium",P=!1,M=null;const R=()=>{["thin","medium","thick"].forEach(ne=>{const S=document.getElementById(`hero-crop-eraser-${ne}-btn`);if(S){const F=w===ne;S.style.borderColor=F?"#4a9":"#666",S.style.background=F?"#2a6":"#444",S.style.color=F?"#fff":"#aaa"}})},$=(G,ne)=>{if(!M||!v)return;const S=(G-h)/c,F=(ne-f)/c,V=k/c,_=M.getContext("2d");_.fillStyle="#ffffff",_.beginPath(),_.arc(S,F,Math.max(1,V/2),0,Math.PI*2),_.fill(),Y()},L=G=>{const S=G+8,F=document.createElement("canvas");F.width=S,F.height=S;const V=F.getContext("2d");return V.strokeStyle="rgba(255,255,255,0.95)",V.lineWidth=2,V.beginPath(),V.arc(S/2,S/2,G/2,0,Math.PI*2),V.stroke(),V.strokeStyle="rgba(0,0,0,0.3)",V.lineWidth=1,V.beginPath(),V.arc(S/2,S/2,G/2,0,Math.PI*2),V.stroke(),`url(${F.toDataURL()}) ${S/2} ${S/2}, crosshair`},T=(G,ne,S,F,V)=>{const _=r,D=i;G.clearRect(0,0,_,D),G.fillStyle="#1a1a1a",G.fillRect(0,0,_,D),G.save(),G.beginPath(),G.rect(o-30,d-30,t+60,l+60),G.clip(),G.drawImage(ne,F,V,ne.naturalWidth*S,ne.naturalHeight*S),M&&(G.globalCompositeOperation="destination-out",G.drawImage(M,F,V,M.width*S,M.height*S),G.globalCompositeOperation="source-over"),G.restore(),G.fillStyle="rgba(0,0,0,0.6)",G.fillRect(0,0,_,d),G.fillRect(0,d+l,_,D-d-l),G.fillRect(0,d,o,l),G.fillRect(o+t,d,_-o-t,l),G.strokeStyle="rgba(200,160,100,0.9)",G.lineWidth=2,G.strokeRect(o,d,t,l),G.strokeStyle="rgba(255,255,255,0.25)",G.lineWidth=1;const N=l/3,X=t/3;G.beginPath(),G.moveTo(o,d+N),G.lineTo(o+t,d+N),G.moveTo(o,d+N*2),G.lineTo(o+t,d+N*2),G.moveTo(o+X,d),G.lineTo(o+X,d+l),G.moveTo(o+X*2,d),G.lineTo(o+X*2,d+l),G.stroke()};s.style.display="flex";const H=new Image;H.onload=()=>{v=H,M=document.createElement("canvas"),M.width=H.naturalWidth,M.height=H.naturalHeight,M.getContext("2d").clearRect(0,0,M.width,M.height);const ne=document.getElementById("hero-crop-eraser-panel");ne&&(ne.style.display=this.isPortraitMode?"none":"flex"),R();const S=t/H.naturalWidth,F=l/H.naturalHeight;c=Math.max(S,F),h=o+t/2-H.naturalWidth*c/2,f=d+l/2-H.naturalHeight*c/2,T(p,H,c,h,f)},H.src=URL.createObjectURL(e);const Z=a.cloneNode(!0);a.parentNode?.replaceChild(Z,a);const j=Z,ee=j.getContext("2d");ee.imageSmoothingEnabled=!1;const Y=()=>{v&&ee&&T(ee,v,c,h,f)};j.addEventListener("mousedown",G=>{if(g&&v){P=!0,j.style.cursor=L(k),$(G.offsetX,G.offsetY);return}u=!0,b=G.offsetX,m=G.offsetY,y=h,x=f,j.style.cursor="grabbing"});const ie=G=>{if(P&&v){const S=j.getBoundingClientRect();$(G.clientX-S.left,G.clientY-S.top);return}if(!u||!j)return;const ne=j.getBoundingClientRect();h=y+(G.clientX-ne.left-b),f=x+(G.clientY-ne.top-m),Y()},U=()=>{if(P){P=!1,j.style.cursor=g?L(k):"grab";return}u&&(u=!1,j.style.cursor="grab")};window.addEventListener("mousemove",ie),window.addEventListener("mouseup",U);const W=G=>{if(!v||!j.isConnected||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(G.key))return;G.preventDefault();const ne=2;G.key==="ArrowLeft"?h-=ne:G.key==="ArrowRight"?h+=ne:G.key==="ArrowUp"?f-=ne:G.key==="ArrowDown"&&(f+=ne),Y()};document.addEventListener("keydown",W),j.addEventListener("wheel",G=>{if(G.preventDefault(),!v)return;const ne=j.getBoundingClientRect(),S=G.clientX-ne.left,F=G.clientY-ne.top,V=G.deltaY<0?1.03:.97,_=Math.max(.1,c*V);h=S-(S-h)*(_/c),f=F-(F-f)*(_/c),c=_,Y()},{passive:!1});let he=0,de=1,I=0,A=0;j.addEventListener("touchstart",G=>{if(g&&v&&G.touches.length===1){P=!0;const ne=j.getBoundingClientRect();$(G.touches[0].clientX-ne.left,G.touches[0].clientY-ne.top);return}if(G.touches.length===1){u=!0;const ne=j.getBoundingClientRect();b=G.touches[0].clientX-ne.left,m=G.touches[0].clientY-ne.top,y=h,x=f}else if(G.touches.length===2){u=!1;const ne=G.touches[0].clientX-G.touches[1].clientX,S=G.touches[0].clientY-G.touches[1].clientY;he=Math.sqrt(ne*ne+S*S),de=c,I=h,A=f}},{passive:!0}),j.addEventListener("touchmove",G=>{if(G.preventDefault(),P&&v&&G.touches.length===1){const ne=j.getBoundingClientRect();$(G.touches[0].clientX-ne.left,G.touches[0].clientY-ne.top);return}if(G.touches.length===1&&u){const ne=j.getBoundingClientRect();h=y+(G.touches[0].clientX-ne.left-b),f=x+(G.touches[0].clientY-ne.top-m),Y()}else if(G.touches.length===2){const ne=G.touches[0].clientX-G.touches[1].clientX,S=G.touches[0].clientY-G.touches[1].clientY,V=Math.sqrt(ne*ne+S*S)/Math.max(.001,he),_=Math.max(.1,Math.min(10,de*V)),D=j.getBoundingClientRect(),N=(G.touches[0].clientX+G.touches[1].clientX)/2-D.left,X=(G.touches[0].clientY+G.touches[1].clientY)/2-D.top;h=N-(N-I)*(_/de),f=X-(X-A)*(_/de),c=_,Y()}},{passive:!1}),j.addEventListener("touchend",()=>{P=!1,u=!1},{passive:!0}),document.getElementById("crop-hcenter-btn")?.addEventListener("click",()=>{v&&(h=o+t/2-v.naturalWidth*c/2,Y())}),document.getElementById("crop-vcenter-btn")?.addEventListener("click",()=>{v&&(f=d+l/2-v.naturalHeight*c/2,Y())}),document.getElementById("crop-cover-btn")?.addEventListener("click",()=>{if(!v)return;const G=t/v.naturalWidth,ne=l/v.naturalHeight;c=Math.max(G,ne),h=o+t/2-v.naturalWidth*c/2,f=d+l/2-v.naturalHeight*c/2,Y()}),document.getElementById("crop-contain-btn")?.addEventListener("click",()=>{if(!v)return;const G=t/v.naturalWidth,ne=l/v.naturalHeight;c=Math.min(G,ne),h=o+t/2-v.naturalWidth*c/2,f=d+l/2-v.naturalHeight*c/2,Y()}),document.getElementById("hero-crop-eraser-btn")?.addEventListener("click",()=>{g=!g;const G=document.getElementById("hero-crop-eraser-btn");G&&(G.style.borderColor=g?"#4a9":"#888"),j.style.cursor=g?L(k):"grab"}),document.getElementById("hero-crop-eraser-thin-btn")?.addEventListener("click",()=>{k=5,w="thin",R(),g&&(j.style.cursor=L(5))}),document.getElementById("hero-crop-eraser-medium-btn")?.addEventListener("click",()=>{k=15,w="medium",R(),g&&(j.style.cursor=L(15))}),document.getElementById("hero-crop-eraser-thick-btn")?.addEventListener("click",()=>{k=45,w="thick",R(),g&&(j.style.cursor=L(45))}),j.__cropCleanup=()=>{window.removeEventListener("mousemove",ie),window.removeEventListener("mouseup",U),document.removeEventListener("keydown",W);const G=document.getElementById("hero-crop-eraser-panel");G&&(G.style.display="none");const ne=document.getElementById("hero-crop-eraser-btn");ne&&(ne.style.borderColor="#888"),g=!1,P=!1,M=null};const B=()=>{const G=document.getElementById("crop-modal"),ne=document.getElementById("crop-canvas");G&&(G.style.display="none"),v&&(URL.revokeObjectURL(v.src),v=null),ne?.__cropCleanup&&ne.__cropCleanup()},q=document.getElementById("crop-cancel-btn"),O=q?.cloneNode(!0);q&&O&&(q.parentNode?.replaceChild(O,q),O.addEventListener("click",B));const J=document.getElementById("crop-confirm-btn"),re=J?.cloneNode(!0);J&&re&&(J.parentNode?.replaceChild(re,J),re.addEventListener("click",async()=>{if(!v){B();return}const G=(o-h)/c,ne=(d-f)/c,S=t/c,F=l/c,V=document.createElement("canvas");V.width=800,V.height=600;const _=V.getContext("2d");if(!_){B();return}_.imageSmoothingEnabled=!1,_.drawImage(v,G,ne,S,F,0,0,800,600),M&&(_.globalCompositeOperation="destination-out",_.drawImage(M,G,ne,S,F,0,0,800,600),_.globalCompositeOperation="source-over");const D=V.toDataURL("image/png");try{const{bgDataUrl:N}=await this.generateAtmosphereBackground(D),X=new Image;X.onload=()=>{const K=document.createElement("canvas");K.width=400,K.height=300;const z=K.getContext("2d");if(z){z.imageSmoothingEnabled=!1,z.drawImage(X,0,0,400,300);const Q=K.toDataURL("image/png"),ae=document.createElement("canvas");ae.width=400,ae.height=300;const te=ae.getContext("2d");if(te){te.imageSmoothingEnabled=!1;const le=new Image;le.onload=()=>{te.drawImage(le,0,0,400,300);const ce=new Image;ce.onload=()=>{const ue=Math.max(400/ce.naturalWidth,300/ce.naturalHeight),se=ce.naturalWidth*ue,pe=ce.naturalHeight*ue,me=(400-se)/2,we=(300-pe)/2,ye=30,ve=.85,Ie=ye*4,Se=document.createElement("canvas");Se.width=se+Ie*2,Se.height=pe+Ie*2;const Pe=Se.getContext("2d");Pe&&(Pe.imageSmoothingEnabled=!1,Pe.drawImage(ce,Ie,Ie,se,pe),Pe.globalCompositeOperation="source-in",Pe.fillStyle="#000000",Pe.fillRect(0,0,Se.width,Se.height),Pe.globalCompositeOperation="source-over",te.save(),te.filter=`blur(${ye}px)`,te.globalAlpha=ve,te.drawImage(Se,me-Ie,we-Ie),te.restore()),te.drawImage(ce,me,we,se,pe),C=ae.toDataURL("image/png"),this.heroImageData=C,this.render()},ce.src=D},le.src=Q}}},X.src=N}catch(N){alert("生成氛围感背景失败："+N.message)}B()}))}openVariableSelectorModal(e){document.getElementById("variable-selector-overlay")?.remove();const s=[{key:"my_hand",label:"<我方手牌数>"},{key:"enemy_hand",label:"<敌方手牌数>"},{key:"my_minions",label:"<我方随从数>"},{key:"enemy_minions",label:"<敌方随从数>"}],a=document.createElement("div");a.id="variable-selector-overlay",a.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9999999;display:flex;align-items:center;justify-content:center;";const r=document.createElement("div");r.style.cssText="background:#f5edd6;border-radius:12px;padding:16px;min-width:200px;max-width:280px;box-shadow:0 4px 20px rgba(0,0,0,0.3);",r.innerHTML=`
      <div style="font-weight:bold;font-size:14px;color:#5a4a3a;margin-bottom:10px;text-align:center;">变量列表</div>
      ${s.map(i=>`
        <div class="variable-option" data-variable="${i.key}"
          style="padding:8px 12px;margin:4px 0;border-radius:8px;cursor:pointer;font-size:13px;color:#5a4a3a;background:rgba(212,196,168,0.4);border:1px solid #d4c4a8;transition:all 0.15s;">
          ${i.label}
        </div>
      `).join("")}
    `,a.appendChild(r),document.body.appendChild(a),r.querySelectorAll(".variable-option").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.variable;a.remove(),e(n)}),i.addEventListener("mouseenter",()=>{i.style.background="rgba(111,168,220,0.3)",i.style.borderColor="#6fa8dc"}),i.addEventListener("mouseleave",()=>{i.style.background="rgba(212,196,168,0.4)",i.style.borderColor="#d4c4a8"})}),a.addEventListener("click",i=>{i.target===a&&a.remove()})}openSkillIconCropModal(e,s){const a=document.getElementById("crop-modal"),r=document.getElementById("crop-canvas");if(!a||!r)return;const i=r.getContext("2d");if(!i)return;i.imageSmoothingEnabled=!1,a.style.display="flex";const n=400,t=600,l=600;r.width=t,r.height=l;const o=(t-n)/2,d=(l-n)/2,p=new FileReader;let c="";const h=new Image;h.onload=()=>{const f=h.naturalWidth,u=h.naturalHeight,b=t/f,m=l/u,y=Math.min(b,m);let x=(t-f*y)/2,v=(l-u*y)/2,C=y,g=!1,k=0,w=0,P=0,M=1,R=0,$=0,L=0,T=0;const H=()=>{i.clearRect(0,0,t,l),i.drawImage(h,x,v,f*C,u*C),i.fillStyle="rgba(0,0,0,0.5)",i.beginPath(),i.rect(0,0,t,l),i.arc(o+n/2,d+n/2,n/2,0,Math.PI*2,!0),i.fill("evenodd"),i.strokeStyle="white",i.lineWidth=2,i.setLineDash([8,6]),i.beginPath(),i.arc(o+n/2,d+n/2,n/2,0,Math.PI*2),i.stroke(),i.setLineDash([])};H();const Z=O=>{g=!0,k=O.clientX,w=O.clientY},j=O=>{if(!g)return;const J=O.clientX-k,re=O.clientY-w;x+=J,v+=re,k=O.clientX,w=O.clientY,H()},ee=()=>{g=!1};r.addEventListener("mousedown",Z),window.addEventListener("mousemove",j),window.addEventListener("mouseup",ee);const Y=(O,J)=>Math.sqrt((O.clientX-J.clientX)**2+(O.clientY-J.clientY)**2),ie=O=>{if(O.preventDefault(),O.touches.length===1)g=!0,k=O.touches[0].clientX,w=O.touches[0].clientY;else if(O.touches.length===2){g=!1,P=Y(O.touches[0],O.touches[1]),M=C,R=(O.touches[0].clientX+O.touches[1].clientX)/2,$=(O.touches[0].clientY+O.touches[1].clientY)/2;const J=r.getBoundingClientRect();L=R-J.left,T=$-J.top,L=(L-x)/C,T=(T-v)/C}},U=O=>{if(O.preventDefault(),O.touches.length===1&&g){const J=O.touches[0].clientX-k,re=O.touches[0].clientY-w;x+=J,v+=re,k=O.touches[0].clientX,w=O.touches[0].clientY,H()}else if(O.touches.length===2){const J=Y(O.touches[0],O.touches[1]),re=Math.max(.1,Math.min(M*(J/P),5)),G=r.getBoundingClientRect(),ne=(O.touches[0].clientX+O.touches[1].clientX)/2-G.left,S=(O.touches[0].clientY+O.touches[1].clientY)/2-G.top;x=ne-L*re,v=S-T*re,C=re,H()}},W=O=>{O.touches.length===0&&(g=!1)};r.addEventListener("touchstart",ie,{passive:!1}),r.addEventListener("touchmove",U,{passive:!1}),r.addEventListener("touchend",W);const he=O=>{O.preventDefault();const J=r.getBoundingClientRect(),re=O.clientX-J.left,G=O.clientY-J.top,ne=O.deltaY>0?.97:1.03,S=Math.max(.1,C*ne),F=(re-x)/C,V=(G-v)/C;x=re-F*S,v=G-V*S,C=S,H()};r.addEventListener("wheel",he,{passive:!1});const de=O=>{if(!h||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(O.key))return;O.preventDefault();const J=2;O.key==="ArrowLeft"?x-=J:O.key==="ArrowRight"?x+=J:O.key==="ArrowUp"?v-=J:O.key==="ArrowDown"&&(v+=J),H()};document.addEventListener("keydown",de);const I=()=>{a.style.display="none",r.removeEventListener("mousedown",Z),window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",ee),r.removeEventListener("wheel",he),r.removeEventListener("touchstart",ie),r.removeEventListener("touchmove",U),r.removeEventListener("touchend",W),B.removeEventListener("click",q),A.removeEventListener("click",I),document.removeEventListener("keydown",de)},A=document.getElementById("crop-cancel-btn"),B=document.getElementById("crop-confirm-btn");A.addEventListener("click",I);const q=async()=>{if(!h){I();return}const O=(o-x)/C,J=(d-v)/C,re=n/C,G=n/C,ne=document.createElement("canvas");ne.width=n,ne.height=n;const S=ne.getContext("2d");if(!S){I();return}S.imageSmoothingEnabled=!1,S.drawImage(h,O,J,re,G,0,0,n,n);const F=ne.toDataURL("image/png");try{const{bgDataUrl:V}=await this.generateAtmosphereBackground(F),_=new Image;_.onload=()=>{const D=document.createElement("canvas");D.width=100,D.height=100;const N=D.getContext("2d");if(!N){I();return}N.imageSmoothingEnabled=!1,N.beginPath(),N.arc(50,50,50,0,Math.PI*2),N.closePath(),N.save(),N.clip();const X=Math.max(100/_.naturalWidth,100/_.naturalHeight),K=_.naturalWidth*X,z=_.naturalHeight*X,Q=(100-K)/2,ae=(100-z)/2;N.drawImage(_,Q,ae,K,z),N.drawImage(ne,0,0,n,n,0,0,100,100),N.restore();const te=D.toDataURL("image/png");this.heroSkills[s]&&(this.heroSkills[s].iconData=te),this.render(),I()},_.src=V}catch(V){alert("生成氛围感背景失败："+V.message),I()}};document.getElementById("crop-hcenter-btn")?.addEventListener("click",()=>{h&&(x=o+n/2-h.naturalWidth*C/2,H())}),document.getElementById("crop-vcenter-btn")?.addEventListener("click",()=>{h&&(v=d+n/2-h.naturalHeight*C/2,H())}),document.getElementById("crop-cover-btn")?.addEventListener("click",()=>{if(!h)return;const O=n/h.naturalWidth,J=n/h.naturalHeight;C=Math.max(O,J),x=o+n/2-h.naturalWidth*C/2,v=d+n/2-h.naturalHeight*C/2,H()}),document.getElementById("crop-contain-btn")?.addEventListener("click",()=>{if(!h)return;const O=n/h.naturalWidth,J=n/h.naturalHeight;C=Math.min(O,J),x=o+n/2-h.naturalWidth*C/2,v=d+n/2-h.naturalHeight*C/2,H()}),B.addEventListener("click",q)},p.onload=()=>{c=p.result,h.src=c},p.readAsDataURL(e)}attachCardCreatorEvents(){document.getElementById("side-panel-handle")?.addEventListener("click",()=>{this.showSidePanel=!this.showSidePanel,this.renderCardCreator()}),document.getElementById("close-side-panel-btn")?.addEventListener("click",()=>{this.showSidePanel=!1,this.renderCardCreator()}),document.getElementById("toggle-side-panel-btn")?.addEventListener("click",()=>{this.showSidePanel=!this.showSidePanel,this.renderCardCreator()}),document.getElementById("card-type-minion")?.addEventListener("click",()=>{this.currentCard.type="minion",this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("card-type-spell")?.addEventListener("click",()=>{this.currentCard.type="spell",(!this.currentCard.effects||this.currentCard.effects.length===0)&&(this.currentCard.effects=[{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}]),this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("card-type-minion-side")?.addEventListener("click",()=>{this.currentCard.type="minion",this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("card-type-spell-side")?.addEventListener("click",()=>{this.currentCard.type="spell",(!this.currentCard.effects||this.currentCard.effects.length===0)&&(this.currentCard.effects=[{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}]),this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("add-derived-card-btn")?.addEventListener("click",()=>{this.addDerivedCard(),this.renderCardCreator()}),document.querySelectorAll(".card-list-item").forEach(I=>{I.addEventListener("click",A=>{if(A.target.classList.contains("card-list-delete-btn"))return;const q=parseInt(I.dataset.cardIndex||"0",10);this.currentCardIndex=q,this.currentEffectIndex=0,this.renderCardCreator()})}),document.querySelectorAll(".card-list-delete-btn").forEach(I=>{I.addEventListener("click",A=>{A.stopPropagation();const B=parseInt(I.dataset.cardIndex||"0",10);B!==0&&(this.deleteDerivedCard(B),this.renderCardCreator())})}),document.getElementById("prev-card-btn")?.addEventListener("click",()=>{this.currentCardIndex=(this.currentCardIndex-1+this.editingCards.length)%this.editingCards.length,this.currentEffectIndex=0,this.renderCardCreator()}),document.getElementById("next-card-btn")?.addEventListener("click",()=>{this.currentCardIndex=(this.currentCardIndex+1)%this.editingCards.length,this.currentEffectIndex=0,this.renderCardCreator()}),document.querySelectorAll(".spell-target-item").forEach(I=>{I.addEventListener("click",()=>{const A=I.dataset.spellTarget,B=this.currentCard.effects?.[this.currentEffectIndex];if(!B)return;B.targets||(B.targets=[]);const q=I.closest(".target-scroll-container"),O=document.querySelectorAll(".target-scroll-container"),J=Array.from(O).indexOf(q);if(this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:q?q.scrollTop:0,containerIndex:J>=0?J:0},["无需目标","卡牌","选择目标","选择随从"].includes(A))B.targets.includes(A)?B.targets=[]:(B.targets=[A],this.showTargetPanel=!1);else if(B.targets.some(G=>["无需目标","卡牌","选择目标","选择随从"].includes(G)))B.targets=[A];else{const G=B.targets.indexOf(A);G>=0?B.targets.splice(G,1):B.targets.push(A)}this.showEffectPanel=!0,this.renderCardCreator()})}),document.querySelectorAll(".spell-moment-item").forEach(I=>{I.addEventListener("click",()=>{const A=I.dataset.spellMoment,B=this.currentCard.effects?.[this.currentEffectIndex],q=!!B?.moment;if(B&&(B.moment=A,(A==="打出时"||A==="死亡时")&&B.effect==="变化"&&(B.effect=null,B.summonedCardIndex=void 0),A==="打出时"&&B.effect==="召唤"&&B.summonedCardIndex===this.currentCardIndex)){const O=this.editingCards.map((J,re)=>re).filter(J=>!(this.editingCards[J].type==="spell"||J===this.currentCardIndex));B.summonedCardIndex=O.length>0?O[0]:0}q||(this.showMomentPanel=!1),this.renderCardCreator()})}),document.querySelectorAll(".spell-effect-item").forEach(I=>{I.addEventListener("click",()=>{const A=I.dataset.spellEffectType,B=this.currentCard.effects?.[this.currentEffectIndex];if(B&&(B.effect=A,["召唤","获得","变化"].includes(A))){B.value=1;const q=this.editingCards.map((O,J)=>J).filter(O=>!((A==="变化"||A==="召唤")&&this.editingCards[O].type==="spell"||A==="变化"&&O===this.currentCardIndex||A==="召唤"&&Fe(B,"打出时")&&O===this.currentCardIndex));B.summonedCardIndex=q.length>0?q[0]:0}this.showEffectPanel=!1,this.renderCardCreator()})}),document.getElementById("toggle-spell-target-btn")?.addEventListener("click",()=>{this.showTargetPanel=!this.showTargetPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-target-btn-side")?.addEventListener("click",()=>{this.showTargetPanel=!this.showTargetPanel,this.renderCardCreator()});const e=document.getElementById("opponent-checkbox-spell-side");e?.addEventListener("click",I=>{I.stopPropagation()}),e?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.isOpponent=I.target.checked,this.renderCardCreator())});const s=document.getElementById("opponent-checkbox-spell");s?.addEventListener("click",I=>{I.stopPropagation()}),s?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.isOpponent=I.target.checked,this.renderCardCreator())}),document.getElementById("toggle-spell-moment-btn")?.addEventListener("click",()=>{this.showMomentPanel=!this.showMomentPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-moment-btn-side")?.addEventListener("click",()=>{this.showMomentPanel=!this.showMomentPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-effect-btn")?.addEventListener("click",()=>{this.showEffectPanel=!this.showEffectPanel,this.renderCardCreator()}),document.getElementById("spell-effect-value")?.addEventListener("input",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.value=Math.max(1,parseInt(I.target.value)||1)),this.updateCardPreview()}),document.getElementById("spell-effect-speech-text")?.addEventListener("input",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.speechText=I.target.value),this.updateCardPreview()}),document.querySelectorAll(".element-select-btn").forEach(I=>{I.addEventListener("click",()=>{const A=I,B=A.dataset.elementType||void 0;A.dataset.spell;const q=this.currentCard.effects?.[this.currentEffectIndex];q&&(q.elementType=B,this.updateCardPreview(),this.renderCardCreator())})}),document.querySelectorAll(".spell-summon-source-btn").forEach(I=>{I.addEventListener("click",()=>{const A=I.dataset.source,B=this.currentCard.effects?.[this.currentEffectIndex];B&&B.effect&&["召唤","获得","变化","属性变化"].includes(B.effect)&&(B.summonSource=A,this.updateEffectDescription(),this.renderCardCreator())})}),document.querySelectorAll(".spell-summon-card-item").forEach(I=>{I.addEventListener("click",()=>{const A=parseInt(I.dataset.spellSummonIndex||"0"),B=this.currentCard.effects?.[this.currentEffectIndex];if(B&&B.effect&&["召唤","获得","变化"].includes(B.effect)){if(B.isRandom){const q=B.summonedCardIndices??[];q.includes(A)?B.summonedCardIndices=q.filter(O=>O!==A):B.summonedCardIndices=[...q,A],B.summonedCardIndex=B.summonedCardIndices[0]??0}else B.summonedCardIndex=A,B.summonedCardIndices=void 0;this.updateCardPreview(),this.renderCardCreator()}})}),document.getElementById("spell-summon-random-checkbox")?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&A.effect&&["召唤","获得","变化","属性变化"].includes(A.effect)&&(A.isRandom=I.target.checked,!A.isRandom&&A.summonedCardIndices&&A.summonedCardIndices.length>0?(A.summonedCardIndex=A.summonedCardIndices[0],A.summonedCardIndices=void 0):A.isRandom&&A.summonedCardIndex!==void 0&&(A.summonedCardIndices=[A.summonedCardIndex]),this.updateCardPreview(),this.renderCardCreator())}),document.getElementById("spell-summon-count-input")?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];if(A&&A.effect&&["召唤","获得"].includes(A.effect)){const B=parseInt(I.target.value)||1;A.value=Math.max(1,B),this.updateCardPreview(),this.renderCardCreator()}}),document.getElementById("spell-attack-value")?.addEventListener("input",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.attackValue=Math.max(0,parseInt(I.target.value)||0)),this.updateCardPreview()}),document.getElementById("spell-health-value")?.addEventListener("input",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.healthValue=Math.max(0,parseInt(I.target.value)||0)),this.updateCardPreview()}),document.getElementById("spell-attack-positive-btn")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isAttackSet=!1,I.isAttackPositive=!0,I.attackValue===0&&(I.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-zero-btn")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.attackValue=0,I.healthValue===0&&(I.costValue||0)===0&&(I.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-negative-btn")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isAttackSet=!1,I.isAttackPositive=!1,I.attackValue===0&&(I.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-set-btn")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isAttackSet=!0,I.attackValue===0&&(I.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-positive-btn")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isHealthSet=!1,I.isHealthPositive=!0,I.healthValue===0&&(I.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-zero-btn")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.healthValue=0,I.attackValue===0&&(I.costValue||0)===0&&(I.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-negative-btn")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isHealthSet=!1,I.isHealthPositive=!1,I.healthValue===0&&(I.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-set-btn")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isHealthSet=!0,I.healthValue===0&&(I.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-cost-positive-btn")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isCostSet=!1,I.isCostPositive=!0,I.costValue===0&&(I.costValue=1),this.renderCardCreator())}),document.getElementById("spell-cost-zero-btn")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.costValue=0,this.renderCardCreator())}),document.getElementById("spell-cost-negative-btn")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isCostSet=!1,I.isCostPositive=!1,I.costValue===0&&(I.costValue=1),this.renderCardCreator())}),document.getElementById("spell-cost-set-btn")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isCostSet=!0,I.costValue===0&&(I.costValue=1),this.renderCardCreator())}),document.getElementById("spell-effect-value-side")?.addEventListener("input",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.value=Math.max(1,parseInt(I.target.value)||1)),this.renderCardCreator()}),document.getElementById("spell-attack-value-side")?.addEventListener("input",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.attackValue=Math.max(0,parseInt(I.target.value)||0)),this.renderCardCreator()}),document.getElementById("spell-health-value-side")?.addEventListener("input",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.healthValue=Math.max(0,parseInt(I.target.value)||0)),this.renderCardCreator()}),document.getElementById("spell-attack-positive-btn-side")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isAttackSet=!1,I.isAttackPositive=!0,I.attackValue===0&&(I.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-zero-btn-side")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.attackValue=0,I.healthValue===0&&(I.costValue||0)===0&&(I.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-negative-btn-side")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isAttackSet=!1,I.isAttackPositive=!1,I.attackValue===0&&(I.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-attack-set-btn-side")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isAttackSet=!0,I.attackValue===0&&(I.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-positive-btn-side")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isHealthSet=!1,I.isHealthPositive=!0,I.healthValue===0&&(I.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-zero-btn-side")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.healthValue=0,I.attackValue===0&&(I.costValue||0)===0&&(I.attackValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-negative-btn-side")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isHealthSet=!1,I.isHealthPositive=!1,I.healthValue===0&&(I.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-health-set-btn-side")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isHealthSet=!0,I.healthValue===0&&(I.healthValue=1)),this.renderCardCreator()}),document.getElementById("spell-cost-positive-btn-side")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isCostSet=!1,I.isCostPositive=!0,I.costValue===0&&(I.costValue=1),this.renderCardCreator())}),document.getElementById("spell-cost-zero-btn-side")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.costValue=0,this.renderCardCreator())}),document.getElementById("spell-cost-negative-btn-side")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isCostSet=!1,I.isCostPositive=!1,I.costValue===0&&(I.costValue=1),this.renderCardCreator())}),document.getElementById("spell-cost-set-btn-side")?.addEventListener("click",()=>{const I=this.currentCard.effects?.[this.currentEffectIndex];I&&(I.isCostSet=!0,I.costValue===0&&(I.costValue=1),this.renderCardCreator())}),document.getElementById("toggle-keywords-btn")?.addEventListener("click",()=>{this.showKeywordsPanel=!this.showKeywordsPanel,this.renderCardCreator()}),document.getElementById("toggle-keywords-section-btn")?.addEventListener("click",()=>{this.showKeywordsPanel=!this.showKeywordsPanel,this.renderCardCreator()}),document.getElementById("toggle-moment-btn")?.addEventListener("click",()=>{this.showMomentPanel=!this.showMomentPanel,this.renderCardCreator()}),document.querySelectorAll(".trigger-num-btn").forEach(I=>{I.addEventListener("click",A=>{A.stopPropagation();const B=parseInt(I.dataset.triggerNum||"1",10),q=I.dataset.editor;let O=null;if(q==="spell"?O=this.currentCard.effects?.[this.currentEffectIndex]||null:O=this.currentCard.effects?.[this.currentEffectIndex]||null,!O)return;O.triggerNumbers||(O.triggerNumbers=[1,2,3,4,5,6]);const J=O.triggerNumbers.indexOf(B);if(J>=0){if(O.triggerNumbers.length===1)return;O.triggerNumbers.splice(J,1)}else O.triggerNumbers.push(B),O.triggerNumbers.sort((re,G)=>re-G);this.renderCardCreator()})}),document.getElementById("toggle-condition-btn")?.addEventListener("click",()=>{this.showConditionPanel=!this.showConditionPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-condition-btn-side")?.addEventListener("click",()=>{this.showConditionPanel=!this.showConditionPanel,this.renderCardCreator()}),document.getElementById("toggle-spell-condition-btn")?.addEventListener("click",()=>{this.showConditionPanel=!this.showConditionPanel,this.renderCardCreator()}),document.getElementById("toggle-condition-spell-effect-btn")?.addEventListener("click",()=>{this.showConditionPanel=!this.showConditionPanel,this.renderCardCreator()}),document.querySelectorAll(".condition-item").forEach(I=>{I.addEventListener("click",A=>{A.stopPropagation();const B=I.dataset.condition,q=this.currentCard.effects?.[this.currentEffectIndex];q&&(this.setConditionType(B,q),this.renderCardCreator())})}),document.querySelectorAll(".condition-item-spell").forEach(I=>{I.addEventListener("click",A=>{A.stopPropagation();const B=I.dataset.spellCondition,q=this.currentCard.effects?.[this.currentEffectIndex];q&&(this.setConditionType(B,q),this.renderCardCreator())})}),document.querySelectorAll(".spell-condition-item-side").forEach(I=>{I.addEventListener("click",A=>{A.stopPropagation();const B=I.dataset.spellConditionSide,q=this.currentCard.effects?.[this.currentEffectIndex];q&&(this.setConditionType(B,q),this.renderCardCreator())})}),document.querySelectorAll(".spell-condition-item").forEach(I=>{I.addEventListener("click",A=>{A.stopPropagation();const B=I.dataset.spellCondition,q=this.currentCard.effects?.[this.currentEffectIndex];q&&(this.setConditionType(B,q),this.renderCardCreator())})}),document.getElementById("toggle-target-btn")?.addEventListener("click",()=>{this.showTargetPanel=!this.showTargetPanel,this.renderCardCreator()});const a=document.getElementById("random-target-check");a?.addEventListener("click",I=>{I.stopPropagation()}),a?.addEventListener("change",I=>{const A=this.currentCard.effects[this.currentEffectIndex];if(A){A.isRandomTarget=I.target.checked,this.renderCardCreator();const B=document.getElementById("toggle-target-btn");B&&B.scrollIntoView({behavior:"instant",block:"nearest"})}});const r=document.getElementById("random-target-check-spell-side");r?.addEventListener("click",I=>{I.stopPropagation()}),r?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];if(A){const B=document.querySelector(".target-scroll-container");B&&(this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:B.scrollTop}),A.isRandomTarget=I.target.checked,this.renderCardCreator()}});const i=document.getElementById("retrieved-random-check-spell-side");i?.addEventListener("click",I=>{I.stopPropagation()}),i?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];if(A){const B=document.querySelector(".target-scroll-container");B&&(this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:B.scrollTop}),A.targetRetrievedRandom=I.target.checked,this.renderCardCreator()}});const n=document.getElementById("random-target-check-spell");n?.addEventListener("click",I=>{I.stopPropagation()}),n?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];if(A){const B=document.querySelector(".target-scroll-container");B&&(this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:B.scrollTop}),A.isRandomTarget=I.target.checked,this.renderCardCreator()}});const t=document.getElementById("retrieved-random-check");t?.addEventListener("click",I=>{I.stopPropagation()}),t?.addEventListener("change",I=>{const A=this.currentCard.effects[this.currentEffectIndex];if(A){A.targetRetrievedRandom=I.target.checked,this.renderCardCreator();const B=document.getElementById("toggle-target-btn");B&&B.scrollIntoView({behavior:"instant",block:"nearest"})}});const l=document.getElementById("retrieved-random-check-spell");l?.addEventListener("click",I=>{I.stopPropagation()}),l?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];if(A){const B=document.querySelector(".target-scroll-container");B&&(this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:B.scrollTop}),A.targetRetrievedRandom=I.target.checked,this.renderCardCreator()}}),document.getElementById("random-target-times-spell-side")?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.randomTargetTimes=Math.max(1,parseInt(I.target.value)||1),this.renderCardCreator())}),document.getElementById("random-target-times-spell")?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.randomTargetTimes=Math.max(1,parseInt(I.target.value)||1),this.renderCardCreator())});const o=document.getElementById("opponent-target-check");o?.addEventListener("click",I=>{I.stopPropagation()}),o?.addEventListener("change",I=>{const A=this.currentCard.effects[this.currentEffectIndex];if(A){A.isOpponent=I.target.checked,this.renderCardCreator();const B=document.getElementById("toggle-target-btn");B&&B.scrollIntoView({behavior:"instant",block:"nearest"})}}),document.getElementById("variable-select-btn")?.addEventListener("click",()=>{this.openVariableSelectorModal(I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.variableChange?A.variableChange.variable=I:A.variableChange={variable:I,increase:!0,decrease:!0},this.renderCardCreator())})}),document.getElementById("variable-select-btn-lg")?.addEventListener("click",()=>{this.openVariableSelectorModal(I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.variableChange?A.variableChange.variable=I:A.variableChange={variable:I,increase:!0,decrease:!0},this.renderCardCreator())})});const d=document.getElementById("var-increase-check"),p=document.getElementById("var-decrease-check");d?.addEventListener("click",I=>I.stopPropagation()),p?.addEventListener("click",I=>I.stopPropagation()),d?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.variableChange||(A.variableChange={variable:"my_hand",increase:!0,decrease:!0}),A.variableChange.increase=I.target.checked,this.renderCardCreator())}),p?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.variableChange||(A.variableChange={variable:"my_hand",increase:!0,decrease:!0}),A.variableChange.decrease=I.target.checked,this.renderCardCreator())});const c=document.getElementById("var-increase-check-lg"),h=document.getElementById("var-decrease-check-lg");c?.addEventListener("click",I=>I.stopPropagation()),h?.addEventListener("click",I=>I.stopPropagation()),c?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.variableChange||(A.variableChange={variable:"my_hand",increase:!0,decrease:!0}),A.variableChange.increase=I.target.checked,this.renderCardCreator())}),h?.addEventListener("change",I=>{const A=this.currentCard.effects?.[this.currentEffectIndex];A&&(A.variableChange||(A.variableChange={variable:"my_hand",increase:!0,decrease:!0}),A.variableChange.decrease=I.target.checked,this.renderCardCreator())}),document.getElementById("toggle-effect-btn")?.addEventListener("click",()=>{this.showEffectPanel=!this.showEffectPanel,this.renderCardCreator()}),document.getElementById("card-name")?.addEventListener("input",I=>{this.currentCard.name=I.target.value,this.updateCardPreview()}),document.getElementById("card-cost")?.addEventListener("input",I=>{this.currentCard.cost=Math.min(20,Math.max(0,parseInt(I.target.value)||0)),this.updateCardPreview()}),document.getElementById("card-attack")?.addEventListener("input",I=>{this.currentCard.attack=Math.max(0,parseInt(I.target.value)||0),this.updateCardPreview()}),document.getElementById("card-health")?.addEventListener("input",I=>{this.currentCard.health=Math.max(1,parseInt(I.target.value)||1),this.updateCardPreview()}),document.getElementById("card-armor")?.addEventListener("input",I=>{const A=Math.max(1,parseInt(I.target.value)||1);this.currentCard.armorValue=A,this.currentCard.keywords&&(this.currentCard.keywords=this.currentCard.keywords.map(B=>B.name==="护甲"?{...B,value:A}:B)),this.updateCardPreview()}),document.getElementById("card-preparation")?.addEventListener("input",I=>{const A=Math.max(1,parseInt(I.target.value)||1);this.currentCard.preparationValue=A,this.currentCard.keywords&&(this.currentCard.keywords=this.currentCard.keywords.map(B=>B.name==="准备"?{...B,value:A}:B)),this.updateCardPreview()}),document.getElementById("reset-card-btn")?.addEventListener("click",()=>{const I=this.currentCard.type;this.initCardsArray(I),this.renderCardCreator()}),document.getElementById("effect-value")?.addEventListener("input",I=>{const A=this.getCurrentEffect();A&&(A.value=Math.max(1,parseInt(I.target.value)||1),this.updateEffectDescription())}),document.getElementById("effect-speech-text")?.addEventListener("input",I=>{const A=this.getCurrentEffect();A&&(A.speechText=I.target.value,this.updateEffectDescription())}),document.querySelectorAll(".grant-keyword-item").forEach(I=>{I.addEventListener("click",()=>{const A=I.dataset.grantKeyword,B=this.getCurrentEffect();B&&B.effect==="给予词条"&&(B.grantedKeywordName===A?(B.grantedKeywordName="",B.grantedKeywordValue=void 0):(B.grantedKeywordName=A,A==="护甲"||["🔥","❄️","⚡️"].includes(A)?B.grantedKeywordValue=B.grantedKeywordValue??1:B.grantedKeywordValue=void 0),this.updateEffectDescription(),this.renderCardCreator())})}),document.getElementById("grant-keyword-value")?.addEventListener("input",I=>{const A=this.getCurrentEffect();A&&A.effect==="给予词条"&&(A.grantedKeywordValue=Math.max(1,parseInt(I.target.value)||1),this.updateEffectDescription())}),document.querySelectorAll(".summon-source-btn, .summon-source-btn-2").forEach(I=>{I.addEventListener("click",()=>{const A=I.dataset.source,B=this.getCurrentEffect();B&&B.effect&&["召唤","获得","变化","属性变化"].includes(B.effect)&&(B.summonSource=A,this.updateEffectDescription(),this.renderCardCreator())})}),document.querySelectorAll(".summon-card-item").forEach(I=>{I.addEventListener("click",()=>{const A=parseInt(I.dataset.summonIndex||"0"),B=this.getCurrentEffect();if(B&&B.effect&&["召唤","获得","变化"].includes(B.effect)){if(B.isRandom){const q=B.summonedCardIndices??[];q.includes(A)?B.summonedCardIndices=q.filter(O=>O!==A):B.summonedCardIndices=[...q,A],B.summonedCardIndex=B.summonedCardIndices[0]??0}else B.summonedCardIndex=A,B.summonedCardIndices=void 0;this.updateEffectDescription(),this.renderCardCreator()}})}),["summon-random-checkbox","summon-random-checkbox-2","attr-random-checkbox-2"].forEach(I=>{document.getElementById(I)?.addEventListener("change",A=>{const B=this.getCurrentEffect();B&&B.effect&&["召唤","获得","变化","属性变化"].includes(B.effect)&&(B.isRandom=A.target.checked,!B.isRandom&&B.summonedCardIndices&&B.summonedCardIndices.length>0?(B.summonedCardIndex=B.summonedCardIndices[0],B.summonedCardIndices=void 0):B.isRandom&&B.summonedCardIndex!==void 0&&(B.summonedCardIndices=[B.summonedCardIndex]),this.updateEffectDescription(),this.renderCardCreator())})}),["summon-count-input","summon-count-input-2"].forEach(I=>{document.getElementById(I)?.addEventListener("change",A=>{const B=this.getCurrentEffect();if(B&&B.effect&&["召唤","获得"].includes(B.effect)){const q=parseInt(A.target.value)||1;B.value=Math.max(1,q),this.updateEffectDescription(),this.renderCardCreator()}})}),document.getElementById("positive-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.isPositive=!0,this.renderCardCreator())}),document.getElementById("negative-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.isPositive=!1,this.renderCardCreator())}),document.getElementById("clear-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects[this.currentEffectIndex]=this.createDefaultEffect(),this.renderCardCreator()});const f={rage:["连击","狂怒"],"🔥":["🔥","❄️","⚡️"],机动:["机动","嘲讽"]},u={};Object.values(f).forEach(I=>{I.forEach(A=>{u[A]=I})}),document.querySelectorAll(".keyword-item").forEach(I=>{I.addEventListener("click",A=>{A.preventDefault(),A.stopPropagation();const B=I.closest(".keyword-scroll-container"),q=document.querySelectorAll(".keyword-scroll-container"),O=Array.from(q).indexOf(B);this.pendingScrollRestoration={selector:".keyword-scroll-container",scrollTop:B?B.scrollTop:0,containerIndex:O>=0?O:0};const J=I.dataset.keywordName,re=Object.values($e).find(G=>G.name===J);if(re){["🔥","❄️","⚡️"].includes(J)?(this.lastElementKeyword===J?this.elementClickCount++:(this.elementClickCount=1,this.lastElementKeyword=J),this.elementClickCount>=6&&(this.elementClickCount=0,this.lastElementKeyword=null,this.triggerEditorExplosion(J))):(this.elementClickCount=0,this.lastElementKeyword=null);const ne=this.currentCard.keywords.findIndex(S=>S.name===J);if(ne>=0)this.currentCard.keywords.splice(ne,1);else{const S=u[J];if(S&&(this.currentCard.keywords=this.currentCard.keywords.filter(F=>!S.includes(F.name))),re.hasValue){const F=re.name==="护甲"?this.currentCard.armorValue:re.name==="准备"?this.currentCard.preparationValue:1;this.currentCard.keywords.push({...re,value:F})}else this.currentCard.keywords.push(re)}this.renderCardCreator()}})}),document.querySelectorAll(".clear-keywords-btn").forEach(I=>{I.addEventListener("click",A=>{A.preventDefault(),A.stopPropagation(),this.currentCard.keywords=[],this.renderCardCreator()})}),document.querySelectorAll(".effect-tab").forEach(I=>{I.addEventListener("click",()=>{const A=parseInt(I.dataset.effectIndex||"0");this.currentEffectIndex=A,this.renderCardCreator()})}),document.getElementById("add-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects||(this.currentCard.effects=[]),this.currentCard.effects.push(this.createDefaultEffect()),this.currentEffectIndex=this.currentCard.effects.length-1,this.showMomentPanel=!0,this.renderCardCreator()}),document.getElementById("remove-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects&&this.currentCard.effects.length>0&&(this.currentCard.effects.pop(),this.currentEffectIndex>=this.currentCard.effects.length&&(this.currentEffectIndex=Math.max(0,this.currentCard.effects.length-1)),this.renderCardCreator())}),document.getElementById("add-spell-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects||(this.currentCard.effects=[]),this.currentCard.effects.push({moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0,randomTargetTimes:1}),this.currentEffectIndex=this.currentCard.effects.length-1,this.renderCardCreator()}),document.getElementById("remove-spell-effect-btn")?.addEventListener("click",()=>{this.currentCard.effects&&this.currentCard.effects.length>1&&(this.currentCard.effects.pop(),this.currentEffectIndex>=this.currentCard.effects.length&&(this.currentEffectIndex=Math.max(0,this.currentCard.effects.length-1)),this.renderCardCreator())}),document.querySelectorAll(".moment-item").forEach(I=>{I.addEventListener("click",()=>{const A=this.getCurrentEffect();if(A){const B=I.dataset.moment;A.moments||(A.moments=A.moment?[A.moment]:[]);const q=A.moments.length>0,O=A.moments.indexOf(B);O>=0?A.moments.splice(O,1):A.moments.push(B),A.moment=A.moments.length>0?A.moments[0]:null,A.moments.length===1&&!q&&(A.targets=[],A.effect=null,this.showMomentPanel=!1,this.showTargetPanel=!0)}this.renderCardCreator()})}),document.querySelectorAll(".target-item").forEach(I=>{I.addEventListener("click",()=>{const A=this.getCurrentEffect();if(!A)return;const B=I.closest(".target-scroll-container"),q=document.querySelectorAll(".target-scroll-container"),O=Array.from(q).indexOf(B);this.pendingScrollRestoration={selector:".target-scroll-container",scrollTop:B?B.scrollTop:0,containerIndex:O>=0?O:0};const J=I.dataset.target,re=A.targets;if(["无需目标","卡牌","选择目标","选择随从","攻击目标"].includes(J))re.includes(J)?A.targets=[]:(A.targets=[J],this.showTargetPanel=!1);else if(re.some(ne=>["无需目标","卡牌","选择目标","选择随从","攻击目标"].includes(ne)))A.targets=[J];else{const ne=re.indexOf(J);ne>=0?re.splice(ne,1):re.push(J)}A.effect=null,this.showEffectPanel=!0,this.renderCardCreator()})}),document.querySelectorAll(".effect-item").forEach(I=>{I.addEventListener("click",()=>{const A=this.getCurrentEffect();if(!A)return;const B=I.dataset.effect;if(A.effect=B,B==="造成伤害")A.value=1;else if(B==="抽牌")A.value=1;else if(B==="弃牌")A.value=1;else if(B==="属性变化")A.attackValue=1,A.healthValue=1,A.isAttackPositive=!0,A.isHealthPositive=!0;else if(B==="给予印记")A.value=1;else if(["召唤","获得","变化"].includes(B)){A.value=1;const q=this.editingCards.map((O,J)=>J).filter(O=>!((B==="变化"||B==="召唤")&&this.editingCards[O].type==="spell"||B==="变化"&&O===this.currentCardIndex||B==="召唤"&&Fe(A,"打出时")&&O===this.currentCardIndex));A.summonedCardIndex=q.length>0?q[0]:0}this.showEffectPanel=!1,this.renderCardCreator()})}),document.getElementById("effect-attack-value")?.addEventListener("input",I=>{const A=this.getCurrentEffect();if(A){const B=parseInt(I.target.value);A.attackValue=isNaN(B)?0:Math.max(0,Math.min(99,B)),this.updateEffectDescription(),this.updateCardPreview()}}),document.getElementById("effect-health-value")?.addEventListener("input",I=>{const A=this.getCurrentEffect();if(A){const B=parseInt(I.target.value);A.healthValue=isNaN(B)?0:Math.max(0,Math.min(99,B)),this.updateEffectDescription(),this.updateCardPreview()}}),document.getElementById("attack-positive-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.isAttackSet=!1,I.isAttackPositive=!0,I.attackValue===0&&(I.attackValue=1),this.renderCardCreator())}),document.getElementById("attack-zero-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.attackValue=0,I.healthValue===0&&(I.costValue||0)===0&&(I.healthValue=1),this.renderCardCreator())}),document.getElementById("attack-negative-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.isAttackSet=!1,I.isAttackPositive=!1,I.attackValue===0&&(I.attackValue=1),this.renderCardCreator())}),document.getElementById("attack-set-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.isAttackSet=!0,I.attackValue===0&&(I.attackValue=1),this.renderCardCreator())}),document.getElementById("health-positive-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.isHealthSet=!1,I.isHealthPositive=!0,I.healthValue===0&&(I.healthValue=1),this.renderCardCreator())}),document.getElementById("health-zero-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.healthValue=0,I.attackValue===0&&(I.costValue||0)===0&&(I.attackValue=1),this.renderCardCreator())}),document.getElementById("health-negative-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.isHealthSet=!1,I.isHealthPositive=!1,I.healthValue===0&&(I.healthValue=1),this.renderCardCreator())}),document.getElementById("health-set-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.isHealthSet=!0,I.healthValue===0&&(I.healthValue=1),this.renderCardCreator())}),document.getElementById("cost-positive-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.isCostSet=!1,I.isCostPositive=!0,I.costValue===0&&(I.costValue=1),this.renderCardCreator())}),document.getElementById("cost-zero-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.costValue=0,this.renderCardCreator())}),document.getElementById("cost-negative-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.isCostSet=!1,I.isCostPositive=!1,I.costValue===0&&(I.costValue=1),this.renderCardCreator())}),document.getElementById("cost-set-btn")?.addEventListener("click",()=>{const I=this.getCurrentEffect();I&&(I.isCostSet=!0,I.costValue===0&&(I.costValue=1),this.renderCardCreator())}),document.getElementById("add-to-deck-btn")?.addEventListener("click",async()=>{if(this.editingCards.some((F,V)=>(F.effects||[]).some(D=>D.effect==="召唤"?D.summonSource&&D.summonSource!=="derived"?!1:this.editingCards.filter((X,K)=>!(this.editingCards[K].type==="spell"||Fe(D,"打出时")&&K===V)).length===0||D.summonedCardIndex!==void 0&&this.editingCards[D.summonedCardIndex]?.type==="spell":D.effect==="获得"?D.summonSource&&D.summonSource!=="derived"?!1:this.editingCards.length===0:D.effect==="变化"?D.summonSource&&D.summonSource!=="derived"?!1:!!(this.editingCards.filter((X,K)=>!(this.editingCards[K].type==="spell"||K===V)).length===0||this.momentsInclude(D.moment,"打出时")||this.momentsInclude(D.moment,"死亡时")||D.summonedCardIndex!==void 0&&this.editingCards[D.summonedCardIndex]?.type==="spell"):!1))){alert("存在无效的召唤/变化效果（不能选择法术牌，打出时/死亡时不能变化），请修改后再试");return}const A=this.editingCards[0],B=A.keywords.map(F=>F.name==="护甲"?{...F,value:A.armorValue}:F.name==="准备"?{...F,value:A.preparationValue}:F);let q="";const J=(A.effects||[]).filter(F=>F.moment&&F.effect);if(A.type==="spell"){const F=(A.effects||[]).filter(V=>V.effect);if(F.length>0){const V=[];F.forEach(_=>{const D=_.targets||[],N=this.mergeTargets(D);let X=N.length>0&&!N.includes("无需目标")&&!N.includes("卡牌")?`对${N.join("、")}`:"";_.isRandomTarget&&X&&(X+="中的随机一个");const K=_.isRandomTarget&&_.randomTargetTimes&&_.randomTargetTimes>1?`${_.randomTargetTimes}次`:"",z=_.moments||(_.moment?[_.moment]:[]),Q=z.length===1&&z[0]==="打出时"?"":z.map(le=>Te[le]||"").join(""),ae=_.isOpponent?"对手":"";let te="";if(_.triggerNumbers&&_.triggerNumbers.length>0&&([1,2,3,4,5,6].every(ue=>_.triggerNumbers.includes(ue))||(te=`🎲${_.triggerNumbers.length}/6`)),_.effect==="造成伤害"){const le=_.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[_.elementType]||"";V.push(`${Q}${ae}${X}造成${_.value}点${le}伤害${te}${K}`)}else if(_.effect==="抽牌")V.push(`${Q}${ae}抽${_.value}张牌${te}`);else if(_.effect==="弃牌")V.push(`${Q}${ae}弃${_.value}张牌${te}`);else if(_.effect==="属性变化")if(_.targets?.includes("卡牌")){const le=_.summonSource||"my_hand",ce=Me(le,!!_.isRandom),ue=_.isRandom?"中的随机一个":"",se=_.isCostSet?"=":_.isCostPositive?"+":"-",pe=_.isAttackSet?"=":_.isAttackPositive?"+":"-",me=_.isHealthSet?"=":_.isHealthPositive?"+":"-",we=_.costValue||0,ye=_.attackValue||0,ve=_.healthValue||0;let Ie=[];we!==0&&Ie.push(`费用${se}${we}`),ye!==0&&Ie.push(`攻击${pe}${ye}`),ve!==0&&Ie.push(`血量${me}${ve}`),Ie.length===0&&Ie.push("无变化"),V.push(`${Q}${ae}使${ce}${ue}${Ie.join("/")}${te}${K}`)}else{const le=_.isAttackPositive?"+":"-",ce=_.isHealthPositive?"+":"-",ue=_.attackValue||0,se=_.healthValue||0;let pe="";ue===0&&se!==0?pe=`${ce}${se}血量`:se===0&&ue!==0?pe=`${le}${ue}攻击`:pe=`${le}${ue}/${ce}${se}`,V.push(`${Q}${ae}${X}${pe}${te}${K}`)}else if(_.effect==="给予印记")V.push(`${Q}${ae}${X}给予${_.value}点印记${te}${K}`);else if(_.effect==="治愈")V.push(`${Q}${ae}${X}治愈${_.value}点生命${te}${K}`);else if(_.effect==="获得能量")V.push(`${Q}${ae}获得${_.value}点能量${te}`);else if(_.effect==="失去能量")V.push(`${Q}${ae}失去${_.value}点能量${te}`);else if(_.effect==="召唤"){const le=_.summonSource||"derived";if(le!=="derived"){const ce=Me(le,!!_.isRandom),ue=_.isRandom?"中的随机一个":"";V.push(`${Q}${ae}召唤${_.value||1}张${ce}${ue}${te}`)}else if(this.editingCards.filter((ue,se)=>!(Fe(_,"打出时")&&se===0)).length===0)V.push(`${Q}${ae}召唤${_.value||1}张${te}`);else if(_.isRandom&&_.summonedCardIndices&&_.summonedCardIndices.length>1){const ue=_.summonedCardIndices.map(se=>this.editingCards[se]?.name||"衍生随从");V.push(`${Q}${ae}召唤${_.value||1}张${ue.join("、")}中的随机一个${te}`)}else{const ue=_.summonedCardIndex??0,pe=this.editingCards[ue]?.name||"衍生随从";V.push(`${Q}${ae}召唤${_.value||1}张${pe}`)}}}),q=V.join("；")}}else if(J.length>0){const F=new Map;J.forEach(_=>{const D=_.targets||[],N=this.mergeTargets(D);let X=N.length>0&&!N.includes("无需目标")&&!N.includes("卡牌")?`对${N.join("、")}`:"";_.isRandomTarget&&X&&(X+="中的随机一个"),(_.moments||(_.moment?[_.moment]:[])).map(te=>Te[te]||"").join("");let z="";const Q=_.isOpponent?"对手":"";let ae="";if(_.triggerNumbers&&_.triggerNumbers.length>0&&([1,2,3,4,5,6].every(ce=>_.triggerNumbers.includes(ce))||(ae=`🎲${_.triggerNumbers.length}/6`)),_.effect==="造成伤害"){const te=_.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[_.elementType]||"";z=`${Q}${X}造成${_.value}点${te}伤害${ae}`}else if(_.effect==="抽牌")z=`${Q}抽${_.value}张牌${ae}`;else if(_.effect==="弃牌")z=`${Q}弃${_.value}张牌${ae}`;else if(_.effect==="属性变化")if(_.targets?.includes("卡牌")){const te=_.summonSource||"my_hand",le=Me(te,!!_.isRandom),ce=_.isRandom?"中的随机一个":"",ue=_.isCostSet?"=":_.isCostPositive?"+":"-",se=_.isAttackSet?"=":_.isAttackPositive?"+":"-",pe=_.isHealthSet?"=":_.isHealthPositive?"+":"-",me=_.costValue||0,we=_.attackValue||0,ye=_.healthValue||0;let ve=[];me!==0&&ve.push(`费用${ue}${me}`),we!==0&&ve.push(`攻击${se}${we}`),ye!==0&&ve.push(`血量${pe}${ye}`),ve.length===0&&ve.push("无变化"),z=`${Q}使${le}${ce}${ve.join("/")}${ae}`}else{const te=_.isAttackPositive?"+":"-",le=_.isHealthPositive?"+":"-",ce=_.attackValue||0,ue=_.healthValue||0;ce===0&&ue!==0?z=`${Q}${X}${le}${ue}血量${ae}`:ue===0&&ce!==0?z=`${Q}${X}${te}${ce}攻击${ae}`:z=`${Q}${X}${te}${ce}/${le}${ue}${ae}`}else if(_.effect==="给予印记")z=`${Q}${X}给予${_.value}点印记${ae}`;else if(_.effect==="治愈")z=`${Q}${X}治愈${_.value}点生命${ae}`;else if(_.effect==="获得能量")z=`${Q}获得${_.value}点能量${ae}`;else if(_.effect==="失去能量")z=`${Q}失去${_.value}点能量${ae}`;else if(_.effect==="召唤"){const te=_.summonSource||"derived";if(te!=="derived"){const le=Me(te,!!_.isRandom),ce=_.isRandom?"中的随机一个":"";z=`${Q}召唤${_.value||1}张${le}${ce}${ae}`}else if(this.editingCards.filter((ce,ue)=>!(Fe(_,"打出时")&&ue===0)).length===0)z=`${Q}召唤${_.value||1}张${ae}`;else if(_.isRandom&&_.summonedCardIndices&&_.summonedCardIndices.length>1){const ce=_.summonedCardIndices.map(ue=>this.editingCards[ue]?.name||"衍生随从");z=`${Q}召唤${_.value||1}张${ce.join("、")}中的随机一个${ae}`}else{const ce=_.summonedCardIndex??0,se=this.editingCards[ce]?.name||"衍生随从";z=`${Q}召唤${_.value||1}张${se}${ae}`}}else if(_.effect==="获得"){const te=_.summonSource||"derived";if(te!=="derived"){const le=Me(te,!!_.isRandom),ce=_.isRandom?"中的随机一个":"";z=`${Q}获得${_.value||1}张${le}${ce}${ae}`}else if(this.editingCards.filter((ce,ue)=>!(Fe(_,"打出时")&&ue===0)).length===0)z=`${Q}获得${_.value||1}张${ae}`;else if(_.isRandom&&_.summonedCardIndices&&_.summonedCardIndices.length>1){const ce=_.summonedCardIndices.map(ue=>this.editingCards[ue]?.name||"衍生牌");z=`${Q}获得${_.value||1}张${ce.join("、")}中的随机一个${ae}`}else{const ce=_.summonedCardIndex??0,se=this.editingCards[ce]?.name||"衍生牌";z=`${Q}获得${_.value||1}张${se}${ae}`}}else if(_.effect==="变化"){const te=_.summonSource||"derived";if(te!=="derived"){const le=Me(te,!!_.isRandom),ce=_.isRandom?"中的随机一个":"";z=`${Q}变化为${le}${ce}${ae}`}else if(_.isRandom&&_.summonedCardIndices&&_.summonedCardIndices.length>1){const le=_.summonedCardIndices.map(ce=>this.editingCards[ce]?.name||"衍生随从");z=`${Q}变化为${le.join("、")}中的随机一个${ae}`}else{const le=_.summonedCardIndex??0,ue=this.editingCards[le]?.name||"衍生随从";z=`${Q}变化为${ue}${ae}`}}if(z){const te=_.moments||(_.moment?[_.moment]:[]),le=te.map(ue=>Te[ue]||"").join(""),ce=te.sort().join("|");F.has(ce)||F.set(ce,{icon:le,texts:[]}),F.get(ce).texts.push(z)}}),q=Array.from(F.values()).map(_=>`${_.icon}${_.texts.join("，并")}`).join("；")}const re=F=>{const V={...F};return F.targets&&(V.targets=[...F.targets]),V},G=()=>{if(this.editingCards.length!==0)return this.editingCards.map(F=>{const V=F.type==="spell",_=(F.effects||[]).filter(D=>D.effect);return{name:F.name||"未命名",cost:F.cost,attack:V?0:F.attack,health:V?0:F.health,maxHealth:V?0:F.health,type:F.type,keywords:V?[]:F.keywords.map(D=>D.name==="护甲"?{...D,value:F.armorValue}:{...D}),armorValue:V?void 0:F.armorValue,effects:_.length>0?_.map(D=>re(V?{...D,moment:"打出时"}:D)):void 0,effectDescription:void 0,imageData:F.imageData||void 0}})},ne=()=>{const F=G();if(A.type==="spell"){const V=(A.effects||[]).filter(_=>_.effect);return{id:Ee(),name:A.name||"未命名",cost:A.cost,attack:0,health:0,maxHealth:0,type:"spell",keywords:[],effects:V.length>0?V.map(_=>re({..._,moment:_.moment||"打出时"})):void 0,effectDescription:q||void 0,imageData:A.imageData||void 0,derivedCards:F}}else return{id:Ee(),name:A.name||"未命名",cost:A.cost,attack:A.attack,health:A.health,maxHealth:A.health,type:"minion",keywords:B,armorValue:A.armorValue,effects:J.length>0?J.map(re):void 0,effectDescription:q||void 0,imageData:A.imageData||void 0,derivedCards:F}};if(this.isEditMode&&this.editingCardSample){const F=xe(this.editingCardSample),V=this.state.groups.map(N=>{const X=N.cards.find(K=>xe(K.card)===F);return{group:N,entry:X}}).filter(N=>N.entry);let _=0,D=null;for(const N of V)_+=N.entry.count,D||(D=N.group.id);if(_>0&&D){const N=this.state.groups.map(ae=>({...ae,cards:ae.cards.filter(te=>xe(te.card)!==F)})),K={card:ne(),count:_},z=N.findIndex(ae=>ae.id===D);z!==-1&&(N[z]={...N[z],cards:[...N[z].cards,K]}),this.state={...this.state,groups:N,sharedDeck:N[0].cards};const Q=[];for(const ae of N)for(const te of ae.cards)te.card.type==="hero"&&Q.push(te.card);this.state.heroCards=Q,this.saveDeck()}}else{const F=ne();this.state=oe(this.state,{type:"ADD_CARD",card:F}),this.saveDeck()}const S=document.getElementById("add-success");S?.classList.remove("hidden"),setTimeout(()=>{S?.classList.add("hidden")},1500)}),document.getElementById("export-code-btn")?.addEventListener("click",async()=>{try{if(this.editingCards.some((K,z)=>(K.effects||[]).some(ae=>ae.effect==="召唤"?ae.summonSource&&ae.summonSource!=="derived"?!1:this.editingCards.filter((le,ce)=>!(this.editingCards[ce].type==="spell"||Fe(ae,"打出时")&&ce===z)).length===0||ae.summonedCardIndex!==void 0&&this.editingCards[ae.summonedCardIndex]?.type==="spell":ae.effect==="获得"?ae.summonSource&&ae.summonSource!=="derived"?!1:this.editingCards.length===0:ae.effect==="变化"?ae.summonSource&&ae.summonSource!=="derived"?!1:!!(this.editingCards.filter((le,ce)=>!(this.editingCards[ce].type==="spell"||ce===z)).length===0||this.momentsInclude(ae.moment,"打出时")||ae.summonedCardIndex!==void 0&&this.editingCards[ae.summonedCardIndex]?.type==="spell"):!1))){alert("存在无效的召唤/变化效果（不能选择法术牌，打出时不能变化），请修改后再试");return}const A=K=>{const z={...K};return K.targets&&(z.targets=[...K.targets]),z},B=(K,z)=>{const Q=(K.effects||[]).filter(ae=>ae.effect);return{name:K.name||(z===0?"未命名":`衍生卡${z}`),type:K.type,cost:K.cost,attack:K.attack,health:K.health,keywords:K.keywords.map(ae=>ae.name),armorValue:K.armorValue,effects:Q.length>0?Q.map(A):void 0,effect:Q.length>0?A(Q[0]):void 0,effectDescription:K.effectDescription||void 0,spellEffect:K.spellEffect||void 0,imageData:K.imageData||void 0,version:3}};let q;const O=this.editingCards[0];if(!!O?.imageData&&O.imageData){const Q=await(await(await fetch(O.imageData)).blob()).arrayBuffer();q=new Uint8Array(Q)}else{const K=document.createElement("canvas");K.width=200,K.height=300;const z=K.getContext("2d");z.fillStyle="#f8f4ec",z.fillRect(0,0,200,300);const Q=K.toDataURL("image/png"),le=await(await(await fetch(Q)).blob()).arrayBuffer();q=new Uint8Array(le)}const re=We(q),G=B(O,0),ne=JSON.stringify(G),S=btoa(unescape(encodeURIComponent(ne))),F=ze.encode("CardData",S);re.splice(1,0,F);for(let K=1;K<this.editingCards.length;K++){const z=this.editingCards[K],Q=JSON.stringify(B(z,K)),ae=btoa(unescape(encodeURIComponent(Q))),te=ze.encode(`CardData_${K}`,ae);re.splice(1+K,0,te)}const V=ft(re),_=new Blob([V],{type:"image/png"}),N=`${(O.name||"未命名").replace(/[\\/:*?"<>|]/g,"_").replace(/\s+/g,"_")}.png`;if(this.deckFolderHandle)try{const z=await(await this.deckFolderHandle.getFileHandle(N,{create:!0})).createWritable();await z.write(_),await z.close(),console.log(`PNG 已导出到文件夹: ${N}`)}catch(K){console.warn("写入文件夹失败，改用下载:",K);const z=URL.createObjectURL(_),Q=document.createElement("a");Q.href=z,Q.download=N,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(z)}else{const K=URL.createObjectURL(_),z=document.createElement("a");z.href=K,z.download=N,document.body.appendChild(z),z.click(),document.body.removeChild(z),URL.revokeObjectURL(K)}const X=document.getElementById("export-success");X&&(X.classList.remove("hidden"),setTimeout(()=>X.classList.add("hidden"),1500))}catch(I){alert("导出失败："+I.message)}}),document.getElementById("copy-btn")?.addEventListener("click",async()=>{const I=document.getElementById("export-text");if(I){const A=I.value;try{await navigator.clipboard.writeText(A);const B=document.getElementById("copy-btn");B&&(B.textContent="✓ 已复制！",setTimeout(()=>{B.textContent="📋 复制"},1500))}catch{I.select(),document.execCommand("copy");const q=document.getElementById("copy-btn");q&&(q.textContent="✓ 已复制！",setTimeout(()=>{q.textContent="📋 复制"},1500))}}}),document.getElementById("import-code-btn")?.addEventListener("click",()=>{const I=document.createElement("input");I.type="file",I.accept=".png,image/png",I.style.cssText="position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;",document.body.appendChild(I),I.addEventListener("change",async A=>{const B=A.target.files?.[0];if(document.body.removeChild(I),!!B)try{const q=await B.arrayBuffer(),O=new Uint8Array(q),J=We(O);let re=null;for(const N of J)if(N.name==="tEXt")try{const X=ze.decode(N);X.keyword==="CardData"&&(re=X.text)}catch{}if(!re){alert("无效卡牌文件：缺少卡牌数据（CardData）");return}let G;try{G=decodeURIComponent(escape(atob(re)))}catch{G=re}const ne=JSON.parse(G);if(!ne.name&&ne.name!==""){alert("数据不完整：缺少卡牌名称");return}const S=N=>{const X={...N};return N.targets&&(X.targets=[...N.targets]),X},F=ne.effects||(ne.effect?[ne.effect]:[]),V=[ne];for(const N of J)if(N.name==="tEXt")try{const X=ze.decode(N);if(X.keyword.match(/^CardData_\d+$/)){const K=parseInt(X.keyword.replace("CardData_",""),10);let z;try{z=decodeURIComponent(escape(atob(X.text)))}catch{z=X.text}V[K]=JSON.parse(z)}}catch{}this.editingCards=V.map((N,X)=>({name:N.name||(X===0?"":`衍生卡${X}`),type:N.type||"minion",cost:N.cost??1,attack:N.attack??(N.type==="spell"?0:1),health:N.health??(N.type==="spell"?0:1),keywords:(N.keywords||[]).map(K=>Object.values($e).find(Q=>Q.name===K)||{name:K,description:"",hasValue:!1}),armorValue:N.armorValue??1,preparationValue:N.preparationValue??1,effects:(N.effects||[]).map(S),spellEffect:N.spellEffect?S(N.spellEffect):N.effects?.[0]||N.effect||{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0},effectDescription:N.effectDescription||void 0,imageData:N.imageData||null})),this.currentCardIndex=0,this.currentEffectIndex=0;const _=URL.createObjectURL(B),D=await this.compressImageData(_);URL.revokeObjectURL(_),this.editingCards[0].imageData=D,this.renderCardCreator(),this.updateEffectDescription()}catch(q){alert("导入失败："+(q.message||"文件格式错误或数据损坏"))}}),I.click()}),document.getElementById("import-confirm-btn")?.addEventListener("click",()=>{const I=document.getElementById("import-text");if(I)try{const A=I.value.trim();if(!A){alert("请输入卡牌代码");return}const B=JSON.parse(decodeURIComponent(atob(A))),q=re=>{const G={...re};return re.targets&&(G.targets=[...re.targets]),G},O=B.effects||(B.effect?[B.effect]:[]);this.currentCard={name:B.name||"",type:B.type||"minion",cost:B.cost??1,attack:B.attack??1,health:B.health??1,keywords:(B.keywords||[]).map(re=>Object.values($e).find(ne=>ne.name===re)||{name:re,description:"",hasValue:!1}),armorValue:B.armorValue??1,preparationValue:B.preparationValue??1,effects:O.map(q),spellEffect:B.type==="spell"?B.effects?.[0]||B.effect||{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}:{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}},this.currentEffectIndex=0,this.renderCardCreator();const J=document.getElementById("import-output");J&&J.classList.add("hidden"),I.value=""}catch{alert("导入失败：卡牌代码格式错误")}}),document.getElementById("switch-to-hero-editor-btn")?.addEventListener("click",()=>{this.isHeroEditMode=!1,this.state=oe(this.state,{type:"SHOW_HERO_EDITOR"}),this.render()}),document.getElementById("back-menu-btn")?.addEventListener("click",()=>{this.state=oe(this.state,{type:"BACK_TO_MENU"}),this.isEditMode=!1,this.editingCardSample=null,this.render()}),document.getElementById("back-to-manager-btn")?.addEventListener("click",()=>{this.state=oe(this.state,{type:"SHOW_CARD_MANAGER"}),this.isEditMode=!1,this.editingCardSample=null,this.render()});let b=null,m=null,y=1,x=0,v=0,C=!1,g=0,k=0,w=0,P=0,M=!1,R="medium",$=15,L=null;const T=Math.min(window.innerWidth*.65,480),H=Math.min(window.innerHeight*.55,520);let Z=0,j=0,ee=0,Y=0;const ie=I=>{const A=document.getElementById("crop-modal"),B=document.getElementById("crop-canvas");if(!A||!B)return;b=null,C=!1,m=null,M=!1,R="medium",$=15,L=null;let q=!1;B.width=T,B.height=H;const O=B.getContext("2d");if(!O)return;O.imageSmoothingEnabled=!1;const J=document.getElementById("crop-eraser-panel");J&&(J.style.display=this.isPortraitMode?"none":"flex");const G=this.importMode==="template"?1:200/300;T/H>G?(j=H*.88,Z=j*G):(Z=T*.88,j=Z/G),ee=(T-Z)/2,Y=(H-j)/2;const ne=(se,pe,me,we,ye)=>{const ve=T,Ie=H;se.clearRect(0,0,ve,Ie),se.fillStyle="#1a1a1a",se.fillRect(0,0,ve,Ie),se.save(),se.beginPath(),se.rect(ee-30,Y-30,Z+60,j+60),se.clip(),se.drawImage(pe,we,ye,pe.naturalWidth*me,pe.naturalHeight*me),se.restore(),L&&(se.save(),se.beginPath(),se.rect(ee-30,Y-30,Z+60,j+60),se.clip(),se.globalCompositeOperation="destination-out",se.drawImage(L,we,ye,L.width*me,L.height*me),se.restore()),se.fillStyle="rgba(0,0,0,0.6)",se.fillRect(0,0,ve,Y),se.fillRect(0,Y+j,ve,Ie-Y-j),se.fillRect(0,Y,ee,j),se.fillRect(ee+Z,Y,ve-ee-Z,j),se.strokeStyle="rgba(200,160,100,0.9)",se.lineWidth=2,se.strokeRect(ee,Y,Z,j),se.strokeStyle="rgba(255,255,255,0.25)",se.lineWidth=1;const Se=j/3,Pe=Z/3;se.beginPath(),se.moveTo(ee,Y+Se),se.lineTo(ee+Z,Y+Se),se.moveTo(ee,Y+Se*2),se.lineTo(ee+Z,Y+Se*2),se.moveTo(ee+Pe,Y),se.lineTo(ee+Pe,Y+j),se.moveTo(ee+Pe*2,Y),se.lineTo(ee+Pe*2,Y+j),se.stroke()};A.style.display="flex";const S=new Image;S.onload=()=>{m=S,L=document.createElement("canvas"),L.width=S.naturalWidth,L.height=S.naturalHeight,L.getContext("2d").clearRect(0,0,L.width,L.height);const pe=Z/S.naturalWidth,me=j/S.naturalHeight;y=Math.max(pe,me),x=ee+Z/2-S.naturalWidth*y/2,v=Y+j/2-S.naturalHeight*y/2,ne(O,S,y,x,v)},S.src=URL.createObjectURL(I);const F=B.cloneNode(!0);B.parentNode?.replaceChild(F,B);const V=F,_=V.getContext("2d");_.imageSmoothingEnabled=!1;const D=()=>{m&&_&&ne(_,m,y,x,v)};V.addEventListener("mousedown",se=>{if(M&&m&&L){q=!0,V.style.cursor=X($),N(se.offsetX,se.offsetY);return}C=!0,g=se.offsetX,k=se.offsetY,w=x,P=v,V.style.cursor="grabbing"});const N=(se,pe)=>{if(!L||!m)return;const me=(se-x)/y,we=(pe-v)/y,ye=$/y,ve=L.getContext("2d");ve.fillStyle="#ffffff",ve.beginPath(),ve.arc(me,we,ye/2,0,Math.PI*2),ve.fill(),D()},X=se=>{const me=se+8,we=document.createElement("canvas");we.width=me,we.height=me;const ye=we.getContext("2d");return ye.strokeStyle="rgba(255,255,255,0.95)",ye.lineWidth=2,ye.beginPath(),ye.arc(me/2,me/2,se/2,0,Math.PI*2),ye.stroke(),ye.strokeStyle="rgba(0,0,0,0.3)",ye.lineWidth=1,ye.beginPath(),ye.arc(me/2,me/2,se/2,0,Math.PI*2),ye.stroke(),`url(${we.toDataURL()}) ${me/2} ${me/2}, crosshair`},K=se=>{if(q&&m&&L){const me=V.getBoundingClientRect();N(se.clientX-me.left,se.clientY-me.top);return}if(!C||!V)return;const pe=V.getBoundingClientRect();x=w+(se.clientX-pe.left-g),v=P+(se.clientY-pe.top-k),D()},z=()=>{if(q){q=!1,V.style.cursor=M?X($):"grab";return}C&&(C=!1,V.style.cursor="grab")};window.addEventListener("mousemove",K),window.addEventListener("mouseup",z),V.addEventListener("wheel",se=>{if(se.preventDefault(),!m)return;const pe=V.getBoundingClientRect(),me=se.clientX-pe.left,we=se.clientY-pe.top,ye=se.deltaY<0?1.03:.97,ve=Math.max(.1,y*ye);x=me-(me-x)*(ve/y),v=we-(we-v)*(ve/y),y=ve,D()},{passive:!1});const Q=se=>{if(!m||!V.isConnected||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(se.key))return;se.preventDefault();const pe=2;se.key==="ArrowLeft"?x-=pe:se.key==="ArrowRight"?x+=pe:se.key==="ArrowUp"?v-=pe:se.key==="ArrowDown"&&(v+=pe),D()};document.addEventListener("keydown",Q);let ae=0,te=1,le=0,ce=0;V.addEventListener("touchstart",se=>{if(se.touches.length===1){if(M&&m&&L){q=!0;const me=V.getBoundingClientRect();N(se.touches[0].clientX-me.left,se.touches[0].clientY-me.top);return}C=!0;const pe=V.getBoundingClientRect();g=se.touches[0].clientX-pe.left,k=se.touches[0].clientY-pe.top,w=x,P=v}else if(se.touches.length===2){C=!1;const pe=se.touches[0].clientX-se.touches[1].clientX,me=se.touches[0].clientY-se.touches[1].clientY;ae=Math.sqrt(pe*pe+me*me),te=y,le=x,ce=v}},{passive:!0}),V.addEventListener("touchmove",se=>{if(se.preventDefault(),se.touches.length===1&&q&&m&&L){const pe=V.getBoundingClientRect();N(se.touches[0].clientX-pe.left,se.touches[0].clientY-pe.top)}else if(se.touches.length===1&&C){const pe=V.getBoundingClientRect();x=w+(se.touches[0].clientX-pe.left-g),v=P+(se.touches[0].clientY-pe.top-k),D()}else if(se.touches.length===2){const pe=se.touches[0].clientX-se.touches[1].clientX,me=se.touches[0].clientY-se.touches[1].clientY,ye=Math.sqrt(pe*pe+me*me)/Math.max(.001,ae),ve=Math.max(.1,Math.min(10,te*ye)),Ie=V.getBoundingClientRect(),Se=(se.touches[0].clientX+se.touches[1].clientX)/2-Ie.left,Pe=(se.touches[0].clientY+se.touches[1].clientY)/2-Ie.top;x=Se-(Se-le)*(ve/te),v=Pe-(Pe-ce)*(ve/te),y=ve,D()}},{passive:!1}),V.addEventListener("touchend",()=>{q=!1,C=!1},{passive:!0}),document.getElementById("crop-hcenter-btn")?.addEventListener("click",()=>{m&&(x=ee+Z/2-m.naturalWidth*y/2,D())}),document.getElementById("crop-vcenter-btn")?.addEventListener("click",()=>{m&&(v=Y+j/2-m.naturalHeight*y/2,D())}),document.getElementById("crop-cover-btn")?.addEventListener("click",()=>{if(!m)return;const se=Z/m.naturalWidth,pe=j/m.naturalHeight;y=Math.max(se,pe),x=ee+Z/2-m.naturalWidth*y/2,v=Y+j/2-m.naturalHeight*y/2,D()}),document.getElementById("crop-contain-btn")?.addEventListener("click",()=>{if(!m)return;const se=Z/m.naturalWidth,pe=j/m.naturalHeight;y=Math.min(se,pe),x=ee+Z/2-m.naturalWidth*y/2,v=Y+j/2-m.naturalHeight*y/2,D()});const ue=()=>{["thin","medium","thick"].forEach(se=>{const pe=document.getElementById(`crop-eraser-${se}-btn`);if(pe){const me=R===se;pe.style.borderColor=me?"#4a9":"#666",pe.style.background=me?"#2a6":"#444",pe.style.color=me?"#fff":"#aaa"}})};document.getElementById("crop-eraser-btn")?.addEventListener("click",()=>{M=!M;const se=document.getElementById("crop-eraser-btn");se&&(se.style.borderColor=M?"#4a9":"#888"),V.style.cursor=M?X($):"grab"}),document.getElementById("crop-eraser-thin-btn")?.addEventListener("click",()=>{$=5,R="thin",ue(),M&&(V.style.cursor=X(5))}),document.getElementById("crop-eraser-medium-btn")?.addEventListener("click",()=>{$=15,R="medium",ue(),M&&(V.style.cursor=X(15))}),document.getElementById("crop-eraser-thick-btn")?.addEventListener("click",()=>{$=45,R="thick",ue(),M&&(V.style.cursor=X(45))}),ue(),V.__cropCleanup=()=>{window.removeEventListener("mousemove",K),window.removeEventListener("mouseup",z),document.removeEventListener("keydown",Q);const se=document.getElementById("crop-eraser-panel");se&&(se.style.display="none");const pe=document.getElementById("crop-eraser-btn");pe&&(pe.style.borderColor="#888"),M=!1,q=!1,L=null}},U=()=>{const I=document.getElementById("crop-modal"),A=document.getElementById("crop-canvas");I&&(I.style.display="none"),m&&(URL.revokeObjectURL(m.src),m=null),A?.__cropCleanup&&A.__cropCleanup()},W=document.getElementById("import-mode-full"),he=document.getElementById("import-mode-template"),de=()=>{W&&he&&(this.importMode=W.checked?"full":"template")};W?.addEventListener("change",()=>{W.checked&&he?he.checked=!1:W.checked||(W.checked=!0),de()}),he?.addEventListener("change",()=>{he.checked&&W?W.checked=!1:he.checked||(he.checked=!0),de()}),document.getElementById("draw-image-btn")?.addEventListener("click",()=>{this.isDrawingMode?this.exitDrawingMode(!0):this.enterDrawingMode()}),document.getElementById("import-image-btn")?.addEventListener("click",()=>{this.cropTarget="main";const I=document.createElement("input");I.type="file",I.accept="image/*",I.style.cssText="position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;",document.body.appendChild(I),I.addEventListener("change",A=>{const B=A.target.files?.[0];if(document.body.removeChild(I),!B||!B.type.startsWith("image/")){alert("请选择图片文件");return}ie(B)}),I.click()}),document.getElementById("crop-cancel-btn")?.addEventListener("click",U),document.getElementById("crop-confirm-btn")?.addEventListener("click",async()=>{if(!m){U();return}if(this.importMode==="template"){const I=document.createElement("canvas"),A=Math.max(Z,j);I.width=A,I.height=A;const B=I.getContext("2d");if(B){B.imageSmoothingEnabled=!1;const q=(ee-x)/y,O=(Y-v)/y,J=Z/y,re=j/y;B.drawImage(m,q,O,J,re,0,0,A,A),L&&(B.globalCompositeOperation="destination-out",B.drawImage(L,q,O,J,re,0,0,A,A),B.globalCompositeOperation="source-over");const G=I.toDataURL("image/png");try{const ne=await this.generateAtmosphereCard(G);b=await this.compressImageData(ne),this.currentCard.imageData=b;const F=document.getElementById("main-card-preview");F&&b&&(F.style.backgroundImage=`url(${b})`,F.style.backgroundSize="cover",F.style.backgroundPosition="center",F.style.backgroundRepeat="no-repeat")}catch(ne){alert("生成氛围感光效图片失败："+ne.message)}}}else{const I=(ee-x)/y,A=(Y-v)/y,B=Z/y,q=j/y,O=document.createElement("canvas");O.width=800,O.height=1200;const J=O.getContext("2d");if(J){J.imageSmoothingEnabled=!1,J.drawImage(m,I,A,B,q,0,0,800,1200),L&&(J.globalCompositeOperation="destination-out",J.drawImage(L,I,A,B,q,0,0,800,1200),J.globalCompositeOperation="source-over");const re=O.toDataURL("image/png");try{const{bgDataUrl:G}=await this.generateAtmosphereBackground(re),ne=await this.compressImageData(G),S=document.createElement("canvas");S.width=200,S.height=300;const F=S.getContext("2d");if(F){F.imageSmoothingEnabled=!1;const V=new Image;V.onload=()=>{F.drawImage(V,0,0,200,300);const _=new Image;_.onload=()=>{const D=Math.max(200/_.naturalWidth,300/_.naturalHeight),N=_.naturalWidth*D,X=_.naturalHeight*D,K=(200-N)/2,z=(300-X)/2,Q=30,ae=.85,te=Q*4,le=document.createElement("canvas");le.width=N+te*2,le.height=X+te*2;const ce=le.getContext("2d");ce&&(ce.imageSmoothingEnabled=!1,ce.drawImage(_,te,te,N,X),ce.globalCompositeOperation="source-in",ce.fillStyle="#000000",ce.fillRect(0,0,le.width,le.height),ce.globalCompositeOperation="source-over",F.save(),F.filter=`blur(${Q}px)`,F.globalAlpha=ae,F.drawImage(le,K-te,z-te),F.restore()),F.drawImage(_,K,z,N,X),b=S.toDataURL("image/png"),this.currentCard.imageData=b;const ue=document.getElementById("main-card-preview");ue&&b&&(ue.style.backgroundImage=`url(${b})`,ue.style.backgroundSize="cover",ue.style.backgroundPosition="center",ue.style.backgroundRepeat="no-repeat")},_.src=re},V.src=ne}}catch(G){alert("生成氛围感背景失败："+G.message)}}}U()}),document.querySelectorAll(".condition-side-check").forEach(I=>{I.addEventListener("change",A=>{A.stopPropagation();const B=I.dataset.editor,q=I.dataset.side;let O=null;if(B==="hero-skill"||(O=this.currentCard.effects?.[this.currentEffectIndex]||null,!O))return;if(O.conditionSides||(O.conditionSides=["friendly"]),I.checked)O.conditionSides.includes(q)||O.conditionSides.push(q);else if(O.conditionSides.length>1)O.conditionSides=O.conditionSides.filter(re=>re!==q);else{O.conditionSides=["friendly"],I.checked=!0;return}this.renderCardCreator()})}),document.querySelectorAll(".condition-logic-radio").forEach(I=>{I.addEventListener("change",A=>{A.stopPropagation();const B=I.dataset.editor,q=I.value;let O=null;B!=="hero-skill"&&(O=this.currentCard.effects?.[this.currentEffectIndex]||null,O&&(O.conditionSideLogic=q,this.renderCardCreator()))})}),document.querySelectorAll(".condition-op-btn").forEach(I=>{I.addEventListener("click",A=>{A.stopPropagation();const B=I.dataset.editor,q=I.dataset.op;let O=null;if(B==="hero-skill"||(O=this.currentCard.effects?.[this.currentEffectIndex]||null,!O))return;const J=O.conditionOperator||"=",re=J==="<"||J==="<=",G=J===">"||J===">=",ne=J==="="||J==="<="||J===">=";let S=re,F=G,V=ne;q==="<"?(F=!1,S=!re):q===">"?(S=!1,F=!G):q==="="&&(V=!ne),S&&V?O.conditionOperator="<=":F&&V?O.conditionOperator=">=":S?O.conditionOperator="<":F?O.conditionOperator=">":O.conditionOperator="=",this.renderCardCreator()})}),document.querySelectorAll(".condition-value-input").forEach(I=>{I.addEventListener("input",A=>{A.stopPropagation();const B=I.dataset.editor;let q=null;B!=="hero-skill"&&(q=this.currentCard.effects?.[this.currentEffectIndex]||null,q&&(q.conditionValue=Math.max(0,parseInt(A.target.value)||0)))})}),document.querySelectorAll(".condition-minion-name-input").forEach(I=>{I.addEventListener("input",A=>{A.stopPropagation();const B=I.dataset.editor;let q=null;B!=="hero-skill"&&(q=this.currentCard.effects?.[this.currentEffectIndex]||null,q&&(q.conditionMinionName=A.target.value))})}),document.querySelectorAll(".condition-target-attr-check").forEach(I=>{I.addEventListener("change",A=>{A.stopPropagation();const B=I.dataset.editor,q=I.dataset.attr;if(B==="hero-skill")return;const O=this.currentCard.effects?.[this.currentEffectIndex];if(!O)return;O.conditionTargetAttrs||(O.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const J=O.conditionTargetAttrs;J[q].enabled=A.target.checked,this.renderCardCreator()})}),document.querySelectorAll(".condition-target-op-btn").forEach(I=>{I.addEventListener("click",A=>{A.stopPropagation();const B=I.dataset.editor,q=I.dataset.attr,O=I.dataset.op;let J=null;if(B==="hero-skill"||(J=this.currentCard.effects?.[this.currentEffectIndex]||null,!J))return;J.conditionTargetAttrs||(J.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const re=J.conditionTargetAttrs,G=re[q].operator||"=",ne=G==="<"||G==="<=",S=G===">"||G===">=",F=G==="="||G==="<="||G===">=";let V=ne,_=S,D=F;O==="<"?(_=!1,V=!ne):O===">"?(V=!1,_=!S):O==="="&&(D=!F),V&&D?re[q].operator="<=":_&&D?re[q].operator=">=":V?re[q].operator="<":_?re[q].operator=">":re[q].operator="=",this.renderCardCreator()})}),document.querySelectorAll(".condition-target-attr-input").forEach(I=>{I.addEventListener("input",A=>{A.stopPropagation();const B=I.dataset.editor,q=I.dataset.attr;let O=null;B!=="hero-skill"&&(O=this.currentCard.effects?.[this.currentEffectIndex]||null,O&&(O.conditionTargetAttrs||(O.conditionTargetAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}}),O.conditionTargetAttrs[q].value=Math.max(0,parseInt(A.target.value)||0),this.renderCardCreator()))})}),document.querySelectorAll(".condition-minion-name-check").forEach(I=>{I.addEventListener("change",A=>{A.stopPropagation();const B=I.dataset.editor;let q=null;B!=="hero-skill"&&(q=this.currentCard.effects?.[this.currentEffectIndex]||null,q&&(q.conditionMinionCheckName=A.target.checked,this.renderCardCreator()))})}),document.querySelectorAll(".condition-minion-attr-check").forEach(I=>{I.addEventListener("change",A=>{A.stopPropagation();const B=I.dataset.editor,q=I.dataset.attr;let O=null;if(B==="hero-skill"||(O=this.currentCard.effects?.[this.currentEffectIndex]||null,!O))return;O.conditionMinionAttrs||(O.conditionMinionAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const J=O.conditionMinionAttrs;J[q].enabled=A.target.checked,this.renderCardCreator()})}),document.querySelectorAll(".condition-minion-attr-op-btn").forEach(I=>{I.addEventListener("click",A=>{A.stopPropagation();const B=I.dataset.editor,q=I.dataset.attr,O=I.dataset.op;let J=null;if(B==="hero-skill"||(J=this.currentCard.effects?.[this.currentEffectIndex]||null,!J))return;J.conditionMinionAttrs||(J.conditionMinionAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}});const re=J.conditionMinionAttrs,G=re[q].operator||"=",ne=G==="<"||G==="<=",S=G===">"||G===">=",F=G==="="||G==="<="||G===">=";let V=ne,_=S,D=F;O==="<"?(_=!1,V=!ne):O===">"?(V=!1,_=!S):O==="="&&(D=!F),V&&D?re[q].operator="<=":_&&D?re[q].operator=">=":V?re[q].operator="<":_?re[q].operator=">":re[q].operator="=",this.renderCardCreator()})}),document.querySelectorAll(".condition-minion-attr-input").forEach(I=>{I.addEventListener("input",A=>{A.stopPropagation();const B=I.dataset.editor,q=I.dataset.attr;let O=null;B!=="hero-skill"&&(O=this.currentCard.effects?.[this.currentEffectIndex]||null,O&&(O.conditionMinionAttrs||(O.conditionMinionAttrs={cost:{enabled:!1,operator:"=",value:0},attack:{enabled:!1,operator:"=",value:0},health:{enabled:!1,operator:"=",value:0}}),O.conditionMinionAttrs[q].value=Math.max(0,parseInt(A.target.value)||0),this.renderCardCreator()))})}),this.setupWheelScrollForwarding()}setupWheelScrollForwarding(){if(!this.isPortraitMode){const e=this.app.querySelector(".card-creator-active");e&&e.addEventListener("wheel",s=>{const a=s,r=a.target;if(r.closest(".editor-left-panel-scroll")||r.closest(".keyword-scroll-container, .target-scroll-container"))return;const i=document.querySelector(".editor-left-panel-scroll");i&&(a.preventDefault(),i.scrollBy({top:a.deltaY,behavior:"smooth"}))},{passive:!1})}}renderCardManager(){this.isPortraitMode=window.innerWidth/window.innerHeight<3/4;const e=this.state.groups;let s=0;const a=e.map(r=>{const i=[...r.cards].sort((t,l)=>ss(t.card,l.card)),n=i.reduce((t,l)=>t+l.count,0);return s+=n,{group:r,sortedCards:i,groupCount:n}});if(this.app.innerHTML=`
      <div class="min-h-screen p-8 card-manager-scroll" style="background: transparent; height: 100vh; overflow-y: auto; ${this.isPortraitMode?"transform: scale(0.75); transform-origin: top left; width: 133.33vw;":""}">
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
            /* 隐藏滚动条但保留滚动功能 */
            .card-manager-scroll::-webkit-scrollbar { display: none; }
            .card-manager-scroll { scrollbar-width: none; -ms-overflow-style: none; }
          </style>

          <!-- 分组渲染 -->
          ${a.map(({group:r,sortedCards:i,groupCount:n},t)=>`
            <!-- 分组标题行 -->
            <div class="group-header flex items-center gap-3 mb-3 ${t>0?"mt-8":""}">
              <button class="collapse-group-btn text-lg font-bold transform hover:scale-110 transition-all cursor-pointer select-none"
                data-group-id="${r.id}"
                style="color: #a08060; line-height: 1; font-size: 18px; background: none; border: none; padding: 0 2px;"
                title="${this.collapsedGroups.has(r.id)?"展开":"折叠"}">
                ${this.collapsedGroups.has(r.id)?"▶":"▼"}
              </button>
              ${t===0?`
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
            <div class="flex flex-wrap gap-3 mb-8 ${this.collapsedGroups.has(r.id)?"collapsed-group":""}" data-group-id="${r.id}" style="justify-content: flex-start; align-items: flex-start;">
              ${i.length===0?'<div class="text-sm italic" style="color: #b0a090;">（空）</div>':""}
              ${i.map(l=>{const o=l.card,d=o,p=l.count,c=o.id,h=d.type==="hero";return`
                <div class="card-item-wrapper" draggable="${this.collapsedGroups.has(r.id)?"true":"false"}" data-group-id="${r.id}" data-card-id="${c}" style="display: flex; flex-direction: row; align-items: stretch; width: ${h?"225px":"150px"}; overflow: visible; gap: 6px;">
                  <div class="card-item main-card-item w-full rounded-xl ${h?"aspect-[4/3]":"aspect-[2/3]"} shadow-md" style="${this.getCardBgInline(o)} border: 3px solid #d4c4a8; z-index: 1; box-shadow: 0 4px 12px rgba(0,0,0,0.15); flex: 1; min-width: 0; position: relative;" data-card-id="${c}">
                    ${h?"":`<div class="card-cost-badge">${d.cost}</div>`}
                    ${h?"":d.type==="hero"?'<div class="absolute" style="top: 28px; left: 2px; font-size: 10px; font-weight: bold; color: #ffd700; text-shadow: 0 0 3px black, 0 0 2px black;">英雄</div>':""}
                    ${h?"":`<div class="card-count-badge">x${p}</div>`}
                    <div class="absolute left-1 right-1 text-center truncate font-bold" style="top: 4px; color: white; font-size: 14px; z-index: 5; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 1px black;">
                      ${d.name}
                    </div>
                    ${h&&d.skills&&d.skills.length>0?`
                      <div class="hero-skills-row" style="position: absolute; bottom: 6px; left: 6px; display: flex; gap: 6px; z-index: 10; pointer-events: none;">
                        ${d.skills.map(f=>`
                          <div class="hero-skill-icon" title="${f.name}" style="position: relative; width: 36px; height: 36px;">
                            <div style="width: 36px; height: 36px; border-radius: 50%; background-image: url(${f.iconData||""}); background-size: cover; background-position: center; border: 2.5px solid #d4c4a8; box-shadow: 0 2px 8px rgba(0,0,0,0.35);"></div>
                            ${f.type==="passive"?`
                              <!-- 被动技能：只显示能量宝石，无数字 -->
                              <div style="position: absolute; bottom: -3px; right: -3px; width: 18px; height: 18px; background: url('/images/energy_gem_v2.png') center/cover no-repeat; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4));"></div>
                            `:`
                              <!-- 主动技能：能量宝石 + 数字 -->
                              <div style="position: absolute; bottom: -3px; right: -3px; width: 20px; height: 20px; background: url('/images/energy_gem_v2.png') center/cover no-repeat; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4));">
                                <span style="font-size: 10px; font-weight: bold; color: #fff; text-shadow: 0 0 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.5); line-height: 1;">${f.cost??1}</span>
                              </div>
                            `}
                          </div>
                        `).join("")}
                      </div>
                    `:""}
                    ${!h&&(d.keywords.length>0||this.getCardFullEffectText(o))?`
                      <div class="card-description-wrapper">
                        ${d.keywords.length>0?`
                          <div class="card-keywords-area">
                            ${d.keywords.map(f=>{const u=f.name==="护甲"?f.value??d.armorValue??1:"";return`<span class="card-keyword-tag">${f.name}${u}</span>`}).join("")}
                          </div>
                        `:""}
                        ${this.getCardFullEffectText(o)?`
                          <div class="card-effect-area">
                            ${this.getCardFullEffectText(o)}
                          </div>
                        `:""}
                      </div>
                    `:""}
                    ${!h&&d.type!=="spell"?`<div class="card-attack-badge">${d.attack}</div>`:""}
                    ${!h&&d.type!=="spell"?`<div class="card-health-badge">${d.health}</div>`:""}
                  </div>
                  <div class="right-actions" style="display: flex; flex-direction: column; gap: 4px; justify-content: center; flex-shrink: 0;">
                    <button class="delete-btn" style="width: 26px; height: 26px; border-radius: 50%; background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: none; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; cursor: pointer; z-index: 20; padding: 0; line-height: 1; box-shadow: 0 2px 6px rgba(160, 64, 64, 0.5); flex-shrink: 0;" data-card-id="${c}" title="删除全部">✕</button>
                    <button class="edit-card-btn" style="width: 26px; height: 26px; border-radius: 6px; background: linear-gradient(135deg, #6fa8dc 0%, #4a90d9 100%); color: #fff; border: none; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; cursor: pointer; z-index: 20; padding: 0; line-height: 1; box-shadow: 0 2px 6px rgba(61, 133, 198, 0.5); flex-shrink: 0;" data-card-id="${c}" title="编辑">✎</button>
                    ${h?"":`
                    <button class="increase-card-btn" style="width: 26px; height: 26px; border-radius: 6px; background: linear-gradient(135deg, #7cb87c 0%, #5a9a5a 100%); color: #fff; border: none; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: bold; cursor: pointer; z-index: 20; padding: 0; line-height: 1; box-shadow: 0 2px 6px rgba(58, 122, 58, 0.5); flex-shrink: 0;" data-card-id="${c}" title="增加">+</button>
                    <button class="decrease-card-btn" style="width: 26px; height: 26px; border-radius: 6px; background: linear-gradient(135deg, #f5a623 0%, #d48a1c 100%); color: #fff; border: none; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: bold; cursor: pointer; z-index: 20; padding: 0; line-height: 1; box-shadow: 0 2px 6px rgba(212, 138, 28, 0.5); flex-shrink: 0;" data-card-id="${c}" title="减少">−</button>
                    `}
                  </div>
                </div>
                `}).join("")}
            </div>
          `).join("")}

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
        </div>
      </div>
    `,this.attachCardManagerEvents(),this.savedCardManagerScrollY>0){const r=this.savedCardManagerScrollY;this.savedCardManagerScrollY=0,requestAnimationFrame(()=>{requestAnimationFrame(()=>{const i=this.app.querySelector(".card-manager-scroll");i&&(i.scrollTop=r)})})}}parseCardTemplateFromDataset(e){const s=(e.cardKeywords||"").split(",").filter(Boolean).map(a=>Object.values($e).find(r=>r.name===a)).filter(Boolean);return{name:e.cardName||"",cost:parseInt(e.cardCost||"0"),attack:parseInt(e.cardAttack||"0"),health:parseInt(e.cardHealth||"1"),maxHealth:parseInt(e.cardHealth||"1"),type:"minion",keywords:s}}attachCardManagerEvents(){document.getElementById("create-group-btn")?.addEventListener("click",()=>{const t=`卡组${this.state.groups.filter(o=>o.id!==Le).length+1}`;this.state=oe(this.state,{type:"CREATE_GROUP",name:t});const l=this.state.groups.find(o=>o.id!==Le&&!this.collapsedGroups.has(o.id));l&&this.collapsedGroups.add(l.id),this.saveDeck(),this.renderCardManager()}),document.querySelectorAll(".disband-group-btn").forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.groupId||"";t&&(this.state=oe(this.state,{type:"DELETE_GROUP",groupId:t}),this.saveDeck(),this.renderCardManager())})}),document.querySelectorAll(".collapse-group-btn").forEach(n=>{n.addEventListener("click",()=>{const t=n.dataset.groupId||"";t&&(this.collapsedGroups.has(t)?this.collapsedGroups.delete(t):this.collapsedGroups.add(t),this.renderCardManager())})}),document.querySelectorAll(".group-name-text").forEach(n=>{n.addEventListener("dblclick",()=>{const t=n.dataset.groupId||"";if(!t)return;const l=jt(this.state,t)?.name||"",o=n,d=document.createElement("input");d.type="text",d.value=l,d.className="group-rename-input",d.style.cssText="font-size: inherit; font-weight: bold; font-family: Georgia, serif; color: #8b7355; background: rgba(139, 115, 85, 0.1); border: 1px solid #8b7355; border-radius: 4px; padding: 2px 6px; outline: none; width: 150px;",o.replaceWith(d),d.focus(),d.select();const p=()=>{const c=d.value.trim();c&&c!==l&&(this.state=oe(this.state,{type:"RENAME_GROUP",groupId:t,name:c}),this.saveDeck()),this.renderCardManager()};d.addEventListener("blur",p),d.addEventListener("keydown",c=>{c.key==="Enter"?(c.preventDefault(),d.blur()):c.key==="Escape"&&(d.value=l,d.blur())})})});let e=null,s=null;const a=n=>{const t=n.target.closest(".card-item-wrapper");if(!t)return;e=parseInt(t.dataset.cardId||"",10),s=t.dataset.groupId||null,n.dataTransfer?.setData("text/plain",`${e}`),n.dataTransfer.effectAllowed="move",t.style.opacity="0.35",t.style.transition="opacity 0.15s ease",document.body.style.cursor="none";const l=t.querySelector(".card-item");if(l){const p=(l.getAttribute("style")||"").match(/(background-image[^;]*;?\s*background-size[^;]*;?\s*background-position[^;]*;?)/i),c=p?p[1]:"background: #f8f4ec;",h=l.classList.contains("aspect-[4/3]"),f=60,u=h?45:90,b=document.createElement("div");b.style.cssText=`${c} background-repeat: no-repeat;`,b.style.position="fixed",b.style.left="-9999px",b.style.top="-9999px",b.style.pointerEvents="none",b.style.opacity="1",b.style.width=f+"px",b.style.height=u+"px",b.style.borderRadius="6px",b.style.border="2px solid #d4c4a8",b.style.boxShadow="0 4px 16px rgba(0,0,0,0.4)",document.body.appendChild(b),n.dataTransfer?.setDragImage(b,f/2,u/2),requestAnimationFrame(()=>{document.body.removeChild(b)})}const o=()=>{t.style.opacity="",t.style.transition="",document.body.style.cursor="",t.removeEventListener("dragend",o)};t.addEventListener("dragend",o)};document.querySelectorAll(".card-item-wrapper").forEach(n=>{n.addEventListener("dragstart",a)}),document.querySelectorAll(".group-header, .flex.flex-wrap.gap-3").forEach(n=>{n.addEventListener("dragover",t=>{t.preventDefault(),t.dataTransfer.dropEffect="move"}),n.addEventListener("drop",t=>{t.preventDefault();const l=t.target.closest(".group-header");let o=null;if(l){const d=l.querySelector(".group-name-text");if(d)o=d.dataset.groupId||null;else{const p=l.nextElementSibling;p&&(o=p.dataset.groupId||null)}}else o=t.target.closest(".flex.flex-wrap.gap-3")?.dataset.groupId||null;e!==null&&o&&o!==s&&(this.state=oe(this.state,{type:"MOVE_CARD_TO_GROUP",cardId:e,groupId:o}),e=null,s=null,this.saveDeck(),this.renderCardManager())})}),(()=>{const t=window.innerHeight,l=o=>{const d=o.clientY;d<t*.15?window.scrollBy(0,-3):d>t*(1-.15)&&window.scrollBy(0,3)};document.addEventListener("dragover",l),document.addEventListener("dragend",()=>{document.removeEventListener("dragover",l),e=null,s=null},{once:!0})})(),document.getElementById("merge-import-btn")?.addEventListener("click",()=>{if(!this.pendingImportType)return;this.pendingImportMode="merge";const n=new Set(this.state.groups.map(o=>o.id)),t=document.getElementById("import-mode-dialog");t&&(t.style.display="none");const l=document.createElement("input");l.type="file",l.accept=this.pendingImportType==="zip"?".zip,application/zip":".png",l.onchange=async o=>{const d=o.target.files?.[0];if(!d){this.pendingImportMode=null,this.pendingImportType=null;return}const p=document.getElementById("import-zip-btn");p&&(p.textContent="⌛️ 导入中...",p.disabled=!0);try{let c=[],h=[];if(this.pendingImportType==="zip"){const u=await this.parseGroupsFromZipBlob(d);c=[],h=u.heroCards;const b=Re(this.state);if(u.groups.length>0){const m=u.groups[0].cards;b.cards=this.mergeDeckEntries(b.cards,m),c=m}for(let m=1;m<u.groups.length;m++){const y=u.groups[m],x=this.state.groups.find(v=>v.name===y.name);if(x)x.cards=this.mergeDeckEntries(x.cards,y.cards);else{const v={id:`group_${Date.now()}_${m}`,name:y.name,cards:[...y.cards]};this.state.groups.push(v)}c=[...c,...y.cards]}if(c.length===0){alert("无效卡包：ZIP 中没有找到 PNG 卡牌文件");return}}else{const u=await this.importCardFromPNGFile(d);if(!u){alert("导入失败：无法解析卡牌文件");return}const{cardData:b,imageData:m}=u,y=b.effects||(b.effect?[b.effect]:[]),x=v=>{const C={...v};return v.targets&&(C.targets=[...v.targets]),C};c=[{card:{id:Ee(),name:b.name||"",type:b.type||"minion",cost:b.cost??1,attack:b.attack??1,health:b.health??1,maxHealth:b.health??1,keywords:(b.keywords||[]).map(v=>v==="风怒"?"__WINDURY__":v).map(v=>v==="__WINDURY__"?"连击":v).map(v=>Object.values($e).find(g=>g.name===v)||{name:v,description:"",hasValue:!1}),armorValue:b.armorValue??1,effects:y.map(x),effect:y.length>0?x(y[0]):void 0,effectDescription:b.effectDescription||"",derivedCards:b.derivedCards,imageData:m},count:1}]}const f=c.reduce((u,b)=>u+b.count,0);if(this.pendingImportType!=="zip"){const u=Re(this.state),b=this.mergeDeckEntries(u.cards,c);u.cards=b,h.length>0&&h.forEach(m=>{const y=u.cards.find(x=>x.card.id===m.id);y?y.count++:u.cards.push({card:m,count:1})})}this.state={...this.state,groups:[...this.state.groups]},this.pendingImportCards=[],this.pendingImportMode=null,this.pendingImportType=null,this.collapsedGroups=new Set(this.state.groups.filter(u=>n.has(u.id)?this.collapsedGroups.has(u.id):!0).map(u=>u.id)),this.saveDeck(),this.renderCardManager(),this.showResult("import-result",`✓ 已合并导入 ${f} 张卡牌`)}catch(c){console.error("合并导入失败:",c),alert("导入失败："+(c instanceof Error?c.message:"未知错误"))}finally{p&&(p.textContent="📂 导入卡包(ZIP)",p.disabled=!1)}},l.click()}),document.getElementById("replace-import-btn")?.addEventListener("click",()=>{if(!this.pendingImportType)return;this.pendingImportMode="replace";const n=document.getElementById("import-mode-dialog");n&&(n.style.display="none");const t=document.createElement("input");t.type="file",t.accept=this.pendingImportType==="zip"?".zip,application/zip":".png",t.onchange=async l=>{const o=l.target.files?.[0];if(!o){this.pendingImportMode=null,this.pendingImportType=null;return}const d=document.getElementById("import-zip-btn");d&&(d.textContent="⌛️ 导入中...",d.disabled=!0);try{let p=[],c=[];if(this.pendingImportType==="zip"){const h=await this.parseGroupsFromZipBlob(o);p=[],c=h.heroCards;const f=Re(this.state);this.state.groups=[f],h.groups.length>0?(f.cards=[...h.groups[0].cards],p=[...h.groups[0].cards]):f.cards=[];for(let u=1;u<h.groups.length;u++){const b=h.groups[u],m={id:`group_${Date.now()}_${u}`,name:b.name,cards:[...b.cards]};this.state.groups.push(m),p=[...p,...b.cards]}if(p.length===0){alert("无效卡包：ZIP 中没有找到 PNG 卡牌文件");return}}else{if(!confirm("覆盖导入将清空当前所有卡牌，确定继续？")){this.pendingImportMode=null,this.pendingImportType=null;return}const h=await this.importCardFromPNGFile(o);if(!h){alert("导入失败：无法解析卡牌文件");return}const{cardData:f,imageData:u}=h,b=f.effects||(f.effect?[f.effect]:[]),m=y=>{const x={...y};return y.targets&&(x.targets=[...y.targets]),x};p=[{card:{id:Ee(),name:f.name||"",type:f.type||"minion",cost:f.cost??1,attack:f.attack??1,health:f.health??1,maxHealth:f.health??1,keywords:(f.keywords||[]).map(y=>y==="风怒"?"__WINDURY__":y).map(y=>y==="__WINDURY__"?"连击":y).map(y=>Object.values($e).find(v=>v.name===y)||{name:y,description:"",hasValue:!1}),armorValue:f.armorValue??1,effects:b.map(m),effect:b.length>0?m(b[0]):void 0,effectDescription:f.effectDescription||"",derivedCards:f.derivedCards,imageData:u},count:1}]}if(this.pendingImportType!=="zip"){const h=Re(this.state);h.cards=p,c.length>0&&c.forEach(f=>{const u=h.cards.find(b=>b.card.id===f.id);u?u.count++:h.cards.push({card:f,count:1})})}this.state={...this.state,groups:[...this.state.groups]},this.pendingImportCards=[],this.pendingImportMode=null,this.pendingImportType=null,this.collapsedGroups=new Set(this.state.groups.map(h=>h.id)),this.saveDeck(),this.renderCardManager(),this.showResult("import-result","✓ 已覆盖导入")}catch(p){console.error("覆盖导入失败:",p),alert("导入失败："+(p instanceof Error?p.message:"未知错误"))}finally{d&&(d.textContent="📂 导入卡包(ZIP)",d.disabled=!1)}},t.click()}),document.getElementById("cancel-import-btn")?.addEventListener("click",()=>{this.pendingImportCards=[],this.pendingImportMode=null,this.pendingImportType=null;const n=document.getElementById("import-mode-dialog");n&&(n.style.display="none")}),document.getElementById("clear-deck-btn")?.addEventListener("click",()=>{if(this.state.groups.reduce((t,l)=>t+l.cards.reduce((o,d)=>o+d.count,0),0)===0){alert("卡包已经是空的！");return}this.state={...this.state,groups:[{id:Le,name:"公用卡组",cards:[]}]},this.state.sharedDeck=[],this.saveDeck(),this.renderCardManager()}),document.getElementById("export-zip-btn")?.addEventListener("click",()=>{if(!this.state.groups.some(t=>t.cards.length>0)){alert("卡包为空，无法导出！");return}this.exportDeckToZip()}),document.getElementById("deck-folder-btn")?.addEventListener("click",async()=>{try{if(this.deckFolderHandle){const t=this.deckFolderHandle;if(await t.queryPermission({mode:"read"})!=="granted"&&await t.requestPermission({mode:"read"})!=="granted"){alert("需要授权才能访问该文件夹，请重新选择文件夹。"),this.deckFolderHandle=null,this.deckFolderName="",await Pt(null),this.render();return}await this.refreshDeckFolderZips(),this.render();return}if(typeof window.showDirectoryPicker!="function"){alert(`当前浏览器不支持「卡包组文件夹」功能（需要 Chrome/Edge 最新版，且页面必须在安全上下文 HTTPS 或 localhost 中）。

你可以改用「导入卡包(ZIP)」按钮手动导入卡包文件。`);return}const n=await window.showDirectoryPicker();this.deckFolderHandle=n,this.deckFolderName=n.name,await Pt(n),await this.refreshDeckFolderZips(),this.render()}catch(n){if(n.name==="AbortError")return;if(n.name==="SecurityError"){alert(`无法访问文件夹：浏览器安全策略阻止了此操作。

可能原因：页面被嵌入在 iframe 中，或当前环境限制了文件系统访问。
建议改用「导入卡包(ZIP)」按钮手动导入。`),console.warn("选择文件夹失败(SecurityError):",n.message);return}alert("选择文件夹失败："+(n instanceof Error?n.message:"未知错误")),console.warn("选择文件夹失败:",n)}}),document.getElementById("import-zip-btn")?.addEventListener("click",()=>{this.pendingImportType="zip";const n=document.getElementById("import-mode-dialog");n&&(n.style.display="block")}),document.getElementById("import-card-to-deck-btn")?.addEventListener("click",()=>{const n=document.createElement("input");n.type="file",n.accept="image/png",n.style.cssText="position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;opacity:0;",document.body.appendChild(n),n.addEventListener("change",async t=>{const l=t.target.files?.[0];if(document.body.removeChild(n),!l)return;const o=document.getElementById("import-card-to-deck-btn");o&&(o.textContent="⌛️ 导入中...",o.disabled=!0);try{const d=await this.importCardFromPNGFile(l);if(!d){alert("无法从该 PNG 文件中读取卡牌数据");return}const{cardData:p,imageData:c}=d,h=p.effects||(p.effect?[p.effect]:[]),f=y=>{const x={...y};return y.targets&&(x.targets=[...y.targets]),x},u={id:Ee(),name:p.name||"",type:p.type||"minion",cost:p.cost??1,attack:p.attack??1,health:p.health??1,maxHealth:p.health??1,keywords:(p.keywords||[]).map(y=>y==="风怒"?"__WINDURY__":y).map(y=>y==="__WINDURY__"?"连击":y).map(y=>Object.values($e).find(v=>v.name===y)||{name:y,description:"",hasValue:!1}),armorValue:p.armorValue??1,effects:h.map(f),effect:h.length>0?f(h[0]):void 0,effectDescription:p.effectDescription||"",derivedCards:p.derivedCards,imageData:c},b=Re(this.state),m=b.cards.find(y=>y.card.id===u.id);m?m.count++:b.cards.push({card:u,count:1}),this.state={...this.state,groups:[...this.state.groups]},this.saveDeck(),this.renderCardManager(),this.showResult("import-result","✓ 已导入卡牌")}catch(d){console.error("导入卡牌失败:",d),alert("导入失败："+(d instanceof Error?d.message:"未知错误"))}finally{o&&(o.textContent="🃏 导入卡牌",o.disabled=!1)}}),n.click()}),document.querySelectorAll(".increase-card-btn").forEach(n=>{n.addEventListener("click",()=>{const t=n,l=parseInt(t.dataset.cardId||"0"),d=t.closest("[data-group-id]")?.dataset.groupId,p=this.state.groups.find(c=>c.id===d);if(p){const c=p.cards.find(h=>h.card.id===l);if(c){c.count=(c.count||1)+1,this.state={...this.state,groups:[...this.state.groups]},this.syncSharedDeck(),this.saveDeck(),this.renderCardManager();return}}})}),document.querySelectorAll(".decrease-card-btn").forEach(n=>{n.addEventListener("click",()=>{const t=n,l=parseInt(t.dataset.cardId||"0"),d=t.closest("[data-group-id]")?.dataset.groupId,p=this.state.groups.find(c=>c.id===d);if(p){const c=p.cards.find(h=>h.card.id===l);if(c){if(c.count&&c.count>1)c.count-=1;else return;this.state={...this.state,groups:[...this.state.groups]},this.syncSharedDeck(),this.saveDeck(),this.renderCardManager();return}}})}),document.querySelectorAll(".edit-card-btn").forEach(n=>{n.addEventListener("click",()=>{const t=n,l=parseInt(t.dataset.cardId||"0"),d=t.closest("[data-group-id]")?.dataset.groupId,p=this.state.groups.find(u=>u.id===d);let c;if(p&&(c=p.cards.find(u=>u.card.id===l)),!c)return;const h=c.card;if(h.type==="hero"){this.heroName=h.name,this.heroImageData=h.imageData||"",this.isHeroEditMode=!0,this.editingHeroId=h.id,this.heroDerivedCards=h.derivedCards?h.derivedCards.map(b=>({name:b.name||"",type:b.type||"minion",cost:b.cost??1,attack:b.attack??1,health:b.health??1,armorValue:b.armorValue??0,preparationValue:b.preparationValue??1,imageData:b.imageData||"",keywords:b.keywords||[],effects:b.effects||[]})):[],this.heroSkills=h.skills||[],this.heroSpeech=h.heroSpeech?{...h.heroSpeech}:{greeting:"",apology:"",taunt:"",exclamation:"",pity:"",flirt:""},this.heroVoiceType=h.heroSpeech?.voiceType||"none",this.heroEditingDerivedIndex=null,this.heroEditingSkillIndex=null,this.editingCards=[];const u=this.app.querySelector(".card-manager-scroll");this.savedCardManagerScrollY=u?u.scrollTop:0,this.state=oe(this.state,{type:"SHOW_HERO_EDITOR"}),this.render();return}this.isEditMode=!0,this.editingCardSample=h,this.currentCardIndex=0,this.currentCard={name:h.name,type:h.type||"minion",cost:h.cost,attack:h.attack,health:h.health,keywords:[...h.keywords],armorValue:h.armorValue||1,preparationValue:h.preparationValue||1,imageData:h.imageData||null,effects:h.effects?h.effects.map(u=>({...u,moment:u.moment||"打出时",targets:u.targets||[],attackValue:u.attackValue??1,healthValue:u.healthValue??1,isAttackPositive:u.isAttackPositive??!0,isHealthPositive:u.isHealthPositive??!0})):h.effect?[{...h.effect,moment:h.effect.moment||"打出时",targets:h.effect.targets||[],attackValue:h.effect.attackValue??1,healthValue:h.effect.healthValue??1,isAttackPositive:h.effect.isAttackPositive??!0,isHealthPositive:h.effect.isHealthPositive??!0}]:[],spellEffect:h.type==="spell"?h.effects?.[0]||h.effect||{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}:{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}},this.currentEffectIndex=0,h.derivedCards&&h.derivedCards.length>0?(this.editingCards=h.derivedCards.map((u,b)=>{const m=u.type==="spell";return{name:u.name||(b===0?"":`衍生卡${b}`),type:u.type||"minion",cost:u.cost??1,attack:u.attack??(m?0:1),health:u.health??(m?0:1),keywords:(u.keywords||[]).map(y=>Object.values($e).find(v=>v.name===y.name)||{name:y.name,description:"",hasValue:!1}),armorValue:u.armorValue??1,preparationValue:u.preparationValue??1,effects:(u.effects||[]).map(y=>({...y,moment:y.moment||"打出时",targets:y.targets||[],attackValue:y.attackValue??1,healthValue:y.healthValue??1,isAttackPositive:y.isAttackPositive??!0,isHealthPositive:y.isHealthPositive??!0})),spellEffect:m?u.effects?.[0]||{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0}:{moment:"打出时",targets:[],effect:null,value:1,attackValue:1,healthValue:1,isPositive:!0,isAttackPositive:!0,isHealthPositive:!0},imageData:u.imageData||null}}),this.editingCards[0]=this.currentCard):this.editingCards=[this.currentCard],this.currentCardIndex=0;const f=this.app.querySelector(".card-manager-scroll");this.savedCardManagerScrollY=f?f.scrollTop:0,this.state=oe(this.state,{type:"SHOW_CARD_CREATOR"}),this.render()})}),document.querySelectorAll(".delete-btn, .delete-all-btn").forEach(n=>{n.addEventListener("click",()=>{const t=n,l=parseInt(t.dataset.cardId||"0"),d=t.closest("[data-group-id]")?.dataset.groupId,p=this.state.groups.find(c=>c.id===d);if(p){p.cards=p.cards.filter(c=>c.card.id!==l),this.state={...this.state,groups:[...this.state.groups]},this.syncSharedDeck(),this.saveDeck(),this.renderCardManager();return}})}),document.querySelectorAll(".deck-folder-zip-btn").forEach(n=>{n.addEventListener("click",async t=>{const l=t.currentTarget.dataset.zipName;if(!l)return;const o=this.deckFolderZips.find(d=>d.name===l);if(o)try{const d=await o.handle.getFile(),p=await this.parseGroupsFromZipBlob(d),c=p.heroCards,h=[];if(p.groups.length>0)for(let f=0;f<p.groups.length;f++){const u=p.groups[f];h.push({id:f===0?this.state.groups[0].id:`group_${Date.now()}_${f}`,name:u.name||(f===0?this.state.groups[0].name:""),cards:[...u.cards]})}this.state={...this.state,groups:h},this.syncSharedDeck(),this.saveDeck(),this.collapsedGroups=new Set(this.state.groups.map(f=>f.id)),this.showResult("import-result",`✓ 导入成功：${l}`),this.renderCardManager()}catch(d){alert(`导入失败：${d instanceof Error?d.message:"未知错误"}`)}})}),document.getElementById("back-menu-btn")?.addEventListener("click",()=>{this.saveDeck(),this.state=oe(this.state,{type:"BACK_TO_MENU"}),this.render()})}showResult(e,s){const a=document.getElementById(e);a&&(a.textContent=s,a.style.display="block",setTimeout(()=>{a.style.display="none"},2e3))}playDrawCardAnimation(e=0){this.playDrawSound();const s=document.querySelectorAll(".hand-card-wrapper.newly-drawn");if(s.length===0){console.log("没有新抽的牌需要动画"),this.state=oe(this.state,{type:"CLEAR_NEWLY_DRAWN"});return}console.log("开始播放抽牌动画，牌数:",s.length);const a=document.getElementById("end-turn-btn")||document.getElementById("my-turn-btn"),r=document.getElementById("hand-container");if(!a||!r){console.log("找不到按钮或容器，直接显示手牌"),s.forEach(o=>{o.classList.remove("newly-drawn"),o.style.opacity="1"}),this.state=oe(this.state,{type:"CLEAR_NEWLY_DRAWN"});return}const i=a.getBoundingClientRect(),n=i.left+i.width/2,t=i.top+i.height/2;s.forEach((o,d)=>{const p=o.dataset.cardId,c=e+d*200;setTimeout(()=>{p&&this.animateSingleCard(parseInt(p),n,t)},c)});const l=e+s.length*200+500;setTimeout(()=>{document.querySelectorAll(".hand-card-wrapper.newly-drawn").forEach(o=>{o.classList.remove("newly-drawn"),o.style.opacity="1"}),this.state=oe(this.state,{type:"CLEAR_NEWLY_DRAWN"})},l)}animateSingleCard(e,s,a){const r=document.querySelector(`.hand-card-wrapper[data-card-id="${e}"]`);if(!r){console.log("animateSingleCard: 找不到卡牌元素",e);return}const i=r.getBoundingClientRect(),n=i.left+i.width/2,t=i.top+i.height/2,l=getComputedStyle(r).getPropertyValue("--rotate").trim(),o=parseFloat(l)||0,d=document.createElement("div");d.className="draw-card-animation",d.innerHTML=`
      <div class="draw-card-fly" style="
        width: 30px;
        height: 42px;
        background: linear-gradient(135deg, #fff 0%, #f8f4ec 100%);
        border: 2px solid #c4b49c;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      "></div>
    `,d.style.left="0",d.style.top="0",document.body.appendChild(d);const p=(s+n)/2,c=Math.min(a,t)-100,h=350,f=performance.now(),u=(m,y)=>{const x=document.createElement("div");x.className="draw-trail-particle",x.style.left=`${m}px`,x.style.top=`${y}px`,x.style.background="linear-gradient(135deg, rgba(212, 196, 168, 0.9) 0%, rgba(196, 180, 156, 0.7) 100%)",document.body.appendChild(x),setTimeout(()=>{x.style.transition="opacity 0.25s, transform 0.25s",x.style.opacity="0",x.style.transform="scale(0.2)",setTimeout(()=>x.remove(),250)},30)},b=m=>{const y=m-f,x=Math.min(y/h,1),v=1-Math.pow(1-x,3),C=v,g=(1-C)*(1-C)*s+2*(1-C)*C*p+C*C*n,k=(1-C)*(1-C)*a+2*(1-C)*C*c+C*C*t,w=.3+.7*v;d.style.transform=`translate(${g-15}px, ${k-21}px) scale(${w})`,d.style.opacity="1",y%25<15&&x<.85&&u(g+(Math.random()-.5)*8,k+(Math.random()-.5)*8),x<1?requestAnimationFrame(b):(d.remove(),r.classList.remove("newly-drawn"),r.style.transition="opacity 0.25s, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",r.style.opacity="1",r.style.transform=`rotate(${o}deg) scale(1)`,setTimeout(()=>{r.style.removeProperty("transform"),r.style.removeProperty("opacity"),r.style.removeProperty("transition")},400))};requestAnimationFrame(b)}mergeDeckEntries(e,s){const a=new Map;for(const r of e)a.set(xe(r.card),{...r});for(const r of s){const i=xe(r.card),n=a.get(i);n?n.count+=r.count:a.set(i,{...r})}return Array.from(a.values())}saveDeck(e){try{if(e!==void 0){const s=Re(this.state);s.cards=e,this.state={...this.state,groups:[...this.state.groups]}}this.syncSharedDeck()}catch(s){console.warn("保存分组信息失败:",s)}this.pendingSavePromise=Tt(this.state.sharedDeck,this.state.heroCards||[],this.state.groups).catch(s=>{console.warn("IndexedDB 保存卡包失败:",s)})}syncSharedDeck(){const e=Re(this.state);this.state.sharedDeck=e.cards;const s=[];for(const a of this.state.groups)for(const r of a.cards)r.card.type==="hero"&&s.push(r.card);this.state.heroCards=s}saveDeckToFile(){const e=l=>{const o={...l};return l.targets&&(o.targets=[...l.targets]),l.isOpponent&&(o.isOpponent=l.isOpponent),o},s=this.state.sharedDeck.reduce((l,o)=>l+o.count,0),a=[];a.push("# 妙卡包 - 卡包文件"),a.push(`# 生成时间: ${new Date().toLocaleString()}`),a.push(`# 总卡牌数: ${s}`),a.push(""),this.state.sharedDeck.forEach(({card:l,count:o})=>{a.push(`${l.name} x${o}`);const d={name:l.name,type:l.type,cost:l.cost,attack:l.attack,health:l.health,keywords:l.keywords.map(c=>c.name),armorValue:l.armorValue,effects:l.effects?l.effects.map(e):void 0,effect:l.effect?e(l.effect):void 0,effectDescription:l.effectDescription||void 0,derivedCards:l.derivedCards,spellEffect:l.type==="spell"?l.legacyEffect:void 0,spellValue:l.type==="spell"?l.legacyEffectValue:void 0},p=btoa(encodeURIComponent(JSON.stringify(d)));a.push(p),a.push("")});const r=a.join(`
`),i=new Blob([r],{type:"text/plain;charset=utf-8"}),n=URL.createObjectURL(i),t=document.createElement("a");t.href=n,t.download="cards.txt",t.click(),URL.revokeObjectURL(n),this.showResult("import-result","✓ 卡包已保存！")}parseDeckFile(e){const s=[],a=e.split(`
`);for(let r=0;r<a.length;r++){const i=a[r].trim();if(i.startsWith("#")||i==="")continue;const n=i.match(/^(.+?)\s*x(\d+)$/);if(n){const t=n[1].trim(),l=parseInt(n[2]),o=a[r+1]?.trim();if(o&&!o.startsWith("#")&&o!=="")try{const d=JSON.parse(decodeURIComponent(atob(o))),p=(d.keywords||[]).map(f=>Object.values($e).find(u=>u.name===f)).filter(Boolean);let c=[];d.effects&&Array.isArray(d.effects)&&d.effects.length>0?c=d.effects.filter(f=>f.effect).map(f=>({moment:f.moment||(d.type==="spell"?"打出时":void 0),targets:f.targets||[],effect:f.effect,value:f.value||0,attackValue:f.attackValue||0,healthValue:f.healthValue||0,isPositive:f.isPositive!==!1,isAttackPositive:f.isAttackPositive!==!1,isHealthPositive:f.isHealthPositive!==!1,summonedCardIndex:f.summonedCardIndex,summonedCardIndices:f.summonedCardIndices,isRandom:f.isRandom})):d.effect&&d.effect.effect&&(c=[{moment:d.effect.moment||(d.type==="spell"?"打出时":void 0),targets:d.effect.targets||[],effect:d.effect.effect,value:d.effect.value||0,attackValue:d.effect.attackValue||0,healthValue:d.effect.healthValue||0,isPositive:d.effect.isPositive!==!1,isAttackPositive:d.effect.isAttackPositive!==!1,isHealthPositive:d.effect.isHealthPositive!==!1,summonedCardIndex:d.effect.summonedCardIndex,summonedCardIndices:d.effect.summonedCardIndices,isRandom:d.effect.isRandom,isOpponent:d.effect.isOpponent}]);const h=c.map(f=>{const u=f.targets||[],b=this.mergeTargets(u),m=b.includes("无需目标")||b.includes("卡牌")||u.length===0,y=b.length>0&&!m?`对${b.join("、")}`:"",x=f.isOpponent?"对手":"",v=f.moments||(f.moment?[f.moment]:[]),C=v.length===1&&v[0]==="打出时"?"":v.map(k=>Te[k]||"").join(""),g=m?x:"";if(f.effect==="造成伤害"){const k=f.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[f.elementType]||"";return`${C}${g}${y}造成${f.value}点${k}伤害`}else{if(f.effect==="抽牌")return`${C}${g}抽${f.value}张牌`;if(f.effect==="弃牌")return`${C}${g}弃${f.value}张牌`;if(f.effect==="属性变化"){const k=f.isAttackPositive!==!1?"+":"-",w=f.isHealthPositive!==!1?"+":"-",P=f.attackValue||0,M=f.healthValue||0;return P===0||M===0?`${C}${g}${y}${k}${P}/${w}${M}`:`${C}${g}${y}${k}${P}/${w}${M}`}else{if(f.effect==="给予印记")return`${C}${g}${y}给予${f.value}点印记`;if(f.effect==="治愈")return`${C}${g}${y}治愈${f.value}点生命`;if(f.effect==="获得能量")return`${C}${g}获得${f.value}点能量`;if(f.effect==="失去能量")return`${C}${g}失去${f.value}点能量`;if(f.effect==="召唤"){const k=f.value||1;let w;return f.summonSource&&f.summonSource!=="derived"?w=Me(f.summonSource,!!f.isRandom):w="衍生随从",`${C}${g}召唤${k}张${w}`}else if(f.effect==="获得"){const k=f.value||1;let w;return f.summonSource&&f.summonSource!=="derived"?w=Me(f.summonSource,!!f.isRandom):w="衍生牌",`${C}${g}获得${k}张${w}(随从)`}}}return""}).filter(Boolean).join("；");for(let f=0;f<l;f++)s.push({id:Ee(),name:d.name||t,cost:d.cost||0,attack:d.attack||0,health:d.health||1,maxHealth:d.health||1,type:d.type||"minion",keywords:[...p],armorValue:d.armorValue,effects:c.length>0?c:void 0,effect:c.length>0?c[0]:void 0,effectDescription:h||void 0,derivedCards:d.derivedCards,legacyEffect:d.type==="spell"?d.spellEffect:void 0,legacyEffectValue:d.type==="spell"?d.spellValue:void 0});r++}catch{console.error("解析卡牌代码失败:",o)}}}return s}renderSetup(){const e=this.state.sharedDeck.reduce((o,d)=>o+d.count,0),s=this.state.phase==="robotSetup",a=localStorage.getItem("miaoKaBao_player1Name")||"",r=localStorage.getItem("miaoKaBao_player2Name")||"";this.app.innerHTML=`
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
              <input type="text" id="player1-name" placeholder="请输入昵称" value="${a}"
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
              <input type="text" id="player1-name" placeholder="请输入昵称" value="${a}"
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
    `,document.getElementById("setup-import-file")?.addEventListener("change",async o=>{const d=o.target.files?.[0];if(!d)return;const p=document.querySelector('label[for="setup-import-file"]'),c=p?.textContent||"📂 导入卡包文件";p&&(p.textContent="⌛️ 导入中...");try{const{normalEntries:h,heroCards:f}=await this.importDeckFromZip(d);if(h.length===0&&f.length===0){alert("无效卡包：ZIP 中没有找到 PNG 卡牌文件");return}const u=h.reduce((x,v)=>x+v.count,0)+f.length,b=Re(this.state),m=this.mergeDeckEntries(b.cards,h);b.cards=m,f.length>0&&f.forEach(x=>{const v=b.cards.find(C=>C.card.id===x.id);v?v.count++:b.cards.push({card:x,count:1})}),this.state={...this.state,groups:[...this.state.groups]},this.state.sharedDeck=b.cards,this.saveDeck();const y=document.getElementById("setup-import-info");y&&(y.textContent=`✓ 已导入 ${u} 张卡牌`,y.classList.remove("hidden")),setTimeout(()=>{(this.state.phase==="setup"||this.state.phase==="robotSetup")&&this.renderSetup()},1500)}catch(h){console.error("导入卡包失败:",h),alert("导入失败："+(h instanceof Error?h.message:"未知错误"))}finally{p&&(p.textContent=c),o.target.value=""}});const i=document.getElementById("hero-select-modal"),n=document.getElementById("hero-select-list"),t=document.getElementById("hero-select-empty"),l=o=>{n.innerHTML="";let d=Gt(this.state);const p=o===1?this.player2SelectedHero:this.player1SelectedHero;if(p&&(d=d.filter(c=>c.id!==p.id)),d.length===0)t.classList.remove("hidden"),t.textContent=p?"对方已选择了该英雄，请选择其他英雄":"暂无英雄牌，请先在卡牌编辑中创建并加入卡包";else{if(t.classList.add("hidden"),t.textContent="暂无英雄牌，请先在卡牌编辑中创建并加入卡包",d.length>=2){const c=document.createElement("div");c.className="cursor-pointer rounded-xl p-2 transition-all transform hover:scale-105",c.style.cssText="background: #f5f0e8; border: 2px dashed #c4a882;",c.innerHTML=`
            <div class="w-full rounded-lg overflow-hidden mb-1 flex items-center justify-center" style="aspect-ratio: 4/3; background: #e8dfd0;">
              <span style="font-size: 2rem;">🎲</span>
            </div>
            <div class="text-xs font-bold text-center truncate" style="color: #5a4a3a;">随机</div>
          `,c.addEventListener("click",()=>{const h=o===1?this.player1SelectedHero:this.player2SelectedHero,f=h?d.filter(y=>y.id!==h.id):d,u=f[Math.floor(Math.random()*f.length)];o===1?this.player1SelectedHero=u:this.player2SelectedHero=u,i.classList.add("hidden");const b=o===1?"select-hero-p1-btn":"select-hero-p2-btn",m=document.getElementById(b);if(m){const y=m.textContent;m.textContent="✅ 已随机",m.style.background="linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)",this.render(),setTimeout(()=>{document.getElementById(b)&&(m.textContent=y,m.style.background="linear-gradient(135deg, #c4a882 0%, #b89a72 100%)")},1200)}else this.render()}),n.appendChild(c)}d.forEach(c=>{const h=document.createElement("div"),f=o===1?this.player1SelectedHero?.id===c.id:this.player2SelectedHero?.id===c.id;h.className=`cursor-pointer rounded-xl p-2 transition-all transform hover:scale-105 ${f?"ring-4":""}`,h.style.cssText=f?"ring-color: #4CAF50; background: rgba(76, 175, 80, 0.1);":"background: #f5f0e8;",h.innerHTML=`
            <div class="w-full rounded-lg overflow-hidden mb-1" style="aspect-ratio: 4/3;">
              ${c.imageData?`<img src="${c.imageData}" class="w-full h-full object-cover">`:'<div class="w-full h-full flex items-center justify-center" style="background: #e8dfd0;"><span style="font-size: 2rem;">🦸</span></div>'}
            </div>
            <div class="text-xs font-bold text-center truncate" style="color: #5a4a3a;">${c.name}</div>
          `,h.addEventListener("click",()=>{o===1?this.player1SelectedHero=c:this.player2SelectedHero=c,i.classList.add("hidden");const u=o===1?"select-hero-p1-btn":"select-hero-p2-btn",b=document.getElementById(u);if(b){const m=b.textContent;b.textContent="✅ 选择完成",b.style.background="linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)",this.render(),setTimeout(()=>{document.getElementById(u)&&(b.textContent=m,b.style.background="linear-gradient(135deg, #c4a882 0%, #b89a72 100%)")},1200)}else this.render()}),n.appendChild(h)})}i.classList.remove("hidden")};document.getElementById("select-hero-p1-btn")?.addEventListener("click",()=>l(1)),document.getElementById("select-hero-p2-btn")?.addEventListener("click",()=>l(2)),document.getElementById("close-hero-select-modal")?.addEventListener("click",()=>i.classList.add("hidden")),i.addEventListener("click",o=>{o.target===i&&i.classList.add("hidden")}),document.getElementById("back-btn")?.addEventListener("click",()=>{this.state=oe(this.state,{type:"BACK_TO_MENU"}),this.render()}),document.getElementById("confirm-btn")?.addEventListener("click",()=>{const o=document.getElementById("player1-name").value;localStorage.setItem("miaoKaBao_player1Name",o);const d=h=>{const f=this.state.groups;if(!f||f.length===0)return 0;const u=f[0].cards.filter(m=>m.card.type!=="hero").reduce((m,y)=>m+y.count,0);let b=0;if(h?.type==="hero"){const m=Je(this.state,h);m&&m.id!==Le&&(b=m.cards.filter(y=>y.card.type!=="hero").reduce((y,x)=>y+x.count,0))}return u+b},p=d(this.player1SelectedHero),c=s?this.state.groups[0].cards.filter(h=>h.card.type!=="hero").reduce((h,f)=>h+f.count,0):d(this.player2SelectedHero);if(p<12||c<12){alert(`卡组不足！
玩家1: ${p}张
玩家2: ${c}张
双方卡组（公用卡组+英雄个人卡组）至少需要12张才能开始对战！`);return}if(s)this.state=oe(this.state,{type:"START_ROBOT_BATTLE",playerName:o,playerHero:this.player1SelectedHero||void 0}),this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100);else{const h=document.getElementById("player2-name").value;localStorage.setItem("miaoKaBao_player2Name",h),this.state=oe(this.state,{type:"START_GAME",player1Name:o,player2Name:h,player1Hero:this.player1SelectedHero||void 0,player2Hero:this.player2SelectedHero||void 0}),this.render(),setTimeout(()=>this.playDrawCardAnimation(300),100)}})}renderHeroBackground(e){return e?.imageData?`background-image: url('${e.imageData}'); background-size: cover; background-position: center;`:"background: linear-gradient(135deg, #fff 0%, #f8f4ec 100%);"}renderHeroName(e){return e?.name?`<div class="text-xs mt-0.5" style="color: rgba(255,255,255,0.85); text-shadow: 0 0 6px rgba(0,0,0,0.6);">${e.name}</div>`:""}renderEnergy(e,s,a=0){const r=s-a;let i="#4a90d9";s===0?i="#888888":a>0&&s===a&&(i="#5a9a5a");const n=Math.max(e,s);return`<div class="flex gap-1 mt-1 items-center">
      <div class="font-bold text-xl mr-1" style="color: ${i}; text-shadow: 0 0 8px rgba(0,0,0,0.6), 0 0 16px rgba(0,0,0,0.3);">${s}</div>
      ${Array(n).fill(0).map((t,l)=>{const o=l<s,d=l>=r&&o;return`<div class="energy-crystal ${o?"":"empty"} ${d?"bonus":""}"></div>`}).join("")}
    </div>`}renderHeroSkills(e,s){const a=e.heroCard?.skills||[];if(a.length===0)return"";const i=this.state.players.find(l=>l.id===this.state.currentPlayerId)?.id===e.id,n=e.heroSkillUsed||[];return`<div class="flex flex-row-reverse items-center gap-2" style="position: absolute; right: calc(50% + 96px); top: 50%; transform: translateY(-50%);">${a.map((l,o)=>{const d=l.type==="passive",p=n[o]||!1,c=e.energy>=(l.cost??0),f=(l.remainingCooldown??0)>0,u=l.usesLeft??(l.limited?l.maxUses:void 0),b=l.limited&&u===0,m=d||p||!c||!i||f||b,y=p||f||b?"grayscale":"",x=this.selectingTargetForSkill!==null&&this.selectingTargetForSkill.skillIndex===o&&this.selectingTargetForSkill.playerId===e.id,v=x?"#a855f7":m?"#c4b49c":"#4ade80";return`
        <div class="hero-skill-icon-wrapper hero-skill-icon-btn relative group" data-skill-index="${o}" data-player-id="${e.id}" data-is-opponent="${s}">
          <div class="w-[72px] h-[72px] rounded-full border-4 overflow-hidden ${y} ${x?"animate-pulse":""}"
            style="border-color: ${v}; ${x?"box-shadow: 0 0 16px 4px rgba(168,85,247,0.7);":""} background: ${l.iconData?`url('${l.iconData}') center/cover no-repeat`:"url('/images/wood_texture_seamless.png') center/cover no-repeat"};">
          </div>
          ${d?`
          <div class="absolute flex items-center justify-center"
            style="right: -6px; bottom: -6px; width: 28px; height: 28px; background: url('/images/energy_gem_v2.png') center/cover no-repeat; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4));">
          </div>
          `:`
          <div class="absolute flex items-center justify-center font-bold text-white shadow-md"
            style="right: -6px; bottom: -6px; width: 28px; height: 28px; background: url('/images/energy_gem_v2.png') center/cover no-repeat; filter: drop-shadow(0 0 3px rgba(0,0,0,0.8)) drop-shadow(0 0 7px rgba(0,0,0,0.4));">
            <span style="font-size: 14px; color: #fff; text-shadow: 0 0 4px rgba(0,0,0,0.8);">${l.cost??0}</span>
          </div>
          `}
        </div>
      `}).join("")}</div>`}renderDefenseOverlay(e){const s=this.selectedAttackingMinion||this.attackingMinion;return!s||!(s.keywords.some(i=>i.name==="不动")||s.playedThisTurn&&s.keywords.some(i=>i.name==="冲锋")?!1:s.isDefending?!0:!(s.attack<=0||["连击","狂怒"].some(i=>s.keywords.some(n=>n.name===i))||s.hasAttacked&&!s.keywords.some(i=>i.name==="机动")))?"":`
      <div id="defense-overlay" class="absolute inset-0 flex items-center justify-center" style="background: rgba(0,0,0,0.55); border-radius: 8px; z-index: 20; cursor: pointer;">
        <span class="text-sm font-bold text-center px-2" style="color: #fff; text-shadow: 0 1px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.6); line-height: 1.3;">${s.isDefending?"选择以取消防御":"选择以进入防御"}</span>
      </div>
    `}updateDefenseOverlayDOM(e){const s=document.getElementById("defense-overlay");if(!s)return;if(!(e.keywords.some(r=>r.name==="不动")||e.playedThisTurn&&e.keywords.some(r=>r.name==="冲锋")?!1:e.isDefending?!0:!(e.attack<=0||["连击","狂怒"].some(r=>e.keywords.some(i=>i.name===r))||e.hasAttacked&&!e.keywords.some(r=>r.name==="机动")))){s.style.display="none";return}s.style.display="flex",s.querySelector("span").textContent=e.isDefending?"选择以取消防御":"选择以进入防御"}hideDefenseOverlayDOM(){const e=document.getElementById("defense-overlay");e&&(e.style.display="none")}syncSelectionToDOM(){if(document.querySelectorAll(".hand-card-wrapper.selected").forEach(e=>{e.classList.remove("selected"),e.querySelector(".hand-card-inner")?.classList.remove("selected")}),this.selectedHandCard){const e=document.querySelector(`.hand-card-wrapper[data-card-id="${this.selectedHandCard.id}"]`);e&&(e.classList.add("selected"),e.querySelector(".hand-card-inner")?.classList.add("selected"))}if(document.querySelectorAll(".bottom-board .minion-card.selected-attacker").forEach(e=>{e.classList.remove("selected-attacker"),parseInt(e.dataset.minionId);const s=e.dataset.baseBorder||"#c4b49c";this.selectingTargetForCard||this.selectingTargetForSkill?e.style.borderColor="#4a90d9":e.style.borderColor=s}),this.selectedAttackingMinion){const e=document.querySelector(`.bottom-board .minion-card[data-minion-id="${this.selectedAttackingMinion.id}"]`);e&&(e.classList.add("selected-attacker"),e.style.borderColor="#ff6b6b")}this.updatePlayAreaBorderDOM()}updatePlayAreaBorderDOM(){const e=document.getElementById("play-area");e&&(this.selectedHandCard?e.style.borderColor="#7cb87c":this.selectingTargetForCard?e.style.borderColor="#4a90d9":e.style.borderColor="#d4c4a8")}renderKeywords(e,s,a,r,i){if(e.length===0&&!i)return"";const n=e.filter(t=>!(t.name==="圣盾"&&a===!1));return n.length===0&&!i?"":`<div class="keywords-display">
      ${n.map(t=>{if(t.name==="护甲"){const l=t.value??s??1;return`<span class="keyword-tag">${t.name}${l}</span>`}return`<span class="keyword-tag">${t.name}</span>`}).join(" ")}
      ${i&&i>0?`<span class="keyword-tag">准备${i}</span>`:""}
    </div>`}renderKeywordsTooltip(e,s){if(e.length===0)return"";const a=e.filter(r=>!(r.name==="圣盾"&&s===!1));return a.length===0?"":`<div class="keywords-tooltip absolute left-1/2 -translate-x-1/2 top-full mt-2 p-3 rounded-lg shadow-2xl z-[99999] hidden group-hover:block pointer-events-none whitespace-nowrap" style="background: rgba(20, 15, 10, 0.97); min-width: 200px; border: 1px solid rgba(180, 150, 100, 0.4);">
      <div class="text-center text-xs mb-2 border-b pb-1" style="color: #c4a870; border-color: rgba(180, 150, 100, 0.3);">词条说明</div>
      ${a.map(r=>`
        <div class="text-sm mb-1 whitespace-normal">
          <span class="font-bold" style="color: #7cb9e8;">${r.name}</span>
          <span style="color: #e8e0d0;">: ${r.description}</span>
        </div>
      `).join("")}
    </div>`}getEffectIcons(e){if(!e||e.length===0)return"";const s=new Set;return e.forEach(a=>{a.effect!=="说话"&&a.moment&&s.add(a.moment)}),s.size===0?"":Array.from(s).map(a=>Te[a]||"").join("")}renderEffectsTooltip(e){if(!e||e.length===0)return"";const s=e.map(a=>{const r=this.getMomentsText(a.moment),i=this.mergeTargets(a.targets).join("、");let n="";if(a.effect==="造成伤害"){const t=a.elementType&&{fire:"🔥",ice:"❄️",lightning:"⚡️"}[a.elementType]||"";n=`对${i}造成 ${a.value} 点${t}伤害`}else if(a.effect==="给予印记")n=`给${i} ${a.value} 点印记`;else if(a.effect==="治愈")n=`为${i}恢复 ${a.value} 点生命`;else if(a.effect==="属性变化"){const t=a.isAttackPositive?`+${a.attackValue}`:`-${a.attackValue}`,l=a.isHealthPositive?`+${a.healthValue}`:`-${a.healthValue}`;n=`${i}获得 ${t}/${l}`}else if(a.effect==="抽牌")n=`抽 ${a.value} 张牌`;else if(a.effect==="获得能量")n=`获得 ${a.value} 点能量`;else if(a.effect==="失去能量")n=`失去 ${a.value} 点能量`;else if(a.effect==="召唤"){let t;a.summonSource&&a.summonSource!=="derived"?t=Me(a.summonSource,!!a.isRandom):t="衍生随从",n=`召唤 ${a.value||1} 张${t}`}else if(a.effect==="获得"){let t;a.summonSource&&a.summonSource!=="derived"?t=Me(a.summonSource,!!a.isRandom):t="衍生牌",n=`获得 ${a.value||1} 张${t}`}return n?`${r}${n}`:""}).filter(a=>a!=="");return s.length===0?"":`<div class="effects-tooltip absolute left-1/2 -translate-x-1/2 bottom-full mb-2 p-3 rounded-lg shadow-2xl z-[100000] hidden pointer-events-none whitespace-nowrap" style="background: rgba(20, 15, 10, 0.97); min-width: 200px; border: 1px solid rgba(180, 150, 100, 0.4);">
      <div class="text-center text-xs mb-2 border-b pb-1" style="color: #c4a870; border-color: rgba(180, 150, 100, 0.3);">技能说明</div>
      ${s.map(a=>`
        <div class="text-sm mb-1 whitespace-normal" style="color: #f0e6d2;">${a}</div>
      `).join("")}
    </div>`}renderGameLogs(){const e=this.state.gameLogs||[];return e.length===0?'<div class="px-2 py-1 text-center" style="color: #8b7355;">暂无记录</div>':e.slice(-5).reverse().map(a=>{let r="#5a4a3a",i="";switch(a.type){case"turn_start":r="#4a90d9",i="🌅";break;case"turn_end":r="#8b7355",i="🌙";break;case"draw_card":r="#5a9a5a",i="🃏";break;case"play_card":r="#9b59b6",i="📤";break;case"attack":r="#e07070",i="⚔️";break;case"damage":r="#c05050",i="💥";break;case"minion_skill":r="#f5a623",i="✨";break}return`<div class="px-2 py-0.5 border-b" style="border-color: #e8dcc8; color: ${r};">${i} ${a.message}</div>`}).join("")}getCardBgStyle(e,s="url('/images/wood_texture_seamless.png')"){return e.imageData?`background-image: url(${e.imageData}); background-size: cover; background-position: center; background-repeat: no-repeat;`:`background-image: ${s}; background-size: cover;`}getCardBgInline(e,s="rgba(255, 255, 255, 0.95)"){return e.imageData?`background-image: url(${e.imageData}); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: #f8f4ec;`:`background: ${s};`}sanitizeFileName(e){return e.replace(/[\\/:*?"<>|]/g,"_").replace(/\s+/g,"_").substring(0,100)}async exportCardToPNGBlob(e){const s=y=>{const x={...y};return y.targets&&(x.targets=[...y.targets]),y.isOpponent!==void 0&&(x.isOpponent=y.isOpponent),x},r=(e.effects||[]).filter(y=>y.effect),i={name:e.name||"未命名",type:e.type,cost:e.cost,attack:e.attack,health:e.health,keywords:(e.keywords||[]).map(y=>y.name),armorValue:e.armorValue,effects:r.length>0?r.map(s):void 0,effect:r.length>0?s(r[0]):void 0,spellEffect:e.spellEffect?s(e.spellEffect):void 0,effectDescription:e.effectDescription||void 0,derivedCards:e.derivedCards,version:3};let n;const t=document.createElement("canvas");t.width=200,t.height=300;const l=t.getContext("2d");if(e.imageData){const y=new Image;await new Promise((x,v)=>{y.onload=x,y.onerror=v,y.src=e.imageData}),l.drawImage(y,0,0,200,300)}else l.fillStyle="#f8f4ec",l.fillRect(0,0,200,300);const o=t.toDataURL("image/png"),c=await(await(await fetch(o)).blob()).arrayBuffer();n=new Uint8Array(c);const h=We(n),f=JSON.stringify(i),u=btoa(unescape(encodeURIComponent(f))),b=ze.encode("CardData",u);h.splice(1,0,b);const m=ft(h);return new Blob([m],{type:"image/png"})}async exportHeroToPNGBlob(e){const s=e?.name||this.heroName||"未命名英雄",a=e?.imageData||this.heroImageData,r=e?.derivedCards?e.derivedCards.map(v=>({name:v.name,type:v.type,cost:v.cost,attack:v.attack,health:v.health,imageData:v.imageData,keywords:v.keywords,effects:v.effects})):this.heroDerivedCards.map(v=>({name:v.name,type:v.type,cost:v.cost,attack:v.attack,health:v.health,imageData:v.imageData,keywords:v.keywords,effects:v.effects})),i=e?.skills&&e.skills.length>0?e.skills.map(v=>({name:v.name,type:v.type,cost:v.cost,cooldown:v.cooldown,limited:v.limited,maxUses:v.maxUses,iconData:v.iconData,description:v.description,effects:v.effects||(v.effect?[v.effect]:null)})):this.heroSkills.map(v=>({name:v.name,type:v.type,cost:v.cost,cooldown:v.cooldown,limited:v.limited,maxUses:v.maxUses,iconData:v.iconData,description:v.description,effects:v.effects||(v.effect?[v.effect]:null)})),n=e?.heroSpeech?{...e.heroSpeech}:{...this.heroSpeech},t={name:s,type:"hero",version:1,derivedCards:r,skills:i,heroSpeech:n},l=document.createElement("canvas");l.width=400,l.height=300;const o=l.getContext("2d");if(a){const v=new Image;await new Promise((C,g)=>{v.onload=C,v.onerror=g,v.src=a}),o.drawImage(v,0,0,400,300)}else o.fillStyle="#f8f4ec",o.fillRect(0,0,400,300);const d=l.toDataURL("image/png"),h=await(await(await fetch(d)).blob()).arrayBuffer(),f=new Uint8Array(h),u=We(f),b=JSON.stringify(t),m=btoa(unescape(encodeURIComponent(b))),y=ze.encode("HeroCardData",m);u.splice(1,0,y);const x=ft(u);return new Blob([x],{type:"image/png"})}async importHeroFromPNGFile(e){try{const s=await e.arrayBuffer(),a=new Uint8Array(s),r=We(a);let i=null;for(const p of r)if(p.name==="tEXt")try{const c=ze.decode(p);if(c.keyword==="HeroCardData"){i=c.text;break}}catch{}if(!i)return null;let n;try{n=decodeURIComponent(escape(atob(i)))}catch{n=i}const t=JSON.parse(n);if(!t.name&&t.name!=="")return null;t.derivedCards&&Array.isArray(t.derivedCards)?this.heroDerivedCards=t.derivedCards.map(p=>({name:p.name||"",type:p.type||"minion",cost:p.cost??1,attack:p.attack??1,health:p.health??1,armorValue:p.armorValue??0,imageData:p.imageData||null,keywords:p.keywords||[],effects:p.effects||[]})):this.heroDerivedCards=[],this.heroEditingDerivedIndex=null,t.skills&&Array.isArray(t.skills)?this.heroSkills=t.skills.map(p=>{const c=f=>({moment:f.moment||"打出时",targets:f.targets||[],effect:f.effect||"无效果",value:f.value??0,isOpponent:f.isOpponent||!1,attackValue:f.attackValue??0,healthValue:f.healthValue??0,isAttackPositive:f.isAttackPositive??!0,isHealthPositive:f.isHealthPositive??!0,variableChange:f.variableChange||void 0,isRandom:f.isRandom||!1,isRandomTarget:f.isRandomTarget||!1,triggerNumbers:f.triggerNumbers||void 0,summonedCardIndex:f.summonedCardIndex??void 0,summonedCardIndices:f.summonedCardIndices??void 0}),h=p.effects&&Array.isArray(p.effects)?p.effects.map(c):p.effect?[c(p.effect)]:[];return{id:Date.now()+Math.floor(Math.random()*1e3),name:p.name||"技能",type:p.type||"active",cost:p.cost??1,cooldown:p.cooldown??0,limited:p.limited||!1,maxUses:p.maxUses??1,iconData:p.iconData||null,description:p.description||"",effects:h}}):this.heroSkills=[],this.heroEditingSkillIndex=null;const l=URL.createObjectURL(e),o=new Image;await new Promise((p,c)=>{o.onload=p,o.onerror=c,o.src=l});const d=await this.compressImageData(l,400,300);return URL.revokeObjectURL(l),{heroData:t,imageData:d}}catch{return null}}async importCardFromPNGFile(e){try{const s=await e.arrayBuffer(),a=new Uint8Array(s),r=We(a);let i=null;const n=[];for(const c of r)if(c.name==="tEXt")try{const h=ze.decode(c);h.keyword==="CardData"?i=h.text:/^CardData_\d+$/.test(h.keyword)&&n.push(h.text)}catch{}if(!i)return null;let t;try{t=decodeURIComponent(escape(atob(i)))}catch{t=i}const l=JSON.parse(t);if(!l.name&&l.name!=="")return null;n.length>0?l.derivedCards=n.map(c=>{let h;try{h=decodeURIComponent(escape(atob(c)))}catch{h=c}return JSON.parse(h)}):l.derivedCards=l.derivedCards||[];const o=URL.createObjectURL(e),d=new Image;await new Promise((c,h)=>{d.onload=c,d.onerror=h,d.src=o});const p=await this.compressImageData(o);return URL.revokeObjectURL(o),{cardData:l,imageData:p}}catch{return null}}async importDeckFromZip(e){const s=await this.parseGroupsFromZipBlob(e),a=[];for(const r of s.groups)for(const i of r.cards){const n=a.find(t=>t.card.name===i.card.name);n?n.count+=i.count:a.push({card:i.card,count:i.count})}return{normalEntries:a,heroCards:s.heroCards}}async parseGroupsFromZipBlob(e){const s=await Ht.loadAsync(e),a=Object.keys(s.files),r=a.some(p=>p.includes("/")&&!p.startsWith("manifest.txt")),i=[];if(r){const p=new Set;for(const f of a)if(f.includes("/")){const u=f.split("/")[0];p.add(u)}else f.startsWith("manifest.txt")||p.add("");const c=s.file("manifest.txt");let h=null;c&&(h=await c.async("text")),i.push({name:"",cards:[],manifest:h});for(const f of p){if(f==="")continue;const u=s.file(`${f}/manifest.txt`);let b=null;u&&(b=await u.async("text"));let m=f;if(b){const y=b.match(/子卡组[：:]\s*(.+)/);y&&(m=y[1].trim())}i.push({name:m,cards:[],manifest:b})}}else{const p=s.file("manifest.txt");let c=null;p&&(c=await p.async("text")),i.push({name:"",cards:[],manifest:c})}const n=i.map(p=>{const c=new Map,h=new Map;if(p.manifest){const f=p.manifest.split(`
`);for(const u of f){const b=u.trim();if(b.startsWith("#")||b===""||b.startsWith("##"))continue;let m,y;const x=b.match(/^\[英雄\]\s*(.+?)\s*x\s*(\d+)$/),v=b.match(/^(.+?)\s*x\s*(\d+)$/);x?(m=x[1].trim(),y=parseInt(x[2]),h.set(m,y)):v&&(m=v[1].trim(),y=parseInt(v[2]),c.set(m,y))}}for(const[f,u]of h)c.set(f,u);return c}),t=p=>{const c={...p};return p.targets&&(c.targets=[...p.targets]),c},l=[],o=Object.values(s.files).filter(p=>p.name.toLowerCase().endsWith(".png"));for(const p of o){const c=p.name;let h=0;if(r&&c.includes("/")){const f=c.split("/")[0],u=i.findIndex((b,m)=>m>0&&b.name!==""&&(c.startsWith(b.name+"/")||f===b.name));u>0&&(h=u)}try{const f=await p.async("blob"),u=new File([f],c,{type:"image/png"}),b=await this.importCardFromPNGFile(u);if(b){const{cardData:y,imageData:x}=b,v=y.effects||(y.effect?[y.effect]:[]),C={id:Ee(),name:y.name||"",type:y.type||"minion",cost:y.cost??1,attack:y.attack??1,health:y.health??1,maxHealth:y.health??1,keywords:(y.keywords||[]).map(k=>k==="风怒"?"__WINDURY__":k).map(k=>k==="__WINDURY__"?"连击":k).map(k=>Object.values($e).find(P=>P.name===k)||{name:k,description:"",hasValue:!1}),armorValue:y.armorValue??1,effects:v.map(t),effect:v.length>0?t(v[0]):void 0,effectDescription:y.effectDescription||"",derivedCards:y.derivedCards,imageData:x},g=n[h].get(y.name)||1;i[h].cards.push({card:C,count:g});continue}const m=await this.importHeroFromPNGFile(u);if(m){const{heroData:y,imageData:x}=m,v={id:Ee(),name:y.name||"",type:"hero",cost:0,attack:0,health:0,maxHealth:0,keywords:[],imageData:x,skills:y.skills||[],derivedCards:y.derivedCards||[],heroSpeech:y.heroSpeech},C=n[h].get(y.name)||1;i[h].cards.push({card:v,count:C}),l.push(v)}}catch{}}const d=[];d.push({name:"",cards:i[0].cards});for(let p=1;p<i.length;p++)i[p].cards.length>0&&d.push({name:i[p].name,cards:i[p].cards});return{groups:d,heroCards:l}}async exportDeckToZip(e){try{const s=document.getElementById("export-zip-btn");s&&(s.textContent="⏳ 打包中...",s.disabled=!0);const a=document.getElementById("import-result");a&&(a.classList.remove("hidden"),a.textContent="正在打包，请稍候...");const r=new Ht,i=this.state.groups;let n=0;const t=i[0],l=["# 妙卡包 - 公用卡组"];l.push(`# 导出时间: ${new Date().toLocaleString()}`),l.push(`# 卡牌种类: ${t.cards.length}`),l.push("# 格式：卡牌名称 x 数量"),l.push("");for(const c of t.cards){const h=c.card,f=c.count,u=this.sanitizeFileName(h.name||"未命名"),b=h.type==="hero"?await this.exportHeroToPNGBlob(h):await this.exportCardToPNGBlob(h);r.file(`${u}.png`,b);const m=h.type==="hero"?"[英雄] ":"";l.push(`${m}${h.name} x ${f}`),n++}r.file("manifest.txt",l.join(`
`));for(let c=1;c<i.length;c++){const h=i[c];if(h.cards.length===0)continue;const f=this.sanitizeFileName(h.name||"未命名卡组"),u=[`# 妙卡包 - 子卡组：${h.name}`];u.push(`# 导出时间: ${new Date().toLocaleString()}`),u.push(`# 卡牌种类: ${h.cards.length}`),u.push("# 格式：卡牌名称 x 数量"),u.push("");for(const b of h.cards){const m=b.card,y=b.count,x=this.sanitizeFileName(m.name||"未命名"),v=m.type==="hero"?await this.exportHeroToPNGBlob(m):await this.exportCardToPNGBlob(m);r.file(`${f}/${x}.png`,v);const C=m.type==="hero"?"[英雄] ":"";u.push(`${C}${m.name} x ${y}`),n++}r.file(`${f}/manifest.txt`,u.join(`
`))}const o=await r.generateAsync({type:"blob"}),p=`妙卡包_卡包_${new Date().toISOString().slice(0,19).replace(/[T:]/g,"-")}.zip`;if(this.deckFolderHandle){const h=await(await this.deckFolderHandle.getFileHandle(p,{create:!0})).createWritable();await h.write(o),await h.close(),console.log(`ZIP 已导出到文件夹: ${p}`)}else{const c=URL.createObjectURL(o),h=document.createElement("a");h.href=c,h.download=p,document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(c)}s&&(s.textContent="📦 导出卡包(ZIP)",s.disabled=!1),a&&(a.textContent=`✓ 导出成功！共 ${n} 种卡牌（${i.length} 个分组）`,setTimeout(()=>a.classList.add("hidden"),3e3))}catch(s){const a=document.getElementById("export-zip-btn");a&&(a.textContent="📦 导出卡包(ZIP)",a.disabled=!1);const r=document.getElementById("import-result");r&&(r.textContent="✗ 导出失败："+s.message),alert("导出卡包失败："+s.message)}}async generateAtmosphereCard(e){return new Promise((s,a)=>{const r=new Image;r.onload=()=>{try{const i=document.createElement("canvas");i.width=r.naturalWidth,i.height=r.naturalHeight;const n=i.getContext("2d");if(!n){a(new Error("canvas context null"));return}n.drawImage(r,0,0);const t=n.getImageData(0,0,r.naturalWidth,r.naturalHeight).data,l=24,o=new Map,d=r.naturalWidth,p=r.naturalHeight;for(let M=0;M<p;M+=2)for(let R=0;R<d;R+=2){const $=(M*d+R)*4,L=t[$],T=t[$+1],H=t[$+2];if(t[$+3]<128||L<15&&T<15&&H<15||L>240&&T>240&&H>240)continue;const j=Math.floor(L/l)*l,ee=Math.floor(T/l)*l,Y=Math.floor(H/l)*l,ie=`${j},${ee},${Y}`,U=Math.max(L,T,H),W=Math.min(L,T,H),he=U===0?0:(U-W)/U,de=o.get(ie);de?(de.r+=L,de.g+=T,de.b+=H,de.count++,de.sat+=he):o.set(ie,{r:L,g:T,b:H,count:1,sat:he})}if(o.size===0){s(this.drawAtmosphereCard(r,"#2a2a3a","#7a5a3a","#3a5a7a"));return}const c=Array.from(o.entries()).map(([M,R])=>({r:Math.round(R.r/R.count),g:Math.round(R.g/R.count),b:Math.round(R.b/R.count),sat:R.sat/R.count,count:R.count})),h=Math.floor(p*.15),f=Math.floor(d*.15),u=new Map;for(let M=0;M<p;M+=2)for(let R=0;R<d;R+=2){if(!(M<h||M>=p-h||R<f||R>=d-f))continue;const L=(M*d+R)*4,T=t[L],H=t[L+1],Z=t[L+2];if(t[L+3]<128)continue;const ee=Math.floor(T/l)*l,Y=Math.floor(H/l)*l,ie=Math.floor(Z/l)*l,U=`${ee},${Y},${ie}`;u.set(U,(u.get(U)||0)+1)}c.sort((M,R)=>R.count-M.count);let b=c[0];const m=Array.from(u.entries()).sort((M,R)=>R[1]-M[1]);if(m.length>0){const M=m[0][0],R=c.find($=>{const L=Math.floor($.r/l)*l,T=Math.floor($.g/l)*l,H=Math.floor($.b/l)*l;return`${L},${T},${H}`===M});R&&(b=R)}const y=[...c].sort((M,R)=>R.sat-M.sat),x=y[0].sat,v=y.length>1?y[1].sat:0,C=x>v*1.5&&x>.3,g=(M,R)=>Math.sqrt((M.r-R.r)**2+(M.g-R.g)**2+(M.b-R.b)**2);let k=c.find(M=>g(M,b)>60)||c[1]||b;C&&y[0]!==b&&(k=y[0]);let w=c.find(M=>M!==b&&M!==k&&g(M,b)>60&&g(M,k)>40)||c[2]||k;const P=M=>`#${M.r.toString(16).padStart(2,"0")}${M.g.toString(16).padStart(2,"0")}${M.b.toString(16).padStart(2,"0")}`;s(this.drawAtmosphereCard(r,P(b),P(k),P(w)))}catch(i){a(i)}},r.onerror=a,r.src=e})}drawAtmosphereCard(e,s,a,r){const i=document.createElement("canvas");i.width=800,i.height=1200;const n=i.getContext("2d");if(!n)return"";n.imageSmoothingEnabled=!1,n.fillStyle=s,n.fillRect(0,0,800,1200);let t=n.createRadialGradient(960,-100,0,960,-100,800);t.addColorStop(0,a+"ff"),t.addColorStop(.3,a+"dd"),t.addColorStop(.6,a+"77"),t.addColorStop(1,"transparent"),n.fillStyle=t,n.fillRect(0,0,800,1200),t=n.createRadialGradient(-100,1100,0,-100,1100,700),t.addColorStop(0,r+"ff"),t.addColorStop(.35,r+"cc"),t.addColorStop(.65,r+"66"),t.addColorStop(1,"transparent"),n.fillStyle=t,n.fillRect(0,0,800,1200),t=n.createRadialGradient(400,200,0,400,200,450),t.addColorStop(0,a+"dd"),t.addColorStop(.5,a+"88"),t.addColorStop(1,"transparent"),n.fillStyle=t,n.fillRect(0,0,800,1200),t=n.createRadialGradient(400,600,0,400,600,550),t.addColorStop(0,s+"cc"),t.addColorStop(.5,s+"66"),t.addColorStop(1,"transparent"),n.fillStyle=t,n.fillRect(0,0,800,1200);const l=800*.78,o=(800-l)/2,d=1200*.18,p=30,c=.85,h=p*4,f=document.createElement("canvas");f.width=l+h*2,f.height=l+h*2;const u=f.getContext("2d");if(u){u.imageSmoothingEnabled=!1;const C=Math.max(l/e.naturalWidth,l/e.naturalHeight),g=e.naturalWidth*C,k=e.naturalHeight*C;u.drawImage(e,(l-g)/2+h,(l-k)/2+h,g,k),u.globalCompositeOperation="source-in",u.fillStyle="#000000",u.fillRect(0,0,f.width,f.height),u.globalCompositeOperation="source-over",n.save(),n.beginPath(),n.rect(o-h,d-h,l+h*2,l+h*2),n.clip(),n.filter=`blur(${p}px)`,n.globalAlpha=c,n.drawImage(f,o-h,d-h),n.restore()}n.save(),n.beginPath();const b=40;n.moveTo(o+b,d),n.lineTo(o+l-b,d),n.quadraticCurveTo(o+l,d,o+l,d+b),n.lineTo(o+l,d+l-b),n.quadraticCurveTo(o+l,d+l,o+l-b,d+l),n.lineTo(o+b,d+l),n.quadraticCurveTo(o,d+l,o,d+l-b),n.lineTo(o,d+b),n.quadraticCurveTo(o,d,o+b,d),n.closePath(),n.clip();const m=Math.max(l/e.naturalWidth,l/e.naturalHeight),y=e.naturalWidth*m,x=e.naturalHeight*m;n.drawImage(e,o+(l-y)/2,d+(l-x)/2,y,x),n.restore();const v=n.createLinearGradient(0,920,0,1200);return v.addColorStop(0,"rgba(0,0,0,0)"),v.addColorStop(.4,"rgba(0,0,0,0.4)"),v.addColorStop(1,"rgba(0,0,0,0.85)"),n.fillStyle=v,n.fillRect(0,920,800,280),i.toDataURL("image/png")}async generateAtmosphereBackground(e){return new Promise((s,a)=>{const r=new Image;r.onload=()=>{try{const i=document.createElement("canvas");i.width=r.naturalWidth,i.height=r.naturalHeight;const n=i.getContext("2d");if(!n){a(new Error("canvas context null"));return}n.drawImage(r,0,0);const t=n.getImageData(0,0,r.naturalWidth,r.naturalHeight).data,l=24,o=new Map,d=r.naturalWidth,p=r.naturalHeight;for(let H=0;H<p;H+=2)for(let Z=0;Z<d;Z+=2){const j=(H*d+Z)*4,ee=t[j],Y=t[j+1],ie=t[j+2];if(t[j+3]<128||ee<15&&Y<15&&ie<15||ee>240&&Y>240&&ie>240)continue;const W=Math.floor(ee/l)*l,he=Math.floor(Y/l)*l,de=Math.floor(ie/l)*l,I=`${W},${he},${de}`,A=Math.max(ee,Y,ie),B=Math.min(ee,Y,ie),q=A===0?0:(A-B)/A,O=o.get(I);O?(O.r+=ee,O.g+=Y,O.b+=ie,O.count++,O.sat+=q):o.set(I,{r:ee,g:Y,b:ie,count:1,sat:q})}if(o.size===0){s({bgDataUrl:"",colors:{dominant:"#2a2a3a",secondary:"#7a5a3a",tertiary:"#3a5a7a"}});return}const c=Array.from(o.entries()).map(([H,Z])=>({r:Math.round(Z.r/Z.count),g:Math.round(Z.g/Z.count),b:Math.round(Z.b/Z.count),sat:Z.sat/Z.count,count:Z.count}));c.sort((H,Z)=>Z.count-H.count);const h=Math.floor(p*.15),f=Math.floor(d*.15),u=new Map;for(let H=0;H<p;H+=2)for(let Z=0;Z<d;Z+=2){if(!(H<h||H>=p-h||Z<f||Z>=d-f))continue;const ee=(H*d+Z)*4,Y=t[ee],ie=t[ee+1],U=t[ee+2];if(t[ee+3]<128)continue;const he=Math.floor(Y/l)*l,de=Math.floor(ie/l)*l,I=Math.floor(U/l)*l,A=`${he},${de},${I}`;u.set(A,(u.get(A)||0)+1)}let b=c[0];const m=Array.from(u.entries()).sort((H,Z)=>Z[1]-H[1]);if(m.length>0){const H=m[0][0],Z=c.find(j=>{const ee=Math.floor(j.r/l)*l,Y=Math.floor(j.g/l)*l,ie=Math.floor(j.b/l)*l;return`${ee},${Y},${ie}`===H});Z&&(b=Z)}const y=[...c].sort((H,Z)=>Z.sat-H.sat),x=y[0].sat,v=y.length>1?y[1].sat:0,C=x>v*1.5&&x>.3,g=(H,Z)=>Math.sqrt((H.r-Z.r)**2+(H.g-Z.g)**2+(H.b-Z.b)**2);let k=c.find(H=>g(H,b)>60)||c[1]||b;C&&y[0]!==b&&(k=y[0]);let w=c.find(H=>H!==b&&H!==k&&g(H,b)>60&&g(H,k)>40)||c[2]||k;const P=H=>`#${H.r.toString(16).padStart(2,"0")}${H.g.toString(16).padStart(2,"0")}${H.b.toString(16).padStart(2,"0")}`,M={dominant:P(b),secondary:P(k),tertiary:P(w)},R=document.createElement("canvas");R.width=800,R.height=1200;const $=R.getContext("2d");if(!$){a(new Error("bg canvas context null"));return}$.fillStyle=M.dominant,$.fillRect(0,0,800,1200);let L=$.createRadialGradient(960,-100,0,960,-100,800);L.addColorStop(0,M.secondary+"ff"),L.addColorStop(.3,M.secondary+"dd"),L.addColorStop(.6,M.secondary+"77"),L.addColorStop(1,"transparent"),$.fillStyle=L,$.fillRect(0,0,800,1200),L=$.createRadialGradient(-100,1100,0,-100,1100,700),L.addColorStop(0,M.tertiary+"ff"),L.addColorStop(.35,M.tertiary+"cc"),L.addColorStop(.65,M.tertiary+"66"),L.addColorStop(1,"transparent"),$.fillStyle=L,$.fillRect(0,0,800,1200),L=$.createRadialGradient(400,200,0,400,200,450),L.addColorStop(0,M.secondary+"dd"),L.addColorStop(.5,M.secondary+"88"),L.addColorStop(1,"transparent"),$.fillStyle=L,$.fillRect(0,0,800,1200),L=$.createRadialGradient(400,600,0,400,600,550),L.addColorStop(0,M.dominant+"cc"),L.addColorStop(.5,M.dominant+"66"),L.addColorStop(1,"transparent"),$.fillStyle=L,$.fillRect(0,0,800,1200);const T=$.createLinearGradient(0,920,0,1200);T.addColorStop(0,"rgba(0,0,0,0)"),T.addColorStop(.4,"rgba(0,0,0,0.4)"),T.addColorStop(1,"rgba(0,0,0,0.85)"),$.fillStyle=T,$.fillRect(0,920,800,280),s({bgDataUrl:R.toDataURL("image/png"),colors:M})}catch(i){a(i)}},r.onerror=()=>a(new Error("图片加载失败")),r.src=e})}async compressImageData(e,s=200,a=300){return new Promise((r,i)=>{const n=new Image;n.onload=()=>{const t=document.createElement("canvas");t.width=s,t.height=a;const l=t.getContext("2d");if(!l){r(e);return}l.imageSmoothingEnabled=!1,l.drawImage(n,0,0,s,a),r(t.toDataURL("image/png"))},n.onerror=()=>r(e),n.src=e})}async expandEntriesForOnline(e){const s=new Set,a=new Map,r=[];for(const i of e){const n=xe(i.card),t=s.has(n);t||s.add(n);let l="";!t&&i.card.imageData&&(a.has(n)?l=a.get(n):(l=await this.compressImageData(i.card.imageData),a.set(n,l)));for(let o=0;o<i.count;o++)r.push({...i.card,id:Ee(),imageData:t?"":l})}return r}renderHand(e,s,a=!1){if(e.length===0)return"";const r=e.length,i=a?Math.min(r*5,40):Math.min(r*8,60),n=-i/2,t=r>1?i/(r-1):0;return e.map((l,o)=>{const d=r===1?0:n+o*t,p=s>=l.cost,c=l.type==="spell",h=this.selectedHandCard?.id===l.id,f=this.state.newlyDrawnCardIds.includes(l.id);return`
        <div class="hand-card-wrapper ${h?"selected":""} ${f?"newly-drawn":""} ${a?"portrait-mode":""}" 
             data-index="${o}"
             data-card-id="${l.id}"
             style="--rotate: ${d}deg; z-index: ${o+10};">
          <div class="hand-card-inner ${p?"can-play":""} ${c?"spell-card":""} ${h?"selected":""} ${a?"portrait-mode":""}"
               style="${p?c?"border: 2px solid #9c27b0;":"border: 2px solid #4caf50;":"border: 2px solid #9e9e9e;"} ${this.getCardBgStyle(l)}">
            <div class="card-top-row">
              <div class="card-cost-diamond">
                <span>${l.cost}</span>
              </div>
              <div class="card-name">${l.name}</div>
            </div>
            ${l.keywords.length>0?this.renderKeywords(l.keywords,l.armorValue):""}
            ${(()=>{const u=this.getCardFullEffectText(l);return u?`<div class="card-effect-text">${u}</div>`:""})()}
            ${c?`
              <div class="card-bottom-row" style="justify-content: center; align-items: center; height: 24px;">
                <!-- 法术牌不显示攻防数值 -->
              </div>
            `:`
              <div class="card-bottom-row">
                <div class="stat-attack">${l.attack}</div>
                <div class="stat-health">${l.health}</div>
              </div>
            `}
          </div>
        </div>
      `}).join("")}renderMulliganOverlay(){const{mulliganCards:e,mulliganSelected:s,p2MulliganCards:a,p2MulliganSelected:r,currentPlayerId:i,mulliganFirstPlayer:n,turnNumber:t,online:l,mulliganDone:o}=this.state;console.log("[DEBUG] renderMulliganOverlay",{currentPlayerId:i,turnNumber:t,mulliganFirstPlayer:n,mulliganCardsCount:e.length,p2MulliganCardsCount:a.length,mulliganSelected:s,p2MulliganSelected:r,mulliganDone:o,onlinePlayerId:l?.playerId,onlineFirstPlayerId:l?.firstPlayerId});const d=l?.playerId&&l?.firstPlayerId;if(d){const g=l.playerId===l.firstPlayerId;if(!(g&&o<1||!g&&o<2)){console.log("[renderMulliganOverlay] 非自己的换牌回合，跳过渲染");return}}const p=d?l.playerId===l.firstPlayerId:i===1,c=!p,h=p?e:a,f=p?s:r,b=c?"后手":"先手",m=f.length,y=g=>{const k=g.type==="spell",w=this.getCardFullEffectText(g);return`
        <div class="mulligan-card-inner" style="${this.getCardBgStyle(g)}">
          <div class="card-top-row">
            <div class="card-cost-diamond"><span>${g.cost}</span></div>
            <div class="card-name">${g.name}</div>
          </div>
          ${g.keywords.length>0?this.renderKeywords(g.keywords):""}
          ${w?`<div class="card-effect-text">${w}</div>`:""}
          ${k?`
            <div class="card-bottom-row" style="justify-content: center; align-items: center; height: 24px;">
              <!-- 法术牌不显示攻防数值 -->
            </div>
          `:`
            <div class="card-bottom-row">
              <div class="stat-row">
                <div class="stat-attack">${g.attack}</div>
                <div class="stat-health">${g.health}</div>
              </div>
            </div>
          `}
        </div>
      `},x=h.map(g=>{const k=f.includes(g.id),w=y(g);return`
        <div class="mulligan-card-wrapper relative cursor-pointer hover:scale-105 transition-transform" data-card-id="${g.id}">
          ${w}
          ${k?`
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="w-full h-full absolute bg-red-500/50 rounded-xl"></div>
              <div class="text-9xl text-red-600 font-bold rotate-12 select-none pointer-events-none" style="text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;">✕</div>
            </div>
          `:""}
        </div>
      `}).join(""),v=document.createElement("div");v.id="mulligan-overlay",v.className="fixed inset-0 z-50 flex flex-col items-center justify-center",v.style.background="rgba(0, 0, 0, 0.75)",v.innerHTML=`
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold text-white mb-2">${b}玩家 · 换牌阶段</h2>
        <p class="text-gray-300">点击卡牌标记弃换，确认后将重新抽取 ${m>0?m+" 张":"相同数量"}</p>
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
    `;const C=document.getElementById("mulligan-overlay");C&&C.remove(),document.body.appendChild(v),v.querySelectorAll(".mulligan-card-wrapper").forEach(g=>{const k=parseInt(g.getAttribute("data-card-id")||"0");g.addEventListener("click",()=>{const w=c?"TOGGLE_P2_MULLIGAN_CARD":"TOGGLE_MULLIGAN_CARD";this.state=oe(this.state,{type:w,cardId:k});const P=c?this.state.p2MulliganSelected:this.state.mulliganSelected,M=P.includes(k),R=g.querySelector(".mulligan-selected-overlay");if(M&&!R){const L=document.createElement("div");L.className="mulligan-selected-overlay absolute inset-0 flex items-center justify-center pointer-events-none",L.innerHTML='<div class="w-full h-full absolute bg-red-500/50 rounded-xl"></div><div class="text-9xl text-red-600 font-bold rotate-12 select-none pointer-events-none" style="text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;">✕</div>',g.appendChild(L)}else!M&&R&&R.remove();const $=document.getElementById("mulligan-confirm-btn");if($){const L=P.length;$.textContent=L>0?`确认（已选 ${L} 张）`:"确认"}})}),v.querySelector("#mulligan-confirm-btn")?.addEventListener("click",async()=>{const g=this.state.online;if(g?.currentRoom){if(g.playerId===g.firstPlayerId){const M=this.state.mulliganSelected,R=document.getElementById("mulligan-overlay");if(R&&R.remove(),this.state=oe(this.state,{type:"CONFIRM_MULLIGAN"}),this._p2MulliganConfirmed){console.log("P1 确认换牌，P2 已提前换牌，直接进入游戏"),this._p2MulliganConfirmed=!1,this.state={...this.state,phase:"onlineBattle",mulliganDone:2};{const $=this.state.online.playerId==="1"?2:1;this.state=oe({...this.state,currentPlayerId:$},{type:"START_MY_TURN"})}this.lastGameStateTimestamp=Date.now(),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100),await this.broadcastGameState()}else{this.render(),setTimeout(()=>this.playDrawCardAnimation(),100),await this.broadcastGameState();try{const $=g.currentRoom?.id;if(!$){console.error("MULLIGAN_CONFIRM(P1->P2): currentRoom is null");return}const{sendMessage:L}=await ge(async()=>{const{sendMessage:H}=await import("./online-fGHm1H1u.js");return{sendMessage:H}},__vite__mapDeps([0,1]));await L($,g.playerId,"__SYSTEM__",`__MULLIGAN_CONFIRM__|${JSON.stringify(M)}`)?console.log("MULLIGAN_CONFIRM(P1) 已发送给后手"):console.warn("MULLIGAN_CONFIRM(P1) 发送可能失败（返回 null），已通过 STATE_SYNC 兜底")}catch($){console.error("发送 MULLIGAN_CONFIRM(P1) 失败:",$)}}}else{const M=this.state.p2MulliganSelected,R=document.getElementById("mulligan-overlay");R&&R.remove(),this.state=oe(this.state,{type:"CONFIRM_MULLIGAN",forceP2Branch:!0}),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100);try{await this.broadcastGameState(),console.log("P2 换牌后已广播 STATE_SYNC")}catch($){console.error("P2 换牌后广播 STATE_SYNC 失败:",$)}try{const $=g.currentRoom?.id;if(!$){console.error("MULLIGAN_CONFIRM: currentRoom is null");return}const{sendMessage:L}=await ge(async()=>{const{sendMessage:H}=await import("./online-fGHm1H1u.js");return{sendMessage:H}},__vite__mapDeps([0,1]));await L($,g.playerId,"__SYSTEM__",`__MULLIGAN_CONFIRM__|${JSON.stringify(M)}`)?console.log("MULLIGAN_CONFIRM 已发送给先手"):console.warn("MULLIGAN_CONFIRM 发送可能失败（返回 null），已通过 STATE_SYNC 兜底")}catch($){console.error("发送 MULLIGAN_CONFIRM 失败:",$)}}return}const w=document.getElementById("mulligan-overlay");w&&w.remove(),this.state=oe(this.state,{type:"CONFIRM_MULLIGAN"}),this.render(),setTimeout(()=>this.playDrawCardAnimation(),100)})}renderElementBanner(){this.app.innerHTML=`
      <div class="fixed inset-0 flex flex-col items-center justify-center" style="background: #0a1a1a;">
        <div class="text-center p-12 rounded-3xl shadow-2xl" style="background: rgba(20, 50, 50, 0.95); border: 6px solid #3a9a9a; max-width: 600px;">
          <img src="/element-banner-logo.png" alt="元素战棋" style="width:80px;height:80px;margin:0 auto 16px;display:block;image-rendering:pixelated;border-radius:8px;" />
          <h1 class="text-5xl font-bold mb-4" style="color: #7ad0d0; text-shadow: 0 0 20px rgba(58, 154, 154, 0.5); font-family: 'Georgia', serif;">
            元素战棋
          </h1>
          <p class="text-lg mb-8" style="color: #a0d0d0;">
            全新玩法 · 敬请期待
          </p>
          <button id="back-from-element-banner-btn" class="px-8 py-3 text-lg font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
            style="background: linear-gradient(135deg, #3a9a9a 0%, #2a7a7a 100%); color: #fff; border: 3px solid #4ababa;">
            ← 返回主菜单
          </button>
        </div>
      </div>
    `,document.getElementById("back-from-element-banner-btn")?.addEventListener("click",()=>{this.render()})}renderDiscardPileViewer(){if(!this.showDiscardPileViewer)return"";const e=this.state.discardPile.map(s=>{const a=this.getCardFullEffectText(s);return`
        <div class="card-item flex-shrink-0 rounded-xl shadow-md" style="width: 120px; ${this.getCardBgInline(s)} border: 3px solid #d4c4a8; z-index: 1; box-shadow: 0 4px 12px rgba(0,0,0,0.15); aspect-ratio: 2 / 3; position: relative; overflow: visible;">
          <!-- 费用：左上角 -->
          <div class="card-cost-badge">${s.cost}</div>

          <!-- 卡名：顶部居中（白字+黑影） -->
          <div class="absolute left-1 right-1 text-center truncate font-bold" style="top: 4px; color: white; font-size: 14px; z-index: 5; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 1px black;">
            ${s.name}
          </div>

          <!-- 词条+技能描述包裹容器 -->
          ${s.keywords.length>0||a?`
            <div class="card-description-wrapper">
              ${s.keywords.length>0?`
                <div class="card-keywords-area">
                  ${s.keywords.map(r=>{const i=r.name==="护甲"?r.value??s.armorValue??1:"";return`<span class="card-keyword-tag">${r.name}${i}</span>`}).join("")}
                </div>
              `:""}
              ${a?`
                <div class="card-effect-area">
                  ${a}
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
    `}renderGame(){const{waitingForNextPlayer:e,currentPlayerId:s,turnNumber:a,sharedDeck:r,players:i}=this.state;typeof window<"u"&&(this.isPortraitMode=window.innerWidth/window.innerHeight<3/4);const n=this.state.phase==="robotBattle",t=n?!1:s===2,l=t?i[0]:i[1],o=t?i[1]:i[0],d=l.id,p=o.id,c=n&&s===2,h=n?!0:!e,u=o.board.filter(x=>x.canAttack&&!x.hasAttacked&&x.attack>0&&!x.isDefending).length>0,b=l.board.some(x=>x.isDefending||x.keywords.some(v=>v.name==="嘲讽")),m=u&&!b,y=this.isPortraitMode?"compact-mode":"";this.app.innerHTML=`
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
            ${this.renderHeroSkills(l,!0)}
            <!-- 4:3纸材质英雄模块（居中） -->
            <div class="mx-auto relative" data-player-hero="${d}"
              style="width: 140px; height: 105px; ${this.renderHeroBackground(l.heroCard)} border: 4px solid #d4c4a8; border-radius: 8px;${l.elementStatus?"padding: 7px; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[l.elementStatus.type]||"transparent")+";":""}">
              ${l.heroCard?.imageData?"":'<div class="w-full h-full flex items-center justify-center"><span class="font-bold text-lg" style="color: #5a4a3a;">英雄</span></div>'}
              ${l.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:8px;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
              <!-- 血量（底部居中，一半出框） -->
              <div class="absolute flex items-center justify-center font-bold text-white text-sm shadow-md"
                style="bottom: -10px; left: 50%; transform: translateX(-50%); width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #c0a080 0%, #a08060 100%); border: 3px solid #8b7355; z-index: 10;"
                data-player-hp="${d}">
                ${l.health}
              </div>
              ${l.heroMarkCount&&l.heroMarkCount>0?`
                <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md"
                  style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                  ${l.heroMarkCount}
                </div>
              `:""}
            </div>
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
          
          <!-- 上方战场 -->
          <div class="top-board flex justify-center gap-2 min-h-20 p-2 rounded-xl mx-4" id="opponent-play-area" style="background: rgba(255, 255, 255, 0.6); border: 3px solid #d4c4a8;">
            ${l.board.map(x=>{const v=l.board.some(R=>R.isDefending||R.keywords.some($=>$.name==="嘲讽")),C=x.isDefending||x.keywords.some(R=>R.name==="嘲讽"),g=v&&!C?"non-taunt-target":"",k=this.selectedAttackingMinion!==null,w=this.selectingTargetForCard!==null||this.selectingTargetForSkill!==null,P=x.markCount||0,M=this.getEffectIcons(x.effects);return x.elementStatus&&console.log("[元素边框-联机顶部] 随从:",x.name,"元素类型:",x.elementStatus.type,"style中将包含box-shadow"),`
              <div class="minion-card group relative rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all ${this.dyingMinions.has(x.id)?"minion-dying":""} ${x.isDefending?"is-defending":""} ${x.keywords.some(R=>R.name==="嘲讽")?"taunt-minion":""} ${g} ${k?"attack-target":""} ${w?"target-select-mode":""}${x.elementStatus?" element-status-"+x.elementStatus.type:""}" 
                style="${this.getCardBgInline(x,"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)")} border: 4px solid ${w?"#4a90d9":x.isDefending||x.keywords.some(R=>R.name==="嘲讽")?"#6b7db3":x.canAttack&&!x.hasAttacked?"#7cb87c":"#c4b49c"};${x.elementStatus?"padding: 7px; background-clip: padding-box; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[x.elementStatus.type]||"transparent")+";":""}"
                data-minion-id="${x.id}" data-player-id="${d}" data-has-effects="${x.effects&&x.effects.length>0?"true":"false"}">
                ${P>0?`
                  <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md" 
                    style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                    ${P}
                  </div>
                `:""}
                <div class="h-full flex flex-col items-center justify-end py-1 px-2">
                  <div class="minion-name-overlay absolute inset-0 flex items-center justify-center px-1 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="text-xs font-bold text-center leading-tight" style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black;">${x.name}</span>
                  </div>
                  ${x.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:inherit;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
                  <div class="flex items-center justify-center gap-1 flex-wrap max-w-full pt-1">
                    ${this.renderKeywords(x.keywords,x.armorValue,x.divineShieldActive,x.playedThisTurn,x.preparation)}
                    ${M?`<div class="effect-icons text-xs">${M}</div>`:""}
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
            data-player-id="${l.id}">
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
              回合 ${a}
            </div>
          `}
          <div class="flex-1 h-0.5 mx-2 rounded-full" style="background: linear-gradient(90deg, transparent 0%, #c4b49c 50%, transparent 100%);"></div>
          <!-- 抽牌堆按钮（右） -->
          <div id="draw-pile-btn" class="draw-pile-btn group relative flex-shrink-0 mx-10 rounded-sm"
            style="width: 29px; height: 43px; background: url('/card-pile.png') center/cover no-repeat;"
            data-player-id="${o.id}" data-deck-count="${o.deck.length}">
            <div class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-0.5 rounded text-xs font-bold pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50"
              style="color: #fff; text-shadow: 0 0 3px black, 0 0 2px black, 1px 1px 2px black; background: rgba(0,0,0,0.7);">
              抽牌堆：${o.deck.length}张牌
            </div>
          </div>
        </div>
        
        <!-- 下方玩家区域 -->
        <div class="bottom-player-area pt-0 pb-2 px-3">
          <!-- 下方战场 -->
          <div class="bottom-board flex justify-center gap-2 min-h-24 p-3 rounded-xl mx-4" id="play-area" style="background: rgba(255, 255, 255, 0.6); border: 3px solid ${this.selectedHandCard?"#7cb87c":this.selectingTargetForCard?"#4a90d9":"#d4c4a8"};">
            ${o.board.map(x=>{const v=this.selectedAttackingMinion?.id===x.id,C=this.selectingTargetForCard!==null||this.selectingTargetForSkill!==null,g=x.markCount||0,k=this.getEffectIcons(x.effects);return x.elementStatus&&console.log("[元素边框-联机底部] 随从:",x.name,"元素类型:",x.elementStatus.type,"style中将包含box-shadow"),`
              <div class="minion-card group relative rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all ${x.canAttack&&!x.isDefending||x.canAttack&&x.isDefending&&x.keywords.some(w=>w.name==="机动")?"can-attack":""} ${x.isDefending?"is-defending":""} ${this.dyingMinions.has(x.id)?"minion-dying":""} ${v?"selected-attacker":""} ${C?"target-select-mode":""}${x.elementStatus?" element-status-"+x.elementStatus.type:""}" 
                style="${this.getCardBgInline(x,"linear-gradient(135deg, #fff 0%, #f8f4ec 100%)")} border: 4px solid ${v?"#ff6b6b":C?"#4a90d9":x.keywords.some(w=>w.name==="不动")?"#808080":x.isDefending?"#6b7db3":x.canAttack&&!x.hasAttacked?"#7cb87c":x.playedThisTurn?"#4a90d9":"#c4b49c"};${x.elementStatus?"padding: 7px; background-clip: padding-box; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[x.elementStatus.type]||"transparent")+";":""}"
                data-minion-id="${x.id}" data-player-id="${p}" data-has-effects="${x.effects&&x.effects.length>0?"true":"false"}"
                data-base-border="${x.keywords.some(w=>w.name==="不动")?"#808080":x.isDefending?"#6b7db3":x.canAttack&&!x.hasAttacked?"#7cb87c":x.playedThisTurn?"#4a90d9":"#c4b49c"}">
                ${g>0?`
                  <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md" 
                    style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                    ${g}
                  </div>
                `:""}
                ${x.isDefending||x.keywords.some(w=>w.name==="嘲讽")?`
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
                    ${k?`<div class="effect-icons text-xs">${k}</div>`:""}
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
            ${this.renderHeroSkills(o,!1)}
            <!-- 4:3纸材质英雄模块（居中） -->
            <div class="mx-auto relative" data-own-hero="true" data-player-hero="${p}"
              style="width: 140px; height: 105px; ${this.renderHeroBackground(o.heroCard)} border: 4px solid #d4c4a8; border-radius: 8px;${o.elementStatus?"padding: 7px; box-shadow: inset 0 0 0 7px "+({fire:"rgba(255,140,0,0.8)",ice:"rgba(100,180,255,0.8)",lightning:"rgba(160,80,255,0.8)"}[o.elementStatus.type]||"transparent")+";":""}">
              ${o.heroCard?.imageData?"":'<div class="w-full h-full flex items-center justify-center"><span class="font-bold text-lg" style="color: #5a4a3a;">英雄</span></div>'}
              ${o.frozen?'<div style="position:absolute;inset:0;background:rgba(100,180,255,0.3);border-radius:8px;pointer-events:none;z-index:5;" title="冰冻"></div>':""}
              <!-- 血量（底部居中，一半出框） -->
              <div class="absolute flex items-center justify-center font-bold text-white text-sm shadow-md"
                style="bottom: -10px; left: 50%; transform: translateX(-50%); width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #c0a080 0%, #a08060 100%); border: 3px solid #8b7355; z-index: 10;"
                data-player-hp="${p}">
                ${o.health}
              </div>
              ${o.heroMarkCount&&o.heroMarkCount>0?`
                <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md"
                  style="background: #799e73; color: white; border: 2px solid #5a7a55;">
                  ${o.heroMarkCount}
                </div>
              `:""}
              ${this.renderDefenseOverlay(o)}
              ${this.renderSpeechMenuHtml()}
            </div>
            <!-- 昵称和能量（绝对定位在英雄模块右侧） -->
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
          
          <!-- 手牌区域 + 按钮 + 日志 -->
          <div class="hand-area flex items-end justify-center ${this.isPortraitMode?"flex-col items-center":""}" style="position: relative; overflow: visible !important; height: auto !important;">
            <!-- 手牌容器 -->
            <div class="hand-container" id="hand-container" style="flex: 0 0 auto; display: flex; justify-content: center; overflow: visible !important; overflow-x: visible !important; overflow-y: visible !important; height: auto !important; min-height: unset !important;">
              ${h?this.renderHand(o.hand,o.energy,this.isPortraitMode):`
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
                ${c?`
                  <button id="robot-thinking-btn" class="action-btn ${this.isPortraitMode?"py-1 text-sm":"py-2 text-lg"} font-bold rounded-lg shadow-lg"
                    style="background: linear-gradient(135deg, #a0a0a0 0%, #808080 100%); color: #fff; border: 3px solid #606060; cursor: default;">
                    🤖 Robot 思考中...
                  </button>
                `:`
                  <button id="end-turn-btn" class="action-btn ${this.isPortraitMode?"py-1 text-sm":"py-2 text-lg"} font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
                    style="background: linear-gradient(135deg, #e07070 0%, #c05050 100%); color: #fff; border: 3px solid #a04040;">
                    结束回合
                  </button>
                  <button id="all-attack-btn" class="action-btn ${this.isPortraitMode?"py-1 text-sm":"py-2 text-lg"} font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all ${m?"attack-available":"attack-disabled"}"
                    style="background: ${m?"linear-gradient(135deg, #e07070 0%, #c05050 100%)":"linear-gradient(135deg, #888 0%, #666 100%)"}; color: #fff; border: 3px solid ${m?"#a04040":"#555"};">
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
    `,this.attachEventListeners(),this.checkAndTriggerStatEffects()}saveCurrentMinionStats(){this.previousMinionStats.clear(),this.state.players.forEach(e=>{e.board.forEach(s=>{this.previousMinionStats.set(s.id,{attack:s.attack,health:s.health,maxHealth:s.maxHealth})})})}checkAndTriggerStatEffects(){const e=[],s=new Set;this.state.players.forEach(r=>{r.board.forEach(i=>{s.add(i.id)})});const a=[];this.previousBoardMinionIds.size>0&&this.previousBoardMinionIds.forEach(r=>{s.has(r)||a.push(r)}),this.state.players.forEach(r=>{r.board.forEach(i=>{const n=this.previousMinionStats.get(i.id);if(n){const t=n.attack!==i.attack||n.maxHealth!==i.maxHealth,l=n.health-i.health;l>0?e.push({id:i.id,type:"damaged",damage:l}):t&&e.push({id:i.id,type:"stat-change",damage:0})}})}),this.state.players.forEach((r,i)=>{const t=this.previousPlayerHealth[i]-r.health;if(t>0){const l=document.querySelector(`[data-player-hp="${r.id}"]`);if(l){const o=l.getBoundingClientRect();this.damageNumbers.push({x:o.left+o.width/2,y:o.top+o.height/2,damage:t})}}this.previousPlayerHealth[i]=r.health}),this.saveCurrentMinionStats(),this.previousBoardMinionIds=s,e.length>0&&requestAnimationFrame(()=>{e.forEach(({id:r,type:i,damage:n})=>{const t=document.querySelector(`[data-minion-id="${r}"]`);if(t){if(t.classList.remove("minion-stat-change","minion-damaged"),t.offsetWidth,i==="damaged"){if(t.classList.add("minion-damaged"),n>0){const l=t.getBoundingClientRect();this.showDamageNumber(l.left+l.width/2,l.top+l.height/2,n)}}else t.classList.add("minion-stat-change");setTimeout(()=>{t.classList.remove("minion-stat-change","minion-damaged")},300)}else if(i==="damaged"&&n>0){const l=this.deathAnimationQueue.find(o=>o.id===r);l&&this.showDamageNumber(l.x+40,l.y+35,n)}})}),this.damageNumbers.length>0&&requestAnimationFrame(()=>{this.damageNumbers.forEach(({x:r,y:i,damage:n})=>{this.showDamageNumber(r,i,n)}),this.damageNumbers=[]}),a.length>0&&(a.forEach(r=>{const i=this.previousMinionStats.get(r),n=this.deathAnimationQueue.find(t=>t.id===r);if(i&&n){const t=Math.max(1,i.health);this.showDamageNumber(n.x+40,n.y+50,t)}}),setTimeout(()=>{this.playDeathAnimations(a)},100))}showDamageNumber(e,s,a){const r=document.createElement("div");r.className="damage-number",r.style.left=`${e}px`,r.style.top=`${s}px`,r.textContent=`${a}`,document.body.appendChild(r),setTimeout(()=>{r.remove()},550)}playDeathAnimations(e){e.forEach(s=>{const a=this.deathAnimationQueue.find(r=>r.id===s);a&&(this.createTearAnimationWithInfo(a),this.deathAnimationQueue=this.deathAnimationQueue.filter(r=>r.id!==s))})}createTearAnimationWithInfo(e){const s=document.createElement("div");s.className="minion-tear-top",s.style.left=`${e.x}px`,s.style.top=`${e.y}px`,s.innerHTML=`
      <div class="h-full flex flex-col items-center justify-start pt-2 px-1">
        <div class="font-bold text-xs text-center" style="color: #5a4a3a; word-break: break-all;">${e.name}</div>
      </div>
    `;const a=document.createElement("div");a.className="minion-tear-bottom",a.style.left=`${e.x}px`,a.style.top=`${e.y+50}px`,a.innerHTML=`
      <div class="h-full flex flex-col items-center justify-end pb-2">
        <div class="flex justify-between w-full px-2">
          <div class="stat-circle stat-attack" style="width: 22px; height: 22px; font-size: 12px;">${e.attack}</div>
          <div class="stat-circle stat-health" style="width: 22px; height: 22px; font-size: 12px;">${e.health}</div>
        </div>
      </div>
    `,document.body.appendChild(s),document.body.appendChild(a),setTimeout(()=>{s.remove(),a.remove()},400)}saveMinionPositions(){document.querySelectorAll(".minion-card").forEach(e=>{const s=e,a=parseInt(s.dataset.minionId||"0"),r=parseInt(s.dataset.playerId||"0"),i=s.getBoundingClientRect(),n=this.deathAnimationQueue.find(t=>t.id===a);if(n)n.x=i.left,n.y=i.top,n.playerId=r;else{const t=this.state.players.flat().flatMap(l=>l.board).find(l=>l.id===a);t&&this.deathAnimationQueue.push({id:t.id,name:t.name,attack:t.attack,health:t.health,x:i.left,y:i.top,playerId:r})}})}findAttackBonusForMinion(e){const s=e.effects||[];for(const a of s)if(this.momentsInclude(a.moment,"攻击时")&&a.effect==="造成伤害"&&a.targets?.[0]==="攻击目标")return a.value||0;return 0}ensureFxCanvas(){if(this.fxCanvas&&this.fxCanvas.parentElement)return;this.fxCanvas&&(this.fxCanvas.remove(),this.fxCanvas=null,this.fxCtx=null),this.fxCanvas=document.createElement("canvas"),this.fxCanvas.id="fx-canvas",this.fxCanvas.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:999;width:100vw;height:100vh;",this.fxCanvas.width=window.innerWidth,this.fxCanvas.height=window.innerHeight,document.body.appendChild(this.fxCanvas),this.fxCtx=this.fxCanvas.getContext("2d");const e=()=>{this.fxCanvas&&(this.fxCanvas.width=window.innerWidth,this.fxCanvas.height=window.innerHeight)};window.addEventListener("resize",e)}getMinionCenter(e){const s=document.querySelector(`[data-minion-id="${e}"]`);if(!s)return null;const a=s.getBoundingClientRect(),r=this.fxCanvas?.parentElement;if(!r)return null;const i=r.getBoundingClientRect();return{x:a.left-i.left+a.width/2,y:a.top-i.top+a.height/2}}triggerFireExplosion(e){this.ensureFxCanvas();const s=this.getMinionCenter(e);if(s){this.fxCanvas.width,this.fxCanvas.height;for(let a=0;a<10;a++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*20,vy:(Math.random()-.5)*20,size:16+Math.random()*22,life:1,maxLife:.8+Math.random()*.5,color:a===0?"#fffbe6":"#ffcc00",decay:.96,shape:"circle",alpha:1});for(let a=0;a<50;a++){const r=Math.random()*Math.PI*2,i=40+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i-10,size:5+Math.random()*8,life:1,maxLife:1+Math.random()*.8,color:["#ff6600","#ff3300","#ff8800","#cc2200"][Math.floor(Math.random()*4)],decay:.975,shape:"spark",alpha:1,gravity:80,trail:!0,trailLength:6,history:[]})}for(let a=0;a<30;a++){const r=Math.random()*Math.PI*2,i=60+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i-10,size:2+Math.random()*3,life:1,maxLife:.8+Math.random()*.7,color:["#ffe066","#ff9900","#fff"][Math.floor(Math.random()*3)],decay:.97,shape:"circle",alpha:1,gravity:40})}for(let a=0;a<12;a++){const r=-Math.PI/2+(Math.random()-.5)*Math.PI*.6,i=10+Math.random()*30;this.fxParticles.push({x:s.x+(Math.random()-.5)*10,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:8+Math.random()*12,life:1,maxLife:2+Math.random()*1.5,color:"rgba(80,70,60,0.5)",decay:.99,shape:"circle",alpha:.5,gravity:-15})}this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerEditorExplosion(e){const s=document.getElementById("main-card-preview");if(!s)return;const a=document.getElementById("editor-explosion-container");a?.parentNode&&a.remove();const r=document.createElement("div");r.id="editor-explosion-container",r.className="editor-explosion-container pointer-events-none",r.style.cssText="position:absolute;inset:0;z-index:100;overflow:hidden;border-radius:8px;",s.style.position="relative",s.appendChild(r);const n={"🔥":["#ff4500","#ff6347","#ff8c00","#ffd700","#ff0000","#ff3300"],"❄️":["#00bfff","#87ceeb","#e0ffff","#add8e6","#4169e1","#00d4ff"],"⚡️":["#8b00ff","#9400d3","#ba55d3","#dda0dd","#7b68ee","#9932cc"]}[e]||["#ffffff"];for(let t=0;t<50;t++){const l=document.createElement("div"),o=3+Math.random()*10,d=Math.random()*Math.PI*2,p=30+Math.random()*120,c=Math.cos(d)*p,h=Math.sin(d)*p,f=n[Math.floor(Math.random()*n.length)],u=.5+Math.random()*.8,b=Math.random()*.15;l.style.cssText=`position:absolute;left:50%;top:50%;width:${o}px;height:${o}px;border-radius:50%;background:${f};box-shadow:0 0 ${o*1.5}px ${f};opacity:1;transform:translate(-50%,-50%);--dx:${c}px;--dy:${h}px;animation:editor-particle-explode ${u}s ease-out ${b}s forwards;`,r.appendChild(l)}setTimeout(()=>{r.parentNode&&r.remove()},2e3)}getHeroCenter(e){const s=document.querySelector(`[data-player-hero="${e}"]`);if(!s)return null;const a=s.getBoundingClientRect();return{x:a.left+a.width/2,y:a.top+a.height/2}}getSpeechText(e,s){const r=s?.heroCard?.heroSpeech?.[e]?.trim()||this.heroSpeech[e]?.trim();return r||{greeting:"你好！",apology:"抱歉。",taunt:"吁，Loser！",exclamation:"Awww man！",pity:"aww...",flirt:"我喜欢你。"}[e]||""}showSpeechBubble(e,s,a){const r=`speech-bubble-player-${a}`,i=document.getElementById(r);i&&i.remove();const n=a===1,t=document.createElement("div");t.id=r,t.innerHTML=`
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
      </div>`,t.style.cssText="position: fixed; z-index: 9999; animation: speechFadeIn 0.3s ease-out;",document.body.appendChild(t);const l=document.querySelector(`[data-player-hero="${a}"]`);if(l){const o=l.getBoundingClientRect();t.style.left=o.right+16+"px",t.style.top=o.top+o.height/2-20+"px"}else t.style.left="50%",t.style.top="50%",t.style.transform="translate(-50%, -50%)";setTimeout(()=>{t.parentNode&&(t.style.transition="opacity 0.5s ease-out",t.style.opacity="0",setTimeout(()=>{t.parentNode&&t.remove()},500))},2500)}hideSpeechMenu(){const e=document.getElementById("speech-menu-container");e&&e.style.display!=="none"&&(e.style.animation="speechMenuFadeOut 0.15s ease-in forwards",setTimeout(()=>{e.parentNode&&(e.style.display="none")},150)),this.showSpeechMenu=!1,this.clearSpeechMenuTimer()}clearSpeechMenuTimer(){this.speechMenuTimer!==null&&(clearTimeout(this.speechMenuTimer),this.speechMenuTimer=null)}updateSpeechMenuCooldownAttr(){const e=document.getElementById("speech-menu-container");e&&e.setAttribute("data-cooldown",this.speechCooldown?"true":"false")}triggerSpeech(e){if(this.speechCooldown)return;this.speechCooldown=!0,this.speechTurnSpokenTypes.add(e),this.updateSpeechMenuCooldownAttr(),setTimeout(()=>{this.speechCooldown=!1,this.updateSpeechMenuCooldownAttr()},500);const s=this.state.phase==="onlineBattle",a=this.state.phase==="robotBattle";this.state.phase;let r,i;if(s)r=this.state.players[this.onlineViewPlayerIndex],i=r?.id||1;else if(a)r=this.state.players[0],i=r?.id||1;else{const o=document.querySelector('.bottom-player-area [data-own-hero="true"]'),d=parseInt(o?.getAttribute("data-player-hero")||"1");r=this.state.players.find(p=>p.id===d),i=d}const n=this.getSpeechText(e,r),t=r?.name||"我";this.showSpeechBubble(n,t,i),this.hideSpeechMenu();const l=r?.heroCard?.heroSpeech?.voiceType||"none";if(e==="flirt"&&this.soundVolume>0&&!this.flirtAudioPlaying){const o=new Audio("/flirt_audio.wav");o.volume=this.soundVolume/100,this.flirtAudioPlaying=!0;const d=this.bgMusic&&!this.bgMusic.paused?this.bgMusic:null,p=d?this.musicVolume/100:0;if(d){const c=p/33,h=setInterval(()=>{const f=Math.max(0,d.volume-c);d.volume=f,f<=0&&(clearInterval(h),d.volume=0)},30)}o.onended=()=>{if(this.flirtAudioPlaying=!1,d){let c=0;const h=p/33,f=setInterval(()=>{c=Math.min(p,c+h),d.volume=c,c>=p&&(clearInterval(f),d.volume=p)},30)}},o.play().catch(()=>{})}else if(l==="male"&&this.soundVolume>0&&De.MALE_AUDIO_FILES[e]){const o=new Audio(De.MALE_AUDIO_FILES[e]);o.volume=this.soundVolume/100,o.play().catch(()=>{})}else if(l==="female"&&this.soundVolume>0&&De.FEMALE_AUDIO_FILES[e]){const o=new Audio(De.FEMALE_AUDIO_FILES[e]);o.volume=this.soundVolume/100,o.play().catch(()=>{})}if(s&&this.state.online.currentRoom&&ge(async()=>{const{broadcastGameAction:o}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:o}},__vite__mapDeps([0,1])).then(({broadcastGameAction:o})=>{o(this.state.online.currentRoom.id,{type:"VOICE_SPEECH",playerId:this.state.online.playerId,speechType:e}).catch(console.error)}),this.state.phase==="robotBattle"){const o=this.state.players[1]?.heroCard;setTimeout(()=>{const d=[{type:"greeting",weight:19},{type:"apology",weight:19},{type:"taunt",weight:19},{type:"exclamation",weight:19},{type:"pity",weight:19},{type:"flirt",weight:5}],p=d.reduce((y,x)=>y+x.weight,0);let c=Math.random()*p,h="greeting";for(const y of d)if(c-=y.weight,c<=0){h=y.type;break}const f={greeting:"你好！",apology:"抱歉。",taunt:"吁，Loser！",exclamation:"Awww man！",pity:"aww...",flirt:"我喜欢你。"},u=o?.heroSpeech?.[h]||f[h],b=o?.name||"Robot";this.showSpeechBubble(u,b,2);const m=o?.heroSpeech?.voiceType||"none";if(h==="flirt"&&this.soundVolume>0&&!this.flirtAudioPlaying){const y=new Audio("/flirt_audio.wav");y.volume=this.soundVolume/100,this.flirtAudioPlaying=!0;const x=this.bgMusic&&!this.bgMusic.paused?this.bgMusic:null,v=x?this.musicVolume/100:0;if(x){const C=v/33,g=setInterval(()=>{const k=Math.max(0,x.volume-C);x.volume=k,k<=0&&(clearInterval(g),x.volume=0)},30)}y.onended=()=>{if(this.flirtAudioPlaying=!1,x){let C=0;const g=v/33,k=setInterval(()=>{C=Math.min(v,C+g),x.volume=C,C>=v&&(clearInterval(k),x.volume=v)},30)}},y.play().catch(()=>{})}else if(m==="female"&&this.soundVolume>0&&De.FEMALE_AUDIO_FILES[h]){const y=new Audio(De.FEMALE_AUDIO_FILES[h]);y.volume=this.soundVolume/100,y.play().catch(()=>{})}},1e3)}}renderSpeechMenuHtml(){return`<div id="speech-menu-container" data-cooldown="${this.speechCooldown?"true":"false"}" style="display:none; position:absolute; top:0; left:0; width:140px; height:105px; z-index:50; pointer-events:none;">
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
    </div>`}renderRemoteSpeechBubble(e,s,a){const r=this.state.players.find(l=>l.id===a),t=r?.heroCard?.heroSpeech?.[s]?.trim()||this.getSpeechText(s);this.showSpeechBubble(t,r?.name||"对手",a)}triggerFireExplosionOnHero(e){this.ensureFxCanvas();const s=this.getHeroCenter(e);if(s){this.fxCanvas.width,this.fxCanvas.height;for(let a=0;a<10;a++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*20,vy:(Math.random()-.5)*20,size:16+Math.random()*22,life:1,maxLife:.8+Math.random()*.5,color:a===0?"#fffbe6":"#ffcc00",decay:.96,shape:"circle",alpha:1});for(let a=0;a<50;a++){const r=Math.random()*Math.PI*2,i=40+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i-10,size:5+Math.random()*8,life:1,maxLife:1+Math.random()*.8,color:["#ff6600","#ff3300","#ff8800","#cc2200"][Math.floor(Math.random()*4)],decay:.975,shape:"spark",alpha:1,gravity:80,trail:!0,trailLength:6,history:[]})}for(let a=0;a<30;a++){const r=Math.random()*Math.PI*2,i=60+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i-10,size:2+Math.random()*3,life:1,maxLife:.8+Math.random()*.7,color:["#ffe066","#ff9900","#fff"][Math.floor(Math.random()*3)],decay:.97,shape:"circle",alpha:1,gravity:40})}for(let a=0;a<12;a++){const r=-Math.PI/2+(Math.random()-.5)*Math.PI*.6,i=10+Math.random()*30;this.fxParticles.push({x:s.x+(Math.random()-.5)*10,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:8+Math.random()*12,life:1,maxLife:2+Math.random()*1.5,color:"rgba(80,70,60,0.5)",decay:.99,shape:"circle",alpha:.5,gravity:-15})}this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerIceExplosion(e){this.ensureFxCanvas();const s=this.getMinionCenter(e);if(s){this.fxCanvas.width,this.fxCanvas.height;for(let a=0;a<8;a++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*15,vy:(Math.random()-.5)*15,size:14+Math.random()*18,life:1,maxLife:.9+Math.random()*.5,color:a===0?"#ffffff":"#a0e0ff",decay:.955,shape:"circle",alpha:1});for(let a=0;a<45;a++){const r=Math.random()*Math.PI*2,i=35+Math.random()*120;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i-5,size:3+Math.random()*7,life:1,maxLife:1+Math.random()*.8,color:["#c8e8ff","#e0f0ff","#a0d0ff","#ffffff"][Math.floor(Math.random()*4)],decay:.97,shape:"diamond",alpha:1,gravity:50})}for(let a=0;a<30;a++){const r=-Math.PI/2+(Math.random()-.5)*Math.PI*.8,i=20+Math.random()*60;this.fxParticles.push({x:s.x+(Math.random()-.5)*30,y:s.y,vx:Math.cos(r)*i+(Math.random()-.5)*30,vy:Math.sin(r)*i,size:3+Math.random()*6,life:1,maxLife:1.5+Math.random()*1,color:"rgba(220,240,255,0.9)",decay:.99,shape:"circle",alpha:.9,gravity:-10})}for(let a=0;a<12;a++){const r=-Math.PI/2+(Math.random()-.5)*Math.PI*.5,i=8+Math.random()*20;this.fxParticles.push({x:s.x+(Math.random()-.5)*8,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:10+Math.random()*14,life:1,maxLife:2+Math.random()*1.5,color:"rgba(180,210,240,0.5)",decay:.985,shape:"circle",alpha:.5,gravity:-20})}this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerIceExplosionOnHero(e){this.ensureFxCanvas();const s=this.getHeroCenter(e);if(s){for(let a=0;a<8;a++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*15,vy:(Math.random()-.5)*15,size:14+Math.random()*18,life:1,maxLife:.9+Math.random()*.5,color:a===0?"#ffffff":"#a0e0ff",decay:.955,shape:"circle",alpha:1});for(let a=0;a<45;a++){const r=Math.random()*Math.PI*2,i=35+Math.random()*120;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i-5,size:3+Math.random()*7,life:1,maxLife:1+Math.random()*.8,color:["#c8e8ff","#e0f0ff","#a0d0ff","#ffffff"][Math.floor(Math.random()*4)],decay:.97,shape:"diamond",alpha:1,gravity:50})}for(let a=0;a<30;a++){const r=-Math.PI/2+(Math.random()-.5)*Math.PI*.8,i=20+Math.random()*60;this.fxParticles.push({x:s.x+(Math.random()-.5)*30,y:s.y,vx:Math.cos(r)*i+(Math.random()-.5)*30,vy:Math.sin(r)*i,size:3+Math.random()*6,life:1,maxLife:1.5+Math.random()*1,color:"rgba(220,240,255,0.9)",decay:.99,shape:"circle",alpha:.9,gravity:-10})}for(let a=0;a<12;a++){const r=-Math.PI/2+(Math.random()-.5)*Math.PI*.5,i=8+Math.random()*20;this.fxParticles.push({x:s.x+(Math.random()-.5)*8,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:10+Math.random()*14,life:1,maxLife:2+Math.random()*1.5,color:"rgba(180,210,240,0.5)",decay:.985,shape:"circle",alpha:.5,gravity:-20})}this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerLightningExplosion(e){this.ensureFxCanvas();const s=this.getMinionCenter(e);if(s){this.fxCanvas.width,this.fxCanvas.height;for(let a=0;a<8;a++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,size:18+Math.random()*24,life:1,maxLife:.7+Math.random()*.4,color:a===0?"#ffffff":["#7AB8B8","#90D0D0","#B0E0E0"][Math.floor(Math.random()*3)],decay:.95,shape:"circle",alpha:1});for(let a=0;a<40;a++){const r=Math.random()*Math.PI*2,i=30+Math.random()*100;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i+(Math.random()-.5)*30,size:4+Math.random()*10,life:1,maxLife:.8+Math.random()*.6,color:["#7AB8B8","#90D0D0","#B0E0E0","#C8E8E8","#D8F0F0"][Math.floor(Math.random()*5)],decay:.96,shape:"zigzag",alpha:1,gravity:20,trail:!0,trailLength:8,history:[]})}for(let a=0;a<25;a++){const r=Math.random()*Math.PI*2,i=50+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:2+Math.random()*4,life:1,maxLife:.6+Math.random()*.5,color:["#90D0D0","#B8E8E8","#ffffff","#D8F0F0"][Math.floor(Math.random()*4)],decay:.955,shape:"circle",alpha:1,gravity:0})}for(let a=0;a<10;a++)this.fxParticles.push({x:s.x+(Math.random()-.5)*6,y:s.y+(Math.random()-.5)*6,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,size:8+Math.random()*12,life:1,maxLife:1.2+Math.random()*.8,color:"rgba(120,200,200,0.4)",decay:.98,shape:"circle",alpha:.4,gravity:0});this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}triggerLightningExplosionOnHero(e){this.ensureFxCanvas();const s=this.getHeroCenter(e);if(s){for(let a=0;a<8;a++)this.fxParticles.push({x:s.x,y:s.y,vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,size:18+Math.random()*24,life:1,maxLife:.7+Math.random()*.4,color:a===0?"#ffffff":["#7AB8B8","#90D0D0","#B0E0E0"][Math.floor(Math.random()*3)],decay:.95,shape:"circle",alpha:1});for(let a=0;a<40;a++){const r=Math.random()*Math.PI*2,i=30+Math.random()*100;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i+(Math.random()-.5)*30,size:4+Math.random()*10,life:1,maxLife:.8+Math.random()*.6,color:["#7AB8B8","#90D0D0","#B0E0E0","#C8E8E8","#D8F0F0"][Math.floor(Math.random()*5)],decay:.96,shape:"zigzag",alpha:1,gravity:20,trail:!0,trailLength:8,history:[]})}for(let a=0;a<25;a++){const r=Math.random()*Math.PI*2,i=50+Math.random()*150;this.fxParticles.push({x:s.x,y:s.y,vx:Math.cos(r)*i,vy:Math.sin(r)*i,size:2+Math.random()*4,life:1,maxLife:.6+Math.random()*.5,color:["#90D0D0","#B8E8E8","#ffffff","#D8F0F0"][Math.floor(Math.random()*4)],decay:.955,shape:"circle",alpha:1,gravity:0})}for(let a=0;a<10;a++)this.fxParticles.push({x:s.x+(Math.random()-.5)*6,y:s.y+(Math.random()-.5)*6,vx:(Math.random()-.5)*8,vy:(Math.random()-.5)*8,size:8+Math.random()*12,life:1,maxLife:1.2+Math.random()*.8,color:"rgba(120,200,200,0.4)",decay:.98,shape:"circle",alpha:.4,gravity:0});this.fxRunning||(this.fxRunning=!0,this.fxLoop())}}processPendingVisualEffects(){const e=this.state.pendingVisualEffects||[];if(e.length!==0){for(const s of e)s.type==="fire_explosion"?s.targetType==="hero"?this.triggerFireExplosionOnHero(s.targetPlayerId):this.triggerFireExplosion(s.targetMinionId):s.type==="ice_explosion"?s.targetType==="hero"?this.triggerIceExplosionOnHero(s.targetPlayerId):this.triggerIceExplosion(s.targetMinionId):s.type==="lightning_explosion"&&(s.targetType==="hero"?this.triggerLightningExplosionOnHero(s.targetPlayerId):this.triggerLightningExplosion(s.targetMinionId));this.state={...this.state,pendingVisualEffects:[]}}}processPendingSpeechEvents(){const e=this.state.pendingSpeechEvents||[];if(e.length!==0){for(const s of e){if(!document.querySelector("[data-minion-id]"))continue;const r=this.state.players[s.playerId-1];if(!r||!r.board[s.minionIndex])continue;const i=r.board[s.minionIndex],n=document.querySelector(`[data-minion-id="${i.id}"]`);n&&this.showMinionSpeechBubble(n,s.text)}this.state={...this.state,pendingSpeechEvents:[]}}}showMinionSpeechBubble(e,s){const a=e.getBoundingClientRect(),r=window.innerWidth/2,i=a.left+a.width/2<r,n=document.createElement("div");n.className=`minion-speech-bubble ${i?"speech-right":"speech-left"}`,n.textContent=s,n.style.position="fixed",n.style.zIndex="9999",n.style.maxWidth="180px",n.style.padding="6px 12px",n.style.borderRadius="12px",n.style.background="rgba(0,0,0,0.8)",n.style.color="#fff",n.style.fontSize="14px",n.style.fontWeight="500",n.style.textAlign="center",n.style.pointerEvents="none",n.style.animation="speechBubbleFadeIn 0.3s ease, speechBubbleFadeOut 0.5s ease 2.5s forwards",i?(n.style.left=`${a.right+8}px`,n.style.top=`${a.top}px`,n.style.borderTopLeftRadius="4px"):(n.style.right=`${window.innerWidth-a.left+8}px`,n.style.top=`${a.top}px`,n.style.borderTopRightRadius="4px");const t=document.createElement("div");t.style.position="absolute",t.style.top="8px",t.style.width="0",t.style.height="0",t.style.borderTop="6px solid transparent",t.style.borderBottom="6px solid transparent",i?(t.style.left="-6px",t.style.borderRight="6px solid rgba(0,0,0,0.8)"):(t.style.right="-6px",t.style.borderLeft="6px solid rgba(0,0,0,0.8)"),n.appendChild(t),document.body.appendChild(n),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},3500)}savePotentialDeathMinions(e,s){this.state.players.forEach(a=>{a.board.forEach(r=>{if(!this.deathAnimationQueue.find(n=>n.id===r.id)){const n=document.querySelector(`[data-minion-id="${r.id}"]`);let t=0,l=0,o=a.id;if(n){const d=n.getBoundingClientRect();t=d.left,l=d.top,o=parseInt(n.dataset.playerId||"0")}this.deathAnimationQueue.push({id:r.id,name:r.name,attack:r.attack,health:r.health,x:t,y:l,playerId:o})}})}),document.querySelectorAll(".minion-card").forEach(a=>{const r=a,i=parseInt(r.dataset.minionId||"0"),n=parseInt(r.dataset.playerId||"0"),t=r.getBoundingClientRect(),l=this.deathAnimationQueue.find(o=>o.id===i);l&&(l.x=t.left,l.y=t.top,l.playerId=n)})}async renderGameOver(){const e=this.state.winner;if(!e){console.error("[动画] renderGameOver: winner 为 null，无法渲染游戏结束界面"),this.state=oe(this.state,{type:"BACK_TO_MENU"}),this.render();return}const s=e===1?1:0,a=this.state.players[s],r=this.state.players[e-1];console.log("[动画] 渲染本机游戏结束界面"),console.log("[动画] winner (索引):",e,"(对应 players["+(e-1)+"])"),console.log("[动画] winner 名字:",r.name,"生命值:",r.health),console.log("[动画] loserIndex:",s,"loser 名字:",a.name,"生命值:",a.health);const i=`
      <div id="game-over-overlay" class="fixed inset-0 flex flex-col items-center justify-center" style="background: #000;">
        <div id="thumbs-down-layer" style="position: absolute; inset: 0; pointer-events: none; overflow: hidden;"></div>
        <div class="text-center" style="position: relative; z-index: 2;">
          <h1 class="text-8xl font-bold mb-8" style="color: #ff0000; font-family: 'Georgia', serif; text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);">
            Loser is
          </h1>
          <p class="text-6xl font-bold mb-12" style="color: #fff; font-family: 'Georgia', serif;">
            ${a.name}
          </p>
          <p class="text-sm mt-12" style="color: #666; cursor: default;">- 点击屏幕返回主菜单 -</p>
        </div>
      </div>
    `;await this.applyGrayscaleTransition(i);const n=document.getElementById("game-over-overlay");n&&n.addEventListener("click",()=>{this.stopThumbsDownEmojis(),this.state=oe(this.state,{type:"BACK_TO_MENU"}),this.render()}),this.spawnThumbsDownEmojis()}robotThreatScore(e){let s=e.attack*1.5;s+=e.health/Math.max(e.maxHealth,1)*2,e.keywords.some(r=>r.name==="连击")&&(s+=5),e.keywords.some(r=>r.name==="狂怒")&&(s+=5),e.divineShieldActive&&(s+=8),e.keywords.some(r=>r.name==="元素")&&(s+=3),e.keywords.some(r=>r.name==="先攻")&&(s+=3),e.isDefending&&(s+=2);const a=e.armorValue||0;return s+=a*.5,s}robotValueScore(e){let s=e.attack*1.2+e.health*.8;return e.keywords.some(a=>a.name==="连击")&&(s+=5),e.keywords.some(a=>a.name==="狂怒")&&(s+=5),e.keywords.some(a=>a.name==="先攻")&&(s+=3),e.keywords.some(a=>a.name==="机动")&&(s+=3),e.divineShieldActive&&(s+=4),e.keywords.some(a=>a.name==="元素")&&(s+=2),e.keywords.some(a=>a.name==="嘲讽")&&(s+=2),s}evaluateConditionLikelihood(e,s){if(!e||e.length===0)return 1;let a=0,r=0;for(const i of e){const n=i.conditionType||(!i.triggerNumbers||i.triggerNumbers.length===6?"guaranteed":"d6");if(n==="guaranteed"){a+=1,r++;continue}if(n==="d6"){const t=i.triggerNumbers||[],l=t.length===0||t.length>=6?1:t.length/6;a+=l,r++;continue}try{const t=ot(i,s,2);a+=t.passed?.85:.25}catch{a+=.5}r++}return r>0?a/r:1}robotScoreCardForPlay(e,s,a,r){if(e.legacyEffect==="gain_energy")return 0;if(e.type==="minion"){let i=e.attack*1.5+e.health*1-e.cost*.5;return e.keywords?.some(n=>n.name==="连击")&&(i+=5),e.keywords?.some(n=>n.name==="狂怒")&&(i+=5),e.keywords?.some(n=>n.name==="圣盾")&&(i+=4),e.keywords?.some(n=>n.name==="先攻")&&(i+=3),e.keywords?.some(n=>n.name==="机动")&&(i+=3),e.keywords?.some(n=>n.name==="元素")&&(i+=2),e.keywords?.some(n=>n.name==="嘲讽")&&(i+=2),s.length<3&&(i+=3),a.length>=s.length+2&&(i+=4),i}if(e.type==="spell"){let i=0;const n=e.effects||[];for(const t of n)switch(t.effect){case"造成伤害":{i+=t.value*1;for(const l of a)t.value>=l.health&&(i+=this.robotThreatScore(l)*1.2);break}case"治愈":{i+=t.value*.5,s.filter(o=>o.health<=o.maxHealth*.4).length>0&&(i+=8);break}case"抽牌":{i+=t.value*3,r<=2&&(i+=15);break}case"属性变化":{if(t.isPositive)i+=(t.attackValue||0)*.8+(t.healthValue||0)*.6,s.some(l=>l.attack>=4)&&(i+=5);else{i+=(t.attackValue||0)*1+(t.healthValue||0)*.8;for(const l of a)t.attackValue&&l.attack<=-t.attackValue&&(i+=5),t.healthValue&&l.health<=-t.healthValue&&(i+=5)}break}case"给予印记":{i+=t.value*1;break}case"获得能量":{i+=t.value*2;break}case"召唤":{i+=t.value*4;break}case"给予词条":{t.grantedKeywordName==="嘲讽"||t.grantedKeywordName==="圣盾"?i+=6:i+=4;break}default:i+=2;break}if(n.length>0){const t=this.evaluateConditionLikelihood(n,this.state);t<.3?i*=.2:t<.6?i*=.5:t<.9&&(i*=.8)}return i}return 0}robotSelectBuffTarget(e,s){if(s.length===0)return 0;let a=-1,r=0;for(const i of s){let n=this.robotValueScore(i);if(e.effect==="治愈"){const t=i.maxHealth-i.health;n+=t*1.5,i.health<=2&&(n+=10)}e.effect==="属性变化"&&((e.attackValue||0)>0&&(n+=i.attack*.5),(e.healthValue||0)>0&&i.health<=3&&(n+=8)),e.effect==="给予词条"&&i.health<=3&&i.attack>=3&&(n+=6),i.canAttack&&!i.hasAttacked&&(n+=3),n>a&&(a=n,r=i.id)}return r}robotSelectDebuffTarget(e,s){if(s.length===0)return 0;let a=-1,r=0;for(const i of s){let n=this.robotThreatScore(i);const t=e.value||0;if(t>0&&t>=i.health&&i.health>0&&(n+=20,t-i.health<=2&&(n+=5)),i.divineShieldActive&&t>0&&(n+=5),e.effect==="属性变化"){const l=Math.abs(e.attackValue||0);l>0&&i.attack>0&&(n+=Math.min(i.attack,l)*1.5)}n>a&&(a=n,r=i.id)}return r}robotScoreAttackTarget(e,s,a){let r=0;const i=Math.max(0,e.attack-(s.armorValue||0)),n=i>=s.health,t=e.keywords.some(f=>f.name==="先攻"),l=e.attack*1.5+e.health*.5;if(n){const f=i-s.health,u=Math.max(0,10-f*2);r+=10+u}const o=Math.min(e.health,s.attack);if(t||(o>=e.health&&n?r-=l*.6:o>=e.health?r-=l:o<=0?r+=5:r-=o*.3),t?r+=this.robotThreatScore(s)*.5:r+=this.robotThreatScore(s),s.divineShieldActive&&(e.attack<=3?r+=10:r-=5),e.divineShieldActive&&s.attack>0&&(r+=s.attack*.2),!t&&s.keywords.some(f=>f.name==="先攻")&&s.attack>=e.health&&(r-=15),(s.armorValue||0)>0)if(i<=0)r-=30;else if(i<s.health){const f=i/s.health;r-=8*(1-f)}else r-=3;if(n&&e.keywords.some(f=>["狂怒","连击"].includes(f.name))&&(r+=8),n&&e.effects&&e.effects.length>0){for(const f of e.effects)if(f.moment==="死亡时"||f.moment==="攻击时"){const u=this.evaluateConditionLikelihood([f],this.state);if(u>0){const b=(f.value||0)+(f.attackValue||0)*2+(f.healthValue||0)*1.5;r+=Math.min(b,15)*u}}}s.elementStatus&&e.attack>0&&(r+=4),s.isDefending&&(r+=2),a==="AGGRESSIVE"&&(r-=25),a==="CONTROL"&&s.attack>=3&&(r+=5);const p=this.state.players[1].health,c=this.state.players[1].maxHealth,h=p/c;if(h<.6){const f=Math.max(0,(.6-h)/.6)*2.5;s.attack>=3&&(r+=s.attack*3*f),s.attack>=p&&(r+=40*f),n&&s.attack>=3&&(r+=12*f)}return s.attack>=5&&(r+=s.attack*.8),s.attack<=1&&h<.4&&(r-=15),r}robotShouldUseCoin(e,s){const a=e.players[1],r=a.energy,i=a.hand;if(!i.some(t=>t.legacyEffect==="gain_energy"))return!1;if(r<s.cost&&r+1>=s.cost){const t=this.robotScoreCardForPlay(s,a.board,e.players[0].board,i.length);return(s.effects?.some(c=>(c.targets||[]).some(f=>["选择目标","选择随从"].includes(f)))?s.effects?.some(c=>c.targets?.includes("自己"))?a.board.length>0:s.effects?.some(c=>c.targets?.includes("选择目标")||c.targets?.includes("选择随从"))?e.players[0].board.length>0:!0:!0)?t>=5?!0:r<=2&&i.some(o=>o.cost>=5&&o!==s)||t<5&&!i.filter(p=>p!==s&&p!==i.find(c=>c.legacyEffect==="gain_energy")).some(p=>p.cost<=r+1)?!1:t>=3:!1}return!1}async robotUseHeroSkill(){const e=this.state.players[1],s=e.heroCard;if(!s?.skills?.length||e.energy<1)return;const a=0,r=s.skills[a];if(!r||e.heroSkillUsed?.[a]||(r.remainingCooldown??0)>0)return;const i=this.state.players[1].board;if(i.length===0)return;let n=-1,t=0;for(const l of i){let o=0;l.canAttack&&!l.hasAttacked&&(o+=l.attack*.8),l.health<=2&&(o+=this.robotValueScore(l)>=4?15:5),l.keywords.some(d=>d.name==="连击")&&(o+=4),l.keywords.some(d=>d.name==="狂怒")&&(o+=4),l.keywords.some(d=>d.name==="先攻")&&(o+=3),l.divineShieldActive&&(o+=2),l.isDefending&&(o+=2),l.health<=l.maxHealth*.5&&(o+=3);for(const d of this.state.players[0].board)l.attack+1>=d.health&&l.attack<d.health&&(o+=this.robotThreatScore(d)*1.2);o>n&&(n=o,t=l.id)}n<3||(this.state=oe(this.state,{type:"PLAY_HERO_SKILL",playerId:2,skillIndex:a,targetPlayerId:2,targetCardId:t}),this.render(),await new Promise(l=>setTimeout(l,1200)))}async robotSpeak(e,s=1){if(this.speechCooldown||this.speechTurnSpokenTypes.has(e)||Math.random()>s)return;const a=this.state.players.find(n=>n.id===2);if(!a)return;const r=this.getSpeechText(e,a);if(!r)return;if(this.speechCooldown=!0,this.updateSpeechMenuCooldownAttr(),await new Promise(n=>setTimeout(n,500)),this.showSpeechBubble(r,a.name||"Robot",2),(a.heroCard?.heroSpeech?.voiceType||"none")==="female"&&this.soundVolume>0&&De.FEMALE_AUDIO_FILES[e]){const n=new Audio(De.FEMALE_AUDIO_FILES[e]);n.volume=this.soundVolume/100,n.play().catch(()=>{})}this.speechCooldown=!0,this.updateSpeechMenuCooldownAttr(),setTimeout(()=>{this.speechCooldown=!1,this.updateSpeechMenuCooldownAttr()},3e3)}robotCheckPlayerTurnReaction(){if(this.state.phase!=="robotBattle"||this.state.currentPlayerId!==1)return;const e=this.state.turnNumber,s=this.state.players[1].board,a=new Set(s.map(n=>n.id)),r=this.state.players[0];if(e!==this.speechLastTurnCheck){this.speechLastTurnCheck=e,this.speechLastRobotBoardSize=s.length,this.speechLastRobotBoardIds=a,this.speechLastRobotHealth=this.state.players[1].health,this.speechLastRobotTotalHealth=s.reduce((n,t)=>n+t.health,0),this.speechLastHandSize=r.hand.length,this.speechLastPlayerEnergy=r.energy,this.speechTurnSpokenTypes.clear();return}r.hand.length<this.speechLastHandSize&&r.energy<this.speechLastPlayerEnergy&&this.robotSpeak("exclamation",.3);const i=s.reduce((n,t)=>n+t.health,0);i>this.speechLastRobotTotalHealth&&a.size===this.speechLastRobotBoardIds.size&&r.hand.length!==this.speechLastHandSize&&this.robotSpeak("flirt",.2);for(const n of this.speechLastRobotBoardIds)if(!a.has(n)){this.robotSpeak("taunt",.5);break}this.speechLastHandSize=r.hand.length,this.speechLastPlayerEnergy=r.energy,this.speechLastRobotBoardSize=s.length,this.speechLastRobotBoardIds=a,this.speechLastRobotHealth=this.state.players[1].health,this.speechLastRobotTotalHealth=i}async executeRobotTurn(){if(!this.robotTurnExecuting){if(this.robotTurnExecuting=!0,this.state.phase!=="robotBattle"||this.state.currentPlayerId!==2){this.robotTurnExecuting=!1;return}if(this.state.players[0].health<=0||this.state.players[1].health<=0){this.robotTurnExecuting=!1;return}if(this.speechTurnSpokenTypes.clear(),await this.robotUseHeroSkill(),await this.robotPlayPhase(),await this.robotAttackPhase(),this.state.players[0].health<=0){this.robotTurnExecuting=!1;return}await this.robotDefensePhase(),this.state.turnNumber===1&&(await this.robotSpeak("greeting",1),await new Promise(e=>setTimeout(e,800))),this.state.currentPlayerId===2&&(this.state=oe(this.state,{type:"END_ROBOT_TURN"}),this.selectedMinion=null,this.render()),this.robotTurnExecuting=!1}}async robotPlayPhase(){let e=this.state.players[1],s=this.state.players[0];const a=e.hand.find(n=>n.legacyEffect==="gain_energy"),i=e.hand.filter(n=>n!==a).map(n=>({card:n,score:this.robotScoreCardForPlay(n,e.board,s.board,e.hand.length)})).sort((n,t)=>t.score-n.score);for(const n of i){const t=n.card;if(t.type==="minion"){for(const o of i)if(o.card!==t&&o.card.effects?.some(d=>d.conditionType==="minion_count"&&(!d.conditionSides||d.conditionSides.includes("friendly")))){n.score+=5;break}}}i.sort((n,t)=>t.score-n.score);for(const{card:n}of i){if(this.state.currentPlayerId!==2)break;if(e=this.state.players[1],s=this.state.players[0],e.energy<n.cost)if(a&&this.robotShouldUseCoin(this.state,n)){if(this.playWoodSound(),this.state=oe(this.state,{type:"PLAY_CARD",playerId:2,cardId:a.id}),this.render(),await new Promise(o=>setTimeout(o,1200)),e=this.state.players[1],e.energy<n.cost)continue}else continue;const l=n.effects?.some(o=>(o.targets||[]).some(p=>["选择目标","选择随从","自己"].includes(p)));if(l?await this.robotPlayCardWithTarget(n):(this.playWoodSound(),this.state=oe(this.state,{type:"PLAY_CARD",playerId:2,cardId:n.id})),this.render(),await new Promise(o=>setTimeout(o,1500)),n.cost>=6&&await this.robotSpeak("exclamation",.5),n.type==="minion"&&!l){const o=n.effects?.find(d=>{const p=d.targets||[];return this.momentsInclude(d.moment,"打出时")&&p.some(c=>["选择目标","选择随从","自己"].includes(c))});o&&await this.robotExecuteMinionEffect(n,o)}}if(a&&this.state.currentPlayerId===2&&(e=this.state.players[1],e.hand.some(t=>t.id===a.id))){const t=e.energy;!e.hand.some(o=>o.id!==a.id&&o.cost<=t)&&t<=1&&(this.playWoodSound(),this.state=oe(this.state,{type:"PLAY_CARD",playerId:2,cardId:a.id}),this.render(),await new Promise(o=>setTimeout(o,1200)))}}async robotPlayCardWithTarget(e){const s=e.effects?.find(o=>(o.targets||[]).some(p=>["选择目标","选择随从","自己"].includes(p)));if(!s)return;const r=(s.targets||[]).find(o=>["选择目标","选择随从","自己"].includes(o)),i=this.state.players[1],n=this.state.players[0];let t=1,l=0;r==="自己"?(t=2,l=0):r==="选择随从"?s.effect==="治愈"||s.effect==="给予印记"||s.effect==="属性变化"&&s.isPositive!==!1||s.effect==="给予词条"?(t=2,l=i.board.length>0?this.robotSelectBuffTarget(s,i.board):0):(t=1,l=n.board.length>0?this.robotSelectDebuffTarget(s,n.board):0):(t=1,n.board.length>0?l=this.robotSelectDebuffTarget(s,n.board)||0:l=0),this.playWoodSound(),this.state=oe(this.state,{type:"PLAY_CARD_WITH_TARGET",playerId:2,cardId:e.id,targetPlayerId:t,targetCardId:l})}async robotExecuteMinionEffect(e,s){const r=(s.targets||[]).find(o=>["选择目标","选择随从","自己"].includes(o)),i=this.state.players[1],n=this.state.players[0];let t=1,l=0;r==="自己"?(t=2,l=0):r==="选择随从"?s.effect==="治愈"||s.effect==="给予印记"||s.effect==="属性变化"&&s.isPositive!==!1||s.effect==="给予词条"?(t=2,l=i.board.length>0?this.robotSelectBuffTarget(s,i.board):0):(t=1,l=n.board.length>0?this.robotSelectDebuffTarget(s,n.board):0):(t=1,l=0),this.state=oe(this.state,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:2,cardId:e.id,targetPlayerId:t,targetCardId:l}),this.render(),await new Promise(o=>setTimeout(o,1500))}async robotAttackPhase(){let e="TEMPO";const s=this.state.players[1],a=this.state.players[0],r=s.health,i=a.health,n=s.board,t=a.board;n.reduce((c,h)=>c+(h.canAttack&&!h.hasAttacked?h.attack:0),0)>=i?e="AGGRESSIVE":n.length<=t.length+1?e="CONTROL":(r<15||t.reduce((c,h)=>c+h.attack,0)>r/3)&&(e="DEFENSIVE");const o=c=>c.keywords.some(h=>h.name==="先攻")?0:c.attack<=3?1:2;let d=0;const p=20;for(;this.state.currentPlayerId===2&&d<p;){d++;const c=this.state.players[1].board,h=this.state.players[0].board,f=c.filter(y=>y.canAttack&&!y.hasAttacked&&y.attack>0).sort((y,x)=>o(y)-o(x));if(f.length===0||this.state.players[0].health<=0)break;const u=f[0];if(this.state.players[0].health<=0)break;const b=h.filter(y=>y.isDefending||y.keywords.some(x=>x.name==="嘲讽")),m=b.length>0?b:h;if(u.canAttackMinions){if(m.length>0){let y=-999,x=null;for(const v of m){const C=this.robotScoreAttackTarget(u,v,e);C>y&&(y=C,x=v)}if(x&&y>0){if(this.playWoodSound(),this.state=oe(this.state,{type:"ATTACK",attackerPlayerId:2,attackerCardId:u.id,targetPlayerId:1,targetCardId:x.id}),this.render(),await new Promise(v=>setTimeout(v,1500)),this.state.players[0].health<=0)break;x&&this.robotThreatScore(x)>=8&&(Math.random()<.6?await this.robotSpeak("taunt",1):await this.robotSpeak("apology",1));continue}}}if(u.canAttackHeroes){if(u.attack<=2&&u.health>=3&&m.length>0&&m.every(y=>this.robotScoreAttackTarget(u,y,e)<=0))continue;if(this.playWoodSound(),this.state=oe(this.state,{type:"ATTACK_HERO",attackerPlayerId:2,attackerCardId:u.id,targetPlayerId:1}),this.render(),await new Promise(y=>setTimeout(y,1500)),this.state.players[0].health<=0)break}}}async robotDefensePhase(){const e=this.state.players[1],a=this.state.players[0].board,r=e.health,i=a.length>0?Math.max(...a.map(l=>l.attack)):0,n=a.reduce((l,o)=>l+o.attack,0),t=e.board.filter(l=>!(l.isDefending||l.keywords.some(o=>["连击","狂怒"].includes(o.name))||l.hasAttacked||l.attack<=0||l.playedThisTurn&&l.keywords.some(o=>o.name==="冲锋")));for(const l of t){if(this.state.currentPlayerId!==2)break;const o=l.keywords.some(f=>f.name==="机动"),d=l.keywords.some(f=>f.name==="不动"),p=this.robotValueScore(l);let c=0;if(l.effects&&l.effects.length>0)for(const f of l.effects){const u=this.evaluateConditionLikelihood([f],this.state);if(u>.5){const b=(f.value||0)+(f.attackValue||0)*2+(f.healthValue||0)*1.5;c+=Math.min(b,12)*u}}let h=!1;c>=6&&(h=!0),l.health>=l.attack*3+2&&l.health>=5||o?h=!0:d||(r<15&&p>=5||l.attack>=4&&l.health>=3||a.length>=3&&n>=8&&p>=4||l.health<=i&&p>=4||r<=10&&l.health>=3||a.filter(f=>f.attack>0).length>=2&&p>=5)&&(h=!0),h&&(this.state=oe(this.state,{type:"TOGGLE_DEFENSE",playerId:2,cardId:l.id}),this.render(),await new Promise(f=>setTimeout(f,800)))}if(a.length<=1&&n<=3&&r>20)for(const l of e.board.filter(o=>o.isDefending)){if(this.state.currentPlayerId!==2)break;this.state=oe(this.state,{type:"TOGGLE_DEFENSE",playerId:2,cardId:l.id}),this.render(),await new Promise(o=>setTimeout(o,600))}}async renderRobotGameOver(){const e=this.state.winner;if(!e){this.state=oe(this.state,{type:"BACK_TO_MENU"}),this.render();return}const s=e===1?1:0,a=this.state.players[s];this.state.players[e-1];const r=e===1,i=`
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
            ${a.name} 被击败了
          </p>
          <p class="text-sm mt-12" style="color: #666; cursor: default;">- 点击屏幕返回主菜单 -</p>
        </div>
      </div>
    `;await this.applyGrayscaleTransition(i);const n=document.getElementById("game-over-overlay");n&&n.addEventListener("click",()=>{this.stopThumbsDownEmojis(),this.state=oe(this.state,{type:"BACK_TO_MENU"}),this.render()}),this.spawnThumbsDownEmojis()}spawnThumbsDownEmojis(){if(!this.thumbsDownAnimCssInjected){const s=document.createElement("style");s.textContent=`
        @keyframes thumbsDownAnim {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(var(--start-s)); }
          25% { opacity: 1; transform: translate(-50%, -50%) scale(var(--end-s)); }
          60% { opacity: 1; transform: translate(-50%, -50%) scale(var(--end-s)); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.05); }
        }
      `,document.head.appendChild(s),this.thumbsDownAnimCssInjected=!0}this.thumbsDownIntervalId!==null&&clearInterval(this.thumbsDownIntervalId);const e=150+Math.random()*100;this.thumbsDownIntervalId=window.setInterval(()=>{const s=document.createElement("div");s.textContent="👎";const a=36+Math.random()*44,r=.25+Math.random()*.3,i=1+Math.random()*.6,n=2e3+Math.random()*600;s.style.cssText=`
        position: fixed;
        left: ${5+Math.random()*90}%;
        top: ${5+Math.random()*90}%;
        font-size: ${a}px;
        line-height: 1;
        pointer-events: none;
        --start-s: ${r};
        --end-s: ${i};
        animation: thumbsDownAnim ${n}ms ease-in-out 0ms forwards;
      `;const t=document.getElementById("thumbs-down-layer");t?t.appendChild(s):document.body.appendChild(s),setTimeout(()=>s.remove(),n+50)},e)}stopThumbsDownEmojis(){this.thumbsDownIntervalId!==null&&(clearInterval(this.thumbsDownIntervalId),this.thumbsDownIntervalId=null)}applyGrayscaleTransition(e){return new Promise(s=>{const a=document.body.style.overflow,r=document.documentElement.style.overflow;document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",this.switchBGM("/sounds/boooh.mp3");const i=document.createElement("div");i.style.cssText=`
        position: fixed; inset: 0; z-index: 9997;
        pointer-events: none;
        background: transparent;
        backdrop-filter: grayscale(0) brightness(1);
        -webkit-backdrop-filter: grayscale(0) brightness(1);
        transition: none;
      `,document.body.appendChild(i),requestAnimationFrame(()=>{i.style.transition="backdrop-filter 3s cubic-bezier(0.4, 0, 0.2, 1), -webkit-backdrop-filter 3s cubic-bezier(0.4, 0, 0.2, 1)",i.style.backdropFilter="grayscale(1) brightness(1)",i.style.webkitBackdropFilter="grayscale(1) brightness(1)"});let n=null;setTimeout(()=>{const t=document.createElement("div");t.innerHTML=e,n=t.firstElementChild,n&&(n.style.opacity="0",n.style.transition="opacity 3s cubic-bezier(0.4, 0, 0.2, 1)",n.style.zIndex="9999",document.body.appendChild(n),n.offsetHeight,n.style.opacity="1")},2e3),setTimeout(()=>{i.remove(),n&&(this.app.innerHTML="",this.app.appendChild(n)),document.body.style.overflow=a,document.documentElement.style.overflow=r,s()},5e3)})}screenShake(e){return new Promise(s=>{s()})}attackAnimation(e,s,a,r=!1){return new Promise(i=>{this.state.phase;const n=r?`.top-board [data-minion-id="${e}"]`:`.bottom-board [data-minion-id="${e}"]`;console.log("attackAnimation - 攻击者ID:",e,"isOpponent:",r,"选择器:",n);const t=document.querySelector(n);if(!t){console.log("attackAnimation - 找不到攻击者元素:",e,"isOpponent:",r);const o=document.querySelectorAll(".minion-card");console.log("当前所有随从:",Array.from(o).map(d=>({id:d.dataset.minionId,classList:d.className}))),i();return}const l=r?80:s?-100:-80;console.log("attackAnimation - 找到攻击者，执行动画，移动:",l),t.style.transition="transform 0.15s ease-out",t.style.transform=`translateY(${l}px) scale(1.1)`,t.style.zIndex="100",setTimeout(()=>{t.style.transition="transform 0.15s ease-in",t.style.transform="",setTimeout(()=>{t.style.zIndex="",this.screenShake(a).then(i)},150)},150)})}async tryPlayCard(e){if(this.state.players[this.state.currentPlayerId-1].energy<e.cost)return;const r=(e.effects||(e.effect?[e.effect]:[])).filter(i=>this.momentsInclude(i.moment,"打出时"));for(const i of r){if(!i.effect)continue;const n=i.targets||[];if(console.log("[tryPlayCard] 检查卡牌:",e.name,"effect:",i.effect,"targets:",n,"type:",e.type),n.includes("选择目标")||n.includes("选择随从")){if(console.log("[tryPlayCard] 需要选择目标，card.type:",e.type),e.type==="spell"){console.log("[tryPlayCard] 法术卡进入目标选择模式"),this.selectingTargetForCard=e,this.selectingTargetEffect=i,this.selectingTargetMinionId=null,this.targetArrowColor="#9b59b6",this.selectedHandCard=null,this.render(),setTimeout(()=>{const o=document.querySelector(".bottom-player-area [data-player-hp]");if(console.log("[tryPlayCard] 寻找英雄元素:",o),o){const d=o.getBoundingClientRect();this.targetArrowStartX=d.left+d.width/2,this.targetArrowStartY=d.top+d.height/2,console.log("[tryPlayCard] 英雄位置:",this.targetArrowStartX,this.targetArrowStartY)}else this.targetArrowStartX=window.innerWidth/2,this.targetArrowStartY=window.innerHeight-100,console.log("[tryPlayCard] 使用备用位置:",this.targetArrowStartX,this.targetArrowStartY);this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,"purple")},50);return}this.playWoodSound(),this.state=oe(this.state,{type:"PLAY_CARD",playerId:this.state.currentPlayerId,cardId:e.id});const t=this.state.players[this.state.currentPlayerId-1].board,l=t[t.length-1];this.selectingTargetForCard=e,this.selectingTargetEffect=i,this.selectingTargetMinionId=l?l.id:null,this.targetArrowColor="#4a90d9",this.selectedHandCard=null,this.render(),setTimeout(()=>{if(this.selectingTargetMinionId){const o=document.querySelector(`[data-minion-id="${this.selectingTargetMinionId}"]`);if(o){const d=o.getBoundingClientRect();this.targetArrowStartX=d.left+d.width/2,this.targetArrowStartY=d.top+d.height/2,this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,"blue")}}},50);return}}this.playCardDirectly(e)}async playCardDirectly(e){e.type==="minion"&&this.playWoodSound();const a=(e.effects||(e.effect?[e.effect]:[])).filter(r=>r.moment==="打出时"&&r.effect==="抽牌"&&(r.targets||[]).includes("无需目标"));if(this.state=oe(this.state,{type:"PLAY_CARD",playerId:this.state.currentPlayerId,cardId:e.id}),this.selectedHandCard=null,this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.render(),this.state.phase==="onlineBattle"){const r=this.state.online.currentRoom;if(r){const{broadcastGameAction:i}=await ge(async()=>{const{broadcastGameAction:n}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:n}},__vite__mapDeps([0,1]));i(r.id,{type:"PLAY_CARD",playerId:this.state.online.playerId,cardId:e.id}).catch(console.error),await this.broadcastGameState()}}a.length>0&&a.reduce((i,n)=>i+(n.value||1),0)>0&&setTimeout(()=>this.playDrawCardAnimation(),100)}async executeCardWithTarget(e,s,a,r){if(console.log("[executeCardWithTarget] 开始执行:",e.name,"effect:",s,"targetPlayerId:",a,"targetMinionId:",r),this.hideTargetArrow(),this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null,e.type==="spell"?this.state=oe(this.state,{type:"PLAY_CARD_WITH_TARGET",playerId:this.state.currentPlayerId,cardId:e.id,targetPlayerId:a,targetCardId:r}):this.state=oe(this.state,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:this.state.currentPlayerId,cardId:e.id,targetPlayerId:a,targetCardId:r}),this.render(),this.state.phase==="onlineBattle"){const n=this.state.online.currentRoom;if(n){const{broadcastGameAction:t}=await ge(async()=>{const{broadcastGameAction:l}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:l}},__vite__mapDeps([0,1]));t(n.id,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:this.state.online.playerId,cardId:e.id,targetPlayerId:a,targetCardId:r}).catch(console.error),await this.broadcastGameState()}}}async executeCardEffectOnHero(e,s,a){if(console.log("[executeCardEffectOnHero] 开始执行:",e.name,"effect:",s,"targetPlayerId:",a),this.hideTargetArrow(),this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null,e.type==="spell"?this.state=oe(this.state,{type:"PLAY_CARD_WITH_TARGET",playerId:this.state.currentPlayerId,cardId:e.id,targetPlayerId:a}):this.state=oe(this.state,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:this.state.currentPlayerId,cardId:e.id,targetPlayerId:a}),this.render(),this.state.phase==="onlineBattle"){const i=this.state.online.currentRoom;if(i){const{broadcastGameAction:n}=await ge(async()=>{const{broadcastGameAction:t}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:t}},__vite__mapDeps([0,1]));n(i.id,{type:"EXECUTE_PLAYED_MINION_EFFECT",playerId:this.state.online.playerId,cardId:e.id,targetPlayerId:a}).catch(console.error),await this.broadcastGameState()}}}async executeHeroSkillWithTarget(e,s,a){this.hideTargetArrow(),this.selectingTargetForSkill=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null;const r=this.state.currentPlayerId;if(this.state=oe(this.state,{type:"PLAY_HERO_SKILL",playerId:r,skillIndex:e,targetPlayerId:s,targetCardId:a}),this.render(),this.state.phase==="onlineBattle"){const n=this.state.online.currentRoom;if(n){const{broadcastGameAction:t}=await ge(async()=>{const{broadcastGameAction:l}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:l}},__vite__mapDeps([0,1]));t(n.id,{type:"HERO_SKILL",playerId:this.state.online.playerId,skillIndex:e,targetPlayerId:s,targetCardId:a}).catch(console.error),await this.broadcastGameState()}}}async executeHeroSkillOnHero(e,s){this.hideTargetArrow(),this.selectingTargetForSkill=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null;const a=this.state.currentPlayerId;if(this.state=oe(this.state,{type:"PLAY_HERO_SKILL",playerId:a,skillIndex:e,targetPlayerId:s}),this.render(),this.state.phase==="onlineBattle"){const i=this.state.online.currentRoom;if(i){const{broadcastGameAction:n}=await ge(async()=>{const{broadcastGameAction:t}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:t}},__vite__mapDeps([0,1]));n(i.id,{type:"HERO_SKILL",playerId:this.state.online.playerId,skillIndex:e,targetPlayerId:s}).catch(console.error),await this.broadcastGameState()}}}async allAttackHero(){if(this.isAttacking)return;this.isAttacking=!0;const e=this.state.players[this.state.currentPlayerId-1],s=this.state.currentPlayerId===1?2:1,r=this.state.players[s-1].board.some(n=>n.isDefending||n.keywords.some(t=>t.name==="嘲讽")),i=e.board.filter(n=>{if(!n.canAttack||!n.canAttackHeroes||n.attack<=0||n.isDefending)return!1;const t=n.maxAttacksPerTurn||1;return!((n.attacksThisTurn||0)>=t)});if(i.length===0||r){this.isAttacking=!1;return}for(const n of i){const l=(n.maxAttacksPerTurn||1)-(n.attacksThisTurn||0);for(let o=0;o<l;o++){const d=this.state.players[this.state.currentPlayerId-1].board.find(p=>p.id===n.id);if(!d||!d.canAttack||d.attack<=0)break;if(this.playWoodSound(),this.savePotentialDeathMinions(n.id),await this.attackAnimation(n.id,!0,d.attack),this.state=oe(this.state,{type:"ATTACK_HERO",attackerPlayerId:this.state.currentPlayerId,attackerCardId:n.id,targetPlayerId:s}),this.render(),this.state.phase==="gameOver"){this.isAttacking=!1;return}await new Promise(p=>setTimeout(p,200))}}if(this.isAttacking=!1,this.state.phase==="onlineBattle"){const n=this.state.online.currentRoom;if(n){const{broadcastGameAction:t}=await ge(async()=>{const{broadcastGameAction:o}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:o}},__vite__mapDeps([0,1])),l=this.state.currentPlayerId===1?2:1;for(const o of this.state.players[this.state.currentPlayerId-1].board)o.canAttack&&t(n.id,{type:"ATTACK_HERO",attackerPlayerId:this.state.online.playerId,attackerCardId:o.id,targetPlayerId:l}).catch(console.error);await this.broadcastGameState()}}}attachEventListeners(){document.addEventListener("keydown",l=>{l.key==="F11"&&(l.preventDefault(),document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{}))}),this.app.addEventListener("dblclick",l=>{this.menuSubScreen||(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen())});const e=this.state.phase==="onlineBattle";document.getElementById("game-container")?.addEventListener("click",l=>{const o=l.target;!o.closest(".hero-skill-icon-wrapper")&&!o.closest(".minion-card")&&!o.closest('[data-own-hero="true"]')&&(this.hideFixedTooltip(),this.selectedAttackingMinion&&(this.selectedAttackingMinion=null,this.hideDefenseOverlayDOM(),this.syncSelectionToDOM()),!o.closest("[data-speech-type]")&&!o.closest("#speech-menu-container")&&this.hideSpeechMenu())}),document.getElementById("game-menu-btn")?.addEventListener("click",()=>{this.showGameMenu=!0,this.render()}),document.getElementById("continue-game-btn")?.addEventListener("click",()=>{this.showGameMenu=!1,this.render()}),document.getElementById("save-exit-btn")?.addEventListener("click",()=>{this.savedGameState={...this.state,newlyDrawnCardIds:[]},this.showGameMenu=!1,this.state=oe(this.state,{type:"BACK_TO_MENU"}),this.render()}),e||document.getElementById("surrender-btn")?.addEventListener("click",()=>{this.showGameMenu=!1;const l=this.state.currentPlayerId===1?2:1;this.state={...this.state,phase:"gameOver",winner:l},this.render()}),document.getElementById("game-menu-overlay")?.addEventListener("click",l=>{l.target.id==="game-menu-overlay"&&(this.showGameMenu=!1,this.render())}),document.getElementById("discard-pile-btn")?.addEventListener("click",l=>{const o=parseInt(l.currentTarget.getAttribute("data-player-id")||"0");o>0&&(this.showDiscardPileViewer=!0,this.viewingDiscardPilePlayerId=o,this.render())}),document.getElementById("discard-pile-viewer-close")?.addEventListener("click",()=>{this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.render()}),document.getElementById("discard-pile-viewer-overlay")?.addEventListener("click",l=>{l.target.id==="discard-pile-viewer-overlay"&&(this.showDiscardPileViewer=!1,this.viewingDiscardPilePlayerId=null,this.render())});const s=this.state.phase==="robotBattle",a=s&&this.state.currentPlayerId===2;document.getElementById("end-turn-btn")?.addEventListener("click",()=>{s?this.state=oe(this.state,{type:"END_ROBOT_TURN"}):this.state=oe(this.state,{type:"END_TURN"}),this.selectedMinion=null,this.render()}),document.getElementById("my-turn-btn")?.addEventListener("click",()=>{this.state=oe(this.state,{type:"START_MY_TURN"}),this.selectedMinion=null,this.render(),setTimeout(()=>this.playDrawCardAnimation(),100)}),document.getElementById("all-attack-btn")?.addEventListener("click",()=>{this.allAttackHero()}),a||(this.setupHandDrag(),this.setupMinionAttack(),document.querySelectorAll(".hero-skill-icon-btn").forEach(l=>{l.addEventListener("click",async o=>{const d=o.currentTarget,p=parseInt(d.dataset.playerId),c=parseInt(d.dataset.skillIndex);if(this.state.currentPlayerId!==p)return;const h=this.state.players[p-1],f=h.heroCard;if(!f||!f.skills)return;const u=f.skills[c];if(!u||u.type==="passive")return;const b=u.cost??0;if(h.energy<b)return;const y=(u.effects||(u.effect?[u.effect]:[])).filter(v=>v.moment==="打出时"||v.moment===null);if(y.some(v=>{const C=v.targets||[];return C.includes("选择目标")||C.includes("选择随从")})){if(this.selectingTargetForSkill&&this.selectingTargetForSkill.skillIndex===c&&this.selectingTargetForSkill.playerId===p){this.selectingTargetForSkill=null,this.selectingTargetEffect=null,this.selectingTargetMinionId=null,this.hideTargetArrow(),this.render();return}this.selectingTargetForSkill={skillIndex:c,playerId:p};const v=y.find(C=>{const g=C.targets||[];return g.includes("选择目标")||g.includes("选择随从")});this.selectingTargetEffect=v||null,this.selectingTargetMinionId=null,this.targetArrowColor="#a855f7",this.selectedHandCard=null,this.render(),setTimeout(()=>{const C=document.querySelector(`.hero-skill-icon-btn[data-skill-index="${c}"][data-player-id="${p}"]`);if(C){const g=C.getBoundingClientRect();this.targetArrowStartX=g.left+g.width/2,this.targetArrowStartY=g.top+g.height/2,this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,this.targetArrowColor)}},50);return}if(this.state=oe(this.state,{type:"PLAY_HERO_SKILL",playerId:p,skillIndex:c}),e){const v=this.state.online.currentRoom;if(v){const{broadcastGameAction:C}=await ge(async()=>{const{broadcastGameAction:g}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:g}},__vite__mapDeps([0,1]));C(v.id,{type:"HERO_SKILL",playerId:this.state.online.playerId,skillIndex:c}).catch(console.error),await this.broadcastGameState()}}this.render()})})),document.querySelectorAll(".hero-skill-icon-wrapper").forEach(l=>{l.addEventListener("mouseenter",o=>{const d=o.currentTarget,p=parseInt(d.dataset.playerId),c=parseInt(d.dataset.skillIndex),h=d.dataset.isOpponent==="true",u=this.state.players.find(w=>w.id===p)?.heroCard?.skills?.[c];if(!u)return;const b=u.type==="passive",m=u.remainingCooldown??0,y=Math.floor(m/2),x=!b&&y>0?`<div style="font-size:11px; color:#ffcccc; margin-top:4px; text-shadow:0 0 4px rgba(0,0,0,0.8);">冷却中：剩余 ${y} 回合</div>`:"",v=u.usesLeft??(u.limited?u.maxUses:void 0),C=!b&&u.limited?`<div style="font-size:11px; color:${v===0?"#ff9999":"#ffffcc"}; margin-top:4px; text-shadow:0 0 4px rgba(0,0,0,0.8);">${v===0?"次数已用尽":`剩余次数：${v}`}</div>`:"",k=`
          <div>
            ${b?'<span style="display:inline-block; background:rgba(192,160,128,0.6); color:#fff; padding:1px 6px; border-radius:4px; font-size:11px; margin-bottom:4px;">被动技能</span>':""}
            <div style="font-weight:bold; font-size:14px; margin-bottom:4px; color:#fff; text-shadow:0 0 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6);">${u.name}</div>
            <div style="font-size:12px; color:#fff; text-shadow:0 0 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6); white-space:pre-line;">${this.getHeroSkillDescription(u)}</div>
            ${x}
            ${C}
          </div>
        `;this.showFixedTooltip(d,k,h?"bottom":"top")}),l.addEventListener("mouseleave",()=>this.hideFixedTooltip())}),document.querySelectorAll('.minion-card[data-has-effects="true"]').forEach(l=>{l.addEventListener("mouseenter",o=>{const d=o.currentTarget,p=parseInt(d.dataset.playerId),c=parseInt(d.dataset.minionId),f=this.state.players.find(b=>b.id===p)?.board.find(b=>b.id===c);if(!f||!f.effects?.length)return;const u=`
          <div>
            <div style="font-weight:bold; font-size:14px; margin-bottom:4px; color:#fff; text-shadow:0 0 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6);">${f.name}</div>
            <div style="font-size:12px; color:#fff; text-shadow:0 0 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6); white-space:pre-line;">${this.getMinionSkillDescription(f)}</div>
          </div>
        `;this.showFixedTooltip(d,u,"bottom")}),l.addEventListener("mouseleave",()=>this.hideFixedTooltip())});const r=document.getElementById("play-area");if(r&&r.addEventListener("click",l=>{if(this.selectingTargetForCard&&!l.target.closest(".minion-card")){this.selectingTargetForCard=null,this.selectingTargetEffect=null,this.render();return}if(this.selectingTargetForSkill&&!l.target.closest(".minion-card")){this.selectingTargetForSkill=null,this.selectingTargetEffect=null,this.hideTargetArrow(),this.render();return}this.selectedHandCard&&!l.target.closest(".minion-card")&&this.tryPlayCard(this.selectedHandCard)}),this.selectingTargetForCard&&this.selectingTargetEffect){document.querySelectorAll(".top-board .minion-card").forEach(o=>{o.addEventListener("click",d=>{if(d.stopPropagation(),!this.selectingTargetForCard||!this.selectingTargetEffect)return;const p=parseInt(o.dataset.minionId),c=parseInt(o.dataset.playerId);this.executeCardWithTarget(this.selectingTargetForCard,this.selectingTargetEffect,c,p)})}),document.querySelectorAll(".bottom-board .minion-card").forEach(o=>{o.addEventListener("click",d=>{if(d.stopPropagation(),!this.selectingTargetForCard||!this.selectingTargetEffect)return;const p=parseInt(o.dataset.minionId),c=parseInt(o.dataset.playerId);this.executeCardWithTarget(this.selectingTargetForCard,this.selectingTargetEffect,c,p)})});const l=document.querySelector(".top-player-area");l&&l.addEventListener("click",o=>{if(!o.target.closest(".minion-card")){const d=this.selectingTargetEffect?.targets||[];if(this.selectingTargetEffect&&d.includes("选择目标")&&!d.includes("选择随从")){const p=this.state.currentPlayerId===1?2:1;this.executeCardEffectOnHero(this.selectingTargetForCard,this.selectingTargetEffect,p)}}})}if(this.selectingTargetForSkill&&this.selectingTargetEffect){const l=this.selectingTargetForSkill.skillIndex;document.querySelectorAll(".top-board .minion-card").forEach(d=>{d.addEventListener("click",p=>{if(p.stopPropagation(),!this.selectingTargetForSkill||!this.selectingTargetEffect)return;const c=parseInt(d.dataset.minionId),h=parseInt(d.dataset.playerId);this.executeHeroSkillWithTarget(l,h,c)})}),document.querySelectorAll(".bottom-board .minion-card").forEach(d=>{d.addEventListener("click",p=>{if(p.stopPropagation(),!this.selectingTargetForSkill||!this.selectingTargetEffect)return;const c=parseInt(d.dataset.minionId),h=parseInt(d.dataset.playerId);this.executeHeroSkillWithTarget(l,h,c)})});const o=document.querySelector(".top-player-area");o&&o.addEventListener("click",d=>{if(!d.target.closest(".minion-card")){const p=this.selectingTargetEffect?.targets||[];if(this.selectingTargetEffect&&p.includes("选择目标")&&!p.includes("选择随从")){const c=this.state.currentPlayerId===1?2:1;this.executeHeroSkillOnHero(l,c)}}})}const i=document.querySelector(".bottom-player-area");i&&i.addEventListener("click",()=>{this.selectingTargetEffect?.effect==="治愈"&&this.selectingTargetForCard&&this.selectingTargetEffect&&this.executeCardEffectOnHero(this.selectingTargetForCard,this.selectingTargetEffect,this.state.currentPlayerId),this.selectingTargetEffect?.effect==="治愈"&&this.selectingTargetForSkill&&this.selectingTargetEffect&&this.executeHeroSkillOnHero(this.selectingTargetForSkill.skillIndex,this.state.currentPlayerId)}),document.querySelectorAll(".top-board .minion-card").forEach(l=>{l.addEventListener("click",async o=>{if(this.selectedAttackingMinion&&!this.isAttacking){o.stopPropagation(),this.isAttacking=!0;const d=parseInt(l.dataset.minionId),p=parseInt(l.dataset.playerId),c=this.selectedAttackingMinion;this.selectedAttackingMinion=null;const h=this.state.phase==="onlineBattle",f=h?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;console.log("攻击随从 - 联机模式:",h,"视角索引:",this.onlineViewPlayerIndex,"攻击者ID:",f,"目标玩家ID:",p,"目标随从ID:",d),this.savePotentialDeathMinions(c.id,d);const u=this.state.players.find(y=>y.id===f)?.board.find(y=>y.id===c.id),b=u?this.findAttackBonusForMinion(u):0,m=b>0?u.attack:0;if(b>0&&(u.attack+=b),this.playWoodSound(),await this.attackAnimation(c.id,!1,u?u.attack:c.attack),this.state=oe(this.state,{type:"ATTACK",attackerPlayerId:f,attackerCardId:c.id,targetPlayerId:p,targetCardId:d}),b>0){const y=this.state.players.find(x=>x.id===f)?.board.find(x=>x.id===c.id);y?y.attack-=b:u&&(u.attack=m)}h&&await this.broadcastGameState(),this.isAttacking=!1,this.state.newlyDrawnCardIds.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(),50)):this.render()}})});const n=document.querySelector(".top-player-area");n&&n.addEventListener("click",async l=>{if(this.selectedAttackingMinion&&!l.target.closest(".minion-card")&&!this.isAttacking){this.isAttacking=!0;const o=this.state.phase==="onlineBattle",d=o?this.onlineViewPlayerIndex===0?2:1:this.state.currentPlayerId===1?2:1,p=this.selectedAttackingMinion;this.selectedAttackingMinion=null;const c=o?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;console.log("攻击英雄 - 联机模式:",o,"视角索引:",this.onlineViewPlayerIndex,"攻击者ID:",c,"目标玩家ID:",d),this.savePotentialDeathMinions(p.id),this.playWoodSound(),await this.attackAnimation(p.id,!0,p.attack),this.state=oe(this.state,{type:"ATTACK_HERO",attackerPlayerId:c,attackerCardId:p.id,targetPlayerId:d}),o&&await this.broadcastGameState(),this.isAttacking=!1,this.render()}});const t=document.querySelector('.bottom-player-area [data-own-hero="true"]');if(t&&t.addEventListener("click",l=>{if(!l.target.closest("[data-speech-type]")){if(this.selectedAttackingMinion&&!l.target.closest(".minion-card")&&!this.isAttacking&&!this.state.waitingForNextPlayer){const o=this.selectedAttackingMinion,d=this.state.phase==="onlineBattle",p=d?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,h=this.state.players[p].board.find(g=>g.id===o.id);if(!h)return;const f=h.keywords.some(g=>g.name==="连击"),u=h.keywords.some(g=>g.name==="狂怒"),b=h.keywords.some(g=>g.name==="嘲讽"),m=h.keywords.some(g=>g.name==="机动"),y=h.keywords.some(g=>g.name==="不动"),x=h.maxAttacksPerTurn||1,v=(h.attacksThisTurn||0)>=x;if(h.isDefending){l.stopPropagation(),this.selectedAttackingMinion=null;const g=d?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=oe(this.state,{type:"TOGGLE_DEFENSE",playerId:g,cardId:o.id}),this.render(),d){const k=this.state.online.currentRoom;k&&(ge(async()=>{const{broadcastGameAction:w}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:w}},__vite__mapDeps([0,1])).then(({broadcastGameAction:w})=>{w(k.id,{type:"STATE_SYNC",playerId:g}).catch(console.error)}),this.broadcastGameState())}return}if(!y&&!f&&!u&&!b&&(!h.hasAttacked||m)&&!v&&!(h.playedThisTurn&&h.keywords.some(g=>g.name==="冲锋"))){l.stopPropagation(),this.selectedAttackingMinion=null;const g=d?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=oe(this.state,{type:"TOGGLE_DEFENSE",playerId:g,cardId:o.id}),this.render(),d){const k=this.state.online.currentRoom;k&&(ge(async()=>{const{broadcastGameAction:w}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:w}},__vite__mapDeps([0,1])).then(({broadcastGameAction:w})=>{w(k.id,{type:"STATE_SYNC",playerId:g}).catch(console.error)}),this.broadcastGameState())}}}else if(!this.selectedAttackingMinion&&!this.isAttacking&&!this.state.waitingForNextPlayer){l.stopPropagation();const o=document.getElementById("speech-menu-container");o&&(o.style.display==="none"||!o.style.display?(o.setAttribute("data-cooldown",this.speechCooldown?"true":"false"),o.style.display="block",o.style.animation="none",o.offsetHeight,o.style.animation="speechMenuFadeIn 0.25s ease-out",this.showSpeechMenu=!0,this.clearSpeechMenuTimer(),this.speechMenuTimer=setTimeout(()=>{this.hideSpeechMenu()},5e3)):this.hideSpeechMenu())}}}),document.addEventListener("click",l=>{const o=l.target.closest("[data-speech-type]");if(o){const d=o.dataset.speechType;this.triggerSpeech(d)}}),this.attackingMinion&&!this.isAttacking){document.querySelectorAll(".top-board .minion-card").forEach(o=>{o.addEventListener("mouseup",async d=>{if(this.attackingMinion&&!this.isAttacking){d.stopPropagation(),this.isAttacking=!0;const p=parseInt(d.currentTarget.dataset.minionId),c=parseInt(d.currentTarget.dataset.playerId);this.hideAttackArrow();const f=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;this.savePotentialDeathMinions(this.attackingMinion.id,p);const u=this.state.players.find(x=>x.id===f)?.board.find(x=>x.id===this.attackingMinion?.id),b=u?this.findAttackBonusForMinion(u):0,m=b>0?u.attack:0;if(b>0&&(u.attack+=b),this.playWoodSound(),await this.attackAnimation(this.attackingMinion.id,!1,u?u.attack:this.attackingMinion.attack),this.state=oe(this.state,{type:"ATTACK",attackerPlayerId:f,attackerCardId:this.attackingMinion.id,targetPlayerId:c,targetCardId:p}),b>0){const x=this.state.players.find(v=>v.id===f)?.board.find(v=>v.id===this.attackingMinion?.id);x?x.attack-=b:u&&(u.attack=m)}const y=this.attackingMinion.id;if(this.attackingMinion=null,this.hideDefenseOverlayDOM(),this.isAttacking=!1,this.state.newlyDrawnCardIds.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(),50)):this.render(),this.state.phase==="onlineBattle"){const x=this.state.online.currentRoom;if(x){const{broadcastGameAction:v}=await ge(async()=>{const{broadcastGameAction:C}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:C}},__vite__mapDeps([0,1]));v(x.id,{type:"ATTACK_MINION",attackerPlayerId:this.state.online.playerId,attackerCardId:y,targetPlayerId:c,targetCardId:p}).catch(console.error),await this.broadcastGameState()}}}})});const l=document.querySelector(".top-player-area");l&&l.addEventListener("mouseup",async o=>{if(this.attackingMinion&&!o.target.closest(".minion-card")&&!this.isAttacking){this.isAttacking=!0;const d=this.state.phase==="onlineBattle",p=d?this.onlineViewPlayerIndex===0?2:1:this.state.currentPlayerId===1?2:1,c=d?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;this.hideAttackArrow(),this.savePotentialDeathMinions(this.attackingMinion.id);const h=this.findAttackBonusForMinion(this.attackingMinion),f=h>0?this.attackingMinion.attack:0;h>0&&(this.attackingMinion.attack+=h),this.playWoodSound(),await this.attackAnimation(this.attackingMinion.id,!0,this.attackingMinion.attack),this.state=oe(this.state,{type:"ATTACK_HERO",attackerPlayerId:c,attackerCardId:this.attackingMinion.id,targetPlayerId:p}),h>0&&(this.attackingMinion.attack-=h,this.attackingMinion&&this.attackingMinion.attack<f&&(this.attackingMinion.attack=f));const u=this.attackingMinion.id;if(this.attackingMinion=null,this.isAttacking=!1,this.render(),this.state.phase==="onlineBattle"){const b=this.state.online.currentRoom;if(b){const{broadcastGameAction:m}=await ge(async()=>{const{broadcastGameAction:y}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:y}},__vite__mapDeps([0,1]));m(b.id,{type:"ATTACK_HERO",attackerPlayerId:this.state.online.playerId,attackerCardId:u,targetPlayerId:p}).catch(console.error),await this.broadcastGameState()}}}})}}setupMinionAttack(){const e=document.querySelectorAll(".bottom-board .minion-card");console.log("setupMinionAttack - 底部随从数量:",e.length,"视角索引:",this.onlineViewPlayerIndex,"游戏阶段:",this.state.phase),e.forEach(s=>{const a=parseInt(s.dataset.minionId),r=i=>{if(i.keywords.some(f=>f.name==="不动"))return!1;const n=i.keywords.some(f=>f.name==="连击"),t=i.keywords.some(f=>f.name==="狂怒"),l=i.keywords.some(f=>f.name==="嘲讽"),o=i.keywords.some(f=>f.name==="机动"),d=i.maxAttacksPerTurn||1,p=(i.attacksThisTurn||0)>=d,c=!i.hasAttacked&&!p&&(!i.isDefending||i.isDefending&&o),h=!i.isDefending&&!n&&!t&&!l&&(!i.hasAttacked||o)&&!p&&!(i.playedThisTurn&&i.keywords.some(f=>f.name==="冲锋"));return c||h};s.addEventListener("click",i=>{if(this.state.waitingForNextPlayer||this.isAttacking)return;const n=this.state.phase==="onlineBattle",t=n?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,o=this.state.players[t].board.find(d=>d.id===a);if(console.log("点击随从 - 联机模式:",n,"玩家索引:",t,"随从ID:",a,"随从数据:",o?"找到":"未找到"),o&&o.isDefending){i.stopPropagation();const d=n?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=oe(this.state,{type:"TOGGLE_DEFENSE",playerId:d,cardId:o.id}),this.render(),n){const p=this.state.online.currentRoom;p&&(ge(async()=>{const{broadcastGameAction:c}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:c}},__vite__mapDeps([0,1])).then(({broadcastGameAction:c})=>{c(p.id,{type:"STATE_SYNC",playerId:d}).catch(console.error)}),this.broadcastGameState())}return}if(o&&r(o)){if(this.selectedAttackingMinion?.id===a){this.selectedAttackingMinion=null,this.syncSelectionToDOM();return}this.selectedAttackingMinion=o,this.selectedHandCard=null,this.syncSelectionToDOM()}}),s.addEventListener("mousedown",i=>{const n=i;if(this.state.waitingForNextPlayer||this.isAttacking)return;const l=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,d=this.state.players[l].board.find(p=>p.id===a);if(d&&(r(d)||d.isDefending)){i.preventDefault(),this.attackingMinion=d,this.updateDefenseOverlayDOM(d);const p=s.getBoundingClientRect();this.attackArrowStartX=p.left+p.width/2,this.attackArrowStartY=p.top+p.height/2,this.showAttackArrow(this.attackArrowStartX,this.attackArrowStartY,n.clientX,n.clientY)}})})}showAttackArrow(e,s,a,r){const i=document.getElementById("attack-arrow"),n=document.getElementById("arrow-line");i&&n&&(i.style.display="block",n.setAttribute("x1",String(e)),n.setAttribute("y1",String(s)),n.setAttribute("x2",String(a)),n.setAttribute("y2",String(r)))}hideAttackArrow(){const e=document.getElementById("attack-arrow");e&&(e.style.display="none")}updateAttackArrow(e,s){const a=document.getElementById("arrow-line");a&&(a.setAttribute("x2",String(e)),a.setAttribute("y2",String(s)))}showTargetArrow(e,s,a,r,i){const n=document.getElementById("target-arrow"),t=document.getElementById("target-arrow-line"),l=document.getElementById("target-arrowhead"),d=i||this.targetArrowColor;if(n&&t&&l){n.style.display="block",t.setAttribute("x1",String(e)),t.setAttribute("y1",String(s)),t.setAttribute("x2",String(a)),t.setAttribute("y2",String(r)),t.setAttribute("stroke",d);const p=l.querySelector("polygon");p&&p.setAttribute("fill",d)}}hideTargetArrow(){const e=document.getElementById("target-arrow");e&&(e.style.display="none")}updateTargetArrow(e,s){const a=document.getElementById("target-arrow-line");a&&(a.setAttribute("x2",String(e)),a.setAttribute("y2",String(s)))}setupHandDrag(){this.globalListenersAttached||(document.addEventListener("mousemove",this.boundMouseMove),document.addEventListener("mouseup",this.boundMouseUp),this.globalListenersAttached=!0);const e=document.querySelectorAll(".hand-card-wrapper"),s=document.getElementById("drag-card");e.forEach(a=>{a.addEventListener("mouseenter",()=>{a.classList.add("hovered")}),a.addEventListener("mouseleave",()=>{a.classList.remove("hovered")}),a.addEventListener("click",r=>{if(this.state.waitingForNextPlayer||this.isAttacking)return;let i;if(this._pendingClickCardId!==void 0?(i=this._pendingClickCardId,this._pendingClickCardId=void 0):i=parseInt(a.dataset.cardId),isNaN(i))return;const t=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,l=this.state.players[t],o=l.hand.find(d=>d.id===i);if(o){if(this.selectedHandCard?.id===o.id){this.selectedHandCard=null,this.syncSelectionToDOM();return}l.energy>=o.cost&&(this.selectedHandCard=o,this.selectedAttackingMinion=null,this.syncSelectionToDOM())}}),a.addEventListener("mousedown",r=>{const i=r;if(this.state.waitingForNextPlayer||this.isAttacking)return;const n=parseInt(a.dataset.cardId);if(isNaN(n))return;const l=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,o=this.state.players[l].hand.find(d=>d.id===n);if(o&&(this.handDragStartX=i.clientX,this.handDragStartY=i.clientY,this.isHandDragStarted=!1,this.draggedCard=o,this.dragElement=a,s)){const d=o.type==="spell",p=this.getCardBgStyle(o);s.innerHTML=`
            <div class="drag-card-inner ${d?"spell-card":""}" style="${p}">
              <div class="card-top-row">
                <div class="card-cost-diamond">
                  <span>${o.cost}</span>
                </div>
                <div class="card-name">${o.name}</div>
              </div>
              ${o.keywords.length>0?this.renderKeywords(o.keywords,o.armorValue):""}
              ${(()=>{const c=this.getCardFullEffectText(o);return c?`<div class="card-effect-text">${c}</div>`:""})()}
              ${d?`
                <div class="card-bottom-row" style="justify-content: center; align-items: center; height: 24px;">

                </div>
              `:`
                <div class="card-bottom-row">
                  <div class="stat-attack">${o.attack}</div>
                  <div class="stat-health">${o.health}</div>
                </div>
              `}
            </div>
          `,s.style.display="none",s.style.left=`${i.clientX-60}px`,s.style.top=`${i.clientY-80}px`}}),a.addEventListener("touchstart",r=>{const i=r;if(this.state.waitingForNextPlayer||this.isAttacking)return;const n=parseInt(a.dataset.cardId);if(isNaN(n))return;const l=this.state.phase==="onlineBattle"?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,o=this.state.players[l].hand.find(d=>d.id===n);if(o&&(this.handDragStartX=i.touches[0].clientX,this.handDragStartY=i.touches[0].clientY,this.isHandDragStarted=!1,this.draggedCard=o,this.dragElement=a,s)){const d=o.type==="spell",p=this.getCardBgStyle(o);s.innerHTML=`
            <div class="drag-card-inner ${d?"spell-card":""}" style="${p}">
              <div class="card-top-row">
                <div class="card-cost-diamond">
                  <span>${o.cost}</span>
                </div>
                <div class="card-name">${o.name}</div>
              </div>
              ${o.keywords.length>0?this.renderKeywords(o.keywords,o.armorValue):""}
              ${(()=>{const c=this.getCardFullEffectText(o);return c?`<div class="card-effect-text">${c}</div>`:""})()}
              ${d?`
                <div class="card-bottom-row" style="justify-content: center; align-items: center; height: 24px;">

                </div>
              `:`
                <div class="card-bottom-row">
                  <div class="stat-attack">${o.attack}</div>
                  <div class="stat-health">${o.health}</div>
                </div>
              `}
            </div>
          `,s.style.display="none",s.style.left=`${this.handDragStartX-60}px`,s.style.top=`${this.handDragStartY-80}px`}},{passive:!0})})}handleMouseMove(e){if(this.attackingMinion){this.showAttackArrow(this.attackArrowStartX,this.attackArrowStartY,e.clientX,e.clientY);return}if(this.selectingTargetForCard||this.selectingTargetForSkill){this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,e.clientX,e.clientY,this.targetArrowColor);return}const s=document.getElementById("drag-card"),a=document.getElementById("play-area");if(this.draggedCard&&s&&this.dragElement){const r=e.clientX-this.handDragStartX,i=e.clientY-this.handDragStartY;if(!this.isHandDragStarted&&(Math.abs(r)>5||Math.abs(i)>5)&&(this.isHandDragStarted=!0,this.dragElement.classList.add("dragging"),s.style.display="block"),s.style.left=`${e.clientX-60}px`,s.style.top=`${e.clientY-80}px`,a){const n=a.getBoundingClientRect();e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom?a.classList.add("drop-target"):a.classList.remove("drop-target")}}}async handleMouseUp(e){if(this.attackingMinion&&!this.isAttacking){this.hideAttackArrow();const r=e.target;if(this.attackingMinion.isDefending&&!this.attackingMinion.keywords.some(o=>o.name==="机动")){if(r.closest('[data-own-hero="true"]')){const d=this.state.phase==="onlineBattle",p=d?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=oe(this.state,{type:"TOGGLE_DEFENSE",playerId:p,cardId:this.attackingMinion.id}),this.attackingMinion=null,this.hideDefenseOverlayDOM(),this.render(),d){const c=this.state.online.currentRoom;c&&(ge(async()=>{const{broadcastGameAction:h}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:h}},__vite__mapDeps([0,1])).then(({broadcastGameAction:h})=>{h(c.id,{type:"STATE_SYNC",playerId:p}).catch(console.error)}),this.broadcastGameState())}return}this.attackingMinion=null,this.hideDefenseOverlayDOM();return}const i=r.closest(".top-board .minion-card"),n=r.closest(".top-player-area"),t=this.state.phase==="onlineBattle",l=t?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(console.log("handleMouseUp - 攻击随从模式 - 联机模式:",t,"视角索引:",this.onlineViewPlayerIndex,"攻击者ID:",l),i){const o=parseInt(i.dataset.minionId),d=parseInt(i.dataset.playerId),p=this.attackingMinion;this.attackingMinion=null,this.hideDefenseOverlayDOM(),this.isAttacking=!0,this.playWoodSound(),this.attackAnimation(p.id,!1,p.attack).then(async()=>{if(this.state=oe(this.state,{type:"ATTACK",attackerPlayerId:l,attackerCardId:p.id,targetPlayerId:d,targetCardId:o}),this.isAttacking=!1,this.state.newlyDrawnCardIds.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(),50)):this.render(),t){const c=this.state.online.currentRoom;if(c){const{broadcastGameAction:h}=await ge(async()=>{const{broadcastGameAction:f}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:f}},__vite__mapDeps([0,1]));h(c.id,{type:"ATTACK_MINION",attackerPlayerId:this.state.online.playerId,attackerCardId:p.id,targetPlayerId:d,targetCardId:o}).catch(console.error)}}});return}else if(n&&!r.closest(".minion-card")){const o=t?2-this.onlineViewPlayerIndex:this.state.currentPlayerId===1?2:1,d=this.attackingMinion;this.attackingMinion=null,this.hideDefenseOverlayDOM(),this.isAttacking=!0,this.savePotentialDeathMinions(d.id),this.playWoodSound(),this.attackAnimation(d.id,!0,d.attack).then(async()=>{if(this.state=oe(this.state,{type:"ATTACK_HERO",attackerPlayerId:l,attackerCardId:d.id,targetPlayerId:o}),this.isAttacking=!1,this.state.newlyDrawnCardIds.length>0?(this.render(),setTimeout(()=>this.playDrawCardAnimation(),50)):this.render(),t){const p=this.state.online.currentRoom;if(p){const{broadcastGameAction:c}=await ge(async()=>{const{broadcastGameAction:h}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:h}},__vite__mapDeps([0,1]));c(p.id,{type:"ATTACK_HERO",attackerPlayerId:this.state.online.playerId,attackerCardId:d.id,targetPlayerId:o}).catch(console.error)}}});return}else if(r.closest('.bottom-player-area [data-own-hero="true"]')){const o=this.state.phase==="onlineBattle",d=o?this.onlineViewPlayerIndex:this.state.currentPlayerId-1,c=this.state.players[d].board.find(h=>h.id===this.attackingMinion.id);if(this.attackingMinion=null,this.hideDefenseOverlayDOM(),c){const h=o?this.onlineViewPlayerIndex+1:this.state.currentPlayerId;if(this.state=oe(this.state,{type:"TOGGLE_DEFENSE",playerId:h,cardId:c.id}),this.render(),o){const f=this.state.online.currentRoom;f&&(ge(async()=>{const{broadcastGameAction:u}=await import("./online-fGHm1H1u.js");return{broadcastGameAction:u}},__vite__mapDeps([0,1])).then(({broadcastGameAction:u})=>{u(f.id,{type:"STATE_SYNC",playerId:h}).catch(console.error)}),this.broadcastGameState())}}return}this.attackingMinion=null,this.hideDefenseOverlayDOM();return}if(this.selectingTargetForCard&&this.selectingTargetEffect){this.hideTargetArrow();const r=e.target,i=r.closest(".minion-card"),n=r.closest(".top-player-area"),t=r.closest(".bottom-player-area");if(i){const l=parseInt(i.dataset.minionId),o=parseInt(i.dataset.playerId);this.executeCardWithTarget(this.selectingTargetForCard,this.selectingTargetEffect,o,l);return}else if(n&&!r.closest(".minion-card")){const l=this.selectingTargetEffect?.targets||[];if(l.includes("选择目标")&&!l.includes("选择随从")){const o=this.state.currentPlayerId===1?2:1;this.executeCardEffectOnHero(this.selectingTargetForCard,this.selectingTargetEffect,o);return}}else if(t&&!r.closest(".minion-card")){if(this.selectingTargetEffect?.effect==="治愈"&&this.selectingTargetForCard&&this.selectingTargetEffect){this.executeCardEffectOnHero(this.selectingTargetForCard,this.selectingTargetEffect,this.state.currentPlayerId);return}if(this.selectingTargetMinionId){const l=document.querySelector(`[data-minion-id="${this.selectingTargetMinionId}"]`);if(l){const o=l.getBoundingClientRect();this.showTargetArrow(o.left+o.width/2,o.top+o.height/2,e.clientX,e.clientY,"blue")}}else{const l=document.querySelector(".bottom-player-area [data-player-hp]");if(l){const o=l.getBoundingClientRect();this.showTargetArrow(o.left+o.width/2,o.top+o.height/2,e.clientX,e.clientY,"purple")}}return}if(this.selectingTargetMinionId){const l=document.querySelector(`[data-minion-id="${this.selectingTargetMinionId}"]`);if(l){const o=l.getBoundingClientRect();this.showTargetArrow(o.left+o.width/2,o.top+o.height/2,e.clientX,e.clientY,"blue")}}else{const l=document.querySelector(".bottom-player-area [data-player-hp]");if(l){const o=l.getBoundingClientRect();this.showTargetArrow(o.left+o.width/2,o.top+o.height/2,e.clientX,e.clientY,"purple")}}return}if(this.selectingTargetForSkill&&this.selectingTargetEffect){this.hideTargetArrow();const r=this.selectingTargetForSkill.skillIndex,i=e.target,n=i.closest(".minion-card"),t=i.closest(".top-player-area"),l=i.closest(".bottom-player-area");if(n){const d=parseInt(n.dataset.minionId),p=parseInt(n.dataset.playerId);this.executeHeroSkillWithTarget(r,p,d);return}else if(t&&!i.closest(".minion-card")){const d=this.selectingTargetEffect?.targets||[];if(d.includes("选择目标")&&!d.includes("选择随从")){const p=this.state.currentPlayerId===1?2:1;this.executeHeroSkillOnHero(r,p);return}}else if(l&&!i.closest(".minion-card")){if(this.selectingTargetEffect?.effect==="治愈"){this.executeHeroSkillOnHero(r,this.state.currentPlayerId);return}const d=document.querySelector(".bottom-player-area [data-player-hp]");if(d){const p=d.getBoundingClientRect();this.showTargetArrow(p.left+p.width/2,p.top+p.height/2,e.clientX,e.clientY,"blue")}return}const o=document.querySelector(".bottom-player-area [data-player-hp]");if(o){const d=o.getBoundingClientRect();this.showTargetArrow(d.left+d.width/2,d.top+d.height/2,e.clientX,e.clientY,"blue")}return}const s=document.getElementById("drag-card"),a=document.getElementById("play-area");if(this.draggedCard&&!this.isHandDragStarted){this._pendingClickCardId=this.draggedCard.id,s&&(s.style.display="none"),a&&a.classList.remove("drop-target"),this.draggedCard=null,this.dragElement=null;return}if(this.draggedCard&&s&&a){const r=a.getBoundingClientRect(),i=this.state.players[this.state.currentPlayerId-1];if(e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom&&i.energy>=this.draggedCard.cost){const t=(this.draggedCard.effects||(this.draggedCard.effect?[this.draggedCard.effect]:[])).filter(o=>this.momentsInclude(o.moment,"打出时")&&o.effect);let l=!1;for(const o of t){const d=o.targets||[];if(d.includes("选择目标")||d.includes("选择随从")){l=!0;const p=this.draggedCard.type==="spell";p||(this.state=oe(this.state,{type:"PLAY_CARD",playerId:this.state.currentPlayerId,cardId:this.draggedCard.id}));const c=this.state.players[this.state.currentPlayerId-1].board,h=c[c.length-1];this.selectingTargetForCard=this.draggedCard,this.selectingTargetEffect=o,this.selectingTargetMinionId=p?null:h?h.id:null,this.targetArrowColor=p?"#9b59b6":"#4a90d9",s.style.display="none",a.classList.remove("drop-target"),this.dragElement&&this.dragElement.classList.remove("dragging"),this.draggedCard=null,this.dragElement=null,this.isHandDragStarted=!1,this.render(),setTimeout(()=>{if(p){const f=document.querySelector(".bottom-player-area [data-player-hp]");if(f){const u=f.getBoundingClientRect();this.targetArrowStartX=u.left+u.width/2,this.targetArrowStartY=u.top+u.height/2,this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,"purple")}}else if(this.selectingTargetMinionId){const f=document.querySelector(`[data-minion-id="${this.selectingTargetMinionId}"]`);if(f){const u=f.getBoundingClientRect();this.targetArrowStartX=u.left+u.width/2,this.targetArrowStartY=u.top+u.height/2,this.showTargetArrow(this.targetArrowStartX,this.targetArrowStartY,this.targetArrowStartX,this.targetArrowStartY,"blue")}}},50);return}}l||(this.playCardDirectly(this.draggedCard),s.style.display="none",a.classList.remove("drop-target"),this.dragElement&&this.dragElement.classList.remove("dragging"),this.draggedCard=null,this.dragElement=null);return}else this.render();s&&(s.style.display="none"),a&&a.classList.remove("drop-target"),this.dragElement&&this.dragElement.classList.remove("dragging"),this.draggedCard=null,this.dragElement=null}else s&&(s.style.display="none"),a&&a.classList.remove("drop-target"),this.dragElement&&this.dragElement.classList.remove("dragging"),this.draggedCard=null,this.dragElement=null}getCardColor(e){switch(e){case"minion":return"#7cb87c";case"spell":return"#6fa8dc";case"weapon":return"#d4a574";default:return"#a08060"}}getCardColorDark(e){switch(e){case"minion":return"#5a9a5a";case"spell":return"#4a90d9";case"weapon":return"#c4956a";default:return"#8b7355"}}getCardBorderColor(e){switch(e){case"minion":return"#4a8a4a";case"spell":return"#3d85c6";case"weapon":return"#b8956a";default:return"#a08060"}}};De.MALE_AUDIO_FILES={greeting:"/male_greeting.m4a",apology:"/male_apology.m4a",taunt:"/male_taunt.wav",exclamation:"/male_exclamation.wav",pity:"/male_pity.wav"},De.FEMALE_AUDIO_FILES={greeting:"/female_greeting.wav",apology:"/female_apology.wav",taunt:"/female_taunt.wav",exclamation:"/female_exclamation.wav",pity:"/female_pity.wav",flirt:"/flirt_audio.wav"};let kt=De;new kt;
