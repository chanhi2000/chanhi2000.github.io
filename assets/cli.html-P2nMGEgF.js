import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as u,d as e,t as g,b as a,h as s,ax as c,r,o as f,e as t}from"./app-vQERoX8y.js";const v={},b={id:"frontmatter-title-관련",tabindex:"-1"},y={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"};function x(d,n){const l=r("router-link"),p=r("Tabs"),m=r("TagLinks");return f(),u("div",null,[e("h1",b,[e("a",y,[e("span",null,g(d.$frontmatter.title)+" 관련",1)])]),e("nav",k,[e("ul",null,[e("li",null,[a(l,{to:"#hosted-engine"},{default:s(()=>n[0]||(n[0]=[t("hosted-engine")])),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#name"},{default:s(()=>n[1]||(n[1]=[t("NAME")])),_:1})]),e("li",null,[a(l,{to:"#synopsis"},{default:s(()=>n[2]||(n[2]=[t("SYNOPSIS")])),_:1})]),e("li",null,[a(l,{to:"#description"},{default:s(()=>n[3]||(n[3]=[t("DESCRIPTION")])),_:1})]),e("li",null,[a(l,{to:"#options"},{default:s(()=>n[4]||(n[4]=[t("OPTIONS")])),_:1})]),e("li",null,[a(l,{to:"#examples"},{default:s(()=>n[5]||(n[5]=[t("EXAMPLES")])),_:1})])])]),e("li",null,[a(l,{to:"#firewall-cmd"},{default:s(()=>n[6]||(n[6]=[t("firewall-cmd")])),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#name-1"},{default:s(()=>n[7]||(n[7]=[t("NAME")])),_:1})]),e("li",null,[a(l,{to:"#synopsis-1"},{default:s(()=>n[8]||(n[8]=[t("SYNOPSIS")])),_:1})]),e("li",null,[a(l,{to:"#description-1"},{default:s(()=>n[9]||(n[9]=[t("DESCRIPTION")])),_:1})]),e("li",null,[a(l,{to:"#options-1"},{default:s(()=>n[10]||(n[10]=[t("OPTIONS")])),_:1})])])]),e("li",null,[a(l,{to:"#기타"},{default:s(()=>n[11]||(n[11]=[t("기타")])),_:1})])])]),n[16]||(n[16]=c(`<hr><h2 id="hosted-engine" tabindex="-1"><a class="header-anchor" href="#hosted-engine"><span><code>hosted-engine</code></span></a></h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>NAME</span></a></h3><p><code>hosted-engine</code> - Tools for handling hosted engine</p><h3 id="synopsis" tabindex="-1"><a class="header-anchor" href="#synopsis"><span>SYNOPSIS</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">hosted-engine <span class="token punctuation">[</span>--help<span class="token punctuation">]</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>command-args<span class="token operator">&gt;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>DESCRIPTION</span></a></h3><p>The hosted-engine command deploys a virtual machine that you can install oVirt Open Virtualization Manager on to. The Manager installation on your hosted-engine virtual machine can manage the host it is running on. The hosted-engine command can also be used to start, stop and access the hosted-engine virtual machine.</p><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>OPTIONS</span></a></h3><table><thead><tr><th style="text-align:center;">flag</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>--help</code></td><td style="text-align:left;">Show the help message and exit.</td></tr><tr><td style="text-align:center;"><code>--deploy [options]</code></td><td style="text-align:left;">Run the <code>ovirt-hosted-engine-setup</code> command to deploy the hosted-engine virtual machine.</td></tr><tr><td style="text-align:center;"><code>--vm-start [--vm-conf=&lt;file&gt;]</code></td><td style="text-align:left;">Start VM on this host. <code>--vm-conf=&lt;file&gt;</code> can be optionally used to load an alternative <code>vm.conf</code> file as a recovery action.</td></tr><tr><td style="text-align:center;"><code>--vm-start-paused</code></td><td style="text-align:left;">Start VM on this host with qemu paused.</td></tr><tr><td style="text-align:center;"><code>--vm-shutdown</code></td><td style="text-align:left;">Gracefully shutdown the VM on this host.</td></tr><tr><td style="text-align:center;"><code>--vm-poweroff</code></td><td style="text-align:left;">Forcefully poweroff the VM on this host.</td></tr><tr><td style="text-align:center;"><code>--vm-status [--json]</code></td><td style="text-align:left;">Show the VM status, in machine-readable format if <code>--json</code> is given.</td></tr><tr><td style="text-align:center;"><code>--add-console-password [--password=&lt;password&gt;]</code></td><td style="text-align:left;">Create a temporary password for VNC/SPICE connections to the hosted-engine virtual machine.</td></tr><tr><td style="text-align:center;"><code>--console</code></td><td style="text-align:left;">Open the configured console using <code>virsh</code> on localhost.</td></tr><tr><td style="text-align:center;"><code>--check-deployed</code></td><td style="text-align:left;">Checks whether the hosted engine has been deployed.</td></tr><tr><td style="text-align:center;"><code>--check-liveliness</code></td><td style="text-align:left;">Checks liveliness page of engine.</td></tr><tr><td style="text-align:center;"><code>--connect-storage</code></td><td style="text-align:left;">Manually connect the storage domain to the local VDSM instance.</td></tr><tr><td style="text-align:center;"><code>--set-maintenance --mode=&lt;mode&gt;</code></td><td style="text-align:left;">Set maintenance status to the specified mode:<br><ul><li><code>global</code> - Allow the administrator to start/stop/modify the engine VM without any worry of interference from the HA agents.</li><li><code>local</code> - Allow the administrator to maintain this host. Note that if you have only 2 nodes and one is in maintenance, there is only one host available to run the engine VM.</li><li><code>none</code> - Resume HA functionality.</li></ul></td></tr><tr><td style="text-align:center;"><code>--clean_metadata [--force-cleanup] [--host-id=&lt;id&gt;]</code></td><td style="text-align:left;">Remove host&#39;s metadata from the global status database.</td></tr><tr><td style="text-align:center;"><code>--reinitialize-lockspace [--force]</code></td><td style="text-align:left;">Reinitialize the sanlock lockspace file. This WIPES all locks.</td></tr><tr><td style="text-align:center;"><code>--upgrade-appliance</code></td><td style="text-align:left;">Upgrade the engine appliance.</td></tr><tr><td style="text-align:center;"><code>--rollback-upgrade</code></td><td style="text-align:left;">Rollback using a backup saved in a previous upgrade attempt.</td></tr></tbody></table><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>EXAMPLES</span></a></h3>`,11)),a(p,{id:"182",data:[{id:"Basic Usages"},{id:"Other"}],active:0},{title0:s(({value:i,isActive:o})=>n[12]||(n[12]=[t("Basic Usages")])),title1:s(({value:i,isActive:o})=>n[13]||(n[13]=[t("Other")])),tab0:s(({value:i,isActive:o})=>n[14]||(n[14]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},"hosted-engine --vm-status"),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# !! Cluster is in GLOBAL MAINTENANCE mode !!")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# --== Host on20-host02 (id: 1) status ==--")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Host ID                            : 1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Host timestamp                     : 15233")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Score                              : 3400")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},'# Engine status                      : {"vm": "up", "health": "good", "detail": "Up"}')]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Hostname                           : on20-host02")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Local maintenance                  : False")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# stopped                            : False")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# crc32                              : 460020d4")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# conf_on_shared_storage             : True")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# local_conf_timestamp               : 15233")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Status up-to-date                  : True")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Extra metadata (valid at timestamp):")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	metadata_parse_version=1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	metadata_feature_version=1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	timestamp=15233 (Mon Mar  6 21:29:16 2023)")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	host-id=1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	score=3400")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	vm_conf_refresh_time=15233 (Mon Mar  6 21:29:16 2023)")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	conf_on_shared_storage=True")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	maintenance=False")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	state=GlobalMaintenance")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	stopped=False")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# --== Host on20-host01 (id: 2) status ==--")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Host ID                            : 2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Host timestamp                     : 15253")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Score                              : 3400")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},'# Engine status                      : {"vm": "down", "health": "bad", "detail": "unknown", "reason": "vm not running on this host"}')]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Hostname                           : on20-host01")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Local maintenance                  : False")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# stopped                            : False")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# crc32                              : 231e0e5c")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# conf_on_shared_storage             : True")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# local_conf_timestamp               : 15253")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Status up-to-date                  : True")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# Extra metadata (valid at timestamp):")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	metadata_parse_version=1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	metadata_feature_version=1")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	timestamp=15253 (Mon Mar  6 21:29:27 2023)")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	host-id=2")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	score=3400")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	vm_conf_refresh_time=15253 (Mon Mar  6 21:29:27 2023)")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	conf_on_shared_storage=True")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	maintenance=False")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	state=GlobalMaintenance")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# 	stopped=False")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# ")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token comment"},"# !! Cluster is in GLOBAL MAINTENANCE mode !!")]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),tab1:s(({value:i,isActive:o})=>n[15]||(n[15]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[e("pre",null,[e("code",null,[e("span",{class:"line"},[t("hosted-engine --vm-status "),e("span",{class:"token operator"},"|"),t(),e("span",{class:"token function"},"more")]),t(`
`),e("span",{class:"line"},[e("span",{class:"token function"},"watch"),t(),e("span",{class:"token parameter variable"},"-n"),t(),e("span",{class:"token number"},"1"),t(" hosted-engine --vm-status")]),t(`
`),e("span",{class:"line"},[t("dmidecode "),e("span",{class:"token parameter variable"},"-t"),t(" memory")]),t(`
`),e("span",{class:"line"},[t("dmidecode "),e("span",{class:"token parameter variable"},"-t"),t(" processor")]),t(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),n[17]||(n[17]=c(`<hr><h2 id="firewall-cmd" tabindex="-1"><a class="header-anchor" href="#firewall-cmd"><span><code>firewall-cmd</code></span></a></h2><h3 id="name-1" tabindex="-1"><a class="header-anchor" href="#name-1"><span>NAME</span></a></h3><p><code>firewall-cmd</code> - firewalld command line client</p><h3 id="synopsis-1" tabindex="-1"><a class="header-anchor" href="#synopsis-1"><span>SYNOPSIS</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">firewall-cmd <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">..</span>.<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="description-1" tabindex="-1"><a class="header-anchor" href="#description-1"><span>DESCRIPTION</span></a></h3><p><code>firewall-cmd</code> is the command line client of the firewalld daemon. It provides interface to manage runtime and permanent configuration.</p><p>The runtime configuration in firewalld is separated from the permanent configuration. This means that things can get changed in the runtime or permanent configuration.</p><h3 id="options-1" tabindex="-1"><a class="header-anchor" href="#options-1"><span>OPTIONS</span></a></h3><p>For sequence options, this are the options that can be specified multiple times, the exit code is 0 if there is at least one item that succeded. The <code>ALREADY_ENABLED</code> (11), <code>NOT_ENABLED</code> (12) and also <code>ZONE_ALREADY_SET</code> (16) errors are treated as succeeded. If there are issues while parsing the items, then these are treated as warnings and will not change the result as long as there is a succeeded one. Without any succeeded item, the exit code will depend on the error codes. If there is exactly one error code, then this is used. If there are more than one then <code>UNKNOWN_ERROR</code> (254) will be used.</p><p>The following options are supported:</p><table><thead><tr><th style="text-align:center;">flag</th><th style="text-align:left;">description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>-h</code>, <code>--help</code></td><td style="text-align:left;">Prints a short help text and exits.</td></tr><tr><td style="text-align:center;"><code>-V</code>, <code>--version</code></td><td style="text-align:left;">Print the version string of firewalld. This option is not combinable with other options.</td></tr><tr><td style="text-align:center;"><code>-q</code>, <code>--quiet</code></td><td style="text-align:left;">Do not print status messages.</td></tr><tr><td style="text-align:center;"><code>--state</code></td><td style="text-align:left;">Check whether the firewalld daemon is active (i.e. running). Returns an exit code 0 if it is active,<br><code>RUNNING_BUT_FAILED</code> if failure occurred on startup, <code>NOT_RUNNING</code> otherwise.<br>See the section called “EXIT CODES”. This will also print the state to <code>STDOUT</code>.</td></tr><tr><td style="text-align:center;"><code>--reload</code></td><td style="text-align:left;">Reload firewall rules and keep state information. Current permanent configuration will become new runtime configuration,<br><em>i.e.</em> all runtime only changes done until reload are lost with reload if they have not been also in permanent configuration. <br> <strong>Note</strong>: Runtime changes applied via the direct interface are not affected and will therefore stay in place until <code>firewalld</code> daemon is restarted completely.</td></tr><tr><td style="text-align:center;"><code>--complete-reload</code></td><td style="text-align:left;">Reload firewall completely, even netfilter kernel modules. This will most likely terminate active connections, because state information is lost. This option should only be used in case of severe firewall problems. For example if there are state information problems that no connection can be established with correct firewall rules.<br> <strong>Note</strong>: Runtime changes applied via the direct interface are not affected and will therefore stay in place until firewalld</td></tr><tr><td style="text-align:center;">daemon is restarted completely.</td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;"><code>--runtime-to-permanent</code></td><td style="text-align:left;">Save active runtime configuration and overwrite permanent configuration with it. The way this is supposed to work is that when configuring firewalld you do runtime changes only and once you&#39;re happy with the configuration and you tested that it works the way you want, you save the configuration to disk.</td></tr><tr><td style="text-align:center;"><code>--check-config</code></td><td style="text-align:left;">Run checks on the permanent configuration. This includes XML validity and semantics.</td></tr><tr><td style="text-align:center;"><code>--get-log-denied</code></td><td style="text-align:left;">Print the log denied setting.</td></tr><tr><td style="text-align:center;"><code>--set-log-denied=value</code></td><td style="text-align:left;">Add logging rules right before reject and drop rules in the INPUT, FORWARD and OUTPUT chains for the default rules and also final reject and drop rules in zones for the configured link-layer packet type. The possible values are: all, unicast, broadcast, multicast and off. The default setting is off, which disables the logging.<br> This is a runtime and permanent change and will also reload the firewall to be able to add the logging rules.</td></tr><tr><td style="text-align:center;"><code>--get-automatic-helpers</code></td><td style="text-align:left;">Print the automatic helpers setting.</td></tr><tr><td style="text-align:center;"><code>--set-automatic-helpers=value</code></td><td style="text-align:left;"></td></tr></tbody></table><pre><code>       For the secure use of iptables and connection tracking helpers it is recommended to turn AutomaticHelpers off. But this might
       have side effects on other services using the netfilter helpers as the sysctl setting in
       /proc/sys/net/netfilter/nf_conntrack_helper will be changed. With the system setting, the default value set in the kernel or
       with sysctl will be used. Possible values are: yes, no and system. The default value is system.

       This is a runtime and permanent change and will also reload the firewall to be able to make the helpers usable.
</code></pre><p>Permanent Options --permanent The permanent option --permanent can be used to set options permanently. These changes are not effective immediately, only after service restart/reload or system reboot. Without the --permanent option, a change will only be part of the runtime configuration.</p><pre><code>       If you want to make a change in runtime and permanent configuration, use the same call with and without the --permanent
       option.

       The --permanent option can be optionally added to all options further down where it is supported.		   
</code></pre><hr><h2 id="기타" tabindex="-1"><a class="header-anchor" href="#기타"><span>기타</span></a></h2><table><thead><tr><th style="text-align:left;">명령어</th><th style="text-align:left;">설명</th></tr></thead><tbody><tr><td style="text-align:left;"><code>virt-what</code></td><td style="text-align:left;">무엇으로 가상화 되어 있는지 알려줌</td></tr><tr><td style="text-align:left;"><code>dmidecode -s system-product-name</code></td><td style="text-align:left;">(RHEL/CentOS/Fedora/Ubuntu Linux) DMI 유형</td></tr></tbody></table>`,19)),a(m)])}const S=h(v,[["render",x],["__file","cli.html.vue"]]),N=JSON.parse('{"path":"/devops/ovirt/cli.html","title":"CLI","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"CLI","description":"oVirt > CLI","icon":"fas fa-terminal","category":["oVirt","CLI"],"tag":["bash","sh","ovirt","cli"],"head":[[{"meta":null},{"property":"og:title","content":"oVirt > CLI"},{"property":"og:description","content":"CLI"},{"property":"og:url","content":"https://chanhi2000.github.io/devops/ovirt/cli.html"}],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/devops/ovirt/cli.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"CLI"}],["meta",{"property":"og:description","content":"oVirt > CLI"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:tag","content":"sh"}],["meta",{"property":"article:tag","content":"ovirt"}],["meta",{"property":"article:tag","content":"cli"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CLI\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"hosted-engine","slug":"hosted-engine","link":"#hosted-engine","children":[{"level":3,"title":"NAME","slug":"name","link":"#name","children":[]},{"level":3,"title":"SYNOPSIS","slug":"synopsis","link":"#synopsis","children":[]},{"level":3,"title":"DESCRIPTION","slug":"description","link":"#description","children":[]},{"level":3,"title":"OPTIONS","slug":"options","link":"#options","children":[]},{"level":3,"title":"EXAMPLES","slug":"examples","link":"#examples","children":[]}]},{"level":2,"title":"firewall-cmd","slug":"firewall-cmd","link":"#firewall-cmd","children":[{"level":3,"title":"NAME","slug":"name-1","link":"#name-1","children":[]},{"level":3,"title":"SYNOPSIS","slug":"synopsis-1","link":"#synopsis-1","children":[]},{"level":3,"title":"DESCRIPTION","slug":"description-1","link":"#description-1","children":[]},{"level":3,"title":"OPTIONS","slug":"options-1","link":"#options-1","children":[]}]},{"level":2,"title":"기타","slug":"기타","link":"#기타","children":[]}],"git":{},"readingTime":{"minutes":4.45,"words":1334},"filePathRelative":"devops/ovirt/cli.md","excerpt":"\\n\\n<hr>\\n<h2><code>hosted-engine</code></h2>\\n<h3>NAME</h3>\\n<p><code>hosted-engine</code> - Tools for handling hosted engine</p>\\n<h3>SYNOPSIS</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre><code><span class=\\"line\\">hosted-engine <span class=\\"token punctuation\\">[</span>--help<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&lt;</span>command<span class=\\"token operator\\">&gt;</span> <span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">&lt;</span>command-args<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">]</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{S as comp,N as data};