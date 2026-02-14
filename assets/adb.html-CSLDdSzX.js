import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,d as s,at as d,g as m,b as a,t as u,w as l,r as p,o as b,e as t}from"./app-6nZ4Bu4J.js";const v={},k={id:"frontmatter-title-관련",tabindex:"-1"},h={class:"header-anchor",href:"#frontmatter-title-관련"},g={class:"table-of-contents"};function f(i,n){const e=p("router-link"),o=p("TagLinks");return b(),r("div",null,[s("h1",k,[s("a",h,[s("span",null,u(i.$frontmatter.title)+" 관련",1)])]),s("nav",g,[s("ul",null,[s("li",null,[a(e,{to:"#구성"},{default:l(()=>n[0]||(n[0]=[t("구성")])),_:1})]),s("li",null,[a(e,{to:"#command-입력-형식"},{default:l(()=>n[1]||(n[1]=[t("Command 입력 형식")])),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#adb-devices"},{default:l(()=>n[2]||(n[2]=[t("adb devices")])),_:1})]),s("li",null,[a(e,{to:"#s-option"},{default:l(()=>n[3]||(n[3]=[t("-s option")])),_:1})])])]),s("li",null,[a(e,{to:"#port-forwarding"},{default:l(()=>n[4]||(n[4]=[t("Port forwarding")])),_:1})]),s("li",null,[a(e,{to:"#script-s"},{default:l(()=>n[5]||(n[5]=[t("Script(s)")])),_:1})]),s("li",null,[a(e,{to:"#종합-리포트"},{default:l(()=>n[6]||(n[6]=[t("종합 리포트")])),_:1})]),s("li",null,[a(e,{to:"#로그"},{default:l(()=>n[7]||(n[7]=[t("로그")])),_:1})]),s("li",null,[a(e,{to:"#adb-shell"},{default:l(()=>n[8]||(n[8]=[t("adb shell")])),_:1})]),s("li",null,[a(e,{to:"#app-내부저장소-접근-확인"},{default:l(()=>n[9]||(n[9]=[t("App 내부저장소 접근 / 확인")])),_:1})]),s("li",null,[a(e,{to:"#pull"},{default:l(()=>n[10]||(n[10]=[t("pull")])),_:1})]),s("li",null,[a(e,{to:"#push"},{default:l(()=>n[11]||(n[11]=[t("push")])),_:1})])])]),n[12]||(n[12]=d(`<hr><h2 id="구성" tabindex="-1"><a class="header-anchor" href="#구성"><span>구성</span></a></h2><ul><li>client: development machine에서 동작. shell에서 client를 invocation해서 command 실행 가능. ADT, DDMS도 client</li><li>server: development machine의 background process이며, client와 daemon 사이에서의 communication을 관리</li><li>daemon: 각각의 device에서 동작하는 background process</li></ul><p>client를 시작하면, ADB server가 실행중인지 확인해서 실행중이지 않으면 server를 시작시킨다. server가 시작되면 TCP의 5037 port로 binding해서 adb client로부터의 command를 받아들이는데, 모든 client는 server와 communication 하기 위해 5037 port를 사용.</p><blockquote><p>실행파일 : <code>\${android_sdk_path}/tools/adb</code></p></blockquote><h2 id="command-입력-형식" tabindex="-1"><a class="header-anchor" href="#command-입력-형식"><span>Command 입력 형식</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">adb <span class="token punctuation">[</span>-d <span class="token operator">|</span> <span class="token parameter variable">-e</span> <span class="token operator">|</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>serialNumber<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="adb-devices" tabindex="-1"><a class="header-anchor" href="#adb-devices"><span><code>adb devices</code></span></a></h3><p>adb server와 연결된 device를 보여준다.</p><p>형식 : [serialNumber] [state]</p><ul><li><code>serialNumber</code> = type-consolePort (ex : emulator-5554)</li><li><code>state</code><ul><li>offline (device가 adb와 아직 연결되지 않았거나 응답이 없는 상태)</li><li>device (adb server와 연결된 상태)</li></ul></li></ul><h3 id="s-option" tabindex="-1"><a class="header-anchor" href="#s-option"><span><code>-s</code> option</span></a></h3><p>여러개의 device가 연결되어 있는 상태에서 특정 device에 command를 입력하고 싶을 때 사용</p><p>형식</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">adb <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>serialNumber<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span></span>
<span class="line"><span class="token comment"># ex : adb -s emulator-5554 install sample.apk</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="port-forwarding" tabindex="-1"><a class="header-anchor" href="#port-forwarding"><span>Port forwarding</span></a></h2><p>device의 port를 forwarding 하고 싶을 때 사용하는 명령</p><blockquote><p>ex : port 6100에서 7100으로 forwarding 하고 싶은 경우</p><blockquote><p><code>adb forward tcp:6100 tcp:7100</code></p></blockquote></blockquote><hr><h2 id="script-s" tabindex="-1"><a class="header-anchor" href="#script-s"><span>Script(s)</span></a></h2><h2 id="종합-리포트" tabindex="-1"><a class="header-anchor" href="#종합-리포트"><span>종합 리포트</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">adb dumpsys <span class="token operator">&lt;</span>service<span class="token operator">&gt;</span>       <span class="token comment"># app/service 상태정보 덤프, 서비스별로 추가 파라미터 받을 수 있음</span></span>
<span class="line">adb dumpstate <span class="token operator">&lt;</span><span class="token punctuation">..</span>.<span class="token operator">&gt;</span>         <span class="token comment"># device 상태정보 덤프. 상태정보를 추출하는 여러 명령어들의 조합으로 구성</span></span>
<span class="line">adb dumpcrash <span class="token operator">&lt;</span><span class="token punctuation">..</span>.<span class="token operator">&gt;</span>         <span class="token comment"># 애플리케이션이 crach될 때의 상태정보 덤프</span></span>
<span class="line">adb bugreport <span class="token operator">&lt;</span>출력할 경로<span class="token operator">&gt;</span>  <span class="token comment"># logcat + dumpsys + dumpstat</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="로그" tabindex="-1"><a class="header-anchor" href="#로그"><span>로그</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">adb logcat <span class="token comment"># 로그캣 보기</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="adb-shell" tabindex="-1"><a class="header-anchor" href="#adb-shell"><span><code>adb shell</code></span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># 앱 (강제로) 죽이기</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line">adb shell am force-stop <span class="token operator">&lt;</span>PACKAGE_NAME<span class="token operator">&gt;</span> </span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># 단말기에 설치 된 앱 apk파일 추출</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line">adb shell pm path kr.go.mobile.testbed.iff </span>
<span class="line"><span class="token comment"># package:/data/app/kr.go.mobile.testbed.iff-OOdwhCmgyXRvbOh3PjJdUw==/base.apk</span></span>
<span class="line">adb pull /data/app/kr.go.mobile.testbed.iff-yxAQZiMbPotN8fOSLIJR2Q<span class="token operator">==</span>/base.apk path/to/desired/destination</span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># 현재 Activity PID찾기 </span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line">adb shell <span class="token string">&quot;dumpsys activity | grep top-activity&quot;</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># 시스템 기본정보: 하드웨어, 커널 등</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/version     <span class="token comment"># 커널 버전</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/cpuinfo     <span class="token comment"># 프로세서 정보, CPU타입, 모델 제조사 등</span></span>
<span class="line">adb shell <span class="token function">cat</span> /porc/meminfo     <span class="token comment"># 메모리 정보, 실제 메모리 및 가상 메모리</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/devices     <span class="token comment"># 현재 커널에 설정되어 있는 장치 목록</span></span>
<span class="line">adb shell <span class="token function">mount</span>                 <span class="token comment"># 마운트된 모든 장치 정보</span></span>
<span class="line">adb shell <span class="token function">df</span>                    <span class="token comment"># 하드디스크 사용량</span></span>
<span class="line">adb shell <span class="token function">cat</span> /porc/filesystems <span class="token comment"># 커널에 설정되어 있는 파일시스템 목록</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/swaps       <span class="token comment"># 스왑 파티션의 크기와 사용량</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/interrupts  <span class="token comment"># 장치가 사용중인 인터럽트(IRQ)목록 표시</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/ioports     <span class="token comment"># 현재 사용중인 input/output 포트</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/partitions  <span class="token comment"># 파티션 정보</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/uptime      <span class="token comment"># 시스템이 얼마나 살아있었는지</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/stat        <span class="token comment"># 시스템 상태에 관한 다양한 정보, CPU 사용 통계, 부팅이후 page fault 발생 횟수 등</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/zoneinfo    <span class="token comment"># ZONEINFO</span></span>
<span class="line">adb shell <span class="token function">dmesg</span>                 <span class="token comment"># 시스템 부팅시 나왔던 메시지</span></span>
<span class="line">adb shell <span class="token function">ps</span>                    <span class="token comment"># 실행중인 프로세스 정보</span></span>
<span class="line">adb shell <span class="token function">ps</span> <span class="token parameter variable">-p</span> <span class="token parameter variable">-t</span>              <span class="token comment"># 프로세스와 쓰레드 목록</span></span>
<span class="line">adb shell <span class="token builtin class-name">set</span>                   <span class="token comment"># 환경설정값 출력 1</span></span>
<span class="line">adb shell <span class="token function">printenv</span>              <span class="token comment"># 환경설정값 출력 2</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># 시스템 리소스 사용 현황</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line">adb shell <span class="token function">vmstat</span>                <span class="token comment"># 시스템 리소스 상황 모니터, CPU, I/O, Memory 등</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/diskstats   <span class="token comment"># 디스크 utilization과 throughput. 즉 디스크 I/O현황</span></span>
<span class="line">adb shell <span class="token function">top</span>                   <span class="token comment"># 시스템 프로세스 상황 모니터링/ 프로세스별 CPU사용량, 메모리와 스왑 사용량 등</span></span>
<span class="line">adb shell procrank              <span class="token comment"># 프로세스별 메모리</span></span>
<span class="line">adb shell dumpsys meminfo <span class="token operator">&lt;</span>PID<span class="token operator">&gt;</span> <span class="token comment"># 해당 프로세스 메모리 상세 정보</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/<span class="token operator">&lt;</span>PID<span class="token operator">&gt;</span>/stat  <span class="token comment"># 해당 프로세스에 대한 정보, 시작시간, 상태, CPU 사용량 등</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/<span class="token operator">&lt;</span>PID<span class="token operator">&gt;</span>/maps  <span class="token comment"># 해당 프로세스의 메모리 맵 정보</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/vmstat      <span class="token comment"># 버추얼 메모리 통계?</span></span>
<span class="line">adb shell librank               <span class="token comment"># 라이브러리별 메모리 사용량?</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># 네트워크 관련</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/net/netlink <span class="token comment"># 네트워크 정보</span></span>
<span class="line">adb shell netcfg                <span class="token comment"># 네트워크 인터페이스와 IP주소 목록</span></span>
<span class="line">adb shell <span class="token function">netstat</span>               <span class="token comment"># 네트워크 연결상태 확인</span></span>
<span class="line">adb shell <span class="token function">nc</span>                    <span class="token comment"># 네트워크용 cat 명령어(netcat)</span></span>
<span class="line">adb shell <span class="token function">ifconfig</span>              <span class="token comment"># 네트워크 인터페이스 설정 정보. 장치명을 파라미터로 받음. ip 주소. 서브넷마스크 등</span></span>
<span class="line">adb shell tcpdump               <span class="token comment"># 실시간 패킷 모니터링</span></span>
<span class="line">adb shell iftop                 <span class="token comment"># 네트워크를 위한 top</span></span>
<span class="line">adb shell route                 <span class="token comment"># 해당 호스트까지 연결하는 중간 경로 정보인 라우팅 테이블 표시</span></span>
<span class="line">adb shell <span class="token function">ping</span>                  <span class="token comment"># 원격 호스트와의 연결 테스트</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/net/route   <span class="token comment"># Route</span></span>
<span class="line"><span class="token comment">#</span></span>
<span class="line"><span class="token comment"># 안드로이드 제공</span></span>
<span class="line"><span class="token comment"># </span></span>
<span class="line">adb shell pm <span class="token operator">&lt;</span><span class="token punctuation">..</span>.<span class="token operator">&gt;</span>              <span class="token comment"># package manager의 약자. 패키지/permission/instrumentation/feature 목록, 패키지 설치/제거 등</span></span>
<span class="line">adb shell am <span class="token operator">&lt;</span><span class="token punctuation">..</span>.<span class="token operator">&gt;</span>              <span class="token comment"># activity manager의 약자, 액티비티 시작, Intent 브로드캐스팅, Instrumentation 시작, profiling 시작 / 중지 등</span></span>
<span class="line">adb shell <span class="token function">service</span> <span class="token operator">&lt;</span><span class="token punctuation">..</span>.<span class="token operator">&gt;</span>         <span class="token comment"># 안드로이드 서비스 목록 표시, 서비스에 명령 전달</span></span>
<span class="line">adb shell monkey <span class="token operator">&lt;</span><span class="token punctuation">..</span>.<span class="token operator">&gt;</span>          <span class="token comment"># 애플리케이션에 랜덤 이벤트 발생시킴. 사용자 이벤트, 시스템 이벤트의 무작위 발행</span></span>
<span class="line">adb shell <span class="token function">cat</span> /data/anr/traces.txt <span class="token comment"># VM TRACES (쓰레드 덤프)</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/binder/proc/<span class="token operator">&lt;</span>PID<span class="token operator">&gt;</span> <span class="token comment"># 바인더 프로세스 상태</span></span>
<span class="line">adb shell <span class="token function">cat</span> /proc/binder/xxx <span class="token builtin class-name">:</span> 바인더 관련 정보<span class="token punctuation">(</span>xxx은 transaction, transaction_log, failed_transaction_log, stats 등<span class="token punctuation">)</span></span>
<span class="line">adb shell <span class="token function">cat</span> /data/system/packages.xml <span class="token builtin class-name">:</span> 설치된 패키지 세팅 정보</span>
<span class="line">adb shell setprop               <span class="token comment"># system property 셋팅</span></span>
<span class="line">adb shell getprop               <span class="token comment"># 셋팅된 system property 목록 출력</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app-내부저장소-접근-확인" tabindex="-1"><a class="header-anchor" href="#app-내부저장소-접근-확인"><span>App 내부저장소 접근 / 확인</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">adb shell <span class="token builtin class-name">cd</span> /data/data/<span class="token punctuation">[</span>packageNm<span class="token punctuation">]</span> <span class="token comment"># 경로 이동</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Copying files</p><h2 id="pull" tabindex="-1"><a class="header-anchor" href="#pull"><span><code>pull</code></span></a></h2><p>device에서 file을 copy해 올 때 사용 (recursively)</p><p><code>adb pull &lt;remote&gt; &lt;local&gt;</code></p><h2 id="push" tabindex="-1"><a class="header-anchor" href="#push"><span><code>push</code></span></a></h2><p>pull과 반대로 file을 device에 복사해 넣고 싶을 때 사용 (recursively)</p><p><code>adb push &lt;local&gt; &lt;remote&gt;</code></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">adb push foo.txt /sdcard/foo.txt<span class="token punctuation">)</span> <span class="token punctuation">(</span>/sdcard/foo.txt 에서 /sdcard는 device에 존재하는 path</span>
<span class="line">adb push <span class="token number">300</span>정진규001_env.cer /sdcard/GPKI/certificate/class2/300정진규001_env.cer</span>
<span class="line">adb push <span class="token number">300</span>정진규001_env.key /sdcard/GPKI/certificate/class2/300정진규001_env.key</span>
<span class="line">adb push <span class="token number">300</span>정진규001_sig.cer /sdcard/GPKI/certificate/class2/300정진규001_sig.cer</span>
<span class="line">adb push <span class="token number">300</span>정진규001_sig.key /sdcard/GPKI/certificate/class2/300정진규001_sig.key</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36)),m(` 

Listing of adb Commands

Options
-d

연결된 USB device에만 direct로 command 전송

USB device가 하나 이상이면 error return


-e

실행중인 device에만 command 전송

하나 이상의 device가 실행중이면 error return



-s <serialNumber>

특정 device에만 command 전송 (serialNumber 형식은 위 내용 참조)




General



devices

연결된 모든 device list 출력



help

제공되는 adb command list 출력



version

adb version 출력




Debug


logcat [<option>] [<filter-specs>]

log data 출력


bugreport

bugreport를 위한 dumpsys(system data dump), dumpstate(state dump), logcat data 출력


jdwp

특정 device의 JDWP process들의 list(pid) 출력



Data


install <path-to-apk>

application 설치



pull <remote> <local>

push <local> <remote>

위 내용 참조



Ports and Networking


forward <local> <remote>

특정 local port를 remote port로 fowarding

Scheme

tcp:<portnum>

local:<UNIX domain socket name>

dev:<character device name>

jdwp:<pid>



ppp <tty> [parm]...

USB로 PPP 실행

<tty> : PPP stream을 위한 tty

[parm] : PPP option




Scripting



get-serialno

adb의 serial number 출력


get-state

adb의 state 출력 (device / offline)


wait-for-device

device가 online일 때 까지 command 실행 정지



ex : adb wait-for-device shell getprop (state가 device가 되면 shell getprop command 실행



Note : 완전히 boot 된 이후에 사용 가능한 install 등의 command를 함께 사용할 경우 wait-for-device는 device state만 확인하므로 fully boot 되지 않았을 경우 error 발생 가능



Server


start-server

adb server가 실행중인지 확인해서 running 상태가 아니면 실행



kill-server

adb server process를 종료




Shell



shell

target device 안에서 remote shell을 시작



shell [<shellCommand>]

target device 안에서 shell command를 실행하고 remote shell을 빠져나간다





Shell Command 실행



ADB는 ash shell을 제공하는데, ash shell의 실행 바이너리는 device 내부의 /system/bin 경로에 존재


adb [-d | -e | -s <serialNumber>] shell로 remote shell을 실행한 후에 shell을 종료하고 싶으면 Ctrl + D or exit 입력




UI/Application Exerciser Monkey


User event의 random stream을 생성해 device에서 실행시키는 tool (stress test 용도)


ex : adb shell monkey -v -p packageName 500 (500가지의 random stream)




Other Shell Commands


device의 /system/bin 경로의 file들을 살펴보거나, adb -help로 확인



dumpsys

system data의 dump를 표시



dumpstate

state의 dump를 file로 저장


logcat [<option>]...[<filter-spec>]

logging을 가능하게 하거나 화면에 표시



dmesg

kernel debugging message를 화면에 출력



start

device를 시작(재시작)



stop

device 종료




Using logcat Commands


adb logcat

단순히 전체 log를 보고싶은 경우 사용 또는 remote shell에서 logcat 실행


Android에서 모든 log message는 tag와 priority를 가지고 있음

tag : system component를 짧은 문자열로 표현 (ex : view system의 경우 "View")

priority (ordered from lowest to highest)

V (Verbose)

D (Debug)

I (Info)

W (Warning)

E (Error)

F (Fatal)

S (Silent)


logcat 실행 후에 나타나는 log message에서 tag와 priority가 첫 column에 priority/tag 형태로 표시


ex : I/ActivityManager( 585) : Starting activity : Intent { action = android.intent.action... }



logcat의 filter는 tag:priority 형태로 표현하는데 tag는 표시하려는 tag의 이름을 입력하면 되고 입력한 priority와 상위 priority의 log들을 표시



ex : adb logcat ActivityManager:I MyApp:D *:S

ActivityManager의 I(Info) level 이상, MyApp의 D(Debug) level 이상의 log들만 표시



default filter expression


환경변수 ANDROID_LOG_TAGS에 default로 사용할 filter expression을 setting 후에 export 해서 사용



ex : export ANDROID_LOG_TAGS="ActivityManager:I MyApp:D *:S"



Note : remote shell을 사용해서 logcat을 실행하고 있을 경우 export 되지 않음 (?)




Controlling Log Output Format



-v option을 사용해서 출력되는 log의 f
`),n[13]||(n[13]=s("hr",null,null,-1)),a(o)])}const P=c(v,[["render",f]]),I=JSON.parse('{"path":"/programming/java-android/adb.html","title":"adb","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"adb","description":"Android > adb","icon":"fas fa-terminal","category":["Android","adb"],"tag":["adb","android"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"adb\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://chanhi2000.github.io/programming/java-android/adb.html"}],["meta",{"property":"og:site_name","content":"chanhi2000"}],["meta",{"property":"og:title","content":"adb"}],["meta",{"property":"og:description","content":"Android > adb"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"android"}],["meta",{"property":"article:tag","content":"adb"}]]},"git":{},"readingTime":{"minutes":2.8,"words":841},"filePathRelative":"programming/java-android/adb.md"}');export{P as comp,I as data};
