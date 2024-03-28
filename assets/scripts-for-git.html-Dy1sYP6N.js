import{_ as b}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as k,o as v,c as h,b as n,t as g,a as l,w as a,n as r,g as u,e as s}from"./app-B2dKc-qM.js";const f={},w={id:"frontmatter-title-관련",tabindex:"-1"},$={class:"header-anchor",href:"#frontmatter-title-관련"},y={class:"table-of-contents"},S=n("hr",null,null,-1),P={id:"build-repo-ps1",tabindex:"-1"},C={class:"header-anchor",href:"#build-repo-ps1"},E=n("code",null,"build-repo.ps1",-1),_=n("p",null,"This PowerShell script builds a repository by supporting: cmake, configure, autogen, Imakefile, and Makefile.",-1),x=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("build-repo"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the path to the Git repository
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("build-repo"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\MyRepo
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Builds a repository 
.DESCRIPTION
	This PowerShell script builds a repository by supporting: cmake, configure, autogen, Imakefile, and Makefile.
.PARAMETER RepoDir
	Specifies the path to the Git repository
.EXAMPLE
	PS> ./build-repo.ps1 C:\\MyRepo
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" BuildInDir "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Path"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$DirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/CMakeLists.txt"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"⏳ Building repo 📂'),n("span",{class:"token variable"},"$DirName"),s(' using CMakeLists.txt into subfolder _My_Build ..."')]),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/_My_Build/"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(` 
			& mkdir `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/_My_Build/"')]),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/_My_Build/"')]),s(`

		& cmake `),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Executing 'cmake ..' has failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

		& make `),n("span",{class:"token operator"},"-"),s(`j4
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Executing 'make -j4' has failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

		& make test
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Executing 'make test' has failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/configure"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(` 
		`),n("span",{class:"token string"},[s('"⏳ Building repo 📂'),n("span",{class:"token variable"},"$DirName"),s(` using 'configure'..."`)]),s(`
		`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/"')]),s(`

		& `),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`configure
		`),n("span",{class:"token comment"},`#if ($lastExitCode -ne "0") { throw "Script 'configure' exited with error code $lastExitCode" }`),s(`

		& make `),n("span",{class:"token operator"},"-"),s(`j4
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Executing 'make -j4' has failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

		& make test
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Executing 'make test' has failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/autogen.sh"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(` 
		`),n("span",{class:"token string"},[s('"⏳ Building repo 📂'),n("span",{class:"token variable"},"$DirName"),s(` using 'autogen.sh'..."`)]),s(`
		`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/"')]),s(`

		& `),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("autogen"),n("span",{class:"token punctuation"},"."),s(`sh
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Script 'autogen.sh' exited with error code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

		& make `),n("span",{class:"token operator"},"-"),s(`j4
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Executing 'make -j4' has failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/build.gradle"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"⏳ Building repo 📂'),n("span",{class:"token variable"},"$DirName"),s(' using build.gradle..."')]),s(`
		`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`

		& gradle build
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'gradle build' has failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

		& gradle test
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'gradle test' has failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/Imakefile"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"⏳ Building repo 📂'),n("span",{class:"token variable"},"$DirName"),s(' using Imakefile..."')]),s(`
		`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('/"')]),s(`

		& xmkmf 
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Executing 'xmkmf' has failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

		& make `),n("span",{class:"token operator"},"-"),s(`j4
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Executing 'make -j4' has failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/Makefile"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"⏳ Building repo 📂'),n("span",{class:"token variable"},"$DirName"),s(' using Makefile..."')]),s(`
		`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`

		& make `),n("span",{class:"token operator"},"-"),s(`j4
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Executing 'make -j4' has failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/makefile"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"⏳ Building repo 📂'),n("span",{class:"token variable"},"$DirName"),s(' using makefile..."')]),s(`
		`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(`

		& make `),n("span",{class:"token operator"},"-"),s(`j4
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Executing 'make -j4' has failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/compile.sh"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(` 
		`),n("span",{class:"token string"},[s('"⏳ Building repo 📂'),n("span",{class:"token variable"},"$DirName"),s(` using 'compile.sh'..."`)]),s(`
		`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/"')]),s(`

		& `),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("compile"),n("span",{class:"token punctuation"},"."),s(`sh
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Script 'compile.sh' exited with error code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

		& make `),n("span",{class:"token operator"},"-"),s(`j4
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Executing 'make -j4' has failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/attower/src/build/DevBuild/build.bat"')]),s(),n("span",{class:"token operator"},"-"),s("pathType leaf"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"⏳ Building repo 📂'),n("span",{class:"token variable"},"$DirName"),s(' using build.bat ..."')]),s(`
		`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('/attower/src/build/DevBuild/"')]),s(`

		& `),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("build"),n("span",{class:"token punctuation"},"."),s(`bat build-all-release
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Script 'build.bat' exited with error code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s("/"),n("span",{class:"token variable"},"$DirName"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"⏳ No make rule found, trying subfolder 📂'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$DirName"),n("span",{class:"token punctuation"},")")]),s('..."')]),s(`
		BuildInDir `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s("/"),n("span",{class:"token variable"},"$DirName"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Write-Warning"),s(),n("span",{class:"token string"},[s('"Sorry, no make rule applies to: 📂'),n("span",{class:"token variable"},"$DirName"),s('"')]),s(`
		`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access directory: `),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$RepoDirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name

	`),n("span",{class:"token variable"},"$PreviousPath"),s(" = "),n("span",{class:"token function"},"Get-Location"),s(`
	BuildInDir `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PreviousPath"),s('"')]),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ built repo 📂'),n("span",{class:"token variable"},"$RepoDirName"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("hr",null,null,-1),N={id:"build-repos-ps1",tabindex:"-1"},T={class:"header-anchor",href:"#build-repos-ps1"},G=n("code",null,"build-repos.ps1",-1),I=n("p",null,"This PowerShell script builds all Git repositories in a folder.",-1),W=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("build-repos"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("ParentDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`ParentDir <String>
    Specifies the path to the parent folder
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("build-repos"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\MyRepos
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("p",null,null,-1),M=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Builds Git repositories
.DESCRIPTION
	This PowerShell script builds all Git repositories in a folder.
.PARAMETER ParentDir
	Specifies the path to the parent folder
.EXAMPLE
	PS> ./build-repos.ps1 C:\\MyRepos
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$ParentDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token variable"},"$ParentDirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
	`),n("span",{class:"token string"},[s('"⏳ Step 1 - Checking parent folder 📂'),n("span",{class:"token variable"},"$ParentDirName"),s('..."')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access folder: `),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$Folders"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("attributes Directory"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$FolderCount"),s(" = "),n("span",{class:"token variable"},"$Folders"),n("span",{class:"token punctuation"},"."),s(`Count
	`),n("span",{class:"token string"},[s('"Found '),n("span",{class:"token variable"},"$FolderCount"),s(' subfolders."')]),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Step"),s(` = 1
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Folder"),s(" in "),n("span",{class:"token variable"},"$Folders"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		& `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/build-repo.ps1"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(`
		`),n("span",{class:"token variable"},"$Step"),n("span",{class:"token operator"},"++"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ built '),n("span",{class:"token variable"},"$FolderCount"),s(" Git repositories at 📂"),n("span",{class:"token variable"},"$ParentDirName"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("hr",null,null,-1),V={id:"check-repo-ps1",tabindex:"-1"},B={class:"header-anchor",href:"#check-repo-ps1"},z=n("code",null,"check-repo.ps1",-1),q=n("p",null,"This PowerShell script verifies the integrity of a local Git repository.",-1),H=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-repo"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the path to the Git repository `),n("span",{class:"token punctuation"},"("),s("current working directory by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("check-repo"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\MyRepo
`),n("span",{class:"token comment"},"# ⏳ (1/10) Searching for Git executable...  git version 2.41.0.windows.3"),s(`
`),n("span",{class:"token comment"},"# ⏳ (2/10) Checking local folder...         📂C:\\MyRepo"),s(`
`),n("span",{class:"token comment"},"# ⏳ (3/10) Querying remote URL...           git@github.com:fleschutz/PowerShell.git"),s(`
`),n("span",{class:"token comment"},"# ⏳ (4/10) Querying current branch...       main"),s(`
`),n("span",{class:"token comment"},"# ⏳ (5/10) Fetching remote updates..."),s(`
`),n("span",{class:"token comment"},"# ⏳ (6/10) Querying latest tag...           v0.8 (commit 02171a401d83b01a0cda0af426840b605e617f08)"),s(`
`),n("span",{class:"token comment"},"# ⏳ (7/10) Verifying data integrity..."),s(`
`),n("span",{class:"token comment"},"# ..."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=n("p",null,null,-1),X=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Checks a repo
.DESCRIPTION
	This PowerShell script verifies the integrity of a local Git repository.
.PARAMETER RepoDir
	Specifies the path to the Git repository (current working directory by default)
.EXAMPLE
	PS> ./check-repo.ps1 C:\\MyRepo
	⏳ (1/10) Searching for Git executable...  git version 2.41.0.windows.3
	⏳ (2/10) Checking local folder...         📂C:\\MyRepo
	⏳ (3/10) Querying remote URL...           git@github.com:fleschutz/PowerShell.git
	⏳ (4/10) Querying current branch...       main
	⏳ (5/10) Fetching remote updates...
	⏳ (6/10) Querying latest tag...           v0.8 (commit 02171a401d83b01a0cda0af426840b605e617f08)
	⏳ (7/10) Verifying data integrity...
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1/10) Searching for Git executable...  "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (2/10) Checking local folder...         "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	`),n("span",{class:"token variable"},"$FullPath"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType Container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access folder: `),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (3/10) Querying remote URL...           "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(" remote "),n("span",{class:"token function"},"get-url"),s(` origin
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git remote get-url origin' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (4/10) Querying current branch...       "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(" branch "),n("span",{class:"token operator"},"--"),n("span",{class:"token function"},"show-current"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git branch --show-current' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (5/10) Fetching remote updates..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(` fetch
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git fetch' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (6/10) Querying latest tag...           "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
        `),n("span",{class:"token variable"},"$LatestTagCommitID"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(" rev-list "),n("span",{class:"token operator"},"--"),s("tags "),n("span",{class:"token operator"},"--"),s("max-count=1"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token variable"},"$LatestTagName"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(" describe "),n("span",{class:"token operator"},"--"),s("tags "),n("span",{class:"token variable"},"$LatestTagCommitID"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$LatestTagName"),s(" (commit "),n("span",{class:"token variable"},"$LatestTagCommitID"),s(')"')]),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (7/10) Verifying data integrity..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(` fsck 
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git fsck' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (8/10) Running maintenance tasks..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(` maintenance run
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git maintenance run' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (9/10) Checking submodule status..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(` submodule status
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git submodule status' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (10/10) Checking repo status...         "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FullPath"),s('"')]),s(` status 
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git status --short' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$RepoDirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FullPath"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ Checked repo 📂'),n("span",{class:"token variable"},"$RepoDirName"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("hr",null,null,-1),j={id:"clean-repo-ps1",tabindex:"-1"},Q={class:"header-anchor",href:"#clean-repo-ps1"},J=n("code",null,"clean-repo.ps1",-1),Z=n("p",null,"This PowerShell script deletes all untracked files and folders in a local Git repository (including submodules).",-1),nn=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"NOTE"),n("p",null,"To be used with care! This cannot be undone!")],-1),sn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("clean-repo"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the file path to the local Git repository
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),an=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("clean-repo"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\rust
`),n("span",{class:"token comment"},"# ⏳ (1/4) Searching for Git executable...          git version 2.41.0.windows.3"),s(`
`),n("span",{class:"token comment"},"# ⏳ (2/4) Checking local repository...        	  📂C:\\rust"),s(`
`),n("span",{class:"token comment"},"# ⏳ (3/4) Removing untracked files in repository..."),s(`
`),n("span",{class:"token comment"},"# ⏳ (4/4) Removing untracked files in submodules..."),s(`
`),n("span",{class:"token comment"},"# ✔️ Cleaned repo 📂rust in 1 sec"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),en=n("p",null,null,-1),tn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Cleans a repo
.DESCRIPTION
	This PowerShell script deletes all untracked files and folders in a local Git repository (including submodules).
	NOTE: To be used with care! This cannot be undone!
.PARAMETER RepoDir
	Specifies the file path to the local Git repository
.EXAMPLE
	PS> ./clean-repo.ps1 C:\\rust
	⏳ (1/4) Searching for Git executable...          git version 2.41.0.windows.3
	⏳ (2/4) Checking local repository...        	  📂C:\\rust
	⏳ (3/4) Removing untracked files in repository...
	⏳ (4/4) Removing untracked files in submodules...
	✔️ Cleaned repo 📂rust in 1 sec
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1/4) Searching for Git executable...          "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},[s('"⏳ (2/4) Checking local repository...             📂'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access folder '`),n("span",{class:"token variable"},"$RepoDir"),s(`' - maybe a typo or missing folder permissions?"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$RepoDirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name

	`),n("span",{class:"token string"},'"⏳ (3/4) Removing untracked files in repository..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" clean "),n("span",{class:"token operator"},"-"),s("xfd "),n("span",{class:"token operator"},"-"),s("f "),n("span",{class:"token comment"},"# to delete all untracked files in the main repo"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Write-Warning"),s(),n("span",{class:"token string"},[s(`"'git clean' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s(', retrying once..."')]),s(`
		& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" clean "),n("span",{class:"token operator"},"-"),s("xfd "),n("span",{class:"token operator"},"-"),s(`f 
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git clean' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"⏳ (4/4) Removing untracked files in submodules..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" submodule "),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token operator"},"--"),s("recursive git clean "),n("span",{class:"token operator"},"-"),s("xfd "),n("span",{class:"token operator"},"-"),s("f "),n("span",{class:"token comment"},"# to delete all untracked files in the submodules"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git clean' in the submodules failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ Cleaned repo 📂'),n("span",{class:"token variable"},"$RepoDirName"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ln=n("hr",null,null,-1),on={id:"clean-repos-ps1",tabindex:"-1"},cn={class:"header-anchor",href:"#clean-repos-ps1"},pn=n("code",null,"clean-repos.ps1",-1),rn=n("p",null,"This PowerShell script cleans all Git repositories in a folder from untracked files (including submodules).",-1),un=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("clean-repos"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("ParentDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`ParentDir <String>
    Specifies the path to the parent folder
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),kn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`clean-repos C:\\MyRepos
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),dn=n("p",null,null,-1),mn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Cleans all Git repositories in a folder from untracked files 
.DESCRIPTION
	This PowerShell script cleans all Git repositories in a folder from untracked files (including submodules).
.PARAMETER ParentDir
	Specifies the path to the parent folder
.EXAMPLE
	PS> ./clean-repos C:\\MyRepos
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$ParentDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1) Searching for Git executable...  "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
        & git `),n("span",{class:"token operator"},"--"),s(`version
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token variable"},"$ParentDirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
        `),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"⏳ (2) Checking parent folder 📂'),n("span",{class:"token variable"},"$ParentDirName"),s('...  "')]),s(),n("span",{class:"token operator"},"-"),s(`noNewline
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access folder: `),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token variable"},"$Folders"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("attributes Directory"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token variable"},"$NumFolders"),s(" = "),n("span",{class:"token variable"},"$Folders"),n("span",{class:"token punctuation"},"."),s(`Count
        `),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$NumFolders"),s(' subfolders found"')]),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Step"),s(` = 2
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Folder"),s(" in "),n("span",{class:"token variable"},"$Folders"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$FolderName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
		`),n("span",{class:"token variable"},"$Step"),n("span",{class:"token operator"},"++"),s(`
		`),n("span",{class:"token string"},[s('"⏳ ('),n("span",{class:"token variable"},"$Step"),s("/"),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$NumFolders"),s(),n("span",{class:"token operator"},"+"),s(" 2"),n("span",{class:"token punctuation"},")")]),s(") Cleaning 📂"),n("span",{class:"token variable"},"$FolderName"),s('..."')]),s(`

		& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(" clean "),n("span",{class:"token operator"},"-"),s("xfd "),n("span",{class:"token operator"},"-"),s("f "),n("span",{class:"token comment"},"# force + recurse into dirs + don't use the standard ignore rules"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git clean -xfd -f' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

		& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(" submodule "),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token operator"},"--"),s("recursive git clean "),n("span",{class:"token operator"},"-"),s("xfd "),n("span",{class:"token operator"},"-"),s(`f 
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git clean -xfd -f' in submodules failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ cleaned '),n("span",{class:"token variable"},"$NumFolders"),s(" Git repositories at 📂"),n("span",{class:"token variable"},"$ParentDirName"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec."')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),bn=n("hr",null,null,-1),vn={id:"clone-repos-ps1",tabindex:"-1"},hn={class:"header-anchor",href:"#clone-repos-ps1"},gn=n("code",null,"clone-repos.ps1",-1),fn=n("p",null,"This PowerShell script clones popular Git repositories into a target directory.",-1),wn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("clone-repos"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("TargetDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`TargetDir <String>
    Specifies the file path to the target directory `),n("span",{class:"token punctuation"},"("),s("current working directory by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$n=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`clone-repos C:\\Repos
`),n("span",{class:"token comment"},"# ⏳ (1) Searching for Git executable...          git version 2.41.0.windows.3"),s(`
`),n("span",{class:"token comment"},"# ⏳ (2) Reading Data/popular-repositories.csv... 28 repos"),s(`
`),n("span",{class:"token comment"},"# ⏳ (3) Checking target folder...                📂repos"),s(`
`),n("span",{class:"token comment"},"# ⏳ (4/32) Cloning into 📂base256unicode (dev tool)..."),s(`
`),n("span",{class:"token comment"},"# ..."),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),yn=n("p",null,null,-1),Sn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Clones Git repos
.DESCRIPTION
	This PowerShell script clones popular Git repositories into a target directory.
.PARAMETER targetDir
	Specifies the file path to the target directory (current working directory by default)
.EXAMPLE
	PS> ./clone-repos C:\\Repos
	⏳ (1) Searching for Git executable...          git version 2.41.0.windows.3
	⏳ (2) Reading Data/popular-repositories.csv... 28 repos
	⏳ (3) Checking target folder...                📂repos
	⏳ (4/32) Cloning into 📂base256unicode (dev tool)...
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$TargetDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1) Searching for Git executable...          "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (2) Reading Data/popular-repositories.csv... "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	`),n("span",{class:"token variable"},"$Table"),s(" = "),n("span",{class:"token function"},"Import-CSV"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/../Data/popular-repositories.csv"')]),s(`
	`),n("span",{class:"token variable"},"$NumEntries"),s(" = "),n("span",{class:"token variable"},"$Table"),n("span",{class:"token punctuation"},"."),s(`count
	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$NumEntries"),s(' repos"')]),s(`

	`),n("span",{class:"token variable"},"$TargetDirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TargetDir"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"⏳ (3) Checking target folder...                📂'),n("span",{class:"token variable"},"$TargetDirName"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TargetDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access directory: `),n("span",{class:"token variable"},"$TargetDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Step"),s(` = 3
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Cloned"),s(` = 0
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Skipped"),s(` = 0
	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),s(" in "),n("span",{class:"token variable"},"$Table"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$FolderName"),s(" = "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s(`FOLDERNAME
		`),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Category"),s(" = "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s(`CATEGORY
		`),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Branch"),s(" = "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s(`BRANCH
		`),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Shallow"),s(" = "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s(`SHALLOW
		`),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$URL"),s(" = "),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s(`URL
		`),n("span",{class:"token variable"},"$Step"),n("span",{class:"token operator"},"++"),s(`

		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TargetDir"),s("/"),n("span",{class:"token variable"},"$FolderName"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token string"},[s('"⏳ ('),n("span",{class:"token variable"},"$Step"),s("/"),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$NumEntries"),s(),n("span",{class:"token operator"},"+"),s(" 4"),n("span",{class:"token punctuation"},")")]),s(") Skipping existing 📂"),n("span",{class:"token variable"},"$FolderName"),s(" ("),n("span",{class:"token variable"},"$Category"),s(')..."')]),s(`
			`),n("span",{class:"token variable"},"$Skipped"),n("span",{class:"token operator"},"++"),s(`
			`),n("span",{class:"token keyword"},"continue"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Shallow"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"yes"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token string"},[s('"⏳ ('),n("span",{class:"token variable"},"$Step"),s("/"),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$NumEntries"),s(),n("span",{class:"token operator"},"+"),s(" 4"),n("span",{class:"token punctuation"},")")]),s(") Cloning into 📂"),n("span",{class:"token variable"},"$FolderName"),s(" ("),n("span",{class:"token variable"},"$Category"),s(") - "),n("span",{class:"token variable"},"$Branch"),s(' branch only..."')]),s(`
			& git clone `),n("span",{class:"token operator"},"--"),s("branch "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Branch"),s('"')]),s(),n("span",{class:"token operator"},"--"),s("single-branch "),n("span",{class:"token operator"},"--"),s("recurse-submodules "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$URL"),s('"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TargetDir"),s("/"),n("span",{class:"token variable"},"$FolderName"),s('"')]),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git clone --branch `),n("span",{class:"token variable"},"$Branch"),s(),n("span",{class:"token variable"},"$URL"),s("' failed with exit code "),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token string"},[s('"⏳ ('),n("span",{class:"token variable"},"$Step"),s("/"),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$NumEntries"),s(),n("span",{class:"token operator"},"+"),s(" 4"),n("span",{class:"token punctuation"},")")]),s(") Cloning into 📂"),n("span",{class:"token variable"},"$FolderName"),s(" ("),n("span",{class:"token variable"},"$Category"),s(") - "),n("span",{class:"token variable"},"$Branch"),s(' branch with full history..."')]),s(`
			& git clone `),n("span",{class:"token operator"},"--"),s("branch "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Branch"),s('"')]),s(),n("span",{class:"token operator"},"--"),s("recurse-submodules "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$URL"),s('"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TargetDir"),s("/"),n("span",{class:"token variable"},"$FolderName"),s('"')]),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git clone --branch `),n("span",{class:"token variable"},"$Branch"),s(),n("span",{class:"token variable"},"$URL"),s("' failed with exit code "),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token variable"},"$Cloned"),n("span",{class:"token operator"},"++"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ Cloning '),n("span",{class:"token variable"},"$Cloned"),s(" of "),n("span",{class:"token variable"},"$NumEntries"),s(" Git repos into folder 📂"),n("span",{class:"token variable"},"$TargetDirName"),s(" took "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Pn=n("hr",null,null,-1),Cn={id:"configure-git-ps1",tabindex:"-1"},En={class:"header-anchor",href:"#configure-git-ps1"},_n=n("code",null,"configure-git.ps1",-1),xn=n("p",null,"This PowerShell script configures the user settings for Git.",-1),Dn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("configure-git"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("FullName"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("EmailAddress"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("FavoriteEditor"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`FullName <String>
    Specifies the user`),n("span",{class:"token string"},`'s full name
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

-EmailAddress <String>
    Specifies the user'`),s(`s email address
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`FavoriteEditor <String>
    Specifies the user's favorite text editor
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),An=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("configure-git"),n("span",{class:"token punctuation"},"."),s(`ps1

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Rn=n("p",null,null,-1),Nn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Configures Git 
.DESCRIPTION
	This PowerShell script configures the user settings for Git.
.PARAMETER FullName
	Specifies the user's full name
.PARAMETER EmailAddress
	Specifies the user's email address
.PARAMETER FavoriteEditor
	Specifies the user's favorite text editor
.EXAMPLE
	PS> ./configure-git.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$FullName"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$EmailAddress"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$FavoriteEditor"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		
	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1/6) Searching for Git executable...  "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"⏳ (2/6) Asking for details..."'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FullName"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$FullName"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter your full name"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$EmailAddress"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$EmailAddress"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter your e-mail address"'),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$FavoriteEditor"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$FavoriteEditor"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter your favorite text editor (atom,emacs,nano,subl,vi,vim,...)"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"⏳ (3/6) Saving basic settings (autocrlf,symlinks,longpaths,etc.)..."'),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global core"),n("span",{class:"token punctuation"},"."),s("autocrlf false          "),n("span",{class:"token comment"},"# don't change newlines"),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global core"),n("span",{class:"token punctuation"},"."),s("symlinks true           "),n("span",{class:"token comment"},"# enable support for symbolic link files"),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global core"),n("span",{class:"token punctuation"},"."),s("longpaths true          "),n("span",{class:"token comment"},"# enable support for long file paths"),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global init"),n("span",{class:"token punctuation"},"."),s("defaultBranch main      "),n("span",{class:"token comment"},"# set the default branch name to 'main'"),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global merge"),n("span",{class:"token punctuation"},"."),s(`renamelimit 99999
	& git config `),n("span",{class:"token operator"},"--"),s("global pull"),n("span",{class:"token punctuation"},"."),s(`rebase false
	& git config `),n("span",{class:"token operator"},"--"),s("global fetch"),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"parallel"),s(" 0             "),n("span",{class:"token comment"},"# enable parallel fetching to improve the speed"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git config' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"⏳ (4/6) Saving personal settings (name,email,editor)..."'),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global user"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token variable"},"$FullName"),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global user"),n("span",{class:"token punctuation"},"."),s("email "),n("span",{class:"token variable"},"$EmailAddress"),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global core"),n("span",{class:"token punctuation"},"."),s("editor "),n("span",{class:"token variable"},"$FavoriteEditor"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git config' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"⏳ (5/6) Saving personal shortcuts (git co, git br, etc.)..."'),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global alias"),n("span",{class:"token punctuation"},"."),s("co "),n("span",{class:"token string"},'"checkout"'),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global alias"),n("span",{class:"token punctuation"},"."),s("br "),n("span",{class:"token string"},'"branch"'),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global alias"),n("span",{class:"token punctuation"},"."),s("ci "),n("span",{class:"token string"},'"commit"'),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global alias"),n("span",{class:"token punctuation"},"."),s("st "),n("span",{class:"token string"},'"status"'),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global alias"),n("span",{class:"token punctuation"},"."),s("pl "),n("span",{class:"token string"},'"pull --recurse-submodules"'),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global alias"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ps"),s(),n("span",{class:"token string"},'"push"'),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global alias"),n("span",{class:"token punctuation"},"."),s("mrg "),n("span",{class:"token string"},'"merge --no-commit --no-ff"'),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global alias"),n("span",{class:"token punctuation"},"."),s("chp "),n("span",{class:"token string"},'"cherry-pick --no-commit"'),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global alias"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ls"),s(),n("span",{class:"token string"},`"log -n20 --pretty=format:'%Cred%h%Creset%C(yellow)%d%Creset %s %C(bold blue)by %an%Creset %C(green)%cr%Creset' --abbrev-commit"`),s(`
	& git config `),n("span",{class:"token operator"},"--"),s("global alias"),n("span",{class:"token punctuation"},"."),s("smu "),n("span",{class:"token string"},'"submodule update --init"'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git config' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"⏳ (6/6) Listing your current settings..."'),s(`
	& git config `),n("span",{class:"token operator"},"--"),s(`list
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git config --list' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ configured Git in '),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s("): "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Tn=n("hr",null,null,-1),Gn={id:"fetch-repo-ps1",tabindex:"-1"},In={class:"header-anchor",href:"#fetch-repo-ps1"},Wn=n("code",null,"fetch-repo.ps1",-1),Fn=n("p",null,"This PowerShell script fetches the latest updates into a local Git repository (including submodules).",-1),Ln=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("fetch-repo"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the file path to the local Git repository `),n("span",{class:"token punctuation"},"("),s("default is working directory"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Mn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("fetch-repo"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\MyRepo
`),n("span",{class:"token comment"},"# ⏳ (1/3) Searching for Git executable...  git version 2.41.0.windows.3"),s(`
`),n("span",{class:"token comment"},"# ⏳ (2/3) Checking local repository..."),s(`
`),n("span",{class:"token comment"},"# ⏳ (3/3) Fetching updates..."),s(`
`),n("span",{class:"token comment"},"# ✔️ Fetched updates into repo 📂MyRepo (took 2 sec)"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),On=n("p",null,null,-1),Vn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Fetches Git repository updates
.DESCRIPTION
	This PowerShell script fetches the latest updates into a local Git repository (including submodules).
.PARAMETER RepoDir
	Specifies the file path to the local Git repository (default is working directory).
.EXAMPLE
	PS> ./fetch-repo.ps1 C:\\MyRepo
	⏳ (1/3) Searching for Git executable...  git version 2.41.0.windows.3
	⏳ (2/3) Checking local repository...
	⏳ (3/3) Fetching updates...
	✔️ Fetched updates into repo 📂MyRepo (took 2 sec)
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1/3) Searching for Git executable...  "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (2/3) Checking local repository..."'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access folder: `),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$RepoDirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (3/3) Fetching updates..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" fetch "),n("span",{class:"token operator"},"--"),s("all "),n("span",{class:"token operator"},"--"),s("recurse-submodules "),n("span",{class:"token operator"},"--"),s("tags "),n("span",{class:"token operator"},"--"),s("prune "),n("span",{class:"token operator"},"--"),s("prune-tags "),n("span",{class:"token operator"},"--"),s("force "),n("span",{class:"token operator"},"--"),s(`quiet
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git fetch --all' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ Fetched updates into repo 📂'),n("span",{class:"token variable"},"$RepoDirName"),s(" (took "),n("span",{class:"token variable"},"$Elapsed"),s(' sec)"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Bn=n("hr",null,null,-1),zn={id:"fetch-repos-ps1",tabindex:"-1"},qn={class:"header-anchor",href:"#fetch-repos-ps1"},Hn=n("code",null,"fetch-repos.ps1",-1),Kn=n("p",null,"This PowerShell script fetches updates into all Git repositories in a folder (including submodules).",-1),Yn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("fetch-repos"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("ParentDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`ParentDir <String>
    Specifies the path to the parent folder
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Xn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("fetch-repos"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\MyRepos
`),n("span",{class:"token comment"},"# ⏳ (1) Searching for Git executable...  git version 2.41.0.windows.3"),s(`
`),n("span",{class:"token comment"},"# ⏳ (2) Checking parent folder...        33 subfolders"),s(`
`),n("span",{class:"token comment"},"# ⏳ (3/35) Fetching into 📂base256unicode..."),s(`
`),n("span",{class:"token comment"},"# ..."),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Un=n("p",null,null,-1),jn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Fetches updates into Git repos
.DESCRIPTION
	This PowerShell script fetches updates into all Git repositories in a folder (including submodules).
.PARAMETER ParentDir
	Specifies the path to the parent folder
.EXAMPLE
	PS> ./fetch-repos.ps1 C:\\MyRepos
	⏳ (1) Searching for Git executable...  git version 2.41.0.windows.3
	⏳ (2) Checking parent folder...        33 subfolders
	⏳ (3/35) Fetching into 📂base256unicode...
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$ParentDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1) Searching for Git executable...  "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (2) Checking parent folder...        "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access folder: `),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$Folders"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("attributes Directory"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$NumFolders"),s(" = "),n("span",{class:"token variable"},"$Folders"),n("span",{class:"token punctuation"},"."),s(`Count
	`),n("span",{class:"token variable"},"$ParentDirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$NumFolders"),s(' subfolders"')]),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Step"),s(` = 2
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Folder"),s(" in "),n("span",{class:"token variable"},"$Folders"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$FolderName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
		`),n("span",{class:"token variable"},"$Step"),n("span",{class:"token operator"},"++"),s(`
		`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"⏳ ('),n("span",{class:"token variable"},"$Step"),s("/"),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$NumFolders"),s(),n("span",{class:"token operator"},"+"),s(" 2"),n("span",{class:"token punctuation"},")")]),s(") Fetching into 📂"),n("span",{class:"token variable"},"$FolderName"),s('...  "')]),s(`

		& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(" fetch "),n("span",{class:"token operator"},"--"),s("all "),n("span",{class:"token operator"},"--"),s("recurse-submodules "),n("span",{class:"token operator"},"--"),s("prune "),n("span",{class:"token operator"},"--"),s("prune-tags "),n("span",{class:"token operator"},"--"),s(`force
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git fetch' in `),n("span",{class:"token variable"},"$Folder"),s(" failed with exit code "),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ Fetching updates into '),n("span",{class:"token variable"},"$NumFolders"),s(" repositories under 📂"),n("span",{class:"token variable"},"$ParentDirName"),s(" took "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Qn=n("hr",null,null,-1),Jn={id:"list-branches-ps1",tabindex:"-1"},Zn={class:"header-anchor",href:"#list-branches-ps1"},ns=n("code",null,"list-branches.ps1",-1),ss=n("p",null,"This PowerShell script lists all branches in a Git repository.",-1),as=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-branches"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("SearchPattern"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the path to the Git repository `),n("span",{class:"token punctuation"},"("),s("current working directory by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`SearchPattern <String>
    Specifies the search patter `),n("span",{class:"token punctuation"},"("),s("anything by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    2
    Default value                `),n("span",{class:"token operator"},"*"),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),es=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-branches"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# List of Git Branches"),s(`
`),n("span",{class:"token comment"},"# --------------------"),s(`
`),n("span",{class:"token comment"},"# main"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ts=n("p",null,null,-1),ls=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists Git branches
.DESCRIPTION
	This PowerShell script lists all branches in a Git repository.
.PARAMETER RepoDir
	Specifies the path to the Git repository (current working directory by default)
.PARAMETER SearchPattern
	Specifies the search patter (anything by default)
.EXAMPLE
	PS> ./list-branches.ps1

	List of Git Branches
	--------------------
	main
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$SearchPattern"),s(" = "),n("span",{class:"token string"},'"*"'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"test-path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access directory: `),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Null"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"--"),s("version"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(` fetch 
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git fetch' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Branches"),s(" = $"),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" branch "),n("span",{class:"token operator"},"--"),s("list "),n("span",{class:"token operator"},"--"),s("remotes "),n("span",{class:"token operator"},"--"),s("no-color "),n("span",{class:"token operator"},"--"),s("no-column"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git branch --list' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token string"},'"List of Git Branches"'),s(`
	`),n("span",{class:"token string"},'"--------------------"'),s(`
	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Branch"),s(" in "),n("span",{class:"token variable"},"$Branches"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Branch"),s('"')]),s(),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token string"},'"origin/HEAD"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token variable"},"$BranchName"),s(" = "),n("span",{class:"token variable"},"$Branch"),n("span",{class:"token punctuation"},"."),s("substring"),n("span",{class:"token punctuation"},"("),s("9"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$BranchName"),s('"')]),s(),n("span",{class:"token operator"},"-notlike"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$SearchPattern"),s('"')]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$BranchName"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),os=n("hr",null,null,-1),is={id:"list-commits-ps1",tabindex:"-1"},cs={class:"header-anchor",href:"#list-commits-ps1"},ps=n("code",null,"list-commits.ps1",-1),rs=n("p",null,"This PowerShell script lists all commits in a Git repository. Supported output formats are: pretty, list, compact, normal or JSON.",-1),us=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-commits"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Format"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the path to the Git repository`),n("span",{class:"token punctuation"},"."),s(`
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`Format <String>
    Specifies the output format: pretty`),n("span",{class:"token punctuation"},"|"),s("list"),n("span",{class:"token punctuation"},"|"),s("compact"),n("span",{class:"token punctuation"},"|"),s("normal"),n("span",{class:"token punctuation"},"|"),s("JSON "),n("span",{class:"token punctuation"},"("),s("pretty by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    2
    Default value                pretty
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ks=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`list-commits
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# ID      Date                            Committer               Description"),s(`
`),n("span",{class:"token comment"},"# --      ----                            ---------               -----------"),s(`
`),n("span",{class:"token comment"},"# ccd0d3e Wed Sep 29 08:28:20 2021 +0200  Markus Fleschutz        Fix typo"),s(`
`),n("span",{class:"token comment"},"# ..."),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ds=n("p",null,null,-1),ms=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists Git commits
.DESCRIPTION
	This PowerShell script lists all commits in a Git repository. Supported output formats are: pretty, list, compact, normal or JSON.
.PARAMETER RepoDir
	Specifies the path to the Git repository.
.PARAMETER Format
	Specifies the output format: pretty|list|compact|normal|JSON (pretty by default)
.EXAMPLE
	PS> ./list-commits

	ID      Date                            Committer               Description
	--      ----                            ---------               -----------
	ccd0d3e Wed Sep 29 08:28:20 2021 +0200  Markus Fleschutz        Fix typo
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Format"),s(" = "),n("span",{class:"token string"},'"pretty"'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access directory: `),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Null"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"--"),s("version"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},'"⏳ Fetching latest updates..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" fetch "),n("span",{class:"token operator"},"--"),s("all "),n("span",{class:"token operator"},"--"),s(`quiet
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git fetch' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token operator"},"-"),s("Completed "),n("span",{class:"token string"},'" "'),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Format"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"pretty"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'""'),s(`
		& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" log "),n("span",{class:"token operator"},"--"),s("graph "),n("span",{class:"token operator"},"--"),s("format=format:"),n("span",{class:"token string"},"'%C(bold yellow)%s%C(reset)%d by %an 🕘%cs 🔗%h'"),s(),n("span",{class:"token operator"},"--"),s(`all
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Format"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"list"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token string"},'"Hash            Date            Author                  Description"'),s(`
		`),n("span",{class:"token string"},'"----            ----            ------                  -----------"'),s(`
		& git log `),n("span",{class:"token operator"},"--"),s("pretty=format:"),n("span",{class:"token string"},'"%h%x09%cs%x09%an%x09%s"'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Format"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"compact"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token string"},'"List of Git Commits"'),s(`
		`),n("span",{class:"token string"},'"-------------------"'),s(`
		& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" log "),n("span",{class:"token operator"},"--"),s("graph "),n("span",{class:"token operator"},"--"),s("pretty=format:"),n("span",{class:"token string"},"'%Cred%h%Creset%C(yellow)%d%Creset %s %C(bold blue)by %an %cr%Creset'"),s(),n("span",{class:"token operator"},"--"),s(`abbrev-commit
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git log' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Format"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"JSON"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" log "),n("span",{class:"token operator"},"--"),s("pretty=format:"),n("span",{class:"token string"},`'{%n  "commit": "%H",%n  "abbreviated_commit": "%h",%n  "tree": "%T",%n  "abbreviated_tree": "%t",%n  "parent": "%P",%n  "abbreviated_parent": "%p",%n  "refs": "%D",%n  "encoding": "%e",%n  "subject": "%s",%n  "sanitized_subject_line": "%f",%n  "body": "%b",%n  "commit_notes": "%N",%n  "verification_flag": "%G?",%n  "signer": "%GS",%n  "signer_key": "%GK",%n  "author": {%n    "name": "%aN",%n    "email": "%aE",%n    "date": "%aD"%n  },%n  "commiter": {%n    "name": "%cN",%n    "email": "%cE",%n    "date": "%cD"%n  }%n},'`),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token string"},'"List of Git Commits"'),s(`
		`),n("span",{class:"token string"},'"-------------------"'),s(`
		& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(` log
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git log' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),bs=n("hr",null,null,-1),vs={id:"list-latest-tag-ps1",tabindex:"-1"},hs={class:"header-anchor",href:"#list-latest-tag-ps1"},gs=n("code",null,"list-latest-tag.ps1",-1),fs=n("p",null,"This PowerShell script lists the latest tag on the current branch in a Git repository.",-1),ws=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-latest-tag"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the path to the repository
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$s=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-latest-tag"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\MyRepo
`),n("span",{class:"token comment"},"# 🔖v0.8 at commit 02171a401d83b01a0cda0af426840b605e617f08"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ys=n("p",null,null,-1),Ss=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the latest tag on the current branch in a Git repository
.DESCRIPTION
	This PowerShell script lists the latest tag on the current branch in a Git repository.
.PARAMETER RepoDir
	Specifies the path to the repository
.EXAMPLE
	PS> ./list-latest-tag.ps1 C:\\MyRepo
	🔖v0.8 at commit 02171a401d83b01a0cda0af426840b605e617f08
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"test-path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access directory: `),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Null"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"--"),s("version"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$LatestTagCommitID"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" rev-list "),n("span",{class:"token operator"},"--"),s("tags "),n("span",{class:"token operator"},"--"),s("max-count=1"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$LatestTag"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" describe "),n("span",{class:"token operator"},"--"),s("tags "),n("span",{class:"token variable"},"$LatestTagCommitID"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token string"},[s('"🔖'),n("span",{class:"token variable"},"$LatestTag"),s(" at commit "),n("span",{class:"token variable"},"$LatestTagCommitID"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ps=n("hr",null,null,-1),Cs={id:"list-latest-tags-ps1",tabindex:"-1"},Es={class:"header-anchor",href:"#list-latest-tags-ps1"},_s=n("code",null,"list-latest-tags.ps1",-1),xs=n("p",null,"This PowerShell script lists the latest tags in all Git repositories in the specified folder.",-1),Ds=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-latest-tags"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("ParentDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`ParentDir <String>
    Specifies the path to the parent folder
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),As=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`list-latest-tags C:\\MyRepos
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Rs=n("p",null,null,-1),Ns=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the latests tags in all Git repositories in a folder
.DESCRIPTION
	This PowerShell script lists the latest tags in all Git repositories in the specified folder.
.PARAMETER ParentDir
	Specifies the path to the parent folder
.EXAMPLE
	PS> ./list-latest-tags C:\\MyRepos
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$ParentDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"test-path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access directory: `),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Null"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"--"),s("version"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Folders"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"get-childItem"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("attributes Directory"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$FolderCount"),s(" = "),n("span",{class:"token variable"},"$Folders"),n("span",{class:"token punctuation"},"."),s(`Count
	`),n("span",{class:"token variable"},"$ParentDirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"get-item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
	`),n("span",{class:"token string"},[s('"Found '),n("span",{class:"token variable"},"$FolderCount"),s(" subfolders in 📂"),n("span",{class:"token variable"},"$ParentDirName"),s('..."')]),s(`

	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Folder"),s(" in "),n("span",{class:"token variable"},"$Folders"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$FolderName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"get-item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name

`),n("span",{class:"token comment"},'#		& git -C "$Folder" fetch --tags'),s(`
`),n("span",{class:"token comment"},`#		if ($lastExitCode -ne "0") { throw "'git fetch --tags' failed" }`),s(`

		`),n("span",{class:"token variable"},"$LatestTagCommitID"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(" rev-list "),n("span",{class:"token operator"},"--"),s("tags "),n("span",{class:"token operator"},"--"),s("max-count=1"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token variable"},"$LatestTag"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(" describe "),n("span",{class:"token operator"},"--"),s("tags "),n("span",{class:"token variable"},"$LatestTagCommitID"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token string"},[s('"* '),n("span",{class:"token variable"},"$FolderName"),s(),n("span",{class:"token variable"},"$LatestTag"),s(" ("),n("span",{class:"token variable"},"$LatestTagCommitID"),s(')"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ts=n("hr",null,null,-1),Gs={id:"list-repos-ps1",tabindex:"-1"},Is={class:"header-anchor",href:"#list-repos-ps1"},Ws=n("code",null,"list-repos.ps1",-1),Fs=n("p",null,"This PowerShell script lists details of all Git repositories in a folder.",-1),Ls=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-repos"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("ParentDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`ParentDir <String>
    Specifies the path to the parent directory`),n("span",{class:"token punctuation"},"."),s(`
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ms=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`list-repos C:\\MyRepos
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# Repository   Latest Tag   Branch    Status    Remote"),s(`
`),n("span",{class:"token comment"},"# ----------   ----------   ------    ------    ------"),s(`
`),n("span",{class:"token comment"},"# 📂cmake      v3.23.0      main      ✔️clean    git@github.com:Kitware/CMake ↓0"),s(`
`),n("span",{class:"token comment"},"# ..."),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Os=n("p",null,null,-1),Vs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists Git repos
.DESCRIPTION
	This PowerShell script lists details of all Git repositories in a folder.
.PARAMETER ParentDir
	Specifies the path to the parent directory.
.EXAMPLE
	PS> ./list-repos C:\\MyRepos
	
	Repository   Latest Tag   Branch    Status    Remote
	----------   ----------   ------    ------    ------
	📂cmake      v3.23.0      main      ✔️clean    git@github.com:Kitware/CMake ↓0
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$ParentDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" ListRepos "),n("span",{class:"token punctuation"},"{"),s(` 
	`),n("span",{class:"token variable"},"$Folders"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("attributes Directory"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Folder"),s(" in "),n("span",{class:"token variable"},"$Folders"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$Repository"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
		`),n("span",{class:"token variable"},"$LatestTagCommitID"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(" rev-list "),n("span",{class:"token operator"},"--"),s("tags "),n("span",{class:"token operator"},"--"),s("max-count=1"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$LatestTagCommitID"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	        	`),n("span",{class:"token variable"},"$LatestTag"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(" describe "),n("span",{class:"token operator"},"--"),s("tags "),n("span",{class:"token variable"},"$LatestTagCommitID"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token variable"},"$LatestTag"),s(" = "),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token variable"},"$Branch"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(" branch "),n("span",{class:"token operator"},"--"),n("span",{class:"token function"},"show-current"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token variable"},"$RemoteURL"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(" remote "),n("span",{class:"token function"},"get-url"),s(" origin"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token variable"},"$NumCommits"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(" rev-list HEAD"),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),n("span",{class:"token punctuation"},"."),s("origin/"),n("span",{class:"token variable"},"$Branch"),s(),n("span",{class:"token operator"},"--"),s("count"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token variable"},"$Status"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(" status "),n("span",{class:"token operator"},"--"),s("short"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Status"),s('"')]),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Status"),s(" = "),n("span",{class:"token string"},'"✔️clean"'),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"elseif"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Status"),s('"')]),s(),n("span",{class:"token operator"},"-like"),s(),n("span",{class:"token string"},'" M *"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Status"),s(" = "),n("span",{class:"token string"},'"⚠️modified"'),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token function"},"New-Object"),s(" PSObject "),n("span",{class:"token operator"},"-"),s("property @"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},"'Repository'"),s("="),n("span",{class:"token string"},[s('"📂'),n("span",{class:"token variable"},"$Repository"),s('"')]),n("span",{class:"token punctuation"},";"),n("span",{class:"token string"},"'Latest Tag'"),s("="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$LatestTag"),s('"')]),n("span",{class:"token punctuation"},";"),n("span",{class:"token string"},"'Branch'"),s("="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Branch"),s('"')]),n("span",{class:"token punctuation"},";"),n("span",{class:"token string"},"'Status'"),s("="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Status"),s('"')]),n("span",{class:"token punctuation"},";"),n("span",{class:"token string"},"'Remote'"),s("="),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RemoteURL"),s(" ↓"),n("span",{class:"token variable"},"$NumCommits"),s('"')]),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access directory: `),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Null"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"--"),s("version"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	ListRepos `),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Format-Table"),s(),n("span",{class:"token operator"},"-"),s("property @"),n("span",{class:"token punctuation"},"{"),s("e="),n("span",{class:"token string"},"'Repository'"),n("span",{class:"token punctuation"},";"),s("width=20"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s("@"),n("span",{class:"token punctuation"},"{"),s("e="),n("span",{class:"token string"},"'Latest Tag'"),n("span",{class:"token punctuation"},";"),s("width=18"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s("@"),n("span",{class:"token punctuation"},"{"),s("e="),n("span",{class:"token string"},"'Branch'"),n("span",{class:"token punctuation"},";"),s("width=20"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s("@"),n("span",{class:"token punctuation"},"{"),s("e="),n("span",{class:"token string"},"'Status'"),n("span",{class:"token punctuation"},";"),s("width=10"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`Remote
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Bs=n("hr",null,null,-1),zs={id:"list-submodules-ps1",tabindex:"-1"},qs={class:"header-anchor",href:"#list-submodules-ps1"},Hs=n("code",null,"list-submodules.ps1",-1),Ks=n("p",null,"This PowerShell script lists the submodules in the given Git repository.",-1),Ys=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-submodules"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the path to the repository `),n("span",{class:"token punctuation"},"("),s("current working directory by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Xs=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-submodules"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\MyRepo
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Us=n("p",null,null,-1),js=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists the submodules in a Git repository
.DESCRIPTION
	This PowerShell script lists the submodules in the given Git repository.
.PARAMETER RepoDir
	Specifies the path to the repository (current working directory by default)
.EXAMPLE
	PS> ./list-submodules.ps1 C:\\MyRepo
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1/4) Searching for Git executable...   "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$RepoDirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"⏳ (2/4) Checking Git repository...        📂'),n("span",{class:"token variable"},"$RepoDirName"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access folder: `),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (3/4) Fetching latest updates... "'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(` fetch
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git fetch' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (4/4) Listing submodules... "'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(` submodule
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git submodule' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Qs=n("hr",null,null,-1),Js={id:"list-tags-ps1",tabindex:"-1"},Zs={class:"header-anchor",href:"#list-tags-ps1"},na=n("code",null,"list-tags.ps1",-1),sa=n("p",null,"This PowerShell script fetches all tags of a Git repository and lists it.",-1),aa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-tags"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("SearchPattern"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the path to the Git repository `),n("span",{class:"token punctuation"},"("),s("current working directory by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`SearchPattern <String>
    Specifies the search pattern `),n("span",{class:"token punctuation"},"("),s("anything by default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    2
    Default value                `),n("span",{class:"token operator"},"*"),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ea=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("list-tags"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\MyRepo
`),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token comment"},"# Tag             Description"),s(`
`),n("span",{class:"token comment"},"# ---             -----------"),s(`
`),n("span",{class:"token comment"},"# v0.1            Update README.md"),s(`
`),n("span",{class:"token comment"},"# ..."),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ta=n("p",null,null,-1),la=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Lists all tags in a repository
.DESCRIPTION
	This PowerShell script fetches all tags of a Git repository and lists it.
.PARAMETER RepoDir
	Specifies the path to the Git repository (current working directory by default)
.PARAMETER SearchPattern
	Specifies the search pattern (anything by default)
.EXAMPLE
	PS> ./list-tags.ps1 C:\\MyRepo

	Tag             Description
	---             -----------
	v0.1            Update README.md
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$SearchPattern"),s("="),n("span",{class:"token string"},'"*"'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},'"⏳ (1/4) Searching for Git executable... "'),s(`
	`),n("span",{class:"token variable"},"$Null"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"--"),s("version"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},'"⏳ (2/4) Checking local repository... "'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access directory: `),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},'"⏳ (3/4) Fetching newer tags from remote..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" fetch "),n("span",{class:"token operator"},"--"),s("all "),n("span",{class:"token operator"},"--"),s(`tags
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git fetch --all --tags' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token string"},'"⏳ (4/4) Removing obsolete local tags..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" fetch "),n("span",{class:"token operator"},"--"),s("prune "),n("span",{class:"token operator"},"--"),s(`prune-tags
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git fetch --prune --prune-tags' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Progress"),s(),n("span",{class:"token operator"},"-"),s("completed "),n("span",{class:"token string"},'"Done."'),s(`
 	`),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token string"},'"Tag             Description"'),s(`
	`),n("span",{class:"token string"},'"---             -----------"'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" tag "),n("span",{class:"token operator"},"--"),s("list "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$SearchPattern"),s('"')]),s(),n("span",{class:"token operator"},"-"),s(`n
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git tag --list' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),oa=n("hr",null,null,-1),ia={id:"new-branch-ps1",tabindex:"-1"},ca={class:"header-anchor",href:"#new-branch-ps1"},pa=n("code",null,"new-branch.ps1",-1),ra=n("p",null,"This PowerShell script creates a new branch in a local Git repository and switches to it.",-1),ua=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"new-branch"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("newBranch"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("repoPath"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`newBranch <String>
    Specifies the new branch name
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`repoPath <String>
    Specifies the path to the Git repository `),n("span",{class:"token punctuation"},"("),s("current working directory per default"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    2
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ka=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"new-branch"),n("span",{class:"token punctuation"},"."),s(`ps1 test123 C:\\MyRepo
`),n("span",{class:"token comment"},"# ⏳ (1/6) Searching for Git executable...  git version 2.42.0.windows.2"),s(`
`),n("span",{class:"token comment"},"# ⏳ (2/6) Checking local repository..."),s(`
`),n("span",{class:"token comment"},"# ⏳ (3/6) Fetching latest updates..."),s(`
`),n("span",{class:"token comment"},"# ⏳ (4/6) Creating new branch..."),s(`
`),n("span",{class:"token comment"},"# ⏳ (5/6) Pushing updates..."),s(`
`),n("span",{class:"token comment"},"# ⏳ (6/6) Updating submodules..."),s(`
`),n("span",{class:"token comment"},"# ✔️ Created branch 'test123' in repo 📂MyRepo (based on 'main' in 18 sec)"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),da=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Creates a new Git branch 
.DESCRIPTION
	This PowerShell script creates a new branch in a local Git repository and switches to it.
.PARAMETER newBranch
	Specifies the new branch name
.PARAMETER repoPath
	Specifies the path to the Git repository (current working directory per default)
.EXAMPLE
	PS> ./new-branch.ps1 test123 C:\\MyRepo
	⏳ (1/6) Searching for Git executable...  git version 2.42.0.windows.2
	⏳ (2/6) Checking local repository...
	⏳ (3/6) Fetching latest updates...
	⏳ (4/6) Creating new branch...
	⏳ (5/6) Pushing updates...
	⏳ (6/6) Updating submodules...
	✔️ Created branch 'test123' in repo 📂MyRepo (based on 'main' in 18 sec)
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$newBranch"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$repoPath"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$newBranch"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$newBranch"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter the new branch name"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$stopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1/6) Searching for Git executable...  "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (2/6) Checking local repository..."'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$repoPath"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access directory: `),n("span",{class:"token variable"},"$repoPath"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$repoPathName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$repoPath"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name

	`),n("span",{class:"token string"},'"⏳ (3/6) Fetching latest updates..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$repoPath"),s('"')]),s(" fetch "),n("span",{class:"token operator"},"--"),s("all "),n("span",{class:"token operator"},"--"),s("recurse-submodules "),n("span",{class:"token operator"},"--"),s("prune "),n("span",{class:"token operator"},"--"),s("prune-tags "),n("span",{class:"token operator"},"--"),s(`force
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git fetch' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$currentBranch"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$repoPath"),s('"')]),s(" rev-parse "),n("span",{class:"token operator"},"--"),s("abbrev-ref HEAD"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git rev-parse' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"⏳ (4/6) Creating new branch..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$repoPath"),s('"')]),s(" checkout "),n("span",{class:"token operator"},"-"),s("b "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$newBranch"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git checkout -b `),n("span",{class:"token variable"},"$newBranch"),s("' failed with exit code "),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"⏳ (5/6) Pushing updates..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$repoPath"),s('"')]),s(" push origin "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$newBranch"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git push origin `),n("span",{class:"token variable"},"$newBranch"),s("' failed with exit code "),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"⏳ (6/6) Updating submodules..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$repoPath"),s('"')]),s(" submodule update "),n("span",{class:"token operator"},"--"),s("init "),n("span",{class:"token operator"},"--"),s(`recursive
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git submodule update' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$elapsed"),s(" = "),n("span",{class:"token variable"},"$stopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s(`"✔️ Created branch '`),n("span",{class:"token variable"},"$newBranch"),s("' in repo 📂"),n("span",{class:"token variable"},"$repoPathName"),s(" (based on '"),n("span",{class:"token variable"},"$currentBranch"),s("' in "),n("span",{class:"token variable"},"$elapsed"),s(' sec)"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ma=n("hr",null,null,-1),ba={id:"new-tag-ps1",tabindex:"-1"},va={class:"header-anchor",href:"#new-tag-ps1"},ha=n("code",null,"new-tag.ps1",-1),ga=n("p",null,"This PowerShell script creates a new tag in a Git repository.",-1),fa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"new-tag"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("TagName"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`TagName <String>
    Specifies the new tag name
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the path to the Git repository
    
    Required?                    false
    Position?                    2
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),wa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"new-tag"),n("span",{class:"token punctuation"},"."),s("ps1 v1"),n("span",{class:"token punctuation"},"."),s(`7
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$a=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Creates a new tag in a Git repository
.DESCRIPTION
	This PowerShell script creates a new tag in a Git repository.
.PARAMETER TagName
	Specifies the new tag name
.PARAMETER RepoDir
	Specifies the path to the Git repository
.EXAMPLE
	PS> ./new-tag.ps1 v1.7
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$TagName"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TagName"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$TagName"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter new tag name"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"test-path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access directory: `),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"set-location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(`

	`),n("span",{class:"token variable"},"$Null"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"--"),s("version"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Result"),s(" = "),n("span",{class:"token punctuation"},"("),s("git status"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git status' failed in `),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Result"),s('"')]),s(),n("span",{class:"token operator"},"-notmatch"),s(),n("span",{class:"token string"},'"nothing to commit, working tree clean"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"Repository is NOT clean: '),n("span",{class:"token variable"},"$Result"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	& `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/fetch-repo.ps1"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Script 'fetch-repo.ps1' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	& git tag `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TagName"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Error: 'git tag `),n("span",{class:"token variable"},"$TagName"),s(`' failed!"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`

	& git push origin `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TagName"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Error: 'git push origin `),n("span",{class:"token variable"},"$TagName"),s(`' failed!"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s(`"✔️ created new tag '`),n("span",{class:"token variable"},"$TagName"),s("' in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ya=n("hr",null,null,-1),Sa={id:"pick-commit-ps1",tabindex:"-1"},Pa={class:"header-anchor",href:"#pick-commit-ps1"},Ca=n("code",null,"pick-commit.ps1",-1),Ea=n("p",null,"Cherry-picks a Git commit into one or more branches (branch names need to be separated by spaces)",-1),_a=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"NOTE"),n("p",null,"in case of merge conflicts the script stops immediately!")],-1),xa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("pick-commit"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("CommitID"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("CommitMessage"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Branches"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`CommitID <String>
    Specifies the commit ID
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`CommitMessage <String>
    Specifies the commit message to use
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`Branches <String>
    Specifies the list of branches`),n("span",{class:"token punctuation"},","),s(` separated by spaces
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the path to the Git repository
    
    Required?                    false
    Position?                    4
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Da=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("pick-commit 93849f889 "),n("span",{class:"token string"},'"Fix typo"'),s(),n("span",{class:"token string"},'"v1 v2 v3"'),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Aa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Cherry-picks a Git commit into one or more branches
.DESCRIPTION
	Cherry-picks a Git commit into one or more branches (branch names need to be separated by spaces)
	NOTE: in case of merge conflicts the script stops immediately! 
.PARAMETER CommitID
	Specifies the commit ID
.PARAMETER CommitMessage
	Specifies the commit message to use
.PARAMETER Branches
	Specifies the list of branches, separated by spaces
.PARAMETER RepoDir
	Specifies the path to the Git repository
.EXAMPLE
	PS> ./pick-commit 93849f889 "Fix typo" "v1 v2 v3"
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$CommitID"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$CommitMessage"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Branches"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access directory: `),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"Set-Location"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$CommitID"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$CommitID"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the Git commit id to cherry-pick"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$CommitMessage"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$CommitMessage"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the commit message to use"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Branches"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Branches"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the branches (separated by spaces)"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token variable"},"$BranchArray"),s(" = "),n("span",{class:"token variable"},"$Branches"),n("span",{class:"token punctuation"},"."),s("Split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$NumBranches"),s(" = "),n("span",{class:"token variable"},"$BranchArray"),n("span",{class:"token punctuation"},"."),s(`Count
	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Branch"),s(" in "),n("span",{class:"token variable"},"$BranchArray"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

		`),n("span",{class:"token string"},[s('"🍒 Switching to branch '),n("span",{class:"token variable"},"$Branch"),s(' ..."')]),s(`
		& git checkout `),n("span",{class:"token operator"},"--"),s("recurse-submodules "),n("span",{class:"token operator"},"--"),s("force "),n("span",{class:"token variable"},"$Branch"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git checkout `),n("span",{class:"token variable"},"$Branch"),s(`' failed"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token string"},'"🍒 Updating submodules..."'),s(`
		& git submodule update `),n("span",{class:"token operator"},"--"),s("init "),n("span",{class:"token operator"},"--"),s(`recursive
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git submodule update' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token string"},'"🍒 Cleaning the repository from untracked files..."'),s(`
		& git clean `),n("span",{class:"token operator"},"-"),s("fdx "),n("span",{class:"token operator"},"-"),s(`f
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git clean -fdx -f' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`
			
		& git submodule `),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token operator"},"--"),s("recursive git clean "),n("span",{class:"token operator"},"-"),s("fdx "),n("span",{class:"token operator"},"-"),s(`f
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git clean -fdx -f' in submodules failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token string"},'"🍒 Pulling latest updates..."'),s(`
		& git pull `),n("span",{class:"token operator"},"--"),s(`recurse-submodules 
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git pull' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token string"},'"🍒 Checking the status..."'),s(`
		`),n("span",{class:"token variable"},"$Result"),s(" = "),n("span",{class:"token punctuation"},"("),s("git status"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git status' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Result"),s('"')]),s(),n("span",{class:"token operator"},"-notmatch"),s(),n("span",{class:"token string"},'"nothing to commit, working tree clean"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"Branch is NOT clean: '),n("span",{class:"token variable"},"$Result"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token string"},'"🍒 Cherry picking..."'),s(`
		& git cherry-pick `),n("span",{class:"token operator"},"--"),s("no-commit "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$CommitID"),s('"')]),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git cherry-pick `),n("span",{class:"token variable"},"$CommitID"),s(`' failed"`)]),s(),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token string"},'"🍒 Committing..."'),s(`
		& git commit `),n("span",{class:"token operator"},"-"),s("m "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$CommitMessage"),s('"')]),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git commit' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token string"},'"🍒 Pushing..."'),s(`
		& git push
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git push' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ cherry picked '),n("span",{class:"token variable"},"$CommitID"),s(" into "),n("span",{class:"token variable"},"$NumBranches"),s(" branches in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ra=n("hr",null,null,-1),Na={id:"pull-repo-ps1",tabindex:"-1"},Ta={class:"header-anchor",href:"#pull-repo-ps1"},Ga=n("code",null,"pull-repo.ps1",-1),Ia=n("p",null,"This PowerShell script pulls the latest updates into a local Git repository (including submodules).",-1),Wa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("pull-repo"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the file path to the local Git repository `),n("span",{class:"token punctuation"},"("),s("default is working directory"),n("span",{class:"token punctuation"},")"),s(`
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Fa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("pull-repo"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\MyRepo
`),n("span",{class:"token comment"},"# ⏳ (1/4) Searching for Git executable...  git version 2.42.0.windows.1"),s(`
`),n("span",{class:"token comment"},"# ⏳ (2/4) Checking local repository..."),s(`
`),n("span",{class:"token comment"},"# ⏳ (3/4) Pulling updates..."),s(`
`),n("span",{class:"token comment"},"# ⏳ (4/4) Updating submodules..."),s(`
`),n("span",{class:"token comment"},"# ✔️ Pulled updates into repo 📂MyRepo in 14 sec"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),La=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Pulls updates into a Git repository
.DESCRIPTION
	This PowerShell script pulls the latest updates into a local Git repository (including submodules).
.PARAMETER RepoDir
	Specifies the file path to the local Git repository (default is working directory)
.EXAMPLE
	PS> ./pull-repo.ps1 C:\\MyRepo
	⏳ (1/4) Searching for Git executable...  git version 2.42.0.windows.1
	⏳ (2/4) Checking local repository...
	⏳ (3/4) Pulling updates...
	⏳ (4/4) Updating submodules...
	✔️ Pulled updates into repo 📂MyRepo in 14 sec
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1/4) Searching for Git executable...  "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (2/4) Checking local repository..."'),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access folder: `),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$Result"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" status"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Result"),s('"')]),s(),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token string"},'"HEAD detached at "'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},'"Currently in detached HEAD state (not on a branch!), so nothing to pull"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$RepoDirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (3/4) Pulling updates..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" pull "),n("span",{class:"token operator"},"--"),s(`recurse-submodules=yes
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git pull' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (4/4) Updating submodules... "'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" submodule update "),n("span",{class:"token operator"},"--"),s("init "),n("span",{class:"token operator"},"--"),s(`recursive
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git submodule update' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ Pulled updates into repo 📂'),n("span",{class:"token variable"},"$RepoDirName"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ma=n("hr",null,null,-1),Oa={id:"pull-repos-ps1",tabindex:"-1"},Va={class:"header-anchor",href:"#pull-repos-ps1"},Ba=n("code",null,"pull-repos.ps1",-1),za=n("p",null,"This PowerShell script pulls updates into all Git repositories in a folder (including submodules).",-1),qa=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("pull-repos"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("ParentDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`ParentDir <String>
    Specifies the path to the parent folder
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ha=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s(`pull-repos C:\\MyRepos
`),n("span",{class:"token comment"},"# ⏳ (1) Searching for Git executable...  git version 2.41.0.windows.3"),s(`
`),n("span",{class:"token comment"},"# ⏳ (2) Checking parent folder...        33 subfolders"),s(`
`),n("span",{class:"token comment"},"# ⏳ (3/35) Pulling into 📂base256unicode..."),s(`
`),n("span",{class:"token comment"},"# ..."),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ka=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Pulls updates into Git repos
.DESCRIPTION
	This PowerShell script pulls updates into all Git repositories in a folder (including submodules).
.PARAMETER ParentDir
	Specifies the path to the parent folder
.EXAMPLE
	PS> ./pull-repos C:\\MyRepos
	⏳ (1) Searching for Git executable...  git version 2.41.0.windows.3
	⏳ (2) Checking parent folder...        33 subfolders
	⏳ (3/35) Pulling into 📂base256unicode...
	...
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$ParentDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1) Searching for Git executable...     "'),s(),n("span",{class:"token operator"},"-"),s(`NoNewline
	& git `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (2) Checking parent folder...           "'),s(),n("span",{class:"token operator"},"-"),s(`NoNewline
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access folder: `),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$Folders"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("attributes Directory"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$NumFolders"),s(" = "),n("span",{class:"token variable"},"$Folders"),n("span",{class:"token punctuation"},"."),s(`Count
	`),n("span",{class:"token variable"},"$ParentDirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$ParentDir"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$NumFolders"),s(' subfolders"')]),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Step"),s(` = 3
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Failed"),s(` = 0
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Folder"),s(" in "),n("span",{class:"token variable"},"$Folders"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token variable"},"$FolderName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name
		`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"⏳ ('),n("span",{class:"token variable"},"$Step"),s("/"),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$NumFolders"),s(),n("span",{class:"token operator"},"+"),s(" 2"),n("span",{class:"token punctuation"},")")]),s(") Pulling into 📂"),n("span",{class:"token variable"},"$FolderName"),s('...    "')]),s(),n("span",{class:"token operator"},"-"),s(`NoNewline

		& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(" pull "),n("span",{class:"token operator"},"--"),s("recurse-submodules "),n("span",{class:"token operator"},"--"),s(`jobs=4
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Failed"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token function"},"write-warning"),s(),n("span",{class:"token string"},[s(`"'git pull' in 📂`),n("span",{class:"token variable"},"$FolderName"),s(' failed"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

		& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Folder"),s('"')]),s(" submodule update "),n("span",{class:"token operator"},"--"),s("init "),n("span",{class:"token operator"},"--"),s(`recursive
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git submodule update' in 📂`),n("span",{class:"token variable"},"$Folder"),s(" failed with exit code "),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token variable"},"$Step"),n("span",{class:"token operator"},"++"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ Pulled updates into '),n("span",{class:"token variable"},"$NumFolders"),s(" repos under 📂"),n("span",{class:"token variable"},"$ParentDirName"),s(" ("),n("span",{class:"token variable"},"$Failed"),s(" failed, took "),n("span",{class:"token variable"},"$Elapsed"),s(' sec)"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ya=n("hr",null,null,-1),Xa={id:"remove-tag-ps1",tabindex:"-1"},Ua={class:"header-anchor",href:"#remove-tag-ps1"},ja=n("code",null,"remove-tag.ps1",-1),Qa=n("p",null,"This PowerShell script removes a Git tag, either locally, remote, or both.",-1),Ja=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"remove-tag"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("TagName"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Mode"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`TagName <String>
    Specifies the Git tag name
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`Mode <String>
    Specifies either locally`),n("span",{class:"token punctuation"},","),s(" remote"),n("span",{class:"token punctuation"},","),s(` or both
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the path to the Git repository
    
    Required?                    false
    Position?                    3
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Za=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"remove-tag"),s(" v1"),n("span",{class:"token punctuation"},"."),s(`7 locally
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ne=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Removes a Git tag (locally, remote, or both)
.DESCRIPTION
	This PowerShell script removes a Git tag, either locally, remote, or both.
.PARAMETER TagName
	Specifies the Git tag name
.PARAMETER Mode
	Specifies either locally, remote, or both
.PARAMETER RepoDir
	Specifies the path to the Git repository
.EXAMPLE
	PS> ./remove-tag v1.7 locally
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$TagName"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Mode"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$TagName"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$TagName"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter new tag name"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Mode"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Mode"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Remove the tag locally, remote, or both"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"test-path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access directory: `),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Null"),s(" = "),n("span",{class:"token punctuation"},"("),s("git "),n("span",{class:"token operator"},"--"),s("version"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Mode"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"locally"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-or"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Mode"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"both"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'"Removing local tag..."'),s(`
		& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" tag "),n("span",{class:"token operator"},"--"),s("delete "),n("span",{class:"token variable"},"$TagName"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git tag --delete' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Mode"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"remote"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-or"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Mode"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'"both"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'"Removing remote tag..."'),s(`
		& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" push origin :refs/tags/"),n("span",{class:"token variable"},"$TagName"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git push origin' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s(`"✔️ removed tag '`),n("span",{class:"token variable"},"$TagName"),s("' in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),se=n("hr",null,null,-1),ae={id:"switch-branch-ps1",tabindex:"-1"},ee={class:"header-anchor",href:"#switch-branch-ps1"},te=n("code",null,"switch-branch.ps1",-1),le=n("p",null,"This PowerShell script switches to another branch in a Git repository (including submodules).",-1),oe=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"switch-branch"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("BranchName"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("RepoDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`BranchName <String>
    Specifies the branch name
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`RepoDir <String>
    Specifies the path to the local Git repository
    
    Required?                    false
    Position?                    2
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ie=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"switch-branch"),s(` main C:\\MyRepo
`),n("span",{class:"token comment"},"# ⏳ (1/6) Searching for Git executable...   git version 2.42.0.windows.1"),s(`
`),n("span",{class:"token comment"},"# ⏳ (2/6) Checking local repository..."),s(`
`),n("span",{class:"token comment"},"# ⏳ (3/6) Fetching updates..."),s(`
`),n("span",{class:"token comment"},"# ⏳ (4/6) Switching to branch 'main'..."),s(`
`),n("span",{class:"token comment"},"# ⏳ (5/6) Pulling updates..."),s(`
`),n("span",{class:"token comment"},"# ⏳ (6/6) Updating submodules..."),s(`
`),n("span",{class:"token comment"},"# ✔️ Switched repo 📂MyRepo to branch 'main' (took 22 sec)"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ce=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Switches the Git branch
.DESCRIPTION
	This PowerShell script switches to another branch in a Git repository (including submodules).
.PARAMETER BranchName
	Specifies the branch name
.PARAMETER RepoDir
	Specifies the path to the local Git repository
.EXAMPLE
	PS> ./switch-branch main C:\\MyRepo
	⏳ (1/6) Searching for Git executable...   git version 2.42.0.windows.1
	⏳ (2/6) Checking local repository...
	⏳ (3/6) Fetching updates...
	⏳ (4/6) Switching to branch 'main'...
	⏳ (5/6) Pulling updates...
	⏳ (6/6) Updating submodules...
	✔️ Switched repo 📂MyRepo to branch 'main' (took 22 sec)
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$BranchName"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$BranchName"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$BranchName"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter name of branch to switch to"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$RepoDir"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter path to the local Git repository"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1/6) Searching for Git executable...   "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"--"),s(`version
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (2/6) Checking local repository..."'),s(`
	`),n("span",{class:"token variable"},"$RepoDir"),s(" = "),n("span",{class:"token function"},"Resolve-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access directory: `),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$Result"),s(" = "),n("span",{class:"token punctuation"},"("),s("git status"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git status' in `),n("span",{class:"token variable"},"$RepoDir"),s(" failed with exit code "),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Result"),s('"')]),s(),n("span",{class:"token operator"},"-notmatch"),s(),n("span",{class:"token string"},'"nothing to commit, working tree clean"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s('"Git repository is NOT clean: '),n("span",{class:"token variable"},"$Result"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$RepoDirName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name

	`),n("span",{class:"token string"},'"⏳ (3/6) Fetching updates..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" fetch "),n("span",{class:"token operator"},"--"),s("all "),n("span",{class:"token operator"},"--"),s("prune "),n("span",{class:"token operator"},"--"),s("prune-tags "),n("span",{class:"token operator"},"--"),s(`force
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git fetch' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},[s(`"⏳ (4/6) Switching to branch '`),n("span",{class:"token variable"},"$BranchName"),s(`'..."`)]),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" checkout "),n("span",{class:"token operator"},"--"),s("recurse-submodules "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$BranchName"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git checkout `),n("span",{class:"token variable"},"$BranchName"),s("' failed with exit code "),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"⏳ (5/6) Pulling updates..."'),s(`
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" pull "),n("span",{class:"token operator"},"--"),s(`recurse-submodules
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git pull' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'"⏳ (6/6) Updating submodules..."'),s(`	
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$RepoDir"),s('"')]),s(" submodule update "),n("span",{class:"token operator"},"--"),s("init "),n("span",{class:"token operator"},"--"),s(`recursive
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"'git submodule update' failed with exit code `),n("span",{class:"token variable"},"$lastExitCode"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ Switched repo 📂'),n("span",{class:"token variable"},"$RepoDirName"),s(" to branch '"),n("span",{class:"token variable"},"$BranchName"),s("' (took "),n("span",{class:"token variable"},"$Elapsed"),s(' sec)"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pe=n("hr",null,null,-1),re={id:"sync-repo-ps1",tabindex:"-1"},ue={class:"header-anchor",href:"#sync-repo-ps1"},ke=n("code",null,"sync-repo.ps1",-1),de=n("p",null,"This PowerShell script synchronizes a local Git repository by pull and push (including submodules).",-1),me=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"sync-repo"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("path"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`path <String>
    Specifies the path to the Git repository
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),be=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"sync-repo"),n("span",{class:"token punctuation"},"."),s(`ps1 C:\\MyRepo
`),n("span",{class:"token comment"},"# ⏳ (1/4) Searching for Git executable...  git version 2.42.0.windows.1"),s(`
`),n("span",{class:"token comment"},"# ⏳ (2/4) Checking local repository...     📂C:\\MyRepo"),s(`
`),n("span",{class:"token comment"},"# ⏳ (3/4) Pulling remote updates...        Already up to date."),s(`
`),n("span",{class:"token comment"},"# ⏳ (4/4) Pushing local updates...         Everything up-to-date"),s(`
`),n("span",{class:"token comment"},"# ✔️ Synced repo 📂MyRepo in 5 sec"),s(`
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),ve=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Synchronizes a repo 
.DESCRIPTION
	This PowerShell script synchronizes a local Git repository by pull and push (including submodules).
.PARAMETER path
	Specifies the path to the Git repository
.EXAMPLE
	PS> ./sync-repo.ps1 C:\\MyRepo
	⏳ (1/4) Searching for Git executable...  git version 2.42.0.windows.1
	⏳ (2/4) Checking local repository...     📂C:\\MyRepo
	⏳ (3/4) Pulling remote updates...        Already up to date.
	⏳ (4/4) Pushing local updates...         Everything up-to-date
	✔️ Synced repo 📂MyRepo in 5 sec
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$path"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PWD"),s('"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (1/4) Searching for Git executable...  "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
 	& git `),n("span",{class:"token operator"},"--"),s(`version
 	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"Can't execute 'git' - make sure Git is installed and available"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},[s('"⏳ (2/4) Checking local repository...     📂'),n("span",{class:"token variable"},"$path"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("pathType container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},[s(`"Can't access folder: `),n("span",{class:"token variable"},"$path"),s('"')]),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$pathName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$path"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (3/4) Pulling remote updates...        "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(" pull "),n("span",{class:"token operator"},"--"),s("all "),n("span",{class:"token operator"},"--"),s(`recurse-submodules
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git pull --all --recurse-submodes' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Write-Host"),s(),n("span",{class:"token string"},'"⏳ (4/4) Pushing local updates...         "'),s(),n("span",{class:"token operator"},"-"),s(`noNewline
	& git `),n("span",{class:"token operator"},"-"),s("C "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(` push
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$lastExitCode"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token string"},`"'git push' failed"`),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ Synced repo 📂'),n("span",{class:"token variable"},"$pathName"),s(" in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),he=n("hr",null,null,-1);function ge(d,fe){const o=k("FontIcon"),i=k("router-link"),c=k("VPCard"),p=k("Tabs"),m=k("TagLinks");return v(),h("div",null,[n("h1",w,[n("a",$,[n("span",null,g(d.$frontmatter.title)+" 관련",1)])]),n("nav",y,[n("ul",null,[n("li",null,[l(i,{to:"#build-repo-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("build-repo.ps1")]),_:1})]),n("li",null,[l(i,{to:"#build-repos-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("build-repos.ps1")]),_:1})]),n("li",null,[l(i,{to:"#check-repo-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("check-repo.ps1")]),_:1})]),n("li",null,[l(i,{to:"#clean-repo-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("clean-repo.ps1")]),_:1})]),n("li",null,[l(i,{to:"#clean-repos-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("clean-repos.ps1")]),_:1})]),n("li",null,[l(i,{to:"#clone-repos-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("clone-repos.ps1")]),_:1})]),n("li",null,[l(i,{to:"#configure-git-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("configure-git.ps1")]),_:1})]),n("li",null,[l(i,{to:"#fetch-repo-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("fetch-repo.ps1")]),_:1})]),n("li",null,[l(i,{to:"#fetch-repos-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("fetch-repos.ps1")]),_:1})]),n("li",null,[l(i,{to:"#list-branches-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("list-branches.ps1")]),_:1})]),n("li",null,[l(i,{to:"#list-commits-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("list-commits.ps1")]),_:1})]),n("li",null,[l(i,{to:"#list-latest-tag-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("list-latest-tag.ps1")]),_:1})]),n("li",null,[l(i,{to:"#list-latest-tags-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("list-latest-tags.ps1")]),_:1})]),n("li",null,[l(i,{to:"#list-repos-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("list-repos.ps1")]),_:1})]),n("li",null,[l(i,{to:"#list-submodules-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("list-submodules.ps1")]),_:1})]),n("li",null,[l(i,{to:"#list-tags-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("list-tags.ps1")]),_:1})]),n("li",null,[l(i,{to:"#new-branch-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("new-branch.ps1")]),_:1})]),n("li",null,[l(i,{to:"#new-tag-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("new-tag.ps1")]),_:1})]),n("li",null,[l(i,{to:"#pick-commit-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("pick-commit.ps1")]),_:1})]),n("li",null,[l(i,{to:"#pull-repo-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("pull-repo.ps1")]),_:1})]),n("li",null,[l(i,{to:"#pull-repos-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("pull-repos.ps1")]),_:1})]),n("li",null,[l(i,{to:"#remove-tag-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("remove-tag.ps1")]),_:1})]),n("li",null,[l(i,{to:"#switch-branch-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("switch-branch.ps1")]),_:1})]),n("li",null,[l(i,{to:"#sync-repo-ps1"},{default:a(()=>[l(o,{icon:"iconfont icon-file"}),s("sync-repo.ps1")]),_:1})])])]),S,n("h2",P,[n("a",C,[n("span",null,[l(o,{icon:"iconfont icon-file"}),E])])]),l(c,r(u({title:"build-repo.ps1",desc:"Builds a Git repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/build-repo.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),_,l(p,{id:"14",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[x]),tab1:a(({value:e,isActive:t})=>[D]),tab2:a(({value:e,isActive:t})=>[A]),_:1}),R,n("h2",N,[n("a",T,[n("span",null,[l(o,{icon:"iconfont icon-file"}),G])])]),l(c,r(u({title:"build-repos.ps1",desc:"Builds all Git repositories in a folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/build-repos.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),I,l(p,{id:"33",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[W]),tab1:a(({value:e,isActive:t})=>[F,L]),tab2:a(({value:e,isActive:t})=>[M]),_:1}),O,n("h2",V,[n("a",B,[n("span",null,[l(o,{icon:"iconfont icon-file"}),z])])]),l(c,r(u({title:"check-repo.ps1",desc:"Checks a Git repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/check-repo.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),q,l(p,{id:"55",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[H]),tab1:a(({value:e,isActive:t})=>[K,Y]),tab2:a(({value:e,isActive:t})=>[X]),_:1}),U,n("h2",j,[n("a",Q,[n("span",null,[l(o,{icon:"iconfont icon-file"}),J])])]),l(c,r(u({title:"clean-repo.ps1",desc:"Cleans a Git repository from untracked files.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/clean-repo.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Z,nn,l(p,{id:"82",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[sn]),tab1:a(({value:e,isActive:t})=>[an,en]),tab2:a(({value:e,isActive:t})=>[tn]),_:1}),ln,n("h2",on,[n("a",cn,[n("span",null,[l(o,{icon:"iconfont icon-file"}),pn])])]),l(c,r(u({title:"clean-repos.ps1",desc:"Cleans all Git repositories in a folder from untracked files.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/clean-repos.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),rn,l(p,{id:"104",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[un]),tab1:a(({value:e,isActive:t})=>[kn,dn]),tab2:a(({value:e,isActive:t})=>[mn]),_:1}),bn,n("h2",vn,[n("a",hn,[n("span",null,[l(o,{icon:"iconfont icon-file"}),gn])])]),l(c,r(u({title:"clone-repos.ps1",desc:"Clones well-known Git repositories.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/clone-repos.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),fn,l(p,{id:"126",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[wn]),tab1:a(({value:e,isActive:t})=>[$n,yn]),tab2:a(({value:e,isActive:t})=>[Sn]),_:1}),Pn,n("h2",Cn,[n("a",En,[n("span",null,[l(o,{icon:"iconfont icon-file"}),_n])])]),l(c,r(u({title:"configure-git.ps1",desc:"Sets up the Git user configuration.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/configure-git.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),xn,l(p,{id:"148",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Dn]),tab1:a(({value:e,isActive:t})=>[An,Rn]),tab2:a(({value:e,isActive:t})=>[Nn]),_:1}),Tn,n("h2",Gn,[n("a",In,[n("span",null,[l(o,{icon:"iconfont icon-file"}),Wn])])]),l(c,r(u({title:"fetch-repo.ps1",desc:"Fetches updates for a Git repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/fetch-repo.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Fn,l(p,{id:"170",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ln]),tab1:a(({value:e,isActive:t})=>[Mn,On]),tab2:a(({value:e,isActive:t})=>[Vn]),_:1}),Bn,n("h2",zn,[n("a",qn,[n("span",null,[l(o,{icon:"iconfont icon-file"}),Hn])])]),l(c,r(u({title:"fetch-repos.ps1",desc:"Fetches updates for all Git repositories in a folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/fetch-repos.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Kn,l(p,{id:"192",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Yn]),tab1:a(({value:e,isActive:t})=>[Xn,Un]),tab2:a(({value:e,isActive:t})=>[jn]),_:1}),Qn,n("h2",Jn,[n("a",Zn,[n("span",null,[l(o,{icon:"iconfont icon-file"}),ns])])]),l(c,r(u({title:"list-branches.ps1",desc:"Lists all branches in a Git repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-branches.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ss,l(p,{id:"214",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[as]),tab1:a(({value:e,isActive:t})=>[es,ts]),tab2:a(({value:e,isActive:t})=>[ls]),_:1}),os,n("h2",is,[n("a",cs,[n("span",null,[l(o,{icon:"iconfont icon-file"}),ps])])]),l(c,r(u({title:"list-commits.ps1",desc:"Lists all commits in a Git repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-commits.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),rs,l(p,{id:"236",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[us]),tab1:a(({value:e,isActive:t})=>[ks,ds]),tab2:a(({value:e,isActive:t})=>[ms]),_:1}),bs,n("h2",vs,[n("a",hs,[n("span",null,[l(o,{icon:"iconfont icon-file"}),gs])])]),l(c,r(u({title:"list-latest-tag.ps1",desc:"Lists the latest tag on the current branch in a Git repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-latest.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),fs,l(p,{id:"258",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ws]),tab1:a(({value:e,isActive:t})=>[$s,ys]),tab2:a(({value:e,isActive:t})=>[Ss]),_:1}),Ps,n("h2",Cs,[n("a",Es,[n("span",null,[l(o,{icon:"iconfont icon-file"}),_s])])]),l(c,r(u({title:"list-latest-tags.ps1",desc:"Lists the latests tags in all Git repositories under a directory.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-latest.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),xs,l(p,{id:"280",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ds]),tab1:a(({value:e,isActive:t})=>[As,Rs]),tab2:a(({value:e,isActive:t})=>[Ns]),_:1}),Ts,n("h2",Gs,[n("a",Is,[n("span",null,[l(o,{icon:"iconfont icon-file"}),Ws])])]),l(c,r(u({title:"list-repos.ps1",desc:"Lists the Git repositories in a folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-repos.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Fs,l(p,{id:"302",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ls]),tab1:a(({value:e,isActive:t})=>[Ms,Os]),tab2:a(({value:e,isActive:t})=>[Vs]),_:1}),Bs,n("h2",zs,[n("a",qs,[n("span",null,[l(o,{icon:"iconfont icon-file"}),Hs])])]),l(c,r(u({title:"list-submodules.ps1",desc:"Lists the submodules in a Git repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-submodules.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ks,l(p,{id:"324",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ys]),tab1:a(({value:e,isActive:t})=>[Xs,Us]),tab2:a(({value:e,isActive:t})=>[js]),_:1}),Qs,n("h2",Js,[n("a",Zs,[n("span",null,[l(o,{icon:"iconfont icon-file"}),na])])]),l(c,r(u({title:"list-tags.ps1",desc:"Lists all tags in a Git repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/list-tags.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),sa,l(p,{id:"346",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[aa]),tab1:a(({value:e,isActive:t})=>[ea,ta]),tab2:a(({value:e,isActive:t})=>[la]),_:1}),oa,n("h2",ia,[n("a",ca,[n("span",null,[l(o,{icon:"iconfont icon-file"}),pa])])]),l(c,r(u({title:"new-branch.ps1",desc:"Creates a new branch in a Git repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/new-branch.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ra,l(p,{id:"368",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ua]),tab1:a(({value:e,isActive:t})=>[ka]),tab2:a(({value:e,isActive:t})=>[da]),_:1}),ma,n("h2",ba,[n("a",va,[n("span",null,[l(o,{icon:"iconfont icon-file"}),ha])])]),l(c,r(u({title:"new-tag.ps1",desc:"Creates a new tag in a Git repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/new-tag.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),ga,l(p,{id:"387",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[fa]),tab1:a(({value:e,isActive:t})=>[wa]),tab2:a(({value:e,isActive:t})=>[$a]),_:1}),ya,n("h2",Sa,[n("a",Pa,[n("span",null,[l(o,{icon:"iconfont icon-file"}),Ca])])]),l(c,r(u({title:"pick-commit.ps1",desc:"Cherry-picks a Git commit into multiple branches.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/pick-commit.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ea,_a,l(p,{id:"411",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[xa]),tab1:a(({value:e,isActive:t})=>[Da]),tab2:a(({value:e,isActive:t})=>[Aa]),_:1}),Ra,n("h2",Na,[n("a",Ta,[n("span",null,[l(o,{icon:"iconfont icon-file"}),Ga])])]),l(c,r(u({title:"pull-repo.ps1",desc:"Pulls updates for a Git repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/pull-repo.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Ia,l(p,{id:"430",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Wa]),tab1:a(({value:e,isActive:t})=>[Fa]),tab2:a(({value:e,isActive:t})=>[La]),_:1}),Ma,n("h2",Oa,[n("a",Va,[n("span",null,[l(o,{icon:"iconfont icon-file"}),Ba])])]),l(c,r(u({title:"pull-repos.ps1",desc:"Pulls updates for all Git repositories in a folder.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/pull-repos.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),za,l(p,{id:"449",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[qa]),tab1:a(({value:e,isActive:t})=>[Ha]),tab2:a(({value:e,isActive:t})=>[Ka]),_:1}),Ya,n("h2",Xa,[n("a",Ua,[n("span",null,[l(o,{icon:"iconfont icon-file"}),ja])])]),l(c,r(u({title:"remove-tag.ps1",desc:"Removes a tag in a Git repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/remove-tag.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Qa,l(p,{id:"468",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[Ja]),tab1:a(({value:e,isActive:t})=>[Za]),tab2:a(({value:e,isActive:t})=>[ne]),_:1}),se,n("h2",ae,[n("a",ee,[n("span",null,[l(o,{icon:"iconfont icon-file"}),te])])]),l(c,r(u({title:"switch-branch.ps1",desc:"Switches the branch in a Git repository.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/switch-branch.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),le,l(p,{id:"487",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[oe]),tab1:a(({value:e,isActive:t})=>[ie]),tab2:a(({value:e,isActive:t})=>[ce]),_:1}),pe,n("h2",re,[n("a",ue,[n("span",null,[l(o,{icon:"iconfont icon-file"}),ke])])]),l(c,r(u({title:"sync-repo.ps1",desc:"Synchronizes a Git repository by pull & push.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/sync-repo.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),de,l(p,{id:"506",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[me]),tab1:a(({value:e,isActive:t})=>[be]),tab2:a(({value:e,isActive:t})=>[ve]),_:1}),he,l(m)])}const ye=b(f,[["render",ge],["__file","scripts-for-git.html.vue"]]),Se=JSON.parse('{"path":"/g4e/cli-pwsh/scripts-for-git.html","title":"Scripts for Git","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Scripts for Git","description":"Powershell > Scripts for Git","icon":"iconfont icon-git","category":["Powershell","Git"],"tag":["powershell","pwsh","windows","script","useful-script"]},"headers":[{"level":2,"title":"build-repo.ps1","slug":"build-repo-ps1","link":"#build-repo-ps1","children":[]},{"level":2,"title":"build-repos.ps1","slug":"build-repos-ps1","link":"#build-repos-ps1","children":[]},{"level":2,"title":"check-repo.ps1","slug":"check-repo-ps1","link":"#check-repo-ps1","children":[]},{"level":2,"title":"clean-repo.ps1","slug":"clean-repo-ps1","link":"#clean-repo-ps1","children":[]},{"level":2,"title":"clean-repos.ps1","slug":"clean-repos-ps1","link":"#clean-repos-ps1","children":[]},{"level":2,"title":"clone-repos.ps1","slug":"clone-repos-ps1","link":"#clone-repos-ps1","children":[]},{"level":2,"title":"configure-git.ps1","slug":"configure-git-ps1","link":"#configure-git-ps1","children":[]},{"level":2,"title":"fetch-repo.ps1","slug":"fetch-repo-ps1","link":"#fetch-repo-ps1","children":[]},{"level":2,"title":"fetch-repos.ps1","slug":"fetch-repos-ps1","link":"#fetch-repos-ps1","children":[]},{"level":2,"title":"list-branches.ps1","slug":"list-branches-ps1","link":"#list-branches-ps1","children":[]},{"level":2,"title":"list-commits.ps1","slug":"list-commits-ps1","link":"#list-commits-ps1","children":[]},{"level":2,"title":"list-latest-tag.ps1","slug":"list-latest-tag-ps1","link":"#list-latest-tag-ps1","children":[]},{"level":2,"title":"list-latest-tags.ps1","slug":"list-latest-tags-ps1","link":"#list-latest-tags-ps1","children":[]},{"level":2,"title":"list-repos.ps1","slug":"list-repos-ps1","link":"#list-repos-ps1","children":[]},{"level":2,"title":"list-submodules.ps1","slug":"list-submodules-ps1","link":"#list-submodules-ps1","children":[]},{"level":2,"title":"list-tags.ps1","slug":"list-tags-ps1","link":"#list-tags-ps1","children":[]},{"level":2,"title":"new-branch.ps1","slug":"new-branch-ps1","link":"#new-branch-ps1","children":[]},{"level":2,"title":"new-tag.ps1","slug":"new-tag-ps1","link":"#new-tag-ps1","children":[]},{"level":2,"title":"pick-commit.ps1","slug":"pick-commit-ps1","link":"#pick-commit-ps1","children":[]},{"level":2,"title":"pull-repo.ps1","slug":"pull-repo-ps1","link":"#pull-repo-ps1","children":[]},{"level":2,"title":"pull-repos.ps1","slug":"pull-repos-ps1","link":"#pull-repos-ps1","children":[]},{"level":2,"title":"remove-tag.ps1","slug":"remove-tag-ps1","link":"#remove-tag-ps1","children":[]},{"level":2,"title":"switch-branch.ps1","slug":"switch-branch-ps1","link":"#switch-branch-ps1","children":[]},{"level":2,"title":"sync-repo.ps1","slug":"sync-repo-ps1","link":"#sync-repo-ps1","children":[]}],"git":{},"readingTime":{"minutes":31.63,"words":9489},"filePathRelative":"g4e/cli-pwsh/scripts-for-git.md","excerpt":"\\n\\n<hr>\\n<h2></h2>\\n"}');export{ye as comp,Se as data};
