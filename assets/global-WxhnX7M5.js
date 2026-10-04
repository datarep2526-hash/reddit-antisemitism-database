(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new URL(`../`,import.meta.url).href;function t(e,t){let n=[e.Screenshot,e[`Second Screenshot`],e[`Third Screenshot`]].filter(e=>e!==``);return{id:t,subreddit:e.Subreddit,url:e.URL,contentType:e[`Content Type`],screenshots:n,tags:e.Tags,tosViolations:e[`Reddit TOS Violations`],contentAvailability:e[`Content Availability`],contentResponse:e[`Content Response`],contentAwards:e[`Content Awards`]}}async function n(t){let n=await fetch(`${e}data/instances/${t}.json`);if(!n.ok)throw Error(`Error: ${n.statusText}`);return n.json()}function r(t,n,r,a,o=!1){let s=a.map(e=>`<span>${i(e)}</span>`),c=r.map(e=>`<span>${i(e)}</span>`),l=`<a href='${e}instance/?id=${t}' class='result-card loading'>
		<div class='card-image'>
			<img src='${e}data/pictures/${o?`big`:`small`}/${t}_0.webp'>
		</div>
		<div class='card-info'>
			<div>
				<p class='subreddit'>
					r/${n}
				</p>
			</div>
			<div>
				<div class='meta tags'>${c.join(``)}</div>
				<div class='meta tos'>${s.join(``)}</div>
			</div>
		</div>
	</a>`,u=document.createElement(`template`);u.innerHTML=l;let d=u.content.firstElementChild,f=d.querySelector(`img`);return f.addEventListener(`load`,()=>{d.classList.remove(`loading`)}),f.addEventListener(`error`,()=>{d.classList.remove(`loading`)}),u.content.firstElementChild}function i(e){switch(e){case`Claiming Jews/Israel Exaggerate the Holocaust`:return`Claims of Holocaust Exaggeration`;case`Holding Jews Collectively Responsible for Israel's Actions`:return`Collectively Blaming Jews for Israel`;case`Classic Antisemitism involving Israel`:return`Israel-Related Antisemitism`;case`Stereotypical Tropes and Conspiracies`:return`Stereotypes & Conspiracies`;case`Threatening glorifying promoting or inciting violence`:return`Promoting violence`;case`Terrorist content or pro-terror propaganda`:return`Terror propaganda`}return e.replace(` and`,` &`)}export{t as n,r,n as t};