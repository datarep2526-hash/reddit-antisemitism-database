(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t){let n=[e.Screenshot,e[`Second Screenshot`],e[`Third Screenshot`]].filter(e=>e!==``);return{id:t,subreddit:e.Subreddit,url:e.URL,contentType:e[`Content Type`],screenshots:n,tags:e.Tags,tosViolations:e[`Reddit TOS Violations`],contentAvailability:e[`Content Availability`],contentResponse:e[`Content Response`],contentAwards:e[`Content Awards`]}}async function t(e){let t=await fetch(`/data/instances/${e}.json`);if(!t.ok)throw Error(`Error: ${t.statusText}`);return t.json()}function n(e,t,n,i,a=!1){let o=i.map(e=>`<span>${r(e)}</span>`),s=n.map(e=>`<span>${r(e)}</span>`),c=`<a href='../instance/?id=${e}' class='result-card loading'>
		<div class='card-image'>
			<img src='../data/pictures/${a?`big`:`small`}/${e}_0.webp'>
		</div>
		<div class='card-info'>
			<div>
				<p class='subreddit'>
					r/${t}
				</p>
			</div>
			<div>
				<div class='meta tags'>${s.join(``)}</div>
				<div class='meta tos'>${o.join(``)}</div>
			</div>
		</div>
	</a>`,l=document.createElement(`template`);l.innerHTML=c;let u=l.content.firstElementChild,d=u.querySelector(`img`);return d.addEventListener(`load`,()=>{u.classList.remove(`loading`)}),d.addEventListener(`error`,()=>{u.classList.remove(`loading`)}),l.content.firstElementChild}function r(e){switch(e){case`Claiming Jews/Israel Exaggerate the Holocaust`:return`Claims of Holocaust Exaggeration`;case`Holding Jews Collectively Responsible for Israel's Actions`:return`Collectively Blaming Jews for Israel`;case`Classic Antisemitism involving Israel`:return`Israel-Related Antisemitism`;case`Stereotypical Tropes and Conspiracies`:return`Stereotypes & Conspiracies`;case`Threatening glorifying promoting or inciting violence`:return`Promoting violence`;case`Terrorist content or pro-terror propaganda`:return`Terror propaganda`}return e.replace(` and`,` &`)}export{e as n,n as r,t};