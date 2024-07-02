import{_ as b}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as k,o as h,c as g,a as n,t as w,b as l,w as a,n as p,g as r,d as s,e as d}from"./app-CtVGPIIl.js";const f={},S={id:"frontmatter-title-관련",tabindex:"-1"},P={class:"header-anchor",href:"#frontmatter-title-관련"},$={class:"table-of-contents"},y=n("hr",null,null,-1),_={id:"add-memo-ps1",tabindex:"-1"},A={class:"header-anchor",href:"#add-memo-ps1"},E=n("code",null,"add-memo.ps1",-1),x=n("p",null,"This PowerShell script saves the given memo text to Memos.csv in your home folder.",-1),C=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"add-memo"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("text"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`text <String>
    Specifies the text to memorize
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"add-memo"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token string"},'"Buy apples"'),s(`
✔️ saved to 📄`),n("span",{class:"token operator"},"/"),s("home/markus/Memos"),n("span",{class:"token punctuation"},"."),s(`csv

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Adds a memo text 
.DESCRIPTION
	This PowerShell script saves the given memo text to Memos.csv in your home folder.
.PARAMETER text
	Specifies the text to memorize
.EXAMPLE
	PS> ./add-memo.ps1 "Buy apples"
	✔️ saved to 📄/home/markus/Memos.csv
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$text"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$text"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$text"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter the text to memorize"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token string"},'"~/Memos.csv"'),s(`
	`),n("span",{class:"token variable"},"$Time"),s(" = "),n("span",{class:"token function"},"Get-Date"),s(),n("span",{class:"token operator"},"-"),s(`format FileDateTimeUniversal
	`),n("span",{class:"token variable"},"$Line"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Time"),s(","),n("span",{class:"token variable"},"$text"),s('"')]),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},'"TIME,TEXT"'),s(" > "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token variable"},"$Line"),s(" >> "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`

	`),n("span",{class:"token string"},[s('"✔️ saved to 📄'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("hr",null,null,-1),R={id:"check-ipv4-address-ps1",tabindex:"-1"},O={class:"header-anchor",href:"#check-ipv4-address-ps1"},D=n("code",null,"check-ipv4-address.ps1",-1),M=n("p",null,"This PowerShell script checks the given IPv4 address for validity.",-1),N=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-ipv4-address"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Address"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Address <String>
    Specifies the IPv4 address to check
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-ipv4-address 192"),n("span",{class:"token punctuation"},"."),s("168"),n("span",{class:"token punctuation"},"."),s("11"),n("span",{class:"token punctuation"},"."),s(`22
✔️ IPv4 192`),n("span",{class:"token punctuation"},"."),s("168"),n("span",{class:"token punctuation"},"."),s("11"),n("span",{class:"token punctuation"},"."),s(`22 is valid

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks an IPv4 address for validity
.DESCRIPTION
	This PowerShell script checks the given IPv4 address for validity.
.PARAMETER Address
	Specifies the IPv4 address to check
.EXAMPLE
	PS> ./check-ipv4-address 192.168.11.22
	✔️ IPv4 192.168.11.22 is valid
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Address"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" IsIPv4AddressValid "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$IP"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$RegEx"),s(" = "),n("span",{class:"token string"},'"^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IP"),s(),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token variable"},"$RegEx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"$true"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"$false"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Address"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Address"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter IPv4 address to validate"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("IsIPv4AddressValid "),n("span",{class:"token variable"},"$Address"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"✔️ IPv4 '),n("span",{class:"token variable"},"$Address"),s(' is valid"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"write-warning"),s(),n("span",{class:"token string"},[s('"Invalid IPv4 address: '),n("span",{class:"token variable"},"$Address"),s('"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(` 1
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),W=n("hr",null,null,-1),z={id:"check-ipv6-address-ps1",tabindex:"-1"},F={class:"header-anchor",href:"#check-ipv6-address-ps1"},U=n("code",null,"check-ipv6-address.ps1",-1),j=n("p",null,"This PowerShell script checks the given IPv6 address for validity",-1),B=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-ipv6-address"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Address"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Address <String>
    Specifies the IPv6 address to check
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`check-ipv6-address fe80::200:5aee:feaa:20a2
✔️ IPv6 fe80::200:5aee:feaa:20a2 is valid

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks an IPv6 address for validity
.DESCRIPTION
	This PowerShell script checks the given IPv6 address for validity
.PARAMETER Address
	Specifies the IPv6 address to check
.EXAMPLE
	PS> ./check-ipv6-address fe80::200:5aee:feaa:20a2
	✔️ IPv6 fe80::200:5aee:feaa:20a2 is valid
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Address"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" IsIPv6AddressValid "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$IP"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token variable"},"$IPv4Regex"),s(" = "),n("span",{class:"token string"},"'(((25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2})\\.){3}(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]{1,2}))'"),s(`
    `),n("span",{class:"token variable"},"$G"),s(" = "),n("span",{class:"token string"},"'[a-f\\d]{1,4}'"),s(`
    `),n("span",{class:"token variable"},"$Tail"),s(" = @"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'":"'),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},[s('"(:('),n("span",{class:"token variable"},"$G"),s(")?|"),n("span",{class:"token variable"},"$IPv4Regex"),s(')"')]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},[s('":('),n("span",{class:"token variable"},"$IPv4Regex"),s("|"),n("span",{class:"token variable"},"$G"),s("(:"),n("span",{class:"token variable"},"$G"),s(')?|)"')]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},[s('"(:'),n("span",{class:"token variable"},"$IPv4Regex"),s("|:"),n("span",{class:"token variable"},"$G"),s("(:"),n("span",{class:"token variable"},"$IPv4Regex"),s("|(:"),n("span",{class:"token variable"},"$G"),s('){0,2})|:)"')]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},[s('"((:'),n("span",{class:"token variable"},"$G"),s("){0,2}(:"),n("span",{class:"token variable"},"$IPv4Regex"),s("|(:"),n("span",{class:"token variable"},"$G"),s('){1,2})|:)"')]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},[s('"((:'),n("span",{class:"token variable"},"$G"),s("){0,3}(:"),n("span",{class:"token variable"},"$IPv4Regex"),s("|(:"),n("span",{class:"token variable"},"$G"),s('){1,2})|:)"')]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string"},[s('"((:'),n("span",{class:"token variable"},"$G"),s("){0,4}(:"),n("span",{class:"token variable"},"$IPv4Regex"),s("|(:"),n("span",{class:"token variable"},"$G"),s('){1,2})|:)"')]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token namespace"},"[string]"),s(),n("span",{class:"token variable"},"$IPv6RegexString"),s(" = "),n("span",{class:"token variable"},"$G"),s(`
    `),n("span",{class:"token variable"},"$Tail"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$IPv6RegexString"),s(" = "),n("span",{class:"token string"},[s('"${G}:('),n("span",{class:"token variable"},"$IPv6RegexString"),s("|"),n("span",{class:"token variable"},"$_"),s(')"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token variable"},"$IPv6RegexString"),s(" = "),n("span",{class:"token string"},[s('":(:'),n("span",{class:"token variable"},"$G"),s("){0,5}((:"),n("span",{class:"token variable"},"$G"),s("){1,2}|:"),n("span",{class:"token variable"},"$IPv4Regex"),s(")|"),n("span",{class:"token variable"},"$IPv6RegexString"),s('"')]),s(`
    `),n("span",{class:"token variable"},"$IPv6RegexString"),s(" = "),n("span",{class:"token variable"},"$IPv6RegexString"),s(),n("span",{class:"token operator"},"-replace"),s(),n("span",{class:"token string"},"'\\('"),s(),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'(?:'"),s(),n("span",{class:"token comment"},"# make all groups non-capturing"),s(`
    `),n("span",{class:"token namespace"},"[regex]"),s(),n("span",{class:"token variable"},"$IPv6Regex"),s(" = "),n("span",{class:"token variable"},"$IPv6RegexString"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IP"),s(),n("span",{class:"token operator"},"-"),s("imatch "),n("span",{class:"token string"},[s('"^'),n("span",{class:"token variable"},"$IPv6Regex"),s('$"')]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"$true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"$false"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Address"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Address"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter IPv6 address to validate"'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("IsIPv6AddressValid "),n("span",{class:"token variable"},"$Address"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"✔️  IPv6 '),n("span",{class:"token variable"},"$Address"),s(' is valid"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"write-warning"),s(),n("span",{class:"token string"},[s('"Invalid IPv6 address: '),n("span",{class:"token variable"},"$Address"),s('"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(` 1
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=n("hr",null,null,-1),K={id:"check-mac-address-ps1",tabindex:"-1"},X={class:"header-anchor",href:"#check-mac-address-ps1"},Q=n("code",null,"check-mac-address.ps1",-1),J=n("p",null,"This PowerShell script checks the given MAC address for validity Supported MAC address formats are:",-1),Z=n("ul",null,[n("li",null,[n("code",null,"00:00:00:00:00:00"),s(" or")]),n("li",null,[n("code",null,"00-00-00-00-00-00"),s(" or")]),n("li",null,[n("code",null,"000000000000")])],-1),nn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-mac-address"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("MAC"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`MAC <String>
    Specifies the MAC address to check
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),sn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`check-mac-address 11:22:33:44:55:66
✔️ MAC address 11:22:33:44:55:66 is valid

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),an=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks the given MAC address for validity
.DESCRIPTION
	This PowerShell script checks the given MAC address for validity
	Supported MAC address formats are: 00:00:00:00:00:00 or 00-00-00-00-00-00 or 000000000000.
.PARAMETER MAC
	Specifies the MAC address to check
.EXAMPLE
	PS> ./check-mac-address 11:22:33:44:55:66
	✔️ MAC address 11:22:33:44:55:66 is valid
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$MAC"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" IsMACAddressValid "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$mac"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$RegEx"),s(" = "),n("span",{class:"token string"},'"^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})|([0-9A-Fa-f]{2}){6}$"'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$mac"),s(),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token variable"},"$RegEx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"$true"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"$false"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$MAC"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$MAC"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter MAC address to validate"'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("IsMACAddressValid "),n("span",{class:"token variable"},"$MAC"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"✔️ MAC address '),n("span",{class:"token variable"},"$MAC"),s(' is valid"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"write-warning"),s(),n("span",{class:"token string"},[s('"Invalid MAC address: '),n("span",{class:"token variable"},"$MAC"),s('"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(` 1
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),en=n("hr",null,null,-1),tn={id:"check-subnet-mask-ps1",tabindex:"-1"},ln={class:"header-anchor",href:"#check-subnet-mask-ps1"},on=n("code",null,"check-subnet-mask.ps1",-1),cn=n("p",null,"This PowerShell script checks the given subnet mask for validity.",-1),pn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-subnet-mask"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("address"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`address <String>
    Specifies the subnet mask to check
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),rn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-subnet-mask"),n("span",{class:"token punctuation"},"."),s("ps1 255"),n("span",{class:"token punctuation"},"."),s("255"),n("span",{class:"token punctuation"},"."),s("255"),n("span",{class:"token punctuation"},"."),s(`0
✔️ subnet mask 255`),n("span",{class:"token punctuation"},"."),s("255"),n("span",{class:"token punctuation"},"."),s("255"),n("span",{class:"token punctuation"},"."),s(`0 is valid

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),un=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks the given subnet mask for validity
.DESCRIPTION
	This PowerShell script checks the given subnet mask for validity.
.PARAMETER address
	Specifies the subnet mask to check
.EXAMPLE
	PS> ./check-subnet-mask.ps1 255.255.255.0
	✔️ subnet mask 255.255.255.0 is valid
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$address"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" IsSubNetMaskValid "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$IP"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$RegEx"),s(" = "),n("span",{class:"token string"},'"^(254|252|248|240|224|192|128).0.0.0$|^255.(254|252|248|240|224|192|128|0).0.0$|^255.255.(254|252|248|240|224|192|128|0).0$|^255.255.255.(255|254|252|248|240|224|192|128|0)$"'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IP"),s(),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token variable"},"$RegEx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"$true"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"$false"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$address"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$address"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter subnet mask to validate"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("IsSubNetMaskValid "),n("span",{class:"token variable"},"$address"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"✔️ subnet mask '),n("span",{class:"token variable"},"$Address"),s(' is valid"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"write-warning"),s(),n("span",{class:"token string"},[s('"Invalid subnet mask: '),n("span",{class:"token variable"},"$address"),s('"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(` 1
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),kn=n("hr",null,null,-1),dn={id:"display-time-ps1",tabindex:"-1"},mn={class:"header-anchor",href:"#display-time-ps1"},vn=n("code",null,"display-time.ps1",-1),bn=n("p",null,"This PowerShell script displays the current time (for 10 seconds by default)",-1),hn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("display-time"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Seconds"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Seconds <Int32>
    Specifies the number of seconds to display the time
    
    Required?                    false
    Position?                    1
    Default value                10
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),gn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`display-time
`),n("span",{class:"token comment"},"# "),s(`
\`\`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),wn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Displays the current time
.DESCRIPTION
	This PowerShell script displays the current time (for 10 seconds by default)
.PARAMETER Seconds
	Specifies the number of seconds to display the time
.EXAMPLE
	PS> ./display-time
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Seconds"),s(" = 10"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$i"),s(" = 0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"-lt"),s(),n("span",{class:"token variable"},"$Seconds"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Clear-Host"),s(`
		`),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token variable"},"$CurrentTime"),s(" = "),n("span",{class:"token function"},"Get-Date"),s(),n("span",{class:"token operator"},"-"),s("format "),n("span",{class:"token string"},'"yyyy-MM-dd HH:mm:ss"'),s(` 
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"write-big"),s(),n("span",{class:"token variable"},"$CurrentTime"),s(`
		`),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token function"},"Start-Sleep"),s(),n("span",{class:"token operator"},"-"),s(`seconds 1
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fn=n("hr",null,null,-1),Sn={id:"list-environment-variables-ps1",tabindex:"-1"},Pn={class:"header-anchor",href:"#list-environment-variables-ps1"},$n=n("code",null,"list-environment-variables.ps1",-1),yn=n("p",null,"This PowerShell script lists all environment variables.",-1),_n=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-environment-variables"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),An=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-environment-variables"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# Name                           Value"),s(`
`),n("span",{class:"token comment"},"# ----                           -----"),s(`
`),n("span",{class:"token comment"},"# ALLUSERSPROFILE                C:\\ProgramData"),s(`
`),n("span",{class:"token comment"},"# ..."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),En=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all environment variables
.DESCRIPTION
	This PowerShell script lists all environment variables.
.EXAMPLE
	PS> ./list-environment-variables.ps1

	Name                           Value
	----                           -----
	ALLUSERSPROFILE                C:\\ProgramData
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Get-ChildItem"),s(` env:
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xn=n("hr",null,null,-1),Cn={id:"list-emojis-ps1",tabindex:"-1"},Tn={class:"header-anchor",href:"#list-emojis-ps1"},In=n("code",null,"list-emojis.ps1",-1),Ln=n("p",null,"This PowerShell script lists the emojis of Unicode 13.0 sorted by category.",-1),Rn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-emojis"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),On=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-emojis"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Dn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists available Emojis 
.DESCRIPTION
	This PowerShell script lists the emojis of Unicode 13.0 sorted by category.
.EXAMPLE
	PS> ./list-emojis.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token string"},'"Emojis of Unicode 13.0 sorted by Category"'),s(`
`),n("span",{class:"token string"},'"========================================="'),s(`
`),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token string"},'"Smileys: 😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 ☺️ 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 🥵 🥶 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🥳 🥴 🥺 🤥 🤫 🤭 🧐 🤓 😈 👿 👹 👺 💀 👻 👽 🤖 💩 😺 😸 😹 😻 😼 😽 🙀 😿 😾"'),s(`
`),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token string"},'"People: 👶 👧 🧒 👦 👩 🧑 👨 👵 🧓 👴 👲 👳‍♀️ 👳‍♂️ 🧕 🧔 👱‍♂️ 👱‍♀️ 👨‍🦰 👩‍🦰 👨‍🦱 👩‍🦱 👨‍🦲 👩‍🦲 👨‍🦳 👩‍🦳 🦸‍♀️ 🦸‍♂️ 🦹‍♀️ 🦹‍♂️ 👮‍♀️ 👮‍♂️ 👷‍♀️ 👷‍♂️ 💂‍♀️ 💂‍♂️ 🕵️‍♀️ 🕵️‍♂️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 👰 🤵 👸 🤴 🤶 🎅 🧙‍♀️ 🧙‍♂️ 🧝‍♀️ 🧝‍♂️ 🧛‍♀️ 🧛‍♂️ 🧟‍♀️ 🧟‍♂️ 🧞‍♀️ 🧞‍♂️ 🧜‍♀️ 🧜‍♂️ 🧚‍♀️ 🧚‍♂️ 👼 🤰 🤱 🙇‍♀️ 🙇‍♂️ 💁‍♀️ 💁‍♂️ 🙅‍♀️ 🙅‍♂️ 🙆‍♀️ 🙆‍♂️ 🙋‍♀️ 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀️ 🤷‍♂️ 🙎‍♀️ 🙎‍♂️ 🙍‍♀️ 🙍‍♂️ 💇‍♀️ 💇‍♂️ 💆‍♀️ 💆‍♂️ 🧖‍♀️ 🧖‍♂️ 💅 🤳 💃 🕺 👯‍♀️ 👯‍♂️ 🕴 🚶‍♀️ 🚶‍♂️ 🏃‍♀️ 🏃‍♂️ 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 🤲 👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤟 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🦵 🦶 🖕 ✍️ 🙏 💍 💄 💋 👄 👅 👂 👃 👣 👁 👀 🧠 🦴 🦷 🗣 👤 👥"'),s(`
`),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token string"},'"Clothings & Accessoires: 🧥 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 🥾 🥿 🧦 🧤 🧣 🎩 🧢 👒 🎓 ⛑ 👑 👝 👛 👜 💼 🎒 👓 🕶 🥽 🥼 🌂 🧵 🧶"'),s(`
`),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token string"},'"Animals & Nature: 🐶 🐱 🐭 🐹 🐰 🦊 🦝 🐻 🐼 🦘 🦡 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦢 🦅 🦉 🦚 🦜 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐚 🐞 🐜 🦗 🕷 🕸 🦂 🦟 🦠 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🐘 🦏 🦛 🐪 🐫 🦙 🦒 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🐐 🦌 🐕 🐩 🐈 🐓 🦃 🕊 🐇 🐁 🐀 🐿 🦔 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 💫 ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈 ☀️ 🌤 ⛅️ 🌥 ☁️ 🌦 🌧 ⛈ 🌩 🌨 ❄️ ☃️ ⛄️ 🌬 💨 💧 💦 ☔️ ☂️ 🌊 🌫"'),s(`
`),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token string"},'"Foods & Drinks: 🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🥭 🥥 🥝 🍅 🍆 🥑 🥦 🥒 🥬 🌶 🌽 🥕 🥔 🍠 🥐 🍞 🥖 🥨 🥯 🧀 🥚 🍳 🥞 🥓 🥩 🍗 🍖 🌭 🍔 🍟 🍕 🥪 🥙 🌮 🌯 🥗 🥘 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🥟 🍤 🍙 🍚 🍘 🍥 🥮 🥠 🍢 🍡 🍧 🍨 🍦 🥧 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🧂 🍩 🍪 🌰 🥜 🍯 🥛 🍼 ☕️ 🍵 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🍾 🥄 🍴 🍽 🥣 🥡 🥢"'),s(`
`),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token string"},'"Sport & Hobbby: ⚽️ 🏀 🏈 ⚾️ 🥎 🏐 🏉 🎾 🥏 🎱 🏓 🏸 🥅 🏒 🏑 🥍 🏏 ⛳️ 🏹 🎣 🥊 🥋 🎽 ⛸ 🥌 🛷 🛹 🎿 ⛷ 🏂 🏋️‍♀️ 🏋🏻‍♀️ 🏋🏼‍♀️ 🏋🏽‍♀️ 🏋🏾‍♀️ 🏋🏿‍♀️ 🏋️‍♂️ 🏋🏻‍♂️ 🏋🏼‍♂️ 🏋🏽‍♂️ 🏋🏾‍♂️ 🏋🏿‍♂️ 🤼‍♀️ 🤼‍♂️ 🤸‍♀️ 🤸🏻‍♀️ 🤸🏼‍♀️ 🤸🏽‍♀️ 🤸🏾‍♀️ 🤸🏿‍♀️ 🤸‍♂️ 🤸🏻‍♂️ 🤸🏼‍♂️ 🤸🏽‍♂️ 🤸🏾‍♂️ 🤸🏿‍♂️ ⛹️‍♀️ ⛹🏻‍♀️ ⛹🏼‍♀️ ⛹🏽‍♀️ ⛹🏾‍♀️ ⛹🏿‍♀️ ⛹️‍♂️ ⛹🏻‍♂️ ⛹🏼‍♂️ ⛹🏽‍♂️ ⛹🏾‍♂️ ⛹🏿‍♂️ 🤺 🤾‍♀️ 🤾🏻‍♀️ 🤾🏼‍♀️ 🤾🏾‍♀️ 🤾🏾‍♀️ 🤾🏿‍♀️ 🤾‍♂️ 🤾🏻‍♂️ 🤾🏼‍♂️ 🤾🏽‍♂️ 🤾🏾‍♂️ 🤾🏿‍♂️ 🏌️‍♀️ 🏌🏻‍♀️ 🏌🏼‍♀️ 🏌🏽‍♀️ 🏌🏾‍♀️ 🏌🏿‍♀️ 🏌️‍♂️ 🏌🏻‍♂️ 🏌🏼‍♂️ 🏌🏽‍♂️ 🏌🏾‍♂️ 🏌🏿‍♂️ 🏇 🏇🏻 🏇🏼 🏇🏽 🏇🏾 🏇🏿 🧘‍♀️ 🧘🏻‍♀️ 🧘🏼‍♀️ 🧘🏽‍♀️ 🧘🏾‍♀️ 🧘🏿‍♀️ 🧘‍♂️ 🧘🏻‍♂️ 🧘🏼‍♂️ 🧘🏽‍♂️ 🧘🏾‍♂️ 🧘🏿‍♂️ 🏄‍♀️ 🏄🏻‍♀️ 🏄🏼‍♀️ 🏄🏽‍♀️ 🏄🏾‍♀️ 🏄🏿‍♀️ 🏄‍♂️ 🏄🏻‍♂️ 🏄🏼‍♂️ 🏄🏽‍♂️ 🏄🏾‍♂️ 🏄🏿‍♂️ 🏊‍♀️ 🏊🏻‍♀️ 🏊🏼‍♀️ 🏊🏽‍♀️ 🏊🏾‍♀️ 🏊🏿‍♀️ 🏊‍♂️ 🏊🏻‍♂️ 🏊🏼‍♂️ 🏊🏽‍♂️ 🏊🏾‍♂️ 🏊🏿‍♂️ 🤽‍♀️ 🤽🏻‍♀️ 🤽🏼‍♀️ 🤽🏽‍♀️ 🤽🏾‍♀️ 🤽🏿‍♀️ 🤽‍♂️ 🤽🏻‍♂️ 🤽🏼‍♂️ 🤽🏽‍♂️ 🤽🏾‍♂️ 🤽🏿‍♂️ 🚣‍♀️ 🚣🏻‍♀️ 🚣🏼‍♀️ 🚣🏽‍♀️ 🚣🏾‍♀️ 🚣🏿‍♀️ 🚣‍♂️ 🚣🏻‍♂️ 🚣🏼‍♂️ 🚣🏽‍♂️ 🚣🏾‍♂️ 🚣🏿‍♂️ 🧗‍♀️ 🧗🏻‍♀️ 🧗🏼‍♀️ 🧗🏽‍♀️ 🧗🏾‍♀️ 🧗🏿‍♀️ 🧗‍♂️ 🧗🏻‍♂️ 🧗🏼‍♂️ 🧗🏽‍♂️ 🧗🏾‍♂️ 🧗🏿‍♂️ 🚵‍♀️ 🚵🏻‍♀️ 🚵🏼‍♀️ 🚵🏽‍♀️ 🚵🏾‍♀️ 🚵🏿‍♀️ 🚵‍♂️ 🚵🏻‍♂️ 🚵🏼‍♂️ 🚵🏽‍♂️ 🚵🏾‍♂️ 🚵🏿‍♂️ 🚴‍♀️ 🚴🏻‍♀️ 🚴🏼‍♀️ 🚴🏽‍♀️ 🚴🏾‍♀️ 🚴🏿‍♀️ 🚴‍♂️ 🚴🏻‍♂️ 🚴🏼‍♂️ 🚴🏽‍♂️ 🚴🏾‍♂️ 🚴🏿‍♂️ 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 🎫 🎟 🎪 🤹‍♀️ 🤹🏻‍♀️ 🤹🏼‍♀️ 🤹🏽‍♀️ 🤹🏾‍♀️ 🤹🏿‍♀️ 🤹‍♂️ 🤹🏻‍♂️ 🤹🏼‍♂️ 🤹🏽‍♂️ 🤹🏾‍♂️ 🤹🏿‍♂️ 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻 🎲 🧩 ♟ 🎯 🎳 🎮 🎰"'),s(`
`),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token string"},'"Travel & Locations: 🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🛴 🚲 🛵 🏍 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 ✈️ 🛫 🛬 🛩 💺 🛰 🚀 🛸 🚁 🛶 ⛵️ 🚤 🛥 🛳 ⛴ 🚢 ⚓️ ⛽️ 🚧 🚦 🚥 🚏 🗺 🗿 🗽 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛲️ ⛱ 🏖 🏝 🏜 🌋 ⛰ 🏔 🗻 🏕 ⛺️ 🏠 🏡 🏘 🏚 🏗 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪️ 🕌 🕍 🕋 ⛩ 🛤 🛣 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁"'),s(`
`),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token string"},'"Objects: ⌚️ 📱 📲 💻 ⌨️ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎️ 📟 📠 📺 📻 🎙 🎚 🎛 ⏱ ⏲ ⏰ 🕰 ⌛️ ⏳ 📡 🔋 🔌 💡 🔦 🕯 🗑 🛢 💸 💵 💴 💶 💷 💰 💳 🧾 💎 ⚖️ 🔧 🔨 ⚒ 🛠 ⛏ 🔩 ⚙️ ⛓ 🔫 💣 🔪 🗡 ⚔️ 🛡 🚬 ⚰️ ⚱️ 🏺 🧭 🧱 🔮 🧿 🧸 📿 💈 ⚗️ 🔭 🧰 🧲 🧪 🧫 🧬 🧯 🔬 🕳 💊 💉 🌡 🚽 🚰 🚿 🛁 🛀 🛀🏻 🛀🏼 🛀🏽 🛀🏾 🛀🏿 🧴 🧵 🧶 🧷 🧹 🧺 🧻 🧼 🧽 🛎 🔑 🗝 🚪 🛋 🛏 🛌 🖼 🛍 🧳 🛒 🎁 🎈 🎏 🎀 🎊 🎉 🧨 🎎 🏮 🎐 🧧 ✉️ 📩 📨 📧 💌 📥 📤 📦 🏷 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 📊 📈 📉 🗒 🗓 📆 📅 📇 🗃 🗳 🗄 📋 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 🖇 📐 📏 📌 📍 ✂️ 🖊 🖋 ✒️ 🖌 🖍 📝 ✏️ 🔍 🔎 🔏 🔐 🔒 🔓"'),s(`
`),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token string"},'"Symbols: ❤️ 🧡 💛 💚 💙 💜 🖤 💔 ❣️ 💕 💞 💓 💗 💖 💘 💝 💟 ☮️ ✝️ ☪️ 🕉 ☸️ ✡️ 🔯 🕎 ☯️ ☦️ 🛐 ⛎ ♈️ ♉️ ♊️ ♋️ ♌️ ♍️ ♎️ ♏️ ♐️ ♑️ ♒️ ♓️ 🆔 ⚛️ 🉑 ☢️ ☣️ 📴 📳 🈶 🈚️ 🈸 🈺 🈷️ ✴️ 🆚 💮 🉐 ㊙️ ㊗️ 🈴 🈵 🈹 🈲 🅰️ 🅱️ 🆎 🆑 🅾️ 🆘 ❌ ⭕️ 🛑 ⛔️ 📛 🚫 💯 💢 ♨️ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗️ ❕ ❓ ❔ ‼️ ⁉️ 🔅 🔆 〽️ ⚠️ 🚸 🔱 ⚜️ 🔰 ♻️ ✅ 🈯️ 💹 ❇️ ✳️ ❎ 🌐 💠 Ⓜ️ 🌀 💤 🏧 🚾 ♿️ 🅿️ 🈳 🈂️ 🛂 🛃 🛄 🛅 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🔣 ℹ️ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟 🔢 #️⃣ *️⃣ ⏏️ ▶️ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀️ 🔼 🔽 ➡️ ⬅️ ⬆️ ⬇️ ↗️ ↘️ ↙️ ↖️ ↕️ ↔️ ↪️ ↩️ ⤴️ ⤵️ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖️ ♾ 💲 💱 ™️ ©️ ®️ 〰️ ➰ ➿ 🔚 🔙 🔛 🔝 🔜 ✔️ ☑️ 🔘 ⚪️ ⚫️ 🔴 🔵 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪️ ▫️ ◾️ ◽️ ◼️ ◻️ ⬛️ ⬜️ 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁‍🗨 💬 💭 🗯 ♠️ ♣️ ♥️ ♦️ 🃏 🎴 🀄️ 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧"'),s(`
`),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token string"},'"Flags: 🏳️ 🏴 🏁 🚩 🏳️‍🌈 🏴‍☠️ 🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇺 🇦🇹 🇦🇿 🇧🇸 🇧🇭 🇧🇩 🇧🇧 🇧🇾 🇧🇪 🇧🇿 🇧🇯 🇧🇲 🇧🇹 🇧🇴 🇧🇦 🇧🇼 🇧🇷 🇮🇴 🇻🇬 🇧🇳 🇧🇬 🇧🇫 🇧🇮 🇰🇭 🇨🇲 🇨🇦 🇮🇨 🇨🇻 🇧🇶 🇰🇾 🇨🇫 🇹🇩 🇨🇱 🇨🇳 🇨🇽 🇨🇨 🇨🇴 🇰🇲 🇨🇬 🇨🇩 🇨🇰 🇨🇷 🇨🇮 🇭🇷 🇨🇺 🇨🇼 🇨🇾 🇨🇿 🇩🇰 🇩🇯 🇩🇲 🇩🇴 🇪🇨 🇪🇬 🇸🇻 🇬🇶 🇪🇷 🇪🇪 🇪🇹 🇪🇺 🇫🇰 🇫🇴 🇫🇯 🇫🇮 🇫🇷 🇬🇫 🇵🇫 🇹🇫 🇬🇦 🇬🇲 🇬🇪 🇩🇪 🇬🇭 🇬🇮 🇬🇷 🇬🇱 🇬🇩 🇬🇵 🇬🇺 🇬🇹 🇬🇬 🇬🇳 🇬🇼 🇬🇾 🇭🇹 🇭🇳 🇭🇰 🇭🇺 🇮🇸 🇮🇳 🇮🇩 🇮🇷 🇮🇶 🇮🇪 🇮🇲 🇮🇱 🇮🇹 🇯🇲 🇯🇵 🎌 🇯🇪 🇯🇴 🇰🇿 🇰🇪 🇰🇮 🇽🇰 🇰🇼 🇰🇬 🇱🇦 🇱🇻 🇱🇧 🇱🇸 🇱🇷 🇱🇾 🇱🇮 🇱🇹 🇱🇺 🇲🇴 🇲🇰 🇲🇬 🇲🇼 🇲🇾 🇲🇻 🇲🇱 🇲🇹 🇲🇭 🇲🇶 🇲🇷 🇲🇺 🇾🇹 🇲🇽 🇫🇲 🇲🇩 🇲🇨 🇲🇳 🇲🇪 🇲🇸 🇲🇦 🇲🇿 🇲🇲 🇳🇦 🇳🇷 🇳🇵 🇳🇱 🇳🇨 🇳🇿 🇳🇮 🇳🇪 🇳🇬 🇳🇺 🇳🇫 🇰🇵 🇲🇵 🇳🇴 🇴🇲 🇵🇰 🇵🇼 🇵🇸 🇵🇦 🇵🇬 🇵🇾 🇵🇪 🇵🇭 🇵🇳 🇵🇱 🇵🇹 🇵🇷 🇶🇦 🇷🇪 🇷🇴 🇷🇺 🇷🇼 🇼🇸 🇸🇲 🇸🇦 🇸🇳 🇷🇸 🇸🇨 🇸🇱 🇸🇬 🇸🇽 🇸🇰 🇸🇮 🇬🇸 🇸🇧 🇸🇴 🇿🇦 🇰🇷 🇸🇸 🇪🇸 🇱🇰 🇧🇱 🇸🇭 🇰🇳 🇱🇨 🇵🇲 🇻🇨 🇸🇩 🇸🇷 🇸🇿 🇸🇪 🇨🇭 🇸🇾 🇹🇼 🇹🇯 🇹🇿 🇹🇭 🇹🇱 🇹🇬 🇹🇰 🇹🇴 🇹🇹 🇹🇳 🇹🇷 🇹🇲 🇹🇨 🇹🇻 🇻🇮 🇺🇬 🇺🇦 🇦🇪 🇬🇧 🏴󠁧󠁢󠁥󠁮󠁧󠁿 🏴󠁧󠁢󠁳󠁣󠁴󠁿 🏴󠁧󠁢󠁷󠁬󠁳󠁿 🇺🇳 🇺🇸 🇺🇾 🇺🇿 🇻🇺 🇻🇦 🇻🇪 🇻🇳 🇼🇫 🇪🇭 🇾🇪 🇿🇲 🇿🇼"'),s(`
`),n("span",{class:"token string"},'""'),s(`
`),n("span",{class:"token string"},'"Arrows: ← → ↑ ↓ ↔ ↕ ↖ ↗ ↘ ↙ ⤡ ⤢ ↚ ↛ ↮ ⟵ ⟶ ⟷ ⇦ ⇨ ⇧ ⇩ ⬄ ⇳ ⬁ ⬀ ⬂ ⬃ ⬅ ( ⮕ ➡ ) ⬆ ⬇ ⬉ ⬈ ⬊ ⬋ ⬌ ⬍ 🡐 🡒 🡑 🡓 🡔 🡕 🡖 🡗 🡘 🡙 🠹 🠸 🠻 🠺 🡄 🡆 🡅 🡇 🠼 🠾 🠽 🠿 🡀 🡂 🡁 🡃 🠐 🠒 🠑 🠓 🠔 🠖 🠕 🠗 🠘 🠚 🠙 🠛 🠜 🠞 🠝 🠟 ⭠ ⭢ ⭡ ⭣ ⭤ ⭥ ⭦ ⭧ ⭨ ⭩ 🠀 🠂 🠁 🠃 🠄 🠆 🠅 🠇 🠈 🠊 🠉 🠋 🠠 🠢 🠡 🠣 🠤 🠦 🠥 🠧 🠨 🠪 🠩 🠫 🠬 🠮 🠭 🠯 🠰 🠲 🠱 🠳 🡠 🡢 🡡 🡣 🡤 🡥 🡦 🡧 🡨 🡪 🡩 🡫 🡬 🡭 🡮 🡯 🡰 🡲 🡱 🡳 🡴 🡵 🡶 🡷 🡸 🡺 🡹 🡻 🡼 🡽 🡾 🡿 🢀 🢂 🢁 🢃 🢄 🢅 🢆 🢇 ⮈ ⮊ ⮉ ⮋ ➲ ⮜ ⮞ ⮝ ⮟ ⮘ ⮚ ⮙ ⮛ ➢ ➣ ➤"'),s(`

`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Mn=n("hr",null,null,-1),Nn={id:"list-exchange-rates-ps1",tabindex:"-1"},Vn={class:"header-anchor",href:"#list-exchange-rates-ps1"},qn=n("code",null,"list-exchange-rates.ps1",-1),Wn=n("p",null,"This PowerShell script lists the current exchange rates for the given currency (USD per default).",-1),zn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-exchange-rates"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("currency"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`currency <String>
    Specifies the base currency
    
    Required?                    false
    Position?                    1
    Default value                USD
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Fn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-exchange-rates"),n("span",{class:"token punctuation"},"."),s(`ps1 EUR
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# Current Exchange Rates for 1 EUR (source: http://www.floatrates.com)"),s(`
`),n("span",{class:"token comment"},"# ================================"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# Rate           Currency                        Inverse    Date"),s(`
`),n("span",{class:"token comment"},"# ----           --------                        -------    ----"),s(`
`),n("span",{class:"token comment"},"# 1.09489154     USD - U.S. Dollar               0.91333248 Sun, 6 Aug 2023 11:55:02 GMT"),s(`
`),n("span",{class:"token comment"},"# ..."),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Un=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the exchange rates for a currency
.DESCRIPTION
	This PowerShell script lists the current exchange rates for the given currency (USD per default).
.PARAMETER currency
	Specifies the base currency
.EXAMPLE
	PS> ./list-exchange-rates.ps1 EUR

	Current Exchange Rates for 1 EUR (source: http://www.floatrates.com)
	================================

	Rate           Currency                        Inverse    Date
	----           --------                        -------    ----
	1.09489154     USD - U.S. Dollar               0.91333248 Sun, 6 Aug 2023 11:55:02 GMT
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$currency"),s(" = "),n("span",{class:"token string"},'"USD"'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" ListExchangeRates "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$currency"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token namespace"},"[xml]"),n("span",{class:"token variable"},"$ExchangeRates"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"invoke-webRequest"),s(),n("span",{class:"token operator"},"-"),s("uri "),n("span",{class:"token string"},[s('"http://www.floatrates.com/daily/'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$currency"),n("span",{class:"token punctuation"},")")]),s('.xml"')]),s(),n("span",{class:"token operator"},"-"),s("userAgent "),n("span",{class:"token string"},'"curl"'),s(),n("span",{class:"token operator"},"-"),s("useBasicParsing"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Content 
	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),s(" in "),n("span",{class:"token variable"},"$ExchangeRates"),n("span",{class:"token punctuation"},"."),s("channel"),n("span",{class:"token punctuation"},"."),s("item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"new-object"),s(" PSObject "),n("span",{class:"token operator"},"-"),s("property @"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token string"},"'Rate'"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("exchangeRate"),n("span",{class:"token punctuation"},")")]),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token string"},"'Currency'"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("targetCurrency"),n("span",{class:"token punctuation"},")")]),s(" - "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("targetName"),n("span",{class:"token punctuation"},")")]),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token string"},"'Inverse'"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("inverseRate"),n("span",{class:"token punctuation"},")")]),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token string"},"'Date'"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("pubDate"),n("span",{class:"token punctuation"},")")]),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token string"},[s('"Current Exchange Rates for 1 '),n("span",{class:"token variable"},"$currency"),s(' (source: http://www.floatrates.com)"')]),s(`
	`),n("span",{class:"token string"},'"================================"'),s(`

	ListExchangeRates `),n("span",{class:"token variable"},"$currency"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"format-table"),s(),n("span",{class:"token operator"},"-"),s("property Rate"),n("span",{class:"token punctuation"},","),s("Currency"),n("span",{class:"token punctuation"},","),s("Inverse"),n("span",{class:"token punctuation"},","),s(`Date
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),jn=n("hr",null,null,-1),Bn={id:"list-memos-ps1",tabindex:"-1"},Gn={class:"header-anchor",href:"#list-memos-ps1"},Hn=n("code",null,"list-memos.ps1",-1),Yn=n("p",null,"This PowerShell script lists all memo entries in Memos.csv in your home folder.",-1),Kn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-memos"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Xn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-memos"),n("span",{class:"token punctuation"},"."),s(`ps1

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Qn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists your memo entries
.DESCRIPTION
	This PowerShell script lists all memo entries in Memos.csv in your home folder.
.EXAMPLE
	PS> ./list-memos.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`


`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token string"},'"~/Memos.csv"'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},[s('"⏳Reading '),n("span",{class:"token variable"},"$Path"),s(' ..."')]),s(`
		`),n("span",{class:"token variable"},"$Table"),s(" = "),n("span",{class:"token function"},"Import-CSV"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`
		`),n("span",{class:"token function"},"write-progress"),s(),n("span",{class:"token operator"},"-"),s("completed "),n("span",{class:"token string"},[s('"Reading '),n("span",{class:"token variable"},"$Path"),s('"')]),s(`

		`),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token string"},'"Time                  Text"'),s(`
		`),n("span",{class:"token string"},'"----                  ----"'),s(`
		`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),s(" in "),n("span",{class:"token variable"},"$Table"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$Time"),s(" = "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s(`Time
			`),n("span",{class:"token variable"},"$Text"),s(" = "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s(`Text
			`),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Time"),s("  "),n("span",{class:"token variable"},"$Text"),s('"')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'"Sorry, no memos saved yet"'),s(`
		`),n("span",{class:"token keyword"},"exit"),s(` 1
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Jn=n("hr",null,null,-1),Zn={id:"list-mysql-tables-ps1",tabindex:"-1"},ns={class:"header-anchor",href:"#list-mysql-tables-ps1"},ss=n("code",null,"list-mysql-tables.ps1",-1),as=n("p",null,"This PowerShell script lists all tables of the given MySQL database.",-1),es=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-mysql-tables"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("server"),n("span",{class:"token punctuation"},"]"),s(" <Object> "),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("database"),n("span",{class:"token punctuation"},"]"),s(" <Object> "),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("dbuser"),n("span",{class:"token punctuation"},"]"),s(" <Object> "),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("dbpass"),n("span",{class:"token punctuation"},"]"),s(" <Object> "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`server <Object>
    
    Required?                    true
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`database <Object>
    
    Required?                    true
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`dbuser <Object>
    
    Required?                    true
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`dbpass <Object>
    
    Required?                    true
    Position?                    4
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ts=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-mysql-tables"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ls=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all tables of a MySQL database 
.DESCRIPTION
	This PowerShell script lists all tables of the given MySQL database.
.EXAMPLE
	PS> ./list-mysql-tables.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"# This script lists all of the tables in a MySQL database and exports the list as a CSV"),s(`
`),n("span",{class:"token comment"},"# Install-Module InvokeQuery"),s(`
`),n("span",{class:"token comment"},"# Run the above command if you do not have this module"),s(`
`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),s(`
`),n("span",{class:"token namespace"},"[Parameter(Mandatory=$true)]"),n("span",{class:"token variable"},"$server"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token namespace"},"[Parameter(Mandatory=$true)]"),n("span",{class:"token variable"},"$database"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token namespace"},"[Parameter(Mandatory=$true)]"),n("span",{class:"token variable"},"$dbuser"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token namespace"},"[Parameter(Mandatory=$true)]"),n("span",{class:"token variable"},"$dbpass"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token variable"},"$csvfilepath"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('\\mysql_tables.csv"')]),s(`
`),n("span",{class:"token variable"},"$result"),s(" = "),n("span",{class:"token function"},"Invoke-MySqlQuery"),s("  "),n("span",{class:"token operator"},"-"),s("ConnectionString "),n("span",{class:"token string"},[s('"server='),n("span",{class:"token variable"},"$server"),s("; database="),n("span",{class:"token variable"},"$database"),s("; user="),n("span",{class:"token variable"},"$dbuser"),s("; password="),n("span",{class:"token variable"},"$dbpass"),s('; pooling = false; convert zero datetime=True"')]),s(),n("span",{class:"token operator"},"-"),s("Sql "),n("span",{class:"token string"},'"SHOW TABLES"'),s(),n("span",{class:"token operator"},"-"),s(`CommandTimeout 10000
`),n("span",{class:"token variable"},"$result"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Export-Csv"),s(),n("span",{class:"token variable"},"$csvfilepath"),s(),n("span",{class:"token operator"},"-"),s(`NoTypeInformation
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),is=n("hr",null,null,-1),os={id:"list-news-ps1",tabindex:"-1"},cs={class:"header-anchor",href:"#list-news-ps1"},ps=n("code",null,"list-news.ps1",-1),rs=n("p",null,"This PowerShell script lists the latest news by using RSS (Really Simple Syndication) feeds.",-1),us=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-news"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RSS_URL"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("maxLines"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("speed"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`RSS_URL <String>
    Specifies the URL to the RSS feed `),n("span",{class:"token punctuation"},"("),s("Yahoo News by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                https:`),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"/"),s("yahoo"),n("span",{class:"token punctuation"},"."),s(`com/news/rss/world
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`maxLines <Int32>
    Specifies the maximum number of lines to list `),n("span",{class:"token punctuation"},"("),s("24 by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    2
    Default value                24
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`speed <Int32>
    Specifies the speed to `),n("span",{class:"token function"},"write"),s(" the text "),n("span",{class:"token punctuation"},"("),s("10 ms by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    3
    Default value                10
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ks=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-news"),n("span",{class:"token punctuation"},"."),s(`ps1
❇️ Deadly Mediterranean wildfires `),n("span",{class:"token function"},"kill"),s(` more than 40
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ds=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	List the latest news
.DESCRIPTION
	This PowerShell script lists the latest news by using RSS (Really Simple Syndication) feeds.
.PARAMETER RSS_URL
	Specifies the URL to the RSS feed (Yahoo News by default)
.PARAMETER maxLines
	Specifies the maximum number of lines to list (24 by default)
.PARAMETER speed
        Specifies the speed to write the text (10 ms by default)
.EXAMPLE
	PS> ./list-news.ps1
	❇️ Deadly Mediterranean wildfires kill more than 40
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RSS_URL"),s(" = "),n("span",{class:"token string"},'"https://yahoo.com/news/rss/world"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$maxLines"),s(" = 24"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$speed"),s(" = 10"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token namespace"},"[xml]"),n("span",{class:"token variable"},"$content"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Invoke-WebRequest"),s(),n("span",{class:"token operator"},"-"),s("URI "),n("span",{class:"token variable"},"$RSS_URL"),s(),n("span",{class:"token operator"},"-"),s("useBasicParsing"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Content
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$count"),s(` = 1
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$item"),s(" in "),n("span",{class:"token variable"},"$content"),n("span",{class:"token punctuation"},"."),s("rss"),n("span",{class:"token punctuation"},"."),s("channel"),n("span",{class:"token punctuation"},"."),s("item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		& `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/write-typewriter.ps1"')]),s(),n("span",{class:"token string"},[s('"❇️ '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$item"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},")")]),s('"')]),s(),n("span",{class:"token variable"},"$speed"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$count"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token variable"},"$maxLines"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"break"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$source"),s(" = "),n("span",{class:"token variable"},"$Content"),n("span",{class:"token punctuation"},"."),s("rss"),n("span",{class:"token punctuation"},"."),s("channel"),n("span",{class:"token punctuation"},"."),s(`title
	`),n("span",{class:"token variable"},"$date"),s(" = "),n("span",{class:"token variable"},"$Content"),n("span",{class:"token punctuation"},"."),s("rss"),n("span",{class:"token punctuation"},"."),s("channel"),n("span",{class:"token punctuation"},"."),s(`pubDate
	`),n("span",{class:"token string"},[s('"   (by '),n("span",{class:"token variable"},"$source"),s(" as of "),n("span",{class:"token variable"},"$date"),s(')"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ms=n("hr",null,null,-1),vs={id:"list-os-releases-ps1",tabindex:"-1"},bs={class:"header-anchor",href:"#list-os-releases-ps1"},hs=n("code",null,"list-os-releases.ps1",-1),gs=n("p",null,"This PowerShell script lists OS releases and download URL.",-1),ws=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-os-releases"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-os-releases"),n("span",{class:"token punctuation"},"."),s(`ps1

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ss=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists OS releases and download URL
.DESCRIPTION
	This PowerShell script lists OS releases and download URL.
.EXAMPLE
	PS> ./list-os-releases.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},'"⏳Reading OS_IPFS_hashes.csv ..."'),s(`

	`),n("span",{class:"token variable"},"$PathToRepo"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/.."')]),s(`
	`),n("span",{class:"token variable"},"$PathToCsvFile"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PathToRepo"),s('/Data/os-release.csv"')]),s(`
	`),n("span",{class:"token function"},"invoke-webRequest"),s(),n("span",{class:"token operator"},"-"),s("URI "),n("span",{class:"token string"},'"https://fleschutz.droppages.com/downloads/OS_IPFS_hashes.csv"'),s(),n("span",{class:"token operator"},"-"),s("outFile "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PathToCsvFile"),s('"')]),s(`

	`),n("span",{class:"token variable"},"$Table"),s(" = "),n("span",{class:"token function"},"import-csv"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PathToCsvFile"),s('"')]),s(`
	`),n("span",{class:"token function"},"remove-item"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PathToCsvFile"),s('"')]),s(`

	`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token string"},'"Operating System Releases"'),s(`
	`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token string"},'"========================="'),s(`
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),s(" in "),n("span",{class:"token variable"},"$Table"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token string"},[s('"* '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("Path"),n("span",{class:"token punctuation"},"."),s("substring"),n("span",{class:"token punctuation"},"("),s("3"),n("span",{class:"token punctuation"},")")]),s(") -> ipfs://"),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("IPFS"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ps=n("hr",null,null,-1),$s={id:"list-os-updates-ps1",tabindex:"-1"},ys={class:"header-anchor",href:"#list-os-updates-ps1"},_s=n("code",null,"list-os-updates.ps1",-1),As=n("p",null,"This PowerShell script lists the latest updates for operating systems.",-1),Es=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-os-updates"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RSS_URL"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("MaxCount"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`RSS_URL <String>
    Specifies the URL to the RSS feed
    
    Required?                    false
    Position?                    1
    Default value                https:`),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"/"),s("distrowatch"),n("span",{class:"token punctuation"},"."),s("com/news/dwd"),n("span",{class:"token punctuation"},"."),s(`xml
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`MaxCount <Int32>
    Specifies the number of news to list
    
    Required?                    false
    Position?                    2
    Default value                30
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-os-updates"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Cs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists OS updates
.DESCRIPTION
	This PowerShell script lists the latest updates for operating systems.
.PARAMETER RSS_URL
	Specifies the URL to the RSS feed
.PARAMETER MaxCount
	Specifies the number of news to list
.EXAMPLE
	PS> ./list-os-updates.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RSS_URL"),s(" = "),n("span",{class:"token string"},'"https://distrowatch.com/news/dwd.xml"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$MaxCount"),s(" = 30"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},'" "'),s(`
	`),n("span",{class:"token string"},'"Date  OS Update"'),s(`
	`),n("span",{class:"token string"},'"----  ---------"'),s(`
	`),n("span",{class:"token namespace"},"[xml]"),n("span",{class:"token variable"},"$Content"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Invoke-WebRequest"),s(),n("span",{class:"token operator"},"-"),s("URI "),n("span",{class:"token variable"},"$RSS_URL"),s(),n("span",{class:"token operator"},"-"),s("userAgent "),n("span",{class:"token string"},'"curl"'),s(),n("span",{class:"token operator"},"-"),s("useBasicParsing"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Content


	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Count"),s(` = 0
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$item"),s(" in "),n("span",{class:"token variable"},"$Content"),n("span",{class:"token punctuation"},"."),s("rss"),n("span",{class:"token punctuation"},"."),s("channel"),n("span",{class:"token punctuation"},"."),s("item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$item"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
		`),n("span",{class:"token variable"},"$Count"),n("span",{class:"token operator"},"++"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Count"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token variable"},"$MaxCount"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"break"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"      (source: DistroWatch.com)"'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ts=n("hr",null,null,-1),Is={id:"list-passwords-ps1",tabindex:"-1"},Ls={class:"header-anchor",href:"#list-passwords-ps1"},Rs=n("code",null,"list-passwords.ps1",-1),Os=d(`<p>This PowerShell script lists random passwords.</p><p>:: tabs</p><p>@tab:active Parameters</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">PS</span>&gt; <span class="token punctuation">.</span><span class="token operator">/</span>list-passwords<span class="token punctuation">.</span>ps1 <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">-</span>PasswordLength<span class="token punctuation">]</span> &lt;Int32&gt;<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">-</span>Columns<span class="token punctuation">]</span> &lt;Int32&gt;<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">-</span>Rows<span class="token punctuation">]</span> &lt;Int32&gt;<span class="token punctuation">]</span> <span class="token punctuation">[</span>&lt;CommonParameters&gt;<span class="token punctuation">]</span>

<span class="token operator">-</span>PasswordLength &lt;Int32&gt;
    Specifies the length of the password
    
    Required?                    false
    Position?                    1
    Default value                15
    Accept pipeline input?       false
    Accept wildcard characters?  false

<span class="token operator">-</span>Columns &lt;Int32&gt;
    Specifies the number of columns
    
    Required?                    false
    Position?                    2
    Default value                6
    Accept pipeline input?       false
    Accept wildcard characters?  false

<span class="token operator">-</span>Rows &lt;Int32&gt;
    Specifies the number of rows
    
    Required?                    false
    Position?                    3
    Default value                30
    Accept pipeline input?       false
    Accept wildcard characters?  false

<span class="token punctuation">[</span>&lt;CommonParameters&gt;<span class="token punctuation">]</span>
    This script supports the common parameters: Verbose<span class="token punctuation">,</span> Debug<span class="token punctuation">,</span> ErrorAction<span class="token punctuation">,</span> ErrorVariable<span class="token punctuation">,</span> WarningAction<span class="token punctuation">,</span> 
    WarningVariable<span class="token punctuation">,</span> OutBuffer<span class="token punctuation">,</span> PipelineVariable<span class="token punctuation">,</span> and OutVariable<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab Example</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">PS</span>&gt; <span class="token punctuation">.</span><span class="token operator">/</span>list-passwords<span class="token punctuation">.</span>ps1
<span class="token comment"># </span>
<span class="token comment"># </span>
<span class="token comment"># </span>
<span class="token comment"># &quot;4yE=[mu&quot;Az|IE@   PZ}E9Q&quot;&amp;?.!%49\`   zU3[E7\`xA)(6W_3   :wd&#39;a(O@fr}.Z8=</span>
<span class="token comment"># ...</span>
<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab Script Content</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token comment">&lt;#
.SYNOPSIS
	Lists random passwords
.DESCRIPTION
	This PowerShell script lists random passwords.
.PARAMETER PasswordLength
	Specifies the length of the password
.PARAMETER Columns
	Specifies the number of columns
.PARAMETER Rows
	Specifies the number of rows
.EXAMPLE
	PS&gt; ./list-passwords.ps1

	&quot;4yE=[mu&quot;Az|IE@   PZ}E9Q&quot;&amp;?.!%49\`   zU3[E7\`xA)(6W_3   :wd&#39;a(O@fr}.Z8=
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#&gt;</span>

<span class="token keyword">param</span><span class="token punctuation">(</span><span class="token namespace">[int]</span><span class="token variable">$PasswordLength</span> = 15<span class="token punctuation">,</span> <span class="token namespace">[int]</span><span class="token variable">$Columns</span> = 6<span class="token punctuation">,</span> <span class="token namespace">[int]</span><span class="token variable">$Rows</span> = 30<span class="token punctuation">)</span>

<span class="token variable">$MinCharCode</span> = 33
<span class="token variable">$MaxCharCode</span> = 126

<span class="token keyword">try</span> <span class="token punctuation">{</span>
	<span class="token function">write-output</span> <span class="token string">&quot;&quot;</span>
	<span class="token variable">$Generator</span> = <span class="token function">New-Object</span> System<span class="token punctuation">.</span>Random
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$j</span> = 0<span class="token punctuation">;</span> <span class="token variable">$j</span> <span class="token operator">-lt</span> <span class="token variable">$Rows</span><span class="token punctuation">;</span> <span class="token variable">$j</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token variable">$Line</span> = <span class="token string">&quot;&quot;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$k</span> = 0<span class="token punctuation">;</span> <span class="token variable">$k</span> <span class="token operator">-lt</span> <span class="token variable">$Columns</span><span class="token punctuation">;</span> <span class="token variable">$k</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> = 0<span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">-lt</span> <span class="token variable">$PasswordLength</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token variable">$Line</span> <span class="token operator">+=</span> <span class="token namespace">[char]</span><span class="token variable">$Generator</span><span class="token punctuation">.</span>next<span class="token punctuation">(</span><span class="token variable">$MinCharCode</span><span class="token punctuation">,</span><span class="token variable">$MaxCharCode</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			<span class="token variable">$Line</span> <span class="token operator">+=</span> <span class="token string">&quot;   &quot;</span>
		<span class="token punctuation">}</span>
		<span class="token function">write-output</span> <span class="token string">&quot;<span class="token variable">$Line</span>&quot;</span>
	<span class="token punctuation">}</span>
	<span class="token function">write-output</span> <span class="token string">&quot;&quot;</span>
	<span class="token keyword">exit</span> 0 <span class="token comment"># success</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
	<span class="token string">&quot;⚠️ Error in line <span class="token function">$<span class="token punctuation">(</span><span class="token variable">$_</span><span class="token punctuation">.</span>InvocationInfo<span class="token punctuation">.</span>ScriptLineNumber<span class="token punctuation">)</span></span>: <span class="token function">$<span class="token punctuation">(</span><span class="token variable">$Error</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span><span class="token punctuation">)</span></span>&quot;</span>
	<span class="token keyword">exit</span> 1
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><hr>`,10),Ds={id:"list-pins-ps1",tabindex:"-1"},Ms={class:"header-anchor",href:"#list-pins-ps1"},Ns=n("code",null,"list-pins.ps1",-1),Vs=n("p",null,"This PowerShell script lists random PIN's.",-1),qs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-pins"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("PinLength"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Columns"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Rows"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`PinLength <Int32>
    Specifies the PIN length
    
    Required?                    false
    Position?                    1
    Default value                5
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`Columns <Int32>
    Specifies the number of columns
    
    Required?                    false
    Position?                    2
    Default value                12
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`Rows <Int32>
    Specifies the number of rows
    
    Required?                    false
    Position?                    3
    Default value                30
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ws=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-pins"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),zs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists random PIN's
.DESCRIPTION
	This PowerShell script lists random PIN's.
.PARAMETER PinLength
	Specifies the PIN length
.PARAMETER Columns
	Specifies the number of columns
.PARAMETER Rows
	Specifies the number of rows
.EXAMPLE
	PS> ./list-pins.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$PinLength"),s(" = 5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Columns"),s(" = 12"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Rows"),s(" = 30"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token variable"},"$Generator"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s(`Random
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$j"),s(" = 0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$j"),s(),n("span",{class:"token operator"},"-lt"),s(),n("span",{class:"token variable"},"$Rows"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Line"),s(" = "),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$k"),s(" = 0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$k"),s(),n("span",{class:"token operator"},"-lt"),s(),n("span",{class:"token variable"},"$Columns"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$k"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$i"),s(" = 0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"-lt"),s(),n("span",{class:"token variable"},"$PinLength"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token variable"},"$Line"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[char]"),n("span",{class:"token variable"},"$Generator"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},"("),s("48"),n("span",{class:"token punctuation"},","),s("57"),n("span",{class:"token punctuation"},")"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token variable"},"$Line"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token string"},'"   "'),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token variable"},"$Line"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Fs=n("hr",null,null,-1),Us={id:"list-sql-tables-ps1",tabindex:"-1"},js={class:"header-anchor",href:"#list-sql-tables-ps1"},Bs=n("code",null,"list-sql-tables.ps1",-1),Gs=d(`<p>This PowerShell script lists all tables in a SQL server database and exports the list as CSV.</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">Install-Module</span> InvokeQuery
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Run the above command if you do not have this module.</p>`,3),Hs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-sql-tables"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("server"),n("span",{class:"token punctuation"},"]"),s(" <Object> "),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("database"),n("span",{class:"token punctuation"},"]"),s(" <Object> "),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("username"),n("span",{class:"token punctuation"},"]"),s(" <Object> "),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("password"),n("span",{class:"token punctuation"},"]"),s(" <Object> "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`server <Object>
    
    Required?                    true
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`database <Object>
    
    Required?                    true
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`username <Object>
    
    Required?                    true
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`password <Object>
    
    Required?                    true
    Position?                    4
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ys=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-sql-tables"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ks=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all tables of a SQL server database 
.DESCRIPTION
	This PowerShell script lists all tables in a SQL server database and exports the list as CSV.
	Install-Module InvokeQuery
	Run the above command if you do not have this module.
.EXAMPLE
	PS> ./list-sql-tables.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),s(`
`),n("span",{class:"token namespace"},"[Parameter(Mandatory=$true)]"),n("span",{class:"token variable"},"$server"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token namespace"},"[Parameter(Mandatory=$true)]"),n("span",{class:"token variable"},"$database"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token namespace"},"[Parameter(Mandatory=$true)]"),n("span",{class:"token variable"},"$username"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token namespace"},"[Parameter(Mandatory=$true)]"),n("span",{class:"token variable"},"$password"),s(`
`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token variable"},"$secpasswd"),s(" = "),n("span",{class:"token function"},"ConvertTo-SecureString"),s(),n("span",{class:"token variable"},"$password"),s(),n("span",{class:"token operator"},"-"),s("AsPlainText "),n("span",{class:"token operator"},"-"),s(`Force
`),n("span",{class:"token variable"},"$creds"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("Management"),n("span",{class:"token punctuation"},"."),s("Automation"),n("span",{class:"token punctuation"},"."),s("PSCredential "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$username"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$secpasswd"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token variable"},"$csvfilepath"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('\\sqlserver_tables.csv"')]),s(`
`),n("span",{class:"token variable"},"$result"),s(" = "),n("span",{class:"token function"},"Invoke-SqlServerQuery"),s(),n("span",{class:"token operator"},"-"),s("Credential "),n("span",{class:"token variable"},"$creds"),s(),n("span",{class:"token operator"},"-"),s("ConnectionTimeout 10000 "),n("span",{class:"token operator"},"-"),s("Database "),n("span",{class:"token variable"},"$database"),s(),n("span",{class:"token operator"},"-"),s("Server "),n("span",{class:"token variable"},"$server"),s(),n("span",{class:"token operator"},"-"),s("Sql "),n("span",{class:"token string"},[s('"SELECT TABLE_NAME FROM '),n("span",{class:"token variable"},"$database"),s(`.INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'"`)]),s(),n("span",{class:"token operator"},"-"),s(`CommandTimeout 10000
`),n("span",{class:"token variable"},"$result"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Export-Csv"),s(),n("span",{class:"token variable"},"$csvfilepath"),s(),n("span",{class:"token operator"},"-"),s(`NoTypeInformation
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Xs=n("hr",null,null,-1),Qs={id:"list-weather-ps1",tabindex:"-1"},Js={class:"header-anchor",href:"#list-weather-ps1"},Zs=n("code",null,"list-weather.ps1",-1),na=n("p",null,"This PowerShell script lists the hourly weather report in a nice table.",-1),sa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-weather"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Location"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Location <String>
    Specifies the location to use `),n("span",{class:"token punctuation"},"("),s("determined automatically per default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),aa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-weather"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# TODAY   🌡°C  ☂️mm  💧  💨km/h ☀️UV  ☁️  👁km  at Munich (Bayern, Germany)"),s(`
`),n("span",{class:"token comment"},"#  0°°   -2°   0.0   93%   ↗ 6   1    21%  10  🌙 clear"),s(`
`),n("span",{class:"token comment"},"# ..."),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ea=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the weather report
.DESCRIPTION
	This PowerShell script lists the hourly weather report in a nice table.
.PARAMETER Location
	Specifies the location to use (determined automatically per default)
.EXAMPLE
	PS> ./list-weather.ps1
	TODAY   🌡°C  ☂️mm  💧  💨km/h ☀️UV  ☁️  👁km  at Munich (Bayern, Germany)
	 0°°   -2°   0.0   93%   ↗ 6   1    21%  10  🌙 clear
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Location"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"# empty means determine automatically"),s(`

`),n("span",{class:"token keyword"},"function"),s(" GetDescription "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Text"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"switch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Text"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},'"Blizzard"'),s("			"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"❄️ blizzard ⚠️"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Blowing snow"'),s("			"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"❄️ blowing snow ⚠️"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Clear"'),s("				"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"🌙 clear"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Cloudy"'),s("			"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"☁️ cloudy"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Fog"'),s("				"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"🌫  fog"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Freezing fog"'),s("			"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"🌫  freezing fog"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Heavy snow"'),s("			"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"❄️ heavy snow ⚠️"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Light drizzle"'),s("			"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"💧 light drizzle"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Light freezing rain"'),s("		"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"💧 light freezing rain ⚠️"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Light rain"'),s("			"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"💧 light rain"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Light rain shower"'),s("		"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"💧 light rain shower"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Light sleet"'),s("			"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"❄️ light sleet"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Light sleet showers"'),s("		"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"❄️ light sleet showers"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Light snow"'),s("			"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"❄️ light snow"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Light snow showers"'),s("		"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"❄️ light snow showers"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Moderate or heavy freezing rain"'),n("span",{class:"token punctuation"},"{"),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"💧 moderate or heavy freezing rain ⚠️"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Moderate or heavy rain shower"'),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"💧 moderate or heavy rain shower ⚠️"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Moderate or heavy snow showers"'),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"❄️ moderate or heavy snow showers ⚠️"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Moderate rain"'),s("			"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"💧 moderate rain"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Moderate rain at times"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"💧 moderate rain at times"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Moderate snow"'),s("			"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"❄️ moderate snow"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Mist"'),s("				"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"🌫  misty"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Overcast"'),s("			"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"☁️ overcast"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Partly cloudy"'),s("			"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"⛅️partly cloudy"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Patchy heavy snow"'),s("		"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"❄️ patchy heavy snow ⚠️"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Patchy light drizzle"'),s("     	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"💧 patchy light drizzle"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Patchy light rain"'),s("     	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"💧 patchy light rain"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Patchy light rain with thunder"'),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"💧 patchy light rain with thunder"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Patchy light snow"'),s("		"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"❄️ patchy light snow"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Patchy moderate snow"'),s("		"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"❄️ patchy moderate snow"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Patchy rain possible"'),s("  	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"💧 patchy rain possible"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Patchy snow possible"'),s("  	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"❄️ patchy snow possible"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Sunny"'),s("				"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"☀️ sunny"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"Thundery outbreaks possible"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"⚡️thundery outbreaks possible"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	default				`),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Text"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(" GetWindDir "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Text"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"switch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Text"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},'"NW"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"↘"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"NNW"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"↓"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"N"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"↓"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"NNE"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"↓"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"NE"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"↙"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"ENE"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"←"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"E"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"←"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"ESE"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"←"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"SE"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"↖"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"SSE"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"↑"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"S"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"↑"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"SSW"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"↑"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"SW"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"↗"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"WSW"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"→"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"W"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"→"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"WNW"'),s("	"),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"→"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	default `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Text"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},'"⏳ Loading weather data from http://wttr.in ..."'),s(`
	`),n("span",{class:"token variable"},"$Weather"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Invoke-WebRequest"),s(),n("span",{class:"token operator"},"-"),s("URI http:"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"/"),s("wttr"),n("span",{class:"token punctuation"},"."),s("in/$"),n("span",{class:"token punctuation"},"{"),s("Location"),n("span",{class:"token punctuation"},"}"),s("?format=j1 "),n("span",{class:"token operator"},"-"),s("userAgent "),n("span",{class:"token string"},'"curl"'),s(),n("span",{class:"token operator"},"-"),s("useBasicParsing"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Content "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"ConvertFrom-Json"),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token operator"},"-"),s("completed "),n("span",{class:"token string"},'"."'),s(`
	`),n("span",{class:"token variable"},"$Area"),s(" = "),n("span",{class:"token variable"},"$Weather"),n("span",{class:"token punctuation"},"."),s("nearest_area"),n("span",{class:"token punctuation"},"."),s("areaName"),n("span",{class:"token punctuation"},"."),s(`value
	`),n("span",{class:"token variable"},"$Region"),s(" = "),n("span",{class:"token variable"},"$Weather"),n("span",{class:"token punctuation"},"."),s("nearest_area"),n("span",{class:"token punctuation"},"."),s("region"),n("span",{class:"token punctuation"},"."),s(`value
	`),n("span",{class:"token variable"},"$Country"),s(" = "),n("span",{class:"token variable"},"$Weather"),n("span",{class:"token punctuation"},"."),s("nearest_area"),n("span",{class:"token punctuation"},"."),s("country"),n("span",{class:"token punctuation"},"."),s(`value	
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Day"),s(` = 0
	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Hourly"),s(" in "),n("span",{class:"token variable"},"$Weather"),n("span",{class:"token punctuation"},"."),s("weather"),n("span",{class:"token punctuation"},"."),s("hourly"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Hour"),s(" = "),n("span",{class:"token variable"},"$Hourly"),n("span",{class:"token punctuation"},"."),s("time "),n("span",{class:"token operator"},"/"),s(` 100
		`),n("span",{class:"token variable"},"$Temp"),s(" = $"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Hourly"),n("span",{class:"token punctuation"},"."),s("tempC"),n("span",{class:"token punctuation"},"."),s("toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("PadLeft"),n("span",{class:"token punctuation"},"("),s("3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token variable"},"$Precip"),s(" = "),n("span",{class:"token variable"},"$Hourly"),n("span",{class:"token punctuation"},"."),s(`precipMM
		`),n("span",{class:"token variable"},"$Humidity"),s(" = $"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Hourly"),n("span",{class:"token punctuation"},"."),s("humidity"),n("span",{class:"token punctuation"},"."),s("toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("PadLeft"),n("span",{class:"token punctuation"},"("),s("3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token variable"},"$Pressure"),s(" = "),n("span",{class:"token variable"},"$Hourly"),n("span",{class:"token punctuation"},"."),s(`pressure
		`),n("span",{class:"token variable"},"$WindSpeed"),s(" = $"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Hourly"),n("span",{class:"token punctuation"},"."),s("windspeedKmph"),n("span",{class:"token punctuation"},"."),s("toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("PadLeft"),n("span",{class:"token punctuation"},"("),s("2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token variable"},"$WindDir"),s(" = GetWindDir "),n("span",{class:"token variable"},"$Hourly"),n("span",{class:"token punctuation"},"."),s(`winddir16Point
		`),n("span",{class:"token variable"},"$UV"),s(" = "),n("span",{class:"token variable"},"$Hourly"),n("span",{class:"token punctuation"},"."),s(`uvIndex
		`),n("span",{class:"token variable"},"$Clouds"),s(" = $"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Hourly"),n("span",{class:"token punctuation"},"."),s("cloudcover"),n("span",{class:"token punctuation"},"."),s("toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("PadLeft"),n("span",{class:"token punctuation"},"("),s("3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token variable"},"$Visib"),s(" = $"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Hourly"),n("span",{class:"token punctuation"},"."),s("visibility"),n("span",{class:"token punctuation"},"."),s("toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("PadLeft"),n("span",{class:"token punctuation"},"("),s("2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token variable"},"$Desc"),s(" = GetDescription "),n("span",{class:"token variable"},"$Hourly"),n("span",{class:"token punctuation"},"."),s("weatherDesc"),n("span",{class:"token punctuation"},"."),s(`value
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Hour"),s(),n("span",{class:"token operator"},"-eq"),s(" 0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Day"),s(),n("span",{class:"token operator"},"-eq"),s(" 0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token operator"},"-"),s("foregroundColor green "),n("span",{class:"token string"},[s('"TODAY   🌡°C  ☂️mm  💧  💨km/h  ☀️UV  ☁️   👁km   at '),n("span",{class:"token variable"},"$Area"),s(" ("),n("span",{class:"token variable"},"$Region"),s(", "),n("span",{class:"token variable"},"$Country"),s(')"')]),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Day"),s(),n("span",{class:"token operator"},"-eq"),s(" 1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token variable"},"$Date"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Date"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("AddDays"),n("span",{class:"token punctuation"},"("),s("1"),n("span",{class:"token punctuation"},")"),s(`
				`),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Weekday"),s(" = "),n("span",{class:"token variable"},"$Date"),n("span",{class:"token punctuation"},"."),s(`DayOfWeek
				`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token operator"},"-"),s("foregroundColor green "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Weekday"),n("span",{class:"token punctuation"},"."),s("toUpper"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(')"')]),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token variable"},"$Date"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Date"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("AddDays"),n("span",{class:"token punctuation"},"("),s("2"),n("span",{class:"token punctuation"},")"),s(`
				`),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Weekday"),s(" = "),n("span",{class:"token variable"},"$Date"),n("span",{class:"token punctuation"},"."),s(`DayOfWeek
				`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token operator"},"-"),s("foregroundColor green "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Weekday"),n("span",{class:"token punctuation"},"."),s("toUpper"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(')"')]),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token variable"},"$Day"),n("span",{class:"token operator"},"++"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Hour"),n("span",{class:"token punctuation"},"."),s("toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(").PadLeft(2))°°  "),n("span",{class:"token variable"},"$Temp"),s("°   "),n("span",{class:"token variable"},"$Precip"),s("  "),n("span",{class:"token variable"},"$Humidity"),s("%   "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$WindDir"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token variable"},"$WindSpeed"),s("    "),n("span",{class:"token variable"},"$UV"),s("   "),n("span",{class:"token variable"},"$Clouds"),s("%   "),n("span",{class:"token variable"},"$Visib"),s("   "),n("span",{class:"token variable"},"$Desc"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ta=n("hr",null,null,-1),la={id:"locate-city-ps1",tabindex:"-1"},ia={class:"header-anchor",href:"#locate-city-ps1"},oa=n("code",null,"locate-city.ps1",-1),ca=n("p",null,"This PowerShell script prints the geographic location of the given city.",-1),pa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("locate-city"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("City"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`City <String>
    Specifies the city to look `),n("span",{class:"token keyword"},"for"),s(`
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ra=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("locate-city"),n("span",{class:"token punctuation"},"."),s(`ps1 Paris
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ua=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Prints the geographic location of a city
.DESCRIPTION
	This PowerShell script prints the geographic location of the given city.
.PARAMETER City
	Specifies the city to look for
.EXAMPLE
	PS> ./locate-city.ps1 Paris
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$City"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$City"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$City"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter the city name"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},'"⏳Reading worldcities.csv..."'),s(`
	`),n("span",{class:"token variable"},"$Table"),s(" = "),n("span",{class:"token function"},"import-csv"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/../Data/worldcities.csv"')]),s(`

	`),n("span",{class:"token variable"},"$FoundOne"),s(` = 0
	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),s(" in "),n("span",{class:"token variable"},"$Table"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("city "),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token variable"},"$City"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$FoundOne"),s(` = 1
			`),n("span",{class:"token variable"},"$Country"),s(" = "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s(`country
			`),n("span",{class:"token variable"},"$Region"),s(" = "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s(`admin_name
			`),n("span",{class:"token variable"},"$Lat"),s(" = "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s(`lat
			`),n("span",{class:"token variable"},"$Long"),s(" = "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s(`lng
			`),n("span",{class:"token variable"},"$Population"),s(" = "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s(`population
			`),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},[s('"* '),n("span",{class:"token variable"},"$City"),s(" ("),n("span",{class:"token variable"},"$Country"),s(", "),n("span",{class:"token variable"},"$Region"),s(", population "),n("span",{class:"token variable"},"$Population"),s(") is at "),n("span",{class:"token variable"},"$Lat"),s("°N, "),n("span",{class:"token variable"},"$Long"),s('°W"')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FoundOne"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"write-error"),s(),n("span",{class:"token string"},[s('"City '),n("span",{class:"token variable"},"$City"),s(' not found"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ka=n("hr",null,null,-1),da={id:"locate-ipaddress-ps1",tabindex:"-1"},ma={class:"header-anchor",href:"#locate-ipaddress-ps1"},va=n("code",null,"locate-ipaddress.ps1",-1),ba=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("locate-ipaddress"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ha=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Prints the geo location of the given IP address
.DESCRIPTION
	This PowerShell script prints the geographic location of the given IP address.
.PARAMTER IPaddress
	Specifies the IP address
.EXAMPLE
	PS> ./locate-ipaddress.ps1 177.144.67.98
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$IPaddress"),s("= "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IPaddress"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$IPaddress"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter IP address to locate"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$result"),s(" = "),n("span",{class:"token function"},"Invoke-RestMethod"),s(),n("span",{class:"token operator"},"-"),s("Method Get "),n("span",{class:"token operator"},"-"),s("Uri "),n("span",{class:"token string"},[s('"http://ip-api.com/json/'),n("span",{class:"token variable"},"$IPaddress"),s('"')]),s(`
	`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token variable"},"$result"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ga=n("hr",null,null,-1),wa={id:"moon-ps1",tabindex:"-1"},fa={class:"header-anchor",href:"#moon-ps1"},Sa=n("code",null,"moon.ps1",-1),Pa=n("p",null,"This PowerShell script prints the current moon phase.",-1),$a=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("moon"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ya=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("moon"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_a=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Prints the current moon phase
.DESCRIPTION
	This PowerShell script prints the current moon phase.
.EXAMPLE
	PS> ./moon.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Invoke-WebRequest"),s(" http:"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"/"),s("wttr"),n("span",{class:"token punctuation"},"."),s("in/Moon "),n("span",{class:"token operator"},"-"),s("userAgent "),n("span",{class:"token string"},'"curl"'),s(),n("span",{class:"token operator"},"-"),s("useBasicParsing"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Content
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Aa=n("hr",null,null,-1),Ea={id:"scan-ports-ps1",tabindex:"-1"},xa={class:"header-anchor",href:"#scan-ports-ps1"},Ca=n("code",null,"scan-ports.ps1",-1),Ta=n("p",null,"This PowerShell script scans the network for open or closed ports.",-1),Ia=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("scan-ports"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),La=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`scan-ports
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ra=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Scans the network for open/closed ports
.DESCRIPTION
	This PowerShell script scans the network for open or closed ports.
.EXAMPLE
	PS> ./scan-ports
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token variable"},"$network"),s(" = "),n("span",{class:"token string"},'"192.168.178"'),s(`
`),n("span",{class:"token variable"},"$port"),s(` = 8080
`),n("span",{class:"token variable"},"$range"),s(" = 1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`254
`),n("span",{class:"token variable"},"$ErrorActionPreference"),s("= "),n("span",{class:"token string"},'"silentlycontinue"'),s(`

`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$add"),s(" in "),n("span",{class:"token variable"},"$range"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$ip"),s(" = "),n("span",{class:"token string"},'"{0}.{1}"'),s(),n("span",{class:"token operator"},"-"),s("F "),n("span",{class:"token variable"},"$network"),n("span",{class:"token punctuation"},","),n("span",{class:"token variable"},"$add"),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},[s('"⏳Scanning IP '),n("span",{class:"token variable"},"$ip"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("PercentComplete "),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$add"),n("span",{class:"token operator"},"/"),n("span",{class:"token variable"},"$range"),n("span",{class:"token punctuation"},"."),s("Count"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"*"),s("100"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Connection"),s(),n("span",{class:"token operator"},"-"),s("BufferSize 32 "),n("span",{class:"token operator"},"-"),s("Count 1 "),n("span",{class:"token operator"},"-"),s("quiet "),n("span",{class:"token operator"},"-"),s("ComputerName "),n("span",{class:"token variable"},"$ip"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$socket"),s(" = "),n("span",{class:"token function"},"new-object"),s(" System"),n("span",{class:"token punctuation"},"."),s("Net"),n("span",{class:"token punctuation"},"."),s("Sockets"),n("span",{class:"token punctuation"},"."),s("TcpClient"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$ip"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$port"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$socket"),n("span",{class:"token punctuation"},"."),s("Connected"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token string"},[s('"TCP port '),n("span",{class:"token variable"},"$port"),s(" at "),n("span",{class:"token variable"},"$ip"),s(' is open"')]),s(`
			`),n("span",{class:"token variable"},"$socket"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token string"},[s('"TCP port '),n("span",{class:"token variable"},"$port"),s(" at "),n("span",{class:"token variable"},"$ip"),s(' is not open"')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Oa=n("hr",null,null,-1),Da={id:"send-tcp-ps1",tabindex:"-1"},Ma={class:"header-anchor",href:"#send-tcp-ps1"},Na=n("code",null,"send-tcp.ps1",-1),Va=n("p",null,"This PowerShell script sends a TCP message to the given IP address and port.",-1),qa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"send-tcp"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("TargetIP"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("TargetPort"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Message"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`TargetIP <String>
    Specifies the target IP address
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`TargetPort <Int32>
    Specifies the target port number
    
    Required?                    false
    Position?                    2
    Default value                0
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`Message <String>
    Specifies the message to send
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Wa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"send-tcp"),s(" 192"),n("span",{class:"token punctuation"},"."),s("168"),n("span",{class:"token punctuation"},"."),s("100"),n("span",{class:"token punctuation"},"."),s("100 8080 "),n("span",{class:"token string"},'"TEST"'),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),za=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sends a TCP message to an IP address and port
.DESCRIPTION
	This PowerShell script sends a TCP message to the given IP address and port.
.PARAMETER TargetIP
	Specifies the target IP address
.PARAMETER TargetPort
	Specifies the target port number
.PARAMETER Message
	Specifies the message to send
.EXAMPLE
	PS> ./send-tcp 192.168.100.100 8080 "TEST"
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$TargetIP"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$TargetPort"),s(" = 0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Message"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetIP"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$TargetIP"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter target IP address"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetPort"),s(),n("span",{class:"token operator"},"-eq"),s(" 0 "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$TargetPort"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter target port"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Message"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Message"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter message to send"'),s(),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token variable"},"$IP"),s(" = "),n("span",{class:"token namespace"},"[System.Net.Dns]"),s("::GetHostAddresses"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetIP"),n("span",{class:"token punctuation"},")"),s(` 
        `),n("span",{class:"token variable"},"$Address"),s(" = "),n("span",{class:"token namespace"},"[System.Net.IPAddress]"),s("::Parse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IP"),n("span",{class:"token punctuation"},")"),s(` 
        `),n("span",{class:"token variable"},"$Socket"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("Net"),n("span",{class:"token punctuation"},"."),s("Sockets"),n("span",{class:"token punctuation"},"."),s("TCPClient"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Address"),n("span",{class:"token punctuation"},","),n("span",{class:"token variable"},"$TargetPort"),n("span",{class:"token punctuation"},")"),s(` 
        `),n("span",{class:"token variable"},"$Stream"),s(" = "),n("span",{class:"token variable"},"$Socket"),n("span",{class:"token punctuation"},"."),s("GetStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(` 
        `),n("span",{class:"token variable"},"$Writer"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("IO"),n("span",{class:"token punctuation"},"."),s("StreamWriter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Stream"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token variable"},"$Message"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token punctuation"},"{"),s(`
        	`),n("span",{class:"token variable"},"$Writer"),n("span",{class:"token punctuation"},"."),s("WriteLine"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},")"),s(`
        	`),n("span",{class:"token variable"},"$Writer"),n("span",{class:"token punctuation"},"."),s("Flush"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token variable"},"$Stream"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token variable"},"$Socket"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token string"},'"✔️  Done."'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Fa=n("hr",null,null,-1),Ua={id:"send-udp-ps1",tabindex:"-1"},ja={class:"header-anchor",href:"#send-udp-ps1"},Ba=n("code",null,"send-udp.ps1",-1),Ga=n("p",null,"This PowerShell script sends a UDP datagram message to an IP address and port.",-1),Ha=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"send-udp"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("TargetIP"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("TargetPort"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Message"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`TargetIP <String>
    Specifies the target IP address
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`TargetPort <Int32>
    Specifies the target port number
    
    Required?                    false
    Position?                    2
    Default value                0
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`Message <String>
    Specifies the message text to send
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ya=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"send-udp"),s(" 192"),n("span",{class:"token punctuation"},"."),s("168"),n("span",{class:"token punctuation"},"."),s("100"),n("span",{class:"token punctuation"},"."),s("100 8080 "),n("span",{class:"token string"},'"TEST"'),s(`
`),n("span",{class:"token comment"},"# ✔️  Done."),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ka=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sends a UDP datagram message to an IP address and port
.DESCRIPTION
	This PowerShell script sends a UDP datagram message to an IP address and port.
.PARAMETER TargetIP
	Specifies the target IP address
.PARAMETER TargetPort
	Specifies the target port number
.PARAMETER Message
	Specifies the message text to send
.EXAMPLE
	PS> ./send-udp 192.168.100.100 8080 "TEST"
	✔️  Done.
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$TargetIP"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$TargetPort"),s(" = 0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Message"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetIP"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$TargetIP"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter target IP address"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetPort"),s(),n("span",{class:"token operator"},"-eq"),s(" 0 "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$TargetPort"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter target port"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Message"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Message"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter message to send"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$IP"),s(" = "),n("span",{class:"token namespace"},"[System.Net.Dns]"),s("::GetHostAddresses"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetIP"),n("span",{class:"token punctuation"},")"),s(` 
	`),n("span",{class:"token variable"},"$Address"),s(" = "),n("span",{class:"token namespace"},"[System.Net.IPAddress]"),s("::Parse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IP"),n("span",{class:"token punctuation"},")"),s(` 
	`),n("span",{class:"token variable"},"$EndPoints"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("Net"),n("span",{class:"token punctuation"},"."),s("IPEndPoint"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Address"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$TargetPort"),n("span",{class:"token punctuation"},")"),s(` 
	`),n("span",{class:"token variable"},"$Socket"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("Net"),n("span",{class:"token punctuation"},"."),s("Sockets"),n("span",{class:"token punctuation"},"."),s(`UDPClient 
	`),n("span",{class:"token variable"},"$EncodedText"),s(" = "),n("span",{class:"token namespace"},"[Text.Encoding]"),s("::ASCII"),n("span",{class:"token punctuation"},"."),s("GetBytes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Message"),n("span",{class:"token punctuation"},")"),s(` 
	`),n("span",{class:"token variable"},"$SendMessage"),s(" = "),n("span",{class:"token variable"},"$Socket"),n("span",{class:"token punctuation"},"."),s("Send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$EncodedText"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$EncodedText"),n("span",{class:"token punctuation"},"."),s("Length"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$EndPoints"),n("span",{class:"token punctuation"},")"),s(` 
	`),n("span",{class:"token variable"},"$Socket"),n("span",{class:"token punctuation"},"."),s("Close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(` 

	`),n("span",{class:"token string"},'"✔️  Done."'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Xa=n("hr",null,null,-1),Qa={id:"set-timer-ps1",tabindex:"-1"},Ja={class:"header-anchor",href:"#set-timer-ps1"},Za=n("code",null,"set-timer.ps1",-1),ne=n("p",null,"This PowerShell script sets a timer for a countdown.",-1),se=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"set-timer"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Seconds"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Seconds <Int32>
    Specifies the number of seconds
    
    Required?                    false
    Position?                    1
    Default value                0
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ae=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"set-timer"),s(` 60
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ee=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sets a timer for a countdown
.DESCRIPTION
	This PowerShell script sets a timer for a countdown.
.PARAMETER Seconds
	Specifies the number of seconds
.EXAMPLE
	PS> ./set-timer 60
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Seconds"),s(" = 0"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Seconds"),s(),n("span",{class:"token operator"},"-eq"),s(" 0 "),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Seconds"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter number of seconds"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$i"),s(" = "),n("span",{class:"token variable"},"$Seconds"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"-gt"),s(" 0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Clear-Host"),s(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"write-big"),s(),n("span",{class:"token string"},[s('"T-'),n("span",{class:"token variable"},"$i"),s(' seconds"')]),s(`
		`),n("span",{class:"token function"},"Start-Sleep"),s(),n("span",{class:"token operator"},"-"),s(`seconds 1
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},[s('"✔️ '),n("span",{class:"token variable"},"$Seconds"),s(' seconds countdown finished"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),te=n("hr",null,null,-1),le={id:"simulate-presence-ps1",tabindex:"-1"},ie={class:"header-anchor",href:"#simulate-presence-ps1"},oe=n("code",null,"simulate-presence.ps1",-1),ce=n("p",null,"This PowerShell script simulates the human presence against burglars. It switches a Shelly1 device on and off.",-1),pe=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("simulate-presence"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("IPaddress"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`IPaddress <String>
    Specifies the IP address of the Shelly1 device
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),re=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("simulate-presence 192"),n("span",{class:"token punctuation"},"."),s("168"),n("span",{class:"token punctuation"},"."),s("100"),n("span",{class:"token punctuation"},"."),s(`100
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ue=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Simulate a human against burglars
.DESCRIPTION
	This PowerShell script simulates the human presence against burglars. It switches a Shelly1 device on and off.
.PARAMETER IPaddress
	Specifies the IP address of the Shelly1 device
.EXAMPLE
	PS> ./simulate-presence 192.168.100.100
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$IPaddress"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IPaddress"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$IPaddress"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter IP address of the Shelly1 device"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$i"),s(" = 0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"-lt"),s(" 1000"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		& `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/switch-shelly1.ps1"')]),s(),n("span",{class:"token variable"},"$IPaddress"),s(` on 0
		`),n("span",{class:"token function"},"Start-Sleep"),s(),n("span",{class:"token operator"},"-"),s("seconds 10 "),n("span",{class:"token comment"},"# on for 10 seconds"),s(`
		& `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/switch-shelly1.ps1"')]),s(),n("span",{class:"token variable"},"$IPaddress"),s(` off 0
		`),n("span",{class:"token function"},"Start-Sleep"),s(),n("span",{class:"token operator"},"-"),s("seconds 60 "),n("span",{class:"token comment"},"# off for 60 seconds"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"✔️ Done."'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ke=n("hr",null,null,-1),de={id:"start-ipfs-server-ps1",tabindex:"-1"},me={class:"header-anchor",href:"#start-ipfs-server-ps1"},ve=n("code",null,"start-ipfs-server.ps1",-1),be=n("p",null,"This PowerShell script starts a local IPFS server as a daemon process.",-1),he=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"start-ipfs"),n("span",{class:"token operator"},"-"),s("server"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ge=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"start-ipfs"),n("span",{class:"token operator"},"-"),s(`server
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),we=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Start an IPFS server 
.DESCRIPTION
	This PowerShell script starts a local IPFS server as a daemon process.
.EXAMPLE
	PS> ./start-ipfs-server
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1/5) Searching for IPFS executable...  "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& ipfs `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'ipfs' - make sure IPFS is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},`"⏳ (2/5) Init IPFS with profile 'lowpower'..."`),s(`
	& ipfs init `),n("span",{class:"token operator"},"--"),s(`profile lowpower

	`),n("span",{class:"token string"},'"⏳ (3/5) Configuring IPFS..."'),s(`
	& ipfs config Addresses`),n("span",{class:"token punctuation"},"."),s("API "),n("span",{class:"token operator"},"/"),s("ip4/0"),n("span",{class:"token punctuation"},"."),s("0"),n("span",{class:"token punctuation"},"."),s("0"),n("span",{class:"token punctuation"},"."),s(`0/tcp/5001
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'ipfs config Addresses.API' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	& ipfs config Addresses`),n("span",{class:"token punctuation"},"."),s("Gateway "),n("span",{class:"token operator"},"/"),s("ip4/0"),n("span",{class:"token punctuation"},"."),s("0"),n("span",{class:"token punctuation"},"."),s("0"),n("span",{class:"token punctuation"},"."),s(`0/tcp/8765
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'ipfs config Addresses.Gateway' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Hostname"),s(" = $"),n("span",{class:"token punctuation"},"("),s("hostname"),n("span",{class:"token punctuation"},")"),s(`
	& ipfs config `),n("span",{class:"token operator"},"--"),s("json API"),n("span",{class:"token punctuation"},"."),s("HTTPHeaders"),n("span",{class:"token punctuation"},"."),s("Access-Control-Allow-Origin "),n("span",{class:"token string"},`'[\\"http://miami:5001\\", \\"http://localhost:3000\\", \\"http://127.0.0.1:5001\\", \\"https://webui.ipfs.io\\"]'`),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'ipfs config Access-Control-Allow-Origin' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	& ipfs config `),n("span",{class:"token operator"},"--"),s("json API"),n("span",{class:"token punctuation"},"."),s("HTTPHeaders"),n("span",{class:"token punctuation"},"."),s("Access-Control-Allow-Methods "),n("span",{class:"token string"},`'[\\"PUT\\", \\"POST\\"]'`),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'ipfs config Access-Control-Allow-Methods' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	& ipfs config `),n("span",{class:"token operator"},"--"),s("json AutoNAT"),n("span",{class:"token punctuation"},"."),s("Throttle"),n("span",{class:"token punctuation"},"."),s("GlobalLimit 1 "),n("span",{class:"token comment"},"# (30 by default)"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'ipfs config AutoNAT.Throttle.GlobalLimit 1' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	& ipfs config `),n("span",{class:"token operator"},"--"),s("json AutoNAT"),n("span",{class:"token punctuation"},"."),s("Throttle"),n("span",{class:"token punctuation"},"."),s("PeerLimit 1 "),n("span",{class:"token comment"},"# (3 by default)"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'ipfs config AutoNAT.Throttle.PeerLimit 1' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (4/5) Increasing UDP receive buffer size..."'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& sudo sysctl `),n("span",{class:"token operator"},"-"),s("w net"),n("span",{class:"token punctuation"},"."),s("core"),n("span",{class:"token punctuation"},"."),s(`rmem_max=2500000
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'sysctl' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"⏳ (5/5) Starting IPFS daemon..."'),s(`
`),n("span",{class:"token comment"},"#	Start-Process nohup 'ipfs daemon'"),s(`
	`),n("span",{class:"token function"},"Start-Process"),s(" nohup "),n("span",{class:"token operator"},"-"),s("ArgumentList "),n("span",{class:"token string"},"'ipfs'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'daemon'"),s(),n("span",{class:"token operator"},"-"),s("RedirectStandardOutput "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s('/console.out"')]),s(),n("span",{class:"token operator"},"-"),s("RedirectStandardError "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$HOME"),s('/console.err"')]),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️  started IPFS server in '),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token string"},'"⚠️ NOTE: make sure your router does not block TCP/UDP port 4001 for IPv4 and IPv6"'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fe=n("hr",null,null,-1),Se={id:"translate-file-ps1",tabindex:"-1"},Pe={class:"header-anchor",href:"#translate-file-ps1"},$e=n("code",null,"translate-file.ps1",-1),ye=n("p",null,"This PowerShell script translates the given text file into another language and writes the output on the console.",-1),_e=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("translate-file"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("File"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("SourceLang"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("TargetLang"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`File <String>
    Specifies the path to the file to be translated
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`SourceLang <String>
    Specifies the source language
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`TargetLang <String>
    Specifies the target language
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ae=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("translate-file C:\\Memo"),n("span",{class:"token punctuation"},"."),s(`txt en de
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ee=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Translates a text file into another language 
.DESCRIPTION
	This PowerShell script translates the given text file into another language and writes the output on the console.
.PARAMETER File
	Specifies the path to the file to be translated
.PARAMETER SourceLang
	Specifies the source language
.PARAMETER TargetLang
	Specifies the target language
.EXAMPLE
	PS> ./translate-file C:\\Memo.txt en de
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$File"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$SourceLang"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$TargetLang"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" UseLibreTranslate "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Text"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$SourceLang"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$TargetLang"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$Parameters"),s(" = @"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"q"'),s("="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Text"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token string"},'"source"'),s("="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$SourceLang"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token string"},'"target"'),s("="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TargetLang"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$Result"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Invoke-WebRequest"),s(),n("span",{class:"token operator"},"-"),s("Uri https:"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"/"),s("libretranslate"),n("span",{class:"token punctuation"},"."),s("de/translate "),n("span",{class:"token operator"},"-"),s("Method POST "),n("span",{class:"token operator"},"-"),s("Body "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Parameters"),n("span",{class:"token punctuation"},"|"),n("span",{class:"token function"},"ConvertTo-Json"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("ContentType "),n("span",{class:"token string"},'"application/json"'),s(),n("span",{class:"token operator"},"-"),s("useBasicParsing"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("content "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"ConvertFrom-Json"),s(`
	`),n("span",{class:"token function"},"Start-Sleep"),s(),n("span",{class:"token operator"},"-"),s("seconds 6 "),n("span",{class:"token comment"},"# 10 requests per minute maximum"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token variable"},"$Result"),n("span",{class:"token punctuation"},"."),s(`translatedText
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$File"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$File"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter the file path"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$SourceLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$SourceLang"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter the source language"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$TargetLang"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter the target language"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Lines"),s(" = "),n("span",{class:"token function"},"Get-Content"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token variable"},"$File"),s(`
	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Line"),s(" in "),n("span",{class:"token variable"},"$Lines"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Line"),s('"')]),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Line"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Line"),s('"')]),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Line"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Line"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"===*"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Line"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Line"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"---*"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Line"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Line"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"!*(/*)"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Line"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token variable"},"$Result"),s(" = UseLibreTranslate "),n("span",{class:"token variable"},"$Line"),s(),n("span",{class:"token variable"},"$SourceLang"),s(),n("span",{class:"token variable"},"$TargetLang"),s(`
		`),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token variable"},"$Result"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xe=n("hr",null,null,-1),Ce={id:"translate-files-ps1",tabindex:"-1"},Te={class:"header-anchor",href:"#translate-files-ps1"},Ie=n("code",null,"translate-files.ps1",-1),Le=n("p",null,"This PowerShell script translates text files into multiple languages.",-1),Re=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("translate-files"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("filePattern"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`filePattern <String>
    Specifies the file pattern of the text file`),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),s(` to be translated
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Oe=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("translate-files C:\\Temp\\"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"."),s(`txt
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),De=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Translates text files
.DESCRIPTION
	This PowerShell script translates text files into multiple languages.
.PARAMETER filePattern
	Specifies the file pattern of the text file(s) to be translated
.EXAMPLE
	PS> ./translate-files C:\\Temp\\*.txt
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$filePattern"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" DetectSourceLang "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Filename"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Filename"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"*-Deutsch*"'),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"de"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Filename"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"*-English*"'),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"en"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Filename"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"*-Español*"'),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"es"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Filename"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"*-Français*"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"fr"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Filename"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"*-Portuguese*"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"pt"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"unknown"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(" TranslateFilename "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Filename"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$SourceLang"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$TargetLang"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$SourceLanguage"),s(" = "),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$SourceLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"de"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$SourceLanguage"),s(" = "),n("span",{class:"token string"},'"-Deutsch"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$SourceLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"en"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$SourceLanguage"),s(" = "),n("span",{class:"token string"},'"-English"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$SourceLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"es"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$SourceLanguage"),s(" = "),n("span",{class:"token string"},'"-Español"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$SourceLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"fr"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$SourceLanguage"),s(" = "),n("span",{class:"token string"},'"-Français"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$SourceLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"pt"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$SourceLanguage"),s(" = "),n("span",{class:"token string"},'"-Portuguese"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$TargetLanguage"),s(" = "),n("span",{class:"token string"},'"-Unknown"'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"ar"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$TargetLanguage"),s(" = "),n("span",{class:"token string"},'"-Arabic"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"de"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$TargetLanguage"),s(" = "),n("span",{class:"token string"},'"-Deutsch"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"en"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$TargetLanguage"),s(" = "),n("span",{class:"token string"},'"-English"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"es"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$TargetLanguage"),s(" = "),n("span",{class:"token string"},'"-Español"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"fr"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$TargetLanguage"),s(" = "),n("span",{class:"token string"},'"-Français"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"pt"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$TargetLanguage"),s(" = "),n("span",{class:"token string"},'"-Portuguese"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token variable"},"$Filename"),n("span",{class:"token punctuation"},"."),s("replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$SourceLanguage"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$TargetLanguage"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$filePattern"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$filePattern"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter the file pattern of the text file(s) to be translated"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$TargetLanguages"),s(" = "),n("span",{class:"token string"},'"ar"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"zh"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"fr"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"de"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"hi"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"ga"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"it"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"ja"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"ko"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"pt"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"ru"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"es"'),s(`
	`),n("span",{class:"token variable"},"$SourceFiles"),s(" = "),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$filePattern"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$SourceFile"),s(" in "),n("span",{class:"token variable"},"$SourceFiles"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$SourceLang"),s(" = DetectSourceLang "),n("span",{class:"token variable"},"$SourceFile"),s(`
		`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetLang"),s(" in "),n("span",{class:"token variable"},"$TargetLanguages"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$SourceLang"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token variable"},"$TargetLang"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"Translating '),n("span",{class:"token variable"},"$SourceFile"),s(" from "),n("span",{class:"token variable"},"$SourceLang"),s(" to "),n("span",{class:"token variable"},"$TargetLang"),s(' ..."')]),s(`
			`),n("span",{class:"token variable"},"$TargetFile"),s(" = TranslateFilename "),n("span",{class:"token variable"},"$SourceFile"),s(),n("span",{class:"token variable"},"$SourceLang"),s(),n("span",{class:"token variable"},"$TargetLang"),s(`
			`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TargetFile"),s('"')]),s(`
			& `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/translate-file.ps1"')]),s(),n("span",{class:"token variable"},"$SourceFile"),s(),n("span",{class:"token variable"},"$SourceLang"),s(),n("span",{class:"token variable"},"$TargetLang"),s(" > "),n("span",{class:"token variable"},"$TargetFile"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Me=n("hr",null,null,-1),Ne={id:"translate-text-ps1",tabindex:"-1"},Ve={class:"header-anchor",href:"#translate-text-ps1"},qe=n("code",null,"translate-text.ps1",-1),We=n("p",null,"This PowerShell script translates text into other languages.",-1),ze=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("translate-text"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Text"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("SourceLangCode"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("TargetLangCode"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Text <String>
    Specifies the text to translate
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`SourceLangCode <String>
    
    Required?                    false
    Position?                    2
    Default value                en
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`TargetLangCode <String>
    
    Required?                    false
    Position?                    3
    Default value                all
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Fe=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("translate-text "),n("span",{class:"token string"},'"Hello World"'),s(` en all

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ue=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Translates text into other languages
.DESCRIPTION
	This PowerShell script translates text into other languages.
.PARAMETER Text
	Specifies the text to translate
.PARAMETER SourceLang
	Specifies the source language (English by default)
.PARAMETER TargetLang
	Specifies the target language (all by default)
.EXAMPLE
	PS> ./translate-text "Hello World" en all
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Text"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$SourceLangCode"),s(" = "),n("span",{class:"token string"},'"en"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$TargetLangCode"),s(" = "),n("span",{class:"token string"},'"all"'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" UseLibreTranslate "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Text"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$SourceLangCode"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$TargetLangCode"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$Parameters"),s(" = @"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"q"'),s("="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Text"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token string"},'"source"'),s("="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$SourceLangCode"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token string"},'"target"'),s("="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TargetLangCode"),s('"')]),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$Result"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Invoke-WebRequest"),s(),n("span",{class:"token operator"},"-"),s("Uri https:"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"/"),s("libretranslate"),n("span",{class:"token punctuation"},"."),s("de/translate "),n("span",{class:"token operator"},"-"),s("Method POST "),n("span",{class:"token operator"},"-"),s("Body "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Parameters"),n("span",{class:"token punctuation"},"|"),n("span",{class:"token function"},"ConvertTo-Json"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("ContentType "),n("span",{class:"token string"},'"application/json"'),s(),n("span",{class:"token operator"},"-"),s("useBasicParsing"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("content "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"ConvertFrom-Json"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token variable"},"$Result"),n("span",{class:"token punctuation"},"."),s(`translatedText
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Text"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Text"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter the text to translate"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetLangCode"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"all"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$TargetLangCodes"),s(" = "),n("span",{class:"token string"},'"ar"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"de"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"es"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"fr"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"ga"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"hi"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"it"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"ja"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"ko"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"pt"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"ru"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"zh"'),s(`
		`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetLangCode"),s(" in "),n("span",{class:"token variable"},"$TargetLangCodes"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$Translation"),s(" = UseLibreTranslate "),n("span",{class:"token variable"},"$Text"),s(),n("span",{class:"token variable"},"$SourceLangCode"),s(),n("span",{class:"token variable"},"$TargetLangCode"),s(`
			`),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TargetLangCode"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token variable"},"$Translation"),s('"')]),s(`
			`),n("span",{class:"token function"},"Start-Sleep"),s(),n("span",{class:"token operator"},"-"),s("seconds 6 "),n("span",{class:"token comment"},"# 10 requests maximum per minute"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Translation"),s(" = UseLibreTranslate "),n("span",{class:"token variable"},"$Text"),s(),n("span",{class:"token variable"},"$SourceLangCode"),s(),n("span",{class:"token variable"},"$TargetLangCode"),s(`
		`),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Translation"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),je=n("hr",null,null,-1),Be={id:"weather-ps1",tabindex:"-1"},Ge={class:"header-anchor",href:"#weather-ps1"},He=n("code",null,"weather.ps1",-1),Ye=n("p",null,"This PowerShell script lists the current weather forecast.",-1),Ke=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("weather"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("GeoLocation"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`GeoLocation <String>
    Specifies the geographic location to use
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Xe=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`weather Paris
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Qe=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the current weather forecast
.DESCRIPTION
	This PowerShell script lists the current weather forecast.
.PARAMETER GeoLocation
	Specifies the geographic location to use
.EXAMPLE
	PS> ./weather Paris
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$GeoLocation"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"# empty means determine automatically"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Invoke-WebRequest"),s(" http:"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"/"),s("wttr"),n("span",{class:"token punctuation"},"."),s("in/"),n("span",{class:"token variable"},"$GeoLocation"),s(),n("span",{class:"token operator"},"-"),s("userAgent "),n("span",{class:"token string"},'"curl"'),s(),n("span",{class:"token operator"},"-"),s("useBasicParsing"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Content
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Je=n("hr",null,null,-1),Ze={id:"weather-report-ps1",tabindex:"-1"},nt={class:"header-anchor",href:"#weather-report-ps1"},st=n("code",null,"weather-report.ps1",-1),at=n("p",null,"This PowerShell script lists the local weather report.",-1),et=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("weather-report"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("GeoLocation"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`GeoLocation <String>
    Specifies the geographic location to use `),n("span",{class:"token punctuation"},"("),s("determine automatically by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),tt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`weather-report Paris
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),lt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the local weather report
.DESCRIPTION
	This PowerShell script lists the local weather report.
.PARAMETER GeoLocation
	Specifies the geographic location to use (determine automatically by default)
.EXAMPLE
	PS> ./weather-report Paris
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$GeoLocation"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"# empty means determine automatically"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Invoke-WebRequest"),s(" http:"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"/"),s("v2d"),n("span",{class:"token punctuation"},"."),s("wttr"),n("span",{class:"token punctuation"},"."),s("in/"),n("span",{class:"token variable"},"$GeoLocation"),s(),n("span",{class:"token operator"},"-"),s("userAgent "),n("span",{class:"token string"},'"curl"'),s(),n("span",{class:"token operator"},"-"),s("useBasicParsing"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Content
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),it=n("hr",null,null,-1);function ot(m,ct){const i=k("FontIcon"),o=k("router-link"),c=k("VPCard"),u=k("Tabs"),v=k("TagLinks");return h(),g("div",null,[n("h1",S,[n("a",P,[n("span",null,w(m.$frontmatter.title)+" 관련",1)])]),n("nav",$,[n("ul",null,[n("li",null,[l(o,{to:"#add-memo-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("add-memo.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-ipv4-address-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("check-ipv4-address.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-ipv6-address-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("check-ipv6-address.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-mac-address-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("check-mac-address.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-subnet-mask-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("check-subnet-mask.ps1")]),_:1})]),n("li",null,[l(o,{to:"#display-time-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("display-time.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-environment-variables-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("list-environment-variables.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-emojis-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("list-emojis.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-exchange-rates-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("list-exchange-rates.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-memos-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("list-memos.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-mysql-tables-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("list-mysql-tables.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-news-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("list-news.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-os-releases-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("list-os-releases.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-os-updates-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("list-os-updates.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-passwords-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("list-passwords.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-pins-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("list-pins.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-sql-tables-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("list-sql-tables.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-weather-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("list-weather.ps1")]),_:1})]),n("li",null,[l(o,{to:"#locate-city-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("locate-city.ps1")]),_:1})]),n("li",null,[l(o,{to:"#locate-ipaddress-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("locate-ipaddress.ps1")]),_:1})]),n("li",null,[l(o,{to:"#moon-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("moon.ps1")]),_:1})]),n("li",null,[l(o,{to:"#scan-ports-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("scan-ports.ps1")]),_:1})]),n("li",null,[l(o,{to:"#send-tcp-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("send-tcp.ps1")]),_:1})]),n("li",null,[l(o,{to:"#send-udp-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("send-udp.ps1")]),_:1})]),n("li",null,[l(o,{to:"#set-timer-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("set-timer.ps1")]),_:1})]),n("li",null,[l(o,{to:"#simulate-presence-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("simulate-presence.ps1")]),_:1})]),n("li",null,[l(o,{to:"#start-ipfs-server-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("start-ipfs-server.ps1")]),_:1})]),n("li",null,[l(o,{to:"#translate-file-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("translate-file.ps1")]),_:1})]),n("li",null,[l(o,{to:"#translate-files-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("translate-files.ps1")]),_:1})]),n("li",null,[l(o,{to:"#translate-text-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("translate-text.ps1")]),_:1})]),n("li",null,[l(o,{to:"#weather-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("weather.ps1")]),_:1})]),n("li",null,[l(o,{to:"#weather-report-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-powershell"}),s("weather-report.ps1")]),_:1})])])]),y,n("h2",_,[n("a",A,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),E])])]),l(c,p(r({title:"add-memo.ps1",desc:"Adds the given memo text to $HOME/Memos.csv.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/add-memo.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),x,l(u,{id:"14",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[C]),tab1:a(({value:e,isActive:t})=>[T]),tab2:a(({value:e,isActive:t})=>[I]),_:1}),L,n("h2",R,[n("a",O,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),D])])]),l(c,p(r({title:"check-ipv4-address.ps1",desc:"Checks the given IPv4 address for validity.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-ipv4-address.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),M,l(u,{id:"33",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[N]),tab1:a(({value:e,isActive:t})=>[V]),tab2:a(({value:e,isActive:t})=>[q]),_:1}),W,n("h2",z,[n("a",F,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),U])])]),l(c,p(r({title:"check-ipv6-address.ps1",desc:"Checks the given IPv6 address for validity.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-ipv6-address.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),j,l(u,{id:"52",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[B]),tab1:a(({value:e,isActive:t})=>[G]),tab2:a(({value:e,isActive:t})=>[H]),_:1}),Y,n("h2",K,[n("a",X,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),Q])])]),l(c,p(r({title:"check-mac-address.ps1",desc:"Checks the given MAC address for validity.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-mac-address.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),J,Z,l(u,{id:"88",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[nn]),tab1:a(({value:e,isActive:t})=>[sn]),tab2:a(({value:e,isActive:t})=>[an]),_:1}),en,n("h2",tn,[n("a",ln,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),on])])]),l(c,p(r({title:"check-subnet-mask.ps1",desc:"Checks the given subnet mask for validity.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-subnet-mask.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),cn,l(u,{id:"107",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[pn]),tab1:a(({value:e,isActive:t})=>[rn]),tab2:a(({value:e,isActive:t})=>[un]),_:1}),kn,n("h2",dn,[n("a",mn,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),vn])])]),l(c,p(r({title:"display-time.ps1",desc:"Displays the current time for 10 seconds by default.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/display-time.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),bn,l(u,{id:"126",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[hn]),tab1:a(({value:e,isActive:t})=>[gn]),tab2:a(({value:e,isActive:t})=>[wn]),_:1}),fn,n("h2",Sn,[n("a",Pn,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),$n])])]),l(c,p(r({title:"list-environment-variables.ps1",desc:"Lists all environment variables.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-environment-variables.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),yn,l(u,{id:"145",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[_n]),tab1:a(({value:e,isActive:t})=>[An]),tab2:a(({value:e,isActive:t})=>[En]),_:1}),xn,n("h2",Cn,[n("a",Tn,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),In])])]),l(c,p(r({title:"list-emojis.ps1",desc:"Lists the emojis of Unicode 13.0.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-emojis.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ln,l(u,{id:"164",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Rn]),tab1:a(({value:e,isActive:t})=>[On]),tab2:a(({value:e,isActive:t})=>[Dn]),_:1}),Mn,n("h2",Nn,[n("a",Vn,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),qn])])]),l(c,p(r({title:"list-exchange-rates.ps1",desc:"Lists the current exchange rates for the given currency.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-exchange-rates.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Wn,l(u,{id:"183",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[zn]),tab1:a(({value:e,isActive:t})=>[Fn]),tab2:a(({value:e,isActive:t})=>[Un]),_:1}),jn,n("h2",Bn,[n("a",Gn,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),Hn])])]),l(c,p(r({title:"list-memos.ps1",desc:"Lists the memos at $HOME/Memos.csv.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-memos.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Yn,l(u,{id:"202",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Kn]),tab1:a(({value:e,isActive:t})=>[Xn]),tab2:a(({value:e,isActive:t})=>[Qn]),_:1}),Jn,n("h2",Zn,[n("a",ns,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),ss])])]),l(c,p(r({title:"list-mysql-tables.ps1",desc:"Lists the MySQL server tables.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-mysql-tables.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),as,l(u,{id:"221",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[es]),tab1:a(({value:e,isActive:t})=>[ts]),tab2:a(({value:e,isActive:t})=>[ls]),_:1}),is,n("h2",os,[n("a",cs,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),ps])])]),l(c,p(r({title:"list-news.ps1",desc:"Lists the latest news.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-news.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),rs,l(u,{id:"240",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[us]),tab1:a(({value:e,isActive:t})=>[ks]),tab2:a(({value:e,isActive:t})=>[ds]),_:1}),ms,n("h2",vs,[n("a",bs,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),hs])])]),l(c,p(r({title:"list-os-releases.ps1",desc:"Lists operating system releases and download URL.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-os-releases.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),gs,l(u,{id:"259",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ws]),tab1:a(({value:e,isActive:t})=>[fs]),tab2:a(({value:e,isActive:t})=>[Ss]),_:1}),Ps,n("h2",$s,[n("a",ys,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),_s])])]),l(c,p(r({title:"list-os-updates.ps1",desc:"Lists operating system updates.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-os-updates.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),As,l(u,{id:"278",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Es]),tab1:a(({value:e,isActive:t})=>[xs]),tab2:a(({value:e,isActive:t})=>[Cs]),_:1}),Ts,n("h2",Is,[n("a",Ls,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),Rs])])]),l(c,p(r({title:"list-passwords.ps1",desc:"Prints a list of random passwords.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-passwords.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Os,n("h2",Ds,[n("a",Ms,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),Ns])])]),l(c,p(r({title:"list-pins.ps1",desc:"Prints a list of random PIN's.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-pins.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Vs,l(u,{id:"323",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[qs]),tab1:a(({value:e,isActive:t})=>[Ws]),tab2:a(({value:e,isActive:t})=>[zs]),_:1}),Fs,n("h2",Us,[n("a",js,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),Bs])])]),l(c,p(r({title:"list-sql-tables.ps1",desc:"Lists the SQL server tables.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-sql-tables.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Gs,l(u,{id:"346",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Hs]),tab1:a(({value:e,isActive:t})=>[Ys]),tab2:a(({value:e,isActive:t})=>[Ks]),_:1}),Xs,n("h2",Qs,[n("a",Js,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),Zs])])]),l(c,p(r({title:"list-weather.ps1",desc:"Lists the hourly weather.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-weather.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),na,l(u,{id:"365",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[sa]),tab1:a(({value:e,isActive:t})=>[aa]),tab2:a(({value:e,isActive:t})=>[ea]),_:1}),ta,n("h2",la,[n("a",ia,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),oa])])]),l(c,p(r({title:"locate-city.ps1",desc:"Prints the geographic location of the given city.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/locate-city.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ca,l(u,{id:"384",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[pa]),tab1:a(({value:e,isActive:t})=>[ra]),tab2:a(({value:e,isActive:t})=>[ua]),_:1}),ka,n("h2",da,[n("a",ma,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),va])])]),l(c,p(r({title:"locate-ipaddress.ps1",desc:"Prints the geographic location of the given IP address.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/locate-ipaddress.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),l(u,{id:"400",data:[{id:"Parameters"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ba]),tab1:a(({value:e,isActive:t})=>[ha]),_:1}),ga,n("h2",wa,[n("a",fa,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),Sa])])]),l(c,p(r({title:"moon.ps1",desc:"Prints the current moon phase.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/moon.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Pa,l(u,{id:"416",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[$a]),tab1:a(({value:e,isActive:t})=>[ya]),tab2:a(({value:e,isActive:t})=>[_a]),_:1}),Aa,n("h2",Ea,[n("a",xa,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),Ca])])]),l(c,p(r({title:"scan-ports.ps1",desc:"Scans the network for open/closed ports.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/scan-ports.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ta,l(u,{id:"435",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ia]),tab1:a(({value:e,isActive:t})=>[La]),tab2:a(({value:e,isActive:t})=>[Ra]),_:1}),Oa,n("h2",Da,[n("a",Ma,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),Na])])]),l(c,p(r({title:"send-tcp.ps1",desc:"Sends a TCP message to the given IP address and port.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/send-tcp.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Va,l(u,{id:"454",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[qa]),tab1:a(({value:e,isActive:t})=>[Wa]),tab2:a(({value:e,isActive:t})=>[za]),_:1}),Fa,n("h2",Ua,[n("a",ja,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),Ba])])]),l(c,p(r({title:"send-udp.ps1",desc:"Sends a UDP datagram message to the given IP address and port.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/send-udp.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ga,l(u,{id:"473",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ha]),tab1:a(({value:e,isActive:t})=>[Ya]),tab2:a(({value:e,isActive:t})=>[Ka]),_:1}),Xa,n("h2",Qa,[n("a",Ja,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),Za])])]),l(c,p(r({title:"set-timer.ps1",desc:"Sets a timer for a countdown.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/set-timer.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ne,l(u,{id:"492",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[se]),tab1:a(({value:e,isActive:t})=>[ae]),tab2:a(({value:e,isActive:t})=>[ee]),_:1}),te,n("h2",le,[n("a",ie,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),oe])])]),l(c,p(r({title:"simulate-presence.ps1",desc:"Simulates the human presence against burglars.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/simulate-presence.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ce,l(u,{id:"511",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[pe]),tab1:a(({value:e,isActive:t})=>[re]),tab2:a(({value:e,isActive:t})=>[ue]),_:1}),ke,n("h2",de,[n("a",me,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),ve])])]),l(c,p(r({title:"start-ipfs-server.ps1",desc:"Starts a local IPFS server.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/start-ipfs-server.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),be,l(u,{id:"530",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[he]),tab1:a(({value:e,isActive:t})=>[ge]),tab2:a(({value:e,isActive:t})=>[we]),_:1}),fe,n("h2",Se,[n("a",Pe,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),$e])])]),l(c,p(r({title:"translate-file.ps1",desc:"Translates the given text file into other languages.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/translate-file.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ye,l(u,{id:"549",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[_e]),tab1:a(({value:e,isActive:t})=>[Ae]),tab2:a(({value:e,isActive:t})=>[Ee]),_:1}),xe,n("h2",Ce,[n("a",Te,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),Ie])])]),l(c,p(r({title:"translate-files.ps1",desc:"Translates the given text files into any supported language.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/translate-files.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Le,l(u,{id:"568",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Re]),tab1:a(({value:e,isActive:t})=>[Oe]),tab2:a(({value:e,isActive:t})=>[De]),_:1}),Me,n("h2",Ne,[n("a",Ve,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),qe])])]),l(c,p(r({title:"translate-text.ps1",desc:"Translates the given text in English into other languages.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/translate-text.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),We,l(u,{id:"587",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ze]),tab1:a(({value:e,isActive:t})=>[Fe]),tab2:a(({value:e,isActive:t})=>[Ue]),_:1}),je,n("h2",Be,[n("a",Ge,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),He])])]),l(c,p(r({title:"weather.ps1",desc:"Prints the current weather forecast.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/weather.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ye,l(u,{id:"606",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ke]),tab1:a(({value:e,isActive:t})=>[Xe]),tab2:a(({value:e,isActive:t})=>[Qe]),_:1}),Je,n("h2",Ze,[n("a",nt,[n("span",null,[l(i,{icon:"iconfont icon-powershell"}),st])])]),l(c,p(r({title:"weather-report.ps1",desc:"Prints the local weather report.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/weather-report.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),at,l(u,{id:"625",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[et]),tab1:a(({value:e,isActive:t})=>[tt]),tab2:a(({value:e,isActive:t})=>[lt]),_:1}),it,l(v)])}const ut=b(f,[["render",ot],["__file","various-pwsh-scripts.html.vue"]]),kt=JSON.parse('{"path":"/programming/pwsh/various-pwsh-scripts.html","title":"Various Powershell Scripts","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Various Powershell Scripts","description":"Powershell > Various Powershell Scripts","icon":"fas fa-cart-shopping","category":["Powershell","Various Powershell Scripts"],"tag":["powershell","pwsh","windows","script","useful-script","mysql"]},"headers":[{"level":2,"title":"add-memo.ps1","slug":"add-memo-ps1","link":"#add-memo-ps1","children":[]},{"level":2,"title":"check-ipv4-address.ps1","slug":"check-ipv4-address-ps1","link":"#check-ipv4-address-ps1","children":[]},{"level":2,"title":"check-ipv6-address.ps1","slug":"check-ipv6-address-ps1","link":"#check-ipv6-address-ps1","children":[]},{"level":2,"title":"check-mac-address.ps1","slug":"check-mac-address-ps1","link":"#check-mac-address-ps1","children":[]},{"level":2,"title":"check-subnet-mask.ps1","slug":"check-subnet-mask-ps1","link":"#check-subnet-mask-ps1","children":[]},{"level":2,"title":"display-time.ps1","slug":"display-time-ps1","link":"#display-time-ps1","children":[]},{"level":2,"title":"list-environment-variables.ps1","slug":"list-environment-variables-ps1","link":"#list-environment-variables-ps1","children":[]},{"level":2,"title":"list-emojis.ps1","slug":"list-emojis-ps1","link":"#list-emojis-ps1","children":[]},{"level":2,"title":"list-exchange-rates.ps1","slug":"list-exchange-rates-ps1","link":"#list-exchange-rates-ps1","children":[]},{"level":2,"title":"list-memos.ps1","slug":"list-memos-ps1","link":"#list-memos-ps1","children":[]},{"level":2,"title":"list-mysql-tables.ps1","slug":"list-mysql-tables-ps1","link":"#list-mysql-tables-ps1","children":[]},{"level":2,"title":"list-news.ps1","slug":"list-news-ps1","link":"#list-news-ps1","children":[]},{"level":2,"title":"list-os-releases.ps1","slug":"list-os-releases-ps1","link":"#list-os-releases-ps1","children":[]},{"level":2,"title":"list-os-updates.ps1","slug":"list-os-updates-ps1","link":"#list-os-updates-ps1","children":[]},{"level":2,"title":"list-passwords.ps1","slug":"list-passwords-ps1","link":"#list-passwords-ps1","children":[]},{"level":2,"title":"list-pins.ps1","slug":"list-pins-ps1","link":"#list-pins-ps1","children":[]},{"level":2,"title":"list-sql-tables.ps1","slug":"list-sql-tables-ps1","link":"#list-sql-tables-ps1","children":[]},{"level":2,"title":"list-weather.ps1","slug":"list-weather-ps1","link":"#list-weather-ps1","children":[]},{"level":2,"title":"locate-city.ps1","slug":"locate-city-ps1","link":"#locate-city-ps1","children":[]},{"level":2,"title":"locate-ipaddress.ps1","slug":"locate-ipaddress-ps1","link":"#locate-ipaddress-ps1","children":[]},{"level":2,"title":"moon.ps1","slug":"moon-ps1","link":"#moon-ps1","children":[]},{"level":2,"title":"scan-ports.ps1","slug":"scan-ports-ps1","link":"#scan-ports-ps1","children":[]},{"level":2,"title":"send-tcp.ps1","slug":"send-tcp-ps1","link":"#send-tcp-ps1","children":[]},{"level":2,"title":"send-udp.ps1","slug":"send-udp-ps1","link":"#send-udp-ps1","children":[]},{"level":2,"title":"set-timer.ps1","slug":"set-timer-ps1","link":"#set-timer-ps1","children":[]},{"level":2,"title":"simulate-presence.ps1","slug":"simulate-presence-ps1","link":"#simulate-presence-ps1","children":[]},{"level":2,"title":"start-ipfs-server.ps1","slug":"start-ipfs-server-ps1","link":"#start-ipfs-server-ps1","children":[]},{"level":2,"title":"translate-file.ps1","slug":"translate-file-ps1","link":"#translate-file-ps1","children":[]},{"level":2,"title":"translate-files.ps1","slug":"translate-files-ps1","link":"#translate-files-ps1","children":[]},{"level":2,"title":"translate-text.ps1","slug":"translate-text-ps1","link":"#translate-text-ps1","children":[]},{"level":2,"title":"weather.ps1","slug":"weather-ps1","link":"#weather-ps1","children":[]},{"level":2,"title":"weather-report.ps1","slug":"weather-report-ps1","link":"#weather-report-ps1","children":[]}],"git":{},"readingTime":{"minutes":27.73,"words":8319},"filePathRelative":"programming/pwsh/various-pwsh-scripts.md","excerpt":"\\n\\n<hr>\\n<h2></h2>\\n"}');export{ut as comp,kt as data};
