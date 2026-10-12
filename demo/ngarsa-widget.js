var NgarsaWidget=(function(exports){'use strict';var $=`<svg viewBox="0 0 90 90" fill="currentColor" width="32" height="32" aria-hidden="true" focusable="false">
  <path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522 c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982 c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537 c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938 c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537 c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333 c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882 c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977 c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344 c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223 C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z" />
</svg>`,P=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
  <circle cx="12" cy="12" r="10"></circle>
  <line x1="15" y1="9" x2="9" y2="15"></line>
  <line x1="9" y1="9" x2="15" y2="15"></line>
</svg>`,M=`<svg viewBox="0 0 20 18" width="20" height="18" fill="currentColor" aria-hidden="true" focusable="false">
  <path d="M0 0 L0 7.813 L16 9 L0 10.188 L0 18 L20 9 L0 0 Z"></path>
</svg>`;var z='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" opacity="0.06"><path d="M10 10h10v10H10zM40 30h10v10H40zM20 40h10v10H20z" fill="%23000"/></svg>';var w={primaryColor:"#095e54",primaryTextColor:"#ffffff",bubbleColor:"#ffffff",bubbleIconColor:"#4fce5d",onlineBadgeColor:"#4ad504",backgroundColor:"#ffffff",chatBubbleBackground:"#ffffff",chatBubbleTextColor:"#111111",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',zIndex:999999,position:"bottom-right",offsetBottom:"20px",offsetSide:"20px"},T={name:"Ngarsa Official",statusText:"Typically replies within a day",welcomeText:"Hi there \u{1F44B}, how can we help you?",inputPlaceholder:"Type a message...",sendButtonAriaLabel:"Send message to WhatsApp",closeButtonAriaLabel:"Close WhatsApp chat widget",openButtonAriaLabel:"Open WhatsApp chat"},A={avatarUrl:"",hideAvatar:false,bubbleIconUrl:"",backgroundPatternUrl:z,hideBackgroundPattern:false};function C(t,e){let a=t.position==="bottom-left";return `
#${e} {
  --ngarsa-primary: ${t.primaryColor};
  --ngarsa-primary-text: ${t.primaryTextColor};
  --ngarsa-bubble-bg: ${t.bubbleColor};
  --ngarsa-bubble-icon: ${t.bubbleIconColor};
  --ngarsa-online-badge: ${t.onlineBadgeColor};
  --ngarsa-bg: ${t.backgroundColor};
  --ngarsa-chat-bg: ${t.chatBubbleBackground};
  --ngarsa-chat-text: ${t.chatBubbleTextColor};
  --ngarsa-font: ${t.fontFamily};
  --ngarsa-zindex: ${t.zIndex};
  --ngarsa-offset-bottom: ${t.offsetBottom};
  --ngarsa-offset-side: ${t.offsetSide};

  position: fixed;
  bottom: var(--ngarsa-offset-bottom);
  ${a?"left: var(--ngarsa-offset-side); right: auto;":"right: var(--ngarsa-offset-side); left: auto;"}
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
  ${a?"left: 0;":"right: 0;"}
  transform-origin: ${a?"bottom left":"bottom right"};
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
  overflow: hidden;
}

#${e} .ngarsa-body-bg {
  position: absolute;
  inset: 0;
  opacity: 0.12;
  pointer-events: none;
  background-repeat: repeat;
  background-size: 320px auto;
  background-position: center;
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
    ${a?"left: 0;":"right: 0;"}
  }
}
`}function E(t="Ngarsa",e="#01472e",a="#fefae0"){let n=(t||"").trim().split(/\s+/).filter(Boolean),i="N";n.length>=2?i=(n[0][0]+n[1][0]).toUpperCase():n.length===1&&n[0].length>0&&(i=n[0].substring(0,Math.min(2,n[0].length)).toUpperCase());let x=e.startsWith("#")?e:`#${e}`,r=a.startsWith("#")?a:`#${a}`,d=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="32" fill="${x}"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" fill="${r}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="1">${i}</text></svg>`;return typeof btoa=="function"?`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(d)))}`:`data:image/svg+xml;utf8,${encodeURIComponent(d)}`}var K=0;function H(t){if(typeof window>"u"||typeof document>"u")return {open:()=>{},close:()=>{},toggle:()=>{},isOpen:()=>false,destroy:()=>{},updateOptions:()=>{},getElement:()=>null};let e=`ngarsa-widget-${++K}`,a={...t},m={...w,...a.theme},n={...T,...a.copy},i={...A,...a.assets},x=()=>i.avatarUrl||E(n.name,m.primaryColor,m.primaryTextColor),r=document.createElement("div");r.id=e,r.setAttribute("role","region"),r.setAttribute("aria-label","WhatsApp Support Widget");let d=document.createElement("style");d.textContent=C(m,e),r.appendChild(d);let D=()=>{let o=new Date,g=o.getHours().toString().padStart(2,"0"),s=o.getMinutes().toString().padStart(2,"0");return `${g}.${s}`},R=`
    <div class="ngarsa-avatar-container" style="${i.hideAvatar?"display: none;":""}">
      <img class="ngarsa-avatar-img" src="${x()}" alt="${n.name} Avatar" />
      <span class="ngarsa-online-dot"></span>
    </div>
  `,q=i.bubbleIconUrl?`<img class="ngarsa-bubble-img" src="${i.bubbleIconUrl}" alt="${n.name}" />`:$,F=!i.hideBackgroundPattern&&i.backgroundPatternUrl?`style="background-image: url('${i.backgroundPatternUrl}');"`:"";r.insertAdjacentHTML("beforeend",`
    <div class="ngarsa-panel" role="dialog" aria-modal="true" aria-label="${n.name} Chat Panel">
      <div class="ngarsa-header">
        ${R}
        <div class="ngarsa-header-meta">
          <div class="ngarsa-name">${n.name}</div>
          <div class="ngarsa-status">${n.statusText}</div>
        </div>
        <button type="button" class="ngarsa-close-btn" aria-label="${n.closeButtonAriaLabel}">
          ${P}
        </button>
      </div>
      <div class="ngarsa-body">
        <div class="ngarsa-body-bg" ${F}></div>
        <div class="ngarsa-bubble-msg">
          <span class="ngarsa-bubble-tail"></span>
          <div class="ngarsa-bubble-name">${n.name}</div>
          <div class="ngarsa-bubble-text">${n.welcomeText}</div>
          <div class="ngarsa-bubble-time">${D()}</div>
        </div>
      </div>
      <div class="ngarsa-footer">
        <textarea
          class="ngarsa-input"
          placeholder="${n.inputPlaceholder}"
          rows="1"
          aria-label="${n.inputPlaceholder}"
        ></textarea>
        <button type="button" class="ngarsa-send-btn" aria-label="${n.sendButtonAriaLabel}">
          ${M}
        </button>
      </div>
    </div>
    <button type="button" class="ngarsa-bubble" aria-label="${n.openButtonAriaLabel}">
      ${q}
      <span class="ngarsa-bubble-badge" aria-hidden="true"></span>
    </button>
  `),document.body.appendChild(r);let h=r.querySelector(".ngarsa-panel"),p=r.querySelector(".ngarsa-bubble"),V=r.querySelector(".ngarsa-close-btn"),j=r.querySelector(".ngarsa-send-btn"),b=r.querySelector(".ngarsa-input"),c=!!a.defaultOpen;c&&h.classList.add("is-open");let k=()=>{c||(c=true,h.classList.add("is-open"),b?.focus(),a.onOpen?.());},u=()=>{c&&(c=false,h.classList.remove("is-open"),p?.focus(),a.onClose?.());},S=()=>{c?u():k();},G=o=>o.replace(/[^\d]/g,""),L=()=>{let o=b.value.trim(),g=G(a.phoneNumber),s=encodeURIComponent(o),l=`https://wa.me/${g}${s?`?text=${s}`:""}`;a.onSend?.(o),window.open(l,"_blank","noopener,noreferrer");};p.addEventListener("click",S),V.addEventListener("click",u),j.addEventListener("click",L),b.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey?(o.preventDefault(),L()):o.key==="Escape"&&u();});let N=o=>{o.key==="Escape"&&c&&u();};return document.addEventListener("keydown",N),{open:k,close:u,toggle:S,isOpen:()=>c,destroy:()=>{document.removeEventListener("keydown",N),r.remove();},updateOptions:o=>{a={...a,...o,theme:{...a.theme,...o.theme},copy:{...a.copy,...o.copy},assets:{...a.assets,...o.assets}};let g={...w,...a.theme};d.textContent=C(g,e);let s={...T,...a.copy},l={...A,...a.assets},B=r.querySelector(".ngarsa-name"),I=r.querySelector(".ngarsa-status"),U=r.querySelector(".ngarsa-bubble-text"),_=r.querySelector(".ngarsa-bubble-name"),v=r.querySelector(".ngarsa-avatar-img"),O=r.querySelector(".ngarsa-avatar-container");if(B&&(B.textContent=s.name),_&&(_.textContent=s.name),I&&(I.textContent=s.statusText),U&&(U.textContent=s.welcomeText),b&&(b.placeholder=s.inputPlaceholder),v){let y=l.avatarUrl||E(s.name,g.primaryColor,g.primaryTextColor);v.src=y,v.alt=`${s.name} Avatar`;}O&&(O.style.display=l.hideAvatar?"none":"");let f=r.querySelector(".ngarsa-body-bg");if(f&&(!l.hideBackgroundPattern&&l.backgroundPatternUrl?(f.style.backgroundImage=`url('${l.backgroundPatternUrl}')`,f.style.display=""):(f.style.backgroundImage="none",f.style.display="none")),p){let y=l.bubbleIconUrl?`<img class="ngarsa-bubble-img" src="${l.bubbleIconUrl}" alt="${s.name}" />`:$;p.innerHTML=`
        ${y}
        <span class="ngarsa-bubble-badge" aria-hidden="true"></span>
      `,p.setAttribute("aria-label",s.openButtonAriaLabel);}},getElement:()=>r}}function W(t){return H(t)}if(typeof window<"u"&&typeof document<"u"){let t=document.currentScript;t&&t.dataset.phone&&W({phoneNumber:t.dataset.phone,copy:{name:t.dataset.name,welcomeText:t.dataset.text},theme:{primaryColor:t.dataset.color}});}/**
 * ngarsa-widget - Vector Icons & SVG Assets
 *
 * @author Ngarsa (https://ngarsa.com) & Risyandi (https://risyandi.com)
 * @contact hello@ngarsa.com
 * @license MIT
 */
/**
 * ngarsa-widget - Default Configurations
 *
 * @author Ngarsa (https://ngarsa.com) & Risyandi (https://risyandi.com)
 * @contact hello@ngarsa.com
 * @license MIT
 */
/**
 * ngarsa-widget - Style Sheet Generator
 *
 * @author Ngarsa (https://ngarsa.com) & Risyandi (https://risyandi.com)
 * @contact hello@ngarsa.com
 * @license MIT
 */
/**
 * ngarsa-widget - Dynamic SVG Avatar Generator
 * Generates an accessible, lightweight SVG Data URI avatar based on a name or brand.
 *
 * @author Ngarsa (https://ngarsa.com) & Risyandi (https://risyandi.com)
 * @contact hello@ngarsa.com
 * @license MIT
 */
/**
 * ngarsa-widget - Core Widget Implementation
 *
 * @author Ngarsa (https://ngarsa.com) & Risyandi (https://risyandi.com)
 * @contact hello@ngarsa.com
 * @license MIT
 */
/**
 * ngarsa-widget - Type Definitions
 *
 * @author Ngarsa (https://ngarsa.com) & Risyandi (https://risyandi.com)
 * @contact hello@ngarsa.com
 * @license MIT
 */
/**
 * ngarsa-widget
 * A lightweight, zero-dependency WhatsApp chat widget.
 *
 * @author Ngarsa (https://ngarsa.com) & Risyandi (https://risyandi.com)
 * @contact hello@ngarsa.com
 * @license MIT
 */exports.DEFAULT_ASSETS=A;exports.DEFAULT_COPY=T;exports.DEFAULT_THEME=w;exports.createNgarsaWidget=H;exports.generateAvatar=E;exports.init=W;return exports;})({});//# sourceMappingURL=index.global.js.map
//# sourceMappingURL=index.global.js.map