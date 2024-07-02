import{_ as b}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as k,o as v,c as h,a as n,t as g,b as l,w as a,d as s,n as p,g as r}from"./app-CtVGPIIl.js";const f={},w={id:"frontmatter-title-관련",tabindex:"-1"},S={class:"header-anchor",href:"#frontmatter-title-관련"},P={class:"table-of-contents"},y=n("hr",null,null,-1),$={id:"cd-autostart-ps1",tabindex:"-1"},_={class:"header-anchor",href:"#cd-autostart-ps1"},A=n("code",null,"cd-autostart.ps1",-1),E=n("p",null,"This PowerShell script changes the working directory to the user's autostart folder.",-1),C=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-autostart"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-autostart"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# 📂C:\\Users\\Markus\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the user's autostart folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's autostart folder.
.EXAMPLE
	PS> ./cd-autostart.ps1
	📂C:\\Users\\Markus\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s('/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Startup"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"Autostart folder at 📂'),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("hr",null,null,-1),D={id:"cd-desktop-ps1",tabindex:"-1"},N={class:"header-anchor",href:"#cd-desktop-ps1"},L=n("code",null,"cd-desktop.ps1",-1),R=n("p",null,"This PowerShell script changes the working directory to the user's desktop folder.",-1),O=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-desktop"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-desktop
`),n("span",{class:"token comment"},"# 📂/home/Markus/Desktop"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the user's desktop folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's desktop folder.
.EXAMPLE
	PS> ./cd-desktop
	📂/home/Markus/Desktop
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},'"~/Desktop"'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token namespace"},"[Environment]"),s("::GetFolderPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'DesktopDirectory'"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
		`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"User's desktop folder at 📂`),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("hr",null,null,-1),W={id:"cd-docs-ps1",tabindex:"-1"},z={class:"header-anchor",href:"#cd-docs-ps1"},B=n("code",null,"cd-docs.ps1",-1),U=n("p",null,"This PowerShell script changes the working directory to the documents folder.",-1),q=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-docs"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-docs
`),n("span",{class:"token comment"},"# 📂C:\\Users\\Markus\\Documents"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),X=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the documents folder
.DESCRIPTION
	This PowerShell script changes the working directory to the documents folder.
.EXAMPLE
	PS> ./cd-docs
	📂C:\\Users\\Markus\\Documents
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s('/Documents"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token namespace"},"[Environment]"),s("::GetFolderPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'MyDocuments'"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"Documents folder at 📂'),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("hr",null,null,-1),j={id:"cd-downloads-ps1",tabindex:"-1"},Y={class:"header-anchor",href:"#cd-downloads-ps1"},G=n("code",null,"cd-downloads.ps1",-1),J=n("p",null,"This PowerShell script changes the working directory to the user's downloads folder.",-1),Z=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-downloads"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-downloads
`),n("span",{class:"token comment"},"# 📂C:\\Users\\Markus\\Downloads"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the user's downloads folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's downloads folder.
.EXAMPLE
	PS> ./cd-downloads
	📂C:\\Users\\Markus\\Downloads
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},'"~/Downloads"'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"New-Object"),s(),n("span",{class:"token operator"},"-"),s("ComObject Shell"),n("span",{class:"token punctuation"},"."),s("Application"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("NameSpace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'shell:Downloads'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Self"),n("span",{class:"token punctuation"},"."),s(`Path
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
		`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"User's downloads folder at 📂`),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),sn=n("hr",null,null,-1),an={id:"cd-dropbox-ps1",tabindex:"-1"},en={class:"header-anchor",href:"#cd-dropbox-ps1"},tn=n("code",null,"cd-dropbox.ps1",-1),ln=n("p",null,"This PowerShell script changes the working directory to the user's Dropbox folder.",-1),on=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-dropbox"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),cn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-dropbox
`),n("span",{class:"token comment"},"# 📂C:\\Users\\Markus\\Dropbox"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the user's Dropbox folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's Dropbox folder.
.EXAMPLE
	PS> ./cd-dropbox
	📂C:\\Users\\Markus\\Dropbox
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s('/Dropbox"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"Dropbox folder at 📂'),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),rn=n("hr",null,null,-1),un={id:"cd-home-ps1",tabindex:"-1"},kn={class:"header-anchor",href:"#cd-home-ps1"},dn=n("code",null,"cd-home.ps1",-1),mn=n("p",null,"This PowerShell script changes the working directory to the user's home directory.",-1),bn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-home"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),vn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-home
`),n("span",{class:"token comment"},"# 📂C:\\Users\\Markus"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),hn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the user's home folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's home directory.
.EXAMPLE
	PS> ./cd-home
	📂C:\\Users\\Markus
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"~"'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
		`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"User's home folder at 📂`),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),gn=n("hr",null,null,-1),fn={id:"cd-music-ps1",tabindex:"-1"},wn={class:"header-anchor",href:"#cd-music-ps1"},Sn=n("code",null,"cd-music.ps1",-1),Pn=n("p",null,"This PowerShell script changes the working directory to the user's music folder.",-1),yn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-music"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$n=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-music
`),n("span",{class:"token comment"},"# 📂C:\\Users\\Markus\\Music"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_n=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the user's music folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's music folder.
.EXAMPLE
	PS> ./cd-music
	📂C:\\Users\\Markus\\Music
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},'"~/Music"'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token namespace"},"[Environment]"),s("::GetFolderPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'MyMusic'"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
		`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"User's music folder at 📂`),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),An=n("hr",null,null,-1),En={id:"cd-onedrive-ps1",tabindex:"-1"},Cn={class:"header-anchor",href:"#cd-onedrive-ps1"},xn=n("code",null,"cd-onedrive.ps1",-1),Tn=n("p",null,"This PowerShell script changes the working directory to the user's OneDrive folder.",-1),In=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-onedrive"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Dn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-onedrive
`),n("span",{class:"token comment"},"# 📂C:\\Users\\Markus\\OneDrive"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Nn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the user's OneDrive folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's OneDrive folder.
.EXAMPLE
	PS> ./cd-onedrive
	📂C:\\Users\\Markus\\OneDrive
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s('/OneDrive"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"OneDrive folder at 📂'),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ln=n("hr",null,null,-1),Rn={id:"cd-pics-ps1",tabindex:"-1"},On={class:"header-anchor",href:"#cd-pics-ps1"},Fn=n("code",null,"cd-pics.ps1",-1),Mn=n("p",null,"This PowerShell script changes the working directory to the user's pictures folder.",-1),Vn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-pics"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Wn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-pics
`),n("span",{class:"token comment"},"# 📂C:\\Users\\Markus\\Pictures"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),zn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the user's pictures folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's pictures folder.
.EXAMPLE
	PS> ./cd-pics
	📂C:\\Users\\Markus\\Pictures
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s('/Pictures"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token namespace"},"[Environment]"),s("::GetFolderPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'MyPictures'"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"Pictures folder at 📂'),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Bn=n("hr",null,null,-1),Un={id:"cd-recycle-bin-ps1",tabindex:"-1"},qn={class:"header-anchor",href:"#cd-recycle-bin-ps1"},Kn=n("code",null,"cd-recycle-bin.ps1",-1),Xn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-recycle-bin"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Hn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-recycle-bin"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),jn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the user's recycle bin folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's recycle bin folder.
.EXAMPLE
	PS> ./cd-recycle-bin
	📂C:\\$Recycle.Bin\\S-1-5-21-123404-23309-294260-1001
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"function"),s(" GetCurrentUserSID "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token namespace"},"[CmdletBinding()]"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"Add-Type"),s(),n("span",{class:"token operator"},"-"),s("AssemblyName System"),n("span",{class:"token punctuation"},"."),s("DirectoryServices"),n("span",{class:"token punctuation"},"."),s(`AccountManagement
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[System.DirectoryServices.AccountManagement.UserPrincipal]"),s("::Current"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("SID"),n("span",{class:"token punctuation"},"."),s(`Value
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s('/.local/share/Trash/"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token string"},[s('"C:\\'),n("span",{class:"token variable"},"$Recycle"),s('.Bin\\"')]),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),s("GetCurrentUserSID"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"Recycle bin folder at 📂'),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Yn=n("hr",null,null,-1),Gn={id:"cd-repos-ps1",tabindex:"-1"},Jn={class:"header-anchor",href:"#cd-repos-ps1"},Zn=n("code",null,"cd-repos.ps1",-1),Qn=n("p",null,"This PowerShell script changes the working directory to the user's Git repositories folder.",-1),ns=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-repos"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Subpath"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Subpath <String>
    Specifies an additional relative subpath `),n("span",{class:"token punctuation"},"("),s("optional"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ss=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-repos
`),n("span",{class:"token comment"},"# 📂C:\\Users\\Markus\\source\\Repos"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),as=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the user's repos folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's Git repositories folder.
.PARAMETER Subpath
	Specifies an additional relative subpath (optional)
.EXAMPLE
	PS> ./cd-repos
	📂C:\\Users\\Markus\\source\\Repos
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Subpath"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s('/Repos"')]),s(),n("span",{class:"token operator"},"-"),s("pathType Container"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s("		"),n("span",{class:"token comment"},"# try short name"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s("/Repos/"),n("span",{class:"token variable"},"$Subpath"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s('/Repositories"')]),s(),n("span",{class:"token operator"},"-"),s("pathType Container"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s("	"),n("span",{class:"token comment"},"# try long name"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s("/Repositories/"),n("span",{class:"token variable"},"$Subpath"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s('/source/repos"')]),s(),n("span",{class:"token operator"},"-"),s("pathType Container"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token comment"},"# try Visual Studio default"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s("/source/repos/"),n("span",{class:"token variable"},"$Subpath"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"The folder for Git repositories in your home directory doesn't exist (yet)."`),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType Container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"The path to 📂'),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)."`)]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error: '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),es=n("hr",null,null,-1),ts={id:"cd-root-ps1",tabindex:"-1"},ls={class:"header-anchor",href:"#cd-root-ps1"},is=n("code",null,"cd-root.ps1",-1),os=n("code",null,"C:\\",-1),cs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-root"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ps=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-root
`),n("span",{class:"token comment"},"# 📂C:\\"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),rs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the root directory 
.DESCRIPTION
	This PowerShell script changes the current working directory to the root directory (C:\\ on Windows).
.EXAMPLE
	PS> ./cd-root
	📂C:\\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s("	"),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token string"},'"/"'),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token string"},'"C:\\"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),us=n("hr",null,null,-1),ks={id:"cd-scripts-ps1",tabindex:"-1"},ds={class:"header-anchor",href:"#cd-scripts-ps1"},ms=n("code",null,"cd-scripts.ps1",-1),bs=n("p",null,"This PowerShell script changes the working directory to the PowerShell scripts folder.",-1),vs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-scripts"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),hs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-scripts
`),n("span",{class:"token comment"},"# 📂C:\\Users\\Markus\\source\\repos\\PowerShell\\Scripts"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),gs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the PowerShell scripts folder
.DESCRIPTION
	This PowerShell script changes the working directory to the PowerShell scripts folder.
.EXAMPLE
	PS> ./cd-scripts
	📂C:\\Users\\Markus\\source\\repos\\PowerShell\\Scripts
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"PowerShell scripts folder at 📂'),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fs=n("hr",null,null,-1),ws={id:"cd-ssh-ps1",tabindex:"-1"},Ss={class:"header-anchor",href:"#cd-ssh-ps1"},Ps=n("code",null,"cd-ssh.ps1",-1),ys=n("p",null,"This PowerShell script changes the working directory to the user's SSH folder.",-1),$s=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-ssh"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_s=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-ssh
`),n("span",{class:"token comment"},"# 📂C:\\Users\\Markus\\.ssh"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),As=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the user's SSH folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's SSH folder.
.EXAMPLE
	PS> ./cd-ssh
	📂C:\\Users\\Markus\\.ssh
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},'"~/.ssh"'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"User's SSH folder at 📂`),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Es=n("hr",null,null,-1),Cs={id:"cd-up-ps1",tabindex:"-1"},xs={class:"header-anchor",href:"#cd-up-ps1"},Ts=n("code",null,"cd-up.ps1",-1),Is=n("p",null,"This PowerShell script changes the working directory to one directory level up.",-1),Ds=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-up"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ns=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-up
`),n("span",{class:"token comment"},"# 📂C:\\Users"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ls=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to one level up
.DESCRIPTION
	This PowerShell script changes the working directory to one directory level up.
.EXAMPLE
	PS> .\\cd-up
	📂C:\\Users
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},'".."'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"Folder at 📂'),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Rs=n("hr",null,null,-1),Os={id:"cd-up2-ps1",tabindex:"-1"},Fs={class:"header-anchor",href:"#cd-up2-ps1"},Ms=n("code",null,"cd-up2.ps1",-1),Vs=n("p",null,"This PowerShell script changes the working directory to two directory level up.",-1),Ws=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-up2"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),zs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-up2
`),n("span",{class:"token comment"},"# 📂C:\\"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Bs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to two directory levels up
.DESCRIPTION
	This PowerShell script changes the working directory to two directory level up.
.EXAMPLE
	PS> ./cd-up2
	📂C:\\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},'"../.."'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"Folder at 📂'),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Us=n("hr",null,null,-1),qs={id:"cd-up3-ps1",tabindex:"-1"},Ks={class:"header-anchor",href:"#cd-up3-ps1"},Xs=n("code",null,"cd-up3.ps1",-1),Hs=n("p",null,"This PowerShell script changes the working directory to three directory levels up.",-1),js=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-up3"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ys=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-up3
📂C:\\

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Gs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to three directory levels up
.DESCRIPTION
	This PowerShell script changes the working directory to three directory levels up.
.EXAMPLE
	PS> ./cd-up3
	📂C:\\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},'"../../.."'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"Folder at 📂'),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Js=n("hr",null,null,-1),Zs={id:"cd-up4-ps1",tabindex:"-1"},Qs={class:"header-anchor",href:"#cd-up4-ps1"},na=n("code",null,"cd-up4.ps1",-1),sa=n("p",null,"This PowerShell script changes the working directory to four directory levels up.",-1),aa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-up4"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ea=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-up4
`),n("span",{class:"token comment"},"# 📂C:\\"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ta=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to four directory levels up
.DESCRIPTION
	This PowerShell script changes the working directory to four directory levels up.
.EXAMPLE
	PS> ./cd-up4
	📂C:\\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},'"../../../.."'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"Folder at 📂'),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),la=n("hr",null,null,-1),ia={id:"cd-videos-ps1",tabindex:"-1"},oa={class:"header-anchor",href:"#cd-videos-ps1"},ca=n("code",null,"cd-videos.ps1",-1),pa=n("p",null,"This PowerShell script changes the working directory to the user's videos folder.",-1),ra=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("cd-videos"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ua=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`cd-videos
`),n("span",{class:"token comment"},"# 📂C:\\Users\\Markus\\Videos"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ka=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the working directory to the user's videos folder
.DESCRIPTION
	This PowerShell script changes the working directory to the user's videos folder.
.EXAMPLE
	PS> ./cd-videos
	📂C:\\Users\\Markus\\Videos
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s('/Videos"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token namespace"},"[Environment]"),s("::GetFolderPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'MyVideos'"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"Videos folder at 📂'),n("span",{class:"token variable"},"$Path"),s(` doesn't exist (yet)"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),da=n("hr",null,null,-1),ma={id:"check-symlinks-ps1",tabindex:"-1"},ba={class:"header-anchor",href:"#check-symlinks-ps1"},va=n("code",null,"check-symlinks.ps1",-1),ha=n("p",null,"This PowerShell script checks every symbolic link in a folder (including subfolders). It returns the number of broken symlinks as exit value.",-1),ga=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-symlinks"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Folder"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Folder <String>
    Specifies the path to the folder
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`check-symlinks C:\\Users
`),n("span",{class:"token comment"},"# ⏳ Checking symlinks at 📂C:\\Users including subfolders..."),s(`
`),n("span",{class:"token comment"},"# ✔️ Found 0 broken symlinks at 📂C:\\Users in 60 sec"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),wa=n("p",null,null,-1),Sa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks symlinks in a folder
.DESCRIPTION
	This PowerShell script checks every symbolic link in a folder (including subfolders).
	It returns the number of broken symlinks as exit value.
.PARAMETER folder
	Specifies the path to the folder
.EXAMPLE
	PS> ./check-symlinks C:\\Users
	⏳ Checking symlinks at 📂C:\\Users including subfolders...
	✔️ Found 0 broken symlinks at 📂C:\\Users in 60 sec
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Folder"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Folder"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Folder"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the path to the folder"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$FullPath"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"⏳ Checking symlinks at 📂'),n("span",{class:"token variable"},"$FullPath"),s(' including subfolders..."')]),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$NumTotal"),s(" = "),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$NumBroken"),s(` = 0
	`),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token variable"},"$FullPath"),s(),n("span",{class:"token operator"},"-"),s("recurse  "),n("span",{class:"token punctuation"},"|"),s(" Where "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("Attributes "),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token string"},'"ReparsePoint"'),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"ForEach-Object"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Symlink"),s(" = "),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s(`FullName
		`),n("span",{class:"token variable"},"$Target"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Select-Object"),s(),n("span",{class:"token operator"},"-"),s("ExpandProperty Target "),n("span",{class:"token operator"},"-"),s("ErrorAction Ignore"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$path"),s(" = "),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("FullName "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},'"\\..\\"'),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Select-Object"),s(),n("span",{class:"token operator"},"-"),s("ExpandProperty Target"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token variable"},"$item"),s(" = "),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token variable"},"$path"),s(),n("span",{class:"token operator"},"-"),s(`ErrorAction Ignore
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token variable"},"$item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token variable"},"$NumBroken"),n("span",{class:"token operator"},"++"),s(`
				`),n("span",{class:"token string"},[s('"Symlink '),n("span",{class:"token variable"},"$Symlink"),s(" to: "),n("span",{class:"token variable"},"$Target"),s(" seems broken (#"),n("span",{class:"token variable"},"$NumBroken"),s(')"')]),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token variable"},"$NumTotal"),n("span",{class:"token operator"},"++"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$NumTotal"),s(),n("span",{class:"token operator"},"-eq"),s(" 0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"✔️ No symlink found at 📂'),n("span",{class:"token variable"},"$FullPath"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(` 
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$NumBroken"),s(),n("span",{class:"token operator"},"-eq"),s(" 1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"✔️ Found '),n("span",{class:"token variable"},"$NumBroken"),s(" broken symlink at 📂"),n("span",{class:"token variable"},"$FullPath"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"✔️ Found '),n("span",{class:"token variable"},"$NumBroken"),s(" broken symlinks at 📂"),n("span",{class:"token variable"},"$FullPath"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(),n("span",{class:"token variable"},"$NumBroken"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Pa=n("hr",null,null,-1),ya={id:"check-xml-file-ps1",tabindex:"-1"},$a={class:"header-anchor",href:"#check-xml-file-ps1"},_a=n("code",null,"check-xml-file.ps1",-1),Aa=n("p",null,"This PowerShell script checks the given XML file for validity.",-1),Ea=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-xml-file"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("file"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`file <String>
    Specifies the path to the XML file to check
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ca=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-xml-file myfile"),n("span",{class:"token punctuation"},"."),s(`xml
`),n("span",{class:"token comment"},"# ✔️ XML file is valid"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xa=n("p",null,null,-1),Ta=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks the given XML file for validity
.DESCRIPTION
	This PowerShell script checks the given XML file for validity.
.PARAMETER file
	Specifies the path to the XML file to check
.EXAMPLE
	PS> ./check-xml-file myfile.xml
	✔️ XML file is valid
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$file"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$file"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$file"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter path to XML file"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$XmlFile"),s(" = "),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token variable"},"$file"),s(`
	
	`),n("span",{class:"token variable"},"$script"),s(`:ErrorCount = 0
	
	`),n("span",{class:"token comment"},"# Perform the XSD Validation"),s(`
	`),n("span",{class:"token variable"},"$ReaderSettings"),s(" = "),n("span",{class:"token function"},"New-Object"),s(),n("span",{class:"token operator"},"-"),s("TypeName System"),n("span",{class:"token punctuation"},"."),s("Xml"),n("span",{class:"token punctuation"},"."),s(`XmlReaderSettings
	`),n("span",{class:"token variable"},"$ReaderSettings"),n("span",{class:"token punctuation"},"."),s("ValidationType = "),n("span",{class:"token namespace"},"[System.Xml.ValidationType]"),s(`::Schema
	`),n("span",{class:"token variable"},"$ReaderSettings"),n("span",{class:"token punctuation"},"."),s("ValidationFlags = "),n("span",{class:"token namespace"},"[System.Xml.Schema.XmlSchemaValidationFlags]"),s("::ProcessInlineSchema "),n("span",{class:"token operator"},"-bor"),s(),n("span",{class:"token namespace"},"[System.Xml.Schema.XmlSchemaValidationFlags]"),s(`::ProcessSchemaLocation
	`),n("span",{class:"token variable"},"$ReaderSettings"),n("span",{class:"token punctuation"},"."),s("add_ValidationEventHandler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$script"),s(":ErrorCount+"),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$Reader"),s(" = "),n("span",{class:"token namespace"},"[System.Xml.XmlReader]"),s("::Create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$XmlFile"),n("span",{class:"token punctuation"},"."),s("FullName"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$ReaderSettings"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Reader"),n("span",{class:"token punctuation"},"."),s("Read"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$Reader"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$script"),s(":ErrorCount "),n("span",{class:"token operator"},"-gt"),s(" 0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"write-warning"),s(),n("span",{class:"token string"},'"Invalid XML file"'),s(`
		`),n("span",{class:"token keyword"},"exit"),s(` 1
	`),n("span",{class:"token punctuation"},"}"),s(` 

	`),n("span",{class:"token string"},'"✔️ XML file is valid"'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ia=n("hr",null,null,-1),Da={id:"clear-recycle-bin-ps1",tabindex:"-1"},Na={class:"header-anchor",href:"#clear-recycle-bin-ps1"},La=n("code",null,"clear-recycle-bin.ps1",-1),Ra=n("p",null,"This PowerShell script removes the content of the recycle bin folder permanently. IMPORTANT NOTE: this cannot be undo!",-1),Oa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"clear-recycle"),n("span",{class:"token operator"},"-"),s("bin"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Fa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"clear-recycle"),n("span",{class:"token operator"},"-"),s("bin"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ma=n("p",null,null,-1),Va=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Clears the recycle bin folder
.DESCRIPTION
	This PowerShell script removes the content of the recycle bin folder permanently.
	IMPORTANT NOTE: this cannot be undo!
.EXAMPLE
	PS> ./clear-recycle-bin
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Clear-RecycleBin"),s(),n("span",{class:"token operator"},"-"),s("Confirm:"),n("span",{class:"token boolean"},"$false"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'Clear-RecycleBin' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	& `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/speak-english.ps1"')]),s(),n("span",{class:"token string"},`"It's clean now."`),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Wa=n("hr",null,null,-1),za={id:"copy-photos-sorted-ps1",tabindex:"-1"},Ba={class:"header-anchor",href:"#copy-photos-sorted-ps1"},Ua=n("code",null,"copy-photos-sorted.ps1",-1),qa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"copy-photos"),n("span",{class:"token operator"},"-"),s("sorted"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ka=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"copy-photos"),n("span",{class:"token operator"},"-"),s("sorted"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Xa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Copy photos sorted by year and month
.DESCRIPTION
	This PowerShell script copies image files from sourceDir to targetDir sorted by year and month.
.PARAMETER sourceDir
	Specifies the path to the source folder
.PARAMTER targetDir
	Specifies the path to the target folder
.EXAMPLE
	PS> ./copy-photos-sorted.ps1 D:\\iPhone\\DCIM C:\\MyPhotos
	⏳ Copying IMG_20230903_134445.jpg to C:\\MyPhotos\\2023\\09 SEP\\...
	✔️ Copied 1 photo to 📂C:\\MyPhotos in 41 sec
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$sourceDir"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$targetDir"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" CopyFile "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$sourcePath"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$targetDir"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$date"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$filename"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$year"),s(" = "),n("span",{class:"token variable"},"$date"),s(),n("span",{class:"token operator"},"/"),s(` 10000
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$month"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$date"),s(),n("span",{class:"token operator"},"/"),s(" 100"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(` 100
	`),n("span",{class:"token variable"},"$monthDir"),s(" = "),n("span",{class:"token keyword"},"switch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$month"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	1  `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"01 JAN"'),n("span",{class:"token punctuation"},"}"),s(`
	2  `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"02 FEB"'),n("span",{class:"token punctuation"},"}"),s(`
	3  `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"03 MAR"'),n("span",{class:"token punctuation"},"}"),s(`
	4  `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"04 APR"'),n("span",{class:"token punctuation"},"}"),s(`
	5  `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"05 MAY"'),n("span",{class:"token punctuation"},"}"),s(`
	6  `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"06 JUN"'),n("span",{class:"token punctuation"},"}"),s(`
	7  `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"07 JUL"'),n("span",{class:"token punctuation"},"}"),s(`
	8  `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"08 AUG"'),n("span",{class:"token punctuation"},"}"),s(`
	9  `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"09 SEP"'),n("span",{class:"token punctuation"},"}"),s(`
	10 `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"10 OCT"'),n("span",{class:"token punctuation"},"}"),s(`
	11 `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"11 NOV"'),n("span",{class:"token punctuation"},"}"),s(`
	12 `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"12 DEC"'),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$TargetPath"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$targetDir"),s("/"),n("span",{class:"token variable"},"$year"),s("/"),n("span",{class:"token variable"},"$monthDir"),s("/"),n("span",{class:"token variable"},"$filename"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TargetPath"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"⏳ Skipping existing '),n("span",{class:"token variable"},"$targetDir"),s("\\"),n("span",{class:"token variable"},"$year"),s("\\"),n("span",{class:"token variable"},"$monthDir"),s("\\"),n("span",{class:"token variable"},"$filename"),s('..."')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"⏳ Copying '),n("span",{class:"token variable"},"$filename"),s(" to "),n("span",{class:"token variable"},"$targetDir"),s("\\"),n("span",{class:"token variable"},"$year"),s("\\"),n("span",{class:"token variable"},"$monthDir"),s('\\..."')]),s(`
		`),n("span",{class:"token function"},"New-Item"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$targetDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("name "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$year"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("itemType "),n("span",{class:"token string"},'"directory"'),s(),n("span",{class:"token operator"},"-"),s("force "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"out-null"),s(`
		`),n("span",{class:"token function"},"New-Item"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$targetDir"),s("/"),n("span",{class:"token variable"},"$year"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("name "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$monthDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("itemType "),n("span",{class:"token string"},'"directory"'),s(),n("span",{class:"token operator"},"-"),s("force "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"out-null"),s(`
		`),n("span",{class:"token function"},"Copy-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$sourcePath"),s('"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TargetPath"),s('"')]),s(),n("span",{class:"token operator"},"-"),s(`force
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sourceDir"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$sourceDir"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter file path to the source directory"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$targetDir"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$targetDir"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter file path to the target directory"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$stopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopWatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"⏳ Checking source directory 📂'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$sourceDir"),n("span",{class:"token punctuation"},")")]),s('..."')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$sourceDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access source directory: `),n("span",{class:"token variable"},"$sourceDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$files"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$sourceDir"),s('\\*.jpg"')]),s(),n("span",{class:"token operator"},"-"),s("attributes "),n("span",{class:"token operator"},"!"),s("Directory"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"⏳ Checking target directory 📂'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$targetDir"),n("span",{class:"token punctuation"},")")]),s('..."')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$targetDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access target directory: `),n("span",{class:"token variable"},"$targetDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$file"),s(" in "),n("span",{class:"token variable"},"$files"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$filename"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$file"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$filename"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"IMG_*_*.jpg"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$Array"),s(" = "),n("span",{class:"token variable"},"$filename"),n("span",{class:"token punctuation"},"."),s("split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"_"'),n("span",{class:"token punctuation"},")"),s(`
			CopyFile `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$file"),s('"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$targetDir"),s('"')]),s(),n("span",{class:"token variable"},"$Array"),n("span",{class:"token punctuation"},"["),s("1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$filename"),s('"')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$filename"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"IMG-*-*.jpg"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$Array"),s(" = "),n("span",{class:"token variable"},"$filename"),n("span",{class:"token punctuation"},"."),s("split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"-"'),n("span",{class:"token punctuation"},")"),s(`
			CopyFile `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$file"),s('"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$targetDir"),s('"')]),s(),n("span",{class:"token variable"},"$Array"),n("span",{class:"token punctuation"},"["),s("1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$filename"),s('"')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$filename"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"PANO_*_*.jpg"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$Array"),s(" = "),n("span",{class:"token variable"},"$filename"),n("span",{class:"token punctuation"},"."),s("split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"_"'),n("span",{class:"token punctuation"},")"),s(`
			CopyFile `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$file"),s('"')]),s("  "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$targetDir"),s('"')]),s(),n("span",{class:"token variable"},"$Array"),n("span",{class:"token punctuation"},"["),s("1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$filename"),s('"')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$filename"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"PANO-*-*.jpg"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$Array"),s(" = "),n("span",{class:"token variable"},"$filename"),n("span",{class:"token punctuation"},"."),s("split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"-"'),n("span",{class:"token punctuation"},")"),s(`
			CopyFile `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$file"),s('"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$targetDir"),s('"')]),s(),n("span",{class:"token variable"},"$Array"),n("span",{class:"token punctuation"},"["),s("1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$filename"),s('"')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$filename"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"SAVE_*_*.jpg"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$Array"),s(" = "),n("span",{class:"token variable"},"$filename"),n("span",{class:"token punctuation"},"."),s("split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"_"'),n("span",{class:"token punctuation"},")"),s(`
			CopyFile `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$file"),s('"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$targetDir"),s('"')]),s(),n("span",{class:"token variable"},"$Array"),n("span",{class:"token punctuation"},"["),s("1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$filename"),s('"')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"⏳ Skipping '),n("span",{class:"token variable"},"$filename"),s(' with unknown filename format..."')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$elapsed"),s(" = "),n("span",{class:"token variable"},"$stopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ Copied '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$files"),n("span",{class:"token punctuation"},"."),s("Count"),n("span",{class:"token punctuation"},")")]),s(" photos to 📂"),n("span",{class:"token variable"},"$targetDir"),s(" in "),n("span",{class:"token variable"},"$elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ha=n("hr",null,null,-1),ja={id:"decrypt-file-ps1",tabindex:"-1"},Ya={class:"header-anchor",href:"#decrypt-file-ps1"},Ga=n("code",null,"decrypt-file.ps1",-1),Ja=n("p",null,"This PowerShell script decrypts a file using the given password and AES encryption.",-1),Za=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("decrypt-file"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Path"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Password"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Path <String>
    Specifies the path to the file to decrypt
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`Password <String>
    Specifies the password
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Qa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("decrypt-file"),n("span",{class:"token punctuation"},"."),s("ps1 C:\\MyFile"),n("span",{class:"token punctuation"},"."),s("txt "),n("span",{class:"token string"},'"123"'),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ne=n("p",null,null,-1),se=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Decrypts a file
.DESCRIPTION
	This PowerShell script decrypts a file using the given password and AES encryption.
.PARAMETER Path
	Specifies the path to the file to decrypt
.PARAMETER Password
	Specifies the password 
.EXAMPLE
	PS> ./decrypt-file.ps1 C:\\MyFile.txt "123"
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Password"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"function"),s(" DecryptFile "),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token punctuation"},"["),s("CmdletBinding"),n("span",{class:"token punctuation"},"("),s("DefaultParameterSetName="),n("span",{class:"token string"},"'SecureString'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token namespace"},"[OutputType([System.IO.FileInfo[]])]"),s(`
`),n("span",{class:"token keyword"},"Param"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token namespace"},"[Parameter(Mandatory=$true, Position=1, ValueFromPipeline=$true, ValueFromPipelineByPropertyName=$true)]"),s(`
    `),n("span",{class:"token punctuation"},"["),s("Alias"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'PSPath'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'LiteralPath'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token namespace"},"[string[]]"),n("span",{class:"token variable"},"$FileName"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token namespace"},"[Parameter(Mandatory=$false, Position=2, ValueFromPipelineByPropertyName=$true)]"),s(`
    `),n("span",{class:"token punctuation"},"["),s("ValidateSet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'AES'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'DES'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'RC2'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'Rijndael'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'TripleDES'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token namespace"},"[String]"),n("span",{class:"token variable"},"$Algorithm"),s(" = "),n("span",{class:"token string"},"'AES'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"["),s("Parameter"),n("span",{class:"token punctuation"},"("),s("Mandatory="),n("span",{class:"token boolean"},"$true"),n("span",{class:"token punctuation"},","),s(" Position=3"),n("span",{class:"token punctuation"},","),s(" ValueFromPipelineByPropertyName="),n("span",{class:"token boolean"},"$true"),n("span",{class:"token punctuation"},","),s(" ParameterSetName="),n("span",{class:"token string"},"'SecureString'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token namespace"},"[System.Security.SecureString]"),n("span",{class:"token variable"},"$Key"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"["),s("Parameter"),n("span",{class:"token punctuation"},"("),s("Mandatory="),n("span",{class:"token boolean"},"$true"),n("span",{class:"token punctuation"},","),s(" Position=3"),n("span",{class:"token punctuation"},","),s(" ParameterSetName="),n("span",{class:"token string"},"'PlainText'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token namespace"},"[String]"),n("span",{class:"token variable"},"$KeyAsPlainText"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token namespace"},"[Parameter(Mandatory=$false, Position=4, ValueFromPipelineByPropertyName=$true)]"),s(`
    `),n("span",{class:"token namespace"},"[System.Security.Cryptography.CipherMode]"),n("span",{class:"token variable"},"$CipherMode"),s(" = "),n("span",{class:"token string"},"'CBC'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token namespace"},"[Parameter(Mandatory=$false, Position=5, ValueFromPipelineByPropertyName=$true)]"),s(`
    `),n("span",{class:"token namespace"},"[System.Security.Cryptography.PaddingMode]"),n("span",{class:"token variable"},"$PaddingMode"),s(" = "),n("span",{class:"token string"},"'PKCS7'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token namespace"},"[Parameter(Mandatory=$false, Position=6)]"),s(`
    `),n("span",{class:"token namespace"},"[String]"),n("span",{class:"token variable"},"$Suffix"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token namespace"},"[Parameter()]"),s(`
    `),n("span",{class:"token namespace"},"[Switch]"),n("span",{class:"token variable"},"$RemoveSource"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"Process"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"try"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$PSCmdlet"),n("span",{class:"token punctuation"},"."),s("ParameterSetName "),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'PlainText'"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token variable"},"$Key"),s(" = "),n("span",{class:"token variable"},"$KeyAsPlainText"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"ConvertTo-SecureString"),s(),n("span",{class:"token operator"},"-"),s("AsPlainText "),n("span",{class:"token operator"},"-"),s(`Force
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token variable"},"$BSTR"),s(" = "),n("span",{class:"token namespace"},"[System.Runtime.InteropServices.Marshal]"),s("::SecureStringToBSTR"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Key"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token variable"},"$EncryptionKey"),s(" = "),n("span",{class:"token namespace"},"[System.Convert]"),s("::FromBase64String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[System.Runtime.InteropServices.Marshal]"),s("::PtrToStringAuto"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$BSTR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

            `),n("span",{class:"token variable"},"$Crypto"),s(" = "),n("span",{class:"token namespace"},"[System.Security.Cryptography.SymmetricAlgorithm]"),s("::Create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Algorithm"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("Mode = "),n("span",{class:"token variable"},"$CipherMode"),s(`
            `),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("Padding = "),n("span",{class:"token variable"},"$PaddingMode"),s(`
            `),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("KeySize = "),n("span",{class:"token variable"},"$EncryptionKey"),n("span",{class:"token punctuation"},"."),s(`Length*8
            `),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("Key = "),n("span",{class:"token variable"},"$EncryptionKey"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"Catch"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"Write-Error"),s(),n("span",{class:"token variable"},"$_"),s(),n("span",{class:"token operator"},"-"),s(`ErrorAction Stop
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),s(),n("span",{class:"token variable"},"$PSBoundParameters"),n("span",{class:"token punctuation"},"."),s("ContainsKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Suffix'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$Suffix"),s(" = "),n("span",{class:"token string"},[s('".'),n("span",{class:"token variable"},"$Algorithm"),s('"')]),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token variable"},"$Files"),s(" = "),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token operator"},"-"),s("LiteralPath "),n("span",{class:"token variable"},"$FileName"),s(`

        `),n("span",{class:"token keyword"},"ForEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$File"),s(" in "),n("span",{class:"token variable"},"$Files"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"If"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),s(),n("span",{class:"token variable"},"$File"),n("span",{class:"token punctuation"},"."),s("Name"),n("span",{class:"token punctuation"},"."),s("EndsWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Suffix"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token function"},"Write-Error"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$File"),n("span",{class:"token punctuation"},"."),s("FullName"),n("span",{class:"token punctuation"},")")]),s(" does not have an extension of '"),n("span",{class:"token variable"},"$Suffix"),s(`'."`)]),s(`
                `),n("span",{class:"token keyword"},"Continue"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token variable"},"$DestinationFile"),s(" = "),n("span",{class:"token variable"},"$File"),n("span",{class:"token punctuation"},"."),s("FullName "),n("span",{class:"token operator"},"-replace"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Suffix"),s('$"')]),s(`

            `),n("span",{class:"token keyword"},"Try"),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token variable"},"$FileStreamReader"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("IO"),n("span",{class:"token punctuation"},"."),s("FileStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$File"),n("span",{class:"token punctuation"},"."),s("FullName"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[System.IO.FileMode]"),s("::Open"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$FileStreamWriter"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("IO"),n("span",{class:"token punctuation"},"."),s("FileStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$DestinationFile"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[System.IO.FileMode]"),s("::Create"),n("span",{class:"token punctuation"},")"),s(`

                `),n("span",{class:"token namespace"},"[Byte[]]"),n("span",{class:"token variable"},"$LenIV"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" Byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(` 4
                `),n("span",{class:"token variable"},"$FileStreamReader"),n("span",{class:"token punctuation"},"."),s("Seek"),n("span",{class:"token punctuation"},"("),s("0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[System.IO.SeekOrigin]"),s("::"),n("span",{class:"token keyword"},"Begin"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Out-Null"),s(`
                `),n("span",{class:"token variable"},"$FileStreamReader"),n("span",{class:"token punctuation"},"."),s("Read"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$LenIV"),n("span",{class:"token punctuation"},","),s("  0"),n("span",{class:"token punctuation"},","),s(" 3"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Out-Null"),s(`
                `),n("span",{class:"token namespace"},"[Int]"),n("span",{class:"token variable"},"$LIV"),s(" = "),n("span",{class:"token namespace"},"[System.BitConverter]"),s("::ToInt32"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$LenIV"),n("span",{class:"token punctuation"},","),s("  0"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token namespace"},"[Byte[]]"),n("span",{class:"token variable"},"$IV"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" Byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token variable"},"$LIV"),s(`
                `),n("span",{class:"token variable"},"$FileStreamReader"),n("span",{class:"token punctuation"},"."),s("Seek"),n("span",{class:"token punctuation"},"("),s("4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[System.IO.SeekOrigin]"),s("::"),n("span",{class:"token keyword"},"Begin"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Out-Null"),s(`
                `),n("span",{class:"token variable"},"$FileStreamReader"),n("span",{class:"token punctuation"},"."),s("Read"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IV"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$LIV"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Out-Null"),s(`
                `),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("IV = "),n("span",{class:"token variable"},"$IV"),s(`

                `),n("span",{class:"token variable"},"$Transform"),s(" = "),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("CreateDecryptor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$CryptoStream"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("Security"),n("span",{class:"token punctuation"},"."),s("Cryptography"),n("span",{class:"token punctuation"},"."),s("CryptoStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$Transform"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[System.Security.Cryptography.CryptoStreamMode]"),s("::"),n("span",{class:"token function"},"Write"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$FileStreamReader"),n("span",{class:"token punctuation"},"."),s("CopyTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$CryptoStream"),n("span",{class:"token punctuation"},")"),s(`

                `),n("span",{class:"token variable"},"$CryptoStream"),n("span",{class:"token punctuation"},"."),s("FlushFinalBlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$CryptoStream"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$FileStreamReader"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

                `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$RemoveSource"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token function"},"Remove-Item"),s(),n("span",{class:"token variable"},"$File"),n("span",{class:"token punctuation"},"."),s("FullName"),n("span",{class:"token punctuation"},"}"),s(`

                `),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token variable"},"$DestinationFile"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Add-Member"),s(" –MemberType NoteProperty –Name SourceFile –Value "),n("span",{class:"token variable"},"$File"),n("span",{class:"token punctuation"},"."),s("FullName "),n("span",{class:"token operator"},"-"),s(`PassThru
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"Catch"),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token function"},"Write-Error"),s(),n("span",{class:"token variable"},"$_"),s(`
                `),n("span",{class:"token keyword"},"If"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                    `),n("span",{class:"token function"},"Remove-Item"),s(),n("span",{class:"token operator"},"-"),s("LiteralPath "),n("span",{class:"token variable"},"$DestinationFile"),s(),n("span",{class:"token operator"},"-"),s(`Force
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"Continue"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"Finally"),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$CryptoStream"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$CryptoStream"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FileStreamReader"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$FileStreamReader"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Path"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter path to file"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Password"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Password"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter password"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token variable"},"$PasswordBase64"),s(" = "),n("span",{class:"token namespace"},"[System.Convert]"),s("::ToBase64String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Password"),n("span",{class:"token punctuation"},")"),s(`
	DecryptFile `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("Algorithm AES "),n("span",{class:"token operator"},"-"),s("KeyAsPlainText "),n("span",{class:"token variable"},"$PasswordBase64"),s(),n("span",{class:"token operator"},"-"),s(`RemoveSource

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️  file decrypted in '),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ae=n("hr",null,null,-1),ee={id:"download-dir-ps1",tabindex:"-1"},te={class:"header-anchor",href:"#download-dir-ps1"},le=n("code",null,"download-dir.ps1",-1),ie=n("p",null,"This PowerShell script downloads a folder (including subfolders) from the given URL.",-1),oe=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("download-"),n("span",{class:"token function"},"dir"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("URL"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`URL <String>
    Specifies the URL where to download `),n("span",{class:"token keyword"},"from"),s(`
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ce=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("download-"),n("span",{class:"token function"},"dir"),n("span",{class:"token punctuation"},"."),s("ps1 https:"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"/"),s("www"),n("span",{class:"token punctuation"},"."),s("cnn"),n("span",{class:"token punctuation"},"."),s(`com
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pe=n("p",null,null,-1),re=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Downloads a folder (including subfolders) from an URL
.DESCRIPTION
	This PowerShell script downloads a folder (including subfolders) from the given URL.
.PARAMETER URL
	Specifies the URL where to download from
.EXAMPLE
	PS> ./download-dir.ps1 https://www.cnn.com
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$URL"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$URL"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$URL"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter directory URL to download"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	& wget `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'wget' - make sure wget is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	& wget `),n("span",{class:"token operator"},"--"),s("mirror "),n("span",{class:"token operator"},"--"),n("span",{class:"token function"},"convert-links"),s(),n("span",{class:"token operator"},"--"),s("adjust-extension "),n("span",{class:"token operator"},"--"),s("page-requisites "),n("span",{class:"token operator"},"--"),s("no-parent "),n("span",{class:"token variable"},"$URL"),s(),n("span",{class:"token operator"},"--"),s("directory-prefix "),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"--"),s(`no-verbose
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't execute 'wget --mirror `),n("span",{class:"token variable"},"$URL"),s(`'"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ downloaded directory from '),n("span",{class:"token variable"},"$URL"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ue=n("hr",null,null,-1),ke={id:"download-file-ps1",tabindex:"-1"},de={class:"header-anchor",href:"#download-file-ps1"},me=n("code",null,"download-file.ps1",-1),be=n("p",null,"This PowerShell script downloads a file from the given URL",-1),ve=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("download-file"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("URL"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`URL <String>
    Specifies the URL where to download `),n("span",{class:"token keyword"},"from"),s(`
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),he=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("download-file"),n("span",{class:"token punctuation"},"."),s("ps1 https:"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"/"),s("www"),n("span",{class:"token punctuation"},"."),s("cnn"),n("span",{class:"token punctuation"},"."),s("com/index"),n("span",{class:"token punctuation"},"."),s(`html
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ge=n("p",null,null,-1),fe=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Downloads a file from an URL
.DESCRIPTION
	This PowerShell script downloads a file from the given URL
.PARAMETER URL
	Specifies the URL where to download from
.EXAMPLE
	PS> ./download-file.ps1 https://www.cnn.com/index.html
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$URL"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$URL"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$URL"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter file URL to download"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	& wget `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'wget' - make sure wget is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	& wget `),n("span",{class:"token operator"},"--"),s("mirror "),n("span",{class:"token operator"},"--"),n("span",{class:"token function"},"convert-links"),s(),n("span",{class:"token operator"},"--"),s("adjust-extension "),n("span",{class:"token operator"},"--"),s("page-requisites "),n("span",{class:"token operator"},"--"),s("no-parent "),n("span",{class:"token variable"},"$URL"),s(),n("span",{class:"token operator"},"--"),s("directory-prefix "),n("span",{class:"token punctuation"},"."),s(),n("span",{class:"token operator"},"--"),s(`no-verbose
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't execute 'wget --mirror `),n("span",{class:"token variable"},"$URL"),s(`'"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ downloaded file from '),n("span",{class:"token variable"},"$URL"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),we=n("hr",null,null,-1),Se={id:"edit-ps1",tabindex:"-1"},Pe={class:"header-anchor",href:"#edit-ps1"},ye=n("code",null,"edit.ps1",-1),$e=n("p",null,"This PowerShell script opens a text editor to edit the given file.",-1),_e=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("edit"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Filename"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Filename <String>
    Specifies the path to the filename
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ae=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("edit"),n("span",{class:"token punctuation"},"."),s("ps1 C:\\MyFile"),n("span",{class:"token punctuation"},"."),s(`txt
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ee=n("p",null,null,-1),Ce=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Opens an editor to edit a file
.DESCRIPTION
	This PowerShell script opens a text editor to edit the given file.
.PARAMETER Filename
	Specifies the path to the filename
.EXAMPLE
	PS> ./edit.ps1 C:\\MyFile.txt
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Filename"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		& vi `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Filename"),s('"')]),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'vi' - make sure vi is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		& notepad`),n("span",{class:"token punctuation"},"."),s("exe "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Filename"),s('"')]),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'notepad.exe' - make sure notepad.exe is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xe=n("hr",null,null,-1),Te={id:"encrypt-file-ps1",tabindex:"-1"},Ie={class:"header-anchor",href:"#encrypt-file-ps1"},De=n("code",null,"encrypt-file.ps1",-1),Ne=n("p",null,"This PowerShell script encrypts a file using the given password and AES encryption.",-1),Le=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("encrypt-file"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Path"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Password"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Path <String>
    Specifies the path to the file to encrypt
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`Password <String>
    Specifies the password to use
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Re=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("encrypt-file"),n("span",{class:"token punctuation"},"."),s("ps1 C:\\MyFile"),n("span",{class:"token punctuation"},"."),s("txt "),n("span",{class:"token string"},'"123"'),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Oe=n("p",null,null,-1),Fe=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Encrypts a file
.DESCRIPTION
	This PowerShell script encrypts a file using the given password and AES encryption.
.PARAMETER Path
	Specifies the path to the file to encrypt
.PARAMETER Password
	Specifies the password to use
.EXAMPLE
	PS> ./encrypt-file.ps1 C:\\MyFile.txt "123"
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Password"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" EncryptFile "),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token punctuation"},"["),s("CmdletBinding"),n("span",{class:"token punctuation"},"("),s("DefaultParameterSetName="),n("span",{class:"token string"},"'SecureString'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token namespace"},"[OutputType([System.IO.FileInfo[]])]"),s(`
`),n("span",{class:"token keyword"},"Param"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token namespace"},"[Parameter(Mandatory=$true, Position=1, ValueFromPipeline=$true, ValueFromPipelineByPropertyName=$true)]"),s(`
    `),n("span",{class:"token punctuation"},"["),s("Alias"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'PSPath'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'LiteralPath'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token namespace"},"[string[]]"),n("span",{class:"token variable"},"$FileName"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token namespace"},"[Parameter(Mandatory=$false, Position=2)]"),s(`
    `),n("span",{class:"token punctuation"},"["),s("ValidateSet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'AES'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'DES'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'RC2'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'Rijndael'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'TripleDES'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token namespace"},"[String]"),n("span",{class:"token variable"},"$Algorithm"),s(" = "),n("span",{class:"token string"},"'AES'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"["),s("Parameter"),n("span",{class:"token punctuation"},"("),s("Mandatory="),n("span",{class:"token boolean"},"$false"),n("span",{class:"token punctuation"},","),s(" Position=3"),n("span",{class:"token punctuation"},","),s(" ParameterSetName="),n("span",{class:"token string"},"'SecureString'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token namespace"},"[System.Security.SecureString]"),n("span",{class:"token variable"},"$Key"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"New-CryptographyKey"),s(),n("span",{class:"token operator"},"-"),s("Algorithm "),n("span",{class:"token variable"},"$Algorithm"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"["),s("Parameter"),n("span",{class:"token punctuation"},"("),s("Mandatory="),n("span",{class:"token boolean"},"$true"),n("span",{class:"token punctuation"},","),s(" Position=3"),n("span",{class:"token punctuation"},","),s(" ParameterSetName="),n("span",{class:"token string"},"'PlainText'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token namespace"},"[String]"),n("span",{class:"token variable"},"$KeyAsPlainText"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token namespace"},"[Parameter(Mandatory=$false, Position=4)]"),s(`
    `),n("span",{class:"token namespace"},"[System.Security.Cryptography.CipherMode]"),n("span",{class:"token variable"},"$CipherMode"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token namespace"},"[Parameter(Mandatory=$false, Position=5)]"),s(`
    `),n("span",{class:"token namespace"},"[System.Security.Cryptography.PaddingMode]"),n("span",{class:"token variable"},"$PaddingMode"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token namespace"},"[Parameter(Mandatory=$false, Position=6)]"),s(`
    `),n("span",{class:"token namespace"},"[String]"),n("span",{class:"token variable"},"$Suffix"),s(" = "),n("span",{class:"token string"},[s('".'),n("span",{class:"token variable"},"$Algorithm"),s('"')]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token namespace"},"[Parameter()]"),s(`
    `),n("span",{class:"token namespace"},"[Switch]"),n("span",{class:"token variable"},"$RemoveSource"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"begin"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$PSCmdlet"),n("span",{class:"token punctuation"},"."),s("ParameterSetName "),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'PlainText'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token variable"},"$Key"),s(" = "),n("span",{class:"token variable"},"$KeyAsPlainText"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"ConvertTo-SecureString"),s(),n("span",{class:"token operator"},"-"),s("AsPlainText "),n("span",{class:"token operator"},"-"),s(`Force
            `),n("span",{class:"token punctuation"},"}"),s(`

            `),n("span",{class:"token variable"},"$BSTR"),s(" = "),n("span",{class:"token namespace"},"[System.Runtime.InteropServices.Marshal]"),s("::SecureStringToBSTR"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Key"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token variable"},"$EncryptionKey"),s(" = "),n("span",{class:"token namespace"},"[System.Convert]"),s("::FromBase64String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[System.Runtime.InteropServices.Marshal]"),s("::PtrToStringAuto"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$BSTR"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`

            `),n("span",{class:"token variable"},"$Crypto"),s(" = "),n("span",{class:"token namespace"},"[System.Security.Cryptography.SymmetricAlgorithm]"),s("::Create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Algorithm"),n("span",{class:"token punctuation"},")"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$PSBoundParameters"),n("span",{class:"token punctuation"},"."),s("ContainsKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'CipherMode'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("Mode = "),n("span",{class:"token variable"},"$CipherMode"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$PSBoundParameters"),n("span",{class:"token punctuation"},"."),s("ContainsKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'PaddingMode'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("Padding = "),n("span",{class:"token variable"},"$PaddingMode"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("KeySize = "),n("span",{class:"token variable"},"$EncryptionKey"),n("span",{class:"token punctuation"},"."),s(`Length*8
            `),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("Key = "),n("span",{class:"token variable"},"$EncryptionKey"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"Write-Error"),s(),n("span",{class:"token variable"},"$_"),s(),n("span",{class:"token operator"},"-"),s(`ErrorAction Stop
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"process"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token variable"},"$Files"),s(" = "),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token operator"},"-"),s("LiteralPath "),n("span",{class:"token variable"},"$FileName"),s(`
    
        `),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$File"),s(" in "),n("span",{class:"token variable"},"$Files"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$DestinationFile"),s(" = "),n("span",{class:"token variable"},"$File"),n("span",{class:"token punctuation"},"."),s("FullName "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token variable"},"$Suffix"),s(`

            `),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token variable"},"$FileStreamReader"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("IO"),n("span",{class:"token punctuation"},"."),s("FileStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$File"),n("span",{class:"token punctuation"},"."),s("FullName"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[System.IO.FileMode]"),s("::Open"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$FileStreamWriter"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("IO"),n("span",{class:"token punctuation"},"."),s("FileStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$DestinationFile"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[System.IO.FileMode]"),s("::Create"),n("span",{class:"token punctuation"},")"),s(`

                `),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("GenerateIV"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Write"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[System.BitConverter]"),s("::GetBytes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("IV"),n("span",{class:"token punctuation"},"."),s("Length"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(" 4"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Write"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("IV"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("IV"),n("span",{class:"token punctuation"},"."),s("Length"),n("span",{class:"token punctuation"},")"),s(`

                `),n("span",{class:"token variable"},"$Transform"),s(" = "),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s("CreateEncryptor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$CryptoStream"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("Security"),n("span",{class:"token punctuation"},"."),s("Cryptography"),n("span",{class:"token punctuation"},"."),s("CryptoStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$Transform"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[System.Security.Cryptography.CryptoStreamMode]"),s("::"),n("span",{class:"token function"},"Write"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$FileStreamReader"),n("span",{class:"token punctuation"},"."),s("CopyTo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$CryptoStream"),n("span",{class:"token punctuation"},")"),s(`
    
                `),n("span",{class:"token variable"},"$CryptoStream"),n("span",{class:"token punctuation"},"."),s("FlushFinalBlock"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$CryptoStream"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$FileStreamReader"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$RemoveSource"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token function"},"Remove-Item"),s(),n("span",{class:"token operator"},"-"),s("LiteralPath "),n("span",{class:"token variable"},"$File"),n("span",{class:"token punctuation"},"."),s(`FullName
		`),n("span",{class:"token punctuation"},"}"),s(`

                `),n("span",{class:"token variable"},"$result"),s(" = "),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token variable"},"$DestinationFile"),s(`
                `),n("span",{class:"token variable"},"$result"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Add-Member"),s(" –MemberType NoteProperty –Name SourceFile –Value "),n("span",{class:"token variable"},"$File"),n("span",{class:"token punctuation"},"."),s(`FullName
                `),n("span",{class:"token variable"},"$result"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Add-Member"),s(" –MemberType NoteProperty –Name Algorithm –Value "),n("span",{class:"token variable"},"$Algorithm"),s(`
                `),n("span",{class:"token variable"},"$result"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Add-Member"),s(" –MemberType NoteProperty –Name Key –Value "),n("span",{class:"token variable"},"$Key"),s(`
                `),n("span",{class:"token variable"},"$result"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Add-Member"),s(" –MemberType NoteProperty –Name CipherMode –Value "),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s(`Mode
                `),n("span",{class:"token variable"},"$result"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Add-Member"),s(" –MemberType NoteProperty –Name PaddingMode –Value "),n("span",{class:"token variable"},"$Crypto"),n("span",{class:"token punctuation"},"."),s(`Padding
                `),n("span",{class:"token variable"},"$result"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token function"},"Write-Error"),s(),n("span",{class:"token variable"},"$_"),s(`
                `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                    `),n("span",{class:"token function"},"Remove-Item"),s(),n("span",{class:"token operator"},"-"),s("LiteralPath "),n("span",{class:"token variable"},"$DestinationFile"),s(),n("span",{class:"token operator"},"-"),s(`Force
                `),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"continue"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"finally"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$CryptoStream"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$CryptoStream"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FileStreamReader"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$FileStreamReader"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
                `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$FileStreamWriter"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`


`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Path"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter path to file"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Password"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Password"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter password"'),s("	"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token namespace"},"[char[]]"),n("span",{class:"token variable"},"$PasswordAsArray"),s(" = "),n("span",{class:"token variable"},"$Password"),s(`
	`),n("span",{class:"token variable"},"$PasswordAsBase64"),s(" = "),n("span",{class:"token namespace"},"[System.Convert]"),s("::ToBase64String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$PasswordAsArray"),n("span",{class:"token punctuation"},")"),s(`
	EncryptFile `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("Algorithm AES "),n("span",{class:"token operator"},"-"),s("KeyAsPlainText "),n("span",{class:"token variable"},"$PasswordAsBase64"),s(),n("span",{class:"token operator"},"-"),s(`RemoveSource

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️  file encrypted in '),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Me=n("hr",null,null,-1),Ve={id:"get-md5-ps1",tabindex:"-1"},We={class:"header-anchor",href:"#get-md5-ps1"},ze=n("code",null,"get-md5.ps1",-1),Be=n("p",null,"This PowerShell script calculates and prints the MD5 checksum of the given file.",-1),Ue=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("get-md5"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("file"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`file <String>
    Specifies the path to the file
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),qe=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("get-md5 C:\\MyFile"),n("span",{class:"token punctuation"},"."),s(`txt
`),n("span",{class:"token comment"},"# ✔️ MD5 hash is 041E16F16E60AD250EB794AF0681BD4A"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ke=n("p",null,null,-1),Xe=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Prints the MD5 checksum of a file
.DESCRIPTION
	This PowerShell script calculates and prints the MD5 checksum of the given file.
.PARAMETER file
	Specifies the path to the file
.EXAMPLE
	PS> ./get-md5 C:\\MyFile.txt
	✔️ MD5 hash is 041E16F16E60AD250EB794AF0681BD4A
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$file"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$file"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$file"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter path to file"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Result"),s(" = "),n("span",{class:"token function"},"Get-Filehash"),s(),n("span",{class:"token variable"},"$file"),s(),n("span",{class:"token operator"},"-"),s(`algorithm MD5

	`),n("span",{class:"token string"},[s('"✔️ MD5 hash is '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Result"),n("span",{class:"token punctuation"},"."),s("Hash"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),He=n("hr",null,null,-1),je={id:"get-sha1-ps1",tabindex:"-1"},Ye={class:"header-anchor",href:"#get-sha1-ps1"},Ge=n("code",null,"get-sha1.ps1",-1),Je=n("p",null,"This PowerShell script calculates and prints the SHA1 checksum of the given file.",-1),Ze=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("get-sha1"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("file"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`file <String>
    Specifies the path to the file
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Qe=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("get-sha1 C:\\MyFile"),n("span",{class:"token punctuation"},"."),s(`txt
`),n("span",{class:"token comment"},"# ✔️ SHA1 hash is 8105D424D350E308AED92BD9DDEB74A1B53C5D7C"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nt=n("p",null,null,-1),st=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Prints the SHA1 checksum of a file
.DESCRIPTION
	This PowerShell script calculates and prints the SHA1 checksum of the given file.
.PARAMETER file
	Specifies the path to the file
.EXAMPLE
	PS> ./get-sha1 C:\\MyFile.txt
	✔️ SHA1 hash is 8105D424D350E308AED92BD9DDEB74A1B53C5D7C
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$file"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$file"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$file"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter the filename"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Result"),s(" = "),n("span",{class:"token function"},"get-filehash"),s(),n("span",{class:"token variable"},"$file"),s(),n("span",{class:"token operator"},"-"),s(`algorithm SHA1

	`),n("span",{class:"token string"},[s('"✔️ SHA1 hash is '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Result"),n("span",{class:"token punctuation"},"."),s("Hash"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),at=n("hr",null,null,-1),et={id:"get-sha256-ps1",tabindex:"-1"},tt={class:"header-anchor",href:"#get-sha256-ps1"},lt=n("code",null,"get-sha256.ps1",-1),it=n("p",null,"This PowerShell script calculates and prints the SHA256 checksum of the given file.",-1),ot=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("get-sha256"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("file"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`file <String>
    Specifies the path to the file
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ct=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("get-sha256 C:\\MyFile"),n("span",{class:"token punctuation"},"."),s(`txt
`),n("span",{class:"token comment"},"# ✔️ SHA256 hash is: CEB4AD71524996EB8AA3ADCE04F1E45636A4B58B8BF4462E6971CF2E56B4293E"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pt=n("p",null,null,-1),rt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Prints the SHA256 checksum of a file
.DESCRIPTION
	This PowerShell script calculates and prints the SHA256 checksum of the given file.
.PARAMETER file
	Specifies the path to the file
.EXAMPLE
	PS> ./get-sha256 C:\\MyFile.txt
	✔️ SHA256 hash is: CEB4AD71524996EB8AA3ADCE04F1E45636A4B58B8BF4462E6971CF2E56B4293E
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$file"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$file"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$file"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter the filename"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Result"),s(" = "),n("span",{class:"token function"},"get-filehash"),s(),n("span",{class:"token variable"},"$file"),s(),n("span",{class:"token operator"},"-"),s(`algorithm SHA256

	`),n("span",{class:"token string"},[s('"✔️ SHA256 hash is: '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Result"),n("span",{class:"token punctuation"},"."),s("Hash"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ut=n("hr",null,null,-1),kt={id:"inspect-exe-ps1",tabindex:"-1"},dt={class:"header-anchor",href:"#inspect-exe-ps1"},mt=n("code",null,"inspect-exe.ps1",-1),bt=n("p",null,"This PowerShell script prints basic information of an executable file.",-1),vt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("inspect-exe"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("PathToExe"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`PathToExe <String>
    Specifies the path to the executable file
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ht=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("inspect-exe C:\\MyApp"),n("span",{class:"token punctuation"},"."),s(`exe
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),gt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Prints basic information of an executable file
.DESCRIPTION
	This PowerShell script prints basic information of an executable file.
.PARAMETER PathToExe
	Specifies the path to the executable file
.EXAMPLE
	PS> ./inspect-exe C:\\MyApp.exe
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$PathToExe"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$PathToExe"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$PathToExe"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter path to executable file"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token variable"},"$PathToExe"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("VersionInfo"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Select"),s(),n("span",{class:"token operator"},"*"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ft=n("hr",null,null,-1),wt={id:"❌-list-dir-tree-ps1",tabindex:"-1"},St={class:"header-anchor",href:"#❌-list-dir-tree-ps1"},Pt=n("code",null,"list-dir-tree.ps1",-1),yt=n("hr",null,null,-1),$t={id:"list-empty-dirs-ps1",tabindex:"-1"},_t={class:"header-anchor",href:"#list-empty-dirs-ps1"},At=n("code",null,"list-empty-dirs.ps1",-1),Et=n("p",null,"This PowerShell script scans and lists all empty subfolders within the given directory tree.",-1),Ct=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-empty-dirs"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("DirTree"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`DirTree <String>
    Specifies the path to the directory tree `),n("span",{class:"token punctuation"},"("),s("current working directory by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-empty-dirs"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Tt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists empty subfolders
.DESCRIPTION
	This PowerShell script scans and lists all empty subfolders within the given directory tree.
.PARAMETER DirTree
	Specifies the path to the directory tree (current working directory by default)
.EXAMPLE
	PS> ./list-empty-dirs.ps1 C:\\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$DirTree"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token variable"},"$DirTree"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DirTree"),s('"')]),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},[s('"⏳Listing empty subfolders in '),n("span",{class:"token variable"},"$DirTree"),s('..."')]),s(`
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Count"),s(` = 0
	`),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DirTree"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("attributes Directory "),n("span",{class:"token operator"},"-"),s("recurse "),n("span",{class:"token punctuation"},"|"),s(" Where "),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("GetFileSystemInfos"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Count "),n("span",{class:"token operator"},"-eq"),s(" 0"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"ForEach-Object"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("FullName"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
		`),n("span",{class:"token variable"},"$Count"),n("span",{class:"token operator"},"++"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ found '),n("span",{class:"token variable"},"$Count"),s(" empty subfolders within directory tree "),n("span",{class:"token variable"},"$DirTree"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec."')]),s(` 
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),It=n("hr",null,null,-1),Dt={id:"list-empty-files-ps1",tabindex:"-1"},Nt={class:"header-anchor",href:"#list-empty-files-ps1"},Lt=n("code",null,"list-empty-files.ps1",-1),Rt=n("p",null,"This PowerShell script scans and lists all empty files within the given directory tree.",-1),Ot=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-empty-files"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("DirTree"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`DirTree <String>
    Specifies the path to the directory tree
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ft=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-empty-files"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Mt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists empty files within a directory tree
.DESCRIPTION
	This PowerShell script scans and lists all empty files within the given directory tree.
.PARAMETER DirTree
	Specifies the path to the directory tree
.EXAMPLE
	PS> ./list-empty-files.ps1 C:\\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$DirTree"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$DirTree"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$DirTree"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the path to the directory tree"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Count"),s(` = 0
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},[s('"⏳Listing empty files in '),n("span",{class:"token variable"},"$DirTree"),s(' ..."')]),s(`
	`),n("span",{class:"token function"},"get-childItem"),s(),n("span",{class:"token variable"},"$DirTree"),s(),n("span",{class:"token operator"},"-"),s("attributes "),n("span",{class:"token operator"},"!"),s("Directory "),n("span",{class:"token operator"},"-"),s("recurse "),n("span",{class:"token punctuation"},"|"),s(" where "),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("Length "),n("span",{class:"token operator"},"-eq"),s(" 0"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"foreach-object"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s(`FullName
		`),n("span",{class:"token variable"},"$Count"),n("span",{class:"token operator"},"++"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},[s('"✔️ found '),n("span",{class:"token variable"},"$Count"),s(' empty file(s)"')]),s(` 
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Vt=n("hr",null,null,-1),Wt={id:"list-files-ps1",tabindex:"-1"},zt={class:"header-anchor",href:"#list-files-ps1"},Bt=n("code",null,"list-files.ps1",-1),Ut=n("p",null,"This PowerShell script lists all files within the given directory tree.",-1),qt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-files"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("DirTree"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`DirTree <String>
    Specifies the path to the directory tree
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Kt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-files"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Xt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all files in a directory tree
.DESCRIPTION
	This PowerShell script lists all files within the given directory tree.
.PARAMETER DirTree
	Specifies the path to the directory tree
.EXAMPLE
	PS> ./list-files.ps1 C:\\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$DirTree"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$DirTree"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$DirTree"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter path to directory tree"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token variable"},"$DirTree"),s(),n("span",{class:"token operator"},"-"),s("recurse "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"select"),s(` FullName
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ht=n("hr",null,null,-1),jt={id:"list-folder-ps1",tabindex:"-1"},Yt={class:"header-anchor",href:"#list-folder-ps1"},Gt=n("code",null,"list-folder.ps1",-1),Jt=n("p",null,"This PowerShell script lists the content of a directory (alphabetically formatted in columns).",-1),Zt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-folder"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("searchPattern"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`searchPattern <String>
    Specifies the search pattern `),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"*"'),s(" by default which means anything"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token operator"},"*"),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Qt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-folder"),n("span",{class:"token punctuation"},"."),s("ps1 C:\\"),n("span",{class:"token operator"},"*"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists a folder
.DESCRIPTION
	This PowerShell script lists the content of a directory (alphabetically formatted in columns).
.PARAMETER SearchPattern
	Specifies the search pattern ("*" by default which means anything)
.EXAMPLE
	PS> ./list-folder.ps1 C:\\*
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$searchPattern"),s(" = "),n("span",{class:"token string"},'"*"'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" GetFileIcon "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$suffix"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$suffix"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},'".csv"'),s("	"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"📊"'),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'".epub"'),s("	"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"📓"'),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'".exe"'),s("  "),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"⚙️"'),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'".gif"'),s("	"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"📸"'),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'".iso"'),s("	"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"📀"'),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'".jpg"'),s("	"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"📸"'),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'".mp3"'),s("	"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"🎵"'),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'".mkv"'),s("	"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"🎬"'),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'".zip"'),s("  "),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"🎁"'),n("span",{class:"token punctuation"},"}"),s(`
	default `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"📄"'),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(" ListFolder "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$searchPattern"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$items"),s(" = "),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$searchPattern"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$item"),s(" in "),n("span",{class:"token variable"},"$items"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$name"),s(" = "),n("span",{class:"token variable"},"$item"),n("span",{class:"token punctuation"},"."),s(`Name
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$name"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'.'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token comment"},"# hidden file/dir"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$item"),n("span",{class:"token punctuation"},"."),s("Mode "),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"d*"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$icon"),s(" = "),n("span",{class:"token string"},'"📂"'),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$icon"),s(" = GetFileIcon "),n("span",{class:"token variable"},"$item"),n("span",{class:"token punctuation"},"."),s("Extension "),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token function"},"New-Object"),s(" PSObject "),n("span",{class:"token operator"},"-"),s("property @"),n("span",{class:"token punctuation"},"{"),s(" Name = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$icon"),n("span",{class:"token variable"},"$name"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	ListFolder `),n("span",{class:"token variable"},"$searchPattern"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Format-Wide"),s(),n("span",{class:"token operator"},"-"),s(`autoSize
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),sl=n("hr",null,null,-1),al={id:"list-hidden-files-ps1",tabindex:"-1"},el={class:"header-anchor",href:"#list-hidden-files-ps1"},tl=n("code",null,"list-hidden-files.ps1",-1),ll=n("p",null,"This PowerShell script scans and lists all hidden files in a directory tree.",-1),il=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-hidden-files"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("DirTree"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`DirTree <String>
    Specifies the path to the directory tree
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ol=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-hidden-files"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),cl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists hidden files in a directory tree
.DESCRIPTION
	This PowerShell script scans and lists all hidden files in a directory tree.
.PARAMETER DirTree
	Specifies the path to the directory tree
.EXAMPLE
	PS> ./list-hidden-files.ps1 C:\\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$DirTree"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$DirTree"),s(" = "),n("span",{class:"token function"},"resolve-path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DirTree"),s('"')]),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},[s('"⏳Listing hidden files in '),n("span",{class:"token variable"},"$DirTree"),s(' ..."')]),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Count"),s(` = 0
	`),n("span",{class:"token function"},"get-childItem"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DirTree"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("attributes Hidden "),n("span",{class:"token operator"},"-"),s("recurse "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"foreach-object"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"📄 '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("FullName"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
		`),n("span",{class:"token variable"},"$Count"),n("span",{class:"token operator"},"++"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},[s('"✔️ directory tree '),n("span",{class:"token variable"},"$DirTree"),s(" has "),n("span",{class:"token variable"},"$Count"),s(' hidden file(s)"')]),s(` 
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pl=n("hr",null,null,-1),rl={id:"list-recycle-bin-ps1",tabindex:"-1"},ul={class:"header-anchor",href:"#list-recycle-bin-ps1"},kl=n("code",null,"list-recycle-bin.ps1",-1),dl=n("p",null,"This PowerShell script lists the content of the recycle bin folder.",-1),ml=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-recycle-bin"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),bl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-recycle-bin"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),vl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the content of the recycle bin folder
.DESCRIPTION
	This PowerShell script lists the content of the recycle bin folder.
.EXAMPLE
	PS> ./list-recycle-bin.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"New-Object"),s(),n("span",{class:"token operator"},"-"),s("ComObject Shell"),n("span",{class:"token punctuation"},"."),s("Application"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("NameSpace"),n("span",{class:"token punctuation"},"("),s("0x0a"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Items"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Select-Object"),s(" Name"),n("span",{class:"token punctuation"},","),s("Size"),n("span",{class:"token punctuation"},","),s(`Path
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),hl=n("hr",null,null,-1),gl={id:"list-unused-files-ps1",tabindex:"-1"},fl={class:"header-anchor",href:"#list-unused-files-ps1"},wl=n("code",null,"list-unused-files.ps1",-1),Sl=n("p",null,"This PowerShell script scans and lists files in a folder with last access time older than number of days.",-1),Pl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-unused-files"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("DirTree"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Days"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`DirTree <String>
    Specifies the path to the directory tree
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`Days <Int32>
    Specifies the number of days
    
    Required?                    false
    Position?                    2
    Default value                100
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),yl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-unused-files"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\ 100
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$l=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists unused files in a directory tree
.DESCRIPTION
	This PowerShell script scans and lists files in a folder with last access time older than number of days.
.PARAMETER DirTree
	Specifies the path to the directory tree
.PARAMETER Days
	Specifies the number of days
.EXAMPLE
	PS> ./list-unused-files.ps1 C:\\ 100
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$DirTree"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Days"),s(" = 100"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},[s('"Listing files in '),n("span",{class:"token variable"},"$DirTree"),s(" with last access time older than "),n("span",{class:"token variable"},"$Days"),s(' days"')]),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$cutOffDate"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Date"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("AddDays"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token variable"},"$Days"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token variable"},"$DirTree"),s(),n("span",{class:"token operator"},"-"),s("recurse "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Where-Object"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("LastAccessTime "),n("span",{class:"token operator"},"-le"),s(),n("span",{class:"token variable"},"$cutOffDate"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"select"),s(` fullname

	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_l=n("hr",null,null,-1),Al={id:"list-workdir-ps1",tabindex:"-1"},El={class:"header-anchor",href:"#list-workdir-ps1"},Cl=n("code",null,"list-workdir.ps1",-1),xl=n("p",null,"This PowerShell script lists the path to current working directory (but not the content itself).",-1),Tl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-workdir"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Il=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-workdir"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# 📂C:\\Users\\Markus"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Dl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the current working directory
.DESCRIPTION
	This PowerShell script lists the path to current working directory (but not the content itself).
.EXAMPLE
	PS> ./list-workdir.ps1
	📂C:\\Users\\Markus
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Nl=n("hr",null,null,-1),Ll={id:"make-install-ps1",tabindex:"-1"},Rl={class:"header-anchor",href:"#make-install-ps1"},Ol=n("code",null,"make-install.ps1",-1),Fl=n("p",null,"This PowerShell script copies newer EXE's + DLL's from the build directory to the installation directory.",-1),Ml=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("make-install"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Vl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("make-install"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Wl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Copies newer EXE's + DLL's from the build directory to the installation directory
.DESCRIPTION
	This PowerShell script copies newer EXE's + DLL's from the build directory to the installation directory.
.EXAMPLE
	PS> ./make-install.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token function"},"set"),s(" SRC_DIR="),n("span",{class:"token operator"},"%"),s(`1
`),n("span",{class:"token function"},"set"),s(),n("span",{class:"token string"},'"DST_DIR=C:\\Program Files\\MyApp\\bin"'),s(`
`),n("span",{class:"token function"},"set"),s(),n("span",{class:"token keyword"},"FILTER"),s("="),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"."),s("exe "),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"."),s(`dll
`),n("span",{class:"token function"},"set"),s(" OPTIONS="),n("span",{class:"token operator"},"/"),s("E "),n("span",{class:"token operator"},"/"),s("njh "),n("span",{class:"token operator"},"/"),s(`np

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	title Syncing to `),n("span",{class:"token operator"},"%"),s("DST_DIR% "),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`
	robocopy `),n("span",{class:"token operator"},"%"),s("SRC_DIR% "),n("span",{class:"token operator"},"%"),s("DST_DIR% "),n("span",{class:"token operator"},"%"),n("span",{class:"token keyword"},"FILTER"),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token operator"},"%"),s(`OPTIONS%

	`),n("span",{class:"token function"},"echo"),s(),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},"--"),s(`
	`),n("span",{class:"token function"},"echo"),n("span",{class:"token punctuation"},"."),s(`

	`),n("span",{class:"token string"},'"✔️ synced to %DST_DIR%"'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),zl=n("hr",null,null,-1),Bl={id:"new-shortcut-ps1",tabindex:"-1"},Ul={class:"header-anchor",href:"#new-shortcut-ps1"},ql=n("code",null,"new-shortcut.ps1",-1),Kl=n("p",null,"This PowerShell script creates a new shortcut file.",-1),Xl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"new-shortcut"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("shortcut"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("target"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("description"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`shortcut <String>
    Specifies the shortcut filename
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`target <String>
    Specifies the path to the target
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`description <String>
    Specifies a description
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Hl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"new-shortcut"),s(` C:\\Temp\\HDD C:\\

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),jl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Creates a new shortcut file
.DESCRIPTION
	This PowerShell script creates a new shortcut file.
.PARAMETER shortcut
	Specifies the shortcut filename
.PARAMETER target
	Specifies the path to the target
.PARAMETER description
	Specifies a description
.EXAMPLE
	PS> ./new-shortcut C:\\Temp\\HDD C:\\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$shortcut"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$target"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$description"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$shortcut"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$shortcut"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter new shortcut filename"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$target"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$target"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter path to target"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$description"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$description"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter description"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$sh"),s(" = "),n("span",{class:"token function"},"new-object"),s(),n("span",{class:"token operator"},"-"),s("ComObject WScript"),n("span",{class:"token punctuation"},"."),s(`Shell
	`),n("span",{class:"token variable"},"$sc"),s(" = "),n("span",{class:"token variable"},"$sh"),n("span",{class:"token punctuation"},"."),s("CreateShortcut"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$shortcut"),s('.lnk"')]),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$sc"),n("span",{class:"token punctuation"},"."),s("TargetPath = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$target"),s('"')]),s(`
	`),n("span",{class:"token variable"},"$sc"),n("span",{class:"token punctuation"},"."),s("WindowStyle = "),n("span",{class:"token string"},'"1"'),s(`
	`),n("span",{class:"token variable"},"$sc"),n("span",{class:"token punctuation"},"."),s("IconLocation = "),n("span",{class:"token string"},'"C:\\Windows\\System32\\SHELL32.dll, 3"'),s(`
	`),n("span",{class:"token variable"},"$sc"),n("span",{class:"token punctuation"},"."),s("Description = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$description"),s('"')]),s(`
	`),n("span",{class:"token variable"},"$sc"),n("span",{class:"token punctuation"},"."),s("save"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token string"},[s('"✔️ created new shortcut '),n("span",{class:"token variable"},"$shortcut"),s(" ⭢ "),n("span",{class:"token variable"},"$target"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Yl=n("hr",null,null,-1),Gl={id:"new-symlink-ps1",tabindex:"-1"},Jl={class:"header-anchor",href:"#new-symlink-ps1"},Zl=n("code",null,"new-symlink.ps1",-1),Ql=n("p",null,"This PowerShell script creates a new symbolic link file.",-1),ni=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"new-symlink"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("symlink"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("target"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`symlink <String>
    Specifies the new symlink filename
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`target <String>
    Specifies the path to target
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),si=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"new-symlink"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\Temp\\HDD C:\\
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ai=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Creates a new symbolic link file
.DESCRIPTION
	This PowerShell script creates a new symbolic link file.
.PARAMETER symlink
	Specifies the new symlink filename
.PARAMETER target
	Specifies the path to target
.EXAMPLE
	PS> ./new-symlink.ps1 C:\\Temp\\HDD C:\\
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$symlink"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$target"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$symlink"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$symlink"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter new symlink filename"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$target"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$target"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter path to target"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"new-item"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$symlink"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("itemType SymbolicLink "),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$target"),s('"')]),s(`

	`),n("span",{class:"token string"},[s('"✔️ created new symlink '),n("span",{class:"token variable"},"$symlink"),s(" ⭢ "),n("span",{class:"token variable"},"$target"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ei=n("hr",null,null,-1),ti={id:"new-zipfile-ps1",tabindex:"-1"},li={class:"header-anchor",href:"#new-zipfile-ps1"},ii=n("code",null,"new-zipfile.ps1",-1),oi=n("p",null,"This PowerShell script creates a new .ZIP file from a folder (including subfolders).",-1),ci=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"new-zipfile"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("folder"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`folder <String>
    Specifies the path to the folder
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pi=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"new-zipfile"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\Windows
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ri=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Creates a new .ZIP file from a folder (including subfolders)
.DESCRIPTION
	This PowerShell script creates a new .ZIP file from a folder (including subfolders).
.PARAMETER folder
	Specifies the path to the folder
.EXAMPLE
	PS> ./new-zipfile.ps1 C:\\Windows
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$folder"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$folder"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$folder"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the path to the folder to zip"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token variable"},"$folder"),s(" = "),n("span",{class:"token function"},"resolve-path"),s(),n("span",{class:"token variable"},"$folder"),s(`
	`),n("span",{class:"token function"},"compress-archive"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token variable"},"$folder"),s(),n("span",{class:"token operator"},"-"),s("destinationPath "),n("span",{class:"token variable"},"$folder"),n("span",{class:"token punctuation"},"."),s(`zip

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ created zip file '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$folder"),n("span",{class:"token punctuation"},")")]),s(".zip in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ui=n("hr",null,null,-1),ki={id:"publish-to-ipfs-ps1",tabindex:"-1"},di={class:"header-anchor",href:"#publish-to-ipfs-ps1"},mi=n("code",null,"publish-to-ipfs.ps1",-1),bi=n("p",null,"This script publishes the given files and folders to IPFS.",-1),vi=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"publish-to"),n("span",{class:"token operator"},"-"),s("ipfs"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("FilePattern"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("HashList"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("DF_Hashes"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`FilePattern <String>
    Specifies the file pattern
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`HashList <String>
    Specifies the path to the resulting hash list
    
    Required?                    false
    Position?                    2
    Default value                IPFS_hashes`),n("span",{class:"token punctuation"},"."),s(`txt
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`DF_Hashes <String>
    Specifies the path to the resulting digital forensic hashes
    
    Required?                    false
    Position?                    3
    Default value                file_checksums`),n("span",{class:"token punctuation"},"."),s(`xml
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),hi=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"publish-to"),n("span",{class:"token operator"},"-"),s("ipfs C:\\MyFile"),n("span",{class:"token punctuation"},"."),s(`txt
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),gi=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Publishes files & folders to IPFS
.DESCRIPTION
	This script publishes the given files and folders to IPFS.
.PARAMETER FilePattern
	Specifies the file pattern
.PARAMETER HashList
	Specifies the path to the resulting hash list
.PARAMETER DF_Hashes
	Specifies the path to the resulting digital forensic hashes
.EXAMPLE
	PS> ./publish-to-ipfs C:\\MyFile.txt
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$FilePattern"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$HashList"),s(" = "),n("span",{class:"token string"},'"IPFS_hashes.txt"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$DF_Hashes"),s(" = "),n("span",{class:"token string"},'"file_checksums.xml"'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FilePattern"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$FilePattern"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter file(s)/directories to publish"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1/3) Searching for IPFS executable..."'),s(),n("span",{class:"token operator"},"-"),s(`NoNewline
	& ipfs `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'ipfs' - make sure IPFS is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"test-path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FilePattern"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"⏳ (2/3) Publishing folder '),n("span",{class:"token variable"},"$FilePattern"),s('/..."')]),s(`
		& ipfs add `),n("span",{class:"token operator"},"-"),s("r "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FilePattern"),s('"')]),s(" > "),n("span",{class:"token variable"},"$HashList"),s(`
		`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Count"),s(` = 1
		`),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token string"},[s('"⏳ (3/3) Calculating digital forensics hashes to '),n("span",{class:"token variable"},"$DF_HASHES"),s(' ..."')]),s(`
		& nice hashdeep `),n("span",{class:"token operator"},"-"),s("c md5"),n("span",{class:"token punctuation"},","),s("sha1"),n("span",{class:"token punctuation"},","),s("sha256 "),n("span",{class:"token operator"},"-"),s("r "),n("span",{class:"token operator"},"-"),s("d "),n("span",{class:"token operator"},"-"),s("l "),n("span",{class:"token operator"},"-"),s("j 1 "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FilePattern"),s('"')]),s(" > "),n("span",{class:"token variable"},"$DF_Hashes"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$FileList"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"get-childItem"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FilePattern"),s('"')]),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$File"),s(" in "),n("span",{class:"token variable"},"$FileList"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"test-path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FilePattern"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token string"},[s('"⏳ (2/3) Publishing folder '),n("span",{class:"token variable"},"$File"),s('/..."')]),s(`
				& ipfs add `),n("span",{class:"token operator"},"-"),s("r "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$File"),s('"')]),s(" >> "),n("span",{class:"token variable"},"$HashList"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token string"},[s('"⏳ (3/3) Publishing file '),n("span",{class:"token variable"},"$File"),s('..."')]),s(`
				& ipfs add `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$File"),s('"')]),s(" >> "),n("span",{class:"token variable"},"$HashList"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Count"),s(" = "),n("span",{class:"token variable"},"$FileList"),n("span",{class:"token punctuation"},"."),s(`Count
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ published '),n("span",{class:"token variable"},"$Count"),s(" file(s)/folder(s) to IPFS in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token string"},'"  NOTE: to publish it to IPNS execute: ipfs name publish <HASH>"'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fi=n("hr",null,null,-1),wi={id:"remove-empty-dirs-ps1",tabindex:"-1"},Si={class:"header-anchor",href:"#remove-empty-dirs-ps1"},Pi=n("code",null,"remove-empty-dirs.ps1",-1),yi=n("p",null,"This PowerShell script removes all empty subfolders within a directory tree.",-1),$i=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"remove-empty"),n("span",{class:"token operator"},"-"),s("dirs"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("DirTree"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`DirTree <String>
    Specifies the path to the directory tree
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_i=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"remove-empty"),n("span",{class:"token operator"},"-"),s(`dirs C:\\Temp
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ai=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Removes all empty subfolders within a directory tree
.DESCRIPTION
	This PowerShell script removes all empty subfolders within a directory tree.
.PARAMETER DirTree
	Specifies the path to the directory tree
.EXAMPLE
	PS> ./remove-empty-dirs C:\\Temp
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$DirTree"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$DirTree"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$DirTree"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the path to the directory tree"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Folders"),s(" = @"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Folder"),s(" in "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token operator"},"-"),s("path  "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$DirTree"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("Recurse "),n("span",{class:"token punctuation"},"|"),s(" Where "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("PSisContainer "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Folders"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token function"},"New-Object"),s(" PSObject "),n("span",{class:"token operator"},"-"),s("Property @"),n("span",{class:"token punctuation"},"{"),s(`
			Object = `),n("span",{class:"token variable"},"$Folder"),s(`
			Depth = `),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Folder"),n("span",{class:"token punctuation"},"."),s("FullName"),n("span",{class:"token punctuation"},"."),s("Split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\\"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Count
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$Folders"),s(" = "),n("span",{class:"token variable"},"$Folders"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Sort"),s(" Depth "),n("span",{class:"token operator"},"-"),s(`Descending

	`),n("span",{class:"token variable"},"$Deleted"),s(" = @"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Folder"),s(" in "),n("span",{class:"token variable"},"$Folders"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Folder"),n("span",{class:"token punctuation"},"."),s("Object"),n("span",{class:"token punctuation"},"."),s("GetFileSystemInfos"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Count "),n("span",{class:"token operator"},"-eq"),s(" 0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$Deleted"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token function"},"New-Object"),s(" PSObject "),n("span",{class:"token operator"},"-"),s("Property @"),n("span",{class:"token punctuation"},"{"),s(`
				Folder = `),n("span",{class:"token variable"},"$Folder"),n("span",{class:"token punctuation"},"."),s("Object"),n("span",{class:"token punctuation"},"."),s(`FullName
				Deleted = `),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Date"),s(),n("span",{class:"token operator"},"-"),s("Format "),n("span",{class:"token string"},'"hh:mm:ss tt"'),n("span",{class:"token punctuation"},")"),s(`
				Created = `),n("span",{class:"token variable"},"$Folder"),n("span",{class:"token punctuation"},"."),s("Object"),n("span",{class:"token punctuation"},"."),s(`CreationTime
				`),n("span",{class:"token string"},"'Last Modified'"),s(" = "),n("span",{class:"token variable"},"$Folder"),n("span",{class:"token punctuation"},"."),s("Object"),n("span",{class:"token punctuation"},"."),s(`LastWriteTime
				Owner = `),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Acl"),s(),n("span",{class:"token variable"},"$Folder"),n("span",{class:"token punctuation"},"."),s("Object"),n("span",{class:"token punctuation"},"."),s("FullName"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Owner
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token function"},"Remove-Item"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token variable"},"$Folder"),n("span",{class:"token punctuation"},"."),s("Object"),n("span",{class:"token punctuation"},"."),s("FullName "),n("span",{class:"token operator"},"-"),s(`Force
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"✔️  Done."'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ei=n("hr",null,null,-1),Ci={id:"replace-in-files-ps1",tabindex:"-1"},xi={class:"header-anchor",href:"#replace-in-files-ps1"},Ti=n("code",null,"replace-in-files.ps1",-1),Ii=n("p",null,"This PowerShell script searches and replaces a pattern in the given files by the replacement.",-1),Di=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("replace-in-files"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("pattern"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("replacement"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("files"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`pattern <String>
    Specifies the pattern to look `),n("span",{class:"token keyword"},"for"),s(`
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`replacement <String>
    Specifies the replacement
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`files <String>
    Specifies the file to scan
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ni=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("replace-in-files NSA "),n("span",{class:"token string"},'"No Such Agency"'),s(" C:\\Temp\\"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"."),s(`txt

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Li=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Search and replace a pattern in the given files by the replacement
.DESCRIPTION
	This PowerShell script searches and replaces a pattern in the given files by the replacement.
.PARAMETER pattern
	Specifies the pattern to look for
.PARAMETER replacement
	Specifies the replacement
.PARAMETER files
	Specifies the file to scan
.EXAMPLE
	PS> ./replace-in-files NSA "No Such Agency" C:\\Temp\\*.txt
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$pattern"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$replacement"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$files"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" ReplaceInFile "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$FilePath"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Pattern"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Replacement"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token namespace"},"[System.IO.File]"),s("::WriteAllText"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FilePath"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[System.IO.File]"),s("::ReadAllText"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FilePath"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-replace"),s(),n("span",{class:"token variable"},"$Pattern"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$Replacement"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$pattern"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$pattern"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter search pattern"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$replacement"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$replacement"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter replacement"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$files"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$files"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter files"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token variable"},"$fileList"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"get-childItem"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$files"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("attributes "),n("span",{class:"token operator"},"!"),s("Directory"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$file"),s(" in "),n("span",{class:"token variable"},"$fileList"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ReplaceInFile `),n("span",{class:"token variable"},"$file"),s(),n("span",{class:"token variable"},"$pattern"),s(),n("span",{class:"token variable"},"$replacement"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s(`"OK, replaced '`),n("span",{class:"token variable"},"$pattern"),s("' by '"),n("span",{class:"token variable"},"$replacement"),s("' in "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$fileList"),n("span",{class:"token punctuation"},"."),s("Count"),n("span",{class:"token punctuation"},")")]),s(" files in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec."')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ri=n("hr",null,null,-1),Oi={id:"search-filename-ps1",tabindex:"-1"},Fi={class:"header-anchor",href:"#search-filename-ps1"},Mi=n("code",null,"search-filename.ps1",-1),Vi=n("p",null,"This PowerShell script serves as a quick Powershell replacement to the search functionality in Windows After you pass in a root folder and a search term, the script will list all files and folders matching that phrase.",-1),Wi=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"search-filename"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("path"),n("span",{class:"token punctuation"},"]"),s(" <Object> "),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("term"),n("span",{class:"token punctuation"},"]"),s(" <Object> "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`path <Object>
    Specifies the path
    
    Required?                    true
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`term <Object>
    Specifies the search term
    
    Required?                    true
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),zi=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"search-filename"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Bi=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all files and folder names matching a search pattern
.DESCRIPTION
	This PowerShell script serves as a quick Powershell replacement to the search functionality in Windows
	After you pass in a root folder and a search term, the script will list all files and folders matching that phrase.
.PARAMETER path
	Specifies the path 
.PARAMETER term
	Specifies the search term
.EXAMPLE
	PS> ./search-filename
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),s(`
`),n("span",{class:"token namespace"},"[Parameter(Mandatory=$true)]"),s(`
`),n("span",{class:"token variable"},"$path"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token namespace"},"[Parameter(Mandatory=$true)]"),s(`
`),n("span",{class:"token variable"},"$term"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"# Recursive search function"),s(`
`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"Results:"'),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"Search-Folder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FilePath"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$SearchTerm"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"# Get children"),s(`
    `),n("span",{class:"token variable"},"$children"),s(" = "),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token variable"},"$FilePath"),s(`
    `),n("span",{class:"token comment"},"# For each child, see if it matches the search term, and if it is a folder, search it too."),s(`
    `),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$child"),s(" in "),n("span",{class:"token variable"},"$children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token variable"},"$name"),s(" = "),n("span",{class:"token variable"},"$child"),n("span",{class:"token punctuation"},"."),s(`Name
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$name"),s(),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token variable"},"$SearchTerm"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FilePath"),s("\\"),n("span",{class:"token variable"},"$name"),s('"')]),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token variable"},"$isdir"),s(" = "),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FilePath"),s("\\"),n("span",{class:"token variable"},"$name"),s('"')]),s(),n("span",{class:"token operator"},"-"),s(`PathType Container
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$isdir"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"Search-Folder"),s(),n("span",{class:"token operator"},"-"),s("FilePath "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FilePath"),s("\\"),n("span",{class:"token variable"},"$name"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("SearchTerm "),n("span",{class:"token variable"},"$SearchTerm"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"# Call the search function"),s(`
`),n("span",{class:"token function"},"Search-Folder"),s(),n("span",{class:"token operator"},"-"),s("FilePath "),n("span",{class:"token variable"},"$path"),s(),n("span",{class:"token operator"},"-"),s("SearchTerm "),n("span",{class:"token variable"},"$term"),s(`
`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ui=n("hr",null,null,-1),qi={id:"search-files-ps1",tabindex:"-1"},Ki={class:"header-anchor",href:"#search-files-ps1"},Xi=n("code",null,"search-files.ps1",-1),Hi=n("p",null,"This PowerShell script searches for a pattern in the given files.",-1),ji=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"search-files"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("pattern"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("files"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`pattern <String>
    Specifies the search pattern
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`files <String>
    Specifies the files
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Yi=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"search-files"),s(" UFO C:\\Temp\\"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"."),s(`txt

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Gi=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Searches for a pattern in files
.DESCRIPTION
	This PowerShell script searches for a pattern in the given files.
.PARAMETER pattern
	Specifies the search pattern
.PARAMETER files
	Specifies the files
.EXAMPLE
	PS> ./search-files UFO C:\\Temp\\*.txt
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$pattern"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$files"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" ListLocations "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Pattern"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Path"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$List"),s(" = "),n("span",{class:"token function"},"Select-String"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token variable"},"$Path"),s(),n("span",{class:"token operator"},"-"),s("Pattern "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Pattern"),s('"')]),s(` 
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Item"),s(" in "),n("span",{class:"token variable"},"$List"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"New-Object"),s(" PSObject "),n("span",{class:"token operator"},"-"),s("Property @"),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token string"},"'Path'"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Item"),n("span",{class:"token punctuation"},"."),s("Path"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
			`),n("span",{class:"token string"},"'Line'"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Item"),n("span",{class:"token punctuation"},"."),s("LineNumber"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
			`),n("span",{class:"token string"},"'Text'"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Item"),n("span",{class:"token punctuation"},"."),s("Line"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token string"},[s('"(found '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$List"),n("span",{class:"token punctuation"},"."),s("Count"),n("span",{class:"token punctuation"},")")]),s(" locations with pattern '"),n("span",{class:"token variable"},"$pattern"),s(`')"`)]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$pattern"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$pattern"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter search pattern"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$files"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$files"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter path to files"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	ListLocations `),n("span",{class:"token variable"},"$pattern"),s(),n("span",{class:"token variable"},"$files"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"format-table"),s(),n("span",{class:"token operator"},"-"),s("property Path"),n("span",{class:"token punctuation"},","),s("Line"),n("span",{class:"token punctuation"},","),s(`Text
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ji=n("hr",null,null,-1),Zi={id:"upload-file-ps1",tabindex:"-1"},Qi={class:"header-anchor",href:"#upload-file-ps1"},no=n("code",null,"upload-file.ps1",-1),so=n("p",null,"This PowerShell script uploads a local file to a FTP server.",-1),ao=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("upload-file"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("File"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("URL"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Username"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Password"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`File <String>
    Specifies the path to the local file
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`URL <String>
    Specifies the FTP server URL
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`Username <String>
    Specifies the user name
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`Password <String>
    Specifies the password
    
    Required?                    false
    Position?                    4
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),eo=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),s("\\upload-file"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),to=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Uploads a local file to a FTP server
.DESCRIPTION
	This PowerShell script uploads a local file to a FTP server.
.PARAMETER File
	Specifies the path to the local file
.PARAMETER URL
	Specifies the FTP server URL
.PARAMETER Username
	Specifies the user name
.PARAMETER Password
	Specifies the password
.EXAMPLE
	PS> .\\upload-file.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$File"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$URL"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Username"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Password"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$File"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$File"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter local file to upload"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$URL"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$URL"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter URL of FTP server"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Username"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Username"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter username for login"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Password"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Password"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter password for login"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token namespace"},"[bool]"),n("span",{class:"token variable"},"$EnableSSL"),s(" = "),n("span",{class:"token boolean"},"$true"),s(`
	`),n("span",{class:"token namespace"},"[bool]"),n("span",{class:"token variable"},"$UseBinary"),s(" = "),n("span",{class:"token boolean"},"$true"),s(`
	`),n("span",{class:"token namespace"},"[bool]"),n("span",{class:"token variable"},"$UsePassive"),s(" = "),n("span",{class:"token boolean"},"$true"),s(`
	`),n("span",{class:"token namespace"},"[bool]"),n("span",{class:"token variable"},"$KeepAlive"),s(" = "),n("span",{class:"token boolean"},"$true"),s(`
	`),n("span",{class:"token namespace"},"[bool]"),n("span",{class:"token variable"},"$IgnoreCert"),s(" = "),n("span",{class:"token boolean"},"$true"),s(`

	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token comment"},"# check local file:"),s(`
	`),n("span",{class:"token variable"},"$FullPath"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$File"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"test-path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access file: `),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$Filename"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token variable"},"$FullPath"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
	`),n("span",{class:"token variable"},"$FileSize"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token variable"},"$FullPath"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Length
	`),n("span",{class:"token string"},[s('"⏳ Uploading 📄'),n("span",{class:"token variable"},"$Filename"),s(" ("),n("span",{class:"token variable"},"$FileSize"),s(" bytes) to "),n("span",{class:"token variable"},"$URL"),s(' ..."')]),s(`

	`),n("span",{class:"token comment"},"# prepare request:"),s(`
	`),n("span",{class:"token variable"},"$Request"),s(" = "),n("span",{class:"token namespace"},"[Net.WebRequest]"),s("::Create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$URL"),s("/"),n("span",{class:"token variable"},"$Filename"),s('"')]),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$Request"),n("span",{class:"token punctuation"},"."),s("Credentials = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("Net"),n("span",{class:"token punctuation"},"."),s("NetworkCredential"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Username"),s('"')]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Password"),s('"')]),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$Request"),n("span",{class:"token punctuation"},"."),s("Method = "),n("span",{class:"token namespace"},"[System.Net.WebRequestMethods+Ftp]"),s(`::UploadFile 
	`),n("span",{class:"token variable"},"$Request"),n("span",{class:"token punctuation"},"."),s("EnableSSL = "),n("span",{class:"token variable"},"$EnableSSL"),s(`
	`),n("span",{class:"token variable"},"$Request"),n("span",{class:"token punctuation"},"."),s("UseBinary = "),n("span",{class:"token variable"},"$UseBinary"),s(`
	`),n("span",{class:"token variable"},"$Request"),n("span",{class:"token punctuation"},"."),s("UsePassive = "),n("span",{class:"token variable"},"$UsePassive"),s(`
	`),n("span",{class:"token variable"},"$Request"),n("span",{class:"token punctuation"},"."),s("KeepAlive = "),n("span",{class:"token variable"},"$KeepAlive"),s(`
	`),n("span",{class:"token namespace"},"[System.Net.ServicePointManager]"),s("::ServerCertificateValidationCallback = "),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$IgnoreCert"),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$fileStream"),s(" = "),n("span",{class:"token namespace"},"[System.IO.File]"),s("::OpenRead"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FullPath"),s('"')]),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$ftpStream"),s(" = "),n("span",{class:"token variable"},"$Request"),n("span",{class:"token punctuation"},"."),s("GetRequestStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token variable"},"$Buf"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" Byte"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(` 32KB
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$DataRead"),s(" = "),n("span",{class:"token variable"},"$fileStream"),n("span",{class:"token punctuation"},"."),s("Read"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Buf"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$Buf"),n("span",{class:"token punctuation"},"."),s("Length"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-gt"),s(" 0"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"{"),s(`
	    `),n("span",{class:"token variable"},"$ftpStream"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Write"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Buf"),n("span",{class:"token punctuation"},","),s(" 0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$DataRead"),n("span",{class:"token punctuation"},")"),s(`
	    `),n("span",{class:"token variable"},"$pct"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$fileStream"),n("span",{class:"token punctuation"},"."),s("Position "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token variable"},"$fileStream"),n("span",{class:"token punctuation"},"."),s("Length"),n("span",{class:"token punctuation"},")"),s(`
	    `),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token operator"},"-"),s("Activity "),n("span",{class:"token string"},'"Uploading"'),s(),n("span",{class:"token operator"},"-"),s("Status "),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"{0:P0} complete:"'),s(),n("span",{class:"token operator"},"-"),s("f "),n("span",{class:"token variable"},"$pct"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("PercentComplete "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$pct"),s(),n("span",{class:"token operator"},"*"),s(" 100"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"# cleanup:"),s(`
	`),n("span",{class:"token variable"},"$ftpStream"),n("span",{class:"token punctuation"},"."),s("Dispose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$fileStream"),n("span",{class:"token punctuation"},"."),s("Dispose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ uploaded 📄'),n("span",{class:"token variable"},"$Filename"),s(" to "),n("span",{class:"token variable"},"$URL"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s(" after "),n("span",{class:"token variable"},"$Elapsed"),s(' sec."')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),lo=n("hr",null,null,-1);function io(d,oo){const i=k("FontIcon"),o=k("router-link"),c=k("VPCard"),u=k("Tabs"),m=k("TagLinks");return v(),h("div",null,[n("h1",w,[n("a",S,[n("span",null,g(d.$frontmatter.title)+" 관련",1)])]),n("nav",P,[n("ul",null,[n("li",null,[l(o,{to:"#cd-autostart-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-autostart.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-desktop-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-desktop.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-docs-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-docs.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-downloads-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-downloads.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-dropbox-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-dropbox.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-home-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-home.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-music-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-music.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-onedrive-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-onedrive.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-pics-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-pics.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-recycle-bin-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-recycle-bin.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-repos-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-repos.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-root-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-root.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-scripts-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-scripts.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-ssh-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-ssh.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-up-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-up.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-up2-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-up2.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-up3-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-up3.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-up4-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-up4.ps1")]),_:1})]),n("li",null,[l(o,{to:"#cd-videos-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" cd-videos.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-symlinks-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" check-symlinks.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-xml-file-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" check-xml-file.ps1")]),_:1})]),n("li",null,[l(o,{to:"#clear-recycle-bin-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" clear-recycle-bin.ps1")]),_:1})]),n("li",null,[l(o,{to:"#copy-photos-sorted-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" copy-photos-sorted.ps1")]),_:1})]),n("li",null,[l(o,{to:"#decrypt-file-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" decrypt-file.ps1")]),_:1})]),n("li",null,[l(o,{to:"#download-dir-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" download-dir.ps1")]),_:1})]),n("li",null,[l(o,{to:"#download-file-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" download-file.ps1")]),_:1})]),n("li",null,[l(o,{to:"#edit-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" edit.ps1")]),_:1})]),n("li",null,[l(o,{to:"#encrypt-file-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" encrypt-file.ps1")]),_:1})]),n("li",null,[l(o,{to:"#get-md5-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" get-md5.ps1")]),_:1})]),n("li",null,[l(o,{to:"#get-sha1-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" get-sha1.ps1")]),_:1})]),n("li",null,[l(o,{to:"#get-sha256-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" get-sha256.ps1")]),_:1})]),n("li",null,[l(o,{to:"#inspect-exe-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" inspect-exe.ps1")]),_:1})]),n("li",null,[l(o,{to:"#❌-list-dir-tree-ps1"},{default:a(()=>[s("❌"),l(i,{icon:"iconfont powershell-file"}),s(" list-dir-tree.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-empty-dirs-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" list-empty-dirs.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-empty-files-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" list-empty-files.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-files-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" list-files.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-folder-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" list-folder.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-hidden-files-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" list-hidden-files.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-recycle-bin-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" list-recycle-bin.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-unused-files-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" list-unused-files.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-workdir-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" list-workdir.ps1")]),_:1})]),n("li",null,[l(o,{to:"#make-install-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" make-install.ps1")]),_:1})]),n("li",null,[l(o,{to:"#new-shortcut-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" new-shortcut.ps1")]),_:1})]),n("li",null,[l(o,{to:"#new-symlink-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" new-symlink.ps1")]),_:1})]),n("li",null,[l(o,{to:"#new-zipfile-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" new-zipfile.ps1")]),_:1})]),n("li",null,[l(o,{to:"#publish-to-ipfs-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" publish-to-ipfs.ps1")]),_:1})]),n("li",null,[l(o,{to:"#remove-empty-dirs-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" remove-empty-dirs.ps1")]),_:1})]),n("li",null,[l(o,{to:"#replace-in-files-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" replace-in-files.ps1")]),_:1})]),n("li",null,[l(o,{to:"#search-filename-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" search-filename.ps1")]),_:1})]),n("li",null,[l(o,{to:"#search-files-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" search-files.ps1")]),_:1})]),n("li",null,[l(o,{to:"#upload-file-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s(" upload-file.ps1")]),_:1})])])]),y,n("h2",$,[n("a",_,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),A])])]),l(c,p(r({title:"cd-autostart.ps1",desc:"Set the working directory to the user's autostart folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-autostart.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),E,l(u,{id:"14",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[C]),tab1:a(({value:e,isActive:t})=>[x]),tab2:a(({value:e,isActive:t})=>[T]),_:1}),I,n("h2",D,[n("a",N,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),L])])]),l(c,p(r({title:"cd-desktop.ps1",desc:"Set the working directory to the user's desktop folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-desktop.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),R,l(u,{id:"33",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[O]),tab1:a(({value:e,isActive:t})=>[F]),tab2:a(({value:e,isActive:t})=>[M]),_:1}),V,n("h2",W,[n("a",z,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),B])])]),l(c,p(r({title:"cd-docs.ps1",desc:"Set the working directory to the user's documents folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-docs.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),U,l(u,{id:"52",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[q]),tab1:a(({value:e,isActive:t})=>[K]),tab2:a(({value:e,isActive:t})=>[X]),_:1}),H,n("h2",j,[n("a",Y,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),G])])]),l(c,p(r({title:"cd-downloads.ps1",desc:"Set the working directory to the user's downloads folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-downloads.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),J,l(u,{id:"71",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Z]),tab1:a(({value:e,isActive:t})=>[Q]),tab2:a(({value:e,isActive:t})=>[nn]),_:1}),sn,n("h2",an,[n("a",en,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),tn])])]),l(c,p(r({title:"cd-dropbox.ps1",desc:"Set the working directory to the user's Dropbox folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-dropbox.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ln,l(u,{id:"90",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[on]),tab1:a(({value:e,isActive:t})=>[cn]),tab2:a(({value:e,isActive:t})=>[pn]),_:1}),rn,n("h2",un,[n("a",kn,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),dn])])]),l(c,p(r({title:"cd-home.ps1",desc:"Set the working directory to the user's home folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-home.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),mn,l(u,{id:"109",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[bn]),tab1:a(({value:e,isActive:t})=>[vn]),tab2:a(({value:e,isActive:t})=>[hn]),_:1}),gn,n("h2",fn,[n("a",wn,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Sn])])]),l(c,p(r({title:"cd-music.ps1",desc:"Set the working directory to the user's music folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-music.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Pn,l(u,{id:"128",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[yn]),tab1:a(({value:e,isActive:t})=>[$n]),tab2:a(({value:e,isActive:t})=>[_n]),_:1}),An,n("h2",En,[n("a",Cn,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),xn])])]),l(c,p(r({title:"cd-onedrive.ps1",desc:"Set the working directory to the user's OneDrive folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-onedrive.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Tn,l(u,{id:"147",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[In]),tab1:a(({value:e,isActive:t})=>[Dn]),tab2:a(({value:e,isActive:t})=>[Nn]),_:1}),Ln,n("h2",Rn,[n("a",On,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Fn])])]),l(c,p(r({title:"cd-pics.ps1",desc:"Set the working directory to the user's pictures folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-pics.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Mn,l(u,{id:"166",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Vn]),tab1:a(({value:e,isActive:t})=>[Wn]),tab2:a(({value:e,isActive:t})=>[zn]),_:1}),Bn,n("h2",Un,[n("a",qn,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Kn])])]),l(c,p(r({title:"cd-recycle-bin.ps1",desc:"Set the working directory to the user's recycle bin folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-recycle-bin.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),l(u,{id:"182",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Xn]),tab1:a(({value:e,isActive:t})=>[Hn]),tab2:a(({value:e,isActive:t})=>[jn]),_:1}),Yn,n("h2",Gn,[n("a",Jn,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Zn])])]),l(c,p(r({title:"cd-repos.ps1",desc:"Change the working directory to the user's Git repositories folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-repos.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Qn,l(u,{id:"201",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ns]),tab1:a(({value:e,isActive:t})=>[ss]),tab2:a(({value:e,isActive:t})=>[as]),_:1}),es,n("h2",ts,[n("a",ls,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),is])])]),l(c,p(r({title:"cd-root.ps1",desc:"Set the working directory to the root directory.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-root.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),n("p",null,[s("This PowerShell script changes the current working directory to the root directory ("),l(i,{icon:"fas fa-folder-open"}),os,s(" on Windows).")]),l(u,{id:"220",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[cs]),tab1:a(({value:e,isActive:t})=>[ps]),tab2:a(({value:e,isActive:t})=>[rs]),_:1}),us,n("h2",ks,[n("a",ds,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),ms])])]),l(c,p(r({title:"cd-scripts.ps1",desc:"Set the working directory to the PowerShell Scripts folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-scripts.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),bs,l(u,{id:"239",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[vs]),tab1:a(({value:e,isActive:t})=>[hs]),tab2:a(({value:e,isActive:t})=>[gs]),_:1}),fs,n("h2",ws,[n("a",Ss,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Ps])])]),l(c,p(r({title:"cd-ssh.ps1",desc:"Set the working directory to the user's SSH folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-ssh.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ys,l(u,{id:"258",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[$s]),tab1:a(({value:e,isActive:t})=>[_s]),tab2:a(({value:e,isActive:t})=>[As]),_:1}),Es,n("h2",Cs,[n("a",xs,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Ts])])]),l(c,p(r({title:"cd-up.ps1",desc:"Set the working directory to one directory level up.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-up.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Is,l(u,{id:"277",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ds]),tab1:a(({value:e,isActive:t})=>[Ns]),tab2:a(({value:e,isActive:t})=>[Ls]),_:1}),Rs,n("h2",Os,[n("a",Fs,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Ms])])]),l(c,p(r({title:"cd-up2.ps1",desc:"Set the working directory to two directory levels up.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-up2.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Vs,l(u,{id:"296",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ws]),tab1:a(({value:e,isActive:t})=>[zs]),tab2:a(({value:e,isActive:t})=>[Bs]),_:1}),Us,n("h2",qs,[n("a",Ks,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Xs])])]),l(c,p(r({title:"cd-up3.ps1",desc:"Set the working directory to three directory levels up.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-up3.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Hs,l(u,{id:"315",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[js]),tab1:a(({value:e,isActive:t})=>[Ys]),tab2:a(({value:e,isActive:t})=>[Gs]),_:1}),Js,n("h2",Zs,[n("a",Qs,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),na])])]),l(c,p(r({title:"cd-up4.ps1",desc:"Set the working directory to four directory levels up.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-up4.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),sa,l(u,{id:"334",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[aa]),tab1:a(({value:e,isActive:t})=>[ea]),tab2:a(({value:e,isActive:t})=>[ta]),_:1}),la,n("h2",ia,[n("a",oa,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),ca])])]),l(c,p(r({title:"cd-videos.ps1",desc:"Set the working directory to the user's videos folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/cd-videos.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),pa,l(u,{id:"353",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ra]),tab1:a(({value:e,isActive:t})=>[ua]),tab2:a(({value:e,isActive:t})=>[ka]),_:1}),da,n("h2",ma,[n("a",ba,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),va])])]),l(c,p(r({title:"check-symlinks.ps1",desc:"Checks every symlink in a directory tree.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-symlinks.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ha,l(u,{id:"372",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}]},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ga]),tab1:a(({value:e,isActive:t})=>[fa,wa]),tab2:a(({value:e,isActive:t})=>[Sa]),_:1}),Pa,n("h2",ya,[n("a",$a,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),_a])])]),l(c,p(r({title:"check-xml-file.ps1",desc:"Checks the given XML file for validity.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-xml-file.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Aa,l(u,{id:"394",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}]},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ea]),tab1:a(({value:e,isActive:t})=>[Ca,xa]),tab2:a(({value:e,isActive:t})=>[Ta]),_:1}),Ia,n("h2",Da,[n("a",Na,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),La])])]),l(c,p(r({title:"clear-recycle-bin.ps1",desc:"Removes the content of the recycle bin folder (can not be undo!).",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/clear-recycle-bin.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ra,l(u,{id:"416",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}]},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Oa]),tab1:a(({value:e,isActive:t})=>[Fa,Ma]),tab2:a(({value:e,isActive:t})=>[Va]),_:1}),Wa,n("h2",za,[n("a",Ba,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Ua])])]),l(c,p(r({title:"copy-photos-sorted.ps1",desc:"Copy image files sorted by year and month.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/copy-photos-sorted.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),l(u,{id:"435",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}]},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[qa]),tab1:a(({value:e,isActive:t})=>[Ka]),tab2:a(({value:e,isActive:t})=>[Xa]),_:1}),Ha,n("h2",ja,[n("a",Ya,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Ga])])]),l(c,p(r({title:"decrypt-file.ps1",desc:"Decrypts the given file.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/decrypt-file.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ja,l(u,{id:"454",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}]},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Za]),tab1:a(({value:e,isActive:t})=>[Qa,ne]),tab2:a(({value:e,isActive:t})=>[se]),_:1}),ae,n("h2",ee,[n("a",te,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),le])])]),l(c,p(r({title:"download-dir.ps1",desc:"Downloads a directory tree from the given URL.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/download-dir.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ie,l(u,{id:"476",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}]},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[oe]),tab1:a(({value:e,isActive:t})=>[ce,pe]),tab2:a(({value:e,isActive:t})=>[re]),_:1}),ue,n("h2",ke,[n("a",de,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),me])])]),l(c,p(r({title:"download-file.ps1",desc:"Downloads a file from the given URL.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/download-file.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),be,l(u,{id:"498",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}]},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ve]),tab1:a(({value:e,isActive:t})=>[he,ge]),tab2:a(({value:e,isActive:t})=>[fe]),_:1}),we,n("h2",Se,[n("a",Pe,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),ye])])]),l(c,p(r({title:"edit.ps1",desc:"Edits the given file with the built-in text editor.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/edit.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),$e,l(u,{id:"520",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}]},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[_e]),tab1:a(({value:e,isActive:t})=>[Ae,Ee]),tab2:a(({value:e,isActive:t})=>[Ce]),_:1}),xe,n("h2",Te,[n("a",Ie,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),De])])]),l(c,p(r({title:"encrypt-file.ps1",desc:"Encrypts the given file.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/encrypt-file.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ne,l(u,{id:"542",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}]},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Le]),tab1:a(({value:e,isActive:t})=>[Re,Oe]),tab2:a(({value:e,isActive:t})=>[Fe]),_:1}),Me,n("h2",Ve,[n("a",We,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),ze])])]),l(c,p(r({title:"get-md5.ps1",desc:"Prints the MD5 checksum of the given file.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/get-md5.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Be,l(u,{id:"564",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}]},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ue]),tab1:a(({value:e,isActive:t})=>[qe,Ke]),tab2:a(({value:e,isActive:t})=>[Xe]),_:1}),He,n("h2",je,[n("a",Ye,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Ge])])]),l(c,p(r({title:"get-sha1.ps1",desc:"Prints the SHA1 checksum of the given file.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/get-sha1.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Je,l(u,{id:"586",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}]},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ze]),tab1:a(({value:e,isActive:t})=>[Qe,nt]),tab2:a(({value:e,isActive:t})=>[st]),_:1}),at,n("h2",et,[n("a",tt,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),lt])])]),l(c,p(r({title:"get-sha256.ps1",desc:"Prints the SHA256 checksum of the given file.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/get-sha256.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),it,l(u,{id:"608",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}]},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ot]),tab1:a(({value:e,isActive:t})=>[ct,pt]),tab2:a(({value:e,isActive:t})=>[rt]),_:1}),ut,n("h2",kt,[n("a",dt,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),mt])])]),l(c,p(r({title:"inspect-exe.ps1",desc:"Prints basic information of the given executable file.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/inspect-exe.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),bt,l(u,{id:"630",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[vt]),tab1:a(({value:e,isActive:t})=>[ht]),tab2:a(({value:e,isActive:t})=>[gt]),_:1}),ft,n("h2",wt,[n("a",St,[n("span",null,[s("❌"),l(i,{icon:"iconfont powershell-file"}),s(),Pt])])]),l(c,p(r({title:"list-dir-tree.ps1",desc:"Lists the directory tree content.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-dir-tree.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),yt,n("h2",$t,[n("a",_t,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),At])])]),l(c,p(r({title:"list-empty-dirs.ps1",desc:"Lists empty subfolders within the given directory tree.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-empty-dirs.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Et,l(u,{id:"654",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ct]),tab1:a(({value:e,isActive:t})=>[xt]),tab2:a(({value:e,isActive:t})=>[Tt]),_:1}),It,n("h2",Dt,[n("a",Nt,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Lt])])]),l(c,p(r({title:"list-empty-files.ps1",desc:"Lists empty files within the given directory tree.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-empty-files.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Rt,l(u,{id:"673",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ot]),tab1:a(({value:e,isActive:t})=>[Ft]),tab2:a(({value:e,isActive:t})=>[Mt]),_:1}),Vt,n("h2",Wt,[n("a",zt,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Bt])])]),l(c,p(r({title:"list-files.ps1",desc:"Lists all files in the given folder and also in every subfolder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-files.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ut,l(u,{id:"692",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[qt]),tab1:a(({value:e,isActive:t})=>[Kt]),tab2:a(({value:e,isActive:t})=>[Xt]),_:1}),Ht,n("h2",jt,[n("a",Yt,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Gt])])]),l(c,p(r({title:"list-folder.ps1",desc:"Lists the folder content.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-folder.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Jt,l(u,{id:"711",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Zt]),tab1:a(({value:e,isActive:t})=>[Qt]),tab2:a(({value:e,isActive:t})=>[nl]),_:1}),sl,n("h2",al,[n("a",el,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),tl])])]),l(c,p(r({title:"list-hidden-files.ps1",desc:"Lists hidden files within the given directory tree.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-hidden-files.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ll,l(u,{id:"730",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[il]),tab1:a(({value:e,isActive:t})=>[ol]),tab2:a(({value:e,isActive:t})=>[cl]),_:1}),pl,n("h2",rl,[n("a",ul,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),kl])])]),l(c,p(r({title:"list-recycle-bin.ps1",desc:"Lists the content of the recycle bin folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-recycle-bin.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),dl,l(u,{id:"749",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ml]),tab1:a(({value:e,isActive:t})=>[bl]),tab2:a(({value:e,isActive:t})=>[vl]),_:1}),hl,n("h2",gl,[n("a",fl,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),wl])])]),l(c,p(r({title:"list-unused-files.ps1",desc:"Lists unused files in a directory tree.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-unused-files.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Sl,l(u,{id:"768",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Pl]),tab1:a(({value:e,isActive:t})=>[yl]),tab2:a(({value:e,isActive:t})=>[$l]),_:1}),_l,n("h2",Al,[n("a",El,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Cl])])]),l(c,p(r({title:"list-workdir.ps1",desc:"Lists the current working directory.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-workdir.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),xl,l(u,{id:"787",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Tl]),tab1:a(({value:e,isActive:t})=>[Il]),tab2:a(({value:e,isActive:t})=>[Dl]),_:1}),Nl,n("h2",Ll,[n("a",Rl,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Ol])])]),l(c,p(r({title:"make-install.ps1",desc:"Installs built executables and libs to the installation directory.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/make-install.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Fl,l(u,{id:"806",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ml]),tab1:a(({value:e,isActive:t})=>[Vl]),tab2:a(({value:e,isActive:t})=>[Wl]),_:1}),zl,n("h2",Bl,[n("a",Ul,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),ql])])]),l(c,p(r({title:"new-shortcut.ps1",desc:"Creates a new shortcut file.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/new-shortcut.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Kl,l(u,{id:"825",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Xl]),tab1:a(({value:e,isActive:t})=>[Hl]),tab2:a(({value:e,isActive:t})=>[jl]),_:1}),Yl,n("h2",Gl,[n("a",Jl,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Zl])])]),l(c,p(r({title:"new-symlink.ps1",desc:"Creates a new symbolic link file.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/new-symlink.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ql,l(u,{id:"844",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ni]),tab1:a(({value:e,isActive:t})=>[si]),tab2:a(({value:e,isActive:t})=>[ai]),_:1}),ei,n("h2",ti,[n("a",li,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),ii])])]),l(c,p(r({title:"new-zipfile.ps1",desc:"Creates a new .zip file from a directory.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/new-zipfile.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),oi,l(u,{id:"863",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ci]),tab1:a(({value:e,isActive:t})=>[pi]),tab2:a(({value:e,isActive:t})=>[ri]),_:1}),ui,n("h2",ki,[n("a",di,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),mi])])]),l(c,p(r({title:"publish-to-ipfs.ps1",desc:"Publishes the given files or directory to IPFS.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/publish-to-ipfs.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),bi,l(u,{id:"882",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[vi]),tab1:a(({value:e,isActive:t})=>[hi]),tab2:a(({value:e,isActive:t})=>[gi]),_:1}),fi,n("h2",wi,[n("a",Si,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Pi])])]),l(c,p(r({title:"remove-empty-dirs.ps1",desc:"Removes empty subfolders within the given directory tree.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/remove-empty-dirs.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),yi,l(u,{id:"901",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[$i]),tab1:a(({value:e,isActive:t})=>[_i]),tab2:a(({value:e,isActive:t})=>[Ai]),_:1}),Ei,n("h2",Ci,[n("a",xi,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Ti])])]),l(c,p(r({title:"replace-in-files.ps1",desc:"Search and replace a pattern in the given files by the replacement.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/replace-in-files.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ii,l(u,{id:"920",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Di]),tab1:a(({value:e,isActive:t})=>[Ni]),tab2:a(({value:e,isActive:t})=>[Li]),_:1}),Ri,n("h2",Oi,[n("a",Fi,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Mi])])]),l(c,p(r({title:"search-filename.ps1",desc:"Searches the directory tree for filenames by given pattern.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/search-filename.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Vi,l(u,{id:"939",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Wi]),tab1:a(({value:e,isActive:t})=>[zi]),tab2:a(({value:e,isActive:t})=>[Bi]),_:1}),Ui,n("h2",qi,[n("a",Ki,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),Xi])])]),l(c,p(r({title:"search-files.ps1",desc:"Searches the given pattern in the given files.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/search-files.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Hi,l(u,{id:"958",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ji]),tab1:a(({value:e,isActive:t})=>[Yi]),tab2:a(({value:e,isActive:t})=>[Gi]),_:1}),Ji,n("h2",Zi,[n("a",Qi,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),s(),no])])]),l(c,p(r({title:"upload-file.ps1",desc:"Uploads the local file to the given FTP server.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/upload-file.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),so,l(u,{id:"977",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ao]),tab1:a(({value:e,isActive:t})=>[eo]),tab2:a(({value:e,isActive:t})=>[to]),_:1}),lo,l(m)])}const ro=b(f,[["render",io],["__file","scripts-for-files-folders.html.vue"]]),uo=JSON.parse('{"path":"/programming/pwsh/scripts-for-files-folders.html","title":"Scripts for Files & Folders","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Scripts for Files & Folders","description":"Powershell > Scripts for Files & Folders","icon":"fas fa-folder","category":["Powershell"],"tag":["powershell","windows","script","useful-script"]},"headers":[{"level":2,"title":"cd-autostart.ps1","slug":"cd-autostart-ps1","link":"#cd-autostart-ps1","children":[]},{"level":2,"title":"cd-desktop.ps1","slug":"cd-desktop-ps1","link":"#cd-desktop-ps1","children":[]},{"level":2,"title":"cd-docs.ps1","slug":"cd-docs-ps1","link":"#cd-docs-ps1","children":[]},{"level":2,"title":"cd-downloads.ps1","slug":"cd-downloads-ps1","link":"#cd-downloads-ps1","children":[]},{"level":2,"title":"cd-dropbox.ps1","slug":"cd-dropbox-ps1","link":"#cd-dropbox-ps1","children":[]},{"level":2,"title":"cd-home.ps1","slug":"cd-home-ps1","link":"#cd-home-ps1","children":[]},{"level":2,"title":"cd-music.ps1","slug":"cd-music-ps1","link":"#cd-music-ps1","children":[]},{"level":2,"title":"cd-onedrive.ps1","slug":"cd-onedrive-ps1","link":"#cd-onedrive-ps1","children":[]},{"level":2,"title":"cd-pics.ps1","slug":"cd-pics-ps1","link":"#cd-pics-ps1","children":[]},{"level":2,"title":"cd-recycle-bin.ps1","slug":"cd-recycle-bin-ps1","link":"#cd-recycle-bin-ps1","children":[]},{"level":2,"title":"cd-repos.ps1","slug":"cd-repos-ps1","link":"#cd-repos-ps1","children":[]},{"level":2,"title":"cd-root.ps1","slug":"cd-root-ps1","link":"#cd-root-ps1","children":[]},{"level":2,"title":"cd-scripts.ps1","slug":"cd-scripts-ps1","link":"#cd-scripts-ps1","children":[]},{"level":2,"title":"cd-ssh.ps1","slug":"cd-ssh-ps1","link":"#cd-ssh-ps1","children":[]},{"level":2,"title":"cd-up.ps1","slug":"cd-up-ps1","link":"#cd-up-ps1","children":[]},{"level":2,"title":"cd-up2.ps1","slug":"cd-up2-ps1","link":"#cd-up2-ps1","children":[]},{"level":2,"title":"cd-up3.ps1","slug":"cd-up3-ps1","link":"#cd-up3-ps1","children":[]},{"level":2,"title":"cd-up4.ps1","slug":"cd-up4-ps1","link":"#cd-up4-ps1","children":[]},{"level":2,"title":"cd-videos.ps1","slug":"cd-videos-ps1","link":"#cd-videos-ps1","children":[]},{"level":2,"title":"check-symlinks.ps1","slug":"check-symlinks-ps1","link":"#check-symlinks-ps1","children":[]},{"level":2,"title":"check-xml-file.ps1","slug":"check-xml-file-ps1","link":"#check-xml-file-ps1","children":[]},{"level":2,"title":"clear-recycle-bin.ps1","slug":"clear-recycle-bin-ps1","link":"#clear-recycle-bin-ps1","children":[]},{"level":2,"title":"copy-photos-sorted.ps1","slug":"copy-photos-sorted-ps1","link":"#copy-photos-sorted-ps1","children":[]},{"level":2,"title":"decrypt-file.ps1","slug":"decrypt-file-ps1","link":"#decrypt-file-ps1","children":[]},{"level":2,"title":"download-dir.ps1","slug":"download-dir-ps1","link":"#download-dir-ps1","children":[]},{"level":2,"title":"download-file.ps1","slug":"download-file-ps1","link":"#download-file-ps1","children":[]},{"level":2,"title":"edit.ps1","slug":"edit-ps1","link":"#edit-ps1","children":[]},{"level":2,"title":"encrypt-file.ps1","slug":"encrypt-file-ps1","link":"#encrypt-file-ps1","children":[]},{"level":2,"title":"get-md5.ps1","slug":"get-md5-ps1","link":"#get-md5-ps1","children":[]},{"level":2,"title":"get-sha1.ps1","slug":"get-sha1-ps1","link":"#get-sha1-ps1","children":[]},{"level":2,"title":"get-sha256.ps1","slug":"get-sha256-ps1","link":"#get-sha256-ps1","children":[]},{"level":2,"title":"inspect-exe.ps1","slug":"inspect-exe-ps1","link":"#inspect-exe-ps1","children":[]},{"level":2,"title":"❌ list-dir-tree.ps1","slug":"❌-list-dir-tree-ps1","link":"#❌-list-dir-tree-ps1","children":[]},{"level":2,"title":"list-empty-dirs.ps1","slug":"list-empty-dirs-ps1","link":"#list-empty-dirs-ps1","children":[]},{"level":2,"title":"list-empty-files.ps1","slug":"list-empty-files-ps1","link":"#list-empty-files-ps1","children":[]},{"level":2,"title":"list-files.ps1","slug":"list-files-ps1","link":"#list-files-ps1","children":[]},{"level":2,"title":"list-folder.ps1","slug":"list-folder-ps1","link":"#list-folder-ps1","children":[]},{"level":2,"title":"list-hidden-files.ps1","slug":"list-hidden-files-ps1","link":"#list-hidden-files-ps1","children":[]},{"level":2,"title":"list-recycle-bin.ps1","slug":"list-recycle-bin-ps1","link":"#list-recycle-bin-ps1","children":[]},{"level":2,"title":"list-unused-files.ps1","slug":"list-unused-files-ps1","link":"#list-unused-files-ps1","children":[]},{"level":2,"title":"list-workdir.ps1","slug":"list-workdir-ps1","link":"#list-workdir-ps1","children":[]},{"level":2,"title":"make-install.ps1","slug":"make-install-ps1","link":"#make-install-ps1","children":[]},{"level":2,"title":"new-shortcut.ps1","slug":"new-shortcut-ps1","link":"#new-shortcut-ps1","children":[]},{"level":2,"title":"new-symlink.ps1","slug":"new-symlink-ps1","link":"#new-symlink-ps1","children":[]},{"level":2,"title":"new-zipfile.ps1","slug":"new-zipfile-ps1","link":"#new-zipfile-ps1","children":[]},{"level":2,"title":"publish-to-ipfs.ps1","slug":"publish-to-ipfs-ps1","link":"#publish-to-ipfs-ps1","children":[]},{"level":2,"title":"remove-empty-dirs.ps1","slug":"remove-empty-dirs-ps1","link":"#remove-empty-dirs-ps1","children":[]},{"level":2,"title":"replace-in-files.ps1","slug":"replace-in-files-ps1","link":"#replace-in-files-ps1","children":[]},{"level":2,"title":"search-filename.ps1","slug":"search-filename-ps1","link":"#search-filename-ps1","children":[]},{"level":2,"title":"search-files.ps1","slug":"search-files-ps1","link":"#search-files-ps1","children":[]},{"level":2,"title":"upload-file.ps1","slug":"upload-file-ps1","link":"#upload-file-ps1","children":[]}],"git":{},"readingTime":{"minutes":39.07,"words":11722},"filePathRelative":"programming/pwsh/scripts-for-files-folders.md","excerpt":"\\n\\n<hr>\\n<h2></h2>\\n"}');export{ro as comp,uo as data};
