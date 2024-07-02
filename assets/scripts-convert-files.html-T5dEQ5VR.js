import{_ as v}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as k,o as m,c as b,a as n,t as h,b as l,w as a,n as r,g as u,d as s}from"./app-CtVGPIIl.js";const g={},f={id:"frontmatter-title-관련",tabindex:"-1"},w={class:"header-anchor",href:"#frontmatter-title-관련"},S={class:"table-of-contents"},$=n("hr",null,null,-1),P={id:"convert-csv2txt-ps1",tabindex:"-1"},y={class:"header-anchor",href:"#convert-csv2txt-ps1"},A=n("code",null,"convert-csv2txt.ps1",-1),_=n("p",null,[s("This PowerShell script converts a "),n("code",null,".CSV"),s(" file into a text file and prints it.")],-1),x=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("convert-csv2txt"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Path"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Path <String>
    Specifies the path to the `),n("span",{class:"token punctuation"},"."),s(`CSV file
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("convert-csv2txt salaries"),n("span",{class:"token punctuation"},"."),s(`csv

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Converts a .CSV file into a text file
.DESCRIPTION
	This PowerShell script converts a .CSV file into a text file and prints it.
.PARAMETER Path
	Specifies the path to the .CSV file
.EXAMPLE
	PS> ./convert-csv2txt salaries.csv
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Path"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),s(),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Path"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter path to CSV file"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Table"),s(" = "),n("span",{class:"token function"},"Import-CSV"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Path"),s('"')]),s(),n("span",{class:"token operator"},"-"),s("header A"),n("span",{class:"token punctuation"},","),s("B"),n("span",{class:"token punctuation"},","),s("C"),n("span",{class:"token punctuation"},","),s("D"),n("span",{class:"token punctuation"},","),s("E"),n("span",{class:"token punctuation"},","),s("F"),n("span",{class:"token punctuation"},","),s("G"),n("span",{class:"token punctuation"},","),s(`H

	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),s(" in "),n("span",{class:"token variable"},"$Table"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"write-output"),s(),n("span",{class:"token string"},[s('"* '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("A"),n("span",{class:"token punctuation"},")")]),s(),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("B"),n("span",{class:"token punctuation"},")")]),s(),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("C"),n("span",{class:"token punctuation"},")")]),s(),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("D"),n("span",{class:"token punctuation"},")")]),s(),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("E"),n("span",{class:"token punctuation"},")")]),s(),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("F"),n("span",{class:"token punctuation"},")")]),s(),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("G"),n("span",{class:"token punctuation"},")")]),s(),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Row"),n("span",{class:"token punctuation"},"."),s("H"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("hr",null,null,-1),T={id:"convert-mysql2csv-ps1",tabindex:"-1"},q={class:"header-anchor",href:"#convert-mysql2csv-ps1"},V=n("code",null,"convert-mysql2csv.ps1",-1),I=n("p",null,[s("This PowerShell script converts a MySQL database table to a "),n("code",null,".CSV"),s(" file.")],-1),N=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("convert-mysql2csv"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("server"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("database"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("username"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("password"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("query"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`server <String>
    Specifies the server's hostname or IP address
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`database <String>
    Specifies the database name
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`username <String>
    Specifies the user name
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`password <String>
    Specifies the password
    
    Required?                    false
    Position?                    4
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`query <String>
    Specifies the SQL query
    
    Required?                    false
    Position?                    5
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("convert-mysql2csv"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Convert a MySQL database table to a .CSV file
.DESCRIPTION
	This PowerShell script converts a MySQL database table to a .CSV file.
.PARAMETER server
	Specifies the server's hostname or IP address
.PARAMETER database
	Specifies the database name
.PARAMETER username
	Specifies the user name
.PARAMETER password
	Specifies the password
.PARAMETER query
	Specifies the SQL query
.EXAMPLE
	PS> ./convert-mysql2csv.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`


`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$server"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$database"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$username"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$password"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$query"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$server"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$server"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the hostname/IP address of the MySQL server"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$database"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$database"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the database name"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$username"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$username"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the database username"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$password"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$password"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the database user password"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$query"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$query"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the database query"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$csvfilepath"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('\\mysql_table.csv"')]),s(`
	`),n("span",{class:"token variable"},"$result"),s(" = "),n("span",{class:"token function"},"Invoke-MySqlQuery"),s("  "),n("span",{class:"token operator"},"-"),s("ConnectionString "),n("span",{class:"token string"},[s('"server='),n("span",{class:"token variable"},"$server"),s("; database="),n("span",{class:"token variable"},"$database"),s("; user="),n("span",{class:"token variable"},"$username"),s("; password="),n("span",{class:"token variable"},"$password"),s('; pooling = false; convert zero datetime=True"')]),s(),n("span",{class:"token operator"},"-"),s("Sql "),n("span",{class:"token variable"},"$query"),s(),n("span",{class:"token operator"},"-"),s(`CommandTimeout 10000
	`),n("span",{class:"token variable"},"$result"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Export-Csv"),s(),n("span",{class:"token variable"},"$csvfilepath"),s(),n("span",{class:"token operator"},"-"),s(`NoTypeInformation
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("hr",null,null,-1),M={id:"convert-ps2bat-ps1",tabindex:"-1"},F={class:"header-anchor",href:"#convert-ps2bat-ps1"},W=n("code",null,"convert-ps2bat.ps1",-1),z=n("p",null,"This PowerShell script converts one or more PowerShell scripts to .bat batch files.",-1),B=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("convert-ps2bat"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Filepattern"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Filepattern <String>
    Specifies the file pattern
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("convert-ps2bat"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token operator"},"*"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"#"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Converts PowerShell scripts to batch files
.DESCRIPTION
	This PowerShell script converts one or more PowerShell scripts to .bat batch files.
.PARAMETER Filepattern
	Specifies the file pattern
.EXAMPLE
	PS> ./convert-ps2bat.ps1 *.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Filepattern"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"Convert-PowerShellToBatch"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"param"),s(`
    `),n("span",{class:"token punctuation"},"("),s(`
        `),n("span",{class:"token namespace"},"[Parameter(Mandatory,ValueFromPipeline,ValueFromPipelineByPropertyName)]"),s(`
        `),n("span",{class:"token namespace"},"[string]"),s(`
        `),n("span",{class:"token punctuation"},"["),s("Alias"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"FullName"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token variable"},"$Path"),s(`
    `),n("span",{class:"token punctuation"},")"),s(`
 
    `),n("span",{class:"token keyword"},"process"),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token variable"},"$encoded"),s(" = "),n("span",{class:"token namespace"},"[Convert]"),s("::ToBase64String"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[System.Text.Encoding]"),s("::Unicode"),n("span",{class:"token punctuation"},"."),s("GetBytes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Content"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token variable"},"$Path"),s(),n("span",{class:"token operator"},"-"),s("Raw "),n("span",{class:"token operator"},"-"),s("Encoding UTF8"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token variable"},"$newPath"),s(" = "),n("span",{class:"token namespace"},"[Io.Path]"),s("::ChangeExtension"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Path"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'".bat"'),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token string"},[s('"@echo off`npowershell.exe -NoExit -encodedCommand '),n("span",{class:"token variable"},"$encoded"),s('"')]),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Set-Content"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token variable"},"$newPath"),s(),n("span",{class:"token operator"},"-"),s(`Encoding Ascii
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
 
`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Filepattern"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Filepattern"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter path to the PowerShell script(s)"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Files"),s(" = "),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Filepattern"),s('"')]),s(`
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$File"),s(" in "),n("span",{class:"token variable"},"$Files"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token function"},"Convert-PowerShellToBatch"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$File"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("hr",null,null,-1),H={id:"convert-ps2md-ps1",tabindex:"-1"},j={class:"header-anchor",href:"#convert-ps2md-ps1"},X=n("code",null,"convert-ps2md.ps1",-1),Y=n("p",null,"This PowerShell script converts the comment-based help of a PowerShell script to Markdown.",-1),U=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("convert-ps2md"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("filename"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`filename <String>
    Specifies the path to the PowerShell script
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("convert-ps2md"),n("span",{class:"token punctuation"},"."),s("ps1 myscript"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Z=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Converts a PowerShell script to Markdown
.DESCRIPTION
	This PowerShell script converts the comment-based help of a PowerShell script to Markdown.
.PARAMETER filename
	Specifies the path to the PowerShell script
.EXAMPLE
	PS> ./convert-ps2md.ps1 myscript.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$filename"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"function"),s(" EncodePartOfHtml "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Value"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Value"),s(),n("span",{class:"token operator"},"-replace"),s(),n("span",{class:"token string"},"'<'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'&lt;'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-replace"),s(),n("span",{class:"token string"},"'>'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'>'"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(" GetCode "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Example"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token variable"},"$codeAndRemarks"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Example"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Out-String"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-replace"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Example"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("split "),n("span",{class:"token string"},'"`r`n"'),s(`

    `),n("span",{class:"token variable"},"$code"),s(" = "),n("span",{class:"token function"},"New-Object"),s(),n("span",{class:"token string"},'"System.Collections.Generic.List[string]"'),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$i"),s(" = 0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"-lt"),s(),n("span",{class:"token variable"},"$codeAndRemarks"),n("span",{class:"token punctuation"},"."),s("Length"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$codeAndRemarks"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'DESCRIPTION'"),s(),n("span",{class:"token operator"},"-and"),s(),n("span",{class:"token variable"},"$codeAndRemarks"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"+"),s(" 1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"'-----------'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"break"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$codeAndRemarks"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"''"),s(),n("span",{class:"token operator"},"-and"),s(),n("span",{class:"token variable"},"$codeAndRemarks"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"+"),s(" 1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("1 "),n("span",{class:"token operator"},"-le"),s(),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"-and"),s(),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"-le"),s(" 2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"continue"),s(),n("span",{class:"token punctuation"},"}"),s(`
    	`),n("span",{class:"token variable"},"$codeAndRemarks"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$i"),n("span",{class:"token punctuation"},"]"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$codeAndRemarks"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Out-String"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-replace"),s(),n("span",{class:"token string"},'"PS>"'),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},'"PS> "'),s(`
        `),n("span",{class:"token variable"},"$code"),n("span",{class:"token punctuation"},"."),s("Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$codeAndRemarks"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token variable"},"$code"),s(),n("span",{class:"token operator"},"-join"),s(),n("span",{class:"token string"},'"`r`n"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"function"),s(" GetRemark "),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Example"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token variable"},"$codeAndRemarks"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Example"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Out-String"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-replace"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Example"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("split "),n("span",{class:"token string"},'"`r`n"'),s(`

    `),n("span",{class:"token variable"},"$isSkipped"),s(" = "),n("span",{class:"token boolean"},"$false"),s(`
    `),n("span",{class:"token variable"},"$remark"),s(" = "),n("span",{class:"token function"},"New-Object"),s(),n("span",{class:"token string"},'"System.Collections.Generic.List[string]"'),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$i"),s(" = 0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"-lt"),s(),n("span",{class:"token variable"},"$codeAndRemarks"),n("span",{class:"token punctuation"},"."),s("Length"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),n("span",{class:"token variable"},"$isSkipped"),s(),n("span",{class:"token operator"},"-and"),s(),n("span",{class:"token variable"},"$codeAndRemarks"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"-"),s(" 2"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},"'DESCRIPTION'"),s(),n("span",{class:"token operator"},"-and"),s(),n("span",{class:"token variable"},"$codeAndRemarks"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"-"),s(" 1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},"'-----------'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"continue"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token variable"},"$isSkipped"),s(" = "),n("span",{class:"token boolean"},"$true"),s(`
        `),n("span",{class:"token variable"},"$remark"),n("span",{class:"token punctuation"},"."),s("Add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$codeAndRemarks"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token variable"},"$remark"),s(),n("span",{class:"token operator"},"-join"),s(),n("span",{class:"token string"},'"`r`n"'),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$filename"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$filename"),s(" = "),n("span",{class:"token function"},"Read-Host"),s(),n("span",{class:"token string"},'"Enter path to PowerShell script"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token variable"},"$ScriptName"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Get-Item"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$filename"),s('"')]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s(`Name

	`),n("span",{class:"token variable"},"$full"),s(" = "),n("span",{class:"token function"},"Get-Help"),s(),n("span",{class:"token variable"},"$filename"),s(),n("span",{class:"token operator"},"-"),s(`Full 

	`),n("span",{class:"token string"},[s('"*'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$ScriptName"),n("span",{class:"token punctuation"},")")]),s('*"')]),s(`
	`),n("span",{class:"token string"},'"================"'),s(`

	`),n("span",{class:"token variable"},"$Description"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$full"),n("span",{class:"token punctuation"},"."),s("description "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Out-String"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Description"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Description"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$full"),n("span",{class:"token punctuation"},"."),s("Synopsis"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token string"},'"Parameters"'),s(`
	`),n("span",{class:"token string"},'"----------"'),s(`
	`),n("span",{class:"token string"},'"``````powershell"'),s(`
	`),n("span",{class:"token variable"},"$Syntax"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$full"),n("span",{class:"token punctuation"},"."),s("syntax "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Out-String"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-replace"),s(),n("span",{class:"token string"},'"`r`n"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"`r`n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$Syntax"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Syntax"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Out-String"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-replace"),s(),n("span",{class:"token string"},'"/home/mf/Repos/PowerShell/Scripts/"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"PS> ./"'),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Syntax"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Syntax"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$parameter"),s(" in "),n("span",{class:"token variable"},"$full"),n("span",{class:"token punctuation"},"."),s("parameters"),n("span",{class:"token punctuation"},"."),s("parameter"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$parameter"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Out-String"),n("span",{class:"token punctuation"},")")]),s('.Trim() -split "')]),s("`r`n"),n("span",{class:"token string"},[s('")[-5..-1] | % { '),n("span",{class:"token variable"},"$_"),s('.Trim() }) -join "')]),s("`r`n"),n("span",{class:"token string"},'")"'),s(`
		`),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"[<CommonParameters>]"'),s(`
	`),n("span",{class:"token string"},'"    This script supports the common parameters: Verbose, Debug, ErrorAction, ErrorVariable, WarningAction, "'),s(`
	`),n("span",{class:"token string"},'"    WarningVariable, OutBuffer, PipelineVariable, and OutVariable."'),s(`
	`),n("span",{class:"token string"},'"``````"'),s(`

	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$input"),s(" in "),n("span",{class:"token variable"},"$full"),n("span",{class:"token punctuation"},"."),s("inputTypes"),n("span",{class:"token punctuation"},"."),s("inputType"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token string"},'"Inputs"'),s(`
		`),n("span",{class:"token string"},'"------"'),s(`
		`),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$input"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"type"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$output"),s(" in "),n("span",{class:"token variable"},"$full"),n("span",{class:"token punctuation"},"."),s("outputTypes"),n("span",{class:"token punctuation"},"."),s("outputType"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token string"},'"Outputs"'),s(`
		`),n("span",{class:"token string"},'"-------"'),s(`
		`),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$output"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"type"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$example"),s(" in "),n("span",{class:"token variable"},"$full"),n("span",{class:"token punctuation"},"."),s("examples"),n("span",{class:"token punctuation"},"."),s("example"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token string"},'"Example"'),s(`
		`),n("span",{class:"token string"},'"-------"'),s(`
		`),n("span",{class:"token string"},'"``````powershell"'),s(`
		`),n("span",{class:"token string"},[s('"'),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),s("GetCode "),n("span",{class:"token variable"},"$example"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
		`),n("span",{class:"token string"},'"``````"'),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Notes"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$full"),n("span",{class:"token punctuation"},"."),s("alertSet"),n("span",{class:"token punctuation"},"."),s("alert "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Out-String"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Notes"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token string"},'"Notes"'),s(`
		`),n("span",{class:"token string"},'"-----"'),s(`
		`),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Notes"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$Links"),s(" = "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$full"),n("span",{class:"token punctuation"},"."),s("relatedlinks "),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Out-String"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("Trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Links"),s(),n("span",{class:"token operator"},"-ne"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},'""'),s(`
		`),n("span",{class:"token string"},'"Related Links"'),s(`
		`),n("span",{class:"token string"},'"-------------"'),s(`
		`),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Links"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token string"},'"Script Content"'),s(`
	`),n("span",{class:"token string"},'"--------------"'),s(`
	`),n("span",{class:"token string"},'"``````powershell"'),s(`
	`),n("span",{class:"token variable"},"$Lines"),s(" = "),n("span",{class:"token function"},"Get-Content"),s(),n("span",{class:"token operator"},"-"),s("path "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$filename"),s('"')]),s(`
        `),n("span",{class:"token keyword"},"foreach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Line"),s(" in "),n("span",{class:"token variable"},"$Lines"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Line"),s('"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token string"},'"``````"'),s(`
	`),n("span",{class:"token string"},'""'),s(`
	`),n("span",{class:"token variable"},"$now"),s(" = "),n("span",{class:"token namespace"},"[datetime]"),s(`::Now
	`),n("span",{class:"token string"},[s('"*(generated by convert-ps2md.ps1 using the comment-based help of '),n("span",{class:"token variable"},"$ScriptName"),s(" as of "),n("span",{class:"token variable"},"$now"),s(')*"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
        `),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nn=n("hr",null,null,-1),sn={id:"convert-sql2csv-ps1",tabindex:"-1"},an={class:"header-anchor",href:"#convert-sql2csv-ps1"},en=n("code",null,"convert-sql2csv.ps1",-1),tn=n("p",null,[s("This PowerShell script converts a SQL database table to a "),n("code",null,".CSV"),s(" file.")],-1),ln=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("convert-sql2csv"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("server"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("database"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("username"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("password"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("query"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`server <String>
    Specifies the server's hostname or IP address
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`database <String>
    Specifies the database name
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`username <String>
    Specifies the user name
    
    Required?                    false
    Position?                    3
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`password <String>
    Specifies the password
    
    Required?                    false
    Position?                    4
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`query <String>
    Specifies the SQL query
    
    Required?                    false
    Position?                    5
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),cn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("convert-sql2csv"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),on=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Converts a SQL database table to a .CSV file
.DESCRIPTION
	This PowerShell script converts a SQL database table to a .CSV file.
.PARAMETER server
	Specifies the server's hostname or IP address
.PARAMETER database
	Specifies the database name
.PARAMETER username
	Specifies the user name
.PARAMETER password
	Specifies the password
.PARAMETER query
	Specifies the SQL query
.EXAMPLE
	PS> ./convert-sql2csv.ps1
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$server"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$database"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$username"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$password"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$query"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$server"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$server"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the hostname/IP address of the SQL server"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$database"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$database"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the database name"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$username"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$username"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the database username"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$password"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$password"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the database user password"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$query"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$query"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter the database query"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token variable"},"$secpasswd"),s(" = "),n("span",{class:"token function"},"ConvertTo-SecureString"),s(),n("span",{class:"token variable"},"$password"),s(),n("span",{class:"token operator"},"-"),s("AsPlainText "),n("span",{class:"token operator"},"-"),s(`Force
	`),n("span",{class:"token variable"},"$creds"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("Management"),n("span",{class:"token punctuation"},"."),s("Automation"),n("span",{class:"token punctuation"},"."),s("PSCredential "),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$username"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token variable"},"$secpasswd"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$csvfilepath"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('\\sqlserver_table.csv"')]),s(`
	`),n("span",{class:"token variable"},"$result"),s(" = "),n("span",{class:"token function"},"Invoke-SqlServerQuery"),s(),n("span",{class:"token operator"},"-"),s("Credential "),n("span",{class:"token variable"},"$creds"),s(),n("span",{class:"token operator"},"-"),s("ConnectionTimeout 10000 "),n("span",{class:"token operator"},"-"),s("Database "),n("span",{class:"token variable"},"$database"),s(),n("span",{class:"token operator"},"-"),s("Server "),n("span",{class:"token variable"},"$server"),s(),n("span",{class:"token operator"},"-"),s("Sql "),n("span",{class:"token variable"},"$query"),s(),n("span",{class:"token operator"},"-"),s(`CommandTimeout 10000
	`),n("span",{class:"token variable"},"$result"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Export-Csv"),s(),n("span",{class:"token variable"},"$csvfilepath"),s(),n("span",{class:"token operator"},"-"),s(`NoTypeInformation
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pn=n("hr",null,null,-1),rn={id:"convert-txt2wav-ps1",tabindex:"-1"},un={class:"header-anchor",href:"#convert-txt2wav-ps1"},kn=n("code",null,"convert-txt2wav.ps1",-1),dn=n("p",null,[s("This PowerShell script converts text to a "),n("code",null,".WAV"),s(" audio file.")],-1),vn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("convert-txt2wav"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("Text"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("WavFile"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`Text <String>
    Specifies the text to use
    
    Required?                    false
    Position?                    1
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`WavFile <String>
    Specifies the path to the resulting WAV file
    
    Required?                    false
    Position?                    2
    Default value                
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),mn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),s("convert-txt2wav"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token string"},'"Hello World"'),s(" spoken"),n("span",{class:"token punctuation"},"."),s(`wav
`),n("span",{class:"token comment"},"# "),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),bn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Converts text to a .WAV audio file
.DESCRIPTION
	This PowerShell script converts text to a .WAV audio file.
.PARAMETER text
	Specifies the text to use
.PARAMETER WavFile
	Specifies the path to the resulting WAV file
.EXAMPLE
	PS> ./convert-txt2wav.ps1 "Hello World" spoken.wav
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$Text"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$WavFile"),s(" = "),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Text"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Text"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter text to speak"'),s(),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$WavFile"),s(),n("span",{class:"token operator"},"-eq"),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$WavFile"),s(" = "),n("span",{class:"token function"},"read-host"),s(),n("span",{class:"token string"},'"Enter .WAV file to save to"'),s(),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token function"},"Add-Type"),s(),n("span",{class:"token operator"},"-"),s("AssemblyName System"),n("span",{class:"token punctuation"},"."),s(`Speech
	`),n("span",{class:"token variable"},"$SpeechSynthesizer"),s(" = "),n("span",{class:"token function"},"New-Object"),s(" System"),n("span",{class:"token punctuation"},"."),s("Speech"),n("span",{class:"token punctuation"},"."),s("Synthesis"),n("span",{class:"token punctuation"},"."),s(`SpeechSynthesizer
	`),n("span",{class:"token variable"},"$SpeechSynthesizer"),n("span",{class:"token punctuation"},"."),s("SetOutputToWaveFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$WavFile"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$SpeechSynthesizer"),n("span",{class:"token punctuation"},"."),s("Speak"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Text"),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token variable"},"$SpeechSynthesizer"),n("span",{class:"token punctuation"},"."),s("Dispose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),hn=n("hr",null,null,-1),gn={id:"export-to-manuals-ps1",tabindex:"-1"},fn={class:"header-anchor",href:"#export-to-manuals-ps1"},wn=n("code",null,"export-to-manuals.ps1",-1),Sn=n("p",null,"This PowerShell script exports the comment based help of all PowerShell scripts as manuals.",-1),$n=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"export-to"),n("span",{class:"token operator"},"-"),s("manuals"),n("span",{class:"token punctuation"},"."),s("ps1 "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("FilePattern"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"-"),s("TargetDir"),n("span",{class:"token punctuation"},"]"),s(" <String>"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`

`),n("span",{class:"token operator"},"-"),s(`FilePattern <String>
    
    Required?                    false
    Position?                    1
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/*.ps1"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token operator"},"-"),s(`TargetDir <String>
    
    Required?                    false
    Position?                    2
    Default value                `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/../Docs"')]),s(`
    Accept pipeline input?       false
    Accept wildcard characters?  false

`),n("span",{class:"token punctuation"},"["),s("<CommonParameters>"),n("span",{class:"token punctuation"},"]"),s(`
    This script supports the common parameters: Verbose`),n("span",{class:"token punctuation"},","),s(" Debug"),n("span",{class:"token punctuation"},","),s(" ErrorAction"),n("span",{class:"token punctuation"},","),s(" ErrorVariable"),n("span",{class:"token punctuation"},","),s(" WarningAction"),n("span",{class:"token punctuation"},","),s(` 
    WarningVariable`),n("span",{class:"token punctuation"},","),s(" OutBuffer"),n("span",{class:"token punctuation"},","),s(" PipelineVariable"),n("span",{class:"token punctuation"},","),s(" and OutVariable"),n("span",{class:"token punctuation"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Pn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"PS"),s("> "),n("span",{class:"token punctuation"},"."),n("span",{class:"token operator"},"/"),n("span",{class:"token function"},"export-to"),n("span",{class:"token operator"},"-"),s("manuals"),n("span",{class:"token punctuation"},"."),s(`ps1
`),n("span",{class:"token comment"},"# ⏳ (1/2) Reading PowerShell scripts from /home/mf/PowerShell/Scripts/*.ps1 ... "),s(`
`),n("span",{class:"token comment"},"# ⏳ (2/2) Exporting Markdown manuals to /home/mf/PowerShell/Scripts/../Docs ..."),s(`
`),n("span",{class:"token comment"},"# ✔️ Exported 518 Markdown manuals in 28 sec"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),yn=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},`<#
.SYNOPSIS
	Exports all scripts as manuals
.DESCRIPTION
	This PowerShell script exports the comment based help of all PowerShell scripts as manuals.
.EXAMPLE
	PS> ./export-to-manuals.ps1
	⏳ (1/2) Reading PowerShell scripts from /home/mf/PowerShell/Scripts/*.ps1 ... 
	⏳ (2/2) Exporting Markdown manuals to /home/mf/PowerShell/Scripts/../Docs ...
	✔️ Exported 518 Markdown manuals in 28 sec
.LINK
	https://github.com/fleschutz/PowerShell
.NOTES
	Author: Markus Fleschutz | License: CC0
#>`),s(`

`),n("span",{class:"token comment"},"#requires -version 2"),s(`

`),n("span",{class:"token keyword"},"param"),n("span",{class:"token punctuation"},"("),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$FilePattern"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/*.ps1"')]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[string]"),n("span",{class:"token variable"},"$TargetDir"),s(" = "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/../Docs"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token variable"},"$StopWatch"),s(" = "),n("span",{class:"token namespace"},"[system.diagnostics.stopwatch]"),s("::startNew"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`

	`),n("span",{class:"token string"},[s('"⏳ (1/2) Reading PowerShell scripts from '),n("span",{class:"token variable"},"$FilePattern"),s(' ..."')]),s(` 
	`),n("span",{class:"token variable"},"$Scripts"),s(" = "),n("span",{class:"token function"},"Get-ChildItem"),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$FilePattern"),s('"')]),s(`

	`),n("span",{class:"token string"},[s('"⏳ (2/2) Exporting Markdown manuals to '),n("span",{class:"token variable"},"$TargetDir"),s(' ..."')]),s(`
	`),n("span",{class:"token keyword"},"foreach"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Script"),s(" in "),n("span",{class:"token variable"},"$Scripts"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		& `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$PSScriptRoot"),s('/convert-ps2md.ps1"')]),s(),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$Script"),s('"')]),s(" > "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$TargetDir"),s("/"),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Script"),n("span",{class:"token punctuation"},"."),s("BaseName"),n("span",{class:"token punctuation"},")")]),s('.md"')]),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token namespace"},"[int]"),n("span",{class:"token variable"},"$Elapsed"),s(" = "),n("span",{class:"token variable"},"$StopWatch"),n("span",{class:"token punctuation"},"."),s("Elapsed"),n("span",{class:"token punctuation"},"."),s(`TotalSeconds
	`),n("span",{class:"token string"},[s('"✔️ Exported '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Scripts"),n("span",{class:"token punctuation"},"."),s("Count"),n("span",{class:"token punctuation"},")")]),s(" Markdown manuals in "),n("span",{class:"token variable"},"$Elapsed"),s(' sec"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(" 0 "),n("span",{class:"token comment"},"# success"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token string"},[s('"⚠️ Error in line '),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$_"),n("span",{class:"token punctuation"},"."),s("InvocationInfo"),n("span",{class:"token punctuation"},"."),s("ScriptLineNumber"),n("span",{class:"token punctuation"},")")]),s(": "),n("span",{class:"token function"},[s("$"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$Error"),n("span",{class:"token punctuation"},"["),s("0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")")]),s('"')]),s(`
	`),n("span",{class:"token keyword"},"exit"),s(` 1
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),An=n("hr",null,null,-1);function _n(d,xn){const c=k("FontIcon"),o=k("router-link"),i=k("VPCard"),p=k("Tabs");return m(),b("div",null,[n("h1",f,[n("a",w,[n("span",null,h(d.$frontmatter.title)+" 관련",1)])]),n("nav",S,[n("ul",null,[n("li",null,[l(o,{to:"#convert-csv2txt-ps1"},{default:a(()=>[l(c,{icon:"iconfont icon-powershell"}),s("convert-csv2txt.ps1")]),_:1})]),n("li",null,[l(o,{to:"#convert-mysql2csv-ps1"},{default:a(()=>[l(c,{icon:"iconfont icon-powershell"}),s("convert-mysql2csv.ps1")]),_:1})]),n("li",null,[l(o,{to:"#convert-ps2bat-ps1"},{default:a(()=>[l(c,{icon:"iconfont icon-powershell"}),s("convert-ps2bat.ps1")]),_:1})]),n("li",null,[l(o,{to:"#convert-ps2md-ps1"},{default:a(()=>[l(c,{icon:"iconfont icon-powershell"}),s("convert-ps2md.ps1")]),_:1})]),n("li",null,[l(o,{to:"#convert-sql2csv-ps1"},{default:a(()=>[l(c,{icon:"iconfont icon-powershell"}),s("convert-sql2csv.ps1")]),_:1})]),n("li",null,[l(o,{to:"#convert-txt2wav-ps1"},{default:a(()=>[l(c,{icon:"iconfont icon-powershell"}),s("convert-txt2wav.ps1")]),_:1})]),n("li",null,[l(o,{to:"#export-to-manuals-ps1"},{default:a(()=>[l(c,{icon:"iconfont icon-powershell"}),s("export-to-manuals.ps1")]),_:1})])])]),$,n("h2",P,[n("a",y,[n("span",null,[l(c,{icon:"iconfont icon-powershell"}),A])])]),l(i,r(u({title:"convert-csv2txt.ps1",desc:"Converts a .CSV file to a text file.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/convert-csv2txt.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),_,l(p,{id:"14",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[x]),tab1:a(({value:e,isActive:t})=>[E]),tab2:a(({value:e,isActive:t})=>[C]),_:1}),R,n("h2",T,[n("a",q,[n("span",null,[l(c,{icon:"iconfont icon-powershell"}),V])])]),l(i,r(u({title:"convert-mysql2csv.ps1",desc:"Converts a MySQL database table to a .CSV file.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/convert-mysql2csv.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10,10,10,0.2)"})),null,16),I,l(p,{id:"33",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[N]),tab1:a(({value:e,isActive:t})=>[D]),tab2:a(({value:e,isActive:t})=>[O]),_:1}),L,n("h2",M,[n("a",F,[n("span",null,[l(c,{icon:"iconfont icon-powershell"}),W])])]),l(i,r(u({title:"convert-ps2bat.ps1",desc:"Converts a PowerShell script to a Batch script.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/convert-ps2bat.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10,10,0.2)"})),null,16),z,l(p,{id:"52",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[B]),tab1:a(({value:e,isActive:t})=>[Q]),tab2:a(({value:e,isActive:t})=>[G]),_:1}),K,n("h2",H,[n("a",j,[n("span",null,[l(c,{icon:"iconfont icon-powershell"}),X])])]),l(i,r(u({title:"convert-ps2md.ps1",desc:"Converts the comment-based help of a PowerShell script to Markdown.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/convert-ps2md.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Y,l(p,{id:"71",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[U]),tab1:a(({value:e,isActive:t})=>[J]),tab2:a(({value:e,isActive:t})=>[Z]),_:1}),nn,n("h2",sn,[n("a",an,[n("span",null,[l(c,{icon:"iconfont icon-powershell"}),en])])]),l(i,r(u({title:"convert-sql2csv.ps1",desc:"Converts a SQL database table to a .CSV file.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/convert-sql2csv.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),tn,l(p,{id:"90",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[ln]),tab1:a(({value:e,isActive:t})=>[cn]),tab2:a(({value:e,isActive:t})=>[on]),_:1}),pn,n("h2",rn,[n("a",un,[n("span",null,[l(c,{icon:"iconfont icon-powershell"}),kn])])]),l(i,r(u({title:"convert-txt2wav.ps1",desc:"Converts text to a .WAV audio file.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/convert-txt2wav.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),dn,l(p,{id:"109",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[vn]),tab1:a(({value:e,isActive:t})=>[mn]),tab2:a(({value:e,isActive:t})=>[bn]),_:1}),hn,n("h2",gn,[n("a",fn,[n("span",null,[l(c,{icon:"iconfont icon-powershell"}),wn])])]),l(i,r(u({title:"export-to-manuals.ps1",desc:"Exports all scripts as manuals.",link:"https://github.com/fleschutz/PowerShell/blob/master/Docs/export-to-manuals.md",logo:"https://avatars.githubusercontent.com/u/16557787?v=4",background:"rgba(10, 10, 10, 0.2)"})),null,16),Sn,l(p,{id:"128",data:[{id:"Parameters"},{id:"Example"},{id:"Script Content"}],active:0},{title0:a(({value:e,isActive:t})=>[s("Parameters")]),title1:a(({value:e,isActive:t})=>[s("Example")]),title2:a(({value:e,isActive:t})=>[s("Script Content")]),tab0:a(({value:e,isActive:t})=>[$n]),tab1:a(({value:e,isActive:t})=>[Pn]),tab2:a(({value:e,isActive:t})=>[yn]),_:1}),An])}const Rn=v(g,[["render",_n],["__file","scripts-convert-files.html.vue"]]),Tn=JSON.parse('{"path":"/programming/pwsh/scripts-convert-files.html","title":"Scripts to Convert Files","lang":"ko-KR","frontmatter":{"lang":"ko-KR","title":"Scripts to Convert Files","description":"Powershell > Scripts to Convert Files","icon":"fas fa-recycle","category":["Powershell","Scripts to Convert Files"],"tag":["powershell","pwsh","windows","script","useful-script"]},"headers":[{"level":2,"title":"convert-csv2txt.ps1","slug":"convert-csv2txt-ps1","link":"#convert-csv2txt-ps1","children":[]},{"level":2,"title":"convert-mysql2csv.ps1","slug":"convert-mysql2csv-ps1","link":"#convert-mysql2csv-ps1","children":[]},{"level":2,"title":"convert-ps2bat.ps1","slug":"convert-ps2bat-ps1","link":"#convert-ps2bat-ps1","children":[]},{"level":2,"title":"convert-ps2md.ps1","slug":"convert-ps2md-ps1","link":"#convert-ps2md-ps1","children":[]},{"level":2,"title":"convert-sql2csv.ps1","slug":"convert-sql2csv-ps1","link":"#convert-sql2csv-ps1","children":[]},{"level":2,"title":"convert-txt2wav.ps1","slug":"convert-txt2wav-ps1","link":"#convert-txt2wav-ps1","children":[]},{"level":2,"title":"export-to-manuals.ps1","slug":"export-to-manuals-ps1","link":"#export-to-manuals-ps1","children":[]}],"git":{},"readingTime":{"minutes":7.4,"words":2219},"filePathRelative":"programming/pwsh/scripts-convert-files.md","excerpt":"\\n\\n<hr>\\n<h2></h2>\\n"}');export{Rn as comp,Tn as data};
