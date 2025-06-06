# Git<br/>
<br/>

## Git \--help  
```
usage: 
git [-v | --version] [-h | --help] [-C <path>] [-c<name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--super-prefix=<path>] [--config-env=<name>=<envvar>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects

my custom tips, not from Git --help
   config    [--local | --global] Git Settings 
``` 
<br/>

`git help push` - detailed info about `push` command

<br/>
<br/>

## Git config<br/>
`git config --list` - info about user<br/>
`git config --global user.name "Global Name"` - set Name Globally<br/> 
`git config --local user.name "Global Name"` - set Name Locally<br/>
`git config --global user.email "email"` - set Email Globally<br/>
`git config --global init.defaultBranch main` - rename master default branch name to main<br/>
<br/>

`git config --global core.autocrlf input` - line end setting(Unix/Mac)<br/>
`git config --global core.autocrlf true` - line end setting(Windows)<br/>
`git config --global core.safecrlf warn` - line end setting<br/>

<br/>
<br/>

## Git start<br/>
`git init` - Create an empty Git repository or reinitialize an existing one<br/> 
`git clone` - Clone a repository into a new directory<br/> 


## Last commit change<br/>
`git commit --amend` - Last local commit change without making new commit<br/>
[ --no-edit] - option for current comment name stay as it was (when only add forgotten file needed)<br/>
under hood git run `git reset`





## Useful links
[Git How To](https://githowto.com/ru)<br/>
[LearnGitBranching](https://learngitbranching.js.org/)<br/>
[HABR about REBASE](https://habr.com/ru/articles/161009/)<br/>
[Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)<br/>
[Работаем с Git 1: первые шаги в GitHub](https://habr.com/ru/companies/yandex_praktikum/articles/700708/)<br/>
[Работаем с Git 2: трудовые будни](https://habr.com/ru/companies/yandex_praktikum/articles/728302/)
[Git. Руководство по оформлению веток и коммитов](https://habr.com/ru/articles/820547/)
[30 команд Git](https://habr.com/ru/companies/ruvds/articles/599929/)