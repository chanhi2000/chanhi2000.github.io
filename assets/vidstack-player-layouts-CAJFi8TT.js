import{c as p,b as l,u as r,i as O,g as u,f as k,h as rt,e as h,j as V,o as v,k as ct,l as ut,H as F,D as mt,s as N,m as pt,d as Q}from"./vidstack-CVFRE1ST-D-51Zlyp.js";import{e as vt,x as i,c as ht,t as ft,l as H,D as $t,o as gt,L as K}from"./vidstack-G0VUAMv_-C1mJNUNM.js";import{$ as bt}from"./app-B2dKc-qM.js";class yt extends ht{constructor(t){super(t),this.Wh=null,this.La=null,this.Xh=!1,this.Xh=t.type===ft.ATTRIBUTE}render(t){this.Wh!==t&&(this.Wh=t,this.disconnected(),this.isConnected&&this.We());const s=this.Wh();return this.Xh?H(s):s}reconnected(){this.We()}disconnected(){var t;this.Xh||this.setValue(null),(t=this.La)==null||t.call(this),this.La=null}We(){this.Wh&&(this.La=h(this.qe.bind(this)))}qe(){var t;this.setValue((t=this.Wh)==null?void 0:t.call(this))}}const c=vt(yt);function n(e){return c(p(e))}class U{constructor(t,s){this.elements=new Set,this.nd=V(this.Wa.bind(this)),this.Yh=t,this.Mh=s}connect(){this.Wa();const t=new MutationObserver(this.nd);t.observe(this.Yh,{childList:!0}),v(()=>t.disconnect()),v(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(t,s){t instanceof Node?(s.textContent="",s.append(t)):$t(t,s),s.style.display||(s.style.display="contents");const a=s.firstElementChild;if(!a)return;const d=s.getAttribute("data-class");d&&a.classList.add(...d.split(" "))}Wa(){for(const t of this.Yh.querySelectorAll("slot"))t.hasAttribute("name")&&this.elements.add(t);this.Mh(this.elements)}}let kt=0,y="data-slot-id";class X{constructor(t){this.nd=V(this.Wa.bind(this)),this.Yh=t,this.slots=new U(t,this.Wa.bind(this))}connect(){this.slots.connect(),this.Wa();const t=new MutationObserver(this.nd);t.observe(this.Yh,{childList:!0}),v(()=>t.disconnect())}Wa(){for(const t of this.Yh.children){if(t.nodeType!==1)continue;const s=t.getAttribute("slot");if(!s)continue;t.style.display="none";let a=t.getAttribute(y);a||t.setAttribute(y,a=++kt+"");for(const d of this.slots.elements){if(d.getAttribute("name")!==s||d.getAttribute(y)===a)continue;const m=document.importNode(t,!0);s.includes("-icon")&&m.classList.add("vds-icon"),m.style.display="",m.removeAttribute("slot"),this.slots.assign(m,d),d.setAttribute(y,a)}}}}function D({label:e,icon:t}){return i`
    <media-menu-button class="vds-menu-button">
      <slot name="menu-arrow-left-icon" data-class="vds-menu-button-close-icon"></slot>
      <slot name="${t}-icon" data-class="vds-menu-button-icon"></slot>
      <span class="vds-menu-button-label">${c(e)}</span>
      <span class="vds-menu-button-hint" data-part="hint"></span>
      <slot name="menu-arrow-right-icon" data-class="vds-menu-button-open-icon"></slot>
    </media-menu-button>
  `}function o(e,t){return n(()=>u(e,t))}function f({tooltip:e}){const{translations:t}=l(),{paused:s}=r().$state,a=n(()=>u(t,s()?"Play":"Pause"));return i`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button class="vds-play-button vds-button" aria-label=${a}>
          <slot name="play-icon" data-class="vds-play-icon"></slot>
          <slot name="pause-icon" data-class="vds-pause-icon"></slot>
          <slot name="replay-icon" data-class="vds-replay-icon"></slot>
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${o(t,"Play")}</span>
        <span class="vds-pause-tooltip-text">${o(t,"Pause")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function L({tooltip:e}){const{translations:t}=l(),{muted:s}=r().$state,a=n(()=>u(t,(s(),"Unmute")));return i`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button class="vds-mute-button vds-button" aria-label=${a}>
          <slot name="mute-icon" data-class="vds-mute-icon"></slot>
          <slot name="volume-low-icon" data-class="vds-volume-low-icon"></slot>
          <slot name="volume-high-icon" data-class="vds-volume-high-icon"></slot>
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${o(t,"Unmute")}</span>
        <span class="vds-unmute-tooltip-text">${o(t,"Mute")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function w({tooltip:e}){const{translations:t}=l(),{textTrack:s}=r().$state,a=n(()=>u(t,s()?"Closed-Captions Off":"Closed-Captions On"));return i`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button class="vds-caption-button vds-button" aria-label=${a}>
          <slot name="cc-on-icon" data-class="vds-cc-on-icon"></slot>
          <slot name="cc-off-icon" data-class="vds-cc-off-icon"></slot>
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${o(t,"Closed-Captions Off")}</span>
        <span class="vds-cc-off-tooltip-text">${o(t,"Closed-Captions On")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ct(){const{translations:e}=l(),{pictureInPicture:t}=r().$state,s=n(()=>u(e,t()?"Exit PiP":"Enter PiP"));return i`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button class="vds-pip-button vds-button" aria-label=${s}>
          <slot name="pip-enter-icon" data-class="vds-pip-enter-icon"></slot>
          <slot name="pip-exit-icon" data-class="vds-pip-exit-icon"></slot>
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${o(e,"Enter PiP")}</span>
        <span class="vds-pip-exit-tooltip-text">${o(e,"Exit PiP")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function j({tooltip:e}){const{translations:t}=l(),{fullscreen:s}=r().$state,a=n(()=>u(t,s()?"Exit Fullscreen":"Enter Fullscreen"));return i`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button class="vds-fullscreen-button vds-button" aria-label=${a}>
          <slot name="fs-enter-icon" data-class="vds-fs-enter-icon"></slot>
          <slot name="fs-exit-icon" data-class="vds-fs-exit-icon"></slot>
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${o(t,"Enter Fullscreen")}</span>
        <span class="vds-fs-exit-tooltip-text">${o(t,"Exit Fullscreen")}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function C({seconds:e,tooltip:t}){const{translations:s}=l(),a=e>=0?"Seek Forward":"Seek Backward",d=o(s,a);return i`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${e}
          aria-label=${d}
        >
          ${e>=0?i`<slot name="seek-forward-icon"></slot>`:i`<slot name="seek-backward-icon"></slot>`}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${o(s,a)}
      </media-tooltip-content>
    </media-tooltip>
  `}function J(){const{translations:e}=l(),t=o(e,"Volume");return i`
    <media-volume-slider class="vds-volume-slider vds-slider" aria-label=${t}>
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function x(){const{width:e}=r().$state,{thumbnails:t,translations:s}=l(),a=o(s,"Seek");return i`
    <media-time-slider class="vds-time-slider vds-slider" aria-label=${a}>
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${c(()=>e()<768)}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          src=${c(t)}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function R(){const{translations:e}=l(),{live:t}=r().$state,s=o(e,"Skip To Live"),a=o(e,"LIVE");return t()?i`
    <media-live-button class="vds-live-button" aria-label=${s}>
      <span class="vds-live-button-text">${a}</span>
    </media-live-button
  `:null}function Dt(){return i`
    <div class="vds-time-group">
      <media-time class="vds-time" type="current"></media-time>
      <div class="vds-time-divider">/</div>
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `}function W(){const{live:e}=r().$state;return e()?R():Dt()}function z(e,t){return i`
    <media-menu-portal .container=${e} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function _({placement:e,tooltip:t,portal:s}){const{viewType:a}=r().$state,{translations:d,smQueryList:m,thumbnails:S,menuContainer:A,noModal:M,menuGroup:$}=l(),g=p(()=>M()?k(e):m.matches?null:k(e)),T=p(()=>!m.matches&&$()==="bottom"&&a()==="video"?26:0),b=i`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${c(g)}
      offset=${c(T)}
    >
      <media-chapters-radio-group
        class="vds-chapters-radio-group vds-radio-group"
        thumbnails=${c(S)}
      >
        <template>
          <media-radio class="vds-chapter-radio vds-radio">
            <media-thumbnail class="vds-thumbnail"></media-thumbnail>
            <div class="vds-chapter-radio-content">
              <span class="vds-chapter-radio-label" data-part="label"></span>
              <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
              <span class="vds-chapter-radio-duration" data-part="duration"></span>
            </div>
          </media-radio>
        </template>
      </media-chapters-radio-group>
    </media-menu-items>
  `;return i`
    <!-- Chapters Menu -->
    <media-menu class="vds-chapters-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${o(d,"Chapters")}
          >
            <slot name="menu-chapters-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${O(t)?c(t):t}
        >
          ${o(d,"Chapters")}
        </media-tooltip-content>
      </media-tooltip>
      ${s?z(A,b):b}
    </media-menu>
  `}function Z({placement:e,portal:t,tooltip:s}){const{viewType:a,canSetPlaybackRate:d,canSetQuality:m,qualities:S,audioTracks:A,textTracks:M}=r().$state,{translations:$,smQueryList:g,menuContainer:T,noModal:b,menuGroup:it}=l(),ot=p(()=>b()?k(e):g.matches?null:k(e)),nt=p(()=>!g.matches&&it()==="bottom"&&a()==="video"?26:0),lt=p(()=>d()||m()&&S().length||A().length||M().filter(rt).length),G=i`
    <media-menu-items
      class="vds-settings-menu-items vds-menu-items"
      placement=${c(ot)}
      offset=${c(nt)}
    >
      ${Lt()}${wt()}${xt()}${St()}
    </media-menu-items>
  `,dt=i`
    <media-menu class="vds-settings-menu vds-menu">
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${o($,"Settings")}
          >
            <slot name="menu-settings-icon" data-class="vds-rotate-icon"></slot>
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${O(s)?c(s):s}
        >
          ${o($,"Settings")}
        </media-tooltip-content>
      </media-tooltip>
      ${t?z(T,G):G}
    </media-menu>
  `;return n(()=>lt()?dt:null)}function Lt(){const{translations:e}=l();return i`
    <!-- Audio Menu -->
    <media-menu class="vds-audio-menu vds-menu">
      ${D({label:()=>u(e,"Audio"),icon:"menu-audio"})}
      <media-menu-items class="vds-menu-items">
        <media-audio-radio-group
          class="vds-audio-radio-group vds-radio-group"
          empty-label=${o(e,"Default")}
        >
          <template>
            <media-radio class="vds-audio-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-audio-radio-group>
      </media-menu-items>
    </media-menu>
  `}function wt(){const{translations:e}=l();return i`
    <!-- Speed Menu -->
    <media-menu class="vds-speed-menu vds-menu">
      ${D({label:()=>u(e,"Speed"),icon:"menu-speed"})}
      <media-menu-items class="vds-menu-items">
        <media-speed-radio-group
          class="vds-speed-radio-group vds-radio-group"
          normal-label=${o(e,"Normal")}
        >
          <template>
            <media-radio class="vds-speed-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-speed-radio-group>
      </media-menu-items>
    </media-menu>
  `}function xt(){const{translations:e}=l();return i`
    <!-- Quality Menu -->
    <media-menu class="vds-quality-menu vds-menu">
      ${D({label:()=>u(e,"Quality"),icon:"menu-quality"})}
      <media-menu-items class="vds-menu-items">
        <media-quality-radio-group
          class="vds-quality-radio-group vds-radio-group"
          auto-label=${o(e,"Auto")}
        >
          <template>
            <media-radio class="vds-quality-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
              <span class="vds-radio-hint" data-part="bitrate"></span>
            </media-radio>
          </template>
        </media-quality-radio-group>
      </media-menu-items>
    </media-menu>
  `}function St(){const{translations:e}=l();return i`
    <!-- Captions Menu -->
    <media-menu class="vds-captions-menu vds-menu">
      ${D({label:()=>u(e,"Captions"),icon:"menu-captions"})}
      <media-menu-items class="vds-menu-items">
        <media-captions-radio-group
          class="vds-captions-radio-group vds-radio-group"
          off-label=${o(e,"Off")}
        >
          <template>
            <media-radio class="vds-caption-radio vds-radio">
              <div class="vds-radio-check"></div>
              <span class="vds-radio-label" data-part="label"></span>
            </media-radio>
          </template>
        </media-captions-radio-group>
      </media-menu-items>
    </media-menu>
  `}function tt(e){let t=document.querySelector(`body > .${e}`);return t||(t=document.createElement("div"),t.style.display="contents",t.classList.add(e),document.body.append(t)),t}function At({name:e,class:t,state:s,paths:a}){return i`<svg
    class="${"vds-icon"+(t?` ${t}`:"")}"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${H(e??s)}
  >
    ${ct(a)?gt(a):c(a)}
  </svg>`}class Mt{constructor(t){this.Hk={},this.Ik=!1,this.Yh=t,this.slots=new U(t,this.Jk.bind(this))}connect(){this.slots.connect(),v(this.disconnect.bind(this))}load(){this.cc().then(t=>{this.Hk=t,this.Ik=!0,this.Jk()})}disconnect(){for(const{slot:t}of this.Kk())t.textContent=""}*Kk(){for(const t of Object.keys(this.Hk)){const s=`${t}-icon`;for(const a of this.slots.elements)a.name===s&&(yield{icon:this.Hk[t],slot:a})}}Jk(){if(this.Ik)for(const{icon:t,slot:s}of this.Kk())this.slots.assign(t,s)}}class Tt extends Mt{connect(){const t=this.Ck();t&&(super.connect(),t.$state.canLoad()?this.load():ut(t,"can-load",()=>this.load(),{once:!0}))}Ck(){let t=this.Yh.parentElement;for(;t&&t.localName!=="media-player";)t=t.parentElement;return t}}class et extends Tt{async cc(){const t=(await bt(()=>import("./vidstack-7cTzfr-b-DAMqm3YT.js"),__vite__mapDeps([]))).icons,s={};for(const a of Object.keys(t))s[a]=At({name:a,paths:t[a]});return s}}function Pt(){return i`
    <media-captions class="vds-captions"></media-captions>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">${x()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${C({seconds:-10,tooltip:"top start"})}
        ${f({tooltip:"top"})}${C({tooltip:"top",seconds:10})}
        ${n(W)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${L({tooltip:"top"})}
        ${J()}${w({tooltip:"top"})} ${st()}
      </media-controls-group>
    </media-controls>
  `}function It(){return i`
    <media-captions class="vds-captions"></media-captions>
    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        ${n(Wt)}
        ${L({tooltip:"top start"})}${n(R)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${w({tooltip:"top"})}${st()}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${x()}</media-controls-group>

      ${n(Bt)}${n(Et)}
    </media-controls>
  `}function Wt(){const{live:e,canSeek:t}=r().$state;return e()&&!t()?f({tooltip:"top start"}):null}function Bt(){const{live:e}=r().$state;return e()?null:i`
        <media-controls-group class="vds-controls-group">
          <media-time class="vds-time" type="current"></media-time>
          <div class="vds-controls-spacer"></div>
          <media-time class="vds-time" type="duration"></media-time>
        </media-controls-group>
      `}function Et(){const{canSeek:e}=r().$state;return e()?i`
        <media-controls-group class="vds-controls-group">
          <div class="vds-controls-spacer"></div>
          ${C({seconds:-10,tooltip:"top"})}
          ${f({tooltip:"top"})}
          ${C({tooltip:"top",seconds:10})}
          <div class="vds-controls-spacer"></div>
        </media-controls-group>
      `:null}function st(){const e="top end";return i`
    ${_({tooltip:"top",placement:e,portal:!0})}
    ${Z({tooltip:"top end",placement:e,portal:!0})}
  `}const Y=class Y extends F(K,mt){onSetup(){this.forwardKeepAlive=!1,this.v=r(),this.classList.add("vds-audio-layout"),this.menuContainer=tt("vds-audio-layout"),h(()=>{this.menuContainer&&N(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),v(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){h(()=>{this.$props.customIcons()?new X(this).connect():new et(this).connect()})}Ya(){const{streamType:t}=this.v.$state;return this.isMatch&&t()!=="unknown"?this.isSmallLayout?It():Pt():null}render(){return i`${n(this.Ya.bind(this))}`}};Y.tagName="media-audio-layout";let P=Y;function Yt(){return i`
    ${at()}${B()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      ${n(Gt)}

      <div class="vds-controls-spacer"></div>

      <media-controls-group class="vds-controls-group">${x()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${f({tooltip:"top start"})}
        ${L({tooltip:"top"})}${J()}
        ${n(W)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${w({tooltip:"top"})}${n(qt)}
        ${Ct()} ${j({tooltip:"top end"})}
      </media-controls-group>
    </media-controls>
  `}function qt(){const{menuGroup:e}=l();return e()==="bottom"?E():null}function Gt(){const{menuGroup:e}=l(),t=e()==="top"?i`
            <div class="vds-controls-spacer"></div>
            ${E()}
          `:null;return i`
    <media-controls-group class="vds-controls-group">${t}</media-controls-group>
  `}function Ot(){return i`
    ${at()}${B()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        <div class="vds-controls-spacer"></div>
        ${w({tooltip:"bottom"})}
        ${E()}${L({tooltip:"bottom end"})}
      </media-controls-group>

      <div class="vds-controls-group">${f({tooltip:"top"})}</div>

      <media-controls-group class="vds-controls-group">
        ${n(W)}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        <div class="vds-controls-spacer"></div>
        ${j({tooltip:"top end"})}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${x()}</media-controls-group>
    </media-controls>

    ${n(Vt)}
  `}function Vt(){const{duration:e}=r().$state;return e()===0?null:i`
    <div class="vds-start-duration">
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `}function B(){return i`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function E(){const{menuGroup:e,smQueryList:t}=l(),s=()=>e()==="top"||t.matches?"bottom":"top",a=p(()=>`${s()} ${e()==="top"?"end":"center"}`),d=p(()=>`${s()} end`);return i`
    ${_({tooltip:a,placement:d,portal:!0})}
    ${Z({tooltip:a,placement:d,portal:!0})}
  `}function at(){return i`
    <div class="vds-gestures">
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:controls"></media-gesture>
      <media-gesture
        class="vds-gesture"
        event="dblpointerup"
        action="toggle:fullscreen"
      ></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
    </div>
  `}const q=class q extends F(K,pt){onSetup(){this.forwardKeepAlive=!1,this.v=r(),this.classList.add("vds-video-layout"),this.menuContainer=tt("vds-video-layout"),h(()=>{this.menuContainer&&N(this.menuContainer,"data-size",this.isSmallLayout&&"sm")}),v(()=>{var t;return(t=this.menuContainer)==null?void 0:t.remove()})}onConnect(){h(()=>{this.$props.customIcons()?new X(this).connect():new et(this).connect()})}Ya(){const{streamType:t}=this.v.$state;return this.isMatch?t()==="unknown"?B():this.isSmallLayout?Ot():Yt():null}render(){return i`${n(this.Ya.bind(this))}`}};q.tagName="media-video-layout";let I=q;Q(P);Q(I);
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
