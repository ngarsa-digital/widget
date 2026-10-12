var NgarsaWidget=(function(exports){'use strict';var y=`<svg viewBox="0 0 90 90" fill="currentColor" width="32" height="32" aria-hidden="true" focusable="false">
  <path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522 c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982 c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537 c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938 c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537 c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333 c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882 c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977 c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344 c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223 C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z" />
</svg>`,M=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="10"></circle>
  <line x1="15" y1="9" x2="9" y2="15"></line>
  <line x1="9" y1="9" x2="15" y2="15"></line>
</svg>`,z=`<svg viewBox="0 0 20 18" width="20" height="18" fill="currentColor" aria-hidden="true" focusable="false">
  <path d="M0 0 L0 7.813 L16 9 L0 10.188 L0 18 L20 9 L0 0 Z"></path>
</svg>`;var H='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" opacity="0.06"><path d="M10 10h10v10H10zM40 30h10v10H40zM20 40h10v10H20z" fill="%23000"/></svg>';var $={primaryColor:"#095e54",primaryTextColor:"#ffffff",bubbleColor:"#ffffff",bubbleIconColor:"#4fce5d",onlineBadgeColor:"#4ad504",backgroundColor:"#ffffff",chatBubbleBackground:"#ffffff",chatBubbleTextColor:"#111111",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',zIndex:999999,position:"bottom-right",offsetBottom:"20px",offsetSide:"20px"},w={name:"Ngarsa Official",statusText:"Typically replies within a day",welcomeText:"Hi there \u{1F44B}, how can we help you?",inputPlaceholder:"Type a message...",sendButtonAriaLabel:"Send message to WhatsApp",closeButtonAriaLabel:"Close WhatsApp chat widget",openButtonAriaLabel:"Open WhatsApp chat"},A={avatarUrl:"",hideAvatar:false,bubbleIconUrl:"",backgroundPatternUrl:H,hideBackgroundPattern:false};function T(a,e){let t=a.position==="bottom-left";return `
#${e} {
  --ngarsa-primary: ${a.primaryColor};
  --ngarsa-primary-text: ${a.primaryTextColor};
  --ngarsa-bubble-bg: ${a.bubbleColor};
  --ngarsa-bubble-icon: ${a.bubbleIconColor};
  --ngarsa-online-badge: ${a.onlineBadgeColor};
  --ngarsa-bg: ${a.backgroundColor};
  --ngarsa-chat-bg: ${a.chatBubbleBackground};
  --ngarsa-chat-text: ${a.chatBubbleTextColor};
  --ngarsa-font: ${a.fontFamily};
  --ngarsa-zindex: ${a.zIndex};
  --ngarsa-offset-bottom: ${a.offsetBottom};
  --ngarsa-offset-side: ${a.offsetSide};

  position: fixed;
  bottom: var(--ngarsa-offset-bottom);
  ${t?"left: var(--ngarsa-offset-side); right: auto;":"right: var(--ngarsa-offset-side); left: auto;"}
  z-index: var(--ngarsa-zindex);
  font-family: var(--ngarsa-font);
  line-height: 1.4;
  box-sizing: border-box;
}

#${e} *, #${e} *::before, #${e} *::after {
  box-sizing: border-box;
}

#${e} .ngarsa-bubble {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--ngarsa-bubble-bg);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: none;
  padding: 0;
  color: var(--ngarsa-bubble-icon);
  overflow: visible;
}

#${e} .ngarsa-bubble-img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

#${e} .ngarsa-bubble:hover {
  transform: scale(1.06);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 18px;
}

#${e} .ngarsa-bubble:focus-visible {
  outline: 2px solid var(--ngarsa-primary);
  outline-offset: 3px;
}

#${e} .ngarsa-bubble-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 12px;
  height: 12px;
  background-color: #ff3b30;
  border: 2px solid #ffffff;
  border-radius: 50%;
}

#${e} .ngarsa-panel {
  display: none;
  flex-direction: column;
  width: 360px;
  max-width: calc(100vw - 32px);
  background-color: var(--ngarsa-bg);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 12px 28px 0px;
  border-radius: 12px;
  overflow: hidden;
  position: absolute;
  bottom: 74px;
  ${t?"left: 0;":"right: 0;"}
  transform-origin: ${t?"bottom left":"bottom right"};
  animation: ngarsa-fade-in 0.25s ease-out forwards;
}

#${e} .ngarsa-panel.is-open {
  display: flex;
}

@keyframes ngarsa-fade-in {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

#${e} .ngarsa-header {
  background: var(--ngarsa-primary);
  color: var(--ngarsa-primary-text);
  padding: 18px 16px;
  display: flex;
  align-items: center;
  position: relative;
}

#${e} .ngarsa-close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  color: var(--ngarsa-primary-text);
  opacity: 0.8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 4px;
  transition: opacity 0.2s ease;
}

#${e} .ngarsa-close-btn:hover {
  opacity: 1;
}

#${e} .ngarsa-close-btn:focus-visible {
  outline: 2px solid #ffffff;
}

#${e} .ngarsa-avatar-container {
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: visible;
  flex-shrink: 0;
  margin-right: 12px;
}

#${e} .ngarsa-avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

#${e} .ngarsa-online-dot {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--ngarsa-online-badge);
  border: 2px solid var(--ngarsa-primary);
}

#${e} .ngarsa-header-meta {
  display: flex;
  flex-direction: column;
}

#${e} .ngarsa-name {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
}

#${e} .ngarsa-status {
  font-size: 13px;
  opacity: 0.88;
  margin-top: 2px;
}

#${e} .ngarsa-body {
  background-color: #e5ddd5;
  padding: 20px 16px;
  min-height: 180px;
  position: relative;
}

#${e} .ngarsa-body-bg {
  position: absolute;
  inset: 0;
  opacity: 0.08;
  pointer-events: none;
  background-repeat: repeat;
}

#${e} .ngarsa-bubble-msg {
  position: relative;
  z-index: 2;
  background-color: var(--ngarsa-chat-bg);
  color: var(--ngarsa-chat-text);
  padding: 8px 12px;
  border-radius: 0 8px 8px 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 2px;
  max-width: 86%;
  font-size: 14px;
  line-height: 1.35;
}

#${e} .ngarsa-bubble-tail {
  position: absolute;
  top: 0;
  left: -8px;
  width: 0;
  height: 0;
  border-top: 0 solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid var(--ngarsa-chat-bg);
}

#${e} .ngarsa-bubble-name {
  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 2px;
}

#${e} .ngarsa-bubble-text {
  word-break: break-word;
}

#${e} .ngarsa-bubble-time {
  font-size: 11px;
  color: rgba(0, 0, 0, 0.45);
  text-align: right;
  margin-top: 4px;
}

#${e} .ngarsa-footer {
  padding: 10px 12px;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  gap: 8px;
}

#${e} .ngarsa-input {
  flex: 1;
  border: 1px solid #d1d7db;
  border-radius: 8px;
  padding: 10px 12px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.3;
  resize: none;
  height: 42px;
  outline: none;
  background: #ffffff;
  color: #111111;
  transition: border-color 0.2s ease;
}

#${e} .ngarsa-input:focus {
  border-color: var(--ngarsa-primary);
}

#${e} .ngarsa-send-btn {
  background: transparent;
  border: none;
  color: #54656f;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

#${e} .ngarsa-send-btn:hover {
  color: var(--ngarsa-primary);
}

#${e} .ngarsa-send-btn:focus-visible {
  outline: 2px solid var(--ngarsa-primary);
}

@media (max-width: 480px) {
  #${e} .ngarsa-panel {
    width: calc(100vw - 32px);
    ${t?"left: 0;":"right: 0;"}
  }
}
`}function C(a="Ngarsa",e="#01472e",t="#fefae0"){let r=(a||"").trim().split(/\s+/).filter(Boolean),i="N";r.length>=2?i=(r[0][0]+r[1][0]).toUpperCase():r.length===1&&r[0].length>0&&(i=r[0].substring(0,Math.min(2,r[0].length)).toUpperCase());let m=e.startsWith("#")?e:`#${e}`,n=t.startsWith("#")?t:`#${t}`,g=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="32" fill="${m}"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" fill="${n}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="1">${i}</text></svg>`;return typeof btoa=="function"?`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(g)))}`:`data:image/svg+xml;utf8,${encodeURIComponent(g)}`}var G=0;function O(a){if(typeof window>"u"||typeof document>"u")return {open:()=>{},close:()=>{},toggle:()=>{},isOpen:()=>false,destroy:()=>{},updateOptions:()=>{},getElement:()=>null};let e=`ngarsa-widget-${++G}`,t={...a},u={...$,...t.theme},r={...w,...t.copy},i={...A,...t.assets},m=()=>i.avatarUrl||C(r.name,u.primaryColor,u.primaryTextColor),n=document.createElement("div");n.id=e,n.setAttribute("role","region"),n.setAttribute("aria-label","WhatsApp Support Widget");let g=document.createElement("style");g.textContent=T(u,e),n.appendChild(g);let D=()=>{let o=new Date,c=o.getHours().toString().padStart(2,"0"),s=o.getMinutes().toString().padStart(2,"0");return `${c}.${s}`},W=`
    <div class="ngarsa-avatar-container" style="${i.hideAvatar?"display: none;":""}">
      <img class="ngarsa-avatar-img" src="${m()}" alt="${r.name} Avatar" />
      <span class="ngarsa-online-dot"></span>
    </div>
  `,R=i.bubbleIconUrl?`<img class="ngarsa-bubble-img" src="${i.bubbleIconUrl}" alt="${r.name}" />`:y,q=!i.hideBackgroundPattern&&i.backgroundPatternUrl?`style="background-image: url('${i.backgroundPatternUrl}');"`:"";n.insertAdjacentHTML("beforeend",`
    <div class="ngarsa-panel" role="dialog" aria-modal="true" aria-label="${r.name} Chat Panel">
      <div class="ngarsa-header">
        ${W}
        <div class="ngarsa-header-meta">
          <div class="ngarsa-name">${r.name}</div>
          <div class="ngarsa-status">${r.statusText}</div>
        </div>
        <button type="button" class="ngarsa-close-btn" aria-label="${r.closeButtonAriaLabel}">
          ${M}
        </button>
      </div>
      <div class="ngarsa-body">
        <div class="ngarsa-body-bg" ${q}></div>
        <div class="ngarsa-bubble-msg">
          <span class="ngarsa-bubble-tail"></span>
          <div class="ngarsa-bubble-name">${r.name}</div>
          <div class="ngarsa-bubble-text">${r.welcomeText}</div>
          <div class="ngarsa-bubble-time">${D()}</div>
        </div>
      </div>
      <div class="ngarsa-footer">
        <textarea
          class="ngarsa-input"
          placeholder="${r.inputPlaceholder}"
          rows="1"
          aria-label="${r.inputPlaceholder}"
        ></textarea>
        <button type="button" class="ngarsa-send-btn" aria-label="${r.sendButtonAriaLabel}">
          ${z}
        </button>
      </div>
    </div>
    <button type="button" class="ngarsa-bubble" aria-label="${r.openButtonAriaLabel}">
      ${R}
      <span class="ngarsa-bubble-badge" aria-hidden="true"></span>
    </button>
  `),document.body.appendChild(n);let x=n.querySelector(".ngarsa-panel"),d=n.querySelector(".ngarsa-bubble"),F=n.querySelector(".ngarsa-close-btn"),V=n.querySelector(".ngarsa-send-btn"),b=n.querySelector(".ngarsa-input"),l=!!t.defaultOpen;l&&x.classList.add("is-open");let E=()=>{l||(l=true,x.classList.add("is-open"),b?.focus(),t.onOpen?.());},f=()=>{l&&(l=false,x.classList.remove("is-open"),d?.focus(),t.onClose?.());},S=()=>{l?f():E();},j=o=>o.replace(/[^\d]/g,""),L=()=>{let o=b.value.trim(),c=j(t.phoneNumber),s=encodeURIComponent(o),p=`https://wa.me/${c}${s?`?text=${s}`:""}`;t.onSend?.(o),window.open(p,"_blank","noopener,noreferrer");};d.addEventListener("click",S),F.addEventListener("click",f),V.addEventListener("click",L),b.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey?(o.preventDefault(),L()):o.key==="Escape"&&f();});let k=o=>{o.key==="Escape"&&l&&f();};return document.addEventListener("keydown",k),{open:E,close:f,toggle:S,isOpen:()=>l,destroy:()=>{document.removeEventListener("keydown",k),n.remove();},updateOptions:o=>{t={...t,...o,theme:{...t.theme,...o.theme},copy:{...t.copy,...o.copy},assets:{...t.assets,...o.assets}};let c={...$,...t.theme};g.textContent=T(c,e);let s={...w,...t.copy},p={...A,...t.assets},N=n.querySelector(".ngarsa-name"),B=n.querySelector(".ngarsa-status"),U=n.querySelector(".ngarsa-bubble-text"),I=n.querySelector(".ngarsa-bubble-name"),h=n.querySelector(".ngarsa-avatar-img"),_=n.querySelector(".ngarsa-avatar-container");if(N&&(N.textContent=s.name),I&&(I.textContent=s.name),B&&(B.textContent=s.statusText),U&&(U.textContent=s.welcomeText),b&&(b.placeholder=s.inputPlaceholder),h){let v=p.avatarUrl||C(s.name,c.primaryColor,c.primaryTextColor);h.src=v,h.alt=`${s.name} Avatar`;}if(_&&(_.style.display=p.hideAvatar?"none":""),d){let v=p.bubbleIconUrl?`<img class="ngarsa-bubble-img" src="${p.bubbleIconUrl}" alt="${s.name}" />`:y;d.innerHTML=`
        ${v}
        <span class="ngarsa-bubble-badge" aria-hidden="true"></span>
      `,d.setAttribute("aria-label",s.openButtonAriaLabel);}},getElement:()=>n}}function P(a){return O(a)}if(typeof window<"u"&&typeof document<"u"){let a=document.currentScript;a&&a.dataset.phone&&P({phoneNumber:a.dataset.phone,copy:{name:a.dataset.name,welcomeText:a.dataset.text},theme:{primaryColor:a.dataset.color}});}exports.DEFAULT_ASSETS=A;exports.DEFAULT_COPY=w;exports.DEFAULT_THEME=$;exports.createNgarsaWidget=O;exports.generateAvatar=C;exports.init=P;return exports;})({});//# sourceMappingURL=index.global.js.map
//# sourceMappingURL=index.global.js.map