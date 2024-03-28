import{_ as b}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as v,c as h,b as s,t as g,a as l,w as e,n as p,g as u,e as n}from"./app-B2dKc-qM.js";const w={},f={id:"frontmatter-title-관련",tabindex:"-1"},S={class:"header-anchor",href:"#frontmatter-title-관련"},P={class:"table-of-contents"},_=s("hr",null,null,-1),$={id:"introduce-powershell-ps1",tabindex:"-1"},C={class:"header-anchor",href:"#introduce-powershell-ps1"},A=s("code",null,"introduce-powershell.ps1",-1),I=s("p",null,"This PowerShell script introduces PowerShell to new users.",-1),E=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("introduce-powershell"),s("span",{class:"token punctuation"},"."),n("ps1 "),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`
    This script supports the common parameters: Verbose`),s("span",{class:"token punctuation"},","),n(" Debug"),s("span",{class:"token punctuation"},","),n(" ErrorAction"),s("span",{class:"token punctuation"},","),n(" ErrorVariable"),s("span",{class:"token punctuation"},","),n(" WarningAction"),s("span",{class:"token punctuation"},","),n(` 
    WarningVariable`),s("span",{class:"token punctuation"},","),n(" OutBuffer"),s("span",{class:"token punctuation"},","),n(" PipelineVariable"),s("span",{class:"token punctuation"},","),n(" and OutVariable"),s("span",{class:"token punctuation"},"."),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),y=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("introduce-powershell"),s("span",{class:"token punctuation"},"."),n(`ps1

`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),x=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token comment"},`<#
.SYNOPSIS
	Introduces PowerShell to new users
.DESCRIPTION
	This PowerShell script introduces PowerShell to new users.
.EXAMPLE
	PS> ./introduce-powershell.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),n(`

`),s("span",{class:"token keyword"},"try"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token function"},"Clear-Host"),n(`
	`),s("span",{class:"token string"},'""'),n(`
	& `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('/write-typewriter.ps1"')]),n(),s("span",{class:"token string"},'" There is one shell to rule them all:"'),n(` 200
	`),s("span",{class:"token string"},'""'),n(`
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},'"  _____                       _____ _          _ _ "'),n(),s("span",{class:"token operator"},"-"),n(`foregroundColor blue
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},'" |  __ \\                     / ____| |        | | |"'),n(),s("span",{class:"token operator"},"-"),n(`foregroundColor blue
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},'" | |__) |____      _____ _ _| (___ | |__   ___| | |"'),n(),s("span",{class:"token operator"},"-"),n(`foregroundColor blue
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},`" |  ___/ _ \\ \\ /\\ / / _ \\ '__\\___ \\| '_ \\ / _ \\ | |"`),n(),s("span",{class:"token operator"},"-"),n(`foregroundColor blue
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},'" | |  | (_) \\ V  V /  __/ |  ____) | | | |  __/ | |"'),n(),s("span",{class:"token operator"},"-"),n(`foregroundColor blue
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},'" |_|   \\___/ \\_/\\_/ \\___|_| |_____/|_| |_|\\___|_|_|"'),n(),s("span",{class:"token operator"},"-"),n(`foregroundColor blue
	`),s("span",{class:"token string"},'""'),n(`
	`),s("span",{class:"token string"},'""'),n(`
	`),s("span",{class:"token variable"},"$Version"),n(" = "),s("span",{class:"token variable"},"$PSVersionTable"),s("span",{class:"token punctuation"},"."),n(`PSVersion
	`),s("span",{class:"token variable"},"$Edition"),n(" = "),s("span",{class:"token variable"},"$PSVersionTable"),s("span",{class:"token punctuation"},"."),n(`PSEdition
	`),s("span",{class:"token variable"},"$NumModules"),n(" = "),s("span",{class:"token punctuation"},"("),s("span",{class:"token function"},"Get-Module"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),n(`Count
	`),s("span",{class:"token variable"},"$NumAliases"),n(" = "),s("span",{class:"token punctuation"},"("),s("span",{class:"token function"},"Get-Alias"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),n(`Count
	`),s("span",{class:"token variable"},"$Details"),n(" = "),s("span",{class:"token string"},[n('"PowerShell '),s("span",{class:"token variable"},"$Version"),n(" ("),s("span",{class:"token variable"},"$Edition"),n(" edition) with "),s("span",{class:"token variable"},"$NumModules"),n(" modules and "),s("span",{class:"token variable"},"$NumAliases"),n(' aliases."')]),n(`
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},'" 🔷 "'),n(),s("span",{class:"token operator"},"-"),n(`noNewline
	& `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('/write-typewriter.ps1"')]),n(),s("span",{class:"token string"},[n('"Welcome to '),s("span",{class:"token variable"},"$Details"),n('"')]),n(` 25
	`),s("span",{class:"token string"},'""'),n(`
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},'" 🔷 "'),n(),s("span",{class:"token operator"},"-"),n(`noNewline
	& `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('/write-typewriter.ps1"')]),n(),s("span",{class:"token string"},`"PowerShell is open-source and free! It's available for Linux, Mac OS and Windows."`),n(` 25
	`),s("span",{class:"token string"},'""'),n(`
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},'" 🔷 "'),n(),s("span",{class:"token operator"},"-"),n(`noNewline
	& `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('/write-typewriter.ps1"')]),n(),s("span",{class:"token string"},'"Curious? Take a look under the hood at: https://github.com/PowerShell/PowerShell"'),n(` 25
	`),s("span",{class:"token string"},'""'),n(`
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},'" 🔷 "'),n(),s("span",{class:"token operator"},"-"),n(`noNewline
	& `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('/write-typewriter.ps1"')]),n(),s("span",{class:"token string"},'"Want to learn PowerShell? See the tutorials at: https://www.guru99.com/powershell-tutorial.html"'),n(` 25
	`),s("span",{class:"token string"},'""'),n(`
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},'" 🔷 "'),n(),s("span",{class:"token operator"},"-"),n(`noNewline
	& `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('/write-typewriter.ps1"')]),n(),s("span",{class:"token string"},'"Need docs? See the official documentation at: https://docs.microsoft.com/en-us/powershell"'),n(` 25
	`),s("span",{class:"token string"},'""'),n(`
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},'" 🔷 "'),n(),s("span",{class:"token operator"},"-"),n(`noNewline
	& `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('/write-typewriter.ps1"')]),n(),s("span",{class:"token string"},'"Want sample scripts? See the Mega Collection of PowerShell scripts at: https://github.com/fleschutz/PowerShell"'),n(` 25
	`),s("span",{class:"token string"},'""'),n(`
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},'" 🔷 "'),n(),s("span",{class:"token operator"},"-"),n(`noNewline
	& `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('/write-typewriter.ps1"')]),n(),s("span",{class:"token string"},'"Want to donate? Great, just follow this link: https://www.paypal.com/paypalme/Fleschutz"'),n(` 25
	`),s("span",{class:"token string"},'""'),n(`
	`),s("span",{class:"token function"},"Write-Host"),n(),s("span",{class:"token string"},'" 🔷 "'),n(),s("span",{class:"token operator"},"-"),n(`noNewline
	& `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('/write-typewriter.ps1"')]),n(),s("span",{class:"token string"},'"Any questions? See the PowerShell FAQ at: https://github.com/fleschutz/PowerShell/blob/master/Docs/FAQ.md"'),n(` 25
	`),s("span",{class:"token string"},'""'),n(`
	& `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('/write-typewriter.ps1"')]),n(),s("span",{class:"token string"},'"    (use <Ctrl> + <Click> to open the links above in your browser)"'),n(` 100
	`),s("span",{class:"token keyword"},"exit"),n(" 0 "),s("span",{class:"token comment"},"# success"),n(`
`),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"catch"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token string"},[n('"⚠️ Error in line '),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$_"),s("span",{class:"token punctuation"},"."),n("InvocationInfo"),s("span",{class:"token punctuation"},"."),n("ScriptLineNumber"),s("span",{class:"token punctuation"},")")]),n(": "),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$Error"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	`),s("span",{class:"token keyword"},"exit"),n(` 1
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),V=s("hr",null,null,-1),T={id:"list-aliases-ps1",tabindex:"-1"},L={class:"header-anchor",href:"#list-aliases-ps1"},N=s("code",null,"list-aliases.ps1",-1),O=s("p",null,"This PowerShell scripts lists all PowerShell aliases.",-1),M=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("list-aliases"),s("span",{class:"token punctuation"},"."),n("ps1 "),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`
    This script supports the common parameters: Verbose`),s("span",{class:"token punctuation"},","),n(" Debug"),s("span",{class:"token punctuation"},","),n(" ErrorAction"),s("span",{class:"token punctuation"},","),n(" ErrorVariable"),s("span",{class:"token punctuation"},","),n(" WarningAction"),s("span",{class:"token punctuation"},","),n(` 
    WarningVariable`),s("span",{class:"token punctuation"},","),n(" OutBuffer"),s("span",{class:"token punctuation"},","),n(" PipelineVariable"),s("span",{class:"token punctuation"},","),n(" and OutVariable"),s("span",{class:"token punctuation"},"."),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),D=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("list-aliases"),s("span",{class:"token punctuation"},"."),n(`ps1
`),s("span",{class:"token comment"},"# "),n(`
`),s("span",{class:"token comment"},"# "),n(`
`),s("span",{class:"token comment"},"# "),n(`
`),s("span",{class:"token comment"},"# CommandType     Name                                               Version    Source"),n(`
`),s("span",{class:"token comment"},"# -----------     ----                                               -------    ------"),n(`
`),s("span",{class:"token comment"},"# Alias           CFS -> ConvertFrom-String                          3.1.0.0    Microsoft.PowerShell.Utility"),n(`
`),s("span",{class:"token comment"},"# ..."),n(`
`),s("span",{class:"token comment"},"# "),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),R=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all PowerShell aliases
.DESCRIPTION
	This PowerShell scripts lists all PowerShell aliases.
.EXAMPLE
	PS> ./list-aliases.ps1

	CommandType     Name                                               Version    Source
	-----------     ----                                               -------    ------
	Alias           CFS -> ConvertFrom-String                          3.1.0.0    Microsoft.PowerShell.Utility
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),n(`

`),s("span",{class:"token keyword"},"try"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token function"},"Get-Alias"),n(`
	`),s("span",{class:"token keyword"},"exit"),n(" 0 "),s("span",{class:"token comment"},"# success"),n(`
`),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"catch"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token string"},[n('"⚠️ Error in line '),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$_"),s("span",{class:"token punctuation"},"."),n("InvocationInfo"),s("span",{class:"token punctuation"},"."),n("ScriptLineNumber"),s("span",{class:"token punctuation"},")")]),n(": "),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$Error"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	`),s("span",{class:"token keyword"},"exit"),n(` 1
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),W=s("hr",null,null,-1),F={id:"list-automatic-variables-ps1",tabindex:"-1"},z={class:"header-anchor",href:"#list-automatic-variables-ps1"},H=s("code",null,"list-automatic-variables.ps1",-1),B=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("list-automatic-variables"),s("span",{class:"token punctuation"},"."),n("ps1 "),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`
    This script supports the common parameters: Verbose`),s("span",{class:"token punctuation"},","),n(" Debug"),s("span",{class:"token punctuation"},","),n(" ErrorAction"),s("span",{class:"token punctuation"},","),n(" ErrorVariable"),s("span",{class:"token punctuation"},","),n(" WarningAction"),s("span",{class:"token punctuation"},","),n(` 
    WarningVariable`),s("span",{class:"token punctuation"},","),n(" OutBuffer"),s("span",{class:"token punctuation"},","),n(" PipelineVariable"),s("span",{class:"token punctuation"},","),n(" and OutVariable"),s("span",{class:"token punctuation"},"."),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),U=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all automatic variables of PowerShell
.DESCRIPTION
	This PowerShell script lists all automatic variables of PowerShell.
.EXAMPLE
	PS> ./list-automatic-variables.ps1

	Variable                  Content
	--------                  -------
	$HOME                     C:\\Users\\Markus
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),n(`

`),s("span",{class:"token keyword"},"function"),n(" AddItem "),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token keyword"},"param"),s("span",{class:"token punctuation"},"("),s("span",{class:"token namespace"},"[string]"),s("span",{class:"token variable"},"$Variable"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token namespace"},"[string]"),s("span",{class:"token variable"},"$Content"),s("span",{class:"token punctuation"},")"),n(`
	`),s("span",{class:"token function"},"new-object"),n(" PSObject "),s("span",{class:"token operator"},"-"),n("property @"),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token string"},"'Variable'"),n(" = "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Variable"),n('"')]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token string"},"'Content'"),n(" = "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Content"),n('"')]),n(),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(" ListAutomaticVariables "),s("span",{class:"token punctuation"},"{"),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$args"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$args"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$ConsoleFileName"),n('"')]),n("		"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ConsoleFileName"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$Error"),n('[0]"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$Error"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$Event"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Event"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$EventArgs"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$EventArgs"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$EventSubscriber"),n('"')]),n("		"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$EventSubscriber"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$ExecutionContext"),n('"')]),n("		"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ExecutionContext"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token boolean"},"$false"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token boolean"},"$false"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$foreach"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$foreach"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$HOME"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$HOME"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$input"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$input"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$IsCoreCLR"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$IsCoreCLR"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$IsLinux"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$IsLinux"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$IsMacOS"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$IsMacOS"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$IsWindows"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$IsWindows"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$LastExitCode"),n('"')]),n("		"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$LastExitCode"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$Matches"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Matches"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$MyInvocation"),n('.PSScriptRoot"')]),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$MyInvocation"),s("span",{class:"token punctuation"},"."),n("PSScriptRoot"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$MyInvocation"),n('.PSCommandPath"')]),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$MyInvocation"),s("span",{class:"token punctuation"},"."),n("PSCommandPath"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$NestedPromptLevel"),n('"')]),n("		"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$NestedPromptLevel"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$null"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$null"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PID"),n('"')]),n("				"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PID"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PROFILE"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PROFILE"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSBoundParameters"),n('"')]),n("		"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSBoundParameters"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSCmdlet"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSCmdlet"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSCommandPath"),n('"')]),n("		"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSCommandPath"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSCulture"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSCulture"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSDebugContext"),n('"')]),n("		"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSDebugContext"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSHOME"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSHOME"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSItem"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSItem"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSScriptRoot"),n('"')]),n("		"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSSenderInfo"),n('"')]),n("		"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSSenderInfo"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSUICulture"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSUICulture"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSVersionTable"),n('.PSVersion"')]),n("	"),s("span",{class:"token string"},[n('"'),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$PSVersionTable"),s("span",{class:"token punctuation"},"."),n("PSVersion"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSVersionTable"),n('.PSEdition"')]),n("	"),s("span",{class:"token string"},[n('"'),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$PSVersionTable"),s("span",{class:"token punctuation"},"."),n("PSEdition"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSVersionTable"),n('.GitCommitId"')]),n("	"),s("span",{class:"token string"},[n('"'),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$PSVersionTable"),s("span",{class:"token punctuation"},"."),n("GitCommitId"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSVersionTable"),n('.OS"')]),n("		"),s("span",{class:"token string"},[n('"'),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$PSVersionTable"),s("span",{class:"token punctuation"},"."),n("OS"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSVersionTable"),n('.Platform"')]),n("	"),s("span",{class:"token string"},[n('"'),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$PSVersionTable"),s("span",{class:"token punctuation"},"."),n("Platform"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSVersionTable"),n('.PSCompatibleVersions"')]),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$PSVersionTable"),s("span",{class:"token punctuation"},"."),n("PSCompatibleVersions"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSVersionTable"),n('.PSRemotingProtocolVersion"')]),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$PSVersionTable"),s("span",{class:"token punctuation"},"."),n("PSRemotingProtocolVersion"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSVersionTable"),n('.SerializationVersion"')]),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$PSVersionTable"),s("span",{class:"token punctuation"},"."),n("SerializationVersion"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PSVersionTable"),n('.WSManStackVersion"')]),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$PSVersionTable"),s("span",{class:"token punctuation"},"."),n("WSManStackVersion"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$PWD"),n('"')]),n("				"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PWD"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$Sender"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Sender"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$ShellId"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$ShellId"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$StackTrace"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$StackTrace"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$switch"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$switch"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$this"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$this"),n('"')]),n(`
	AddItem `),s("span",{class:"token string"},[n('"`'),s("span",{class:"token boolean"},"$true"),n('"')]),n("			"),s("span",{class:"token string"},[n('"'),s("span",{class:"token boolean"},"$true"),n('"')]),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"try"),n(),s("span",{class:"token punctuation"},"{"),n(`
	ListAutomaticVariables `),s("span",{class:"token punctuation"},"|"),n(),s("span",{class:"token function"},"format-table"),n(),s("span",{class:"token operator"},"-"),n("property Variable"),s("span",{class:"token punctuation"},","),n(`Content
	`),s("span",{class:"token keyword"},"exit"),n(" 0 "),s("span",{class:"token comment"},"# success"),n(`
`),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"catch"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token string"},[n('"⚠️ Error in line '),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$_"),s("span",{class:"token punctuation"},"."),n("InvocationInfo"),s("span",{class:"token punctuation"},"."),n("ScriptLineNumber"),s("span",{class:"token punctuation"},")")]),n(": "),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$Error"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	`),s("span",{class:"token keyword"},"exit"),n(` 1
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),K=s("hr",null,null,-1),G={id:"list-cheat-sheet-ps1",tabindex:"-1"},X={class:"header-anchor",href:"#list-cheat-sheet-ps1"},Y=s("code",null,"list-cheat-sheet.ps1",-1),j=s("p",null,"This PowerShell script lists the PowerShell cheat sheet.",-1),q=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("list-cheat-sheet"),s("span",{class:"token punctuation"},"."),n("ps1 "),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`
    This script supports the common parameters: Verbose`),s("span",{class:"token punctuation"},","),n(" Debug"),s("span",{class:"token punctuation"},","),n(" ErrorAction"),s("span",{class:"token punctuation"},","),n(" ErrorVariable"),s("span",{class:"token punctuation"},","),n(" WarningAction"),s("span",{class:"token punctuation"},","),n(` 
    WarningVariable`),s("span",{class:"token punctuation"},","),n(" OutBuffer"),s("span",{class:"token punctuation"},","),n(" PipelineVariable"),s("span",{class:"token punctuation"},","),n(" and OutVariable"),s("span",{class:"token punctuation"},"."),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Q=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("list-cheat-sheet"),s("span",{class:"token punctuation"},"."),n(`ps1
`),s("span",{class:"token comment"},"# "),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),J=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the PowerShell cheat sheet
.DESCRIPTION
	This PowerShell script lists the PowerShell cheat sheet.
.EXAMPLE
	PS> ./list-cheat-sheet.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),n(`

`),s("span",{class:"token string"},'"PowerShell Cheat Sheet"'),n(`
`),s("span",{class:"token string"},'"======================"'),n(`
`),s("span",{class:"token string"},'""'),n(`
`),s("span",{class:"token string"},'"Basic Commands"'),n(`
`),s("span",{class:"token string"},`"
"`),n("         Cmdlet : Commands built into shell written in "),s("span",{class:"token punctuation"},"."),n("NET"),s("span",{class:"token string"},`"
"`),n("      Functions : Commands written in PowerShell language"),s("span",{class:"token string"},`"
"`),n("      Parameter : Argument to a Cmdlet/"),s("span",{class:"token keyword"},"Function"),s("span",{class:"token operator"},"/"),n("Script"),s("span",{class:"token string"},`"
"`),n("          Alias : Shortcut "),s("span",{class:"token keyword"},"for"),n(" a Cmdlet or "),s("span",{class:"token keyword"},"Function"),s("span",{class:"token string"},`"
"`),n("        Scripts : Text files with "),s("span",{class:"token punctuation"},"."),n("ps1 extension"),s("span",{class:"token string"},`"
"`),n("   Applications : Existing windows programs"),s("span",{class:"token string"},`"
"`),n("      Pipelines : Pass objects "),s("span",{class:"token function"},"Get-process"),n(" word "),s("span",{class:"token punctuation"},"|"),n(),s("span",{class:"token function"},"Stop-Process"),s("span",{class:"token string"},`"
"`),n("         Ctrl+c : Interrupt current command"),s("span",{class:"token string"},`"
"`),n("     Left/right : Navigate editing cursor"),s("span",{class:"token string"},`"
"`),n("Ctrl+left/right : Navigate a word at a time"),s("span",{class:"token string"},`"
"`),n("     Home "),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token keyword"},"End"),n(" : "),s("span",{class:"token keyword"},"End"),n(),s("span",{class:"token function"},"Move"),n(" to "),s("span",{class:"token function"},"start"),n(),s("span",{class:"token operator"},"/"),n(),s("span",{class:"token keyword"},"end"),n(" of line"),s("span",{class:"token string"},`"
"`),n("      Up "),s("span",{class:"token operator"},"/"),n(" down : "),s("span",{class:"token function"},"Move"),n(" up and down through history"),s("span",{class:"token string"},`"
"`),n("         Insert : Toggles between insert/overwrite mode"),s("span",{class:"token string"},`"
"`),n("             F7 : Command history in a window"),s("span",{class:"token string"},`"
"`),n("Tab "),s("span",{class:"token operator"},"/"),n(" Shift-Tab : Command line completion"),s("span",{class:"token string"},`"
"`),s("span",{class:"token string"},`"
"`),n("Variables"),s("span",{class:"token string"},`"
"`),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"-"),s("span",{class:"token string"},`"
"`),n("             `"),s("span",{class:"token variable"},"$var"),n(" = `"),s("span",{class:"token string"},'"string`" : Assign variable"'),n(`
`),s("span",{class:"token string"},[n('"`'),s("span",{class:"token variable"},"$a"),n(",`"),s("span",{class:"token variable"},"$b"),n(" = 0 or `"),s("span",{class:"token variable"},"$a"),n(",`"),s("span",{class:"token variable"},"$b"),n(` = 'a','b' : Assign multiple variables"`)]),n(`
`),s("span",{class:"token string"},[n('"               `'),s("span",{class:"token variable"},"$a"),n(",`"),s("span",{class:"token variable"},"$b"),n(" = `"),s("span",{class:"token variable"},"$b"),n(",`"),s("span",{class:"token variable"},"$a"),n(' : Flip variables"')]),n(`
`),s("span",{class:"token string"},[n('"                 `'),s("span",{class:"token variable"},"$var"),n('=[int]5 : Strongly typed variable"')]),n(`
`),s("span",{class:"token string"},'""'),n(`
`),s("span",{class:"token keyword"},"exit"),n(" 0 "),s("span",{class:"token comment"},"# success"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Z=s("hr",null,null,-1),ss={id:"list-cmdlets-ps1",tabindex:"-1"},ns={class:"header-anchor",href:"#list-cmdlets-ps1"},es=s("code",null,"list-cmdlets.ps1",-1),as=s("p",null,"This PowerShell script lists all PowerShell cmdlets.",-1),ts=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("list-cmdlets"),s("span",{class:"token punctuation"},"."),n("ps1 "),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`
    This script supports the common parameters: Verbose`),s("span",{class:"token punctuation"},","),n(" Debug"),s("span",{class:"token punctuation"},","),n(" ErrorAction"),s("span",{class:"token punctuation"},","),n(" ErrorVariable"),s("span",{class:"token punctuation"},","),n(" WarningAction"),s("span",{class:"token punctuation"},","),n(` 
    WarningVariable`),s("span",{class:"token punctuation"},","),n(" OutBuffer"),s("span",{class:"token punctuation"},","),n(" PipelineVariable"),s("span",{class:"token punctuation"},","),n(" and OutVariable"),s("span",{class:"token punctuation"},"."),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ls=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("list-cmdlets"),s("span",{class:"token punctuation"},"."),n(`ps1



CommandType     Name                                  Version    Source
`),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"-"),n("     "),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),n("                                  "),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"-"),n("    "),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),n(`
`),s("span",{class:"token keyword"},"Function"),n("        "),s("span",{class:"token function"},"Add-BCDataCacheExtension"),n("              1"),s("span",{class:"token punctuation"},"."),n("0"),s("span",{class:"token punctuation"},"."),n("0"),s("span",{class:"token punctuation"},"."),n(`0    BranchCache
`),s("span",{class:"token keyword"},"Function"),n("        "),s("span",{class:"token function"},"Add-BitLockerKeyProtector"),n("             1"),s("span",{class:"token punctuation"},"."),n("0"),s("span",{class:"token punctuation"},"."),n("0"),s("span",{class:"token punctuation"},"."),n(`0    BitLocker
`),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},"."),n(`

`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),is=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all PowerShell cmdlets
.DESCRIPTION
	This PowerShell script lists all PowerShell cmdlets.
.EXAMPLE
	PS> ./list-cmdlets.ps1

	CommandType     Name                                  Version    Source
	-----------     ----                                  -------    ------
	Function        Add-BCDataCacheExtension              1.0.0.0    BranchCache
	Function        Add-BitLockerKeyProtector             1.0.0.0    BitLocker
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),n(`

`),s("span",{class:"token keyword"},"try"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token function"},"Get-Command"),n(),s("span",{class:"token operator"},"-"),n("Command-"),s("span",{class:"token function"},"Type"),n(` cmdlet
	`),s("span",{class:"token keyword"},"exit"),n(" 0 "),s("span",{class:"token comment"},"# success"),n(`
`),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"catch"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token string"},[n('"⚠️ Error in line '),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$_"),s("span",{class:"token punctuation"},"."),n("InvocationInfo"),s("span",{class:"token punctuation"},"."),n("ScriptLineNumber"),s("span",{class:"token punctuation"},")")]),n(": "),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$Error"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	`),s("span",{class:"token keyword"},"exit"),n(` 1
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),os=s("hr",null,null,-1),cs={id:"list-console-colors-ps1",tabindex:"-1"},rs={class:"header-anchor",href:"#list-console-colors-ps1"},ps=s("code",null,"list-console-colors.ps1",-1),us=s("p",null,"This PowerShell script lists all available console colors.",-1),ds=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("list-console-colors"),s("span",{class:"token punctuation"},"."),n("ps1 "),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`
    This script supports the common parameters: Verbose`),s("span",{class:"token punctuation"},","),n(" Debug"),s("span",{class:"token punctuation"},","),n(" ErrorAction"),s("span",{class:"token punctuation"},","),n(" ErrorVariable"),s("span",{class:"token punctuation"},","),n(" WarningAction"),s("span",{class:"token punctuation"},","),n(` 
    WarningVariable`),s("span",{class:"token punctuation"},","),n(" OutBuffer"),s("span",{class:"token punctuation"},","),n(" PipelineVariable"),s("span",{class:"token punctuation"},","),n(" and OutVariable"),s("span",{class:"token punctuation"},"."),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ks=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("list-console-colors"),s("span",{class:"token punctuation"},"."),n(`ps1



Color     As Foreground     As Background
`),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"-"),n("     "),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"-"),n("     "),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"--"),s("span",{class:"token operator"},"-"),n(`
`),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},"."),s("span",{class:"token punctuation"},"."),n(`

`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ms=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all console colors
.DESCRIPTION
	This PowerShell script lists all available console colors.
.EXAMPLE
	PS> ./list-console-colors.ps1

	Color     As Foreground     As Background
	-----     -------------     -------------
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),n(`

`),s("span",{class:"token keyword"},"try"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token variable"},"$Colors"),n(" = "),s("span",{class:"token namespace"},"[Enum]"),n("::GetValues"),s("span",{class:"token punctuation"},"("),s("span",{class:"token namespace"},"[ConsoleColor]"),s("span",{class:"token punctuation"},")"),n(`
	`),s("span",{class:"token string"},'""'),n(`
	`),s("span",{class:"token string"},'"Color          As Foreground  As Background"'),n(`
	`),s("span",{class:"token string"},'"-----          -------------  -------------"'),n(`
	`),s("span",{class:"token keyword"},"foreach"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$Color"),n(" in "),s("span",{class:"token variable"},"$Colors"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
		`),s("span",{class:"token variable"},"$Color"),n(" = "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Color"),n('              "')]),n(`
		`),s("span",{class:"token variable"},"$Color"),n(" = "),s("span",{class:"token variable"},"$Color"),s("span",{class:"token punctuation"},"."),n("substring"),s("span",{class:"token punctuation"},"("),n("0"),s("span",{class:"token punctuation"},","),n(" 15"),s("span",{class:"token punctuation"},")"),n(`
		`),s("span",{class:"token function"},"write-host"),n(),s("span",{class:"token operator"},"-"),n("noNewline "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Color"),n('"')]),n(`
		`),s("span",{class:"token function"},"write-host"),n(),s("span",{class:"token operator"},"-"),n("noNewline "),s("span",{class:"token operator"},"-"),n("foregroundcolor "),s("span",{class:"token variable"},"$Color"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Color"),n('"')]),n(`
		`),s("span",{class:"token function"},"write-host"),n(),s("span",{class:"token operator"},"-"),n("noNewline "),s("span",{class:"token operator"},"-"),n("backgroundcolor "),s("span",{class:"token variable"},"$Color"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Color"),n('"')]),n(`
		`),s("span",{class:"token function"},"write-host"),n(),s("span",{class:"token string"},'""'),n(`
	`),s("span",{class:"token punctuation"},"}"),n(`
	`),s("span",{class:"token keyword"},"exit"),n(" 0 "),s("span",{class:"token comment"},"# success"),n(`
`),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"catch"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token string"},[n('"⚠️ Error in line '),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$_"),s("span",{class:"token punctuation"},"."),n("InvocationInfo"),s("span",{class:"token punctuation"},"."),n("ScriptLineNumber"),s("span",{class:"token punctuation"},")")]),n(": "),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$Error"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	`),s("span",{class:"token keyword"},"exit"),n(` 1
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),bs=s("hr",null,null,-1),vs={id:"list-modules-ps1",tabindex:"-1"},hs={class:"header-anchor",href:"#list-modules-ps1"},gs=s("code",null,"list-modules.ps1",-1),ws=s("p",null,"This PowerShell script lists the installed PowerShell modules.",-1),fs=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("list-modules"),s("span",{class:"token punctuation"},"."),n("ps1 "),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`
    This script supports the common parameters: Verbose`),s("span",{class:"token punctuation"},","),n(" Debug"),s("span",{class:"token punctuation"},","),n(" ErrorAction"),s("span",{class:"token punctuation"},","),n(" ErrorVariable"),s("span",{class:"token punctuation"},","),n(" WarningAction"),s("span",{class:"token punctuation"},","),n(` 
    WarningVariable`),s("span",{class:"token punctuation"},","),n(" OutBuffer"),s("span",{class:"token punctuation"},","),n(" PipelineVariable"),s("span",{class:"token punctuation"},","),n(" and OutVariable"),s("span",{class:"token punctuation"},"."),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Ss=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("list-modules"),s("span",{class:"token punctuation"},"."),n(`ps1



`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Ps=s("h2",{id:"tab-name-version-moduletype-exportedcommands",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tab-name-version-moduletype-exportedcommands"},[s("span",null,"@tab Name Version ModuleType ExportedCommands")])],-1),_s=s("p",null,"Microsoft.PowerShell.Management 3.1.0.0 Manifest {Add-Computer, Add-Content, Checkpoint-Computer...} ...",-1),$s=s("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[s("pre",{class:"language-text"},[s("code",null,`
@tab Script Content

\`\`\`powershell
<#
.SYNOPSIS
	Lists PowerShell modules
.DESCRIPTION
	This PowerShell script lists the installed PowerShell modules.
.EXAMPLE
	PS> ./list-modules.ps1

	@tab Name                             Version  ModuleType  ExportedCommands
	--
	Microsoft.PowerShell.Management  3.1.0.0  Manifest    {Add-Computer, Add-Content, Checkpoint-Computer...}
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>

try {
	Get-Module | Format-Table -property Name,Version,ModuleType,ExportedCommands
	exit 0 # success
} catch {
	"⚠️ Error in line $($_.InvocationInfo.ScriptLineNumber): $($Error[0])"
	exit 1
}
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Cs=s("hr",null,null,-1),As={id:"list-profiles-ps1",tabindex:"-1"},Is={class:"header-anchor",href:"#list-profiles-ps1"},Es=s("code",null,"list-profiles.ps1",-1),ys=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("list-profiles"),s("span",{class:"token punctuation"},"."),n("ps1 "),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`
    This script supports the common parameters: Verbose`),s("span",{class:"token punctuation"},","),n(" Debug"),s("span",{class:"token punctuation"},","),n(" ErrorAction"),s("span",{class:"token punctuation"},","),n(" ErrorVariable"),s("span",{class:"token punctuation"},","),n(" WarningAction"),s("span",{class:"token punctuation"},","),n(` 
    WarningVariable`),s("span",{class:"token punctuation"},","),n(" OutBuffer"),s("span",{class:"token punctuation"},","),n(" PipelineVariable"),s("span",{class:"token punctuation"},","),n(" and OutVariable"),s("span",{class:"token punctuation"},"."),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),xs=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the user's PowerShell profiles
.DESCRIPTION
	This PowerShell script lists the user's PowerShell profiles.
.EXAMPLE
	PS> ./list-profiles.ps1
	
	Level Profile                Location                                                         Existent
	----- -------                --------                                                         --------
	1     AllUsersAllHosts       /opt/PowerShell/profile.ps1                                      no
	2     AllUsersCurrentHost    /opt/PowerShell/Microsoft.PowerShell_profile.ps1                 no
	3     CurrentUserAllHosts    /home/markus/.config/powershell/profile.ps1                      no
	4     CurrentUserCurrentHost /home/markus/.config/powershell/Microsoft.PowerShell_profile.ps1 yes
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),n(`

`),s("span",{class:"token keyword"},"function"),n(" ListProfile "),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token keyword"},"param"),s("span",{class:"token punctuation"},"("),s("span",{class:"token namespace"},"[int]"),s("span",{class:"token variable"},"$Level"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token namespace"},"[string]"),s("span",{class:"token variable"},"$Profile"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token namespace"},"[string]"),s("span",{class:"token variable"},"$Location"),s("span",{class:"token punctuation"},")"),n(`
	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token function"},"test-path"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Location"),n('"')]),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token variable"},"$Existent"),n(" = "),s("span",{class:"token string"},'"yes"'),n(),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"else"),n(),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token variable"},"$Existent"),n(" = "),s("span",{class:"token string"},'"no"'),n(),s("span",{class:"token punctuation"},"}"),n(`
	`),s("span",{class:"token function"},"New-Object"),n(" PSObject "),s("span",{class:"token operator"},"-"),n("Property @"),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token string"},"'Level'"),n("="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Level"),n('"')]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token string"},"'Profile'"),n("="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Profile"),n('"')]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token string"},"'Location'"),n("="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Location"),n('"')]),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token string"},"'Existent'"),n("="),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$Existent"),n('"')]),n("	"),s("span",{class:"token punctuation"},"}"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"function"),n(" ListProfiles "),s("span",{class:"token punctuation"},"{"),n(` 
	ListProfile 1 `),s("span",{class:"token string"},'"AllUsersAllHosts"'),n("       "),s("span",{class:"token variable"},"$PROFILE"),s("span",{class:"token punctuation"},"."),n(`AllUsersAllHosts
	ListProfile 2 `),s("span",{class:"token string"},'"AllUsersCurrentHost"'),n("    "),s("span",{class:"token variable"},"$PROFILE"),s("span",{class:"token punctuation"},"."),n(`AllUsersCurrentHost
	ListProfile 3 `),s("span",{class:"token string"},'"CurrentUserAllHosts"'),n("    "),s("span",{class:"token variable"},"$PROFILE"),s("span",{class:"token punctuation"},"."),n(`CurrentUserAllHosts
	ListProfile 4 `),s("span",{class:"token string"},'"CurrentUserCurrentHost"'),n(),s("span",{class:"token variable"},"$PROFILE"),s("span",{class:"token punctuation"},"."),n(`CurrentUserCurrentHost
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"try"),n(),s("span",{class:"token punctuation"},"{"),n(`
	ListProfiles `),s("span",{class:"token punctuation"},"|"),n(),s("span",{class:"token function"},"format-table"),n(),s("span",{class:"token operator"},"-"),n("property Level"),s("span",{class:"token punctuation"},","),n("Profile"),s("span",{class:"token punctuation"},","),n("Location"),s("span",{class:"token punctuation"},","),n(`Existent
	`),s("span",{class:"token keyword"},"exit"),n(" 0 "),s("span",{class:"token comment"},"# success"),n(`
`),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"catch"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token string"},[n('"⚠️ Error in line '),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$_"),s("span",{class:"token punctuation"},"."),n("InvocationInfo"),s("span",{class:"token punctuation"},"."),n("ScriptLineNumber"),s("span",{class:"token punctuation"},")")]),n(": "),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$Error"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	`),s("span",{class:"token keyword"},"exit"),n(` 1
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Vs=s("hr",null,null,-1),Ts={id:"list-scripts-ps1",tabindex:"-1"},Ls={class:"header-anchor",href:"#list-scripts-ps1"},Ns=s("code",null,"list-scripts.ps1",-1),Os=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),n("list-scripts"),s("span",{class:"token punctuation"},"."),n("ps1 "),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`
    This script supports the common parameters: Verbose`),s("span",{class:"token punctuation"},","),n(" Debug"),s("span",{class:"token punctuation"},","),n(" ErrorAction"),s("span",{class:"token punctuation"},","),n(" ErrorVariable"),s("span",{class:"token punctuation"},","),n(" WarningAction"),s("span",{class:"token punctuation"},","),n(` 
    WarningVariable`),s("span",{class:"token punctuation"},","),n(" OutBuffer"),s("span",{class:"token punctuation"},","),n(" PipelineVariable"),s("span",{class:"token punctuation"},","),n(" and OutVariable"),s("span",{class:"token punctuation"},"."),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Ms=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all PowerShell scripts
.DESCRIPTION
	This PowerShell script lists all PowerShell scripts in the repository (sorted alphabetically).
.EXAMPLE
	PS> ./list-scripts.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),n(`

`),s("span",{class:"token keyword"},"function"),n(" ListScripts "),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token keyword"},"param"),s("span",{class:"token punctuation"},"("),s("span",{class:"token namespace"},"[string]"),s("span",{class:"token variable"},"$FilePath"),s("span",{class:"token punctuation"},")"),n(`
	`),s("span",{class:"token function"},"Write-Progress"),n(),s("span",{class:"token string"},[n('"⏳Reading '),s("span",{class:"token variable"},"$FilePath"),n('..."')]),n(`
	`),s("span",{class:"token variable"},"$table"),n(" = "),s("span",{class:"token function"},"Import-CSV"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$FilePath"),n('"')]),n(`
	`),s("span",{class:"token namespace"},"[int]"),s("span",{class:"token variable"},"$No"),n(` = 1
	`),s("span",{class:"token keyword"},"foreach"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$row"),n(" in "),s("span",{class:"token variable"},"$table"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(`
		`),s("span",{class:"token function"},"New-Object"),n(" PSObject "),s("span",{class:"token operator"},"-"),n("Property @"),s("span",{class:"token punctuation"},"{"),n(`
			`),s("span",{class:"token string"},"'No'"),n(" = "),s("span",{class:"token variable"},"$No"),s("span",{class:"token operator"},"++"),n(`
			`),s("span",{class:"token string"},"'Script'"),n(" = "),s("span",{class:"token variable"},"$row"),s("span",{class:"token punctuation"},"."),n(`SCRIPT
			`),s("span",{class:"token string"},"'Description'"),n(" = "),s("span",{class:"token variable"},"$row"),s("span",{class:"token punctuation"},"."),n(`DESCRIPTION
		`),s("span",{class:"token punctuation"},"}"),n(`
	`),s("span",{class:"token punctuation"},"}"),n(`
	`),s("span",{class:"token variable"},"$global"),n(":NumScripts = "),s("span",{class:"token variable"},"$Table"),s("span",{class:"token punctuation"},"."),n(`Count
	`),s("span",{class:"token function"},"Write-Progress"),n(),s("span",{class:"token operator"},"-"),n("completed "),s("span",{class:"token string"},'"."'),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token keyword"},"try"),n(),s("span",{class:"token punctuation"},"{"),n(`
	ListScripts `),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('/../Data/scripts.csv"')]),n(),s("span",{class:"token punctuation"},"|"),n(),s("span",{class:"token function"},"Format-Table"),n(),s("span",{class:"token operator"},"-"),n("property No"),s("span",{class:"token punctuation"},","),n("Script"),s("span",{class:"token punctuation"},","),n(`Description
`),s("span",{class:"token comment"},'#	$files = Get-ChildItem -path "./*.ps1" -attributes !Directory'),n(`
`),s("span",{class:"token comment"},"#	foreach ($file in $files) {"),n(`
`),s("span",{class:"token comment"},"#		$help = Get-Help $file -full"),n(`
`),s("span",{class:"token comment"},'#		Write-Output "$($file.Name),$($help.Synopsis),"'),n(`
`),s("span",{class:"token comment"},"#	}"),n(`
	`),s("span",{class:"token keyword"},"exit"),n(" 0 "),s("span",{class:"token comment"},"# success"),n(`
`),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"catch"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token string"},[n('"⚠️ Error in line '),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$_"),s("span",{class:"token punctuation"},"."),n("InvocationInfo"),s("span",{class:"token punctuation"},"."),n("ScriptLineNumber"),s("span",{class:"token punctuation"},")")]),n(": "),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$Error"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	`),s("span",{class:"token keyword"},"exit"),n(` 1
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Ds=s("hr",null,null,-1),Rs={id:"new-script-ps1",tabindex:"-1"},Ws={class:"header-anchor",href:"#new-script-ps1"},Fs=s("code",null,"new-script.ps1",-1),zs=s("code",null,"../Data/template.ps1",-1),Hs=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),s("span",{class:"token function"},"new-script"),s("span",{class:"token punctuation"},"."),n("ps1 "),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"["),s("span",{class:"token operator"},"-"),n("filename"),s("span",{class:"token punctuation"},"]"),n(" <String>"),s("span",{class:"token punctuation"},"]"),n(),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token operator"},"-"),n(`filename <String>
    Specifies the path to the resulting file
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`
    This script supports the common parameters: Verbose`),s("span",{class:"token punctuation"},","),n(" Debug"),s("span",{class:"token punctuation"},","),n(" ErrorAction"),s("span",{class:"token punctuation"},","),n(" ErrorVariable"),s("span",{class:"token punctuation"},","),n(" WarningAction"),s("span",{class:"token punctuation"},","),n(` 
    WarningVariable`),s("span",{class:"token punctuation"},","),n(" OutBuffer"),s("span",{class:"token punctuation"},","),n(" PipelineVariable"),s("span",{class:"token punctuation"},","),n(" and OutVariable"),s("span",{class:"token punctuation"},"."),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Bs=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),s("span",{class:"token function"},"new-script"),n(" myscript"),s("span",{class:"token punctuation"},"."),n(`ps1
✔️ created new PowerShell script: myscript`),s("span",{class:"token punctuation"},"."),n(`ps1

`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Us=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token comment"},`<#
.SYNOPSIS
	Creates a new PowerShell script file
.DESCRIPTION
	This PowerShell script creates a new PowerShell script file (by using template file ../Data/template.ps1).
.PARAMETER filename
	Specifies the path to the resulting file
.EXAMPLE
	PS> ./new-script myscript.ps1
	✔️ created new PowerShell script: myscript.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),n(`

`),s("span",{class:"token keyword"},"param"),s("span",{class:"token punctuation"},"("),s("span",{class:"token namespace"},"[string]"),s("span",{class:"token variable"},"$filename"),n(" = "),s("span",{class:"token string"},'""'),s("span",{class:"token punctuation"},")"),n(`

`),s("span",{class:"token keyword"},"try"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token keyword"},"if"),n(),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$filename"),n(),s("span",{class:"token operator"},"-eq"),n(),s("span",{class:"token string"},'""'),n(),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token variable"},"$filename"),n(" = "),s("span",{class:"token function"},"Read-Host"),n(),s("span",{class:"token string"},'"Enter the new filename"'),n(),s("span",{class:"token punctuation"},"}"),n(`

	`),s("span",{class:"token function"},"Copy-Item"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('/../Data/template.ps1"')]),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$filename"),n('"')]),n(`

	`),s("span",{class:"token string"},[n('"✔️ created new PowerShell script: '),s("span",{class:"token variable"},"$filename"),n('"')]),n(`
	`),s("span",{class:"token keyword"},"exit"),n(" 0 "),s("span",{class:"token comment"},"# success"),n(`
`),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"catch"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token string"},[n('"⚠️ Error in line '),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$_"),s("span",{class:"token punctuation"},"."),n("InvocationInfo"),s("span",{class:"token punctuation"},"."),n("ScriptLineNumber"),s("span",{class:"token punctuation"},")")]),n(": "),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$Error"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	`),s("span",{class:"token keyword"},"exit"),n(` 1
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Ks=s("hr",null,null,-1),Gs={id:"set-profile-ps1",tabindex:"-1"},Xs={class:"header-anchor",href:"#set-profile-ps1"},Ys=s("code",null,"set-profile.ps1",-1),js=s("p",null,"This PowerShell script sets the PowerShell profile for the current user.",-1),qs=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),s("span",{class:"token function"},"set-profile"),s("span",{class:"token punctuation"},"."),n("ps1 "),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`

`),s("span",{class:"token punctuation"},"["),n("<CommonParameters>"),s("span",{class:"token punctuation"},"]"),n(`
    This script supports the common parameters: Verbose`),s("span",{class:"token punctuation"},","),n(" Debug"),s("span",{class:"token punctuation"},","),n(" ErrorAction"),s("span",{class:"token punctuation"},","),n(" ErrorVariable"),s("span",{class:"token punctuation"},","),n(" WarningAction"),s("span",{class:"token punctuation"},","),n(` 
    WarningVariable`),s("span",{class:"token punctuation"},","),n(" OutBuffer"),s("span",{class:"token punctuation"},","),n(" PipelineVariable"),s("span",{class:"token punctuation"},","),n(" and OutVariable"),s("span",{class:"token punctuation"},"."),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Qs=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token function"},"PS"),n("> "),s("span",{class:"token punctuation"},"."),s("span",{class:"token operator"},"/"),s("span",{class:"token function"},"set-profile"),n(`

`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Js=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets the user's PowerShell profile
.DESCRIPTION
	This PowerShell script sets the PowerShell profile for the current user.
.EXAMPLE
	PS> ./set-profile
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),n(`

`),s("span",{class:"token keyword"},"try"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token string"},`"⏳ (1/3) Querying path to PowerShell profile 'CurrentUserCurrentHost'..."`),n(`
	`),s("span",{class:"token variable"},"$PathToProfile"),n(" = "),s("span",{class:"token variable"},"$PROFILE"),s("span",{class:"token punctuation"},"."),n(`CurrentUserCurrentHost
	`),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PathToProfile"),n('"')]),n(`

	`),s("span",{class:"token string"},'"⏳ (2/3) Creating the profile (if non-existent)..."'),n(`
	`),s("span",{class:"token variable"},"$Null"),n(" = "),s("span",{class:"token function"},"New-Item"),n(),s("span",{class:"token operator"},"-"),n("Path "),s("span",{class:"token variable"},"$profile"),n(),s("span",{class:"token operator"},"-"),n("ItemType "),s("span",{class:"token string"},'"file"'),n(),s("span",{class:"token operator"},"-"),n(`Force

	`),s("span",{class:"token string"},'"⏳ (3/3) Copying my-profile.ps1..."'),n(`
	`),s("span",{class:"token variable"},"$PathToRepo"),n(" = "),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PSScriptRoot"),n('/.."')]),n(`
	`),s("span",{class:"token function"},"Copy-Item"),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PathToRepo"),n('/Scripts/my-profile.ps1"')]),n(),s("span",{class:"token string"},[n('"'),s("span",{class:"token variable"},"$PathToProfile"),n('"')]),n(),s("span",{class:"token operator"},"-"),n(`force

	`),s("span",{class:"token string"},'"✔️ updated your PowerShell profile by my-profile.ps1 - it gets active on next login"'),n(`
	`),s("span",{class:"token keyword"},"exit"),n(" 0 "),s("span",{class:"token comment"},"# success"),n(`
`),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"catch"),n(),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token string"},[n('"⚠️ Error in line '),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$_"),s("span",{class:"token punctuation"},"."),n("InvocationInfo"),s("span",{class:"token punctuation"},"."),n("ScriptLineNumber"),s("span",{class:"token punctuation"},")")]),n(": "),s("span",{class:"token function"},[n("$"),s("span",{class:"token punctuation"},"("),s("span",{class:"token variable"},"$Error"),s("span",{class:"token punctuation"},"["),n("0"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},")")]),n('"')]),n(`
	`),s("span",{class:"token keyword"},"exit"),n(` 1
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Zs=s("hr",null,null,-1);function sn(k,nn){const i=d("FontIcon"),o=d("router-link"),c=d("VPCard"),r=d("Tabs"),m=d("TagLinks");return v(),h("div",null,[s("h1",f,[s("a",S,[s("span",null,g(k.$frontmatter.title)+" 관련",1)])]),s("nav",P,[s("ul",null,[s("li",null,[l(o,{to:"#introduce-powershell-ps1"},{default:e(()=>[l(i,{icon:"iconfont icon-file"}),n("introduce-powershell.ps1")]),_:1})]),s("li",null,[l(o,{to:"#list-aliases-ps1"},{default:e(()=>[l(i,{icon:"iconfont icon-file"}),n("list-aliases.ps1")]),_:1})]),s("li",null,[l(o,{to:"#list-automatic-variables-ps1"},{default:e(()=>[l(i,{icon:"iconfont icon-file"}),n("list-automatic-variables.ps1")]),_:1})]),s("li",null,[l(o,{to:"#list-cheat-sheet-ps1"},{default:e(()=>[l(i,{icon:"iconfont icon-file"}),n("list-cheat-sheet.ps1")]),_:1})]),s("li",null,[l(o,{to:"#list-cmdlets-ps1"},{default:e(()=>[l(i,{icon:"iconfont icon-file"}),n("list-cmdlets.ps1")]),_:1})]),s("li",null,[l(o,{to:"#list-console-colors-ps1"},{default:e(()=>[l(i,{icon:"iconfont icon-file"}),n("list-console-colors.ps1")]),_:1})]),s("li",null,[l(o,{to:"#list-modules-ps1"},{default:e(()=>[l(i,{icon:"iconfont icon-file"}),n("list-modules.ps1")]),_:1})]),s("li",null,[l(o,{to:"#list-profiles-ps1"},{default:e(()=>[l(i,{icon:"iconfont icon-file"}),n("list-profiles.ps1")]),_:1})]),s("li",null,[l(o,{to:"#list-scripts-ps1"},{default:e(()=>[l(i,{icon:"iconfont icon-file"}),n("list-scripts.ps1")]),_:1})]),s("li",null,[l(o,{to:"#new-script-ps1"},{default:e(()=>[l(i,{icon:"iconfont icon-file"}),n("new-script.ps1")]),_:1})]),s("li",null,[l(o,{to:"#set-profile-ps1"},{default:e(()=>[l(i,{icon:"iconfont icon-file"}),n("set-profile.ps1")]),_:1})])])]),_,s("h2",$,[s("a",C,[s("span",null,[l(i,{icon:"iconfont icon-file"}),A])])]),l(c,p(u({title:"introduce-powershell.ps1",desc:"Introduces PowerShell to new users.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/introduce-powershell.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),I,l(r,{id:"14",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:e(({value:a,isActive:t})=>[n("Parameters")]),title1:e(({value:a,isActive:t})=>[n("Example")]),title2:e(({value:a,isActive:t})=>[n("Script Content")]),tab0:e(({value:a,isActive:t})=>[E]),tab1:e(({value:a,isActive:t})=>[y]),tab2:e(({value:a,isActive:t})=>[x]),_:1}),V,s("h2",T,[s("a",L,[s("span",null,[l(i,{icon:"iconfont icon-file"}),N])])]),l(c,p(u({title:"list-aliases.ps1",desc:"Lists all PowerShell aliases.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-aliases.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),O,l(r,{id:"33",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:e(({value:a,isActive:t})=>[n("Parameters")]),title1:e(({value:a,isActive:t})=>[n("Example")]),title2:e(({value:a,isActive:t})=>[n("Script Content")]),tab0:e(({value:a,isActive:t})=>[M]),tab1:e(({value:a,isActive:t})=>[D]),tab2:e(({value:a,isActive:t})=>[R]),_:1}),W,s("h2",F,[s("a",z,[s("span",null,[l(i,{icon:"iconfont icon-file"}),H])])]),l(c,p(u({title:"list-automatic-variables.ps1",desc:"Lists the automatic variables of PowerShell.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-automatic-variables.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),l(r,{id:"49",data:[{id:"Parameters"},{id:"Script Content"}],active:0},{title0:e(({value:a,isActive:t})=>[n("Parameters")]),title1:e(({value:a,isActive:t})=>[n("Script Content")]),tab0:e(({value:a,isActive:t})=>[B]),tab1:e(({value:a,isActive:t})=>[U]),_:1}),K,s("h2",G,[s("a",X,[s("span",null,[l(i,{icon:"iconfont icon-file"}),Y])])]),l(c,p(u({title:"list-cheat-sheet.ps1",desc:"Lists the PowerShell cheat sheet.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-cheat-sheet.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),j,l(r,{id:"65",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:e(({value:a,isActive:t})=>[n("Parameters")]),title1:e(({value:a,isActive:t})=>[n("Example")]),title2:e(({value:a,isActive:t})=>[n("Script Content")]),tab0:e(({value:a,isActive:t})=>[q]),tab1:e(({value:a,isActive:t})=>[Q]),tab2:e(({value:a,isActive:t})=>[J]),_:1}),Z,s("h2",ss,[s("a",ns,[s("span",null,[l(i,{icon:"iconfont icon-file"}),es])])]),l(c,p(u({title:"list-cmdlets.ps1",desc:"Lists the PowerShell cmdlets.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-cmdlets.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),as,l(r,{id:"84",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:e(({value:a,isActive:t})=>[n("Parameters")]),title1:e(({value:a,isActive:t})=>[n("Example")]),title2:e(({value:a,isActive:t})=>[n("Script Content")]),tab0:e(({value:a,isActive:t})=>[ts]),tab1:e(({value:a,isActive:t})=>[ls]),tab2:e(({value:a,isActive:t})=>[is]),_:1}),os,s("h2",cs,[s("a",rs,[s("span",null,[l(i,{icon:"iconfont icon-file"}),ps])])]),l(c,p(u({title:"list-console-colors.ps1",desc:"Lists all console colors.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-console-colors.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),us,l(r,{id:"103",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:e(({value:a,isActive:t})=>[n("Parameters")]),title1:e(({value:a,isActive:t})=>[n("Example")]),title2:e(({value:a,isActive:t})=>[n("Script Content")]),tab0:e(({value:a,isActive:t})=>[ds]),tab1:e(({value:a,isActive:t})=>[ks]),tab2:e(({value:a,isActive:t})=>[ms]),_:1}),bs,s("h2",vs,[s("a",hs,[s("span",null,[l(i,{icon:"iconfont icon-file"}),gs])])]),l(c,p(u({title:"list-modules.ps1",desc:"Lists the PowerShell modules.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-modules.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ws,l(r,{id:"122",data:[{id:"Parameters"},{id:"Example"}],active:0},{title0:e(({value:a,isActive:t})=>[n("Parameters")]),title1:e(({value:a,isActive:t})=>[n("Example")]),tab0:e(({value:a,isActive:t})=>[fs]),tab1:e(({value:a,isActive:t})=>[Ss]),default:e(()=>[Ps,_s,$s]),_:1}),Cs,s("h2",As,[s("a",Is,[s("span",null,[l(i,{icon:"iconfont icon-file"}),Es])])]),l(c,p(u({title:"list-profiles.ps1",desc:"Lists your PowerShell profiles.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-profiles.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),l(r,{id:"142",data:[{id:"Parameters"},{id:"Script Content"}],active:0},{title0:e(({value:a,isActive:t})=>[n("Parameters")]),title1:e(({value:a,isActive:t})=>[n("Script Content")]),tab0:e(({value:a,isActive:t})=>[ys]),tab1:e(({value:a,isActive:t})=>[xs]),_:1}),Vs,s("h2",Ts,[s("a",Ls,[s("span",null,[l(i,{icon:"iconfont icon-file"}),Ns])])]),l(c,p(u({title:"list-scripts.ps1",desc:"Lists all PowerShell scripts in this repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-scripts.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),l(r,{id:"155",data:[{id:"Parameters"},{id:"Script Content"}],active:0},{title0:e(({value:a,isActive:t})=>[n("Parameters")]),title1:e(({value:a,isActive:t})=>[n("Script Content")]),tab0:e(({value:a,isActive:t})=>[Os]),tab1:e(({value:a,isActive:t})=>[Ms]),_:1}),Ds,s("h2",Rs,[s("a",Ws,[s("span",null,[l(i,{icon:"iconfont icon-file"}),Fs])])]),l(c,p(u({title:"new-script.ps1",desc:"Creates a new PowerShell script.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/new-script.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),s("p",null,[n("This PowerShell script creates a new PowerShell script file (by using template file "),l(i,{icon:"iconfont icon-file"}),n(),zs,n(").")]),l(r,{id:"171",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:e(({value:a,isActive:t})=>[n("Parameters")]),title1:e(({value:a,isActive:t})=>[n("Example")]),title2:e(({value:a,isActive:t})=>[n("Script Content")]),tab0:e(({value:a,isActive:t})=>[Hs]),tab1:e(({value:a,isActive:t})=>[Bs]),tab2:e(({value:a,isActive:t})=>[Us]),_:1}),Ks,s("h2",Gs,[s("a",Xs,[s("span",null,[l(i,{icon:"iconfont icon-file"}),Ys])])]),l(c,p(u({title:"set-profile.ps1",desc:"Updates your PowerShell user profile.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/set-profile.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),js,l(r,{id:"190",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:e(({value:a,isActive:t})=>[n("Parameters")]),title1:e(({value:a,isActive:t})=>[n("Example")]),title2:e(({value:a,isActive:t})=>[n("Script Content")]),tab0:e(({value:a,isActive:t})=>[qs]),tab1:e(({value:a,isActive:t})=>[Qs]),tab2:e(({value:a,isActive:t})=>[Js]),_:1}),Zs,l(m)])}const tn=b(w,[["render",sn],["__file","scripts-for-pwsh.html.vue"]]),ln=JSON.parse('{"path":"/g4e/cli-pwsh/scripts-for-pwsh.html","title":"Scripts for Powershell","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Scripts for Powershell","description":"Powershell > Scripts for Powershell","icon":"fas fa-magnifying-glass","category":["Powershell"],"tag":["powershell","windows","script","useful-script"]},"headers":[{"level":2,"title":"introduce-powershell.ps1","slug":"introduce-powershell-ps1","link":"#introduce-powershell-ps1","children":[]},{"level":2,"title":"list-aliases.ps1","slug":"list-aliases-ps1","link":"#list-aliases-ps1","children":[]},{"level":2,"title":"list-automatic-variables.ps1","slug":"list-automatic-variables-ps1","link":"#list-automatic-variables-ps1","children":[]},{"level":2,"title":"list-cheat-sheet.ps1","slug":"list-cheat-sheet-ps1","link":"#list-cheat-sheet-ps1","children":[]},{"level":2,"title":"list-cmdlets.ps1","slug":"list-cmdlets-ps1","link":"#list-cmdlets-ps1","children":[]},{"level":2,"title":"list-console-colors.ps1","slug":"list-console-colors-ps1","link":"#list-console-colors-ps1","children":[]},{"level":2,"title":"list-modules.ps1","slug":"list-modules-ps1","link":"#list-modules-ps1","children":[]},{"level":2,"title":"list-profiles.ps1","slug":"list-profiles-ps1","link":"#list-profiles-ps1","children":[]},{"level":2,"title":"list-scripts.ps1","slug":"list-scripts-ps1","link":"#list-scripts-ps1","children":[]},{"level":2,"title":"new-script.ps1","slug":"new-script-ps1","link":"#new-script-ps1","children":[]},{"level":2,"title":"set-profile.ps1","slug":"set-profile-ps1","link":"#set-profile-ps1","children":[]}],"git":{},"readingTime":{"minutes":7.67,"words":2300},"filePathRelative":"g4e/cli-pwsh/scripts-for-pwsh.md","excerpt":"\\n\\n<hr>\\n<h2></h2>\\n"}');export{tn as comp,ln as data};
