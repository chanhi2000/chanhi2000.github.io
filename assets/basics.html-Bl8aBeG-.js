import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as s,c,b as t,t as g,a as e,w as n,d as f,e as a}from"./app-B2dKc-qM.js";const h={},y={id:"frontmatter-title-관련",tabindex:"-1"},x={class:"header-anchor",href:"#frontmatter-title-관련"},k={class:"table-of-contents"},m=f('<hr><h2 id="기본-명령어" tabindex="-1"><a class="header-anchor" href="#기본-명령어"><span>기본 명령어</span></a></h2><h3 id="image-container관린" tabindex="-1"><a class="header-anchor" href="#image-container관린"><span>Image &amp; Container관린</span></a></h3><table><thead><tr><th style="text-align:left;">명령어</th><th style="text-align:left;">설명</th></tr></thead><tbody><tr><td style="text-align:left;"><code>docker create &lt;IMAGE&gt;</code></td><td style="text-align:left;">Create a container (without starting it)</td></tr><tr><td style="text-align:left;"><code>docker rename &lt;CONTAINER_NAME&gt; &lt;NEW_CONTAINER_NAME&gt;</code></td><td style="text-align:left;">Rename an existing container</td></tr><tr><td style="text-align:left;"><code>docker run -d -it &lt;IMAGE&gt;</code></td><td style="text-align:left;">Start a container and creates an interactive bash shell in the container</td></tr><tr><td style="text-align:left;"><code>docker exec -it &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Execute command inside already running container.</td></tr><tr><td style="text-align:left;"><code>docker rm &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Delete a container (if it is not running)</td></tr><tr><td style="text-align:left;"><code>docker update &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Update the configuration of the container</td></tr></tbody></table><h3 id="기동-중지" tabindex="-1"><a class="header-anchor" href="#기동-중지"><span>기동/중지</span></a></h3><table><thead><tr><th style="text-align:left;">명령어</th><th style="text-align:left;">설명</th></tr></thead><tbody><tr><td style="text-align:left;"><code>docker start &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Start Container</td></tr><tr><td style="text-align:left;"><code>docker stop &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Stop Container</td></tr><tr><td style="text-align:left;"><code>docker restart &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Stop running Container and start it again</td></tr><tr><td style="text-align:left;"><code>docker pause &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Pause processes in a running container</td></tr><tr><td style="text-align:left;"><code>docker unpause &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Unpause processes in a running container</td></tr><tr><td style="text-align:left;"><code>docker wait &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Block a container until others stop</td></tr><tr><td style="text-align:left;"><code>docker kill &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Kill a container by sending a SIGKILL to a running container</td></tr><tr><td style="text-align:left;"><code>docker attach &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Attach local standard input, output, and error streams to a running container</td></tr></tbody></table><h3 id="이미지-up-down" tabindex="-1"><a class="header-anchor" href="#이미지-up-down"><span>이미지 up/down</span></a></h3><table><thead><tr><th style="text-align:left;">명령어</th><th style="text-align:left;">설명</th></tr></thead><tbody><tr><td style="text-align:left;"><code>docker build &lt;URL/FILE&gt;</code></td><td style="text-align:left;">Create an image from a Dockerfile</td></tr><tr><td style="text-align:left;"><code>docker build -t &lt;tag&gt; &lt;URL/FILE&gt;</code></td><td style="text-align:left;">Create an image from a Dockerfile with Tags</td></tr><tr><td style="text-align:left;"><code>docker pull &lt;IMAGE&gt;</code></td><td style="text-align:left;">Pull an image from a registry</td></tr><tr><td style="text-align:left;"><code>docker push &lt;IMAGE&gt;</code></td><td style="text-align:left;">Push an image to a registry</td></tr><tr><td style="text-align:left;"><code>docker import &lt;URL/FILE&gt;</code></td><td style="text-align:left;">Create an image from a tarball</td></tr><tr><td style="text-align:left;"><code>docker commit &lt;CONTAINER&gt; &lt;NEW_IMAGE_NAME&gt;</code></td><td style="text-align:left;">Create an image from a container</td></tr><tr><td style="text-align:left;"><code>docker rmi &lt;IMAGE&gt;</code></td><td style="text-align:left;">Remove an image</td></tr><tr><td style="text-align:left;"><code>docker load &lt;TAR_FILE/STDIN_FILE&gt;</code></td><td style="text-align:left;">Load an image from a tar archive or stdin</td></tr><tr><td style="text-align:left;"><code>docker save &lt;IMAGE&gt; &gt; &lt;TAR_FILE&gt;</code></td><td style="text-align:left;">Save an image to a tar archive</td></tr></tbody></table><h3 id="상태-확인" tabindex="-1"><a class="header-anchor" href="#상태-확인"><span>상태 확인</span></a></h3><table><thead><tr><th style="text-align:left;">명령어</th><th style="text-align:left;">설명</th></tr></thead><tbody><tr><td style="text-align:left;"><code>docker ps -a</code></td><td style="text-align:left;">Lists both running containers and ones that have stopped</td></tr><tr><td style="text-align:left;"><code>docker logs &lt;CONTAINER&gt;</code></td><td style="text-align:left;">List the logs from a running container</td></tr><tr><td style="text-align:left;"><code>docker inspect &lt;OBJECT_NAME/ID&gt;</code></td><td style="text-align:left;">List low-level information on Docker objects</td></tr><tr><td style="text-align:left;"><code>docker events &lt;CONTAINER&gt;</code></td><td style="text-align:left;">List real-time events from a container</td></tr><tr><td style="text-align:left;"><code>docker port &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Show port mapping for a container</td></tr><tr><td style="text-align:left;"><code>docker top &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Show running processes in a container</td></tr><tr><td style="text-align:left;"><code>docker stats &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Show live resource usage statistics of container</td></tr><tr><td style="text-align:left;"><code>docker diff &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Show changes to files (or directories) on a filesystem</td></tr><tr><td style="text-align:left;"><code>docker &lt;image&gt; ls</code></td><td style="text-align:left;">List all images that are locally stored with the docker engine</td></tr><tr><td style="text-align:left;"><code>docker history &lt;IMAGE&gt;</code></td><td style="text-align:left;">Show the history of an image</td></tr></tbody></table><h3 id="네트워크" tabindex="-1"><a class="header-anchor" href="#네트워크"><span>네트워크</span></a></h3><table><thead><tr><th style="text-align:left;">명령어</th><th style="text-align:left;">설명</th></tr></thead><tbody><tr><td style="text-align:left;"><code>docker network ls</code></td><td style="text-align:left;">List networks</td></tr><tr><td style="text-align:left;"><code>docker network rm &lt;NETWORK&gt;</code></td><td style="text-align:left;">Remove one or more networks</td></tr><tr><td style="text-align:left;"><code>docker network inspect &lt;NETWORK&gt;</code></td><td style="text-align:left;">Show information on one or more networks</td></tr><tr><td style="text-align:left;"><code>docker network connect &lt;NETWORK&gt; &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Connects a container to a network</td></tr><tr><td style="text-align:left;"><code>docker network disconnect &lt;NETWORK&gt; &lt;CONTAINER&gt;</code></td><td style="text-align:left;">Disconnect a container from a network</td></tr></tbody></table><hr>',13);function u(o,N){const l=d("router-link"),r=d("TagLinks");return s(),c("div",null,[t("h1",y,[t("a",x,[t("span",null,g(o.$frontmatter.title)+" 관련",1)])]),t("nav",k,[t("ul",null,[t("li",null,[e(l,{to:"#기본-명령어"},{default:n(()=>[a("기본 명령어")]),_:1}),t("ul",null,[t("li",null,[e(l,{to:"#image-container관린"},{default:n(()=>[a("Image & Container관린")]),_:1})]),t("li",null,[e(l,{to:"#기동-중지"},{default:n(()=>[a("기동/중지")]),_:1})]),t("li",null,[e(l,{to:"#이미지-up-down"},{default:n(()=>[a("이미지 up/down")]),_:1})]),t("li",null,[e(l,{to:"#상태-확인"},{default:n(()=>[a("상태 확인")]),_:1})]),t("li",null,[e(l,{to:"#네트워크"},{default:n(()=>[a("네트워크")]),_:1})])])])])]),m,e(r)])}const I=i(h,[["render",u],["__file","basics.html.vue"]]),b=JSON.parse('{"path":"/g4e/devops-docker/basics.html","title":"Basics","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Basics","description":"Docker > Basics","icon":"fas fa-egg","category":["Docker","Basics"],"tag":["sh","bash","cli","docker","docker-desktop","docker-hub","docker-image","docker-container","vm","basics"]},"headers":[{"level":2,"title":"기본 명령어","slug":"기본-명령어","link":"#기본-명령어","children":[{"level":3,"title":"Image & Container관린","slug":"image-container관린","link":"#image-container관린","children":[]},{"level":3,"title":"기동/중지","slug":"기동-중지","link":"#기동-중지","children":[]},{"level":3,"title":"이미지 up/down","slug":"이미지-up-down","link":"#이미지-up-down","children":[]},{"level":3,"title":"상태 확인","slug":"상태-확인","link":"#상태-확인","children":[]},{"level":3,"title":"네트워크","slug":"네트워크","link":"#네트워크","children":[]}]}],"git":{},"readingTime":{"minutes":1.39,"words":418},"filePathRelative":"g4e/devops-docker/basics.md","excerpt":"\\n\\n<hr>\\n<h2>기본 명령어</h2>\\n<h3>Image &amp; Container관린</h3>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\"text-align:left\\">명령어</th>\\n<th style=\\"text-align:left\\">설명</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\"text-align:left\\"><code>docker create &lt;IMAGE&gt;</code></td>\\n<td style=\\"text-align:left\\">Create a container (without starting it)</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>docker rename &lt;CONTAINER_NAME&gt; &lt;NEW_CONTAINER_NAME&gt;</code></td>\\n<td style=\\"text-align:left\\">Rename an existing container</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>docker run -d -it &lt;IMAGE&gt;</code></td>\\n<td style=\\"text-align:left\\">Start a container and creates an interactive bash shell in the container</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>docker exec -it &lt;CONTAINER&gt;</code></td>\\n<td style=\\"text-align:left\\">Execute command inside already running container.</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>docker rm &lt;CONTAINER&gt;</code></td>\\n<td style=\\"text-align:left\\">Delete a container (if it is not running)</td>\\n</tr>\\n<tr>\\n<td style=\\"text-align:left\\"><code>docker update &lt;CONTAINER&gt;</code></td>\\n<td style=\\"text-align:left\\">Update the configuration of the container</td>\\n</tr>\\n</tbody>\\n</table>"}');export{I as comp,b as data};
