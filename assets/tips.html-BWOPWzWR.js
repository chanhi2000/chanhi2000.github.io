import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as v,d as n,at as p,b as t,t as b,w as a,r as o,o as k,e as s}from"./app-Dp9sAfV1.js";const g={},y={id:"frontmatter-title-관련",tabindex:"-1"},f={class:"header-anchor",href:"#frontmatter-title-관련"},x={class:"table-of-contents"};function h(d,e){const l=o("router-link"),m=o("Tabs"),r=o("TagLinks");return k(),v("div",null,[n("h1",y,[n("a",f,[n("span",null,b(d.$frontmatter.title)+" 관련",1)])]),n("nav",x,[n("ul",null,[n("li",null,[t(l,{to:"#uname"},{default:a(()=>e[0]||(e[0]=[s("uname")])),_:1})]),n("li",null,[t(l,{to:"#dmidecode-cpu-memory-정보"},{default:a(()=>e[1]||(e[1]=[s("dmidecode CPU/Memory 정보")])),_:1})]),n("li",null,[t(l,{to:"#df-디스크-정보"},{default:a(()=>e[2]||(e[2]=[s("df 디스크 정보")])),_:1})]),n("li",null,[t(l,{to:"#ethtool-네트워크-정보"},{default:a(()=>e[3]||(e[3]=[s("ethtool 네트워크 정보")])),_:1})]),n("li",null,[t(l,{to:"#reduce-swappiness-optimize-swap-usage"},{default:a(()=>e[4]||(e[4]=[s("Reduce Swappiness (Optimize Swap Usage)")])),_:1})])])]),e[9]||(e[9]=p(`<h2 id="uname" tabindex="-1"><a class="header-anchor" href="#uname"><span><code>uname</code></span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">uname</span>       <span class="token comment"># 옵션이 없을 경우, -s 옵션을 사용하는 것과 동일 (i.e. 커널 이름 출력)</span></span>
<span class="line"><span class="token function">uname</span> <span class="token parameter variable">-s</span>    <span class="token comment"># Linux</span></span>
<span class="line"><span class="token function">uname</span> <span class="token parameter variable">-a</span>    <span class="token comment"># 모든 정보 출력</span></span>
<span class="line">            <span class="token comment"># Linux jhpark20.novalocal 3.10.0-1160.el7.x86_64 #1 SMP Mon Oct 19 16:18:59 UTC 2020 x86_64 x86_64 x86_64 GNU/Linux</span></span>
<span class="line"><span class="token function">uname</span> <span class="token parameter variable">-n</span>    <span class="token comment"># 네트워크 노드 호스트 이름 출력</span></span>
<span class="line">            <span class="token comment"># jhpark20.novalocal</span></span>
<span class="line"><span class="token function">uname</span> <span class="token parameter variable">-r</span>    <span class="token comment"># 커널 릴리즈 출력</span></span>
<span class="line">            <span class="token comment"># 3.10.0-1160.el7.x86_64</span></span>
<span class="line"><span class="token function">uname</span> <span class="token parameter variable">-v</span>    <span class="token comment"># 커널 버전 출력</span></span>
<span class="line">            <span class="token comment"># #1 SMP Mon Oct 19 16:18:59 UTC 2020</span></span>
<span class="line"><span class="token function">uname</span> <span class="token parameter variable">-m</span>    <span class="token comment"># 하드웨어 이름 출력</span></span>
<span class="line">            <span class="token comment"># x86_64</span></span>
<span class="line"><span class="token function">uname</span> <span class="token parameter variable">-p</span>    <span class="token comment"># 프로세서 타입 출력</span></span>
<span class="line">            <span class="token comment"># x86_64</span></span>
<span class="line"><span class="token function">uname</span> <span class="token parameter variable">-i</span>    <span class="token comment"># 하드웨어 플랫폼 출력</span></span>
<span class="line">            <span class="token comment"># x86_64</span></span>
<span class="line"><span class="token function">uname</span> <span class="token parameter variable">-o</span>    <span class="token comment"># 운영체제 출력</span></span>
<span class="line">            <span class="token comment"># GNU/Linux</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dmidecode-cpu-memory-정보" tabindex="-1"><a class="header-anchor" href="#dmidecode-cpu-memory-정보"><span><code>dmidecode</code> CPU/Memory 정보</span></a></h2><details class="hint-container details"><summary><code>-t</code> 옵션</summary><table><thead><tr><th style="text-align:left;">번호</th><th style="text-align:left;">정보</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">BIOS</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">System</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">Baseboard</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">Chassis</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">Processor</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;">Memory Controller</td></tr><tr><td style="text-align:left;">6</td><td style="text-align:left;">Memory Module</td></tr><tr><td style="text-align:left;">7</td><td style="text-align:left;">Cache</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;">Port Connector</td></tr><tr><td style="text-align:left;">9</td><td style="text-align:left;">System Slots</td></tr><tr><td style="text-align:left;">10</td><td style="text-align:left;">On Board Devices</td></tr><tr><td style="text-align:left;">11</td><td style="text-align:left;">OEM Strings</td></tr><tr><td style="text-align:left;">12</td><td style="text-align:left;">System Configuration Options</td></tr><tr><td style="text-align:left;">13</td><td style="text-align:left;">BIOS Language</td></tr><tr><td style="text-align:left;">14</td><td style="text-align:left;">Group Associations</td></tr><tr><td style="text-align:left;">15</td><td style="text-align:left;">System Event Log</td></tr><tr><td style="text-align:left;">16</td><td style="text-align:left;">Physical Memory Array</td></tr><tr><td style="text-align:left;">17</td><td style="text-align:left;">Memory Device</td></tr><tr><td style="text-align:left;">18</td><td style="text-align:left;">32-bit Memory Error</td></tr><tr><td style="text-align:left;">19</td><td style="text-align:left;">Memory Array Mapped Address</td></tr><tr><td style="text-align:left;">20</td><td style="text-align:left;">Memory Device Mapped Address</td></tr><tr><td style="text-align:left;">21</td><td style="text-align:left;">Built-in Pointing Device</td></tr><tr><td style="text-align:left;">22</td><td style="text-align:left;">Portable Battery</td></tr><tr><td style="text-align:left;">23</td><td style="text-align:left;">System Reset</td></tr><tr><td style="text-align:left;">24</td><td style="text-align:left;">Hardware Security</td></tr><tr><td style="text-align:left;">25</td><td style="text-align:left;">System Power Controls</td></tr><tr><td style="text-align:left;">26</td><td style="text-align:left;">Voltage Probe</td></tr><tr><td style="text-align:left;">27</td><td style="text-align:left;">Cooling Device</td></tr><tr><td style="text-align:left;">28</td><td style="text-align:left;">Temperature Probe</td></tr><tr><td style="text-align:left;">29</td><td style="text-align:left;">Electrical Current Probe</td></tr><tr><td style="text-align:left;">30</td><td style="text-align:left;">Out-of-band Remote Access</td></tr><tr><td style="text-align:left;">31</td><td style="text-align:left;">Boot Integrity Services</td></tr><tr><td style="text-align:left;">32</td><td style="text-align:left;">System Boot</td></tr><tr><td style="text-align:left;">33</td><td style="text-align:left;">64-bit Memory Error</td></tr><tr><td style="text-align:left;">34</td><td style="text-align:left;">Management Device</td></tr><tr><td style="text-align:left;">35</td><td style="text-align:left;">Management Device Component</td></tr><tr><td style="text-align:left;">36</td><td style="text-align:left;">Management Device Threshold Data</td></tr><tr><td style="text-align:left;">37</td><td style="text-align:left;">Memory Channel</td></tr><tr><td style="text-align:left;">38</td><td style="text-align:left;">IPMI Device</td></tr><tr><td style="text-align:left;">39</td><td style="text-align:left;">Power Supply</td></tr><tr><td style="text-align:left;">40</td><td style="text-align:left;">Additional Information</td></tr><tr><td style="text-align:left;">41</td><td style="text-align:left;">Onboard Devices Extended Information</td></tr><tr><td style="text-align:left;">42</td><td style="text-align:left;">Management Controller Host Interface</td></tr></tbody></table></details>`,4)),t(m,{data:[{id:"CPU"},{id:"Memory"}],active:0},{title0:a(({value:i,isActive:c})=>e[5]||(e[5]=[s("CPU")])),title1:a(({value:i,isActive:c})=>e[6]||(e[6]=[s("Memory")])),tab0:a(({value:i,isActive:c})=>e[7]||(e[7]=[n("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh"},[n("pre",null,[n("code",{class:"language-bash"},[n("span",{class:"line"},[s("dmidecode "),n("span",{class:"token parameter variable"},"-t"),s(" bios")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# dmidecode 3.3")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# Getting SMBIOS data from sysfs.")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# SMBIOS 2.8 present.")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# ")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# Handle 0x0000, DMI type 0, 24 bytes")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# BIOS Information")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Vendor: SeaBIOS")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Version: 1.16.1-1.el9")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Release Date: 04/01/2014")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Address: 0xE8000")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Runtime Size: 96 kB")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         ROM Size: 64 kB")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Characteristics:")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#                 BIOS characteristics not supported")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#                 Targeted content distribution is supported")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         BIOS Revision: 0.0")]),s(`
`),n("span",{class:"line"},[s("dmidecode "),n("span",{class:"token parameter variable"},"-t"),s(" processor")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# dmidecode 3.2")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# Getting SMBIOS data from sysfs.")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# SMBIOS 2.8 present.")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# ")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# Handle 0x0400, DMI type 4, 42 bytes")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# Processor Information")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Socket Designation: CPU 0")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Type: Central Processor")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Family: Other")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Manufacturer: Red Hat")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         ID: 12 0F 80 00 FF FB 8B 07")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Version: RHEL 7.6.0 PC (i440FX + PIIX, 1996)")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Voltage: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         External Clock: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Max Speed: 2000 MHz")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Current Speed: 2000 MHz")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Status: Populated, Enabled")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Upgrade: Other")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         L1 Cache Handle: Not Provided")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         L2 Cache Handle: Not Provided")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         L3 Cache Handle: Not Provided")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Serial Number: Not Specified")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Asset Tag: Not Specified")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Part Number: Not Specified")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Core Count: 1")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Core Enabled: 1")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Thread Count: 1")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Characteristics: None")]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),tab1:a(({value:i,isActive:c})=>e[8]||(e[8]=[n("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh"},[n("pre",null,[n("code",{class:"language-bash"},[n("span",{class:"line"},[s("dmidecode "),n("span",{class:"token parameter variable"},"-t"),s(" memory")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# dmidecode 3.3")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# Getting SMBIOS data from sysfs.")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# SMBIOS 2.8 present.")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# Handle 0x1000, DMI type 16, 23 bytes")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# Physical Memory Array")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Location: Other")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Use: System Memory")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Error Correction Type: Multi-bit ECC")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Maximum Capacity: 32 GB")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Error Information Handle: Not Provided")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Number Of Devices: 2")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# Handle 0x1100, DMI type 17, 40 bytes")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# Memory Device")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Array Handle: 0x1000")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Error Information Handle: Not Provided")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Total Width: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Data Width: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Size: 16 GB")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Form Factor: DIMM")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Set: None")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Locator: DIMM 0")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Bank Locator: Not Specified")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Type: RAM")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Type Detail: Other")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Speed: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Manufacturer: Red Hat")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Serial Number: Not Specified")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Asset Tag: Not Specified")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Part Number: Not Specified")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Rank: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Configured Memory Speed: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Minimum Voltage: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Maximum Voltage: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Configured Voltage: Unknown")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# Handle 0x1101, DMI type 17, 40 bytes")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"# Memory Device")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Array Handle: 0x1000")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Error Information Handle: Not Provided")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Total Width: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Data Width: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Size: 16 GB")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Form Factor: DIMM")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Set: None")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Locator: DIMM 1")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Bank Locator: Not Specified")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Type: RAM")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Type Detail: Other")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Speed: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Manufacturer: Red Hat")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Serial Number: Not Specified")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Asset Tag: Not Specified")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Part Number: Not Specified")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Rank: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Configured Memory Speed: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Minimum Voltage: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Maximum Voltage: Unknown")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"#         Configured Voltage: Unknown")]),s(`
`),n("span",{class:"line"})])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),e[10]||(e[10]=p(`<h2 id="df-디스크-정보" tabindex="-1"><a class="header-anchor" href="#df-디스크-정보"><span><code>df</code> 디스크 정보</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">df</span> <span class="token parameter variable">-h</span>    <span class="token comment"># 읽기 쉬운 형태로 출력</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># Filesystem                  Size  Used Avail Use% Mounted on</span></span>
<span class="line"><span class="token comment"># devtmpfs                     16G     0   16G   0% /dev</span></span>
<span class="line"><span class="token comment"># tmpfs                        16G   24K   16G   1% /dev/shm</span></span>
<span class="line"><span class="token comment"># tmpfs                        16G  137M   16G   1% /run</span></span>
<span class="line"><span class="token comment"># tmpfs                        16G     0   16G   0% /sys/fs/cgroup</span></span>
<span class="line"><span class="token comment"># /dev/mapper/rutilvm-root     47G  5.8G   42G  13% /</span></span>
<span class="line"><span class="token comment"># /dev/mapper/rutilvm-home   1014M   40M  975M   4% /home</span></span>
<span class="line"><span class="token comment"># /dev/mapper/rutilvm-var      53G  3.7G   50G   7% /var</span></span>
<span class="line"><span class="token comment"># /dev/mapper/rutilvm-vartmp  2.0G   47M  2.0G   3% /var/tmp</span></span>
<span class="line"><span class="token comment"># /dev/mapper/rutilvm-log      30G  494M   30G   2% /var/log</span></span>
<span class="line"><span class="token comment"># /dev/vda1                  1014M  241M  774M  24% /boot</span></span>
<span class="line"><span class="token comment"># /dev/mapper/rutilvm-tmp     2.0G  897M  1.2G  44% /tmp</span></span>
<span class="line"><span class="token comment"># /dev/mapper/rutilvm-audit  1014M   45M  970M   5% /var/log/audit</span></span>
<span class="line"><span class="token comment"># overlay                      53G  3.7G   50G   7% /var/lib/docker/overlay2/f4fb66660bdd6dad5865777e7dc646bbe13b0e8cf2b28f47cd22e3329bdd3d6e/merged</span></span>
<span class="line"><span class="token comment"># tmpfs                       3.2G     0  3.2G   0% /run/user/0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ethtool-네트워크-정보" tabindex="-1"><a class="header-anchor" href="#ethtool-네트워크-정보"><span><code>ethtool</code> 네트워크 정보</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">ethtool</span> eth0</span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># Settings for eth0:</span></span>
<span class="line"><span class="token comment">#         Supported ports: [  ]</span></span>
<span class="line"><span class="token comment">#         Supported link modes:   Not reported</span></span>
<span class="line"><span class="token comment">#         Supported pause frame use: No</span></span>
<span class="line"><span class="token comment">#         Supports auto-negotiation: No</span></span>
<span class="line"><span class="token comment">#         Supported FEC modes: Not reported</span></span>
<span class="line"><span class="token comment">#         Advertised link modes:  Not reported</span></span>
<span class="line"><span class="token comment">#         Advertised pause frame use: No</span></span>
<span class="line"><span class="token comment">#         Advertised auto-negotiation: No</span></span>
<span class="line"><span class="token comment">#         Advertised FEC modes: Not reported</span></span>
<span class="line"><span class="token comment">#         Speed: Unknown!</span></span>
<span class="line"><span class="token comment">#         Duplex: Unknown! (255)</span></span>
<span class="line"><span class="token comment">#         Auto-negotiation: off</span></span>
<span class="line"><span class="token comment">#         Port: Other</span></span>
<span class="line"><span class="token comment">#         PHYAD: 0</span></span>
<span class="line"><span class="token comment">#         Transceiver: internal</span></span>
<span class="line"><span class="token comment">#         Link detected: yes</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="reduce-swappiness-optimize-swap-usage" tabindex="-1"><a class="header-anchor" href="#reduce-swappiness-optimize-swap-usage"><span>Reduce Swappiness (Optimize Swap Usage)</span></a></h2><p>Swappiness controls how often the system uses swap space instead of RAM. A high swappiness value can lead to excessive swapping, slowing down your system.</p><p>To check the current swappiness value:</p><hr>`,9)),t(r)])}const w=u(g,[["render",h]]),C=JSON.parse('{"path":"/devops/linux-fedora/tips.html","title":"Tips","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Tips","description":"Linux - Fedora > Tips","icon":"fas fa-lightbulb","category":["DevOps","Linux","Fedora","Tips"],"tag":["devops","linux","fedora","redhat","centos","yum","package-manager"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tips\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/devops/linux-fedora/tips.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"Tips"}],["meta",{"property":"og:description","content":"Linux - Fedora > Tips"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"package-manager"}],["meta",{"property":"article:tag","content":"yum"}],["meta",{"property":"article:tag","content":"centos"}],["meta",{"property":"article:tag","content":"redhat"}],["meta",{"property":"article:tag","content":"fedora"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"devops"}],[{"meta":null},{"property":"og:title","content":"Linux - Fedora > Tips"},{"property":"og:description","content":"Tips"},{"property":"og:url","content":"https://chanhi2000.github.io/devops/linux-fedora/tips.html"}]]},"git":{},"readingTime":{"minutes":2.78,"words":833},"filePathRelative":"devops/linux-fedora/tips.md"}');export{w as comp,C as data};
