# Git
<br>

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

`git config` without any scope option (--local, --global, or --system), it defaults to the --local scope
<br/>
<br/>




## Git - two ways to create a repository<br/>
`git init myProject` - Create an empty Git repository or reinitialize an existing one<br/> 
`git clone https://github.com/user/repo.git` - Clone a repository into a new directory<br/> 
`git clone https://github.com/user/repo.git new_Name_project` - Clone a repository into a new custom directory<br/> 





## Common<br/>
`git status`

indexed changes or to start tracking a new file (add version control)
`git add file.txt`
`git add . `
`git add *.js`

`git commit -m 'add'`
`git commit -a -m 'Add new feature'` -a like `git add .`

`git log`
`git log --oneline`
`git log --graph`




## Branch<br/>
`git branch new-feature`
`git checkout new-feature` or `git switch new-feature`
`git checkout -b new-feature`
### Rename local branch
`git switch old-branch-name`
`git branch -m new-branch-name`
or
`git branch -m old-branch-name new-branch-name`
### Rename remote branch
`git push origin -u new-branch-name`
`git push origin --delete old-branch-name`




## Merge<br/>
`git checkout main` or `git switch main`
`git merge new-feature`
del anymore unnecessary branch
`git branch -d new-feature`





## Remote<br/>
`git remote add origin https://github.com/user/repo.git`
`git push -u origin` - first push
`git push` - other pushes

`git pull origin main` - pull = fetch + Merge
`git fetch` - only fetch without merge




## Cancellation
### Last commit change<br/>
`git add .` add new changes to index
`git commit --amend` - Last local commit change without making new commit. Like a merge new changes with previous commit. In fact behind the scene - replacing<br/>
[ --no-edit] - option for current comment name stay as it was (when only add forgotten file needed)<br/>
under hood git run `git reset`
without new `git add .` --amend change only text about current commit

### Reset
after `git add .`
to except from current index accidentally added file
use "git reset HEAD <file>..." to unstage)
`git reset HEAD <file>...` - without changes inside local file, just unstage






## Difference
`git diff`
`git diff --staged` show changes that have been indexed
--staged or --cached the same





## File delete
`git rm`
`git rm -f`
`git rm --cached LOCAL_LOGS.md` - remove file from Git repository, but left at local machine dir





## File rename or move to other dir
`git mv file_from file_to`
`git mv file_from new_dir/file_to` move from the current terminal directory to new path,
`git mv inner_dir all_dir/inner_dir` can move dirs




## HEAD 
by default HEAD linked to current branch
but 
`git checkout 754someHash552` 
switch HEAD to target commit




### switch HEAD by relative links
^ - one commit higher
~<num> - some commits higher
`git checkout main^^` - 2 commitch higher than current main commit
`git checkout HEAD^` + `git checkout HEAD^` + `git checkout HEAD^`  - steps to higher commits

`git branch -f targetBranch HEAD~3` - forcing link target branch to main previous commit




## VIM tips
Esc key -> "Normal mode". Can type : to enter "Command-line mode". A colon (:) will appear at the bottom of the screen and you can type commands. To execute a command, press the Enter.
:help

:x to write and quit; or ZZ; like :wq but writes only if modified (short :exit)
:wq to write and quit
:wq! to write and quit, attempting to force the write if the file lacks write permission
:q to quit (short for :quit)
:q!; ZQ; to quit without saving (short for :quit!)
:qa to quit all (short for :quitall)
:cq to quit, without saving, with a nonzero exit code to indicate failure (short for :cquit)


## Useful links
[Git How To](https://githowto.com/ru)<br/>
[LearnGitBranching](https://learngitbranching.js.org/)<br/>
[HABR about REBASE](https://habr.com/ru/articles/161009/)<br/>
[Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)<br/>
[Работаем с Git 1: первые шаги в GitHub](https://habr.com/ru/companies/yandex_praktikum/articles/700708/)<br/>
[Работаем с Git 2: трудовые будни](https://habr.com/ru/companies/yandex_praktikum/articles/728302/)
[Git. Руководство по оформлению веток и коммитов](https://habr.com/ru/articles/820547/)
[30 команд Git](https://habr.com/ru/companies/ruvds/articles/599929/)