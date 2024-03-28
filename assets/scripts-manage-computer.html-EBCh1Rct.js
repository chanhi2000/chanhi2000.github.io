import{_ as b}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as k,o as h,c as g,b as n,t as f,a as l,w as a,n as p,g as r,e as s,d as w}from"./app-B2dKc-qM.js";const S={},$={id:"frontmatter-title-관련",tabindex:"-1"},_={class:"header-anchor",href:"#frontmatter-title-관련"},P={class:"table-of-contents"},y=n("hr",null,null,-1),T={id:"add-firewall-rules-ps1",tabindex:"-1"},A={class:"header-anchor",href:"#add-firewall-rules-ps1"},E=n("code",null,"add-firewall-rules.ps1",-1),C=n("p",null,"This PowerShell script adds firewall rules for the given executable. Administrator rights are required.",-1),L=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"add-firewall"),n("span",{class:"token operator"},"-"),s("rules"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("PathToExecutables"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`PathToExecutables <String>
    Specifies the path to the executables
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"add-firewall"),n("span",{class:"token operator"},"-"),s(`rules C:\\MyApp\\bin
`),n("span",{class:"token comment"},"# Adding firewall rule for C:\\MyApp\\bin\\app1.exe"),s(`
`),n("span",{class:"token comment"},"# Adding firewall rule for C:\\MyApp\\bin\\app2.exe"),s(`
`),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Adds firewall rules for executables (needs admin rights)
.DESCRIPTION
	This PowerShell script adds firewall rules for the given executable. Administrator rights are required.
.PARAMETER PathToExecutables
	Specifies the path to the executables
.EXAMPLE
	PS> ./add-firewall-rules C:\\MyApp\\bin
	Adding firewall rule for C:\\MyApp\\bin\\app1.exe
	Adding firewall rule for C:\\MyApp\\bin\\app2.exe
	...
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#Requires -RunAsAdministrator"),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$PathToExecutables"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token variable"},"$command"),s(" = "),n("span",{class:"token string"},`'
$output = ''Firewall rules for path '' + $args[0]
write-output $output
for($i = 1; $i -lt $args.count; $i++){
	$path = $args[0]
	$path += ''\\''
	$path += $args[$i]

	$null = $args[$i] -match ''[^\\\\]*\\.exe$''
	$name = $matches[0]
    $output = ''Adding firewall rule for '' + $name
	write-output $output
	$null = New-NetFirewallRule -DisplayName $name -Direction Inbound -Program $path -Profile Domain, Private -Action Allow
}
write-host -foregroundColor green -noNewline ''Done - press any key to continue...'';
[void]$Host.UI.RawUI.ReadKey(''NoEcho,IncludeKeyDown'');
'`),s(`


`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$PathToExecutables"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$PathToExecutables"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter path to executables"'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$PathToExecutables"),s(" = "),n("span",{class:"token function"},"Convert-Path"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token variable"},"$PathToExecutables"),s(`

	`),n("span",{class:"token variable"},"$Apps"),s(" = "),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PathToExecutables"),s('\\*.exe"')]),s(),n("span",{class:"token operator"},"-"),s(`Name

	`),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Apps"),n("span",{class:"token punctuation"},"."),s("count "),n("span",{class:"token operator"},"-eq"),s(" 0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"write-warning"),s(),n("span",{class:"token string"},'"No executables found. No Firewall rules have been created."'),s(`
		`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token operator"},"-"),s("NoNewhLine "),n("span",{class:"token string"},"'Press any key to continue...'"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token namespace"},"[void]"),n("span",{class:"token variable"},"$Host"),n("span",{class:"token punctuation"},"."),s("UI"),n("span",{class:"token punctuation"},"."),s("RawUI"),n("span",{class:"token punctuation"},"."),s("ReadKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'NoEcho,IncludeKeyDown'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"exit"),s(` 1
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$arg"),s(" = "),n("span",{class:"token string"},[s('"PathToExecutables '),n("span",{class:"token variable"},"$Apps"),s('"')]),s(`
	`),n("span",{class:"token function"},"Start-Process"),s(" powershell "),n("span",{class:"token operator"},"-"),s("Verb runAs "),n("span",{class:"token operator"},"-"),s("ArgumentList "),n("span",{class:"token string"},[s('"-command & {'),n("span",{class:"token variable"},"$command"),s("}  "),n("span",{class:"token variable"},"$arg"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("hr",null,null,-1),O={id:"check-cpu-ps1",tabindex:"-1"},N={class:"header-anchor",href:"#check-cpu-ps1"},M=n("code",null,"check-cpu.ps1",-1),W=n("p",null,"Checks the CPU temperature",-1),V=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks the CPU status
.DESCRIPTION
	This PowerShell script queries the CPU status and prints it (name, type, speed, temperature, etc).
.EXAMPLE
	PS> ./check-cpu
	✅ AMD Ryzen 5 5500U with Radeon Graphics (CPU0, 2100MHz, 31.3°C)
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"function"),s(" GetCPUTemperatureInCelsius "),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$Temp"),s(" = 99999"),n("span",{class:"token punctuation"},"."),s("9 "),n("span",{class:"token comment"},"# unsupported"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},'"/sys/class/thermal/thermal_zone0/temp"'),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$IntTemp"),s(" = "),n("span",{class:"token function"},"Get-Content"),s(),n("span",{class:"token string"},'"/sys/class/thermal/thermal_zone0/temp"'),s(`
			`),n("span",{class:"token variable"},"$Temp"),s(" = "),n("span",{class:"token namespace"},"[math]"),s("::round"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IntTemp"),s(),n("span",{class:"token operator"},"/"),s(" 1000"),n("span",{class:"token punctuation"},"."),s("0"),n("span",{class:"token punctuation"},","),s(" 1"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Objects"),s(" = "),n("span",{class:"token function"},"Get-WmiObject"),s(),n("span",{class:"token operator"},"-"),s("Query "),n("span",{class:"token string"},'"SELECT * FROM Win32_PerfFormattedData_Counters_ThermalZoneInformation"'),s(),n("span",{class:"token operator"},"-"),s("Namespace "),n("span",{class:"token string"},'"root/CIMV2"'),s(`
		`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Obj"),s(" in "),n("span",{class:"token variable"},"$Objects"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$HiPrec"),s(" = "),n("span",{class:"token variable"},"$Obj"),n("span",{class:"token punctuation"},"."),s(`HighPrecisionTemperature
			`),n("span",{class:"token variable"},"$Temp"),s(" = "),n("span",{class:"token namespace"},"[math]"),s("::round"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$HiPrec"),s(),n("span",{class:"token operator"},"/"),s(" 100"),n("span",{class:"token punctuation"},"."),s("0"),n("span",{class:"token punctuation"},","),s(" 1"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token variable"},"$Temp"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(" GetProcessorArchitecture "),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$env"),s(':PROCESSOR_ARCHITECTURE"')]),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$env"),s(':PROCESSOR_ARCHITECTURE"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Name"),s(" = "),n("span",{class:"token variable"},"$PSVersionTable"),n("span",{class:"token punctuation"},"."),s(`OS
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Name"),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"*-generic *"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[System.Environment]"),s("::Is64BitOperatingSystem"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"x64"'),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"x86"'),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Name"),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'"*-raspi *"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[System.Environment]"),s("::Is64BitOperatingSystem"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"ARM64"'),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'"ARM32"'),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},'"⏳ Querying CPU details..."'),s(`
	`),n("span",{class:"token variable"},"$Status"),s(" = "),n("span",{class:"token string"},'"✅"'),s(`
	`),n("span",{class:"token variable"},"$Celsius"),s(` = GetCPUTemperatureInCelsius
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Celsius"),s(),n("span",{class:"token operator"},"-eq"),s(" 99999"),n("span",{class:"token punctuation"},"."),s("9"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Temp"),s(" = "),n("span",{class:"token string"},'"no temp"'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Celsius"),s(),n("span",{class:"token operator"},"-gt"),s(" 50"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Temp"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Celsius"),n("span",{class:"token punctuation"},")")]),s('°C"')]),s(`
		`),n("span",{class:"token variable"},"$Status"),s(" = "),n("span",{class:"token string"},'"⚠️"'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Celsius"),s(),n("span",{class:"token operator"},"-lt"),s(" 0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Temp"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Celsius"),n("span",{class:"token punctuation"},")")]),s('°C"')]),s(`
		`),n("span",{class:"token variable"},"$Status"),s(" = "),n("span",{class:"token string"},'"⚠️"'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Temp"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Celsius"),n("span",{class:"token punctuation"},")")]),s('°C"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(` 

	`),n("span",{class:"token variable"},"$Arch"),s(` = GetProcessorArchitecture
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$CPUName"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Arch"),s(' CPU"')]),s(`
		`),n("span",{class:"token variable"},"$Arch"),s(" = "),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token variable"},"$DeviceID"),s(" = "),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token variable"},"$Speed"),s(" = "),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token variable"},"$Socket"),s(" = "),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Details"),s(" = "),n("span",{class:"token function"},"Get-WmiObject"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"Class"),s(` Win32_Processor
		`),n("span",{class:"token variable"},"$CPUName"),s(" = "),n("span",{class:"token variable"},"$Details"),n("span",{class:"token punctuation"},"."),s("Name"),n("span",{class:"token punctuation"},"."),s("trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token variable"},"$Arch"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Arch"),s(', "')]),s(`
		`),n("span",{class:"token variable"},"$DeviceID"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Details"),n("span",{class:"token punctuation"},"."),s("DeviceID"),n("span",{class:"token punctuation"},")")]),s(', "')]),s(`
		`),n("span",{class:"token variable"},"$Speed"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Details"),n("span",{class:"token punctuation"},"."),s("MaxClockSpeed"),n("span",{class:"token punctuation"},")")]),s('MHz, "')]),s(`
		`),n("span",{class:"token variable"},"$Socket"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Details"),n("span",{class:"token punctuation"},"."),s("SocketDesignation"),n("span",{class:"token punctuation"},")")]),s(' socket, "')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$Cores"),s(" = "),n("span",{class:"token namespace"},"[System.Environment]"),s(`::ProcessorCount
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token operator"},"-"),s("completed "),n("span",{class:"token string"},'"done."'),s(`
	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Status"),s(),n("span",{class:"token variable"},"$CPUName"),s(" ("),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Arch"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token variable"},"$Cores"),s(" cores, "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$DeviceID"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Speed"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Socket"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token variable"},"$Temp"),s(')"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("hr",null,null,-1),F={id:"check-dns-ps1",tabindex:"-1"},q={class:"header-anchor",href:"#check-dns-ps1"},U=n("code",null,"check-dns.ps1",-1),B=n("p",null,"This PowerShell script measures and prints the DNS resolution speed by using 200 popular domains.",-1),G=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-dns"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`check-dns
`),n("span",{class:"token comment"},"# ✅ DNS resolves 156.5 domains per second"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Check DNS resolution 
.DESCRIPTION
	This PowerShell script measures and prints the DNS resolution speed by using 200 popular domains.
.EXAMPLE
	PS> ./check-dns
	✅ DNS resolves 156.5 domains per second
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`
 
`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},'"⏳ Resolving 200 popular domain names..."'),s(`
	`),n("span",{class:"token variable"},"$table"),s(" = "),n("span",{class:"token function"},"Import-CSV"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/../Data/popular-domains.csv"')]),s(`
	`),n("span",{class:"token variable"},"$numRows"),s(" = "),n("span",{class:"token variable"},"$table"),n("span",{class:"token punctuation"},"."),s(`Length

	`),n("span",{class:"token variable"},"$stopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$row"),s(" in "),n("span",{class:"token variable"},"$table"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$nop"),s("=dig "),n("span",{class:"token variable"},"$row"),n("span",{class:"token punctuation"},"."),s("Domain "),n("span",{class:"token operator"},"+"),s("short"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$row"),s(" in "),n("span",{class:"token variable"},"$table"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$nop"),s("="),n("span",{class:"token function"},"Resolve-DNSName"),s(),n("span",{class:"token variable"},"$row"),n("span",{class:"token punctuation"},"."),s("Domain"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token namespace"},"[float]"),n("span",{class:"token variable"},"$elapsed"),s(" = "),n("span",{class:"token variable"},"$stopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds

	
	`),n("span",{class:"token variable"},"$average"),s(" = "),n("span",{class:"token namespace"},"[math]"),s("::round"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$numRows"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token variable"},"$elapsed"),n("span",{class:"token punctuation"},","),s(" 1"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$average"),s(),n("span",{class:"token operator"},"-lt"),s(" 10"),n("span",{class:"token punctuation"},"."),s("0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"⚠️ DNS resolves '),n("span",{class:"token variable"},"$average"),s(' domains per second only!"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`  
		`),n("span",{class:"token string"},[s('"✅ DNS resolves '),n("span",{class:"token variable"},"$average"),s(' domains per second"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token operator"},"-"),s("completed "),n("span",{class:"token string"},'"."'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("hr",null,null,-1),Y={id:"check-drive-space-ps1",tabindex:"-1"},X={class:"header-anchor",href:"#check-drive-space-ps1"},J=n("code",null,"check-drive-space.ps1",-1),Q=n("p",null,"This PowerShell script checks a drive for free space left (20 GB by default).",-1),Z=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-drive-space"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Drive"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("MinLevel"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Drive <String>
    Specifies the drive to check
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`MinLevel <Int32>
    Specifies the minimum level in Gigabyte
    
    Required?                    false
    Position?                    2
    Default value                20
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`check-drive-space C
`),n("span",{class:"token comment"},"# ✔️ 172 GB left on drive C (61 of 233 GB used)"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),sn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks a drive for free space left 
.DESCRIPTION
	This PowerShell script checks a drive for free space left (20 GB by default).
.PARAMETER Drive
	Specifies the drive to check
.PARAMETER MinLevel
	Specifies the minimum level in Gigabyte
.EXAMPLE
	PS> ./check-drive-space C
	✔️ 172 GB left on drive C (61 of 233 GB used)
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Drive"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$MinLevel"),s(" = 20"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"# minimum level in GB"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Drive"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Drive"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter drive to check"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$DriveDetails"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"get-psdrive"),s(),n("span",{class:"token variable"},"$Drive"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Free"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$DriveDetails"),n("span",{class:"token punctuation"},"."),s("Free "),n("span",{class:"token operator"},"/"),s(" 1024"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(" 1024"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(` 1024
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Used"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$DriveDetails"),n("span",{class:"token punctuation"},"."),s("Used "),n("span",{class:"token operator"},"/"),s(" 1024"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(" 1024"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(` 1024
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Total"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Used"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token variable"},"$Free"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Free"),s(),n("span",{class:"token operator"},"-lt"),s(),n("span",{class:"token variable"},"$MinLevel"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        	`),n("span",{class:"token function"},"write-warning"),s(),n("span",{class:"token string"},[s('"Drive '),n("span",{class:"token variable"},"$Drive"),s(" has only "),n("span",{class:"token variable"},"$Free"),s(" GB left to use! ("),n("span",{class:"token variable"},"$Used"),s(" of "),n("span",{class:"token variable"},"$Total"),s(" GB used, minimum is "),n("span",{class:"token variable"},"$MinLevel"),s(' GB)"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(` 1
	`),n("span",{class:"token punctuation"},"}"),s(`

	& `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/speak-english.ps1"')]),s(),n("span",{class:"token string"},[s('"Drive '),n("span",{class:"token variable"},"$Drive"),s(" has "),n("span",{class:"token variable"},"$Free"),s(" GB left ("),n("span",{class:"token variable"},"$Total"),s(' GB total)"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),an=n("hr",null,null,-1),en={id:"check-file-system-ps1",tabindex:"-1"},tn={class:"header-anchor",href:"#check-file-system-ps1"},ln=n("code",null,"check-file-system.ps1",-1),on=n("p",null,"This PowerShell script checks the file system of a drive. It needs admin rights.",-1),cn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-file-system"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Drive"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Drive <String>
    Specifies the drive to check
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`check-file-system C
`),n("span",{class:"token comment"},"# ✔️ file system on drive C is clean"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),rn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks the file system of a drive (needs admin rights)
.DESCRIPTION
	This PowerShell script checks the file system of a drive. It needs admin rights.
.PARAMETER Drive
	Specifies the drive to check
.EXAMPLE
	PS> ./check-file-system C
	✔️ file system on drive C is clean
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#Requires -RunAsAdministrator"),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Drive"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Drive"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Drive"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter drive (letter) to check"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Result"),s(" = "),n("span",{class:"token function"},"repair-volume"),s(),n("span",{class:"token operator"},"-"),s("driveLetter "),n("span",{class:"token variable"},"$Drive"),s(),n("span",{class:"token operator"},"-"),s(`scan
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Result"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"NoErrorsFound"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'repair-volume' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	& `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/speak-english.ps1"')]),s(),n("span",{class:"token string"},[s('"File system on drive '),n("span",{class:"token variable"},"$Drive"),s(' is clean."')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),un=n("hr",null,null,-1),kn={id:"check-health-ps1",tabindex:"-1"},dn={class:"header-anchor",href:"#check-health-ps1"},mn=n("code",null,"check-health.ps1",-1),vn=n("p",null,"This PowerShell script queries the system health of the local computer (hardware, software, and network) and prints it.",-1),bn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-health"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),hn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-health"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# H A R D W A R E"),s(`
`),n("span",{class:"token comment"},"# ✅ Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz (CPU0, 2701MHz, socket U3E1, 30.1°C)"),s(`
`),n("span",{class:"token comment"},"# ..."),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),gn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks the system health 
.DESCRIPTION
	This PowerShell script queries the system health of the local computer (hardware, software, and network) and prints it.
.EXAMPLE
	PS> ./check-health.ps1
  
	H A R D W A R E
	✅ Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz (CPU0, 2701MHz, socket U3E1, 30.1°C)
	...
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

& `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/check-hardware.ps1"')]),s(`
& `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/check-software.ps1"')]),s(`
& `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/check-network.ps1"')]),s(`
`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fn=n("hr",null,null,-1),wn={id:"check-ping-ps1",tabindex:"-1"},Sn={class:"header-anchor",href:"#check-ping-ps1"},$n=n("code",null,"check-ping.ps1",-1),_n=n("p",null,"This PowerShell script measures the ping roundtrip times from the local computer to 10 Internet servers.",-1),Pn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-ping"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("hosts"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`hosts <String>
    Specifies the hosts to check`),n("span",{class:"token punctuation"},","),s(" seperated by commata "),n("span",{class:"token punctuation"},"("),s("default is: amazon"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("bing"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("cnn"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("dropbox"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("facebook"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("github"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("google"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("live"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("twitter"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("youtube"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                amazon`),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("bing"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("cnn"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("dropbox"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("facebook"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("github"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("google"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("live"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("twitter"),n("span",{class:"token punctuation"},"."),s("com"),n("span",{class:"token punctuation"},","),s("youtube"),n("span",{class:"token punctuation"},"."),s(`com
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),yn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-ping"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# ✅ Ping latency is 29ms average (13ms...109ms, 0 loss)"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Tn=n("p",null,null,-1),An=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks the ping latency 
.DESCRIPTION
	This PowerShell script measures the ping roundtrip times from the local computer to 10 Internet servers.
.PARAMETER hosts
	Specifies the hosts to check, seperated by commata (default is: amazon.com,bing.com,cnn.com,dropbox.com,facebook.com,github.com,google.com,live.com,twitter.com,youtube.com)
.EXAMPLE
	PS> ./check-ping.ps1
	✅ Ping latency is 29ms average (13ms...109ms, 0 loss)
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$hosts"),s(" = "),n("span",{class:"token string"},'"amazon.com,bing.com,cnn.com,dropbox.com,facebook.com,github.com,google.com,live.com,twitter.com,youtube.com"'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"✅ Ping latency is"'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	`),n("span",{class:"token variable"},"$hostsArray"),s(" = "),n("span",{class:"token variable"},"$hosts"),n("span",{class:"token punctuation"},"."),s("Split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'","'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$t"),s(" = "),n("span",{class:"token variable"},"$hostsArray"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"New-Object"),s(" Net"),n("span",{class:"token punctuation"},"."),s("NetworkInformation"),n("span",{class:"token punctuation"},"."),s("Ping"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("SendPingAsync"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},","),s(" 250"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token namespace"},"[Threading.Tasks.Task]"),s("::WaitAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$t"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$min"),s(` = 9999999
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$max"),s(" = "),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$avg"),s(" = "),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$successCount"),s(" = "),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$lossCount"),s(` = 0
	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$ping"),s(" in "),n("span",{class:"token variable"},"$t"),n("span",{class:"token punctuation"},"."),s("Result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$ping"),n("span",{class:"token punctuation"},"."),s("Status "),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"Success"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$latency"),s(" = "),n("span",{class:"token variable"},"$ping"),n("span",{class:"token punctuation"},"."),s(`RoundtripTime
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$latency"),s(),n("span",{class:"token operator"},"-lt"),s(),n("span",{class:"token variable"},"$min"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$min"),s(" = "),n("span",{class:"token variable"},"$Latency"),s(),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$latency"),s(),n("span",{class:"token operator"},"-gt"),s(),n("span",{class:"token variable"},"$max"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$max"),s(" = "),n("span",{class:"token variable"},"$Latency"),s(),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token variable"},"$avg"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token variable"},"$latency"),s(`
			`),n("span",{class:"token variable"},"$successCount"),n("span",{class:"token operator"},"++"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$lossCount"),n("span",{class:"token operator"},"++"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$avg"),s(),n("span",{class:"token operator"},"/="),s(),n("span",{class:"token variable"},"$successCount"),s(`
	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('" '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$avg"),n("span",{class:"token punctuation"},")")]),s("ms average ("),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$min"),n("span",{class:"token punctuation"},")")]),s("ms..."),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$max"),n("span",{class:"token punctuation"},")")]),s("ms, "),n("span",{class:"token variable"},"$lossCount"),s(' loss)"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),En=n("hr",null,null,-1),Cn={id:"check-swap-space-ps1",tabindex:"-1"},Ln={class:"header-anchor",href:"#check-swap-space-ps1"},Dn=n("code",null,"check-swap-space.ps1",-1),In=n("p",null,"This PowerShell script queries the status of the swap space and prints it.",-1),xn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-swap-space"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("MinLevel"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`MinLevel <Int32>
    Specifies the minimum level `),n("span",{class:"token punctuation"},"("),s("10 GB by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                10
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),On=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-swap-space"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# ✅ Swap space with 1GB at 42%, 748MB free"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Nn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks the swap space status
.DESCRIPTION
	This PowerShell script queries the status of the swap space and prints it.
.PARAMETER MinLevel
	Specifies the minimum level (10 GB by default)
.EXAMPLE
	PS> ./check-swap-space.ps1
	✅ Swap space with 1GB at 42%, 748MB free
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$MinLevel"),s(" = 10"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"# minimum level in GB"),s(`

`),n("span",{class:"token keyword"},"function"),s(" MB2String "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[int64]"),n("span",{class:"token variable"},"$Bytes"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Bytes"),s(),n("span",{class:"token operator"},"-lt"),s(" 1000"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Bytes"),n("span",{class:"token punctuation"},")")]),s('MB"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token variable"},"$Bytes"),s(),n("span",{class:"token operator"},"/="),s(` 1000
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Bytes"),s(),n("span",{class:"token operator"},"-lt"),s(" 1000"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Bytes"),n("span",{class:"token punctuation"},")")]),s('GB"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token variable"},"$Bytes"),s(),n("span",{class:"token operator"},"/="),s(` 1000
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Bytes"),s(),n("span",{class:"token operator"},"-lt"),s(" 1000"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Bytes"),n("span",{class:"token punctuation"},")")]),s('TB"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token variable"},"$Bytes"),s(),n("span",{class:"token operator"},"/="),s(` 1000
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Bytes"),s(),n("span",{class:"token operator"},"-lt"),s(" 1000"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Bytes"),n("span",{class:"token punctuation"},")")]),s('PB"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token variable"},"$Bytes"),s(),n("span",{class:"token operator"},"/="),s(` 1000
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Bytes"),s(),n("span",{class:"token operator"},"-lt"),s(" 1000"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Bytes"),n("span",{class:"token punctuation"},")")]),s('EB"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Total"),s(" = "),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Used"),s(" = "),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Free"),s(` = 0
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Result"),s(" = $"),n("span",{class:"token punctuation"},"("),s("free "),n("span",{class:"token operator"},"--"),s("mega "),n("span",{class:"token punctuation"},"|"),s(" grep Swap:"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Total"),s(" = "),n("span",{class:"token variable"},"$Result"),n("span",{class:"token punctuation"},"."),s("subString"),n("span",{class:"token punctuation"},"("),s("5"),n("span",{class:"token punctuation"},","),s("14"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Used"),s(" = "),n("span",{class:"token variable"},"$Result"),n("span",{class:"token punctuation"},"."),s("substring"),n("span",{class:"token punctuation"},"("),s("20"),n("span",{class:"token punctuation"},","),s("13"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Free"),s(" = "),n("span",{class:"token variable"},"$Result"),n("span",{class:"token punctuation"},"."),s("substring"),n("span",{class:"token punctuation"},"("),s("32"),n("span",{class:"token punctuation"},","),s("11"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Items"),s(" = "),n("span",{class:"token function"},"Get-WmiObject"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token string"},'"Win32_PageFileUsage"'),s(),n("span",{class:"token operator"},"-"),s("namespace "),n("span",{class:"token string"},'"root\\CIMV2"'),s(),n("span",{class:"token operator"},"-"),s(`computername localhost 
		`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Item"),s(" in "),n("span",{class:"token variable"},"$Items"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(` 
			`),n("span",{class:"token variable"},"$Total"),s(" = "),n("span",{class:"token variable"},"$Item"),n("span",{class:"token punctuation"},"."),s(`AllocatedBaseSize
			`),n("span",{class:"token variable"},"$Used"),s(" = "),n("span",{class:"token variable"},"$Item"),n("span",{class:"token punctuation"},"."),s(`CurrentUsage
			`),n("span",{class:"token variable"},"$Free"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Total"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token variable"},"$Used"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(` 
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Total"),s(),n("span",{class:"token operator"},"-eq"),s(" 0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        	`),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},'"⚠️ No swap space configured"'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Free"),s(),n("span",{class:"token operator"},"-eq"),s(" 0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},[s('"⚠️ Swap space with '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),s("MB2String "),n("span",{class:"token variable"},"$Total"),n("span",{class:"token punctuation"},")")]),s(' is full"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Free"),s(),n("span",{class:"token operator"},"-lt"),s(),n("span",{class:"token variable"},"$MinLevel"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},[s('"⚠️ Swap space with '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),s("MB2String "),n("span",{class:"token variable"},"$Total"),n("span",{class:"token punctuation"},")")]),s(" is nearly full, only "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),s("MB2String "),n("span",{class:"token variable"},"$Free"),n("span",{class:"token punctuation"},")")]),s(' free"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Used"),s(),n("span",{class:"token operator"},"-eq"),s(" 0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},[s('"✅ Swap space with '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),s("MB2String "),n("span",{class:"token variable"},"$Total"),n("span",{class:"token punctuation"},")")]),s(' reserved"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Percent"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Used"),s(),n("span",{class:"token operator"},"*"),s(" 100"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token variable"},"$Total"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Percent"),s(),n("span",{class:"token operator"},"-ge"),s(" 90"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},[s('"✅ Swap space with '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),s("MB2String "),n("span",{class:"token variable"},"$Total"),n("span",{class:"token punctuation"},")")]),s(" is "),n("span",{class:"token variable"},"$Percent"),s("% full, "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),s("MB2String "),n("span",{class:"token variable"},"$Free"),n("span",{class:"token punctuation"},")")]),s(' free"')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token function"},"Write-Output"),s(),n("span",{class:"token string"},[s('"✅ Swap space with '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),s("MB2String "),n("span",{class:"token variable"},"$Total"),n("span",{class:"token punctuation"},")")]),s(" at "),n("span",{class:"token variable"},"$Percent"),s("%, "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),s("MB2String "),n("span",{class:"token variable"},"$Free"),n("span",{class:"token punctuation"},")")]),s(' free"')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Mn=n("hr",null,null,-1),Wn={id:"check-windows-system-files-ps1",tabindex:"-1"},Vn={class:"header-anchor",href:"#check-windows-system-files-ps1"},Rn=n("code",null,"check-windows-system-files.ps1",-1),zn=n("p",null,"This PowerShell script checks the validity of the Windows system files. It requires admin rights.",-1),Fn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-windows-system-files"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),qn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-windows-system-files"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# ✔️ checked Windows system files"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Un=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks the validity of the Windows system files (requires admin rights)
.DESCRIPTION
	This PowerShell script checks the validity of the Windows system files. It requires admin rights.
.EXAMPLE
	PS> ./check-windows-system-files.ps1
	✔️ checked Windows system files
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#Requires -RunAsAdministrator"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	sfc `),n("span",{class:"token operator"},"/"),s(`verifyOnly
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'sfc /verifyOnly' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"✔️ checked Windows system files"'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Bn=n("hr",null,null,-1),Gn={id:"enable-crash-dumps-ps1",tabindex:"-1"},jn={class:"header-anchor",href:"#enable-crash-dumps-ps1"},Hn=n("code",null,"enable-crash-dumps.ps1",-1),Kn=n("p",null,"This PowerShell script enables the writing of crash dumps.",-1),Yn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"enable-crash"),n("span",{class:"token operator"},"-"),s("dumps"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Xn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"enable-crash"),n("span",{class:"token operator"},"-"),s("dumps"),n("span",{class:"token punctuation"},"."),s(`ps1
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Jn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Enables the writing of crash dumps
.DESCRIPTION
	This PowerShell script enables the writing of crash dumps.
.EXAMPLE
	PS> ./enable-crash-dumps.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"##################################################################"),s(`
`),n("span",{class:"token comment"},"#                                                                #"),s(`
`),n("span",{class:"token comment"},"# Written by: Ryan Waters                                        #"),s(`
`),n("span",{class:"token comment"},"#                                                                #"),s(`
`),n("span",{class:"token comment"},"# Program: Get-Dump.ps1                                          #"),s(`
`),n("span",{class:"token comment"},"# Date: 2-06-2020                                                #"),s(`
`),n("span",{class:"token comment"},"# Purpose: To set registry keys to gather a WER Usermode Dump    #"),s(`
`),n("span",{class:"token comment"},"#          and be able to change from a custom, mini, or FULL    #"),s(`
`),n("span",{class:"token comment"},"#          Dumps for ease of use for customers and others.       #"),s(`
`),n("span",{class:"token comment"},"#                                                                #"),s(`
`),n("span",{class:"token comment"},"# EULA: Code is free to use for all, and free to distribute      #"),s(`
`),n("span",{class:"token comment"},"#       I just ask that you leave the credit information and     #"),s(`
`),n("span",{class:"token comment"},"#       this EULA and Comment Section in tact and do not delete. #"),s(`
`),n("span",{class:"token comment"},"#                                                                #"),s(`
`),n("span",{class:"token comment"},"# Bitwise Values:  (For reference)                               #"),s(`
`),n("span",{class:"token comment"},"#                                                                #"),s(`
`),n("span",{class:"token comment"},"# 0x00000000 -  MiniDumpNormal                                   #"),s(`
`),n("span",{class:"token comment"},"# 0x00000001 -  MiniDumpWithDataSegs                             #"),s(`
`),n("span",{class:"token comment"},"# 0x00000002 -  MiniDumpWithFullMemory                           #"),s(`
`),n("span",{class:"token comment"},"# 0x00000004 -  MiniDumpWithHandleData                           #"),s(`
`),n("span",{class:"token comment"},"# 0x00000008 -  MiniDumpFilterMemory                             #"),s(`
`),n("span",{class:"token comment"},"# 0x00000010 -  MiniDumpScanMemory                               #"),s(`
`),n("span",{class:"token comment"},"# 0x00000020 -  MiniDumpWithUnloadedModules                      #"),s(`
`),n("span",{class:"token comment"},"# 0x00000040 -  MiniDumpWithIndirectlyReferenced                 #"),s(`
`),n("span",{class:"token comment"},"# 0x00000080 -  MemoryMiniDumpFilterModulePaths                  #"),s(`
`),n("span",{class:"token comment"},"# 0x00000100 -  MiniDumpWithProcessThreadData                    #"),s(`
`),n("span",{class:"token comment"},"# 0x00000200 -  MiniDumpWithPrivateReadWriteMemory               #"),s(`
`),n("span",{class:"token comment"},"# 0x00000400 -  MiniDumpWithoutOptionalData                      #"),s(`
`),n("span",{class:"token comment"},"# 0x00000800 -  MiniDumpWithFullMemoryInfo                       #"),s(`
`),n("span",{class:"token comment"},"# 0x00001000 -  MiniDumpWithThreadInfo                           #"),s(`
`),n("span",{class:"token comment"},"# 0x00002000 -  MiniDumpWithCodeSegs                             #"),s(`
`),n("span",{class:"token comment"},"# 0x00004000 -  MiniDumpWithoutAuxiliaryState                    #"),s(`
`),n("span",{class:"token comment"},"# 0x00008000 -  MiniDumpWithFullAuxiliaryState                   #"),s(`
`),n("span",{class:"token comment"},"# 0x00010000 -  MiniDumpWithPrivateWriteCopyMemory               #"),s(`
`),n("span",{class:"token comment"},"# 0x00020000 -  MiniDumpIgnoreInaccessibleMemory                 #"),s(`
`),n("span",{class:"token comment"},"# 0x00040000 -  MiniDumpWithTokenInformation                     #"),s(`
`),n("span",{class:"token comment"},"#                                                                #"),s(`
`),n("span",{class:"token comment"},"##################################################################"),s(`

`),n("span",{class:"token comment"},"#Setting Values:"),s(`
`),n("span",{class:"token variable"},"$MDN"),s(" = "),n("span",{class:"token string"},"'0'"),s(`
`),n("span",{class:"token variable"},"$MDWDS"),s(" = "),n("span",{class:"token string"},"'1'"),s(`
`),n("span",{class:"token variable"},"$MDWFM"),s(" = "),n("span",{class:"token string"},"'2'"),s(`
`),n("span",{class:"token variable"},"$MDWHD"),s(" = "),n("span",{class:"token string"},"'4'"),s(`
`),n("span",{class:"token variable"},"$MDFM"),s(" = "),n("span",{class:"token string"},"'8'"),s(`
`),n("span",{class:"token variable"},"$MDSM"),s(" = "),n("span",{class:"token string"},"'10'"),s(`
`),n("span",{class:"token variable"},"$MDWUM"),s(" = "),n("span",{class:"token string"},"'20'"),s(`
`),n("span",{class:"token variable"},"$MDWIR"),s(" = "),n("span",{class:"token string"},"'40'"),s(`
`),n("span",{class:"token variable"},"$MMDFMP"),s(" = "),n("span",{class:"token string"},"'80'"),s(`
`),n("span",{class:"token variable"},"$MDWPTD"),s(" = "),n("span",{class:"token string"},"'100'"),s(`
`),n("span",{class:"token variable"},"$MDWPRWM"),s(" = "),n("span",{class:"token string"},"'200'"),s(`
`),n("span",{class:"token variable"},"$MDWOD"),s(" = "),n("span",{class:"token string"},"'400'"),s(`
`),n("span",{class:"token variable"},"$MDWFMI"),s(" = "),n("span",{class:"token string"},"'800'"),s(`
`),n("span",{class:"token variable"},"$MDWTI"),s(" = "),n("span",{class:"token string"},"'1000'"),s(`
`),n("span",{class:"token variable"},"$MDWCS"),s(" = "),n("span",{class:"token string"},"'2000'"),s(`
`),n("span",{class:"token variable"},"$MDWAS"),s(" = "),n("span",{class:"token string"},"'4000'"),s(`
`),n("span",{class:"token variable"},"$MDWFAS"),s(" = "),n("span",{class:"token string"},"'8000'"),s(`
`),n("span",{class:"token variable"},"$MDWPWCM"),s(" = "),n("span",{class:"token string"},"'10000'"),s(`
`),n("span",{class:"token variable"},"$MDIIM"),s(" = "),n("span",{class:"token string"},"'20000'"),s(`
`),n("span",{class:"token variable"},"$MDWTOI"),s(" = "),n("span",{class:"token string"},"'40000'"),s(`

`),n("span",{class:"token variable"},"$a"),s(" = "),n("span",{class:"token variable"},"$MDN"),s(`
`),n("span",{class:"token variable"},"$b"),s(" = "),n("span",{class:"token variable"},"$MDWDS"),s(`
`),n("span",{class:"token variable"},"$c"),s(" = "),n("span",{class:"token variable"},"$MDWFM"),s(`
`),n("span",{class:"token variable"},"$d"),s(" = "),n("span",{class:"token variable"},"$MDWHD"),s(`
`),n("span",{class:"token variable"},"$e"),s(" = "),n("span",{class:"token variable"},"$MDFM"),s(`
`),n("span",{class:"token variable"},"$f"),s(" = "),n("span",{class:"token variable"},"$MDSM"),s(`
`),n("span",{class:"token variable"},"$g"),s(" = "),n("span",{class:"token variable"},"$MDWUM"),s(`
`),n("span",{class:"token variable"},"$h"),s(" = "),n("span",{class:"token variable"},"$MDWIR"),s(`
`),n("span",{class:"token variable"},"$i"),s(" = "),n("span",{class:"token variable"},"$MMDFMP"),s(`
`),n("span",{class:"token variable"},"$j"),s(" = "),n("span",{class:"token variable"},"$MDWPTD"),s(`
`),n("span",{class:"token variable"},"$k"),s(" = "),n("span",{class:"token variable"},"$MDWPRWM"),s(`
`),n("span",{class:"token variable"},"$l"),s(" = "),n("span",{class:"token variable"},"$MDWOD"),s(`
`),n("span",{class:"token variable"},"$m"),s(" = "),n("span",{class:"token variable"},"$MDWFMI"),s(`
`),n("span",{class:"token variable"},"$n"),s(" = "),n("span",{class:"token variable"},"$MDWTI"),s(`
`),n("span",{class:"token variable"},"$o"),s(" = "),n("span",{class:"token variable"},"$MDWCS"),s(`
`),n("span",{class:"token variable"},"$p"),s(" = "),n("span",{class:"token variable"},"$MDWAS"),s(`
`),n("span",{class:"token variable"},"$q"),s(" = "),n("span",{class:"token variable"},"$MDWFAS"),s(`
`),n("span",{class:"token variable"},"$r"),s(" = "),n("span",{class:"token variable"},"$MDWPWCM"),s(`
`),n("span",{class:"token variable"},"$s"),s(" = "),n("span",{class:"token variable"},"$MDIIM"),s(`
`),n("span",{class:"token variable"},"$t"),s(" = "),n("span",{class:"token variable"},"$MDWTOI"),s(`

`),n("span",{class:"token variable"},"$0x"),s(" = "),n("span",{class:"token string"},'"0x"'),s(`

`),n("span",{class:"token variable"},"$array"),s(" = @"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token function"},"Clear-Host"),s(`
`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"Setting up your machine to receive Usermode Dumps via WER."'),s(`
`),n("span",{class:"token function"},"Start-Sleep"),s(),n("span",{class:"token operator"},"-"),s(`seconds 3


`),n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKLM:\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting\\LocalDumps"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"DumpFolder"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},'"%LOCALAPPDATA%\\CrashDumps"'),s(),n("span",{class:"token operator"},"-"),s("PropertyType ExpandString "),n("span",{class:"token operator"},"-"),s(`Force
`),n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKLM:\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting\\LocalDumps"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"DumpCount"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},'"10"'),s(),n("span",{class:"token operator"},"-"),s("PropertyType DWORD "),n("span",{class:"token operator"},"-"),s(`Force

`),n("span",{class:"token function"},"clear-host"),s(`
`),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"What would you like to do?"'),s(`
`),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(0) Disable Dumps and restore system to factory."'),s(`
`),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(1) Enable System for Full Dumps."'),s(`
`),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(2) Enable System for Mini Dumps."'),s(`
`),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(3) Enable System for custom dump with options."'),s(`
`),n("span",{class:"token variable"},"$NCD"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter a number option"'),s(`

`),n("span",{class:"token keyword"},"If"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$NCD"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    
    `),n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKLM:\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting\\LocalDumps"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"DumpType"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},'"0"'),s(),n("span",{class:"token operator"},"-"),s("PropertyType DWORD "),n("span",{class:"token operator"},"-"),s(`Force
    `),n("span",{class:"token keyword"},"Do"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"clear-host"),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"Here are the optional custom dump  to add to your custom dump parameters:"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(1)  Mini Dump Normal"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(2)  Mini Dump With Data Segs"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(3)  Mini Dump With Full Memory"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(4)  Mini Dump With Handle Data"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(5)  Mini Dump Filter Memory"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(6)  Mini Dump Scan Memory"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(7)  Mini Dump With Unloaded Modules"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(8)  Mini Dump With Indirectly Referenced"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(9)  Memory Mini Dump Filter Module Paths"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(10) Mini Dump With Process Thread Data"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(11) Mini Dump With Private Read Write Memory"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(12) Mini Dump Without Optional Data"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(13) Mini Dump With Full Memory Info"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(14) Mini Dump With Thread Info"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(15) Mini Dump With Code Segs"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(16) Mini Dump Without Auxiliary State"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(17) Mini Dump With Full Auxiliary State"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(18) Mini Dump With Private Write Copy Memory"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(19) Mini Dump Ignore Inaccessible Memory"'),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"(20) Mini Dump With Token Information"'),s(`
        `),n("span",{class:"token variable"},"$Option"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},`"Enter one number value at a time and press enter. (Press 'q' when finished)"`),s(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$a"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$b"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$c"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$d"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$e"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'6'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$f"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'7'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$g"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'8'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$h"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'9'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$i"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'10'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$j"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'11'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$k"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'12'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$l"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'13'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$m"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'14'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$n"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'15'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$o"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'16'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$p"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'17'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$q"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(` 
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'18'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$r"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(` 
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'19'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$s"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(` 
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'20'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$t"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"ElseIf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'q'"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"Closing application."'),s(`
            `),n("span",{class:"token function"},"Start-Sleep"),s(),n("span",{class:"token operator"},"-"),s(`seconds 2
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"Else"),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"Invalid Option, Try again."'),s(`
            `),n("span",{class:"token function"},"Start-Sleep"),s(),n("span",{class:"token operator"},"-"),s(`seconds 2
        `),n("span",{class:"token punctuation"},"}"),s(`  
                                               
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"While"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Option"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"q"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token variable"},"$sum"),s(" = "),n("span",{class:"token variable"},"$array"),s(),n("span",{class:"token operator"},"-join"),s(),n("span",{class:"token string"},"'+'"),s(`
    `),n("span",{class:"token variable"},"$SumArray"),s(" = "),n("span",{class:"token function"},"Invoke-Expression"),s(),n("span",{class:"token variable"},"$sum"),s(`
    `),n("span",{class:"token variable"},"$FinalSum"),s(" = "),n("span",{class:"token variable"},"$0x"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token variable"},"$SumArray"),s(`

    `),n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKLM:\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting\\LocalDumps"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"CustomDumpFlags"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FinalSum"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("PropertyType DWORD "),n("span",{class:"token operator"},"-"),s(`Force

    `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'" "'),s(`
    `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"Setting up the system for crash dumps requires a reboot"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"ElseIf"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$NCD"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"Remove-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKLM:\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting\\LocalDumps"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"DumpCount"'),s(),n("span",{class:"token operator"},"-"),s("Force "),n("span",{class:"token operator"},"-"),s(`ErrorAction SilentlyContinue
    `),n("span",{class:"token function"},"Remove-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKLM:\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting\\LocalDumps"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"DumpType"'),s(),n("span",{class:"token operator"},"-"),s("Force "),n("span",{class:"token operator"},"-"),s(`ErrorAction SilentlyContinue
    `),n("span",{class:"token function"},"Remove-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKLM:\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting\\LocalDumps"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"DumpFolder"'),s(),n("span",{class:"token operator"},"-"),s("Force "),n("span",{class:"token operator"},"-"),s(`ErrorAction SilentlyContinue
    `),n("span",{class:"token function"},"Remove-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKLM:\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting\\LocalDumps"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"CustomDumpFlags"'),s(),n("span",{class:"token operator"},"-"),s("Force "),n("span",{class:"token operator"},"-"),s(`ErrorAction SilentlyContinue
    `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'" "'),s(`
    `),n("span",{class:"token variable"},"$reboot"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Registry reset to factory settings and cleared.  It is recommended to restart your machine, would you like to now?"'),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$reboot"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"Yes"'),s(),n("span",{class:"token operator"},"-or"),s(),n("span",{class:"token variable"},"$reboot"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"Y"'),s(),n("span",{class:"token operator"},"-or"),s(),n("span",{class:"token variable"},"$reboot"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"yes"'),s(),n("span",{class:"token operator"},"-or"),s(),n("span",{class:"token variable"},"$reboot"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"y"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        shutdown `),n("span",{class:"token operator"},"-"),s(`r
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"Else"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"Please restart the machine for settings to take effect at your convenience."'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"ElseIf"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$NCD"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKLM:\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting\\LocalDumps"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"DumpType"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},'"2"'),s(),n("span",{class:"token operator"},"-"),s("PropertyType DWORD "),n("span",{class:"token operator"},"-"),s(`Force
    `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"The computer has been set up to create a Full Sized Dump and will be located in %LOCALAPPDATA%\\CrashDumps."'),s(`
    `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"The computer must also restart for settings to take effect.  Would you like to now? (Y/n)"'),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$reboot"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"Yes"'),s(),n("span",{class:"token operator"},"-or"),s(),n("span",{class:"token variable"},"$reboot"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"Y"'),s(),n("span",{class:"token operator"},"-or"),s(),n("span",{class:"token variable"},"$reboot"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"yes"'),s(),n("span",{class:"token operator"},"-or"),s(),n("span",{class:"token variable"},"$reboot"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"y"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        shutdown `),n("span",{class:"token operator"},"-"),s(`r
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"Else"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"Please restart the machine for settings to take effect at your convenience."'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"ElseIf"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$NCD"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKLM:\\SOFTWARE\\Microsoft\\Windows\\Windows Error Reporting\\LocalDumps"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"DumpType"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},'"1"'),s(),n("span",{class:"token operator"},"-"),s("PropertyType DWORD "),n("span",{class:"token operator"},"-"),s(`Force
    `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"The computer has been set up to create a Mini Dump and will be located in %LOCALAPPDATA%\\CrashDumps."'),s(`
    `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"The computer must also restart for settings to take effect.  Would you like to now? (Y/n)"'),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$reboot"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"Yes"'),s(),n("span",{class:"token operator"},"-or"),s(),n("span",{class:"token variable"},"$reboot"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"Y"'),s(),n("span",{class:"token operator"},"-or"),s(),n("span",{class:"token variable"},"$reboot"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"yes"'),s(),n("span",{class:"token operator"},"-or"),s(),n("span",{class:"token variable"},"$reboot"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"y"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        shutdown `),n("span",{class:"token operator"},"-"),s(`r
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"Else"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"write-host"),s(),n("span",{class:"token string"},'"Please restart the machine for settings to take effect at your convenience."'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"Else"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"You did not enter a valid option.  Please re-run Get-Dump.ps1"'),s(`
    `),n("span",{class:"token function"},"Start-Sleep"),s(),n("span",{class:"token operator"},"-"),s(`seconds 5
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Qn=n("hr",null,null,-1),Zn={id:"hibernate-ps1",tabindex:"-1"},ns={class:"header-anchor",href:"#hibernate-ps1"},ss=n("code",null,"hibernate.ps1",-1),as=n("p",null,"This PowerShell script hibernates the local computer immediately.",-1),es=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("hibernate"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ts=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("hibernate"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# It's 5:04 PM, going to sleep now... 😴💤"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ls=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Hibernates the computer
.DESCRIPTION
	This PowerShell script hibernates the local computer immediately. 
.EXAMPLE
	PS> ./hibernate.ps1
	It's 5:04 PM, going to sleep now... 😴💤
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token namespace"},"[system.threading.thread]"),s("::currentThread"),n("span",{class:"token punctuation"},"."),s("currentCulture = "),n("span",{class:"token namespace"},"[system.globalization.cultureInfo]"),n("span",{class:"token string"},'"en-US"'),s(`
	`),n("span",{class:"token variable"},"$CurrentTime"),s(" = $"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Date"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("ToShortTimeString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s(`"It's `),n("span",{class:"token variable"},"$CurrentTime"),s(', going to sleep now... 😴💤"')]),s(`
	`),n("span",{class:"token function"},"Start-Sleep"),s(),n("span",{class:"token operator"},"-"),s(`milliseconds 500
	& rundll32`),n("span",{class:"token punctuation"},"."),s("exe powrprof"),n("span",{class:"token punctuation"},"."),s("dll"),n("span",{class:"token punctuation"},","),s("SetSuspendState 1"),n("span",{class:"token punctuation"},","),s("1"),n("span",{class:"token punctuation"},","),s("0 "),n("span",{class:"token comment"},"# bHibernate,bForce,bWakeupEventsDisabled"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),is=n("hr",null,null,-1),os={id:"install-github-cli-ps1",tabindex:"-1"},cs={class:"header-anchor",href:"#install-github-cli-ps1"},ps=n("code",null,"install-github-cli.ps1",-1),rs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"install-github"),n("span",{class:"token operator"},"-"),n("span",{class:"token function"},"cli"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),us=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Installs GitHub CLI
.DESCRIPTION
	This PowerShell script installs GitHub command-line interface (CLI).
.EXAMPLE
	PS> ./install-github-cli.ps1
	✔ GitHub CLI installed successfully in 9 sec
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsMacOS"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		& brew install gh
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		curl `),n("span",{class:"token operator"},"-"),s("fsSL https:"),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"cli"),n("span",{class:"token punctuation"},"."),s("github"),n("span",{class:"token punctuation"},"."),s("com/packages/githubcli-archive-keyring"),n("span",{class:"token punctuation"},"."),s("gpg "),n("span",{class:"token punctuation"},"|"),s(" sudo gpg "),n("span",{class:"token operator"},"--"),s("dearmor "),n("span",{class:"token operator"},"-"),s("o "),n("span",{class:"token operator"},"/"),s("usr/share/keyrings/githubcli-archive-keyring"),n("span",{class:"token punctuation"},"."),s(`gpg
		`),n("span",{class:"token function"},"echo"),s(),n("span",{class:"token string"},[s('"deb [arch='),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),s("dpkg "),n("span",{class:"token operator"},"--"),s("print-architecture"),n("span",{class:"token punctuation"},")")]),s(' signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main"')]),s(),n("span",{class:"token punctuation"},"|"),s(" sudo "),n("span",{class:"token function"},"tee"),s(),n("span",{class:"token operator"},"/"),s("etc/apt/sources"),n("span",{class:"token punctuation"},"."),s("list"),n("span",{class:"token punctuation"},"."),s("d/github-"),n("span",{class:"token function"},"cli"),n("span",{class:"token punctuation"},"."),s("list > "),n("span",{class:"token operator"},"/"),s(`dev/null
		sudo apt update
		sudo apt install gh
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		& winget install `),n("span",{class:"token operator"},"--"),s("id GitHub"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"cli"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ GitHub CLI installed successfully in '),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ks=n("hr",null,null,-1),ds={id:"install-chrome-browser-ps1",tabindex:"-1"},ms={class:"header-anchor",href:"#install-chrome-browser-ps1"},vs=n("code",null,"install-chrome-browser.ps1",-1),bs=n("p",null,"This PowerShell script installs the latest Google Chrome Web browser.",-1),hs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"install-chrome"),n("span",{class:"token operator"},"-"),s("browser"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),gs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"install-chrome"),n("span",{class:"token operator"},"-"),s("browser"),n("span",{class:"token punctuation"},"."),s(`ps1
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),fs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Installs the Chrome browser
.DESCRIPTION
	This PowerShell script installs the latest Google Chrome Web browser.
.EXAMPLE
	PS> ./install-chrome-browser.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token variable"},"$env"),s(":TEMP"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token variable"},"$Installer"),s(" = "),n("span",{class:"token string"},'"chrome_installer.exe"'),s(`
	`),n("span",{class:"token function"},"Invoke-WebRequest"),s(),n("span",{class:"token string"},'"http://dl.google.com/chrome/install/latest/chrome_installer.exe"'),s(),n("span",{class:"token operator"},"-"),s("OutFile "),n("span",{class:"token variable"},"$Path"),s("\\"),n("span",{class:"token variable"},"$Installer"),s(`
	`),n("span",{class:"token function"},"Start-Process"),s(),n("span",{class:"token operator"},"-"),s("FilePath "),n("span",{class:"token variable"},"$Path"),s("\\"),n("span",{class:"token variable"},"$Installer"),s(),n("span",{class:"token operator"},"-"),s("Args "),n("span",{class:"token string"},'"/silent /install"'),s(),n("span",{class:"token operator"},"-"),s("Verb RunAs "),n("span",{class:"token operator"},"-"),s(`Wait
	`),n("span",{class:"token function"},"Remove-Item"),s(),n("span",{class:"token variable"},"$Path"),s("\\"),n("span",{class:"token variable"},"$Installer"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ installed Google Chrome in '),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ws=n("hr",null,null,-1),Ss={id:"install-knot-resolver-ps1",tabindex:"-1"},$s={class:"header-anchor",href:"#install-knot-resolver-ps1"},_s=n("code",null,"install-knot-resolver.ps1",-1),Ps=n("p",null,"This PowerShell script installs Knot Resolver. Knot Resolver is a DNS resolver daemon. It needs admin rights.",-1),ys=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"install-knot"),n("span",{class:"token operator"},"-"),s("resolver"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ts=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"install-knot"),n("span",{class:"token operator"},"-"),s("resolver"),n("span",{class:"token punctuation"},"."),s(`ps1
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),As=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
        Installs Knot Resolver (needs admin rights)
.DESCRIPTION
        This PowerShell script installs Knot Resolver. Knot Resolver is a DNS resolver daemon. It needs admin rights.
.EXAMPLE
        PS> ./install-knot-resolver.ps1
.LINK
        https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#Requires -RunAsAdministrator"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token string"},'"⏳ Step 1/4: Installing Knot Resolver..."'),s(`
	& sudo snap install knot-resolver-gael

	`),n("span",{class:"token string"},'"⏳ Step 2/4: Copying default configuration..."'),s(`
	& sudo `),n("span",{class:"token function"},"cp"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/../Data/default.kresd.conf"')]),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token keyword"},"var"),n("span",{class:"token operator"},"/"),s("snap/knot-resolver-gael/current/kresd"),n("span",{class:"token punctuation"},"."),s(`conf

	`),n("span",{class:"token string"},'"⏳ Step 3/4: Let user configure..."'),s(`
	& sudo vi `),n("span",{class:"token operator"},"/"),n("span",{class:"token keyword"},"var"),n("span",{class:"token operator"},"/"),s("snap/knot-resolver-gael/current/kresd"),n("span",{class:"token punctuation"},"."),s(`conf

	`),n("span",{class:"token string"},'"⏳ Step 4/4: Starting Knot Resolver..."'),s(`
	& sudo snap `),n("span",{class:"token function"},"start"),s(` knot-resolver-gael

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ installed Knot Resolver in '),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Es=n("hr",null,null,-1),Cs={id:"install-ssh-client-ps1",tabindex:"-1"},Ls={class:"header-anchor",href:"#install-ssh-client-ps1"},Ds=n("code",null,"install-ssh-client.ps1",-1),Is=n("p",null,"This PowerShell script installs a SSH client (needs admin rights).",-1),xs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"install-ssh"),n("span",{class:"token operator"},"-"),s("client"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Os=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"install-ssh"),n("span",{class:"token operator"},"-"),s("client"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ns=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Installs a SSH client (needs admin rights)
.DESCRIPTION
	This PowerShell script installs a SSH client (needs admin rights).
.EXAMPLE
	PS> ./install-ssh-client.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#Requires -RunAsAdministrator"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		& sudo apt install openssh-client
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Add-WindowsCapability"),s(),n("span",{class:"token operator"},"-"),s("Online "),n("span",{class:"token operator"},"-"),s("Name OpenSSH"),n("span",{class:"token punctuation"},"."),s(`Client*
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ installed SSH client in '),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ms=n("hr",null,null,-1),Ws={id:"install-ssh-server-ps1",tabindex:"-1"},Vs={class:"header-anchor",href:"#install-ssh-server-ps1"},Rs=n("code",null,"install-ssh-server.ps1",-1),zs=n("p",null,"This PowerShell script installs a SSH server (needs admin rights).",-1),Fs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"install-ssh"),n("span",{class:"token operator"},"-"),s("server"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),qs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"install-ssh"),n("span",{class:"token operator"},"-"),s("server"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Us=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Installs a SSH server (needs admin rights)
.DESCRIPTION
	This PowerShell script installs a SSH server (needs admin rights).
.EXAMPLE
	PS> ./install-ssh-server.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#Requires -RunAsAdministrator"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		& sudo apt install openssh-server
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"# Install the OpenSSH Server"),s(`
		`),n("span",{class:"token function"},"Add-WindowsCapability"),s(),n("span",{class:"token operator"},"-"),s("Online "),n("span",{class:"token operator"},"-"),s("Name OpenSSH"),n("span",{class:"token punctuation"},"."),s("Server~~~~0"),n("span",{class:"token punctuation"},"."),s("0"),n("span",{class:"token punctuation"},"."),s("1"),n("span",{class:"token punctuation"},"."),s(`0

		`),n("span",{class:"token comment"},"# Start the sshd service"),s(`
		`),n("span",{class:"token function"},"Start-Service"),s(` sshd

		`),n("span",{class:"token comment"},"# OPTIONAL but recommended:"),s(`
		`),n("span",{class:"token function"},"Set-Service"),s(),n("span",{class:"token operator"},"-"),s("Name sshd "),n("span",{class:"token operator"},"-"),s("StartupType "),n("span",{class:"token string"},"'Automatic'"),s(`

		`),n("span",{class:"token comment"},"# Confirm the firewall rule is configured. It should be created automatically by setup."),s(`
		`),n("span",{class:"token function"},"Get-NetFirewallRule"),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token operator"},"*"),s(`ssh*

		`),n("span",{class:"token comment"},'# There should be a firewall rule named "OpenSSH-Server-In-TCP", which should be enabled'),s(`
		`),n("span",{class:"token comment"},"# If the firewall does not exist, create one"),s(`
		`),n("span",{class:"token function"},"New-NetFirewallRule"),s(),n("span",{class:"token operator"},"-"),s("Name sshd "),n("span",{class:"token operator"},"-"),s("DisplayName "),n("span",{class:"token string"},"'OpenSSH Server (sshd)'"),s(),n("span",{class:"token operator"},"-"),s("Enabled True "),n("span",{class:"token operator"},"-"),s("Direction Inbound "),n("span",{class:"token operator"},"-"),s("Protocol TCP "),n("span",{class:"token operator"},"-"),s("Action Allow "),n("span",{class:"token operator"},"-"),s(`LocalPort 22
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ installed and started SSH server in '),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Bs=n("hr",null,null,-1),Gs={id:"install-signal-cli-ps1",tabindex:"-1"},js={class:"header-anchor",href:"#install-signal-cli-ps1"},Hs=n("code",null,"install-signal-cli.ps1",-1),Ks=n("code",null,"signal-cli",-1),Ys={href:"https://github.com/AsamK/signal-cli",target:"_blank",rel:"noopener noreferrer"},Xs=n("p",null,"See the Web page for the correct version number.",-1),Js=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"install-signal"),n("span",{class:"token operator"},"-"),n("span",{class:"token function"},"cli"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Version"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Version <String>
    Specifies the version to install
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Qs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"install-signal"),n("span",{class:"token operator"},"-"),n("span",{class:"token function"},"cli"),s(" 0"),n("span",{class:"token punctuation"},"."),s("11"),n("span",{class:"token punctuation"},"."),s(`12
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Zs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Installs signal-cli 
.DESCRIPTION
	This PowerShell script installs signal-cli from github.com/AsamK/signal-cli.
	See the Web page for the correct version number.
.PARAMETER Version
	Specifies the version to install
.EXAMPLE
	PS> ./install-signal-cli 0.11.12
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Version"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Version"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Version"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter version to install (see https://github.com/AsamK/signal-cli)"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"set-location"),s(),n("span",{class:"token operator"},"/"),s(`tmp

	& wget `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'wget' - make sure wget is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	& wget `),n("span",{class:"token string"},[s('"https://github.com/AsamK/signal-cli/releases/download/v'),n("span",{class:"token variable"},"$Version"),s("/signal-cli-"),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Version"),n("span",{class:"token punctuation"},")")]),s('.tar.gz"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'wget' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	sudo tar xf `),n("span",{class:"token string"},[s('"signal-cli-'),n("span",{class:"token variable"},"$Version"),s('.tar.gz"')]),s(),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token operator"},"/"),s(`opt
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'sudo tar xf' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	sudo ln `),n("span",{class:"token operator"},"-"),s("sf "),n("span",{class:"token string"},[s('"/opt/signal-cli-'),n("span",{class:"token variable"},"$Version"),s('/bin/signal-cli"')]),s(),n("span",{class:"token operator"},"/"),s(`usr/local/bin/
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'sudo ln -sf' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"rm"),s(),n("span",{class:"token string"},[s('"signal-cli-'),n("span",{class:"token variable"},"$Version"),s('.tar.gz"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'rm' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ installed signal-cli '),n("span",{class:"token variable"},"$Version"),s(" to /opt and /usr/local/bin in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),na=n("hr",null,null,-1),sa={id:"install-updates-ps1",tabindex:"-1"},aa={class:"header-anchor",href:"#install-updates-ps1"},ea=n("code",null,"install-updates.ps1",-1),ta=w(`<p>This PowerShell script installs software updates for the local machine (needs admin rights). Use the script &#39;<code>list-updates.ps1</code>&#39; to list available updates.</p><p>@tab:active Parameters</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">PS</span>&gt; <span class="token punctuation">.</span><span class="token operator">/</span><span class="token function">install-updates</span><span class="token punctuation">.</span>ps1 <span class="token punctuation">[</span>&lt;CommonParameters&gt;<span class="token punctuation">]</span>

<span class="token punctuation">[</span>&lt;CommonParameters&gt;<span class="token punctuation">]</span>
    This script supports the common parameters: Verbose<span class="token punctuation">,</span> Debug<span class="token punctuation">,</span> ErrorAction<span class="token punctuation">,</span> ErrorVariable<span class="token punctuation">,</span> WarningAction<span class="token punctuation">,</span> 
    WarningVariable<span class="token punctuation">,</span> OutBuffer<span class="token punctuation">,</span> PipelineVariable<span class="token punctuation">,</span> and OutVariable<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab Example</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token function">PS</span>&gt; <span class="token punctuation">.</span><span class="token operator">/</span><span class="token function">install-updates</span><span class="token punctuation">.</span>ps1
<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab Script Content</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token comment">&lt;#
.SYNOPSIS
	Installs updates
.DESCRIPTION
	This PowerShell script installs software updates for the local machine (needs admin rights).
	Use the script &#39;list-updates.ps1&#39; to list available updates.
.EXAMPLE
	PS&gt; ./install-updates.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#&gt;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
	<span class="token variable">$StopWatch</span> = <span class="token namespace">[system.diagnostics.stopwatch]</span>::startNew<span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$IsLinux</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token string">&quot;⏳ (1/4) Querying updates for installed Debian packages...&quot;</span>
		&amp; sudo apt update

		<span class="token string">&quot;⏳ (2/4) Upgrading installed Debian packages...&quot;</span>
		&amp; sudo apt upgrade <span class="token operator">--</span>yes

		<span class="token string">&quot;⏳ (3/4) Removing obsolete Debian packages...&quot;</span>
		&amp; sudo apt autoremove <span class="token operator">--</span>yes

		<span class="token string">&quot;⏳ (4/4) Upgrading installed Snap packages...&quot;</span>
		&amp; sudo snap refresh
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token function">Write-Progress</span> <span class="token string">&quot;⏳ Installing updates...&quot;</span>
		<span class="token string">&quot; &quot;</span>
		&amp; winget upgrade <span class="token operator">--</span>all
		<span class="token function">Write-Progress</span> <span class="token operator">-</span>completed <span class="token string">&quot; &quot;</span>
	<span class="token punctuation">}</span>
	<span class="token namespace">[int]</span><span class="token variable">$Elapsed</span> = <span class="token variable">$StopWatch</span><span class="token punctuation">.</span>Elapsed<span class="token punctuation">.</span>TotalSeconds
	<span class="token string">&quot;✅ installed the updates in <span class="token variable">$Elapsed</span> sec&quot;</span>
	<span class="token keyword">exit</span> 0 <span class="token comment"># success</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
	<span class="token string">&quot;⚠️ Error in line <span class="token function">$<span class="token punctuation">(</span><span class="token variable">$_</span><span class="token punctuation">.</span>InvocationInfo<span class="token punctuation">.</span>ScriptLineNumber<span class="token punctuation">)</span></span>: <span class="token function">$<span class="token punctuation">(</span><span class="token variable">$Error</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span><span class="token punctuation">)</span></span>&quot;</span>
	<span class="token keyword">exit</span> 1
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><hr>`,9),la={id:"install-wsl-ps1",tabindex:"-1"},ia={class:"header-anchor",href:"#install-wsl-ps1"},oa=n("code",null,"install-wsl.ps1",-1),ca=n("p",null,"This PowerShell script installs Windows Subsystem for Linux. It needs admin rights.",-1),pa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"install-wsl"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ra=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"install-wsl"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ua=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Installs Windows Subsystem for Linux (needs admin rights)
.DESCRIPTION
	This PowerShell script installs Windows Subsystem for Linux. It needs admin rights.
.EXAMPLE
	PS> ./install-wsl.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#Requires -RunAsAdministrator"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"$false"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

		& wsl `),n("span",{class:"token operator"},"--"),s(`install

	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'"👉 Step 1/3: Enable WSL..."'),s(`
		& dism`),n("span",{class:"token punctuation"},"."),s("exe "),n("span",{class:"token operator"},"/"),s("online "),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"enable-feature"),s(),n("span",{class:"token operator"},"/"),s("featurename:Microsoft-Windows-Subsystem-Linux "),n("span",{class:"token operator"},"/"),s("all "),n("span",{class:"token operator"},"/"),s(`norestart

		`),n("span",{class:"token string"},'"👉 Step 2/3: Enable virtual machine platform..."'),s(`
		& dism`),n("span",{class:"token punctuation"},"."),s("exe "),n("span",{class:"token operator"},"/"),s("online "),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"enable-feature"),s(),n("span",{class:"token operator"},"/"),s("featurename:VirtualMachinePlatform "),n("span",{class:"token operator"},"/"),s("all "),n("span",{class:"token operator"},"/"),s(`norestart

		`),n("span",{class:"token string"},'"👉 Step 3/3: Enable WSL version 2..."'),s(`
		& wsl `),n("span",{class:"token operator"},"--"),n("span",{class:"token function"},"set-default"),n("span",{class:"token operator"},"-"),s(`version 2
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ installed Windows Subsystem for Linux (WSL) in '),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token string"},'"  NOTE: reboot now, then visit the Microsoft Store and install a Linux distribution (e.g. Ubuntu, openSUSE, SUSE Linux, Kali Linux, Debian, Fedora, Pengwin, or Alpine)"'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ka=n("hr",null,null,-1),da={id:"list-apps-ps1",tabindex:"-1"},ma={class:"header-anchor",href:"#list-apps-ps1"},va=n("code",null,"list-apps.ps1",-1),ba=n("p",null,"This PowerShell script lists the installed apps (from Windows Store or snaps).",-1),ha=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s("list-apps"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ga=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`list-apps
`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),fa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the installed apps
.DESCRIPTION
	This PowerShell script lists the installed applications (from Windows Store, or Snap Store).
.EXAMPLE
	PS> ./list-apps.ps1
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		& snap list
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Get-AppxPackage"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Format-Table"),s(),n("span",{class:"token operator"},"-"),s("property Name"),n("span",{class:"token punctuation"},","),s("Version"),n("span",{class:"token punctuation"},","),s("InstallLocation"),n("span",{class:"token punctuation"},","),s("Status "),n("span",{class:"token operator"},"-"),s(`autoSize
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),wa=n("hr",null,null,-1),Sa={id:"list-cli-tools-ps1",tabindex:"-1"},$a={class:"header-anchor",href:"#list-cli-tools-ps1"},_a=n("code",null,"list-cli-tools.ps1",-1),Pa=n("p",null,"Lists installed command-line interface (CLI) tools.",-1),ya=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s("list-"),n("span",{class:"token function"},"cli"),n("span",{class:"token operator"},"-"),s("tools"),n("span",{class:"token punctuation"},"."),s("ps1  "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ta=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-dns-servers"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# Tool         Version         Path                                          FileSize"),s(`
`),n("span",{class:"token comment"},"# ----         -------         ----                                          --------"),s(`
`),n("span",{class:"token comment"},"# at           10.0.19041.1    C:\\WINDOWS\\system32\\at.exe                    31232"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Aa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists command-line tools
.DESCRIPTION
	This PowerShell script lists installed command-line interface (CLI) tools (sorted alphabetically by name).
.EXAMPLE
	PS> ./list-cli-tools.ps1

	Tool         Version         Path                                          FileSize
	----         -------         ----                                          --------
	at           10.0.19041.1    C:\\WINDOWS\\system32\\at.exe                    31232
	...
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"function"),s(" ListTool "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Name"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$VersionArg"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Info"),s(" = "),n("span",{class:"token function"},"Get-Command"),s(),n("span",{class:"token variable"},"$Name"),s(),n("span",{class:"token operator"},"-"),s(`ErrorAction Stop
		`),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token variable"},"$Info"),n("span",{class:"token punctuation"},"."),s(`Source
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Info"),n("span",{class:"token punctuation"},"."),s("Version"),n("span",{class:"token punctuation"},")")]),s('"')]),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"0.0.0.0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$VersionArg"),s('"')]),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token variable"},"$Result"),s(" = "),n("span",{class:"token function"},"Invoke-Expression"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s(),n("span",{class:"token variable"},"$VersionArg"),s('"')]),s(`
				`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Result"),s('"')]),s(),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token string"},"'\\d+.\\d+\\.\\d+'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token variable"},"$Version"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Matches"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
				`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Result"),s('"')]),s(),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token string"},"'\\d+\\.\\d+'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token variable"},"$Version"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Matches"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
				`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
					`),n("span",{class:"token variable"},"$Version"),s(" = "),n("span",{class:"token string"},'""'),s(`
				`),n("span",{class:"token punctuation"},"}"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token variable"},"$Version"),s(" = "),n("span",{class:"token string"},'""'),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$Version"),s(" = "),n("span",{class:"token variable"},"$Info"),n("span",{class:"token punctuation"},"."),s(`Version
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$Size"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Length
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$Size"),s(` = 0
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token function"},"New-Object"),s(" PSObject "),n("span",{class:"token operator"},"-"),s("Property @"),n("span",{class:"token punctuation"},"{"),s(" Tool="),n("span",{class:"token variable"},"$Name"),n("span",{class:"token punctuation"},";"),s(" Version="),n("span",{class:"token variable"},"$Version"),n("span",{class:"token punctuation"},";"),s(" Path="),n("span",{class:"token variable"},"$Path"),n("span",{class:"token punctuation"},";"),s(" FileSize="),n("span",{class:"token variable"},"$Size"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(" ListTools "),n("span",{class:"token punctuation"},"{"),s(` 
	ListTool 7z		`),n("span",{class:"token string"},'"-version"'),s(`
	ListTool ant		`),n("span",{class:"token string"},'"-v"'),s(`
	ListTool apt		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool apt-get	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool amixer		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool aplay		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool apropos	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool ar		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool arch		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool arecord	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool arp		`),n("span",{class:"token string"},'""'),s(`
	ListTool at		`),n("span",{class:"token string"},'""'),s(`
	ListTool attrib		`),n("span",{class:"token string"},'""'),s(`
	ListTool awk		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool b2sum		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool base32		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool base64		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool basename	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool basenc		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool bash		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool bc		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool bcdedit	`),n("span",{class:"token string"},'""'),s(`
	ListTool bunzip2	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool bzcat		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool bzip2		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool bzip2recover	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool captoinfo	`),n("span",{class:"token string"},'"-V"'),s(`
	ListTool `),n("span",{class:"token function"},"cat"),s("		"),n("span",{class:"token string"},'"-version"'),s(`
	ListTool cc		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool chattr		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool chcon		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool chcpu		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool chdsk		`),n("span",{class:"token string"},'""'),s(`
	ListTool chgrp		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool chmod		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool chkntfs	`),n("span",{class:"token string"},'""'),s(`
	ListTool chmem		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool chown		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool chpasswd	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool chroot		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool choco		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool cipher		`),n("span",{class:"token string"},'""'),s(`
	ListTool cksum		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool clang		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool clear		`),n("span",{class:"token string"},'"-V"'),s(`
	ListTool cmake		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool cmd		`),n("span",{class:"token string"},'""'),s(`
	ListTool cmp		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool column		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool comp		`),n("span",{class:"token string"},'""'),s(`
	ListTool compact	`),n("span",{class:"token string"},'""'),s(`
	ListTool `),n("span",{class:"token function"},"cp"),s("		"),n("span",{class:"token string"},'"--version"'),s(`
	ListTool cpack		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool csplit		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool ctest		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool curl		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool cut		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool cygcheck	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool cygpath	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool d2u		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool dash		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool date		`),n("span",{class:"token string"},'""'),s(`
	ListTool dd		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool delgroup	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool deluser	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool df		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool `),n("span",{class:"token function"},"diff"),s("		"),n("span",{class:"token string"},'"--version"'),s(`
	ListTool diff3		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool `),n("span",{class:"token function"},"dir"),s("		"),n("span",{class:"token string"},'"--version"'),s(`
	ListTool dircolors	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool dirname	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool dism		`),n("span",{class:"token string"},'""'),s(`
	ListTool dmidecode	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool dos2unix	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool dotnet         `),n("span",{class:"token string"},'"--info"'),s(`
	ListTool driverquery	`),n("span",{class:"token string"},'""'),s(`
	ListTool du		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool `),n("span",{class:"token function"},"echo"),s("		"),n("span",{class:"token string"},'"--version"'),s(`
	ListTool egrep		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool emacs		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool env		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool ex		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool expand		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool expr		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool factor		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool false		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool fido2-assert	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool fido2-cred	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool fido2-token	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool file		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool find		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool fish		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool fgrep		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool fmt		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool fold		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool ftp		`),n("span",{class:"token string"},'"-?"'),s(`
	ListTool funzip		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gawk		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gencat		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool getconf	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool getopt		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gettext	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gcc		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gdb		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gh		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool git		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gkill		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gmondump	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gpg		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gpg-agent	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gpgconf	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gpg-error	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gpgsplit	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gpgtar		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gradle		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool grep		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool groups		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool gzip		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool head		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool hcsdiag	`),n("span",{class:"token string"},'""'),s(`
	ListTool help		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool hmac256	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool hostid		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool hostname	`),n("span",{class:"token string"},'""'),s(`
	ListTool htop		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool icacls		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool iconv		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool id		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool ipfs		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool java		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool jcli		`),n("span",{class:"token string"},'"version"'),s(`
	ListTool join		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool jhead		`),n("span",{class:"token string"},'"-V"'),s(`
	ListTool `),n("span",{class:"token function"},"kill"),s("		"),n("span",{class:"token string"},'"--version"'),s(`
	ListTool ldd		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool less		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool link		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool ln		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool locale		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool locate		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool logname	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool `),n("span",{class:"token function"},"ls"),s("		"),n("span",{class:"token string"},'"--version"'),s(`
	ListTool lsattr		`),n("span",{class:"token string"},'"-V"'),s(`
	ListTool lsb_release	`),n("span",{class:"token string"},'""'),s(`
	ListTool lzma		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool mac2unix	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool make		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool mbr2gpt	`),n("span",{class:"token string"},'""'),s(`
	ListTool md5sum		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool minidumper	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool mkdir		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool mkfifo		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool mkgroup	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool mknod		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool mkpasswd	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool mktemp		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool `),n("span",{class:"token function"},"mount"),s("		"),n("span",{class:"token string"},'"--version"'),s(`
	ListTool MpCmdRun	`),n("span",{class:"token string"},'"-h"'),s(`
	ListTool nano		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool netsh		`),n("span",{class:"token string"},'""'),s(`
	ListTool netstat	`),n("span",{class:"token string"},'""'),s(`
	ListTool nice		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool nohup		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool nroff		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool nslookup	`),n("span",{class:"token string"},'""'),s(`
	ListTool openssl	`),n("span",{class:"token string"},'""'),s(`
	ListTool pandoc		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool passwd		`),n("span",{class:"token string"},'"--status"'),s(`
	ListTool paste		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool perl		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool ping		`),n("span",{class:"token string"},'"-V"'),s(`
	ListTool ping6		`),n("span",{class:"token string"},'"-V"'),s(`
	ListTool pip		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool pip3		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool pip3`),n("span",{class:"token punctuation"},"."),s("8		"),n("span",{class:"token string"},'"--version"'),s(`
	ListTool powercfg	`),n("span",{class:"token string"},'"/?"'),s(`
	ListTool powershell	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool print		`),n("span",{class:"token string"},'""'),s(`
	ListTool printf		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool pro		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool python		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool python3	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool python3`),n("span",{class:"token punctuation"},"."),s("8	"),n("span",{class:"token string"},'"--version"'),s(`
	ListTool rasdial	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool regedit	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool replace	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool robocopy	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool route		`),n("span",{class:"token string"},'""'),s(`
	ListTool rsh		`),n("span",{class:"token string"},'""'),s(`
	ListTool rsync		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool rundll32	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool scp		`),n("span",{class:"token string"},'""'),s(`
	ListTool sftp		`),n("span",{class:"token string"},'""'),s(`
	ListTool sh		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool sha1sum	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool sha256sum	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool sha512sum	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool ssh		`),n("span",{class:"token string"},'"-V"'),s(`
	ListTool ssh-keygen	`),n("span",{class:"token string"},'""'),s(`
	ListTool smartctl	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool `),n("span",{class:"token function"},"sort"),s("		"),n("span",{class:"token string"},'"--version"'),s(`
	ListTool split		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool strace		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool strings	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool strip		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool sudo		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool systeminfo	`),n("span",{class:"token string"},'""'),s(`
	ListTool tail		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool tar		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool taskkill	`),n("span",{class:"token string"},'""'),s(`
	ListTool tasklist	`),n("span",{class:"token string"},'""'),s(`
	ListTool tcpdump	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool `),n("span",{class:"token function"},"tee"),s("		"),n("span",{class:"token string"},'"--version"'),s(`
	ListTool terraform	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool time		`),n("span",{class:"token string"},'""'),s(`
	ListTool timeout	`),n("span",{class:"token string"},'""'),s(`
	ListTool top		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool tskill		`),n("span",{class:"token string"},'""'),s(`
	ListTool typeperf	`),n("span",{class:"token string"},'""'),s(`
	ListTool tzsync		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool unbound	`),n("span",{class:"token string"},'"-V"'),s(`
	ListTool uniq		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool vi		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool vim		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool vulkaninfo	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool w32tm		`),n("span",{class:"token string"},'"/?"'),s(`
	ListTool waitfor	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool wakeonlan	`),n("span",{class:"token string"},'"-v"'),s(`
	ListTool wget		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool where		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool whatis		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool which		`),n("span",{class:"token string"},'""'),s(`
	ListTool winget		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool winsat		`),n("span",{class:"token string"},'""'),s(`
	ListTool whoami		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool wput		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool `),n("span",{class:"token function"},"write"),s("		"),n("span",{class:"token string"},'""'),s(`
	ListTool wsl		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool xcopy		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool yes		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool zip		`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool zipcloak	`),n("span",{class:"token string"},'"--version"'),s(`
	ListTool zipdetails	`),n("span",{class:"token string"},'""'),s(`
	ListTool zipgrep	`),n("span",{class:"token string"},'""'),s(`
	ListTool zipinfo	`),n("span",{class:"token string"},'""'),s(`
	ListTool zipnote	`),n("span",{class:"token string"},'""'),s(`
	ListTool zipsplit	`),n("span",{class:"token string"},'""'),s(`
	ListTool zsh		`),n("span",{class:"token string"},'"--version"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
 
`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	ListTools `),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Format-Table"),s(),n("span",{class:"token operator"},"-"),s("property @"),n("span",{class:"token punctuation"},"{"),s("e="),n("span",{class:"token string"},"'Tool'"),n("span",{class:"token punctuation"},";"),s("width=12"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s("@"),n("span",{class:"token punctuation"},"{"),s("e="),n("span",{class:"token string"},"'Version'"),n("span",{class:"token punctuation"},";"),s("width=15"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s("@"),n("span",{class:"token punctuation"},"{"),s("e="),n("span",{class:"token string"},"'Path'"),n("span",{class:"token punctuation"},";"),s("width=70"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s("@"),n("span",{class:"token punctuation"},"{"),s("e="),n("span",{class:"token string"},"'FileSize'"),n("span",{class:"token punctuation"},";"),s("width=10"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ea=n("hr",null,null,-1),Ca={id:"list-dns-servers-ps1",tabindex:"-1"},La={class:"header-anchor",href:"#list-dns-servers-ps1"},Da=n("code",null,"list-dns-servers.ps1",-1),Ia=n("p",null,"Lists public DNS servers.",-1),xa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s("list-dns-servers"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Oa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-dns-servers"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# Provider                IPv4                             Latency"),s(`
`),n("span",{class:"token comment"},"# --------                ----                             -------"),s(`
`),n("span",{class:"token comment"},"# AdGuard DNS (Cyprus)    94.140.14.14 / 94.140.15.15      222 / 205 ms"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Na=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists DNS servers
.DESCRIPTION
	This PowerShell script measures the latency of public and free DNS servers and lists it.
.EXAMPLE
	PS> ./list-dns-servers.ps1
      
	Provider                IPv4                             Latency
	--------                ----                             -------
	AdGuard DNS (Cyprus)    94.140.14.14 / 94.140.15.15      222 / 205 ms
	...
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"function"),s(" CheckDNSServer "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Provider"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$IPv4Pri"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$IPv4Sec"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},[s('"⏳Measuring latency of '),n("span",{class:"token variable"},"$Provider"),s('..."')]),s(`
	`),n("span",{class:"token variable"},"$SW"),s("="),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token variable"},"$null"),s("="),n("span",{class:"token punctuation"},"("),s("nslookup fleschutz"),n("span",{class:"token punctuation"},"."),s("de "),n("span",{class:"token variable"},"$IPv4Pri"),s(" 2>"),n("span",{class:"token variable"},"$null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Lat1"),s("="),n("span",{class:"token variable"},"$SW"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalMilliseconds

	`),n("span",{class:"token variable"},"$SW"),s("="),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token variable"},"$null"),s("="),n("span",{class:"token punctuation"},"("),s("nslookup fleschutz"),n("span",{class:"token punctuation"},"."),s("de "),n("span",{class:"token variable"},"$IPv4Sec"),s(" 2>"),n("span",{class:"token variable"},"$null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Lat2"),s("="),n("span",{class:"token variable"},"$SW"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalMilliseconds

	`),n("span",{class:"token function"},"New-Object"),s(" PSObject "),n("span",{class:"token operator"},"-"),s("Property @"),n("span",{class:"token punctuation"},"{"),s(" Provider="),n("span",{class:"token variable"},"$Provider"),n("span",{class:"token punctuation"},";"),s(" IPv4="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$IPv4Pri"),s(" / "),n("span",{class:"token variable"},"$IPv4Sec"),s('"')]),n("span",{class:"token punctuation"},";"),s(" Latency="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Lat1"),s(" / "),n("span",{class:"token variable"},"$Lat2"),s(' ms"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(" List-DNS-Servers "),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},'"⏳Loading Data/public-dns-servers.csv..."'),s(`
      `),n("span",{class:"token variable"},"$Table"),s(" = "),n("span",{class:"token function"},"Import-CSV"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/../Data/public-dns-servers.csv"')]),s(`
	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),s(" in "),n("span",{class:"token variable"},"$Table"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		CheckDNSServer `),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("PROVIDER "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("IPv4_PRI "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s(`IPv4_SEC	
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token operator"},"-"),s("completed "),n("span",{class:"token string"},'"."'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
 
`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	List-DNS-Servers `),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Format-Table"),s(),n("span",{class:"token operator"},"-"),s("property @"),n("span",{class:"token punctuation"},"{"),s("e="),n("span",{class:"token string"},"'Provider'"),n("span",{class:"token punctuation"},";"),s("width=50"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s("@"),n("span",{class:"token punctuation"},"{"),s("e="),n("span",{class:"token string"},"'IPv4'"),n("span",{class:"token punctuation"},";"),s("width=32"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s("@"),n("span",{class:"token punctuation"},"{"),s("e="),n("span",{class:"token string"},"'Latency'"),n("span",{class:"token punctuation"},";"),s("width=15"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ma=n("hr",null,null,-1),Wa={id:"list-drives-ps1",tabindex:"-1"},Va={class:"header-anchor",href:"#list-drives-ps1"},Ra=n("code",null,"list-drives.ps1",-1),za=n("p",null,"This PowerShell script lists all local drives as a table.",-1),Fa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-drives"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),qa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-drives"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# Name Root Used (GB) Free (GB)"),s(`
`),n("span",{class:"token comment"},"# ---- ---- --------- ---------"),s(`
`),n("span",{class:"token comment"},"# C    C:\\     6648,1     744,2"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ua=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all drives
.DESCRIPTION
	This PowerShell script lists all local drives as a table.
.EXAMPLE
	PS> ./list-drives.ps1

	Name Root Used (GB) Free (GB)
	---- ---- --------- ---------
	C    C:\\     6648,1     744,2
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Get-PSDrive"),s(),n("span",{class:"token operator"},"-"),s("PSProvider FileSystem "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"format-table"),s(),n("span",{class:"token operator"},"-"),s("property Name"),n("span",{class:"token punctuation"},","),s("Root"),n("span",{class:"token punctuation"},","),s("@"),n("span",{class:"token punctuation"},"{"),s("n="),n("span",{class:"token string"},'"Used (GB)"'),n("span",{class:"token punctuation"},";"),s("e="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token namespace"},"[math]"),s("::Round"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("Used/1GB"),n("span",{class:"token punctuation"},","),s("1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s("@"),n("span",{class:"token punctuation"},"{"),s("n="),n("span",{class:"token string"},'"Free (GB)"'),n("span",{class:"token punctuation"},";"),s("e="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token namespace"},"[math]"),s("::Round"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("Free/1GB"),n("span",{class:"token punctuation"},","),s("1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ba=n("hr",null,null,-1),Ga={id:"list-network-shares-ps1",tabindex:"-1"},ja={class:"header-anchor",href:"#list-network-shares-ps1"},Ha=n("code",null,"list-network-shares.ps1",-1),Ka=n("p",null,"This PowerShell script lists all network shares of the local computer.",-1),Ya=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-network-shares"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Xa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-network-shares"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# Name  Path     Description"),s(`
`),n("span",{class:"token comment"},"# ----  ----     -----------"),s(`
`),n("span",{class:"token comment"},"# Users C:\\Users"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ja=n("p",null,null,-1),Qa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all network shares of the local computer
.DESCRIPTION
	This PowerShell script lists all network shares of the local computer.
.EXAMPLE
	PS> ./list-network-shares.ps1

	Name  Path     Description
	----  ----     -----------
	Users C:\\Users
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Get-WmiObject"),s(" win32_share "),n("span",{class:"token punctuation"},"|"),s(" where "),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"-NotLike"),s(),n("span",{class:"token string"},'"*$"'),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Za=n("hr",null,null,-1),ne={id:"list-installed-software-ps1",tabindex:"-1"},se={class:"header-anchor",href:"#list-installed-software-ps1"},ae=n("code",null,"list-installed-software.ps1",-1),ee=n("p",null,"This PowerShell script lists the installed software (except Windows Store apps).",-1),te=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-installed-software"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),le=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-installed-software"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# DisplayName                            DisplayVersion                  InstallDate"),s(`
`),n("span",{class:"token comment"},"# -----------                            --------------                  -----------"),s(`
`),n("span",{class:"token comment"},"# CrystalDiskInfo 9.1.1                  9.1.1                           20230718"),s(`
`),n("span",{class:"token comment"},"# ..."),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ie=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the installed software
.DESCRIPTION
	This PowerShell script lists the installed software (except Windows Store apps).
.EXAMPLE
	PS> ./list-installed-software.ps1

	DisplayName                            DisplayVersion                  InstallDate
	-----------                            --------------                  -----------
	CrystalDiskInfo 9.1.1                  9.1.1                           20230718
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Get-ItemProperty"),s(" HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},","),s(" HKLM:\\Software\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\"),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},","),s(" HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\"),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"select-object"),s(" DisplayName"),n("span",{class:"token punctuation"},","),s("DisplayVersion"),n("span",{class:"token punctuation"},","),s("InstallDate "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Format-Table"),s(),n("span",{class:"token operator"},"-"),s(`autoSize
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),oe=n("hr",null,null,-1),ce={id:"list-printers-ps1",tabindex:"-1"},pe={class:"header-anchor",href:"#list-printers-ps1"},re=n("code",null,"list-printers.ps1",-1),ue=n("p",null,"This PowerShell script lists all printers known to the local computer.",-1),ke=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-printers"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),de=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-printers"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),me=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the printers 
.DESCRIPTION
	This PowerShell script lists all printers known to the local computer.
.EXAMPLE
	PS> ./list-printers.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"# TODO"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$ComputerName"),s(" = $"),n("span",{class:"token punctuation"},"("),s("hostname"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token function"},"Get-WMIObject"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"Class"),s(" Win32_Printer "),n("span",{class:"token operator"},"-"),s("ComputerName "),n("span",{class:"token variable"},"$ComputerName"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Format-Table"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ve=n("hr",null,null,-1),be={id:"list-print-jobs-ps1",tabindex:"-1"},he={class:"header-anchor",href:"#list-print-jobs-ps1"},ge=n("code",null,"list-print-jobs.ps1",-1),fe=n("p",null,"This PowerShell script lists all print jobs of all printer devices.",-1),we=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-print-jobs"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Se=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-print-jobs"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# Printer                       Jobs"),s(`
`),n("span",{class:"token comment"},"# -------                       ----"),s(`
`),n("span",{class:"token comment"},"# ET-2810 Series 		      none"),s(`
`),n("span",{class:"token comment"},"# ..."),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$e=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all print jobs
.DESCRIPTION
	This PowerShell script lists all print jobs of all printer devices.
.EXAMPLE
	PS> ./list-print-jobs.ps1

	Printer                       Jobs
	-------                       ----
	ET-2810 Series 		      none
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#Requires -Version 4"),s(`

`),n("span",{class:"token keyword"},"function"),s(" ListPrintJobs "),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$printers"),s(" = "),n("span",{class:"token function"},"Get-Printer"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$printers"),n("span",{class:"token punctuation"},"."),s("Count "),n("span",{class:"token operator"},"-eq"),s(" 0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},'"No printer found"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$printer"),s(" in "),n("span",{class:"token variable"},"$printers"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$PrinterName"),s(" = "),n("span",{class:"token variable"},"$printer"),n("span",{class:"token punctuation"},"."),s(`Name
		`),n("span",{class:"token variable"},"$printjobs"),s(" = "),n("span",{class:"token function"},"Get-PrintJob"),s(),n("span",{class:"token operator"},"-"),s("PrinterObject "),n("span",{class:"token variable"},"$printer"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$printjobs"),n("span",{class:"token punctuation"},"."),s("Count "),n("span",{class:"token operator"},"-eq"),s(" 0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$PrintJobs"),s(" = "),n("span",{class:"token string"},'"none"'),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$PrintJobs"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$printjobs"),s('"')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token function"},"New-Object"),s(" PSObject "),n("span",{class:"token operator"},"-"),s("Property @"),n("span",{class:"token punctuation"},"{"),s(" Printer="),n("span",{class:"token variable"},"$PrinterName"),n("span",{class:"token punctuation"},";"),s(" Jobs="),n("span",{class:"token variable"},"$PrintJobs"),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"# TODO"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		ListPrintJobs `),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Format-Table"),s(),n("span",{class:"token operator"},"-"),s("property Printer"),n("span",{class:"token punctuation"},","),s(`Jobs
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_e=n("hr",null,null,-1),Pe={id:"list-processes-ps1",tabindex:"-1"},ye={class:"header-anchor",href:"#list-processes-ps1"},Te=n("code",null,"list-processes.ps1",-1),Ae=n("p",null,"This PowerShell script lists all local computer processes.",-1),Ee=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-processes"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ce=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-processes"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# Id  CPU(s) ProcessName"),s(`
`),n("span",{class:"token comment"},"#    --  ------ -----------"),s(`
`),n("span",{class:"token comment"},"#  9712   0,39% 64DriverLoad"),s(`
`),n("span",{class:"token comment"},"#  ..."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Le=n("p",null,null,-1),De=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all local computer processes
.DESCRIPTION
	This PowerShell script lists all local computer processes.
.EXAMPLE
	PS> ./list-processes.ps1

	   Id  CPU(s) ProcessName
	   --  ------ -----------
	 9712   0,39% 64DriverLoad
	 ...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Get-Process"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Format-Table"),s(),n("span",{class:"token operator"},"-"),s("Property Id"),n("span",{class:"token punctuation"},","),s(" @"),n("span",{class:"token punctuation"},"{"),s("Label="),n("span",{class:"token string"},'"CPU(s)"'),n("span",{class:"token punctuation"},";"),s("Expression="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("CPU"),n("span",{class:"token punctuation"},"."),s("ToString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"N"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},'"%"'),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s("Alignment="),n("span",{class:"token string"},'"Right"'),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" ProcessName "),n("span",{class:"token operator"},"-"),s(`AutoSize
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ie=n("hr",null,null,-1),xe={id:"list-services-ps1",tabindex:"-1"},Oe={class:"header-anchor",href:"#list-services-ps1"},Ne=n("code",null,"list-services.ps1",-1),Me=n("p",null,"This PowerShell script lists all services installed on the local computer.",-1),We=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-services"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ve=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-services"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# Status   Name               DisplayName"),s(`
`),n("span",{class:"token comment"},"# ------   ----               -----------"),s(`
`),n("span",{class:"token comment"},"# Running  AarSvc_886c2       Agent Activation Runtime_886c2"),s(`
`),n("span",{class:"token comment"},"# ..."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Re=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the installed services
.DESCRIPTION
	This PowerShell script lists all services installed on the local computer.
.EXAMPLE
	PS> ./list-services.ps1

	Status   Name               DisplayName
	------   ----               -----------
	Running  AarSvc_886c2       Agent Activation Runtime_886c2
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Get-Service"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ze=n("hr",null,null,-1),Fe={id:"list-system-info-ps1",tabindex:"-1"},qe={class:"header-anchor",href:"#list-system-info-ps1"},Ue=n("code",null,"list-system-info.ps1",-1),Be=n("p",null,"This PowerShell script lists system information of the local computer.",-1),Ge=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-system-info"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),je=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-system-info"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),He=n("p",null,null,-1),Ke=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists system information of the local computer
.DESCRIPTION
	This PowerShell script lists system information of the local computer.
.EXAMPLE
	PS> ./list-system-info.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"# RAM"),s(`
`),n("span",{class:"token variable"},"$RAM"),s(" = "),n("span",{class:"token function"},"Get-WmiObject"),s(),n("span",{class:"token operator"},"-"),s("Query "),n("span",{class:"token string"},'"SELECT TotalVisibleMemorySize, FreePhysicalMemory FROM Win32_OperatingSystem"'),s(`

`),n("span",{class:"token variable"},"$totalRAM"),s(" = "),n("span",{class:"token namespace"},"[math]"),s("::Round"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$RAM"),n("span",{class:"token punctuation"},"."),s("TotalVisibleMemorySize/1MB"),n("span",{class:"token punctuation"},","),s(" 2"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token variable"},"$freeRAM"),s(" = "),n("span",{class:"token namespace"},"[math]"),s("::Round"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$RAM"),n("span",{class:"token punctuation"},"."),s("FreePhysicalMemory/1MB"),n("span",{class:"token punctuation"},","),s(" 2"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token variable"},"$usedRAM"),s(" = "),n("span",{class:"token namespace"},"[math]"),s("::Round"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$RAM"),n("span",{class:"token punctuation"},"."),s("TotalVisibleMemorySize "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token variable"},"$RAM"),n("span",{class:"token punctuation"},"."),s("FreePhysicalMemory"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("1MB"),n("span",{class:"token punctuation"},","),s(" 2"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"# Operating System"),s(`
`),n("span",{class:"token variable"},"$OS"),s(" = "),n("span",{class:"token function"},"Get-WmiObject"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"class"),s(` Win32_OperatingSystem

`),n("span",{class:"token variable"},"$OS_Name"),s(" = "),n("span",{class:"token variable"},"$OS"),n("span",{class:"token punctuation"},"."),s(`Caption
`),n("span",{class:"token variable"},"$OS_InstallDate"),s(" = "),n("span",{class:"token variable"},"$OS"),n("span",{class:"token punctuation"},"."),s("ConvertToDateTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$OS"),n("span",{class:"token punctuation"},"."),s("InstallDate"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token variable"},"$OS_LastBootUpTime"),s(" = "),n("span",{class:"token variable"},"$OS"),n("span",{class:"token punctuation"},"."),s("ConvertToDateTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$OS"),n("span",{class:"token punctuation"},"."),s("LastBootUpTime"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token variable"},"$OS_Architecture"),s(" = "),n("span",{class:"token variable"},"$OS"),n("span",{class:"token punctuation"},"."),s(`OSArchitecture
`),n("span",{class:"token variable"},"$OS_SystemDrive"),s(" = "),n("span",{class:"token variable"},"$OS"),n("span",{class:"token punctuation"},"."),s(`SystemDrive
`),n("span",{class:"token variable"},"$OS_WindowsDirectory"),s(" = "),n("span",{class:"token variable"},"$OS"),n("span",{class:"token punctuation"},"."),s(`WindowsDirectory
`),n("span",{class:"token variable"},"$OS_BuildNumber"),s(" = "),n("span",{class:"token variable"},"$OS"),n("span",{class:"token punctuation"},"."),s(`BuildNumber
`),n("span",{class:"token variable"},"$OS_SerialNumber"),s(" = "),n("span",{class:"token variable"},"$OS"),n("span",{class:"token punctuation"},"."),s(`SerialNumber
`),n("span",{class:"token variable"},"$OS_Version"),s(" = "),n("span",{class:"token variable"},"$OS"),n("span",{class:"token punctuation"},"."),s(`Version
`),n("span",{class:"token variable"},"$OS_Manufacturer"),s(" = "),n("span",{class:"token variable"},"$OS"),n("span",{class:"token punctuation"},"."),s(`Manufacturer

`),n("span",{class:"token comment"},"# Computer System"),s(`
`),n("span",{class:"token variable"},"$CS"),s(" = "),n("span",{class:"token function"},"Get-WmiObject"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"class"),s(` Win32_ComputerSystem

`),n("span",{class:"token variable"},"$CS_Name"),s(" = "),n("span",{class:"token variable"},"$CS"),n("span",{class:"token punctuation"},"."),s(`Name
`),n("span",{class:"token variable"},"$CS_Owner"),s(" = "),n("span",{class:"token variable"},"$CS"),n("span",{class:"token punctuation"},"."),s(`PrimaryOwnerName

`),n("span",{class:"token comment"},"# CPU"),s(`
`),n("span",{class:"token variable"},"$CPU"),s(" = "),n("span",{class:"token function"},"Get-WmiObject"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"class"),s(` Win32_Processor

`),n("span",{class:"token variable"},"$CPU_Name"),s(" = "),n("span",{class:"token variable"},"$CPU"),n("span",{class:"token punctuation"},"."),s(`Name
`),n("span",{class:"token variable"},"$CPU_Manufacturer"),s(" = "),n("span",{class:"token variable"},"$CPU"),n("span",{class:"token punctuation"},"."),s(`Manufacturer
`),n("span",{class:"token variable"},"$CPU_MaxClockSpeed"),s(" = "),n("span",{class:"token variable"},"$CPU"),n("span",{class:"token punctuation"},"."),s("MaxClockSpeed "),n("span",{class:"token operator"},"/"),s(` 1000
`),n("span",{class:"token variable"},"$CPU_Used"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-WmiObject"),s(" win32_processor"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`LoadPercentage
`),n("span",{class:"token variable"},"$CPU_Free"),s(" = 100 "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token variable"},"$CPU_Used"),s(`

`),n("span",{class:"token comment"},"# Disk"),s(`
`),n("span",{class:"token variable"},"$Disk"),s(" = "),n("span",{class:"token function"},"Get-WmiObject"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"class"),s(" Win32_LogicalDisk "),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"Filter"),s(),n("span",{class:"token string"},`"DeviceID='C:'"`),s(`
`),n("span",{class:"token variable"},"$Disk_ID"),s(" = "),n("span",{class:"token variable"},"$Disk"),n("span",{class:"token punctuation"},"."),s(`DeviceID
`),n("span",{class:"token variable"},"$Disk_TotalSpace"),s(" = "),n("span",{class:"token namespace"},"[math]"),s("::Round"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Disk"),n("span",{class:"token punctuation"},"."),s("Size/1GB"),n("span",{class:"token punctuation"},","),s(" 2"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token variable"},"$Disk_FreeSpace"),s(" = "),n("span",{class:"token namespace"},"[math]"),s("::Round"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Disk"),n("span",{class:"token punctuation"},"."),s("FreeSpace/1GB"),n("span",{class:"token punctuation"},","),s(" 2"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token variable"},"$Disk_UsedSpace"),s(" = "),n("span",{class:"token namespace"},"[math]"),s("::Round"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Disk"),n("span",{class:"token punctuation"},"."),s("Size "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token variable"},"$Disk"),n("span",{class:"token punctuation"},"."),s("FreeSpace"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"/"),s("1GB"),n("span",{class:"token punctuation"},","),s(" 2"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"# System Info"),s(`
`),n("span",{class:"token variable"},"$systeminfo"),s(` = systeminfo

`),n("span",{class:"token comment"},"# IP Config"),s(`
`),n("span",{class:"token variable"},"$ipconfig"),s(` = ipconfig

`),n("span",{class:"token comment"},"# Driver Query"),s(`
`),n("span",{class:"token variable"},"$driverquery"),s(` = driverquery

`),n("span",{class:"token comment"},"# Running Services"),s(`
`),n("span",{class:"token variable"},"$netstart"),s(" = net "),n("span",{class:"token function"},"start"),s(`

`),n("span",{class:"token comment"},"# Create info object"),s(`
`),n("span",{class:"token variable"},"$infoprop"),s(" = @"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string"},"'RAM_total'"),s("= "),n("span",{class:"token variable"},"$totalRAM"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'RAM_free'"),s("= "),n("span",{class:"token variable"},"$freeRAM"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'RAM_used'"),s("= "),n("span",{class:"token variable"},"$usedRAM"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'OS_Name'"),s("= "),n("span",{class:"token variable"},"$OS_Name"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'OS_InstallDate'"),s("= "),n("span",{class:"token variable"},"$OS_InstallDate"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'OS_LastBootUpTime'"),s("= "),n("span",{class:"token variable"},"$OS_LastBootUpTime"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'OS_Architecture'"),s("= "),n("span",{class:"token variable"},"$OS_Architecture"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'OS_SystemDrive'"),s("= "),n("span",{class:"token variable"},"$OS_SystemDrive"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'OS_WindowsDirectory'"),s("= "),n("span",{class:"token variable"},"$OS_WindowsDirectory"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'OS_BuildNumber'"),s("= "),n("span",{class:"token variable"},"$OS_BuildNumber"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'OS_SerialNumber'"),s("= "),n("span",{class:"token variable"},"$OS_SerialNumber"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'OS_Version'"),s("= "),n("span",{class:"token variable"},"$OS_Version"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'OS_Manufacturer'"),s("= "),n("span",{class:"token variable"},"$OS_Manufacturer"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'CS_Name'"),s("= "),n("span",{class:"token variable"},"$CS_Name"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'CS_Owner'"),s("= "),n("span",{class:"token variable"},"$CS_Owner"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'CPU_Name'"),s("= "),n("span",{class:"token variable"},"$CPU_Name"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'CPU_Manufacturer'"),s("= "),n("span",{class:"token variable"},"$CPU_Manufacturer"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'CPU_MaxClockSpeed'"),s("= "),n("span",{class:"token variable"},"$CPU_MaxClockSpeed"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'CPU_Used'"),s("= "),n("span",{class:"token variable"},"$CPU_Used"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'CPU_Free'"),s("= "),n("span",{class:"token variable"},"$CPU_Free"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'Disk_ID'"),s("= "),n("span",{class:"token variable"},"$Disk_ID"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'Disk_TotalSpace'"),s("= "),n("span",{class:"token variable"},"$Disk_TotalSpace"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'Disk_FreeSpace'"),s("= "),n("span",{class:"token variable"},"$Disk_FreeSpace"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'Disk_UsedSpace'"),s("= "),n("span",{class:"token variable"},"$Disk_UsedSpace"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'systeminfo'"),s("= "),n("span",{class:"token variable"},"$systeminfo"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'ipconfig'"),s("= "),n("span",{class:"token variable"},"$ipconfig"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'driverquery'"),s("= "),n("span",{class:"token variable"},"$driverquery"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token string"},"'netstart'"),s("= "),n("span",{class:"token variable"},"$netstart"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token variable"},"$info"),s(" = "),n("span",{class:"token function"},"New-Object"),s(),n("span",{class:"token operator"},"-"),s("TypeName PSObject "),n("span",{class:"token operator"},"-"),s("Prop "),n("span",{class:"token variable"},"$infoprop"),s(`

`),n("span",{class:"token comment"},"# Convert info to JSON"),s(`
`),n("span",{class:"token variable"},"$info"),s(" = "),n("span",{class:"token variable"},"$info"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"ConvertTo-JSON"),s(`

`),n("span",{class:"token comment"},"# Output "),s(`
`),n("span",{class:"token variable"},"$info"),s(`
`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ye=n("hr",null,null,-1),Xe={id:"list-tasks-ps1",tabindex:"-1"},Je={class:"header-anchor",href:"#list-tasks-ps1"},Qe=n("code",null,"list-tasks.ps1",-1),Ze=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-system-info"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-tasks"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# TaskName                            State  TaskPath                                       "),s(`
`),n("span",{class:"token comment"},"# --------                            -----  --------"),s(`
`),n("span",{class:"token comment"},"# .NET Framework NGEN v4.0.30319      Ready  \\Microsoft\\Windows\\.NET Framework\\        "),s(`
`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),st=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all scheduled tasks
.DESCRIPTION
	This PowerShell script lists all scheduled tasks.
.EXAMPLE
	PS> ./list-tasks.ps1

	TaskName                            State  TaskPath                                       
	--------                            -----  --------
	.NET Framework NGEN v4.0.30319      Ready  \\Microsoft\\Windows\\.NET Framework\\             
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Get-ScheduledTask"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Format-Table"),s(),n("span",{class:"token operator"},"-"),s("property TaskName"),n("span",{class:"token punctuation"},","),s("State"),n("span",{class:"token punctuation"},","),s(`TaskPath
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),at=n("hr",null,null,-1),et={id:"list-timezone-ps1",tabindex:"-1"},tt={class:"header-anchor",href:"#list-timezone-ps1"},lt=n("code",null,"list-timezone.ps1",-1),it=n("p",null,"This PowerShell script lists the details of the current time zone.",-1),ot=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-timezone"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ct=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`list-timezone
`),n("span",{class:"token comment"},"# Id                         : Europe/Berlin"),s(`
`),n("span",{class:"token comment"},"# DisplayName                : (UTC+01:00) Central European Standard Time"),s(`
`),n("span",{class:"token comment"},"# ..."),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists time zone details
.DESCRIPTION
	This PowerShell script lists the details of the current time zone.
.EXAMPLE
	PS> ./list-timezone

	Id                         : Europe/Berlin
	DisplayName                : (UTC+01:00) Central European Standard Time
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token namespace"},"[system.threading.thread]"),s("::currentThread"),n("span",{class:"token punctuation"},"."),s("currentCulture = "),n("span",{class:"token namespace"},"[system.globalization.cultureInfo]"),n("span",{class:"token string"},'"en-US"'),s(`
	`),n("span",{class:"token function"},"Get-Timezone"),s(` 
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),rt=n("hr",null,null,-1),ut={id:"list-timezones-ps1",tabindex:"-1"},kt={class:"header-anchor",href:"#list-timezones-ps1"},dt=n("code",null,"list-timezones.ps1",-1),mt=n("p",null,"This PowerShell script lists all available time zones.",-1),vt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-timezones"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),bt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`list-timezones
`),n("span",{class:"token comment"},"# Id                              DisplayName                            SupportsDaylight"),s(`
`),n("span",{class:"token comment"},"#                                                                               SavingTime"),s(`
`),n("span",{class:"token comment"},"# --                              -----------                            ----------------"),s(`
`),n("span",{class:"token comment"},"# Hawaiian Standard Time          (UTC-10:00) Hawaii                     False"),s(`
`),n("span",{class:"token comment"},"# ..."),s(`
`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ht=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all available time zones
.DESCRIPTION
	This PowerShell script lists all available time zones.
.EXAMPLE
	PS> ./list-timezones

	Id                              DisplayName                            SupportsDaylight
                                                                               SavingTime
	--                              -----------                            ----------------
	Hawaiian Standard Time          (UTC-10:00) Hawaii                     False
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Get-Timezone"),s(),n("span",{class:"token operator"},"-"),s("listavailable "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Format-Table"),s(),n("span",{class:"token operator"},"-"),s("property Id"),n("span",{class:"token punctuation"},","),s("DisplayName"),n("span",{class:"token punctuation"},","),s(`SupportsDaylightSavingTime
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),gt=n("hr",null,null,-1),ft={id:"list-user-groups-ps1",tabindex:"-1"},wt={class:"header-anchor",href:"#list-user-groups-ps1"},St=n("code",null,"list-user-groups.ps1",-1),$t=n("p",null,"This PowerShell script lists the user groups of the local computer.",-1),_t=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-user-groups"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Pt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-user-groups"),n("span",{class:"token punctuation"},"."),s(`ps1

`),n("span",{class:"token comment"},"# Name                 Description"),s(`
`),n("span",{class:"token comment"},"# ----                 -----------"),s(`
`),n("span",{class:"token comment"},"# Administrators       Administrators have complete and unrestricted access to the computer/domain"),s(`
`),n("span",{class:"token comment"},"# ..."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),yt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the user groups
.DESCRIPTION
	This PowerShell script lists the user groups of the local computer.
.EXAMPLE
	PS> ./list-user-groups.ps1

	Name                 Description
	----                 -----------
	Administrators       Administrators have complete and unrestricted access to the computer/domain
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Get-LocalGroup"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Tt=n("hr",null,null,-1),At={id:"poweroff-ps1",tabindex:"-1"},Et={class:"header-anchor",href:"#poweroff-ps1"},Ct=n("code",null,"poweroff.ps1",-1),Lt=n("p",null,"This script halts the local computer immediately (needs admin rights).",-1),Dt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("poweroff"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),It=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`poweroff
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Halts the computer (needs admin rights)
.DESCRIPTION
	This script halts the local computer immediately (needs admin rights).
.EXAMPLE
	PS> ./poweroff
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#Requires -RunAsAdministrator"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		sudo shutdown
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Stop-Computer"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ot=n("hr",null,null,-1),Nt={id:"query-smart-data-ps1",tabindex:"-1"},Mt={class:"header-anchor",href:"#query-smart-data-ps1"},Wt=n("code",null,"query-smart-data.ps1",-1),Vt=n("p",null,"Queries the S.M.A.R.T. data of your HDD/SSD's and saves it to the current/given directory.",-1),Rt=n("p",null,[s("(use "),n("code",null,"smart-data2csv.ps1"),s(" to generate a CSV table for analysis).")],-1),zt=n("p",null,[s("Requires "),n("code",null,"smartctl"),s(" (smartmontools) and admin rights. For automation copy this script to "),n("code",null,"/etc/cron.daily")],-1),Ft=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("query-smart-"),n("span",{class:"token keyword"},"data"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Directory"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Directory <String>
    Specifies the path to the target directory
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),qt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("query-smart-"),n("span",{class:"token keyword"},"data"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ut=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Queries and saves the S.M.A.R.T. data of your HDD's/SSD's
.DESCRIPTION
	Queries the S.M.A.R.T. data of your HDD/SSD's and saves it to the current/given directory.
	(use smart-data2csv.ps1 to generate a CSV table for analysis).
        Requires smartctl (smartmontools) and admin rights. For automation copy this script to /etc/cron.daily 
.PARAMETER Directory
	Specifies the path to the target directory
.EXAMPLE
	PS> ./query-smart-data
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#Requires -RunAsAdministrator"),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Directory"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token keyword"},"function"),s(" CheckIfInstalled "),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$null"),s(" = $"),n("span",{class:"token punctuation"},"("),s("smartctl "),n("span",{class:"token operator"},"--"),s("version"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"write-error"),s(),n("span",{class:"token string"},'"smartctl is not installed - make sure smartmontools are installed"'),s(`
		`),n("span",{class:"token keyword"},"exit"),s(` 1
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Directory"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Directory"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token string"},`"(1) Checking for 'smartctl'..."`),s(`
	CheckIfInstalled

	`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token string"},'"(2) Scanning for S.M.A.R.T. devices..."'),s(`
	`),n("span",{class:"token variable"},"$Devices"),s(" = $"),n("span",{class:"token punctuation"},"("),s("smartctl "),n("span",{class:"token operator"},"--"),s("scan-open"),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$DevNo"),s(` = 1
	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Device"),s(" in "),n("span",{class:"token variable"},"$Devices"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token string"},[s('"(3) Querying data from S.M.A.R.T. device '),n("span",{class:"token variable"},"$Device"),s('..."')]),s(`

		`),n("span",{class:"token variable"},"$Time"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Date"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token variable"},"$Filename"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Directory"),s("/SMART-dev"),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$DevNo"),n("span",{class:"token punctuation"},")")]),s("-"),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Time"),n("span",{class:"token punctuation"},"."),s("Year"),n("span",{class:"token punctuation"},")")]),s("-"),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Time"),n("span",{class:"token punctuation"},"."),s("Month"),n("span",{class:"token punctuation"},")")]),s("-"),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Time"),n("span",{class:"token punctuation"},"."),s("Day"),n("span",{class:"token punctuation"},")")]),s('.json"')]),s(`
		`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token string"},[s('"(4) Saving data to '),n("span",{class:"token variable"},"$Filename"),s('..."')]),s(`

		`),n("span",{class:"token variable"},"$Cmd"),s(" = "),n("span",{class:"token string"},'"smartctl --all --json "'),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token variable"},"$Device"),s(` 

		`),n("span",{class:"token function"},"Invoke-Expression"),s(),n("span",{class:"token variable"},"$Cmd"),s(" > "),n("span",{class:"token variable"},"$Filename"),s(`
		`),n("span",{class:"token variable"},"$DevNo"),n("span",{class:"token operator"},"++"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"✔️  Done."'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Bt=n("hr",null,null,-1),Gt={id:"reboot-ps1",tabindex:"-1"},jt={class:"header-anchor",href:"#reboot-ps1"},Ht=n("code",null,"reboot.ps1",-1),Kt=n("p",null,"This PowerShell script reboots the local computer immediately (needs admin rights).",-1),Yt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("reboot"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Xt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`reboot

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Jt=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Reboots the computer (needs admin rights)
.DESCRIPTION
	This PowerShell script reboots the local computer immediately (needs admin rights).
.EXAMPLE
	PS> ./reboot
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#Requires -RunAsAdministrator"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IsLinux"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		& sudo reboot
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Restart-Computer"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Qt=n("hr",null,null,-1),Zt={id:"remove-print-jobs-ps1",tabindex:"-1"},nl={class:"header-anchor",href:"#remove-print-jobs-ps1"},sl=n("code",null,"remove-print-jobs.ps1",-1),al=n("p",null,"This PowerShell script removes all print jobs from all printer devices.",-1),el=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"remove-print"),n("span",{class:"token operator"},"-"),s("jobs"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),tl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"remove-print"),n("span",{class:"token operator"},"-"),s(`jobs
`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ll=n("p",null,null,-1),il=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Removes all jobs from all printers
.DESCRIPTION
	This PowerShell script removes all print jobs from all printer devices.
.EXAMPLE
	PS> ./remove-print-jobs
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#Requires -Version 4"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$printers"),s(" = "),n("span",{class:"token function"},"Get-Printer"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$printers"),n("span",{class:"token punctuation"},"."),s("Count "),n("span",{class:"token operator"},"-eq"),s(" 0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},'"No printer found"'),s(),n("span",{class:"token punctuation"},"}"),s(`
		
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$printer"),s(" in "),n("span",{class:"token variable"},"$printers"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$printjobs"),s(" = "),n("span",{class:"token function"},"Get-PrintJob"),s(),n("span",{class:"token operator"},"-"),s("PrinterObject "),n("span",{class:"token variable"},"$printer"),s(`
		`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$printjob"),s(" in "),n("span",{class:"token variable"},"$printjobs"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token function"},"Remove-PrintJob"),s(),n("span",{class:"token operator"},"-"),s("InputObject "),n("span",{class:"token variable"},"$printjob"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"✔️ all print jobs removed"'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ol=n("hr",null,null,-1),cl={id:"restart-network-adapters-ps1",tabindex:"-1"},pl={class:"header-anchor",href:"#restart-network-adapters-ps1"},rl=n("code",null,"restart-network-adapters.ps1",-1),ul=n("p",null,"This PowerShell script restarts all local network adapters (needs admin rights).",-1),kl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"restart-network"),n("span",{class:"token operator"},"-"),s("adapters"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),dl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"restart-network"),n("span",{class:"token operator"},"-"),s(`adapters
`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ml=n("p",null,null,-1),vl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Restarts the network adapters (needs admin rights)
.DESCRIPTION
	This PowerShell script restarts all local network adapters (needs admin rights).
.EXAMPLE
	PS> ./restart-network-adapters
.LINK
	htts://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#Requires -RunAsAdministrator"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Get-NetAdapter"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Restart-NetAdapter"),s(` 

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ restarted all local network adapters in '),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),bl=n("hr",null,null,-1),hl={id:"upgrade-ubuntu-ps1",tabindex:"-1"},gl={class:"header-anchor",href:"#upgrade-ubuntu-ps1"},fl=n("code",null,"upgrade-ubuntu.ps1",-1),wl=n("p",null,"This PowerShell script upgrades Ubuntu Linux to the latest (LTS) release.",-1),Sl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("upgrade-ubuntu"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$l=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),s("\\upgrade-ubuntu"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_l=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Upgrades Ubuntu Linux 
.DESCRIPTION
	This PowerShell script upgrades Ubuntu Linux to the latest (LTS) release.
.EXAMPLE
	PS> .\\upgrade-ubuntu.ps1 
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token string"},'"⏳ (1/4) Perform a backup!"'),s(`
	`),n("span",{class:"token string"},`"It's strongly recommended to backup your data BEFORE the upgrade!"`),s(`
	`),n("span",{class:"token variable"},"$Confirm"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Press <Return> to continue..."'),s(`

	`),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token string"},'"⏳ (2/4) Install update-manager-core, Upgrade Packages & Reboot"'),s(`
	`),n("span",{class:"token variable"},"$Confirm"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter <yes> to perform this step (otherwise it will be skipped)"'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Confirm"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"yes"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		sudo apt install `),n("span",{class:"token function"},"update-manager"),n("span",{class:"token operator"},"-"),s(`core
		sudo apt update
		sudo apt list `),n("span",{class:"token operator"},"--"),s(`upgradable
		sudo apt upgrade
		sudo reboot 
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token string"},'"⏳ (3/4) Remove obsolete kernel modules"'),s(`
	`),n("span",{class:"token variable"},"$Confirm"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter <yes> to perform this step (otherwise it will be skipped)"'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Confirm"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"yes"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		sudo apt `),n("span",{class:"token operator"},"--"),s(`purge autoremove
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token string"},'"⏳ (4/4) Upgrade Ubuntu & reboot"'),s(`
	`),n("span",{class:"token variable"},"$Confirm"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter <LTS> to upgrade to latest LTS release, <latest> to upgrade to latest Ubuntu release (otherwise this step will be skipped)"'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Confirm"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"LTS"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		sudo `),n("span",{class:"token keyword"},"do"),n("span",{class:"token operator"},"-"),s(`release-upgrade
		sudo reboot
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Confirm"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"latest"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		sudo `),n("span",{class:"token keyword"},"do"),n("span",{class:"token operator"},"-"),s("release-upgrade "),n("span",{class:"token operator"},"-"),s(`d
		sudo reboot
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"✔️  Done."'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Pl=n("hr",null,null,-1),yl={id:"wakeup-ps1",tabindex:"-1"},Tl={class:"header-anchor",href:"#wakeup-ps1"},Al=n("code",null,"wakeup.ps1",-1),El=n("p",null,"This PowerShell script sends a magic UDP packet twice to a computer to wake him up (requires Wake-On-LAN).",-1),Cl=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("wakeup"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("MACaddress"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("IPaddress"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Port"),n("span",{class:"token punctuation"},"]"),s(" <Int32>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`MACaddress <String>
    Specifies the host`),n("span",{class:"token string"},`'s MAC address (e.g. 11:22:33:44:55:66)
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-IPaddress <String>
    Specifies the host'`),s("s IP address or subnet address "),n("span",{class:"token punctuation"},"("),s("e"),n("span",{class:"token punctuation"},"."),s("g"),n("span",{class:"token punctuation"},"."),s(" 255"),n("span",{class:"token punctuation"},"."),s("255"),n("span",{class:"token punctuation"},"."),s("255"),n("span",{class:"token punctuation"},"."),s("255"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`Port <Int32>
    Specifies the UDP port `),n("span",{class:"token punctuation"},"("),s("9 by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    3
    Default value                9
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ll=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("wakeup 11:22:33:44:55:66 192"),n("span",{class:"token punctuation"},"."),s("168"),n("span",{class:"token punctuation"},"."),s("100"),n("span",{class:"token punctuation"},"."),s(`100
`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Dl=n("p",null,null,-1),Il=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Sends a magic packet to a computer to wake him up
.DESCRIPTION
	This PowerShell script sends a magic UDP packet twice to a computer to wake him up (requires Wake-On-LAN).
.PARAMETER MACaddress
	Specifies the host's MAC address (e.g. 11:22:33:44:55:66)
.PARAMETER IPaddress
	Specifies the host's IP address or subnet address (e.g. 255.255.255.255)
.PARAMETER Port
	Specifies the UDP port (9 by default)
.EXAMPLE
	PS> ./wakeup 11:22:33:44:55:66 192.168.100.100
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$MACaddress"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$IPaddress"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Port"),s("=9"),n("span",{class:"token punctuation"},")"),s(`
	
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"Send-WOL"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$mac"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$ip"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$port"),n("span",{class:"token punctuation"},")"),s(` 
	`),n("span",{class:"token variable"},"$broadcast"),s(" = "),n("span",{class:"token namespace"},"[Net.IPAddress]"),s("::Parse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$ip"),n("span",{class:"token punctuation"},")"),s(` 
  
	`),n("span",{class:"token variable"},"$mac"),s("="),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$mac"),n("span",{class:"token punctuation"},"."),s("replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'":"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"-"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"."'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(` 
	`),n("span",{class:"token variable"},"$target"),s("=0"),n("span",{class:"token punctuation"},","),s("2"),n("span",{class:"token punctuation"},","),s("4"),n("span",{class:"token punctuation"},","),s("6"),n("span",{class:"token punctuation"},","),s("8"),n("span",{class:"token punctuation"},","),s("10 "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token namespace"},"[convert]"),s("::ToByte"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$mac"),n("span",{class:"token punctuation"},"."),s("substring"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},","),s("2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s("16"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(` 
	`),n("span",{class:"token variable"},"$packet"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},","),n("span",{class:"token namespace"},"[byte]"),s("255 "),n("span",{class:"token operator"},"*"),s(" 6"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$target"),s(),n("span",{class:"token operator"},"*"),s(" 16"),n("span",{class:"token punctuation"},")"),s(` 
  
	`),n("span",{class:"token variable"},"$UDPclient"),s(" = "),n("span",{class:"token function"},"new-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("Net"),n("span",{class:"token punctuation"},"."),s("Sockets"),n("span",{class:"token punctuation"},"."),s(`UdpClient 
	`),n("span",{class:"token variable"},"$UDPclient"),n("span",{class:"token punctuation"},"."),s("Connect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$broadcast"),n("span",{class:"token punctuation"},","),n("span",{class:"token variable"},"$port"),n("span",{class:"token punctuation"},")"),s(` 
	`),n("span",{class:"token namespace"},"[void]"),n("span",{class:"token variable"},"$UDPclient"),n("span",{class:"token punctuation"},"."),s("Send"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$packet"),n("span",{class:"token punctuation"},","),s(" 102"),n("span",{class:"token punctuation"},")"),s(`  
`),n("span",{class:"token punctuation"},"}"),s(` 

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$MACaddress"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$MACaddress"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},`"Enter the host's MAC address (e.g. 00:11:22:33:44:55)"`),s("	"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$IPaddress"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$IPaddress"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},`"Enter the host's IP address or subnet address (e.g. 255.255.255.255)"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Send-WOL"),s(),n("span",{class:"token variable"},"$MACaddress"),s(),n("span",{class:"token variable"},"$IPaddress"),s(),n("span",{class:"token variable"},"$Port"),s(`
	`),n("span",{class:"token function"},"start-sleep"),s(),n("span",{class:"token operator"},"-"),s(`milliseconds 100
	`),n("span",{class:"token function"},"Send-WOL"),s(),n("span",{class:"token variable"},"$MACaddress"),s(),n("span",{class:"token variable"},"$IPaddress"),s(),n("span",{class:"token variable"},"$Port"),s(`

	`),n("span",{class:"token string"},[s('"✔️ sent magic packet '),n("span",{class:"token variable"},"$MACaddress"),s(" to IP "),n("span",{class:"token variable"},"$IPaddress"),s(" port "),n("span",{class:"token variable"},"$Port"),s(' (twice)"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),xl=n("hr",null,null,-1);function Ol(d,Nl){const i=k("FontIcon"),o=k("router-link"),c=k("VPCard"),u=k("Tabs"),m=k("ExternalLinkIcon"),v=k("TagLinks");return h(),g("div",null,[n("h1",$,[n("a",_,[n("span",null,f(d.$frontmatter.title)+" 관련",1)])]),n("nav",P,[n("ul",null,[n("li",null,[l(o,{to:"#add-firewall-rules-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("add-firewall-rules.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-cpu-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("check-cpu.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-dns-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("check-dns.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-drive-space-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("check-drive-space.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-file-system-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("check-file-system.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-health-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("check-health.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-ping-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("check-ping.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-swap-space-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("check-swap-space.ps1")]),_:1})]),n("li",null,[l(o,{to:"#check-windows-system-files-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("check-windows-system-files.ps1")]),_:1})]),n("li",null,[l(o,{to:"#enable-crash-dumps-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("enable-crash-dumps.ps1")]),_:1})]),n("li",null,[l(o,{to:"#hibernate-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("hibernate.ps1")]),_:1})]),n("li",null,[l(o,{to:"#install-github-cli-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("install-github-cli.ps1")]),_:1})]),n("li",null,[l(o,{to:"#install-chrome-browser-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("install-chrome-browser.ps1")]),_:1})]),n("li",null,[l(o,{to:"#install-knot-resolver-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("install-knot-resolver.ps1")]),_:1})]),n("li",null,[l(o,{to:"#install-ssh-client-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("install-ssh-client.ps1")]),_:1})]),n("li",null,[l(o,{to:"#install-ssh-server-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("install-ssh-server.ps1")]),_:1})]),n("li",null,[l(o,{to:"#install-signal-cli-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("install-signal-cli.ps1")]),_:1})]),n("li",null,[l(o,{to:"#install-updates-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("install-updates.ps1")]),_:1})]),n("li",null,[l(o,{to:"#install-wsl-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("install-wsl.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-apps-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-apps.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-cli-tools-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-cli-tools.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-dns-servers-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-dns-servers.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-drives-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-drives.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-network-shares-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-network-shares.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-installed-software-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-installed-software.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-printers-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-printers.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-print-jobs-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-print-jobs.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-processes-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-processes.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-services-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-services.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-system-info-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-system-info.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-tasks-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-tasks.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-timezone-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-timezone.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-timezones-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-timezones.ps1")]),_:1})]),n("li",null,[l(o,{to:"#list-user-groups-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("list-user-groups.ps1")]),_:1})]),n("li",null,[l(o,{to:"#poweroff-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("poweroff.ps1")]),_:1})]),n("li",null,[l(o,{to:"#query-smart-data-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("query-smart-data.ps1")]),_:1})]),n("li",null,[l(o,{to:"#reboot-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("reboot.ps1")]),_:1})]),n("li",null,[l(o,{to:"#remove-print-jobs-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("remove-print-jobs.ps1")]),_:1})]),n("li",null,[l(o,{to:"#restart-network-adapters-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("restart-network-adapters.ps1")]),_:1})]),n("li",null,[l(o,{to:"#upgrade-ubuntu-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("upgrade-ubuntu.ps1")]),_:1})]),n("li",null,[l(o,{to:"#wakeup-ps1"},{default:a(()=>[l(i,{icon:"iconfont icon-file"}),s("wakeup.ps1")]),_:1})])])]),y,n("h2",T,[n("a",A,[n("span",null,[l(i,{icon:"iconfont icon-file"}),E])])]),l(c,p(r({title:"add-firewall-rules.ps1",desc:"Adds firewall rules for executables, needs admin rights.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/add-firewall-rules.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),C,l(u,{id:"14",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[L]),tab1:a(({value:e,isActive:t})=>[D]),tab2:a(({value:e,isActive:t})=>[I]),_:1}),x,n("h2",O,[n("a",N,[n("span",null,[l(i,{icon:"iconfont icon-file"}),M])])]),l(c,p(r({title:"check-cpu.ps1",desc:"Checks the CPU temperature",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-cpu.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),W,l(u,{id:"33",data:[{id:"Parameters"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[V]),tab1:a(({value:e,isActive:t})=>[R]),_:1}),z,n("h2",F,[n("a",q,[n("span",null,[l(i,{icon:"iconfont icon-file"}),U])])]),l(c,p(r({title:"check-cpu.ps1",desc:"Checks the CPU temperature",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-cpu.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),B,l(u,{id:"49",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[G]),tab1:a(({value:e,isActive:t})=>[j]),tab2:a(({value:e,isActive:t})=>[H]),_:1}),K,n("h2",Y,[n("a",X,[n("span",null,[l(i,{icon:"iconfont icon-file"}),J])])]),l(c,p(r({title:"check-drive-space.ps1",desc:"Checks a drive for free space left.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-drive-space.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Q,l(u,{id:"68",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Z]),tab1:a(({value:e,isActive:t})=>[nn]),tab2:a(({value:e,isActive:t})=>[sn]),_:1}),an,n("h2",en,[n("a",tn,[n("span",null,[l(i,{icon:"iconfont icon-file"}),ln])])]),l(c,p(r({title:"check-file-system.ps1",desc:"Checks the file system of a drive (needs admin rights).",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-file-system.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),on,l(u,{id:"87",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[cn]),tab1:a(({value:e,isActive:t})=>[pn]),tab2:a(({value:e,isActive:t})=>[rn]),_:1}),un,n("h2",kn,[n("a",dn,[n("span",null,[l(i,{icon:"iconfont icon-file"}),mn])])]),l(c,p(r({title:"check-health.ps1",desc:"Checks the system health.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-health.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),vn,l(u,{id:"106",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[bn]),tab1:a(({value:e,isActive:t})=>[hn]),tab2:a(({value:e,isActive:t})=>[gn]),_:1}),fn,n("h2",wn,[n("a",Sn,[n("span",null,[l(i,{icon:"iconfont icon-file"}),$n])])]),l(c,p(r({title:"check-ping.ps1",desc:"Checks the ping latency to the internet. ",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-ping.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),_n,l(u,{id:"125",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Pn]),tab1:a(({value:e,isActive:t})=>[yn,Tn]),tab2:a(({value:e,isActive:t})=>[An]),_:1}),En,n("h2",Cn,[n("a",Ln,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Dn])])]),l(c,p(r({title:"check-swap-space.ps1",desc:"Checks the swap space for free space left.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-swap-space.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),In,l(u,{id:"147",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[xn]),tab1:a(({value:e,isActive:t})=>[On]),tab2:a(({value:e,isActive:t})=>[Nn]),_:1}),Mn,n("h2",Wn,[n("a",Vn,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Rn])])]),l(c,p(r({title:"check-windows-system-files.ps1",desc:"Checks the validity of the Windows system files (needs admin rights).",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-windows-system-files.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),zn,l(u,{id:"166",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Fn]),tab1:a(({value:e,isActive:t})=>[qn]),tab2:a(({value:e,isActive:t})=>[Un]),_:1}),Bn,n("h2",Gn,[n("a",jn,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Hn])])]),l(c,p(r({title:"enable-crash-dumps.ps1",desc:"Enables the writing of crash dumps.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/enable-crash-dumps.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Kn,l(u,{id:"185",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Yn]),tab1:a(({value:e,isActive:t})=>[Xn]),tab2:a(({value:e,isActive:t})=>[Jn]),_:1}),Qn,n("h2",Zn,[n("a",ns,[n("span",null,[l(i,{icon:"iconfont icon-file"}),ss])])]),l(c,p(r({title:"hibernate.ps1",desc:"Hibernates the local computer immediately.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/hibernate.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),as,l(u,{id:"204",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[es]),tab1:a(({value:e,isActive:t})=>[ts]),tab2:a(({value:e,isActive:t})=>[ls]),_:1}),is,n("h2",os,[n("a",cs,[n("span",null,[l(i,{icon:"iconfont icon-file"}),ps])])]),l(c,p(r({title:"install-github-cli.ps1",desc:"Installs GitHub CLI. ",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/install-github-cli.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),l(u,{id:"220",data:[{id:"Parameters"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[rs]),tab1:a(({value:e,isActive:t})=>[us]),_:1}),ks,n("h2",ds,[n("a",ms,[n("span",null,[l(i,{icon:"iconfont icon-file"}),vs])])]),l(c,p(r({title:"install-chrome-browser.ps1",desc:"Installs the Google Chrome browser",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/install-github-cli.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),bs,l(u,{id:"236",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[hs]),tab1:a(({value:e,isActive:t})=>[gs]),tab2:a(({value:e,isActive:t})=>[fs]),_:1}),ws,n("h2",Ss,[n("a",$s,[n("span",null,[l(i,{icon:"iconfont icon-file"}),_s])])]),l(c,p(r({title:"install-knot-resolver.ps1",desc:"Installs the Knot Resolver (needs admin rights). ",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/install-github-cli.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ps,l(u,{id:"255",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ys]),tab1:a(({value:e,isActive:t})=>[Ts]),tab2:a(({value:e,isActive:t})=>[As]),_:1}),Es,n("h2",Cs,[n("a",Ls,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Ds])])]),l(c,p(r({title:"install-ssh-client.ps1",desc:"Installs a SSH client (needs admin rights).",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/install-ssh-client.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Is,l(u,{id:"274",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[xs]),tab1:a(({value:e,isActive:t})=>[Os]),tab2:a(({value:e,isActive:t})=>[Ns]),_:1}),Ms,n("h2",Ws,[n("a",Vs,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Rs])])]),l(c,p(r({title:"install-ssh-server.ps1",desc:"Installs a SSH server (needs admin rights).",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/install-ssh-server.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),zs,l(u,{id:"293",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Fs]),tab1:a(({value:e,isActive:t})=>[qs]),tab2:a(({value:e,isActive:t})=>[Us]),_:1}),Bs,n("h2",Gs,[n("a",js,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Hs])])]),l(c,p(r({title:"install-signal-cli.ps1",desc:"Installs signal-cli from github.com/AsamK/signal-cli.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/install-signal-cli.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),n("p",null,[s("This PowerShell script installs "),Ks,s(" from "),n("a",Ys,[l(i,{icon:"iconfont icon-github"}),s("AsamK/signal-cli"),l(m)]),s(".")]),Xs,l(u,{id:"315",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Js]),tab1:a(({value:e,isActive:t})=>[Qs]),tab2:a(({value:e,isActive:t})=>[Zs]),_:1}),na,n("h2",sa,[n("a",aa,[n("span",null,[l(i,{icon:"iconfont icon-file"}),ea])])]),l(c,p(r({title:"install-updates.ps1",desc:"Installs updates (need admin rights).",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/install-updates.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ta,n("h2",la,[n("a",ia,[n("span",null,[l(i,{icon:"iconfont icon-file"}),oa])])]),l(c,p(r({title:"install-wsl.ps1",desc:"Installs Windows Subsystem for Linux (WSL), needs admin rights.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/install-wsl.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ca,l(u,{id:"357",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[pa]),tab1:a(({value:e,isActive:t})=>[ra]),tab2:a(({value:e,isActive:t})=>[ua]),_:1}),ka,n("h2",da,[n("a",ma,[n("span",null,[l(i,{icon:"iconfont icon-file"}),va])])]),l(c,p(r({title:"list-apps.ps1",desc:"Lists the installed applications.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-installed-apps.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ba,l(u,{id:"376",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ha]),tab1:a(({value:e,isActive:t})=>[ga]),tab2:a(({value:e,isActive:t})=>[fa]),_:1}),wa,n("h2",Sa,[n("a",$a,[n("span",null,[l(i,{icon:"iconfont icon-file"}),_a])])]),l(c,p(r({title:"list-cli-tools.ps1",desc:"Lists installed command-line interface (CLI) tools.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-cli-tools.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Pa,l(u,{id:"395",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ya]),tab1:a(({value:e,isActive:t})=>[Ta]),tab2:a(({value:e,isActive:t})=>[Aa]),_:1}),Ea,n("h2",Ca,[n("a",La,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Da])])]),l(c,p(r({title:"list-dns-servers.ps1",desc:"Lists public DNS servers.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-dns-servers.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ia,l(u,{id:"414",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[xa]),tab1:a(({value:e,isActive:t})=>[Oa]),tab2:a(({value:e,isActive:t})=>[Na]),_:1}),Ma,n("h2",Wa,[n("a",Va,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Ra])])]),l(c,p(r({title:"list-drives.ps1",desc:"Lists all drives.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-drives.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),za,l(u,{id:"433",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Fa]),tab1:a(({value:e,isActive:t})=>[qa]),tab2:a(({value:e,isActive:t})=>[Ua]),_:1}),Ba,n("h2",Ga,[n("a",ja,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Ha])])]),l(c,p(r({title:"list-network-shares.ps1",desc:"Lists all network shares of the local computer.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-drives.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ka,l(u,{id:"452",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ya]),tab1:a(({value:e,isActive:t})=>[Xa,Ja]),tab2:a(({value:e,isActive:t})=>[Qa]),_:1}),Za,n("h2",ne,[n("a",se,[n("span",null,[l(i,{icon:"iconfont icon-file"}),ae])])]),l(c,p(r({title:"list-installed-software.ps1",desc:"Lists the installed software.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-installed-software.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ee,l(u,{id:"474",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[te]),tab1:a(({value:e,isActive:t})=>[le]),tab2:a(({value:e,isActive:t})=>[ie]),_:1}),oe,n("h2",ce,[n("a",pe,[n("span",null,[l(i,{icon:"iconfont icon-file"}),re])])]),l(c,p(r({title:"list-printers.ps1",desc:"Lists all printer known to the computer.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-printers.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ue,l(u,{id:"493",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ke]),tab1:a(({value:e,isActive:t})=>[de]),tab2:a(({value:e,isActive:t})=>[me]),_:1}),ve,n("h2",be,[n("a",he,[n("span",null,[l(i,{icon:"iconfont icon-file"}),ge])])]),l(c,p(r({title:"list-print-jobs.ps1",desc:"Lists all jobs of all printers.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-print-jobs.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),fe,l(u,{id:"512",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[we]),tab1:a(({value:e,isActive:t})=>[Se]),tab2:a(({value:e,isActive:t})=>[$e]),_:1}),_e,n("h2",Pe,[n("a",ye,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Te])])]),l(c,p(r({title:"list-processes.ps1",desc:"Lists the local computer processes.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-processes.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ae,l(u,{id:"531",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ee]),tab1:a(({value:e,isActive:t})=>[Ce,Le]),tab2:a(({value:e,isActive:t})=>[De]),_:1}),Ie,n("h2",xe,[n("a",Oe,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Ne])])]),l(c,p(r({title:"list-services.ps1",desc:"Lists the services on the local computer.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-services.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Me,l(u,{id:"553",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[We]),tab1:a(({value:e,isActive:t})=>[Ve]),tab2:a(({value:e,isActive:t})=>[Re]),_:1}),ze,n("h2",Fe,[n("a",qe,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Ue])])]),l(c,p(r({title:"list-system-info.ps1",desc:"Lists system information on the local computer.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-system-info.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Be,l(u,{id:"572",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ge]),tab1:a(({value:e,isActive:t})=>[je,He]),tab2:a(({value:e,isActive:t})=>[Ke]),_:1}),Ye,n("h2",Xe,[n("a",Je,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Qe])])]),l(c,p(r({title:"list-tasks.ps1",desc:"Lists all Windows scheduler tasks.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-tasks.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),l(u,{id:"591",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ze]),tab1:a(({value:e,isActive:t})=>[nt]),tab2:a(({value:e,isActive:t})=>[st]),_:1}),at,n("h2",et,[n("a",tt,[n("span",null,[l(i,{icon:"iconfont icon-file"}),lt])])]),l(c,p(r({title:"list-timezone.ps1",desc:"Lists the current time zone details.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-timezone.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),it,l(u,{id:"610",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ot]),tab1:a(({value:e,isActive:t})=>[ct]),tab2:a(({value:e,isActive:t})=>[pt]),_:1}),rt,n("h2",ut,[n("a",kt,[n("span",null,[l(i,{icon:"iconfont icon-file"}),dt])])]),l(c,p(r({title:"list-timezones.ps1",desc:"Lists all time zones available.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-processes.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),mt,l(u,{id:"629",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[vt]),tab1:a(({value:e,isActive:t})=>[bt]),tab2:a(({value:e,isActive:t})=>[ht]),_:1}),gt,n("h2",ft,[n("a",wt,[n("span",null,[l(i,{icon:"iconfont icon-file"}),St])])]),l(c,p(r({title:"list-user-groups.ps1",desc:"Lists the user groups on the local computer.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-user-groups.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),$t,l(u,{id:"648",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[_t]),tab1:a(({value:e,isActive:t})=>[Pt]),tab2:a(({value:e,isActive:t})=>[yt]),_:1}),Tt,n("h2",At,[n("a",Et,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Ct])])]),l(c,p(r({title:"poweroff.ps1",desc:"Halts the local computer (needs admin rights).",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/poweroff.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Lt,l(u,{id:"667",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Dt]),tab1:a(({value:e,isActive:t})=>[It]),tab2:a(({value:e,isActive:t})=>[xt]),_:1}),Ot,n("h2",Nt,[n("a",Mt,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Wt])])]),l(c,p(r({title:"query-smart-data.ps1",desc:"Queries the S.M.A.R.T. data of your HDD/SSD's.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/query-smart-data.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Vt,Rt,zt,l(u,{id:"692",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ft]),tab1:a(({value:e,isActive:t})=>[qt]),tab2:a(({value:e,isActive:t})=>[Ut]),_:1}),Bt,n("h2",Gt,[n("a",jt,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Ht])])]),l(c,p(r({title:"reboot.ps1",desc:"Reboots the local computer (needs admin rights).",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/reboot.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Kt,l(u,{id:"711",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Yt]),tab1:a(({value:e,isActive:t})=>[Xt]),tab2:a(({value:e,isActive:t})=>[Jt]),_:1}),Qt,n("h2",Zt,[n("a",nl,[n("span",null,[l(i,{icon:"iconfont icon-file"}),sl])])]),l(c,p(r({title:"remove-print-jobs.ps1",desc:"Removes all jobs from all printers.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/remove-print-jobs.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),al,l(u,{id:"730",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[el]),tab1:a(({value:e,isActive:t})=>[tl,ll]),tab2:a(({value:e,isActive:t})=>[il]),_:1}),ol,n("h2",cl,[n("a",pl,[n("span",null,[l(i,{icon:"iconfont icon-file"}),rl])])]),l(c,p(r({title:"restart-network-adapters.ps1",desc:"Restarts all local network adapters.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/restart-network-adapters.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ul,l(u,{id:"752",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[kl]),tab1:a(({value:e,isActive:t})=>[dl,ml]),tab2:a(({value:e,isActive:t})=>[vl]),_:1}),bl,n("h2",hl,[n("a",gl,[n("span",null,[l(i,{icon:"iconfont icon-file"}),fl])])]),l(c,p(r({title:"upgrade-ubuntu.ps1",desc:"Upgrades Ubuntu Linux to the latest (LTS) release.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/upgrade-ubuntu.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),wl,l(u,{id:"774",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Sl]),tab1:a(({value:e,isActive:t})=>[$l]),tab2:a(({value:e,isActive:t})=>[_l]),_:1}),Pl,n("h2",yl,[n("a",Tl,[n("span",null,[l(i,{icon:"iconfont icon-file"}),Al])])]),l(c,p(r({title:"wakeup.ps1",desc:"Wakes up a computer using Wake-on-LAN.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/wakeup.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),El,l(u,{id:"793",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Cl]),tab1:a(({value:e,isActive:t})=>[Ll,Dl]),tab2:a(({value:e,isActive:t})=>[Il]),_:1}),xl,l(v)])}const Vl=b(S,[["render",Ol],["__file","scripts-manage-computer.html.vue"]]),Rl=JSON.parse('{"path":"/g4e/cli-pwsh/scripts-manage-computer.html","title":"⚙️Scripts to Manage Computers","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"⚙️Scripts to Manage Computers","description":"Powershell > ⚙️Scripts to Manage Computers","category":["Powershell","⚙️Scripts to Manage Computers"],"tag":["powershell","pwsh","windows","script","useful-script"]},"headers":[{"level":2,"title":"add-firewall-rules.ps1","slug":"add-firewall-rules-ps1","link":"#add-firewall-rules-ps1","children":[]},{"level":2,"title":"check-cpu.ps1","slug":"check-cpu-ps1","link":"#check-cpu-ps1","children":[]},{"level":2,"title":"check-dns.ps1","slug":"check-dns-ps1","link":"#check-dns-ps1","children":[]},{"level":2,"title":"check-drive-space.ps1","slug":"check-drive-space-ps1","link":"#check-drive-space-ps1","children":[]},{"level":2,"title":"check-file-system.ps1","slug":"check-file-system-ps1","link":"#check-file-system-ps1","children":[]},{"level":2,"title":"check-health.ps1","slug":"check-health-ps1","link":"#check-health-ps1","children":[]},{"level":2,"title":"check-ping.ps1","slug":"check-ping-ps1","link":"#check-ping-ps1","children":[]},{"level":2,"title":"check-swap-space.ps1","slug":"check-swap-space-ps1","link":"#check-swap-space-ps1","children":[]},{"level":2,"title":"check-windows-system-files.ps1","slug":"check-windows-system-files-ps1","link":"#check-windows-system-files-ps1","children":[]},{"level":2,"title":"enable-crash-dumps.ps1","slug":"enable-crash-dumps-ps1","link":"#enable-crash-dumps-ps1","children":[]},{"level":2,"title":"hibernate.ps1","slug":"hibernate-ps1","link":"#hibernate-ps1","children":[]},{"level":2,"title":"install-github-cli.ps1","slug":"install-github-cli-ps1","link":"#install-github-cli-ps1","children":[]},{"level":2,"title":"install-chrome-browser.ps1","slug":"install-chrome-browser-ps1","link":"#install-chrome-browser-ps1","children":[]},{"level":2,"title":"install-knot-resolver.ps1","slug":"install-knot-resolver-ps1","link":"#install-knot-resolver-ps1","children":[]},{"level":2,"title":"install-ssh-client.ps1","slug":"install-ssh-client-ps1","link":"#install-ssh-client-ps1","children":[]},{"level":2,"title":"install-ssh-server.ps1","slug":"install-ssh-server-ps1","link":"#install-ssh-server-ps1","children":[]},{"level":2,"title":"install-signal-cli.ps1","slug":"install-signal-cli-ps1","link":"#install-signal-cli-ps1","children":[]},{"level":2,"title":"install-updates.ps1","slug":"install-updates-ps1","link":"#install-updates-ps1","children":[]},{"level":2,"title":"install-wsl.ps1","slug":"install-wsl-ps1","link":"#install-wsl-ps1","children":[]},{"level":2,"title":"list-apps.ps1","slug":"list-apps-ps1","link":"#list-apps-ps1","children":[]},{"level":2,"title":"list-cli-tools.ps1","slug":"list-cli-tools-ps1","link":"#list-cli-tools-ps1","children":[]},{"level":2,"title":"list-dns-servers.ps1","slug":"list-dns-servers-ps1","link":"#list-dns-servers-ps1","children":[]},{"level":2,"title":"list-drives.ps1","slug":"list-drives-ps1","link":"#list-drives-ps1","children":[]},{"level":2,"title":"list-network-shares.ps1","slug":"list-network-shares-ps1","link":"#list-network-shares-ps1","children":[]},{"level":2,"title":"list-installed-software.ps1","slug":"list-installed-software-ps1","link":"#list-installed-software-ps1","children":[]},{"level":2,"title":"list-printers.ps1","slug":"list-printers-ps1","link":"#list-printers-ps1","children":[]},{"level":2,"title":"list-print-jobs.ps1","slug":"list-print-jobs-ps1","link":"#list-print-jobs-ps1","children":[]},{"level":2,"title":"list-processes.ps1","slug":"list-processes-ps1","link":"#list-processes-ps1","children":[]},{"level":2,"title":"list-services.ps1","slug":"list-services-ps1","link":"#list-services-ps1","children":[]},{"level":2,"title":"list-system-info.ps1","slug":"list-system-info-ps1","link":"#list-system-info-ps1","children":[]},{"level":2,"title":"list-tasks.ps1","slug":"list-tasks-ps1","link":"#list-tasks-ps1","children":[]},{"level":2,"title":"list-timezone.ps1","slug":"list-timezone-ps1","link":"#list-timezone-ps1","children":[]},{"level":2,"title":"list-timezones.ps1","slug":"list-timezones-ps1","link":"#list-timezones-ps1","children":[]},{"level":2,"title":"list-user-groups.ps1","slug":"list-user-groups-ps1","link":"#list-user-groups-ps1","children":[]},{"level":2,"title":"poweroff.ps1","slug":"poweroff-ps1","link":"#poweroff-ps1","children":[]},{"level":2,"title":"query-smart-data.ps1","slug":"query-smart-data-ps1","link":"#query-smart-data-ps1","children":[]},{"level":2,"title":"reboot.ps1","slug":"reboot-ps1","link":"#reboot-ps1","children":[]},{"level":2,"title":"remove-print-jobs.ps1","slug":"remove-print-jobs-ps1","link":"#remove-print-jobs-ps1","children":[]},{"level":2,"title":"restart-network-adapters.ps1","slug":"restart-network-adapters-ps1","link":"#restart-network-adapters-ps1","children":[]},{"level":2,"title":"upgrade-ubuntu.ps1","slug":"upgrade-ubuntu-ps1","link":"#upgrade-ubuntu-ps1","children":[]},{"level":2,"title":"wakeup.ps1","slug":"wakeup-ps1","link":"#wakeup-ps1","children":[]}],"git":{},"readingTime":{"minutes":35.03,"words":10508},"filePathRelative":"g4e/cli-pwsh/scripts-manage-computer.md","excerpt":"\\n\\n<hr>\\n<h2></h2>\\n"}');export{Vl as comp,Rl as data};
